import { useState, useEffect } from "react";
import "./App.css"; // Optional for extra styles

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converted, setConverted] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, []);

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;
    const inUSD = amount / rates[fromCurrency];
    const result = inUSD * rates[toCurrency];
    setConverted(result.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConverted(0);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl w-[340px] border border-white/20">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Currency Converter
        </h2>

        {/* From */}
        <div className="mb-2">
          <label className="text-sm text-gray-200">From</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="bg-white text-gray-900 px-2 py-2 rounded border border-gray-300"
            >
              {Object.keys(rates).map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-2">
          <button
            onClick={swapCurrencies}
            className="text-sm bg-blue-600 text-white px-4 py-1 rounded shadow hover:bg-blue-700 transition"
          >
            Swap
          </button>
        </div>

        {/* To */}
        <div className="mb-4">
          <label className="text-sm text-gray-200">To</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={converted}
              readOnly
              className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20"
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="bg-white text-gray-900 px-2 py-2 rounded border border-gray-300"
            >
              {Object.keys(rates).map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={convert}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Convert {fromCurrency} to {toCurrency}
        </button>
      </div>
    </div>
  );
};

export default App;
