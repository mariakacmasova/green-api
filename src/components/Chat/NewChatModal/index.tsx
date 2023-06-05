import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AiOutlineClose } from 'react-icons/ai';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { AccountServices } from '../../../services/accountServices';
import useStore from '../../../store';
import Loader from '../../Loader';
import {
  ErrorMessage,
  FormButton,
  FormInputGroup,
  FormLabel,
} from '../../styles';
import {
  CloseButton,
  FormWrapper,
  InnerWrapper,
  SuccessMessage,
  Title,
  Wrapper,
} from './styles';

interface Props {
  onClose: () => void;
}

const NewChatModal = ({ onClose }: Props) => {
  const [value, setValue] = useState<string>('');

  const { idInstance, apiTokenInstance, setChatContact } = useStore(
    (store) => store
  );

  const { data, isLoading, isSuccess, error, mutateAsync } = useMutation(
    AccountServices.checkWhatsAppAvailability
  );

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement> | undefined
  ) => {
    event?.preventDefault();

    try {
      const response = await mutateAsync({
        idInstance,
        apiTokenInstance,
        phone: Number(value),
      });

      if (response.existsWhatsapp) {
        setChatContact({ chatId: `${value}@c.us`, phone: Number(value) });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper onClick={onClose}>
      <InnerWrapper onClick={(event) => event.stopPropagation()}>
        <Title>Создать новый чат</Title>
        <CloseButton onClick={onClose} type="button">
          <AiOutlineClose />
        </CloseButton>
        {!isSuccess ? (
          <FormWrapper onSubmit={handleSubmit}>
            <FormInputGroup>
              <FormLabel>Номер телефона</FormLabel>
              <PhoneInput
                placeholder="Номер телефона"
                country="ru"
                value={value}
                onChange={setValue}
              />
              {/* {errors.phone && errors.phone.type === 'required' && (
              <ErrorMessage>Это поле обязательно для заполнения</ErrorMessage>
            )}
            {errors.phone && errors.phone.type === 'minLength' && (
              <ErrorMessage>
                Номер телефона должен быть не меньше 11 символов
              </ErrorMessage>
            )} */}
            </FormInputGroup>
            <FormButton>
              {isLoading ? <Loader size={20} /> : 'Создать'}
            </FormButton>
          </FormWrapper>
        ) : (
          <SuccessMessage>
            {data.existsWhatsapp
              ? 'Чат создан'
              : 'Пользователь с таким номером не существует!'}
          </SuccessMessage>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default NewChatModal;
