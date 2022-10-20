import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useAccount, useBalance } from 'wagmi';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Switch } from '../components/SwitchDemo';

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
    token: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  });

  const [addressStr, setAddressStr] = useState('');
  const [balanceData, setBalanceData] = useState<any>({});

  useEffect(() => {
    address && setAddressStr(address);
    data && setBalanceData(data);
    console.log(balanceData);
  }, [address, data]);

  return (
    <div>
      <Switch /> <Button size="1">Button</Button>
      <Button size="2">Button</Button>
      <Button size="3">Button</Button>
      <Button color="whiteA" size="1">
        Button
      </Button>
      <Button color="whiteA" size="2">
        Button
      </Button>
      <Button color="whiteA" size="3">
        Button
      </Button>
      <Button color="blackA" size="1">
        Button
      </Button>
      <Button color="blackA" size="2">
        Button
      </Button>{' '}
      <Button color="blackA" size="3">
        Button
      </Button>
      <Button color="red" size="1">
        Button
      </Button>{' '}
      <Button color="red" size="2">
        Button
      </Button>
      <Button color="red" size="3">
        Button
      </Button>{' '}
      <Button color="yellow" size="1">
        Button
      </Button>
      <Button color="yellow" size="2">
        Button
      </Button>
      <Button color="yellow" size="3">
        Button
      </Button>{' '}
      <Button color="blue" size="1">
        Button
      </Button>
      <Button color="blue" size="2">
        Button
      </Button>
      <Button color="blue" size="3">
        Button
      </Button>
      <div>{addressStr}</div>
      <p>
        USDC Balance on OP (for testing):
        {balanceData?.formatted} {balanceData?.symbol}
      </p>
      <div>
        <h1 style={{ fontWeight: 800 }}>Main page</h1>
        <ConnectButton
          chainStatus="icon"
          showBalance={true}
          accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        />
      </div>
    </div>
  );
};

export default Home;
