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

var ItemTitle = function (_React$PureComponent) {
  _inherits(ItemTitle, _React$PureComponent);

  function ItemTitle() {
    _classCallCheck(this, ItemTitle);

    return _possibleConstructorReturn(this, (ItemTitle.__proto__ || Object.getPrototypeOf(ItemTitle)).apply(this, arguments));
  }

  _createClass(ItemTitle, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className,
          children = _props.children,
          oneLine = _props.oneLine,
          twoLines = _props.twoLines,
          threeLines = _props.threeLines;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-list-item-title': true,
        'mdui-list-item-one-line': oneLine,
        'mdui-list-item-two-line': twoLines,
        'mdui-list-item-three-line': threeLines
      }));

      var props = _lodash2.default.omit(this.props, ['style', 'className', 'children', 'oneLine', 'twoLines', 'threeLines']);

      return _react2.default.createElement(
        'i',
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

  return ItemTitle;
}(_react2.default.PureComponent);

ItemTitle.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  oneLine: _react.PropTypes.any,
  twoLines: _react.PropTypes.any,
  threeLines: _react.PropTypes.any
};

exports.default = ItemTitle;