import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef } from 'react';

const MealItemForm=(props)=>{
    // useRef for taking Input Amount:
    const amtInputRef=useRef();

    const mealSubmitHandler=(event)=>{
        // prevent form refreshing:
        event.preventDefault();

        // get eneteredAMt in string:
        const enteredAmt=amtInputRef.current.value;

        // convert enteredAmt in number:
        const enteredAmtNumber=+enteredAmt;

        // check for empty & negative values:
        if(enteredAmt.trim().length===0 || enteredAmtNumber<1){
            return;
        }

        // passing entered amount to MealItem using props:
        props.onAddToCart(enteredAmtNumber);
    }

    return(
        // it renders a form element with input & button tags:
        <form className={classes.form} onSubmit={mealSubmitHandler}>
            <Input ref={amtInputRef} label="Amount: " input={{
                id:"amount_"+props.id,
                type:"number",
                min:"1",
                max:"10",
                defaultValue:"0",
                step:"1"
            }} />
            {/* passing input as object with all attributes as key/value pairs. */}
            <button> Add  </button>
        </form>
    );
}

export default MealItemForm;