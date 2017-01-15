'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemTitle = exports.ItemText = exports.ItemIcon = exports.ItemContent = exports.ItemAvatar = exports.Item = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemAvatar = require('./ItemAvatar');

var _ItemAvatar2 = _interopRequireDefault(_ItemAvatar);

var _ItemContent = require('./ItemContent');

var _ItemContent2 = _interopRequireDefault(_ItemContent);

var _ItemIcon = require('./ItemIcon');

var _ItemIcon2 = _interopRequireDefault(_ItemIcon);

var _ItemText = require('./ItemText');

var _ItemText2 = _interopRequireDefault(_ItemText);

var _ItemTitle = require('./ItemTitle');

var _ItemTitle2 = _interopRequireDefault(_ItemTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className,
          children = _props.children,
          dense = _props.dense;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-list': true,
        'mdui-list-dense': dense
      }));

      var props = _lodash2.default.omit(this.props, ['style', 'className', 'children', 'dense']);

      return _react2.default.createElement(
        'ul',
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

  return List;
}(_react2.default.PureComponent);

List.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  dense: _react.PropTypes.any
};

exports.default = List;
exports.Item = _Item2.default;
exports.ItemAvatar = _ItemAvatar2.default;
exports.ItemContent = _ItemContent2.default;
exports.ItemIcon = _ItemIcon2.default;
exports.ItemText = _ItemText2.default;
exports.ItemTitle = _ItemTitle2.default;