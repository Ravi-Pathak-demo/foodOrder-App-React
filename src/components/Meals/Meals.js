import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    // Fragment is a component that renders its children without any wrapper element
    <Fragment>
      {/* rendering mealsSummary to page */}
      <MealsSummary />
      {/* rendering availableMeals  */}
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
