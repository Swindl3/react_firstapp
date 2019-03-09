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
        console.log('Constructor ProductItem|'+props.productName);
        
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
                 <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>Buy</button>
            </div>
        )
    }   
}

export default ProductItem;