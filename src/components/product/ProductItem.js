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
        console.log('Constructor|'+props.productname);
        
    }
    render(){
        const {productname,price} = this.props; //เนื่องจากเป็น Class  
        return (
            <div>
                <p>{productname}</p>
                <p>{price}</p>
            </div>
        )
    }
}

export default ProductItem;