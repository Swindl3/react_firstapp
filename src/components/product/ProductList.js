import React,{Component} from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component{
    showProducts(){
            console.log("FromFn",this.props.products)
            return this.props.products && this.props.products.length > 0 && this.props.products.map(product=>(
                <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}/> //{...product = spread operator}
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