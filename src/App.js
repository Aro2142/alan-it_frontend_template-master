import './App.css';
import Graph from "./Components/Graph";
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {
let [DATA, setData] = useState([0]);

useEffect(() => {
});
  return (
    //<Graph/>
    <div><p>{DATA}</p></div>
  );
}
fetch('http://127.0.0.1:8080/api/data/data.json')
.then(response => {return response.json();})
.then(data => {console.log(data);})
.catch(err => {});
export default App;
