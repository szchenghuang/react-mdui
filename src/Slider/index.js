'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

import mdui from '../index';

class Slider extends React.PureComponent {
  componentDidMount() {
    mdui.updateSliders( this.root );
  }

  render() {
    const {
      style,
      className,
      discrete,
      step,
      min,
      max,
      defaultValue,
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
      defaultValue,
      value,
      ...( disabled && { disabled: true } ),
      onChange: event => this.props.onChange( event.target.value )
    };

    return (
      <label
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
      >
        <input
          ref={ node => this.input = node }
          { ...props } />
      </label>
    );
  }
}

Slider.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  discrete: PropTypes.any,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  onChange: _.noop
};

export default Slider;
