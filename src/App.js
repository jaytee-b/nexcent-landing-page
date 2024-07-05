import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Communities from './components/Communities.jsx'
import Pixelgrade from './components/Pixelgrade.jsx'
import Reports from './components/Reports.jsx'
import Howto from './components/Howto.jsx'
import Customers from './components/Customers.jsx'
import Markting from './components/Marketing.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clients/>
    <Communities/>
    <Pixelgrade/>
    <Reports/>
    <Howto/>
    <Customers/>
    <Markting/>
    <Footer/>
    </>
    
  )
}

export default App