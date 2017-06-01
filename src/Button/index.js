'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Button extends React.Component {
  render() {
    const {
      className,
      children,
      node,
      flat,
      raised,
      icon,
      block,
      ripple,
      disabled,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-btn': true,
      'mdui-btn-raised': raised,
      'mdui-btn-icon': icon,
      'mdui-btn-block': block,
      'mdui-ripple': ripple
    });

    const props = {
      ...restProps,
      className: clx,
      ...( disabled && { disabled: true } )
    };

    if ( 'a' === node ) {
      return (
        <a { ...props }>
          { children }
        </a>
      );
    }

    if ( 'button' === node ) {
      return (
        <button { ...props }>
          { children }
        </button>
      );
    }

    if ( 'input' === node ) {
      return (
        <input { ...props }>
          { children }
        </input>
      );
    }
  }
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  node: PropTypes.string,
  flat: PropTypes.any,
  raised: PropTypes.any,
  icon: PropTypes.any,
  block: PropTypes.any,
  ripple: PropTypes.any,
  disabled: PropTypes.any
};

Button.defaultProps = {
  node: 'button',
  flat: true,
  ripple: true
};

export default Button;
