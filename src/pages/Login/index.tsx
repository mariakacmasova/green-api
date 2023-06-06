import { PATHS } from '../../constants/Paths';
import SEO from '../../components/SEO';
import Form from '../../components/Login/Form';

const Login = () => {
  return (
    <>
      <SEO
        title="Авторизация"
        description="Страница авторизации"
        name="whatsapp-green-api"
        type="chat app"
        keywords="chat, react, green-api, чат, авторизация, логинизация"
        href={PATHS.LOGIN}
      />
      <Form />
    </>
  );
};

export default Login;
