import { useSelector, useDispatch } from "react-redux";
import { buy, selectCoffeeProducers } from "./coffeesSlice";

export default function CoffeeProducer() {
  const coffeeProducers = useSelector(selectCoffeeProducers);
  const dispatch = useDispatch();

  const onBuy = (payload) => {
    dispatch(buy(payload));
  };

  return (
    <>
      {coffeeProducers
        .filter((producer) => producer.unlocked === true)
        .map((producer) => (
          <section key={producer.name} className="producer_listing">
            <div className="name_buy">
              <p>{producer.name}</p>
              <button className="listing_button" onClick={() => onBuy(producer)}>Buy</button>
            </div>
            <div className="other_details">
              <p>Quantity: {producer.quantity}</p>
              <p>Coffee/second: {producer.coffees_second}</p>
              <p>Cost: {producer.cost} coffees</p>
            </div>
          </section>
        ))}
    </>
  );
}
