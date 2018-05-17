import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openPopover, closePopover } from '../data/actions';

import Logo from './Logo';
import ColleaguesList from './colleagues-list';
import PopoverContainer from './popoverContainer';

import colors from '../styles/colors';

const AppContainer = styled.main`
	color: ${colors.text};
`;

const ContentContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 0 40px;
`;

const StyledHeader = styled.header`
	background: ${colors.black};
`;

const StyledTitle = styled.h1`
	font-size: 6.8rem;
	text-transform: uppercase;
	font-weight: 400;
	margin: 0 0 25px;
	hyphens: auto;
`;

const StyledIntro = styled.p`
	font-size: 2.2rem;
	font-style: italic;
	text-align: left;
	line-height: 1.7;
`;

const Content = props => (
  <AppContainer>
    <StyledHeader>
      <Logo color={colors.blue} />
    </StyledHeader>
    <ContentContainer>
      <StyledTitle>Acato medewerkers</StyledTitle>
      <StyledIntro>Een lijst van de medewerkers. Klik een van hen!</StyledIntro>
      <ColleaguesList {...props} />
    </ContentContainer>
    <PopoverContainer popoverContent={props.popoverContent} />
  </AppContainer>
);
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
    dispatch,
  );
const withState = connect(mapStateToProps, mapDispatchToProps);
export default withState(Content);
