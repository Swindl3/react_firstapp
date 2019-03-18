import {PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_UPDATE, PRODUCT_CREATE} from '../action/Types'

export default function(state= [] ,action){
    switch(action.type){
        case PRODUCTS_FETCH :
        case PRODUCT_FETCH :
        return action.payload;
        case PRODUCT_CREATE :
            return {saved:true ,msg:"บันทึกสินค้าเรียบร้อย"}
        case PRODUCT_UPDATE :
        return {...state ,saved:true ,msg:"อัพเดตสินค้าเรียบร้อย"}
        default:
            return state;   
    }
}