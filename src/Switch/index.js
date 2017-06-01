'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Switch extends React.Component {
  render() {
    const {
      className,
      checked,
      disabled,
      onChange,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-switch': true
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
        <i className="mdui-switch-icon" />
      </label>
    );
  }
}

Switch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  checked: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.func
};

Switch.defaultProps = {
  checked: false,
  onChange: () => {}
};

export default Switch;
