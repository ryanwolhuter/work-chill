import React from 'react'
import './App.css'
import Clock from './components/Clock'

const Header = () => (
  <>
    <div className='header-wrapper'/>
    <header className='header'>Work | Chill</header>
  </>
)

const App = () => (
  <div className="App">

    <Header />

    <Clock />

  </div>
)

export default App
