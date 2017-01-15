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
      children,
      oneLine,
      twoLines,
      threeLines
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-title': true,
      'mdui-list-item-one-line': oneLine,
      'mdui-list-item-two-line': twoLines,
      'mdui-list-item-three-line': threeLines
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'oneLine', 'twoLines', 'threeLines' ] );

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

ItemTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  oneLine: PropTypes.any,
  twoLines: PropTypes.any,
  threeLines: PropTypes.any
};

export default ItemTitle;
