"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _default() {
  for (var _len = arguments.length, servicesToConsume = new Array(_len), _key = 0; _key < _len; _key++) {
    servicesToConsume[_key] = arguments[_key];
  }

  return function (Component) {
    var mapStateToProps = function mapStateToProps(state) {
      if (!state.pluginbot) {
        console.error("pluginbot not initialized, try adding pluginbot provider");
        return {
          services: {}
        };
      }

      var services = servicesToConsume.reduce(function (acc, service) {
        acc[service] = state.pluginbot.services[service];
        return acc;
      }, {});
      return {
        services: services
      };
    };

    var ServiceConsumerWrapper = /*#__PURE__*/function (_React$Component) {
      (0, _inherits2["default"])(ServiceConsumerWrapper, _React$Component);

      var _super = _createSuper(ServiceConsumerWrapper);

      function ServiceConsumerWrapper() {
        (0, _classCallCheck2["default"])(this, ServiceConsumerWrapper);
        return _super.apply(this, arguments);
      }

      (0, _createClass2["default"])(ServiceConsumerWrapper, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/_react["default"].createElement(Component, this.props);
        }
      }]);
      return ServiceConsumerWrapper;
    }(_react["default"].Component);

    return (0, _reactRedux.connect)(mapStateToProps)(ServiceConsumerWrapper);
  };
}