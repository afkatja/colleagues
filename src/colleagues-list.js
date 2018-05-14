import React from 'react';
import styled from 'styled-components';

import ColleagueBlock from './colleague-block';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export default function ColleaguesList(props) {
  return (
    <StyledList>
      <ColleagueBlock />
    </StyledList>
  );
}
