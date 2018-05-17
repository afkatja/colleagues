import React from 'react';
import styled, { keyframes } from 'styled-components';

const type = keyframes`
	from {
		width: 0;
	}
`;
const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: #fff; }
`;

const StyledContainer = styled.div`
	position: absolute;
	bottom: -10vh;
	left: 50%;
	transform: translateX(-50%);
	max-width: 900px;
	width: 80vw;
`;

const StyledText = styled.p`
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	font-size: 2.5rem;
	color: #fff;
	width: 100%;
	// typing animation inspired by Lea Verou
	animation: ${type} 5s both 1 steps(90, end),
		${blinkCaret} 1s both step-end infinite;
	border-right: 2px solid #fff;
`;

export default function AnimatedBio(props) {
  return (
    <StyledContainer>
      <StyledText text={props.text}>{props.text}</StyledText>
    </StyledContainer>
  );
}
