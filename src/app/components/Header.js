import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
	render() {
		return (
			<Title>{this.props.message}</Title>
		);
	}
}

const Title = styled.h1`
	color: red;
`;

export default Header;