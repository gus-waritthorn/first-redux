import React from 'react'

const App = ({counter, increase, decrease}) => (
    <div>
    <label>{counter}</label>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
)

export default App