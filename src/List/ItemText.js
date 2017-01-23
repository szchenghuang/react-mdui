'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class ItemText extends React.Component {
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
      'mdui-list-item-text': true,
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

ItemText.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  oneLine: PropTypes.any,
  twoLines: PropTypes.any,
  threeLines: PropTypes.any
};

export default ItemText;
