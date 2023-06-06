import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/theme';
import { useSetCurrentUser } from '../../helpers/hooks/useSetCurrentUser';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  useSetCurrentUser();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      <ToastContainer transition={Slide} />
    </ThemeProvider>
  );
};

export default Layout;
