'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemHeader = exports.ItemBody = exports.ItemArrow = exports.Item = undefined;

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

var _ItemArrow = require('./ItemArrow');

var _ItemArrow2 = _interopRequireDefault(_ItemArrow);

var _ItemBody = require('./ItemBody');

var _ItemBody2 = _interopRequireDefault(_ItemBody);

var _ItemHeader = require('./ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
  }

  _createClass(Collapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var accordion = this.props.accordion;

      var options = { accordion: !!accordion };
      new _index2.default.Collapse(this.root, options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          accordion = _props.accordion,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'accordion']);

      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-collapse': true
      }));

      var props = _extends({}, restProps, {
        className: clx,
        ref: function ref(node) {
          return _this2.root = node;
        }
      });

      return _react2.default.createElement(
        'div',
        props,
        children
      );
    }
  }]);

  return Collapse;
}(_react2.default.Component);

Collapse.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  accordion: _react.PropTypes.any
};

exports.default = Collapse;
exports.Item = _Item2.default;
exports.ItemArrow = _ItemArrow2.default;
exports.ItemBody = _ItemBody2.default;
exports.ItemHeader = _ItemHeader2.default;