import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Footer.module.css";
import {FaInstagram} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer=(props)=>{
return(
    <Fragment>
        <div className={classes.foot}>
            <p>Connect with us on -</p>
        <span> <FaInstagram /> : ft.auro_raa</span>
        <span><SiGmail/> : shivamarora0843@gmail.com</span>
        </div>
    </Fragment>
);
}

export default Footer;