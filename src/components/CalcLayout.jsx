import React, {useState} from "react";
import Result from "./Result";
import Button from "./Button";

const CalcLayout = () => {
  const [result, setResult] = useState("")

  const onClick = (button) => {
    if(button === "=") {
      calculate();
    } else if(button === "C") {
      reset();
    } else if(button === "CE") {
      backspace();
    } else {
      setResult(prevResult => prevResult + button);
    }
  }

  const calculate = () => {
    let checkResult = '';
    if (result.includes('--')) {
      checkResult = result.replace('--', '+');
    } else {
      checkResult = result;
    }

    try {
      setResult(eval(checkResult).toString());
    } catch (e) {
      setResult("error")
    }
  };

  const reset = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(prevResult => prevResult.slice(0, -1));
  }

  return (
    <div className="bg-gray-800 w-full rounded-lg shadow-lg text-white">
      <div className="bg-gray-900 border-b-4 border-white h-60 rounded-t-lg">
        <Result result={result}/>
      </div>
      <div className="bg-gray-800 p-4 rounded-b-lg">
        <Button onClick={onClick}/>
      </div>
    </div>
  );
};

export default CalcLayout;
