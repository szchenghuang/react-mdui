'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class ItemIcon extends React.Component {
  render() {
    const {
      className,
      children,
      materialIcon,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-icon': true,
      ...( !children && materialIcon && { 'mdui-icon material-icons': true } )
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <i { ...props }>
        { children || materialIcon }
      </i>
    );
  }
}

ItemIcon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  materialIcon: PropTypes.string
};

export default ItemIcon;
