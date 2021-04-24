import React, { useEffect,useState, useRef } from 'react';
function Calculator() {
    const inputEl = useRef(null);

    // The calculator form will have two state variables: one for storing the current value of the sum and the other for toggling the clear flag. 
    // Since the result is always expected to be a number, the currentSum can be initialized with 0 and clear can be set to false.

    
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [currentSum,setCurrentSum]=useState(num1 + num2);
    const [clear,setClear]=useState(false);
    
 
    const add=(e)=>{
        e.preventDefault();
        setCurrentSum(parseInt(num2)+ parseInt(num1));
   
      
    }
    return (
      <>
            <div className="App">
                <div className="app-title">
                    <h1> Basic Form Calculator</h1>
                </div>
               
                        <input type="text" id="result" value={currentSum}/>   
                        <input type="text" id="num1"  onChange={(e)=>setNum1(e.target.value)} placeholder="enter a number" />
                        <input type="text" id="num2" onChange={(e)=>setNum2(e.target.value)}  placeholder="enter a number" />
                        <button onClick={add}>Add</button>
                        <button>Clear</button>
               
            </div>
      
      </>
    );
  }
  export default Calculator;