import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
	render() {
		return (
			<Title>{this.props.message}</Title>
		);
	}
}

const Title = styled.div`
	color: blue;
	font-size = 20px;
`;

export default Home;