'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Item extends React.Component {
  render() {
    const {
      style,
      className,
      children,
      node,
      href,
      active,
      ripple
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item': true,
      'mdui-list-item-active': active,
      'mdui-ripple': ripple
    });

    const props = _.omit( props, [ 'style', 'className', 'children', 'node', 'href', 'active', 'ripple' ] );

    if ( 'a' === node ) {
      return (
        <a
          ref={ node => this.root = node }
          { ...css( style ) }
          className={ clx }
          href={ href }
          { ...props }
        >
          { children }
        </a>
      );
    }

    return (
      <li
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children }
      </li>
    );

  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  node: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.any,
  ripple: PropTypes.any
};

Item.defaultProps = {
  node: 'li',
  ripple: true
};

export default Item;
