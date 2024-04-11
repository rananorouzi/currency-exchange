import React, { useState } from "react";
import { TEInput, TERipple, TESelect } from "tw-elements-react";
import { rateSymbols, exchangeRate } from "./data/exchange-data";
export default function App() {
  const [currency, setCurrency] = useState("");
  const [changeTo, setChangeTo] = useState("");
  const [changeFrom, setChangeFrom] = useState("");
  const [res, setRes] = useState(0);

  const calculate = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (changeTo !== "" && changeFrom !== "") {
      const rate =
        changeTo === changeFrom ? 1 : exchangeRate[changeFrom][changeTo];
      setRes(parseFloat(currency.replace(",", ".")) * rate);
    }
  };
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form>
        <TEInput
          type="currency"
          label="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mb-2"
        ></TEInput>

        <TESelect
          data={rateSymbols}
          placeholder="From"
          preventFirstSelection
          className="mb-2"
          value={changeFrom}
          onValueChange={(e: any) => {
            setChangeFrom(e.value);
          }}
        />

        <TESelect
          data={rateSymbols}
          placeholder="To"
          preventFirstSelection
          className="mb-2"
          value={changeTo}
          onValueChange={(e: any) => {
            setChangeTo(e.value);
          }}
        />
        <TERipple rippleColor="light">
          <button
            type="button"
            className="mb-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={(e) => calculate(e)}
          >
            Convert
          </button>
        </TERipple>
      </form>
      <div className="result">
        {res > 0 && (
          <span>
            {currency} {changeFrom} is {res} {changeTo}
          </span>
        )}
      </div>
    </div>
  );
}
