'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Button extends React.PureComponent {
  render() {
    const {
      className,
      children,
      node,
      type,
      block,
      ripple
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-btn': true,
      'mdui-btn-raised': 'raised' === type,
      'mdui-btn-icon': 'icon' === type,
      'mdui-btn-block': !!block,
      'mdui-ripple': !!ripple
    });

    const props = {
      ...this.props
    };

    if ( 'a' === node ) {
      return (
        <a
          className={ clx }
          { ...props }
        >
          { children }
        </a>
      );
    }

    if ( 'button' === node ) {
      return (
        <button
          className={ clx }
          { ...props }
        >
          { children }
        </button>
      );
    }

    if ( 'input' === node ) {
      return (
        <input
          className={ clx }
          { ...props }
        >
          { children }
        </input>
      );
    }
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  node: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.any,
  ripple: PropTypes.any,
  disabled: PropTypes.any
};

Button.defaultProps = {
  node: 'a'
};

export default Button;
