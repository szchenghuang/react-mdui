'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import mdui from '../index';

class Slider extends React.PureComponent {
  componentDidMount() {
    mdui.updateSliders( this.root );
  }

  render() {
    const {
      className,
      discrete,
      step,
      min,
      max,
      value,
      disabled
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-slider': true,
      'mdui-slider-discrete': !!discrete
    });

    const props = {
      type: "range",
      step,
      min,
      max,
      value,
      ...( disabled && { disabled: true } ),
      onChange: event => this.props.onChange( event.target.value )
    };

    return (
      <label
        ref={ node => this.root = node }
        className={ clx }
      >
        <input
          ref={ node => this.input = node }
          { ...props }/>
      </label>
    );
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  discrete: PropTypes.any,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  discrete: false,
  step: 1,
  min: 0,
  max: 100,
  value: 0,
  onChange: _.noop
};

export default Slider;
