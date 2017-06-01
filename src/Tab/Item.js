'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    return null;
  }
}

Item.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  ripple: PropTypes.any,
  active: PropTypes.any
};

Item.defaultProps = {
  ripple: true
};

export default Item;
