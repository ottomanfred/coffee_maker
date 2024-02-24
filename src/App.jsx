import CoffeeCounter from "./features/CoffeeCounter.jsx";
import CoffeeProducerList from "./features/CoffeeProducerList.jsx";
import "./App.css";

const App = () => {
  return (
    <main>
      <CoffeeCounter />
      <CoffeeProducerList />
    </main>
  );
};

export default App;
