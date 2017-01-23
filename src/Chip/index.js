'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import Delete from './Delete';
import Icon from './Icon';
import Title from './Title';

class Chip extends React.Component {
  render() {
    const {
      className,
      children,
      styleIcon,
      classNameIcon,
      styleTitle,
      classNameTitle,
      icon,
      iconSrc,
      title,
      delete: showDelete,
      onDelete,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return children ? (
      <div { ...props }>
        { children }
      </div>
    ) : (
      <div { ...props }>
        { icon && (
          <Icon
            style={ styleIcon }
            className={ classNameIcon }
          >
            { icon }
          </Icon>
        )}
        { iconSrc && (
          <Icon
            style={ styleIcon }
            className={ classNameIcon }
            src={ iconSrc } />
        )}
        { title && (
          <Title
            style={ styleTitle }
            className={ classNameTitle }
            title={ title } />
        )}
        { showDelete && (
          <Delete onClick={ onDelete } />
        )}
      </div>
    );
  }
}

Chip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  styleIcon: PropTypes.object,
  classNameIcon: PropTypes.string,
  styleTitle: PropTypes.object,
  classNameTitle: PropTypes.string,
  icon: PropTypes.node,
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  delete: PropTypes.any,
  onDelete: PropTypes.func
};

Chip.defaultProps = {
  onDelete: () => {}
};

export default Chip;
export { Delete, Icon, Title };
