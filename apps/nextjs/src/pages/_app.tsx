import "../styles/globals.css";
import { useState } from "react";
import type { AppType } from "next/app";
import Footer from "Components/Footer/Footer";
import SignInModal from "Components/Modals/SignInModal";
import Navbar from "Components/Navbar/Navbar";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { api } from "~/utils/api";
import i18n from "./i18n";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [showSignInModal, setSignInModal] = useState(false);

  const handleModalVisibility = (isVisible: boolean) => {
    setSignInModal(isVisible);
    document.body.style.overflow = "hidden";
  };

  return (
    <I18nextProvider i18n={i18n}>
      <SessionProvider session={session}>
        <Navbar handleModalVisibility={handleModalVisibility} />
        <Component {...pageProps} />
        <SignInModal
          isVisible={showSignInModal}
          onClose={() => setSignInModal(false)}
        />

        <Footer />
      </SessionProvider>
    </I18nextProvider>
  );
};

export default api.withTRPC(MyApp);
