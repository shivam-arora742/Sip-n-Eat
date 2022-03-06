// Import Icon for Cart:
import {FaShoppingCart} from 'react-icons/fa';

//importing context for consuming:
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

// Classes for styling:
import classes from './CartButton.module.css';

const CartButton=(props)=>{
    // storing cart-context into pointer:
    const cartCtx=useContext(CartContext);
    // use of reduce()to findout current amount of items:
    const cartItemNo=cartCtx.items.reduce((current,item)=>{
        return current+=item.amount;
    },0);

    return(
        // button components with 3 contents:
        <button className={classes.button} onClick={props.onShowCart}>
            {/* CartIcon */}
            <FaShoppingCart className={classes.icon}/>
            {/* CartText */}
            <span>My Cart</span>
            {/* CartBadge */}
            <span className={classes.badge}>+{cartItemNo}</span>
        </button>
    );
}

export default CartButton;