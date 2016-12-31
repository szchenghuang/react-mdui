'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

class Icon extends React.PureComponent {
  render() {
    const {
      className,
      textColor,
      color,
      iconJustify,
      materialIcon,
      icon
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-icon': true,
      'mdui-icon-left': 'left' === iconJustify,
      'mdui-icon-right': 'right' === iconJustify,
      'material-icons': !!materialIcon,
      ...( icon && { [ icon ]: true } ),
      ...( textColor && { [ textColor ]: true } ),
      ...( color && { [ color ]: true } )
    });

    return (
      <i className={ clx }>
        { materialIcon }
      </i>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  materialIcon: PropTypes.string,
  icon: PropTypes.string,
  textColor: PropTypes.string,
  color: PropTypes.string,
  iconJustify: PropTypes.string
};

Icon.defaultProps = {
  iconJustify: 'left'
};

export default Icon;
