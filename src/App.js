import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/product/ProductItem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Header />
        <ProductItem productname="EIEI" price="50000"/>
        
        <ProductItem productname="EIEI2" price="50000"/>
        
        <ProductItem productname="EIEI3" price="50000"/>
        
        <ProductItem productname="EIEI4" price="50000"/>
        <Footer name="Max" uni="LazY" />
      </div>
    );
  }
}

export default App;
