import { createSlice } from "@reduxjs/toolkit";
//did i do the type properly?
/**
 * @typedef {name: string, quantity: number, coffees_second: number, cost: number, unlocked: boolean} coffeeProducer
 */
/**
 * @type {{coffees: number, coffees_second: number, coffeeProducers: coffeeProducer[]}}
 * */
const initialState = {
  coffees: 0,
  coffees_second: 1,
  coffeeProducers: [
    {
      name: "Chemex",
      quantity: 0,
      coffees_second: 1,
      cost: 10,
      unlocked: false,
    },
    {
      name: "French Press",
      quantity: 0,
      coffees_second: 2,
      cost: 50,
      unlocked: false,
    },
    {
      name: "Mr. Coffee",
      quantity: 0,
      coffees_second: 5,
      cost: 100,
      unlocked: false,
    },
    {
      name: "Ten Cup Urn",
      quantity: 0,
      coffees_second: 10,
      cost: 150,
      unlocked: false,
    },
    {
      name: "Espresso Machine",
      quantity: 0,
      coffees_second: 20,
      cost: 250,
      unlocked: false,
    },
    {
      name: "Ten Gallon Urn",
      quantity: 0,
      coffees_second: 50,
      cost: 500,
      unlocked: false,
    },
    {
      name: "Coffeeshop",
      quantity: 0,
      coffees_second: 75,
      cost: 750,
      unlocked: false,
    },
    {
      name: "Coffee Factory",
      quantity: 0,
      coffees_second: 100,
      cost: 1000,
      unlocked: false,
    },
    {
      name: "Coffee Fountain",
      quantity: 0,
      coffees_second: 200,
      cost: 2500,
      unlocked: false,
    },
    {
      name: "Coffee River",
      quantity: 0,
      coffees_second: 1,
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
      state.coffees += 1;
    },
    addCoffeePerSecond: (state) => {
      state.coffees += state.coffees_second;
      for (const elem of state.coffeeProducers) {
        if (elem.unlocked === false && state.coffees >= elem.cost * 0.5) {
          elem.unlocked = true;
        }
      }
    },
    buy: (state, { payload }) => {
      state.coffees_second += payload.coffees_second;
      state.coffees -= payload.cost;
      state.coffeeProducers.find(
        (producer) => producer.name === payload.name
      ).quantity += 1;
      state.coffeeProducers.find(
        (producer) => producer.name === payload.name
      ).cost *= 1.25;
    },
  },
});

export const { addCoffee, addCoffeePerSecond, buy } = coffeesSlice.actions;

export const selectCoffees = (store) => store.coffeeBank.coffees;
export const selectCoffeesPerSecond = (store) =>
  store.coffeeBank.coffees_second;
export const selectCoffeeProducers = (store) =>
  store.coffeeBank.coffeeProducers;

export default coffeesSlice.reducer;
