'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemActions = exports.ItemBody = exports.ItemArrow = exports.ItemSummary = exports.ItemTitle = exports.ItemHeader = exports.Item = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemHeader = require('./ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

var _ItemTitle = require('./ItemTitle');

var _ItemTitle2 = _interopRequireDefault(_ItemTitle);

var _ItemSummary = require('./ItemSummary');

var _ItemSummary2 = _interopRequireDefault(_ItemSummary);

var _ItemArrow = require('./ItemArrow');

var _ItemArrow2 = _interopRequireDefault(_ItemArrow);

var _ItemBody = require('./ItemBody');

var _ItemBody2 = _interopRequireDefault(_ItemBody);

var _ItemActions = require('./ItemActions');

var _ItemActions2 = _interopRequireDefault(_ItemActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$PureComponent) {
  _inherits(Panel, _React$PureComponent);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _index2.default.Panel(this.root, this.props.options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          gapless = _props.gapless,
          popout = _props.popout;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-panel': true,
        'mdui-panel-gapless': !!gapless,
        'mdui-panel-popout': !!popout
      }));

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this2.root = node;
          },
          className: clx,
          'data-mdui-panel': true
        },
        children
      );
    }
  }]);

  return Panel;
}(_react2.default.PureComponent);

Panel.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  options: _react.PropTypes.object,
  gapless: _react.PropTypes.any,
  popout: _react.PropTypes.any
};

Panel.defaultProps = {};

exports.default = Panel;
exports.Item = _Item2.default;
exports.ItemHeader = _ItemHeader2.default;
exports.ItemTitle = _ItemTitle2.default;
exports.ItemSummary = _ItemSummary2.default;
exports.ItemArrow = _ItemArrow2.default;
exports.ItemBody = _ItemBody2.default;
exports.ItemActions = _ItemActions2.default;