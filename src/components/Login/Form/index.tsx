import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { AccountServices } from '../../../services/accountServices';
import Loader from '../../Loader';
import {
  ErrorMessage,
  FormButton,
  FormInput,
  FormInputGroup,
  FormLabel,
} from '../../styles';
import { useCheckAccount } from './helpers/useCheckAccount';
import {
  BodyWrapper,
  FormWrapper,
  HeaderGroup,
  WelcomeSubtitle,
  WelcomeTitle,
  Wrapper,
} from './styles';

export type FormValues = {
  idInstance: string;
  apiTokenInstance: string;
};

const Form = () => {
  const [account, setAccount] = useState<FormValues>({
    idInstance: '',
    apiTokenInstance: '',
  });
  const [accountError, setAccountError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const {
    data: response,
    isFetching,
    isError,
    error: responseError,
  } = useQuery(
    ['account', account.apiTokenInstance, account.idInstance],
    () =>
      AccountServices.getStateInstance(
        account.idInstance,
        account.apiTokenInstance
      ),
    {
      enabled: !!account.apiTokenInstance && !!account.idInstance,
    }
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setAccount(data);
    reset();
  };

  useCheckAccount(
    response,
    accountError,
    setAccountError,
    account,
    setAccount,
    isError,
    responseError
  );

  return (
    <Wrapper>
      <BodyWrapper>
        <HeaderGroup>
          <WelcomeTitle>Добро пожаловать !</WelcomeTitle>
          <WelcomeSubtitle>Войдите, чтобы продолжить.</WelcomeSubtitle>
        </HeaderGroup>

        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormInputGroup>
            <FormLabel htmlFor="idInstance" $isError={!!errors.idInstance}>
              idInstance
            </FormLabel>
            <FormInput
              {...register('idInstance', { required: true, minLength: 1 })}
              $isError={!!errors.idInstance}
              type="text"
              name="idInstance"
            />
            {errors.idInstance && errors.idInstance.type === 'required' && (
              <ErrorMessage>Это поле обязательно для заполнения</ErrorMessage>
            )}
            {errors.idInstance && errors.idInstance.type === 'minLength' && (
              <ErrorMessage>
                idInstance должно быть не меньше 1 символа
              </ErrorMessage>
            )}
          </FormInputGroup>
          <FormInputGroup>
            <FormLabel
              htmlFor="apiTokenInstance"
              $isError={!!errors.apiTokenInstance}
            >
              apiTokenInstance
            </FormLabel>
            <FormInput
              {...register('apiTokenInstance', {
                required: true,
                minLength: 1,
              })}
              $isError={!!errors.apiTokenInstance}
              type="text"
              name="apiTokenInstance"
            />
            {errors.apiTokenInstance &&
              errors.apiTokenInstance.type === 'required' && (
                <ErrorMessage>Это поле обязательно для заполнения</ErrorMessage>
              )}
            {errors.apiTokenInstance &&
              errors.apiTokenInstance.type === 'minLength' && (
                <ErrorMessage>
                  apiTokenInstance должно быть не меньше 1 символа
                </ErrorMessage>
              )}
          </FormInputGroup>
          <FormButton disabled={isFetching}>
            {isFetching ? <Loader size={20} /> : 'Войти'}
          </FormButton>
        </FormWrapper>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Form;
