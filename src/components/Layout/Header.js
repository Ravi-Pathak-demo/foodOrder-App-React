import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCard from "./HeaderCard";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    //   React.Fragment is used to return multiple elements
    <Fragment>
      {/* classes.header is css module in react  */}

      <header className={classes.header}>
        <h1>UniSqu</h1>
        <HeaderCard onClick={props.onCartClick} />
        {/* onCartClick is the function name passed as props by App.js */}
        {/* onClick function is a custom function which handles output by HeaderCard */}
      </header>

      {/* main-image is in [] because it has (-), so cant access directly */}
      <div className={classes["main-image"]}>
        {/* mealsImage is imported from assets , if accessed from internet then only url no {} */}
        <img src={mealsImage} alt="A TABLE OF DELICIOUS FOOD" />
      </div>
    </Fragment>
  );
};

export default Header;
