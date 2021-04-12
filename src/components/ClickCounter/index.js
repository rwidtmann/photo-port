import React, { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevState) => prevState + 1)
    }


    return (
        <div>
            I've been clicked {count} times

            <button onClick={increment}>Add One</button>
        </div>
    );
}

export default ClickCounter