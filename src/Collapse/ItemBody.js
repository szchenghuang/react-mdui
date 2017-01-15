'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemBody extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children,
      ripple
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse-item-body': true,
      'mdui-ripple': ripple
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'ripple' ] );

    return (
      <div
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children }
      </div>
    );
  }
}

ItemBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  ripple: PropTypes.any
};

export default ItemBody;
