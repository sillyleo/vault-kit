import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <ConnectButton />
    </div>
  );
};

export default Home;
