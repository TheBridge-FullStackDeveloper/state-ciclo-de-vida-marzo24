import "./App.css";
import Counter from "./components/Counter/Counter";
import Example from "./components/Example/Example";
import ExampleShow from "./components/ExampleShow/ExampleShow";

function App() {
  return (
    <div>
      <ExampleShow/>
      <Counter initialState={0} pepito={"pruebaDani"} />
      <Counter initialState={5} pepito={"pruebaDani"} />
      <Counter initialState={23} pepito={"pruebaDani"} />
      <Example/>
    </div>
  );
}

export default App;
