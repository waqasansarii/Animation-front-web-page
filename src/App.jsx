
import React, { useEffect } from "react";
import useWebAnimations,{bounce, fadeInUp, shakeX,rotateIn,slideInUp} from "@wellyshen/use-web-animations";
import Header from './components/header'
import Formac from './components/mutify-for-mac'
import Unmuted from './components/unmuted'
import Social from './components/social'
import Macbook from './components/macbook'
import VolumeLevel from './components/volumeLevel'
import ConnectedDevice from './components/connectedDevice'
import Footer from './components/footer'
// import FotBar from './components/fotbar'
import './App.css'

function App () {
  // const one = useWebAnimations(fadeInUp)
  // const thre = useWebAnimations(slideInUp)
  // const two= useWebAnimations(bounce)
  // const { ref, getAnimation}= useWebAnimations({
  //   keyframes: [ 
  //     {transform: "rotate(0deg)"},
  //     {transform: "rotate(360deg)"},
  //    ],
  //   timing: {
  //      duration: 2000 ,
  //      iterations:Infinity,
  //     //  delay:1000,
  //     easing: "ease-in-out"
  //   },
  // })
   
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
