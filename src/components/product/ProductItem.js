import React,{Component} from 'react';
// Func Component
// const ProductItem = (props) => {
//     const {productname,price} = props ;
//     return (<div>
//         <p>{productname}</p>
//         <p>{price}</p>
//     </div>)
// }
// Class Component
class ProductItem extends Component{
    constructor(props){
        super(props);
        console.log('Constructor ProductItem|',props.product.productName);
        
    }
    //doBuy(productName){
            //console.log(productName)
    //}
    render(){
        const {productName,unitPrice,thumbnail} = this.props.product; //เนื่องจากเป็น Class  
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt={productName}/>
                <h5 className="mt-2">{productName}</h5>
                <p className="text-right title">{unitPrice}</p>
                {this.props.onAddOrder &&
                 <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>Buy</button>
                }
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                 <button className="btn  btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>Edit</button>
                }
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                 <button className="btn  btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)}>Delete</button>
                 }
                 <hr />
            </div>
        )
    }   
}

export default ProductItem;