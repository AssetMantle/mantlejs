"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.broadcastTx = void 0;
exports.getAccount = getAccount;
exports.sendPostRequest = exports.sendGetRequest = void 0;
var _protoSigning = require("@cosmjs/proto-signing");
var _sig = require("@tendermint/sig");
var config = _interopRequireWildcard(require("../config.json"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var broadcastTx = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var path,
      wallet,
      mnemonic,
      tx,
      chainID,
      gas,
      gasPrice,
      mode,
      signer,
      accounts,
      addressLocal,
      accountResult,
      accountNum,
      seq,
      signMeta,
      stdTx,
      signedTemplated,
      response,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _args.length > 0 && _args[0] !== undefined ? _args[0] : config.TENDERMINT_REST_URL;
            wallet = _args.length > 1 ? _args[1] : undefined;
            mnemonic = _args.length > 2 ? _args[2] : undefined;
            tx = _args.length > 3 ? _args[3] : undefined;
            chainID = _args.length > 4 && _args[4] !== undefined ? _args[4] : config.chain_id;
            gas = _args.length > 5 ? _args[5] : undefined;
            gasPrice = _args.length > 6 ? _args[6] : undefined;
            mode = _args.length > 7 ? _args[7] : undefined;
            _context.prev = 8;
            _context.next = 11;
            return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
              prefix: config.prefix
            });
          case 11:
            signer = _context.sent;
            _context.next = 14;
            return signer.getAccounts();
          case 14:
            accounts = _context.sent;
            addressLocal = accounts[0].address;
            console.log("Sending Address: ", addressLocal);

            // get the account number and sequence from REST API
            _context.next = 19;
            return getAccount(addressLocal, path);
          case 19:
            accountResult = _context.sent;
            accountNum = accountResult.account.result.value.account_number;
            if (accountNum === undefined) {
              accountNum = String(0);
            }
            seq = accountResult.account.result.value.sequence;
            if (seq === undefined) {
              seq = String(0);
            }

            // get the signMeta object
            signMeta = {
              account_number: accountNum,
              chain_id: chainID,
              sequence: seq
            }; // get the signed message using raw tx, signMeta and wallet/signer
            stdTx = (0, _sig.signTx)(tx, signMeta, wallet);
            console.log("signed tx msg payload: ", stdTx);
            signedTemplated = {
              tx: stdTx,
              mode: mode
            }; //initiate sign and broadcast from the stargate client
            _context.next = 30;
            return sendPostRequest(path.concat(config.broadcastTx), signedTemplated);
          case 30:
            response = _context.sent;
            return _context.abrupt("return", response);
          case 34:
            _context.prev = 34;
            _context.t0 = _context["catch"](8);
            console.error("Error during txn broadcast: ", _context.t0);
            return _context.abrupt("return", _context.t0);
          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 34]]);
  }));
  return function broadcastTx() {
    return _ref.apply(this, arguments);
  };
}();
exports.broadcastTx = broadcastTx;
function getAccount(_x, _x2) {
  return _getAccount.apply(this, arguments);
}
function _getAccount() {
  _getAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(address, path) {
    var result, response, json;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = {
              success: false,
              account: {}
            };
            _context4.prev = 1;
            _context4.next = 4;
            return fetch(path + config.getAccount + address);
          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();
          case 7:
            json = _context4.sent;
            result.success = true;
            result.account = json;
            return _context4.abrupt("return", result);
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", result);
          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));
  return _getAccount.apply(this, arguments);
}
var sendPostRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, payload) {
    var rawResponse, content;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payload)
            });
          case 2:
            rawResponse = _context2.sent;
            _context2.next = 5;
            return rawResponse.json();
          case 5:
            content = _context2.sent;
            return _context2.abrupt("return", content);
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function sendPostRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.sendPostRequest = sendPostRequest;
var sendGetRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
    var rawResponse, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(url);
          case 2:
            rawResponse = _context3.sent;
            _context3.next = 5;
            return rawResponse.json();
          case 5:
            response = _context3.sent;
            return _context3.abrupt("return", response);
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function sendGetRequest(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
exports.sendGetRequest = sendGetRequest;
var _default = broadcastTx;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJicm9hZGNhc3RUeCIsInBhdGgiLCJjb25maWciLCJURU5ERVJNSU5UX1JFU1RfVVJMIiwid2FsbGV0IiwibW5lbW9uaWMiLCJ0eCIsImNoYWluSUQiLCJjaGFpbl9pZCIsImdhcyIsImdhc1ByaWNlIiwibW9kZSIsIkRpcmVjdFNlY3AyNTZrMUhkV2FsbGV0IiwiZnJvbU1uZW1vbmljIiwicHJlZml4Iiwic2lnbmVyIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFkZHJlc3NMb2NhbCIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWNjb3VudCIsImFjY291bnRSZXN1bHQiLCJhY2NvdW50TnVtIiwiYWNjb3VudCIsInJlc3VsdCIsInZhbHVlIiwiYWNjb3VudF9udW1iZXIiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJzZXEiLCJzZXF1ZW5jZSIsInNpZ25NZXRhIiwic3RkVHgiLCJzaWduVHgiLCJzaWduZWRUZW1wbGF0ZWQiLCJzZW5kUG9zdFJlcXVlc3QiLCJjb25jYXQiLCJyZXNwb25zZSIsImVycm9yIiwic3VjY2VzcyIsImZldGNoIiwianNvbiIsInVybCIsInBheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXdSZXNwb25zZSIsImNvbnRlbnQiLCJzZW5kR2V0UmVxdWVzdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9icm9hZGNhc3RUeC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RTZWNwMjU2azFIZFdhbGxldCB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCB7IHNpZ25UeCB9IGZyb20gXCJAdGVuZGVybWludC9zaWdcIjtcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IGJyb2FkY2FzdFR4ID0gYXN5bmMgKFxuICBwYXRoOiBhbnkgPSBjb25maWcuVEVOREVSTUlOVF9SRVNUX1VSTCxcbiAgd2FsbGV0OiBhbnksXG4gIG1uZW1vbmljOiBhbnksXG4gIHR4OiBhbnksXG4gIGNoYWluSUQ6IGFueSA9IGNvbmZpZy5jaGFpbl9pZCxcbiAgZ2FzOiBhbnksXG4gIGdhc1ByaWNlOiBhbnksXG4gIG1vZGU6IGFueVxuKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBjcmVhdGUgYSBzaWduZXIgb2JqZWN0XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgRGlyZWN0U2VjcDI1NmsxSGRXYWxsZXQuZnJvbU1uZW1vbmljKG1uZW1vbmljLCB7XG4gICAgICBwcmVmaXg6IGNvbmZpZy5wcmVmaXgsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBzaWduZXIuZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCBhZGRyZXNzTG9jYWwgPSBhY2NvdW50c1swXS5hZGRyZXNzO1xuXG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIEFkZHJlc3M6IFwiLCBhZGRyZXNzTG9jYWwpO1xuXG4gICAgLy8gZ2V0IHRoZSBhY2NvdW50IG51bWJlciBhbmQgc2VxdWVuY2UgZnJvbSBSRVNUIEFQSVxuICAgIGxldCBhY2NvdW50UmVzdWx0ID0gYXdhaXQgZ2V0QWNjb3VudChhZGRyZXNzTG9jYWwsIHBhdGgpO1xuICAgIGxldCBhY2NvdW50TnVtID0gYWNjb3VudFJlc3VsdC5hY2NvdW50LnJlc3VsdC52YWx1ZS5hY2NvdW50X251bWJlcjtcbiAgICBpZiAoYWNjb3VudE51bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2NvdW50TnVtID0gU3RyaW5nKDApO1xuICAgIH1cbiAgICBsZXQgc2VxID0gYWNjb3VudFJlc3VsdC5hY2NvdW50LnJlc3VsdC52YWx1ZS5zZXF1ZW5jZTtcbiAgICBpZiAoc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlcSA9IFN0cmluZygwKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIHNpZ25NZXRhIG9iamVjdFxuICAgIGNvbnN0IHNpZ25NZXRhID0ge1xuICAgICAgYWNjb3VudF9udW1iZXI6IGFjY291bnROdW0sXG4gICAgICBjaGFpbl9pZDogY2hhaW5JRCxcbiAgICAgIHNlcXVlbmNlOiBzZXEsXG4gICAgfTtcblxuICAgIC8vIGdldCB0aGUgc2lnbmVkIG1lc3NhZ2UgdXNpbmcgcmF3IHR4LCBzaWduTWV0YSBhbmQgd2FsbGV0L3NpZ25lclxuICAgIGxldCBzdGRUeCA9IHNpZ25UeCh0eCwgc2lnbk1ldGEsIHdhbGxldCk7XG4gICAgY29uc29sZS5sb2coXCJzaWduZWQgdHggbXNnIHBheWxvYWQ6IFwiLCBzdGRUeCk7XG5cbiAgICBsZXQgc2lnbmVkVGVtcGxhdGVkID0ge1xuICAgICAgdHg6IHN0ZFR4LFxuICAgICAgbW9kZTogbW9kZSxcbiAgICB9O1xuXG4gICAgLy9pbml0aWF0ZSBzaWduIGFuZCBicm9hZGNhc3QgZnJvbSB0aGUgc3RhcmdhdGUgY2xpZW50XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZW5kUG9zdFJlcXVlc3QoXG4gICAgICBwYXRoLmNvbmNhdChjb25maWcuYnJvYWRjYXN0VHgpLFxuICAgICAgc2lnbmVkVGVtcGxhdGVkXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyB0eG4gYnJvYWRjYXN0OiBcIiwgZXJyb3IpO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoYWRkcmVzczogYW55LCBwYXRoOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICBsZXQgcmVzdWx0ID0geyBzdWNjZXNzOiBmYWxzZSwgYWNjb3VudDoge30gfTtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoICsgY29uZmlnLmdldEFjY291bnQgKyBhZGRyZXNzKTtcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQuc3VjY2VzcyA9IHRydWU7XG4gICAgcmVzdWx0LmFjY291bnQgPSBqc29uO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZW5kUG9zdFJlcXVlc3QgPSBhc3luYyAodXJsOiBhbnksIHBheWxvYWQ6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG4gIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KHVybCwgcGF5bG9hZCk7XG4gIC8vIHJldHVybiByZXNwLmRhdGE7XG5cbiAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICB9KTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEdldFJlcXVlc3QgPSBhc3luYyAodXJsOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBicm9hZGNhc3RUeDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQXlDO0FBQUE7QUFBQSwrQ0FEekM7QUFBQTtBQUFBO0FBR08s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