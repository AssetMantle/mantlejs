"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccount = exports.checkRawLog = exports.FindInResponse = void 0;
var config = _interopRequireWildcard(require("../config.json"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _es6Promise = require("es6-promise");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var checkRawLog = function checkRawLog(log) {
  return new _es6Promise.Promise(function (resolve) {
    var rawData = JSON.stringify(log);
    if (rawData.indexOf("failed") !== -1 || rawData.indexOf("error") !== -1 || rawData.indexOf("panic") !== -1) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
};
exports.checkRawLog = checkRawLog;
var getAccount = function getAccount(address, path) {
  return (0, _nodeFetch["default"])(path + config.getAccount + address).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(JSON.stringify(err));
  });
};
exports.getAccount = getAccount;
var FindInResponse = function FindInResponse(type, list, id) {
  var data = {
    classificationID: "",
    hashID: "",
    chainID: ""
  };
  var ordersData = {
    classificationID: "",
    makerOwnableID: "",
    takerOwnableID: "",
    makerID: "",
    hashID: ""
  };
  return new _es6Promise.Promise(function (resolve, reject) {
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
          if (value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString === id) {
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
exports.FindInResponse = FindInResponse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjaGVja1Jhd0xvZyIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmF3RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbmRleE9mIiwiZ2V0QWNjb3VudCIsImFkZHJlc3MiLCJwYXRoIiwiZmV0Y2giLCJjb25maWciLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsIkZpbmRJblJlc3BvbnNlIiwidHlwZSIsImxpc3QiLCJpZCIsImRhdGEiLCJjbGFzc2lmaWNhdGlvbklEIiwiaGFzaElEIiwiY2hhaW5JRCIsIm9yZGVyc0RhdGEiLCJtYWtlck93bmFibGVJRCIsInRha2VyT3duYWJsZUlEIiwibWFrZXJJRCIsInJlamVjdCIsImZvckVhY2giLCJ2YWx1ZSIsImltbXV0YWJsZXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlMaXN0IiwiaWRTdHJpbmciLCJpbW11dGFibGVUcmFpdHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaGVscGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJlczYtcHJvbWlzZVwiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tSYXdMb2cgPSAobG9nOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgbGV0IHJhd0RhdGEgPSBKU09OLnN0cmluZ2lmeShsb2cpO1xuICAgIGlmIChcbiAgICAgIHJhd0RhdGEuaW5kZXhPZihcImZhaWxlZFwiKSAhPT0gLTEgfHxcbiAgICAgIHJhd0RhdGEuaW5kZXhPZihcImVycm9yXCIpICE9PSAtMSB8fFxuICAgICAgcmF3RGF0YS5pbmRleE9mKFwicGFuaWNcIikgIT09IC0xXG4gICAgKSB7XG4gICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY291bnQgPSAoYWRkcmVzczogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xuICByZXR1cm4gZmV0Y2gocGF0aCArIGNvbmZpZy5nZXRBY2NvdW50ICsgYWRkcmVzcylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZpbmRJblJlc3BvbnNlID0gKHR5cGU6IHN0cmluZywgbGlzdDogW10sIGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xuICBsZXQgZGF0YSA9IHtcbiAgICBjbGFzc2lmaWNhdGlvbklEOiBcIlwiLFxuICAgIGhhc2hJRDogXCJcIixcbiAgICBjaGFpbklEOiBcIlwiLFxuICB9O1xuXG4gIGxldCBvcmRlcnNEYXRhID0ge1xuICAgIGNsYXNzaWZpY2F0aW9uSUQ6IFwiXCIsXG4gICAgbWFrZXJPd25hYmxlSUQ6IFwiXCIsXG4gICAgdGFrZXJPd25hYmxlSUQ6IFwiXCIsXG4gICAgbWFrZXJJRDogXCJcIixcbiAgICBoYXNoSUQ6IFwiXCIsXG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJhc3NldHNcIjpcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XG4gICAgICAgICAgaWYgKHZhbHVlLnZhbHVlLmltbXV0YWJsZXMudmFsdWUucHJvcGVydGllcy52YWx1ZS5wcm9wZXJ0eUxpc3RbMF0udmFsdWUuaWQudmFsdWUuaWRTdHJpbmcgPT09IGlkKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzaWZpY2F0aW9uSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5jbGFzc2lmaWNhdGlvbklELnZhbHVlLmlkU3RyaW5nO1xuICAgICAgICAgICAgZGF0YS5oYXNoSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5oYXNoSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlkZW50aXRpZXNcIjpcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XG4gICAgICAgICAgaWYgKHZhbHVlLnZhbHVlLmltbXV0YWJsZXMudmFsdWUucHJvcGVydGllcy52YWx1ZS5wcm9wZXJ0eUxpc3RbMF0udmFsdWUuaWQudmFsdWUuaWRTdHJpbmcgPT09IGlkKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzaWZpY2F0aW9uSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5jbGFzc2lmaWNhdGlvbklELnZhbHVlLmlkU3RyaW5nO1xuICAgICAgICAgICAgZGF0YS5oYXNoSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5oYXNoSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNsYXNzaWZpY2F0aW9uc1wiOlxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZS52YWx1ZS5pbW11dGFibGVUcmFpdHMudmFsdWUucHJvcGVydGllcy52YWx1ZS5wcm9wZXJ0eUxpc3RbMF0udmFsdWUuaWQudmFsdWUuaWRTdHJpbmcgPT09IGlkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNoYWluSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5jaGFpbklELnZhbHVlLmlkU3RyaW5nO1xuICAgICAgICAgICAgZGF0YS5oYXNoSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5oYXNoSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm9yZGVyc1wiOlxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgICBpZiAodmFsdWUudmFsdWUuaW1tdXRhYmxlcy52YWx1ZS5wcm9wZXJ0aWVzLnZhbHVlLnByb3BlcnR5TGlzdFswXS52YWx1ZS5pZC52YWx1ZS5pZFN0cmluZyA9PT0gaWQpIHtcbiAgICAgICAgICAgIG9yZGVyc0RhdGEuY2xhc3NpZmljYXRpb25JRCA9IHZhbHVlLnZhbHVlLmlkLnZhbHVlLmNsYXNzaWZpY2F0aW9uSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICBvcmRlcnNEYXRhLm1ha2VyT3duYWJsZUlEID0gdmFsdWUudmFsdWUuaWQudmFsdWUubWFrZXJPd25hYmxlSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICBvcmRlcnNEYXRhLnRha2VyT3duYWJsZUlEID0gdmFsdWUudmFsdWUuaWQudmFsdWUudGFrZXJPd25hYmxlSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICBvcmRlcnNEYXRhLm1ha2VySUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5tYWtlcklELnZhbHVlLmlkU3RyaW5nO1xuICAgICAgICAgICAgb3JkZXJzRGF0YS5oYXNoSUQgPSB2YWx1ZS52YWx1ZS5pZC52YWx1ZS5oYXNoSUQudmFsdWUuaWRTdHJpbmc7XG4gICAgICAgICAgICByZXNvbHZlKG9yZGVyc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuIl0s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