import React, { useContext } from "react";
import ReactHighCharts from "react-highcharts";
import { AppContext } from "../../context/app/appContext";
import { Tile } from "../ui/Tile";
import highChartsConfig from "./HighchartsConfig";
import { theme } from "./HighChartTheme";
import { ChartSelect } from "../ui/ChartSelect";

ReactHighCharts.Highcharts.setOptions(theme);

const PriceChart = () => {
  const appContext = useContext(AppContext);
  const { historical, changeChartSelect, chartSelect } = appContext;
  return (
    <Tile>
      <ChartSelect
        value={chartSelect}
        onChange={e => changeChartSelect(e.target.value)}
      >
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </ChartSelect>
      {historical ? (
        <ReactHighCharts config={highChartsConfig(historical)} />
      ) : (
        <div>Loading historical data...</div>
      )}
    </Tile>
  );
};

export default PriceChart;
