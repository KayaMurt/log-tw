import type { AppProps } from "next/app";
import {
    ThirdwebProvider,
    smartWallet,
    embeddedWallet,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    localWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { activeChain, factoryAddress } from "../const";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
            activeChain={activeChain}
            supportedWallets={[
                smartWallet(embeddedWallet(), {
                    factoryAddress: factoryAddress,
                    gasless: true,
                }),
                metamaskWallet({ recommended: true }),
                coinbaseWallet(),
                walletConnect(),
                localWallet(),
            ]}
        >
            <Component {...pageProps} welcomeScreen={{ title: "LibertyNet" }} />
        </ThirdwebProvider>
    );
}

export default MyApp;
