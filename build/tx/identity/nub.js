"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nubIdentity = void 0;
var _request = _interopRequireDefault(require("request"));
var config = _interopRequireWildcard(require("../../config.json"));
var _broadcastTx = require("../../utilities/broadcastTx");
var _keys = require("../../utilities/keys");
var _mantleJS = require("../../utilities/mantleJS");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var nubIdentity = /*#__PURE__*/function (_AssetMantle) {
  _inherits(nubIdentity, _AssetMantle);
  var _super = _createSuper(nubIdentity);
  function nubIdentity() {
    var _this;
    _classCallCheck(this, nubIdentity);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "nub", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(address, chain_id, mnemonic, nubID, feesAmount, feesToken, gas, mode, memo) {
        var wallet, path, options;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _keys.getWallet)(mnemonic, "");
              case 2:
                wallet = _context.sent;
                path = _this.path;
                options = {
                  method: "POST",
                  url: path + config.nubPath,
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    type: config.nubType,
                    value: {
                      baseReq: {
                        from: address,
                        chain_id: chain_id,
                        memo: memo,
                        fees: [{
                          amount: String(feesAmount),
                          denom: feesToken
                        }],
                        gas: String(gas)
                      },
                      nubID: nubID
                    }
                  })
                };
                console.log("post method options: ", options);
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  (0, _request["default"])(options, function (error, response) {
                    if (error) {
                      return reject(error);
                    }
                    var result = JSON.parse(response.body);
                    console.log("post result: ", result);
                    resolve((0, _broadcastTx.broadcastTx)(path, wallet, mnemonic, result.value, chain_id, config.FEE, config.GASPRICE, mode));
                  });
                })["catch"](function (error) {
                  console.log("Promise Rejected: " + error);
                  return error;
                }));
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this), "createIdentityNubMsg", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address, chain_id, nubID, feesAmount, feesToken, gas, memo) {
        var path, options;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                path = _this.path;
                options = {
                  method: "POST",
                  url: path + config.nubPath,
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    type: config.nubType,
                    value: {
                      baseReq: {
                        from: address,
                        chain_id: chain_id,
                        memo: memo,
                        fees: [{
                          amount: String(feesAmount),
                          denom: feesToken
                        }],
                        gas: String(gas)
                      },
                      nubID: nubID
                    }
                  })
                };
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  (0, _request["default"])(options, function (error, response) {
                    if (error) {
                      return reject(error);
                    }
                    var result = JSON.parse(response.body);
                    resolve(result);
                  });
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
      }));
      return function (_x10, _x11, _x12, _x13, _x14, _x15, _x16) {
        return _ref2.apply(this, arguments);
      };
    }());
    return _this;
  }
  return _createClass(nubIdentity);
}(_mantleJS.AssetMantle);
exports.nubIdentity = nubIdentity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJudWJJZGVudGl0eSIsImFkZHJlc3MiLCJjaGFpbl9pZCIsIm1uZW1vbmljIiwibnViSUQiLCJmZWVzQW1vdW50IiwiZmVlc1Rva2VuIiwiZ2FzIiwibW9kZSIsIm1lbW8iLCJnZXRXYWxsZXQiLCJ3YWxsZXQiLCJwYXRoIiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImNvbmZpZyIsIm51YlBhdGgiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwibnViVHlwZSIsInZhbHVlIiwiYmFzZVJlcSIsImZyb20iLCJmZWVzIiwiYW1vdW50IiwiU3RyaW5nIiwiZGVub20iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJSZXF1ZXN0IiwiZXJyb3IiLCJyZXNwb25zZSIsInJlc3VsdCIsInBhcnNlIiwiYnJvYWRjYXN0VHgiLCJGRUUiLCJHQVNQUklDRSIsIkFzc2V0TWFudGxlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R4L2lkZW50aXR5L251Yi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xuaW1wb3J0IHsgYnJvYWRjYXN0VHggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Jyb2FkY2FzdFR4XCI7XG5pbXBvcnQgeyBnZXRXYWxsZXQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2tleXNcIjtcbmltcG9ydCB7IEFzc2V0TWFudGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYW50bGVKU1wiO1xuXG5leHBvcnQgY2xhc3MgbnViSWRlbnRpdHkgZXh0ZW5kcyBBc3NldE1hbnRsZSB7XG4gIG51YiA9IGFzeW5jIChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY2hhaW5faWQ6IHN0cmluZyxcbiAgICBtbmVtb25pYzogYW55LFxuICAgIG51YklEOiBhbnksXG4gICAgZmVlc0Ftb3VudDogYW55LFxuICAgIGZlZXNUb2tlbjogYW55LFxuICAgIGdhczogYW55LFxuICAgIG1vZGU6IGFueSxcbiAgICBtZW1vOiBzdHJpbmcsXG4gICk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgZ2V0V2FsbGV0KG1uZW1vbmljLCBcIlwiKTtcbiAgICBsZXQgcGF0aCA9IHRoaXMucGF0aDtcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogcGF0aCArIGNvbmZpZy5udWJQYXRoLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHR5cGU6IGNvbmZpZy5udWJUeXBlLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGJhc2VSZXE6IHtcbiAgICAgICAgICAgIGZyb206IGFkZHJlc3MsXG4gICAgICAgICAgICBjaGFpbl9pZDogY2hhaW5faWQsXG4gICAgICAgICAgICBtZW1vOiBtZW1vLFxuICAgICAgICAgICAgZmVlczogW3sgYW1vdW50OiBTdHJpbmcoZmVlc0Ftb3VudCksIGRlbm9tOiBmZWVzVG9rZW4gfV0sXG4gICAgICAgICAgICBnYXM6IFN0cmluZyhnYXMpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnViSUQ6IG51YklELFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwicG9zdCBtZXRob2Qgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIFJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKGVycm9yOiBhbnksIHJlc3BvbnNlOiB7IGJvZHk6IHN0cmluZyB9KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QgcmVzdWx0OiBcIiwgcmVzdWx0KTtcblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIGJyb2FkY2FzdFR4KHBhdGgsIHdhbGxldCwgbW5lbW9uaWMsIHJlc3VsdC52YWx1ZSwgY2hhaW5faWQsIGNvbmZpZy5GRUUsIGNvbmZpZy5HQVNQUklDRSwgbW9kZSksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZDogXCIgKyBlcnJvcik7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSk7XG4gIH07XG5cbiAgY3JlYXRlSWRlbnRpdHlOdWJNc2cgPSBhc3luYyAoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGNoYWluX2lkOiBzdHJpbmcsXG4gICAgbnViSUQ6IGFueSxcbiAgICBmZWVzQW1vdW50OiBhbnksXG4gICAgZmVlc1Rva2VuOiBhbnksXG4gICAgZ2FzOiBhbnksXG4gICAgbWVtbzogc3RyaW5nLFxuICApOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIGxldCBwYXRoID0gdGhpcy5wYXRoO1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBwYXRoICsgY29uZmlnLm51YlBhdGgsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogY29uZmlnLm51YlR5cGUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgYmFzZVJlcToge1xuICAgICAgICAgICAgZnJvbTogYWRkcmVzcyxcbiAgICAgICAgICAgIGNoYWluX2lkOiBjaGFpbl9pZCxcbiAgICAgICAgICAgIG1lbW86IG1lbW8sXG4gICAgICAgICAgICBmZWVzOiBbeyBhbW91bnQ6IFN0cmluZyhmZWVzQW1vdW50KSwgZGVub206IGZlZXNUb2tlbiB9XSxcbiAgICAgICAgICAgIGdhczogU3RyaW5nKGdhcyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWJJRDogbnViSUQsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIFJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKGVycm9yOiBhbnksIHJlc3BvbnNlOiB7IGJvZHk6IHN0cmluZyB9KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xuXG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkOiBcIiArIGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9KTtcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUF1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUh2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2FBLFdBQVc7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0lB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