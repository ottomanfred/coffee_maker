import { useDispatch, useSelector } from "react-redux";
import {
  addCoffee,
  addCoffeePerSeconds,
  selectCoffees,
  selectCoffeesPerSecond,
} from "./coffeesSlice.js";

export default function CoffeeCounter() {
  const coffeeCount = useSelector(selectCoffees);
  const coffeesPerSecond = useSelector(selectCoffeesPerSecond);

  const dispatch = useDispatch();

  const onClick = (_e) => {
    dispatch(addCoffee);
  };

  const intervalDispatch = (_e) => {
    dispatch(addCoffeePerSeconds);
  };

  return (
    <>
      <h3>Coffee: {coffeeCount}</h3>
      <p>{coffeesPerSecond} coffee/second</p>
      <img
        src="../assets/coffee_cup_image.png"
        alt="coffee cup"
        onClick={onClick}
      />
      <div>{intervalDispatch}</div>
    </>
  );
}
