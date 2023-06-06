import styled, { css } from 'styled-components';

type RightProps = {
  $isRight?: boolean;
};

export const Wrapper = styled.li`
  display: flex;
  justify-content: ${(props: RightProps) =>
    props.$isRight ? 'flex-end' : 'flex-start'};
`;

export const Group = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  gap: 16px;
  max-width: 80%;
`;

export const Avatar = styled.div`
  height: 28px;
  width: 28px;
  ${(props: RightProps) =>
    props.$isRight &&
    css`
      order: 1;
    `}

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    height: 28px;
    width: 28px;
    color: var(--secondary-gray);
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.mixins.fs14};
  color: var(--message-cl-white);
  border-radius: 3px;
  box-shadow: 0 2px 4px var(--black-shadow);
  background-color: ${(props: RightProps) =>
    props.$isRight ? 'var(--dark-white-green)' : 'var(--message-bg-gray)'};
  padding: 12px 20px;
  text-align: ${(props: RightProps) => (props.$isRight ? 'right' : 'left')};
`;
