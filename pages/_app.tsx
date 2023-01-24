import "/styles/index.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { FC } from "react";
import { wrapper } from "../store";

const App: FC<AppProps> = ({ Component, ...pageProps }) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(App);
