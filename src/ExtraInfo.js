import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExtraInfo extends Component {

	static propTypes = {
		place: PropTypes.object.isRequired
	}

	state = {
		imgs: []
	}

	componentDidMount () {
		this.getImages( this.props.place.search )
	}

	getImages( query ) {
		fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
				headers: {
					Authorization: 'Client-ID 45b858321b7f762b36e3300cb63aadba791a51997e60f50f2461b18bc8b73486'
				}
		})
		.then( response => response.json() )
		.then( response => this.setState({ imgs: response.results }) )
		.catch( e => alert(e) );
	}

	render() {

		const { title } = this.props.place
		const { imgs } = this.state

		//random index for result array
		const i =  Math.floor(Math.random()*imgs.length);

		const randomImg = imgs[i]

		return (
			<div>
				{(this.state.imgs.length > 0)  ? (
					<div>
						<img
							src={randomImg.urls.thumb}
							alt={randomImg.description || ("Associations to " + title)}
							style={{ maxHeight: "150px"}}
						/>
						<p>Just random associations pictures</p>
					</div>
				) : (
					<p>Nothing related found</p>
				)
				}

			</div>
		)
	}

}

export default ExtraInfo
