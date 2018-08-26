import React, { Component } from 'react';

import Map from './Map';
import Menu from './Menu';

import logo from './img/cityscape.svg';
import './App.css';

import placesJSON from './const/places.json';

class App extends Component {

	state = {
		places: [],
		activeMarker: {},
		menuOpened: true
	}

	componentDidMount() {
		this.setState({ places: placesJSON.places })
	}

	setActiveMarker( place ) {
		this.setState({ activeMarker: place })
	}

	clearActiveMarker() {
		const empty = {}
		this.setState({ activeMarker: empty })
	}

	filterPlaces ( query ) {
		const filtered = this.state.places.map( place =>{
			var regex = RegExp(query, 'gi')
			place.visible = regex.test(place.title) ? true : false
			return place})
		this.setState({ places: filtered })
	}

	toggleMenu = () => {
//		document.getElementById('menu').classList.toggle('open')
//		if menu opened -> close, if closed -> open
		this.setState({ menuOpened: (this.state.menuOpened) ? false : true })
	}

	render() {
		const { places, activeMarker, menuOpened } = this.state
		const showMenuButtonTabIndex = menuOpened ? -1 : 0
    return (
      <div className="App">

        <header className="App-header">
          <img src={ logo } className="App-logo" alt="Logo" />
          <h1 className="App-title">My Tel Aviv</h1>
        </header>
		
        {/*burger button*/}
		<button
			aria-label="Display menu"
			className="backdrop"
			tabIndex={ showMenuButtonTabIndex }
			aria-hidden="true"
			onClick={ this.toggleMenu }
		></button>


        <Menu
			places={ places }
			activeMarker={ activeMarker }
			onLiClick={ place => this.setActiveMarker( place ) }
			onFilter={ query => this.filterPlaces( query ) }
			onCloseMenu={ this.toggleMenu }
			opened={ menuOpened }
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
  			onInfoClose={ () => this.clearActiveMarker() }
		/>
		
      </div>
    );
  }
}

export default App;
