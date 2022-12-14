import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme as walletDarkTheme,
  lightTheme as walletLightTheme,
  DisclaimerComponent,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

// const { chains, provider, webSocketProvider } = configureChains(
//   [
//     chain.mainnet,
//     chain.optimism,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
//       ? [chain.goerli]
//       : []),
//   ],
//   [
//     alchemyProvider({
//       // This is Alchemy's default API key.
//       // You can get your own at https://dashboard.alchemyapi.io
//       apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API,
//     }),
//     publicProvider(),
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit App',
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
//   webSocketProvider,
// });
// const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
//   <Text>
//     By connecting your wallet, you agree to the{' '}
//     <Link href="https://termsofservice.xyz">Terms of Service</Link> and
//     acknowledge you have read and understand the protocol{' '}
//     <Link href="https://disclaimer.xyz">Disclaimer</Link>
//   </Text>
// );

// css reset

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme,
      }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <WagmiConfig client={wagmiClient}>
//       <RainbowKitProvider
//         theme={{
//           lightMode: walletLightTheme({ fontStack: 'system' }),
//           darkMode: walletDarkTheme({ fontStack: 'system' }),
//         }}
//         appInfo={{
//           appName: 'Rainbowkit Demo',
//           learnMoreUrl: 'https://perp.com',
//           disclaimer: Disclaimer,
//         }}
//         showRecentTransactions={true}
//         chains={chains}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           value={{
//             dark: darkTheme,
//           }}>
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </RainbowKitProvider>
//     </WagmiConfig>
//   );
// }

export default MyApp;
