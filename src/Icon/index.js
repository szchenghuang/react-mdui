'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Icon extends React.Component {
  render() {
    const {
      className,
      left,
      right,
      materialIcon,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-icon': true,
      'mdui-icon-left': left,
      'mdui-icon-right': right,
      'material-icons': materialIcon
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <i { ...props }>
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
