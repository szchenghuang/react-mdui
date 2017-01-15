'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

import mdui from '../index';
import Item from './Item';
import ItemArrow from './ItemArrow';
import ItemBody from './ItemBody';
import ItemHeader from './ItemHeader';

class Collapse extends React.PureComponent {
  componentDidMount() {
    new mdui.Collapse( this.root, this.props.options );
  }

  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse': true
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'options' ] );

    return (
      <div
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
        data-mdui-collapse
      >
        { children }
      </div>
    );
  }
}

Collapse.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.object
};

export default Collapse;
export {
  Item,
  ItemArrow,
  ItemBody,
  ItemHeader
};
