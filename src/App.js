import './App.css';
import React, {useState, useEffect} from 'react'
import Tabs_R from "./Components/Tabs";
//import Graph from "./Components/Graph";
import Graph_two from "./Components/Graph_two";
import Graph1 from "./Components/Graph1";
import Graph2 from "./Components/Graph2";
import Graph3 from "./Components/Graph3";
import Graph4 from "./Components/Graph4";
import Graph5 from "./Components/Graph5";
//import Graph6 from "./Components/Graph6";

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
<Tabs_R />,
//<Graph data={data}/>, This example, not use
<Graph_two data={data}/>,
//<Graph1 data = {data}/>,
//<Graph2 data = {data}/>,
//<Graph3 data = {data}/>,
//<Graph4 data = {data}/>,
//<Graph5 data = {data}/>,
//<Graph6 data = {data}/>
];
}
//Графы закоментированны, потому что на моем слабом пк все сыпают ошибки, по отдельности нет, на хорошем железе все должно быть ок
export default App;


