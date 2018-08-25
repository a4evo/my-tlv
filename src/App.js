import React, { Component } from 'react';

import Map from './Map';
import Menu from './Menu';

import logo from './logo.svg';
import './App.css';

import places from './const/places.json';

class App extends Component {

	render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Tel Aviv</h1>
        </header>
		
        <Menu/>
		<Map
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBO37tWXY7797JXJmFXstlFy4J6rSMcu68&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div id="map" role="application" />}
  			mapElement={<div style={{ height: `100%` }} />}
  			center={ places.center }
		/>
		
      </div>
    );
  }
}

export default App;
