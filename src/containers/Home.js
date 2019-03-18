import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import {connect} from 'react-redux'
import {productsFetch} from "../action/index"
class Home extends Component {
  constructor(props) {
    super(props);
   
  }
  componentDidMount() {
    this.props.productsFetch()
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <Monitor products={this.props.products} />
        <Footer name="Swindle" uni="Swindlemaxxx@gmail.com" />
      </div>
    );
  }
}
  function mapStateToProps({products}){
    console.log("Store state",products)
     return {products};
  }

export default connect(mapStateToProps,{productsFetch})(Home);
