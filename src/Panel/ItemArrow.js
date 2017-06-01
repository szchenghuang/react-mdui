'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Icon from '../Icon';

class ItemArrow extends React.Component {
  render() {
    const {
      className,
      children,
      materialIcon,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item-arrow': true
    });

    const props = {
      ...restProps,
      className: clx,
      ...( !children && { materialIcon } )
    };

    return (
      <Icon { ...props }>
        { children }
      </Icon>
    );
  }
}

ItemArrow.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  materialIcon: PropTypes.string
};

ItemArrow.defaultProps = {
  materialIcon: String.fromCharCode( 0xe313 )
};

export default ItemArrow;
