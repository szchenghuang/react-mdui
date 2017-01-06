'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import mdui from '../index';
import Item from './Item';
import ItemHeader from './ItemHeader';
import ItemTitle from './ItemTitle';
import ItemSummary from './ItemSummary';
import ItemArrow from './ItemArrow';
import ItemBody from './ItemBody';
import ItemActions from './ItemActions';

class Panel extends React.PureComponent {
  componentDidMount() {
    mdui.Panel( this.root, this.props.options );
  }

  render() {
    const {
      className,
      children,
      gapless,
      popout
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel': true,
      'mdui-panel-gapless': !!gapless,
      'mdui-panel-popout': !!popout
    });

    return (
      <div
        ref={ node => this.root = node }
        className={ clx }
        data-mdui-panel
      >
        { children }
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.object,
  gapless: PropTypes.any,
  popout: PropTypes.any
};

Panel.defaultProps = {
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
