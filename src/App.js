import React from 'react'
import './App.css'
import Clock from './components/Clock'

const Header = () => (
  <>
    <div className='header-wrapper'>
      <header className='header'>Work | Chill</header>
    </div>
  </>
)

const App = () => (
  <>
  <Header />

  <div className="App">


    <Clock />

    </div>
    </>
)

export default App
