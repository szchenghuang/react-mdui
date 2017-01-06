'use strict';

import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemArrow extends React.PureComponent {
  render() {
    const {
      style,
      className
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item-arrow': true,
      'mdui-icon': true,
      'material-icons': true
    });

    return (
      <i
        { ...css( style ) }
        className={ clx }
      >
        &#xe313;
      </i>
    );
  }
}

ItemArrow.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

export default ItemArrow;
