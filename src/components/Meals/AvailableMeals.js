import classes from "./AvailableMeals.module.css";

// Card component to wrap list of Meal Items:
import Card from "../UI/Card";

// MealItem to represent meals individually:
import MealItem from "./MealItems/MealItem";



// Dummy Data for list of Meals:
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Kadhai Paneer",
    description: "Spicy & flavorful dish made by cooking paneer & bell peppers in a fragrant, fresh ground spice mix. ",
    price: 165,
  },
  {
    id: "m2",
    name: "Malai Kofta",
    description: "Delicious dish of fried balls of potato and paneer in a rich and creamy gravy made with sweet onions and tomatoes.",
    price: 155,
  },
  {
    id: "m3",
    name: "McAloo Tikki Burger",
    description: "Potato & peas patty topped with veg sauce ,ketchup,tomatoes & onions with toasted buns.",
    price: 46,
  },
  {
    id: "m4",
    name: "McChicken Burger",
    description: "Delightfully crispy chicken sandwich with a crispy chicken patty topped with mayo and shredded iceberg lettuce.",
    price: 121,
  },
  {
    id: "m5",
    name: "Butter Naan Thali",
    description: "Thali includes: 2 butter naan + mix vegetables + daal makhani + panner + salad + raita. ",
    price: 179,
  },
  {
    id: "m6",
    name: "Garlic  Naan Thali",
    description: "Thali includes: 2 garlic  naan + mix vegetables + daal makhani + panner + salad + raita + bowl of rice. ",
    price: 279,
  },
  {
    id: "m7",
    name: "Tandoori Paneer Tikka",
    description: "Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. ",
    price: 150,
  },
  {
    id: "m8",
    name: "Peanut Masala",
    description: "Quick snack made by frying or oven roasting spiced gram flour coated peanuts. ",
    price: 118,
  },
  {
    id: "m9",
    name: "Oreo Shake",
    description: "Rich and creamy milkshake prepared with signature oreo cookies with oreo cream.",
    price: 110,
  }
  ,{
    id: "m10",
    name: "Black Currant Mojito",
    description: "Blend of Black Currant Fruit , Mint Leaves & Lemon mixed with Sparkling Water.",
    price: 130,
  },
  {
    id: "m11",
    name: "Soft Drinks",
    description: "Choose one of the soft drinks : Sprite /Coke /Pepsi /Appy Fizz .",
    price: 60,
  },
  {
    id: "m12",
    name: "Ice Tea",
    description: "Medium sized Ice Tea great during summers.",
    price: 56,
  },
  {
    id: "m13",
    name: "Chocolate Milk Shake ",
    description: "Specially curated milk based beverage for Indian tastes with a rich layer of dark chocolated at the top.",
    price: 75,
  },
  {
    id: "m14",
    name: "Green Salad",
    description: "Blend of tomatoes,onions,cabbage , beetroot,carrot & raddish that is best for health.",
    price: 50,
  },
  {
    id: "m15",
    name: "Fried Pappad",
    description: "Pappad fried in olive oil & topped with mix vegetables & black salt.",
    price: 30,
  }
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
