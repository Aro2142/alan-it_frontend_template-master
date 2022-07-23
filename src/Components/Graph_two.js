import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";



const Graph_two = ({data}) => {
const chart = useRef(null);
    useLayoutEffect(() => {
      console.log(data)
       if (data.length === 0){
         return
       }

        let finaldata = [];
 data.forEach((item, index) => {if (index === 0)
 {finaldata.push({date: item.year + "-" + item.month,year: item.year, month: item.month, profit: item.profit});return};
 if (item.year!== finaldata[finaldata.length -1].year || item.month!== finaldata[finaldata.length -1].month)
 {
    finaldata.push({date: item.year + "-" + item.month,year: item.year, month: item.month, profit: item.profit })
 }
 else finaldata[finaldata.length - 1].profit += item.profit;
 })

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
var root = am5.Root.new("chartdiv1");
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "date",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "profit",
  sequencedInterpolation: true,
  categoryXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});


// Set data###################################################################################


xAxis.data.setAll(finaldata);
series.data.setAll(finaldata);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);
}, []);
return <div id="chartdiv1" style={{ width: "100%", height: "500px", top: "0px",right: "0px",position: "absolute" }}></div>;}
export default Graph_two
