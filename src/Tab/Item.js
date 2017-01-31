'use strict';

import React, { PropTypes } from 'react';

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
