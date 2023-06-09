import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const ApartContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.apart};
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

export const RefreshButton = styled.button`
  width: 33px;
  height: 33px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 15px;
  color: var(--gray);
  border: none;
  border-radius: 100%;
  background-color: transparent;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--green);
    background-color: var(--dark-white-green);
  }

  &:disabled {
    &:is(:hover, :active, :focus) {
      color: var(--gray);
      background-color: transparent;
    }
  }
`;
