'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemAvatar extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children,
      src,
      materialIcon
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-avatar': true,
      ...( materialIcon && { 'mdui-icon material-icons': true } )
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'src', 'materialIcon' ] );

    if ( src ) {
      return (
        <div
          ref={ node => this.root = node }
          { ...css( style ) }
          className={ clx }
          { ...props }
        >
          { children || <img src={ src } /> }
        </div>
      );
    }

    return (
      <i
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
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
