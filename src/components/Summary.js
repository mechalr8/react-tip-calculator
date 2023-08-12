import React from "react";
export default function Summary({ bill, selfTip, friendTip }) {
  const tip = (selfTip + friendTip) / 2;
  const tipAmount = (bill * tip) / 100;
  return (
    <h3>
      You pay ${bill + tipAmount} (${bill} + ${tipAmount})
    </h3>
  );
}
