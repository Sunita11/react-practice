import React from "react";
import AQI from "./../aqi/aqi";
import AQIInfo from "../aqi-info/info";
import "./style.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.timeout = 250;

    this.state = {
      ws: null,
    };
  }

  componentDidMount() {
    this.connect();
  }

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    let protocol = window.location.protocol === "https:" ? "wss" : "ws";
    let pathWS = `${protocol}://city-ws.herokuapp.com/`;
    var ws = new WebSocket(pathWS);
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });

      this.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      this.setState({ dataFromServer: message });
    };

    // websocket onclose event listener
    ws.onclose = (e) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (this.timeout + this.timeout) / 1000
        )} second.`,
        e.reason
      );

      this.timeout = this.timeout + this.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, this.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };
  };

  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  render() {
    const { dataFromServer } = this.state;
    return (
      <div className="container">
        <AQI data={dataFromServer} />
        <AQIInfo />
      </div>
    );
  }
}

export default Main;
