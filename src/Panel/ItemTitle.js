'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class ItemTitle extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item-title': true
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children' ] );

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

ItemTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ItemTitle;
