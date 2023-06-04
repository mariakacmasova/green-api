import { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormValues } from '..';
import { PATHS } from '../../../../constants/Paths';
import useStore from '../../../../store';
import { AccountStatuses } from '../../../../store/types';

const RESPONSE_MESSAGES = {
  NOT_AUTHORIZED: 'Аккаунт не авторизован. Для авторизации учетной записи см. раздел «Перед началом работы».',
  BLOCKED: 'Аккаунт заблокирован',
  SLEEP_MODE:
    'Аккаунт находится в спящем режиме. Состояние возможно при выключенном телефоне. После включения телефона может пройти до 5 минут, прежде чем статус учетной записи изменится на авторизованный.',
  STARTING:
    'Аккаунт находится в процессе запуска. Сервер или экземпляр в режиме обслуживания перезагружается. Изменение состояния учетной записи на авторизованное может занять до 5 минут.',
};

export function useCheckAccount(
  accountStatus: AccountStatuses | undefined,
  setAccountError: Dispatch<SetStateAction<string | null>>,
  account: FormValues,
  setAccount: Dispatch<SetStateAction<FormValues>>,
  isError: boolean
) {
  const navigate = useNavigate();

  const setCredentials = useStore((store) => store.setCredentials);

  const clearState = () => {
    setAccountError('');
    setAccount({ idInstance: '', apiTokenInstance: '' });
  };

  useEffect(() => {
    if (isError) {
      clearState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    const checkAccountStatus = (accountStatus: AccountStatuses | undefined) => {
      if (!accountStatus) return;

      if (accountStatus === AccountStatuses.AUTHORIZED) {
        setCredentials({
          idInstance: account.idInstance,
          apiTokenInstance: account.apiTokenInstance,
          isLoggedIn: true,
        });
        navigate(PATHS.CHAT);
        clearState();
      }

      switch (accountStatus) {
        case AccountStatuses.NOT_AUTHORIZED:
          setAccountError(RESPONSE_MESSAGES.NOT_AUTHORIZED);
          break;
        case AccountStatuses.BLOCKED:
          setAccountError(RESPONSE_MESSAGES.NOT_AUTHORIZED);
          break;
        case AccountStatuses.SLEEP_MODE:
          setAccountError(RESPONSE_MESSAGES.SLEEP_MODE);
          break;
        case AccountStatuses.STARTING:
          setAccountError(RESPONSE_MESSAGES.STARTING);
          break;
        default:
          clearState();
          break;
      }
    };

    checkAccountStatus(accountStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountStatus]);
}
