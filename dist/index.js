"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames")),_reactAccessibleAccordion=require("react-accessible-accordion"),_reactCollapse=require("react-collapse"),_crypto=_interopRequireDefault(require("crypto")),_reactSlick=_interopRequireDefault(require("react-slick")),_reactTransitionGroup=require("react-transition-group"),_reactDom=_interopRequireDefault(require("react-dom"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof2(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=l?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(a,i,n):a[i]=e[i]}return a["default"]=e,t&&t.set(e,a),a}function _typeof2(e){"@babel/helpers - typeof";return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2(e)}function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _extends(){return _extends=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var l in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],0<=t.indexOf(a)||(n[a]=e[a]);return n}function _objectWithoutProperties(e,t){if(null==e)return{};var a,l,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],l=!0,i=!1,n=void 0;try{for(var s,d=e[Symbol.iterator]();!(l=(s=d.next()).done)&&(a.push(s.value),!(t&&a.length===t));l=!0);}catch(e){i=!0,n=e}finally{try{l||null==d["return"]||d["return"]()}finally{if(i)throw n}}return a}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.
for(var rng=function(){return _crypto["default"].randomBytes(16)},byteToHex=[],i=0;256>i;++i)byteToHex[i]=(i+256).toString(16).substr(1);function bytesToUuid(e,t){var a=t||0,l=byteToHex;// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[l[e[a++]],l[e[a++]],l[e[a++]],l[e[a++]],"-",l[e[a++]],l[e[a++]],"-",l[e[a++]],l[e[a++]],"-",l[e[a++]],l[e[a++]],"-",l[e[a++]],l[e[a++]],l[e[a++]],l[e[a++]],l[e[a++]],l[e[a++]]].join("")}var bytesToUuid_1=bytesToUuid;function v4(e,t,a){var l=t&&a||0;"string"==typeof e&&(t="binary"===e?Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||rng)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
// Copy bytes to buffer, if provided
if(i[6]=64|15&i[6],i[8]=128|63&i[8],t)for(var n=0;16>n;++n)t[l+n]=i[n];return t||bytesToUuid_1(i)}var v4_1=v4;/**
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
 */function listCacheDelete(e){var t=this.__data__,a=_assocIndexOf(t,e);if(0>a)return!1;var l=t.length-1;return a==l?t.pop():splice.call(t,a,1),--this.size,!0}var _listCacheDelete=listCacheDelete;/**
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
 */function listCacheSet(e,t){var a=this.__data__,l=_assocIndexOf(a,e);return 0>l?(++this.size,a.push([e,t])):a[l][1]=t,this}var _listCacheSet=listCacheSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}// Add methods to `ListCache`.
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
 */function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),a=e[symToStringTag];try{e[symToStringTag]=void 0;var l=!0}catch(t){}var i=nativeObjectToString.call(e);return l&&(t?e[symToStringTag]=a:delete e[symToStringTag]),i}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;/** Used for built-in method references. */ /**
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
 */function getNative(e,t){var a=_getValue(e,t);return _baseIsNative(a)?a:void 0}var _getNative=getNative,Map=_getNative(_root,"Map"),_Map=Map,nativeCreate=_getNative(Object,"create"),_nativeCreate=nativeCreate;/* Built-in method references that are verified to be native. */ /**
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
 */function Hash(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}// Add methods to `Hash`.
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
 */function mapCacheSet(e,t){var a=_getMapData(this,e),l=a.size;return a.set(e,t),this.size+=a.size==l?0:1,this}var _mapCacheSet=mapCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}// Add methods to `MapCache`.
MapCache.prototype.clear=_mapCacheClear,MapCache.prototype["delete"]=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache,LARGE_ARRAY_SIZE=200;/** Used as the size to enable large array optimizations. */ /**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(e,t){var a=this.__data__;if(a instanceof _ListCache){var l=a.__data__;if(!_Map||l.length<LARGE_ARRAY_SIZE-1)return l.push([e,t]),this.size=++a.size,this;a=this.__data__=new _MapCache(l)}return a.set(e,t),this.size=a.size,this}var _stackSet=stackSet;/**
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
 */function arraySome(e,t){for(var a=-1,l=null==e?0:e.length;++a<l;)if(t(e[a],a,e))return!0;return!1}var _arraySome=arraySome;/**
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
 */function equalArrays(e,t,a,l,i,n){var s=a&COMPARE_PARTIAL_FLAG,d=e.length,o=t.length;if(d!=o&&!(s&&o>d))return!1;// Assume cyclic values are equal.
var r=n.get(e);if(r&&n.get(t))return r==t;var u=-1,c=!0,m=a&COMPARE_UNORDERED_FLAG?new _SetCache:void 0;// Ignore non-index properties.
for(n.set(e,t),n.set(t,e);++u<d;){var _=e[u],f=t[u];if(l)var h=s?l(f,_,u,t,e,n):l(_,f,u,e,t,n);if(void 0!==h){if(h)continue;c=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(m){if(!_arraySome(t,function(e,t){if(!_cacheHas(m,t)&&(_===e||i(_,e,a,l,n)))return m.push(t)})){c=!1;break}}else if(!(_===f||i(_,f,a,l,n))){c=!1;break}}return n["delete"](e),n["delete"](t),c}var _equalArrays=equalArrays,Uint8Array=_root.Uint8Array,_Uint8Array=Uint8Array;/** Built-in value references. */ /**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e,l){a[++t]=[l,e]}),a}var _mapToArray=mapToArray;/**
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
 */function equalByTag(e,t,a,l,i,n,s){switch(a){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!!(e.byteLength==t.byteLength&&n(new _Uint8Array(e),new _Uint8Array(t)));case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq_1(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case mapTag:var d=_mapToArray;case setTag:var o=l&COMPARE_PARTIAL_FLAG$1;if(d||(d=_setToArray),e.size!=t.size&&!o)return!1;// Assume cyclic values are equal.
var r=s.get(e);if(r)return r==t;l|=COMPARE_UNORDERED_FLAG$1,s.set(e,t);var u=_equalArrays(d(e),d(t),l,i,n,s);return s["delete"](e),u;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t);}return!1}var _equalByTag=equalByTag;/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(e,t){for(var a=-1,l=t.length,i=e.length;++a<l;)e[i+a]=t[a];return e}var _arrayPush=arrayPush,isArray=Array.isArray,isArray_1=isArray;/**
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
 */function baseGetAllKeys(e,t,a){var l=t(e);return isArray_1(e)?l:_arrayPush(l,a(e))}var _baseGetAllKeys=baseGetAllKeys;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(e,t){for(var a=-1,l=null==e?0:e.length,i=0,n=[];++a<l;){var s=e[a];t(s,a,e)&&(n[i++]=s)}return n}var _arrayFilter=arrayFilter;/**
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
 */function baseTimes(e,t){for(var a=-1,l=Array(e);++a<e;)l[a]=t(a);return l}var _baseTimes=baseTimes;/**
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
 */function stubFalse(){return!1}var stubFalse_1=stubFalse,isBuffer_1=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var a=t&&!t.nodeType&&t,l=a&&!0&&e&&!e.nodeType&&e,i=l&&l.exports===a,n=i?_root.Buffer:void 0,s=n?n.isBuffer:void 0;/** Detect free variable `module`. */e.exports=s||stubFalse_1}),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;/**
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
 */function baseUnary(e){return function(t){return e(t)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var a=t&&!t.nodeType&&t,l=a&&!0&&e&&!e.nodeType&&e,i=l&&l.exports===a,n=i&&_freeGlobal.process,s=function(){try{// Use `util.types` for Node.js 10+.
var e=l&&l.require&&l.require("util").types;return e?e:n&&n.binding&&n.binding("util");// Legacy `process.binding('util')` for Node.js < 10.
}catch(t){}}();/** Detect free variable `module`. */e.exports=s}),nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,isTypedArray_1=isTypedArray,objectProto$7=Object.prototype,hasOwnProperty$5=objectProto$7.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(e,t){var a=isArray_1(e),l=!a&&isArguments_1(e),i=!a&&!l&&isBuffer_1(e),n=!a&&!l&&!i&&isTypedArray_1(e),s=a||l||i||n,d=s?_baseTimes(e.length,String):[],o=d.length;for(var r in e)(t||hasOwnProperty$5.call(e,r))&&!(s&&(// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==r||// Node.js 0.10 has enumerable non-index properties on buffers.
i&&("offset"==r||"parent"==r)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
n&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||// Skip index properties.
_isIndex(r,o)))&&d.push(r);return d}var _arrayLikeKeys=arrayLikeKeys,objectProto$8=Object.prototype;/** Used for built-in method references. */ /**
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
 */function equalObjects(e,t,a,l,i,n){var s=a&COMPARE_PARTIAL_FLAG$2,d=_getAllKeys(e),o=d.length,r=_getAllKeys(t),u=r.length;if(o!=u&&!s)return!1;for(var c,m=o;m--;)if(c=d[m],s?!(c in t):!hasOwnProperty$7.call(t,c))return!1;// Assume cyclic values are equal.
var _=n.get(e);if(_&&n.get(t))return _==t;var f=!0;n.set(e,t),n.set(t,e);for(var h=s;++m<o;){c=d[m];var g=e[c],p=t[c];if(l)var E=s?l(p,g,c,t,e,n):l(g,p,c,e,t,n);// Recursively compare objects (susceptible to call stack limits).
if(void 0===E?!(g===p||i(g,p,a,l,n)):!E){f=!1;break}h||(h="constructor"==c)}if(f&&!h){var T=e.constructor,y=t.constructor;// Non `Object` object instances with different constructors are not equal.
T!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof T&&T instanceof T&&"function"==typeof y&&y instanceof y)&&(f=!1)}return n["delete"](e),n["delete"](t),f}var _equalObjects=equalObjects,DataView=_getNative(_root,"DataView"),_DataView=DataView,Promise=_getNative(_root,"Promise"),_Promise=Promise,Set=_getNative(_root,"Set"),_Set=Set,_WeakMap2=_getNative(_root,"WeakMap"),_WeakMap=_WeakMap2,mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag$1="[object WeakMap]",dataViewTag$2="[object DataView]",dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;/* Built-in method references that are verified to be native. */(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag$2||_Map&&getTag(new _Map)!=mapTag$2||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set)!=setTag$2||_WeakMap&&getTag(new _WeakMap)!=weakMapTag$1)&&(getTag=function(e){var t=_baseGetTag(e),a=t==objectTag$1?e.constructor:void 0,l=a?_toSource(a):"";if(l)switch(l){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag$1;}return t});var _getTag=getTag,COMPARE_PARTIAL_FLAG$3=1,argsTag$2="[object Arguments]",arrayTag$1="[object Array]",objectTag$2="[object Object]",objectProto$b=Object.prototype,hasOwnProperty$8=objectProto$b.hasOwnProperty;/** Used to compose bitmasks for value comparisons. */ /**
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
 */function baseIsEqualDeep(e,t,a,l,i,n){var s=isArray_1(e),d=isArray_1(t),o=s?arrayTag$1:_getTag(e),r=d?arrayTag$1:_getTag(t);o=o==argsTag$2?objectTag$2:o,r=r==argsTag$2?objectTag$2:r;var u=o==objectTag$2,c=r==objectTag$2,m=o==r;if(m&&isBuffer_1(e)){if(!isBuffer_1(t))return!1;s=!0,u=!1}if(m&&!u)return n||(n=new _Stack),s||isTypedArray_1(e)?_equalArrays(e,t,a,l,i,n):_equalByTag(e,t,o,a,l,i,n);if(!(a&COMPARE_PARTIAL_FLAG$3)){var _=u&&hasOwnProperty$8.call(e,"__wrapped__"),f=c&&hasOwnProperty$8.call(t,"__wrapped__");if(_||f){var h=_?e.value():e,g=f?t.value():t;return n||(n=new _Stack),i(h,g,a,l,n)}}return!!m&&(n||(n=new _Stack),_equalObjects(e,t,a,l,i,n))}var _baseIsEqualDeep=baseIsEqualDeep;/**
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
 */function baseIsEqual(e,t,a,l,i){return!(e!==t)||(null!=e&&null!=t&&(isObjectLike_1(e)||isObjectLike_1(t))?_baseIsEqualDeep(e,t,a,l,baseIsEqual,i):e!==e&&t!==t)}var _baseIsEqual=baseIsEqual,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** Used to compose bitmasks for value comparisons. */ /**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(e,t,a,l){var i=a.length,n=i,s=!l;if(null==e)return!n;for(e=Object(e);i--;){var d=a[i];if(s&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++i<n;){d=a[i];var o=d[0],r=e[o],u=d[1];if(!(s&&d[2])){var c=new _Stack;if(l)var m=l(r,u,o,e,t,c);if(void 0===m?!_baseIsEqual(u,r,COMPARE_PARTIAL_FLAG$4|COMPARE_UNORDERED_FLAG$2,l,c):!m)return!1}else if(void 0===r&&!(o in e))return!1}return!0}var _baseIsMatch=baseIsMatch;/**
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
 */function getMatchData(e){for(var t=keys_1(e),a=t.length;a--;){var l=t[a],i=e[l];t[a]=[l,i,_isStrictComparable(i)]}return t}var _getMatchData=getMatchData;/**
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
 */function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var a=function(){var l=arguments,i=t?t.apply(this,l):l[0],n=a.cache;if(n.has(i))return n.get(i);var s=e.apply(this,l);return a.cache=n.set(i,s)||n,s};return a.cache=new(memoize.Cache||_MapCache),a}// Expose `MapCache`.
memoize.Cache=_MapCache;var memoize_1=memoize,MAX_MEMOIZE_SIZE=500;/** Used as the maximum memoize cache size. */ /**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(e){var t=memoize_1(e,function(e){return a.size===MAX_MEMOIZE_SIZE&&a.clear(),e}),a=t.cache;return t}var _memoizeCapped=memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=_memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)/* . */&&t.push(""),e.replace(rePropName,function(e,a,l,i){t.push(l?i.replace(reEscapeChar,"$1"):a||e)}),t}),_stringToPath=stringToPath;/** Used to match property names within property paths. */ /**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(e,t){for(var a=-1,l=null==e?0:e.length,i=Array(l);++a<l;)i[a]=t(e[a],a,e);return i}var _arrayMap=arrayMap,INFINITY=1/0,symbolProto$1=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;/** Used as references for various `Number` constants. */ /**
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
 */function baseGet(e,t){t=_castPath(t,e);for(var a=0,l=t.length;null!=e&&a<l;)e=e[_toKey(t[a++])];return a&&a==l?e:void 0}var _baseGet=baseGet;/**
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
 */function get(e,t,a){var l=null==e?void 0:_baseGet(e,t);return l===void 0?a:l}var get_1=get;/**
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
 */function hasPath(e,t,a){t=_castPath(t,e);for(var l,i=-1,n=t.length,s=!1;++i<n&&(l=_toKey(t[i]),!!(s=null!=e&&a(e,l)));)e=e[l];return s||++i!=n?s:(n=null==e?0:e.length,!!n&&isLength_1(n)&&_isIndex(l,n)&&(isArray_1(e)||isArguments_1(e)))}var _hasPath=hasPath;/**
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
 */function baseMatchesProperty(e,t){return _isKey(e)&&_isStrictComparable(t)?_matchesStrictComparable(_toKey(e),t):function(a){var l=get_1(a,e);return l===void 0&&l===t?hasIn_1(a,e):_baseIsEqual(t,l,COMPARE_PARTIAL_FLAG$5|COMPARE_UNORDERED_FLAG$3)}}var _baseMatchesProperty=baseMatchesProperty;/**
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
 */function createFind(e){return function(t,a,l){var i=Object(t);if(!isArrayLike_1(t)){var n=_baseIteratee(a);t=keys_1(t),a=function(e){return n(i[e],e,i)}}var s=e(t,a,l);return-1<s?i[n?t[s]:s]:void 0}}var _createFind=createFind;/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(e,t,a,l){for(var i=e.length,n=a+(l?1:-1);l?n--:++n<i;)if(t(e[n],n,e))return n;return-1}var _baseFindIndex=baseFindIndex,NAN=0/0,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;/** Used as references for various `Number` constants. */ /**
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
 */function findIndex(e,t,a){var l=null==e?0:e.length;if(!l)return-1;var i=null==a?0:toInteger_1(a);return 0>i&&(i=nativeMax(l+i,0)),_baseFindIndex(e,_baseIteratee(t),i)}var findIndex_1=findIndex,find=_createFind(findIndex_1),find_1=find,svgs=[{name:"rightArrow",data:[{path:{d:"M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"}}],viewBox:"0 0 50 50"},{name:"warning",data:[{path:{d:"M42.7,7.2C37.7,2.2,31.5,0,25,0S12.3,2.2,7.3,7.2c-9.7,9.7-9.7,25.4,0,35.2c5,5,11.2,7.2,17.7,7.2s12.7-2.5,17.7-7.2 C52.4,32.6,52.4,16.9,42.7,7.2z M41,40.6c-4.2,4.2-10,6.5-16,6.5s-11.7-2.2-16-6.5c-8.7-8.7-8.7-23,0-31.7c4.3-4.2,10-6.5,16-6.5 s11.7,2.3,16,6.5C49.7,17.6,49.7,31.9,41,40.6z"}},{path:{d:"M27,13.1V30h-4V13.1H27z M23,36.5h3.9v-4.3H23V36.5z"}}],viewBox:"0 0 50 50"},{name:"rightUpArrow",data:[{path:{d:"M21.8,0.2l28.1-0.1v28.1l-4.5,0l0.1-20.5L16.2,37.1l-3.4-3.4L42.1,4.4L21.8,4.4L21.8,0.2L21.8,0.2z"}}],viewBox:"0 0 50 50"},{name:"downArrow",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"arrow"}}],viewBox:"0 0 50 50"},{name:"plusAndCloseWithCircle",data:[{circle:{cx:"25",cy:"25",r:"22",fill:"none",classes:"circle"}},{polygon:{points:"26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 ",classes:"plus"}},{polygon:{points:"32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 ",classes:"close"}}],viewBox:"0 0 50 50"},{name:"chevron",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"chevronAndCloseWithCircleChevron"}}],viewBox:"0 0 50 50"},{name:"chevronAndCloseWithCircle",data:[{circle:{cx:"25",cy:"25",r:"22",fill:"none",classes:"chevronAndCloseWithCircleCircle"}},{polygon:{points:"25,30.3 15.9,21.2 14.1,23 25,33.9 35.9,23 34.1,21.2",classes:"chevronAndCloseWithCircleChevron"}},{polygon:{points:"32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 ",classes:"chevronAndCloseWithCircleClose"}}],viewBox:"0 0 50 50"},{name:"close",data:[{polygon:{points:"50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25",classes:"close"}}],viewBox:"0 0 50 50"},{name:"play",data:[{polygon:{points:"0,0 8,5.5 0,11",classes:"play"}}],viewBox:"0 0 8 11"},{name:"pause",data:[{polygon:{points:"0,0 3,0 3,10 0,10 0,0",classes:"play"}},{polygon:{points:"6,0 9,0 9,10 6,10 6,0",classes:"play"}}],viewBox:"0 0 9 10"},{name:"muted",height:"30",width:"30",data:[{g:{transform:"translate(-97.000000, -48.000000)",data:[{g:{transform:"translate(97.000000, 48.000000)",data:[{g:{transform:"translate(4.000000, 6.000000)",fill:"#FFFEF2",data:[{g:{transform:"translate(3.000000, 0.573593)",data:[{path:{d:"M5.74011671,4.90798034 L13.5001929,12.6680565 C13.8907172,13.0585808 13.8907172,13.6917458 13.5001929,14.0822701 C13.3186245,14.2638385 13.0741693,14.368605 12.8174691,14.374866 L3.81370319,14.59447 L4.03330724,5.59070413 C4.0467736,5.03858358 4.50527237,4.60191807 5.05739292,4.61538443 C5.31409312,4.62164541 5.55854828,4.72641191 5.74011671,4.90798034 Z",transform:"translate(9.481906, 8.926267) rotate(45.000000) translate(-9.481906, -8.926267)"}},{polygon:{points:"0 7.4516129 4.4516129 6.16129032 4.4516129 11.6912442 0 10.4009217"}}]}},{path:{d:"M18.353198,12.259593 C18.3633576,11.843048 18.3297871,11.4377194 18.2566733,11.0477941 C17.7619986,8.4096316 15.457178,6.47656906 12.6389123,6.54530725 C9.4041016,6.62420507 18.2743002,15.4944036 18.353198,12.259593 Z",transform:"translate(15.142166, 9.756339) rotate(45.000000) translate(-15.142166, -9.756339)"}},{rect:{x:"10.325976",y:"-4.01495963",width:"2.5",height:"25.5",rx:"1",strokeWidth:"0.5",stroke:"#858480",transform:"translate(11.575976, 8.735040) scale(-1, 1) rotate(58.000000) translate(-11.575976, -8.735040)"}}]}}]}}]}}],viewBox:"8 7 12 18"},{name:"unmuted",height:"30",width:"30",data:[{g:{transform:"translate(-97.000000, -48.000000)",data:[{g:{transform:"translate(97.000000, 48.000000)",data:[{g:{transform:"translate(4.000000, 6.000000)",fill:"#FFFEF2",data:[{g:{transform:"translate(3.000000, 0.573593)",data:[{path:{d:"M5.74011671,4.90798034 L13.5001929,12.6680565 C13.8907172,13.0585808 13.8907172,13.6917458 13.5001929,14.0822701 C13.3186245,14.2638385 13.0741693,14.368605 12.8174691,14.374866 L3.81370319,14.59447 L4.03330724,5.59070413 C4.0467736,5.03858358 4.50527237,4.60191807 5.05739292,4.61538443 C5.31409312,4.62164541 5.55854828,4.72641191 5.74011671,4.90798034 Z",transform:"translate(9.481906, 8.926267) rotate(45.000000) translate(-9.481906, -8.926267)"}},{polygon:{points:"0 7.4516129 4.4516129 6.16129032 4.4516129 11.6912442 0 10.4009217"}}]}},{path:{d:"M18.353198,12.259593 C18.3633576,11.843048 18.3297871,11.4377194 18.2566733,11.0477941 C17.7619986,8.4096316 15.457178,6.47656906 12.6389123,6.54530725 C9.4041016,6.62420507 18.2743002,15.4944036 18.353198,12.259593 Z",transform:"translate(15.142166, 9.756339) rotate(45.000000) translate(-15.142166, -9.756339)"}}]}}]}}]}}],viewBox:"8 7 12 18"},{name:"aesop",data:[{path:{d:"M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"}},{path:{d:"M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"}},{path:{d:"M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"}},{path:{d:"M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"}},{path:{d:"M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"}},{rect:{x:"131.8",y:"13.5",width:"44.3",height:"5"}},{path:{d:"M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"}}],viewBox:"0 0 489.7 154.3"}],styles={base:"Icon-module_base__iPRbu",dark:"Icon-module_dark__3KB8t",light:"Icon-module_light__15Pp3",plusAndCloseWithCircle:"Icon-module_plusAndCloseWithCircle__Y4-yj",circle:"Icon-module_circle__4IIx2",plus:"Icon-module_plus__2RJbo",close:"Icon-module_close__1Owsp"},generateSvgBlueprint=function(e,t){function a(e){return e.map(function(e,l){var i=Object.keys(e)[0],n=e[i],s=n.classes,d=n.data,o=_objectWithoutProperties(n,["classes","data"]);return o.className=styles[s],o.key="".concat(t).concat(l),"g"===i?_react["default"].createElement(i,o,a(d)):_react["default"].createElement(i,o)})}return a(e.data)},Icon=function(e){var t=e.className,a=e.dataRef,l=e.height,i=e.isActive,n=e.name,s=e.tabIndex,d=e.theme,o=e.title,r=e.width,u=find_1(svgs,{name:n});if(u===void 0)return null;var c=v4_1(),m="".concat(n,"-").concat(c),_=generateSvgBlueprint(u,c),f=(0,_classnames["default"])(styles.base,styles[n],styles[d],_defineProperty({},styles.isActive,i),t);return _react["default"].createElement("svg",{"aria-labelledby":o?m:void 0,className:f,"data-ref":a,focusable:"false",height:l,role:"img",style:{height:"".concat(l,"px"),width:"".concat(r,"px")},tabIndex:s,viewBox:u.viewBox,width:r},o&&_react["default"].createElement("title",{id:m},o),_react["default"].createElement("g",null,_))};/**
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
 */Icon.propTypes={className:_propTypes["default"].string,dataRef:_propTypes["default"].string,height:_propTypes["default"].number,isActive:_propTypes["default"].bool,name:_propTypes["default"].string.isRequired,tabIndex:_propTypes["default"].number,theme:_propTypes["default"].oneOf(["dark","light"]),title:_propTypes["default"].string,width:_propTypes["default"].number},Icon.defaultProps={className:void 0,dataRef:"",height:12,isActive:!1,name:"",tabIndex:-1,theme:"dark",title:void 0,width:12};var isObjectPopulatedArray=function(e){return!!(Array.isArray(e)&&_typeof(e)!==void 0&&0!==e.length)},objects={isObjectPopulatedArray:isObjectPopulatedArray},styles$1={base:"Accordion-module_base__3VTZg",item:"Accordion-module_item__ZGEfE",dark:"Accordion-module_dark__2Oiu4",light:"Accordion-module_light__2ieEh",headingCopy:"Accordion-module_headingCopy__3ORa4",button:"Accordion-module_button__2Lf1-",icon:"Accordion-module_icon__2_wvH",collapse:"Accordion-module_collapse__16QRS",panel:"Accordion-module_panel__14OQe",content:"Accordion-module_content__38Xon"},Accordion=function(e){var t=e.className,a=e.items,l=e.theme,i=_react["default"].useState([]),n=_slicedToArray(i,2),s=n[0],d=n[1];if(!isObjectPopulatedArray(a))return null;var o=(0,_classnames["default"])(styles$1.base,styles$1[l],t),r=function(e){return s.includes(e)};return _react["default"].createElement(_reactAccessibleAccordion.Accordion,{allowMultipleExpanded:!0,allowZeroExpanded:!0,className:o,onChange:function(e){return d(e)}},a.map(function(e){var t=e.content,a=e.heading,i=e.id;return _react["default"].createElement(_reactAccessibleAccordion.AccordionItem,{className:styles$1.item,key:i,uuid:i},_react["default"].createElement(_reactAccessibleAccordion.AccordionItemHeading,{className:(0,_classnames["default"])(styles$1.heading,styles$1[l])},_react["default"].createElement(_reactAccessibleAccordion.AccordionItemButton,{className:styles$1.button},_react["default"].createElement("span",{className:styles$1.headingCopy},a),_react["default"].createElement(Icon,{className:styles$1.icon,height:16,name:"downArrow",theme:l,width:16}))),_react["default"].createElement(_reactAccessibleAccordion.AccordionItemPanel,{className:styles$1.panel},_react["default"].createElement(_reactCollapse.Collapse,{isOpened:r(i),theme:{collapse:styles$1.collapse}},_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$1.content,styles$1[l])},t))))}))};Accordion.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].node.isRequired,heading:_propTypes["default"].string.isRequired,id:_propTypes["default"].string.isRequired})),theme:_propTypes["default"].oneOf(["dark","light"])},Accordion.defaultProps={className:void 0,items:void 0,theme:"dark"};var styles$2={base:"Heading-module_base__Afh6b",dark:"Heading-module_dark__3xDuY",light:"Heading-module_light__O5PRI",noTopMargin:"Heading-module_noTopMargin__2Zfkb",noMargin:"Heading-module_noMargin__25BGU",serifFont:"Heading-module_serifFont__pIB5u",mediumWeightFont:"Heading-module_mediumWeightFont__3u5dB",xXSmall:"Heading-module_xXSmall__1VQgr",xSmall:"Heading-module_xSmall__3AWRl",small:"Heading-module_small__3Aeb8",medium:"Heading-module_medium__5lYPh",large:"Heading-module_large__2BJbn",xLarge:"Heading-module_xLarge__2F_YR"},Heading=function(e){var t=e.children,a=e.className,l=e.hasMediumWeightFont,i=e.hasSerifFont,n=e.hasTopMargin,s=e.id,d=e.isFlush,o=e.level,r=e.size,u=e.theme,c=(0,_classnames["default"])(styles$2.base,_defineProperty({},styles$2.noTopMargin,!n),_defineProperty({},styles$2.noMargin,d),_defineProperty({},styles$2.serifFont,i),_defineProperty({},styles$2.mediumWeightFont,l),styles$2[r],styles$2[u],a);return _react["default"].createElement("h".concat(o),{className:c,id:s},t)};Heading.propTypes={children:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,hasMediumWeightFont:_propTypes["default"].bool,hasSerifFont:_propTypes["default"].bool,hasTopMargin:_propTypes["default"].bool,id:_propTypes["default"].string,isFlush:_propTypes["default"].bool,level:_propTypes["default"].oneOf(["1","2","3","4","5","6"]).isRequired,size:_propTypes["default"].oneOf(["xXSmall","xSmall","small","medium","large","xLarge"]).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},Heading.defaultProps={children:void 0,className:void 0,hasMediumWeightFont:!1,hasSerifFont:!1,hasTopMargin:!0,id:void 0,isFlush:!1,level:void 0,size:void 0,theme:"dark"};var getHeadingLevel=function(e,t){return e?t?"2":"3":t?"1":"2"},getSubHeadingLevel=function(e,t,a){return e?t?a?"3":"4":a?"2":"3":t?a?"2":"3":a?"1":"2"},styles$3={base:"SectionHeading-module_base__MQ5b-",heading:"SectionHeading-module_heading__qFPqU"},SectionHeading=function(e){var t=e.childrenClassNames,a=e.className,l=e.eyebrow,i=e.hasHeadingTopMargin,n=e.hasSerifFontHeading,s=e.heading,d=e.id,o=e.isPageHeading,r=e.subHeading,u=e.theme,c=(0,_classnames["default"])(styles$3.base,a),m=(0,_classnames["default"])(styles$3.eyebrow,t.eyebrow),_=(0,_classnames["default"])(styles$3.heading,t.heading),f=(0,_classnames["default"])(styles$3.subHeading,t.subHeading);return _react["default"].createElement("header",{className:c,id:d},l&&_react["default"].createElement(Heading,{className:m,hasMediumWeightFont:!0,hasTopMargin:i,level:o?"1":"2",size:"xXSmall",theme:u},l),s&&_react["default"].createElement(Heading,{className:_,hasSerifFont:n,hasTopMargin:i,level:getHeadingLevel(l,o),size:"xLarge",theme:u},s),r&&_react["default"].createElement(Heading,{className:f,hasMediumWeightFont:!0,hasTopMargin:i,level:getSubHeadingLevel(l,s,o),size:"xSmall",theme:u},r))};SectionHeading.propTypes={childrenClassNames:_propTypes["default"].shape({eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}),className:_propTypes["default"].string,eyebrow:_propTypes["default"].string,hasSerifFontHeading:_propTypes["default"].bool,hasHeadingTopMargin:_propTypes["default"].bool,heading:_propTypes["default"].string,id:_propTypes["default"].string,isPageHeading:_propTypes["default"].bool,subHeading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},SectionHeading.defaultProps={childrenClassNames:{eyebrow:void 0,heading:void 0,subHeading:void 0},className:void 0,eyebrow:void 0,hasSerifFontHeading:!1,hasHeadingTopMargin:!1,heading:void 0,id:void 0,isPageHeading:!1,subHeading:void 0,theme:"dark"};var BREAKPOINTS={SMALL:{MIN_WIDTH:0,MAX_WIDTH:639,VIEWPORT:"small"},MEDIUM:{MIN_WIDTH:640,MAX_WIDTH:1024,VIEWPORT:"medium"},LARGE:{MIN_WIDTH:1025,MAX_WIDTH:1219,VIEWPORT:"large"},XLARGE:{MIN_WIDTH:1220,MAX_WIDTH:1599,VIEWPORT:"large"},XXLARGE:{MIN_WIDTH:1600,VIEWPORT:"xlarge"}},HTML={A:"a"},HYPERLINK_STYLE_TYPES={EXTERNAL_BUTTON_LINK:"External Button Link",EXTERNAL_TEXT_LINK:"External Text Link",INTERNAL_BUTTON_LINK:"Internal Button Link",INTERNAL_TEXT_LINK:"Internal Text Link",EXTERNAL_NO_ICON_LINK:"External No Icon Link",NO_ICON_LINK:"No Icon Link"},KEYBOARD_CODES={ENTER:13,ESCAPE:27},LABELS={AESOP:"Aesop"},TEST_REFS={// Navigation
NAV_SHOP:"NAV_SHOP",NAV_READ:"NAV_READ",NAV_VISIT:"NAV_VISIT",NAV_SEARCH:"NAV_SEARCH",NAV_LOGIN:"NAV_LOGIN",NAV_CART:"NAV_CART",NAV_LOGO:"NAV_LOGO",NAV_SHOP_1:"NAV_SHOP_1",NAV_SHOP_2:"NAV_SHOP_2",NAV_SHOP_PRODUCT_RADIO:"NAV_SHOP_PRODUCT_RADIO",NAV_SHOP_PRODUCT_CTA:"NAV_SHOP_PRODUCT_CTA",NAV_VISIT_INPUT:"NAV_VISIT_INPUT",NAV_VISIT_CHECKBOX:"NAV_VISIT_CHECKBOX",// Footer
FOOTER_LINK:"FOOTER_LINK",// PDP Add to Cart
ADD_TO_CART_LARGE_CTA:"ADD_TO_CART_LARGE_CTA",ADD_TO_CART_SMALL_CTA:"ADD_TO_CART_SMALL_CTA",ADD_TO_CART_TEST:"ADD_TO_CART_TEST",// Cart
CART_CHECKOUT_CTA:"CART_CHECKOUT_CTA",CART_PROMO_CTA:"CART_PROMO_CTA",CART_PROMO_INPUT:"CART_PROMO_INPUT",CART_PROMO_AMOUNT:"CART_PROMO_AMOUNT",CART_HEADING:"CART_HEADING",CART_CLOSE:"CART_CLOSE",// Checkout
CHECKOUT_CUSTOMER_EMAIL:"CHECKOUT_CUSTOMER_EMAIL",CHECKOUT_CUSTOMER_PASSWORD:"CHECKOUT_CUSTOMER_PASSWORD",CHECKOUT_CUSTOMER_PREFIX:"CHECKOUT_CUSTOMER_PREFIX",CHECKOUT_CUSTOMER_FIRST_NAME:"CHECKOUT_CUSTOMER_FIRST_NAME",CHECKOUT_CUSTOMER_LAST_NAME:"CHECKOUT_CUSTOMER_LAST_NAME",CHECKOUT_CUSTOMER_SUBMIT:"CHECKOUT_CUSTOMER_SUBMIT",CHECKOUT_CUSTOMER_GUEST_BUTTON:"CHECKOUT_CUSTOMER_GUEST_BUTTON",ADDRESS_COUNTRY:"ADDRESS_COUNTRY",ADDRESS_LINE_1:"ADDRESS_LINE_1",ADDRESS_LINE_2:"ADDRESS_LINE_2",ADDRESS_COMPANY:"ADDRESS_COMPANY",ADDRESS_REGION:"ADDRESS_REGION",ADDRESS_TOWN:"ADDRESS_TOWN",ADDRESS_POSTAL_CODE:"ADDRESS_POSTAL_CODE",ADDRESS_COUNTRY_CODE:"ADDRESS_COUNTRY_CODE",ADDRESS_PHONE_NUMBER:"ADDRESS_PHONE_NUMBER",CHECKOUT_SHIPPING_METHOD:"CHECKOUT_SHIPPING_METHOD",CHECKOUT_GIFT:"CHECKOUT_GIFT",CHECKOUT_GIFT_MESSAGE_CHECKBOX:"CHECKOUT_GIFT_MESSAGE_CHECKBOX",CHECKOUT_GIFT_MESSAGE:"CHECKOUT_GIFT_MESSAGE",CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX:"CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX",CHECKOUT_GIFT_INSTRUCTIONS:"CHECKOUT_GIFT_INSTRUCTIONS",CHECKOUT_SHIPPING_SUBMIT:"CHECKOUT_SHIPPING_SUBMIT",CHECKOUT_PAYMENT_METHOD:"CHECKOUT_PAYMENT_METHOD",CHECKOUT_PAYMENT_CARD_HOLDER:"CHECKOUT_PAYMENT_CARD_HOLDER",CHECKOUT_PAYMENT_CARD:"CHECKOUT_PAYMENT_CARD",CHECKOUT_PAYMENT_EXPIRATION:"CHECKOUT_PAYMENT_EXPIRATION",CHECKOUT_PAYMENT_CVC:"CHECKOUT_PAYMENT_CVC",CHECKOUT_PAYMENT_GIFTCARD_CODE:"CHECKOUT_PAYMENT_GIFTCARD_CODE",CHECKOUT_PAYMENT_GIFTCARD_PIN:"CHECKOUT_PAYMENT_GIFTCARD_PIN",CHECKOUT_BILLING_SAME_SHIPPING:"CHECKOUT_BILLING_SAME_SHIPPING",CHECKOUT_BILLING_TAX:"CHECKOUT_BILLING_TAX",CHECKOUT_PAYMENT_SUBMIT:"CHECKOUT_PAYMENT_SUBMIT",CHECKOUT_SAMPLES_RADIO:"CHECKOUT_SAMPLES_RADIO",CHECKOUT_SAMPLES_SUBMIT:"CHECKOUT_SAMPLES_SUBMIT",CHECKOUT_REVIEW_TOTAL:"CHECKOUT_REVIEW_TOTAL",CHECKOUT_REVIEW_TOS_CHECKBOX:"CHECKOUT_REVIEW_TOS_CHECKBOX",CHECKOUT_REVIEW_SUBMIT:"CHECKOUT_REVIEW_SUBMIT",// Confirmation
CONFIRMATION_ACCOUNT_BUTTON:"CONFIRMATION_ACCOUNT_BUTTON"},constants={BREAKPOINTS:BREAKPOINTS,HTML:HTML,HYPERLINK_STYLE_TYPES:HYPERLINK_STYLE_TYPES,KEYBOARD_CODES:KEYBOARD_CODES,LABELS:LABELS,TEST_REFS:TEST_REFS},EXTERNAL_BUTTON_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_BUTTON_LINK,EXTERNAL_TEXT_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK,INTERNAL_TEXT_LINK=HYPERLINK_STYLE_TYPES.INTERNAL_TEXT_LINK,EXTERNAL_NO_ICON_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_LINK,NO_ICON_LINK=HYPERLINK_STYLE_TYPES.NO_ICON_LINK,checkIsInlineFromStyle=function(e){return!!(e===EXTERNAL_TEXT_LINK||e===INTERNAL_TEXT_LINK||e===NO_ICON_LINK||e===EXTERNAL_NO_ICON_LINK)},checkIsExternalFromStyle=function(e){return!!(e===EXTERNAL_BUTTON_LINK||e===EXTERNAL_TEXT_LINK||e===EXTERNAL_NO_ICON_LINK)},hasIconFromStyle=function(e){return e!==NO_ICON_LINK&&e!==EXTERNAL_NO_ICON_LINK},getTargetType=function(e){return e?"_blank":"_self"},styles$4={base:"Hyperlink-module_base__uoaww",hasIcon:"Hyperlink-module_hasIcon__1893y",icon:"Hyperlink-module_icon__1hgGy",blockStyle:"Hyperlink-module_blockStyle__3pIk6",dark:"Hyperlink-module_dark__3QzFC",light:"Hyperlink-module_light__6lcpR"},Hyperlink=function(e){var t=e.children,a=e.className,l=e.dataTestRef,i=e.hasTargetInNewWindow,n=e.style,s=e.theme,d=e.title,o=e.url,r=checkIsInlineFromStyle(n),u=checkIsExternalFromStyle(n),c=hasIconFromStyle(n),m=getTargetType(i),_=(0,_classnames["default"])(styles$4.base,_defineProperty({},styles$4.blockStyle,!r),_defineProperty({},styles$4.hasIcon,c),styles$4[s],a),f="";return f=u?"rightUpArrow":"rightArrow",_react["default"].createElement("a",{className:_,"data-test-ref":l,href:o,target:m,title:d},t,c&&_react["default"].createElement("i",{"aria-hidden":"true",className:styles$4.icon},_react["default"].createElement(Icon,{height:15,name:f,width:15})))};Hyperlink.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,hasTargetInNewWindow:_propTypes["default"].bool,id:_propTypes["default"].string,style:_propTypes["default"].oneOf(["External Button Link","External Text Link","Internal Button Link","Internal Text Link","External No Icon Link","No Icon Link"]),theme:_propTypes["default"].oneOf(["dark","light"]),title:_propTypes["default"].string,type:_propTypes["default"].oneOf(["Relative","Absolute"]),url:_propTypes["default"].string.isRequired},Hyperlink.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,hasTargetInNewWindow:!1,id:void 0,style:"No Icon Link",theme:"dark",title:void 0,type:void 0,url:void 0};var styles$5={base:"BodyCopy-module_base__1ZoAL",ctaWrapper:"BodyCopy-module_ctaWrapper__3vF4R",ctaInset:"BodyCopy-module_ctaInset__3RYNN",copy:"BodyCopy-module_copy__2K-qP",dark:"BodyCopy-module_dark__1kIgR",light:"BodyCopy-module_light__1BpzV"},BodyCopy=function(e){var t=e.className,a=e.copy,l=e.cta,i=e.eyebrow,n=e.id,s=e.parent,d=e.hasSerifFontHeading,o=e.heading,r=e.secondaryCta,u=e.subHeading,c=e.theme,m=(0,_classnames["default"])(styles$5.base,styles$5[c],styles$5[s],t);return _react["default"].createElement("article",{className:m,id:n},_react["default"].createElement(SectionHeading,{childrenClassNames:{eyebrow:styles$5.eyebrow,heading:styles$5.heading,subHeading:styles$5.subHeading},eyebrow:i,hasSerifFontHeading:d,heading:o,id:n,subHeading:u,theme:c}),a&&_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$5.copy,styles$5[c])},a),(l&&l.text||r&&r.text)&&_react["default"].createElement("div",{className:styles$5.ctaWrapper},l&&_react["default"].createElement(Hyperlink,{className:(0,_classnames["default"])(_defineProperty({},styles$5.ctaInset,r)),openInANewWindow:l.openInANewWindow,style:l.style,theme:c,url:l.url},l.text),r&&_react["default"].createElement(Hyperlink,{className:styles$5.secondaryCta,openInANewWindow:r.openInANewWindow,style:r.style,theme:c,url:r.url},r.text)))};BodyCopy.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].node,cta:_propTypes["default"].object,eyebrow:_propTypes["default"].string,hasSerifFontHeading:_propTypes["default"].bool,heading:_propTypes["default"].string,id:_propTypes["default"].string,parent:_propTypes["default"].oneOf(["HeroWithContent","HalfWidthFullBleed"]),secondaryCta:_propTypes["default"].object,subHeading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},BodyCopy.defaultProps={className:void 0,copy:void 0,cta:void 0,eyebrow:void 0,hasSerifFontHeading:!1,heading:void 0,id:void 0,parent:void 0,secondaryCta:void 0,subHeading:void 0,theme:"dark"};var styles$6={base:"Breadcrumbs-module_base__1qjpj",list:"Breadcrumbs-module_list__eE_Me",item:"Breadcrumbs-module_item__1Kvmk",link:"Breadcrumbs-module_link__2UQyz"},Breadcrumbs=function(e){var t=e.className,a=e.items,l=e.theme;if(!a||!isObjectPopulatedArray(a))return null;var i=(0,_classnames["default"])(styles$6.base,styles$6[l],t);return _react["default"].createElement("nav",{className:i},_react["default"].createElement("ul",{className:styles$6.list},a.map(function(e){return _react["default"].createElement("li",{className:styles$6.item,key:e.id},_react["default"].createElement(Hyperlink,{className:styles$6.link,id:e.id,theme:l,title:e.title,url:e.url},e.label))})))};Breadcrumbs.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({label:_propTypes["default"].string,id:_propTypes["default"].string,url:_propTypes["default"].string,title:_propTypes["default"].string})),theme:_propTypes["default"].oneOf(["dark","light"])},Breadcrumbs.defaultProps={className:void 0,items:void 0,theme:"dark"};var styles$7={base:"Button-module_base__3aZlL",blockStyle:"Button-module_blockStyle__3UjpG",dark:"Button-module_dark__39IaJ",alternate:"Button-module_alternate__feDv-",light:"Button-module_light__3pPaS",disabled:"Button-module_disabled__2hS0q"},Button=(0,_react.forwardRef)(function(e,t){var a=e.children,l=e.className,i=e.dataTestRef,n=e.id,s=e.isAlternate,d=e.isEnabled,o=e.isInline,r=e.onClick,u=e.tabIndex,c=e.title,m=e.type,_=e.theme,f=(0,_classnames["default"])(styles$7.base,_defineProperty({},styles$7.alternate,s),_defineProperty({},styles$7.blockStyle,!o),_defineProperty({},styles$7.disabled,!d),_defineProperty({},styles$7.inlineStyle,o),styles$7[_],l);return _react["default"].createElement("button",{className:f,"data-test-ref":i,disabled:!d,id:n,onClick:r,ref:t,tabIndex:u,title:c,type:m},a)});Button.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool,isEnabled:_propTypes["default"].bool,isInline:_propTypes["default"].bool,onClick:_propTypes["default"].func,tabIndex:_propTypes["default"].number,title:_propTypes["default"].string.isRequired,type:_propTypes["default"].oneOf(["button","reset","submit"]),theme:_propTypes["default"].oneOf(["dark","light"])},Button.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,id:void 0,isAlternate:!1,isEnabled:!0,isInline:!1,onClick:void 0,tabIndex:void 0,title:void 0,type:"button",theme:"dark"};var useScript=function(e,t,a){(0,_react.useEffect)(function(){var l=document.createElement("script");return l.src=e,l.async=!0,l.id=t,a&&Object.keys(a).forEach(function(e){l.dataset[e]=a[e]}),document.body.appendChild(l),function(){document.body.removeChild(l)}},[e,t,a])},styles$8={heading:"BynderWidget-module_heading__3TI6o",base:"BynderWidget-module_base__2Wf5w"},BynderWidget=function(e){var t=e.className,a=e.heading,l=e.id,i=e.theme;useScript("https://d8ejoa1fys2rk.cloudfront.net/bynder-embed/latest/bynder-embed.js","bynder-widgets-js",{accountUrl:"assetportal.aesop.com",language:"en"});var n=(0,_classnames["default"])(styles$8.base,styles$8[i],t);return _react["default"].createElement("article",{className:n,id:l},_react["default"].createElement("h3",{className:styles$8.heading},a),_react["default"].createElement("div",{"data-bynder-widget":"media-list","data-collection-id":l,"data-rows":"3"}))};BynderWidget.propTypes={className:_propTypes["default"].string,heading:_propTypes["default"].string.isRequired,id:_propTypes["default"].string.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},BynderWidget.defaultProps={className:void 0,heading:void 0,id:void 0,theme:"dark"};/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */var now=function(){return _root.Date.now()},now_1=now,FUNC_ERROR_TEXT$1="Expected a function",nativeMax$1=Math.max,nativeMin=Math.min;/**
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
 */function debounce(e,t,a){function l(t){var a=m,l=_;return m=_=void 0,E=t,h=e.apply(l,a),h}function i(e){// Invoke the leading edge.
return E=e,g=setTimeout(d,t),T?l(e):h}function n(e){var a=e-p,l=e-E,i=t-a;return y?nativeMin(i,f-l):i}function s(e){var a=e-p,l=e-E;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===p||a>=t||0>a||y&&l>=f}function d(){var e=now_1();return s(e)?o(e):void(// Restart the timer.
g=setTimeout(d,n(e)))}function o(e){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return(g=void 0,b&&m)?l(e):(m=_=void 0,h)}function r(){void 0!==g&&clearTimeout(g),E=0,m=p=_=g=void 0}function u(){return void 0===g?h:o(now_1())}function c(){var e=now_1(),a=s(e);if(m=arguments,_=this,p=e,a){if(void 0===g)return i(p);if(y)return clearTimeout(g),g=setTimeout(d,t),l(p)}return void 0===g&&(g=setTimeout(d,t)),h}var m,_,f,h,g,p,E=0,T=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$1);return t=toNumber_1(t)||0,isObject_1(a)&&(T=!!a.leading,y="maxWait"in a,f=y?nativeMax$1(toNumber_1(a.maxWait)||0,t):f,b="trailing"in a?!!a.trailing:b),c.cancel=r,c.flush=u,c}var _ref,_ref2,_ref3,debounce_1=debounce,useWindowHasResized=function(){var e=(0,_react.useState)({height:0,width:0}),t=_slicedToArray(e,2),a=t[0],l=t[1];return(0,_react.useEffect)(function(){var e="undefined"!=typeof window,t=debounce_1(function(){l({height:e?window.innerHeight:0,width:e?window.innerWidth:0})},400);return e&&window.addEventListener("resize",t),function(){e&&window.removeEventListener("resize",t)}}),a},IS_VIEWPORT_SMALL_ONLY="(max-width: ".concat(BREAKPOINTS.SMALL.MAX_WIDTH,"px)"),IS_VIEWPORT_MEDIUM="(min-width: ".concat(BREAKPOINTS.MEDIUM.MIN_WIDTH,"px)"),IS_VIEWPORT_MEDIUM_ONLY="(min-width: ".concat(BREAKPOINTS.MEDIUM.MIN_WIDTH,"px) and (max-width: ").concat(BREAKPOINTS.MEDIUM.MAX_WIDTH,"px)"),IS_VIEWPORT_SMALL_MEDIUM_ONLY="(max-width: ".concat(BREAKPOINTS.MEDIUM.MAX_WIDTH,"px)"),IS_VIEWPORT_LARGE="(min-width: ".concat(BREAKPOINTS.LARGE.MIN_WIDTH,"px)"),IS_VIEWPORT_LARGE_ONLY="(min-width: ".concat(BREAKPOINTS.LARGE.MIN_WIDTH,"px) and (max-width: ").concat(BREAKPOINTS.LARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_XLARGE="(min-width: ".concat(BREAKPOINTS.XLARGE.MIN_WIDTH,"px)"),IS_VIEWPORT_XLARGE_ONLY="(min-width: ".concat(BREAKPOINTS.XLARGE.MIN_WIDTH,"px) and (max-width: ").concat(BREAKPOINTS.XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_LARGE_XLARGE_ONLY="(min-width: ".concat(BREAKPOINTS.LARGE.MIN_WIDTH,"px) and (max-width: ").concat(BREAKPOINTS.XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_SMALL_TO_XLARGE_ONLY="(max-width: ".concat(BREAKPOINTS.XLARGE.MAX_WIDTH,"px)"),IS_VIEWPORT_XXLARGE="(min-width: ".concat(BREAKPOINTS.XXLARGE.MIN_WIDTH,"px)"),LARGE=BREAKPOINTS.LARGE,MEDIUM=BREAKPOINTS.MEDIUM,SMALL=BREAKPOINTS.SMALL,CONSTRAINT_KEYS={MIN_WIDTH:"minWidth",VIEWPORT:"viewport"},constraints=[(_ref={},_defineProperty(_ref,CONSTRAINT_KEYS.MIN_WIDTH,SMALL.MIN_WIDTH),_defineProperty(_ref,CONSTRAINT_KEYS.VIEWPORT,SMALL.VIEWPORT),_ref),(_ref2={},_defineProperty(_ref2,CONSTRAINT_KEYS.MIN_WIDTH,MEDIUM.MIN_WIDTH),_defineProperty(_ref2,CONSTRAINT_KEYS.VIEWPORT,MEDIUM.VIEWPORT),_ref2),(_ref3={},_defineProperty(_ref3,CONSTRAINT_KEYS.MIN_WIDTH,LARGE.MIN_WIDTH),_defineProperty(_ref3,CONSTRAINT_KEYS.VIEWPORT,LARGE.VIEWPORT),_ref3)],constraintsByViewport={};constraints.forEach(function(e){constraintsByViewport[e.viewport]=e});var getViewportForWidth=function(e){for(var t=constraints.length-1;0<=t&&e<constraints[t].minWidth;)t--;return constraints[t].viewport},ascertainIsSmallOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_ONLY).matches},ascertainIsSmallOrMediumOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_MEDIUM_ONLY).matches},ascertainIsMediumViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_MEDIUM).matches},ascertainIsMediumOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_MEDIUM_ONLY).matches},ascertainIsLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_LARGE).matches},ascertainIsLargeOrXLargeOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_LARGE_XLARGE_ONLY).matches},ascertainIsXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XLARGE).matches},ascertainIsSmallToXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_SMALL_TO_XLARGE_ONLY).matches},ascertainIsXLargeOnlyViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XLARGE_ONLY).matches},ascertainIsXXLargeViewport=function(){return"undefined"!=typeof window&&window.matchMedia(IS_VIEWPORT_XXLARGE).matches},viewports={CONSTRAINT_KEYS:CONSTRAINT_KEYS,constraints:constraints,constraintsByViewport:constraintsByViewport,getViewportForWidth:getViewportForWidth,ascertainIsSmallOnlyViewport:ascertainIsSmallOnlyViewport,ascertainIsSmallOrMediumOnlyViewport:ascertainIsSmallOrMediumOnlyViewport,ascertainIsMediumViewport:ascertainIsMediumViewport,ascertainIsMediumOnlyViewport:ascertainIsMediumOnlyViewport,ascertainIsLargeViewport:ascertainIsLargeViewport,ascertainIsLargeOrXLargeOnlyViewport:ascertainIsLargeOrXLargeOnlyViewport,ascertainIsXLargeViewport:ascertainIsXLargeViewport,ascertainIsSmallToXLargeViewport:ascertainIsSmallToXLargeViewport,ascertainIsXLargeOnlyViewport:ascertainIsXLargeOnlyViewport,ascertainIsXXLargeViewport:ascertainIsXXLargeViewport},getCarouselSettings=function(e){var t=e.className,a=e.hasFullWidthSlides,l=e.initialSlideIndex,i=e.isNextButtonActive,n=e.isPreviousButtonActive,s=e.Pagination,d=e.NextButton,o=e.PreviousButton;return{appendDots:function(e){return _react["default"].createElement(s,{dots:e,fullWidth:a})},centerMode:!1,className:t,customPaging:function(){return _react["default"].createElement("div",null)},dots:!0,infinite:a,initialSlide:l,nextArrow:_react["default"].createElement(d,{isActive:i,theme:"light"}),prevArrow:_react["default"].createElement(o,{isActive:n,theme:"light"}),responsive:[{breakpoint:BREAKPOINTS.SMALL.MAX_WIDTH,settings:{slidesToShow:1}},{breakpoint:BREAKPOINTS.MEDIUM.MAX_WIDTH,settings:{slidesToShow:a?1:2}},{breakpoint:BREAKPOINTS.XXLARGE.MIN_WIDTH,settings:{slidesToShow:a?1:3}}],slidesToScroll:1,slidesToShow:a?1:4,speed:500,swipeToSlide:!0}},styles$9={paragraph:"Paragraph-module_paragraph__3AXc0",base:"Paragraph-module_base__2wcSK",dark:"Paragraph-module_dark__GxvVO",light:"Paragraph-module_light__yJGX7",set:"Paragraph-module_set__wOcFC"},Paragraph=function(e){var t=e.children,a=e.className,l=e.theme,i=(0,_classnames["default"])(styles$9.base,styles$9[l],a);return _react["default"].createElement("p",{className:i},t)};Paragraph.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Paragraph.defaultProps={children:void 0,className:void 0,theme:"dark"};var ParagraphSet=function(e){var t=e.children,a=e.className,l=e.theme,i=(0,_classnames["default"])(styles$9.set,styles$9[l],a);return _react["default"].createElement("div",{className:i},t)};ParagraphSet.propTypes={children:_propTypes["default"].node,className:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},ParagraphSet.defaultProps={children:void 0,className:void 0,theme:"dark"};var styles$a={base:"CarouselIntroduction-module_base__2sFJp",heading:"CarouselIntroduction-module_heading__tajC7",description:"CarouselIntroduction-module_description__XxH4y",hasFooter:"CarouselIntroduction-module_hasFooter__27iRg",ctaWrapper:"CarouselIntroduction-module_ctaWrapper__3dGj2"},CarouselIntroduction=function(e){var t=e.cta,a=e.description,l=e.eyebrow,i=e.heading,n=e.theme,s=(0,_classnames["default"])(styles$a.base,styles$a[n]);return _react["default"].createElement("div",{className:s},_react["default"].createElement(SectionHeading,{className:styles$a.heading,eyebrow:l,hasHeadingTopMargin:!1,hasSerifFontHeading:!0,heading:i,theme:n}),a&&_react["default"].createElement(Paragraph,{className:(0,_classnames["default"])(styles$a.description,_defineProperty({},styles$a.hasFooter,t)),theme:n},a),t&&_react["default"].createElement("footer",{className:styles$a.ctaWrapper},_react["default"].createElement(Hyperlink,{style:t.style,theme:n,title:t.title,url:t.url},t.text)))};CarouselIntroduction.propTypes={cta:_propTypes["default"].shape({style:_propTypes["default"].string,title:_propTypes["default"].string,url:_propTypes["default"].string,text:_propTypes["default"].string}),description:_propTypes["default"].string,heading:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"]),eyebrow:_propTypes["default"].string},CarouselIntroduction.defaultProps={cta:void 0,description:void 0,heading:void 0,theme:"dark",eyebrow:void 0};var styles$b={base:"NextButton-module_base__3zqIF",hidden:"NextButton-module_hidden__3F3MM"},NextButton=function(e){var t=e.isActive,a=e.onClick,l=e.theme;return _react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$b.base,_defineProperty({},styles$b.hidden,!t)),isInline:!0,onClick:a,theme:l,title:"next slide"},_react["default"].createElement(Icon,{height:16,name:"chevron",theme:l,width:16}))};/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */NextButton.propTypes={isActive:_propTypes["default"].bool,onClick:_propTypes["default"].func,theme:_propTypes["default"].oneOf(["dark","light"])},NextButton.defaultProps={isActive:!0,onClick:void 0,theme:"dark"};var styles$c={base:"Pagination-module_base___SWdb",list:"Pagination-module_list__2Oj5X",bar:"Pagination-module_bar__31cQF"},Pagination=function(e){var t=e.dots,a=e.theme;// const progress = findIndex(dots, ['props.className', 'slick-active']);
// const width = `${100 / dots.length}%`;
// const positionLeft = `${(100 / dots.length) * progress}%`;
return _react["default"].createElement("div",{className:styles$c.base},_react["default"].createElement("ul",{className:(0,_classnames["default"])(styles$c.list,styles$c[a])},t))};Pagination.propTypes={dots:_propTypes["default"].array,theme:_propTypes["default"].oneOf(["dark","light"])},Pagination.defaultProps={dots:void 0,theme:"dark"};var styles$d={base:"PreviousButton-module_base__1J-Kp",hidden:"PreviousButton-module_hidden__2FSw5"},PreviousButton=function(e){var t=e.isActive,a=e.onClick,l=e.theme;return _react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$d.base,_defineProperty({},styles$d.hidden,!t)),isInline:!0,onClick:a,theme:l,title:"next slide"},_react["default"].createElement(Icon,{height:16,name:"chevron",theme:l,width:16}))};/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */PreviousButton.propTypes={isActive:_propTypes["default"].bool,onClick:_propTypes["default"].func,theme:_propTypes["default"].oneOf(["dark","light"])},PreviousButton.defaultProps={isActive:!0,onClick:void 0,theme:"dark"};var styles$e={base:"Image-module_base__18W0_",picture:"Image-module_picture__312I-",isRightAligned:"Image-module_isRightAligned__1le6V",fullBleedImage:"Image-module_fullBleedImage__1o9hJ",captionWrapper:"Image-module_captionWrapper__1y0du",caption:"Image-module_caption__2nhUA"},Image=(0,_react.forwardRef)(function(e,t){var a=e.altText,l=e.className,i=e.cta,n=e.large,s=e.medium,d=e.small,o=e.type,r=e.theme,u=(0,_classnames["default"])(_defineProperty({},styles$e.base,!i),styles$e.picture,_defineProperty({},styles$e.fullBleedImage,"componentFullBleedImage"===o),_defineProperty({},styles$e.isRightAligned,"componentSquareImage"===o),styles$e[r],l),c=_react["default"].createElement("picture",{className:u,ref:t},n&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"large.minWidth"),"px)"),srcSet:n}),s&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"medium.minWidth"),"px)"),srcSet:s}),d&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"small.minWidth"),"px)"),srcSet:d}),_react["default"].createElement("img",{alt:a}));return i?_react["default"].createElement(Hyperlink,{className:styles$e.base,hasTargetInNewWindow:i.openInANewWindow,theme:r,url:i.url},c):c});Image.propTypes={altText:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,cta:_propTypes["default"].object,id:_propTypes["default"].string,isFullBleedImage:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string,type:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Image.defaultProps={altText:void 0,className:void 0,cta:void 0,id:void 0,isFullBleedImage:void 0,large:void 0,medium:void 0,small:void 0,theme:"dark",type:void 0};var styles$f={heading:"Slide-module_heading__2KIs0",information:"Slide-module_information__34xfK",description:"Slide-module_description__1ZOKE",image:"Slide-module_image__1j94t",fullWidthSlide:"Slide-module_fullWidthSlide__14ez3",imageContainer:"Slide-module_imageContainer__KWlFH"},Slide=function(e){var t=e.description,a=e.heading,l=e.id,i=e.image,n=e.isFullWidthSlide,s=e.theme;return _react["default"].createElement(_react["default"].Fragment,null,(a||t)&&_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$f.information,styles$f[s]),id:l},a&&_react["default"].createElement(Heading,{className:styles$f.heading,level:"5",size:"xXSmall",theme:s},a),t&&_react["default"].createElement("div",{className:styles$f.description},t)),_react["default"].createElement("div",{className:styles$f.imageContainer},_react["default"].createElement(Image,_extends({className:(0,_classnames["default"])(styles$f.image,_defineProperty({},styles$f.fullWidthSlide,n)),theme:s},i))))};Slide.propTypes={description:_propTypes["default"].string,heading:_propTypes["default"].string,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,isFullWidthSlide:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Slide.defaultProps={description:void 0,heading:void 0,id:void 0,image:void 0,isFullWidthSlide:!1,theme:"dark"};var styles$g={base:"Carousel-module_base__2Zak0",slideWrapper:"Carousel-module_slideWrapper__nqrVO",carousel:"Carousel-module_carousel__2ILZE",item:"Carousel-module_item__2G_2x",link:"Carousel-module_link__1gv3s",mobileCarouselIntroductionWrapper:"Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X",fullWidthSlides:"Carousel-module_fullWidthSlides__2sXZx",footer:"Carousel-module_footer__NX8AO",slideCounter:"Carousel-module_slideCounter__2MHc_",dark:"Carousel-module_dark__eKBpb",light:"Carousel-module_light__2WA9F",caption:"Carousel-module_caption__2q0_n"},Carousel=(0,_react.forwardRef)(function(e,t){var a=e.className,l=e.hasFullWidthSlides,i=e.hasShowCaption,n=e.hasSlideCounter,s=e.initialSlideIndex,d=e.introduction,o=e.slides,r=e.theme,u=(0,_react.useState)(!0),c=_slicedToArray(u,2),m=c[0],_=c[1],f=(0,_react.useState)(l),h=_slicedToArray(f,2),g=h[0],p=h[1],E=(0,_react.useState)(get_1(o[s],"caption","")),T=_slicedToArray(E,2),y=T[0],b=T[1],C=(0,_react.useState)("".concat(s+1," / ").concat(o.length)),N=_slicedToArray(C,2),I=N[0],A=N[1];useWindowHasResized();var O=0;if(O=l?1:ascertainIsSmallOnlyViewport()?1:ascertainIsMediumOnlyViewport()?2:ascertainIsLargeOrXLargeOnlyViewport()?3:4,0===o.length)return null;var S=ascertainIsSmallOrMediumOnlyViewport(),w=(0,_classnames["default"])(styles$g.base,_defineProperty({},styles$g.fullWidthSlides,l),styles$g[r],a),v=getCarouselSettings({className:styles$g.carousel,hasFullWidthSlides:l,initialSlideIndex:s,isNextButtonActive:m,isPreviousButtonActive:g,Pagination:Pagination,NextButton:NextButton,PreviousButton:PreviousButton}),x=d&&!S&&!l,R=o.length,k=x?R+1:R,P=function(e,t){if(!l){p(0!==t),_(k-t!==O)}};return _react["default"].createElement("section",{className:w,ref:t},!x&&d&&_react["default"].createElement("aside",{className:styles$g.mobileCarouselIntroductionWrapper},_react["default"].createElement(CarouselIntroduction,{cta:d.cta,description:d.description,eyebrow:d.eyebrow,heading:d.heading})),_react["default"].createElement(_reactSlick["default"],_extends({},v,{afterChange:function(e){b(o[e].caption),A("".concat(e+1," of ").concat(R))},beforeChange:P}),x&&_react["default"].createElement(CarouselIntroduction,{cta:d.cta,description:d.description,eyebrow:d.eyebrow,heading:d.heading}),o.map(function(e,t){var a=e.url,i=_objectWithoutProperties(e,["url"]);return _react["default"].createElement("div",{className:styles$g.slideWrapper,key:t},a?_react["default"].createElement(Hyperlink,{className:(0,_classnames["default"])(styles$g.item,styles$g.link),title:"Link to ".concat(i.heading),url:a},_react["default"].createElement(Slide,_extends({},i,{isFullWidthSlide:l}))):_react["default"].createElement("div",{className:styles$g.item,key:t},_react["default"].createElement(Slide,_extends({},i,{isFullWidthSlide:l}))))})),(i||n)&&_react["default"].createElement("footer",{className:styles$g.footer},n&&_react["default"].createElement("div",{className:styles$g.slideCounter},I),i&&_react["default"].createElement("div",{className:styles$g.caption},y)))});Carousel.propTypes={className:_propTypes["default"].string,hasFullWidthSlides:_propTypes["default"].bool,hasShowCaption:_propTypes["default"].bool,hasSlideCounter:_propTypes["default"].bool,initialSlideIndex:_propTypes["default"].number,introduction:_propTypes["default"].shape({cta:_propTypes["default"].shape({style:_propTypes["default"].string,title:_propTypes["default"].string,url:_propTypes["default"].string,text:_propTypes["default"].string}),description:_propTypes["default"].string,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string}),slides:_propTypes["default"].arrayOf(_propTypes["default"].shape({caption:_propTypes["default"].string,description:_propTypes["default"].string,heading:_propTypes["default"].string,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,url:_propTypes["default"].string})).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},Carousel.defaultProps={className:void 0,hasFullWidthSlides:!1,hasShowCaption:!1,hasSlideCounter:!1,initialSlideIndex:0,introduction:void 0,slides:[],theme:"dark"};var styles$h={base:"DefinitionList-module_base__2OnV9",term:"DefinitionList-module_term__38vy8",description:"DefinitionList-module_description__1hVLl",dark:"DefinitionList-module_dark__2bl9J",light:"DefinitionList-module_light__3a2GV",slideIn:"DefinitionList-module_slideIn__unr4R"},DefinitionList=(0,_react.forwardRef)(function(e,t){var a=e.className,l=e.isVisible,i=e.items,n=e.theme,s=(0,_classnames["default"])(styles$h.base,styles$h[n],a),d=(0,_classnames["default"])(styles$h.term,_defineProperty({},styles$h.slideIn,l)),o=(0,_classnames["default"])(styles$h.description,_defineProperty({},styles$h.slideIn,l));return isObjectPopulatedArray(i)?_react["default"].createElement("dl",{className:s,ref:t},i.filter(function(e){var t=e.description,a=e.term;return t&&a}).map(function(e){var t=e.description,a=e.id,l=e.term;return _react["default"].createElement(_react.Fragment,{key:a},_react["default"].createElement("dt",{className:d},l),_react["default"].createElement("dd",{className:o},t))})):null});DefinitionList.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({description:_propTypes["default"].any.isRequired,id:_propTypes["default"].string.isRequired,term:_propTypes["default"].string.isRequired})),theme:_propTypes["default"].oneOf(["dark","light"])},DefinitionList.defaultProps={className:void 0,isVisible:!0,items:void 0,theme:"dark"};var useEscapeKeyListener=function(e){(0,_react.useEffect)(function(){var t=function(t){return t.keyCode===KEYBOARD_CODES.ESCAPE&&e(t),t};return"undefined"!=typeof document&&document.addEventListener("keydown",t,!0),function(){"undefined"!=typeof document&&document.removeEventListener("keydown",t,!0)}},[e])},useOverflowHidden=function(e){var t=(0,_react.useState)(!1),a=_slicedToArray(t,2),l=a[0],i=a[1],n=(0,_react.useCallback)(function(){"undefined"!=typeof document&&"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden",i(!0))},[]),s=(0,_react.useCallback)(function(){"undefined"!=typeof document&&l&&(document.body.style.overflow="unset")},[l]);(0,_react.useEffect)(function(){return e?n():s(),function(){s()}},[n,e,s])},useHasMounted=function(){var e=(0,_react.useState)(!1),t=_slicedToArray(e,2),a=t[0],l=t[1];return(0,_react.useEffect)(function(){return l(!0),function(){l(!1)}},[a]),a},transitions={fadeEnter:"transitions-module_fadeEnter__39Yw4",fadeEnterActive:"transitions-module_fadeEnterActive__Jhp1k",fadeEnterDone:"transitions-module_fadeEnterDone__1pN9W",fadeExit:"transitions-module_fadeExit__3yr99",fadeExitActive:"transitions-module_fadeExitActive__2at34",fadeExitDone:"transitions-module_fadeExitDone__242dB",shiftInDownEnter:"transitions-module_shiftInDownEnter__1KxQa",shiftInDownEnterActive:"transitions-module_shiftInDownEnterActive__3Cc7U",shiftInDownEnterDone:"transitions-module_shiftInDownEnterDone__1weN2",shiftInDownExit:"transitions-module_shiftInDownExit__QzfmH",shiftInDownExitActive:"transitions-module_shiftInDownExitActive__1oIXc",shiftInDownExitDone:"transitions-module_shiftInDownExitDone__38h-E",shiftInLeftEnter:"transitions-module_shiftInLeftEnter__JZlOS",shiftInLeftEnterActive:"transitions-module_shiftInLeftEnterActive__2PTyF",shiftInLeftEnterDone:"transitions-module_shiftInLeftEnterDone__29wBA",shiftInLeftExit:"transitions-module_shiftInLeftExit__3-XBX",shiftInLeftExitActive:"transitions-module_shiftInLeftExitActive__3HhM-",shiftInLeftExitDone:"transitions-module_shiftInLeftExitDone__1Scz-",slideDownEnter:"transitions-module_slideDownEnter__1ozxS",slideDownEnterActive:"transitions-module_slideDownEnterActive__19lkp",slideDownEnterDone:"transitions-module_slideDownEnterDone__1daQU",slideDownExit:"transitions-module_slideDownExit__1zFf8",slideDownExitActive:"transitions-module_slideDownExitActive__LriBR",slideDownExitDone:"transitions-module_slideDownExitDone__3NwvB",slideRightEnter:"transitions-module_slideRightEnter__3ktdD",slideRightEnterActive:"transitions-module_slideRightEnterActive__LMADo",slideRightEnterDone:"transitions-module_slideRightEnterDone__2B8eF",slideRightExit:"transitions-module_slideRightExit__3J_wV",slideRightExitActive:"transitions-module_slideRightExitActive__2PwBm",slideRightExitDone:"transitions-module_slideRightExitDone__1KOgp",slowFadeEnter:"transitions-module_slowFadeEnter__1WmWT",slowFadeEnterActive:"transitions-module_slowFadeEnterActive__2uxS0",slowFadeEnterDone:"transitions-module_slowFadeEnterDone__1OJv_",slowFadeExit:"transitions-module_slowFadeExit__pp458",slowFadeExitActive:"transitions-module_slowFadeExitActive__1HYrk",slowFadeExitDone:"transitions-module_slowFadeExitDone__1l2dO",zoomEnter:"transitions-module_zoomEnter__14hXw",zoomEnterActive:"transitions-module_zoomEnterActive__1Ix7t",zoomEnterDone:"transitions-module_zoomEnterDone__2z-Jn",zoomExit:"transitions-module_zoomExit__2YNjS",zoomExitActive:"transitions-module_zoomExitActive__2j1mx",zoomExitDone:"transitions-module_zoomExitDone__23u9a"},fade={classNames:{enter:transitions.fadeEnter,enterActive:transitions.fadeEnterActive,enterDone:transitions.fadeEnterDone,exit:transitions.fadeExit,exitActive:transitions.fadeExitActive,exitDone:transitions.fadeExitDone},timeout:500},slowFade={classNames:{enter:transitions.slowFadeEnter,enterActive:transitions.slowFadeEnterActive,enterDone:transitions.slowFadeEnterDone,exit:transitions.slowFadeExit,exitActive:transitions.slowFadeExitActive,exitDone:transitions.slowFadeExitDone},timeout:1500},shiftInLeft={classNames:{enter:transitions.shiftInLeftEnter,enterActive:transitions.shiftInLeftEnterActive,enterDone:transitions.shiftInLeftEnterDone,exit:transitions.shiftInLeftExit,exitActive:transitions.shiftInLeftExitActive,exitDone:transitions.shiftInLeftExitDone},timeout:1500},shiftInDown={classNames:{enter:transitions.shiftInDownEnter,enterActive:transitions.shiftInDownEnterActive,enterDone:transitions.shiftInDownEnterDone,exit:transitions.shiftInDownExit,exitActive:transitions.shiftInDownExitActive,exitDone:transitions.shiftInDownExitDone},timeout:1500},slideDown={classNames:{enter:transitions.slideDownEnter,enterActive:transitions.slideDownEnterActive,enterDone:transitions.slideDownEnterDone,exit:transitions.slideDownExit,exitActive:transitions.slideDownExitActive,exitDone:transitions.slideDownExitDone},timeout:500},slideRight={classNames:{enter:transitions.slideRightEnter,enterActive:transitions.slideRightEnterActive,enterDone:transitions.slideRightEnterDone,exit:transitions.slideRightExit,exitActive:transitions.slideRightExitActive,exitDone:transitions.slideRightExitDone},timeout:500},zoom={classNames:{enter:transitions.zoomEnter,enterActive:transitions.zoomEnterActive,enterDone:transitions.zoomEnterDone,exit:transitions.zoomExit,exitActive:transitions.zoomExitActive,exitDone:transitions.zoomExitDone},timeout:500},data={fade:fade,shiftInDown:shiftInDown,shiftInLeft:shiftInLeft,slideDown:slideDown,slideRight:slideRight,slowFade:slowFade,zoom:zoom},Transition=function(e){var t=e.children,a=e.hasCSSTransitionMountOnEnter,l=e.hasCSSTransitionUnmountOnExit,i=e.isActiveOnMount,n=e.isActive,s=e.type,d=useHasMounted();if(!(0,_react.isValidElement)(t))return null;var o=i?!!d:!!n;return _react["default"].createElement(_reactTransitionGroup.CSSTransition,{classNames:data[s].classNames,in:o,mountOnEnter:!!a,timeout:data[s].timeout,unmountOnExit:!!l},_react["default"].cloneElement(t,{className:(0,_classnames["default"])(get_1(t,"props.className",""),o?"":get_1(data[s],"classNames.enter",""))}))};Transition.propTypes={children:_propTypes["default"].oneOfType([_propTypes["default"].element]).isRequired,hasCSSTransitionMountOnEnter:_propTypes["default"].bool,hasCSSTransitionUnmountOnExit:_propTypes["default"].bool,isActive:_propTypes["default"].bool,isActiveOnMount:_propTypes["default"].bool,type:_propTypes["default"].oneOf(["fade","shiftInDown","shiftInLeft","slideDown","slideRight","slowFade","zoom"]).isRequired},Transition.defaultProps={children:void 0,hasCSSTransitionMountOnEnter:void 0,hasCSSTransitionUnmountOnExit:void 0,isActive:!1,isActiveOnMount:!1,type:void 0};var styles$i={base:"Overlay-module_base__21l1K",isVisible:"Overlay-module_isVisible__2NJpm"},Overlay=function(e){var t=e.className,a=e.isVisible,l=void 0!==a&&a,i=e.onClose;useEscapeKeyListener(i);var n=(0,_classnames["default"])(styles$i.base,_defineProperty({},styles$i.isVisible,l),t);return _react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:!!l,type:"fade"},_react["default"].createElement("div",{className:n,onClick:i,onKeyPress:function(e){e.keyCode===KEYBOARD_CODES.ESCAPE&&i()},role:"button",tabIndex:-1}))};Overlay.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func.isRequired},Overlay.defaultProps={className:void 0,isVisible:!1,onClose:void 0};var styles$j={base:"DialogBanner-module_base__1sS5X",top:"DialogBanner-module_top__jLPxl",bottom:"DialogBanner-module_bottom__2hfmb",isVisible:"DialogBanner-module_isVisible__1i46z",dark:"DialogBanner-module_dark__2cbOO",black:"DialogBanner-module_black__2sEch",contentContainer:"DialogBanner-module_contentContainer__jzerV",heading:"DialogBanner-module_heading__2qJht",message:"DialogBanner-module_message__3xWGh",warningIcon:"DialogBanner-module_warningIcon__HKWtl",closeButton:"DialogBanner-module_closeButton__2XMqf",closeIcon:"DialogBanner-module_closeIcon__1UkP7",closeContainer:"DialogBanner-module_closeContainer__3RJ-U",ctaButton:"DialogBanner-module_ctaButton__1GEq-"},DialogBanner=function(e){var t=e.className,a=e.copy,l=e.cta,i=e.hasCloseButton,n=e.heading,s=e.isVisible,d=e.message,o=e.onClose,r=e.position,u=e.theme;useEscapeKeyListener(o),useOverflowHidden(s);var c=(0,_classnames["default"])(styles$j.base,_defineProperty({},styles$j.isVisible,s),styles$j[u],styles$j[r],t);return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(Overlay,{isVisible:s,onClose:o}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:s,type:"slideDown"},_react["default"].createElement("aside",{className:c},_react["default"].createElement("div",{className:styles$j.iconContainer},_react["default"].createElement(Icon,{className:styles$j.warningIcon,height:22,name:"warning",theme:"light",width:22})),_react["default"].createElement("div",{className:styles$j.contentContainer},_react["default"].createElement(Heading,{className:styles$j.heading,level:"1",noTopMargin:!0,size:"large"},n),_react["default"].createElement(Paragraph,{className:styles$j.message},d)),_react["default"].createElement("div",{className:styles$j.closeContainer},i&&_react["default"].createElement(Button,{className:styles$j.closeButton,isInline:!0,onClick:o,title:a.closeButtonTitle},_react["default"].createElement(Icon,{className:styles$j.closeIcon,height:12,name:"close",theme:"light",width:12})),l&&l.text&&_react["default"].createElement(Hyperlink,{className:styles$j.ctaButton,dataTestRef:l.dataTestRef,id:l.id,isInline:!0,target:l.openInANewWindow?"_blank":"_self",theme:"light",title:l.title,url:l.url},l.text)))))};DialogBanner.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string}),cta:_propTypes["default"].object,hasCloseButton:_propTypes["default"].bool,isVisible:_propTypes["default"].bool,message:_propTypes["default"].string.isRequired,onClose:_propTypes["default"].func.isRequired,position:_propTypes["default"].oneOf(["top","bottom"]),theme:_propTypes["default"].oneOf(["dark","black"]),heading:_propTypes["default"].string.isRequired},DialogBanner.defaultProps={className:void 0,copy:{closeButtonTitle:"Close Dialog Banner"},cta:void 0,hasCloseButton:!0,isVisible:!1,message:void 0,onClose:void 0,position:"top",theme:"dark",heading:void 0};var styles$k={base:"Figure-module_base__2Vmj2",caption:"Figure-module_caption__187du",dark:"Figure-module_dark__1Gy-5",light:"Figure-module_light__wv1hI",captionWrapper:"Figure-module_captionWrapper__1WrIr",border:"Figure-module_border__5rGIx"},Figure=function(e){var t=e.caption,a=e.children,l=e.className,i=e.hasCaptionBorder,n=e.id,s=e.theme,d=(0,_classnames["default"])(styles$k.base,styles$k[s],_defineProperty({},styles$k.border,i),l),o=(0,_classnames["default"])(styles$k.captionWrapper);return _react["default"].createElement("figure",{className:d,id:n},a,t&&_react["default"].createElement("figcaption",{className:o},_react["default"].createElement("div",{className:styles$k.caption},t)))};Figure.propTypes={caption:_propTypes["default"].any,children:_propTypes["default"].node,className:_propTypes["default"].string,hasCaptionBorder:_propTypes["default"].bool,id:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},Figure.defaultProps={caption:void 0,children:void 0,className:void 0,hasCaptionBorder:!0,id:void 0,theme:"dark"};var styles$l={base:"DoubleImage-module_base__3dS_7",figure:"DoubleImage-module_figure___aWCg"},DoubleImage=function(e){var t=e.className,a=e.imageOne,l=e.imageTwo,i=e.theme,n=(0,_classnames["default"])(styles$l.base,styles$l[i],t);return _react["default"].createElement("section",{className:n},_react["default"].createElement(Figure,{caption:a.caption,className:styles$l.figure,hasCaptionBorder:!1,theme:i},_react["default"].createElement(Image,{altText:a.altText,large:a.large,medium:a.medium,small:a.small})),_react["default"].createElement(Figure,{caption:l.caption,className:styles$l.figure,hasCaptionBorder:!1,theme:i},_react["default"].createElement(Image,{altText:l.altText,large:l.large,medium:l.medium,small:l.small})))};DoubleImage.propTypes={className:_propTypes["default"].string,imageOne:_propTypes["default"].shape({altText:_propTypes["default"].string,caption:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),imageTwo:_propTypes["default"].shape({altText:_propTypes["default"].string,caption:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),theme:_propTypes["default"].oneOf(["dark","light"])},DoubleImage.defaultProps={className:void 0,imageOne:void 0,imageTwo:void 0,theme:"dark"};var styles$m={base:"FlyinPanel-module_base__1Tlwv",closeButton:"FlyinPanel-module_closeButton__1aA6Z"},FlyinPanel=function(e){var t=e.children,a=e.className,l=e.heading,i=e.isVisible,n=e.onClose,s=e.theme;useEscapeKeyListener(n),useOverflowHidden(i);var d=(0,_classnames["default"])(styles$m.base,styles$m[s],a),o=v4_1(),r=v4_1();return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(Overlay,{isVisible:i,onClose:n}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:!!i,type:"slideRight"},_react["default"].createElement("aside",{"aria-describedby":r,"aria-hidden":!i,"aria-labelledby":o,className:d,role:"dialog"},_react["default"].createElement(Button,{className:styles$m.closeButton,isInline:!0,onClick:n,tabIndex:0,theme:s,title:"Close"},_react["default"].createElement(Icon,{height:12,name:"close",theme:s,width:12})),l&&_react["default"].createElement(Heading,{id:o,level:"2",size:"small",theme:s},l),_react["default"].createElement("div",{id:r},t))))};FlyinPanel.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,heading:_propTypes["default"].string,isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},FlyinPanel.defaultProps={children:void 0,className:void 0,heading:void 0,isVisible:!1,onClose:void 0,theme:"dark"};var styles$n={base:"List-module_base__wbAa2",dark:"List-module_dark__396s9",light:"List-module_light__2gCzU",item:"List-module_item__Ru4zd"},List=(0,_react.forwardRef)(function(e,t){var a=e.className,l=e.items,i=e.listItemClassName,n=e.theme,s=(0,_classnames["default"])(styles$n.base,styles$n[n],a);return _react["default"].createElement("ul",{className:s,ref:t},l.map(function(e){var t=e.content,a=e.id;return _react["default"].createElement("li",{className:(0,_classnames["default"])(styles$n.item,i),key:a},t)}))});List.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]).isRequired,id:_propTypes["default"].string.isRequired})).isRequired,listItemClassName:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},List.defaultProps={className:void 0,items:void 0,listItemClassName:void 0,theme:"dark"};var styles$o={base:"SubNav-module_base__3LIXq",heading:"SubNav-module_heading__25EKa",dark:"SubNav-module_dark__2Xs3T",light:"SubNav-module_light__1B3lz",itemList:"SubNav-module_itemList__25xiF"},getLinkItems=function(e,t){return e.map(function(e){var a=e.id,l=e.style,i=e.children,n=e.url;return{content:_react["default"].createElement(Hyperlink,{className:styles$o.itemList,style:l,theme:t,url:n},i),id:a}})},SubNav=function(e){var t=e.className,a=e.heading,l=e.headingClassName,i=e.links,n=e.theme,s=(0,_classnames["default"])(styles$o.base,t);return _react["default"].createElement("nav",{className:s},a&&_react["default"].createElement(Heading,{className:(0,_classnames["default"])(styles$o.heading,l),level:"3",noMargin:!0,size:"small",theme:n},a),_react["default"].createElement(List,{items:getLinkItems(i,n),theme:n}))};SubNav.propTypes={className:_propTypes["default"].string,links:_propTypes["default"].arrayOf(_propTypes["default"].object).isRequired/** @TODO hyperlink type */,heading:_propTypes["default"].string,headingClassName:_propTypes["default"].string,theme:_propTypes["default"].oneOf(["dark","light"])},SubNav.defaultProps={className:void 0,links:void 0,heading:void 0,headingClassName:void 0,theme:"dark"};var styles$p={base:"HeroWithContent-module_base__2TLfg",backgroundImagePrototype:"HeroWithContent-module_backgroundImagePrototype__I0gCn",noTopMargin:"HeroWithContent-module_noTopMargin__2CZYI",image:"HeroWithContent-module_image__5CG8l",contentWrapper:"HeroWithContent-module_contentWrapper__2RZNu",content:"HeroWithContent-module_content__3Ej8Z",primaryTitle:"HeroWithContent-module_primaryTitle__prAEM",secondayTitle:"HeroWithContent-module_secondayTitle__1iHSW"},HeroWithContent=function(e){var t=e.className,a=e.contentThemeOnMobile,l=e.copy,i=e.cta,n=e.eyebrow,s=e.heading,d=e.id,o=e.image,r=e.secondaryCta,u=e.subHeading,c=e.subNavLinks,m=e.theme;useWindowHasResized();var _=ascertainIsSmallOnlyViewport(),f=(0,_classnames["default"])(styles$p.base,styles$p[m],t);return _react["default"].createElement("section",{className:f},_react["default"].createElement(Image,{altText:o.altText,className:styles$p.image,large:o.large,medium:o.medium,small:o.small}),_react["default"].createElement("div",{className:styles$p.contentWrapper},_react["default"].createElement("div",{className:styles$p.content},_react["default"].createElement(BodyCopy,{copy:l,cta:i,eyebrow:n,heading:s,id:d,secondaryCta:r,subHeading:u,theme:_?a:m}),isObjectPopulatedArray(c)&&_react["default"].createElement(SubNav,{links:c,theme:_?a:m}))))};HeroWithContent.propTypes={className:_propTypes["default"].string,contentThemeOnMobile:_propTypes["default"].oneOf(["dark","light"]),copy:_propTypes["default"].string,cta:_propTypes["default"].object,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string.isRequired,id:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,secondaryCta:_propTypes["default"].object,subHeading:_propTypes["default"].string,subNavLinks:_propTypes["default"].arrayOf(_propTypes["default"].object),theme:_propTypes["default"].oneOf(["dark","light"])},HeroWithContent.defaultProps={className:void 0,contentThemeOnMobile:"dark",copy:void 0,cta:void 0,eyebrow:void 0,heading:void 0,id:void 0,image:void 0,secondaryCta:void 0,subHeading:void 0,subNavLinks:void 0,theme:"dark"};var styles$q={base:"ImageWithHeaderAndContent-module_base__2-Y4B",reverse:"ImageWithHeaderAndContent-module_reverse__3g8sq",content:"ImageWithHeaderAndContent-module_content__3tIQ4",dark:"ImageWithHeaderAndContent-module_dark__19xnz",light:"ImageWithHeaderAndContent-module_light__XhSI-",wrapper:"ImageWithHeaderAndContent-module_wrapper__hwV4A",container:"ImageWithHeaderAndContent-module_container__38jRk",mediaWrapper:"ImageWithHeaderAndContent-module_mediaWrapper__2ebNj",header:"ImageWithHeaderAndContent-module_header__7yt9k",isFullWidthImage:"ImageWithHeaderAndContent-module_isFullWidthImage__1SW5s",hasFullWidthImage:"ImageWithHeaderAndContent-module_hasFullWidthImage__X0Buc",description:"ImageWithHeaderAndContent-module_description__2w0J5"},ImageWithHeaderAndContent=(0,_react.forwardRef)(function(e,t){var a=e.backgroundColor,l=e.className,i=e.content,n=e.copy,s=e.hasFullWidthImage,d=e.image,o=e.isReverse,r=e.theme,u=e.video,c=(0,_classnames["default"])(styles$q.base,_defineProperty({},styles$q.reverse,o),_defineProperty({},styles$q.original,!o),styles$q[r.toLowerCase()],l);return _react["default"].createElement("section",{className:c,div:!0,ref:t,style:{backgroundColor:a}},_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$q.mediaWrapper,_defineProperty({},styles$q.isFullWidthImage,s))},u?u:_react["default"].createElement(Image,{altText:d.altText,large:d.large,medium:d.medium,small:d.small,theme:r})),_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$q.container,_defineProperty({},styles$q.hasFullWidthImage,s))},_react["default"].createElement("div",{className:styles$q.wrapper},_react["default"].createElement("div",{className:styles$q.header},_react["default"].createElement(SectionHeading,{childrenClassNames:{heading:styles$q.heading,subHeading:styles$q.subHeading},eyebrow:n.eyebrow,hasHeadingTopMargin:!1,hasSerifFontHeading:!0,heading:n.heading,subHeading:n.subHeading,theme:r})),_react["default"].createElement("div",{className:styles$q.content},n.description&&_react["default"].createElement(ParagraphSet,{className:styles$q.description,theme:r},n.description),i))))});ImageWithHeaderAndContent.propTypes={backgroundColor:_propTypes["default"].string,className:_propTypes["default"].string,content:_propTypes["default"].any,copy:_propTypes["default"].shape({description:_propTypes["default"].any,eyebrow:_propTypes["default"].string,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string}).isRequired,hasFullWidthImage:_propTypes["default"].bool,image:_propTypes["default"].object,isReverse:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"]),video:_propTypes["default"].object},ImageWithHeaderAndContent.defaultProps={backgroundColor:"#F6F5E8",className:void 0,content:void 0,copy:{description:void 0,eyebrow:void 0,heading:void 0,subHeading:void 0},hasFullWidthImage:!1,image:void 0,isReverse:!1,theme:"dark",video:void 0};var styles$r={base:"KitList-module_base__ojyC-",item:"KitList-module_item__2z-sW",dark:"KitList-module_dark__JqFfF",light:"KitList-module_light__1IVl5",slideIn:"KitList-module_slideIn__36yxB"},KitList=(0,_react.forwardRef)(function(e,t){var a=e.className,l=e.isVisible,i=e.items,n=e.theme,s=(0,_classnames["default"])(styles$r.base,styles$r[n],a),d=(0,_classnames["default"])(styles$r.item,_defineProperty({},styles$r.slideIn,l));return _react["default"].createElement(List,{className:s,items:i,listItemClassName:d,ref:t,theme:n})});KitList.propTypes={className:_propTypes["default"].string,isVisible:_propTypes["default"].bool,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({content:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]).isRequired,id:_propTypes["default"].string.isRequired})).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},KitList.defaultProps={className:void 0,isVisible:!0,items:void 0,theme:"dark"};var styles$s={base:"Loading-module_base__11pIy",small:"Loading-module_small__2H7s_",isLoading:"Loading-module_isLoading__2jmYF",dot:"Loading-module_dot__2jmbK",dark:"Loading-module_dark__2DSO5",light:"Loading-module_light__3WGPG",fadeInOut:"Loading-module_fadeInOut__2NvtY"},Loading=function(e){var t,a=e.className,l=e.isLoading,i=e.small,n=e.theme,s=(0,_classnames["default"])(styles$s.base,(t={},_defineProperty(t,styles$s.isLoading,l),_defineProperty(t,styles$s.small,i),t),styles$s[n],a);return _react["default"].createElement("span",{className:s},_react["default"].createElement("span",{className:styles$s.dot}),_react["default"].createElement("span",{className:styles$s.dot}),_react["default"].createElement("span",{className:styles$s.dot}))};Loading.propTypes={className:_propTypes["default"].string,isLoading:_propTypes["default"].bool.isRequired,small:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Loading.defaultProps={className:void 0,isLoading:void 0,small:!1,theme:"dark"};var styles$t={base:"ModalBody-module_base__3I-jF",isVisible:"ModalBody-module_isVisible__1QTme",closeIcon:"ModalBody-module_closeIcon__3aJW5",closeButton:"ModalBody-module_closeButton__2UtNd"},ModalBody=function(e){var t=e.children,a=e.className,l=e.copy,i=e.onClose,n=e.isVisible,s=e.theme,d=(0,_classnames["default"])(styles$t.base,_defineProperty({},styles$t.isVisible,n),styles$t[s],a);return _react["default"].createElement("div",{className:d},t,_react["default"].createElement(Button,{className:styles$t.closeButton,dataTestRef:"MODAL_CLOSE_BUTTON",isInline:!0,onClick:i,theme:s,title:l.close},_react["default"].createElement(Icon,{className:styles$t.closeIcon,height:14,name:"close",theme:s,width:14})))};ModalBody.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,copy:_propTypes["default"].shape({close:_propTypes["default"].string}).isRequired,onClose:_propTypes["default"].func.isRequired,isVisible:_propTypes["default"].bool.isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},ModalBody.defaultProps={children:void 0,className:void 0,copy:void 0,onClose:void 0,isVisible:void 0,theme:"dark"};var styles$u={base:"Modal-module_base__1XCSr",inner:"Modal-module_inner__3QC4Z"},Modal=function(e){var t=e.children,a=e.className,l=e.copy,i=e.onClose,n=e.isVisible,s=e.theme;useEscapeKeyListener(i),useOverflowHidden(n);var d=(0,_classnames["default"])(styles$u.base,styles$u[s],a),o=document.querySelector("#modal");return o?_react["default"].createElement(_react["default"].Fragment,null,_reactDom["default"].createPortal(_react["default"].createElement("aside",{"aria-hidden":!n,className:d},_react["default"].createElement(Overlay,{isVisible:n,onClose:i}),_react["default"].createElement(Transition,{hasCSSTransitionMountOnEnter:!0,hasCSSTransitionUnmountOnExit:!0,isActive:n,type:"zoom"},_react["default"].createElement("div",{className:styles$u.inner},_react["default"].createElement(ModalBody,{copy:l,isVisible:n,onClose:i,theme:s},t)))),o)):null};Modal.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,copy:_propTypes["default"].shape({close:_propTypes["default"].string}),isVisible:_propTypes["default"].bool,onClose:_propTypes["default"].func,theme:_propTypes["default"].oneOf(["dark","light"])},Modal.defaultProps={children:void 0,className:void 0,copy:{copy:""},isVisible:void 0,onClose:void 0,theme:"dark"};var styles$v={base:"Quote-module_base__2H3wf",dark:"Quote-module_dark__ocCjZ",light:"Quote-module_light__2dKx5",noTopPadding:"Quote-module_noTopPadding__x31V0",wrapper:"Quote-module_wrapper__1S4Pe",blockquote:"Quote-module_blockquote__1Ap9l",author:"Quote-module_author__3tPnl"},Quote=function(e){var t=e.author,a=e.className,l=e.content,i=e.hasTopPadding,n=e.theme,s=(0,_classnames["default"])(styles$v.base,_defineProperty({},styles$v.noTopPadding,!i),styles$v[n],a);return _react["default"].createElement("div",{className:s},_react["default"].createElement("div",{className:styles$v.wrapper},_react["default"].createElement("blockquote",{className:styles$v.blockquote},l),_react["default"].createElement("cite",{className:styles$v.author},t)))};Quote.propTypes={author:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,content:_propTypes["default"].string.isRequired,hasTopPadding:_propTypes["default"].bool,theme:_propTypes["default"].oneOf(["dark","light"])},Quote.defaultProps={author:void 0,className:void 0,content:void 0,hasTopPadding:!0,theme:"dark"};var styles$w={base:"TwoColumnLayout-module_base__2yBvR",sidebar:"TwoColumnLayout-module_sidebar__ahl3O",content:"TwoColumnLayout-module_content__3aiag",fullWidth:"TwoColumnLayout-module_fullWidth__3SACE",reverse:"TwoColumnLayout-module_reverse__3PqUh",contentOnly:"TwoColumnLayout-module_contentOnly__3ilps",verticalPadding:"TwoColumnLayout-module_verticalPadding__3XZGY"},TwoColumnLayout=function(e){var t=e.childrenClassNames,a=e.className,l=e.content,i=e.hasRightPadding,n=e.hasVerticalPadding,s=e.id,d=e.isReversed,o=e.sidebar,r=e.theme,u=(0,_classnames["default"])(styles$w.base,_defineProperty({},styles$w.reverse,d),_defineProperty({},styles$w.verticalPadding,n),_defineProperty({},styles$w.contentOnly,!o),styles$w[r],a),c=(0,_classnames["default"])(styles$w.content,_defineProperty({},styles$w.fullWidth,!i),t.content),m=(0,_classnames["default"])(styles$w.sidebar,t.sidebar);return _react["default"].createElement("div",{className:u,id:s},_react["default"].createElement("div",{className:c,id:"mainColumn"},l),o&&_react["default"].createElement("aside",{className:m,id:"sidebarColum"},o))};TwoColumnLayout.propTypes={childrenClassNames:_propTypes["default"].shape({sidebar:_propTypes["default"].string,content:_propTypes["default"].string}),className:_propTypes["default"].string,content:_propTypes["default"].any.isRequired,hasRightPadding:_propTypes["default"].bool,hasVerticalPadding:_propTypes["default"].bool,id:_propTypes["default"].string,isReversed:_propTypes["default"].bool,sidebar:_propTypes["default"].any,theme:_propTypes["default"].oneOf(["dark","light"])},TwoColumnLayout.defaultProps={childrenClassNames:{sidebar:void 0,content:void 0},className:void 0,content:void 0,hasRightPadding:!0,hasVerticalPadding:!1,id:void 0,isReversed:!0,sidebar:void 0,theme:"dark"};var styles$x={base:"TwoColumnList-module_base__rFZFc",subHeading:"TwoColumnList-module_subHeading__2ubT9",column:"TwoColumnList-module_column__23aK9",wrapper:"TwoColumnList-module_wrapper__3K7T4",dark:"TwoColumnList-module_dark__2vxrl",light:"TwoColumnList-module_light__bZ60S",list:"TwoColumnList-module_list__FcSTT"},Column=function(e){var t=e.lists,a=e.theme;return t.map(function(e){var t=e.heading,l=e.id,i=e.items,n=e.subHeading,s=i.map(function(e){var t=e.id,l=e.style,i=e.text,n=e.url,s=e.openInANewWindow,d=e.type;return n?{content:_react["default"].createElement(Hyperlink,{openInANewWindow:s,style:l,theme:a,type:d,url:n},i),id:t}:{content:i,id:t}});return _react["default"].createElement("div",{className:styles$x.wrapper,key:l},t&&_react["default"].createElement(Heading,{level:"2",size:"medium",theme:a},t),n&&_react["default"].createElement(Heading,{className:styles$x.subHeading,level:"4",size:"xSmall",theme:a},n),s&&_react["default"].createElement(List,{className:styles$x.list,items:s,theme:a}))})},TwoColumnList=function(e){var t=e.className,a=e.leftColumn,l=e.rightColumn,i=e.theme,n=(0,_classnames["default"])(styles$x.base,styles$x[i],t);return _react["default"].createElement("div",{className:n},_react["default"].createElement("div",{className:styles$x.column},_react["default"].createElement(Column,{lists:a,theme:i})),_react["default"].createElement("div",{className:styles$x.column},_react["default"].createElement(Column,{lists:l,theme:i})))};TwoColumnList.propTypes={className:_propTypes["default"].string,leftColumn:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].object)})).isRequired,rightColumn:_propTypes["default"].arrayOf(_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,heading:_propTypes["default"].string,subHeading:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].object)})).isRequired,theme:_propTypes["default"].oneOf(["dark","light"])},TwoColumnList.defaultProps={className:void 0,leftColumn:void 0,rightColumn:void 0,theme:"dark"};var styles$y={fullScreenControls:"Controls-module_fullScreenControls__2TWMJ",videoTitle:"Controls-module_videoTitle__1DWab",fullScreenControlsHeader:"Controls-module_fullScreenControlsHeader__K_5Jt",activeFullScreenControls:"Controls-module_activeFullScreenControls__3gh8o",mute:"Controls-module_mute__Zo2HR",close:"Controls-module_close__2aDWj",playPauseButton:"Controls-module_playPauseButton__3KMud",activePlayPauseButton:"Controls-module_activePlayPauseButton__3vXZv",inactivePlayPauseButton:"Controls-module_inactivePlayPauseButton__2r-aT",fullScreenPlayPauseButton:"Controls-module_fullScreenPlayPauseButton__2qnFo",playPauseButtonIcon:"Controls-module_playPauseButtonIcon__3Jt62",playButtonIcon:"Controls-module_playButtonIcon__3uHZQ",progressBar:"Controls-module_progressBar__2qSO3",progress:"Controls-module_progress__3LuK-",hidden:"Controls-module_hidden__3_owA"},Controls=function(e){var t,a,l=e.className,i=e.copy,n=e.hasActiveVideo,s=e.hasAllowAudio,d=e.hasPlayInFullScreen,o=e.isMobileOrTablet,r=e.isMuted,u=e.isPlaying,c=e.onAudioButtonClick,m=e.onCloseButtonClick,_=e.onPlayPauseButtonClick,f=e.progress,h=(0,_react.useState)(!0),g=_slicedToArray(h,2),p=g[0],E=g[1];useEscapeKeyListener(function(){E(!0),m()});var T=(0,_react.useRef)(null),y="undefined"!=typeof window;(0,_react.useEffect)(function(){y&&window.clearTimeout(T.current);var e=function(){E(!0),y&&(window.clearTimeout(T.current),T.current=window.setTimeout(function(){E(!1)},3e3))};n&&e();var t=debounce_1(function(){n&&e()},10);return y&&(window.addEventListener("mousemove",t),window.addEventListener("touchstart",t)),function(){y&&(window.removeEventListener("mousemove",t),window.removeEventListener("touchstart",t),window.clearTimeout(T.current))}},[y,n,d]);var b=(0,_classnames["default"])(styles$y.base,l),C=(0,_classnames["default"])((t={},_defineProperty(t,styles$y.fullScreenControls,d),_defineProperty(t,styles$y.activeFullScreenControls,n&&d),t)),N=u?i.pauseButtonTitle:i.playButtonTitle,I=u?"pause":"play",A=ascertainIsSmallOrMediumOnlyViewport();return _react["default"].createElement("div",{className:b},s&&n&&(!d||A)&&_react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$y.mute,_defineProperty({},styles$y.hidden,!p)),isInline:!0,onClick:c,title:r?i.unmuteButtonTitle:i.muteButtonTitle},_react["default"].createElement(Icon,{height:16,name:r?"muted":"unmuted",theme:"light",width:16})),_react["default"].createElement(Transition,{isActive:n&&d&&!o,type:"zoom"},_react["default"].createElement("div",{className:C},_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$y.fullScreenControlsHeader,_defineProperty({},styles$y.hidden,!p))},s&&_react["default"].createElement(Button,{className:styles$y.mute,isInline:!0,onClick:c,title:r?i.unmuteButtonTitle:i.muteButtonTitle},_react["default"].createElement(Icon,{height:16,name:r?"muted":"unmuted",theme:"light",width:16})),_react["default"].createElement(Button,{className:styles$y.close,isInline:!0,onClick:function(){E(!0),m()},title:i.closeButtonTitle},_react["default"].createElement(Icon,{height:16,name:"close",theme:"light",width:16})),_react["default"].createElement(Button,{className:styles$y.fullScreenPlayPauseButton,isInline:!0,onClick:_,title:N},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(_defineProperty({},styles$y.playButtonIcon,!u)),height:10,name:I,theme:"light",width:10}))))),_react["default"].createElement(Transition,{isActive:!u&&d||o||!d,type:"fade"},_react["default"].createElement(Button,{className:(0,_classnames["default"])(styles$y.playPauseButton,(a={},_defineProperty(a,styles$y.activePlayPauseButton,n),_defineProperty(a,styles$y.inactivePlayPauseButton,!(A||!A&&!n||!A&&!d)),_defineProperty(a,styles$y.hidden,!p),a)),isInline:!0,onClick:_,title:N},_react["default"].createElement(Icon,{className:(0,_classnames["default"])(_defineProperty({},styles$y.playButtonIcon,!u)),height:10,name:I,width:10}))),_react["default"].createElement(Transition,{isActive:n,type:"fade"},_react["default"].createElement("div",{className:styles$y.progressBar},_react["default"].createElement("div",{className:styles$y.progress,style:{width:"".concat(f,"%")}}))))};Controls.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string,muteButtonTitle:_propTypes["default"].string,pauseButtonTitle:_propTypes["default"].string,playButtonTitle:_propTypes["default"].string,unmuteButtonTitle:_propTypes["default"].string}),hasActiveVideo:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,isMobileOrTablet:_propTypes["default"].bool,isMuted:_propTypes["default"].bool,isPlaying:_propTypes["default"].bool,onAudioButtonClick:_propTypes["default"].func,onCloseButtonClick:_propTypes["default"].func,onPlayPauseButtonClick:_propTypes["default"].func,progress:_propTypes["default"].number},Controls.defaultProps={className:void 0,copy:{closeButtonTitle:"Close",muteButtonTitle:"Mute video",pauseButtonTitle:"View video",playButtonTitle:"Pause video",unmuteButtonTitle:"Unmute video"},hasActiveVideo:!1,hasAllowAudio:!1,hasPlayInFullScreen:!1,isMobileOrTablet:!1,isMuted:!0,isPlaying:!1,onAudioButtonClick:void 0,onCloseButtonClick:void 0,onPlayPauseButtonClick:void 0,progress:0};var styles$z={base:"Poster-module_base__1YXtU",isActive:"Poster-module_isActive__2lxc1"},Poster=function(e){var t=e.className,a=e.copy,l=e.isActive,i=e.large,n=e.medium,s=e.onClick,d=e.small,o=(0,_classnames["default"])(styles$z.base,_defineProperty({},styles$z.isActive,l),t);return _react["default"].createElement(Transition,{isActive:l,type:"fade"},_react["default"].createElement(Button,{className:o,isInline:!0,onClick:s,title:a.playButtonTitle},_react["default"].createElement(Image,{altText:a.altText,large:i,medium:n,small:d})))};Poster.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({playButtonTitle:_propTypes["default"].string,altText:_propTypes["default"].string.isRequired}),isActive:_propTypes["default"].bool,large:_propTypes["default"].bool,medium:_propTypes["default"].string,onClick:_propTypes["default"].func,small:_propTypes["default"].string},Poster.defaultProps={className:void 0,copy:{playButtonTitle:void 0,altText:void 0},isActive:void 0,large:void 0,medium:void 0,onClick:void 0,small:void 0};var styles$A={base:"VideoPlayer-module_base__1NW0T",playsInFullScreen:"VideoPlayer-module_playsInFullScreen__2grcD",isPlayingInFullScreen:"VideoPlayer-module_isPlayingInFullScreen__2kBK1"},VideoPlayer=(0,_react.forwardRef)(function(e,t){var a,l=e.className,i=e.hasActiveVideo,n=e.hasAllowAudio,s=e.hasAutoplay,d=e.hasLoop,o=e.hasPlayInFullScreen,r=e.isActive,u=e.isMuted,c=e.large,m=e.medium,_=e.small,f=(0,_classnames["default"])(styles$A.base,(a={},_defineProperty(a,styles$A.playsInFullScreen,o),_defineProperty(a,styles$A.isPlayingInFullScreen,i&&o),a),l);return _react["default"].createElement(Transition,{isActive:r,type:"fade"},_react["default"].createElement("video",{autoPlay:s,className:f,controls:!1,loop:d,muted:!n||n&&u,playsInline:!0,ref:t},c&&_react["default"].createElement("source",{media:"(min-width: 1025px)",src:c,type:"video/mp4"}),m&&_react["default"].createElement("source",{media:"(min-width: 640px)",src:m,type:"video/mp4"}),_&&_react["default"].createElement("source",{media:"(min-width: 0px)",src:_,type:"video/mp4"})))});VideoPlayer.propTypes={className:_propTypes["default"].string,hasActiveVideo:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasAutoplay:_propTypes["default"].bool,hasLoop:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,isActive:_propTypes["default"].bool,isMuted:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string},VideoPlayer.defaultProps={className:void 0,hasActiveVideo:!1,hasAllowAudio:!1,hasAutoplay:!1,hasLoop:!0,hasPlayInFullScreen:!1,isActive:!0,isMuted:!0,large:void 0,medium:void 0,small:void 0};var styles$B={base:"Video-module_base__3wxiY",fullWidth:"Video-module_fullWidth__3pl8F",fallbackImage:"Video-module_fallbackImage__38kdv"},Video=(0,_react.forwardRef)(function(e,t){var a=e.className,l=e.copy,i=e.fallbackImage,n=e.hasControls,s=e.hasAllowAudio,d=e.hasAutoplay,o=e.hasLoop,r=e.hasPlayInFullScreen,u=e.id,c=e.isFullWidth,m=e.large,_=e.medium,f=e.poster,h=e.small,g=(0,_react.useState)(d),p=_slicedToArray(g,2),E=p[0],T=p[1],y=(0,_react.useState)(d),b=_slicedToArray(y,2),C=b[0],N=b[1],I=(0,_react.useState)(0),A=_slicedToArray(I,2),O=A[0],S=A[1],w=(0,_react.useState)(!s),v=_slicedToArray(w,2),x=v[0],R=v[1],k=ascertainIsSmallOrMediumOnlyViewport(),P=(0,_react.useRef)();useWindowHasResized(),useOverflowHidden(C&&r&&!k),(0,_react.useEffect)(function(){var e=P.current,t=function(){var t=e.currentTime&&e.duration?100*(e.currentTime/e.duration):0;S(t)};return e&&e.addEventListener("timeupdate",t),function(){e&&e.removeEventListener("timeupdate",t)}});var D=function(){P.current.pause(),T(!1),N(!1),window.setTimeout(function(){P.current.currentTime=0,P.current.load(),S(0)},500)},H=function(){P.current.play(),T(!0),N(!0)};useEscapeKeyListener(D);var M=E?function(){P.current.pause(),T(!1)}:H,B=(0,_classnames["default"])(styles$B.base,a,_defineProperty({},styles$B.fullWidth,c));return!(m||_||h)&&i?_react["default"].createElement("figure",{className:B,id:u,ref:t},_react["default"].createElement(Image,{altText:i.copy.altText,className:(0,_classnames["default"])(styles$B.fallbackImage,i.className),large:i.large,medium:i.medium,small:i.small})):_react["default"].createElement("figure",{className:B,id:u,ref:t,role:"group"},_react["default"].createElement(VideoPlayer,{hasActiveVideo:C,hasAllowAudio:s,hasAutoplay:d,hasLoop:o,hasPlayInFullScreen:r,isActive:!f||C,isMuted:x,large:m,medium:_,ref:P,small:h}),_react["default"].createElement(Poster,{copy:{playButtonTitle:l.playButtonTitle,altText:f.copy.altText},isActive:!C,large:f.large,medium:f.medium,onClick:function(){return H()},small:f.small}),n&&_react["default"].createElement(Controls,{copy:{closeButtonTitle:l.closeButtonTitle,pauseButtonTitle:l.pauseButtonTitle,playButtonTitle:l.playButtonTitle,muteButtonTitle:l.muteButtonTitle,unmuteButtonTitle:l.unmuteButtonTitle},hasActiveVideo:C,hasAllowAudio:s,hasPlayInFullScreen:r,isMobileOrTablet:k,isMuted:x,isPlaying:E,onAudioButtonClick:function(){return R(!x)},onCloseButtonClick:D,onPlayPauseButtonClick:M,progress:O}))});Video.propTypes={className:_propTypes["default"].string,copy:_propTypes["default"].shape({closeButtonTitle:_propTypes["default"].string,muteButtonTitle:_propTypes["default"].string,playButtonTitle:_propTypes["default"].string,pauseButtonTitle:_propTypes["default"].string,unmuteButtonTitle:_propTypes["default"].string}),fallbackImage:_propTypes["default"].shape({className:_propTypes["default"].string,copy:_propTypes["default"].shape({altText:_propTypes["default"].string}),large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string}),hasControls:_propTypes["default"].bool,hasAllowAudio:_propTypes["default"].bool,hasAutoplay:_propTypes["default"].bool,hasLoop:_propTypes["default"].bool,hasPlayInFullScreen:_propTypes["default"].bool,id:_propTypes["default"].string,isFullWidth:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,poster:_propTypes["default"].shape({className:_propTypes["default"].string,copy:_propTypes["default"].shape({playButtonTitle:_propTypes["default"].string,altText:_propTypes["default"].string}),isActive:_propTypes["default"].string,large:_propTypes["default"].string,medium:_propTypes["default"].string,onClick:_propTypes["default"].func,small:_propTypes["default"].string}),small:_propTypes["default"].string},Video.defaultProps={className:void 0,copy:{closeButtonTitle:"Close",muteButtonTitle:"Mute video",playButtonTitle:"View video",pauseButtonTitle:"Pause video",unmuteButtonTitle:"Unmute video"},fallbackImage:{className:void 0,copy:{altText:void 0},large:void 0,medium:void 0,small:void 0},hasControls:!0,hasAllowAudio:!1,hasAutoplay:!1,hasLoop:!0,hasPlayInFullScreen:!1,id:void 0,isFullWidth:!0,large:void 0,medium:void 0,poster:{className:void 0,copy:{playButtonTitle:void 0,altText:void 0},isActive:void 0,large:void 0,medium:void 0,onClick:void 0,small:void 0},small:void 0};var components={Accordion:Accordion,BodyCopy:BodyCopy,Breadcrumbs:Breadcrumbs,Button:Button,BynderWidget:BynderWidget,Carousel:Carousel,DefinitionList:DefinitionList,DialogBanner:DialogBanner,DoubleImage:DoubleImage,Figure:Figure,FlyinPanel:FlyinPanel,Heading:Heading,HeroWithContent:HeroWithContent,Hyperlink:Hyperlink,Icon:Icon,Image:Image,ImageWithHeaderAndContent:ImageWithHeaderAndContent,KitList:KitList,List:List,Loading:Loading,Modal:Modal,Overlay:Overlay,P:Paragraph,Paragraph:Paragraph,ParagraphSet:ParagraphSet,Quote:Quote,SectionHeading:SectionHeading,SubNav:SubNav,Transition:Transition,TwoColumnLayout:TwoColumnLayout,TwoColumnList:TwoColumnList,Video:Video},hasIntersectionObserver="IntersectionObserver"in window||"IntersectionObserverEntry"in window||"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,useOnScreen=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"0px",l=(0,_react.useState)(!1),i=_slicedToArray(l,2),n=i[0],s=i[1];return(0,_react.useEffect)(function(){var l=null,i=e.current;return hasIntersectionObserver?(l=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&s(e.isIntersecting)})},{rootMargin:a,threshold:t}),l.observe(i)):s(!0),function(){hasIntersectionObserver&&l.unobserve(i)}},[e,a,t]),n},customHooks={useEscapeKeyListener:useEscapeKeyListener,useHasMounted:useHasMounted,useOnScreen:useOnScreen,useOverflowHidden:useOverflowHidden,useWindowHasResized:useWindowHasResized},paragraphsFromDivs=function(e){var t=e.replace("<div>&nbsp;</div>","").replace(/<div>/gi,"<p>").replace(/<\/div>/gi,"</p>");return-1===t.indexOf("<p>")?"<p>".concat(t,"</p>"):t},paragraphsFromDivs$1={paragraphsFromDivs:paragraphsFromDivs},utils={objects:objects,paragraphsFromDivs:paragraphsFromDivs$1,viewports:viewports},index={components:components,constants:constants,customHooks:customHooks,utils:utils},_default=index;exports["default"]=_default;
//# sourceMappingURL=index.js.map
