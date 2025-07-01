import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const formatDisplay = (value) => {
    if (value.length > 9) {
      const num = parseFloat(value);
      if (num > 999999999 || num < -999999999) {
        return num.toExponential(3);
      }
      return num.toPrecision(9);
    }
    return value;
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-text">{formatDisplay(display)}</div>
      </div>
      
      <div className="calculator-keypad">
        <div className="calculator-row">
          <button className="calculator-key function" onClick={clear}>
            AC
          </button>
          <button className="calculator-key function" onClick={toggleSign}>
            +/-
          </button>
          <button className="calculator-key function" onClick={percentage}>
            %
          </button>
          <button 
            className={`calculator-key operator ${operation === '÷' ? 'active' : ''}`}
            onClick={() => performOperation('÷')}
          >
            ÷
          </button>
        </div>
        
        <div className="calculator-row">
          <button className="calculator-key number" onClick={() => inputNumber(7)}>
            7
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(8)}>
            8
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(9)}>
            9
          </button>
          <button 
            className={`calculator-key operator ${operation === '×' ? 'active' : ''}`}
            onClick={() => performOperation('×')}
          >
            ×
          </button>
        </div>
        
        <div className="calculator-row">
          <button className="calculator-key number" onClick={() => inputNumber(4)}>
            4
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(5)}>
            5
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(6)}>
            6
          </button>
          <button 
            className={`calculator-key operator ${operation === '-' ? 'active' : ''}`}
            onClick={() => performOperation('-')}
          >
            -
          </button>
        </div>
        
        <div className="calculator-row">
          <button className="calculator-key number" onClick={() => inputNumber(1)}>
            1
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(2)}>
            2
          </button>
          <button className="calculator-key number" onClick={() => inputNumber(3)}>
            3
          </button>
          <button 
            className={`calculator-key operator ${operation === '+' ? 'active' : ''}`}
            onClick={() => performOperation('+')}
          >
            +
          </button>
        </div>
        
        <div className="calculator-row">
          <button className="calculator-key number zero" onClick={() => inputNumber(0)}>
            0
          </button>
          <button className="calculator-key number" onClick={inputDecimal}>
            .
          </button>
          <button 
            className="calculator-key operator"
            onClick={() => performOperation('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;