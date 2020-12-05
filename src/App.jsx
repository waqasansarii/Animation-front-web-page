
import React from "react";
import Header from './components/header'
import Formac from './components/mutify-for-mac'
import Unmuted from './components/unmuted'
import Social from './components/social'
import Macbook from './components/macbook'
import VolumeLevel from './components/volumeLevel'
import ConnectedDevice from './components/connectedDevice'
import Footer from './components/footer'
import './App.css'

function App () {
 
   
  return (
    <div className="container">
      <Header />
      <Formac />
      <Unmuted />
      <Social />
      <Macbook />
      <VolumeLevel />
      <ConnectedDevice />
      <Footer />

   

         

    </div>
  )
}

export default App;
