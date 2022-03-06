// Header Component:

import React,{Fragment} from 'react';
// import image from assets folder:
import FoodHeader from '../../assets/Food Header.jpg'
// importing classes from module.css:
import classes from './Header.module.css';

// Importing CartButton:
import CartButton from './CartButton';

const Header=(props)=>{
return (
    // fragment for wrapping purpose:
    <Fragment>
        {/* header includes App Name & Cart Button */}
        <header className={classes.header}>
            <h1>SIP-n-EAT</h1>
            <CartButton onShowCart={props.onShowCart}/>
        </header>
        {/* div for Image section */}
        <div className={classes['main-image']}>
            <img src={FoodHeader} alt="Welcome to SIP-n-EAT!!"/>
        </div>
    </Fragment>
)
};

export default Header;
