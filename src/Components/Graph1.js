import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


//
const Graph1 = ({data}) => {
const chart = useRef(null);
    useLayoutEffect(() => {
      console.log(data)
       if (data.length === 0){
         return
       }

        let finalData = [];
data.forEach((item, index) => {
      if (index === 0) {
        finalData.push({
          manager: item.manager,
          sales: parseInt(item.sales),
        });
        return;
      }
        let found = false;
        let pos = 0;
        finalData.forEach((item2, index2)=>{
        if(item2.manager == item.manager)
        {
            found = true;
            pos = finalData.indexOf(item2)
            return;
        }
        })
        if (!found) {
        finalData.push({
          manager: item.manager,
          sales: parseInt(item.sales),
        });
      } else
      {
        finalData[pos].sales += parseInt(item.sales);
      }
      });



}, []);
return [
]

;}
export default Graph1
