import React, { useState } from "react";
import BillInput from "./components/BillInput";
import TipInput from "./components/TipInput";
import Summary from "./components/Summary";
import Reset from "./components/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [selfTip, setSelfTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const onReset = () => {
    setBill("");
    setSelfTip(0);
    setFriendTip(0);
  };
  return (
    <div className="App">
      <BillInput bill={bill} onBillEnter={setBill} />
      <TipInput tip={selfTip} onSelectTip={setSelfTip}>
        How much you like the service?
      </TipInput>
      <TipInput tip={friendTip} onSelectTip={setFriendTip}>
        How much did your friend like the service?
      </TipInput>
      {bill && (
        <>
          <Summary bill={bill} selfTip={selfTip} friendTip={friendTip} />
          <Reset onReset={onReset} />
        </>
      )}
    </div>
  );
}
