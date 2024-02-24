import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoffee, addCoffeePerSeconds, selectCoffees, selectCoffeesPerSecond } from "./coffeesSlice";

export default function CoffeeCounter() {
  const coffeeCount = useSelector(selectCoffees)

  const dispatch = useDispatch();

  const onAdd = (e) => {
    e.preventDefault();
    dispatch(addNumber(+userInput));
  };

  return (
    <form onSubmit={onAdd}>
      <label>
        Add a Number to the Bank
        <input
          name="number"
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button>Add Number</button>
    </form>
  );
}
