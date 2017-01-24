'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Checkbox extends React.Component {
  render() {
    const {
      className,
      label,
      checked,
      disabled,
      onChange,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-checkbox': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <label { ...props }>
        <input
          type="checkbox"
          checked={ checked }
          disabled={ disabled }
          onChange={ event => onChange( event.target.checked ) } />
        <i className="mdui-checkbox-icon" />
        { label }
      </label>
    );
  }
}

Checkbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.node,
  checked: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {}
};

export default Checkbox;
