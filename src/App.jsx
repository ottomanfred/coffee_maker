import CoffeeCounter from "./features/coffee/CoffeeCounter.jsx";
import CoffeeProducerList from "./features/coffee/CoffeeProducerList.jsx";
import "./App.css";

const App = () => {
  return (
    <main className="app_container">
      <CoffeeCounter />
      <CoffeeProducerList />
    </main>
  );
};

export default App;
