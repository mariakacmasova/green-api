import styled from 'styled-components';

export const ErrorMessage = styled.span`
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
  color: var(--red);
`;
