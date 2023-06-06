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
  const { chatContacts, isModalOpen, openModal } = useStore((store) => store);

  return (
    <>
      {isModalOpen && <NewChatModal />}
      <Wrapper>
        <HeaderStack>
          <HeaderGroup>
            <HeaderTitle>Чаты</HeaderTitle>
            <AddNewChatBtn onClick={openModal} type="button">
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
