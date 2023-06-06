import useStore from '../../../store';
import { useGetChatHistory } from '../helpers/useGetChatHistory';
import { useGetContactInfo } from '../helpers/useGetContactInfo';
import Loader from '../../Loader';
import Form from './Form';
import WelcomeTitle from './WelcomeTitle';
import Message from './Message';
import TopBar from './TopBar';
import { ConversationList, ConversationWrapper, Wrapper } from './styles';

const ConversationListItem = () => {
  const { currentChat } = useStore((store) => store);

  const { chatHistory, isLoading: isChatLoading } =
    useGetChatHistory(currentChat);

  const { contactInfo, isLoading: isContactInfoLoading } =
    useGetContactInfo(currentChat);

  return (
    <Wrapper>
      {currentChat ? (
        <>
          <TopBar
            contactInfo={contactInfo}
            currentChat={currentChat}
            isLoading={isContactInfoLoading}
            isChatLoading={isChatLoading}
          />

          <ConversationWrapper>
            <ConversationList>
              {!isChatLoading && chatHistory ? (
                chatHistory.map(
                  (it) =>
                    !!it.idMessage && (
                      <Message
                        key={it.idMessage}
                        chat={it}
                        sender={contactInfo}
                      />
                    )
                )
              ) : (
                <Loader size={45} isAbsoluteCentered />
              )}
            </ConversationList>
          </ConversationWrapper>

          <Form />
        </>
      ) : (
        <WelcomeTitle />
      )}
    </Wrapper>
  );
};

export default ConversationListItem;
