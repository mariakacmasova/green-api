import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  max-width: 300px;
  min-width: 300px;
  ${({ theme }) => theme.mixins.column};
  background-color: var(--black);
`;

export const HeaderStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 1.4rem;
  padding: 1.5rem 1.5rem 0;
`;

export const HeaderGroup = styled.div`
  ${({ theme }) => theme.mixins.apart};
`;

export const HeaderTitle = styled.h4`
  font-weight: 500;
  ${({ theme }) => theme.mixins.fs22};
  color: var(--gray);
`;

export const AddNewChatBtn = styled.button`
  --pd-y: 0.35rem;
  --pd-x: 0.5rem;

  ${({ theme }) => theme.mixins.fCenter};
  font-size: 15px;
  color: var(--green);
  text-align: center;
  border: 1px solid transparent;
  border-radius: var(--bd-rd-5);
  background-color: var(--dark-green);
  padding: var(--pd-y) var(--pd-x);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    border-color: var(--dark-green);
    background-color: transparent;
  }
`;

export const ContactsStack = styled.ul`
  ${({ theme }) => theme.mixins.column};
  padding: 30px 0;
`;
