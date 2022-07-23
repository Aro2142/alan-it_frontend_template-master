import './App.css';
import React, {useState, useEffect} from 'react'
import Graph from "./Components/Graph";
import Graph_two from "./Components/Graph_two";


const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      //let data = [];
      //let response;
      fetch("http://127.0.0.1:8080/api/data/data.json")
        .then((response) => {return response.json()})
        .then((result) => {
          setData(result);
          console.log(result)
        });
      },[])
return [
//<Graph data={data}/>,
<Graph_two data={data}/>
];
}
export default App;


