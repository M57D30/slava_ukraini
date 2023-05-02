import "../styles/globals.css";
import { useState } from "react";
import type { AppType } from "next/app";
import Footer from "Components/Footer/Footer";
import SignInModal from "Components/Modals/SignInModal";
import Navbar from "Components/Navbar/Navbar";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

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
    <SessionProvider session={session}>
      <Navbar handleModalVisibility={handleModalVisibility} />
      <Component {...pageProps} />
      <SignInModal
        isVisible={showSignInModal}
        onClose={() => setSignInModal(false)}
      />

      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
