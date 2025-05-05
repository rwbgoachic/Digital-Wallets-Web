import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComplianceModal } from './components/ComplianceModal'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [showCompliance, setShowCompliance] = useState(false)

  const handleAccept = () => {
    setShowCompliance(false)
    // Add any additional logic after acceptance
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button 
            onClick={() => setShowCompliance(true)}
            className="ml-4"
          >
            Open Compliance Modal
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <ComplianceModal 
          isOpen={showCompliance}
          onClose={() => setShowCompliance(false)}
          onAccept={handleAccept}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App