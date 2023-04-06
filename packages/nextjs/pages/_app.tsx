import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import PlausibleProvider from "next-plausible";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { BlockieAvatar, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useEthPrice } from "~~/hooks/scaffold-eth";
import { useAppStore } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);

  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  return (
    <PlausibleProvider domain="hackathon.buidlguidl.com">
      <WagmiConfig client={wagmiClient}>
        <NextNProgress />
        <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
          <div className="flex flex-col min-h-screen bg-primary">
            <main className="relative flex flex-col flex-1">
              <div className="z-10 flex justify-end m-[20px]">
                <RainbowKitCustomConnectButton />
              </div>
              <Component {...pageProps} />
            </main>
          </div>
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
    </PlausibleProvider>
  );
};

export default ScaffoldEthApp;
