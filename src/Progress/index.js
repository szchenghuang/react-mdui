'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Progress extends React.Component {
  render() {
    const {
      className,
      children,
      percentage,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-progress': true
    });

    const props = {
      ...restProps,
      className: clx
    };

    const childClx = ClassNames({
      'mdui-progress-indeterminate': !percentage,
      'mdui-progress-determinate': percentage
    });

    const childProps = {
      ...( percentage && { style: { width: percentage + '%' } } ),
      className: childClx
    };

    return (
      <div { ...props }>
        { children || <div { ...childProps } /> }
      </div>
    );
  }
}

Progress.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  percentage: PropTypes.number
};

export default Progress;
