"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.FindInResponse = exports.getAccount = exports.checkRawLog = void 0;
var config = __importStar(require("../config.json"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var es6_promise_1 = require("es6-promise");
exports.checkRawLog = function (log) {
  return new es6_promise_1.Promise(function (resolve) {
    var rawData = JSON.stringify(log);
    if (
      rawData.indexOf("failed") !== -1 ||
      rawData.indexOf("error") !== -1 ||
      rawData.indexOf("panic") !== -1
    ) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
};
exports.getAccount = function (address, path) {
  return node_fetch_1["default"](path + config.getAccount + address)
    .then(function (response) {
      return response.json();
    })
    ["catch"](function (err) {
      return console.log(JSON.stringify(err));
    });
};
exports.FindInResponse = function (type, list, id) {
  var data = {
    classificationID: "",
    hashID: "",
    chainID: "",
  };
  var ordersData = {
    classificationID: "",
    makerOwnableID: "",
    takerOwnableID: "",
    makerID: "",
    hashID: "",
  };
  return new es6_promise_1.Promise(function (resolve, reject) {
    switch (type) {
      case "assets":
        list.forEach(function (value) {
          if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
            data.classificationID = value.value.id.value.classificationID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "identities":
        list.forEach(function (value) {
          if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
            data.classificationID = value.value.id.value.classificationID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "classifications":
        list.forEach(function (value) {
          if (
            value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString === id
          ) {
            data.chainID = value.value.id.value.chainID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "orders":
        list.forEach(function (value) {
          if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
            ordersData.classificationID = value.value.id.value.classificationID.value.idString;
            ordersData.makerOwnableID = value.value.id.value.makerOwnableID.value.idString;
            ordersData.takerOwnableID = value.value.id.value.takerOwnableID.value.idString;
            ordersData.makerID = value.value.id.value.makerID.value.idString;
            ordersData.hashID = value.value.id.value.hashID.value.idString;
            resolve(ordersData);
          }
        });
        break;
    }
  });
};
