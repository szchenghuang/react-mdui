'use strict';

import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Icon extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children,
      src
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip-icon': true
    });

    return src ? (
      <img
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        src={ src } />
    ) : (
      <span
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
      >
        { children }
      </span>
    );
  }
}

Icon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string
};

export default Icon;
