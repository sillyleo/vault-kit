import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
    token: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
  });

  const [addressStr, setAddressStr] = useState("");
  const [balanceData, setBalanceData] = useState<any>({});

  useEffect(() => {
    address && setAddressStr(address);
    data && setBalanceData(data);
    console.log(balanceData);
  }, [address, data]);

  return (
    <div>
      <Button size="1">hello</Button>
      <Button size="2">hello</Button>
      <Button size="3">hello</Button>
      <Button color="whiteA" size="1">
        hello
      </Button>
      <Button color="whiteA" size="2">
        hello
      </Button>
      <Button color="whiteA" size="3">
        hello
      </Button>
      <Button color="blackA" size="1">
        hello
      </Button>
      <Button color="blackA" size="2">
        hello
      </Button>{" "}
      <Button color="blackA" size="3">
        hello
      </Button>
      <Button color="tomato" size="1">
        hello
      </Button>{" "}
      <Button color="tomato" size="2">
        hello
      </Button>
      <Button color="tomato" size="3">
        hello
      </Button>{" "}
      <Button color="grass" size="1">
        hello
      </Button>
      <Button color="grass" size="2">
        hello
      </Button>
      <Button color="grass" size="3">
        hello
      </Button>{" "}
      <Button color="blue" size="1">
        hello
      </Button>
      <Button color="blue" size="2">
        hello
      </Button>
      <Button color="blue" size="3">
        hello
      </Button>
      <div>{addressStr}</div>
      <p>
        USDC Balance on OP (for testing):
        {balanceData?.formatted} {balanceData?.symbol}
      </p>
      <div>
        <h1>Main page</h1>
        <ConnectButton
          chainStatus="icon"
          showBalance={true}
          accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
        />
      </div>
    </div>
  );
};

export default Home;
