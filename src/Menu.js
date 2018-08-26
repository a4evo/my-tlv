import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Menu extends Component {
	
	static propTypes = {
		places: PropTypes.array.isRequired,
		activeMarker: PropTypes.object.isRequired,
		onLiClick: PropTypes.func.isRequired
	}

	render () {
		const { places, activeMarker } = this.props
		return (
			<div id="menu">Menu
				<input type="text" placeholder="Type to filter"/>
				{ places.length > 0 ? (
					<ul>
						{places.map( place => (
							<li key={place.place_id}>
								<button onClick={ () => this.props.onLiClick(place)}>
									{ place.title }
								</button>
							</li>
						))}
					</ul>
				) : (
					<div>Nothing found</div>
				)

				}

			</div>
		)
	}
}

export default Menu
