import { useEffect, useRef } from 'react';
import { BiUserCircle } from 'react-icons/bi';

import { ContactInfo } from '../../../../services/accountServices/types';
import { ChatHistoryResponse } from '../../../../services/chatServices/types';
import useStore from '../../../../store';
import { Avatar, Group, Text, Wrapper } from './styles';

interface Props {
  chat: ChatHistoryResponse;
  sender: ContactInfo | undefined;
}

const Message = ({ chat, sender }: Props) => {
  const scrollRef = useRef<HTMLLIElement | null>(null);

  const { currentUser } = useStore((store) => store);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const messageSender = sender ? (
    <img src={sender.avatar} alt={sender.name} />
  ) : (
    <BiUserCircle />
  );

  const user = currentUser ? (
    <img src={currentUser.avatar} alt={currentUser.name} />
  ) : (
    <BiUserCircle />
  );

  return (
    <Wrapper ref={scrollRef} $isRight={!chat.senderId}>
      <Group>
        <Avatar $isRight={!chat.senderId}>
          {chat.senderId ? messageSender : user}
        </Avatar>
        {chat.textMessage ? (
          <Text $isRight={!chat.senderId}>{chat.textMessage}</Text>
        ) : (
          <Text $isRight={!chat.senderId}>
            {chat.extendedTextMessage?.text}
          </Text>
        )}
      </Group>
    </Wrapper>
  );
};

export default Message;
