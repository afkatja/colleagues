import React from 'react';
import styled from 'styled-components';

import { PUBLIC_PATH } from './constants';

const StyledItem = styled.li`
  display: block;
  width: 180px;
`;

const StyledImg = styled.img`
  object-fit: none;
  width: 180px;
  height: 200px;
  object-position: center;
`;

export default function ColleagueBlock(props) {
  return (
    <StyledItem>
      <StyledImg src={`${PUBLIC_PATH}/avatar.jpg`} alt="avatar" />
      <p>Naam</p>
      <p>Functie</p>
    </StyledItem>
  );
}
