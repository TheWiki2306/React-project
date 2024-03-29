import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Porfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App;
