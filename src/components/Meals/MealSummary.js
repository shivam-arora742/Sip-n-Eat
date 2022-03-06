import classes from './MealSummary.module.css';

const MealSummary=()=>{
return(
    // for Summary of the Meals:
    <section className={classes.summary}>
        <h2>Delicious Home-Cooked Food, Delivered To You!!.</h2>
        <p>Sip your favorite drinks along side with a variety of Meals Available. </p>
        <p>Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.</p>
    </section>
);
}
export default MealSummary;