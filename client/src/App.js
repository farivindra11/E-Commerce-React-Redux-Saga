import React, {Fragment} from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel';
import Footer from './components/Footer'
import ProductBox from './containers/ProductBox'
import './App.css';
import './style/detailadd.css'


function App() {
  return (
    <Fragment >
      <Navbar />
      <Carousel />
      <ProductBox />
      <Footer />
    </Fragment>
  );
}

export default App;
