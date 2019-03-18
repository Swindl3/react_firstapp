import React , {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/product/ProductForm';
import {connect} from 'react-redux'
import {productCreate , productUpdate , productFetch} from '../../action/ProductActions'
class ProductEdit extends Component {

    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render(){
            const {match,formValues ,products , productCreate , productUpdate} = this.props;
        
        return(
            <div>
                <Header />
                    <div className="container col-md-5" >
                    {match.path.indexOf("add")>0 && (
                       <div>
                            <h2>เพิ่ม</h2>
                            <ProductForm onProductSubmit={()=>productCreate(formValues)}/>
                        </div>
                    )}
                    {match.path.indexOf("edit") >0 && (
                        <div>
                            <h2>แก้ไข</h2>
                            <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
                        </div>
                    )}
                        
                    </div>
                <Footer />
            </div>
        )
    }
}
    function mapStateToProps({form , products}){
        return {formValues:form.productform ? form.productform.values : null,products}
    }
export default connect(mapStateToProps ,{productCreate ,productUpdate , productFetch})(ProductEdit);