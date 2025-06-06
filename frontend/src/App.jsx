// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Heading from './components/Header';
import ManagerLogin from './pages/Manager';
import CreateAccount from './pages/Account';
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <Heading />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/:userid" element={<ManagerLogin />} />
            <Route path="/create_account" element={<CreateAccount />} />

          </Routes>
        </main>
      </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite - React</h1>
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
      </p> */}
    </Router>
  );
}

export default App
