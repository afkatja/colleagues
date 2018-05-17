import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openPopover } from '../data/actions';

import colors from '../styles/colors';

const rotateAnimation = keyframes`
	0% {
		object-position: 0 0;
	}
	100% {
		object-position: 100% 100%;
	}
`;

const StyledImg = styled.img`
	animation: 1s linear infinite ${rotateAnimation};
`;

const AnimatedImage = props => (
  <StyledImg src={props.src} alt="avatar" role="presentation" />
);

const mapStateToProps = state => ({
  popoverOpen: state.ui.popoverOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openPopover,
    },
    dispatch,
  );

const withState = connect(mapStateToProps, mapDispatchToProps);
const ConnectedComponent = withState(AnimatedImage);
export default ConnectedComponent;
