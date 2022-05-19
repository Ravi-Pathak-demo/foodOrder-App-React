import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// export default AvailableMeals;
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 2299,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 1650,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 1299,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 1899,
  },
];

const AvailableMeals = () => {
  // mapping all meals to the list of meals (new array of meal items)
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem id={meal.id} key={meal.id} {...meal} />
    // ...meal is a spread operator, which spreads the properties of the meal object for each meal to the MealItem component
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {/* listing all mealItems */}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
