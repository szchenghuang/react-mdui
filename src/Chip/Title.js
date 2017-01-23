'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Title extends React.Component {
  render() {
    const {
      className,
      children,
      title,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip-title': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <span { ...props }>
        { children || title }
      </span>
    );
  }
}

Title.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string
};

export default Title;
