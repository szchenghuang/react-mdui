'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class ItemHeader extends React.Component {
  render() {
    const {
      className,
      children,
      ripple,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse-item-header': true,
      'mdui-ripple': ripple
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <div { ...props }>
        { children }
      </div>
    );
  }
}

ItemHeader.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  ripple: PropTypes.any
};

ItemHeader.defaultProps = {
  ripple: true
};

export default ItemHeader;
