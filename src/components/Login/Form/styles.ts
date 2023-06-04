import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  ${({ theme }) => theme.mixins.fCenter};
  background-color: var(--green);
`;

export const BodyWrapper = styled.div`
  width: 450px;
  ${({ theme }) => theme.mixins.column};
  gap: 2.5rem;
  border-radius: var(--bd-rd-15);
  background-color: var(--black);
  padding: 2.5rem 2.2rem;
  box-shadow: rgba(var(--rgb-black), 0.25) 0px 54px 55px, rgba(var(--rgb-black), 0.12) 0px -12px 30px,
    rgba(var(--rgb-black), 0.12) 0px 4px 6px, rgba(var(--rgb-black), 0.17) 0px 12px 13px,
    rgba(var(--rgb-black), 0.09) 0px -3px 5px;
`;

export const HeaderGroup = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
`;

export const WelcomeTitle = styled.h1`
  font-size: 26px;
  line-height: 30px;
  color: var(--gray);
  text-align: center;
`;

export const WelcomeSubtitle = styled.p`
  ${({ theme }) => theme.mixins.fs14};
  color: var(--secondary-gray);
  text-align: center;
`;

export const FormWrapper = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 1rem;
`;

export const InputGroup = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
`;

type ErrorProps = {
  $isError?: boolean;
};

export const Label = styled.label`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 500;
  color: ${(props: ErrorProps) => (props.$isError ? 'var(--red)' : 'var(--secondary-gray)')};
  padding-left: 5px;
`;

export const Input = styled.input`
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
  color: ${(props: ErrorProps) => (props.$isError ? 'var(--red)' : 'var(--secondary-gray)')};
  border-radius: var(--bd-rd-5);
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: ErrorProps) => (props.$isError ? 'var(--red)' : 'var(--dark-gray)')};
  background-color: var(--dark-gray);
  padding: 0.5rem 1rem;
  transition: var(--transition);

  &:is(:focus, :hover, :active) {
    outline: none;
    border-color: ${(props: ErrorProps) => (props.$isError ? 'var(--red)' : 'var(--green)')};
  }
`;

export const Button = styled.button`
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
`;
