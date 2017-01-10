'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

import Icon from './Icon';
import Title from './Title';

class Chip extends React.PureComponent {
  render() {
    const {
      style,
      className,
      styleIcon,
      classNameIcon,
      styleTitle,
      classNameTitle,
      icon,
      iconSrc,
      title,
      delete: showDelete,
      onClickDelete
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip': true
    });

    return (
      <div
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
      >
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
          <span
            className="mdui-chip-delete"
            onClick={ onClickDelete }
          >
            <i className="mdui-icon material-icons">&#xe5c9;</i>
          </span>
        )}
      </div>
    );
  }
}

Chip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  styleIcon: PropTypes.object,
  classNameIcon: PropTypes.string,
  styleTitle: PropTypes.object,
  classNameTitle: PropTypes.string,
  icon: PropTypes.node,
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  delete: PropTypes.any,
  onClickDelete: PropTypes.func
};

Chip.defaultProps = {
  onClickDelete: _.noop
};

export default Chip;
export { Title };
