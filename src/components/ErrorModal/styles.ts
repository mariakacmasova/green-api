import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(var(--rgb-black), 0.7);
`;

export const ErrorWrapper = styled.div`
  padding: 2.2rem 2rem;
  background-color: var(--white);
`;

// export const ErrorMessage = styled.p`
//   ${({ theme }) => theme.mixins.fs14};
//   font-weight: 400;
//   color: var(--red);
// `
