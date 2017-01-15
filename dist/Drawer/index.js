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

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_React$PureComponent) {
  _inherits(Drawer, _React$PureComponent);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          right = _props.right,
          open = _props.open;


      if (open) {
        var className = 'mdui-drawer-body-' + right ? 'right' : 'left';
        if (document.body.classList) {
          document.body.classList.add(className);
        } else {
          if (-1 == document.body.className.indexOf(className)) {
            document.body.className += ' ' + className;
          }
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      new _index2.default.Drawer(this.root, this.props.options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className,
          children = _props2.children,
          fullHeight = _props2.fullHeight,
          right = _props2.right,
          scrollBar = _props2.scrollBar,
          open = _props2.open,
          close = _props2.close;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-drawer': true,
        'mdui-drawer-full-height': fullHeight,
        'mdui-drawer-right': right,
        'mdui-drawer-scrollbar': scrollBar,
        'mdui-drawer-open': open,
        'mdui-drawer-close': close
      }));

      var props = _lodash2.default.omit(this.props, ['style', 'className', 'children', 'fullHeight', 'right', 'scrollBar', 'open', 'close']);

      return _react2.default.createElement(
        'div',
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

  return Drawer;
}(_react2.default.PureComponent);

Drawer.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  options: _react.PropTypes.object,
  fullHeight: _react.PropTypes.any,
  right: _react.PropTypes.any,
  scrollBar: _react.PropTypes.any,
  open: _react.PropTypes.any,
  close: _react.PropTypes.any
};

exports.default = Drawer;