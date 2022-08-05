import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/color-scheme.css'
import { wrapper, store } from "../states/store";
import { Provider } from "react-redux";


function MyApp({ Component, ...pageProps  }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
