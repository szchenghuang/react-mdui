'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Subheader extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const {
      className,
      children,
      inset,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-subheader': !inset,
      'mdui-subheader-inset': inset
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <li { ...props }>
        { children }
      </li>
    );
  }
}

Subheader.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  inset: PropTypes.any
};

export default Subheader;
