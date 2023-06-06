import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AiOutlineClose } from 'react-icons/ai';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import useStore from '../../../store';
import { AccountServices } from '../../../services/accountServices';
import { showErrorToast } from '../../../helpers/showErrorToast';
import Loader from '../../Loader';
import { FormButton, FormInputGroup, FormLabel } from '../../styles';
import {
  CloseButton,
  FormWrapper,
  InnerWrapper,
  SuccessMessage,
  Title,
  Wrapper,
} from './styles';

const NewChatModal = () => {
  const [value, setValue] = useState<string>('');

  const { idInstance, apiTokenInstance, setChatContact, setModal } = useStore(
    (store) => store
  );

  const { data, isLoading, isSuccess, mutateAsync } = useMutation(
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showErrorToast(err?.data?.message || err?.message);
    }
  };

  const closeModal = () => setModal(false);

  return (
    <Wrapper onClick={closeModal}>
      <InnerWrapper onClick={(event) => event.stopPropagation()}>
        <Title>Создать новый чат</Title>
        <CloseButton onClick={closeModal} type="button">
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
