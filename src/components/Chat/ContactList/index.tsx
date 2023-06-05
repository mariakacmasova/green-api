import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import useStore from '../../../store';
import NewChatModal from '../NewChatModal';
import ContactItem from './ContactItem';
import {
  AddNewChatBtn,
  ContactsStack,
  HeaderGroup,
  HeaderStack,
  HeaderTitle,
  Wrapper,
} from './styles';

const ContactList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { chatContacts } = useStore((store) => store);

  return (
    <>
      {isOpen && <NewChatModal onClose={() => setIsOpen(false)} />}
      <Wrapper>
        <HeaderStack>
          <HeaderGroup>
            <HeaderTitle>Чаты</HeaderTitle>
            <AddNewChatBtn onClick={() => setIsOpen(true)} type="button">
              <AiOutlinePlus />
            </AddNewChatBtn>
          </HeaderGroup>
        </HeaderStack>

        <ContactsStack>
          {chatContacts &&
            chatContacts.map((chatContact) => (
              <ContactItem key={chatContact.chatId} chatContact={chatContact} />
            ))}
        </ContactsStack>
      </Wrapper>
    </>
  );
};

export default ContactList;
