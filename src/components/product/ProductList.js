import React,{Component} from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component{
    showProducts(){
            console.log(this.props.products)
            return this.props.products && this.props.products.map(product=>(
                <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} /> //{...product = spread operator}
            ))
      
        
    }
    render(){
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList;