import styled from 'styled-components';

export const ErrorMessage = styled.span`
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
  color: var(--red);
`;

export const FormInputGroup = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
`;

type ErrorProps = {
  $isError?: boolean;
};

export const FormLabel = styled.label`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 500;
  color: ${(props: ErrorProps) =>
    props.$isError ? 'var(--red)' : 'var(--secondary-gray)'};
  padding-left: 5px;
`;

export const FormInput = styled.input`
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
  color: ${(props: ErrorProps) =>
    props.$isError ? 'var(--red)' : 'var(--secondary-gray)'};
  border-radius: var(--bd-rd-5);
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: ErrorProps) =>
    props.$isError ? 'var(--red)' : 'var(--dark-gray)'};
  background-color: var(--dark-gray);
  padding: 0.5rem 1rem;
  transition: var(--transition);

  &:is(:focus, :hover, :active) {
    outline: none;
    border-color: ${(props: ErrorProps) =>
      props.$isError ? 'var(--red)' : 'var(--green)'};
  }
`;

export const FormButton = styled.button`
  position: relative;
  height: 38px;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 500;
  color: var(--white);
  border: 1px solid var(--secondary-green);
  border-radius: var(--bd-rd-5);
  background-color: var(--secondary-green);
  padding: 8px 16px;
  margin-top: 0.5rem;
  transition: var(--transition);

  &:is(:focus, :hover, :active) {
    color: var(--secondary-green);
    background-color: transparent;
    outline: none;
  }

  &:disabled {
    &:is(:focus, :hover, :active) {
      color: var(--white);
      background-color: var(--secondary-green);
    }
  }
`;
