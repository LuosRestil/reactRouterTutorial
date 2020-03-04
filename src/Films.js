import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Films() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    fetch("https://ghibliapi.herokuapp.com/films?_limit=10")
      .then(data => data.json())
      .then(json => {
        console.log(json);
        setItems(json);
      });
  };

  return (
    <div>
      <h1>Films Page</h1>
      {items.map(item => {
        return (
          <Link key={item.id} to={`/films/${item.id}`}>
            <div>
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Films;
