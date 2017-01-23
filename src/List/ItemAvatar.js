'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class ItemAvatar extends React.Component {
  render() {
    const {
      className,
      children,
      src,
      materialIcon,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-avatar': true,
      ...( !children && materialIcon && { 'mdui-icon material-icons': true } )
    });

    const props = {
      ...restProps,
      className: clx
    };

    if ( src ) {
      return (
        <div { ...props }>
          { children || <img src={ src } /> }
        </div>
      );
    }

    return (
      <i { ...props }>
        { children || materialIcon }
      </i>
    );
  }
}

ItemAvatar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  materialIcon: PropTypes.string
};

export default ItemAvatar;
