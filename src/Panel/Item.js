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

  componentDidMount() {
    this.root.addEventListener( 'opened.mdui.panel', () => { this.setState( { open: true } ); } );
    this.root.addEventListener( 'closed.mdui.panel', () => { this.setState( { open: false } ); } );
  }

  render() {
    const {
      className,
      children,
      defaultOpen,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-panel-item': true,
      'mdui-panel-item-open': this.state.open
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

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  defaultOpen: PropTypes.any
};

Item.defaultProps = {
  defaultOpen: false
};

export default Item;
