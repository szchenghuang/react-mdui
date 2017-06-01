'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Item extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: props.defaultOpen
    };
  }

  render() {
    const {
      className,
      children,
      defaultOpen,
      onToggle,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-collapse-item': true,
      'mdui-collapse-item-open': this.state.open
    });

    const props = {
      ...restProps,
      className: clx,
      onClick: this.onToggle
    };

    return (
      <div { ...props }>
        { children }
      </div>
    );
  }

  onToggle = () => {
    this.setState( { open: !this.state.open } );
    this.props.onToggle();
  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  defaultOpen: PropTypes.any,
  onToggle: PropTypes.func
};

Item.defaultProps = {
  defaultOpen: false,
  onToggle: () => {}
};

export default Item;
