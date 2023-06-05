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
  box-shadow: rgba(var(--rgb-black), 0.25) 0px 54px 55px,
    rgba(var(--rgb-black), 0.12) 0px -12px 30px,
    rgba(var(--rgb-black), 0.12) 0px 4px 6px,
    rgba(var(--rgb-black), 0.17) 0px 12px 13px,
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
