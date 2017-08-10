'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.styles = undefined;

var _styles2 = require('./js/styles');

var _styles3 = _interopRequireDefault(_styles2);

var _utils2 = require('./js/utils');

var _utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.styles = _styles3.default;
exports.utils = _utils;