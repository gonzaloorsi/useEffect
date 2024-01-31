import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `Hello! ${count}`;
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <p>Start counting: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
      </header>
    </div>
  );
}

export default App;
