'use strict';

import React, { PropTypes } from 'react';
import ClassNames from 'classnames';

import { addClass } from '../utils';

const addClassToBody = function( className ) {
  const { body } = document;
  addClass.call( body, className );
};

class AppBar extends React.Component {
  componentDidMount() {
    if ( this.props.fixed ) {
      const { toolbar, tab } = this.props;
      const bodyClass =
        toolbar && tab ? 'mdui-appbar-with-tab-larger' :
        toolbar ? 'mdui-appbar-with-toolbar' :
        tab ? 'mdui-appbar-with-tab' : undefined;

      if ( bodyClass ) {
        addClassToBody( bodyClass );
      }
    }
  }

  render() {
    const {
      className,
      children,
      toolbar,
      tab,
      shadow,
      fixed,
      scrollHide,
      scrollToolbarHide,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-appbar': true,
      'mdui-appbar-fixed': fixed,
      'mdui-shadow-0': !shadow,
      'mdui-appbar-scroll-hide': scrollHide,
      'mdui-appbar-scroll-toolbar-hide': scrollToolbarHide
    });

    const props = {
      ...restProps,
      className: clx
    };

    return (
      <div { ...props }>
        { toolbar }
        { tab }
        { children }
      </div>
    );
  }
}

AppBar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  toolbar: PropTypes.node,
  tab: PropTypes.node,
  shadow: PropTypes.bool,
  fixed: PropTypes.any,
  scrollHide: PropTypes.any,
  scrollToolbarHide: PropTypes.any
};

AppBar.defaultProps = {
  shadow: true,
  fixed: true
};

export default AppBar;
