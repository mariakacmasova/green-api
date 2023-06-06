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
  const { openModal } = useStore((store) => store);

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

        <Button onClick={openModal} type="button">
          Начать
        </Button>
      </Stack>
    </Wrapper>
  );
};

export default WelcomeTitle;
