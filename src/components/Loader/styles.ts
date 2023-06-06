import { TbLoader3 } from 'react-icons/tb';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  $isAbsolute?: boolean;
};

const loader = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled(TbLoader3)`
  ${(props: Props) =>
    props.$isAbsolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  animation: ${loader} 2s linear infinite;
`;
