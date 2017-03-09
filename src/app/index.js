import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { styled } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';

import fetchJson from 'fetch-jsonp'

const api = {
	base: 'api.curalate.com',
  version: 'v1',
  clientId: 'uogallery'
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: PropTypes.object.isRequired,
			firstLoad: PropTypes.bool.isRequired
		}
	}

	componentWillMount() {
		const url = `//${api.base}/${api.version}/reels/${api.clientId}.jsonp`;
		// const url = "http://api.icndb.com/jokes?limitTo=nerdy";
		fetchJson(url)
		  .then(function(response) {
		    return response.json()
		  }).then(function(data) {
		    console.log(data)
		  }).catch(function(ex) {
		    console.log('parsing failed', ex)
		  });
	}

	render() {
		return (
			<div>
				<Header className='header' message='hello' />
				<Home message='I am the body' data={this.state.data}/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));


