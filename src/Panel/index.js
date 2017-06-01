'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import mdui from '../index';
import Item from './Item';
import ItemHeader from './ItemHeader';
import ItemTitle from './ItemTitle';
import ItemSummary from './ItemSummary';
import ItemArrow from './ItemArrow';
import ItemBody from './ItemBody';
import ItemActions from './ItemActions';

class Panel extends React.Component {
  componentDidMount() {
    const { accordion } = this.props;
    const options = { accordion: !!accordion };
    new mdui.Panel( this.root, options );
  }

  render() {
    const {
      className,
      children,
      accordion,
      gapless,
      popout,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel': true,
      'mdui-panel-gapless': gapless,
      'mdui-panel-popout': popout
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

Panel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  accordion: PropTypes.any,
  gapless: PropTypes.any,
  popout: PropTypes.any
};

export default Panel;
export {
  Item,
  ItemHeader,
  ItemTitle,
  ItemSummary,
  ItemArrow,
  ItemBody,
  ItemActions
};
