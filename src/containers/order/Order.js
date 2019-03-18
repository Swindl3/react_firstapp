import React ,{Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {connect} from 'react-redux';
import {ordersFetch,ordersDelete} from "../../action"

class Order extends Component{
    
    constructor(props){
        super(props);
    
    }

    componentDidMount(){
       this.props.ordersFetch();
    }
    delOrder(order){
        this.props.ordersDelete(order.id);
    }
    showOrder(){
        return this.props.orders && this.props.orders.map(order =>{
            const date = new Date(order.orderDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={()=> this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders &&  order.orders.map(record =>{
                            return (
                                <li key={record.product.id}>
                                    {record.product.id}
                                    {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title ">
                            ยอดรวม {order.totalPrice}
                    </p>
                </div>
            )
        })

    }

    render(){
        return(
            <div>
                <Header />
                    <div className="container-fluid">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                            {this.showOrder()}
                        </div>
                    </div>
                <Footer name="Swindle" uni="Swindlemaxxx@gmail.com" />
            </div>
        )
    }
}
    function mapStatetoProps({orders}){
        return {orders}
    }

export default connect(mapStatetoProps,{ordersDelete,ordersFetch})(Order) ;