webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _moment = __webpack_require__(15);

	var _moment2 = _interopRequireDefault(_moment);

	var _crossfilter = __webpack_require__(207);

	var _crossfilter2 = _interopRequireDefault(_crossfilter);

	var _universe = __webpack_require__(532);

	var _universe2 = _interopRequireDefault(_universe);

	var _src = __webpack_require__(18);

	var _data = __webpack_require__(8);

	var _makaluFilter = __webpack_require__(9);

	var _makaluFilter2 = _interopRequireDefault(_makaluFilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.onTitleChange = function (newTitle) {
	      return _this.setState({ title: newTitle });
	    };

	    _this.onDescriptionChange = function (newDescription) {
	      return _this.setState({ description: newDescription });
	    };

	    _this.state = {
	      title: null,
	      description: null,
	      timeFilter: null
	    };
	    return _this;
	  }

	  App.prototype.onTimebarChange = function onTimebarChange(e) {
	    if (e) {
	      this.setState({ timeFilter: e });
	    }
	  };

	  App.prototype.render = function render() {
	    var _this2 = this;

	    var _source = _data.source;
	    var timeFilter = this.state.timeFilter;

	    if (timeFilter) {
	      _source = _source.filter(function (v) {
	        return v.time >= timeFilter[0] && v.time <= timeFilter[1];
	      });
	    }
	    var BarSource = (0, _makaluFilter2.default)(_source, [{ name: 'metric' }], ['value', 'avalue', 'bvalue'], ['sum', 'sum', 'sum']);
	    console.log(BarSource);
	    return _react2.default.createElement(_src.Bar, _defineProperty({
	      title: this.state.title,
	      animation: false,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: BarSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      yAxis: ['value', 'avalue', 'bvalue'],
	      timebarShow: true,
	      timebarDomain: _data.dates,
	      timebarTickFormat: function timebarTickFormat(v) {
	        return (0, _moment2.default)(v).format('YYYY');
	      },
	      onTitleChange: function onTitleChange(e) {
	        return _this2.onTitleChange(e);
	      },
	      onDescriptionChange: function onDescriptionChange(e) {
	        return _this2.onDescriptionChange(e);
	      },
	      onTimebarChange: function onTimebarChange(e) {
	        return _this2.onTimebarChange(e);
	      }
	    }, 'onTimebarChange', function onTimebarChange(e) {
	      return _this2.onTimebarChange(e);
	    }));
	  };

	  return App;
	}(_react2.default.Component);

		(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('__chart'));

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var first_year_data = [[5, 2, 3, 3, 5, 4, 2, 5, 5], [5, 3, 2, 4, 4, 4, 3, 3, 4], [3, 5, 5, 5, 2, 5, 4, 4, 3], [4, 4, 4, 2, 3, 4, 5, 2, 2]];
	var anotherMetricValue = [[5, 2, 3, 3, 5, 4, 2, 5, 5], [5, 3, 2, 4, 4, 4, 3, 3, 4], [3, 5, 5, 5, 2, 5, 4, 4, 3], [4, 4, 4, 2, 3, 4, 5, 2, 2]];
	var yetanotherMetricValue = [[5, 2, 3, 3, 5, 4, 2, 5, 5], [5, 3, 2, 4, 4, 4, 3, 3, 4], [3, 5, 5, 5, 2, 5, 4, 4, 3], [4, 4, 4, 2, 3, 4, 5, 2, 2]];
	var dates = function () {
	  var result = [];
	  for (var i = 1970; i < 2017; i++) {
	    result.push(+new Date(String(i)));
	  }
	  return result;
	}();
	var makeFakeData = function makeFakeData(fake) {
	  var data = [];
	  dates.map(function (d) {
	    var dd = JSON.parse(JSON.stringify(fake));
	    dd = dd.map(function (ddd) {
	      return ddd.map(function (dddd) {
	        dddd = dddd * Math.ceil(Math.random() * 100);
	        return dddd;
	      });
	    });
	    data.push(dd);
	  });
	  return data;
	};
	var data = makeFakeData(first_year_data);
	var adata = makeFakeData(anotherMetricValue);
	var sizedata = makeFakeData(yetanotherMetricValue);
	var dimensions = ['北京', '上海', '广州', '深圳'];
	var metrics = ['城市热度', '衣', '食', '住', '薪资', '行', '气候', '医疗', '教育'];
	var source = [];
	for (var y = 0; y < dates.length; y++) {
	  for (var i = 0; i < dimensions.length; i++) {
	    for (var x = 0; x < metrics.length; x++) {
	      source.push({
	        city: dimensions[i],
	        metric: metrics[x],
	        value: data[y][i][x],
	        avalue: adata[y][i][x],
	        bvalue: sizedata[y][i][x],
	        time: dates[y]
	      });
	    }
	  }
	}

	exports.default = {
	  source: source,
	  metrics: metrics,
	  dimensions: dimensions,
	  dates: dates
	};
	module.exports = exports['default'];

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var makaluFilter = function makaluFilter(series, dimensions, metrics, aggregates) {
	  var object = {};
	  var result = [];
	  var dimensionValues = [];
	  var seriesLength = series.length;
	  var metricsLength = metrics.length;
	  var dimensionsLength = dimensions.length;
	  var objectLength = 0;
	  for (var i = 0; i < seriesLength; i++) {
	    var dimensionValue = [];
	    for (var x = 0; x < dimensionsLength; x++) {
	      if (dimensions[x].format) {
	        if (typeof dimensions[x].format === 'function') {
	          dimensionValue.push(dimensions[x].format(series[i][dimensions[x].name]));
	        }
	      }
	      dimensionValue.push(series[i][dimensions[x].name]);
	    }
	    var dimensionConcatedValue = dimensionValue.join('*');
	    // first of all group dimension
	    if (!object[dimensionConcatedValue]) {
	      object[dimensionConcatedValue] = {};
	      dimensionValues.push(dimensionConcatedValue);
	      for (var _x = 0; _x < dimensionsLength; _x++) {
	        object[dimensionConcatedValue][dimensions[_x].name] = series[i][dimensions[_x].name]; // dimensionValue[x];
	      }
	      objectLength += 1;
	    }
	    // insert metric's value into key-value array
	    for (var j = 0; j < metricsLength; j++) {
	      if (!object[dimensionConcatedValue][metrics[j]]) {
	        object[dimensionConcatedValue][metrics[j]] = [];
	      }
	      object[dimensionConcatedValue][metrics[j]].push(series[i][metrics[j]]);
	    }
	  }

	  for (var index = 0; index < objectLength; index++) {
	    var dimensionKey = dimensionValues[index];
	    for (var _j = 0; _j < metricsLength; _j++) {
	      var metricKey = metrics[_j];
	      switch (aggregates[_j]) {
	        case 'sum':
	        case 'avg':
	          var sum = object[dimensionKey][metricKey].reduce(function (total, next) {
	            return total + next;
	          }, 0);
	          if (aggregates[_j] === 'sum') {
	            object[dimensionKey][metricKey] = sum;
	          } else {
	            object[dimensionKey][metricKey] = sum / object[dimensionKey][metricKey].length;
	          }
	          break;
	        case 'max':
	          object[dimensionKey][metricKey] = Math.max.apply(Math, _toConsumableArray(object[dimensionKey][metricKey]));
	          break;
	        case 'min':
	          object[dimensionKey][metricKey] = Math.min.apply(Math, _toConsumableArray(object[dimensionKey][metricKey]));
	          break;
	        case 'first':
	          object[dimensionKey][metricKey] = object[dimensionKey][metricKey][0];
	          break;
	        case 'last':
	          object[dimensionKey][metricKey] = object[dimensionKey][metricKey].pop();
	          break;
	        case 'group by':
	          object[dimensionKey][metricKey] = _lodash2.default.uniqBy(object[dimensionKey][metricKey]);
	          break;
	        case 'array':
	          break;
	        case 'count':
	        default:
	          object[dimensionKey][metricKey] = object[dimensionKey][metricKey].length;
	      }
	    }
	    result.push(object[dimensionKey]);
	  }
	  return result;
	};

	exports.default = makaluFilter;
	module.exports = exports['default'];

/***/ },

/***/ 32:
/***/ function(module, exports) {

	/* eslint no-prototype-builtins: 0 */
	'use strict'

	module.exports = {
	  assign: assign,
	  find: find,
	  remove: remove,
	  isArray: isArray,
	  isObject: isObject,
	  isBoolean: isBoolean,
	  isString: isString,
	  isNumber: isNumber,
	  isFunction: isFunction,
	  get: get,
	  set: set,
	  map: map,
	  keys: keys,
	  sortBy: sortBy,
	  forEach: forEach,
	  isUndefined: isUndefined,
	  pick: pick,
	  xor: xor,
	  clone: clone,
	  isEqual: isEqual,
	  replaceArray: replaceArray,
	  uniq: uniq,
	  flatten: flatten,
	  sort: sort,
	  values: values,
	  recurseObject: recurseObject,
	}

	function assign(out) {
	  out = out || {}
	  for (var i = 1; i < arguments.length; i++) {
	    if (!arguments[i]) {
	      continue
	    }
	    for (var key in arguments[i]) {
	      if (arguments[i].hasOwnProperty(key)) {
	        out[key] = arguments[i][key]
	      }
	    }
	  }
	  return out
	}

	function find(a, b) {
	  return a.find(b)
	}

	function remove(a, b) {
	  return a.filter(function (o, i) {
	    var r = b(o)
	    if (r) {
	      a.splice(i, 1)
	      return true
	    }
	    return false
	  })
	}

	function isArray(a) {
	  return Array.isArray(a)
	}

	function isObject(d) {
	  return typeof d === 'object' && !isArray(d)
	}

	function isBoolean(d) {
	  return typeof d === 'boolean'
	}

	function isString(d) {
	  return typeof d === 'string'
	}

	function isNumber(d) {
	  return typeof d === 'number'
	}

	function isFunction(a) {
	  return typeof a === 'function'
	}

	function get(a, b) {
	  if (isArray(b)) {
	    b = b.join('.')
	  }
	  return b
	    .replace('[', '.').replace(']', '')
	    .split('.')
	    .reduce(
	      function (obj, property) {
	        return obj[property]
	      }, a
	    )
	}

	function set(obj, prop, value) {
	  if (typeof prop === 'string') {
	    prop = prop
	      .replace('[', '.').replace(']', '')
	      .split('.')
	  }
	  if (prop.length > 1) {
	    var e = prop.shift()
	    assign(obj[e] =
	      Object.prototype.toString.call(obj[e]) === '[object Object]' ? obj[e] : {},
	      prop,
	      value)
	  } else {
	    obj[prop[0]] = value
	  }
	}

	function map(a, b) {
	  var m
	  var key
	  if (isFunction(b)) {
	    if (isObject(a)) {
	      m = []
	      for (key in a) {
	        if (a.hasOwnProperty(key)) {
	          m.push(b(a[key], key, a))
	        }
	      }
	      return m
	    }
	    return a.map(b)
	  }
	  if (isObject(a)) {
	    m = []
	    for (key in a) {
	      if (a.hasOwnProperty(key)) {
	        m.push(a[key])
	      }
	    }
	    return m
	  }
	  return a.map(function (aa) {
	    return aa[b]
	  })
	}

	function keys(obj) {
	  return Object.keys(obj)
	}

	function sortBy(a, b) {
	  if (isFunction(b)) {
	    return a.sort(function (aa, bb) {
	      if (b(aa) > b(bb)) {
	        return 1
	      }
	      if (b(aa) < b(bb)) {
	        return -1
	      }
	      // a must be equal to b
	      return 0
	    })
	  }
	}

	function forEach(a, b) {
	  if (isObject(a)) {
	    for (var key in a) {
	      if (a.hasOwnProperty(key)) {
	        b(a[key], key, a)
	      }
	    }
	    return
	  }
	  if (isArray(a)) {
	    return a.forEach(b)
	  }
	}

	function isUndefined(a) {
	  return typeof a === 'undefined'
	}

	function pick(a, b) {
	  var c = {}
	  forEach(b, function (bb) {
	    if (typeof a[bb] !== 'undefined') {
	      c[bb] = a[bb]
	    }
	  })
	  return c
	}

	function xor(a, b) {
	  var unique = []
	  forEach(a, function (aa) {
	    if (b.indexOf(aa) === -1) {
	      return unique.push(aa)
	    }
	  })
	  forEach(b, function (bb) {
	    if (a.indexOf(bb) === -1) {
	      return unique.push(bb)
	    }
	  })
	  return unique
	}

	function clone(a) {
	  return JSON.parse(JSON.stringify(a, function replacer(key, value) {
	    if (typeof value === 'function') {
	      return value.toString()
	    }
	    return value
	  }))
	}

	function isEqual(x, y) {
	  if ((typeof x === 'object' && x !== null) && (typeof y === 'object' && y !== null)) {
	    if (Object.keys(x).length !== Object.keys(y).length) {
	      return false
	    }

	    for (var prop in x) {
	      if (y.hasOwnProperty(prop)) {
	        if (!isEqual(x[prop], y[prop])) {
	          return false
	        }
	      }
	      return false
	    }

	    return true
	  } else if (x !== y) {
	    return false
	  }
	  return true
	}

	function replaceArray(a, b) {
	  var al = a.length
	  var bl = b.length
	  if (al > bl) {
	    a.splice(bl, al - bl)
	  } else if (al < bl) {
	    a.push.apply(a, new Array(bl - al))
	  }
	  forEach(a, function (val, key) {
	    a[key] = b[key]
	  })
	  return a
	}

	function uniq(a) {
	  var seen = new Set()
	  return a.filter(function (item) {
	    var allow = false
	    if (!seen.has(item)) {
	      seen.add(item)
	      allow = true
	    }
	    return allow
	  })
	}

	function flatten(aa) {
	  var flattened = []
	  for (var i = 0; i < aa.length; ++i) {
	    var current = aa[i]
	    for (var j = 0; j < current.length; ++j) {
	      flattened.push(current[j])
	    }
	  }
	  return flattened
	}

	function sort(arr) {
	  for (var i = 1; i < arr.length; i++) {
	    var tmp = arr[i]
	    var j = i
	    while (arr[j - 1] > tmp) {
	      arr[j] = arr[j - 1];
	      --j
	    }
	    arr[j] = tmp
	  }

	  return arr
	}

	function values(a) {
	  var values = []
	  for (var key in a) {
	    if (a.hasOwnProperty(key)) {
	      values.push(a[key])
	    }
	  }
	  return values
	}

	function recurseObject(obj, cb) {
	  _recurseObject(obj, [])
	  return obj
	  function _recurseObject(obj, path) {
	    for (var k in obj) { //  eslint-disable-line guard-for-in
	      var newPath = clone(path)
	      newPath.push(k)
	      if (typeof obj[k] === 'object' && obj[k] !== null) {
	        _recurseObject(obj[k], newPath)
	      } else {
	        if (!obj.hasOwnProperty(k)) {
	          continue
	        }
	        cb(obj[k], k, newPath)
	      }
	    }
	  }
	}


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// vim:ts=4:sts=4:sw=4:
	/*!
	 *
	 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
	 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
	 *
	 * With parts by Tyler Close
	 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
	 * at http://www.opensource.org/licenses/mit-license.html
	 * Forked at ref_send.js version: 2009-05-11
	 *
	 * With parts by Mark Miller
	 * Copyright (C) 2011 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	(function (definition) {
	    "use strict";

	    // This file will function properly as a <script> tag, or a module
	    // using CommonJS and NodeJS or RequireJS module formats.  In
	    // Common/Node/RequireJS, the module exports the Q API and when
	    // executed as a simple <script>, it creates a Q global instead.

	    // Montage Require
	    if (typeof bootstrap === "function") {
	        bootstrap("promise", definition);

	    // CommonJS
	    } else if (true) {
	        module.exports = definition();

	    // RequireJS
	    } else if (typeof define === "function" && define.amd) {
	        define(definition);

	    // SES (Secure EcmaScript)
	    } else if (typeof ses !== "undefined") {
	        if (!ses.ok()) {
	            return;
	        } else {
	            ses.makeQ = definition;
	        }

	    // <script>
	    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
	        // Prefer window over self for add-on scripts. Use self for
	        // non-windowed contexts.
	        var global = typeof window !== "undefined" ? window : self;

	        // Get the `window` object, save the previous Q global
	        // and initialize Q as a global.
	        var previousQ = global.Q;
	        global.Q = definition();

	        // Add a noConflict function so Q can be removed from the
	        // global namespace.
	        global.Q.noConflict = function () {
	            global.Q = previousQ;
	            return this;
	        };

	    } else {
	        throw new Error("This environment was not anticipated by Q. Please file a bug.");
	    }

	})(function () {
	"use strict";

	var hasStacks = false;
	try {
	    throw new Error();
	} catch (e) {
	    hasStacks = !!e.stack;
	}

	// All code after this point will be filtered from stack traces reported
	// by Q.
	var qStartingLine = captureLine();
	var qFileName;

	// shims

	// used for fallback in "allResolved"
	var noop = function () {};

	// Use the fastest possible means to execute a task in a future turn
	// of the event loop.
	var nextTick =(function () {
	    // linked list of tasks (single, with head node)
	    var head = {task: void 0, next: null};
	    var tail = head;
	    var flushing = false;
	    var requestTick = void 0;
	    var isNodeJS = false;
	    // queue for late tasks, used by unhandled rejection tracking
	    var laterQueue = [];

	    function flush() {
	        /* jshint loopfunc: true */
	        var task, domain;

	        while (head.next) {
	            head = head.next;
	            task = head.task;
	            head.task = void 0;
	            domain = head.domain;

	            if (domain) {
	                head.domain = void 0;
	                domain.enter();
	            }
	            runSingle(task, domain);

	        }
	        while (laterQueue.length) {
	            task = laterQueue.pop();
	            runSingle(task);
	        }
	        flushing = false;
	    }
	    // runs a single function in the async queue
	    function runSingle(task, domain) {
	        try {
	            task();

	        } catch (e) {
	            if (isNodeJS) {
	                // In node, uncaught exceptions are considered fatal errors.
	                // Re-throw them synchronously to interrupt flushing!

	                // Ensure continuation if the uncaught exception is suppressed
	                // listening "uncaughtException" events (as domains does).
	                // Continue in next event to avoid tick recursion.
	                if (domain) {
	                    domain.exit();
	                }
	                setTimeout(flush, 0);
	                if (domain) {
	                    domain.enter();
	                }

	                throw e;

	            } else {
	                // In browsers, uncaught exceptions are not fatal.
	                // Re-throw them asynchronously to avoid slow-downs.
	                setTimeout(function () {
	                    throw e;
	                }, 0);
	            }
	        }

	        if (domain) {
	            domain.exit();
	        }
	    }

	    nextTick = function (task) {
	        tail = tail.next = {
	            task: task,
	            domain: isNodeJS && process.domain,
	            next: null
	        };

	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };

	    if (typeof process === "object" &&
	        process.toString() === "[object process]" && process.nextTick) {
	        // Ensure Q is in a real Node environment, with a `process.nextTick`.
	        // To see through fake Node environments:
	        // * Mocha test runner - exposes a `process` global without a `nextTick`
	        // * Browserify - exposes a `process.nexTick` function that uses
	        //   `setTimeout`. In this case `setImmediate` is preferred because
	        //    it is faster. Browserify's `process.toString()` yields
	        //   "[object Object]", while in a real Node environment
	        //   `process.nextTick()` yields "[object process]".
	        isNodeJS = true;

	        requestTick = function () {
	            process.nextTick(flush);
	        };

	    } else if (typeof setImmediate === "function") {
	        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
	        if (typeof window !== "undefined") {
	            requestTick = setImmediate.bind(window, flush);
	        } else {
	            requestTick = function () {
	                setImmediate(flush);
	            };
	        }

	    } else if (typeof MessageChannel !== "undefined") {
	        // modern browsers
	        // http://www.nonblocking.io/2011/06/windownexttick.html
	        var channel = new MessageChannel();
	        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
	        // working message ports the first time a page loads.
	        channel.port1.onmessage = function () {
	            requestTick = requestPortTick;
	            channel.port1.onmessage = flush;
	            flush();
	        };
	        var requestPortTick = function () {
	            // Opera requires us to provide a message payload, regardless of
	            // whether we use it.
	            channel.port2.postMessage(0);
	        };
	        requestTick = function () {
	            setTimeout(flush, 0);
	            requestPortTick();
	        };

	    } else {
	        // old browsers
	        requestTick = function () {
	            setTimeout(flush, 0);
	        };
	    }
	    // runs a task after all other tasks have been run
	    // this is useful for unhandled rejection tracking that needs to happen
	    // after all `then`d tasks have been run.
	    nextTick.runAfter = function (task) {
	        laterQueue.push(task);
	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };
	    return nextTick;
	})();

	// Attempt to make generics safe in the face of downstream
	// modifications.
	// There is no situation where this is necessary.
	// If you need a security guarantee, these primordials need to be
	// deeply frozen anyway, and if you don’t need a security guarantee,
	// this is just plain paranoid.
	// However, this **might** have the nice side-effect of reducing the size of
	// the minified code by reducing x.call() to merely x()
	// See Mark Miller’s explanation of what this does.
	// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
	var call = Function.call;
	function uncurryThis(f) {
	    return function () {
	        return call.apply(f, arguments);
	    };
	}
	// This is equivalent, but slower:
	// uncurryThis = Function_bind.bind(Function_bind.call);
	// http://jsperf.com/uncurrythis

	var array_slice = uncurryThis(Array.prototype.slice);

	var array_reduce = uncurryThis(
	    Array.prototype.reduce || function (callback, basis) {
	        var index = 0,
	            length = this.length;
	        // concerning the initial value, if one is not provided
	        if (arguments.length === 1) {
	            // seek to the first value in the array, accounting
	            // for the possibility that is is a sparse array
	            do {
	                if (index in this) {
	                    basis = this[index++];
	                    break;
	                }
	                if (++index >= length) {
	                    throw new TypeError();
	                }
	            } while (1);
	        }
	        // reduce
	        for (; index < length; index++) {
	            // account for the possibility that the array is sparse
	            if (index in this) {
	                basis = callback(basis, this[index], index);
	            }
	        }
	        return basis;
	    }
	);

	var array_indexOf = uncurryThis(
	    Array.prototype.indexOf || function (value) {
	        // not a very good shim, but good enough for our one use of it
	        for (var i = 0; i < this.length; i++) {
	            if (this[i] === value) {
	                return i;
	            }
	        }
	        return -1;
	    }
	);

	var array_map = uncurryThis(
	    Array.prototype.map || function (callback, thisp) {
	        var self = this;
	        var collect = [];
	        array_reduce(self, function (undefined, value, index) {
	            collect.push(callback.call(thisp, value, index, self));
	        }, void 0);
	        return collect;
	    }
	);

	var object_create = Object.create || function (prototype) {
	    function Type() { }
	    Type.prototype = prototype;
	    return new Type();
	};

	var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

	var object_keys = Object.keys || function (object) {
	    var keys = [];
	    for (var key in object) {
	        if (object_hasOwnProperty(object, key)) {
	            keys.push(key);
	        }
	    }
	    return keys;
	};

	var object_toString = uncurryThis(Object.prototype.toString);

	function isObject(value) {
	    return value === Object(value);
	}

	// generator related shims

	// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
	function isStopIteration(exception) {
	    return (
	        object_toString(exception) === "[object StopIteration]" ||
	        exception instanceof QReturnValue
	    );
	}

	// FIXME: Remove this helper and Q.return once ES6 generators are in
	// SpiderMonkey.
	var QReturnValue;
	if (typeof ReturnValue !== "undefined") {
	    QReturnValue = ReturnValue;
	} else {
	    QReturnValue = function (value) {
	        this.value = value;
	    };
	}

	// long stack traces

	var STACK_JUMP_SEPARATOR = "From previous event:";

	function makeStackTraceLong(error, promise) {
	    // If possible, transform the error stack trace by removing Node and Q
	    // cruft, then concatenating with the stack trace of `promise`. See #57.
	    if (hasStacks &&
	        promise.stack &&
	        typeof error === "object" &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	        var stacks = [];
	        for (var p = promise; !!p; p = p.source) {
	            if (p.stack) {
	                stacks.unshift(p.stack);
	            }
	        }
	        stacks.unshift(error.stack);

	        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
	        error.stack = filterStackString(concatedStacks);
	    }
	}

	function filterStackString(stackString) {
	    var lines = stackString.split("\n");
	    var desiredLines = [];
	    for (var i = 0; i < lines.length; ++i) {
	        var line = lines[i];

	        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	            desiredLines.push(line);
	        }
	    }
	    return desiredLines.join("\n");
	}

	function isNodeFrame(stackLine) {
	    return stackLine.indexOf("(module.js:") !== -1 ||
	           stackLine.indexOf("(node.js:") !== -1;
	}

	function getFileNameAndLineNumber(stackLine) {
	    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
	    // In IE10 function name can have spaces ("Anonymous function") O_o
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) {
	        return [attempt1[1], Number(attempt1[2])];
	    }

	    // Anonymous functions: "at filename:lineNumber:columnNumber"
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) {
	        return [attempt2[1], Number(attempt2[2])];
	    }

	    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) {
	        return [attempt3[1], Number(attempt3[2])];
	    }
	}

	function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

	    if (!fileNameAndLineNumber) {
	        return false;
	    }

	    var fileName = fileNameAndLineNumber[0];
	    var lineNumber = fileNameAndLineNumber[1];

	    return fileName === qFileName &&
	        lineNumber >= qStartingLine &&
	        lineNumber <= qEndingLine;
	}

	// discover own file name and line number range for filtering stack
	// traces
	function captureLine() {
	    if (!hasStacks) {
	        return;
	    }

	    try {
	        throw new Error();
	    } catch (e) {
	        var lines = e.stack.split("\n");
	        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
	        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	        if (!fileNameAndLineNumber) {
	            return;
	        }

	        qFileName = fileNameAndLineNumber[0];
	        return fileNameAndLineNumber[1];
	    }
	}

	function deprecate(callback, name, alternative) {
	    return function () {
	        if (typeof console !== "undefined" &&
	            typeof console.warn === "function") {
	            console.warn(name + " is deprecated, use " + alternative +
	                         " instead.", new Error("").stack);
	        }
	        return callback.apply(callback, arguments);
	    };
	}

	// end of shims
	// beginning of real work

	/**
	 * Constructs a promise for an immediate reference, passes promises through, or
	 * coerces promises from different systems.
	 * @param value immediate reference or promise
	 */
	function Q(value) {
	    // If the object is already a Promise, return it directly.  This enables
	    // the resolve function to both be used to created references from objects,
	    // but to tolerably coerce non-promises to promises.
	    if (value instanceof Promise) {
	        return value;
	    }

	    // assimilate thenables
	    if (isPromiseAlike(value)) {
	        return coerce(value);
	    } else {
	        return fulfill(value);
	    }
	}
	Q.resolve = Q;

	/**
	 * Performs a task in a future turn of the event loop.
	 * @param {Function} task
	 */
	Q.nextTick = nextTick;

	/**
	 * Controls whether or not long stack traces will be on
	 */
	Q.longStackSupport = false;

	// enable long stacks if Q_DEBUG is set
	if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
	    Q.longStackSupport = true;
	}

	/**
	 * Constructs a {promise, resolve, reject} object.
	 *
	 * `resolve` is a callback to invoke with a more resolved value for the
	 * promise. To fulfill the promise, invoke `resolve` with any value that is
	 * not a thenable. To reject the promise, invoke `resolve` with a rejected
	 * thenable, or invoke `reject` with the reason directly. To resolve the
	 * promise to another thenable, thus putting it in the same state, invoke
	 * `resolve` with that other thenable.
	 */
	Q.defer = defer;
	function defer() {
	    // if "messages" is an "Array", that indicates that the promise has not yet
	    // been resolved.  If it is "undefined", it has been resolved.  Each
	    // element of the messages array is itself an array of complete arguments to
	    // forward to the resolved promise.  We coerce the resolution value to a
	    // promise using the `resolve` function because it handles both fully
	    // non-thenable values and other thenables gracefully.
	    var messages = [], progressListeners = [], resolvedPromise;

	    var deferred = object_create(defer.prototype);
	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, operands) {
	        var args = array_slice(arguments);
	        if (messages) {
	            messages.push(args);
	            if (op === "when" && operands[1]) { // progress operand
	                progressListeners.push(operands[1]);
	            }
	        } else {
	            Q.nextTick(function () {
	                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
	            });
	        }
	    };

	    // XXX deprecated
	    promise.valueOf = function () {
	        if (messages) {
	            return promise;
	        }
	        var nearerValue = nearer(resolvedPromise);
	        if (isPromise(nearerValue)) {
	            resolvedPromise = nearerValue; // shorten chain
	        }
	        return nearerValue;
	    };

	    promise.inspect = function () {
	        if (!resolvedPromise) {
	            return { state: "pending" };
	        }
	        return resolvedPromise.inspect();
	    };

	    if (Q.longStackSupport && hasStacks) {
	        try {
	            throw new Error();
	        } catch (e) {
	            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
	            // accessor around; that causes memory leaks as per GH-111. Just
	            // reify the stack trace as a string ASAP.
	            //
	            // At the same time, cut off the first line; it's always just
	            // "[object Promise]\n", as per the `toString`.
	            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
	        }
	    }

	    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
	    // consolidating them into `become`, since otherwise we'd create new
	    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

	    function become(newPromise) {
	        resolvedPromise = newPromise;
	        promise.source = newPromise;

	        array_reduce(messages, function (undefined, message) {
	            Q.nextTick(function () {
	                newPromise.promiseDispatch.apply(newPromise, message);
	            });
	        }, void 0);

	        messages = void 0;
	        progressListeners = void 0;
	    }

	    deferred.promise = promise;
	    deferred.resolve = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(Q(value));
	    };

	    deferred.fulfill = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(fulfill(value));
	    };
	    deferred.reject = function (reason) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(reject(reason));
	    };
	    deferred.notify = function (progress) {
	        if (resolvedPromise) {
	            return;
	        }

	        array_reduce(progressListeners, function (undefined, progressListener) {
	            Q.nextTick(function () {
	                progressListener(progress);
	            });
	        }, void 0);
	    };

	    return deferred;
	}

	/**
	 * Creates a Node-style callback that will resolve or reject the deferred
	 * promise.
	 * @returns a nodeback
	 */
	defer.prototype.makeNodeResolver = function () {
	    var self = this;
	    return function (error, value) {
	        if (error) {
	            self.reject(error);
	        } else if (arguments.length > 2) {
	            self.resolve(array_slice(arguments, 1));
	        } else {
	            self.resolve(value);
	        }
	    };
	};

	/**
	 * @param resolver {Function} a function that returns nothing and accepts
	 * the resolve, reject, and notify functions for a deferred.
	 * @returns a promise that may be resolved with the given resolve and reject
	 * functions, or rejected by a thrown exception in resolver
	 */
	Q.Promise = promise; // ES6
	Q.promise = promise;
	function promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("resolver must be a function.");
	    }
	    var deferred = defer();
	    try {
	        resolver(deferred.resolve, deferred.reject, deferred.notify);
	    } catch (reason) {
	        deferred.reject(reason);
	    }
	    return deferred.promise;
	}

	promise.race = race; // ES6
	promise.all = all; // ES6
	promise.reject = reject; // ES6
	promise.resolve = Q; // ES6

	// XXX experimental.  This method is a way to denote that a local value is
	// serializable and should be immediately dispatched to a remote upon request,
	// instead of passing a reference.
	Q.passByCopy = function (object) {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return object;
	};

	Promise.prototype.passByCopy = function () {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return this;
	};

	/**
	 * If two promises eventually fulfill to the same value, promises that value,
	 * but otherwise rejects.
	 * @param x {Any*}
	 * @param y {Any*}
	 * @returns {Any*} a promise for x and y if they are the same, but a rejection
	 * otherwise.
	 *
	 */
	Q.join = function (x, y) {
	    return Q(x).join(y);
	};

	Promise.prototype.join = function (that) {
	    return Q([this, that]).spread(function (x, y) {
	        if (x === y) {
	            // TODO: "===" should be Object.is or equiv
	            return x;
	        } else {
	            throw new Error("Can't join: not the same: " + x + " " + y);
	        }
	    });
	};

	/**
	 * Returns a promise for the first of an array of promises to become settled.
	 * @param answers {Array[Any*]} promises to race
	 * @returns {Any*} the first promise to be settled
	 */
	Q.race = race;
	function race(answerPs) {
	    return promise(function (resolve, reject) {
	        // Switch to this once we can assume at least ES5
	        // answerPs.forEach(function (answerP) {
	        //     Q(answerP).then(resolve, reject);
	        // });
	        // Use this in the meantime
	        for (var i = 0, len = answerPs.length; i < len; i++) {
	            Q(answerPs[i]).then(resolve, reject);
	        }
	    });
	}

	Promise.prototype.race = function () {
	    return this.then(Q.race);
	};

	/**
	 * Constructs a Promise with a promise descriptor object and optional fallback
	 * function.  The descriptor contains methods like when(rejected), get(name),
	 * set(name, value), post(name, args), and delete(name), which all
	 * return either a value, a promise for a value, or a rejection.  The fallback
	 * accepts the operation name, a resolver, and any further arguments that would
	 * have been forwarded to the appropriate method above had a method been
	 * provided with the proper name.  The API makes no guarantees about the nature
	 * of the returned object, apart from that it is usable whereever promises are
	 * bought and sold.
	 */
	Q.makePromise = Promise;
	function Promise(descriptor, fallback, inspect) {
	    if (fallback === void 0) {
	        fallback = function (op) {
	            return reject(new Error(
	                "Promise does not support operation: " + op
	            ));
	        };
	    }
	    if (inspect === void 0) {
	        inspect = function () {
	            return {state: "unknown"};
	        };
	    }

	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, args) {
	        var result;
	        try {
	            if (descriptor[op]) {
	                result = descriptor[op].apply(promise, args);
	            } else {
	                result = fallback.call(promise, op, args);
	            }
	        } catch (exception) {
	            result = reject(exception);
	        }
	        if (resolve) {
	            resolve(result);
	        }
	    };

	    promise.inspect = inspect;

	    // XXX deprecated `valueOf` and `exception` support
	    if (inspect) {
	        var inspected = inspect();
	        if (inspected.state === "rejected") {
	            promise.exception = inspected.reason;
	        }

	        promise.valueOf = function () {
	            var inspected = inspect();
	            if (inspected.state === "pending" ||
	                inspected.state === "rejected") {
	                return promise;
	            }
	            return inspected.value;
	        };
	    }

	    return promise;
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.then = function (fulfilled, rejected, progressed) {
	    var self = this;
	    var deferred = defer();
	    var done = false;   // ensure the untrusted promise makes at most a
	                        // single call to one of the callbacks

	    function _fulfilled(value) {
	        try {
	            return typeof fulfilled === "function" ? fulfilled(value) : value;
	        } catch (exception) {
	            return reject(exception);
	        }
	    }

	    function _rejected(exception) {
	        if (typeof rejected === "function") {
	            makeStackTraceLong(exception, self);
	            try {
	                return rejected(exception);
	            } catch (newException) {
	                return reject(newException);
	            }
	        }
	        return reject(exception);
	    }

	    function _progressed(value) {
	        return typeof progressed === "function" ? progressed(value) : value;
	    }

	    Q.nextTick(function () {
	        self.promiseDispatch(function (value) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_fulfilled(value));
	        }, "when", [function (exception) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_rejected(exception));
	        }]);
	    });

	    // Progress propagator need to be attached in the current tick.
	    self.promiseDispatch(void 0, "when", [void 0, function (value) {
	        var newValue;
	        var threw = false;
	        try {
	            newValue = _progressed(value);
	        } catch (e) {
	            threw = true;
	            if (Q.onerror) {
	                Q.onerror(e);
	            } else {
	                throw e;
	            }
	        }

	        if (!threw) {
	            deferred.notify(newValue);
	        }
	    }]);

	    return deferred.promise;
	};

	Q.tap = function (promise, callback) {
	    return Q(promise).tap(callback);
	};

	/**
	 * Works almost like "finally", but not called for rejections.
	 * Original resolution value is passed through callback unaffected.
	 * Callback may return a promise that will be awaited for.
	 * @param {Function} callback
	 * @returns {Q.Promise}
	 * @example
	 * doSomething()
	 *   .then(...)
	 *   .tap(console.log)
	 *   .then(...);
	 */
	Promise.prototype.tap = function (callback) {
	    callback = Q(callback);

	    return this.then(function (value) {
	        return callback.fcall(value).thenResolve(value);
	    });
	};

	/**
	 * Registers an observer on a promise.
	 *
	 * Guarantees:
	 *
	 * 1. that fulfilled and rejected will be called only once.
	 * 2. that either the fulfilled callback or the rejected callback will be
	 *    called, but not both.
	 * 3. that fulfilled and rejected will not be called in this turn.
	 *
	 * @param value      promise or immediate reference to observe
	 * @param fulfilled  function to be called with the fulfilled value
	 * @param rejected   function to be called with the rejection exception
	 * @param progressed function to be called on any progress notifications
	 * @return promise for the return value from the invoked callback
	 */
	Q.when = when;
	function when(value, fulfilled, rejected, progressed) {
	    return Q(value).then(fulfilled, rejected, progressed);
	}

	Promise.prototype.thenResolve = function (value) {
	    return this.then(function () { return value; });
	};

	Q.thenResolve = function (promise, value) {
	    return Q(promise).thenResolve(value);
	};

	Promise.prototype.thenReject = function (reason) {
	    return this.then(function () { throw reason; });
	};

	Q.thenReject = function (promise, reason) {
	    return Q(promise).thenReject(reason);
	};

	/**
	 * If an object is not a promise, it is as "near" as possible.
	 * If a promise is rejected, it is as "near" as possible too.
	 * If it’s a fulfilled promise, the fulfillment value is nearer.
	 * If it’s a deferred promise and the deferred has been resolved, the
	 * resolution is "nearer".
	 * @param object
	 * @returns most resolved (nearest) form of the object
	 */

	// XXX should we re-do this?
	Q.nearer = nearer;
	function nearer(value) {
	    if (isPromise(value)) {
	        var inspected = value.inspect();
	        if (inspected.state === "fulfilled") {
	            return inspected.value;
	        }
	    }
	    return value;
	}

	/**
	 * @returns whether the given object is a promise.
	 * Otherwise it is a fulfilled value.
	 */
	Q.isPromise = isPromise;
	function isPromise(object) {
	    return object instanceof Promise;
	}

	Q.isPromiseAlike = isPromiseAlike;
	function isPromiseAlike(object) {
	    return isObject(object) && typeof object.then === "function";
	}

	/**
	 * @returns whether the given object is a pending promise, meaning not
	 * fulfilled or rejected.
	 */
	Q.isPending = isPending;
	function isPending(object) {
	    return isPromise(object) && object.inspect().state === "pending";
	}

	Promise.prototype.isPending = function () {
	    return this.inspect().state === "pending";
	};

	/**
	 * @returns whether the given object is a value or fulfilled
	 * promise.
	 */
	Q.isFulfilled = isFulfilled;
	function isFulfilled(object) {
	    return !isPromise(object) || object.inspect().state === "fulfilled";
	}

	Promise.prototype.isFulfilled = function () {
	    return this.inspect().state === "fulfilled";
	};

	/**
	 * @returns whether the given object is a rejected promise.
	 */
	Q.isRejected = isRejected;
	function isRejected(object) {
	    return isPromise(object) && object.inspect().state === "rejected";
	}

	Promise.prototype.isRejected = function () {
	    return this.inspect().state === "rejected";
	};

	//// BEGIN UNHANDLED REJECTION TRACKING

	// This promise library consumes exceptions thrown in handlers so they can be
	// handled by a subsequent promise.  The exceptions get added to this array when
	// they are created, and removed when they are handled.  Note that in ES6 or
	// shimmed environments, this would naturally be a `Set`.
	var unhandledReasons = [];
	var unhandledRejections = [];
	var reportedUnhandledRejections = [];
	var trackUnhandledRejections = true;

	function resetUnhandledRejections() {
	    unhandledReasons.length = 0;
	    unhandledRejections.length = 0;

	    if (!trackUnhandledRejections) {
	        trackUnhandledRejections = true;
	    }
	}

	function trackRejection(promise, reason) {
	    if (!trackUnhandledRejections) {
	        return;
	    }
	    if (typeof process === "object" && typeof process.emit === "function") {
	        Q.nextTick.runAfter(function () {
	            if (array_indexOf(unhandledRejections, promise) !== -1) {
	                process.emit("unhandledRejection", reason, promise);
	                reportedUnhandledRejections.push(promise);
	            }
	        });
	    }

	    unhandledRejections.push(promise);
	    if (reason && typeof reason.stack !== "undefined") {
	        unhandledReasons.push(reason.stack);
	    } else {
	        unhandledReasons.push("(no stack) " + reason);
	    }
	}

	function untrackRejection(promise) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    var at = array_indexOf(unhandledRejections, promise);
	    if (at !== -1) {
	        if (typeof process === "object" && typeof process.emit === "function") {
	            Q.nextTick.runAfter(function () {
	                var atReport = array_indexOf(reportedUnhandledRejections, promise);
	                if (atReport !== -1) {
	                    process.emit("rejectionHandled", unhandledReasons[at], promise);
	                    reportedUnhandledRejections.splice(atReport, 1);
	                }
	            });
	        }
	        unhandledRejections.splice(at, 1);
	        unhandledReasons.splice(at, 1);
	    }
	}

	Q.resetUnhandledRejections = resetUnhandledRejections;

	Q.getUnhandledReasons = function () {
	    // Make a copy so that consumers can't interfere with our internal state.
	    return unhandledReasons.slice();
	};

	Q.stopUnhandledRejectionTracking = function () {
	    resetUnhandledRejections();
	    trackUnhandledRejections = false;
	};

	resetUnhandledRejections();

	//// END UNHANDLED REJECTION TRACKING

	/**
	 * Constructs a rejected promise.
	 * @param reason value describing the failure
	 */
	Q.reject = reject;
	function reject(reason) {
	    var rejection = Promise({
	        "when": function (rejected) {
	            // note that the error has been handled
	            if (rejected) {
	                untrackRejection(this);
	            }
	            return rejected ? rejected(reason) : this;
	        }
	    }, function fallback() {
	        return this;
	    }, function inspect() {
	        return { state: "rejected", reason: reason };
	    });

	    // Note that the reason has not been handled.
	    trackRejection(rejection, reason);

	    return rejection;
	}

	/**
	 * Constructs a fulfilled promise for an immediate reference.
	 * @param value immediate reference
	 */
	Q.fulfill = fulfill;
	function fulfill(value) {
	    return Promise({
	        "when": function () {
	            return value;
	        },
	        "get": function (name) {
	            return value[name];
	        },
	        "set": function (name, rhs) {
	            value[name] = rhs;
	        },
	        "delete": function (name) {
	            delete value[name];
	        },
	        "post": function (name, args) {
	            // Mark Miller proposes that post with no name should apply a
	            // promised function.
	            if (name === null || name === void 0) {
	                return value.apply(void 0, args);
	            } else {
	                return value[name].apply(value, args);
	            }
	        },
	        "apply": function (thisp, args) {
	            return value.apply(thisp, args);
	        },
	        "keys": function () {
	            return object_keys(value);
	        }
	    }, void 0, function inspect() {
	        return { state: "fulfilled", value: value };
	    });
	}

	/**
	 * Converts thenables to Q promises.
	 * @param promise thenable promise
	 * @returns a Q promise
	 */
	function coerce(promise) {
	    var deferred = defer();
	    Q.nextTick(function () {
	        try {
	            promise.then(deferred.resolve, deferred.reject, deferred.notify);
	        } catch (exception) {
	            deferred.reject(exception);
	        }
	    });
	    return deferred.promise;
	}

	/**
	 * Annotates an object such that it will never be
	 * transferred away from this process over any promise
	 * communication channel.
	 * @param object
	 * @returns promise a wrapping of that object that
	 * additionally responds to the "isDef" message
	 * without a rejection.
	 */
	Q.master = master;
	function master(object) {
	    return Promise({
	        "isDef": function () {}
	    }, function fallback(op, args) {
	        return dispatch(object, op, args);
	    }, function () {
	        return Q(object).inspect();
	    });
	}

	/**
	 * Spreads the values of a promised array of arguments into the
	 * fulfillment callback.
	 * @param fulfilled callback that receives variadic arguments from the
	 * promised array
	 * @param rejected callback that receives the exception if the promise
	 * is rejected.
	 * @returns a promise for the return value or thrown exception of
	 * either callback.
	 */
	Q.spread = spread;
	function spread(value, fulfilled, rejected) {
	    return Q(value).spread(fulfilled, rejected);
	}

	Promise.prototype.spread = function (fulfilled, rejected) {
	    return this.all().then(function (array) {
	        return fulfilled.apply(void 0, array);
	    }, rejected);
	};

	/**
	 * The async function is a decorator for generator functions, turning
	 * them into asynchronous generators.  Although generators are only part
	 * of the newest ECMAScript 6 drafts, this code does not cause syntax
	 * errors in older engines.  This code should continue to work and will
	 * in fact improve over time as the language improves.
	 *
	 * ES6 generators are currently part of V8 version 3.19 with the
	 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
	 * for longer, but under an older Python-inspired form.  This function
	 * works on both kinds of generators.
	 *
	 * Decorates a generator function such that:
	 *  - it may yield promises
	 *  - execution will continue when that promise is fulfilled
	 *  - the value of the yield expression will be the fulfilled value
	 *  - it returns a promise for the return value (when the generator
	 *    stops iterating)
	 *  - the decorated function returns a promise for the return value
	 *    of the generator or the first rejected promise among those
	 *    yielded.
	 *  - if an error is thrown in the generator, it propagates through
	 *    every following yield until it is caught, or until it escapes
	 *    the generator function altogether, and is translated into a
	 *    rejection for the promise returned by the decorated generator.
	 */
	Q.async = async;
	function async(makeGenerator) {
	    return function () {
	        // when verb is "send", arg is a value
	        // when verb is "throw", arg is an exception
	        function continuer(verb, arg) {
	            var result;

	            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
	            // engine that has a deployed base of browsers that support generators.
	            // However, SM's generators use the Python-inspired semantics of
	            // outdated ES6 drafts.  We would like to support ES6, but we'd also
	            // like to make it possible to use generators in deployed browsers, so
	            // we also support Python-style generators.  At some point we can remove
	            // this block.

	            if (typeof StopIteration === "undefined") {
	                // ES6 Generators
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    return reject(exception);
	                }
	                if (result.done) {
	                    return Q(result.value);
	                } else {
	                    return when(result.value, callback, errback);
	                }
	            } else {
	                // SpiderMonkey Generators
	                // FIXME: Remove this case when SM does ES6 generators.
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    if (isStopIteration(exception)) {
	                        return Q(exception.value);
	                    } else {
	                        return reject(exception);
	                    }
	                }
	                return when(result, callback, errback);
	            }
	        }
	        var generator = makeGenerator.apply(this, arguments);
	        var callback = continuer.bind(continuer, "next");
	        var errback = continuer.bind(continuer, "throw");
	        return callback();
	    };
	}

	/**
	 * The spawn function is a small wrapper around async that immediately
	 * calls the generator and also ends the promise chain, so that any
	 * unhandled errors are thrown instead of forwarded to the error
	 * handler. This is useful because it's extremely common to run
	 * generators at the top-level to work with libraries.
	 */
	Q.spawn = spawn;
	function spawn(makeGenerator) {
	    Q.done(Q.async(makeGenerator)());
	}

	// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
	/**
	 * Throws a ReturnValue exception to stop an asynchronous generator.
	 *
	 * This interface is a stop-gap measure to support generator return
	 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
	 * generators like Chromium 29, just use "return" in your generator
	 * functions.
	 *
	 * @param value the return value for the surrounding generator
	 * @throws ReturnValue exception with the value.
	 * @example
	 * // ES6 style
	 * Q.async(function* () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      return foo + bar;
	 * })
	 * // Older SpiderMonkey style
	 * Q.async(function () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      Q.return(foo + bar);
	 * })
	 */
	Q["return"] = _return;
	function _return(value) {
	    throw new QReturnValue(value);
	}

	/**
	 * The promised function decorator ensures that any promise arguments
	 * are settled and passed as values (`this` is also settled and passed
	 * as a value).  It will also ensure that the result of a function is
	 * always a promise.
	 *
	 * @example
	 * var add = Q.promised(function (a, b) {
	 *     return a + b;
	 * });
	 * add(Q(a), Q(B));
	 *
	 * @param {function} callback The function to decorate
	 * @returns {function} a function that has been decorated.
	 */
	Q.promised = promised;
	function promised(callback) {
	    return function () {
	        return spread([this, all(arguments)], function (self, args) {
	            return callback.apply(self, args);
	        });
	    };
	}

	/**
	 * sends a message to a value in a future turn
	 * @param object* the recipient
	 * @param op the name of the message operation, e.g., "when",
	 * @param args further arguments to be forwarded to the operation
	 * @returns result {Promise} a promise for the result of the operation
	 */
	Q.dispatch = dispatch;
	function dispatch(object, op, args) {
	    return Q(object).dispatch(op, args);
	}

	Promise.prototype.dispatch = function (op, args) {
	    var self = this;
	    var deferred = defer();
	    Q.nextTick(function () {
	        self.promiseDispatch(deferred.resolve, op, args);
	    });
	    return deferred.promise;
	};

	/**
	 * Gets the value of a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to get
	 * @return promise for the property value
	 */
	Q.get = function (object, key) {
	    return Q(object).dispatch("get", [key]);
	};

	Promise.prototype.get = function (key) {
	    return this.dispatch("get", [key]);
	};

	/**
	 * Sets the value of a property in a future turn.
	 * @param object    promise or immediate reference for object object
	 * @param name      name of property to set
	 * @param value     new value of property
	 * @return promise for the return value
	 */
	Q.set = function (object, key, value) {
	    return Q(object).dispatch("set", [key, value]);
	};

	Promise.prototype.set = function (key, value) {
	    return this.dispatch("set", [key, value]);
	};

	/**
	 * Deletes a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to delete
	 * @return promise for the return value
	 */
	Q.del = // XXX legacy
	Q["delete"] = function (object, key) {
	    return Q(object).dispatch("delete", [key]);
	};

	Promise.prototype.del = // XXX legacy
	Promise.prototype["delete"] = function (key) {
	    return this.dispatch("delete", [key]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param value     a value to post, typically an array of
	 *                  invocation arguments for promises that
	 *                  are ultimately backed with `resolve` values,
	 *                  as opposed to those backed with URLs
	 *                  wherein the posted value can be any
	 *                  JSON serializable object.
	 * @return promise for the return value
	 */
	// bound locally because it is used by other methods
	Q.mapply = // XXX As proposed by "Redsandro"
	Q.post = function (object, name, args) {
	    return Q(object).dispatch("post", [name, args]);
	};

	Promise.prototype.mapply = // XXX As proposed by "Redsandro"
	Promise.prototype.post = function (name, args) {
	    return this.dispatch("post", [name, args]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param ...args   array of invocation arguments
	 * @return promise for the return value
	 */
	Q.send = // XXX Mark Miller's proposed parlance
	Q.mcall = // XXX As proposed by "Redsandro"
	Q.invoke = function (object, name /*...args*/) {
	    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
	};

	Promise.prototype.send = // XXX Mark Miller's proposed parlance
	Promise.prototype.mcall = // XXX As proposed by "Redsandro"
	Promise.prototype.invoke = function (name /*...args*/) {
	    return this.dispatch("post", [name, array_slice(arguments, 1)]);
	};

	/**
	 * Applies the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param args      array of application arguments
	 */
	Q.fapply = function (object, args) {
	    return Q(object).dispatch("apply", [void 0, args]);
	};

	Promise.prototype.fapply = function (args) {
	    return this.dispatch("apply", [void 0, args]);
	};

	/**
	 * Calls the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q["try"] =
	Q.fcall = function (object /* ...args*/) {
	    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
	};

	Promise.prototype.fcall = function (/*...args*/) {
	    return this.dispatch("apply", [void 0, array_slice(arguments)]);
	};

	/**
	 * Binds the promised function, transforming return values into a fulfilled
	 * promise and thrown errors into a rejected one.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q.fbind = function (object /*...args*/) {
	    var promise = Q(object);
	    var args = array_slice(arguments, 1);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};
	Promise.prototype.fbind = function (/*...args*/) {
	    var promise = this;
	    var args = array_slice(arguments);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};

	/**
	 * Requests the names of the owned properties of a promised
	 * object in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @return promise for the keys of the eventually settled object
	 */
	Q.keys = function (object) {
	    return Q(object).dispatch("keys", []);
	};

	Promise.prototype.keys = function () {
	    return this.dispatch("keys", []);
	};

	/**
	 * Turns an array of promises into a promise for an array.  If any of
	 * the promises gets rejected, the whole array is rejected immediately.
	 * @param {Array*} an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns a promise for an array of the corresponding values
	 */
	// By Mark Miller
	// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
	Q.all = all;
	function all(promises) {
	    return when(promises, function (promises) {
	        var pendingCount = 0;
	        var deferred = defer();
	        array_reduce(promises, function (undefined, promise, index) {
	            var snapshot;
	            if (
	                isPromise(promise) &&
	                (snapshot = promise.inspect()).state === "fulfilled"
	            ) {
	                promises[index] = snapshot.value;
	            } else {
	                ++pendingCount;
	                when(
	                    promise,
	                    function (value) {
	                        promises[index] = value;
	                        if (--pendingCount === 0) {
	                            deferred.resolve(promises);
	                        }
	                    },
	                    deferred.reject,
	                    function (progress) {
	                        deferred.notify({ index: index, value: progress });
	                    }
	                );
	            }
	        }, void 0);
	        if (pendingCount === 0) {
	            deferred.resolve(promises);
	        }
	        return deferred.promise;
	    });
	}

	Promise.prototype.all = function () {
	    return all(this);
	};

	/**
	 * Returns the first resolved promise of an array. Prior rejected promises are
	 * ignored.  Rejects only if all promises are rejected.
	 * @param {Array*} an array containing values or promises for values
	 * @returns a promise fulfilled with the value of the first resolved promise,
	 * or a rejected promise if all promises are rejected.
	 */
	Q.any = any;

	function any(promises) {
	    if (promises.length === 0) {
	        return Q.resolve();
	    }

	    var deferred = Q.defer();
	    var pendingCount = 0;
	    array_reduce(promises, function (prev, current, index) {
	        var promise = promises[index];

	        pendingCount++;

	        when(promise, onFulfilled, onRejected, onProgress);
	        function onFulfilled(result) {
	            deferred.resolve(result);
	        }
	        function onRejected() {
	            pendingCount--;
	            if (pendingCount === 0) {
	                deferred.reject(new Error(
	                    "Can't get fulfillment value from any promise, all " +
	                    "promises were rejected."
	                ));
	            }
	        }
	        function onProgress(progress) {
	            deferred.notify({
	                index: index,
	                value: progress
	            });
	        }
	    }, undefined);

	    return deferred.promise;
	}

	Promise.prototype.any = function () {
	    return any(this);
	};

	/**
	 * Waits for all promises to be settled, either fulfilled or
	 * rejected.  This is distinct from `all` since that would stop
	 * waiting at the first rejection.  The promise returned by
	 * `allResolved` will never be rejected.
	 * @param promises a promise for an array (or an array) of promises
	 * (or values)
	 * @return a promise for an array of promises
	 */
	Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
	function allResolved(promises) {
	    return when(promises, function (promises) {
	        promises = array_map(promises, Q);
	        return when(all(array_map(promises, function (promise) {
	            return when(promise, noop, noop);
	        })), function () {
	            return promises;
	        });
	    });
	}

	Promise.prototype.allResolved = function () {
	    return allResolved(this);
	};

	/**
	 * @see Promise#allSettled
	 */
	Q.allSettled = allSettled;
	function allSettled(promises) {
	    return Q(promises).allSettled();
	}

	/**
	 * Turns an array of promises into a promise for an array of their states (as
	 * returned by `inspect`) when they have all settled.
	 * @param {Array[Any*]} values an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns {Array[State]} an array of states for the respective values.
	 */
	Promise.prototype.allSettled = function () {
	    return this.then(function (promises) {
	        return all(array_map(promises, function (promise) {
	            promise = Q(promise);
	            function regardless() {
	                return promise.inspect();
	            }
	            return promise.then(regardless, regardless);
	        }));
	    });
	};

	/**
	 * Captures the failure of a promise, giving an oportunity to recover
	 * with a callback.  If the given promise is fulfilled, the returned
	 * promise is fulfilled.
	 * @param {Any*} promise for something
	 * @param {Function} callback to fulfill the returned promise if the
	 * given promise is rejected
	 * @returns a promise for the return value of the callback
	 */
	Q.fail = // XXX legacy
	Q["catch"] = function (object, rejected) {
	    return Q(object).then(void 0, rejected);
	};

	Promise.prototype.fail = // XXX legacy
	Promise.prototype["catch"] = function (rejected) {
	    return this.then(void 0, rejected);
	};

	/**
	 * Attaches a listener that can respond to progress notifications from a
	 * promise's originating deferred. This listener receives the exact arguments
	 * passed to ``deferred.notify``.
	 * @param {Any*} promise for something
	 * @param {Function} callback to receive any progress notifications
	 * @returns the given promise, unchanged
	 */
	Q.progress = progress;
	function progress(object, progressed) {
	    return Q(object).then(void 0, void 0, progressed);
	}

	Promise.prototype.progress = function (progressed) {
	    return this.then(void 0, void 0, progressed);
	};

	/**
	 * Provides an opportunity to observe the settling of a promise,
	 * regardless of whether the promise is fulfilled or rejected.  Forwards
	 * the resolution to the returned promise when the callback is done.
	 * The callback can return a promise to defer completion.
	 * @param {Any*} promise
	 * @param {Function} callback to observe the resolution of the given
	 * promise, takes no arguments.
	 * @returns a promise for the resolution of the given promise when
	 * ``fin`` is done.
	 */
	Q.fin = // XXX legacy
	Q["finally"] = function (object, callback) {
	    return Q(object)["finally"](callback);
	};

	Promise.prototype.fin = // XXX legacy
	Promise.prototype["finally"] = function (callback) {
	    callback = Q(callback);
	    return this.then(function (value) {
	        return callback.fcall().then(function () {
	            return value;
	        });
	    }, function (reason) {
	        // TODO attempt to recycle the rejection with "this".
	        return callback.fcall().then(function () {
	            throw reason;
	        });
	    });
	};

	/**
	 * Terminates a chain of promises, forcing rejections to be
	 * thrown as exceptions.
	 * @param {Any*} promise at the end of a chain of promises
	 * @returns nothing
	 */
	Q.done = function (object, fulfilled, rejected, progress) {
	    return Q(object).done(fulfilled, rejected, progress);
	};

	Promise.prototype.done = function (fulfilled, rejected, progress) {
	    var onUnhandledError = function (error) {
	        // forward to a future turn so that ``when``
	        // does not catch it and turn it into a rejection.
	        Q.nextTick(function () {
	            makeStackTraceLong(error, promise);
	            if (Q.onerror) {
	                Q.onerror(error);
	            } else {
	                throw error;
	            }
	        });
	    };

	    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
	    var promise = fulfilled || rejected || progress ?
	        this.then(fulfilled, rejected, progress) :
	        this;

	    if (typeof process === "object" && process && process.domain) {
	        onUnhandledError = process.domain.bind(onUnhandledError);
	    }

	    promise.then(void 0, onUnhandledError);
	};

	/**
	 * Causes a promise to be rejected if it does not get fulfilled before
	 * some milliseconds time out.
	 * @param {Any*} promise
	 * @param {Number} milliseconds timeout
	 * @param {Any*} custom error message or Error object (optional)
	 * @returns a promise for the resolution of the given promise if it is
	 * fulfilled before the timeout, otherwise rejected.
	 */
	Q.timeout = function (object, ms, error) {
	    return Q(object).timeout(ms, error);
	};

	Promise.prototype.timeout = function (ms, error) {
	    var deferred = defer();
	    var timeoutId = setTimeout(function () {
	        if (!error || "string" === typeof error) {
	            error = new Error(error || "Timed out after " + ms + " ms");
	            error.code = "ETIMEDOUT";
	        }
	        deferred.reject(error);
	    }, ms);

	    this.then(function (value) {
	        clearTimeout(timeoutId);
	        deferred.resolve(value);
	    }, function (exception) {
	        clearTimeout(timeoutId);
	        deferred.reject(exception);
	    }, deferred.notify);

	    return deferred.promise;
	};

	/**
	 * Returns a promise for the given value (or promised value), some
	 * milliseconds after it resolved. Passes rejections immediately.
	 * @param {Any*} promise
	 * @param {Number} milliseconds
	 * @returns a promise for the resolution of the given promise after milliseconds
	 * time has elapsed since the resolution of the given promise.
	 * If the given promise rejects, that is passed immediately.
	 */
	Q.delay = function (object, timeout) {
	    if (timeout === void 0) {
	        timeout = object;
	        object = void 0;
	    }
	    return Q(object).delay(timeout);
	};

	Promise.prototype.delay = function (timeout) {
	    return this.then(function (value) {
	        var deferred = defer();
	        setTimeout(function () {
	            deferred.resolve(value);
	        }, timeout);
	        return deferred.promise;
	    });
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided as an array, and returns a promise.
	 *
	 *      Q.nfapply(FS.readFile, [__filename])
	 *      .then(function (content) {
	 *      })
	 *
	 */
	Q.nfapply = function (callback, args) {
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfapply = function (args) {
	    var deferred = defer();
	    var nodeArgs = array_slice(args);
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided individually, and returns a promise.
	 * @example
	 * Q.nfcall(FS.readFile, __filename)
	 * .then(function (content) {
	 * })
	 *
	 */
	Q.nfcall = function (callback /*...args*/) {
	    var args = array_slice(arguments, 1);
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfcall = function (/*...args*/) {
	    var nodeArgs = array_slice(arguments);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Wraps a NodeJS continuation passing function and returns an equivalent
	 * version that returns a promise.
	 * @example
	 * Q.nfbind(FS.readFile, __filename)("utf-8")
	 * .then(console.log)
	 * .done()
	 */
	Q.nfbind =
	Q.denodeify = function (callback /*...args*/) {
	    var baseArgs = array_slice(arguments, 1);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        Q(callback).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nfbind =
	Promise.prototype.denodeify = function (/*...args*/) {
	    var args = array_slice(arguments);
	    args.unshift(this);
	    return Q.denodeify.apply(void 0, args);
	};

	Q.nbind = function (callback, thisp /*...args*/) {
	    var baseArgs = array_slice(arguments, 2);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        function bound() {
	            return callback.apply(thisp, arguments);
	        }
	        Q(bound).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nbind = function (/*thisp, ...args*/) {
	    var args = array_slice(arguments, 0);
	    args.unshift(this);
	    return Q.nbind.apply(void 0, args);
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback with a given array of arguments, plus a provided callback.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param {Array} args arguments to pass to the method; the callback
	 * will be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nmapply = // XXX As proposed by "Redsandro"
	Q.npost = function (object, name, args) {
	    return Q(object).npost(name, args);
	};

	Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
	Promise.prototype.npost = function (name, args) {
	    var nodeArgs = array_slice(args || []);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback, forwarding the given variadic arguments, plus a provided
	 * callback argument.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param ...args arguments to pass to the method; the callback will
	 * be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nsend = // XXX Based on Mark Miller's proposed "send"
	Q.nmcall = // XXX Based on "Redsandro's" proposal
	Q.ninvoke = function (object, name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 2);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
	Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
	Promise.prototype.ninvoke = function (name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 1);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * If a function would like to support both Node continuation-passing-style and
	 * promise-returning-style, it can end its internal promise chain with
	 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
	 * elects to use a nodeback, the result will be sent there.  If they do not
	 * pass a nodeback, they will receive the result promise.
	 * @param object a result (or a promise for a result)
	 * @param {Function} nodeback a Node.js-style callback
	 * @returns either the promise or nothing
	 */
	Q.nodeify = nodeify;
	function nodeify(object, nodeback) {
	    return Q(object).nodeify(nodeback);
	}

	Promise.prototype.nodeify = function (nodeback) {
	    if (nodeback) {
	        this.then(function (value) {
	            Q.nextTick(function () {
	                nodeback(null, value);
	            });
	        }, function (error) {
	            Q.nextTick(function () {
	                nodeback(error);
	            });
	        });
	    } else {
	        return this;
	    }
	};

	Q.noConflict = function() {
	    throw new Error("Q.noConflict only works when Q is used as a global");
	};

	// All code before this point will be filtered from stack traces.
	var qEndingLine = captureLine();

	return Q;

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(75).setImmediate))

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210).crossfilter;


/***/ },

/***/ 48:
/***/ function(module, exports) {

	function crossfilter_identity(d) {
	  return d;
	}

	module.exports = crossfilter_identity;


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(2).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75).setImmediate, __webpack_require__(75).clearImmediate))

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var _ = __webpack_require__(32)

	var aggregators = {
	  // Collections
	  $sum: $sum,
	  $avg: $avg,
	  $max: $max,
	  $min: $min,

	  // Pickers
	  $count: $count,
	  $first: $first,
	  $last: $last,
	  $get: $get,
	  $nth: $get, // nth is same as using a get
	  $nthLast: $nthLast,
	  $nthPct: $nthPct,
	  $map: $map,
	}

	module.exports = {
	  makeValueAccessor: makeValueAccessor,
	  aggregators: aggregators,
	  extractKeyValOrArray: extractKeyValOrArray,
	  parseAggregatorParams: parseAggregatorParams,
	}
	  // This is used to build aggregation stacks for sub-reductio
	  // aggregations, or plucking values for use in filters from the data
	function makeValueAccessor(obj) {
	  if (typeof obj === 'string') {
	    if (isStringSyntax(obj)) {
	      obj = convertAggregatorString(obj)
	    } else {
	      // Must be a column key. Return an identity accessor
	      return obj
	    }
	  }
	  // Must be a column index. Return an identity accessor
	  if (typeof obj === 'number') {
	    return obj
	  }
	  // If it's an object, we need to build a custom value accessor function
	  if (_.isObject(obj)) {
	    return make()
	  }

	  function make() {
	    var stack = makeSubAggregationFunction(obj)
	    return function topStack(d) {
	      return stack(d)
	    }
	  }
	}

	// A recursive function that walks the aggregation stack and returns
	// a function. The returned function, when called, will recursively invoke
	// with the properties from the previous stack in reverse order
	function makeSubAggregationFunction(obj) {
	  // If its an object, either unwrap all of the properties as an
	  // array of keyValues, or unwrap the first keyValue set as an object
	  obj = _.isObject(obj) ? extractKeyValOrArray(obj) : obj

	  // Detect strings
	  if (_.isString(obj)) {
	    // If begins with a $, then we need to convert it over to a regular query object and analyze it again
	    if (isStringSyntax(obj)) {
	      return makeSubAggregationFunction(convertAggregatorString(obj))
	    }
	    // If normal string, then just return a an itentity accessor
	    return function identity(d) {
	      return d[obj]
	    }
	  }

	  // If an array, recurse into each item and return as a map
	  if (_.isArray(obj)) {
	    var subStack = _.map(obj, makeSubAggregationFunction)
	    return function getSubStack(d) {
	      return subStack.map(function (s) {
	        return s(d)
	      })
	    }
	  }

	  // If object, find the aggregation, and recurse into the value
	  if (obj.key) {
	    if (aggregators[obj.key]) {
	      var subAggregationFunction = makeSubAggregationFunction(obj.value)
	      return function getAggregation(d) {
	        return aggregators[obj.key](subAggregationFunction(d))
	      }
	    }
	    console.error('Could not find aggregration method', obj)
	  }

	  return []
	}

	function extractKeyValOrArray(obj) {
	  var keyVal
	  var values = []
	  for (var key in obj) {
	    if ({}.hasOwnProperty.call(obj, key)) {
	      keyVal = {
	        key: key,
	        value: obj[key]
	      }
	      var subObj = {}
	      subObj[key] = obj[key]
	      values.push(subObj)
	    }
	  }
	  return values.length > 1 ? values : keyVal
	}

	function isStringSyntax(str) {
	  return ['$', '('].indexOf(str.charAt(0)) > -1
	}

	function parseAggregatorParams(keyString) {
	  var params = []
	  var p1 = keyString.indexOf('(')
	  var p2 = keyString.indexOf(')')
	  var key = p1 > -1 ? keyString.substring(0, p1) : keyString
	  if (!aggregators[key]) {
	    return false
	  }
	  if (p1 > -1 && p2 > -1 && p2 > p1) {
	    params = keyString.substring(p1 + 1, p2).split(',')
	  }

	  return {
	    aggregator: aggregators[key],
	    params: params
	  }
	}

	function convertAggregatorString(keyString) {
	  // var obj = {} // obj is defined but not used

	  // 1. unwrap top parentheses
	  // 2. detect arrays

	  // parentheses
	  var outerParens = /\((.+)\)/g
	  // var innerParens = /\(([^\(\)]+)\)/g  // innerParens is defined but not used
	    // comma not in ()
	  var hasComma = /(?:\([^\(\)]*\))|(,)/g

	  return JSON.parse('{' + unwrapParensAndCommas(keyString) + '}')

	  function unwrapParensAndCommas(str) {
	    str = str.replace(' ', '')
	    return '"' + str.replace(outerParens, function (p, pr) {
	      if (hasComma.test(pr)) {
	        if (pr.charAt(0) === '$') {
	          return '":{"' + pr.replace(hasComma, function (p2/* , pr2 */) {
	            if (p2 === ',') {
	              return ',"'
	            }
	            return unwrapParensAndCommas(p2).trim()
	          }) + '}'
	        }
	        return ':["' + pr.replace(hasComma, function (/* p2 , pr2 */) {
	          return '","'
	        }) + '"]'
	      }
	    })
	  }
	}

	// Collection Aggregators

	function $sum(children) {
	  return children.reduce(function (a, b) {
	    return a + b
	  }, 0)
	}

	function $avg(children) {
	  return children.reduce(function (a, b) {
	    return a + b
	  }, 0) / children.length
	}

	function $max(children) {
	  return Math.max.apply(null, children)
	}

	function $min(children) {
	  return Math.min.apply(null, children)
	}

	function $count(children) {
	  return children.length
	}

	/* function $med(children) { // $med is defined but not used
	  children.sort(function(a, b) {
	    return a - b
	  })
	  var half = Math.floor(children.length / 2)
	  if (children.length % 2)
	    return children[half]
	  else
	    return (children[half - 1] + children[half]) / 2.0
	} */

	function $first(children) {
	  return children[0]
	}

	function $last(children) {
	  return children[children.length - 1]
	}

	function $get(children, n) {
	  return children[n]
	}

	function $nthLast(children, n) {
	  return children[children.length - n]
	}

	function $nthPct(children, n) {
	  return children[Math.round(children.length * (n / 100))]
	}

	function $map(children, n) {
	  return children.map(function (d) {
	    return d[n]
	  })
	}


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	var expressions = __webpack_require__(526)
	var aggregation = __webpack_require__(115)

	module.exports = function (service) {
	  return {
	    filter: filter,
	    filterAll: filterAll,
	    applyFilters: applyFilters,
	    makeFunction: makeFunction,
	    scanForDynamicFilters: scanForDynamicFilters
	  }

	  function filter(column, fil, isRange, replace) {
	    return getColumn(column)
	    .then(function (column) {
	      // Clone a copy of the new filters
	      var newFilters = _.assign({}, service.filters)
	      // Here we use the registered column key despite the filter key passed, just in case the filter key's ordering is ordered differently :)
	      var filterKey = column.key
	      if (column.complex === 'array') {
	        filterKey = JSON.stringify(column.key)
	      }
	      if (column.complex === 'function') {
	        filterKey = column.key.toString()
	      }
	      // Build the filter object
	      newFilters[filterKey] = buildFilterObject(fil, isRange, replace)

	      return applyFilters(newFilters)
	    })
	  }

	  function getColumn(column) {
	    var exists = service.column.find(column)
	    // If the filters dimension doesn't exist yet, try and create it
	    return Promise.try(function () {
	      if (!exists) {
	        return service.column({
	          key: column,
	          temporary: true,
	        })
	        .then(function () {
	          // It was able to be created, so retrieve and return it
	          return service.column.find(column)
	        })
	      }
	      // It exists, so just return what we found
	      return exists
	    })
	  }

	  function filterAll(fils) {
	    // If empty, remove all filters
	    if (!fils) {
	      service.columns.forEach(function (col) {
	        col.dimension.filterAll()
	      })
	      return applyFilters({})
	    }

	    // Clone a copy for the new filters
	    var newFilters = _.assign({}, service.filters)

	    var ds = _.map(fils, function (fil) {
	      return getColumn(fil.column)
	        .then(function (column) {
	          // Here we use the registered column key despite the filter key passed, just in case the filter key's ordering is ordered differently :)
	          var filterKey = column.complex ? JSON.stringify(column.key) : column.key
	          // Build the filter object
	          newFilters[filterKey] = buildFilterObject(fil.value, fil.isRange, fil.replace)
	        })
	    })

	    return Promise.all(ds)
	      .then(function () {
	        return applyFilters(newFilters)
	      })
	  }

	  function buildFilterObject(fil, isRange, replace) {
	    if (_.isUndefined(fil)) {
	      return false
	    }
	    if (_.isFunction(fil)) {
	      return {
	        value: fil,
	        function: fil,
	        replace: true,
	        type: 'function',
	      }
	    }
	    if (_.isObject(fil)) {
	      return {
	        value: fil,
	        function: makeFunction(fil),
	        replace: true,
	        type: 'function'
	      }
	    }
	    if (_.isArray(fil)) {
	      return {
	        value: fil,
	        replace: isRange || replace,
	        type: isRange ? 'range' : 'inclusive',
	      }
	    }
	    return {
	      value: fil,
	      replace: replace,
	      type: 'exact',
	    }
	  }

	  function applyFilters(newFilters) {
	    var ds = _.map(newFilters, function (fil, i) {
	      var existing = service.filters[i]
	        // Filters are the same, so no change is needed on this column
	      if (fil === existing) {
	        return Promise.resolve()
	      }
	      var column
	        // Retrieve complex columns by decoding the column key as json
	      if (i.charAt(0) === '[') {
	        column = service.column.find(JSON.parse(i))
	      } else {
	        // Retrieve the column normally
	        column = service.column.find(i)
	      }

	      // Toggling a filter value is a bit different from replacing them
	      if (fil && existing && !fil.replace) {
	        newFilters[i] = fil = toggleFilters(fil, existing)
	      }

	      // If no filter, remove everything from the dimension
	      if (!fil) {
	        return Promise.resolve(column.dimension.filterAll())
	      }
	      if (fil.type === 'exact') {
	        return Promise.resolve(column.dimension.filterExact(fil.value))
	      }
	      if (fil.type === 'range') {
	        return Promise.resolve(column.dimension.filterRange(fil.value))
	      }
	      if (fil.type === 'inclusive') {
	        return Promise.resolve(column.dimension.filterFunction(function (d) {
	          return fil.value.indexOf(d) > -1
	        }))
	      }
	      if (fil.type === 'function') {
	        return Promise.resolve(column.dimension.filterFunction(fil.function))
	      }
	      // By default if something craps up, just remove all filters
	      return Promise.resolve(column.dimension.filterAll())
	    })

	    return Promise.all(ds)
	      .then(function () {
	        // Save the new filters satate
	        service.filters = newFilters

	        // Pluck and remove falsey filters from the mix
	        var tryRemoval = []
	        _.forEach(service.filters, function (val, key) {
	          if (!val) {
	            tryRemoval.push({
	              key: key,
	              val: val,
	            })
	            delete service.filters[key]
	          }
	        })

	        // If any of those filters are the last dependency for the column, then remove the column
	        return Promise.all(_.map(tryRemoval, function (v) {
	          var column = service.column.find((v.key.charAt(0) === '[') ? JSON.parse(v.key) : v.key)
	          if (column.temporary && !column.dynamicReference) {
	            return service.clear(column.key)
	          }
	        }))
	      })
	      .then(function () {
	        // Call the filterListeners and wait for their return
	        return Promise.all(_.map(service.filterListeners, function (listener) {
	          return listener()
	        }))
	      })
	      .then(function () {
	        return service
	      })
	  }

	  function toggleFilters(fil, existing) {
	    // Exact from Inclusive
	    if (fil.type === 'exact' && existing.type === 'inclusive') {
	      fil.value = _.xor([fil.value], existing.value)
	    } else if (fil.type === 'inclusive' && existing.type === 'exact') { // Inclusive from Exact
	      fil.value = _.xor(fil.value, [existing.value])
	    } else if (fil.type === 'inclusive' && existing.type === 'inclusive') { // Inclusive / Inclusive Merge
	      fil.value = _.xor(fil.value, existing.value)
	    } else if (fil.type === 'exact' && existing.type === 'exact') { // Exact / Exact
	      // If the values are the same, remove the filter entirely
	      if (fil.value === existing.value) {
	        return false
	      }
	      // They they are different, make an array
	      fil.value = [fil.value, existing.value]
	    }

	    // Set the new type based on the merged values
	    if (!fil.value.length) {
	      fil = false
	    } else if (fil.value.length === 1) {
	      fil.type = 'exact'
	      fil.value = fil.value[0]
	    } else {
	      fil.type = 'inclusive'
	    }

	    return fil
	  }

	  function scanForDynamicFilters(query) {
	    // Here we check to see if there are any relative references to the raw data
	    // being used in the filter. If so, we need to build those dimensions and keep
	    // them updated so the filters can be rebuilt if needed
	    // The supported keys right now are: $column, $data
	    var columns = []
	    walk(query.filter)
	    return columns

	    function walk(obj) {
	      _.forEach(obj, function (val, key) {
	        // find the data references, if any
	        var ref = findDataReferences(val, key)
	        if (ref) {
	          columns.push(ref)
	        }
	          // if it's a string
	        if (_.isString(val)) {
	          ref = findDataReferences(null, val)
	          if (ref) {
	            columns.push(ref)
	          }
	        }
	        // If it's another object, keep looking
	        if (_.isObject(val)) {
	          walk(val)
	        }
	      })
	    }
	  }

	  function findDataReferences(val, key) {
	    // look for the $data string as a value
	    if (key === '$data') {
	      return true
	    }

	    // look for the $column key and it's value as a string
	    if (key && key === '$column') {
	      if (_.isString(val)) {
	        return val
	      }
	      console.warn('The value for filter "$column" must be a valid column key', val)
	      return false
	    }
	  }

	  function makeFunction(obj, isAggregation) {
	    var subGetters

	    // Detect raw $data reference
	    if (_.isString(obj)) {
	      var dataRef = findDataReferences(null, obj)
	      if (dataRef) {
	        var data = service.cf.all()
	        return function () {
	          return data
	        }
	      }
	    }

	    if (_.isString(obj) || _.isNumber(obj) || _.isBoolean(obj)) {
	      return function (d) {
	        if (typeof d === 'undefined') {
	          return obj
	        }
	        return expressions.$eq(d, function () {
	          return obj
	        })
	      }
	    }

	    // If an array, recurse into each item and return as a map
	    if (_.isArray(obj)) {
	      subGetters = _.map(obj, function (o) {
	        return makeFunction(o, isAggregation)
	      })
	      return function (d) {
	        return subGetters.map(function (s) {
	          return s(d)
	        })
	      }
	    }

	    // If object, return a recursion function that itself, returns the results of all of the object keys
	    if (_.isObject(obj)) {
	      subGetters = _.map(obj, function (val, key) {
	        // Get the child
	        var getSub = makeFunction(val, isAggregation)

	        // Detect raw $column references
	        var dataRef = findDataReferences(val, key)
	        if (dataRef) {
	          var column = service.column.find(dataRef)
	          var data = column.values
	          return function () {
	            return data
	          }
	        }

	        // If expression, pass the parentValue and the subGetter
	        if (expressions[key]) {
	          return function (d) {
	            return expressions[key](d, getSub)
	          }
	        }

	        var aggregatorObj = aggregation.parseAggregatorParams(key)
	        if (aggregatorObj) {
	          // Make sure that any further operations are for aggregations
	          // and not filters
	          isAggregation = true
	            // here we pass true to makeFunction which denotes that
	            // an aggregatino chain has started and to stop using $AND
	          getSub = makeFunction(val, isAggregation)
	            // If it's an aggregation object, be sure to pass in the children, and then any additional params passed into the aggregation string
	          return function () {
	            return aggregatorObj.aggregator.apply(null, [getSub()].concat(aggregatorObj.params))
	          }
	        }

	        // It must be a string then. Pluck that string key from parent, and pass it as the new value to the subGetter
	        return function (d) {
	          d = d[key]
	          return getSub(d, getSub)
	        }
	      })

	      // All object expressions are basically AND's
	      // Return AND with a map of the subGetters
	      if (isAggregation) {
	        if (subGetters.length === 1) {
	          return function (d) {
	            return subGetters[0](d)
	          }
	        }
	        return function (d) {
	          return _.map(subGetters, function (getSub) {
	            return getSub(d)
	          })
	        }
	      }
	      return function (d) {
	        return expressions.$and(d, function (d) {
	          return _.map(subGetters, function (getSub) {
	            return getSub(d)
	          })
	        })
	      }
	    }

	    console.log('no expression found for ', obj)
	    return false
	  }
	}


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter_identity = __webpack_require__(48);

	function heap_by(f) {

	  // Builds a binary heap within the specified array a[lo:hi]. The heap has the
	  // property such that the parent a[lo+i] is always less than or equal to its
	  // two children: a[lo+2*i+1] and a[lo+2*i+2].
	  function heap(a, lo, hi) {
	    var n = hi - lo,
	        i = (n >>> 1) + 1;
	    while (--i > 0) sift(a, i, n, lo);
	    return a;
	  }

	  // Sorts the specified array a[lo:hi] in descending order, assuming it is
	  // already a heap.
	  function sort(a, lo, hi) {
	    var n = hi - lo,
	        t;
	    while (--n > 0) t = a[lo], a[lo] = a[lo + n], a[lo + n] = t, sift(a, 1, n, lo);
	    return a;
	  }

	  // Sifts the element a[lo+i-1] down the heap, where the heap is the contiguous
	  // slice of array a[lo:lo+n]. This method can also be used to update the heap
	  // incrementally, without incurring the full cost of reconstructing the heap.
	  function sift(a, i, n, lo) {
	    var d = a[--lo + i],
	        x = f(d),
	        child;
	    while ((child = i << 1) <= n) {
	      if (child < n && f(a[lo + child]) > f(a[lo + child + 1])) child++;
	      if (x <= f(a[lo + child])) break;
	      a[lo + i] = a[lo + child];
	      i = child;
	    }
	    a[lo + i] = d;
	  }

	  heap.sort = sort;
	  return heap;
	}

	module.exports = heap_by(crossfilter_identity);
	module.exports.by = heap_by;


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter_identity = __webpack_require__(48);

	function insertionsort_by(f) {

	  function insertionsort(a, lo, hi) {
	    for (var i = lo + 1; i < hi; ++i) {
	      for (var j = i, t = a[i], x = f(t); j > lo && f(a[j - 1]) > x; --j) {
	        a[j] = a[j - 1];
	      }
	      a[j] = t;
	    }
	    return a;
	  }

	  return insertionsort;
	}

	module.exports = insertionsort_by(crossfilter_identity);
	module.exports.by = insertionsort_by;


/***/ },

/***/ 185:
/***/ function(module, exports) {

	var reductio_parameters = function() {
		return {
			order: false,
			avg: false,
			count: false,
			sum: false,
			exceptionAccessor: false,
			exceptionCount: false,
			exceptionSum: false,
			filter: false,
			valueList: false,
			median: false,
			histogramValue: false,
			min: false,
			max: false,
			histogramThresholds: false,
			std: false,
			sumOfSquares: false,
			values: false,
			nestKeys: false,
			aliasKeys: false,
			aliasPropKeys: false,
			groupAll: false,
			dataList: false,
			custom: false
		};
	};

	module.exports = reductio_parameters;


/***/ },

/***/ 206:
/***/ function(module, exports) {

	(function(exports){
	crossfilter.version = "1.3.12";
	function crossfilter_identity(d) {
	  return d;
	}
	crossfilter.permute = permute;

	function permute(array, index) {
	  for (var i = 0, n = index.length, copy = new Array(n); i < n; ++i) {
	    copy[i] = array[index[i]];
	  }
	  return copy;
	}
	var bisect = crossfilter.bisect = bisect_by(crossfilter_identity);

	bisect.by = bisect_by;

	function bisect_by(f) {

	  // Locate the insertion point for x in a to maintain sorted order. The
	  // arguments lo and hi may be used to specify a subset of the array which
	  // should be considered; by default the entire array is used. If x is already
	  // present in a, the insertion point will be before (to the left of) any
	  // existing entries. The return value is suitable for use as the first
	  // argument to `array.splice` assuming that a is already sorted.
	  //
	  // The returned insertion point i partitions the array a into two halves so
	  // that all v < x for v in a[lo:i] for the left side and all v >= x for v in
	  // a[i:hi] for the right side.
	  function bisectLeft(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (f(a[mid]) < x) lo = mid + 1;
	      else hi = mid;
	    }
	    return lo;
	  }

	  // Similar to bisectLeft, but returns an insertion point which comes after (to
	  // the right of) any existing entries of x in a.
	  //
	  // The returned insertion point i partitions the array into two halves so that
	  // all v <= x for v in a[lo:i] for the left side and all v > x for v in
	  // a[i:hi] for the right side.
	  function bisectRight(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (x < f(a[mid])) hi = mid;
	      else lo = mid + 1;
	    }
	    return lo;
	  }

	  bisectRight.right = bisectRight;
	  bisectRight.left = bisectLeft;
	  return bisectRight;
	}
	var heap = crossfilter.heap = heap_by(crossfilter_identity);

	heap.by = heap_by;

	function heap_by(f) {

	  // Builds a binary heap within the specified array a[lo:hi]. The heap has the
	  // property such that the parent a[lo+i] is always less than or equal to its
	  // two children: a[lo+2*i+1] and a[lo+2*i+2].
	  function heap(a, lo, hi) {
	    var n = hi - lo,
	        i = (n >>> 1) + 1;
	    while (--i > 0) sift(a, i, n, lo);
	    return a;
	  }

	  // Sorts the specified array a[lo:hi] in descending order, assuming it is
	  // already a heap.
	  function sort(a, lo, hi) {
	    var n = hi - lo,
	        t;
	    while (--n > 0) t = a[lo], a[lo] = a[lo + n], a[lo + n] = t, sift(a, 1, n, lo);
	    return a;
	  }

	  // Sifts the element a[lo+i-1] down the heap, where the heap is the contiguous
	  // slice of array a[lo:lo+n]. This method can also be used to update the heap
	  // incrementally, without incurring the full cost of reconstructing the heap.
	  function sift(a, i, n, lo) {
	    var d = a[--lo + i],
	        x = f(d),
	        child;
	    while ((child = i << 1) <= n) {
	      if (child < n && f(a[lo + child]) > f(a[lo + child + 1])) child++;
	      if (x <= f(a[lo + child])) break;
	      a[lo + i] = a[lo + child];
	      i = child;
	    }
	    a[lo + i] = d;
	  }

	  heap.sort = sort;
	  return heap;
	}
	var heapselect = crossfilter.heapselect = heapselect_by(crossfilter_identity);

	heapselect.by = heapselect_by;

	function heapselect_by(f) {
	  var heap = heap_by(f);

	  // Returns a new array containing the top k elements in the array a[lo:hi].
	  // The returned array is not sorted, but maintains the heap property. If k is
	  // greater than hi - lo, then fewer than k elements will be returned. The
	  // order of elements in a is unchanged by this operation.
	  function heapselect(a, lo, hi, k) {
	    var queue = new Array(k = Math.min(hi - lo, k)),
	        min,
	        i,
	        x,
	        d;

	    for (i = 0; i < k; ++i) queue[i] = a[lo++];
	    heap(queue, 0, k);

	    if (lo < hi) {
	      min = f(queue[0]);
	      do {
	        if (x = f(d = a[lo]) > min) {
	          queue[0] = d;
	          min = f(heap(queue, 0, k)[0]);
	        }
	      } while (++lo < hi);
	    }

	    return queue;
	  }

	  return heapselect;
	}
	var insertionsort = crossfilter.insertionsort = insertionsort_by(crossfilter_identity);

	insertionsort.by = insertionsort_by;

	function insertionsort_by(f) {

	  function insertionsort(a, lo, hi) {
	    for (var i = lo + 1; i < hi; ++i) {
	      for (var j = i, t = a[i], x = f(t); j > lo && f(a[j - 1]) > x; --j) {
	        a[j] = a[j - 1];
	      }
	      a[j] = t;
	    }
	    return a;
	  }

	  return insertionsort;
	}
	// Algorithm designed by Vladimir Yaroslavskiy.
	// Implementation based on the Dart project; see lib/dart/LICENSE for details.

	var quicksort = crossfilter.quicksort = quicksort_by(crossfilter_identity);

	quicksort.by = quicksort_by;

	function quicksort_by(f) {
	  var insertionsort = insertionsort_by(f);

	  function sort(a, lo, hi) {
	    return (hi - lo < quicksort_sizeThreshold
	        ? insertionsort
	        : quicksort)(a, lo, hi);
	  }

	  function quicksort(a, lo, hi) {
	    // Compute the two pivots by looking at 5 elements.
	    var sixth = (hi - lo) / 6 | 0,
	        i1 = lo + sixth,
	        i5 = hi - 1 - sixth,
	        i3 = lo + hi - 1 >> 1,  // The midpoint.
	        i2 = i3 - sixth,
	        i4 = i3 + sixth;

	    var e1 = a[i1], x1 = f(e1),
	        e2 = a[i2], x2 = f(e2),
	        e3 = a[i3], x3 = f(e3),
	        e4 = a[i4], x4 = f(e4),
	        e5 = a[i5], x5 = f(e5);

	    var t;

	    // Sort the selected 5 elements using a sorting network.
	    if (x1 > x2) t = e1, e1 = e2, e2 = t, t = x1, x1 = x2, x2 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;
	    if (x1 > x3) t = e1, e1 = e3, e3 = t, t = x1, x1 = x3, x3 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x1 > x4) t = e1, e1 = e4, e4 = t, t = x1, x1 = x4, x4 = t;
	    if (x3 > x4) t = e3, e3 = e4, e4 = t, t = x3, x3 = x4, x4 = t;
	    if (x2 > x5) t = e2, e2 = e5, e5 = t, t = x2, x2 = x5, x5 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;

	    var pivot1 = e2, pivotValue1 = x2,
	        pivot2 = e4, pivotValue2 = x4;

	    // e2 and e4 have been saved in the pivot variables. They will be written
	    // back, once the partitioning is finished.
	    a[i1] = e1;
	    a[i2] = a[lo];
	    a[i3] = e3;
	    a[i4] = a[hi - 1];
	    a[i5] = e5;

	    var less = lo + 1,   // First element in the middle partition.
	        great = hi - 2;  // Last element in the middle partition.

	    // Note that for value comparison, <, <=, >= and > coerce to a primitive via
	    // Object.prototype.valueOf; == and === do not, so in order to be consistent
	    // with natural order (such as for Date objects), we must do two compares.
	    var pivotsEqual = pivotValue1 <= pivotValue2 && pivotValue1 >= pivotValue2;
	    if (pivotsEqual) {

	      // Degenerated case where the partitioning becomes a dutch national flag
	      // problem.
	      //
	      // [ |  < pivot  | == pivot | unpartitioned | > pivot  | ]
	      //  ^             ^          ^             ^            ^
	      // left         less         k           great         right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1) for x in ]left, less[ : x < pivot.
	      //   2) for x in [less, k[ : x == pivot.
	      //   3) for x in ]great, right[ : x > pivot.
	      for (var k = less; k <= great; ++k) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else if (xk > pivotValue1) {

	          // Find the first element <= pivot in the range [k - 1, great] and
	          // put [:ek:] there. We know that such an element must exist:
	          // When k == less, then el3 (which is equal to pivot) lies in the
	          // interval. Otherwise a[k - 1] == pivot and the search stops at k-1.
	          // Note that in the latter case invariant 2 will be violated for a
	          // short amount of time. The invariant will be restored when the
	          // pivots are put into their final positions.
	          while (true) {
	            var greatValue = f(a[great]);
	            if (greatValue > pivotValue1) {
	              great--;
	              // This is the only location in the while-loop where a new
	              // iteration is started.
	              continue;
	            } else if (greatValue < pivotValue1) {
	              // Triple exchange.
	              a[k] = a[less];
	              a[less++] = a[great];
	              a[great--] = ek;
	              break;
	            } else {
	              a[k] = a[great];
	              a[great--] = ek;
	              // Note: if great < k then we will exit the outer loop and fix
	              // invariant 2 (which we just violated).
	              break;
	            }
	          }
	        }
	      }
	    } else {

	      // We partition the list into three parts:
	      //  1. < pivot1
	      //  2. >= pivot1 && <= pivot2
	      //  3. > pivot2
	      //
	      // During the loop we have:
	      // [ | < pivot1 | >= pivot1 && <= pivot2 | unpartitioned  | > pivot2  | ]
	      //  ^            ^                        ^              ^             ^
	      // left         less                     k              great        right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1. for x in ]left, less[ : x < pivot1
	      //   2. for x in [less, k[ : pivot1 <= x && x <= pivot2
	      //   3. for x in ]great, right[ : x > pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else {
	          if (xk > pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue > pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] <= pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] >= pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // Move pivots into their final positions.
	    // We shrunk the list from both sides (a[left] and a[right] have
	    // meaningless values in them) and now we move elements from the first
	    // and third partition into these locations so that we can store the
	    // pivots.
	    a[lo] = a[less - 1];
	    a[less - 1] = pivot1;
	    a[hi - 1] = a[great + 1];
	    a[great + 1] = pivot2;

	    // The list is now partitioned into three partitions:
	    // [ < pivot1   | >= pivot1 && <= pivot2   |  > pivot2   ]
	    //  ^            ^                        ^             ^
	    // left         less                     great        right

	    // Recursive descent. (Don't include the pivot values.)
	    sort(a, lo, less - 1);
	    sort(a, great + 2, hi);

	    if (pivotsEqual) {
	      // All elements in the second partition are equal to the pivot. No
	      // need to sort them.
	      return a;
	    }

	    // In theory it should be enough to call _doSort recursively on the second
	    // partition.
	    // The Android source however removes the pivot elements from the recursive
	    // call if the second partition is too large (more than 2/3 of the list).
	    if (less < i1 && great > i5) {
	      var lessValue, greatValue;
	      while ((lessValue = f(a[less])) <= pivotValue1 && lessValue >= pivotValue1) ++less;
	      while ((greatValue = f(a[great])) <= pivotValue2 && greatValue >= pivotValue2) --great;

	      // Copy paste of the previous 3-way partitioning with adaptions.
	      //
	      // We partition the list into three parts:
	      //  1. == pivot1
	      //  2. > pivot1 && < pivot2
	      //  3. == pivot2
	      //
	      // During the loop we have:
	      // [ == pivot1 | > pivot1 && < pivot2 | unpartitioned  | == pivot2 ]
	      //              ^                      ^              ^
	      //            less                     k              great
	      //
	      // Invariants:
	      //   1. for x in [ *, less[ : x == pivot1
	      //   2. for x in [less, k[ : pivot1 < x && x < pivot2
	      //   3. for x in ]great, * ] : x == pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk <= pivotValue1 && xk >= pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          less++;
	        } else {
	          if (xk <= pivotValue2 && xk >= pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue <= pivotValue2 && greatValue >= pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] < pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] == pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // The second partition has now been cleared of pivot elements and looks
	    // as follows:
	    // [  *  |  > pivot1 && < pivot2  | * ]
	    //        ^                      ^
	    //       less                  great
	    // Sort the second partition using recursive descent.

	    // The second partition looks as follows:
	    // [  *  |  >= pivot1 && <= pivot2  | * ]
	    //        ^                        ^
	    //       less                    great
	    // Simply sort it by recursive descent.

	    return sort(a, less, great + 1);
	  }

	  return sort;
	}

	var quicksort_sizeThreshold = 32;
	var crossfilter_array8 = crossfilter_arrayUntyped,
	    crossfilter_array16 = crossfilter_arrayUntyped,
	    crossfilter_array32 = crossfilter_arrayUntyped,
	    crossfilter_arrayLengthen = crossfilter_arrayLengthenUntyped,
	    crossfilter_arrayWiden = crossfilter_arrayWidenUntyped;

	if (typeof Uint8Array !== "undefined") {
	  crossfilter_array8 = function(n) { return new Uint8Array(n); };
	  crossfilter_array16 = function(n) { return new Uint16Array(n); };
	  crossfilter_array32 = function(n) { return new Uint32Array(n); };

	  crossfilter_arrayLengthen = function(array, length) {
	    if (array.length >= length) return array;
	    var copy = new array.constructor(length);
	    copy.set(array);
	    return copy;
	  };

	  crossfilter_arrayWiden = function(array, width) {
	    var copy;
	    switch (width) {
	      case 16: copy = crossfilter_array16(array.length); break;
	      case 32: copy = crossfilter_array32(array.length); break;
	      default: throw new Error("invalid array width!");
	    }
	    copy.set(array);
	    return copy;
	  };
	}

	function crossfilter_arrayUntyped(n) {
	  var array = new Array(n), i = -1;
	  while (++i < n) array[i] = 0;
	  return array;
	}

	function crossfilter_arrayLengthenUntyped(array, length) {
	  var n = array.length;
	  while (n < length) array[n++] = 0;
	  return array;
	}

	function crossfilter_arrayWidenUntyped(array, width) {
	  if (width > 32) throw new Error("invalid array width!");
	  return array;
	}
	function crossfilter_filterExact(bisect, value) {
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, value, 0, n), bisect.right(values, value, 0, n)];
	  };
	}

	function crossfilter_filterRange(bisect, range) {
	  var min = range[0],
	      max = range[1];
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, min, 0, n), bisect.left(values, max, 0, n)];
	  };
	}

	function crossfilter_filterAll(values) {
	  return [0, values.length];
	}
	function crossfilter_null() {
	  return null;
	}
	function crossfilter_zero() {
	  return 0;
	}
	function crossfilter_reduceIncrement(p) {
	  return p + 1;
	}

	function crossfilter_reduceDecrement(p) {
	  return p - 1;
	}

	function crossfilter_reduceAdd(f) {
	  return function(p, v) {
	    return p + +f(v);
	  };
	}

	function crossfilter_reduceSubtract(f) {
	  return function(p, v) {
	    return p - f(v);
	  };
	}
	exports.crossfilter = crossfilter;

	function crossfilter() {
	  var crossfilter = {
	    add: add,
	    remove: removeData,
	    dimension: dimension,
	    groupAll: groupAll,
	    size: size
	  };

	  var data = [], // the records
	      n = 0, // the number of records; data.length
	      m = 0, // a bit mask representing which dimensions are in use
	      M = 8, // number of dimensions that can fit in `filters`
	      filters = crossfilter_array8(0), // M bits per record; 1 is filtered out
	      filterListeners = [], // when the filters change
	      dataListeners = [], // when data is added
	      removeDataListeners = []; // when data is removed

	  // Adds the specified new records to this crossfilter.
	  function add(newData) {
	    var n0 = n,
	        n1 = newData.length;

	    // If there's actually new data to add…
	    // Merge the new data into the existing data.
	    // Lengthen the filter bitset to handle the new records.
	    // Notify listeners (dimensions and groups) that new data is available.
	    if (n1) {
	      data = data.concat(newData);
	      filters = crossfilter_arrayLengthen(filters, n += n1);
	      dataListeners.forEach(function(l) { l(newData, n0, n1); });
	    }

	    return crossfilter;
	  }

	  // Removes all records that match the current filters.
	  function removeData() {
	    var newIndex = crossfilter_index(n, n),
	        removed = [];
	    for (var i = 0, j = 0; i < n; ++i) {
	      if (filters[i]) newIndex[i] = j++;
	      else removed.push(i);
	    }

	    // Remove all matching records from groups.
	    filterListeners.forEach(function(l) { l(0, [], removed); });

	    // Update indexes.
	    removeDataListeners.forEach(function(l) { l(newIndex); });

	    // Remove old filters and data by overwriting.
	    for (var i = 0, j = 0, k; i < n; ++i) {
	      if (k = filters[i]) {
	        if (i !== j) filters[j] = k, data[j] = data[i];
	        ++j;
	      }
	    }
	    data.length = j;
	    while (n > j) filters[--n] = 0;
	  }

	  // Adds a new dimension with the specified value accessor function.
	  function dimension(value) {
	    var dimension = {
	      filter: filter,
	      filterExact: filterExact,
	      filterRange: filterRange,
	      filterFunction: filterFunction,
	      filterAll: filterAll,
	      top: top,
	      bottom: bottom,
	      group: group,
	      groupAll: groupAll,
	      dispose: dispose,
	      remove: dispose // for backwards-compatibility
	    };

	    var one = ~m & -~m, // lowest unset bit as mask, e.g., 00001000
	        zero = ~one, // inverted one, e.g., 11110111
	        values, // sorted, cached array
	        index, // value rank ↦ object id
	        newValues, // temporary array storing newly-added values
	        newIndex, // temporary array storing newly-added index
	        sort = quicksort_by(function(i) { return newValues[i]; }),
	        refilter = crossfilter_filterAll, // for recomputing filter
	        refilterFunction, // the custom filter function in use
	        indexListeners = [], // when data is added
	        dimensionGroups = [],
	        lo0 = 0,
	        hi0 = 0;

	    // Updating a dimension is a two-stage process. First, we must update the
	    // associated filters for the newly-added records. Once all dimensions have
	    // updated their filters, the groups are notified to update.
	    dataListeners.unshift(preAdd);
	    dataListeners.push(postAdd);

	    removeDataListeners.push(removeData);

	    // Incorporate any existing data into this dimension, and make sure that the
	    // filter bitset is wide enough to handle the new dimension.
	    m |= one;
	    if (M >= 32 ? !one : m & -(1 << M)) {
	      filters = crossfilter_arrayWiden(filters, M <<= 1);
	    }
	    preAdd(data, 0, n);
	    postAdd(data, 0, n);

	    // Incorporates the specified new records into this dimension.
	    // This function is responsible for updating filters, values, and index.
	    function preAdd(newData, n0, n1) {

	      // Permute new values into natural order using a sorted index.
	      newValues = newData.map(value);
	      newIndex = sort(crossfilter_range(n1), 0, n1);
	      newValues = permute(newValues, newIndex);

	      // Bisect newValues to determine which new records are selected.
	      var bounds = refilter(newValues), lo1 = bounds[0], hi1 = bounds[1], i;
	      if (refilterFunction) {
	        for (i = 0; i < n1; ++i) {
	          if (!refilterFunction(newValues[i], i)) filters[newIndex[i] + n0] |= one;
	        }
	      } else {
	        for (i = 0; i < lo1; ++i) filters[newIndex[i] + n0] |= one;
	        for (i = hi1; i < n1; ++i) filters[newIndex[i] + n0] |= one;
	      }

	      // If this dimension previously had no data, then we don't need to do the
	      // more expensive merge operation; use the new values and index as-is.
	      if (!n0) {
	        values = newValues;
	        index = newIndex;
	        lo0 = lo1;
	        hi0 = hi1;
	        return;
	      }

	      var oldValues = values,
	          oldIndex = index,
	          i0 = 0,
	          i1 = 0;

	      // Otherwise, create new arrays into which to merge new and old.
	      values = new Array(n);
	      index = crossfilter_index(n, n);

	      // Merge the old and new sorted values, and old and new index.
	      for (i = 0; i0 < n0 && i1 < n1; ++i) {
	        if (oldValues[i0] < newValues[i1]) {
	          values[i] = oldValues[i0];
	          index[i] = oldIndex[i0++];
	        } else {
	          values[i] = newValues[i1];
	          index[i] = newIndex[i1++] + n0;
	        }
	      }

	      // Add any remaining old values.
	      for (; i0 < n0; ++i0, ++i) {
	        values[i] = oldValues[i0];
	        index[i] = oldIndex[i0];
	      }

	      // Add any remaining new values.
	      for (; i1 < n1; ++i1, ++i) {
	        values[i] = newValues[i1];
	        index[i] = newIndex[i1] + n0;
	      }

	      // Bisect again to recompute lo0 and hi0.
	      bounds = refilter(values), lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // When all filters have updated, notify index listeners of the new values.
	    function postAdd(newData, n0, n1) {
	      indexListeners.forEach(function(l) { l(newValues, newIndex, n0, n1); });
	      newValues = newIndex = null;
	    }

	    function removeData(reIndex) {
	      for (var i = 0, j = 0, k; i < n; ++i) {
	        if (filters[k = index[i]]) {
	          if (i !== j) values[j] = values[i];
	          index[j] = reIndex[k];
	          ++j;
	        }
	      }
	      values.length = j;
	      while (j < n) index[j++] = 0;

	      // Bisect again to recompute lo0 and hi0.
	      var bounds = refilter(values);
	      lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // Updates the selected values based on the specified bounds [lo, hi].
	    // This implementation is used by all the public filter methods.
	    function filterIndexBounds(bounds) {
	      var lo1 = bounds[0],
	          hi1 = bounds[1];

	      if (refilterFunction) {
	        refilterFunction = null;
	        filterIndexFunction(function(d, i) { return lo1 <= i && i < hi1; });
	        lo0 = lo1;
	        hi0 = hi1;
	        return dimension;
	      }

	      var i,
	          j,
	          k,
	          added = [],
	          removed = [];

	      // Fast incremental update based on previous lo index.
	      if (lo1 < lo0) {
	        for (i = lo1, j = Math.min(lo0, hi1); i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          added.push(k);
	        }
	      } else if (lo1 > lo0) {
	        for (i = lo0, j = Math.min(lo1, hi0); i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          removed.push(k);
	        }
	      }

	      // Fast incremental update based on previous hi index.
	      if (hi1 > hi0) {
	        for (i = Math.max(lo1, hi0), j = hi1; i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          added.push(k);
	        }
	      } else if (hi1 < hi0) {
	        for (i = Math.max(lo0, hi1), j = hi0; i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          removed.push(k);
	        }
	      }

	      lo0 = lo1;
	      hi0 = hi1;
	      filterListeners.forEach(function(l) { l(one, added, removed); });
	      return dimension;
	    }

	    // Filters this dimension using the specified range, value, or null.
	    // If the range is null, this is equivalent to filterAll.
	    // If the range is an array, this is equivalent to filterRange.
	    // Otherwise, this is equivalent to filterExact.
	    function filter(range) {
	      return range == null
	          ? filterAll() : Array.isArray(range)
	          ? filterRange(range) : typeof range === "function"
	          ? filterFunction(range)
	          : filterExact(range);
	    }

	    // Filters this dimension to select the exact value.
	    function filterExact(value) {
	      return filterIndexBounds((refilter = crossfilter_filterExact(bisect, value))(values));
	    }

	    // Filters this dimension to select the specified range [lo, hi].
	    // The lower bound is inclusive, and the upper bound is exclusive.
	    function filterRange(range) {
	      return filterIndexBounds((refilter = crossfilter_filterRange(bisect, range))(values));
	    }

	    // Clears any filters on this dimension.
	    function filterAll() {
	      return filterIndexBounds((refilter = crossfilter_filterAll)(values));
	    }

	    // Filters this dimension using an arbitrary function.
	    function filterFunction(f) {
	      refilter = crossfilter_filterAll;

	      filterIndexFunction(refilterFunction = f);

	      lo0 = 0;
	      hi0 = n;

	      return dimension;
	    }

	    function filterIndexFunction(f) {
	      var i,
	          k,
	          x,
	          added = [],
	          removed = [];

	      for (i = 0; i < n; ++i) {
	        if (!(filters[k = index[i]] & one) ^ !!(x = f(values[i], i))) {
	          if (x) filters[k] &= zero, added.push(k);
	          else filters[k] |= one, removed.push(k);
	        }
	      }
	      filterListeners.forEach(function(l) { l(one, added, removed); });
	    }

	    // Returns the top K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function top(k) {
	      var array = [],
	          i = hi0,
	          j;

	      while (--i >= lo0 && k > 0) {
	        if (!filters[j = index[i]]) {
	          array.push(data[j]);
	          --k;
	        }
	      }

	      return array;
	    }

	    // Returns the bottom K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function bottom(k) {
	      var array = [],
	          i = lo0,
	          j;

	      while (i < hi0 && k > 0) {
	        if (!filters[j = index[i]]) {
	          array.push(data[j]);
	          --k;
	        }
	        i++;
	      }

	      return array;
	    }

	    // Adds a new group to this dimension, using the specified key function.
	    function group(key) {
	      var group = {
	        top: top,
	        all: all,
	        reduce: reduce,
	        reduceCount: reduceCount,
	        reduceSum: reduceSum,
	        order: order,
	        orderNatural: orderNatural,
	        size: size,
	        dispose: dispose,
	        remove: dispose // for backwards-compatibility
	      };

	      // Ensure that this group will be removed when the dimension is removed.
	      dimensionGroups.push(group);

	      var groups, // array of {key, value}
	          groupIndex, // object id ↦ group id
	          groupWidth = 8,
	          groupCapacity = crossfilter_capacity(groupWidth),
	          k = 0, // cardinality
	          select,
	          heap,
	          reduceAdd,
	          reduceRemove,
	          reduceInitial,
	          update = crossfilter_null,
	          reset = crossfilter_null,
	          resetNeeded = true,
	          groupAll = key === crossfilter_null;

	      if (arguments.length < 1) key = crossfilter_identity;

	      // The group listens to the crossfilter for when any dimension changes, so
	      // that it can update the associated reduce values. It must also listen to
	      // the parent dimension for when data is added, and compute new keys.
	      filterListeners.push(update);
	      indexListeners.push(add);
	      removeDataListeners.push(removeData);

	      // Incorporate any existing data into the grouping.
	      add(values, index, 0, n);

	      // Incorporates the specified new values into this group.
	      // This function is responsible for updating groups and groupIndex.
	      function add(newValues, newIndex, n0, n1) {
	        var oldGroups = groups,
	            reIndex = crossfilter_index(k, groupCapacity),
	            add = reduceAdd,
	            initial = reduceInitial,
	            k0 = k, // old cardinality
	            i0 = 0, // index of old group
	            i1 = 0, // index of new record
	            j, // object id
	            g0, // old group
	            x0, // old key
	            x1, // new key
	            g, // group to add
	            x; // key of group to add

	        // If a reset is needed, we don't need to update the reduce values.
	        if (resetNeeded) add = initial = crossfilter_null;

	        // Reset the new groups (k is a lower bound).
	        // Also, make sure that groupIndex exists and is long enough.
	        groups = new Array(k), k = 0;
	        groupIndex = k0 > 1 ? crossfilter_arrayLengthen(groupIndex, n) : crossfilter_index(n, groupCapacity);

	        // Get the first old key (x0 of g0), if it exists.
	        if (k0) x0 = (g0 = oldGroups[0]).key;

	        // Find the first new key (x1), skipping NaN keys.
	        while (i1 < n1 && !((x1 = key(newValues[i1])) >= x1)) ++i1;

	        // While new keys remain…
	        while (i1 < n1) {

	          // Determine the lesser of the two current keys; new and old.
	          // If there are no old keys remaining, then always add the new key.
	          if (g0 && x0 <= x1) {
	            g = g0, x = x0;

	            // Record the new index of the old group.
	            reIndex[i0] = k;

	            // Retrieve the next old key.
	            if (g0 = oldGroups[++i0]) x0 = g0.key;
	          } else {
	            g = {key: x1, value: initial()}, x = x1;
	          }

	          // Add the lesser group.
	          groups[k] = g;

	          // Add any selected records belonging to the added group, while
	          // advancing the new key and populating the associated group index.
	          while (!(x1 > x)) {
	            groupIndex[j = newIndex[i1] + n0] = k;
	            if (!(filters[j] & zero)) g.value = add(g.value, data[j]);
	            if (++i1 >= n1) break;
	            x1 = key(newValues[i1]);
	          }

	          groupIncrement();
	        }

	        // Add any remaining old groups that were greater than all new keys.
	        // No incremental reduce is needed; these groups have no new records.
	        // Also record the new index of the old group.
	        while (i0 < k0) {
	          groups[reIndex[i0] = k] = oldGroups[i0++];
	          groupIncrement();
	        }

	        // If we added any new groups before any old groups,
	        // update the group index of all the old records.
	        if (k > i0) for (i0 = 0; i0 < n0; ++i0) {
	          groupIndex[i0] = reIndex[groupIndex[i0]];
	        }

	        // Modify the update and reset behavior based on the cardinality.
	        // If the cardinality is less than or equal to one, then the groupIndex
	        // is not needed. If the cardinality is zero, then there are no records
	        // and therefore no groups to update or reset. Note that we also must
	        // change the registered listener to point to the new method.
	        j = filterListeners.indexOf(update);
	        if (k > 1) {
	          update = updateMany;
	          reset = resetMany;
	        } else {
	          if (!k && groupAll) {
	            k = 1;
	            groups = [{key: null, value: initial()}];
	          }
	          if (k === 1) {
	            update = updateOne;
	            reset = resetOne;
	          } else {
	            update = crossfilter_null;
	            reset = crossfilter_null;
	          }
	          groupIndex = null;
	        }
	        filterListeners[j] = update;

	        // Count the number of added groups,
	        // and widen the group index as needed.
	        function groupIncrement() {
	          if (++k === groupCapacity) {
	            reIndex = crossfilter_arrayWiden(reIndex, groupWidth <<= 1);
	            groupIndex = crossfilter_arrayWiden(groupIndex, groupWidth);
	            groupCapacity = crossfilter_capacity(groupWidth);
	          }
	        }
	      }

	      function removeData() {
	        if (k > 1) {
	          var oldK = k,
	              oldGroups = groups,
	              seenGroups = crossfilter_index(oldK, oldK);

	          // Filter out non-matches by copying matching group index entries to
	          // the beginning of the array.
	          for (var i = 0, j = 0; i < n; ++i) {
	            if (filters[i]) {
	              seenGroups[groupIndex[j] = groupIndex[i]] = 1;
	              ++j;
	            }
	          }

	          // Reassemble groups including only those groups that were referred
	          // to by matching group index entries.  Note the new group index in
	          // seenGroups.
	          groups = [], k = 0;
	          for (i = 0; i < oldK; ++i) {
	            if (seenGroups[i]) {
	              seenGroups[i] = k++;
	              groups.push(oldGroups[i]);
	            }
	          }

	          if (k > 1) {
	            // Reindex the group index using seenGroups to find the new index.
	            for (var i = 0; i < j; ++i) groupIndex[i] = seenGroups[groupIndex[i]];
	          } else {
	            groupIndex = null;
	          }
	          filterListeners[filterListeners.indexOf(update)] = k > 1
	              ? (reset = resetMany, update = updateMany)
	              : k === 1 ? (reset = resetOne, update = updateOne)
	              : reset = update = crossfilter_null;
	        } else if (k === 1) {
	          if (groupAll) return;
	          for (var i = 0; i < n; ++i) if (filters[i]) return;
	          groups = [], k = 0;
	          filterListeners[filterListeners.indexOf(update)] =
	          update = reset = crossfilter_null;
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is greater than 1.
	      function updateMany(filterOne, added, removed) {
	        if (filterOne === one || resetNeeded) return;

	        var i,
	            k,
	            n,
	            g;

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (!(filters[k = added[i]] & zero)) {
	            g = groups[groupIndex[k]];
	            g.value = reduceAdd(g.value, data[k]);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if ((filters[k = removed[i]] & zero) === filterOne) {
	            g = groups[groupIndex[k]];
	            g.value = reduceRemove(g.value, data[k]);
	          }
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is 1.
	      function updateOne(filterOne, added, removed) {
	        if (filterOne === one || resetNeeded) return;

	        var i,
	            k,
	            n,
	            g = groups[0];

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (!(filters[k = added[i]] & zero)) {
	            g.value = reduceAdd(g.value, data[k]);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if ((filters[k = removed[i]] & zero) === filterOne) {
	            g.value = reduceRemove(g.value, data[k]);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is greater than 1.
	      function resetMany() {
	        var i,
	            g;

	        // Reset all group values.
	        for (i = 0; i < k; ++i) {
	          groups[i].value = reduceInitial();
	        }

	        // Add any selected records.
	        for (i = 0; i < n; ++i) {
	          if (!(filters[i] & zero)) {
	            g = groups[groupIndex[i]];
	            g.value = reduceAdd(g.value, data[i]);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is 1.
	      function resetOne() {
	        var i,
	            g = groups[0];

	        // Reset the singleton group values.
	        g.value = reduceInitial();

	        // Add any selected records.
	        for (i = 0; i < n; ++i) {
	          if (!(filters[i] & zero)) {
	            g.value = reduceAdd(g.value, data[i]);
	          }
	        }
	      }

	      // Returns the array of group values, in the dimension's natural order.
	      function all() {
	        if (resetNeeded) reset(), resetNeeded = false;
	        return groups;
	      }

	      // Returns a new array containing the top K group values, in reduce order.
	      function top(k) {
	        var top = select(all(), 0, groups.length, k);
	        return heap.sort(top, 0, top.length);
	      }

	      // Sets the reduce behavior for this group to use the specified functions.
	      // This method lazily recomputes the reduce values, waiting until needed.
	      function reduce(add, remove, initial) {
	        reduceAdd = add;
	        reduceRemove = remove;
	        reduceInitial = initial;
	        resetNeeded = true;
	        return group;
	      }

	      // A convenience method for reducing by count.
	      function reduceCount() {
	        return reduce(crossfilter_reduceIncrement, crossfilter_reduceDecrement, crossfilter_zero);
	      }

	      // A convenience method for reducing by sum(value).
	      function reduceSum(value) {
	        return reduce(crossfilter_reduceAdd(value), crossfilter_reduceSubtract(value), crossfilter_zero);
	      }

	      // Sets the reduce order, using the specified accessor.
	      function order(value) {
	        select = heapselect_by(valueOf);
	        heap = heap_by(valueOf);
	        function valueOf(d) { return value(d.value); }
	        return group;
	      }

	      // A convenience method for natural ordering by reduce value.
	      function orderNatural() {
	        return order(crossfilter_identity);
	      }

	      // Returns the cardinality of this group, irrespective of any filters.
	      function size() {
	        return k;
	      }

	      // Removes this group and associated event listeners.
	      function dispose() {
	        var i = filterListeners.indexOf(update);
	        if (i >= 0) filterListeners.splice(i, 1);
	        i = indexListeners.indexOf(add);
	        if (i >= 0) indexListeners.splice(i, 1);
	        i = removeDataListeners.indexOf(removeData);
	        if (i >= 0) removeDataListeners.splice(i, 1);
	        return group;
	      }

	      return reduceCount().orderNatural();
	    }

	    // A convenience function for generating a singleton group.
	    function groupAll() {
	      var g = group(crossfilter_null), all = g.all;
	      delete g.all;
	      delete g.top;
	      delete g.order;
	      delete g.orderNatural;
	      delete g.size;
	      g.value = function() { return all()[0].value; };
	      return g;
	    }

	    // Removes this dimension and associated groups and event listeners.
	    function dispose() {
	      dimensionGroups.forEach(function(group) { group.dispose(); });
	      var i = dataListeners.indexOf(preAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = dataListeners.indexOf(postAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = removeDataListeners.indexOf(removeData);
	      if (i >= 0) removeDataListeners.splice(i, 1);
	      m &= zero;
	      return filterAll();
	    }

	    return dimension;
	  }

	  // A convenience method for groupAll on a dummy dimension.
	  // This implementation can be optimized since it always has cardinality 1.
	  function groupAll() {
	    var group = {
	      reduce: reduce,
	      reduceCount: reduceCount,
	      reduceSum: reduceSum,
	      value: value,
	      dispose: dispose,
	      remove: dispose // for backwards-compatibility
	    };

	    var reduceValue,
	        reduceAdd,
	        reduceRemove,
	        reduceInitial,
	        resetNeeded = true;

	    // The group listens to the crossfilter for when any dimension changes, so
	    // that it can update the reduce value. It must also listen to the parent
	    // dimension for when data is added.
	    filterListeners.push(update);
	    dataListeners.push(add);

	    // For consistency; actually a no-op since resetNeeded is true.
	    add(data, 0, n);

	    // Incorporates the specified new values into this group.
	    function add(newData, n0) {
	      var i;

	      if (resetNeeded) return;

	      // Add the added values.
	      for (i = n0; i < n; ++i) {
	        if (!filters[i]) {
	          reduceValue = reduceAdd(reduceValue, data[i]);
	        }
	      }
	    }

	    // Reduces the specified selected or deselected records.
	    function update(filterOne, added, removed) {
	      var i,
	          k,
	          n;

	      if (resetNeeded) return;

	      // Add the added values.
	      for (i = 0, n = added.length; i < n; ++i) {
	        if (!filters[k = added[i]]) {
	          reduceValue = reduceAdd(reduceValue, data[k]);
	        }
	      }

	      // Remove the removed values.
	      for (i = 0, n = removed.length; i < n; ++i) {
	        if (filters[k = removed[i]] === filterOne) {
	          reduceValue = reduceRemove(reduceValue, data[k]);
	        }
	      }
	    }

	    // Recomputes the group reduce value from scratch.
	    function reset() {
	      var i;

	      reduceValue = reduceInitial();

	      for (i = 0; i < n; ++i) {
	        if (!filters[i]) {
	          reduceValue = reduceAdd(reduceValue, data[i]);
	        }
	      }
	    }

	    // Sets the reduce behavior for this group to use the specified functions.
	    // This method lazily recomputes the reduce value, waiting until needed.
	    function reduce(add, remove, initial) {
	      reduceAdd = add;
	      reduceRemove = remove;
	      reduceInitial = initial;
	      resetNeeded = true;
	      return group;
	    }

	    // A convenience method for reducing by count.
	    function reduceCount() {
	      return reduce(crossfilter_reduceIncrement, crossfilter_reduceDecrement, crossfilter_zero);
	    }

	    // A convenience method for reducing by sum(value).
	    function reduceSum(value) {
	      return reduce(crossfilter_reduceAdd(value), crossfilter_reduceSubtract(value), crossfilter_zero);
	    }

	    // Returns the computed reduce value.
	    function value() {
	      if (resetNeeded) reset(), resetNeeded = false;
	      return reduceValue;
	    }

	    // Removes this group and associated event listeners.
	    function dispose() {
	      var i = filterListeners.indexOf(update);
	      if (i >= 0) filterListeners.splice(i);
	      i = dataListeners.indexOf(add);
	      if (i >= 0) dataListeners.splice(i);
	      return group;
	    }

	    return reduceCount();
	  }

	  // Returns the number of records in this crossfilter, irrespective of any filters.
	  function size() {
	    return n;
	  }

	  return arguments.length
	      ? add(arguments[0])
	      : crossfilter;
	}

	// Returns an array of size n, big enough to store ids up to m.
	function crossfilter_index(n, m) {
	  return (m < 0x101
	      ? crossfilter_array8 : m < 0x10001
	      ? crossfilter_array16
	      : crossfilter_array32)(n);
	}

	// Constructs a new array of size n, with sequential values from 0 to n - 1.
	function crossfilter_range(n) {
	  var range = crossfilter_index(n, n);
	  for (var i = -1; ++i < n;) range[i] = i;
	  return range;
	}

	function crossfilter_capacity(w) {
	  return w === 8
	      ? 0x100 : w === 16
	      ? 0x10000
	      : 0x100000000;
	}
	})(typeof exports !== 'undefined' && exports || this);


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(206).crossfilter;


/***/ },

/***/ 208:
/***/ function(module, exports) {

	if (typeof Uint8Array !== "undefined") {
	  crossfilter_array8 = function(n) { return new Uint8Array(n); };
	  crossfilter_array16 = function(n) { return new Uint16Array(n); };
	  crossfilter_array32 = function(n) { return new Uint32Array(n); };

	  crossfilter_arrayLengthen = function(array, length) {
	    if (array.length >= length) return array;
	    var copy = new array.constructor(length);
	    copy.set(array);
	    return copy;
	  };

	  crossfilter_arrayWiden = function(array, width) {
	    var copy;
	    switch (width) {
	      case 16: copy = crossfilter_array16(array.length); break;
	      case 32: copy = crossfilter_array32(array.length); break;
	      default: throw new Error("invalid array width!");
	    }
	    copy.set(array);
	    return copy;
	  };
	}

	function crossfilter_arrayUntyped(n) {
	  var array = new Array(n), i = -1;
	  while (++i < n) array[i] = 0;
	  return array;
	}

	function crossfilter_arrayLengthenUntyped(array, length) {
	  var n = array.length;
	  while (n < length) array[n++] = 0;
	  return array;
	}

	function crossfilter_arrayWidenUntyped(array, width) {
	  if (width > 32) throw new Error("invalid array width!");
	  return array;
	}

	// An arbitrarily-wide array of bitmasks
	function crossfilter_bitarray(n) {
	  this.length = n;
	  this.subarrays = 1;
	  this.width = 8;
	  this.masks = {
	    0: 0
	  }

	  this[0] = crossfilter_array8(n);
	}

	crossfilter_bitarray.prototype.lengthen = function(n) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    this[i] = crossfilter_arrayLengthen(this[i], n);
	  }
	  this.length = n;
	};

	// Reserve a new bit index in the array, returns {offset, one}
	crossfilter_bitarray.prototype.add = function() {
	  var m, w, one, i, len;

	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    m = this.masks[i];
	    w = this.width - (32 * i);
	    one = ~m & -~m;

	    if (w >= 32 && !one) {
	      continue;
	    }

	    if (w < 32 && (one & (1 << w))) {
	      // widen this subarray
	      this[i] = crossfilter_arrayWiden(this[i], w <<= 1);
	      this.width = 32 * i + w;
	    }

	    this.masks[i] |= one;

	    return {
	      offset: i,
	      one: one
	    };
	  }

	  // add a new subarray
	  this[this.subarrays] = crossfilter_array8(this.length);
	  this.masks[this.subarrays] = 1;
	  this.width += 8;
	  return {
	    offset: this.subarrays++,
	    one: 1
	  };
	};

	// Copy record from index src to index dest
	crossfilter_bitarray.prototype.copy = function(dest, src) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    this[i][dest] = this[i][src];
	  }
	};

	// Truncate the array to the given length
	crossfilter_bitarray.prototype.truncate = function(n) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    for (var j = this.length - 1; j >= n; j--) {
	      this[i][j] = 0;
	    }
	    this[i].length = n;
	  }
	  this.length = n;
	};

	// Checks that all bits for the given index are 0
	crossfilter_bitarray.prototype.zero = function(n) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    if (this[i][n]) {
	      return false;
	    }
	  }
	  return true;
	};

	// Checks that all bits for the given index are 0 except for possibly one
	crossfilter_bitarray.prototype.zeroExcept = function(n, offset, zero) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    if (i === offset ? this[i][n] & zero : this[i][n]) {
	      return false;
	    }
	  }
	  return true;
	};

	// Checks that all bits for the given indez are 0 except for the specified mask.
	// The mask should be an array of the same size as the filter subarrays width.
	crossfilter_bitarray.prototype.zeroExceptMask = function(n, mask) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    if (this[i][n] & mask[i]) {
	      return false;
	    }
	  }
	  return true;
	}

	// Checks that only the specified bit is set for the given index
	crossfilter_bitarray.prototype.only = function(n, offset, one) {
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    if (this[i][n] != (i === offset ? one : 0)) {
	      return false;
	    }
	  }
	  return true;
	};

	// Checks that only the specified bit is set for the given index except for possibly one other
	crossfilter_bitarray.prototype.onlyExcept = function(n, offset, zero, onlyOffset, onlyOne) {
	  var mask;
	  var i, len;
	  for (i = 0, len = this.subarrays; i < len; ++i) {
	    mask = this[i][n];
	    if (i === offset)
	      mask &= zero;
	    if (mask != (i === onlyOffset ? onlyOne : 0)) {
	      return false;
	    }
	  }
	  return true;
	};

	module.exports = {
	  array8: crossfilter_arrayUntyped,
	  array16: crossfilter_arrayUntyped,
	  array32: crossfilter_arrayUntyped,
	  arrayLengthen: crossfilter_arrayLengthenUntyped,
	  arrayWiden: crossfilter_arrayWidenUntyped,
	  bitarray: crossfilter_bitarray
	};


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter_identity = __webpack_require__(48);

	function bisect_by(f) {

	  // Locate the insertion point for x in a to maintain sorted order. The
	  // arguments lo and hi may be used to specify a subset of the array which
	  // should be considered; by default the entire array is used. If x is already
	  // present in a, the insertion point will be before (to the left of) any
	  // existing entries. The return value is suitable for use as the first
	  // argument to `array.splice` assuming that a is already sorted.
	  //
	  // The returned insertion point i partitions the array a into two halves so
	  // that all v < x for v in a[lo:i] for the left side and all v >= x for v in
	  // a[i:hi] for the right side.
	  function bisectLeft(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (f(a[mid]) < x) lo = mid + 1;
	      else hi = mid;
	    }
	    return lo;
	  }

	  // Similar to bisectLeft, but returns an insertion point which comes after (to
	  // the right of) any existing entries of x in a.
	  //
	  // The returned insertion point i partitions the array into two halves so that
	  // all v <= x for v in a[lo:i] for the left side and all v > x for v in
	  // a[i:hi] for the right side.
	  function bisectRight(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (x < f(a[mid])) hi = mid;
	      else lo = mid + 1;
	    }
	    return lo;
	  }

	  bisectRight.right = bisectRight;
	  bisectRight.left = bisectLeft;
	  return bisectRight;
	}

	module.exports = bisect_by(crossfilter_identity);
	module.exports.by = bisect_by; // assign the raw function to the export as well


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	var xfilterArray = __webpack_require__(208);
	var xfilterFilter = __webpack_require__(211);
	var crossfilter_identity = __webpack_require__(48);
	var crossfilter_null = __webpack_require__(213);
	var crossfilter_zero = __webpack_require__(217);
	var xfilterHeapselect = __webpack_require__(212);
	var xfilterHeap = __webpack_require__(117);
	var bisect = __webpack_require__(209);
	var insertionsort = __webpack_require__(118);
	var permute = __webpack_require__(214);
	var quicksort = __webpack_require__(215);
	var xfilterReduce = __webpack_require__(216);
	var packageJson = __webpack_require__(234); // require own package.json for the version field
	var result = __webpack_require__(235);
	// expose API exports
	exports.crossfilter = crossfilter;
	exports.crossfilter.heap = xfilterHeap;
	exports.crossfilter.heapselect = xfilterHeapselect;
	exports.crossfilter.bisect = bisect;
	exports.crossfilter.insertionsort = insertionsort;
	exports.crossfilter.permute = permute;
	exports.crossfilter.quicksort = quicksort;
	exports.crossfilter.version = packageJson.version; // please note use of "package-json-versionify" transform

	function crossfilter() {
	  var crossfilter = {
	    add: add,
	    remove: removeData,
	    dimension: dimension,
	    groupAll: groupAll,
	    size: size,
	    all: all,
	    onChange: onChange,
	    isElementFiltered: isElementFiltered,
	  };

	  var data = [], // the records
	      n = 0, // the number of records; data.length
	      filters, // 1 is filtered out
	      filterListeners = [], // when the filters change
	      dataListeners = [], // when data is added
	      removeDataListeners = [], // when data is removed
	      callbacks = [];

	  filters = new xfilterArray.bitarray(0);

	  // Adds the specified new records to this crossfilter.
	  function add(newData) {
	    var n0 = n,
	        n1 = newData.length;

	    // If there's actually new data to add…
	    // Merge the new data into the existing data.
	    // Lengthen the filter bitset to handle the new records.
	    // Notify listeners (dimensions and groups) that new data is available.
	    if (n1) {
	      data = data.concat(newData);
	      filters.lengthen(n += n1);
	      dataListeners.forEach(function(l) { l(newData, n0, n1); });
	      triggerOnChange('dataAdded');
	    }

	    return crossfilter;
	  }

	  // Removes all records that match the current filters.
	  function removeData() {
	    var newIndex = crossfilter_index(n, n),
	        removed = [];
	    for (var i = 0, j = 0; i < n; ++i) {
	      if (!filters.zero(i)) newIndex[i] = j++;
	      else removed.push(i);
	    }

	    // Remove all matching records from groups.
	    filterListeners.forEach(function(l) { l(-1, -1, [], removed, true); });

	    // Update indexes.
	    removeDataListeners.forEach(function(l) { l(newIndex); });

	    // Remove old filters and data by overwriting.
	    for (var i = 0, j = 0; i < n; ++i) {
	      if (!filters.zero(i)) {
	        if (i !== j) filters.copy(j, i), data[j] = data[i];
	        ++j;
	      }
	    }

	    data.length = n = j;
	    filters.truncate(j);
	    triggerOnChange('dataRemoved');
	  }

	  // Return true if the data element at index i is filtered IN.
	  // Optionally, ignore the filters of any dimensions in the ignore_dimensions list.
	  function isElementFiltered(i, ignore_dimensions) {
	    var n,
	        d,
	        id,
	        len,
	        mask = Array(filters.subarrays);
	    for (n = 0; n < filters.subarrays; n++) { mask[n] = ~0; }
	    if (ignore_dimensions) {
	      for (d = 0, len = ignore_dimensions.length; d < len; d++) {
	        // The top bits of the ID are the subarray offset and the lower bits are the bit
	        // offset of the "one" mask.
	        id = ignore_dimensions[d].id();
	        mask[id >> 7] &= ~(0x1 << (id & 0x3f));
	      }
	    }
	    return filters.zeroExceptMask(i,mask);
	  }

	  // Adds a new dimension with the specified value accessor function.
	  function dimension(value, iterable) {

	    if (typeof value === 'string') {
	      var accessorPath = value;
	      value = function(d) { return result(d, accessorPath); };
	    }

	    var dimension = {
	      filter: filter,
	      filterExact: filterExact,
	      filterRange: filterRange,
	      filterFunction: filterFunction,
	      filterAll: filterAll,
	      top: top,
	      bottom: bottom,
	      group: group,
	      groupAll: groupAll,
	      dispose: dispose,
	      remove: dispose, // for backwards-compatibility
	      accessor: value,
	      id: function() { return id; }
	    };

	    var one, // lowest unset bit as mask, e.g., 00001000
	        zero, // inverted one, e.g., 11110111
	        offset, // offset into the filters arrays
	        id, // unique ID for this dimension (reused when dimensions are disposed)
	        values, // sorted, cached array
	        index, // value rank ↦ object id
	        oldValues, // temporary array storing previously-added values
	        oldIndex, // temporary array storing previously-added index
	        newValues, // temporary array storing newly-added values
	        newIndex, // temporary array storing newly-added index
	        iterablesIndexCount,
	        newIterablesIndexCount,
	        iterablesIndexFilterStatus,
	        newIterablesIndexFilterStatus,
	        oldIterablesIndexFilterStatus,
	        iterablesEmptyRows,
	        sort = quicksort.by(function(i) { return newValues[i]; }),
	        refilter = xfilterFilter.filterAll, // for recomputing filter
	        refilterFunction, // the custom filter function in use
	        indexListeners = [], // when data is added
	        dimensionGroups = [],
	        lo0 = 0,
	        hi0 = 0,
	        t = 0;

	    // Updating a dimension is a two-stage process. First, we must update the
	    // associated filters for the newly-added records. Once all dimensions have
	    // updated their filters, the groups are notified to update.
	    dataListeners.unshift(preAdd);
	    dataListeners.push(postAdd);

	    removeDataListeners.push(removeData);

	    // Add a new dimension in the filter bitmap and store the offset and bitmask.
	    var tmp = filters.add();
	    offset = tmp.offset;
	    one = tmp.one;
	    zero = ~one;

	    // Create a unique ID for the dimension
	    // IDs will be re-used if dimensions are disposed.
	    // For internal use the ID is the subarray offset shifted left 7 bits or'd with the
	    // bit offset of the set bit in the dimension's "one" mask.
	    id = (offset << 7) | (Math.log(one) / Math.log(2));

	    preAdd(data, 0, n);
	    postAdd(data, 0, n);

	    // Incorporates the specified new records into this dimension.
	    // This function is responsible for updating filters, values, and index.
	    function preAdd(newData, n0, n1) {

	      if (iterable){
	        // Count all the values
	        t = 0;
	        j = 0;
	        k = [];

	        for (i = 0; i < newData.length; i++) {
	          for(j = 0, k = value(newData[i]); j < k.length; j++) {
	            t++;
	          }
	        }

	        newValues = [];
	        newIterablesIndexCount = crossfilter_range(newData.length);
	        newIterablesIndexFilterStatus = crossfilter_index(t,1);
	        iterablesEmptyRows = [];
	        var unsortedIndex = crossfilter_range(t);

	        for (l = 0, i = 0; i < newData.length; i++) {
	          k = value(newData[i])
	          //
	          if(!k.length){
	            newIterablesIndexCount[i] = 0;
	            iterablesEmptyRows.push(i);
	            continue;
	          }
	          newIterablesIndexCount[i] = k.length
	          for (j = 0; j < k.length; j++) {
	            newValues.push(k[j]);
	            unsortedIndex[l] = i;
	            l++;
	          }
	        }

	        // Create the Sort map used to sort both the values and the valueToData indices
	        var sortMap = sort(crossfilter_range(t), 0, t);

	        // Use the sortMap to sort the newValues
	        newValues = permute(newValues, sortMap);


	        // Use the sortMap to sort the unsortedIndex map
	        // newIndex should be a map of sortedValue -> crossfilterData
	        newIndex = permute(unsortedIndex, sortMap)

	      } else{
	        // Permute new values into natural order using a standard sorted index.
	        newValues = newData.map(value);
	        newIndex = sort(crossfilter_range(n1), 0, n1);
	        newValues = permute(newValues, newIndex);
	      }

	      if(iterable) {
	        n1 = t;
	      }

	      // Bisect newValues to determine which new records are selected.
	      var bounds = refilter(newValues), lo1 = bounds[0], hi1 = bounds[1];
	      if (refilterFunction) {
	        for (i = 0; i < n1; ++i) {
	          if (!refilterFunction(newValues[i], i)) {
	            filters[offset][newIndex[i] + n0] |= one;
	            if(iterable) newIterablesIndexFilterStatus[i] = 1;
	          }
	        }
	      } else {
	        for (i = 0; i < lo1; ++i) {
	          filters[offset][newIndex[i] + n0] |= one;
	          if(iterable) newIterablesIndexFilterStatus[i] = 1;
	        }
	        for (i = hi1; i < n1; ++i) {
	          filters[offset][newIndex[i] + n0] |= one;
	          if(iterable) newIterablesIndexFilterStatus[i] = 1;
	        }
	      }

	      // If this dimension previously had no data, then we don't need to do the
	      // more expensive merge operation; use the new values and index as-is.
	      if (!n0) {
	        values = newValues;
	        index = newIndex;
	        iterablesIndexCount = newIterablesIndexCount;
	        iterablesIndexFilterStatus = newIterablesIndexFilterStatus;
	        lo0 = lo1;
	        hi0 = hi1;
	        return;
	      }



	      var oldValues = values,
	        oldIndex = index,
	        oldIterablesIndexFilterStatus = iterablesIndexFilterStatus
	        i0 = 0,
	        i1 = 0;

	      if(iterable){
	        old_n0 = n0
	        n0 = oldValues.length;
	        n1 = t
	      }

	      // Otherwise, create new arrays into which to merge new and old.
	      values = iterable ? new Array(n0 + n1) : new Array(n);
	      index = iterable ? new Array(n0 + n1) : crossfilter_index(n, n);
	      if(iterable) iterablesIndexFilterStatus = crossfilter_index(n0 + n1, 1);

	      // Concatenate the newIterablesIndexCount onto the old one.
	      if(iterable) {
	        var oldiiclength = iterablesIndexCount.length;
	        iterablesIndexCount = xfilterArray.arrayLengthen(iterablesIndexCount, n);
	        for(var j=0; j+oldiiclength < n; j++) {
	          iterablesIndexCount[j+oldiiclength] = newIterablesIndexCount[j];
	        }
	      }

	      // Merge the old and new sorted values, and old and new index.
	      for (i = 0; i0 < n0 && i1 < n1; ++i) {
	        if (oldValues[i0] < newValues[i1]) {
	          values[i] = oldValues[i0];
	          if(iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i0];
	          index[i] = oldIndex[i0++];
	        } else {
	          values[i] = newValues[i1];
	          if(iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i1];
	          index[i] = newIndex[i1++] + (iterable ? old_n0 : n0);
	        }
	      }

	      // Add any remaining old values.
	      for (; i0 < n0; ++i0, ++i) {
	        values[i] = oldValues[i0];
	        if(iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i0];
	        index[i] = oldIndex[i0];
	      }

	      // Add any remaining new values.
	      for (; i1 < n1; ++i1, ++i) {
	        values[i] = newValues[i1];
	        if(iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i1];
	        index[i] = newIndex[i1] + (iterable ? old_n0 : n0);
	      }

	      // Bisect again to recompute lo0 and hi0.
	      bounds = refilter(values), lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // When all filters have updated, notify index listeners of the new values.
	    function postAdd(newData, n0, n1) {
	      indexListeners.forEach(function(l) { l(newValues, newIndex, n0, n1); });
	      newValues = newIndex = null;
	    }

	    function removeData(reIndex) {
	      for (var i = 0, j = 0, k; i < n; ++i) {
	        if (!filters.zero(k = index[i])) {
	          if (i !== j) values[j] = values[i];
	          index[j] = reIndex[k];
	          ++j;
	        }
	      }
	      values.length = j;
	      while (j < n) index[j++] = 0;

	      // Bisect again to recompute lo0 and hi0.
	      var bounds = refilter(values);
	      lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // Updates the selected values based on the specified bounds [lo, hi].
	    // This implementation is used by all the public filter methods.
	    function filterIndexBounds(bounds) {

	      var lo1 = bounds[0],
	          hi1 = bounds[1];

	      if (refilterFunction) {
	        refilterFunction = null;
	        filterIndexFunction(function(d, i) { return lo1 <= i && i < hi1; }, bounds[0] === 0 && bounds[1] === index.length);
	        lo0 = lo1;
	        hi0 = hi1;
	        return dimension;
	      }

	      var i,
	          j,
	          k,
	          added = [],
	          removed = [],
	          valueIndexAdded = [],
	          valueIndexRemoved = [];


	      // Fast incremental update based on previous lo index.
	      if (lo1 < lo0) {
	        for (i = lo1, j = Math.min(lo0, hi1); i < j; ++i) {
	          added.push(index[i]);
	          valueIndexAdded.push(i);
	        }
	      } else if (lo1 > lo0) {
	        for (i = lo0, j = Math.min(lo1, hi0); i < j; ++i) {
	          removed.push(index[i]);
	          valueIndexRemoved.push(i);
	        }
	      }

	      // Fast incremental update based on previous hi index.
	      if (hi1 > hi0) {
	        for (i = Math.max(lo1, hi0), j = hi1; i < j; ++i) {
	          added.push(index[i]);
	          valueIndexAdded.push(i);
	        }
	      } else if (hi1 < hi0) {
	        for (i = Math.max(lo0, hi1), j = hi0; i < j; ++i) {
	          removed.push(index[i]);
	          valueIndexRemoved.push(i);
	        }
	      }

	      if(!iterable) {
	        // Flip filters normally.

	        for(i=0; i<added.length; i++) {
	          filters[offset][added[i]] ^= one;
	        }

	        for(i=0; i<removed.length; i++) {
	          filters[offset][removed[i]] ^= one;
	        }

	      } else {
	        // For iterables, we need to figure out if the row has been completely removed vs partially included
	        // Only count a row as added if it is not already being aggregated. Only count a row
	        // as removed if the last element being aggregated is removed.

	        var newAdded = [];
	        var newRemoved = [];
	        for (i = 0; i < added.length; i++) {
	          iterablesIndexCount[added[i]]++
	          iterablesIndexFilterStatus[valueIndexAdded[i]] = 0;
	          if(iterablesIndexCount[added[i]] === 1) {
	            filters[offset][added[i]] ^= one;
	            newAdded.push(added[i]);
	          }
	        }
	        for (i = 0; i < removed.length; i++) {
	          iterablesIndexCount[removed[i]]--
	          iterablesIndexFilterStatus[valueIndexRemoved[i]] = 1;
	          if(iterablesIndexCount[removed[i]] === 0) {
	            filters[offset][removed[i]] ^= one;
	            newRemoved.push(removed[i]);
	          }
	        }

	        added = newAdded;
	        removed = newRemoved;

	        // Now handle empty rows.
	        if(bounds[0] === 0 && bounds[1] === index.length) {
	          for(i = 0; i < iterablesEmptyRows.length; i++) {
	            if((filters[offset][k = iterablesEmptyRows[i]] & one)) {
	              // Was not in the filter, so set the filter and add
	              filters[offset][k] ^= one;
	              added.push(k);
	            }
	          }
	        } else {
	          // filter in place - remove empty rows if necessary
	          for(i = 0; i < iterablesEmptyRows.length; i++) {
	            if(!(filters[offset][k = iterablesEmptyRows[i]] & one)) {
	              // Was in the filter, so set the filter and remove
	              filters[offset][k] ^= one;
	              removed.push(k);
	            }
	          }
	        }
	      }

	      lo0 = lo1;
	      hi0 = hi1;
	      filterListeners.forEach(function(l) { l(one, offset, added, removed); });
	      triggerOnChange('filtered');
	      return dimension;
	    }

	    // Filters this dimension using the specified range, value, or null.
	    // If the range is null, this is equivalent to filterAll.
	    // If the range is an array, this is equivalent to filterRange.
	    // Otherwise, this is equivalent to filterExact.
	    function filter(range) {
	      return range == null
	          ? filterAll() : Array.isArray(range)
	          ? filterRange(range) : typeof range === "function"
	          ? filterFunction(range)
	          : filterExact(range);
	    }

	    // Filters this dimension to select the exact value.
	    function filterExact(value) {
	      return filterIndexBounds((refilter = xfilterFilter.filterExact(bisect, value))(values));
	    }

	    // Filters this dimension to select the specified range [lo, hi].
	    // The lower bound is inclusive, and the upper bound is exclusive.
	    function filterRange(range) {
	      return filterIndexBounds((refilter = xfilterFilter.filterRange(bisect, range))(values));
	    }

	    // Clears any filters on this dimension.
	    function filterAll() {
	      return filterIndexBounds((refilter = xfilterFilter.filterAll)(values));
	    }

	    // Filters this dimension using an arbitrary function.
	    function filterFunction(f) {
	      refilterFunction = f;
	      refilter = xfilterFilter.filterAll;

	      filterIndexFunction(f, false);

	      lo0 = 0;
	      hi0 = n;

	      return dimension;
	    }

	    function filterIndexFunction(f, filterAll) {
	      var i,
	          k,
	          x,
	          added = [],
	          removed = [],
	          valueIndexAdded = [],
	          valueIndexRemoved = [],
	          indexLength = index.length;

	      if(!iterable) {
	        for (i = 0; i < indexLength; ++i) {
	          if (!(filters[offset][k = index[i]] & one) ^ !!(x = f(values[i], i))) {
	            if (x) added.push(k);
	            else removed.push(k);
	          }
	        }
	      }

	      if(iterable) {
	        for(i=0; i < indexLength; ++i) {
	          if(f(values[i], i)) {
	            added.push(index[i]);
	            valueIndexAdded.push(i);
	          } else {
	            removed.push(index[i]);
	            valueIndexRemoved.push(i);
	          }
	        }
	      }

	      if(!iterable) {
	        for(i=0; i<added.length; i++) {
	          if(filters[offset][added[i]] & one) filters[offset][added[i]] &= zero;
	        }

	        for(i=0; i<removed.length; i++) {
	          if(!(filters[offset][removed[i]] & one)) filters[offset][removed[i]] |= one;
	        }
	      } else {

	        var newAdded = [];
	        var newRemoved = [];
	        for (i = 0; i < added.length; i++) {
	          // First check this particular value needs to be added
	          if(iterablesIndexFilterStatus[valueIndexAdded[i]] === 1) {
	            iterablesIndexCount[added[i]]++
	            iterablesIndexFilterStatus[valueIndexAdded[i]] = 0;
	            if(iterablesIndexCount[added[i]] === 1) {
	              filters[offset][added[i]] ^= one;
	              newAdded.push(added[i]);
	            }
	          }
	        }
	        for (i = 0; i < removed.length; i++) {
	          // First check this particular value needs to be removed
	          if(iterablesIndexFilterStatus[valueIndexRemoved[i]] === 0) {
	            iterablesIndexCount[removed[i]]--
	            iterablesIndexFilterStatus[valueIndexRemoved[i]] = 1;
	            if(iterablesIndexCount[removed[i]] === 0) {
	              filters[offset][removed[i]] ^= one;
	              newRemoved.push(removed[i]);
	            }
	          }
	        }

	        added = newAdded;
	        removed = newRemoved;

	        // Now handle empty rows.
	        if(filterAll) {
	          for(i = 0; i < iterablesEmptyRows.length; i++) {
	            if((filters[offset][k = iterablesEmptyRows[i]] & one)) {
	              // Was not in the filter, so set the filter and add
	              filters[offset][k] ^= one;
	              added.push(k);
	            }
	          }
	        } else {
	          // filter in place - remove empty rows if necessary
	          for(i = 0; i < iterablesEmptyRows.length; i++) {
	            if(!(filters[offset][k = iterablesEmptyRows[i]] & one)) {
	              // Was in the filter, so set the filter and remove
	              filters[offset][k] ^= one;
	              removed.push(k);
	            }
	          }
	        }
	      }

	      filterListeners.forEach(function(l) { l(one, offset, added, removed); });
	      triggerOnChange('filtered');
	    }

	    // Returns the top K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function top(k, top_offset) {
	      var array = [],
	          i = hi0,
	          j,
	          toSkip = 0;

	      if(top_offset && top_offset > 0) toSkip = top_offset;

	      while (--i >= lo0 && k > 0) {
	        if (filters.zero(j = index[i])) {
	          if(toSkip > 0) {
	            //skip matching row
	            --toSkip;
	          } else {
	            array.push(data[j]);
	            --k;
	          }
	        }
	      }

	      if(iterable){
	        for(i = 0; i < iterablesEmptyRows.length && k > 0; i++) {
	          // Add row with empty iterable column at the end
	          if(filters.zero(j = iterablesEmptyRows[i])) {
	            if(toSkip > 0) {
	              //skip matching row
	              --toSkip;
	            } else {
	              array.push(data[j]);
	              --k;
	            }
	          }
	        }
	      }

	      return array;
	    }

	    // Returns the bottom K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function bottom(k, bottom_offset) {
	      var array = [],
	          i,
	          j,
	          toSkip = 0;

	      if(bottom_offset && bottom_offset > 0) toSkip = bottom_offset;

	      if(iterable) {
	        // Add row with empty iterable column at the top
	        for(i = 0; i < iterablesEmptyRows.length && k > 0; i++) {
	          if(filters.zero(j = iterablesEmptyRows[i])) {
	            if(toSkip > 0) {
	              //skip matching row
	              --toSkip;
	            } else {
	              array.push(data[j]);
	              --k;
	            }
	          }
	        }
	      }

	      i = lo0;

	      while (i < hi0 && k > 0) {
	        if (filters.zero(j = index[i])) {
	          if(toSkip > 0) {
	            //skip matching row
	            --toSkip;
	          } else {
	            array.push(data[j]);
	            --k;
	          }
	        }
	        i++;
	      }

	      return array;
	    }

	    // Adds a new group to this dimension, using the specified key function.
	    function group(key) {
	      var group = {
	        top: top,
	        all: all,
	        reduce: reduce,
	        reduceCount: reduceCount,
	        reduceSum: reduceSum,
	        order: order,
	        orderNatural: orderNatural,
	        size: size,
	        dispose: dispose,
	        remove: dispose // for backwards-compatibility
	      };

	      // Ensure that this group will be removed when the dimension is removed.
	      dimensionGroups.push(group);

	      var groups, // array of {key, value}
	          groupIndex, // object id ↦ group id
	          groupWidth = 8,
	          groupCapacity = crossfilter_capacity(groupWidth),
	          k = 0, // cardinality
	          select,
	          heap,
	          reduceAdd,
	          reduceRemove,
	          reduceInitial,
	          update = crossfilter_null,
	          reset = crossfilter_null,
	          resetNeeded = true,
	          groupAll = key === crossfilter_null;

	      if (arguments.length < 1) key = crossfilter_identity;

	      // The group listens to the crossfilter for when any dimension changes, so
	      // that it can update the associated reduce values. It must also listen to
	      // the parent dimension for when data is added, and compute new keys.
	      filterListeners.push(update);
	      indexListeners.push(add);
	      removeDataListeners.push(removeData);

	      // Incorporate any existing data into the grouping.
	      add(values, index, 0, n);

	      // Incorporates the specified new values into this group.
	      // This function is responsible for updating groups and groupIndex.
	      function add(newValues, newIndex, n0, n1) {

	        if(iterable) {
	          n0old = n0
	          n0 = values.length - newValues.length
	          n1 = newValues.length;
	        }

	        var oldGroups = groups,
	            reIndex = iterable ? [] : crossfilter_index(k, groupCapacity),
	            add = reduceAdd,
	            remove = reduceRemove,
	            initial = reduceInitial,
	            k0 = k, // old cardinality
	            i0 = 0, // index of old group
	            i1 = 0, // index of new record
	            j, // object id
	            g0, // old group
	            x0, // old key
	            x1, // new key
	            g, // group to add
	            x; // key of group to add

	        // If a reset is needed, we don't need to update the reduce values.
	        if (resetNeeded) add = initial = crossfilter_null;
	        if (resetNeeded) remove = initial = crossfilter_null;

	        // Reset the new groups (k is a lower bound).
	        // Also, make sure that groupIndex exists and is long enough.
	        groups = new Array(k), k = 0;
	        if(iterable){
	          groupIndex = k0 > 1 ? groupIndex : [];
	        }
	        else{
	          groupIndex = k0 > 1 ? xfilterArray.arrayLengthen(groupIndex, n) : crossfilter_index(n, groupCapacity);
	        }


	        // Get the first old key (x0 of g0), if it exists.
	        if (k0) x0 = (g0 = oldGroups[0]).key;

	        // Find the first new key (x1), skipping NaN keys.
	        while (i1 < n1 && !((x1 = key(newValues[i1])) >= x1)) ++i1;

	        // While new keys remain…
	        while (i1 < n1) {

	          // Determine the lesser of the two current keys; new and old.
	          // If there are no old keys remaining, then always add the new key.
	          if (g0 && x0 <= x1) {
	            g = g0, x = x0;

	            // Record the new index of the old group.
	            reIndex[i0] = k;

	            // Retrieve the next old key.
	            if (g0 = oldGroups[++i0]) x0 = g0.key;
	          } else {
	            g = {key: x1, value: initial()}, x = x1;
	          }

	          // Add the lesser group.
	          groups[k] = g;

	          // Add any selected records belonging to the added group, while
	          // advancing the new key and populating the associated group index.

	          while (x1 <= x) {
	            j = newIndex[i1] + (iterable ? n0old : n0)


	            if(iterable){
	              if(groupIndex[j]){
	                groupIndex[j].push(k)
	              }
	              else{
	                groupIndex[j] = [k]
	              }
	            }
	            else{
	              groupIndex[j] = k;
	            }

	            // Always add new values to groups. Only remove when not in filter.
	            // This gives groups full information on data life-cycle.
	            g.value = add(g.value, data[j], true);
	            if (!filters.zeroExcept(j, offset, zero)) g.value = remove(g.value, data[j], false);
	            if (++i1 >= n1) break;
	            x1 = key(newValues[i1]);
	          }

	          groupIncrement();
	        }

	        // Add any remaining old groups that were greater th1an all new keys.
	        // No incremental reduce is needed; these groups have no new records.
	        // Also record the new index of the old group.
	        while (i0 < k0) {
	          groups[reIndex[i0] = k] = oldGroups[i0++];
	          groupIncrement();
	        }


	        // Fill in gaps with empty arrays where there may have been rows with empty iterables
	        if(iterable){
	          for (i = 0; i < n; i++) {
	            if(!groupIndex[i]){
	              groupIndex[i] = []
	            }
	          }
	        }

	        // If we added any new groups before any old groups,
	        // update the group index of all the old records.
	        if(k > i0){
	          if(iterable){
	            groupIndex = permute(groupIndex, reIndex, true)
	          }
	          else{
	            for (i0 = 0; i0 < n0; ++i0) {
	              groupIndex[i0] = reIndex[groupIndex[i0]];
	            }
	          }
	        }

	        // Modify the update and reset behavior based on the cardinality.
	        // If the cardinality is less than or equal to one, then the groupIndex
	        // is not needed. If the cardinality is zero, then there are no records
	        // and therefore no groups to update or reset. Note that we also must
	        // change the registered listener to point to the new method.
	        j = filterListeners.indexOf(update);
	        if (k > 1) {
	          update = updateMany;
	          reset = resetMany;
	        } else {
	          if (!k && groupAll) {
	            k = 1;
	            groups = [{key: null, value: initial()}];
	          }
	          if (k === 1) {
	            update = updateOne;
	            reset = resetOne;
	          } else {
	            update = crossfilter_null;
	            reset = crossfilter_null;
	          }
	          groupIndex = null;
	        }
	        filterListeners[j] = update;

	        // Count the number of added groups,
	        // and widen the group index as needed.
	        function groupIncrement() {
	          if(iterable){
	            k++
	            return
	          }
	          if (++k === groupCapacity) {
	            reIndex = xfilterArray.arrayWiden(reIndex, groupWidth <<= 1);
	            groupIndex = xfilterArray.arrayWiden(groupIndex, groupWidth);
	            groupCapacity = crossfilter_capacity(groupWidth);
	          }
	        }
	      }

	      function removeData() {
	        if (k > 1) {
	          var oldK = k,
	              oldGroups = groups,
	              seenGroups = crossfilter_index(oldK, oldK);

	          // Filter out non-matches by copying matching group index entries to
	          // the beginning of the array.
	          for (var i = 0, j = 0; i < n; ++i) {
	            if (!filters.zero(i)) {
	              seenGroups[groupIndex[j] = groupIndex[i]] = 1;
	              ++j;
	            }
	          }

	          // Reassemble groups including only those groups that were referred
	          // to by matching group index entries.  Note the new group index in
	          // seenGroups.
	          groups = [], k = 0;
	          for (i = 0; i < oldK; ++i) {
	            if (seenGroups[i]) {
	              seenGroups[i] = k++;
	              groups.push(oldGroups[i]);
	            }
	          }

	          if (k > 1) {
	            // Reindex the group index using seenGroups to find the new index.
	            for (var i = 0; i < j; ++i) groupIndex[i] = seenGroups[groupIndex[i]];
	          } else {
	            groupIndex = null;
	          }
	          filterListeners[filterListeners.indexOf(update)] = k > 1
	              ? (reset = resetMany, update = updateMany)
	              : k === 1 ? (reset = resetOne, update = updateOne)
	              : reset = update = crossfilter_null;
	        } else if (k === 1) {
	          if (groupAll) return;
	          for (var i = 0; i < n; ++i) if (!filters.zero(i)) return;
	          groups = [], k = 0;
	          filterListeners[filterListeners.indexOf(update)] =
	          update = reset = crossfilter_null;
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is greater than 1.
	      // notFilter indicates a crossfilter.add/remove operation.
	      function updateMany(filterOne, filterOffset, added, removed, notFilter) {

	        if ((filterOne === one && filterOffset === offset) || resetNeeded) return;

	        var i,
	            j,
	            k,
	            n,
	            g;

	        if(iterable){
	          // Add the added values.
	          for (i = 0, n = added.length; i < n; ++i) {
	            if (filters.zeroExcept(k = added[i], offset, zero)) {
	              for (j = 0; j < groupIndex[k].length; j++) {
	                g = groups[groupIndex[k][j]];
	                g.value = reduceAdd(g.value, data[k], false, j);
	              }
	            }
	          }

	          // Remove the removed values.
	          for (i = 0, n = removed.length; i < n; ++i) {
	            if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	              for (j = 0; j < groupIndex[k].length; j++) {
	                g = groups[groupIndex[k][j]];
	                g.value = reduceRemove(g.value, data[k], notFilter, j);
	              }
	            }
	          }
	          return;
	        }

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (filters.zeroExcept(k = added[i], offset, zero)) {
	            g = groups[groupIndex[k]];
	            g.value = reduceAdd(g.value, data[k], false);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	            g = groups[groupIndex[k]];
	            g.value = reduceRemove(g.value, data[k], notFilter);
	          }
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is 1.
	      // notFilter indicates a crossfilter.add/remove operation.
	      function updateOne(filterOne, filterOffset, added, removed, notFilter) {
	        if ((filterOne === one && filterOffset === offset) || resetNeeded) return;

	        var i,
	            k,
	            n,
	            g = groups[0];

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (filters.zeroExcept(k = added[i], offset, zero)) {
	            g.value = reduceAdd(g.value, data[k], false);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	            g.value = reduceRemove(g.value, data[k], notFilter);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is greater than 1.
	      function resetMany() {
	        var i,
	            j,
	            g;

	        // Reset all group values.
	        for (i = 0; i < k; ++i) {
	          groups[i].value = reduceInitial();
	        }

	        // We add all records and then remove filtered records so that reducers
	        // can build an 'unfiltered' view even if there are already filters in
	        // place on other dimensions.
	        if(iterable){
	          for (i = 0; i < n; ++i) {
	            for (j = 0; j < groupIndex[i].length; j++) {
	              g = groups[groupIndex[i][j]];
	              g.value = reduceAdd(g.value, data[i], true, j);
	            }
	          }
	          for (i = 0; i < n; ++i) {
	            if (!filters.zeroExcept(i, offset, zero)) {
	              for (j = 0; j < groupIndex[i].length; j++) {
	                g = groups[groupIndex[i][j]];
	                g.value = reduceRemove(g.value, data[i], false, j);
	              }
	            }
	          }
	          return;
	        }

	        for (i = 0; i < n; ++i) {
	          g = groups[groupIndex[i]];
	          g.value = reduceAdd(g.value, data[i], true);
	        }
	        for (i = 0; i < n; ++i) {
	          if (!filters.zeroExcept(i, offset, zero)) {
	            g = groups[groupIndex[i]];
	            g.value = reduceRemove(g.value, data[i], false);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is 1.
	      function resetOne() {
	        var i,
	            g = groups[0];

	        // Reset the singleton group values.
	        g.value = reduceInitial();

	        // We add all records and then remove filtered records so that reducers
	        // can build an 'unfiltered' view even if there are already filters in
	        // place on other dimensions.
	        for (i = 0; i < n; ++i) {
	          g.value = reduceAdd(g.value, data[i], true);
	        }

	        for (i = 0; i < n; ++i) {
	          if (!filters.zeroExcept(i, offset, zero)) {
	            g.value = reduceRemove(g.value, data[i], false);
	          }
	        }
	      }

	      // Returns the array of group values, in the dimension's natural order.
	      function all() {
	        if (resetNeeded) reset(), resetNeeded = false;
	        return groups;
	      }

	      // Returns a new array containing the top K group values, in reduce order.
	      function top(k) {
	        var top = select(all(), 0, groups.length, k);
	        return heap.sort(top, 0, top.length);
	      }

	      // Sets the reduce behavior for this group to use the specified functions.
	      // This method lazily recomputes the reduce values, waiting until needed.
	      function reduce(add, remove, initial) {
	        reduceAdd = add;
	        reduceRemove = remove;
	        reduceInitial = initial;
	        resetNeeded = true;
	        return group;
	      }

	      // A convenience method for reducing by count.
	      function reduceCount() {
	        return reduce(xfilterReduce.reduceIncrement, xfilterReduce.reduceDecrement, crossfilter_zero);
	      }

	      // A convenience method for reducing by sum(value).
	      function reduceSum(value) {
	        return reduce(xfilterReduce.reduceAdd(value), xfilterReduce.reduceSubtract(value), crossfilter_zero);
	      }

	      // Sets the reduce order, using the specified accessor.
	      function order(value) {
	        select = xfilterHeapselect.by(valueOf);
	        heap = xfilterHeap.by(valueOf);
	        function valueOf(d) { return value(d.value); }
	        return group;
	      }

	      // A convenience method for natural ordering by reduce value.
	      function orderNatural() {
	        return order(crossfilter_identity);
	      }

	      // Returns the cardinality of this group, irrespective of any filters.
	      function size() {
	        return k;
	      }

	      // Removes this group and associated event listeners.
	      function dispose() {
	        var i = filterListeners.indexOf(update);
	        if (i >= 0) filterListeners.splice(i, 1);
	        i = indexListeners.indexOf(add);
	        if (i >= 0) indexListeners.splice(i, 1);
	        i = removeDataListeners.indexOf(removeData);
	        if (i >= 0) removeDataListeners.splice(i, 1);
	        return group;
	      }

	      return reduceCount().orderNatural();
	    }

	    // A convenience function for generating a singleton group.
	    function groupAll() {
	      var g = group(crossfilter_null), all = g.all;
	      delete g.all;
	      delete g.top;
	      delete g.order;
	      delete g.orderNatural;
	      delete g.size;
	      g.value = function() { return all()[0].value; };
	      return g;
	    }

	    // Removes this dimension and associated groups and event listeners.
	    function dispose() {
	      dimensionGroups.forEach(function(group) { group.dispose(); });
	      var i = dataListeners.indexOf(preAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = dataListeners.indexOf(postAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = removeDataListeners.indexOf(removeData);
	      if (i >= 0) removeDataListeners.splice(i, 1);
	      filters.masks[offset] &= zero;
	      return filterAll();
	    }

	    return dimension;
	  }

	  // A convenience method for groupAll on a dummy dimension.
	  // This implementation can be optimized since it always has cardinality 1.
	  function groupAll() {
	    var group = {
	      reduce: reduce,
	      reduceCount: reduceCount,
	      reduceSum: reduceSum,
	      value: value,
	      dispose: dispose,
	      remove: dispose // for backwards-compatibility
	    };

	    var reduceValue,
	        reduceAdd,
	        reduceRemove,
	        reduceInitial,
	        resetNeeded = true;

	    // The group listens to the crossfilter for when any dimension changes, so
	    // that it can update the reduce value. It must also listen to the parent
	    // dimension for when data is added.
	    filterListeners.push(update);
	    dataListeners.push(add);

	    // For consistency; actually a no-op since resetNeeded is true.
	    add(data, 0, n);

	    // Incorporates the specified new values into this group.
	    function add(newData, n0) {
	      var i;

	      if (resetNeeded) return;

	      // Cycle through all the values.
	      for (i = n0; i < n; ++i) {

	        // Add all values all the time.
	        reduceValue = reduceAdd(reduceValue, data[i], true);

	        // Remove the value if filtered.
	        if (!filters.zero(i)) {
	          reduceValue = reduceRemove(reduceValue, data[i], false);
	        }
	      }
	    }

	    // Reduces the specified selected or deselected records.
	    function update(filterOne, filterOffset, added, removed, notFilter) {
	      var i,
	          k,
	          n;

	      if (resetNeeded) return;

	      // Add the added values.
	      for (i = 0, n = added.length; i < n; ++i) {
	        if (filters.zero(k = added[i])) {
	          reduceValue = reduceAdd(reduceValue, data[k], notFilter);
	        }
	      }

	      // Remove the removed values.
	      for (i = 0, n = removed.length; i < n; ++i) {
	        if (filters.only(k = removed[i], filterOffset, filterOne)) {
	          reduceValue = reduceRemove(reduceValue, data[k], notFilter);
	        }
	      }
	    }

	    // Recomputes the group reduce value from scratch.
	    function reset() {
	      var i;

	      reduceValue = reduceInitial();

	      // Cycle through all the values.
	      for (i = 0; i < n; ++i) {

	        // Add all values all the time.
	        reduceValue = reduceAdd(reduceValue, data[i], true);

	        // Remove the value if it is filtered.
	        if (!filters.zero(i)) {
	          reduceValue = reduceRemove(reduceValue, data[i], false);
	        }
	      }
	    }

	    // Sets the reduce behavior for this group to use the specified functions.
	    // This method lazily recomputes the reduce value, waiting until needed.
	    function reduce(add, remove, initial) {
	      reduceAdd = add;
	      reduceRemove = remove;
	      reduceInitial = initial;
	      resetNeeded = true;
	      return group;
	    }

	    // A convenience method for reducing by count.
	    function reduceCount() {
	      return reduce(xfilterReduce.reduceIncrement, xfilterReduce.reduceDecrement, crossfilter_zero);
	    }

	    // A convenience method for reducing by sum(value).
	    function reduceSum(value) {
	      return reduce(xfilterReduce.reduceAdd(value), xfilterReduce.reduceSubtract(value), crossfilter_zero);
	    }

	    // Returns the computed reduce value.
	    function value() {
	      if (resetNeeded) reset(), resetNeeded = false;
	      return reduceValue;
	    }

	    // Removes this group and associated event listeners.
	    function dispose() {
	      var i = filterListeners.indexOf(update);
	      if (i >= 0) filterListeners.splice(i);
	      i = dataListeners.indexOf(add);
	      if (i >= 0) dataListeners.splice(i);
	      return group;
	    }

	    return reduceCount();
	  }

	  // Returns the number of records in this crossfilter, irrespective of any filters.
	  function size() {
	    return n;
	  }

	  // Returns the raw row data contained in this crossfilter
	  function all(){
	    return data;
	  }

	  function onChange(cb){
	    if(typeof cb !== 'function'){
	      console.warn('onChange callback parameter must be a function!');
	      return;
	    }
	    callbacks.push(cb);
	    return function(){
	      callbacks.splice(callbacks.indexOf(cb), 1);
	    };
	  }

	  function triggerOnChange(eventName){
	    for (var i = 0; i < callbacks.length; i++) {
	      callbacks[i](eventName);
	    }
	  }

	  return arguments.length
	      ? add(arguments[0])
	      : crossfilter;
	}

	// Returns an array of size n, big enough to store ids up to m.
	function crossfilter_index(n, m) {
	  return (m < 0x101
	      ? xfilterArray.array8 : m < 0x10001
	      ? xfilterArray.array16
	      : xfilterArray.array32)(n);
	}

	// Constructs a new array of size n, with sequential values from 0 to n - 1.
	function crossfilter_range(n) {
	  var range = crossfilter_index(n, n);
	  for (var i = -1; ++i < n;) range[i] = i;
	  return range;
	}

	function crossfilter_capacity(w) {
	  return w === 8
	      ? 0x100 : w === 16
	      ? 0x10000
	      : 0x100000000;
	}


/***/ },

/***/ 211:
/***/ function(module, exports) {

	function crossfilter_filterExact(bisect, value) {
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, value, 0, n), bisect.right(values, value, 0, n)];
	  };
	}

	function crossfilter_filterRange(bisect, range) {
	  var min = range[0],
	      max = range[1];
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, min, 0, n), bisect.left(values, max, 0, n)];
	  };
	}

	function crossfilter_filterAll(values) {
	  return [0, values.length];
	}

	module.exports = {
	  filterExact: crossfilter_filterExact,
	  filterRange: crossfilter_filterRange,
	  filterAll: crossfilter_filterAll
	};


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter_identity = __webpack_require__(48);
	var xFilterHeap = __webpack_require__(117);

	function heapselect_by(f) {
	  var heap = xFilterHeap.by(f);

	  // Returns a new array containing the top k elements in the array a[lo:hi].
	  // The returned array is not sorted, but maintains the heap property. If k is
	  // greater than hi - lo, then fewer than k elements will be returned. The
	  // order of elements in a is unchanged by this operation.
	  function heapselect(a, lo, hi, k) {
	    var queue = new Array(k = Math.min(hi - lo, k)),
	        min,
	        i,
	        x,
	        d;

	    for (i = 0; i < k; ++i) queue[i] = a[lo++];
	    heap(queue, 0, k);

	    if (lo < hi) {
	      min = f(queue[0]);
	      do {
	        if (x = f(d = a[lo]) > min) {
	          queue[0] = d;
	          min = f(heap(queue, 0, k)[0]);
	        }
	      } while (++lo < hi);
	    }

	    return queue;
	  }

	  return heapselect;
	}

	module.exports = heapselect_by(crossfilter_identity);
	module.exports.by = heapselect_by; // assign the raw function to the export as well


/***/ },

/***/ 213:
/***/ function(module, exports) {

	function crossfilter_null() {
	  return null;
	}

	module.exports = crossfilter_null;


/***/ },

/***/ 214:
/***/ function(module, exports) {

	function permute(array, index, deep) {
	  for (var i = 0, n = index.length, copy = deep ? JSON.parse(JSON.stringify(array)) : new Array(n); i < n; ++i) {
	    copy[i] = array[index[i]];
	  }
	  return copy;
	}

	module.exports = permute;


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter_identity = __webpack_require__(48);
	var xFilterInsertionsort = __webpack_require__(118);

	// Algorithm designed by Vladimir Yaroslavskiy.
	// Implementation based on the Dart project; see NOTICE and AUTHORS for details.

	function quicksort_by(f) {
	  var insertionsort = xFilterInsertionsort.by(f);

	  function sort(a, lo, hi) {
	    return (hi - lo < quicksort_sizeThreshold
	        ? insertionsort
	        : quicksort)(a, lo, hi);
	  }

	  function quicksort(a, lo, hi) {
	    // Compute the two pivots by looking at 5 elements.
	    var sixth = (hi - lo) / 6 | 0,
	        i1 = lo + sixth,
	        i5 = hi - 1 - sixth,
	        i3 = lo + hi - 1 >> 1,  // The midpoint.
	        i2 = i3 - sixth,
	        i4 = i3 + sixth;

	    var e1 = a[i1], x1 = f(e1),
	        e2 = a[i2], x2 = f(e2),
	        e3 = a[i3], x3 = f(e3),
	        e4 = a[i4], x4 = f(e4),
	        e5 = a[i5], x5 = f(e5);

	    var t;

	    // Sort the selected 5 elements using a sorting network.
	    if (x1 > x2) t = e1, e1 = e2, e2 = t, t = x1, x1 = x2, x2 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;
	    if (x1 > x3) t = e1, e1 = e3, e3 = t, t = x1, x1 = x3, x3 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x1 > x4) t = e1, e1 = e4, e4 = t, t = x1, x1 = x4, x4 = t;
	    if (x3 > x4) t = e3, e3 = e4, e4 = t, t = x3, x3 = x4, x4 = t;
	    if (x2 > x5) t = e2, e2 = e5, e5 = t, t = x2, x2 = x5, x5 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;

	    var pivot1 = e2, pivotValue1 = x2,
	        pivot2 = e4, pivotValue2 = x4;

	    // e2 and e4 have been saved in the pivot variables. They will be written
	    // back, once the partitioning is finished.
	    a[i1] = e1;
	    a[i2] = a[lo];
	    a[i3] = e3;
	    a[i4] = a[hi - 1];
	    a[i5] = e5;

	    var less = lo + 1,   // First element in the middle partition.
	        great = hi - 2;  // Last element in the middle partition.

	    // Note that for value comparison, <, <=, >= and > coerce to a primitive via
	    // Object.prototype.valueOf; == and === do not, so in order to be consistent
	    // with natural order (such as for Date objects), we must do two compares.
	    var pivotsEqual = pivotValue1 <= pivotValue2 && pivotValue1 >= pivotValue2;
	    if (pivotsEqual) {

	      // Degenerated case where the partitioning becomes a dutch national flag
	      // problem.
	      //
	      // [ |  < pivot  | == pivot | unpartitioned | > pivot  | ]
	      //  ^             ^          ^             ^            ^
	      // left         less         k           great         right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1) for x in ]left, less[ : x < pivot.
	      //   2) for x in [less, k[ : x == pivot.
	      //   3) for x in ]great, right[ : x > pivot.
	      for (var k = less; k <= great; ++k) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else if (xk > pivotValue1) {

	          // Find the first element <= pivot in the range [k - 1, great] and
	          // put [:ek:] there. We know that such an element must exist:
	          // When k == less, then el3 (which is equal to pivot) lies in the
	          // interval. Otherwise a[k - 1] == pivot and the search stops at k-1.
	          // Note that in the latter case invariant 2 will be violated for a
	          // short amount of time. The invariant will be restored when the
	          // pivots are put into their final positions.
	          while (true) {
	            var greatValue = f(a[great]);
	            if (greatValue > pivotValue1) {
	              great--;
	              // This is the only location in the while-loop where a new
	              // iteration is started.
	              continue;
	            } else if (greatValue < pivotValue1) {
	              // Triple exchange.
	              a[k] = a[less];
	              a[less++] = a[great];
	              a[great--] = ek;
	              break;
	            } else {
	              a[k] = a[great];
	              a[great--] = ek;
	              // Note: if great < k then we will exit the outer loop and fix
	              // invariant 2 (which we just violated).
	              break;
	            }
	          }
	        }
	      }
	    } else {

	      // We partition the list into three parts:
	      //  1. < pivot1
	      //  2. >= pivot1 && <= pivot2
	      //  3. > pivot2
	      //
	      // During the loop we have:
	      // [ | < pivot1 | >= pivot1 && <= pivot2 | unpartitioned  | > pivot2  | ]
	      //  ^            ^                        ^              ^             ^
	      // left         less                     k              great        right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1. for x in ]left, less[ : x < pivot1
	      //   2. for x in [less, k[ : pivot1 <= x && x <= pivot2
	      //   3. for x in ]great, right[ : x > pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else {
	          if (xk > pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue > pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] <= pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] >= pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // Move pivots into their final positions.
	    // We shrunk the list from both sides (a[left] and a[right] have
	    // meaningless values in them) and now we move elements from the first
	    // and third partition into these locations so that we can store the
	    // pivots.
	    a[lo] = a[less - 1];
	    a[less - 1] = pivot1;
	    a[hi - 1] = a[great + 1];
	    a[great + 1] = pivot2;

	    // The list is now partitioned into three partitions:
	    // [ < pivot1   | >= pivot1 && <= pivot2   |  > pivot2   ]
	    //  ^            ^                        ^             ^
	    // left         less                     great        right

	    // Recursive descent. (Don't include the pivot values.)
	    sort(a, lo, less - 1);
	    sort(a, great + 2, hi);

	    if (pivotsEqual) {
	      // All elements in the second partition are equal to the pivot. No
	      // need to sort them.
	      return a;
	    }

	    // In theory it should be enough to call _doSort recursively on the second
	    // partition.
	    // The Android source however removes the pivot elements from the recursive
	    // call if the second partition is too large (more than 2/3 of the list).
	    if (less < i1 && great > i5) {
	      var lessValue, greatValue;
	      while ((lessValue = f(a[less])) <= pivotValue1 && lessValue >= pivotValue1) ++less;
	      while ((greatValue = f(a[great])) <= pivotValue2 && greatValue >= pivotValue2) --great;

	      // Copy paste of the previous 3-way partitioning with adaptions.
	      //
	      // We partition the list into three parts:
	      //  1. == pivot1
	      //  2. > pivot1 && < pivot2
	      //  3. == pivot2
	      //
	      // During the loop we have:
	      // [ == pivot1 | > pivot1 && < pivot2 | unpartitioned  | == pivot2 ]
	      //              ^                      ^              ^
	      //            less                     k              great
	      //
	      // Invariants:
	      //   1. for x in [ *, less[ : x == pivot1
	      //   2. for x in [less, k[ : pivot1 < x && x < pivot2
	      //   3. for x in ]great, * ] : x == pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk <= pivotValue1 && xk >= pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          less++;
	        } else {
	          if (xk <= pivotValue2 && xk >= pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue <= pivotValue2 && greatValue >= pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] < pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] == pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // The second partition has now been cleared of pivot elements and looks
	    // as follows:
	    // [  *  |  > pivot1 && < pivot2  | * ]
	    //        ^                      ^
	    //       less                  great
	    // Sort the second partition using recursive descent.

	    // The second partition looks as follows:
	    // [  *  |  >= pivot1 && <= pivot2  | * ]
	    //        ^                        ^
	    //       less                    great
	    // Simply sort it by recursive descent.

	    return sort(a, less, great + 1);
	  }

	  return sort;
	}

	var quicksort_sizeThreshold = 32;

	module.exports = quicksort_by(crossfilter_identity);
	module.exports.by = quicksort_by;


/***/ },

/***/ 216:
/***/ function(module, exports) {

	function crossfilter_reduceIncrement(p) {
	  return p + 1;
	}

	function crossfilter_reduceDecrement(p) {
	  return p - 1;
	}

	function crossfilter_reduceAdd(f) {
	  return function(p, v) {
	    return p + +f(v);
	  };
	}

	function crossfilter_reduceSubtract(f) {
	  return function(p, v) {
	    return p - f(v);
	  };
	}

	module.exports = {
	  reduceIncrement: crossfilter_reduceIncrement,
	  reduceDecrement: crossfilter_reduceDecrement,
	  reduceAdd: crossfilter_reduceAdd,
	  reduceSubtract: crossfilter_reduceSubtract
	};


/***/ },

/***/ 217:
/***/ function(module, exports) {

	function crossfilter_zero() {
	  return 0;
	}

	module.exports = crossfilter_zero;


/***/ },

/***/ 234:
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "crossfilter2@1.4.0-alpha.6",
					"scope": null,
					"escapedName": "crossfilter2",
					"name": "crossfilter2",
					"rawSpec": "1.4.0-alpha.6",
					"spec": "1.4.0-alpha.6",
					"type": "version"
				},
				"/Users/Marshall/ThomasWork/work-project/201612-hengshi.io/makalu/node_modules/universe"
			]
		],
		"_cnpm_publish_time": 1463519574405,
		"_from": "crossfilter2@1.4.0-alpha.6",
		"_id": "crossfilter2@1.4.0-alpha.6",
		"_inCache": true,
		"_location": "/crossfilter2",
		"_nodeVersion": "5.10.1",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/crossfilter2-1.4.0-alpha.6.tgz_1463519571786_0.49269671249203384"
		},
		"_npmUser": {
			"name": "esjewett",
			"email": "esjewett@gmail.com"
		},
		"_npmVersion": "3.8.3",
		"_phantomChildren": {},
		"_requested": {
			"raw": "crossfilter2@1.4.0-alpha.6",
			"scope": null,
			"escapedName": "crossfilter2",
			"name": "crossfilter2",
			"rawSpec": "1.4.0-alpha.6",
			"spec": "1.4.0-alpha.6",
			"type": "version"
		},
		"_requiredBy": [
			"/reductio",
			"/universe"
		],
		"_resolved": "https://registry.npm.taobao.org/crossfilter2/download/crossfilter2-1.4.0-alpha.6.tgz",
		"_shasum": "f0197c6fab2d6a583b51254bfc6357093f80521b",
		"_shrinkwrap": null,
		"_spec": "crossfilter2@1.4.0-alpha.6",
		"_where": "/Users/Marshall/ThomasWork/work-project/201612-hengshi.io/makalu/node_modules/universe",
		"author": {
			"name": "Mike Bostock",
			"url": "http://bost.ocks.org/mike"
		},
		"bugs": {
			"url": "https://github.com/crossfilter/crossfilter/issues"
		},
		"contributors": [
			{
				"name": "Jason Davies",
				"url": "http://www.jasondavies.com/"
			}
		],
		"dependencies": {
			"lodash.result": "^4.4.0"
		},
		"description": "Fast multidimensional filtering for coordinated views.",
		"devDependencies": {
			"browserify": "^13.0.0",
			"d3": "3.5",
			"package-json-versionify": "1.0.2",
			"uglify-js": "2.4.0",
			"vows": "0.7.0"
		},
		"directories": {},
		"dist": {
			"shasum": "f0197c6fab2d6a583b51254bfc6357093f80521b",
			"size": 46087,
			"noattachment": false,
			"tarball": "http://registry.npm.taobao.org/crossfilter2/download/crossfilter2-1.4.0-alpha.6.tgz"
		},
		"files": [
			"src",
			"index.js",
			"crossfilter.js",
			"crossfilter.min.js"
		],
		"gitHead": "509a96798f5153a58d1b6cae5fb3e7893129ce7c",
		"homepage": "http://crossfilter.github.com/crossfilter/",
		"keywords": [
			"analytics",
			"visualization",
			"crossfilter"
		],
		"main": "./index.js",
		"maintainers": [
			{
				"name": "esjewett",
				"email": "esjewett@gmail.com"
			},
			{
				"name": "gordonwoodhull",
				"email": "gordon@woodhull.com"
			},
			{
				"name": "tannerlinsley",
				"email": "tannerlinsley@gmail.com"
			}
		],
		"name": "crossfilter2",
		"optionalDependencies": {},
		"publish_time": 1463519574405,
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/crossfilter/crossfilter.git"
		},
		"scripts": {
			"benchmark": "node test/benchmark.js",
			"build": "browserify index.js -t package-json-versionify --standalone crossfilter -o crossfilter.js && uglifyjs --compress --mangle --screw-ie8 crossfilter.js -o crossfilter.min.js",
			"clean": "rm -f crossfilter.js crossfilter.min.js",
			"test": "vows --verbose"
		},
		"version": "1.4.0-alpha.6"
	};

/***/ },

/***/ 235:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
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
	 * method interface of `delete`, `get`, `has`, and `set`.
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
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
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
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
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
	 */
	var isArray = Array.isArray;

	/**
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
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
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
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
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
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
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
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
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
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * This method is like `_.get` except that if the resolved value is a
	 * function it's invoked with the `this` binding of its parent object and
	 * its result is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to resolve.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	 *
	 * _.result(object, 'a[0].b.c1');
	 * // => 3
	 *
	 * _.result(object, 'a[0].b.c2');
	 * // => 4
	 *
	 * _.result(object, 'a[0].b.c3', 'default');
	 * // => 'default'
	 *
	 * _.result(object, 'a[0].b.c3', _.constant('default'));
	 * // => 'default'
	 */
	function result(object, path, defaultValue) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length;

	  // Ensure the loop is entered when path is empty.
	  if (!length) {
	    object = undefined;
	    length = 1;
	  }
	  while (++index < length) {
	    var value = object == null ? undefined : object[toKey(path[index])];
	    if (value === undefined) {
	      index = length;
	      value = defaultValue;
	    }
	    object = isFunction(value) ? value.call(object) : value;
	  }
	  return object;
	}

	module.exports = result;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	var reductio_parameters = __webpack_require__(185);

	_assign = function assign(target) {
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var output = Object(target);
		for (var index = 1; index < arguments.length; ++index) {
			var source = arguments[index];
			if (source != null) {
				for (var nextKey in source) {
					if(source.hasOwnProperty(nextKey)) {
						output[nextKey] = source[nextKey];
					}
				}
			}
		}
		return output;
	};

	function accessor_build(obj, p) {
		// obj.order = function(value) {
		// 	if (!arguments.length) return p.order;
		// 	p.order = value;
		// 	return obj;
		// };

		// Converts a string to an accessor function
		function accessorify(v) {
			if( typeof v === 'string' ) {
				// Rewrite to a function
				var tempValue = v;
				var func = function (d) { return d[tempValue]; }
				return func;
			} else {
				return v;
			}
		}

		// Converts a string to an accessor function
		function accessorifyNumeric(v) {
			if( typeof v === 'string' ) {
				// Rewrite to a function
				var tempValue = v;
				var func = function (d) { return +d[tempValue]; }
				return func;
			} else {
				return v;
			}
		}

		obj.fromObject = function(value) {
			if(!arguments.length) return p;
			_assign(p, value);
			return obj;
		};

		obj.toObject = function() {
			return p;
		};

		obj.count = function(value, propName) {
			if (!arguments.length) return p.count;
	    if (!propName) {
	      propName = 'count';
	    }
			p.count = propName;
			return obj;
		};

		obj.sum = function(value) {
			if (!arguments.length) return p.sum;

			value = accessorifyNumeric(value);

			p.sum = value;
			return obj;
		};

		obj.avg = function(value) {
			if (!arguments.length) return p.avg;

			value = accessorifyNumeric(value);

			// We can take an accessor function, a boolean, or a string
			if( typeof value === 'function' ) {
				if(p.sum && p.sum !== value) console.warn('SUM aggregation is being overwritten by AVG aggregation');
				p.sum = value;
				p.avg = true;
				p.count = 'count';
			} else {
				p.avg = value;
			}
			return obj;
		};

		obj.exception = function(value) {
			if (!arguments.length) return p.exceptionAccessor;

			value = accessorify(value);

			p.exceptionAccessor = value;
			return obj;
		};

		obj.filter = function(value) {
			if (!arguments.length) return p.filter;
			p.filter = value;
			return obj;
		};

		obj.valueList = function(value) {
			if (!arguments.length) return p.valueList;

			value = accessorify(value);

			p.valueList = value;
			return obj;
		};

		obj.median = function(value) {
			if (!arguments.length) return p.median;

			value = accessorifyNumeric(value);

			if(typeof value === 'function') {
				if(p.valueList && p.valueList !== value) console.warn('VALUELIST accessor is being overwritten by median aggregation');
				p.valueList = value;
			}
			p.median = value;
			return obj;
		};

		obj.min = function(value) {
			if (!arguments.length) return p.min;

			value = accessorifyNumeric(value);

			if(typeof value === 'function') {
				if(p.valueList && p.valueList !== value) console.warn('VALUELIST accessor is being overwritten by min aggregation');
				p.valueList = value;
			}
			p.min = value;
			return obj;
		};

		obj.max = function(value) {
			if (!arguments.length) return p.max;

			value = accessorifyNumeric(value);

			if(typeof value === 'function') {
				if(p.valueList && p.valueList !== value) console.warn('VALUELIST accessor is being overwritten by max aggregation');
				p.valueList = value;
			}
			p.max = value;
			return obj;
		};

		obj.exceptionCount = function(value) {
			if (!arguments.length) return p.exceptionCount;

			value = accessorify(value);

			if( typeof value === 'function' ) {
				if(p.exceptionAccessor && p.exceptionAccessor !== value) console.warn('EXCEPTION accessor is being overwritten by exception count aggregation');
				p.exceptionAccessor = value;
				p.exceptionCount = true;
			} else {
				p.exceptionCount = value;
			}
			return obj;
		};

		obj.exceptionSum = function(value) {
			if (!arguments.length) return p.exceptionSum;

			value = accessorifyNumeric(value);

			p.exceptionSum = value;
			return obj;
		};

		obj.histogramValue = function(value) {
			if (!arguments.length) return p.histogramValue;

			value = accessorifyNumeric(value);

			p.histogramValue = value;
			return obj;
		};

		obj.histogramBins = function(value) {
			if (!arguments.length) return p.histogramThresholds;
			p.histogramThresholds = value;
			return obj;
		};

		obj.std = function(value) {
			if (!arguments.length) return p.std;

			value = accessorifyNumeric(value);

			if(typeof(value) === 'function') {
				p.sumOfSquares = value;
				p.sum = value;
				p.count = 'count';
				p.std = true;
			} else {
				p.std = value;
			}
			return obj;
		};

		obj.sumOfSq = function(value) {
			if (!arguments.length) return p.sumOfSquares;

			value = accessorifyNumeric(value);

			p.sumOfSquares = value;
			return obj;
		};

		obj.value = function(value, accessor) {
			if (!arguments.length || typeof value !== 'string' ) {
				console.error("'value' requires a string argument.");
			} else {
				if(!p.values) p.values = {};
				p.values[value] = {};
				p.values[value].parameters = reductio_parameters();
				accessor_build(p.values[value], p.values[value].parameters);
				if(accessor) p.values[value].accessor = accessor;
				return p.values[value];
			}
		};

		obj.nest = function(keyAccessorArray) {
			if(!arguments.length) return p.nestKeys;

			keyAccessorArray.map(accessorify);

			p.nestKeys = keyAccessorArray;
			return obj;
		};

		obj.alias = function(propAccessorObj) {
			if(!arguments.length) return p.aliasKeys;
			p.aliasKeys = propAccessorObj;
			return obj;
		};

		obj.aliasProp = function(propAccessorObj) {
			if(!arguments.length) return p.aliasPropKeys;
			p.aliasPropKeys = propAccessorObj;
			return obj;
		};

		obj.groupAll = function(groupTest) {
			if(!arguments.length) return p.groupAll;
			p.groupAll = groupTest;
			return obj;
		};

		obj.dataList = function(value) {
			if (!arguments.length) return p.dataList;
			p.dataList = value;
			return obj;
		};

		obj.custom = function(addRemoveInitialObj) {
			if (!arguments.length) return p.custom;
			p.custom = addRemoveInitialObj;
			return obj;
		};

	}

	var reductio_accessors = {
		build: accessor_build
	};

	module.exports = reductio_accessors;


/***/ },

/***/ 494:
/***/ function(module, exports) {

	var reductio_alias = {
		initial: function(prior, path, obj) {
			return function (p) {
				if(prior) p = prior(p);
				function buildAliasFunction(key){
					return function(){
						return obj[key](path(p));
					};
				}
				for(var prop in obj) {
					path(p)[prop] = buildAliasFunction(prop);
				}
				return p;
			};
		}
	};

	module.exports = reductio_alias;

/***/ },

/***/ 495:
/***/ function(module, exports) {

	var reductio_alias_prop = {
		add: function (obj, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				for(var prop in obj) {
					path(p)[prop] = obj[prop](path(p),v);
				}
				return p;
			};
		}
	};

	module.exports = reductio_alias_prop;

/***/ },

/***/ 496:
/***/ function(module, exports) {

	var reductio_avg = {
		add: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				if(path(p).count > 0) {
					path(p).avg = path(p).sum / path(p).count;
				} else {
					path(p).avg = 0;
				}
				return p;
			};
		},
		remove: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				if(path(p).count > 0) {
					path(p).avg = path(p).sum / path(p).count;
				} else {
					path(p).avg = 0;
				}
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).avg = 0;
				return p;
			};
		}
	};

	module.exports = reductio_avg;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	var reductio_filter = __webpack_require__(504);
	var reductio_count = __webpack_require__(499);
	var reductio_sum = __webpack_require__(516);
	var reductio_avg = __webpack_require__(496);
	var reductio_median = __webpack_require__(507);
	var reductio_min = __webpack_require__(508);
	var reductio_max = __webpack_require__(506);
	var reductio_value_count = __webpack_require__(517);
	var reductio_value_list = __webpack_require__(518);
	var reductio_exception_count = __webpack_require__(502);
	var reductio_exception_sum = __webpack_require__(503);
	var reductio_histogram = __webpack_require__(505);
	var reductio_sum_of_sq = __webpack_require__(515);
	var reductio_std = __webpack_require__(514);
	var reductio_nest = __webpack_require__(509);
	var reductio_alias = __webpack_require__(494);
	var reductio_alias_prop = __webpack_require__(495);
	var reductio_data_list = __webpack_require__(501);
	var reductio_custom = __webpack_require__(500);

	function build_function(p, f, path) {
		// We have to build these functions in order. Eventually we can include dependency
		// information and create a dependency graph if the process becomes complex enough.

		if(!path) path = function (d) { return d; };

		// Keep track of the original reducers so that filtering can skip back to
		// them if this particular value is filtered out.
		var origF = {
			reduceAdd: f.reduceAdd,
			reduceRemove: f.reduceRemove,
			reduceInitial: f.reduceInitial
		};

		if(p.count || p.std) {
	    f.reduceAdd = reductio_count.add(f.reduceAdd, path, p.count);
	    f.reduceRemove = reductio_count.remove(f.reduceRemove, path, p.count);
	    f.reduceInitial = reductio_count.initial(f.reduceInitial, path, p.count);
		}

		if(p.sum) {
			f.reduceAdd = reductio_sum.add(p.sum, f.reduceAdd, path);
			f.reduceRemove = reductio_sum.remove(p.sum, f.reduceRemove, path);
			f.reduceInitial = reductio_sum.initial(f.reduceInitial, path);
		}

		if(p.avg) {
			if(!p.count || !p.sum) {
				console.error("You must set .count(true) and define a .sum(accessor) to use .avg(true).");
			} else {
				f.reduceAdd = reductio_avg.add(p.sum, f.reduceAdd, path);
				f.reduceRemove = reductio_avg.remove(p.sum, f.reduceRemove, path);
				f.reduceInitial = reductio_avg.initial(f.reduceInitial, path);
			}
		}

		// The unique-only reducers come before the value_count reducers. They need to check if
		// the value is already in the values array on the group. They should only increment/decrement
		// counts if the value not in the array or the count on the value is 0.
		if(p.exceptionCount) {
			if(!p.exceptionAccessor) {
				console.error("You must define an .exception(accessor) to use .exceptionCount(true).");
			} else {
				f.reduceAdd = reductio_exception_count.add(p.exceptionAccessor, f.reduceAdd, path);
				f.reduceRemove = reductio_exception_count.remove(p.exceptionAccessor, f.reduceRemove, path);
				f.reduceInitial = reductio_exception_count.initial(f.reduceInitial, path);
			}
		}

		if(p.exceptionSum) {
			if(!p.exceptionAccessor) {
				console.error("You must define an .exception(accessor) to use .exceptionSum(accessor).");
			} else {
				f.reduceAdd = reductio_exception_sum.add(p.exceptionAccessor, p.exceptionSum, f.reduceAdd, path);
				f.reduceRemove = reductio_exception_sum.remove(p.exceptionAccessor, p.exceptionSum, f.reduceRemove, path);
				f.reduceInitial = reductio_exception_sum.initial(f.reduceInitial, path);
			}
		}

		// Maintain the values array.
		if(p.valueList || p.median || p.min || p.max) {
			f.reduceAdd = reductio_value_list.add(p.valueList, f.reduceAdd, path);
			f.reduceRemove = reductio_value_list.remove(p.valueList, f.reduceRemove, path);
			f.reduceInitial = reductio_value_list.initial(f.reduceInitial, path);
		}

		// Maintain the data array.
		if(p.dataList) {
			f.reduceAdd = reductio_data_list.add(p.dataList, f.reduceAdd, path);
			f.reduceRemove = reductio_data_list.remove(p.dataList, f.reduceRemove, path);
			f.reduceInitial = reductio_data_list.initial(f.reduceInitial, path);
		}

		if(p.median) {
			f.reduceAdd = reductio_median.add(f.reduceAdd, path);
			f.reduceRemove = reductio_median.remove(f.reduceRemove, path);
			f.reduceInitial = reductio_median.initial(f.reduceInitial, path);
		}

		if(p.min) {
			f.reduceAdd = reductio_min.add(f.reduceAdd, path);
			f.reduceRemove = reductio_min.remove(f.reduceRemove, path);
			f.reduceInitial = reductio_min.initial(f.reduceInitial, path);
		}

		if(p.max) {
			f.reduceAdd = reductio_max.add(f.reduceAdd, path);
			f.reduceRemove = reductio_max.remove(f.reduceRemove, path);
			f.reduceInitial = reductio_max.initial(f.reduceInitial, path);
		}

		// Maintain the values count array.
		if(p.exceptionAccessor) {
			f.reduceAdd = reductio_value_count.add(p.exceptionAccessor, f.reduceAdd, path);
			f.reduceRemove = reductio_value_count.remove(p.exceptionAccessor, f.reduceRemove, path);
			f.reduceInitial = reductio_value_count.initial(f.reduceInitial, path);
		}

		// Histogram
		if(p.histogramValue && p.histogramThresholds) {
			f.reduceAdd = reductio_histogram.add(p.histogramValue, f.reduceAdd, path);
			f.reduceRemove = reductio_histogram.remove(p.histogramValue, f.reduceRemove, path);
			f.reduceInitial = reductio_histogram.initial(p.histogramThresholds ,f.reduceInitial, path);
		}

		// Sum of Squares
		if(p.sumOfSquares) {
			f.reduceAdd = reductio_sum_of_sq.add(p.sumOfSquares, f.reduceAdd, path);
			f.reduceRemove = reductio_sum_of_sq.remove(p.sumOfSquares, f.reduceRemove, path);
			f.reduceInitial = reductio_sum_of_sq.initial(f.reduceInitial, path);
		}

		// Standard deviation
		if(p.std) {
			if(!p.sumOfSquares || !p.sum) {
				console.error("You must set .sumOfSq(accessor) and define a .sum(accessor) to use .std(true). Or use .std(accessor).");
			} else {
				f.reduceAdd = reductio_std.add(f.reduceAdd, path);
				f.reduceRemove = reductio_std.remove(f.reduceRemove, path);
				f.reduceInitial = reductio_std.initial(f.reduceInitial, path);
			}
		}

		// Custom reducer defined by 3 functions : add, remove, initial
		if (p.custom) {
			f.reduceAdd = reductio_custom.add(f.reduceAdd, path, p.custom.add);
			f.reduceRemove = reductio_custom.remove(f.reduceRemove, path, p.custom.remove);
			f.reduceInitial = reductio_custom.initial(f.reduceInitial, path, p.custom.initial);
		}

		// Nesting
		if(p.nestKeys) {
			f.reduceAdd = reductio_nest.add(p.nestKeys, f.reduceAdd, path);
			f.reduceRemove = reductio_nest.remove(p.nestKeys, f.reduceRemove, path);
			f.reduceInitial = reductio_nest.initial(f.reduceInitial, path);
		}

		// Alias functions
		if(p.aliasKeys) {
			f.reduceInitial = reductio_alias.initial(f.reduceInitial, path, p.aliasKeys);
		}

		// Alias properties - this is less efficient than alias functions
		if(p.aliasPropKeys) {
			f.reduceAdd = reductio_alias_prop.add(p.aliasPropKeys, f.reduceAdd, path);
			// This isn't a typo. The function is the same for add/remove.
			f.reduceRemove = reductio_alias_prop.add(p.aliasPropKeys, f.reduceRemove, path);
		}

		// Filters determine if our built-up priors should run, or if it should skip
		// back to the filters given at the beginning of this build function.
		if (p.filter) {
			f.reduceAdd = reductio_filter.add(p.filter, f.reduceAdd, origF.reduceAdd, path);
			f.reduceRemove = reductio_filter.remove(p.filter, f.reduceRemove, origF.reduceRemove, path);
		}

		// Values go last.
		if(p.values) {
			Object.getOwnPropertyNames(p.values).forEach(function(n) {
				// Set up the path on each group.
				var setupPath = function(prior) {
					return function (p) {
						p = prior(p);
						path(p)[n] = {};
						return p;
					};
				};
				f.reduceInitial = setupPath(f.reduceInitial);
				build_function(p.values[n].parameters, f, function (p) { return p[n]; });
			});
		}
	}

	var reductio_build = {
		build: build_function
	};

	module.exports = reductio_build;


/***/ },

/***/ 498:
/***/ function(module, exports) {

	var pluck = function(n){
	    return function(d){
	        return d[n];
	    };
	};

	// supported operators are sum, avg, and count
	_grouper = function(path, prior){
	    if(!path) path = function(d){return d;};
	    return function(p, v){
	        if(prior) prior(p, v);
	        var x = path(p), y = path(v);
	        if(typeof y.count !== 'undefined') x.count += y.count;
	        if(typeof y.sum !== 'undefined') x.sum += y.sum;
	        if(typeof y.avg !== 'undefined') x.avg = x.sum/x.count;
	        return p;
	    };
	};

	reductio_cap = function (prior, f, p) {
	    var obj = f.reduceInitial();
	    // we want to support values so we'll need to know what those are
	    var values = p.values ? Object.keys(p.values) : [];
	    var _othersGrouper = _grouper();
	    if (values.length) {
	        for (var i = 0; i < values.length; ++i) {
	            _othersGrouper = _grouper(pluck(values[i]), _othersGrouper);
	        }
	    }
	    return function (cap, othersName) {
	        if (!arguments.length) return prior();
	        if( cap === Infinity || !cap ) return prior();
	        var all = prior();
	        var slice_idx = cap-1;
	        if(all.length <= cap) return all;
	        var data = all.slice(0, slice_idx);
	        var others = {key: othersName || 'Others'};
	        others.value = f.reduceInitial();
	        for (var i = slice_idx; i < all.length; ++i) {
	            _othersGrouper(others.value, all[i].value);
	        }
	        data.push(others);
	        return data;
	    };
	};

	module.exports = reductio_cap;


/***/ },

/***/ 499:
/***/ function(module, exports) {

	var reductio_count = {
		add: function(prior, path, propName) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p)[propName]++;
				return p;
			};
		},
		remove: function(prior, path, propName) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p)[propName]--;
				return p;
			};
		},
		initial: function(prior, path, propName) {
			return function (p) {
				if(prior) p = prior(p);
				// if(p === undefined) p = {};
				path(p)[propName] = 0;
				return p;
			};
		}
	};

	module.exports = reductio_count;

/***/ },

/***/ 500:
/***/ function(module, exports) {

	var reductio_custom = {
		add: function(prior, path, addFn) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				return addFn(p, v);
			};
		},
		remove: function(prior, path, removeFn) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				return removeFn(p, v);
			};
		},
		initial: function(prior, path, initialFn) {
			return function (p) {	
				if(prior) p = prior(p);
				return initialFn(p);
			};
		}
	};

	module.exports = reductio_custom;

/***/ },

/***/ 501:
/***/ function(module, exports) {

	var reductio_data_list = {
		add: function(a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).dataList.push(v);
				return p;
			};
		},
		remove: function(a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).dataList.splice(path(p).dataList.indexOf(v), 1);
				return p;
			};
		},
		initial: function(prior, path) {
			return function (p) {
				if(prior) p = prior(p);
				path(p).dataList = [];
				return p;
			};
		}
	};

	module.exports = reductio_data_list;


/***/ },

/***/ 502:
/***/ function(module, exports) {

	var reductio_exception_count = {
		add: function (a, prior, path) {
			var i, curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Only count++ if the p.values array doesn't contain a(v) or if it's 0.
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				curr = path(p).values[i];
				if((!curr || curr[0] !== a(v)) || curr[1] === 0) {
					path(p).exceptionCount++;
				}
				return p;
			};
		},
		remove: function (a, prior, path) {
			var i, curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Only count-- if the p.values array contains a(v) value of 1.
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				curr = path(p).values[i];
				if(curr && curr[0] === a(v) && curr[1] === 1) {
					path(p).exceptionCount--;
				}
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).exceptionCount = 0;
				return p;
			};
		}
	};

	module.exports = reductio_exception_count;

/***/ },

/***/ 503:
/***/ function(module, exports) {

	var reductio_exception_sum = {
		add: function (a, sum, prior, path) {
			var i, curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Only sum if the p.values array doesn't contain a(v) or if it's 0.
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				curr = path(p).values[i];
				if((!curr || curr[0] !== a(v)) || curr[1] === 0) {
					path(p).exceptionSum = path(p).exceptionSum + sum(v);
				}
				return p;
			};
		},
		remove: function (a, sum, prior, path) {
			var i, curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Only sum if the p.values array contains a(v) value of 1.
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				curr = path(p).values[i];
				if(curr && curr[0] === a(v) && curr[1] === 1) {
					path(p).exceptionSum = path(p).exceptionSum - sum(v);
				}
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).exceptionSum = 0;
				return p;
			};
		}
	};

	module.exports = reductio_exception_sum;

/***/ },

/***/ 504:
/***/ function(module, exports) {

	var reductio_filter = {
		// The big idea here is that you give us a filter function to run on values,
		// a 'prior' reducer to run (just like the rest of the standard reducers),
		// and a reference to the last reducer (called 'skip' below) defined before
		// the most recent chain of reducers.  This supports individual filters for
		// each .value('...') chain that you add to your reducer.
		add: function (filter, prior, skip) {
			return function (p, v, nf) {
				if (filter(v, nf)) {
					if (prior) prior(p, v, nf);
				} else {
					if (skip) skip(p, v, nf);
				}
				return p;
			};
		},
		remove: function (filter, prior, skip) {
			return function (p, v, nf) {
				if (filter(v, nf)) {
					if (prior) prior(p, v, nf);
				} else {
					if (skip) skip(p, v, nf);
				}
				return p;
			};
		}
	};

	module.exports = reductio_filter;


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter = __webpack_require__(47);

	var reductio_histogram = {
		add: function (a, prior, path) {
			var bisect = crossfilter.bisect.by(function(d) { return d; }).left;
			var bisectHisto = crossfilter.bisect.by(function(d) { return d.x; }).right;
			var curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				curr = path(p).histogram[bisectHisto(path(p).histogram, a(v), 0, path(p).histogram.length) - 1];
				curr.y++;
				curr.splice(bisect(curr, a(v), 0, curr.length), 0, a(v));
				return p;
			};
		},
		remove: function (a, prior, path) {
			var bisect = crossfilter.bisect.by(function(d) { return d; }).left;
			var bisectHisto = crossfilter.bisect.by(function(d) { return d.x; }).right;
			var curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				curr = path(p).histogram[bisectHisto(path(p).histogram, a(v), 0, path(p).histogram.length) - 1];
				curr.y--;
				curr.splice(bisect(curr, a(v), 0, curr.length), 1);
				return p;
			};
		},
		initial: function (thresholds, prior, path) {
			return function (p) {
				p = prior(p);
				path(p).histogram = [];
				var arr = [];
				for(var i = 1; i < thresholds.length; i++) {
					arr = [];
					arr.x = thresholds[i - 1];
					arr.dx = (thresholds[i] - thresholds[i - 1]);
					arr.y = 0;
					path(p).histogram.push(arr);
				}
				return p;
			};
		}
	};

	module.exports = reductio_histogram;

/***/ },

/***/ 506:
/***/ function(module, exports) {

	var reductio_max = {
		add: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
	 
				path(p).max = path(p).valueList[path(p).valueList.length - 1];

				return p;
			};
		},
		remove: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				// Check for undefined.
				if(path(p).valueList.length === 0) {
					path(p).max = undefined;
					return p;
				}
	 
				path(p).max = path(p).valueList[path(p).valueList.length - 1];

				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).max = undefined;
				return p;
			};
		}
	};

	module.exports = reductio_max;

/***/ },

/***/ 507:
/***/ function(module, exports) {

	var reductio_median = {
		add: function (prior, path) {
			var half;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				half = Math.floor(path(p).valueList.length/2);
	 
				if(path(p).valueList.length % 2) {
					path(p).median = path(p).valueList[half];
				} else {
					path(p).median = (path(p).valueList[half-1] + path(p).valueList[half]) / 2.0;
				}

				return p;
			};
		},
		remove: function (prior, path) {
			var half;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				half = Math.floor(path(p).valueList.length/2);

				// Check for undefined.
				if(path(p).valueList.length === 0) {
					path(p).median = undefined;
					return p;
				}
	 
				if(path(p).valueList.length === 1 || path(p).valueList.length % 2) {
					path(p).median = path(p).valueList[half];
				} else {
					path(p).median = (path(p).valueList[half-1] + path(p).valueList[half]) / 2.0;
				}

				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).median = undefined;
				return p;
			};
		}
	};

	module.exports = reductio_median;

/***/ },

/***/ 508:
/***/ function(module, exports) {

	var reductio_min = {
		add: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
	 
				path(p).min = path(p).valueList[0];

				return p;
			};
		},
		remove: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				// Check for undefined.
				if(path(p).valueList.length === 0) {
					path(p).min = undefined;
					return p;
				}
	 
				path(p).min = path(p).valueList[0];

				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).min = undefined;
				return p;
			};
		}
	};

	module.exports = reductio_min;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter = __webpack_require__(47);

	var reductio_nest = {
		add: function (keyAccessors, prior, path) {
			var i; // Current key accessor
			var arrRef;
			var newRef;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				arrRef = path(p).nest;
				keyAccessors.forEach(function(a) {
					newRef = arrRef.filter(function(d) { return d.key === a(v); })[0];
					if(newRef) {
						// There is another level.
						arrRef = newRef.values;
					} else {
						// Next level doesn't yet exist so we create it.
						newRef = [];
						arrRef.push({ key: a(v), values: newRef });
						arrRef = newRef;
					}
				});

				arrRef.push(v);
				
				return p;
			};
		},
		remove: function (keyAccessors, prior, path) {
			var arrRef;
			var nextRef;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);

				arrRef = path(p).nest;
				keyAccessors.forEach(function(a) {
					arrRef = arrRef.filter(function(d) { return d.key === a(v); })[0].values;
				});

				// Array contains an actual reference to the row, so just splice it out.
				arrRef.splice(arrRef.indexOf(v), 1);

				// If the leaf now has length 0 and it's not the base array remove it.
				// TODO

				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).nest = [];
				return p;
			};
		}
	};

	module.exports = reductio_nest;

/***/ },

/***/ 510:
/***/ function(module, exports) {

	function postProcess(reductio) {
	    return function (group, p, f) {
	        group.post = function(){
	            var postprocess = function () {
	                return postprocess.all();
	            };
	            postprocess.all = function () {
	                return group.all();
	            };
	            var postprocessors = reductio.postprocessors;
	            Object.keys(postprocessors).forEach(function (name) {
	                postprocess[name] = function () {
	                    var _all = postprocess.all;
	                    var args = [].slice.call(arguments);
	                    postprocess.all = function () {
	                        return postprocessors[name](_all, f, p).apply(null, args);
	                    };
	                    return postprocess;
	                };
	            });
	            return postprocess;
	        };
	    };
	}

	module.exports = postProcess;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(reductio){
	    reductio.postprocessors = {};
	    reductio.registerPostProcessor = function(name, func){
	        reductio.postprocessors[name] = func;
	    };

	    reductio.registerPostProcessor('cap', __webpack_require__(498));
	    reductio.registerPostProcessor('sortBy', __webpack_require__(513));
	};


/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	var reductio_build = __webpack_require__(497);
	var reductio_accessors = __webpack_require__(493);
	var reductio_parameters = __webpack_require__(185);
	var reductio_postprocess = __webpack_require__(510);
	var crossfilter = __webpack_require__(47);

	function reductio() {
		var parameters = reductio_parameters();

		var funcs = {};

		function my(group) {
			// Start fresh each time.
			funcs = {
				reduceAdd: function(p) { return p; },
				reduceRemove: function(p) { return p; },
				reduceInitial: function () { return {}; },
			};

			reductio_build.build(parameters, funcs);

			// If we're doing groupAll
			if(parameters.groupAll) {
				if(group.top) {
					console.warn("'groupAll' is defined but attempting to run on a standard dimension.group(). Must run on dimension.groupAll().");
				} else {
					var bisect = crossfilter.bisect.by(function(d) { return d.key; }).left;
					var i, j;
					var keys;
	        var keysLength;
	        var k; // Key
					group.reduce(
						function(p, v, nf) {
							keys = parameters.groupAll(v);
	            keysLength = keys.length;
	            for(j=0;j<keysLength;j++) {
	              k = keys[j];
	              i = bisect(p, k, 0, p.length);
								if(!p[i] || p[i].key !== k) {
									// If the group doesn't yet exist, create it first.
									p.splice(i, 0, { key: k, value: funcs.reduceInitial() });
								}

								// Then pass the record and the group value to the reducers
								funcs.reduceAdd(p[i].value, v, nf);
	            }
							return p;
						},
						function(p, v, nf) {
							keys = parameters.groupAll(v);
	            keysLength = keys.length;
	            for(j=0;j<keysLength;j++) {
	              i = bisect(p, keys[j], 0, p.length);
								// The group should exist or we're in trouble!
								// Then pass the record and the group value to the reducers
								funcs.reduceRemove(p[i].value, v, nf);
	            }
							return p;
						},
						function() {
							return [];
						}
					);
					if(!group.all) {
						// Add an 'all' method for compatibility with standard Crossfilter groups.
						group.all = function() { return this.value(); };
					}
				}
			} else {
				group.reduce(funcs.reduceAdd, funcs.reduceRemove, funcs.reduceInitial);
			}

			reductio_postprocess(group, parameters, funcs);

			return group;
		}

		reductio_accessors.build(my, parameters);

		return my;
	}

	__webpack_require__(511)(reductio);
	reductio_postprocess = reductio_postprocess(reductio);

	module.exports = reductio;


/***/ },

/***/ 513:
/***/ function(module, exports) {

	var pluck_n = function (n) {
	    if (typeof n === 'function') {
	        return n;
	    }
	    if (~n.indexOf('.')) {
	        var split = n.split('.');
	        return function (d) {
	            return split.reduce(function (p, v) {
	                return p[v];
	            }, d);
	        };
	    }
	    return function (d) {
	        return d[n];
	    };
	};

	function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	var comparer = function (accessor, ordering) {
	    return function (a, b) {
	        return ordering(accessor(a), accessor(b));
	    };
	};

	var type = {}.toString;

	module.exports = function (prior) {
	    return function (value, order) {
	        if (arguments.length === 1) {
	            order = ascending;
	        }
	        return prior().sort(comparer(pluck_n(value), order));
	    };
	};


/***/ },

/***/ 514:
/***/ function(module, exports) {

	var reductio_std = {
		add: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				if(path(p).count > 0) {
					path(p).std = 0.0;
					var n = path(p).sumOfSq - path(p).sum*path(p).sum/path(p).count;
					if (n>0.0) path(p).std = Math.sqrt(n/(path(p).count-1));
				} else {
					path(p).std = 0.0;
				}
				return p;
			};
		},
		remove: function (prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				if(path(p).count > 0) {
					path(p).std = 0.0;
					var n = path(p).sumOfSq - path(p).sum*path(p).sum/path(p).count;
					if (n>0.0) path(p).std = Math.sqrt(n/(path(p).count-1));
				} else {
					path(p).std = 0;
				}
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).std = 0;
				return p;
			};
		}
	};

	module.exports = reductio_std;

/***/ },

/***/ 515:
/***/ function(module, exports) {

	var reductio_sum_of_sq = {
		add: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).sumOfSq = path(p).sumOfSq + a(v)*a(v);
				return p;
			};
		},
		remove: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).sumOfSq = path(p).sumOfSq - a(v)*a(v);
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).sumOfSq = 0;
				return p;
			};
		}
	};

	module.exports = reductio_sum_of_sq;

/***/ },

/***/ 516:
/***/ function(module, exports) {

	var reductio_sum = {
		add: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).sum = path(p).sum + a(v);
				return p;
			};
		},
		remove: function (a, prior, path) {
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				path(p).sum = path(p).sum - a(v);
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).sum = 0;
				return p;
			};
		}
	};

	module.exports = reductio_sum;

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter = __webpack_require__(47);

	var reductio_value_count = {
		add: function (a, prior, path) {
			var i, curr;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Not sure if this is more efficient than sorting.
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				curr = path(p).values[i];
				if(curr && curr[0] === a(v)) {
					// Value already exists in the array - increment it
					curr[1]++;
				} else {
					// Value doesn't exist - add it in form [value, 1]
					path(p).values.splice(i, 0, [a(v), 1]);
				}
				return p;
			};
		},
		remove: function (a, prior, path) {
			var i;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				i = path(p).bisect(path(p).values, a(v), 0, path(p).values.length);
				// Value already exists or something has gone terribly wrong.
				path(p).values[i][1]--;
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				// Array[Array[value, count]]
				path(p).values = [];
				path(p).bisect = crossfilter.bisect.by(function(d) { return d[0]; }).left;
				return p;
			};
		}
	};

	module.exports = reductio_value_count;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	var crossfilter = __webpack_require__(47);

	var reductio_value_list = {
		add: function (a, prior, path) {
			var i;
			var bisect = crossfilter.bisect.by(function(d) { return d; }).left;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				// Not sure if this is more efficient than sorting.
				i = bisect(path(p).valueList, a(v), 0, path(p).valueList.length);
				path(p).valueList.splice(i, 0, a(v));
				return p;
			};
		},
		remove: function (a, prior, path) {
			var i;
			var bisect = crossfilter.bisect.by(function(d) { return d; }).left;
			return function (p, v, nf) {
				if(prior) prior(p, v, nf);
				i = bisect(path(p).valueList, a(v), 0, path(p).valueList.length);
				// Value already exists or something has gone terribly wrong.
				path(p).valueList.splice(i, 1);
				return p;
			};
		},
		initial: function (prior, path) {
			return function (p) {
				p = prior(p);
				path(p).valueList = [];
				return p;
			};
		}
	};

	module.exports = reductio_value_list;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	module.exports = function (service) {
	  return function clear(def) {
	    // Clear a single or multiple column definitions
	    if (def) {
	      def = _.isArray(def) ? def : [def]
	    }

	    if (!def) {
	      // Clear all of the column defenitions
	      return Promise.all(_.map(service.columns, disposeColumn))
	        .then(function () {
	          service.columns = []
	          return service
	        })
	    }

	    return Promise.all(_.map(def, function (d) {
	      if (_.isObject(d)) {
	        d = d.key
	      }
	      // Clear the column
	      var column = _.remove(service.columns, function (c) {
	        if (_.isArray(d)) {
	          return !_.xor(c.key, d).length
	        }
	        if (c.key === d) {
	          if (c.dynamicReference) {
	            return false
	          }
	          return true
	        }
	      })[0]

	      if (!column) {
	        // console.info('Attempted to clear a column that is required for another query!', c)
	        return
	      }

	      disposeColumn(column)
	    }))
	    .then(function () {
	      return service
	    })

	    function disposeColumn(column) {
	      var disposalActions = []
	        // Dispose the dimension
	      if (column.removeListeners) {
	        disposalActions = _.map(column.removeListeners, function (listener) {
	          return Promise.resolve(listener())
	        })
	      }
	      var filterKey = column.key
	      if (column.complex === 'array') {
	        filterKey = JSON.stringify(column.key)
	      }
	      if (column.complex === 'function') {
	        filterKey = column.key.toString()
	      }
	      delete service.filters[filterKey]
	      if (column.dimension) {
	        disposalActions.push(Promise.resolve(column.dimension.dispose()))
	      }
	      return Promise.all(disposalActions)
	    }
	  }
	}


/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	module.exports = function (service) {
	  var dimension = __webpack_require__(525)(service)

	  var columnFunc = column
	  columnFunc.find = findColumn

	  return columnFunc

	  function column(def) {
	    // Support groupAll dimension
	    if (_.isUndefined(def)) {
	      def = true
	    }

	    // Always deal in bulk.  Like Costco!
	    if (!_.isArray(def)) {
	      def = [def]
	    }

	    // Mapp all column creation, wait for all to settle, then return the instance
	    return Promise.all(_.map(def, makeColumn))
	      .then(function () {
	        return service
	      })
	  }

	  function findColumn(d) {
	    return _.find(service.columns, function (c) {
	      if (_.isArray(d)) {
	        return !_.xor(c.key, d).length
	      }
	      return c.key === d
	    })
	  }

	  function getType(d) {
	    if (_.isNumber(d)) {
	      return 'number'
	    }
	    if (_.isBoolean(d)) {
	      return 'bool'
	    }
	    if (_.isArray(d)) {
	      return 'array'
	    }
	    if (_.isObject(d)) {
	      return 'object'
	    }
	    return 'string'
	  }

	  function makeColumn(d) {
	    var column = _.isObject(d) ? d : {
	      key: d,
	    }

	    var existing = findColumn(column.key)

	    if (existing) {
	      existing.temporary = false
	      if (existing.dynamicReference) {
	        existing.dynamicReference = false
	      }
	      return existing.promise
	        .then(function () {
	          return service
	        })
	    }

	    // for storing info about queries and post aggregations
	    column.queries = []
	    service.columns.push(column)

	    column.promise = Promise.try(function () {
	      return Promise.resolve(service.cf.all())
	    })
	    .then(function (all) {
	      var sample

	      // Complex column Keys
	      if (_.isFunction(column.key)) {
	        column.complex = 'function'
	        sample = column.key(all[0])
	      } else if (_.isString(column.key) && (column.key.indexOf('.') > -1 || column.key.indexOf('[') > -1)) {
	        column.complex = 'string'
	        sample = _.get(all[0], column.key)
	      } else if (_.isArray(column.key)) {
	        column.complex = 'array'
	        sample = _.values(_.pick(all[0], column.key))
	        if (sample.length !== column.key.length) {
	          throw new Error('Column key does not exist in data!', column.key)
	        }
	      } else {
	        sample = all[0][column.key]
	      }

	      // Index Column
	      if (!column.complex && column.key !== true && typeof sample === 'undefined') {
	        throw new Error('Column key does not exist in data!', column.key)
	      }

	      // If the column exists, let's at least make sure it's marked
	      // as permanent. There is a slight chance it exists because
	      // of a filter, and the user decides to make it permanent

	      if (column.key === true) {
	        column.type = 'all'
	      } else if (column.complex) {
	        column.type = 'complex'
	      } else if (column.array) {
	        column.type = 'array'
	      } else {
	        column.type = getType(sample)
	      }

	      return dimension.make(column.key, column.type, column.complex)
	    })
	    .then(function (dim) {
	      column.dimension = dim
	      column.filterCount = 0
	      var stopListeningForData = service.onDataChange(buildColumnKeys)
	      column.removeListeners = [stopListeningForData]

	      return buildColumnKeys()

	      // Build the columnKeys
	      function buildColumnKeys(changes) {
	        if (column.key === true) {
	          return Promise.resolve()
	        }

	        var accessor = dimension.makeAccessor(column.key, column.complex)
	        column.values = column.values || []

	        return Promise.try(function () {
	          if (changes && changes.added) {
	            return Promise.resolve(changes.added)
	          }
	          return Promise.resolve(column.dimension.bottom(Infinity))
	        })
	        .then(function (rows) {
	          var newValues
	          if (column.complex === 'string' || column.complex === 'function') {
	            newValues = _.map(rows, accessor)
	            // console.log(rows, accessor.toString(), newValues)
	          } else if (column.type === 'array') {
	            newValues = _.flatten(_.map(rows, accessor))
	          } else {
	            newValues = _.map(rows, accessor)
	          }
	          column.values = _.uniq(column.values.concat(newValues))
	        })
	      }
	    })

	    return column.promise
	      .then(function () {
	        return service
	      })
	  }
	}


/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var crossfilter = __webpack_require__(47)

	var _ = __webpack_require__(32)

	module.exports = function (service) {
	  return {
	    build: build,
	    generateColumns: generateColumns,
	    add: add,
	    remove: remove,
	  }

	  function build(c) {
	    if (_.isArray(c)) {
	      // This allows support for crossfilter async
	      return Promise.resolve(crossfilter(c))
	    }
	    if (!c || typeof c.dimension !== 'function') {
	      return Promise.reject(new Error('No Crossfilter data or instance found!'))
	    }
	    return Promise.resolve(c)
	  }

	  function generateColumns(data) {
	    if (!service.options.generatedColumns) {
	      return data
	    }
	    return _.map(data, function (d/* , i */) {
	      _.forEach(service.options.generatedColumns, function (val, key) {
	        d[key] = val(d)
	      })
	      return d
	    })
	  }

	  function add(data) {
	    data = generateColumns(data)
	    return Promise.try(function () {
	      return Promise.resolve(service.cf.add(data))
	    })
	    .then(function () {
	      return Promise.serial(_.map(service.dataListeners, function (listener) {
	        return function () {
	          return listener({
	            added: data
	          })
	        }
	      }))
	    })
	    .then(function () {
	      return service
	    })
	  }

	  function remove() {
	    return Promise.try(function () {
	      return Promise.resolve(service.cf.remove())
	    })
	    .then(function () {
	      return service
	    })
	  }
	}


/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	// var _ = require('./lodash') // _ is defined but never used

	module.exports = function (service) {
	  return function destroy() {
	    return service.clear()
	      .then(function () {
	        service.cf.dataListeners = []
	        service.cf.filterListeners = []
	        return Promise.resolve(service.cf.remove())
	      })
	      .then(function () {
	        return service
	      })
	  }
	}


/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	module.exports = function (service) {
	  return {
	    make: make,
	    makeAccessor: makeAccessor,
	  }

	  function make(key, type, complex) {
	    var accessor = makeAccessor(key, complex)
	    // Promise.resolve will handle promises or non promises, so
	    // this crossfilter async is supported if present
	    return Promise.resolve(service.cf.dimension(accessor, type === 'array'))
	  }

	  function makeAccessor(key, complex) {
	    var accessorFunction

	    if (complex === 'string') {
	      accessorFunction = function (d) {
	        return _.get(d, key)
	      }
	    } else if (complex === 'function') {
	      accessorFunction = key
	    } else if (complex === 'array') {
	      var arrayString = _.map(key, function (k) {
	        return 'd[\'' + k + '\']'
	      })
	      accessorFunction = new Function('d', String('return ' + JSON.stringify(arrayString).replace(/"/g, '')))  // eslint-disable-line  no-new-func
	    } else {
	      accessorFunction =
	        // Index Dimension
	        key === true ? function accessor(d, i) {
	          return i
	        } :
	        // Value Accessor Dimension
	        function (d) {
	          return d[key]
	        }
	    }
	    return accessorFunction
	  }
	}


/***/ },

/***/ 526:
/***/ function(module, exports) {

	'use strict'

	// var moment = require('moment')

	module.exports = {
	  // Getters
	  $field: $field,
	  // Booleans
	  $and: $and,
	  $or: $or,
	  $not: $not,

	  // Expressions
	  $eq: $eq,
	  $gt: $gt,
	  $gte: $gte,
	  $lt: $lt,
	  $lte: $lte,
	  $ne: $ne,
	  $type: $type,

	  // Array Expressions
	  $in: $in,
	  $nin: $nin,
	  $contains: $contains,
	  $excludes: $excludes,
	  $size: $size,
	}

	// Getters
	function $field(d, child) {
	  return d[child]
	}

	// Operators

	function $and(d, child) {
	  child = child(d)
	  for (var i = 0; i < child.length; i++) {
	    if (!child[i]) {
	      return false
	    }
	  }
	  return true
	}

	function $or(d, child) {
	  child = child(d)
	  for (var i = 0; i < child.length; i++) {
	    if (child[i]) {
	      return true
	    }
	  }
	  return false
	}

	function $not(d, child) {
	  child = child(d)
	  for (var i = 0; i < child.length; i++) {
	    if (child[i]) {
	      return false
	    }
	  }
	  return true
	}

	// Expressions

	function $eq(d, child) {
	  return d === child()
	}

	function $gt(d, child) {
	  return d > child()
	}

	function $gte(d, child) {
	  return d >= child()
	}

	function $lt(d, child) {
	  return d < child()
	}

	function $lte(d, child) {
	  return d <= child()
	}

	function $ne(d, child) {
	  return d !== child()
	}

	function $type(d, child) {
	  return typeof d === child()
	}

	// Array Expressions

	function $in(d, child) {
	  return d.indexOf(child()) > -1
	}

	function $nin(d, child) {
	  return d.indexOf(child()) === -1
	}

	function $contains(d, child) {
	  return child().indexOf(d) > -1
	}

	function $excludes(d, child) {
	  return child().indexOf(d) === -1
	}

	function $size(d, child) {
	  return d.length === child()
	}


/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	var aggregation = __webpack_require__(115)

	module.exports = function (/* service */) {
	  return {
	    post: post,
	    sortByKey: sortByKey,
	    limit: limit,
	    squash: squash,
	    change: change,
	    changeMap: changeMap,
	  }

	  function post(query, parent, cb) {
	    query.data = cloneIfLocked(parent)
	    return Promise.resolve(cb(query, parent))
	  }

	  function sortByKey(query, parent, desc) {
	    query.data = cloneIfLocked(parent)
	    query.data = _.sortBy(query.data, function (d) {
	      return d.key
	    })
	    if (desc) {
	      query.data.reverse()
	    }
	  }

	  // Limit results to n, or from start to end
	  function limit(query, parent, start, end) {
	    query.data = cloneIfLocked(parent)
	    if (_.isUndefined(end)) {
	      end = start || 0
	      start = 0
	    } else {
	      start = start || 0
	      end = end || query.data.length
	    }
	    query.data = query.data.splice(start, end - start)
	  }

	  // Squash results to n, or from start to end
	  function squash(query, parent, start, end, aggObj, label) {
	    query.data = cloneIfLocked(parent)
	    start = start || 0
	    end = end || query.data.length
	    var toSquash = query.data.splice(start, end - start)
	    var squashed = {
	      key: label || 'Other',
	      value: {}
	    }
	    _.recurseObject(aggObj, function (val, key, path) {
	      var items = []
	      _.forEach(toSquash, function (record) {
	        items.push(_.get(record.value, path))
	      })
	      _.set(squashed.value, path, aggregation.aggregators[val](items))
	    })
	    query.data.splice(start, 0, squashed)
	  }

	  function change(query, parent, start, end, aggObj) {
	    query.data = cloneIfLocked(parent)
	    start = start || 0
	    end = end || query.data.length
	    var obj = {
	      key: [query.data[start].key, query.data[end].key],
	      value: {}
	    }
	    _.recurseObject(aggObj, function (val, key, path) {
	      var changePath = _.clone(path)
	      changePath.pop()
	      changePath.push(key + 'Change')
	      _.set(obj.value, changePath, _.get(query.data[end].value, path) - _.get(query.data[start].value, path))
	    })
	    query.data = obj
	  }

	  function changeMap(query, parent, aggObj, defaultNull) {
	    defaultNull = _.isUndefined(defaultNull) ? 0 : defaultNull
	    query.data = cloneIfLocked(parent)
	    _.recurseObject(aggObj, function (val, key, path) {
	      var changePath = _.clone(path)
	      var fromStartPath = _.clone(path)
	      var fromEndPath = _.clone(path)

	      changePath.pop()
	      fromStartPath.pop()
	      fromEndPath.pop()

	      changePath.push(key + 'Change')
	      fromStartPath.push(key + 'ChangeFromStart')
	      fromEndPath.push(key + 'ChangeFromEnd')

	      var start = _.get(query.data[0].value, path, defaultNull)
	      var end = _.get(query.data[query.data.length - 1].value, path, defaultNull)

	      _.forEach(query.data, function (record, i) {
	        var previous = query.data[i - 1] || query.data[0]
	        _.set(query.data[i].value, changePath, _.get(record.value, path, defaultNull) - (previous ? _.get(previous.value, path, defaultNull) : defaultNull))
	        _.set(query.data[i].value, fromStartPath, _.get(record.value, path, defaultNull) - start)
	        _.set(query.data[i].value, fromEndPath, _.get(record.value, path, defaultNull) - end)
	      })
	    })
	  }
	}

	function cloneIfLocked(parent) {
	  return parent.locked ? _.clone(parent.data) : parent.data
	}


/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	Promise.serial = serial

	var isPromiseLike = function (obj) {
	  return obj && _.isFunction(obj.then)
	}

	function serial(tasks) {
	  // Fake a "previous task" for our initial iteration
	  var prevPromise
	  var error = new Error()
	  _.forEach(tasks, function (task, key) {
	    var success = task.success || task
	    var fail = task.fail
	    var notify = task.notify
	    var nextPromise

	    // First task
	    if (!prevPromise) { // eslint-disable-line no-negated-condition
	      nextPromise = success()
	      if (!isPromiseLike(nextPromise)) {
	        error.message = 'Task ' + key + ' did not return a promise.'
	        throw error
	      }
	    } else {
	      // Wait until the previous promise has resolved or rejected to execute the next task
	      nextPromise = prevPromise.then(
	        /* success */
	        function (data) {
	          if (!success) {
	            return data
	          }
	          var ret = success(data)
	          if (!isPromiseLike(ret)) {
	            error.message = 'Task ' + key + ' did not return a promise.'
	            throw error
	          }
	          return ret
	        },
	        /* failure */
	        function (reason) {
	          if (!fail) {
	            return Promise.reject(reason)
	          }
	          var ret = fail(reason)
	          if (!isPromiseLike(ret)) {
	            error.message = 'Fail for task ' + key + ' did not return a promise.'
	            throw error
	          }
	          return ret
	        },
	        notify)
	    }
	    prevPromise = nextPromise
	  })

	  return prevPromise || Promise.when()
	}


/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Promise = __webpack_require__(35)
	var _ = __webpack_require__(32)

	module.exports = function (service) {
	  var reductiofy = __webpack_require__(531)(service)
	  var filters = __webpack_require__(116)(service)
	  var postAggregation = __webpack_require__(527)(service)

	  var postAggregationMethods = _.keys(postAggregation)

	  return function doQuery(queryObj) {
	    var queryHash = JSON.stringify(queryObj)

	    // Attempt to reuse an exact copy of this query that is present elsewhere
	    for (var i = 0; i < service.columns.length; i++) {
	      for (var j = 0; j < service.columns[i].queries.length; j++) {
	        if (service.columns[i].queries[j].hash === queryHash) {
	          return Promise.try(function () { // eslint-disable-line no-loop-func
	            return service.columns[i].queries[j]
	          })
	        }
	      }
	    }

	    var query = {
	      // Original query passed in to query method
	      original: queryObj,
	      hash: queryHash
	    }

	    // Default queryObj
	    if (_.isUndefined(query.original)) {
	      query.original = {}
	    }
	    // Default select
	    if (_.isUndefined(query.original.select)) {
	      query.original.select = {
	        $count: true
	      }
	    }
	    // Default to groupAll
	    query.original.groupBy = query.original.groupBy || true

	    // Attach the query api to the query object
	    query = newQueryObj(query)

	    return createColumn(query)
	      .then(makeCrossfilterGroup)
	      .then(buildRequiredColumns)
	      .then(setupDataListeners)
	      .then(applyQuery)

	    function createColumn(query) {
	      // Ensure column is created
	      return service.column({
	        key: query.original.groupBy,
	        type: _.isUndefined(query.type) ? null : query.type,
	        array: Boolean(query.array)
	      })
	      .then(function () {
	        // Attach the column to the query
	        var column = service.column.find(query.original.groupBy)
	        query.column = column
	        column.queries.push(query)
	        column.removeListeners.push(function () {
	          return query.clear()
	        })
	        return query
	      })
	    }

	    function makeCrossfilterGroup(query) {
	      // Create the grouping on the columns dimension
	      // Using Promise Resolve allows support for crossfilter async
	      // TODO check if query already exists, and use the same base query // if possible
	      return Promise.resolve(query.column.dimension.group())
	        .then(function (g) {
	          query.group = g
	          return query
	        })
	    }

	    function buildRequiredColumns(query) {
	      var requiredColumns = filters.scanForDynamicFilters(query.original)
	        // We need to scan the group for any filters that would require
	        // the group to be rebuilt when data is added or removed in any way.
	      if (requiredColumns.length) {
	        return Promise.all(_.map(requiredColumns, function (columnKey) {
	          return service.column({
	            key: columnKey,
	            dynamicReference: query.group
	          })
	        }))
	        .then(function () {
	          return query
	        })
	      }
	      return query
	    }

	    function setupDataListeners(query) {
	      // Here, we create a listener to recreate and apply the reducer to
	      // the group anytime underlying data changes
	      var stopDataListen = service.onDataChange(function () {
	        return applyQuery(query)
	      })
	      query.removeListeners.push(stopDataListen)

	      // This is a similar listener for filtering which will (if needed)
	      // run any post aggregations on the data after each filter action
	      var stopFilterListen = service.onFilter(function () {
	        return postAggregate(query)
	      })
	      query.removeListeners.push(stopFilterListen)

	      return query
	    }

	    function applyQuery(query) {
	      return buildReducer(query)
	        .then(applyReducer)
	        .then(attachData)
	        .then(postAggregate)
	    }

	    function buildReducer(query) {
	      return reductiofy(query.original)
	        .then(function (reducer) {
	          query.reducer = reducer
	          return query
	        })
	    }

	    function applyReducer(query) {
	      return Promise.resolve(query.reducer(query.group))
	        .then(function () {
	          return query
	        })
	    }

	    function attachData(query) {
	      return Promise.resolve(query.group.all())
	        .then(function (data) {
	          query.data = data
	          return query
	        })
	    }

	    function postAggregate(query) {
	      if (query.postAggregations.length > 1) {
	        // If the query is used by 2+ post aggregations, we need to lock
	        // it against getting mutated by the post-aggregations
	        query.locked = true
	      }
	      return Promise.all(_.map(query.postAggregations, function (post) {
	        return post()
	      }))
	      .then(function () {
	        return query
	      })
	    }

	    function newQueryObj(q, parent) {
	      var locked = false
	      if (!parent) {
	        parent = q
	        q = {}
	        locked = true
	      }

	      // Assign the regular query properties
	      _.assign(q, {
	        // The Universe for continuous promise chaining
	        universe: service,
	        // Crossfilter instance
	        crossfilter: service.cf,

	        // parent Information
	        parent: parent,
	        column: parent.column,
	        dimension: parent.dimension,
	        group: parent.group,
	        reducer: parent.reducer,
	        original: parent.original,
	        hash: parent.hash,

	        // It's own removeListeners
	        removeListeners: [],

	        // It's own postAggregations
	        postAggregations: [],

	        // Data method
	        locked: locked,
	        lock: lock,
	        unlock: unlock,
	        // Disposal method
	        clear: clearQuery,
	      })

	      _.forEach(postAggregationMethods, function (method) {
	        q[method] = postAggregateMethodWrap(postAggregation[method])
	      })

	      return q

	      function lock(set) {
	        if (!_.isUndefined(set)) {
	          q.locked = Boolean(set)
	          return
	        }
	        q.locked = true
	      }

	      function unlock() {
	        q.locked = false
	      }

	      function clearQuery() {
	        _.forEach(q.removeListeners, function (l) {
	          l()
	        })
	        return Promise.try(function () {
	          return q.group.dispose()
	        })
	        .then(function () {
	          q.column.queries.splice(q.column.queries.indexOf(q), 1)
	          // Automatically recycle the column if there are no queries active on it
	          if (!q.column.queries.length) {
	            return service.clear(q.column.key)
	          }
	        })
	        .then(function () {
	          return service
	        })
	      }

	      function postAggregateMethodWrap(postMethod) {
	        return function () {
	          var args = Array.prototype.slice.call(arguments)
	          var sub = {}
	          newQueryObj(sub, q)
	          args.unshift(sub, q)

	          q.postAggregations.push(function () {
	            Promise.resolve(postMethod.apply(null, args))
	              .then(postAggregateChildren)
	          })

	          return Promise.resolve(postMethod.apply(null, args))
	            .then(postAggregateChildren)

	          function postAggregateChildren() {
	            return postAggregate(sub)
	              .then(function () {
	                return sub
	              })
	          }
	        }
	      }
	    }
	  }
	}


/***/ },

/***/ 530:
/***/ function(module, exports) {

	'use strict'

	// var _ = require('./lodash') // _ is defined but never used

	module.exports = {
	  shorthandLabels: {
	    $count: 'count',
	    $sum: 'sum',
	    $avg: 'avg',
	    $min: 'min',
	    $max: 'max',
	    $med: 'med',
	    $sumSq: 'sumSq',
	    $std: 'std',
	  },
	  aggregators: {
	    $count: $count,
	    $sum: $sum,
	    $avg: $avg,
	    $min: $min,
	    $max: $max,
	    $med: $med,
	    $sumSq: $sumSq,
	    $std: $std,
	    $valueList: $valueList,
	    $dataList: $dataList,
	  }
	}

	// Aggregators

	function $count(reducer/* , value */) {
	  return reducer.count(true)
	}

	function $sum(reducer, value) {
	  return reducer.sum(value)
	}

	function $avg(reducer, value) {
	  return reducer.avg(value)
	}

	function $min(reducer, value) {
	  return reducer.min(value)
	}

	function $max(reducer, value) {
	  return reducer.max(value)
	}

	function $med(reducer, value) {
	  return reducer.median(value)
	}

	function $sumSq(reducer, value) {
	  return reducer.sumOfSq(value)
	}

	function $std(reducer, value) {
	  return reducer.std(value)
	}

	function $valueList(reducer, value) {
	  return reducer.valueList(value)
	}

	function $dataList(reducer/* , value */) {
	  return reducer.dataList(true)
	}

	// TODO histograms
	// TODO exceptions


/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var reductio = __webpack_require__(512)

	var _ = __webpack_require__(32)
	var rAggregators = __webpack_require__(530)
	// var expressions = require('./expressions')  // exporession is defined but never used
	var aggregation = __webpack_require__(115)

	module.exports = function (service) {
	  var filters = __webpack_require__(116)(service)

	  return function reductiofy(query) {
	    var reducer = reductio()
	    // var groupBy = query.groupBy // groupBy is defined but never used
	    aggregateOrNest(reducer, query.select)

	    if (query.filter) {
	      var filterFunction = filters.makeFunction(query.filter)
	      if (filterFunction) {
	        reducer.filter(filterFunction)
	      }
	    }

	    return Promise.resolve(reducer)

	    // This function recursively find the first level of reductio methods in
	    // each object and adds that reduction method to reductio
	    function aggregateOrNest(reducer, selects) {
	      // Sort so nested values are calculated last by reductio's .value method
	      var sortedSelectKeyValue = _.sortBy(
	        _.map(selects, function (val, key) {
	          return {
	            key: key,
	            value: val
	          }
	        }),
	        function (s) {
	          if (rAggregators.aggregators[s.key]) {
	            return 0
	          }
	          return 1
	        })

	      // dive into each key/value
	      return _.forEach(sortedSelectKeyValue, function (s) {
	        // Found a Reductio Aggregation
	        if (rAggregators.aggregators[s.key]) {
	          // Build the valueAccessorFunction
	          var accessor = aggregation.makeValueAccessor(s.value)
	            // Add the reducer with the ValueAccessorFunction to the reducer
	          reducer = rAggregators.aggregators[s.key](reducer, accessor)
	          return
	        }

	        // Found a top level key value that is not an aggregation or a
	        // nested object. This is unacceptable.
	        if (!_.isObject(s.value)) {
	          console.error('Nested selects must be an object', s.key)
	          return
	        }

	        // It's another nested object, so just repeat this process on it
	        reducer = aggregateOrNest(reducer.value(s.key), s.value)
	      })
	    }
	  }
	}


/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	__webpack_require__(528)

	// var Promise = require('q')  // Promise is defined but never used
	var _ = __webpack_require__(32)

	module.exports = universe

	function universe(data, options) {
	  var service = {
	    options: _.assign({}, options),
	    columns: [],
	    filters: {},
	    dataListeners: [],
	    filterListeners: [],
	  }

	  var cf = __webpack_require__(523)(service)
	  var filters = __webpack_require__(116)(service)

	  data = cf.generateColumns(data)

	  return cf.build(data)
	    .then(function (data) {
	      service.cf = data
	      return _.assign(service, {
	        add: cf.add,
	        remove: cf.remove,
	        column: __webpack_require__(522)(service),
	        query: __webpack_require__(529)(service),
	        filter: filters.filter,
	        filterAll: filters.filterAll,
	        applyFilters: filters.applyFilters,
	        clear: __webpack_require__(521)(service),
	        destroy: __webpack_require__(524)(service),
	        onDataChange: onDataChange,
	        onFilter: onFilter,
	      })
	    })

	  function onDataChange(cb) {
	    service.dataListeners.push(cb)
	    return function () {
	      service.dataListeners.splice(service.dataListeners.indexOf(cb), 1)
	    }
	  }

	  function onFilter(cb) {
	    service.filterListeners.push(cb)
	    return function () {
	      service.filterListeners.splice(service.filterListeners.indexOf(cb), 1)
	    }
	  }
	}


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2Jhci5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkIiwid2VicGFjazovLy9zcmMvdXRpbC9tYWthbHVGaWx0ZXIuanM/OTQxMiIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9sb2Rhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9xL3EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vYXRvb2wtYnVpbGQvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2FnZ3JlZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2luc2VydGlvbnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvcGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nyb3NzZmlsdGVyL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy9iaXNlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXBzZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL251bGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL3Blcm11dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL3F1aWNrc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nyb3NzZmlsdGVyMi9zcmMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy96ZXJvLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3BhY2thZ2UuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5yZXN1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvYWNjZXNzb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2FsaWFzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2FsaWFzUHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9hdmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvY2FwLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2NvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9kYXRhLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvZXhjZXB0aW9uLWNvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2V4Y2VwdGlvbi1zdW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2hpc3RvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9uZXN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3Bvc3Rwcm9jZXNzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3Bvc3Rwcm9jZXNzb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3JlZHVjdGlvLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3NvcnRCeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9zdGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvc3VtLW9mLXNxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvc3VtLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3ZhbHVlLWNvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3ZhbHVlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvY29sdW1uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvZGltZW5zaW9uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL3Bvc3RBZ2dyZWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9xLnNlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9yZWR1Y3Rpb0FnZ3JlZ2F0b3JzLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL3JlZHVjdGlvZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvdW5pdmVyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3Jvc3NmaWx0ZXIgZnJvbSAnY3Jvc3NmaWx0ZXInO1xuaW1wb3J0IHVuaXZlcnNlIGZyb20gJ3VuaXZlcnNlJztcbmltcG9ydCB7IEJhciB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IG1ha2FsdUZpbHRlciBmcm9tICcuLi9zcmMvdXRpbC9tYWthbHVGaWx0ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBfc291cmNlID0gc291cmNlO1xuICAgIGNvbnN0IHsgdGltZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGltZUZpbHRlcikge1xuICAgICAgX3NvdXJjZSA9IF9zb3VyY2UuZmlsdGVyKHYgPT4gdi50aW1lID49IHRpbWVGaWx0ZXJbMF0gJiYgdi50aW1lIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCBCYXJTb3VyY2UgPSBtYWthbHVGaWx0ZXIoX3NvdXJjZSxcbiAgICAgIFt7IG5hbWU6ICdtZXRyaWMnIH1dLFxuICAgICAgWyd2YWx1ZScsICdhdmFsdWUnLCAnYnZhbHVlJ10sXG4gICAgICBbJ3N1bScsICdzdW0nLCAnc3VtJ10sXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhCYXJTb3VyY2UpXG4gICAgcmV0dXJuIDxCYXJcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgYW5pbWF0aW9uPXtmYWxzZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtCYXJTb3VyY2V9XG4gICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgZ3JvdXBBeGlzRG9tYWluPXttZXRyaWNzfVxuICAgICAgeUF4aXM9e1tgdmFsdWVgLCBgYXZhbHVlYCwgYGJ2YWx1ZWBdfVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYmFyLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IG1ha2FsdUZpbHRlciA9IChzZXJpZXMsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGFnZ3JlZ2F0ZXMpID0+IHtcbiAgY29uc3Qgb2JqZWN0ID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBkaW1lbnNpb25WYWx1ZXMgPSBbXTtcbiAgY29uc3Qgc2VyaWVzTGVuZ3RoID0gc2VyaWVzLmxlbmd0aDtcbiAgY29uc3QgbWV0cmljc0xlbmd0aCA9IG1ldHJpY3MubGVuZ3RoO1xuICBjb25zdCBkaW1lbnNpb25zTGVuZ3RoID0gZGltZW5zaW9ucy5sZW5ndGg7XG4gIGxldCBvYmplY3RMZW5ndGggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmllc0xlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpbWVuc2lvblZhbHVlID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBkaW1lbnNpb25zTGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChkaW1lbnNpb25zW3hdLmZvcm1hdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRpbWVuc2lvbnNbeF0uZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGltZW5zaW9uVmFsdWUucHVzaChkaW1lbnNpb25zW3hdLmZvcm1hdChzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaW1lbnNpb25WYWx1ZS5wdXNoKHNlcmllc1tpXVtkaW1lbnNpb25zW3hdLm5hbWVdKTtcbiAgICB9XG4gICAgY29uc3QgZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZSA9IGRpbWVuc2lvblZhbHVlLmpvaW4oJyonKTtcbiAgICAvLyBmaXJzdCBvZiBhbGwgZ3JvdXAgZGltZW5zaW9uXG4gICAgaWYgKCFvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV0pIHtcbiAgICAgIG9iamVjdFtkaW1lbnNpb25Db25jYXRlZFZhbHVlXSA9IHt9O1xuICAgICAgZGltZW5zaW9uVmFsdWVzLnB1c2goZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRpbWVuc2lvbnNMZW5ndGg7IHgrKykge1xuICAgICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bZGltZW5zaW9uc1t4XS5uYW1lXSA9IHNlcmllc1tpXVtkaW1lbnNpb25zW3hdLm5hbWVdOyAvLyBkaW1lbnNpb25WYWx1ZVt4XTtcbiAgICAgIH1cbiAgICAgIG9iamVjdExlbmd0aCArPSAxO1xuICAgIH1cbiAgICAvLyBpbnNlcnQgbWV0cmljJ3MgdmFsdWUgaW50byBrZXktdmFsdWUgYXJyYXlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1ldHJpY3NMZW5ndGg7IGorKykge1xuICAgICAgaWYgKCFvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bbWV0cmljc1tqXV0pIHtcbiAgICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dID0gW107XG4gICAgICB9XG4gICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bbWV0cmljc1tqXV0ucHVzaChzZXJpZXNbaV1bbWV0cmljc1tqXV0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvYmplY3RMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkaW1lbnNpb25LZXkgPSBkaW1lbnNpb25WYWx1ZXNbaW5kZXhdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWV0cmljc0xlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBtZXRyaWNLZXkgPSBtZXRyaWNzW2pdO1xuICAgICAgc3dpdGNoIChhZ2dyZWdhdGVzW2pdKSB7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgIGNhc2UgJ2F2Zyc6XG4gICAgICAgICAgY29uc3Qgc3VtID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5yZWR1Y2UoKHRvdGFsLCBuZXh0KSA9PiB0b3RhbCArIG5leHQsIDApO1xuICAgICAgICAgIGlmIChhZ2dyZWdhdGVzW2pdID09PSAnc3VtJykge1xuICAgICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IHN1bTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IHN1bSAvIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gTWF0aC5tYXgoLi4ub2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IE1hdGgubWluKC4uLm9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmaXJzdCc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV1bMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xhc3QnOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldLnBvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncm91cCBieSc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IF8udW5pcUJ5KG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG9iamVjdFtkaW1lbnNpb25LZXldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrYWx1RmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3V0aWwvbWFrYWx1RmlsdGVyLmpzXG4gKiovIiwiLyogZXNsaW50IG5vLXByb3RvdHlwZS1idWlsdGluczogMCAqL1xuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3NpZ246IGFzc2lnbixcbiAgZmluZDogZmluZCxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNCb29sZWFuOiBpc0Jvb2xlYW4sXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBnZXQ6IGdldCxcbiAgc2V0OiBzZXQsXG4gIG1hcDogbWFwLFxuICBrZXlzOiBrZXlzLFxuICBzb3J0Qnk6IHNvcnRCeSxcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBwaWNrOiBwaWNrLFxuICB4b3I6IHhvcixcbiAgY2xvbmU6IGNsb25lLFxuICBpc0VxdWFsOiBpc0VxdWFsLFxuICByZXBsYWNlQXJyYXk6IHJlcGxhY2VBcnJheSxcbiAgdW5pcTogdW5pcSxcbiAgZmxhdHRlbjogZmxhdHRlbixcbiAgc29ydDogc29ydCxcbiAgdmFsdWVzOiB2YWx1ZXMsXG4gIHJlY3Vyc2VPYmplY3Q6IHJlY3Vyc2VPYmplY3QsXG59XG5cbmZ1bmN0aW9uIGFzc2lnbihvdXQpIHtcbiAgb3V0ID0gb3V0IHx8IHt9XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBvdXRba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gZmluZChhLCBiKSB7XG4gIHJldHVybiBhLmZpbmQoYilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGEsIGIpIHtcbiAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgdmFyIHIgPSBiKG8pXG4gICAgaWYgKHIpIHtcbiAgICAgIGEuc3BsaWNlKGksIDEpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGEpXG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkID09PSAnb2JqZWN0JyAmJiAhaXNBcnJheShkKVxufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oZCkge1xuICByZXR1cm4gdHlwZW9mIGQgPT09ICdib29sZWFuJ1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhkKSB7XG4gIHJldHVybiB0eXBlb2YgZCA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoZCkge1xuICByZXR1cm4gdHlwZW9mIGQgPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYSkge1xuICByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gZ2V0KGEsIGIpIHtcbiAgaWYgKGlzQXJyYXkoYikpIHtcbiAgICBiID0gYi5qb2luKCcuJylcbiAgfVxuICByZXR1cm4gYlxuICAgIC5yZXBsYWNlKCdbJywgJy4nKS5yZXBsYWNlKCddJywgJycpXG4gICAgLnNwbGl0KCcuJylcbiAgICAucmVkdWNlKFxuICAgICAgZnVuY3Rpb24gKG9iaiwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtwcm9wZXJ0eV1cbiAgICAgIH0sIGFcbiAgICApXG59XG5cbmZ1bmN0aW9uIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBwcm9wID0gcHJvcFxuICAgICAgLnJlcGxhY2UoJ1snLCAnLicpLnJlcGxhY2UoJ10nLCAnJylcbiAgICAgIC5zcGxpdCgnLicpXG4gIH1cbiAgaWYgKHByb3AubGVuZ3RoID4gMSkge1xuICAgIHZhciBlID0gcHJvcC5zaGlmdCgpXG4gICAgYXNzaWduKG9ialtlXSA9XG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2VdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyBvYmpbZV0gOiB7fSxcbiAgICAgIHByb3AsXG4gICAgICB2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBvYmpbcHJvcFswXV0gPSB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcChhLCBiKSB7XG4gIHZhciBtXG4gIHZhciBrZXlcbiAgaWYgKGlzRnVuY3Rpb24oYikpIHtcbiAgICBpZiAoaXNPYmplY3QoYSkpIHtcbiAgICAgIG0gPSBbXVxuICAgICAgZm9yIChrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbS5wdXNoKGIoYVtrZXldLCBrZXksIGEpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbVxuICAgIH1cbiAgICByZXR1cm4gYS5tYXAoYilcbiAgfVxuICBpZiAoaXNPYmplY3QoYSkpIHtcbiAgICBtID0gW11cbiAgICBmb3IgKGtleSBpbiBhKSB7XG4gICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG0ucHVzaChhW2tleV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtXG4gIH1cbiAgcmV0dXJuIGEubWFwKGZ1bmN0aW9uIChhYSkge1xuICAgIHJldHVybiBhYVtiXVxuICB9KVxufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxufVxuXG5mdW5jdGlvbiBzb3J0QnkoYSwgYikge1xuICBpZiAoaXNGdW5jdGlvbihiKSkge1xuICAgIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKGFhLCBiYikge1xuICAgICAgaWYgKGIoYWEpID4gYihiYikpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH1cbiAgICAgIGlmIChiKGFhKSA8IGIoYmIpKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgYihhW2tleV0sIGtleSwgYSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gYS5mb3JFYWNoKGIpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYSkge1xuICByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnXG59XG5cbmZ1bmN0aW9uIHBpY2soYSwgYikge1xuICB2YXIgYyA9IHt9XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gKGJiKSB7XG4gICAgaWYgKHR5cGVvZiBhW2JiXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNbYmJdID0gYVtiYl1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBjXG59XG5cbmZ1bmN0aW9uIHhvcihhLCBiKSB7XG4gIHZhciB1bmlxdWUgPSBbXVxuICBmb3JFYWNoKGEsIGZ1bmN0aW9uIChhYSkge1xuICAgIGlmIChiLmluZGV4T2YoYWEpID09PSAtMSkge1xuICAgICAgcmV0dXJuIHVuaXF1ZS5wdXNoKGFhKVxuICAgIH1cbiAgfSlcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiAoYmIpIHtcbiAgICBpZiAoYS5pbmRleE9mKGJiKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB1bmlxdWUucHVzaChiYilcbiAgICB9XG4gIH0pXG4gIHJldHVybiB1bmlxdWVcbn1cblxuZnVuY3Rpb24gY2xvbmUoYSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0pKVxufVxuXG5mdW5jdGlvbiBpc0VxdWFsKHgsIHkpIHtcbiAgaWYgKCh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCkgJiYgKHR5cGVvZiB5ID09PSAnb2JqZWN0JyAmJiB5ICE9PSBudWxsKSkge1xuICAgIGlmIChPYmplY3Qua2V5cyh4KS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHkpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB4KSB7XG4gICAgICBpZiAoeS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAoIWlzRXF1YWwoeFtwcm9wXSwgeVtwcm9wXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmICh4ICE9PSB5KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFycmF5KGEsIGIpIHtcbiAgdmFyIGFsID0gYS5sZW5ndGhcbiAgdmFyIGJsID0gYi5sZW5ndGhcbiAgaWYgKGFsID4gYmwpIHtcbiAgICBhLnNwbGljZShibCwgYWwgLSBibClcbiAgfSBlbHNlIGlmIChhbCA8IGJsKSB7XG4gICAgYS5wdXNoLmFwcGx5KGEsIG5ldyBBcnJheShibCAtIGFsKSlcbiAgfVxuICBmb3JFYWNoKGEsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgIGFba2V5XSA9IGJba2V5XVxuICB9KVxuICByZXR1cm4gYVxufVxuXG5mdW5jdGlvbiB1bmlxKGEpIHtcbiAgdmFyIHNlZW4gPSBuZXcgU2V0KClcbiAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGFsbG93ID0gZmFsc2VcbiAgICBpZiAoIXNlZW4uaGFzKGl0ZW0pKSB7XG4gICAgICBzZWVuLmFkZChpdGVtKVxuICAgICAgYWxsb3cgPSB0cnVlXG4gICAgfVxuICAgIHJldHVybiBhbGxvd1xuICB9KVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFhKSB7XG4gIHZhciBmbGF0dGVuZWQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFhLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBhYVtpXVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3VycmVudC5sZW5ndGg7ICsraikge1xuICAgICAgZmxhdHRlbmVkLnB1c2goY3VycmVudFtqXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZsYXR0ZW5lZFxufVxuXG5mdW5jdGlvbiBzb3J0KGFycikge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0bXAgPSBhcnJbaV1cbiAgICB2YXIgaiA9IGlcbiAgICB3aGlsZSAoYXJyW2ogLSAxXSA+IHRtcCkge1xuICAgICAgYXJyW2pdID0gYXJyW2ogLSAxXTtcbiAgICAgIC0talxuICAgIH1cbiAgICBhcnJbal0gPSB0bXBcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdmFsdWVzKGEpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWVzLnB1c2goYVtrZXldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzXG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2VPYmplY3Qob2JqLCBjYikge1xuICBfcmVjdXJzZU9iamVjdChvYmosIFtdKVxuICByZXR1cm4gb2JqXG4gIGZ1bmN0aW9uIF9yZWN1cnNlT2JqZWN0KG9iaiwgcGF0aCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqKSB7IC8vICBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pblxuICAgICAgdmFyIG5ld1BhdGggPSBjbG9uZShwYXRoKVxuICAgICAgbmV3UGF0aC5wdXNoKGspXG4gICAgICBpZiAodHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcgJiYgb2JqW2tdICE9PSBudWxsKSB7XG4gICAgICAgIF9yZWN1cnNlT2JqZWN0KG9ialtrXSwgbmV3UGF0aClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBjYihvYmpba10sIGssIG5ld1BhdGgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvbG9kYXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHZpbTp0cz00OnN0cz00OnN3PTQ6XG4vKiFcbiAqXG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEyIEtyaXMgS293YWwgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVRcbiAqIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvcmF3L21hc3Rlci9MSUNFTlNFXG4gKlxuICogV2l0aCBwYXJ0cyBieSBUeWxlciBDbG9zZVxuICogQ29weXJpZ2h0IDIwMDctMjAwOSBUeWxlciBDbG9zZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBYIGxpY2Vuc2UgZm91bmRcbiAqIGF0IGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UuaHRtbFxuICogRm9ya2VkIGF0IHJlZl9zZW5kLmpzIHZlcnNpb246IDIwMDktMDUtMTFcbiAqXG4gKiBXaXRoIHBhcnRzIGJ5IE1hcmsgTWlsbGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cblxuKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBUaGlzIGZpbGUgd2lsbCBmdW5jdGlvbiBwcm9wZXJseSBhcyBhIDxzY3JpcHQ+IHRhZywgb3IgYSBtb2R1bGVcbiAgICAvLyB1c2luZyBDb21tb25KUyBhbmQgTm9kZUpTIG9yIFJlcXVpcmVKUyBtb2R1bGUgZm9ybWF0cy4gIEluXG4gICAgLy8gQ29tbW9uL05vZGUvUmVxdWlyZUpTLCB0aGUgbW9kdWxlIGV4cG9ydHMgdGhlIFEgQVBJIGFuZCB3aGVuXG4gICAgLy8gZXhlY3V0ZWQgYXMgYSBzaW1wbGUgPHNjcmlwdD4sIGl0IGNyZWF0ZXMgYSBRIGdsb2JhbCBpbnN0ZWFkLlxuXG4gICAgLy8gTW9udGFnZSBSZXF1aXJlXG4gICAgaWYgKHR5cGVvZiBib290c3RyYXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBib290c3RyYXAoXCJwcm9taXNlXCIsIGRlZmluaXRpb24pO1xuXG4gICAgLy8gQ29tbW9uSlNcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG5cbiAgICAvLyBSZXF1aXJlSlNcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShkZWZpbml0aW9uKTtcblxuICAgIC8vIFNFUyAoU2VjdXJlIEVjbWFTY3JpcHQpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICghc2VzLm9rKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlcy5tYWtlUSA9IGRlZmluaXRpb247XG4gICAgICAgIH1cblxuICAgIC8vIDxzY3JpcHQ+XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFByZWZlciB3aW5kb3cgb3ZlciBzZWxmIGZvciBhZGQtb24gc2NyaXB0cy4gVXNlIHNlbGYgZm9yXG4gICAgICAgIC8vIG5vbi13aW5kb3dlZCBjb250ZXh0cy5cbiAgICAgICAgdmFyIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBzZWxmO1xuXG4gICAgICAgIC8vIEdldCB0aGUgYHdpbmRvd2Agb2JqZWN0LCBzYXZlIHRoZSBwcmV2aW91cyBRIGdsb2JhbFxuICAgICAgICAvLyBhbmQgaW5pdGlhbGl6ZSBRIGFzIGEgZ2xvYmFsLlxuICAgICAgICB2YXIgcHJldmlvdXNRID0gZ2xvYmFsLlE7XG4gICAgICAgIGdsb2JhbC5RID0gZGVmaW5pdGlvbigpO1xuXG4gICAgICAgIC8vIEFkZCBhIG5vQ29uZmxpY3QgZnVuY3Rpb24gc28gUSBjYW4gYmUgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAgICAvLyBnbG9iYWwgbmFtZXNwYWNlLlxuICAgICAgICBnbG9iYWwuUS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLlEgPSBwcmV2aW91c1E7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgd2FzIG5vdCBhbnRpY2lwYXRlZCBieSBRLiBQbGVhc2UgZmlsZSBhIGJ1Zy5cIik7XG4gICAgfVxuXG59KShmdW5jdGlvbiAoKSB7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGhhc1N0YWNrcyA9IGZhbHNlO1xudHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbn0gY2F0Y2ggKGUpIHtcbiAgICBoYXNTdGFja3MgPSAhIWUuc3RhY2s7XG59XG5cbi8vIEFsbCBjb2RlIGFmdGVyIHRoaXMgcG9pbnQgd2lsbCBiZSBmaWx0ZXJlZCBmcm9tIHN0YWNrIHRyYWNlcyByZXBvcnRlZFxuLy8gYnkgUS5cbnZhciBxU3RhcnRpbmdMaW5lID0gY2FwdHVyZUxpbmUoKTtcbnZhciBxRmlsZU5hbWU7XG5cbi8vIHNoaW1zXG5cbi8vIHVzZWQgZm9yIGZhbGxiYWNrIGluIFwiYWxsUmVzb2x2ZWRcIlxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IHBvc3NpYmxlIG1lYW5zIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGEgZnV0dXJlIHR1cm5cbi8vIG9mIHRoZSBldmVudCBsb29wLlxudmFyIG5leHRUaWNrID0oZnVuY3Rpb24gKCkge1xuICAgIC8vIGxpbmtlZCBsaXN0IG9mIHRhc2tzIChzaW5nbGUsIHdpdGggaGVhZCBub2RlKVxuICAgIHZhciBoZWFkID0ge3Rhc2s6IHZvaWQgMCwgbmV4dDogbnVsbH07XG4gICAgdmFyIHRhaWwgPSBoZWFkO1xuICAgIHZhciBmbHVzaGluZyA9IGZhbHNlO1xuICAgIHZhciByZXF1ZXN0VGljayA9IHZvaWQgMDtcbiAgICB2YXIgaXNOb2RlSlMgPSBmYWxzZTtcbiAgICAvLyBxdWV1ZSBmb3IgbGF0ZSB0YXNrcywgdXNlZCBieSB1bmhhbmRsZWQgcmVqZWN0aW9uIHRyYWNraW5nXG4gICAgdmFyIGxhdGVyUXVldWUgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgICAvKiBqc2hpbnQgbG9vcGZ1bmM6IHRydWUgKi9cbiAgICAgICAgdmFyIHRhc2ssIGRvbWFpbjtcblxuICAgICAgICB3aGlsZSAoaGVhZC5uZXh0KSB7XG4gICAgICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgICAgICAgdGFzayA9IGhlYWQudGFzaztcbiAgICAgICAgICAgIGhlYWQudGFzayA9IHZvaWQgMDtcbiAgICAgICAgICAgIGRvbWFpbiA9IGhlYWQuZG9tYWluO1xuXG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgaGVhZC5kb21haW4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydW5TaW5nbGUodGFzaywgZG9tYWluKTtcblxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChsYXRlclF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFzayA9IGxhdGVyUXVldWUucG9wKCk7XG4gICAgICAgICAgICBydW5TaW5nbGUodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcnVucyBhIHNpbmdsZSBmdW5jdGlvbiBpbiB0aGUgYXN5bmMgcXVldWVcbiAgICBmdW5jdGlvbiBydW5TaW5nbGUodGFzaywgZG9tYWluKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXNrKCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZUpTKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gbm9kZSwgdW5jYXVnaHQgZXhjZXB0aW9ucyBhcmUgY29uc2lkZXJlZCBmYXRhbCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgLy8gUmUtdGhyb3cgdGhlbSBzeW5jaHJvbm91c2x5IHRvIGludGVycnVwdCBmbHVzaGluZyFcblxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBjb250aW51YXRpb24gaWYgdGhlIHVuY2F1Z2h0IGV4Y2VwdGlvbiBpcyBzdXBwcmVzc2VkXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuaW5nIFwidW5jYXVnaHRFeGNlcHRpb25cIiBldmVudHMgKGFzIGRvbWFpbnMgZG9lcykuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgaW4gbmV4dCBldmVudCB0byBhdm9pZCB0aWNrIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZmx1c2gsIDApO1xuICAgICAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBicm93c2VycywgdW5jYXVnaHQgZXhjZXB0aW9ucyBhcmUgbm90IGZhdGFsLlxuICAgICAgICAgICAgICAgIC8vIFJlLXRocm93IHRoZW0gYXN5bmNocm9ub3VzbHkgdG8gYXZvaWQgc2xvdy1kb3ducy5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0VGljayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHRhaWwgPSB0YWlsLm5leHQgPSB7XG4gICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgZG9tYWluOiBpc05vZGVKUyAmJiBwcm9jZXNzLmRvbWFpbixcbiAgICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICBwcm9jZXNzLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiICYmIHByb2Nlc3MubmV4dFRpY2spIHtcbiAgICAgICAgLy8gRW5zdXJlIFEgaXMgaW4gYSByZWFsIE5vZGUgZW52aXJvbm1lbnQsIHdpdGggYSBgcHJvY2Vzcy5uZXh0VGlja2AuXG4gICAgICAgIC8vIFRvIHNlZSB0aHJvdWdoIGZha2UgTm9kZSBlbnZpcm9ubWVudHM6XG4gICAgICAgIC8vICogTW9jaGEgdGVzdCBydW5uZXIgLSBleHBvc2VzIGEgYHByb2Nlc3NgIGdsb2JhbCB3aXRob3V0IGEgYG5leHRUaWNrYFxuICAgICAgICAvLyAqIEJyb3dzZXJpZnkgLSBleHBvc2VzIGEgYHByb2Nlc3MubmV4VGlja2AgZnVuY3Rpb24gdGhhdCB1c2VzXG4gICAgICAgIC8vICAgYHNldFRpbWVvdXRgLiBJbiB0aGlzIGNhc2UgYHNldEltbWVkaWF0ZWAgaXMgcHJlZmVycmVkIGJlY2F1c2VcbiAgICAgICAgLy8gICAgaXQgaXMgZmFzdGVyLiBCcm93c2VyaWZ5J3MgYHByb2Nlc3MudG9TdHJpbmcoKWAgeWllbGRzXG4gICAgICAgIC8vICAgXCJbb2JqZWN0IE9iamVjdF1cIiwgd2hpbGUgaW4gYSByZWFsIE5vZGUgZW52aXJvbm1lbnRcbiAgICAgICAgLy8gICBgcHJvY2Vzcy5uZXh0VGljaygpYCB5aWVsZHMgXCJbb2JqZWN0IHByb2Nlc3NdXCIuXG4gICAgICAgIGlzTm9kZUpTID0gdHJ1ZTtcblxuICAgICAgICByZXF1ZXN0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgICAgICB9O1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gSW4gSUUxMCwgTm9kZS5qcyAwLjkrLCBvciBodHRwczovL2dpdGh1Yi5jb20vTm9ibGVKUy9zZXRJbW1lZGlhdGVcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RUaWNrID0gc2V0SW1tZWRpYXRlLmJpbmQod2luZG93LCBmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoZmx1c2gpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIC8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIC8vIEF0IGxlYXN0IFNhZmFyaSBWZXJzaW9uIDYuMC41ICg4NTM2LjMwLjEpIGludGVybWl0dGVudGx5IGNhbm5vdCBjcmVhdGVcbiAgICAgICAgLy8gd29ya2luZyBtZXNzYWdlIHBvcnRzIHRoZSBmaXJzdCB0aW1lIGEgcGFnZSBsb2Fkcy5cbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXF1ZXN0VGljayA9IHJlcXVlc3RQb3J0VGljaztcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVxdWVzdFBvcnRUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gT3BlcmEgcmVxdWlyZXMgdXMgdG8gcHJvdmlkZSBhIG1lc3NhZ2UgcGF5bG9hZCwgcmVnYXJkbGVzcyBvZlxuICAgICAgICAgICAgLy8gd2hldGhlciB3ZSB1c2UgaXQuXG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmx1c2gsIDApO1xuICAgICAgICAgICAgcmVxdWVzdFBvcnRUaWNrKCk7XG4gICAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvbGQgYnJvd3NlcnNcbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoLCAwKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gcnVucyBhIHRhc2sgYWZ0ZXIgYWxsIG90aGVyIHRhc2tzIGhhdmUgYmVlbiBydW5cbiAgICAvLyB0aGlzIGlzIHVzZWZ1bCBmb3IgdW5oYW5kbGVkIHJlamVjdGlvbiB0cmFja2luZyB0aGF0IG5lZWRzIHRvIGhhcHBlblxuICAgIC8vIGFmdGVyIGFsbCBgdGhlbmBkIHRhc2tzIGhhdmUgYmVlbiBydW4uXG4gICAgbmV4dFRpY2sucnVuQWZ0ZXIgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICBsYXRlclF1ZXVlLnB1c2godGFzayk7XG4gICAgICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RUaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXh0VGljaztcbn0pKCk7XG5cbi8vIEF0dGVtcHQgdG8gbWFrZSBnZW5lcmljcyBzYWZlIGluIHRoZSBmYWNlIG9mIGRvd25zdHJlYW1cbi8vIG1vZGlmaWNhdGlvbnMuXG4vLyBUaGVyZSBpcyBubyBzaXR1YXRpb24gd2hlcmUgdGhpcyBpcyBuZWNlc3NhcnkuXG4vLyBJZiB5b3UgbmVlZCBhIHNlY3VyaXR5IGd1YXJhbnRlZSwgdGhlc2UgcHJpbW9yZGlhbHMgbmVlZCB0byBiZVxuLy8gZGVlcGx5IGZyb3plbiBhbnl3YXksIGFuZCBpZiB5b3UgZG9u4oCZdCBuZWVkIGEgc2VjdXJpdHkgZ3VhcmFudGVlLFxuLy8gdGhpcyBpcyBqdXN0IHBsYWluIHBhcmFub2lkLlxuLy8gSG93ZXZlciwgdGhpcyAqKm1pZ2h0KiogaGF2ZSB0aGUgbmljZSBzaWRlLWVmZmVjdCBvZiByZWR1Y2luZyB0aGUgc2l6ZSBvZlxuLy8gdGhlIG1pbmlmaWVkIGNvZGUgYnkgcmVkdWNpbmcgeC5jYWxsKCkgdG8gbWVyZWx5IHgoKVxuLy8gU2VlIE1hcmsgTWlsbGVy4oCZcyBleHBsYW5hdGlvbiBvZiB3aGF0IHRoaXMgZG9lcy5cbi8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWNvbnZlbnRpb25zOnNhZmVfbWV0YV9wcm9ncmFtbWluZ1xudmFyIGNhbGwgPSBGdW5jdGlvbi5jYWxsO1xuZnVuY3Rpb24gdW5jdXJyeVRoaXMoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsLmFwcGx5KGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbi8vIFRoaXMgaXMgZXF1aXZhbGVudCwgYnV0IHNsb3dlcjpcbi8vIHVuY3VycnlUaGlzID0gRnVuY3Rpb25fYmluZC5iaW5kKEZ1bmN0aW9uX2JpbmQuY2FsbCk7XG4vLyBodHRwOi8vanNwZXJmLmNvbS91bmN1cnJ5dGhpc1xuXG52YXIgYXJyYXlfc2xpY2UgPSB1bmN1cnJ5VGhpcyhBcnJheS5wcm90b3R5cGUuc2xpY2UpO1xuXG52YXIgYXJyYXlfcmVkdWNlID0gdW5jdXJyeVRoaXMoXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2ssIGJhc2lzKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgLy8gY29uY2VybmluZyB0aGUgaW5pdGlhbCB2YWx1ZSwgaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gc2VlayB0byB0aGUgZmlyc3QgdmFsdWUgaW4gdGhlIGFycmF5LCBhY2NvdW50aW5nXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHBvc3NpYmlsaXR5IHRoYXQgaXMgaXMgYSBzcGFyc2UgYXJyYXlcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggaW4gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICBiYXNpcyA9IHRoaXNbaW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKytpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZHVjZVxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIHRoZSBwb3NzaWJpbGl0eSB0aGF0IHRoZSBhcnJheSBpcyBzcGFyc2VcbiAgICAgICAgICAgIGlmIChpbmRleCBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgYmFzaXMgPSBjYWxsYmFjayhiYXNpcywgdGhpc1tpbmRleF0sIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzaXM7XG4gICAgfVxuKTtcblxudmFyIGFycmF5X2luZGV4T2YgPSB1bmN1cnJ5VGhpcyhcbiAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbm90IGEgdmVyeSBnb29kIHNoaW0sIGJ1dCBnb29kIGVub3VnaCBmb3Igb3VyIG9uZSB1c2Ugb2YgaXRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuKTtcblxudmFyIGFycmF5X21hcCA9IHVuY3VycnlUaGlzKFxuICAgIEFycmF5LnByb3RvdHlwZS5tYXAgfHwgZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzcCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb2xsZWN0ID0gW107XG4gICAgICAgIGFycmF5X3JlZHVjZShzZWxmLCBmdW5jdGlvbiAodW5kZWZpbmVkLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbGxlY3QucHVzaChjYWxsYmFjay5jYWxsKHRoaXNwLCB2YWx1ZSwgaW5kZXgsIHNlbGYpKTtcbiAgICAgICAgfSwgdm9pZCAwKTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Q7XG4gICAgfVxuKTtcblxudmFyIG9iamVjdF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90b3R5cGUpIHtcbiAgICBmdW5jdGlvbiBUeXBlKCkgeyB9XG4gICAgVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgcmV0dXJuIG5ldyBUeXBlKCk7XG59O1xuXG52YXIgb2JqZWN0X2hhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbnZhciBvYmplY3Rfa2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdF9oYXNPd25Qcm9wZXJ0eShvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufTtcblxudmFyIG9iamVjdF90b1N0cmluZyA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gT2JqZWN0KHZhbHVlKTtcbn1cblxuLy8gZ2VuZXJhdG9yIHJlbGF0ZWQgc2hpbXNcblxuLy8gRklYTUU6IFJlbW92ZSB0aGlzIGZ1bmN0aW9uIG9uY2UgRVM2IGdlbmVyYXRvcnMgYXJlIGluIFNwaWRlck1vbmtleS5cbmZ1bmN0aW9uIGlzU3RvcEl0ZXJhdGlvbihleGNlcHRpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBvYmplY3RfdG9TdHJpbmcoZXhjZXB0aW9uKSA9PT0gXCJbb2JqZWN0IFN0b3BJdGVyYXRpb25dXCIgfHxcbiAgICAgICAgZXhjZXB0aW9uIGluc3RhbmNlb2YgUVJldHVyblZhbHVlXG4gICAgKTtcbn1cblxuLy8gRklYTUU6IFJlbW92ZSB0aGlzIGhlbHBlciBhbmQgUS5yZXR1cm4gb25jZSBFUzYgZ2VuZXJhdG9ycyBhcmUgaW5cbi8vIFNwaWRlck1vbmtleS5cbnZhciBRUmV0dXJuVmFsdWU7XG5pZiAodHlwZW9mIFJldHVyblZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgUVJldHVyblZhbHVlID0gUmV0dXJuVmFsdWU7XG59IGVsc2Uge1xuICAgIFFSZXR1cm5WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfTtcbn1cblxuLy8gbG9uZyBzdGFjayB0cmFjZXNcblxudmFyIFNUQUNLX0pVTVBfU0VQQVJBVE9SID0gXCJGcm9tIHByZXZpb3VzIGV2ZW50OlwiO1xuXG5mdW5jdGlvbiBtYWtlU3RhY2tUcmFjZUxvbmcoZXJyb3IsIHByb21pc2UpIHtcbiAgICAvLyBJZiBwb3NzaWJsZSwgdHJhbnNmb3JtIHRoZSBlcnJvciBzdGFjayB0cmFjZSBieSByZW1vdmluZyBOb2RlIGFuZCBRXG4gICAgLy8gY3J1ZnQsIHRoZW4gY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBzdGFjayB0cmFjZSBvZiBgcHJvbWlzZWAuIFNlZSAjNTcuXG4gICAgaWYgKGhhc1N0YWNrcyAmJlxuICAgICAgICBwcm9taXNlLnN0YWNrICYmXG4gICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICBlcnJvciAhPT0gbnVsbCAmJlxuICAgICAgICBlcnJvci5zdGFjayAmJlxuICAgICAgICBlcnJvci5zdGFjay5pbmRleE9mKFNUQUNLX0pVTVBfU0VQQVJBVE9SKSA9PT0gLTFcbiAgICApIHtcbiAgICAgICAgdmFyIHN0YWNrcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBwID0gcHJvbWlzZTsgISFwOyBwID0gcC5zb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChwLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tzLnVuc2hpZnQocC5zdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tzLnVuc2hpZnQoZXJyb3Iuc3RhY2spO1xuXG4gICAgICAgIHZhciBjb25jYXRlZFN0YWNrcyA9IHN0YWNrcy5qb2luKFwiXFxuXCIgKyBTVEFDS19KVU1QX1NFUEFSQVRPUiArIFwiXFxuXCIpO1xuICAgICAgICBlcnJvci5zdGFjayA9IGZpbHRlclN0YWNrU3RyaW5nKGNvbmNhdGVkU3RhY2tzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclN0YWNrU3RyaW5nKHN0YWNrU3RyaW5nKSB7XG4gICAgdmFyIGxpbmVzID0gc3RhY2tTdHJpbmcuc3BsaXQoXCJcXG5cIik7XG4gICAgdmFyIGRlc2lyZWRMaW5lcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcblxuICAgICAgICBpZiAoIWlzSW50ZXJuYWxGcmFtZShsaW5lKSAmJiAhaXNOb2RlRnJhbWUobGluZSkgJiYgbGluZSkge1xuICAgICAgICAgICAgZGVzaXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc2lyZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVGcmFtZShzdGFja0xpbmUpIHtcbiAgICByZXR1cm4gc3RhY2tMaW5lLmluZGV4T2YoXCIobW9kdWxlLmpzOlwiKSAhPT0gLTEgfHxcbiAgICAgICAgICAgc3RhY2tMaW5lLmluZGV4T2YoXCIobm9kZS5qczpcIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoc3RhY2tMaW5lKSB7XG4gICAgLy8gTmFtZWQgZnVuY3Rpb25zOiBcImF0IGZ1bmN0aW9uTmFtZSAoZmlsZW5hbWU6bGluZU51bWJlcjpjb2x1bW5OdW1iZXIpXCJcbiAgICAvLyBJbiBJRTEwIGZ1bmN0aW9uIG5hbWUgY2FuIGhhdmUgc3BhY2VzIChcIkFub255bW91cyBmdW5jdGlvblwiKSBPX29cbiAgICB2YXIgYXR0ZW1wdDEgPSAvYXQgLisgXFwoKC4rKTooXFxkKyk6KD86XFxkKylcXCkkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQxKSB7XG4gICAgICAgIHJldHVybiBbYXR0ZW1wdDFbMV0sIE51bWJlcihhdHRlbXB0MVsyXSldO1xuICAgIH1cblxuICAgIC8vIEFub255bW91cyBmdW5jdGlvbnM6IFwiYXQgZmlsZW5hbWU6bGluZU51bWJlcjpjb2x1bW5OdW1iZXJcIlxuICAgIHZhciBhdHRlbXB0MiA9IC9hdCAoW14gXSspOihcXGQrKTooPzpcXGQrKSQvLmV4ZWMoc3RhY2tMaW5lKTtcbiAgICBpZiAoYXR0ZW1wdDIpIHtcbiAgICAgICAgcmV0dXJuIFthdHRlbXB0MlsxXSwgTnVtYmVyKGF0dGVtcHQyWzJdKV07XG4gICAgfVxuXG4gICAgLy8gRmlyZWZveCBzdHlsZTogXCJmdW5jdGlvbkBmaWxlbmFtZTpsaW5lTnVtYmVyIG9yIEBmaWxlbmFtZTpsaW5lTnVtYmVyXCJcbiAgICB2YXIgYXR0ZW1wdDMgPSAvLipAKC4rKTooXFxkKykkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQzKSB7XG4gICAgICAgIHJldHVybiBbYXR0ZW1wdDNbMV0sIE51bWJlcihhdHRlbXB0M1syXSldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNJbnRlcm5hbEZyYW1lKHN0YWNrTGluZSkge1xuICAgIHZhciBmaWxlTmFtZUFuZExpbmVOdW1iZXIgPSBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoc3RhY2tMaW5lKTtcblxuICAgIGlmICghZmlsZU5hbWVBbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMF07XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMV07XG5cbiAgICByZXR1cm4gZmlsZU5hbWUgPT09IHFGaWxlTmFtZSAmJlxuICAgICAgICBsaW5lTnVtYmVyID49IHFTdGFydGluZ0xpbmUgJiZcbiAgICAgICAgbGluZU51bWJlciA8PSBxRW5kaW5nTGluZTtcbn1cblxuLy8gZGlzY292ZXIgb3duIGZpbGUgbmFtZSBhbmQgbGluZSBudW1iZXIgcmFuZ2UgZm9yIGZpbHRlcmluZyBzdGFja1xuLy8gdHJhY2VzXG5mdW5jdGlvbiBjYXB0dXJlTGluZSgpIHtcbiAgICBpZiAoIWhhc1N0YWNrcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2YXIgbGluZXMgPSBlLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICB2YXIgZmlyc3RMaW5lID0gbGluZXNbMF0uaW5kZXhPZihcIkBcIikgPiAwID8gbGluZXNbMV0gOiBsaW5lc1syXTtcbiAgICAgICAgdmFyIGZpbGVOYW1lQW5kTGluZU51bWJlciA9IGdldEZpbGVOYW1lQW5kTGluZU51bWJlcihmaXJzdExpbmUpO1xuICAgICAgICBpZiAoIWZpbGVOYW1lQW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcUZpbGVOYW1lID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzBdO1xuICAgICAgICByZXR1cm4gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzFdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKGNhbGxiYWNrLCBuYW1lLCBhbHRlcm5hdGl2ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obmFtZSArIFwiIGlzIGRlcHJlY2F0ZWQsIHVzZSBcIiArIGFsdGVybmF0aXZlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiBpbnN0ZWFkLlwiLCBuZXcgRXJyb3IoXCJcIikuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG4vLyBlbmQgb2Ygc2hpbXNcbi8vIGJlZ2lubmluZyBvZiByZWFsIHdvcmtcblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgcHJvbWlzZSBmb3IgYW4gaW1tZWRpYXRlIHJlZmVyZW5jZSwgcGFzc2VzIHByb21pc2VzIHRocm91Z2gsIG9yXG4gKiBjb2VyY2VzIHByb21pc2VzIGZyb20gZGlmZmVyZW50IHN5c3RlbXMuXG4gKiBAcGFyYW0gdmFsdWUgaW1tZWRpYXRlIHJlZmVyZW5jZSBvciBwcm9taXNlXG4gKi9cbmZ1bmN0aW9uIFEodmFsdWUpIHtcbiAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYSBQcm9taXNlLCByZXR1cm4gaXQgZGlyZWN0bHkuICBUaGlzIGVuYWJsZXNcbiAgICAvLyB0aGUgcmVzb2x2ZSBmdW5jdGlvbiB0byBib3RoIGJlIHVzZWQgdG8gY3JlYXRlZCByZWZlcmVuY2VzIGZyb20gb2JqZWN0cyxcbiAgICAvLyBidXQgdG8gdG9sZXJhYmx5IGNvZXJjZSBub24tcHJvbWlzZXMgdG8gcHJvbWlzZXMuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gYXNzaW1pbGF0ZSB0aGVuYWJsZXNcbiAgICBpZiAoaXNQcm9taXNlQWxpa2UodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjb2VyY2UodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdWxmaWxsKHZhbHVlKTtcbiAgICB9XG59XG5RLnJlc29sdmUgPSBRO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgdGFzayBpbiBhIGZ1dHVyZSB0dXJuIG9mIHRoZSBldmVudCBsb29wLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdGFza1xuICovXG5RLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbi8qKlxuICogQ29udHJvbHMgd2hldGhlciBvciBub3QgbG9uZyBzdGFjayB0cmFjZXMgd2lsbCBiZSBvblxuICovXG5RLmxvbmdTdGFja1N1cHBvcnQgPSBmYWxzZTtcblxuLy8gZW5hYmxlIGxvbmcgc3RhY2tzIGlmIFFfREVCVUcgaXMgc2V0XG5pZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5RX0RFQlVHKSB7XG4gICAgUS5sb25nU3RhY2tTdXBwb3J0ID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEge3Byb21pc2UsIHJlc29sdmUsIHJlamVjdH0gb2JqZWN0LlxuICpcbiAqIGByZXNvbHZlYCBpcyBhIGNhbGxiYWNrIHRvIGludm9rZSB3aXRoIGEgbW9yZSByZXNvbHZlZCB2YWx1ZSBmb3IgdGhlXG4gKiBwcm9taXNlLiBUbyBmdWxmaWxsIHRoZSBwcm9taXNlLCBpbnZva2UgYHJlc29sdmVgIHdpdGggYW55IHZhbHVlIHRoYXQgaXNcbiAqIG5vdCBhIHRoZW5hYmxlLiBUbyByZWplY3QgdGhlIHByb21pc2UsIGludm9rZSBgcmVzb2x2ZWAgd2l0aCBhIHJlamVjdGVkXG4gKiB0aGVuYWJsZSwgb3IgaW52b2tlIGByZWplY3RgIHdpdGggdGhlIHJlYXNvbiBkaXJlY3RseS4gVG8gcmVzb2x2ZSB0aGVcbiAqIHByb21pc2UgdG8gYW5vdGhlciB0aGVuYWJsZSwgdGh1cyBwdXR0aW5nIGl0IGluIHRoZSBzYW1lIHN0YXRlLCBpbnZva2VcbiAqIGByZXNvbHZlYCB3aXRoIHRoYXQgb3RoZXIgdGhlbmFibGUuXG4gKi9cblEuZGVmZXIgPSBkZWZlcjtcbmZ1bmN0aW9uIGRlZmVyKCkge1xuICAgIC8vIGlmIFwibWVzc2FnZXNcIiBpcyBhbiBcIkFycmF5XCIsIHRoYXQgaW5kaWNhdGVzIHRoYXQgdGhlIHByb21pc2UgaGFzIG5vdCB5ZXRcbiAgICAvLyBiZWVuIHJlc29sdmVkLiAgSWYgaXQgaXMgXCJ1bmRlZmluZWRcIiwgaXQgaGFzIGJlZW4gcmVzb2x2ZWQuICBFYWNoXG4gICAgLy8gZWxlbWVudCBvZiB0aGUgbWVzc2FnZXMgYXJyYXkgaXMgaXRzZWxmIGFuIGFycmF5IG9mIGNvbXBsZXRlIGFyZ3VtZW50cyB0b1xuICAgIC8vIGZvcndhcmQgdG8gdGhlIHJlc29sdmVkIHByb21pc2UuICBXZSBjb2VyY2UgdGhlIHJlc29sdXRpb24gdmFsdWUgdG8gYVxuICAgIC8vIHByb21pc2UgdXNpbmcgdGhlIGByZXNvbHZlYCBmdW5jdGlvbiBiZWNhdXNlIGl0IGhhbmRsZXMgYm90aCBmdWxseVxuICAgIC8vIG5vbi10aGVuYWJsZSB2YWx1ZXMgYW5kIG90aGVyIHRoZW5hYmxlcyBncmFjZWZ1bGx5LlxuICAgIHZhciBtZXNzYWdlcyA9IFtdLCBwcm9ncmVzc0xpc3RlbmVycyA9IFtdLCByZXNvbHZlZFByb21pc2U7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBvYmplY3RfY3JlYXRlKGRlZmVyLnByb3RvdHlwZSk7XG4gICAgdmFyIHByb21pc2UgPSBvYmplY3RfY3JlYXRlKFByb21pc2UucHJvdG90eXBlKTtcblxuICAgIHByb21pc2UucHJvbWlzZURpc3BhdGNoID0gZnVuY3Rpb24gKHJlc29sdmUsIG9wLCBvcGVyYW5kcykge1xuICAgICAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChtZXNzYWdlcykge1xuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChhcmdzKTtcbiAgICAgICAgICAgIGlmIChvcCA9PT0gXCJ3aGVuXCIgJiYgb3BlcmFuZHNbMV0pIHsgLy8gcHJvZ3Jlc3Mgb3BlcmFuZFxuICAgICAgICAgICAgICAgIHByb2dyZXNzTGlzdGVuZXJzLnB1c2gob3BlcmFuZHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnByb21pc2VEaXNwYXRjaC5hcHBseShyZXNvbHZlZFByb21pc2UsIGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gWFhYIGRlcHJlY2F0ZWRcbiAgICBwcm9taXNlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChtZXNzYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5lYXJlclZhbHVlID0gbmVhcmVyKHJlc29sdmVkUHJvbWlzZSk7XG4gICAgICAgIGlmIChpc1Byb21pc2UobmVhcmVyVmFsdWUpKSB7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UgPSBuZWFyZXJWYWx1ZTsgLy8gc2hvcnRlbiBjaGFpblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWFyZXJWYWx1ZTtcbiAgICB9O1xuXG4gICAgcHJvbWlzZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXJlc29sdmVkUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdGU6IFwicGVuZGluZ1wiIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkUHJvbWlzZS5pbnNwZWN0KCk7XG4gICAgfTtcblxuICAgIGlmIChRLmxvbmdTdGFja1N1cHBvcnQgJiYgaGFzU3RhY2tzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gTk9URTogZG9uJ3QgdHJ5IHRvIHVzZSBgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2VgIG9yIHRyYW5zZmVyIHRoZVxuICAgICAgICAgICAgLy8gYWNjZXNzb3IgYXJvdW5kOyB0aGF0IGNhdXNlcyBtZW1vcnkgbGVha3MgYXMgcGVyIEdILTExMS4gSnVzdFxuICAgICAgICAgICAgLy8gcmVpZnkgdGhlIHN0YWNrIHRyYWNlIGFzIGEgc3RyaW5nIEFTQVAuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQXQgdGhlIHNhbWUgdGltZSwgY3V0IG9mZiB0aGUgZmlyc3QgbGluZTsgaXQncyBhbHdheXMganVzdFxuICAgICAgICAgICAgLy8gXCJbb2JqZWN0IFByb21pc2VdXFxuXCIsIGFzIHBlciB0aGUgYHRvU3RyaW5nYC5cbiAgICAgICAgICAgIHByb21pc2Uuc3RhY2sgPSBlLnN0YWNrLnN1YnN0cmluZyhlLnN0YWNrLmluZGV4T2YoXCJcXG5cIikgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5PVEU6IHdlIGRvIHRoZSBjaGVja3MgZm9yIGByZXNvbHZlZFByb21pc2VgIGluIGVhY2ggbWV0aG9kLCBpbnN0ZWFkIG9mXG4gICAgLy8gY29uc29saWRhdGluZyB0aGVtIGludG8gYGJlY29tZWAsIHNpbmNlIG90aGVyd2lzZSB3ZSdkIGNyZWF0ZSBuZXdcbiAgICAvLyBwcm9taXNlcyB3aXRoIHRoZSBsaW5lcyBgYmVjb21lKHdoYXRldmVyKHZhbHVlKSlgLiBTZWUgZS5nLiBHSC0yNTIuXG5cbiAgICBmdW5jdGlvbiBiZWNvbWUobmV3UHJvbWlzZSkge1xuICAgICAgICByZXNvbHZlZFByb21pc2UgPSBuZXdQcm9taXNlO1xuICAgICAgICBwcm9taXNlLnNvdXJjZSA9IG5ld1Byb21pc2U7XG5cbiAgICAgICAgYXJyYXlfcmVkdWNlKG1lc3NhZ2VzLCBmdW5jdGlvbiAodW5kZWZpbmVkLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9taXNlLnByb21pc2VEaXNwYXRjaC5hcHBseShuZXdQcm9taXNlLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB2b2lkIDApO1xuXG4gICAgICAgIG1lc3NhZ2VzID0gdm9pZCAwO1xuICAgICAgICBwcm9ncmVzc0xpc3RlbmVycyA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICBkZWZlcnJlZC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlY29tZShRKHZhbHVlKSk7XG4gICAgfTtcblxuICAgIGRlZmVycmVkLmZ1bGZpbGwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHJlc29sdmVkUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVjb21lKGZ1bGZpbGwodmFsdWUpKTtcbiAgICB9O1xuICAgIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgaWYgKHJlc29sdmVkUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVjb21lKHJlamVjdChyZWFzb24pKTtcbiAgICB9O1xuICAgIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBpZiAocmVzb2x2ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheV9yZWR1Y2UocHJvZ3Jlc3NMaXN0ZW5lcnMsIGZ1bmN0aW9uICh1bmRlZmluZWQsIHByb2dyZXNzTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIFEubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHZvaWQgMCk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWZlcnJlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgTm9kZS1zdHlsZSBjYWxsYmFjayB0aGF0IHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIGRlZmVycmVkXG4gKiBwcm9taXNlLlxuICogQHJldHVybnMgYSBub2RlYmFja1xuICovXG5kZWZlci5wcm90b3R5cGUubWFrZU5vZGVSZXNvbHZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBzZWxmLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHNlbGYucmVzb2x2ZShhcnJheV9zbGljZShhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0gcmVzb2x2ZXIge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBub3RoaW5nIGFuZCBhY2NlcHRzXG4gKiB0aGUgcmVzb2x2ZSwgcmVqZWN0LCBhbmQgbm90aWZ5IGZ1bmN0aW9ucyBmb3IgYSBkZWZlcnJlZC5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IG1heSBiZSByZXNvbHZlZCB3aXRoIHRoZSBnaXZlbiByZXNvbHZlIGFuZCByZWplY3RcbiAqIGZ1bmN0aW9ucywgb3IgcmVqZWN0ZWQgYnkgYSB0aHJvd24gZXhjZXB0aW9uIGluIHJlc29sdmVyXG4gKi9cblEuUHJvbWlzZSA9IHByb21pc2U7IC8vIEVTNlxuUS5wcm9taXNlID0gcHJvbWlzZTtcbmZ1bmN0aW9uIHByb21pc2UocmVzb2x2ZXIpIHtcbiAgICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInJlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0LCBkZWZlcnJlZC5ub3RpZnkpO1xuICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbnByb21pc2UucmFjZSA9IHJhY2U7IC8vIEVTNlxucHJvbWlzZS5hbGwgPSBhbGw7IC8vIEVTNlxucHJvbWlzZS5yZWplY3QgPSByZWplY3Q7IC8vIEVTNlxucHJvbWlzZS5yZXNvbHZlID0gUTsgLy8gRVM2XG5cbi8vIFhYWCBleHBlcmltZW50YWwuICBUaGlzIG1ldGhvZCBpcyBhIHdheSB0byBkZW5vdGUgdGhhdCBhIGxvY2FsIHZhbHVlIGlzXG4vLyBzZXJpYWxpemFibGUgYW5kIHNob3VsZCBiZSBpbW1lZGlhdGVseSBkaXNwYXRjaGVkIHRvIGEgcmVtb3RlIHVwb24gcmVxdWVzdCxcbi8vIGluc3RlYWQgb2YgcGFzc2luZyBhIHJlZmVyZW5jZS5cblEucGFzc0J5Q29weSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAvL2ZyZWV6ZShvYmplY3QpO1xuICAgIC8vcGFzc0J5Q29waWVzLnNldChvYmplY3QsIHRydWUpO1xuICAgIHJldHVybiBvYmplY3Q7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5wYXNzQnlDb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vZnJlZXplKG9iamVjdCk7XG4gICAgLy9wYXNzQnlDb3BpZXMuc2V0KG9iamVjdCwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIElmIHR3byBwcm9taXNlcyBldmVudHVhbGx5IGZ1bGZpbGwgdG8gdGhlIHNhbWUgdmFsdWUsIHByb21pc2VzIHRoYXQgdmFsdWUsXG4gKiBidXQgb3RoZXJ3aXNlIHJlamVjdHMuXG4gKiBAcGFyYW0geCB7QW55Kn1cbiAqIEBwYXJhbSB5IHtBbnkqfVxuICogQHJldHVybnMge0FueSp9IGEgcHJvbWlzZSBmb3IgeCBhbmQgeSBpZiB0aGV5IGFyZSB0aGUgc2FtZSwgYnV0IGEgcmVqZWN0aW9uXG4gKiBvdGhlcndpc2UuXG4gKlxuICovXG5RLmpvaW4gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiBRKHgpLmpvaW4oeSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gKHRoYXQpIHtcbiAgICByZXR1cm4gUShbdGhpcywgdGhhdF0pLnNwcmVhZChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgLy8gVE9ETzogXCI9PT1cIiBzaG91bGQgYmUgT2JqZWN0LmlzIG9yIGVxdWl2XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGpvaW46IG5vdCB0aGUgc2FtZTogXCIgKyB4ICsgXCIgXCIgKyB5KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIGZpcnN0IG9mIGFuIGFycmF5IG9mIHByb21pc2VzIHRvIGJlY29tZSBzZXR0bGVkLlxuICogQHBhcmFtIGFuc3dlcnMge0FycmF5W0FueSpdfSBwcm9taXNlcyB0byByYWNlXG4gKiBAcmV0dXJucyB7QW55Kn0gdGhlIGZpcnN0IHByb21pc2UgdG8gYmUgc2V0dGxlZFxuICovXG5RLnJhY2UgPSByYWNlO1xuZnVuY3Rpb24gcmFjZShhbnN3ZXJQcykge1xuICAgIHJldHVybiBwcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gU3dpdGNoIHRvIHRoaXMgb25jZSB3ZSBjYW4gYXNzdW1lIGF0IGxlYXN0IEVTNVxuICAgICAgICAvLyBhbnN3ZXJQcy5mb3JFYWNoKGZ1bmN0aW9uIChhbnN3ZXJQKSB7XG4gICAgICAgIC8vICAgICBRKGFuc3dlclApLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIFVzZSB0aGlzIGluIHRoZSBtZWFudGltZVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYW5zd2VyUHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIFEoYW5zd2VyUHNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oUS5yYWNlKTtcbn07XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIFByb21pc2Ugd2l0aCBhIHByb21pc2UgZGVzY3JpcHRvciBvYmplY3QgYW5kIG9wdGlvbmFsIGZhbGxiYWNrXG4gKiBmdW5jdGlvbi4gIFRoZSBkZXNjcmlwdG9yIGNvbnRhaW5zIG1ldGhvZHMgbGlrZSB3aGVuKHJlamVjdGVkKSwgZ2V0KG5hbWUpLFxuICogc2V0KG5hbWUsIHZhbHVlKSwgcG9zdChuYW1lLCBhcmdzKSwgYW5kIGRlbGV0ZShuYW1lKSwgd2hpY2ggYWxsXG4gKiByZXR1cm4gZWl0aGVyIGEgdmFsdWUsIGEgcHJvbWlzZSBmb3IgYSB2YWx1ZSwgb3IgYSByZWplY3Rpb24uICBUaGUgZmFsbGJhY2tcbiAqIGFjY2VwdHMgdGhlIG9wZXJhdGlvbiBuYW1lLCBhIHJlc29sdmVyLCBhbmQgYW55IGZ1cnRoZXIgYXJndW1lbnRzIHRoYXQgd291bGRcbiAqIGhhdmUgYmVlbiBmb3J3YXJkZWQgdG8gdGhlIGFwcHJvcHJpYXRlIG1ldGhvZCBhYm92ZSBoYWQgYSBtZXRob2QgYmVlblxuICogcHJvdmlkZWQgd2l0aCB0aGUgcHJvcGVyIG5hbWUuICBUaGUgQVBJIG1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgdGhlIG5hdHVyZVxuICogb2YgdGhlIHJldHVybmVkIG9iamVjdCwgYXBhcnQgZnJvbSB0aGF0IGl0IGlzIHVzYWJsZSB3aGVyZWV2ZXIgcHJvbWlzZXMgYXJlXG4gKiBib3VnaHQgYW5kIHNvbGQuXG4gKi9cblEubWFrZVByb21pc2UgPSBQcm9taXNlO1xuZnVuY3Rpb24gUHJvbWlzZShkZXNjcmlwdG9yLCBmYWxsYmFjaywgaW5zcGVjdCkge1xuICAgIGlmIChmYWxsYmFjayA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZhbGxiYWNrID0gZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIlByb21pc2UgZG9lcyBub3Qgc3VwcG9ydCBvcGVyYXRpb246IFwiICsgb3BcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaW5zcGVjdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlOiBcInVua25vd25cIn07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSBvYmplY3RfY3JlYXRlKFByb21pc2UucHJvdG90eXBlKTtcblxuICAgIHByb21pc2UucHJvbWlzZURpc3BhdGNoID0gZnVuY3Rpb24gKHJlc29sdmUsIG9wLCBhcmdzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvcltvcF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkZXNjcmlwdG9yW29wXS5hcHBseShwcm9taXNlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsbGJhY2suY2FsbChwcm9taXNlLCBvcCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcm9taXNlLmluc3BlY3QgPSBpbnNwZWN0O1xuXG4gICAgLy8gWFhYIGRlcHJlY2F0ZWQgYHZhbHVlT2ZgIGFuZCBgZXhjZXB0aW9uYCBzdXBwb3J0XG4gICAgaWYgKGluc3BlY3QpIHtcbiAgICAgICAgdmFyIGluc3BlY3RlZCA9IGluc3BlY3QoKTtcbiAgICAgICAgaWYgKGluc3BlY3RlZC5zdGF0ZSA9PT0gXCJyZWplY3RlZFwiKSB7XG4gICAgICAgICAgICBwcm9taXNlLmV4Y2VwdGlvbiA9IGluc3BlY3RlZC5yZWFzb247XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5zcGVjdGVkID0gaW5zcGVjdCgpO1xuICAgICAgICAgICAgaWYgKGluc3BlY3RlZC5zdGF0ZSA9PT0gXCJwZW5kaW5nXCIgfHxcbiAgICAgICAgICAgICAgICBpbnNwZWN0ZWQuc3RhdGUgPT09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3BlY3RlZC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlXVwiO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzc2VkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgdmFyIGRvbmUgPSBmYWxzZTsgICAvLyBlbnN1cmUgdGhlIHVudHJ1c3RlZCBwcm9taXNlIG1ha2VzIGF0IG1vc3QgYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luZ2xlIGNhbGwgdG8gb25lIG9mIHRoZSBjYWxsYmFja3NcblxuICAgIGZ1bmN0aW9uIF9mdWxmaWxsZWQodmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZnVsZmlsbGVkID09PSBcImZ1bmN0aW9uXCIgPyBmdWxmaWxsZWQodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlamVjdGVkKGV4Y2VwdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIHJlamVjdGVkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1ha2VTdGFja1RyYWNlTG9uZyhleGNlcHRpb24sIHNlbGYpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKG5ld0V4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3RXhjZXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Byb2dyZXNzZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm9ncmVzc2VkID09PSBcImZ1bmN0aW9uXCIgPyBwcm9ncmVzc2VkKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIFEubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnByb21pc2VEaXNwYXRjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX2Z1bGZpbGxlZCh2YWx1ZSkpO1xuICAgICAgICB9LCBcIndoZW5cIiwgW2Z1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX3JlamVjdGVkKGV4Y2VwdGlvbikpO1xuICAgICAgICB9XSk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBwcm9wYWdhdG9yIG5lZWQgdG8gYmUgYXR0YWNoZWQgaW4gdGhlIGN1cnJlbnQgdGljay5cbiAgICBzZWxmLnByb21pc2VEaXNwYXRjaCh2b2lkIDAsIFwid2hlblwiLCBbdm9pZCAwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlO1xuICAgICAgICB2YXIgdGhyZXcgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gX3Byb2dyZXNzZWQodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJldyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoUS5vbmVycm9yKSB7XG4gICAgICAgICAgICAgICAgUS5vbmVycm9yKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJldykge1xuICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuUS50YXAgPSBmdW5jdGlvbiAocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gUShwcm9taXNlKS50YXAoY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBXb3JrcyBhbG1vc3QgbGlrZSBcImZpbmFsbHlcIiwgYnV0IG5vdCBjYWxsZWQgZm9yIHJlamVjdGlvbnMuXG4gKiBPcmlnaW5hbCByZXNvbHV0aW9uIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIGNhbGxiYWNrIHVuYWZmZWN0ZWQuXG4gKiBDYWxsYmFjayBtYXkgcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgYXdhaXRlZCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge1EuUHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiBkb1NvbWV0aGluZygpXG4gKiAgIC50aGVuKC4uLilcbiAqICAgLnRhcChjb25zb2xlLmxvZylcbiAqICAgLnRoZW4oLi4uKTtcbiAqL1xuUHJvbWlzZS5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBRKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5mY2FsbCh2YWx1ZSkudGhlblJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgYW4gb2JzZXJ2ZXIgb24gYSBwcm9taXNlLlxuICpcbiAqIEd1YXJhbnRlZXM6XG4gKlxuICogMS4gdGhhdCBmdWxmaWxsZWQgYW5kIHJlamVjdGVkIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS5cbiAqIDIuIHRoYXQgZWl0aGVyIHRoZSBmdWxmaWxsZWQgY2FsbGJhY2sgb3IgdGhlIHJlamVjdGVkIGNhbGxiYWNrIHdpbGwgYmVcbiAqICAgIGNhbGxlZCwgYnV0IG5vdCBib3RoLlxuICogMy4gdGhhdCBmdWxmaWxsZWQgYW5kIHJlamVjdGVkIHdpbGwgbm90IGJlIGNhbGxlZCBpbiB0aGlzIHR1cm4uXG4gKlxuICogQHBhcmFtIHZhbHVlICAgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIHRvIG9ic2VydmVcbiAqIEBwYXJhbSBmdWxmaWxsZWQgIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBmdWxmaWxsZWQgdmFsdWVcbiAqIEBwYXJhbSByZWplY3RlZCAgIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSByZWplY3Rpb24gZXhjZXB0aW9uXG4gKiBAcGFyYW0gcHJvZ3Jlc3NlZCBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gYW55IHByb2dyZXNzIG5vdGlmaWNhdGlvbnNcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZSBpbnZva2VkIGNhbGxiYWNrXG4gKi9cblEud2hlbiA9IHdoZW47XG5mdW5jdGlvbiB3aGVuKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzc2VkKSB7XG4gICAgcmV0dXJuIFEodmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3NlZCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLnRoZW5SZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZTsgfSk7XG59O1xuXG5RLnRoZW5SZXNvbHZlID0gZnVuY3Rpb24gKHByb21pc2UsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZSkudGhlblJlc29sdmUodmFsdWUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlblJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgcmVhc29uOyB9KTtcbn07XG5cblEudGhlblJlamVjdCA9IGZ1bmN0aW9uIChwcm9taXNlLCByZWFzb24pIHtcbiAgICByZXR1cm4gUShwcm9taXNlKS50aGVuUmVqZWN0KHJlYXNvbik7XG59O1xuXG4vKipcbiAqIElmIGFuIG9iamVjdCBpcyBub3QgYSBwcm9taXNlLCBpdCBpcyBhcyBcIm5lYXJcIiBhcyBwb3NzaWJsZS5cbiAqIElmIGEgcHJvbWlzZSBpcyByZWplY3RlZCwgaXQgaXMgYXMgXCJuZWFyXCIgYXMgcG9zc2libGUgdG9vLlxuICogSWYgaXTigJlzIGEgZnVsZmlsbGVkIHByb21pc2UsIHRoZSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZWFyZXIuXG4gKiBJZiBpdOKAmXMgYSBkZWZlcnJlZCBwcm9taXNlIGFuZCB0aGUgZGVmZXJyZWQgaGFzIGJlZW4gcmVzb2x2ZWQsIHRoZVxuICogcmVzb2x1dGlvbiBpcyBcIm5lYXJlclwiLlxuICogQHBhcmFtIG9iamVjdFxuICogQHJldHVybnMgbW9zdCByZXNvbHZlZCAobmVhcmVzdCkgZm9ybSBvZiB0aGUgb2JqZWN0XG4gKi9cblxuLy8gWFhYIHNob3VsZCB3ZSByZS1kbyB0aGlzP1xuUS5uZWFyZXIgPSBuZWFyZXI7XG5mdW5jdGlvbiBuZWFyZXIodmFsdWUpIHtcbiAgICBpZiAoaXNQcm9taXNlKHZhbHVlKSkge1xuICAgICAgICB2YXIgaW5zcGVjdGVkID0gdmFsdWUuaW5zcGVjdCgpO1xuICAgICAgICBpZiAoaW5zcGVjdGVkLnN0YXRlID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zcGVjdGVkLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBwcm9taXNlLlxuICogT3RoZXJ3aXNlIGl0IGlzIGEgZnVsZmlsbGVkIHZhbHVlLlxuICovXG5RLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuUS5pc1Byb21pc2VBbGlrZSA9IGlzUHJvbWlzZUFsaWtlO1xuZnVuY3Rpb24gaXNQcm9taXNlQWxpa2Uob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgJiYgdHlwZW9mIG9iamVjdC50aGVuID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcGVuZGluZyBwcm9taXNlLCBtZWFuaW5nIG5vdFxuICogZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuICovXG5RLmlzUGVuZGluZyA9IGlzUGVuZGluZztcbmZ1bmN0aW9uIGlzUGVuZGluZyhvYmplY3QpIHtcbiAgICByZXR1cm4gaXNQcm9taXNlKG9iamVjdCkgJiYgb2JqZWN0Lmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJwZW5kaW5nXCI7XG59XG5cblByb21pc2UucHJvdG90eXBlLmlzUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNwZWN0KCkuc3RhdGUgPT09IFwicGVuZGluZ1wiO1xufTtcblxuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSB2YWx1ZSBvciBmdWxmaWxsZWRcbiAqIHByb21pc2UuXG4gKi9cblEuaXNGdWxmaWxsZWQgPSBpc0Z1bGZpbGxlZDtcbmZ1bmN0aW9uIGlzRnVsZmlsbGVkKG9iamVjdCkge1xuICAgIHJldHVybiAhaXNQcm9taXNlKG9iamVjdCkgfHwgb2JqZWN0Lmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIjtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zcGVjdCgpLnN0YXRlID09PSBcImZ1bGZpbGxlZFwiO1xufTtcblxuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSByZWplY3RlZCBwcm9taXNlLlxuICovXG5RLmlzUmVqZWN0ZWQgPSBpc1JlamVjdGVkO1xuZnVuY3Rpb24gaXNSZWplY3RlZChvYmplY3QpIHtcbiAgICByZXR1cm4gaXNQcm9taXNlKG9iamVjdCkgJiYgb2JqZWN0Lmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJyZWplY3RlZFwiO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1JlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJyZWplY3RlZFwiO1xufTtcblxuLy8vLyBCRUdJTiBVTkhBTkRMRUQgUkVKRUNUSU9OIFRSQUNLSU5HXG5cbi8vIFRoaXMgcHJvbWlzZSBsaWJyYXJ5IGNvbnN1bWVzIGV4Y2VwdGlvbnMgdGhyb3duIGluIGhhbmRsZXJzIHNvIHRoZXkgY2FuIGJlXG4vLyBoYW5kbGVkIGJ5IGEgc3Vic2VxdWVudCBwcm9taXNlLiAgVGhlIGV4Y2VwdGlvbnMgZ2V0IGFkZGVkIHRvIHRoaXMgYXJyYXkgd2hlblxuLy8gdGhleSBhcmUgY3JlYXRlZCwgYW5kIHJlbW92ZWQgd2hlbiB0aGV5IGFyZSBoYW5kbGVkLiAgTm90ZSB0aGF0IGluIEVTNiBvclxuLy8gc2hpbW1lZCBlbnZpcm9ubWVudHMsIHRoaXMgd291bGQgbmF0dXJhbGx5IGJlIGEgYFNldGAuXG52YXIgdW5oYW5kbGVkUmVhc29ucyA9IFtdO1xudmFyIHVuaGFuZGxlZFJlamVjdGlvbnMgPSBbXTtcbnZhciByZXBvcnRlZFVuaGFuZGxlZFJlamVjdGlvbnMgPSBbXTtcbnZhciB0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMgPSB0cnVlO1xuXG5mdW5jdGlvbiByZXNldFVuaGFuZGxlZFJlamVjdGlvbnMoKSB7XG4gICAgdW5oYW5kbGVkUmVhc29ucy5sZW5ndGggPSAwO1xuICAgIHVuaGFuZGxlZFJlamVjdGlvbnMubGVuZ3RoID0gMDtcblxuICAgIGlmICghdHJhY2tVbmhhbmRsZWRSZWplY3Rpb25zKSB7XG4gICAgICAgIHRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucyA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cmFja1JlamVjdGlvbihwcm9taXNlLCByZWFzb24pIHtcbiAgICBpZiAoIXRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgUS5uZXh0VGljay5ydW5BZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlfaW5kZXhPZih1bmhhbmRsZWRSZWplY3Rpb25zLCBwcm9taXNlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIiwgcmVhc29uLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICByZXBvcnRlZFVuaGFuZGxlZFJlamVjdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5oYW5kbGVkUmVqZWN0aW9ucy5wdXNoKHByb21pc2UpO1xuICAgIGlmIChyZWFzb24gJiYgdHlwZW9mIHJlYXNvbi5zdGFjayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB1bmhhbmRsZWRSZWFzb25zLnB1c2gocmVhc29uLnN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1bmhhbmRsZWRSZWFzb25zLnB1c2goXCIobm8gc3RhY2spIFwiICsgcmVhc29uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVudHJhY2tSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgIGlmICghdHJhY2tVbmhhbmRsZWRSZWplY3Rpb25zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYXQgPSBhcnJheV9pbmRleE9mKHVuaGFuZGxlZFJlamVjdGlvbnMsIHByb21pc2UpO1xuICAgIGlmIChhdCAhPT0gLTEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBwcm9jZXNzLmVtaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgUS5uZXh0VGljay5ydW5BZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0UmVwb3J0ID0gYXJyYXlfaW5kZXhPZihyZXBvcnRlZFVuaGFuZGxlZFJlamVjdGlvbnMsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIGlmIChhdFJlcG9ydCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLCB1bmhhbmRsZWRSZWFzb25zW2F0XSwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGVkVW5oYW5kbGVkUmVqZWN0aW9ucy5zcGxpY2UoYXRSZXBvcnQsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHVuaGFuZGxlZFJlamVjdGlvbnMuc3BsaWNlKGF0LCAxKTtcbiAgICAgICAgdW5oYW5kbGVkUmVhc29ucy5zcGxpY2UoYXQsIDEpO1xuICAgIH1cbn1cblxuUS5yZXNldFVuaGFuZGxlZFJlamVjdGlvbnMgPSByZXNldFVuaGFuZGxlZFJlamVjdGlvbnM7XG5cblEuZ2V0VW5oYW5kbGVkUmVhc29ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBNYWtlIGEgY29weSBzbyB0aGF0IGNvbnN1bWVycyBjYW4ndCBpbnRlcmZlcmUgd2l0aCBvdXIgaW50ZXJuYWwgc3RhdGUuXG4gICAgcmV0dXJuIHVuaGFuZGxlZFJlYXNvbnMuc2xpY2UoKTtcbn07XG5cblEuc3RvcFVuaGFuZGxlZFJlamVjdGlvblRyYWNraW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJlc2V0VW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgIHRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucyA9IGZhbHNlO1xufTtcblxucmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zKCk7XG5cbi8vLy8gRU5EIFVOSEFORExFRCBSRUpFQ1RJT04gVFJBQ0tJTkdcblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqIEBwYXJhbSByZWFzb24gdmFsdWUgZGVzY3JpYmluZyB0aGUgZmFpbHVyZVxuICovXG5RLnJlamVjdCA9IHJlamVjdDtcbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICB2YXIgcmVqZWN0aW9uID0gUHJvbWlzZSh7XG4gICAgICAgIFwid2hlblwiOiBmdW5jdGlvbiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdGUgdGhhdCB0aGUgZXJyb3IgaGFzIGJlZW4gaGFuZGxlZFxuICAgICAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdW50cmFja1JlamVjdGlvbih0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWplY3RlZCA/IHJlamVjdGVkKHJlYXNvbikgOiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gZmFsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIGZ1bmN0aW9uIGluc3BlY3QoKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXRlOiBcInJlamVjdGVkXCIsIHJlYXNvbjogcmVhc29uIH07XG4gICAgfSk7XG5cbiAgICAvLyBOb3RlIHRoYXQgdGhlIHJlYXNvbiBoYXMgbm90IGJlZW4gaGFuZGxlZC5cbiAgICB0cmFja1JlamVjdGlvbihyZWplY3Rpb24sIHJlYXNvbik7XG5cbiAgICByZXR1cm4gcmVqZWN0aW9uO1xufVxuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBmdWxmaWxsZWQgcHJvbWlzZSBmb3IgYW4gaW1tZWRpYXRlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB2YWx1ZSBpbW1lZGlhdGUgcmVmZXJlbmNlXG4gKi9cblEuZnVsZmlsbCA9IGZ1bGZpbGw7XG5mdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2Uoe1xuICAgICAgICBcIndoZW5cIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlW25hbWVdO1xuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAobmFtZSwgcmhzKSB7XG4gICAgICAgICAgICB2YWx1ZVtuYW1lXSA9IHJocztcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVcIjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtuYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb3N0XCI6IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgICAgICAgICAvLyBNYXJrIE1pbGxlciBwcm9wb3NlcyB0aGF0IHBvc3Qgd2l0aCBubyBuYW1lIHNob3VsZCBhcHBseSBhXG4gICAgICAgICAgICAvLyBwcm9taXNlZCBmdW5jdGlvbi5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSBudWxsIHx8IG5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbbmFtZV0uYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFwcGx5XCI6IGZ1bmN0aW9uICh0aGlzcCwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmFwcGx5KHRoaXNwLCBhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJrZXlzXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Rfa2V5cyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB2b2lkIDAsIGZ1bmN0aW9uIGluc3BlY3QoKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXRlOiBcImZ1bGZpbGxlZFwiLCB2YWx1ZTogdmFsdWUgfTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGVuYWJsZXMgdG8gUSBwcm9taXNlcy5cbiAqIEBwYXJhbSBwcm9taXNlIHRoZW5hYmxlIHByb21pc2VcbiAqIEByZXR1cm5zIGEgUSBwcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGNvZXJjZShwcm9taXNlKSB7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihkZWZlcnJlZC5yZXNvbHZlLCBkZWZlcnJlZC5yZWplY3QsIGRlZmVycmVkLm5vdGlmeSk7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuLyoqXG4gKiBBbm5vdGF0ZXMgYW4gb2JqZWN0IHN1Y2ggdGhhdCBpdCB3aWxsIG5ldmVyIGJlXG4gKiB0cmFuc2ZlcnJlZCBhd2F5IGZyb20gdGhpcyBwcm9jZXNzIG92ZXIgYW55IHByb21pc2VcbiAqIGNvbW11bmljYXRpb24gY2hhbm5lbC5cbiAqIEBwYXJhbSBvYmplY3RcbiAqIEByZXR1cm5zIHByb21pc2UgYSB3cmFwcGluZyBvZiB0aGF0IG9iamVjdCB0aGF0XG4gKiBhZGRpdGlvbmFsbHkgcmVzcG9uZHMgdG8gdGhlIFwiaXNEZWZcIiBtZXNzYWdlXG4gKiB3aXRob3V0IGEgcmVqZWN0aW9uLlxuICovXG5RLm1hc3RlciA9IG1hc3RlcjtcbmZ1bmN0aW9uIG1hc3RlcihvYmplY3QpIHtcbiAgICByZXR1cm4gUHJvbWlzZSh7XG4gICAgICAgIFwiaXNEZWZcIjogZnVuY3Rpb24gKCkge31cbiAgICB9LCBmdW5jdGlvbiBmYWxsYmFjayhvcCwgYXJncykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2gob2JqZWN0LCBvcCwgYXJncyk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUShvYmplY3QpLmluc3BlY3QoKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBTcHJlYWRzIHRoZSB2YWx1ZXMgb2YgYSBwcm9taXNlZCBhcnJheSBvZiBhcmd1bWVudHMgaW50byB0aGVcbiAqIGZ1bGZpbGxtZW50IGNhbGxiYWNrLlxuICogQHBhcmFtIGZ1bGZpbGxlZCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIHZhcmlhZGljIGFyZ3VtZW50cyBmcm9tIHRoZVxuICogcHJvbWlzZWQgYXJyYXlcbiAqIEBwYXJhbSByZWplY3RlZCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIHRoZSBleGNlcHRpb24gaWYgdGhlIHByb21pc2VcbiAqIGlzIHJlamVjdGVkLlxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9yIHRocm93biBleGNlcHRpb24gb2ZcbiAqIGVpdGhlciBjYWxsYmFjay5cbiAqL1xuUS5zcHJlYWQgPSBzcHJlYWQ7XG5mdW5jdGlvbiBzcHJlYWQodmFsdWUsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gUSh2YWx1ZSkuc3ByZWFkKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5zcHJlYWQgPSBmdW5jdGlvbiAoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLmFsbCgpLnRoZW4oZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBmdWxmaWxsZWQuYXBwbHkodm9pZCAwLCBhcnJheSk7XG4gICAgfSwgcmVqZWN0ZWQpO1xufTtcblxuLyoqXG4gKiBUaGUgYXN5bmMgZnVuY3Rpb24gaXMgYSBkZWNvcmF0b3IgZm9yIGdlbmVyYXRvciBmdW5jdGlvbnMsIHR1cm5pbmdcbiAqIHRoZW0gaW50byBhc3luY2hyb25vdXMgZ2VuZXJhdG9ycy4gIEFsdGhvdWdoIGdlbmVyYXRvcnMgYXJlIG9ubHkgcGFydFxuICogb2YgdGhlIG5ld2VzdCBFQ01BU2NyaXB0IDYgZHJhZnRzLCB0aGlzIGNvZGUgZG9lcyBub3QgY2F1c2Ugc3ludGF4XG4gKiBlcnJvcnMgaW4gb2xkZXIgZW5naW5lcy4gIFRoaXMgY29kZSBzaG91bGQgY29udGludWUgdG8gd29yayBhbmQgd2lsbFxuICogaW4gZmFjdCBpbXByb3ZlIG92ZXIgdGltZSBhcyB0aGUgbGFuZ3VhZ2UgaW1wcm92ZXMuXG4gKlxuICogRVM2IGdlbmVyYXRvcnMgYXJlIGN1cnJlbnRseSBwYXJ0IG9mIFY4IHZlcnNpb24gMy4xOSB3aXRoIHRoZVxuICogLS1oYXJtb255LWdlbmVyYXRvcnMgcnVudGltZSBmbGFnIGVuYWJsZWQuICBTcGlkZXJNb25rZXkgaGFzIGhhZCB0aGVtXG4gKiBmb3IgbG9uZ2VyLCBidXQgdW5kZXIgYW4gb2xkZXIgUHl0aG9uLWluc3BpcmVkIGZvcm0uICBUaGlzIGZ1bmN0aW9uXG4gKiB3b3JrcyBvbiBib3RoIGtpbmRzIG9mIGdlbmVyYXRvcnMuXG4gKlxuICogRGVjb3JhdGVzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHN1Y2ggdGhhdDpcbiAqICAtIGl0IG1heSB5aWVsZCBwcm9taXNlc1xuICogIC0gZXhlY3V0aW9uIHdpbGwgY29udGludWUgd2hlbiB0aGF0IHByb21pc2UgaXMgZnVsZmlsbGVkXG4gKiAgLSB0aGUgdmFsdWUgb2YgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2lsbCBiZSB0aGUgZnVsZmlsbGVkIHZhbHVlXG4gKiAgLSBpdCByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSAod2hlbiB0aGUgZ2VuZXJhdG9yXG4gKiAgICBzdG9wcyBpdGVyYXRpbmcpXG4gKiAgLSB0aGUgZGVjb3JhdGVkIGZ1bmN0aW9uIHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKiAgICBvZiB0aGUgZ2VuZXJhdG9yIG9yIHRoZSBmaXJzdCByZWplY3RlZCBwcm9taXNlIGFtb25nIHRob3NlXG4gKiAgICB5aWVsZGVkLlxuICogIC0gaWYgYW4gZXJyb3IgaXMgdGhyb3duIGluIHRoZSBnZW5lcmF0b3IsIGl0IHByb3BhZ2F0ZXMgdGhyb3VnaFxuICogICAgZXZlcnkgZm9sbG93aW5nIHlpZWxkIHVudGlsIGl0IGlzIGNhdWdodCwgb3IgdW50aWwgaXQgZXNjYXBlc1xuICogICAgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBhbHRvZ2V0aGVyLCBhbmQgaXMgdHJhbnNsYXRlZCBpbnRvIGFcbiAqICAgIHJlamVjdGlvbiBmb3IgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGRlY29yYXRlZCBnZW5lcmF0b3IuXG4gKi9cblEuYXN5bmMgPSBhc3luYztcbmZ1bmN0aW9uIGFzeW5jKG1ha2VHZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB3aGVuIHZlcmIgaXMgXCJzZW5kXCIsIGFyZyBpcyBhIHZhbHVlXG4gICAgICAgIC8vIHdoZW4gdmVyYiBpcyBcInRocm93XCIsIGFyZyBpcyBhbiBleGNlcHRpb25cbiAgICAgICAgZnVuY3Rpb24gY29udGludWVyKHZlcmIsIGFyZykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICAgICAgLy8gVW50aWwgVjggMy4xOSAvIENocm9taXVtIDI5IGlzIHJlbGVhc2VkLCBTcGlkZXJNb25rZXkgaXMgdGhlIG9ubHlcbiAgICAgICAgICAgIC8vIGVuZ2luZSB0aGF0IGhhcyBhIGRlcGxveWVkIGJhc2Ugb2YgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGdlbmVyYXRvcnMuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCBTTSdzIGdlbmVyYXRvcnMgdXNlIHRoZSBQeXRob24taW5zcGlyZWQgc2VtYW50aWNzIG9mXG4gICAgICAgICAgICAvLyBvdXRkYXRlZCBFUzYgZHJhZnRzLiAgV2Ugd291bGQgbGlrZSB0byBzdXBwb3J0IEVTNiwgYnV0IHdlJ2QgYWxzb1xuICAgICAgICAgICAgLy8gbGlrZSB0byBtYWtlIGl0IHBvc3NpYmxlIHRvIHVzZSBnZW5lcmF0b3JzIGluIGRlcGxveWVkIGJyb3dzZXJzLCBzb1xuICAgICAgICAgICAgLy8gd2UgYWxzbyBzdXBwb3J0IFB5dGhvbi1zdHlsZSBnZW5lcmF0b3JzLiAgQXQgc29tZSBwb2ludCB3ZSBjYW4gcmVtb3ZlXG4gICAgICAgICAgICAvLyB0aGlzIGJsb2NrLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0b3BJdGVyYXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBFUzYgR2VuZXJhdG9yc1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXShhcmcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aGVuKHJlc3VsdC52YWx1ZSwgY2FsbGJhY2ssIGVycmJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3BpZGVyTW9ua2V5IEdlbmVyYXRvcnNcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogUmVtb3ZlIHRoaXMgY2FzZSB3aGVuIFNNIGRvZXMgRVM2IGdlbmVyYXRvcnMuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZ2VuZXJhdG9yW3ZlcmJdKGFyZyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N0b3BJdGVyYXRpb24oZXhjZXB0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEoZXhjZXB0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXhjZXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2hlbihyZXN1bHQsIGNhbGxiYWNrLCBlcnJiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2VuZXJhdG9yID0gbWFrZUdlbmVyYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjb250aW51ZXIuYmluZChjb250aW51ZXIsIFwibmV4dFwiKTtcbiAgICAgICAgdmFyIGVycmJhY2sgPSBjb250aW51ZXIuYmluZChjb250aW51ZXIsIFwidGhyb3dcIik7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG59XG5cbi8qKlxuICogVGhlIHNwYXduIGZ1bmN0aW9uIGlzIGEgc21hbGwgd3JhcHBlciBhcm91bmQgYXN5bmMgdGhhdCBpbW1lZGlhdGVseVxuICogY2FsbHMgdGhlIGdlbmVyYXRvciBhbmQgYWxzbyBlbmRzIHRoZSBwcm9taXNlIGNoYWluLCBzbyB0aGF0IGFueVxuICogdW5oYW5kbGVkIGVycm9ycyBhcmUgdGhyb3duIGluc3RlYWQgb2YgZm9yd2FyZGVkIHRvIHRoZSBlcnJvclxuICogaGFuZGxlci4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSBpdCdzIGV4dHJlbWVseSBjb21tb24gdG8gcnVuXG4gKiBnZW5lcmF0b3JzIGF0IHRoZSB0b3AtbGV2ZWwgdG8gd29yayB3aXRoIGxpYnJhcmllcy5cbiAqL1xuUS5zcGF3biA9IHNwYXduO1xuZnVuY3Rpb24gc3Bhd24obWFrZUdlbmVyYXRvcikge1xuICAgIFEuZG9uZShRLmFzeW5jKG1ha2VHZW5lcmF0b3IpKCkpO1xufVxuXG4vLyBGSVhNRTogUmVtb3ZlIHRoaXMgaW50ZXJmYWNlIG9uY2UgRVM2IGdlbmVyYXRvcnMgYXJlIGluIFNwaWRlck1vbmtleS5cbi8qKlxuICogVGhyb3dzIGEgUmV0dXJuVmFsdWUgZXhjZXB0aW9uIHRvIHN0b3AgYW4gYXN5bmNocm9ub3VzIGdlbmVyYXRvci5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBpcyBhIHN0b3AtZ2FwIG1lYXN1cmUgdG8gc3VwcG9ydCBnZW5lcmF0b3IgcmV0dXJuXG4gKiB2YWx1ZXMgaW4gb2xkZXIgRmlyZWZveC9TcGlkZXJNb25rZXkuICBJbiBicm93c2VycyB0aGF0IHN1cHBvcnQgRVM2XG4gKiBnZW5lcmF0b3JzIGxpa2UgQ2hyb21pdW0gMjksIGp1c3QgdXNlIFwicmV0dXJuXCIgaW4geW91ciBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHJldHVybiB2YWx1ZSBmb3IgdGhlIHN1cnJvdW5kaW5nIGdlbmVyYXRvclxuICogQHRocm93cyBSZXR1cm5WYWx1ZSBleGNlcHRpb24gd2l0aCB0aGUgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICogLy8gRVM2IHN0eWxlXG4gKiBRLmFzeW5jKGZ1bmN0aW9uKiAoKSB7XG4gKiAgICAgIHZhciBmb28gPSB5aWVsZCBnZXRGb29Qcm9taXNlKCk7XG4gKiAgICAgIHZhciBiYXIgPSB5aWVsZCBnZXRCYXJQcm9taXNlKCk7XG4gKiAgICAgIHJldHVybiBmb28gKyBiYXI7XG4gKiB9KVxuICogLy8gT2xkZXIgU3BpZGVyTW9ua2V5IHN0eWxlXG4gKiBRLmFzeW5jKGZ1bmN0aW9uICgpIHtcbiAqICAgICAgdmFyIGZvbyA9IHlpZWxkIGdldEZvb1Byb21pc2UoKTtcbiAqICAgICAgdmFyIGJhciA9IHlpZWxkIGdldEJhclByb21pc2UoKTtcbiAqICAgICAgUS5yZXR1cm4oZm9vICsgYmFyKTtcbiAqIH0pXG4gKi9cblFbXCJyZXR1cm5cIl0gPSBfcmV0dXJuO1xuZnVuY3Rpb24gX3JldHVybih2YWx1ZSkge1xuICAgIHRocm93IG5ldyBRUmV0dXJuVmFsdWUodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBwcm9taXNlZCBmdW5jdGlvbiBkZWNvcmF0b3IgZW5zdXJlcyB0aGF0IGFueSBwcm9taXNlIGFyZ3VtZW50c1xuICogYXJlIHNldHRsZWQgYW5kIHBhc3NlZCBhcyB2YWx1ZXMgKGB0aGlzYCBpcyBhbHNvIHNldHRsZWQgYW5kIHBhc3NlZFxuICogYXMgYSB2YWx1ZSkuICBJdCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhlIHJlc3VsdCBvZiBhIGZ1bmN0aW9uIGlzXG4gKiBhbHdheXMgYSBwcm9taXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgYWRkID0gUS5wcm9taXNlZChmdW5jdGlvbiAoYSwgYikge1xuICogICAgIHJldHVybiBhICsgYjtcbiAqIH0pO1xuICogYWRkKFEoYSksIFEoQikpO1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBkZWNvcmF0ZVxuICogQHJldHVybnMge2Z1bmN0aW9ufSBhIGZ1bmN0aW9uIHRoYXQgaGFzIGJlZW4gZGVjb3JhdGVkLlxuICovXG5RLnByb21pc2VkID0gcHJvbWlzZWQ7XG5mdW5jdGlvbiBwcm9taXNlZChjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzcHJlYWQoW3RoaXMsIGFsbChhcmd1bWVudHMpXSwgZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBzZW5kcyBhIG1lc3NhZ2UgdG8gYSB2YWx1ZSBpbiBhIGZ1dHVyZSB0dXJuXG4gKiBAcGFyYW0gb2JqZWN0KiB0aGUgcmVjaXBpZW50XG4gKiBAcGFyYW0gb3AgdGhlIG5hbWUgb2YgdGhlIG1lc3NhZ2Ugb3BlcmF0aW9uLCBlLmcuLCBcIndoZW5cIixcbiAqIEBwYXJhbSBhcmdzIGZ1cnRoZXIgYXJndW1lbnRzIHRvIGJlIGZvcndhcmRlZCB0byB0aGUgb3BlcmF0aW9uXG4gKiBAcmV0dXJucyByZXN1bHQge1Byb21pc2V9IGEgcHJvbWlzZSBmb3IgdGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uXG4gKi9cblEuZGlzcGF0Y2ggPSBkaXNwYXRjaDtcbmZ1bmN0aW9uIGRpc3BhdGNoKG9iamVjdCwgb3AsIGFyZ3MpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKG9wLCBhcmdzKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAob3AsIGFyZ3MpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wcm9taXNlRGlzcGF0Y2goZGVmZXJyZWQucmVzb2x2ZSwgb3AsIGFyZ3MpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIG5hbWUgICAgICBuYW1lIG9mIHByb3BlcnR5IHRvIGdldFxuICogQHJldHVybiBwcm9taXNlIGZvciB0aGUgcHJvcGVydHkgdmFsdWVcbiAqL1xuUS5nZXQgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwiZ2V0XCIsIFtrZXldKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChcImdldFwiLCBba2V5XSk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciBvYmplY3Qgb2JqZWN0XG4gKiBAcGFyYW0gbmFtZSAgICAgIG5hbWUgb2YgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0gdmFsdWUgICAgIG5ldyB2YWx1ZSBvZiBwcm9wZXJ0eVxuICogQHJldHVybiBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKi9cblEuc2V0ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJzZXRcIiwgW2tleSwgdmFsdWVdKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJzZXRcIiwgW2tleSwgdmFsdWVdKTtcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIHByb3BlcnR5IGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIG5hbWUgICAgICBuYW1lIG9mIHByb3BlcnR5IHRvIGRlbGV0ZVxuICogQHJldHVybiBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKi9cblEuZGVsID0gLy8gWFhYIGxlZ2FjeVxuUVtcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJkZWxldGVcIiwgW2tleV0pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZGVsID0gLy8gWFhYIGxlZ2FjeVxuUHJvbWlzZS5wcm90b3R5cGVbXCJkZWxldGVcIl0gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJkZWxldGVcIiwgW2tleV0pO1xufTtcblxuLyoqXG4gKiBJbnZva2VzIGEgbWV0aG9kIGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIG5hbWUgICAgICBuYW1lIG9mIG1ldGhvZCB0byBpbnZva2VcbiAqIEBwYXJhbSB2YWx1ZSAgICAgYSB2YWx1ZSB0byBwb3N0LCB0eXBpY2FsbHkgYW4gYXJyYXkgb2ZcbiAqICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbiBhcmd1bWVudHMgZm9yIHByb21pc2VzIHRoYXRcbiAqICAgICAgICAgICAgICAgICAgYXJlIHVsdGltYXRlbHkgYmFja2VkIHdpdGggYHJlc29sdmVgIHZhbHVlcyxcbiAqICAgICAgICAgICAgICAgICAgYXMgb3Bwb3NlZCB0byB0aG9zZSBiYWNrZWQgd2l0aCBVUkxzXG4gKiAgICAgICAgICAgICAgICAgIHdoZXJlaW4gdGhlIHBvc3RlZCB2YWx1ZSBjYW4gYmUgYW55XG4gKiAgICAgICAgICAgICAgICAgIEpTT04gc2VyaWFsaXphYmxlIG9iamVjdC5cbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICovXG4vLyBib3VuZCBsb2NhbGx5IGJlY2F1c2UgaXQgaXMgdXNlZCBieSBvdGhlciBtZXRob2RzXG5RLm1hcHBseSA9IC8vIFhYWCBBcyBwcm9wb3NlZCBieSBcIlJlZHNhbmRyb1wiXG5RLnBvc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIGFyZ3NdKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm1hcHBseSA9IC8vIFhYWCBBcyBwcm9wb3NlZCBieSBcIlJlZHNhbmRyb1wiXG5Qcm9taXNlLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIGFyZ3NdKTtcbn07XG5cbi8qKlxuICogSW52b2tlcyBhIG1ldGhvZCBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBtZXRob2QgdG8gaW52b2tlXG4gKiBAcGFyYW0gLi4uYXJncyAgIGFycmF5IG9mIGludm9jYXRpb24gYXJndW1lbnRzXG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWVcbiAqL1xuUS5zZW5kID0gLy8gWFhYIE1hcmsgTWlsbGVyJ3MgcHJvcG9zZWQgcGFybGFuY2VcblEubWNhbGwgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUS5pbnZva2UgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMildKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNlbmQgPSAvLyBYWFggTWFyayBNaWxsZXIncyBwcm9wb3NlZCBwYXJsYW5jZVxuUHJvbWlzZS5wcm90b3R5cGUubWNhbGwgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUHJvbWlzZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKG5hbWUgLyouLi5hcmdzKi8pIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSldKTtcbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgcHJvbWlzZWQgZnVuY3Rpb24gaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgZnVuY3Rpb25cbiAqIEBwYXJhbSBhcmdzICAgICAgYXJyYXkgb2YgYXBwbGljYXRpb24gYXJndW1lbnRzXG4gKi9cblEuZmFwcGx5ID0gZnVuY3Rpb24gKG9iamVjdCwgYXJncykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJhcHBseVwiLCBbdm9pZCAwLCBhcmdzXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mYXBwbHkgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwiYXBwbHlcIiwgW3ZvaWQgMCwgYXJnc10pO1xufTtcblxuLyoqXG4gKiBDYWxscyB0aGUgcHJvbWlzZWQgZnVuY3Rpb24gaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgZnVuY3Rpb25cbiAqIEBwYXJhbSAuLi5hcmdzICAgYXJyYXkgb2YgYXBwbGljYXRpb24gYXJndW1lbnRzXG4gKi9cblFbXCJ0cnlcIl0gPVxuUS5mY2FsbCA9IGZ1bmN0aW9uIChvYmplY3QgLyogLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChcImFwcGx5XCIsIFt2b2lkIDAsIGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSldKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmZjYWxsID0gZnVuY3Rpb24gKC8qLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJhcHBseVwiLCBbdm9pZCAwLCBhcnJheV9zbGljZShhcmd1bWVudHMpXSk7XG59O1xuXG4vKipcbiAqIEJpbmRzIHRoZSBwcm9taXNlZCBmdW5jdGlvbiwgdHJhbnNmb3JtaW5nIHJldHVybiB2YWx1ZXMgaW50byBhIGZ1bGZpbGxlZFxuICogcHJvbWlzZSBhbmQgdGhyb3duIGVycm9ycyBpbnRvIGEgcmVqZWN0ZWQgb25lLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBmdW5jdGlvblxuICogQHBhcmFtIC4uLmFyZ3MgICBhcnJheSBvZiBhcHBsaWNhdGlvbiBhcmd1bWVudHNcbiAqL1xuUS5mYmluZCA9IGZ1bmN0aW9uIChvYmplY3QgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgcHJvbWlzZSA9IFEob2JqZWN0KTtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZib3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UuZGlzcGF0Y2goXCJhcHBseVwiLCBbXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgYXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSlcbiAgICAgICAgXSk7XG4gICAgfTtcbn07XG5Qcm9taXNlLnByb3RvdHlwZS5mYmluZCA9IGZ1bmN0aW9uICgvKi4uLmFyZ3MqLykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZib3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UuZGlzcGF0Y2goXCJhcHBseVwiLCBbXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgYXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSlcbiAgICAgICAgXSk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogUmVxdWVzdHMgdGhlIG5hbWVzIG9mIHRoZSBvd25lZCBwcm9wZXJ0aWVzIG9mIGEgcHJvbWlzZWRcbiAqIG9iamVjdCBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIGtleXMgb2YgdGhlIGV2ZW50dWFsbHkgc2V0dGxlZCBvYmplY3RcbiAqL1xuUS5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJrZXlzXCIsIFtdKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJrZXlzXCIsIFtdKTtcbn07XG5cbi8qKlxuICogVHVybnMgYW4gYXJyYXkgb2YgcHJvbWlzZXMgaW50byBhIHByb21pc2UgZm9yIGFuIGFycmF5LiAgSWYgYW55IG9mXG4gKiB0aGUgcHJvbWlzZXMgZ2V0cyByZWplY3RlZCwgdGhlIHdob2xlIGFycmF5IGlzIHJlamVjdGVkIGltbWVkaWF0ZWx5LlxuICogQHBhcmFtIHtBcnJheSp9IGFuIGFycmF5IChvciBwcm9taXNlIGZvciBhbiBhcnJheSkgb2YgdmFsdWVzIChvclxuICogcHJvbWlzZXMgZm9yIHZhbHVlcylcbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzXG4gKi9cbi8vIEJ5IE1hcmsgTWlsbGVyXG4vLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1zdHJhd21hbjpjb25jdXJyZW5jeSZyZXY9MTMwODc3NjUyMSNhbGxmdWxmaWxsZWRcblEuYWxsID0gYWxsO1xuZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHdoZW4ocHJvbWlzZXMsIGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgICAgICB2YXIgcGVuZGluZ0NvdW50ID0gMDtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgYXJyYXlfcmVkdWNlKHByb21pc2VzLCBmdW5jdGlvbiAodW5kZWZpbmVkLCBwcm9taXNlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIHNuYXBzaG90O1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGlzUHJvbWlzZShwcm9taXNlKSAmJlxuICAgICAgICAgICAgICAgIChzbmFwc2hvdCA9IHByb21pc2UuaW5zcGVjdCgpKS5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXNbaW5kZXhdID0gc25hcHNob3QudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICsrcGVuZGluZ0NvdW50O1xuICAgICAgICAgICAgICAgIHdoZW4oXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLS1wZW5kaW5nQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHByb21pc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSh7IGluZGV4OiBpbmRleCwgdmFsdWU6IHByb2dyZXNzIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdm9pZCAwKTtcbiAgICAgICAgaWYgKHBlbmRpbmdDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfSk7XG59XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCByZXNvbHZlZCBwcm9taXNlIG9mIGFuIGFycmF5LiBQcmlvciByZWplY3RlZCBwcm9taXNlcyBhcmVcbiAqIGlnbm9yZWQuICBSZWplY3RzIG9ubHkgaWYgYWxsIHByb21pc2VzIGFyZSByZWplY3RlZC5cbiAqIEBwYXJhbSB7QXJyYXkqfSBhbiBhcnJheSBjb250YWluaW5nIHZhbHVlcyBvciBwcm9taXNlcyBmb3IgdmFsdWVzXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZXNvbHZlZCBwcm9taXNlLFxuICogb3IgYSByZWplY3RlZCBwcm9taXNlIGlmIGFsbCBwcm9taXNlcyBhcmUgcmVqZWN0ZWQuXG4gKi9cblEuYW55ID0gYW55O1xuXG5mdW5jdGlvbiBhbnkocHJvbWlzZXMpIHtcbiAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBRLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBRLmRlZmVyKCk7XG4gICAgdmFyIHBlbmRpbmdDb3VudCA9IDA7XG4gICAgYXJyYXlfcmVkdWNlKHByb21pc2VzLCBmdW5jdGlvbiAocHJldiwgY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBwcm9taXNlc1tpbmRleF07XG5cbiAgICAgICAgcGVuZGluZ0NvdW50Kys7XG5cbiAgICAgICAgd2hlbihwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcyk7XG4gICAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKHJlc3VsdCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoKSB7XG4gICAgICAgICAgICBwZW5kaW5nQ291bnQtLTtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkNhbid0IGdldCBmdWxmaWxsbWVudCB2YWx1ZSBmcm9tIGFueSBwcm9taXNlLCBhbGwgXCIgK1xuICAgICAgICAgICAgICAgICAgICBcInByb21pc2VzIHdlcmUgcmVqZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvZ3Jlc3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgdW5kZWZpbmVkKTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFueSh0aGlzKTtcbn07XG5cbi8qKlxuICogV2FpdHMgZm9yIGFsbCBwcm9taXNlcyB0byBiZSBzZXR0bGVkLCBlaXRoZXIgZnVsZmlsbGVkIG9yXG4gKiByZWplY3RlZC4gIFRoaXMgaXMgZGlzdGluY3QgZnJvbSBgYWxsYCBzaW5jZSB0aGF0IHdvdWxkIHN0b3BcbiAqIHdhaXRpbmcgYXQgdGhlIGZpcnN0IHJlamVjdGlvbi4gIFRoZSBwcm9taXNlIHJldHVybmVkIGJ5XG4gKiBgYWxsUmVzb2x2ZWRgIHdpbGwgbmV2ZXIgYmUgcmVqZWN0ZWQuXG4gKiBAcGFyYW0gcHJvbWlzZXMgYSBwcm9taXNlIGZvciBhbiBhcnJheSAob3IgYW4gYXJyYXkpIG9mIHByb21pc2VzXG4gKiAob3IgdmFsdWVzKVxuICogQHJldHVybiBhIHByb21pc2UgZm9yIGFuIGFycmF5IG9mIHByb21pc2VzXG4gKi9cblEuYWxsUmVzb2x2ZWQgPSBkZXByZWNhdGUoYWxsUmVzb2x2ZWQsIFwiYWxsUmVzb2x2ZWRcIiwgXCJhbGxTZXR0bGVkXCIpO1xuZnVuY3Rpb24gYWxsUmVzb2x2ZWQocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gd2hlbihwcm9taXNlcywgZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgICAgIHByb21pc2VzID0gYXJyYXlfbWFwKHByb21pc2VzLCBRKTtcbiAgICAgICAgcmV0dXJuIHdoZW4oYWxsKGFycmF5X21hcChwcm9taXNlcywgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB3aGVuKHByb21pc2UsIG5vb3AsIG5vb3ApO1xuICAgICAgICB9KSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlcztcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblByb21pc2UucHJvdG90eXBlLmFsbFJlc29sdmVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhbGxSZXNvbHZlZCh0aGlzKTtcbn07XG5cbi8qKlxuICogQHNlZSBQcm9taXNlI2FsbFNldHRsZWRcbiAqL1xuUS5hbGxTZXR0bGVkID0gYWxsU2V0dGxlZDtcbmZ1bmN0aW9uIGFsbFNldHRsZWQocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUShwcm9taXNlcykuYWxsU2V0dGxlZCgpO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIHByb21pc2VzIGludG8gYSBwcm9taXNlIGZvciBhbiBhcnJheSBvZiB0aGVpciBzdGF0ZXMgKGFzXG4gKiByZXR1cm5lZCBieSBgaW5zcGVjdGApIHdoZW4gdGhleSBoYXZlIGFsbCBzZXR0bGVkLlxuICogQHBhcmFtIHtBcnJheVtBbnkqXX0gdmFsdWVzIGFuIGFycmF5IChvciBwcm9taXNlIGZvciBhbiBhcnJheSkgb2YgdmFsdWVzIChvclxuICogcHJvbWlzZXMgZm9yIHZhbHVlcylcbiAqIEByZXR1cm5zIHtBcnJheVtTdGF0ZV19IGFuIGFycmF5IG9mIHN0YXRlcyBmb3IgdGhlIHJlc3BlY3RpdmUgdmFsdWVzLlxuICovXG5Qcm9taXNlLnByb3RvdHlwZS5hbGxTZXR0bGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgICAgIHJldHVybiBhbGwoYXJyYXlfbWFwKHByb21pc2VzLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IFEocHJvbWlzZSk7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWdhcmRsZXNzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLmluc3BlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVnYXJkbGVzcywgcmVnYXJkbGVzcyk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQ2FwdHVyZXMgdGhlIGZhaWx1cmUgb2YgYSBwcm9taXNlLCBnaXZpbmcgYW4gb3BvcnR1bml0eSB0byByZWNvdmVyXG4gKiB3aXRoIGEgY2FsbGJhY2suICBJZiB0aGUgZ2l2ZW4gcHJvbWlzZSBpcyBmdWxmaWxsZWQsIHRoZSByZXR1cm5lZFxuICogcHJvbWlzZSBpcyBmdWxmaWxsZWQuXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2UgZm9yIHNvbWV0aGluZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdG8gZnVsZmlsbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpZiB0aGVcbiAqIGdpdmVuIHByb21pc2UgaXMgcmVqZWN0ZWRcbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgY2FsbGJhY2tcbiAqL1xuUS5mYWlsID0gLy8gWFhYIGxlZ2FjeVxuUVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKG9iamVjdCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLnRoZW4odm9pZCAwLCByZWplY3RlZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mYWlsID0gLy8gWFhYIGxlZ2FjeVxuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChyZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCByZWplY3RlZCk7XG59O1xuXG4vKipcbiAqIEF0dGFjaGVzIGEgbGlzdGVuZXIgdGhhdCBjYW4gcmVzcG9uZCB0byBwcm9ncmVzcyBub3RpZmljYXRpb25zIGZyb20gYVxuICogcHJvbWlzZSdzIG9yaWdpbmF0aW5nIGRlZmVycmVkLiBUaGlzIGxpc3RlbmVyIHJlY2VpdmVzIHRoZSBleGFjdCBhcmd1bWVudHNcbiAqIHBhc3NlZCB0byBgYGRlZmVycmVkLm5vdGlmeWBgLlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlIGZvciBzb21ldGhpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIHJlY2VpdmUgYW55IHByb2dyZXNzIG5vdGlmaWNhdGlvbnNcbiAqIEByZXR1cm5zIHRoZSBnaXZlbiBwcm9taXNlLCB1bmNoYW5nZWRcbiAqL1xuUS5wcm9ncmVzcyA9IHByb2dyZXNzO1xuZnVuY3Rpb24gcHJvZ3Jlc3Mob2JqZWN0LCBwcm9ncmVzc2VkKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS50aGVuKHZvaWQgMCwgdm9pZCAwLCBwcm9ncmVzc2VkKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3NlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCB2b2lkIDAsIHByb2dyZXNzZWQpO1xufTtcblxuLyoqXG4gKiBQcm92aWRlcyBhbiBvcHBvcnR1bml0eSB0byBvYnNlcnZlIHRoZSBzZXR0bGluZyBvZiBhIHByb21pc2UsXG4gKiByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIG9yIHJlamVjdGVkLiAgRm9yd2FyZHNcbiAqIHRoZSByZXNvbHV0aW9uIHRvIHRoZSByZXR1cm5lZCBwcm9taXNlIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGRvbmUuXG4gKiBUaGUgY2FsbGJhY2sgY2FuIHJldHVybiBhIHByb21pc2UgdG8gZGVmZXIgY29tcGxldGlvbi5cbiAqIEBwYXJhbSB7QW55Kn0gcHJvbWlzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdG8gb2JzZXJ2ZSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW5cbiAqIHByb21pc2UsIHRha2VzIG5vIGFyZ3VtZW50cy5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJlc29sdXRpb24gb2YgdGhlIGdpdmVuIHByb21pc2Ugd2hlblxuICogYGBmaW5gYCBpcyBkb25lLlxuICovXG5RLmZpbiA9IC8vIFhYWCBsZWdhY3lcblFbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gUShvYmplY3QpW1wiZmluYWxseVwiXShjYWxsYmFjayk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5maW4gPSAvLyBYWFggbGVnYWN5XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IFEoY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5mY2FsbCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRPRE8gYXR0ZW1wdCB0byByZWN5Y2xlIHRoZSByZWplY3Rpb24gd2l0aCBcInRoaXNcIi5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmZjYWxsKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBUZXJtaW5hdGVzIGEgY2hhaW4gb2YgcHJvbWlzZXMsIGZvcmNpbmcgcmVqZWN0aW9ucyB0byBiZVxuICogdGhyb3duIGFzIGV4Y2VwdGlvbnMuXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2UgYXQgdGhlIGVuZCBvZiBhIGNoYWluIG9mIHByb21pc2VzXG4gKiBAcmV0dXJucyBub3RoaW5nXG4gKi9cblEuZG9uZSA9IGZ1bmN0aW9uIChvYmplY3QsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kb25lKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbiAoZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3MpIHtcbiAgICB2YXIgb25VbmhhbmRsZWRFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBmb3J3YXJkIHRvIGEgZnV0dXJlIHR1cm4gc28gdGhhdCBgYHdoZW5gYFxuICAgICAgICAvLyBkb2VzIG5vdCBjYXRjaCBpdCBhbmQgdHVybiBpdCBpbnRvIGEgcmVqZWN0aW9uLlxuICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1ha2VTdGFja1RyYWNlTG9uZyhlcnJvciwgcHJvbWlzZSk7XG4gICAgICAgICAgICBpZiAoUS5vbmVycm9yKSB7XG4gICAgICAgICAgICAgICAgUS5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBgbmV4dFRpY2tgaW5nIHZpYSBhbiB1bm5lY2Vzc2FyeSBgd2hlbmAuXG4gICAgdmFyIHByb21pc2UgPSBmdWxmaWxsZWQgfHwgcmVqZWN0ZWQgfHwgcHJvZ3Jlc3MgP1xuICAgICAgICB0aGlzLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3MpIDpcbiAgICAgICAgdGhpcztcblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICAgIG9uVW5oYW5kbGVkRXJyb3IgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKG9uVW5oYW5kbGVkRXJyb3IpO1xuICAgIH1cblxuICAgIHByb21pc2UudGhlbih2b2lkIDAsIG9uVW5oYW5kbGVkRXJyb3IpO1xufTtcblxuLyoqXG4gKiBDYXVzZXMgYSBwcm9taXNlIHRvIGJlIHJlamVjdGVkIGlmIGl0IGRvZXMgbm90IGdldCBmdWxmaWxsZWQgYmVmb3JlXG4gKiBzb21lIG1pbGxpc2Vjb25kcyB0aW1lIG91dC5cbiAqIEBwYXJhbSB7QW55Kn0gcHJvbWlzZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbGxpc2Vjb25kcyB0aW1lb3V0XG4gKiBAcGFyYW0ge0FueSp9IGN1c3RvbSBlcnJvciBtZXNzYWdlIG9yIEVycm9yIG9iamVjdCAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlIGlmIGl0IGlzXG4gKiBmdWxmaWxsZWQgYmVmb3JlIHRoZSB0aW1lb3V0LCBvdGhlcndpc2UgcmVqZWN0ZWQuXG4gKi9cblEudGltZW91dCA9IGZ1bmN0aW9uIChvYmplY3QsIG1zLCBlcnJvcikge1xuICAgIHJldHVybiBRKG9iamVjdCkudGltZW91dChtcywgZXJyb3IpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIChtcywgZXJyb3IpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFlcnJvciB8fCBcInN0cmluZ1wiID09PSB0eXBlb2YgZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGVycm9yIHx8IFwiVGltZWQgb3V0IGFmdGVyIFwiICsgbXMgKyBcIiBtc1wiKTtcbiAgICAgICAgICAgIGVycm9yLmNvZGUgPSBcIkVUSU1FRE9VVFwiO1xuICAgICAgICB9XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgfSwgbXMpO1xuXG4gICAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgfSwgZGVmZXJyZWQubm90aWZ5KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIGdpdmVuIHZhbHVlIChvciBwcm9taXNlZCB2YWx1ZSksIHNvbWVcbiAqIG1pbGxpc2Vjb25kcyBhZnRlciBpdCByZXNvbHZlZC4gUGFzc2VzIHJlamVjdGlvbnMgaW1tZWRpYXRlbHkuXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaWxsaXNlY29uZHNcbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJlc29sdXRpb24gb2YgdGhlIGdpdmVuIHByb21pc2UgYWZ0ZXIgbWlsbGlzZWNvbmRzXG4gKiB0aW1lIGhhcyBlbGFwc2VkIHNpbmNlIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlLlxuICogSWYgdGhlIGdpdmVuIHByb21pc2UgcmVqZWN0cywgdGhhdCBpcyBwYXNzZWQgaW1tZWRpYXRlbHkuXG4gKi9cblEuZGVsYXkgPSBmdW5jdGlvbiAob2JqZWN0LCB0aW1lb3V0KSB7XG4gICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkge1xuICAgICAgICB0aW1lb3V0ID0gb2JqZWN0O1xuICAgICAgICBvYmplY3QgPSB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBRKG9iamVjdCkuZGVsYXkodGltZW91dCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBQYXNzZXMgYSBjb250aW51YXRpb24gdG8gYSBOb2RlIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAqIGFyZ3VtZW50cyBwcm92aWRlZCBhcyBhbiBhcnJheSwgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICpcbiAqICAgICAgUS5uZmFwcGx5KEZTLnJlYWRGaWxlLCBbX19maWxlbmFtZV0pXG4gKiAgICAgIC50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gKiAgICAgIH0pXG4gKlxuICovXG5RLm5mYXBwbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICByZXR1cm4gUShjYWxsYmFjaykubmZhcHBseShhcmdzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5mYXBwbHkgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgdmFyIG5vZGVBcmdzID0gYXJyYXlfc2xpY2UoYXJncyk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIHRoaXMuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFBhc3NlcyBhIGNvbnRpbnVhdGlvbiB0byBhIE5vZGUgZnVuY3Rpb24sIHdoaWNoIGlzIGNhbGxlZCB3aXRoIHRoZSBnaXZlblxuICogYXJndW1lbnRzIHByb3ZpZGVkIGluZGl2aWR1YWxseSwgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICogQGV4YW1wbGVcbiAqIFEubmZjYWxsKEZTLnJlYWRGaWxlLCBfX2ZpbGVuYW1lKVxuICogLnRoZW4oZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAqIH0pXG4gKlxuICovXG5RLm5mY2FsbCA9IGZ1bmN0aW9uIChjYWxsYmFjayAvKi4uLmFyZ3MqLykge1xuICAgIHZhciBhcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gUShjYWxsYmFjaykubmZhcHBseShhcmdzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5mY2FsbCA9IGZ1bmN0aW9uICgvKi4uLmFyZ3MqLykge1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cyk7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBub2RlQXJncy5wdXNoKGRlZmVycmVkLm1ha2VOb2RlUmVzb2x2ZXIoKSk7XG4gICAgdGhpcy5mYXBwbHkobm9kZUFyZ3MpLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogV3JhcHMgYSBOb2RlSlMgY29udGludWF0aW9uIHBhc3NpbmcgZnVuY3Rpb24gYW5kIHJldHVybnMgYW4gZXF1aXZhbGVudFxuICogdmVyc2lvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlLlxuICogQGV4YW1wbGVcbiAqIFEubmZiaW5kKEZTLnJlYWRGaWxlLCBfX2ZpbGVuYW1lKShcInV0Zi04XCIpXG4gKiAudGhlbihjb25zb2xlLmxvZylcbiAqIC5kb25lKClcbiAqL1xuUS5uZmJpbmQgPVxuUS5kZW5vZGVpZnkgPSBmdW5jdGlvbiAoY2FsbGJhY2sgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgYmFzZUFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlQXJncyA9IGJhc2VBcmdzLmNvbmNhdChhcnJheV9zbGljZShhcmd1bWVudHMpKTtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgICAgICBRKGNhbGxiYWNrKS5mYXBwbHkobm9kZUFyZ3MpLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5mYmluZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5kZW5vZGVpZnkgPSBmdW5jdGlvbiAoLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cyk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIHJldHVybiBRLmRlbm9kZWlmeS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xufTtcblxuUS5uYmluZCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc3AgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgYmFzZUFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlQXJncyA9IGJhc2VBcmdzLmNvbmNhdChhcnJheV9zbGljZShhcmd1bWVudHMpKTtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgICAgICBmdW5jdGlvbiBib3VuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzcCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBRKGJvdW5kKS5mYXBwbHkobm9kZUFyZ3MpLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5iaW5kID0gZnVuY3Rpb24gKC8qdGhpc3AsIC4uLmFyZ3MqLykge1xuICAgIHZhciBhcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAwKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgcmV0dXJuIFEubmJpbmQuYXBwbHkodm9pZCAwLCBhcmdzKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgYSBtZXRob2Qgb2YgYSBOb2RlLXN0eWxlIG9iamVjdCB0aGF0IGFjY2VwdHMgYSBOb2RlLXN0eWxlXG4gKiBjYWxsYmFjayB3aXRoIGEgZ2l2ZW4gYXJyYXkgb2YgYXJndW1lbnRzLCBwbHVzIGEgcHJvdmlkZWQgY2FsbGJhY2suXG4gKiBAcGFyYW0gb2JqZWN0IGFuIG9iamVjdCB0aGF0IGhhcyB0aGUgbmFtZWQgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2Qgb2Ygb2JqZWN0XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBtZXRob2Q7IHRoZSBjYWxsYmFja1xuICogd2lsbCBiZSBwcm92aWRlZCBieSBRIGFuZCBhcHBlbmRlZCB0byB0aGVzZSBhcmd1bWVudHMuXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSB2YWx1ZSBvciBlcnJvclxuICovXG5RLm5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUS5ucG9zdCA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLm5wb3N0KG5hbWUsIGFyZ3MpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUubm1hcHBseSA9IC8vIFhYWCBBcyBwcm9wb3NlZCBieSBcIlJlZHNhbmRyb1wiXG5Qcm9taXNlLnByb3RvdHlwZS5ucG9zdCA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgdmFyIG5vZGVBcmdzID0gYXJyYXlfc2xpY2UoYXJncyB8fCBbXSk7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBub2RlQXJncy5wdXNoKGRlZmVycmVkLm1ha2VOb2RlUmVzb2x2ZXIoKSk7XG4gICAgdGhpcy5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIG5vZGVBcmdzXSkuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBDYWxscyBhIG1ldGhvZCBvZiBhIE5vZGUtc3R5bGUgb2JqZWN0IHRoYXQgYWNjZXB0cyBhIE5vZGUtc3R5bGVcbiAqIGNhbGxiYWNrLCBmb3J3YXJkaW5nIHRoZSBnaXZlbiB2YXJpYWRpYyBhcmd1bWVudHMsIHBsdXMgYSBwcm92aWRlZFxuICogY2FsbGJhY2sgYXJndW1lbnQuXG4gKiBAcGFyYW0gb2JqZWN0IGFuIG9iamVjdCB0aGF0IGhhcyB0aGUgbmFtZWQgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2Qgb2Ygb2JqZWN0XG4gKiBAcGFyYW0gLi4uYXJncyBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kOyB0aGUgY2FsbGJhY2sgd2lsbFxuICogYmUgcHJvdmlkZWQgYnkgUSBhbmQgYXBwZW5kZWQgdG8gdGhlc2UgYXJndW1lbnRzLlxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgdmFsdWUgb3IgZXJyb3JcbiAqL1xuUS5uc2VuZCA9IC8vIFhYWCBCYXNlZCBvbiBNYXJrIE1pbGxlcidzIHByb3Bvc2VkIFwic2VuZFwiXG5RLm5tY2FsbCA9IC8vIFhYWCBCYXNlZCBvbiBcIlJlZHNhbmRybydzXCIgcHJvcG9zYWxcblEubmludm9rZSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgbm9kZUFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMsIDIpO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIFEob2JqZWN0KS5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIG5vZGVBcmdzXSkuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUubnNlbmQgPSAvLyBYWFggQmFzZWQgb24gTWFyayBNaWxsZXIncyBwcm9wb3NlZCBcInNlbmRcIlxuUHJvbWlzZS5wcm90b3R5cGUubm1jYWxsID0gLy8gWFhYIEJhc2VkIG9uIFwiUmVkc2FuZHJvJ3NcIiBwcm9wb3NhbFxuUHJvbWlzZS5wcm90b3R5cGUubmludm9rZSA9IGZ1bmN0aW9uIChuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIG5vZGVBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICB0aGlzLmRpc3BhdGNoKFwicG9zdFwiLCBbbmFtZSwgbm9kZUFyZ3NdKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIElmIGEgZnVuY3Rpb24gd291bGQgbGlrZSB0byBzdXBwb3J0IGJvdGggTm9kZSBjb250aW51YXRpb24tcGFzc2luZy1zdHlsZSBhbmRcbiAqIHByb21pc2UtcmV0dXJuaW5nLXN0eWxlLCBpdCBjYW4gZW5kIGl0cyBpbnRlcm5hbCBwcm9taXNlIGNoYWluIHdpdGhcbiAqIGBub2RlaWZ5KG5vZGViYWNrKWAsIGZvcndhcmRpbmcgdGhlIG9wdGlvbmFsIG5vZGViYWNrIGFyZ3VtZW50LiAgSWYgdGhlIHVzZXJcbiAqIGVsZWN0cyB0byB1c2UgYSBub2RlYmFjaywgdGhlIHJlc3VsdCB3aWxsIGJlIHNlbnQgdGhlcmUuICBJZiB0aGV5IGRvIG5vdFxuICogcGFzcyBhIG5vZGViYWNrLCB0aGV5IHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0IHByb21pc2UuXG4gKiBAcGFyYW0gb2JqZWN0IGEgcmVzdWx0IChvciBhIHByb21pc2UgZm9yIGEgcmVzdWx0KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbm9kZWJhY2sgYSBOb2RlLmpzLXN0eWxlIGNhbGxiYWNrXG4gKiBAcmV0dXJucyBlaXRoZXIgdGhlIHByb21pc2Ugb3Igbm90aGluZ1xuICovXG5RLm5vZGVpZnkgPSBub2RlaWZ5O1xuZnVuY3Rpb24gbm9kZWlmeShvYmplY3QsIG5vZGViYWNrKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5ub2RlaWZ5KG5vZGViYWNrKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChub2RlYmFjaykge1xuICAgIGlmIChub2RlYmFjaykge1xuICAgICAgICB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBub2RlYmFjayhudWxsLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBub2RlYmFjayhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuUS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUS5ub0NvbmZsaWN0IG9ubHkgd29ya3Mgd2hlbiBRIGlzIHVzZWQgYXMgYSBnbG9iYWxcIik7XG59O1xuXG4vLyBBbGwgY29kZSBiZWZvcmUgdGhpcyBwb2ludCB3aWxsIGJlIGZpbHRlcmVkIGZyb20gc3RhY2sgdHJhY2VzLlxudmFyIHFFbmRpbmdMaW5lID0gY2FwdHVyZUxpbmUoKTtcblxucmV0dXJuIFE7XG5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcS9xLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vc3JjL2Nyb3NzZmlsdGVyXCIpLmNyb3NzZmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIGNyb3NzZmlsdGVyX2lkZW50aXR5KGQpIHtcbiAgcmV0dXJuIGQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3Jvc3NmaWx0ZXJfaWRlbnRpdHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2lkZW50aXR5LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2F0b29sLWJ1aWxkL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cbnZhciBhZ2dyZWdhdG9ycyA9IHtcbiAgLy8gQ29sbGVjdGlvbnNcbiAgJHN1bTogJHN1bSxcbiAgJGF2ZzogJGF2ZyxcbiAgJG1heDogJG1heCxcbiAgJG1pbjogJG1pbixcblxuICAvLyBQaWNrZXJzXG4gICRjb3VudDogJGNvdW50LFxuICAkZmlyc3Q6ICRmaXJzdCxcbiAgJGxhc3Q6ICRsYXN0LFxuICAkZ2V0OiAkZ2V0LFxuICAkbnRoOiAkZ2V0LCAvLyBudGggaXMgc2FtZSBhcyB1c2luZyBhIGdldFxuICAkbnRoTGFzdDogJG50aExhc3QsXG4gICRudGhQY3Q6ICRudGhQY3QsXG4gICRtYXA6ICRtYXAsXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYWtlVmFsdWVBY2Nlc3NvcjogbWFrZVZhbHVlQWNjZXNzb3IsXG4gIGFnZ3JlZ2F0b3JzOiBhZ2dyZWdhdG9ycyxcbiAgZXh0cmFjdEtleVZhbE9yQXJyYXk6IGV4dHJhY3RLZXlWYWxPckFycmF5LFxuICBwYXJzZUFnZ3JlZ2F0b3JQYXJhbXM6IHBhcnNlQWdncmVnYXRvclBhcmFtcyxcbn1cbiAgLy8gVGhpcyBpcyB1c2VkIHRvIGJ1aWxkIGFnZ3JlZ2F0aW9uIHN0YWNrcyBmb3Igc3ViLXJlZHVjdGlvXG4gIC8vIGFnZ3JlZ2F0aW9ucywgb3IgcGx1Y2tpbmcgdmFsdWVzIGZvciB1c2UgaW4gZmlsdGVycyBmcm9tIHRoZSBkYXRhXG5mdW5jdGlvbiBtYWtlVmFsdWVBY2Nlc3NvcihvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzU3RyaW5nU3ludGF4KG9iaikpIHtcbiAgICAgIG9iaiA9IGNvbnZlcnRBZ2dyZWdhdG9yU3RyaW5nKG9iailcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTXVzdCBiZSBhIGNvbHVtbiBrZXkuIFJldHVybiBhbiBpZGVudGl0eSBhY2Nlc3NvclxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgfVxuICAvLyBNdXN0IGJlIGEgY29sdW1uIGluZGV4LiBSZXR1cm4gYW4gaWRlbnRpdHkgYWNjZXNzb3JcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG4gIC8vIElmIGl0J3MgYW4gb2JqZWN0LCB3ZSBuZWVkIHRvIGJ1aWxkIGEgY3VzdG9tIHZhbHVlIGFjY2Vzc29yIGZ1bmN0aW9uXG4gIGlmIChfLmlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gbWFrZSgpXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlKCkge1xuICAgIHZhciBzdGFjayA9IG1ha2VTdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uKG9iailcbiAgICByZXR1cm4gZnVuY3Rpb24gdG9wU3RhY2soZCkge1xuICAgICAgcmV0dXJuIHN0YWNrKGQpXG4gICAgfVxuICB9XG59XG5cbi8vIEEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgd2Fsa3MgdGhlIGFnZ3JlZ2F0aW9uIHN0YWNrIGFuZCByZXR1cm5zXG4vLyBhIGZ1bmN0aW9uLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24sIHdoZW4gY2FsbGVkLCB3aWxsIHJlY3Vyc2l2ZWx5IGludm9rZVxuLy8gd2l0aCB0aGUgcHJvcGVydGllcyBmcm9tIHRoZSBwcmV2aW91cyBzdGFjayBpbiByZXZlcnNlIG9yZGVyXG5mdW5jdGlvbiBtYWtlU3ViQWdncmVnYXRpb25GdW5jdGlvbihvYmopIHtcbiAgLy8gSWYgaXRzIGFuIG9iamVjdCwgZWl0aGVyIHVud3JhcCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgYXMgYW5cbiAgLy8gYXJyYXkgb2Yga2V5VmFsdWVzLCBvciB1bndyYXAgdGhlIGZpcnN0IGtleVZhbHVlIHNldCBhcyBhbiBvYmplY3RcbiAgb2JqID0gXy5pc09iamVjdChvYmopID8gZXh0cmFjdEtleVZhbE9yQXJyYXkob2JqKSA6IG9ialxuXG4gIC8vIERldGVjdCBzdHJpbmdzXG4gIGlmIChfLmlzU3RyaW5nKG9iaikpIHtcbiAgICAvLyBJZiBiZWdpbnMgd2l0aCBhICQsIHRoZW4gd2UgbmVlZCB0byBjb252ZXJ0IGl0IG92ZXIgdG8gYSByZWd1bGFyIHF1ZXJ5IG9iamVjdCBhbmQgYW5hbHl6ZSBpdCBhZ2FpblxuICAgIGlmIChpc1N0cmluZ1N5bnRheChvYmopKSB7XG4gICAgICByZXR1cm4gbWFrZVN1YkFnZ3JlZ2F0aW9uRnVuY3Rpb24oY29udmVydEFnZ3JlZ2F0b3JTdHJpbmcob2JqKSlcbiAgICB9XG4gICAgLy8gSWYgbm9ybWFsIHN0cmluZywgdGhlbiBqdXN0IHJldHVybiBhIGFuIGl0ZW50aXR5IGFjY2Vzc29yXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlkZW50aXR5KGQpIHtcbiAgICAgIHJldHVybiBkW29ial1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBhbiBhcnJheSwgcmVjdXJzZSBpbnRvIGVhY2ggaXRlbSBhbmQgcmV0dXJuIGFzIGEgbWFwXG4gIGlmIChfLmlzQXJyYXkob2JqKSkge1xuICAgIHZhciBzdWJTdGFjayA9IF8ubWFwKG9iaiwgbWFrZVN1YkFnZ3JlZ2F0aW9uRnVuY3Rpb24pXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGdldFN1YlN0YWNrKGQpIHtcbiAgICAgIHJldHVybiBzdWJTdGFjay5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMoZClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgb2JqZWN0LCBmaW5kIHRoZSBhZ2dyZWdhdGlvbiwgYW5kIHJlY3Vyc2UgaW50byB0aGUgdmFsdWVcbiAgaWYgKG9iai5rZXkpIHtcbiAgICBpZiAoYWdncmVnYXRvcnNbb2JqLmtleV0pIHtcbiAgICAgIHZhciBzdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uID0gbWFrZVN1YkFnZ3JlZ2F0aW9uRnVuY3Rpb24ob2JqLnZhbHVlKVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldEFnZ3JlZ2F0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0b3JzW29iai5rZXldKHN1YkFnZ3JlZ2F0aW9uRnVuY3Rpb24oZCkpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFnZ3JlZ3JhdGlvbiBtZXRob2QnLCBvYmopXG4gIH1cblxuICByZXR1cm4gW11cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEtleVZhbE9yQXJyYXkob2JqKSB7XG4gIHZhciBrZXlWYWxcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIGtleVZhbCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiBvYmpba2V5XVxuICAgICAgfVxuICAgICAgdmFyIHN1Yk9iaiA9IHt9XG4gICAgICBzdWJPYmpba2V5XSA9IG9ialtrZXldXG4gICAgICB2YWx1ZXMucHVzaChzdWJPYmopXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZXMubGVuZ3RoID4gMSA/IHZhbHVlcyA6IGtleVZhbFxufVxuXG5mdW5jdGlvbiBpc1N0cmluZ1N5bnRheChzdHIpIHtcbiAgcmV0dXJuIFsnJCcsICcoJ10uaW5kZXhPZihzdHIuY2hhckF0KDApKSA+IC0xXG59XG5cbmZ1bmN0aW9uIHBhcnNlQWdncmVnYXRvclBhcmFtcyhrZXlTdHJpbmcpIHtcbiAgdmFyIHBhcmFtcyA9IFtdXG4gIHZhciBwMSA9IGtleVN0cmluZy5pbmRleE9mKCcoJylcbiAgdmFyIHAyID0ga2V5U3RyaW5nLmluZGV4T2YoJyknKVxuICB2YXIga2V5ID0gcDEgPiAtMSA/IGtleVN0cmluZy5zdWJzdHJpbmcoMCwgcDEpIDoga2V5U3RyaW5nXG4gIGlmICghYWdncmVnYXRvcnNba2V5XSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChwMSA+IC0xICYmIHAyID4gLTEgJiYgcDIgPiBwMSkge1xuICAgIHBhcmFtcyA9IGtleVN0cmluZy5zdWJzdHJpbmcocDEgKyAxLCBwMikuc3BsaXQoJywnKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZ2dyZWdhdG9yOiBhZ2dyZWdhdG9yc1trZXldLFxuICAgIHBhcmFtczogcGFyYW1zXG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydEFnZ3JlZ2F0b3JTdHJpbmcoa2V5U3RyaW5nKSB7XG4gIC8vIHZhciBvYmogPSB7fSAvLyBvYmogaXMgZGVmaW5lZCBidXQgbm90IHVzZWRcblxuICAvLyAxLiB1bndyYXAgdG9wIHBhcmVudGhlc2VzXG4gIC8vIDIuIGRldGVjdCBhcnJheXNcblxuICAvLyBwYXJlbnRoZXNlc1xuICB2YXIgb3V0ZXJQYXJlbnMgPSAvXFwoKC4rKVxcKS9nXG4gIC8vIHZhciBpbm5lclBhcmVucyA9IC9cXCgoW15cXChcXCldKylcXCkvZyAgLy8gaW5uZXJQYXJlbnMgaXMgZGVmaW5lZCBidXQgbm90IHVzZWRcbiAgICAvLyBjb21tYSBub3QgaW4gKClcbiAgdmFyIGhhc0NvbW1hID0gLyg/OlxcKFteXFwoXFwpXSpcXCkpfCgsKS9nXG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoJ3snICsgdW53cmFwUGFyZW5zQW5kQ29tbWFzKGtleVN0cmluZykgKyAnfScpXG5cbiAgZnVuY3Rpb24gdW53cmFwUGFyZW5zQW5kQ29tbWFzKHN0cikge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcgJywgJycpXG4gICAgcmV0dXJuICdcIicgKyBzdHIucmVwbGFjZShvdXRlclBhcmVucywgZnVuY3Rpb24gKHAsIHByKSB7XG4gICAgICBpZiAoaGFzQ29tbWEudGVzdChwcikpIHtcbiAgICAgICAgaWYgKHByLmNoYXJBdCgwKSA9PT0gJyQnKSB7XG4gICAgICAgICAgcmV0dXJuICdcIjp7XCInICsgcHIucmVwbGFjZShoYXNDb21tYSwgZnVuY3Rpb24gKHAyLyogLCBwcjIgKi8pIHtcbiAgICAgICAgICAgIGlmIChwMiA9PT0gJywnKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnLFwiJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVud3JhcFBhcmVuc0FuZENvbW1hcyhwMikudHJpbSgpXG4gICAgICAgICAgfSkgKyAnfSdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzpbXCInICsgcHIucmVwbGFjZShoYXNDb21tYSwgZnVuY3Rpb24gKC8qIHAyICwgcHIyICovKSB7XG4gICAgICAgICAgcmV0dXJuICdcIixcIidcbiAgICAgICAgfSkgKyAnXCJdJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLy8gQ29sbGVjdGlvbiBBZ2dyZWdhdG9yc1xuXG5mdW5jdGlvbiAkc3VtKGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSArIGJcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gJGF2ZyhjaGlsZHJlbikge1xuICByZXR1cm4gY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiXG4gIH0sIDApIC8gY2hpbGRyZW4ubGVuZ3RoXG59XG5cbmZ1bmN0aW9uICRtYXgoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGNoaWxkcmVuKVxufVxuXG5mdW5jdGlvbiAkbWluKGNoaWxkcmVuKSB7XG4gIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCBjaGlsZHJlbilcbn1cblxuZnVuY3Rpb24gJGNvdW50KGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbi5sZW5ndGhcbn1cblxuLyogZnVuY3Rpb24gJG1lZChjaGlsZHJlbikgeyAvLyAkbWVkIGlzIGRlZmluZWQgYnV0IG5vdCB1c2VkXG4gIGNoaWxkcmVuLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIC0gYlxuICB9KVxuICB2YXIgaGFsZiA9IE1hdGguZmxvb3IoY2hpbGRyZW4ubGVuZ3RoIC8gMilcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCAlIDIpXG4gICAgcmV0dXJuIGNoaWxkcmVuW2hhbGZdXG4gIGVsc2VcbiAgICByZXR1cm4gKGNoaWxkcmVuW2hhbGYgLSAxXSArIGNoaWxkcmVuW2hhbGZdKSAvIDIuMFxufSAqL1xuXG5mdW5jdGlvbiAkZmlyc3QoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuWzBdXG59XG5cbmZ1bmN0aW9uICRsYXN0KGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiAkZ2V0KGNoaWxkcmVuLCBuKSB7XG4gIHJldHVybiBjaGlsZHJlbltuXVxufVxuXG5mdW5jdGlvbiAkbnRoTGFzdChjaGlsZHJlbiwgbikge1xuICByZXR1cm4gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gbl1cbn1cblxuZnVuY3Rpb24gJG50aFBjdChjaGlsZHJlbiwgbikge1xuICByZXR1cm4gY2hpbGRyZW5bTWF0aC5yb3VuZChjaGlsZHJlbi5sZW5ndGggKiAobiAvIDEwMCkpXVxufVxuXG5mdW5jdGlvbiAkbWFwKGNoaWxkcmVuLCBuKSB7XG4gIHJldHVybiBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZFtuXVxuICB9KVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2FnZ3JlZ2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG52YXIgZXhwcmVzc2lvbnMgPSByZXF1aXJlKCcuL2V4cHJlc3Npb25zJylcbnZhciBhZ2dyZWdhdGlvbiA9IHJlcXVpcmUoJy4vYWdncmVnYXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgZmlsdGVyQWxsOiBmaWx0ZXJBbGwsXG4gICAgYXBwbHlGaWx0ZXJzOiBhcHBseUZpbHRlcnMsXG4gICAgbWFrZUZ1bmN0aW9uOiBtYWtlRnVuY3Rpb24sXG4gICAgc2NhbkZvckR5bmFtaWNGaWx0ZXJzOiBzY2FuRm9yRHluYW1pY0ZpbHRlcnNcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlcihjb2x1bW4sIGZpbCwgaXNSYW5nZSwgcmVwbGFjZSkge1xuICAgIHJldHVybiBnZXRDb2x1bW4oY29sdW1uKVxuICAgIC50aGVuKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIC8vIENsb25lIGEgY29weSBvZiB0aGUgbmV3IGZpbHRlcnNcbiAgICAgIHZhciBuZXdGaWx0ZXJzID0gXy5hc3NpZ24oe30sIHNlcnZpY2UuZmlsdGVycylcbiAgICAgIC8vIEhlcmUgd2UgdXNlIHRoZSByZWdpc3RlcmVkIGNvbHVtbiBrZXkgZGVzcGl0ZSB0aGUgZmlsdGVyIGtleSBwYXNzZWQsIGp1c3QgaW4gY2FzZSB0aGUgZmlsdGVyIGtleSdzIG9yZGVyaW5nIGlzIG9yZGVyZWQgZGlmZmVyZW50bHkgOilcbiAgICAgIHZhciBmaWx0ZXJLZXkgPSBjb2x1bW4ua2V5XG4gICAgICBpZiAoY29sdW1uLmNvbXBsZXggPT09ICdhcnJheScpIHtcbiAgICAgICAgZmlsdGVyS2V5ID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmtleSlcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW4uY29tcGxleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmaWx0ZXJLZXkgPSBjb2x1bW4ua2V5LnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICAgIC8vIEJ1aWxkIHRoZSBmaWx0ZXIgb2JqZWN0XG4gICAgICBuZXdGaWx0ZXJzW2ZpbHRlcktleV0gPSBidWlsZEZpbHRlck9iamVjdChmaWwsIGlzUmFuZ2UsIHJlcGxhY2UpXG5cbiAgICAgIHJldHVybiBhcHBseUZpbHRlcnMobmV3RmlsdGVycylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29sdW1uKGNvbHVtbikge1xuICAgIHZhciBleGlzdHMgPSBzZXJ2aWNlLmNvbHVtbi5maW5kKGNvbHVtbilcbiAgICAvLyBJZiB0aGUgZmlsdGVycyBkaW1lbnNpb24gZG9lc24ndCBleGlzdCB5ZXQsIHRyeSBhbmQgY3JlYXRlIGl0XG4gICAgcmV0dXJuIFByb21pc2UudHJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlLmNvbHVtbih7XG4gICAgICAgICAga2V5OiBjb2x1bW4sXG4gICAgICAgICAgdGVtcG9yYXJ5OiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gSXQgd2FzIGFibGUgdG8gYmUgY3JlYXRlZCwgc28gcmV0cmlldmUgYW5kIHJldHVybiBpdFxuICAgICAgICAgIHJldHVybiBzZXJ2aWNlLmNvbHVtbi5maW5kKGNvbHVtbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEl0IGV4aXN0cywgc28ganVzdCByZXR1cm4gd2hhdCB3ZSBmb3VuZFxuICAgICAgcmV0dXJuIGV4aXN0c1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJBbGwoZmlscykge1xuICAgIC8vIElmIGVtcHR5LCByZW1vdmUgYWxsIGZpbHRlcnNcbiAgICBpZiAoIWZpbHMpIHtcbiAgICAgIHNlcnZpY2UuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgY29sLmRpbWVuc2lvbi5maWx0ZXJBbGwoKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBhcHBseUZpbHRlcnMoe30pXG4gICAgfVxuXG4gICAgLy8gQ2xvbmUgYSBjb3B5IGZvciB0aGUgbmV3IGZpbHRlcnNcbiAgICB2YXIgbmV3RmlsdGVycyA9IF8uYXNzaWduKHt9LCBzZXJ2aWNlLmZpbHRlcnMpXG5cbiAgICB2YXIgZHMgPSBfLm1hcChmaWxzLCBmdW5jdGlvbiAoZmlsKSB7XG4gICAgICByZXR1cm4gZ2V0Q29sdW1uKGZpbC5jb2x1bW4pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAvLyBIZXJlIHdlIHVzZSB0aGUgcmVnaXN0ZXJlZCBjb2x1bW4ga2V5IGRlc3BpdGUgdGhlIGZpbHRlciBrZXkgcGFzc2VkLCBqdXN0IGluIGNhc2UgdGhlIGZpbHRlciBrZXkncyBvcmRlcmluZyBpcyBvcmRlcmVkIGRpZmZlcmVudGx5IDopXG4gICAgICAgICAgdmFyIGZpbHRlcktleSA9IGNvbHVtbi5jb21wbGV4ID8gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmtleSkgOiBjb2x1bW4ua2V5XG4gICAgICAgICAgLy8gQnVpbGQgdGhlIGZpbHRlciBvYmplY3RcbiAgICAgICAgICBuZXdGaWx0ZXJzW2ZpbHRlcktleV0gPSBidWlsZEZpbHRlck9iamVjdChmaWwudmFsdWUsIGZpbC5pc1JhbmdlLCBmaWwucmVwbGFjZSlcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGRzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXBwbHlGaWx0ZXJzKG5ld0ZpbHRlcnMpXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRGaWx0ZXJPYmplY3QoZmlsLCBpc1JhbmdlLCByZXBsYWNlKSB7XG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZmlsKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChfLmlzRnVuY3Rpb24oZmlsKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGZpbCxcbiAgICAgICAgZnVuY3Rpb246IGZpbCxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKF8uaXNPYmplY3QoZmlsKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGZpbCxcbiAgICAgICAgZnVuY3Rpb246IG1ha2VGdW5jdGlvbihmaWwpLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChfLmlzQXJyYXkoZmlsKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGZpbCxcbiAgICAgICAgcmVwbGFjZTogaXNSYW5nZSB8fCByZXBsYWNlLFxuICAgICAgICB0eXBlOiBpc1JhbmdlID8gJ3JhbmdlJyA6ICdpbmNsdXNpdmUnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGZpbCxcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgICB0eXBlOiAnZXhhY3QnLFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5RmlsdGVycyhuZXdGaWx0ZXJzKSB7XG4gICAgdmFyIGRzID0gXy5tYXAobmV3RmlsdGVycywgZnVuY3Rpb24gKGZpbCwgaSkge1xuICAgICAgdmFyIGV4aXN0aW5nID0gc2VydmljZS5maWx0ZXJzW2ldXG4gICAgICAgIC8vIEZpbHRlcnMgYXJlIHRoZSBzYW1lLCBzbyBubyBjaGFuZ2UgaXMgbmVlZGVkIG9uIHRoaXMgY29sdW1uXG4gICAgICBpZiAoZmlsID09PSBleGlzdGluZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHZhciBjb2x1bW5cbiAgICAgICAgLy8gUmV0cmlldmUgY29tcGxleCBjb2x1bW5zIGJ5IGRlY29kaW5nIHRoZSBjb2x1bW4ga2V5IGFzIGpzb25cbiAgICAgIGlmIChpLmNoYXJBdCgwKSA9PT0gJ1snKSB7XG4gICAgICAgIGNvbHVtbiA9IHNlcnZpY2UuY29sdW1uLmZpbmQoSlNPTi5wYXJzZShpKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb2x1bW4gbm9ybWFsbHlcbiAgICAgICAgY29sdW1uID0gc2VydmljZS5jb2x1bW4uZmluZChpKVxuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGluZyBhIGZpbHRlciB2YWx1ZSBpcyBhIGJpdCBkaWZmZXJlbnQgZnJvbSByZXBsYWNpbmcgdGhlbVxuICAgICAgaWYgKGZpbCAmJiBleGlzdGluZyAmJiAhZmlsLnJlcGxhY2UpIHtcbiAgICAgICAgbmV3RmlsdGVyc1tpXSA9IGZpbCA9IHRvZ2dsZUZpbHRlcnMoZmlsLCBleGlzdGluZylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gZmlsdGVyLCByZW1vdmUgZXZlcnl0aGluZyBmcm9tIHRoZSBkaW1lbnNpb25cbiAgICAgIGlmICghZmlsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29sdW1uLmRpbWVuc2lvbi5maWx0ZXJBbGwoKSlcbiAgICAgIH1cbiAgICAgIGlmIChmaWwudHlwZSA9PT0gJ2V4YWN0Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uZmlsdGVyRXhhY3QoZmlsLnZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGlmIChmaWwudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uZmlsdGVyUmFuZ2UoZmlsLnZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGlmIChmaWwudHlwZSA9PT0gJ2luY2x1c2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmZpbHRlckZ1bmN0aW9uKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbC52YWx1ZS5pbmRleE9mKGQpID4gLTFcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBpZiAoZmlsLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmZpbHRlckZ1bmN0aW9uKGZpbC5mdW5jdGlvbikpXG4gICAgICB9XG4gICAgICAvLyBCeSBkZWZhdWx0IGlmIHNvbWV0aGluZyBjcmFwcyB1cCwganVzdCByZW1vdmUgYWxsIGZpbHRlcnNcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29sdW1uLmRpbWVuc2lvbi5maWx0ZXJBbGwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGRzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTYXZlIHRoZSBuZXcgZmlsdGVycyBzYXRhdGVcbiAgICAgICAgc2VydmljZS5maWx0ZXJzID0gbmV3RmlsdGVyc1xuXG4gICAgICAgIC8vIFBsdWNrIGFuZCByZW1vdmUgZmFsc2V5IGZpbHRlcnMgZnJvbSB0aGUgbWl4XG4gICAgICAgIHZhciB0cnlSZW1vdmFsID0gW11cbiAgICAgICAgXy5mb3JFYWNoKHNlcnZpY2UuZmlsdGVycywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgIHRyeVJlbW92YWwucHVzaCh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB2YWw6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5maWx0ZXJzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gSWYgYW55IG9mIHRob3NlIGZpbHRlcnMgYXJlIHRoZSBsYXN0IGRlcGVuZGVuY3kgZm9yIHRoZSBjb2x1bW4sIHRoZW4gcmVtb3ZlIHRoZSBjb2x1bW5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRyeVJlbW92YWwsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIGNvbHVtbiA9IHNlcnZpY2UuY29sdW1uLmZpbmQoKHYua2V5LmNoYXJBdCgwKSA9PT0gJ1snKSA/IEpTT04ucGFyc2Uodi5rZXkpIDogdi5rZXkpXG4gICAgICAgICAgaWYgKGNvbHVtbi50ZW1wb3JhcnkgJiYgIWNvbHVtbi5keW5hbWljUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZS5jbGVhcihjb2x1bW4ua2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDYWxsIHRoZSBmaWx0ZXJMaXN0ZW5lcnMgYW5kIHdhaXQgZm9yIHRoZWlyIHJldHVyblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAoc2VydmljZS5maWx0ZXJMaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcigpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJzKGZpbCwgZXhpc3RpbmcpIHtcbiAgICAvLyBFeGFjdCBmcm9tIEluY2x1c2l2ZVxuICAgIGlmIChmaWwudHlwZSA9PT0gJ2V4YWN0JyAmJiBleGlzdGluZy50eXBlID09PSAnaW5jbHVzaXZlJykge1xuICAgICAgZmlsLnZhbHVlID0gXy54b3IoW2ZpbC52YWx1ZV0sIGV4aXN0aW5nLnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZmlsLnR5cGUgPT09ICdpbmNsdXNpdmUnICYmIGV4aXN0aW5nLnR5cGUgPT09ICdleGFjdCcpIHsgLy8gSW5jbHVzaXZlIGZyb20gRXhhY3RcbiAgICAgIGZpbC52YWx1ZSA9IF8ueG9yKGZpbC52YWx1ZSwgW2V4aXN0aW5nLnZhbHVlXSlcbiAgICB9IGVsc2UgaWYgKGZpbC50eXBlID09PSAnaW5jbHVzaXZlJyAmJiBleGlzdGluZy50eXBlID09PSAnaW5jbHVzaXZlJykgeyAvLyBJbmNsdXNpdmUgLyBJbmNsdXNpdmUgTWVyZ2VcbiAgICAgIGZpbC52YWx1ZSA9IF8ueG9yKGZpbC52YWx1ZSwgZXhpc3RpbmcudmFsdWUpXG4gICAgfSBlbHNlIGlmIChmaWwudHlwZSA9PT0gJ2V4YWN0JyAmJiBleGlzdGluZy50eXBlID09PSAnZXhhY3QnKSB7IC8vIEV4YWN0IC8gRXhhY3RcbiAgICAgIC8vIElmIHRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lLCByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuICAgICAgaWYgKGZpbC52YWx1ZSA9PT0gZXhpc3RpbmcudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBUaGV5IHRoZXkgYXJlIGRpZmZlcmVudCwgbWFrZSBhbiBhcnJheVxuICAgICAgZmlsLnZhbHVlID0gW2ZpbC52YWx1ZSwgZXhpc3RpbmcudmFsdWVdXG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBuZXcgdHlwZSBiYXNlZCBvbiB0aGUgbWVyZ2VkIHZhbHVlc1xuICAgIGlmICghZmlsLnZhbHVlLmxlbmd0aCkge1xuICAgICAgZmlsID0gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGZpbC52YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZpbC50eXBlID0gJ2V4YWN0J1xuICAgICAgZmlsLnZhbHVlID0gZmlsLnZhbHVlWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbC50eXBlID0gJ2luY2x1c2l2ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsXG4gIH1cblxuICBmdW5jdGlvbiBzY2FuRm9yRHluYW1pY0ZpbHRlcnMocXVlcnkpIHtcbiAgICAvLyBIZXJlIHdlIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IHJlbGF0aXZlIHJlZmVyZW5jZXMgdG8gdGhlIHJhdyBkYXRhXG4gICAgLy8gYmVpbmcgdXNlZCBpbiB0aGUgZmlsdGVyLiBJZiBzbywgd2UgbmVlZCB0byBidWlsZCB0aG9zZSBkaW1lbnNpb25zIGFuZCBrZWVwXG4gICAgLy8gdGhlbSB1cGRhdGVkIHNvIHRoZSBmaWx0ZXJzIGNhbiBiZSByZWJ1aWx0IGlmIG5lZWRlZFxuICAgIC8vIFRoZSBzdXBwb3J0ZWQga2V5cyByaWdodCBub3cgYXJlOiAkY29sdW1uLCAkZGF0YVxuICAgIHZhciBjb2x1bW5zID0gW11cbiAgICB3YWxrKHF1ZXJ5LmZpbHRlcilcbiAgICByZXR1cm4gY29sdW1uc1xuXG4gICAgZnVuY3Rpb24gd2FsayhvYmopIHtcbiAgICAgIF8uZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAvLyBmaW5kIHRoZSBkYXRhIHJlZmVyZW5jZXMsIGlmIGFueVxuICAgICAgICB2YXIgcmVmID0gZmluZERhdGFSZWZlcmVuY2VzKHZhbCwga2V5KVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgY29sdW1ucy5wdXNoKHJlZilcbiAgICAgICAgfVxuICAgICAgICAgIC8vIGlmIGl0J3MgYSBzdHJpbmdcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcodmFsKSkge1xuICAgICAgICAgIHJlZiA9IGZpbmREYXRhUmVmZXJlbmNlcyhudWxsLCB2YWwpXG4gICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQncyBhbm90aGVyIG9iamVjdCwga2VlcCBsb29raW5nXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICB3YWxrKHZhbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRGF0YVJlZmVyZW5jZXModmFsLCBrZXkpIHtcbiAgICAvLyBsb29rIGZvciB0aGUgJGRhdGEgc3RyaW5nIGFzIGEgdmFsdWVcbiAgICBpZiAoa2V5ID09PSAnJGRhdGEnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIGxvb2sgZm9yIHRoZSAkY29sdW1uIGtleSBhbmQgaXQncyB2YWx1ZSBhcyBhIHN0cmluZ1xuICAgIGlmIChrZXkgJiYga2V5ID09PSAnJGNvbHVtbicpIHtcbiAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfVxuICAgICAgY29uc29sZS53YXJuKCdUaGUgdmFsdWUgZm9yIGZpbHRlciBcIiRjb2x1bW5cIiBtdXN0IGJlIGEgdmFsaWQgY29sdW1uIGtleScsIHZhbClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihvYmosIGlzQWdncmVnYXRpb24pIHtcbiAgICB2YXIgc3ViR2V0dGVyc1xuXG4gICAgLy8gRGV0ZWN0IHJhdyAkZGF0YSByZWZlcmVuY2VcbiAgICBpZiAoXy5pc1N0cmluZyhvYmopKSB7XG4gICAgICB2YXIgZGF0YVJlZiA9IGZpbmREYXRhUmVmZXJlbmNlcyhudWxsLCBvYmopXG4gICAgICBpZiAoZGF0YVJlZikge1xuICAgICAgICB2YXIgZGF0YSA9IHNlcnZpY2UuY2YuYWxsKClcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNTdHJpbmcob2JqKSB8fCBfLmlzTnVtYmVyKG9iaikgfHwgXy5pc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zLiRlcShkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGFuIGFycmF5LCByZWN1cnNlIGludG8gZWFjaCBpdGVtIGFuZCByZXR1cm4gYXMgYSBtYXBcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHtcbiAgICAgIHN1YkdldHRlcnMgPSBfLm1hcChvYmosIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBtYWtlRnVuY3Rpb24obywgaXNBZ2dyZWdhdGlvbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHN1YkdldHRlcnMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIHMoZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBvYmplY3QsIHJldHVybiBhIHJlY3Vyc2lvbiBmdW5jdGlvbiB0aGF0IGl0c2VsZiwgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiBhbGwgb2YgdGhlIG9iamVjdCBrZXlzXG4gICAgaWYgKF8uaXNPYmplY3Qob2JqKSkge1xuICAgICAgc3ViR2V0dGVycyA9IF8ubWFwKG9iaiwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgIC8vIEdldCB0aGUgY2hpbGRcbiAgICAgICAgdmFyIGdldFN1YiA9IG1ha2VGdW5jdGlvbih2YWwsIGlzQWdncmVnYXRpb24pXG5cbiAgICAgICAgLy8gRGV0ZWN0IHJhdyAkY29sdW1uIHJlZmVyZW5jZXNcbiAgICAgICAgdmFyIGRhdGFSZWYgPSBmaW5kRGF0YVJlZmVyZW5jZXModmFsLCBrZXkpXG4gICAgICAgIGlmIChkYXRhUmVmKSB7XG4gICAgICAgICAgdmFyIGNvbHVtbiA9IHNlcnZpY2UuY29sdW1uLmZpbmQoZGF0YVJlZilcbiAgICAgICAgICB2YXIgZGF0YSA9IGNvbHVtbi52YWx1ZXNcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBleHByZXNzaW9uLCBwYXNzIHRoZSBwYXJlbnRWYWx1ZSBhbmQgdGhlIHN1YkdldHRlclxuICAgICAgICBpZiAoZXhwcmVzc2lvbnNba2V5XSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zW2tleV0oZCwgZ2V0U3ViKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhZ2dyZWdhdG9yT2JqID0gYWdncmVnYXRpb24ucGFyc2VBZ2dyZWdhdG9yUGFyYW1zKGtleSlcbiAgICAgICAgaWYgKGFnZ3JlZ2F0b3JPYmopIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbnkgZnVydGhlciBvcGVyYXRpb25zIGFyZSBmb3IgYWdncmVnYXRpb25zXG4gICAgICAgICAgLy8gYW5kIG5vdCBmaWx0ZXJzXG4gICAgICAgICAgaXNBZ2dyZWdhdGlvbiA9IHRydWVcbiAgICAgICAgICAgIC8vIGhlcmUgd2UgcGFzcyB0cnVlIHRvIG1ha2VGdW5jdGlvbiB3aGljaCBkZW5vdGVzIHRoYXRcbiAgICAgICAgICAgIC8vIGFuIGFnZ3JlZ2F0aW5vIGNoYWluIGhhcyBzdGFydGVkIGFuZCB0byBzdG9wIHVzaW5nICRBTkRcbiAgICAgICAgICBnZXRTdWIgPSBtYWtlRnVuY3Rpb24odmFsLCBpc0FnZ3JlZ2F0aW9uKVxuICAgICAgICAgICAgLy8gSWYgaXQncyBhbiBhZ2dyZWdhdGlvbiBvYmplY3QsIGJlIHN1cmUgdG8gcGFzcyBpbiB0aGUgY2hpbGRyZW4sIGFuZCB0aGVuIGFueSBhZGRpdGlvbmFsIHBhcmFtcyBwYXNzZWQgaW50byB0aGUgYWdncmVnYXRpb24gc3RyaW5nXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhZ2dyZWdhdG9yT2JqLmFnZ3JlZ2F0b3IuYXBwbHkobnVsbCwgW2dldFN1YigpXS5jb25jYXQoYWdncmVnYXRvck9iai5wYXJhbXMpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0IG11c3QgYmUgYSBzdHJpbmcgdGhlbi4gUGx1Y2sgdGhhdCBzdHJpbmcga2V5IGZyb20gcGFyZW50LCBhbmQgcGFzcyBpdCBhcyB0aGUgbmV3IHZhbHVlIHRvIHRoZSBzdWJHZXR0ZXJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZCA9IGRba2V5XVxuICAgICAgICAgIHJldHVybiBnZXRTdWIoZCwgZ2V0U3ViKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBBbGwgb2JqZWN0IGV4cHJlc3Npb25zIGFyZSBiYXNpY2FsbHkgQU5EJ3NcbiAgICAgIC8vIFJldHVybiBBTkQgd2l0aCBhIG1hcCBvZiB0aGUgc3ViR2V0dGVyc1xuICAgICAgaWYgKGlzQWdncmVnYXRpb24pIHtcbiAgICAgICAgaWYgKHN1YkdldHRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ViR2V0dGVyc1swXShkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gXy5tYXAoc3ViR2V0dGVycywgZnVuY3Rpb24gKGdldFN1Yikge1xuICAgICAgICAgICAgcmV0dXJuIGdldFN1YihkKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnMuJGFuZChkLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBfLm1hcChzdWJHZXR0ZXJzLCBmdW5jdGlvbiAoZ2V0U3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U3ViKGQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnbm8gZXhwcmVzc2lvbiBmb3VuZCBmb3IgJywgb2JqKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvZmlsdGVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5mdW5jdGlvbiBoZWFwX2J5KGYpIHtcblxuICAvLyBCdWlsZHMgYSBiaW5hcnkgaGVhcCB3aXRoaW4gdGhlIHNwZWNpZmllZCBhcnJheSBhW2xvOmhpXS4gVGhlIGhlYXAgaGFzIHRoZVxuICAvLyBwcm9wZXJ0eSBzdWNoIHRoYXQgdGhlIHBhcmVudCBhW2xvK2ldIGlzIGFsd2F5cyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gaXRzXG4gIC8vIHR3byBjaGlsZHJlbjogYVtsbysyKmkrMV0gYW5kIGFbbG8rMippKzJdLlxuICBmdW5jdGlvbiBoZWFwKGEsIGxvLCBoaSkge1xuICAgIHZhciBuID0gaGkgLSBsbyxcbiAgICAgICAgaSA9IChuID4+PiAxKSArIDE7XG4gICAgd2hpbGUgKC0taSA+IDApIHNpZnQoYSwgaSwgbiwgbG8pO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgLy8gU29ydHMgdGhlIHNwZWNpZmllZCBhcnJheSBhW2xvOmhpXSBpbiBkZXNjZW5kaW5nIG9yZGVyLCBhc3N1bWluZyBpdCBpc1xuICAvLyBhbHJlYWR5IGEgaGVhcC5cbiAgZnVuY3Rpb24gc29ydChhLCBsbywgaGkpIHtcbiAgICB2YXIgbiA9IGhpIC0gbG8sXG4gICAgICAgIHQ7XG4gICAgd2hpbGUgKC0tbiA+IDApIHQgPSBhW2xvXSwgYVtsb10gPSBhW2xvICsgbl0sIGFbbG8gKyBuXSA9IHQsIHNpZnQoYSwgMSwgbiwgbG8pO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgLy8gU2lmdHMgdGhlIGVsZW1lbnQgYVtsbytpLTFdIGRvd24gdGhlIGhlYXAsIHdoZXJlIHRoZSBoZWFwIGlzIHRoZSBjb250aWd1b3VzXG4gIC8vIHNsaWNlIG9mIGFycmF5IGFbbG86bG8rbl0uIFRoaXMgbWV0aG9kIGNhbiBhbHNvIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBoZWFwXG4gIC8vIGluY3JlbWVudGFsbHksIHdpdGhvdXQgaW5jdXJyaW5nIHRoZSBmdWxsIGNvc3Qgb2YgcmVjb25zdHJ1Y3RpbmcgdGhlIGhlYXAuXG4gIGZ1bmN0aW9uIHNpZnQoYSwgaSwgbiwgbG8pIHtcbiAgICB2YXIgZCA9IGFbLS1sbyArIGldLFxuICAgICAgICB4ID0gZihkKSxcbiAgICAgICAgY2hpbGQ7XG4gICAgd2hpbGUgKChjaGlsZCA9IGkgPDwgMSkgPD0gbikge1xuICAgICAgaWYgKGNoaWxkIDwgbiAmJiBmKGFbbG8gKyBjaGlsZF0pID4gZihhW2xvICsgY2hpbGQgKyAxXSkpIGNoaWxkKys7XG4gICAgICBpZiAoeCA8PSBmKGFbbG8gKyBjaGlsZF0pKSBicmVhaztcbiAgICAgIGFbbG8gKyBpXSA9IGFbbG8gKyBjaGlsZF07XG4gICAgICBpID0gY2hpbGQ7XG4gICAgfVxuICAgIGFbbG8gKyBpXSA9IGQ7XG4gIH1cblxuICBoZWFwLnNvcnQgPSBzb3J0O1xuICByZXR1cm4gaGVhcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWFwX2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcbm1vZHVsZS5leHBvcnRzLmJ5ID0gaGVhcF9ieTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvaGVhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5mdW5jdGlvbiBpbnNlcnRpb25zb3J0X2J5KGYpIHtcblxuICBmdW5jdGlvbiBpbnNlcnRpb25zb3J0KGEsIGxvLCBoaSkge1xuICAgIGZvciAodmFyIGkgPSBsbyArIDE7IGkgPCBoaTsgKytpKSB7XG4gICAgICBmb3IgKHZhciBqID0gaSwgdCA9IGFbaV0sIHggPSBmKHQpOyBqID4gbG8gJiYgZihhW2ogLSAxXSkgPiB4OyAtLWopIHtcbiAgICAgICAgYVtqXSA9IGFbaiAtIDFdO1xuICAgICAgfVxuICAgICAgYVtqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgcmV0dXJuIGluc2VydGlvbnNvcnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0aW9uc29ydF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5tb2R1bGUuZXhwb3J0cy5ieSA9IGluc2VydGlvbnNvcnRfYnk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2luc2VydGlvbnNvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19wYXJhbWV0ZXJzID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0b3JkZXI6IGZhbHNlLFxuXHRcdGF2ZzogZmFsc2UsXG5cdFx0Y291bnQ6IGZhbHNlLFxuXHRcdHN1bTogZmFsc2UsXG5cdFx0ZXhjZXB0aW9uQWNjZXNzb3I6IGZhbHNlLFxuXHRcdGV4Y2VwdGlvbkNvdW50OiBmYWxzZSxcblx0XHRleGNlcHRpb25TdW06IGZhbHNlLFxuXHRcdGZpbHRlcjogZmFsc2UsXG5cdFx0dmFsdWVMaXN0OiBmYWxzZSxcblx0XHRtZWRpYW46IGZhbHNlLFxuXHRcdGhpc3RvZ3JhbVZhbHVlOiBmYWxzZSxcblx0XHRtaW46IGZhbHNlLFxuXHRcdG1heDogZmFsc2UsXG5cdFx0aGlzdG9ncmFtVGhyZXNob2xkczogZmFsc2UsXG5cdFx0c3RkOiBmYWxzZSxcblx0XHRzdW1PZlNxdWFyZXM6IGZhbHNlLFxuXHRcdHZhbHVlczogZmFsc2UsXG5cdFx0bmVzdEtleXM6IGZhbHNlLFxuXHRcdGFsaWFzS2V5czogZmFsc2UsXG5cdFx0YWxpYXNQcm9wS2V5czogZmFsc2UsXG5cdFx0Z3JvdXBBbGw6IGZhbHNlLFxuXHRcdGRhdGFMaXN0OiBmYWxzZSxcblx0XHRjdXN0b206IGZhbHNlXG5cdH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX3BhcmFtZXRlcnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvcGFyYW1ldGVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiKGZ1bmN0aW9uKGV4cG9ydHMpe1xuY3Jvc3NmaWx0ZXIudmVyc2lvbiA9IFwiMS4zLjEyXCI7XG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9pZGVudGl0eShkKSB7XG4gIHJldHVybiBkO1xufVxuY3Jvc3NmaWx0ZXIucGVybXV0ZSA9IHBlcm11dGU7XG5cbmZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gaW5kZXgubGVuZ3RoLCBjb3B5ID0gbmV3IEFycmF5KG4pOyBpIDwgbjsgKytpKSB7XG4gICAgY29weVtpXSA9IGFycmF5W2luZGV4W2ldXTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cbnZhciBiaXNlY3QgPSBjcm9zc2ZpbHRlci5iaXNlY3QgPSBiaXNlY3RfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xuXG5iaXNlY3QuYnkgPSBiaXNlY3RfYnk7XG5cbmZ1bmN0aW9uIGJpc2VjdF9ieShmKSB7XG5cbiAgLy8gTG9jYXRlIHRoZSBpbnNlcnRpb24gcG9pbnQgZm9yIHggaW4gYSB0byBtYWludGFpbiBzb3J0ZWQgb3JkZXIuIFRoZVxuICAvLyBhcmd1bWVudHMgbG8gYW5kIGhpIG1heSBiZSB1c2VkIHRvIHNwZWNpZnkgYSBzdWJzZXQgb2YgdGhlIGFycmF5IHdoaWNoXG4gIC8vIHNob3VsZCBiZSBjb25zaWRlcmVkOyBieSBkZWZhdWx0IHRoZSBlbnRpcmUgYXJyYXkgaXMgdXNlZC4gSWYgeCBpcyBhbHJlYWR5XG4gIC8vIHByZXNlbnQgaW4gYSwgdGhlIGluc2VydGlvbiBwb2ludCB3aWxsIGJlIGJlZm9yZSAodG8gdGhlIGxlZnQgb2YpIGFueVxuICAvLyBleGlzdGluZyBlbnRyaWVzLiBUaGUgcmV0dXJuIHZhbHVlIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdGhlIGZpcnN0XG4gIC8vIGFyZ3VtZW50IHRvIGBhcnJheS5zcGxpY2VgIGFzc3VtaW5nIHRoYXQgYSBpcyBhbHJlYWR5IHNvcnRlZC5cbiAgLy9cbiAgLy8gVGhlIHJldHVybmVkIGluc2VydGlvbiBwb2ludCBpIHBhcnRpdGlvbnMgdGhlIGFycmF5IGEgaW50byB0d28gaGFsdmVzIHNvXG4gIC8vIHRoYXQgYWxsIHYgPCB4IGZvciB2IGluIGFbbG86aV0gZm9yIHRoZSBsZWZ0IHNpZGUgYW5kIGFsbCB2ID49IHggZm9yIHYgaW5cbiAgLy8gYVtpOmhpXSBmb3IgdGhlIHJpZ2h0IHNpZGUuXG4gIGZ1bmN0aW9uIGJpc2VjdExlZnQoYSwgeCwgbG8sIGhpKSB7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgaWYgKGYoYVttaWRdKSA8IHgpIGxvID0gbWlkICsgMTtcbiAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gYmlzZWN0TGVmdCwgYnV0IHJldHVybnMgYW4gaW5zZXJ0aW9uIHBvaW50IHdoaWNoIGNvbWVzIGFmdGVyICh0b1xuICAvLyB0aGUgcmlnaHQgb2YpIGFueSBleGlzdGluZyBlbnRyaWVzIG9mIHggaW4gYS5cbiAgLy9cbiAgLy8gVGhlIHJldHVybmVkIGluc2VydGlvbiBwb2ludCBpIHBhcnRpdGlvbnMgdGhlIGFycmF5IGludG8gdHdvIGhhbHZlcyBzbyB0aGF0XG4gIC8vIGFsbCB2IDw9IHggZm9yIHYgaW4gYVtsbzppXSBmb3IgdGhlIGxlZnQgc2lkZSBhbmQgYWxsIHYgPiB4IGZvciB2IGluXG4gIC8vIGFbaTpoaV0gZm9yIHRoZSByaWdodCBzaWRlLlxuICBmdW5jdGlvbiBiaXNlY3RSaWdodChhLCB4LCBsbywgaGkpIHtcbiAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICBpZiAoeCA8IGYoYVttaWRdKSkgaGkgPSBtaWQ7XG4gICAgICBlbHNlIGxvID0gbWlkICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgYmlzZWN0UmlnaHQucmlnaHQgPSBiaXNlY3RSaWdodDtcbiAgYmlzZWN0UmlnaHQubGVmdCA9IGJpc2VjdExlZnQ7XG4gIHJldHVybiBiaXNlY3RSaWdodDtcbn1cbnZhciBoZWFwID0gY3Jvc3NmaWx0ZXIuaGVhcCA9IGhlYXBfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xuXG5oZWFwLmJ5ID0gaGVhcF9ieTtcblxuZnVuY3Rpb24gaGVhcF9ieShmKSB7XG5cbiAgLy8gQnVpbGRzIGEgYmluYXJ5IGhlYXAgd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgYVtsbzpoaV0uIFRoZSBoZWFwIGhhcyB0aGVcbiAgLy8gcHJvcGVydHkgc3VjaCB0aGF0IHRoZSBwYXJlbnQgYVtsbytpXSBpcyBhbHdheXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGl0c1xuICAvLyB0d28gY2hpbGRyZW46IGFbbG8rMippKzFdIGFuZCBhW2xvKzIqaSsyXS5cbiAgZnVuY3Rpb24gaGVhcChhLCBsbywgaGkpIHtcbiAgICB2YXIgbiA9IGhpIC0gbG8sXG4gICAgICAgIGkgPSAobiA+Pj4gMSkgKyAxO1xuICAgIHdoaWxlICgtLWkgPiAwKSBzaWZ0KGEsIGksIG4sIGxvKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIC8vIFNvcnRzIHRoZSBzcGVjaWZpZWQgYXJyYXkgYVtsbzpoaV0gaW4gZGVzY2VuZGluZyBvcmRlciwgYXNzdW1pbmcgaXQgaXNcbiAgLy8gYWxyZWFkeSBhIGhlYXAuXG4gIGZ1bmN0aW9uIHNvcnQoYSwgbG8sIGhpKSB7XG4gICAgdmFyIG4gPSBoaSAtIGxvLFxuICAgICAgICB0O1xuICAgIHdoaWxlICgtLW4gPiAwKSB0ID0gYVtsb10sIGFbbG9dID0gYVtsbyArIG5dLCBhW2xvICsgbl0gPSB0LCBzaWZ0KGEsIDEsIG4sIGxvKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIC8vIFNpZnRzIHRoZSBlbGVtZW50IGFbbG8raS0xXSBkb3duIHRoZSBoZWFwLCB3aGVyZSB0aGUgaGVhcCBpcyB0aGUgY29udGlndW91c1xuICAvLyBzbGljZSBvZiBhcnJheSBhW2xvOmxvK25dLiBUaGlzIG1ldGhvZCBjYW4gYWxzbyBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgaGVhcFxuICAvLyBpbmNyZW1lbnRhbGx5LCB3aXRob3V0IGluY3VycmluZyB0aGUgZnVsbCBjb3N0IG9mIHJlY29uc3RydWN0aW5nIHRoZSBoZWFwLlxuICBmdW5jdGlvbiBzaWZ0KGEsIGksIG4sIGxvKSB7XG4gICAgdmFyIGQgPSBhWy0tbG8gKyBpXSxcbiAgICAgICAgeCA9IGYoZCksXG4gICAgICAgIGNoaWxkO1xuICAgIHdoaWxlICgoY2hpbGQgPSBpIDw8IDEpIDw9IG4pIHtcbiAgICAgIGlmIChjaGlsZCA8IG4gJiYgZihhW2xvICsgY2hpbGRdKSA+IGYoYVtsbyArIGNoaWxkICsgMV0pKSBjaGlsZCsrO1xuICAgICAgaWYgKHggPD0gZihhW2xvICsgY2hpbGRdKSkgYnJlYWs7XG4gICAgICBhW2xvICsgaV0gPSBhW2xvICsgY2hpbGRdO1xuICAgICAgaSA9IGNoaWxkO1xuICAgIH1cbiAgICBhW2xvICsgaV0gPSBkO1xuICB9XG5cbiAgaGVhcC5zb3J0ID0gc29ydDtcbiAgcmV0dXJuIGhlYXA7XG59XG52YXIgaGVhcHNlbGVjdCA9IGNyb3NzZmlsdGVyLmhlYXBzZWxlY3QgPSBoZWFwc2VsZWN0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcblxuaGVhcHNlbGVjdC5ieSA9IGhlYXBzZWxlY3RfYnk7XG5cbmZ1bmN0aW9uIGhlYXBzZWxlY3RfYnkoZikge1xuICB2YXIgaGVhcCA9IGhlYXBfYnkoZik7XG5cbiAgLy8gUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB0b3AgayBlbGVtZW50cyBpbiB0aGUgYXJyYXkgYVtsbzpoaV0uXG4gIC8vIFRoZSByZXR1cm5lZCBhcnJheSBpcyBub3Qgc29ydGVkLCBidXQgbWFpbnRhaW5zIHRoZSBoZWFwIHByb3BlcnR5LiBJZiBrIGlzXG4gIC8vIGdyZWF0ZXIgdGhhbiBoaSAtIGxvLCB0aGVuIGZld2VyIHRoYW4gayBlbGVtZW50cyB3aWxsIGJlIHJldHVybmVkLiBUaGVcbiAgLy8gb3JkZXIgb2YgZWxlbWVudHMgaW4gYSBpcyB1bmNoYW5nZWQgYnkgdGhpcyBvcGVyYXRpb24uXG4gIGZ1bmN0aW9uIGhlYXBzZWxlY3QoYSwgbG8sIGhpLCBrKSB7XG4gICAgdmFyIHF1ZXVlID0gbmV3IEFycmF5KGsgPSBNYXRoLm1pbihoaSAtIGxvLCBrKSksXG4gICAgICAgIG1pbixcbiAgICAgICAgaSxcbiAgICAgICAgeCxcbiAgICAgICAgZDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrOyArK2kpIHF1ZXVlW2ldID0gYVtsbysrXTtcbiAgICBoZWFwKHF1ZXVlLCAwLCBrKTtcblxuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBtaW4gPSBmKHF1ZXVlWzBdKTtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHggPSBmKGQgPSBhW2xvXSkgPiBtaW4pIHtcbiAgICAgICAgICBxdWV1ZVswXSA9IGQ7XG4gICAgICAgICAgbWluID0gZihoZWFwKHF1ZXVlLCAwLCBrKVswXSk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKCsrbG8gPCBoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXVlO1xuICB9XG5cbiAgcmV0dXJuIGhlYXBzZWxlY3Q7XG59XG52YXIgaW5zZXJ0aW9uc29ydCA9IGNyb3NzZmlsdGVyLmluc2VydGlvbnNvcnQgPSBpbnNlcnRpb25zb3J0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcblxuaW5zZXJ0aW9uc29ydC5ieSA9IGluc2VydGlvbnNvcnRfYnk7XG5cbmZ1bmN0aW9uIGluc2VydGlvbnNvcnRfYnkoZikge1xuXG4gIGZ1bmN0aW9uIGluc2VydGlvbnNvcnQoYSwgbG8sIGhpKSB7XG4gICAgZm9yICh2YXIgaSA9IGxvICsgMTsgaSA8IGhpOyArK2kpIHtcbiAgICAgIGZvciAodmFyIGogPSBpLCB0ID0gYVtpXSwgeCA9IGYodCk7IGogPiBsbyAmJiBmKGFbaiAtIDFdKSA+IHg7IC0taikge1xuICAgICAgICBhW2pdID0gYVtqIC0gMV07XG4gICAgICB9XG4gICAgICBhW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICByZXR1cm4gaW5zZXJ0aW9uc29ydDtcbn1cbi8vIEFsZ29yaXRobSBkZXNpZ25lZCBieSBWbGFkaW1pciBZYXJvc2xhdnNraXkuXG4vLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiB0aGUgRGFydCBwcm9qZWN0OyBzZWUgbGliL2RhcnQvTElDRU5TRSBmb3IgZGV0YWlscy5cblxudmFyIHF1aWNrc29ydCA9IGNyb3NzZmlsdGVyLnF1aWNrc29ydCA9IHF1aWNrc29ydF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5cbnF1aWNrc29ydC5ieSA9IHF1aWNrc29ydF9ieTtcblxuZnVuY3Rpb24gcXVpY2tzb3J0X2J5KGYpIHtcbiAgdmFyIGluc2VydGlvbnNvcnQgPSBpbnNlcnRpb25zb3J0X2J5KGYpO1xuXG4gIGZ1bmN0aW9uIHNvcnQoYSwgbG8sIGhpKSB7XG4gICAgcmV0dXJuIChoaSAtIGxvIDwgcXVpY2tzb3J0X3NpemVUaHJlc2hvbGRcbiAgICAgICAgPyBpbnNlcnRpb25zb3J0XG4gICAgICAgIDogcXVpY2tzb3J0KShhLCBsbywgaGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tzb3J0KGEsIGxvLCBoaSkge1xuICAgIC8vIENvbXB1dGUgdGhlIHR3byBwaXZvdHMgYnkgbG9va2luZyBhdCA1IGVsZW1lbnRzLlxuICAgIHZhciBzaXh0aCA9IChoaSAtIGxvKSAvIDYgfCAwLFxuICAgICAgICBpMSA9IGxvICsgc2l4dGgsXG4gICAgICAgIGk1ID0gaGkgLSAxIC0gc2l4dGgsXG4gICAgICAgIGkzID0gbG8gKyBoaSAtIDEgPj4gMSwgIC8vIFRoZSBtaWRwb2ludC5cbiAgICAgICAgaTIgPSBpMyAtIHNpeHRoLFxuICAgICAgICBpNCA9IGkzICsgc2l4dGg7XG5cbiAgICB2YXIgZTEgPSBhW2kxXSwgeDEgPSBmKGUxKSxcbiAgICAgICAgZTIgPSBhW2kyXSwgeDIgPSBmKGUyKSxcbiAgICAgICAgZTMgPSBhW2kzXSwgeDMgPSBmKGUzKSxcbiAgICAgICAgZTQgPSBhW2k0XSwgeDQgPSBmKGU0KSxcbiAgICAgICAgZTUgPSBhW2k1XSwgeDUgPSBmKGU1KTtcblxuICAgIHZhciB0O1xuXG4gICAgLy8gU29ydCB0aGUgc2VsZWN0ZWQgNSBlbGVtZW50cyB1c2luZyBhIHNvcnRpbmcgbmV0d29yay5cbiAgICBpZiAoeDEgPiB4MikgdCA9IGUxLCBlMSA9IGUyLCBlMiA9IHQsIHQgPSB4MSwgeDEgPSB4MiwgeDIgPSB0O1xuICAgIGlmICh4NCA+IHg1KSB0ID0gZTQsIGU0ID0gZTUsIGU1ID0gdCwgdCA9IHg0LCB4NCA9IHg1LCB4NSA9IHQ7XG4gICAgaWYgKHgxID4geDMpIHQgPSBlMSwgZTEgPSBlMywgZTMgPSB0LCB0ID0geDEsIHgxID0geDMsIHgzID0gdDtcbiAgICBpZiAoeDIgPiB4MykgdCA9IGUyLCBlMiA9IGUzLCBlMyA9IHQsIHQgPSB4MiwgeDIgPSB4MywgeDMgPSB0O1xuICAgIGlmICh4MSA+IHg0KSB0ID0gZTEsIGUxID0gZTQsIGU0ID0gdCwgdCA9IHgxLCB4MSA9IHg0LCB4NCA9IHQ7XG4gICAgaWYgKHgzID4geDQpIHQgPSBlMywgZTMgPSBlNCwgZTQgPSB0LCB0ID0geDMsIHgzID0geDQsIHg0ID0gdDtcbiAgICBpZiAoeDIgPiB4NSkgdCA9IGUyLCBlMiA9IGU1LCBlNSA9IHQsIHQgPSB4MiwgeDIgPSB4NSwgeDUgPSB0O1xuICAgIGlmICh4MiA+IHgzKSB0ID0gZTIsIGUyID0gZTMsIGUzID0gdCwgdCA9IHgyLCB4MiA9IHgzLCB4MyA9IHQ7XG4gICAgaWYgKHg0ID4geDUpIHQgPSBlNCwgZTQgPSBlNSwgZTUgPSB0LCB0ID0geDQsIHg0ID0geDUsIHg1ID0gdDtcblxuICAgIHZhciBwaXZvdDEgPSBlMiwgcGl2b3RWYWx1ZTEgPSB4MixcbiAgICAgICAgcGl2b3QyID0gZTQsIHBpdm90VmFsdWUyID0geDQ7XG5cbiAgICAvLyBlMiBhbmQgZTQgaGF2ZSBiZWVuIHNhdmVkIGluIHRoZSBwaXZvdCB2YXJpYWJsZXMuIFRoZXkgd2lsbCBiZSB3cml0dGVuXG4gICAgLy8gYmFjaywgb25jZSB0aGUgcGFydGl0aW9uaW5nIGlzIGZpbmlzaGVkLlxuICAgIGFbaTFdID0gZTE7XG4gICAgYVtpMl0gPSBhW2xvXTtcbiAgICBhW2kzXSA9IGUzO1xuICAgIGFbaTRdID0gYVtoaSAtIDFdO1xuICAgIGFbaTVdID0gZTU7XG5cbiAgICB2YXIgbGVzcyA9IGxvICsgMSwgICAvLyBGaXJzdCBlbGVtZW50IGluIHRoZSBtaWRkbGUgcGFydGl0aW9uLlxuICAgICAgICBncmVhdCA9IGhpIC0gMjsgIC8vIExhc3QgZWxlbWVudCBpbiB0aGUgbWlkZGxlIHBhcnRpdGlvbi5cblxuICAgIC8vIE5vdGUgdGhhdCBmb3IgdmFsdWUgY29tcGFyaXNvbiwgPCwgPD0sID49IGFuZCA+IGNvZXJjZSB0byBhIHByaW1pdGl2ZSB2aWFcbiAgICAvLyBPYmplY3QucHJvdG90eXBlLnZhbHVlT2Y7ID09IGFuZCA9PT0gZG8gbm90LCBzbyBpbiBvcmRlciB0byBiZSBjb25zaXN0ZW50XG4gICAgLy8gd2l0aCBuYXR1cmFsIG9yZGVyIChzdWNoIGFzIGZvciBEYXRlIG9iamVjdHMpLCB3ZSBtdXN0IGRvIHR3byBjb21wYXJlcy5cbiAgICB2YXIgcGl2b3RzRXF1YWwgPSBwaXZvdFZhbHVlMSA8PSBwaXZvdFZhbHVlMiAmJiBwaXZvdFZhbHVlMSA+PSBwaXZvdFZhbHVlMjtcbiAgICBpZiAocGl2b3RzRXF1YWwpIHtcblxuICAgICAgLy8gRGVnZW5lcmF0ZWQgY2FzZSB3aGVyZSB0aGUgcGFydGl0aW9uaW5nIGJlY29tZXMgYSBkdXRjaCBuYXRpb25hbCBmbGFnXG4gICAgICAvLyBwcm9ibGVtLlxuICAgICAgLy9cbiAgICAgIC8vIFsgfCAgPCBwaXZvdCAgfCA9PSBwaXZvdCB8IHVucGFydGl0aW9uZWQgfCA+IHBpdm90ICB8IF1cbiAgICAgIC8vICBeICAgICAgICAgICAgIF4gICAgICAgICAgXiAgICAgICAgICAgICBeICAgICAgICAgICAgXlxuICAgICAgLy8gbGVmdCAgICAgICAgIGxlc3MgICAgICAgICBrICAgICAgICAgICBncmVhdCAgICAgICAgIHJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYVtsZWZ0XSBhbmQgYVtyaWdodF0gYXJlIHVuZGVmaW5lZCBhbmQgYXJlIGZpbGxlZCBhZnRlciB0aGVcbiAgICAgIC8vIHBhcnRpdGlvbmluZy5cbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxKSBmb3IgeCBpbiBdbGVmdCwgbGVzc1sgOiB4IDwgcGl2b3QuXG4gICAgICAvLyAgIDIpIGZvciB4IGluIFtsZXNzLCBrWyA6IHggPT0gcGl2b3QuXG4gICAgICAvLyAgIDMpIGZvciB4IGluIF1ncmVhdCwgcmlnaHRbIDogeCA+IHBpdm90LlxuICAgICAgZm9yICh2YXIgayA9IGxlc3M7IGsgPD0gZ3JlYXQ7ICsraykge1xuICAgICAgICB2YXIgZWsgPSBhW2tdLCB4ayA9IGYoZWspO1xuICAgICAgICBpZiAoeGsgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgIGlmIChrICE9PSBsZXNzKSB7XG4gICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgIGFbbGVzc10gPSBlaztcbiAgICAgICAgICB9XG4gICAgICAgICAgKytsZXNzO1xuICAgICAgICB9IGVsc2UgaWYgKHhrID4gcGl2b3RWYWx1ZTEpIHtcblxuICAgICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVsZW1lbnQgPD0gcGl2b3QgaW4gdGhlIHJhbmdlIFtrIC0gMSwgZ3JlYXRdIGFuZFxuICAgICAgICAgIC8vIHB1dCBbOmVrOl0gdGhlcmUuIFdlIGtub3cgdGhhdCBzdWNoIGFuIGVsZW1lbnQgbXVzdCBleGlzdDpcbiAgICAgICAgICAvLyBXaGVuIGsgPT0gbGVzcywgdGhlbiBlbDMgKHdoaWNoIGlzIGVxdWFsIHRvIHBpdm90KSBsaWVzIGluIHRoZVxuICAgICAgICAgIC8vIGludGVydmFsLiBPdGhlcndpc2UgYVtrIC0gMV0gPT0gcGl2b3QgYW5kIHRoZSBzZWFyY2ggc3RvcHMgYXQgay0xLlxuICAgICAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGUgbGF0dGVyIGNhc2UgaW52YXJpYW50IDIgd2lsbCBiZSB2aW9sYXRlZCBmb3IgYVxuICAgICAgICAgIC8vIHNob3J0IGFtb3VudCBvZiB0aW1lLiBUaGUgaW52YXJpYW50IHdpbGwgYmUgcmVzdG9yZWQgd2hlbiB0aGVcbiAgICAgICAgICAvLyBwaXZvdHMgYXJlIHB1dCBpbnRvIHRoZWlyIGZpbmFsIHBvc2l0aW9ucy5cbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKTtcbiAgICAgICAgICAgIGlmIChncmVhdFZhbHVlID4gcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBsb2NhdGlvbiBpbiB0aGUgd2hpbGUtbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gaXMgc3RhcnRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdyZWF0VmFsdWUgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgICAgICAvLyBUcmlwbGUgZXhjaGFuZ2UuXG4gICAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgICBhW2xlc3MrK10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFba10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAvLyBOb3RlOiBpZiBncmVhdCA8IGsgdGhlbiB3ZSB3aWxsIGV4aXQgdGhlIG91dGVyIGxvb3AgYW5kIGZpeFxuICAgICAgICAgICAgICAvLyBpbnZhcmlhbnQgMiAod2hpY2ggd2UganVzdCB2aW9sYXRlZCkuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFdlIHBhcnRpdGlvbiB0aGUgbGlzdCBpbnRvIHRocmVlIHBhcnRzOlxuICAgICAgLy8gIDEuIDwgcGl2b3QxXG4gICAgICAvLyAgMi4gPj0gcGl2b3QxICYmIDw9IHBpdm90MlxuICAgICAgLy8gIDMuID4gcGl2b3QyXG4gICAgICAvL1xuICAgICAgLy8gRHVyaW5nIHRoZSBsb29wIHdlIGhhdmU6XG4gICAgICAvLyBbIHwgPCBwaXZvdDEgfCA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyIHwgdW5wYXJ0aXRpb25lZCAgfCA+IHBpdm90MiAgfCBdXG4gICAgICAvLyAgXiAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgICBeICAgICAgICAgICAgIF5cbiAgICAgIC8vIGxlZnQgICAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICAgayAgICAgICAgICAgICAgZ3JlYXQgICAgICAgIHJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYVtsZWZ0XSBhbmQgYVtyaWdodF0gYXJlIHVuZGVmaW5lZCBhbmQgYXJlIGZpbGxlZCBhZnRlciB0aGVcbiAgICAgIC8vIHBhcnRpdGlvbmluZy5cbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxLiBmb3IgeCBpbiBdbGVmdCwgbGVzc1sgOiB4IDwgcGl2b3QxXG4gICAgICAvLyAgIDIuIGZvciB4IGluIFtsZXNzLCBrWyA6IHBpdm90MSA8PSB4ICYmIHggPD0gcGl2b3QyXG4gICAgICAvLyAgIDMuIGZvciB4IGluIF1ncmVhdCwgcmlnaHRbIDogeCA+IHBpdm90MlxuICAgICAgZm9yICh2YXIgayA9IGxlc3M7IGsgPD0gZ3JlYXQ7IGsrKykge1xuICAgICAgICB2YXIgZWsgPSBhW2tdLCB4ayA9IGYoZWspO1xuICAgICAgICBpZiAoeGsgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgIGlmIChrICE9PSBsZXNzKSB7XG4gICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgIGFbbGVzc10gPSBlaztcbiAgICAgICAgICB9XG4gICAgICAgICAgKytsZXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh4ayA+IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pO1xuICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA+IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXQgPCBrKSBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGxvY2F0aW9uIGluc2lkZSB0aGUgbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiBpcyBzdGFydGVkLlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdIDw9IHBpdm90Mi5cbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUcmlwbGUgZXhjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgICAgICAgIGFbbGVzcysrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBhW2dyZWF0XSA+PSBwaXZvdDEuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW92ZSBwaXZvdHMgaW50byB0aGVpciBmaW5hbCBwb3NpdGlvbnMuXG4gICAgLy8gV2Ugc2hydW5rIHRoZSBsaXN0IGZyb20gYm90aCBzaWRlcyAoYVtsZWZ0XSBhbmQgYVtyaWdodF0gaGF2ZVxuICAgIC8vIG1lYW5pbmdsZXNzIHZhbHVlcyBpbiB0aGVtKSBhbmQgbm93IHdlIG1vdmUgZWxlbWVudHMgZnJvbSB0aGUgZmlyc3RcbiAgICAvLyBhbmQgdGhpcmQgcGFydGl0aW9uIGludG8gdGhlc2UgbG9jYXRpb25zIHNvIHRoYXQgd2UgY2FuIHN0b3JlIHRoZVxuICAgIC8vIHBpdm90cy5cbiAgICBhW2xvXSA9IGFbbGVzcyAtIDFdO1xuICAgIGFbbGVzcyAtIDFdID0gcGl2b3QxO1xuICAgIGFbaGkgLSAxXSA9IGFbZ3JlYXQgKyAxXTtcbiAgICBhW2dyZWF0ICsgMV0gPSBwaXZvdDI7XG5cbiAgICAvLyBUaGUgbGlzdCBpcyBub3cgcGFydGl0aW9uZWQgaW50byB0aHJlZSBwYXJ0aXRpb25zOlxuICAgIC8vIFsgPCBwaXZvdDEgICB8ID49IHBpdm90MSAmJiA8PSBwaXZvdDIgICB8ICA+IHBpdm90MiAgIF1cbiAgICAvLyAgXiAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgIF5cbiAgICAvLyBsZWZ0ICAgICAgICAgbGVzcyAgICAgICAgICAgICAgICAgICAgIGdyZWF0ICAgICAgICByaWdodFxuXG4gICAgLy8gUmVjdXJzaXZlIGRlc2NlbnQuIChEb24ndCBpbmNsdWRlIHRoZSBwaXZvdCB2YWx1ZXMuKVxuICAgIHNvcnQoYSwgbG8sIGxlc3MgLSAxKTtcbiAgICBzb3J0KGEsIGdyZWF0ICsgMiwgaGkpO1xuXG4gICAgaWYgKHBpdm90c0VxdWFsKSB7XG4gICAgICAvLyBBbGwgZWxlbWVudHMgaW4gdGhlIHNlY29uZCBwYXJ0aXRpb24gYXJlIGVxdWFsIHRvIHRoZSBwaXZvdC4gTm9cbiAgICAgIC8vIG5lZWQgdG8gc29ydCB0aGVtLlxuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgLy8gSW4gdGhlb3J5IGl0IHNob3VsZCBiZSBlbm91Z2ggdG8gY2FsbCBfZG9Tb3J0IHJlY3Vyc2l2ZWx5IG9uIHRoZSBzZWNvbmRcbiAgICAvLyBwYXJ0aXRpb24uXG4gICAgLy8gVGhlIEFuZHJvaWQgc291cmNlIGhvd2V2ZXIgcmVtb3ZlcyB0aGUgcGl2b3QgZWxlbWVudHMgZnJvbSB0aGUgcmVjdXJzaXZlXG4gICAgLy8gY2FsbCBpZiB0aGUgc2Vjb25kIHBhcnRpdGlvbiBpcyB0b28gbGFyZ2UgKG1vcmUgdGhhbiAyLzMgb2YgdGhlIGxpc3QpLlxuICAgIGlmIChsZXNzIDwgaTEgJiYgZ3JlYXQgPiBpNSkge1xuICAgICAgdmFyIGxlc3NWYWx1ZSwgZ3JlYXRWYWx1ZTtcbiAgICAgIHdoaWxlICgobGVzc1ZhbHVlID0gZihhW2xlc3NdKSkgPD0gcGl2b3RWYWx1ZTEgJiYgbGVzc1ZhbHVlID49IHBpdm90VmFsdWUxKSArK2xlc3M7XG4gICAgICB3aGlsZSAoKGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKSkgPD0gcGl2b3RWYWx1ZTIgJiYgZ3JlYXRWYWx1ZSA+PSBwaXZvdFZhbHVlMikgLS1ncmVhdDtcblxuICAgICAgLy8gQ29weSBwYXN0ZSBvZiB0aGUgcHJldmlvdXMgMy13YXkgcGFydGl0aW9uaW5nIHdpdGggYWRhcHRpb25zLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIHBhcnRpdGlvbiB0aGUgbGlzdCBpbnRvIHRocmVlIHBhcnRzOlxuICAgICAgLy8gIDEuID09IHBpdm90MVxuICAgICAgLy8gIDIuID4gcGl2b3QxICYmIDwgcGl2b3QyXG4gICAgICAvLyAgMy4gPT0gcGl2b3QyXG4gICAgICAvL1xuICAgICAgLy8gRHVyaW5nIHRoZSBsb29wIHdlIGhhdmU6XG4gICAgICAvLyBbID09IHBpdm90MSB8ID4gcGl2b3QxICYmIDwgcGl2b3QyIHwgdW5wYXJ0aXRpb25lZCAgfCA9PSBwaXZvdDIgXVxuICAgICAgLy8gICAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgXlxuICAgICAgLy8gICAgICAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICAgayAgICAgICAgICAgICAgZ3JlYXRcbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxLiBmb3IgeCBpbiBbICosIGxlc3NbIDogeCA9PSBwaXZvdDFcbiAgICAgIC8vICAgMi4gZm9yIHggaW4gW2xlc3MsIGtbIDogcGl2b3QxIDwgeCAmJiB4IDwgcGl2b3QyXG4gICAgICAvLyAgIDMuIGZvciB4IGluIF1ncmVhdCwgKiBdIDogeCA9PSBwaXZvdDJcbiAgICAgIGZvciAodmFyIGsgPSBsZXNzOyBrIDw9IGdyZWF0OyBrKyspIHtcbiAgICAgICAgdmFyIGVrID0gYVtrXSwgeGsgPSBmKGVrKTtcbiAgICAgICAgaWYgKHhrIDw9IHBpdm90VmFsdWUxICYmIHhrID49IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgaWYgKGsgIT09IGxlc3MpIHtcbiAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgYVtsZXNzXSA9IGVrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXNzKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHhrIDw9IHBpdm90VmFsdWUyICYmIHhrID49IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pO1xuICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA8PSBwaXZvdFZhbHVlMiAmJiBncmVhdFZhbHVlID49IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXQgPCBrKSBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGxvY2F0aW9uIGluc2lkZSB0aGUgbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiBpcyBzdGFydGVkLlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdIDwgcGl2b3QyLlxuICAgICAgICAgICAgICAgIGlmIChncmVhdFZhbHVlIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRyaXBsZSBleGNoYW5nZS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgICAgICAgYVtsZXNzKytdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdID09IHBpdm90MS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgc2Vjb25kIHBhcnRpdGlvbiBoYXMgbm93IGJlZW4gY2xlYXJlZCBvZiBwaXZvdCBlbGVtZW50cyBhbmQgbG9va3NcbiAgICAvLyBhcyBmb2xsb3dzOlxuICAgIC8vIFsgICogIHwgID4gcGl2b3QxICYmIDwgcGl2b3QyICB8ICogXVxuICAgIC8vICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgIF5cbiAgICAvLyAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgZ3JlYXRcbiAgICAvLyBTb3J0IHRoZSBzZWNvbmQgcGFydGl0aW9uIHVzaW5nIHJlY3Vyc2l2ZSBkZXNjZW50LlxuXG4gICAgLy8gVGhlIHNlY29uZCBwYXJ0aXRpb24gbG9va3MgYXMgZm9sbG93czpcbiAgICAvLyBbICAqICB8ICA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyICB8ICogXVxuICAgIC8vICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgICAgXlxuICAgIC8vICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICAgIGdyZWF0XG4gICAgLy8gU2ltcGx5IHNvcnQgaXQgYnkgcmVjdXJzaXZlIGRlc2NlbnQuXG5cbiAgICByZXR1cm4gc29ydChhLCBsZXNzLCBncmVhdCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIHNvcnQ7XG59XG5cbnZhciBxdWlja3NvcnRfc2l6ZVRocmVzaG9sZCA9IDMyO1xudmFyIGNyb3NzZmlsdGVyX2FycmF5OCA9IGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZCxcbiAgICBjcm9zc2ZpbHRlcl9hcnJheTE2ID0gY3Jvc3NmaWx0ZXJfYXJyYXlVbnR5cGVkLFxuICAgIGNyb3NzZmlsdGVyX2FycmF5MzIgPSBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQsXG4gICAgY3Jvc3NmaWx0ZXJfYXJyYXlMZW5ndGhlbiA9IGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW5VbnR5cGVkLFxuICAgIGNyb3NzZmlsdGVyX2FycmF5V2lkZW4gPSBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuVW50eXBlZDtcblxuaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGNyb3NzZmlsdGVyX2FycmF5OCA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50OEFycmF5KG4pOyB9O1xuICBjcm9zc2ZpbHRlcl9hcnJheTE2ID0gZnVuY3Rpb24obikgeyByZXR1cm4gbmV3IFVpbnQxNkFycmF5KG4pOyB9O1xuICBjcm9zc2ZpbHRlcl9hcnJheTMyID0gZnVuY3Rpb24obikgeyByZXR1cm4gbmV3IFVpbnQzMkFycmF5KG4pOyB9O1xuXG4gIGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW4gPSBmdW5jdGlvbihhcnJheSwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiBhcnJheTtcbiAgICB2YXIgY29weSA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuICAgIGNvcHkuc2V0KGFycmF5KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuID0gZnVuY3Rpb24oYXJyYXksIHdpZHRoKSB7XG4gICAgdmFyIGNvcHk7XG4gICAgc3dpdGNoICh3aWR0aCkge1xuICAgICAgY2FzZSAxNjogY29weSA9IGNyb3NzZmlsdGVyX2FycmF5MTYoYXJyYXkubGVuZ3RoKTsgYnJlYWs7XG4gICAgICBjYXNlIDMyOiBjb3B5ID0gY3Jvc3NmaWx0ZXJfYXJyYXkzMihhcnJheS5sZW5ndGgpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYXJyYXkgd2lkdGghXCIpO1xuICAgIH1cbiAgICBjb3B5LnNldChhcnJheSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZChuKSB7XG4gIHZhciBhcnJheSA9IG5ldyBBcnJheShuKSwgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgbikgYXJyYXlbaV0gPSAwO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW5VbnR5cGVkKGFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIG4gPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChuIDwgbGVuZ3RoKSBhcnJheVtuKytdID0gMDtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuVW50eXBlZChhcnJheSwgd2lkdGgpIHtcbiAgaWYgKHdpZHRoID4gMzIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYXJyYXkgd2lkdGghXCIpO1xuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9maWx0ZXJFeGFjdChiaXNlY3QsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFtiaXNlY3QubGVmdCh2YWx1ZXMsIHZhbHVlLCAwLCBuKSwgYmlzZWN0LnJpZ2h0KHZhbHVlcywgdmFsdWUsIDAsIG4pXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfZmlsdGVyUmFuZ2UoYmlzZWN0LCByYW5nZSkge1xuICB2YXIgbWluID0gcmFuZ2VbMF0sXG4gICAgICBtYXggPSByYW5nZVsxXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICByZXR1cm4gW2Jpc2VjdC5sZWZ0KHZhbHVlcywgbWluLCAwLCBuKSwgYmlzZWN0LmxlZnQodmFsdWVzLCBtYXgsIDAsIG4pXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfZmlsdGVyQWxsKHZhbHVlcykge1xuICByZXR1cm4gWzAsIHZhbHVlcy5sZW5ndGhdO1xufVxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfbnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl96ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZUluY3JlbWVudChwKSB7XG4gIHJldHVybiBwICsgMTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfcmVkdWNlRGVjcmVtZW50KHApIHtcbiAgcmV0dXJuIHAgLSAxO1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VBZGQoZikge1xuICByZXR1cm4gZnVuY3Rpb24ocCwgdikge1xuICAgIHJldHVybiBwICsgK2Yodik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZVN1YnRyYWN0KGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHAsIHYpIHtcbiAgICByZXR1cm4gcCAtIGYodik7XG4gIH07XG59XG5leHBvcnRzLmNyb3NzZmlsdGVyID0gY3Jvc3NmaWx0ZXI7XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyKCkge1xuICB2YXIgY3Jvc3NmaWx0ZXIgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlOiByZW1vdmVEYXRhLFxuICAgIGRpbWVuc2lvbjogZGltZW5zaW9uLFxuICAgIGdyb3VwQWxsOiBncm91cEFsbCxcbiAgICBzaXplOiBzaXplXG4gIH07XG5cbiAgdmFyIGRhdGEgPSBbXSwgLy8gdGhlIHJlY29yZHNcbiAgICAgIG4gPSAwLCAvLyB0aGUgbnVtYmVyIG9mIHJlY29yZHM7IGRhdGEubGVuZ3RoXG4gICAgICBtID0gMCwgLy8gYSBiaXQgbWFzayByZXByZXNlbnRpbmcgd2hpY2ggZGltZW5zaW9ucyBhcmUgaW4gdXNlXG4gICAgICBNID0gOCwgLy8gbnVtYmVyIG9mIGRpbWVuc2lvbnMgdGhhdCBjYW4gZml0IGluIGBmaWx0ZXJzYFxuICAgICAgZmlsdGVycyA9IGNyb3NzZmlsdGVyX2FycmF5OCgwKSwgLy8gTSBiaXRzIHBlciByZWNvcmQ7IDEgaXMgZmlsdGVyZWQgb3V0XG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMgPSBbXSwgLy8gd2hlbiB0aGUgZmlsdGVycyBjaGFuZ2VcbiAgICAgIGRhdGFMaXN0ZW5lcnMgPSBbXSwgLy8gd2hlbiBkYXRhIGlzIGFkZGVkXG4gICAgICByZW1vdmVEYXRhTGlzdGVuZXJzID0gW107IC8vIHdoZW4gZGF0YSBpcyByZW1vdmVkXG5cbiAgLy8gQWRkcyB0aGUgc3BlY2lmaWVkIG5ldyByZWNvcmRzIHRvIHRoaXMgY3Jvc3NmaWx0ZXIuXG4gIGZ1bmN0aW9uIGFkZChuZXdEYXRhKSB7XG4gICAgdmFyIG4wID0gbixcbiAgICAgICAgbjEgPSBuZXdEYXRhLmxlbmd0aDtcblxuICAgIC8vIElmIHRoZXJlJ3MgYWN0dWFsbHkgbmV3IGRhdGEgdG8gYWRk4oCmXG4gICAgLy8gTWVyZ2UgdGhlIG5ldyBkYXRhIGludG8gdGhlIGV4aXN0aW5nIGRhdGEuXG4gICAgLy8gTGVuZ3RoZW4gdGhlIGZpbHRlciBiaXRzZXQgdG8gaGFuZGxlIHRoZSBuZXcgcmVjb3Jkcy5cbiAgICAvLyBOb3RpZnkgbGlzdGVuZXJzIChkaW1lbnNpb25zIGFuZCBncm91cHMpIHRoYXQgbmV3IGRhdGEgaXMgYXZhaWxhYmxlLlxuICAgIGlmIChuMSkge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG5ld0RhdGEpO1xuICAgICAgZmlsdGVycyA9IGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW4oZmlsdGVycywgbiArPSBuMSk7XG4gICAgICBkYXRhTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG5ld0RhdGEsIG4wLCBuMSk7IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjcm9zc2ZpbHRlcjtcbiAgfVxuXG4gIC8vIFJlbW92ZXMgYWxsIHJlY29yZHMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBmaWx0ZXJzLlxuICBmdW5jdGlvbiByZW1vdmVEYXRhKCkge1xuICAgIHZhciBuZXdJbmRleCA9IGNyb3NzZmlsdGVyX2luZGV4KG4sIG4pLFxuICAgICAgICByZW1vdmVkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoZmlsdGVyc1tpXSkgbmV3SW5kZXhbaV0gPSBqKys7XG4gICAgICBlbHNlIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIG1hdGNoaW5nIHJlY29yZHMgZnJvbSBncm91cHMuXG4gICAgZmlsdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKDAsIFtdLCByZW1vdmVkKTsgfSk7XG5cbiAgICAvLyBVcGRhdGUgaW5kZXhlcy5cbiAgICByZW1vdmVEYXRhTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG5ld0luZGV4KTsgfSk7XG5cbiAgICAvLyBSZW1vdmUgb2xkIGZpbHRlcnMgYW5kIGRhdGEgYnkgb3ZlcndyaXRpbmcuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLCBrOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoayA9IGZpbHRlcnNbaV0pIHtcbiAgICAgICAgaWYgKGkgIT09IGopIGZpbHRlcnNbal0gPSBrLCBkYXRhW2pdID0gZGF0YVtpXTtcbiAgICAgICAgKytqO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhLmxlbmd0aCA9IGo7XG4gICAgd2hpbGUgKG4gPiBqKSBmaWx0ZXJzWy0tbl0gPSAwO1xuICB9XG5cbiAgLy8gQWRkcyBhIG5ldyBkaW1lbnNpb24gd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlIGFjY2Vzc29yIGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBkaW1lbnNpb24odmFsdWUpIHtcbiAgICB2YXIgZGltZW5zaW9uID0ge1xuICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICBmaWx0ZXJFeGFjdDogZmlsdGVyRXhhY3QsXG4gICAgICBmaWx0ZXJSYW5nZTogZmlsdGVyUmFuZ2UsXG4gICAgICBmaWx0ZXJGdW5jdGlvbjogZmlsdGVyRnVuY3Rpb24sXG4gICAgICBmaWx0ZXJBbGw6IGZpbHRlckFsbCxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICBncm91cDogZ3JvdXAsXG4gICAgICBncm91cEFsbDogZ3JvdXBBbGwsXG4gICAgICBkaXNwb3NlOiBkaXNwb3NlLFxuICAgICAgcmVtb3ZlOiBkaXNwb3NlIC8vIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgIH07XG5cbiAgICB2YXIgb25lID0gfm0gJiAtfm0sIC8vIGxvd2VzdCB1bnNldCBiaXQgYXMgbWFzaywgZS5nLiwgMDAwMDEwMDBcbiAgICAgICAgemVybyA9IH5vbmUsIC8vIGludmVydGVkIG9uZSwgZS5nLiwgMTExMTAxMTFcbiAgICAgICAgdmFsdWVzLCAvLyBzb3J0ZWQsIGNhY2hlZCBhcnJheVxuICAgICAgICBpbmRleCwgLy8gdmFsdWUgcmFuayDihqYgb2JqZWN0IGlkXG4gICAgICAgIG5ld1ZhbHVlcywgLy8gdGVtcG9yYXJ5IGFycmF5IHN0b3JpbmcgbmV3bHktYWRkZWQgdmFsdWVzXG4gICAgICAgIG5ld0luZGV4LCAvLyB0ZW1wb3JhcnkgYXJyYXkgc3RvcmluZyBuZXdseS1hZGRlZCBpbmRleFxuICAgICAgICBzb3J0ID0gcXVpY2tzb3J0X2J5KGZ1bmN0aW9uKGkpIHsgcmV0dXJuIG5ld1ZhbHVlc1tpXTsgfSksXG4gICAgICAgIHJlZmlsdGVyID0gY3Jvc3NmaWx0ZXJfZmlsdGVyQWxsLCAvLyBmb3IgcmVjb21wdXRpbmcgZmlsdGVyXG4gICAgICAgIHJlZmlsdGVyRnVuY3Rpb24sIC8vIHRoZSBjdXN0b20gZmlsdGVyIGZ1bmN0aW9uIGluIHVzZVxuICAgICAgICBpbmRleExpc3RlbmVycyA9IFtdLCAvLyB3aGVuIGRhdGEgaXMgYWRkZWRcbiAgICAgICAgZGltZW5zaW9uR3JvdXBzID0gW10sXG4gICAgICAgIGxvMCA9IDAsXG4gICAgICAgIGhpMCA9IDA7XG5cbiAgICAvLyBVcGRhdGluZyBhIGRpbWVuc2lvbiBpcyBhIHR3by1zdGFnZSBwcm9jZXNzLiBGaXJzdCwgd2UgbXVzdCB1cGRhdGUgdGhlXG4gICAgLy8gYXNzb2NpYXRlZCBmaWx0ZXJzIGZvciB0aGUgbmV3bHktYWRkZWQgcmVjb3Jkcy4gT25jZSBhbGwgZGltZW5zaW9ucyBoYXZlXG4gICAgLy8gdXBkYXRlZCB0aGVpciBmaWx0ZXJzLCB0aGUgZ3JvdXBzIGFyZSBub3RpZmllZCB0byB1cGRhdGUuXG4gICAgZGF0YUxpc3RlbmVycy51bnNoaWZ0KHByZUFkZCk7XG4gICAgZGF0YUxpc3RlbmVycy5wdXNoKHBvc3RBZGQpO1xuXG4gICAgcmVtb3ZlRGF0YUxpc3RlbmVycy5wdXNoKHJlbW92ZURhdGEpO1xuXG4gICAgLy8gSW5jb3Jwb3JhdGUgYW55IGV4aXN0aW5nIGRhdGEgaW50byB0aGlzIGRpbWVuc2lvbiwgYW5kIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgIC8vIGZpbHRlciBiaXRzZXQgaXMgd2lkZSBlbm91Z2ggdG8gaGFuZGxlIHRoZSBuZXcgZGltZW5zaW9uLlxuICAgIG0gfD0gb25lO1xuICAgIGlmIChNID49IDMyID8gIW9uZSA6IG0gJiAtKDEgPDwgTSkpIHtcbiAgICAgIGZpbHRlcnMgPSBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuKGZpbHRlcnMsIE0gPDw9IDEpO1xuICAgIH1cbiAgICBwcmVBZGQoZGF0YSwgMCwgbik7XG4gICAgcG9zdEFkZChkYXRhLCAwLCBuKTtcblxuICAgIC8vIEluY29ycG9yYXRlcyB0aGUgc3BlY2lmaWVkIG5ldyByZWNvcmRzIGludG8gdGhpcyBkaW1lbnNpb24uXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgZmlsdGVycywgdmFsdWVzLCBhbmQgaW5kZXguXG4gICAgZnVuY3Rpb24gcHJlQWRkKG5ld0RhdGEsIG4wLCBuMSkge1xuXG4gICAgICAvLyBQZXJtdXRlIG5ldyB2YWx1ZXMgaW50byBuYXR1cmFsIG9yZGVyIHVzaW5nIGEgc29ydGVkIGluZGV4LlxuICAgICAgbmV3VmFsdWVzID0gbmV3RGF0YS5tYXAodmFsdWUpO1xuICAgICAgbmV3SW5kZXggPSBzb3J0KGNyb3NzZmlsdGVyX3JhbmdlKG4xKSwgMCwgbjEpO1xuICAgICAgbmV3VmFsdWVzID0gcGVybXV0ZShuZXdWYWx1ZXMsIG5ld0luZGV4KTtcblxuICAgICAgLy8gQmlzZWN0IG5ld1ZhbHVlcyB0byBkZXRlcm1pbmUgd2hpY2ggbmV3IHJlY29yZHMgYXJlIHNlbGVjdGVkLlxuICAgICAgdmFyIGJvdW5kcyA9IHJlZmlsdGVyKG5ld1ZhbHVlcyksIGxvMSA9IGJvdW5kc1swXSwgaGkxID0gYm91bmRzWzFdLCBpO1xuICAgICAgaWYgKHJlZmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyArK2kpIHtcbiAgICAgICAgICBpZiAoIXJlZmlsdGVyRnVuY3Rpb24obmV3VmFsdWVzW2ldLCBpKSkgZmlsdGVyc1tuZXdJbmRleFtpXSArIG4wXSB8PSBvbmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsbzE7ICsraSkgZmlsdGVyc1tuZXdJbmRleFtpXSArIG4wXSB8PSBvbmU7XG4gICAgICAgIGZvciAoaSA9IGhpMTsgaSA8IG4xOyArK2kpIGZpbHRlcnNbbmV3SW5kZXhbaV0gKyBuMF0gfD0gb25lO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGRpbWVuc2lvbiBwcmV2aW91c2x5IGhhZCBubyBkYXRhLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhlXG4gICAgICAvLyBtb3JlIGV4cGVuc2l2ZSBtZXJnZSBvcGVyYXRpb247IHVzZSB0aGUgbmV3IHZhbHVlcyBhbmQgaW5kZXggYXMtaXMuXG4gICAgICBpZiAoIW4wKSB7XG4gICAgICAgIHZhbHVlcyA9IG5ld1ZhbHVlcztcbiAgICAgICAgaW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgbG8wID0gbG8xO1xuICAgICAgICBoaTAgPSBoaTE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9sZFZhbHVlcyA9IHZhbHVlcyxcbiAgICAgICAgICBvbGRJbmRleCA9IGluZGV4LFxuICAgICAgICAgIGkwID0gMCxcbiAgICAgICAgICBpMSA9IDA7XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIG5ldyBhcnJheXMgaW50byB3aGljaCB0byBtZXJnZSBuZXcgYW5kIG9sZC5cbiAgICAgIHZhbHVlcyA9IG5ldyBBcnJheShuKTtcbiAgICAgIGluZGV4ID0gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbik7XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBvbGQgYW5kIG5ldyBzb3J0ZWQgdmFsdWVzLCBhbmQgb2xkIGFuZCBuZXcgaW5kZXguXG4gICAgICBmb3IgKGkgPSAwOyBpMCA8IG4wICYmIGkxIDwgbjE7ICsraSkge1xuICAgICAgICBpZiAob2xkVmFsdWVzW2kwXSA8IG5ld1ZhbHVlc1tpMV0pIHtcbiAgICAgICAgICB2YWx1ZXNbaV0gPSBvbGRWYWx1ZXNbaTBdO1xuICAgICAgICAgIGluZGV4W2ldID0gb2xkSW5kZXhbaTArK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVzW2ldID0gbmV3VmFsdWVzW2kxXTtcbiAgICAgICAgICBpbmRleFtpXSA9IG5ld0luZGV4W2kxKytdICsgbjA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGFueSByZW1haW5pbmcgb2xkIHZhbHVlcy5cbiAgICAgIGZvciAoOyBpMCA8IG4wOyArK2kwLCArK2kpIHtcbiAgICAgICAgdmFsdWVzW2ldID0gb2xkVmFsdWVzW2kwXTtcbiAgICAgICAgaW5kZXhbaV0gPSBvbGRJbmRleFtpMF07XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5ldyB2YWx1ZXMuXG4gICAgICBmb3IgKDsgaTEgPCBuMTsgKytpMSwgKytpKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IG5ld1ZhbHVlc1tpMV07XG4gICAgICAgIGluZGV4W2ldID0gbmV3SW5kZXhbaTFdICsgbjA7XG4gICAgICB9XG5cbiAgICAgIC8vIEJpc2VjdCBhZ2FpbiB0byByZWNvbXB1dGUgbG8wIGFuZCBoaTAuXG4gICAgICBib3VuZHMgPSByZWZpbHRlcih2YWx1ZXMpLCBsbzAgPSBib3VuZHNbMF0sIGhpMCA9IGJvdW5kc1sxXTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIGFsbCBmaWx0ZXJzIGhhdmUgdXBkYXRlZCwgbm90aWZ5IGluZGV4IGxpc3RlbmVycyBvZiB0aGUgbmV3IHZhbHVlcy5cbiAgICBmdW5jdGlvbiBwb3N0QWRkKG5ld0RhdGEsIG4wLCBuMSkge1xuICAgICAgaW5kZXhMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwobmV3VmFsdWVzLCBuZXdJbmRleCwgbjAsIG4xKTsgfSk7XG4gICAgICBuZXdWYWx1ZXMgPSBuZXdJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRGF0YShyZUluZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDAsIGs7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGZpbHRlcnNbayA9IGluZGV4W2ldXSkge1xuICAgICAgICAgIGlmIChpICE9PSBqKSB2YWx1ZXNbal0gPSB2YWx1ZXNbaV07XG4gICAgICAgICAgaW5kZXhbal0gPSByZUluZGV4W2tdO1xuICAgICAgICAgICsrajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFsdWVzLmxlbmd0aCA9IGo7XG4gICAgICB3aGlsZSAoaiA8IG4pIGluZGV4W2orK10gPSAwO1xuXG4gICAgICAvLyBCaXNlY3QgYWdhaW4gdG8gcmVjb21wdXRlIGxvMCBhbmQgaGkwLlxuICAgICAgdmFyIGJvdW5kcyA9IHJlZmlsdGVyKHZhbHVlcyk7XG4gICAgICBsbzAgPSBib3VuZHNbMF0sIGhpMCA9IGJvdW5kc1sxXTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBzZWxlY3RlZCB2YWx1ZXMgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBib3VuZHMgW2xvLCBoaV0uXG4gICAgLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGJ5IGFsbCB0aGUgcHVibGljIGZpbHRlciBtZXRob2RzLlxuICAgIGZ1bmN0aW9uIGZpbHRlckluZGV4Qm91bmRzKGJvdW5kcykge1xuICAgICAgdmFyIGxvMSA9IGJvdW5kc1swXSxcbiAgICAgICAgICBoaTEgPSBib3VuZHNbMV07XG5cbiAgICAgIGlmIChyZWZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJlZmlsdGVyRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICBmaWx0ZXJJbmRleEZ1bmN0aW9uKGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGxvMSA8PSBpICYmIGkgPCBoaTE7IH0pO1xuICAgICAgICBsbzAgPSBsbzE7XG4gICAgICAgIGhpMCA9IGhpMTtcbiAgICAgICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGksXG4gICAgICAgICAgaixcbiAgICAgICAgICBrLFxuICAgICAgICAgIGFkZGVkID0gW10sXG4gICAgICAgICAgcmVtb3ZlZCA9IFtdO1xuXG4gICAgICAvLyBGYXN0IGluY3JlbWVudGFsIHVwZGF0ZSBiYXNlZCBvbiBwcmV2aW91cyBsbyBpbmRleC5cbiAgICAgIGlmIChsbzEgPCBsbzApIHtcbiAgICAgICAgZm9yIChpID0gbG8xLCBqID0gTWF0aC5taW4obG8wLCBoaTEpOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1trID0gaW5kZXhbaV1dIF49IG9uZTtcbiAgICAgICAgICBhZGRlZC5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxvMSA+IGxvMCkge1xuICAgICAgICBmb3IgKGkgPSBsbzAsIGogPSBNYXRoLm1pbihsbzEsIGhpMCk7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICBmaWx0ZXJzW2sgPSBpbmRleFtpXV0gXj0gb25lO1xuICAgICAgICAgIHJlbW92ZWQucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGYXN0IGluY3JlbWVudGFsIHVwZGF0ZSBiYXNlZCBvbiBwcmV2aW91cyBoaSBpbmRleC5cbiAgICAgIGlmIChoaTEgPiBoaTApIHtcbiAgICAgICAgZm9yIChpID0gTWF0aC5tYXgobG8xLCBoaTApLCBqID0gaGkxOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1trID0gaW5kZXhbaV1dIF49IG9uZTtcbiAgICAgICAgICBhZGRlZC5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhpMSA8IGhpMCkge1xuICAgICAgICBmb3IgKGkgPSBNYXRoLm1heChsbzAsIGhpMSksIGogPSBoaTA7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICBmaWx0ZXJzW2sgPSBpbmRleFtpXV0gXj0gb25lO1xuICAgICAgICAgIHJlbW92ZWQucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsbzAgPSBsbzE7XG4gICAgICBoaTAgPSBoaTE7XG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwob25lLCBhZGRlZCwgcmVtb3ZlZCk7IH0pO1xuICAgICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHZhbHVlLCBvciBudWxsLlxuICAgIC8vIElmIHRoZSByYW5nZSBpcyBudWxsLCB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gZmlsdGVyQWxsLlxuICAgIC8vIElmIHRoZSByYW5nZSBpcyBhbiBhcnJheSwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGZpbHRlclJhbmdlLlxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGZpbHRlckV4YWN0LlxuICAgIGZ1bmN0aW9uIGZpbHRlcihyYW5nZSkge1xuICAgICAgcmV0dXJuIHJhbmdlID09IG51bGxcbiAgICAgICAgICA/IGZpbHRlckFsbCgpIDogQXJyYXkuaXNBcnJheShyYW5nZSlcbiAgICAgICAgICA/IGZpbHRlclJhbmdlKHJhbmdlKSA6IHR5cGVvZiByYW5nZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBmaWx0ZXJGdW5jdGlvbihyYW5nZSlcbiAgICAgICAgICA6IGZpbHRlckV4YWN0KHJhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHRvIHNlbGVjdCB0aGUgZXhhY3QgdmFsdWUuXG4gICAgZnVuY3Rpb24gZmlsdGVyRXhhY3QodmFsdWUpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSBjcm9zc2ZpbHRlcl9maWx0ZXJFeGFjdChiaXNlY3QsIHZhbHVlKSkodmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVycyB0aGlzIGRpbWVuc2lvbiB0byBzZWxlY3QgdGhlIHNwZWNpZmllZCByYW5nZSBbbG8sIGhpXS5cbiAgICAvLyBUaGUgbG93ZXIgYm91bmQgaXMgaW5jbHVzaXZlLCBhbmQgdGhlIHVwcGVyIGJvdW5kIGlzIGV4Y2x1c2l2ZS5cbiAgICBmdW5jdGlvbiBmaWx0ZXJSYW5nZShyYW5nZSkge1xuICAgICAgcmV0dXJuIGZpbHRlckluZGV4Qm91bmRzKChyZWZpbHRlciA9IGNyb3NzZmlsdGVyX2ZpbHRlclJhbmdlKGJpc2VjdCwgcmFuZ2UpKSh2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhcnMgYW55IGZpbHRlcnMgb24gdGhpcyBkaW1lbnNpb24uXG4gICAgZnVuY3Rpb24gZmlsdGVyQWxsKCkge1xuICAgICAgcmV0dXJuIGZpbHRlckluZGV4Qm91bmRzKChyZWZpbHRlciA9IGNyb3NzZmlsdGVyX2ZpbHRlckFsbCkodmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVycyB0aGlzIGRpbWVuc2lvbiB1c2luZyBhbiBhcmJpdHJhcnkgZnVuY3Rpb24uXG4gICAgZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oZikge1xuICAgICAgcmVmaWx0ZXIgPSBjcm9zc2ZpbHRlcl9maWx0ZXJBbGw7XG5cbiAgICAgIGZpbHRlckluZGV4RnVuY3Rpb24ocmVmaWx0ZXJGdW5jdGlvbiA9IGYpO1xuXG4gICAgICBsbzAgPSAwO1xuICAgICAgaGkwID0gbjtcblxuICAgICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJbmRleEZ1bmN0aW9uKGYpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGssXG4gICAgICAgICAgeCxcbiAgICAgICAgICBhZGRlZCA9IFtdLFxuICAgICAgICAgIHJlbW92ZWQgPSBbXTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoIShmaWx0ZXJzW2sgPSBpbmRleFtpXV0gJiBvbmUpIF4gISEoeCA9IGYodmFsdWVzW2ldLCBpKSkpIHtcbiAgICAgICAgICBpZiAoeCkgZmlsdGVyc1trXSAmPSB6ZXJvLCBhZGRlZC5wdXNoKGspO1xuICAgICAgICAgIGVsc2UgZmlsdGVyc1trXSB8PSBvbmUsIHJlbW92ZWQucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmlsdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG9uZSwgYWRkZWQsIHJlbW92ZWQpOyB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSB0b3AgSyBzZWxlY3RlZCByZWNvcmRzIGJhc2VkIG9uIHRoaXMgZGltZW5zaW9uJ3Mgb3JkZXIuXG4gICAgLy8gTm90ZTogb2JzZXJ2ZXMgdGhpcyBkaW1lbnNpb24ncyBmaWx0ZXIsIHVubGlrZSBncm91cCBhbmQgZ3JvdXBBbGwuXG4gICAgZnVuY3Rpb24gdG9wKGspIHtcbiAgICAgIHZhciBhcnJheSA9IFtdLFxuICAgICAgICAgIGkgPSBoaTAsXG4gICAgICAgICAgajtcblxuICAgICAgd2hpbGUgKC0taSA+PSBsbzAgJiYgayA+IDApIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJzW2ogPSBpbmRleFtpXV0pIHtcbiAgICAgICAgICBhcnJheS5wdXNoKGRhdGFbal0pO1xuICAgICAgICAgIC0taztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgYm90dG9tIEsgc2VsZWN0ZWQgcmVjb3JkcyBiYXNlZCBvbiB0aGlzIGRpbWVuc2lvbidzIG9yZGVyLlxuICAgIC8vIE5vdGU6IG9ic2VydmVzIHRoaXMgZGltZW5zaW9uJ3MgZmlsdGVyLCB1bmxpa2UgZ3JvdXAgYW5kIGdyb3VwQWxsLlxuICAgIGZ1bmN0aW9uIGJvdHRvbShrKSB7XG4gICAgICB2YXIgYXJyYXkgPSBbXSxcbiAgICAgICAgICBpID0gbG8wLFxuICAgICAgICAgIGo7XG5cbiAgICAgIHdoaWxlIChpIDwgaGkwICYmIGsgPiAwKSB7XG4gICAgICAgIGlmICghZmlsdGVyc1tqID0gaW5kZXhbaV1dKSB7XG4gICAgICAgICAgYXJyYXkucHVzaChkYXRhW2pdKTtcbiAgICAgICAgICAtLWs7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLy8gQWRkcyBhIG5ldyBncm91cCB0byB0aGlzIGRpbWVuc2lvbiwgdXNpbmcgdGhlIHNwZWNpZmllZCBrZXkgZnVuY3Rpb24uXG4gICAgZnVuY3Rpb24gZ3JvdXAoa2V5KSB7XG4gICAgICB2YXIgZ3JvdXAgPSB7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBhbGw6IGFsbCxcbiAgICAgICAgcmVkdWNlOiByZWR1Y2UsXG4gICAgICAgIHJlZHVjZUNvdW50OiByZWR1Y2VDb3VudCxcbiAgICAgICAgcmVkdWNlU3VtOiByZWR1Y2VTdW0sXG4gICAgICAgIG9yZGVyOiBvcmRlcixcbiAgICAgICAgb3JkZXJOYXR1cmFsOiBvcmRlck5hdHVyYWwsXG4gICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgIGRpc3Bvc2U6IGRpc3Bvc2UsXG4gICAgICAgIHJlbW92ZTogZGlzcG9zZSAvLyBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgICAgIH07XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoaXMgZ3JvdXAgd2lsbCBiZSByZW1vdmVkIHdoZW4gdGhlIGRpbWVuc2lvbiBpcyByZW1vdmVkLlxuICAgICAgZGltZW5zaW9uR3JvdXBzLnB1c2goZ3JvdXApO1xuXG4gICAgICB2YXIgZ3JvdXBzLCAvLyBhcnJheSBvZiB7a2V5LCB2YWx1ZX1cbiAgICAgICAgICBncm91cEluZGV4LCAvLyBvYmplY3QgaWQg4oamIGdyb3VwIGlkXG4gICAgICAgICAgZ3JvdXBXaWR0aCA9IDgsXG4gICAgICAgICAgZ3JvdXBDYXBhY2l0eSA9IGNyb3NzZmlsdGVyX2NhcGFjaXR5KGdyb3VwV2lkdGgpLFxuICAgICAgICAgIGsgPSAwLCAvLyBjYXJkaW5hbGl0eVxuICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICBoZWFwLFxuICAgICAgICAgIHJlZHVjZUFkZCxcbiAgICAgICAgICByZWR1Y2VSZW1vdmUsXG4gICAgICAgICAgcmVkdWNlSW5pdGlhbCxcbiAgICAgICAgICB1cGRhdGUgPSBjcm9zc2ZpbHRlcl9udWxsLFxuICAgICAgICAgIHJlc2V0ID0gY3Jvc3NmaWx0ZXJfbnVsbCxcbiAgICAgICAgICByZXNldE5lZWRlZCA9IHRydWUsXG4gICAgICAgICAgZ3JvdXBBbGwgPSBrZXkgPT09IGNyb3NzZmlsdGVyX251bGw7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkga2V5ID0gY3Jvc3NmaWx0ZXJfaWRlbnRpdHk7XG5cbiAgICAgIC8vIFRoZSBncm91cCBsaXN0ZW5zIHRvIHRoZSBjcm9zc2ZpbHRlciBmb3Igd2hlbiBhbnkgZGltZW5zaW9uIGNoYW5nZXMsIHNvXG4gICAgICAvLyB0aGF0IGl0IGNhbiB1cGRhdGUgdGhlIGFzc29jaWF0ZWQgcmVkdWNlIHZhbHVlcy4gSXQgbXVzdCBhbHNvIGxpc3RlbiB0b1xuICAgICAgLy8gdGhlIHBhcmVudCBkaW1lbnNpb24gZm9yIHdoZW4gZGF0YSBpcyBhZGRlZCwgYW5kIGNvbXB1dGUgbmV3IGtleXMuXG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMucHVzaCh1cGRhdGUpO1xuICAgICAgaW5kZXhMaXN0ZW5lcnMucHVzaChhZGQpO1xuICAgICAgcmVtb3ZlRGF0YUxpc3RlbmVycy5wdXNoKHJlbW92ZURhdGEpO1xuXG4gICAgICAvLyBJbmNvcnBvcmF0ZSBhbnkgZXhpc3RpbmcgZGF0YSBpbnRvIHRoZSBncm91cGluZy5cbiAgICAgIGFkZCh2YWx1ZXMsIGluZGV4LCAwLCBuKTtcblxuICAgICAgLy8gSW5jb3Jwb3JhdGVzIHRoZSBzcGVjaWZpZWQgbmV3IHZhbHVlcyBpbnRvIHRoaXMgZ3JvdXAuXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyBncm91cHMgYW5kIGdyb3VwSW5kZXguXG4gICAgICBmdW5jdGlvbiBhZGQobmV3VmFsdWVzLCBuZXdJbmRleCwgbjAsIG4xKSB7XG4gICAgICAgIHZhciBvbGRHcm91cHMgPSBncm91cHMsXG4gICAgICAgICAgICByZUluZGV4ID0gY3Jvc3NmaWx0ZXJfaW5kZXgoaywgZ3JvdXBDYXBhY2l0eSksXG4gICAgICAgICAgICBhZGQgPSByZWR1Y2VBZGQsXG4gICAgICAgICAgICBpbml0aWFsID0gcmVkdWNlSW5pdGlhbCxcbiAgICAgICAgICAgIGswID0gaywgLy8gb2xkIGNhcmRpbmFsaXR5XG4gICAgICAgICAgICBpMCA9IDAsIC8vIGluZGV4IG9mIG9sZCBncm91cFxuICAgICAgICAgICAgaTEgPSAwLCAvLyBpbmRleCBvZiBuZXcgcmVjb3JkXG4gICAgICAgICAgICBqLCAvLyBvYmplY3QgaWRcbiAgICAgICAgICAgIGcwLCAvLyBvbGQgZ3JvdXBcbiAgICAgICAgICAgIHgwLCAvLyBvbGQga2V5XG4gICAgICAgICAgICB4MSwgLy8gbmV3IGtleVxuICAgICAgICAgICAgZywgLy8gZ3JvdXAgdG8gYWRkXG4gICAgICAgICAgICB4OyAvLyBrZXkgb2YgZ3JvdXAgdG8gYWRkXG5cbiAgICAgICAgLy8gSWYgYSByZXNldCBpcyBuZWVkZWQsIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIHRoZSByZWR1Y2UgdmFsdWVzLlxuICAgICAgICBpZiAocmVzZXROZWVkZWQpIGFkZCA9IGluaXRpYWwgPSBjcm9zc2ZpbHRlcl9udWxsO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBuZXcgZ3JvdXBzIChrIGlzIGEgbG93ZXIgYm91bmQpLlxuICAgICAgICAvLyBBbHNvLCBtYWtlIHN1cmUgdGhhdCBncm91cEluZGV4IGV4aXN0cyBhbmQgaXMgbG9uZyBlbm91Z2guXG4gICAgICAgIGdyb3VwcyA9IG5ldyBBcnJheShrKSwgayA9IDA7XG4gICAgICAgIGdyb3VwSW5kZXggPSBrMCA+IDEgPyBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuKGdyb3VwSW5kZXgsIG4pIDogY3Jvc3NmaWx0ZXJfaW5kZXgobiwgZ3JvdXBDYXBhY2l0eSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCBvbGQga2V5ICh4MCBvZiBnMCksIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgaWYgKGswKSB4MCA9IChnMCA9IG9sZEdyb3Vwc1swXSkua2V5O1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG5ldyBrZXkgKHgxKSwgc2tpcHBpbmcgTmFOIGtleXMuXG4gICAgICAgIHdoaWxlIChpMSA8IG4xICYmICEoKHgxID0ga2V5KG5ld1ZhbHVlc1tpMV0pKSA+PSB4MSkpICsraTE7XG5cbiAgICAgICAgLy8gV2hpbGUgbmV3IGtleXMgcmVtYWlu4oCmXG4gICAgICAgIHdoaWxlIChpMSA8IG4xKSB7XG5cbiAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGxlc3NlciBvZiB0aGUgdHdvIGN1cnJlbnQga2V5czsgbmV3IGFuZCBvbGQuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG9sZCBrZXlzIHJlbWFpbmluZywgdGhlbiBhbHdheXMgYWRkIHRoZSBuZXcga2V5LlxuICAgICAgICAgIGlmIChnMCAmJiB4MCA8PSB4MSkge1xuICAgICAgICAgICAgZyA9IGcwLCB4ID0geDA7XG5cbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgbmV3IGluZGV4IG9mIHRoZSBvbGQgZ3JvdXAuXG4gICAgICAgICAgICByZUluZGV4W2kwXSA9IGs7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBuZXh0IG9sZCBrZXkuXG4gICAgICAgICAgICBpZiAoZzAgPSBvbGRHcm91cHNbKytpMF0pIHgwID0gZzAua2V5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnID0ge2tleTogeDEsIHZhbHVlOiBpbml0aWFsKCl9LCB4ID0geDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkIHRoZSBsZXNzZXIgZ3JvdXAuXG4gICAgICAgICAgZ3JvdXBzW2tdID0gZztcblxuICAgICAgICAgIC8vIEFkZCBhbnkgc2VsZWN0ZWQgcmVjb3JkcyBiZWxvbmdpbmcgdG8gdGhlIGFkZGVkIGdyb3VwLCB3aGlsZVxuICAgICAgICAgIC8vIGFkdmFuY2luZyB0aGUgbmV3IGtleSBhbmQgcG9wdWxhdGluZyB0aGUgYXNzb2NpYXRlZCBncm91cCBpbmRleC5cbiAgICAgICAgICB3aGlsZSAoISh4MSA+IHgpKSB7XG4gICAgICAgICAgICBncm91cEluZGV4W2ogPSBuZXdJbmRleFtpMV0gKyBuMF0gPSBrO1xuICAgICAgICAgICAgaWYgKCEoZmlsdGVyc1tqXSAmIHplcm8pKSBnLnZhbHVlID0gYWRkKGcudmFsdWUsIGRhdGFbal0pO1xuICAgICAgICAgICAgaWYgKCsraTEgPj0gbjEpIGJyZWFrO1xuICAgICAgICAgICAgeDEgPSBrZXkobmV3VmFsdWVzW2kxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ3JvdXBJbmNyZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG9sZCBncm91cHMgdGhhdCB3ZXJlIGdyZWF0ZXIgdGhhbiBhbGwgbmV3IGtleXMuXG4gICAgICAgIC8vIE5vIGluY3JlbWVudGFsIHJlZHVjZSBpcyBuZWVkZWQ7IHRoZXNlIGdyb3VwcyBoYXZlIG5vIG5ldyByZWNvcmRzLlxuICAgICAgICAvLyBBbHNvIHJlY29yZCB0aGUgbmV3IGluZGV4IG9mIHRoZSBvbGQgZ3JvdXAuXG4gICAgICAgIHdoaWxlIChpMCA8IGswKSB7XG4gICAgICAgICAgZ3JvdXBzW3JlSW5kZXhbaTBdID0ga10gPSBvbGRHcm91cHNbaTArK107XG4gICAgICAgICAgZ3JvdXBJbmNyZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGFkZGVkIGFueSBuZXcgZ3JvdXBzIGJlZm9yZSBhbnkgb2xkIGdyb3VwcyxcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBncm91cCBpbmRleCBvZiBhbGwgdGhlIG9sZCByZWNvcmRzLlxuICAgICAgICBpZiAoayA+IGkwKSBmb3IgKGkwID0gMDsgaTAgPCBuMDsgKytpMCkge1xuICAgICAgICAgIGdyb3VwSW5kZXhbaTBdID0gcmVJbmRleFtncm91cEluZGV4W2kwXV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb2RpZnkgdGhlIHVwZGF0ZSBhbmQgcmVzZXQgYmVoYXZpb3IgYmFzZWQgb24gdGhlIGNhcmRpbmFsaXR5LlxuICAgICAgICAvLyBJZiB0aGUgY2FyZGluYWxpdHkgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZSwgdGhlbiB0aGUgZ3JvdXBJbmRleFxuICAgICAgICAvLyBpcyBub3QgbmVlZGVkLiBJZiB0aGUgY2FyZGluYWxpdHkgaXMgemVybywgdGhlbiB0aGVyZSBhcmUgbm8gcmVjb3Jkc1xuICAgICAgICAvLyBhbmQgdGhlcmVmb3JlIG5vIGdyb3VwcyB0byB1cGRhdGUgb3IgcmVzZXQuIE5vdGUgdGhhdCB3ZSBhbHNvIG11c3RcbiAgICAgICAgLy8gY2hhbmdlIHRoZSByZWdpc3RlcmVkIGxpc3RlbmVyIHRvIHBvaW50IHRvIHRoZSBuZXcgbWV0aG9kLlxuICAgICAgICBqID0gZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKTtcbiAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgdXBkYXRlID0gdXBkYXRlTWFueTtcbiAgICAgICAgICByZXNldCA9IHJlc2V0TWFueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWsgJiYgZ3JvdXBBbGwpIHtcbiAgICAgICAgICAgIGsgPSAxO1xuICAgICAgICAgICAgZ3JvdXBzID0gW3trZXk6IG51bGwsIHZhbHVlOiBpbml0aWFsKCl9XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGsgPT09IDEpIHtcbiAgICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZU9uZTtcbiAgICAgICAgICAgIHJlc2V0ID0gcmVzZXRPbmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZSA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgICAgICByZXNldCA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyb3VwSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlckxpc3RlbmVyc1tqXSA9IHVwZGF0ZTtcblxuICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGFkZGVkIGdyb3VwcyxcbiAgICAgICAgLy8gYW5kIHdpZGVuIHRoZSBncm91cCBpbmRleCBhcyBuZWVkZWQuXG4gICAgICAgIGZ1bmN0aW9uIGdyb3VwSW5jcmVtZW50KCkge1xuICAgICAgICAgIGlmICgrK2sgPT09IGdyb3VwQ2FwYWNpdHkpIHtcbiAgICAgICAgICAgIHJlSW5kZXggPSBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuKHJlSW5kZXgsIGdyb3VwV2lkdGggPDw9IDEpO1xuICAgICAgICAgICAgZ3JvdXBJbmRleCA9IGNyb3NzZmlsdGVyX2FycmF5V2lkZW4oZ3JvdXBJbmRleCwgZ3JvdXBXaWR0aCk7XG4gICAgICAgICAgICBncm91cENhcGFjaXR5ID0gY3Jvc3NmaWx0ZXJfY2FwYWNpdHkoZ3JvdXBXaWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZURhdGEoKSB7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgIHZhciBvbGRLID0gayxcbiAgICAgICAgICAgICAgb2xkR3JvdXBzID0gZ3JvdXBzLFxuICAgICAgICAgICAgICBzZWVuR3JvdXBzID0gY3Jvc3NmaWx0ZXJfaW5kZXgob2xkSywgb2xkSyk7XG5cbiAgICAgICAgICAvLyBGaWx0ZXIgb3V0IG5vbi1tYXRjaGVzIGJ5IGNvcHlpbmcgbWF0Y2hpbmcgZ3JvdXAgaW5kZXggZW50cmllcyB0b1xuICAgICAgICAgIC8vIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0pIHtcbiAgICAgICAgICAgICAgc2Vlbkdyb3Vwc1tncm91cEluZGV4W2pdID0gZ3JvdXBJbmRleFtpXV0gPSAxO1xuICAgICAgICAgICAgICArK2o7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVhc3NlbWJsZSBncm91cHMgaW5jbHVkaW5nIG9ubHkgdGhvc2UgZ3JvdXBzIHRoYXQgd2VyZSByZWZlcnJlZFxuICAgICAgICAgIC8vIHRvIGJ5IG1hdGNoaW5nIGdyb3VwIGluZGV4IGVudHJpZXMuICBOb3RlIHRoZSBuZXcgZ3JvdXAgaW5kZXggaW5cbiAgICAgICAgICAvLyBzZWVuR3JvdXBzLlxuICAgICAgICAgIGdyb3VwcyA9IFtdLCBrID0gMDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2xkSzsgKytpKSB7XG4gICAgICAgICAgICBpZiAoc2Vlbkdyb3Vwc1tpXSkge1xuICAgICAgICAgICAgICBzZWVuR3JvdXBzW2ldID0gaysrO1xuICAgICAgICAgICAgICBncm91cHMucHVzaChvbGRHcm91cHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgICAgLy8gUmVpbmRleCB0aGUgZ3JvdXAgaW5kZXggdXNpbmcgc2Vlbkdyb3VwcyB0byBmaW5kIHRoZSBuZXcgaW5kZXguXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGo7ICsraSkgZ3JvdXBJbmRleFtpXSA9IHNlZW5Hcm91cHNbZ3JvdXBJbmRleFtpXV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyb3VwSW5kZXggPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKV0gPSBrID4gMVxuICAgICAgICAgICAgICA/IChyZXNldCA9IHJlc2V0TWFueSwgdXBkYXRlID0gdXBkYXRlTWFueSlcbiAgICAgICAgICAgICAgOiBrID09PSAxID8gKHJlc2V0ID0gcmVzZXRPbmUsIHVwZGF0ZSA9IHVwZGF0ZU9uZSlcbiAgICAgICAgICAgICAgOiByZXNldCA9IHVwZGF0ZSA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoayA9PT0gMSkge1xuICAgICAgICAgIGlmIChncm91cEFsbCkgcmV0dXJuO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSBpZiAoZmlsdGVyc1tpXSkgcmV0dXJuO1xuICAgICAgICAgIGdyb3VwcyA9IFtdLCBrID0gMDtcbiAgICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKV0gPVxuICAgICAgICAgIHVwZGF0ZSA9IHJlc2V0ID0gY3Jvc3NmaWx0ZXJfbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgZ3JlYXRlciB0aGFuIDEuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVNYW55KGZpbHRlck9uZSwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlck9uZSA9PT0gb25lIHx8IHJlc2V0TmVlZGVkKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIGc7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBhZGRlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoIShmaWx0ZXJzW2sgPSBhZGRlZFtpXV0gJiB6ZXJvKSkge1xuICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2tdXTtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtrXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSByZW1vdmVkIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMCwgbiA9IHJlbW92ZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKChmaWx0ZXJzW2sgPSByZW1vdmVkW2ldXSAmIHplcm8pID09PSBmaWx0ZXJPbmUpIHtcbiAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtrXV07XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgMS5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9uZShmaWx0ZXJPbmUsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXJPbmUgPT09IG9uZSB8fCByZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBnID0gZ3JvdXBzWzBdO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKCEoZmlsdGVyc1trID0gYWRkZWRbaV1dICYgemVybykpIHtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtrXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSByZW1vdmVkIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMCwgbiA9IHJlbW92ZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKChmaWx0ZXJzW2sgPSByZW1vdmVkW2ldXSAmIHplcm8pID09PSBmaWx0ZXJPbmUpIHtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VSZW1vdmUoZy52YWx1ZSwgZGF0YVtrXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZXMgZnJvbSBzY3JhdGNoLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgZ3JlYXRlciB0aGFuIDEuXG4gICAgICBmdW5jdGlvbiByZXNldE1hbnkoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZztcblxuICAgICAgICAvLyBSZXNldCBhbGwgZ3JvdXAgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgKytpKSB7XG4gICAgICAgICAgZ3JvdXBzW2ldLnZhbHVlID0gcmVkdWNlSW5pdGlhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGFueSBzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKCEoZmlsdGVyc1tpXSAmIHplcm8pKSB7XG4gICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhbaV1dO1xuICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZUFkZChnLnZhbHVlLCBkYXRhW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjb21wdXRlcyB0aGUgZ3JvdXAgcmVkdWNlIHZhbHVlcyBmcm9tIHNjcmF0Y2guXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIHRoZSBjYXJkaW5hbGl0eSBpcyAxLlxuICAgICAgZnVuY3Rpb24gcmVzZXRPbmUoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZyA9IGdyb3Vwc1swXTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgc2luZ2xldG9uIGdyb3VwIHZhbHVlcy5cbiAgICAgICAgZy52YWx1ZSA9IHJlZHVjZUluaXRpYWwoKTtcblxuICAgICAgICAvLyBBZGQgYW55IHNlbGVjdGVkIHJlY29yZHMuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoIShmaWx0ZXJzW2ldICYgemVybykpIHtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybnMgdGhlIGFycmF5IG9mIGdyb3VwIHZhbHVlcywgaW4gdGhlIGRpbWVuc2lvbidzIG5hdHVyYWwgb3JkZXIuXG4gICAgICBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICAgIGlmIChyZXNldE5lZWRlZCkgcmVzZXQoKSwgcmVzZXROZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB0b3AgSyBncm91cCB2YWx1ZXMsIGluIHJlZHVjZSBvcmRlci5cbiAgICAgIGZ1bmN0aW9uIHRvcChrKSB7XG4gICAgICAgIHZhciB0b3AgPSBzZWxlY3QoYWxsKCksIDAsIGdyb3Vwcy5sZW5ndGgsIGspO1xuICAgICAgICByZXR1cm4gaGVhcC5zb3J0KHRvcCwgMCwgdG9wLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHMgdGhlIHJlZHVjZSBiZWhhdmlvciBmb3IgdGhpcyBncm91cCB0byB1c2UgdGhlIHNwZWNpZmllZCBmdW5jdGlvbnMuXG4gICAgICAvLyBUaGlzIG1ldGhvZCBsYXppbHkgcmVjb21wdXRlcyB0aGUgcmVkdWNlIHZhbHVlcywgd2FpdGluZyB1bnRpbCBuZWVkZWQuXG4gICAgICBmdW5jdGlvbiByZWR1Y2UoYWRkLCByZW1vdmUsIGluaXRpYWwpIHtcbiAgICAgICAgcmVkdWNlQWRkID0gYWRkO1xuICAgICAgICByZWR1Y2VSZW1vdmUgPSByZW1vdmU7XG4gICAgICAgIHJlZHVjZUluaXRpYWwgPSBpbml0aWFsO1xuICAgICAgICByZXNldE5lZWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIHJlZHVjaW5nIGJ5IGNvdW50LlxuICAgICAgZnVuY3Rpb24gcmVkdWNlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiByZWR1Y2UoY3Jvc3NmaWx0ZXJfcmVkdWNlSW5jcmVtZW50LCBjcm9zc2ZpbHRlcl9yZWR1Y2VEZWNyZW1lbnQsIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgc3VtKHZhbHVlKS5cbiAgICAgIGZ1bmN0aW9uIHJlZHVjZVN1bSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVkdWNlKGNyb3NzZmlsdGVyX3JlZHVjZUFkZCh2YWx1ZSksIGNyb3NzZmlsdGVyX3JlZHVjZVN1YnRyYWN0KHZhbHVlKSwgY3Jvc3NmaWx0ZXJfemVybyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHMgdGhlIHJlZHVjZSBvcmRlciwgdXNpbmcgdGhlIHNwZWNpZmllZCBhY2Nlc3Nvci5cbiAgICAgIGZ1bmN0aW9uIG9yZGVyKHZhbHVlKSB7XG4gICAgICAgIHNlbGVjdCA9IGhlYXBzZWxlY3RfYnkodmFsdWVPZik7XG4gICAgICAgIGhlYXAgPSBoZWFwX2J5KHZhbHVlT2YpO1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZU9mKGQpIHsgcmV0dXJuIHZhbHVlKGQudmFsdWUpOyB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIG5hdHVyYWwgb3JkZXJpbmcgYnkgcmVkdWNlIHZhbHVlLlxuICAgICAgZnVuY3Rpb24gb3JkZXJOYXR1cmFsKCkge1xuICAgICAgICByZXR1cm4gb3JkZXIoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBjYXJkaW5hbGl0eSBvZiB0aGlzIGdyb3VwLCBpcnJlc3BlY3RpdmUgb2YgYW55IGZpbHRlcnMuXG4gICAgICBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGdyb3VwIGFuZCBhc3NvY2lhdGVkIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgIHZhciBpID0gZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKTtcbiAgICAgICAgaWYgKGkgPj0gMCkgZmlsdGVyTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgaSA9IGluZGV4TGlzdGVuZXJzLmluZGV4T2YoYWRkKTtcbiAgICAgICAgaWYgKGkgPj0gMCkgaW5kZXhMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBpID0gcmVtb3ZlRGF0YUxpc3RlbmVycy5pbmRleE9mKHJlbW92ZURhdGEpO1xuICAgICAgICBpZiAoaSA+PSAwKSByZW1vdmVEYXRhTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVkdWNlQ291bnQoKS5vcmRlck5hdHVyYWwoKTtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGEgc2luZ2xldG9uIGdyb3VwLlxuICAgIGZ1bmN0aW9uIGdyb3VwQWxsKCkge1xuICAgICAgdmFyIGcgPSBncm91cChjcm9zc2ZpbHRlcl9udWxsKSwgYWxsID0gZy5hbGw7XG4gICAgICBkZWxldGUgZy5hbGw7XG4gICAgICBkZWxldGUgZy50b3A7XG4gICAgICBkZWxldGUgZy5vcmRlcjtcbiAgICAgIGRlbGV0ZSBnLm9yZGVyTmF0dXJhbDtcbiAgICAgIGRlbGV0ZSBnLnNpemU7XG4gICAgICBnLnZhbHVlID0gZnVuY3Rpb24oKSB7IHJldHVybiBhbGwoKVswXS52YWx1ZTsgfTtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhpcyBkaW1lbnNpb24gYW5kIGFzc29jaWF0ZWQgZ3JvdXBzIGFuZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGRpbWVuc2lvbkdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7IGdyb3VwLmRpc3Bvc2UoKTsgfSk7XG4gICAgICB2YXIgaSA9IGRhdGFMaXN0ZW5lcnMuaW5kZXhPZihwcmVBZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID0gZGF0YUxpc3RlbmVycy5pbmRleE9mKHBvc3RBZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID0gcmVtb3ZlRGF0YUxpc3RlbmVycy5pbmRleE9mKHJlbW92ZURhdGEpO1xuICAgICAgaWYgKGkgPj0gMCkgcmVtb3ZlRGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBtICY9IHplcm87XG4gICAgICByZXR1cm4gZmlsdGVyQWxsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgfVxuXG4gIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBncm91cEFsbCBvbiBhIGR1bW15IGRpbWVuc2lvbi5cbiAgLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgb3B0aW1pemVkIHNpbmNlIGl0IGFsd2F5cyBoYXMgY2FyZGluYWxpdHkgMS5cbiAgZnVuY3Rpb24gZ3JvdXBBbGwoKSB7XG4gICAgdmFyIGdyb3VwID0ge1xuICAgICAgcmVkdWNlOiByZWR1Y2UsXG4gICAgICByZWR1Y2VDb3VudDogcmVkdWNlQ291bnQsXG4gICAgICByZWR1Y2VTdW06IHJlZHVjZVN1bSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGRpc3Bvc2U6IGRpc3Bvc2UsXG4gICAgICByZW1vdmU6IGRpc3Bvc2UgLy8gZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gICAgfTtcblxuICAgIHZhciByZWR1Y2VWYWx1ZSxcbiAgICAgICAgcmVkdWNlQWRkLFxuICAgICAgICByZWR1Y2VSZW1vdmUsXG4gICAgICAgIHJlZHVjZUluaXRpYWwsXG4gICAgICAgIHJlc2V0TmVlZGVkID0gdHJ1ZTtcblxuICAgIC8vIFRoZSBncm91cCBsaXN0ZW5zIHRvIHRoZSBjcm9zc2ZpbHRlciBmb3Igd2hlbiBhbnkgZGltZW5zaW9uIGNoYW5nZXMsIHNvXG4gICAgLy8gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSByZWR1Y2UgdmFsdWUuIEl0IG11c3QgYWxzbyBsaXN0ZW4gdG8gdGhlIHBhcmVudFxuICAgIC8vIGRpbWVuc2lvbiBmb3Igd2hlbiBkYXRhIGlzIGFkZGVkLlxuICAgIGZpbHRlckxpc3RlbmVycy5wdXNoKHVwZGF0ZSk7XG4gICAgZGF0YUxpc3RlbmVycy5wdXNoKGFkZCk7XG5cbiAgICAvLyBGb3IgY29uc2lzdGVuY3k7IGFjdHVhbGx5IGEgbm8tb3Agc2luY2UgcmVzZXROZWVkZWQgaXMgdHJ1ZS5cbiAgICBhZGQoZGF0YSwgMCwgbik7XG5cbiAgICAvLyBJbmNvcnBvcmF0ZXMgdGhlIHNwZWNpZmllZCBuZXcgdmFsdWVzIGludG8gdGhpcyBncm91cC5cbiAgICBmdW5jdGlvbiBhZGQobmV3RGF0YSwgbjApIHtcbiAgICAgIHZhciBpO1xuXG4gICAgICBpZiAocmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSBuMDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoIWZpbHRlcnNbaV0pIHtcbiAgICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZUFkZChyZWR1Y2VWYWx1ZSwgZGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmaWx0ZXJPbmUsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrLFxuICAgICAgICAgIG47XG5cbiAgICAgIGlmIChyZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBZGQgdGhlIGFkZGVkIHZhbHVlcy5cbiAgICAgIGZvciAoaSA9IDAsIG4gPSBhZGRlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJzW2sgPSBhZGRlZFtpXV0pIHtcbiAgICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZUFkZChyZWR1Y2VWYWx1ZSwgZGF0YVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSByZW1vdmVkIHZhbHVlcy5cbiAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoZmlsdGVyc1trID0gcmVtb3ZlZFtpXV0gPT09IGZpbHRlck9uZSkge1xuICAgICAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlUmVtb3ZlKHJlZHVjZVZhbHVlLCBkYXRhW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZSBmcm9tIHNjcmF0Y2guXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VJbml0aWFsKCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJzW2ldKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgcmVkdWNlIGJlaGF2aW9yIGZvciB0aGlzIGdyb3VwIHRvIHVzZSB0aGUgc3BlY2lmaWVkIGZ1bmN0aW9ucy5cbiAgICAvLyBUaGlzIG1ldGhvZCBsYXppbHkgcmVjb21wdXRlcyB0aGUgcmVkdWNlIHZhbHVlLCB3YWl0aW5nIHVudGlsIG5lZWRlZC5cbiAgICBmdW5jdGlvbiByZWR1Y2UoYWRkLCByZW1vdmUsIGluaXRpYWwpIHtcbiAgICAgIHJlZHVjZUFkZCA9IGFkZDtcbiAgICAgIHJlZHVjZVJlbW92ZSA9IHJlbW92ZTtcbiAgICAgIHJlZHVjZUluaXRpYWwgPSBpbml0aWFsO1xuICAgICAgcmVzZXROZWVkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cblxuICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBjb3VudC5cbiAgICBmdW5jdGlvbiByZWR1Y2VDb3VudCgpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoY3Jvc3NmaWx0ZXJfcmVkdWNlSW5jcmVtZW50LCBjcm9zc2ZpbHRlcl9yZWR1Y2VEZWNyZW1lbnQsIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgIH1cblxuICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBzdW0odmFsdWUpLlxuICAgIGZ1bmN0aW9uIHJlZHVjZVN1bSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlZHVjZShjcm9zc2ZpbHRlcl9yZWR1Y2VBZGQodmFsdWUpLCBjcm9zc2ZpbHRlcl9yZWR1Y2VTdWJ0cmFjdCh2YWx1ZSksIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGNvbXB1dGVkIHJlZHVjZSB2YWx1ZS5cbiAgICBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIGlmIChyZXNldE5lZWRlZCkgcmVzZXQoKSwgcmVzZXROZWVkZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiByZWR1Y2VWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoaXMgZ3JvdXAgYW5kIGFzc29jaWF0ZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB2YXIgaSA9IGZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSk7XG4gICAgICBpZiAoaSA+PSAwKSBmaWx0ZXJMaXN0ZW5lcnMuc3BsaWNlKGkpO1xuICAgICAgaSA9IGRhdGFMaXN0ZW5lcnMuaW5kZXhPZihhZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSk7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZUNvdW50KCk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGlzIGNyb3NzZmlsdGVyLCBpcnJlc3BlY3RpdmUgb2YgYW55IGZpbHRlcnMuXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIG47XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyBhZGQoYXJndW1lbnRzWzBdKVxuICAgICAgOiBjcm9zc2ZpbHRlcjtcbn1cblxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBzaXplIG4sIGJpZyBlbm91Z2ggdG8gc3RvcmUgaWRzIHVwIHRvIG0uXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9pbmRleChuLCBtKSB7XG4gIHJldHVybiAobSA8IDB4MTAxXG4gICAgICA/IGNyb3NzZmlsdGVyX2FycmF5OCA6IG0gPCAweDEwMDAxXG4gICAgICA/IGNyb3NzZmlsdGVyX2FycmF5MTZcbiAgICAgIDogY3Jvc3NmaWx0ZXJfYXJyYXkzMikobik7XG59XG5cbi8vIENvbnN0cnVjdHMgYSBuZXcgYXJyYXkgb2Ygc2l6ZSBuLCB3aXRoIHNlcXVlbnRpYWwgdmFsdWVzIGZyb20gMCB0byBuIC0gMS5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JhbmdlKG4pIHtcbiAgdmFyIHJhbmdlID0gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbik7XG4gIGZvciAodmFyIGkgPSAtMTsgKytpIDwgbjspIHJhbmdlW2ldID0gaTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9jYXBhY2l0eSh3KSB7XG4gIHJldHVybiB3ID09PSA4XG4gICAgICA/IDB4MTAwIDogdyA9PT0gMTZcbiAgICAgID8gMHgxMDAwMFxuICAgICAgOiAweDEwMDAwMDAwMDtcbn1cbn0pKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIvY3Jvc3NmaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY3Jvc3NmaWx0ZXJcIikuY3Jvc3NmaWx0ZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGNyb3NzZmlsdGVyX2FycmF5OCA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50OEFycmF5KG4pOyB9O1xuICBjcm9zc2ZpbHRlcl9hcnJheTE2ID0gZnVuY3Rpb24obikgeyByZXR1cm4gbmV3IFVpbnQxNkFycmF5KG4pOyB9O1xuICBjcm9zc2ZpbHRlcl9hcnJheTMyID0gZnVuY3Rpb24obikgeyByZXR1cm4gbmV3IFVpbnQzMkFycmF5KG4pOyB9O1xuXG4gIGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW4gPSBmdW5jdGlvbihhcnJheSwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiBhcnJheTtcbiAgICB2YXIgY29weSA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuICAgIGNvcHkuc2V0KGFycmF5KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuID0gZnVuY3Rpb24oYXJyYXksIHdpZHRoKSB7XG4gICAgdmFyIGNvcHk7XG4gICAgc3dpdGNoICh3aWR0aCkge1xuICAgICAgY2FzZSAxNjogY29weSA9IGNyb3NzZmlsdGVyX2FycmF5MTYoYXJyYXkubGVuZ3RoKTsgYnJlYWs7XG4gICAgICBjYXNlIDMyOiBjb3B5ID0gY3Jvc3NmaWx0ZXJfYXJyYXkzMihhcnJheS5sZW5ndGgpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYXJyYXkgd2lkdGghXCIpO1xuICAgIH1cbiAgICBjb3B5LnNldChhcnJheSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZChuKSB7XG4gIHZhciBhcnJheSA9IG5ldyBBcnJheShuKSwgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgbikgYXJyYXlbaV0gPSAwO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW5VbnR5cGVkKGFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIG4gPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChuIDwgbGVuZ3RoKSBhcnJheVtuKytdID0gMDtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuVW50eXBlZChhcnJheSwgd2lkdGgpIHtcbiAgaWYgKHdpZHRoID4gMzIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYXJyYXkgd2lkdGghXCIpO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbi8vIEFuIGFyYml0cmFyaWx5LXdpZGUgYXJyYXkgb2YgYml0bWFza3NcbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2JpdGFycmF5KG4pIHtcbiAgdGhpcy5sZW5ndGggPSBuO1xuICB0aGlzLnN1YmFycmF5cyA9IDE7XG4gIHRoaXMud2lkdGggPSA4O1xuICB0aGlzLm1hc2tzID0ge1xuICAgIDA6IDBcbiAgfVxuXG4gIHRoaXNbMF0gPSBjcm9zc2ZpbHRlcl9hcnJheTgobik7XG59XG5cbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS5sZW5ndGhlbiA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIHRoaXNbaV0gPSBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuKHRoaXNbaV0sIG4pO1xuICB9XG4gIHRoaXMubGVuZ3RoID0gbjtcbn07XG5cbi8vIFJlc2VydmUgYSBuZXcgYml0IGluZGV4IGluIHRoZSBhcnJheSwgcmV0dXJucyB7b2Zmc2V0LCBvbmV9XG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtLCB3LCBvbmUsIGksIGxlbjtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgbSA9IHRoaXMubWFza3NbaV07XG4gICAgdyA9IHRoaXMud2lkdGggLSAoMzIgKiBpKTtcbiAgICBvbmUgPSB+bSAmIC1+bTtcblxuICAgIGlmICh3ID49IDMyICYmICFvbmUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh3IDwgMzIgJiYgKG9uZSAmICgxIDw8IHcpKSkge1xuICAgICAgLy8gd2lkZW4gdGhpcyBzdWJhcnJheVxuICAgICAgdGhpc1tpXSA9IGNyb3NzZmlsdGVyX2FycmF5V2lkZW4odGhpc1tpXSwgdyA8PD0gMSk7XG4gICAgICB0aGlzLndpZHRoID0gMzIgKiBpICsgdztcbiAgICB9XG5cbiAgICB0aGlzLm1hc2tzW2ldIHw9IG9uZTtcblxuICAgIHJldHVybiB7XG4gICAgICBvZmZzZXQ6IGksXG4gICAgICBvbmU6IG9uZVxuICAgIH07XG4gIH1cblxuICAvLyBhZGQgYSBuZXcgc3ViYXJyYXlcbiAgdGhpc1t0aGlzLnN1YmFycmF5c10gPSBjcm9zc2ZpbHRlcl9hcnJheTgodGhpcy5sZW5ndGgpO1xuICB0aGlzLm1hc2tzW3RoaXMuc3ViYXJyYXlzXSA9IDE7XG4gIHRoaXMud2lkdGggKz0gODtcbiAgcmV0dXJuIHtcbiAgICBvZmZzZXQ6IHRoaXMuc3ViYXJyYXlzKyssXG4gICAgb25lOiAxXG4gIH07XG59O1xuXG4vLyBDb3B5IHJlY29yZCBmcm9tIGluZGV4IHNyYyB0byBpbmRleCBkZXN0XG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uKGRlc3QsIHNyYykge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgdGhpc1tpXVtkZXN0XSA9IHRoaXNbaV1bc3JjXTtcbiAgfVxufTtcblxuLy8gVHJ1bmNhdGUgdGhlIGFycmF5IHRvIHRoZSBnaXZlbiBsZW5ndGhcbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS50cnVuY2F0ZSA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIGZvciAodmFyIGogPSB0aGlzLmxlbmd0aCAtIDE7IGogPj0gbjsgai0tKSB7XG4gICAgICB0aGlzW2ldW2pdID0gMDtcbiAgICB9XG4gICAgdGhpc1tpXS5sZW5ndGggPSBuO1xuICB9XG4gIHRoaXMubGVuZ3RoID0gbjtcbn07XG5cbi8vIENoZWNrcyB0aGF0IGFsbCBiaXRzIGZvciB0aGUgZ2l2ZW4gaW5kZXggYXJlIDBcbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24obikge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNbaV1bbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBDaGVja3MgdGhhdCBhbGwgYml0cyBmb3IgdGhlIGdpdmVuIGluZGV4IGFyZSAwIGV4Y2VwdCBmb3IgcG9zc2libHkgb25lXG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUuemVyb0V4Y2VwdCA9IGZ1bmN0aW9uKG4sIG9mZnNldCwgemVybykge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGkgPT09IG9mZnNldCA/IHRoaXNbaV1bbl0gJiB6ZXJvIDogdGhpc1tpXVtuXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIENoZWNrcyB0aGF0IGFsbCBiaXRzIGZvciB0aGUgZ2l2ZW4gaW5kZXogYXJlIDAgZXhjZXB0IGZvciB0aGUgc3BlY2lmaWVkIG1hc2suXG4vLyBUaGUgbWFzayBzaG91bGQgYmUgYW4gYXJyYXkgb2YgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgZmlsdGVyIHN1YmFycmF5cyB3aWR0aC5cbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS56ZXJvRXhjZXB0TWFzayA9IGZ1bmN0aW9uKG4sIG1hc2spIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzW2ldW25dICYgbWFza1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQ2hlY2tzIHRoYXQgb25seSB0aGUgc3BlY2lmaWVkIGJpdCBpcyBzZXQgZm9yIHRoZSBnaXZlbiBpbmRleFxuY3Jvc3NmaWx0ZXJfYml0YXJyYXkucHJvdG90eXBlLm9ubHkgPSBmdW5jdGlvbihuLCBvZmZzZXQsIG9uZSkge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNbaV1bbl0gIT0gKGkgPT09IG9mZnNldCA/IG9uZSA6IDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gQ2hlY2tzIHRoYXQgb25seSB0aGUgc3BlY2lmaWVkIGJpdCBpcyBzZXQgZm9yIHRoZSBnaXZlbiBpbmRleCBleGNlcHQgZm9yIHBvc3NpYmx5IG9uZSBvdGhlclxuY3Jvc3NmaWx0ZXJfYml0YXJyYXkucHJvdG90eXBlLm9ubHlFeGNlcHQgPSBmdW5jdGlvbihuLCBvZmZzZXQsIHplcm8sIG9ubHlPZmZzZXQsIG9ubHlPbmUpIHtcbiAgdmFyIG1hc2s7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuc3ViYXJyYXlzOyBpIDwgbGVuOyArK2kpIHtcbiAgICBtYXNrID0gdGhpc1tpXVtuXTtcbiAgICBpZiAoaSA9PT0gb2Zmc2V0KVxuICAgICAgbWFzayAmPSB6ZXJvO1xuICAgIGlmIChtYXNrICE9IChpID09PSBvbmx5T2Zmc2V0ID8gb25seU9uZSA6IDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFycmF5ODogY3Jvc3NmaWx0ZXJfYXJyYXlVbnR5cGVkLFxuICBhcnJheTE2OiBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQsXG4gIGFycmF5MzI6IGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZCxcbiAgYXJyYXlMZW5ndGhlbjogY3Jvc3NmaWx0ZXJfYXJyYXlMZW5ndGhlblVudHlwZWQsXG4gIGFycmF5V2lkZW46IGNyb3NzZmlsdGVyX2FycmF5V2lkZW5VbnR5cGVkLFxuICBiaXRhcnJheTogY3Jvc3NmaWx0ZXJfYml0YXJyYXlcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgY3Jvc3NmaWx0ZXJfaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbmZ1bmN0aW9uIGJpc2VjdF9ieShmKSB7XG5cbiAgLy8gTG9jYXRlIHRoZSBpbnNlcnRpb24gcG9pbnQgZm9yIHggaW4gYSB0byBtYWludGFpbiBzb3J0ZWQgb3JkZXIuIFRoZVxuICAvLyBhcmd1bWVudHMgbG8gYW5kIGhpIG1heSBiZSB1c2VkIHRvIHNwZWNpZnkgYSBzdWJzZXQgb2YgdGhlIGFycmF5IHdoaWNoXG4gIC8vIHNob3VsZCBiZSBjb25zaWRlcmVkOyBieSBkZWZhdWx0IHRoZSBlbnRpcmUgYXJyYXkgaXMgdXNlZC4gSWYgeCBpcyBhbHJlYWR5XG4gIC8vIHByZXNlbnQgaW4gYSwgdGhlIGluc2VydGlvbiBwb2ludCB3aWxsIGJlIGJlZm9yZSAodG8gdGhlIGxlZnQgb2YpIGFueVxuICAvLyBleGlzdGluZyBlbnRyaWVzLiBUaGUgcmV0dXJuIHZhbHVlIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdGhlIGZpcnN0XG4gIC8vIGFyZ3VtZW50IHRvIGBhcnJheS5zcGxpY2VgIGFzc3VtaW5nIHRoYXQgYSBpcyBhbHJlYWR5IHNvcnRlZC5cbiAgLy9cbiAgLy8gVGhlIHJldHVybmVkIGluc2VydGlvbiBwb2ludCBpIHBhcnRpdGlvbnMgdGhlIGFycmF5IGEgaW50byB0d28gaGFsdmVzIHNvXG4gIC8vIHRoYXQgYWxsIHYgPCB4IGZvciB2IGluIGFbbG86aV0gZm9yIHRoZSBsZWZ0IHNpZGUgYW5kIGFsbCB2ID49IHggZm9yIHYgaW5cbiAgLy8gYVtpOmhpXSBmb3IgdGhlIHJpZ2h0IHNpZGUuXG4gIGZ1bmN0aW9uIGJpc2VjdExlZnQoYSwgeCwgbG8sIGhpKSB7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgaWYgKGYoYVttaWRdKSA8IHgpIGxvID0gbWlkICsgMTtcbiAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gYmlzZWN0TGVmdCwgYnV0IHJldHVybnMgYW4gaW5zZXJ0aW9uIHBvaW50IHdoaWNoIGNvbWVzIGFmdGVyICh0b1xuICAvLyB0aGUgcmlnaHQgb2YpIGFueSBleGlzdGluZyBlbnRyaWVzIG9mIHggaW4gYS5cbiAgLy9cbiAgLy8gVGhlIHJldHVybmVkIGluc2VydGlvbiBwb2ludCBpIHBhcnRpdGlvbnMgdGhlIGFycmF5IGludG8gdHdvIGhhbHZlcyBzbyB0aGF0XG4gIC8vIGFsbCB2IDw9IHggZm9yIHYgaW4gYVtsbzppXSBmb3IgdGhlIGxlZnQgc2lkZSBhbmQgYWxsIHYgPiB4IGZvciB2IGluXG4gIC8vIGFbaTpoaV0gZm9yIHRoZSByaWdodCBzaWRlLlxuICBmdW5jdGlvbiBiaXNlY3RSaWdodChhLCB4LCBsbywgaGkpIHtcbiAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICBpZiAoeCA8IGYoYVttaWRdKSkgaGkgPSBtaWQ7XG4gICAgICBlbHNlIGxvID0gbWlkICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgYmlzZWN0UmlnaHQucmlnaHQgPSBiaXNlY3RSaWdodDtcbiAgYmlzZWN0UmlnaHQubGVmdCA9IGJpc2VjdExlZnQ7XG4gIHJldHVybiBiaXNlY3RSaWdodDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaXNlY3RfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xubW9kdWxlLmV4cG9ydHMuYnkgPSBiaXNlY3RfYnk7IC8vIGFzc2lnbiB0aGUgcmF3IGZ1bmN0aW9uIHRvIHRoZSBleHBvcnQgYXMgd2VsbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9iaXNlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciB4ZmlsdGVyQXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG52YXIgeGZpbHRlckZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVyJyk7XG52YXIgY3Jvc3NmaWx0ZXJfaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG52YXIgY3Jvc3NmaWx0ZXJfbnVsbCA9IHJlcXVpcmUoJy4vbnVsbCcpO1xudmFyIGNyb3NzZmlsdGVyX3plcm8gPSByZXF1aXJlKCcuL3plcm8nKTtcbnZhciB4ZmlsdGVySGVhcHNlbGVjdCA9IHJlcXVpcmUoJy4vaGVhcHNlbGVjdCcpO1xudmFyIHhmaWx0ZXJIZWFwID0gcmVxdWlyZSgnLi9oZWFwJyk7XG52YXIgYmlzZWN0ID0gcmVxdWlyZSgnLi9iaXNlY3QnKTtcbnZhciBpbnNlcnRpb25zb3J0ID0gcmVxdWlyZSgnLi9pbnNlcnRpb25zb3J0Jyk7XG52YXIgcGVybXV0ZSA9IHJlcXVpcmUoJy4vcGVybXV0ZScpO1xudmFyIHF1aWNrc29ydCA9IHJlcXVpcmUoJy4vcXVpY2tzb3J0Jyk7XG52YXIgeGZpbHRlclJlZHVjZSA9IHJlcXVpcmUoJy4vcmVkdWNlJyk7XG52YXIgcGFja2FnZUpzb24gPSByZXF1aXJlKCcuLy4uL3BhY2thZ2UuanNvbicpOyAvLyByZXF1aXJlIG93biBwYWNrYWdlLmpzb24gZm9yIHRoZSB2ZXJzaW9uIGZpZWxkXG52YXIgcmVzdWx0ID0gcmVxdWlyZSgnbG9kYXNoLnJlc3VsdCcpO1xuLy8gZXhwb3NlIEFQSSBleHBvcnRzXG5leHBvcnRzLmNyb3NzZmlsdGVyID0gY3Jvc3NmaWx0ZXI7XG5leHBvcnRzLmNyb3NzZmlsdGVyLmhlYXAgPSB4ZmlsdGVySGVhcDtcbmV4cG9ydHMuY3Jvc3NmaWx0ZXIuaGVhcHNlbGVjdCA9IHhmaWx0ZXJIZWFwc2VsZWN0O1xuZXhwb3J0cy5jcm9zc2ZpbHRlci5iaXNlY3QgPSBiaXNlY3Q7XG5leHBvcnRzLmNyb3NzZmlsdGVyLmluc2VydGlvbnNvcnQgPSBpbnNlcnRpb25zb3J0O1xuZXhwb3J0cy5jcm9zc2ZpbHRlci5wZXJtdXRlID0gcGVybXV0ZTtcbmV4cG9ydHMuY3Jvc3NmaWx0ZXIucXVpY2tzb3J0ID0gcXVpY2tzb3J0O1xuZXhwb3J0cy5jcm9zc2ZpbHRlci52ZXJzaW9uID0gcGFja2FnZUpzb24udmVyc2lvbjsgLy8gcGxlYXNlIG5vdGUgdXNlIG9mIFwicGFja2FnZS1qc29uLXZlcnNpb25pZnlcIiB0cmFuc2Zvcm1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXIoKSB7XG4gIHZhciBjcm9zc2ZpbHRlciA9IHtcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmU6IHJlbW92ZURhdGEsXG4gICAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG4gICAgZ3JvdXBBbGw6IGdyb3VwQWxsLFxuICAgIHNpemU6IHNpemUsXG4gICAgYWxsOiBhbGwsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIGlzRWxlbWVudEZpbHRlcmVkOiBpc0VsZW1lbnRGaWx0ZXJlZCxcbiAgfTtcblxuICB2YXIgZGF0YSA9IFtdLCAvLyB0aGUgcmVjb3Jkc1xuICAgICAgbiA9IDAsIC8vIHRoZSBudW1iZXIgb2YgcmVjb3JkczsgZGF0YS5sZW5ndGhcbiAgICAgIGZpbHRlcnMsIC8vIDEgaXMgZmlsdGVyZWQgb3V0XG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMgPSBbXSwgLy8gd2hlbiB0aGUgZmlsdGVycyBjaGFuZ2VcbiAgICAgIGRhdGFMaXN0ZW5lcnMgPSBbXSwgLy8gd2hlbiBkYXRhIGlzIGFkZGVkXG4gICAgICByZW1vdmVEYXRhTGlzdGVuZXJzID0gW10sIC8vIHdoZW4gZGF0YSBpcyByZW1vdmVkXG4gICAgICBjYWxsYmFja3MgPSBbXTtcblxuICBmaWx0ZXJzID0gbmV3IHhmaWx0ZXJBcnJheS5iaXRhcnJheSgwKTtcblxuICAvLyBBZGRzIHRoZSBzcGVjaWZpZWQgbmV3IHJlY29yZHMgdG8gdGhpcyBjcm9zc2ZpbHRlci5cbiAgZnVuY3Rpb24gYWRkKG5ld0RhdGEpIHtcbiAgICB2YXIgbjAgPSBuLFxuICAgICAgICBuMSA9IG5ld0RhdGEubGVuZ3RoO1xuXG4gICAgLy8gSWYgdGhlcmUncyBhY3R1YWxseSBuZXcgZGF0YSB0byBhZGTigKZcbiAgICAvLyBNZXJnZSB0aGUgbmV3IGRhdGEgaW50byB0aGUgZXhpc3RpbmcgZGF0YS5cbiAgICAvLyBMZW5ndGhlbiB0aGUgZmlsdGVyIGJpdHNldCB0byBoYW5kbGUgdGhlIG5ldyByZWNvcmRzLlxuICAgIC8vIE5vdGlmeSBsaXN0ZW5lcnMgKGRpbWVuc2lvbnMgYW5kIGdyb3VwcykgdGhhdCBuZXcgZGF0YSBpcyBhdmFpbGFibGUuXG4gICAgaWYgKG4xKSB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQobmV3RGF0YSk7XG4gICAgICBmaWx0ZXJzLmxlbmd0aGVuKG4gKz0gbjEpO1xuICAgICAgZGF0YUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChuZXdEYXRhLCBuMCwgbjEpOyB9KTtcbiAgICAgIHRyaWdnZXJPbkNoYW5nZSgnZGF0YUFkZGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyb3NzZmlsdGVyO1xuICB9XG5cbiAgLy8gUmVtb3ZlcyBhbGwgcmVjb3JkcyB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IGZpbHRlcnMuXG4gIGZ1bmN0aW9uIHJlbW92ZURhdGEoKSB7XG4gICAgdmFyIG5ld0luZGV4ID0gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbiksXG4gICAgICAgIHJlbW92ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICghZmlsdGVycy56ZXJvKGkpKSBuZXdJbmRleFtpXSA9IGorKztcbiAgICAgIGVsc2UgcmVtb3ZlZC5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbWF0Y2hpbmcgcmVjb3JkcyBmcm9tIGdyb3Vwcy5cbiAgICBmaWx0ZXJMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwoLTEsIC0xLCBbXSwgcmVtb3ZlZCwgdHJ1ZSk7IH0pO1xuXG4gICAgLy8gVXBkYXRlIGluZGV4ZXMuXG4gICAgcmVtb3ZlRGF0YUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChuZXdJbmRleCk7IH0pO1xuXG4gICAgLy8gUmVtb3ZlIG9sZCBmaWx0ZXJzIGFuZCBkYXRhIGJ5IG92ZXJ3cml0aW5nLlxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCFmaWx0ZXJzLnplcm8oaSkpIHtcbiAgICAgICAgaWYgKGkgIT09IGopIGZpbHRlcnMuY29weShqLCBpKSwgZGF0YVtqXSA9IGRhdGFbaV07XG4gICAgICAgICsrajtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhLmxlbmd0aCA9IG4gPSBqO1xuICAgIGZpbHRlcnMudHJ1bmNhdGUoaik7XG4gICAgdHJpZ2dlck9uQ2hhbmdlKCdkYXRhUmVtb3ZlZCcpO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIGRhdGEgZWxlbWVudCBhdCBpbmRleCBpIGlzIGZpbHRlcmVkIElOLlxuICAvLyBPcHRpb25hbGx5LCBpZ25vcmUgdGhlIGZpbHRlcnMgb2YgYW55IGRpbWVuc2lvbnMgaW4gdGhlIGlnbm9yZV9kaW1lbnNpb25zIGxpc3QuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudEZpbHRlcmVkKGksIGlnbm9yZV9kaW1lbnNpb25zKSB7XG4gICAgdmFyIG4sXG4gICAgICAgIGQsXG4gICAgICAgIGlkLFxuICAgICAgICBsZW4sXG4gICAgICAgIG1hc2sgPSBBcnJheShmaWx0ZXJzLnN1YmFycmF5cyk7XG4gICAgZm9yIChuID0gMDsgbiA8IGZpbHRlcnMuc3ViYXJyYXlzOyBuKyspIHsgbWFza1tuXSA9IH4wOyB9XG4gICAgaWYgKGlnbm9yZV9kaW1lbnNpb25zKSB7XG4gICAgICBmb3IgKGQgPSAwLCBsZW4gPSBpZ25vcmVfZGltZW5zaW9ucy5sZW5ndGg7IGQgPCBsZW47IGQrKykge1xuICAgICAgICAvLyBUaGUgdG9wIGJpdHMgb2YgdGhlIElEIGFyZSB0aGUgc3ViYXJyYXkgb2Zmc2V0IGFuZCB0aGUgbG93ZXIgYml0cyBhcmUgdGhlIGJpdFxuICAgICAgICAvLyBvZmZzZXQgb2YgdGhlIFwib25lXCIgbWFzay5cbiAgICAgICAgaWQgPSBpZ25vcmVfZGltZW5zaW9uc1tkXS5pZCgpO1xuICAgICAgICBtYXNrW2lkID4+IDddICY9IH4oMHgxIDw8IChpZCAmIDB4M2YpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcnMuemVyb0V4Y2VwdE1hc2soaSxtYXNrKTtcbiAgfVxuXG4gIC8vIEFkZHMgYSBuZXcgZGltZW5zaW9uIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZSBhY2Nlc3NvciBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gZGltZW5zaW9uKHZhbHVlLCBpdGVyYWJsZSkge1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBhY2Nlc3NvclBhdGggPSB2YWx1ZTtcbiAgICAgIHZhbHVlID0gZnVuY3Rpb24oZCkgeyByZXR1cm4gcmVzdWx0KGQsIGFjY2Vzc29yUGF0aCk7IH07XG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHtcbiAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgZmlsdGVyRXhhY3Q6IGZpbHRlckV4YWN0LFxuICAgICAgZmlsdGVyUmFuZ2U6IGZpbHRlclJhbmdlLFxuICAgICAgZmlsdGVyRnVuY3Rpb246IGZpbHRlckZ1bmN0aW9uLFxuICAgICAgZmlsdGVyQWxsOiBmaWx0ZXJBbGwsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgZ3JvdXBBbGw6IGdyb3VwQWxsLFxuICAgICAgZGlzcG9zZTogZGlzcG9zZSxcbiAgICAgIHJlbW92ZTogZGlzcG9zZSwgLy8gZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gICAgICBhY2Nlc3NvcjogdmFsdWUsXG4gICAgICBpZDogZnVuY3Rpb24oKSB7IHJldHVybiBpZDsgfVxuICAgIH07XG5cbiAgICB2YXIgb25lLCAvLyBsb3dlc3QgdW5zZXQgYml0IGFzIG1hc2ssIGUuZy4sIDAwMDAxMDAwXG4gICAgICAgIHplcm8sIC8vIGludmVydGVkIG9uZSwgZS5nLiwgMTExMTAxMTFcbiAgICAgICAgb2Zmc2V0LCAvLyBvZmZzZXQgaW50byB0aGUgZmlsdGVycyBhcnJheXNcbiAgICAgICAgaWQsIC8vIHVuaXF1ZSBJRCBmb3IgdGhpcyBkaW1lbnNpb24gKHJldXNlZCB3aGVuIGRpbWVuc2lvbnMgYXJlIGRpc3Bvc2VkKVxuICAgICAgICB2YWx1ZXMsIC8vIHNvcnRlZCwgY2FjaGVkIGFycmF5XG4gICAgICAgIGluZGV4LCAvLyB2YWx1ZSByYW5rIOKGpiBvYmplY3QgaWRcbiAgICAgICAgb2xkVmFsdWVzLCAvLyB0ZW1wb3JhcnkgYXJyYXkgc3RvcmluZyBwcmV2aW91c2x5LWFkZGVkIHZhbHVlc1xuICAgICAgICBvbGRJbmRleCwgLy8gdGVtcG9yYXJ5IGFycmF5IHN0b3JpbmcgcHJldmlvdXNseS1hZGRlZCBpbmRleFxuICAgICAgICBuZXdWYWx1ZXMsIC8vIHRlbXBvcmFyeSBhcnJheSBzdG9yaW5nIG5ld2x5LWFkZGVkIHZhbHVlc1xuICAgICAgICBuZXdJbmRleCwgLy8gdGVtcG9yYXJ5IGFycmF5IHN0b3JpbmcgbmV3bHktYWRkZWQgaW5kZXhcbiAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudCxcbiAgICAgICAgbmV3SXRlcmFibGVzSW5kZXhDb3VudCxcbiAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMsXG4gICAgICAgIG5ld0l0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzLFxuICAgICAgICBvbGRJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1cyxcbiAgICAgICAgaXRlcmFibGVzRW1wdHlSb3dzLFxuICAgICAgICBzb3J0ID0gcXVpY2tzb3J0LmJ5KGZ1bmN0aW9uKGkpIHsgcmV0dXJuIG5ld1ZhbHVlc1tpXTsgfSksXG4gICAgICAgIHJlZmlsdGVyID0geGZpbHRlckZpbHRlci5maWx0ZXJBbGwsIC8vIGZvciByZWNvbXB1dGluZyBmaWx0ZXJcbiAgICAgICAgcmVmaWx0ZXJGdW5jdGlvbiwgLy8gdGhlIGN1c3RvbSBmaWx0ZXIgZnVuY3Rpb24gaW4gdXNlXG4gICAgICAgIGluZGV4TGlzdGVuZXJzID0gW10sIC8vIHdoZW4gZGF0YSBpcyBhZGRlZFxuICAgICAgICBkaW1lbnNpb25Hcm91cHMgPSBbXSxcbiAgICAgICAgbG8wID0gMCxcbiAgICAgICAgaGkwID0gMCxcbiAgICAgICAgdCA9IDA7XG5cbiAgICAvLyBVcGRhdGluZyBhIGRpbWVuc2lvbiBpcyBhIHR3by1zdGFnZSBwcm9jZXNzLiBGaXJzdCwgd2UgbXVzdCB1cGRhdGUgdGhlXG4gICAgLy8gYXNzb2NpYXRlZCBmaWx0ZXJzIGZvciB0aGUgbmV3bHktYWRkZWQgcmVjb3Jkcy4gT25jZSBhbGwgZGltZW5zaW9ucyBoYXZlXG4gICAgLy8gdXBkYXRlZCB0aGVpciBmaWx0ZXJzLCB0aGUgZ3JvdXBzIGFyZSBub3RpZmllZCB0byB1cGRhdGUuXG4gICAgZGF0YUxpc3RlbmVycy51bnNoaWZ0KHByZUFkZCk7XG4gICAgZGF0YUxpc3RlbmVycy5wdXNoKHBvc3RBZGQpO1xuXG4gICAgcmVtb3ZlRGF0YUxpc3RlbmVycy5wdXNoKHJlbW92ZURhdGEpO1xuXG4gICAgLy8gQWRkIGEgbmV3IGRpbWVuc2lvbiBpbiB0aGUgZmlsdGVyIGJpdG1hcCBhbmQgc3RvcmUgdGhlIG9mZnNldCBhbmQgYml0bWFzay5cbiAgICB2YXIgdG1wID0gZmlsdGVycy5hZGQoKTtcbiAgICBvZmZzZXQgPSB0bXAub2Zmc2V0O1xuICAgIG9uZSA9IHRtcC5vbmU7XG4gICAgemVybyA9IH5vbmU7XG5cbiAgICAvLyBDcmVhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBkaW1lbnNpb25cbiAgICAvLyBJRHMgd2lsbCBiZSByZS11c2VkIGlmIGRpbWVuc2lvbnMgYXJlIGRpc3Bvc2VkLlxuICAgIC8vIEZvciBpbnRlcm5hbCB1c2UgdGhlIElEIGlzIHRoZSBzdWJhcnJheSBvZmZzZXQgc2hpZnRlZCBsZWZ0IDcgYml0cyBvcidkIHdpdGggdGhlXG4gICAgLy8gYml0IG9mZnNldCBvZiB0aGUgc2V0IGJpdCBpbiB0aGUgZGltZW5zaW9uJ3MgXCJvbmVcIiBtYXNrLlxuICAgIGlkID0gKG9mZnNldCA8PCA3KSB8IChNYXRoLmxvZyhvbmUpIC8gTWF0aC5sb2coMikpO1xuXG4gICAgcHJlQWRkKGRhdGEsIDAsIG4pO1xuICAgIHBvc3RBZGQoZGF0YSwgMCwgbik7XG5cbiAgICAvLyBJbmNvcnBvcmF0ZXMgdGhlIHNwZWNpZmllZCBuZXcgcmVjb3JkcyBpbnRvIHRoaXMgZGltZW5zaW9uLlxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIGZpbHRlcnMsIHZhbHVlcywgYW5kIGluZGV4LlxuICAgIGZ1bmN0aW9uIHByZUFkZChuZXdEYXRhLCBuMCwgbjEpIHtcblxuICAgICAgaWYgKGl0ZXJhYmxlKXtcbiAgICAgICAgLy8gQ291bnQgYWxsIHRoZSB2YWx1ZXNcbiAgICAgICAgdCA9IDA7XG4gICAgICAgIGogPSAwO1xuICAgICAgICBrID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3IoaiA9IDAsIGsgPSB2YWx1ZShuZXdEYXRhW2ldKTsgaiA8IGsubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXdWYWx1ZXMgPSBbXTtcbiAgICAgICAgbmV3SXRlcmFibGVzSW5kZXhDb3VudCA9IGNyb3NzZmlsdGVyX3JhbmdlKG5ld0RhdGEubGVuZ3RoKTtcbiAgICAgICAgbmV3SXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMgPSBjcm9zc2ZpbHRlcl9pbmRleCh0LDEpO1xuICAgICAgICBpdGVyYWJsZXNFbXB0eVJvd3MgPSBbXTtcbiAgICAgICAgdmFyIHVuc29ydGVkSW5kZXggPSBjcm9zc2ZpbHRlcl9yYW5nZSh0KTtcblxuICAgICAgICBmb3IgKGwgPSAwLCBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBrID0gdmFsdWUobmV3RGF0YVtpXSlcbiAgICAgICAgICAvL1xuICAgICAgICAgIGlmKCFrLmxlbmd0aCl7XG4gICAgICAgICAgICBuZXdJdGVyYWJsZXNJbmRleENvdW50W2ldID0gMDtcbiAgICAgICAgICAgIGl0ZXJhYmxlc0VtcHR5Um93cy5wdXNoKGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0l0ZXJhYmxlc0luZGV4Q291bnRbaV0gPSBrLmxlbmd0aFxuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMucHVzaChrW2pdKTtcbiAgICAgICAgICAgIHVuc29ydGVkSW5kZXhbbF0gPSBpO1xuICAgICAgICAgICAgbCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgU29ydCBtYXAgdXNlZCB0byBzb3J0IGJvdGggdGhlIHZhbHVlcyBhbmQgdGhlIHZhbHVlVG9EYXRhIGluZGljZXNcbiAgICAgICAgdmFyIHNvcnRNYXAgPSBzb3J0KGNyb3NzZmlsdGVyX3JhbmdlKHQpLCAwLCB0KTtcblxuICAgICAgICAvLyBVc2UgdGhlIHNvcnRNYXAgdG8gc29ydCB0aGUgbmV3VmFsdWVzXG4gICAgICAgIG5ld1ZhbHVlcyA9IHBlcm11dGUobmV3VmFsdWVzLCBzb3J0TWFwKTtcblxuXG4gICAgICAgIC8vIFVzZSB0aGUgc29ydE1hcCB0byBzb3J0IHRoZSB1bnNvcnRlZEluZGV4IG1hcFxuICAgICAgICAvLyBuZXdJbmRleCBzaG91bGQgYmUgYSBtYXAgb2Ygc29ydGVkVmFsdWUgLT4gY3Jvc3NmaWx0ZXJEYXRhXG4gICAgICAgIG5ld0luZGV4ID0gcGVybXV0ZSh1bnNvcnRlZEluZGV4LCBzb3J0TWFwKVxuXG4gICAgICB9IGVsc2V7XG4gICAgICAgIC8vIFBlcm11dGUgbmV3IHZhbHVlcyBpbnRvIG5hdHVyYWwgb3JkZXIgdXNpbmcgYSBzdGFuZGFyZCBzb3J0ZWQgaW5kZXguXG4gICAgICAgIG5ld1ZhbHVlcyA9IG5ld0RhdGEubWFwKHZhbHVlKTtcbiAgICAgICAgbmV3SW5kZXggPSBzb3J0KGNyb3NzZmlsdGVyX3JhbmdlKG4xKSwgMCwgbjEpO1xuICAgICAgICBuZXdWYWx1ZXMgPSBwZXJtdXRlKG5ld1ZhbHVlcywgbmV3SW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZihpdGVyYWJsZSkge1xuICAgICAgICBuMSA9IHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEJpc2VjdCBuZXdWYWx1ZXMgdG8gZGV0ZXJtaW5lIHdoaWNoIG5ldyByZWNvcmRzIGFyZSBzZWxlY3RlZC5cbiAgICAgIHZhciBib3VuZHMgPSByZWZpbHRlcihuZXdWYWx1ZXMpLCBsbzEgPSBib3VuZHNbMF0sIGhpMSA9IGJvdW5kc1sxXTtcbiAgICAgIGlmIChyZWZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMTsgKytpKSB7XG4gICAgICAgICAgaWYgKCFyZWZpbHRlckZ1bmN0aW9uKG5ld1ZhbHVlc1tpXSwgaSkpIHtcbiAgICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVtuZXdJbmRleFtpXSArIG4wXSB8PSBvbmU7XG4gICAgICAgICAgICBpZihpdGVyYWJsZSkgbmV3SXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvMTsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW25ld0luZGV4W2ldICsgbjBdIHw9IG9uZTtcbiAgICAgICAgICBpZihpdGVyYWJsZSkgbmV3SXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IGhpMTsgaSA8IG4xOyArK2kpIHtcbiAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bbmV3SW5kZXhbaV0gKyBuMF0gfD0gb25lO1xuICAgICAgICAgIGlmKGl0ZXJhYmxlKSBuZXdJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBkaW1lbnNpb24gcHJldmlvdXNseSBoYWQgbm8gZGF0YSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZVxuICAgICAgLy8gbW9yZSBleHBlbnNpdmUgbWVyZ2Ugb3BlcmF0aW9uOyB1c2UgdGhlIG5ldyB2YWx1ZXMgYW5kIGluZGV4IGFzLWlzLlxuICAgICAgaWYgKCFuMCkge1xuICAgICAgICB2YWx1ZXMgPSBuZXdWYWx1ZXM7XG4gICAgICAgIGluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgIGl0ZXJhYmxlc0luZGV4Q291bnQgPSBuZXdJdGVyYWJsZXNJbmRleENvdW50O1xuICAgICAgICBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1cyA9IG5ld0l0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzO1xuICAgICAgICBsbzAgPSBsbzE7XG4gICAgICAgIGhpMCA9IGhpMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cblxuICAgICAgdmFyIG9sZFZhbHVlcyA9IHZhbHVlcyxcbiAgICAgICAgb2xkSW5kZXggPSBpbmRleCxcbiAgICAgICAgb2xkSXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMgPSBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1xuICAgICAgICBpMCA9IDAsXG4gICAgICAgIGkxID0gMDtcblxuICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICBvbGRfbjAgPSBuMFxuICAgICAgICBuMCA9IG9sZFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIG4xID0gdFxuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBuZXcgYXJyYXlzIGludG8gd2hpY2ggdG8gbWVyZ2UgbmV3IGFuZCBvbGQuXG4gICAgICB2YWx1ZXMgPSBpdGVyYWJsZSA/IG5ldyBBcnJheShuMCArIG4xKSA6IG5ldyBBcnJheShuKTtcbiAgICAgIGluZGV4ID0gaXRlcmFibGUgPyBuZXcgQXJyYXkobjAgKyBuMSkgOiBjcm9zc2ZpbHRlcl9pbmRleChuLCBuKTtcbiAgICAgIGlmKGl0ZXJhYmxlKSBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1cyA9IGNyb3NzZmlsdGVyX2luZGV4KG4wICsgbjEsIDEpO1xuXG4gICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgbmV3SXRlcmFibGVzSW5kZXhDb3VudCBvbnRvIHRoZSBvbGQgb25lLlxuICAgICAgaWYoaXRlcmFibGUpIHtcbiAgICAgICAgdmFyIG9sZGlpY2xlbmd0aCA9IGl0ZXJhYmxlc0luZGV4Q291bnQubGVuZ3RoO1xuICAgICAgICBpdGVyYWJsZXNJbmRleENvdW50ID0geGZpbHRlckFycmF5LmFycmF5TGVuZ3RoZW4oaXRlcmFibGVzSW5kZXhDb3VudCwgbik7XG4gICAgICAgIGZvcih2YXIgaj0wOyBqK29sZGlpY2xlbmd0aCA8IG47IGorKykge1xuICAgICAgICAgIGl0ZXJhYmxlc0luZGV4Q291bnRbaitvbGRpaWNsZW5ndGhdID0gbmV3SXRlcmFibGVzSW5kZXhDb3VudFtqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgb2xkIGFuZCBuZXcgc29ydGVkIHZhbHVlcywgYW5kIG9sZCBhbmQgbmV3IGluZGV4LlxuICAgICAgZm9yIChpID0gMDsgaTAgPCBuMCAmJiBpMSA8IG4xOyArK2kpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlc1tpMF0gPCBuZXdWYWx1ZXNbaTFdKSB7XG4gICAgICAgICAgdmFsdWVzW2ldID0gb2xkVmFsdWVzW2kwXTtcbiAgICAgICAgICBpZihpdGVyYWJsZSkgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSBvbGRJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpMF07XG4gICAgICAgICAgaW5kZXhbaV0gPSBvbGRJbmRleFtpMCsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXNbaV0gPSBuZXdWYWx1ZXNbaTFdO1xuICAgICAgICAgIGlmKGl0ZXJhYmxlKSBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpXSA9IG9sZEl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2kxXTtcbiAgICAgICAgICBpbmRleFtpXSA9IG5ld0luZGV4W2kxKytdICsgKGl0ZXJhYmxlID8gb2xkX24wIDogbjApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG9sZCB2YWx1ZXMuXG4gICAgICBmb3IgKDsgaTAgPCBuMDsgKytpMCwgKytpKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IG9sZFZhbHVlc1tpMF07XG4gICAgICAgIGlmKGl0ZXJhYmxlKSBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpXSA9IG9sZEl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2kwXTtcbiAgICAgICAgaW5kZXhbaV0gPSBvbGRJbmRleFtpMF07XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5ldyB2YWx1ZXMuXG4gICAgICBmb3IgKDsgaTEgPCBuMTsgKytpMSwgKytpKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IG5ld1ZhbHVlc1tpMV07XG4gICAgICAgIGlmKGl0ZXJhYmxlKSBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpXSA9IG9sZEl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2kxXTtcbiAgICAgICAgaW5kZXhbaV0gPSBuZXdJbmRleFtpMV0gKyAoaXRlcmFibGUgPyBvbGRfbjAgOiBuMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJpc2VjdCBhZ2FpbiB0byByZWNvbXB1dGUgbG8wIGFuZCBoaTAuXG4gICAgICBib3VuZHMgPSByZWZpbHRlcih2YWx1ZXMpLCBsbzAgPSBib3VuZHNbMF0sIGhpMCA9IGJvdW5kc1sxXTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIGFsbCBmaWx0ZXJzIGhhdmUgdXBkYXRlZCwgbm90aWZ5IGluZGV4IGxpc3RlbmVycyBvZiB0aGUgbmV3IHZhbHVlcy5cbiAgICBmdW5jdGlvbiBwb3N0QWRkKG5ld0RhdGEsIG4wLCBuMSkge1xuICAgICAgaW5kZXhMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwobmV3VmFsdWVzLCBuZXdJbmRleCwgbjAsIG4xKTsgfSk7XG4gICAgICBuZXdWYWx1ZXMgPSBuZXdJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRGF0YShyZUluZGV4KSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDAsIGs7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJzLnplcm8oayA9IGluZGV4W2ldKSkge1xuICAgICAgICAgIGlmIChpICE9PSBqKSB2YWx1ZXNbal0gPSB2YWx1ZXNbaV07XG4gICAgICAgICAgaW5kZXhbal0gPSByZUluZGV4W2tdO1xuICAgICAgICAgICsrajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFsdWVzLmxlbmd0aCA9IGo7XG4gICAgICB3aGlsZSAoaiA8IG4pIGluZGV4W2orK10gPSAwO1xuXG4gICAgICAvLyBCaXNlY3QgYWdhaW4gdG8gcmVjb21wdXRlIGxvMCBhbmQgaGkwLlxuICAgICAgdmFyIGJvdW5kcyA9IHJlZmlsdGVyKHZhbHVlcyk7XG4gICAgICBsbzAgPSBib3VuZHNbMF0sIGhpMCA9IGJvdW5kc1sxXTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBzZWxlY3RlZCB2YWx1ZXMgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBib3VuZHMgW2xvLCBoaV0uXG4gICAgLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGJ5IGFsbCB0aGUgcHVibGljIGZpbHRlciBtZXRob2RzLlxuICAgIGZ1bmN0aW9uIGZpbHRlckluZGV4Qm91bmRzKGJvdW5kcykge1xuXG4gICAgICB2YXIgbG8xID0gYm91bmRzWzBdLFxuICAgICAgICAgIGhpMSA9IGJvdW5kc1sxXTtcblxuICAgICAgaWYgKHJlZmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmVmaWx0ZXJGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIGZpbHRlckluZGV4RnVuY3Rpb24oZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gbG8xIDw9IGkgJiYgaSA8IGhpMTsgfSwgYm91bmRzWzBdID09PSAwICYmIGJvdW5kc1sxXSA9PT0gaW5kZXgubGVuZ3RoKTtcbiAgICAgICAgbG8wID0gbG8xO1xuICAgICAgICBoaTAgPSBoaTE7XG4gICAgICAgIHJldHVybiBkaW1lbnNpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBpLFxuICAgICAgICAgIGosXG4gICAgICAgICAgayxcbiAgICAgICAgICBhZGRlZCA9IFtdLFxuICAgICAgICAgIHJlbW92ZWQgPSBbXSxcbiAgICAgICAgICB2YWx1ZUluZGV4QWRkZWQgPSBbXSxcbiAgICAgICAgICB2YWx1ZUluZGV4UmVtb3ZlZCA9IFtdO1xuXG5cbiAgICAgIC8vIEZhc3QgaW5jcmVtZW50YWwgdXBkYXRlIGJhc2VkIG9uIHByZXZpb3VzIGxvIGluZGV4LlxuICAgICAgaWYgKGxvMSA8IGxvMCkge1xuICAgICAgICBmb3IgKGkgPSBsbzEsIGogPSBNYXRoLm1pbihsbzAsIGhpMSk7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICBhZGRlZC5wdXNoKGluZGV4W2ldKTtcbiAgICAgICAgICB2YWx1ZUluZGV4QWRkZWQucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsbzEgPiBsbzApIHtcbiAgICAgICAgZm9yIChpID0gbG8wLCBqID0gTWF0aC5taW4obG8xLCBoaTApOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGluZGV4W2ldKTtcbiAgICAgICAgICB2YWx1ZUluZGV4UmVtb3ZlZC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZhc3QgaW5jcmVtZW50YWwgdXBkYXRlIGJhc2VkIG9uIHByZXZpb3VzIGhpIGluZGV4LlxuICAgICAgaWYgKGhpMSA+IGhpMCkge1xuICAgICAgICBmb3IgKGkgPSBNYXRoLm1heChsbzEsIGhpMCksIGogPSBoaTE7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICBhZGRlZC5wdXNoKGluZGV4W2ldKTtcbiAgICAgICAgICB2YWx1ZUluZGV4QWRkZWQucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoaTEgPCBoaTApIHtcbiAgICAgICAgZm9yIChpID0gTWF0aC5tYXgobG8wLCBoaTEpLCBqID0gaGkwOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGluZGV4W2ldKTtcbiAgICAgICAgICB2YWx1ZUluZGV4UmVtb3ZlZC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFpdGVyYWJsZSkge1xuICAgICAgICAvLyBGbGlwIGZpbHRlcnMgbm9ybWFsbHkuXG5cbiAgICAgICAgZm9yKGk9MDsgaTxhZGRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVthZGRlZFtpXV0gXj0gb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGk9MDsgaTxyZW1vdmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW3JlbW92ZWRbaV1dIF49IG9uZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgaXRlcmFibGVzLCB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgaWYgdGhlIHJvdyBoYXMgYmVlbiBjb21wbGV0ZWx5IHJlbW92ZWQgdnMgcGFydGlhbGx5IGluY2x1ZGVkXG4gICAgICAgIC8vIE9ubHkgY291bnQgYSByb3cgYXMgYWRkZWQgaWYgaXQgaXMgbm90IGFscmVhZHkgYmVpbmcgYWdncmVnYXRlZC4gT25seSBjb3VudCBhIHJvd1xuICAgICAgICAvLyBhcyByZW1vdmVkIGlmIHRoZSBsYXN0IGVsZW1lbnQgYmVpbmcgYWdncmVnYXRlZCBpcyByZW1vdmVkLlxuXG4gICAgICAgIHZhciBuZXdBZGRlZCA9IFtdO1xuICAgICAgICB2YXIgbmV3UmVtb3ZlZCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpdGVyYWJsZXNJbmRleENvdW50W2FkZGVkW2ldXSsrXG4gICAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbdmFsdWVJbmRleEFkZGVkW2ldXSA9IDA7XG4gICAgICAgICAgaWYoaXRlcmFibGVzSW5kZXhDb3VudFthZGRlZFtpXV0gPT09IDEpIHtcbiAgICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVthZGRlZFtpXV0gXj0gb25lO1xuICAgICAgICAgICAgbmV3QWRkZWQucHVzaChhZGRlZFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZW1vdmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudFtyZW1vdmVkW2ldXS0tXG4gICAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbdmFsdWVJbmRleFJlbW92ZWRbaV1dID0gMTtcbiAgICAgICAgICBpZihpdGVyYWJsZXNJbmRleENvdW50W3JlbW92ZWRbaV1dID09PSAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bcmVtb3ZlZFtpXV0gXj0gb25lO1xuICAgICAgICAgICAgbmV3UmVtb3ZlZC5wdXNoKHJlbW92ZWRbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkZGVkID0gbmV3QWRkZWQ7XG4gICAgICAgIHJlbW92ZWQgPSBuZXdSZW1vdmVkO1xuXG4gICAgICAgIC8vIE5vdyBoYW5kbGUgZW1wdHkgcm93cy5cbiAgICAgICAgaWYoYm91bmRzWzBdID09PSAwICYmIGJvdW5kc1sxXSA9PT0gaW5kZXgubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZigoZmlsdGVyc1tvZmZzZXRdW2sgPSBpdGVyYWJsZXNFbXB0eVJvd3NbaV1dICYgb25lKSkge1xuICAgICAgICAgICAgICAvLyBXYXMgbm90IGluIHRoZSBmaWx0ZXIsIHNvIHNldCB0aGUgZmlsdGVyIGFuZCBhZGRcbiAgICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW2tdIF49IG9uZTtcbiAgICAgICAgICAgICAgYWRkZWQucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZmlsdGVyIGluIHBsYWNlIC0gcmVtb3ZlIGVtcHR5IHJvd3MgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZighKGZpbHRlcnNbb2Zmc2V0XVtrID0gaXRlcmFibGVzRW1wdHlSb3dzW2ldXSAmIG9uZSkpIHtcbiAgICAgICAgICAgICAgLy8gV2FzIGluIHRoZSBmaWx0ZXIsIHNvIHNldCB0aGUgZmlsdGVyIGFuZCByZW1vdmVcbiAgICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW2tdIF49IG9uZTtcbiAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsbzAgPSBsbzE7XG4gICAgICBoaTAgPSBoaTE7XG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwob25lLCBvZmZzZXQsIGFkZGVkLCByZW1vdmVkKTsgfSk7XG4gICAgICB0cmlnZ2VyT25DaGFuZ2UoJ2ZpbHRlcmVkJyk7XG4gICAgICByZXR1cm4gZGltZW5zaW9uO1xuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgdGhpcyBkaW1lbnNpb24gdXNpbmcgdGhlIHNwZWNpZmllZCByYW5nZSwgdmFsdWUsIG9yIG51bGwuXG4gICAgLy8gSWYgdGhlIHJhbmdlIGlzIG51bGwsIHRoaXMgaXMgZXF1aXZhbGVudCB0byBmaWx0ZXJBbGwuXG4gICAgLy8gSWYgdGhlIHJhbmdlIGlzIGFuIGFycmF5LCB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gZmlsdGVyUmFuZ2UuXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gZmlsdGVyRXhhY3QuXG4gICAgZnVuY3Rpb24gZmlsdGVyKHJhbmdlKSB7XG4gICAgICByZXR1cm4gcmFuZ2UgPT0gbnVsbFxuICAgICAgICAgID8gZmlsdGVyQWxsKCkgOiBBcnJheS5pc0FycmF5KHJhbmdlKVxuICAgICAgICAgID8gZmlsdGVyUmFuZ2UocmFuZ2UpIDogdHlwZW9mIHJhbmdlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGZpbHRlckZ1bmN0aW9uKHJhbmdlKVxuICAgICAgICAgIDogZmlsdGVyRXhhY3QocmFuZ2UpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgdGhpcyBkaW1lbnNpb24gdG8gc2VsZWN0IHRoZSBleGFjdCB2YWx1ZS5cbiAgICBmdW5jdGlvbiBmaWx0ZXJFeGFjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZpbHRlckluZGV4Qm91bmRzKChyZWZpbHRlciA9IHhmaWx0ZXJGaWx0ZXIuZmlsdGVyRXhhY3QoYmlzZWN0LCB2YWx1ZSkpKHZhbHVlcykpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgdGhpcyBkaW1lbnNpb24gdG8gc2VsZWN0IHRoZSBzcGVjaWZpZWQgcmFuZ2UgW2xvLCBoaV0uXG4gICAgLy8gVGhlIGxvd2VyIGJvdW5kIGlzIGluY2x1c2l2ZSwgYW5kIHRoZSB1cHBlciBib3VuZCBpcyBleGNsdXNpdmUuXG4gICAgZnVuY3Rpb24gZmlsdGVyUmFuZ2UocmFuZ2UpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSB4ZmlsdGVyRmlsdGVyLmZpbHRlclJhbmdlKGJpc2VjdCwgcmFuZ2UpKSh2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhcnMgYW55IGZpbHRlcnMgb24gdGhpcyBkaW1lbnNpb24uXG4gICAgZnVuY3Rpb24gZmlsdGVyQWxsKCkge1xuICAgICAgcmV0dXJuIGZpbHRlckluZGV4Qm91bmRzKChyZWZpbHRlciA9IHhmaWx0ZXJGaWx0ZXIuZmlsdGVyQWxsKSh2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHVzaW5nIGFuIGFyYml0cmFyeSBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBmaWx0ZXJGdW5jdGlvbihmKSB7XG4gICAgICByZWZpbHRlckZ1bmN0aW9uID0gZjtcbiAgICAgIHJlZmlsdGVyID0geGZpbHRlckZpbHRlci5maWx0ZXJBbGw7XG5cbiAgICAgIGZpbHRlckluZGV4RnVuY3Rpb24oZiwgZmFsc2UpO1xuXG4gICAgICBsbzAgPSAwO1xuICAgICAgaGkwID0gbjtcblxuICAgICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJbmRleEZ1bmN0aW9uKGYsIGZpbHRlckFsbCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgayxcbiAgICAgICAgICB4LFxuICAgICAgICAgIGFkZGVkID0gW10sXG4gICAgICAgICAgcmVtb3ZlZCA9IFtdLFxuICAgICAgICAgIHZhbHVlSW5kZXhBZGRlZCA9IFtdLFxuICAgICAgICAgIHZhbHVlSW5kZXhSZW1vdmVkID0gW10sXG4gICAgICAgICAgaW5kZXhMZW5ndGggPSBpbmRleC5sZW5ndGg7XG5cbiAgICAgIGlmKCFpdGVyYWJsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZXhMZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmICghKGZpbHRlcnNbb2Zmc2V0XVtrID0gaW5kZXhbaV1dICYgb25lKSBeICEhKHggPSBmKHZhbHVlc1tpXSwgaSkpKSB7XG4gICAgICAgICAgICBpZiAoeCkgYWRkZWQucHVzaChrKTtcbiAgICAgICAgICAgIGVsc2UgcmVtb3ZlZC5wdXNoKGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpdGVyYWJsZSkge1xuICAgICAgICBmb3IoaT0wOyBpIDwgaW5kZXhMZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmKGYodmFsdWVzW2ldLCBpKSkge1xuICAgICAgICAgICAgYWRkZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgICB2YWx1ZUluZGV4QWRkZWQucHVzaChpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGluZGV4W2ldKTtcbiAgICAgICAgICAgIHZhbHVlSW5kZXhSZW1vdmVkLnB1c2goaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFpdGVyYWJsZSkge1xuICAgICAgICBmb3IoaT0wOyBpPGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoZmlsdGVyc1tvZmZzZXRdW2FkZGVkW2ldXSAmIG9uZSkgZmlsdGVyc1tvZmZzZXRdW2FkZGVkW2ldXSAmPSB6ZXJvO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGk9MDsgaTxyZW1vdmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIShmaWx0ZXJzW29mZnNldF1bcmVtb3ZlZFtpXV0gJiBvbmUpKSBmaWx0ZXJzW29mZnNldF1bcmVtb3ZlZFtpXV0gfD0gb25lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBuZXdBZGRlZCA9IFtdO1xuICAgICAgICB2YXIgbmV3UmVtb3ZlZCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBGaXJzdCBjaGVjayB0aGlzIHBhcnRpY3VsYXIgdmFsdWUgbmVlZHMgdG8gYmUgYWRkZWRcbiAgICAgICAgICBpZihpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1t2YWx1ZUluZGV4QWRkZWRbaV1dID09PSAxKSB7XG4gICAgICAgICAgICBpdGVyYWJsZXNJbmRleENvdW50W2FkZGVkW2ldXSsrXG4gICAgICAgICAgICBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1t2YWx1ZUluZGV4QWRkZWRbaV1dID0gMDtcbiAgICAgICAgICAgIGlmKGl0ZXJhYmxlc0luZGV4Q291bnRbYWRkZWRbaV1dID09PSAxKSB7XG4gICAgICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVthZGRlZFtpXV0gXj0gb25lO1xuICAgICAgICAgICAgICBuZXdBZGRlZC5wdXNoKGFkZGVkW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbW92ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBGaXJzdCBjaGVjayB0aGlzIHBhcnRpY3VsYXIgdmFsdWUgbmVlZHMgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgIGlmKGl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW3ZhbHVlSW5kZXhSZW1vdmVkW2ldXSA9PT0gMCkge1xuICAgICAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudFtyZW1vdmVkW2ldXS0tXG4gICAgICAgICAgICBpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1t2YWx1ZUluZGV4UmVtb3ZlZFtpXV0gPSAxO1xuICAgICAgICAgICAgaWYoaXRlcmFibGVzSW5kZXhDb3VudFtyZW1vdmVkW2ldXSA9PT0gMCkge1xuICAgICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bcmVtb3ZlZFtpXV0gXj0gb25lO1xuICAgICAgICAgICAgICBuZXdSZW1vdmVkLnB1c2gocmVtb3ZlZFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkZWQgPSBuZXdBZGRlZDtcbiAgICAgICAgcmVtb3ZlZCA9IG5ld1JlbW92ZWQ7XG5cbiAgICAgICAgLy8gTm93IGhhbmRsZSBlbXB0eSByb3dzLlxuICAgICAgICBpZihmaWx0ZXJBbGwpIHtcbiAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBpdGVyYWJsZXNFbXB0eVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKChmaWx0ZXJzW29mZnNldF1bayA9IGl0ZXJhYmxlc0VtcHR5Um93c1tpXV0gJiBvbmUpKSB7XG4gICAgICAgICAgICAgIC8vIFdhcyBub3QgaW4gdGhlIGZpbHRlciwgc28gc2V0IHRoZSBmaWx0ZXIgYW5kIGFkZFxuICAgICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1ba10gXj0gb25lO1xuICAgICAgICAgICAgICBhZGRlZC5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBmaWx0ZXIgaW4gcGxhY2UgLSByZW1vdmUgZW1wdHkgcm93cyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBpdGVyYWJsZXNFbXB0eVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKCEoZmlsdGVyc1tvZmZzZXRdW2sgPSBpdGVyYWJsZXNFbXB0eVJvd3NbaV1dICYgb25lKSkge1xuICAgICAgICAgICAgICAvLyBXYXMgaW4gdGhlIGZpbHRlciwgc28gc2V0IHRoZSBmaWx0ZXIgYW5kIHJlbW92ZVxuICAgICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1ba10gXj0gb25lO1xuICAgICAgICAgICAgICByZW1vdmVkLnB1c2goayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbHRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChvbmUsIG9mZnNldCwgYWRkZWQsIHJlbW92ZWQpOyB9KTtcbiAgICAgIHRyaWdnZXJPbkNoYW5nZSgnZmlsdGVyZWQnKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSB0b3AgSyBzZWxlY3RlZCByZWNvcmRzIGJhc2VkIG9uIHRoaXMgZGltZW5zaW9uJ3Mgb3JkZXIuXG4gICAgLy8gTm90ZTogb2JzZXJ2ZXMgdGhpcyBkaW1lbnNpb24ncyBmaWx0ZXIsIHVubGlrZSBncm91cCBhbmQgZ3JvdXBBbGwuXG4gICAgZnVuY3Rpb24gdG9wKGssIHRvcF9vZmZzZXQpIHtcbiAgICAgIHZhciBhcnJheSA9IFtdLFxuICAgICAgICAgIGkgPSBoaTAsXG4gICAgICAgICAgaixcbiAgICAgICAgICB0b1NraXAgPSAwO1xuXG4gICAgICBpZih0b3Bfb2Zmc2V0ICYmIHRvcF9vZmZzZXQgPiAwKSB0b1NraXAgPSB0b3Bfb2Zmc2V0O1xuXG4gICAgICB3aGlsZSAoLS1pID49IGxvMCAmJiBrID4gMCkge1xuICAgICAgICBpZiAoZmlsdGVycy56ZXJvKGogPSBpbmRleFtpXSkpIHtcbiAgICAgICAgICBpZih0b1NraXAgPiAwKSB7XG4gICAgICAgICAgICAvL3NraXAgbWF0Y2hpbmcgcm93XG4gICAgICAgICAgICAtLXRvU2tpcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXkucHVzaChkYXRhW2pdKTtcbiAgICAgICAgICAgIC0taztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpdGVyYWJsZXNFbXB0eVJvd3MubGVuZ3RoICYmIGsgPiAwOyBpKyspIHtcbiAgICAgICAgICAvLyBBZGQgcm93IHdpdGggZW1wdHkgaXRlcmFibGUgY29sdW1uIGF0IHRoZSBlbmRcbiAgICAgICAgICBpZihmaWx0ZXJzLnplcm8oaiA9IGl0ZXJhYmxlc0VtcHR5Um93c1tpXSkpIHtcbiAgICAgICAgICAgIGlmKHRvU2tpcCA+IDApIHtcbiAgICAgICAgICAgICAgLy9za2lwIG1hdGNoaW5nIHJvd1xuICAgICAgICAgICAgICAtLXRvU2tpcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAgIC0taztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGJvdHRvbSBLIHNlbGVjdGVkIHJlY29yZHMgYmFzZWQgb24gdGhpcyBkaW1lbnNpb24ncyBvcmRlci5cbiAgICAvLyBOb3RlOiBvYnNlcnZlcyB0aGlzIGRpbWVuc2lvbidzIGZpbHRlciwgdW5saWtlIGdyb3VwIGFuZCBncm91cEFsbC5cbiAgICBmdW5jdGlvbiBib3R0b20oaywgYm90dG9tX29mZnNldCkge1xuICAgICAgdmFyIGFycmF5ID0gW10sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBqLFxuICAgICAgICAgIHRvU2tpcCA9IDA7XG5cbiAgICAgIGlmKGJvdHRvbV9vZmZzZXQgJiYgYm90dG9tX29mZnNldCA+IDApIHRvU2tpcCA9IGJvdHRvbV9vZmZzZXQ7XG5cbiAgICAgIGlmKGl0ZXJhYmxlKSB7XG4gICAgICAgIC8vIEFkZCByb3cgd2l0aCBlbXB0eSBpdGVyYWJsZSBjb2x1bW4gYXQgdGhlIHRvcFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpdGVyYWJsZXNFbXB0eVJvd3MubGVuZ3RoICYmIGsgPiAwOyBpKyspIHtcbiAgICAgICAgICBpZihmaWx0ZXJzLnplcm8oaiA9IGl0ZXJhYmxlc0VtcHR5Um93c1tpXSkpIHtcbiAgICAgICAgICAgIGlmKHRvU2tpcCA+IDApIHtcbiAgICAgICAgICAgICAgLy9za2lwIG1hdGNoaW5nIHJvd1xuICAgICAgICAgICAgICAtLXRvU2tpcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAgIC0taztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaSA9IGxvMDtcblxuICAgICAgd2hpbGUgKGkgPCBoaTAgJiYgayA+IDApIHtcbiAgICAgICAgaWYgKGZpbHRlcnMuemVybyhqID0gaW5kZXhbaV0pKSB7XG4gICAgICAgICAgaWYodG9Ta2lwID4gMCkge1xuICAgICAgICAgICAgLy9za2lwIG1hdGNoaW5nIHJvd1xuICAgICAgICAgICAgLS10b1NraXA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAtLWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIEFkZHMgYSBuZXcgZ3JvdXAgdG8gdGhpcyBkaW1lbnNpb24sIHVzaW5nIHRoZSBzcGVjaWZpZWQga2V5IGZ1bmN0aW9uLlxuICAgIGZ1bmN0aW9uIGdyb3VwKGtleSkge1xuICAgICAgdmFyIGdyb3VwID0ge1xuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYWxsOiBhbGwsXG4gICAgICAgIHJlZHVjZTogcmVkdWNlLFxuICAgICAgICByZWR1Y2VDb3VudDogcmVkdWNlQ291bnQsXG4gICAgICAgIHJlZHVjZVN1bTogcmVkdWNlU3VtLFxuICAgICAgICBvcmRlcjogb3JkZXIsXG4gICAgICAgIG9yZGVyTmF0dXJhbDogb3JkZXJOYXR1cmFsLFxuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICBkaXNwb3NlOiBkaXNwb3NlLFxuICAgICAgICByZW1vdmU6IGRpc3Bvc2UgLy8gZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gICAgICB9O1xuXG4gICAgICAvLyBFbnN1cmUgdGhhdCB0aGlzIGdyb3VwIHdpbGwgYmUgcmVtb3ZlZCB3aGVuIHRoZSBkaW1lbnNpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGRpbWVuc2lvbkdyb3Vwcy5wdXNoKGdyb3VwKTtcblxuICAgICAgdmFyIGdyb3VwcywgLy8gYXJyYXkgb2Yge2tleSwgdmFsdWV9XG4gICAgICAgICAgZ3JvdXBJbmRleCwgLy8gb2JqZWN0IGlkIOKGpiBncm91cCBpZFxuICAgICAgICAgIGdyb3VwV2lkdGggPSA4LFxuICAgICAgICAgIGdyb3VwQ2FwYWNpdHkgPSBjcm9zc2ZpbHRlcl9jYXBhY2l0eShncm91cFdpZHRoKSxcbiAgICAgICAgICBrID0gMCwgLy8gY2FyZGluYWxpdHlcbiAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgaGVhcCxcbiAgICAgICAgICByZWR1Y2VBZGQsXG4gICAgICAgICAgcmVkdWNlUmVtb3ZlLFxuICAgICAgICAgIHJlZHVjZUluaXRpYWwsXG4gICAgICAgICAgdXBkYXRlID0gY3Jvc3NmaWx0ZXJfbnVsbCxcbiAgICAgICAgICByZXNldCA9IGNyb3NzZmlsdGVyX251bGwsXG4gICAgICAgICAgcmVzZXROZWVkZWQgPSB0cnVlLFxuICAgICAgICAgIGdyb3VwQWxsID0ga2V5ID09PSBjcm9zc2ZpbHRlcl9udWxsO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIGtleSA9IGNyb3NzZmlsdGVyX2lkZW50aXR5O1xuXG4gICAgICAvLyBUaGUgZ3JvdXAgbGlzdGVucyB0byB0aGUgY3Jvc3NmaWx0ZXIgZm9yIHdoZW4gYW55IGRpbWVuc2lvbiBjaGFuZ2VzLCBzb1xuICAgICAgLy8gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSBhc3NvY2lhdGVkIHJlZHVjZSB2YWx1ZXMuIEl0IG11c3QgYWxzbyBsaXN0ZW4gdG9cbiAgICAgIC8vIHRoZSBwYXJlbnQgZGltZW5zaW9uIGZvciB3aGVuIGRhdGEgaXMgYWRkZWQsIGFuZCBjb21wdXRlIG5ldyBrZXlzLlxuICAgICAgZmlsdGVyTGlzdGVuZXJzLnB1c2godXBkYXRlKTtcbiAgICAgIGluZGV4TGlzdGVuZXJzLnB1c2goYWRkKTtcbiAgICAgIHJlbW92ZURhdGFMaXN0ZW5lcnMucHVzaChyZW1vdmVEYXRhKTtcblxuICAgICAgLy8gSW5jb3Jwb3JhdGUgYW55IGV4aXN0aW5nIGRhdGEgaW50byB0aGUgZ3JvdXBpbmcuXG4gICAgICBhZGQodmFsdWVzLCBpbmRleCwgMCwgbik7XG5cbiAgICAgIC8vIEluY29ycG9yYXRlcyB0aGUgc3BlY2lmaWVkIG5ldyB2YWx1ZXMgaW50byB0aGlzIGdyb3VwLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgZ3JvdXBzIGFuZCBncm91cEluZGV4LlxuICAgICAgZnVuY3Rpb24gYWRkKG5ld1ZhbHVlcywgbmV3SW5kZXgsIG4wLCBuMSkge1xuXG4gICAgICAgIGlmKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgbjBvbGQgPSBuMFxuICAgICAgICAgIG4wID0gdmFsdWVzLmxlbmd0aCAtIG5ld1ZhbHVlcy5sZW5ndGhcbiAgICAgICAgICBuMSA9IG5ld1ZhbHVlcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkR3JvdXBzID0gZ3JvdXBzLFxuICAgICAgICAgICAgcmVJbmRleCA9IGl0ZXJhYmxlID8gW10gOiBjcm9zc2ZpbHRlcl9pbmRleChrLCBncm91cENhcGFjaXR5KSxcbiAgICAgICAgICAgIGFkZCA9IHJlZHVjZUFkZCxcbiAgICAgICAgICAgIHJlbW92ZSA9IHJlZHVjZVJlbW92ZSxcbiAgICAgICAgICAgIGluaXRpYWwgPSByZWR1Y2VJbml0aWFsLFxuICAgICAgICAgICAgazAgPSBrLCAvLyBvbGQgY2FyZGluYWxpdHlcbiAgICAgICAgICAgIGkwID0gMCwgLy8gaW5kZXggb2Ygb2xkIGdyb3VwXG4gICAgICAgICAgICBpMSA9IDAsIC8vIGluZGV4IG9mIG5ldyByZWNvcmRcbiAgICAgICAgICAgIGosIC8vIG9iamVjdCBpZFxuICAgICAgICAgICAgZzAsIC8vIG9sZCBncm91cFxuICAgICAgICAgICAgeDAsIC8vIG9sZCBrZXlcbiAgICAgICAgICAgIHgxLCAvLyBuZXcga2V5XG4gICAgICAgICAgICBnLCAvLyBncm91cCB0byBhZGRcbiAgICAgICAgICAgIHg7IC8vIGtleSBvZiBncm91cCB0byBhZGRcblxuICAgICAgICAvLyBJZiBhIHJlc2V0IGlzIG5lZWRlZCwgd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgdGhlIHJlZHVjZSB2YWx1ZXMuXG4gICAgICAgIGlmIChyZXNldE5lZWRlZCkgYWRkID0gaW5pdGlhbCA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgIGlmIChyZXNldE5lZWRlZCkgcmVtb3ZlID0gaW5pdGlhbCA9IGNyb3NzZmlsdGVyX251bGw7XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIG5ldyBncm91cHMgKGsgaXMgYSBsb3dlciBib3VuZCkuXG4gICAgICAgIC8vIEFsc28sIG1ha2Ugc3VyZSB0aGF0IGdyb3VwSW5kZXggZXhpc3RzIGFuZCBpcyBsb25nIGVub3VnaC5cbiAgICAgICAgZ3JvdXBzID0gbmV3IEFycmF5KGspLCBrID0gMDtcbiAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgIGdyb3VwSW5kZXggPSBrMCA+IDEgPyBncm91cEluZGV4IDogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBncm91cEluZGV4ID0gazAgPiAxID8geGZpbHRlckFycmF5LmFycmF5TGVuZ3RoZW4oZ3JvdXBJbmRleCwgbikgOiBjcm9zc2ZpbHRlcl9pbmRleChuLCBncm91cENhcGFjaXR5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCBvbGQga2V5ICh4MCBvZiBnMCksIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgaWYgKGswKSB4MCA9IChnMCA9IG9sZEdyb3Vwc1swXSkua2V5O1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG5ldyBrZXkgKHgxKSwgc2tpcHBpbmcgTmFOIGtleXMuXG4gICAgICAgIHdoaWxlIChpMSA8IG4xICYmICEoKHgxID0ga2V5KG5ld1ZhbHVlc1tpMV0pKSA+PSB4MSkpICsraTE7XG5cbiAgICAgICAgLy8gV2hpbGUgbmV3IGtleXMgcmVtYWlu4oCmXG4gICAgICAgIHdoaWxlIChpMSA8IG4xKSB7XG5cbiAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGxlc3NlciBvZiB0aGUgdHdvIGN1cnJlbnQga2V5czsgbmV3IGFuZCBvbGQuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG9sZCBrZXlzIHJlbWFpbmluZywgdGhlbiBhbHdheXMgYWRkIHRoZSBuZXcga2V5LlxuICAgICAgICAgIGlmIChnMCAmJiB4MCA8PSB4MSkge1xuICAgICAgICAgICAgZyA9IGcwLCB4ID0geDA7XG5cbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgbmV3IGluZGV4IG9mIHRoZSBvbGQgZ3JvdXAuXG4gICAgICAgICAgICByZUluZGV4W2kwXSA9IGs7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBuZXh0IG9sZCBrZXkuXG4gICAgICAgICAgICBpZiAoZzAgPSBvbGRHcm91cHNbKytpMF0pIHgwID0gZzAua2V5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnID0ge2tleTogeDEsIHZhbHVlOiBpbml0aWFsKCl9LCB4ID0geDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkIHRoZSBsZXNzZXIgZ3JvdXAuXG4gICAgICAgICAgZ3JvdXBzW2tdID0gZztcblxuICAgICAgICAgIC8vIEFkZCBhbnkgc2VsZWN0ZWQgcmVjb3JkcyBiZWxvbmdpbmcgdG8gdGhlIGFkZGVkIGdyb3VwLCB3aGlsZVxuICAgICAgICAgIC8vIGFkdmFuY2luZyB0aGUgbmV3IGtleSBhbmQgcG9wdWxhdGluZyB0aGUgYXNzb2NpYXRlZCBncm91cCBpbmRleC5cblxuICAgICAgICAgIHdoaWxlICh4MSA8PSB4KSB7XG4gICAgICAgICAgICBqID0gbmV3SW5kZXhbaTFdICsgKGl0ZXJhYmxlID8gbjBvbGQgOiBuMClcblxuXG4gICAgICAgICAgICBpZihpdGVyYWJsZSl7XG4gICAgICAgICAgICAgIGlmKGdyb3VwSW5kZXhbal0pe1xuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXhbal0ucHVzaChrKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleFtqXSA9IFtrXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBncm91cEluZGV4W2pdID0gaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWx3YXlzIGFkZCBuZXcgdmFsdWVzIHRvIGdyb3Vwcy4gT25seSByZW1vdmUgd2hlbiBub3QgaW4gZmlsdGVyLlxuICAgICAgICAgICAgLy8gVGhpcyBnaXZlcyBncm91cHMgZnVsbCBpbmZvcm1hdGlvbiBvbiBkYXRhIGxpZmUtY3ljbGUuXG4gICAgICAgICAgICBnLnZhbHVlID0gYWRkKGcudmFsdWUsIGRhdGFbal0sIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzLnplcm9FeGNlcHQoaiwgb2Zmc2V0LCB6ZXJvKSkgZy52YWx1ZSA9IHJlbW92ZShnLnZhbHVlLCBkYXRhW2pdLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoKytpMSA+PSBuMSkgYnJlYWs7XG4gICAgICAgICAgICB4MSA9IGtleShuZXdWYWx1ZXNbaTFdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cEluY3JlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGFueSByZW1haW5pbmcgb2xkIGdyb3VwcyB0aGF0IHdlcmUgZ3JlYXRlciB0aDFhbiBhbGwgbmV3IGtleXMuXG4gICAgICAgIC8vIE5vIGluY3JlbWVudGFsIHJlZHVjZSBpcyBuZWVkZWQ7IHRoZXNlIGdyb3VwcyBoYXZlIG5vIG5ldyByZWNvcmRzLlxuICAgICAgICAvLyBBbHNvIHJlY29yZCB0aGUgbmV3IGluZGV4IG9mIHRoZSBvbGQgZ3JvdXAuXG4gICAgICAgIHdoaWxlIChpMCA8IGswKSB7XG4gICAgICAgICAgZ3JvdXBzW3JlSW5kZXhbaTBdID0ga10gPSBvbGRHcm91cHNbaTArK107XG4gICAgICAgICAgZ3JvdXBJbmNyZW1lbnQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gRmlsbCBpbiBnYXBzIHdpdGggZW1wdHkgYXJyYXlzIHdoZXJlIHRoZXJlIG1heSBoYXZlIGJlZW4gcm93cyB3aXRoIGVtcHR5IGl0ZXJhYmxlc1xuICAgICAgICBpZihpdGVyYWJsZSl7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYoIWdyb3VwSW5kZXhbaV0pe1xuICAgICAgICAgICAgICBncm91cEluZGV4W2ldID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBhZGRlZCBhbnkgbmV3IGdyb3VwcyBiZWZvcmUgYW55IG9sZCBncm91cHMsXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZ3JvdXAgaW5kZXggb2YgYWxsIHRoZSBvbGQgcmVjb3Jkcy5cbiAgICAgICAgaWYoayA+IGkwKXtcbiAgICAgICAgICBpZihpdGVyYWJsZSl7XG4gICAgICAgICAgICBncm91cEluZGV4ID0gcGVybXV0ZShncm91cEluZGV4LCByZUluZGV4LCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgZm9yIChpMCA9IDA7IGkwIDwgbjA7ICsraTApIHtcbiAgICAgICAgICAgICAgZ3JvdXBJbmRleFtpMF0gPSByZUluZGV4W2dyb3VwSW5kZXhbaTBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb2RpZnkgdGhlIHVwZGF0ZSBhbmQgcmVzZXQgYmVoYXZpb3IgYmFzZWQgb24gdGhlIGNhcmRpbmFsaXR5LlxuICAgICAgICAvLyBJZiB0aGUgY2FyZGluYWxpdHkgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZSwgdGhlbiB0aGUgZ3JvdXBJbmRleFxuICAgICAgICAvLyBpcyBub3QgbmVlZGVkLiBJZiB0aGUgY2FyZGluYWxpdHkgaXMgemVybywgdGhlbiB0aGVyZSBhcmUgbm8gcmVjb3Jkc1xuICAgICAgICAvLyBhbmQgdGhlcmVmb3JlIG5vIGdyb3VwcyB0byB1cGRhdGUgb3IgcmVzZXQuIE5vdGUgdGhhdCB3ZSBhbHNvIG11c3RcbiAgICAgICAgLy8gY2hhbmdlIHRoZSByZWdpc3RlcmVkIGxpc3RlbmVyIHRvIHBvaW50IHRvIHRoZSBuZXcgbWV0aG9kLlxuICAgICAgICBqID0gZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKTtcbiAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgdXBkYXRlID0gdXBkYXRlTWFueTtcbiAgICAgICAgICByZXNldCA9IHJlc2V0TWFueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWsgJiYgZ3JvdXBBbGwpIHtcbiAgICAgICAgICAgIGsgPSAxO1xuICAgICAgICAgICAgZ3JvdXBzID0gW3trZXk6IG51bGwsIHZhbHVlOiBpbml0aWFsKCl9XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGsgPT09IDEpIHtcbiAgICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZU9uZTtcbiAgICAgICAgICAgIHJlc2V0ID0gcmVzZXRPbmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZSA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgICAgICByZXNldCA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyb3VwSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlckxpc3RlbmVyc1tqXSA9IHVwZGF0ZTtcblxuICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGFkZGVkIGdyb3VwcyxcbiAgICAgICAgLy8gYW5kIHdpZGVuIHRoZSBncm91cCBpbmRleCBhcyBuZWVkZWQuXG4gICAgICAgIGZ1bmN0aW9uIGdyb3VwSW5jcmVtZW50KCkge1xuICAgICAgICAgIGlmKGl0ZXJhYmxlKXtcbiAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgrK2sgPT09IGdyb3VwQ2FwYWNpdHkpIHtcbiAgICAgICAgICAgIHJlSW5kZXggPSB4ZmlsdGVyQXJyYXkuYXJyYXlXaWRlbihyZUluZGV4LCBncm91cFdpZHRoIDw8PSAxKTtcbiAgICAgICAgICAgIGdyb3VwSW5kZXggPSB4ZmlsdGVyQXJyYXkuYXJyYXlXaWRlbihncm91cEluZGV4LCBncm91cFdpZHRoKTtcbiAgICAgICAgICAgIGdyb3VwQ2FwYWNpdHkgPSBjcm9zc2ZpbHRlcl9jYXBhY2l0eShncm91cFdpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRGF0YSgpIHtcbiAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgdmFyIG9sZEsgPSBrLFxuICAgICAgICAgICAgICBvbGRHcm91cHMgPSBncm91cHMsXG4gICAgICAgICAgICAgIHNlZW5Hcm91cHMgPSBjcm9zc2ZpbHRlcl9pbmRleChvbGRLLCBvbGRLKTtcblxuICAgICAgICAgIC8vIEZpbHRlciBvdXQgbm9uLW1hdGNoZXMgYnkgY29weWluZyBtYXRjaGluZyBncm91cCBpbmRleCBlbnRyaWVzIHRvXG4gICAgICAgICAgLy8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcnMuemVybyhpKSkge1xuICAgICAgICAgICAgICBzZWVuR3JvdXBzW2dyb3VwSW5kZXhbal0gPSBncm91cEluZGV4W2ldXSA9IDE7XG4gICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZWFzc2VtYmxlIGdyb3VwcyBpbmNsdWRpbmcgb25seSB0aG9zZSBncm91cHMgdGhhdCB3ZXJlIHJlZmVycmVkXG4gICAgICAgICAgLy8gdG8gYnkgbWF0Y2hpbmcgZ3JvdXAgaW5kZXggZW50cmllcy4gIE5vdGUgdGhlIG5ldyBncm91cCBpbmRleCBpblxuICAgICAgICAgIC8vIHNlZW5Hcm91cHMuXG4gICAgICAgICAgZ3JvdXBzID0gW10sIGsgPSAwO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvbGRLOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChzZWVuR3JvdXBzW2ldKSB7XG4gICAgICAgICAgICAgIHNlZW5Hcm91cHNbaV0gPSBrKys7XG4gICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG9sZEdyb3Vwc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgICAvLyBSZWluZGV4IHRoZSBncm91cCBpbmRleCB1c2luZyBzZWVuR3JvdXBzIHRvIGZpbmQgdGhlIG5ldyBpbmRleC5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgajsgKytpKSBncm91cEluZGV4W2ldID0gc2Vlbkdyb3Vwc1tncm91cEluZGV4W2ldXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JvdXBJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpbHRlckxpc3RlbmVyc1tmaWx0ZXJMaXN0ZW5lcnMuaW5kZXhPZih1cGRhdGUpXSA9IGsgPiAxXG4gICAgICAgICAgICAgID8gKHJlc2V0ID0gcmVzZXRNYW55LCB1cGRhdGUgPSB1cGRhdGVNYW55KVxuICAgICAgICAgICAgICA6IGsgPT09IDEgPyAocmVzZXQgPSByZXNldE9uZSwgdXBkYXRlID0gdXBkYXRlT25lKVxuICAgICAgICAgICAgICA6IHJlc2V0ID0gdXBkYXRlID0gY3Jvc3NmaWx0ZXJfbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChrID09PSAxKSB7XG4gICAgICAgICAgaWYgKGdyb3VwQWxsKSByZXR1cm47XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIGlmICghZmlsdGVycy56ZXJvKGkpKSByZXR1cm47XG4gICAgICAgICAgZ3JvdXBzID0gW10sIGsgPSAwO1xuICAgICAgICAgIGZpbHRlckxpc3RlbmVyc1tmaWx0ZXJMaXN0ZW5lcnMuaW5kZXhPZih1cGRhdGUpXSA9XG4gICAgICAgICAgdXBkYXRlID0gcmVzZXQgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZHVjZXMgdGhlIHNwZWNpZmllZCBzZWxlY3RlZCBvciBkZXNlbGVjdGVkIHJlY29yZHMuXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIHRoZSBjYXJkaW5hbGl0eSBpcyBncmVhdGVyIHRoYW4gMS5cbiAgICAgIC8vIG5vdEZpbHRlciBpbmRpY2F0ZXMgYSBjcm9zc2ZpbHRlci5hZGQvcmVtb3ZlIG9wZXJhdGlvbi5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbnkoZmlsdGVyT25lLCBmaWx0ZXJPZmZzZXQsIGFkZGVkLCByZW1vdmVkLCBub3RGaWx0ZXIpIHtcblxuICAgICAgICBpZiAoKGZpbHRlck9uZSA9PT0gb25lICYmIGZpbHRlck9mZnNldCA9PT0gb2Zmc2V0KSB8fCByZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgZztcblxuICAgICAgICBpZihpdGVyYWJsZSl7XG4gICAgICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICAgICAgZm9yIChpID0gMCwgbiA9IGFkZGVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnMuemVyb0V4Y2VwdChrID0gYWRkZWRbaV0sIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGdyb3VwSW5kZXhba10ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhba11bal1dO1xuICAgICAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtrXSwgZmFsc2UsIGopO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSByZW1vdmVkIHZhbHVlcy5cbiAgICAgICAgICBmb3IgKGkgPSAwLCBuID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLm9ubHlFeGNlcHQoayA9IHJlbW92ZWRbaV0sIG9mZnNldCwgemVybywgZmlsdGVyT2Zmc2V0LCBmaWx0ZXJPbmUpKSB7XG4gICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBncm91cEluZGV4W2tdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2tdW2pdXTtcbiAgICAgICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFba10sIG5vdEZpbHRlciwgaik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBhZGRlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoZmlsdGVycy56ZXJvRXhjZXB0KGsgPSBhZGRlZFtpXSwgb2Zmc2V0LCB6ZXJvKSkge1xuICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2tdXTtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtrXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmIChmaWx0ZXJzLm9ubHlFeGNlcHQoayA9IHJlbW92ZWRbaV0sIG9mZnNldCwgemVybywgZmlsdGVyT2Zmc2V0LCBmaWx0ZXJPbmUpKSB7XG4gICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhba11dO1xuICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZVJlbW92ZShnLnZhbHVlLCBkYXRhW2tdLCBub3RGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgMS5cbiAgICAgIC8vIG5vdEZpbHRlciBpbmRpY2F0ZXMgYSBjcm9zc2ZpbHRlci5hZGQvcmVtb3ZlIG9wZXJhdGlvbi5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9uZShmaWx0ZXJPbmUsIGZpbHRlck9mZnNldCwgYWRkZWQsIHJlbW92ZWQsIG5vdEZpbHRlcikge1xuICAgICAgICBpZiAoKGZpbHRlck9uZSA9PT0gb25lICYmIGZpbHRlck9mZnNldCA9PT0gb2Zmc2V0KSB8fCByZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBnID0gZ3JvdXBzWzBdO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKGZpbHRlcnMuemVyb0V4Y2VwdChrID0gYWRkZWRbaV0sIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtrXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmIChmaWx0ZXJzLm9ubHlFeGNlcHQoayA9IHJlbW92ZWRbaV0sIG9mZnNldCwgemVybywgZmlsdGVyT2Zmc2V0LCBmaWx0ZXJPbmUpKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFba10sIG5vdEZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZXMgZnJvbSBzY3JhdGNoLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgZ3JlYXRlciB0aGFuIDEuXG4gICAgICBmdW5jdGlvbiByZXNldE1hbnkoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGc7XG5cbiAgICAgICAgLy8gUmVzZXQgYWxsIGdyb3VwIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7ICsraSkge1xuICAgICAgICAgIGdyb3Vwc1tpXS52YWx1ZSA9IHJlZHVjZUluaXRpYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGFkZCBhbGwgcmVjb3JkcyBhbmQgdGhlbiByZW1vdmUgZmlsdGVyZWQgcmVjb3JkcyBzbyB0aGF0IHJlZHVjZXJzXG4gICAgICAgIC8vIGNhbiBidWlsZCBhbiAndW5maWx0ZXJlZCcgdmlldyBldmVuIGlmIHRoZXJlIGFyZSBhbHJlYWR5IGZpbHRlcnMgaW5cbiAgICAgICAgLy8gcGxhY2Ugb24gb3RoZXIgZGltZW5zaW9ucy5cbiAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBncm91cEluZGV4W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtpXVtqXV07XG4gICAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtpXSwgdHJ1ZSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghZmlsdGVycy56ZXJvRXhjZXB0KGksIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGdyb3VwSW5kZXhbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhbaV1bal1dO1xuICAgICAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VSZW1vdmUoZy52YWx1ZSwgZGF0YVtpXSwgZmFsc2UsIGopO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhbaV1dO1xuICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtpXSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICghZmlsdGVycy56ZXJvRXhjZXB0KGksIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtpXV07XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFbaV0sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjb21wdXRlcyB0aGUgZ3JvdXAgcmVkdWNlIHZhbHVlcyBmcm9tIHNjcmF0Y2guXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIHRoZSBjYXJkaW5hbGl0eSBpcyAxLlxuICAgICAgZnVuY3Rpb24gcmVzZXRPbmUoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZyA9IGdyb3Vwc1swXTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgc2luZ2xldG9uIGdyb3VwIHZhbHVlcy5cbiAgICAgICAgZy52YWx1ZSA9IHJlZHVjZUluaXRpYWwoKTtcblxuICAgICAgICAvLyBXZSBhZGQgYWxsIHJlY29yZHMgYW5kIHRoZW4gcmVtb3ZlIGZpbHRlcmVkIHJlY29yZHMgc28gdGhhdCByZWR1Y2Vyc1xuICAgICAgICAvLyBjYW4gYnVpbGQgYW4gJ3VuZmlsdGVyZWQnIHZpZXcgZXZlbiBpZiB0aGVyZSBhcmUgYWxyZWFkeSBmaWx0ZXJzIGluXG4gICAgICAgIC8vIHBsYWNlIG9uIG90aGVyIGRpbWVuc2lvbnMuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFbaV0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICghZmlsdGVycy56ZXJvRXhjZXB0KGksIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VSZW1vdmUoZy52YWx1ZSwgZGF0YVtpXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBhcnJheSBvZiBncm91cCB2YWx1ZXMsIGluIHRoZSBkaW1lbnNpb24ncyBuYXR1cmFsIG9yZGVyLlxuICAgICAgZnVuY3Rpb24gYWxsKCkge1xuICAgICAgICBpZiAocmVzZXROZWVkZWQpIHJlc2V0KCksIHJlc2V0TmVlZGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgdG9wIEsgZ3JvdXAgdmFsdWVzLCBpbiByZWR1Y2Ugb3JkZXIuXG4gICAgICBmdW5jdGlvbiB0b3Aoaykge1xuICAgICAgICB2YXIgdG9wID0gc2VsZWN0KGFsbCgpLCAwLCBncm91cHMubGVuZ3RoLCBrKTtcbiAgICAgICAgcmV0dXJuIGhlYXAuc29ydCh0b3AsIDAsIHRvcC5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRoZSByZWR1Y2UgYmVoYXZpb3IgZm9yIHRoaXMgZ3JvdXAgdG8gdXNlIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb25zLlxuICAgICAgLy8gVGhpcyBtZXRob2QgbGF6aWx5IHJlY29tcHV0ZXMgdGhlIHJlZHVjZSB2YWx1ZXMsIHdhaXRpbmcgdW50aWwgbmVlZGVkLlxuICAgICAgZnVuY3Rpb24gcmVkdWNlKGFkZCwgcmVtb3ZlLCBpbml0aWFsKSB7XG4gICAgICAgIHJlZHVjZUFkZCA9IGFkZDtcbiAgICAgICAgcmVkdWNlUmVtb3ZlID0gcmVtb3ZlO1xuICAgICAgICByZWR1Y2VJbml0aWFsID0gaW5pdGlhbDtcbiAgICAgICAgcmVzZXROZWVkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBjb3VudC5cbiAgICAgIGZ1bmN0aW9uIHJlZHVjZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gcmVkdWNlKHhmaWx0ZXJSZWR1Y2UucmVkdWNlSW5jcmVtZW50LCB4ZmlsdGVyUmVkdWNlLnJlZHVjZURlY3JlbWVudCwgY3Jvc3NmaWx0ZXJfemVybyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBzdW0odmFsdWUpLlxuICAgICAgZnVuY3Rpb24gcmVkdWNlU3VtKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZWR1Y2UoeGZpbHRlclJlZHVjZS5yZWR1Y2VBZGQodmFsdWUpLCB4ZmlsdGVyUmVkdWNlLnJlZHVjZVN1YnRyYWN0KHZhbHVlKSwgY3Jvc3NmaWx0ZXJfemVybyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHMgdGhlIHJlZHVjZSBvcmRlciwgdXNpbmcgdGhlIHNwZWNpZmllZCBhY2Nlc3Nvci5cbiAgICAgIGZ1bmN0aW9uIG9yZGVyKHZhbHVlKSB7XG4gICAgICAgIHNlbGVjdCA9IHhmaWx0ZXJIZWFwc2VsZWN0LmJ5KHZhbHVlT2YpO1xuICAgICAgICBoZWFwID0geGZpbHRlckhlYXAuYnkodmFsdWVPZik7XG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlT2YoZCkgeyByZXR1cm4gdmFsdWUoZC52YWx1ZSk7IH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgbmF0dXJhbCBvcmRlcmluZyBieSByZWR1Y2UgdmFsdWUuXG4gICAgICBmdW5jdGlvbiBvcmRlck5hdHVyYWwoKSB7XG4gICAgICAgIHJldHVybiBvcmRlcihjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybnMgdGhlIGNhcmRpbmFsaXR5IG9mIHRoaXMgZ3JvdXAsIGlycmVzcGVjdGl2ZSBvZiBhbnkgZmlsdGVycy5cbiAgICAgIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBrO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmVzIHRoaXMgZ3JvdXAgYW5kIGFzc29jaWF0ZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgdmFyIGkgPSBmaWx0ZXJMaXN0ZW5lcnMuaW5kZXhPZih1cGRhdGUpO1xuICAgICAgICBpZiAoaSA+PSAwKSBmaWx0ZXJMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBpID0gaW5kZXhMaXN0ZW5lcnMuaW5kZXhPZihhZGQpO1xuICAgICAgICBpZiAoaSA+PSAwKSBpbmRleExpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGkgPSByZW1vdmVEYXRhTGlzdGVuZXJzLmluZGV4T2YocmVtb3ZlRGF0YSk7XG4gICAgICAgIGlmIChpID49IDApIHJlbW92ZURhdGFMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWR1Y2VDb3VudCgpLm9yZGVyTmF0dXJhbCgpO1xuICAgIH1cblxuICAgIC8vIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYSBzaW5nbGV0b24gZ3JvdXAuXG4gICAgZnVuY3Rpb24gZ3JvdXBBbGwoKSB7XG4gICAgICB2YXIgZyA9IGdyb3VwKGNyb3NzZmlsdGVyX251bGwpLCBhbGwgPSBnLmFsbDtcbiAgICAgIGRlbGV0ZSBnLmFsbDtcbiAgICAgIGRlbGV0ZSBnLnRvcDtcbiAgICAgIGRlbGV0ZSBnLm9yZGVyO1xuICAgICAgZGVsZXRlIGcub3JkZXJOYXR1cmFsO1xuICAgICAgZGVsZXRlIGcuc2l6ZTtcbiAgICAgIGcudmFsdWUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFsbCgpWzBdLnZhbHVlOyB9O1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGlzIGRpbWVuc2lvbiBhbmQgYXNzb2NpYXRlZCBncm91cHMgYW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgZGltZW5zaW9uR3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZ3JvdXApIHsgZ3JvdXAuZGlzcG9zZSgpOyB9KTtcbiAgICAgIHZhciBpID0gZGF0YUxpc3RlbmVycy5pbmRleE9mKHByZUFkZCk7XG4gICAgICBpZiAoaSA+PSAwKSBkYXRhTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGkgPSBkYXRhTGlzdGVuZXJzLmluZGV4T2YocG9zdEFkZCk7XG4gICAgICBpZiAoaSA+PSAwKSBkYXRhTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGkgPSByZW1vdmVEYXRhTGlzdGVuZXJzLmluZGV4T2YocmVtb3ZlRGF0YSk7XG4gICAgICBpZiAoaSA+PSAwKSByZW1vdmVEYXRhTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGZpbHRlcnMubWFza3Nbb2Zmc2V0XSAmPSB6ZXJvO1xuICAgICAgcmV0dXJuIGZpbHRlckFsbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaW1lbnNpb247XG4gIH1cblxuICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ3JvdXBBbGwgb24gYSBkdW1teSBkaW1lbnNpb24uXG4gIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuIGJlIG9wdGltaXplZCBzaW5jZSBpdCBhbHdheXMgaGFzIGNhcmRpbmFsaXR5IDEuXG4gIGZ1bmN0aW9uIGdyb3VwQWxsKCkge1xuICAgIHZhciBncm91cCA9IHtcbiAgICAgIHJlZHVjZTogcmVkdWNlLFxuICAgICAgcmVkdWNlQ291bnQ6IHJlZHVjZUNvdW50LFxuICAgICAgcmVkdWNlU3VtOiByZWR1Y2VTdW0sXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkaXNwb3NlOiBkaXNwb3NlLFxuICAgICAgcmVtb3ZlOiBkaXNwb3NlIC8vIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgIH07XG5cbiAgICB2YXIgcmVkdWNlVmFsdWUsXG4gICAgICAgIHJlZHVjZUFkZCxcbiAgICAgICAgcmVkdWNlUmVtb3ZlLFxuICAgICAgICByZWR1Y2VJbml0aWFsLFxuICAgICAgICByZXNldE5lZWRlZCA9IHRydWU7XG5cbiAgICAvLyBUaGUgZ3JvdXAgbGlzdGVucyB0byB0aGUgY3Jvc3NmaWx0ZXIgZm9yIHdoZW4gYW55IGRpbWVuc2lvbiBjaGFuZ2VzLCBzb1xuICAgIC8vIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgcmVkdWNlIHZhbHVlLiBJdCBtdXN0IGFsc28gbGlzdGVuIHRvIHRoZSBwYXJlbnRcbiAgICAvLyBkaW1lbnNpb24gZm9yIHdoZW4gZGF0YSBpcyBhZGRlZC5cbiAgICBmaWx0ZXJMaXN0ZW5lcnMucHVzaCh1cGRhdGUpO1xuICAgIGRhdGFMaXN0ZW5lcnMucHVzaChhZGQpO1xuXG4gICAgLy8gRm9yIGNvbnNpc3RlbmN5OyBhY3R1YWxseSBhIG5vLW9wIHNpbmNlIHJlc2V0TmVlZGVkIGlzIHRydWUuXG4gICAgYWRkKGRhdGEsIDAsIG4pO1xuXG4gICAgLy8gSW5jb3Jwb3JhdGVzIHRoZSBzcGVjaWZpZWQgbmV3IHZhbHVlcyBpbnRvIHRoaXMgZ3JvdXAuXG4gICAgZnVuY3Rpb24gYWRkKG5ld0RhdGEsIG4wKSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYgKHJlc2V0TmVlZGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYWxsIHRoZSB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSBuMDsgaSA8IG47ICsraSkge1xuXG4gICAgICAgIC8vIEFkZCBhbGwgdmFsdWVzIGFsbCB0aGUgdGltZS5cbiAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFbaV0sIHRydWUpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdmFsdWUgaWYgZmlsdGVyZWQuXG4gICAgICAgIGlmICghZmlsdGVycy56ZXJvKGkpKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VSZW1vdmUocmVkdWNlVmFsdWUsIGRhdGFbaV0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZHVjZXMgdGhlIHNwZWNpZmllZCBzZWxlY3RlZCBvciBkZXNlbGVjdGVkIHJlY29yZHMuXG4gICAgZnVuY3Rpb24gdXBkYXRlKGZpbHRlck9uZSwgZmlsdGVyT2Zmc2V0LCBhZGRlZCwgcmVtb3ZlZCwgbm90RmlsdGVyKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrLFxuICAgICAgICAgIG47XG5cbiAgICAgIGlmIChyZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBZGQgdGhlIGFkZGVkIHZhbHVlcy5cbiAgICAgIGZvciAoaSA9IDAsIG4gPSBhZGRlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGZpbHRlcnMuemVybyhrID0gYWRkZWRbaV0pKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFba10sIG5vdEZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSByZW1vdmVkIHZhbHVlcy5cbiAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoZmlsdGVycy5vbmx5KGsgPSByZW1vdmVkW2ldLCBmaWx0ZXJPZmZzZXQsIGZpbHRlck9uZSkpIHtcbiAgICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZVJlbW92ZShyZWR1Y2VWYWx1ZSwgZGF0YVtrXSwgbm90RmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZSBmcm9tIHNjcmF0Y2guXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VJbml0aWFsKCk7XG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYWxsIHRoZSB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG5cbiAgICAgICAgLy8gQWRkIGFsbCB2YWx1ZXMgYWxsIHRoZSB0aW1lLlxuICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZUFkZChyZWR1Y2VWYWx1ZSwgZGF0YVtpXSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB2YWx1ZSBpZiBpdCBpcyBmaWx0ZXJlZC5cbiAgICAgICAgaWYgKCFmaWx0ZXJzLnplcm8oaSkpIHtcbiAgICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZVJlbW92ZShyZWR1Y2VWYWx1ZSwgZGF0YVtpXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgcmVkdWNlIGJlaGF2aW9yIGZvciB0aGlzIGdyb3VwIHRvIHVzZSB0aGUgc3BlY2lmaWVkIGZ1bmN0aW9ucy5cbiAgICAvLyBUaGlzIG1ldGhvZCBsYXppbHkgcmVjb21wdXRlcyB0aGUgcmVkdWNlIHZhbHVlLCB3YWl0aW5nIHVudGlsIG5lZWRlZC5cbiAgICBmdW5jdGlvbiByZWR1Y2UoYWRkLCByZW1vdmUsIGluaXRpYWwpIHtcbiAgICAgIHJlZHVjZUFkZCA9IGFkZDtcbiAgICAgIHJlZHVjZVJlbW92ZSA9IHJlbW92ZTtcbiAgICAgIHJlZHVjZUluaXRpYWwgPSBpbml0aWFsO1xuICAgICAgcmVzZXROZWVkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cblxuICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBjb3VudC5cbiAgICBmdW5jdGlvbiByZWR1Y2VDb3VudCgpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoeGZpbHRlclJlZHVjZS5yZWR1Y2VJbmNyZW1lbnQsIHhmaWx0ZXJSZWR1Y2UucmVkdWNlRGVjcmVtZW50LCBjcm9zc2ZpbHRlcl96ZXJvKTtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgc3VtKHZhbHVlKS5cbiAgICBmdW5jdGlvbiByZWR1Y2VTdW0odmFsdWUpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoeGZpbHRlclJlZHVjZS5yZWR1Y2VBZGQodmFsdWUpLCB4ZmlsdGVyUmVkdWNlLnJlZHVjZVN1YnRyYWN0KHZhbHVlKSwgY3Jvc3NmaWx0ZXJfemVybyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgY29tcHV0ZWQgcmVkdWNlIHZhbHVlLlxuICAgIGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgaWYgKHJlc2V0TmVlZGVkKSByZXNldCgpLCByZXNldE5lZWRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHJlZHVjZVZhbHVlO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhpcyBncm91cCBhbmQgYXNzb2NpYXRlZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHZhciBpID0gZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKTtcbiAgICAgIGlmIChpID49IDApIGZpbHRlckxpc3RlbmVycy5zcGxpY2UoaSk7XG4gICAgICBpID0gZGF0YUxpc3RlbmVycy5pbmRleE9mKGFkZCk7XG4gICAgICBpZiAoaSA+PSAwKSBkYXRhTGlzdGVuZXJzLnNwbGljZShpKTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlQ291bnQoKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiByZWNvcmRzIGluIHRoaXMgY3Jvc3NmaWx0ZXIsIGlycmVzcGVjdGl2ZSBvZiBhbnkgZmlsdGVycy5cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIHJhdyByb3cgZGF0YSBjb250YWluZWQgaW4gdGhpcyBjcm9zc2ZpbHRlclxuICBmdW5jdGlvbiBhbGwoKXtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGNiKXtcbiAgICBpZih0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpe1xuICAgICAgY29uc29sZS53YXJuKCdvbkNoYW5nZSBjYWxsYmFjayBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsYmFja3MucHVzaChjYik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGNhbGxiYWNrcy5pbmRleE9mKGNiKSwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJPbkNoYW5nZShldmVudE5hbWUpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFja3NbaV0oZXZlbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyBhZGQoYXJndW1lbnRzWzBdKVxuICAgICAgOiBjcm9zc2ZpbHRlcjtcbn1cblxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBzaXplIG4sIGJpZyBlbm91Z2ggdG8gc3RvcmUgaWRzIHVwIHRvIG0uXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9pbmRleChuLCBtKSB7XG4gIHJldHVybiAobSA8IDB4MTAxXG4gICAgICA/IHhmaWx0ZXJBcnJheS5hcnJheTggOiBtIDwgMHgxMDAwMVxuICAgICAgPyB4ZmlsdGVyQXJyYXkuYXJyYXkxNlxuICAgICAgOiB4ZmlsdGVyQXJyYXkuYXJyYXkzMikobik7XG59XG5cbi8vIENvbnN0cnVjdHMgYSBuZXcgYXJyYXkgb2Ygc2l6ZSBuLCB3aXRoIHNlcXVlbnRpYWwgdmFsdWVzIGZyb20gMCB0byBuIC0gMS5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JhbmdlKG4pIHtcbiAgdmFyIHJhbmdlID0gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbik7XG4gIGZvciAodmFyIGkgPSAtMTsgKytpIDwgbjspIHJhbmdlW2ldID0gaTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9jYXBhY2l0eSh3KSB7XG4gIHJldHVybiB3ID09PSA4XG4gICAgICA/IDB4MTAwIDogdyA9PT0gMTZcbiAgICAgID8gMHgxMDAwMFxuICAgICAgOiAweDEwMDAwMDAwMDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvY3Jvc3NmaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIGNyb3NzZmlsdGVyX2ZpbHRlckV4YWN0KGJpc2VjdCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICByZXR1cm4gW2Jpc2VjdC5sZWZ0KHZhbHVlcywgdmFsdWUsIDAsIG4pLCBiaXNlY3QucmlnaHQodmFsdWVzLCB2YWx1ZSwgMCwgbildO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9maWx0ZXJSYW5nZShiaXNlY3QsIHJhbmdlKSB7XG4gIHZhciBtaW4gPSByYW5nZVswXSxcbiAgICAgIG1heCA9IHJhbmdlWzFdO1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgIHJldHVybiBbYmlzZWN0LmxlZnQodmFsdWVzLCBtaW4sIDAsIG4pLCBiaXNlY3QubGVmdCh2YWx1ZXMsIG1heCwgMCwgbildO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9maWx0ZXJBbGwodmFsdWVzKSB7XG4gIHJldHVybiBbMCwgdmFsdWVzLmxlbmd0aF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaWx0ZXJFeGFjdDogY3Jvc3NmaWx0ZXJfZmlsdGVyRXhhY3QsXG4gIGZpbHRlclJhbmdlOiBjcm9zc2ZpbHRlcl9maWx0ZXJSYW5nZSxcbiAgZmlsdGVyQWxsOiBjcm9zc2ZpbHRlcl9maWx0ZXJBbGxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2ZpbHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIHhGaWx0ZXJIZWFwID0gcmVxdWlyZSgnLi9oZWFwJyk7XG5cbmZ1bmN0aW9uIGhlYXBzZWxlY3RfYnkoZikge1xuICB2YXIgaGVhcCA9IHhGaWx0ZXJIZWFwLmJ5KGYpO1xuXG4gIC8vIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgdG9wIGsgZWxlbWVudHMgaW4gdGhlIGFycmF5IGFbbG86aGldLlxuICAvLyBUaGUgcmV0dXJuZWQgYXJyYXkgaXMgbm90IHNvcnRlZCwgYnV0IG1haW50YWlucyB0aGUgaGVhcCBwcm9wZXJ0eS4gSWYgayBpc1xuICAvLyBncmVhdGVyIHRoYW4gaGkgLSBsbywgdGhlbiBmZXdlciB0aGFuIGsgZWxlbWVudHMgd2lsbCBiZSByZXR1cm5lZC4gVGhlXG4gIC8vIG9yZGVyIG9mIGVsZW1lbnRzIGluIGEgaXMgdW5jaGFuZ2VkIGJ5IHRoaXMgb3BlcmF0aW9uLlxuICBmdW5jdGlvbiBoZWFwc2VsZWN0KGEsIGxvLCBoaSwgaykge1xuICAgIHZhciBxdWV1ZSA9IG5ldyBBcnJheShrID0gTWF0aC5taW4oaGkgLSBsbywgaykpLFxuICAgICAgICBtaW4sXG4gICAgICAgIGksXG4gICAgICAgIHgsXG4gICAgICAgIGQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgazsgKytpKSBxdWV1ZVtpXSA9IGFbbG8rK107XG4gICAgaGVhcChxdWV1ZSwgMCwgayk7XG5cbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgbWluID0gZihxdWV1ZVswXSk7XG4gICAgICBkbyB7XG4gICAgICAgIGlmICh4ID0gZihkID0gYVtsb10pID4gbWluKSB7XG4gICAgICAgICAgcXVldWVbMF0gPSBkO1xuICAgICAgICAgIG1pbiA9IGYoaGVhcChxdWV1ZSwgMCwgaylbMF0pO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlICgrK2xvIDwgaGkpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWV1ZTtcbiAgfVxuXG4gIHJldHVybiBoZWFwc2VsZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYXBzZWxlY3RfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xubW9kdWxlLmV4cG9ydHMuYnkgPSBoZWFwc2VsZWN0X2J5OyAvLyBhc3NpZ24gdGhlIHJhdyBmdW5jdGlvbiB0byB0aGUgZXhwb3J0IGFzIHdlbGxcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvaGVhcHNlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfbnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3Jvc3NmaWx0ZXJfbnVsbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvbnVsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgaW5kZXgsIGRlZXApIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBpbmRleC5sZW5ndGgsIGNvcHkgPSBkZWVwID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnJheSkpIDogbmV3IEFycmF5KG4pOyBpIDwgbjsgKytpKSB7XG4gICAgY29weVtpXSA9IGFycmF5W2luZGV4W2ldXTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwZXJtdXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9wZXJtdXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgY3Jvc3NmaWx0ZXJfaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG52YXIgeEZpbHRlckluc2VydGlvbnNvcnQgPSByZXF1aXJlKCcuL2luc2VydGlvbnNvcnQnKTtcblxuLy8gQWxnb3JpdGhtIGRlc2lnbmVkIGJ5IFZsYWRpbWlyIFlhcm9zbGF2c2tpeS5cbi8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIHRoZSBEYXJ0IHByb2plY3Q7IHNlZSBOT1RJQ0UgYW5kIEFVVEhPUlMgZm9yIGRldGFpbHMuXG5cbmZ1bmN0aW9uIHF1aWNrc29ydF9ieShmKSB7XG4gIHZhciBpbnNlcnRpb25zb3J0ID0geEZpbHRlckluc2VydGlvbnNvcnQuYnkoZik7XG5cbiAgZnVuY3Rpb24gc29ydChhLCBsbywgaGkpIHtcbiAgICByZXR1cm4gKGhpIC0gbG8gPCBxdWlja3NvcnRfc2l6ZVRocmVzaG9sZFxuICAgICAgICA/IGluc2VydGlvbnNvcnRcbiAgICAgICAgOiBxdWlja3NvcnQpKGEsIGxvLCBoaSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja3NvcnQoYSwgbG8sIGhpKSB7XG4gICAgLy8gQ29tcHV0ZSB0aGUgdHdvIHBpdm90cyBieSBsb29raW5nIGF0IDUgZWxlbWVudHMuXG4gICAgdmFyIHNpeHRoID0gKGhpIC0gbG8pIC8gNiB8IDAsXG4gICAgICAgIGkxID0gbG8gKyBzaXh0aCxcbiAgICAgICAgaTUgPSBoaSAtIDEgLSBzaXh0aCxcbiAgICAgICAgaTMgPSBsbyArIGhpIC0gMSA+PiAxLCAgLy8gVGhlIG1pZHBvaW50LlxuICAgICAgICBpMiA9IGkzIC0gc2l4dGgsXG4gICAgICAgIGk0ID0gaTMgKyBzaXh0aDtcblxuICAgIHZhciBlMSA9IGFbaTFdLCB4MSA9IGYoZTEpLFxuICAgICAgICBlMiA9IGFbaTJdLCB4MiA9IGYoZTIpLFxuICAgICAgICBlMyA9IGFbaTNdLCB4MyA9IGYoZTMpLFxuICAgICAgICBlNCA9IGFbaTRdLCB4NCA9IGYoZTQpLFxuICAgICAgICBlNSA9IGFbaTVdLCB4NSA9IGYoZTUpO1xuXG4gICAgdmFyIHQ7XG5cbiAgICAvLyBTb3J0IHRoZSBzZWxlY3RlZCA1IGVsZW1lbnRzIHVzaW5nIGEgc29ydGluZyBuZXR3b3JrLlxuICAgIGlmICh4MSA+IHgyKSB0ID0gZTEsIGUxID0gZTIsIGUyID0gdCwgdCA9IHgxLCB4MSA9IHgyLCB4MiA9IHQ7XG4gICAgaWYgKHg0ID4geDUpIHQgPSBlNCwgZTQgPSBlNSwgZTUgPSB0LCB0ID0geDQsIHg0ID0geDUsIHg1ID0gdDtcbiAgICBpZiAoeDEgPiB4MykgdCA9IGUxLCBlMSA9IGUzLCBlMyA9IHQsIHQgPSB4MSwgeDEgPSB4MywgeDMgPSB0O1xuICAgIGlmICh4MiA+IHgzKSB0ID0gZTIsIGUyID0gZTMsIGUzID0gdCwgdCA9IHgyLCB4MiA9IHgzLCB4MyA9IHQ7XG4gICAgaWYgKHgxID4geDQpIHQgPSBlMSwgZTEgPSBlNCwgZTQgPSB0LCB0ID0geDEsIHgxID0geDQsIHg0ID0gdDtcbiAgICBpZiAoeDMgPiB4NCkgdCA9IGUzLCBlMyA9IGU0LCBlNCA9IHQsIHQgPSB4MywgeDMgPSB4NCwgeDQgPSB0O1xuICAgIGlmICh4MiA+IHg1KSB0ID0gZTIsIGUyID0gZTUsIGU1ID0gdCwgdCA9IHgyLCB4MiA9IHg1LCB4NSA9IHQ7XG4gICAgaWYgKHgyID4geDMpIHQgPSBlMiwgZTIgPSBlMywgZTMgPSB0LCB0ID0geDIsIHgyID0geDMsIHgzID0gdDtcbiAgICBpZiAoeDQgPiB4NSkgdCA9IGU0LCBlNCA9IGU1LCBlNSA9IHQsIHQgPSB4NCwgeDQgPSB4NSwgeDUgPSB0O1xuXG4gICAgdmFyIHBpdm90MSA9IGUyLCBwaXZvdFZhbHVlMSA9IHgyLFxuICAgICAgICBwaXZvdDIgPSBlNCwgcGl2b3RWYWx1ZTIgPSB4NDtcblxuICAgIC8vIGUyIGFuZCBlNCBoYXZlIGJlZW4gc2F2ZWQgaW4gdGhlIHBpdm90IHZhcmlhYmxlcy4gVGhleSB3aWxsIGJlIHdyaXR0ZW5cbiAgICAvLyBiYWNrLCBvbmNlIHRoZSBwYXJ0aXRpb25pbmcgaXMgZmluaXNoZWQuXG4gICAgYVtpMV0gPSBlMTtcbiAgICBhW2kyXSA9IGFbbG9dO1xuICAgIGFbaTNdID0gZTM7XG4gICAgYVtpNF0gPSBhW2hpIC0gMV07XG4gICAgYVtpNV0gPSBlNTtcblxuICAgIHZhciBsZXNzID0gbG8gKyAxLCAgIC8vIEZpcnN0IGVsZW1lbnQgaW4gdGhlIG1pZGRsZSBwYXJ0aXRpb24uXG4gICAgICAgIGdyZWF0ID0gaGkgLSAyOyAgLy8gTGFzdCBlbGVtZW50IGluIHRoZSBtaWRkbGUgcGFydGl0aW9uLlxuXG4gICAgLy8gTm90ZSB0aGF0IGZvciB2YWx1ZSBjb21wYXJpc29uLCA8LCA8PSwgPj0gYW5kID4gY29lcmNlIHRvIGEgcHJpbWl0aXZlIHZpYVxuICAgIC8vIE9iamVjdC5wcm90b3R5cGUudmFsdWVPZjsgPT0gYW5kID09PSBkbyBub3QsIHNvIGluIG9yZGVyIHRvIGJlIGNvbnNpc3RlbnRcbiAgICAvLyB3aXRoIG5hdHVyYWwgb3JkZXIgKHN1Y2ggYXMgZm9yIERhdGUgb2JqZWN0cyksIHdlIG11c3QgZG8gdHdvIGNvbXBhcmVzLlxuICAgIHZhciBwaXZvdHNFcXVhbCA9IHBpdm90VmFsdWUxIDw9IHBpdm90VmFsdWUyICYmIHBpdm90VmFsdWUxID49IHBpdm90VmFsdWUyO1xuICAgIGlmIChwaXZvdHNFcXVhbCkge1xuXG4gICAgICAvLyBEZWdlbmVyYXRlZCBjYXNlIHdoZXJlIHRoZSBwYXJ0aXRpb25pbmcgYmVjb21lcyBhIGR1dGNoIG5hdGlvbmFsIGZsYWdcbiAgICAgIC8vIHByb2JsZW0uXG4gICAgICAvL1xuICAgICAgLy8gWyB8ICA8IHBpdm90ICB8ID09IHBpdm90IHwgdW5wYXJ0aXRpb25lZCB8ID4gcGl2b3QgIHwgXVxuICAgICAgLy8gIF4gICAgICAgICAgICAgXiAgICAgICAgICBeICAgICAgICAgICAgIF4gICAgICAgICAgICBeXG4gICAgICAvLyBsZWZ0ICAgICAgICAgbGVzcyAgICAgICAgIGsgICAgICAgICAgIGdyZWF0ICAgICAgICAgcmlnaHRcbiAgICAgIC8vXG4gICAgICAvLyBhW2xlZnRdIGFuZCBhW3JpZ2h0XSBhcmUgdW5kZWZpbmVkIGFuZCBhcmUgZmlsbGVkIGFmdGVyIHRoZVxuICAgICAgLy8gcGFydGl0aW9uaW5nLlxuICAgICAgLy9cbiAgICAgIC8vIEludmFyaWFudHM6XG4gICAgICAvLyAgIDEpIGZvciB4IGluIF1sZWZ0LCBsZXNzWyA6IHggPCBwaXZvdC5cbiAgICAgIC8vICAgMikgZm9yIHggaW4gW2xlc3MsIGtbIDogeCA9PSBwaXZvdC5cbiAgICAgIC8vICAgMykgZm9yIHggaW4gXWdyZWF0LCByaWdodFsgOiB4ID4gcGl2b3QuXG4gICAgICBmb3IgKHZhciBrID0gbGVzczsgayA8PSBncmVhdDsgKytrKSB7XG4gICAgICAgIHZhciBlayA9IGFba10sIHhrID0gZihlayk7XG4gICAgICAgIGlmICh4ayA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgaWYgKGsgIT09IGxlc3MpIHtcbiAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgYVtsZXNzXSA9IGVrO1xuICAgICAgICAgIH1cbiAgICAgICAgICArK2xlc3M7XG4gICAgICAgIH0gZWxzZSBpZiAoeGsgPiBwaXZvdFZhbHVlMSkge1xuXG4gICAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZWxlbWVudCA8PSBwaXZvdCBpbiB0aGUgcmFuZ2UgW2sgLSAxLCBncmVhdF0gYW5kXG4gICAgICAgICAgLy8gcHV0IFs6ZWs6XSB0aGVyZS4gV2Uga25vdyB0aGF0IHN1Y2ggYW4gZWxlbWVudCBtdXN0IGV4aXN0OlxuICAgICAgICAgIC8vIFdoZW4gayA9PSBsZXNzLCB0aGVuIGVsMyAod2hpY2ggaXMgZXF1YWwgdG8gcGl2b3QpIGxpZXMgaW4gdGhlXG4gICAgICAgICAgLy8gaW50ZXJ2YWwuIE90aGVyd2lzZSBhW2sgLSAxXSA9PSBwaXZvdCBhbmQgdGhlIHNlYXJjaCBzdG9wcyBhdCBrLTEuXG4gICAgICAgICAgLy8gTm90ZSB0aGF0IGluIHRoZSBsYXR0ZXIgY2FzZSBpbnZhcmlhbnQgMiB3aWxsIGJlIHZpb2xhdGVkIGZvciBhXG4gICAgICAgICAgLy8gc2hvcnQgYW1vdW50IG9mIHRpbWUuIFRoZSBpbnZhcmlhbnQgd2lsbCBiZSByZXN0b3JlZCB3aGVuIHRoZVxuICAgICAgICAgIC8vIHBpdm90cyBhcmUgcHV0IGludG8gdGhlaXIgZmluYWwgcG9zaXRpb25zLlxuICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pO1xuICAgICAgICAgICAgaWYgKGdyZWF0VmFsdWUgPiBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgICAgICBncmVhdC0tO1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGxvY2F0aW9uIGluIHRoZSB3aGlsZS1sb29wIHdoZXJlIGEgbmV3XG4gICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiBpcyBzdGFydGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JlYXRWYWx1ZSA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgICAgIC8vIFRyaXBsZSBleGNoYW5nZS5cbiAgICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICAgIGFbbGVzcysrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYVtrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgIC8vIE5vdGU6IGlmIGdyZWF0IDwgayB0aGVuIHdlIHdpbGwgZXhpdCB0aGUgb3V0ZXIgbG9vcCBhbmQgZml4XG4gICAgICAgICAgICAgIC8vIGludmFyaWFudCAyICh3aGljaCB3ZSBqdXN0IHZpb2xhdGVkKS5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gV2UgcGFydGl0aW9uIHRoZSBsaXN0IGludG8gdGhyZWUgcGFydHM6XG4gICAgICAvLyAgMS4gPCBwaXZvdDFcbiAgICAgIC8vICAyLiA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyXG4gICAgICAvLyAgMy4gPiBwaXZvdDJcbiAgICAgIC8vXG4gICAgICAvLyBEdXJpbmcgdGhlIGxvb3Agd2UgaGF2ZTpcbiAgICAgIC8vIFsgfCA8IHBpdm90MSB8ID49IHBpdm90MSAmJiA8PSBwaXZvdDIgfCB1bnBhcnRpdGlvbmVkICB8ID4gcGl2b3QyICB8IF1cbiAgICAgIC8vICBeICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICAgIF4gICAgICAgICAgICAgIF4gICAgICAgICAgICAgXlxuICAgICAgLy8gbGVmdCAgICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICAgICBrICAgICAgICAgICAgICBncmVhdCAgICAgICAgcmlnaHRcbiAgICAgIC8vXG4gICAgICAvLyBhW2xlZnRdIGFuZCBhW3JpZ2h0XSBhcmUgdW5kZWZpbmVkIGFuZCBhcmUgZmlsbGVkIGFmdGVyIHRoZVxuICAgICAgLy8gcGFydGl0aW9uaW5nLlxuICAgICAgLy9cbiAgICAgIC8vIEludmFyaWFudHM6XG4gICAgICAvLyAgIDEuIGZvciB4IGluIF1sZWZ0LCBsZXNzWyA6IHggPCBwaXZvdDFcbiAgICAgIC8vICAgMi4gZm9yIHggaW4gW2xlc3MsIGtbIDogcGl2b3QxIDw9IHggJiYgeCA8PSBwaXZvdDJcbiAgICAgIC8vICAgMy4gZm9yIHggaW4gXWdyZWF0LCByaWdodFsgOiB4ID4gcGl2b3QyXG4gICAgICBmb3IgKHZhciBrID0gbGVzczsgayA8PSBncmVhdDsgaysrKSB7XG4gICAgICAgIHZhciBlayA9IGFba10sIHhrID0gZihlayk7XG4gICAgICAgIGlmICh4ayA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgaWYgKGsgIT09IGxlc3MpIHtcbiAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgYVtsZXNzXSA9IGVrO1xuICAgICAgICAgIH1cbiAgICAgICAgICArK2xlc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHhrID4gcGl2b3RWYWx1ZTIpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgIHZhciBncmVhdFZhbHVlID0gZihhW2dyZWF0XSk7XG4gICAgICAgICAgICAgIGlmIChncmVhdFZhbHVlID4gcGl2b3RWYWx1ZTIpIHtcbiAgICAgICAgICAgICAgICBncmVhdC0tO1xuICAgICAgICAgICAgICAgIGlmIChncmVhdCA8IGspIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgbG9jYXRpb24gaW5zaWRlIHRoZSBsb29wIHdoZXJlIGEgbmV3XG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIGlzIHN0YXJ0ZWQuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYVtncmVhdF0gPD0gcGl2b3QyLlxuICAgICAgICAgICAgICAgIGlmIChncmVhdFZhbHVlIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRyaXBsZSBleGNoYW5nZS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgICAgICAgYVtsZXNzKytdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdID49IHBpdm90MS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNb3ZlIHBpdm90cyBpbnRvIHRoZWlyIGZpbmFsIHBvc2l0aW9ucy5cbiAgICAvLyBXZSBzaHJ1bmsgdGhlIGxpc3QgZnJvbSBib3RoIHNpZGVzIChhW2xlZnRdIGFuZCBhW3JpZ2h0XSBoYXZlXG4gICAgLy8gbWVhbmluZ2xlc3MgdmFsdWVzIGluIHRoZW0pIGFuZCBub3cgd2UgbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBmaXJzdFxuICAgIC8vIGFuZCB0aGlyZCBwYXJ0aXRpb24gaW50byB0aGVzZSBsb2NhdGlvbnMgc28gdGhhdCB3ZSBjYW4gc3RvcmUgdGhlXG4gICAgLy8gcGl2b3RzLlxuICAgIGFbbG9dID0gYVtsZXNzIC0gMV07XG4gICAgYVtsZXNzIC0gMV0gPSBwaXZvdDE7XG4gICAgYVtoaSAtIDFdID0gYVtncmVhdCArIDFdO1xuICAgIGFbZ3JlYXQgKyAxXSA9IHBpdm90MjtcblxuICAgIC8vIFRoZSBsaXN0IGlzIG5vdyBwYXJ0aXRpb25lZCBpbnRvIHRocmVlIHBhcnRpdGlvbnM6XG4gICAgLy8gWyA8IHBpdm90MSAgIHwgPj0gcGl2b3QxICYmIDw9IHBpdm90MiAgIHwgID4gcGl2b3QyICAgXVxuICAgIC8vICBeICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICAgIF4gICAgICAgICAgICAgXlxuICAgIC8vIGxlZnQgICAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICAgZ3JlYXQgICAgICAgIHJpZ2h0XG5cbiAgICAvLyBSZWN1cnNpdmUgZGVzY2VudC4gKERvbid0IGluY2x1ZGUgdGhlIHBpdm90IHZhbHVlcy4pXG4gICAgc29ydChhLCBsbywgbGVzcyAtIDEpO1xuICAgIHNvcnQoYSwgZ3JlYXQgKyAyLCBoaSk7XG5cbiAgICBpZiAocGl2b3RzRXF1YWwpIHtcbiAgICAgIC8vIEFsbCBlbGVtZW50cyBpbiB0aGUgc2Vjb25kIHBhcnRpdGlvbiBhcmUgZXF1YWwgdG8gdGhlIHBpdm90LiBOb1xuICAgICAgLy8gbmVlZCB0byBzb3J0IHRoZW0uXG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICAvLyBJbiB0aGVvcnkgaXQgc2hvdWxkIGJlIGVub3VnaCB0byBjYWxsIF9kb1NvcnQgcmVjdXJzaXZlbHkgb24gdGhlIHNlY29uZFxuICAgIC8vIHBhcnRpdGlvbi5cbiAgICAvLyBUaGUgQW5kcm9pZCBzb3VyY2UgaG93ZXZlciByZW1vdmVzIHRoZSBwaXZvdCBlbGVtZW50cyBmcm9tIHRoZSByZWN1cnNpdmVcbiAgICAvLyBjYWxsIGlmIHRoZSBzZWNvbmQgcGFydGl0aW9uIGlzIHRvbyBsYXJnZSAobW9yZSB0aGFuIDIvMyBvZiB0aGUgbGlzdCkuXG4gICAgaWYgKGxlc3MgPCBpMSAmJiBncmVhdCA+IGk1KSB7XG4gICAgICB2YXIgbGVzc1ZhbHVlLCBncmVhdFZhbHVlO1xuICAgICAgd2hpbGUgKChsZXNzVmFsdWUgPSBmKGFbbGVzc10pKSA8PSBwaXZvdFZhbHVlMSAmJiBsZXNzVmFsdWUgPj0gcGl2b3RWYWx1ZTEpICsrbGVzcztcbiAgICAgIHdoaWxlICgoZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pKSA8PSBwaXZvdFZhbHVlMiAmJiBncmVhdFZhbHVlID49IHBpdm90VmFsdWUyKSAtLWdyZWF0O1xuXG4gICAgICAvLyBDb3B5IHBhc3RlIG9mIHRoZSBwcmV2aW91cyAzLXdheSBwYXJ0aXRpb25pbmcgd2l0aCBhZGFwdGlvbnMuXG4gICAgICAvL1xuICAgICAgLy8gV2UgcGFydGl0aW9uIHRoZSBsaXN0IGludG8gdGhyZWUgcGFydHM6XG4gICAgICAvLyAgMS4gPT0gcGl2b3QxXG4gICAgICAvLyAgMi4gPiBwaXZvdDEgJiYgPCBwaXZvdDJcbiAgICAgIC8vICAzLiA9PSBwaXZvdDJcbiAgICAgIC8vXG4gICAgICAvLyBEdXJpbmcgdGhlIGxvb3Agd2UgaGF2ZTpcbiAgICAgIC8vIFsgPT0gcGl2b3QxIHwgPiBwaXZvdDEgJiYgPCBwaXZvdDIgfCB1bnBhcnRpdGlvbmVkICB8ID09IHBpdm90MiBdXG4gICAgICAvLyAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgICBeXG4gICAgICAvLyAgICAgICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICAgICBrICAgICAgICAgICAgICBncmVhdFxuICAgICAgLy9cbiAgICAgIC8vIEludmFyaWFudHM6XG4gICAgICAvLyAgIDEuIGZvciB4IGluIFsgKiwgbGVzc1sgOiB4ID09IHBpdm90MVxuICAgICAgLy8gICAyLiBmb3IgeCBpbiBbbGVzcywga1sgOiBwaXZvdDEgPCB4ICYmIHggPCBwaXZvdDJcbiAgICAgIC8vICAgMy4gZm9yIHggaW4gXWdyZWF0LCAqIF0gOiB4ID09IHBpdm90MlxuICAgICAgZm9yICh2YXIgayA9IGxlc3M7IGsgPD0gZ3JlYXQ7IGsrKykge1xuICAgICAgICB2YXIgZWsgPSBhW2tdLCB4ayA9IGYoZWspO1xuICAgICAgICBpZiAoeGsgPD0gcGl2b3RWYWx1ZTEgJiYgeGsgPj0gcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICBpZiAoayAhPT0gbGVzcykge1xuICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICBhW2xlc3NdID0gZWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlc3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoeGsgPD0gcGl2b3RWYWx1ZTIgJiYgeGsgPj0gcGl2b3RWYWx1ZTIpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgIHZhciBncmVhdFZhbHVlID0gZihhW2dyZWF0XSk7XG4gICAgICAgICAgICAgIGlmIChncmVhdFZhbHVlIDw9IHBpdm90VmFsdWUyICYmIGdyZWF0VmFsdWUgPj0gcGl2b3RWYWx1ZTIpIHtcbiAgICAgICAgICAgICAgICBncmVhdC0tO1xuICAgICAgICAgICAgICAgIGlmIChncmVhdCA8IGspIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgbG9jYXRpb24gaW5zaWRlIHRoZSBsb29wIHdoZXJlIGEgbmV3XG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIGlzIHN0YXJ0ZWQuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYVtncmVhdF0gPCBwaXZvdDIuXG4gICAgICAgICAgICAgICAgaWYgKGdyZWF0VmFsdWUgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgICAgICAgICAgLy8gVHJpcGxlIGV4Y2hhbmdlLlxuICAgICAgICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICAgICAgICBhW2xlc3MrK10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gYVtncmVhdF0gPT0gcGl2b3QxLlxuICAgICAgICAgICAgICAgICAgYVtrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBzZWNvbmQgcGFydGl0aW9uIGhhcyBub3cgYmVlbiBjbGVhcmVkIG9mIHBpdm90IGVsZW1lbnRzIGFuZCBsb29rc1xuICAgIC8vIGFzIGZvbGxvd3M6XG4gICAgLy8gWyAgKiAgfCAgPiBwaXZvdDEgJiYgPCBwaXZvdDIgIHwgKiBdXG4gICAgLy8gICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgXlxuICAgIC8vICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICBncmVhdFxuICAgIC8vIFNvcnQgdGhlIHNlY29uZCBwYXJ0aXRpb24gdXNpbmcgcmVjdXJzaXZlIGRlc2NlbnQuXG5cbiAgICAvLyBUaGUgc2Vjb25kIHBhcnRpdGlvbiBsb29rcyBhcyBmb2xsb3dzOlxuICAgIC8vIFsgICogIHwgID49IHBpdm90MSAmJiA8PSBwaXZvdDIgIHwgKiBdXG4gICAgLy8gICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICBeXG4gICAgLy8gICAgICAgbGVzcyAgICAgICAgICAgICAgICAgICAgZ3JlYXRcbiAgICAvLyBTaW1wbHkgc29ydCBpdCBieSByZWN1cnNpdmUgZGVzY2VudC5cblxuICAgIHJldHVybiBzb3J0KGEsIGxlc3MsIGdyZWF0ICsgMSk7XG4gIH1cblxuICByZXR1cm4gc29ydDtcbn1cblxudmFyIHF1aWNrc29ydF9zaXplVGhyZXNob2xkID0gMzI7XG5cbm1vZHVsZS5leHBvcnRzID0gcXVpY2tzb3J0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcbm1vZHVsZS5leHBvcnRzLmJ5ID0gcXVpY2tzb3J0X2J5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9xdWlja3NvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZUluY3JlbWVudChwKSB7XG4gIHJldHVybiBwICsgMTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfcmVkdWNlRGVjcmVtZW50KHApIHtcbiAgcmV0dXJuIHAgLSAxO1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VBZGQoZikge1xuICByZXR1cm4gZnVuY3Rpb24ocCwgdikge1xuICAgIHJldHVybiBwICsgK2Yodik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZVN1YnRyYWN0KGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHAsIHYpIHtcbiAgICByZXR1cm4gcCAtIGYodik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWR1Y2VJbmNyZW1lbnQ6IGNyb3NzZmlsdGVyX3JlZHVjZUluY3JlbWVudCxcbiAgcmVkdWNlRGVjcmVtZW50OiBjcm9zc2ZpbHRlcl9yZWR1Y2VEZWNyZW1lbnQsXG4gIHJlZHVjZUFkZDogY3Jvc3NmaWx0ZXJfcmVkdWNlQWRkLFxuICByZWR1Y2VTdWJ0cmFjdDogY3Jvc3NmaWx0ZXJfcmVkdWNlU3VidHJhY3Rcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL3JlZHVjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3Jvc3NmaWx0ZXJfemVybztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvemVyby5qc1xuICoqIG1vZHVsZSBpZCA9IDIxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiX2FyZ3NcIjogW1xuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0XCJyYXdcIjogXCJjcm9zc2ZpbHRlcjJAMS40LjAtYWxwaGEuNlwiLFxuXHRcdFx0XHRcInNjb3BlXCI6IG51bGwsXG5cdFx0XHRcdFwiZXNjYXBlZE5hbWVcIjogXCJjcm9zc2ZpbHRlcjJcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiY3Jvc3NmaWx0ZXIyXCIsXG5cdFx0XHRcdFwicmF3U3BlY1wiOiBcIjEuNC4wLWFscGhhLjZcIixcblx0XHRcdFx0XCJzcGVjXCI6IFwiMS40LjAtYWxwaGEuNlwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ2ZXJzaW9uXCJcblx0XHRcdH0sXG5cdFx0XHRcIi9Vc2Vycy9NYXJzaGFsbC9UaG9tYXNXb3JrL3dvcmstcHJvamVjdC8yMDE2MTItaGVuZ3NoaS5pby9tYWthbHUvbm9kZV9tb2R1bGVzL3VuaXZlcnNlXCJcblx0XHRdXG5cdF0sXG5cdFwiX2NucG1fcHVibGlzaF90aW1lXCI6IDE0NjM1MTk1NzQ0MDUsXG5cdFwiX2Zyb21cIjogXCJjcm9zc2ZpbHRlcjJAMS40LjAtYWxwaGEuNlwiLFxuXHRcIl9pZFwiOiBcImNyb3NzZmlsdGVyMkAxLjQuMC1hbHBoYS42XCIsXG5cdFwiX2luQ2FjaGVcIjogdHJ1ZSxcblx0XCJfbG9jYXRpb25cIjogXCIvY3Jvc3NmaWx0ZXIyXCIsXG5cdFwiX25vZGVWZXJzaW9uXCI6IFwiNS4xMC4xXCIsXG5cdFwiX25wbU9wZXJhdGlvbmFsSW50ZXJuYWxcIjoge1xuXHRcdFwiaG9zdFwiOiBcInBhY2thZ2VzLTEyLXdlc3QuaW50ZXJuYWwubnBtanMuY29tXCIsXG5cdFx0XCJ0bXBcIjogXCJ0bXAvY3Jvc3NmaWx0ZXIyLTEuNC4wLWFscGhhLjYudGd6XzE0NjM1MTk1NzE3ODZfMC40OTI2OTY3MTI0OTIwMzM4NFwiXG5cdH0sXG5cdFwiX25wbVVzZXJcIjoge1xuXHRcdFwibmFtZVwiOiBcImVzamV3ZXR0XCIsXG5cdFx0XCJlbWFpbFwiOiBcImVzamV3ZXR0QGdtYWlsLmNvbVwiXG5cdH0sXG5cdFwiX25wbVZlcnNpb25cIjogXCIzLjguM1wiLFxuXHRcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG5cdFwiX3JlcXVlc3RlZFwiOiB7XG5cdFx0XCJyYXdcIjogXCJjcm9zc2ZpbHRlcjJAMS40LjAtYWxwaGEuNlwiLFxuXHRcdFwic2NvcGVcIjogbnVsbCxcblx0XHRcImVzY2FwZWROYW1lXCI6IFwiY3Jvc3NmaWx0ZXIyXCIsXG5cdFx0XCJuYW1lXCI6IFwiY3Jvc3NmaWx0ZXIyXCIsXG5cdFx0XCJyYXdTcGVjXCI6IFwiMS40LjAtYWxwaGEuNlwiLFxuXHRcdFwic3BlY1wiOiBcIjEuNC4wLWFscGhhLjZcIixcblx0XHRcInR5cGVcIjogXCJ2ZXJzaW9uXCJcblx0fSxcblx0XCJfcmVxdWlyZWRCeVwiOiBbXG5cdFx0XCIvcmVkdWN0aW9cIixcblx0XHRcIi91bml2ZXJzZVwiXG5cdF0sXG5cdFwiX3Jlc29sdmVkXCI6IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG0udGFvYmFvLm9yZy9jcm9zc2ZpbHRlcjIvZG93bmxvYWQvY3Jvc3NmaWx0ZXIyLTEuNC4wLWFscGhhLjYudGd6XCIsXG5cdFwiX3NoYXN1bVwiOiBcImYwMTk3YzZmYWIyZDZhNTgzYjUxMjU0YmZjNjM1NzA5M2Y4MDUyMWJcIixcblx0XCJfc2hyaW5rd3JhcFwiOiBudWxsLFxuXHRcIl9zcGVjXCI6IFwiY3Jvc3NmaWx0ZXIyQDEuNC4wLWFscGhhLjZcIixcblx0XCJfd2hlcmVcIjogXCIvVXNlcnMvTWFyc2hhbGwvVGhvbWFzV29yay93b3JrLXByb2plY3QvMjAxNjEyLWhlbmdzaGkuaW8vbWFrYWx1L25vZGVfbW9kdWxlcy91bml2ZXJzZVwiLFxuXHRcImF1dGhvclwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiTWlrZSBCb3N0b2NrXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwOi8vYm9zdC5vY2tzLm9yZy9taWtlXCJcblx0fSxcblx0XCJidWdzXCI6IHtcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jcm9zc2ZpbHRlci9jcm9zc2ZpbHRlci9pc3N1ZXNcIlxuXHR9LFxuXHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiSmFzb24gRGF2aWVzXCIsXG5cdFx0XHRcInVybFwiOiBcImh0dHA6Ly93d3cuamFzb25kYXZpZXMuY29tL1wiXG5cdFx0fVxuXHRdLFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJsb2Rhc2gucmVzdWx0XCI6IFwiXjQuNC4wXCJcblx0fSxcblx0XCJkZXNjcmlwdGlvblwiOiBcIkZhc3QgbXVsdGlkaW1lbnNpb25hbCBmaWx0ZXJpbmcgZm9yIGNvb3JkaW5hdGVkIHZpZXdzLlwiLFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJicm93c2VyaWZ5XCI6IFwiXjEzLjAuMFwiLFxuXHRcdFwiZDNcIjogXCIzLjVcIixcblx0XHRcInBhY2thZ2UtanNvbi12ZXJzaW9uaWZ5XCI6IFwiMS4wLjJcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIjIuNC4wXCIsXG5cdFx0XCJ2b3dzXCI6IFwiMC43LjBcIlxuXHR9LFxuXHRcImRpcmVjdG9yaWVzXCI6IHt9LFxuXHRcImRpc3RcIjoge1xuXHRcdFwic2hhc3VtXCI6IFwiZjAxOTdjNmZhYjJkNmE1ODNiNTEyNTRiZmM2MzU3MDkzZjgwNTIxYlwiLFxuXHRcdFwic2l6ZVwiOiA0NjA4Nyxcblx0XHRcIm5vYXR0YWNobWVudFwiOiBmYWxzZSxcblx0XHRcInRhcmJhbGxcIjogXCJodHRwOi8vcmVnaXN0cnkubnBtLnRhb2Jhby5vcmcvY3Jvc3NmaWx0ZXIyL2Rvd25sb2FkL2Nyb3NzZmlsdGVyMi0xLjQuMC1hbHBoYS42LnRnelwiXG5cdH0sXG5cdFwiZmlsZXNcIjogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJpbmRleC5qc1wiLFxuXHRcdFwiY3Jvc3NmaWx0ZXIuanNcIixcblx0XHRcImNyb3NzZmlsdGVyLm1pbi5qc1wiXG5cdF0sXG5cdFwiZ2l0SGVhZFwiOiBcIjUwOWE5Njc5OGY1MTUzYTU4ZDFiNmNhZTVmYjNlNzg5MzEyOWNlN2NcIixcblx0XCJob21lcGFnZVwiOiBcImh0dHA6Ly9jcm9zc2ZpbHRlci5naXRodWIuY29tL2Nyb3NzZmlsdGVyL1wiLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcImFuYWx5dGljc1wiLFxuXHRcdFwidmlzdWFsaXphdGlvblwiLFxuXHRcdFwiY3Jvc3NmaWx0ZXJcIlxuXHRdLFxuXHRcIm1haW5cIjogXCIuL2luZGV4LmpzXCIsXG5cdFwibWFpbnRhaW5lcnNcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcImVzamV3ZXR0XCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiZXNqZXdldHRAZ21haWwuY29tXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcImdvcmRvbndvb2RodWxsXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiZ29yZG9uQHdvb2RodWxsLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJ0YW5uZXJsaW5zbGV5XCIsXG5cdFx0XHRcImVtYWlsXCI6IFwidGFubmVybGluc2xleUBnbWFpbC5jb21cIlxuXHRcdH1cblx0XSxcblx0XCJuYW1lXCI6IFwiY3Jvc3NmaWx0ZXIyXCIsXG5cdFwib3B0aW9uYWxEZXBlbmRlbmNpZXNcIjoge30sXG5cdFwicHVibGlzaF90aW1lXCI6IDE0NjM1MTk1NzQ0MDUsXG5cdFwicmVhZG1lXCI6IFwiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kIVwiLFxuXHRcInJlcG9zaXRvcnlcIjoge1xuXHRcdFwidHlwZVwiOiBcImdpdFwiLFxuXHRcdFwidXJsXCI6IFwiZ2l0K3NzaDovL2dpdEBnaXRodWIuY29tL2Nyb3NzZmlsdGVyL2Nyb3NzZmlsdGVyLmdpdFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJiZW5jaG1hcmtcIjogXCJub2RlIHRlc3QvYmVuY2htYXJrLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcImJyb3dzZXJpZnkgaW5kZXguanMgLXQgcGFja2FnZS1qc29uLXZlcnNpb25pZnkgLS1zdGFuZGFsb25lIGNyb3NzZmlsdGVyIC1vIGNyb3NzZmlsdGVyLmpzICYmIHVnbGlmeWpzIC0tY29tcHJlc3MgLS1tYW5nbGUgLS1zY3Jldy1pZTggY3Jvc3NmaWx0ZXIuanMgLW8gY3Jvc3NmaWx0ZXIubWluLmpzXCIsXG5cdFx0XCJjbGVhblwiOiBcInJtIC1mIGNyb3NzZmlsdGVyLmpzIGNyb3NzZmlsdGVyLm1pbi5qc1wiLFxuXHRcdFwidGVzdFwiOiBcInZvd3MgLS12ZXJib3NlXCJcblx0fSxcblx0XCJ2ZXJzaW9uXCI6IFwiMS40LjAtYWxwaGEuNlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9wYWNrYWdlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvLFxuICAgIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBzdHJpbmdUb1BhdGgodmFsdWUpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemUoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5nZXRgIGV4Y2VwdCB0aGF0IGlmIHRoZSByZXNvbHZlZCB2YWx1ZSBpcyBhXG4gKiBmdW5jdGlvbiBpdCdzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgaXRzIHBhcmVudCBvYmplY3QgYW5kXG4gKiBpdHMgcmVzdWx0IGlzIHJldHVybmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byByZXNvbHZlLlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MxJzogMywgJ2MyJzogXy5jb25zdGFudCg0KSB9IH1dIH07XG4gKlxuICogXy5yZXN1bHQob2JqZWN0LCAnYVswXS5iLmMxJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5yZXN1bHQob2JqZWN0LCAnYVswXS5iLmMyJyk7XG4gKiAvLyA9PiA0XG4gKlxuICogXy5yZXN1bHQob2JqZWN0LCAnYVswXS5iLmMzJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICpcbiAqIF8ucmVzdWx0KG9iamVjdCwgJ2FbMF0uYi5jMycsIF8uY29uc3RhbnQoJ2RlZmF1bHQnKSk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gcmVzdWx0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAvLyBFbnN1cmUgdGhlIGxvb3AgaXMgZW50ZXJlZCB3aGVuIHBhdGggaXMgZW1wdHkuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gdW5kZWZpbmVkO1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFt0b0tleShwYXRoW2luZGV4XSldO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IGxlbmd0aDtcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBvYmplY3QgPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLnJlc3VsdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX3BhcmFtZXRlcnMgPSByZXF1aXJlKCcuL3BhcmFtZXRlcnMuanMnKTtcblxuX2Fzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcblx0aWYgKHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG5cdGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyArK2luZGV4KSB7XG5cdFx0dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cdFx0aWYgKHNvdXJjZSAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBuZXh0S2V5IGluIHNvdXJjZSkge1xuXHRcdFx0XHRpZihzb3VyY2UuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcblx0XHRcdFx0XHRvdXRwdXRbbmV4dEtleV0gPSBzb3VyY2VbbmV4dEtleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn07XG5cbmZ1bmN0aW9uIGFjY2Vzc29yX2J1aWxkKG9iaiwgcCkge1xuXHQvLyBvYmoub3JkZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHQvLyBcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAub3JkZXI7XG5cdC8vIFx0cC5vcmRlciA9IHZhbHVlO1xuXHQvLyBcdHJldHVybiBvYmo7XG5cdC8vIH07XG5cblx0Ly8gQ29udmVydHMgYSBzdHJpbmcgdG8gYW4gYWNjZXNzb3IgZnVuY3Rpb25cblx0ZnVuY3Rpb24gYWNjZXNzb3JpZnkodikge1xuXHRcdGlmKCB0eXBlb2YgdiA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZXdyaXRlIHRvIGEgZnVuY3Rpb25cblx0XHRcdHZhciB0ZW1wVmFsdWUgPSB2O1xuXHRcdFx0dmFyIGZ1bmMgPSBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZFt0ZW1wVmFsdWVdOyB9XG5cdFx0XHRyZXR1cm4gZnVuYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHY7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ29udmVydHMgYSBzdHJpbmcgdG8gYW4gYWNjZXNzb3IgZnVuY3Rpb25cblx0ZnVuY3Rpb24gYWNjZXNzb3JpZnlOdW1lcmljKHYpIHtcblx0XHRpZiggdHlwZW9mIHYgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmV3cml0ZSB0byBhIGZ1bmN0aW9uXG5cdFx0XHR2YXIgdGVtcFZhbHVlID0gdjtcblx0XHRcdHZhciBmdW5jID0gZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkW3RlbXBWYWx1ZV07IH1cblx0XHRcdHJldHVybiBmdW5jO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9XG5cdH1cblxuXHRvYmouZnJvbU9iamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwO1xuXHRcdF9hc3NpZ24ocCwgdmFsdWUpO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLnRvT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHA7XG5cdH07XG5cblx0b2JqLmNvdW50ID0gZnVuY3Rpb24odmFsdWUsIHByb3BOYW1lKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5jb3VudDtcbiAgICBpZiAoIXByb3BOYW1lKSB7XG4gICAgICBwcm9wTmFtZSA9ICdjb3VudCc7XG4gICAgfVxuXHRcdHAuY291bnQgPSBwcm9wTmFtZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5zdW0gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuc3VtO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0cC5zdW0gPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5hdmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuYXZnO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0Ly8gV2UgY2FuIHRha2UgYW4gYWNjZXNzb3IgZnVuY3Rpb24sIGEgYm9vbGVhbiwgb3IgYSBzdHJpbmdcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0aWYocC5zdW0gJiYgcC5zdW0gIT09IHZhbHVlKSBjb25zb2xlLndhcm4oJ1NVTSBhZ2dyZWdhdGlvbiBpcyBiZWluZyBvdmVyd3JpdHRlbiBieSBBVkcgYWdncmVnYXRpb24nKTtcblx0XHRcdHAuc3VtID0gdmFsdWU7XG5cdFx0XHRwLmF2ZyA9IHRydWU7XG5cdFx0XHRwLmNvdW50ID0gJ2NvdW50Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cC5hdmcgPSB2YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouZXhjZXB0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmV4Y2VwdGlvbkFjY2Vzc29yO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeSh2YWx1ZSk7XG5cblx0XHRwLmV4Y2VwdGlvbkFjY2Vzc29yID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouZmlsdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmZpbHRlcjtcblx0XHRwLmZpbHRlciA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLnZhbHVlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC52YWx1ZUxpc3Q7XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5KHZhbHVlKTtcblxuXHRcdHAudmFsdWVMaXN0ID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmoubWVkaWFuID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLm1lZGlhbjtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYocC52YWx1ZUxpc3QgJiYgcC52YWx1ZUxpc3QgIT09IHZhbHVlKSBjb25zb2xlLndhcm4oJ1ZBTFVFTElTVCBhY2Nlc3NvciBpcyBiZWluZyBvdmVyd3JpdHRlbiBieSBtZWRpYW4gYWdncmVnYXRpb24nKTtcblx0XHRcdHAudmFsdWVMaXN0ID0gdmFsdWU7XG5cdFx0fVxuXHRcdHAubWVkaWFuID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmoubWluID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLm1pbjtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYocC52YWx1ZUxpc3QgJiYgcC52YWx1ZUxpc3QgIT09IHZhbHVlKSBjb25zb2xlLndhcm4oJ1ZBTFVFTElTVCBhY2Nlc3NvciBpcyBiZWluZyBvdmVyd3JpdHRlbiBieSBtaW4gYWdncmVnYXRpb24nKTtcblx0XHRcdHAudmFsdWVMaXN0ID0gdmFsdWU7XG5cdFx0fVxuXHRcdHAubWluID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmoubWF4ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLm1heDtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYocC52YWx1ZUxpc3QgJiYgcC52YWx1ZUxpc3QgIT09IHZhbHVlKSBjb25zb2xlLndhcm4oJ1ZBTFVFTElTVCBhY2Nlc3NvciBpcyBiZWluZyBvdmVyd3JpdHRlbiBieSBtYXggYWdncmVnYXRpb24nKTtcblx0XHRcdHAudmFsdWVMaXN0ID0gdmFsdWU7XG5cdFx0fVxuXHRcdHAubWF4ID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouZXhjZXB0aW9uQ291bnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuZXhjZXB0aW9uQ291bnQ7XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5KHZhbHVlKTtcblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRpZihwLmV4Y2VwdGlvbkFjY2Vzc29yICYmIHAuZXhjZXB0aW9uQWNjZXNzb3IgIT09IHZhbHVlKSBjb25zb2xlLndhcm4oJ0VYQ0VQVElPTiBhY2Nlc3NvciBpcyBiZWluZyBvdmVyd3JpdHRlbiBieSBleGNlcHRpb24gY291bnQgYWdncmVnYXRpb24nKTtcblx0XHRcdHAuZXhjZXB0aW9uQWNjZXNzb3IgPSB2YWx1ZTtcblx0XHRcdHAuZXhjZXB0aW9uQ291bnQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwLmV4Y2VwdGlvbkNvdW50ID0gdmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmV4Y2VwdGlvblN1bSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5leGNlcHRpb25TdW07XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5TnVtZXJpYyh2YWx1ZSk7XG5cblx0XHRwLmV4Y2VwdGlvblN1bSA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmhpc3RvZ3JhbVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmhpc3RvZ3JhbVZhbHVlO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0cC5oaXN0b2dyYW1WYWx1ZSA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmhpc3RvZ3JhbUJpbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuaGlzdG9ncmFtVGhyZXNob2xkcztcblx0XHRwLmhpc3RvZ3JhbVRocmVzaG9sZHMgPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5zdGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuc3RkO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0aWYodHlwZW9mKHZhbHVlKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cC5zdW1PZlNxdWFyZXMgPSB2YWx1ZTtcblx0XHRcdHAuc3VtID0gdmFsdWU7XG5cdFx0XHRwLmNvdW50ID0gJ2NvdW50Jztcblx0XHRcdHAuc3RkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cC5zdGQgPSB2YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouc3VtT2ZTcSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5zdW1PZlNxdWFyZXM7XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5TnVtZXJpYyh2YWx1ZSk7XG5cblx0XHRwLnN1bU9mU3F1YXJlcyA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLnZhbHVlID0gZnVuY3Rpb24odmFsdWUsIGFjY2Vzc29yKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiJ3ZhbHVlJyByZXF1aXJlcyBhIHN0cmluZyBhcmd1bWVudC5cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKCFwLnZhbHVlcykgcC52YWx1ZXMgPSB7fTtcblx0XHRcdHAudmFsdWVzW3ZhbHVlXSA9IHt9O1xuXHRcdFx0cC52YWx1ZXNbdmFsdWVdLnBhcmFtZXRlcnMgPSByZWR1Y3Rpb19wYXJhbWV0ZXJzKCk7XG5cdFx0XHRhY2Nlc3Nvcl9idWlsZChwLnZhbHVlc1t2YWx1ZV0sIHAudmFsdWVzW3ZhbHVlXS5wYXJhbWV0ZXJzKTtcblx0XHRcdGlmKGFjY2Vzc29yKSBwLnZhbHVlc1t2YWx1ZV0uYWNjZXNzb3IgPSBhY2Nlc3Nvcjtcblx0XHRcdHJldHVybiBwLnZhbHVlc1t2YWx1ZV07XG5cdFx0fVxuXHR9O1xuXG5cdG9iai5uZXN0ID0gZnVuY3Rpb24oa2V5QWNjZXNzb3JBcnJheSkge1xuXHRcdGlmKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5uZXN0S2V5cztcblxuXHRcdGtleUFjY2Vzc29yQXJyYXkubWFwKGFjY2Vzc29yaWZ5KTtcblxuXHRcdHAubmVzdEtleXMgPSBrZXlBY2Nlc3NvckFycmF5O1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmFsaWFzID0gZnVuY3Rpb24ocHJvcEFjY2Vzc29yT2JqKSB7XG5cdFx0aWYoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmFsaWFzS2V5cztcblx0XHRwLmFsaWFzS2V5cyA9IHByb3BBY2Nlc3Nvck9iajtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5hbGlhc1Byb3AgPSBmdW5jdGlvbihwcm9wQWNjZXNzb3JPYmopIHtcblx0XHRpZighYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuYWxpYXNQcm9wS2V5cztcblx0XHRwLmFsaWFzUHJvcEtleXMgPSBwcm9wQWNjZXNzb3JPYmo7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouZ3JvdXBBbGwgPSBmdW5jdGlvbihncm91cFRlc3QpIHtcblx0XHRpZighYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuZ3JvdXBBbGw7XG5cdFx0cC5ncm91cEFsbCA9IGdyb3VwVGVzdDtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5kYXRhTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5kYXRhTGlzdDtcblx0XHRwLmRhdGFMaXN0ID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouY3VzdG9tID0gZnVuY3Rpb24oYWRkUmVtb3ZlSW5pdGlhbE9iaikge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuY3VzdG9tO1xuXHRcdHAuY3VzdG9tID0gYWRkUmVtb3ZlSW5pdGlhbE9iajtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG59XG5cbnZhciByZWR1Y3Rpb19hY2Nlc3NvcnMgPSB7XG5cdGJ1aWxkOiBhY2Nlc3Nvcl9idWlsZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19hY2Nlc3NvcnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvYWNjZXNzb3JzLmpzXG4gKiogbW9kdWxlIGlkID0gNDkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fYWxpYXMgPSB7XG5cdGluaXRpYWw6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCBvYmopIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKHByaW9yKSBwID0gcHJpb3IocCk7XG5cdFx0XHRmdW5jdGlvbiBidWlsZEFsaWFzRnVuY3Rpb24oa2V5KXtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIG9ialtrZXldKHBhdGgocCkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yKHZhciBwcm9wIGluIG9iaikge1xuXHRcdFx0XHRwYXRoKHApW3Byb3BdID0gYnVpbGRBbGlhc0Z1bmN0aW9uKHByb3ApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19hbGlhcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvYWxpYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0OTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19hbGlhc19wcm9wID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChvYmosIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGZvcih2YXIgcHJvcCBpbiBvYmopIHtcblx0XHRcdFx0cGF0aChwKVtwcm9wXSA9IG9ialtwcm9wXShwYXRoKHApLHYpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19hbGlhc19wcm9wO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9hbGlhc1Byb3AuanNcbiAqKiBtb2R1bGUgaWQgPSA0OTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19hdmcgPSB7XG5cdGFkZDogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGlmKHBhdGgocCkuY291bnQgPiAwKSB7XG5cdFx0XHRcdHBhdGgocCkuYXZnID0gcGF0aChwKS5zdW0gLyBwYXRoKHApLmNvdW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGF0aChwKS5hdmcgPSAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0aWYocGF0aChwKS5jb3VudCA+IDApIHtcblx0XHRcdFx0cGF0aChwKS5hdmcgPSBwYXRoKHApLnN1bSAvIHBhdGgocCkuY291bnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXRoKHApLmF2ZyA9IDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkuYXZnID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fYXZnO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9hdmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0OTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19maWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlci5qcycpO1xudmFyIHJlZHVjdGlvX2NvdW50ID0gcmVxdWlyZSgnLi9jb3VudC5qcycpO1xudmFyIHJlZHVjdGlvX3N1bSA9IHJlcXVpcmUoJy4vc3VtLmpzJyk7XG52YXIgcmVkdWN0aW9fYXZnID0gcmVxdWlyZSgnLi9hdmcuanMnKTtcbnZhciByZWR1Y3Rpb19tZWRpYW4gPSByZXF1aXJlKCcuL21lZGlhbi5qcycpO1xudmFyIHJlZHVjdGlvX21pbiA9IHJlcXVpcmUoJy4vbWluLmpzJyk7XG52YXIgcmVkdWN0aW9fbWF4ID0gcmVxdWlyZSgnLi9tYXguanMnKTtcbnZhciByZWR1Y3Rpb192YWx1ZV9jb3VudCA9IHJlcXVpcmUoJy4vdmFsdWUtY291bnQuanMnKTtcbnZhciByZWR1Y3Rpb192YWx1ZV9saXN0ID0gcmVxdWlyZSgnLi92YWx1ZS1saXN0LmpzJyk7XG52YXIgcmVkdWN0aW9fZXhjZXB0aW9uX2NvdW50ID0gcmVxdWlyZSgnLi9leGNlcHRpb24tY291bnQuanMnKTtcbnZhciByZWR1Y3Rpb19leGNlcHRpb25fc3VtID0gcmVxdWlyZSgnLi9leGNlcHRpb24tc3VtLmpzJyk7XG52YXIgcmVkdWN0aW9faGlzdG9ncmFtID0gcmVxdWlyZSgnLi9oaXN0b2dyYW0uanMnKTtcbnZhciByZWR1Y3Rpb19zdW1fb2Zfc3EgPSByZXF1aXJlKCcuL3N1bS1vZi1zcXVhcmVzLmpzJyk7XG52YXIgcmVkdWN0aW9fc3RkID0gcmVxdWlyZSgnLi9zdGQuanMnKTtcbnZhciByZWR1Y3Rpb19uZXN0ID0gcmVxdWlyZSgnLi9uZXN0LmpzJyk7XG52YXIgcmVkdWN0aW9fYWxpYXMgPSByZXF1aXJlKCcuL2FsaWFzLmpzJyk7XG52YXIgcmVkdWN0aW9fYWxpYXNfcHJvcCA9IHJlcXVpcmUoJy4vYWxpYXNQcm9wLmpzJyk7XG52YXIgcmVkdWN0aW9fZGF0YV9saXN0ID0gcmVxdWlyZSgnLi9kYXRhLWxpc3QuanMnKTtcbnZhciByZWR1Y3Rpb19jdXN0b20gPSByZXF1aXJlKCcuL2N1c3RvbS5qcycpO1xuXG5mdW5jdGlvbiBidWlsZF9mdW5jdGlvbihwLCBmLCBwYXRoKSB7XG5cdC8vIFdlIGhhdmUgdG8gYnVpbGQgdGhlc2UgZnVuY3Rpb25zIGluIG9yZGVyLiBFdmVudHVhbGx5IHdlIGNhbiBpbmNsdWRlIGRlcGVuZGVuY3lcblx0Ly8gaW5mb3JtYXRpb24gYW5kIGNyZWF0ZSBhIGRlcGVuZGVuY3kgZ3JhcGggaWYgdGhlIHByb2Nlc3MgYmVjb21lcyBjb21wbGV4IGVub3VnaC5cblxuXHRpZighcGF0aCkgcGF0aCA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9O1xuXG5cdC8vIEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIHJlZHVjZXJzIHNvIHRoYXQgZmlsdGVyaW5nIGNhbiBza2lwIGJhY2sgdG9cblx0Ly8gdGhlbSBpZiB0aGlzIHBhcnRpY3VsYXIgdmFsdWUgaXMgZmlsdGVyZWQgb3V0LlxuXHR2YXIgb3JpZ0YgPSB7XG5cdFx0cmVkdWNlQWRkOiBmLnJlZHVjZUFkZCxcblx0XHRyZWR1Y2VSZW1vdmU6IGYucmVkdWNlUmVtb3ZlLFxuXHRcdHJlZHVjZUluaXRpYWw6IGYucmVkdWNlSW5pdGlhbFxuXHR9O1xuXG5cdGlmKHAuY291bnQgfHwgcC5zdGQpIHtcbiAgICBmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2NvdW50LmFkZChmLnJlZHVjZUFkZCwgcGF0aCwgcC5jb3VudCk7XG4gICAgZi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19jb3VudC5yZW1vdmUoZi5yZWR1Y2VSZW1vdmUsIHBhdGgsIHAuY291bnQpO1xuICAgIGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2NvdW50LmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoLCBwLmNvdW50KTtcblx0fVxuXG5cdGlmKHAuc3VtKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19zdW0uYWRkKHAuc3VtLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19zdW0ucmVtb3ZlKHAuc3VtLCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fc3VtLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdGlmKHAuYXZnKSB7XG5cdFx0aWYoIXAuY291bnQgfHwgIXAuc3VtKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiWW91IG11c3Qgc2V0IC5jb3VudCh0cnVlKSBhbmQgZGVmaW5lIGEgLnN1bShhY2Nlc3NvcikgdG8gdXNlIC5hdmcodHJ1ZSkuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2F2Zy5hZGQocC5zdW0sIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fYXZnLnJlbW92ZShwLnN1bSwgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fYXZnLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBUaGUgdW5pcXVlLW9ubHkgcmVkdWNlcnMgY29tZSBiZWZvcmUgdGhlIHZhbHVlX2NvdW50IHJlZHVjZXJzLiBUaGV5IG5lZWQgdG8gY2hlY2sgaWZcblx0Ly8gdGhlIHZhbHVlIGlzIGFscmVhZHkgaW4gdGhlIHZhbHVlcyBhcnJheSBvbiB0aGUgZ3JvdXAuIFRoZXkgc2hvdWxkIG9ubHkgaW5jcmVtZW50L2RlY3JlbWVudFxuXHQvLyBjb3VudHMgaWYgdGhlIHZhbHVlIG5vdCBpbiB0aGUgYXJyYXkgb3IgdGhlIGNvdW50IG9uIHRoZSB2YWx1ZSBpcyAwLlxuXHRpZihwLmV4Y2VwdGlvbkNvdW50KSB7XG5cdFx0aWYoIXAuZXhjZXB0aW9uQWNjZXNzb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJZb3UgbXVzdCBkZWZpbmUgYW4gLmV4Y2VwdGlvbihhY2Nlc3NvcikgdG8gdXNlIC5leGNlcHRpb25Db3VudCh0cnVlKS5cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fZXhjZXB0aW9uX2NvdW50LmFkZChwLmV4Y2VwdGlvbkFjY2Vzc29yLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudC5yZW1vdmUocC5leGNlcHRpb25BY2Nlc3NvciwgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fZXhjZXB0aW9uX2NvdW50LmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHRpZihwLmV4Y2VwdGlvblN1bSkge1xuXHRcdGlmKCFwLmV4Y2VwdGlvbkFjY2Vzc29yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiWW91IG11c3QgZGVmaW5lIGFuIC5leGNlcHRpb24oYWNjZXNzb3IpIHRvIHVzZSAuZXhjZXB0aW9uU3VtKGFjY2Vzc29yKS5cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fZXhjZXB0aW9uX3N1bS5hZGQocC5leGNlcHRpb25BY2Nlc3NvciwgcC5leGNlcHRpb25TdW0sIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fZXhjZXB0aW9uX3N1bS5yZW1vdmUocC5leGNlcHRpb25BY2Nlc3NvciwgcC5leGNlcHRpb25TdW0sIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9zdW0uaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1haW50YWluIHRoZSB2YWx1ZXMgYXJyYXkuXG5cdGlmKHAudmFsdWVMaXN0IHx8IHAubWVkaWFuIHx8IHAubWluIHx8IHAubWF4KSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb192YWx1ZV9saXN0LmFkZChwLnZhbHVlTGlzdCwgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fdmFsdWVfbGlzdC5yZW1vdmUocC52YWx1ZUxpc3QsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb192YWx1ZV9saXN0LmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdC8vIE1haW50YWluIHRoZSBkYXRhIGFycmF5LlxuXHRpZihwLmRhdGFMaXN0KSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19kYXRhX2xpc3QuYWRkKHAuZGF0YUxpc3QsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2RhdGFfbGlzdC5yZW1vdmUocC5kYXRhTGlzdCwgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2RhdGFfbGlzdC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHRpZihwLm1lZGlhbikge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fbWVkaWFuLmFkZChmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19tZWRpYW4ucmVtb3ZlKGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19tZWRpYW4uaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0aWYocC5taW4pIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX21pbi5hZGQoZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fbWluLnJlbW92ZShmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fbWluLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdGlmKHAubWF4KSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19tYXguYWRkKGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX21heC5yZW1vdmUoZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX21heC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHQvLyBNYWludGFpbiB0aGUgdmFsdWVzIGNvdW50IGFycmF5LlxuXHRpZihwLmV4Y2VwdGlvbkFjY2Vzc29yKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb192YWx1ZV9jb3VudC5hZGQocC5leGNlcHRpb25BY2Nlc3NvciwgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fdmFsdWVfY291bnQucmVtb3ZlKHAuZXhjZXB0aW9uQWNjZXNzb3IsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb192YWx1ZV9jb3VudC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHQvLyBIaXN0b2dyYW1cblx0aWYocC5oaXN0b2dyYW1WYWx1ZSAmJiBwLmhpc3RvZ3JhbVRocmVzaG9sZHMpIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2hpc3RvZ3JhbS5hZGQocC5oaXN0b2dyYW1WYWx1ZSwgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9faGlzdG9ncmFtLnJlbW92ZShwLmhpc3RvZ3JhbVZhbHVlLCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9faGlzdG9ncmFtLmluaXRpYWwocC5oaXN0b2dyYW1UaHJlc2hvbGRzICxmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0Ly8gU3VtIG9mIFNxdWFyZXNcblx0aWYocC5zdW1PZlNxdWFyZXMpIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX3N1bV9vZl9zcS5hZGQocC5zdW1PZlNxdWFyZXMsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX3N1bV9vZl9zcS5yZW1vdmUocC5zdW1PZlNxdWFyZXMsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19zdW1fb2Zfc3EuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0Ly8gU3RhbmRhcmQgZGV2aWF0aW9uXG5cdGlmKHAuc3RkKSB7XG5cdFx0aWYoIXAuc3VtT2ZTcXVhcmVzIHx8ICFwLnN1bSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIllvdSBtdXN0IHNldCAuc3VtT2ZTcShhY2Nlc3NvcikgYW5kIGRlZmluZSBhIC5zdW0oYWNjZXNzb3IpIHRvIHVzZSAuc3RkKHRydWUpLiBPciB1c2UgLnN0ZChhY2Nlc3NvcikuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX3N0ZC5hZGQoZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19zdGQucmVtb3ZlKGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX3N0ZC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ3VzdG9tIHJlZHVjZXIgZGVmaW5lZCBieSAzIGZ1bmN0aW9ucyA6IGFkZCwgcmVtb3ZlLCBpbml0aWFsXG5cdGlmIChwLmN1c3RvbSkge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fY3VzdG9tLmFkZChmLnJlZHVjZUFkZCwgcGF0aCwgcC5jdXN0b20uYWRkKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2N1c3RvbS5yZW1vdmUoZi5yZWR1Y2VSZW1vdmUsIHBhdGgsIHAuY3VzdG9tLnJlbW92ZSk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fY3VzdG9tLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoLCBwLmN1c3RvbS5pbml0aWFsKTtcblx0fVxuXG5cdC8vIE5lc3Rpbmdcblx0aWYocC5uZXN0S2V5cykge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fbmVzdC5hZGQocC5uZXN0S2V5cywgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fbmVzdC5yZW1vdmUocC5uZXN0S2V5cywgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX25lc3QuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0Ly8gQWxpYXMgZnVuY3Rpb25zXG5cdGlmKHAuYWxpYXNLZXlzKSB7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fYWxpYXMuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgsIHAuYWxpYXNLZXlzKTtcblx0fVxuXG5cdC8vIEFsaWFzIHByb3BlcnRpZXMgLSB0aGlzIGlzIGxlc3MgZWZmaWNpZW50IHRoYW4gYWxpYXMgZnVuY3Rpb25zXG5cdGlmKHAuYWxpYXNQcm9wS2V5cykge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fYWxpYXNfcHJvcC5hZGQocC5hbGlhc1Byb3BLZXlzLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Ly8gVGhpcyBpc24ndCBhIHR5cG8uIFRoZSBmdW5jdGlvbiBpcyB0aGUgc2FtZSBmb3IgYWRkL3JlbW92ZS5cblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2FsaWFzX3Byb3AuYWRkKHAuYWxpYXNQcm9wS2V5cywgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHR9XG5cblx0Ly8gRmlsdGVycyBkZXRlcm1pbmUgaWYgb3VyIGJ1aWx0LXVwIHByaW9ycyBzaG91bGQgcnVuLCBvciBpZiBpdCBzaG91bGQgc2tpcFxuXHQvLyBiYWNrIHRvIHRoZSBmaWx0ZXJzIGdpdmVuIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBidWlsZCBmdW5jdGlvbi5cblx0aWYgKHAuZmlsdGVyKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19maWx0ZXIuYWRkKHAuZmlsdGVyLCBmLnJlZHVjZUFkZCwgb3JpZ0YucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2ZpbHRlci5yZW1vdmUocC5maWx0ZXIsIGYucmVkdWNlUmVtb3ZlLCBvcmlnRi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHR9XG5cblx0Ly8gVmFsdWVzIGdvIGxhc3QuXG5cdGlmKHAudmFsdWVzKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocC52YWx1ZXMpLmZvckVhY2goZnVuY3Rpb24obikge1xuXHRcdFx0Ly8gU2V0IHVwIHRoZSBwYXRoIG9uIGVhY2ggZ3JvdXAuXG5cdFx0XHR2YXIgc2V0dXBQYXRoID0gZnVuY3Rpb24ocHJpb3IpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0XHRcdHBhdGgocClbbl0gPSB7fTtcblx0XHRcdFx0XHRyZXR1cm4gcDtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRmLnJlZHVjZUluaXRpYWwgPSBzZXR1cFBhdGgoZi5yZWR1Y2VJbml0aWFsKTtcblx0XHRcdGJ1aWxkX2Z1bmN0aW9uKHAudmFsdWVzW25dLnBhcmFtZXRlcnMsIGYsIGZ1bmN0aW9uIChwKSB7IHJldHVybiBwW25dOyB9KTtcblx0XHR9KTtcblx0fVxufVxuXG52YXIgcmVkdWN0aW9fYnVpbGQgPSB7XG5cdGJ1aWxkOiBidWlsZF9mdW5jdGlvblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19idWlsZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHBsdWNrID0gZnVuY3Rpb24obil7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZXR1cm4gZFtuXTtcbiAgICB9O1xufTtcblxuLy8gc3VwcG9ydGVkIG9wZXJhdG9ycyBhcmUgc3VtLCBhdmcsIGFuZCBjb3VudFxuX2dyb3VwZXIgPSBmdW5jdGlvbihwYXRoLCBwcmlvcil7XG4gICAgaWYoIXBhdGgpIHBhdGggPSBmdW5jdGlvbihkKXtyZXR1cm4gZDt9O1xuICAgIHJldHVybiBmdW5jdGlvbihwLCB2KXtcbiAgICAgICAgaWYocHJpb3IpIHByaW9yKHAsIHYpO1xuICAgICAgICB2YXIgeCA9IHBhdGgocCksIHkgPSBwYXRoKHYpO1xuICAgICAgICBpZih0eXBlb2YgeS5jb3VudCAhPT0gJ3VuZGVmaW5lZCcpIHguY291bnQgKz0geS5jb3VudDtcbiAgICAgICAgaWYodHlwZW9mIHkuc3VtICE9PSAndW5kZWZpbmVkJykgeC5zdW0gKz0geS5zdW07XG4gICAgICAgIGlmKHR5cGVvZiB5LmF2ZyAhPT0gJ3VuZGVmaW5lZCcpIHguYXZnID0geC5zdW0veC5jb3VudDtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbn07XG5cbnJlZHVjdGlvX2NhcCA9IGZ1bmN0aW9uIChwcmlvciwgZiwgcCkge1xuICAgIHZhciBvYmogPSBmLnJlZHVjZUluaXRpYWwoKTtcbiAgICAvLyB3ZSB3YW50IHRvIHN1cHBvcnQgdmFsdWVzIHNvIHdlJ2xsIG5lZWQgdG8ga25vdyB3aGF0IHRob3NlIGFyZVxuICAgIHZhciB2YWx1ZXMgPSBwLnZhbHVlcyA/IE9iamVjdC5rZXlzKHAudmFsdWVzKSA6IFtdO1xuICAgIHZhciBfb3RoZXJzR3JvdXBlciA9IF9ncm91cGVyKCk7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIF9vdGhlcnNHcm91cGVyID0gX2dyb3VwZXIocGx1Y2sodmFsdWVzW2ldKSwgX290aGVyc0dyb3VwZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FwLCBvdGhlcnNOYW1lKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHByaW9yKCk7XG4gICAgICAgIGlmKCBjYXAgPT09IEluZmluaXR5IHx8ICFjYXAgKSByZXR1cm4gcHJpb3IoKTtcbiAgICAgICAgdmFyIGFsbCA9IHByaW9yKCk7XG4gICAgICAgIHZhciBzbGljZV9pZHggPSBjYXAtMTtcbiAgICAgICAgaWYoYWxsLmxlbmd0aCA8PSBjYXApIHJldHVybiBhbGw7XG4gICAgICAgIHZhciBkYXRhID0gYWxsLnNsaWNlKDAsIHNsaWNlX2lkeCk7XG4gICAgICAgIHZhciBvdGhlcnMgPSB7a2V5OiBvdGhlcnNOYW1lIHx8ICdPdGhlcnMnfTtcbiAgICAgICAgb3RoZXJzLnZhbHVlID0gZi5yZWR1Y2VJbml0aWFsKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSBzbGljZV9pZHg7IGkgPCBhbGwubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIF9vdGhlcnNHcm91cGVyKG90aGVycy52YWx1ZSwgYWxsW2ldLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnB1c2gob3RoZXJzKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fY2FwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2NhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2NvdW50ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCBwcm9wTmFtZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRwYXRoKHApW3Byb3BOYW1lXSsrO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbihwcmlvciwgcGF0aCwgcHJvcE5hbWUpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKVtwcm9wTmFtZV0tLTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCBwcm9wTmFtZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0aWYocHJpb3IpIHAgPSBwcmlvcihwKTtcblx0XHRcdC8vIGlmKHAgPT09IHVuZGVmaW5lZCkgcCA9IHt9O1xuXHRcdFx0cGF0aChwKVtwcm9wTmFtZV0gPSAwO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19jb3VudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvY291bnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0OTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19jdXN0b20gPSB7XG5cdGFkZDogZnVuY3Rpb24ocHJpb3IsIHBhdGgsIGFkZEZuKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHJldHVybiBhZGRGbihwLCB2KTtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCByZW1vdmVGbikge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRyZXR1cm4gcmVtb3ZlRm4ocCwgdik7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24ocHJpb3IsIHBhdGgsIGluaXRpYWxGbikge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1x0XG5cdFx0XHRpZihwcmlvcikgcCA9IHByaW9yKHApO1xuXHRcdFx0cmV0dXJuIGluaXRpYWxGbihwKTtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2N1c3RvbTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvY3VzdG9tLmpzXG4gKiogbW9kdWxlIGlkID0gNTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fZGF0YV9saXN0ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocCkuZGF0YUxpc3QucHVzaCh2KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24oYSwgcHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKS5kYXRhTGlzdC5zcGxpY2UocGF0aChwKS5kYXRhTGlzdC5pbmRleE9mKHYpLCAxKTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRpZihwcmlvcikgcCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5kYXRhTGlzdCA9IFtdO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19kYXRhX2xpc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvZGF0YS1saXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fZXhjZXB0aW9uX2NvdW50ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpLCBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHQvLyBPbmx5IGNvdW50KysgaWYgdGhlIHAudmFsdWVzIGFycmF5IGRvZXNuJ3QgY29udGFpbiBhKHYpIG9yIGlmIGl0J3MgMC5cblx0XHRcdGkgPSBwYXRoKHApLmJpc2VjdChwYXRoKHApLnZhbHVlcywgYSh2KSwgMCwgcGF0aChwKS52YWx1ZXMubGVuZ3RoKTtcblx0XHRcdGN1cnIgPSBwYXRoKHApLnZhbHVlc1tpXTtcblx0XHRcdGlmKCghY3VyciB8fCBjdXJyWzBdICE9PSBhKHYpKSB8fCBjdXJyWzFdID09PSAwKSB7XG5cdFx0XHRcdHBhdGgocCkuZXhjZXB0aW9uQ291bnQrKztcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGksIGN1cnI7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdC8vIE9ubHkgY291bnQtLSBpZiB0aGUgcC52YWx1ZXMgYXJyYXkgY29udGFpbnMgYSh2KSB2YWx1ZSBvZiAxLlxuXHRcdFx0aSA9IHBhdGgocCkuYmlzZWN0KHBhdGgocCkudmFsdWVzLCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlcy5sZW5ndGgpO1xuXHRcdFx0Y3VyciA9IHBhdGgocCkudmFsdWVzW2ldO1xuXHRcdFx0aWYoY3VyciAmJiBjdXJyWzBdID09PSBhKHYpICYmIGN1cnJbMV0gPT09IDEpIHtcblx0XHRcdFx0cGF0aChwKS5leGNlcHRpb25Db3VudC0tO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLmV4Y2VwdGlvbkNvdW50ID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fZXhjZXB0aW9uX2NvdW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9leGNlcHRpb24tY291bnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19leGNlcHRpb25fc3VtID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBzdW0sIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGksIGN1cnI7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdC8vIE9ubHkgc3VtIGlmIHRoZSBwLnZhbHVlcyBhcnJheSBkb2Vzbid0IGNvbnRhaW4gYSh2KSBvciBpZiBpdCdzIDAuXG5cdFx0XHRpID0gcGF0aChwKS5iaXNlY3QocGF0aChwKS52YWx1ZXMsIGEodiksIDAsIHBhdGgocCkudmFsdWVzLmxlbmd0aCk7XG5cdFx0XHRjdXJyID0gcGF0aChwKS52YWx1ZXNbaV07XG5cdFx0XHRpZigoIWN1cnIgfHwgY3VyclswXSAhPT0gYSh2KSkgfHwgY3VyclsxXSA9PT0gMCkge1xuXHRcdFx0XHRwYXRoKHApLmV4Y2VwdGlvblN1bSA9IHBhdGgocCkuZXhjZXB0aW9uU3VtICsgc3VtKHYpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgc3VtLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpLCBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHQvLyBPbmx5IHN1bSBpZiB0aGUgcC52YWx1ZXMgYXJyYXkgY29udGFpbnMgYSh2KSB2YWx1ZSBvZiAxLlxuXHRcdFx0aSA9IHBhdGgocCkuYmlzZWN0KHBhdGgocCkudmFsdWVzLCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlcy5sZW5ndGgpO1xuXHRcdFx0Y3VyciA9IHBhdGgocCkudmFsdWVzW2ldO1xuXHRcdFx0aWYoY3VyciAmJiBjdXJyWzBdID09PSBhKHYpICYmIGN1cnJbMV0gPT09IDEpIHtcblx0XHRcdFx0cGF0aChwKS5leGNlcHRpb25TdW0gPSBwYXRoKHApLmV4Y2VwdGlvblN1bSAtIHN1bSh2KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5leGNlcHRpb25TdW0gPSAwO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19leGNlcHRpb25fc3VtO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9leGNlcHRpb24tc3VtLmpzXG4gKiogbW9kdWxlIGlkID0gNTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fZmlsdGVyID0ge1xuXHQvLyBUaGUgYmlnIGlkZWEgaGVyZSBpcyB0aGF0IHlvdSBnaXZlIHVzIGEgZmlsdGVyIGZ1bmN0aW9uIHRvIHJ1biBvbiB2YWx1ZXMsXG5cdC8vIGEgJ3ByaW9yJyByZWR1Y2VyIHRvIHJ1biAoanVzdCBsaWtlIHRoZSByZXN0IG9mIHRoZSBzdGFuZGFyZCByZWR1Y2VycyksXG5cdC8vIGFuZCBhIHJlZmVyZW5jZSB0byB0aGUgbGFzdCByZWR1Y2VyIChjYWxsZWQgJ3NraXAnIGJlbG93KSBkZWZpbmVkIGJlZm9yZVxuXHQvLyB0aGUgbW9zdCByZWNlbnQgY2hhaW4gb2YgcmVkdWNlcnMuICBUaGlzIHN1cHBvcnRzIGluZGl2aWR1YWwgZmlsdGVycyBmb3Jcblx0Ly8gZWFjaCAudmFsdWUoJy4uLicpIGNoYWluIHRoYXQgeW91IGFkZCB0byB5b3VyIHJlZHVjZXIuXG5cdGFkZDogZnVuY3Rpb24gKGZpbHRlciwgcHJpb3IsIHNraXApIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZiAoZmlsdGVyKHYsIG5mKSkge1xuXHRcdFx0XHRpZiAocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChza2lwKSBza2lwKHAsIHYsIG5mKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGZpbHRlciwgcHJpb3IsIHNraXApIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZiAoZmlsdGVyKHYsIG5mKSkge1xuXHRcdFx0XHRpZiAocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChza2lwKSBza2lwKHAsIHYsIG5mKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fZmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2ZpbHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyID0gcmVxdWlyZSgnY3Jvc3NmaWx0ZXIyJyk7XG5cbnZhciByZWR1Y3Rpb19oaXN0b2dyYW0gPSB7XG5cdGFkZDogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGJpc2VjdCA9IGNyb3NzZmlsdGVyLmJpc2VjdC5ieShmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KS5sZWZ0O1xuXHRcdHZhciBiaXNlY3RIaXN0byA9IGNyb3NzZmlsdGVyLmJpc2VjdC5ieShmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pLnJpZ2h0O1xuXHRcdHZhciBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRjdXJyID0gcGF0aChwKS5oaXN0b2dyYW1bYmlzZWN0SGlzdG8ocGF0aChwKS5oaXN0b2dyYW0sIGEodiksIDAsIHBhdGgocCkuaGlzdG9ncmFtLmxlbmd0aCkgLSAxXTtcblx0XHRcdGN1cnIueSsrO1xuXHRcdFx0Y3Vyci5zcGxpY2UoYmlzZWN0KGN1cnIsIGEodiksIDAsIGN1cnIubGVuZ3RoKSwgMCwgYSh2KSk7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBiaXNlY3QgPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSkubGVmdDtcblx0XHR2YXIgYmlzZWN0SGlzdG8gPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KS5yaWdodDtcblx0XHR2YXIgY3Vycjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Y3VyciA9IHBhdGgocCkuaGlzdG9ncmFtW2Jpc2VjdEhpc3RvKHBhdGgocCkuaGlzdG9ncmFtLCBhKHYpLCAwLCBwYXRoKHApLmhpc3RvZ3JhbS5sZW5ndGgpIC0gMV07XG5cdFx0XHRjdXJyLnktLTtcblx0XHRcdGN1cnIuc3BsaWNlKGJpc2VjdChjdXJyLCBhKHYpLCAwLCBjdXJyLmxlbmd0aCksIDEpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHRocmVzaG9sZHMsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLmhpc3RvZ3JhbSA9IFtdO1xuXHRcdFx0dmFyIGFyciA9IFtdO1xuXHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8IHRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YXJyID0gW107XG5cdFx0XHRcdGFyci54ID0gdGhyZXNob2xkc1tpIC0gMV07XG5cdFx0XHRcdGFyci5keCA9ICh0aHJlc2hvbGRzW2ldIC0gdGhyZXNob2xkc1tpIC0gMV0pO1xuXHRcdFx0XHRhcnIueSA9IDA7XG5cdFx0XHRcdHBhdGgocCkuaGlzdG9ncmFtLnB1c2goYXJyKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9faGlzdG9ncmFtO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9oaXN0b2dyYW0uanNcbiAqKiBtb2R1bGUgaWQgPSA1MDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19tYXggPSB7XG5cdGFkZDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcbiBcblx0XHRcdHBhdGgocCkubWF4ID0gcGF0aChwKS52YWx1ZUxpc3RbcGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoIC0gMV07XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIHVuZGVmaW5lZC5cblx0XHRcdGlmKHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRwYXRoKHApLm1heCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9XG4gXG5cdFx0XHRwYXRoKHApLm1heCA9IHBhdGgocCkudmFsdWVMaXN0W3BhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkubWF4ID0gdW5kZWZpbmVkO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19tYXg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL21heC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX21lZGlhbiA9IHtcblx0YWRkOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaGFsZjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXG5cdFx0XHRoYWxmID0gTWF0aC5mbG9vcihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGgvMik7XG4gXG5cdFx0XHRpZihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggJSAyKSB7XG5cdFx0XHRcdHBhdGgocCkubWVkaWFuID0gcGF0aChwKS52YWx1ZUxpc3RbaGFsZl07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXRoKHApLm1lZGlhbiA9IChwYXRoKHApLnZhbHVlTGlzdFtoYWxmLTFdICsgcGF0aChwKS52YWx1ZUxpc3RbaGFsZl0pIC8gMi4wO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHZhciBoYWxmO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cblx0XHRcdGhhbGYgPSBNYXRoLmZsb29yKHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aC8yKTtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIHVuZGVmaW5lZC5cblx0XHRcdGlmKHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRwYXRoKHApLm1lZGlhbiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9XG4gXG5cdFx0XHRpZihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggPT09IDEgfHwgcGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoICUgMikge1xuXHRcdFx0XHRwYXRoKHApLm1lZGlhbiA9IHBhdGgocCkudmFsdWVMaXN0W2hhbGZdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGF0aChwKS5tZWRpYW4gPSAocGF0aChwKS52YWx1ZUxpc3RbaGFsZi0xXSArIHBhdGgocCkudmFsdWVMaXN0W2hhbGZdKSAvIDIuMDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLm1lZGlhbiA9IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fbWVkaWFuO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9tZWRpYW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1MDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19taW4gPSB7XG5cdGFkZDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcbiBcblx0XHRcdHBhdGgocCkubWluID0gcGF0aChwKS52YWx1ZUxpc3RbMF07XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIHVuZGVmaW5lZC5cblx0XHRcdGlmKHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRwYXRoKHApLm1pbiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9XG4gXG5cdFx0XHRwYXRoKHApLm1pbiA9IHBhdGgocCkudmFsdWVMaXN0WzBdO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkubWluID0gdW5kZWZpbmVkO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19taW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL21pbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyID0gcmVxdWlyZSgnY3Jvc3NmaWx0ZXIyJyk7XG5cbnZhciByZWR1Y3Rpb19uZXN0ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChrZXlBY2Nlc3NvcnMsIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGk7IC8vIEN1cnJlbnQga2V5IGFjY2Vzc29yXG5cdFx0dmFyIGFyclJlZjtcblx0XHR2YXIgbmV3UmVmO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cblx0XHRcdGFyclJlZiA9IHBhdGgocCkubmVzdDtcblx0XHRcdGtleUFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcblx0XHRcdFx0bmV3UmVmID0gYXJyUmVmLmZpbHRlcihmdW5jdGlvbihkKSB7IHJldHVybiBkLmtleSA9PT0gYSh2KTsgfSlbMF07XG5cdFx0XHRcdGlmKG5ld1JlZikge1xuXHRcdFx0XHRcdC8vIFRoZXJlIGlzIGFub3RoZXIgbGV2ZWwuXG5cdFx0XHRcdFx0YXJyUmVmID0gbmV3UmVmLnZhbHVlcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBOZXh0IGxldmVsIGRvZXNuJ3QgeWV0IGV4aXN0IHNvIHdlIGNyZWF0ZSBpdC5cblx0XHRcdFx0XHRuZXdSZWYgPSBbXTtcblx0XHRcdFx0XHRhcnJSZWYucHVzaCh7IGtleTogYSh2KSwgdmFsdWVzOiBuZXdSZWYgfSk7XG5cdFx0XHRcdFx0YXJyUmVmID0gbmV3UmVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0YXJyUmVmLnB1c2godik7XG5cdFx0XHRcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGtleUFjY2Vzc29ycywgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgYXJyUmVmO1xuXHRcdHZhciBuZXh0UmVmO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cblx0XHRcdGFyclJlZiA9IHBhdGgocCkubmVzdDtcblx0XHRcdGtleUFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcblx0XHRcdFx0YXJyUmVmID0gYXJyUmVmLmZpbHRlcihmdW5jdGlvbihkKSB7IHJldHVybiBkLmtleSA9PT0gYSh2KTsgfSlbMF0udmFsdWVzO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFycmF5IGNvbnRhaW5zIGFuIGFjdHVhbCByZWZlcmVuY2UgdG8gdGhlIHJvdywgc28ganVzdCBzcGxpY2UgaXQgb3V0LlxuXHRcdFx0YXJyUmVmLnNwbGljZShhcnJSZWYuaW5kZXhPZih2KSwgMSk7XG5cblx0XHRcdC8vIElmIHRoZSBsZWFmIG5vdyBoYXMgbGVuZ3RoIDAgYW5kIGl0J3Mgbm90IHRoZSBiYXNlIGFycmF5IHJlbW92ZSBpdC5cblx0XHRcdC8vIFRPRE9cblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLm5lc3QgPSBbXTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fbmVzdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvbmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZnVuY3Rpb24gcG9zdFByb2Nlc3MocmVkdWN0aW8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGdyb3VwLCBwLCBmKSB7XG4gICAgICAgIGdyb3VwLnBvc3QgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHBvc3Rwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cHJvY2Vzcy5hbGwoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb3N0cHJvY2Vzcy5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwLmFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwb3N0cHJvY2Vzc29ycyA9IHJlZHVjdGlvLnBvc3Rwcm9jZXNzb3JzO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zdHByb2Nlc3NvcnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3N0cHJvY2Vzc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hbGwgPSBwb3N0cHJvY2Vzcy5hbGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBwb3N0cHJvY2Vzcy5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHByb2Nlc3NvcnNbbmFtZV0oX2FsbCwgZiwgcCkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cHJvY2VzcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcG9zdHByb2Nlc3M7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb3N0UHJvY2VzcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9wb3N0cHJvY2Vzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWR1Y3Rpbyl7XG4gICAgcmVkdWN0aW8ucG9zdHByb2Nlc3NvcnMgPSB7fTtcbiAgICByZWR1Y3Rpby5yZWdpc3RlclBvc3RQcm9jZXNzb3IgPSBmdW5jdGlvbihuYW1lLCBmdW5jKXtcbiAgICAgICAgcmVkdWN0aW8ucG9zdHByb2Nlc3NvcnNbbmFtZV0gPSBmdW5jO1xuICAgIH07XG5cbiAgICByZWR1Y3Rpby5yZWdpc3RlclBvc3RQcm9jZXNzb3IoJ2NhcCcsIHJlcXVpcmUoJy4vY2FwJykpO1xuICAgIHJlZHVjdGlvLnJlZ2lzdGVyUG9zdFByb2Nlc3Nvcignc29ydEJ5JywgcmVxdWlyZSgnLi9zb3J0QnknKSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3Bvc3Rwcm9jZXNzb3JzLmpzXG4gKiogbW9kdWxlIGlkID0gNTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkLmpzJyk7XG52YXIgcmVkdWN0aW9fYWNjZXNzb3JzID0gcmVxdWlyZSgnLi9hY2Nlc3NvcnMuanMnKTtcbnZhciByZWR1Y3Rpb19wYXJhbWV0ZXJzID0gcmVxdWlyZSgnLi9wYXJhbWV0ZXJzLmpzJyk7XG52YXIgcmVkdWN0aW9fcG9zdHByb2Nlc3MgPSByZXF1aXJlKCcuL3Bvc3Rwcm9jZXNzJyk7XG52YXIgY3Jvc3NmaWx0ZXIgPSByZXF1aXJlKCdjcm9zc2ZpbHRlcjInKTtcblxuZnVuY3Rpb24gcmVkdWN0aW8oKSB7XG5cdHZhciBwYXJhbWV0ZXJzID0gcmVkdWN0aW9fcGFyYW1ldGVycygpO1xuXG5cdHZhciBmdW5jcyA9IHt9O1xuXG5cdGZ1bmN0aW9uIG15KGdyb3VwKSB7XG5cdFx0Ly8gU3RhcnQgZnJlc2ggZWFjaCB0aW1lLlxuXHRcdGZ1bmNzID0ge1xuXHRcdFx0cmVkdWNlQWRkOiBmdW5jdGlvbihwKSB7IHJldHVybiBwOyB9LFxuXHRcdFx0cmVkdWNlUmVtb3ZlOiBmdW5jdGlvbihwKSB7IHJldHVybiBwOyB9LFxuXHRcdFx0cmVkdWNlSW5pdGlhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4ge307IH0sXG5cdFx0fTtcblxuXHRcdHJlZHVjdGlvX2J1aWxkLmJ1aWxkKHBhcmFtZXRlcnMsIGZ1bmNzKTtcblxuXHRcdC8vIElmIHdlJ3JlIGRvaW5nIGdyb3VwQWxsXG5cdFx0aWYocGFyYW1ldGVycy5ncm91cEFsbCkge1xuXHRcdFx0aWYoZ3JvdXAudG9wKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIidncm91cEFsbCcgaXMgZGVmaW5lZCBidXQgYXR0ZW1wdGluZyB0byBydW4gb24gYSBzdGFuZGFyZCBkaW1lbnNpb24uZ3JvdXAoKS4gTXVzdCBydW4gb24gZGltZW5zaW9uLmdyb3VwQWxsKCkuXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGJpc2VjdCA9IGNyb3NzZmlsdGVyLmJpc2VjdC5ieShmdW5jdGlvbihkKSB7IHJldHVybiBkLmtleTsgfSkubGVmdDtcblx0XHRcdFx0dmFyIGksIGo7XG5cdFx0XHRcdHZhciBrZXlzO1xuICAgICAgICB2YXIga2V5c0xlbmd0aDtcbiAgICAgICAgdmFyIGs7IC8vIEtleVxuXHRcdFx0XHRncm91cC5yZWR1Y2UoXG5cdFx0XHRcdFx0ZnVuY3Rpb24ocCwgdiwgbmYpIHtcblx0XHRcdFx0XHRcdGtleXMgPSBwYXJhbWV0ZXJzLmdyb3VwQWxsKHYpO1xuICAgICAgICAgICAga2V5c0xlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKGo9MDtqPGtleXNMZW5ndGg7aisrKSB7XG4gICAgICAgICAgICAgIGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgICBpID0gYmlzZWN0KHAsIGssIDAsIHAubGVuZ3RoKTtcblx0XHRcdFx0XHRcdFx0aWYoIXBbaV0gfHwgcFtpXS5rZXkgIT09IGspIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBJZiB0aGUgZ3JvdXAgZG9lc24ndCB5ZXQgZXhpc3QsIGNyZWF0ZSBpdCBmaXJzdC5cblx0XHRcdFx0XHRcdFx0XHRwLnNwbGljZShpLCAwLCB7IGtleTogaywgdmFsdWU6IGZ1bmNzLnJlZHVjZUluaXRpYWwoKSB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIFRoZW4gcGFzcyB0aGUgcmVjb3JkIGFuZCB0aGUgZ3JvdXAgdmFsdWUgdG8gdGhlIHJlZHVjZXJzXG5cdFx0XHRcdFx0XHRcdGZ1bmNzLnJlZHVjZUFkZChwW2ldLnZhbHVlLCB2LCBuZik7XG4gICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRyZXR1cm4gcDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZ1bmN0aW9uKHAsIHYsIG5mKSB7XG5cdFx0XHRcdFx0XHRrZXlzID0gcGFyYW1ldGVycy5ncm91cEFsbCh2KTtcbiAgICAgICAgICAgIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcihqPTA7ajxrZXlzTGVuZ3RoO2orKykge1xuICAgICAgICAgICAgICBpID0gYmlzZWN0KHAsIGtleXNbal0sIDAsIHAubGVuZ3RoKTtcblx0XHRcdFx0XHRcdFx0Ly8gVGhlIGdyb3VwIHNob3VsZCBleGlzdCBvciB3ZSdyZSBpbiB0cm91YmxlIVxuXHRcdFx0XHRcdFx0XHQvLyBUaGVuIHBhc3MgdGhlIHJlY29yZCBhbmQgdGhlIGdyb3VwIHZhbHVlIHRvIHRoZSByZWR1Y2Vyc1xuXHRcdFx0XHRcdFx0XHRmdW5jcy5yZWR1Y2VSZW1vdmUocFtpXS52YWx1ZSwgdiwgbmYpO1xuICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmKCFncm91cC5hbGwpIHtcblx0XHRcdFx0XHQvLyBBZGQgYW4gJ2FsbCcgbWV0aG9kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggc3RhbmRhcmQgQ3Jvc3NmaWx0ZXIgZ3JvdXBzLlxuXHRcdFx0XHRcdGdyb3VwLmFsbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy52YWx1ZSgpOyB9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdyb3VwLnJlZHVjZShmdW5jcy5yZWR1Y2VBZGQsIGZ1bmNzLnJlZHVjZVJlbW92ZSwgZnVuY3MucmVkdWNlSW5pdGlhbCk7XG5cdFx0fVxuXG5cdFx0cmVkdWN0aW9fcG9zdHByb2Nlc3MoZ3JvdXAsIHBhcmFtZXRlcnMsIGZ1bmNzKTtcblxuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdHJlZHVjdGlvX2FjY2Vzc29ycy5idWlsZChteSwgcGFyYW1ldGVycyk7XG5cblx0cmV0dXJuIG15O1xufVxuXG5yZXF1aXJlKCcuL3Bvc3Rwcm9jZXNzb3JzJykocmVkdWN0aW8pO1xucmVkdWN0aW9fcG9zdHByb2Nlc3MgPSByZWR1Y3Rpb19wb3N0cHJvY2VzcyhyZWR1Y3Rpbyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW87XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvcmVkdWN0aW8uanNcbiAqKiBtb2R1bGUgaWQgPSA1MTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBwbHVja19uID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAodHlwZW9mIG4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmICh+bi5pbmRleE9mKCcuJykpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gbi5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdC5yZWR1Y2UoZnVuY3Rpb24gKHAsIHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcFt2XTtcbiAgICAgICAgICAgIH0sIGQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbbl07XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuXG52YXIgY29tcGFyZXIgPSBmdW5jdGlvbiAoYWNjZXNzb3IsIG9yZGVyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBvcmRlcmluZyhhY2Nlc3NvcihhKSwgYWNjZXNzb3IoYikpO1xuICAgIH07XG59O1xuXG52YXIgdHlwZSA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwcmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIG9yZGVyKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvcmRlciA9IGFzY2VuZGluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpb3IoKS5zb3J0KGNvbXBhcmVyKHBsdWNrX24odmFsdWUpLCBvcmRlcikpO1xuICAgIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3NvcnRCeS5qc1xuICoqIG1vZHVsZSBpZCA9IDUxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX3N0ZCA9IHtcblx0YWRkOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0aWYocGF0aChwKS5jb3VudCA+IDApIHtcblx0XHRcdFx0cGF0aChwKS5zdGQgPSAwLjA7XG5cdFx0XHRcdHZhciBuID0gcGF0aChwKS5zdW1PZlNxIC0gcGF0aChwKS5zdW0qcGF0aChwKS5zdW0vcGF0aChwKS5jb3VudDtcblx0XHRcdFx0aWYgKG4+MC4wKSBwYXRoKHApLnN0ZCA9IE1hdGguc3FydChuLyhwYXRoKHApLmNvdW50LTEpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhdGgocCkuc3RkID0gMC4wO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0aWYocGF0aChwKS5jb3VudCA+IDApIHtcblx0XHRcdFx0cGF0aChwKS5zdGQgPSAwLjA7XG5cdFx0XHRcdHZhciBuID0gcGF0aChwKS5zdW1PZlNxIC0gcGF0aChwKS5zdW0qcGF0aChwKS5zdW0vcGF0aChwKS5jb3VudDtcblx0XHRcdFx0aWYgKG4+MC4wKSBwYXRoKHApLnN0ZCA9IE1hdGguc3FydChuLyhwYXRoKHApLmNvdW50LTEpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhdGgocCkuc3RkID0gMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5zdGQgPSAwO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19zdGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3N0ZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX3N1bV9vZl9zcSA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKS5zdW1PZlNxID0gcGF0aChwKS5zdW1PZlNxICsgYSh2KSphKHYpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKS5zdW1PZlNxID0gcGF0aChwKS5zdW1PZlNxIC0gYSh2KSphKHYpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLnN1bU9mU3EgPSAwO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19zdW1fb2Zfc3E7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3N1bS1vZi1zcXVhcmVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fc3VtID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRwYXRoKHApLnN1bSA9IHBhdGgocCkuc3VtICsgYSh2KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocCkuc3VtID0gcGF0aChwKS5zdW0gLSBhKHYpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLnN1bSA9IDA7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX3N1bTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvc3VtLmpzXG4gKiogbW9kdWxlIGlkID0gNTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgY3Jvc3NmaWx0ZXIgPSByZXF1aXJlKCdjcm9zc2ZpbHRlcjInKTtcblxudmFyIHJlZHVjdGlvX3ZhbHVlX2NvdW50ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpLCBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHQvLyBOb3Qgc3VyZSBpZiB0aGlzIGlzIG1vcmUgZWZmaWNpZW50IHRoYW4gc29ydGluZy5cblx0XHRcdGkgPSBwYXRoKHApLmJpc2VjdChwYXRoKHApLnZhbHVlcywgYSh2KSwgMCwgcGF0aChwKS52YWx1ZXMubGVuZ3RoKTtcblx0XHRcdGN1cnIgPSBwYXRoKHApLnZhbHVlc1tpXTtcblx0XHRcdGlmKGN1cnIgJiYgY3VyclswXSA9PT0gYSh2KSkge1xuXHRcdFx0XHQvLyBWYWx1ZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgYXJyYXkgLSBpbmNyZW1lbnQgaXRcblx0XHRcdFx0Y3VyclsxXSsrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gVmFsdWUgZG9lc24ndCBleGlzdCAtIGFkZCBpdCBpbiBmb3JtIFt2YWx1ZSwgMV1cblx0XHRcdFx0cGF0aChwKS52YWx1ZXMuc3BsaWNlKGksIDAsIFthKHYpLCAxXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRpID0gcGF0aChwKS5iaXNlY3QocGF0aChwKS52YWx1ZXMsIGEodiksIDAsIHBhdGgocCkudmFsdWVzLmxlbmd0aCk7XG5cdFx0XHQvLyBWYWx1ZSBhbHJlYWR5IGV4aXN0cyBvciBzb21ldGhpbmcgaGFzIGdvbmUgdGVycmlibHkgd3JvbmcuXG5cdFx0XHRwYXRoKHApLnZhbHVlc1tpXVsxXS0tO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHQvLyBBcnJheVtBcnJheVt2YWx1ZSwgY291bnRdXVxuXHRcdFx0cGF0aChwKS52YWx1ZXMgPSBbXTtcblx0XHRcdHBhdGgocCkuYmlzZWN0ID0gY3Jvc3NmaWx0ZXIuYmlzZWN0LmJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRbMF07IH0pLmxlZnQ7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX3ZhbHVlX2NvdW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy92YWx1ZS1jb3VudC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyID0gcmVxdWlyZSgnY3Jvc3NmaWx0ZXIyJyk7XG5cbnZhciByZWR1Y3Rpb192YWx1ZV9saXN0ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpO1xuXHRcdHZhciBiaXNlY3QgPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSkubGVmdDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Ly8gTm90IHN1cmUgaWYgdGhpcyBpcyBtb3JlIGVmZmljaWVudCB0aGFuIHNvcnRpbmcuXG5cdFx0XHRpID0gYmlzZWN0KHBhdGgocCkudmFsdWVMaXN0LCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGgpO1xuXHRcdFx0cGF0aChwKS52YWx1ZUxpc3Quc3BsaWNlKGksIDAsIGEodikpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaTtcblx0XHR2YXIgYmlzZWN0ID0gY3Jvc3NmaWx0ZXIuYmlzZWN0LmJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pLmxlZnQ7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGkgPSBiaXNlY3QocGF0aChwKS52YWx1ZUxpc3QsIGEodiksIDAsIHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCk7XG5cdFx0XHQvLyBWYWx1ZSBhbHJlYWR5IGV4aXN0cyBvciBzb21ldGhpbmcgaGFzIGdvbmUgdGVycmlibHkgd3JvbmcuXG5cdFx0XHRwYXRoKHApLnZhbHVlTGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkudmFsdWVMaXN0ID0gW107XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX3ZhbHVlX2xpc3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3ZhbHVlLWxpc3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1MThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFyKGRlZikge1xuICAgIC8vIENsZWFyIGEgc2luZ2xlIG9yIG11bHRpcGxlIGNvbHVtbiBkZWZpbml0aW9uc1xuICAgIGlmIChkZWYpIHtcbiAgICAgIGRlZiA9IF8uaXNBcnJheShkZWYpID8gZGVmIDogW2RlZl1cbiAgICB9XG5cbiAgICBpZiAoIWRlZikge1xuICAgICAgLy8gQ2xlYXIgYWxsIG9mIHRoZSBjb2x1bW4gZGVmZW5pdGlvbnNcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcChzZXJ2aWNlLmNvbHVtbnMsIGRpc3Bvc2VDb2x1bW4pKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VydmljZS5jb2x1bW5zID0gW11cbiAgICAgICAgICByZXR1cm4gc2VydmljZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcChkZWYsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoXy5pc09iamVjdChkKSkge1xuICAgICAgICBkID0gZC5rZXlcbiAgICAgIH1cbiAgICAgIC8vIENsZWFyIHRoZSBjb2x1bW5cbiAgICAgIHZhciBjb2x1bW4gPSBfLnJlbW92ZShzZXJ2aWNlLmNvbHVtbnMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChfLmlzQXJyYXkoZCkpIHtcbiAgICAgICAgICByZXR1cm4gIV8ueG9yKGMua2V5LCBkKS5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5rZXkgPT09IGQpIHtcbiAgICAgICAgICBpZiAoYy5keW5hbWljUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlbMF1cblxuICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdBdHRlbXB0ZWQgdG8gY2xlYXIgYSBjb2x1bW4gdGhhdCBpcyByZXF1aXJlZCBmb3IgYW5vdGhlciBxdWVyeSEnLCBjKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZGlzcG9zZUNvbHVtbihjb2x1bW4pXG4gICAgfSkpXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZUNvbHVtbihjb2x1bW4pIHtcbiAgICAgIHZhciBkaXNwb3NhbEFjdGlvbnMgPSBbXVxuICAgICAgICAvLyBEaXNwb3NlIHRoZSBkaW1lbnNpb25cbiAgICAgIGlmIChjb2x1bW4ucmVtb3ZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGRpc3Bvc2FsQWN0aW9ucyA9IF8ubWFwKGNvbHVtbi5yZW1vdmVMaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGlzdGVuZXIoKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHZhciBmaWx0ZXJLZXkgPSBjb2x1bW4ua2V5XG4gICAgICBpZiAoY29sdW1uLmNvbXBsZXggPT09ICdhcnJheScpIHtcbiAgICAgICAgZmlsdGVyS2V5ID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmtleSlcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW4uY29tcGxleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmaWx0ZXJLZXkgPSBjb2x1bW4ua2V5LnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLmZpbHRlcnNbZmlsdGVyS2V5XVxuICAgICAgaWYgKGNvbHVtbi5kaW1lbnNpb24pIHtcbiAgICAgICAgZGlzcG9zYWxBY3Rpb25zLnB1c2goUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uZGlzcG9zZSgpKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChkaXNwb3NhbEFjdGlvbnMpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvY2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IHJlcXVpcmUoJy4vZGltZW5zaW9uJykoc2VydmljZSlcblxuICB2YXIgY29sdW1uRnVuYyA9IGNvbHVtblxuICBjb2x1bW5GdW5jLmZpbmQgPSBmaW5kQ29sdW1uXG5cbiAgcmV0dXJuIGNvbHVtbkZ1bmNcblxuICBmdW5jdGlvbiBjb2x1bW4oZGVmKSB7XG4gICAgLy8gU3VwcG9ydCBncm91cEFsbCBkaW1lbnNpb25cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkZWYpKSB7XG4gICAgICBkZWYgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGRlYWwgaW4gYnVsay4gIExpa2UgQ29zdGNvIVxuICAgIGlmICghXy5pc0FycmF5KGRlZikpIHtcbiAgICAgIGRlZiA9IFtkZWZdXG4gICAgfVxuXG4gICAgLy8gTWFwcCBhbGwgY29sdW1uIGNyZWF0aW9uLCB3YWl0IGZvciBhbGwgdG8gc2V0dGxlLCB0aGVuIHJldHVybiB0aGUgaW5zdGFuY2VcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAoZGVmLCBtYWtlQ29sdW1uKSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kQ29sdW1uKGQpIHtcbiAgICByZXR1cm4gXy5maW5kKHNlcnZpY2UuY29sdW1ucywgZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkoZCkpIHtcbiAgICAgICAgcmV0dXJuICFfLnhvcihjLmtleSwgZCkubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gYy5rZXkgPT09IGRcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZShkKSB7XG4gICAgaWYgKF8uaXNOdW1iZXIoZCkpIHtcbiAgICAgIHJldHVybiAnbnVtYmVyJ1xuICAgIH1cbiAgICBpZiAoXy5pc0Jvb2xlYW4oZCkpIHtcbiAgICAgIHJldHVybiAnYm9vbCdcbiAgICB9XG4gICAgaWYgKF8uaXNBcnJheShkKSkge1xuICAgICAgcmV0dXJuICdhcnJheSdcbiAgICB9XG4gICAgaWYgKF8uaXNPYmplY3QoZCkpIHtcbiAgICAgIHJldHVybiAnb2JqZWN0J1xuICAgIH1cbiAgICByZXR1cm4gJ3N0cmluZydcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VDb2x1bW4oZCkge1xuICAgIHZhciBjb2x1bW4gPSBfLmlzT2JqZWN0KGQpID8gZCA6IHtcbiAgICAgIGtleTogZCxcbiAgICB9XG5cbiAgICB2YXIgZXhpc3RpbmcgPSBmaW5kQ29sdW1uKGNvbHVtbi5rZXkpXG5cbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGV4aXN0aW5nLnRlbXBvcmFyeSA9IGZhbHNlXG4gICAgICBpZiAoZXhpc3RpbmcuZHluYW1pY1JlZmVyZW5jZSkge1xuICAgICAgICBleGlzdGluZy5keW5hbWljUmVmZXJlbmNlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiBleGlzdGluZy5wcm9taXNlXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGZvciBzdG9yaW5nIGluZm8gYWJvdXQgcXVlcmllcyBhbmQgcG9zdCBhZ2dyZWdhdGlvbnNcbiAgICBjb2x1bW4ucXVlcmllcyA9IFtdXG4gICAgc2VydmljZS5jb2x1bW5zLnB1c2goY29sdW1uKVxuXG4gICAgY29sdW1uLnByb21pc2UgPSBQcm9taXNlLnRyeShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlcnZpY2UuY2YuYWxsKCkpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoYWxsKSB7XG4gICAgICB2YXIgc2FtcGxlXG5cbiAgICAgIC8vIENvbXBsZXggY29sdW1uIEtleXNcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmtleSkpIHtcbiAgICAgICAgY29sdW1uLmNvbXBsZXggPSAnZnVuY3Rpb24nXG4gICAgICAgIHNhbXBsZSA9IGNvbHVtbi5rZXkoYWxsWzBdKVxuICAgICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKGNvbHVtbi5rZXkpICYmIChjb2x1bW4ua2V5LmluZGV4T2YoJy4nKSA+IC0xIHx8IGNvbHVtbi5rZXkuaW5kZXhPZignWycpID4gLTEpKSB7XG4gICAgICAgIGNvbHVtbi5jb21wbGV4ID0gJ3N0cmluZydcbiAgICAgICAgc2FtcGxlID0gXy5nZXQoYWxsWzBdLCBjb2x1bW4ua2V5KVxuICAgICAgfSBlbHNlIGlmIChfLmlzQXJyYXkoY29sdW1uLmtleSkpIHtcbiAgICAgICAgY29sdW1uLmNvbXBsZXggPSAnYXJyYXknXG4gICAgICAgIHNhbXBsZSA9IF8udmFsdWVzKF8ucGljayhhbGxbMF0sIGNvbHVtbi5rZXkpKVxuICAgICAgICBpZiAoc2FtcGxlLmxlbmd0aCAhPT0gY29sdW1uLmtleS5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbHVtbiBrZXkgZG9lcyBub3QgZXhpc3QgaW4gZGF0YSEnLCBjb2x1bW4ua2V5KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1wbGUgPSBhbGxbMF1bY29sdW1uLmtleV1cbiAgICAgIH1cblxuICAgICAgLy8gSW5kZXggQ29sdW1uXG4gICAgICBpZiAoIWNvbHVtbi5jb21wbGV4ICYmIGNvbHVtbi5rZXkgIT09IHRydWUgJiYgdHlwZW9mIHNhbXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2x1bW4ga2V5IGRvZXMgbm90IGV4aXN0IGluIGRhdGEhJywgY29sdW1uLmtleSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGNvbHVtbiBleGlzdHMsIGxldCdzIGF0IGxlYXN0IG1ha2Ugc3VyZSBpdCdzIG1hcmtlZFxuICAgICAgLy8gYXMgcGVybWFuZW50LiBUaGVyZSBpcyBhIHNsaWdodCBjaGFuY2UgaXQgZXhpc3RzIGJlY2F1c2VcbiAgICAgIC8vIG9mIGEgZmlsdGVyLCBhbmQgdGhlIHVzZXIgZGVjaWRlcyB0byBtYWtlIGl0IHBlcm1hbmVudFxuXG4gICAgICBpZiAoY29sdW1uLmtleSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb2x1bW4udHlwZSA9ICdhbGwnXG4gICAgICB9IGVsc2UgaWYgKGNvbHVtbi5jb21wbGV4KSB7XG4gICAgICAgIGNvbHVtbi50eXBlID0gJ2NvbXBsZXgnXG4gICAgICB9IGVsc2UgaWYgKGNvbHVtbi5hcnJheSkge1xuICAgICAgICBjb2x1bW4udHlwZSA9ICdhcnJheSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbi50eXBlID0gZ2V0VHlwZShzYW1wbGUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaW1lbnNpb24ubWFrZShjb2x1bW4ua2V5LCBjb2x1bW4udHlwZSwgY29sdW1uLmNvbXBsZXgpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoZGltKSB7XG4gICAgICBjb2x1bW4uZGltZW5zaW9uID0gZGltXG4gICAgICBjb2x1bW4uZmlsdGVyQ291bnQgPSAwXG4gICAgICB2YXIgc3RvcExpc3RlbmluZ0ZvckRhdGEgPSBzZXJ2aWNlLm9uRGF0YUNoYW5nZShidWlsZENvbHVtbktleXMpXG4gICAgICBjb2x1bW4ucmVtb3ZlTGlzdGVuZXJzID0gW3N0b3BMaXN0ZW5pbmdGb3JEYXRhXVxuXG4gICAgICByZXR1cm4gYnVpbGRDb2x1bW5LZXlzKClcblxuICAgICAgLy8gQnVpbGQgdGhlIGNvbHVtbktleXNcbiAgICAgIGZ1bmN0aW9uIGJ1aWxkQ29sdW1uS2V5cyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjb2x1bW4ua2V5ID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWNjZXNzb3IgPSBkaW1lbnNpb24ubWFrZUFjY2Vzc29yKGNvbHVtbi5rZXksIGNvbHVtbi5jb21wbGV4KVxuICAgICAgICBjb2x1bW4udmFsdWVzID0gY29sdW1uLnZhbHVlcyB8fCBbXVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnRyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5hZGRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjaGFuZ2VzLmFkZGVkKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uYm90dG9tKEluZmluaXR5KSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJvd3MpIHtcbiAgICAgICAgICB2YXIgbmV3VmFsdWVzXG4gICAgICAgICAgaWYgKGNvbHVtbi5jb21wbGV4ID09PSAnc3RyaW5nJyB8fCBjb2x1bW4uY29tcGxleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gXy5tYXAocm93cywgYWNjZXNzb3IpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dzLCBhY2Nlc3Nvci50b1N0cmluZygpLCBuZXdWYWx1ZXMpXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4udHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gXy5mbGF0dGVuKF8ubWFwKHJvd3MsIGFjY2Vzc29yKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gXy5tYXAocm93cywgYWNjZXNzb3IpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbHVtbi52YWx1ZXMgPSBfLnVuaXEoY29sdW1uLnZhbHVlcy5jb25jYXQobmV3VmFsdWVzKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbHVtbi5wcm9taXNlXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvY29sdW1uLmpzXG4gKiogbW9kdWxlIGlkID0gNTIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBjcm9zc2ZpbHRlciA9IHJlcXVpcmUoJ2Nyb3NzZmlsdGVyMicpXG5cbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IGJ1aWxkLFxuICAgIGdlbmVyYXRlQ29sdW1uczogZ2VuZXJhdGVDb2x1bW5zLFxuICAgIGFkZDogYWRkLFxuICAgIHJlbW92ZTogcmVtb3ZlLFxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGQoYykge1xuICAgIGlmIChfLmlzQXJyYXkoYykpIHtcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHN1cHBvcnQgZm9yIGNyb3NzZmlsdGVyIGFzeW5jXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNyb3NzZmlsdGVyKGMpKVxuICAgIH1cbiAgICBpZiAoIWMgfHwgdHlwZW9mIGMuZGltZW5zaW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdObyBDcm9zc2ZpbHRlciBkYXRhIG9yIGluc3RhbmNlIGZvdW5kIScpKVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGMpXG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNvbHVtbnMoZGF0YSkge1xuICAgIGlmICghc2VydmljZS5vcHRpb25zLmdlbmVyYXRlZENvbHVtbnMpIHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIHJldHVybiBfLm1hcChkYXRhLCBmdW5jdGlvbiAoZC8qICwgaSAqLykge1xuICAgICAgXy5mb3JFYWNoKHNlcnZpY2Uub3B0aW9ucy5nZW5lcmF0ZWRDb2x1bW5zLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgZFtrZXldID0gdmFsKGQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGRcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGRhdGEpIHtcbiAgICBkYXRhID0gZ2VuZXJhdGVDb2x1bW5zKGRhdGEpXG4gICAgcmV0dXJuIFByb21pc2UudHJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VydmljZS5jZi5hZGQoZGF0YSkpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5zZXJpYWwoXy5tYXAoc2VydmljZS5kYXRhTGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoe1xuICAgICAgICAgICAgYWRkZWQ6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS50cnkoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXJ2aWNlLmNmLnJlbW92ZSgpKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvY3Jvc3NmaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxuLy8gdmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpIC8vIF8gaXMgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmljZS5jZi5kYXRhTGlzdGVuZXJzID0gW11cbiAgICAgICAgc2VydmljZS5jZi5maWx0ZXJMaXN0ZW5lcnMgPSBbXVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlcnZpY2UuY2YucmVtb3ZlKCkpXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VydmljZVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2Rlc3Ryb3kuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICBtYWtlOiBtYWtlLFxuICAgIG1ha2VBY2Nlc3NvcjogbWFrZUFjY2Vzc29yLFxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZShrZXksIHR5cGUsIGNvbXBsZXgpIHtcbiAgICB2YXIgYWNjZXNzb3IgPSBtYWtlQWNjZXNzb3Ioa2V5LCBjb21wbGV4KVxuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aWxsIGhhbmRsZSBwcm9taXNlcyBvciBub24gcHJvbWlzZXMsIHNvXG4gICAgLy8gdGhpcyBjcm9zc2ZpbHRlciBhc3luYyBpcyBzdXBwb3J0ZWQgaWYgcHJlc2VudFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VydmljZS5jZi5kaW1lbnNpb24oYWNjZXNzb3IsIHR5cGUgPT09ICdhcnJheScpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFjY2Vzc29yKGtleSwgY29tcGxleCkge1xuICAgIHZhciBhY2Nlc3NvckZ1bmN0aW9uXG5cbiAgICBpZiAoY29tcGxleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFjY2Vzc29yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gXy5nZXQoZCwga2V5KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29tcGxleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWNjZXNzb3JGdW5jdGlvbiA9IGtleVxuICAgIH0gZWxzZSBpZiAoY29tcGxleCA9PT0gJ2FycmF5Jykge1xuICAgICAgdmFyIGFycmF5U3RyaW5nID0gXy5tYXAoa2V5LCBmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gJ2RbXFwnJyArIGsgKyAnXFwnXSdcbiAgICAgIH0pXG4gICAgICBhY2Nlc3NvckZ1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKCdkJywgU3RyaW5nKCdyZXR1cm4gJyArIEpTT04uc3RyaW5naWZ5KGFycmF5U3RyaW5nKS5yZXBsYWNlKC9cIi9nLCAnJykpKSAgLy8gZXNsaW50LWRpc2FibGUtbGluZSAgbm8tbmV3LWZ1bmNcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjZXNzb3JGdW5jdGlvbiA9XG4gICAgICAgIC8vIEluZGV4IERpbWVuc2lvblxuICAgICAgICBrZXkgPT09IHRydWUgPyBmdW5jdGlvbiBhY2Nlc3NvcihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfSA6XG4gICAgICAgIC8vIFZhbHVlIEFjY2Vzc29yIERpbWVuc2lvblxuICAgICAgICBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkW2tleV1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjZXNzb3JGdW5jdGlvblxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvZGltZW5zaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuLy8gdmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBHZXR0ZXJzXG4gICRmaWVsZDogJGZpZWxkLFxuICAvLyBCb29sZWFuc1xuICAkYW5kOiAkYW5kLFxuICAkb3I6ICRvcixcbiAgJG5vdDogJG5vdCxcblxuICAvLyBFeHByZXNzaW9uc1xuICAkZXE6ICRlcSxcbiAgJGd0OiAkZ3QsXG4gICRndGU6ICRndGUsXG4gICRsdDogJGx0LFxuICAkbHRlOiAkbHRlLFxuICAkbmU6ICRuZSxcbiAgJHR5cGU6ICR0eXBlLFxuXG4gIC8vIEFycmF5IEV4cHJlc3Npb25zXG4gICRpbjogJGluLFxuICAkbmluOiAkbmluLFxuICAkY29udGFpbnM6ICRjb250YWlucyxcbiAgJGV4Y2x1ZGVzOiAkZXhjbHVkZXMsXG4gICRzaXplOiAkc2l6ZSxcbn1cblxuLy8gR2V0dGVyc1xuZnVuY3Rpb24gJGZpZWxkKGQsIGNoaWxkKSB7XG4gIHJldHVybiBkW2NoaWxkXVxufVxuXG4vLyBPcGVyYXRvcnNcblxuZnVuY3Rpb24gJGFuZChkLCBjaGlsZCkge1xuICBjaGlsZCA9IGNoaWxkKGQpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWNoaWxkW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gJG9yKGQsIGNoaWxkKSB7XG4gIGNoaWxkID0gY2hpbGQoZClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjaGlsZFtpXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uICRub3QoZCwgY2hpbGQpIHtcbiAgY2hpbGQgPSBjaGlsZChkKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNoaWxkW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gRXhwcmVzc2lvbnNcblxuZnVuY3Rpb24gJGVxKGQsIGNoaWxkKSB7XG4gIHJldHVybiBkID09PSBjaGlsZCgpXG59XG5cbmZ1bmN0aW9uICRndChkLCBjaGlsZCkge1xuICByZXR1cm4gZCA+IGNoaWxkKClcbn1cblxuZnVuY3Rpb24gJGd0ZShkLCBjaGlsZCkge1xuICByZXR1cm4gZCA+PSBjaGlsZCgpXG59XG5cbmZ1bmN0aW9uICRsdChkLCBjaGlsZCkge1xuICByZXR1cm4gZCA8IGNoaWxkKClcbn1cblxuZnVuY3Rpb24gJGx0ZShkLCBjaGlsZCkge1xuICByZXR1cm4gZCA8PSBjaGlsZCgpXG59XG5cbmZ1bmN0aW9uICRuZShkLCBjaGlsZCkge1xuICByZXR1cm4gZCAhPT0gY2hpbGQoKVxufVxuXG5mdW5jdGlvbiAkdHlwZShkLCBjaGlsZCkge1xuICByZXR1cm4gdHlwZW9mIGQgPT09IGNoaWxkKClcbn1cblxuLy8gQXJyYXkgRXhwcmVzc2lvbnNcblxuZnVuY3Rpb24gJGluKGQsIGNoaWxkKSB7XG4gIHJldHVybiBkLmluZGV4T2YoY2hpbGQoKSkgPiAtMVxufVxuXG5mdW5jdGlvbiAkbmluKGQsIGNoaWxkKSB7XG4gIHJldHVybiBkLmluZGV4T2YoY2hpbGQoKSkgPT09IC0xXG59XG5cbmZ1bmN0aW9uICRjb250YWlucyhkLCBjaGlsZCkge1xuICByZXR1cm4gY2hpbGQoKS5pbmRleE9mKGQpID4gLTFcbn1cblxuZnVuY3Rpb24gJGV4Y2x1ZGVzKGQsIGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZCgpLmluZGV4T2YoZCkgPT09IC0xXG59XG5cbmZ1bmN0aW9uICRzaXplKGQsIGNoaWxkKSB7XG4gIHJldHVybiBkLmxlbmd0aCA9PT0gY2hpbGQoKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2V4cHJlc3Npb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNTI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG52YXIgYWdncmVnYXRpb24gPSByZXF1aXJlKCcuL2FnZ3JlZ2F0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLyogc2VydmljZSAqLykge1xuICByZXR1cm4ge1xuICAgIHBvc3Q6IHBvc3QsXG4gICAgc29ydEJ5S2V5OiBzb3J0QnlLZXksXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIHNxdWFzaDogc3F1YXNoLFxuICAgIGNoYW5nZTogY2hhbmdlLFxuICAgIGNoYW5nZU1hcDogY2hhbmdlTWFwLFxuICB9XG5cbiAgZnVuY3Rpb24gcG9zdChxdWVyeSwgcGFyZW50LCBjYikge1xuICAgIHF1ZXJ5LmRhdGEgPSBjbG9uZUlmTG9ja2VkKHBhcmVudClcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNiKHF1ZXJ5LCBwYXJlbnQpKVxuICB9XG5cbiAgZnVuY3Rpb24gc29ydEJ5S2V5KHF1ZXJ5LCBwYXJlbnQsIGRlc2MpIHtcbiAgICBxdWVyeS5kYXRhID0gY2xvbmVJZkxvY2tlZChwYXJlbnQpXG4gICAgcXVlcnkuZGF0YSA9IF8uc29ydEJ5KHF1ZXJ5LmRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5rZXlcbiAgICB9KVxuICAgIGlmIChkZXNjKSB7XG4gICAgICBxdWVyeS5kYXRhLnJldmVyc2UoKVxuICAgIH1cbiAgfVxuXG4gIC8vIExpbWl0IHJlc3VsdHMgdG8gbiwgb3IgZnJvbSBzdGFydCB0byBlbmRcbiAgZnVuY3Rpb24gbGltaXQocXVlcnksIHBhcmVudCwgc3RhcnQsIGVuZCkge1xuICAgIHF1ZXJ5LmRhdGEgPSBjbG9uZUlmTG9ja2VkKHBhcmVudClcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChlbmQpKSB7XG4gICAgICBlbmQgPSBzdGFydCB8fCAwXG4gICAgICBzdGFydCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBzdGFydCB8fCAwXG4gICAgICBlbmQgPSBlbmQgfHwgcXVlcnkuZGF0YS5sZW5ndGhcbiAgICB9XG4gICAgcXVlcnkuZGF0YSA9IHF1ZXJ5LmRhdGEuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydClcbiAgfVxuXG4gIC8vIFNxdWFzaCByZXN1bHRzIHRvIG4sIG9yIGZyb20gc3RhcnQgdG8gZW5kXG4gIGZ1bmN0aW9uIHNxdWFzaChxdWVyeSwgcGFyZW50LCBzdGFydCwgZW5kLCBhZ2dPYmosIGxhYmVsKSB7XG4gICAgcXVlcnkuZGF0YSA9IGNsb25lSWZMb2NrZWQocGFyZW50KVxuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICAgIGVuZCA9IGVuZCB8fCBxdWVyeS5kYXRhLmxlbmd0aFxuICAgIHZhciB0b1NxdWFzaCA9IHF1ZXJ5LmRhdGEuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydClcbiAgICB2YXIgc3F1YXNoZWQgPSB7XG4gICAgICBrZXk6IGxhYmVsIHx8ICdPdGhlcicsXG4gICAgICB2YWx1ZToge31cbiAgICB9XG4gICAgXy5yZWN1cnNlT2JqZWN0KGFnZ09iaiwgZnVuY3Rpb24gKHZhbCwga2V5LCBwYXRoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBbXVxuICAgICAgXy5mb3JFYWNoKHRvU3F1YXNoLCBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goXy5nZXQocmVjb3JkLnZhbHVlLCBwYXRoKSlcbiAgICAgIH0pXG4gICAgICBfLnNldChzcXVhc2hlZC52YWx1ZSwgcGF0aCwgYWdncmVnYXRpb24uYWdncmVnYXRvcnNbdmFsXShpdGVtcykpXG4gICAgfSlcbiAgICBxdWVyeS5kYXRhLnNwbGljZShzdGFydCwgMCwgc3F1YXNoZWQpXG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2UocXVlcnksIHBhcmVudCwgc3RhcnQsIGVuZCwgYWdnT2JqKSB7XG4gICAgcXVlcnkuZGF0YSA9IGNsb25lSWZMb2NrZWQocGFyZW50KVxuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICAgIGVuZCA9IGVuZCB8fCBxdWVyeS5kYXRhLmxlbmd0aFxuICAgIHZhciBvYmogPSB7XG4gICAgICBrZXk6IFtxdWVyeS5kYXRhW3N0YXJ0XS5rZXksIHF1ZXJ5LmRhdGFbZW5kXS5rZXldLFxuICAgICAgdmFsdWU6IHt9XG4gICAgfVxuICAgIF8ucmVjdXJzZU9iamVjdChhZ2dPYmosIGZ1bmN0aW9uICh2YWwsIGtleSwgcGF0aCkge1xuICAgICAgdmFyIGNoYW5nZVBhdGggPSBfLmNsb25lKHBhdGgpXG4gICAgICBjaGFuZ2VQYXRoLnBvcCgpXG4gICAgICBjaGFuZ2VQYXRoLnB1c2goa2V5ICsgJ0NoYW5nZScpXG4gICAgICBfLnNldChvYmoudmFsdWUsIGNoYW5nZVBhdGgsIF8uZ2V0KHF1ZXJ5LmRhdGFbZW5kXS52YWx1ZSwgcGF0aCkgLSBfLmdldChxdWVyeS5kYXRhW3N0YXJ0XS52YWx1ZSwgcGF0aCkpXG4gICAgfSlcbiAgICBxdWVyeS5kYXRhID0gb2JqXG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VNYXAocXVlcnksIHBhcmVudCwgYWdnT2JqLCBkZWZhdWx0TnVsbCkge1xuICAgIGRlZmF1bHROdWxsID0gXy5pc1VuZGVmaW5lZChkZWZhdWx0TnVsbCkgPyAwIDogZGVmYXVsdE51bGxcbiAgICBxdWVyeS5kYXRhID0gY2xvbmVJZkxvY2tlZChwYXJlbnQpXG4gICAgXy5yZWN1cnNlT2JqZWN0KGFnZ09iaiwgZnVuY3Rpb24gKHZhbCwga2V5LCBwYXRoKSB7XG4gICAgICB2YXIgY2hhbmdlUGF0aCA9IF8uY2xvbmUocGF0aClcbiAgICAgIHZhciBmcm9tU3RhcnRQYXRoID0gXy5jbG9uZShwYXRoKVxuICAgICAgdmFyIGZyb21FbmRQYXRoID0gXy5jbG9uZShwYXRoKVxuXG4gICAgICBjaGFuZ2VQYXRoLnBvcCgpXG4gICAgICBmcm9tU3RhcnRQYXRoLnBvcCgpXG4gICAgICBmcm9tRW5kUGF0aC5wb3AoKVxuXG4gICAgICBjaGFuZ2VQYXRoLnB1c2goa2V5ICsgJ0NoYW5nZScpXG4gICAgICBmcm9tU3RhcnRQYXRoLnB1c2goa2V5ICsgJ0NoYW5nZUZyb21TdGFydCcpXG4gICAgICBmcm9tRW5kUGF0aC5wdXNoKGtleSArICdDaGFuZ2VGcm9tRW5kJylcblxuICAgICAgdmFyIHN0YXJ0ID0gXy5nZXQocXVlcnkuZGF0YVswXS52YWx1ZSwgcGF0aCwgZGVmYXVsdE51bGwpXG4gICAgICB2YXIgZW5kID0gXy5nZXQocXVlcnkuZGF0YVtxdWVyeS5kYXRhLmxlbmd0aCAtIDFdLnZhbHVlLCBwYXRoLCBkZWZhdWx0TnVsbClcblxuICAgICAgXy5mb3JFYWNoKHF1ZXJ5LmRhdGEsIGZ1bmN0aW9uIChyZWNvcmQsIGkpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gcXVlcnkuZGF0YVtpIC0gMV0gfHwgcXVlcnkuZGF0YVswXVxuICAgICAgICBfLnNldChxdWVyeS5kYXRhW2ldLnZhbHVlLCBjaGFuZ2VQYXRoLCBfLmdldChyZWNvcmQudmFsdWUsIHBhdGgsIGRlZmF1bHROdWxsKSAtIChwcmV2aW91cyA/IF8uZ2V0KHByZXZpb3VzLnZhbHVlLCBwYXRoLCBkZWZhdWx0TnVsbCkgOiBkZWZhdWx0TnVsbCkpXG4gICAgICAgIF8uc2V0KHF1ZXJ5LmRhdGFbaV0udmFsdWUsIGZyb21TdGFydFBhdGgsIF8uZ2V0KHJlY29yZC52YWx1ZSwgcGF0aCwgZGVmYXVsdE51bGwpIC0gc3RhcnQpXG4gICAgICAgIF8uc2V0KHF1ZXJ5LmRhdGFbaV0udmFsdWUsIGZyb21FbmRQYXRoLCBfLmdldChyZWNvcmQudmFsdWUsIHBhdGgsIGRlZmF1bHROdWxsKSAtIGVuZClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTG9ja2VkKHBhcmVudCkge1xuICByZXR1cm4gcGFyZW50LmxvY2tlZCA/IF8uY2xvbmUocGFyZW50LmRhdGEpIDogcGFyZW50LmRhdGFcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuaXZlcnNlL3NyYy9wb3N0QWdncmVnYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA1MjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cblByb21pc2Uuc2VyaWFsID0gc2VyaWFsXG5cbnZhciBpc1Byb21pc2VMaWtlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIF8uaXNGdW5jdGlvbihvYmoudGhlbilcbn1cblxuZnVuY3Rpb24gc2VyaWFsKHRhc2tzKSB7XG4gIC8vIEZha2UgYSBcInByZXZpb3VzIHRhc2tcIiBmb3Igb3VyIGluaXRpYWwgaXRlcmF0aW9uXG4gIHZhciBwcmV2UHJvbWlzZVxuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKVxuICBfLmZvckVhY2godGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXkpIHtcbiAgICB2YXIgc3VjY2VzcyA9IHRhc2suc3VjY2VzcyB8fCB0YXNrXG4gICAgdmFyIGZhaWwgPSB0YXNrLmZhaWxcbiAgICB2YXIgbm90aWZ5ID0gdGFzay5ub3RpZnlcbiAgICB2YXIgbmV4dFByb21pc2VcblxuICAgIC8vIEZpcnN0IHRhc2tcbiAgICBpZiAoIXByZXZQcm9taXNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgIG5leHRQcm9taXNlID0gc3VjY2VzcygpXG4gICAgICBpZiAoIWlzUHJvbWlzZUxpa2UobmV4dFByb21pc2UpKSB7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnVGFzayAnICsga2V5ICsgJyBkaWQgbm90IHJldHVybiBhIHByb21pc2UuJ1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXYWl0IHVudGlsIHRoZSBwcmV2aW91cyBwcm9taXNlIGhhcyByZXNvbHZlZCBvciByZWplY3RlZCB0byBleGVjdXRlIHRoZSBuZXh0IHRhc2tcbiAgICAgIG5leHRQcm9taXNlID0gcHJldlByb21pc2UudGhlbihcbiAgICAgICAgLyogc3VjY2VzcyAqL1xuICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJldCA9IHN1Y2Nlc3MoZGF0YSlcbiAgICAgICAgICBpZiAoIWlzUHJvbWlzZUxpa2UocmV0KSkge1xuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdUYXNrICcgKyBrZXkgKyAnIGRpZCBub3QgcmV0dXJuIGEgcHJvbWlzZS4nXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH0sXG4gICAgICAgIC8qIGZhaWx1cmUgKi9cbiAgICAgICAgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmICghZmFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJldCA9IGZhaWwocmVhc29uKVxuICAgICAgICAgIGlmICghaXNQcm9taXNlTGlrZShyZXQpKSB7XG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ0ZhaWwgZm9yIHRhc2sgJyArIGtleSArICcgZGlkIG5vdCByZXR1cm4gYSBwcm9taXNlLidcbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfSxcbiAgICAgICAgbm90aWZ5KVxuICAgIH1cbiAgICBwcmV2UHJvbWlzZSA9IG5leHRQcm9taXNlXG4gIH0pXG5cbiAgcmV0dXJuIHByZXZQcm9taXNlIHx8IFByb21pc2Uud2hlbigpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvcS5zZXJpYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKVxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgdmFyIHJlZHVjdGlvZnkgPSByZXF1aXJlKCcuL3JlZHVjdGlvZnknKShzZXJ2aWNlKVxuICB2YXIgZmlsdGVycyA9IHJlcXVpcmUoJy4vZmlsdGVycycpKHNlcnZpY2UpXG4gIHZhciBwb3N0QWdncmVnYXRpb24gPSByZXF1aXJlKCcuL3Bvc3RBZ2dyZWdhdGlvbicpKHNlcnZpY2UpXG5cbiAgdmFyIHBvc3RBZ2dyZWdhdGlvbk1ldGhvZHMgPSBfLmtleXMocG9zdEFnZ3JlZ2F0aW9uKVxuXG4gIHJldHVybiBmdW5jdGlvbiBkb1F1ZXJ5KHF1ZXJ5T2JqKSB7XG4gICAgdmFyIHF1ZXJ5SGFzaCA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKVxuXG4gICAgLy8gQXR0ZW1wdCB0byByZXVzZSBhbiBleGFjdCBjb3B5IG9mIHRoaXMgcXVlcnkgdGhhdCBpcyBwcmVzZW50IGVsc2V3aGVyZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VydmljZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcnZpY2UuY29sdW1uc1tpXS5xdWVyaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChzZXJ2aWNlLmNvbHVtbnNbaV0ucXVlcmllc1tqXS5oYXNoID09PSBxdWVyeUhhc2gpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS50cnkoZnVuY3Rpb24gKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UuY29sdW1uc1tpXS5xdWVyaWVzW2pdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBxdWVyeSA9IHtcbiAgICAgIC8vIE9yaWdpbmFsIHF1ZXJ5IHBhc3NlZCBpbiB0byBxdWVyeSBtZXRob2RcbiAgICAgIG9yaWdpbmFsOiBxdWVyeU9iaixcbiAgICAgIGhhc2g6IHF1ZXJ5SGFzaFxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgcXVlcnlPYmpcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChxdWVyeS5vcmlnaW5hbCkpIHtcbiAgICAgIHF1ZXJ5Lm9yaWdpbmFsID0ge31cbiAgICB9XG4gICAgLy8gRGVmYXVsdCBzZWxlY3RcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChxdWVyeS5vcmlnaW5hbC5zZWxlY3QpKSB7XG4gICAgICBxdWVyeS5vcmlnaW5hbC5zZWxlY3QgPSB7XG4gICAgICAgICRjb3VudDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IHRvIGdyb3VwQWxsXG4gICAgcXVlcnkub3JpZ2luYWwuZ3JvdXBCeSA9IHF1ZXJ5Lm9yaWdpbmFsLmdyb3VwQnkgfHwgdHJ1ZVxuXG4gICAgLy8gQXR0YWNoIHRoZSBxdWVyeSBhcGkgdG8gdGhlIHF1ZXJ5IG9iamVjdFxuICAgIHF1ZXJ5ID0gbmV3UXVlcnlPYmoocXVlcnkpXG5cbiAgICByZXR1cm4gY3JlYXRlQ29sdW1uKHF1ZXJ5KVxuICAgICAgLnRoZW4obWFrZUNyb3NzZmlsdGVyR3JvdXApXG4gICAgICAudGhlbihidWlsZFJlcXVpcmVkQ29sdW1ucylcbiAgICAgIC50aGVuKHNldHVwRGF0YUxpc3RlbmVycylcbiAgICAgIC50aGVuKGFwcGx5UXVlcnkpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb2x1bW4ocXVlcnkpIHtcbiAgICAgIC8vIEVuc3VyZSBjb2x1bW4gaXMgY3JlYXRlZFxuICAgICAgcmV0dXJuIHNlcnZpY2UuY29sdW1uKHtcbiAgICAgICAga2V5OiBxdWVyeS5vcmlnaW5hbC5ncm91cEJ5LFxuICAgICAgICB0eXBlOiBfLmlzVW5kZWZpbmVkKHF1ZXJ5LnR5cGUpID8gbnVsbCA6IHF1ZXJ5LnR5cGUsXG4gICAgICAgIGFycmF5OiBCb29sZWFuKHF1ZXJ5LmFycmF5KVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBjb2x1bW4gdG8gdGhlIHF1ZXJ5XG4gICAgICAgIHZhciBjb2x1bW4gPSBzZXJ2aWNlLmNvbHVtbi5maW5kKHF1ZXJ5Lm9yaWdpbmFsLmdyb3VwQnkpXG4gICAgICAgIHF1ZXJ5LmNvbHVtbiA9IGNvbHVtblxuICAgICAgICBjb2x1bW4ucXVlcmllcy5wdXNoKHF1ZXJ5KVxuICAgICAgICBjb2x1bW4ucmVtb3ZlTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBxdWVyeS5jbGVhcigpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQ3Jvc3NmaWx0ZXJHcm91cChxdWVyeSkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBncm91cGluZyBvbiB0aGUgY29sdW1ucyBkaW1lbnNpb25cbiAgICAgIC8vIFVzaW5nIFByb21pc2UgUmVzb2x2ZSBhbGxvd3Mgc3VwcG9ydCBmb3IgY3Jvc3NmaWx0ZXIgYXN5bmNcbiAgICAgIC8vIFRPRE8gY2hlY2sgaWYgcXVlcnkgYWxyZWFkeSBleGlzdHMsIGFuZCB1c2UgdGhlIHNhbWUgYmFzZSBxdWVyeSAvLyBpZiBwb3NzaWJsZVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWVyeS5jb2x1bW4uZGltZW5zaW9uLmdyb3VwKCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgICAgcXVlcnkuZ3JvdXAgPSBnXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRSZXF1aXJlZENvbHVtbnMocXVlcnkpIHtcbiAgICAgIHZhciByZXF1aXJlZENvbHVtbnMgPSBmaWx0ZXJzLnNjYW5Gb3JEeW5hbWljRmlsdGVycyhxdWVyeS5vcmlnaW5hbClcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzY2FuIHRoZSBncm91cCBmb3IgYW55IGZpbHRlcnMgdGhhdCB3b3VsZCByZXF1aXJlXG4gICAgICAgIC8vIHRoZSBncm91cCB0byBiZSByZWJ1aWx0IHdoZW4gZGF0YSBpcyBhZGRlZCBvciByZW1vdmVkIGluIGFueSB3YXkuXG4gICAgICBpZiAocmVxdWlyZWRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAocmVxdWlyZWRDb2x1bW5zLCBmdW5jdGlvbiAoY29sdW1uS2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2UuY29sdW1uKHtcbiAgICAgICAgICAgIGtleTogY29sdW1uS2V5LFxuICAgICAgICAgICAgZHluYW1pY1JlZmVyZW5jZTogcXVlcnkuZ3JvdXBcbiAgICAgICAgICB9KVxuICAgICAgICB9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRhTGlzdGVuZXJzKHF1ZXJ5KSB7XG4gICAgICAvLyBIZXJlLCB3ZSBjcmVhdGUgYSBsaXN0ZW5lciB0byByZWNyZWF0ZSBhbmQgYXBwbHkgdGhlIHJlZHVjZXIgdG9cbiAgICAgIC8vIHRoZSBncm91cCBhbnl0aW1lIHVuZGVybHlpbmcgZGF0YSBjaGFuZ2VzXG4gICAgICB2YXIgc3RvcERhdGFMaXN0ZW4gPSBzZXJ2aWNlLm9uRGF0YUNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcHBseVF1ZXJ5KHF1ZXJ5KVxuICAgICAgfSlcbiAgICAgIHF1ZXJ5LnJlbW92ZUxpc3RlbmVycy5wdXNoKHN0b3BEYXRhTGlzdGVuKVxuXG4gICAgICAvLyBUaGlzIGlzIGEgc2ltaWxhciBsaXN0ZW5lciBmb3IgZmlsdGVyaW5nIHdoaWNoIHdpbGwgKGlmIG5lZWRlZClcbiAgICAgIC8vIHJ1biBhbnkgcG9zdCBhZ2dyZWdhdGlvbnMgb24gdGhlIGRhdGEgYWZ0ZXIgZWFjaCBmaWx0ZXIgYWN0aW9uXG4gICAgICB2YXIgc3RvcEZpbHRlckxpc3RlbiA9IHNlcnZpY2Uub25GaWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcG9zdEFnZ3JlZ2F0ZShxdWVyeSlcbiAgICAgIH0pXG4gICAgICBxdWVyeS5yZW1vdmVMaXN0ZW5lcnMucHVzaChzdG9wRmlsdGVyTGlzdGVuKVxuXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseVF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gYnVpbGRSZWR1Y2VyKHF1ZXJ5KVxuICAgICAgICAudGhlbihhcHBseVJlZHVjZXIpXG4gICAgICAgIC50aGVuKGF0dGFjaERhdGEpXG4gICAgICAgIC50aGVuKHBvc3RBZ2dyZWdhdGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRSZWR1Y2VyKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gcmVkdWN0aW9meShxdWVyeS5vcmlnaW5hbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlZHVjZXIpIHtcbiAgICAgICAgICBxdWVyeS5yZWR1Y2VyID0gcmVkdWNlclxuICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5UmVkdWNlcihxdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWVyeS5yZWR1Y2VyKHF1ZXJ5Lmdyb3VwKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGFjaERhdGEocXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocXVlcnkuZ3JvdXAuYWxsKCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcXVlcnkuZGF0YSA9IGRhdGFcbiAgICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3N0QWdncmVnYXRlKHF1ZXJ5KSB7XG4gICAgICBpZiAocXVlcnkucG9zdEFnZ3JlZ2F0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIElmIHRoZSBxdWVyeSBpcyB1c2VkIGJ5IDIrIHBvc3QgYWdncmVnYXRpb25zLCB3ZSBuZWVkIHRvIGxvY2tcbiAgICAgICAgLy8gaXQgYWdhaW5zdCBnZXR0aW5nIG11dGF0ZWQgYnkgdGhlIHBvc3QtYWdncmVnYXRpb25zXG4gICAgICAgIHF1ZXJ5LmxvY2tlZCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcChxdWVyeS5wb3N0QWdncmVnYXRpb25zLCBmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICByZXR1cm4gcG9zdCgpXG4gICAgICB9KSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1F1ZXJ5T2JqKHEsIHBhcmVudCkge1xuICAgICAgdmFyIGxvY2tlZCA9IGZhbHNlXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSBxXG4gICAgICAgIHEgPSB7fVxuICAgICAgICBsb2NrZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVndWxhciBxdWVyeSBwcm9wZXJ0aWVzXG4gICAgICBfLmFzc2lnbihxLCB7XG4gICAgICAgIC8vIFRoZSBVbml2ZXJzZSBmb3IgY29udGludW91cyBwcm9taXNlIGNoYWluaW5nXG4gICAgICAgIHVuaXZlcnNlOiBzZXJ2aWNlLFxuICAgICAgICAvLyBDcm9zc2ZpbHRlciBpbnN0YW5jZVxuICAgICAgICBjcm9zc2ZpbHRlcjogc2VydmljZS5jZixcblxuICAgICAgICAvLyBwYXJlbnQgSW5mb3JtYXRpb25cbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGNvbHVtbjogcGFyZW50LmNvbHVtbixcbiAgICAgICAgZGltZW5zaW9uOiBwYXJlbnQuZGltZW5zaW9uLFxuICAgICAgICBncm91cDogcGFyZW50Lmdyb3VwLFxuICAgICAgICByZWR1Y2VyOiBwYXJlbnQucmVkdWNlcixcbiAgICAgICAgb3JpZ2luYWw6IHBhcmVudC5vcmlnaW5hbCxcbiAgICAgICAgaGFzaDogcGFyZW50Lmhhc2gsXG5cbiAgICAgICAgLy8gSXQncyBvd24gcmVtb3ZlTGlzdGVuZXJzXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyczogW10sXG5cbiAgICAgICAgLy8gSXQncyBvd24gcG9zdEFnZ3JlZ2F0aW9uc1xuICAgICAgICBwb3N0QWdncmVnYXRpb25zOiBbXSxcblxuICAgICAgICAvLyBEYXRhIG1ldGhvZFxuICAgICAgICBsb2NrZWQ6IGxvY2tlZCxcbiAgICAgICAgbG9jazogbG9jayxcbiAgICAgICAgdW5sb2NrOiB1bmxvY2ssXG4gICAgICAgIC8vIERpc3Bvc2FsIG1ldGhvZFxuICAgICAgICBjbGVhcjogY2xlYXJRdWVyeSxcbiAgICAgIH0pXG5cbiAgICAgIF8uZm9yRWFjaChwb3N0QWdncmVnYXRpb25NZXRob2RzLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHFbbWV0aG9kXSA9IHBvc3RBZ2dyZWdhdGVNZXRob2RXcmFwKHBvc3RBZ2dyZWdhdGlvblttZXRob2RdKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHFcblxuICAgICAgZnVuY3Rpb24gbG9jayhzZXQpIHtcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHNldCkpIHtcbiAgICAgICAgICBxLmxvY2tlZCA9IEJvb2xlYW4oc2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHEubG9ja2VkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1bmxvY2soKSB7XG4gICAgICAgIHEubG9ja2VkID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xlYXJRdWVyeSgpIHtcbiAgICAgICAgXy5mb3JFYWNoKHEucmVtb3ZlTGlzdGVuZXJzLCBmdW5jdGlvbiAobCkge1xuICAgICAgICAgIGwoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS50cnkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBxLmdyb3VwLmRpc3Bvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcS5jb2x1bW4ucXVlcmllcy5zcGxpY2UocS5jb2x1bW4ucXVlcmllcy5pbmRleE9mKHEpLCAxKVxuICAgICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVjeWNsZSB0aGUgY29sdW1uIGlmIHRoZXJlIGFyZSBubyBxdWVyaWVzIGFjdGl2ZSBvbiBpdFxuICAgICAgICAgIGlmICghcS5jb2x1bW4ucXVlcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyKHEuY29sdW1uLmtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwb3N0QWdncmVnYXRlTWV0aG9kV3JhcChwb3N0TWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgdmFyIHN1YiA9IHt9XG4gICAgICAgICAgbmV3UXVlcnlPYmooc3ViLCBxKVxuICAgICAgICAgIGFyZ3MudW5zaGlmdChzdWIsIHEpXG5cbiAgICAgICAgICBxLnBvc3RBZ2dyZWdhdGlvbnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocG9zdE1ldGhvZC5hcHBseShudWxsLCBhcmdzKSlcbiAgICAgICAgICAgICAgLnRoZW4ocG9zdEFnZ3JlZ2F0ZUNoaWxkcmVuKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvc3RNZXRob2QuYXBwbHkobnVsbCwgYXJncykpXG4gICAgICAgICAgICAudGhlbihwb3N0QWdncmVnYXRlQ2hpbGRyZW4pXG5cbiAgICAgICAgICBmdW5jdGlvbiBwb3N0QWdncmVnYXRlQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zdEFnZ3JlZ2F0ZShzdWIpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvcXVlcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG4vLyB2YXIgXyA9IHJlcXVpcmUoJy4vbG9kYXNoJykgLy8gXyBpcyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG9ydGhhbmRMYWJlbHM6IHtcbiAgICAkY291bnQ6ICdjb3VudCcsXG4gICAgJHN1bTogJ3N1bScsXG4gICAgJGF2ZzogJ2F2ZycsXG4gICAgJG1pbjogJ21pbicsXG4gICAgJG1heDogJ21heCcsXG4gICAgJG1lZDogJ21lZCcsXG4gICAgJHN1bVNxOiAnc3VtU3EnLFxuICAgICRzdGQ6ICdzdGQnLFxuICB9LFxuICBhZ2dyZWdhdG9yczoge1xuICAgICRjb3VudDogJGNvdW50LFxuICAgICRzdW06ICRzdW0sXG4gICAgJGF2ZzogJGF2ZyxcbiAgICAkbWluOiAkbWluLFxuICAgICRtYXg6ICRtYXgsXG4gICAgJG1lZDogJG1lZCxcbiAgICAkc3VtU3E6ICRzdW1TcSxcbiAgICAkc3RkOiAkc3RkLFxuICAgICR2YWx1ZUxpc3Q6ICR2YWx1ZUxpc3QsXG4gICAgJGRhdGFMaXN0OiAkZGF0YUxpc3QsXG4gIH1cbn1cblxuLy8gQWdncmVnYXRvcnNcblxuZnVuY3Rpb24gJGNvdW50KHJlZHVjZXIvKiAsIHZhbHVlICovKSB7XG4gIHJldHVybiByZWR1Y2VyLmNvdW50KHRydWUpXG59XG5cbmZ1bmN0aW9uICRzdW0ocmVkdWNlciwgdmFsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZXIuc3VtKHZhbHVlKVxufVxuXG5mdW5jdGlvbiAkYXZnKHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLmF2Zyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJG1pbihyZWR1Y2VyLCB2YWx1ZSkge1xuICByZXR1cm4gcmVkdWNlci5taW4odmFsdWUpXG59XG5cbmZ1bmN0aW9uICRtYXgocmVkdWNlciwgdmFsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZXIubWF4KHZhbHVlKVxufVxuXG5mdW5jdGlvbiAkbWVkKHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLm1lZGlhbih2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJHN1bVNxKHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLnN1bU9mU3EodmFsdWUpXG59XG5cbmZ1bmN0aW9uICRzdGQocmVkdWNlciwgdmFsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZXIuc3RkKHZhbHVlKVxufVxuXG5mdW5jdGlvbiAkdmFsdWVMaXN0KHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLnZhbHVlTGlzdCh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJGRhdGFMaXN0KHJlZHVjZXIvKiAsIHZhbHVlICovKSB7XG4gIHJldHVybiByZWR1Y2VyLmRhdGFMaXN0KHRydWUpXG59XG5cbi8vIFRPRE8gaGlzdG9ncmFtc1xuLy8gVE9ETyBleGNlcHRpb25zXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvcmVkdWN0aW9BZ2dyZWdhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZWR1Y3RpbyA9IHJlcXVpcmUoJ3JlZHVjdGlvJylcblxudmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpXG52YXIgckFnZ3JlZ2F0b3JzID0gcmVxdWlyZSgnLi9yZWR1Y3Rpb0FnZ3JlZ2F0b3JzJylcbi8vIHZhciBleHByZXNzaW9ucyA9IHJlcXVpcmUoJy4vZXhwcmVzc2lvbnMnKSAgLy8gZXhwb3Jlc3Npb24gaXMgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFxudmFyIGFnZ3JlZ2F0aW9uID0gcmVxdWlyZSgnLi9hZ2dyZWdhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgdmFyIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMnKShzZXJ2aWNlKVxuXG4gIHJldHVybiBmdW5jdGlvbiByZWR1Y3Rpb2Z5KHF1ZXJ5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y3RpbygpXG4gICAgLy8gdmFyIGdyb3VwQnkgPSBxdWVyeS5ncm91cEJ5IC8vIGdyb3VwQnkgaXMgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFxuICAgIGFnZ3JlZ2F0ZU9yTmVzdChyZWR1Y2VyLCBxdWVyeS5zZWxlY3QpXG5cbiAgICBpZiAocXVlcnkuZmlsdGVyKSB7XG4gICAgICB2YXIgZmlsdGVyRnVuY3Rpb24gPSBmaWx0ZXJzLm1ha2VGdW5jdGlvbihxdWVyeS5maWx0ZXIpXG4gICAgICBpZiAoZmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgcmVkdWNlci5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWR1Y2VyKVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBmaW5kIHRoZSBmaXJzdCBsZXZlbCBvZiByZWR1Y3RpbyBtZXRob2RzIGluXG4gICAgLy8gZWFjaCBvYmplY3QgYW5kIGFkZHMgdGhhdCByZWR1Y3Rpb24gbWV0aG9kIHRvIHJlZHVjdGlvXG4gICAgZnVuY3Rpb24gYWdncmVnYXRlT3JOZXN0KHJlZHVjZXIsIHNlbGVjdHMpIHtcbiAgICAgIC8vIFNvcnQgc28gbmVzdGVkIHZhbHVlcyBhcmUgY2FsY3VsYXRlZCBsYXN0IGJ5IHJlZHVjdGlvJ3MgLnZhbHVlIG1ldGhvZFxuICAgICAgdmFyIHNvcnRlZFNlbGVjdEtleVZhbHVlID0gXy5zb3J0QnkoXG4gICAgICAgIF8ubWFwKHNlbGVjdHMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmdW5jdGlvbiAocykge1xuICAgICAgICAgIGlmIChyQWdncmVnYXRvcnMuYWdncmVnYXRvcnNbcy5rZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9KVxuXG4gICAgICAvLyBkaXZlIGludG8gZWFjaCBrZXkvdmFsdWVcbiAgICAgIHJldHVybiBfLmZvckVhY2goc29ydGVkU2VsZWN0S2V5VmFsdWUsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIC8vIEZvdW5kIGEgUmVkdWN0aW8gQWdncmVnYXRpb25cbiAgICAgICAgaWYgKHJBZ2dyZWdhdG9ycy5hZ2dyZWdhdG9yc1tzLmtleV0pIHtcbiAgICAgICAgICAvLyBCdWlsZCB0aGUgdmFsdWVBY2Nlc3NvckZ1bmN0aW9uXG4gICAgICAgICAgdmFyIGFjY2Vzc29yID0gYWdncmVnYXRpb24ubWFrZVZhbHVlQWNjZXNzb3Iocy52YWx1ZSlcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVkdWNlciB3aXRoIHRoZSBWYWx1ZUFjY2Vzc29yRnVuY3Rpb24gdG8gdGhlIHJlZHVjZXJcbiAgICAgICAgICByZWR1Y2VyID0gckFnZ3JlZ2F0b3JzLmFnZ3JlZ2F0b3JzW3Mua2V5XShyZWR1Y2VyLCBhY2Nlc3NvcilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvdW5kIGEgdG9wIGxldmVsIGtleSB2YWx1ZSB0aGF0IGlzIG5vdCBhbiBhZ2dyZWdhdGlvbiBvciBhXG4gICAgICAgIC8vIG5lc3RlZCBvYmplY3QuIFRoaXMgaXMgdW5hY2NlcHRhYmxlLlxuICAgICAgICBpZiAoIV8uaXNPYmplY3Qocy52YWx1ZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdOZXN0ZWQgc2VsZWN0cyBtdXN0IGJlIGFuIG9iamVjdCcsIHMua2V5KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXQncyBhbm90aGVyIG5lc3RlZCBvYmplY3QsIHNvIGp1c3QgcmVwZWF0IHRoaXMgcHJvY2VzcyBvbiBpdFxuICAgICAgICByZWR1Y2VyID0gYWdncmVnYXRlT3JOZXN0KHJlZHVjZXIudmFsdWUocy5rZXkpLCBzLnZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuaXZlcnNlL3NyYy9yZWR1Y3Rpb2Z5LmpzXG4gKiogbW9kdWxlIGlkID0gNTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxucmVxdWlyZSgnLi9xLnNlcmlhbCcpXG5cbi8vIHZhciBQcm9taXNlID0gcmVxdWlyZSgncScpICAvLyBQcm9taXNlIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXZlcnNlXG5cbmZ1bmN0aW9uIHVuaXZlcnNlKGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIHNlcnZpY2UgPSB7XG4gICAgb3B0aW9uczogXy5hc3NpZ24oe30sIG9wdGlvbnMpLFxuICAgIGNvbHVtbnM6IFtdLFxuICAgIGZpbHRlcnM6IHt9LFxuICAgIGRhdGFMaXN0ZW5lcnM6IFtdLFxuICAgIGZpbHRlckxpc3RlbmVyczogW10sXG4gIH1cblxuICB2YXIgY2YgPSByZXF1aXJlKCcuL2Nyb3NzZmlsdGVyJykoc2VydmljZSlcbiAgdmFyIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMnKShzZXJ2aWNlKVxuXG4gIGRhdGEgPSBjZi5nZW5lcmF0ZUNvbHVtbnMoZGF0YSlcblxuICByZXR1cm4gY2YuYnVpbGQoZGF0YSlcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc2VydmljZS5jZiA9IGRhdGFcbiAgICAgIHJldHVybiBfLmFzc2lnbihzZXJ2aWNlLCB7XG4gICAgICAgIGFkZDogY2YuYWRkLFxuICAgICAgICByZW1vdmU6IGNmLnJlbW92ZSxcbiAgICAgICAgY29sdW1uOiByZXF1aXJlKCcuL2NvbHVtbicpKHNlcnZpY2UpLFxuICAgICAgICBxdWVyeTogcmVxdWlyZSgnLi9xdWVyeScpKHNlcnZpY2UpLFxuICAgICAgICBmaWx0ZXI6IGZpbHRlcnMuZmlsdGVyLFxuICAgICAgICBmaWx0ZXJBbGw6IGZpbHRlcnMuZmlsdGVyQWxsLFxuICAgICAgICBhcHBseUZpbHRlcnM6IGZpbHRlcnMuYXBwbHlGaWx0ZXJzLFxuICAgICAgICBjbGVhcjogcmVxdWlyZSgnLi9jbGVhcicpKHNlcnZpY2UpLFxuICAgICAgICBkZXN0cm95OiByZXF1aXJlKCcuL2Rlc3Ryb3knKShzZXJ2aWNlKSxcbiAgICAgICAgb25EYXRhQ2hhbmdlOiBvbkRhdGFDaGFuZ2UsXG4gICAgICAgIG9uRmlsdGVyOiBvbkZpbHRlcixcbiAgICAgIH0pXG4gICAgfSlcblxuICBmdW5jdGlvbiBvbkRhdGFDaGFuZ2UoY2IpIHtcbiAgICBzZXJ2aWNlLmRhdGFMaXN0ZW5lcnMucHVzaChjYilcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2VydmljZS5kYXRhTGlzdGVuZXJzLnNwbGljZShzZXJ2aWNlLmRhdGFMaXN0ZW5lcnMuaW5kZXhPZihjYiksIDEpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25GaWx0ZXIoY2IpIHtcbiAgICBzZXJ2aWNlLmZpbHRlckxpc3RlbmVycy5wdXNoKGNiKVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXJ2aWNlLmZpbHRlckxpc3RlbmVycy5zcGxpY2Uoc2VydmljZS5maWx0ZXJMaXN0ZW5lcnMuaW5kZXhPZihjYiksIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvdW5pdmVyc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBaEJBO0FBaUJBO0FBQUE7QUFDQTtBQUNBOztBQXBEQTtBQUNBO0FBc0RBOzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDamdFQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeDNDQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0MUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcjZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9