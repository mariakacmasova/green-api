import { Wrapper } from './styles';

interface Props {
  size: number;
  color?: string;
  isAbsoluteCentered?: boolean;
}

const Loader = ({ size, color = '--white', isAbsoluteCentered }: Props) => {
  return (
    <Wrapper
      size={size}
      strokeWidth={2}
      color={`var(${color})`}
      $isAbsolute={isAbsoluteCentered}
    />
  );
};

export default Loader;
