import React from 'react'

function Display() {
    
    let [calculator, setCalculator] = React.useState({
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
        secondOperand: null,
    });
function eventDisplayChange(e){
    const {value} = e.target;
   
    switch (value){
        case '7':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        
        case '8':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '9':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '4':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '5':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '6':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '1':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '2':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '3':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '0':
            if(calculator.displayValue === '0'){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: Number(value), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if (!(calculator.displayValue === '0')){
                const newValue = (calculator.displayValue + value);
                console.log(newValue);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: Number(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        default:
            console.log("default");
            break;
    }
}
function updateDisplay(value){
    
    const display = document.querySelector('.calculator-screen');
    
    display.value = value;
    
}


function eventHandlerOperators(e){
    const {value} = e.target
    console.log(value);
    switch (value){
       case '*':
        setCalculator((prevState) => ({
            ...prevState,
            waitingForSecondOperand: true,
            operator: value,
        }));
        console.log('times');
        secondOperatorCreate();
        break;
       case '/': 
        setCalculator((prevState) => ({
            ...prevState,
            waitingForSecondOperand: true,
            operator: value,
        }));
        console.log('div');
        secondOperatorCreate();
        break;
       case '+':
        setCalculator((prevState) => ({
            ...prevState,
            waitingForSecondOperand: true,
            operator: value,
        }));
        console.log('plus');
        secondOperatorCreate();
        break;
       case '-':
        setCalculator((prevState) => ({
            ...prevState,
            waitingForSecondOperand: true,
            operator: value,
        }));
        console.log('minus');
        secondOperatorCreate();
        break;  
       default:
        console.log('default');
        break; 
    }
    
}
function secondOperatorCreate(){
    console.log(calculator.waitingForSecondOperand);
    if(calculator.waitingForSecondOperand === true){
        const first = calculator.firstOperand;
        setCalculator((prevState) => ({
            ...prevState,
            displayValue: '0',
            firstOperand: null,
            secondOperand: first,
        })); 
        updateDisplay(calculator.secondOperand);
    }
}
function calculate(){
    const first = calculator.firstOperand;
    const second = calculator.secondOperand;
    const value = calculator.operator;
    if(!(second === null)){
    switch (value){
        case '*':
         setCalculator((prevState) => ({
             ...prevState,
             displayValue: (first * second),
         }));
         console.log('times cal');
         
         break;
        case '/': 
            setCalculator((prevState) => ({
                ...prevState,
             displayValue: (first / second),
             }));
         console.log('div cal');
         
         break;
        case '+':
            setCalculator((prevState) => ({
                ...prevState,
                displayValue: (first + second),
            }));
         console.log('plus cal');
         
         break;
        case '-':
         setCalculator((prevState) => ({
            ...prevState,
            displayValue: (first - second),
        }));
         console.log('minus cal');
         
         break;  
        default:
         console.log('default');
         break; 
     }}
        updateDisplay(calculator.displayValue);
}


  return (
    <div  className="calculator">
        <input type="text" className='calculator-screen' value={calculator.displayValue}></input>
        
        <div className='calculator-keys'>
            {/*operator keys */}
            <button type='button' className='operator' value='*' onClick={eventHandlerOperators} >*</button>
            <button type='button' className='operator' value='/' onClick={eventHandlerOperators}>/</button>
            <button type='button' className='operator' value='+' onClick={eventHandlerOperators}>+</button>
            <button type='button' className='operator' value='-' onClick={eventHandlerOperators}>-</button>
            {/** 7, 8, and 9 keys */}
            <button type='button' value='7' onClick={eventDisplayChange}>7</button>
            <button type='button' value='8' onClick={eventDisplayChange}>8</button>
            <button type='button' value='9' onClick={eventDisplayChange}>9</button>
            {/** 4, 5, and 6 keys */}
            <button type='button' value='4' onClick={eventDisplayChange}>4</button>
            <button type='button' value='5' onClick={eventDisplayChange}>5</button>
            <button type='button' value='6' onClick={eventDisplayChange}>6</button>
            {/** 1, 2, and 3 keys */}
            <button type='button' value='1' onClick={eventDisplayChange}>1</button>
            <button type='button' value='2' onClick={eventDisplayChange}>2</button>
            <button type='button' value='3' onClick={eventDisplayChange}>3</button>
            {/** 0, ., AC, and = keys */}
            <button type='button' value='0' onClick={eventDisplayChange}>0</button>
            <button type='button' className='operator'  onClick={calculate}>=</button>
            <button type='button' className='all-clear' value='all-clear'>AC</button>
            <button type='button' className='decimal' value='.'>.</button>
        </div>
    </div>
  )
}

export default Display;