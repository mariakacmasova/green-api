import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/theme';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
