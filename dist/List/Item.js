'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className,
          children = _props.children,
          node = _props.node,
          href = _props.href,
          active = _props.active,
          ripple = _props.ripple;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-list-item': true,
        'mdui-list-item-active': active,
        'mdui-ripple': ripple
      }));

      var props = _lodash2.default.omit(props, ['style', 'className', 'children', 'node', 'href', 'active', 'ripple']);

      if ('a' === node) {
        return _react2.default.createElement(
          'a',
          _extends({
            ref: function ref(node) {
              return _this2.root = node;
            }
          }, (0, _glamor.css)(style), {
            className: clx,
            href: href
          }, props),
          children
        );
      }

      return _react2.default.createElement(
        'li',
        _extends({
          ref: function ref(node) {
            return _this2.root = node;
          }
        }, (0, _glamor.css)(style), {
          className: clx
        }, props),
        children
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  node: _react.PropTypes.string,
  href: _react.PropTypes.string,
  active: _react.PropTypes.any,
  ripple: _react.PropTypes.any
};

Item.defaultProps = {
  node: 'li',
  ripple: true
};

exports.default = Item;