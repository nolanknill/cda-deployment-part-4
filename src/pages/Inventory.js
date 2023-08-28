import { useState, useEffect } from "react";
import axios from "axios";
import DonutSpinner from "../components/DonutSpinner";

const API_URL = process.env.REACT_APP_API_URL;

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/inventories`)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Inventory</h1>
      {!inventory.length ? (
        <DonutSpinner />
      ) : (
        <ul>
          {inventory.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
