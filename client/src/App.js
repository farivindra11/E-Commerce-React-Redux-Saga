import React, {Fragment} from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ProductBox from './containers/ProductBox'
import './App.css';

function App() {
  return (
    <Fragment >
      <Navbar />
      <ProductBox />
      <Footer/>
    </Fragment>
  );
}

export default App;
