import styled from 'styled-components';

type WrapperProps = {
  $isActive: boolean;
};

export const Wrapper = styled.li`
  cursor: pointer;
  ${({ theme }) => theme.mixins.center};
  gap: 0.5rem;
  padding: 10px 24px;
  background-color: ${(props: WrapperProps) =>
    props.$isActive ? 'var(--dark-green)' : 'var(--dark-gray)'};
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    background-color: var(--dark-green);
  }
`;

export const ImgWrapper = styled.div`
  height: 1.8rem;
  width: 1.8rem;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    color: var(--secondary-gray);
  }
`;

export const ContactName = styled.p`
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 500;
  color: var(--gray);
`;
