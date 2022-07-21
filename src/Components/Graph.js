import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {useState, useEffect, useRef} from 'react'



am4core.useTheme(am4themes_animated);

const Graph = ({data}) => {
const chart = useRef(null);
    useEffect(() => {
      console.log(data)
       if (data.length === 0){
         return
       }

      
 let x = am4core.create("chartdiv", am4charts.XYChart);
 x.paddingRight = 20;

 let finaldata = [];
 data.forEach((item, index) => {if (index === 0)
 {finaldata.push({date: item.year + "-" + item.month,year: item.year, month: item.month, sales: item.sales});return};
 if (item.year!== finaldata[finaldata.length -1].year || item.month!== finaldata[finaldata.length -1].month)
 {
    finaldata.push({date: item.year + "-" + item.month,year: item.year, month: item.month, sales: item.sales })
 }
 else finaldata[finaldata.length - 1].sales += item.sales;
 })

 console.log(data)

 x.data = finaldata;
 let dateAxis = x.xAxes.push(new am4charts.DateAxis());
 dateAxis.renderer.grid.template.location = 0;
 let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
 valueAxis.tooltip.disabled = true;
 valueAxis.renderer.minWidth = 35;
 let series = x.series.push(new am4charts.LineSeries());
 series.dataFields.dateX = "date";
 series.dataFields.valueY = "sales";
 series.tooltipText = "{valueY.sales}";
 x.cursor = new am4charts.XYCursor();
 let scrollbarX = new am4charts.XYChartScrollbar();
 scrollbarX.series.push(series);
 x.scrollbarX = scrollbarX;
 chart.current = x;
 return () => {
 x.dispose();
};
}, []);
  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
export default Graph
