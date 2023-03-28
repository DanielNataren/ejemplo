import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Partner } from './data/partner'
import Table from './components/Table';


function App() {

  return (
    <div className="App">
        <Table />
    </div>
  )
}

export default App
