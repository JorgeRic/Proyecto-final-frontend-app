import React, { Component } from "react";
import ReactMapGL, {GeolocateControl} from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {longitude: -122.45, latitude: 37.78, zoom: 14}
  }

  render() {
    const {viewport} = this.state;
    return (
      <ReactMapGL {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={viewport => this.setState({viewport})}>
        <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </ReactMapGL>
    );
  }
}
export default Map