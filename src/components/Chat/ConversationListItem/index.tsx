import { BiUserCircle } from 'react-icons/bi';

import useStore from '../../../store';
import { useGetContactInfo } from '../helpers/useGetContactInfo';
import Form from './Form';
import {
  ConversationItem,
  ConversationList,
  ConversationWrapper,
  Message,
  MessageAvatar,
  MessageWrapper,
  TopBar,
  UserAvatar,
  UserAvatarCircle,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './styles';

const ConversationListItem = () => {
  const { currentChat } = useStore((store) => store);

  const { contactInfo } = useGetContactInfo(currentChat);

  return (
    <Wrapper>
      {currentChat ? (
        <>
          <TopBar>
            {contactInfo && (
              <UserInfoWrapper>
                <UserAvatar>
                  {contactInfo.avatar ? (
                    <img src={contactInfo.avatar} alt={contactInfo.name} />
                  ) : (
                    <BiUserCircle />
                  )}
                  <UserAvatarCircle />
                </UserAvatar>
                <UserName>
                  {contactInfo.name ? contactInfo.name : currentChat}
                </UserName>
              </UserInfoWrapper>
            )}
          </TopBar>

          <ConversationWrapper>
            <ConversationList>
              <ConversationItem>
                <MessageWrapper>
                  <MessageAvatar>
                    <img src="" alt="" />
                  </MessageAvatar>
                  <Message>Message</Message>
                </MessageWrapper>
              </ConversationItem>
              <ConversationItem $isRight>
                <MessageWrapper>
                  <MessageAvatar $isRight>
                    <img src="" alt="" />
                  </MessageAvatar>
                  <Message $isRight>Message</Message>
                </MessageWrapper>
              </ConversationItem>
            </ConversationList>
          </ConversationWrapper>

          <Form />
        </>
      ) : null}
    </Wrapper>
  );
};

export default ConversationListItem;
