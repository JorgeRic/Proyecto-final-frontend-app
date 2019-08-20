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

// const Map = ReactMapboxGl({ accessToken });
// const zoom = [8];

// render(
//   <Map
//     style="mapbox://styles/mapbox/streets-v8"
//     zoom={zoom}
//     containerStyle={{
//       height: "100%",
//       width: "500px"
//     }}>
//       <Layer
//         type="symbol"
//         id="marker"
//         layout={{ "icon-image": "marker-15" }}>
//         <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
//       </Layer>
//   </Map>
// );