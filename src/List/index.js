'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

import Item from './Item';
import ItemAvatar from './ItemAvatar';
import ItemContent from './ItemContent';
import ItemIcon from './ItemIcon';
import ItemText from './ItemText';
import ItemTitle from './ItemTitle';

class List extends React.PureComponent {
  render() {
    const {
      style,
      className,
      children,
      dense
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list': true,
      'mdui-list-dense': dense
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children', 'dense' ] );

    return (
      <ul
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children }
      </ul>
    );
  }
}

List.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.any
};

export default List;
export {
  Item,
  ItemAvatar,
  ItemContent,
  ItemIcon,
  ItemText,
  ItemTitle
};
