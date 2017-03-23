'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

const ClassfiedComponent = classes => {
  class Classfied extends React.Component {
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
  }

  Classfied.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  return Classfied;
};

export default ClassfiedComponent;
