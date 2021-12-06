import * as types from '../constants/ActionType';

export const addToCart = (item) => {
   return {
      type: types.ADD_TO_CART,
      item,
   }
}

export const updateQuantity = (id, quantity) => {
   return {
      type: types.UPDATE_QUANTITY,
      id,
      quantity,
   }
}

export const deleteFromCart = (id) => {
   return {
      type: types.DELETE_FROM_CART,
      id,
   }
}


// MESSAGE
export const message_addToCart = (product) => {
   return {
      type: types.MESSAGE_ADD_TO_CART,
      product,
   }
}

export const message_removeFromCart = (product) => {
   return {
      type: types.MESSAGE_REMOVE_FROM_CART,
      product,
   }
}

export const message_closeNotification = () => {
   return {
      type: types.MESSAGE_CLOSE_NOTIFICATION,
   }
}
