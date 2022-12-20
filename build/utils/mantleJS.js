"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetMantle = void 0;
var config = _interopRequireWildcard(require("../config.json"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AssetMantle = /*#__PURE__*/_createClass(
//field

//constructor
function AssetMantle() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.TENDERMINT_REST_URL;
  _classCallCheck(this, AssetMantle);
  this.path = path;
});
exports.AssetMantle = AssetMantle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBc3NldE1hbnRsZSIsInBhdGgiLCJjb25maWciLCJURU5ERVJNSU5UX1JFU1RfVVJMIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL21hbnRsZUpTLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuZXhwb3J0IGNsYXNzIEFzc2V0TWFudGxlIHtcbiAgLy9maWVsZFxuICBwYXRoOiBzdHJpbmc7XG5cbiAgLy9jb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcgPSBjb25maWcuVEVOREVSTUlOVF9SRVNUX1VSTCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFFNUJBLFdBQVc7QUFDdEI7O0FBR0E7QUFDQSx1QkFBdUQ7RUFBQSxJQUEzQ0MsSUFBWSx1RUFBR0MsTUFBTSxDQUFDQyxtQkFBbUI7RUFBQTtFQUNuRCxJQUFJLENBQUNGLElBQUksR0FBR0EsSUFBSTtBQUNsQixDQUFDO0FBQUEifQ==