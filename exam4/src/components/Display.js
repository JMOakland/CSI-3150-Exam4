import React from 'react'

function Display() {
    
    let [calculator, setCalculator] = React.useState({
        displayValue: '0',
        firstOperand: null,
        operator: null,
        secondOperand: null,
        isDone: false,
    });
function eventDisplayChange(e){
    const {value} = e.target;
   if(calculator.isDone === false){
    switch (value){
        case '7':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        
        case '8':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '9':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '4':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '5':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '6':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '1':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '2':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '3':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '0':
            if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: value,
                    firstOperand: parseFloat(value), 
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
                    firstOperand: parseFloat(newValue), 
                }));
                console.log(calculator.firstOperand);
                updateDisplay(newValue);
            }
            break;
        case '.':
            if(calculator.displayValue.includes(value) && (calculator.secondOperand === null)){
                console.log('already floating point!')
            }
            else if(calculator.displayValue.includes(value) && (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: '0.',
                    firstOperand: 1,
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if(calculator.displayValue === '0' || (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: '0.',
                    firstOperand: 1,
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            
            else if (!(calculator.displayValue === '0') && (calculator.firstOperand === 0)){
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: '0.',
                    firstOperand: 1,
                }));
                console.log(calculator.firstOperand);
                updateDisplay(value);
            }
            else if(!(calculator.displayValue === '0') && (!(calculator.firstOperand === 0))){
                const newValue = (calculator.displayValue + value);
                setCalculator((prevState) => ({
                    ...prevState,
                    displayValue: newValue,
                    firstOperand: 1,
                }));
                updateDisplay(value);
            }
            

            break;
        default:
            console.log("default");
            break;
    }}
    else{
        if(value === '.'){
            setCalculator(() => ({
                displayValue: '0.',
                firstOperand: null,
                operator: null,
                secondOperand: null,
                isDone: false,
            }));
        }
        else if(value !== '.'){
            setCalculator(() => ({
                displayValue: value,
                firstOperand: parseFloat(value),
                operator: null,
                secondOperand: null,
                isDone: false,
            }));
        }
    }
}

function updateDisplay(value){
    
    const display = document.querySelector('.calculator-screen');
    
    display.value = value;
    
}


function eventHandlerOperators(e){
    const {value} = e.target
    console.log(value);
    if(calculator.isDone === false){
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
    }}
    else{
                console.log(value);
                setCalculator((prevState) => ({
                    ...prevState,
                    secondOperand: parseFloat(calculator.displayValue),
                    firstOperand: 0,
                    operator: value,
                    isDone: false,
                    
                }));
             console.log(calculator.operator);
             
         }
    }
    

function secondOperatorCreate(){
    if(calculator.isDone === false){
    const first = calculator.firstOperand;
    setCalculator((prevState) => ({
        ...prevState,
        firstOperand: 0,
        secondOperand: first,        
    })); 
        updateDisplay(calculator.secondOperand);
    
}}
function calculate(){
    const first = calculator.secondOperand;
    const second = calculator.firstOperand;
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
     setCalculator((prevState) => ({
        ...prevState,
        isDone: true,
    }));
        updateDisplay(calculator.displayValue);
}
function Reset(){
    setCalculator(() => ({
        displayValue: '0',
        firstOperand: null,
        operator: null,
        secondOperand: null,
        isDone: false,
    }));
        
}
  return (
    <div  className="calculator">
        <input type="text" className='calculator-screen' value={calculator.displayValue} onChange={updateDisplay} ></input>
        
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
            <button type='button' className='all-clear' onClick={Reset}>AC</button>
            <button type='button' className='decimal' value='.' onClick={eventDisplayChange}>.</button>
        </div>
    </div>
  )
}

export default Display;