import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem=(props)=>{
    const cartCtx=useContext(CartContext);
    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className={classes.meal}>
            {/* 1st div for meal name,description,price */}
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`₹ ${props.price}`}</div>
            </div>
            <div>
                 {/* another div for adding no of meals:  */}
                 <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>

            </div>
        </li>
    );
}

export default MealItem;