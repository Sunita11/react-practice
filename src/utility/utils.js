import { ClassNameForIndexLevel } from "./constant";
import ahmedabad from "./../images/ahmedabad.svg";
import bengaluru from "./../images/bengaluru.svg";
import chennai from "./../images/chennai.svg";
import delhi from "./../images/delhi.svg";
import hyderabad from "./../images/hyderabad.svg";
import kolkata from "./../images/kolkata.svg";
import mumbai from "./../images/mumbai.svg";
import pune from "./../images/pune.svg";
import defaultImg from "./../images/city.jpg";

class Utils {
  /* 
        @function getIndexLevelClass: return class name based on index level
        index: air quality index
    */
  static getIndexLevelClass = (index) => {
    switch (true) {
      case index > 300:
        return ClassNameForIndexLevel.hazardous;
      case index > 200:
        return ClassNameForIndexLevel.veryUnhealthy;
      case index > 150:
        return ClassNameForIndexLevel.unhealthy;
      case index > 100:
        return ClassNameForIndexLevel.unhealthyForSensitiveGroups;
      case index > 50:
        return ClassNameForIndexLevel.moderate;
      default:
        return ClassNameForIndexLevel.good;
    }
  };

  /* 
    @function _getImageResource: return image based on city name
    city: city name
*/

  static getImageResource = (city) => {
    switch (city) {
      case "ahmedabad":
        return ahmedabad;
      case "bengaluru":
        return bengaluru;
      case "chennai":
        return chennai;
      case "delhi":
        return delhi;
      case "hyderabad":
        return hyderabad;
      case "kolkata":
        return kolkata;
      case "mumbai":
        return mumbai;
      case "pune":
        return pune;
      default:
        return defaultImg;
    }
  };

  static getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  static getColor = () => {
    const r = this.getRandomInt(0, 255);
    const g = this.getRandomInt(0, 255);
    const b = this.getRandomInt(0, 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.15)";
  };
}

export default Utils;
