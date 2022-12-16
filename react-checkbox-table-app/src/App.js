import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SelectTableComponent from "./select-table.component";

export default function App() {
  return (
    <div className="container">
      <h1>Clientes</h1>
      <p>500 clientes</p><br></br>

      <SelectTableComponent />
    </div>
  );
}
