import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly className="input" />
          <input type="text" value={result} readOnly className="result" />
        </div>
        <div className="keypad">
          <button onClick={clear} id="clear">AC</button>
          <button onClick={backspace} id="backspace">&larr;</button>
          <button name="/" onClick={handleClick} className="operator">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="operator">&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="operator">&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="operator">+</button>
          <button name="0" onClick={handleClick} className="zero">0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
