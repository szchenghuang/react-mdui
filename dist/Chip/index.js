'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Icon = exports.Delete = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Delete = require('./Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip = function (_React$Component) {
  _inherits(Chip, _React$Component);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          styleIcon = _props.styleIcon,
          classNameIcon = _props.classNameIcon,
          styleTitle = _props.styleTitle,
          classNameTitle = _props.classNameTitle,
          icon = _props.icon,
          iconSrc = _props.iconSrc,
          title = _props.title,
          showDelete = _props.delete,
          onDelete = _props.onDelete,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'styleIcon', 'classNameIcon', 'styleTitle', 'classNameTitle', 'icon', 'iconSrc', 'title', 'delete', 'onDelete']);

      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-chip': true
      }));

      var props = _extends({}, restProps, {
        className: clx
      });

      return children ? _react2.default.createElement(
        'div',
        props,
        children
      ) : _react2.default.createElement(
        'div',
        props,
        icon && _react2.default.createElement(
          _Icon2.default,
          {
            style: styleIcon,
            className: classNameIcon
          },
          icon
        ),
        iconSrc && _react2.default.createElement(_Icon2.default, {
          style: styleIcon,
          className: classNameIcon,
          src: iconSrc }),
        title && _react2.default.createElement(_Title2.default, {
          style: styleTitle,
          className: classNameTitle,
          title: title }),
        showDelete && _react2.default.createElement(_Delete2.default, { onClick: onDelete })
      );
    }
  }]);

  return Chip;
}(_react2.default.Component);

Chip.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  styleIcon: _react.PropTypes.object,
  classNameIcon: _react.PropTypes.string,
  styleTitle: _react.PropTypes.object,
  classNameTitle: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  iconSrc: _react.PropTypes.string,
  title: _react.PropTypes.string,
  delete: _react.PropTypes.any,
  onDelete: _react.PropTypes.func
};

Chip.defaultProps = {
  onDelete: function onDelete() {}
};

exports.default = Chip;
exports.Delete = _Delete2.default;
exports.Icon = _Icon2.default;
exports.Title = _Title2.default;