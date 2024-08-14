import { useState } from "react";
import "./factory.css";

export default function Factory() {
  let [customer, setCustomer] = useState("customer");

  return (
    <div>
      <h4 onClick={() => setCustomer("customer")}>customer</h4>
      <h4 onClick={() => setCustomer("supplier")}>supplier</h4>
      {customer === "customer" ? <div></div> : <div></div>}
    </div>
  );
}
