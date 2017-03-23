'use strict';

import React, { PropTypes } from 'react';
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
  children: PropTypes.node,
  onClick: PropTypes.func
};

Delete.defaultProps = {
  onClick: () => {}
};

export default Delete;
