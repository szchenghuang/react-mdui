'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          node = _props.node,
          type = _props.type,
          block = _props.block,
          ripple = _props.ripple;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-btn': true,
        'mdui-btn-raised': 'raised' === type,
        'mdui-btn-icon': 'icon' === type,
        'mdui-btn-block': !!block,
        'mdui-ripple': !!ripple
      }));

      var props = _extends({}, this.props);

      if ('a' === node) {
        return _react2.default.createElement(
          'a',
          _extends({
            className: clx
          }, props),
          children
        );
      }

      if ('button' === node) {
        return _react2.default.createElement(
          'button',
          _extends({
            className: clx
          }, props),
          children
        );
      }

      if ('input' === node) {
        return _react2.default.createElement(
          'input',
          _extends({
            className: clx
          }, props),
          children
        );
      }
    }
  }]);

  return Button;
}(_react2.default.PureComponent);

Button.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  node: _react.PropTypes.string,
  type: _react.PropTypes.string,
  block: _react.PropTypes.any,
  ripple: _react.PropTypes.any,
  disabled: _react.PropTypes.any
};

Button.defaultProps = {
  node: 'a'
};

exports.default = Button;