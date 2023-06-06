import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { IoMdSend } from 'react-icons/io';

import useStore from '../../../../store';
import { ChatServices } from '../../../../services/chatServices';
import { SendMessageFormValues } from '../../../../services/chatServices/types';
import { showErrorToast } from '../../../../helpers/showErrorToast';
import { showToastSuccess } from '../../../../helpers/showSuccessToast';
import Loader from '../../../Loader';
import { Button, Input, Wrapper } from './styles';

const Form = () => {
  const { register, handleSubmit, reset, watch } =
    useForm<Omit<SendMessageFormValues, 'chatId'>>();

  const { idInstance, apiTokenInstance, currentChat } = useStore(
    (store) => store
  );

  const { isLoading, mutateAsync } = useMutation(ChatServices.sendMessage, {
    onSuccess: () => showToastSuccess('Сообщение успешно отправлено!'),
  });

  const onSubmit: SubmitHandler<Omit<SendMessageFormValues, 'chatId'>> = async (
    data
  ) => {
    try {
      await mutateAsync({
        idInstance,
        apiTokenInstance,
        body: { chatId: currentChat, message: data.message },
      });
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      reset();
      showErrorToast(err?.data?.message || err?.message);
    }
  };

  const isBtnDisabled = isLoading || !watch('message');

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('message')}
        type="text"
        placeholder="Введите текст..."
      />
      <Button disabled={isBtnDisabled}>
        {isLoading ? <Loader size={20} /> : <IoMdSend />}
      </Button>
    </Wrapper>
  );
};

export default Form;
