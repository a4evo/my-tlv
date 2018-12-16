import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs,
		withGoogleMap,
		GoogleMap,
	   	Marker,
		InfoWindow} from 'react-google-maps';
import ExtraInfo from './ExtraInfo'

import styles from './const/map-styles';

const Map = withScriptjs(withGoogleMap((props) =>{

	const bounds = new window.google.maps.LatLngBounds();
	bounds.extend( props.center.bounds.southwest );
	bounds.extend( props.center.bounds.northeast );

	const markers = props.places.map( val =>{

		if (val.visible) bounds.extend(val.location);

		//if marker is active now set animation to drop, else remove animation
		const animation = (val === props.activeMarker) ? 2 : '';

		return (

			<Marker
				key={ val.place_id }
				title={ val.title }
				position={ val.location }
				animation={ animation } // 1 - bounce, 2 -drop
				visible={ val.visible }
				onClick={ () => props.onMarkerClick(val) }
			>

				{ val === props.activeMarker &&

					(<InfoWindow onCloseClick={ props.onInfoClose }>
						<div>
							<h4>{val.title} </h4>
							<ExtraInfo place={ val }/>
						</div>
					</InfoWindow>	)

				}

			</Marker>
		)
	});

	const { center } = props;

	return (

		<GoogleMap
			defaultZoom={13}
			defaultCenter={ center.location }
			defaultOptions={{ styles: styles,
							mapTypeControl: false
							}}
			ref={ map => map && map.fitBounds( bounds ) }
			>

			{markers}

		</GoogleMap>


    );
}));

Map.propTypes = {
	center: PropTypes.object.isRequired,
	places: PropTypes.array.isRequired,
	activeMarker: PropTypes.object.isRequired,
	onMarkerClick: PropTypes.func.isRequired,
	onInfoClose: PropTypes.func.isRequired
};

export default Map
