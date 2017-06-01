'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class ItemTitle extends React.Component {
  render() {
    const {
      className,
      children,
      oneLine,
      twoLines,
      threeLines,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list-item-title': true,
      'mdui-list-item-one-line': oneLine,
      'mdui-list-item-two-line': twoLines,
      'mdui-list-item-three-line': threeLines
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

ItemTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  oneLine: PropTypes.any,
  twoLines: PropTypes.any,
  threeLines: PropTypes.any
};

export default ItemTitle;
