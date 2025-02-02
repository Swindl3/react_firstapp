import React,{ Component} from 'react';
import {reduxForm ,Field} from 'redux-form'
import FormField from '../common/FormField'
import {productFormField} from './formField';
import {connect} from 'react-redux'
class ProductForm extends Component {
    

    renderField(formField){
            
            return formField.map(({label,name,type ,required})=>{
                return(
                    <Field key={name} label={label} name={name} type={type} component={FormField} required={required}/>
                )
            })
    }


    render(){
        const {onProductSubmit} = this.props;
       return (
           <div>
               <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                   {this.renderField(productFormField)}
                   <button className="btn btn-block btn-info title" type="submit">
                       Save
                   </button>
               </form>
           </div>
       )
    }
}
 function validate(values){
    const errors = {} ;
    productFormField.forEach(({name,required})=>{
        if(!values[name] && required){
            errors[name] = 'กรุณากรอกข้อมูลด้วย';
        }
    })
    return errors;
 }
ProductForm = reduxForm({validate,form:"productForm"})(ProductForm)

function mapStateToProps({products}){
    if(products && products.id){
        return {initialValues : products}
    }else{
        return {}
    }
    

}
export default connect(mapStateToProps)(ProductForm);