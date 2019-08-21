import React, { Component } from "react";
import ReactMapGL, {GeolocateControl} from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {longitude: -122.45, latitude: 37.78, zoom: 14},
    token: "pk.eyJ1Ijoiam9yZ2ViaXJyYSIsImEiOiJjanpqbjBoMmIwYXh1M21xbmFmZXBuczh1In0.xMzVdgrHabAeL78Zm3pQ8Q"

  }

  render() {
    const {viewport, token} = this.state;
    return (
      <ReactMapGL {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={token}
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