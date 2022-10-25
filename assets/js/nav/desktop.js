/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThisRaw = __webpack_require__(/*! ../internals/function-uncurry-this-raw */ "./node_modules/core-js/internals/function-uncurry-this-raw.js");

var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/document-all.js ***!
  \********************************************************/
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-raw.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-raw.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var uncurryThisRaw = __webpack_require__(/*! ../internals/function-uncurry-this-raw */ "./node_modules/core-js/internals/function-uncurry-this-raw.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThisRaw(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/desktop_nav.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/desktop_nav.sass ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \nTABLE OF CONTENTS\n\n  1. Sizes\n  2. Typography\n  3. Colors\n  4. Spacings\n  5. Top Navbar\n\n*/\n/**\n * * Common Nav styles for mobile and desktop\n * * @since 3.0\n * * @importance core\n * * \n * * Table of Contents\n * *\n * *  1. Containers\n * *  2. Logo Image Link\n * *\n * **/\n#wmnav-cont {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n}\n\n#wmnav-content {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n#wmnav-bar {\n  flex: 0 0 auto;\n  width: 100vw;\n  max-width: 100vw;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #BEBEBE;\n  background: white;\n  position: relative;\n  z-index: 1000;\n}\n\n#wmnav-logo {\n  width: 100px;\n  height: auto;\n  margin: calc(0.4rem + 0.25vw);\n  position: relative;\n}\n#wmnav-logo img {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n}\n\n#el-clickable-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(12, 60, 146, 0.35);\n}\n\n#wmnav-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-items: stretch;\n  align-items: baseline;\n  align-content: baseline;\n  z-index: -100;\n  opacity: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n@keyframes navrot {\n  to {\n    transform: rotateY(360deg);\n  }\n}\n.css_block {\n  position: absolute;\n  overflow: hidden !important;\n}\n.css_block a {\n  padding: calc(0.4rem + 0.25vw);\n}\n.css_block.css-gray > div, .css_block.css-gray > a {\n  background: #E6E6E6;\n}\n.css_block.css-gray > div:hover, .css_block.css-gray > a:hover {\n  background: white;\n}\n.css_block.css-white > div, .css_block.css-white > a {\n  background: white;\n}\n.css_block.css-white > div:hover, .css_block.css-white > a:hover {\n  background: white;\n  color: black;\n}\n.css_block.css-gray-lighter > div, .css_block.css-gray-lighter > a {\n  background: #F5F5F5;\n}\n.css_block.css-gray-lighter > div:hover, .css_block.css-gray-lighter > a:hover {\n  background: white;\n}\n.css_block.css-dark-blue > div, .css_block.css-dark-blue > a {\n  background: color(\"gray\", \"darken-2\");\n}\n.css_block.css-color-blue > div, .css_block.css-color-blue > a {\n  color: #87c8ff;\n}\n.css_block.css-color-white > div, .css_block.css-color-white > a {\n  color: color(\"shades\", \"white\") !important;\n}\n.css_block.css-color-white > div h2, .css_block.css-color-white > a h2 {\n  color: color(\"shades\", \"white\") !important;\n}\n.css_block.css-color-dark-gray > div, .css_block.css-color-dark-gray > a {\n  color: color(\"gray\", \"darken-2\");\n}\n\n#csscube-cont {\n  flex-basis: 100%;\n  max-width: 100%;\n  height: 100vh;\n  align-self: baseline;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n}\n#csscube-cont #csscube-scene {\n  z-index: 10;\n  opacity: 0;\n  position: absolute;\n  margin: auto;\n}\n#csscube-cont #csscube-scene #csscube-rotator {\n  transform: rotateX(-7deg);\n  z-index: 10;\n  position: relative;\n  transform-style: preserve-3d;\n  transform-origin: 0% 0% 50%;\n  -moz-transform-origin: 0% 0% 50%;\n  -webkit-transform-origin-z: 50%;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube {\n  transform-style: preserve-3d;\n  position: relative;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h1 {\n  top: 0;\n  left: 0;\n  font-family: \"Exo\";\n  font-weight: light;\n  line-height: 0.8;\n  text-align: left;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube a .ess-anim-icon {\n  stroke: #787878;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube a:hover .ess-anim-icon {\n  stroke: #2d78c8;\n  fill: #f0faff;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h2 {\n  text-align: center;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry h2 {\n  margin-top: 0;\n  padding-bottom: calc(0.8rem + 0.5vw) !important;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry a {\n  align-content: center !important;\n  padding-top: 0 !important;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry a:hover h2 {\n  color: black;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h3 {\n  text-align: center;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h4 {\n  margin: calc(0.4rem + 0.25vw) 0 calc(0.2rem + 0.15vw) 0 !important;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side {\n  background: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  backface-visibility: visible;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block {\n  display: flex;\n  align-items: stretch;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.css-block-header > div:hover {\n  cursor: default;\n  background-color: inherit;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a {\n  align-content: stretch;\n  padding-bottom: calc(0.8rem + 0.5vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a .cc-icon-h {\n  align-self: flex-end;\n  width: 100%;\n  padding: 0 25%;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a h2 {\n  align-self: flex-end;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a {\n  clip-path: polygon(0 0.3rem, 0 calc(100% - 0.3rem), 0.3rem 100%, calc(100% - 0.3rem) 100%, 100% calc(100% - 0.3rem), 100% 0.3rem, calc(100% - 0.3rem) 0, 0.3rem 0);\n  transform-style: preserve-3d;\n  text-decoration: none;\n  color: color(\"gray\", \"darken-2\");\n  flex: 1;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: rel ative;\n  margin: 0.05rem;\n  padding: calc(0.8rem + 0.5vw);\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div:hover, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a:hover {\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 1;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div .icon-image, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a .icon-image {\n  padding: 0 calc(0.4rem + 0.25vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.hover-dark:hover, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.hover-dark:hover {\n  background: color(\"gray\", \"darken-2\");\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.background-image-link img, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.background-image-link img {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.background-image-link:hover img, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.background-image-link:hover img {\n  opacity: 1;\n}\n#csscube-cont #csscube-scene #csscube-shadow {\n  background: #BEBEBE;\n  opacity: 0.1;\n  filter: blur(30px);\n  z-index: 1;\n  transform-style: preserve-3d;\n}\n#csscube-cont #csscube-scene .csscube-navbutton {\n  position: absolute;\n  cursor: pointer;\n  background: none;\n  z-index: 1000;\n  border: none;\n  top: 40%;\n}\n#csscube-cont #csscube-scene .csscube-navbutton .ess-icon {\n  font-size: calc(5vw + 5vh);\n  transition: color 0.5s ease;\n  color: #14bef0;\n}\n#csscube-cont #csscube-scene .csscube-navbutton.left-button {\n  left: calc(-1.5 * (5vw + 5vh));\n}\n#csscube-cont #csscube-scene .csscube-navbutton.right-button {\n  right: calc(-1.5 * (5vw + 5vh));\n}\n#csscube-cont #csscube-scene .csscube-navbutton:hover .ess-icon {\n  color: #14a0ff;\n}\n\n#x-button,\n#left-button,\n#right-button {\n  width: 70px;\n  height: 70px;\n  background: none;\n  border: none;\n  z-index: 10000;\n  top: 300px;\n  position: fixed;\n}\n#x-button:hover,\n#left-button:hover,\n#right-button:hover {\n  background: black;\n}\n\n#left-button {\n  left: -120px;\n}\n\n#right-button {\n  right: 0px;\n}\n\n#x-button {\n  left: 50%;\n  top: auto;\n  bottom: 0;\n}\n\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block a {\n  flex-direction: column;\n  flex-wrap: nowrap;\n  transition: padding-top 0.2 eas-out;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block a:hover {\n  padding-top: calc(0.4rem + 0.25vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block h3 {\n  margin-top: -0.2em;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block .svg-ess-cube {\n  height: 25%;\n  margin-bottom: 0;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block.main-product-block h3 {\n  font-weight: bold;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block .main-product-logo {\n  height: 50%;\n  margin-bottom: 0;\n}\n\n#cube-ess-logo {\n  width: 40%;\n  max-width: 250px;\n}\n\n.cfob {\n  position: absolute;\n  height: 100vh;\n  min-width: 20px;\n  top: 0;\n}\n\n.cfob-left {\n  left: 0;\n}\n\n.cfob-right {\n  right: 0;\n}\n\n#wmnav-list {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n#wmnav-list li {\n  padding: 0;\n  margin: 0;\n  font-family: \"Exo\", sans-serif;\n  text-transform: uppercase;\n}\n#wmnav-list li a {\n  display: block;\n  position: relative;\n  padding: calc(0.8rem + 0.5vw) calc(0.8rem + 0.5vw);\n  font-family: \"Exo\", sans-serif;\n  color: #787878;\n  cursor: pointer;\n  text-align: center;\n  transition: background 0.5s ease, color 0.5s ease, border 0.5s ease;\n}\n#wmnav-list li a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -0.2rem;\n  left: 50%;\n  width: 0;\n  height: 0.2rem;\n  background: #14bef0;\n  transition: width 0.5s, left 0.5s;\n}\n#wmnav-list li a:hover {\n  text-decoration: none;\n  color: #4D4D4D;\n}\n#wmnav-list li a.active {\n  color: #2D2D2D;\n}\n#wmnav-list li a.active::after {\n  width: 100%;\n  left: 0;\n}\n\n#wmnav-settings {\n  width: 100px;\n  margin: 0 calc(0.4rem + 0.25vw);\n}", "",{"version":3,"sources":["webpack://./src/sass/components/_variables.scss","webpack://./src/nav/sass/components/_common_mobile_desktop.sass","webpack://./src/nav/sass/desktop_nav.sass","webpack://./src/nav/sass/components/_desktop_cube.scss","webpack://./src/nav/sass/components/_desktop_menu_list.sass"],"names":[],"mappings":"AAAA;;;;;;;;;CAAA;ACCA;;;;;;;;;;KAAA;AAcA;EACE,eAAA;EACA,YAAA;EACA,MAAA;ACOF;;ADLA;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,wBAAA;ACQF;;ADNA;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;ACSF;;ADLA;EACE,YAAA;EACA,YAAA;EACA,6BDjBa;ECkBb,kBAAA;ACQF;ADNE;EACE,WAAA;EACA,eAAA;EACA,YAAA;ACQJ;;ACpDA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mCH4IoB;AErFtB;;ACnDA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,aAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;ADsDF;;ACjDA;EACE;IACE,0BAAA;EDoDF;AACF;ACjDA;EA2DE,kBAAA;EACA,2BAAA;ADPF;ACnDE;EACE,8BHfW;AEoEf;AClDE;EAEE,mBAAA;ADmDJ;ACjDI;EACE,iBAAA;ADmDN;AC/CE;EAEE,iBAAA;ADgDJ;AC9CI;EACE,iBAAA;EACA,YAAA;ADgDN;AC5CE;EAEE,mBAAA;AD6CJ;AC3CI;EACE,iBAAA;AD6CN;ACzCE;EAEE,qCH4Ce;AEFnB;ACvCE;EAEE,cAAA;ADwCJ;ACrCE;EAEE,0CAAA;ADsCJ;ACpCI;EACE,0CAAA;ADsCN;AClCE;EAEE,gCHwBY;AEWhB;;AC3BA;EAGE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AD4BF;ACzBE;EACE,WAAA;EACA,UAAA;EAGA,kBAAA;EACA,YAAA;ADyBJ;ACvBI;EACE,yBAAA;EACA,WAAA;EACA,kBAAA;EAEA,4BAAA;EACA,2BAAA;EACA,gCAAA;EACA,+BAAA;ADwBN;ACtBM;EAEE,4BAAA;EAEA,kBAAA;ADsBR;ACnBQ;EACE,MAAA;EACA,OAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;ADqBV;ACjBU;EACE,eAAA;ADmBZ;ACdU;EACE,eAAA;EACA,aAAA;ADgBZ;ACXQ;EACE,kBAAA;EACA,mBAAA;ADaV;ACTU;EACE,aAAA;EACA,+CAAA;EACA,mBAAA;ADWZ;ACRU;EACE,gCAAA;EACA,yBAAA;ADUZ;ACPU;EACE,YAAA;ADSZ;ACLQ;EACE,kBAAA;ADOV;ACJQ;EACE,kEAAA;EACA,mBAAA;ADMV;ACHQ;EAEE,uBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,4BAAA;ADIV;ACFU;EACE,aAAA;EACA,oBAAA;ADIZ;ACCgB;EACE,eAAA;EACA,yBAAA;ADClB;ACMc;EACE,sBAAA;EACA,oCHzMD;AEqMf;ACMgB;EACE,oBAAA;EACA,WAAA;EACA,cAAA;ADJlB;ACSgB;EACE,oBAAA;ADPlB;ACYY;EAEE,kKAAA;EACA,4BAAA;EACA,qBAAA;EACA,gCH3HK;EG4HL,OAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,uBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,6BHvOC;EGwOD,gBAAA;EACA,yBAAA;ADXd;ACec;EACE,qBAAA;EACA,eAAA;EAIA,UAAA;ADhBhB;ACoBc;EACE,gCAAA;ADlBhB;ACqBc;EACE,qCHzJG;AEsInB;ACuBgB;EACE,kBAAA;EACA,MAAA;EACA,UAAA;EACA,6BAAA;ADrBlB;ACwBgB;EACE,UAAA;ADtBlB;AC+BI;EACE,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,4BAAA;AD7BN;ACgCI;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,QAAA;AD9BN;ACgCM;EACE,0BAAA;EACA,2BAAA;EACA,cAAA;AD9BR;ACkCM;EACE,8BAAA;ADhCR;ACmCM;EACE,+BAAA;ADjCR;ACqCQ;EACE,cAAA;ADnCV;;AC4CA;;;EAGE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,cAAA;EAMA,UAAA;EACA,eAAA;AD9CF;ACyCE;;;EACE,iBAAA;ADrCJ;;AC4CA;EACE,YAAA;ADzCF;;AC4CA;EACE,UAAA;ADzCF;;AC4CA;EACE,SAAA;EACA,SAAA;EACA,SAAA;ADzCF;;AC+CE;EACE,sBAAA;EACA,iBAAA;EACA,mCAAA;AD5CJ;AC8CI;EACE,kCH5VS;AEgTf;ACgDE;EACE,kBAAA;AD9CJ;ACiDE;EACE,WAAA;EACA,gBAAA;AD/CJ;ACmDI;EACE,iBAAA;ADjDN;ACsDE;EACE,WAAA;EACA,gBAAA;ADpDJ;;ACyDA;EACE,UAAA;EACA,gBAAA;ADtDF;;ACyDA;EACE,kBAAA;EACA,aAAA;EAEA,eAAA;EACA,MAAA;ADvDF;;AC0DA;EACE,OAAA;ADvDF;;AC0DA;EACE,QAAA;ADvDF;;AEhXA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,UAAA;AFmXF;AEjXE;EACE,UAAA;EACA,SAAA;EACA,8BJuCY;EItCZ,yBAAA;AFmXJ;AEjXI;EACE,cAAA;EACA,kBAAA;EACA,kDAAA;EACA,8BJgCU;EI/BV,cAAA;EACA,eAAA;EACA,kBAAA;EACA,mEAAA;AFmXN;AEjXM;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;EACA,mBAAA;EACA,iCAAA;AFmXR;AEjXM;EACE,qBAAA;EACA,cAAA;AFmXR;AEjXM;EACE,cAAA;AFmXR;AEjXQ;EACE,WAAA;EACA,OAAA;AFmXV;;AEhXA;EACE,YAAA;EACA,+BAAA;AFmXF","sourcesContent":["/* \r\nTABLE OF CONTENTS\r\n\r\n  1. Sizes\r\n  2. Typography\r\n  3. Colors\r\n  4. Spacings\r\n  5. Top Navbar\r\n\r\n*/\r\n\r\n\r\n// 1. Sizes\r\n// ==========================================================================\r\n\r\n$small-screen-up : 461px;\r\n$medium-screen-up : 761px;\r\n$large-screen-up : 1201px;\r\n\r\n$small-screen : 460px;\r\n$medium-screen : 760px;\r\n$large-screen : 1200px;\r\n\r\n$base-margin : calc(0.8rem + 0.5vw);\r\n$double-margin : calc(1.6rem + 1vw);\r\n$quad-margin : calc(3.2rem + 2vw);\r\n$sexta-margin : calc(4.8rem + 3vw);\r\n$okto-margin : calc(6.4rem + 4vw);\r\n$dodeca-margin : calc(9.6rem + 6vw);\r\n\r\n$half-margin : calc(0.4rem + 0.25vw);\r\n$quarter-margin : calc(0.2rem + 0.15vw);\r\n$reduced-margin : 1rem;\r\n\r\n\r\n$-quarter-margin : calc((0.2rem + 0.15vw) * -1);\r\n$-base-margin : calc((0.8rem + 0.5vw) * -1);\r\n$-double-margin : calc((0.8rem + 0.5vw) * -2);\r\n$-quad-margin : calc((0.8rem + 0.5vw) * -4);\r\n$-sexta-margin : calc((0.8rem + 0.5vw) * -6);\r\n$-okto-margin : calc((0.8rem + 0.5vw) * -8);\r\n\r\n\r\n// 2. Typography\r\n// ========================================================================== \r\n\r\n\r\n$copy-font: 'Open Sans', Helvetica, Arial, sans-serif;\r\n$headline-font: 'Exo', sans-serif;\r\n\r\n$bread-text-sm: 14px;\r\n$bread-text-md: 15px;\r\n$bread-text-lg: 16px;\r\n\r\n$bread-text-sm-line: 18px;\r\n$bread-text-md-line: 21px;\r\n$bread-text-lg-line: 24px;\r\n\r\n$tiny-text-sm: 10px;\r\n$tiny-text-md: 11px;\r\n$tiny-text-lg: 12px;\r\n\r\n$tiny-text-sm-line: 14px;\r\n$tiny-text-md-line: 16px;\r\n$tiny-text-lg-line: 18px;\r\n\r\n$small-text-sm: 11px;\r\n$small-text-md: 12px;\r\n$small-text-lg: 13px;\r\n\r\n$small-text-sm-line: 16px;\r\n$small-text-md-line: 17px;\r\n$small-text-lg-line: 18px;\r\n\r\n$large-text-sm: 16px;\r\n$large-text-md: 18px;\r\n$large-text-lg: 20px;\r\n\r\n$huge-text-sm: 26px;\r\n$huge-text-md: 36px;\r\n$huge-text-lg: 46px;\r\n\r\n$mega-text-sm: 40px;\r\n$mega-text-md: 52px;\r\n$mega-text-lg: 64px;\r\n\r\n$h1 : calc(2.65rem + 1vw);\r\n$h1-h2 : calc(1.65rem + 1.1vw);\r\n$h2 : calc(1.8rem + 1vw);\r\n$h3 : calc(1.4rem + 0.8vw);\r\n$h4 : calc(1.2rem + 0.4vw);\r\n$h5 : calc(0.9rem + 0.1vw);\r\n$h6 : calc(0.7rem + 0.08vw);\r\n\r\n\r\n$big-text : calc(2.5rem + 0.7vw);\r\n$bigger-text : calc(2.9rem + 0.9vw);\r\n$biggest-text : calc(3.2rem + 1.2vw);\r\n\r\n$h4-lineheight : calc(1.7rem + 0.2vw);\r\n$h4-padding : calc(1.7rem + 0.2vw) 0;\r\n\r\n$tiny-icon : calc(1.8rem + 0.4vw);\r\n$small-icon : calc(2rem + 0.5vw);\r\n$medium-icon : calc(2.6rem + 0.8vw);\r\n$big-icon : calc(4rem + 1vw);\r\n$huge-icon : calc(6rem + 1.6vw);\r\n$mega-icon: calc(8rem + 2vw);\r\n\r\n\r\n$mega-font : calc(2rem + 2vw);\r\n\r\n$lg-button: calc(4rem + 2vw);\r\n$md-button: calc(2rem + 1vw);\r\n$sm-button: calc(1rem + 0.5vw);\r\n\r\n// 3. Colors\r\n// ==========================================================================\r\n\r\n$primary-color : color(\"essblue\", \"base\");\r\n$primary-color-hover : color(\"essblue\", \"darken-3\");\r\n$primary-text : color(\"gray\", \"darken-2\");\r\n$secondary-color : color(\"gray\", \"darken-2\");\r\n$white : color(\"shades\", \"white\");\r\n\r\n//SYSTEM\r\n$success-color : color(\"green\", \"base\");\r\n$error-color : color(\"red\", \"base\");\r\n\r\n$link-color : color(\"gray\", \"base\");\r\n$ess-base-green : color(\"green\", \"base\");\r\n\r\n$card-link-color : color(\"essblue\", \"base\");\r\n$footer-font-color : color(\"gray\", \"base\");\r\n$footer-bg-color : color(\"gray\", \"lighten-4\");\r\n$footer-copyright-font-color: color(\"gray\", \"lighten-2\");\r\n$footer-copyright-bg-color : none;\r\n$ess-blue-transp : rgba(15, 42, 86, 0.2);\r\n\r\n\r\n\r\n// GRADIENT\r\n$ess-blue-gradient : linear-gradient(to left, color('gray', 'base'), color('gray', 'lighten-1'));\r\n$ess-blue-gradient-reverse : linear-gradient(to right, $primary-color, $secondary-color);\r\n\r\n\r\n// button colors \r\n$primary-button-bg : $primary-color;\r\n$primary-button-bg-hover : color('essblue', 'darken-1');\r\n\r\n// NAVIGATION CUBE\r\n// Current one\r\n//$nav-cube-background: radial-gradient(circle, rgba(230, 230, 230, 1) 0%, rgba(211, 211, 211, 0.85) 77%);\r\n\r\n// New one\r\n$nav-cube-background: rgba(12, 60, 146, 0.35);\r\n\r\n\r\n\r\n// 4. Spacings\r\n// ==========================================================================\r\n\r\n\r\n$spaces-map: (\r\n  \"zero\" : 0,\r\n  \"quarter\": $quarter-margin,\r\n  \"half\": $half-margin,\r\n  \"base\" : $base-margin,\r\n  \"double\" : $double-margin,\r\n  \"quad\" : $quad-margin,\r\n  \"sexta\": $sexta-margin,\r\n  \"okta\" : $okto-margin,\r\n  \"dodeca\" : $dodeca-margin,\r\n  \"minus-base\": $-base-margin,\r\n  \"minus-double\": $-double-margin,\r\n  \"minus-quad\": $-quad-margin\r\n);\r\n\r\n$spaces-values: (\r\n  \"m\": (\"margin\"),\r\n  \"m-top\": (\"margin-top\"),\r\n  \"m-right\": (\"margin-right\"),\r\n  \"m-bot\": (\"margin-bottom\"),\r\n  \"m-left\": (\"margin-left\"),\r\n  \"m-hor\": (\"margin-left\", \"margin-right\"),\r\n  \"m-vert\": (\"margin-top\", \"margin-bottom\"),\r\n  \"p\":(\"padding\"),\r\n  \"p-top\": (\"padding-top\"),\r\n  \"p-right\": (\"padding-right\"),\r\n  \"p-bot\": (\"padding-bottom\"),\r\n  \"p-left\": (\"padding-left\"),\r\n  \"p-hor\": (\"padding-left\", \"padding-right\"),\r\n  \"p-vert\": (\"padding-top\", \"padding-bottom\"),\r\n);\r\n\r\n\r\n// 5. Top Navbar\r\n// ==========================================================================\r\n\r\n$topnav_padding: $base-margin;\r\n\r\n$nav_cube_side_width: 1.4rem;\r\n$nav_cube_side_shift: 0.9rem;\r\n$nav_cube_side_shift_2: 1rem;\r\n\r\n\r\n// 6. Blocks\r\n// ==========================================================================\r\n\r\n$block-border-radius: 10px;","\n/**\n * Common Nav styles for mobile and desktop\n * @since 3.0\n * @importance core\n * \n * Table of Contents\n *\n *  1. Containers\n *  2. Logo Image Link\n *\n **/\n\n// 1. TOP NAVBAR CONTAINER LAYOUT ----------------------------------------------------\n\n#wmnav-cont\n  position: fixed\n  z-index: 100\n  top: 0\n\n#wmnav-content\n  width: 100vw\n  height: 100vh\n  max-width: 100vw\n  max-height: 100vh\n  overflow: hidden\n  display: flex\n  flex-flow: column nowrap\n\n#wmnav-bar\n  flex: 0 0 auto\n  width: 100vw\n  max-width: 100vw\n  margin: 0\n  display: flex\n  justify-content: space-between\n  align-items: center\n  border-bottom: 1px solid color(\"gray\", \"base\")\n  background: white\n  position: relative\n  z-index: 1000\n\n// 2. TOP NAVBAR LOGO ----------------------------------------------------\n\n#wmnav-logo\n  width: 100px\n  height: auto\n  margin: $half-margin\n  position: relative\n\n  img\n    width: 100%\n    max-width: 100%\n    height: auto\n","/* \nTABLE OF CONTENTS\n\n  1. Sizes\n  2. Typography\n  3. Colors\n  4. Spacings\n  5. Top Navbar\n\n*/\n/**\n * * Common Nav styles for mobile and desktop\n * * @since 3.0\n * * @importance core\n * * \n * * Table of Contents\n * *\n * *  1. Containers\n * *  2. Logo Image Link\n * *\n * **/\n#wmnav-cont {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n}\n\n#wmnav-content {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n#wmnav-bar {\n  flex: 0 0 auto;\n  width: 100vw;\n  max-width: 100vw;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #BEBEBE;\n  background: white;\n  position: relative;\n  z-index: 1000;\n}\n\n#wmnav-logo {\n  width: 100px;\n  height: auto;\n  margin: calc(0.4rem + 0.25vw);\n  position: relative;\n}\n#wmnav-logo img {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n}\n\n#el-clickable-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(12, 60, 146, 0.35);\n}\n\n#wmnav-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-items: stretch;\n  align-items: baseline;\n  align-content: baseline;\n  z-index: -100;\n  opacity: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n@keyframes navrot {\n  to {\n    transform: rotateY(360deg);\n  }\n}\n.css_block {\n  position: absolute;\n  overflow: hidden !important;\n}\n.css_block a {\n  padding: calc(0.4rem + 0.25vw);\n}\n.css_block.css-gray > div, .css_block.css-gray > a {\n  background: #E6E6E6;\n}\n.css_block.css-gray > div:hover, .css_block.css-gray > a:hover {\n  background: white;\n}\n.css_block.css-white > div, .css_block.css-white > a {\n  background: white;\n}\n.css_block.css-white > div:hover, .css_block.css-white > a:hover {\n  background: white;\n  color: black;\n}\n.css_block.css-gray-lighter > div, .css_block.css-gray-lighter > a {\n  background: #F5F5F5;\n}\n.css_block.css-gray-lighter > div:hover, .css_block.css-gray-lighter > a:hover {\n  background: white;\n}\n.css_block.css-dark-blue > div, .css_block.css-dark-blue > a {\n  background: color(\"gray\", \"darken-2\");\n}\n.css_block.css-color-blue > div, .css_block.css-color-blue > a {\n  color: #87c8ff;\n}\n.css_block.css-color-white > div, .css_block.css-color-white > a {\n  color: color(\"shades\", \"white\") !important;\n}\n.css_block.css-color-white > div h2, .css_block.css-color-white > a h2 {\n  color: color(\"shades\", \"white\") !important;\n}\n.css_block.css-color-dark-gray > div, .css_block.css-color-dark-gray > a {\n  color: color(\"gray\", \"darken-2\");\n}\n\n#csscube-cont {\n  flex-basis: 100%;\n  max-width: 100%;\n  height: 100vh;\n  align-self: baseline;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n}\n#csscube-cont #csscube-scene {\n  z-index: 10;\n  opacity: 0;\n  position: absolute;\n  margin: auto;\n}\n#csscube-cont #csscube-scene #csscube-rotator {\n  transform: rotateX(-7deg);\n  z-index: 10;\n  position: relative;\n  transform-style: preserve-3d;\n  transform-origin: 0% 0% 50%;\n  -moz-transform-origin: 0% 0% 50%;\n  -webkit-transform-origin-z: 50%;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube {\n  transform-style: preserve-3d;\n  position: relative;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h1 {\n  top: 0;\n  left: 0;\n  font-family: \"Exo\";\n  font-weight: light;\n  line-height: 0.8;\n  text-align: left;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube a .ess-anim-icon {\n  stroke: #787878;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube a:hover .ess-anim-icon {\n  stroke: #2d78c8;\n  fill: #f0faff;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h2 {\n  text-align: center;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry h2 {\n  margin-top: 0;\n  padding-bottom: calc(0.8rem + 0.5vw) !important;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry a {\n  align-content: center !important;\n  padding-top: 0 !important;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .cbl-industry a:hover h2 {\n  color: black;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h3 {\n  text-align: center;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube h4 {\n  margin: calc(0.4rem + 0.25vw) 0 calc(0.2rem + 0.15vw) 0 !important;\n  font-weight: normal;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side {\n  background: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  backface-visibility: visible;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block {\n  display: flex;\n  align-items: stretch;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.css-block-header > div:hover {\n  cursor: default;\n  background-color: inherit;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a {\n  align-content: stretch;\n  padding-bottom: calc(0.8rem + 0.5vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a .cc-icon-h {\n  align-self: flex-end;\n  width: 100%;\n  padding: 0 25%;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block.cbl-industry > a h2 {\n  align-self: flex-end;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a {\n  clip-path: polygon(0 0.3rem, 0 calc(100% - 0.3rem), 0.3rem 100%, calc(100% - 0.3rem) 100%, 100% calc(100% - 0.3rem), 100% 0.3rem, calc(100% - 0.3rem) 0, 0.3rem 0);\n  transform-style: preserve-3d;\n  text-decoration: none;\n  color: color(\"gray\", \"darken-2\");\n  flex: 1;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: rel ative;\n  margin: 0.05rem;\n  padding: calc(0.8rem + 0.5vw);\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div:hover, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a:hover {\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 1;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div .icon-image, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a .icon-image {\n  padding: 0 calc(0.4rem + 0.25vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.hover-dark:hover, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.hover-dark:hover {\n  background: color(\"gray\", \"darken-2\");\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.background-image-link img, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.background-image-link img {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > div.background-image-link:hover img, #csscube-cont #csscube-scene #csscube-rotator #csscube .wmcube-side .css_block > a.background-image-link:hover img {\n  opacity: 1;\n}\n#csscube-cont #csscube-scene #csscube-shadow {\n  background: #BEBEBE;\n  opacity: 0.1;\n  filter: blur(30px);\n  z-index: 1;\n  transform-style: preserve-3d;\n}\n#csscube-cont #csscube-scene .csscube-navbutton {\n  position: absolute;\n  cursor: pointer;\n  background: none;\n  z-index: 1000;\n  border: none;\n  top: 40%;\n}\n#csscube-cont #csscube-scene .csscube-navbutton .ess-icon {\n  font-size: calc(5vw + 5vh);\n  transition: color 0.5s ease;\n  color: #14bef0;\n}\n#csscube-cont #csscube-scene .csscube-navbutton.left-button {\n  left: calc(-1.5 * (5vw + 5vh));\n}\n#csscube-cont #csscube-scene .csscube-navbutton.right-button {\n  right: calc(-1.5 * (5vw + 5vh));\n}\n#csscube-cont #csscube-scene .csscube-navbutton:hover .ess-icon {\n  color: #14a0ff;\n}\n\n#x-button,\n#left-button,\n#right-button {\n  width: 70px;\n  height: 70px;\n  background: none;\n  border: none;\n  z-index: 10000;\n  top: 300px;\n  position: fixed;\n}\n#x-button:hover,\n#left-button:hover,\n#right-button:hover {\n  background: black;\n}\n\n#left-button {\n  left: -120px;\n}\n\n#right-button {\n  right: 0px;\n}\n\n#x-button {\n  left: 50%;\n  top: auto;\n  bottom: 0;\n}\n\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block a {\n  flex-direction: column;\n  flex-wrap: nowrap;\n  transition: padding-top 0.2 eas-out;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block a:hover {\n  padding-top: calc(0.4rem + 0.25vw);\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block h3 {\n  margin-top: -0.2em;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block .svg-ess-cube {\n  height: 25%;\n  margin-bottom: 0;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block.main-product-block h3 {\n  font-weight: bold;\n}\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block .main-product-logo {\n  height: 50%;\n  margin-bottom: 0;\n}\n\n#cube-ess-logo {\n  width: 40%;\n  max-width: 250px;\n}\n\n.cfob {\n  position: absolute;\n  height: 100vh;\n  min-width: 20px;\n  top: 0;\n}\n\n.cfob-left {\n  left: 0;\n}\n\n.cfob-right {\n  right: 0;\n}\n\n#wmnav-list {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n#wmnav-list li {\n  padding: 0;\n  margin: 0;\n  font-family: \"Exo\", sans-serif;\n  text-transform: uppercase;\n}\n#wmnav-list li a {\n  display: block;\n  position: relative;\n  padding: calc(0.8rem + 0.5vw) calc(0.8rem + 0.5vw);\n  font-family: \"Exo\", sans-serif;\n  color: #787878;\n  cursor: pointer;\n  text-align: center;\n  transition: background 0.5s ease, color 0.5s ease, border 0.5s ease;\n}\n#wmnav-list li a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -0.2rem;\n  left: 50%;\n  width: 0;\n  height: 0.2rem;\n  background: #14bef0;\n  transition: width 0.5s, left 0.5s;\n}\n#wmnav-list li a:hover {\n  text-decoration: none;\n  color: #4D4D4D;\n}\n#wmnav-list li a.active {\n  color: #2D2D2D;\n}\n#wmnav-list li a.active::after {\n  width: 100%;\n  left: 0;\n}\n\n#wmnav-settings {\n  width: 100px;\n  margin: 0 calc(0.4rem + 0.25vw);\n}","$csscube-h1 : calc(1rem + 1.8vw + 1.8vh + .7vmin);\n$csscube-h2 : calc(0.8rem + 0.5vw + 0.5vh + .3vmin);\n$csscube-h3 : calc(0.6rem + 0.3vw + 0.3vh + .25vmin);\n$csscube-p : calc(.4rem + .2vw + .2vh + .2vmin);\n\n$alpha-active : 0.9;\n$alpha-inactive : 0.1;\n\n\n#el-clickable-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: $nav-cube-background;\n  //opacity: 0.99;\n}\n\n#wmnav-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-items: stretch;\n  align-items: baseline;\n  align-content: baseline;\n  z-index: -100;\n  opacity: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n\n\n}\n\n@keyframes navrot {\n  to {\n    transform: rotateY(360deg)\n  }\n}\n\n.css_block {\n\n  a {\n    padding: $half-margin;\n  }\n\n  &.css-gray>div,\n  &.css-gray>a {\n    background: color(\"gray\", \"lighten-2\");\n\n    &:hover {\n      background: white\n    }\n  }\n\n  &.css-white>div,\n  &.css-white>a {\n    background: white;\n\n    &:hover {\n      background: white;\n      color: black;\n    }\n  }\n\n  &.css-gray-lighter>div,\n  &.css-gray-lighter>a {\n    background: color('gray', 'lighten-4');\n\n    &:hover {\n      background: white;\n    }\n  }\n\n  &.css-dark-blue>div,\n  &.css-dark-blue>a {\n    background: $secondary-color;\n  }\n\n  &.css-color-blue>div,\n  &.css-color-blue>a {\n    color: #87c8ff;\n  }\n\n  &.css-color-white>div,\n  &.css-color-white>a {\n    color: $white !important;\n\n    h2 {\n      color: $white !important;\n    }\n  }\n\n  &.css-color-dark-gray>div,\n  &.css-color-dark-gray>a {\n    color: $primary-text;\n  }\n\n\n  position: absolute;\n  overflow: hidden !important;\n}\n\n#csscube-cont {\n\n  //position: relative;\n  flex-basis: 100%;\n  max-width: 100%;\n  height: 100vh;\n  align-self: baseline;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n\n\n  #csscube-scene {\n    z-index: 10;\n    opacity: 0;\n\n\n    position: absolute;\n    margin: auto; // centers the cube horizontaly;\n\n    #csscube-rotator {\n      transform: rotateX(-7deg);\n      z-index: 10;\n      position: relative;\n      //top: 50%;\n      transform-style: preserve-3d;\n      transform-origin: 0% 0% 50%;\n      -moz-transform-origin: 0% 0% 50%;\n      -webkit-transform-origin-z: 50%;\n\n      #csscube {\n\n        transform-style: preserve-3d;\n\n        position: relative;\n        //top: -300px;\n\n        h1 {\n          top: 0;\n          left: 0;\n          font-family: 'Exo';\n          font-weight: light;\n          line-height: 0.8;\n          text-align: left;\n        }\n\n        a {\n          .ess-anim-icon {\n            stroke: color('gray', 'darken-1')\n          }\n        }\n\n        a:hover {\n          .ess-anim-icon {\n            stroke: color('essblue', 'darken-2');\n            fill: color('essblue', 'lighten-3')\n          }\n\n        }\n\n        h2 {\n          text-align: center;\n          font-weight: normal;\n        }\n\n        .cbl-industry {\n          h2 {\n            margin-top: 0;\n            padding-bottom: $base-margin !important;\n            font-weight: normal;\n          }\n\n          a {\n            align-content: center !important;\n            padding-top: 0 !important\n          }\n\n          a:hover h2 {\n            color: black\n          }\n        }\n\n        h3 {\n          text-align: center;\n        }\n\n        h4 {\n          margin: $half-margin 0 $quarter-margin 0 !important;\n          font-weight: normal\n        }\n\n        .wmcube-side {\n\n          background: transparent;\n          position: absolute;\n          top: 0;\n          left: 0;\n          backface-visibility: visible;\n\n          .css_block {\n            display: flex;\n            align-items: stretch;\n\n            &.css-block-header {\n              &>div {\n\n                &:hover {\n                  cursor: default;\n                  background-color: inherit;\n                }\n              }\n            }\n\n            &.cbl-industry {\n\n              &>a {\n                align-content: stretch;\n                padding-bottom: $base-margin;\n\n                .cc-icon-h {\n                  align-self: flex-end;\n                  width: 100%;\n                  padding: 0 25%;\n\n\n                }\n\n                h2 {\n                  align-self: flex-end;\n                }\n              }\n            }\n\n            &>div,\n            &>a {\n              clip-path: polygon(0 .3rem, 0 calc(100% - .3rem), .3rem 100%, calc(100% - .3rem) 100%, 100% calc(100% - .3rem), 100% .3rem, calc(100% - .3rem) 0, .3rem 0);\n              transform-style: preserve-3d;\n              text-decoration: none;\n              color: $secondary-color;\n              flex: 1;\n              display: flex;\n              align-items: center;\n              align-content: center;\n              justify-content: center;\n              flex-wrap: wrap;\n              position: rel ative;\n              margin: .05rem;\n              padding: $base-margin;\n              overflow: hidden;\n              transition: all .5s ease;\n\n\n              //margin: 4px;\n              &:hover {\n                text-decoration: none;\n                cursor: pointer;\n                //transform: translateY(-.5rem);\n                //scale: 1.1;\n                //background-color: $primary-color;\n                opacity: 1;\n\n              }\n\n              .icon-image {\n                padding: 0 $half-margin;\n              }\n\n              &.hover-dark:hover {\n                background: $secondary-color;\n              }\n\n              &.background-image-link {\n                img {\n                  position: absolute;\n                  top: 0;\n                  opacity: 0;\n                  transition: opacity .5s ease;\n                }\n\n                &:hover img {\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    #csscube-shadow {\n      background: color(\"gray\", \"base\");\n      opacity: 0.1;\n      filter: blur(30px);\n      z-index: 1;\n      transform-style: preserve-3d;\n    }\n\n    .csscube-navbutton {\n      position: absolute;\n      cursor: pointer;\n      background: none;\n      z-index: 1000;\n      border: none;\n      top: calc(40%);\n\n      .ess-icon {\n        font-size: calc(5vw + 5vh);\n        transition: color .5s ease;\n        color: color('essblue', 'base');\n\n      }\n\n      &.left-button {\n        left: calc(-1.5*(5vw + 5vh));\n      }\n\n      &.right-button {\n        right: calc(-1.5*(5vw + 5vh));\n      }\n\n      &:hover {\n        .ess-icon {\n          color: color('essblue', 'darken-1');\n        }\n      }\n\n    }\n  }\n}\n\n\n#x-button,\n#left-button,\n#right-button {\n  width: 70px;\n  height: 70px;\n  background: none;\n  border: none;\n  z-index: 10000;\n\n  &:hover {\n    background: black;\n  }\n\n  top: 300px;\n  position: fixed;\n}\n\n#left-button {\n  left: -120px;\n}\n\n#right-button {\n  right: 0px;\n}\n\n#x-button {\n  left: 50%;\n  top: auto;\n  bottom: 0;\n}\n\n// CSS ESS CUBE - Small logos inside Product panels of the Cube\n\n#csscube-cont #csscube-scene #csscube-rotator #csscube #csscube-back .product-block {\n  a {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    transition: padding-top .2 eas-out;\n\n    &:hover {\n      padding-top: $half-margin;\n    }\n  }\n\n  h3 {\n    margin-top: -.2em;\n  }\n\n  .svg-ess-cube {\n    height: 25%;\n    margin-bottom: 0;\n  }\n\n  &.main-product-block {\n    h3 {\n      font-weight: bold;\n    }\n\n  }\n\n  .main-product-logo {\n    height: 50%;\n    margin-bottom: 0;\n  }\n}\n\n\n#cube-ess-logo {\n  width: 40%;\n  max-width: 250px;\n}\n\n.cfob {\n  position: absolute;\n  height: 100vh;\n  //background: red;\n  min-width: 20px;\n  top: 0;\n}\n\n.cfob-left {\n  left: 0;\n}\n\n.cfob-right {\n  right: 0;\n}\n\n\n@media only screen and (min-width: $medium-screen) {}","#wmnav-list\n  display: flex\n  justify-content: center\n  margin: 0\n  padding: 0\n\n  li\n    padding: 0\n    margin: 0\n    font-family: $headline-font\n    text-transform: uppercase\n\n    a\n      display: block\n      position: relative\n      padding: $topnav_padding $base-margin\n      font-family: $headline-font\n      color: color('gray', 'darken-1')\n      cursor: pointer\n      text-align: center\n      transition: background .5s ease, color .5s ease, border .5s ease\n\n      &::after\n        content: ''\n        display: block\n        position: absolute\n        bottom: -0.2rem\n        left: 50%\n        width: 0\n        height: .2rem\n        background: color('essblue', 'base')\n        transition: width 0.5s, left 0.5s\n\n      &:hover\n        text-decoration: none\n        color: color(\"gray\", \"darken-2\")\n\n      &.active\n        color: color(\"gray\", \"darken-3\")\n\n        &::after\n          width: 100%\n          left: 0\n\n\n#wmnav-settings\n  width: 100px\n  margin: 0 $half-margin\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/nav/components/csscube.js":
/*!***************************************!*\
  !*** ./src/nav/components/csscube.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CessCube)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/* eslint-disable no-undef */
/**
 * CessCube
 * Activates functionality of the navigation cube and connects it with the top bar navigation.
 * 
 * @TODO: The whole cube needs to be rewritten in React to synchronize better 
 * with the rest of the navigation
 **/
var CessCube = /*#__PURE__*/function () {
  /**
   * Initiates all variables needed throughout the Cubes life cycle.
   * @since 1.0
   * @return void
   */
  function CessCube() {
    _classCallCheck(this, CessCube);
    this.toplinks_arr = this.init_navbar();
    this.initial_rotation = 10;
    this.el_canvas = document.querySelector('#wmnav-content');
    this.el_cont = this.el_canvas.querySelector('#csscube-cont');
    this.tweeen = 'power2.out';
    this.tween_length = 0.8;
    this.isonscreen = false; // whether the cube is already initated and rendered
    this.isOnStage = false; // whether the cube is on stage.
    this.unit_space_ratio = 5; // 1/x of unit to calculate the space between sides of the cube
    this.units_total = 19; // total amount of units
    this.units_space = 2; // no clue
    this.units_cube = 12; // total amount of CUBE units
    this.units_cube_w = 12; // number of units in horizontal direction
    this.units_cube_h = 15; // number of units in vertical direction. The number is a bit higher than horizontal because of the headlines on top of each side
    this.units_space = (this.units_total - this.units_cube) / 2; // space for margin

    //array of coord system within cube (max ) 30
    this.names_array = ['o', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx', 'xxi', 'xxii', 'xxiii', 'xxiv', 'xxv', 'xxvi', 'xxvii', 'xxviii', 'xxix', 'xxx'];

    //create a new Style Sheet
    this.Cube_Style_Sheet = document.createElement('style');
    document.body.appendChild(this.Cube_Style_Sheet);
    this._y = 0;
    this._x = 0;

    // Registers the cube into MindGlobal object for global refference ( currently used by
    // listener for closing the cube with escape )
    if (window.MindGlobal) window.MindGlobal.CubeInst = this;
  }

  /**
   * Starts the cube. Is called from the caller. No clue why this is a special
   * function to be called since it seeems obvious that it can only have constructor.
   * All methods are casted internally and there is almost no reason to instantiate it.
   *   
   * @return void
   * @since 1.0
   */
  _createClass(CessCube, [{
    key: "init",
    value: function init() {
      var _this = this;
      /*
                                    -= CUBE STRUCTURE =-               
          
          |- #csscube-cont........................Wrapper to show up and fade out
          |   - #csscube-scene....................Container in which the cube is drawn
          |       - #csscube-rotator..............Support object for perspective and such
          |           - #csscube..................Main object amongst which most of the actions take place.
          |               - #csscube-front
          |               - #csscube-right
          |               - #csscube-back
          |               - #csscube-left
          */

      this.tl = gsap.timeline({});
      this.main_container = document.getElementById('ess-main-container'); // container of the entire content except the cube - used for blur

      this.el_cubescene = this.el_cont.querySelector('#csscube-scene');
      this.cube_rotator_el = this.el_cubescene.querySelector('#csscube-rotator');
      this.cube_el = this.cube_rotator_el.querySelector('#csscube');
      this.cube_shadow_el = this.el_cubescene.querySelector('#csscube-shadow');
      this.front_side_el = this.cube_el.querySelector('#csscube-front');
      this.right_side_el = this.cube_el.querySelector('#csscube-right');
      this.back_side_el = this.cube_el.querySelector('#csscube-back');
      this.left_side_el = this.cube_el.querySelector('#csscube-left');
      this.bottom_side_el = this.cube_el.querySelector('#csscube-bottom');
      this.front_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.r_b = this.el_cubescene.querySelector('.right-button');
      this.l_b = this.el_cubescene.querySelector('.left-button');
      //this.x_b = document.getElementById('x-button');

      this.elCanvasClickable();
      window.addEventListener('resize', this.setup_cube.bind(this), true);
      this.r_b.addEventListener('click', function () {
        _this._rotate_right();
      });
      this.l_b.addEventListener('click', function () {
        _this._rotate_left();
      });
      this.r_b.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.r_b.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      this.l_b.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.l_b.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      this.cube_el.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.cube_el.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      if (!this.cube_el) throw 'cube_element not found';
      this.init_subscribe_modal();
      this.init_navbar();
      this.fadeOutblocks = this.init_sideFadeOutBlocks();
    }

    /**
     * Loops. the links and asigns them with cube sides
     * 
     * @since 3.0
     * @return Array Associative array with Cube side names (front, left, etc) as keys and HtmlLinkElements as values
     */
  }, {
    key: "init_navbar",
    value: function init_navbar() {
      var _this2 = this;
      var navbarLinks = document.querySelectorAll('.wm-cube-menu-link');
      var linksArr = [];
      var _loop = function _loop(i) {
        var link = navbarLinks[i];
        var linkCubeSide = link.getAttribute('data-target');
        linksArr[linkCubeSide] = link;
        if (link.classList.contains('active')) _this2.active_link = link;
        navbarLinks[i].addEventListener('mouseover', function (e) {
          e.preventDefault;

          // Re-enable scrolling
          document.body.style.overflow = 'hidden';
          if (_this2.active_link !== undefined && _this2.active_link !== e.target) {
            _this2.active_link.classList.remove('active');
            _this2.active_link = e.target;
          }
          _this2._position_cube(linkCubeSide);
        });
      };
      for (var i = 0; i < navbarLinks.length; ++i) {
        _loop(i);
      }
      return linksArr;
    }

    /**
     * Inits sideFedeOutBlocks
     * @return Array<HTMLDivElement> - Left and Right fadeOutBlocks
     * @since 3.0
     */
  }, {
    key: "init_sideFadeOutBlocks",
    value: function init_sideFadeOutBlocks() {
      var leftFadeOutBlock = document.createElement('div');
      leftFadeOutBlock.classList.add('cfob', 'cfob-left');
      leftFadeOutBlock.addEventListener('mouseover', this.fadeOutBlockHover);
      this.el_canvas.appendChild(leftFadeOutBlock);
      var rightFadeOutBlock = document.createElement('div');
      rightFadeOutBlock.classList.add('cfob', 'cfob-right');
      rightFadeOutBlock.addEventListener('mouseover', this.fadeOutBlockHover);
      this.el_canvas.appendChild(rightFadeOutBlock);
      return [leftFadeOutBlock, rightFadeOutBlock];
    }

    /**
     * Removes Cube when fadeOutBlock is hovered
     * @return void
     * @since 3.0
     */
  }, {
    key: "fadeOutBlockHover",
    value: function fadeOutBlockHover() {
      console.log('fadeoufadoutfadout');
      window.MindGlobal.CubeInst.fadeOut();
    }

    /**
     * Sets the sizes of the cube and its content can run during resize event as well
     * 
     * @return void
     * @since 1.0
     **/
  }, {
    key: "setup_cube",
    value: function setup_cube() {
      var unit_w = 40; // 40 - initial value is about to change soon
      var unit_h = 40;
      var ww = window.innerWidth; // three quarters of the window to draw the cube
      var wh = window.innerHeight;
      var BigHeader = '';
      var SmHeader = '';
      var TinyHeader = '';
      var SmallestHeader = '';
      var ratio = ww / wh;

      // if is landscape one unit is calculated from height otherwise unit height is taken from width of the screen

      if (ratio >= 1) {
        // IS LANDSCAPE  

        ww = ww * 0.6;
        wh = wh * 0.6;
        if (wh > 900) wh = 900;
        unit_w = wh / this.units_cube_w;
        unit_h = wh / this.units_cube_h;
        BigHeader = ' ' + unit_w / 1.4 + 'px !important;';
        SmHeader = ' ' + unit_w / 2.4 + 'px !important;';
        TinyHeader = ' ' + unit_w / 3 + 'px !important;';
        SmallestHeader = ' ' + unit_w / 4 + 'px !important;';
      } else {
        // IS PORTRAIT 

        ww *= 0.85;
        wh *= 0.85;
        if (window.vw > 500) window.vw = 500;
        unit_w = ww / this.units_cube_w;
        unit_h = ww / this.units_cube_h;
        BigHeader = ' ' + unit_w / 1.4 + 'px !important;';
        SmHeader = ' ' + unit_w / 2.4 + 'px !important;';
        TinyHeader = ' ' + unit_w / 3 + 'px !important;';
        SmallestHeader = ' ' + unit_w / 4 + 'px !important;';
      }

      // reset the sheet

      this.Cube_Style_Sheet.innerHTML = '';
      this.cube_width = this.units_cube_w * unit_w;
      this.cube_height = this.units_cube_h * unit_h;
      this.cube_w_shift = this.cube_width / 2; // + maybe unit/this.unit_space_ratio for gap between sides;
      this.cube_h_shift = this.cube_height / 2;
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h1 {font-size: ' + BigHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h2 {font-size: ' + SmHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h3 {font-size: ' + TinyHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h4 {font-size: ' + SmallestHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene{width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; perspective: ' + this.cube_width * 5 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-rotator{top: ' + this.cube_height / 2 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube{top: -' + this.cube_height / 2 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-front  {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-left   {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(-90deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-right  {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(90deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-back   {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(-180deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-top    {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(90deg) translateZ(' + this.cube_h_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-bottom {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(-90deg) translateZ(' + this.cube_h_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-shadow {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(-85deg) translateZ(' + this.cube_h_shift * 1.2 + 'px) ;}';
      for (var i = 0; i < this.units_cube_h; i++) {
        this.Cube_Style_Sheet.innerHTML += '.x_' + this.names_array[i] + '{left:' + unit_w * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.y_' + this.names_array[i] + '{top:' + unit_h * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.w_' + this.names_array[i] + '{width:' + unit_w * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.h_' + this.names_array[i] + '{height:' + unit_h * i + 'px;}';
      }
      if (!this.isonscreen) {
        this._x = 90;
        gsap.to(document.getElementById('csscube-scene'), {
          duration: 0.5,
          opacity: 1
        });
        this.isonscreen = true;
      }

      // Sets the width of fadeOutBlocks on sides (can't be less than 50px)
      var bw = (window.innerWidth - this.cube_width) / 2 - 220;
      bw = Math.max(bw, 50);
      this.fadeOutblocks.map(function (block) {
        block.style.width = bw + 'px';
      });
    }
  }, {
    key: "_rotate_right",
    value: function _rotate_right() {
      // ROTATING LEFT SHOWING RIGHT SIDE OF THE CUBE

      if (this._y == 0) this._y = 359.99;
      if (this._y < 360 && this._y > 270) {
        if (this._x > 0 + this.initial_rotation) {
          // bottom side towards RIGHT
          this._position_cube('right');
        } else {
          // Front  side towards BOTTOM
          this._position_cube('bottom');
        }
      } else if (this._y <= 90 || this._y > 360) {
        // Left   side towards FRONT
        this._position_cube('front');
      } else if (this._y <= 180) {
        // back   side towards LEFT
        this._position_cube('left');
      } else if (this._y <= 270) {
        // right  side towards BACK
        this._position_cube('back');
      }
    }
  }, {
    key: "_position_cube",
    value: function _position_cube(str_target) {
      var _this3 = this;
      if (false === this.isOnStage) {
        this.fadeIn();
      }
      var el;
      var new_x;
      var new_y;
      if (this.active_link !== undefined) this.active_link.classList.remove('active');
      this.toplinks_arr[str_target].classList.add('active');
      this.active_link = this.toplinks_arr[str_target];
      switch (str_target) {
        case 'bottom':
          if (this._y > 180) this._y = this._y - 359.99;
          new_x = 90;
          new_y = 0;
          el = this.bottom_side_el;
          break;
        case 'front':
          if (this._y > 180) this._y = this._y - 359.99;
          new_x = 0;
          new_y = 0;
          el = this.front_side_el;
          break;
        case 'right':
          if (this._y >= -180 && this._y < 90) this._y = this._y + 359.99;
          new_x = 0;
          new_y = 270;
          el = this.right_side_el;
          break;
        case 'left':
          if (this._y > 270) this._y = this._y + 359.99;
          new_x = 0;
          new_y = 90;
          el = this.left_side_el;
          break;
        case 'back':
          if (this._y >= 360) this._y = this._y - 359.99;
          new_x = 0;
          new_y = 180;
          el = this.back_side_el;
          break;
        default:
          new_x = 90;
          new_y = 0;
          el = this.bottom_side_el;
      }
      if (this.active_el != el) {
        this.leaving_el = this.active_el;
        this.arriving_el = el;
        new_x += this.initial_rotation;
        gsap.to(this.leaving_el, {
          duration: this.tween_length,
          ease: this.tweeen,
          opacity: 0.1
        });
        gsap.to(this.arriving_el, {
          duration: this.tween_length,
          ease: this.tweeen,
          opacity: 1
        });
        this.active_el = this.arriving_el;
        if (this.g) this.g.pause();
        this.g = gsap.to(this, {
          duration: this.tween_length,
          ease: this.tweeen,
          _y: new_y,
          _x: new_x,
          onUpdate: function onUpdate() {
            _this3.cube_el.style.transform = ' rotatey(' + _this3._y + 'deg)';
            _this3.cube_rotator_el.style.transform = ' rotatex(' + _this3._x + 'deg)';
            _this3.cube_shadow_el.style.transform = ' rotatex(-85deg) rotatez(' + _this3._y + 'deg) translatez(' + _this3.cube_h_shift * 1.4 + 'px)';
          }
        });
      }
    }
  }, {
    key: "_rotate_left",
    value: function _rotate_left() {
      /*if(this._y == 0)
          this._y = 359.99;*/

      if (this._y >= 0 && this._y < 90) {
        if (this._x > 0 + this.initial_rotation) {
          // bottom side towards FRONT
          this._position_cube('front');
        } else {
          // Front  side towards LEFT
          this._position_cube('left');
        }
      } else if (this._y >= 90 && this._y < 180) {
        // Left   side towards BACK
        this._position_cube('back');
      } else if (this._y >= 180 && this._y < 270) {
        // back   side towards RIGHT
        this._position_cube('right');
      } else if (this._y >= 270) {
        // right  side towards BOTTOM
        this._position_cube('bottom');
      }
    }
  }, {
    key: "intro",
    value: function intro() {
      var _this4 = this;
      var intro_length = 1;
      this.el_canvas.style.zIndex = '1';
      gsap.set(this.el_cubescene, {
        css: {
          scaleX: 0.3,
          scaleY: 0.3
        }
      });
      this.front_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.bottom_side_el.style.opacity = '0.1';
      this.active_el = this.bottom_side_el;
      this.front_side_el.style.opacity = '1';
      this.back_side_el.style.opacity = '1';
      this.right_side_el.style.opacity = '1';
      this.left_side_el.style.opacity = '1';
      this.bottom_side_el.style.opacity = '1';
      gsap.to(this.front_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.right_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.back_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.left_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.el_cubescene, {
        duration: intro_length,
        ease: 'power2.out',
        css: {
          scaleX: 1,
          scaleY: 1
        }
      });
      gsap.to(this.el_canvas, {
        duration: intro_length,
        ease: 'power2.out',
        css: {
          opacity: 1
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      this._x = 135;
      this._y = 0;
      gsap.set(this.cube_rotator_el, {
        css: {
          rotateX: this._x
        }
      });
      gsap.set(this.cube_el, {
        css: {
          rotateY: this._y
        }
      });
      var new_x = 90 + this.initial_rotation;
      var new_y = 0;
      if (this.g) this.g.pause();
      this.g = gsap.to(this, {
        duration: intro_length,
        ease: this.tweeen,
        _y: new_y,
        _x: new_x,
        onUpdate: function onUpdate() {
          gsap.set(_this4.cube_el, {
            rotateY: _this4._y
          });
          gsap.set(_this4.cube_rotator_el, {
            rotateX: _this4._x
          });
        }
      });
    }
  }, {
    key: "outro",
    value: function outro(callback_func) {
      var _this5 = this;
      gsap.to(this.el_cubescene, {
        duration: 1,
        ease: 'power2.out',
        css: {
          scaleX: 0.3,
          scaleY: 0.3
        }
      });
      gsap.to(this.el_canvas, {
        duration: 1,
        ease: 'power2.out',
        css: {
          opacity: 0
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      if (this.g) this.g.pause();
      this.front_side_el.style.opacity = '0.9';
      this.back_side_el.style.opacity = '0.9';
      this.right_side_el.style.opacity = '0.9';
      this.left_side_el.style.opacity = '0.9';
      this.bottom_side_el.style.opacity = '0.9';
      var new_x = 0;
      var new_y = this._y + 360;
      this.g = gsap.to(this, {
        duration: 1,
        ease: this.tweeen,
        _y: new_y,
        _x: new_x,
        onUpdate: function onUpdate() {
          gsap.set(_this5.cube_el, {
            rotateY: _this5._y
          });
          gsap.set(_this5.cube_rotator_el, {
            rotateX: _this5._x
          });
        },
        onComplete: function onComplete() {
          if (callback_func !== 'undefined') callback_func();
        }
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      this.isOnStage = true;
      if (typeof InstallTrigger == 'undefined') this.main_container.classList.add('ess-blured-content');
      this.el_canvas.style.display = 'flex';
      this.front_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.bottom_side_el.style.opacity = '0.1';
      gsap.set(this.el_cubescene, {
        css: {
          scaleX: 0.5,
          scaleY: 0.5
        }
      });
      this.active_el = this.front_side_el;
      gsap.to(this.el_cubescene, {
        duration: 0.5,
        ease: 'power2.out',
        css: {
          scaleX: 1,
          scaleY: 1
        }
      });
      gsap.to(this.el_canvas, {
        duration: 0.5,
        ease: 'power2.out',
        css: {
          opacity: 1
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      this._x = 135;
      this._y = 45;
      gsap.set(this.cube_el, {
        rotateY: this._y
      });
      gsap.set(this.cube_rotator_el, {
        rotateX: this._x
      });
      this._position_cube('bottom');
      window.addEventListener('keydown', this.cubeKeyPressed, true);
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this6 = this;
      // Re-enable scrolling on body when cube disapears.
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', this.cubeKeyPressed, true);
      this.isOnStage = false;
      console.log('fading out');
      var tiny = document.querySelector('.ess-tiny-header');
      if (tiny) tiny.querySelector('h1').classList.remove('opacity-o');
      if (typeof InstallTrigger == 'undefined') this.main_container.classList.remove('ess-blured-content');
      if (this.active_el) {
        gsap.to(this.active_el, {
          duration: 0.3,
          ease: 'power1.out',
          opacity: 0.1
        });
      }
      gsap.to(this.el_cubescene, {
        duration: 0.5,
        ease: 'power1.out',
        css: {
          scaleX: 0.5,
          scaleY: 0.5
        }
      });
      this.g = gsap.to(this, {
        duration: 0.5,
        ease: 'power1.out',
        _x: 135,
        _y: this._y + 45,
        onUpdate: function onUpdate() {
          gsap.set(_this6.cube_el, {
            rotateY: _this6._y
          });
          gsap.set(_this6.cube_rotator_el, {
            rotateX: _this6._x
          });
        }
      });
      gsap.to(this.el_canvas, {
        duration: 0.5,
        ease: 'power1.out',
        css: {
          opacity: 0
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
          _this6.el_canvas.style.display = 'none';
        }
      });
      this.active_link.classList.remove('active');
    }

    /**
     * Checks keypressed while the Cube is ON.
     * @param {*} e Event object with window as currentTarget
     */
  }, {
    key: "cubeKeyPressed",
    value: function cubeKeyPressed(e) {
      switch (e.key) {
        case 'ArrowLeft':
          e.currentTarget.MindGlobal.CubeInst._rotate_left();
          break;
        case 'ArrowRight':
          e.currentTarget.MindGlobal.CubeInst._rotate_right();
          break;
        case 'Escape':
          e.currentTarget.MindGlobal.CubeInst.fadeOut();
          break;
      }
    }

    /**
     * Creates the clickable background div and sets up its behaviour
     * @since 1.0
     * @return void
     */
  }, {
    key: "elCanvasClickable",
    value: function elCanvasClickable() {
      var _this7 = this;
      this.el_clickable_background = document.createElement('div');
      this.el_clickable_background.setAttribute('id', 'el-clickable-background');
      this.el_clickable_background.addEventListener('click', function () {
        //Disapear
        _this7.fadeOut();
      });
      this.el_cont.appendChild(this.el_clickable_background);
    }
  }, {
    key: "init_subscribe_modal",
    value: function init_subscribe_modal() {
      var subscribe_button = this.cube_el.querySelector('#cube_subscribe_button');
      if (subscribe_button) {
        subscribe_button.addEventListener('click', function () {
          console.log('subscribe here');
        });
      }
    }
  }]);
  return CessCube;
}();


/***/ }),

/***/ "./src/nav/sass/desktop_nav.sass":
/*!***************************************!*\
  !*** ./src/nav/sass/desktop_nav.sass ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./desktop_nav.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/desktop_nav.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "./src/components/icons.tsx":
/*!**********************************!*\
  !*** ./src/components/icons.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconAutomotive": () => (/* binding */ IconAutomotive),
/* harmony export */   "IconCube": () => (/* binding */ IconCube),
/* harmony export */   "IconEnvironment": () => (/* binding */ IconEnvironment),
/* harmony export */   "IconOilGas": () => (/* binding */ IconOilGas),
/* harmony export */   "IconProcessing": () => (/* binding */ IconProcessing),
/* harmony export */   "WmnavBackArrow": () => (/* binding */ WmnavBackArrow),
/* harmony export */   "WmnavForwardArrow": () => (/* binding */ WmnavForwardArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WmnavBackArrow = ({ className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: 'wmnav-back-arrow-svg', version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 120 50" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { id: "Line_13", className: className, x1: "115.5", y1: "25", x2: "4.5", y2: "25" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: className, points: "23.9,44.4 4.5,25 23.9,5.6 " })));
};
const WmnavForwardArrow = ({ className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 120 50" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", { type: "text/css" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: className, points: "98.9,8 116.7,25.8 98.9,43.5 " }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { className: className, x1: "116.7", y1: "25.8", x2: "0", y2: "25.8" })));
};
const IconAutomotive = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { id: "auto_bkg", className: "ess-anim-icon", points: "211.5,215.9 48.1,215.9 28,174.1 231.6,174.1 " }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { id: "ipict_auto_body", className: "ess-anim-icon", d: "M200.4,126.2c-1-1.1-0.7-2.5-0.5-4.1c0.1-1.6,0.3-2.2,1.7-3.2c1.4-1.1,2.5-2.1,1.3-4\n  c-0.7-1.1-3.2-5.9-28.2-14.5c-10.4-3.6-12.7-4.5-17.6-15c-2.6-5.7-6.7-15.3-20.8-19.9c-5.6-1.7-8.8-2.7-18.1-5.3s-14-4.1-23.9-3.4\n  c-9.9,0.8-32.9,8.4-32.9,8.4c-3.2,1-0.6,3.1,0.1,4.2s0.5,0.7,0.2,2c-0.3,1.3-3.7,10-4.8,13c-1.1,3-0.7,3.4,0.8,5.3\n  c1.5,1.9,5.3,4.3,9.1,5.6c3.9,1.3,4,0,5.8-2.9c1.8-3,8.1-10,15.8-7.5c9.5,3.1,9.1,11.5,9.5,15.2c0.6,6.2,3.8,6.5,6.4,7.4\n  c2.7,0.9,47.1,15.2,50.7,16.4c3.7,1.2,3.6,0.8,5.4-2.3c1.8-3.1,7.2-10.6,17-7.5c9.8,3.2,9.3,10.9,9.7,16.6c0.4,5.7,3.7,5.3,8.2,6.5\n  c4.5,1.2,6-3.3,6.8-5.7C202.9,128.9,201.3,127.3,200.4,126.2z M118.9,78.9c-12.7-4.1-25.1-8.2-37.5-12.2c7.8-4.6,27-4.1,41.1,1.3\n  C121.2,71.8,120.1,75.1,118.9,78.9z M123.3,80.3l3.6-10.9c0,0,4.6,1.4,5.2,1.6c11.6,3.8,13.7,8.8,15.4,11.3c1.7,2.5,4.3,7.3,4.3,7.3\n  L123.3,80.3z" })));
};
const IconEnvironment = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_wind_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "132,233.3 118,233.3 121.4,107.3 128.6,107.3 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "138.4,244.1 111.6,244.1 111.6,233.3 138.4,233.3 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M132.8,107.3h-15.7c-1.6,0-2.8-1.3-2.8-2.8V88.7c0-1.6,1.3-2.8,2.8-2.8h15.7c1.6,0,2.8,1.3,2.8,2.8v15.7\n    C135.7,106,134.4,107.3,132.8,107.3z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "96.6", r: "6.4" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "96.6", r: "2.8" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_wind_body" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "127.5,90.8 127.5,80.7 122.5,80.7 122.5,90.8 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M127.2,8.2h-4.4L120,79.5c0,0-0.3,2.2,5,2.2c5.3,0,5-2.2,5-2.2L127.2,8.2z" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "128.8,101.7 137.5,106.7 140,102.4 131.3,97.3 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M200.5,142.8l2.2-3.8l-60.4-38.1c0,0-1.7-1.3-4.4,3.2s-0.7,5.5-0.7,5.5L200.5,142.8z" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "118.6,97.4 110,102.4 112.5,106.8 121.2,101.7 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M47.3,138.9l2.2,3.8l63.2-33.3c0,0,2-0.8-0.6-5.4c-2.6-4.6-4.4-3.3-4.4-3.3L47.3,138.9z" })))));
};
const IconOilGas = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "127.9,102.6 166,202.2 158.5,202.2 122.5,105 \t\t" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M83.3,202.2l-8.8-32.8c0,0-2.8-11.5-12.8-11.5c-12.6,0-12.6,11.5-12.6,11.5v32.8v13.7H87h87.3v-13.7H83.3z" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "122.3,105 80.4,191.2 77.9,181.8 116.6,102.4 \t\t\t" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "122.5", cy: "97.7", r: "7.3" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { className: "ess-anim-icon", x1: "83.3", y1: "202.2", x2: "49.2", y2: "202.2" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_body_1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "173.3,49.9 52.6,113.7 53.9,124.9 179.3,58.7 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M169.9,21.4l-7.9,4.2c0,0,7,13.9,11.2,24.4l26.2,37.7c0,0,1.2-0.3,6.3,0.6C205.3,45.4,169.9,21.4,169.9,21.4z" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_body_2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M58.6,170.1c0,0,0-2.7,2.6-2.7s2.6,2.7,2.6,2.7v32.4h-5.1V170.1z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M45.7,202.5h30.9c0,0,0,2.3,0,4.5c-4.2,3-9.6,4.8-15.5,4.8c-5.8,0-11.2-1.8-15.4-4.7\n    C45.7,204.7,45.7,202.5,45.7,202.5z" }))));
};
const IconProcessing = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", id: "mill_new", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M156.7,170.4l16.9,33.2H76.4l16.9-33.2 M105.7,176.6l-6.7,14.1h51.8l-6.7-14.1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "77.2,203.6 77.1,216.9 172.9,216.9 172.8,203.6 " })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_body_2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M90.6,71.1l4.1,7.1l7.1-4.1L97.7,67L90.6,71.1z M90.6,173.9l7.1,4.1l4.1-7.1l-7.1-4.1L90.6,173.9z M69.5,149.8\n    l4.1,7.1l7.1-4.1l-4.1-7.1L69.5,149.8z M180.5,95.2l-4.1-7.1l-7.1,4.1l4.1,7.1L180.5,95.2z M71.5,119h-8.2v8.2h8.2V119z M69.5,95.2\n    l7.1,4.1l4.1-7.1l-7.1-4.1L69.5,95.2z M169.3,152.8l7.1,4.1l4.1-7.1l-7.1-4.1L169.3,152.8z M178.5,119v8.2h8.2V119H178.5z\n     M148.2,74.1l7.1,4.1l4.1-7.1l-7.1-4.1L148.2,74.1z M148.2,170.9l4.1,7.1l7.1-4.1l-4.1-7.1L148.2,170.9z M120.9,184.2h8.2v-8.2\n    h-8.2V184.2z M120.9,69h8.2v-8.2h-8.2V69z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", { transform: "matrix(0.2298 -0.9732 0.9732 0.2298 -22.9745 216.037)", className: "st4", cx: "125", cy: "122.5", rx: "48.9", ry: "48.9" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M178.5,119h3.4c-0.5-7.6-2.4-14.9-5.6-21.4l-3,1.7l-4.1-7.1l3-1.7c-4.1-6-9.3-11.2-15.3-15.3l-1.7,3l-7.1-4.1\n    l1.7-3c-6.4-3.1-13.4-5-20.9-5.6V69h-8.2v-3.4c-7.4,0.5-14.5,2.5-20.9,5.6l1.7,3l-7.1,4.1l-1.7-3c-6,4.1-11.2,9.3-15.3,15.3l3,1.7\n    l-4.1,7.1l-3-1.7c-3.2,6.5-5.1,13.8-5.6,21.4h3.4v8.2h-3.4c0.6,7.2,2.5,14.1,5.5,20.3l3-1.7l4.1,7.1l-3,1.7\n    c4.1,6,9.3,11.2,15.3,15.3l1.7-3l7.1,4.1l-1.7,3c6.4,3.1,13.4,5,20.9,5.6v-3.4h8.2v3.4c7.4-0.5,14.5-2.5,20.9-5.6l-1.7-3l7.1-4.1\n    l1.7,3c6-4.1,11.2-9.3,15.3-15.3l-3-1.7l4.1-7.1l3,1.7c3-6.2,4.9-13.1,5.5-20.3h-3.4V119z M125,171.4c-27,0-48.9-21.9-48.9-48.9\n    c0-27,21.9-48.9,48.9-48.9c27,0,48.9,21.9,48.9,48.9C173.9,149.5,152,171.4,125,171.4z" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_body_1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M125,73.7c-27,0-48.9,21.9-48.9,48.9c0,27,21.9,48.9,48.9,48.9s48.9-21.9,48.9-48.9\n    C173.9,95.6,152,73.7,125,73.7z M159.9,98.4c1.6-0.9,3.7-0.4,4.7,1.3c0.9,1.6,0.4,3.7-1.3,4.7c-1.6,0.9-3.7,0.4-4.7-1.3\n    C157.6,101.5,158.2,99.4,159.9,98.4z M79.3,123.1c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4\n    C80.9,126.5,79.3,125,79.3,123.1z M90.1,146.6c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C92.4,143.6,91.8,145.7,90.1,146.6z M91.4,103.1c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C91.8,99.4,92.4,101.5,91.4,103.1z M106.9,160.8c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C107.2,157.1,107.8,159.2,106.9,160.8z M105.6,88.9c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C107.8,85.9,107.2,88,105.6,88.9z M125,168.2c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4\n    C128.4,166.7,126.9,168.2,125,168.2z M125,83.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4\n    C128.4,82.2,126.9,83.7,125,83.7z M147.8,162.1c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C150,159,149.5,161.1,147.8,162.1z M149.1,87.7c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C149.5,83.9,150,86,149.1,87.7z M164.5,145.4c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C164.9,141.6,165.5,143.7,164.5,145.4z M167.2,126.5c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4\n    C170.7,125,169.1,126.5,167.2,126.5z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "122.5", r: "25.9" }))));
};
const IconCube = ({ topColor, leftColor, rightColor }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { version: "1.1", className: "svg-ess-cube", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 500 500", xmlSpace: "preserve" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: topColor }, points: "489.7,223.1 381.5,35.6 165.1,35.6 273.3,223.1 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: leftColor }, points: "225.4,247.7 118.5,62.6 10.3,250 118.5,437.4 226.7,250 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: rightColor }, points: "165.1,464.4 381.5,464.4 489.7,276.9 273.3,276.9 \t" }))));
};


/***/ }),

/***/ "./src/helpers/wm-fetch.ts":
/*!*********************************!*\
  !*** ./src/helpers/wm-fetch.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wmFetch": () => (/* binding */ wmFetch)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const wmFetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const rest = yield fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    return rest.json();
});


/***/ }),

/***/ "./src/nav/components/cube-sides/back-products.tsx":
/*!*********************************************************!*\
  !*** ./src/nav/components/cube-sides/back-products.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icons */ "./src/components/icons.tsx");


const BackProducts = ({ homeUrl, templateUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-back", className: 'wmcube-side' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block css-block-header w_xii h_ii x_o y_o" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "OUR SOLUTIONS"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iii h_v x_o y_ii css-white product-block main-product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-cloud` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_cloud.svg` }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "CLOUD"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_v x_iii y_ii css-white product-block main-product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-platform` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_platform.svg` }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "PLATFORM"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iii h_v x_ix y_ii css-white product-block main-product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-services` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_services.svg` }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "SERVICES"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-paintshop", className: "css_block w_iv h_iv x_o y_vii css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-paintshop` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#9b64aa", leftColor: '#895aa4', rightColor: '#5b266c' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Paint Shop"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-data-cleaning", className: "css_block w_iv h_iv x_iv y_vii css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-data-cleaning` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#0ea285", leftColor: '#108673', rightColor: '#006654' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Data Cleaning"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-processing", className: "css_block w_iv h_iv x_viii y_vii css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-processing` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#d4cba4", leftColor: '#c2b98e', rightColor: '#9d906f' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Processing"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-mobility", className: "css_block w_iii h_iv x_o y_xi css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-mobility` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#eeaa32", leftColor: '#be8b37', rightColor: '#ae7d36' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Mobility"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-environment", className: "css_block w_iii h_iv x_iii y_xi css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-environment` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#a4d06e", leftColor: '#78a94e', rightColor: '#577d40' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Environment"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-washing", className: "css_block w_iii h_iv x_vi y_xi css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-washing` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#9ad9eb", leftColor: '#68b2c6', rightColor: '#43888d' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Washing"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "cube-side-oil-gas", className: "css_block w_iii h_iv x_ix y_xi css-gray-lighter product-block" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-oil-gas` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconCube, { topColor: "#52656e", leftColor: '#294146', rightColor: '#001d27' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "alsim"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Oil & Gas")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackProducts);


/***/ }),

/***/ "./src/nav/components/cube-sides/bottom-about.tsx":
/*!********************************************************!*\
  !*** ./src/nav/components/cube-sides/bottom-about.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BottomAbout = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-bottom", className: 'wmcube-side' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_xii h_v x_o y_o css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: window.MindGlobal.homeUrl },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", id: "cube-ess-logo", alt: "ESS - Engineering Software Steyr", src: `${window.MindGlobal.templateUrl}/assets/images/ess_logo.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iii x_o y_v css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/about-us` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "About us"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iii x_vi y_v css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/career` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Career"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iii x_o y_viii css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/news` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "News"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iii x_vi y_viii css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/ess-events` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Events"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_xii h_iv x_0 y_xi" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mind-slider-holder no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "home-banner-cube", id: "hbc-dynairix" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: " https://alsimcloud.com", target: "_blank" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "hbc-banner-overlay" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "hbc-banner-image", width: "3004", height: "815", src: "https://www.essteyr.com/ess-media/home-banner/220312_repair/hbc-repair-banner.webp" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomAbout);


/***/ }),

/***/ "./src/nav/components/cube-sides/front-contact.tsx":
/*!*********************************************************!*\
  !*** ./src/nav/components/cube-sides/front-contact.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FrontContact = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-front", className: 'wmcube-side' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block css-block-header w_xii h_iii x_o y_o" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_viii h_viii x_o y_iii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/contact` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Contact Us"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iv h_viii x_viii y_iii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { id: "cube_subscribe_button" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Subscribe"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iv h_iv x_o y_xi css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://www.facebook.com/essteyr", target: "_blank", rel: "noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ess-icon icon_facebook text-xxl" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iv h_iv x_iv y_xi css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://twitter.com/ESSteyr", target: "_blank", rel: "noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ess-icon icon_twitter text-xxl" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_iv h_iv x_viii y_xi css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://www.linkedin.com/company/ess-engineeringsoftwaresteyr", target: "_blank", rel: "noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ess-icon icon_linkedin text-xxl" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontContact);


/***/ }),

/***/ "./src/nav/components/cube-sides/left-case-solutions.tsx":
/*!***************************************************************!*\
  !*** ./src/nav/components/cube-sides/left-case-solutions.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_wm_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/wm-fetch */ "./src/helpers/wm-fetch.ts");


const LeftCaseSolutions = () => {
    const [csFeed, setCsFeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const csFeed = (0,_helpers_wm_fetch__WEBPACK_IMPORTED_MODULE_1__.wmFetch)(window.MindGlobal.homeUrl + '/wp-json/mindfulness/v2/case-solutions?count=4');
        csFeed.then($json => {
            setCsFeed(JSON.parse($json));
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-left", className: 'wmcube-side' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block css-block-header w_xii h_iii x_o y_o" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Case Solutions"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iv x_o y_iii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "background-image-link", href: csFeed[0] && csFeed[0].link },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "csscube-bkg-image", src: csFeed[0] && csFeed[0].thumb }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, csFeed[0] && csFeed[0].title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iv x_vi y_iii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "background-image-link", href: csFeed[1] && csFeed[1].link },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "csscube-bkg-image", src: csFeed[1] && csFeed[1].thumb }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, csFeed[1] && csFeed[1].title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iv x_o y_vii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "background-image-link", href: csFeed[2] && csFeed[2].link },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "csscube-bkg-image", src: csFeed[2] && csFeed[2].thumb }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, csFeed[2] && csFeed[3].title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_vi h_iv x_vi y_vii css-gray" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "background-image-link", href: csFeed[3] && csFeed[3].link },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { loading: "lazy", className: "csscube-bkg-image", src: csFeed[3] && csFeed[3].thumb }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, csFeed[3] && csFeed[3].title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block w_xii h_iv x_o y_xi css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/case-solutions` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "has-text-align-right icon-headline medium-icon just-right color-secondary" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-primary ess-icon icon_circle_arrow_right" }),
                    "See More Case Solutions")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftCaseSolutions);


/***/ }),

/***/ "./src/nav/components/cube-sides/right-industries.tsx":
/*!************************************************************!*\
  !*** ./src/nav/components/cube-sides/right-industries.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icons */ "./src/components/icons.tsx");


const RightIndustries = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-right", className: 'wmcube-side' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "css_block css-block-header w_xii h_iii x_o y_o" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "INDUSTRIES"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cbl-industry css_block w_vi h_vi x_o y_iii css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/automotive` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cc-icon-h" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconAutomotive, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Automotive"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cbl-industry css_block w_vi h_vi x_vi y_iii css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/oil-gas` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cc-icon-h" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconOilGas, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Oil & Gas"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cbl-industry css_block w_vi h_vi x_o y_ix css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/processing` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cc-icon-h" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconProcessing, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Processing"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cbl-industry css_block w_vi h_vi x_vi y_ix css-gray-lighter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${window.MindGlobal.homeUrl}/energy-environment` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cc-icon-h" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconEnvironment, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Environment & Energy")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightIndustries);


/***/ }),

/***/ "./src/nav/components/desktop-nav.tsx":
/*!********************************************!*\
  !*** ./src/nav/components/desktop-nav.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globals */ "./globals.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _csscube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./csscube */ "./src/nav/components/csscube.js");
/* harmony import */ var _cube_sides_bottom_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cube-sides/bottom-about */ "./src/nav/components/cube-sides/bottom-about.tsx");
/* harmony import */ var _cube_sides_left_case_solutions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cube-sides/left-case-solutions */ "./src/nav/components/cube-sides/left-case-solutions.tsx");
/* harmony import */ var _cube_sides_right_industries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cube-sides/right-industries */ "./src/nav/components/cube-sides/right-industries.tsx");
/* harmony import */ var _cube_sides_front_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cube-sides/front-contact */ "./src/nav/components/cube-sides/front-contact.tsx");
/* harmony import */ var _cube_sides_back_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cube-sides/back-products */ "./src/nav/components/cube-sides/back-products.tsx");
/* harmony import */ var _ess_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ess-logo */ "./src/nav/components/ess-logo.tsx");
/* harmony import */ var _sass_desktop_nav_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sass/desktop_nav.sass */ "./src/nav/sass/desktop_nav.sass");
/**
 * Desktop menu navigation main component
 * @since 3.0
 */
// framework

// types
 // for .svg import support in typescript
// components






// assets


const DesktopNav = ({ homeUrl, templateUrl }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const CSSCube = new _csscube__WEBPACK_IMPORTED_MODULE_2__["default"]();
        CSSCube.init();
        CSSCube.setup_cube();
        return () => {
            // fade out on dismount
            CSSCube.fadeOut();
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-bar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ess_logo__WEBPACK_IMPORTED_MODULE_8__["default"], { homeUrl: homeUrl, templateUrl: templateUrl }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { id: "wmnav-list" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'wm-cube-menu-link', "data-target": 'bottom' }, "ESS")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'wm-cube-menu-link', "data-target": 'right' }, "Industries")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'wm-cube-menu-link', "data-target": 'back' }, "Solutions")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'wm-cube-menu-link', "data-target": 'left' }, "Case Solutions")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'wm-cube-menu-link', "data-target": 'front' }, "Contact"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-settings" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-content", style: { display: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-cont" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-scene" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "csscube-navbutton left-button" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ess-icon color-primary big-icon icon_simple_arrow_left" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "csscube-navbutton right-button" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ess-icon color-primary big-icon icon_simple_arrow_right" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-rotator" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cube_sides_front_contact__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cube_sides_back_products__WEBPACK_IMPORTED_MODULE_7__["default"], { homeUrl: homeUrl, templateUrl: templateUrl }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cube_sides_left_case_solutions__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cube_sides_right_industries__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cube_sides_bottom_about__WEBPACK_IMPORTED_MODULE_3__["default"], null))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "csscube-shadow" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopNav);


/***/ }),

/***/ "./src/nav/components/ess-logo.tsx":
/*!*****************************************!*\
  !*** ./src/nav/components/ess-logo.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EssLogo = ({ homeUrl, templateUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: 'wmnav-logo' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: homeUrl },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { width: '120', height: '40', alt: 'ESS', loading: 'lazy', src: templateUrl + '/assets/images/ess_logo.svg' }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EssLogo);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/nav/desktop.tsx ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_desktop_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/desktop-nav */ "./src/nav/components/desktop-nav.tsx");
/**
 * DESKTOP CUBE NAVIGATION INITIALIZATION
 * @since 3.0
 */


// sets the device navigation as variable to be unloaded if needed
window.MindGlobal.desktopNav = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_desktop_nav__WEBPACK_IMPORTED_MODULE_1__["default"], { homeUrl: window.MindGlobal.homeUrl, templateUrl: window.MindGlobal.templateUrl });

})();

/******/ })()
;
//# sourceMappingURL=desktop.js.map