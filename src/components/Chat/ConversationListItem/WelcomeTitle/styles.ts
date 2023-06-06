import { BiMessageDetail } from 'react-icons/bi';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  ${({ theme }) => theme.mixins.fCenter};
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 1.5rem;
`;

export const MessageIConWrapper = styled.div`
  height: 6rem;
  width: 6rem;
  ${({ theme }) => theme.mixins.fCenter};
  border-radius: 50%;
  background-color: var(--dark-white-green);
`;

export const MessageIcon = styled(BiMessageDetail)`
  font-size: calc(1.475rem + 2.7vw);
  color: var(--secondary-green);
`;

export const TitleStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.mixins.column};
  ${({ theme }) => theme.mixins.fs20};
  font-weight: 500;
  color: var(--gray);
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--secondary-gray);
`;

export const Button = styled.button`
  width: 140px;
  ${({ theme }) => theme.mixins.fCenter};
  border: 1px solid var(--green);
  border-radius: var(--bd-rd-5);
  background-color: var(--green);
  padding: 0.5rem 1rem;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--white);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--green);
    background-color: transparent;
  }
`;
