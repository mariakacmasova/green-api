import styled from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => theme.mixins.center};
  gap: 0.5rem;
  border-top: 1px solid var(--dark-gray);
  background-color: var(--chat-bg-gray);
  backdrop-filter: blur(7px);
  padding: 1.3rem;
`;

export const Input = styled.input`
  width: 100%;
  min-height: calc(1.5em + 1rem + 6px);
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
  color: var(--secondary-gray);
  border-radius: var(--bd-rd-5);
  border: 1px solid var(--dark-gray);
  background-color: var(--dark-gray);
  padding: 0.5rem 1rem;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--secondary-green);
  }
`;

export const Button = styled.button`
  height: 43px;
  width: 43px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fs22};
  color: var(--white);
  border-radius: var(--bd-rd-5);
  border: 1px solid var(--secondary-green);
  background-color: var(--secondary-green);
  transition: var(--transition);

  &:disabled {
    opacity: 0.65;
    border-color: var(--green);
    background-color: var(--green);

    &:is(:hover, :active, :focus) {
      color: var(--white);
      border-color: var(--secondary-green);
      background-color: var(--secondary-green);
    }
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--secondary-green);
    background-color: transparent;
  }
`;
