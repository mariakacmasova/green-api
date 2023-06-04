import { ErrorMessage } from "../styles"
import { ErrorWrapper, Wrapper } from "./styles"

interface Props {
  onClose: () => void;
  message: string;
}

const ErrorModal = ({ onClose, message }: Props) => {
  return (
    <Wrapper onClick={onClose}>
      <ErrorWrapper onClick={(event) => event.stopPropagation()}>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorWrapper>
    </Wrapper>
  )
}

export default ErrorModal