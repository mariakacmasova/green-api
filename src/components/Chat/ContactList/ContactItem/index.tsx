import { BiUserCircle } from 'react-icons/bi';

import useStore from '../../../../store';
import { ChatContact } from '../../../../store/types';
import { useGetContactInfo } from '../../helpers/useGetContactInfo';
import Loader from '../../../Loader';
import { ContactName, ImgWrapper, Wrapper } from './styles';

interface Props {
  chatContact: ChatContact;
}

const ContactItem = ({ chatContact }: Props) => {
  const { currentChat, setCurrentChat } = useStore((store) => store);

  const { contactInfo, isLoading } = useGetContactInfo(chatContact.chatId);

  return (
    <Wrapper
      onClick={() => setCurrentChat(chatContact.chatId)}
      $isActive={chatContact.chatId === currentChat}
    >
      {!isLoading && contactInfo ? (
        <>
          <ImgWrapper>
            {contactInfo.avatar ? (
              <img src={contactInfo.avatar} alt={contactInfo.name} />
            ) : (
              <BiUserCircle />
            )}
          </ImgWrapper>
          <ContactName>
            {contactInfo.name ? contactInfo.name : chatContact.phone}
          </ContactName>
        </>
      ) : (
        <Loader size={28.8} />
      )}
    </Wrapper>
  );
};

export default ContactItem;
