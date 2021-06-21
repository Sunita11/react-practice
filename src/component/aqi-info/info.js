import React from "react";
import "./style.css";
const AQIInfo = () => {
  return (
    <div className="aqi-info-wrapper">
      <h2 className="heading_2">AQI Basics for Ozone and Particle Pollution</h2>
      <table className="table table-bordered">
        <thead>
          <tr className="thead-row">
            <th scope="col">Daily AQI Color</th>
            <th scope="col">Levels of Concern</th>
            <th scope="col">Values of Index</th>
            <th scope="col">Description of Air Quality</th>
          </tr>
        </thead>
        <tbody>
          <tr className="aqi-good">
            <td>Green</td>
            <td id="good">Good</td>
            <td>0 to 50</td>
            <td>
              Air quality is satisfactory, and air pollution poses little or no
              risk.
            </td>
          </tr>
          <tr className="aqi-moderate">
            <td>Yellow</td>
            <td id="mod">Moderate</td>
            <td>51 to 100</td>
            <td>
              Air quality is acceptable. However, there may be a risk for some
              people, particularly those who are unusually sensitive to air
              pollution.
            </td>
          </tr>
          <tr className="aqi-unhealthy-sens">
            <td>Orange</td>
            <td id="sens">Unhealthy for Sensitive Groups</td>
            <td>101 to 150</td>
            <td>
              Members of sensitive groups may experience health effects. The
              general public is less likely to be affected.
            </td>
          </tr>
          <tr className="aqi-unhealthy">
            <td>Red</td>
            <td id="unh">Unhealthy</td>
            <td>151 to 200</td>
            <td>
              Some members of the general public may experience health effects;
              members of sensitive groups may experience more serious health
              effects.
            </td>
          </tr>
          <tr className="aqi-vunhealthy">
            <td>Purple</td>
            <td id="vunh">Very Unhealthy</td>
            <td>201 to 300</td>
            <td>
              Health alert: The risk of health effects is increased for
              everyone.
            </td>
          </tr>
          <tr className="aqi-hazardous">
            <td>Maroon</td>
            <td id="haz">Hazardous</td>
            <td>301 and higher</td>
            <td>
              Health warning of emergency conditions: everyone is more likely to
              be affected.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AQIInfo;
