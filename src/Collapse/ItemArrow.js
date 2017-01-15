'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemArrow extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse-item-arrow': true,
      'mdui-icon': true,
      'material-icons': true
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children' ] );

    return (
      <i
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children || 'keyboard_arrow_down' }
      </i>
    );
  }
}

ItemArrow.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ItemArrow;
