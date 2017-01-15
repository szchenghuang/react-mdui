'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import ClassNames from 'classnames';
import { css } from 'glamor';

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
      style,
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

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'options', 'gapless', 'popout' ] );

    return (
      <div
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
        data-mdui-panel
      >
        { children }
      </div>
    );
  }
}

Panel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.object,
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
