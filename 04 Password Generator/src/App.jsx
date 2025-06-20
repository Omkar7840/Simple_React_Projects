import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAlllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAlllowed) str += "!@#$%^&*()_+-=";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAlllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAlllowed, generatePassword]);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-violet-800 text-blue-400">
          <h1 className="text-white text-center my-3 text-2xl">
            Password Generator
          </h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            >
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2 items-center">
            <div className="flex items-center gap-x-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
                id="length"
              />
              <label htmlFor="length" className="text-white whitespace-nowrap">
                Length: {length}
              </label>

              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                id="number"
              />
              <label htmlFor="number" className="text-white">
                Numbers
              </label>

              <input
                type="checkbox"
                checked={charAlllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                id="charInput"
              />
              <label htmlFor="charInput" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
