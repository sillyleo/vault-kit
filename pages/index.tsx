import {ConnectButton} from "@rainbow-me/rainbowkit";
import type {NextPage} from "next";
import {useAccount, useBalance} from "wagmi";
import {useEffect, useState} from "react";
import {Button} from "../components/Button";
import {BeakerIcon} from "@heroicons/react/24/solid";

const Home: NextPage = () => {
    const {address, isConnecting, isDisconnected} = useAccount();

    const {data, isError, isLoading} = useBalance({
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
            <Button>
                <BeakerIcon width={24} height={24}/>
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
                    accountStatus={{smallScreen: "avatar", largeScreen: "full"}}
                />
            </div>
        </div>
    );
};

export default Home;
