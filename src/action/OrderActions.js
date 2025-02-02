import Axios from 'axios';
import {ORDERS_FETCH} from './Types'
export const ordersFetch = () => {
    return dispatch =>{
        Axios.get("http://localhost:3001/orders")
        .then(res =>{
            dispatch({type:ORDERS_FETCH , payload: res.data })
    })
    }
    
}

export  const ordersDelete = id => {
    return dispatch => {
        Axios.delete("http://localhost:3001/orders/"+id).then( res => {
            Axios.get("http://localhost:3001/orders").then(res =>{
                dispatch({type:ORDERS_FETCH,payload:res.data})
            })
        }

        )
    }
}