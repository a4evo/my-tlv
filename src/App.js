import React, { Component } from 'react';

import Map from './Map';
import Menu from './Menu';

import logo from './img/cityscape.svg';
import './App.css';

import placesJSON from './const/places.json';

class App extends Component {

	state = {
		places: [],
		activeMarker: {}
	}

	componentDidMount() {
		this.setState({ places: placesJSON.places })
	}

	setActiveMarker( place ) {
		this.setState( {activeMarker: place} )
	}

	render() {
		const { places, activeMarker } = this.state
    return (
      <div className="App">

        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">My Tel Aviv</h1>
        </header>
		
        <Menu
			places={ places }
			activeMarker={ activeMarker }
			onLiClick={ ( place ) => this.setActiveMarker( place ) }
		/>

		<Map
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBO37tWXY7797JXJmFXstlFy4J6rSMcu68&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div id="map" role="application" />}
  			mapElement={<div style={{ height: `100%` }} />}
  			center={ placesJSON.center }
  			places={ places }
  			activeMarker={ activeMarker }
  			onMarkerClick={ ( place ) => this.setActiveMarker( place )}
		/>
		
      </div>
    );
  }
}

export default App;
