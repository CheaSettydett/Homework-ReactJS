
import './App.css';
import React, { useState, useEffect } from "react";
import { Table } from './components/Table';

function App() {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [products, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className='App'>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Imgaes</th>
          </tr>
        </thead>
        <Table products={products}/>

      </table>
    </div>

  );
}

export default App;
