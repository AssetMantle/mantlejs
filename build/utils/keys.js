"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWalletPath = exports.getWallet = exports.decryptStore = exports.createWallet = exports.createStore = exports.createRandomWallet = void 0;
var tmSig = _interopRequireWildcard(require("@tendermint/sig"));
var bip32 = _interopRequireWildcard(require("bip32"));
var bip39 = _interopRequireWildcard(require("bip39"));
var crypto = _interopRequireWildcard(require("crypto"));
var config = _interopRequireWildcard(require("../config.json"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var passwordHashAlgorithm = "sha512";
var getWallet = function getWallet(mnemonic, bip39Passphrase) {
  return new Promise(function (resolve) {
    var seed = bip39.mnemonicToSeedSync(mnemonic, bip39Passphrase);
    var masterKey = bip32.fromSeed(seed);
    var walletPath = getWalletPath();
    resolve(tmSig.createWalletFromMasterKey(masterKey, config.prefix, walletPath));
  });
};
exports.getWallet = getWallet;
var createRandomWallet = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bip39Passphrase) {
    var mnemonic, walletInfo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bip39.generateMnemonic(256);
          case 2:
            mnemonic = _context.sent;
            _context.next = 5;
            return getWallet(mnemonic, bip39Passphrase);
          case 5:
            walletInfo = _context.sent;
            return _context.abrupt("return", {
              address: walletInfo.address,
              mnemonic: mnemonic
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createRandomWallet(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createRandomWallet = createRandomWallet;
var createWallet = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(mnemonic, bip39Passphrase) {
    var validateMnemonic, walletInfo;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            validateMnemonic = bip39.validateMnemonic(mnemonic);
            if (!validateMnemonic) {
              _context2.next = 8;
              break;
            }
            _context2.next = 4;
            return getWallet(mnemonic, bip39Passphrase);
          case 4:
            walletInfo = _context2.sent;
            return _context2.abrupt("return", {
              address: walletInfo.address,
              mnemonic: mnemonic
            });
          case 8:
            return _context2.abrupt("return", {
              address: "Invalid mnemonic.",
              mnemonic: "Invalid mnemonic."
            });
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createWallet(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createWallet = createWallet;
var getWalletPath = function getWalletPath() {
  return "m/44'/118'/0'/0/0";
};
exports.getWalletPath = getWalletPath;
var createStore = function createStore(mnemonic, password) {
  try {
    var key = crypto.randomBytes(32);
    var iv = crypto.randomBytes(16);
    var cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    var encrypted = cipher.update(mnemonic);
    encrypted = Buffer.concat([encrypted, cipher["final"]()]);
    var obj = {
      hashpwd: crypto.createHash(passwordHashAlgorithm).update(password).digest("hex"),
      iv: iv.toString("hex"),
      salt: key.toString("hex"),
      crypted: encrypted.toString("hex")
    };
    return {
      Response: obj,
      error: null
    };
  } catch (exception) {
    return {
      Response: false,
      error: exception.message
    };
  }
};
exports.createStore = createStore;
var decryptStore = function decryptStore(fileData, password) {
  var hashpwd = fileData.hashpwd;
  var iv = fileData.iv;
  var salt = fileData.salt;
  var crypted = fileData.crypted;
  if (hashpwd === crypto.createHash(passwordHashAlgorithm).update(password).digest("hex")) {
    var ivText = Buffer.from(iv, "hex");
    var encryptedText = Buffer.from(crypted, "hex");
    var decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(salt, "hex"), ivText);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher["final"]()]);
    return {
      mnemonic: decrypted.toString()
    };
  } else {
    return {
      mnemonic: "Incorrect password."
    };
  }
};
exports.decryptStore = decryptStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwYXNzd29yZEhhc2hBbGdvcml0aG0iLCJnZXRXYWxsZXQiLCJtbmVtb25pYyIsImJpcDM5UGFzc3BocmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2VlZCIsImJpcDM5IiwibW5lbW9uaWNUb1NlZWRTeW5jIiwibWFzdGVyS2V5IiwiYmlwMzIiLCJmcm9tU2VlZCIsIndhbGxldFBhdGgiLCJnZXRXYWxsZXRQYXRoIiwidG1TaWciLCJjcmVhdGVXYWxsZXRGcm9tTWFzdGVyS2V5IiwiY29uZmlnIiwicHJlZml4IiwiY3JlYXRlUmFuZG9tV2FsbGV0IiwiZ2VuZXJhdGVNbmVtb25pYyIsIndhbGxldEluZm8iLCJhZGRyZXNzIiwiY3JlYXRlV2FsbGV0IiwidmFsaWRhdGVNbmVtb25pYyIsImNyZWF0ZVN0b3JlIiwicGFzc3dvcmQiLCJrZXkiLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsIml2IiwiY2lwaGVyIiwiY3JlYXRlQ2lwaGVyaXYiLCJCdWZmZXIiLCJmcm9tIiwiZW5jcnlwdGVkIiwidXBkYXRlIiwiY29uY2F0Iiwib2JqIiwiaGFzaHB3ZCIsImNyZWF0ZUhhc2giLCJkaWdlc3QiLCJ0b1N0cmluZyIsInNhbHQiLCJjcnlwdGVkIiwiUmVzcG9uc2UiLCJlcnJvciIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJkZWNyeXB0U3RvcmUiLCJmaWxlRGF0YSIsIml2VGV4dCIsImVuY3J5cHRlZFRleHQiLCJkZWNpcGhlciIsImNyZWF0ZURlY2lwaGVyaXYiLCJkZWNyeXB0ZWQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMva2V5cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0bVNpZyBmcm9tIFwiQHRlbmRlcm1pbnQvc2lnXCI7XG5pbXBvcnQgKiBhcyBiaXAzMiBmcm9tIFwiYmlwMzJcIjtcbmltcG9ydCAqIGFzIGJpcDM5IGZyb20gXCJiaXAzOVwiO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuY29uc3QgcGFzc3dvcmRIYXNoQWxnb3JpdGhtID0gXCJzaGE1MTJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFdhbGxldCA9IChcbiAgbW5lbW9uaWM6IHN0cmluZyxcbiAgYmlwMzlQYXNzcGhyYXNlOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGNvbnN0IHNlZWQgPSBiaXAzOS5tbmVtb25pY1RvU2VlZFN5bmMobW5lbW9uaWMsIGJpcDM5UGFzc3BocmFzZSk7XG4gICAgY29uc3QgbWFzdGVyS2V5ID0gYmlwMzIuZnJvbVNlZWQoc2VlZCk7XG4gICAgY29uc3Qgd2FsbGV0UGF0aCA9IGdldFdhbGxldFBhdGgoKTtcbiAgICByZXNvbHZlKFxuICAgICAgdG1TaWcuY3JlYXRlV2FsbGV0RnJvbU1hc3RlcktleShtYXN0ZXJLZXksIGNvbmZpZy5wcmVmaXgsIHdhbGxldFBhdGgpXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmFuZG9tV2FsbGV0ID0gYXN5bmMgKFxuICBiaXAzOVBhc3NwaHJhc2U6IHN0cmluZ1xuKTogUHJvbWlzZTx7IGFkZHJlc3M6IHN0cmluZzsgbW5lbW9uaWM6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IG1uZW1vbmljID0gYXdhaXQgYmlwMzkuZ2VuZXJhdGVNbmVtb25pYygyNTYpO1xuICBjb25zdCB3YWxsZXRJbmZvID0gYXdhaXQgZ2V0V2FsbGV0KG1uZW1vbmljLCBiaXAzOVBhc3NwaHJhc2UpO1xuXG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogd2FsbGV0SW5mby5hZGRyZXNzLFxuICAgIG1uZW1vbmljOiBtbmVtb25pYyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVXYWxsZXQgPSBhc3luYyAoXG4gIG1uZW1vbmljOiBzdHJpbmcsXG4gIGJpcDM5UGFzc3BocmFzZTogc3RyaW5nXG4pOiBQcm9taXNlPHsgYWRkcmVzczogc3RyaW5nOyBtbmVtb25pYzogc3RyaW5nIH0+ID0+IHtcbiAgbGV0IHZhbGlkYXRlTW5lbW9uaWMgPSBiaXAzOS52YWxpZGF0ZU1uZW1vbmljKG1uZW1vbmljKTtcbiAgaWYgKHZhbGlkYXRlTW5lbW9uaWMpIHtcbiAgICBjb25zdCB3YWxsZXRJbmZvID0gYXdhaXQgZ2V0V2FsbGV0KG1uZW1vbmljLCBiaXAzOVBhc3NwaHJhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiB3YWxsZXRJbmZvLmFkZHJlc3MsXG4gICAgICBtbmVtb25pYzogbW5lbW9uaWMsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczogXCJJbnZhbGlkIG1uZW1vbmljLlwiLFxuICAgICAgbW5lbW9uaWM6IFwiSW52YWxpZCBtbmVtb25pYy5cIixcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2FsbGV0UGF0aCA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gXCJtLzQ0Jy8xMTgnLzAnLzAvMFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gKFxuICBtbmVtb25pYzogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nXG4pOiB7IFJlc3BvbnNlOiBhbnk7IGVycm9yOiBhbnkgfSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qga2V5ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKTtcbiAgICBjb25zdCBpdiA9IGNyeXB0by5yYW5kb21CeXRlcygxNik7XG4gICAgbGV0IGNpcGhlciA9IGNyeXB0by5jcmVhdGVDaXBoZXJpdihcImFlcy0yNTYtY2JjXCIsIEJ1ZmZlci5mcm9tKGtleSksIGl2KTtcbiAgICBsZXQgZW5jcnlwdGVkID0gY2lwaGVyLnVwZGF0ZShtbmVtb25pYyk7XG4gICAgZW5jcnlwdGVkID0gQnVmZmVyLmNvbmNhdChbZW5jcnlwdGVkLCBjaXBoZXIuZmluYWwoKV0pO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGhhc2hwd2Q6IGNyeXB0b1xuICAgICAgICAuY3JlYXRlSGFzaChwYXNzd29yZEhhc2hBbGdvcml0aG0pXG4gICAgICAgIC51cGRhdGUocGFzc3dvcmQpXG4gICAgICAgIC5kaWdlc3QoXCJoZXhcIiksXG4gICAgICBpdjogaXYudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICBzYWx0OiBrZXkudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICBjcnlwdGVkOiBlbmNyeXB0ZWQudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgUmVzcG9uc2U6IG9iaixcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICBSZXNwb25zZTogZmFsc2UsXG4gICAgICBlcnJvcjogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlY3J5cHRTdG9yZSA9IChcbiAgZmlsZURhdGE6IGFueSxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKTogeyBtbmVtb25pYzogYW55IH0gPT4ge1xuICBsZXQgaGFzaHB3ZCA9IGZpbGVEYXRhLmhhc2hwd2Q7XG4gIGxldCBpdiA9IGZpbGVEYXRhLml2O1xuICBsZXQgc2FsdCA9IGZpbGVEYXRhLnNhbHQ7XG4gIGxldCBjcnlwdGVkID0gZmlsZURhdGEuY3J5cHRlZDtcblxuICBpZiAoXG4gICAgaGFzaHB3ZCA9PT1cbiAgICBjcnlwdG8uY3JlYXRlSGFzaChwYXNzd29yZEhhc2hBbGdvcml0aG0pLnVwZGF0ZShwYXNzd29yZCkuZGlnZXN0KFwiaGV4XCIpXG4gICkge1xuICAgIGxldCBpdlRleHQgPSBCdWZmZXIuZnJvbShpdiwgXCJoZXhcIik7XG4gICAgbGV0IGVuY3J5cHRlZFRleHQgPSBCdWZmZXIuZnJvbShjcnlwdGVkLCBcImhleFwiKTtcblxuICAgIGxldCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KFxuICAgICAgXCJhZXMtMjU2LWNiY1wiLFxuICAgICAgQnVmZmVyLmZyb20oc2FsdCwgXCJoZXhcIiksXG4gICAgICBpdlRleHRcbiAgICApO1xuICAgIGxldCBkZWNyeXB0ZWQgPSBkZWNpcGhlci51cGRhdGUoZW5jcnlwdGVkVGV4dCk7XG4gICAgZGVjcnlwdGVkID0gQnVmZmVyLmNvbmNhdChbZGVjcnlwdGVkLCBkZWNpcGhlci5maW5hbCgpXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1uZW1vbmljOiBkZWNyeXB0ZWQudG9TdHJpbmcoKSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBtbmVtb25pYzogXCJJbmNvcnJlY3QgcGFzc3dvcmQuXCIsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBeUM7QUFBQTtBQUFBLCtDQUh6QztBQUFBO0FBQUE7QUFLQSxJQUFNQSxxQkFBcUIsR0FBRyxRQUFRO0FBRS9CLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQ3BCQyxRQUFnQixFQUNoQkMsZUFBdUIsRUFDTjtFQUNqQixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFVQyxPQUFPLEVBQUU7SUFDcEMsSUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLGtCQUFrQixDQUFDTixRQUFRLEVBQUVDLGVBQWUsQ0FBQztJQUNoRSxJQUFNTSxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTCxJQUFJLENBQUM7SUFDdEMsSUFBTU0sVUFBVSxHQUFHQyxhQUFhLEVBQUU7SUFDbENSLE9BQU8sQ0FDTFMsS0FBSyxDQUFDQyx5QkFBeUIsQ0FBQ04sU0FBUyxFQUFFTyxNQUFNLENBQUNDLE1BQU0sRUFBRUwsVUFBVSxDQUFDLENBQ3RFO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDO0FBRUssSUFBTU0sa0JBQWtCO0VBQUEsc0VBQUcsaUJBQ2hDZixlQUF1QjtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BRUFJLEtBQUssQ0FBQ1ksZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1VBQUE7WUFBNUNqQixRQUFRO1lBQUE7WUFBQSxPQUNXRCxTQUFTLENBQUNDLFFBQVEsRUFBRUMsZUFBZSxDQUFDO1VBQUE7WUFBdkRpQixVQUFVO1lBQUEsaUNBRVQ7Y0FDTEMsT0FBTyxFQUFFRCxVQUFVLENBQUNDLE9BQU87Y0FDM0JuQixRQUFRLEVBQUVBO1lBQ1osQ0FBQztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQ0Y7RUFBQSxnQkFWWWdCLGtCQUFrQjtJQUFBO0VBQUE7QUFBQSxHQVU5QjtBQUFDO0FBRUssSUFBTUksWUFBWTtFQUFBLHVFQUFHLGtCQUMxQnBCLFFBQWdCLEVBQ2hCQyxlQUF1QjtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFFbkJvQixnQkFBZ0IsR0FBR2hCLEtBQUssQ0FBQ2dCLGdCQUFnQixDQUFDckIsUUFBUSxDQUFDO1lBQUEsS0FDbkRxQixnQkFBZ0I7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBLE9BQ090QixTQUFTLENBQUNDLFFBQVEsRUFBRUMsZUFBZSxDQUFDO1VBQUE7WUFBdkRpQixVQUFVO1lBQUEsa0NBQ1Q7Y0FDTEMsT0FBTyxFQUFFRCxVQUFVLENBQUNDLE9BQU87Y0FDM0JuQixRQUFRLEVBQUVBO1lBQ1osQ0FBQztVQUFBO1lBQUEsa0NBRU07Y0FDTG1CLE9BQU8sRUFBRSxtQkFBbUI7Y0FDNUJuQixRQUFRLEVBQUU7WUFDWixDQUFDO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFSjtFQUFBLGdCQWpCWW9CLFlBQVk7SUFBQTtFQUFBO0FBQUEsR0FpQnhCO0FBQUM7QUFFSyxJQUFNVCxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsR0FBaUI7RUFDekMsT0FBTyxtQkFBbUI7QUFDNUIsQ0FBQztBQUFDO0FBRUssSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FDdEJ0QixRQUFnQixFQUNoQnVCLFFBQWdCLEVBQ2tCO0VBQ2xDLElBQUk7SUFDRixJQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUNsQyxJQUFNQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUNqQyxJQUFJRSxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksY0FBYyxDQUFDLGFBQWEsRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLENBQUM7SUFDdkUsSUFBSUssU0FBUyxHQUFHSixNQUFNLENBQUNLLE1BQU0sQ0FBQ2pDLFFBQVEsQ0FBQztJQUN2Q2dDLFNBQVMsR0FBR0YsTUFBTSxDQUFDSSxNQUFNLENBQUMsQ0FBQ0YsU0FBUyxFQUFFSixNQUFNLFNBQU0sRUFBRSxDQUFDLENBQUM7SUFFdEQsSUFBSU8sR0FBRyxHQUFHO01BQ1JDLE9BQU8sRUFBRVgsTUFBTSxDQUNaWSxVQUFVLENBQUN2QyxxQkFBcUIsQ0FBQyxDQUNqQ21DLE1BQU0sQ0FBQ1YsUUFBUSxDQUFDLENBQ2hCZSxNQUFNLENBQUMsS0FBSyxDQUFDO01BQ2hCWCxFQUFFLEVBQUVBLEVBQUUsQ0FBQ1ksUUFBUSxDQUFDLEtBQUssQ0FBQztNQUN0QkMsSUFBSSxFQUFFaEIsR0FBRyxDQUFDZSxRQUFRLENBQUMsS0FBSyxDQUFDO01BQ3pCRSxPQUFPLEVBQUVULFNBQVMsQ0FBQ08sUUFBUSxDQUFDLEtBQUs7SUFDbkMsQ0FBQztJQUNELE9BQU87TUFDTEcsUUFBUSxFQUFFUCxHQUFHO01BQ2JRLEtBQUssRUFBRTtJQUNULENBQUM7RUFDSCxDQUFDLENBQUMsT0FBT0MsU0FBUyxFQUFFO0lBQ2xCLE9BQU87TUFDTEYsUUFBUSxFQUFFLEtBQUs7TUFDZkMsS0FBSyxFQUFFQyxTQUFTLENBQUNDO0lBQ25CLENBQUM7RUFDSDtBQUNGLENBQUM7QUFBQztBQUVLLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQ3ZCQyxRQUFhLEVBQ2J4QixRQUFnQixFQUNNO0VBQ3RCLElBQUlhLE9BQU8sR0FBR1csUUFBUSxDQUFDWCxPQUFPO0VBQzlCLElBQUlULEVBQUUsR0FBR29CLFFBQVEsQ0FBQ3BCLEVBQUU7RUFDcEIsSUFBSWEsSUFBSSxHQUFHTyxRQUFRLENBQUNQLElBQUk7RUFDeEIsSUFBSUMsT0FBTyxHQUFHTSxRQUFRLENBQUNOLE9BQU87RUFFOUIsSUFDRUwsT0FBTyxLQUNQWCxNQUFNLENBQUNZLFVBQVUsQ0FBQ3ZDLHFCQUFxQixDQUFDLENBQUNtQyxNQUFNLENBQUNWLFFBQVEsQ0FBQyxDQUFDZSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQ3ZFO0lBQ0EsSUFBSVUsTUFBTSxHQUFHbEIsTUFBTSxDQUFDQyxJQUFJLENBQUNKLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFDbkMsSUFBSXNCLGFBQWEsR0FBR25CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBRS9DLElBQUlTLFFBQVEsR0FBR3pCLE1BQU0sQ0FBQzBCLGdCQUFnQixDQUNwQyxhQUFhLEVBQ2JyQixNQUFNLENBQUNDLElBQUksQ0FBQ1MsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUN4QlEsTUFBTSxDQUNQO0lBQ0QsSUFBSUksU0FBUyxHQUFHRixRQUFRLENBQUNqQixNQUFNLENBQUNnQixhQUFhLENBQUM7SUFDOUNHLFNBQVMsR0FBR3RCLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDLENBQUNrQixTQUFTLEVBQUVGLFFBQVEsU0FBTSxFQUFFLENBQUMsQ0FBQztJQUN4RCxPQUFPO01BQ0xsRCxRQUFRLEVBQUVvRCxTQUFTLENBQUNiLFFBQVE7SUFDOUIsQ0FBQztFQUNILENBQUMsTUFBTTtJQUNMLE9BQU87TUFDTHZDLFFBQVEsRUFBRTtJQUNaLENBQUM7RUFDSDtBQUNGLENBQUM7QUFBQyJ9