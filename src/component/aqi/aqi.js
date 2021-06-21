import React from "react";
import "./style.css";
import Utils from "./../../utility/utils";

const AQI = (props) => {
  const _getTableCell = (cellData) => {
    const { city, aqi } = cellData;
    const indexLevelClass = Utils.getIndexLevelClass(Math.floor(aqi));
    let cityName = `${city.toLowerCase()}`;
    return (
      <div
        className="cell-data"
        style={{ backgroundColor: `${Utils.getColor()}` }}
        key={city.toLowerCase()}
      >
        <div className="city-image-wrapper">
          <img src={Utils.getImageResource(cityName)} alt={cityName} />
        </div>

        <span className="city-name">{city}</span>
        <span className={`city-aqi ${indexLevelClass}`}>
          {parseFloat(aqi).toFixed(2)}
        </span>
      </div>
    );
  };

  const _getTableBody = () => {
    let items = props.data.map((item) => _getTableCell(item));
    return items;
  };

  return (
    <div className="aqi-wrapper">
      <div className="table-header">
        <h1 className="heading_1">Air Quality Index (AQI)</h1>
      </div>
      <div className="table-body">
        {props.data != null && props.data.length > 0 ? (
          _getTableBody()
        ) : (
          <div className="empty-state">
            <h2 className="heading_2">No Data available</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AQI;
