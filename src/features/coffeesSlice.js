import { createSlice } from "@reduxjs/toolkit";

/** @type {{coffees: number, coffees/second: number, coffeeProducers: coffeeProducer[{name: string, quantity: number, coffee_second: number, cost: number, unlocked: boolean}]}} */
const initialState = {
  coffees: 0,
  coffees_second: 1,
  coffeeProducers: [
    {
      name: "Chemex",
      quantity: 0,
      coffee_second: 1,
      cost: 10,
      unlocked: false,
    },
    {
      name: "French Press",
      quantity: 0,
      coffee_second: 2,
      cost: 50,
      unlocked: false,
    },
    {
      name: "Mr. Coffee",
      quantity: 0,
      coffee_second: 5,
      cost: 100,
      unlocked: false,
    },
    {
      name: "Ten Cup Urn",
      quantity: 0,
      coffee_second: 10,
      cost: 150,
      unlocked: false,
    },
    {
      name: "Espresso Machine",
      quantity: 0,
      coffee_second: 20,
      cost: 250,
      unlocked: false,
    },
    {
      name: "Ten Gallon Urn",
      quantity: 0,
      coffee_second: 50,
      cost: 500,
      unlocked: false,
    },
    {
      name: "Coffeeshop",
      quantity: 0,
      coffee_second: 75,
      cost: 750,
      unlocked: false,
    },
    {
      name: "Coffee Factory",
      quantity: 0,
      coffee_second: 100,
      cost: 1000,
      unlocked: false,
    },
    {
      name: "Coffee Fountain",
      quantity: 0,
      coffee_second: 200,
      cost: 2500,
      unlocked: false,
    },
    {
      name: "Coffee River",
      quantity: 0,
      coffee_second: 1,
      cost: 5000,
      unlocked: false,
    },
  ],
};

const coffeesSlice = createSlice({
  name: "coffeeBank",
  initialState,
  reducers: {
    addCoffee: (state) => {
      state.coffees++;
    },
    addCoffeePerSecond: (state) => {
      setInterval((state.coffees += state.coffees_second), 1000);
    },
    /**the reducer below is not right -- i think this means i must pass i in when i map, not sure... */
    buy: (state, i) => {
      state.coffeeProducers[i].quantity += 1;
      state.coffeeProducers[i].cost *= 1.25;
    },
  },
});

export const { addCoffee, addCoffeePerSecond, buy } = coffeesSlice.actions;

export const selectCoffees = (store) => store.coffeeBank.coffees;
export const selectCoffeesPerSecond = (store) =>
  store.coffeeBank.coffees_second;
/**the selector below may not right... but i think it is */
export const selectCoffeeProducers = (store) =>
  store.coffeeBank.coffeeProducers;

export default coffeesSlice.reducer;
