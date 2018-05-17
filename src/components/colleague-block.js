import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openPopover } from '../data/actions';

import { PUBLIC_PATH } from '../constants';
import colors from '../styles/colors';

const pulseAnimation = keyframes`${pulse}`;

const StyledItem = styled.li`
	display: block;
	width: 180px;
	&:hover {
		cursor: pointer;
		animation: 2s linear forwards infinite ${pulseAnimation};
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
