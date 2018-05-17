import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transparentize } from 'polished';

import { openPopover } from '../data/actions';

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
		img {
			filter: none;
		}
		h4,
		p {
			color: ${colors.blue};
		}
	}
`;

const StyledName = styled.h4`
	margin: 10px 0 5px;
	font-size: 20px;
	font-size: 2rem;
	font-weight: 400;
	color: ${colors.text};
`;

const StyledImg = styled.img`
	object-fit: none;
	width: 180px;
	height: 200px;
	object-position: center;
	filter: grayscale(1);
	transition: all 0.3s ease-in-out;
`;

const ColleagueBlock = (props) => {
  const { name, avatar, occupation } = props.person;
  return (
    <StyledItem onClick={() => props.openPopover(props.person)}>
      <StyledImg src={`${PUBLIC_PATH}/avatars/${avatar}`} alt="avatar" />
      <StyledName>{name}</StyledName>
      <p>{occupation}</p>
    </StyledItem>
  );
};

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
const ConnectedComponent = withState(ColleagueBlock);
export default ConnectedComponent;
