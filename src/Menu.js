import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Menu extends Component {
	
	static propTypes = {
		places: PropTypes.array.isRequired,
		onLiClick: PropTypes.func.isRequired,
		onFilter: PropTypes.func.isRequired,
		onCloseMenu: PropTypes.func.isRequired,
		opened: PropTypes.bool.isRequired
	}

	render () {
		const { places, onLiClick, onFilter, onCloseMenu, opened } = this.props

		const menuState = opened ? "open" : ""
		const tabIndex = opened ? 0 : -1

		const found = places.filter( place => place.visible !== false )

		return (
			<nav id="menu" aria-label="Main menu" className={ menuState } tabIndex={ tabIndex }>

				<div className="menu-title">
					<h3>Menu</h3>

					<button
						onClick={ onCloseMenu }

					   className="menu-close"
					   id="main-menu-close"
					   aria-label="Close main menu"></button>
				</div>

				<input
					type="search"
					placeholder="Type to filter"
					aria-label="Type to filter"
					onChange={ e => onFilter(e.target.value) }
				/>

				{ found.length > 0 ? (
					<ul>
						{found.map( place => (
							<li key={place.place_id}>
								<button
									className="location"
									aria-label={'Show info on map about ' + place.title}
									onClick={ () => onLiClick(place)}
								>
									{ place.title }
								</button>
							</li>
						))}
					</ul>
				) : (
					<div>Nothing found</div>
				)

				}

			</nav>
		)
	}
}

export default Menu
