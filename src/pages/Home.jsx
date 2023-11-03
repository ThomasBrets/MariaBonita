import React from 'react'

// Components
import HeroSlider from "../components/HeroSlider.jsx"
import MyHistory from "../components/MyHistory.jsx"
import BookForm from "../components/BookForm.jsx"
import Menu from "../components/Menu.jsx"

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <MyHistory/>
    <BookForm/> 
    <Menu/>
    </>
  )
}

export default Home