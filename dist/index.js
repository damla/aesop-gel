"use strict";Object.defineProperty(exports,"__esModule",{value:// attributeNamespace
!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames")),_reactAccessibleAccordion=require("react-accessible-accordion"),_reactCollapse=require("react-collapse"),_crypto=_interopRequireDefault(require("crypto")),_googleMaps=_interopRequireDefault(require("google-maps")),_moment=_interopRequireDefault(require("moment")),_wavesurfer=_interopRequireDefault(require("wavesurfer.js")),_reactSlick=_interopRequireDefault(require("react-slick")),_reactTransitionGroup=require("react-transition-group"),_stream=_interopRequireDefault(require("stream")),_markerclusterer=_interopRequireDefault(require("@google/markerclusterer")),_reactDom=_interopRequireDefault(require("react-dom"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof2(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a["default"]=e,t&&t.set(e,a),a}function _typeof2(e){"@babel/helpers - typeof";return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2(e)}function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function asyncGeneratorStep(e,t,a,n,l,i,o){try{var r=e[i](o),s=r.value}catch(e){return void a(e)}r.done?t(s):Promise.resolve(s).then(n,l)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise(function(n,l){function i(e){asyncGeneratorStep(r,n,l,i,o,"next",e)}function o(e){asyncGeneratorStep(r,n,l,i,o,"throw",e)}var r=e.apply(t,a);i(void 0)})}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _extends(){return _extends=Object.assign||function(e){for(var t=1,a;t<arguments.length;t++)for(var n in a=arguments[t],a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},_extends.apply(this,arguments)}function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread2(e){for(var t=1,a;t<arguments.length;t++)a=null==arguments[t]?{}:arguments[t],t%2?ownKeys(Object(a),!0).forEach(function(t){_defineProperty(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))});return e}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),l,o;for(o=0;o<n.length;o++)l=n[o],0<=t.indexOf(l)||(a[l]=e[l]);return a}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,l=// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
// attributeNamespace
/* canUseEventSystem */!1,i=void 0;try{for(var o=e[Symbol.iterator](),r;!(n=(r=o.next()).done)&&(a.push(r.value),!(t&&a.length===t));n=!0);}catch(e){l=!0,i=e}finally{try{n||null==o["return"]||o["return"]()}finally{if(l)throw i}}return a}}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.
for(var rng=function(){return _crypto["default"].randomBytes(16)},byteToHex=[],i=0;256>i;++i)byteToHex[i]=(i+256).toString(16).substr(1);function bytesToUuid(e,t){var a=t||0,n=byteToHex;// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")}var bytesToUuid_1=bytesToUuid;function v4(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?Array(16):null,e=null),e=e||{};var l=e.random||(e.rng||rng)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
// Copy bytes to buffer, if provided
if(l[6]=64|15&l[6],l[8]=128|63&l[8],t)for(var i=0;16>i;++i)t[n+i]=l[i];return t||bytesToUuid_1(l)}var v4_1=v4;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear;/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(e,t){return e===t||e!==e&&t!==t}var eq_1=eq;/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(e,t){for(var a=e.length;a--;)if(eq_1(e[a][0],t))return a;return-1}var _assocIndexOf=assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;/** Used for built-in method references. */ /**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(e){var t=this.__data__,a=_assocIndexOf(t,e);if(0>a)return!1;var n=t.length-1;return a==n?t.pop():splice.call(t,a,1),--this.size,!0}var _listCacheDelete=listCacheDelete;/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(e){var t=this.__data__,a=_assocIndexOf(t,e);return 0>a?void 0:t[a][1]}var _listCacheGet=listCacheGet;/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(e){return-1<_assocIndexOf(this.__data__,e)}var _listCacheHas=listCacheHas;/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(e,t){var a=this.__data__,n=_assocIndexOf(a,e);return 0>n?(++this.size,a.push([e,t])):a[n][1]=t,this}var _listCacheSet=listCacheSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `ListCache`.
ListCache.prototype.clear=_listCacheClear,ListCache.prototype["delete"]=_listCacheDelete,ListCache.prototype.get=_listCacheGet,ListCache.prototype.has=_listCacheHas,ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache;/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new _ListCache,this.size=0}var _stackClear=stackClear;/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(e){var t=this.__data__,a=t["delete"](e);return this.size=t.size,a}var _stackDelete=stackDelete;/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(e){return this.__data__.get(e)}var _stackGet=stackGet;/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(e){return this.__data__.has(e)}var _stackHas=stackHas,commonjsGlobal="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis;function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}/** Detect free variable `global` from Node.js. */var freeGlobal="object"==_typeof2(commonjsGlobal)&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==("undefined"==typeof self?"undefined":_typeof2(self))&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),a=e[symToStringTag];try{e[symToStringTag]=void 0;var n=!0}catch(t){}var l=nativeObjectToString.call(e);return n&&(t?e[symToStringTag]=a:delete e[symToStringTag]),l}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;/** Used for built-in method references. */ /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;/** `Object#toString` result references. */ /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(e){var t=_typeof2(e);return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";/** `Object#toString` result references. */ /**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(e){if(!isObject_1(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=_baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}var isFunction_1=isFunction,coreJsData=_root["__core-js_shared__"],_coreJsData=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();/** Used to detect overreaching core-js shims. */ /**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked,funcProto=Function.prototype,funcToString=funcProto.toString;/** Used for built-in method references. */ /**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var _toSource=toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$2=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$1=objectProto$2.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ /**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(e){if(!isObject_1(e)||_isMasked(e))return!1;var t=isFunction_1(e)?reIsNative:reIsHostCtor;return t.test(_toSource(e))}var _baseIsNative=baseIsNative;/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(e,t){return null==e?void 0:e[t]}var _getValue=getValue;/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(e,t){var a=_getValue(e,t);return _baseIsNative(a)?a:void 0}var _getNative=getNative,Map$1=_getNative(_root,"Map"),_Map=Map$1,nativeCreate=_getNative(Object,"create"),_nativeCreate=nativeCreate;/* Built-in method references that are verified to be native. */ /**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{},this.size=0}var _hashClear=hashClear;/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _hashDelete=hashDelete,HASH_UNDEFINED="__lodash_hash_undefined__",objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty;/** Used to stand-in for `undefined` hash values. */ /**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(e){var t=this.__data__;if(_nativeCreate){var a=t[e];return a===HASH_UNDEFINED?void 0:a}return hasOwnProperty$2.call(t,e)?t[e]:void 0}var _hashGet=hashGet,objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;/** Used for built-in method references. */ /**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(e){var t=this.__data__;return _nativeCreate?t[e]!==void 0:hasOwnProperty$3.call(t,e)}var _hashHas=hashHas,HASH_UNDEFINED$1="__lodash_hash_undefined__";/** Used to stand-in for `undefined` hash values. */ /**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=_nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}var _hashSet=hashSet;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `Hash`.
Hash.prototype.clear=_hashClear,Hash.prototype["delete"]=_hashDelete,Hash.prototype.get=_hashGet,Hash.prototype.has=_hashHas,Hash.prototype.set=_hashSet;var _Hash=Hash;/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0,this.__data__={hash:new _Hash,map:new(_Map||_ListCache),string:new _Hash}}var _mapCacheClear=mapCacheClear;/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(e){var t=_typeof2(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var _isKeyable=isKeyable;/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(e,t){var a=e.__data__;return _isKeyable(t)?a["string"==typeof t?"string":"hash"]:a.map}var _getMapData=getMapData;/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(e){var t=_getMapData(this,e)["delete"](e);return this.size-=t?1:0,t}var _mapCacheDelete=mapCacheDelete;/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(e){return _getMapData(this,e).get(e)}var _mapCacheGet=mapCacheGet;/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(e){return _getMapData(this,e).has(e)}var _mapCacheHas=mapCacheHas;/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(e,t){var a=_getMapData(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}var _mapCacheSet=mapCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `MapCache`.
MapCache.prototype.clear=_mapCacheClear,MapCache.prototype["delete"]=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache,LARGE_ARRAY_SIZE=200;/** Used as the size to enable large array optimizations. */ /**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(e,t){var a=this.__data__;if(a instanceof _ListCache){var n=a.__data__;if(!_Map||n.length<LARGE_ARRAY_SIZE-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new _MapCache(n)}return a.set(e,t),this.size=a.size,this}var _stackSet=stackSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(e){var t=this.__data__=new _ListCache(e);this.size=t.size}// Add methods to `Stack`.
Stack.prototype.clear=_stackClear,Stack.prototype["delete"]=_stackDelete,Stack.prototype.get=_stackGet,Stack.prototype.has=_stackHas,Stack.prototype.set=_stackSet;var _Stack=Stack,HASH_UNDEFINED$2="__lodash_hash_undefined__";/** Used to stand-in for `undefined` hash values. */ /**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED$2),this}var _setCacheAdd=setCacheAdd;/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(e){return this.__data__.has(e)}var _setCacheHas=setCacheHas;/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new _MapCache;++t<a;)this.add(e[t])}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=_setCacheAdd,SetCache.prototype.has=_setCacheHas;var _SetCache=SetCache;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(e,t){for(var a=-1,n=null==e?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}var _arraySome=arraySome;/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(e,t){return e.has(t)}var _cacheHas=cacheHas,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(e,t,a,n,l,i){var o=a&COMPARE_PARTIAL_FLAG,r=e.length,s=t.length;if(r!=s&&!(o&&s>r))return!1;// Assume cyclic values are equal.
var d=i.get(e);if(d&&i.get(t))return d==t;var u=-1,c=!0,m=a&COMPARE_UNORDERED_FLAG?new _SetCache:void 0;// Ignore non-index properties.
for(i.set(e,t),i.set(t,e);++u<r;){var f=e[u],p=t[u];if(n)var h=o?n(p,f,u,t,e,i):n(f,p,u,e,t,i);if(void 0!==h){if(h)continue;c=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(m){if(!_arraySome(t,function(e,t){if(!_cacheHas(m,t)&&(f===e||l(f,e,a,n,i)))return m.push(t)})){c=!1;break}}else if(!(f===p||l(f,p,a,n,i))){c=!1;break}}return i["delete"](e),i["delete"](t),c}var _equalArrays=equalArrays,Uint8Array=_root.Uint8Array,_Uint8Array=Uint8Array;/** Built-in value references. */ /**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e,n){a[++t]=[n,e]}),a}var _mapToArray=mapToArray;/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}var _setToArray=setToArray,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=_Symbol?_Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(e,t,a,n,l,i,o){switch(a){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!!(e.byteLength==t.byteLength&&i(new _Uint8Array(e),new _Uint8Array(t)));case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq_1(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case mapTag:var r=_mapToArray;case setTag:var s=n&COMPARE_PARTIAL_FLAG$1;if(r||(r=_setToArray),e.size!=t.size&&!s)return!1;// Assume cyclic values are equal.
var d=o.get(e);if(d)return d==t;n|=COMPARE_UNORDERED_FLAG$1,o.set(e,t);var u=_equalArrays(r(e),r(t),n,l,i,o);return o["delete"](e),u;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t);}return!1}var _equalByTag=equalByTag;/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(e,t){for(var a=-1,n=t.length,l=e.length;++a<n;)e[l+a]=t[a];return e}var _arrayPush=arrayPush,isArray=Array.isArray,isArray_1=isArray;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ /**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(e,t,a){var n=t(e);return isArray_1(e)?n:_arrayPush(n,a(e))}var _baseGetAllKeys=baseGetAllKeys;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(e,t){for(var a=-1,n=null==e?0:e.length,l=0,i=[];++a<n;){var o=e[a];t(o,a,e)&&(i[l++]=o)}return i}var _arrayFilter=arrayFilter;/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[]}var stubArray_1=stubArray,objectProto$5=Object.prototype,propertyIsEnumerable=objectProto$5.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),_arrayFilter(nativeGetSymbols(e),function(t){return propertyIsEnumerable.call(e,t)}))}:stubArray_1,_getSymbols=getSymbols;/** Used for built-in method references. */ /**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}var _baseTimes=baseTimes;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(e){return null!=e&&"object"==_typeof2(e)}var isObjectLike_1=isObjectLike,argsTag="[object Arguments]";/** `Object#toString` result references. */ /**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(e){return isObjectLike_1(e)&&_baseGetTag(e)==argsTag}var _baseIsArguments=baseIsArguments,objectProto$6=Object.prototype,hasOwnProperty$4=objectProto$6.hasOwnProperty,propertyIsEnumerable$1=objectProto$6.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(e){return isObjectLike_1(e)&&hasOwnProperty$4.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")},isArguments_1=isArguments;/** Used for built-in method references. */ /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return!1}var stubFalse_1=stubFalse,isBuffer_1=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,l=n&&n.exports===a,i=l?_root.Buffer:void 0,o=i?i.isBuffer:void 0;/** Detect free variable `module`. */e.exports=o||stubFalse_1}),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(e,t){var a=_typeof2(e);return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==a||"symbol"!=a&&reIsUint.test(e))&&-1<e&&0==e%1&&e<t}var _isIndex=isIndex,MAX_SAFE_INTEGER$1=9007199254740991;/** Used as references for various `Number` constants. */ /**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=MAX_SAFE_INTEGER$1}var isLength_1=isLength,argsTag$1="[object Arguments]",arrayTag="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag$1="[object Function]",mapTag$1="[object Map]",numberTag$1="[object Number]",objectTag="[object Object]",regexpTag$1="[object RegExp]",setTag$1="[object Set]",stringTag$1="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};/** `Object#toString` result references. */typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$1]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag]=!1;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(e){return isObjectLike_1(e)&&isLength_1(e.length)&&!!typedArrayTags[_baseGetTag(e)]}var _baseIsTypedArray=baseIsTypedArray;/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(e){return function(t){return e(t)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,l=n&&n.exports===a,i=l&&_freeGlobal.process,o=function(){try{// Use `util.types` for Node.js 10+.
var e=n&&n.require&&n.require("util").types;return e?e:i&&i.binding&&i.binding("util");// Legacy `process.binding('util')` for Node.js < 10.
}catch(t){}}();/** Detect free variable `module`. */e.exports=o}),nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,isTypedArray_1=isTypedArray,objectProto$7=Object.prototype,hasOwnProperty$5=objectProto$7.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(e,t){var a=isArray_1(e),n=!a&&isArguments_1(e),l=!a&&!n&&isBuffer_1(e),i=!a&&!n&&!l&&isTypedArray_1(e),o=a||n||l||i,r=o?_baseTimes(e.length,String):[],s=r.length;for(var d in e)(t||hasOwnProperty$5.call(e,d))&&!(o&&(// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==d||// Node.js 0.10 has enumerable non-index properties on buffers.
l&&("offset"==d||"parent"==d)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||// Skip index properties.
_isIndex(d,s)))&&r.push(d);return r}var _arrayLikeKeys=arrayLikeKeys,objectProto$8=Object.prototype;/** Used for built-in method references. */ /**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(e){var t=e&&e.constructor,a="function"==typeof t&&t.prototype||objectProto$8;return e===a}var _isPrototype=isPrototype;/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(e,t){return function(a){return e(t(a))}}var _overArg=overArg,nativeKeys=_overArg(Object.keys,Object),_nativeKeys=nativeKeys,objectProto$9=Object.prototype,hasOwnProperty$6=objectProto$9.hasOwnProperty;/* Built-in method references for those with the same name as other `lodash` methods. */ /**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(e){if(!_isPrototype(e))return _nativeKeys(e);var t=[];for(var a in Object(e))hasOwnProperty$6.call(e,a)&&"constructor"!=a&&t.push(a);return t}var _baseKeys=baseKeys;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(e){return null!=e&&isLength_1(e.length)&&!isFunction_1(e)}var isArrayLike_1=isArrayLike;/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(e){return isArrayLike_1(e)?_arrayLikeKeys(e):_baseKeys(e)}var keys_1=keys;/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(e){return _baseGetAllKeys(e,keys_1,_getSymbols)}var _getAllKeys=getAllKeys,COMPARE_PARTIAL_FLAG$2=1,objectProto$a=Object.prototype,hasOwnProperty$7=objectProto$a.hasOwnProperty;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(e,t,a,n,l,i){var o=a&COMPARE_PARTIAL_FLAG$2,r=_getAllKeys(e),s=r.length,d=_getAllKeys(t),u=d.length;if(s!=u&&!o)return!1;for(var c=s,m;c--;)if(m=r[c],o?!(m in t):!hasOwnProperty$7.call(t,m))return!1;// Assume cyclic values are equal.
var f=i.get(e);if(f&&i.get(t))return f==t;var p=!0;i.set(e,t),i.set(t,e);for(var h=o;++c<s;){m=r[c];var g=e[m],_=t[m];if(n)var y=o?n(_,g,m,t,e,i):n(g,_,m,e,t,i);// Recursively compare objects (susceptible to call stack limits).
if(void 0===y?!(g===_||l(g,_,a,n,i)):!y){p=!1;break}h||(h="constructor"==m)}if(p&&!h){var b=e.constructor,E=t.constructor;// Non `Object` object instances with different constructors are not equal.
b!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof E&&E instanceof E)&&(p=!1)}return i["delete"](e),i["delete"](t),p}var _equalObjects=equalObjects,DataView=_getNative(_root,"DataView"),_DataView=DataView,Promise$1=_getNative(_root,"Promise"),_Promise=Promise$1,Set$1=_getNative(_root,"Set"),_Set=Set$1,_WeakMap2=_getNative(_root,"WeakMap"),_WeakMap=_WeakMap2,mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag$1="[object WeakMap]",dataViewTag$2="[object DataView]",dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;/* Built-in method references that are verified to be native. */(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag$2||_Map&&getTag(new _Map)!=mapTag$2||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set)!=setTag$2||_WeakMap&&getTag(new _WeakMap)!=weakMapTag$1)&&(getTag=function(e){var t=_baseGetTag(e),a=t==objectTag$1?e.constructor:void 0,n=a?_toSource(a):"";if(n)switch(n){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag$1;}return t});var _getTag=getTag,COMPARE_PARTIAL_FLAG$3=1,argsTag$2="[object Arguments]",arrayTag$1="[object Array]",objectTag$2="[object Object]",objectProto$b=Object.prototype,hasOwnProperty$8=objectProto$b.hasOwnProperty;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(e,t,a,n,l,i){var o=isArray_1(e),r=isArray_1(t),s=o?arrayTag$1:_getTag(e),d=r?arrayTag$1:_getTag(t);s=s==argsTag$2?objectTag$2:s,d=d==argsTag$2?objectTag$2:d;var u=s==objectTag$2,c=d==objectTag$2,m=s==d;if(m&&isBuffer_1(e)){if(!isBuffer_1(t))return!1;o=!0,u=!1}if(m&&!u)return i||(i=new _Stack),o||isTypedArray_1(e)?_equalArrays(e,t,a,n,l,i):_equalByTag(e,t,s,a,n,l,i);if(!(a&COMPARE_PARTIAL_FLAG$3)){var f=u&&hasOwnProperty$8.call(e,"__wrapped__"),p=c&&hasOwnProperty$8.call(t,"__wrapped__");if(f||p){var h=f?e.value():e,g=p?t.value():t;return i||(i=new _Stack),l(h,g,a,n,i)}}return!!m&&(i||(i=new _Stack),_equalObjects(e,t,a,n,l,i))}var _baseIsEqualDeep=baseIsEqualDeep;/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(e,t,a,n,l){return!(e!==t)||(null!=e&&null!=t&&(isObjectLike_1(e)||isObjectLike_1(t))?_baseIsEqualDeep(e,t,a,n,baseIsEqual,l):e!==e&&t!==t)}var _baseIsEqual=baseIsEqual,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** Used to compose bitmasks for value comparisons. */ /**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(e,t,a,n){var l=a.length,i=l,o=!n;if(null==e)return!i;for(e=Object(e);l--;){var r=a[l];if(o&&r[2]?r[1]!==e[r[0]]:!(r[0]in e))return!1}for(;++l<i;){r=a[l];var s=r[0],d=e[s],u=r[1];if(!(o&&r[2])){var c=new _Stack;if(n)var m=n(d,u,s,e,t,c);if(void 0===m?!_baseIsEqual(u,d,COMPARE_PARTIAL_FLAG$4|COMPARE_UNORDERED_FLAG$2,n,c):!m)return!1}else if(void 0===d&&!(s in e))return!1}return!0}var _baseIsMatch=baseIsMatch;/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(e){return e===e&&!isObject_1(e)}var _isStrictComparable=isStrictComparable;/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(e){for(var t=keys_1(e),a=t.length;a--;){var n=t[a],l=e[n];t[a]=[n,l,_isStrictComparable(l)]}return t}var _getMatchData=getMatchData;/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(e,t){return function(a){return null!=a&&a[e]===t&&(t!==void 0||e in Object(a))}}var _matchesStrictComparable=matchesStrictComparable;/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(e){var t=_getMatchData(e);return 1==t.length&&t[0][2]?_matchesStrictComparable(t[0][0],t[0][1]):function(a){return a===e||_baseIsMatch(a,e,t)}}var _baseMatches=baseMatches,symbolTag$1="[object Symbol]";/** `Object#toString` result references. */ /**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(e){return"symbol"==_typeof2(e)||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag$1}var isSymbol_1=isSymbol,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/** Used to match property names within property paths. */ /**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(e,t){if(isArray_1(e))return!1;var a=_typeof2(e);return!!("number"==a||"symbol"==a||"boolean"==a||null==e||isSymbol_1(e))||reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t)}var _isKey=isKey,FUNC_ERROR_TEXT="Expected a function";/** Error message constants. */ /**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var a=function(){var n=arguments,l=t?t.apply(this,n):n[0],i=a.cache;if(i.has(l))return i.get(l);var o=e.apply(this,n);return a.cache=i.set(l,o)||i,o};return a.cache=new(memoize.Cache||_MapCache),a}// Expose `MapCache`.
memoize.Cache=_MapCache;var memoize_1=memoize,MAX_MEMOIZE_SIZE=500;/** Used as the maximum memoize cache size. */ /**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(e){var t=memoize_1(e,function(e){return a.size===MAX_MEMOIZE_SIZE&&a.clear(),e}),a=t.cache;return t}var _memoizeCapped=memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=_memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)/* . */&&t.push(""),e.replace(rePropName,function(e,a,n,l){t.push(n?l.replace(reEscapeChar,"$1"):a||e)}),t}),_stringToPath=stringToPath;/** Used to match property names within property paths. */ /**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(e,t){for(var a=-1,n=null==e?0:e.length,l=Array(n);++a<n;)l[a]=t(e[a],a,e);return l}var _arrayMap=arrayMap,INFINITY=1/0,symbolProto$1=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;/** Used as references for various `Number` constants. */ /**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(e){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(isArray_1(e))// Recursively convert values (susceptible to call stack limits).
return _arrayMap(e,baseToString)+"";if(isSymbol_1(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}var _baseToString=baseToString;/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(e){return null==e?"":_baseToString(e)}var toString_1=toString;/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(e,t){return isArray_1(e)?e:_isKey(e,t)?[e]:_stringToPath(toString_1(e))}var _castPath=castPath,INFINITY$1=1/0;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(e){if("string"==typeof e||isSymbol_1(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}var _toKey=toKey;/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(e,t){t=_castPath(t,e);for(var a=0,n=t.length;null!=e&&a<n;)e=e[_toKey(t[a++])];return a&&a==n?e:void 0}var _baseGet=baseGet;/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(e,t,a){var n=null==e?void 0:_baseGet(e,t);return n===void 0?a:n}var get_1=get;/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(e,t){return null!=e&&t in Object(e)}var _baseHasIn=baseHasIn;/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(e,t,a){t=_castPath(t,e);for(var n=-1,l=t.length,i=!1,o;++n<l&&(o=_toKey(t[n]),!!(i=null!=e&&a(e,o)));)e=e[o];return i||++n!=l?i:(l=null==e?0:e.length,!!l&&isLength_1(l)&&_isIndex(o,l)&&(isArray_1(e)||isArguments_1(e)))}var _hasPath=hasPath;/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(e,t){return null!=e&&_hasPath(e,t,_baseHasIn)}var hasIn_1=hasIn,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;/** Used to compose bitmasks for value comparisons. */ /**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(e,t){return _isKey(e)&&_isStrictComparable(t)?_matchesStrictComparable(_toKey(e),t):function(a){var n=get_1(a,e);return n===void 0&&n===t?hasIn_1(a,e):_baseIsEqual(t,n,COMPARE_PARTIAL_FLAG$5|COMPARE_UNORDERED_FLAG$3)}}var _baseMatchesProperty=baseMatchesProperty;/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(e){return e}var identity_1=identity;/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(e){return function(t){return null==t?void 0:t[e]}}var _baseProperty=baseProperty;/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(e){return function(t){return _baseGet(t,e)}}var _basePropertyDeep=basePropertyDeep;/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(e){return _isKey(e)?_baseProperty(_toKey(e)):_basePropertyDeep(e)}var property_1=property;/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(e){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
return"function"==typeof e?e:null==e?identity_1:"object"==_typeof2(e)?isArray_1(e)?_baseMatchesProperty(e[0],e[1]):_baseMatches(e):property_1(e)}var _baseIteratee=baseIteratee;/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */function createFind(e){return function(t,a,n){var l=Object(t);if(!isArrayLike_1(t)){var i=_baseIteratee(a);t=keys_1(t),a=function(e){return i(l[e],e,l)}}var o=e(t,a,n);return-1<o?l[i?t[o]:o]:void 0}}var _createFind=createFind;/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(e,t,a,n){for(var l=e.length,i=a+(n?1:-1);n?i--:++i<l;)if(t(e[i],i,e))return i;return-1}var _baseFindIndex=baseFindIndex,NAN=0/0,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NAN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var a=reIsBinary.test(e);return a||reIsOctal.test(e)?freeParseInt(e.slice(2),a?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber,INFINITY$2=1/0,MAX_INTEGER=17976931348623157e292;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(e){if(!e)return 0===e?e:0;if(e=toNumber_1(e),e===INFINITY$2||e===-INFINITY$2){var t=0>e?-1:1;return t*MAX_INTEGER}return e===e?e:0}var toFinite_1=toFinite;/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(e){var t=toFinite_1(e),a=t%1;return t===t?a?t-a:t:0}var toInteger_1=toInteger,nativeMax=Math.max;/* Built-in method references for those with the same name as other `lodash` methods. */ /**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(e,t,a){var n=null==e?0:e.length;if(!n)return-1;var l=null==a?0:toInteger_1(a);return 0>l&&(l=nativeMax(n+l,0)),_baseFindIndex(e,_baseIteratee(t),l)}var findIndex_1=findIndex,find=_createFind(findIndex_1),find_1=find,svgs=[{name:"rightArrow",data:[{path:{d:"M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"}}],viewBox:"0 0 50 50"},{name:"warning",data:[{path:{d:"M42.7,7.2C37.7,2.2,31.5,0,25,0S12.3,2.2,7.3,7.2c-9.7,9.7-9.7,25.4,0,35.2c5,5,11.2,7.2,17.7,7.2s12.7-2.5,17.7-7.2 C52.4,32.6,52.4,16.9,42.7,7.2z M41,40.6c-4.2,4.2-10,6.5-16,6.5s-11.7-2.2-16-6.5c-8.7-8.7-8.7-23,0-31.7c4.3-4.2,10-6.5,16-6.5 s11.7,2.3,16,6.5C49.7,17.6,49.7,31.9,41,40.6z"}},{path:{d:"M27,13.1V30h-4V13.1H27z M23,36.5h3.9v-4.3H23V36.5z"}}],viewBox:"0 0 50 50"},{name:"rightUpArrow",data:[{path:{d:"M21.8,0.2l28.1-0.1v28.1l-4.5,0l0.1-20.5L16.2,37.1l-3.4-3.4L42.1,4.4L21.8,4.4L21.8,0.2L21.8,0.2z"}}],viewBox:"0 0 50 50"},{name:"downArrow",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"arrow"}}],viewBox:"0 0 50 50"},{name:"plusAndCloseWithCircle",data:[{circle:{cx:"25",cy:"25",r:"22",fill:"none",classes:"circle"}},{polygon:{points:"26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 ",classes:"plus"}},{polygon:{points:"32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 ",classes:"close"}}],viewBox:"0 0 50 50"},{name:"chevron",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"chevron"}}],viewBox:"0 0 50 50"},{name:"close",data:[{polygon:{points:"50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25",classes:"close"}}],viewBox:"0 0 50 50"},{name:"play",data:[{polygon:{points:"0,0 8,5.5 0,11",classes:"play"}}],viewBox:"0 0 8 11"},{name:"pause",data:[{polygon:{points:"0,0 3,0 3,10 0,10 0,0",classes:"play"}},{polygon:{points:"6,0 9,0 9,10 6,10 6,0",classes:"play"}}],viewBox:"0 0 9 10"},{name:"muted",height:"30",width:"30",data:[{g:{transform:"translate(-97.000000, -48.000000)",data:[{g:{transform:"translate(97.000000, 48.000000)",data:[{g:{transform:"translate(4.000000, 6.000000)",fill:"#FFFEF2",data:[{g:{transform:"translate(3.000000, 0.573593)",data:[{path:{d:"M5.74011671,4.90798034 L13.5001929,12.6680565 C13.8907172,13.0585808 13.8907172,13.6917458 13.5001929,14.0822701 C13.3186245,14.2638385 13.0741693,14.368605 12.8174691,14.374866 L3.81370319,14.59447 L4.03330724,5.59070413 C4.0467736,5.03858358 4.50527237,4.60191807 5.05739292,4.61538443 C5.31409312,4.62164541 5.55854828,4.72641191 5.74011671,4.90798034 Z",transform:"translate(9.481906, 8.926267) rotate(45.000000) translate(-9.481906, -8.926267)"}},{polygon:{points:"0 7.4516129 4.4516129 6.16129032 4.4516129 11.6912442 0 10.4009217"}}]}},{path:{d:"M18.353198,12.259593 C18.3633576,11.843048 18.3297871,11.4377194 18.2566733,11.0477941 C17.7619986,8.4096316 15.457178,6.47656906 12.6389123,6.54530725 C9.4041016,6.62420507 18.2743002,15.4944036 18.353198,12.259593 Z",transform:"translate(15.142166, 9.756339) rotate(45.000000) translate(-15.142166, -9.756339)"}},{rect:{x:"10.325976",y:"-4.01495963",width:"2.5",height:"25.5",rx:"1",strokeWidth:"0.5",stroke:"#858480",transform:"translate(11.575976, 8.735040) scale(-1, 1) rotate(58.000000) translate(-11.575976, -8.735040)"}}]}}]}}]}}],viewBox:"8 7 12 18"},{name:"unmuted",height:"30",width:"30",data:[{g:{transform:"translate(-97.000000, -48.000000)",data:[{g:{transform:"translate(97.000000, 48.000000)",data:[{g:{transform:"translate(4.000000, 6.000000)",fill:"#FFFEF2",data:[{g:{transform:"translate(3.000000, 0.573593)",data:[{path:{d:"M5.74011671,4.90798034 L13.5001929,12.6680565 C13.8907172,13.0585808 13.8907172,13.6917458 13.5001929,14.0822701 C13.3186245,14.2638385 13.0741693,14.368605 12.8174691,14.374866 L3.81370319,14.59447 L4.03330724,5.59070413 C4.0467736,5.03858358 4.50527237,4.60191807 5.05739292,4.61538443 C5.31409312,4.62164541 5.55854828,4.72641191 5.74011671,4.90798034 Z",transform:"translate(9.481906, 8.926267) rotate(45.000000) translate(-9.481906, -8.926267)"}},{polygon:{points:"0 7.4516129 4.4516129 6.16129032 4.4516129 11.6912442 0 10.4009217"}}]}},{path:{d:"M18.353198,12.259593 C18.3633576,11.843048 18.3297871,11.4377194 18.2566733,11.0477941 C17.7619986,8.4096316 15.457178,6.47656906 12.6389123,6.54530725 C9.4041016,6.62420507 18.2743002,15.4944036 18.353198,12.259593 Z",transform:"translate(15.142166, 9.756339) rotate(45.000000) translate(-15.142166, -9.756339)"}}]}}]}}]}}],viewBox:"8 7 12 18"},{name:"aesop",data:[{path:{d:"M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"}},{path:{d:"M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"}},{path:{d:"M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"}},{path:{d:"M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"}},{path:{d:"M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"}},{rect:{x:"131.8",y:"13.5",width:"44.3",height:"5"}},{path:{d:"M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"}}],viewBox:"0 0 489.7 154.3"},{name:"download",data:[{path:{d:"M10.992,6.125 L6.125,10.782 L6.125,0.001 L4.848,0.001 L4.848,10.768 L-0.004,6.125 L-0.004,7.819 L5.495,13.011 L10.992,7.819 L10.992,6.125 Z"}},{path:{d:"M-0.000,12.999 L11.000,12.999 L11.000,14.000 L-0.000,14.000 L-0.000,12.999 Z"}}],viewBox:"0 0 11 14"},{name:"seek",data:[{path:{d:"M19.996,11.991 L9.999,5.990 L19.996,-0.012"}},{path:{d:"M9.996,11.991 L-0.001,5.990 L9.996,-0.012"}}],viewBox:"0 0 20 12"}],styles={base:"Icon-module_base__iPRbu",dark:"Icon-module_dark__3KB8t",light:"Icon-module_light__15Pp3",plusAndCloseWithCircle:"Icon-module_plusAndCloseWithCircle__Y4-yj",circle:"Icon-module_circle__4IIx2",plus:"Icon-module_plus__2RJbo",close:"Icon-module_close__1Owsp"},generateSvgBlueprint=function(e,t){function a(e){return e.map(function(e,n){var l=Object.keys(e)[0],i=e[l],o=i.classes,r=i.data,s=_objectWithoutProperties(i,["classes","data"]);return s.key="".concat(t).concat(n),void 0!==o&&(s.className=styles[o]),"g"===l?_react["default"].createElement(l,s,a(r)):_react["default"].createElement(l,s)})}return a(e.data)},Icon=function(e){var t=e.className,a=e.dataRef,n=e.height,l=e.isActive,i=e.name,o=e.tabIndex,r=e.theme,s=e.title,d=e.width,u=find_1(svgs,{name:i});if(u===void 0)return null;var c=v4_1(),m="".concat(i,"-").concat(c),f=generateSvgBlueprint(u,c),p=(0,_classnames["default"])(styles.base,styles[i],styles[r],_defineProperty({},styles.isActive,l),t);return _react["default"].createElement("svg",{"aria-labelledby":s?m:void 0,className:p,"data-ref":a,focusable:"false",height:n,role:"img",style:{height:"".concat(n,"px"),width:"".concat(d,"px")},tabIndex:o,viewBox:u.viewBox,width:d},s&&_react["default"].createElement("title",{id:m},s),_react["default"].createElement("g",null,f))};/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */Icon.propTypes={className:_propTypes["default"].string,dataRef:_propTypes["default"].string,height:_propTypes["default"].number,isActive:_propTypes["default"].bool,name:_propTypes["default"].string.isRequired,tabIndex:_propTypes["default"].number,theme:_propTypes["default"].oneOf(["dark","light"]),title:_propTypes["default"].string,width:_propTypes["default"].number},Icon.defaultProps={className:void 0,dataRef:"",height:12,isActive:!1,name:"",tabIndex:-1,theme:"dark",title:void 0,width:12};var isObjectPopulatedArray=function(e){return!!(Array.isArray(e)&&_typeof(e)!==void 0&&0!==e.length)},objects={isObjectPopulatedArray:isObjectPopulatedArray},styles$1={base:"Accordion-module_base__3VTZg",item:"Accordion-module_item__ZGEfE",dark:"Accordion-module_dark__2Oiu4",light:"Accordion-module_light__2ieEh",headingCopy:"Accordion-module_headingCopy__3ORa4",button:"Accordion-module_button__2Lf1-",icon:"Accordion-module_icon__2_wvH",collapse:"Accordion-module_collapse__16QRS",panel:"Accordion-module_panel__14OQe",content:"Accordion-module_content__38Xon"},Accordion=function(e){var t=e.className,a=e.items,n=e.theme,l=_react["default"].useState([]),i=_slicedToArray(l,2),o=i[0],r=i[1];if(!isObjectPopulatedArray(a))return null;var s=(0,_classnames["default"])(styles$1.base,styles$1[n],t),d=function(e){return o.includes(e)};return _react["default"].createElement(_reactAccessibleAccordion.Accordion,{allowMultipleExpanded:!0,allowZeroExpanded:!0,className:s,onChange:function(e){return r(e)}},a.map(function(e){var t=e.content,a=e.heading,l=e.id;return _react["default"].createElement(_reactAccessibleAccordion.AccordionItem,{className:styles$1.item,key:l,uuid:l},_react["default"].createElement(_reactAccessibleAccordion.AccordionItemHeading,{className:(0,_classnames["default"])(styles$1.heading,styles$1[n])},_react["default"].createElement(_reactAccessibleAccordion.AccordionItemButton,{className:styles$1.button},_react["default"].createElement("span",{className:styles$1.headingCopy},a),_react["default"].createElement(Icon,{className:styles$1.icon,height:16,name:"downArrow",theme:n,width:16}))),_react["default"].createElement(_reactAccessibleAccordion.AccordionItemPanel,{className:styles$1.panel},_react["default"].createElement(_reactCollapse.Collapse,{isOpened:d(l),theme:{collapse:styles$1.collapse}},_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$1.content,styles$1[n])},t))))}))};Accordion.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].node.isRequired,heading:_propTypes["default"].string.isRequired,id:_propTypes["default"].string.isRequired})),theme:_propTypes["default"].oneOf(["dark","light"])},Accordion.defaultProps={className:void 0,items:void 0,theme:"dark"};var ADD_TO_CART_ACTION_TYPES={FAIL:"FAIL",FETCHING:"FETCHING",SUCCESS:"SUCCESS"},initialState={hasError:!1,isLoading:!1,isUpdateSuccessful:!1};function reducer(e,t){if(t.type===ADD_TO_CART_ACTION_TYPES.FETCHING)return{hasError:!1,isLoading:!0,isUpdateSuccessful:!1};if(t.type===ADD_TO_CART_ACTION_TYPES.SUCCESS)return{hasError:!1,isLoading:!1,isUpdateSuccessful:!0};if(t.type===ADD_TO_CART_ACTION_TYPES.FAIL)return{hasError:!0,isLoading:!1,isUpdateSuccessful:!1};throw new Error("useAddToCart: Dispatch action type \"".concat(t.type,"\" not found."))}var useAddToCart=function(e){var t=(0,_react.useReducer)(reducer,initialState),a=_slicedToArray(t,2),n=a[0],l=a[1],i=n.isLoading,o=n.hasError,r=n.isUpdateSuccessful;return{actionTypes:ADD_TO_CART_ACTION_TYPES,dispatch:l,hasError:o,isLoading:i,isUpdateSuccessful:r,onClick:e}},SMALL={MIN_WIDTH:0,MAX_WIDTH:639,VIEWPORT:"small"},MEDIUM={MIN_WIDTH:640,MAX_WIDTH:1024,VIEWPORT:"medium"},LARGE={MIN_WIDTH:1025,MAX_WIDTH:1219,VIEWPORT:"large"},XLARGE={MIN_WIDTH:1220,MAX_WIDTH:1599,VIEWPORT:"large"},XXLARGE={MIN_WIDTH:1600,VIEWPORT:"xlarge"},breakpoints={SMALL:SMALL,MEDIUM:MEDIUM,LARGE:LARGE,XLARGE:XLARGE,XXLARGE:XXLARGE},BREAKPOINTS=/*#__PURE__*/Object.freeze({__proto__:null,SMALL:SMALL,MEDIUM:MEDIUM,LARGE:LARGE,XLARGE:XLARGE,XXLARGE:XXLARGE,default:breakpoints}),GREY_60="#b3ada5",HIGHLIGHT_GREEN="#007544",HIGHLIGHT_BLUE="#114094",HIGHLIGHT_ORANGE="#c67330",COLORS=/*#__PURE__*/Object.freeze({__proto__:null,GREY_60:GREY_60,HIGHLIGHT_GREEN:HIGHLIGHT_GREEN,HIGHLIGHT_BLUE:HIGHLIGHT_BLUE,HIGHLIGHT_ORANGE:HIGHLIGHT_ORANGE}),CLUSTER_IMAGE_PATH="./assets/Map-cluster-icon.svg",DIRECTIONS_URL_PREFIX="https://www.google.com/maps?saddr=Current+Location&daddr=",MARKER_TYPE={PIN:"PIN",PLACE:"PLACE"},GOOGLE_MAPS=/*#__PURE__*/Object.freeze({__proto__:null,CLUSTER_IMAGE_PATH:CLUSTER_IMAGE_PATH,DIRECTIONS_URL_PREFIX:DIRECTIONS_URL_PREFIX,MARKER_TYPE:MARKER_TYPE}),LEVEL={ONE:"1",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6"},SIZE={X_X_LARGE:"xXLarge",X_LARGE:"xLarge",LARGE:"large",MEDIUM:"medium",SMALL:"small",X_SMALL:"xSmall",X_X_SMALL:"xXSmall"},HEADING=/*#__PURE__*/Object.freeze({__proto__:null,LEVEL:LEVEL,SIZE:SIZE}),EXTERNAL_BUTTON_LINK="External Button Link",EXTERNAL_NO_ICON_BUTTON_LINK="External No Icon Button Link",EXTERNAL_NO_ICON_TEXT_LINK="External No Icon Link",EXTERNAL_TEXT_LINK="External Text Link",INTERNAL_BUTTON_LINK="Internal Button Link",INTERNAL_NO_ICON_BUTTON_LINK="Internal No Icon Button Link",INTERNAL_NO_ICON_TEXT_LINK="Internal No Icon Link",INTERNAL_TEXT_LINK="Internal Text Link",HYPERLINK_STYLE_TYPES=/*#__PURE__*/Object.freeze({__proto__:null,EXTERNAL_BUTTON_LINK:EXTERNAL_BUTTON_LINK,EXTERNAL_NO_ICON_BUTTON_LINK:EXTERNAL_NO_ICON_BUTTON_LINK,EXTERNAL_NO_ICON_TEXT_LINK:EXTERNAL_NO_ICON_TEXT_LINK,EXTERNAL_TEXT_LINK:EXTERNAL_TEXT_LINK,INTERNAL_BUTTON_LINK:INTERNAL_BUTTON_LINK,INTERNAL_NO_ICON_BUTTON_LINK:INTERNAL_NO_ICON_BUTTON_LINK,INTERNAL_NO_ICON_TEXT_LINK:INTERNAL_NO_ICON_TEXT_LINK,INTERNAL_TEXT_LINK:INTERNAL_TEXT_LINK}),LOCATION_TYPES={DEPARTMENT_STORE:"DEPARTMENT_STORE",SIGNATURE_STORE:"SIGNATURE_STORE",STOCKIST:"STOCKIST"},STORES=/*#__PURE__*/Object.freeze({__proto__:null,LOCATION_TYPES:LOCATION_TYPES}),NAV_SHOP="NAV_SHOP",NAV_READ="NAV_READ",NAV_VISIT="NAV_VISIT",NAV_SEARCH="NAV_SEARCH",NAV_LOGIN="NAV_LOGIN",NAV_CART="NAV_CART",NAV_LOGO="NAV_LOGO",NAV_SHOP_1="NAV_SHOP_1",NAV_SHOP_2="NAV_SHOP_2",NAV_SHOP_PRODUCT_RADIO="NAV_SHOP_PRODUCT_RADIO",NAV_SHOP_PRODUCT_CTA="NAV_SHOP_PRODUCT_CTA",NAV_VISIT_INPUT="NAV_VISIT_INPUT",NAV_VISIT_CHECKBOX="NAV_VISIT_CHECKBOX",FOOTER_LINK="FOOTER_LINK",ADD_TO_CART_LARGE_CTA="ADD_TO_CART_LARGE_CTA",ADD_TO_CART_SMALL_CTA="ADD_TO_CART_SMALL_CTA",ADD_TO_CART_TEST="ADD_TO_CART_TEST",CART_CHECKOUT_CTA="CART_CHECKOUT_CTA",CART_PROMO_CTA="CART_PROMO_CTA",CART_PROMO_INPUT="CART_PROMO_INPUT",CART_PROMO_AMOUNT="CART_PROMO_AMOUNT",CART_HEADING="CART_HEADING",CART_CLOSE="CART_CLOSE",CHECKOUT_CUSTOMER_EMAIL="CHECKOUT_CUSTOMER_EMAIL",CHECKOUT_CUSTOMER_PASSWORD="CHECKOUT_CUSTOMER_PASSWORD",CHECKOUT_CUSTOMER_PREFIX="CHECKOUT_CUSTOMER_PREFIX",CHECKOUT_CUSTOMER_FIRST_NAME="CHECKOUT_CUSTOMER_FIRST_NAME",CHECKOUT_CUSTOMER_LAST_NAME="CHECKOUT_CUSTOMER_LAST_NAME",CHECKOUT_CUSTOMER_SUBMIT="CHECKOUT_CUSTOMER_SUBMIT",CHECKOUT_CUSTOMER_GUEST_BUTTON="CHECKOUT_CUSTOMER_GUEST_BUTTON",ADDRESS_COUNTRY="ADDRESS_COUNTRY",ADDRESS_LINE_1="ADDRESS_LINE_1",ADDRESS_LINE_2="ADDRESS_LINE_2",ADDRESS_COMPANY="ADDRESS_COMPANY",ADDRESS_REGION="ADDRESS_REGION",ADDRESS_TOWN="ADDRESS_TOWN",ADDRESS_POSTAL_CODE="ADDRESS_POSTAL_CODE",ADDRESS_COUNTRY_CODE="ADDRESS_COUNTRY_CODE",ADDRESS_PHONE_NUMBER="ADDRESS_PHONE_NUMBER",CHECKOUT_SHIPPING_METHOD="CHECKOUT_SHIPPING_METHOD",CHECKOUT_GIFT="CHECKOUT_GIFT",CHECKOUT_GIFT_MESSAGE_CHECKBOX="CHECKOUT_GIFT_MESSAGE_CHECKBOX",CHECKOUT_GIFT_MESSAGE="CHECKOUT_GIFT_MESSAGE",CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX="CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX",CHECKOUT_GIFT_INSTRUCTIONS="CHECKOUT_GIFT_INSTRUCTIONS",CHECKOUT_SHIPPING_SUBMIT="CHECKOUT_SHIPPING_SUBMIT",CHECKOUT_PAYMENT_METHOD="CHECKOUT_PAYMENT_METHOD",CHECKOUT_PAYMENT_CARD_HOLDER="CHECKOUT_PAYMENT_CARD_HOLDER",CHECKOUT_PAYMENT_CARD="CHECKOUT_PAYMENT_CARD",CHECKOUT_PAYMENT_EXPIRATION="CHECKOUT_PAYMENT_EXPIRATION",CHECKOUT_PAYMENT_CVC="CHECKOUT_PAYMENT_CVC",CHECKOUT_PAYMENT_GIFTCARD_CODE="CHECKOUT_PAYMENT_GIFTCARD_CODE",CHECKOUT_PAYMENT_GIFTCARD_PIN="CHECKOUT_PAYMENT_GIFTCARD_PIN",CHECKOUT_BILLING_SAME_SHIPPING="CHECKOUT_BILLING_SAME_SHIPPING",CHECKOUT_BILLING_TAX="CHECKOUT_BILLING_TAX",CHECKOUT_PAYMENT_SUBMIT="CHECKOUT_PAYMENT_SUBMIT",CHECKOUT_SAMPLES_RADIO="CHECKOUT_SAMPLES_RADIO",CHECKOUT_SAMPLES_SUBMIT="CHECKOUT_SAMPLES_SUBMIT",CHECKOUT_REVIEW_TOTAL="CHECKOUT_REVIEW_TOTAL",CHECKOUT_REVIEW_TOS_CHECKBOX="CHECKOUT_REVIEW_TOS_CHECKBOX",CHECKOUT_REVIEW_SUBMIT="CHECKOUT_REVIEW_SUBMIT",CONFIRMATION_ACCOUNT_BUTTON="CONFIRMATION_ACCOUNT_BUTTON",TEST_REFS=/*#__PURE__*/Object.freeze({__proto__:null,NAV_SHOP:NAV_SHOP,NAV_READ:NAV_READ,NAV_VISIT:NAV_VISIT,NAV_SEARCH:NAV_SEARCH,NAV_LOGIN:NAV_LOGIN,NAV_CART:NAV_CART,NAV_LOGO:NAV_LOGO,NAV_SHOP_1:NAV_SHOP_1,NAV_SHOP_2:NAV_SHOP_2,NAV_SHOP_PRODUCT_RADIO:NAV_SHOP_PRODUCT_RADIO,NAV_SHOP_PRODUCT_CTA:NAV_SHOP_PRODUCT_CTA,NAV_VISIT_INPUT:NAV_VISIT_INPUT,NAV_VISIT_CHECKBOX:NAV_VISIT_CHECKBOX,FOOTER_LINK:FOOTER_LINK,ADD_TO_CART_LARGE_CTA:ADD_TO_CART_LARGE_CTA,ADD_TO_CART_SMALL_CTA:ADD_TO_CART_SMALL_CTA,ADD_TO_CART_TEST:ADD_TO_CART_TEST,CART_CHECKOUT_CTA:CART_CHECKOUT_CTA,CART_PROMO_CTA:CART_PROMO_CTA,CART_PROMO_INPUT:CART_PROMO_INPUT,CART_PROMO_AMOUNT:CART_PROMO_AMOUNT,CART_HEADING:CART_HEADING,CART_CLOSE:CART_CLOSE,CHECKOUT_CUSTOMER_EMAIL:CHECKOUT_CUSTOMER_EMAIL,CHECKOUT_CUSTOMER_PASSWORD:CHECKOUT_CUSTOMER_PASSWORD,CHECKOUT_CUSTOMER_PREFIX:CHECKOUT_CUSTOMER_PREFIX,CHECKOUT_CUSTOMER_FIRST_NAME:CHECKOUT_CUSTOMER_FIRST_NAME,CHECKOUT_CUSTOMER_LAST_NAME:CHECKOUT_CUSTOMER_LAST_NAME,CHECKOUT_CUSTOMER_SUBMIT:CHECKOUT_CUSTOMER_SUBMIT,CHECKOUT_CUSTOMER_GUEST_BUTTON:CHECKOUT_CUSTOMER_GUEST_BUTTON,ADDRESS_COUNTRY:ADDRESS_COUNTRY,ADDRESS_LINE_1:ADDRESS_LINE_1,ADDRESS_LINE_2:ADDRESS_LINE_2,ADDRESS_COMPANY:ADDRESS_COMPANY,ADDRESS_REGION:ADDRESS_REGION,ADDRESS_TOWN:ADDRESS_TOWN,ADDRESS_POSTAL_CODE:ADDRESS_POSTAL_CODE,ADDRESS_COUNTRY_CODE:ADDRESS_COUNTRY_CODE,ADDRESS_PHONE_NUMBER:ADDRESS_PHONE_NUMBER,CHECKOUT_SHIPPING_METHOD:CHECKOUT_SHIPPING_METHOD,CHECKOUT_GIFT:CHECKOUT_GIFT,CHECKOUT_GIFT_MESSAGE_CHECKBOX:CHECKOUT_GIFT_MESSAGE_CHECKBOX,CHECKOUT_GIFT_MESSAGE:CHECKOUT_GIFT_MESSAGE,CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX:CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX,CHECKOUT_GIFT_INSTRUCTIONS:CHECKOUT_GIFT_INSTRUCTIONS,CHECKOUT_SHIPPING_SUBMIT:CHECKOUT_SHIPPING_SUBMIT,CHECKOUT_PAYMENT_METHOD:CHECKOUT_PAYMENT_METHOD,CHECKOUT_PAYMENT_CARD_HOLDER:CHECKOUT_PAYMENT_CARD_HOLDER,CHECKOUT_PAYMENT_CARD:CHECKOUT_PAYMENT_CARD,CHECKOUT_PAYMENT_EXPIRATION:CHECKOUT_PAYMENT_EXPIRATION,CHECKOUT_PAYMENT_CVC:CHECKOUT_PAYMENT_CVC,CHECKOUT_PAYMENT_GIFTCARD_CODE:CHECKOUT_PAYMENT_GIFTCARD_CODE,CHECKOUT_PAYMENT_GIFTCARD_PIN:CHECKOUT_PAYMENT_GIFTCARD_PIN,CHECKOUT_BILLING_SAME_SHIPPING:CHECKOUT_BILLING_SAME_SHIPPING,CHECKOUT_BILLING_TAX:CHECKOUT_BILLING_TAX,CHECKOUT_PAYMENT_SUBMIT:CHECKOUT_PAYMENT_SUBMIT,CHECKOUT_SAMPLES_RADIO:CHECKOUT_SAMPLES_RADIO,CHECKOUT_SAMPLES_SUBMIT:CHECKOUT_SAMPLES_SUBMIT,CHECKOUT_REVIEW_TOTAL:CHECKOUT_REVIEW_TOTAL,CHECKOUT_REVIEW_TOS_CHECKBOX:CHECKOUT_REVIEW_TOS_CHECKBOX,CHECKOUT_REVIEW_SUBMIT:CHECKOUT_REVIEW_SUBMIT,CONFIRMATION_ACCOUNT_BUTTON:CONFIRMATION_ACCOUNT_BUTTON}),TYPE={FADE:"fade",SHIFT_IN_DOWN:"shiftInDown",SHIFT_IN_LEFT:"shiftInLeft",SLIDE_DOWN:"slideDown",SLIDE_RIGHT:"slideRight",SLOW_FADE:"slowFade",ZOOM:"zoom"},TRANSITIONS=/*#__PURE__*/Object.freeze({__proto__:null,TYPE:TYPE}),HTML={A:"a"},KEYBOARD_CODES={ENTER:13,ESCAPE:27},LABELS={AESOP:"Aesop"},constants={BREAKPOINTS:BREAKPOINTS,COLORS:COLORS,GOOGLE_MAPS:GOOGLE_MAPS,HEADING:HEADING,HTML:HTML,HYPERLINK_STYLE_TYPES:HYPERLINK_STYLE_TYPES,KEYBOARD_CODES:KEYBOARD_CODES,LABELS:LABELS,STORES:STORES,TEST_REFS:TEST_REFS,TRANSITIONS:TRANSITIONS},useEscapeKeyListener=function(e){(0,_react.useEffect)(function(){var t=function(t){return t.keyCode===KEYBOARD_CODES.ESCAPE&&e(t),t};return"undefined"!=typeof document&&document.addEventListener("keydown",t,!0),function(){"undefined"!=typeof document&&document.removeEventListener("keydown",t,!0)}},[e])},loadGoogleMapsAsync=function(e){return new Promise(function(t){e.load(function(e){t(e)})})},useGoogleMap=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{libraries:["places"]},a=(0,_react.useState)(null),n=_slicedToArray(a,2),l=n[0],i=n[1],o=(0,_react.useState)(!1),r=_slicedToArray(o,2),s=r[0],d=r[1];return(0,_react.useEffect)(function(){var a=/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(){var n,l,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d(!0),!(window&&window.google)){a.next=3;break}return a.abrupt("return");case 3:return n=t.languageCode,l=t.libraries,o=t.regionCode,_googleMaps["default"].KEY=e,_googleMaps["default"].LIBRARIES=l,n&&(_googleMaps["default"].LANGUAGE=n),o&&(_googleMaps["default"].REGION=o),a.t0=i,a.next=11,loadGoogleMapsAsync(_googleMaps["default"]);case 11:a.t1=a.sent,(0,a.t0)(a.t1),d(!1);case 14:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();a()},[]),{googleMap:l,isLoading:s}},useHasMounted=function(){var e=(0,_react.useState)(!1),t=_slicedToArray(e,2),a=t[0],n=t[1];return(0,_react.useEffect)(function(){return n(!0),function(){n(!1)}},[a]),a},windowIsDefined="undefined"!=typeof window,useImageTransition=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:600,n=(0,_react.useState)({}),l=_slicedToArray(n,2),i=l[0],o=l[1],r=(0,_react.useState)(!1),s=_slicedToArray(r,2),d=s[0],u=s[1],c=(0,_react.useRef)(null);return(0,_react.useEffect)(function(){var n=t.current||{};u(!1);var l=function(){u(!0)};return windowIsDefined&&t.current&&(c.current=window.setTimeout(function(){o(e),n.complete?l():n.addEventListener("load",l)},a)),function(){windowIsDefined&&window.clearTimeout(c.current),n.removeEventListener("load",l)}},[a,e,t]),[i,d]},hasIntersectionObserver="IntersectionObserver"in window||"IntersectionObserverEntry"in window||"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,useOnScreen=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"0px",n=(0,_react.useState)(!1),l=_slicedToArray(n,2),i=l[0],o=l[1];return(0,_react.useEffect)(function(){if(null!==e&&void 0!==e&&e.current){var n=null,l=e.current;return hasIntersectionObserver?(n=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&o(e.isIntersecting)})},{rootMargin:a,threshold:t}),n.observe(l)):o(!0),function(){hasIntersectionObserver&&n.unobserve(l)}}},[e,a,t]),i},useOverflowHidden=function(e){var t=(0,_react.useState)(!1),a=_slicedToArray(t,2),n=a[0],l=a[1],i=(0,_react.useCallback)(function(){"undefined"!=typeof document&&"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden",l(!0))},[]),o=(0,_react.useCallback)(function(){"undefined"!=typeof document&&n&&(document.body.style.overflow="unset")},[n]);(0,_react.useEffect)(function(){return e?i():o(),function(){o()}},[i,e,o])},useProductDetail=function(e){var t=(0,_react.useState)(e),a=_slicedToArray(t,2),n=a[0],l=a[1],i=(0,_react.useCallback)(function(e){var t=e.description,a=e.id,n=e.variantOptions,i=e.cartDisclaimer,o=e.definitionList,r=e.ingredients,s=e.keyIngredient,d=e.productName;l({description:t,id:a,variantOptions:n,cartDisclaimer:i,definitionList:o,ingredients:r,keyIngredient:s,productName:d})},[]);return(0,_react.useEffect)(function(){i(e)},[e,i]),{productDetail:n,setProductDetail:i}},isBrowser="undefined"!=typeof window&&"undefined"!=typeof window.document,useScript=function(e){var t=e.src,a=e.id,n=e.dataSet,l=e.async,i=e.defer,o=e.onLoad,r=e.checkForExisting,s=(0,_react.useState)(!0),d=_slicedToArray(s,2),u=d[0],c=d[1],m=(0,_react.useState)(null),f=_slicedToArray(m,2),p=f[0],h=f[1],g=(0,_react.useRef)(0);return g.current+=1,(0,_react.useEffect)(function(){if(isBrowser){if(void 0===r||r){var e=document.querySelectorAll("script[src=\"".concat(t,"\"]"));if(0<e.length)return void c(!1)}var s=document.createElement("script");s.src=t,s.async=void 0===l||l,s.id=a,s.defer=void 0!==i&&i,n&&Object.keys(n).forEach(function(e){s.dataset[e]=n[e]});// Object.keys(attributes).forEach(key => {
//   if (script[key] === undefined) {
//     script.setAttribute(key, attributes[key]);
//   } else {
//     script[key] = attributes[key];
//   }
// });
var d=function(){c(!1),o&&o()},u=function(e){h(e)};return s.addEventListener("load",d),s.addEventListener("error",u),document.body.appendChild(s),function(){s.removeEventListener("load",d),s.removeEventListener("error",u),document.body.removeChild(s)};// eslint-disable-next-line react-hooks/exhaustive-deps
}},[t]),[u,p]},defaultValues={loginAndCartTheme:"dark",navigationAndLogoTheme:"dark",setLoginAndCartTheme:function(){},setNavigationAndLogoTheme:function(){}},ThemeContext=(0,_react.createContext)(defaultValues),ThemeContextProvider=ThemeContext.Provider,useThemeContext=function(){return(0,_react.useContext)(ThemeContext)},useTheme=function(e){var t=e.navigationAndLogoTheme,a=e.loginAndCartTheme,n=(0,_react.useState)(a||defaultValues.loginAndCartTheme),l=_slicedToArray(n,2),i=l[0],o=l[1],r=(0,_react.useState)(t||defaultValues.navigationAndLogoTheme),s=_slicedToArray(r,2),d=s[0],u=s[1];return{loginAndCartTheme:i,navigationAndLogoTheme:d,setLoginAndCartTheme:o,setNavigationAndLogoTheme:u}},useVariantSelect=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[],t=(0,_react.useState)(e[0]),a=_slicedToArray(t,2),n=a[0],l=a[1],i=(0,_react.useCallback)(function(e){l(e)},[]);return{onVariantChange:function(e,t){e.persist();var a=e.target.value,n=find_1(t,{sku:a})||null;i(n)},selectedVariant:n,setSelectedVariant:i,variants:e}},now=function(){return _root.Date.now()},now_1=now,FUNC_ERROR_TEXT$1="Expected a function",nativeMax$1=Math.max,nativeMin=Math.min;/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(e,t,a){function n(t){var a=g,n=_;return g=_=void 0,m=t,b=e.apply(n,a),b}function l(e){// Invoke the leading edge.
return m=e,E=setTimeout(r,t),f?n(e):b}function i(e){var a=e-C,n=e-m,l=t-a;return p?nativeMin(l,y-n):l}function o(e){var a=e-C,n=e-m;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===C||a>=t||0>a||p&&n>=y}function r(){var e=now_1();return o(e)?s(e):void(// Restart the timer.
E=setTimeout(r,i(e)))}function s(e){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return(E=void 0,h&&g)?n(e):(g=_=void 0,b)}function d(){void 0!==E&&clearTimeout(E),m=0,g=C=_=E=void 0}function u(){return void 0===E?b:s(now_1())}function c(){var e=now_1(),a=o(e);if(g=arguments,_=this,C=e,a){if(void 0===E)return l(C);if(p)return clearTimeout(E),E=setTimeout(r,t),n(C)}return void 0===E&&(E=setTimeout(r,t)),b}var m=0,f=!1,p=!1,h=!0,g,_,y,b,E,C;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$1);return t=toNumber_1(t)||0,isObject_1(a)&&(f=!!a.leading,p="maxWait"in a,y=p?nativeMax$1(toNumber_1(a.maxWait)||0,t):y,h="trailing"in a?!!a.trailing:h),c.cancel=d,c.flush=u,c}var debounce_1=debounce,windowIsDefined$1="undefined"!=typeof window,useWindowHasResized=function(e){var t=(0,_react.useState)({height:0,width:0}),a=_slicedToArray(t,2),n=a[0],l=a[1];return(0,_react.useEffect)(function(){var t=debounce_1(function(){l({height:windowIsDefined$1?window.innerHeight:0,width:windowIsDefined$1?window.innerWidth:0}),e&&e()},200);return windowIsDefined$1&&window.addEventListener("resize",t),function(){windowIsDefined$1&&window.removeEventListener("resize",t)}}),n},customHooks={useEscapeKeyListener:useEscapeKeyListener,useHasMounted:useHasMounted,useGoogleMaps:useGoogleMap,useOnScreen:useOnScreen,useOverflowHidden:useOverflowHidden,useProductDetail:useProductDetail,useImageTransition:useImageTransition,useScript:useScript,useTheme:useTheme,useVariantSelect:useVariantSelect,useWindowHasResized:useWindowHasResized},initialState$1={actionTypes:{},dispatch:function(){},hasError:!1,isLoading:!1,isUpdateSuccessful:!1,onClick:function(){}},AddToCartContext=(0,_react.createContext)(initialState$1),useAddToCartContext=function(){return(0,_react.useContext)(AddToCartContext)},AddToCartContextProvider=function(e){var t=e.children,a=e.onClick;return _react["default"].createElement(AddToCartContext.Provider,{value:useAddToCart(a)},t)};AddToCartContextProvider.propTypes={children:_propTypes["default"].any,/**
    A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
    for an example. ___Required___
   */onClick:_propTypes["default"].func};var defaultValues$1={googleMaps:null,isLoading:!1},GoogleMapsContext=(0,_react.createContext)(defaultValues$1),GoogleMapsContextProvider=function(e){var t=e.apiKey,a=e.children,n=e.options;return _react["default"].createElement(GoogleMapsContext.Provider,{value:useGoogleMap(t,n)},a)};GoogleMapsContextProvider.propTypes={apiKey:_propTypes["default"].string,children:_propTypes["default"].any,options:_propTypes["default"].shape({libraries:_propTypes["default"].arrayOf(_propTypes["default"].string),regionCode:_propTypes["default"].string,languageCode:_propTypes["default"].string})};var useGoogleMapsContext=function(){return(0,_react.useContext)(GoogleMapsContext)},defaultValues$2={productDetail:{description:"",id:"",variantOptions:[],cartDisclaimer:"",definitionList:[],ingredients:"",keyIngredient:"",productName:""}},ProductDetailContext=(0,_react.createContext)(defaultValues$2),ProductDetailContextProvider=function(e){var t=e.children,a=e.product;return _react["default"].createElement(ProductDetailContext.Provider,{value:useProductDetail(a)},t)};ProductDetailContextProvider.propTypes={children:_propTypes["default"].any,product:_propTypes["default"].shape({description:_propTypes["default"].string,id:_propTypes["default"].string,variantOptions:_propTypes["default"].array,cartDisclaimer:_propTypes["default"].string,definitionList:_propTypes["default"].arrayOf(_propTypes["default"].shape({term:_propTypes["default"].string,description:_propTypes["default"].string})),ingredients:_propTypes["default"].string,keyIngredient:_propTypes["default"].string,productName:_propTypes["default"].string.isRequired})};var useProductDetailContext=function(){return(0,_react.useContext)(ProductDetailContext)},defaultValues$3={onVariantChange:function(){},selectedVariant:null,setSelectedVariant:function(){},variantOptions:[]},VariantSelectContext=(0,_react.createContext)(defaultValues$3),VariantSelectContextProvider=function(e){var t=e.children,a=e.variants;return _react["default"].createElement(VariantSelectContext.Provider,{value:useVariantSelect(a)},t)};VariantSelectContextProvider.propTypes={children:_propTypes["default"].any,variants:_propTypes["default"].arrayOf(_propTypes["default"].shape({size:_propTypes["default"].string.isRequired,sku:_propTypes["default"].string.isRequired,price:_propTypes["default"].string.isRequired,image:_propTypes["default"].shape({altText:_propTypes["default"].string,sizes:_propTypes["default"].shape({large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string})})}))};var useVariantSelectContext=function(){return(0,_react.useContext)(VariantSelectContext)},contexts={AddToCartContextProvider:AddToCartContextProvider,useAddToCartContext:useAddToCartContext,GoogleMapsContextProvider:GoogleMapsContextProvider,useGoogleMapsContext:useGoogleMapsContext,ProductDetailContextProvider:ProductDetailContextProvider,useProductDetailContext:useProductDetailContext,ThemeContextProvider:ThemeContextProvider,useThemeContext:useThemeContext,VariantSelectContextProvider:VariantSelectContextProvider,useVariantSelectContext:useVariantSelectContext},styles$2={base:"Button-module_base__3aZlL",blockStyle:"Button-module_blockStyle__3UjpG",dark:"Button-module_dark__39IaJ",alternate:"Button-module_alternate__feDv-",light:"Button-module_light__3pPaS",disabled:"Button-module_disabled__2hS0q"},Button=(0,_react.forwardRef)(function(e,t){var a=e.children,n=e.className,l=e.dataTestRef,i=e.id,o=e.isAlternate,r=e.isEnabled,s=e.isInline,d=e.onClick,u=e.tabIndex,c=e.title,m=e.type,f=e.theme,p=(0,_classnames["default"])(styles$2.base,_defineProperty({},styles$2.alternate,o),_defineProperty({},styles$2.blockStyle,!s),_defineProperty({},styles$2.disabled,!r),_defineProperty({},styles$2.inlineStyle,s),styles$2[f],n);return _react["default"].createElement("button",{className:p,"data-test-ref":l,disabled:!r,id:i,onClick:d,ref:t,tabIndex:u,title:c,type:m},a)});Button.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool,isEnabled:_propTypes["default"].bool,isInline:_propTypes["default"].bool,onClick:_propTypes["default"].func,tabIndex:_propTypes["default"].number,title:_propTypes["default"].string.isRequired,type:_propTypes["default"].oneOf(["button","reset","submit"]),theme:_propTypes["default"].oneOf(["dark","light"])},Button.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,id:void 0,isAlternate:!1,isEnabled:!0,isInline:!1,onClick:void 0,tabIndex:void 0,title:void 0,type:"button",theme:"dark"};var styles$3={base:"Loading-module_base__11pIy",small:"Loading-module_small__2H7s_",isLoading:"Loading-module_isLoading__2jmYF",dot:"Loading-module_dot__2jmbK",dark:"Loading-module_dark__2DSO5",light:"Loading-module_light__3WGPG",fadeInOut:"Loading-module_fadeInOut__2NvtY"},Loading=function(e){var t=e.className,a=e.isLoading,n=e.small,l=e.theme,i=(0,_classnames["default"])(styles$3.base,(o={},_defineProperty(o,styles$3.isLoading,a),_defineProperty(o,styles$3.small,n),o),styles$3[l],t),o;return _react["default"].createElement("span",{className:i},_react["default"].createElement("span",{className:styles$3.dot}),_react["default"].createElement("span",{className:styles$3.dot}),_react["default"].createElement("span",{className:styles$3.dot}))};Loading.propTypes={className:_propTypes["default"].string,isLoading:_propTypes["default"].bool.isRequired,small:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Loading.defaultProps={className:void 0,isLoading:void 0,small:!1,theme:"dark"};var styles$4={base:"AddToCartButton-module_base__37_2I",fullWidth:"AddToCartButton-module_fullWidth__rn5PM",loading:"AddToCartButton-module_loading__vyoP4",showSuccessMessage:"AddToCartButton-module_showSuccessMessage__3XSD_","slide-up":"AddToCartButton-module_slide-up__3W-bU",label:"AddToCartButton-module_label__24I08",hideLabel:"AddToCartButton-module_hideLabel__1UwVn"},AddToCartButton=function(e){var t=e.className,a=e.copy,n=e.dataTestRef,l=e.isEnabled,i=e.isFullWidth,o=e.theme,r=useAddToCartContext(),s=useProductDetailContext(),d=s.productDetail,u=useVariantSelectContext(),c=u.selectedVariant;if(!d)return null;var m=d.productName,f=c.price,p=c.sku,h=(0,_classnames["default"])(styles$4.base,_defineProperty({},styles$4.fullWidth,i),t);if(!p||!f){var g,_;return _react["default"].createElement(Button,{className:h,dataTestRef:n,isAlternate:!0,isEnabled:!1,onClick:function(){},theme:o,title:null===(g=a.outOfStock)||void 0===g?void 0:g.title},null===(_=a.outOfStock)||void 0===_?void 0:_.label)}var y=r.hasError,b=r.isLoading,E=r.isUpdateSuccessful,C="".concat(a.cartAction," \u2014 ").concat(f),T="".concat(m," ").concat(a.updateNotification),N=!b&&E,k=(0,_classnames["default"])(styles$4.label,_defineProperty({},styles$4.hideLabel,b),_defineProperty({},styles$4.showSuccessMessage,N));return y&&console.error("updateError"),_react["default"].createElement(Button,{className:h,dataTestRef:n,isAlternate:!0,isEnabled:!b&&f&&p&&l,onClick:function(){var e=r.actionTypes,t=r.dispatch,a=r.onClick;a(p,t,e)},theme:o,title:C},b&&_react["default"].createElement(Loading,{className:styles$4.loading,"data-test-ref":"".concat(n,"_UPDATING"),isLoading:!0,theme:"dark"===o?"light":"dark"}),_react["default"].createElement("span",{className:k,"data-test-ref":N?"".concat(n,"_SUCCESS"):void 0},_react["default"].createElement("span",null,T),_react["default"].createElement("span",null,C)))};AddToCartButton.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({cartAction:_propTypes["default"].string,updateNotification:_propTypes["default"].string,outOfStock:_propTypes["default"].shape({label:_propTypes["default"].string,title:_propTypes["default"].string})}),dataTestRef:_propTypes["default"].string,isEnabled:_propTypes["default"].bool,isFullWidth:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},AddToCartButton.defaultProps={className:void 0,copy:{cartAction:"Add to your cart",updateNotification:"added to your cart",outOfStock:{label:"Out of Stock",title:"Out of stock"}},dataTestRef:void 0,isEnabled:!0,isFullWidth:!0,theme:"dark"};/** Error message constants. */var FUNC_ERROR_TEXT$2="Expected a function";/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function throttle(e,t,a){var n=!0,l=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$2);return isObject_1(a)&&(n="leading"in a?!!a.leading:n,l="trailing"in a?!!a.trailing:l),debounce_1(e,t,{leading:n,maxWait:t,trailing:l})}var throttle_1=throttle,styles$5={base:"Heading-module_base__Afh6b",dark:"Heading-module_dark__3xDuY",light:"Heading-module_light__O5PRI",noTopMargin:"Heading-module_noTopMargin__2Zfkb",flush:"Heading-module_flush__229Fy",serifFont:"Heading-module_serifFont__pIB5u",mediumWeightFont:"Heading-module_mediumWeightFont__3u5dB",xXSmall:"Heading-module_xXSmall__1VQgr",xSmall:"Heading-module_xSmall__3AWRl",small:"Heading-module_small__3Aeb8",medium:"Heading-module_medium__5lYPh",large:"Heading-module_large__2BJbn",xLarge:"Heading-module_xLarge__2F_YR"},Heading=function(e){var t=e.children,a=e.className,n=e.hasMediumWeightFont,l=e.hasSerifFont,i=e.hasTopMargin,o=e.id,r=e.isFlush,s=e.level,d=e.size,u=e.theme,c=(0,_classnames["default"])(styles$5.base,_defineProperty({},styles$5.noTopMargin,!i),_defineProperty({},styles$5.flush,r),_defineProperty({},styles$5.serifFont,l),_defineProperty({},styles$5.mediumWeightFont,n),styles$5[d],styles$5[u],a);return _react["default"].createElement("h".concat(s),{className:c,id:o},t)};Heading.propTypes={children:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,hasMediumWeightFont:_propTypes["default"].bool,hasSerifFont:_propTypes["default"].bool,hasTopMargin:_propTypes["default"].bool,id:_propTypes["default"].string,isFlush:_propTypes["default"].bool,level:_propTypes["default"].oneOf(["1","2","3","4","5","6"]).isRequired,size:_propTypes["default"].oneOf(["xXSmall","xSmall","small","medium","large","xLarge"]).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},Heading.defaultProps={children:void 0,className:void 0,hasMediumWeightFont:!1,hasSerifFont:!1,hasTopMargin:!0,id:void 0,isFlush:!1,level:void 0,size:void 0,theme:"dark"};/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(e){return e!==e}var _baseIsNaN=baseIsNaN;/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(e,t,a){for(var n=a-1,l=e.length;++n<l;)if(e[n]===t)return n;return-1}var _strictIndexOf=strictIndexOf;/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(e,t,a){return t===t?_strictIndexOf(e,t,a):_baseFindIndex(e,_baseIsNaN,a)}var _baseIndexOf=baseIndexOf,stringTag$2="[object String]";/** `Object#toString` result references. */ /**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(e){return"string"==typeof e||!isArray_1(e)&&isObjectLike_1(e)&&_baseGetTag(e)==stringTag$2}var isString_1=isString;/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */function baseValues(e,t){return _arrayMap(t,function(t){return e[t]})}var _baseValues=baseValues;/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */function values(e){return null==e?[]:_baseValues(e,keys_1(e))}var values_1=values,nativeMax$2=Math.max;/* Built-in method references for those with the same name as other `lodash` methods. */ /**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */function includes(e,t,a,n){e=isArrayLike_1(e)?e:values_1(e),a=a&&!n?toInteger_1(a):0;var l=e.length;return 0>a&&(a=nativeMax$2(l+a,0)),isString_1(e)?a<=l&&-1<e.indexOf(t,a):!!l&&-1<_baseIndexOf(e,t,a)}var includes_1=includes,EXTERNAL_BUTTON_LINK$1=EXTERNAL_BUTTON_LINK,EXTERNAL_NO_ICON_BUTTON_LINK$1=EXTERNAL_NO_ICON_BUTTON_LINK,EXTERNAL_NO_ICON_TEXT_LINK$1=EXTERNAL_NO_ICON_TEXT_LINK,EXTERNAL_TEXT_LINK$1=EXTERNAL_TEXT_LINK,INTERNAL_BUTTON_LINK$1=INTERNAL_BUTTON_LINK,INTERNAL_NO_ICON_TEXT_LINK$1=INTERNAL_NO_ICON_TEXT_LINK,INTERNAL_TEXT_LINK$1=INTERNAL_TEXT_LINK,checkIsInlineFromStyle=function(e){var t=includes_1([EXTERNAL_NO_ICON_TEXT_LINK$1,EXTERNAL_TEXT_LINK$1,INTERNAL_NO_ICON_TEXT_LINK$1,INTERNAL_TEXT_LINK$1],e);return!!t},checkIsExternalFromStyle=function(e){var t=includes_1([EXTERNAL_BUTTON_LINK$1,EXTERNAL_NO_ICON_BUTTON_LINK$1,EXTERNAL_NO_ICON_TEXT_LINK$1,EXTERNAL_TEXT_LINK$1],e);return!!t},hasIconFromStyle=function(e){return!!includes_1([EXTERNAL_BUTTON_LINK$1,EXTERNAL_TEXT_LINK$1,INTERNAL_BUTTON_LINK$1,INTERNAL_TEXT_LINK$1],e)},getTargetType=function(e){return e?"_blank":"_self"},styles$6={base:"Hyperlink-module_base__uoaww",icon:"Hyperlink-module_icon__1hgGy",blockStyle:"Hyperlink-module_blockStyle__3pIk6",hasIcon:"Hyperlink-module_hasIcon__1893y",dark:"Hyperlink-module_dark__3QzFC",alternate:"Hyperlink-module_alternate__2FgM_",light:"Hyperlink-module_light__6lcpR",center:"Hyperlink-module_center__2bv1X",left:"Hyperlink-module_left__3BZhR",right:"Hyperlink-module_right__yaOnj"},Hyperlink=function(e){var t=e.children,a=e.className,n=e.dataTestRef,l=e.hasTargetInNewWindow,i=e.isAlternate,o=e.isDownload,r=e.style,s=e.textAlign,d=e.theme,u=e.title,c=e.url,m=checkIsInlineFromStyle(r),f=checkIsExternalFromStyle(r),p=hasIconFromStyle(r),h=getTargetType(l),g=(0,_classnames["default"])(styles$6.base,_defineProperty({},styles$6.blockStyle,!m),_defineProperty({},styles$6.hasIcon,p),_defineProperty({},styles$6.alternate,i),styles$6[s],styles$6[d],a),_="";return _=f?"rightUpArrow":"rightArrow",_react["default"].createElement("a",{className:g,"data-test-ref":n,download:o,href:c,target:h,title:u},t,p&&_react["default"].createElement(_react["default"].Fragment,null," ",_react["default"].createElement("i",{"aria-hidden":"true",className:styles$6.icon},_react["default"].createElement(Icon,{height:10,name:_,theme:d,width:10}))))};Hyperlink.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,hasTargetInNewWindow:_propTypes["default"].bool,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool,isDownload:_propTypes["default"].bool,style:_propTypes["default"].oneOf(["External Button Link","External No Icon Button Link","External No Icon Link","External Text Link","Internal Button Link","Internal No Icon Button Link","Internal No Icon Link","Internal Text Link"]),textAlign:_propTypes["default"].oneOf(["center","left","right"]),theme:_propTypes["default"].oneOf(["dark","light"]),title:_propTypes["default"].string,type:_propTypes["default"].oneOf(["Relative","Absolute"]),url:_propTypes["default"].string.isRequired},Hyperlink.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,hasTargetInNewWindow:!1,id:void 0,isAlternate:void 0,isDownload:void 0,style:"Internal No Icon Link",textAlign:"left",theme:"dark",title:void 0,type:void 0,url:void 0};var styles$7={base:"Audio-module_base__zNk7y",disabled:"Audio-module_disabled__bft9W",header:"Audio-module_header__3AUod",artistName:"Audio-module_artistName__IbAOH",waveContainer:"Audio-module_waveContainer__34_M3",loading:"Audio-module_loading__fp-Rx",waveform:"Audio-module_waveform__3u9B9",footer:"Audio-module_footer__3On5G",time:"Audio-module_time__1Cu68",controls:"Audio-module_controls__1nOu0",playPauseButton:"Audio-module_playPauseButton__2rI4q",orange:"Audio-module_orange__2zPkg",green:"Audio-module_green__1q56H",blue:"Audio-module_blue__3pLhy",iconPlay:"Audio-module_iconPlay__KVSSy",iconPause:"Audio-module_iconPause__3-Chm",icon:"Audio-module_icon__3QD4U",seekForward:"Audio-module_seekForward__U9wlu",seekBackward:"Audio-module_seekBackward__WBdab",hidden:"Audio-module_hidden__2QHnj",download:"Audio-module_download__1LF8K",downloadButton:"Audio-module_downloadButton__O027T",downloadButtonIcon:"Audio-module_downloadButtonIcon__2Iiu8"},Audio=function(e){function t(){v(function(e){return!e}),m.current.playPause()}function a(){t()}var n=e.artistName,l=e.audioUrl,i=e.className,o=e.copy,r=e.hasAutoPlay,s=e.id,d=e.progressColor,u=e.trackTitle,c=(0,_react.useRef)(null),m=(0,_react.useRef)(null),f=(0,_react.useRef)(null),p=(0,_react.useState)(0),h=_slicedToArray(p,2),g=h[0],_=h[1],y=(0,_react.useState)(!0),b=_slicedToArray(y,2),E=b[0],C=b[1],T=(0,_react.useState)(!1),N=_slicedToArray(T,2),k=N[0],v=N[1],S=(0,_react.useState)(0),I=_slicedToArray(S,2),x=I[0],A=I[1];(0,_react.useEffect)(function(){var e=function(){if("green"===d)return HIGHLIGHT_GREEN;return"blue"===d?HIGHLIGHT_BLUE:HIGHLIGHT_ORANGE};if(c.current){m.current=_wavesurfer["default"].create({backend:"MediaElement",barGap:2,barWidth:1,container:c.current,cursorColor:"transparent",cursorWidth:1,height:80,progressColor:e(),responsive:!0,skipLength:30,waveColor:GREY_60}),m.current.load(f.current);var a=throttle_1(function(e){A(e)},1e3),n=function(){_(m.current.getDuration())},l=function(){C(!1),n(),r&&t()};return m.current.on("audioprocess",a),m.current.on("waveform-ready",l),function(){m.current.unAll(),m.current.destroy()}}},[d,r]);var w=(0,_classnames["default"])(styles$7.base,_defineProperty({},styles$7.disabled,E),styles$7[d],i);return _react["default"].createElement("div",{className:w,id:s},(n||u)&&_react["default"].createElement("header",{className:styles$7.header},_react["default"].createElement(Heading,{className:styles$7.artistName,isFlush:!0,level:"3",size:"xXSmall"},n),_react["default"].createElement(Heading,{hasSerifFont:!0,isFlush:!0,level:"4",size:"medium"},u)),_react["default"].createElement("div",{className:styles$7.waveContainer},_react["default"].createElement(Loading,{className:styles$7.loading,isLoading:E}),_react["default"].createElement("div",{className:styles$7.waveform,ref:c}),_react["default"].createElement("audio",{ref:f,src:l})),_react["default"].createElement("footer",{className:styles$7.footer},_react["default"].createElement("time",{className:(0,_classnames["default"])(styles$7.time,_defineProperty({},styles$7.disabled,E))},_moment["default"].utc(1e3*x).format("mm:ss")," /"," ",_moment["default"].utc(1e3*g).format("mm:ss")),_react["default"].createElement("div",{className:styles$7.controls},_react["default"].createElement(function(){return _react["default"].createElement(Button,{className:styles$7.seekForward,isEnabled:!E,isInline:!0,onClick:function(){m.current.skipForward()},title:o.seekForward},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(styles$7.icon,_defineProperty({},styles$7.disabled,E)),height:20,name:"seek",width:20}))},null),_react["default"].createElement(function(){return _react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$7.playPauseButton,_defineProperty({},styles$7.disabled,E)),isEnabled:!E,isInline:!0,onClick:a,title:E?o.loading:k?o.pause:o.play},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(styles$7.iconPlay,_defineProperty({},styles$7.hidden,k),_defineProperty({},styles$7.disabled,E)),height:15,name:"play",theme:"dark",width:15}),_react["default"].createElement(Icon,{className:(0,_classnames["default"])(styles$7.iconPause,_defineProperty({},styles$7.hidden,!k),_defineProperty({},styles$7.disabled,E)),height:15,name:"pause",theme:"dark",width:15}))},null),_react["default"].createElement(function(){return _react["default"].createElement(Button,{className:styles$7.seekBackward,isEnabled:!E,isInline:!0,onClick:function(){m.current.skipBackward()},title:o.seekBackward},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(styles$7.icon,_defineProperty({},styles$7.disabled,E)),height:20,name:"seek",width:20}))},null)),_react["default"].createElement("div",{className:styles$7.download},_react["default"].createElement(Hyperlink,{className:styles$7.downloadButton,hasTargetInNewWindow:!0,isDownload:!0,style:EXTERNAL_NO_ICON_TEXT_LINK,title:o.downloadTitle,url:l},"".concat(o.downloadLabel," "),_react["default"].createElement(Icon,{className:styles$7.downloadButtonIcon,height:13,name:"download",width:13})))))};Audio.propTypes={audioUrl:_propTypes["default"].string,artistName:_propTypes["default"].string,className:_propTypes["default"].string,copy:_propTypes["default"].shape({loading:_propTypes["default"].string,play:_propTypes["default"].string,pause:_propTypes["default"].string,downloadLabel:_propTypes["default"].string,downloadTitle:_propTypes["default"].string,seekForward:_propTypes["default"].string,seekBackward:_propTypes["default"].string}),hasAutoPlay:_propTypes["default"].bool,id:_propTypes["default"].string,progressColor:_propTypes["default"].oneOf(["orange","green","blue"]),trackTitle:_propTypes["default"].string},Audio.defaultProps={audioUrl:void 0,artistName:void 0,className:void 0,copy:{loading:"Loading audio file",play:"Play",pause:"Pause",downloadLabel:"Download Music",downloadTitle:"Download Music",seekForward:"Seek Forward",seekBackward:"Seek Backward"},hasAutoPlay:!1,id:void 0,progressColor:"orange",trackTitle:void 0};var styles$8={base:"LinkButtonGroup-module_base__2mut8",flush:"LinkButtonGroup-module_flush__23Z-U",link:"LinkButtonGroup-module_link__E93WI",flushLink:"LinkButtonGroup-module_flushLink__H84o6",fitContent:"LinkButtonGroup-module_fitContent__1o0cj"},isReactFragment=function(e){return e.type?e.type===_react.Fragment:e===_react.Fragment},LinkButtonGroup=function(e){var t=e.children,a=e.className,n=e.hasFitContent,l=e.isFlush,i=e.textAlign,o=e.theme;if(!t||"string"==typeof t||t instanceof String)return null;var r=(0,_classnames["default"])(styles$8.base,_defineProperty({},styles$8.fitContent,n),_defineProperty({},styles$8.flush,l),a),s=(0,_classnames["default"])(styles$8.link,_defineProperty({},styles$8.flushLink,l),_defineProperty({},styles$8.fitContent,n),styles$8[i]),d=isReactFragment(t)?t.props.children:t;return _react["default"].createElement("div",{className:r},_react["default"].createElement(_react["default"].Fragment,null,_react["default"].Children.map(d,function(e){var t;return null===e?e:_react["default"].cloneElement(e,{className:"".concat((null===(t=e.props)||void 0===t?void 0:t.className)||""," ").concat(s),textAlign:i,theme:o})})))};LinkButtonGroup.propTypes={children:_propTypes["default"].oneOfType([_propTypes["default"].element,_propTypes["default"].arrayOf(_propTypes["default"].element)]),className:_propTypes["default"].string,hasFitContent:_propTypes["default"].bool,isFlush:_propTypes["default"].bool,textAlign:_propTypes["default"].oneOf(["center","left","right"]),theme:_propTypes["default"].oneOf(["dark","light"])},LinkButtonGroup.defaultProps={children:void 0,className:void 0,hasFitContent:!1,isFlush:!0,textAlign:"center",theme:"dark"};var getHeadingLevel=function(e,t){return e?t?"2":"3":t?"1":"2"},getSubHeadingLevel=function(e,t,a){return e?t?a?"3":"4":a?"2":"3":t?a?"2":"3":a?"1":"2"},styles$9={base:"SectionHeading-module_base__MQ5b-",offsetPageHeading:"SectionHeading-module_offsetPageHeading__1Bcrq",SuisseTitleFont:"SectionHeading-module_SuisseTitleFont__D854J",ZapfTitleFont:"SectionHeading-module_ZapfTitleFont__74AFB"},SectionHeading=function(e){var t=e.childrenClassNames,a=e.className,n=e.eyebrow,l=e.hasSerifFontHeading,i=e.heading,o=e.id,r=e.isFlush,s=e.isOffsetPageHeading,d=e.isPageHeading,u=e.subHeading,c=e.theme,m=e.titleFont,f=(0,_classnames["default"])(styles$9.base,_defineProperty({},styles$9.offsetPageHeading,s),a),p=(0,_classnames["default"])(t.eyebrow),h=(0,_classnames["default"])(t.heading,m&&styles$9["".concat(m,"TitleFont")]),g=(0,_classnames["default"])(t.subHeading);return _react["default"].createElement("header",{className:f,id:o},n&&_react["default"].createElement(Heading,{className:p,hasMediumWeightFont:!0,isFlush:r,level:d?"1":"2",size:"xXSmall",theme:c},n),i&&_react["default"].createElement(Heading,{className:h,hasSerifFont:l,isFlush:r,level:getHeadingLevel(n,d),size:"xLarge",theme:c},i),u&&_react["default"].createElement(Heading,{className:g,hasMediumWeightFont:!0,isFlush:r,level:getSubHeadingLevel(n,i,d),size:"xSmall",theme:c},u))};SectionHeading.propTypes={childrenClassNames:_propTypes["default"].shape({eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}),className:_propTypes["default"].string,eyebrow:_propTypes["default"].string,hasSerifFontHeading:_propTypes["default"].bool,heading:_propTypes["default"].string,id:_propTypes["default"].string,isFlush:_propTypes["default"].bool,isOffsetPageHeading:_propTypes["default"].bool,isPageHeading:_propTypes["default"].bool,subHeading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"]),titleFont:_propTypes["default"].oneOf(["Suisse","Zapf"])},SectionHeading.defaultProps={childrenClassNames:{eyebrow:void 0,heading:void 0,subHeading:void 0},className:void 0,eyebrow:void 0,hasSerifFontHeading:!1,heading:void 0,id:void 0,isFlush:!1,isOffsetPageHeading:!1,isPageHeading:!1,subHeading:void 0,theme:"dark",titleFont:void 0};var styles$a={base:"BodyCopy-module_base__1ZoAL",ctaWrapper:"BodyCopy-module_ctaWrapper__3vF4R",ctaInset:"BodyCopy-module_ctaInset__3RYNN",copy:"BodyCopy-module_copy__2K-qP",dark:"BodyCopy-module_dark__1kIgR",light:"BodyCopy-module_light__1BpzV"},BodyCopy=function(e){var t=e.childrenClassNames,a=e.className,n=e.copy,l=e.cta,i=e.eyebrow,o=e.id,r=e.hasSerifFontHeading,s=e.heading,d=e.secondaryCta,u=e.subHeading,c=e.theme,m=(0,_classnames["default"])(styles$a.base,styles$a[c],a);return _react["default"].createElement("article",{className:m,id:o},_react["default"].createElement(SectionHeading,{childrenClassNames:{eyebrow:(0,_classnames["default"])(styles$a.eyebrow,t.eyebrow),heading:(0,_classnames["default"])(styles$a.heading,t.heading),subHeading:(0,_classnames["default"])(styles$a.subHeading,t.subHeading)},eyebrow:i,hasSerifFontHeading:r,heading:s,id:o,subHeading:u,theme:c}),n&&_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$a.copy,styles$a[c])},n),_react["default"].createElement(LinkButtonGroup,{theme:c},l&&_react["default"].createElement(Hyperlink,l,l.text),d&&_react["default"].createElement(Hyperlink,d,d.text)))};BodyCopy.propTypes={childrenClassNames:_propTypes["default"].shape({eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}),className:_propTypes["default"].string,copy:_propTypes["default"].node,cta:_propTypes["default"].object,eyebrow:_propTypes["default"].string,hasSerifFontHeading:_propTypes["default"].bool,heading:_propTypes["default"].string,id:_propTypes["default"].string,secondaryCta:_propTypes["default"].object,subHeading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},BodyCopy.defaultProps={childrenClassNames:{eyebrow:void 0,heading:void 0,subHeading:void 0},className:void 0,copy:void 0,cta:void 0,eyebrow:void 0,hasSerifFontHeading:!1,heading:void 0,id:void 0,secondaryCta:void 0,subHeading:void 0,theme:"dark"};var styles$b={base:"Breadcrumbs-module_base__1qjpj",list:"Breadcrumbs-module_list__eE_Me",item:"Breadcrumbs-module_item__1Kvmk",dark:"Breadcrumbs-module_dark__1n2Ey",light:"Breadcrumbs-module_light__2PLra",link:"Breadcrumbs-module_link__2UQyz"},Breadcrumbs=function(e){var t=e.className,a=e.items,n=e.theme;if(!a||!isObjectPopulatedArray(a))return null;var l=(0,_classnames["default"])(styles$b.base,styles$b[n],t);return _react["default"].createElement("nav",{className:l},_react["default"].createElement("ul",{className:styles$b.list},a.map(function(e){return _react["default"].createElement("li",{className:styles$b.item,key:e.id},_react["default"].createElement(Hyperlink,{className:styles$b.link,id:e.id,theme:n,title:e.title,url:e.url},e.label))})))};Breadcrumbs.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({label:_propTypes["default"].string,id:_propTypes["default"].string,url:_propTypes["default"].string,title:_propTypes["default"].string})),theme:_propTypes["default"].oneOf(["dark","light"])},Breadcrumbs.defaultProps={className:void 0,items:void 0,theme:"dark"};var styles$c={heading:"BynderWidget-module_heading__3TI6o",base:"BynderWidget-module_base__2Wf5w"},BynderWidget=function(e){var t=e.className,a=e.heading,n=e.id,l=e.theme,i=useScript({src:"https://d8ejoa1fys2rk.cloudfront.net/bynder-embed/latest/bynder-embed.js",id:"bynder-widgets-js",dataSet:{accountUrl:"assetportal.aesop.com",language:"en"}}),o=_slicedToArray(i,2),r=o[0],s=o[1];if(!s){/** @TODO failed script load error */var d=(0,_classnames["default"])(styles$c.base,styles$c[l],t);return _react["default"].createElement("article",{className:d,id:n},_react["default"].createElement("h3",{className:styles$c.heading},a),_react["default"].createElement(Loading,{isLoading:r}),_react["default"].createElement("div",{"data-bynder-widget":"media-list","data-collection-id":n,"data-rows":"3"}))}};BynderWidget.propTypes={className:_propTypes["default"].string,heading:_propTypes["default"].string.isRequired,id:_propTypes["default"].string.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},BynderWidget.defaultProps={className:void 0,heading:void 0,id:void 0,theme:"dark"};var IS_VIEWPORT_SMALL_ONLY="(max-width: ".concat(SMALL.MAX_WIDTH,"px)"),IS_VIEWPORT_MEDIUM="(min-width: ".concat(MEDIUM.MIN_WIDTH,"px)"),IS_VIEWPORT_MEDIUM_ONLY="(min-width: ".concat(MEDIUM.MIN_WIDTH,"px) and (max-width: ").concat(MEDIUM.MAX_WIDTH,"px)"),IS_VIEWPORT_SMALL_MEDIUM_ONLY="(max-width: ".concat(MEDIUM.MAX_WIDTH,"px)"),IS_VIEWPORT_LARGE="(min-width: ".concat(LARGE.MIN_WIDTH,"px)"),IS_VIEWPORT_LARGE_ONLY="(min-width: ".concat(LARGE.MIN_WIDTH,"px) and (max-width: ").concat(LARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_XLARGE="(min-width: ".concat(XLARGE.MIN_WIDTH,"px)"),IS_VIEWPORT_XLARGE_ONLY="(min-width: ".concat(XLARGE.MIN_WIDTH,"px) and (max-width: ").concat(XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_LARGE_XLARGE_ONLY="(min-width: ".concat(LARGE.MIN_WIDTH,"px) and (max-width: ").concat(XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_SMALL_TO_XLARGE_ONLY="(max-width: ".concat(XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_XXLARGE="(min-width: ".concat(XXLARGE.MIN_WIDTH,"px)"),LARGE$1=LARGE,MEDIUM$1=MEDIUM,SMALL$1=SMALL,CONSTRAINT_KEYS={MIN_WIDTH:"minWidth",VIEWPORT:"viewport"},constraints=[(_ref={},_defineProperty(_ref,CONSTRAINT_KEYS.MIN_WIDTH,SMALL$1.MIN_WIDTH),_defineProperty(_ref,CONSTRAINT_KEYS.VIEWPORT,SMALL$1.VIEWPORT),_ref),(_ref2={},_defineProperty(_ref2,CONSTRAINT_KEYS.MIN_WIDTH,MEDIUM$1.MIN_WIDTH),_defineProperty(_ref2,CONSTRAINT_KEYS.VIEWPORT,MEDIUM$1.VIEWPORT),_ref2),(_ref3={},_defineProperty(_ref3,CONSTRAINT_KEYS.MIN_WIDTH,LARGE$1.MIN_WIDTH),_defineProperty(_ref3,CONSTRAINT_KEYS.VIEWPORT,LARGE$1.VIEWPORT),_ref3)],constraintsByViewport={},_ref,_ref2,_ref3;constraints.forEach(function(e){constraintsByViewport[e.viewport]=e});var getViewportForWidth=function(e){for(var t=constraints.length-1;0<=t&&e<constraints[t].minWidth;)t--;return constraints[t].viewport},ascertainIsSmallOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_ONLY).matches},ascertainIsSmallOrMediumOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_MEDIUM_ONLY).matches},ascertainIsMediumViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_MEDIUM).matches},ascertainIsMediumOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_MEDIUM_ONLY).matches},ascertainIsLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_LARGE).matches},ascertainIsLargeOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_LARGE_ONLY).matches},ascertainIsLargeOrXLargeOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_LARGE_XLARGE_ONLY).matches},ascertainIsXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XLARGE).matches},ascertainIsSmallToXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_TO_XLARGE_ONLY).matches},ascertainIsXLargeOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XLARGE_ONLY).matches},ascertainIsXXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XXLARGE).matches},viewports={CONSTRAINT_KEYS:CONSTRAINT_KEYS,constraints:constraints,constraintsByViewport:constraintsByViewport,getViewportForWidth:getViewportForWidth,ascertainIsSmallOnlyViewport:ascertainIsSmallOnlyViewport,ascertainIsSmallOrMediumOnlyViewport:ascertainIsSmallOrMediumOnlyViewport,ascertainIsMediumViewport:ascertainIsMediumViewport,ascertainIsMediumOnlyViewport:ascertainIsMediumOnlyViewport,ascertainIsLargeViewport:ascertainIsLargeViewport,ascertainIsLargeOnlyViewport:ascertainIsLargeOnlyViewport,ascertainIsLargeOrXLargeOnlyViewport:ascertainIsLargeOrXLargeOnlyViewport,ascertainIsXLargeViewport:ascertainIsXLargeViewport,ascertainIsSmallToXLargeViewport:ascertainIsSmallToXLargeViewport,ascertainIsXLargeOnlyViewport:ascertainIsXLargeOnlyViewport,ascertainIsXXLargeViewport:ascertainIsXXLargeViewport},transitions={fadeEnter:"transitions-module_fadeEnter__39Yw4",fadeEnterActive:"transitions-module_fadeEnterActive__Jhp1k",fadeEnterDone:"transitions-module_fadeEnterDone__1pN9W",fadeExit:"transitions-module_fadeExit__3yr99",fadeExitActive:"transitions-module_fadeExitActive__2at34",fadeExitDone:"transitions-module_fadeExitDone__242dB",shiftInDownEnter:"transitions-module_shiftInDownEnter__1KxQa",shiftInDownEnterActive:"transitions-module_shiftInDownEnterActive__3Cc7U",shiftInDownEnterDone:"transitions-module_shiftInDownEnterDone__1weN2",shiftInDownExit:"transitions-module_shiftInDownExit__QzfmH",shiftInDownExitActive:"transitions-module_shiftInDownExitActive__1oIXc",shiftInDownExitDone:"transitions-module_shiftInDownExitDone__38h-E",shiftInLeftEnter:"transitions-module_shiftInLeftEnter__JZlOS",shiftInLeftEnterActive:"transitions-module_shiftInLeftEnterActive__2PTyF",shiftInLeftEnterDone:"transitions-module_shiftInLeftEnterDone__29wBA",shiftInLeftExit:"transitions-module_shiftInLeftExit__3-XBX",shiftInLeftExitActive:"transitions-module_shiftInLeftExitActive__3HhM-",shiftInLeftExitDone:"transitions-module_shiftInLeftExitDone__1Scz-",slideDownEnter:"transitions-module_slideDownEnter__1ozxS",slideDownEnterActive:"transitions-module_slideDownEnterActive__19lkp",slideDownEnterDone:"transitions-module_slideDownEnterDone__1daQU",slideDownExit:"transitions-module_slideDownExit__1zFf8",slideDownExitActive:"transitions-module_slideDownExitActive__LriBR",slideDownExitDone:"transitions-module_slideDownExitDone__3NwvB",slideRightEnter:"transitions-module_slideRightEnter__3ktdD",slideRightEnterActive:"transitions-module_slideRightEnterActive__LMADo",slideRightEnterDone:"transitions-module_slideRightEnterDone__2B8eF",slideRightExit:"transitions-module_slideRightExit__3J_wV",slideRightExitActive:"transitions-module_slideRightExitActive__2PwBm",slideRightExitDone:"transitions-module_slideRightExitDone__1KOgp",slowFadeEnter:"transitions-module_slowFadeEnter__1WmWT",slowFadeEnterActive:"transitions-module_slowFadeEnterActive__2uxS0",slowFadeEnterDone:"transitions-module_slowFadeEnterDone__1OJv_",slowFadeExit:"transitions-module_slowFadeExit__pp458",slowFadeExitActive:"transitions-module_slowFadeExitActive__1HYrk",slowFadeExitDone:"transitions-module_slowFadeExitDone__1l2dO",zoomEnter:"transitions-module_zoomEnter__14hXw",zoomEnterActive:"transitions-module_zoomEnterActive__1Ix7t",zoomEnterDone:"transitions-module_zoomEnterDone__2z-Jn",zoomExit:"transitions-module_zoomExit__2YNjS",zoomExitActive:"transitions-module_zoomExitActive__2j1mx",zoomExitDone:"transitions-module_zoomExitDone__23u9a"},fade={classNames:{enter:transitions.fadeEnter,enterActive:transitions.fadeEnterActive,enterDone:transitions.fadeEnterDone,exit:transitions.fadeExit,exitActive:transitions.fadeExitActive,exitDone:transitions.fadeExitDone},timeout:500},slowFade={classNames:{enter:transitions.slowFadeEnter,enterActive:transitions.slowFadeEnterActive,enterDone:transitions.slowFadeEnterDone,exit:transitions.slowFadeExit,exitActive:transitions.slowFadeExitActive,exitDone:transitions.slowFadeExitDone},timeout:1500},shiftInLeft={classNames:{enter:transitions.shiftInLeftEnter,enterActive:transitions.shiftInLeftEnterActive,enterDone:transitions.shiftInLeftEnterDone,exit:transitions.shiftInLeftExit,exitActive:transitions.shiftInLeftExitActive,exitDone:transitions.shiftInLeftExitDone},timeout:1500},shiftInDown={classNames:{enter:transitions.shiftInDownEnter,enterActive:transitions.shiftInDownEnterActive,enterDone:transitions.shiftInDownEnterDone,exit:transitions.shiftInDownExit,exitActive:transitions.shiftInDownExitActive,exitDone:transitions.shiftInDownExitDone},timeout:1500},slideDown={classNames:{enter:transitions.slideDownEnter,enterActive:transitions.slideDownEnterActive,enterDone:transitions.slideDownEnterDone,exit:transitions.slideDownExit,exitActive:transitions.slideDownExitActive,exitDone:transitions.slideDownExitDone},timeout:500},slideRight={classNames:{enter:transitions.slideRightEnter,enterActive:transitions.slideRightEnterActive,enterDone:transitions.slideRightEnterDone,exit:transitions.slideRightExit,exitActive:transitions.slideRightExitActive,exitDone:transitions.slideRightExitDone},timeout:500},zoom={classNames:{enter:transitions.zoomEnter,enterActive:transitions.zoomEnterActive,enterDone:transitions.zoomEnterDone,exit:transitions.zoomExit,exitActive:transitions.zoomExitActive,exitDone:transitions.zoomExitDone},timeout:500},data={fade:fade,shiftInDown:shiftInDown,shiftInLeft:shiftInLeft,slideDown:slideDown,slideRight:slideRight,slowFade:slowFade,zoom:zoom},Transition=function(e){var t=e.children,a=e.hasCSSTransitionMountOnEnter,n=e.hasCSSTransitionUnmountOnExit,l=e.isActive,i=e.isActiveOnMount,o=e.type,r=useHasMounted();if(!(0,_react.isValidElement)(t))return null;var s=i?!!r:!!l;return _react["default"].createElement(_reactTransitionGroup.CSSTransition,{classNames:get_1(data[o],"classNames",""),in:s,mountOnEnter:!!a,timeout:get_1(data[o],"timeout",300),unmountOnExit:!!n},_react["default"].cloneElement(t,{className:(0,_classnames["default"])(get_1(t,"props.className",""),s?"":get_1(data[o],"classNames.enter",""))}))};Transition.propTypes={children:_propTypes["default"].oneOfType([_propTypes["default"].element]).isRequired,hasCSSTransitionMountOnEnter:_propTypes["default"].bool,hasCSSTransitionUnmountOnExit:_propTypes["default"].bool,isActive:_propTypes["default"].bool,isActiveOnMount:_propTypes["default"].bool,type:_propTypes["default"].oneOf(["fade","shiftInDown","shiftInLeft","slideDown","slideRight","slowFade","zoom"])},Transition.defaultProps={children:void 0,hasCSSTransitionMountOnEnter:void 0,hasCSSTransitionUnmountOnExit:void 0,isActive:!1,isActiveOnMount:!1,type:"fade"};var getCarouselSettings=function(e){var t=e.className,a=e.hasFlushPagination,n=e.hasFullWidthSlides,l=e.initialSlideIndex,i=e.isNextButtonActive,o=e.isPreviousButtonActive,r=e.Pagination,s=e.NextButton,d=e.PreviousButton,u=e.theme;return{appendDots:function(e){return _react["default"].createElement(r,{dots:e,fullWidth:n,hasFlushPagination:a,theme:u})},centerMode:!1,className:t,customPaging:function(){return _react["default"].createElement("div",null)},dots:!0,infinite:n,initialSlide:l,nextArrow:_react["default"].createElement(s,{isActive:i,theme:u}),prevArrow:_react["default"].createElement(d,{isActive:o,theme:u}),responsive:[{breakpoint:SMALL.MAX_WIDTH,settings:{slidesToShow:1}},{breakpoint:MEDIUM.MAX_WIDTH,settings:{slidesToShow:n?1:2}},{breakpoint:XXLARGE.MIN_WIDTH,settings:{slidesToShow:n?1:3}}],slidesToScroll:1,slidesToShow:n?1:4,speed:500,swipeToSlide:!0}},styles$d={paragraph:"Paragraph-module_paragraph__3AXc0",base:"Paragraph-module_base__2wcSK",dark:"Paragraph-module_dark__GxvVO",light:"Paragraph-module_light__yJGX7",set:"Paragraph-module_set__wOcFC"},Paragraph=function(e){var t=e.children,a=e.className,n=e.theme,l=(0,_classnames["default"])(styles$d.base,styles$d[n],a);return _react["default"].createElement("p",{className:l},t)};Paragraph.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Paragraph.defaultProps={children:void 0,className:void 0,theme:"dark"};var ParagraphSet=function(e){var t=e.children,a=e.className,n=e.theme,l=(0,_classnames["default"])(styles$d.set,styles$d[n],a);return _react["default"].createElement("div",{className:l},t)};ParagraphSet.propTypes={children:_propTypes["default"].node,className:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},ParagraphSet.defaultProps={children:void 0,className:void 0,theme:"dark"};var styles$e={base:"CarouselIntroduction-module_base__2sFJp",heading:"CarouselIntroduction-module_heading__tajC7",description:"CarouselIntroduction-module_description__XxH4y",hasFooter:"CarouselIntroduction-module_hasFooter__27iRg",ctaWrapper:"CarouselIntroduction-module_ctaWrapper__3dGj2"},CarouselIntroduction=function(e){var t=e.cta,a=e.description,n=e.eyebrow,l=e.heading,i=e.theme,o=(0,_classnames["default"])(styles$e.base,styles$e[i]);return _react["default"].createElement("div",{className:o},_react["default"].createElement(SectionHeading,{className:styles$e.heading,eyebrow:n,hasSerifFontHeading:!0,heading:l,isFlush:!0,theme:i}),a&&_react["default"].createElement(Paragraph,{className:(0,_classnames["default"])(styles$e.description,_defineProperty({},styles$e.hasFooter,t)),theme:i},a),t&&_react["default"].createElement("footer",{className:styles$e.ctaWrapper},_react["default"].createElement(Hyperlink,{style:t.style,theme:i,title:t.title,url:t.url},t.text)))};CarouselIntroduction.propTypes={cta:_propTypes["default"].shape({style:_propTypes["default"].string,title:_propTypes["default"].string,url:_propTypes["default"].string,text:_propTypes["default"].string}),description:_propTypes["default"].string,heading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"]),eyebrow:_propTypes["default"].string},CarouselIntroduction.defaultProps={cta:void 0,description:void 0,heading:void 0,theme:"dark",eyebrow:void 0};var styles$f={base:"NextButton-module_base__3zqIF",hidden:"NextButton-module_hidden__3F3MM"},NextButton=function(e){var t=e.isActive,a=e.onClick,n=e.theme;return _react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$f.base,_defineProperty({},styles$f.hidden,!t)),isInline:!0,onClick:a,theme:n,title:"next slide"},_react["default"].createElement(Icon,{height:16,name:"chevron",theme:n,width:16}))};/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */NextButton.propTypes={isActive:_propTypes["default"].bool,onClick:_propTypes["default"].func,theme:_propTypes["default"].oneOf(["dark","light"])},NextButton.defaultProps={isActive:!0,onClick:void 0,theme:"dark"};var styles$g={base:"Pagination-module_base___SWdb",list:"Pagination-module_list__2Oj5X",dark:"Pagination-module_dark__2FCbX",light:"Pagination-module_light__36LlY",flush:"Pagination-module_flush__1RBa0",bar:"Pagination-module_bar__31cQF"},Pagination=function(e){var t=e.dots,a=e.hasFlushPagination,n=e.theme;// const progress = findIndex(dots, ['props.className', 'slick-active']);
// const width = `${100 / dots.length}%`;
// const positionLeft = `${(100 / dots.length) * progress}%`;
return _react["default"].createElement("div",{className:styles$g.base},_react["default"].createElement("ul",{className:(0,_classnames["default"])(styles$g.list,styles$g[n],_defineProperty({},styles$g.flush,a))},t))};Pagination.propTypes={dots:_propTypes["default"].array,hasFlushPagination:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Pagination.defaultProps={dots:void 0,hasFlushPagination:!1,theme:"dark"};var styles$h={base:"PreviousButton-module_base__1J-Kp",hidden:"PreviousButton-module_hidden__2FSw5"},PreviousButton=function(e){var t=e.isActive,a=e.onClick,n=e.theme;return _react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$h.base,_defineProperty({},styles$h.hidden,!t)),isInline:!0,onClick:a,theme:n,title:"next slide"},_react["default"].createElement(Icon,{height:16,name:"chevron",theme:n,width:16}))};/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */PreviousButton.propTypes={isActive:_propTypes["default"].bool,onClick:_propTypes["default"].func,theme:_propTypes["default"].oneOf(["dark","light"])},PreviousButton.defaultProps={isActive:!0,onClick:void 0,theme:"dark"};var styles$i={base:"Image-module_base__18W0_",picture:"Image-module_picture__312I-",isRightAligned:"Image-module_isRightAligned__1le6V",fullBleedImage:"Image-module_fullBleedImage__1o9hJ",captionWrapper:"Image-module_captionWrapper__1y0du",caption:"Image-module_caption__2nhUA"},Image=(0,_react.forwardRef)(function(e,t){var a=e.altText,n=e.className,l=e.cta,i=e.large,o=e.medium,r=e.small,s=e.type,d=e.theme,u=(0,_classnames["default"])(_defineProperty({},styles$i.base,!l),styles$i.picture,_defineProperty({},styles$i.fullBleedImage,"componentFullBleedImage"===s),_defineProperty({},styles$i.isRightAligned,"componentSquareImage"===s),styles$i[d],n),c=_react["default"].createElement("picture",{className:u},i&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"large.minWidth"),"px)"),srcSet:i}),o&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"medium.minWidth"),"px)"),srcSet:o}),r&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"small.minWidth"),"px)"),srcSet:r}),_react["default"].createElement("img",{alt:a,ref:t}));return l?_react["default"].createElement(Hyperlink,{className:styles$i.base,hasTargetInNewWindow:l.openInANewWindow,theme:d,url:l.url},c):c});Image.propTypes={altText:_propTypes["default"].string,className:_propTypes["default"].string,cta:_propTypes["default"].object,id:_propTypes["default"].string,isFullBleedImage:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string,type:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Image.defaultProps={altText:void 0,className:void 0,cta:void 0,id:void 0,isFullBleedImage:void 0,large:void 0,medium:void 0,small:void 0,theme:"dark",type:void 0};var styles$j={heading:"Slide-module_heading__2KIs0",dark:"Slide-module_dark__JMM6u",light:"Slide-module_light__zaD4C",information:"Slide-module_information__34xfK",description:"Slide-module_description__1ZOKE",image:"Slide-module_image__1j94t",fullWidthSlide:"Slide-module_fullWidthSlide__14ez3",imageContainer:"Slide-module_imageContainer__KWlFH"},Slide=function(e){var t=e.description,a=e.heading,n=e.id,l=e.image,i=e.isFullWidthSlide,o=e.theme;return _react["default"].createElement(_react["default"].Fragment,null,(a||t)&&_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$j.information,styles$j[o]),id:n},a&&_react["default"].createElement(Heading,{className:(0,_classnames["default"])(styles$j.heading,styles$j[o]),level:"5",size:"xXSmall"},a),t&&_react["default"].createElement("div",{className:styles$j.description},t)),_react["default"].createElement("div",{className:styles$j.imageContainer},_react["default"].createElement(Image,_extends({className:(0,_classnames["default"])(styles$j.image,_defineProperty({},styles$j.fullWidthSlide,i)),theme:o},l))))};Slide.propTypes={description:_propTypes["default"].string,heading:_propTypes["default"].string,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,isFullWidthSlide:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Slide.defaultProps={description:void 0,heading:void 0,id:void 0,image:void 0,isFullWidthSlide:!1,theme:"dark"};var styles$k={base:"Carousel-module_base__2Zak0",slideWrapper:"Carousel-module_slideWrapper__nqrVO",carousel:"Carousel-module_carousel__2ILZE",item:"Carousel-module_item__2G_2x",link:"Carousel-module_link__1gv3s",mobileCarouselIntroductionWrapper:"Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X",fullWidthSlides:"Carousel-module_fullWidthSlides__2sXZx",footer:"Carousel-module_footer__NX8AO",flush:"Carousel-module_flush__qpy47",slideCounter:"Carousel-module_slideCounter__2MHc_",dark:"Carousel-module_dark__eKBpb",light:"Carousel-module_light__2WA9F",caption:"Carousel-module_caption__2q0_n"},Carousel=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.hasFlushPagination,l=e.hasFullWidthSlides,i=e.hasShowCaption,o=e.hasSlideCounter,r=e.id,s=e.initialSlideIndex,d=e.introduction,u=e.slides,c=e.theme,m=u.length,f=(0,_react.useState)(!0),p=_slicedToArray(f,2),h=p[0],g=p[1],_=(0,_react.useState)(!0),y=_slicedToArray(_,2),b=y[0],E=y[1],C=(0,_react.useState)(l),T=_slicedToArray(C,2),N=T[0],k=T[1],v=(0,_react.useState)(get_1(u[s],"caption","")),S=_slicedToArray(v,2),I=S[0],x=S[1],A=(0,_react.useState)("".concat(s+1," / ").concat(m)),w=_slicedToArray(A,2),O=w[0],R=w[1];useWindowHasResized();var P=0;/* Slide offset refers to the number of slides in view per display size,
   * and effects the offset position and Next Arrow display
   */if(P=l?1:ascertainIsSmallOnlyViewport()?1:ascertainIsMediumOnlyViewport()?2:ascertainIsLargeOrXLargeOnlyViewport()?3:4,0===m)return null;var L=ascertainIsSmallOrMediumOnlyViewport(),M=(0,_classnames["default"])(styles$k.base,_defineProperty({},styles$k.fullWidthSlides,l),styles$k[c],a),D=getCarouselSettings({className:styles$k.carousel,hasFlushPagination:n,hasFullWidthSlides:l,initialSlideIndex:s,isNextButtonActive:b,isPreviousButtonActive:N,Pagination:Pagination,NextButton:NextButton,PreviousButton:PreviousButton,theme:c}),H=d&&!L&&!l,F=H?m+1:m,B=function(e,t){if(g(!1),!l){k(0!==t),E(F-t!==P)}};return _react["default"].createElement("div",{className:M,id:r,ref:t},!H&&d&&_react["default"].createElement("aside",{className:styles$k.mobileCarouselIntroductionWrapper},_react["default"].createElement(CarouselIntroduction,{cta:d.cta,description:d.description,eyebrow:d.eyebrow,heading:d.heading,theme:c})),_react["default"].createElement(_reactSlick["default"],_extends({},D,{afterChange:function(e){g(!0),x(u[e].caption),R("".concat(e+1," of ").concat(m))},beforeChange:B}),H&&_react["default"].createElement(CarouselIntroduction,{cta:d.cta,description:d.description,eyebrow:d.eyebrow,heading:d.heading,theme:c}),u.map(function(e,t){var a=e.url,n=_objectWithoutProperties(e,["url"]);return _react["default"].createElement("div",{className:styles$k.slideWrapper,key:t},a?_react["default"].createElement(Hyperlink,{className:(0,_classnames["default"])(styles$k.item,styles$k.link),theme:c,title:"Link to ".concat(n.heading),url:a},_react["default"].createElement(Slide,_extends({},n,{isFullWidthSlide:l,theme:c}))):_react["default"].createElement("div",{className:styles$k.item,key:t},_react["default"].createElement(Slide,_extends({},n,{isFullWidthSlide:l,theme:c}))))})),(i||o)&&_react["default"].createElement("footer",{className:(0,_classnames["default"])(styles$k.footer,_defineProperty({},styles$k.flush,n))},o&&_react["default"].createElement("div",{className:styles$k.slideCounter},1<F&&O),i&&_react["default"].createElement(Transition,{isActive:h,type:"fade"},_react["default"].createElement("div",{className:styles$k.caption},I))))});Carousel.propTypes={className:_propTypes["default"].string,hasFlushPagination:_propTypes["default"].bool,hasFullWidthSlides:_propTypes["default"].bool,hasShowCaption:_propTypes["default"].bool,hasSlideCounter:_propTypes["default"].bool,id:_propTypes["default"].string,initialSlideIndex:_propTypes["default"].number,introduction:_propTypes["default"].shape({cta:_propTypes["default"].shape({style:_propTypes["default"].string,title:_propTypes["default"].string,url:_propTypes["default"].string,text:_propTypes["default"].string}),description:_propTypes["default"].string,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string}),slides:_propTypes["default"].arrayOf(_propTypes["default"].shape({caption:_propTypes["default"].string,description:_propTypes["default"].string,heading:_propTypes["default"].string,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,url:_propTypes["default"].string})),theme:_propTypes["default"].oneOf(["dark","light"])},Carousel.defaultProps={className:void 0,hasFlushPagination:!1,hasFullWidthSlides:!1,hasShowCaption:!1,hasSlideCounter:!1,id:void 0,initialSlideIndex:0,introduction:void 0,slides:[],theme:"dark"};var styles$l={base:"DefinitionList-module_base__2OnV9",term:"DefinitionList-module_term__38vy8",description:"DefinitionList-module_description__1hVLl",dark:"DefinitionList-module_dark__2bl9J",light:"DefinitionList-module_light__3a2GV",slideIn:"DefinitionList-module_slideIn__unr4R"},DefinitionList=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.isVisible,l=e.items,i=e.theme,o=(0,_classnames["default"])(styles$l.base,styles$l[i],a),r=(0,_classnames["default"])(styles$l.term,_defineProperty({},styles$l.slideIn,n)),s=(0,_classnames["default"])(styles$l.description,_defineProperty({},styles$l.slideIn,n));return isObjectPopulatedArray(l)?_react["default"].createElement("dl",{className:o,ref:t},l.filter(function(e){var t=e.description,a=e.term;return t&&a}).map(function(e){var t=e.description,a=e.id,n=e.term;return _react["default"].createElement(_react.Fragment,{key:a},_react["default"].createElement("dt",{className:r},n),_react["default"].createElement("dd",{className:s},t))})):null});DefinitionList.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({description:_propTypes["default"].node.isRequired,id:_propTypes["default"].string.isRequired,term:_propTypes["default"].node.isRequired})),theme:_propTypes["default"].oneOf(["dark","light"])},DefinitionList.defaultProps={className:void 0,isVisible:!0,items:[],theme:"dark"};var styles$m={base:"Overlay-module_base__21l1K",isVisible:"Overlay-module_isVisible__2NJpm"},Overlay=function(e){var t=e.className,a=e.isVisible,n=void 0!==a&&a,l=e.onClose;useEscapeKeyListener(l);var i=(0,_classnames["default"])(styles$m.base,_defineProperty({},styles$m.isVisible,n),t);return _react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:!!n,type:"fade"},_react["default"].createElement("div",{className:i,onClick:l,onKeyPress:function(e){e.keyCode===KEYBOARD_CODES.ESCAPE&&l()},role:"button",tabIndex:-1}))};Overlay.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func.isRequired},Overlay.defaultProps={className:void 0,isVisible:!1,onClose:void 0};var styles$n={base:"DialogBanner-module_base__1sS5X",top:"DialogBanner-module_top__jLPxl",bottom:"DialogBanner-module_bottom__2hfmb",isVisible:"DialogBanner-module_isVisible__1i46z",dark:"DialogBanner-module_dark__2cbOO",black:"DialogBanner-module_black__2sEch",contentContainer:"DialogBanner-module_contentContainer__jzerV",heading:"DialogBanner-module_heading__2qJht",message:"DialogBanner-module_message__3xWGh",warningIcon:"DialogBanner-module_warningIcon__HKWtl",closeButton:"DialogBanner-module_closeButton__2XMqf",closeIcon:"DialogBanner-module_closeIcon__1UkP7",closeContainer:"DialogBanner-module_closeContainer__3RJ-U",ctaButton:"DialogBanner-module_ctaButton__1GEq-"},DialogBanner=function(e){var t=e.className,a=e.copy,n=e.cta,l=e.hasCloseButton,i=e.heading,o=e.isVisible,r=e.message,s=e.onClose,d=e.position,u=e.theme;useEscapeKeyListener(s),useOverflowHidden(o);var c=(0,_classnames["default"])(styles$n.base,_defineProperty({},styles$n.isVisible,o),styles$n[u],styles$n[d],t);return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(Overlay,{isVisible:o,onClose:s}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:o,type:"slideDown"},_react["default"].createElement("aside",{className:c},_react["default"].createElement("div",{className:styles$n.iconContainer},_react["default"].createElement(Icon,{className:styles$n.warningIcon,height:22,name:"warning",theme:"light",width:22})),_react["default"].createElement("div",{className:styles$n.contentContainer},_react["default"].createElement(Heading,{className:styles$n.heading,level:"1",noTopMargin:!0,size:"large"},i),_react["default"].createElement(Paragraph,{className:styles$n.message},r)),_react["default"].createElement("div",{className:styles$n.closeContainer},l&&_react["default"].createElement(Button,{className:styles$n.closeButton,isInline:!0,onClick:s,title:a.closeButtonTitle},_react["default"].createElement(Icon,{className:styles$n.closeIcon,height:12,name:"close",theme:"light",width:12})),n&&n.text&&_react["default"].createElement(Hyperlink,{className:styles$n.ctaButton,dataTestRef:n.dataTestRef,id:n.id,isInline:!0,target:n.openInANewWindow?"_blank":"_self",theme:"light",title:n.title,url:n.url},n.text)))))};DialogBanner.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string}),cta:_propTypes["default"].object,hasCloseButton:_propTypes["default"].bool,isVisible:_propTypes["default"].bool,message:_propTypes["default"].string.isRequired,onClose:_propTypes["default"].func.isRequired,position:_propTypes["default"].oneOf(["top","bottom"]),theme:_propTypes["default"].oneOf(["dark","black"]),heading:_propTypes["default"].string.isRequired},DialogBanner.defaultProps={className:void 0,copy:{closeButtonTitle:"Close Dialog Banner"},cta:void 0,hasCloseButton:!0,isVisible:!1,message:void 0,onClose:void 0,position:"top",theme:"dark",heading:void 0};var styles$o={base:"Figure-module_base__2Vmj2",caption:"Figure-module_caption__187du",dark:"Figure-module_dark__1Gy-5",light:"Figure-module_light__wv1hI",captionWrapper:"Figure-module_captionWrapper__1WrIr",border:"Figure-module_border__5rGIx"},Figure=function(e){var t=e.caption,a=e.children,n=e.className,l=e.hasCaptionBorder,i=e.id,o=e.theme,r=(0,_classnames["default"])(styles$o.base,styles$o[o],_defineProperty({},styles$o.border,l&&t),n),s=(0,_classnames["default"])(styles$o.captionWrapper);return _react["default"].createElement("figure",{className:r,id:i},a,t&&_react["default"].createElement("figcaption",{className:s},_react["default"].createElement("div",{className:styles$o.caption},t)))};Figure.propTypes={caption:_propTypes["default"].any,children:_propTypes["default"].node,className:_propTypes["default"].string,hasCaptionBorder:_propTypes["default"].bool,id:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Figure.defaultProps={caption:void 0,children:void 0,className:void 0,hasCaptionBorder:!0,id:void 0,theme:"dark"};var styles$p={base:"DoubleImage-module_base__3dS_7",figure:"DoubleImage-module_figure___aWCg"},DoubleImage=function(e){var t=e.className,a=e.imageOne,n=e.imageTwo,l=e.theme,i=(0,_classnames["default"])(styles$p.base,styles$p[l],t);return _react["default"].createElement("div",{className:i},_react["default"].createElement(Figure,{caption:a.caption,className:styles$p.figure,hasCaptionBorder:!1,theme:l},_react["default"].createElement(Image,{altText:a.altText,large:a.large,medium:a.medium,small:a.small})),_react["default"].createElement(Figure,{caption:n.caption,className:styles$p.figure,hasCaptionBorder:!1,theme:l},_react["default"].createElement(Image,{altText:n.altText,large:n.large,medium:n.medium,small:n.small})))};DoubleImage.propTypes={className:_propTypes["default"].string,imageOne:_propTypes["default"].shape({altText:_propTypes["default"].string,caption:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),imageTwo:_propTypes["default"].shape({altText:_propTypes["default"].string,caption:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),theme:_propTypes["default"].oneOf(["dark","light"])},DoubleImage.defaultProps={className:void 0,imageOne:void 0,imageTwo:void 0,theme:"dark"};var styles$q={base:"FlyinPanel-module_base__1Tlwv",closeButton:"FlyinPanel-module_closeButton__1aA6Z"},FlyinPanel=function(e){var t=e.children,a=e.className,n=e.heading,l=e.isVisible,i=e.onClose,o=e.theme;useEscapeKeyListener(i),useOverflowHidden(l);var r=(0,_classnames["default"])(styles$q.base,styles$q[o],a),s=v4_1(),d=v4_1();return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(Overlay,{isVisible:l,onClose:i}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:!!l,type:"slideRight"},_react["default"].createElement("aside",{"aria-describedby":d,"aria-hidden":!l,"aria-labelledby":s,className:r,role:"dialog"},_react["default"].createElement(Button,{className:styles$q.closeButton,isInline:!0,onClick:i,tabIndex:0,theme:o,title:"Close"},_react["default"].createElement(Icon,{height:12,name:"close",theme:o,width:12})),n&&_react["default"].createElement(Heading,{id:s,level:"2",size:"small",theme:o},n),_react["default"].createElement("div",{id:d},t))))};FlyinPanel.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,heading:_propTypes["default"].string,isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},FlyinPanel.defaultProps={children:void 0,className:void 0,heading:void 0,isVisible:!1,onClose:void 0,theme:"dark"};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty$9=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null===e||e===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){var e=String.fromCharCode;try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var t=new String("abc");// eslint-disable-line no-new-wrappers
if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var a={},n=0;10>n;n++)a["_"+e(n)]=n;var l=Object.getOwnPropertyNames(a).map(function(e){return a[e]});if("0123456789"!==l.join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var o={};return["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"].forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){// We don't expect any of the above to throw, but better to be safe.
return!1}}var objectAssign=shouldUseNative()?Object.assign:function(e){for(var t=toObject(e),a=1,n,l;a<arguments.length;a++){for(var o in n=Object(arguments[a]),n)hasOwnProperty$9.call(n,o)&&(t[o]=n[o]);if(getOwnPropertySymbols){l=getOwnPropertySymbols(n);for(var r=0;r<l.length;r++)propIsEnumerable.call(n,l[r])&&(t[l[r]]=n[l[r]])}}return t},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,printWarning=function(){};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */{var ReactPropTypesSecret$1=ReactPropTypesSecret_1,loggedTypeFailures={},has=Function.call.bind(Object.prototype.hasOwnProperty);printWarning=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}}}/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */function checkPropTypes(e,t,a,n,l){for(var i in e)if(has(e,i)){var o;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[i]){var r=Error((n||"React class")+": "+a+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+_typeof2(e[i])+"`.");throw r.name="Invariant Violation",r}o=e[i](t,i,n,a,null,ReactPropTypesSecret$1)}catch(e){o=e}if(o&&!(o instanceof Error)&&printWarning((n||"React class")+": type specification of "+a+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+_typeof2(o)+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),o instanceof Error&&!(o.message in loggedTypeFailures)){loggedTypeFailures[o.message]=!0;var s=l?l():"";printWarning("Failed "+a+" type: "+o.message+(null==s?"":s))}}}/**
 * Resets warning cache when testing.
 *
 * @private
 */checkPropTypes.resetWarningCache=function(){loggedTypeFailures={}};var checkPropTypes_1=checkPropTypes,reactDomServer_node_development=createCommonjsModule(function(e){(function(){function t(e){return e._status===1?e._result:null}function a(e){if(e._status===-1){e._status=0;var t=e._ctor,a=t();e._result=a,a.then(function(t){if(e._status===0){var a=t["default"];a===void 0&&Pe(!1,"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t),e._status=1,e._result=a}},function(t){e._status===0&&(e._status=2,e._result=t)})}}function n(e,t,a){var n=t.displayName||t.name||"";return e.displayName||(""===n?a:a+"("+n+")")}function l(e){if(null==e)// Host root, text node or just invalid type.
return null;if("number"==typeof e.tag&&he(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ye:return"Fragment";case _e:return"Portal";case Ee:return"Profiler";case be:return"StrictMode";case ve:return"Suspense";case Se:return"SuspenseList";}if("object"===_typeof2(e))switch(e.$$typeof){case Te:return"Context.Consumer";case Ce:return"Context.Provider";case ke:return n(e,e.render,"ForwardRef");case Ie:return l(e.type);case xe:{var a=t(e);if(a)return l(a);break}}return null}/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */function o(e,t){var a=e.contextTypes;if(!a)return Ve;var n={};for(var l in a)n[l]=t[l];return n}function r(e,t,a){me(e,t,a,"Component",We.getCurrentStack)}function s(e,t){// If we don't have enough slots in this context to store this threadID,
// fill it in without leaving any holes to ensure that the VM optimizes
// this as non-holey index properties.
// (Note: If `react` package is < 16.6, _threadCount is undefined.)
for(var a=0|e._threadCount;a<=t;a++)// We assume that this is the same as the defaultValue which might not be
// true if we're rendering inside a secondary renderer but they are
// secondary because these use cases are very rare.
e[a]=e._currentValue2,e._threadCount=a+1}function d(e,t,a,n){if(n){var i=e.contextType;if("contextType"in e){var d=// Allow null for conditional declaration
null===i||void 0!==i&&i.$$typeof===Te&&void 0===i._context;// Not a <Context.Consumer>
if(!d&&!Ue.has(e)){Ue.add(e);var u="";u=void 0===i?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"===_typeof2(i)?i.$$typeof===Ce?" Did you accidentally pass the Context.Provider instead?":void 0===i._context?" However, it is set to an object with keys {"+Object.keys(i).join(", ")+"}.":" Did you accidentally pass the Context.Consumer instead?":" However, it is set to a "+_typeof2(i)+".",he(!1,"%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",l(e)||"Component",u)}}if("object"===_typeof2(i)&&null!==i)return s(i,a),i[a];{var c=o(e,t);return e.contextTypes&&r(e.contextTypes,c,"context"),c}}else{var m=o(e,t);return e.contextTypes&&r(e.contextTypes,m,"context"),m}}// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packed array. As opposed to being used in a Map.
// The first allocated index is 1.
function u(){var e=ze,t=e.length,a=2*t;if(!(65536>=a))throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");var n=new Uint16Array(a);n.set(e),ze=n,ze[0]=t+1;for(var l=t;l<a-1;l++)ze[l]=l+1;return ze[a-1]=0,t}function c(){var e=ze[0];return 0===e?u():(ze[0]=ze[e],e)}function m(e){ze[e]=ze[0],ze[0]=e}// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
function f(e){return!!$e.call(Je,e)||!$e.call(Qe,e)&&(Ze.test(e)?(Je[e]=!0,!0):(Qe[e]=!0,Pe(!1,"Invalid attribute name: `%s`",e),!1))}function p(e,t,a){return null===t?!a&&!!(2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])):0===t.type}function h(e,t,a,n){if(null!==a&&a.type===0)return!1;switch(_typeof2(t)){case"function":// $FlowIssue symbol is perfectly valid here
case"symbol":// eslint-disable-line
return!0;case"boolean":{if(n)return!1;if(null!==a)return!a.acceptsBooleans;var l=e.toLowerCase().slice(0,5);return"data-"!==l&&"aria-"!==l}default:return!1;}}function g(e,t,a,n){if(null===t||"undefined"==typeof t)return!0;if(h(e,t,a,n))return!0;if(n)return!1;if(null!==a)switch(a.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t;}return!1}function _(e){return et.hasOwnProperty(e)?et[e]:null}function y(e,t,a,n,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
function b(e){!lt&&nt.test(e)&&(lt=!0,Pe(!1,"A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */ /**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */function E(e){var t=""+e,a=it.exec(t);if(!a)return t;var n="",l=0,i,o;for(o=a.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 39:i="&#x27;";// modified from escape-html; used to be '&#39'
break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue;}l!==o&&(n+=t.substring(l,o)),l=o+1,n+=i}return l===o?n:n+t.substring(l,o)}// end code copied and modified from escape-html
/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function C(e){return"boolean"==typeof e||"number"==typeof e?""+e:E(e)}/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */function T(e){return"\""+C(e)+"\""}/**
 * Operations for dealing with DOM properties.
 */ /**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */function N(){return"data-reactroot=\"\""}/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */function k(e,t){var a=_(e);if("style"!==e&&p(e,a,!1))return"";if(g(e,t,a,!1))return"";if(null!==a){var n=a.attributeName,l=a.type;return 3===l||4===l&&!0===t?n+"=\"\"":(a.sanitizeURL&&(t=""+t,b(t)),n+"="+T(t))}return f(e)?e+"="+T(t):""}/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */function v(e,t){return f(e)&&null!=t?e+"="+T(t):""}/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function S(){if(null===rt)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return pt?Pe(!1,"Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks"):void 0,rt}function I(e,t){if(null===t)return Pe(!1,"%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Et),!1;e.length!==t.length&&Pe(!1,"The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",Et,"["+e.join(", ")+"]","["+t.join(", ")+"]");for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function x(){if(0<ft)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function A(){return null===dt?null===st?(ut=!1,st=dt=x()):(ut=!0,dt=st):null===dt.next?(ut=!1,dt=dt.next=x()):(ut=!0,dt=dt.next),dt}function w(e){rt=e,pt=!1}function O(e,t,a,n){// This must be called after every function component to prevent hooks from
// being used in classes.
for(;ct;)// Updates were scheduled during the render phase. They are stored in
// the `renderPhaseUpdates` map. Call the component again, reusing the
// work-in-progress hooks and applying the additional updates on top. Keep
// restarting until no more updates are scheduled.
// Start over from the beginning of the list
ct=!1,ft+=1,dt=null,a=e(t,n);// These were reset above
// currentlyRenderingComponent = null;
// didScheduleRenderPhaseUpdate = false;
// firstWorkInProgressHook = null;
// numberOfReRenders = 0;
// renderPhaseUpdates = null;
// workInProgressHook = null;
return rt=null,st=null,ft=0,mt=null,dt=null,pt=!1,a}function R(e){var t=ht;return s(e,t),pt?Pe(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."):void 0,e[t]}function P(e){Et="useContext",S();var t=ht;return s(e,t),e[t]}function L(e,t){return"function"==typeof t?t(e):t}function M(e,t,a){if(e!==L&&(Et="useReducer"),rt=S(),dt=A(),ut){// This is a re-render. Apply the new render phase updates to the previous
// current hook.
var n=dt.queue,l=n.dispatch;if(null!==mt){// Render phase updates are stored in a map of queue -> linked list
var i=mt.get(n);if(void 0!==i){mt["delete"](n);var o=dt.memoizedState,r=i;do{// Process this render phase update. We don't have to check the
// priority because it will always be the same as the current
// render's.
var s=r.action;pt=!0,o=e(o,s),pt=!1,r=r.next}while(null!==r);return dt.memoizedState=o,[o,l]}}return[dt.memoizedState,l]}pt=!0;var d;d=e===L?"function"==typeof t?t():t:void 0===a?t:a(t),pt=!1,dt.memoizedState=d;var u=dt.queue={last:null,dispatch:null},c=u.dispatch=F.bind(null,rt,u);return[dt.memoizedState,c]}function D(e,t){rt=S(),dt=A();var a=void 0===t?null:t;if(null!==dt){var n=dt.memoizedState;if(null!==n&&null!==a){var l=n[1];if(I(a,l))return n[0]}}pt=!0;var i=e();return pt=!1,dt.memoizedState=[i,a],i}function H(e){rt=S(),dt=A();var t=dt.memoizedState;if(null===t){var a={current:e};return Object.seal(a),dt.memoizedState=a,a}return t}function F(e,t,a){if(!(ft<25))throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(e===rt){ct=!0;var n={action:a,next:null};null===mt&&(mt=new Map);var l=mt.get(t);if(void 0===l)mt.set(t,n);else{// Append the update to the end of the list.
for(var i=l;null!==i.next;)i=i.next;i.next=n}}}function B(){}function W(e){ht=e}// Assumes there is no parent namespace.
function U(e){return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/Math/MathML":"http://www.w3.org/1999/xhtml"}function V(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?U(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e;// By default, pass namespace below.
}function z(e,t){if(t){// Note the use of `==` which checks for null or undefined.
if(kt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."+vt.getStackAddendum());if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(!("object"===_typeof2(t.dangerouslySetInnerHTML)&&"__html"in t.dangerouslySetInnerHTML))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")}if(t.suppressContentEditableWarning||!t.contentEditable||null==t.children?void 0:Pe(!1,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=t.style&&"object"!==_typeof2(t.style))throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."+vt.getStackAddendum())}}/**
 * CSS properties which accept numbers but are not in units of "px".
 */ /**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function j(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */ /**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function K(e,t,a){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
return null==t||"boolean"==typeof t||""===t?"":a||"number"!=typeof t||0===t||St.hasOwnProperty(e)&&St[e]?(""+t).trim():t+"px"}/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */function G(e){return e.replace(xt,"-$1").toLowerCase().replace(At,"-ms-")}function X(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;return"annotation-xml"!==e&&"color-profile"!==e&&"font-face"!==e&&"font-face-src"!==e&&"font-face-uri"!==e&&"font-face-format"!==e&&"font-face-name"!==e&&"missing-glyph"!==e}function q(e,t){if(Zt.call(Xt,t)&&Xt[t])return!0;if(Yt.test(t)){var a="aria-"+t.slice(4).toLowerCase(),n=Gt.hasOwnProperty(a)?a:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==n)return Pe(!1,"Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Xt[t]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==n)return Pe(!1,"Invalid ARIA attribute `%s`. Did you mean `%s`?",t,n),Xt[t]=!0,!0}if(qt.test(t)){var l=t.toLowerCase(),i=Gt.hasOwnProperty(l)?l:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==i)return Xt[t]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==i)return Pe(!1,"Unknown ARIA attribute `%s`. Did you mean `%s`?",t,i),Xt[t]=!0,!0}return!0}function Y(e,t){var a=[];for(var n in t){var l=q(e,n);l||a.push(n)}var i=a.map(function(e){return"`"+e+"`"}).join(", ");1===a.length?Pe(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",i,e):1<a.length&&Pe(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",i,e)}function Z(e,t){X(e,t)||Y(e,t)}function $(e,t){("input"===e||"textarea"===e||"select"===e)&&(null==t||null!==t.value||$t||($t=!0,"select"===e&&t.multiple?Pe(!1,"`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):Pe(!1,"`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e)))}/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */ /**
 * Ordered list of injected plugins.
 */ /**
 * Mapping from event name to dispatch config
 */ /**
 * Mapping from registration name to plugin module
 */function Q(e,t,a){X(e,t)||sa(e,t,a)}function J(e){if(!Ma.hasOwnProperty(e)){if(!La.test(e))throw Error("Invalid tag: "+e);Ma[e]=!0}}function ee(e){var t="",a="";for(var n in e)if(e.hasOwnProperty(n)){var l=0===n.indexOf("--"),i=e[n];l||Kt(n,i),null!=i&&(t+=a+(l?n:Ha(n))+":",t+=K(n,i,l),a=";")}return t||null}function te(e,t){{var a=e.constructor,n=a&&l(a)||"ReactClass",i=n+"."+t;if(Sa[i])return;he(!1,"%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.",t,t,n),Sa[i]=!0}}function ae(e){return e.prototype&&e.prototype.isReactComponent}function ne(e){var t=e.dangerouslySetInnerHTML;if(!(null!=t)){var a=e.children;if("string"==typeof a||"number"==typeof a)return C(a)}else if(null!=t.__html)return t.__html;return null}function le(e){if(!ce.isValidElement(e))return da(e);var t=e;if(t.type!==ye)return[t];var a=t.props.children;if(!ce.isValidElement(a))return da(a);return[a]}function ie(e){if(void 0===e||null===e)return e;var t="";// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
return ce.Children.forEach(e,function(e){null==e||(t+=e,!va&&"string"!=typeof e&&"number"!=typeof e&&(va=!0,Pe(!1,"Only strings and numbers are supported as <option> children.")))}),t}function oe(e,t,a,n,l,i){var o="<"+e;for(var r in a)if(Fa.call(a,r)){var s=a[r];if(null!=s){"style"===r&&(s=ee(s));var d=null;X(t,a)?!Ba.hasOwnProperty(r)&&(d=v(r,s)):d=k(r,s),d&&(o+=" "+d)}}// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
return l?o:(i&&(o+=" "+N()),o)}function re(e,t){if(e===void 0)throw Error((l(t)||"Component")+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.")}function se(e,t,a){// Extra closure so queue and replace can be captured properly
function n(n,o){var r=ae(o),s=d(o,t,a,r),u=[],c=!1,m={isMounted:function isMounted(){return!1},enqueueForceUpdate:function enqueueForceUpdate(e){if(null===u)return te(e,"forceUpdate"),null},enqueueReplaceState:function enqueueReplaceState(e,t){c=!0,u=[t]},enqueueSetState:function enqueueSetState(e,t){return null===u?(te(e,"setState"),null):void u.push(t)}},f;if(!r){if(o.prototype&&"function"==typeof o.prototype.render){var p=l(o)||"Unknown";Ia[p]||(he(!1,"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",p,p),Ia[p]=!0)}if(w({}),f=o(n.props,s,m),f=O(o,n.props,f,s),null==f||null==f.render)return e=f,void re(e,o);{var h=l(o)||"Unknown";xa[h]||(he(!1,"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",h,h,h),xa[h]=!0)}}else if(f=new o(n.props,s,m),"function"==typeof o.getDerivedStateFromProps){if(null===f.state||void 0===f.state){var g=l(o)||"Unknown";Oa[g]||(he(!1,"`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",g,null===f.state?"null":"undefined",g),Oa[g]=!0)}var _=o.getDerivedStateFromProps.call(null,n.props,f.state);if(void 0===_){var y=l(o)||"Unknown";wa[y]||(he(!1,"%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",y),wa[y]=!0)}null!=_&&(f.state=ue({},f.state,_))}f.props=n.props,f.context=s,f.updater=m;var b=f.state;if(void 0===b&&(f.state=b=null),"function"==typeof f.UNSAFE_componentWillMount||"function"==typeof f.componentWillMount){if("function"==typeof f.componentWillMount){if(!0!==f.componentWillMount.__suppressDeprecationWarning){var E=l(o)||"Unknown";Aa[E]||(De(!1,// keep this warning in sync with ReactStrictModeWarning.js
"componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",E),Aa[E]=!0)}// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for any component with the new gDSFP.
"function"!=typeof o.getDerivedStateFromProps&&f.componentWillMount()}if("function"==typeof f.UNSAFE_componentWillMount&&"function"!=typeof o.getDerivedStateFromProps&&f.UNSAFE_componentWillMount(),u.length){var C=u,T=c;if(u=null,c=!1,T&&1===C.length)f.state=C[0];else{for(var N=T?C[0]:f.state,k=!0,v=T?1:0;v<C.length;v++){var S=C[v],I="function"==typeof S?S.call(f,N,n.props,s):S;null!=I&&(k?(k=!1,N=ue({},N,I)):ue(N,I))}f.state=N}}else u=null}e=f.render(),void 0===e&&f.render._isMockFunction&&(e=null),re(e,o);var x;{if("function"==typeof f.getChildContext){var A=o.childContextTypes;if("object"===_typeof2(A)){for(var R in x=f.getChildContext(),x)if(!(R in A))throw Error((l(o)||"Unknown")+".getChildContext(): key \""+R+"\" is not defined in childContextTypes.");}else he(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",l(o)||"Unknown")}x&&(t=ue({},t,x))}}for(;ce.isValidElement(e);){// Safe because we just checked it's an element.
var i=e,o=i.type;if(_a(i),"function"!=typeof o)break;n(i,o)}return{child:e,context:t}}function de(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ue=objectAssign,ce=_react["default"],me=checkPropTypes_1,fe=_stream["default"],pe=function(){};pe=function(e,t){for(var a=arguments.length,n=Array(2<a?a-2:0),l=2;l<a;l++)n[l-2]=arguments[l];if(t===void 0)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(8<n.length)// Check before the condition to catch violations early.
throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!=typeof console){var i=n.map(function(e){return""+e});i.unshift("Warning: "+t),Function.prototype.apply.call(console.error,console,i)}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var o=0,r="Warning: "+t.replace(/%s/g,function(){return n[o++]});throw new Error(r)}catch(e){}}};var he=pe,ge="function"==typeof Symbol&&Symbol["for"],_e=ge?Symbol["for"]("react.portal"):60106,ye=ge?Symbol["for"]("react.fragment"):60107,be=ge?Symbol["for"]("react.strict_mode"):60108,Ee=ge?Symbol["for"]("react.profiler"):60114,Ce=ge?Symbol["for"]("react.provider"):60109,Te=ge?Symbol["for"]("react.context"):60110,Ne=ge?Symbol["for"]("react.concurrent_mode"):60111,ke=ge?Symbol["for"]("react.forward_ref"):60112,ve=ge?Symbol["for"]("react.suspense"):60113,Se=ge?Symbol["for"]("react.suspense_list"):60120,Ie=ge?Symbol["for"]("react.memo"):60115,xe=ge?Symbol["for"]("react.lazy"):60116,Ae=ge?Symbol["for"]("react.fundamental"):60117,we=ge?Symbol["for"]("react.scope"):60119,Oe=ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
Oe.hasOwnProperty("ReactCurrentDispatcher")||(Oe.ReactCurrentDispatcher={current:null}),Oe.hasOwnProperty("ReactCurrentBatchConfig")||(Oe.ReactCurrentBatchConfig={suspense:null});/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var Re=he;Re=function(e,t){if(!e){// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var a=Oe.ReactDebugCurrentFrame,n=a.getStackAddendum(),l=arguments.length,i=Array(0),o=2;o<void 0;o++)(void 0)[o-2]=arguments[o];he.apply(void 0,[!1,t+"%s"].concat(void 0,[n]))}};var Pe=Re,Le=function(){};{var Me=function(e){for(var t=arguments.length,a=Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var l=0,i="Warning: "+e.replace(/%s/g,function(){return a[l++]});"undefined"!=typeof console&&console.warn(i);try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(i)}catch(e){}};Le=function(e,t){if(t===void 0)throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");if(!e){for(var a=arguments.length,n=Array(2<a?a-2:0),l=2;l<a;l++)n[l-2]=arguments[l];Me.apply(void 0,[t].concat(n))}}}var De=Le,He=/^(.*)[\\\/]/,Fe=function(e,t,a){var n="";if(t){var l=t.fileName,i=l.replace(He,"");// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(i)){var o=l.match(He);if(o){var r=o[1];if(r){var s=r.replace(He,"");i=s+"/"+i}}}n=" (at "+i+":"+t.lineNumber+")"}else a&&(n=" (created by "+a+")");return"\n    in "+(e||"Unknown")+n},Be=!1,We,Ue;We=Oe.ReactDebugCurrentFrame,Ue=new Set;var Ve={};Object.freeze(Ve);for(var ze=new Uint16Array(16),je=0;15>je;je++)ze[je]=je+1;ze[15]=0;var Ke=1,Ge=2,Xe=3,qe=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Ye=qe+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Ze=new RegExp("^["+qe+"]["+Ye+"]*$"),$e=Object.prototype.hasOwnProperty,Qe={},Je={},et={};// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
["children","dangerouslySetInnerHTML",// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(function(e){et[e]=new y(e,0,!1,// mustUseProperty
e,// attributeName
null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],a=e[1];et[t]=new y(t,Ke,!1,// mustUseProperty
a,// attributeName
null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new y(e,Ge,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new y(e,Ge,!1,// mustUseProperty
e,// attributeName
null,!1)}),["allowFullScreen","async",// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",// Microdata
"itemScope"].forEach(function(e){et[e]=new y(e,Xe,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1)}),["checked",// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"].forEach(function(e){et[e]=new y(e,Xe,!0,// mustUseProperty
e,// attributeName
null,!1)}),["capture","download"].forEach(function(e){et[e]=new y(e,4,!1,// mustUseProperty
e,// attributeName
null,!1)}),["cols","rows","size","span"].forEach(function(e){et[e]=new y(e,6,!1,// mustUseProperty
e,// attributeName
null,!1)}),["rowSpan","start"].forEach(function(e){et[e]=new y(e,5,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1)});var tt=/[\-\:]([a-z])/g,at=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(tt,at);et[t]=new y(t,Ke,!1,// mustUseProperty
e,null,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(tt,at);et[t]=new y(t,Ke,!1,// mustUseProperty
e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tt,at);et[t]=new y(t,Ke,!1,// mustUseProperty
e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){et[e]=new y(e,Ke,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1)});et.xlinkHref=new y("xlinkHref",Ke,!1,// mustUseProperty
"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){et[e]=new y(e,Ke,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!0)});Oe.ReactDebugCurrentFrame;// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */var nt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,lt=!1,it=/["'&<>]/,ot="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!==e&&t!==t// eslint-disable-line no-self-compare
},rt=null,st=null,dt=null,ut=!1,ct=!1,mt=null,ft=0,pt=!1,ht=0,gt={readContext:R,useContext:P,useMemo:D,useReducer:M,useRef:H,useState:function(e){return Et="useState",M(L,// useReducer has a special case to support lazy useState initializers
e)},useLayoutEffect:function(){Et="useLayoutEffect",Pe(!1,"useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://fb.me/react-uselayouteffect-ssr for common fixes.")},useCallback:function(e){// Callbacks are passed as they are in the server environment.
return e},// useImperativeHandle is not run in the server environment
useImperativeHandle:B,// Effects are not run in the server environment.
useEffect:B,// Debugging effect
useDebugValue:B,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){return S(),e},useTransition:function(){S();return[function startTransition(e){e()},!1]}},_t={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},yt=null,bt={checkPropTypes:null},Et;{yt=Oe.ReactDebugCurrentFrame;var Ct={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Tt={value:function value(e,t){return Ct[e.type]||e.onChange||e.readOnly||e.disabled||null==e[t]||Be?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function checked(e,t){return e.onChange||e.readOnly||e.disabled||null==e[t]||Be?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}};/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */bt.checkPropTypes=function(e,t){me(Tt,t,"prop",e,yt.getStackAddendum)}}// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var Nt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0// NOTE: menuitem's close tag should be omitted, but that causes problems.
},kt=ue({menuitem:!0},Nt),vt=null;// `omittedCloseTags` except that `menuitem` should still have its closing tag.
vt=Oe.ReactDebugCurrentFrame;var St={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},It=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){It.forEach(function(t){St[j(t,e)]=St[e]})});var xt=/([A-Z])/g,At=/^ms-/,wt=function(){};{// 'msTransform' is correct, but the other prefixes should be capitalized
var Ot=/^(?:webkit|moz|o)[A-Z]/,Rt=/^-ms-/,Pt=/-(.)/g,Lt=/;\s*$/,Mt={},Dt={},Ht=!1,Ft=!1,Bt=function(e){return e.replace(Pt,function(e,t){return t.toUpperCase()})},Wt=function(e){Mt.hasOwnProperty(e)&&Mt[e]||(Mt[e]=!0,Pe(!1,"Unsupported style property %s. Did you mean %s?",e,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
Bt(e.replace(Rt,"ms-"))))},Ut=function(e){Mt.hasOwnProperty(e)&&Mt[e]||(Mt[e]=!0,Pe(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Vt=function(e,t){Dt.hasOwnProperty(t)&&Dt[t]||(Dt[t]=!0,Pe(!1,"Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.",e,t.replace(Lt,"")))},zt=function(e){Ht||(Ht=!0,Pe(!1,"`NaN` is an invalid value for the `%s` css style property.",e))},jt=function(e){Ft||(Ft=!0,Pe(!1,"`Infinity` is an invalid value for the `%s` css style property.",e))};wt=function(e,t){-1<e.indexOf("-")?Wt(e):Ot.test(e)?Ut(e):Lt.test(t)&&Vt(e,t),"number"==typeof t&&(isNaN(t)?zt(e,t):!isFinite(t)&&jt(e,t))}}var Kt=wt,Gt={"aria-current":0,// state
"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Xt={},qt=new RegExp("^(aria)-["+Ye+"]*$"),Yt=new RegExp("^(aria)[A-Z]["+Ye+"]*$"),Zt=Object.prototype.hasOwnProperty,$t=!1,Qt={},Jt={},ea={// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},ta=function(){};{var aa={},na=Object.prototype.hasOwnProperty,la=/^on./,ia=/^on[^A-Z]/,oa=new RegExp("^(aria)-["+Ye+"]*$"),ra=new RegExp("^(aria)[A-Z]["+Ye+"]*$");ta=function(e,t,a,n){if(na.call(aa,t)&&aa[t])return!0;var l=t.toLowerCase();if("onfocusin"===l||"onfocusout"===l)return Pe(!1,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),aa[t]=!0,!0;// We can't rely on the event system being injected on the server.
if(n){if(Qt.hasOwnProperty(t))return!0;var i=Jt.hasOwnProperty(l)?Jt[l]:null;if(null!=i)return Pe(!1,"Invalid event handler property `%s`. Did you mean `%s`?",t,i),aa[t]=!0,!0;if(la.test(t))return Pe(!1,"Unknown event handler property `%s`. It will be ignored.",t),aa[t]=!0,!0}else if(la.test(t))return ia.test(t)&&Pe(!1,"Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),aa[t]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(oa.test(t)||ra.test(t))return!0;if("innerhtml"===l)return Pe(!1,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),aa[t]=!0,!0;if("aria"===l)return Pe(!1,"The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),aa[t]=!0,!0;if("is"===l&&null!==a&&void 0!==a&&"string"!=typeof a)return Pe(!1,"Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",_typeof2(a)),aa[t]=!0,!0;if("number"==typeof a&&isNaN(a))return Pe(!1,"Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),aa[t]=!0,!0;var o=_(t),r=null!==o&&o.type===0;// Known attributes should match the casing specified in the property config.
if(ea.hasOwnProperty(l)){var s=ea[l];if(s!==t)return Pe(!1,"Invalid DOM property `%s`. Did you mean `%s`?",t,s),aa[t]=!0,!0}else if(!r&&t!==l)return Pe(!1,"React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,l),aa[t]=!0,!0;return"boolean"==typeof a&&h(t,a,o,!1)?(a?Pe(!1,"Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.",a,t,t,a,t):Pe(!1,"Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",a,t,t,a,t,t,t),aa[t]=!0,!0):!!r||(h(t,a,o,!1)?(aa[t]=!0,!1):"false"!==a&&"true"!==a||null===o||o.type!==Xe||(Pe(!1,"Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",a,t,"false"===a?"The browser will interpret it as a truthy value.":"Although this works, it will not work as expected if you pass the string \"false\".",t,a),aa[t]=!0,!0));// Now that we've validated casing, do not validate
// data types for reserved props
// Warn when a known attribute is a bad type
// Warn when passing the strings 'false' or 'true' into a boolean prop
}}var sa=function(e,t,a){var n=[];for(var l in t){var i=ta(e,l,t[l],a);i||n.push(l)}var o=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?Pe(!1,"Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior",o,e):1<n.length&&Pe(!1,"Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior",o,e)},da=ce.Children.toArray,ua=[],ca=Oe.ReactCurrentDispatcher,ma=null,fa=function(){return""},pa=function(){return""},ha=function(){},ga=function(){},_a=function(){},ya=function(){},ba=!1,Ea;Ea=Oe.ReactDebugCurrentFrame,ha=function(e,t){Z(e,t),$(e,t),Q(e,t,!1)},pa=function(e){var t=e._source,a=e.type,n=l(a);return Fe(n,t,null)},ga=function(e){ua.push(e),1===ua.length&&(ma=Ea.getCurrentStack,Ea.getCurrentStack=fa)},_a=function(e){// For the innermost executing ReactDOMServer call,
var t=ua[ua.length-1],a=t[t.length-1];// Take the innermost executing frame (e.g. <Foo>),
// and record that it has one more element associated with it.
a.debugElementStack.push(e)},ya=function(){ua.pop(),0===ua.length&&(Ea.getCurrentStack=ma,ma=null)},fa=function(){if(0===ua.length)// Nothing is currently rendering.
return"";// ReactDOMServer is reentrant so there may be multiple calls at the same time.
// Take the frames from the innermost call which is the last in the array.
// Go through every frame in the stack from the innermost one.
for(var e=ua[ua.length-1],t="",a=e.length-1;0<=a;a--)for(var n=e[a],l=n.debugElementStack,o=l.length-1;0<=o;o--)t+=pa(l[o]);return t};var Ca=!1,Ta=!1,Na=!1,ka=!1,va=!1,Sa={},Ia={},xa={},Aa={},wa={},Oa={},Ra=["value","defaultValue"],Pa={listing:!0,pre:!0,textarea:!0},La=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ma={},Da={},Ha=function(e){if(Da.hasOwnProperty(e))return Da[e];var t=G(e);return Da[e]=t,t},Fa=Object.prototype.hasOwnProperty,Ba={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null},Wa=/*#__PURE__*/function(){// TODO: type this more strictly:
// DEV-only
function e(e,t){var a=le(e),n={type:null,// Assume all trees start in the HTML namespace (not totally true, but
// this is what we did historically)
domNamespace:_t.html,children:a,childIndex:0,context:Ve,footer:""};n.debugElementStack=[],this.threadID=c(),this.stack=[n],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.contextProviderStack=[]}var t=e.prototype;return t.destroy=function(){this.exhausted||(this.exhausted=!0,this.clearProviders(),m(this.threadID))}/**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */,t.pushProvider=function(e){var t=++this.contextIndex,a=e.type._context,n=this.threadID;s(a,n);var l=a[n];// Remember which value to restore this context to on our way up.
this.contextStack[t]=a,this.contextValueStack[t]=l,// Only used for push/pop mismatch warnings.
this.contextProviderStack[t]=e,a[n]=e.props.value},t.popProvider=function(e){var t=this.contextIndex;-1<t&&e===this.contextProviderStack[t]?void 0:he(!1,"Unexpected pop.");var a=this.contextStack[t],n=this.contextValueStack[t];this.contextStack[t]=null,this.contextValueStack[t]=null,this.contextProviderStack[t]=null,this.contextIndex--,a[this.threadID]=n},t.clearProviders=function(){// Restore any remaining providers on the stack to previous values
for(var e=this.contextIndex;0<=e;e--){var t=this.contextStack[e],a=this.contextValueStack[e];t[this.threadID]=a}},t.read=function(e){if(this.exhausted)return null;var t=ht;W(this.threadID);var a=ca.current;ca.current=gt;try{// Markup generated within <Suspense> ends up buffered until we know
// nothing in that boundary suspended
for(var n=[""],l=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0,m(this.threadID);break}var i=this.stack[this.stack.length-1];if(l||i.childIndex>=i.children.length){var o=i.footer;if(""!==o&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===i.type)this.currentSelectValue=null;else if(null!=i.type&&null!=i.type.type&&i.type.type.$$typeof===Ce){var r=i.type;this.popProvider(r)}else if(i.type===ve){this.suspenseDepth--;var s=n.pop();if(l){l=!1;// If rendering was suspended at this boundary, render the fallbackFrame
var d=i.fallbackFrame;if(!d)throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");this.stack.push(d),n[this.suspenseDepth]+="<!--$!-->";// Skip flushing output since we're switching to the fallback
continue}else n[this.suspenseDepth]+=s}// Flush output
n[this.suspenseDepth]+=o;continue}var u=i.children[i.childIndex++],c="";// We're starting work on this frame, so reset its inner stack.
ga(this.stack),i.debugElementStack.length=0;try{c+=this.render(u,i.context,i.domNamespace)}catch(e){if(null==e||"function"!=typeof e.then)throw e;else if(!1){if(!(0<this.suspenseDepth))throw Error("A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");l=!0}else throw Error("ReactDOMServer does not yet support Suspense.")}finally{ya()}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=c}return n[0]}finally{ca.current=a,W(t)}},t.render=function(e,t,n){if("string"==typeof e||"number"==typeof e){var i=""+e;return""==i?"":this.makeStaticMarkup?C(i):this.previousWasTextNode?"<!-- -->"+C(i):(this.previousWasTextNode=!0,C(i))}var o=se(e,t,this.threadID),r;if(r=o.child,t=o.context,null===r||!1===r)return"";// Safe because we just checked it's an element.
if(!ce.isValidElement(r)){if(null!=r&&null!=r.$$typeof){// Catch unexpected special types early.
var d=r.$$typeof;if(d===_e)throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");// Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
throw Error("Unknown element-like object type: "+d.toString()+". This is likely a bug in React. Please file an issue.")}var u=da(r),c={type:null,domNamespace:n,children:u,childIndex:0,context:t,footer:""};return c.debugElementStack=[],this.stack.push(c),""}var m=r,f=m.type;if("string"==typeof f)return this.renderDOM(m,t,n);switch(f){case be:case Ne:case Ee:case Se:case ye:{var p=da(r.props.children),h={type:null,domNamespace:n,children:p,childIndex:0,context:t,footer:""};return h.debugElementStack=[],this.stack.push(h),""}case ve:throw Error("ReactDOMServer does not yet support Suspense.");}if("object"===_typeof2(f)&&null!==f)switch(f.$$typeof){case ke:{var g=r,_;w({}),_=f.render(g.props,g.ref),_=O(f.render,g.props,_,g.ref),_=da(_);var y={type:null,domNamespace:n,children:_,childIndex:0,context:t,footer:""};return y.debugElementStack=[],this.stack.push(y),""}case Ie:{var b=r,E=[ce.createElement(f.type,ue({ref:b.ref},b.props))],T={type:null,domNamespace:n,children:E,childIndex:0,context:t,footer:""};return T.debugElementStack=[],this.stack.push(T),""}case Ce:{var N=r,k=N.props,v=da(k.children),S={type:N,domNamespace:n,children:v,childIndex:0,context:t,footer:""};return S.debugElementStack=[],this.pushProvider(N),this.stack.push(S),""}case Te:{var I=r.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
void 0===I._context?I!==I.Consumer&&!ba&&(ba=!0,Pe(!1,"Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")):I=I._context;var x=r.props,A=this.threadID;s(I,A);var R=I[A],P=da(x.children(R)),L={type:r,domNamespace:n,children:P,childIndex:0,context:t,footer:""};return L.debugElementStack=[],this.stack.push(L),""}// eslint-disable-next-line-no-fallthrough
case Ae:throw Error("ReactDOMServer does not yet support the fundamental API.");// eslint-disable-next-line-no-fallthrough
case xe:{var M=r,D=r.type;switch(a(D),D._status){case 1:{var H=[ce.createElement(D._result,ue({ref:M.ref},M.props))],F={type:null,domNamespace:n,children:H,childIndex:0,context:t,footer:""};return F.debugElementStack=[],this.stack.push(F),""}case 2:throw D._result;case 0:default:throw Error("ReactDOMServer does not yet support lazy-loaded components.");}}// eslint-disable-next-line-no-fallthrough
case we:throw Error("ReactDOMServer does not yet support scope components.");}var B="";{var W=m._owner;(void 0===f||"object"===_typeof2(f)&&null!==f&&0===Object.keys(f).length)&&(B+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var U=W?l(W):null;U&&(B+="\n\nCheck the render method of `"+U+"`.")}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==f?f:_typeof2(f))+"."+B)},t.renderDOM=function(e,t,a){var n=e.type.toLowerCase(),l=a;a===_t.html&&(l=U(n)),l===_t.html&&(n===e.type?void 0:Pe(!1,"<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e.type)),J(n);var o=e.props;if("input"===n)bt.checkPropTypes("input",o),void 0===o.checked||void 0===o.defaultChecked||Ta||(Pe(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components","A component",o.type),Ta=!0),void 0===o.value||void 0===o.defaultValue||Ca||(Pe(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components","A component",o.type),Ca=!0),o=ue({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:null==o.value?o.defaultValue:o.value,checked:null==o.checked?o.defaultChecked:o.checked});else if("textarea"===n){bt.checkPropTypes("textarea",o),void 0===o.value||void 0===o.defaultValue||ka||(Pe(!1,"Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"),ka=!0);var r=o.value;if(null==r){var s=o.defaultValue,d=o.children;// TODO (yungsters): Remove support for children content in <textarea>.
if(null!=d){if(Pe(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=s)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Array.isArray(d)){if(!(1>=d.length))throw Error("<textarea> can only have at most one child.");d=d[0]}s=""+d}null==s&&(s=""),r=s}o=ue({},o,{value:void 0,children:""+r})}else if("select"===n){{bt.checkPropTypes("select",o);for(var u=0,c;u<Ra.length;u++)if(c=Ra[u],null!=o[c]){var m=Array.isArray(o[c]);o.multiple&&!m?Pe(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.",c):!o.multiple&&m&&Pe(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",c)}void 0===o.value||void 0===o.defaultValue||Na||(Pe(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),Na=!0)}this.currentSelectValue=null==o.value?o.defaultValue:o.value,o=ue({},o,{value:void 0})}else if("option"===n){var f=null,p=this.currentSelectValue,h=ie(o.children);if(null!=p){var g;if(g=null==o.value?h:o.value+"",f=!1,Array.isArray(p)){// multiple
for(var _=0;_<p.length;_++)if(""+p[_]===g){f=!0;break}}else f=""+p===g;o=ue({selected:void 0,children:void 0},o,{selected:f,children:h})}}ha(n,o),z(n,o);var y=oe(e.type,n,o,l,this.makeStaticMarkup,1===this.stack.length),b="";Nt.hasOwnProperty(n)?y+="/>":(y+=">",b="</"+e.type+">");var E=ne(o),C;null==E?C=da(o.children):(C=[],Pa[n]&&"\n"===E.charAt(0)&&(y+="\n"),y+=E);var T={domNamespace:V(a,e.type),type:n,children:C,childIndex:0,context:t,footer:b};return T.debugElementStack=[],this.stack.push(T),this.previousWasTextNode=!1,y},e}(),Ua=/*#__PURE__*/function(e){function t(t,a){var n;// Calls the stream.Readable(options) constructor. Consider exposing built-in
// features like highWaterMark in the future.
return n=e.call(this,{})||this,n.partialRenderer=new Wa(t,a),n}de(t,e);var a=t.prototype;return a._destroy=function(e,t){this.partialRenderer.destroy(),t(e)},a._read=function(e){try{this.push(this.partialRenderer.read(e))}catch(e){this.destroy(e)}},t}(fe.Readable),Va={renderToString:/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */function(e){var t=new Wa(e,!1);try{var a=t.read(1/0);return a}finally{t.destroy()}}/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */,renderToStaticMarkup:function(e){var t=new Wa(e,!0);try{var a=t.read(1/0);return a}finally{t.destroy()}},renderToNodeStream:/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertonodestream
 */function(e){return new Ua(e,!1)}/**
 * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream
 */,renderToStaticNodeStream:function(e){return new Ua(e,!0)},version:"16.12.0"},za=Object.freeze({default:Va}),ja=za&&Va||za,Ka=ja["default"]||ja;e.exports=Ka})()}),server_node=createCommonjsModule(function(e){e.exports=reactDomServer_node_development}),server=server_node,MapOptions={SEARCH_TYPES:["address","geocode","(regions)"],SEARCH_TYPE_ADDRESS:"address",SEARCH_TYPE_GEOCODE:"geocode",SEARCH_TYPE_REGIONS:"(regions)",SCROLL_WHEEL_ENABLED:!1,SHOW_MAP_TYPE_CONTROL:!1,MAP_INITIAL_ZOOM:13,MAP_MAX_ZOOM:15,MAP_MARKER_ANCHOR_X:14,MAP_MARKER_ANCHOR_Y:14,MAP_LABEL_ORIGIN_X:14,MAP_LABEL_ORIGIN_Y:14,MAP_MARKER:{path:"M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z",fillColor:"#333333",fillOpacity:1,scale:1,strokeColor:"#333333",strokeWeight:1},STOCKIST_MAP_MARKER:{path:"M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z",fillColor:"#848482",fillOpacity:1,scale:1,strokeColor:"#848482",strokeWeight:1},MAP_MARKER_ACTIVE:{path:"M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z",fillColor:"#fefef2",fillOpacity:1,scale:1,strokeColor:"#333333",strokeWeight:1},MAP_MARKER_CLUSTER:{height:34,textColor:"rgba(0, 0, 0, 0)",textSize:0,width:34},MAP_LABEL:{color:"#fefef2",fontFamily:"Suisse Medium, sans-serif",fontSize:"11px",fontWeight:"bold"},MAP_LABEL_ACTIVE:{color:"#333333",fontFamily:"Suisse Medium, sans-serif",fontSize:"11px",fontWeight:"bold"},MAP_STYLES:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:"0"},{color:"#a1a195"},{lightness:"0"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#fefef8"},{lightness:"0"},{gamma:"1"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{lightness:20},{color:"#ebebdf"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#808077"},{saturation:"0"}]},{featureType:"administrative.province",elementType:"labels.text.fill",stylers:[{color:"#808077"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#808077"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f4f4e8"},{lightness:"0"},{gamma:"1"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#ebebdf"},{lightness:"0"},{gamma:"1.00"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#fefef8"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{lightness:29},{weight:.2},{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#ebebdf"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#deded3"},{lightness:17}]}],INFO_BUBBLE_STYLES:{arrowSize:10,shadowStyle:0,backgroundColor:"#FEFFF8",disableAnimation:!0,hideCloseButton:!0,padding:0,borderWidth:0,borderRadius:0}},styles$r={base:"StoreHoursList-module_base__3dYCe",heading:"StoreHoursList-module_heading__1cOLu",list:"StoreHoursList-module_list__31PtS",item:"StoreHoursList-module_item__2tt42",dark:"StoreHoursList-module_dark__1Ri68",light:"StoreHoursList-module_light__pXExk",dayName:"StoreHoursList-module_dayName__2GHDo",hours:"StoreHoursList-module_hours__9wjVn",alternateHours:"StoreHoursList-module_alternateHours__KdRt3",alternateHoursNote:"StoreHoursList-module_alternateHoursNote__-5uP2"},StoreHoursList=function(e){var t=e.alternateHoursNote,a=e.className,n=e.heading,l=e.hoursList,i=e.theme;if(0===l.length)return null;var o=(0,_classnames["default"])(styles$r.base,styles$r[i],a),r=!!find_1(l,"isAlternate");return _react["default"].createElement("div",{className:o},n&&_react["default"].createElement(Heading,{className:styles$r.heading,hasTopMargin:!1,level:LEVEL.FOUR,size:SIZE.X_X_SMALL,theme:i},n),_react["default"].createElement("ul",{className:styles$r.list},l.map(function(e){return _react["default"].createElement("li",{className:styles$r.item,key:e.id},_react["default"].createElement("span",{className:styles$r.dayName},e.dayName),_react["default"].createElement("span",{className:(0,_classnames["default"])(styles$r.hours,_defineProperty({},styles$r.alternateHours,e.isAlternate))},e.hours))})),t&&r&&_react["default"].createElement("div",{className:styles$r.alternateHoursNote},t))};StoreHoursList.propTypes={alternateHoursNote:_propTypes["default"].string,className:_propTypes["default"].string,heading:_propTypes["default"].string,hoursList:_propTypes["default"].arrayOf(_propTypes["default"].shape({dayName:_propTypes["default"].string,hours:_propTypes["default"].string,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool})),theme:_propTypes["default"].oneOf(["dark","light"])},StoreHoursList.defaultProps={alternateHoursNote:void 0,className:void 0,heading:void 0,hoursList:[],theme:"dark"};var styles$s={base:"InfoCard-module_base__Px7B2",markerCount:"InfoCard-module_markerCount__2KV2d",address:"InfoCard-module_address__27xNT",hyperlink:"InfoCard-module_hyperlink__3lMdF",phoneNumber:"InfoCard-module_phoneNumber__3YXnH"},DATA_TEST_REF="DIRECTION_URL",InfoCard=function(e){var t=e.address,a=e.className,n=e.copy,l=e.count,i=e.hasMarkerIndexes,o=e.openingHours,r=e.phoneNumber,s=e.storeName;return _react["default"].createElement("div",{className:(0,_classnames["default"])(styles$s.base,a)},_react["default"].createElement("div",{className:styles$s.markerCount},i?_react["default"].createElement("i",null,l):""),_react["default"].createElement(Heading,{level:LEVEL.THREE,size:SIZE.X_SMALL},s),t&&_react["default"].createElement("div",{className:styles$s.address},_react["default"].createElement(Hyperlink,{className:styles$s.hyperlink,dataTestRef:DATA_TEST_REF,hasTargetInNewWindow:!0,style:EXTERNAL_TEXT_LINK,title:"".concat(n.directions," ").concat(t),url:"".concat(DIRECTIONS_URL_PREFIX).concat(t)},t)),r&&_react["default"].createElement("div",{className:styles$s.phoneNumber},r),_react["default"].createElement(StoreHoursList,{alternateHoursNote:n.openingHours.alternateHoursNote,heading:n.openingHours.heading,hoursList:o}))};InfoCard.propTypes={address:_propTypes["default"].string,className:_propTypes["default"].string,copy:_propTypes["default"].shape({directions:_propTypes["default"].string,openingHours:_propTypes["default"].shape({alternateHoursNote:_propTypes["default"].string,heading:_propTypes["default"].string})}),count:_propTypes["default"].number,hasMarkerIndexes:_propTypes["default"].bool,openingHours:_propTypes["default"].arrayOf(_propTypes["default"].shape({dayName:_propTypes["default"].string,hours:_propTypes["default"].string,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool})),phoneNumber:_propTypes["default"].string,storeName:_propTypes["default"].string},InfoCard.defaultProps={address:void 0,className:void 0,copy:{directions:void 0,openingHours:{alternateHoursNote:void 0,heading:void 0}},count:void 0,hasMarkerIndexes:!1,openingHours:[],phoneNumber:void 0,storeName:void 0};var styles$t={base:"GoogleMap-module_base__1P8dt",wrapper:"GoogleMap-module_wrapper__8GLW1",map:"GoogleMap-module_map__3eW2a",loading:"GoogleMap-module_loading__2bJC_",infoCardBlock:"GoogleMap-module_infoCardBlock__1_9Zy",footer:"GoogleMap-module_footer__AGgO4",viewStoreLabel:"GoogleMap-module_viewStoreLabel__sfxZT",viewStoreLinkWrapper:"GoogleMap-module_viewStoreLinkWrapper__SnrFS",viewStoreLink:"GoogleMap-module_viewStoreLink__3YYe0"},GoogleMap=function(e){var t=e.center,a=e.className,n=e.copy,l=e.customMarker,i=e.hasMarkerIndexes,o=e.id,r=e.initialZoom,s=e.places,d=useGoogleMapsContext(),u=d.googleMap,c=d.isLoading,m=(0,_react.useRef)(),f=(0,_react.useRef)(),p=(0,_react.useRef)(null),h=(0,_react.useRef)(null),g=(0,_react.useRef)(ascertainIsSmallOnlyViewport()),_=(0,_react.useRef)(ascertainIsMediumViewport()),y=(0,_react.useState)(null),b=_slicedToArray(y,2),E=b[0],C=b[1],T=(0,_react.useState)([]),N=_slicedToArray(T,2),k=N[0],v=N[1],S=(0,_react.useState)([]),I=_slicedToArray(S,2),x=I[0],A=I[1],w,O,R,P;useWindowHasResized(function(){p.current&&p.current.close(),C(null)});var L=(0,_react.useCallback)(function(){if(u)return new u.maps.Map(m.current,{center:t,mapTypeControl:MapOptions.SHOW_MAP_TYPE_CONTROL,scrollwheel:MapOptions.SCROLL_WHEEL_ENABLED,styles:MapOptions.MAP_STYLES,zoom:r,clickableIcons:!1})},[t,r,u]);g.current=ascertainIsSmallOnlyViewport(),_.current=ascertainIsMediumViewport();var M=function(){k.forEach(function(e){return e.setMap(null)}),v([])},D=function(){isFunction_1(x.clearMarkers)&&x.clearMarkers(),A(null)};(0,_react.useEffect)(function(){return f.current=L(),u&&(h.current=u.maps.event.addListener(f.current,"click",function(){p.current&&p.current.close()}),v(function(){return[l].concat(_toConsumableArray(s)).filter(function(e){return void 0!==(null===e||void 0===e?void 0:e.lat)&&void 0!==(null===e||void 0===e?void 0:e.lng)}).map(function(e,t){return e.type===MARKER_TYPE.PIN?H(e,t):F(e,t,0===t)})})),function(){u&&(u.maps.event.removeListener(h.current),M())};// eslint-disable-next-line react-hooks/exhaustive-deps
},[L,l,s,u]),(0,_react.useEffect)(function(){var e={styles:[_objectSpread2({url:CLUSTER_IMAGE_PATH},MapOptions.MAP_MARKER_CLUSTER)]};return u&&A(function(){return new _markerclusterer["default"](f.current,k,e)}),function(){D()};// eslint-disable-next-line react-hooks/exhaustive-deps
},[k]);var H=(0,_react.useCallback)(function(e,t){return new u.maps.Marker({position:new u.maps.LatLng(parseFloat(e.lat),parseFloat(e.lng)),clickable:!1,map:f.current,icon:_objectSpread2({anchor:new u.maps.Point(MapOptions.MAP_MARKER_ANCHOR_X,MapOptions.MAP_MARKER_ANCHOR_Y),labelOrigin:new u.maps.Point(MapOptions.MAP_LABEL_ORIGIN_X,MapOptions.MAP_LABEL_ORIGIN_Y)},MapOptions.MAP_MARKER),label:_objectSpread2({text:i?"".concat(t+1):" "},MapOptions.MAP_LABEL)})},[i,u]),F=(0,_react.useCallback)(function(e){var t=e.address,a=e.lat,o=e.lng,r=e.openingHours,s=e.phoneNumber,d=e.storeName,c=e.storeType,m=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,h=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],y=c===LOCATION_TYPES.STOCKIST||c===LOCATION_TYPES.DEPARTMENT_STORE,b=!h&&(l||y)?MapOptions.STOCKIST_MAP_MARKER:MapOptions.MAP_MARKER,E=new u.maps.Marker({position:new u.maps.LatLng(parseFloat(a),parseFloat(o)),map:f.current,icon:_objectSpread2({anchor:new u.maps.Point(MapOptions.MAP_MARKER_ANCHOR_X,MapOptions.MAP_MARKER_ANCHOR_Y),labelOrigin:new u.maps.Point(MapOptions.MAP_LABEL_ORIGIN_X,MapOptions.MAP_LABEL_ORIGIN_Y)},b),title:d,label:_objectSpread2({text:i?"".concat(m+1):" "},MapOptions.MAP_LABEL)}),T=new u.maps.InfoWindow({content:server.renderToString(_react["default"].createElement(InfoCard,{address:t,copy:{directions:n.directions,openingHours:n.openingHours},count:m+1,openingHours:r,phoneNumber:s,storeName:d}))});return E.addListener("click",function(){_.current&&(p.current&&p.current.close(),p.current=T,p.current.open(f.current,E)),g.current&&C({address:t,count:m+1,phoneNumber:s,storeName:d,openingHours:r})}),E},[u,n,l,i,_,g]),B=(0,_classnames["default"])(styles$t.base,a);return _react["default"].createElement("div",{className:B},_react["default"].createElement("div",{className:styles$t.wrapper},_react["default"].createElement(Loading,{className:styles$t.loading,isLoading:c}),_react["default"].createElement("div",{className:styles$t.map,id:o,ref:m})),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:!!E,type:TYPE.SHIFT_IN_DOWN},_react["default"].createElement(InfoCard,{address:null===E||void 0===E?void 0:E.address,className:styles$t.infoCardBlock,copy:{directions:n.directions,openingHours:n.openingHours},count:null===E||void 0===E?void 0:E.count,hasMarkerIndexes:i,openingHours:null===E||void 0===E?void 0:E.openingHours,phoneNumber:null===E||void 0===E?void 0:E.phoneNumber,storeName:null===E||void 0===E?void 0:E.storeName})),_react["default"].createElement("footer",{className:styles$t.footer},_react["default"].createElement("div",{className:styles$t.viewStoreLabel},null===(w=n.storeLocator)||void 0===w?void 0:w.message),_react["default"].createElement("div",{className:styles$t.viewStoreLinkWrapper},_react["default"].createElement(Hyperlink,{className:styles$t.viewStoreLink,style:INTERNAL_TEXT_LINK,title:null===(O=n.storeLocator)||void 0===O?void 0:O.title,url:null===(R=n.storeLocator)||void 0===R?void 0:R.url},null===(P=n.storeLocator)||void 0===P?void 0:P.label))))};GoogleMap.propTypes={center:_propTypes["default"].shape({lat:_propTypes["default"].number,lng:_propTypes["default"].number}).isRequired,className:_propTypes["default"].string,copy:_propTypes["default"].shape({directions:_propTypes["default"].string,storeLocator:_propTypes["default"].shape({label:_propTypes["default"].string,message:_propTypes["default"].string,title:_propTypes["default"].string,url:_propTypes["default"].string}),openingHours:_propTypes["default"].shape({alternateHoursNote:_propTypes["default"].string,heading:_propTypes["default"].string})}),customMarker:_propTypes["default"].shape({lat:_propTypes["default"].number,lng:_propTypes["default"].number,type:_propTypes["default"].oneOf(["PIN","PLACE"])}),hasMarkerIndexes:_propTypes["default"].bool,id:_propTypes["default"].string,initialZoom:_propTypes["default"].number,places:_propTypes["default"].arrayOf(_propTypes["default"].shape({lat:_propTypes["default"].number,lng:_propTypes["default"].number,id:_propTypes["default"].string,storeName:_propTypes["default"].string,storeType:_propTypes["default"].string,address:_propTypes["default"].string,phoneNumber:_propTypes["default"].string,openingHours:_propTypes["default"].array}))},GoogleMap.defaultProps={center:{},className:void 0,copy:{directions:"Directions to",storeLocator:{label:"Store locator",message:"Visit our nearby stores.",title:"Open store locator link",url:"/"},openingHours:{alternateHoursNote:"Special opening hours",heading:"Opening hours"}},customMarker:void 0,hasMarkerIndexes:!0,id:void 0,initialZoom:MapOptions.MAP_INITIAL_ZOOM,places:[]};// import styles from './Hidden.module.css';
var Hidden=function(e){var t=e.children,a=e.isLarge,n=e.isMedium,l=e.isSmall,i=e.isXLarge;// const classSet = cx(
//   {
//     [styles.small]: isSmall,
//     [styles.medium]: isMedium,
//     [styles.large]: isLarge,
//     [styles.xLarge]: isXLarge,
//     [styles.hidden]: isSmall || isMedium || isLarge || isXLarge,
//   },
//   className,
// );
//
// return <div className={classSet}>{children}</div>;
useWindowHasResized();var o=l&&ascertainIsSmallOnlyViewport(),r=n&&ascertainIsMediumOnlyViewport(),s=a&&ascertainIsLargeOnlyViewport(),d=i&&ascertainIsXLargeViewport();return o||r||s||d?null:_react["default"].createElement(_react["default"].Fragment,null,t)};Hidden.propTypes={children:_propTypes["default"].any,isLarge:_propTypes["default"].bool,isMedium:_propTypes["default"].bool,isSmall:_propTypes["default"].bool,isXLarge:_propTypes["default"].bool},Hidden.defaultProps={children:void 0,isLarge:!1,isMedium:!1,isSmall:!1,isXLarge:!1};var ImageCarousel=function(e){var t=e.className,a=e.slides;return _react["default"].createElement(Carousel,{className:t,hasFlushPagination:!0,hasFullWidthSlides:!0,hasShowCaption:!0,hasSlideCounter:!0,slides:a})};ImageCarousel.propTypes={className:_propTypes["default"].string,slides:_propTypes["default"].arrayOf(_propTypes["default"].shape({caption:_propTypes["default"].string,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired})),theme:_propTypes["default"].oneOf(["dark","light"])},ImageCarousel.defaultProps={className:void 0,slides:[],theme:"dark"};var styles$u={base:"List-module_base__wbAa2",dark:"List-module_dark__396s9",light:"List-module_light__2gCzU",item:"List-module_item__Ru4zd"},List=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.items,l=e.listItemClassName,i=e.theme,o=(0,_classnames["default"])(styles$u.base,styles$u[i],a);return _react["default"].createElement("ul",{className:o,ref:t},n.map(function(e){var t=e.content,a=e.id;return _react["default"].createElement("li",{className:(0,_classnames["default"])(styles$u.item,l),key:a},t)}))});List.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]).isRequired,id:_propTypes["default"].string.isRequired})).isRequired,listItemClassName:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},List.defaultProps={className:void 0,items:void 0,listItemClassName:void 0,theme:"dark"};var styles$v={base:"KitList-module_base__ojyC-",item:"KitList-module_item__2z-sW",dark:"KitList-module_dark__JqFfF",light:"KitList-module_light__1IVl5",slideIn:"KitList-module_slideIn__36yxB"},KitList=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.isVisible,l=e.items,i=e.theme,o=(0,_classnames["default"])(styles$v.base,styles$v[i],a),r=(0,_classnames["default"])(styles$v.item,_defineProperty({},styles$v.slideIn,n));return _react["default"].createElement(List,{className:o,items:l,listItemClassName:r,ref:t,theme:i})});KitList.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]).isRequired,id:_propTypes["default"].string.isRequired})).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},KitList.defaultProps={className:void 0,isVisible:!0,items:void 0,theme:"dark"};var styles$w={base:"Media-module_base__3Naat",hasFullWidthImage:"Media-module_hasFullWidthImage__3x6dj",hero:"Media-module_hero__soug-",foregroundImage:"Media-module_foregroundImage__1XF6r",media:"Media-module_media__3oMSD"},Media=function(e){var t=e.className,a=e.foregroundImage,n=e.hasFullWidthImage,l=e.isHero,i=e.media,o=(0,_classnames["default"])(t,styles$w.base,_defineProperty({},styles$w.hero,l),_defineProperty({},styles$w.hasFullWidthImage,n));return _react["default"].createElement("div",{className:o},_react["default"].createElement(Figure,{className:styles$w.media},i),a&&_react["default"].createElement(Figure,{className:styles$w.foregroundImage},a))};Media.propTypes={className:_propTypes["default"].string,foregroundImage:_propTypes["default"].element,hasFullWidthImage:_propTypes["default"].bool,isHero:_propTypes["default"].bool,media:_propTypes["default"].element.isRequired},Media.defaultProps={className:void 0,foregroundImage:void 0,hasFullWidthImage:!1,isHero:!1,media:void 0};var styles$x={base:"Content-module_base__2wNf2",hasFullWidthImage:"Content-module_hasFullWidthImage__3FSu5",reverse:"Content-module_reverse__2G1Xa",hero:"Content-module_hero__1iAF0",innerWrapper:"Content-module_innerWrapper__1P8Uo",header:"Content-module_header__1Zhc4",section:"Content-module_section__2bLv3",eyebrow:"Content-module_eyebrow__B-RXm",content:"Content-module_content__1jnOX",notHero:"Content-module_notHero__2c5cY",dark:"Content-module_dark__1gS5r",light:"Content-module_light__1Y0Af",description:"Content-module_description__2mhCr"},Content=function(e){var t=e.className,a=e.content,n=e.copy,l=e.hasFullWidthImage,i=e.isHero,o=e.isReverse,r=e.theme,s=(0,_classnames["default"])(t,styles$x.base,_defineProperty({},styles$x.reverse,o),_defineProperty({},styles$x.hero,i),_defineProperty({},styles$x.notHero,!i),_defineProperty({},styles$x.hasFullWidthImage,l),_defineProperty({},styles$x.hasHalfWidthImage,!l),styles$x[r.toLowerCase()]);return _react["default"].createElement("div",{className:s},_react["default"].createElement("div",{className:styles$x.innerWrapper},_react["default"].createElement(SectionHeading,{childrenClassNames:{eyebrow:styles$x.eyebrow},className:styles$x.header,eyebrow:n.eyebrow,hasSerifFontHeading:!0,heading:n.heading,isFlush:!0,subHeading:n.subHeading,theme:r}),_react["default"].createElement("div",{className:styles$x.content},n.description&&_react["default"].createElement(ParagraphSet,{className:styles$x.description,theme:r},n.description),a)))};Content.propTypes={className:_propTypes["default"].string,content:_propTypes["default"].any,copy:_propTypes["default"].shape({description:_propTypes["default"].any,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}).isRequired,hasFullWidthImage:_propTypes["default"].bool,isHero:_propTypes["default"].bool,isReverse:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Content.defaultProps={className:void 0,content:void 0,copy:{description:void 0,eyebrow:void 0,heading:void 0,subHeading:void 0},hasFullWidthImage:!1,isHero:!1,isReverse:!1,theme:"dark"};var styles$y={base:"MediaWithContent-module_base__27eiZ",hero:"MediaWithContent-module_hero__Uj-t2",reverse:"MediaWithContent-module_reverse__1St4I"},MediaWithContent=(0,_react.forwardRef)(function(e,t){var a=e.backgroundColor,n=e.className,l=e.content,i=e.copy,o=e.foregroundImage,r=e.hasFullWidthImage,s=e.isHero,d=e.isReverse,u=e.media,c=e.theme,m=(0,_classnames["default"])(styles$y.base,_defineProperty({},styles$y.reverse,d),_defineProperty({},styles$y.hero,s),n),f=a?{backgroundColor:a}:void 0;return _react["default"].createElement("section",{className:m,ref:t,style:f},_react["default"].createElement(Media,{className:styles$y.media,foregroundImage:o,hasFullWidthImage:r,isHero:s,media:u}),_react["default"].createElement(Content,{content:l,copy:i,hasFullWidthImage:r,isHero:s,isReverse:d,theme:c}))});MediaWithContent.propTypes={backgroundColor:_propTypes["default"].string,className:_propTypes["default"].string,content:_propTypes["default"].any,copy:_propTypes["default"].shape({description:_propTypes["default"].any,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}).isRequired,foregroundImage:_propTypes["default"].element,hasFullWidthImage:_propTypes["default"].bool,isHero:_propTypes["default"].bool,isReverse:_propTypes["default"].bool,media:_propTypes["default"].element.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},MediaWithContent.defaultProps={backgroundColor:"#F6F5E8",className:void 0,content:void 0,copy:{description:void 0,eyebrow:void 0,heading:void 0,subHeading:void 0},foregroundImage:void 0,hasFullWidthImage:!1,isHero:!1,isReverse:!1,media:void 0,theme:"dark"};var styles$z={base:"ModalBody-module_base__3I-jF",isVisible:"ModalBody-module_isVisible__1QTme",closeIcon:"ModalBody-module_closeIcon__3aJW5",closeButton:"ModalBody-module_closeButton__2UtNd"},ModalBody=function(e){var t=e.children,a=e.className,n=e.copy,l=e.onClose,i=e.isVisible,o=e.theme,r=(0,_classnames["default"])(styles$z.base,_defineProperty({},styles$z.isVisible,i),styles$z[o],a);return _react["default"].createElement("div",{className:r},t,_react["default"].createElement(Button,{className:styles$z.closeButton,dataTestRef:"MODAL_CLOSE_BUTTON",isInline:!0,onClick:l,theme:o,title:n.close},_react["default"].createElement(Icon,{className:styles$z.closeIcon,height:14,name:"close",theme:o,width:14})))};ModalBody.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,copy:_propTypes["default"].shape({close:_propTypes["default"].string}).isRequired,onClose:_propTypes["default"].func.isRequired,isVisible:_propTypes["default"].bool.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},ModalBody.defaultProps={children:void 0,className:void 0,copy:void 0,onClose:void 0,isVisible:void 0,theme:"dark"};var styles$A={base:"Modal-module_base__1XCSr",inner:"Modal-module_inner__3QC4Z"},Modal=function(e){var t=e.children,a=e.className,n=e.copy,l=e.isVisible,i=e.onClose,o=e.portalId,r=e.theme;useEscapeKeyListener(i),useOverflowHidden(l);var s=(0,_classnames["default"])(styles$A.base,styles$A[r],a),d=document.getElementById(o);return d?_react["default"].createElement(_react["default"].Fragment,null,_reactDom["default"].createPortal(_react["default"].createElement("aside",{"aria-hidden":!l,className:s},_react["default"].createElement(Overlay,{isVisible:l,onClose:i}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:l,type:"zoom"},_react["default"].createElement("div",{className:styles$A.inner},_react["default"].createElement(ModalBody,{copy:n,isVisible:l,onClose:i,theme:r},t)))),d)):null};Modal.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,copy:_propTypes["default"].shape({close:_propTypes["default"].string}),isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func,portalId:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Modal.defaultProps={children:void 0,className:void 0,copy:{copy:""},isVisible:void 0,onClose:void 0,portalId:"aesopModal",theme:"dark"};var styles$B={base:"Podium-module_base__3-gFX",smallPaddingTop:"Podium-module_smallPaddingTop__Qcc07",mediumPaddingTop:"Podium-module_mediumPaddingTop__1dN90",largePaddingTop:"Podium-module_largePaddingTop__1TSH3",smallPaddingBottom:"Podium-module_smallPaddingBottom__2FJ28",mediumPaddingBottom:"Podium-module_mediumPaddingBottom__2Mu5C",largePaddingBottom:"Podium-module_largePaddingBottom__1gNd0",smallPaddingLeft:"Podium-module_smallPaddingLeft__3wFWU",smallPaddingRight:"Podium-module_smallPaddingRight__13fPX"},Podium=(0,_react.forwardRef)(function(e,t){var a=e.backgroundColor,n=e.children,l=e.className,i=e.horizontalPadding,o=e.isActive,r=e.paddingBottom,s=e.paddingTop,d=e.transition,u=e.verticalPadding,c=(0,_classnames["default"])(styles$B.base,styles$B["".concat(s?s:u,"PaddingTop")],styles$B["".concat(r?r:u,"PaddingBottom")],styles$B["".concat(i,"PaddingLeft")],styles$B["".concat(i,"PaddingRight")],l),m=a?{backgroundColor:a}:void 0;return _react["default"].createElement(Transition,{isActive:o,type:d},_react["default"].createElement("section",{className:c,ref:t,style:m},n))});Podium.propTypes={backgroundColor:_propTypes["default"].string,children:_propTypes["default"].node,className:_propTypes["default"].string,horizontalPadding:_propTypes["default"].oneOf(["none","small"]),isActive:_propTypes["default"].bool,paddingTop:_propTypes["default"].oneOf(["none","small","medium","large"]),paddingBottom:_propTypes["default"].oneOf(["none","small","medium","large"]),transition:_propTypes["default"].oneOf(["fade","shiftInDown","shiftInLeft","slideDown","slideRight","slowFade","zoom"]),verticalPadding:_propTypes["default"].oneOf(["none","small","medium","large"])},Podium.defaultProps={backgroundColor:void 0,children:void 0,className:void 0,horizontalPadding:"none",isActive:!0,paddingTop:void 0,paddingBottom:void 0,transition:"fade",verticalPadding:"none"};var styles$C={base:"Quote-module_base__2H3wf",dark:"Quote-module_dark__ocCjZ",light:"Quote-module_light__2dKx5",wrapper:"Quote-module_wrapper__1S4Pe",blockquote:"Quote-module_blockquote__1Ap9l",author:"Quote-module_author__3tPnl"},Quote=function(e){var t=e.author,a=e.className,n=e.content,l=e.theme,i=(0,_classnames["default"])(styles$C.base,styles$C[l],a);return _react["default"].createElement("div",{className:i},_react["default"].createElement("div",{className:styles$C.wrapper},_react["default"].createElement("blockquote",{className:styles$C.blockquote},n),_react["default"].createElement("cite",{className:styles$C.author},t)))};Quote.propTypes={author:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,content:_propTypes["default"].string.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},Quote.defaultProps={author:void 0,className:void 0,content:void 0,theme:"dark"};var styles$D={base:"RadioGroup-module_base__1BFm6",radio:"RadioGroup-module_radio__1zAWS",input:"RadioGroup-module_input__Qk38H",dark:"RadioGroup-module_dark__1sDrv",light:"RadioGroup-module_light__3vm1F",label:"RadioGroup-module_label__1Z1-P",labelContent:"RadioGroup-module_labelContent__3VPl4",singleLabel:"RadioGroup-module_singleLabel__2EXn9",pot:"RadioGroup-module_pot__2kVPH"},RadioGroup=function(e){var t=e.className,a=e.errorMessage,n=e.name,l=e.onChange,i=e.options,o=e.testReference,r=e.theme,s=e.value,d=(0,_classnames["default"])(styles$D.base,t);return 0===i.length?null:1===i.length?_react["default"].createElement("div",{className:d},_react["default"].createElement("span",{className:(0,_classnames["default"])(styles$D.singleLabel,styles$D[r])},i[0].label)):_react["default"].createElement("ul",{className:d},i.map(function(e){var t=e.label,a=e.value;return _react["default"].createElement("li",{className:styles$D.radio,key:a},_react["default"].createElement("label",{className:(0,_classnames["default"])(styles$D.label),htmlFor:"option-".concat(a)},_react["default"].createElement("input",{"aria-checked":a===s,checked:a===s,className:styles$D.input,"data-test-ref":o,id:"option-".concat(a),name:n,onChange:l,tabIndex:0,type:"radio",value:a}),_react["default"].createElement("span",{className:(0,_classnames["default"])(styles$D.pot,styles$D[r])}),_react["default"].createElement("span",{className:(0,_classnames["default"])(styles$D.labelContent,styles$D[r])},t)))}),_react["default"].createElement("div",{className:styles$D.errorMessage},a))};RadioGroup.propTypes={className:_propTypes["default"].string,errorMessage:_propTypes["default"].string,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,options:_propTypes["default"].arrayOf(_propTypes["default"].shape({label:_propTypes["default"].string,value:_propTypes["default"].string})),testReference:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"]),value:_propTypes["default"].string},RadioGroup.defaultProps={className:void 0,errorMessage:"",name:void 0,onChange:void 0,options:[],testReference:void 0,theme:"dark",value:void 0};var styles$E={base:"Select-module_base__2hN67",label:"Select-module_label__uQB3s",errorMessage:"Select-module_errorMessage__16VE8",hasError:"Select-module_hasError__3LYC4",input:"Select-module_input__3pZ0Q",dark:"Select-module_dark__2yToU",light:"Select-module_light__2YaMZ",isBlock:"Select-module_isBlock__20_Mi",icon:"Select-module_icon__2PuKc",hasFocus:"Select-module_hasFocus__3bMed"},Select=function(e){var t=e.className,a=e.errorMessage,n=e.isBlock,l=e.label,i=e.name,o=e.onBlur,r=e.onChange,s=e.onFocus,d=e.options,u=e.testReference,c=e.theme,m=e.value,f=(0,_react.useState)(!1),p=_slicedToArray(f,2),h=p[0],g=p[1],_=(0,_classnames["default"])(styles$E.base,_defineProperty({},styles$E.hasFocus,m||h),_defineProperty({},styles$E.hasError,a),styles$E[c],t);return _react["default"].createElement("div",{className:_},_react["default"].createElement("label",{className:(0,_classnames["default"])(styles$E.label),htmlFor:i},l),_react["default"].createElement("select",{className:(0,_classnames["default"])(styles$E.input,_defineProperty({},styles$E.isBlock,n)),"data-test-ref":u,id:i,name:i,onBlur:function(e){o&&o(e),g(!1)},onChange:r,onFocus:function(e){s&&s(e),g(!0)},value:m},l&&_react["default"].createElement("option",{value:""}),d.map(function(e){var t=e.id,a=e.label,n=e.value;return _react["default"].createElement("option",{key:t||n,value:n},a)})),_react["default"].createElement(Icon,{className:styles$E.icon,height:15,name:"chevron",theme:c,width:15}),_react["default"].createElement("div",{className:styles$E.errorMessage},a))};Select.propTypes={className:_propTypes["default"].string,errorMessage:_propTypes["default"].string,isBlock:_propTypes["default"].bool,label:_propTypes["default"].string,name:_propTypes["default"].string.isRequired,onBlur:_propTypes["default"].func,onChange:_propTypes["default"].func.isRequired,onFocus:_propTypes["default"].func,options:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string,label:_propTypes["default"].string,value:_propTypes["default"].string})),testReference:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"]),value:_propTypes["default"].string},Select.defaultProps={className:void 0,errorMessage:"",isBlock:!1,label:void 0,name:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,options:[],testReference:void 0,theme:"dark",value:void 0};var styles$F={base:"TwoColumnLayout-module_base__2yBvR",sidebar:"TwoColumnLayout-module_sidebar__ahl3O",content:"TwoColumnLayout-module_content__3aiag",fullWidth:"TwoColumnLayout-module_fullWidth__3SACE",reverse:"TwoColumnLayout-module_reverse__3PqUh",contentOnly:"TwoColumnLayout-module_contentOnly__3ilps"},TwoColumnLayout=function(e){var t=e.childrenClassNames,a=e.className,n=e.content,l=e.hasRightPadding,i=e.id,o=e.isReversed,r=e.sidebar,s=e.theme,d=(0,_classnames["default"])(styles$F.base,_defineProperty({},styles$F.reverse,o),_defineProperty({},styles$F.contentOnly,!r),styles$F[s],a),u=(0,_classnames["default"])(styles$F.content,_defineProperty({},styles$F.fullWidth,!l),t.content),c=(0,_classnames["default"])(styles$F.sidebar,t.sidebar);return _react["default"].createElement("div",{className:d,id:i},_react["default"].createElement("div",{className:u,id:"mainColumn"},n),r&&_react["default"].createElement("aside",{className:c,id:"sidebarColum"},r))};TwoColumnLayout.propTypes={childrenClassNames:_propTypes["default"].shape({sidebar:_propTypes["default"].string,content:_propTypes["default"].string}),className:_propTypes["default"].string,content:_propTypes["default"].any.isRequired,hasRightPadding:_propTypes["default"].bool,id:_propTypes["default"].string,isReversed:_propTypes["default"].bool,sidebar:_propTypes["default"].any,theme:_propTypes["default"].oneOf(["dark","light"])},TwoColumnLayout.defaultProps={childrenClassNames:{sidebar:void 0,content:void 0},className:void 0,content:void 0,hasRightPadding:!0,id:void 0,isReversed:!0,sidebar:void 0,theme:"dark"};var styles$G={base:"StoreDetailHeader-module_base__1Ud60",detailBlock:"StoreDetailHeader-module_detailBlock__sGEFp",detail:"StoreDetailHeader-module_detail___dDdT",detailHeading:"StoreDetailHeader-module_detailHeading__Ti1q2",detailContent:"StoreDetailHeader-module_detailContent__9KI3h",dark:"StoreDetailHeader-module_dark__3Qz-J",light:"StoreDetailHeader-module_light__2ZBqX",hyperlink:"StoreDetailHeader-module_hyperlink__2Ck8_"},DATA_TEST_REF_LOCATION="STORE_DETAILS_DIRECTION_LINK",DATA_TEST_REF_EMAIL="STORE_DETAILS_DIRECTION_EMAIL",DATA_TEST_REF_PHONE="STORE_DETAILS_DIRECTION_PHONE",StoreDetailHeader=function(e){var t=e.alternateHoursNote,a=e.className,n=e.copy,l=e.email,i=e.location,o=e.openingHours,r=e.phone,s=e.storeName,d=e.theme,u=(0,_classnames["default"])(styles$G.base,styles$G[d],a),c=[{label:n.location,content:i?_react["default"].createElement(Hyperlink,{className:styles$G.hyperlink,dataTestRef:DATA_TEST_REF_LOCATION,hasTargetInNewWindow:!0,style:EXTERNAL_TEXT_LINK,theme:d,title:"".concat(n.location,": ").concat(i),url:"".concat(DIRECTIONS_URL_PREFIX).concat(i)},i):null,id:"location"},{label:n.email,content:l?_react["default"].createElement(Hyperlink,{className:styles$G.hyperlink,dataTestRef:DATA_TEST_REF_EMAIL,hasTargetInNewWindow:!0,style:EXTERNAL_TEXT_LINK,theme:d,title:l,url:"mailto:".concat(l)},l):null,id:"email"},{label:n.phone,content:r?_react["default"].createElement(Hyperlink,{className:styles$G.hyperlink,dataTestRef:DATA_TEST_REF_PHONE,hasTargetInNewWindow:!1,style:EXTERNAL_NO_ICON_TEXT_LINK,theme:d,title:"tel: ".concat(r),url:"tel:".concat(r)},r):null,id:"phone"},{label:n.openingHours,content:_react["default"].createElement(StoreHoursList,{alternateHoursNote:t,hoursList:o,theme:d}),id:"openingHours"}];return _react["default"].createElement(TwoColumnLayout,{className:u,content:_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(Heading,{level:LEVEL.ONE,size:SIZE.LARGE,theme:d},s),_react["default"].createElement("div",{className:styles$G.detailBlock},c.filter(function(e){var t=e.label,a=e.content;return t&&a}).map(function(e){var t=e.label,a=e.content,n=e.id;return _react["default"].createElement("div",{className:styles$G.detail,key:n},_react["default"].createElement(Heading,{className:styles$G.detailHeading,level:LEVEL.THREE,size:SIZE.X_X_SMALL,theme:d},t),_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$G.detailContent)},a))}))),hasRightPadding:!1,isReversed:!0})};StoreDetailHeader.propTypes={alternateHoursNote:_propTypes["default"].string,className:_propTypes["default"].string,copy:_propTypes["default"].shape({location:_propTypes["default"].string,email:_propTypes["default"].string,phone:_propTypes["default"].string,openingHours:_propTypes["default"].string}),email:_propTypes["default"].string,location:_propTypes["default"].string,openingHours:_propTypes["default"].array,phone:_propTypes["default"].string,storeName:_propTypes["default"].string.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},StoreDetailHeader.defaultProps={alternateHoursNote:void 0,className:void 0,copy:{location:void 0,email:void 0,phone:void 0,openingHours:void 0},email:void 0,location:void 0,openingHours:void 0,phone:void 0,storeName:void 0,theme:"dark"};var styles$H={base:"SubNav-module_base__3LIXq",heading:"SubNav-module_heading__25EKa",dark:"SubNav-module_dark__2Xs3T",light:"SubNav-module_light__1B3lz",itemList:"SubNav-module_itemList__25xiF"},getLinkItems=function(e,t){return e.map(function(e){var a=e.id,n=e.style,l=e.children,i=e.url;return{content:_react["default"].createElement(Hyperlink,{className:styles$H.itemList,style:n,theme:t,url:i},l),id:a}})},SubNav=function(e){var t=e.className,a=e.heading,n=e.headingClassName,l=e.id,i=e.isSelect,o=e.links,r=e.theme;useWindowHasResized();var s=(0,_classnames["default"])(styles$H.base,t),d=ascertainIsSmallOrMediumOnlyViewport();return _react["default"].createElement("nav",{className:s},a&&_react["default"].createElement(Heading,{className:(0,_classnames["default"])(styles$H.heading,n),level:"3",noMargin:!0,size:"small",theme:r},a),i&&d?_react["default"].createElement(Select,{isBlock:i,name:l,onChange:function(e){window.location.href=e.target.value},options:o.map(function(e){var t=e.children,a=e.id,n=e.url;return{id:a,label:t,value:n}}),theme:r}):_react["default"].createElement(List,{items:getLinkItems(o,r),theme:r}))};SubNav.propTypes={className:_propTypes["default"].string,id:_propTypes["default"].string,isSelect:_propTypes["default"].bool,links:_propTypes["default"].arrayOf(_propTypes["default"].object).isRequired/** @TODO hyperlink type */,heading:_propTypes["default"].string,headingClassName:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},SubNav.defaultProps={className:void 0,id:void 0,isSelect:!1,links:void 0,heading:void 0,headingClassName:void 0,theme:"dark"};var styles$I={base:"TwoColumnList-module_base__rFZFc",subHeading:"TwoColumnList-module_subHeading__2ubT9",column:"TwoColumnList-module_column__23aK9",wrapper:"TwoColumnList-module_wrapper__3K7T4",dark:"TwoColumnList-module_dark__2vxrl",light:"TwoColumnList-module_light__bZ60S",list:"TwoColumnList-module_list__FcSTT"},Column=function(e){var t=e.lists,a=e.theme;return t.map(function(e){var t=e.heading,n=e.id,l=e.items,i=e.subHeading,o=l.map(function(e){var t=e.id,n=e.style,l=e.text,i=e.url,o=e.openInANewWindow,r=e.type;return i?{content:_react["default"].createElement(Hyperlink,{openInANewWindow:o,style:n,theme:a,type:r,url:i},l),id:t}:{content:l,id:t}});return _react["default"].createElement("div",{className:styles$I.wrapper,key:n},t&&_react["default"].createElement(Heading,{level:"2",size:"medium",theme:a},t),i&&_react["default"].createElement(Heading,{className:styles$I.subHeading,level:"3",size:"small",theme:a},i),o&&_react["default"].createElement(List,{className:styles$I.list,items:o,theme:a}))})},TwoColumnList=function(e){var t=e.className,a=e.leftColumn,n=e.rightColumn,l=e.theme,i=(0,_classnames["default"])(styles$I.base,styles$I[l],t);return _react["default"].createElement("div",{className:i},_react["default"].createElement("div",{className:styles$I.column},_react["default"].createElement(Column,{lists:a,theme:l})),_react["default"].createElement("div",{className:styles$I.column},_react["default"].createElement(Column,{lists:n,theme:l})))};TwoColumnList.propTypes={className:_propTypes["default"].string,leftColumn:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string,items:_propTypes["default"].array})).isRequired,rightColumn:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string,items:_propTypes["default"].array})).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},TwoColumnList.defaultProps={className:void 0,leftColumn:void 0,rightColumn:void 0,theme:"dark"};var styles$J={base:"Controls-module_base__1kwN_",fullScreenControls:"Controls-module_fullScreenControls__2TWMJ",videoTitle:"Controls-module_videoTitle__1DWab",fullScreenControlsHeader:"Controls-module_fullScreenControlsHeader__K_5Jt",activeFullScreenControls:"Controls-module_activeFullScreenControls__3gh8o",mute:"Controls-module_mute__Zo2HR",close:"Controls-module_close__2aDWj",playPauseButton:"Controls-module_playPauseButton__3KMud",activePlayPauseButton:"Controls-module_activePlayPauseButton__3vXZv",inactivePlayPauseButton:"Controls-module_inactivePlayPauseButton__2r-aT",fullScreenPlayPauseButton:"Controls-module_fullScreenPlayPauseButton__2qnFo",playPauseButtonIcon:"Controls-module_playPauseButtonIcon__3Jt62",playButtonIcon:"Controls-module_playButtonIcon__3uHZQ",progressBar:"Controls-module_progressBar__2qSO3",fullScreenProgressBar:"Controls-module_fullScreenProgressBar__1O_yi",progress:"Controls-module_progress__3LuK-",hidden:"Controls-module_hidden__3_owA"},Controls=function(e){var t=e.className,a=e.copy,n=e.hasActiveVideo,l=e.hasAllowAudio,i=e.hasPlayInFullScreen,o=e.isMobileOrTablet,r=e.isMuted,s=e.isPlaying,d=e.onAudioButtonClick,u=e.onCloseButtonClick,c=e.onPlayPauseButtonClick,m=e.progress,f=(0,_react.useState)(!0),p=_slicedToArray(f,2),h=p[0],g=p[1],_,y;useEscapeKeyListener(function(){g(!0),u()});var b=(0,_react.useRef)(null),E="undefined"!=typeof window;(0,_react.useEffect)(function(){E&&window.clearTimeout(b.current);var e=function(){g(!0),E&&(window.clearTimeout(b.current),b.current=window.setTimeout(function(){g(!1)},3e3))};n&&e();var t=debounce_1(function(){n&&e()},10);return E&&(window.addEventListener("mousemove",t),window.addEventListener("touchstart",t)),function(){E&&(window.removeEventListener("mousemove",t),window.removeEventListener("touchstart",t),window.clearTimeout(b.current))}},[E,n,i]);var C=(0,_classnames["default"])(styles$J.base,t),T=(0,_classnames["default"])(styles$J.progressBar,t,_defineProperty({},styles$J.fullScreenProgressBar,i)),N=(0,_classnames["default"])((_={},_defineProperty(_,styles$J.fullScreenControls,i),_defineProperty(_,styles$J.activeFullScreenControls,n&&i),_)),k=s?a.pauseButtonTitle:a.playButtonTitle,v=s?"pause":"play",S=ascertainIsSmallOrMediumOnlyViewport();return _react["default"].createElement("div",{className:C},l&&n&&(!i||S)&&_react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$J.mute,_defineProperty({},styles$J.hidden,!h&&s)),isInline:!0,onClick:d,title:r?a.unmuteButtonTitle:a.muteButtonTitle},_react["default"].createElement(Icon,{height:16,name:r?"muted":"unmuted",theme:"light",width:16})),_react["default"].createElement(Transition,{isActive:n&&i&&!o,type:"zoom"},_react["default"].createElement("div",{className:N},_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$J.fullScreenControlsHeader,_defineProperty({},styles$J.hidden,!h&&s))},l&&_react["default"].createElement(Button,{className:styles$J.mute,isInline:!0,onClick:d,title:r?a.unmuteButtonTitle:a.muteButtonTitle},_react["default"].createElement(Icon,{height:16,name:r?"muted":"unmuted",theme:"light",width:16})),_react["default"].createElement(Button,{className:styles$J.close,isInline:!0,onClick:function(){g(!0),u()},title:a.closeButtonTitle},_react["default"].createElement(Icon,{height:16,name:"close",theme:"light",width:16})),_react["default"].createElement(Button,{className:styles$J.fullScreenPlayPauseButton,isInline:!0,onClick:c,title:k},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(_defineProperty({},styles$J.playButtonIcon,!s)),height:10,name:v,theme:"light",width:10}))))),_react["default"].createElement(Transition,{isActive:!s&&i||o||!i,type:"fade"},_react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$J.playPauseButton,(y={},_defineProperty(y,styles$J.activePlayPauseButton,n),_defineProperty(y,styles$J.inactivePlayPauseButton,!(S||!S&&!n||!S&&!i)),_defineProperty(y,styles$J.hidden,!h&&s),y)),isInline:!0,onClick:c,title:k},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(_defineProperty({},styles$J.playButtonIcon,!s)),height:10,name:v,width:10}))),_react["default"].createElement(Transition,{isActive:n,type:"fade"},_react["default"].createElement("div",{className:T},_react["default"].createElement("div",{className:styles$J.progress,style:{width:"".concat(m,"%")}}))))};Controls.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string,muteButtonTitle:_propTypes["default"].string,pauseButtonTitle:_propTypes["default"].string,playButtonTitle:_propTypes["default"].string,unmuteButtonTitle:_propTypes["default"].string}),hasActiveVideo:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,isMobileOrTablet:_propTypes["default"].bool,isMuted:_propTypes["default"].bool,isPlaying:_propTypes["default"].bool,onAudioButtonClick:_propTypes["default"].func,onCloseButtonClick:_propTypes["default"].func,onPlayPauseButtonClick:_propTypes["default"].func,progress:_propTypes["default"].number},Controls.defaultProps={className:void 0,copy:{closeButtonTitle:"Close",muteButtonTitle:"Mute video",pauseButtonTitle:"View video",playButtonTitle:"Pause video",unmuteButtonTitle:"Unmute video"},hasActiveVideo:!1,hasAllowAudio:!1,hasPlayInFullScreen:!1,isMobileOrTablet:!1,isMuted:!0,isPlaying:!1,onAudioButtonClick:void 0,onCloseButtonClick:void 0,onPlayPauseButtonClick:void 0,progress:0};var styles$K={base:"Poster-module_base__1YXtU",isActive:"Poster-module_isActive__2lxc1"},Poster=function(e){var t=e.className,a=e.copy,n=e.isActive,l=e.large,i=e.medium,o=e.onClick,r=e.small,s=(0,_classnames["default"])(styles$K.base,_defineProperty({},styles$K.isActive,n),t);return _react["default"].createElement(Transition,{isActive:n,type:"fade"},_react["default"].createElement(Button,{className:s,isInline:!0,onClick:o,title:a.playButtonTitle},_react["default"].createElement(Image,{altText:a.altText,large:l,medium:i,small:r})))};Poster.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({playButtonTitle:_propTypes["default"].string,altText:_propTypes["default"].string}),isActive:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,onClick:_propTypes["default"].func,small:_propTypes["default"].string},Poster.defaultProps={className:void 0,copy:{playButtonTitle:void 0,altText:void 0},isActive:void 0,large:void 0,medium:void 0,onClick:void 0,small:void 0};var styles$L={base:"VideoPlayer-module_base__1NW0T",playsInFullScreen:"VideoPlayer-module_playsInFullScreen__2grcD",isPlayingInFullScreen:"VideoPlayer-module_isPlayingInFullScreen__2kBK1"},VideoPlayer=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.hasActiveVideo,l=e.hasAllowAudio,i=e.hasAutoplay,o=e.hasLoop,r=e.hasPlayInFullScreen,s=e.isActive,d=e.isMuted,u=e.large,c=e.medium,m=e.small,f=(0,_classnames["default"])(styles$L.base,(p={},_defineProperty(p,styles$L.playsInFullScreen,r),_defineProperty(p,styles$L.isPlayingInFullScreen,n&&r),p),a),p;return _react["default"].createElement(Transition,{isActive:s,type:"fade"},_react["default"].createElement("video",{autoPlay:i,className:f,controls:!1,loop:o,muted:!l||l&&d,playsInline:!0,ref:t},u&&_react["default"].createElement("source",{media:"(min-width: 1025px)",src:u,type:"video/mp4"}),c&&_react["default"].createElement("source",{media:"(min-width: 640px)",src:c,type:"video/mp4"}),m&&_react["default"].createElement("source",{media:"(min-width: 0px)",src:m,type:"video/mp4"})))});VideoPlayer.propTypes={className:_propTypes["default"].string,hasActiveVideo:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasAutoplay:_propTypes["default"].bool,hasLoop:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,isActive:_propTypes["default"].bool,isMuted:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string},VideoPlayer.defaultProps={className:void 0,hasActiveVideo:!1,hasAllowAudio:!1,hasAutoplay:!1,hasLoop:!0,hasPlayInFullScreen:!1,isActive:!0,isMuted:!0,large:void 0,medium:void 0,small:void 0};var styles$M={base:"Video-module_base__3wxiY",spanContent:"Video-module_spanContent__rtQD5",fullWidth:"Video-module_fullWidth__3pl8F",fallbackImage:"Video-module_fallbackImage__38kdv"},Video=(0,_react.forwardRef)(function(e,t){var a=e.className,n=e.copy,l=e.fallbackImage,i=e.hasControls,o=e.hasAllowAudio,r=e.hasAutoplay,s=e.hasLoop,d=e.hasSpanContent,u=e.hasPlayInFullScreen,c=e.id,m=e.isFullWidth,f=e.large,p=e.medium,h=e.poster,g=e.small,_=(0,_react.useState)(r),y=_slicedToArray(_,2),b=y[0],E=y[1],C=(0,_react.useState)(r),T=_slicedToArray(C,2),N=T[0],k=T[1],v=(0,_react.useState)(0),S=_slicedToArray(v,2),I=S[0],x=S[1],A=(0,_react.useState)(!o),w=_slicedToArray(A,2),O=w[0],R=w[1],P=ascertainIsSmallOrMediumOnlyViewport(),L=(0,_react.useRef)(),M,D;useWindowHasResized(),useOverflowHidden(N&&u&&!P),(0,_react.useEffect)(function(){var e=L.current,t=function(){var t=e.currentTime&&e.duration?100*(e.currentTime/e.duration):0;x(t)};return e&&e.addEventListener("timeupdate",t),function(){e&&e.removeEventListener("timeupdate",t)}});var H=function(){L.current.pause(),E(!1),k(!1),window.setTimeout(function(){L.current.currentTime=0,L.current.load(),x(0)},500)},F=function(){L.current.play(),E(!0),k(!0)};useEscapeKeyListener(H);var B=b?function(){L.current.pause(),E(!1)}:F,W=(0,_classnames["default"])(styles$M.base,a,(M={},_defineProperty(M,styles$M.spanContent,d),_defineProperty(M,styles$M.fullWidth,m),M));if(!(f||p||g)&&l){var U;return _react["default"].createElement("figure",{className:W,id:c,ref:t},_react["default"].createElement(Image,{altText:null===(U=l.copy)||void 0===U?void 0:U.altText,className:(0,_classnames["default"])(styles$M.fallbackImage,l.className),large:l.large,medium:l.medium,small:l.small}))}return _react["default"].createElement("div",{className:W,id:c,ref:t,role:"group"},_react["default"].createElement(VideoPlayer,{hasActiveVideo:N,hasAllowAudio:o,hasAutoplay:r,hasLoop:s,hasPlayInFullScreen:u,isActive:!h||N,isMuted:O,large:f,medium:p,ref:L,small:g}),_react["default"].createElement(Poster,{copy:{playButtonTitle:n.playButtonTitle,altText:null===(D=h.copy)||void 0===D?void 0:D.altText},isActive:!N,large:h.large,medium:h.medium,onClick:function(){return F()},small:h.small}),i&&_react["default"].createElement(Controls,{copy:{closeButtonTitle:n.closeButtonTitle,pauseButtonTitle:n.pauseButtonTitle,playButtonTitle:n.playButtonTitle,muteButtonTitle:n.muteButtonTitle,unmuteButtonTitle:n.unmuteButtonTitle},hasActiveVideo:N,hasAllowAudio:o,hasPlayInFullScreen:u,isMobileOrTablet:P,isMuted:O,isPlaying:b,onAudioButtonClick:function(){return R(!O)},onCloseButtonClick:H,onPlayPauseButtonClick:B,progress:I}))});Video.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string,muteButtonTitle:_propTypes["default"].string,playButtonTitle:_propTypes["default"].string,pauseButtonTitle:_propTypes["default"].string,unmuteButtonTitle:_propTypes["default"].string}),fallbackImage:_propTypes["default"].shape({className:_propTypes["default"].string,copy:_propTypes["default"].shape({altText:_propTypes["default"].string}),large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),hasControls:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasAutoplay:_propTypes["default"].bool,hasLoop:_propTypes["default"].bool,hasSpanContent:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,id:_propTypes["default"].string,isFullWidth:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,poster:_propTypes["default"].shape({className:_propTypes["default"].string,copy:_propTypes["default"].shape({playButtonTitle:_propTypes["default"].string,altText:_propTypes["default"].string}),isActive:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,onClick:_propTypes["default"].func,small:_propTypes["default"].string}),small:_propTypes["default"].string},Video.defaultProps={className:void 0,copy:{closeButtonTitle:"Close",muteButtonTitle:"Mute video",playButtonTitle:"View video",pauseButtonTitle:"Pause video",unmuteButtonTitle:"Unmute video"},fallbackImage:{className:void 0,copy:{altText:void 0},large:void 0,medium:void 0,small:void 0},hasControls:!0,hasAllowAudio:!1,hasAutoplay:!1,hasLoop:!0,hasSpanContent:!1,hasPlayInFullScreen:!1,id:void 0,isFullWidth:!0,large:void 0,medium:void 0,poster:{className:void 0,copy:{playButtonTitle:void 0,altText:void 0},isActive:void 0,large:void 0,medium:void 0,onClick:void 0,small:void 0},small:void 0};var components={Accordion:Accordion,AddToCartButton:AddToCartButton,Audio:Audio,BodyCopy:BodyCopy,Breadcrumbs:Breadcrumbs,Button:Button,BynderWidget:BynderWidget,Carousel:Carousel,DefinitionList:DefinitionList,DialogBanner:DialogBanner,DoubleImage:DoubleImage,Figure:Figure,FlyinPanel:FlyinPanel,GoogleMap:GoogleMap,Heading:Heading,Hidden:Hidden,Hyperlink:Hyperlink,Icon:Icon,Image:Image,ImageCarousel:ImageCarousel,KitList:KitList,LinkButtonGroup:LinkButtonGroup,List:List,Loading:Loading,MediaWithContent:MediaWithContent,Modal:Modal,Overlay:Overlay,P:Paragraph,Paragraph:Paragraph,ParagraphSet:ParagraphSet,Podium:Podium,Quote:Quote,RadioGroup:RadioGroup,SectionHeading:SectionHeading,Select:Select,StoreDetailHeader:StoreDetailHeader,StoreHoursList:StoreHoursList,SubNav:SubNav,Transition:Transition,TwoColumnLayout:TwoColumnLayout,TwoColumnList:TwoColumnList,Video:Video},paragraphsFromDivs=function(e){var t=e.replace("<div>&nbsp;</div>","").replace(/<div>/gi,"<p>").replace(/<\/div>/gi,"</p>");return-1===t.indexOf("<p>")?"<p>".concat(t,"</p>"):t},paragraphsFromDivs$1={paragraphsFromDivs:paragraphsFromDivs},utils={objects:objects,paragraphsFromDivs:paragraphsFromDivs$1,viewports:viewports},index={components:components,constants:constants,contexts:contexts,customHooks:customHooks,utils:utils},_default=index;exports["default"]=_default;
//# sourceMappingURL=index.js.map
