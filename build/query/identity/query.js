"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryIdentities = void 0;
var config = _interopRequireWildcard(require("../../config.json"));
var _request = _interopRequireDefault(require("request"));
var _mantleJS = require("../../utilities/mantleJS");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var queryIdentities = /*#__PURE__*/function (_AssetMantle) {
  _inherits(queryIdentities, _AssetMantle);
  var _super = _createSuper(queryIdentities);
  function queryIdentities() {
    var _this;
    _classCallCheck(this, queryIdentities);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "queryIdentity", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var path, options;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              path = _this.path;
              options = {
                method: "GET",
                url: path + config.queryIdentityPath,
                headers: {}
              };
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                (0, _request["default"])(options, /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error, res) {
                    var result, list;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (error) {
                              reject(error);
                            }
                            result = JSON.parse(res.body);
                            list = result.result.value.identities.value.list;
                            resolve(list);
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              })["catch"](function (error) {
                console.log("Promise Rejected: " + error);
                return error;
              }));
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    _defineProperty(_assertThisInitialized(_this), "queryIdentityWithID", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var path, options;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                path = _this.path;
                options = {
                  method: "GET",
                  url: path + config.queryIdentityWithID + id,
                  headers: {}
                };
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  (0, _request["default"])(options, /*#__PURE__*/function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(error, res) {
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (error) {
                                reject(error);
                              }
                              resolve(res.body);
                            case 2:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));
                    return function (_x4, _x5) {
                      return _ref4.apply(this, arguments);
                    };
                  }());
                })["catch"](function (error) {
                  console.log("Promise Rejected: " + error);
                  return error;
                }));
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    return _this;
  }
  return _createClass(queryIdentities);
}(_mantleJS.AssetMantle);
exports.queryIdentities = queryIdentities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJxdWVyeUlkZW50aXRpZXMiLCJwYXRoIiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImNvbmZpZyIsInF1ZXJ5SWRlbnRpdHlQYXRoIiwiaGVhZGVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiUmVxdWVzdCIsImVycm9yIiwicmVzIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImxpc3QiLCJ2YWx1ZSIsImlkZW50aXRpZXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJxdWVyeUlkZW50aXR5V2l0aElEIiwiQXNzZXRNYW50bGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcXVlcnkvaWRlbnRpdHkvcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcInJlcXVlc3RcIjtcbmltcG9ydCB7IEFzc2V0TWFudGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYW50bGVKU1wiO1xuXG5leHBvcnQgY2xhc3MgcXVlcnlJZGVudGl0aWVzIGV4dGVuZHMgQXNzZXRNYW50bGUge1xuICBxdWVyeUlkZW50aXR5ID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgbGV0IHBhdGggPSB0aGlzLnBhdGg7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogcGF0aCArIGNvbmZpZy5xdWVyeUlkZW50aXR5UGF0aCxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgUmVxdWVzdChvcHRpb25zLCBhc3luYyBmdW5jdGlvbiAoZXJyb3I6IGFueSwgcmVzOiB7IGJvZHk6IHN0cmluZyB9KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzLmJvZHkpO1xuICAgICAgICBsZXQgbGlzdCA9IHJlc3VsdC5yZXN1bHQudmFsdWUuaWRlbnRpdGllcy52YWx1ZS5saXN0O1xuICAgICAgICByZXNvbHZlKGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWQ6IFwiICsgZXJyb3IpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0pO1xuICB9O1xuXG4gIHF1ZXJ5SWRlbnRpdHlXaXRoSUQgPSBhc3luYyAoaWQ6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgbGV0IHBhdGggPSB0aGlzLnBhdGg7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogcGF0aCArIGNvbmZpZy5xdWVyeUlkZW50aXR5V2l0aElEICsgaWQsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBSZXF1ZXN0KG9wdGlvbnMsIGFzeW5jIGZ1bmN0aW9uIChlcnJvcjogYW55LCByZXM6IHsgYm9keTogYW55IH0pIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcy5ib2R5KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkOiBcIiArIGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9KTtcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQXVE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