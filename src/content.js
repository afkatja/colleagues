import React from 'react';

import styled from 'styled-components';
import Logo from './Logo';
import colors from './styles/colors';

import ColleaguesList from './colleagues-list';

const AppContainer = styled.main`
  color: ${colors.text};
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  background: ${colors.black};
`;

const StyledTitle = styled.h1`
  font-size: 6.8rem;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 25px;
`;

const StyledIntro = styled.p`
  font-size: 2.2rem;
  font-style: italic;
  text-align: left;
  line-height: 1.7;
`;

const Content = props => {
  return (
    <AppContainer>
      <StyledHeader>
        <Logo color={colors.blue} />
      </StyledHeader>
      <ContentContainer>
        <StyledTitle>Acato medewerkers</StyledTitle>
        <StyledIntro>
          Een lijst van de medewerkers. Klik een van hen!
        </StyledIntro>
        <ColleaguesList {...this.props} />
      </ContentContainer>
    </AppContainer>
  );
};

export default Content;
