import React from "react";
export default function BillInput({ bill, onBillEnter }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBillEnter(Number(e.target.value))}
      />
    </div>
  );
}
