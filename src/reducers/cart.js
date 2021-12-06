import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];
// if (data) {
//    initialState = data;
// }

// find index
let findIndex = (id, arr) => {
   let index = -1;
   if (arr.length > 0) {
      index = arr.findIndex(item => item.product.id === id);
   }
   return index;
}

const cart = (state = initialState, action) => {

   switch (action.type) {
      case types.ADD_TO_CART:
         let item = action.item;
         let addItem = null;
         // check the added item in store. addIndex = -1 if there's no added  item bebore
         let addIndex = findIndex(item.id, state);
         if (addIndex === -1) {
            addItem = {
               product: item,
               quantity: 1,
            }
            state = [...state, addItem];
         } else {
            state[addIndex].quantity++;
         }

         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      case types.UPDATE_QUANTITY:
         // find index of updated item
         let updateIndex = findIndex(action.id, state);
         if (updateIndex !== -1){
            let updateItem = state[updateIndex];
            updateItem.quantity = action.quantity;
            state.splice(updateIndex, 1, updateItem);

            localStorage.setItem('CART', JSON.stringify(state));
         }
         return [...state];

      case types.DELETE_FROM_CART:
         if (action.id) {
            let deleteIndex = findIndex(action.id, state);
            state.splice(deleteIndex, 1);
         }

         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      default: return [...state];
   }
}

export default cart;