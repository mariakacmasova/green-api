import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { AccountServices } from '../../../services/accountServices';
import { ContactInfo } from '../../../services/accountServices/types';
import useStore from '../../../store';

export function useGetContactInfo(chatId: string) {
  const [contactInfo, setContactInfo] = useState<ContactInfo>();

  const { idInstance, apiTokenInstance } = useStore((store) => store);

  const { isLoading, mutateAsync } = useMutation(
    AccountServices.getContactInfo
  );

  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const response = await mutateAsync({
          idInstance,
          apiTokenInstance,
          chatId,
        });

        if (response) {
          setContactInfo(response);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getContactInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  return { contactInfo, isLoading };
}
