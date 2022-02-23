import { StoreProvider } from '../utils/Store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
