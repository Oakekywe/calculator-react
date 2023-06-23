import React, { useState } from "react";
import "./";

const CalculatorApp = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const clearLast = () => {
    setResult(result.slice(0, -1));
  };

  const calculatePercentage = () => {
    try {
      setResult((parseFloat(result) / 100).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const formattedResult = parseFloat(result).toLocaleString();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-slate-200 border-[1px] p-4 rounded-sm">
        <input
          type="text"
          value={result}
          className="h-20 text-3xl text-right p-2 mb-4 border-[1px] rounded-md"
          readOnly
        />

        <div className="grid grid-cols-4 gap-4">
          <button
            className="rounded-sm col-span-1 bg-red-500 text-white text-xl h-16 px-5"
            onClick={clear}
          >
            AC
          </button>
          <button
            className="rounded-sm col-span-1 bg-red-500 text-white text-xl h-16 px-5"
            onClick={clearLast}
          >
            C
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-200 text-xl h-16 px-5"
            value="%"
            onClick={calculatePercentage}
          >
            %
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-200 text-xl h-16 px-5"
            value="/"
            onClick={handleClick}
          >
            ÷
          </button>

          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-200 text-xl h-16 px-5"
            value="*"
            onClick={handleClick}
          >
            x
          </button>

          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-200 text-xl h-16 px-5"
            value="-"
            onClick={handleClick}
          >
            -
          </button>

          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-200 text-xl h-16 px-5"
            value="+"
            onClick={handleClick}
          >
            +
          </button>

          <button
            className="rounded-sm col-span-2 bg-gray-100 text-xl h-16 px-5"
            value="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="rounded-sm col-span-1 bg-gray-100 text-xl h-16 px-5"
            value="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="rounded-sm col-span-1 bg-blue-500 text-white text-xl h-16 px-5"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
