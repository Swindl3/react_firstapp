import React,{Component} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {withRouter} from "react-router-dom"
import ProductList from "../../components/product/ProductList"
import {connect} from 'react-redux'
import {productsFetch,productsDelete} from '../../action/index'

class Product extends Component {
    constructor(props){
        super(props);
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        console.log(1)
    }
    componentDidMount(){
       this.props.productsFetch();
    }

    delProduct(product){
        this.props.productsDelete(product.id);
    }
    editProduct(product){
        this.props.history.push('products/edit/'+product.id)
    }
    render(){
        console.log("Render Product",this.props.products)
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success title float-right" onClick={()=>this.props.history.push('products/add')}>เพิ่ม</button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products) && 
                        <ProductList 
                            products={this.props.products} 
                            onDelProduct={this.delProduct} 
                            onEditProduct={this.editProduct}
                        />
                    }
                </div>
                <Footer />
            </div>
        )
    }
}
    function mapStateToProps({products}){
        return {products}
    }

export default withRouter(connect(mapStateToProps,{productsFetch,productsDelete})(Product))