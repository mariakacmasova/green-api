import SEO from '../../components/SEO';
import { PATHS } from '../../constants/Paths';
import { FlexContainer } from '../../components/Chat/styles';
import ContactList from '../../components/Chat/ContactList';
import ConversationListItem from '../../components/Chat/ConversationListItem';

const Chat = () => {
  return (
    <>
      <SEO
        title="Чаты"
        description="Страница чатов"
        name="whatsapp-green-api"
        type="chat app"
        keywords="chat, react, green-api, чат, whatsApp"
        href={PATHS.CHAT}
      />
      <FlexContainer>
        <ContactList />
        <ConversationListItem />
      </FlexContainer>
    </>
  );
};

export default Chat;
