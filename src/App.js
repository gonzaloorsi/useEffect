import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  const [titleName, setTitleName] = React.useState("");

  React.useEffect(() => {
    document.title = `Hello, ${titleName}! | ${count}`;
  }, [count, titleName]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setTitleName(name);
            setName("");
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
        {titleName && <p>Your name is: {titleName}</p>}
        <p>Start counting: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
      </header>
    </div>
  );
}

export default App;
