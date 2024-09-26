import { useState } from 'react'
import aclogo from '/ac-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://acteam.dev" target="_blank" rel='noopener'>
          <img src={aclogo} className="logo" alt="AC logo" />
        </a>
      </div>
      <h1>Advanced Community</h1>
      <span>by Anthony Carrillo</span>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
