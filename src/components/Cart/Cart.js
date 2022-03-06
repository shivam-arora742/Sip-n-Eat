// Modal Cart Component:
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
// import CartItem component:
import CartItem from './CartItem';

// import context:
import CartContext from '../../store/cart-context';
import { useContext } from 'react'; 

const Cart=(props)=>{
    // dummy cart item list:
    // const cartItems =[{id:'c1',name:'McAloo Tikki',price:'35.55'}]

    // using cart-context:
    const cartCtx=useContext(CartContext);

    // add & remove handlers for cart items:
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1});
    };
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    };


    // for order button showing if items are added to cart:
    const orderItems=cartCtx.items.length > 0; 
    return(
        // wrapping Cart using Modal:
        <Modal>
            {
                <ul className={classes['cart-items']}>
                    {cartCtx.items.map(item=><CartItem key={item.id} name={item.name} 
                     price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>)}
                </ul>
            }
            <div className={classes.total}>
                <span >Total: </span> <span>{`₹ ${cartCtx.totalAmount}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                 {/*Conditional Rendering order button:  */}
                {orderItems && <button className={classes.button}>Order Now</button>}
            </div>
        </Modal>
    );
}

export default Cart;