import { useState, useCallback } from "react";
import { Item } from "./components/Item";
import "./App.css";

function App() {
  const [itemValues, setItemValues] = useState([
    { value: "", id: "1" },
    { value: "", id: "2" },
    { value: "", id: "3" },
  ]);
  const changeValue = useCallback((id, value) => {
    setItemValues((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.value = value;
        }
        return item;
      })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent holds the state and passes it to items.</h1>
        <p className="App-header-output">{JSON.stringify(itemValues)}</p>
      </header>
      <div className="App-items">
        {itemValues.map((itemValue) => {
          return (
            <Item
              key={itemValue.id}
              id={itemValue.id}
              value={itemValue.value}
              onChange={changeValue}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
