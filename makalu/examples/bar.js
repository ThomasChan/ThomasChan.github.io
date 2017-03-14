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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2Jhci5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkIiwid2VicGFjazovLy9zcmMvdXRpbC9tYWthbHVGaWx0ZXIuanM/OTQxMiIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9sb2Rhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9xL3EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vYXRvb2wtYnVpbGQvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2FnZ3JlZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2luc2VydGlvbnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvcGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nyb3NzZmlsdGVyL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy9iaXNlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXBzZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL251bGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL3Blcm11dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zc2ZpbHRlcjIvc3JjL3F1aWNrc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nyb3NzZmlsdGVyMi9zcmMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3NyYy96ZXJvLmpzIiwid2VicGFjazovLy8uL34vY3Jvc3NmaWx0ZXIyL3BhY2thZ2UuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5yZXN1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvYWNjZXNzb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2FsaWFzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2FsaWFzUHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9hdmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvY2FwLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2NvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9kYXRhLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvZXhjZXB0aW9uLWNvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2V4Y2VwdGlvbi1zdW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL2hpc3RvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9uZXN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3Bvc3Rwcm9jZXNzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3Bvc3Rwcm9jZXNzb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3JlZHVjdGlvLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3NvcnRCeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHVjdGlvL3NyYy9zdGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvc3VtLW9mLXNxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1Y3Rpby9zcmMvc3VtLmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3ZhbHVlLWNvdW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdWN0aW8vc3JjL3ZhbHVlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvY29sdW1uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2Nyb3NzZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvZGltZW5zaW9uLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL3Bvc3RBZ2dyZWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9xLnNlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VuaXZlcnNlL3NyYy9yZWR1Y3Rpb0FnZ3JlZ2F0b3JzLmpzIiwid2VicGFjazovLy8uL34vdW5pdmVyc2Uvc3JjL3JlZHVjdGlvZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91bml2ZXJzZS9zcmMvdW5pdmVyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3Jvc3NmaWx0ZXIgZnJvbSAnY3Jvc3NmaWx0ZXInO1xuaW1wb3J0IHVuaXZlcnNlIGZyb20gJ3VuaXZlcnNlJztcbmltcG9ydCB7IEJhciB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IG1ha2FsdUZpbHRlciBmcm9tICcuLi9zcmMvdXRpbC9tYWthbHVGaWx0ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBfc291cmNlID0gc291cmNlO1xuICAgIGNvbnN0IHsgdGltZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGltZUZpbHRlcikge1xuICAgICAgX3NvdXJjZSA9IF9zb3VyY2UuZmlsdGVyKHYgPT4gdi50aW1lID49IHRpbWVGaWx0ZXJbMF0gJiYgdi50aW1lIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCBCYXJTb3VyY2UgPSBtYWthbHVGaWx0ZXIoX3NvdXJjZSxcbiAgICAgIFt7IG5hbWU6ICdtZXRyaWMnIH1dLFxuICAgICAgWyd2YWx1ZScsICdhdmFsdWUnLCAnYnZhbHVlJ10sXG4gICAgICBbJ3N1bScsICdzdW0nLCAnc3VtJ10sXG4gICAgKTtcblxuICAgIHJldHVybiA8QmFyXG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGFuaW1hdGlvbj17ZmFsc2V9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17QmFyU291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgIHlBeGlzPXtbYHZhbHVlYCwgYGF2YWx1ZWAsIGBidmFsdWVgXX1cbiAgICAgIHRpbWViYXJTaG93PXt0cnVlfVxuICAgICAgdGltZWJhckRvbWFpbj17ZGF0ZXN9XG4gICAgICB0aW1lYmFyVGlja0Zvcm1hdD17diA9PiBtb21lbnQodikuZm9ybWF0KCdZWVlZJyl9XG4gICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfVxuICAgICAgb25UaW1lYmFyQ2hhbmdlPXtlID0+IHRoaXMub25UaW1lYmFyQ2hhbmdlKGUpfVxuICAgICAgb25UaW1lYmFyQ2hhbmdlPXtlID0+IHRoaXMub25UaW1lYmFyQ2hhbmdlKGUpfSAvPlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2Jhci5tZFxuICoqLyIsIlxuY29uc3QgZmlyc3RfeWVhcl9kYXRhID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgYW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgeWV0YW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgZGF0ZXMgPSAoKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOTcwOyBpIDwgMjAxNzsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goK25ldyBEYXRlKFN0cmluZyhpKSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KSgpO1xuY29uc3QgbWFrZUZha2VEYXRhID0gZmFrZSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZGF0ZXMubWFwKGQgPT4ge1xuICAgIGxldCBkZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmFrZSkpO1xuICAgIGRkID0gZGQubWFwKGRkZCA9PiB7XG4gICAgICByZXR1cm4gZGRkLm1hcChkZGRkID0+IHtcbiAgICAgICAgZGRkZCA9IGRkZGQgKiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBkZGRkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGF0YS5wdXNoKGRkKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRhdGEgPSBtYWtlRmFrZURhdGEoZmlyc3RfeWVhcl9kYXRhKTtcbmNvbnN0IGFkYXRhID0gbWFrZUZha2VEYXRhKGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBzaXplZGF0YSA9IG1ha2VGYWtlRGF0YSh5ZXRhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3QgZGltZW5zaW9ucyA9IFsn5YyX5LqsJywgJ+S4iua1tycsICflub/lt54nLCAn5rex5ZyzJ107XG5jb25zdCBtZXRyaWNzID0gWyfln47luILng63luqYnLCAn6KGjJywgJ+mjnycsICfkvY8nLCAn6Jaq6LWEJywgJ+ihjCcsICfmsJTlgJknLCAn5Yy755aXJywgJ+aVmeiCsiddO1xubGV0IHNvdXJjZSA9IFtdO1xuZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRlcy5sZW5ndGg7IHkrKykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1ldHJpY3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgY2l0eTogZGltZW5zaW9uc1tpXSxcbiAgICAgICAgbWV0cmljOiBtZXRyaWNzW3hdLFxuICAgICAgICB2YWx1ZTogZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYXZhbHVlOiBhZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYnZhbHVlOiBzaXplZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgdGltZTogZGF0ZXNbeV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2UsXG4gIG1ldHJpY3MsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGVzLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2RhdGEuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBtYWthbHVGaWx0ZXIgPSAoc2VyaWVzLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBhZ2dyZWdhdGVzKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgZGltZW5zaW9uVmFsdWVzID0gW107XG4gIGNvbnN0IHNlcmllc0xlbmd0aCA9IHNlcmllcy5sZW5ndGg7XG4gIGNvbnN0IG1ldHJpY3NMZW5ndGggPSBtZXRyaWNzLmxlbmd0aDtcbiAgY29uc3QgZGltZW5zaW9uc0xlbmd0aCA9IGRpbWVuc2lvbnMubGVuZ3RoO1xuICBsZXQgb2JqZWN0TGVuZ3RoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXNMZW5ndGg7IGkrKykge1xuICAgIGxldCBkaW1lbnNpb25WYWx1ZSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGltZW5zaW9uc0xlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoZGltZW5zaW9uc1t4XS5mb3JtYXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkaW1lbnNpb25zW3hdLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRpbWVuc2lvblZhbHVlLnB1c2goZGltZW5zaW9uc1t4XS5mb3JtYXQoc2VyaWVzW2ldW2RpbWVuc2lvbnNbeF0ubmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGltZW5zaW9uVmFsdWUucHVzaChzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXSk7XG4gICAgfVxuICAgIGNvbnN0IGRpbWVuc2lvbkNvbmNhdGVkVmFsdWUgPSBkaW1lbnNpb25WYWx1ZS5qb2luKCcqJyk7XG4gICAgLy8gZmlyc3Qgb2YgYWxsIGdyb3VwIGRpbWVuc2lvblxuICAgIGlmICghb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdKSB7XG4gICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV0gPSB7fTtcbiAgICAgIGRpbWVuc2lvblZhbHVlcy5wdXNoKGRpbWVuc2lvbkNvbmNhdGVkVmFsdWUpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkaW1lbnNpb25zTGVuZ3RoOyB4KyspIHtcbiAgICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW2RpbWVuc2lvbnNbeF0ubmFtZV0gPSBzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXTsgLy8gZGltZW5zaW9uVmFsdWVbeF07XG4gICAgICB9XG4gICAgICBvYmplY3RMZW5ndGggKz0gMTtcbiAgICB9XG4gICAgLy8gaW5zZXJ0IG1ldHJpYydzIHZhbHVlIGludG8ga2V5LXZhbHVlIGFycmF5XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZXRyaWNzTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICghb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dKSB7XG4gICAgICAgIG9iamVjdFtkaW1lbnNpb25Db25jYXRlZFZhbHVlXVttZXRyaWNzW2pdXSA9IFtdO1xuICAgICAgfVxuICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dLnB1c2goc2VyaWVzW2ldW21ldHJpY3Nbal1dKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqZWN0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGltZW5zaW9uS2V5ID0gZGltZW5zaW9uVmFsdWVzW2luZGV4XTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1ldHJpY3NMZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgbWV0cmljS2V5ID0gbWV0cmljc1tqXTtcbiAgICAgIHN3aXRjaCAoYWdncmVnYXRlc1tqXSkge1xuICAgICAgICBjYXNlICdzdW0nOlxuICAgICAgICBjYXNlICdhdmcnOlxuICAgICAgICAgIGNvbnN0IHN1bSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ucmVkdWNlKCh0b3RhbCwgbmV4dCkgPT4gdG90YWwgKyBuZXh0LCAwKTtcbiAgICAgICAgICBpZiAoYWdncmVnYXRlc1tqXSA9PT0gJ3N1bScpIHtcbiAgICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBzdW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBzdW0gLyBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IE1hdGgubWF4KC4uLm9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBNYXRoLm1pbiguLi5vYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldWzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5wb3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JvdXAgYnknOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBfLnVuaXFCeShvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb3VudCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChvYmplY3RbZGltZW5zaW9uS2V5XSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2FsdUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy91dGlsL21ha2FsdUZpbHRlci5qc1xuICoqLyIsIi8qIGVzbGludCBuby1wcm90b3R5cGUtYnVpbHRpbnM6IDAgKi9cbid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXNzaWduOiBhc3NpZ24sXG4gIGZpbmQ6IGZpbmQsXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgZ2V0OiBnZXQsXG4gIHNldDogc2V0LFxuICBtYXA6IG1hcCxcbiAga2V5czoga2V5cyxcbiAgc29ydEJ5OiBzb3J0QnksXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgcGljazogcGljayxcbiAgeG9yOiB4b3IsXG4gIGNsb25lOiBjbG9uZSxcbiAgaXNFcXVhbDogaXNFcXVhbCxcbiAgcmVwbGFjZUFycmF5OiByZXBsYWNlQXJyYXksXG4gIHVuaXE6IHVuaXEsXG4gIGZsYXR0ZW46IGZsYXR0ZW4sXG4gIHNvcnQ6IHNvcnQsXG4gIHZhbHVlczogdmFsdWVzLFxuICByZWN1cnNlT2JqZWN0OiByZWN1cnNlT2JqZWN0LFxufVxuXG5mdW5jdGlvbiBhc3NpZ24ob3V0KSB7XG4gIG91dCA9IG91dCB8fCB7fVxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghYXJndW1lbnRzW2ldKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgb3V0W2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGZpbmQoYSwgYikge1xuICByZXR1cm4gYS5maW5kKGIpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZShhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAobywgaSkge1xuICAgIHZhciByID0gYihvKVxuICAgIGlmIChyKSB7XG4gICAgICBhLnNwbGljZShpLCAxKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdChkKSB7XG4gIHJldHVybiB0eXBlb2YgZCA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoZClcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKGQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkID09PSAnYm9vbGVhbidcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoZCkge1xuICByZXR1cm4gdHlwZW9mIGQgPT09ICdzdHJpbmcnXG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGdldChhLCBiKSB7XG4gIGlmIChpc0FycmF5KGIpKSB7XG4gICAgYiA9IGIuam9pbignLicpXG4gIH1cbiAgcmV0dXJuIGJcbiAgICAucmVwbGFjZSgnWycsICcuJykucmVwbGFjZSgnXScsICcnKVxuICAgIC5zcGxpdCgnLicpXG4gICAgLnJlZHVjZShcbiAgICAgIGZ1bmN0aW9uIChvYmosIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBvYmpbcHJvcGVydHldXG4gICAgICB9LCBhXG4gICAgKVxufVxuXG5mdW5jdGlvbiBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgcHJvcCA9IHByb3BcbiAgICAgIC5yZXBsYWNlKCdbJywgJy4nKS5yZXBsYWNlKCddJywgJycpXG4gICAgICAuc3BsaXQoJy4nKVxuICB9XG4gIGlmIChwcm9wLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgZSA9IHByb3Auc2hpZnQoKVxuICAgIGFzc2lnbihvYmpbZV0gPVxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtlXSkgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gb2JqW2VdIDoge30sXG4gICAgICBwcm9wLFxuICAgICAgdmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgb2JqW3Byb3BbMF1dID0gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXAoYSwgYikge1xuICB2YXIgbVxuICB2YXIga2V5XG4gIGlmIChpc0Z1bmN0aW9uKGIpKSB7XG4gICAgaWYgKGlzT2JqZWN0KGEpKSB7XG4gICAgICBtID0gW11cbiAgICAgIGZvciAoa2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIG0ucHVzaChiKGFba2V5XSwga2V5LCBhKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1cbiAgICB9XG4gICAgcmV0dXJuIGEubWFwKGIpXG4gIH1cbiAgaWYgKGlzT2JqZWN0KGEpKSB7XG4gICAgbSA9IFtdXG4gICAgZm9yIChrZXkgaW4gYSkge1xuICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBtLnB1c2goYVtrZXldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbVxuICB9XG4gIHJldHVybiBhLm1hcChmdW5jdGlvbiAoYWEpIHtcbiAgICByZXR1cm4gYWFbYl1cbiAgfSlcbn1cblxuZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcbn1cblxuZnVuY3Rpb24gc29ydEJ5KGEsIGIpIHtcbiAgaWYgKGlzRnVuY3Rpb24oYikpIHtcbiAgICByZXR1cm4gYS5zb3J0KGZ1bmN0aW9uIChhYSwgYmIpIHtcbiAgICAgIGlmIChiKGFhKSA+IGIoYmIpKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9XG4gICAgICBpZiAoYihhYSkgPCBiKGJiKSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMFxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaChhLCBiKSB7XG4gIGlmIChpc09iamVjdChhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGIoYVtrZXldLCBrZXksIGEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGlmIChpc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIGEuZm9yRWFjaChiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJ1xufVxuXG5mdW5jdGlvbiBwaWNrKGEsIGIpIHtcbiAgdmFyIGMgPSB7fVxuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIChiYikge1xuICAgIGlmICh0eXBlb2YgYVtiYl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjW2JiXSA9IGFbYmJdXG4gICAgfVxuICB9KVxuICByZXR1cm4gY1xufVxuXG5mdW5jdGlvbiB4b3IoYSwgYikge1xuICB2YXIgdW5pcXVlID0gW11cbiAgZm9yRWFjaChhLCBmdW5jdGlvbiAoYWEpIHtcbiAgICBpZiAoYi5pbmRleE9mKGFhKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB1bmlxdWUucHVzaChhYSlcbiAgICB9XG4gIH0pXG4gIGZvckVhY2goYiwgZnVuY3Rpb24gKGJiKSB7XG4gICAgaWYgKGEuaW5kZXhPZihiYikgPT09IC0xKSB7XG4gICAgICByZXR1cm4gdW5pcXVlLnB1c2goYmIpXG4gICAgfVxuICB9KVxuICByZXR1cm4gdW5pcXVlXG59XG5cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSwgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9KSlcbn1cblxuZnVuY3Rpb24gaXNFcXVhbCh4LCB5KSB7XG4gIGlmICgodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpICYmICh0eXBlb2YgeSA9PT0gJ29iamVjdCcgJiYgeSAhPT0gbnVsbCkpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoeCkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZvciAodmFyIHByb3AgaW4geCkge1xuICAgICAgaWYgKHkuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKHhbcHJvcF0sIHlbcHJvcF0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAoeCAhPT0geSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBcnJheShhLCBiKSB7XG4gIHZhciBhbCA9IGEubGVuZ3RoXG4gIHZhciBibCA9IGIubGVuZ3RoXG4gIGlmIChhbCA+IGJsKSB7XG4gICAgYS5zcGxpY2UoYmwsIGFsIC0gYmwpXG4gIH0gZWxzZSBpZiAoYWwgPCBibCkge1xuICAgIGEucHVzaC5hcHBseShhLCBuZXcgQXJyYXkoYmwgLSBhbCkpXG4gIH1cbiAgZm9yRWFjaChhLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICBhW2tleV0gPSBiW2tleV1cbiAgfSlcbiAgcmV0dXJuIGFcbn1cblxuZnVuY3Rpb24gdW5pcShhKSB7XG4gIHZhciBzZWVuID0gbmV3IFNldCgpXG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBhbGxvdyA9IGZhbHNlXG4gICAgaWYgKCFzZWVuLmhhcyhpdGVtKSkge1xuICAgICAgc2Vlbi5hZGQoaXRlbSlcbiAgICAgIGFsbG93ID0gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gYWxsb3dcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhYSkge1xuICB2YXIgZmxhdHRlbmVkID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhYS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjdXJyZW50ID0gYWFbaV1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1cnJlbnQubGVuZ3RoOyArK2opIHtcbiAgICAgIGZsYXR0ZW5lZC5wdXNoKGN1cnJlbnRbal0pXG4gICAgfVxuICB9XG4gIHJldHVybiBmbGF0dGVuZWRcbn1cblxuZnVuY3Rpb24gc29ydChhcnIpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG1wID0gYXJyW2ldXG4gICAgdmFyIGogPSBpXG4gICAgd2hpbGUgKGFycltqIC0gMV0gPiB0bXApIHtcbiAgICAgIGFycltqXSA9IGFycltqIC0gMV07XG4gICAgICAtLWpcbiAgICB9XG4gICAgYXJyW2pdID0gdG1wXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHZhbHVlcyhhKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlcy5wdXNoKGFba2V5XSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlc1xufVxuXG5mdW5jdGlvbiByZWN1cnNlT2JqZWN0KG9iaiwgY2IpIHtcbiAgX3JlY3Vyc2VPYmplY3Qob2JqLCBbXSlcbiAgcmV0dXJuIG9ialxuICBmdW5jdGlvbiBfcmVjdXJzZU9iamVjdChvYmosIHBhdGgpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iaikgeyAvLyAgZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgIHZhciBuZXdQYXRoID0gY2xvbmUocGF0aClcbiAgICAgIG5ld1BhdGgucHVzaChrKVxuICAgICAgaWYgKHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnICYmIG9ialtrXSAhPT0gbnVsbCkge1xuICAgICAgICBfcmVjdXJzZU9iamVjdChvYmpba10sIG5ld1BhdGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgY2Iob2JqW2tdLCBrLCBuZXdQYXRoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2xvZGFzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyB2aW06dHM9NDpzdHM9NDpzdz00OlxuLyohXG4gKlxuICogQ29weXJpZ2h0IDIwMDktMjAxMiBLcmlzIEtvd2FsIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUXG4gKiBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL3Jhdy9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIFdpdGggcGFydHMgYnkgVHlsZXIgQ2xvc2VcbiAqIENvcHlyaWdodCAyMDA3LTIwMDkgVHlsZXIgQ2xvc2UgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgWCBsaWNlbnNlIGZvdW5kXG4gKiBhdCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLmh0bWxcbiAqIEZvcmtlZCBhdCByZWZfc2VuZC5qcyB2ZXJzaW9uOiAyMDA5LTA1LTExXG4gKlxuICogV2l0aCBwYXJ0cyBieSBNYXJrIE1pbGxlclxuICogQ29weXJpZ2h0IChDKSAyMDExIEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGhpcyBmaWxlIHdpbGwgZnVuY3Rpb24gcHJvcGVybHkgYXMgYSA8c2NyaXB0PiB0YWcsIG9yIGEgbW9kdWxlXG4gICAgLy8gdXNpbmcgQ29tbW9uSlMgYW5kIE5vZGVKUyBvciBSZXF1aXJlSlMgbW9kdWxlIGZvcm1hdHMuICBJblxuICAgIC8vIENvbW1vbi9Ob2RlL1JlcXVpcmVKUywgdGhlIG1vZHVsZSBleHBvcnRzIHRoZSBRIEFQSSBhbmQgd2hlblxuICAgIC8vIGV4ZWN1dGVkIGFzIGEgc2ltcGxlIDxzY3JpcHQ+LCBpdCBjcmVhdGVzIGEgUSBnbG9iYWwgaW5zdGVhZC5cblxuICAgIC8vIE1vbnRhZ2UgUmVxdWlyZVxuICAgIGlmICh0eXBlb2YgYm9vdHN0cmFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYm9vdHN0cmFwKFwicHJvbWlzZVwiLCBkZWZpbml0aW9uKTtcblxuICAgIC8vIENvbW1vbkpTXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuXG4gICAgLy8gUmVxdWlyZUpTXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZGVmaW5pdGlvbik7XG5cbiAgICAvLyBTRVMgKFNlY3VyZSBFY21hU2NyaXB0KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoIXNlcy5vaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXMubWFrZVEgPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG5cbiAgICAvLyA8c2NyaXB0PlxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBQcmVmZXIgd2luZG93IG92ZXIgc2VsZiBmb3IgYWRkLW9uIHNjcmlwdHMuIFVzZSBzZWxmIGZvclxuICAgICAgICAvLyBub24td2luZG93ZWQgY29udGV4dHMuXG4gICAgICAgIHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogc2VsZjtcblxuICAgICAgICAvLyBHZXQgdGhlIGB3aW5kb3dgIG9iamVjdCwgc2F2ZSB0aGUgcHJldmlvdXMgUSBnbG9iYWxcbiAgICAgICAgLy8gYW5kIGluaXRpYWxpemUgUSBhcyBhIGdsb2JhbC5cbiAgICAgICAgdmFyIHByZXZpb3VzUSA9IGdsb2JhbC5RO1xuICAgICAgICBnbG9iYWwuUSA9IGRlZmluaXRpb24oKTtcblxuICAgICAgICAvLyBBZGQgYSBub0NvbmZsaWN0IGZ1bmN0aW9uIHNvIFEgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgICAgLy8gZ2xvYmFsIG5hbWVzcGFjZS5cbiAgICAgICAgZ2xvYmFsLlEubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdsb2JhbC5RID0gcHJldmlvdXNRO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IHdhcyBub3QgYW50aWNpcGF0ZWQgYnkgUS4gUGxlYXNlIGZpbGUgYSBidWcuXCIpO1xuICAgIH1cblxufSkoZnVuY3Rpb24gKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBoYXNTdGFja3MgPSBmYWxzZTtcbnRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG59IGNhdGNoIChlKSB7XG4gICAgaGFzU3RhY2tzID0gISFlLnN0YWNrO1xufVxuXG4vLyBBbGwgY29kZSBhZnRlciB0aGlzIHBvaW50IHdpbGwgYmUgZmlsdGVyZWQgZnJvbSBzdGFjayB0cmFjZXMgcmVwb3J0ZWRcbi8vIGJ5IFEuXG52YXIgcVN0YXJ0aW5nTGluZSA9IGNhcHR1cmVMaW5lKCk7XG52YXIgcUZpbGVOYW1lO1xuXG4vLyBzaGltc1xuXG4vLyB1c2VkIGZvciBmYWxsYmFjayBpbiBcImFsbFJlc29sdmVkXCJcbnZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBwb3NzaWJsZSBtZWFucyB0byBleGVjdXRlIGEgdGFzayBpbiBhIGZ1dHVyZSB0dXJuXG4vLyBvZiB0aGUgZXZlbnQgbG9vcC5cbnZhciBuZXh0VGljayA9KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBsaW5rZWQgbGlzdCBvZiB0YXNrcyAoc2luZ2xlLCB3aXRoIGhlYWQgbm9kZSlcbiAgICB2YXIgaGVhZCA9IHt0YXNrOiB2b2lkIDAsIG5leHQ6IG51bGx9O1xuICAgIHZhciB0YWlsID0gaGVhZDtcbiAgICB2YXIgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICB2YXIgcmVxdWVzdFRpY2sgPSB2b2lkIDA7XG4gICAgdmFyIGlzTm9kZUpTID0gZmFsc2U7XG4gICAgLy8gcXVldWUgZm9yIGxhdGUgdGFza3MsIHVzZWQgYnkgdW5oYW5kbGVkIHJlamVjdGlvbiB0cmFja2luZ1xuICAgIHZhciBsYXRlclF1ZXVlID0gW107XG5cbiAgICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgICAgLyoganNoaW50IGxvb3BmdW5jOiB0cnVlICovXG4gICAgICAgIHZhciB0YXNrLCBkb21haW47XG5cbiAgICAgICAgd2hpbGUgKGhlYWQubmV4dCkge1xuICAgICAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgICAgICAgIHRhc2sgPSBoZWFkLnRhc2s7XG4gICAgICAgICAgICBoZWFkLnRhc2sgPSB2b2lkIDA7XG4gICAgICAgICAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcblxuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICAgIGhlYWQuZG9tYWluID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVuU2luZ2xlKHRhc2ssIGRvbWFpbik7XG5cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAobGF0ZXJRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhc2sgPSBsYXRlclF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgcnVuU2luZ2xlKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGZsdXNoaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJ1bnMgYSBzaW5nbGUgZnVuY3Rpb24gaW4gdGhlIGFzeW5jIHF1ZXVlXG4gICAgZnVuY3Rpb24gcnVuU2luZ2xlKHRhc2ssIGRvbWFpbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFzaygpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGVKUykge1xuICAgICAgICAgICAgICAgIC8vIEluIG5vZGUsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgYXJlIGNvbnNpZGVyZWQgZmF0YWwgZXJyb3JzLlxuICAgICAgICAgICAgICAgIC8vIFJlLXRocm93IHRoZW0gc3luY2hyb25vdXNseSB0byBpbnRlcnJ1cHQgZmx1c2hpbmchXG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29udGludWF0aW9uIGlmIHRoZSB1bmNhdWdodCBleGNlcHRpb24gaXMgc3VwcHJlc3NlZFxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbmluZyBcInVuY2F1Z2h0RXhjZXB0aW9uXCIgZXZlbnRzIChhcyBkb21haW5zIGRvZXMpLlxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGluIG5leHQgZXZlbnQgdG8gYXZvaWQgdGljayByZWN1cnNpb24uXG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IGU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gYnJvd3NlcnMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC5cbiAgICAgICAgICAgICAgICAvLyBSZS10aHJvdyB0aGVtIGFzeW5jaHJvbm91c2x5IHRvIGF2b2lkIHNsb3ctZG93bnMuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFRpY2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICB0YWlsID0gdGFpbC5uZXh0ID0ge1xuICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgIGRvbWFpbjogaXNOb2RlSlMgJiYgcHJvY2Vzcy5kb21haW4sXG4gICAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdFRpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgcHJvY2Vzcy50b1N0cmluZygpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIiAmJiBwcm9jZXNzLm5leHRUaWNrKSB7XG4gICAgICAgIC8vIEVuc3VyZSBRIGlzIGluIGEgcmVhbCBOb2RlIGVudmlyb25tZW50LCB3aXRoIGEgYHByb2Nlc3MubmV4dFRpY2tgLlxuICAgICAgICAvLyBUbyBzZWUgdGhyb3VnaCBmYWtlIE5vZGUgZW52aXJvbm1lbnRzOlxuICAgICAgICAvLyAqIE1vY2hhIHRlc3QgcnVubmVyIC0gZXhwb3NlcyBhIGBwcm9jZXNzYCBnbG9iYWwgd2l0aG91dCBhIGBuZXh0VGlja2BcbiAgICAgICAgLy8gKiBCcm93c2VyaWZ5IC0gZXhwb3NlcyBhIGBwcm9jZXNzLm5leFRpY2tgIGZ1bmN0aW9uIHRoYXQgdXNlc1xuICAgICAgICAvLyAgIGBzZXRUaW1lb3V0YC4gSW4gdGhpcyBjYXNlIGBzZXRJbW1lZGlhdGVgIGlzIHByZWZlcnJlZCBiZWNhdXNlXG4gICAgICAgIC8vICAgIGl0IGlzIGZhc3Rlci4gQnJvd3NlcmlmeSdzIGBwcm9jZXNzLnRvU3RyaW5nKClgIHlpZWxkc1xuICAgICAgICAvLyAgIFwiW29iamVjdCBPYmplY3RdXCIsIHdoaWxlIGluIGEgcmVhbCBOb2RlIGVudmlyb25tZW50XG4gICAgICAgIC8vICAgYHByb2Nlc3MubmV4dFRpY2soKWAgeWllbGRzIFwiW29iamVjdCBwcm9jZXNzXVwiLlxuICAgICAgICBpc05vZGVKUyA9IHRydWU7XG5cbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIEluIElFMTAsIE5vZGUuanMgMC45Kywgb3IgaHR0cHM6Ly9naXRodWIuY29tL05vYmxlSlMvc2V0SW1tZWRpYXRlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0VGljayA9IHNldEltbWVkaWF0ZS5iaW5kKHdpbmRvdywgZmx1c2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKGZsdXNoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2Vyc1xuICAgICAgICAvLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICAvLyBBdCBsZWFzdCBTYWZhcmkgVmVyc2lvbiA2LjAuNSAoODUzNi4zMC4xKSBpbnRlcm1pdHRlbnRseSBjYW5ub3QgY3JlYXRlXG4gICAgICAgIC8vIHdvcmtpbmcgbWVzc2FnZSBwb3J0cyB0aGUgZmlyc3QgdGltZSBhIHBhZ2UgbG9hZHMuXG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdFRpY2sgPSByZXF1ZXN0UG9ydFRpY2s7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3RQb3J0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9wZXJhIHJlcXVpcmVzIHVzIHRvIHByb3ZpZGUgYSBtZXNzYWdlIHBheWxvYWQsIHJlZ2FyZGxlc3Mgb2ZcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgd2UgdXNlIGl0LlxuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoLCAwKTtcbiAgICAgICAgICAgIHJlcXVlc3RQb3J0VGljaygpO1xuICAgICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXJzXG4gICAgICAgIHJlcXVlc3RUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmbHVzaCwgMCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJ1bnMgYSB0YXNrIGFmdGVyIGFsbCBvdGhlciB0YXNrcyBoYXZlIGJlZW4gcnVuXG4gICAgLy8gdGhpcyBpcyB1c2VmdWwgZm9yIHVuaGFuZGxlZCByZWplY3Rpb24gdHJhY2tpbmcgdGhhdCBuZWVkcyB0byBoYXBwZW5cbiAgICAvLyBhZnRlciBhbGwgYHRoZW5gZCB0YXNrcyBoYXZlIGJlZW4gcnVuLlxuICAgIG5leHRUaWNrLnJ1bkFmdGVyID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgbGF0ZXJRdWV1ZS5wdXNoKHRhc2spO1xuICAgICAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV4dFRpY2s7XG59KSgpO1xuXG4vLyBBdHRlbXB0IHRvIG1ha2UgZ2VuZXJpY3Mgc2FmZSBpbiB0aGUgZmFjZSBvZiBkb3duc3RyZWFtXG4vLyBtb2RpZmljYXRpb25zLlxuLy8gVGhlcmUgaXMgbm8gc2l0dWF0aW9uIHdoZXJlIHRoaXMgaXMgbmVjZXNzYXJ5LlxuLy8gSWYgeW91IG5lZWQgYSBzZWN1cml0eSBndWFyYW50ZWUsIHRoZXNlIHByaW1vcmRpYWxzIG5lZWQgdG8gYmVcbi8vIGRlZXBseSBmcm96ZW4gYW55d2F5LCBhbmQgaWYgeW91IGRvbuKAmXQgbmVlZCBhIHNlY3VyaXR5IGd1YXJhbnRlZSxcbi8vIHRoaXMgaXMganVzdCBwbGFpbiBwYXJhbm9pZC5cbi8vIEhvd2V2ZXIsIHRoaXMgKiptaWdodCoqIGhhdmUgdGhlIG5pY2Ugc2lkZS1lZmZlY3Qgb2YgcmVkdWNpbmcgdGhlIHNpemUgb2Zcbi8vIHRoZSBtaW5pZmllZCBjb2RlIGJ5IHJlZHVjaW5nIHguY2FsbCgpIHRvIG1lcmVseSB4KClcbi8vIFNlZSBNYXJrIE1pbGxlcuKAmXMgZXhwbGFuYXRpb24gb2Ygd2hhdCB0aGlzIGRvZXMuXG4vLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1jb252ZW50aW9uczpzYWZlX21ldGFfcHJvZ3JhbW1pbmdcbnZhciBjYWxsID0gRnVuY3Rpb24uY2FsbDtcbmZ1bmN0aW9uIHVuY3VycnlUaGlzKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbC5hcHBseShmLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG4vLyBUaGlzIGlzIGVxdWl2YWxlbnQsIGJ1dCBzbG93ZXI6XG4vLyB1bmN1cnJ5VGhpcyA9IEZ1bmN0aW9uX2JpbmQuYmluZChGdW5jdGlvbl9iaW5kLmNhbGwpO1xuLy8gaHR0cDovL2pzcGVyZi5jb20vdW5jdXJyeXRoaXNcblxudmFyIGFycmF5X3NsaWNlID0gdW5jdXJyeVRoaXMoQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcblxudmFyIGFycmF5X3JlZHVjZSA9IHVuY3VycnlUaGlzKFxuICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgfHwgZnVuY3Rpb24gKGNhbGxiYWNrLCBiYXNpcykge1xuICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIC8vIGNvbmNlcm5pbmcgdGhlIGluaXRpYWwgdmFsdWUsIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHNlZWsgdG8gdGhlIGZpcnN0IHZhbHVlIGluIHRoZSBhcnJheSwgYWNjb3VudGluZ1xuICAgICAgICAgICAgLy8gZm9yIHRoZSBwb3NzaWJpbGl0eSB0aGF0IGlzIGlzIGEgc3BhcnNlIGFycmF5XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFzaXMgPSB0aGlzW2luZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCsraW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlICgxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWR1Y2VcbiAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgcG9zc2liaWxpdHkgdGhhdCB0aGUgYXJyYXkgaXMgc3BhcnNlXG4gICAgICAgICAgICBpZiAoaW5kZXggaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGJhc2lzID0gY2FsbGJhY2soYmFzaXMsIHRoaXNbaW5kZXhdLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2lzO1xuICAgIH1cbik7XG5cbnZhciBhcnJheV9pbmRleE9mID0gdW5jdXJyeVRoaXMoXG4gICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5vdCBhIHZlcnkgZ29vZCBzaGltLCBidXQgZ29vZCBlbm91Z2ggZm9yIG91ciBvbmUgdXNlIG9mIGl0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbik7XG5cbnZhciBhcnJheV9tYXAgPSB1bmN1cnJ5VGhpcyhcbiAgICBBcnJheS5wcm90b3R5cGUubWFwIHx8IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc3ApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY29sbGVjdCA9IFtdO1xuICAgICAgICBhcnJheV9yZWR1Y2Uoc2VsZiwgZnVuY3Rpb24gKHVuZGVmaW5lZCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICBjb2xsZWN0LnB1c2goY2FsbGJhY2suY2FsbCh0aGlzcCwgdmFsdWUsIGluZGV4LCBzZWxmKSk7XG4gICAgICAgIH0sIHZvaWQgMCk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0O1xuICAgIH1cbik7XG5cbnZhciBvYmplY3RfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG90eXBlKSB7XG4gICAgZnVuY3Rpb24gVHlwZSgpIHsgfVxuICAgIFR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHJldHVybiBuZXcgVHlwZSgpO1xufTtcblxudmFyIG9iamVjdF9oYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG52YXIgb2JqZWN0X2tleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3RfaGFzT3duUHJvcGVydHkob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn07XG5cbnZhciBvYmplY3RfdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IE9iamVjdCh2YWx1ZSk7XG59XG5cbi8vIGdlbmVyYXRvciByZWxhdGVkIHNoaW1zXG5cbi8vIEZJWE1FOiBSZW1vdmUgdGhpcyBmdW5jdGlvbiBvbmNlIEVTNiBnZW5lcmF0b3JzIGFyZSBpbiBTcGlkZXJNb25rZXkuXG5mdW5jdGlvbiBpc1N0b3BJdGVyYXRpb24oZXhjZXB0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2JqZWN0X3RvU3RyaW5nKGV4Y2VwdGlvbikgPT09IFwiW29iamVjdCBTdG9wSXRlcmF0aW9uXVwiIHx8XG4gICAgICAgIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIFFSZXR1cm5WYWx1ZVxuICAgICk7XG59XG5cbi8vIEZJWE1FOiBSZW1vdmUgdGhpcyBoZWxwZXIgYW5kIFEucmV0dXJuIG9uY2UgRVM2IGdlbmVyYXRvcnMgYXJlIGluXG4vLyBTcGlkZXJNb25rZXkuXG52YXIgUVJldHVyblZhbHVlO1xuaWYgKHR5cGVvZiBSZXR1cm5WYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIFFSZXR1cm5WYWx1ZSA9IFJldHVyblZhbHVlO1xufSBlbHNlIHtcbiAgICBRUmV0dXJuVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH07XG59XG5cbi8vIGxvbmcgc3RhY2sgdHJhY2VzXG5cbnZhciBTVEFDS19KVU1QX1NFUEFSQVRPUiA9IFwiRnJvbSBwcmV2aW91cyBldmVudDpcIjtcblxuZnVuY3Rpb24gbWFrZVN0YWNrVHJhY2VMb25nKGVycm9yLCBwcm9taXNlKSB7XG4gICAgLy8gSWYgcG9zc2libGUsIHRyYW5zZm9ybSB0aGUgZXJyb3Igc3RhY2sgdHJhY2UgYnkgcmVtb3ZpbmcgTm9kZSBhbmQgUVxuICAgIC8vIGNydWZ0LCB0aGVuIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgc3RhY2sgdHJhY2Ugb2YgYHByb21pc2VgLiBTZWUgIzU3LlxuICAgIGlmIChoYXNTdGFja3MgJiZcbiAgICAgICAgcHJvbWlzZS5zdGFjayAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgZXJyb3IgIT09IG51bGwgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2sgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2suaW5kZXhPZihTVEFDS19KVU1QX1NFUEFSQVRPUikgPT09IC0xXG4gICAgKSB7XG4gICAgICAgIHZhciBzdGFja3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcCA9IHByb21pc2U7ICEhcDsgcCA9IHAuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAocC5zdGFjaykge1xuICAgICAgICAgICAgICAgIHN0YWNrcy51bnNoaWZ0KHAuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrcy51bnNoaWZ0KGVycm9yLnN0YWNrKTtcblxuICAgICAgICB2YXIgY29uY2F0ZWRTdGFja3MgPSBzdGFja3Muam9pbihcIlxcblwiICsgU1RBQ0tfSlVNUF9TRVBBUkFUT1IgKyBcIlxcblwiKTtcbiAgICAgICAgZXJyb3Iuc3RhY2sgPSBmaWx0ZXJTdGFja1N0cmluZyhjb25jYXRlZFN0YWNrcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJTdGFja1N0cmluZyhzdGFja1N0cmluZykge1xuICAgIHZhciBsaW5lcyA9IHN0YWNrU3RyaW5nLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBkZXNpcmVkTGluZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgICAgaWYgKCFpc0ludGVybmFsRnJhbWUobGluZSkgJiYgIWlzTm9kZUZyYW1lKGxpbmUpICYmIGxpbmUpIHtcbiAgICAgICAgICAgIGRlc2lyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXNpcmVkTGluZXMuam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlRnJhbWUoc3RhY2tMaW5lKSB7XG4gICAgcmV0dXJuIHN0YWNrTGluZS5pbmRleE9mKFwiKG1vZHVsZS5qczpcIikgIT09IC0xIHx8XG4gICAgICAgICAgIHN0YWNrTGluZS5pbmRleE9mKFwiKG5vZGUuanM6XCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSkge1xuICAgIC8vIE5hbWVkIGZ1bmN0aW9uczogXCJhdCBmdW5jdGlvbk5hbWUgKGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyKVwiXG4gICAgLy8gSW4gSUUxMCBmdW5jdGlvbiBuYW1lIGNhbiBoYXZlIHNwYWNlcyAoXCJBbm9ueW1vdXMgZnVuY3Rpb25cIikgT19vXG4gICAgdmFyIGF0dGVtcHQxID0gL2F0IC4rIFxcKCguKyk6KFxcZCspOig/OlxcZCspXFwpJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0MSkge1xuICAgICAgICByZXR1cm4gW2F0dGVtcHQxWzFdLCBOdW1iZXIoYXR0ZW1wdDFbMl0pXTtcbiAgICB9XG5cbiAgICAvLyBBbm9ueW1vdXMgZnVuY3Rpb25zOiBcImF0IGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyXCJcbiAgICB2YXIgYXR0ZW1wdDIgPSAvYXQgKFteIF0rKTooXFxkKyk6KD86XFxkKykkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQyKSB7XG4gICAgICAgIHJldHVybiBbYXR0ZW1wdDJbMV0sIE51bWJlcihhdHRlbXB0MlsyXSldO1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3ggc3R5bGU6IFwiZnVuY3Rpb25AZmlsZW5hbWU6bGluZU51bWJlciBvciBAZmlsZW5hbWU6bGluZU51bWJlclwiXG4gICAgdmFyIGF0dGVtcHQzID0gLy4qQCguKyk6KFxcZCspJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0Mykge1xuICAgICAgICByZXR1cm4gW2F0dGVtcHQzWzFdLCBOdW1iZXIoYXR0ZW1wdDNbMl0pXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJuYWxGcmFtZShzdGFja0xpbmUpIHtcbiAgICB2YXIgZmlsZU5hbWVBbmRMaW5lTnVtYmVyID0gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSk7XG5cbiAgICBpZiAoIWZpbGVOYW1lQW5kTGluZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzBdO1xuICAgIHZhciBsaW5lTnVtYmVyID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzFdO1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lID09PSBxRmlsZU5hbWUgJiZcbiAgICAgICAgbGluZU51bWJlciA+PSBxU3RhcnRpbmdMaW5lICYmXG4gICAgICAgIGxpbmVOdW1iZXIgPD0gcUVuZGluZ0xpbmU7XG59XG5cbi8vIGRpc2NvdmVyIG93biBmaWxlIG5hbWUgYW5kIGxpbmUgbnVtYmVyIHJhbmdlIGZvciBmaWx0ZXJpbmcgc3RhY2tcbi8vIHRyYWNlc1xuZnVuY3Rpb24gY2FwdHVyZUxpbmUoKSB7XG4gICAgaWYgKCFoYXNTdGFja3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIGxpbmVzID0gZS5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgdmFyIGZpcnN0TGluZSA9IGxpbmVzWzBdLmluZGV4T2YoXCJAXCIpID4gMCA/IGxpbmVzWzFdIDogbGluZXNbMl07XG4gICAgICAgIHZhciBmaWxlTmFtZUFuZExpbmVOdW1iZXIgPSBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoZmlyc3RMaW5lKTtcbiAgICAgICAgaWYgKCFmaWxlTmFtZUFuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHFGaWxlTmFtZSA9IGZpbGVOYW1lQW5kTGluZU51bWJlclswXTtcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lQW5kTGluZU51bWJlclsxXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZShjYWxsYmFjaywgbmFtZSwgYWx0ZXJuYXRpdmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLndhcm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG5hbWUgKyBcIiBpcyBkZXByZWNhdGVkLCB1c2UgXCIgKyBhbHRlcm5hdGl2ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgaW5zdGVhZC5cIiwgbmV3IEVycm9yKFwiXCIpLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuLy8gZW5kIG9mIHNoaW1zXG4vLyBiZWdpbm5pbmcgb2YgcmVhbCB3b3JrXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHByb21pc2UgZm9yIGFuIGltbWVkaWF0ZSByZWZlcmVuY2UsIHBhc3NlcyBwcm9taXNlcyB0aHJvdWdoLCBvclxuICogY29lcmNlcyBwcm9taXNlcyBmcm9tIGRpZmZlcmVudCBzeXN0ZW1zLlxuICogQHBhcmFtIHZhbHVlIGltbWVkaWF0ZSByZWZlcmVuY2Ugb3IgcHJvbWlzZVxuICovXG5mdW5jdGlvbiBRKHZhbHVlKSB7XG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGEgUHJvbWlzZSwgcmV0dXJuIGl0IGRpcmVjdGx5LiAgVGhpcyBlbmFibGVzXG4gICAgLy8gdGhlIHJlc29sdmUgZnVuY3Rpb24gdG8gYm90aCBiZSB1c2VkIHRvIGNyZWF0ZWQgcmVmZXJlbmNlcyBmcm9tIG9iamVjdHMsXG4gICAgLy8gYnV0IHRvIHRvbGVyYWJseSBjb2VyY2Ugbm9uLXByb21pc2VzIHRvIHByb21pc2VzLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGFzc2ltaWxhdGUgdGhlbmFibGVzXG4gICAgaWYgKGlzUHJvbWlzZUFsaWtlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29lcmNlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVsZmlsbCh2YWx1ZSk7XG4gICAgfVxufVxuUS5yZXNvbHZlID0gUTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIHRhc2sgaW4gYSBmdXR1cmUgdHVybiBvZiB0aGUgZXZlbnQgbG9vcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2tcbiAqL1xuUS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4vKipcbiAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGxvbmcgc3RhY2sgdHJhY2VzIHdpbGwgYmUgb25cbiAqL1xuUS5sb25nU3RhY2tTdXBwb3J0ID0gZmFsc2U7XG5cbi8vIGVuYWJsZSBsb25nIHN0YWNrcyBpZiBRX0RFQlVHIGlzIHNldFxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuUV9ERUJVRykge1xuICAgIFEubG9uZ1N0YWNrU3VwcG9ydCA9IHRydWU7XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHtwcm9taXNlLCByZXNvbHZlLCByZWplY3R9IG9iamVjdC5cbiAqXG4gKiBgcmVzb2x2ZWAgaXMgYSBjYWxsYmFjayB0byBpbnZva2Ugd2l0aCBhIG1vcmUgcmVzb2x2ZWQgdmFsdWUgZm9yIHRoZVxuICogcHJvbWlzZS4gVG8gZnVsZmlsbCB0aGUgcHJvbWlzZSwgaW52b2tlIGByZXNvbHZlYCB3aXRoIGFueSB2YWx1ZSB0aGF0IGlzXG4gKiBub3QgYSB0aGVuYWJsZS4gVG8gcmVqZWN0IHRoZSBwcm9taXNlLCBpbnZva2UgYHJlc29sdmVgIHdpdGggYSByZWplY3RlZFxuICogdGhlbmFibGUsIG9yIGludm9rZSBgcmVqZWN0YCB3aXRoIHRoZSByZWFzb24gZGlyZWN0bHkuIFRvIHJlc29sdmUgdGhlXG4gKiBwcm9taXNlIHRvIGFub3RoZXIgdGhlbmFibGUsIHRodXMgcHV0dGluZyBpdCBpbiB0aGUgc2FtZSBzdGF0ZSwgaW52b2tlXG4gKiBgcmVzb2x2ZWAgd2l0aCB0aGF0IG90aGVyIHRoZW5hYmxlLlxuICovXG5RLmRlZmVyID0gZGVmZXI7XG5mdW5jdGlvbiBkZWZlcigpIHtcbiAgICAvLyBpZiBcIm1lc3NhZ2VzXCIgaXMgYW4gXCJBcnJheVwiLCB0aGF0IGluZGljYXRlcyB0aGF0IHRoZSBwcm9taXNlIGhhcyBub3QgeWV0XG4gICAgLy8gYmVlbiByZXNvbHZlZC4gIElmIGl0IGlzIFwidW5kZWZpbmVkXCIsIGl0IGhhcyBiZWVuIHJlc29sdmVkLiAgRWFjaFxuICAgIC8vIGVsZW1lbnQgb2YgdGhlIG1lc3NhZ2VzIGFycmF5IGlzIGl0c2VsZiBhbiBhcnJheSBvZiBjb21wbGV0ZSBhcmd1bWVudHMgdG9cbiAgICAvLyBmb3J3YXJkIHRvIHRoZSByZXNvbHZlZCBwcm9taXNlLiAgV2UgY29lcmNlIHRoZSByZXNvbHV0aW9uIHZhbHVlIHRvIGFcbiAgICAvLyBwcm9taXNlIHVzaW5nIHRoZSBgcmVzb2x2ZWAgZnVuY3Rpb24gYmVjYXVzZSBpdCBoYW5kbGVzIGJvdGggZnVsbHlcbiAgICAvLyBub24tdGhlbmFibGUgdmFsdWVzIGFuZCBvdGhlciB0aGVuYWJsZXMgZ3JhY2VmdWxseS5cbiAgICB2YXIgbWVzc2FnZXMgPSBbXSwgcHJvZ3Jlc3NMaXN0ZW5lcnMgPSBbXSwgcmVzb2x2ZWRQcm9taXNlO1xuXG4gICAgdmFyIGRlZmVycmVkID0gb2JqZWN0X2NyZWF0ZShkZWZlci5wcm90b3R5cGUpO1xuICAgIHZhciBwcm9taXNlID0gb2JqZWN0X2NyZWF0ZShQcm9taXNlLnByb3RvdHlwZSk7XG5cbiAgICBwcm9taXNlLnByb21pc2VEaXNwYXRjaCA9IGZ1bmN0aW9uIChyZXNvbHZlLCBvcCwgb3BlcmFuZHMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goYXJncyk7XG4gICAgICAgICAgICBpZiAob3AgPT09IFwid2hlblwiICYmIG9wZXJhbmRzWzFdKSB7IC8vIHByb2dyZXNzIG9wZXJhbmRcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0xpc3RlbmVycy5wdXNoKG9wZXJhbmRzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFEubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS5wcm9taXNlRGlzcGF0Y2guYXBwbHkocmVzb2x2ZWRQcm9taXNlLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFhYWCBkZXByZWNhdGVkXG4gICAgcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZWFyZXJWYWx1ZSA9IG5lYXJlcihyZXNvbHZlZFByb21pc2UpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKG5lYXJlclZhbHVlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlID0gbmVhcmVyVmFsdWU7IC8vIHNob3J0ZW4gY2hhaW5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVhcmVyVmFsdWU7XG4gICAgfTtcblxuICAgIHByb21pc2UuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXRlOiBcInBlbmRpbmdcIiB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZFByb21pc2UuaW5zcGVjdCgpO1xuICAgIH07XG5cbiAgICBpZiAoUS5sb25nU3RhY2tTdXBwb3J0ICYmIGhhc1N0YWNrcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IGRvbid0IHRyeSB0byB1c2UgYEVycm9yLmNhcHR1cmVTdGFja1RyYWNlYCBvciB0cmFuc2ZlciB0aGVcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yIGFyb3VuZDsgdGhhdCBjYXVzZXMgbWVtb3J5IGxlYWtzIGFzIHBlciBHSC0xMTEuIEp1c3RcbiAgICAgICAgICAgIC8vIHJlaWZ5IHRoZSBzdGFjayB0cmFjZSBhcyBhIHN0cmluZyBBU0FQLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEF0IHRoZSBzYW1lIHRpbWUsIGN1dCBvZmYgdGhlIGZpcnN0IGxpbmU7IGl0J3MgYWx3YXlzIGp1c3RcbiAgICAgICAgICAgIC8vIFwiW29iamVjdCBQcm9taXNlXVxcblwiLCBhcyBwZXIgdGhlIGB0b1N0cmluZ2AuXG4gICAgICAgICAgICBwcm9taXNlLnN0YWNrID0gZS5zdGFjay5zdWJzdHJpbmcoZS5zdGFjay5pbmRleE9mKFwiXFxuXCIpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOT1RFOiB3ZSBkbyB0aGUgY2hlY2tzIGZvciBgcmVzb2x2ZWRQcm9taXNlYCBpbiBlYWNoIG1ldGhvZCwgaW5zdGVhZCBvZlxuICAgIC8vIGNvbnNvbGlkYXRpbmcgdGhlbSBpbnRvIGBiZWNvbWVgLCBzaW5jZSBvdGhlcndpc2Ugd2UnZCBjcmVhdGUgbmV3XG4gICAgLy8gcHJvbWlzZXMgd2l0aCB0aGUgbGluZXMgYGJlY29tZSh3aGF0ZXZlcih2YWx1ZSkpYC4gU2VlIGUuZy4gR0gtMjUyLlxuXG4gICAgZnVuY3Rpb24gYmVjb21lKG5ld1Byb21pc2UpIHtcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlID0gbmV3UHJvbWlzZTtcbiAgICAgICAgcHJvbWlzZS5zb3VyY2UgPSBuZXdQcm9taXNlO1xuXG4gICAgICAgIGFycmF5X3JlZHVjZShtZXNzYWdlcywgZnVuY3Rpb24gKHVuZGVmaW5lZCwgbWVzc2FnZSkge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvbWlzZS5wcm9taXNlRGlzcGF0Y2guYXBwbHkobmV3UHJvbWlzZSwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdm9pZCAwKTtcblxuICAgICAgICBtZXNzYWdlcyA9IHZvaWQgMDtcbiAgICAgICAgcHJvZ3Jlc3NMaXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgZGVmZXJyZWQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAocmVzb2x2ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBiZWNvbWUoUSh2YWx1ZSkpO1xuICAgIH07XG5cbiAgICBkZWZlcnJlZC5mdWxmaWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlY29tZShmdWxmaWxsKHZhbHVlKSk7XG4gICAgfTtcbiAgICBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlY29tZShyZWplY3QocmVhc29uKSk7XG4gICAgfTtcbiAgICBkZWZlcnJlZC5ub3RpZnkgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKHJlc29sdmVkUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyYXlfcmVkdWNlKHByb2dyZXNzTGlzdGVuZXJzLCBmdW5jdGlvbiAodW5kZWZpbmVkLCBwcm9ncmVzc0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB2b2lkIDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIE5vZGUtc3R5bGUgY2FsbGJhY2sgdGhhdCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBkZWZlcnJlZFxuICogcHJvbWlzZS5cbiAqIEByZXR1cm5zIGEgbm9kZWJhY2tcbiAqL1xuZGVmZXIucHJvdG90eXBlLm1ha2VOb2RlUmVzb2x2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgc2VsZi5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBzZWxmLnJlc29sdmUoYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHJlc29sdmVyIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgbm90aGluZyBhbmQgYWNjZXB0c1xuICogdGhlIHJlc29sdmUsIHJlamVjdCwgYW5kIG5vdGlmeSBmdW5jdGlvbnMgZm9yIGEgZGVmZXJyZWQuXG4gKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgZ2l2ZW4gcmVzb2x2ZSBhbmQgcmVqZWN0XG4gKiBmdW5jdGlvbnMsIG9yIHJlamVjdGVkIGJ5IGEgdGhyb3duIGV4Y2VwdGlvbiBpbiByZXNvbHZlclxuICovXG5RLlByb21pc2UgPSBwcm9taXNlOyAvLyBFUzZcblEucHJvbWlzZSA9IHByb21pc2U7XG5mdW5jdGlvbiBwcm9taXNlKHJlc29sdmVyKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGRlZmVycmVkLnJlc29sdmUsIGRlZmVycmVkLnJlamVjdCwgZGVmZXJyZWQubm90aWZ5KTtcbiAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5wcm9taXNlLnJhY2UgPSByYWNlOyAvLyBFUzZcbnByb21pc2UuYWxsID0gYWxsOyAvLyBFUzZcbnByb21pc2UucmVqZWN0ID0gcmVqZWN0OyAvLyBFUzZcbnByb21pc2UucmVzb2x2ZSA9IFE7IC8vIEVTNlxuXG4vLyBYWFggZXhwZXJpbWVudGFsLiAgVGhpcyBtZXRob2QgaXMgYSB3YXkgdG8gZGVub3RlIHRoYXQgYSBsb2NhbCB2YWx1ZSBpc1xuLy8gc2VyaWFsaXphYmxlIGFuZCBzaG91bGQgYmUgaW1tZWRpYXRlbHkgZGlzcGF0Y2hlZCB0byBhIHJlbW90ZSB1cG9uIHJlcXVlc3QsXG4vLyBpbnN0ZWFkIG9mIHBhc3NpbmcgYSByZWZlcmVuY2UuXG5RLnBhc3NCeUNvcHkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgLy9mcmVlemUob2JqZWN0KTtcbiAgICAvL3Bhc3NCeUNvcGllcy5zZXQob2JqZWN0LCB0cnVlKTtcbiAgICByZXR1cm4gb2JqZWN0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucGFzc0J5Q29weSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2ZyZWV6ZShvYmplY3QpO1xuICAgIC8vcGFzc0J5Q29waWVzLnNldChvYmplY3QsIHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJZiB0d28gcHJvbWlzZXMgZXZlbnR1YWxseSBmdWxmaWxsIHRvIHRoZSBzYW1lIHZhbHVlLCBwcm9taXNlcyB0aGF0IHZhbHVlLFxuICogYnV0IG90aGVyd2lzZSByZWplY3RzLlxuICogQHBhcmFtIHgge0FueSp9XG4gKiBAcGFyYW0geSB7QW55Kn1cbiAqIEByZXR1cm5zIHtBbnkqfSBhIHByb21pc2UgZm9yIHggYW5kIHkgaWYgdGhleSBhcmUgdGhlIHNhbWUsIGJ1dCBhIHJlamVjdGlvblxuICogb3RoZXJ3aXNlLlxuICpcbiAqL1xuUS5qb2luID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gUSh4KS5qb2luKHkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uICh0aGF0KSB7XG4gICAgcmV0dXJuIFEoW3RoaXMsIHRoYXRdKS5zcHJlYWQoZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFwiPT09XCIgc2hvdWxkIGJlIE9iamVjdC5pcyBvciBlcXVpdlxuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBqb2luOiBub3QgdGhlIHNhbWU6IFwiICsgeCArIFwiIFwiICsgeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlcyB0byBiZWNvbWUgc2V0dGxlZC5cbiAqIEBwYXJhbSBhbnN3ZXJzIHtBcnJheVtBbnkqXX0gcHJvbWlzZXMgdG8gcmFjZVxuICogQHJldHVybnMge0FueSp9IHRoZSBmaXJzdCBwcm9taXNlIHRvIGJlIHNldHRsZWRcbiAqL1xuUS5yYWNlID0gcmFjZTtcbmZ1bmN0aW9uIHJhY2UoYW5zd2VyUHMpIHtcbiAgICByZXR1cm4gcHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIFN3aXRjaCB0byB0aGlzIG9uY2Ugd2UgY2FuIGFzc3VtZSBhdCBsZWFzdCBFUzVcbiAgICAgICAgLy8gYW5zd2VyUHMuZm9yRWFjaChmdW5jdGlvbiAoYW5zd2VyUCkge1xuICAgICAgICAvLyAgICAgUShhbnN3ZXJQKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBVc2UgdGhpcyBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFuc3dlclBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBRKGFuc3dlclBzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKFEucmFjZSk7XG59O1xuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBQcm9taXNlIHdpdGggYSBwcm9taXNlIGRlc2NyaXB0b3Igb2JqZWN0IGFuZCBvcHRpb25hbCBmYWxsYmFja1xuICogZnVuY3Rpb24uICBUaGUgZGVzY3JpcHRvciBjb250YWlucyBtZXRob2RzIGxpa2Ugd2hlbihyZWplY3RlZCksIGdldChuYW1lKSxcbiAqIHNldChuYW1lLCB2YWx1ZSksIHBvc3QobmFtZSwgYXJncyksIGFuZCBkZWxldGUobmFtZSksIHdoaWNoIGFsbFxuICogcmV0dXJuIGVpdGhlciBhIHZhbHVlLCBhIHByb21pc2UgZm9yIGEgdmFsdWUsIG9yIGEgcmVqZWN0aW9uLiAgVGhlIGZhbGxiYWNrXG4gKiBhY2NlcHRzIHRoZSBvcGVyYXRpb24gbmFtZSwgYSByZXNvbHZlciwgYW5kIGFueSBmdXJ0aGVyIGFyZ3VtZW50cyB0aGF0IHdvdWxkXG4gKiBoYXZlIGJlZW4gZm9yd2FyZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgYWJvdmUgaGFkIGEgbWV0aG9kIGJlZW5cbiAqIHByb3ZpZGVkIHdpdGggdGhlIHByb3BlciBuYW1lLiAgVGhlIEFQSSBtYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IHRoZSBuYXR1cmVcbiAqIG9mIHRoZSByZXR1cm5lZCBvYmplY3QsIGFwYXJ0IGZyb20gdGhhdCBpdCBpcyB1c2FibGUgd2hlcmVldmVyIHByb21pc2VzIGFyZVxuICogYm91Z2h0IGFuZCBzb2xkLlxuICovXG5RLm1ha2VQcm9taXNlID0gUHJvbWlzZTtcbmZ1bmN0aW9uIFByb21pc2UoZGVzY3JpcHRvciwgZmFsbGJhY2ssIGluc3BlY3QpIHtcbiAgICBpZiAoZmFsbGJhY2sgPT09IHZvaWQgMCkge1xuICAgICAgICBmYWxsYmFjayA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJQcm9taXNlIGRvZXMgbm90IHN1cHBvcnQgb3BlcmF0aW9uOiBcIiArIG9wXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGluc3BlY3QgPT09IHZvaWQgMCkge1xuICAgICAgICBpbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTogXCJ1bmtub3duXCJ9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlID0gb2JqZWN0X2NyZWF0ZShQcm9taXNlLnByb3RvdHlwZSk7XG5cbiAgICBwcm9taXNlLnByb21pc2VEaXNwYXRjaCA9IGZ1bmN0aW9uIChyZXNvbHZlLCBvcCwgYXJncykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Jbb3BdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZGVzY3JpcHRvcltvcF0uYXBwbHkocHJvbWlzZSwgYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbGxiYWNrLmNhbGwocHJvbWlzZSwgb3AsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJvbWlzZS5pbnNwZWN0ID0gaW5zcGVjdDtcblxuICAgIC8vIFhYWCBkZXByZWNhdGVkIGB2YWx1ZU9mYCBhbmQgYGV4Y2VwdGlvbmAgc3VwcG9ydFxuICAgIGlmIChpbnNwZWN0KSB7XG4gICAgICAgIHZhciBpbnNwZWN0ZWQgPSBpbnNwZWN0KCk7XG4gICAgICAgIGlmIChpbnNwZWN0ZWQuc3RhdGUgPT09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgICAgcHJvbWlzZS5leGNlcHRpb24gPSBpbnNwZWN0ZWQucmVhc29uO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluc3BlY3RlZCA9IGluc3BlY3QoKTtcbiAgICAgICAgICAgIGlmIChpbnNwZWN0ZWQuc3RhdGUgPT09IFwicGVuZGluZ1wiIHx8XG4gICAgICAgICAgICAgICAgaW5zcGVjdGVkLnN0YXRlID09PSBcInJlamVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnNwZWN0ZWQudmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgUHJvbWlzZV1cIjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3NlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHZhciBkb25lID0gZmFsc2U7ICAgLy8gZW5zdXJlIHRoZSB1bnRydXN0ZWQgcHJvbWlzZSBtYWtlcyBhdCBtb3N0IGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBjYWxsIHRvIG9uZSBvZiB0aGUgY2FsbGJhY2tzXG5cbiAgICBmdW5jdGlvbiBfZnVsZmlsbGVkKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZ1bGZpbGxlZCA9PT0gXCJmdW5jdGlvblwiID8gZnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZWplY3RlZChleGNlcHRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3RlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtYWtlU3RhY2tUcmFjZUxvbmcoZXhjZXB0aW9uLCBzZWxmKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChuZXdFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ld0V4Y2VwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlamVjdChleGNlcHRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wcm9ncmVzc2VkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvZ3Jlc3NlZCA9PT0gXCJmdW5jdGlvblwiID8gcHJvZ3Jlc3NlZCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wcm9taXNlRGlzcGF0Y2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9mdWxmaWxsZWQodmFsdWUpKTtcbiAgICAgICAgfSwgXCJ3aGVuXCIsIFtmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9yZWplY3RlZChleGNlcHRpb24pKTtcbiAgICAgICAgfV0pO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgcHJvcGFnYXRvciBuZWVkIHRvIGJlIGF0dGFjaGVkIGluIHRoZSBjdXJyZW50IHRpY2suXG4gICAgc2VsZi5wcm9taXNlRGlzcGF0Y2godm9pZCAwLCBcIndoZW5cIiwgW3ZvaWQgMCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZTtcbiAgICAgICAgdmFyIHRocmV3ID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IF9wcm9ncmVzc2VkKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyZXcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKFEub25lcnJvcikge1xuICAgICAgICAgICAgICAgIFEub25lcnJvcihlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZXcpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeShuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblEudGFwID0gZnVuY3Rpb24gKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZSkudGFwKGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogV29ya3MgYWxtb3N0IGxpa2UgXCJmaW5hbGx5XCIsIGJ1dCBub3QgY2FsbGVkIGZvciByZWplY3Rpb25zLlxuICogT3JpZ2luYWwgcmVzb2x1dGlvbiB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCBjYWxsYmFjayB1bmFmZmVjdGVkLlxuICogQ2FsbGJhY2sgbWF5IHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGF3YWl0ZWQgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtRLlByb21pc2V9XG4gKiBAZXhhbXBsZVxuICogZG9Tb21ldGhpbmcoKVxuICogICAudGhlbiguLi4pXG4gKiAgIC50YXAoY29uc29sZS5sb2cpXG4gKiAgIC50aGVuKC4uLik7XG4gKi9cblByb21pc2UucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gUShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suZmNhbGwodmFsdWUpLnRoZW5SZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGFuIG9ic2VydmVyIG9uIGEgcHJvbWlzZS5cbiAqXG4gKiBHdWFyYW50ZWVzOlxuICpcbiAqIDEuIHRoYXQgZnVsZmlsbGVkIGFuZCByZWplY3RlZCB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gKiAyLiB0aGF0IGVpdGhlciB0aGUgZnVsZmlsbGVkIGNhbGxiYWNrIG9yIHRoZSByZWplY3RlZCBjYWxsYmFjayB3aWxsIGJlXG4gKiAgICBjYWxsZWQsIGJ1dCBub3QgYm90aC5cbiAqIDMuIHRoYXQgZnVsZmlsbGVkIGFuZCByZWplY3RlZCB3aWxsIG5vdCBiZSBjYWxsZWQgaW4gdGhpcyB0dXJuLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAgICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSB0byBvYnNlcnZlXG4gKiBAcGFyYW0gZnVsZmlsbGVkICBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgZnVsZmlsbGVkIHZhbHVlXG4gKiBAcGFyYW0gcmVqZWN0ZWQgICBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgcmVqZWN0aW9uIGV4Y2VwdGlvblxuICogQHBhcmFtIHByb2dyZXNzZWQgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGFueSBwcm9ncmVzcyBub3RpZmljYXRpb25zXG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgaW52b2tlZCBjYWxsYmFja1xuICovXG5RLndoZW4gPSB3aGVuO1xuZnVuY3Rpb24gd2hlbih2YWx1ZSwgZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3NlZCkge1xuICAgIHJldHVybiBRKHZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzZWQpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuUmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWU7IH0pO1xufTtcblxuUS50aGVuUmVzb2x2ZSA9IGZ1bmN0aW9uIChwcm9taXNlLCB2YWx1ZSkge1xuICAgIHJldHVybiBRKHByb21pc2UpLnRoZW5SZXNvbHZlKHZhbHVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW5SZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IHJlYXNvbjsgfSk7XG59O1xuXG5RLnRoZW5SZWplY3QgPSBmdW5jdGlvbiAocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZSkudGhlblJlamVjdChyZWFzb24pO1xufTtcblxuLyoqXG4gKiBJZiBhbiBvYmplY3QgaXMgbm90IGEgcHJvbWlzZSwgaXQgaXMgYXMgXCJuZWFyXCIgYXMgcG9zc2libGUuXG4gKiBJZiBhIHByb21pc2UgaXMgcmVqZWN0ZWQsIGl0IGlzIGFzIFwibmVhclwiIGFzIHBvc3NpYmxlIHRvby5cbiAqIElmIGl04oCZcyBhIGZ1bGZpbGxlZCBwcm9taXNlLCB0aGUgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmVhcmVyLlxuICogSWYgaXTigJlzIGEgZGVmZXJyZWQgcHJvbWlzZSBhbmQgdGhlIGRlZmVycmVkIGhhcyBiZWVuIHJlc29sdmVkLCB0aGVcbiAqIHJlc29sdXRpb24gaXMgXCJuZWFyZXJcIi5cbiAqIEBwYXJhbSBvYmplY3RcbiAqIEByZXR1cm5zIG1vc3QgcmVzb2x2ZWQgKG5lYXJlc3QpIGZvcm0gb2YgdGhlIG9iamVjdFxuICovXG5cbi8vIFhYWCBzaG91bGQgd2UgcmUtZG8gdGhpcz9cblEubmVhcmVyID0gbmVhcmVyO1xuZnVuY3Rpb24gbmVhcmVyKHZhbHVlKSB7XG4gICAgaWYgKGlzUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGluc3BlY3RlZCA9IHZhbHVlLmluc3BlY3QoKTtcbiAgICAgICAgaWYgKGluc3BlY3RlZC5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGluc3BlY3RlZC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcHJvbWlzZS5cbiAqIE90aGVyd2lzZSBpdCBpcyBhIGZ1bGZpbGxlZCB2YWx1ZS5cbiAqL1xuUS5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cblEuaXNQcm9taXNlQWxpa2UgPSBpc1Byb21pc2VBbGlrZTtcbmZ1bmN0aW9uIGlzUHJvbWlzZUFsaWtlKG9iamVjdCkge1xuICAgIHJldHVybiBpc09iamVjdChvYmplY3QpICYmIHR5cGVvZiBvYmplY3QudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIHBlbmRpbmcgcHJvbWlzZSwgbWVhbmluZyBub3RcbiAqIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cbiAqL1xuUS5pc1BlbmRpbmcgPSBpc1BlbmRpbmc7XG5mdW5jdGlvbiBpc1BlbmRpbmcob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzUHJvbWlzZShvYmplY3QpICYmIG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwicGVuZGluZ1wiO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zcGVjdCgpLnN0YXRlID09PSBcInBlbmRpbmdcIjtcbn07XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgdmFsdWUgb3IgZnVsZmlsbGVkXG4gKiBwcm9taXNlLlxuICovXG5RLmlzRnVsZmlsbGVkID0gaXNGdWxmaWxsZWQ7XG5mdW5jdGlvbiBpc0Z1bGZpbGxlZChvYmplY3QpIHtcbiAgICByZXR1cm4gIWlzUHJvbWlzZShvYmplY3QpIHx8IG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwiZnVsZmlsbGVkXCI7XG59XG5cblByb21pc2UucHJvdG90eXBlLmlzRnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIjtcbn07XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqL1xuUS5pc1JlamVjdGVkID0gaXNSZWplY3RlZDtcbmZ1bmN0aW9uIGlzUmVqZWN0ZWQob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzUHJvbWlzZShvYmplY3QpICYmIG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwicmVqZWN0ZWRcIjtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNwZWN0KCkuc3RhdGUgPT09IFwicmVqZWN0ZWRcIjtcbn07XG5cbi8vLy8gQkVHSU4gVU5IQU5ETEVEIFJFSkVDVElPTiBUUkFDS0lOR1xuXG4vLyBUaGlzIHByb21pc2UgbGlicmFyeSBjb25zdW1lcyBleGNlcHRpb25zIHRocm93biBpbiBoYW5kbGVycyBzbyB0aGV5IGNhbiBiZVxuLy8gaGFuZGxlZCBieSBhIHN1YnNlcXVlbnQgcHJvbWlzZS4gIFRoZSBleGNlcHRpb25zIGdldCBhZGRlZCB0byB0aGlzIGFycmF5IHdoZW5cbi8vIHRoZXkgYXJlIGNyZWF0ZWQsIGFuZCByZW1vdmVkIHdoZW4gdGhleSBhcmUgaGFuZGxlZC4gIE5vdGUgdGhhdCBpbiBFUzYgb3Jcbi8vIHNoaW1tZWQgZW52aXJvbm1lbnRzLCB0aGlzIHdvdWxkIG5hdHVyYWxseSBiZSBhIGBTZXRgLlxudmFyIHVuaGFuZGxlZFJlYXNvbnMgPSBbXTtcbnZhciB1bmhhbmRsZWRSZWplY3Rpb25zID0gW107XG52YXIgcmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zID0gW107XG52YXIgdHJhY2tVbmhhbmRsZWRSZWplY3Rpb25zID0gdHJ1ZTtcblxuZnVuY3Rpb24gcmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zKCkge1xuICAgIHVuaGFuZGxlZFJlYXNvbnMubGVuZ3RoID0gMDtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25zLmxlbmd0aCA9IDA7XG5cbiAgICBpZiAoIXRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucykge1xuICAgICAgICB0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMgPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhY2tSZWplY3Rpb24ocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgaWYgKCF0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHByb2Nlc3MuZW1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIFEubmV4dFRpY2sucnVuQWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFycmF5X2luZGV4T2YodW5oYW5kbGVkUmVqZWN0aW9ucywgcHJvbWlzZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsIHJlYXNvbiwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgcmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuaGFuZGxlZFJlamVjdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICBpZiAocmVhc29uICYmIHR5cGVvZiByZWFzb24uc3RhY2sgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdW5oYW5kbGVkUmVhc29ucy5wdXNoKHJlYXNvbi5zdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5oYW5kbGVkUmVhc29ucy5wdXNoKFwiKG5vIHN0YWNrKSBcIiArIHJlYXNvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bnRyYWNrUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAoIXRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGF0ID0gYXJyYXlfaW5kZXhPZih1bmhhbmRsZWRSZWplY3Rpb25zLCBwcm9taXNlKTtcbiAgICBpZiAoYXQgIT09IC0xKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIFEubmV4dFRpY2sucnVuQWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhdFJlcG9ydCA9IGFycmF5X2luZGV4T2YocmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYXRSZXBvcnQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIiwgdW5oYW5kbGVkUmVhc29uc1thdF0sIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXBvcnRlZFVuaGFuZGxlZFJlamVjdGlvbnMuc3BsaWNlKGF0UmVwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB1bmhhbmRsZWRSZWplY3Rpb25zLnNwbGljZShhdCwgMSk7XG4gICAgICAgIHVuaGFuZGxlZFJlYXNvbnMuc3BsaWNlKGF0LCAxKTtcbiAgICB9XG59XG5cblEucmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zID0gcmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zO1xuXG5RLmdldFVuaGFuZGxlZFJlYXNvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gTWFrZSBhIGNvcHkgc28gdGhhdCBjb25zdW1lcnMgY2FuJ3QgaW50ZXJmZXJlIHdpdGggb3VyIGludGVybmFsIHN0YXRlLlxuICAgIHJldHVybiB1bmhhbmRsZWRSZWFzb25zLnNsaWNlKCk7XG59O1xuXG5RLnN0b3BVbmhhbmRsZWRSZWplY3Rpb25UcmFja2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXNldFVuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICB0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMgPSBmYWxzZTtcbn07XG5cbnJlc2V0VW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuXG4vLy8vIEVORCBVTkhBTkRMRUQgUkVKRUNUSU9OIFRSQUNLSU5HXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHJlamVjdGVkIHByb21pc2UuXG4gKiBAcGFyYW0gcmVhc29uIHZhbHVlIGRlc2NyaWJpbmcgdGhlIGZhaWx1cmVcbiAqL1xuUS5yZWplY3QgPSByZWplY3Q7XG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHJlamVjdGlvbiA9IFByb21pc2Uoe1xuICAgICAgICBcIndoZW5cIjogZnVuY3Rpb24gKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgdGhlIGVycm9yIGhhcyBiZWVuIGhhbmRsZWRcbiAgICAgICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIHVudHJhY2tSZWplY3Rpb24odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQgPyByZWplY3RlZChyZWFzb24pIDogdGhpcztcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIGZhbGxiYWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4geyBzdGF0ZTogXCJyZWplY3RlZFwiLCByZWFzb246IHJlYXNvbiB9O1xuICAgIH0pO1xuXG4gICAgLy8gTm90ZSB0aGF0IHRoZSByZWFzb24gaGFzIG5vdCBiZWVuIGhhbmRsZWQuXG4gICAgdHJhY2tSZWplY3Rpb24ocmVqZWN0aW9uLCByZWFzb24pO1xuXG4gICAgcmV0dXJuIHJlamVjdGlvbjtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgZnVsZmlsbGVkIHByb21pc2UgZm9yIGFuIGltbWVkaWF0ZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0gdmFsdWUgaW1tZWRpYXRlIHJlZmVyZW5jZVxuICovXG5RLmZ1bGZpbGwgPSBmdWxmaWxsO1xuZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlKHtcbiAgICAgICAgXCJ3aGVuXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKG5hbWUsIHJocykge1xuICAgICAgICAgICAgdmFsdWVbbmFtZV0gPSByaHM7XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgdmFsdWVbbmFtZV07XG4gICAgICAgIH0sXG4gICAgICAgIFwicG9zdFwiOiBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgICAgICAgICAgLy8gTWFyayBNaWxsZXIgcHJvcG9zZXMgdGhhdCBwb3N0IHdpdGggbm8gbmFtZSBzaG91bGQgYXBwbHkgYVxuICAgICAgICAgICAgLy8gcHJvbWlzZWQgZnVuY3Rpb24uXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW25hbWVdLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhcHBseVwiOiBmdW5jdGlvbiAodGhpc3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5hcHBseSh0aGlzcCwgYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIFwia2V5c1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0X2tleXModmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgdm9pZCAwLCBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4geyBzdGF0ZTogXCJmdWxmaWxsZWRcIiwgdmFsdWU6IHZhbHVlIH07XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlbmFibGVzIHRvIFEgcHJvbWlzZXMuXG4gKiBAcGFyYW0gcHJvbWlzZSB0aGVuYWJsZSBwcm9taXNlXG4gKiBAcmV0dXJucyBhIFEgcHJvbWlzZVxuICovXG5mdW5jdGlvbiBjb2VyY2UocHJvbWlzZSkge1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0LCBkZWZlcnJlZC5ub3RpZnkpO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbi8qKlxuICogQW5ub3RhdGVzIGFuIG9iamVjdCBzdWNoIHRoYXQgaXQgd2lsbCBuZXZlciBiZVxuICogdHJhbnNmZXJyZWQgYXdheSBmcm9tIHRoaXMgcHJvY2VzcyBvdmVyIGFueSBwcm9taXNlXG4gKiBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXG4gKiBAcGFyYW0gb2JqZWN0XG4gKiBAcmV0dXJucyBwcm9taXNlIGEgd3JhcHBpbmcgb2YgdGhhdCBvYmplY3QgdGhhdFxuICogYWRkaXRpb25hbGx5IHJlc3BvbmRzIHRvIHRoZSBcImlzRGVmXCIgbWVzc2FnZVxuICogd2l0aG91dCBhIHJlamVjdGlvbi5cbiAqL1xuUS5tYXN0ZXIgPSBtYXN0ZXI7XG5mdW5jdGlvbiBtYXN0ZXIob2JqZWN0KSB7XG4gICAgcmV0dXJuIFByb21pc2Uoe1xuICAgICAgICBcImlzRGVmXCI6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSwgZnVuY3Rpb24gZmFsbGJhY2sob3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKG9iamVjdCwgb3AsIGFyZ3MpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFEob2JqZWN0KS5pbnNwZWN0KCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogU3ByZWFkcyB0aGUgdmFsdWVzIG9mIGEgcHJvbWlzZWQgYXJyYXkgb2YgYXJndW1lbnRzIGludG8gdGhlXG4gKiBmdWxmaWxsbWVudCBjYWxsYmFjay5cbiAqIEBwYXJhbSBmdWxmaWxsZWQgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyB2YXJpYWRpYyBhcmd1bWVudHMgZnJvbSB0aGVcbiAqIHByb21pc2VkIGFycmF5XG4gKiBAcGFyYW0gcmVqZWN0ZWQgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyB0aGUgZXhjZXB0aW9uIGlmIHRoZSBwcm9taXNlXG4gKiBpcyByZWplY3RlZC5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvciB0aHJvd24gZXhjZXB0aW9uIG9mXG4gKiBlaXRoZXIgY2FsbGJhY2suXG4gKi9cblEuc3ByZWFkID0gc3ByZWFkO1xuZnVuY3Rpb24gc3ByZWFkKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIFEodmFsdWUpLnNwcmVhZChmdWxmaWxsZWQsIHJlamVjdGVkKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuc3ByZWFkID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGwoKS50aGVuKGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICByZXR1cm4gZnVsZmlsbGVkLmFwcGx5KHZvaWQgMCwgYXJyYXkpO1xuICAgIH0sIHJlamVjdGVkKTtcbn07XG5cbi8qKlxuICogVGhlIGFzeW5jIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yIGZvciBnZW5lcmF0b3IgZnVuY3Rpb25zLCB0dXJuaW5nXG4gKiB0aGVtIGludG8gYXN5bmNocm9ub3VzIGdlbmVyYXRvcnMuICBBbHRob3VnaCBnZW5lcmF0b3JzIGFyZSBvbmx5IHBhcnRcbiAqIG9mIHRoZSBuZXdlc3QgRUNNQVNjcmlwdCA2IGRyYWZ0cywgdGhpcyBjb2RlIGRvZXMgbm90IGNhdXNlIHN5bnRheFxuICogZXJyb3JzIGluIG9sZGVyIGVuZ2luZXMuICBUaGlzIGNvZGUgc2hvdWxkIGNvbnRpbnVlIHRvIHdvcmsgYW5kIHdpbGxcbiAqIGluIGZhY3QgaW1wcm92ZSBvdmVyIHRpbWUgYXMgdGhlIGxhbmd1YWdlIGltcHJvdmVzLlxuICpcbiAqIEVTNiBnZW5lcmF0b3JzIGFyZSBjdXJyZW50bHkgcGFydCBvZiBWOCB2ZXJzaW9uIDMuMTkgd2l0aCB0aGVcbiAqIC0taGFybW9ueS1nZW5lcmF0b3JzIHJ1bnRpbWUgZmxhZyBlbmFibGVkLiAgU3BpZGVyTW9ua2V5IGhhcyBoYWQgdGhlbVxuICogZm9yIGxvbmdlciwgYnV0IHVuZGVyIGFuIG9sZGVyIFB5dGhvbi1pbnNwaXJlZCBmb3JtLiAgVGhpcyBmdW5jdGlvblxuICogd29ya3Mgb24gYm90aCBraW5kcyBvZiBnZW5lcmF0b3JzLlxuICpcbiAqIERlY29yYXRlcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBzdWNoIHRoYXQ6XG4gKiAgLSBpdCBtYXkgeWllbGQgcHJvbWlzZXNcbiAqICAtIGV4ZWN1dGlvbiB3aWxsIGNvbnRpbnVlIHdoZW4gdGhhdCBwcm9taXNlIGlzIGZ1bGZpbGxlZFxuICogIC0gdGhlIHZhbHVlIG9mIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpbGwgYmUgdGhlIGZ1bGZpbGxlZCB2YWx1ZVxuICogIC0gaXQgcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgKHdoZW4gdGhlIGdlbmVyYXRvclxuICogICAgc3RvcHMgaXRlcmF0aW5nKVxuICogIC0gdGhlIGRlY29yYXRlZCBmdW5jdGlvbiByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICogICAgb2YgdGhlIGdlbmVyYXRvciBvciB0aGUgZmlyc3QgcmVqZWN0ZWQgcHJvbWlzZSBhbW9uZyB0aG9zZVxuICogICAgeWllbGRlZC5cbiAqICAtIGlmIGFuIGVycm9yIGlzIHRocm93biBpbiB0aGUgZ2VuZXJhdG9yLCBpdCBwcm9wYWdhdGVzIHRocm91Z2hcbiAqICAgIGV2ZXJ5IGZvbGxvd2luZyB5aWVsZCB1bnRpbCBpdCBpcyBjYXVnaHQsIG9yIHVudGlsIGl0IGVzY2FwZXNcbiAqICAgIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gYWx0b2dldGhlciwgYW5kIGlzIHRyYW5zbGF0ZWQgaW50byBhXG4gKiAgICByZWplY3Rpb24gZm9yIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBkZWNvcmF0ZWQgZ2VuZXJhdG9yLlxuICovXG5RLmFzeW5jID0gYXN5bmM7XG5mdW5jdGlvbiBhc3luYyhtYWtlR2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gd2hlbiB2ZXJiIGlzIFwic2VuZFwiLCBhcmcgaXMgYSB2YWx1ZVxuICAgICAgICAvLyB3aGVuIHZlcmIgaXMgXCJ0aHJvd1wiLCBhcmcgaXMgYW4gZXhjZXB0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRpbnVlcih2ZXJiLCBhcmcpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgIC8vIFVudGlsIFY4IDMuMTkgLyBDaHJvbWl1bSAyOSBpcyByZWxlYXNlZCwgU3BpZGVyTW9ua2V5IGlzIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyBlbmdpbmUgdGhhdCBoYXMgYSBkZXBsb3llZCBiYXNlIG9mIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBnZW5lcmF0b3JzLlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgU00ncyBnZW5lcmF0b3JzIHVzZSB0aGUgUHl0aG9uLWluc3BpcmVkIHNlbWFudGljcyBvZlxuICAgICAgICAgICAgLy8gb3V0ZGF0ZWQgRVM2IGRyYWZ0cy4gIFdlIHdvdWxkIGxpa2UgdG8gc3VwcG9ydCBFUzYsIGJ1dCB3ZSdkIGFsc29cbiAgICAgICAgICAgIC8vIGxpa2UgdG8gbWFrZSBpdCBwb3NzaWJsZSB0byB1c2UgZ2VuZXJhdG9ycyBpbiBkZXBsb3llZCBicm93c2Vycywgc29cbiAgICAgICAgICAgIC8vIHdlIGFsc28gc3VwcG9ydCBQeXRob24tc3R5bGUgZ2VuZXJhdG9ycy4gIEF0IHNvbWUgcG9pbnQgd2UgY2FuIHJlbW92ZVxuICAgICAgICAgICAgLy8gdGhpcyBibG9jay5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdG9wSXRlcmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRVM2IEdlbmVyYXRvcnNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBnZW5lcmF0b3JbdmVyYl0oYXJnKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2hlbihyZXN1bHQudmFsdWUsIGNhbGxiYWNrLCBlcnJiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNwaWRlck1vbmtleSBHZW5lcmF0b3JzXG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IFJlbW92ZSB0aGlzIGNhc2Ugd2hlbiBTTSBkb2VzIEVTNiBnZW5lcmF0b3JzLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXShhcmcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdG9wSXRlcmF0aW9uKGV4Y2VwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBRKGV4Y2VwdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdoZW4ocmVzdWx0LCBjYWxsYmFjaywgZXJyYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IG1ha2VHZW5lcmF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY29udGludWVyLmJpbmQoY29udGludWVyLCBcIm5leHRcIik7XG4gICAgICAgIHZhciBlcnJiYWNrID0gY29udGludWVyLmJpbmQoY29udGludWVyLCBcInRocm93XCIpO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoZSBzcGF3biBmdW5jdGlvbiBpcyBhIHNtYWxsIHdyYXBwZXIgYXJvdW5kIGFzeW5jIHRoYXQgaW1tZWRpYXRlbHlcbiAqIGNhbGxzIHRoZSBnZW5lcmF0b3IgYW5kIGFsc28gZW5kcyB0aGUgcHJvbWlzZSBjaGFpbiwgc28gdGhhdCBhbnlcbiAqIHVuaGFuZGxlZCBlcnJvcnMgYXJlIHRocm93biBpbnN0ZWFkIG9mIGZvcndhcmRlZCB0byB0aGUgZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgaXQncyBleHRyZW1lbHkgY29tbW9uIHRvIHJ1blxuICogZ2VuZXJhdG9ycyBhdCB0aGUgdG9wLWxldmVsIHRvIHdvcmsgd2l0aCBsaWJyYXJpZXMuXG4gKi9cblEuc3Bhd24gPSBzcGF3bjtcbmZ1bmN0aW9uIHNwYXduKG1ha2VHZW5lcmF0b3IpIHtcbiAgICBRLmRvbmUoUS5hc3luYyhtYWtlR2VuZXJhdG9yKSgpKTtcbn1cblxuLy8gRklYTUU6IFJlbW92ZSB0aGlzIGludGVyZmFjZSBvbmNlIEVTNiBnZW5lcmF0b3JzIGFyZSBpbiBTcGlkZXJNb25rZXkuXG4vKipcbiAqIFRocm93cyBhIFJldHVyblZhbHVlIGV4Y2VwdGlvbiB0byBzdG9wIGFuIGFzeW5jaHJvbm91cyBnZW5lcmF0b3IuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgYSBzdG9wLWdhcCBtZWFzdXJlIHRvIHN1cHBvcnQgZ2VuZXJhdG9yIHJldHVyblxuICogdmFsdWVzIGluIG9sZGVyIEZpcmVmb3gvU3BpZGVyTW9ua2V5LiAgSW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEVTNlxuICogZ2VuZXJhdG9ycyBsaWtlIENocm9taXVtIDI5LCBqdXN0IHVzZSBcInJldHVyblwiIGluIHlvdXIgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHRoZSBzdXJyb3VuZGluZyBnZW5lcmF0b3JcbiAqIEB0aHJvd3MgUmV0dXJuVmFsdWUgZXhjZXB0aW9uIHdpdGggdGhlIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIC8vIEVTNiBzdHlsZVxuICogUS5hc3luYyhmdW5jdGlvbiogKCkge1xuICogICAgICB2YXIgZm9vID0geWllbGQgZ2V0Rm9vUHJvbWlzZSgpO1xuICogICAgICB2YXIgYmFyID0geWllbGQgZ2V0QmFyUHJvbWlzZSgpO1xuICogICAgICByZXR1cm4gZm9vICsgYmFyO1xuICogfSlcbiAqIC8vIE9sZGVyIFNwaWRlck1vbmtleSBzdHlsZVxuICogUS5hc3luYyhmdW5jdGlvbiAoKSB7XG4gKiAgICAgIHZhciBmb28gPSB5aWVsZCBnZXRGb29Qcm9taXNlKCk7XG4gKiAgICAgIHZhciBiYXIgPSB5aWVsZCBnZXRCYXJQcm9taXNlKCk7XG4gKiAgICAgIFEucmV0dXJuKGZvbyArIGJhcik7XG4gKiB9KVxuICovXG5RW1wicmV0dXJuXCJdID0gX3JldHVybjtcbmZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgUVJldHVyblZhbHVlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgcHJvbWlzZWQgZnVuY3Rpb24gZGVjb3JhdG9yIGVuc3VyZXMgdGhhdCBhbnkgcHJvbWlzZSBhcmd1bWVudHNcbiAqIGFyZSBzZXR0bGVkIGFuZCBwYXNzZWQgYXMgdmFsdWVzIChgdGhpc2AgaXMgYWxzbyBzZXR0bGVkIGFuZCBwYXNzZWRcbiAqIGFzIGEgdmFsdWUpLiAgSXQgd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZSByZXN1bHQgb2YgYSBmdW5jdGlvbiBpc1xuICogYWx3YXlzIGEgcHJvbWlzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGFkZCA9IFEucHJvbWlzZWQoZnVuY3Rpb24gKGEsIGIpIHtcbiAqICAgICByZXR1cm4gYSArIGI7XG4gKiB9KTtcbiAqIGFkZChRKGEpLCBRKEIpKTtcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gZGVjb3JhdGVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGhhcyBiZWVuIGRlY29yYXRlZC5cbiAqL1xuUS5wcm9taXNlZCA9IHByb21pc2VkO1xuZnVuY3Rpb24gcHJvbWlzZWQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3ByZWFkKFt0aGlzLCBhbGwoYXJndW1lbnRzKV0sIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbi8qKlxuICogc2VuZHMgYSBtZXNzYWdlIHRvIGEgdmFsdWUgaW4gYSBmdXR1cmUgdHVyblxuICogQHBhcmFtIG9iamVjdCogdGhlIHJlY2lwaWVudFxuICogQHBhcmFtIG9wIHRoZSBuYW1lIG9mIHRoZSBtZXNzYWdlIG9wZXJhdGlvbiwgZS5nLiwgXCJ3aGVuXCIsXG4gKiBAcGFyYW0gYXJncyBmdXJ0aGVyIGFyZ3VtZW50cyB0byBiZSBmb3J3YXJkZWQgdG8gdGhlIG9wZXJhdGlvblxuICogQHJldHVybnMgcmVzdWx0IHtQcm9taXNlfSBhIHByb21pc2UgZm9yIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxuICovXG5RLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG5mdW5jdGlvbiBkaXNwYXRjaChvYmplY3QsIG9wLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChvcCwgYXJncyk7XG59XG5cblByb21pc2UucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKG9wLCBhcmdzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucHJvbWlzZURpc3BhdGNoKGRlZmVycmVkLnJlc29sdmUsIG9wLCBhcmdzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBwcm9wZXJ0eSB0byBnZXRcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHByb3BlcnR5IHZhbHVlXG4gKi9cblEuZ2V0ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChcImdldFwiLCBba2V5XSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJnZXRcIiwgW2tleV0pO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3Igb2JqZWN0IG9iamVjdFxuICogQHBhcmFtIG5hbWUgICAgICBuYW1lIG9mIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHZhbHVlICAgICBuZXcgdmFsdWUgb2YgcHJvcGVydHlcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICovXG5RLnNldCA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwic2V0XCIsIFtrZXksIHZhbHVlXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwic2V0XCIsIFtrZXksIHZhbHVlXSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZXMgYSBwcm9wZXJ0eSBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBwcm9wZXJ0eSB0byBkZWxldGVcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICovXG5RLmRlbCA9IC8vIFhYWCBsZWdhY3lcblFbXCJkZWxldGVcIl0gPSBmdW5jdGlvbiAob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwiZGVsZXRlXCIsIFtrZXldKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbCA9IC8vIFhYWCBsZWdhY3lcblByb21pc2UucHJvdG90eXBlW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwiZGVsZXRlXCIsIFtrZXldKTtcbn07XG5cbi8qKlxuICogSW52b2tlcyBhIG1ldGhvZCBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBtZXRob2QgdG8gaW52b2tlXG4gKiBAcGFyYW0gdmFsdWUgICAgIGEgdmFsdWUgdG8gcG9zdCwgdHlwaWNhbGx5IGFuIGFycmF5IG9mXG4gKiAgICAgICAgICAgICAgICAgIGludm9jYXRpb24gYXJndW1lbnRzIGZvciBwcm9taXNlcyB0aGF0XG4gKiAgICAgICAgICAgICAgICAgIGFyZSB1bHRpbWF0ZWx5IGJhY2tlZCB3aXRoIGByZXNvbHZlYCB2YWx1ZXMsXG4gKiAgICAgICAgICAgICAgICAgIGFzIG9wcG9zZWQgdG8gdGhvc2UgYmFja2VkIHdpdGggVVJMc1xuICogICAgICAgICAgICAgICAgICB3aGVyZWluIHRoZSBwb3N0ZWQgdmFsdWUgY2FuIGJlIGFueVxuICogICAgICAgICAgICAgICAgICBKU09OIHNlcmlhbGl6YWJsZSBvYmplY3QuXG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWVcbiAqL1xuLy8gYm91bmQgbG9jYWxseSBiZWNhdXNlIGl0IGlzIHVzZWQgYnkgb3RoZXIgbWV0aG9kc1xuUS5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUS5wb3N0ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgYXJncykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcmdzXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUHJvbWlzZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcmdzXSk7XG59O1xuXG4vKipcbiAqIEludm9rZXMgYSBtZXRob2QgaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0gbmFtZSAgICAgIG5hbWUgb2YgbWV0aG9kIHRvIGludm9rZVxuICogQHBhcmFtIC4uLmFyZ3MgICBhcnJheSBvZiBpbnZvY2F0aW9uIGFyZ3VtZW50c1xuICogQHJldHVybiBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKi9cblEuc2VuZCA9IC8vIFhYWCBNYXJrIE1pbGxlcidzIHByb3Bvc2VkIHBhcmxhbmNlXG5RLm1jYWxsID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblEuaW52b2tlID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSAvKi4uLmFyZ3MqLykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDIpXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZW5kID0gLy8gWFhYIE1hcmsgTWlsbGVyJ3MgcHJvcG9zZWQgcGFybGFuY2VcblByb21pc2UucHJvdG90eXBlLm1jYWxsID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblByb21pc2UucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpXSk7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIHByb21pc2VkIGZ1bmN0aW9uIGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IGZ1bmN0aW9uXG4gKiBAcGFyYW0gYXJncyAgICAgIGFycmF5IG9mIGFwcGxpY2F0aW9uIGFyZ3VtZW50c1xuICovXG5RLmZhcHBseSA9IGZ1bmN0aW9uIChvYmplY3QsIGFyZ3MpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwiYXBwbHlcIiwgW3ZvaWQgMCwgYXJnc10pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmFwcGx5ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChcImFwcGx5XCIsIFt2b2lkIDAsIGFyZ3NdKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIHByb21pc2VkIGZ1bmN0aW9uIGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IGZ1bmN0aW9uXG4gKiBAcGFyYW0gLi4uYXJncyAgIGFycmF5IG9mIGFwcGxpY2F0aW9uIGFyZ3VtZW50c1xuICovXG5RW1widHJ5XCJdID1cblEuZmNhbGwgPSBmdW5jdGlvbiAob2JqZWN0IC8qIC4uLmFyZ3MqLykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJhcHBseVwiLCBbdm9pZCAwLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mY2FsbCA9IGZ1bmN0aW9uICgvKi4uLmFyZ3MqLykge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwiYXBwbHlcIiwgW3ZvaWQgMCwgYXJyYXlfc2xpY2UoYXJndW1lbnRzKV0pO1xufTtcblxuLyoqXG4gKiBCaW5kcyB0aGUgcHJvbWlzZWQgZnVuY3Rpb24sIHRyYW5zZm9ybWluZyByZXR1cm4gdmFsdWVzIGludG8gYSBmdWxmaWxsZWRcbiAqIHByb21pc2UgYW5kIHRocm93biBlcnJvcnMgaW50byBhIHJlamVjdGVkIG9uZS5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgZnVuY3Rpb25cbiAqIEBwYXJhbSAuLi5hcmdzICAgYXJyYXkgb2YgYXBwbGljYXRpb24gYXJndW1lbnRzXG4gKi9cblEuZmJpbmQgPSBmdW5jdGlvbiAob2JqZWN0IC8qLi4uYXJncyovKSB7XG4gICAgdmFyIHByb21pc2UgPSBRKG9iamVjdCk7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiBmYm91bmQoKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLmRpc3BhdGNoKFwiYXBwbHlcIiwgW1xuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGFyZ3MuY29uY2F0KGFycmF5X3NsaWNlKGFyZ3VtZW50cykpXG4gICAgICAgIF0pO1xuICAgIH07XG59O1xuUHJvbWlzZS5wcm90b3R5cGUuZmJpbmQgPSBmdW5jdGlvbiAoLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIHJldHVybiBmdW5jdGlvbiBmYm91bmQoKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLmRpc3BhdGNoKFwiYXBwbHlcIiwgW1xuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGFyZ3MuY29uY2F0KGFycmF5X3NsaWNlKGFyZ3VtZW50cykpXG4gICAgICAgIF0pO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFJlcXVlc3RzIHRoZSBuYW1lcyBvZiB0aGUgb3duZWQgcHJvcGVydGllcyBvZiBhIHByb21pc2VkXG4gKiBvYmplY3QgaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSBrZXlzIG9mIHRoZSBldmVudHVhbGx5IHNldHRsZWQgb2JqZWN0XG4gKi9cblEua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwia2V5c1wiLCBbXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwia2V5c1wiLCBbXSk7XG59O1xuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIHByb21pc2VzIGludG8gYSBwcm9taXNlIGZvciBhbiBhcnJheS4gIElmIGFueSBvZlxuICogdGhlIHByb21pc2VzIGdldHMgcmVqZWN0ZWQsIHRoZSB3aG9sZSBhcnJheSBpcyByZWplY3RlZCBpbW1lZGlhdGVseS5cbiAqIEBwYXJhbSB7QXJyYXkqfSBhbiBhcnJheSAob3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkpIG9mIHZhbHVlcyAob3JcbiAqIHByb21pc2VzIGZvciB2YWx1ZXMpXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlc1xuICovXG4vLyBCeSBNYXJrIE1pbGxlclxuLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9c3RyYXdtYW46Y29uY3VycmVuY3kmcmV2PTEzMDg3NzY1MjEjYWxsZnVsZmlsbGVkXG5RLmFsbCA9IGFsbDtcbmZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICAgIHJldHVybiB3aGVuKHByb21pc2VzLCBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICAgICAgdmFyIHBlbmRpbmdDb3VudCA9IDA7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIGFycmF5X3JlZHVjZShwcm9taXNlcywgZnVuY3Rpb24gKHVuZGVmaW5lZCwgcHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzbmFwc2hvdDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc1Byb21pc2UocHJvbWlzZSkgJiZcbiAgICAgICAgICAgICAgICAoc25hcHNob3QgPSBwcm9taXNlLmluc3BlY3QoKSkuc3RhdGUgPT09IFwiZnVsZmlsbGVkXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzW2luZGV4XSA9IHNuYXBzaG90LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICArK3BlbmRpbmdDb3VudDtcbiAgICAgICAgICAgICAgICB3aGVuKFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0tcGVuZGluZ0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoeyBpbmRleDogaW5kZXgsIHZhbHVlOiBwcm9ncmVzcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHZvaWQgMCk7XG4gICAgICAgIGlmIChwZW5kaW5nQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocHJvbWlzZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0pO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgcmVzb2x2ZWQgcHJvbWlzZSBvZiBhbiBhcnJheS4gUHJpb3IgcmVqZWN0ZWQgcHJvbWlzZXMgYXJlXG4gKiBpZ25vcmVkLiAgUmVqZWN0cyBvbmx5IGlmIGFsbCBwcm9taXNlcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcGFyYW0ge0FycmF5Kn0gYW4gYXJyYXkgY29udGFpbmluZyB2YWx1ZXMgb3IgcHJvbWlzZXMgZm9yIHZhbHVlc1xuICogQHJldHVybnMgYSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVzb2x2ZWQgcHJvbWlzZSxcbiAqIG9yIGEgcmVqZWN0ZWQgcHJvbWlzZSBpZiBhbGwgcHJvbWlzZXMgYXJlIHJlamVjdGVkLlxuICovXG5RLmFueSA9IGFueTtcblxuZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcigpO1xuICAgIHZhciBwZW5kaW5nQ291bnQgPSAwO1xuICAgIGFycmF5X3JlZHVjZShwcm9taXNlcywgZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gcHJvbWlzZXNbaW5kZXhdO1xuXG4gICAgICAgIHBlbmRpbmdDb3VudCsrO1xuXG4gICAgICAgIHdoZW4ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpO1xuICAgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXN1bHQpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKCkge1xuICAgICAgICAgICAgcGVuZGluZ0NvdW50LS07XG4gICAgICAgICAgICBpZiAocGVuZGluZ0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgXCJDYW4ndCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgZnJvbSBhbnkgcHJvbWlzZSwgYWxsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9taXNlcyB3ZXJlIHJlamVjdGVkLlwiXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Qcm9ncmVzcyhwcm9ncmVzcykge1xuICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhbnkodGhpcyk7XG59O1xuXG4vKipcbiAqIFdhaXRzIGZvciBhbGwgcHJvbWlzZXMgdG8gYmUgc2V0dGxlZCwgZWl0aGVyIGZ1bGZpbGxlZCBvclxuICogcmVqZWN0ZWQuICBUaGlzIGlzIGRpc3RpbmN0IGZyb20gYGFsbGAgc2luY2UgdGhhdCB3b3VsZCBzdG9wXG4gKiB3YWl0aW5nIGF0IHRoZSBmaXJzdCByZWplY3Rpb24uICBUaGUgcHJvbWlzZSByZXR1cm5lZCBieVxuICogYGFsbFJlc29sdmVkYCB3aWxsIG5ldmVyIGJlIHJlamVjdGVkLlxuICogQHBhcmFtIHByb21pc2VzIGEgcHJvbWlzZSBmb3IgYW4gYXJyYXkgKG9yIGFuIGFycmF5KSBvZiBwcm9taXNlc1xuICogKG9yIHZhbHVlcylcbiAqIEByZXR1cm4gYSBwcm9taXNlIGZvciBhbiBhcnJheSBvZiBwcm9taXNlc1xuICovXG5RLmFsbFJlc29sdmVkID0gZGVwcmVjYXRlKGFsbFJlc29sdmVkLCBcImFsbFJlc29sdmVkXCIsIFwiYWxsU2V0dGxlZFwiKTtcbmZ1bmN0aW9uIGFsbFJlc29sdmVkKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHdoZW4ocHJvbWlzZXMsIGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgICAgICBwcm9taXNlcyA9IGFycmF5X21hcChwcm9taXNlcywgUSk7XG4gICAgICAgIHJldHVybiB3aGVuKGFsbChhcnJheV9tYXAocHJvbWlzZXMsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2hlbihwcm9taXNlLCBub29wLCBub29wKTtcbiAgICAgICAgfSkpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGxSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWxsUmVzb2x2ZWQodGhpcyk7XG59O1xuXG4vKipcbiAqIEBzZWUgUHJvbWlzZSNhbGxTZXR0bGVkXG4gKi9cblEuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG5mdW5jdGlvbiBhbGxTZXR0bGVkKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZXMpLmFsbFNldHRsZWQoKTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBhcnJheSBvZiBwcm9taXNlcyBpbnRvIGEgcHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgdGhlaXIgc3RhdGVzIChhc1xuICogcmV0dXJuZWQgYnkgYGluc3BlY3RgKSB3aGVuIHRoZXkgaGF2ZSBhbGwgc2V0dGxlZC5cbiAqIEBwYXJhbSB7QXJyYXlbQW55Kl19IHZhbHVlcyBhbiBhcnJheSAob3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkpIG9mIHZhbHVlcyAob3JcbiAqIHByb21pc2VzIGZvciB2YWx1ZXMpXG4gKiBAcmV0dXJucyB7QXJyYXlbU3RhdGVdfSBhbiBhcnJheSBvZiBzdGF0ZXMgZm9yIHRoZSByZXNwZWN0aXZlIHZhbHVlcy5cbiAqL1xuUHJvbWlzZS5wcm90b3R5cGUuYWxsU2V0dGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgICAgICByZXR1cm4gYWxsKGFycmF5X21hcChwcm9taXNlcywgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBRKHByb21pc2UpO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVnYXJkbGVzcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5pbnNwZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlZ2FyZGxlc3MsIHJlZ2FyZGxlc3MpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENhcHR1cmVzIHRoZSBmYWlsdXJlIG9mIGEgcHJvbWlzZSwgZ2l2aW5nIGFuIG9wb3J0dW5pdHkgdG8gcmVjb3ZlclxuICogd2l0aCBhIGNhbGxiYWNrLiAgSWYgdGhlIGdpdmVuIHByb21pc2UgaXMgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgaXMgZnVsZmlsbGVkLlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlIGZvciBzb21ldGhpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIGZ1bGZpbGwgdGhlIHJldHVybmVkIHByb21pc2UgaWYgdGhlXG4gKiBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGNhbGxiYWNrXG4gKi9cblEuZmFpbCA9IC8vIFhYWCBsZWdhY3lcblFbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvYmplY3QsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS50aGVuKHZvaWQgMCwgcmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmFpbCA9IC8vIFhYWCBsZWdhY3lcblByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAocmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgcmVqZWN0ZWQpO1xufTtcblxuLyoqXG4gKiBBdHRhY2hlcyBhIGxpc3RlbmVyIHRoYXQgY2FuIHJlc3BvbmQgdG8gcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBmcm9tIGFcbiAqIHByb21pc2UncyBvcmlnaW5hdGluZyBkZWZlcnJlZC4gVGhpcyBsaXN0ZW5lciByZWNlaXZlcyB0aGUgZXhhY3QgYXJndW1lbnRzXG4gKiBwYXNzZWQgdG8gYGBkZWZlcnJlZC5ub3RpZnlgYC5cbiAqIEBwYXJhbSB7QW55Kn0gcHJvbWlzZSBmb3Igc29tZXRoaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB0byByZWNlaXZlIGFueSBwcm9ncmVzcyBub3RpZmljYXRpb25zXG4gKiBAcmV0dXJucyB0aGUgZ2l2ZW4gcHJvbWlzZSwgdW5jaGFuZ2VkXG4gKi9cblEucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbmZ1bmN0aW9uIHByb2dyZXNzKG9iamVjdCwgcHJvZ3Jlc3NlZCkge1xuICAgIHJldHVybiBRKG9iamVjdCkudGhlbih2b2lkIDAsIHZvaWQgMCwgcHJvZ3Jlc3NlZCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgdm9pZCAwLCBwcm9ncmVzc2VkKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYW4gb3Bwb3J0dW5pdHkgdG8gb2JzZXJ2ZSB0aGUgc2V0dGxpbmcgb2YgYSBwcm9taXNlLFxuICogcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCBvciByZWplY3RlZC4gIEZvcndhcmRzXG4gKiB0aGUgcmVzb2x1dGlvbiB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aGVuIHRoZSBjYWxsYmFjayBpcyBkb25lLlxuICogVGhlIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBwcm9taXNlIHRvIGRlZmVyIGNvbXBsZXRpb24uXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIG9ic2VydmUgdGhlIHJlc29sdXRpb24gb2YgdGhlIGdpdmVuXG4gKiBwcm9taXNlLCB0YWtlcyBubyBhcmd1bWVudHMuXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlIHdoZW5cbiAqIGBgZmluYGAgaXMgZG9uZS5cbiAqL1xuUS5maW4gPSAvLyBYWFggbGVnYWN5XG5RW1wiZmluYWxseVwiXSA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KVtcImZpbmFsbHlcIl0oY2FsbGJhY2spO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmluID0gLy8gWFhYIGxlZ2FjeVxuUHJvbWlzZS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBRKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suZmNhbGwoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUT0RPIGF0dGVtcHQgdG8gcmVjeWNsZSB0aGUgcmVqZWN0aW9uIHdpdGggXCJ0aGlzXCIuXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5mY2FsbCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogVGVybWluYXRlcyBhIGNoYWluIG9mIHByb21pc2VzLCBmb3JjaW5nIHJlamVjdGlvbnMgdG8gYmVcbiAqIHRocm93biBhcyBleGNlcHRpb25zLlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlIGF0IHRoZSBlbmQgb2YgYSBjaGFpbiBvZiBwcm9taXNlc1xuICogQHJldHVybnMgbm90aGluZ1xuICovXG5RLmRvbmUgPSBmdW5jdGlvbiAob2JqZWN0LCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZG9uZShmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG4gICAgdmFyIG9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gZm9yd2FyZCB0byBhIGZ1dHVyZSB0dXJuIHNvIHRoYXQgYGB3aGVuYGBcbiAgICAgICAgLy8gZG9lcyBub3QgY2F0Y2ggaXQgYW5kIHR1cm4gaXQgaW50byBhIHJlamVjdGlvbi5cbiAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWtlU3RhY2tUcmFjZUxvbmcoZXJyb3IsIHByb21pc2UpO1xuICAgICAgICAgICAgaWYgKFEub25lcnJvcikge1xuICAgICAgICAgICAgICAgIFEub25lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgYG5leHRUaWNrYGluZyB2aWEgYW4gdW5uZWNlc3NhcnkgYHdoZW5gLlxuICAgIHZhciBwcm9taXNlID0gZnVsZmlsbGVkIHx8IHJlamVjdGVkIHx8IHByb2dyZXNzID9cbiAgICAgICAgdGhpcy50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSA6XG4gICAgICAgIHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgICBvblVuaGFuZGxlZEVycm9yID0gcHJvY2Vzcy5kb21haW4uYmluZChvblVuaGFuZGxlZEVycm9yKTtcbiAgICB9XG5cbiAgICBwcm9taXNlLnRoZW4odm9pZCAwLCBvblVuaGFuZGxlZEVycm9yKTtcbn07XG5cbi8qKlxuICogQ2F1c2VzIGEgcHJvbWlzZSB0byBiZSByZWplY3RlZCBpZiBpdCBkb2VzIG5vdCBnZXQgZnVsZmlsbGVkIGJlZm9yZVxuICogc29tZSBtaWxsaXNlY29uZHMgdGltZSBvdXQuXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaWxsaXNlY29uZHMgdGltZW91dFxuICogQHBhcmFtIHtBbnkqfSBjdXN0b20gZXJyb3IgbWVzc2FnZSBvciBFcnJvciBvYmplY3QgKG9wdGlvbmFsKVxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW4gcHJvbWlzZSBpZiBpdCBpc1xuICogZnVsZmlsbGVkIGJlZm9yZSB0aGUgdGltZW91dCwgb3RoZXJ3aXNlIHJlamVjdGVkLlxuICovXG5RLnRpbWVvdXQgPSBmdW5jdGlvbiAob2JqZWN0LCBtcywgZXJyb3IpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLnRpbWVvdXQobXMsIGVycm9yKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAobXMsIGVycm9yKSB7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZXJyb3IgfHwgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihlcnJvciB8fCBcIlRpbWVkIG91dCBhZnRlciBcIiArIG1zICsgXCIgbXNcIik7XG4gICAgICAgICAgICBlcnJvci5jb2RlID0gXCJFVElNRURPVVRcIjtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgIH0sIG1zKTtcblxuICAgIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChleGNlcHRpb24pO1xuICAgIH0sIGRlZmVycmVkLm5vdGlmeSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSBnaXZlbiB2YWx1ZSAob3IgcHJvbWlzZWQgdmFsdWUpLCBzb21lXG4gKiBtaWxsaXNlY29uZHMgYWZ0ZXIgaXQgcmVzb2x2ZWQuIFBhc3NlcyByZWplY3Rpb25zIGltbWVkaWF0ZWx5LlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlXG4gKiBAcGFyYW0ge051bWJlcn0gbWlsbGlzZWNvbmRzXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlIGFmdGVyIG1pbGxpc2Vjb25kc1xuICogdGltZSBoYXMgZWxhcHNlZCBzaW5jZSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW4gcHJvbWlzZS5cbiAqIElmIHRoZSBnaXZlbiBwcm9taXNlIHJlamVjdHMsIHRoYXQgaXMgcGFzc2VkIGltbWVkaWF0ZWx5LlxuICovXG5RLmRlbGF5ID0gZnVuY3Rpb24gKG9iamVjdCwgdGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgdGltZW91dCA9IG9iamVjdDtcbiAgICAgICAgb2JqZWN0ID0gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4gUShvYmplY3QpLmRlbGF5KHRpbWVvdXQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUGFzc2VzIGEgY29udGludWF0aW9uIHRvIGEgTm9kZSBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkIHdpdGggdGhlIGdpdmVuXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgYXMgYW4gYXJyYXksIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqXG4gKiAgICAgIFEubmZhcHBseShGUy5yZWFkRmlsZSwgW19fZmlsZW5hbWVdKVxuICogICAgICAudGhlbihmdW5jdGlvbiAoY29udGVudCkge1xuICogICAgICB9KVxuICpcbiAqL1xuUS5uZmFwcGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEoY2FsbGJhY2spLm5mYXBwbHkoYXJncyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmFwcGx5ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3MpO1xuICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICB0aGlzLmZhcHBseShub2RlQXJncykuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBQYXNzZXMgYSBjb250aW51YXRpb24gdG8gYSBOb2RlIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAqIGFyZ3VtZW50cyBwcm92aWRlZCBpbmRpdmlkdWFsbHksIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqIEBleGFtcGxlXG4gKiBRLm5mY2FsbChGUy5yZWFkRmlsZSwgX19maWxlbmFtZSlcbiAqIC50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gKiB9KVxuICpcbiAqL1xuUS5uZmNhbGwgPSBmdW5jdGlvbiAoY2FsbGJhY2sgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIFEoY2FsbGJhY2spLm5mYXBwbHkoYXJncyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmNhbGwgPSBmdW5jdGlvbiAoLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgbm9kZUFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIHRoaXMuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFdyYXBzIGEgTm9kZUpTIGNvbnRpbnVhdGlvbiBwYXNzaW5nIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGFuIGVxdWl2YWxlbnRcbiAqIHZlcnNpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqIEBleGFtcGxlXG4gKiBRLm5mYmluZChGUy5yZWFkRmlsZSwgX19maWxlbmFtZSkoXCJ1dGYtOFwiKVxuICogLnRoZW4oY29uc29sZS5sb2cpXG4gKiAuZG9uZSgpXG4gKi9cblEubmZiaW5kID1cblEuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKGNhbGxiYWNrIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGJhc2VBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZUFyZ3MgPSBiYXNlQXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSk7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICAgICAgUShjYWxsYmFjaykuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmJpbmQgPVxuUHJvbWlzZS5wcm90b3R5cGUuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICByZXR1cm4gUS5kZW5vZGVpZnkuYXBwbHkodm9pZCAwLCBhcmdzKTtcbn07XG5cblEubmJpbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNwIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGJhc2VBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZUFyZ3MgPSBiYXNlQXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSk7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICAgICAgZnVuY3Rpb24gYm91bmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpc3AsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgUShib3VuZCkuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uYmluZCA9IGZ1bmN0aW9uICgvKnRoaXNwLCAuLi5hcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMCk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIHJldHVybiBRLm5iaW5kLmFwcGx5KHZvaWQgMCwgYXJncyk7XG59O1xuXG4vKipcbiAqIENhbGxzIGEgbWV0aG9kIG9mIGEgTm9kZS1zdHlsZSBvYmplY3QgdGhhdCBhY2NlcHRzIGEgTm9kZS1zdHlsZVxuICogY2FsbGJhY2sgd2l0aCBhIGdpdmVuIGFycmF5IG9mIGFyZ3VtZW50cywgcGx1cyBhIHByb3ZpZGVkIGNhbGxiYWNrLlxuICogQHBhcmFtIG9iamVjdCBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIG5hbWVkIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kIG9mIG9iamVjdFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kOyB0aGUgY2FsbGJhY2tcbiAqIHdpbGwgYmUgcHJvdmlkZWQgYnkgUSBhbmQgYXBwZW5kZWQgdG8gdGhlc2UgYXJndW1lbnRzLlxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgdmFsdWUgb3IgZXJyb3JcbiAqL1xuUS5ubWFwcGx5ID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblEubnBvc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5ucG9zdChuYW1lLCBhcmdzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUHJvbWlzZS5wcm90b3R5cGUubnBvc3QgPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3MgfHwgW10pO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBub2RlQXJnc10pLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogQ2FsbHMgYSBtZXRob2Qgb2YgYSBOb2RlLXN0eWxlIG9iamVjdCB0aGF0IGFjY2VwdHMgYSBOb2RlLXN0eWxlXG4gKiBjYWxsYmFjaywgZm9yd2FyZGluZyB0aGUgZ2l2ZW4gdmFyaWFkaWMgYXJndW1lbnRzLCBwbHVzIGEgcHJvdmlkZWRcbiAqIGNhbGxiYWNrIGFyZ3VtZW50LlxuICogQHBhcmFtIG9iamVjdCBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIG5hbWVkIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kIG9mIG9iamVjdFxuICogQHBhcmFtIC4uLmFyZ3MgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIG1ldGhvZDsgdGhlIGNhbGxiYWNrIHdpbGxcbiAqIGJlIHByb3ZpZGVkIGJ5IFEgYW5kIGFwcGVuZGVkIHRvIHRoZXNlIGFyZ3VtZW50cy5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9yIGVycm9yXG4gKi9cblEubnNlbmQgPSAvLyBYWFggQmFzZWQgb24gTWFyayBNaWxsZXIncyBwcm9wb3NlZCBcInNlbmRcIlxuUS5ubWNhbGwgPSAvLyBYWFggQmFzZWQgb24gXCJSZWRzYW5kcm8nc1wiIHByb3Bvc2FsXG5RLm5pbnZva2UgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIG5vZGVBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBub2RlQXJnc10pLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5zZW5kID0gLy8gWFhYIEJhc2VkIG9uIE1hcmsgTWlsbGVyJ3MgcHJvcG9zZWQgXCJzZW5kXCJcblByb21pc2UucHJvdG90eXBlLm5tY2FsbCA9IC8vIFhYWCBCYXNlZCBvbiBcIlJlZHNhbmRybydzXCIgcHJvcG9zYWxcblByb21pc2UucHJvdG90eXBlLm5pbnZva2UgPSBmdW5jdGlvbiAobmFtZSAvKi4uLmFyZ3MqLykge1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBub2RlQXJncy5wdXNoKGRlZmVycmVkLm1ha2VOb2RlUmVzb2x2ZXIoKSk7XG4gICAgdGhpcy5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIG5vZGVBcmdzXSkuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBJZiBhIGZ1bmN0aW9uIHdvdWxkIGxpa2UgdG8gc3VwcG9ydCBib3RoIE5vZGUgY29udGludWF0aW9uLXBhc3Npbmctc3R5bGUgYW5kXG4gKiBwcm9taXNlLXJldHVybmluZy1zdHlsZSwgaXQgY2FuIGVuZCBpdHMgaW50ZXJuYWwgcHJvbWlzZSBjaGFpbiB3aXRoXG4gKiBgbm9kZWlmeShub2RlYmFjaylgLCBmb3J3YXJkaW5nIHRoZSBvcHRpb25hbCBub2RlYmFjayBhcmd1bWVudC4gIElmIHRoZSB1c2VyXG4gKiBlbGVjdHMgdG8gdXNlIGEgbm9kZWJhY2ssIHRoZSByZXN1bHQgd2lsbCBiZSBzZW50IHRoZXJlLiAgSWYgdGhleSBkbyBub3RcbiAqIHBhc3MgYSBub2RlYmFjaywgdGhleSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdCBwcm9taXNlLlxuICogQHBhcmFtIG9iamVjdCBhIHJlc3VsdCAob3IgYSBwcm9taXNlIGZvciBhIHJlc3VsdClcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5vZGViYWNrIGEgTm9kZS5qcy1zdHlsZSBjYWxsYmFja1xuICogQHJldHVybnMgZWl0aGVyIHRoZSBwcm9taXNlIG9yIG5vdGhpbmdcbiAqL1xuUS5ub2RlaWZ5ID0gbm9kZWlmeTtcbmZ1bmN0aW9uIG5vZGVpZnkob2JqZWN0LCBub2RlYmFjaykge1xuICAgIHJldHVybiBRKG9iamVjdCkubm9kZWlmeShub2RlYmFjayk7XG59XG5cblByb21pc2UucHJvdG90eXBlLm5vZGVpZnkgPSBmdW5jdGlvbiAobm9kZWJhY2spIHtcbiAgICBpZiAobm9kZWJhY2spIHtcbiAgICAgICAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbm9kZWJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbm9kZWJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cblEubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlEubm9Db25mbGljdCBvbmx5IHdvcmtzIHdoZW4gUSBpcyB1c2VkIGFzIGEgZ2xvYmFsXCIpO1xufTtcblxuLy8gQWxsIGNvZGUgYmVmb3JlIHRoaXMgcG9pbnQgd2lsbCBiZSBmaWx0ZXJlZCBmcm9tIHN0YWNrIHRyYWNlcy5cbnZhciBxRW5kaW5nTGluZSA9IGNhcHR1cmVMaW5lKCk7XG5cbnJldHVybiBRO1xuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3EvcS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3NyYy9jcm9zc2ZpbHRlclwiKS5jcm9zc2ZpbHRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJmdW5jdGlvbiBjcm9zc2ZpbHRlcl9pZGVudGl0eShkKSB7XG4gIHJldHVybiBkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyb3NzZmlsdGVyX2lkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9pZGVudGl0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzL2Jyb3dzZXIuanMnKS5uZXh0VGljaztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpbW1lZGlhdGVJZHMgPSB7fTtcbnZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkgeyB0aW1lb3V0LmNsb3NlKCk7IH07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG4gIHZhciBpZCA9IG5leHRJbW1lZGlhdGVJZCsrO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaW1tZWRpYXRlSWRzW2lkXSA9IHRydWU7XG5cbiAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcbiAgICBpZiAoaW1tZWRpYXRlSWRzW2lkXSkge1xuICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3VcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuICAgICAgZXhwb3J0cy5jbGVhckltbWVkaWF0ZShpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWQ7XG59O1xuXG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG4gIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hdG9vbC1idWlsZC9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG52YXIgYWdncmVnYXRvcnMgPSB7XG4gIC8vIENvbGxlY3Rpb25zXG4gICRzdW06ICRzdW0sXG4gICRhdmc6ICRhdmcsXG4gICRtYXg6ICRtYXgsXG4gICRtaW46ICRtaW4sXG5cbiAgLy8gUGlja2Vyc1xuICAkY291bnQ6ICRjb3VudCxcbiAgJGZpcnN0OiAkZmlyc3QsXG4gICRsYXN0OiAkbGFzdCxcbiAgJGdldDogJGdldCxcbiAgJG50aDogJGdldCwgLy8gbnRoIGlzIHNhbWUgYXMgdXNpbmcgYSBnZXRcbiAgJG50aExhc3Q6ICRudGhMYXN0LFxuICAkbnRoUGN0OiAkbnRoUGN0LFxuICAkbWFwOiAkbWFwLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFrZVZhbHVlQWNjZXNzb3I6IG1ha2VWYWx1ZUFjY2Vzc29yLFxuICBhZ2dyZWdhdG9yczogYWdncmVnYXRvcnMsXG4gIGV4dHJhY3RLZXlWYWxPckFycmF5OiBleHRyYWN0S2V5VmFsT3JBcnJheSxcbiAgcGFyc2VBZ2dyZWdhdG9yUGFyYW1zOiBwYXJzZUFnZ3JlZ2F0b3JQYXJhbXMsXG59XG4gIC8vIFRoaXMgaXMgdXNlZCB0byBidWlsZCBhZ2dyZWdhdGlvbiBzdGFja3MgZm9yIHN1Yi1yZWR1Y3Rpb1xuICAvLyBhZ2dyZWdhdGlvbnMsIG9yIHBsdWNraW5nIHZhbHVlcyBmb3IgdXNlIGluIGZpbHRlcnMgZnJvbSB0aGUgZGF0YVxuZnVuY3Rpb24gbWFrZVZhbHVlQWNjZXNzb3Iob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc1N0cmluZ1N5bnRheChvYmopKSB7XG4gICAgICBvYmogPSBjb252ZXJ0QWdncmVnYXRvclN0cmluZyhvYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE11c3QgYmUgYSBjb2x1bW4ga2V5LiBSZXR1cm4gYW4gaWRlbnRpdHkgYWNjZXNzb3JcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cbiAgLy8gTXVzdCBiZSBhIGNvbHVtbiBpbmRleC4gUmV0dXJuIGFuIGlkZW50aXR5IGFjY2Vzc29yXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBvYmpcbiAgfVxuICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgd2UgbmVlZCB0byBidWlsZCBhIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBmdW5jdGlvblxuICBpZiAoXy5pc09iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG1ha2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZSgpIHtcbiAgICB2YXIgc3RhY2sgPSBtYWtlU3ViQWdncmVnYXRpb25GdW5jdGlvbihvYmopXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRvcFN0YWNrKGQpIHtcbiAgICAgIHJldHVybiBzdGFjayhkKVxuICAgIH1cbiAgfVxufVxuXG4vLyBBIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IHdhbGtzIHRoZSBhZ2dyZWdhdGlvbiBzdGFjayBhbmQgcmV0dXJuc1xuLy8gYSBmdW5jdGlvbi4gVGhlIHJldHVybmVkIGZ1bmN0aW9uLCB3aGVuIGNhbGxlZCwgd2lsbCByZWN1cnNpdmVseSBpbnZva2Vcbi8vIHdpdGggdGhlIHByb3BlcnRpZXMgZnJvbSB0aGUgcHJldmlvdXMgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuZnVuY3Rpb24gbWFrZVN1YkFnZ3JlZ2F0aW9uRnVuY3Rpb24ob2JqKSB7XG4gIC8vIElmIGl0cyBhbiBvYmplY3QsIGVpdGhlciB1bndyYXAgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIGFzIGFuXG4gIC8vIGFycmF5IG9mIGtleVZhbHVlcywgb3IgdW53cmFwIHRoZSBmaXJzdCBrZXlWYWx1ZSBzZXQgYXMgYW4gb2JqZWN0XG4gIG9iaiA9IF8uaXNPYmplY3Qob2JqKSA/IGV4dHJhY3RLZXlWYWxPckFycmF5KG9iaikgOiBvYmpcblxuICAvLyBEZXRlY3Qgc3RyaW5nc1xuICBpZiAoXy5pc1N0cmluZyhvYmopKSB7XG4gICAgLy8gSWYgYmVnaW5zIHdpdGggYSAkLCB0aGVuIHdlIG5lZWQgdG8gY29udmVydCBpdCBvdmVyIHRvIGEgcmVndWxhciBxdWVyeSBvYmplY3QgYW5kIGFuYWx5emUgaXQgYWdhaW5cbiAgICBpZiAoaXNTdHJpbmdTeW50YXgob2JqKSkge1xuICAgICAgcmV0dXJuIG1ha2VTdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uKGNvbnZlcnRBZ2dyZWdhdG9yU3RyaW5nKG9iaikpXG4gICAgfVxuICAgIC8vIElmIG5vcm1hbCBzdHJpbmcsIHRoZW4ganVzdCByZXR1cm4gYSBhbiBpdGVudGl0eSBhY2Nlc3NvclxuICAgIHJldHVybiBmdW5jdGlvbiBpZGVudGl0eShkKSB7XG4gICAgICByZXR1cm4gZFtvYmpdXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgYW4gYXJyYXksIHJlY3Vyc2UgaW50byBlYWNoIGl0ZW0gYW5kIHJldHVybiBhcyBhIG1hcFxuICBpZiAoXy5pc0FycmF5KG9iaikpIHtcbiAgICB2YXIgc3ViU3RhY2sgPSBfLm1hcChvYmosIG1ha2VTdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uKVxuICAgIHJldHVybiBmdW5jdGlvbiBnZXRTdWJTdGFjayhkKSB7XG4gICAgICByZXR1cm4gc3ViU3RhY2subWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzKGQpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIG9iamVjdCwgZmluZCB0aGUgYWdncmVnYXRpb24sIGFuZCByZWN1cnNlIGludG8gdGhlIHZhbHVlXG4gIGlmIChvYmoua2V5KSB7XG4gICAgaWYgKGFnZ3JlZ2F0b3JzW29iai5rZXldKSB7XG4gICAgICB2YXIgc3ViQWdncmVnYXRpb25GdW5jdGlvbiA9IG1ha2VTdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uKG9iai52YWx1ZSlcbiAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRBZ2dyZWdhdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBhZ2dyZWdhdG9yc1tvYmoua2V5XShzdWJBZ2dyZWdhdGlvbkZ1bmN0aW9uKGQpKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBhZ2dyZWdyYXRpb24gbWV0aG9kJywgb2JqKVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RLZXlWYWxPckFycmF5KG9iaikge1xuICB2YXIga2V5VmFsXG4gIHZhciB2YWx1ZXMgPSBbXVxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBrZXlWYWwgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogb2JqW2tleV1cbiAgICAgIH1cbiAgICAgIHZhciBzdWJPYmogPSB7fVxuICAgICAgc3ViT2JqW2tleV0gPSBvYmpba2V5XVxuICAgICAgdmFsdWVzLnB1c2goc3ViT2JqKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzLmxlbmd0aCA+IDEgPyB2YWx1ZXMgOiBrZXlWYWxcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdTeW50YXgoc3RyKSB7XG4gIHJldHVybiBbJyQnLCAnKCddLmluZGV4T2Yoc3RyLmNoYXJBdCgwKSkgPiAtMVxufVxuXG5mdW5jdGlvbiBwYXJzZUFnZ3JlZ2F0b3JQYXJhbXMoa2V5U3RyaW5nKSB7XG4gIHZhciBwYXJhbXMgPSBbXVxuICB2YXIgcDEgPSBrZXlTdHJpbmcuaW5kZXhPZignKCcpXG4gIHZhciBwMiA9IGtleVN0cmluZy5pbmRleE9mKCcpJylcbiAgdmFyIGtleSA9IHAxID4gLTEgPyBrZXlTdHJpbmcuc3Vic3RyaW5nKDAsIHAxKSA6IGtleVN0cmluZ1xuICBpZiAoIWFnZ3JlZ2F0b3JzW2tleV0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAocDEgPiAtMSAmJiBwMiA+IC0xICYmIHAyID4gcDEpIHtcbiAgICBwYXJhbXMgPSBrZXlTdHJpbmcuc3Vic3RyaW5nKHAxICsgMSwgcDIpLnNwbGl0KCcsJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWdncmVnYXRvcjogYWdncmVnYXRvcnNba2V5XSxcbiAgICBwYXJhbXM6IHBhcmFtc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBZ2dyZWdhdG9yU3RyaW5nKGtleVN0cmluZykge1xuICAvLyB2YXIgb2JqID0ge30gLy8gb2JqIGlzIGRlZmluZWQgYnV0IG5vdCB1c2VkXG5cbiAgLy8gMS4gdW53cmFwIHRvcCBwYXJlbnRoZXNlc1xuICAvLyAyLiBkZXRlY3QgYXJyYXlzXG5cbiAgLy8gcGFyZW50aGVzZXNcbiAgdmFyIG91dGVyUGFyZW5zID0gL1xcKCguKylcXCkvZ1xuICAvLyB2YXIgaW5uZXJQYXJlbnMgPSAvXFwoKFteXFwoXFwpXSspXFwpL2cgIC8vIGlubmVyUGFyZW5zIGlzIGRlZmluZWQgYnV0IG5vdCB1c2VkXG4gICAgLy8gY29tbWEgbm90IGluICgpXG4gIHZhciBoYXNDb21tYSA9IC8oPzpcXChbXlxcKFxcKV0qXFwpKXwoLCkvZ1xuXG4gIHJldHVybiBKU09OLnBhcnNlKCd7JyArIHVud3JhcFBhcmVuc0FuZENvbW1hcyhrZXlTdHJpbmcpICsgJ30nKVxuXG4gIGZ1bmN0aW9uIHVud3JhcFBhcmVuc0FuZENvbW1hcyhzdHIpIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgnICcsICcnKVxuICAgIHJldHVybiAnXCInICsgc3RyLnJlcGxhY2Uob3V0ZXJQYXJlbnMsIGZ1bmN0aW9uIChwLCBwcikge1xuICAgICAgaWYgKGhhc0NvbW1hLnRlc3QocHIpKSB7XG4gICAgICAgIGlmIChwci5jaGFyQXQoMCkgPT09ICckJykge1xuICAgICAgICAgIHJldHVybiAnXCI6e1wiJyArIHByLnJlcGxhY2UoaGFzQ29tbWEsIGZ1bmN0aW9uIChwMi8qICwgcHIyICovKSB7XG4gICAgICAgICAgICBpZiAocDIgPT09ICcsJykge1xuICAgICAgICAgICAgICByZXR1cm4gJyxcIidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bndyYXBQYXJlbnNBbmRDb21tYXMocDIpLnRyaW0oKVxuICAgICAgICAgIH0pICsgJ30nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICc6W1wiJyArIHByLnJlcGxhY2UoaGFzQ29tbWEsIGZ1bmN0aW9uICgvKiBwMiAsIHByMiAqLykge1xuICAgICAgICAgIHJldHVybiAnXCIsXCInXG4gICAgICAgIH0pICsgJ1wiXSdcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8vIENvbGxlY3Rpb24gQWdncmVnYXRvcnNcblxuZnVuY3Rpb24gJHN1bShjaGlsZHJlbikge1xuICByZXR1cm4gY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uICRhdmcoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhICsgYlxuICB9LCAwKSAvIGNoaWxkcmVuLmxlbmd0aFxufVxuXG5mdW5jdGlvbiAkbWF4KGNoaWxkcmVuKSB7XG4gIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBjaGlsZHJlbilcbn1cblxuZnVuY3Rpb24gJG1pbihjaGlsZHJlbikge1xuICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgY2hpbGRyZW4pXG59XG5cbmZ1bmN0aW9uICRjb3VudChjaGlsZHJlbikge1xuICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoXG59XG5cbi8qIGZ1bmN0aW9uICRtZWQoY2hpbGRyZW4pIHsgLy8gJG1lZCBpcyBkZWZpbmVkIGJ1dCBub3QgdXNlZFxuICBjaGlsZHJlbi5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGJcbiAgfSlcbiAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGNoaWxkcmVuLmxlbmd0aCAvIDIpXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggJSAyKVxuICAgIHJldHVybiBjaGlsZHJlbltoYWxmXVxuICBlbHNlXG4gICAgcmV0dXJuIChjaGlsZHJlbltoYWxmIC0gMV0gKyBjaGlsZHJlbltoYWxmXSkgLyAyLjBcbn0gKi9cblxuZnVuY3Rpb24gJGZpcnN0KGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlblswXVxufVxuXG5mdW5jdGlvbiAkbGFzdChjaGlsZHJlbikge1xuICByZXR1cm4gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gJGdldChjaGlsZHJlbiwgbikge1xuICByZXR1cm4gY2hpbGRyZW5bbl1cbn1cblxuZnVuY3Rpb24gJG50aExhc3QoY2hpbGRyZW4sIG4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIG5dXG59XG5cbmZ1bmN0aW9uICRudGhQY3QoY2hpbGRyZW4sIG4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuW01hdGgucm91bmQoY2hpbGRyZW4ubGVuZ3RoICogKG4gLyAxMDApKV1cbn1cblxuZnVuY3Rpb24gJG1hcChjaGlsZHJlbiwgbikge1xuICByZXR1cm4gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGRbbl1cbiAgfSlcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuaXZlcnNlL3NyYy9hZ2dyZWdhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgncScpXG52YXIgXyA9IHJlcXVpcmUoJy4vbG9kYXNoJylcblxudmFyIGV4cHJlc3Npb25zID0gcmVxdWlyZSgnLi9leHByZXNzaW9ucycpXG52YXIgYWdncmVnYXRpb24gPSByZXF1aXJlKCcuL2FnZ3JlZ2F0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIGZpbHRlckFsbDogZmlsdGVyQWxsLFxuICAgIGFwcGx5RmlsdGVyczogYXBwbHlGaWx0ZXJzLFxuICAgIG1ha2VGdW5jdGlvbjogbWFrZUZ1bmN0aW9uLFxuICAgIHNjYW5Gb3JEeW5hbWljRmlsdGVyczogc2NhbkZvckR5bmFtaWNGaWx0ZXJzXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXIoY29sdW1uLCBmaWwsIGlzUmFuZ2UsIHJlcGxhY2UpIHtcbiAgICByZXR1cm4gZ2V0Q29sdW1uKGNvbHVtbilcbiAgICAudGhlbihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAvLyBDbG9uZSBhIGNvcHkgb2YgdGhlIG5ldyBmaWx0ZXJzXG4gICAgICB2YXIgbmV3RmlsdGVycyA9IF8uYXNzaWduKHt9LCBzZXJ2aWNlLmZpbHRlcnMpXG4gICAgICAvLyBIZXJlIHdlIHVzZSB0aGUgcmVnaXN0ZXJlZCBjb2x1bW4ga2V5IGRlc3BpdGUgdGhlIGZpbHRlciBrZXkgcGFzc2VkLCBqdXN0IGluIGNhc2UgdGhlIGZpbHRlciBrZXkncyBvcmRlcmluZyBpcyBvcmRlcmVkIGRpZmZlcmVudGx5IDopXG4gICAgICB2YXIgZmlsdGVyS2V5ID0gY29sdW1uLmtleVxuICAgICAgaWYgKGNvbHVtbi5jb21wbGV4ID09PSAnYXJyYXknKSB7XG4gICAgICAgIGZpbHRlcktleSA9IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5rZXkpXG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uLmNvbXBsZXggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyS2V5ID0gY29sdW1uLmtleS50b1N0cmluZygpXG4gICAgICB9XG4gICAgICAvLyBCdWlsZCB0aGUgZmlsdGVyIG9iamVjdFxuICAgICAgbmV3RmlsdGVyc1tmaWx0ZXJLZXldID0gYnVpbGRGaWx0ZXJPYmplY3QoZmlsLCBpc1JhbmdlLCByZXBsYWNlKVxuXG4gICAgICByZXR1cm4gYXBwbHlGaWx0ZXJzKG5ld0ZpbHRlcnMpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbHVtbihjb2x1bW4pIHtcbiAgICB2YXIgZXhpc3RzID0gc2VydmljZS5jb2x1bW4uZmluZChjb2x1bW4pXG4gICAgLy8gSWYgdGhlIGZpbHRlcnMgZGltZW5zaW9uIGRvZXNuJ3QgZXhpc3QgeWV0LCB0cnkgYW5kIGNyZWF0ZSBpdFxuICAgIHJldHVybiBQcm9taXNlLnRyeShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICByZXR1cm4gc2VydmljZS5jb2x1bW4oe1xuICAgICAgICAgIGtleTogY29sdW1uLFxuICAgICAgICAgIHRlbXBvcmFyeTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEl0IHdhcyBhYmxlIHRvIGJlIGNyZWF0ZWQsIHNvIHJldHJpZXZlIGFuZCByZXR1cm4gaXRcbiAgICAgICAgICByZXR1cm4gc2VydmljZS5jb2x1bW4uZmluZChjb2x1bW4pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBJdCBleGlzdHMsIHNvIGp1c3QgcmV0dXJuIHdoYXQgd2UgZm91bmRcbiAgICAgIHJldHVybiBleGlzdHNcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyQWxsKGZpbHMpIHtcbiAgICAvLyBJZiBlbXB0eSwgcmVtb3ZlIGFsbCBmaWx0ZXJzXG4gICAgaWYgKCFmaWxzKSB7XG4gICAgICBzZXJ2aWNlLmNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIGNvbC5kaW1lbnNpb24uZmlsdGVyQWxsKClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYXBwbHlGaWx0ZXJzKHt9KVxuICAgIH1cblxuICAgIC8vIENsb25lIGEgY29weSBmb3IgdGhlIG5ldyBmaWx0ZXJzXG4gICAgdmFyIG5ld0ZpbHRlcnMgPSBfLmFzc2lnbih7fSwgc2VydmljZS5maWx0ZXJzKVxuXG4gICAgdmFyIGRzID0gXy5tYXAoZmlscywgZnVuY3Rpb24gKGZpbCkge1xuICAgICAgcmV0dXJuIGdldENvbHVtbihmaWwuY29sdW1uKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSB1c2UgdGhlIHJlZ2lzdGVyZWQgY29sdW1uIGtleSBkZXNwaXRlIHRoZSBmaWx0ZXIga2V5IHBhc3NlZCwganVzdCBpbiBjYXNlIHRoZSBmaWx0ZXIga2V5J3Mgb3JkZXJpbmcgaXMgb3JkZXJlZCBkaWZmZXJlbnRseSA6KVxuICAgICAgICAgIHZhciBmaWx0ZXJLZXkgPSBjb2x1bW4uY29tcGxleCA/IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5rZXkpIDogY29sdW1uLmtleVxuICAgICAgICAgIC8vIEJ1aWxkIHRoZSBmaWx0ZXIgb2JqZWN0XG4gICAgICAgICAgbmV3RmlsdGVyc1tmaWx0ZXJLZXldID0gYnVpbGRGaWx0ZXJPYmplY3QoZmlsLnZhbHVlLCBmaWwuaXNSYW5nZSwgZmlsLnJlcGxhY2UpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChkcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5RmlsdGVycyhuZXdGaWx0ZXJzKVxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRmlsdGVyT2JqZWN0KGZpbCwgaXNSYW5nZSwgcmVwbGFjZSkge1xuICAgIGlmIChfLmlzVW5kZWZpbmVkKGZpbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGZpbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBmaWwsXG4gICAgICAgIGZ1bmN0aW9uOiBmaWwsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChfLmlzT2JqZWN0KGZpbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBmaWwsXG4gICAgICAgIGZ1bmN0aW9uOiBtYWtlRnVuY3Rpb24oZmlsKSxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KGZpbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBmaWwsXG4gICAgICAgIHJlcGxhY2U6IGlzUmFuZ2UgfHwgcmVwbGFjZSxcbiAgICAgICAgdHlwZTogaXNSYW5nZSA/ICdyYW5nZScgOiAnaW5jbHVzaXZlJyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBmaWwsXG4gICAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgICAgdHlwZTogJ2V4YWN0JyxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUZpbHRlcnMobmV3RmlsdGVycykge1xuICAgIHZhciBkcyA9IF8ubWFwKG5ld0ZpbHRlcnMsIGZ1bmN0aW9uIChmaWwsIGkpIHtcbiAgICAgIHZhciBleGlzdGluZyA9IHNlcnZpY2UuZmlsdGVyc1tpXVxuICAgICAgICAvLyBGaWx0ZXJzIGFyZSB0aGUgc2FtZSwgc28gbm8gY2hhbmdlIGlzIG5lZWRlZCBvbiB0aGlzIGNvbHVtblxuICAgICAgaWYgKGZpbCA9PT0gZXhpc3RpbmcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICB2YXIgY29sdW1uXG4gICAgICAgIC8vIFJldHJpZXZlIGNvbXBsZXggY29sdW1ucyBieSBkZWNvZGluZyB0aGUgY29sdW1uIGtleSBhcyBqc29uXG4gICAgICBpZiAoaS5jaGFyQXQoMCkgPT09ICdbJykge1xuICAgICAgICBjb2x1bW4gPSBzZXJ2aWNlLmNvbHVtbi5maW5kKEpTT04ucGFyc2UoaSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgY29sdW1uIG5vcm1hbGx5XG4gICAgICAgIGNvbHVtbiA9IHNlcnZpY2UuY29sdW1uLmZpbmQoaSlcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xpbmcgYSBmaWx0ZXIgdmFsdWUgaXMgYSBiaXQgZGlmZmVyZW50IGZyb20gcmVwbGFjaW5nIHRoZW1cbiAgICAgIGlmIChmaWwgJiYgZXhpc3RpbmcgJiYgIWZpbC5yZXBsYWNlKSB7XG4gICAgICAgIG5ld0ZpbHRlcnNbaV0gPSBmaWwgPSB0b2dnbGVGaWx0ZXJzKGZpbCwgZXhpc3RpbmcpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGZpbHRlciwgcmVtb3ZlIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgZGltZW5zaW9uXG4gICAgICBpZiAoIWZpbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uZmlsdGVyQWxsKCkpXG4gICAgICB9XG4gICAgICBpZiAoZmlsLnR5cGUgPT09ICdleGFjdCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmZpbHRlckV4YWN0KGZpbC52YWx1ZSkpXG4gICAgICB9XG4gICAgICBpZiAoZmlsLnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmZpbHRlclJhbmdlKGZpbC52YWx1ZSkpXG4gICAgICB9XG4gICAgICBpZiAoZmlsLnR5cGUgPT09ICdpbmNsdXNpdmUnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29sdW1uLmRpbWVuc2lvbi5maWx0ZXJGdW5jdGlvbihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBmaWwudmFsdWUuaW5kZXhPZihkKSA+IC0xXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgaWYgKGZpbC50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29sdW1uLmRpbWVuc2lvbi5maWx0ZXJGdW5jdGlvbihmaWwuZnVuY3Rpb24pKVxuICAgICAgfVxuICAgICAgLy8gQnkgZGVmYXVsdCBpZiBzb21ldGhpbmcgY3JhcHMgdXAsIGp1c3QgcmVtb3ZlIGFsbCBmaWx0ZXJzXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbHVtbi5kaW1lbnNpb24uZmlsdGVyQWxsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChkcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2F2ZSB0aGUgbmV3IGZpbHRlcnMgc2F0YXRlXG4gICAgICAgIHNlcnZpY2UuZmlsdGVycyA9IG5ld0ZpbHRlcnNcblxuICAgICAgICAvLyBQbHVjayBhbmQgcmVtb3ZlIGZhbHNleSBmaWx0ZXJzIGZyb20gdGhlIG1peFxuICAgICAgICB2YXIgdHJ5UmVtb3ZhbCA9IFtdXG4gICAgICAgIF8uZm9yRWFjaChzZXJ2aWNlLmZpbHRlcnMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICB0cnlSZW1vdmFsLnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgdmFsOiB2YWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZmlsdGVyc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIElmIGFueSBvZiB0aG9zZSBmaWx0ZXJzIGFyZSB0aGUgbGFzdCBkZXBlbmRlbmN5IGZvciB0aGUgY29sdW1uLCB0aGVuIHJlbW92ZSB0aGUgY29sdW1uXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0cnlSZW1vdmFsLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBzZXJ2aWNlLmNvbHVtbi5maW5kKCh2LmtleS5jaGFyQXQoMCkgPT09ICdbJykgPyBKU09OLnBhcnNlKHYua2V5KSA6IHYua2V5KVxuICAgICAgICAgIGlmIChjb2x1bW4udGVtcG9yYXJ5ICYmICFjb2x1bW4uZHluYW1pY1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UuY2xlYXIoY29sdW1uLmtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgZmlsdGVyTGlzdGVuZXJzIGFuZCB3YWl0IGZvciB0aGVpciByZXR1cm5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHNlcnZpY2UuZmlsdGVyTGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoKVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVycyhmaWwsIGV4aXN0aW5nKSB7XG4gICAgLy8gRXhhY3QgZnJvbSBJbmNsdXNpdmVcbiAgICBpZiAoZmlsLnR5cGUgPT09ICdleGFjdCcgJiYgZXhpc3RpbmcudHlwZSA9PT0gJ2luY2x1c2l2ZScpIHtcbiAgICAgIGZpbC52YWx1ZSA9IF8ueG9yKFtmaWwudmFsdWVdLCBleGlzdGluZy52YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGZpbC50eXBlID09PSAnaW5jbHVzaXZlJyAmJiBleGlzdGluZy50eXBlID09PSAnZXhhY3QnKSB7IC8vIEluY2x1c2l2ZSBmcm9tIEV4YWN0XG4gICAgICBmaWwudmFsdWUgPSBfLnhvcihmaWwudmFsdWUsIFtleGlzdGluZy52YWx1ZV0pXG4gICAgfSBlbHNlIGlmIChmaWwudHlwZSA9PT0gJ2luY2x1c2l2ZScgJiYgZXhpc3RpbmcudHlwZSA9PT0gJ2luY2x1c2l2ZScpIHsgLy8gSW5jbHVzaXZlIC8gSW5jbHVzaXZlIE1lcmdlXG4gICAgICBmaWwudmFsdWUgPSBfLnhvcihmaWwudmFsdWUsIGV4aXN0aW5nLnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZmlsLnR5cGUgPT09ICdleGFjdCcgJiYgZXhpc3RpbmcudHlwZSA9PT0gJ2V4YWN0JykgeyAvLyBFeGFjdCAvIEV4YWN0XG4gICAgICAvLyBJZiB0aGUgdmFsdWVzIGFyZSB0aGUgc2FtZSwgcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcbiAgICAgIGlmIChmaWwudmFsdWUgPT09IGV4aXN0aW5nLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gVGhleSB0aGV5IGFyZSBkaWZmZXJlbnQsIG1ha2UgYW4gYXJyYXlcbiAgICAgIGZpbC52YWx1ZSA9IFtmaWwudmFsdWUsIGV4aXN0aW5nLnZhbHVlXVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgbmV3IHR5cGUgYmFzZWQgb24gdGhlIG1lcmdlZCB2YWx1ZXNcbiAgICBpZiAoIWZpbC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGZpbCA9IGZhbHNlXG4gICAgfSBlbHNlIGlmIChmaWwudmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICBmaWwudHlwZSA9ICdleGFjdCdcbiAgICAgIGZpbC52YWx1ZSA9IGZpbC52YWx1ZVswXVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWwudHlwZSA9ICdpbmNsdXNpdmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbFxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbkZvckR5bmFtaWNGaWx0ZXJzKHF1ZXJ5KSB7XG4gICAgLy8gSGVyZSB3ZSBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSByZWxhdGl2ZSByZWZlcmVuY2VzIHRvIHRoZSByYXcgZGF0YVxuICAgIC8vIGJlaW5nIHVzZWQgaW4gdGhlIGZpbHRlci4gSWYgc28sIHdlIG5lZWQgdG8gYnVpbGQgdGhvc2UgZGltZW5zaW9ucyBhbmQga2VlcFxuICAgIC8vIHRoZW0gdXBkYXRlZCBzbyB0aGUgZmlsdGVycyBjYW4gYmUgcmVidWlsdCBpZiBuZWVkZWRcbiAgICAvLyBUaGUgc3VwcG9ydGVkIGtleXMgcmlnaHQgbm93IGFyZTogJGNvbHVtbiwgJGRhdGFcbiAgICB2YXIgY29sdW1ucyA9IFtdXG4gICAgd2FsayhxdWVyeS5maWx0ZXIpXG4gICAgcmV0dXJuIGNvbHVtbnNcblxuICAgIGZ1bmN0aW9uIHdhbGsob2JqKSB7XG4gICAgICBfLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgLy8gZmluZCB0aGUgZGF0YSByZWZlcmVuY2VzLCBpZiBhbnlcbiAgICAgICAgdmFyIHJlZiA9IGZpbmREYXRhUmVmZXJlbmNlcyh2YWwsIGtleSlcbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGNvbHVtbnMucHVzaChyZWYpXG4gICAgICAgIH1cbiAgICAgICAgICAvLyBpZiBpdCdzIGEgc3RyaW5nXG4gICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbCkpIHtcbiAgICAgICAgICByZWYgPSBmaW5kRGF0YVJlZmVyZW5jZXMobnVsbCwgdmFsKVxuICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYW5vdGhlciBvYmplY3QsIGtlZXAgbG9va2luZ1xuICAgICAgICBpZiAoXy5pc09iamVjdCh2YWwpKSB7XG4gICAgICAgICAgd2Fsayh2YWwpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZERhdGFSZWZlcmVuY2VzKHZhbCwga2V5KSB7XG4gICAgLy8gbG9vayBmb3IgdGhlICRkYXRhIHN0cmluZyBhcyBhIHZhbHVlXG4gICAgaWYgKGtleSA9PT0gJyRkYXRhJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBsb29rIGZvciB0aGUgJGNvbHVtbiBrZXkgYW5kIGl0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICBpZiAoa2V5ICYmIGtleSA9PT0gJyRjb2x1bW4nKSB7XG4gICAgICBpZiAoXy5pc1N0cmluZyh2YWwpKSB7XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybignVGhlIHZhbHVlIGZvciBmaWx0ZXIgXCIkY29sdW1uXCIgbXVzdCBiZSBhIHZhbGlkIGNvbHVtbiBrZXknLCB2YWwpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlRnVuY3Rpb24ob2JqLCBpc0FnZ3JlZ2F0aW9uKSB7XG4gICAgdmFyIHN1YkdldHRlcnNcblxuICAgIC8vIERldGVjdCByYXcgJGRhdGEgcmVmZXJlbmNlXG4gICAgaWYgKF8uaXNTdHJpbmcob2JqKSkge1xuICAgICAgdmFyIGRhdGFSZWYgPSBmaW5kRGF0YVJlZmVyZW5jZXMobnVsbCwgb2JqKVxuICAgICAgaWYgKGRhdGFSZWYpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBzZXJ2aWNlLmNmLmFsbCgpXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfLmlzU3RyaW5nKG9iaikgfHwgXy5pc051bWJlcihvYmopIHx8IF8uaXNCb29sZWFuKG9iaikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByZXNzaW9ucy4kZXEoZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBhbiBhcnJheSwgcmVjdXJzZSBpbnRvIGVhY2ggaXRlbSBhbmQgcmV0dXJuIGFzIGEgbWFwXG4gICAgaWYgKF8uaXNBcnJheShvYmopKSB7XG4gICAgICBzdWJHZXR0ZXJzID0gXy5tYXAob2JqLCBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gbWFrZUZ1bmN0aW9uKG8sIGlzQWdncmVnYXRpb24pXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBzdWJHZXR0ZXJzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBzKGQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb2JqZWN0LCByZXR1cm4gYSByZWN1cnNpb24gZnVuY3Rpb24gdGhhdCBpdHNlbGYsIHJldHVybnMgdGhlIHJlc3VsdHMgb2YgYWxsIG9mIHRoZSBvYmplY3Qga2V5c1xuICAgIGlmIChfLmlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHN1YkdldHRlcnMgPSBfLm1hcChvYmosIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAvLyBHZXQgdGhlIGNoaWxkXG4gICAgICAgIHZhciBnZXRTdWIgPSBtYWtlRnVuY3Rpb24odmFsLCBpc0FnZ3JlZ2F0aW9uKVxuXG4gICAgICAgIC8vIERldGVjdCByYXcgJGNvbHVtbiByZWZlcmVuY2VzXG4gICAgICAgIHZhciBkYXRhUmVmID0gZmluZERhdGFSZWZlcmVuY2VzKHZhbCwga2V5KVxuICAgICAgICBpZiAoZGF0YVJlZikge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBzZXJ2aWNlLmNvbHVtbi5maW5kKGRhdGFSZWYpXG4gICAgICAgICAgdmFyIGRhdGEgPSBjb2x1bW4udmFsdWVzXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZXhwcmVzc2lvbiwgcGFzcyB0aGUgcGFyZW50VmFsdWUgYW5kIHRoZSBzdWJHZXR0ZXJcbiAgICAgICAgaWYgKGV4cHJlc3Npb25zW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uc1trZXldKGQsIGdldFN1YilcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWdncmVnYXRvck9iaiA9IGFnZ3JlZ2F0aW9uLnBhcnNlQWdncmVnYXRvclBhcmFtcyhrZXkpXG4gICAgICAgIGlmIChhZ2dyZWdhdG9yT2JqKSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgYW55IGZ1cnRoZXIgb3BlcmF0aW9ucyBhcmUgZm9yIGFnZ3JlZ2F0aW9uc1xuICAgICAgICAgIC8vIGFuZCBub3QgZmlsdGVyc1xuICAgICAgICAgIGlzQWdncmVnYXRpb24gPSB0cnVlXG4gICAgICAgICAgICAvLyBoZXJlIHdlIHBhc3MgdHJ1ZSB0byBtYWtlRnVuY3Rpb24gd2hpY2ggZGVub3RlcyB0aGF0XG4gICAgICAgICAgICAvLyBhbiBhZ2dyZWdhdGlubyBjaGFpbiBoYXMgc3RhcnRlZCBhbmQgdG8gc3RvcCB1c2luZyAkQU5EXG4gICAgICAgICAgZ2V0U3ViID0gbWFrZUZ1bmN0aW9uKHZhbCwgaXNBZ2dyZWdhdGlvbilcbiAgICAgICAgICAgIC8vIElmIGl0J3MgYW4gYWdncmVnYXRpb24gb2JqZWN0LCBiZSBzdXJlIHRvIHBhc3MgaW4gdGhlIGNoaWxkcmVuLCBhbmQgdGhlbiBhbnkgYWRkaXRpb25hbCBwYXJhbXMgcGFzc2VkIGludG8gdGhlIGFnZ3JlZ2F0aW9uIHN0cmluZ1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYWdncmVnYXRvck9iai5hZ2dyZWdhdG9yLmFwcGx5KG51bGwsIFtnZXRTdWIoKV0uY29uY2F0KGFnZ3JlZ2F0b3JPYmoucGFyYW1zKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCBtdXN0IGJlIGEgc3RyaW5nIHRoZW4uIFBsdWNrIHRoYXQgc3RyaW5nIGtleSBmcm9tIHBhcmVudCwgYW5kIHBhc3MgaXQgYXMgdGhlIG5ldyB2YWx1ZSB0byB0aGUgc3ViR2V0dGVyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGQgPSBkW2tleV1cbiAgICAgICAgICByZXR1cm4gZ2V0U3ViKGQsIGdldFN1YilcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gQWxsIG9iamVjdCBleHByZXNzaW9ucyBhcmUgYmFzaWNhbGx5IEFORCdzXG4gICAgICAvLyBSZXR1cm4gQU5EIHdpdGggYSBtYXAgb2YgdGhlIHN1YkdldHRlcnNcbiAgICAgIGlmIChpc0FnZ3JlZ2F0aW9uKSB7XG4gICAgICAgIGlmIChzdWJHZXR0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YkdldHRlcnNbMF0oZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIF8ubWFwKHN1YkdldHRlcnMsIGZ1bmN0aW9uIChnZXRTdWIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRTdWIoZClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zLiRhbmQoZCwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gXy5tYXAoc3ViR2V0dGVycywgZnVuY3Rpb24gKGdldFN1Yikge1xuICAgICAgICAgICAgcmV0dXJuIGdldFN1YihkKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ25vIGV4cHJlc3Npb24gZm91bmQgZm9yICcsIG9iailcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2ZpbHRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlcl9pZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuZnVuY3Rpb24gaGVhcF9ieShmKSB7XG5cbiAgLy8gQnVpbGRzIGEgYmluYXJ5IGhlYXAgd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgYVtsbzpoaV0uIFRoZSBoZWFwIGhhcyB0aGVcbiAgLy8gcHJvcGVydHkgc3VjaCB0aGF0IHRoZSBwYXJlbnQgYVtsbytpXSBpcyBhbHdheXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGl0c1xuICAvLyB0d28gY2hpbGRyZW46IGFbbG8rMippKzFdIGFuZCBhW2xvKzIqaSsyXS5cbiAgZnVuY3Rpb24gaGVhcChhLCBsbywgaGkpIHtcbiAgICB2YXIgbiA9IGhpIC0gbG8sXG4gICAgICAgIGkgPSAobiA+Pj4gMSkgKyAxO1xuICAgIHdoaWxlICgtLWkgPiAwKSBzaWZ0KGEsIGksIG4sIGxvKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIC8vIFNvcnRzIHRoZSBzcGVjaWZpZWQgYXJyYXkgYVtsbzpoaV0gaW4gZGVzY2VuZGluZyBvcmRlciwgYXNzdW1pbmcgaXQgaXNcbiAgLy8gYWxyZWFkeSBhIGhlYXAuXG4gIGZ1bmN0aW9uIHNvcnQoYSwgbG8sIGhpKSB7XG4gICAgdmFyIG4gPSBoaSAtIGxvLFxuICAgICAgICB0O1xuICAgIHdoaWxlICgtLW4gPiAwKSB0ID0gYVtsb10sIGFbbG9dID0gYVtsbyArIG5dLCBhW2xvICsgbl0gPSB0LCBzaWZ0KGEsIDEsIG4sIGxvKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIC8vIFNpZnRzIHRoZSBlbGVtZW50IGFbbG8raS0xXSBkb3duIHRoZSBoZWFwLCB3aGVyZSB0aGUgaGVhcCBpcyB0aGUgY29udGlndW91c1xuICAvLyBzbGljZSBvZiBhcnJheSBhW2xvOmxvK25dLiBUaGlzIG1ldGhvZCBjYW4gYWxzbyBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgaGVhcFxuICAvLyBpbmNyZW1lbnRhbGx5LCB3aXRob3V0IGluY3VycmluZyB0aGUgZnVsbCBjb3N0IG9mIHJlY29uc3RydWN0aW5nIHRoZSBoZWFwLlxuICBmdW5jdGlvbiBzaWZ0KGEsIGksIG4sIGxvKSB7XG4gICAgdmFyIGQgPSBhWy0tbG8gKyBpXSxcbiAgICAgICAgeCA9IGYoZCksXG4gICAgICAgIGNoaWxkO1xuICAgIHdoaWxlICgoY2hpbGQgPSBpIDw8IDEpIDw9IG4pIHtcbiAgICAgIGlmIChjaGlsZCA8IG4gJiYgZihhW2xvICsgY2hpbGRdKSA+IGYoYVtsbyArIGNoaWxkICsgMV0pKSBjaGlsZCsrO1xuICAgICAgaWYgKHggPD0gZihhW2xvICsgY2hpbGRdKSkgYnJlYWs7XG4gICAgICBhW2xvICsgaV0gPSBhW2xvICsgY2hpbGRdO1xuICAgICAgaSA9IGNoaWxkO1xuICAgIH1cbiAgICBhW2xvICsgaV0gPSBkO1xuICB9XG5cbiAgaGVhcC5zb3J0ID0gc29ydDtcbiAgcmV0dXJuIGhlYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVhcF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5tb2R1bGUuZXhwb3J0cy5ieSA9IGhlYXBfYnk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlcl9pZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuZnVuY3Rpb24gaW5zZXJ0aW9uc29ydF9ieShmKSB7XG5cbiAgZnVuY3Rpb24gaW5zZXJ0aW9uc29ydChhLCBsbywgaGkpIHtcbiAgICBmb3IgKHZhciBpID0gbG8gKyAxOyBpIDwgaGk7ICsraSkge1xuICAgICAgZm9yICh2YXIgaiA9IGksIHQgPSBhW2ldLCB4ID0gZih0KTsgaiA+IGxvICYmIGYoYVtqIC0gMV0pID4geDsgLS1qKSB7XG4gICAgICAgIGFbal0gPSBhW2ogLSAxXTtcbiAgICAgIH1cbiAgICAgIGFbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHJldHVybiBpbnNlcnRpb25zb3J0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydGlvbnNvcnRfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xubW9kdWxlLmV4cG9ydHMuYnkgPSBpbnNlcnRpb25zb3J0X2J5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9pbnNlcnRpb25zb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fcGFyYW1ldGVycyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdG9yZGVyOiBmYWxzZSxcblx0XHRhdmc6IGZhbHNlLFxuXHRcdGNvdW50OiBmYWxzZSxcblx0XHRzdW06IGZhbHNlLFxuXHRcdGV4Y2VwdGlvbkFjY2Vzc29yOiBmYWxzZSxcblx0XHRleGNlcHRpb25Db3VudDogZmFsc2UsXG5cdFx0ZXhjZXB0aW9uU3VtOiBmYWxzZSxcblx0XHRmaWx0ZXI6IGZhbHNlLFxuXHRcdHZhbHVlTGlzdDogZmFsc2UsXG5cdFx0bWVkaWFuOiBmYWxzZSxcblx0XHRoaXN0b2dyYW1WYWx1ZTogZmFsc2UsXG5cdFx0bWluOiBmYWxzZSxcblx0XHRtYXg6IGZhbHNlLFxuXHRcdGhpc3RvZ3JhbVRocmVzaG9sZHM6IGZhbHNlLFxuXHRcdHN0ZDogZmFsc2UsXG5cdFx0c3VtT2ZTcXVhcmVzOiBmYWxzZSxcblx0XHR2YWx1ZXM6IGZhbHNlLFxuXHRcdG5lc3RLZXlzOiBmYWxzZSxcblx0XHRhbGlhc0tleXM6IGZhbHNlLFxuXHRcdGFsaWFzUHJvcEtleXM6IGZhbHNlLFxuXHRcdGdyb3VwQWxsOiBmYWxzZSxcblx0XHRkYXRhTGlzdDogZmFsc2UsXG5cdFx0Y3VzdG9tOiBmYWxzZVxuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19wYXJhbWV0ZXJzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3BhcmFtZXRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIihmdW5jdGlvbihleHBvcnRzKXtcbmNyb3NzZmlsdGVyLnZlcnNpb24gPSBcIjEuMy4xMlwiO1xuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfaWRlbnRpdHkoZCkge1xuICByZXR1cm4gZDtcbn1cbmNyb3NzZmlsdGVyLnBlcm11dGUgPSBwZXJtdXRlO1xuXG5mdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGluZGV4Lmxlbmd0aCwgY29weSA9IG5ldyBBcnJheShuKTsgaSA8IG47ICsraSkge1xuICAgIGNvcHlbaV0gPSBhcnJheVtpbmRleFtpXV07XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG52YXIgYmlzZWN0ID0gY3Jvc3NmaWx0ZXIuYmlzZWN0ID0gYmlzZWN0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcblxuYmlzZWN0LmJ5ID0gYmlzZWN0X2J5O1xuXG5mdW5jdGlvbiBiaXNlY3RfYnkoZikge1xuXG4gIC8vIExvY2F0ZSB0aGUgaW5zZXJ0aW9uIHBvaW50IGZvciB4IGluIGEgdG8gbWFpbnRhaW4gc29ydGVkIG9yZGVyLiBUaGVcbiAgLy8gYXJndW1lbnRzIGxvIGFuZCBoaSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IGEgc3Vic2V0IG9mIHRoZSBhcnJheSB3aGljaFxuICAvLyBzaG91bGQgYmUgY29uc2lkZXJlZDsgYnkgZGVmYXVsdCB0aGUgZW50aXJlIGFycmF5IGlzIHVzZWQuIElmIHggaXMgYWxyZWFkeVxuICAvLyBwcmVzZW50IGluIGEsIHRoZSBpbnNlcnRpb24gcG9pbnQgd2lsbCBiZSBiZWZvcmUgKHRvIHRoZSBsZWZ0IG9mKSBhbnlcbiAgLy8gZXhpc3RpbmcgZW50cmllcy4gVGhlIHJldHVybiB2YWx1ZSBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHRoZSBmaXJzdFxuICAvLyBhcmd1bWVudCB0byBgYXJyYXkuc3BsaWNlYCBhc3N1bWluZyB0aGF0IGEgaXMgYWxyZWFkeSBzb3J0ZWQuXG4gIC8vXG4gIC8vIFRoZSByZXR1cm5lZCBpbnNlcnRpb24gcG9pbnQgaSBwYXJ0aXRpb25zIHRoZSBhcnJheSBhIGludG8gdHdvIGhhbHZlcyBzb1xuICAvLyB0aGF0IGFsbCB2IDwgeCBmb3IgdiBpbiBhW2xvOmldIGZvciB0aGUgbGVmdCBzaWRlIGFuZCBhbGwgdiA+PSB4IGZvciB2IGluXG4gIC8vIGFbaTpoaV0gZm9yIHRoZSByaWdodCBzaWRlLlxuICBmdW5jdGlvbiBiaXNlY3RMZWZ0KGEsIHgsIGxvLCBoaSkge1xuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgIGlmIChmKGFbbWlkXSkgPCB4KSBsbyA9IG1pZCArIDE7XG4gICAgICBlbHNlIGhpID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICAvLyBTaW1pbGFyIHRvIGJpc2VjdExlZnQsIGJ1dCByZXR1cm5zIGFuIGluc2VydGlvbiBwb2ludCB3aGljaCBjb21lcyBhZnRlciAodG9cbiAgLy8gdGhlIHJpZ2h0IG9mKSBhbnkgZXhpc3RpbmcgZW50cmllcyBvZiB4IGluIGEuXG4gIC8vXG4gIC8vIFRoZSByZXR1cm5lZCBpbnNlcnRpb24gcG9pbnQgaSBwYXJ0aXRpb25zIHRoZSBhcnJheSBpbnRvIHR3byBoYWx2ZXMgc28gdGhhdFxuICAvLyBhbGwgdiA8PSB4IGZvciB2IGluIGFbbG86aV0gZm9yIHRoZSBsZWZ0IHNpZGUgYW5kIGFsbCB2ID4geCBmb3IgdiBpblxuICAvLyBhW2k6aGldIGZvciB0aGUgcmlnaHQgc2lkZS5cbiAgZnVuY3Rpb24gYmlzZWN0UmlnaHQoYSwgeCwgbG8sIGhpKSB7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgaWYgKHggPCBmKGFbbWlkXSkpIGhpID0gbWlkO1xuICAgICAgZWxzZSBsbyA9IG1pZCArIDE7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGJpc2VjdFJpZ2h0LnJpZ2h0ID0gYmlzZWN0UmlnaHQ7XG4gIGJpc2VjdFJpZ2h0LmxlZnQgPSBiaXNlY3RMZWZ0O1xuICByZXR1cm4gYmlzZWN0UmlnaHQ7XG59XG52YXIgaGVhcCA9IGNyb3NzZmlsdGVyLmhlYXAgPSBoZWFwX2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcblxuaGVhcC5ieSA9IGhlYXBfYnk7XG5cbmZ1bmN0aW9uIGhlYXBfYnkoZikge1xuXG4gIC8vIEJ1aWxkcyBhIGJpbmFyeSBoZWFwIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGFycmF5IGFbbG86aGldLiBUaGUgaGVhcCBoYXMgdGhlXG4gIC8vIHByb3BlcnR5IHN1Y2ggdGhhdCB0aGUgcGFyZW50IGFbbG8raV0gaXMgYWx3YXlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBpdHNcbiAgLy8gdHdvIGNoaWxkcmVuOiBhW2xvKzIqaSsxXSBhbmQgYVtsbysyKmkrMl0uXG4gIGZ1bmN0aW9uIGhlYXAoYSwgbG8sIGhpKSB7XG4gICAgdmFyIG4gPSBoaSAtIGxvLFxuICAgICAgICBpID0gKG4gPj4+IDEpICsgMTtcbiAgICB3aGlsZSAoLS1pID4gMCkgc2lmdChhLCBpLCBuLCBsbyk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICAvLyBTb3J0cyB0aGUgc3BlY2lmaWVkIGFycmF5IGFbbG86aGldIGluIGRlc2NlbmRpbmcgb3JkZXIsIGFzc3VtaW5nIGl0IGlzXG4gIC8vIGFscmVhZHkgYSBoZWFwLlxuICBmdW5jdGlvbiBzb3J0KGEsIGxvLCBoaSkge1xuICAgIHZhciBuID0gaGkgLSBsbyxcbiAgICAgICAgdDtcbiAgICB3aGlsZSAoLS1uID4gMCkgdCA9IGFbbG9dLCBhW2xvXSA9IGFbbG8gKyBuXSwgYVtsbyArIG5dID0gdCwgc2lmdChhLCAxLCBuLCBsbyk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICAvLyBTaWZ0cyB0aGUgZWxlbWVudCBhW2xvK2ktMV0gZG93biB0aGUgaGVhcCwgd2hlcmUgdGhlIGhlYXAgaXMgdGhlIGNvbnRpZ3VvdXNcbiAgLy8gc2xpY2Ugb2YgYXJyYXkgYVtsbzpsbytuXS4gVGhpcyBtZXRob2QgY2FuIGFsc28gYmUgdXNlZCB0byB1cGRhdGUgdGhlIGhlYXBcbiAgLy8gaW5jcmVtZW50YWxseSwgd2l0aG91dCBpbmN1cnJpbmcgdGhlIGZ1bGwgY29zdCBvZiByZWNvbnN0cnVjdGluZyB0aGUgaGVhcC5cbiAgZnVuY3Rpb24gc2lmdChhLCBpLCBuLCBsbykge1xuICAgIHZhciBkID0gYVstLWxvICsgaV0sXG4gICAgICAgIHggPSBmKGQpLFxuICAgICAgICBjaGlsZDtcbiAgICB3aGlsZSAoKGNoaWxkID0gaSA8PCAxKSA8PSBuKSB7XG4gICAgICBpZiAoY2hpbGQgPCBuICYmIGYoYVtsbyArIGNoaWxkXSkgPiBmKGFbbG8gKyBjaGlsZCArIDFdKSkgY2hpbGQrKztcbiAgICAgIGlmICh4IDw9IGYoYVtsbyArIGNoaWxkXSkpIGJyZWFrO1xuICAgICAgYVtsbyArIGldID0gYVtsbyArIGNoaWxkXTtcbiAgICAgIGkgPSBjaGlsZDtcbiAgICB9XG4gICAgYVtsbyArIGldID0gZDtcbiAgfVxuXG4gIGhlYXAuc29ydCA9IHNvcnQ7XG4gIHJldHVybiBoZWFwO1xufVxudmFyIGhlYXBzZWxlY3QgPSBjcm9zc2ZpbHRlci5oZWFwc2VsZWN0ID0gaGVhcHNlbGVjdF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5cbmhlYXBzZWxlY3QuYnkgPSBoZWFwc2VsZWN0X2J5O1xuXG5mdW5jdGlvbiBoZWFwc2VsZWN0X2J5KGYpIHtcbiAgdmFyIGhlYXAgPSBoZWFwX2J5KGYpO1xuXG4gIC8vIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgdG9wIGsgZWxlbWVudHMgaW4gdGhlIGFycmF5IGFbbG86aGldLlxuICAvLyBUaGUgcmV0dXJuZWQgYXJyYXkgaXMgbm90IHNvcnRlZCwgYnV0IG1haW50YWlucyB0aGUgaGVhcCBwcm9wZXJ0eS4gSWYgayBpc1xuICAvLyBncmVhdGVyIHRoYW4gaGkgLSBsbywgdGhlbiBmZXdlciB0aGFuIGsgZWxlbWVudHMgd2lsbCBiZSByZXR1cm5lZC4gVGhlXG4gIC8vIG9yZGVyIG9mIGVsZW1lbnRzIGluIGEgaXMgdW5jaGFuZ2VkIGJ5IHRoaXMgb3BlcmF0aW9uLlxuICBmdW5jdGlvbiBoZWFwc2VsZWN0KGEsIGxvLCBoaSwgaykge1xuICAgIHZhciBxdWV1ZSA9IG5ldyBBcnJheShrID0gTWF0aC5taW4oaGkgLSBsbywgaykpLFxuICAgICAgICBtaW4sXG4gICAgICAgIGksXG4gICAgICAgIHgsXG4gICAgICAgIGQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgazsgKytpKSBxdWV1ZVtpXSA9IGFbbG8rK107XG4gICAgaGVhcChxdWV1ZSwgMCwgayk7XG5cbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgbWluID0gZihxdWV1ZVswXSk7XG4gICAgICBkbyB7XG4gICAgICAgIGlmICh4ID0gZihkID0gYVtsb10pID4gbWluKSB7XG4gICAgICAgICAgcXVldWVbMF0gPSBkO1xuICAgICAgICAgIG1pbiA9IGYoaGVhcChxdWV1ZSwgMCwgaylbMF0pO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlICgrK2xvIDwgaGkpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWV1ZTtcbiAgfVxuXG4gIHJldHVybiBoZWFwc2VsZWN0O1xufVxudmFyIGluc2VydGlvbnNvcnQgPSBjcm9zc2ZpbHRlci5pbnNlcnRpb25zb3J0ID0gaW5zZXJ0aW9uc29ydF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5cbmluc2VydGlvbnNvcnQuYnkgPSBpbnNlcnRpb25zb3J0X2J5O1xuXG5mdW5jdGlvbiBpbnNlcnRpb25zb3J0X2J5KGYpIHtcblxuICBmdW5jdGlvbiBpbnNlcnRpb25zb3J0KGEsIGxvLCBoaSkge1xuICAgIGZvciAodmFyIGkgPSBsbyArIDE7IGkgPCBoaTsgKytpKSB7XG4gICAgICBmb3IgKHZhciBqID0gaSwgdCA9IGFbaV0sIHggPSBmKHQpOyBqID4gbG8gJiYgZihhW2ogLSAxXSkgPiB4OyAtLWopIHtcbiAgICAgICAgYVtqXSA9IGFbaiAtIDFdO1xuICAgICAgfVxuICAgICAgYVtqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgcmV0dXJuIGluc2VydGlvbnNvcnQ7XG59XG4vLyBBbGdvcml0aG0gZGVzaWduZWQgYnkgVmxhZGltaXIgWWFyb3NsYXZza2l5LlxuLy8gSW1wbGVtZW50YXRpb24gYmFzZWQgb24gdGhlIERhcnQgcHJvamVjdDsgc2VlIGxpYi9kYXJ0L0xJQ0VOU0UgZm9yIGRldGFpbHMuXG5cbnZhciBxdWlja3NvcnQgPSBjcm9zc2ZpbHRlci5xdWlja3NvcnQgPSBxdWlja3NvcnRfYnkoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xuXG5xdWlja3NvcnQuYnkgPSBxdWlja3NvcnRfYnk7XG5cbmZ1bmN0aW9uIHF1aWNrc29ydF9ieShmKSB7XG4gIHZhciBpbnNlcnRpb25zb3J0ID0gaW5zZXJ0aW9uc29ydF9ieShmKTtcblxuICBmdW5jdGlvbiBzb3J0KGEsIGxvLCBoaSkge1xuICAgIHJldHVybiAoaGkgLSBsbyA8IHF1aWNrc29ydF9zaXplVGhyZXNob2xkXG4gICAgICAgID8gaW5zZXJ0aW9uc29ydFxuICAgICAgICA6IHF1aWNrc29ydCkoYSwgbG8sIGhpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrc29ydChhLCBsbywgaGkpIHtcbiAgICAvLyBDb21wdXRlIHRoZSB0d28gcGl2b3RzIGJ5IGxvb2tpbmcgYXQgNSBlbGVtZW50cy5cbiAgICB2YXIgc2l4dGggPSAoaGkgLSBsbykgLyA2IHwgMCxcbiAgICAgICAgaTEgPSBsbyArIHNpeHRoLFxuICAgICAgICBpNSA9IGhpIC0gMSAtIHNpeHRoLFxuICAgICAgICBpMyA9IGxvICsgaGkgLSAxID4+IDEsICAvLyBUaGUgbWlkcG9pbnQuXG4gICAgICAgIGkyID0gaTMgLSBzaXh0aCxcbiAgICAgICAgaTQgPSBpMyArIHNpeHRoO1xuXG4gICAgdmFyIGUxID0gYVtpMV0sIHgxID0gZihlMSksXG4gICAgICAgIGUyID0gYVtpMl0sIHgyID0gZihlMiksXG4gICAgICAgIGUzID0gYVtpM10sIHgzID0gZihlMyksXG4gICAgICAgIGU0ID0gYVtpNF0sIHg0ID0gZihlNCksXG4gICAgICAgIGU1ID0gYVtpNV0sIHg1ID0gZihlNSk7XG5cbiAgICB2YXIgdDtcblxuICAgIC8vIFNvcnQgdGhlIHNlbGVjdGVkIDUgZWxlbWVudHMgdXNpbmcgYSBzb3J0aW5nIG5ldHdvcmsuXG4gICAgaWYgKHgxID4geDIpIHQgPSBlMSwgZTEgPSBlMiwgZTIgPSB0LCB0ID0geDEsIHgxID0geDIsIHgyID0gdDtcbiAgICBpZiAoeDQgPiB4NSkgdCA9IGU0LCBlNCA9IGU1LCBlNSA9IHQsIHQgPSB4NCwgeDQgPSB4NSwgeDUgPSB0O1xuICAgIGlmICh4MSA+IHgzKSB0ID0gZTEsIGUxID0gZTMsIGUzID0gdCwgdCA9IHgxLCB4MSA9IHgzLCB4MyA9IHQ7XG4gICAgaWYgKHgyID4geDMpIHQgPSBlMiwgZTIgPSBlMywgZTMgPSB0LCB0ID0geDIsIHgyID0geDMsIHgzID0gdDtcbiAgICBpZiAoeDEgPiB4NCkgdCA9IGUxLCBlMSA9IGU0LCBlNCA9IHQsIHQgPSB4MSwgeDEgPSB4NCwgeDQgPSB0O1xuICAgIGlmICh4MyA+IHg0KSB0ID0gZTMsIGUzID0gZTQsIGU0ID0gdCwgdCA9IHgzLCB4MyA9IHg0LCB4NCA9IHQ7XG4gICAgaWYgKHgyID4geDUpIHQgPSBlMiwgZTIgPSBlNSwgZTUgPSB0LCB0ID0geDIsIHgyID0geDUsIHg1ID0gdDtcbiAgICBpZiAoeDIgPiB4MykgdCA9IGUyLCBlMiA9IGUzLCBlMyA9IHQsIHQgPSB4MiwgeDIgPSB4MywgeDMgPSB0O1xuICAgIGlmICh4NCA+IHg1KSB0ID0gZTQsIGU0ID0gZTUsIGU1ID0gdCwgdCA9IHg0LCB4NCA9IHg1LCB4NSA9IHQ7XG5cbiAgICB2YXIgcGl2b3QxID0gZTIsIHBpdm90VmFsdWUxID0geDIsXG4gICAgICAgIHBpdm90MiA9IGU0LCBwaXZvdFZhbHVlMiA9IHg0O1xuXG4gICAgLy8gZTIgYW5kIGU0IGhhdmUgYmVlbiBzYXZlZCBpbiB0aGUgcGl2b3QgdmFyaWFibGVzLiBUaGV5IHdpbGwgYmUgd3JpdHRlblxuICAgIC8vIGJhY2ssIG9uY2UgdGhlIHBhcnRpdGlvbmluZyBpcyBmaW5pc2hlZC5cbiAgICBhW2kxXSA9IGUxO1xuICAgIGFbaTJdID0gYVtsb107XG4gICAgYVtpM10gPSBlMztcbiAgICBhW2k0XSA9IGFbaGkgLSAxXTtcbiAgICBhW2k1XSA9IGU1O1xuXG4gICAgdmFyIGxlc3MgPSBsbyArIDEsICAgLy8gRmlyc3QgZWxlbWVudCBpbiB0aGUgbWlkZGxlIHBhcnRpdGlvbi5cbiAgICAgICAgZ3JlYXQgPSBoaSAtIDI7ICAvLyBMYXN0IGVsZW1lbnQgaW4gdGhlIG1pZGRsZSBwYXJ0aXRpb24uXG5cbiAgICAvLyBOb3RlIHRoYXQgZm9yIHZhbHVlIGNvbXBhcmlzb24sIDwsIDw9LCA+PSBhbmQgPiBjb2VyY2UgdG8gYSBwcmltaXRpdmUgdmlhXG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mOyA9PSBhbmQgPT09IGRvIG5vdCwgc28gaW4gb3JkZXIgdG8gYmUgY29uc2lzdGVudFxuICAgIC8vIHdpdGggbmF0dXJhbCBvcmRlciAoc3VjaCBhcyBmb3IgRGF0ZSBvYmplY3RzKSwgd2UgbXVzdCBkbyB0d28gY29tcGFyZXMuXG4gICAgdmFyIHBpdm90c0VxdWFsID0gcGl2b3RWYWx1ZTEgPD0gcGl2b3RWYWx1ZTIgJiYgcGl2b3RWYWx1ZTEgPj0gcGl2b3RWYWx1ZTI7XG4gICAgaWYgKHBpdm90c0VxdWFsKSB7XG5cbiAgICAgIC8vIERlZ2VuZXJhdGVkIGNhc2Ugd2hlcmUgdGhlIHBhcnRpdGlvbmluZyBiZWNvbWVzIGEgZHV0Y2ggbmF0aW9uYWwgZmxhZ1xuICAgICAgLy8gcHJvYmxlbS5cbiAgICAgIC8vXG4gICAgICAvLyBbIHwgIDwgcGl2b3QgIHwgPT0gcGl2b3QgfCB1bnBhcnRpdGlvbmVkIHwgPiBwaXZvdCAgfCBdXG4gICAgICAvLyAgXiAgICAgICAgICAgICBeICAgICAgICAgIF4gICAgICAgICAgICAgXiAgICAgICAgICAgIF5cbiAgICAgIC8vIGxlZnQgICAgICAgICBsZXNzICAgICAgICAgayAgICAgICAgICAgZ3JlYXQgICAgICAgICByaWdodFxuICAgICAgLy9cbiAgICAgIC8vIGFbbGVmdF0gYW5kIGFbcmlnaHRdIGFyZSB1bmRlZmluZWQgYW5kIGFyZSBmaWxsZWQgYWZ0ZXIgdGhlXG4gICAgICAvLyBwYXJ0aXRpb25pbmcuXG4gICAgICAvL1xuICAgICAgLy8gSW52YXJpYW50czpcbiAgICAgIC8vICAgMSkgZm9yIHggaW4gXWxlZnQsIGxlc3NbIDogeCA8IHBpdm90LlxuICAgICAgLy8gICAyKSBmb3IgeCBpbiBbbGVzcywga1sgOiB4ID09IHBpdm90LlxuICAgICAgLy8gICAzKSBmb3IgeCBpbiBdZ3JlYXQsIHJpZ2h0WyA6IHggPiBwaXZvdC5cbiAgICAgIGZvciAodmFyIGsgPSBsZXNzOyBrIDw9IGdyZWF0OyArK2spIHtcbiAgICAgICAgdmFyIGVrID0gYVtrXSwgeGsgPSBmKGVrKTtcbiAgICAgICAgaWYgKHhrIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICBpZiAoayAhPT0gbGVzcykge1xuICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICBhW2xlc3NdID0gZWs7XG4gICAgICAgICAgfVxuICAgICAgICAgICsrbGVzcztcbiAgICAgICAgfSBlbHNlIGlmICh4ayA+IHBpdm90VmFsdWUxKSB7XG5cbiAgICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlbGVtZW50IDw9IHBpdm90IGluIHRoZSByYW5nZSBbayAtIDEsIGdyZWF0XSBhbmRcbiAgICAgICAgICAvLyBwdXQgWzplazpdIHRoZXJlLiBXZSBrbm93IHRoYXQgc3VjaCBhbiBlbGVtZW50IG11c3QgZXhpc3Q6XG4gICAgICAgICAgLy8gV2hlbiBrID09IGxlc3MsIHRoZW4gZWwzICh3aGljaCBpcyBlcXVhbCB0byBwaXZvdCkgbGllcyBpbiB0aGVcbiAgICAgICAgICAvLyBpbnRlcnZhbC4gT3RoZXJ3aXNlIGFbayAtIDFdID09IHBpdm90IGFuZCB0aGUgc2VhcmNoIHN0b3BzIGF0IGstMS5cbiAgICAgICAgICAvLyBOb3RlIHRoYXQgaW4gdGhlIGxhdHRlciBjYXNlIGludmFyaWFudCAyIHdpbGwgYmUgdmlvbGF0ZWQgZm9yIGFcbiAgICAgICAgICAvLyBzaG9ydCBhbW91bnQgb2YgdGltZS4gVGhlIGludmFyaWFudCB3aWxsIGJlIHJlc3RvcmVkIHdoZW4gdGhlXG4gICAgICAgICAgLy8gcGl2b3RzIGFyZSBwdXQgaW50byB0aGVpciBmaW5hbCBwb3NpdGlvbnMuXG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBncmVhdFZhbHVlID0gZihhW2dyZWF0XSk7XG4gICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA+IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgICAgIGdyZWF0LS07XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgbG9jYXRpb24gaW4gdGhlIHdoaWxlLWxvb3Agd2hlcmUgYSBuZXdcbiAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIGlzIHN0YXJ0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChncmVhdFZhbHVlIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgLy8gVHJpcGxlIGV4Y2hhbmdlLlxuICAgICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgICAgYVtsZXNzKytdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhW2tdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgLy8gTm90ZTogaWYgZ3JlYXQgPCBrIHRoZW4gd2Ugd2lsbCBleGl0IHRoZSBvdXRlciBsb29wIGFuZCBmaXhcbiAgICAgICAgICAgICAgLy8gaW52YXJpYW50IDIgKHdoaWNoIHdlIGp1c3QgdmlvbGF0ZWQpLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBXZSBwYXJ0aXRpb24gdGhlIGxpc3QgaW50byB0aHJlZSBwYXJ0czpcbiAgICAgIC8vICAxLiA8IHBpdm90MVxuICAgICAgLy8gIDIuID49IHBpdm90MSAmJiA8PSBwaXZvdDJcbiAgICAgIC8vICAzLiA+IHBpdm90MlxuICAgICAgLy9cbiAgICAgIC8vIER1cmluZyB0aGUgbG9vcCB3ZSBoYXZlOlxuICAgICAgLy8gWyB8IDwgcGl2b3QxIHwgPj0gcGl2b3QxICYmIDw9IHBpdm90MiB8IHVucGFydGl0aW9uZWQgIHwgPiBwaXZvdDIgIHwgXVxuICAgICAgLy8gIF4gICAgICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgXiAgICAgICAgICAgICBeXG4gICAgICAvLyBsZWZ0ICAgICAgICAgbGVzcyAgICAgICAgICAgICAgICAgICAgIGsgICAgICAgICAgICAgIGdyZWF0ICAgICAgICByaWdodFxuICAgICAgLy9cbiAgICAgIC8vIGFbbGVmdF0gYW5kIGFbcmlnaHRdIGFyZSB1bmRlZmluZWQgYW5kIGFyZSBmaWxsZWQgYWZ0ZXIgdGhlXG4gICAgICAvLyBwYXJ0aXRpb25pbmcuXG4gICAgICAvL1xuICAgICAgLy8gSW52YXJpYW50czpcbiAgICAgIC8vICAgMS4gZm9yIHggaW4gXWxlZnQsIGxlc3NbIDogeCA8IHBpdm90MVxuICAgICAgLy8gICAyLiBmb3IgeCBpbiBbbGVzcywga1sgOiBwaXZvdDEgPD0geCAmJiB4IDw9IHBpdm90MlxuICAgICAgLy8gICAzLiBmb3IgeCBpbiBdZ3JlYXQsIHJpZ2h0WyA6IHggPiBwaXZvdDJcbiAgICAgIGZvciAodmFyIGsgPSBsZXNzOyBrIDw9IGdyZWF0OyBrKyspIHtcbiAgICAgICAgdmFyIGVrID0gYVtrXSwgeGsgPSBmKGVrKTtcbiAgICAgICAgaWYgKHhrIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICBpZiAoayAhPT0gbGVzcykge1xuICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICBhW2xlc3NdID0gZWs7XG4gICAgICAgICAgfVxuICAgICAgICAgICsrbGVzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoeGsgPiBwaXZvdFZhbHVlMikge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKTtcbiAgICAgICAgICAgICAgaWYgKGdyZWF0VmFsdWUgPiBwaXZvdFZhbHVlMikge1xuICAgICAgICAgICAgICAgIGdyZWF0LS07XG4gICAgICAgICAgICAgICAgaWYgKGdyZWF0IDwgaykgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBsb2NhdGlvbiBpbnNpZGUgdGhlIGxvb3Agd2hlcmUgYSBuZXdcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gaXMgc3RhcnRlZC5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhW2dyZWF0XSA8PSBwaXZvdDIuXG4gICAgICAgICAgICAgICAgaWYgKGdyZWF0VmFsdWUgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgICAgICAgICAgLy8gVHJpcGxlIGV4Y2hhbmdlLlxuICAgICAgICAgICAgICAgICAgYVtrXSA9IGFbbGVzc107XG4gICAgICAgICAgICAgICAgICBhW2xlc3MrK10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gYVtncmVhdF0gPj0gcGl2b3QxLlxuICAgICAgICAgICAgICAgICAgYVtrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1vdmUgcGl2b3RzIGludG8gdGhlaXIgZmluYWwgcG9zaXRpb25zLlxuICAgIC8vIFdlIHNocnVuayB0aGUgbGlzdCBmcm9tIGJvdGggc2lkZXMgKGFbbGVmdF0gYW5kIGFbcmlnaHRdIGhhdmVcbiAgICAvLyBtZWFuaW5nbGVzcyB2YWx1ZXMgaW4gdGhlbSkgYW5kIG5vdyB3ZSBtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIGZpcnN0XG4gICAgLy8gYW5kIHRoaXJkIHBhcnRpdGlvbiBpbnRvIHRoZXNlIGxvY2F0aW9ucyBzbyB0aGF0IHdlIGNhbiBzdG9yZSB0aGVcbiAgICAvLyBwaXZvdHMuXG4gICAgYVtsb10gPSBhW2xlc3MgLSAxXTtcbiAgICBhW2xlc3MgLSAxXSA9IHBpdm90MTtcbiAgICBhW2hpIC0gMV0gPSBhW2dyZWF0ICsgMV07XG4gICAgYVtncmVhdCArIDFdID0gcGl2b3QyO1xuXG4gICAgLy8gVGhlIGxpc3QgaXMgbm93IHBhcnRpdGlvbmVkIGludG8gdGhyZWUgcGFydGl0aW9uczpcbiAgICAvLyBbIDwgcGl2b3QxICAgfCA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyICAgfCAgPiBwaXZvdDIgICBdXG4gICAgLy8gIF4gICAgICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICBeXG4gICAgLy8gbGVmdCAgICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICAgICBncmVhdCAgICAgICAgcmlnaHRcblxuICAgIC8vIFJlY3Vyc2l2ZSBkZXNjZW50LiAoRG9uJ3QgaW5jbHVkZSB0aGUgcGl2b3QgdmFsdWVzLilcbiAgICBzb3J0KGEsIGxvLCBsZXNzIC0gMSk7XG4gICAgc29ydChhLCBncmVhdCArIDIsIGhpKTtcblxuICAgIGlmIChwaXZvdHNFcXVhbCkge1xuICAgICAgLy8gQWxsIGVsZW1lbnRzIGluIHRoZSBzZWNvbmQgcGFydGl0aW9uIGFyZSBlcXVhbCB0byB0aGUgcGl2b3QuIE5vXG4gICAgICAvLyBuZWVkIHRvIHNvcnQgdGhlbS5cbiAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8vIEluIHRoZW9yeSBpdCBzaG91bGQgYmUgZW5vdWdoIHRvIGNhbGwgX2RvU29ydCByZWN1cnNpdmVseSBvbiB0aGUgc2Vjb25kXG4gICAgLy8gcGFydGl0aW9uLlxuICAgIC8vIFRoZSBBbmRyb2lkIHNvdXJjZSBob3dldmVyIHJlbW92ZXMgdGhlIHBpdm90IGVsZW1lbnRzIGZyb20gdGhlIHJlY3Vyc2l2ZVxuICAgIC8vIGNhbGwgaWYgdGhlIHNlY29uZCBwYXJ0aXRpb24gaXMgdG9vIGxhcmdlIChtb3JlIHRoYW4gMi8zIG9mIHRoZSBsaXN0KS5cbiAgICBpZiAobGVzcyA8IGkxICYmIGdyZWF0ID4gaTUpIHtcbiAgICAgIHZhciBsZXNzVmFsdWUsIGdyZWF0VmFsdWU7XG4gICAgICB3aGlsZSAoKGxlc3NWYWx1ZSA9IGYoYVtsZXNzXSkpIDw9IHBpdm90VmFsdWUxICYmIGxlc3NWYWx1ZSA+PSBwaXZvdFZhbHVlMSkgKytsZXNzO1xuICAgICAgd2hpbGUgKChncmVhdFZhbHVlID0gZihhW2dyZWF0XSkpIDw9IHBpdm90VmFsdWUyICYmIGdyZWF0VmFsdWUgPj0gcGl2b3RWYWx1ZTIpIC0tZ3JlYXQ7XG5cbiAgICAgIC8vIENvcHkgcGFzdGUgb2YgdGhlIHByZXZpb3VzIDMtd2F5IHBhcnRpdGlvbmluZyB3aXRoIGFkYXB0aW9ucy5cbiAgICAgIC8vXG4gICAgICAvLyBXZSBwYXJ0aXRpb24gdGhlIGxpc3QgaW50byB0aHJlZSBwYXJ0czpcbiAgICAgIC8vICAxLiA9PSBwaXZvdDFcbiAgICAgIC8vICAyLiA+IHBpdm90MSAmJiA8IHBpdm90MlxuICAgICAgLy8gIDMuID09IHBpdm90MlxuICAgICAgLy9cbiAgICAgIC8vIER1cmluZyB0aGUgbG9vcCB3ZSBoYXZlOlxuICAgICAgLy8gWyA9PSBwaXZvdDEgfCA+IHBpdm90MSAmJiA8IHBpdm90MiB8IHVucGFydGl0aW9uZWQgIHwgPT0gcGl2b3QyIF1cbiAgICAgIC8vICAgICAgICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgIF4gICAgICAgICAgICAgIF5cbiAgICAgIC8vICAgICAgICAgICAgbGVzcyAgICAgICAgICAgICAgICAgICAgIGsgICAgICAgICAgICAgIGdyZWF0XG4gICAgICAvL1xuICAgICAgLy8gSW52YXJpYW50czpcbiAgICAgIC8vICAgMS4gZm9yIHggaW4gWyAqLCBsZXNzWyA6IHggPT0gcGl2b3QxXG4gICAgICAvLyAgIDIuIGZvciB4IGluIFtsZXNzLCBrWyA6IHBpdm90MSA8IHggJiYgeCA8IHBpdm90MlxuICAgICAgLy8gICAzLiBmb3IgeCBpbiBdZ3JlYXQsICogXSA6IHggPT0gcGl2b3QyXG4gICAgICBmb3IgKHZhciBrID0gbGVzczsgayA8PSBncmVhdDsgaysrKSB7XG4gICAgICAgIHZhciBlayA9IGFba10sIHhrID0gZihlayk7XG4gICAgICAgIGlmICh4ayA8PSBwaXZvdFZhbHVlMSAmJiB4ayA+PSBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgIGlmIChrICE9PSBsZXNzKSB7XG4gICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgIGFbbGVzc10gPSBlaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVzcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh4ayA8PSBwaXZvdFZhbHVlMiAmJiB4ayA+PSBwaXZvdFZhbHVlMikge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKTtcbiAgICAgICAgICAgICAgaWYgKGdyZWF0VmFsdWUgPD0gcGl2b3RWYWx1ZTIgJiYgZ3JlYXRWYWx1ZSA+PSBwaXZvdFZhbHVlMikge1xuICAgICAgICAgICAgICAgIGdyZWF0LS07XG4gICAgICAgICAgICAgICAgaWYgKGdyZWF0IDwgaykgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBsb2NhdGlvbiBpbnNpZGUgdGhlIGxvb3Agd2hlcmUgYSBuZXdcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gaXMgc3RhcnRlZC5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhW2dyZWF0XSA8IHBpdm90Mi5cbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUcmlwbGUgZXhjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgICAgICAgIGFbbGVzcysrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBhW2dyZWF0XSA9PSBwaXZvdDEuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIHNlY29uZCBwYXJ0aXRpb24gaGFzIG5vdyBiZWVuIGNsZWFyZWQgb2YgcGl2b3QgZWxlbWVudHMgYW5kIGxvb2tzXG4gICAgLy8gYXMgZm9sbG93czpcbiAgICAvLyBbICAqICB8ICA+IHBpdm90MSAmJiA8IHBpdm90MiAgfCAqIF1cbiAgICAvLyAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICBeXG4gICAgLy8gICAgICAgbGVzcyAgICAgICAgICAgICAgICAgIGdyZWF0XG4gICAgLy8gU29ydCB0aGUgc2Vjb25kIHBhcnRpdGlvbiB1c2luZyByZWN1cnNpdmUgZGVzY2VudC5cblxuICAgIC8vIFRoZSBzZWNvbmQgcGFydGl0aW9uIGxvb2tzIGFzIGZvbGxvd3M6XG4gICAgLy8gWyAgKiAgfCAgPj0gcGl2b3QxICYmIDw9IHBpdm90MiAgfCAqIF1cbiAgICAvLyAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICAgIF5cbiAgICAvLyAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICBncmVhdFxuICAgIC8vIFNpbXBseSBzb3J0IGl0IGJ5IHJlY3Vyc2l2ZSBkZXNjZW50LlxuXG4gICAgcmV0dXJuIHNvcnQoYSwgbGVzcywgZ3JlYXQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiBzb3J0O1xufVxuXG52YXIgcXVpY2tzb3J0X3NpemVUaHJlc2hvbGQgPSAzMjtcbnZhciBjcm9zc2ZpbHRlcl9hcnJheTggPSBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQsXG4gICAgY3Jvc3NmaWx0ZXJfYXJyYXkxNiA9IGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZCxcbiAgICBjcm9zc2ZpbHRlcl9hcnJheTMyID0gY3Jvc3NmaWx0ZXJfYXJyYXlVbnR5cGVkLFxuICAgIGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW4gPSBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuVW50eXBlZCxcbiAgICBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuID0gY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlblVudHlwZWQ7XG5cbmlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBjcm9zc2ZpbHRlcl9hcnJheTggPSBmdW5jdGlvbihuKSB7IHJldHVybiBuZXcgVWludDhBcnJheShuKTsgfTtcbiAgY3Jvc3NmaWx0ZXJfYXJyYXkxNiA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50MTZBcnJheShuKTsgfTtcbiAgY3Jvc3NmaWx0ZXJfYXJyYXkzMiA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50MzJBcnJheShuKTsgfTtcblxuICBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuID0gZnVuY3Rpb24oYXJyYXksIGxlbmd0aCkge1xuICAgIGlmIChhcnJheS5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gYXJyYXk7XG4gICAgdmFyIGNvcHkgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcbiAgICBjb3B5LnNldChhcnJheSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlbiA9IGZ1bmN0aW9uKGFycmF5LCB3aWR0aCkge1xuICAgIHZhciBjb3B5O1xuICAgIHN3aXRjaCAod2lkdGgpIHtcbiAgICAgIGNhc2UgMTY6IGNvcHkgPSBjcm9zc2ZpbHRlcl9hcnJheTE2KGFycmF5Lmxlbmd0aCk7IGJyZWFrO1xuICAgICAgY2FzZSAzMjogY29weSA9IGNyb3NzZmlsdGVyX2FycmF5MzIoYXJyYXkubGVuZ3RoKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGFycmF5IHdpZHRoIVwiKTtcbiAgICB9XG4gICAgY29weS5zZXQoYXJyYXkpO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQobikge1xuICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkobiksIGkgPSAtMTtcbiAgd2hpbGUgKCsraSA8IG4pIGFycmF5W2ldID0gMDtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuVW50eXBlZChhcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBuID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobiA8IGxlbmd0aCkgYXJyYXlbbisrXSA9IDA7XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlblVudHlwZWQoYXJyYXksIHdpZHRoKSB7XG4gIGlmICh3aWR0aCA+IDMyKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGFycmF5IHdpZHRoIVwiKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfZmlsdGVyRXhhY3QoYmlzZWN0LCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgIHJldHVybiBbYmlzZWN0LmxlZnQodmFsdWVzLCB2YWx1ZSwgMCwgbiksIGJpc2VjdC5yaWdodCh2YWx1ZXMsIHZhbHVlLCAwLCBuKV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2ZpbHRlclJhbmdlKGJpc2VjdCwgcmFuZ2UpIHtcbiAgdmFyIG1pbiA9IHJhbmdlWzBdLFxuICAgICAgbWF4ID0gcmFuZ2VbMV07XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFtiaXNlY3QubGVmdCh2YWx1ZXMsIG1pbiwgMCwgbiksIGJpc2VjdC5sZWZ0KHZhbHVlcywgbWF4LCAwLCBuKV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX2ZpbHRlckFsbCh2YWx1ZXMpIHtcbiAgcmV0dXJuIFswLCB2YWx1ZXMubGVuZ3RoXTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX251bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VJbmNyZW1lbnQocCkge1xuICByZXR1cm4gcCArIDE7XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZURlY3JlbWVudChwKSB7XG4gIHJldHVybiBwIC0gMTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfcmVkdWNlQWRkKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHAsIHYpIHtcbiAgICByZXR1cm4gcCArICtmKHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VTdWJ0cmFjdChmKSB7XG4gIHJldHVybiBmdW5jdGlvbihwLCB2KSB7XG4gICAgcmV0dXJuIHAgLSBmKHYpO1xuICB9O1xufVxuZXhwb3J0cy5jcm9zc2ZpbHRlciA9IGNyb3NzZmlsdGVyO1xuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcigpIHtcbiAgdmFyIGNyb3NzZmlsdGVyID0ge1xuICAgIGFkZDogYWRkLFxuICAgIHJlbW92ZTogcmVtb3ZlRGF0YSxcbiAgICBkaW1lbnNpb246IGRpbWVuc2lvbixcbiAgICBncm91cEFsbDogZ3JvdXBBbGwsXG4gICAgc2l6ZTogc2l6ZVxuICB9O1xuXG4gIHZhciBkYXRhID0gW10sIC8vIHRoZSByZWNvcmRzXG4gICAgICBuID0gMCwgLy8gdGhlIG51bWJlciBvZiByZWNvcmRzOyBkYXRhLmxlbmd0aFxuICAgICAgbSA9IDAsIC8vIGEgYml0IG1hc2sgcmVwcmVzZW50aW5nIHdoaWNoIGRpbWVuc2lvbnMgYXJlIGluIHVzZVxuICAgICAgTSA9IDgsIC8vIG51bWJlciBvZiBkaW1lbnNpb25zIHRoYXQgY2FuIGZpdCBpbiBgZmlsdGVyc2BcbiAgICAgIGZpbHRlcnMgPSBjcm9zc2ZpbHRlcl9hcnJheTgoMCksIC8vIE0gYml0cyBwZXIgcmVjb3JkOyAxIGlzIGZpbHRlcmVkIG91dFxuICAgICAgZmlsdGVyTGlzdGVuZXJzID0gW10sIC8vIHdoZW4gdGhlIGZpbHRlcnMgY2hhbmdlXG4gICAgICBkYXRhTGlzdGVuZXJzID0gW10sIC8vIHdoZW4gZGF0YSBpcyBhZGRlZFxuICAgICAgcmVtb3ZlRGF0YUxpc3RlbmVycyA9IFtdOyAvLyB3aGVuIGRhdGEgaXMgcmVtb3ZlZFxuXG4gIC8vIEFkZHMgdGhlIHNwZWNpZmllZCBuZXcgcmVjb3JkcyB0byB0aGlzIGNyb3NzZmlsdGVyLlxuICBmdW5jdGlvbiBhZGQobmV3RGF0YSkge1xuICAgIHZhciBuMCA9IG4sXG4gICAgICAgIG4xID0gbmV3RGF0YS5sZW5ndGg7XG5cbiAgICAvLyBJZiB0aGVyZSdzIGFjdHVhbGx5IG5ldyBkYXRhIHRvIGFkZOKAplxuICAgIC8vIE1lcmdlIHRoZSBuZXcgZGF0YSBpbnRvIHRoZSBleGlzdGluZyBkYXRhLlxuICAgIC8vIExlbmd0aGVuIHRoZSBmaWx0ZXIgYml0c2V0IHRvIGhhbmRsZSB0aGUgbmV3IHJlY29yZHMuXG4gICAgLy8gTm90aWZ5IGxpc3RlbmVycyAoZGltZW5zaW9ucyBhbmQgZ3JvdXBzKSB0aGF0IG5ldyBkYXRhIGlzIGF2YWlsYWJsZS5cbiAgICBpZiAobjEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChuZXdEYXRhKTtcbiAgICAgIGZpbHRlcnMgPSBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuKGZpbHRlcnMsIG4gKz0gbjEpO1xuICAgICAgZGF0YUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChuZXdEYXRhLCBuMCwgbjEpOyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3Jvc3NmaWx0ZXI7XG4gIH1cblxuICAvLyBSZW1vdmVzIGFsbCByZWNvcmRzIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgZmlsdGVycy5cbiAgZnVuY3Rpb24gcmVtb3ZlRGF0YSgpIHtcbiAgICB2YXIgbmV3SW5kZXggPSBjcm9zc2ZpbHRlcl9pbmRleChuLCBuKSxcbiAgICAgICAgcmVtb3ZlZCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGZpbHRlcnNbaV0pIG5ld0luZGV4W2ldID0gaisrO1xuICAgICAgZWxzZSByZW1vdmVkLnB1c2goaSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBtYXRjaGluZyByZWNvcmRzIGZyb20gZ3JvdXBzLlxuICAgIGZpbHRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbCgwLCBbXSwgcmVtb3ZlZCk7IH0pO1xuXG4gICAgLy8gVXBkYXRlIGluZGV4ZXMuXG4gICAgcmVtb3ZlRGF0YUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChuZXdJbmRleCk7IH0pO1xuXG4gICAgLy8gUmVtb3ZlIG9sZCBmaWx0ZXJzIGFuZCBkYXRhIGJ5IG92ZXJ3cml0aW5nLlxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMCwgazsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGsgPSBmaWx0ZXJzW2ldKSB7XG4gICAgICAgIGlmIChpICE9PSBqKSBmaWx0ZXJzW2pdID0gaywgZGF0YVtqXSA9IGRhdGFbaV07XG4gICAgICAgICsrajtcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YS5sZW5ndGggPSBqO1xuICAgIHdoaWxlIChuID4gaikgZmlsdGVyc1stLW5dID0gMDtcbiAgfVxuXG4gIC8vIEFkZHMgYSBuZXcgZGltZW5zaW9uIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZSBhY2Nlc3NvciBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gZGltZW5zaW9uKHZhbHVlKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHtcbiAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgZmlsdGVyRXhhY3Q6IGZpbHRlckV4YWN0LFxuICAgICAgZmlsdGVyUmFuZ2U6IGZpbHRlclJhbmdlLFxuICAgICAgZmlsdGVyRnVuY3Rpb246IGZpbHRlckZ1bmN0aW9uLFxuICAgICAgZmlsdGVyQWxsOiBmaWx0ZXJBbGwsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgZ3JvdXBBbGw6IGdyb3VwQWxsLFxuICAgICAgZGlzcG9zZTogZGlzcG9zZSxcbiAgICAgIHJlbW92ZTogZGlzcG9zZSAvLyBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgICB9O1xuXG4gICAgdmFyIG9uZSA9IH5tICYgLX5tLCAvLyBsb3dlc3QgdW5zZXQgYml0IGFzIG1hc2ssIGUuZy4sIDAwMDAxMDAwXG4gICAgICAgIHplcm8gPSB+b25lLCAvLyBpbnZlcnRlZCBvbmUsIGUuZy4sIDExMTEwMTExXG4gICAgICAgIHZhbHVlcywgLy8gc29ydGVkLCBjYWNoZWQgYXJyYXlcbiAgICAgICAgaW5kZXgsIC8vIHZhbHVlIHJhbmsg4oamIG9iamVjdCBpZFxuICAgICAgICBuZXdWYWx1ZXMsIC8vIHRlbXBvcmFyeSBhcnJheSBzdG9yaW5nIG5ld2x5LWFkZGVkIHZhbHVlc1xuICAgICAgICBuZXdJbmRleCwgLy8gdGVtcG9yYXJ5IGFycmF5IHN0b3JpbmcgbmV3bHktYWRkZWQgaW5kZXhcbiAgICAgICAgc29ydCA9IHF1aWNrc29ydF9ieShmdW5jdGlvbihpKSB7IHJldHVybiBuZXdWYWx1ZXNbaV07IH0pLFxuICAgICAgICByZWZpbHRlciA9IGNyb3NzZmlsdGVyX2ZpbHRlckFsbCwgLy8gZm9yIHJlY29tcHV0aW5nIGZpbHRlclxuICAgICAgICByZWZpbHRlckZ1bmN0aW9uLCAvLyB0aGUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbiBpbiB1c2VcbiAgICAgICAgaW5kZXhMaXN0ZW5lcnMgPSBbXSwgLy8gd2hlbiBkYXRhIGlzIGFkZGVkXG4gICAgICAgIGRpbWVuc2lvbkdyb3VwcyA9IFtdLFxuICAgICAgICBsbzAgPSAwLFxuICAgICAgICBoaTAgPSAwO1xuXG4gICAgLy8gVXBkYXRpbmcgYSBkaW1lbnNpb24gaXMgYSB0d28tc3RhZ2UgcHJvY2Vzcy4gRmlyc3QsIHdlIG11c3QgdXBkYXRlIHRoZVxuICAgIC8vIGFzc29jaWF0ZWQgZmlsdGVycyBmb3IgdGhlIG5ld2x5LWFkZGVkIHJlY29yZHMuIE9uY2UgYWxsIGRpbWVuc2lvbnMgaGF2ZVxuICAgIC8vIHVwZGF0ZWQgdGhlaXIgZmlsdGVycywgdGhlIGdyb3VwcyBhcmUgbm90aWZpZWQgdG8gdXBkYXRlLlxuICAgIGRhdGFMaXN0ZW5lcnMudW5zaGlmdChwcmVBZGQpO1xuICAgIGRhdGFMaXN0ZW5lcnMucHVzaChwb3N0QWRkKTtcblxuICAgIHJlbW92ZURhdGFMaXN0ZW5lcnMucHVzaChyZW1vdmVEYXRhKTtcblxuICAgIC8vIEluY29ycG9yYXRlIGFueSBleGlzdGluZyBkYXRhIGludG8gdGhpcyBkaW1lbnNpb24sIGFuZCBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAvLyBmaWx0ZXIgYml0c2V0IGlzIHdpZGUgZW5vdWdoIHRvIGhhbmRsZSB0aGUgbmV3IGRpbWVuc2lvbi5cbiAgICBtIHw9IG9uZTtcbiAgICBpZiAoTSA+PSAzMiA/ICFvbmUgOiBtICYgLSgxIDw8IE0pKSB7XG4gICAgICBmaWx0ZXJzID0gY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlbihmaWx0ZXJzLCBNIDw8PSAxKTtcbiAgICB9XG4gICAgcHJlQWRkKGRhdGEsIDAsIG4pO1xuICAgIHBvc3RBZGQoZGF0YSwgMCwgbik7XG5cbiAgICAvLyBJbmNvcnBvcmF0ZXMgdGhlIHNwZWNpZmllZCBuZXcgcmVjb3JkcyBpbnRvIHRoaXMgZGltZW5zaW9uLlxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIGZpbHRlcnMsIHZhbHVlcywgYW5kIGluZGV4LlxuICAgIGZ1bmN0aW9uIHByZUFkZChuZXdEYXRhLCBuMCwgbjEpIHtcblxuICAgICAgLy8gUGVybXV0ZSBuZXcgdmFsdWVzIGludG8gbmF0dXJhbCBvcmRlciB1c2luZyBhIHNvcnRlZCBpbmRleC5cbiAgICAgIG5ld1ZhbHVlcyA9IG5ld0RhdGEubWFwKHZhbHVlKTtcbiAgICAgIG5ld0luZGV4ID0gc29ydChjcm9zc2ZpbHRlcl9yYW5nZShuMSksIDAsIG4xKTtcbiAgICAgIG5ld1ZhbHVlcyA9IHBlcm11dGUobmV3VmFsdWVzLCBuZXdJbmRleCk7XG5cbiAgICAgIC8vIEJpc2VjdCBuZXdWYWx1ZXMgdG8gZGV0ZXJtaW5lIHdoaWNoIG5ldyByZWNvcmRzIGFyZSBzZWxlY3RlZC5cbiAgICAgIHZhciBib3VuZHMgPSByZWZpbHRlcihuZXdWYWx1ZXMpLCBsbzEgPSBib3VuZHNbMF0sIGhpMSA9IGJvdW5kc1sxXSwgaTtcbiAgICAgIGlmIChyZWZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMTsgKytpKSB7XG4gICAgICAgICAgaWYgKCFyZWZpbHRlckZ1bmN0aW9uKG5ld1ZhbHVlc1tpXSwgaSkpIGZpbHRlcnNbbmV3SW5kZXhbaV0gKyBuMF0gfD0gb25lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbG8xOyArK2kpIGZpbHRlcnNbbmV3SW5kZXhbaV0gKyBuMF0gfD0gb25lO1xuICAgICAgICBmb3IgKGkgPSBoaTE7IGkgPCBuMTsgKytpKSBmaWx0ZXJzW25ld0luZGV4W2ldICsgbjBdIHw9IG9uZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBkaW1lbnNpb24gcHJldmlvdXNseSBoYWQgbm8gZGF0YSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZVxuICAgICAgLy8gbW9yZSBleHBlbnNpdmUgbWVyZ2Ugb3BlcmF0aW9uOyB1c2UgdGhlIG5ldyB2YWx1ZXMgYW5kIGluZGV4IGFzLWlzLlxuICAgICAgaWYgKCFuMCkge1xuICAgICAgICB2YWx1ZXMgPSBuZXdWYWx1ZXM7XG4gICAgICAgIGluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgIGxvMCA9IGxvMTtcbiAgICAgICAgaGkwID0gaGkxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvbGRWYWx1ZXMgPSB2YWx1ZXMsXG4gICAgICAgICAgb2xkSW5kZXggPSBpbmRleCxcbiAgICAgICAgICBpMCA9IDAsXG4gICAgICAgICAgaTEgPSAwO1xuXG4gICAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBuZXcgYXJyYXlzIGludG8gd2hpY2ggdG8gbWVyZ2UgbmV3IGFuZCBvbGQuXG4gICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkobik7XG4gICAgICBpbmRleCA9IGNyb3NzZmlsdGVyX2luZGV4KG4sIG4pO1xuXG4gICAgICAvLyBNZXJnZSB0aGUgb2xkIGFuZCBuZXcgc29ydGVkIHZhbHVlcywgYW5kIG9sZCBhbmQgbmV3IGluZGV4LlxuICAgICAgZm9yIChpID0gMDsgaTAgPCBuMCAmJiBpMSA8IG4xOyArK2kpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlc1tpMF0gPCBuZXdWYWx1ZXNbaTFdKSB7XG4gICAgICAgICAgdmFsdWVzW2ldID0gb2xkVmFsdWVzW2kwXTtcbiAgICAgICAgICBpbmRleFtpXSA9IG9sZEluZGV4W2kwKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlc1tpXSA9IG5ld1ZhbHVlc1tpMV07XG4gICAgICAgICAgaW5kZXhbaV0gPSBuZXdJbmRleFtpMSsrXSArIG4wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG9sZCB2YWx1ZXMuXG4gICAgICBmb3IgKDsgaTAgPCBuMDsgKytpMCwgKytpKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IG9sZFZhbHVlc1tpMF07XG4gICAgICAgIGluZGV4W2ldID0gb2xkSW5kZXhbaTBdO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW55IHJlbWFpbmluZyBuZXcgdmFsdWVzLlxuICAgICAgZm9yICg7IGkxIDwgbjE7ICsraTEsICsraSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSBuZXdWYWx1ZXNbaTFdO1xuICAgICAgICBpbmRleFtpXSA9IG5ld0luZGV4W2kxXSArIG4wO1xuICAgICAgfVxuXG4gICAgICAvLyBCaXNlY3QgYWdhaW4gdG8gcmVjb21wdXRlIGxvMCBhbmQgaGkwLlxuICAgICAgYm91bmRzID0gcmVmaWx0ZXIodmFsdWVzKSwgbG8wID0gYm91bmRzWzBdLCBoaTAgPSBib3VuZHNbMV07XG4gICAgfVxuXG4gICAgLy8gV2hlbiBhbGwgZmlsdGVycyBoYXZlIHVwZGF0ZWQsIG5vdGlmeSBpbmRleCBsaXN0ZW5lcnMgb2YgdGhlIG5ldyB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gcG9zdEFkZChuZXdEYXRhLCBuMCwgbjEpIHtcbiAgICAgIGluZGV4TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG5ld1ZhbHVlcywgbmV3SW5kZXgsIG4wLCBuMSk7IH0pO1xuICAgICAgbmV3VmFsdWVzID0gbmV3SW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZURhdGEocmVJbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLCBrOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmIChmaWx0ZXJzW2sgPSBpbmRleFtpXV0pIHtcbiAgICAgICAgICBpZiAoaSAhPT0gaikgdmFsdWVzW2pdID0gdmFsdWVzW2ldO1xuICAgICAgICAgIGluZGV4W2pdID0gcmVJbmRleFtrXTtcbiAgICAgICAgICArK2o7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhbHVlcy5sZW5ndGggPSBqO1xuICAgICAgd2hpbGUgKGogPCBuKSBpbmRleFtqKytdID0gMDtcblxuICAgICAgLy8gQmlzZWN0IGFnYWluIHRvIHJlY29tcHV0ZSBsbzAgYW5kIGhpMC5cbiAgICAgIHZhciBib3VuZHMgPSByZWZpbHRlcih2YWx1ZXMpO1xuICAgICAgbG8wID0gYm91bmRzWzBdLCBoaTAgPSBib3VuZHNbMV07XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgc2VsZWN0ZWQgdmFsdWVzIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgYm91bmRzIFtsbywgaGldLlxuICAgIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBieSBhbGwgdGhlIHB1YmxpYyBmaWx0ZXIgbWV0aG9kcy5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJbmRleEJvdW5kcyhib3VuZHMpIHtcbiAgICAgIHZhciBsbzEgPSBib3VuZHNbMF0sXG4gICAgICAgICAgaGkxID0gYm91bmRzWzFdO1xuXG4gICAgICBpZiAocmVmaWx0ZXJGdW5jdGlvbikge1xuICAgICAgICByZWZpbHRlckZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgZmlsdGVySW5kZXhGdW5jdGlvbihmdW5jdGlvbihkLCBpKSB7IHJldHVybiBsbzEgPD0gaSAmJiBpIDwgaGkxOyB9KTtcbiAgICAgICAgbG8wID0gbG8xO1xuICAgICAgICBoaTAgPSBoaTE7XG4gICAgICAgIHJldHVybiBkaW1lbnNpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBpLFxuICAgICAgICAgIGosXG4gICAgICAgICAgayxcbiAgICAgICAgICBhZGRlZCA9IFtdLFxuICAgICAgICAgIHJlbW92ZWQgPSBbXTtcblxuICAgICAgLy8gRmFzdCBpbmNyZW1lbnRhbCB1cGRhdGUgYmFzZWQgb24gcHJldmlvdXMgbG8gaW5kZXguXG4gICAgICBpZiAobG8xIDwgbG8wKSB7XG4gICAgICAgIGZvciAoaSA9IGxvMSwgaiA9IE1hdGgubWluKGxvMCwgaGkxKTsgaSA8IGo7ICsraSkge1xuICAgICAgICAgIGZpbHRlcnNbayA9IGluZGV4W2ldXSBePSBvbmU7XG4gICAgICAgICAgYWRkZWQucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsbzEgPiBsbzApIHtcbiAgICAgICAgZm9yIChpID0gbG8wLCBqID0gTWF0aC5taW4obG8xLCBoaTApOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1trID0gaW5kZXhbaV1dIF49IG9uZTtcbiAgICAgICAgICByZW1vdmVkLnB1c2goayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmFzdCBpbmNyZW1lbnRhbCB1cGRhdGUgYmFzZWQgb24gcHJldmlvdXMgaGkgaW5kZXguXG4gICAgICBpZiAoaGkxID4gaGkwKSB7XG4gICAgICAgIGZvciAoaSA9IE1hdGgubWF4KGxvMSwgaGkwKSwgaiA9IGhpMTsgaSA8IGo7ICsraSkge1xuICAgICAgICAgIGZpbHRlcnNbayA9IGluZGV4W2ldXSBePSBvbmU7XG4gICAgICAgICAgYWRkZWQucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoaTEgPCBoaTApIHtcbiAgICAgICAgZm9yIChpID0gTWF0aC5tYXgobG8wLCBoaTEpLCBqID0gaGkwOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1trID0gaW5kZXhbaV1dIF49IG9uZTtcbiAgICAgICAgICByZW1vdmVkLnB1c2goayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG8wID0gbG8xO1xuICAgICAgaGkwID0gaGkxO1xuICAgICAgZmlsdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG9uZSwgYWRkZWQsIHJlbW92ZWQpOyB9KTtcbiAgICAgIHJldHVybiBkaW1lbnNpb247XG4gICAgfVxuXG4gICAgLy8gRmlsdGVycyB0aGlzIGRpbWVuc2lvbiB1c2luZyB0aGUgc3BlY2lmaWVkIHJhbmdlLCB2YWx1ZSwgb3IgbnVsbC5cbiAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgbnVsbCwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGZpbHRlckFsbC5cbiAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgYW4gYXJyYXksIHRoaXMgaXMgZXF1aXZhbGVudCB0byBmaWx0ZXJSYW5nZS5cbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgaXMgZXF1aXZhbGVudCB0byBmaWx0ZXJFeGFjdC5cbiAgICBmdW5jdGlvbiBmaWx0ZXIocmFuZ2UpIHtcbiAgICAgIHJldHVybiByYW5nZSA9PSBudWxsXG4gICAgICAgICAgPyBmaWx0ZXJBbGwoKSA6IEFycmF5LmlzQXJyYXkocmFuZ2UpXG4gICAgICAgICAgPyBmaWx0ZXJSYW5nZShyYW5nZSkgOiB0eXBlb2YgcmFuZ2UgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZmlsdGVyRnVuY3Rpb24ocmFuZ2UpXG4gICAgICAgICAgOiBmaWx0ZXJFeGFjdChyYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVycyB0aGlzIGRpbWVuc2lvbiB0byBzZWxlY3QgdGhlIGV4YWN0IHZhbHVlLlxuICAgIGZ1bmN0aW9uIGZpbHRlckV4YWN0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gZmlsdGVySW5kZXhCb3VuZHMoKHJlZmlsdGVyID0gY3Jvc3NmaWx0ZXJfZmlsdGVyRXhhY3QoYmlzZWN0LCB2YWx1ZSkpKHZhbHVlcykpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgdGhpcyBkaW1lbnNpb24gdG8gc2VsZWN0IHRoZSBzcGVjaWZpZWQgcmFuZ2UgW2xvLCBoaV0uXG4gICAgLy8gVGhlIGxvd2VyIGJvdW5kIGlzIGluY2x1c2l2ZSwgYW5kIHRoZSB1cHBlciBib3VuZCBpcyBleGNsdXNpdmUuXG4gICAgZnVuY3Rpb24gZmlsdGVyUmFuZ2UocmFuZ2UpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSBjcm9zc2ZpbHRlcl9maWx0ZXJSYW5nZShiaXNlY3QsIHJhbmdlKSkodmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXJzIGFueSBmaWx0ZXJzIG9uIHRoaXMgZGltZW5zaW9uLlxuICAgIGZ1bmN0aW9uIGZpbHRlckFsbCgpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSBjcm9zc2ZpbHRlcl9maWx0ZXJBbGwpKHZhbHVlcykpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgdGhpcyBkaW1lbnNpb24gdXNpbmcgYW4gYXJiaXRyYXJ5IGZ1bmN0aW9uLlxuICAgIGZ1bmN0aW9uIGZpbHRlckZ1bmN0aW9uKGYpIHtcbiAgICAgIHJlZmlsdGVyID0gY3Jvc3NmaWx0ZXJfZmlsdGVyQWxsO1xuXG4gICAgICBmaWx0ZXJJbmRleEZ1bmN0aW9uKHJlZmlsdGVyRnVuY3Rpb24gPSBmKTtcblxuICAgICAgbG8wID0gMDtcbiAgICAgIGhpMCA9IG47XG5cbiAgICAgIHJldHVybiBkaW1lbnNpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVySW5kZXhGdW5jdGlvbihmKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgYWRkZWQgPSBbXSxcbiAgICAgICAgICByZW1vdmVkID0gW107XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCEoZmlsdGVyc1trID0gaW5kZXhbaV1dICYgb25lKSBeICEhKHggPSBmKHZhbHVlc1tpXSwgaSkpKSB7XG4gICAgICAgICAgaWYgKHgpIGZpbHRlcnNba10gJj0gemVybywgYWRkZWQucHVzaChrKTtcbiAgICAgICAgICBlbHNlIGZpbHRlcnNba10gfD0gb25lLCByZW1vdmVkLnB1c2goayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbHRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsgbChvbmUsIGFkZGVkLCByZW1vdmVkKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgdG9wIEsgc2VsZWN0ZWQgcmVjb3JkcyBiYXNlZCBvbiB0aGlzIGRpbWVuc2lvbidzIG9yZGVyLlxuICAgIC8vIE5vdGU6IG9ic2VydmVzIHRoaXMgZGltZW5zaW9uJ3MgZmlsdGVyLCB1bmxpa2UgZ3JvdXAgYW5kIGdyb3VwQWxsLlxuICAgIGZ1bmN0aW9uIHRvcChrKSB7XG4gICAgICB2YXIgYXJyYXkgPSBbXSxcbiAgICAgICAgICBpID0gaGkwLFxuICAgICAgICAgIGo7XG5cbiAgICAgIHdoaWxlICgtLWkgPj0gbG8wICYmIGsgPiAwKSB7XG4gICAgICAgIGlmICghZmlsdGVyc1tqID0gaW5kZXhbaV1dKSB7XG4gICAgICAgICAgYXJyYXkucHVzaChkYXRhW2pdKTtcbiAgICAgICAgICAtLWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGJvdHRvbSBLIHNlbGVjdGVkIHJlY29yZHMgYmFzZWQgb24gdGhpcyBkaW1lbnNpb24ncyBvcmRlci5cbiAgICAvLyBOb3RlOiBvYnNlcnZlcyB0aGlzIGRpbWVuc2lvbidzIGZpbHRlciwgdW5saWtlIGdyb3VwIGFuZCBncm91cEFsbC5cbiAgICBmdW5jdGlvbiBib3R0b20oaykge1xuICAgICAgdmFyIGFycmF5ID0gW10sXG4gICAgICAgICAgaSA9IGxvMCxcbiAgICAgICAgICBqO1xuXG4gICAgICB3aGlsZSAoaSA8IGhpMCAmJiBrID4gMCkge1xuICAgICAgICBpZiAoIWZpbHRlcnNbaiA9IGluZGV4W2ldXSkge1xuICAgICAgICAgIGFycmF5LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgLS1rO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIEFkZHMgYSBuZXcgZ3JvdXAgdG8gdGhpcyBkaW1lbnNpb24sIHVzaW5nIHRoZSBzcGVjaWZpZWQga2V5IGZ1bmN0aW9uLlxuICAgIGZ1bmN0aW9uIGdyb3VwKGtleSkge1xuICAgICAgdmFyIGdyb3VwID0ge1xuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYWxsOiBhbGwsXG4gICAgICAgIHJlZHVjZTogcmVkdWNlLFxuICAgICAgICByZWR1Y2VDb3VudDogcmVkdWNlQ291bnQsXG4gICAgICAgIHJlZHVjZVN1bTogcmVkdWNlU3VtLFxuICAgICAgICBvcmRlcjogb3JkZXIsXG4gICAgICAgIG9yZGVyTmF0dXJhbDogb3JkZXJOYXR1cmFsLFxuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICBkaXNwb3NlOiBkaXNwb3NlLFxuICAgICAgICByZW1vdmU6IGRpc3Bvc2UgLy8gZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gICAgICB9O1xuXG4gICAgICAvLyBFbnN1cmUgdGhhdCB0aGlzIGdyb3VwIHdpbGwgYmUgcmVtb3ZlZCB3aGVuIHRoZSBkaW1lbnNpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGRpbWVuc2lvbkdyb3Vwcy5wdXNoKGdyb3VwKTtcblxuICAgICAgdmFyIGdyb3VwcywgLy8gYXJyYXkgb2Yge2tleSwgdmFsdWV9XG4gICAgICAgICAgZ3JvdXBJbmRleCwgLy8gb2JqZWN0IGlkIOKGpiBncm91cCBpZFxuICAgICAgICAgIGdyb3VwV2lkdGggPSA4LFxuICAgICAgICAgIGdyb3VwQ2FwYWNpdHkgPSBjcm9zc2ZpbHRlcl9jYXBhY2l0eShncm91cFdpZHRoKSxcbiAgICAgICAgICBrID0gMCwgLy8gY2FyZGluYWxpdHlcbiAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgaGVhcCxcbiAgICAgICAgICByZWR1Y2VBZGQsXG4gICAgICAgICAgcmVkdWNlUmVtb3ZlLFxuICAgICAgICAgIHJlZHVjZUluaXRpYWwsXG4gICAgICAgICAgdXBkYXRlID0gY3Jvc3NmaWx0ZXJfbnVsbCxcbiAgICAgICAgICByZXNldCA9IGNyb3NzZmlsdGVyX251bGwsXG4gICAgICAgICAgcmVzZXROZWVkZWQgPSB0cnVlLFxuICAgICAgICAgIGdyb3VwQWxsID0ga2V5ID09PSBjcm9zc2ZpbHRlcl9udWxsO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIGtleSA9IGNyb3NzZmlsdGVyX2lkZW50aXR5O1xuXG4gICAgICAvLyBUaGUgZ3JvdXAgbGlzdGVucyB0byB0aGUgY3Jvc3NmaWx0ZXIgZm9yIHdoZW4gYW55IGRpbWVuc2lvbiBjaGFuZ2VzLCBzb1xuICAgICAgLy8gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSBhc3NvY2lhdGVkIHJlZHVjZSB2YWx1ZXMuIEl0IG11c3QgYWxzbyBsaXN0ZW4gdG9cbiAgICAgIC8vIHRoZSBwYXJlbnQgZGltZW5zaW9uIGZvciB3aGVuIGRhdGEgaXMgYWRkZWQsIGFuZCBjb21wdXRlIG5ldyBrZXlzLlxuICAgICAgZmlsdGVyTGlzdGVuZXJzLnB1c2godXBkYXRlKTtcbiAgICAgIGluZGV4TGlzdGVuZXJzLnB1c2goYWRkKTtcbiAgICAgIHJlbW92ZURhdGFMaXN0ZW5lcnMucHVzaChyZW1vdmVEYXRhKTtcblxuICAgICAgLy8gSW5jb3Jwb3JhdGUgYW55IGV4aXN0aW5nIGRhdGEgaW50byB0aGUgZ3JvdXBpbmcuXG4gICAgICBhZGQodmFsdWVzLCBpbmRleCwgMCwgbik7XG5cbiAgICAgIC8vIEluY29ycG9yYXRlcyB0aGUgc3BlY2lmaWVkIG5ldyB2YWx1ZXMgaW50byB0aGlzIGdyb3VwLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgZ3JvdXBzIGFuZCBncm91cEluZGV4LlxuICAgICAgZnVuY3Rpb24gYWRkKG5ld1ZhbHVlcywgbmV3SW5kZXgsIG4wLCBuMSkge1xuICAgICAgICB2YXIgb2xkR3JvdXBzID0gZ3JvdXBzLFxuICAgICAgICAgICAgcmVJbmRleCA9IGNyb3NzZmlsdGVyX2luZGV4KGssIGdyb3VwQ2FwYWNpdHkpLFxuICAgICAgICAgICAgYWRkID0gcmVkdWNlQWRkLFxuICAgICAgICAgICAgaW5pdGlhbCA9IHJlZHVjZUluaXRpYWwsXG4gICAgICAgICAgICBrMCA9IGssIC8vIG9sZCBjYXJkaW5hbGl0eVxuICAgICAgICAgICAgaTAgPSAwLCAvLyBpbmRleCBvZiBvbGQgZ3JvdXBcbiAgICAgICAgICAgIGkxID0gMCwgLy8gaW5kZXggb2YgbmV3IHJlY29yZFxuICAgICAgICAgICAgaiwgLy8gb2JqZWN0IGlkXG4gICAgICAgICAgICBnMCwgLy8gb2xkIGdyb3VwXG4gICAgICAgICAgICB4MCwgLy8gb2xkIGtleVxuICAgICAgICAgICAgeDEsIC8vIG5ldyBrZXlcbiAgICAgICAgICAgIGcsIC8vIGdyb3VwIHRvIGFkZFxuICAgICAgICAgICAgeDsgLy8ga2V5IG9mIGdyb3VwIHRvIGFkZFxuXG4gICAgICAgIC8vIElmIGEgcmVzZXQgaXMgbmVlZGVkLCB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVkdWNlIHZhbHVlcy5cbiAgICAgICAgaWYgKHJlc2V0TmVlZGVkKSBhZGQgPSBpbml0aWFsID0gY3Jvc3NmaWx0ZXJfbnVsbDtcblxuICAgICAgICAvLyBSZXNldCB0aGUgbmV3IGdyb3VwcyAoayBpcyBhIGxvd2VyIGJvdW5kKS5cbiAgICAgICAgLy8gQWxzbywgbWFrZSBzdXJlIHRoYXQgZ3JvdXBJbmRleCBleGlzdHMgYW5kIGlzIGxvbmcgZW5vdWdoLlxuICAgICAgICBncm91cHMgPSBuZXcgQXJyYXkoayksIGsgPSAwO1xuICAgICAgICBncm91cEluZGV4ID0gazAgPiAxID8gY3Jvc3NmaWx0ZXJfYXJyYXlMZW5ndGhlbihncm91cEluZGV4LCBuKSA6IGNyb3NzZmlsdGVyX2luZGV4KG4sIGdyb3VwQ2FwYWNpdHkpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgb2xkIGtleSAoeDAgb2YgZzApLCBpZiBpdCBleGlzdHMuXG4gICAgICAgIGlmIChrMCkgeDAgPSAoZzAgPSBvbGRHcm91cHNbMF0pLmtleTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBuZXcga2V5ICh4MSksIHNraXBwaW5nIE5hTiBrZXlzLlxuICAgICAgICB3aGlsZSAoaTEgPCBuMSAmJiAhKCh4MSA9IGtleShuZXdWYWx1ZXNbaTFdKSkgPj0geDEpKSArK2kxO1xuXG4gICAgICAgIC8vIFdoaWxlIG5ldyBrZXlzIHJlbWFpbuKAplxuICAgICAgICB3aGlsZSAoaTEgPCBuMSkge1xuXG4gICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBsZXNzZXIgb2YgdGhlIHR3byBjdXJyZW50IGtleXM7IG5ldyBhbmQgb2xkLlxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBvbGQga2V5cyByZW1haW5pbmcsIHRoZW4gYWx3YXlzIGFkZCB0aGUgbmV3IGtleS5cbiAgICAgICAgICBpZiAoZzAgJiYgeDAgPD0geDEpIHtcbiAgICAgICAgICAgIGcgPSBnMCwgeCA9IHgwO1xuXG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIG5ldyBpbmRleCBvZiB0aGUgb2xkIGdyb3VwLlxuICAgICAgICAgICAgcmVJbmRleFtpMF0gPSBrO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgbmV4dCBvbGQga2V5LlxuICAgICAgICAgICAgaWYgKGcwID0gb2xkR3JvdXBzWysraTBdKSB4MCA9IGcwLmtleTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZyA9IHtrZXk6IHgxLCB2YWx1ZTogaW5pdGlhbCgpfSwgeCA9IHgxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCB0aGUgbGVzc2VyIGdyb3VwLlxuICAgICAgICAgIGdyb3Vwc1trXSA9IGc7XG5cbiAgICAgICAgICAvLyBBZGQgYW55IHNlbGVjdGVkIHJlY29yZHMgYmVsb25naW5nIHRvIHRoZSBhZGRlZCBncm91cCwgd2hpbGVcbiAgICAgICAgICAvLyBhZHZhbmNpbmcgdGhlIG5ldyBrZXkgYW5kIHBvcHVsYXRpbmcgdGhlIGFzc29jaWF0ZWQgZ3JvdXAgaW5kZXguXG4gICAgICAgICAgd2hpbGUgKCEoeDEgPiB4KSkge1xuICAgICAgICAgICAgZ3JvdXBJbmRleFtqID0gbmV3SW5kZXhbaTFdICsgbjBdID0gaztcbiAgICAgICAgICAgIGlmICghKGZpbHRlcnNbal0gJiB6ZXJvKSkgZy52YWx1ZSA9IGFkZChnLnZhbHVlLCBkYXRhW2pdKTtcbiAgICAgICAgICAgIGlmICgrK2kxID49IG4xKSBicmVhaztcbiAgICAgICAgICAgIHgxID0ga2V5KG5ld1ZhbHVlc1tpMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdyb3VwSW5jcmVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgYW55IHJlbWFpbmluZyBvbGQgZ3JvdXBzIHRoYXQgd2VyZSBncmVhdGVyIHRoYW4gYWxsIG5ldyBrZXlzLlxuICAgICAgICAvLyBObyBpbmNyZW1lbnRhbCByZWR1Y2UgaXMgbmVlZGVkOyB0aGVzZSBncm91cHMgaGF2ZSBubyBuZXcgcmVjb3Jkcy5cbiAgICAgICAgLy8gQWxzbyByZWNvcmQgdGhlIG5ldyBpbmRleCBvZiB0aGUgb2xkIGdyb3VwLlxuICAgICAgICB3aGlsZSAoaTAgPCBrMCkge1xuICAgICAgICAgIGdyb3Vwc1tyZUluZGV4W2kwXSA9IGtdID0gb2xkR3JvdXBzW2kwKytdO1xuICAgICAgICAgIGdyb3VwSW5jcmVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBhZGRlZCBhbnkgbmV3IGdyb3VwcyBiZWZvcmUgYW55IG9sZCBncm91cHMsXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZ3JvdXAgaW5kZXggb2YgYWxsIHRoZSBvbGQgcmVjb3Jkcy5cbiAgICAgICAgaWYgKGsgPiBpMCkgZm9yIChpMCA9IDA7IGkwIDwgbjA7ICsraTApIHtcbiAgICAgICAgICBncm91cEluZGV4W2kwXSA9IHJlSW5kZXhbZ3JvdXBJbmRleFtpMF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9kaWZ5IHRoZSB1cGRhdGUgYW5kIHJlc2V0IGJlaGF2aW9yIGJhc2VkIG9uIHRoZSBjYXJkaW5hbGl0eS5cbiAgICAgICAgLy8gSWYgdGhlIGNhcmRpbmFsaXR5IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUsIHRoZW4gdGhlIGdyb3VwSW5kZXhcbiAgICAgICAgLy8gaXMgbm90IG5lZWRlZC4gSWYgdGhlIGNhcmRpbmFsaXR5IGlzIHplcm8sIHRoZW4gdGhlcmUgYXJlIG5vIHJlY29yZHNcbiAgICAgICAgLy8gYW5kIHRoZXJlZm9yZSBubyBncm91cHMgdG8gdXBkYXRlIG9yIHJlc2V0LiBOb3RlIHRoYXQgd2UgYWxzbyBtdXN0XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgcmVnaXN0ZXJlZCBsaXN0ZW5lciB0byBwb2ludCB0byB0aGUgbmV3IG1ldGhvZC5cbiAgICAgICAgaiA9IGZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSk7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZU1hbnk7XG4gICAgICAgICAgcmVzZXQgPSByZXNldE1hbnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFrICYmIGdyb3VwQWxsKSB7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgICAgIGdyb3VwcyA9IFt7a2V5OiBudWxsLCB2YWx1ZTogaW5pdGlhbCgpfV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrID09PSAxKSB7XG4gICAgICAgICAgICB1cGRhdGUgPSB1cGRhdGVPbmU7XG4gICAgICAgICAgICByZXNldCA9IHJlc2V0T25lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGUgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICAgICAgcmVzZXQgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBncm91cEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbal0gPSB1cGRhdGU7XG5cbiAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBhZGRlZCBncm91cHMsXG4gICAgICAgIC8vIGFuZCB3aWRlbiB0aGUgZ3JvdXAgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgICBmdW5jdGlvbiBncm91cEluY3JlbWVudCgpIHtcbiAgICAgICAgICBpZiAoKytrID09PSBncm91cENhcGFjaXR5KSB7XG4gICAgICAgICAgICByZUluZGV4ID0gY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlbihyZUluZGV4LCBncm91cFdpZHRoIDw8PSAxKTtcbiAgICAgICAgICAgIGdyb3VwSW5kZXggPSBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuKGdyb3VwSW5kZXgsIGdyb3VwV2lkdGgpO1xuICAgICAgICAgICAgZ3JvdXBDYXBhY2l0eSA9IGNyb3NzZmlsdGVyX2NhcGFjaXR5KGdyb3VwV2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVEYXRhKCkge1xuICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICB2YXIgb2xkSyA9IGssXG4gICAgICAgICAgICAgIG9sZEdyb3VwcyA9IGdyb3VwcyxcbiAgICAgICAgICAgICAgc2Vlbkdyb3VwcyA9IGNyb3NzZmlsdGVyX2luZGV4KG9sZEssIG9sZEspO1xuXG4gICAgICAgICAgLy8gRmlsdGVyIG91dCBub24tbWF0Y2hlcyBieSBjb3B5aW5nIG1hdGNoaW5nIGdyb3VwIGluZGV4IGVudHJpZXMgdG9cbiAgICAgICAgICAvLyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldKSB7XG4gICAgICAgICAgICAgIHNlZW5Hcm91cHNbZ3JvdXBJbmRleFtqXSA9IGdyb3VwSW5kZXhbaV1dID0gMTtcbiAgICAgICAgICAgICAgKytqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlYXNzZW1ibGUgZ3JvdXBzIGluY2x1ZGluZyBvbmx5IHRob3NlIGdyb3VwcyB0aGF0IHdlcmUgcmVmZXJyZWRcbiAgICAgICAgICAvLyB0byBieSBtYXRjaGluZyBncm91cCBpbmRleCBlbnRyaWVzLiAgTm90ZSB0aGUgbmV3IGdyb3VwIGluZGV4IGluXG4gICAgICAgICAgLy8gc2Vlbkdyb3Vwcy5cbiAgICAgICAgICBncm91cHMgPSBbXSwgayA9IDA7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9sZEs7ICsraSkge1xuICAgICAgICAgICAgaWYgKHNlZW5Hcm91cHNbaV0pIHtcbiAgICAgICAgICAgICAgc2Vlbkdyb3Vwc1tpXSA9IGsrKztcbiAgICAgICAgICAgICAgZ3JvdXBzLnB1c2gob2xkR3JvdXBzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICAgIC8vIFJlaW5kZXggdGhlIGdyb3VwIGluZGV4IHVzaW5nIHNlZW5Hcm91cHMgdG8gZmluZCB0aGUgbmV3IGluZGV4LlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqOyArK2kpIGdyb3VwSW5kZXhbaV0gPSBzZWVuR3JvdXBzW2dyb3VwSW5kZXhbaV1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBncm91cEluZGV4ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlsdGVyTGlzdGVuZXJzW2ZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSldID0gayA+IDFcbiAgICAgICAgICAgICAgPyAocmVzZXQgPSByZXNldE1hbnksIHVwZGF0ZSA9IHVwZGF0ZU1hbnkpXG4gICAgICAgICAgICAgIDogayA9PT0gMSA/IChyZXNldCA9IHJlc2V0T25lLCB1cGRhdGUgPSB1cGRhdGVPbmUpXG4gICAgICAgICAgICAgIDogcmVzZXQgPSB1cGRhdGUgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGsgPT09IDEpIHtcbiAgICAgICAgICBpZiAoZ3JvdXBBbGwpIHJldHVybjtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgaWYgKGZpbHRlcnNbaV0pIHJldHVybjtcbiAgICAgICAgICBncm91cHMgPSBbXSwgayA9IDA7XG4gICAgICAgICAgZmlsdGVyTGlzdGVuZXJzW2ZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSldID1cbiAgICAgICAgICB1cGRhdGUgPSByZXNldCA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVkdWNlcyB0aGUgc3BlY2lmaWVkIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQgcmVjb3Jkcy5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gdGhlIGNhcmRpbmFsaXR5IGlzIGdyZWF0ZXIgdGhhbiAxLlxuICAgICAgZnVuY3Rpb24gdXBkYXRlTWFueShmaWx0ZXJPbmUsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXJPbmUgPT09IG9uZSB8fCByZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBnO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKCEoZmlsdGVyc1trID0gYWRkZWRbaV1dICYgemVybykpIHtcbiAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtrXV07XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICgoZmlsdGVyc1trID0gcmVtb3ZlZFtpXV0gJiB6ZXJvKSA9PT0gZmlsdGVyT25lKSB7XG4gICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhba11dO1xuICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZVJlbW92ZShnLnZhbHVlLCBkYXRhW2tdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVkdWNlcyB0aGUgc3BlY2lmaWVkIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQgcmVjb3Jkcy5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gdGhlIGNhcmRpbmFsaXR5IGlzIDEuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVPbmUoZmlsdGVyT25lLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgICBpZiAoZmlsdGVyT25lID09PSBvbmUgfHwgcmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgZyA9IGdyb3Vwc1swXTtcblxuICAgICAgICAvLyBBZGQgdGhlIGFkZGVkIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMCwgbiA9IGFkZGVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICghKGZpbHRlcnNbayA9IGFkZGVkW2ldXSAmIHplcm8pKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSByZW1vdmVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICgoZmlsdGVyc1trID0gcmVtb3ZlZFtpXV0gJiB6ZXJvKSA9PT0gZmlsdGVyT25lKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWNvbXB1dGVzIHRoZSBncm91cCByZWR1Y2UgdmFsdWVzIGZyb20gc2NyYXRjaC5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gdGhlIGNhcmRpbmFsaXR5IGlzIGdyZWF0ZXIgdGhhbiAxLlxuICAgICAgZnVuY3Rpb24gcmVzZXRNYW55KCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGc7XG5cbiAgICAgICAgLy8gUmVzZXQgYWxsIGdyb3VwIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7ICsraSkge1xuICAgICAgICAgIGdyb3Vwc1tpXS52YWx1ZSA9IHJlZHVjZUluaXRpYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhbnkgc2VsZWN0ZWQgcmVjb3Jkcy5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmICghKGZpbHRlcnNbaV0gJiB6ZXJvKSkge1xuICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2ldXTtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VBZGQoZy52YWx1ZSwgZGF0YVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZXMgZnJvbSBzY3JhdGNoLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgMS5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0T25lKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGcgPSBncm91cHNbMF07XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIHNpbmdsZXRvbiBncm91cCB2YWx1ZXMuXG4gICAgICAgIGcudmFsdWUgPSByZWR1Y2VJbml0aWFsKCk7XG5cbiAgICAgICAgLy8gQWRkIGFueSBzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKCEoZmlsdGVyc1tpXSAmIHplcm8pKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBhcnJheSBvZiBncm91cCB2YWx1ZXMsIGluIHRoZSBkaW1lbnNpb24ncyBuYXR1cmFsIG9yZGVyLlxuICAgICAgZnVuY3Rpb24gYWxsKCkge1xuICAgICAgICBpZiAocmVzZXROZWVkZWQpIHJlc2V0KCksIHJlc2V0TmVlZGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgdG9wIEsgZ3JvdXAgdmFsdWVzLCBpbiByZWR1Y2Ugb3JkZXIuXG4gICAgICBmdW5jdGlvbiB0b3Aoaykge1xuICAgICAgICB2YXIgdG9wID0gc2VsZWN0KGFsbCgpLCAwLCBncm91cHMubGVuZ3RoLCBrKTtcbiAgICAgICAgcmV0dXJuIGhlYXAuc29ydCh0b3AsIDAsIHRvcC5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRoZSByZWR1Y2UgYmVoYXZpb3IgZm9yIHRoaXMgZ3JvdXAgdG8gdXNlIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb25zLlxuICAgICAgLy8gVGhpcyBtZXRob2QgbGF6aWx5IHJlY29tcHV0ZXMgdGhlIHJlZHVjZSB2YWx1ZXMsIHdhaXRpbmcgdW50aWwgbmVlZGVkLlxuICAgICAgZnVuY3Rpb24gcmVkdWNlKGFkZCwgcmVtb3ZlLCBpbml0aWFsKSB7XG4gICAgICAgIHJlZHVjZUFkZCA9IGFkZDtcbiAgICAgICAgcmVkdWNlUmVtb3ZlID0gcmVtb3ZlO1xuICAgICAgICByZWR1Y2VJbml0aWFsID0gaW5pdGlhbDtcbiAgICAgICAgcmVzZXROZWVkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciByZWR1Y2luZyBieSBjb3VudC5cbiAgICAgIGZ1bmN0aW9uIHJlZHVjZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gcmVkdWNlKGNyb3NzZmlsdGVyX3JlZHVjZUluY3JlbWVudCwgY3Jvc3NmaWx0ZXJfcmVkdWNlRGVjcmVtZW50LCBjcm9zc2ZpbHRlcl96ZXJvKTtcbiAgICAgIH1cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIHJlZHVjaW5nIGJ5IHN1bSh2YWx1ZSkuXG4gICAgICBmdW5jdGlvbiByZWR1Y2VTdW0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJlZHVjZShjcm9zc2ZpbHRlcl9yZWR1Y2VBZGQodmFsdWUpLCBjcm9zc2ZpbHRlcl9yZWR1Y2VTdWJ0cmFjdCh2YWx1ZSksIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRoZSByZWR1Y2Ugb3JkZXIsIHVzaW5nIHRoZSBzcGVjaWZpZWQgYWNjZXNzb3IuXG4gICAgICBmdW5jdGlvbiBvcmRlcih2YWx1ZSkge1xuICAgICAgICBzZWxlY3QgPSBoZWFwc2VsZWN0X2J5KHZhbHVlT2YpO1xuICAgICAgICBoZWFwID0gaGVhcF9ieSh2YWx1ZU9mKTtcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVPZihkKSB7IHJldHVybiB2YWx1ZShkLnZhbHVlKTsgfVxuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBuYXR1cmFsIG9yZGVyaW5nIGJ5IHJlZHVjZSB2YWx1ZS5cbiAgICAgIGZ1bmN0aW9uIG9yZGVyTmF0dXJhbCgpIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyKGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJucyB0aGUgY2FyZGluYWxpdHkgb2YgdGhpcyBncm91cCwgaXJyZXNwZWN0aXZlIG9mIGFueSBmaWx0ZXJzLlxuICAgICAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBncm91cCBhbmQgYXNzb2NpYXRlZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICB2YXIgaSA9IGZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSk7XG4gICAgICAgIGlmIChpID49IDApIGZpbHRlckxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGkgPSBpbmRleExpc3RlbmVycy5pbmRleE9mKGFkZCk7XG4gICAgICAgIGlmIChpID49IDApIGluZGV4TGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgaSA9IHJlbW92ZURhdGFMaXN0ZW5lcnMuaW5kZXhPZihyZW1vdmVEYXRhKTtcbiAgICAgICAgaWYgKGkgPj0gMCkgcmVtb3ZlRGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlZHVjZUNvdW50KCkub3JkZXJOYXR1cmFsKCk7XG4gICAgfVxuXG4gICAgLy8gQSBjb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhIHNpbmdsZXRvbiBncm91cC5cbiAgICBmdW5jdGlvbiBncm91cEFsbCgpIHtcbiAgICAgIHZhciBnID0gZ3JvdXAoY3Jvc3NmaWx0ZXJfbnVsbCksIGFsbCA9IGcuYWxsO1xuICAgICAgZGVsZXRlIGcuYWxsO1xuICAgICAgZGVsZXRlIGcudG9wO1xuICAgICAgZGVsZXRlIGcub3JkZXI7XG4gICAgICBkZWxldGUgZy5vcmRlck5hdHVyYWw7XG4gICAgICBkZWxldGUgZy5zaXplO1xuICAgICAgZy52YWx1ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYWxsKClbMF0udmFsdWU7IH07XG4gICAgICByZXR1cm4gZztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoaXMgZGltZW5zaW9uIGFuZCBhc3NvY2lhdGVkIGdyb3VwcyBhbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBkaW1lbnNpb25Hcm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkgeyBncm91cC5kaXNwb3NlKCk7IH0pO1xuICAgICAgdmFyIGkgPSBkYXRhTGlzdGVuZXJzLmluZGV4T2YocHJlQWRkKTtcbiAgICAgIGlmIChpID49IDApIGRhdGFMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgaSA9IGRhdGFMaXN0ZW5lcnMuaW5kZXhPZihwb3N0QWRkKTtcbiAgICAgIGlmIChpID49IDApIGRhdGFMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgaSA9IHJlbW92ZURhdGFMaXN0ZW5lcnMuaW5kZXhPZihyZW1vdmVEYXRhKTtcbiAgICAgIGlmIChpID49IDApIHJlbW92ZURhdGFMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbSAmPSB6ZXJvO1xuICAgICAgcmV0dXJuIGZpbHRlckFsbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaW1lbnNpb247XG4gIH1cblxuICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ3JvdXBBbGwgb24gYSBkdW1teSBkaW1lbnNpb24uXG4gIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuIGJlIG9wdGltaXplZCBzaW5jZSBpdCBhbHdheXMgaGFzIGNhcmRpbmFsaXR5IDEuXG4gIGZ1bmN0aW9uIGdyb3VwQWxsKCkge1xuICAgIHZhciBncm91cCA9IHtcbiAgICAgIHJlZHVjZTogcmVkdWNlLFxuICAgICAgcmVkdWNlQ291bnQ6IHJlZHVjZUNvdW50LFxuICAgICAgcmVkdWNlU3VtOiByZWR1Y2VTdW0sXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkaXNwb3NlOiBkaXNwb3NlLFxuICAgICAgcmVtb3ZlOiBkaXNwb3NlIC8vIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgIH07XG5cbiAgICB2YXIgcmVkdWNlVmFsdWUsXG4gICAgICAgIHJlZHVjZUFkZCxcbiAgICAgICAgcmVkdWNlUmVtb3ZlLFxuICAgICAgICByZWR1Y2VJbml0aWFsLFxuICAgICAgICByZXNldE5lZWRlZCA9IHRydWU7XG5cbiAgICAvLyBUaGUgZ3JvdXAgbGlzdGVucyB0byB0aGUgY3Jvc3NmaWx0ZXIgZm9yIHdoZW4gYW55IGRpbWVuc2lvbiBjaGFuZ2VzLCBzb1xuICAgIC8vIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgcmVkdWNlIHZhbHVlLiBJdCBtdXN0IGFsc28gbGlzdGVuIHRvIHRoZSBwYXJlbnRcbiAgICAvLyBkaW1lbnNpb24gZm9yIHdoZW4gZGF0YSBpcyBhZGRlZC5cbiAgICBmaWx0ZXJMaXN0ZW5lcnMucHVzaCh1cGRhdGUpO1xuICAgIGRhdGFMaXN0ZW5lcnMucHVzaChhZGQpO1xuXG4gICAgLy8gRm9yIGNvbnNpc3RlbmN5OyBhY3R1YWxseSBhIG5vLW9wIHNpbmNlIHJlc2V0TmVlZGVkIGlzIHRydWUuXG4gICAgYWRkKGRhdGEsIDAsIG4pO1xuXG4gICAgLy8gSW5jb3Jwb3JhdGVzIHRoZSBzcGVjaWZpZWQgbmV3IHZhbHVlcyBpbnRvIHRoaXMgZ3JvdXAuXG4gICAgZnVuY3Rpb24gYWRkKG5ld0RhdGEsIG4wKSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYgKHJlc2V0TmVlZGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgZm9yIChpID0gbjA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJzW2ldKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVkdWNlcyB0aGUgc3BlY2lmaWVkIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQgcmVjb3Jkcy5cbiAgICBmdW5jdGlvbiB1cGRhdGUoZmlsdGVyT25lLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgayxcbiAgICAgICAgICBuO1xuXG4gICAgICBpZiAocmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICghZmlsdGVyc1trID0gYWRkZWRbaV1dKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSAwLCBuID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGZpbHRlcnNbayA9IHJlbW92ZWRbaV1dID09PSBmaWx0ZXJPbmUpIHtcbiAgICAgICAgICByZWR1Y2VWYWx1ZSA9IHJlZHVjZVJlbW92ZShyZWR1Y2VWYWx1ZSwgZGF0YVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWNvbXB1dGVzIHRoZSBncm91cCByZWR1Y2UgdmFsdWUgZnJvbSBzY3JhdGNoLlxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlSW5pdGlhbCgpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICghZmlsdGVyc1tpXSkge1xuICAgICAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlQWRkKHJlZHVjZVZhbHVlLCBkYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlZHVjZSBiZWhhdmlvciBmb3IgdGhpcyBncm91cCB0byB1c2UgdGhlIHNwZWNpZmllZCBmdW5jdGlvbnMuXG4gICAgLy8gVGhpcyBtZXRob2QgbGF6aWx5IHJlY29tcHV0ZXMgdGhlIHJlZHVjZSB2YWx1ZSwgd2FpdGluZyB1bnRpbCBuZWVkZWQuXG4gICAgZnVuY3Rpb24gcmVkdWNlKGFkZCwgcmVtb3ZlLCBpbml0aWFsKSB7XG4gICAgICByZWR1Y2VBZGQgPSBhZGQ7XG4gICAgICByZWR1Y2VSZW1vdmUgPSByZW1vdmU7XG4gICAgICByZWR1Y2VJbml0aWFsID0gaW5pdGlhbDtcbiAgICAgIHJlc2V0TmVlZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgY291bnQuXG4gICAgZnVuY3Rpb24gcmVkdWNlQ291bnQoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGNyb3NzZmlsdGVyX3JlZHVjZUluY3JlbWVudCwgY3Jvc3NmaWx0ZXJfcmVkdWNlRGVjcmVtZW50LCBjcm9zc2ZpbHRlcl96ZXJvKTtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgc3VtKHZhbHVlKS5cbiAgICBmdW5jdGlvbiByZWR1Y2VTdW0odmFsdWUpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoY3Jvc3NmaWx0ZXJfcmVkdWNlQWRkKHZhbHVlKSwgY3Jvc3NmaWx0ZXJfcmVkdWNlU3VidHJhY3QodmFsdWUpLCBjcm9zc2ZpbHRlcl96ZXJvKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBjb21wdXRlZCByZWR1Y2UgdmFsdWUuXG4gICAgZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICBpZiAocmVzZXROZWVkZWQpIHJlc2V0KCksIHJlc2V0TmVlZGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gcmVkdWNlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGlzIGdyb3VwIGFuZCBhc3NvY2lhdGVkIGV2ZW50IGxpc3RlbmVycy5cbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdmFyIGkgPSBmaWx0ZXJMaXN0ZW5lcnMuaW5kZXhPZih1cGRhdGUpO1xuICAgICAgaWYgKGkgPj0gMCkgZmlsdGVyTGlzdGVuZXJzLnNwbGljZShpKTtcbiAgICAgIGkgPSBkYXRhTGlzdGVuZXJzLmluZGV4T2YoYWRkKTtcbiAgICAgIGlmIChpID49IDApIGRhdGFMaXN0ZW5lcnMuc3BsaWNlKGkpO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VDb3VudCgpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgaW4gdGhpcyBjcm9zc2ZpbHRlciwgaXJyZXNwZWN0aXZlIG9mIGFueSBmaWx0ZXJzLlxuICBmdW5jdGlvbiBzaXplKCkge1xuICAgIHJldHVybiBuO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gYWRkKGFyZ3VtZW50c1swXSlcbiAgICAgIDogY3Jvc3NmaWx0ZXI7XG59XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgb2Ygc2l6ZSBuLCBiaWcgZW5vdWdoIHRvIHN0b3JlIGlkcyB1cCB0byBtLlxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbSkge1xuICByZXR1cm4gKG0gPCAweDEwMVxuICAgICAgPyBjcm9zc2ZpbHRlcl9hcnJheTggOiBtIDwgMHgxMDAwMVxuICAgICAgPyBjcm9zc2ZpbHRlcl9hcnJheTE2XG4gICAgICA6IGNyb3NzZmlsdGVyX2FycmF5MzIpKG4pO1xufVxuXG4vLyBDb25zdHJ1Y3RzIGEgbmV3IGFycmF5IG9mIHNpemUgbiwgd2l0aCBzZXF1ZW50aWFsIHZhbHVlcyBmcm9tIDAgdG8gbiAtIDEuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yYW5nZShuKSB7XG4gIHZhciByYW5nZSA9IGNyb3NzZmlsdGVyX2luZGV4KG4sIG4pO1xuICBmb3IgKHZhciBpID0gLTE7ICsraSA8IG47KSByYW5nZVtpXSA9IGk7XG4gIHJldHVybiByYW5nZTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfY2FwYWNpdHkodykge1xuICByZXR1cm4gdyA9PT0gOFxuICAgICAgPyAweDEwMCA6IHcgPT09IDE2XG4gICAgICA/IDB4MTAwMDBcbiAgICAgIDogMHgxMDAwMDAwMDA7XG59XG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyL2Nyb3NzZmlsdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Nyb3NzZmlsdGVyXCIpLmNyb3NzZmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBjcm9zc2ZpbHRlcl9hcnJheTggPSBmdW5jdGlvbihuKSB7IHJldHVybiBuZXcgVWludDhBcnJheShuKTsgfTtcbiAgY3Jvc3NmaWx0ZXJfYXJyYXkxNiA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50MTZBcnJheShuKTsgfTtcbiAgY3Jvc3NmaWx0ZXJfYXJyYXkzMiA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG5ldyBVaW50MzJBcnJheShuKTsgfTtcblxuICBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuID0gZnVuY3Rpb24oYXJyYXksIGxlbmd0aCkge1xuICAgIGlmIChhcnJheS5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gYXJyYXk7XG4gICAgdmFyIGNvcHkgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcbiAgICBjb3B5LnNldChhcnJheSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlbiA9IGZ1bmN0aW9uKGFycmF5LCB3aWR0aCkge1xuICAgIHZhciBjb3B5O1xuICAgIHN3aXRjaCAod2lkdGgpIHtcbiAgICAgIGNhc2UgMTY6IGNvcHkgPSBjcm9zc2ZpbHRlcl9hcnJheTE2KGFycmF5Lmxlbmd0aCk7IGJyZWFrO1xuICAgICAgY2FzZSAzMjogY29weSA9IGNyb3NzZmlsdGVyX2FycmF5MzIoYXJyYXkubGVuZ3RoKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGFycmF5IHdpZHRoIVwiKTtcbiAgICB9XG4gICAgY29weS5zZXQoYXJyYXkpO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQobikge1xuICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkobiksIGkgPSAtMTtcbiAgd2hpbGUgKCsraSA8IG4pIGFycmF5W2ldID0gMDtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9hcnJheUxlbmd0aGVuVW50eXBlZChhcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBuID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobiA8IGxlbmd0aCkgYXJyYXlbbisrXSA9IDA7XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfYXJyYXlXaWRlblVudHlwZWQoYXJyYXksIHdpZHRoKSB7XG4gIGlmICh3aWR0aCA+IDMyKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGFycmF5IHdpZHRoIVwiKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vLyBBbiBhcmJpdHJhcmlseS13aWRlIGFycmF5IG9mIGJpdG1hc2tzXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9iaXRhcnJheShuKSB7XG4gIHRoaXMubGVuZ3RoID0gbjtcbiAgdGhpcy5zdWJhcnJheXMgPSAxO1xuICB0aGlzLndpZHRoID0gODtcbiAgdGhpcy5tYXNrcyA9IHtcbiAgICAwOiAwXG4gIH1cblxuICB0aGlzWzBdID0gY3Jvc3NmaWx0ZXJfYXJyYXk4KG4pO1xufVxuXG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUubGVuZ3RoZW4gPSBmdW5jdGlvbihuKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuc3ViYXJyYXlzOyBpIDwgbGVuOyArK2kpIHtcbiAgICB0aGlzW2ldID0gY3Jvc3NmaWx0ZXJfYXJyYXlMZW5ndGhlbih0aGlzW2ldLCBuKTtcbiAgfVxuICB0aGlzLmxlbmd0aCA9IG47XG59O1xuXG4vLyBSZXNlcnZlIGEgbmV3IGJpdCBpbmRleCBpbiB0aGUgYXJyYXksIHJldHVybnMge29mZnNldCwgb25lfVxuY3Jvc3NmaWx0ZXJfYml0YXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbSwgdywgb25lLCBpLCBsZW47XG5cbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIG0gPSB0aGlzLm1hc2tzW2ldO1xuICAgIHcgPSB0aGlzLndpZHRoIC0gKDMyICogaSk7XG4gICAgb25lID0gfm0gJiAtfm07XG5cbiAgICBpZiAodyA+PSAzMiAmJiAhb25lKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodyA8IDMyICYmIChvbmUgJiAoMSA8PCB3KSkpIHtcbiAgICAgIC8vIHdpZGVuIHRoaXMgc3ViYXJyYXlcbiAgICAgIHRoaXNbaV0gPSBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuKHRoaXNbaV0sIHcgPDw9IDEpO1xuICAgICAgdGhpcy53aWR0aCA9IDMyICogaSArIHc7XG4gICAgfVxuXG4gICAgdGhpcy5tYXNrc1tpXSB8PSBvbmU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb2Zmc2V0OiBpLFxuICAgICAgb25lOiBvbmVcbiAgICB9O1xuICB9XG5cbiAgLy8gYWRkIGEgbmV3IHN1YmFycmF5XG4gIHRoaXNbdGhpcy5zdWJhcnJheXNdID0gY3Jvc3NmaWx0ZXJfYXJyYXk4KHRoaXMubGVuZ3RoKTtcbiAgdGhpcy5tYXNrc1t0aGlzLnN1YmFycmF5c10gPSAxO1xuICB0aGlzLndpZHRoICs9IDg7XG4gIHJldHVybiB7XG4gICAgb2Zmc2V0OiB0aGlzLnN1YmFycmF5cysrLFxuICAgIG9uZTogMVxuICB9O1xufTtcblxuLy8gQ29weSByZWNvcmQgZnJvbSBpbmRleCBzcmMgdG8gaW5kZXggZGVzdFxuY3Jvc3NmaWx0ZXJfYml0YXJyYXkucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbihkZXN0LCBzcmMpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIHRoaXNbaV1bZGVzdF0gPSB0aGlzW2ldW3NyY107XG4gIH1cbn07XG5cbi8vIFRydW5jYXRlIHRoZSBhcnJheSB0byB0aGUgZ2l2ZW4gbGVuZ3RoXG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUudHJ1bmNhdGUgPSBmdW5jdGlvbihuKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuc3ViYXJyYXlzOyBpIDwgbGVuOyArK2kpIHtcbiAgICBmb3IgKHZhciBqID0gdGhpcy5sZW5ndGggLSAxOyBqID49IG47IGotLSkge1xuICAgICAgdGhpc1tpXVtqXSA9IDA7XG4gICAgfVxuICAgIHRoaXNbaV0ubGVuZ3RoID0gbjtcbiAgfVxuICB0aGlzLmxlbmd0aCA9IG47XG59O1xuXG4vLyBDaGVja3MgdGhhdCBhbGwgYml0cyBmb3IgdGhlIGdpdmVuIGluZGV4IGFyZSAwXG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUuemVybyA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzW2ldW25dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gQ2hlY2tzIHRoYXQgYWxsIGJpdHMgZm9yIHRoZSBnaXZlbiBpbmRleCBhcmUgMCBleGNlcHQgZm9yIHBvc3NpYmx5IG9uZVxuY3Jvc3NmaWx0ZXJfYml0YXJyYXkucHJvdG90eXBlLnplcm9FeGNlcHQgPSBmdW5jdGlvbihuLCBvZmZzZXQsIHplcm8pIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChpID09PSBvZmZzZXQgPyB0aGlzW2ldW25dICYgemVybyA6IHRoaXNbaV1bbl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBDaGVja3MgdGhhdCBhbGwgYml0cyBmb3IgdGhlIGdpdmVuIGluZGV6IGFyZSAwIGV4Y2VwdCBmb3IgdGhlIHNwZWNpZmllZCBtYXNrLlxuLy8gVGhlIG1hc2sgc2hvdWxkIGJlIGFuIGFycmF5IG9mIHRoZSBzYW1lIHNpemUgYXMgdGhlIGZpbHRlciBzdWJhcnJheXMgd2lkdGguXG5jcm9zc2ZpbHRlcl9iaXRhcnJheS5wcm90b3R5cGUuemVyb0V4Y2VwdE1hc2sgPSBmdW5jdGlvbihuLCBtYXNrKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuc3ViYXJyYXlzOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc1tpXVtuXSAmIG1hc2tbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIENoZWNrcyB0aGF0IG9ubHkgdGhlIHNwZWNpZmllZCBiaXQgaXMgc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXhcbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS5vbmx5ID0gZnVuY3Rpb24obiwgb2Zmc2V0LCBvbmUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zdWJhcnJheXM7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzW2ldW25dICE9IChpID09PSBvZmZzZXQgPyBvbmUgOiAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIENoZWNrcyB0aGF0IG9ubHkgdGhlIHNwZWNpZmllZCBiaXQgaXMgc2V0IGZvciB0aGUgZ2l2ZW4gaW5kZXggZXhjZXB0IGZvciBwb3NzaWJseSBvbmUgb3RoZXJcbmNyb3NzZmlsdGVyX2JpdGFycmF5LnByb3RvdHlwZS5vbmx5RXhjZXB0ID0gZnVuY3Rpb24obiwgb2Zmc2V0LCB6ZXJvLCBvbmx5T2Zmc2V0LCBvbmx5T25lKSB7XG4gIHZhciBtYXNrO1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnN1YmFycmF5czsgaSA8IGxlbjsgKytpKSB7XG4gICAgbWFzayA9IHRoaXNbaV1bbl07XG4gICAgaWYgKGkgPT09IG9mZnNldClcbiAgICAgIG1hc2sgJj0gemVybztcbiAgICBpZiAobWFzayAhPSAoaSA9PT0gb25seU9mZnNldCA/IG9ubHlPbmUgOiAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcnJheTg6IGNyb3NzZmlsdGVyX2FycmF5VW50eXBlZCxcbiAgYXJyYXkxNjogY3Jvc3NmaWx0ZXJfYXJyYXlVbnR5cGVkLFxuICBhcnJheTMyOiBjcm9zc2ZpbHRlcl9hcnJheVVudHlwZWQsXG4gIGFycmF5TGVuZ3RoZW46IGNyb3NzZmlsdGVyX2FycmF5TGVuZ3RoZW5VbnR5cGVkLFxuICBhcnJheVdpZGVuOiBjcm9zc2ZpbHRlcl9hcnJheVdpZGVuVW50eXBlZCxcbiAgYml0YXJyYXk6IGNyb3NzZmlsdGVyX2JpdGFycmF5XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5mdW5jdGlvbiBiaXNlY3RfYnkoZikge1xuXG4gIC8vIExvY2F0ZSB0aGUgaW5zZXJ0aW9uIHBvaW50IGZvciB4IGluIGEgdG8gbWFpbnRhaW4gc29ydGVkIG9yZGVyLiBUaGVcbiAgLy8gYXJndW1lbnRzIGxvIGFuZCBoaSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5IGEgc3Vic2V0IG9mIHRoZSBhcnJheSB3aGljaFxuICAvLyBzaG91bGQgYmUgY29uc2lkZXJlZDsgYnkgZGVmYXVsdCB0aGUgZW50aXJlIGFycmF5IGlzIHVzZWQuIElmIHggaXMgYWxyZWFkeVxuICAvLyBwcmVzZW50IGluIGEsIHRoZSBpbnNlcnRpb24gcG9pbnQgd2lsbCBiZSBiZWZvcmUgKHRvIHRoZSBsZWZ0IG9mKSBhbnlcbiAgLy8gZXhpc3RpbmcgZW50cmllcy4gVGhlIHJldHVybiB2YWx1ZSBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHRoZSBmaXJzdFxuICAvLyBhcmd1bWVudCB0byBgYXJyYXkuc3BsaWNlYCBhc3N1bWluZyB0aGF0IGEgaXMgYWxyZWFkeSBzb3J0ZWQuXG4gIC8vXG4gIC8vIFRoZSByZXR1cm5lZCBpbnNlcnRpb24gcG9pbnQgaSBwYXJ0aXRpb25zIHRoZSBhcnJheSBhIGludG8gdHdvIGhhbHZlcyBzb1xuICAvLyB0aGF0IGFsbCB2IDwgeCBmb3IgdiBpbiBhW2xvOmldIGZvciB0aGUgbGVmdCBzaWRlIGFuZCBhbGwgdiA+PSB4IGZvciB2IGluXG4gIC8vIGFbaTpoaV0gZm9yIHRoZSByaWdodCBzaWRlLlxuICBmdW5jdGlvbiBiaXNlY3RMZWZ0KGEsIHgsIGxvLCBoaSkge1xuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgIGlmIChmKGFbbWlkXSkgPCB4KSBsbyA9IG1pZCArIDE7XG4gICAgICBlbHNlIGhpID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICAvLyBTaW1pbGFyIHRvIGJpc2VjdExlZnQsIGJ1dCByZXR1cm5zIGFuIGluc2VydGlvbiBwb2ludCB3aGljaCBjb21lcyBhZnRlciAodG9cbiAgLy8gdGhlIHJpZ2h0IG9mKSBhbnkgZXhpc3RpbmcgZW50cmllcyBvZiB4IGluIGEuXG4gIC8vXG4gIC8vIFRoZSByZXR1cm5lZCBpbnNlcnRpb24gcG9pbnQgaSBwYXJ0aXRpb25zIHRoZSBhcnJheSBpbnRvIHR3byBoYWx2ZXMgc28gdGhhdFxuICAvLyBhbGwgdiA8PSB4IGZvciB2IGluIGFbbG86aV0gZm9yIHRoZSBsZWZ0IHNpZGUgYW5kIGFsbCB2ID4geCBmb3IgdiBpblxuICAvLyBhW2k6aGldIGZvciB0aGUgcmlnaHQgc2lkZS5cbiAgZnVuY3Rpb24gYmlzZWN0UmlnaHQoYSwgeCwgbG8sIGhpKSB7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgaWYgKHggPCBmKGFbbWlkXSkpIGhpID0gbWlkO1xuICAgICAgZWxzZSBsbyA9IG1pZCArIDE7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGJpc2VjdFJpZ2h0LnJpZ2h0ID0gYmlzZWN0UmlnaHQ7XG4gIGJpc2VjdFJpZ2h0LmxlZnQgPSBiaXNlY3RMZWZ0O1xuICByZXR1cm4gYmlzZWN0UmlnaHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmlzZWN0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcbm1vZHVsZS5leHBvcnRzLmJ5ID0gYmlzZWN0X2J5OyAvLyBhc3NpZ24gdGhlIHJhdyBmdW5jdGlvbiB0byB0aGUgZXhwb3J0IGFzIHdlbGxcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvYmlzZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgeGZpbHRlckFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xudmFyIHhmaWx0ZXJGaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlcicpO1xudmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIGNyb3NzZmlsdGVyX251bGwgPSByZXF1aXJlKCcuL251bGwnKTtcbnZhciBjcm9zc2ZpbHRlcl96ZXJvID0gcmVxdWlyZSgnLi96ZXJvJyk7XG52YXIgeGZpbHRlckhlYXBzZWxlY3QgPSByZXF1aXJlKCcuL2hlYXBzZWxlY3QnKTtcbnZhciB4ZmlsdGVySGVhcCA9IHJlcXVpcmUoJy4vaGVhcCcpO1xudmFyIGJpc2VjdCA9IHJlcXVpcmUoJy4vYmlzZWN0Jyk7XG52YXIgaW5zZXJ0aW9uc29ydCA9IHJlcXVpcmUoJy4vaW5zZXJ0aW9uc29ydCcpO1xudmFyIHBlcm11dGUgPSByZXF1aXJlKCcuL3Blcm11dGUnKTtcbnZhciBxdWlja3NvcnQgPSByZXF1aXJlKCcuL3F1aWNrc29ydCcpO1xudmFyIHhmaWx0ZXJSZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xudmFyIHBhY2thZ2VKc29uID0gcmVxdWlyZSgnLi8uLi9wYWNrYWdlLmpzb24nKTsgLy8gcmVxdWlyZSBvd24gcGFja2FnZS5qc29uIGZvciB0aGUgdmVyc2lvbiBmaWVsZFxudmFyIHJlc3VsdCA9IHJlcXVpcmUoJ2xvZGFzaC5yZXN1bHQnKTtcbi8vIGV4cG9zZSBBUEkgZXhwb3J0c1xuZXhwb3J0cy5jcm9zc2ZpbHRlciA9IGNyb3NzZmlsdGVyO1xuZXhwb3J0cy5jcm9zc2ZpbHRlci5oZWFwID0geGZpbHRlckhlYXA7XG5leHBvcnRzLmNyb3NzZmlsdGVyLmhlYXBzZWxlY3QgPSB4ZmlsdGVySGVhcHNlbGVjdDtcbmV4cG9ydHMuY3Jvc3NmaWx0ZXIuYmlzZWN0ID0gYmlzZWN0O1xuZXhwb3J0cy5jcm9zc2ZpbHRlci5pbnNlcnRpb25zb3J0ID0gaW5zZXJ0aW9uc29ydDtcbmV4cG9ydHMuY3Jvc3NmaWx0ZXIucGVybXV0ZSA9IHBlcm11dGU7XG5leHBvcnRzLmNyb3NzZmlsdGVyLnF1aWNrc29ydCA9IHF1aWNrc29ydDtcbmV4cG9ydHMuY3Jvc3NmaWx0ZXIudmVyc2lvbiA9IHBhY2thZ2VKc29uLnZlcnNpb247IC8vIHBsZWFzZSBub3RlIHVzZSBvZiBcInBhY2thZ2UtanNvbi12ZXJzaW9uaWZ5XCIgdHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyKCkge1xuICB2YXIgY3Jvc3NmaWx0ZXIgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlOiByZW1vdmVEYXRhLFxuICAgIGRpbWVuc2lvbjogZGltZW5zaW9uLFxuICAgIGdyb3VwQWxsOiBncm91cEFsbCxcbiAgICBzaXplOiBzaXplLFxuICAgIGFsbDogYWxsLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBpc0VsZW1lbnRGaWx0ZXJlZDogaXNFbGVtZW50RmlsdGVyZWQsXG4gIH07XG5cbiAgdmFyIGRhdGEgPSBbXSwgLy8gdGhlIHJlY29yZHNcbiAgICAgIG4gPSAwLCAvLyB0aGUgbnVtYmVyIG9mIHJlY29yZHM7IGRhdGEubGVuZ3RoXG4gICAgICBmaWx0ZXJzLCAvLyAxIGlzIGZpbHRlcmVkIG91dFxuICAgICAgZmlsdGVyTGlzdGVuZXJzID0gW10sIC8vIHdoZW4gdGhlIGZpbHRlcnMgY2hhbmdlXG4gICAgICBkYXRhTGlzdGVuZXJzID0gW10sIC8vIHdoZW4gZGF0YSBpcyBhZGRlZFxuICAgICAgcmVtb3ZlRGF0YUxpc3RlbmVycyA9IFtdLCAvLyB3aGVuIGRhdGEgaXMgcmVtb3ZlZFxuICAgICAgY2FsbGJhY2tzID0gW107XG5cbiAgZmlsdGVycyA9IG5ldyB4ZmlsdGVyQXJyYXkuYml0YXJyYXkoMCk7XG5cbiAgLy8gQWRkcyB0aGUgc3BlY2lmaWVkIG5ldyByZWNvcmRzIHRvIHRoaXMgY3Jvc3NmaWx0ZXIuXG4gIGZ1bmN0aW9uIGFkZChuZXdEYXRhKSB7XG4gICAgdmFyIG4wID0gbixcbiAgICAgICAgbjEgPSBuZXdEYXRhLmxlbmd0aDtcblxuICAgIC8vIElmIHRoZXJlJ3MgYWN0dWFsbHkgbmV3IGRhdGEgdG8gYWRk4oCmXG4gICAgLy8gTWVyZ2UgdGhlIG5ldyBkYXRhIGludG8gdGhlIGV4aXN0aW5nIGRhdGEuXG4gICAgLy8gTGVuZ3RoZW4gdGhlIGZpbHRlciBiaXRzZXQgdG8gaGFuZGxlIHRoZSBuZXcgcmVjb3Jkcy5cbiAgICAvLyBOb3RpZnkgbGlzdGVuZXJzIChkaW1lbnNpb25zIGFuZCBncm91cHMpIHRoYXQgbmV3IGRhdGEgaXMgYXZhaWxhYmxlLlxuICAgIGlmIChuMSkge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG5ld0RhdGEpO1xuICAgICAgZmlsdGVycy5sZW5ndGhlbihuICs9IG4xKTtcbiAgICAgIGRhdGFMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwobmV3RGF0YSwgbjAsIG4xKTsgfSk7XG4gICAgICB0cmlnZ2VyT25DaGFuZ2UoJ2RhdGFBZGRlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBjcm9zc2ZpbHRlcjtcbiAgfVxuXG4gIC8vIFJlbW92ZXMgYWxsIHJlY29yZHMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBmaWx0ZXJzLlxuICBmdW5jdGlvbiByZW1vdmVEYXRhKCkge1xuICAgIHZhciBuZXdJbmRleCA9IGNyb3NzZmlsdGVyX2luZGV4KG4sIG4pLFxuICAgICAgICByZW1vdmVkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoIWZpbHRlcnMuemVybyhpKSkgbmV3SW5kZXhbaV0gPSBqKys7XG4gICAgICBlbHNlIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIG1hdGNoaW5nIHJlY29yZHMgZnJvbSBncm91cHMuXG4gICAgZmlsdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKC0xLCAtMSwgW10sIHJlbW92ZWQsIHRydWUpOyB9KTtcblxuICAgIC8vIFVwZGF0ZSBpbmRleGVzLlxuICAgIHJlbW92ZURhdGFMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwobmV3SW5kZXgpOyB9KTtcblxuICAgIC8vIFJlbW92ZSBvbGQgZmlsdGVycyBhbmQgZGF0YSBieSBvdmVyd3JpdGluZy5cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICghZmlsdGVycy56ZXJvKGkpKSB7XG4gICAgICAgIGlmIChpICE9PSBqKSBmaWx0ZXJzLmNvcHkoaiwgaSksIGRhdGFbal0gPSBkYXRhW2ldO1xuICAgICAgICArK2o7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YS5sZW5ndGggPSBuID0gajtcbiAgICBmaWx0ZXJzLnRydW5jYXRlKGopO1xuICAgIHRyaWdnZXJPbkNoYW5nZSgnZGF0YVJlbW92ZWQnKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0cnVlIGlmIHRoZSBkYXRhIGVsZW1lbnQgYXQgaW5kZXggaSBpcyBmaWx0ZXJlZCBJTi5cbiAgLy8gT3B0aW9uYWxseSwgaWdub3JlIHRoZSBmaWx0ZXJzIG9mIGFueSBkaW1lbnNpb25zIGluIHRoZSBpZ25vcmVfZGltZW5zaW9ucyBsaXN0LlxuICBmdW5jdGlvbiBpc0VsZW1lbnRGaWx0ZXJlZChpLCBpZ25vcmVfZGltZW5zaW9ucykge1xuICAgIHZhciBuLFxuICAgICAgICBkLFxuICAgICAgICBpZCxcbiAgICAgICAgbGVuLFxuICAgICAgICBtYXNrID0gQXJyYXkoZmlsdGVycy5zdWJhcnJheXMpO1xuICAgIGZvciAobiA9IDA7IG4gPCBmaWx0ZXJzLnN1YmFycmF5czsgbisrKSB7IG1hc2tbbl0gPSB+MDsgfVxuICAgIGlmIChpZ25vcmVfZGltZW5zaW9ucykge1xuICAgICAgZm9yIChkID0gMCwgbGVuID0gaWdub3JlX2RpbWVuc2lvbnMubGVuZ3RoOyBkIDwgbGVuOyBkKyspIHtcbiAgICAgICAgLy8gVGhlIHRvcCBiaXRzIG9mIHRoZSBJRCBhcmUgdGhlIHN1YmFycmF5IG9mZnNldCBhbmQgdGhlIGxvd2VyIGJpdHMgYXJlIHRoZSBiaXRcbiAgICAgICAgLy8gb2Zmc2V0IG9mIHRoZSBcIm9uZVwiIG1hc2suXG4gICAgICAgIGlkID0gaWdub3JlX2RpbWVuc2lvbnNbZF0uaWQoKTtcbiAgICAgICAgbWFza1tpZCA+PiA3XSAmPSB+KDB4MSA8PCAoaWQgJiAweDNmKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzLnplcm9FeGNlcHRNYXNrKGksbWFzayk7XG4gIH1cblxuICAvLyBBZGRzIGEgbmV3IGRpbWVuc2lvbiB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWUgYWNjZXNzb3IgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIGRpbWVuc2lvbih2YWx1ZSwgaXRlcmFibGUpIHtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYWNjZXNzb3JQYXRoID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHJlc3VsdChkLCBhY2Nlc3NvclBhdGgpOyB9O1xuICAgIH1cblxuICAgIHZhciBkaW1lbnNpb24gPSB7XG4gICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICAgIGZpbHRlckV4YWN0OiBmaWx0ZXJFeGFjdCxcbiAgICAgIGZpbHRlclJhbmdlOiBmaWx0ZXJSYW5nZSxcbiAgICAgIGZpbHRlckZ1bmN0aW9uOiBmaWx0ZXJGdW5jdGlvbixcbiAgICAgIGZpbHRlckFsbDogZmlsdGVyQWxsLFxuICAgICAgdG9wOiB0b3AsXG4gICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgIGdyb3VwQWxsOiBncm91cEFsbCxcbiAgICAgIGRpc3Bvc2U6IGRpc3Bvc2UsXG4gICAgICByZW1vdmU6IGRpc3Bvc2UsIC8vIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgICAgYWNjZXNzb3I6IHZhbHVlLFxuICAgICAgaWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gaWQ7IH1cbiAgICB9O1xuXG4gICAgdmFyIG9uZSwgLy8gbG93ZXN0IHVuc2V0IGJpdCBhcyBtYXNrLCBlLmcuLCAwMDAwMTAwMFxuICAgICAgICB6ZXJvLCAvLyBpbnZlcnRlZCBvbmUsIGUuZy4sIDExMTEwMTExXG4gICAgICAgIG9mZnNldCwgLy8gb2Zmc2V0IGludG8gdGhlIGZpbHRlcnMgYXJyYXlzXG4gICAgICAgIGlkLCAvLyB1bmlxdWUgSUQgZm9yIHRoaXMgZGltZW5zaW9uIChyZXVzZWQgd2hlbiBkaW1lbnNpb25zIGFyZSBkaXNwb3NlZClcbiAgICAgICAgdmFsdWVzLCAvLyBzb3J0ZWQsIGNhY2hlZCBhcnJheVxuICAgICAgICBpbmRleCwgLy8gdmFsdWUgcmFuayDihqYgb2JqZWN0IGlkXG4gICAgICAgIG9sZFZhbHVlcywgLy8gdGVtcG9yYXJ5IGFycmF5IHN0b3JpbmcgcHJldmlvdXNseS1hZGRlZCB2YWx1ZXNcbiAgICAgICAgb2xkSW5kZXgsIC8vIHRlbXBvcmFyeSBhcnJheSBzdG9yaW5nIHByZXZpb3VzbHktYWRkZWQgaW5kZXhcbiAgICAgICAgbmV3VmFsdWVzLCAvLyB0ZW1wb3JhcnkgYXJyYXkgc3RvcmluZyBuZXdseS1hZGRlZCB2YWx1ZXNcbiAgICAgICAgbmV3SW5kZXgsIC8vIHRlbXBvcmFyeSBhcnJheSBzdG9yaW5nIG5ld2x5LWFkZGVkIGluZGV4XG4gICAgICAgIGl0ZXJhYmxlc0luZGV4Q291bnQsXG4gICAgICAgIG5ld0l0ZXJhYmxlc0luZGV4Q291bnQsXG4gICAgICAgIGl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzLFxuICAgICAgICBuZXdJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1cyxcbiAgICAgICAgb2xkSXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMsXG4gICAgICAgIGl0ZXJhYmxlc0VtcHR5Um93cyxcbiAgICAgICAgc29ydCA9IHF1aWNrc29ydC5ieShmdW5jdGlvbihpKSB7IHJldHVybiBuZXdWYWx1ZXNbaV07IH0pLFxuICAgICAgICByZWZpbHRlciA9IHhmaWx0ZXJGaWx0ZXIuZmlsdGVyQWxsLCAvLyBmb3IgcmVjb21wdXRpbmcgZmlsdGVyXG4gICAgICAgIHJlZmlsdGVyRnVuY3Rpb24sIC8vIHRoZSBjdXN0b20gZmlsdGVyIGZ1bmN0aW9uIGluIHVzZVxuICAgICAgICBpbmRleExpc3RlbmVycyA9IFtdLCAvLyB3aGVuIGRhdGEgaXMgYWRkZWRcbiAgICAgICAgZGltZW5zaW9uR3JvdXBzID0gW10sXG4gICAgICAgIGxvMCA9IDAsXG4gICAgICAgIGhpMCA9IDAsXG4gICAgICAgIHQgPSAwO1xuXG4gICAgLy8gVXBkYXRpbmcgYSBkaW1lbnNpb24gaXMgYSB0d28tc3RhZ2UgcHJvY2Vzcy4gRmlyc3QsIHdlIG11c3QgdXBkYXRlIHRoZVxuICAgIC8vIGFzc29jaWF0ZWQgZmlsdGVycyBmb3IgdGhlIG5ld2x5LWFkZGVkIHJlY29yZHMuIE9uY2UgYWxsIGRpbWVuc2lvbnMgaGF2ZVxuICAgIC8vIHVwZGF0ZWQgdGhlaXIgZmlsdGVycywgdGhlIGdyb3VwcyBhcmUgbm90aWZpZWQgdG8gdXBkYXRlLlxuICAgIGRhdGFMaXN0ZW5lcnMudW5zaGlmdChwcmVBZGQpO1xuICAgIGRhdGFMaXN0ZW5lcnMucHVzaChwb3N0QWRkKTtcblxuICAgIHJlbW92ZURhdGFMaXN0ZW5lcnMucHVzaChyZW1vdmVEYXRhKTtcblxuICAgIC8vIEFkZCBhIG5ldyBkaW1lbnNpb24gaW4gdGhlIGZpbHRlciBiaXRtYXAgYW5kIHN0b3JlIHRoZSBvZmZzZXQgYW5kIGJpdG1hc2suXG4gICAgdmFyIHRtcCA9IGZpbHRlcnMuYWRkKCk7XG4gICAgb2Zmc2V0ID0gdG1wLm9mZnNldDtcbiAgICBvbmUgPSB0bXAub25lO1xuICAgIHplcm8gPSB+b25lO1xuXG4gICAgLy8gQ3JlYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgZGltZW5zaW9uXG4gICAgLy8gSURzIHdpbGwgYmUgcmUtdXNlZCBpZiBkaW1lbnNpb25zIGFyZSBkaXNwb3NlZC5cbiAgICAvLyBGb3IgaW50ZXJuYWwgdXNlIHRoZSBJRCBpcyB0aGUgc3ViYXJyYXkgb2Zmc2V0IHNoaWZ0ZWQgbGVmdCA3IGJpdHMgb3InZCB3aXRoIHRoZVxuICAgIC8vIGJpdCBvZmZzZXQgb2YgdGhlIHNldCBiaXQgaW4gdGhlIGRpbWVuc2lvbidzIFwib25lXCIgbWFzay5cbiAgICBpZCA9IChvZmZzZXQgPDwgNykgfCAoTWF0aC5sb2cob25lKSAvIE1hdGgubG9nKDIpKTtcblxuICAgIHByZUFkZChkYXRhLCAwLCBuKTtcbiAgICBwb3N0QWRkKGRhdGEsIDAsIG4pO1xuXG4gICAgLy8gSW5jb3Jwb3JhdGVzIHRoZSBzcGVjaWZpZWQgbmV3IHJlY29yZHMgaW50byB0aGlzIGRpbWVuc2lvbi5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyBmaWx0ZXJzLCB2YWx1ZXMsIGFuZCBpbmRleC5cbiAgICBmdW5jdGlvbiBwcmVBZGQobmV3RGF0YSwgbjAsIG4xKSB7XG5cbiAgICAgIGlmIChpdGVyYWJsZSl7XG4gICAgICAgIC8vIENvdW50IGFsbCB0aGUgdmFsdWVzXG4gICAgICAgIHQgPSAwO1xuICAgICAgICBqID0gMDtcbiAgICAgICAgayA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yKGogPSAwLCBrID0gdmFsdWUobmV3RGF0YVtpXSk7IGogPCBrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3VmFsdWVzID0gW107XG4gICAgICAgIG5ld0l0ZXJhYmxlc0luZGV4Q291bnQgPSBjcm9zc2ZpbHRlcl9yYW5nZShuZXdEYXRhLmxlbmd0aCk7XG4gICAgICAgIG5ld0l0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzID0gY3Jvc3NmaWx0ZXJfaW5kZXgodCwxKTtcbiAgICAgICAgaXRlcmFibGVzRW1wdHlSb3dzID0gW107XG4gICAgICAgIHZhciB1bnNvcnRlZEluZGV4ID0gY3Jvc3NmaWx0ZXJfcmFuZ2UodCk7XG5cbiAgICAgICAgZm9yIChsID0gMCwgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgayA9IHZhbHVlKG5ld0RhdGFbaV0pXG4gICAgICAgICAgLy9cbiAgICAgICAgICBpZighay5sZW5ndGgpe1xuICAgICAgICAgICAgbmV3SXRlcmFibGVzSW5kZXhDb3VudFtpXSA9IDA7XG4gICAgICAgICAgICBpdGVyYWJsZXNFbXB0eVJvd3MucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdJdGVyYWJsZXNJbmRleENvdW50W2ldID0gay5sZW5ndGhcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3VmFsdWVzLnB1c2goa1tqXSk7XG4gICAgICAgICAgICB1bnNvcnRlZEluZGV4W2xdID0gaTtcbiAgICAgICAgICAgIGwrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIFNvcnQgbWFwIHVzZWQgdG8gc29ydCBib3RoIHRoZSB2YWx1ZXMgYW5kIHRoZSB2YWx1ZVRvRGF0YSBpbmRpY2VzXG4gICAgICAgIHZhciBzb3J0TWFwID0gc29ydChjcm9zc2ZpbHRlcl9yYW5nZSh0KSwgMCwgdCk7XG5cbiAgICAgICAgLy8gVXNlIHRoZSBzb3J0TWFwIHRvIHNvcnQgdGhlIG5ld1ZhbHVlc1xuICAgICAgICBuZXdWYWx1ZXMgPSBwZXJtdXRlKG5ld1ZhbHVlcywgc29ydE1hcCk7XG5cblxuICAgICAgICAvLyBVc2UgdGhlIHNvcnRNYXAgdG8gc29ydCB0aGUgdW5zb3J0ZWRJbmRleCBtYXBcbiAgICAgICAgLy8gbmV3SW5kZXggc2hvdWxkIGJlIGEgbWFwIG9mIHNvcnRlZFZhbHVlIC0+IGNyb3NzZmlsdGVyRGF0YVxuICAgICAgICBuZXdJbmRleCA9IHBlcm11dGUodW5zb3J0ZWRJbmRleCwgc29ydE1hcClcblxuICAgICAgfSBlbHNle1xuICAgICAgICAvLyBQZXJtdXRlIG5ldyB2YWx1ZXMgaW50byBuYXR1cmFsIG9yZGVyIHVzaW5nIGEgc3RhbmRhcmQgc29ydGVkIGluZGV4LlxuICAgICAgICBuZXdWYWx1ZXMgPSBuZXdEYXRhLm1hcCh2YWx1ZSk7XG4gICAgICAgIG5ld0luZGV4ID0gc29ydChjcm9zc2ZpbHRlcl9yYW5nZShuMSksIDAsIG4xKTtcbiAgICAgICAgbmV3VmFsdWVzID0gcGVybXV0ZShuZXdWYWx1ZXMsIG5ld0luZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYoaXRlcmFibGUpIHtcbiAgICAgICAgbjEgPSB0O1xuICAgICAgfVxuXG4gICAgICAvLyBCaXNlY3QgbmV3VmFsdWVzIHRvIGRldGVybWluZSB3aGljaCBuZXcgcmVjb3JkcyBhcmUgc2VsZWN0ZWQuXG4gICAgICB2YXIgYm91bmRzID0gcmVmaWx0ZXIobmV3VmFsdWVzKSwgbG8xID0gYm91bmRzWzBdLCBoaTEgPSBib3VuZHNbMV07XG4gICAgICBpZiAocmVmaWx0ZXJGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7ICsraSkge1xuICAgICAgICAgIGlmICghcmVmaWx0ZXJGdW5jdGlvbihuZXdWYWx1ZXNbaV0sIGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bbmV3SW5kZXhbaV0gKyBuMF0gfD0gb25lO1xuICAgICAgICAgICAgaWYoaXRlcmFibGUpIG5ld0l0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2ldID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsbzE7ICsraSkge1xuICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVtuZXdJbmRleFtpXSArIG4wXSB8PSBvbmU7XG4gICAgICAgICAgaWYoaXRlcmFibGUpIG5ld0l0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2ldID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBoaTE7IGkgPCBuMTsgKytpKSB7XG4gICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW25ld0luZGV4W2ldICsgbjBdIHw9IG9uZTtcbiAgICAgICAgICBpZihpdGVyYWJsZSkgbmV3SXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgZGltZW5zaW9uIHByZXZpb3VzbHkgaGFkIG5vIGRhdGEsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGVcbiAgICAgIC8vIG1vcmUgZXhwZW5zaXZlIG1lcmdlIG9wZXJhdGlvbjsgdXNlIHRoZSBuZXcgdmFsdWVzIGFuZCBpbmRleCBhcy1pcy5cbiAgICAgIGlmICghbjApIHtcbiAgICAgICAgdmFsdWVzID0gbmV3VmFsdWVzO1xuICAgICAgICBpbmRleCA9IG5ld0luZGV4O1xuICAgICAgICBpdGVyYWJsZXNJbmRleENvdW50ID0gbmV3SXRlcmFibGVzSW5kZXhDb3VudDtcbiAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMgPSBuZXdJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1cztcbiAgICAgICAgbG8wID0gbG8xO1xuICAgICAgICBoaTAgPSBoaTE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG5cbiAgICAgIHZhciBvbGRWYWx1ZXMgPSB2YWx1ZXMsXG4gICAgICAgIG9sZEluZGV4ID0gaW5kZXgsXG4gICAgICAgIG9sZEl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzID0gaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNcbiAgICAgICAgaTAgPSAwLFxuICAgICAgICBpMSA9IDA7XG5cbiAgICAgIGlmKGl0ZXJhYmxlKXtcbiAgICAgICAgb2xkX24wID0gbjBcbiAgICAgICAgbjAgPSBvbGRWYWx1ZXMubGVuZ3RoO1xuICAgICAgICBuMSA9IHRcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCBjcmVhdGUgbmV3IGFycmF5cyBpbnRvIHdoaWNoIHRvIG1lcmdlIG5ldyBhbmQgb2xkLlxuICAgICAgdmFsdWVzID0gaXRlcmFibGUgPyBuZXcgQXJyYXkobjAgKyBuMSkgOiBuZXcgQXJyYXkobik7XG4gICAgICBpbmRleCA9IGl0ZXJhYmxlID8gbmV3IEFycmF5KG4wICsgbjEpIDogY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbik7XG4gICAgICBpZihpdGVyYWJsZSkgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXMgPSBjcm9zc2ZpbHRlcl9pbmRleChuMCArIG4xLCAxKTtcblxuICAgICAgLy8gQ29uY2F0ZW5hdGUgdGhlIG5ld0l0ZXJhYmxlc0luZGV4Q291bnQgb250byB0aGUgb2xkIG9uZS5cbiAgICAgIGlmKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBvbGRpaWNsZW5ndGggPSBpdGVyYWJsZXNJbmRleENvdW50Lmxlbmd0aDtcbiAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudCA9IHhmaWx0ZXJBcnJheS5hcnJheUxlbmd0aGVuKGl0ZXJhYmxlc0luZGV4Q291bnQsIG4pO1xuICAgICAgICBmb3IodmFyIGo9MDsgaitvbGRpaWNsZW5ndGggPCBuOyBqKyspIHtcbiAgICAgICAgICBpdGVyYWJsZXNJbmRleENvdW50W2orb2xkaWljbGVuZ3RoXSA9IG5ld0l0ZXJhYmxlc0luZGV4Q291bnRbal07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2UgdGhlIG9sZCBhbmQgbmV3IHNvcnRlZCB2YWx1ZXMsIGFuZCBvbGQgYW5kIG5ldyBpbmRleC5cbiAgICAgIGZvciAoaSA9IDA7IGkwIDwgbjAgJiYgaTEgPCBuMTsgKytpKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZXNbaTBdIDwgbmV3VmFsdWVzW2kxXSkge1xuICAgICAgICAgIHZhbHVlc1tpXSA9IG9sZFZhbHVlc1tpMF07XG4gICAgICAgICAgaWYoaXRlcmFibGUpIGl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW2ldID0gb2xkSXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaTBdO1xuICAgICAgICAgIGluZGV4W2ldID0gb2xkSW5kZXhbaTArK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVzW2ldID0gbmV3VmFsdWVzW2kxXTtcbiAgICAgICAgICBpZihpdGVyYWJsZSkgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSBvbGRJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpMV07XG4gICAgICAgICAgaW5kZXhbaV0gPSBuZXdJbmRleFtpMSsrXSArIChpdGVyYWJsZSA/IG9sZF9uMCA6IG4wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW55IHJlbWFpbmluZyBvbGQgdmFsdWVzLlxuICAgICAgZm9yICg7IGkwIDwgbjA7ICsraTAsICsraSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSBvbGRWYWx1ZXNbaTBdO1xuICAgICAgICBpZihpdGVyYWJsZSkgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSBvbGRJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpMF07XG4gICAgICAgIGluZGV4W2ldID0gb2xkSW5kZXhbaTBdO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW55IHJlbWFpbmluZyBuZXcgdmFsdWVzLlxuICAgICAgZm9yICg7IGkxIDwgbjE7ICsraTEsICsraSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSBuZXdWYWx1ZXNbaTFdO1xuICAgICAgICBpZihpdGVyYWJsZSkgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbaV0gPSBvbGRJdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1tpMV07XG4gICAgICAgIGluZGV4W2ldID0gbmV3SW5kZXhbaTFdICsgKGl0ZXJhYmxlID8gb2xkX24wIDogbjApO1xuICAgICAgfVxuXG4gICAgICAvLyBCaXNlY3QgYWdhaW4gdG8gcmVjb21wdXRlIGxvMCBhbmQgaGkwLlxuICAgICAgYm91bmRzID0gcmVmaWx0ZXIodmFsdWVzKSwgbG8wID0gYm91bmRzWzBdLCBoaTAgPSBib3VuZHNbMV07XG4gICAgfVxuXG4gICAgLy8gV2hlbiBhbGwgZmlsdGVycyBoYXZlIHVwZGF0ZWQsIG5vdGlmeSBpbmRleCBsaXN0ZW5lcnMgb2YgdGhlIG5ldyB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gcG9zdEFkZChuZXdEYXRhLCBuMCwgbjEpIHtcbiAgICAgIGluZGV4TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG5ld1ZhbHVlcywgbmV3SW5kZXgsIG4wLCBuMSk7IH0pO1xuICAgICAgbmV3VmFsdWVzID0gbmV3SW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZURhdGEocmVJbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLCBrOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICghZmlsdGVycy56ZXJvKGsgPSBpbmRleFtpXSkpIHtcbiAgICAgICAgICBpZiAoaSAhPT0gaikgdmFsdWVzW2pdID0gdmFsdWVzW2ldO1xuICAgICAgICAgIGluZGV4W2pdID0gcmVJbmRleFtrXTtcbiAgICAgICAgICArK2o7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhbHVlcy5sZW5ndGggPSBqO1xuICAgICAgd2hpbGUgKGogPCBuKSBpbmRleFtqKytdID0gMDtcblxuICAgICAgLy8gQmlzZWN0IGFnYWluIHRvIHJlY29tcHV0ZSBsbzAgYW5kIGhpMC5cbiAgICAgIHZhciBib3VuZHMgPSByZWZpbHRlcih2YWx1ZXMpO1xuICAgICAgbG8wID0gYm91bmRzWzBdLCBoaTAgPSBib3VuZHNbMV07XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgc2VsZWN0ZWQgdmFsdWVzIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgYm91bmRzIFtsbywgaGldLlxuICAgIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBieSBhbGwgdGhlIHB1YmxpYyBmaWx0ZXIgbWV0aG9kcy5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJbmRleEJvdW5kcyhib3VuZHMpIHtcblxuICAgICAgdmFyIGxvMSA9IGJvdW5kc1swXSxcbiAgICAgICAgICBoaTEgPSBib3VuZHNbMV07XG5cbiAgICAgIGlmIChyZWZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJlZmlsdGVyRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICBmaWx0ZXJJbmRleEZ1bmN0aW9uKGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGxvMSA8PSBpICYmIGkgPCBoaTE7IH0sIGJvdW5kc1swXSA9PT0gMCAmJiBib3VuZHNbMV0gPT09IGluZGV4Lmxlbmd0aCk7XG4gICAgICAgIGxvMCA9IGxvMTtcbiAgICAgICAgaGkwID0gaGkxO1xuICAgICAgICByZXR1cm4gZGltZW5zaW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgaSxcbiAgICAgICAgICBqLFxuICAgICAgICAgIGssXG4gICAgICAgICAgYWRkZWQgPSBbXSxcbiAgICAgICAgICByZW1vdmVkID0gW10sXG4gICAgICAgICAgdmFsdWVJbmRleEFkZGVkID0gW10sXG4gICAgICAgICAgdmFsdWVJbmRleFJlbW92ZWQgPSBbXTtcblxuXG4gICAgICAvLyBGYXN0IGluY3JlbWVudGFsIHVwZGF0ZSBiYXNlZCBvbiBwcmV2aW91cyBsbyBpbmRleC5cbiAgICAgIGlmIChsbzEgPCBsbzApIHtcbiAgICAgICAgZm9yIChpID0gbG8xLCBqID0gTWF0aC5taW4obG8wLCBoaTEpOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgYWRkZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgdmFsdWVJbmRleEFkZGVkLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobG8xID4gbG8wKSB7XG4gICAgICAgIGZvciAoaSA9IGxvMCwgaiA9IE1hdGgubWluKGxvMSwgaGkwKTsgaSA8IGo7ICsraSkge1xuICAgICAgICAgIHJlbW92ZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgdmFsdWVJbmRleFJlbW92ZWQucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGYXN0IGluY3JlbWVudGFsIHVwZGF0ZSBiYXNlZCBvbiBwcmV2aW91cyBoaSBpbmRleC5cbiAgICAgIGlmIChoaTEgPiBoaTApIHtcbiAgICAgICAgZm9yIChpID0gTWF0aC5tYXgobG8xLCBoaTApLCBqID0gaGkxOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgYWRkZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgdmFsdWVJbmRleEFkZGVkLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGkxIDwgaGkwKSB7XG4gICAgICAgIGZvciAoaSA9IE1hdGgubWF4KGxvMCwgaGkxKSwgaiA9IGhpMDsgaSA8IGo7ICsraSkge1xuICAgICAgICAgIHJlbW92ZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgdmFsdWVJbmRleFJlbW92ZWQucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighaXRlcmFibGUpIHtcbiAgICAgICAgLy8gRmxpcCBmaWx0ZXJzIG5vcm1hbGx5LlxuXG4gICAgICAgIGZvcihpPTA7IGk8YWRkZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bYWRkZWRbaV1dIF49IG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihpPTA7IGk8cmVtb3ZlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVtyZW1vdmVkW2ldXSBePSBvbmU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIGl0ZXJhYmxlcywgd2UgbmVlZCB0byBmaWd1cmUgb3V0IGlmIHRoZSByb3cgaGFzIGJlZW4gY29tcGxldGVseSByZW1vdmVkIHZzIHBhcnRpYWxseSBpbmNsdWRlZFxuICAgICAgICAvLyBPbmx5IGNvdW50IGEgcm93IGFzIGFkZGVkIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGJlaW5nIGFnZ3JlZ2F0ZWQuIE9ubHkgY291bnQgYSByb3dcbiAgICAgICAgLy8gYXMgcmVtb3ZlZCBpZiB0aGUgbGFzdCBlbGVtZW50IGJlaW5nIGFnZ3JlZ2F0ZWQgaXMgcmVtb3ZlZC5cblxuICAgICAgICB2YXIgbmV3QWRkZWQgPSBbXTtcbiAgICAgICAgdmFyIG5ld1JlbW92ZWQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudFthZGRlZFtpXV0rK1xuICAgICAgICAgIGl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW3ZhbHVlSW5kZXhBZGRlZFtpXV0gPSAwO1xuICAgICAgICAgIGlmKGl0ZXJhYmxlc0luZGV4Q291bnRbYWRkZWRbaV1dID09PSAxKSB7XG4gICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bYWRkZWRbaV1dIF49IG9uZTtcbiAgICAgICAgICAgIG5ld0FkZGVkLnB1c2goYWRkZWRbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVtb3ZlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZXJhYmxlc0luZGV4Q291bnRbcmVtb3ZlZFtpXV0tLVxuICAgICAgICAgIGl0ZXJhYmxlc0luZGV4RmlsdGVyU3RhdHVzW3ZhbHVlSW5kZXhSZW1vdmVkW2ldXSA9IDE7XG4gICAgICAgICAgaWYoaXRlcmFibGVzSW5kZXhDb3VudFtyZW1vdmVkW2ldXSA9PT0gMCkge1xuICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW3JlbW92ZWRbaV1dIF49IG9uZTtcbiAgICAgICAgICAgIG5ld1JlbW92ZWQucHVzaChyZW1vdmVkW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhZGRlZCA9IG5ld0FkZGVkO1xuICAgICAgICByZW1vdmVkID0gbmV3UmVtb3ZlZDtcblxuICAgICAgICAvLyBOb3cgaGFuZGxlIGVtcHR5IHJvd3MuXG4gICAgICAgIGlmKGJvdW5kc1swXSA9PT0gMCAmJiBib3VuZHNbMV0gPT09IGluZGV4Lmxlbmd0aCkge1xuICAgICAgICAgIGZvcihpID0gMDsgaSA8IGl0ZXJhYmxlc0VtcHR5Um93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoKGZpbHRlcnNbb2Zmc2V0XVtrID0gaXRlcmFibGVzRW1wdHlSb3dzW2ldXSAmIG9uZSkpIHtcbiAgICAgICAgICAgICAgLy8gV2FzIG5vdCBpbiB0aGUgZmlsdGVyLCBzbyBzZXQgdGhlIGZpbHRlciBhbmQgYWRkXG4gICAgICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVtrXSBePSBvbmU7XG4gICAgICAgICAgICAgIGFkZGVkLnB1c2goayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZpbHRlciBpbiBwbGFjZSAtIHJlbW92ZSBlbXB0eSByb3dzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGZvcihpID0gMDsgaSA8IGl0ZXJhYmxlc0VtcHR5Um93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoIShmaWx0ZXJzW29mZnNldF1bayA9IGl0ZXJhYmxlc0VtcHR5Um93c1tpXV0gJiBvbmUpKSB7XG4gICAgICAgICAgICAgIC8vIFdhcyBpbiB0aGUgZmlsdGVyLCBzbyBzZXQgdGhlIGZpbHRlciBhbmQgcmVtb3ZlXG4gICAgICAgICAgICAgIGZpbHRlcnNbb2Zmc2V0XVtrXSBePSBvbmU7XG4gICAgICAgICAgICAgIHJlbW92ZWQucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG8wID0gbG8xO1xuICAgICAgaGkwID0gaGkxO1xuICAgICAgZmlsdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkgeyBsKG9uZSwgb2Zmc2V0LCBhZGRlZCwgcmVtb3ZlZCk7IH0pO1xuICAgICAgdHJpZ2dlck9uQ2hhbmdlKCdmaWx0ZXJlZCcpO1xuICAgICAgcmV0dXJuIGRpbWVuc2lvbjtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHZhbHVlLCBvciBudWxsLlxuICAgIC8vIElmIHRoZSByYW5nZSBpcyBudWxsLCB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gZmlsdGVyQWxsLlxuICAgIC8vIElmIHRoZSByYW5nZSBpcyBhbiBhcnJheSwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGZpbHRlclJhbmdlLlxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGZpbHRlckV4YWN0LlxuICAgIGZ1bmN0aW9uIGZpbHRlcihyYW5nZSkge1xuICAgICAgcmV0dXJuIHJhbmdlID09IG51bGxcbiAgICAgICAgICA/IGZpbHRlckFsbCgpIDogQXJyYXkuaXNBcnJheShyYW5nZSlcbiAgICAgICAgICA/IGZpbHRlclJhbmdlKHJhbmdlKSA6IHR5cGVvZiByYW5nZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBmaWx0ZXJGdW5jdGlvbihyYW5nZSlcbiAgICAgICAgICA6IGZpbHRlckV4YWN0KHJhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHRvIHNlbGVjdCB0aGUgZXhhY3QgdmFsdWUuXG4gICAgZnVuY3Rpb24gZmlsdGVyRXhhY3QodmFsdWUpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSB4ZmlsdGVyRmlsdGVyLmZpbHRlckV4YWN0KGJpc2VjdCwgdmFsdWUpKSh2YWx1ZXMpKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXJzIHRoaXMgZGltZW5zaW9uIHRvIHNlbGVjdCB0aGUgc3BlY2lmaWVkIHJhbmdlIFtsbywgaGldLlxuICAgIC8vIFRoZSBsb3dlciBib3VuZCBpcyBpbmNsdXNpdmUsIGFuZCB0aGUgdXBwZXIgYm91bmQgaXMgZXhjbHVzaXZlLlxuICAgIGZ1bmN0aW9uIGZpbHRlclJhbmdlKHJhbmdlKSB7XG4gICAgICByZXR1cm4gZmlsdGVySW5kZXhCb3VuZHMoKHJlZmlsdGVyID0geGZpbHRlckZpbHRlci5maWx0ZXJSYW5nZShiaXNlY3QsIHJhbmdlKSkodmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXJzIGFueSBmaWx0ZXJzIG9uIHRoaXMgZGltZW5zaW9uLlxuICAgIGZ1bmN0aW9uIGZpbHRlckFsbCgpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJJbmRleEJvdW5kcygocmVmaWx0ZXIgPSB4ZmlsdGVyRmlsdGVyLmZpbHRlckFsbCkodmFsdWVzKSk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVycyB0aGlzIGRpbWVuc2lvbiB1c2luZyBhbiBhcmJpdHJhcnkgZnVuY3Rpb24uXG4gICAgZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oZikge1xuICAgICAgcmVmaWx0ZXJGdW5jdGlvbiA9IGY7XG4gICAgICByZWZpbHRlciA9IHhmaWx0ZXJGaWx0ZXIuZmlsdGVyQWxsO1xuXG4gICAgICBmaWx0ZXJJbmRleEZ1bmN0aW9uKGYsIGZhbHNlKTtcblxuICAgICAgbG8wID0gMDtcbiAgICAgIGhpMCA9IG47XG5cbiAgICAgIHJldHVybiBkaW1lbnNpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVySW5kZXhGdW5jdGlvbihmLCBmaWx0ZXJBbGwpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGssXG4gICAgICAgICAgeCxcbiAgICAgICAgICBhZGRlZCA9IFtdLFxuICAgICAgICAgIHJlbW92ZWQgPSBbXSxcbiAgICAgICAgICB2YWx1ZUluZGV4QWRkZWQgPSBbXSxcbiAgICAgICAgICB2YWx1ZUluZGV4UmVtb3ZlZCA9IFtdLFxuICAgICAgICAgIGluZGV4TGVuZ3RoID0gaW5kZXgubGVuZ3RoO1xuXG4gICAgICBpZighaXRlcmFibGUpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZGV4TGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoIShmaWx0ZXJzW29mZnNldF1bayA9IGluZGV4W2ldXSAmIG9uZSkgXiAhISh4ID0gZih2YWx1ZXNbaV0sIGkpKSkge1xuICAgICAgICAgICAgaWYgKHgpIGFkZGVkLnB1c2goayk7XG4gICAgICAgICAgICBlbHNlIHJlbW92ZWQucHVzaChrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXRlcmFibGUpIHtcbiAgICAgICAgZm9yKGk9MDsgaSA8IGluZGV4TGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZihmKHZhbHVlc1tpXSwgaSkpIHtcbiAgICAgICAgICAgIGFkZGVkLnB1c2goaW5kZXhbaV0pO1xuICAgICAgICAgICAgdmFsdWVJbmRleEFkZGVkLnB1c2goaSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChpbmRleFtpXSk7XG4gICAgICAgICAgICB2YWx1ZUluZGV4UmVtb3ZlZC5wdXNoKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighaXRlcmFibGUpIHtcbiAgICAgICAgZm9yKGk9MDsgaTxhZGRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKGZpbHRlcnNbb2Zmc2V0XVthZGRlZFtpXV0gJiBvbmUpIGZpbHRlcnNbb2Zmc2V0XVthZGRlZFtpXV0gJj0gemVybztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihpPTA7IGk8cmVtb3ZlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCEoZmlsdGVyc1tvZmZzZXRdW3JlbW92ZWRbaV1dICYgb25lKSkgZmlsdGVyc1tvZmZzZXRdW3JlbW92ZWRbaV1dIHw9IG9uZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB2YXIgbmV3QWRkZWQgPSBbXTtcbiAgICAgICAgdmFyIG5ld1JlbW92ZWQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gRmlyc3QgY2hlY2sgdGhpcyBwYXJ0aWN1bGFyIHZhbHVlIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgICAgaWYoaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbdmFsdWVJbmRleEFkZGVkW2ldXSA9PT0gMSkge1xuICAgICAgICAgICAgaXRlcmFibGVzSW5kZXhDb3VudFthZGRlZFtpXV0rK1xuICAgICAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbdmFsdWVJbmRleEFkZGVkW2ldXSA9IDA7XG4gICAgICAgICAgICBpZihpdGVyYWJsZXNJbmRleENvdW50W2FkZGVkW2ldXSA9PT0gMSkge1xuICAgICAgICAgICAgICBmaWx0ZXJzW29mZnNldF1bYWRkZWRbaV1dIF49IG9uZTtcbiAgICAgICAgICAgICAgbmV3QWRkZWQucHVzaChhZGRlZFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZW1vdmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gRmlyc3QgY2hlY2sgdGhpcyBwYXJ0aWN1bGFyIHZhbHVlIG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICBpZihpdGVyYWJsZXNJbmRleEZpbHRlclN0YXR1c1t2YWx1ZUluZGV4UmVtb3ZlZFtpXV0gPT09IDApIHtcbiAgICAgICAgICAgIGl0ZXJhYmxlc0luZGV4Q291bnRbcmVtb3ZlZFtpXV0tLVxuICAgICAgICAgICAgaXRlcmFibGVzSW5kZXhGaWx0ZXJTdGF0dXNbdmFsdWVJbmRleFJlbW92ZWRbaV1dID0gMTtcbiAgICAgICAgICAgIGlmKGl0ZXJhYmxlc0luZGV4Q291bnRbcmVtb3ZlZFtpXV0gPT09IDApIHtcbiAgICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW3JlbW92ZWRbaV1dIF49IG9uZTtcbiAgICAgICAgICAgICAgbmV3UmVtb3ZlZC5wdXNoKHJlbW92ZWRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkZGVkID0gbmV3QWRkZWQ7XG4gICAgICAgIHJlbW92ZWQgPSBuZXdSZW1vdmVkO1xuXG4gICAgICAgIC8vIE5vdyBoYW5kbGUgZW1wdHkgcm93cy5cbiAgICAgICAgaWYoZmlsdGVyQWxsKSB7XG4gICAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZigoZmlsdGVyc1tvZmZzZXRdW2sgPSBpdGVyYWJsZXNFbXB0eVJvd3NbaV1dICYgb25lKSkge1xuICAgICAgICAgICAgICAvLyBXYXMgbm90IGluIHRoZSBmaWx0ZXIsIHNvIHNldCB0aGUgZmlsdGVyIGFuZCBhZGRcbiAgICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW2tdIF49IG9uZTtcbiAgICAgICAgICAgICAgYWRkZWQucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZmlsdGVyIGluIHBsYWNlIC0gcmVtb3ZlIGVtcHR5IHJvd3MgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZighKGZpbHRlcnNbb2Zmc2V0XVtrID0gaXRlcmFibGVzRW1wdHlSb3dzW2ldXSAmIG9uZSkpIHtcbiAgICAgICAgICAgICAgLy8gV2FzIGluIHRoZSBmaWx0ZXIsIHNvIHNldCB0aGUgZmlsdGVyIGFuZCByZW1vdmVcbiAgICAgICAgICAgICAgZmlsdGVyc1tvZmZzZXRdW2tdIF49IG9uZTtcbiAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaWx0ZXJMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7IGwob25lLCBvZmZzZXQsIGFkZGVkLCByZW1vdmVkKTsgfSk7XG4gICAgICB0cmlnZ2VyT25DaGFuZ2UoJ2ZpbHRlcmVkJyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgdG9wIEsgc2VsZWN0ZWQgcmVjb3JkcyBiYXNlZCBvbiB0aGlzIGRpbWVuc2lvbidzIG9yZGVyLlxuICAgIC8vIE5vdGU6IG9ic2VydmVzIHRoaXMgZGltZW5zaW9uJ3MgZmlsdGVyLCB1bmxpa2UgZ3JvdXAgYW5kIGdyb3VwQWxsLlxuICAgIGZ1bmN0aW9uIHRvcChrLCB0b3Bfb2Zmc2V0KSB7XG4gICAgICB2YXIgYXJyYXkgPSBbXSxcbiAgICAgICAgICBpID0gaGkwLFxuICAgICAgICAgIGosXG4gICAgICAgICAgdG9Ta2lwID0gMDtcblxuICAgICAgaWYodG9wX29mZnNldCAmJiB0b3Bfb2Zmc2V0ID4gMCkgdG9Ta2lwID0gdG9wX29mZnNldDtcblxuICAgICAgd2hpbGUgKC0taSA+PSBsbzAgJiYgayA+IDApIHtcbiAgICAgICAgaWYgKGZpbHRlcnMuemVybyhqID0gaW5kZXhbaV0pKSB7XG4gICAgICAgICAgaWYodG9Ta2lwID4gMCkge1xuICAgICAgICAgICAgLy9za2lwIG1hdGNoaW5nIHJvd1xuICAgICAgICAgICAgLS10b1NraXA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAtLWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGl0ZXJhYmxlKXtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aCAmJiBrID4gMDsgaSsrKSB7XG4gICAgICAgICAgLy8gQWRkIHJvdyB3aXRoIGVtcHR5IGl0ZXJhYmxlIGNvbHVtbiBhdCB0aGUgZW5kXG4gICAgICAgICAgaWYoZmlsdGVycy56ZXJvKGogPSBpdGVyYWJsZXNFbXB0eVJvd3NbaV0pKSB7XG4gICAgICAgICAgICBpZih0b1NraXAgPiAwKSB7XG4gICAgICAgICAgICAgIC8vc2tpcCBtYXRjaGluZyByb3dcbiAgICAgICAgICAgICAgLS10b1NraXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcnJheS5wdXNoKGRhdGFbal0pO1xuICAgICAgICAgICAgICAtLWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBib3R0b20gSyBzZWxlY3RlZCByZWNvcmRzIGJhc2VkIG9uIHRoaXMgZGltZW5zaW9uJ3Mgb3JkZXIuXG4gICAgLy8gTm90ZTogb2JzZXJ2ZXMgdGhpcyBkaW1lbnNpb24ncyBmaWx0ZXIsIHVubGlrZSBncm91cCBhbmQgZ3JvdXBBbGwuXG4gICAgZnVuY3Rpb24gYm90dG9tKGssIGJvdHRvbV9vZmZzZXQpIHtcbiAgICAgIHZhciBhcnJheSA9IFtdLFxuICAgICAgICAgIGksXG4gICAgICAgICAgaixcbiAgICAgICAgICB0b1NraXAgPSAwO1xuXG4gICAgICBpZihib3R0b21fb2Zmc2V0ICYmIGJvdHRvbV9vZmZzZXQgPiAwKSB0b1NraXAgPSBib3R0b21fb2Zmc2V0O1xuXG4gICAgICBpZihpdGVyYWJsZSkge1xuICAgICAgICAvLyBBZGQgcm93IHdpdGggZW1wdHkgaXRlcmFibGUgY29sdW1uIGF0IHRoZSB0b3BcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgaXRlcmFibGVzRW1wdHlSb3dzLmxlbmd0aCAmJiBrID4gMDsgaSsrKSB7XG4gICAgICAgICAgaWYoZmlsdGVycy56ZXJvKGogPSBpdGVyYWJsZXNFbXB0eVJvd3NbaV0pKSB7XG4gICAgICAgICAgICBpZih0b1NraXAgPiAwKSB7XG4gICAgICAgICAgICAgIC8vc2tpcCBtYXRjaGluZyByb3dcbiAgICAgICAgICAgICAgLS10b1NraXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcnJheS5wdXNoKGRhdGFbal0pO1xuICAgICAgICAgICAgICAtLWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGkgPSBsbzA7XG5cbiAgICAgIHdoaWxlIChpIDwgaGkwICYmIGsgPiAwKSB7XG4gICAgICAgIGlmIChmaWx0ZXJzLnplcm8oaiA9IGluZGV4W2ldKSkge1xuICAgICAgICAgIGlmKHRvU2tpcCA+IDApIHtcbiAgICAgICAgICAgIC8vc2tpcCBtYXRjaGluZyByb3dcbiAgICAgICAgICAgIC0tdG9Ta2lwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGRhdGFbal0pO1xuICAgICAgICAgICAgLS1rO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvLyBBZGRzIGEgbmV3IGdyb3VwIHRvIHRoaXMgZGltZW5zaW9uLCB1c2luZyB0aGUgc3BlY2lmaWVkIGtleSBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBncm91cChrZXkpIHtcbiAgICAgIHZhciBncm91cCA9IHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGFsbDogYWxsLFxuICAgICAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICAgICAgcmVkdWNlQ291bnQ6IHJlZHVjZUNvdW50LFxuICAgICAgICByZWR1Y2VTdW06IHJlZHVjZVN1bSxcbiAgICAgICAgb3JkZXI6IG9yZGVyLFxuICAgICAgICBvcmRlck5hdHVyYWw6IG9yZGVyTmF0dXJhbCxcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgZGlzcG9zZTogZGlzcG9zZSxcbiAgICAgICAgcmVtb3ZlOiBkaXNwb3NlIC8vIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgICAgfTtcblxuICAgICAgLy8gRW5zdXJlIHRoYXQgdGhpcyBncm91cCB3aWxsIGJlIHJlbW92ZWQgd2hlbiB0aGUgZGltZW5zaW9uIGlzIHJlbW92ZWQuXG4gICAgICBkaW1lbnNpb25Hcm91cHMucHVzaChncm91cCk7XG5cbiAgICAgIHZhciBncm91cHMsIC8vIGFycmF5IG9mIHtrZXksIHZhbHVlfVxuICAgICAgICAgIGdyb3VwSW5kZXgsIC8vIG9iamVjdCBpZCDihqYgZ3JvdXAgaWRcbiAgICAgICAgICBncm91cFdpZHRoID0gOCxcbiAgICAgICAgICBncm91cENhcGFjaXR5ID0gY3Jvc3NmaWx0ZXJfY2FwYWNpdHkoZ3JvdXBXaWR0aCksXG4gICAgICAgICAgayA9IDAsIC8vIGNhcmRpbmFsaXR5XG4gICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgIGhlYXAsXG4gICAgICAgICAgcmVkdWNlQWRkLFxuICAgICAgICAgIHJlZHVjZVJlbW92ZSxcbiAgICAgICAgICByZWR1Y2VJbml0aWFsLFxuICAgICAgICAgIHVwZGF0ZSA9IGNyb3NzZmlsdGVyX251bGwsXG4gICAgICAgICAgcmVzZXQgPSBjcm9zc2ZpbHRlcl9udWxsLFxuICAgICAgICAgIHJlc2V0TmVlZGVkID0gdHJ1ZSxcbiAgICAgICAgICBncm91cEFsbCA9IGtleSA9PT0gY3Jvc3NmaWx0ZXJfbnVsbDtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSBrZXkgPSBjcm9zc2ZpbHRlcl9pZGVudGl0eTtcblxuICAgICAgLy8gVGhlIGdyb3VwIGxpc3RlbnMgdG8gdGhlIGNyb3NzZmlsdGVyIGZvciB3aGVuIGFueSBkaW1lbnNpb24gY2hhbmdlcywgc29cbiAgICAgIC8vIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgYXNzb2NpYXRlZCByZWR1Y2UgdmFsdWVzLiBJdCBtdXN0IGFsc28gbGlzdGVuIHRvXG4gICAgICAvLyB0aGUgcGFyZW50IGRpbWVuc2lvbiBmb3Igd2hlbiBkYXRhIGlzIGFkZGVkLCBhbmQgY29tcHV0ZSBuZXcga2V5cy5cbiAgICAgIGZpbHRlckxpc3RlbmVycy5wdXNoKHVwZGF0ZSk7XG4gICAgICBpbmRleExpc3RlbmVycy5wdXNoKGFkZCk7XG4gICAgICByZW1vdmVEYXRhTGlzdGVuZXJzLnB1c2gocmVtb3ZlRGF0YSk7XG5cbiAgICAgIC8vIEluY29ycG9yYXRlIGFueSBleGlzdGluZyBkYXRhIGludG8gdGhlIGdyb3VwaW5nLlxuICAgICAgYWRkKHZhbHVlcywgaW5kZXgsIDAsIG4pO1xuXG4gICAgICAvLyBJbmNvcnBvcmF0ZXMgdGhlIHNwZWNpZmllZCBuZXcgdmFsdWVzIGludG8gdGhpcyBncm91cC5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIGdyb3VwcyBhbmQgZ3JvdXBJbmRleC5cbiAgICAgIGZ1bmN0aW9uIGFkZChuZXdWYWx1ZXMsIG5ld0luZGV4LCBuMCwgbjEpIHtcblxuICAgICAgICBpZihpdGVyYWJsZSkge1xuICAgICAgICAgIG4wb2xkID0gbjBcbiAgICAgICAgICBuMCA9IHZhbHVlcy5sZW5ndGggLSBuZXdWYWx1ZXMubGVuZ3RoXG4gICAgICAgICAgbjEgPSBuZXdWYWx1ZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZEdyb3VwcyA9IGdyb3VwcyxcbiAgICAgICAgICAgIHJlSW5kZXggPSBpdGVyYWJsZSA/IFtdIDogY3Jvc3NmaWx0ZXJfaW5kZXgoaywgZ3JvdXBDYXBhY2l0eSksXG4gICAgICAgICAgICBhZGQgPSByZWR1Y2VBZGQsXG4gICAgICAgICAgICByZW1vdmUgPSByZWR1Y2VSZW1vdmUsXG4gICAgICAgICAgICBpbml0aWFsID0gcmVkdWNlSW5pdGlhbCxcbiAgICAgICAgICAgIGswID0gaywgLy8gb2xkIGNhcmRpbmFsaXR5XG4gICAgICAgICAgICBpMCA9IDAsIC8vIGluZGV4IG9mIG9sZCBncm91cFxuICAgICAgICAgICAgaTEgPSAwLCAvLyBpbmRleCBvZiBuZXcgcmVjb3JkXG4gICAgICAgICAgICBqLCAvLyBvYmplY3QgaWRcbiAgICAgICAgICAgIGcwLCAvLyBvbGQgZ3JvdXBcbiAgICAgICAgICAgIHgwLCAvLyBvbGQga2V5XG4gICAgICAgICAgICB4MSwgLy8gbmV3IGtleVxuICAgICAgICAgICAgZywgLy8gZ3JvdXAgdG8gYWRkXG4gICAgICAgICAgICB4OyAvLyBrZXkgb2YgZ3JvdXAgdG8gYWRkXG5cbiAgICAgICAgLy8gSWYgYSByZXNldCBpcyBuZWVkZWQsIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIHRoZSByZWR1Y2UgdmFsdWVzLlxuICAgICAgICBpZiAocmVzZXROZWVkZWQpIGFkZCA9IGluaXRpYWwgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICBpZiAocmVzZXROZWVkZWQpIHJlbW92ZSA9IGluaXRpYWwgPSBjcm9zc2ZpbHRlcl9udWxsO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBuZXcgZ3JvdXBzIChrIGlzIGEgbG93ZXIgYm91bmQpLlxuICAgICAgICAvLyBBbHNvLCBtYWtlIHN1cmUgdGhhdCBncm91cEluZGV4IGV4aXN0cyBhbmQgaXMgbG9uZyBlbm91Z2guXG4gICAgICAgIGdyb3VwcyA9IG5ldyBBcnJheShrKSwgayA9IDA7XG4gICAgICAgIGlmKGl0ZXJhYmxlKXtcbiAgICAgICAgICBncm91cEluZGV4ID0gazAgPiAxID8gZ3JvdXBJbmRleCA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgZ3JvdXBJbmRleCA9IGswID4gMSA/IHhmaWx0ZXJBcnJheS5hcnJheUxlbmd0aGVuKGdyb3VwSW5kZXgsIG4pIDogY3Jvc3NmaWx0ZXJfaW5kZXgobiwgZ3JvdXBDYXBhY2l0eSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgb2xkIGtleSAoeDAgb2YgZzApLCBpZiBpdCBleGlzdHMuXG4gICAgICAgIGlmIChrMCkgeDAgPSAoZzAgPSBvbGRHcm91cHNbMF0pLmtleTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBuZXcga2V5ICh4MSksIHNraXBwaW5nIE5hTiBrZXlzLlxuICAgICAgICB3aGlsZSAoaTEgPCBuMSAmJiAhKCh4MSA9IGtleShuZXdWYWx1ZXNbaTFdKSkgPj0geDEpKSArK2kxO1xuXG4gICAgICAgIC8vIFdoaWxlIG5ldyBrZXlzIHJlbWFpbuKAplxuICAgICAgICB3aGlsZSAoaTEgPCBuMSkge1xuXG4gICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBsZXNzZXIgb2YgdGhlIHR3byBjdXJyZW50IGtleXM7IG5ldyBhbmQgb2xkLlxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBvbGQga2V5cyByZW1haW5pbmcsIHRoZW4gYWx3YXlzIGFkZCB0aGUgbmV3IGtleS5cbiAgICAgICAgICBpZiAoZzAgJiYgeDAgPD0geDEpIHtcbiAgICAgICAgICAgIGcgPSBnMCwgeCA9IHgwO1xuXG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIG5ldyBpbmRleCBvZiB0aGUgb2xkIGdyb3VwLlxuICAgICAgICAgICAgcmVJbmRleFtpMF0gPSBrO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgbmV4dCBvbGQga2V5LlxuICAgICAgICAgICAgaWYgKGcwID0gb2xkR3JvdXBzWysraTBdKSB4MCA9IGcwLmtleTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZyA9IHtrZXk6IHgxLCB2YWx1ZTogaW5pdGlhbCgpfSwgeCA9IHgxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCB0aGUgbGVzc2VyIGdyb3VwLlxuICAgICAgICAgIGdyb3Vwc1trXSA9IGc7XG5cbiAgICAgICAgICAvLyBBZGQgYW55IHNlbGVjdGVkIHJlY29yZHMgYmVsb25naW5nIHRvIHRoZSBhZGRlZCBncm91cCwgd2hpbGVcbiAgICAgICAgICAvLyBhZHZhbmNpbmcgdGhlIG5ldyBrZXkgYW5kIHBvcHVsYXRpbmcgdGhlIGFzc29jaWF0ZWQgZ3JvdXAgaW5kZXguXG5cbiAgICAgICAgICB3aGlsZSAoeDEgPD0geCkge1xuICAgICAgICAgICAgaiA9IG5ld0luZGV4W2kxXSArIChpdGVyYWJsZSA/IG4wb2xkIDogbjApXG5cblxuICAgICAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgICAgICBpZihncm91cEluZGV4W2pdKXtcbiAgICAgICAgICAgICAgICBncm91cEluZGV4W2pdLnB1c2goaylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXhbal0gPSBba11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgZ3JvdXBJbmRleFtqXSA9IGs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFsd2F5cyBhZGQgbmV3IHZhbHVlcyB0byBncm91cHMuIE9ubHkgcmVtb3ZlIHdoZW4gbm90IGluIGZpbHRlci5cbiAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgZ3JvdXBzIGZ1bGwgaW5mb3JtYXRpb24gb24gZGF0YSBsaWZlLWN5Y2xlLlxuICAgICAgICAgICAgZy52YWx1ZSA9IGFkZChnLnZhbHVlLCBkYXRhW2pdLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghZmlsdGVycy56ZXJvRXhjZXB0KGosIG9mZnNldCwgemVybykpIGcudmFsdWUgPSByZW1vdmUoZy52YWx1ZSwgZGF0YVtqXSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCsraTEgPj0gbjEpIGJyZWFrO1xuICAgICAgICAgICAgeDEgPSBrZXkobmV3VmFsdWVzW2kxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ3JvdXBJbmNyZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhbnkgcmVtYWluaW5nIG9sZCBncm91cHMgdGhhdCB3ZXJlIGdyZWF0ZXIgdGgxYW4gYWxsIG5ldyBrZXlzLlxuICAgICAgICAvLyBObyBpbmNyZW1lbnRhbCByZWR1Y2UgaXMgbmVlZGVkOyB0aGVzZSBncm91cHMgaGF2ZSBubyBuZXcgcmVjb3Jkcy5cbiAgICAgICAgLy8gQWxzbyByZWNvcmQgdGhlIG5ldyBpbmRleCBvZiB0aGUgb2xkIGdyb3VwLlxuICAgICAgICB3aGlsZSAoaTAgPCBrMCkge1xuICAgICAgICAgIGdyb3Vwc1tyZUluZGV4W2kwXSA9IGtdID0gb2xkR3JvdXBzW2kwKytdO1xuICAgICAgICAgIGdyb3VwSW5jcmVtZW50KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZpbGwgaW4gZ2FwcyB3aXRoIGVtcHR5IGFycmF5cyB3aGVyZSB0aGVyZSBtYXkgaGF2ZSBiZWVuIHJvd3Mgd2l0aCBlbXB0eSBpdGVyYWJsZXNcbiAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmKCFncm91cEluZGV4W2ldKXtcbiAgICAgICAgICAgICAgZ3JvdXBJbmRleFtpXSA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgYWRkZWQgYW55IG5ldyBncm91cHMgYmVmb3JlIGFueSBvbGQgZ3JvdXBzLFxuICAgICAgICAvLyB1cGRhdGUgdGhlIGdyb3VwIGluZGV4IG9mIGFsbCB0aGUgb2xkIHJlY29yZHMuXG4gICAgICAgIGlmKGsgPiBpMCl7XG4gICAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgICAgZ3JvdXBJbmRleCA9IHBlcm11dGUoZ3JvdXBJbmRleCwgcmVJbmRleCwgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZvciAoaTAgPSAwOyBpMCA8IG4wOyArK2kwKSB7XG4gICAgICAgICAgICAgIGdyb3VwSW5kZXhbaTBdID0gcmVJbmRleFtncm91cEluZGV4W2kwXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9kaWZ5IHRoZSB1cGRhdGUgYW5kIHJlc2V0IGJlaGF2aW9yIGJhc2VkIG9uIHRoZSBjYXJkaW5hbGl0eS5cbiAgICAgICAgLy8gSWYgdGhlIGNhcmRpbmFsaXR5IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUsIHRoZW4gdGhlIGdyb3VwSW5kZXhcbiAgICAgICAgLy8gaXMgbm90IG5lZWRlZC4gSWYgdGhlIGNhcmRpbmFsaXR5IGlzIHplcm8sIHRoZW4gdGhlcmUgYXJlIG5vIHJlY29yZHNcbiAgICAgICAgLy8gYW5kIHRoZXJlZm9yZSBubyBncm91cHMgdG8gdXBkYXRlIG9yIHJlc2V0LiBOb3RlIHRoYXQgd2UgYWxzbyBtdXN0XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgcmVnaXN0ZXJlZCBsaXN0ZW5lciB0byBwb2ludCB0byB0aGUgbmV3IG1ldGhvZC5cbiAgICAgICAgaiA9IGZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSk7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZU1hbnk7XG4gICAgICAgICAgcmVzZXQgPSByZXNldE1hbnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFrICYmIGdyb3VwQWxsKSB7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgICAgIGdyb3VwcyA9IFt7a2V5OiBudWxsLCB2YWx1ZTogaW5pdGlhbCgpfV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrID09PSAxKSB7XG4gICAgICAgICAgICB1cGRhdGUgPSB1cGRhdGVPbmU7XG4gICAgICAgICAgICByZXNldCA9IHJlc2V0T25lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGUgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICAgICAgcmVzZXQgPSBjcm9zc2ZpbHRlcl9udWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBncm91cEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbal0gPSB1cGRhdGU7XG5cbiAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBhZGRlZCBncm91cHMsXG4gICAgICAgIC8vIGFuZCB3aWRlbiB0aGUgZ3JvdXAgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgICBmdW5jdGlvbiBncm91cEluY3JlbWVudCgpIHtcbiAgICAgICAgICBpZihpdGVyYWJsZSl7XG4gICAgICAgICAgICBrKytcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKytrID09PSBncm91cENhcGFjaXR5KSB7XG4gICAgICAgICAgICByZUluZGV4ID0geGZpbHRlckFycmF5LmFycmF5V2lkZW4ocmVJbmRleCwgZ3JvdXBXaWR0aCA8PD0gMSk7XG4gICAgICAgICAgICBncm91cEluZGV4ID0geGZpbHRlckFycmF5LmFycmF5V2lkZW4oZ3JvdXBJbmRleCwgZ3JvdXBXaWR0aCk7XG4gICAgICAgICAgICBncm91cENhcGFjaXR5ID0gY3Jvc3NmaWx0ZXJfY2FwYWNpdHkoZ3JvdXBXaWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZURhdGEoKSB7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgIHZhciBvbGRLID0gayxcbiAgICAgICAgICAgICAgb2xkR3JvdXBzID0gZ3JvdXBzLFxuICAgICAgICAgICAgICBzZWVuR3JvdXBzID0gY3Jvc3NmaWx0ZXJfaW5kZXgob2xkSywgb2xkSyk7XG5cbiAgICAgICAgICAvLyBGaWx0ZXIgb3V0IG5vbi1tYXRjaGVzIGJ5IGNvcHlpbmcgbWF0Y2hpbmcgZ3JvdXAgaW5kZXggZW50cmllcyB0b1xuICAgICAgICAgIC8vIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzLnplcm8oaSkpIHtcbiAgICAgICAgICAgICAgc2Vlbkdyb3Vwc1tncm91cEluZGV4W2pdID0gZ3JvdXBJbmRleFtpXV0gPSAxO1xuICAgICAgICAgICAgICArK2o7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVhc3NlbWJsZSBncm91cHMgaW5jbHVkaW5nIG9ubHkgdGhvc2UgZ3JvdXBzIHRoYXQgd2VyZSByZWZlcnJlZFxuICAgICAgICAgIC8vIHRvIGJ5IG1hdGNoaW5nIGdyb3VwIGluZGV4IGVudHJpZXMuICBOb3RlIHRoZSBuZXcgZ3JvdXAgaW5kZXggaW5cbiAgICAgICAgICAvLyBzZWVuR3JvdXBzLlxuICAgICAgICAgIGdyb3VwcyA9IFtdLCBrID0gMDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2xkSzsgKytpKSB7XG4gICAgICAgICAgICBpZiAoc2Vlbkdyb3Vwc1tpXSkge1xuICAgICAgICAgICAgICBzZWVuR3JvdXBzW2ldID0gaysrO1xuICAgICAgICAgICAgICBncm91cHMucHVzaChvbGRHcm91cHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgICAgLy8gUmVpbmRleCB0aGUgZ3JvdXAgaW5kZXggdXNpbmcgc2Vlbkdyb3VwcyB0byBmaW5kIHRoZSBuZXcgaW5kZXguXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGo7ICsraSkgZ3JvdXBJbmRleFtpXSA9IHNlZW5Hcm91cHNbZ3JvdXBJbmRleFtpXV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyb3VwSW5kZXggPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKV0gPSBrID4gMVxuICAgICAgICAgICAgICA/IChyZXNldCA9IHJlc2V0TWFueSwgdXBkYXRlID0gdXBkYXRlTWFueSlcbiAgICAgICAgICAgICAgOiBrID09PSAxID8gKHJlc2V0ID0gcmVzZXRPbmUsIHVwZGF0ZSA9IHVwZGF0ZU9uZSlcbiAgICAgICAgICAgICAgOiByZXNldCA9IHVwZGF0ZSA9IGNyb3NzZmlsdGVyX251bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoayA9PT0gMSkge1xuICAgICAgICAgIGlmIChncm91cEFsbCkgcmV0dXJuO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSBpZiAoIWZpbHRlcnMuemVybyhpKSkgcmV0dXJuO1xuICAgICAgICAgIGdyb3VwcyA9IFtdLCBrID0gMDtcbiAgICAgICAgICBmaWx0ZXJMaXN0ZW5lcnNbZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKV0gPVxuICAgICAgICAgIHVwZGF0ZSA9IHJlc2V0ID0gY3Jvc3NmaWx0ZXJfbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgZ3JlYXRlciB0aGFuIDEuXG4gICAgICAvLyBub3RGaWx0ZXIgaW5kaWNhdGVzIGEgY3Jvc3NmaWx0ZXIuYWRkL3JlbW92ZSBvcGVyYXRpb24uXG4gICAgICBmdW5jdGlvbiB1cGRhdGVNYW55KGZpbHRlck9uZSwgZmlsdGVyT2Zmc2V0LCBhZGRlZCwgcmVtb3ZlZCwgbm90RmlsdGVyKSB7XG5cbiAgICAgICAgaWYgKChmaWx0ZXJPbmUgPT09IG9uZSAmJiBmaWx0ZXJPZmZzZXQgPT09IG9mZnNldCkgfHwgcmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIGc7XG5cbiAgICAgICAgaWYoaXRlcmFibGUpe1xuICAgICAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgICAgIGZvciAoaSA9IDAsIG4gPSBhZGRlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLnplcm9FeGNlcHQoayA9IGFkZGVkW2ldLCBvZmZzZXQsIHplcm8pKSB7XG4gICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBncm91cEluZGV4W2tdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2tdW2pdXTtcbiAgICAgICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFba10sIGZhbHNlLCBqKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICAgICAgZm9yIChpID0gMCwgbiA9IHJlbW92ZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVycy5vbmx5RXhjZXB0KGsgPSByZW1vdmVkW2ldLCBvZmZzZXQsIHplcm8sIGZpbHRlck9mZnNldCwgZmlsdGVyT25lKSkge1xuICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ3JvdXBJbmRleFtrXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtrXVtqXV07XG4gICAgICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZVJlbW92ZShnLnZhbHVlLCBkYXRhW2tdLCBub3RGaWx0ZXIsIGopO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgYWRkZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgaWYgKGZpbHRlcnMuemVyb0V4Y2VwdChrID0gYWRkZWRbaV0sIG9mZnNldCwgemVybykpIHtcbiAgICAgICAgICAgIGcgPSBncm91cHNbZ3JvdXBJbmRleFtrXV07XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFba10sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlbW92ZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoZmlsdGVycy5vbmx5RXhjZXB0KGsgPSByZW1vdmVkW2ldLCBvZmZzZXQsIHplcm8sIGZpbHRlck9mZnNldCwgZmlsdGVyT25lKSkge1xuICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2tdXTtcbiAgICAgICAgICAgIGcudmFsdWUgPSByZWR1Y2VSZW1vdmUoZy52YWx1ZSwgZGF0YVtrXSwgbm90RmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVkdWNlcyB0aGUgc3BlY2lmaWVkIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQgcmVjb3Jkcy5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gdGhlIGNhcmRpbmFsaXR5IGlzIDEuXG4gICAgICAvLyBub3RGaWx0ZXIgaW5kaWNhdGVzIGEgY3Jvc3NmaWx0ZXIuYWRkL3JlbW92ZSBvcGVyYXRpb24uXG4gICAgICBmdW5jdGlvbiB1cGRhdGVPbmUoZmlsdGVyT25lLCBmaWx0ZXJPZmZzZXQsIGFkZGVkLCByZW1vdmVkLCBub3RGaWx0ZXIpIHtcbiAgICAgICAgaWYgKChmaWx0ZXJPbmUgPT09IG9uZSAmJiBmaWx0ZXJPZmZzZXQgPT09IG9mZnNldCkgfHwgcmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgZyA9IGdyb3Vwc1swXTtcblxuICAgICAgICAvLyBBZGQgdGhlIGFkZGVkIHZhbHVlcy5cbiAgICAgICAgZm9yIChpID0gMCwgbiA9IGFkZGVkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIGlmIChmaWx0ZXJzLnplcm9FeGNlcHQoayA9IGFkZGVkW2ldLCBvZmZzZXQsIHplcm8pKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFba10sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlbW92ZWQgdmFsdWVzLlxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoZmlsdGVycy5vbmx5RXhjZXB0KGsgPSByZW1vdmVkW2ldLCBvZmZzZXQsIHplcm8sIGZpbHRlck9mZnNldCwgZmlsdGVyT25lKSkge1xuICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZVJlbW92ZShnLnZhbHVlLCBkYXRhW2tdLCBub3RGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWNvbXB1dGVzIHRoZSBncm91cCByZWR1Y2UgdmFsdWVzIGZyb20gc2NyYXRjaC5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gdGhlIGNhcmRpbmFsaXR5IGlzIGdyZWF0ZXIgdGhhbiAxLlxuICAgICAgZnVuY3Rpb24gcmVzZXRNYW55KCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBnO1xuXG4gICAgICAgIC8vIFJlc2V0IGFsbCBncm91cCB2YWx1ZXMuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICBncm91cHNbaV0udmFsdWUgPSByZWR1Y2VJbml0aWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBhZGQgYWxsIHJlY29yZHMgYW5kIHRoZW4gcmVtb3ZlIGZpbHRlcmVkIHJlY29yZHMgc28gdGhhdCByZWR1Y2Vyc1xuICAgICAgICAvLyBjYW4gYnVpbGQgYW4gJ3VuZmlsdGVyZWQnIHZpZXcgZXZlbiBpZiB0aGVyZSBhcmUgYWxyZWFkeSBmaWx0ZXJzIGluXG4gICAgICAgIC8vIHBsYWNlIG9uIG90aGVyIGRpbWVuc2lvbnMuXG4gICAgICAgIGlmKGl0ZXJhYmxlKXtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ3JvdXBJbmRleFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhbaV1bal1dO1xuICAgICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFbaV0sIHRydWUsIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcnMuemVyb0V4Y2VwdChpLCBvZmZzZXQsIHplcm8pKSB7XG4gICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBncm91cEluZGV4W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2ldW2pdXTtcbiAgICAgICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFbaV0sIGZhbHNlLCBqKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgZyA9IGdyb3Vwc1tncm91cEluZGV4W2ldXTtcbiAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlQWRkKGcudmFsdWUsIGRhdGFbaV0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoIWZpbHRlcnMuemVyb0V4Y2VwdChpLCBvZmZzZXQsIHplcm8pKSB7XG4gICAgICAgICAgICBnID0gZ3JvdXBzW2dyb3VwSW5kZXhbaV1dO1xuICAgICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZVJlbW92ZShnLnZhbHVlLCBkYXRhW2ldLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlY29tcHV0ZXMgdGhlIGdyb3VwIHJlZHVjZSB2YWx1ZXMgZnJvbSBzY3JhdGNoLlxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgY2FyZGluYWxpdHkgaXMgMS5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0T25lKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGcgPSBncm91cHNbMF07XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIHNpbmdsZXRvbiBncm91cCB2YWx1ZXMuXG4gICAgICAgIGcudmFsdWUgPSByZWR1Y2VJbml0aWFsKCk7XG5cbiAgICAgICAgLy8gV2UgYWRkIGFsbCByZWNvcmRzIGFuZCB0aGVuIHJlbW92ZSBmaWx0ZXJlZCByZWNvcmRzIHNvIHRoYXQgcmVkdWNlcnNcbiAgICAgICAgLy8gY2FuIGJ1aWxkIGFuICd1bmZpbHRlcmVkJyB2aWV3IGV2ZW4gaWYgdGhlcmUgYXJlIGFscmVhZHkgZmlsdGVycyBpblxuICAgICAgICAvLyBwbGFjZSBvbiBvdGhlciBkaW1lbnNpb25zLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgZy52YWx1ZSA9IHJlZHVjZUFkZChnLnZhbHVlLCBkYXRhW2ldLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBpZiAoIWZpbHRlcnMuemVyb0V4Y2VwdChpLCBvZmZzZXQsIHplcm8pKSB7XG4gICAgICAgICAgICBnLnZhbHVlID0gcmVkdWNlUmVtb3ZlKGcudmFsdWUsIGRhdGFbaV0sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJucyB0aGUgYXJyYXkgb2YgZ3JvdXAgdmFsdWVzLCBpbiB0aGUgZGltZW5zaW9uJ3MgbmF0dXJhbCBvcmRlci5cbiAgICAgIGZ1bmN0aW9uIGFsbCgpIHtcbiAgICAgICAgaWYgKHJlc2V0TmVlZGVkKSByZXNldCgpLCByZXNldE5lZWRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIGEgbmV3IGFycmF5IGNvbnRhaW5pbmcgdGhlIHRvcCBLIGdyb3VwIHZhbHVlcywgaW4gcmVkdWNlIG9yZGVyLlxuICAgICAgZnVuY3Rpb24gdG9wKGspIHtcbiAgICAgICAgdmFyIHRvcCA9IHNlbGVjdChhbGwoKSwgMCwgZ3JvdXBzLmxlbmd0aCwgayk7XG4gICAgICAgIHJldHVybiBoZWFwLnNvcnQodG9wLCAwLCB0b3AubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0cyB0aGUgcmVkdWNlIGJlaGF2aW9yIGZvciB0aGlzIGdyb3VwIHRvIHVzZSB0aGUgc3BlY2lmaWVkIGZ1bmN0aW9ucy5cbiAgICAgIC8vIFRoaXMgbWV0aG9kIGxhemlseSByZWNvbXB1dGVzIHRoZSByZWR1Y2UgdmFsdWVzLCB3YWl0aW5nIHVudGlsIG5lZWRlZC5cbiAgICAgIGZ1bmN0aW9uIHJlZHVjZShhZGQsIHJlbW92ZSwgaW5pdGlhbCkge1xuICAgICAgICByZWR1Y2VBZGQgPSBhZGQ7XG4gICAgICAgIHJlZHVjZVJlbW92ZSA9IHJlbW92ZTtcbiAgICAgICAgcmVkdWNlSW5pdGlhbCA9IGluaXRpYWw7XG4gICAgICAgIHJlc2V0TmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgY291bnQuXG4gICAgICBmdW5jdGlvbiByZWR1Y2VDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHJlZHVjZSh4ZmlsdGVyUmVkdWNlLnJlZHVjZUluY3JlbWVudCwgeGZpbHRlclJlZHVjZS5yZWR1Y2VEZWNyZW1lbnQsIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgc3VtKHZhbHVlKS5cbiAgICAgIGZ1bmN0aW9uIHJlZHVjZVN1bSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVkdWNlKHhmaWx0ZXJSZWR1Y2UucmVkdWNlQWRkKHZhbHVlKSwgeGZpbHRlclJlZHVjZS5yZWR1Y2VTdWJ0cmFjdCh2YWx1ZSksIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRoZSByZWR1Y2Ugb3JkZXIsIHVzaW5nIHRoZSBzcGVjaWZpZWQgYWNjZXNzb3IuXG4gICAgICBmdW5jdGlvbiBvcmRlcih2YWx1ZSkge1xuICAgICAgICBzZWxlY3QgPSB4ZmlsdGVySGVhcHNlbGVjdC5ieSh2YWx1ZU9mKTtcbiAgICAgICAgaGVhcCA9IHhmaWx0ZXJIZWFwLmJ5KHZhbHVlT2YpO1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZU9mKGQpIHsgcmV0dXJuIHZhbHVlKGQudmFsdWUpOyB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIG5hdHVyYWwgb3JkZXJpbmcgYnkgcmVkdWNlIHZhbHVlLlxuICAgICAgZnVuY3Rpb24gb3JkZXJOYXR1cmFsKCkge1xuICAgICAgICByZXR1cm4gb3JkZXIoY3Jvc3NmaWx0ZXJfaWRlbnRpdHkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBjYXJkaW5hbGl0eSBvZiB0aGlzIGdyb3VwLCBpcnJlc3BlY3RpdmUgb2YgYW55IGZpbHRlcnMuXG4gICAgICBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGdyb3VwIGFuZCBhc3NvY2lhdGVkIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgIHZhciBpID0gZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YodXBkYXRlKTtcbiAgICAgICAgaWYgKGkgPj0gMCkgZmlsdGVyTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgaSA9IGluZGV4TGlzdGVuZXJzLmluZGV4T2YoYWRkKTtcbiAgICAgICAgaWYgKGkgPj0gMCkgaW5kZXhMaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBpID0gcmVtb3ZlRGF0YUxpc3RlbmVycy5pbmRleE9mKHJlbW92ZURhdGEpO1xuICAgICAgICBpZiAoaSA+PSAwKSByZW1vdmVEYXRhTGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVkdWNlQ291bnQoKS5vcmRlck5hdHVyYWwoKTtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGEgc2luZ2xldG9uIGdyb3VwLlxuICAgIGZ1bmN0aW9uIGdyb3VwQWxsKCkge1xuICAgICAgdmFyIGcgPSBncm91cChjcm9zc2ZpbHRlcl9udWxsKSwgYWxsID0gZy5hbGw7XG4gICAgICBkZWxldGUgZy5hbGw7XG4gICAgICBkZWxldGUgZy50b3A7XG4gICAgICBkZWxldGUgZy5vcmRlcjtcbiAgICAgIGRlbGV0ZSBnLm9yZGVyTmF0dXJhbDtcbiAgICAgIGRlbGV0ZSBnLnNpemU7XG4gICAgICBnLnZhbHVlID0gZnVuY3Rpb24oKSB7IHJldHVybiBhbGwoKVswXS52YWx1ZTsgfTtcbiAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhpcyBkaW1lbnNpb24gYW5kIGFzc29jaWF0ZWQgZ3JvdXBzIGFuZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGRpbWVuc2lvbkdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7IGdyb3VwLmRpc3Bvc2UoKTsgfSk7XG4gICAgICB2YXIgaSA9IGRhdGFMaXN0ZW5lcnMuaW5kZXhPZihwcmVBZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID0gZGF0YUxpc3RlbmVycy5pbmRleE9mKHBvc3RBZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID0gcmVtb3ZlRGF0YUxpc3RlbmVycy5pbmRleE9mKHJlbW92ZURhdGEpO1xuICAgICAgaWYgKGkgPj0gMCkgcmVtb3ZlRGF0YUxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBmaWx0ZXJzLm1hc2tzW29mZnNldF0gJj0gemVybztcbiAgICAgIHJldHVybiBmaWx0ZXJBbGwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGltZW5zaW9uO1xuICB9XG5cbiAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGdyb3VwQWxsIG9uIGEgZHVtbXkgZGltZW5zaW9uLlxuICAvLyBUaGlzIGltcGxlbWVudGF0aW9uIGNhbiBiZSBvcHRpbWl6ZWQgc2luY2UgaXQgYWx3YXlzIGhhcyBjYXJkaW5hbGl0eSAxLlxuICBmdW5jdGlvbiBncm91cEFsbCgpIHtcbiAgICB2YXIgZ3JvdXAgPSB7XG4gICAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICAgIHJlZHVjZUNvdW50OiByZWR1Y2VDb3VudCxcbiAgICAgIHJlZHVjZVN1bTogcmVkdWNlU3VtLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZGlzcG9zZTogZGlzcG9zZSxcbiAgICAgIHJlbW92ZTogZGlzcG9zZSAvLyBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgICB9O1xuXG4gICAgdmFyIHJlZHVjZVZhbHVlLFxuICAgICAgICByZWR1Y2VBZGQsXG4gICAgICAgIHJlZHVjZVJlbW92ZSxcbiAgICAgICAgcmVkdWNlSW5pdGlhbCxcbiAgICAgICAgcmVzZXROZWVkZWQgPSB0cnVlO1xuXG4gICAgLy8gVGhlIGdyb3VwIGxpc3RlbnMgdG8gdGhlIGNyb3NzZmlsdGVyIGZvciB3aGVuIGFueSBkaW1lbnNpb24gY2hhbmdlcywgc29cbiAgICAvLyB0aGF0IGl0IGNhbiB1cGRhdGUgdGhlIHJlZHVjZSB2YWx1ZS4gSXQgbXVzdCBhbHNvIGxpc3RlbiB0byB0aGUgcGFyZW50XG4gICAgLy8gZGltZW5zaW9uIGZvciB3aGVuIGRhdGEgaXMgYWRkZWQuXG4gICAgZmlsdGVyTGlzdGVuZXJzLnB1c2godXBkYXRlKTtcbiAgICBkYXRhTGlzdGVuZXJzLnB1c2goYWRkKTtcblxuICAgIC8vIEZvciBjb25zaXN0ZW5jeTsgYWN0dWFsbHkgYSBuby1vcCBzaW5jZSByZXNldE5lZWRlZCBpcyB0cnVlLlxuICAgIGFkZChkYXRhLCAwLCBuKTtcblxuICAgIC8vIEluY29ycG9yYXRlcyB0aGUgc3BlY2lmaWVkIG5ldyB2YWx1ZXMgaW50byB0aGlzIGdyb3VwLlxuICAgIGZ1bmN0aW9uIGFkZChuZXdEYXRhLCBuMCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmIChyZXNldE5lZWRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBDeWNsZSB0aHJvdWdoIGFsbCB0aGUgdmFsdWVzLlxuICAgICAgZm9yIChpID0gbjA7IGkgPCBuOyArK2kpIHtcblxuICAgICAgICAvLyBBZGQgYWxsIHZhbHVlcyBhbGwgdGhlIHRpbWUuXG4gICAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlQWRkKHJlZHVjZVZhbHVlLCBkYXRhW2ldLCB0cnVlKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHZhbHVlIGlmIGZpbHRlcmVkLlxuICAgICAgICBpZiAoIWZpbHRlcnMuemVybyhpKSkge1xuICAgICAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlUmVtb3ZlKHJlZHVjZVZhbHVlLCBkYXRhW2ldLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWR1Y2VzIHRoZSBzcGVjaWZpZWQgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCByZWNvcmRzLlxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmaWx0ZXJPbmUsIGZpbHRlck9mZnNldCwgYWRkZWQsIHJlbW92ZWQsIG5vdEZpbHRlcikge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgayxcbiAgICAgICAgICBuO1xuXG4gICAgICBpZiAocmVzZXROZWVkZWQpIHJldHVybjtcblxuICAgICAgLy8gQWRkIHRoZSBhZGRlZCB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSAwLCBuID0gYWRkZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmIChmaWx0ZXJzLnplcm8oayA9IGFkZGVkW2ldKSkge1xuICAgICAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlQWRkKHJlZHVjZVZhbHVlLCBkYXRhW2tdLCBub3RGaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVtb3ZlZCB2YWx1ZXMuXG4gICAgICBmb3IgKGkgPSAwLCBuID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGZpbHRlcnMub25seShrID0gcmVtb3ZlZFtpXSwgZmlsdGVyT2Zmc2V0LCBmaWx0ZXJPbmUpKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VSZW1vdmUocmVkdWNlVmFsdWUsIGRhdGFba10sIG5vdEZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWNvbXB1dGVzIHRoZSBncm91cCByZWR1Y2UgdmFsdWUgZnJvbSBzY3JhdGNoLlxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIHJlZHVjZVZhbHVlID0gcmVkdWNlSW5pdGlhbCgpO1xuXG4gICAgICAvLyBDeWNsZSB0aHJvdWdoIGFsbCB0aGUgdmFsdWVzLlxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuXG4gICAgICAgIC8vIEFkZCBhbGwgdmFsdWVzIGFsbCB0aGUgdGltZS5cbiAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VBZGQocmVkdWNlVmFsdWUsIGRhdGFbaV0sIHRydWUpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdmFsdWUgaWYgaXQgaXMgZmlsdGVyZWQuXG4gICAgICAgIGlmICghZmlsdGVycy56ZXJvKGkpKSB7XG4gICAgICAgICAgcmVkdWNlVmFsdWUgPSByZWR1Y2VSZW1vdmUocmVkdWNlVmFsdWUsIGRhdGFbaV0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlZHVjZSBiZWhhdmlvciBmb3IgdGhpcyBncm91cCB0byB1c2UgdGhlIHNwZWNpZmllZCBmdW5jdGlvbnMuXG4gICAgLy8gVGhpcyBtZXRob2QgbGF6aWx5IHJlY29tcHV0ZXMgdGhlIHJlZHVjZSB2YWx1ZSwgd2FpdGluZyB1bnRpbCBuZWVkZWQuXG4gICAgZnVuY3Rpb24gcmVkdWNlKGFkZCwgcmVtb3ZlLCBpbml0aWFsKSB7XG4gICAgICByZWR1Y2VBZGQgPSBhZGQ7XG4gICAgICByZWR1Y2VSZW1vdmUgPSByZW1vdmU7XG4gICAgICByZWR1Y2VJbml0aWFsID0gaW5pdGlhbDtcbiAgICAgIHJlc2V0TmVlZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICAvLyBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgcmVkdWNpbmcgYnkgY291bnQuXG4gICAgZnVuY3Rpb24gcmVkdWNlQ291bnQoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKHhmaWx0ZXJSZWR1Y2UucmVkdWNlSW5jcmVtZW50LCB4ZmlsdGVyUmVkdWNlLnJlZHVjZURlY3JlbWVudCwgY3Jvc3NmaWx0ZXJfemVybyk7XG4gICAgfVxuXG4gICAgLy8gQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIHJlZHVjaW5nIGJ5IHN1bSh2YWx1ZSkuXG4gICAgZnVuY3Rpb24gcmVkdWNlU3VtKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKHhmaWx0ZXJSZWR1Y2UucmVkdWNlQWRkKHZhbHVlKSwgeGZpbHRlclJlZHVjZS5yZWR1Y2VTdWJ0cmFjdCh2YWx1ZSksIGNyb3NzZmlsdGVyX3plcm8pO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGNvbXB1dGVkIHJlZHVjZSB2YWx1ZS5cbiAgICBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIGlmIChyZXNldE5lZWRlZCkgcmVzZXQoKSwgcmVzZXROZWVkZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiByZWR1Y2VWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoaXMgZ3JvdXAgYW5kIGFzc29jaWF0ZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB2YXIgaSA9IGZpbHRlckxpc3RlbmVycy5pbmRleE9mKHVwZGF0ZSk7XG4gICAgICBpZiAoaSA+PSAwKSBmaWx0ZXJMaXN0ZW5lcnMuc3BsaWNlKGkpO1xuICAgICAgaSA9IGRhdGFMaXN0ZW5lcnMuaW5kZXhPZihhZGQpO1xuICAgICAgaWYgKGkgPj0gMCkgZGF0YUxpc3RlbmVycy5zcGxpY2UoaSk7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZUNvdW50KCk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGlzIGNyb3NzZmlsdGVyLCBpcnJlc3BlY3RpdmUgb2YgYW55IGZpbHRlcnMuXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIG47XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSByYXcgcm93IGRhdGEgY29udGFpbmVkIGluIHRoaXMgY3Jvc3NmaWx0ZXJcbiAgZnVuY3Rpb24gYWxsKCl7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZShjYil7XG4gICAgaWYodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIGNvbnNvbGUud2Fybignb25DaGFuZ2UgY2FsbGJhY2sgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbiEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShjYWxsYmFja3MuaW5kZXhPZihjYiksIDEpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyT25DaGFuZ2UoZXZlbnROYW1lKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gYWRkKGFyZ3VtZW50c1swXSlcbiAgICAgIDogY3Jvc3NmaWx0ZXI7XG59XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgb2Ygc2l6ZSBuLCBiaWcgZW5vdWdoIHRvIHN0b3JlIGlkcyB1cCB0byBtLlxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfaW5kZXgobiwgbSkge1xuICByZXR1cm4gKG0gPCAweDEwMVxuICAgICAgPyB4ZmlsdGVyQXJyYXkuYXJyYXk4IDogbSA8IDB4MTAwMDFcbiAgICAgID8geGZpbHRlckFycmF5LmFycmF5MTZcbiAgICAgIDogeGZpbHRlckFycmF5LmFycmF5MzIpKG4pO1xufVxuXG4vLyBDb25zdHJ1Y3RzIGEgbmV3IGFycmF5IG9mIHNpemUgbiwgd2l0aCBzZXF1ZW50aWFsIHZhbHVlcyBmcm9tIDAgdG8gbiAtIDEuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yYW5nZShuKSB7XG4gIHZhciByYW5nZSA9IGNyb3NzZmlsdGVyX2luZGV4KG4sIG4pO1xuICBmb3IgKHZhciBpID0gLTE7ICsraSA8IG47KSByYW5nZVtpXSA9IGk7XG4gIHJldHVybiByYW5nZTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfY2FwYWNpdHkodykge1xuICByZXR1cm4gdyA9PT0gOFxuICAgICAgPyAweDEwMCA6IHcgPT09IDE2XG4gICAgICA/IDB4MTAwMDBcbiAgICAgIDogMHgxMDAwMDAwMDA7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2Nyb3NzZmlsdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJmdW5jdGlvbiBjcm9zc2ZpbHRlcl9maWx0ZXJFeGFjdChiaXNlY3QsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFtiaXNlY3QubGVmdCh2YWx1ZXMsIHZhbHVlLCAwLCBuKSwgYmlzZWN0LnJpZ2h0KHZhbHVlcywgdmFsdWUsIDAsIG4pXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfZmlsdGVyUmFuZ2UoYmlzZWN0LCByYW5nZSkge1xuICB2YXIgbWluID0gcmFuZ2VbMF0sXG4gICAgICBtYXggPSByYW5nZVsxXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICByZXR1cm4gW2Jpc2VjdC5sZWZ0KHZhbHVlcywgbWluLCAwLCBuKSwgYmlzZWN0LmxlZnQodmFsdWVzLCBtYXgsIDAsIG4pXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfZmlsdGVyQWxsKHZhbHVlcykge1xuICByZXR1cm4gWzAsIHZhbHVlcy5sZW5ndGhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlsdGVyRXhhY3Q6IGNyb3NzZmlsdGVyX2ZpbHRlckV4YWN0LFxuICBmaWx0ZXJSYW5nZTogY3Jvc3NmaWx0ZXJfZmlsdGVyUmFuZ2UsXG4gIGZpbHRlckFsbDogY3Jvc3NmaWx0ZXJfZmlsdGVyQWxsXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9maWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlcl9pZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcbnZhciB4RmlsdGVySGVhcCA9IHJlcXVpcmUoJy4vaGVhcCcpO1xuXG5mdW5jdGlvbiBoZWFwc2VsZWN0X2J5KGYpIHtcbiAgdmFyIGhlYXAgPSB4RmlsdGVySGVhcC5ieShmKTtcblxuICAvLyBSZXR1cm5zIGEgbmV3IGFycmF5IGNvbnRhaW5pbmcgdGhlIHRvcCBrIGVsZW1lbnRzIGluIHRoZSBhcnJheSBhW2xvOmhpXS5cbiAgLy8gVGhlIHJldHVybmVkIGFycmF5IGlzIG5vdCBzb3J0ZWQsIGJ1dCBtYWludGFpbnMgdGhlIGhlYXAgcHJvcGVydHkuIElmIGsgaXNcbiAgLy8gZ3JlYXRlciB0aGFuIGhpIC0gbG8sIHRoZW4gZmV3ZXIgdGhhbiBrIGVsZW1lbnRzIHdpbGwgYmUgcmV0dXJuZWQuIFRoZVxuICAvLyBvcmRlciBvZiBlbGVtZW50cyBpbiBhIGlzIHVuY2hhbmdlZCBieSB0aGlzIG9wZXJhdGlvbi5cbiAgZnVuY3Rpb24gaGVhcHNlbGVjdChhLCBsbywgaGksIGspIHtcbiAgICB2YXIgcXVldWUgPSBuZXcgQXJyYXkoayA9IE1hdGgubWluKGhpIC0gbG8sIGspKSxcbiAgICAgICAgbWluLFxuICAgICAgICBpLFxuICAgICAgICB4LFxuICAgICAgICBkO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGs7ICsraSkgcXVldWVbaV0gPSBhW2xvKytdO1xuICAgIGhlYXAocXVldWUsIDAsIGspO1xuXG4gICAgaWYgKGxvIDwgaGkpIHtcbiAgICAgIG1pbiA9IGYocXVldWVbMF0pO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoeCA9IGYoZCA9IGFbbG9dKSA+IG1pbikge1xuICAgICAgICAgIHF1ZXVlWzBdID0gZDtcbiAgICAgICAgICBtaW4gPSBmKGhlYXAocXVldWUsIDAsIGspWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoKytsbyA8IGhpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVldWU7XG4gIH1cblxuICByZXR1cm4gaGVhcHNlbGVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWFwc2VsZWN0X2J5KGNyb3NzZmlsdGVyX2lkZW50aXR5KTtcbm1vZHVsZS5leHBvcnRzLmJ5ID0gaGVhcHNlbGVjdF9ieTsgLy8gYXNzaWduIHRoZSByYXcgZnVuY3Rpb24gdG8gdGhlIGV4cG9ydCBhcyB3ZWxsXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL2hlYXBzZWxlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIGNyb3NzZmlsdGVyX251bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyb3NzZmlsdGVyX251bGw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL251bGwuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIGluZGV4LCBkZWVwKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gaW5kZXgubGVuZ3RoLCBjb3B5ID0gZGVlcCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKSA6IG5ldyBBcnJheShuKTsgaSA8IG47ICsraSkge1xuICAgIGNvcHlbaV0gPSBhcnJheVtpbmRleFtpXV07XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGVybXV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvcGVybXV0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIHhGaWx0ZXJJbnNlcnRpb25zb3J0ID0gcmVxdWlyZSgnLi9pbnNlcnRpb25zb3J0Jyk7XG5cbi8vIEFsZ29yaXRobSBkZXNpZ25lZCBieSBWbGFkaW1pciBZYXJvc2xhdnNraXkuXG4vLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiB0aGUgRGFydCBwcm9qZWN0OyBzZWUgTk9USUNFIGFuZCBBVVRIT1JTIGZvciBkZXRhaWxzLlxuXG5mdW5jdGlvbiBxdWlja3NvcnRfYnkoZikge1xuICB2YXIgaW5zZXJ0aW9uc29ydCA9IHhGaWx0ZXJJbnNlcnRpb25zb3J0LmJ5KGYpO1xuXG4gIGZ1bmN0aW9uIHNvcnQoYSwgbG8sIGhpKSB7XG4gICAgcmV0dXJuIChoaSAtIGxvIDwgcXVpY2tzb3J0X3NpemVUaHJlc2hvbGRcbiAgICAgICAgPyBpbnNlcnRpb25zb3J0XG4gICAgICAgIDogcXVpY2tzb3J0KShhLCBsbywgaGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tzb3J0KGEsIGxvLCBoaSkge1xuICAgIC8vIENvbXB1dGUgdGhlIHR3byBwaXZvdHMgYnkgbG9va2luZyBhdCA1IGVsZW1lbnRzLlxuICAgIHZhciBzaXh0aCA9IChoaSAtIGxvKSAvIDYgfCAwLFxuICAgICAgICBpMSA9IGxvICsgc2l4dGgsXG4gICAgICAgIGk1ID0gaGkgLSAxIC0gc2l4dGgsXG4gICAgICAgIGkzID0gbG8gKyBoaSAtIDEgPj4gMSwgIC8vIFRoZSBtaWRwb2ludC5cbiAgICAgICAgaTIgPSBpMyAtIHNpeHRoLFxuICAgICAgICBpNCA9IGkzICsgc2l4dGg7XG5cbiAgICB2YXIgZTEgPSBhW2kxXSwgeDEgPSBmKGUxKSxcbiAgICAgICAgZTIgPSBhW2kyXSwgeDIgPSBmKGUyKSxcbiAgICAgICAgZTMgPSBhW2kzXSwgeDMgPSBmKGUzKSxcbiAgICAgICAgZTQgPSBhW2k0XSwgeDQgPSBmKGU0KSxcbiAgICAgICAgZTUgPSBhW2k1XSwgeDUgPSBmKGU1KTtcblxuICAgIHZhciB0O1xuXG4gICAgLy8gU29ydCB0aGUgc2VsZWN0ZWQgNSBlbGVtZW50cyB1c2luZyBhIHNvcnRpbmcgbmV0d29yay5cbiAgICBpZiAoeDEgPiB4MikgdCA9IGUxLCBlMSA9IGUyLCBlMiA9IHQsIHQgPSB4MSwgeDEgPSB4MiwgeDIgPSB0O1xuICAgIGlmICh4NCA+IHg1KSB0ID0gZTQsIGU0ID0gZTUsIGU1ID0gdCwgdCA9IHg0LCB4NCA9IHg1LCB4NSA9IHQ7XG4gICAgaWYgKHgxID4geDMpIHQgPSBlMSwgZTEgPSBlMywgZTMgPSB0LCB0ID0geDEsIHgxID0geDMsIHgzID0gdDtcbiAgICBpZiAoeDIgPiB4MykgdCA9IGUyLCBlMiA9IGUzLCBlMyA9IHQsIHQgPSB4MiwgeDIgPSB4MywgeDMgPSB0O1xuICAgIGlmICh4MSA+IHg0KSB0ID0gZTEsIGUxID0gZTQsIGU0ID0gdCwgdCA9IHgxLCB4MSA9IHg0LCB4NCA9IHQ7XG4gICAgaWYgKHgzID4geDQpIHQgPSBlMywgZTMgPSBlNCwgZTQgPSB0LCB0ID0geDMsIHgzID0geDQsIHg0ID0gdDtcbiAgICBpZiAoeDIgPiB4NSkgdCA9IGUyLCBlMiA9IGU1LCBlNSA9IHQsIHQgPSB4MiwgeDIgPSB4NSwgeDUgPSB0O1xuICAgIGlmICh4MiA+IHgzKSB0ID0gZTIsIGUyID0gZTMsIGUzID0gdCwgdCA9IHgyLCB4MiA9IHgzLCB4MyA9IHQ7XG4gICAgaWYgKHg0ID4geDUpIHQgPSBlNCwgZTQgPSBlNSwgZTUgPSB0LCB0ID0geDQsIHg0ID0geDUsIHg1ID0gdDtcblxuICAgIHZhciBwaXZvdDEgPSBlMiwgcGl2b3RWYWx1ZTEgPSB4MixcbiAgICAgICAgcGl2b3QyID0gZTQsIHBpdm90VmFsdWUyID0geDQ7XG5cbiAgICAvLyBlMiBhbmQgZTQgaGF2ZSBiZWVuIHNhdmVkIGluIHRoZSBwaXZvdCB2YXJpYWJsZXMuIFRoZXkgd2lsbCBiZSB3cml0dGVuXG4gICAgLy8gYmFjaywgb25jZSB0aGUgcGFydGl0aW9uaW5nIGlzIGZpbmlzaGVkLlxuICAgIGFbaTFdID0gZTE7XG4gICAgYVtpMl0gPSBhW2xvXTtcbiAgICBhW2kzXSA9IGUzO1xuICAgIGFbaTRdID0gYVtoaSAtIDFdO1xuICAgIGFbaTVdID0gZTU7XG5cbiAgICB2YXIgbGVzcyA9IGxvICsgMSwgICAvLyBGaXJzdCBlbGVtZW50IGluIHRoZSBtaWRkbGUgcGFydGl0aW9uLlxuICAgICAgICBncmVhdCA9IGhpIC0gMjsgIC8vIExhc3QgZWxlbWVudCBpbiB0aGUgbWlkZGxlIHBhcnRpdGlvbi5cblxuICAgIC8vIE5vdGUgdGhhdCBmb3IgdmFsdWUgY29tcGFyaXNvbiwgPCwgPD0sID49IGFuZCA+IGNvZXJjZSB0byBhIHByaW1pdGl2ZSB2aWFcbiAgICAvLyBPYmplY3QucHJvdG90eXBlLnZhbHVlT2Y7ID09IGFuZCA9PT0gZG8gbm90LCBzbyBpbiBvcmRlciB0byBiZSBjb25zaXN0ZW50XG4gICAgLy8gd2l0aCBuYXR1cmFsIG9yZGVyIChzdWNoIGFzIGZvciBEYXRlIG9iamVjdHMpLCB3ZSBtdXN0IGRvIHR3byBjb21wYXJlcy5cbiAgICB2YXIgcGl2b3RzRXF1YWwgPSBwaXZvdFZhbHVlMSA8PSBwaXZvdFZhbHVlMiAmJiBwaXZvdFZhbHVlMSA+PSBwaXZvdFZhbHVlMjtcbiAgICBpZiAocGl2b3RzRXF1YWwpIHtcblxuICAgICAgLy8gRGVnZW5lcmF0ZWQgY2FzZSB3aGVyZSB0aGUgcGFydGl0aW9uaW5nIGJlY29tZXMgYSBkdXRjaCBuYXRpb25hbCBmbGFnXG4gICAgICAvLyBwcm9ibGVtLlxuICAgICAgLy9cbiAgICAgIC8vIFsgfCAgPCBwaXZvdCAgfCA9PSBwaXZvdCB8IHVucGFydGl0aW9uZWQgfCA+IHBpdm90ICB8IF1cbiAgICAgIC8vICBeICAgICAgICAgICAgIF4gICAgICAgICAgXiAgICAgICAgICAgICBeICAgICAgICAgICAgXlxuICAgICAgLy8gbGVmdCAgICAgICAgIGxlc3MgICAgICAgICBrICAgICAgICAgICBncmVhdCAgICAgICAgIHJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYVtsZWZ0XSBhbmQgYVtyaWdodF0gYXJlIHVuZGVmaW5lZCBhbmQgYXJlIGZpbGxlZCBhZnRlciB0aGVcbiAgICAgIC8vIHBhcnRpdGlvbmluZy5cbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxKSBmb3IgeCBpbiBdbGVmdCwgbGVzc1sgOiB4IDwgcGl2b3QuXG4gICAgICAvLyAgIDIpIGZvciB4IGluIFtsZXNzLCBrWyA6IHggPT0gcGl2b3QuXG4gICAgICAvLyAgIDMpIGZvciB4IGluIF1ncmVhdCwgcmlnaHRbIDogeCA+IHBpdm90LlxuICAgICAgZm9yICh2YXIgayA9IGxlc3M7IGsgPD0gZ3JlYXQ7ICsraykge1xuICAgICAgICB2YXIgZWsgPSBhW2tdLCB4ayA9IGYoZWspO1xuICAgICAgICBpZiAoeGsgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgIGlmIChrICE9PSBsZXNzKSB7XG4gICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgIGFbbGVzc10gPSBlaztcbiAgICAgICAgICB9XG4gICAgICAgICAgKytsZXNzO1xuICAgICAgICB9IGVsc2UgaWYgKHhrID4gcGl2b3RWYWx1ZTEpIHtcblxuICAgICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVsZW1lbnQgPD0gcGl2b3QgaW4gdGhlIHJhbmdlIFtrIC0gMSwgZ3JlYXRdIGFuZFxuICAgICAgICAgIC8vIHB1dCBbOmVrOl0gdGhlcmUuIFdlIGtub3cgdGhhdCBzdWNoIGFuIGVsZW1lbnQgbXVzdCBleGlzdDpcbiAgICAgICAgICAvLyBXaGVuIGsgPT0gbGVzcywgdGhlbiBlbDMgKHdoaWNoIGlzIGVxdWFsIHRvIHBpdm90KSBsaWVzIGluIHRoZVxuICAgICAgICAgIC8vIGludGVydmFsLiBPdGhlcndpc2UgYVtrIC0gMV0gPT0gcGl2b3QgYW5kIHRoZSBzZWFyY2ggc3RvcHMgYXQgay0xLlxuICAgICAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGUgbGF0dGVyIGNhc2UgaW52YXJpYW50IDIgd2lsbCBiZSB2aW9sYXRlZCBmb3IgYVxuICAgICAgICAgIC8vIHNob3J0IGFtb3VudCBvZiB0aW1lLiBUaGUgaW52YXJpYW50IHdpbGwgYmUgcmVzdG9yZWQgd2hlbiB0aGVcbiAgICAgICAgICAvLyBwaXZvdHMgYXJlIHB1dCBpbnRvIHRoZWlyIGZpbmFsIHBvc2l0aW9ucy5cbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKTtcbiAgICAgICAgICAgIGlmIChncmVhdFZhbHVlID4gcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBsb2NhdGlvbiBpbiB0aGUgd2hpbGUtbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gaXMgc3RhcnRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdyZWF0VmFsdWUgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgICAgICAvLyBUcmlwbGUgZXhjaGFuZ2UuXG4gICAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgICBhW2xlc3MrK10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFba10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAvLyBOb3RlOiBpZiBncmVhdCA8IGsgdGhlbiB3ZSB3aWxsIGV4aXQgdGhlIG91dGVyIGxvb3AgYW5kIGZpeFxuICAgICAgICAgICAgICAvLyBpbnZhcmlhbnQgMiAod2hpY2ggd2UganVzdCB2aW9sYXRlZCkuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFdlIHBhcnRpdGlvbiB0aGUgbGlzdCBpbnRvIHRocmVlIHBhcnRzOlxuICAgICAgLy8gIDEuIDwgcGl2b3QxXG4gICAgICAvLyAgMi4gPj0gcGl2b3QxICYmIDw9IHBpdm90MlxuICAgICAgLy8gIDMuID4gcGl2b3QyXG4gICAgICAvL1xuICAgICAgLy8gRHVyaW5nIHRoZSBsb29wIHdlIGhhdmU6XG4gICAgICAvLyBbIHwgPCBwaXZvdDEgfCA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyIHwgdW5wYXJ0aXRpb25lZCAgfCA+IHBpdm90MiAgfCBdXG4gICAgICAvLyAgXiAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgICBeICAgICAgICAgICAgIF5cbiAgICAgIC8vIGxlZnQgICAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICAgayAgICAgICAgICAgICAgZ3JlYXQgICAgICAgIHJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYVtsZWZ0XSBhbmQgYVtyaWdodF0gYXJlIHVuZGVmaW5lZCBhbmQgYXJlIGZpbGxlZCBhZnRlciB0aGVcbiAgICAgIC8vIHBhcnRpdGlvbmluZy5cbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxLiBmb3IgeCBpbiBdbGVmdCwgbGVzc1sgOiB4IDwgcGl2b3QxXG4gICAgICAvLyAgIDIuIGZvciB4IGluIFtsZXNzLCBrWyA6IHBpdm90MSA8PSB4ICYmIHggPD0gcGl2b3QyXG4gICAgICAvLyAgIDMuIGZvciB4IGluIF1ncmVhdCwgcmlnaHRbIDogeCA+IHBpdm90MlxuICAgICAgZm9yICh2YXIgayA9IGxlc3M7IGsgPD0gZ3JlYXQ7IGsrKykge1xuICAgICAgICB2YXIgZWsgPSBhW2tdLCB4ayA9IGYoZWspO1xuICAgICAgICBpZiAoeGsgPCBwaXZvdFZhbHVlMSkge1xuICAgICAgICAgIGlmIChrICE9PSBsZXNzKSB7XG4gICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgIGFbbGVzc10gPSBlaztcbiAgICAgICAgICB9XG4gICAgICAgICAgKytsZXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh4ayA+IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pO1xuICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA+IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXQgPCBrKSBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGxvY2F0aW9uIGluc2lkZSB0aGUgbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiBpcyBzdGFydGVkLlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdIDw9IHBpdm90Mi5cbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA8IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUcmlwbGUgZXhjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtsZXNzXTtcbiAgICAgICAgICAgICAgICAgIGFbbGVzcysrXSA9IGFbZ3JlYXRdO1xuICAgICAgICAgICAgICAgICAgYVtncmVhdC0tXSA9IGVrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBhW2dyZWF0XSA+PSBwaXZvdDEuXG4gICAgICAgICAgICAgICAgICBhW2tdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW92ZSBwaXZvdHMgaW50byB0aGVpciBmaW5hbCBwb3NpdGlvbnMuXG4gICAgLy8gV2Ugc2hydW5rIHRoZSBsaXN0IGZyb20gYm90aCBzaWRlcyAoYVtsZWZ0XSBhbmQgYVtyaWdodF0gaGF2ZVxuICAgIC8vIG1lYW5pbmdsZXNzIHZhbHVlcyBpbiB0aGVtKSBhbmQgbm93IHdlIG1vdmUgZWxlbWVudHMgZnJvbSB0aGUgZmlyc3RcbiAgICAvLyBhbmQgdGhpcmQgcGFydGl0aW9uIGludG8gdGhlc2UgbG9jYXRpb25zIHNvIHRoYXQgd2UgY2FuIHN0b3JlIHRoZVxuICAgIC8vIHBpdm90cy5cbiAgICBhW2xvXSA9IGFbbGVzcyAtIDFdO1xuICAgIGFbbGVzcyAtIDFdID0gcGl2b3QxO1xuICAgIGFbaGkgLSAxXSA9IGFbZ3JlYXQgKyAxXTtcbiAgICBhW2dyZWF0ICsgMV0gPSBwaXZvdDI7XG5cbiAgICAvLyBUaGUgbGlzdCBpcyBub3cgcGFydGl0aW9uZWQgaW50byB0aHJlZSBwYXJ0aXRpb25zOlxuICAgIC8vIFsgPCBwaXZvdDEgICB8ID49IHBpdm90MSAmJiA8PSBwaXZvdDIgICB8ICA+IHBpdm90MiAgIF1cbiAgICAvLyAgXiAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgIF5cbiAgICAvLyBsZWZ0ICAgICAgICAgbGVzcyAgICAgICAgICAgICAgICAgICAgIGdyZWF0ICAgICAgICByaWdodFxuXG4gICAgLy8gUmVjdXJzaXZlIGRlc2NlbnQuIChEb24ndCBpbmNsdWRlIHRoZSBwaXZvdCB2YWx1ZXMuKVxuICAgIHNvcnQoYSwgbG8sIGxlc3MgLSAxKTtcbiAgICBzb3J0KGEsIGdyZWF0ICsgMiwgaGkpO1xuXG4gICAgaWYgKHBpdm90c0VxdWFsKSB7XG4gICAgICAvLyBBbGwgZWxlbWVudHMgaW4gdGhlIHNlY29uZCBwYXJ0aXRpb24gYXJlIGVxdWFsIHRvIHRoZSBwaXZvdC4gTm9cbiAgICAgIC8vIG5lZWQgdG8gc29ydCB0aGVtLlxuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgLy8gSW4gdGhlb3J5IGl0IHNob3VsZCBiZSBlbm91Z2ggdG8gY2FsbCBfZG9Tb3J0IHJlY3Vyc2l2ZWx5IG9uIHRoZSBzZWNvbmRcbiAgICAvLyBwYXJ0aXRpb24uXG4gICAgLy8gVGhlIEFuZHJvaWQgc291cmNlIGhvd2V2ZXIgcmVtb3ZlcyB0aGUgcGl2b3QgZWxlbWVudHMgZnJvbSB0aGUgcmVjdXJzaXZlXG4gICAgLy8gY2FsbCBpZiB0aGUgc2Vjb25kIHBhcnRpdGlvbiBpcyB0b28gbGFyZ2UgKG1vcmUgdGhhbiAyLzMgb2YgdGhlIGxpc3QpLlxuICAgIGlmIChsZXNzIDwgaTEgJiYgZ3JlYXQgPiBpNSkge1xuICAgICAgdmFyIGxlc3NWYWx1ZSwgZ3JlYXRWYWx1ZTtcbiAgICAgIHdoaWxlICgobGVzc1ZhbHVlID0gZihhW2xlc3NdKSkgPD0gcGl2b3RWYWx1ZTEgJiYgbGVzc1ZhbHVlID49IHBpdm90VmFsdWUxKSArK2xlc3M7XG4gICAgICB3aGlsZSAoKGdyZWF0VmFsdWUgPSBmKGFbZ3JlYXRdKSkgPD0gcGl2b3RWYWx1ZTIgJiYgZ3JlYXRWYWx1ZSA+PSBwaXZvdFZhbHVlMikgLS1ncmVhdDtcblxuICAgICAgLy8gQ29weSBwYXN0ZSBvZiB0aGUgcHJldmlvdXMgMy13YXkgcGFydGl0aW9uaW5nIHdpdGggYWRhcHRpb25zLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIHBhcnRpdGlvbiB0aGUgbGlzdCBpbnRvIHRocmVlIHBhcnRzOlxuICAgICAgLy8gIDEuID09IHBpdm90MVxuICAgICAgLy8gIDIuID4gcGl2b3QxICYmIDwgcGl2b3QyXG4gICAgICAvLyAgMy4gPT0gcGl2b3QyXG4gICAgICAvL1xuICAgICAgLy8gRHVyaW5nIHRoZSBsb29wIHdlIGhhdmU6XG4gICAgICAvLyBbID09IHBpdm90MSB8ID4gcGl2b3QxICYmIDwgcGl2b3QyIHwgdW5wYXJ0aXRpb25lZCAgfCA9PSBwaXZvdDIgXVxuICAgICAgLy8gICAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgXlxuICAgICAgLy8gICAgICAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgICAgayAgICAgICAgICAgICAgZ3JlYXRcbiAgICAgIC8vXG4gICAgICAvLyBJbnZhcmlhbnRzOlxuICAgICAgLy8gICAxLiBmb3IgeCBpbiBbICosIGxlc3NbIDogeCA9PSBwaXZvdDFcbiAgICAgIC8vICAgMi4gZm9yIHggaW4gW2xlc3MsIGtbIDogcGl2b3QxIDwgeCAmJiB4IDwgcGl2b3QyXG4gICAgICAvLyAgIDMuIGZvciB4IGluIF1ncmVhdCwgKiBdIDogeCA9PSBwaXZvdDJcbiAgICAgIGZvciAodmFyIGsgPSBsZXNzOyBrIDw9IGdyZWF0OyBrKyspIHtcbiAgICAgICAgdmFyIGVrID0gYVtrXSwgeGsgPSBmKGVrKTtcbiAgICAgICAgaWYgKHhrIDw9IHBpdm90VmFsdWUxICYmIHhrID49IHBpdm90VmFsdWUxKSB7XG4gICAgICAgICAgaWYgKGsgIT09IGxlc3MpIHtcbiAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgYVtsZXNzXSA9IGVrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXNzKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHhrIDw9IHBpdm90VmFsdWUyICYmIHhrID49IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZ3JlYXRWYWx1ZSA9IGYoYVtncmVhdF0pO1xuICAgICAgICAgICAgICBpZiAoZ3JlYXRWYWx1ZSA8PSBwaXZvdFZhbHVlMiAmJiBncmVhdFZhbHVlID49IHBpdm90VmFsdWUyKSB7XG4gICAgICAgICAgICAgICAgZ3JlYXQtLTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JlYXQgPCBrKSBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGxvY2F0aW9uIGluc2lkZSB0aGUgbG9vcCB3aGVyZSBhIG5ld1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiBpcyBzdGFydGVkLlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdIDwgcGl2b3QyLlxuICAgICAgICAgICAgICAgIGlmIChncmVhdFZhbHVlIDwgcGl2b3RWYWx1ZTEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRyaXBsZSBleGNoYW5nZS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2xlc3NdO1xuICAgICAgICAgICAgICAgICAgYVtsZXNzKytdID0gYVtncmVhdF07XG4gICAgICAgICAgICAgICAgICBhW2dyZWF0LS1dID0gZWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFbZ3JlYXRdID09IHBpdm90MS5cbiAgICAgICAgICAgICAgICAgIGFba10gPSBhW2dyZWF0XTtcbiAgICAgICAgICAgICAgICAgIGFbZ3JlYXQtLV0gPSBlaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgc2Vjb25kIHBhcnRpdGlvbiBoYXMgbm93IGJlZW4gY2xlYXJlZCBvZiBwaXZvdCBlbGVtZW50cyBhbmQgbG9va3NcbiAgICAvLyBhcyBmb2xsb3dzOlxuICAgIC8vIFsgICogIHwgID4gcGl2b3QxICYmIDwgcGl2b3QyICB8ICogXVxuICAgIC8vICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgIF5cbiAgICAvLyAgICAgICBsZXNzICAgICAgICAgICAgICAgICAgZ3JlYXRcbiAgICAvLyBTb3J0IHRoZSBzZWNvbmQgcGFydGl0aW9uIHVzaW5nIHJlY3Vyc2l2ZSBkZXNjZW50LlxuXG4gICAgLy8gVGhlIHNlY29uZCBwYXJ0aXRpb24gbG9va3MgYXMgZm9sbG93czpcbiAgICAvLyBbICAqICB8ICA+PSBwaXZvdDEgJiYgPD0gcGl2b3QyICB8ICogXVxuICAgIC8vICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgICAgXlxuICAgIC8vICAgICAgIGxlc3MgICAgICAgICAgICAgICAgICAgIGdyZWF0XG4gICAgLy8gU2ltcGx5IHNvcnQgaXQgYnkgcmVjdXJzaXZlIGRlc2NlbnQuXG5cbiAgICByZXR1cm4gc29ydChhLCBsZXNzLCBncmVhdCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIHNvcnQ7XG59XG5cbnZhciBxdWlja3NvcnRfc2l6ZVRocmVzaG9sZCA9IDMyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHF1aWNrc29ydF9ieShjcm9zc2ZpbHRlcl9pZGVudGl0eSk7XG5tb2R1bGUuZXhwb3J0cy5ieSA9IHF1aWNrc29ydF9ieTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzZmlsdGVyMi9zcmMvcXVpY2tzb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJmdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VJbmNyZW1lbnQocCkge1xuICByZXR1cm4gcCArIDE7XG59XG5cbmZ1bmN0aW9uIGNyb3NzZmlsdGVyX3JlZHVjZURlY3JlbWVudChwKSB7XG4gIHJldHVybiBwIC0gMTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NmaWx0ZXJfcmVkdWNlQWRkKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHAsIHYpIHtcbiAgICByZXR1cm4gcCArICtmKHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcm9zc2ZpbHRlcl9yZWR1Y2VTdWJ0cmFjdChmKSB7XG4gIHJldHVybiBmdW5jdGlvbihwLCB2KSB7XG4gICAgcmV0dXJuIHAgLSBmKHYpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVkdWNlSW5jcmVtZW50OiBjcm9zc2ZpbHRlcl9yZWR1Y2VJbmNyZW1lbnQsXG4gIHJlZHVjZURlY3JlbWVudDogY3Jvc3NmaWx0ZXJfcmVkdWNlRGVjcmVtZW50LFxuICByZWR1Y2VBZGQ6IGNyb3NzZmlsdGVyX3JlZHVjZUFkZCxcbiAgcmVkdWNlU3VidHJhY3Q6IGNyb3NzZmlsdGVyX3JlZHVjZVN1YnRyYWN0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3Jvc3NmaWx0ZXIyL3NyYy9yZWR1Y2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIGNyb3NzZmlsdGVyX3plcm8oKSB7XG4gIHJldHVybiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyb3NzZmlsdGVyX3plcm87XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvc3JjL3plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSAyMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIl9hcmdzXCI6IFtcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdFwicmF3XCI6IFwiY3Jvc3NmaWx0ZXIyQDEuNC4wLWFscGhhLjZcIixcblx0XHRcdFx0XCJzY29wZVwiOiBudWxsLFxuXHRcdFx0XHRcImVzY2FwZWROYW1lXCI6IFwiY3Jvc3NmaWx0ZXIyXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcImNyb3NzZmlsdGVyMlwiLFxuXHRcdFx0XHRcInJhd1NwZWNcIjogXCIxLjQuMC1hbHBoYS42XCIsXG5cdFx0XHRcdFwic3BlY1wiOiBcIjEuNC4wLWFscGhhLjZcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwidmVyc2lvblwiXG5cdFx0XHR9LFxuXHRcdFx0XCIvVXNlcnMvTWFyc2hhbGwvVGhvbWFzV29yay93b3JrLXByb2plY3QvMjAxNjEyLWhlbmdzaGkuaW8vbWFrYWx1L25vZGVfbW9kdWxlcy91bml2ZXJzZVwiXG5cdFx0XVxuXHRdLFxuXHRcIl9jbnBtX3B1Ymxpc2hfdGltZVwiOiAxNDYzNTE5NTc0NDA1LFxuXHRcIl9mcm9tXCI6IFwiY3Jvc3NmaWx0ZXIyQDEuNC4wLWFscGhhLjZcIixcblx0XCJfaWRcIjogXCJjcm9zc2ZpbHRlcjJAMS40LjAtYWxwaGEuNlwiLFxuXHRcIl9pbkNhY2hlXCI6IHRydWUsXG5cdFwiX2xvY2F0aW9uXCI6IFwiL2Nyb3NzZmlsdGVyMlwiLFxuXHRcIl9ub2RlVmVyc2lvblwiOiBcIjUuMTAuMVwiLFxuXHRcIl9ucG1PcGVyYXRpb25hbEludGVybmFsXCI6IHtcblx0XHRcImhvc3RcIjogXCJwYWNrYWdlcy0xMi13ZXN0LmludGVybmFsLm5wbWpzLmNvbVwiLFxuXHRcdFwidG1wXCI6IFwidG1wL2Nyb3NzZmlsdGVyMi0xLjQuMC1hbHBoYS42LnRnel8xNDYzNTE5NTcxNzg2XzAuNDkyNjk2NzEyNDkyMDMzODRcIlxuXHR9LFxuXHRcIl9ucG1Vc2VyXCI6IHtcblx0XHRcIm5hbWVcIjogXCJlc2pld2V0dFwiLFxuXHRcdFwiZW1haWxcIjogXCJlc2pld2V0dEBnbWFpbC5jb21cIlxuXHR9LFxuXHRcIl9ucG1WZXJzaW9uXCI6IFwiMy44LjNcIixcblx0XCJfcGhhbnRvbUNoaWxkcmVuXCI6IHt9LFxuXHRcIl9yZXF1ZXN0ZWRcIjoge1xuXHRcdFwicmF3XCI6IFwiY3Jvc3NmaWx0ZXIyQDEuNC4wLWFscGhhLjZcIixcblx0XHRcInNjb3BlXCI6IG51bGwsXG5cdFx0XCJlc2NhcGVkTmFtZVwiOiBcImNyb3NzZmlsdGVyMlwiLFxuXHRcdFwibmFtZVwiOiBcImNyb3NzZmlsdGVyMlwiLFxuXHRcdFwicmF3U3BlY1wiOiBcIjEuNC4wLWFscGhhLjZcIixcblx0XHRcInNwZWNcIjogXCIxLjQuMC1hbHBoYS42XCIsXG5cdFx0XCJ0eXBlXCI6IFwidmVyc2lvblwiXG5cdH0sXG5cdFwiX3JlcXVpcmVkQnlcIjogW1xuXHRcdFwiL3JlZHVjdGlvXCIsXG5cdFx0XCIvdW5pdmVyc2VcIlxuXHRdLFxuXHRcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtLnRhb2Jhby5vcmcvY3Jvc3NmaWx0ZXIyL2Rvd25sb2FkL2Nyb3NzZmlsdGVyMi0xLjQuMC1hbHBoYS42LnRnelwiLFxuXHRcIl9zaGFzdW1cIjogXCJmMDE5N2M2ZmFiMmQ2YTU4M2I1MTI1NGJmYzYzNTcwOTNmODA1MjFiXCIsXG5cdFwiX3Nocmlua3dyYXBcIjogbnVsbCxcblx0XCJfc3BlY1wiOiBcImNyb3NzZmlsdGVyMkAxLjQuMC1hbHBoYS42XCIsXG5cdFwiX3doZXJlXCI6IFwiL1VzZXJzL01hcnNoYWxsL1Rob21hc1dvcmsvd29yay1wcm9qZWN0LzIwMTYxMi1oZW5nc2hpLmlvL21ha2FsdS9ub2RlX21vZHVsZXMvdW5pdmVyc2VcIixcblx0XCJhdXRob3JcIjoge1xuXHRcdFwibmFtZVwiOiBcIk1pa2UgQm9zdG9ja1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cDovL2Jvc3Qub2Nrcy5vcmcvbWlrZVwiXG5cdH0sXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY3Jvc3NmaWx0ZXIvY3Jvc3NmaWx0ZXIvaXNzdWVzXCJcblx0fSxcblx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIkphc29uIERhdmllc1wiLFxuXHRcdFx0XCJ1cmxcIjogXCJodHRwOi8vd3d3Lmphc29uZGF2aWVzLmNvbS9cIlxuXHRcdH1cblx0XSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwibG9kYXNoLnJlc3VsdFwiOiBcIl40LjQuMFwiXG5cdH0sXG5cdFwiZGVzY3JpcHRpb25cIjogXCJGYXN0IG11bHRpZGltZW5zaW9uYWwgZmlsdGVyaW5nIGZvciBjb29yZGluYXRlZCB2aWV3cy5cIixcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYnJvd3NlcmlmeVwiOiBcIl4xMy4wLjBcIixcblx0XHRcImQzXCI6IFwiMy41XCIsXG5cdFx0XCJwYWNrYWdlLWpzb24tdmVyc2lvbmlmeVwiOiBcIjEuMC4yXCIsXG5cdFx0XCJ1Z2xpZnktanNcIjogXCIyLjQuMFwiLFxuXHRcdFwidm93c1wiOiBcIjAuNy4wXCJcblx0fSxcblx0XCJkaXJlY3Rvcmllc1wiOiB7fSxcblx0XCJkaXN0XCI6IHtcblx0XHRcInNoYXN1bVwiOiBcImYwMTk3YzZmYWIyZDZhNTgzYjUxMjU0YmZjNjM1NzA5M2Y4MDUyMWJcIixcblx0XHRcInNpemVcIjogNDYwODcsXG5cdFx0XCJub2F0dGFjaG1lbnRcIjogZmFsc2UsXG5cdFx0XCJ0YXJiYWxsXCI6IFwiaHR0cDovL3JlZ2lzdHJ5Lm5wbS50YW9iYW8ub3JnL2Nyb3NzZmlsdGVyMi9kb3dubG9hZC9jcm9zc2ZpbHRlcjItMS40LjAtYWxwaGEuNi50Z3pcIlxuXHR9LFxuXHRcImZpbGVzXCI6IFtcblx0XHRcInNyY1wiLFxuXHRcdFwiaW5kZXguanNcIixcblx0XHRcImNyb3NzZmlsdGVyLmpzXCIsXG5cdFx0XCJjcm9zc2ZpbHRlci5taW4uanNcIlxuXHRdLFxuXHRcImdpdEhlYWRcIjogXCI1MDlhOTY3OThmNTE1M2E1OGQxYjZjYWU1ZmIzZTc4OTMxMjljZTdjXCIsXG5cdFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vY3Jvc3NmaWx0ZXIuZ2l0aHViLmNvbS9jcm9zc2ZpbHRlci9cIixcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJhbmFseXRpY3NcIixcblx0XHRcInZpc3VhbGl6YXRpb25cIixcblx0XHRcImNyb3NzZmlsdGVyXCJcblx0XSxcblx0XCJtYWluXCI6IFwiLi9pbmRleC5qc1wiLFxuXHRcIm1haW50YWluZXJzXCI6IFtcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJlc2pld2V0dFwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcImVzamV3ZXR0QGdtYWlsLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJnb3Jkb253b29kaHVsbFwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcImdvcmRvbkB3b29kaHVsbC5jb21cIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwidGFubmVybGluc2xleVwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcInRhbm5lcmxpbnNsZXlAZ21haWwuY29tXCJcblx0XHR9XG5cdF0sXG5cdFwibmFtZVwiOiBcImNyb3NzZmlsdGVyMlwiLFxuXHRcIm9wdGlvbmFsRGVwZW5kZW5jaWVzXCI6IHt9LFxuXHRcInB1Ymxpc2hfdGltZVwiOiAxNDYzNTE5NTc0NDA1LFxuXHRcInJlYWRtZVwiOiBcIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCFcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdCtzc2g6Ly9naXRAZ2l0aHViLmNvbS9jcm9zc2ZpbHRlci9jcm9zc2ZpbHRlci5naXRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwiYmVuY2htYXJrXCI6IFwibm9kZSB0ZXN0L2JlbmNobWFyay5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJicm93c2VyaWZ5IGluZGV4LmpzIC10IHBhY2thZ2UtanNvbi12ZXJzaW9uaWZ5IC0tc3RhbmRhbG9uZSBjcm9zc2ZpbHRlciAtbyBjcm9zc2ZpbHRlci5qcyAmJiB1Z2xpZnlqcyAtLWNvbXByZXNzIC0tbWFuZ2xlIC0tc2NyZXctaWU4IGNyb3NzZmlsdGVyLmpzIC1vIGNyb3NzZmlsdGVyLm1pbi5qc1wiLFxuXHRcdFwiY2xlYW5cIjogXCJybSAtZiBjcm9zc2ZpbHRlci5qcyBjcm9zc2ZpbHRlci5taW4uanNcIixcblx0XHRcInRlc3RcIjogXCJ2b3dzIC0tdmVyYm9zZVwiXG5cdH0sXG5cdFwidmVyc2lvblwiOiBcIjEuNC4wLWFscGhhLjZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jcm9zc2ZpbHRlcjIvcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMjM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLyxcbiAgICByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogc3RyaW5nVG9QYXRoKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZ2V0YCBleGNlcHQgdGhhdCBpZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXMgYVxuICogZnVuY3Rpb24gaXQncyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGl0cyBwYXJlbnQgb2JqZWN0IGFuZFxuICogaXRzIHJlc3VsdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gcmVzb2x2ZS5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjMSc6IDMsICdjMic6IF8uY29uc3RhbnQoNCkgfSB9XSB9O1xuICpcbiAqIF8ucmVzdWx0KG9iamVjdCwgJ2FbMF0uYi5jMScpO1xuICogLy8gPT4gM1xuICpcbiAqIF8ucmVzdWx0KG9iamVjdCwgJ2FbMF0uYi5jMicpO1xuICogLy8gPT4gNFxuICpcbiAqIF8ucmVzdWx0KG9iamVjdCwgJ2FbMF0uYi5jMycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqXG4gKiBfLnJlc3VsdChvYmplY3QsICdhWzBdLmIuYzMnLCBfLmNvbnN0YW50KCdkZWZhdWx0JykpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIHJlc3VsdChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICBwYXRoID0gaXNLZXkocGF0aCwgb2JqZWN0KSA/IFtwYXRoXSA6IGNhc3RQYXRoKHBhdGgpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgLy8gRW5zdXJlIHRoZSBsb29wIGlzIGVudGVyZWQgd2hlbiBwYXRoIGlzIGVtcHR5LlxuICBpZiAoIWxlbmd0aCkge1xuICAgIG9iamVjdCA9IHVuZGVmaW5lZDtcbiAgICBsZW5ndGggPSAxO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3RbdG9LZXkocGF0aFtpbmRleF0pXTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgb2JqZWN0ID0gaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKG9iamVjdCkgOiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5yZXN1bHQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19wYXJhbWV0ZXJzID0gcmVxdWlyZSgnLi9wYXJhbWV0ZXJzLmpzJyk7XG5cbl9hc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG5cdGlmICh0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuXHR9XG5cblx0dmFyIG91dHB1dCA9IE9iamVjdCh0YXJnZXQpO1xuXHRmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgKytpbmRleCkge1xuXHRcdHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuXHRcdGlmIChzb3VyY2UgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgbmV4dEtleSBpbiBzb3VyY2UpIHtcblx0XHRcdFx0aWYoc291cmNlLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG5cdFx0XHRcdFx0b3V0cHV0W25leHRLZXldID0gc291cmNlW25leHRLZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59O1xuXG5mdW5jdGlvbiBhY2Nlc3Nvcl9idWlsZChvYmosIHApIHtcblx0Ly8gb2JqLm9yZGVyID0gZnVuY3Rpb24odmFsdWUpIHtcblx0Ly8gXHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLm9yZGVyO1xuXHQvLyBcdHAub3JkZXIgPSB2YWx1ZTtcblx0Ly8gXHRyZXR1cm4gb2JqO1xuXHQvLyB9O1xuXG5cdC8vIENvbnZlcnRzIGEgc3RyaW5nIHRvIGFuIGFjY2Vzc29yIGZ1bmN0aW9uXG5cdGZ1bmN0aW9uIGFjY2Vzc29yaWZ5KHYpIHtcblx0XHRpZiggdHlwZW9mIHYgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmV3cml0ZSB0byBhIGZ1bmN0aW9uXG5cdFx0XHR2YXIgdGVtcFZhbHVlID0gdjtcblx0XHRcdHZhciBmdW5jID0gZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGRbdGVtcFZhbHVlXTsgfVxuXHRcdFx0cmV0dXJuIGZ1bmM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0fVxuXG5cdC8vIENvbnZlcnRzIGEgc3RyaW5nIHRvIGFuIGFjY2Vzc29yIGZ1bmN0aW9uXG5cdGZ1bmN0aW9uIGFjY2Vzc29yaWZ5TnVtZXJpYyh2KSB7XG5cdFx0aWYoIHR5cGVvZiB2ID09PSAnc3RyaW5nJyApIHtcblx0XHRcdC8vIFJld3JpdGUgdG8gYSBmdW5jdGlvblxuXHRcdFx0dmFyIHRlbXBWYWx1ZSA9IHY7XG5cdFx0XHR2YXIgZnVuYyA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiArZFt0ZW1wVmFsdWVdOyB9XG5cdFx0XHRyZXR1cm4gZnVuYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHY7XG5cdFx0fVxuXHR9XG5cblx0b2JqLmZyb21PYmplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcDtcblx0XHRfYXNzaWduKHAsIHZhbHVlKTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai50b09iamVjdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBwO1xuXHR9O1xuXG5cdG9iai5jb3VudCA9IGZ1bmN0aW9uKHZhbHVlLCBwcm9wTmFtZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuY291bnQ7XG4gICAgaWYgKCFwcm9wTmFtZSkge1xuICAgICAgcHJvcE5hbWUgPSAnY291bnQnO1xuICAgIH1cblx0XHRwLmNvdW50ID0gcHJvcE5hbWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouc3VtID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLnN1bTtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdHAuc3VtID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouYXZnID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmF2ZztcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdC8vIFdlIGNhbiB0YWtlIGFuIGFjY2Vzc29yIGZ1bmN0aW9uLCBhIGJvb2xlYW4sIG9yIGEgc3RyaW5nXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdGlmKHAuc3VtICYmIHAuc3VtICE9PSB2YWx1ZSkgY29uc29sZS53YXJuKCdTVU0gYWdncmVnYXRpb24gaXMgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgQVZHIGFnZ3JlZ2F0aW9uJyk7XG5cdFx0XHRwLnN1bSA9IHZhbHVlO1xuXHRcdFx0cC5hdmcgPSB0cnVlO1xuXHRcdFx0cC5jb3VudCA9ICdjb3VudCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHAuYXZnID0gdmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmV4Y2VwdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5leGNlcHRpb25BY2Nlc3NvcjtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnkodmFsdWUpO1xuXG5cdFx0cC5leGNlcHRpb25BY2Nlc3NvciA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmZpbHRlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5maWx0ZXI7XG5cdFx0cC5maWx0ZXIgPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai52YWx1ZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAudmFsdWVMaXN0O1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeSh2YWx1ZSk7XG5cblx0XHRwLnZhbHVlTGlzdCA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLm1lZGlhbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5tZWRpYW47XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5TnVtZXJpYyh2YWx1ZSk7XG5cblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmKHAudmFsdWVMaXN0ICYmIHAudmFsdWVMaXN0ICE9PSB2YWx1ZSkgY29uc29sZS53YXJuKCdWQUxVRUxJU1QgYWNjZXNzb3IgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgbWVkaWFuIGFnZ3JlZ2F0aW9uJyk7XG5cdFx0XHRwLnZhbHVlTGlzdCA9IHZhbHVlO1xuXHRcdH1cblx0XHRwLm1lZGlhbiA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLm1pbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5taW47XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5TnVtZXJpYyh2YWx1ZSk7XG5cblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmKHAudmFsdWVMaXN0ICYmIHAudmFsdWVMaXN0ICE9PSB2YWx1ZSkgY29uc29sZS53YXJuKCdWQUxVRUxJU1QgYWNjZXNzb3IgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgbWluIGFnZ3JlZ2F0aW9uJyk7XG5cdFx0XHRwLnZhbHVlTGlzdCA9IHZhbHVlO1xuXHRcdH1cblx0XHRwLm1pbiA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLm1heCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5tYXg7XG5cblx0XHR2YWx1ZSA9IGFjY2Vzc29yaWZ5TnVtZXJpYyh2YWx1ZSk7XG5cblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmKHAudmFsdWVMaXN0ICYmIHAudmFsdWVMaXN0ICE9PSB2YWx1ZSkgY29uc29sZS53YXJuKCdWQUxVRUxJU1QgYWNjZXNzb3IgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgbWF4IGFnZ3JlZ2F0aW9uJyk7XG5cdFx0XHRwLnZhbHVlTGlzdCA9IHZhbHVlO1xuXHRcdH1cblx0XHRwLm1heCA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmV4Y2VwdGlvbkNvdW50ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmV4Y2VwdGlvbkNvdW50O1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeSh2YWx1ZSk7XG5cblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0aWYocC5leGNlcHRpb25BY2Nlc3NvciAmJiBwLmV4Y2VwdGlvbkFjY2Vzc29yICE9PSB2YWx1ZSkgY29uc29sZS53YXJuKCdFWENFUFRJT04gYWNjZXNzb3IgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgZXhjZXB0aW9uIGNvdW50IGFnZ3JlZ2F0aW9uJyk7XG5cdFx0XHRwLmV4Y2VwdGlvbkFjY2Vzc29yID0gdmFsdWU7XG5cdFx0XHRwLmV4Y2VwdGlvbkNvdW50ID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cC5leGNlcHRpb25Db3VudCA9IHZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5leGNlcHRpb25TdW0gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuZXhjZXB0aW9uU3VtO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0cC5leGNlcHRpb25TdW0gPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5oaXN0b2dyYW1WYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5oaXN0b2dyYW1WYWx1ZTtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdHAuaGlzdG9ncmFtVmFsdWUgPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5oaXN0b2dyYW1CaW5zID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmhpc3RvZ3JhbVRocmVzaG9sZHM7XG5cdFx0cC5oaXN0b2dyYW1UaHJlc2hvbGRzID0gdmFsdWU7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouc3RkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLnN0ZDtcblxuXHRcdHZhbHVlID0gYWNjZXNzb3JpZnlOdW1lcmljKHZhbHVlKTtcblxuXHRcdGlmKHR5cGVvZih2YWx1ZSkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHAuc3VtT2ZTcXVhcmVzID0gdmFsdWU7XG5cdFx0XHRwLnN1bSA9IHZhbHVlO1xuXHRcdFx0cC5jb3VudCA9ICdjb3VudCc7XG5cdFx0XHRwLnN0ZCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHAuc3RkID0gdmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLnN1bU9mU3EgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuc3VtT2ZTcXVhcmVzO1xuXG5cdFx0dmFsdWUgPSBhY2Nlc3NvcmlmeU51bWVyaWModmFsdWUpO1xuXG5cdFx0cC5zdW1PZlNxdWFyZXMgPSB2YWx1ZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai52YWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBhY2Nlc3Nvcikge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIid2YWx1ZScgcmVxdWlyZXMgYSBzdHJpbmcgYXJndW1lbnQuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZighcC52YWx1ZXMpIHAudmFsdWVzID0ge307XG5cdFx0XHRwLnZhbHVlc1t2YWx1ZV0gPSB7fTtcblx0XHRcdHAudmFsdWVzW3ZhbHVlXS5wYXJhbWV0ZXJzID0gcmVkdWN0aW9fcGFyYW1ldGVycygpO1xuXHRcdFx0YWNjZXNzb3JfYnVpbGQocC52YWx1ZXNbdmFsdWVdLCBwLnZhbHVlc1t2YWx1ZV0ucGFyYW1ldGVycyk7XG5cdFx0XHRpZihhY2Nlc3NvcikgcC52YWx1ZXNbdmFsdWVdLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0XHRyZXR1cm4gcC52YWx1ZXNbdmFsdWVdO1xuXHRcdH1cblx0fTtcblxuXHRvYmoubmVzdCA9IGZ1bmN0aW9uKGtleUFjY2Vzc29yQXJyYXkpIHtcblx0XHRpZighYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAubmVzdEtleXM7XG5cblx0XHRrZXlBY2Nlc3NvckFycmF5Lm1hcChhY2Nlc3NvcmlmeSk7XG5cblx0XHRwLm5lc3RLZXlzID0ga2V5QWNjZXNzb3JBcnJheTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdG9iai5hbGlhcyA9IGZ1bmN0aW9uKHByb3BBY2Nlc3Nvck9iaikge1xuXHRcdGlmKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcC5hbGlhc0tleXM7XG5cdFx0cC5hbGlhc0tleXMgPSBwcm9wQWNjZXNzb3JPYmo7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouYWxpYXNQcm9wID0gZnVuY3Rpb24ocHJvcEFjY2Vzc29yT2JqKSB7XG5cdFx0aWYoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmFsaWFzUHJvcEtleXM7XG5cdFx0cC5hbGlhc1Byb3BLZXlzID0gcHJvcEFjY2Vzc29yT2JqO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmdyb3VwQWxsID0gZnVuY3Rpb24oZ3JvdXBUZXN0KSB7XG5cdFx0aWYoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmdyb3VwQWxsO1xuXHRcdHAuZ3JvdXBBbGwgPSBncm91cFRlc3Q7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxuXHRvYmouZGF0YUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHAuZGF0YUxpc3Q7XG5cdFx0cC5kYXRhTGlzdCA9IHZhbHVlO1xuXHRcdHJldHVybiBvYmo7XG5cdH07XG5cblx0b2JqLmN1c3RvbSA9IGZ1bmN0aW9uKGFkZFJlbW92ZUluaXRpYWxPYmopIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwLmN1c3RvbTtcblx0XHRwLmN1c3RvbSA9IGFkZFJlbW92ZUluaXRpYWxPYmo7XG5cdFx0cmV0dXJuIG9iajtcblx0fTtcblxufVxuXG52YXIgcmVkdWN0aW9fYWNjZXNzb3JzID0ge1xuXHRidWlsZDogYWNjZXNzb3JfYnVpbGRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fYWNjZXNzb3JzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2FjY2Vzc29ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2FsaWFzID0ge1xuXHRpbml0aWFsOiBmdW5jdGlvbihwcmlvciwgcGF0aCwgb2JqKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRpZihwcmlvcikgcCA9IHByaW9yKHApO1xuXHRcdFx0ZnVuY3Rpb24gYnVpbGRBbGlhc0Z1bmN0aW9uKGtleSl7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiBvYmpba2V5XShwYXRoKHApKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvcih2YXIgcHJvcCBpbiBvYmopIHtcblx0XHRcdFx0cGF0aChwKVtwcm9wXSA9IGJ1aWxkQWxpYXNGdW5jdGlvbihwcm9wKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fYWxpYXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2FsaWFzLmpzXG4gKiogbW9kdWxlIGlkID0gNDk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fYWxpYXNfcHJvcCA9IHtcblx0YWRkOiBmdW5jdGlvbiAob2JqLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRmb3IodmFyIHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdHBhdGgocClbcHJvcF0gPSBvYmpbcHJvcF0ocGF0aChwKSx2KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fYWxpYXNfcHJvcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvYWxpYXNQcm9wLmpzXG4gKiogbW9kdWxlIGlkID0gNDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fYXZnID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRpZihwYXRoKHApLmNvdW50ID4gMCkge1xuXHRcdFx0XHRwYXRoKHApLmF2ZyA9IHBhdGgocCkuc3VtIC8gcGF0aChwKS5jb3VudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhdGgocCkuYXZnID0gMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGlmKHBhdGgocCkuY291bnQgPiAwKSB7XG5cdFx0XHRcdHBhdGgocCkuYXZnID0gcGF0aChwKS5zdW0gLyBwYXRoKHApLmNvdW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGF0aChwKS5hdmcgPSAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLmF2ZyA9IDA7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2F2ZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvYXZnLmpzXG4gKiogbW9kdWxlIGlkID0gNDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fZmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXIuanMnKTtcbnZhciByZWR1Y3Rpb19jb3VudCA9IHJlcXVpcmUoJy4vY291bnQuanMnKTtcbnZhciByZWR1Y3Rpb19zdW0gPSByZXF1aXJlKCcuL3N1bS5qcycpO1xudmFyIHJlZHVjdGlvX2F2ZyA9IHJlcXVpcmUoJy4vYXZnLmpzJyk7XG52YXIgcmVkdWN0aW9fbWVkaWFuID0gcmVxdWlyZSgnLi9tZWRpYW4uanMnKTtcbnZhciByZWR1Y3Rpb19taW4gPSByZXF1aXJlKCcuL21pbi5qcycpO1xudmFyIHJlZHVjdGlvX21heCA9IHJlcXVpcmUoJy4vbWF4LmpzJyk7XG52YXIgcmVkdWN0aW9fdmFsdWVfY291bnQgPSByZXF1aXJlKCcuL3ZhbHVlLWNvdW50LmpzJyk7XG52YXIgcmVkdWN0aW9fdmFsdWVfbGlzdCA9IHJlcXVpcmUoJy4vdmFsdWUtbGlzdC5qcycpO1xudmFyIHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudCA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uLWNvdW50LmpzJyk7XG52YXIgcmVkdWN0aW9fZXhjZXB0aW9uX3N1bSA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uLXN1bS5qcycpO1xudmFyIHJlZHVjdGlvX2hpc3RvZ3JhbSA9IHJlcXVpcmUoJy4vaGlzdG9ncmFtLmpzJyk7XG52YXIgcmVkdWN0aW9fc3VtX29mX3NxID0gcmVxdWlyZSgnLi9zdW0tb2Ytc3F1YXJlcy5qcycpO1xudmFyIHJlZHVjdGlvX3N0ZCA9IHJlcXVpcmUoJy4vc3RkLmpzJyk7XG52YXIgcmVkdWN0aW9fbmVzdCA9IHJlcXVpcmUoJy4vbmVzdC5qcycpO1xudmFyIHJlZHVjdGlvX2FsaWFzID0gcmVxdWlyZSgnLi9hbGlhcy5qcycpO1xudmFyIHJlZHVjdGlvX2FsaWFzX3Byb3AgPSByZXF1aXJlKCcuL2FsaWFzUHJvcC5qcycpO1xudmFyIHJlZHVjdGlvX2RhdGFfbGlzdCA9IHJlcXVpcmUoJy4vZGF0YS1saXN0LmpzJyk7XG52YXIgcmVkdWN0aW9fY3VzdG9tID0gcmVxdWlyZSgnLi9jdXN0b20uanMnKTtcblxuZnVuY3Rpb24gYnVpbGRfZnVuY3Rpb24ocCwgZiwgcGF0aCkge1xuXHQvLyBXZSBoYXZlIHRvIGJ1aWxkIHRoZXNlIGZ1bmN0aW9ucyBpbiBvcmRlci4gRXZlbnR1YWxseSB3ZSBjYW4gaW5jbHVkZSBkZXBlbmRlbmN5XG5cdC8vIGluZm9ybWF0aW9uIGFuZCBjcmVhdGUgYSBkZXBlbmRlbmN5IGdyYXBoIGlmIHRoZSBwcm9jZXNzIGJlY29tZXMgY29tcGxleCBlbm91Z2guXG5cblx0aWYoIXBhdGgpIHBhdGggPSBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfTtcblxuXHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCByZWR1Y2VycyBzbyB0aGF0IGZpbHRlcmluZyBjYW4gc2tpcCBiYWNrIHRvXG5cdC8vIHRoZW0gaWYgdGhpcyBwYXJ0aWN1bGFyIHZhbHVlIGlzIGZpbHRlcmVkIG91dC5cblx0dmFyIG9yaWdGID0ge1xuXHRcdHJlZHVjZUFkZDogZi5yZWR1Y2VBZGQsXG5cdFx0cmVkdWNlUmVtb3ZlOiBmLnJlZHVjZVJlbW92ZSxcblx0XHRyZWR1Y2VJbml0aWFsOiBmLnJlZHVjZUluaXRpYWxcblx0fTtcblxuXHRpZihwLmNvdW50IHx8IHAuc3RkKSB7XG4gICAgZi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19jb3VudC5hZGQoZi5yZWR1Y2VBZGQsIHBhdGgsIHAuY291bnQpO1xuICAgIGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fY291bnQucmVtb3ZlKGYucmVkdWNlUmVtb3ZlLCBwYXRoLCBwLmNvdW50KTtcbiAgICBmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19jb3VudC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCwgcC5jb3VudCk7XG5cdH1cblxuXHRpZihwLnN1bSkge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fc3VtLmFkZChwLnN1bSwgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fc3VtLnJlbW92ZShwLnN1bSwgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX3N1bS5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHRpZihwLmF2Zykge1xuXHRcdGlmKCFwLmNvdW50IHx8ICFwLnN1bSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIllvdSBtdXN0IHNldCAuY291bnQodHJ1ZSkgYW5kIGRlZmluZSBhIC5zdW0oYWNjZXNzb3IpIHRvIHVzZSAuYXZnKHRydWUpLlwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19hdmcuYWRkKHAuc3VtLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2F2Zy5yZW1vdmUocC5zdW0sIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2F2Zy5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVGhlIHVuaXF1ZS1vbmx5IHJlZHVjZXJzIGNvbWUgYmVmb3JlIHRoZSB2YWx1ZV9jb3VudCByZWR1Y2Vycy4gVGhleSBuZWVkIHRvIGNoZWNrIGlmXG5cdC8vIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGluIHRoZSB2YWx1ZXMgYXJyYXkgb24gdGhlIGdyb3VwLiBUaGV5IHNob3VsZCBvbmx5IGluY3JlbWVudC9kZWNyZW1lbnRcblx0Ly8gY291bnRzIGlmIHRoZSB2YWx1ZSBub3QgaW4gdGhlIGFycmF5IG9yIHRoZSBjb3VudCBvbiB0aGUgdmFsdWUgaXMgMC5cblx0aWYocC5leGNlcHRpb25Db3VudCkge1xuXHRcdGlmKCFwLmV4Y2VwdGlvbkFjY2Vzc29yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiWW91IG11c3QgZGVmaW5lIGFuIC5leGNlcHRpb24oYWNjZXNzb3IpIHRvIHVzZSAuZXhjZXB0aW9uQ291bnQodHJ1ZSkuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudC5hZGQocC5leGNlcHRpb25BY2Nlc3NvciwgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19leGNlcHRpb25fY291bnQucmVtb3ZlKHAuZXhjZXB0aW9uQWNjZXNzb3IsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdFx0fVxuXHR9XG5cblx0aWYocC5leGNlcHRpb25TdW0pIHtcblx0XHRpZighcC5leGNlcHRpb25BY2Nlc3Nvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIllvdSBtdXN0IGRlZmluZSBhbiAuZXhjZXB0aW9uKGFjY2Vzc29yKSB0byB1c2UgLmV4Y2VwdGlvblN1bShhY2Nlc3NvcikuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9zdW0uYWRkKHAuZXhjZXB0aW9uQWNjZXNzb3IsIHAuZXhjZXB0aW9uU3VtLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9zdW0ucmVtb3ZlKHAuZXhjZXB0aW9uQWNjZXNzb3IsIHAuZXhjZXB0aW9uU3VtLCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19leGNlcHRpb25fc3VtLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBNYWludGFpbiB0aGUgdmFsdWVzIGFycmF5LlxuXHRpZihwLnZhbHVlTGlzdCB8fCBwLm1lZGlhbiB8fCBwLm1pbiB8fCBwLm1heCkge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fdmFsdWVfbGlzdC5hZGQocC52YWx1ZUxpc3QsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX3ZhbHVlX2xpc3QucmVtb3ZlKHAudmFsdWVMaXN0LCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fdmFsdWVfbGlzdC5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHQvLyBNYWludGFpbiB0aGUgZGF0YSBhcnJheS5cblx0aWYocC5kYXRhTGlzdCkge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fZGF0YV9saXN0LmFkZChwLmRhdGFMaXN0LCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19kYXRhX2xpc3QucmVtb3ZlKHAuZGF0YUxpc3QsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19kYXRhX2xpc3QuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0aWYocC5tZWRpYW4pIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX21lZGlhbi5hZGQoZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fbWVkaWFuLnJlbW92ZShmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fbWVkaWFuLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdGlmKHAubWluKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19taW4uYWRkKGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX21pbi5yZW1vdmUoZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX21pbi5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCk7XG5cdH1cblxuXHRpZihwLm1heCkge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fbWF4LmFkZChmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19tYXgucmVtb3ZlKGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19tYXguaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0Ly8gTWFpbnRhaW4gdGhlIHZhbHVlcyBjb3VudCBhcnJheS5cblx0aWYocC5leGNlcHRpb25BY2Nlc3Nvcikge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fdmFsdWVfY291bnQuYWRkKHAuZXhjZXB0aW9uQWNjZXNzb3IsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX3ZhbHVlX2NvdW50LnJlbW92ZShwLmV4Y2VwdGlvbkFjY2Vzc29yLCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fdmFsdWVfY291bnQuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHR9XG5cblx0Ly8gSGlzdG9ncmFtXG5cdGlmKHAuaGlzdG9ncmFtVmFsdWUgJiYgcC5oaXN0b2dyYW1UaHJlc2hvbGRzKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19oaXN0b2dyYW0uYWRkKHAuaGlzdG9ncmFtVmFsdWUsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX2hpc3RvZ3JhbS5yZW1vdmUocC5oaXN0b2dyYW1WYWx1ZSwgZi5yZWR1Y2VSZW1vdmUsIHBhdGgpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2hpc3RvZ3JhbS5pbml0aWFsKHAuaGlzdG9ncmFtVGhyZXNob2xkcyAsZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdC8vIFN1bSBvZiBTcXVhcmVzXG5cdGlmKHAuc3VtT2ZTcXVhcmVzKSB7XG5cdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19zdW1fb2Zfc3EuYWRkKHAuc3VtT2ZTcXVhcmVzLCBmLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19zdW1fb2Zfc3EucmVtb3ZlKHAuc3VtT2ZTcXVhcmVzLCBmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VJbml0aWFsID0gcmVkdWN0aW9fc3VtX29mX3NxLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdC8vIFN0YW5kYXJkIGRldmlhdGlvblxuXHRpZihwLnN0ZCkge1xuXHRcdGlmKCFwLnN1bU9mU3F1YXJlcyB8fCAhcC5zdW0pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJZb3UgbXVzdCBzZXQgLnN1bU9mU3EoYWNjZXNzb3IpIGFuZCBkZWZpbmUgYSAuc3VtKGFjY2Vzc29yKSB0byB1c2UgLnN0ZCh0cnVlKS4gT3IgdXNlIC5zdGQoYWNjZXNzb3IpLlwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zi5yZWR1Y2VBZGQgPSByZWR1Y3Rpb19zdGQuYWRkKGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRcdGYucmVkdWNlUmVtb3ZlID0gcmVkdWN0aW9fc3RkLnJlbW92ZShmLnJlZHVjZVJlbW92ZSwgcGF0aCk7XG5cdFx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19zdGQuaW5pdGlhbChmLnJlZHVjZUluaXRpYWwsIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEN1c3RvbSByZWR1Y2VyIGRlZmluZWQgYnkgMyBmdW5jdGlvbnMgOiBhZGQsIHJlbW92ZSwgaW5pdGlhbFxuXHRpZiAocC5jdXN0b20pIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2N1c3RvbS5hZGQoZi5yZWR1Y2VBZGQsIHBhdGgsIHAuY3VzdG9tLmFkZCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19jdXN0b20ucmVtb3ZlKGYucmVkdWNlUmVtb3ZlLCBwYXRoLCBwLmN1c3RvbS5yZW1vdmUpO1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2N1c3RvbS5pbml0aWFsKGYucmVkdWNlSW5pdGlhbCwgcGF0aCwgcC5jdXN0b20uaW5pdGlhbCk7XG5cdH1cblxuXHQvLyBOZXN0aW5nXG5cdGlmKHAubmVzdEtleXMpIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX25lc3QuYWRkKHAubmVzdEtleXMsIGYucmVkdWNlQWRkLCBwYXRoKTtcblx0XHRmLnJlZHVjZVJlbW92ZSA9IHJlZHVjdGlvX25lc3QucmVtb3ZlKHAubmVzdEtleXMsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0XHRmLnJlZHVjZUluaXRpYWwgPSByZWR1Y3Rpb19uZXN0LmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoKTtcblx0fVxuXG5cdC8vIEFsaWFzIGZ1bmN0aW9uc1xuXHRpZihwLmFsaWFzS2V5cykge1xuXHRcdGYucmVkdWNlSW5pdGlhbCA9IHJlZHVjdGlvX2FsaWFzLmluaXRpYWwoZi5yZWR1Y2VJbml0aWFsLCBwYXRoLCBwLmFsaWFzS2V5cyk7XG5cdH1cblxuXHQvLyBBbGlhcyBwcm9wZXJ0aWVzIC0gdGhpcyBpcyBsZXNzIGVmZmljaWVudCB0aGFuIGFsaWFzIGZ1bmN0aW9uc1xuXHRpZihwLmFsaWFzUHJvcEtleXMpIHtcblx0XHRmLnJlZHVjZUFkZCA9IHJlZHVjdGlvX2FsaWFzX3Byb3AuYWRkKHAuYWxpYXNQcm9wS2V5cywgZi5yZWR1Y2VBZGQsIHBhdGgpO1xuXHRcdC8vIFRoaXMgaXNuJ3QgYSB0eXBvLiBUaGUgZnVuY3Rpb24gaXMgdGhlIHNhbWUgZm9yIGFkZC9yZW1vdmUuXG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19hbGlhc19wcm9wLmFkZChwLmFsaWFzUHJvcEtleXMsIGYucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0fVxuXG5cdC8vIEZpbHRlcnMgZGV0ZXJtaW5lIGlmIG91ciBidWlsdC11cCBwcmlvcnMgc2hvdWxkIHJ1biwgb3IgaWYgaXQgc2hvdWxkIHNraXBcblx0Ly8gYmFjayB0byB0aGUgZmlsdGVycyBnaXZlbiBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoaXMgYnVpbGQgZnVuY3Rpb24uXG5cdGlmIChwLmZpbHRlcikge1xuXHRcdGYucmVkdWNlQWRkID0gcmVkdWN0aW9fZmlsdGVyLmFkZChwLmZpbHRlciwgZi5yZWR1Y2VBZGQsIG9yaWdGLnJlZHVjZUFkZCwgcGF0aCk7XG5cdFx0Zi5yZWR1Y2VSZW1vdmUgPSByZWR1Y3Rpb19maWx0ZXIucmVtb3ZlKHAuZmlsdGVyLCBmLnJlZHVjZVJlbW92ZSwgb3JpZ0YucmVkdWNlUmVtb3ZlLCBwYXRoKTtcblx0fVxuXG5cdC8vIFZhbHVlcyBnbyBsYXN0LlxuXHRpZihwLnZhbHVlcykge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHAudmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcblx0XHRcdC8vIFNldCB1cCB0aGUgcGF0aCBvbiBlYWNoIGdyb3VwLlxuXHRcdFx0dmFyIHNldHVwUGF0aCA9IGZ1bmN0aW9uKHByaW9yKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdFx0XHRwYXRoKHApW25dID0ge307XG5cdFx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Zi5yZWR1Y2VJbml0aWFsID0gc2V0dXBQYXRoKGYucmVkdWNlSW5pdGlhbCk7XG5cdFx0XHRidWlsZF9mdW5jdGlvbihwLnZhbHVlc1tuXS5wYXJhbWV0ZXJzLCBmLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gcFtuXTsgfSk7XG5cdFx0fSk7XG5cdH1cbn1cblxudmFyIHJlZHVjdGlvX2J1aWxkID0ge1xuXHRidWlsZDogYnVpbGRfZnVuY3Rpb25cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fYnVpbGQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0OTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBwbHVjayA9IGZ1bmN0aW9uKG4pe1xuICAgIHJldHVybiBmdW5jdGlvbihkKXtcbiAgICAgICAgcmV0dXJuIGRbbl07XG4gICAgfTtcbn07XG5cbi8vIHN1cHBvcnRlZCBvcGVyYXRvcnMgYXJlIHN1bSwgYXZnLCBhbmQgY291bnRcbl9ncm91cGVyID0gZnVuY3Rpb24ocGF0aCwgcHJpb3Ipe1xuICAgIGlmKCFwYXRoKSBwYXRoID0gZnVuY3Rpb24oZCl7cmV0dXJuIGQ7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocCwgdil7XG4gICAgICAgIGlmKHByaW9yKSBwcmlvcihwLCB2KTtcbiAgICAgICAgdmFyIHggPSBwYXRoKHApLCB5ID0gcGF0aCh2KTtcbiAgICAgICAgaWYodHlwZW9mIHkuY291bnQgIT09ICd1bmRlZmluZWQnKSB4LmNvdW50ICs9IHkuY291bnQ7XG4gICAgICAgIGlmKHR5cGVvZiB5LnN1bSAhPT0gJ3VuZGVmaW5lZCcpIHguc3VtICs9IHkuc3VtO1xuICAgICAgICBpZih0eXBlb2YgeS5hdmcgIT09ICd1bmRlZmluZWQnKSB4LmF2ZyA9IHguc3VtL3guY291bnQ7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH07XG59O1xuXG5yZWR1Y3Rpb19jYXAgPSBmdW5jdGlvbiAocHJpb3IsIGYsIHApIHtcbiAgICB2YXIgb2JqID0gZi5yZWR1Y2VJbml0aWFsKCk7XG4gICAgLy8gd2Ugd2FudCB0byBzdXBwb3J0IHZhbHVlcyBzbyB3ZSdsbCBuZWVkIHRvIGtub3cgd2hhdCB0aG9zZSBhcmVcbiAgICB2YXIgdmFsdWVzID0gcC52YWx1ZXMgPyBPYmplY3Qua2V5cyhwLnZhbHVlcykgOiBbXTtcbiAgICB2YXIgX290aGVyc0dyb3VwZXIgPSBfZ3JvdXBlcigpO1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBfb3RoZXJzR3JvdXBlciA9IF9ncm91cGVyKHBsdWNrKHZhbHVlc1tpXSksIF9vdGhlcnNHcm91cGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhcCwgb3RoZXJzTmFtZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcmlvcigpO1xuICAgICAgICBpZiggY2FwID09PSBJbmZpbml0eSB8fCAhY2FwICkgcmV0dXJuIHByaW9yKCk7XG4gICAgICAgIHZhciBhbGwgPSBwcmlvcigpO1xuICAgICAgICB2YXIgc2xpY2VfaWR4ID0gY2FwLTE7XG4gICAgICAgIGlmKGFsbC5sZW5ndGggPD0gY2FwKSByZXR1cm4gYWxsO1xuICAgICAgICB2YXIgZGF0YSA9IGFsbC5zbGljZSgwLCBzbGljZV9pZHgpO1xuICAgICAgICB2YXIgb3RoZXJzID0ge2tleTogb3RoZXJzTmFtZSB8fCAnT3RoZXJzJ307XG4gICAgICAgIG90aGVycy52YWx1ZSA9IGYucmVkdWNlSW5pdGlhbCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gc2xpY2VfaWR4OyBpIDwgYWxsLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBfb3RoZXJzR3JvdXBlcihvdGhlcnMudmFsdWUsIGFsbFtpXS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wdXNoKG90aGVycyk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2NhcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9jYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0OThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19jb3VudCA9IHtcblx0YWRkOiBmdW5jdGlvbihwcmlvciwgcGF0aCwgcHJvcE5hbWUpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKVtwcm9wTmFtZV0rKztcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24ocHJpb3IsIHBhdGgsIHByb3BOYW1lKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocClbcHJvcE5hbWVdLS07XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbihwcmlvciwgcGF0aCwgcHJvcE5hbWUpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdGlmKHByaW9yKSBwID0gcHJpb3IocCk7XG5cdFx0XHQvLyBpZihwID09PSB1bmRlZmluZWQpIHAgPSB7fTtcblx0XHRcdHBhdGgocClbcHJvcE5hbWVdID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fY291bnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2NvdW50LmpzXG4gKiogbW9kdWxlIGlkID0gNDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fY3VzdG9tID0ge1xuXHRhZGQ6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCBhZGRGbikge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRyZXR1cm4gYWRkRm4ocCwgdik7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbihwcmlvciwgcGF0aCwgcmVtb3ZlRm4pIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cmV0dXJuIHJlbW92ZUZuKHAsIHYpO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uKHByaW9yLCBwYXRoLCBpbml0aWFsRm4pIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcdFxuXHRcdFx0aWYocHJpb3IpIHAgPSBwcmlvcihwKTtcblx0XHRcdHJldHVybiBpbml0aWFsRm4ocCk7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19jdXN0b207XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2N1c3RvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2RhdGFfbGlzdCA9IHtcblx0YWRkOiBmdW5jdGlvbihhLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRwYXRoKHApLmRhdGFMaXN0LnB1c2godik7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocCkuZGF0YUxpc3Quc3BsaWNlKHBhdGgocCkuZGF0YUxpc3QuaW5kZXhPZih2KSwgMSk7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbihwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0aWYocHJpb3IpIHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkuZGF0YUxpc3QgPSBbXTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fZGF0YV9saXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL2RhdGEtbGlzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudCA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaSwgY3Vycjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Ly8gT25seSBjb3VudCsrIGlmIHRoZSBwLnZhbHVlcyBhcnJheSBkb2Vzbid0IGNvbnRhaW4gYSh2KSBvciBpZiBpdCdzIDAuXG5cdFx0XHRpID0gcGF0aChwKS5iaXNlY3QocGF0aChwKS52YWx1ZXMsIGEodiksIDAsIHBhdGgocCkudmFsdWVzLmxlbmd0aCk7XG5cdFx0XHRjdXJyID0gcGF0aChwKS52YWx1ZXNbaV07XG5cdFx0XHRpZigoIWN1cnIgfHwgY3VyclswXSAhPT0gYSh2KSkgfHwgY3VyclsxXSA9PT0gMCkge1xuXHRcdFx0XHRwYXRoKHApLmV4Y2VwdGlvbkNvdW50Kys7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpLCBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHQvLyBPbmx5IGNvdW50LS0gaWYgdGhlIHAudmFsdWVzIGFycmF5IGNvbnRhaW5zIGEodikgdmFsdWUgb2YgMS5cblx0XHRcdGkgPSBwYXRoKHApLmJpc2VjdChwYXRoKHApLnZhbHVlcywgYSh2KSwgMCwgcGF0aChwKS52YWx1ZXMubGVuZ3RoKTtcblx0XHRcdGN1cnIgPSBwYXRoKHApLnZhbHVlc1tpXTtcblx0XHRcdGlmKGN1cnIgJiYgY3VyclswXSA9PT0gYSh2KSAmJiBjdXJyWzFdID09PSAxKSB7XG5cdFx0XHRcdHBhdGgocCkuZXhjZXB0aW9uQ291bnQtLTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5leGNlcHRpb25Db3VudCA9IDA7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2V4Y2VwdGlvbl9jb3VudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvZXhjZXB0aW9uLWNvdW50LmpzXG4gKiogbW9kdWxlIGlkID0gNTAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fZXhjZXB0aW9uX3N1bSA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgc3VtLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpLCBjdXJyO1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHQvLyBPbmx5IHN1bSBpZiB0aGUgcC52YWx1ZXMgYXJyYXkgZG9lc24ndCBjb250YWluIGEodikgb3IgaWYgaXQncyAwLlxuXHRcdFx0aSA9IHBhdGgocCkuYmlzZWN0KHBhdGgocCkudmFsdWVzLCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlcy5sZW5ndGgpO1xuXHRcdFx0Y3VyciA9IHBhdGgocCkudmFsdWVzW2ldO1xuXHRcdFx0aWYoKCFjdXJyIHx8IGN1cnJbMF0gIT09IGEodikpIHx8IGN1cnJbMV0gPT09IDApIHtcblx0XHRcdFx0cGF0aChwKS5leGNlcHRpb25TdW0gPSBwYXRoKHApLmV4Y2VwdGlvblN1bSArIHN1bSh2KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHN1bSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaSwgY3Vycjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Ly8gT25seSBzdW0gaWYgdGhlIHAudmFsdWVzIGFycmF5IGNvbnRhaW5zIGEodikgdmFsdWUgb2YgMS5cblx0XHRcdGkgPSBwYXRoKHApLmJpc2VjdChwYXRoKHApLnZhbHVlcywgYSh2KSwgMCwgcGF0aChwKS52YWx1ZXMubGVuZ3RoKTtcblx0XHRcdGN1cnIgPSBwYXRoKHApLnZhbHVlc1tpXTtcblx0XHRcdGlmKGN1cnIgJiYgY3VyclswXSA9PT0gYSh2KSAmJiBjdXJyWzFdID09PSAxKSB7XG5cdFx0XHRcdHBhdGgocCkuZXhjZXB0aW9uU3VtID0gcGF0aChwKS5leGNlcHRpb25TdW0gLSBzdW0odik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkuZXhjZXB0aW9uU3VtID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fZXhjZXB0aW9uX3N1bTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvZXhjZXB0aW9uLXN1bS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2ZpbHRlciA9IHtcblx0Ly8gVGhlIGJpZyBpZGVhIGhlcmUgaXMgdGhhdCB5b3UgZ2l2ZSB1cyBhIGZpbHRlciBmdW5jdGlvbiB0byBydW4gb24gdmFsdWVzLFxuXHQvLyBhICdwcmlvcicgcmVkdWNlciB0byBydW4gKGp1c3QgbGlrZSB0aGUgcmVzdCBvZiB0aGUgc3RhbmRhcmQgcmVkdWNlcnMpLFxuXHQvLyBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGxhc3QgcmVkdWNlciAoY2FsbGVkICdza2lwJyBiZWxvdykgZGVmaW5lZCBiZWZvcmVcblx0Ly8gdGhlIG1vc3QgcmVjZW50IGNoYWluIG9mIHJlZHVjZXJzLiAgVGhpcyBzdXBwb3J0cyBpbmRpdmlkdWFsIGZpbHRlcnMgZm9yXG5cdC8vIGVhY2ggLnZhbHVlKCcuLi4nKSBjaGFpbiB0aGF0IHlvdSBhZGQgdG8geW91ciByZWR1Y2VyLlxuXHRhZGQ6IGZ1bmN0aW9uIChmaWx0ZXIsIHByaW9yLCBza2lwKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYgKGZpbHRlcih2LCBuZikpIHtcblx0XHRcdFx0aWYgKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoc2tpcCkgc2tpcChwLCB2LCBuZik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChmaWx0ZXIsIHByaW9yLCBza2lwKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYgKGZpbHRlcih2LCBuZikpIHtcblx0XHRcdFx0aWYgKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoc2tpcCkgc2tpcChwLCB2LCBuZik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2ZpbHRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9maWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlciA9IHJlcXVpcmUoJ2Nyb3NzZmlsdGVyMicpO1xuXG52YXIgcmVkdWN0aW9faGlzdG9ncmFtID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBiaXNlY3QgPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSkubGVmdDtcblx0XHR2YXIgYmlzZWN0SGlzdG8gPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KS5yaWdodDtcblx0XHR2YXIgY3Vycjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Y3VyciA9IHBhdGgocCkuaGlzdG9ncmFtW2Jpc2VjdEhpc3RvKHBhdGgocCkuaGlzdG9ncmFtLCBhKHYpLCAwLCBwYXRoKHApLmhpc3RvZ3JhbS5sZW5ndGgpIC0gMV07XG5cdFx0XHRjdXJyLnkrKztcblx0XHRcdGN1cnIuc3BsaWNlKGJpc2VjdChjdXJyLCBhKHYpLCAwLCBjdXJyLmxlbmd0aCksIDAsIGEodikpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgYmlzZWN0ID0gY3Jvc3NmaWx0ZXIuYmlzZWN0LmJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pLmxlZnQ7XG5cdFx0dmFyIGJpc2VjdEhpc3RvID0gY3Jvc3NmaWx0ZXIuYmlzZWN0LmJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkucmlnaHQ7XG5cdFx0dmFyIGN1cnI7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGN1cnIgPSBwYXRoKHApLmhpc3RvZ3JhbVtiaXNlY3RIaXN0byhwYXRoKHApLmhpc3RvZ3JhbSwgYSh2KSwgMCwgcGF0aChwKS5oaXN0b2dyYW0ubGVuZ3RoKSAtIDFdO1xuXHRcdFx0Y3Vyci55LS07XG5cdFx0XHRjdXJyLnNwbGljZShiaXNlY3QoY3VyciwgYSh2KSwgMCwgY3Vyci5sZW5ndGgpLCAxKTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uICh0aHJlc2hvbGRzLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5oaXN0b2dyYW0gPSBbXTtcblx0XHRcdHZhciBhcnIgPSBbXTtcblx0XHRcdGZvcih2YXIgaSA9IDE7IGkgPCB0aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFyciA9IFtdO1xuXHRcdFx0XHRhcnIueCA9IHRocmVzaG9sZHNbaSAtIDFdO1xuXHRcdFx0XHRhcnIuZHggPSAodGhyZXNob2xkc1tpXSAtIHRocmVzaG9sZHNbaSAtIDFdKTtcblx0XHRcdFx0YXJyLnkgPSAwO1xuXHRcdFx0XHRwYXRoKHApLmhpc3RvZ3JhbS5wdXNoKGFycik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX2hpc3RvZ3JhbTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvaGlzdG9ncmFtLmpzXG4gKiogbW9kdWxlIGlkID0gNTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fbWF4ID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG4gXG5cdFx0XHRwYXRoKHApLm1heCA9IHBhdGgocCkudmFsdWVMaXN0W3BhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cblx0XHRcdC8vIENoZWNrIGZvciB1bmRlZmluZWQuXG5cdFx0XHRpZihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cGF0aChwKS5tYXggPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0fVxuIFxuXHRcdFx0cGF0aChwKS5tYXggPSBwYXRoKHApLnZhbHVlTGlzdFtwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggLSAxXTtcblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLm1heCA9IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fbWF4O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9tYXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19tZWRpYW4gPSB7XG5cdGFkZDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGhhbGY7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblxuXHRcdFx0aGFsZiA9IE1hdGguZmxvb3IocGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoLzIpO1xuIFxuXHRcdFx0aWYocGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoICUgMikge1xuXHRcdFx0XHRwYXRoKHApLm1lZGlhbiA9IHBhdGgocCkudmFsdWVMaXN0W2hhbGZdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGF0aChwKS5tZWRpYW4gPSAocGF0aChwKS52YWx1ZUxpc3RbaGFsZi0xXSArIHBhdGgocCkudmFsdWVMaXN0W2hhbGZdKSAvIDIuMDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaGFsZjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXG5cdFx0XHRoYWxmID0gTWF0aC5mbG9vcihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGgvMik7XG5cblx0XHRcdC8vIENoZWNrIGZvciB1bmRlZmluZWQuXG5cdFx0XHRpZihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cGF0aChwKS5tZWRpYW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0fVxuIFxuXHRcdFx0aWYocGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoID09PSAxIHx8IHBhdGgocCkudmFsdWVMaXN0Lmxlbmd0aCAlIDIpIHtcblx0XHRcdFx0cGF0aChwKS5tZWRpYW4gPSBwYXRoKHApLnZhbHVlTGlzdFtoYWxmXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhdGgocCkubWVkaWFuID0gKHBhdGgocCkudmFsdWVMaXN0W2hhbGYtMV0gKyBwYXRoKHApLnZhbHVlTGlzdFtoYWxmXSkgLyAyLjA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5tZWRpYW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX21lZGlhbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvbWVkaWFuLmpzXG4gKiogbW9kdWxlIGlkID0gNTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcmVkdWN0aW9fbWluID0ge1xuXHRhZGQ6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG4gXG5cdFx0XHRwYXRoKHApLm1pbiA9IHBhdGgocCkudmFsdWVMaXN0WzBdO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cblx0XHRcdC8vIENoZWNrIGZvciB1bmRlZmluZWQuXG5cdFx0XHRpZihwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cGF0aChwKS5taW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0fVxuIFxuXHRcdFx0cGF0aChwKS5taW4gPSBwYXRoKHApLnZhbHVlTGlzdFswXTtcblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLm1pbiA9IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fbWluO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9taW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlciA9IHJlcXVpcmUoJ2Nyb3NzZmlsdGVyMicpO1xuXG52YXIgcmVkdWN0aW9fbmVzdCA9IHtcblx0YWRkOiBmdW5jdGlvbiAoa2V5QWNjZXNzb3JzLCBwcmlvciwgcGF0aCkge1xuXHRcdHZhciBpOyAvLyBDdXJyZW50IGtleSBhY2Nlc3NvclxuXHRcdHZhciBhcnJSZWY7XG5cdFx0dmFyIG5ld1JlZjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXG5cdFx0XHRhcnJSZWYgPSBwYXRoKHApLm5lc3Q7XG5cdFx0XHRrZXlBY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhKSB7XG5cdFx0XHRcdG5ld1JlZiA9IGFyclJlZi5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5rZXkgPT09IGEodik7IH0pWzBdO1xuXHRcdFx0XHRpZihuZXdSZWYpIHtcblx0XHRcdFx0XHQvLyBUaGVyZSBpcyBhbm90aGVyIGxldmVsLlxuXHRcdFx0XHRcdGFyclJlZiA9IG5ld1JlZi52YWx1ZXM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gTmV4dCBsZXZlbCBkb2Vzbid0IHlldCBleGlzdCBzbyB3ZSBjcmVhdGUgaXQuXG5cdFx0XHRcdFx0bmV3UmVmID0gW107XG5cdFx0XHRcdFx0YXJyUmVmLnB1c2goeyBrZXk6IGEodiksIHZhbHVlczogbmV3UmVmIH0pO1xuXHRcdFx0XHRcdGFyclJlZiA9IG5ld1JlZjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGFyclJlZi5wdXNoKHYpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChrZXlBY2Nlc3NvcnMsIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGFyclJlZjtcblx0XHR2YXIgbmV4dFJlZjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXG5cdFx0XHRhcnJSZWYgPSBwYXRoKHApLm5lc3Q7XG5cdFx0XHRrZXlBY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhKSB7XG5cdFx0XHRcdGFyclJlZiA9IGFyclJlZi5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5rZXkgPT09IGEodik7IH0pWzBdLnZhbHVlcztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcnJheSBjb250YWlucyBhbiBhY3R1YWwgcmVmZXJlbmNlIHRvIHRoZSByb3csIHNvIGp1c3Qgc3BsaWNlIGl0IG91dC5cblx0XHRcdGFyclJlZi5zcGxpY2UoYXJyUmVmLmluZGV4T2YodiksIDEpO1xuXG5cdFx0XHQvLyBJZiB0aGUgbGVhZiBub3cgaGFzIGxlbmd0aCAwIGFuZCBpdCdzIG5vdCB0aGUgYmFzZSBhcnJheSByZW1vdmUgaXQuXG5cdFx0XHQvLyBUT0RPXG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5uZXN0ID0gW107XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvX25lc3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL25lc3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1MDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImZ1bmN0aW9uIHBvc3RQcm9jZXNzKHJlZHVjdGlvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChncm91cCwgcCwgZikge1xuICAgICAgICBncm91cC5wb3N0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBwb3N0cHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHByb2Nlc3MuYWxsKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9zdHByb2Nlc3MuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBncm91cC5hbGwoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcG9zdHByb2Nlc3NvcnMgPSByZWR1Y3Rpby5wb3N0cHJvY2Vzc29ycztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBvc3Rwcm9jZXNzb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9zdHByb2Nlc3NbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYWxsID0gcG9zdHByb2Nlc3MuYWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHByb2Nlc3MuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3Rwcm9jZXNzb3JzW25hbWVdKF9hbGwsIGYsIHApLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHByb2Nlc3M7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3Rwcm9jZXNzO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9zdFByb2Nlc3M7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvcG9zdHByb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVkdWN0aW8pe1xuICAgIHJlZHVjdGlvLnBvc3Rwcm9jZXNzb3JzID0ge307XG4gICAgcmVkdWN0aW8ucmVnaXN0ZXJQb3N0UHJvY2Vzc29yID0gZnVuY3Rpb24obmFtZSwgZnVuYyl7XG4gICAgICAgIHJlZHVjdGlvLnBvc3Rwcm9jZXNzb3JzW25hbWVdID0gZnVuYztcbiAgICB9O1xuXG4gICAgcmVkdWN0aW8ucmVnaXN0ZXJQb3N0UHJvY2Vzc29yKCdjYXAnLCByZXF1aXJlKCcuL2NhcCcpKTtcbiAgICByZWR1Y3Rpby5yZWdpc3RlclBvc3RQcm9jZXNzb3IoJ3NvcnRCeScsIHJlcXVpcmUoJy4vc29ydEJ5JykpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9wb3N0cHJvY2Vzc29ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZC5qcycpO1xudmFyIHJlZHVjdGlvX2FjY2Vzc29ycyA9IHJlcXVpcmUoJy4vYWNjZXNzb3JzLmpzJyk7XG52YXIgcmVkdWN0aW9fcGFyYW1ldGVycyA9IHJlcXVpcmUoJy4vcGFyYW1ldGVycy5qcycpO1xudmFyIHJlZHVjdGlvX3Bvc3Rwcm9jZXNzID0gcmVxdWlyZSgnLi9wb3N0cHJvY2VzcycpO1xudmFyIGNyb3NzZmlsdGVyID0gcmVxdWlyZSgnY3Jvc3NmaWx0ZXIyJyk7XG5cbmZ1bmN0aW9uIHJlZHVjdGlvKCkge1xuXHR2YXIgcGFyYW1ldGVycyA9IHJlZHVjdGlvX3BhcmFtZXRlcnMoKTtcblxuXHR2YXIgZnVuY3MgPSB7fTtcblxuXHRmdW5jdGlvbiBteShncm91cCkge1xuXHRcdC8vIFN0YXJ0IGZyZXNoIGVhY2ggdGltZS5cblx0XHRmdW5jcyA9IHtcblx0XHRcdHJlZHVjZUFkZDogZnVuY3Rpb24ocCkgeyByZXR1cm4gcDsgfSxcblx0XHRcdHJlZHVjZVJlbW92ZTogZnVuY3Rpb24ocCkgeyByZXR1cm4gcDsgfSxcblx0XHRcdHJlZHVjZUluaXRpYWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9OyB9LFxuXHRcdH07XG5cblx0XHRyZWR1Y3Rpb19idWlsZC5idWlsZChwYXJhbWV0ZXJzLCBmdW5jcyk7XG5cblx0XHQvLyBJZiB3ZSdyZSBkb2luZyBncm91cEFsbFxuXHRcdGlmKHBhcmFtZXRlcnMuZ3JvdXBBbGwpIHtcblx0XHRcdGlmKGdyb3VwLnRvcCkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCInZ3JvdXBBbGwnIGlzIGRlZmluZWQgYnV0IGF0dGVtcHRpbmcgdG8gcnVuIG9uIGEgc3RhbmRhcmQgZGltZW5zaW9uLmdyb3VwKCkuIE11c3QgcnVuIG9uIGRpbWVuc2lvbi5ncm91cEFsbCgpLlwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBiaXNlY3QgPSBjcm9zc2ZpbHRlci5iaXNlY3QuYnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5rZXk7IH0pLmxlZnQ7XG5cdFx0XHRcdHZhciBpLCBqO1xuXHRcdFx0XHR2YXIga2V5cztcbiAgICAgICAgdmFyIGtleXNMZW5ndGg7XG4gICAgICAgIHZhciBrOyAvLyBLZXlcblx0XHRcdFx0Z3JvdXAucmVkdWNlKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKHAsIHYsIG5mKSB7XG5cdFx0XHRcdFx0XHRrZXlzID0gcGFyYW1ldGVycy5ncm91cEFsbCh2KTtcbiAgICAgICAgICAgIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcihqPTA7ajxrZXlzTGVuZ3RoO2orKykge1xuICAgICAgICAgICAgICBrID0ga2V5c1tqXTtcbiAgICAgICAgICAgICAgaSA9IGJpc2VjdChwLCBrLCAwLCBwLmxlbmd0aCk7XG5cdFx0XHRcdFx0XHRcdGlmKCFwW2ldIHx8IHBbaV0ua2V5ICE9PSBrKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGdyb3VwIGRvZXNuJ3QgeWV0IGV4aXN0LCBjcmVhdGUgaXQgZmlyc3QuXG5cdFx0XHRcdFx0XHRcdFx0cC5zcGxpY2UoaSwgMCwgeyBrZXk6IGssIHZhbHVlOiBmdW5jcy5yZWR1Y2VJbml0aWFsKCkgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBUaGVuIHBhc3MgdGhlIHJlY29yZCBhbmQgdGhlIGdyb3VwIHZhbHVlIHRvIHRoZSByZWR1Y2Vyc1xuXHRcdFx0XHRcdFx0XHRmdW5jcy5yZWR1Y2VBZGQocFtpXS52YWx1ZSwgdiwgbmYpO1xuICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbihwLCB2LCBuZikge1xuXHRcdFx0XHRcdFx0a2V5cyA9IHBhcmFtZXRlcnMuZ3JvdXBBbGwodik7XG4gICAgICAgICAgICBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3Ioaj0wO2o8a2V5c0xlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgaSA9IGJpc2VjdChwLCBrZXlzW2pdLCAwLCBwLmxlbmd0aCk7XG5cdFx0XHRcdFx0XHRcdC8vIFRoZSBncm91cCBzaG91bGQgZXhpc3Qgb3Igd2UncmUgaW4gdHJvdWJsZSFcblx0XHRcdFx0XHRcdFx0Ly8gVGhlbiBwYXNzIHRoZSByZWNvcmQgYW5kIHRoZSBncm91cCB2YWx1ZSB0byB0aGUgcmVkdWNlcnNcblx0XHRcdFx0XHRcdFx0ZnVuY3MucmVkdWNlUmVtb3ZlKHBbaV0udmFsdWUsIHYsIG5mKTtcbiAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZighZ3JvdXAuYWxsKSB7XG5cdFx0XHRcdFx0Ly8gQWRkIGFuICdhbGwnIG1ldGhvZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHN0YW5kYXJkIENyb3NzZmlsdGVyIGdyb3Vwcy5cblx0XHRcdFx0XHRncm91cC5hbGwgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMudmFsdWUoKTsgfTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRncm91cC5yZWR1Y2UoZnVuY3MucmVkdWNlQWRkLCBmdW5jcy5yZWR1Y2VSZW1vdmUsIGZ1bmNzLnJlZHVjZUluaXRpYWwpO1xuXHRcdH1cblxuXHRcdHJlZHVjdGlvX3Bvc3Rwcm9jZXNzKGdyb3VwLCBwYXJhbWV0ZXJzLCBmdW5jcyk7XG5cblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxuXHRyZWR1Y3Rpb19hY2Nlc3NvcnMuYnVpbGQobXksIHBhcmFtZXRlcnMpO1xuXG5cdHJldHVybiBteTtcbn1cblxucmVxdWlyZSgnLi9wb3N0cHJvY2Vzc29ycycpKHJlZHVjdGlvKTtcbnJlZHVjdGlvX3Bvc3Rwcm9jZXNzID0gcmVkdWN0aW9fcG9zdHByb2Nlc3MocmVkdWN0aW8pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjdGlvO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3JlZHVjdGlvLmpzXG4gKiogbW9kdWxlIGlkID0gNTEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgcGx1Y2tfbiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKHR5cGVvZiBuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAofm4uaW5kZXhPZignLicpKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IG4uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXQucmVkdWNlKGZ1bmN0aW9uIChwLCB2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBbdl07XG4gICAgICAgICAgICB9LCBkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW25dO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cblxudmFyIGNvbXBhcmVyID0gZnVuY3Rpb24gKGFjY2Vzc29yLCBvcmRlcmluZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gb3JkZXJpbmcoYWNjZXNzb3IoYSksIGFjY2Vzc29yKGIpKTtcbiAgICB9O1xufTtcblxudmFyIHR5cGUgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBvcmRlcikge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgb3JkZXIgPSBhc2NlbmRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW9yKCkuc29ydChjb21wYXJlcihwbHVja19uKHZhbHVlKSwgb3JkZXIpKTtcbiAgICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9zb3J0QnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19zdGQgPSB7XG5cdGFkZDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGlmKHBhdGgocCkuY291bnQgPiAwKSB7XG5cdFx0XHRcdHBhdGgocCkuc3RkID0gMC4wO1xuXHRcdFx0XHR2YXIgbiA9IHBhdGgocCkuc3VtT2ZTcSAtIHBhdGgocCkuc3VtKnBhdGgocCkuc3VtL3BhdGgocCkuY291bnQ7XG5cdFx0XHRcdGlmIChuPjAuMCkgcGF0aChwKS5zdGQgPSBNYXRoLnNxcnQobi8ocGF0aChwKS5jb3VudC0xKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXRoKHApLnN0ZCA9IDAuMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdGlmKHBhdGgocCkuY291bnQgPiAwKSB7XG5cdFx0XHRcdHBhdGgocCkuc3RkID0gMC4wO1xuXHRcdFx0XHR2YXIgbiA9IHBhdGgocCkuc3VtT2ZTcSAtIHBhdGgocCkuc3VtKnBhdGgocCkuc3VtL3BhdGgocCkuY291bnQ7XG5cdFx0XHRcdGlmIChuPjAuMCkgcGF0aChwKS5zdGQgPSBNYXRoLnNxcnQobi8ocGF0aChwKS5jb3VudC0xKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXRoKHApLnN0ZCA9IDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRpbml0aWFsOiBmdW5jdGlvbiAocHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHApIHtcblx0XHRcdHAgPSBwcmlvcihwKTtcblx0XHRcdHBhdGgocCkuc3RkID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fc3RkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9zdGQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciByZWR1Y3Rpb19zdW1fb2Zfc3EgPSB7XG5cdGFkZDogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocCkuc3VtT2ZTcSA9IHBhdGgocCkuc3VtT2ZTcSArIGEodikqYSh2KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdHBhdGgocCkuc3VtT2ZTcSA9IHBhdGgocCkuc3VtT2ZTcSAtIGEodikqYSh2KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5zdW1PZlNxID0gMDtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWN0aW9fc3VtX29mX3NxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy9zdW0tb2Ytc3F1YXJlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHJlZHVjdGlvX3N1bSA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0cGF0aChwKS5zdW0gPSBwYXRoKHApLnN1bSArIGEodik7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uIChhLCBwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRwYXRoKHApLnN1bSA9IHBhdGgocCkuc3VtIC0gYSh2KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0cGF0aChwKS5zdW0gPSAwO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb19zdW07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWN0aW8vc3JjL3N1bS5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNyb3NzZmlsdGVyID0gcmVxdWlyZSgnY3Jvc3NmaWx0ZXIyJyk7XG5cbnZhciByZWR1Y3Rpb192YWx1ZV9jb3VudCA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaSwgY3Vycjtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0Ly8gTm90IHN1cmUgaWYgdGhpcyBpcyBtb3JlIGVmZmljaWVudCB0aGFuIHNvcnRpbmcuXG5cdFx0XHRpID0gcGF0aChwKS5iaXNlY3QocGF0aChwKS52YWx1ZXMsIGEodiksIDAsIHBhdGgocCkudmFsdWVzLmxlbmd0aCk7XG5cdFx0XHRjdXJyID0gcGF0aChwKS52YWx1ZXNbaV07XG5cdFx0XHRpZihjdXJyICYmIGN1cnJbMF0gPT09IGEodikpIHtcblx0XHRcdFx0Ly8gVmFsdWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGFycmF5IC0gaW5jcmVtZW50IGl0XG5cdFx0XHRcdGN1cnJbMV0rKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFZhbHVlIGRvZXNuJ3QgZXhpc3QgLSBhZGQgaXQgaW4gZm9ybSBbdmFsdWUsIDFdXG5cdFx0XHRcdHBhdGgocCkudmFsdWVzLnNwbGljZShpLCAwLCBbYSh2KSwgMV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaTtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHAsIHYsIG5mKSB7XG5cdFx0XHRpZihwcmlvcikgcHJpb3IocCwgdiwgbmYpO1xuXHRcdFx0aSA9IHBhdGgocCkuYmlzZWN0KHBhdGgocCkudmFsdWVzLCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlcy5sZW5ndGgpO1xuXHRcdFx0Ly8gVmFsdWUgYWxyZWFkeSBleGlzdHMgb3Igc29tZXRoaW5nIGhhcyBnb25lIHRlcnJpYmx5IHdyb25nLlxuXHRcdFx0cGF0aChwKS52YWx1ZXNbaV1bMV0tLTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdGluaXRpYWw6IGZ1bmN0aW9uIChwcmlvciwgcGF0aCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCkge1xuXHRcdFx0cCA9IHByaW9yKHApO1xuXHRcdFx0Ly8gQXJyYXlbQXJyYXlbdmFsdWUsIGNvdW50XV1cblx0XHRcdHBhdGgocCkudmFsdWVzID0gW107XG5cdFx0XHRwYXRoKHApLmJpc2VjdCA9IGNyb3NzZmlsdGVyLmJpc2VjdC5ieShmdW5jdGlvbihkKSB7IHJldHVybiBkWzBdOyB9KS5sZWZ0O1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb192YWx1ZV9jb3VudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1Y3Rpby9zcmMvdmFsdWUtY291bnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBjcm9zc2ZpbHRlciA9IHJlcXVpcmUoJ2Nyb3NzZmlsdGVyMicpO1xuXG52YXIgcmVkdWN0aW9fdmFsdWVfbGlzdCA9IHtcblx0YWRkOiBmdW5jdGlvbiAoYSwgcHJpb3IsIHBhdGgpIHtcblx0XHR2YXIgaTtcblx0XHR2YXIgYmlzZWN0ID0gY3Jvc3NmaWx0ZXIuYmlzZWN0LmJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pLmxlZnQ7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwLCB2LCBuZikge1xuXHRcdFx0aWYocHJpb3IpIHByaW9yKHAsIHYsIG5mKTtcblx0XHRcdC8vIE5vdCBzdXJlIGlmIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQgdGhhbiBzb3J0aW5nLlxuXHRcdFx0aSA9IGJpc2VjdChwYXRoKHApLnZhbHVlTGlzdCwgYSh2KSwgMCwgcGF0aChwKS52YWx1ZUxpc3QubGVuZ3RoKTtcblx0XHRcdHBhdGgocCkudmFsdWVMaXN0LnNwbGljZShpLCAwLCBhKHYpKTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24gKGEsIHByaW9yLCBwYXRoKSB7XG5cdFx0dmFyIGk7XG5cdFx0dmFyIGJpc2VjdCA9IGNyb3NzZmlsdGVyLmJpc2VjdC5ieShmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KS5sZWZ0O1xuXHRcdHJldHVybiBmdW5jdGlvbiAocCwgdiwgbmYpIHtcblx0XHRcdGlmKHByaW9yKSBwcmlvcihwLCB2LCBuZik7XG5cdFx0XHRpID0gYmlzZWN0KHBhdGgocCkudmFsdWVMaXN0LCBhKHYpLCAwLCBwYXRoKHApLnZhbHVlTGlzdC5sZW5ndGgpO1xuXHRcdFx0Ly8gVmFsdWUgYWxyZWFkeSBleGlzdHMgb3Igc29tZXRoaW5nIGhhcyBnb25lIHRlcnJpYmx5IHdyb25nLlxuXHRcdFx0cGF0aChwKS52YWx1ZUxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fSxcblx0aW5pdGlhbDogZnVuY3Rpb24gKHByaW9yLCBwYXRoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRwID0gcHJpb3IocCk7XG5cdFx0XHRwYXRoKHApLnZhbHVlTGlzdCA9IFtdO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y3Rpb192YWx1ZV9saXN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHVjdGlvL3NyYy92YWx1ZS1saXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjbGVhcihkZWYpIHtcbiAgICAvLyBDbGVhciBhIHNpbmdsZSBvciBtdWx0aXBsZSBjb2x1bW4gZGVmaW5pdGlvbnNcbiAgICBpZiAoZGVmKSB7XG4gICAgICBkZWYgPSBfLmlzQXJyYXkoZGVmKSA/IGRlZiA6IFtkZWZdXG4gICAgfVxuXG4gICAgaWYgKCFkZWYpIHtcbiAgICAgIC8vIENsZWFyIGFsbCBvZiB0aGUgY29sdW1uIGRlZmVuaXRpb25zXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAoc2VydmljZS5jb2x1bW5zLCBkaXNwb3NlQ29sdW1uKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlcnZpY2UuY29sdW1ucyA9IFtdXG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAoZGVmLCBmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKF8uaXNPYmplY3QoZCkpIHtcbiAgICAgICAgZCA9IGQua2V5XG4gICAgICB9XG4gICAgICAvLyBDbGVhciB0aGUgY29sdW1uXG4gICAgICB2YXIgY29sdW1uID0gXy5yZW1vdmUoc2VydmljZS5jb2x1bW5zLCBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoXy5pc0FycmF5KGQpKSB7XG4gICAgICAgICAgcmV0dXJuICFfLnhvcihjLmtleSwgZCkubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMua2V5ID09PSBkKSB7XG4gICAgICAgICAgaWYgKGMuZHluYW1pY1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pWzBdXG5cbiAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbygnQXR0ZW1wdGVkIHRvIGNsZWFyIGEgY29sdW1uIHRoYXQgaXMgcmVxdWlyZWQgZm9yIGFub3RoZXIgcXVlcnkhJywgYylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGRpc3Bvc2VDb2x1bW4oY29sdW1uKVxuICAgIH0pKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VDb2x1bW4oY29sdW1uKSB7XG4gICAgICB2YXIgZGlzcG9zYWxBY3Rpb25zID0gW11cbiAgICAgICAgLy8gRGlzcG9zZSB0aGUgZGltZW5zaW9uXG4gICAgICBpZiAoY29sdW1uLnJlbW92ZUxpc3RlbmVycykge1xuICAgICAgICBkaXNwb3NhbEFjdGlvbnMgPSBfLm1hcChjb2x1bW4ucmVtb3ZlTGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxpc3RlbmVyKCkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB2YXIgZmlsdGVyS2V5ID0gY29sdW1uLmtleVxuICAgICAgaWYgKGNvbHVtbi5jb21wbGV4ID09PSAnYXJyYXknKSB7XG4gICAgICAgIGZpbHRlcktleSA9IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5rZXkpXG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uLmNvbXBsZXggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyS2V5ID0gY29sdW1uLmtleS50b1N0cmluZygpXG4gICAgICB9XG4gICAgICBkZWxldGUgc2VydmljZS5maWx0ZXJzW2ZpbHRlcktleV1cbiAgICAgIGlmIChjb2x1bW4uZGltZW5zaW9uKSB7XG4gICAgICAgIGRpc3Bvc2FsQWN0aW9ucy5wdXNoKFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmRpc3Bvc2UoKSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZGlzcG9zYWxBY3Rpb25zKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2NsZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gNTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHZhciBkaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbicpKHNlcnZpY2UpXG5cbiAgdmFyIGNvbHVtbkZ1bmMgPSBjb2x1bW5cbiAgY29sdW1uRnVuYy5maW5kID0gZmluZENvbHVtblxuXG4gIHJldHVybiBjb2x1bW5GdW5jXG5cbiAgZnVuY3Rpb24gY29sdW1uKGRlZikge1xuICAgIC8vIFN1cHBvcnQgZ3JvdXBBbGwgZGltZW5zaW9uXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZGVmKSkge1xuICAgICAgZGVmID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIEFsd2F5cyBkZWFsIGluIGJ1bGsuICBMaWtlIENvc3RjbyFcbiAgICBpZiAoIV8uaXNBcnJheShkZWYpKSB7XG4gICAgICBkZWYgPSBbZGVmXVxuICAgIH1cblxuICAgIC8vIE1hcHAgYWxsIGNvbHVtbiBjcmVhdGlvbiwgd2FpdCBmb3IgYWxsIHRvIHNldHRsZSwgdGhlbiByZXR1cm4gdGhlIGluc3RhbmNlXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKGRlZiwgbWFrZUNvbHVtbikpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZENvbHVtbihkKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlLmNvbHVtbnMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGQpKSB7XG4gICAgICAgIHJldHVybiAhXy54b3IoYy5rZXksIGQpLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIGMua2V5ID09PSBkXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGUoZCkge1xuICAgIGlmIChfLmlzTnVtYmVyKGQpKSB7XG4gICAgICByZXR1cm4gJ251bWJlcidcbiAgICB9XG4gICAgaWYgKF8uaXNCb29sZWFuKGQpKSB7XG4gICAgICByZXR1cm4gJ2Jvb2wnXG4gICAgfVxuICAgIGlmIChfLmlzQXJyYXkoZCkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknXG4gICAgfVxuICAgIGlmIChfLmlzT2JqZWN0KGQpKSB7XG4gICAgICByZXR1cm4gJ29iamVjdCdcbiAgICB9XG4gICAgcmV0dXJuICdzdHJpbmcnXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ29sdW1uKGQpIHtcbiAgICB2YXIgY29sdW1uID0gXy5pc09iamVjdChkKSA/IGQgOiB7XG4gICAgICBrZXk6IGQsXG4gICAgfVxuXG4gICAgdmFyIGV4aXN0aW5nID0gZmluZENvbHVtbihjb2x1bW4ua2V5KVxuXG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBleGlzdGluZy50ZW1wb3JhcnkgPSBmYWxzZVxuICAgICAgaWYgKGV4aXN0aW5nLmR5bmFtaWNSZWZlcmVuY2UpIHtcbiAgICAgICAgZXhpc3RpbmcuZHluYW1pY1JlZmVyZW5jZSA9IGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpc3RpbmcucHJvbWlzZVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RvcmluZyBpbmZvIGFib3V0IHF1ZXJpZXMgYW5kIHBvc3QgYWdncmVnYXRpb25zXG4gICAgY29sdW1uLnF1ZXJpZXMgPSBbXVxuICAgIHNlcnZpY2UuY29sdW1ucy5wdXNoKGNvbHVtbilcblxuICAgIGNvbHVtbi5wcm9taXNlID0gUHJvbWlzZS50cnkoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXJ2aWNlLmNmLmFsbCgpKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGFsbCkge1xuICAgICAgdmFyIHNhbXBsZVxuXG4gICAgICAvLyBDb21wbGV4IGNvbHVtbiBLZXlzXG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5rZXkpKSB7XG4gICAgICAgIGNvbHVtbi5jb21wbGV4ID0gJ2Z1bmN0aW9uJ1xuICAgICAgICBzYW1wbGUgPSBjb2x1bW4ua2V5KGFsbFswXSlcbiAgICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhjb2x1bW4ua2V5KSAmJiAoY29sdW1uLmtleS5pbmRleE9mKCcuJykgPiAtMSB8fCBjb2x1bW4ua2V5LmluZGV4T2YoJ1snKSA+IC0xKSkge1xuICAgICAgICBjb2x1bW4uY29tcGxleCA9ICdzdHJpbmcnXG4gICAgICAgIHNhbXBsZSA9IF8uZ2V0KGFsbFswXSwgY29sdW1uLmtleSlcbiAgICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KGNvbHVtbi5rZXkpKSB7XG4gICAgICAgIGNvbHVtbi5jb21wbGV4ID0gJ2FycmF5J1xuICAgICAgICBzYW1wbGUgPSBfLnZhbHVlcyhfLnBpY2soYWxsWzBdLCBjb2x1bW4ua2V5KSlcbiAgICAgICAgaWYgKHNhbXBsZS5sZW5ndGggIT09IGNvbHVtbi5rZXkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2x1bW4ga2V5IGRvZXMgbm90IGV4aXN0IGluIGRhdGEhJywgY29sdW1uLmtleSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlID0gYWxsWzBdW2NvbHVtbi5rZXldXG4gICAgICB9XG5cbiAgICAgIC8vIEluZGV4IENvbHVtblxuICAgICAgaWYgKCFjb2x1bW4uY29tcGxleCAmJiBjb2x1bW4ua2V5ICE9PSB0cnVlICYmIHR5cGVvZiBzYW1wbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sdW1uIGtleSBkb2VzIG5vdCBleGlzdCBpbiBkYXRhIScsIGNvbHVtbi5rZXkpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBjb2x1bW4gZXhpc3RzLCBsZXQncyBhdCBsZWFzdCBtYWtlIHN1cmUgaXQncyBtYXJrZWRcbiAgICAgIC8vIGFzIHBlcm1hbmVudC4gVGhlcmUgaXMgYSBzbGlnaHQgY2hhbmNlIGl0IGV4aXN0cyBiZWNhdXNlXG4gICAgICAvLyBvZiBhIGZpbHRlciwgYW5kIHRoZSB1c2VyIGRlY2lkZXMgdG8gbWFrZSBpdCBwZXJtYW5lbnRcblxuICAgICAgaWYgKGNvbHVtbi5rZXkgPT09IHRydWUpIHtcbiAgICAgICAgY29sdW1uLnR5cGUgPSAnYWxsJ1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4uY29tcGxleCkge1xuICAgICAgICBjb2x1bW4udHlwZSA9ICdjb21wbGV4J1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4uYXJyYXkpIHtcbiAgICAgICAgY29sdW1uLnR5cGUgPSAnYXJyYXknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4udHlwZSA9IGdldFR5cGUoc2FtcGxlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGltZW5zaW9uLm1ha2UoY29sdW1uLmtleSwgY29sdW1uLnR5cGUsIGNvbHVtbi5jb21wbGV4KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRpbSkge1xuICAgICAgY29sdW1uLmRpbWVuc2lvbiA9IGRpbVxuICAgICAgY29sdW1uLmZpbHRlckNvdW50ID0gMFxuICAgICAgdmFyIHN0b3BMaXN0ZW5pbmdGb3JEYXRhID0gc2VydmljZS5vbkRhdGFDaGFuZ2UoYnVpbGRDb2x1bW5LZXlzKVxuICAgICAgY29sdW1uLnJlbW92ZUxpc3RlbmVycyA9IFtzdG9wTGlzdGVuaW5nRm9yRGF0YV1cblxuICAgICAgcmV0dXJuIGJ1aWxkQ29sdW1uS2V5cygpXG5cbiAgICAgIC8vIEJ1aWxkIHRoZSBjb2x1bW5LZXlzXG4gICAgICBmdW5jdGlvbiBidWlsZENvbHVtbktleXMoY2hhbmdlcykge1xuICAgICAgICBpZiAoY29sdW1uLmtleSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjY2Vzc29yID0gZGltZW5zaW9uLm1ha2VBY2Nlc3Nvcihjb2x1bW4ua2V5LCBjb2x1bW4uY29tcGxleClcbiAgICAgICAgY29sdW1uLnZhbHVlcyA9IGNvbHVtbi52YWx1ZXMgfHwgW11cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS50cnkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuYWRkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhbmdlcy5hZGRlZClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb2x1bW4uZGltZW5zaW9uLmJvdHRvbShJbmZpbml0eSkpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyb3dzKSB7XG4gICAgICAgICAgdmFyIG5ld1ZhbHVlc1xuICAgICAgICAgIGlmIChjb2x1bW4uY29tcGxleCA9PT0gJ3N0cmluZycgfHwgY29sdW1uLmNvbXBsZXggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IF8ubWFwKHJvd3MsIGFjY2Vzc29yKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93cywgYWNjZXNzb3IudG9TdHJpbmcoKSwgbmV3VmFsdWVzKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IF8uZmxhdHRlbihfLm1hcChyb3dzLCBhY2Nlc3NvcikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IF8ubWFwKHJvd3MsIGFjY2Vzc29yKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2x1bW4udmFsdWVzID0gXy51bmlxKGNvbHVtbi52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlcykpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBjb2x1bW4ucHJvbWlzZVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VydmljZVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2NvbHVtbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgncScpXG52YXIgY3Jvc3NmaWx0ZXIgPSByZXF1aXJlKCdjcm9zc2ZpbHRlcjInKVxuXG52YXIgXyA9IHJlcXVpcmUoJy4vbG9kYXNoJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIGJ1aWxkOiBidWlsZCxcbiAgICBnZW5lcmF0ZUNvbHVtbnM6IGdlbmVyYXRlQ29sdW1ucyxcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmU6IHJlbW92ZSxcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkKGMpIHtcbiAgICBpZiAoXy5pc0FycmF5KGMpKSB7XG4gICAgICAvLyBUaGlzIGFsbG93cyBzdXBwb3J0IGZvciBjcm9zc2ZpbHRlciBhc3luY1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcm9zc2ZpbHRlcihjKSlcbiAgICB9XG4gICAgaWYgKCFjIHx8IHR5cGVvZiBjLmRpbWVuc2lvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTm8gQ3Jvc3NmaWx0ZXIgZGF0YSBvciBpbnN0YW5jZSBmb3VuZCEnKSlcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb2x1bW5zKGRhdGEpIHtcbiAgICBpZiAoIXNlcnZpY2Uub3B0aW9ucy5nZW5lcmF0ZWRDb2x1bW5zKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgICByZXR1cm4gXy5tYXAoZGF0YSwgZnVuY3Rpb24gKGQvKiAsIGkgKi8pIHtcbiAgICAgIF8uZm9yRWFjaChzZXJ2aWNlLm9wdGlvbnMuZ2VuZXJhdGVkQ29sdW1ucywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgIGRba2V5XSA9IHZhbChkKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBkXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChkYXRhKSB7XG4gICAgZGF0YSA9IGdlbmVyYXRlQ29sdW1ucyhkYXRhKVxuICAgIHJldHVybiBQcm9taXNlLnRyeShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlcnZpY2UuY2YuYWRkKGRhdGEpKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2Uuc2VyaWFsKF8ubWFwKHNlcnZpY2UuZGF0YUxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyKHtcbiAgICAgICAgICAgIGFkZGVkOiBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VydmljZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UudHJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VydmljZS5jZi5yZW1vdmUoKSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2Nyb3NzZmlsdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbi8vIHZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKSAvLyBfIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VydmljZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhcigpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZpY2UuY2YuZGF0YUxpc3RlbmVycyA9IFtdXG4gICAgICAgIHNlcnZpY2UuY2YuZmlsdGVyTGlzdGVuZXJzID0gW11cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXJ2aWNlLmNmLnJlbW92ZSgpKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuaXZlcnNlL3NyYy9kZXN0cm95LmpzXG4gKiogbW9kdWxlIGlkID0gNTI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgbWFrZTogbWFrZSxcbiAgICBtYWtlQWNjZXNzb3I6IG1ha2VBY2Nlc3NvcixcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2Uoa2V5LCB0eXBlLCBjb21wbGV4KSB7XG4gICAgdmFyIGFjY2Vzc29yID0gbWFrZUFjY2Vzc29yKGtleSwgY29tcGxleClcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2lsbCBoYW5kbGUgcHJvbWlzZXMgb3Igbm9uIHByb21pc2VzLCBzb1xuICAgIC8vIHRoaXMgY3Jvc3NmaWx0ZXIgYXN5bmMgaXMgc3VwcG9ydGVkIGlmIHByZXNlbnRcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlcnZpY2UuY2YuZGltZW5zaW9uKGFjY2Vzc29yLCB0eXBlID09PSAnYXJyYXknKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBY2Nlc3NvcihrZXksIGNvbXBsZXgpIHtcbiAgICB2YXIgYWNjZXNzb3JGdW5jdGlvblxuXG4gICAgaWYgKGNvbXBsZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICBhY2Nlc3NvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIF8uZ2V0KGQsIGtleSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbXBsZXggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFjY2Vzc29yRnVuY3Rpb24gPSBrZXlcbiAgICB9IGVsc2UgaWYgKGNvbXBsZXggPT09ICdhcnJheScpIHtcbiAgICAgIHZhciBhcnJheVN0cmluZyA9IF8ubWFwKGtleSwgZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuICdkW1xcJycgKyBrICsgJ1xcJ10nXG4gICAgICB9KVxuICAgICAgYWNjZXNzb3JGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbignZCcsIFN0cmluZygncmV0dXJuICcgKyBKU09OLnN0cmluZ2lmeShhcnJheVN0cmluZykucmVwbGFjZSgvXCIvZywgJycpKSkgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgIG5vLW5ldy1mdW5jXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY2Vzc29yRnVuY3Rpb24gPVxuICAgICAgICAvLyBJbmRleCBEaW1lbnNpb25cbiAgICAgICAga2V5ID09PSB0cnVlID8gZnVuY3Rpb24gYWNjZXNzb3IoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH0gOlxuICAgICAgICAvLyBWYWx1ZSBBY2Nlc3NvciBEaW1lbnNpb25cbiAgICAgICAgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZFtrZXldXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjY2Vzc29yRnVuY3Rpb25cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL2RpbWVuc2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIHZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gR2V0dGVyc1xuICAkZmllbGQ6ICRmaWVsZCxcbiAgLy8gQm9vbGVhbnNcbiAgJGFuZDogJGFuZCxcbiAgJG9yOiAkb3IsXG4gICRub3Q6ICRub3QsXG5cbiAgLy8gRXhwcmVzc2lvbnNcbiAgJGVxOiAkZXEsXG4gICRndDogJGd0LFxuICAkZ3RlOiAkZ3RlLFxuICAkbHQ6ICRsdCxcbiAgJGx0ZTogJGx0ZSxcbiAgJG5lOiAkbmUsXG4gICR0eXBlOiAkdHlwZSxcblxuICAvLyBBcnJheSBFeHByZXNzaW9uc1xuICAkaW46ICRpbixcbiAgJG5pbjogJG5pbixcbiAgJGNvbnRhaW5zOiAkY29udGFpbnMsXG4gICRleGNsdWRlczogJGV4Y2x1ZGVzLFxuICAkc2l6ZTogJHNpemUsXG59XG5cbi8vIEdldHRlcnNcbmZ1bmN0aW9uICRmaWVsZChkLCBjaGlsZCkge1xuICByZXR1cm4gZFtjaGlsZF1cbn1cblxuLy8gT3BlcmF0b3JzXG5cbmZ1bmN0aW9uICRhbmQoZCwgY2hpbGQpIHtcbiAgY2hpbGQgPSBjaGlsZChkKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFjaGlsZFtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uICRvcihkLCBjaGlsZCkge1xuICBjaGlsZCA9IGNoaWxkKGQpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2hpbGRbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiAkbm90KGQsIGNoaWxkKSB7XG4gIGNoaWxkID0gY2hpbGQoZClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjaGlsZFtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8vIEV4cHJlc3Npb25zXG5cbmZ1bmN0aW9uICRlcShkLCBjaGlsZCkge1xuICByZXR1cm4gZCA9PT0gY2hpbGQoKVxufVxuXG5mdW5jdGlvbiAkZ3QoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGQgPiBjaGlsZCgpXG59XG5cbmZ1bmN0aW9uICRndGUoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGQgPj0gY2hpbGQoKVxufVxuXG5mdW5jdGlvbiAkbHQoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGQgPCBjaGlsZCgpXG59XG5cbmZ1bmN0aW9uICRsdGUoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGQgPD0gY2hpbGQoKVxufVxuXG5mdW5jdGlvbiAkbmUoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGQgIT09IGNoaWxkKClcbn1cblxuZnVuY3Rpb24gJHR5cGUoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkID09PSBjaGlsZCgpXG59XG5cbi8vIEFycmF5IEV4cHJlc3Npb25zXG5cbmZ1bmN0aW9uICRpbihkLCBjaGlsZCkge1xuICByZXR1cm4gZC5pbmRleE9mKGNoaWxkKCkpID4gLTFcbn1cblxuZnVuY3Rpb24gJG5pbihkLCBjaGlsZCkge1xuICByZXR1cm4gZC5pbmRleE9mKGNoaWxkKCkpID09PSAtMVxufVxuXG5mdW5jdGlvbiAkY29udGFpbnMoZCwgY2hpbGQpIHtcbiAgcmV0dXJuIGNoaWxkKCkuaW5kZXhPZihkKSA+IC0xXG59XG5cbmZ1bmN0aW9uICRleGNsdWRlcyhkLCBjaGlsZCkge1xuICByZXR1cm4gY2hpbGQoKS5pbmRleE9mKGQpID09PSAtMVxufVxuXG5mdW5jdGlvbiAkc2l6ZShkLCBjaGlsZCkge1xuICByZXR1cm4gZC5sZW5ndGggPT09IGNoaWxkKClcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VuaXZlcnNlL3NyYy9leHByZXNzaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDUyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgncScpXG52YXIgXyA9IHJlcXVpcmUoJy4vbG9kYXNoJylcblxudmFyIGFnZ3JlZ2F0aW9uID0gcmVxdWlyZSgnLi9hZ2dyZWdhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qIHNlcnZpY2UgKi8pIHtcbiAgcmV0dXJuIHtcbiAgICBwb3N0OiBwb3N0LFxuICAgIHNvcnRCeUtleTogc29ydEJ5S2V5LFxuICAgIGxpbWl0OiBsaW1pdCxcbiAgICBzcXVhc2g6IHNxdWFzaCxcbiAgICBjaGFuZ2U6IGNoYW5nZSxcbiAgICBjaGFuZ2VNYXA6IGNoYW5nZU1hcCxcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc3QocXVlcnksIHBhcmVudCwgY2IpIHtcbiAgICBxdWVyeS5kYXRhID0gY2xvbmVJZkxvY2tlZChwYXJlbnQpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYihxdWVyeSwgcGFyZW50KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCeUtleShxdWVyeSwgcGFyZW50LCBkZXNjKSB7XG4gICAgcXVlcnkuZGF0YSA9IGNsb25lSWZMb2NrZWQocGFyZW50KVxuICAgIHF1ZXJ5LmRhdGEgPSBfLnNvcnRCeShxdWVyeS5kYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQua2V5XG4gICAgfSlcbiAgICBpZiAoZGVzYykge1xuICAgICAgcXVlcnkuZGF0YS5yZXZlcnNlKClcbiAgICB9XG4gIH1cblxuICAvLyBMaW1pdCByZXN1bHRzIHRvIG4sIG9yIGZyb20gc3RhcnQgdG8gZW5kXG4gIGZ1bmN0aW9uIGxpbWl0KHF1ZXJ5LCBwYXJlbnQsIHN0YXJ0LCBlbmQpIHtcbiAgICBxdWVyeS5kYXRhID0gY2xvbmVJZkxvY2tlZChwYXJlbnQpXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZW5kKSkge1xuICAgICAgZW5kID0gc3RhcnQgfHwgMFxuICAgICAgc3RhcnQgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICAgICAgZW5kID0gZW5kIHx8IHF1ZXJ5LmRhdGEubGVuZ3RoXG4gICAgfVxuICAgIHF1ZXJ5LmRhdGEgPSBxdWVyeS5kYXRhLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQpXG4gIH1cblxuICAvLyBTcXVhc2ggcmVzdWx0cyB0byBuLCBvciBmcm9tIHN0YXJ0IHRvIGVuZFxuICBmdW5jdGlvbiBzcXVhc2gocXVlcnksIHBhcmVudCwgc3RhcnQsIGVuZCwgYWdnT2JqLCBsYWJlbCkge1xuICAgIHF1ZXJ5LmRhdGEgPSBjbG9uZUlmTG9ja2VkKHBhcmVudClcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgICBlbmQgPSBlbmQgfHwgcXVlcnkuZGF0YS5sZW5ndGhcbiAgICB2YXIgdG9TcXVhc2ggPSBxdWVyeS5kYXRhLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQpXG4gICAgdmFyIHNxdWFzaGVkID0ge1xuICAgICAga2V5OiBsYWJlbCB8fCAnT3RoZXInLFxuICAgICAgdmFsdWU6IHt9XG4gICAgfVxuICAgIF8ucmVjdXJzZU9iamVjdChhZ2dPYmosIGZ1bmN0aW9uICh2YWwsIGtleSwgcGF0aCkge1xuICAgICAgdmFyIGl0ZW1zID0gW11cbiAgICAgIF8uZm9yRWFjaCh0b1NxdWFzaCwgZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICBpdGVtcy5wdXNoKF8uZ2V0KHJlY29yZC52YWx1ZSwgcGF0aCkpXG4gICAgICB9KVxuICAgICAgXy5zZXQoc3F1YXNoZWQudmFsdWUsIHBhdGgsIGFnZ3JlZ2F0aW9uLmFnZ3JlZ2F0b3JzW3ZhbF0oaXRlbXMpKVxuICAgIH0pXG4gICAgcXVlcnkuZGF0YS5zcGxpY2Uoc3RhcnQsIDAsIHNxdWFzaGVkKVxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlKHF1ZXJ5LCBwYXJlbnQsIHN0YXJ0LCBlbmQsIGFnZ09iaikge1xuICAgIHF1ZXJ5LmRhdGEgPSBjbG9uZUlmTG9ja2VkKHBhcmVudClcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgICBlbmQgPSBlbmQgfHwgcXVlcnkuZGF0YS5sZW5ndGhcbiAgICB2YXIgb2JqID0ge1xuICAgICAga2V5OiBbcXVlcnkuZGF0YVtzdGFydF0ua2V5LCBxdWVyeS5kYXRhW2VuZF0ua2V5XSxcbiAgICAgIHZhbHVlOiB7fVxuICAgIH1cbiAgICBfLnJlY3Vyc2VPYmplY3QoYWdnT2JqLCBmdW5jdGlvbiAodmFsLCBrZXksIHBhdGgpIHtcbiAgICAgIHZhciBjaGFuZ2VQYXRoID0gXy5jbG9uZShwYXRoKVxuICAgICAgY2hhbmdlUGF0aC5wb3AoKVxuICAgICAgY2hhbmdlUGF0aC5wdXNoKGtleSArICdDaGFuZ2UnKVxuICAgICAgXy5zZXQob2JqLnZhbHVlLCBjaGFuZ2VQYXRoLCBfLmdldChxdWVyeS5kYXRhW2VuZF0udmFsdWUsIHBhdGgpIC0gXy5nZXQocXVlcnkuZGF0YVtzdGFydF0udmFsdWUsIHBhdGgpKVxuICAgIH0pXG4gICAgcXVlcnkuZGF0YSA9IG9ialxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlTWFwKHF1ZXJ5LCBwYXJlbnQsIGFnZ09iaiwgZGVmYXVsdE51bGwpIHtcbiAgICBkZWZhdWx0TnVsbCA9IF8uaXNVbmRlZmluZWQoZGVmYXVsdE51bGwpID8gMCA6IGRlZmF1bHROdWxsXG4gICAgcXVlcnkuZGF0YSA9IGNsb25lSWZMb2NrZWQocGFyZW50KVxuICAgIF8ucmVjdXJzZU9iamVjdChhZ2dPYmosIGZ1bmN0aW9uICh2YWwsIGtleSwgcGF0aCkge1xuICAgICAgdmFyIGNoYW5nZVBhdGggPSBfLmNsb25lKHBhdGgpXG4gICAgICB2YXIgZnJvbVN0YXJ0UGF0aCA9IF8uY2xvbmUocGF0aClcbiAgICAgIHZhciBmcm9tRW5kUGF0aCA9IF8uY2xvbmUocGF0aClcblxuICAgICAgY2hhbmdlUGF0aC5wb3AoKVxuICAgICAgZnJvbVN0YXJ0UGF0aC5wb3AoKVxuICAgICAgZnJvbUVuZFBhdGgucG9wKClcblxuICAgICAgY2hhbmdlUGF0aC5wdXNoKGtleSArICdDaGFuZ2UnKVxuICAgICAgZnJvbVN0YXJ0UGF0aC5wdXNoKGtleSArICdDaGFuZ2VGcm9tU3RhcnQnKVxuICAgICAgZnJvbUVuZFBhdGgucHVzaChrZXkgKyAnQ2hhbmdlRnJvbUVuZCcpXG5cbiAgICAgIHZhciBzdGFydCA9IF8uZ2V0KHF1ZXJ5LmRhdGFbMF0udmFsdWUsIHBhdGgsIGRlZmF1bHROdWxsKVxuICAgICAgdmFyIGVuZCA9IF8uZ2V0KHF1ZXJ5LmRhdGFbcXVlcnkuZGF0YS5sZW5ndGggLSAxXS52YWx1ZSwgcGF0aCwgZGVmYXVsdE51bGwpXG5cbiAgICAgIF8uZm9yRWFjaChxdWVyeS5kYXRhLCBmdW5jdGlvbiAocmVjb3JkLCBpKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IHF1ZXJ5LmRhdGFbaSAtIDFdIHx8IHF1ZXJ5LmRhdGFbMF1cbiAgICAgICAgXy5zZXQocXVlcnkuZGF0YVtpXS52YWx1ZSwgY2hhbmdlUGF0aCwgXy5nZXQocmVjb3JkLnZhbHVlLCBwYXRoLCBkZWZhdWx0TnVsbCkgLSAocHJldmlvdXMgPyBfLmdldChwcmV2aW91cy52YWx1ZSwgcGF0aCwgZGVmYXVsdE51bGwpIDogZGVmYXVsdE51bGwpKVxuICAgICAgICBfLnNldChxdWVyeS5kYXRhW2ldLnZhbHVlLCBmcm9tU3RhcnRQYXRoLCBfLmdldChyZWNvcmQudmFsdWUsIHBhdGgsIGRlZmF1bHROdWxsKSAtIHN0YXJ0KVxuICAgICAgICBfLnNldChxdWVyeS5kYXRhW2ldLnZhbHVlLCBmcm9tRW5kUGF0aCwgXy5nZXQocmVjb3JkLnZhbHVlLCBwYXRoLCBkZWZhdWx0TnVsbCkgLSBlbmQpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVJZkxvY2tlZChwYXJlbnQpIHtcbiAgcmV0dXJuIHBhcmVudC5sb2NrZWQgPyBfLmNsb25lKHBhcmVudC5kYXRhKSA6IHBhcmVudC5kYXRhXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvcG9zdEFnZ3JlZ2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNTI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5Qcm9taXNlLnNlcmlhbCA9IHNlcmlhbFxuXG52YXIgaXNQcm9taXNlTGlrZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBfLmlzRnVuY3Rpb24ob2JqLnRoZW4pXG59XG5cbmZ1bmN0aW9uIHNlcmlhbCh0YXNrcykge1xuICAvLyBGYWtlIGEgXCJwcmV2aW91cyB0YXNrXCIgZm9yIG91ciBpbml0aWFsIGl0ZXJhdGlvblxuICB2YXIgcHJldlByb21pc2VcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKClcbiAgXy5mb3JFYWNoKHRhc2tzLCBmdW5jdGlvbiAodGFzaywga2V5KSB7XG4gICAgdmFyIHN1Y2Nlc3MgPSB0YXNrLnN1Y2Nlc3MgfHwgdGFza1xuICAgIHZhciBmYWlsID0gdGFzay5mYWlsXG4gICAgdmFyIG5vdGlmeSA9IHRhc2subm90aWZ5XG4gICAgdmFyIG5leHRQcm9taXNlXG5cbiAgICAvLyBGaXJzdCB0YXNrXG4gICAgaWYgKCFwcmV2UHJvbWlzZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgICBuZXh0UHJvbWlzZSA9IHN1Y2Nlc3MoKVxuICAgICAgaWYgKCFpc1Byb21pc2VMaWtlKG5leHRQcm9taXNlKSkge1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gJ1Rhc2sgJyArIGtleSArICcgZGlkIG5vdCByZXR1cm4gYSBwcm9taXNlLidcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgcHJldmlvdXMgcHJvbWlzZSBoYXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgdG8gZXhlY3V0ZSB0aGUgbmV4dCB0YXNrXG4gICAgICBuZXh0UHJvbWlzZSA9IHByZXZQcm9taXNlLnRoZW4oXG4gICAgICAgIC8qIHN1Y2Nlc3MgKi9cbiAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXQgPSBzdWNjZXNzKGRhdGEpXG4gICAgICAgICAgaWYgKCFpc1Byb21pc2VMaWtlKHJldCkpIHtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnVGFzayAnICsga2V5ICsgJyBkaWQgbm90IHJldHVybiBhIHByb21pc2UuJ1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9LFxuICAgICAgICAvKiBmYWlsdXJlICovXG4gICAgICAgIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBpZiAoIWZhaWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXQgPSBmYWlsKHJlYXNvbilcbiAgICAgICAgICBpZiAoIWlzUHJvbWlzZUxpa2UocmV0KSkge1xuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdGYWlsIGZvciB0YXNrICcgKyBrZXkgKyAnIGRpZCBub3QgcmV0dXJuIGEgcHJvbWlzZS4nXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeSlcbiAgICB9XG4gICAgcHJldlByb21pc2UgPSBuZXh0UHJvbWlzZVxuICB9KVxuXG4gIHJldHVybiBwcmV2UHJvbWlzZSB8fCBQcm9taXNlLndoZW4oKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL3Euc2VyaWFsLmpzXG4gKiogbW9kdWxlIGlkID0gNTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCdxJylcbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHZhciByZWR1Y3Rpb2Z5ID0gcmVxdWlyZSgnLi9yZWR1Y3Rpb2Z5Jykoc2VydmljZSlcbiAgdmFyIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMnKShzZXJ2aWNlKVxuICB2YXIgcG9zdEFnZ3JlZ2F0aW9uID0gcmVxdWlyZSgnLi9wb3N0QWdncmVnYXRpb24nKShzZXJ2aWNlKVxuXG4gIHZhciBwb3N0QWdncmVnYXRpb25NZXRob2RzID0gXy5rZXlzKHBvc3RBZ2dyZWdhdGlvbilcblxuICByZXR1cm4gZnVuY3Rpb24gZG9RdWVyeShxdWVyeU9iaikge1xuICAgIHZhciBxdWVyeUhhc2ggPSBKU09OLnN0cmluZ2lmeShxdWVyeU9iailcblxuICAgIC8vIEF0dGVtcHQgdG8gcmV1c2UgYW4gZXhhY3QgY29weSBvZiB0aGlzIHF1ZXJ5IHRoYXQgaXMgcHJlc2VudCBlbHNld2hlcmVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcnZpY2UuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2aWNlLmNvbHVtbnNbaV0ucXVlcmllcy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoc2VydmljZS5jb2x1bW5zW2ldLnF1ZXJpZXNbal0uaGFzaCA9PT0gcXVlcnlIYXNoKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UudHJ5KGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlLmNvbHVtbnNbaV0ucXVlcmllc1tqXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAvLyBPcmlnaW5hbCBxdWVyeSBwYXNzZWQgaW4gdG8gcXVlcnkgbWV0aG9kXG4gICAgICBvcmlnaW5hbDogcXVlcnlPYmosXG4gICAgICBoYXNoOiBxdWVyeUhhc2hcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHF1ZXJ5T2JqXG4gICAgaWYgKF8uaXNVbmRlZmluZWQocXVlcnkub3JpZ2luYWwpKSB7XG4gICAgICBxdWVyeS5vcmlnaW5hbCA9IHt9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgc2VsZWN0XG4gICAgaWYgKF8uaXNVbmRlZmluZWQocXVlcnkub3JpZ2luYWwuc2VsZWN0KSkge1xuICAgICAgcXVlcnkub3JpZ2luYWwuc2VsZWN0ID0ge1xuICAgICAgICAkY291bnQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmYXVsdCB0byBncm91cEFsbFxuICAgIHF1ZXJ5Lm9yaWdpbmFsLmdyb3VwQnkgPSBxdWVyeS5vcmlnaW5hbC5ncm91cEJ5IHx8IHRydWVcblxuICAgIC8vIEF0dGFjaCB0aGUgcXVlcnkgYXBpIHRvIHRoZSBxdWVyeSBvYmplY3RcbiAgICBxdWVyeSA9IG5ld1F1ZXJ5T2JqKHF1ZXJ5KVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNvbHVtbihxdWVyeSlcbiAgICAgIC50aGVuKG1ha2VDcm9zc2ZpbHRlckdyb3VwKVxuICAgICAgLnRoZW4oYnVpbGRSZXF1aXJlZENvbHVtbnMpXG4gICAgICAudGhlbihzZXR1cERhdGFMaXN0ZW5lcnMpXG4gICAgICAudGhlbihhcHBseVF1ZXJ5KVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29sdW1uKHF1ZXJ5KSB7XG4gICAgICAvLyBFbnN1cmUgY29sdW1uIGlzIGNyZWF0ZWRcbiAgICAgIHJldHVybiBzZXJ2aWNlLmNvbHVtbih7XG4gICAgICAgIGtleTogcXVlcnkub3JpZ2luYWwuZ3JvdXBCeSxcbiAgICAgICAgdHlwZTogXy5pc1VuZGVmaW5lZChxdWVyeS50eXBlKSA/IG51bGwgOiBxdWVyeS50eXBlLFxuICAgICAgICBhcnJheTogQm9vbGVhbihxdWVyeS5hcnJheSlcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgY29sdW1uIHRvIHRoZSBxdWVyeVxuICAgICAgICB2YXIgY29sdW1uID0gc2VydmljZS5jb2x1bW4uZmluZChxdWVyeS5vcmlnaW5hbC5ncm91cEJ5KVxuICAgICAgICBxdWVyeS5jb2x1bW4gPSBjb2x1bW5cbiAgICAgICAgY29sdW1uLnF1ZXJpZXMucHVzaChxdWVyeSlcbiAgICAgICAgY29sdW1uLnJlbW92ZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnkuY2xlYXIoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUNyb3NzZmlsdGVyR3JvdXAocXVlcnkpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZ3JvdXBpbmcgb24gdGhlIGNvbHVtbnMgZGltZW5zaW9uXG4gICAgICAvLyBVc2luZyBQcm9taXNlIFJlc29sdmUgYWxsb3dzIHN1cHBvcnQgZm9yIGNyb3NzZmlsdGVyIGFzeW5jXG4gICAgICAvLyBUT0RPIGNoZWNrIGlmIHF1ZXJ5IGFscmVhZHkgZXhpc3RzLCBhbmQgdXNlIHRoZSBzYW1lIGJhc2UgcXVlcnkgLy8gaWYgcG9zc2libGVcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocXVlcnkuY29sdW1uLmRpbWVuc2lvbi5ncm91cCgpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZykge1xuICAgICAgICAgIHF1ZXJ5Lmdyb3VwID0gZ1xuICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRDb2x1bW5zKHF1ZXJ5KSB7XG4gICAgICB2YXIgcmVxdWlyZWRDb2x1bW5zID0gZmlsdGVycy5zY2FuRm9yRHluYW1pY0ZpbHRlcnMocXVlcnkub3JpZ2luYWwpXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gc2NhbiB0aGUgZ3JvdXAgZm9yIGFueSBmaWx0ZXJzIHRoYXQgd291bGQgcmVxdWlyZVxuICAgICAgICAvLyB0aGUgZ3JvdXAgdG8gYmUgcmVidWlsdCB3aGVuIGRhdGEgaXMgYWRkZWQgb3IgcmVtb3ZlZCBpbiBhbnkgd2F5LlxuICAgICAgaWYgKHJlcXVpcmVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHJlcXVpcmVkQ29sdW1ucywgZnVuY3Rpb24gKGNvbHVtbktleSkge1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlLmNvbHVtbih7XG4gICAgICAgICAgICBrZXk6IGNvbHVtbktleSxcbiAgICAgICAgICAgIGR5bmFtaWNSZWZlcmVuY2U6IHF1ZXJ5Lmdyb3VwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwRGF0YUxpc3RlbmVycyhxdWVyeSkge1xuICAgICAgLy8gSGVyZSwgd2UgY3JlYXRlIGEgbGlzdGVuZXIgdG8gcmVjcmVhdGUgYW5kIGFwcGx5IHRoZSByZWR1Y2VyIHRvXG4gICAgICAvLyB0aGUgZ3JvdXAgYW55dGltZSB1bmRlcmx5aW5nIGRhdGEgY2hhbmdlc1xuICAgICAgdmFyIHN0b3BEYXRhTGlzdGVuID0gc2VydmljZS5vbkRhdGFDaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXBwbHlRdWVyeShxdWVyeSlcbiAgICAgIH0pXG4gICAgICBxdWVyeS5yZW1vdmVMaXN0ZW5lcnMucHVzaChzdG9wRGF0YUxpc3RlbilcblxuICAgICAgLy8gVGhpcyBpcyBhIHNpbWlsYXIgbGlzdGVuZXIgZm9yIGZpbHRlcmluZyB3aGljaCB3aWxsIChpZiBuZWVkZWQpXG4gICAgICAvLyBydW4gYW55IHBvc3QgYWdncmVnYXRpb25zIG9uIHRoZSBkYXRhIGFmdGVyIGVhY2ggZmlsdGVyIGFjdGlvblxuICAgICAgdmFyIHN0b3BGaWx0ZXJMaXN0ZW4gPSBzZXJ2aWNlLm9uRmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBvc3RBZ2dyZWdhdGUocXVlcnkpXG4gICAgICB9KVxuICAgICAgcXVlcnkucmVtb3ZlTGlzdGVuZXJzLnB1c2goc3RvcEZpbHRlckxpc3RlbilcblxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlRdWVyeShxdWVyeSkge1xuICAgICAgcmV0dXJuIGJ1aWxkUmVkdWNlcihxdWVyeSlcbiAgICAgICAgLnRoZW4oYXBwbHlSZWR1Y2VyKVxuICAgICAgICAudGhlbihhdHRhY2hEYXRhKVxuICAgICAgICAudGhlbihwb3N0QWdncmVnYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUmVkdWNlcihxdWVyeSkge1xuICAgICAgcmV0dXJuIHJlZHVjdGlvZnkocXVlcnkub3JpZ2luYWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWR1Y2VyKSB7XG4gICAgICAgICAgcXVlcnkucmVkdWNlciA9IHJlZHVjZXJcbiAgICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseVJlZHVjZXIocXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocXVlcnkucmVkdWNlcihxdWVyeS5ncm91cCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRhY2hEYXRhKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHF1ZXJ5Lmdyb3VwLmFsbCgpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHF1ZXJ5LmRhdGEgPSBkYXRhXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zdEFnZ3JlZ2F0ZShxdWVyeSkge1xuICAgICAgaWYgKHF1ZXJ5LnBvc3RBZ2dyZWdhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBJZiB0aGUgcXVlcnkgaXMgdXNlZCBieSAyKyBwb3N0IGFnZ3JlZ2F0aW9ucywgd2UgbmVlZCB0byBsb2NrXG4gICAgICAgIC8vIGl0IGFnYWluc3QgZ2V0dGluZyBtdXRhdGVkIGJ5IHRoZSBwb3N0LWFnZ3JlZ2F0aW9uc1xuICAgICAgICBxdWVyeS5sb2NrZWQgPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAocXVlcnkucG9zdEFnZ3JlZ2F0aW9ucywgZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgcmV0dXJuIHBvc3QoKVxuICAgICAgfSkpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdRdWVyeU9iaihxLCBwYXJlbnQpIHtcbiAgICAgIHZhciBsb2NrZWQgPSBmYWxzZVxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gcVxuICAgICAgICBxID0ge31cbiAgICAgICAgbG9ja2VkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBBc3NpZ24gdGhlIHJlZ3VsYXIgcXVlcnkgcHJvcGVydGllc1xuICAgICAgXy5hc3NpZ24ocSwge1xuICAgICAgICAvLyBUaGUgVW5pdmVyc2UgZm9yIGNvbnRpbnVvdXMgcHJvbWlzZSBjaGFpbmluZ1xuICAgICAgICB1bml2ZXJzZTogc2VydmljZSxcbiAgICAgICAgLy8gQ3Jvc3NmaWx0ZXIgaW5zdGFuY2VcbiAgICAgICAgY3Jvc3NmaWx0ZXI6IHNlcnZpY2UuY2YsXG5cbiAgICAgICAgLy8gcGFyZW50IEluZm9ybWF0aW9uXG4gICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICBjb2x1bW46IHBhcmVudC5jb2x1bW4sXG4gICAgICAgIGRpbWVuc2lvbjogcGFyZW50LmRpbWVuc2lvbixcbiAgICAgICAgZ3JvdXA6IHBhcmVudC5ncm91cCxcbiAgICAgICAgcmVkdWNlcjogcGFyZW50LnJlZHVjZXIsXG4gICAgICAgIG9yaWdpbmFsOiBwYXJlbnQub3JpZ2luYWwsXG4gICAgICAgIGhhc2g6IHBhcmVudC5oYXNoLFxuXG4gICAgICAgIC8vIEl0J3Mgb3duIHJlbW92ZUxpc3RlbmVyc1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnM6IFtdLFxuXG4gICAgICAgIC8vIEl0J3Mgb3duIHBvc3RBZ2dyZWdhdGlvbnNcbiAgICAgICAgcG9zdEFnZ3JlZ2F0aW9uczogW10sXG5cbiAgICAgICAgLy8gRGF0YSBtZXRob2RcbiAgICAgICAgbG9ja2VkOiBsb2NrZWQsXG4gICAgICAgIGxvY2s6IGxvY2ssXG4gICAgICAgIHVubG9jazogdW5sb2NrLFxuICAgICAgICAvLyBEaXNwb3NhbCBtZXRob2RcbiAgICAgICAgY2xlYXI6IGNsZWFyUXVlcnksXG4gICAgICB9KVxuXG4gICAgICBfLmZvckVhY2gocG9zdEFnZ3JlZ2F0aW9uTWV0aG9kcywgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBxW21ldGhvZF0gPSBwb3N0QWdncmVnYXRlTWV0aG9kV3JhcChwb3N0QWdncmVnYXRpb25bbWV0aG9kXSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBxXG5cbiAgICAgIGZ1bmN0aW9uIGxvY2soc2V0KSB7XG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZChzZXQpKSB7XG4gICAgICAgICAgcS5sb2NrZWQgPSBCb29sZWFuKHNldClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBxLmxvY2tlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdW5sb2NrKCkge1xuICAgICAgICBxLmxvY2tlZCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFyUXVlcnkoKSB7XG4gICAgICAgIF8uZm9yRWFjaChxLnJlbW92ZUxpc3RlbmVycywgZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICBsKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UudHJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcS5ncm91cC5kaXNwb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHEuY29sdW1uLnF1ZXJpZXMuc3BsaWNlKHEuY29sdW1uLnF1ZXJpZXMuaW5kZXhPZihxKSwgMSlcbiAgICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlY3ljbGUgdGhlIGNvbHVtbiBpZiB0aGVyZSBhcmUgbm8gcXVlcmllcyBhY3RpdmUgb24gaXRcbiAgICAgICAgICBpZiAoIXEuY29sdW1uLnF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZS5jbGVhcihxLmNvbHVtbi5rZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcG9zdEFnZ3JlZ2F0ZU1ldGhvZFdyYXAocG9zdE1ldGhvZCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgIHZhciBzdWIgPSB7fVxuICAgICAgICAgIG5ld1F1ZXJ5T2JqKHN1YiwgcSlcbiAgICAgICAgICBhcmdzLnVuc2hpZnQoc3ViLCBxKVxuXG4gICAgICAgICAgcS5wb3N0QWdncmVnYXRpb25zLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHBvc3RNZXRob2QuYXBwbHkobnVsbCwgYXJncykpXG4gICAgICAgICAgICAgIC50aGVuKHBvc3RBZ2dyZWdhdGVDaGlsZHJlbilcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3N0TWV0aG9kLmFwcGx5KG51bGwsIGFyZ3MpKVxuICAgICAgICAgICAgLnRoZW4ocG9zdEFnZ3JlZ2F0ZUNoaWxkcmVuKVxuXG4gICAgICAgICAgZnVuY3Rpb24gcG9zdEFnZ3JlZ2F0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RBZ2dyZWdhdGUoc3ViKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL3F1ZXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuLy8gdmFyIF8gPSByZXF1aXJlKCcuL2xvZGFzaCcpIC8vIF8gaXMgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hvcnRoYW5kTGFiZWxzOiB7XG4gICAgJGNvdW50OiAnY291bnQnLFxuICAgICRzdW06ICdzdW0nLFxuICAgICRhdmc6ICdhdmcnLFxuICAgICRtaW46ICdtaW4nLFxuICAgICRtYXg6ICdtYXgnLFxuICAgICRtZWQ6ICdtZWQnLFxuICAgICRzdW1TcTogJ3N1bVNxJyxcbiAgICAkc3RkOiAnc3RkJyxcbiAgfSxcbiAgYWdncmVnYXRvcnM6IHtcbiAgICAkY291bnQ6ICRjb3VudCxcbiAgICAkc3VtOiAkc3VtLFxuICAgICRhdmc6ICRhdmcsXG4gICAgJG1pbjogJG1pbixcbiAgICAkbWF4OiAkbWF4LFxuICAgICRtZWQ6ICRtZWQsXG4gICAgJHN1bVNxOiAkc3VtU3EsXG4gICAgJHN0ZDogJHN0ZCxcbiAgICAkdmFsdWVMaXN0OiAkdmFsdWVMaXN0LFxuICAgICRkYXRhTGlzdDogJGRhdGFMaXN0LFxuICB9XG59XG5cbi8vIEFnZ3JlZ2F0b3JzXG5cbmZ1bmN0aW9uICRjb3VudChyZWR1Y2VyLyogLCB2YWx1ZSAqLykge1xuICByZXR1cm4gcmVkdWNlci5jb3VudCh0cnVlKVxufVxuXG5mdW5jdGlvbiAkc3VtKHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLnN1bSh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJGF2ZyhyZWR1Y2VyLCB2YWx1ZSkge1xuICByZXR1cm4gcmVkdWNlci5hdmcodmFsdWUpXG59XG5cbmZ1bmN0aW9uICRtaW4ocmVkdWNlciwgdmFsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZXIubWluKHZhbHVlKVxufVxuXG5mdW5jdGlvbiAkbWF4KHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLm1heCh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJG1lZChyZWR1Y2VyLCB2YWx1ZSkge1xuICByZXR1cm4gcmVkdWNlci5tZWRpYW4odmFsdWUpXG59XG5cbmZ1bmN0aW9uICRzdW1TcShyZWR1Y2VyLCB2YWx1ZSkge1xuICByZXR1cm4gcmVkdWNlci5zdW1PZlNxKHZhbHVlKVxufVxuXG5mdW5jdGlvbiAkc3RkKHJlZHVjZXIsIHZhbHVlKSB7XG4gIHJldHVybiByZWR1Y2VyLnN0ZCh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gJHZhbHVlTGlzdChyZWR1Y2VyLCB2YWx1ZSkge1xuICByZXR1cm4gcmVkdWNlci52YWx1ZUxpc3QodmFsdWUpXG59XG5cbmZ1bmN0aW9uICRkYXRhTGlzdChyZWR1Y2VyLyogLCB2YWx1ZSAqLykge1xuICByZXR1cm4gcmVkdWNlci5kYXRhTGlzdCh0cnVlKVxufVxuXG4vLyBUT0RPIGhpc3RvZ3JhbXNcbi8vIFRPRE8gZXhjZXB0aW9uc1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL3JlZHVjdGlvQWdncmVnYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVkdWN0aW8gPSByZXF1aXJlKCdyZWR1Y3RpbycpXG5cbnZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gnKVxudmFyIHJBZ2dyZWdhdG9ycyA9IHJlcXVpcmUoJy4vcmVkdWN0aW9BZ2dyZWdhdG9ycycpXG4vLyB2YXIgZXhwcmVzc2lvbnMgPSByZXF1aXJlKCcuL2V4cHJlc3Npb25zJykgIC8vIGV4cG9yZXNzaW9uIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcbnZhciBhZ2dyZWdhdGlvbiA9IHJlcXVpcmUoJy4vYWdncmVnYXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHZhciBmaWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzJykoc2VydmljZSlcblxuICByZXR1cm4gZnVuY3Rpb24gcmVkdWN0aW9meShxdWVyeSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWN0aW8oKVxuICAgIC8vIHZhciBncm91cEJ5ID0gcXVlcnkuZ3JvdXBCeSAvLyBncm91cEJ5IGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcbiAgICBhZ2dyZWdhdGVPck5lc3QocmVkdWNlciwgcXVlcnkuc2VsZWN0KVxuXG4gICAgaWYgKHF1ZXJ5LmZpbHRlcikge1xuICAgICAgdmFyIGZpbHRlckZ1bmN0aW9uID0gZmlsdGVycy5tYWtlRnVuY3Rpb24ocXVlcnkuZmlsdGVyKVxuICAgICAgaWYgKGZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJlZHVjZXIuZmlsdGVyKGZpbHRlckZ1bmN0aW9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVkdWNlcilcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVjdXJzaXZlbHkgZmluZCB0aGUgZmlyc3QgbGV2ZWwgb2YgcmVkdWN0aW8gbWV0aG9kcyBpblxuICAgIC8vIGVhY2ggb2JqZWN0IGFuZCBhZGRzIHRoYXQgcmVkdWN0aW9uIG1ldGhvZCB0byByZWR1Y3Rpb1xuICAgIGZ1bmN0aW9uIGFnZ3JlZ2F0ZU9yTmVzdChyZWR1Y2VyLCBzZWxlY3RzKSB7XG4gICAgICAvLyBTb3J0IHNvIG5lc3RlZCB2YWx1ZXMgYXJlIGNhbGN1bGF0ZWQgbGFzdCBieSByZWR1Y3RpbydzIC52YWx1ZSBtZXRob2RcbiAgICAgIHZhciBzb3J0ZWRTZWxlY3RLZXlWYWx1ZSA9IF8uc29ydEJ5KFxuICAgICAgICBfLm1hcChzZWxlY3RzLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICBpZiAockFnZ3JlZ2F0b3JzLmFnZ3JlZ2F0b3JzW3Mua2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSlcblxuICAgICAgLy8gZGl2ZSBpbnRvIGVhY2gga2V5L3ZhbHVlXG4gICAgICByZXR1cm4gXy5mb3JFYWNoKHNvcnRlZFNlbGVjdEtleVZhbHVlLCBmdW5jdGlvbiAocykge1xuICAgICAgICAvLyBGb3VuZCBhIFJlZHVjdGlvIEFnZ3JlZ2F0aW9uXG4gICAgICAgIGlmIChyQWdncmVnYXRvcnMuYWdncmVnYXRvcnNbcy5rZXldKSB7XG4gICAgICAgICAgLy8gQnVpbGQgdGhlIHZhbHVlQWNjZXNzb3JGdW5jdGlvblxuICAgICAgICAgIHZhciBhY2Nlc3NvciA9IGFnZ3JlZ2F0aW9uLm1ha2VWYWx1ZUFjY2Vzc29yKHMudmFsdWUpXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHJlZHVjZXIgd2l0aCB0aGUgVmFsdWVBY2Nlc3NvckZ1bmN0aW9uIHRvIHRoZSByZWR1Y2VyXG4gICAgICAgICAgcmVkdWNlciA9IHJBZ2dyZWdhdG9ycy5hZ2dyZWdhdG9yc1tzLmtleV0ocmVkdWNlciwgYWNjZXNzb3IpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3VuZCBhIHRvcCBsZXZlbCBrZXkgdmFsdWUgdGhhdCBpcyBub3QgYW4gYWdncmVnYXRpb24gb3IgYVxuICAgICAgICAvLyBuZXN0ZWQgb2JqZWN0LiBUaGlzIGlzIHVuYWNjZXB0YWJsZS5cbiAgICAgICAgaWYgKCFfLmlzT2JqZWN0KHMudmFsdWUpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVzdGVkIHNlbGVjdHMgbXVzdCBiZSBhbiBvYmplY3QnLCBzLmtleSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0J3MgYW5vdGhlciBuZXN0ZWQgb2JqZWN0LCBzbyBqdXN0IHJlcGVhdCB0aGlzIHByb2Nlc3Mgb24gaXRcbiAgICAgICAgcmVkdWNlciA9IGFnZ3JlZ2F0ZU9yTmVzdChyZWR1Y2VyLnZhbHVlKHMua2V5KSwgcy52YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91bml2ZXJzZS9zcmMvcmVkdWN0aW9meS5qc1xuICoqIG1vZHVsZSBpZCA9IDUzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbnJlcXVpcmUoJy4vcS5zZXJpYWwnKVxuXG4vLyB2YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ3EnKSAgLy8gUHJvbWlzZSBpcyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkXG52YXIgXyA9IHJlcXVpcmUoJy4vbG9kYXNoJylcblxubW9kdWxlLmV4cG9ydHMgPSB1bml2ZXJzZVxuXG5mdW5jdGlvbiB1bml2ZXJzZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBzZXJ2aWNlID0ge1xuICAgIG9wdGlvbnM6IF8uYXNzaWduKHt9LCBvcHRpb25zKSxcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBmaWx0ZXJzOiB7fSxcbiAgICBkYXRhTGlzdGVuZXJzOiBbXSxcbiAgICBmaWx0ZXJMaXN0ZW5lcnM6IFtdLFxuICB9XG5cbiAgdmFyIGNmID0gcmVxdWlyZSgnLi9jcm9zc2ZpbHRlcicpKHNlcnZpY2UpXG4gIHZhciBmaWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzJykoc2VydmljZSlcblxuICBkYXRhID0gY2YuZ2VuZXJhdGVDb2x1bW5zKGRhdGEpXG5cbiAgcmV0dXJuIGNmLmJ1aWxkKGRhdGEpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHNlcnZpY2UuY2YgPSBkYXRhXG4gICAgICByZXR1cm4gXy5hc3NpZ24oc2VydmljZSwge1xuICAgICAgICBhZGQ6IGNmLmFkZCxcbiAgICAgICAgcmVtb3ZlOiBjZi5yZW1vdmUsXG4gICAgICAgIGNvbHVtbjogcmVxdWlyZSgnLi9jb2x1bW4nKShzZXJ2aWNlKSxcbiAgICAgICAgcXVlcnk6IHJlcXVpcmUoJy4vcXVlcnknKShzZXJ2aWNlKSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXJzLmZpbHRlcixcbiAgICAgICAgZmlsdGVyQWxsOiBmaWx0ZXJzLmZpbHRlckFsbCxcbiAgICAgICAgYXBwbHlGaWx0ZXJzOiBmaWx0ZXJzLmFwcGx5RmlsdGVycyxcbiAgICAgICAgY2xlYXI6IHJlcXVpcmUoJy4vY2xlYXInKShzZXJ2aWNlKSxcbiAgICAgICAgZGVzdHJveTogcmVxdWlyZSgnLi9kZXN0cm95Jykoc2VydmljZSksXG4gICAgICAgIG9uRGF0YUNoYW5nZTogb25EYXRhQ2hhbmdlLFxuICAgICAgICBvbkZpbHRlcjogb25GaWx0ZXIsXG4gICAgICB9KVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gb25EYXRhQ2hhbmdlKGNiKSB7XG4gICAgc2VydmljZS5kYXRhTGlzdGVuZXJzLnB1c2goY2IpXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUxpc3RlbmVycy5zcGxpY2Uoc2VydmljZS5kYXRhTGlzdGVuZXJzLmluZGV4T2YoY2IpLCAxKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRmlsdGVyKGNiKSB7XG4gICAgc2VydmljZS5maWx0ZXJMaXN0ZW5lcnMucHVzaChjYilcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2VydmljZS5maWx0ZXJMaXN0ZW5lcnMuc3BsaWNlKHNlcnZpY2UuZmlsdGVyTGlzdGVuZXJzLmluZGV4T2YoY2IpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdW5pdmVyc2Uvc3JjL3VuaXZlcnNlLmpzXG4gKiogbW9kdWxlIGlkID0gNTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWhCQTtBQWlCQTtBQUFBO0FBQ0E7QUFDQTs7QUFwREE7QUFDQTtBQXNEQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pnRUE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3gzQ0E7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdDFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3I2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==