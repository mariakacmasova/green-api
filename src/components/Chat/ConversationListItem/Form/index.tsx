import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { IoMdSend } from 'react-icons/io';

import useStore from '../../../../store';
import { ChatServices } from '../../../../services/chatServices';
import { SendMessageFormValues } from '../../../../services/chatServices/types';
import Loader from '../../../Loader';
import { Button, Input, Wrapper } from './styles';

const Form = () => {
  const { register, handleSubmit, reset, watch } =
    useForm<Omit<SendMessageFormValues, 'chatId'>>();

  const { idInstance, apiTokenInstance, currentChat } = useStore(
    (store) => store
  );

  const { isLoading, mutateAsync } = useMutation(ChatServices.sendMessage);

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
    } catch (err) {
      reset();
      console.log(err);
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
