'use strict';

import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemBody extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item-body': true
    });

    return (
      <div
        { ...css( style ) }
        className={ clx }
      >
        { children }
      </div>
    );
  }
}

ItemBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ItemBody;
