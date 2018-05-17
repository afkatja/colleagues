import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { PUBLIC_PATH } from '../constants';
import { openPopover, closePopover } from '../data/actions';
import { CloseIcon } from './icons';
import AnimatedImage from './animatedImage';

import colors from '../styles/colors';
const KEYS = { ESC: 27 };

const StyledOverlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.8);
`;

const StyledDialog = styled.div`
	background: #fff;
	padding: 20px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	max-width: 900px;
`;

const StyledBtn = styled.button`
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	min-width: 0;
	position: absolute;
	right: -20px;
	top: -20px;
	&:hover,
	&:focus {
		outline: none;
	}
`;

export class Popover extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = ({ keyCode }) =>
		keyCode === KEYS.ESC && this.props.closePopover();
	handleContainerClick = e => e.stopPropagation();

	render() {
		const { popoverOpen, closePopover, popoverContent } = this.props;
		console.log(popoverContent);
		return (
			popoverOpen && (
				<StyledOverlay onClick={closePopover} role="none">
					<StyledDialog onClick={this.handleContainerClick} role="presentation">
						<AnimatedImage
							src={`${PUBLIC_PATH}/avatars/${popoverContent.avatar}`}
						/>
						<StyledBtn type="button" onClick={closePopover}>
							<CloseIcon fill={colors.blue} />
						</StyledBtn>
					</StyledDialog>
				</StyledOverlay>
			)
		);
	}
}

const mapStateToProps = state => ({
	popoverOpen: state.ui.popoverOpen,
	popoverContent: state.ui.popoverContent,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			closePopover,
			openPopover,
		},
		dispatch
	);
const withState = connect(mapStateToProps, mapDispatchToProps);
export default withState(Popover);
