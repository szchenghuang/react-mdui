'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Icon from '../Icon';

class Delete extends React.Component {
  render() {
    const {
      className,
      children,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-chip-delete': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return  (
      <span { ...props }>
        <Icon materialIcon="&#xe5c9;" />
      </span>
    );
  }
}

Delete.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Delete;
