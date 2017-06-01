'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Radio extends React.Component {
  render() {
    const {
      className,
      label,
      value,
      name,
      checked,
      disabled,
      onChange,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-radio': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <label { ...props }>
        <input
          type="radio"
          value={ value }
          name={ name }
          checked={ checked }
          disabled={ disabled }
          onChange={ event => onChange( event.currentTarget.value ) } />
        <i className="mdui-radio-icon" />
        { label }
      </label>
    );
  }
}

Radio.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Radio.defaultProps = {
  checked: false,
  onChange: () => {}
};

export default Radio;
