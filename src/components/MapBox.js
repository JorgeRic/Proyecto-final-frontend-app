import React, { Component } from "react";
import ReactMapGL, {GeolocateControl, SVGOverlay} from "react-map-gl";
import viviendaBackendService from "../services/viv-backend-service";

class Map extends Component {
  state = {
    viewport: {longitude: -122.45, latitude: 37.78, zoom: 14},
    token: "pk.eyJ1Ijoiam9yZ2ViaXJyYSIsImEiOiJjanpqbjBoMmIwYXh1M21xbmFmZXBuczh1In0.xMzVdgrHabAeL78Zm3pQ8Q",
    viviendas: []
  };

  componentDidMount(){
    viviendaBackendService.getAllViviendas().then(response => {
      this.setState({
        viviendas: response.data.listOfViv
      })
    })
  }

  redraw = ({project}) => {
    this.state.viviendas.map((vivienda) => {
      const [cx, cy] = project([this.vivienda.long, this.vivienda.lat]);
      return <circle cx={cx} cy={cy} r={4} fill="blue" />;
    });
  };

  render() {
    if (this.state.viviendas.length == 0)
      return null;

    const {viewport, token, viviendas} = this.state;
    return (
      <ReactMapGL {...viewport}
        width="100%"
        height="40vh"
        mapboxApiAccessToken={token}
        onViewportChange={viewport => this.setState({viewport})}>
        <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />

        <SVGOverlay redraw={this.redraw} />
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