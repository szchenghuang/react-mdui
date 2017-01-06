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

var Slider = function (_React$PureComponent) {
  _inherits(Slider, _React$PureComponent);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _index2.default.updateSliders(this.root);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className,
          discrete = _props.discrete,
          step = _props.step,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          disabled = _props.disabled;


      var clx = (0, _classnames2.default)(_extends({}, className && _defineProperty({}, className, true), {
        'mdui-slider': true,
        'mdui-slider-discrete': !!discrete
      }));

      var props = _extends({
        type: "range",
        step: step,
        min: min,
        max: max,
        value: value
      }, disabled && { disabled: true }, {
        onChange: function onChange(event) {
          return _this2.props.onChange(event.target.value);
        }
      });

      return _react2.default.createElement(
        'label',
        _extends({
          ref: function ref(node) {
            return _this2.root = node;
          }
        }, (0, _glamor.css)(style), {
          className: clx
        }),
        _react2.default.createElement('input', _extends({
          ref: function ref(node) {
            return _this2.input = node;
          }
        }, props))
      );
    }
  }]);

  return Slider;
}(_react2.default.PureComponent);

Slider.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  discrete: _react.PropTypes.any,
  step: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  value: _react.PropTypes.number,
  disabled: _react.PropTypes.any,
  onChange: _react.PropTypes.func
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  value: 0,
  onChange: _lodash2.default.noop
};

exports.default = Slider;