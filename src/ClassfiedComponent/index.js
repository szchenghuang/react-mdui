'use strict';

import React from 'react';
import ClassNames from 'classnames';

const ClassfiedComponent = classes => class extends React.Component {
  render() {
    const {
      className,
      children,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      [ classes ]: true
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <div { ...props }>
        { children }
      </div>
    );
  }
};

export default ClassfiedComponent;
