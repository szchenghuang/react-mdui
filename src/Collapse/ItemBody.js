'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class ItemBody extends React.Component {
  render() {
    const {
      className,
      children,
      ripple,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse-item-body': true,
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

ItemBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  ripple: PropTypes.any
};

ItemBody.defaultProps = {
  ripple: true
};

export default ItemBody;
