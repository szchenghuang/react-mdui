'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import mdui from '../index';
import Item from './Item';

class Tab extends React.Component {
  componentDidMount() {
    const { trigger, loop } = this.props;
    const options = { trigger, loop: !!loop };
    new mdui.Tab( this.root, options );
  }

  render() {
    const {
      className,
      children,
      trigger,
      loop,
      scrollable,
      centered,
      fullWidth,
      ...restProps
    } = this.props;

    const clx = ClassNames({
      ...( className && { [ className ]: true } ),
      'mdui-tab': true,
      'mdui-tab-scrollable': scrollable,
      'mdui-tab-centered': centered,
      'mdui-full-width': fullWidth
    });

    const props = {
      ...restProps,
      className: clx,
      ref: node => this.root = node
    };

    const ids = _.map( children, child => child.props.id );

    return (
      <div>
        <div { ...props }>
          { _.map( children, ( child, index ) => {
            const {
              children,
              className,
              id,
              ripple,
              icon,
              label,
              active,
              ...restProps
            } = child.props;

            const clx = ClassNames({
              ...( className && { [ className ]: true } ),
              'mdui-ripple': ripple,
              'mdui-tab-active': active
            });

            return (
              <a
                key={ index }
                href={ '#' + id }
                className={ clx }
                { ...restProps }
              >
                { icon }
                { icon ? <label>{ label }</label> : label }
              </a>
            );
          })}
        </div>
        { _.map( children, ( child, index ) => (
          <div key={ index } id={ ids[ index ] }>
            { child.props.children }
          </div>
        ))}
      </div>
    );
  }
}

Tab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  trigger: PropTypes.string,
  loop: PropTypes.any,
  scrollable: PropTypes.any,
  centered: PropTypes.any,
  fullWidth: PropTypes.any
};

Tab.defaultProps = {
  trigger: 'click'
};

export default Tab;
export { Item };
