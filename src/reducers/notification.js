import * as types from '../constants/ActionType';
import * as messages from '../constants/Message';

let initialState = {
   show: true,
   message: messages.MSG_WELCOME,
   product: {},
};

const notification = (state = initialState, action) => {
   switch (action.type) {
      case types.MESSAGE_ADD_TO_CART:
         state = {
            show: true,
            message: messages.MSG_ADD_TO_CART_SUCCESS,
            product: action.product,
         }
         return { ...state };

         case types.MESSAGE_CLOSE_NOTIFICATION:
            state = {
               show: false,
               message: '',
               product: {},
            }
            return {...state};

            case types.MESSAGE_REMOVE_FROM_CART:
               return {...state, show: 'true', message: messages.MSG_REMOVE_FROM_CART_SUCCESS, product: action.product}

      default: return {...state};
   }
}

export default notification;