import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Salve turma!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            contador de acessos: {count}
          </button>
        </p>
        <h1>qualquer coisa</h1>
      </header>
    </div>
  )
}

export default App
