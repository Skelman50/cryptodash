import React, { useContext } from "react";
import ReactHighCharts from "react-highcharts";
import { AppContext } from "../../context/app/appContext";
import { Tile } from "../ui/Tile";
import highChartsConfig from "./HighchartsConfig";
import { theme } from "./HighChartTheme";

ReactHighCharts.Highcharts.setOptions(theme);

const PriceChart = () => {
  const appContext = useContext(AppContext);
  const {} = appContext;
  return (
    <Tile>
      <ReactHighCharts config={highChartsConfig()} />
    </Tile>
  );
};

export default PriceChart;
