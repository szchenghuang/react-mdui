'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemIcon extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-icon': true,
      'mdui-icon': true,
      'material-icons': true
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children' ] );

    return (
      <i
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children }
      </i>
    );
  }
}

ItemIcon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ItemIcon;
