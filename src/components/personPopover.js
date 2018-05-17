import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PUBLIC_PATH } from '../constants';
import AnimatedImage from './animatedImage';
import AnimatedBio from './animatedBio';

const PersonPopover = (props) => {
  const { popoverContent } = props;
  return (
    <Fragment>
      <AnimatedImage src={`${PUBLIC_PATH}/avatars/${popoverContent.avatar}`} />
      <AnimatedBio text={popoverContent.bio} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  popoverContent: state.ui.popoverContent,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const withState = connect(mapStateToProps, mapDispatchToProps);
export default withState(PersonPopover);
