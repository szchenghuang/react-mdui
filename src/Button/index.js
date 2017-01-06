'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Button extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children,
      node,
      raised,
      icon,
      block,
      ripple
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-btn': true,
      'mdui-btn-raised': !!raised,
      'mdui-btn-icon': !!icon,
      'mdui-btn-block': !!block,
      'mdui-ripple': !!ripple
    });

    const props = _.omit( this.props,
      'style',
      'className',
      'node',
      'flat',
      'raised',
      'icon',
      'block',
      'ripple'
    );

    if ( 'a' === node ) {
      return (
        <a
          { ...css( style ) }
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
          { ...css( style ) }
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
          { ...css( style ) }
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
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  node: PropTypes.string,
  flat: PropTypes.any,
  raised: PropTypes.any,
  icon: PropTypes.any,
  block: PropTypes.any,
  ripple: PropTypes.any,
  disabled: PropTypes.any,
  onClick: PropTypes.func
};

Button.defaultProps = {
  node: 'a',
  flat: true,
  onClick: _.noop
};

export default Button;
