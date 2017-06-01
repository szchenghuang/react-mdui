'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import mdui from '../index';

class Slider extends React.Component {
  componentDidMount() {
    mdui.updateSliders( this.root );
  }

  render() {
    const {
      className,
      step,
      min,
      max,
      value,
      discrete,
      disabled,
      onChange,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-slider': true,
      'mdui-slider-discrete': discrete
    });

    const props = {
      ...restProps,
      className: clx,
      ref: node => this.root = node
    };

    const childProps = {
      type: 'range',
      step,
      min,
      max,
      value,
      ...( disabled && { disabled: true } ),
      onChange: event => onChange( event.target.value )
    };

    return (
      <label { ...props }>
        <input { ...childProps } />
      </label>
    );
  }
}

Slider.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  discrete: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  onChange: () => {}
};

export default Slider;
