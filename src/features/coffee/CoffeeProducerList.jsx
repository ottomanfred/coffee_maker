import CoffeeProducer from "./CoffeeProducer";

export default function CoffeeProducerList() {
  return (
    <section>
      <h3>Coffee Producers</h3>
      <div className="producer_list">
        <CoffeeProducer />
      </div>
    </section>
  );
}
