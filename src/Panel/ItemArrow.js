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
      'mdui-panel-item-arrow': true,
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
        { children || '&#xe313' }
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
