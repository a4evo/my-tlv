import React from 'react';
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import styles from './const/map-styles'
import places from './const/places'

const Map = withScriptjs(withGoogleMap((props) =>{

	const markers = []
	const { center } = props

	return (
		
		<GoogleMap
			defaultZoom={14}
			center={ center.location }
			defaultOptions={{ styles: styles,
							mapTypeControl: false
							}}

			>
			{markers}
		</GoogleMap>


    );
}))

Map.propTypes = {
	center: PropTypes.object.isRequired
}

export default Map
