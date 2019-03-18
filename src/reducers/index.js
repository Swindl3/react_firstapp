import {combineReducers } from 'redux';
import {reducer as reduxForm} from 'redux-form';
import OrderReducer from '../reducers/OrderReducer';
import ProductReducer from '../reducers/ProductReducer';

const rootReducer = combineReducers({
    orders:OrderReducer,
    products:ProductReducer,
    form:reduxForm
})

export default rootReducer