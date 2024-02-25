
import reactLogo from './assets/react.svg'
import Nav from './Components/Nav'
import Container from './Components/Container'
import Container1 from './Components/Container1'
import Container2 from './Components/Container2'
import Container3 from './Components/Container3'
import Footer from './Components/Footer'

import './App.scss'

function App() {
  

  return (
    <>
  <Nav/> 
  <Container/> 
  <Container1 builder="Builder 1" name="Exceptional"/>
  <Container1  builder1="Builder " name1 ="Excellent"/>
  <Container1  builder2="Builder " name2="Very Good"/>
  <Container2 />
  <Container3 />
  <Footer />

     
   
    </>
  )
}

export default App
