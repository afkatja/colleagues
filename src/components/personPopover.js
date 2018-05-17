import React, { Fragment } from 'react';

import { PUBLIC_PATH } from '../constants';
import AnimatedImage from './animatedImage';
import AnimatedBio from './animatedBio';

export default function PersonPopover(props) {
  const { popoverContent } = this.props;
  return (
    <Fragment>
      <AnimatedImage src={`${PUBLIC_PATH}/avatars/${popoverContent.avatar}`} />
      <AnimatedBio text={popoverContent.bio} />
    </Fragment>
  );
}
