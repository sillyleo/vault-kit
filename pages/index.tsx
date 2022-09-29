import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  const addRecentTransaction = useAddRecentTransaction();

  return (
    <div>
      <div>
        <h1>Main page</h1>
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
        />
      </div>
    </div>
  );
};

export default Home;
