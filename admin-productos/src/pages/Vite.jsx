
import reactLogo from '../assets/react.svg';
import React from 'react'

const Vite = ({count,setCount}) => {
 

  return (
    <div className="App">

        <h1>Esta es la página de inicio del proyecto de clase</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </div>
  )
}

export default Vite