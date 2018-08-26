import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Menu extends Component {
	
	static propTypes = {
		places: PropTypes.array.isRequired,
		activeMarker: PropTypes.object.isRequired,
		onLiClick: PropTypes.func.isRequired,
		onFilter: PropTypes.func.isRequired
	}

	render () {
		const { places, activeMarker, onLiClick, onFilter } = this.props

		const found = places.filter( place => place.visible !== false )
		return (
			<div id="menu">Menu

				<input
					type="text"
					placeholder="Type to filter"
					onChange={ e => onFilter(e.target.value) }
				/>

				{ found.length > 0 ? (
					<ul>
						{found.map( place => (
							<li key={place.place_id}>
								<button onClick={ () => onLiClick(place)}>
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
