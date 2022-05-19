import classes from "./Card.module.css";

const Card = (props) => {
  // rendering all values(properties) within div (called children) of the Card component
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
