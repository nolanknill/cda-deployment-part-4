import { useState, useEffect } from "react";
import axios from "axios";
import DonutSpinner from "../components/DonutSpinner";

const API_URL = process.env.REACT_APP_API_URL;

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/warehouses`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Warehouses</h1>
      {!warehouses.length ? (
        <DonutSpinner />
      ) : (
        <ul>
          {warehouses.map((warehouse) => (
            <li key={warehouse.id}>{warehouse.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Warehouse;
