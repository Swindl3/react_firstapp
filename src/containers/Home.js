
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: "" };
  }
  componentDidMount() {
    //   this.setState({products:[
    //     { id: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
    //     { id: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
    //     { id: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
    //     { id: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
    //     { id: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
    //     { id: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
    // ]});
    // fetch("http://localhost:3001/products").then()
    axios.get("http://localhost:3001/products").then(res => {
      console.log(res.data);
      this.setState({ products: res.data });
    });
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <Monitor products={this.state.products} />
        <Footer name="Swindle" uni="Swindlemaxxx@gmail.com" />
      </div>
    );
  }
}

export default Home;
