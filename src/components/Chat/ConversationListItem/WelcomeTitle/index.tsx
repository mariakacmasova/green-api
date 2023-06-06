import useStore from '../../../../store';
import {
  Button,
  MessageIcon,
  MessageIConWrapper,
  Stack,
  Subtitle,
  Title,
  TitleStack,
  Wrapper,
} from './styles';

const WelcomeTitle = () => {
  const { setModal } = useStore((store) => store);

  return (
    <Wrapper>
      <Stack>
        <MessageIConWrapper>
          <MessageIcon />
        </MessageIConWrapper>

        <TitleStack>
          <Title>Добро пожаловать!</Title>
          <Subtitle>Выберите чат для того чтобы начать</Subtitle>
        </TitleStack>

        <Button onClick={() => setModal(true)} type="button">
          Начать
        </Button>
      </Stack>
    </Wrapper>
  );
};

export default WelcomeTitle;
