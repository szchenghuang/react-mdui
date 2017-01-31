'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import mdui from '../index';

class DrawerControlled extends React.Component {
  componentDidMount() {
    const { open, overlay, onChange } = this.props;

    this.root.addEventListener( 'open.mdui.drawer', () => onChange( true ) );
    this.root.addEventListener( 'close.mdui.drawer', () => onChange( false ) );

    this.drawer = new mdui.Drawer( this.root, { overlay: !!overlay } );
    this.drawer.close();

    if ( open ) {
      this.drawer.open();
    }
  }

  componentWillReceiveProps( nextProps ) {
    const { open: nextOpen } = nextProps;

    if ( nextOpen ) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }

  render() {
    const {
      className,
      children,
      open,
      right,
      overlay,
      fullHeight,
      scrollBar,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-drawer': true,
      'mdui-drawer-full-height': fullHeight,
      'mdui-drawer-right': right,
      'mdui-drawer-scrollbar': scrollBar,
      'mdui-drawer-open': open,
      'mdui-drawer-close': !open
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

DrawerControlled.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.any,
  right: PropTypes.any,
  overlay: PropTypes.any,
  fullHeight: PropTypes.any,
  scrollBar: PropTypes.any,
  onChange: PropTypes.func
};

DrawerControlled.defaultProps = {
  onChange: () => {}
};

export default DrawerControlled;
