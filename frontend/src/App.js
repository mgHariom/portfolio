import React from 'react';
import { About, Footer, Header, Testimonial,Skills, Work, Contact  } from './container';
import { Navbar } from './components/Index'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
