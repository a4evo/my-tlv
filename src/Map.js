import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs,
		withGoogleMap,
		GoogleMap,
	   	Marker,
		InfoWindow} from "react-google-maps";

import styles from './const/map-styles';
//import pin from "./img/pin.png";

const Map = withScriptjs(withGoogleMap((props) =>{

	const markers = props.places.map( val =>
		<Marker
			key={ val.place_id }
			title={ val.title }
			position={ val.location }
			animation={ 2 } // 1 - bounce, 2 -drop
			//icon= pin //TODO trouble with scaling size
			visible={ val.visible }
			onClick={ () => props.onMarkerClick(val) }
		>
			{ val === props.activeMarker &&
				(<InfoWindow onCloseClick={ props.onInfoClose }>
					<div> {val.title} </div>
				</InfoWindow>	)
			}


		</Marker>
	)

	const { center } = props

	return (
		
		<GoogleMap
			defaultZoom={14}
			center={ center.location }
			defaultOptions={{ styles: styles,
							mapTypeControl: false,
							bounds: center.bounds
							}}
			bounds={ center.bounds }

			>
			{markers}
		</GoogleMap>


    );
}))

Map.propTypes = {
	center: PropTypes.object.isRequired,
	places: PropTypes.array.isRequired,
	activeMarker: PropTypes.object.isRequired,
	onMarkerClick: PropTypes.func.isRequired,
	onInfoClose: PropTypes.func.isRequired
}

export default Map
