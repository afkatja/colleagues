import React from 'react';
import styled, { keyframes } from 'styled-components';

const imgSize = {
  width: 186,
  height: 204,
};

const rotateAnimation = keyframes`
	0% {
		object-position: 0 0;
	}
	2% {
		object-position: 0 0;
	}
	12% {
		object-position: -${imgSize.width}px 0;
	}
	14% {
		object-position: -${imgSize.width}px 0;
	}
	22% {
		object-position: -${imgSize.width * 2}px 0;
	}
	24% {
		object-position: -${imgSize.width * 2}px 0;
	}
	32% {
		object-position: -${imgSize.width * 2}px -${imgSize.height}px;
	}
	36% {
		object-position: -${imgSize.width * 2}px -${imgSize.height}px;
	}
	44% {
		object-position: -${imgSize.width}px -${imgSize.height}px;
	}
	48% {
		object-position: -${imgSize.width}px -${imgSize.height}px;
	}
	60% {
		object-position: 0 -${imgSize.height}px;
	}
	62% {
		object-position: 0 -${imgSize.height}px;
	}
	72% {
		object-position: 0 -${imgSize.height * 2}px;
	}
	74% {
		object-position: 0 -${imgSize.height * 2}px;
	}
	84% {
		object-position: -${imgSize.width}px -${imgSize.height * 2}px;
	}
	86% {
		object-position: -${imgSize.width}px -${imgSize.height * 2}px;
	}
	98% {
		object-position: -${imgSize.width * 2}px -${imgSize.height * 2}px;
	}
	100% {
		object-position: -${imgSize.width * 2}px -${imgSize.height * 2}px;
	}
`;

const StyledImg = styled.img`
	animation: 9s linear alternate infinite ${rotateAnimation};
	object-fit: none;
	width: ${imgSize.width}px;
	height: ${imgSize.height}px;
`;

const AnimatedImage = props => (
  <StyledImg src={props.src} alt="avatar" role="presentation" />
);

export default AnimatedImage;
