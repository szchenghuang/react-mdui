'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';
import { css } from 'glamor';
import ClassNames from 'classnames';

import mdui from '../index';

class Drawer extends React.PureComponent {
  componentWillMount() {
    const {
      right,
      open
    } = this.props;

    if ( open ) {
      const className = 'mdui-drawer-body-' + right ? 'right' : 'left';
      if ( document.body.classList ) {
        document.body.classList.add( className );
      } else {
        if ( -1 == document.body.className.indexOf( className ) ) {
          document.body.className += ' ' + className;
        }
      }
    }
  }

  componentDidMount() {
    new mdui.Drawer( this.root, this.props.options );
  }

  render() {
    const {
      style,
      className,
      children,
      fullHeight,
      right,
      scrollBar,
      open,
      close
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-drawer': true,
      'mdui-drawer-full-height': fullHeight,
      'mdui-drawer-right': right,
      'mdui-drawer-scrollbar': scrollBar,
      'mdui-drawer-open': open,
      'mdui-drawer-close': close
    });

    const props = _.omit( this.props, [ 'style', 'className', 'children',
      'fullHeight', 'right', 'scrollBar',  'open', 'close' ] );

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
}

Drawer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.object,
  fullHeight: PropTypes.any,
  right: PropTypes.any,
  scrollBar: PropTypes.any,
  open: PropTypes.any,
  close: PropTypes.any
};

export default Drawer;
