'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import mdui from '../index';
import Item from './Item';
import ItemArrow from './ItemArrow';
import ItemBody from './ItemBody';
import ItemHeader from './ItemHeader';

class Collapse extends React.Component {
  componentDidMount() {
    const { accordion } = this.props;
    const options = { accordion: !!accordion };
    new mdui.Collapse( this.root, options );
  }

  render() {
    const {
      className,
      children,
      accordion,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse': true
    });

    const props = {
      ...restProps,
      className: clx,
      ref: node => this.root = node
    };

    return (
      <div { ...props }>
        { children }
      </div>
    );
  }
}

Collapse.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  accordion: PropTypes.any
};

export default Collapse;
export {
  Item,
  ItemArrow,
  ItemBody,
  ItemHeader,
};
