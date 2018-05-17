import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transparentize } from 'polished';

import { openForm } from '../data/actions';

import { PUBLIC_PATH } from '../constants';
import colors from '../styles/colors';

const pulseAnimation = keyframes`${pulse}`;

const StyledItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 180px;
	position: relative;
	transition: all 0.3s ease-in-out;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200px;
		transition: opacity 0.3s ease-in-out;
		background: linear-gradient(
			145deg,
			${transparentize(0.2, colors.blue)} 0,
			rgba(255, 255, 255, 0) 100%
		);
	}
	&:hover {
		cursor: pointer;
		z-index: 2;
		animation: 2s linear forwards infinite ${pulseAnimation};
		&::after {
			opacity: 0;
		}
		button {
			color: ${colors.blue};
		}
	}
`;

const StyledButton = styled.button`
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	min-width: 0;
	margin: 10px 0 5px;
	font-size: 20px;
	font-size: 2rem;
	font-weight: 400;
	color: ${colors.text};
	&:hover,
	&:focus {
		cursor: pointer;
		color: ${colors.blue};
		outline: none;
	}
`;

const StyledImg = styled.img`
	width: 180px;
	height: 200px;
`;

const EmptyPerson = props => (
  <StyledItem onClick={() => props.openForm()}>
    <StyledImg src={`${PUBLIC_PATH}/avatars/avatar.svg`} alt="avatar" />
    <StyledButton onClick={props.openForm}>Jij hier?</StyledButton>
  </StyledItem>
);

const mapStateToProps = state => ({
  formOpen: state.ui.formOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openForm,
    },
    dispatch,
  );

const withState = connect(mapStateToProps, mapDispatchToProps);
const ConnectedComponent = withState(EmptyPerson);
export default ConnectedComponent;
