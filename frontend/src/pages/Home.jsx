import Navbar from "../components/navbar/Navbar" ;
import Header from "../components/header/Header"
import Match from "../components/layerMatch/Match" ;
import Hero from "../components/hero/Hero" ;
import Cards from "../components/cards/Cards"
import Footer from "../components/footer/Footer"

function Home() {
  return(
    <>
     <Navbar/>
     <Header/>
     <Match/>
     <Hero/>
     <Cards/>
     <Footer/>
    </>
  )
}

export default Home
