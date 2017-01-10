'use strict';

import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Title extends React.PureComponent {
  render() {
    const {
      style,
      className,
      title
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip-title': true
    });

    return (
      <span
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
      >
        { title }
      </span>
    );
  }
}

Title.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Title;
