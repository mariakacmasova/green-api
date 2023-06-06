import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import useStore from '../../store';
import { AccountServices } from '../../services/accountServices';
import { showErrorToast } from '../showErrorToast';

export function useSetCurrentUser() {
  const { idInstance, apiTokenInstance, setCurrentUser } = useStore(
    (store) => store
  );

  const { data: user } = useQuery(
    ['user-settings', idInstance, apiTokenInstance],
    () => AccountServices.getUserSettings(idInstance, apiTokenInstance),
    {
      enabled: !!apiTokenInstance && !!idInstance,
    }
  );

  const { mutateAsync } = useMutation(AccountServices.getContactInfo);

  useEffect(() => {
    const getContactInfo = async () => {
      if (!user) return;

      try {
        const response = await mutateAsync({
          idInstance,
          apiTokenInstance,
          chatId: user.wid,
        });

        if (response) {
          setCurrentUser(response);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        showErrorToast(err?.data?.message || err?.message);
      }
    };

    getContactInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
}
