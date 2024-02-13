import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Carousel from '../Components/Carousel'
import Sct from '../Components/Sct'
import Gmt from '../Components/Gmt'
import Future from '../Components/Future'
import Talented from '../Components/Talented'
import Oln from '../Components/Oln'
import Wov from '../Components/Wov'
import Achievements from '../Components/Achievements'
import Best from '../Components/Best'
import Sub from '../Components/Sub'
import Foot from '../Components/Foot'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Carousel/>
      <Sct/>
      <Gmt/>
      <Future/>
      <Talented/>
      <Oln/>
      <Wov/>
      <Achievements/>
      <Best/>
      <Sub/>
      <Foot/>
    </>
  )
}

export default Home