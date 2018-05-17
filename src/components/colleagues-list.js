import React from 'react';
import styled from 'styled-components';
import { withLifecycleActions } from 'react-redux-lifecycle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getColleagues } from '../data/actions';

import ColleagueBlock from './colleague-block';

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ColleaguesList = props => (
  <StyledList>
    {props.colleagues.map(colleague => (
      <ColleagueBlock key={colleague.name} person={colleague} />
		))}
  </StyledList>
);

const mapStateToProps = state => ({
  colleagues: state.ui.colleagues,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getColleagues,
    },
    dispatch,
  );

const withState = connect(mapStateToProps, mapDispatchToProps);
const ConnectedComponent = withState(ColleaguesList);
export default withLifecycleActions({ componentDidMount: getColleagues })(ConnectedComponent);
