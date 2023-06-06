import styled from 'styled-components';

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

export const ConversationWrapper = styled.div`
  height: calc(100vh - 87px);
  padding: 1.5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #adb5bd;
  }
`;

export const ConversationList = styled.ul`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 1.5rem;
  margin-top: 90px;
  padding-bottom: 24px;
`;
