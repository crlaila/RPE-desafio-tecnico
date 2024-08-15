import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // ou qualquer componente de carregamento
  }

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {persistor && (
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        )}
        {!persistor && <Component {...pageProps} />}
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
