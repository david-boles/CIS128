import React, { Component } from 'react';
import { Typography } from 'material-ui';
const loadGoogleMapsApi = require('load-google-maps-api')
const {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");
const { compose, withProps, lifecycle } = require("recompose");


class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'retrieving',
      map: <React.Fragment/>
    };
  }

  render() {
    var typogContent = <React.Fragment>Please wait while your location is retrieved...</React.Fragment>;
    if(this.state.status === 'retrieved')
      typogContent = <React.Fragment>You are currently located at {this.state.coords.latitude}N, {this.state.coords.longitude}E. See below for directions to get to our location!</React.Fragment>;
    if(this.state.status === 'errored')
      typogContent = <React.Fragment>An error ocurred while retrieving your location. Please refresh to try again.</React.Fragment>;
    if(this.state.status === 'unsupported')
      typogContent = <React.Fragment>It seems like location services are not supported by your browser, sorry!</React.Fragment>;

    return (
      <React.Fragment>
        <Typography variant='title' gutterBottom={true}>Location</Typography>
        <Typography id='working_message'>
          {typogContent}
        </Typography>
        {this.state.map}
      </React.Fragment>
    );
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        this.setState({
          status: 'retrieved',
          coords: position.coords 
        });
        this.createMap();
        //displayLocation(coords.latitude, coords.longitude);
        //initMap(coords.latitude, coords.longitude)
      }.bind(this), function(error) {
        this.setState({
          status: 'errored'
        });
      }.bind(this));
    }else {
      this.setState({
        status: 'unsupported'
      });
    }
  }

  createMap() {
    var coords = {lat: this.state.coords.latitude, lng: this.state.coords.longitude};
    loadGoogleMapsApi({key: 'AIzaSyCj-JgFd7PRKscEHFdolNUAtotRRiM6jHo'}).then(function (googleMaps) {
      const MapWithADirectionsRenderer = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        //withScriptjs,
        withGoogleMap,
        lifecycle({
          componentDidMount() {
            const DirectionsService = new googleMaps.DirectionsService();
      
            DirectionsService.route({
              origin: new googleMaps.LatLng(coords),
              destination:  new googleMaps.LatLng(37.560167, -122.280150),
              travelMode: googleMaps.TravelMode.DRIVING,
            }, (result, status) => {
              if (status === googleMaps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
              } else {
                console.error(`error fetching directions ${JSON.stringify(result)}`);
              }
            });
          }
        })
      )(props =>
        <GoogleMap
          defaultZoom={7}
          defaultCenter={new googleMaps.LatLng(41.8507300, -87.6512600)}
        >
          {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
      );

      this.setState({map: <MapWithADirectionsRenderer/>});
    }.bind(this))
  }
}

export default Location;