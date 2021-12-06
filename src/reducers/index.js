import { combineReducers } from "redux";
import productList from './productList';
import cart from './cart';
import notification from './notification';

const appReducers = combineReducers({
   productList,
   cart,
   notification,
});

export default appReducers;