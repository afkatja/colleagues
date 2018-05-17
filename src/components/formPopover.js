import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import colors from '../styles/colors';

import { Loading } from './icons';

const StyledTitle = styled.h1`
	font-size: 3.2rem;
	font-weight: 400;
`;

const StyledConfirmation = styled.p`
	font-size: 2.4rem;
`;

const StyledInputWrap = styled.div`
	width: 100%;
	margin-bottom: 10px;
`;

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: 700;
	cursor: pointer;
`;
const StyledInput = styled.input`
	box-shadow: none;
	border: none;
	width: 100%;
	box-sizing: border-box;
	font-size: 1.4rem;
	font-style: italic;
	line-height: 40px;
	border-radius: 2px;
	padding: 0 15px;
	color: ${colors.text};
	border-bottom: 2px solid transparent;
	background: ${transparentize(0.8, colors.blue)};
	&:focus {
		border-color: ${colors.blue};
		outline: none;
	}
`;

const StyledButton = styled.button`
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	min-width: 60px;
	line-height: 40px;
	font-size: 1.4rem;
	font-weight: 700;
	color: #fff;
	border-radius: 2px;
	padding: 0 15px;
	background: ${colors.blue};
	transition: background 0.3s ease-in-out;
	&:disabled {
		background: ${colors.grey};
		cursor: default;
	}
	&:hover,
	&:focus {
		outline: none;
	}
`;

export default class FormPopover extends Component {
	state = {
		formValid: false,
		name: '',
		email: '',
		sumitting: false,
		submitted: null,
	};
	handleChange = (e, type) => {
		if (type === 'name')
			this.setState({ name: e.target.value }, () => this.validateForm());
		else if (type === 'email')
			this.setState({ email: e.target.value }, () => this.validateForm());
	};
	validateForm = () => {
		this.setState({ formValid: !!this.state.name && !!this.state.email });
	};
	handleSubmit = () => {
		if (this.state.formValid) {
			this.setState({ submitting: true }, () =>
				setTimeout(() => {
					this.setState({ submitting: false, submitted: true });
				}, 3000)
			);
		}
	};
	render() {
		return (
			<Fragment>
				<StyledTitle>
					Vul hieronder het formulier en laten we in contact blijven!
				</StyledTitle>
				{!this.state.submitted && (
					<form noValidate>
						<StyledInputWrap>
							<StyledLabel htmlFor="form-name">Je naam</StyledLabel>
							<StyledInput
								type="text"
								id="form-name"
								required
								onChange={e => this.handleChange(e, 'name')}
							/>
						</StyledInputWrap>
						<StyledInputWrap>
							<StyledLabel htmlFor="form-email">Jouw e-mailadres</StyledLabel>
							<StyledInput
								type="email"
								id="form-email"
								required
								onChange={e => this.handleChange(e, 'email')}
							/>
						</StyledInputWrap>
						{!this.state.submitting && (
							<StyledButton
								type="submit"
								disabled={!this.state.formValid}
								onClick={this.handleSubmit}
							>
								Versturen
							</StyledButton>
						)}
						{this.state.submitting && <Loading />}
					</form>
				)}
				{this.state.submitted && (
					<StyledConfirmation>
						Bedankt! We nemen z.s.m. contact met je op!
					</StyledConfirmation>
				)}
			</Fragment>
		);
	}
}
