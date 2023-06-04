import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import { AccountServices } from "../../../services/accountServices";
import Loader from "../../Loader";
import { ErrorMessage } from "../../styles";
import { useCheckAccount } from "./helpers/useCheckAccount";
import {
  BodyWrapper,
  Button,
  FormWrapper,
  HeaderGroup,
  Input,
  InputGroup,
  Label,
  WelcomeSubtitle,
  WelcomeTitle,
  Wrapper
} from "./styles"

export type FormValues = {
  idInstance: string,
  apiTokenInstance: string,
};

const Form = () => {
  const [account, setAccount] = useState<FormValues>({
    idInstance: '',
    apiTokenInstance: ''
  });
  const [accountError, setAccountError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const { data: response, isFetching, isError, error: responseError } = useQuery(
    ['account', account.apiTokenInstance, account.idInstance],
    () =>
      AccountServices.getStateInstance(account.idInstance, account.apiTokenInstance),
    {
      enabled: !!account.apiTokenInstance && !!account.idInstance
    }
  );

  const onSubmit: SubmitHandler<FormValues> = data => {
    setAccount(data);
    reset();
  };

  useCheckAccount(response, setAccountError, account, setAccount, isError);

  return (
    <>
      <Wrapper>
        <BodyWrapper>
          <HeaderGroup>
            <WelcomeTitle>Добро пожаловать !</WelcomeTitle>
            <WelcomeSubtitle>Войдите, чтобы продолжить.</WelcomeSubtitle>
          </HeaderGroup>

          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Label
                htmlFor="idInstance"
                $isError={!!errors.idInstance}
              >
                idInstance
              </Label>
              <Input
                {...register("idInstance", { required: true, minLength: 1 })}
                $isError={!!errors.idInstance}
                type="text"
                name="idInstance"
              />
              {errors.idInstance &&
                errors.idInstance.type === "required" &&
                <ErrorMessage>Это поле обязательно для заполнения</ErrorMessage>}
              {errors.idInstance &&
                errors.idInstance.type === "minLength" &&
                <ErrorMessage>idInstance должно быть не меньше 1 символа</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <Label
                htmlFor="apiTokenInstance"
                $isError={!!errors.apiTokenInstance}
              >
                apiTokenInstance
              </Label>
              <Input
                {...register("apiTokenInstance", { required: true, minLength: 1 })}
                $isError={!!errors.apiTokenInstance}
                type="text"
                name="apiTokenInstance"
              />
              {errors.apiTokenInstance &&
                errors.apiTokenInstance.type === "required" &&
                <ErrorMessage>Это поле обязательно для заполнения</ErrorMessage>}
              {errors.apiTokenInstance &&
                errors.apiTokenInstance.type === "minLength" &&
                <ErrorMessage>apiTokenInstance должно быть не меньше 1 символа</ErrorMessage>}
            </InputGroup>
            <Button disabled={isFetching}>
              {isFetching ? <Loader size={20} /> : 'Войти'}
            </Button>
          </FormWrapper>
        </BodyWrapper>
      </Wrapper>
    </>
  )
}

export default Form