'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import Item from './Item';
import ItemAvatar from './ItemAvatar';
import ItemContent from './ItemContent';
import ItemIcon from './ItemIcon';
import ItemText from './ItemText';
import ItemTitle from './ItemTitle';

class List extends React.Component {
  render() {
    const {
      className,
      children,
      dense,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-list': true,
      'mdui-list-dense': dense
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <ul { ...props }>
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
