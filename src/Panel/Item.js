'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

class Item extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: props.open || props.defaultOpen
    };
  }

  render() {
    const {
      style,
      className,
      children
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item': true,
      'mdui-panel-item-open': !!this.state.open
    });

    const props = {
      ...( _.omit( props, [ 'style', 'className', 'children', 'open', 'defaultOpen', 'onToggle' ] ) ),
      ...( undefined === this.props.open && { onClick: this.onToggle } )
    };

    return (
      <div
        ref={ node => this.root = node }
        { ...css( style ) }
        className={ clx }
        { ...props }
      >
        { children }
      </div>
    );
  }

  onToggle = () => {
    const open = !this.state.open;

    this.setState({ open });
    this.props.onToggle( open );
  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.any,
  defaultOpen: PropTypes.any,
  onToggle: PropTypes.func
};

Item.defaultProps = {
  defaultOpen: false,
  onToggle: _.noop
};

export default Item;
