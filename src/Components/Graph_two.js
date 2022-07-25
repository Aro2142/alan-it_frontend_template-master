import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


//
const Graph_two = ({data}) => {
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
          year: item.year,
          sales: parseInt(item.sales),
        });
        return;
      }
        let found = false;
        let pos = 0;
        finalData.forEach((item2, index2)=>{
        if(item2.year == item.year)
        {
            found = true;
            pos = finalData.indexOf(item2)
            return;
        }
        })
        if (!found) {
        finalData.push({
          year: item.year,
          sales: parseInt(item.sales),
        });
      } else
      {
        finalData[pos].sales += parseInt(item.sales);
      }
      });


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
var root = am5.Root.new("chartdiv12");
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
  pinchZoomX:true,
  fill: am5.color(0xADFF2F)
}));
//
// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);
cursor.lineX.set("visible", false);

//
// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  rotation: -45,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "year",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));
//
var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));
//
// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "sales",
  sequencedInterpolation: true,
  categoryXField: "year",
  tooltip: am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));
chart.get("colors").set("colors", [
  am5.color(0x095256),
  am5.color(0x087f8c),
  am5.color(0x5aaa95),
  am5.color(0x86a873),
  am5.color(0xbb9f06)
]);
//
series.columns.template.setAll({ cornerRadiusTL: 500, cornerRadiusTR: 500 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});


// Set data###################################################################################


xAxis.data.setAll(finalData);
series.data.setAll(finalData);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(2000);
chart.appear(1000, 100);
}, []);
return [
]
//
;}
export default Graph_two
