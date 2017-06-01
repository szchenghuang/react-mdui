'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import mdui from '../index';

class Headroom extends React.Component {
  componentDidMount() {
    const options = _.pick( this.props, [
      'tolerance',
      'offset',
      'initialClass',
      'pinnedClass',
      'unpinnedClass'
    ]);

    new mdui.Headroom( this.root, options );
  }

  render() {
    const {
      className,
      children,
      tolerance,
      offset,
      initialClass,
      pinnedClass,
      unpinnedClass,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } )
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

Headroom.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  tolerance: PropTypes.number,
  offset: PropTypes.number,
  initialClass: PropTypes.string,
  pinnedClass: PropTypes.string,
  unpinnedClass: PropTypes.string
};

Headroom.defaultProps = {
  initialClass: 'mdui-headroom',
  pinnedClass: 'mdui-headroom-pinned-top',
  unpinnedClass: 'mdui-headroom-unpinned-top'
};

export default Headroom;
