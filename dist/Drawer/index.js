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

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerControlled = function (_React$Component) {
  _inherits(DrawerControlled, _React$Component);

  function DrawerControlled(props) {
    _classCallCheck(this, DrawerControlled);

    var _this = _possibleConstructorReturn(this, (DrawerControlled.__proto__ || Object.getPrototypeOf(DrawerControlled)).call(this, props));

    var side = props.right ? 'right' : 'left';
    _this.state = {
      open: props.open,
      side: side,
      classNameBody: 'mdui-drawer-body-' + side
    };
    return _this;
  }

  _createClass(DrawerControlled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          open = _props.open,
          overlay = _props.overlay,
          onChange = _props.onChange;


      this.root.addEventListener('open.mdui.drawer', function () {
        return onChange(true);
      });
      this.root.addEventListener('close.mdui.drawer', function () {
        return onChange(false);
      });

      this.drawer = new _index2.default.Drawer(this.root, { overlay: !!overlay });
      this.drawer.close();

      if (open) {
        this.drawer.open();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextOpen = nextProps.open;


      if (nextOpen) {
        this.drawer.open();
      } else {
        this.drawer.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          open = _props2.open,
          right = _props2.right,
          overlay = _props2.overlay,
          fullHeight = _props2.fullHeight,
          scrollBar = _props2.scrollBar,
          restProps = _objectWithoutProperties(_props2, ['className', 'children', 'open', 'right', 'overlay', 'fullHeight', 'scrollBar']);

      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-drawer': true,
        'mdui-drawer-full-height': fullHeight,
        'mdui-drawer-right': right,
        'mdui-drawer-scrollbar': scrollBar,
        'mdui-drawer-open': open,
        'mdui-drawer-close': !open
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

  return DrawerControlled;
}(_react2.default.Component);

DrawerControlled.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  open: _react.PropTypes.any,
  right: _react.PropTypes.any,
  overlay: _react.PropTypes.any,
  fullHeight: _react.PropTypes.any,
  scrollBar: _react.PropTypes.any,
  onChange: _react.PropTypes.func
};

DrawerControlled.defaultProps = {
  onChange: function onChange() {}
};

exports.default = DrawerControlled;