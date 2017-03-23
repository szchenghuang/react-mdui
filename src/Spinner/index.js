'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import mdui from '../index';

class Spinner extends React.Component {
  componentDidMount() {
    mdui.updateSpinners( this.root );
  }

  render() {
    const {
      className,
      children,
      size,
      colorful,
      ...restProps
    } = this.props;

    const style = {
      ...this.props.style,
      ...( size && { width: size, height: size } )
    };

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-spinner': true,
      'mdui-spinner-colorful': colorful
    });

    const props = {
      ...restProps,
      style,
      className: clx,
      ref: node => this.root = node
    };

    return (
      <div { ...props } />
    );
  }
}

Spinner.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  colorful: PropTypes.any
};

export default Spinner;
