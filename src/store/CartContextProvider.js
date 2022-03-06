import CartContext from "./cart-context";
// using useReducer hook for state management:
import { useReducer } from "react";

// default state for cart:
const defaultState={
  items:[],
  totalAmount:0
}

// reducer function for cart:
const cartReducer=(state,action)=>{
  // for add item logic:
  if(action.type==='ADD'){
    const updatedtotalAmount=state.totalAmount+action.target.price*action.target.amount;
    
    // Complex Reducer Logic:    
    // find out existing Item &  its index:
    const existItemIndex=state.items.findIndex(item=>item.id===action.target.id);
    const existItem=state.items[existItemIndex];
    // array of cart items:
    let updatedItems;
    // if existing item belongs to cart:
    if(existItem){
      let updatedItem;
      updatedItem={
        ...existItem,
        amount:existItem.amount+action.target.amount
      };
      updatedItems=[...state.items]
      updatedItems[existItemIndex]=updatedItem;
    }
    // else directly add the item & amount to array:
    else{
      updatedItems=state.items.concat(action.target);
    
    }
    return{
      items:updatedItems,
      totalAmount:updatedtotalAmount
    };
  }
  // for remove item:
  if(action.type==='REMOVE'){
    // find out existing Item &  its index:
    const existItemIndex=state.items.findIndex(item=>item.id===action.id);
    const existItem=state.items[existItemIndex];
    const updatedtotalAmount=state.totalAmount-existItem.price;
    // array of cart items:
    let updatedItems;
    // if amount of item =1:
    if(existItem.amount===1){
      updatedItems=state.items.filter(item=>item.id!==action.id);
    }
    else{
      const updatedItem={...existItem,amount:existItem.amount-1};
      updatedItems=[...state.items];
      updatedItems[existItemIndex]=updatedItem;
    }
    return{
      items:updatedItems,
      totalAmount:updatedtotalAmount
    };
  }
  // else:
  return defaultState;
}

const CartContextProvider = (props) => {
  // useReducer with 2 arguments & 2 elements  in return:
  const [cartState,dispatchCart]=useReducer(cartReducer,defaultState);
  // using dispatch function inside addItem & removeItem Handler:
  const addItemHandler = (item) => {
    dispatchCart({type:'ADD',target:item});
  };
  const removeItemHandler = (id) => {
    dispatchCart({type:'REMOVE',id:id});
  };
  // default values for provider:
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
