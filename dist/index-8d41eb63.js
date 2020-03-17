"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports._=_slicedToArray,exports.a=_defineProperty,exports.b=_objectWithoutProperties,exports.c=_extends,exports.d=_typeof,exports.B=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _typeof(a){"@babel/helpers - typeof";return exports.d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?_typeof=function(a){return typeof a}:_typeof=function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _extends(){return exports.c=_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var styles={base:"Button-module_base__3aZlL",blockStyle:"Button-module_blockStyle__3UjpG",dark:"Button-module_dark__39IaJ",alternate:"Button-module_alternate__feDv-",light:"Button-module_light__3pPaS",disabled:"Button-module_disabled__2hS0q",fadeInOut:"Button-module_fadeInOut__45Z1z",fadeIn:"Button-module_fadeIn__270_a",fadeOut:"Button-module_fadeOut__2GLdK",slideInLeft:"Button-module_slideInLeft__qH1Pa",slideOutLeft:"Button-module_slideOutLeft__2POIZ",slideOutUp:"Button-module_slideOutUp__1vAc2",slideInDown:"Button-module_slideInDown__2eIg2",slideOutDown:"Button-module_slideOutDown__3uiDf",slideInUp:"Button-module_slideInUp__y3mRW"},Button=function(a){var b=a.children,c=a.className,d=a.dataTestRef,e=a.id,f=a.isAlternate,g=a.isEnabled,h=a.isInline,i=a.onClick,j=a.tabIndex,k=a.title,l=a.type,m=a.theme,n=(0,_classnames["default"])(styles.base,_defineProperty({},styles.alternate,f),_defineProperty({},styles.blockStyle,!h),_defineProperty({},styles.disabled,!g),_defineProperty({},styles.external,external),_defineProperty({},styles.inlineStyle,h),styles[m],c);return _react["default"].createElement("button",{className:n,"data-test-ref":d,disabled:!g,id:e,onClick:i,tabIndex:j,title:k,type:l},b)};exports.B=Button,Button.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool,isEnabled:_propTypes["default"].bool,isInline:_propTypes["default"].bool,onClick:_propTypes["default"].func,tabIndex:_propTypes["default"].number,title:_propTypes["default"].string.isRequired,type:_propTypes["default"].oneOf(["button","reset","submit"]),theme:_propTypes["default"].oneOf(["dark","light"])},Button.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,id:void 0,isAlternate:!1,isEnabled:!0,isInline:!1,onClick:void 0,tabIndex:void 0,title:void 0,type:"button",theme:"dark"};
//# sourceMappingURL=index-8d41eb63.js.map
