import React, { useState } from "react";

export default function DiceBox (props) {
    const [numbers, setNumbers] = useState(null);
    
    const randomNum = (min,max) => {
        return Math.floor(Math.random()*7)
    }
    const handleClick = () => {
        setNumbers(randomNum(1, 6));
    }
    return (
        <div>
            <h1 className="numbers">Number is:{numbers}</h1>
            <button onClick={handleClick}>Push Da Butt</button>
            <h1 className="numbers">Number is:{numbers}</h1>
            <button onClick={handleClick}>Push Da Butt</button>
            <h1 className="numbers">Number is:{numbers}</h1>
            <button onClick={handleClick}>Push Da Butt</button>
            <h1 className="numbers">Number is:{numbers}</h1>
            <button onClick={handleClick}>Push Da Butt</button>
            <h1 className="numbers">Number is:{numbers}</h1>
            <button onClick={handleClick}>Push Da Butt</button>
            {/* <div className="number--value">
                <h1>{result[0]}</h1>
            </div> */}
             {/* step 1 write a method that produces 5 random numbers between 1 and 6 and saves them in state
             step 2display the 5 random numbers in the DiceBox.jsx
             step 3Provide a button the user can click on that will redo step 2 and present new numbers  */}

             {/* Will use 
             Math.floor(Math.random()*6);
             to get the random number. */}
        </div>
    )
}