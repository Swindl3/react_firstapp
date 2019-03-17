import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const About = () => {
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4" >
                        ดีดีดีดีดีดีดีดีดีดีดีดีดีดดดดดดดดดดดดดดดดดดด
                </p>
                <h3 className="text-success">จาก เฮล คาเฟ่</h3>
            </div>
            <Footer name="Swindle" uni="Swindlemaxxx@gmail.com"/>
        </div>
    )
}

export default About