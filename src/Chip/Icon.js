'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Icon extends React.Component {
  render() {
    const {
      className,
      children,
      src,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip-icon': true
    });

    const props = {
      ...restProps,
      className: clx,
      ...( src && { src } )
    };

    return src ? (
      <img { ...props }>
        { children }
      </img>
    ) : (
      <span { ...props }>
        { children }
      </span>
    );
  }
}

Icon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string
};

export default Icon;
