import styled, { css } from 'styled-components';

import bg from '../../../assets/chat-bg.png';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: var(--white-black);
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

// Header start
export const TopBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  ${({ theme }) => theme.mixins.center};
  background-color: var(--chat-bg-gray);
  backdrop-filter: blur(7px);
  border-bottom: 1px solid var(--dark-gray);
  padding: 24px 44px;
`;

export const UserInfoWrapper = styled.div`
  ${({ theme }) => theme.mixins.center};
  gap: 1rem;
`;

export const UserAvatar = styled.div`
  position: relative;
  height: 2.4rem;
  width: 2.4rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserAvatarCircle = styled.span`
  width: 10px;
  position: absolute;
  bottom: 0;
  height: 10px;
  left: auto;
  right: 0;
  border-radius: 50%;
  border: 2px solid var(--black);
  background-color: var(--white-green);
`;

export const UserName = styled.h6`
  ${({ theme }) => theme.mixins.fs18};
  font-weight: 500;
  color: var(--gray);
`;
// Header end

// Body start
export const ConversationWrapper = styled.div`
  height: calc(100vh - 87px);
  padding: 1.5rem;
  overflow: auto;
`;

export const ConversationList = styled.ul`
  ${({ theme }) => theme.mixins.column};
  gap: 1.5rem;
  margin-top: 90px;
  padding-bottom: 24px;
`;

type RightProps = {
  $isRight?: boolean;
};

export const ConversationItem = styled.li`
  display: flex;
  justify-content: ${(props: RightProps) =>
    props.$isRight ? 'flex-end' : 'flex-start'};
`;

export const MessageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  gap: 16px;
  max-width: 80%;
`;

export const MessageAvatar = styled.div`
  height: 28px;
  width: 28px;
  ${(props: RightProps) =>
    props.$isRight &&
    css`
      order: 1;
    `}

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Message = styled.div`
  ${({ theme }) => theme.mixins.fs14};
  color: var(--message-cl-white);
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
  background-color: ${(props: RightProps) =>
    props.$isRight ? 'var(--dark-white-green)' : 'var(--message-bg-gray)'};
  padding: 12px 20px;
  text-align: ${(props: RightProps) => (props.$isRight ? 'left' : 'right')};
`;
// Body end
