'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Item extends React.Component {
  render() {
    const {
      className,
      children,
      href,
      active,
      ripple,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item': true,
      'mdui-list-item-active': active,
      'mdui-ripple': ripple
    });

    const props = {
      ...restProps,
      className: clx
    };

    if ( href ) {
      props.href = href;

      return (
        <a { ...props }>
          { children }
        </a>
      );
    }

    return (
      <li { ...props }>
        { children }
      </li>
    );
  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  active: PropTypes.any,
  ripple: PropTypes.any
};

Item.defaultProps = {
  ripple: true
};

export default Item;
