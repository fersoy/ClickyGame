import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
// import Cards from './components/Cards'
import Body from './components/Body'
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      {/* <Cards /> */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
