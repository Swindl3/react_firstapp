import React, { Component } from "react";
import {Link} from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.timerID);
  }
  tick() {
    // this.state = {date :new Date()} เปลี่ยนข้อมูลใน state แบบนี้ไม่ได้
    this.setState({
      date: new Date()
    });
  }
  render() {
    const styles = {height:100,width:100}
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-danger">
              <img style={styles} src="/images/logo/logo.png" alt="" /> Hell Cafe
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()} </h5>
            <ul className="list-inline">
              <li className="list-inline-item title"><Link to="/">หน้าหลัก</Link></li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"> <Link to="/orders">รายการสั่งซื้อ</Link></li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"> <Link to="/products">สินค้า</Link></li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title"> <Link to="/about">เกี่ยวกับเรา</Link></li>
              
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;
