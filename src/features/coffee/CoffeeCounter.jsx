import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoffee,
  addCoffeePerSecond,
  selectCoffees,
  selectCoffeesPerSecond,
} from "./coffeesSlice.js";
import coffeeCupImage from "../../assets/coffee_cup_image.png";

export default function CoffeeCounter() {
  const coffeeCount = useSelector(selectCoffees);
  const coffeesPerSecond = useSelector(selectCoffeesPerSecond);

  const dispatch = useDispatch();

  const manualAdd = (_e) => {
    dispatch(addCoffee());
  };

  const intervalDispatch = () => {
    dispatch(addCoffeePerSecond());
  };

  useEffect(() => {
    const interval = setInterval(intervalDispatch, 1000); // Run intervalDispatch every second
    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, []); // Run only once on component mount

  return (
    <section className="coffee_counter">
      <h3>Coffee: {coffeeCount}</h3>
      <p>{coffeesPerSecond} coffee/second</p>
      <img src={coffeeCupImage} alt="coffee cup" onClick={manualAdd} />
    </section>
  );
}
