'use strict';

import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Icon extends React.PureComponent {
  render() {
    const {
      style,
      className,
      left,
      right,
      materialIcon
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-icon': true,
      'mdui-icon-left': !!left,
      'mdui-icon-right': !!right,
      'material-icons': !!materialIcon
    });

    return (
      <i
        { ...css( style ) }
        className={ clx }
      >
        { materialIcon }
      </i>
    );
  }
}

Icon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  left: PropTypes.any,
  right: PropTypes.any,
  materialIcon: PropTypes.string
};

export default Icon;
