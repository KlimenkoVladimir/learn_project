import React, { useState } from "react";

const Counter = function() {
    const [count, setCount] = useState(0)

    function plusOne() {
        setCount(count+1)
    }
      function minusOne() {
        setCount(count-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
        </div>
    )
}

export default Counter