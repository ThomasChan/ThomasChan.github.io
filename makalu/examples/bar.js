webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(16);

	var _moment = __webpack_require__(13);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(17);

	var _data = __webpack_require__(7);

	var _GroupBy = __webpack_require__(38);

	var _GroupBy2 = _interopRequireDefault(_GroupBy);

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
	    var BarSource = (0, _GroupBy2.default)(_source, ['metric'], ['value', 'avalue', 'bvalue'], ['sum', 'sum', 'sum']);
	    return _react2.default.createElement(_src.Bar, _defineProperty({
	      title: this.state.title,
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

/***/ 7:
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

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(8);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var GroupBy = function () {
	  var has = function has(obj, target) {
	    return _lodash2.default.some(obj, function (value) {
	      return _lodash2.default.isEqual(value, target);
	    });
	  };

	  var keys = function keys(data, names) {
	    return _lodash2.default.reduce(data, function (memo, item) {
	      var key = _lodash2.default.pick(item, names);
	      if (!has(memo, key)) {
	        memo.push(key);
	      }
	      return memo;
	    }, []);
	  };

	  var group = function group(data, names) {
	    var stems = keys(data, names);
	    return _lodash2.default.map(stems, function (stem) {
	      return {
	        key: stem,
	        vals: _lodash2.default.map(_lodash2.default.filter(data, stem), function (item) {
	          return _lodash2.default.omit(item, names);
	        })
	      };
	    });
	  };

	  return function (data, dimensions, metrics, converters) {
	    var result = _lodash2.default.map(group(data, dimensions), function (row) {
	      var rowResult = {};
	      _lodash2.default.map(metrics, function (metric, i) {
	        if (!converters[i]) {
	          converters[i] = 'first';
	        }
	        if (typeof GroupByFuncs[converters[i]] === 'function') {
	          rowResult[metric] = GroupByFuncs[converters[i]](metric, row.vals);
	        } else {
	          rowResult[metric] = GroupByFuncs.first(metric, row.vals);
	        }
	      });
	      return _lodash2.default.extend({}, row.key, rowResult);
	    });
	    return result;
	  };
	}();

	var GroupByFuncs = {};

	GroupByFuncs.sum = function (metric, item) {
	  return _lodash2.default.reduce(item, function (memo, node) {
	    return memo + Number(node[metric]);
	  }, 0);
	};

	GroupByFuncs.max = function (metric, item) {
	  return Math.max.apply(Math, _toConsumableArray(_lodash2.default.map(item, function (node) {
	    return Number(node[metric]);
	  })));
	};

	GroupByFuncs.min = function (metric, item) {
	  return Math.min.apply(Math, _toConsumableArray(_lodash2.default.map(item, function (node) {
	    return Number(node[metric]);
	  })));
	};

	GroupByFuncs.avg = function (metric, item) {
	  return _lodash2.default.reduce(item, function (memo, node) {
	    return memo + Number(node[metric]);
	  }, 0) / item.length;
	};

	GroupByFuncs.last = function (metric, item) {
	  return item[item.length - 1][metric];
	};

	GroupByFuncs.first = function (metric, item) {
	  return item[0][metric];
	};

	GroupByFuncs.array = function (metric, item) {
	  return _lodash2.default.map(item, function (node) {
	    return Number(node[metric]);
	  });
	};

	exports.default = GroupBy;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2Jhci5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL0dyb3VwQnkuanM/MTg5MioqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgR3JvdXBCeSBmcm9tICcuL2FnZ3JlZ2F0aW9uTWV0aG9kcy9Hcm91cEJ5JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG4gICAgY29uc3QgQmFyU291cmNlID0gR3JvdXBCeShfc291cmNlLFxuICAgICAgWydtZXRyaWMnXSxcbiAgICAgIFsndmFsdWUnLCAnYXZhbHVlJywgJ2J2YWx1ZSddLFxuICAgICAgWydzdW0nLCAnc3VtJywgJ3N1bSddLFxuICAgICk7XG4gICAgcmV0dXJuIDxCYXJcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgIGhlaWdodD17d2luZG93LmlubmVySGVpZ2h0ICogLjZ9XG4gICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICBzb3VyY2U9e0JhclNvdXJjZX1cbiAgICAgIGdyb3VwQXhpcz17YG1ldHJpY2B9XG4gICAgICBncm91cEF4aXNEb21haW49e21ldHJpY3N9XG4gICAgICB5QXhpcz17W2B2YWx1ZWAsIGBhdmFsdWVgLCBgYnZhbHVlYF19XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9iYXIubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDIwMTc7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgR3JvdXBCeSA9ICgoKSA9PiB7XG4gIGNvbnN0IGhhcyA9IChvYmosIHRhcmdldCkgPT4ge1xuICAgIHJldHVybiBfLnNvbWUob2JqLCB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gXy5pc0VxdWFsKHZhbHVlLCB0YXJnZXQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGtleXMgPSAoZGF0YSwgbmFtZXMpID0+IHtcbiAgICByZXR1cm4gXy5yZWR1Y2UoZGF0YSwgKG1lbW8sIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IF8ucGljayhpdGVtLCBuYW1lcyk7XG4gICAgICBpZiAoIWhhcyhtZW1vLCBrZXkpKSB7XG4gICAgICAgIG1lbW8ucHVzaChrZXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwgW10pO1xuICB9O1xuXG4gIGNvbnN0IGdyb3VwID0gKGRhdGEsIG5hbWVzKSA9PiB7XG4gICAgY29uc3Qgc3RlbXMgPSBrZXlzKGRhdGEsIG5hbWVzKTtcbiAgICByZXR1cm4gXy5tYXAoc3RlbXMsIHN0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBzdGVtLFxuICAgICAgICB2YWxzOiBfLm1hcChfLmZpbHRlcihkYXRhLCBzdGVtKSwgaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIF8ub21pdChpdGVtLCBuYW1lcyk7XG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKGRhdGEsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGNvbnZlcnRlcnMpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBfLm1hcChncm91cChkYXRhLCBkaW1lbnNpb25zKSwgcm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd1Jlc3VsdCA9IHt9O1xuICAgICAgXy5tYXAobWV0cmljcywgKG1ldHJpYywgaSkgPT4ge1xuICAgICAgICBpZiAoIWNvbnZlcnRlcnNbaV0pIHtcbiAgICAgICAgICBjb252ZXJ0ZXJzW2ldID0gJ2ZpcnN0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIEdyb3VwQnlGdW5jc1tjb252ZXJ0ZXJzW2ldXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJvd1Jlc3VsdFttZXRyaWNdID0gR3JvdXBCeUZ1bmNzW2NvbnZlcnRlcnNbaV1dKG1ldHJpYywgcm93LnZhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvd1Jlc3VsdFttZXRyaWNdID0gR3JvdXBCeUZ1bmNzLmZpcnN0KG1ldHJpYywgcm93LnZhbHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfLmV4dGVuZCh7fSwgcm93LmtleSwgcm93UmVzdWx0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSkoKTtcblxuY29uc3QgR3JvdXBCeUZ1bmNzID0ge307XG5cbkdyb3VwQnlGdW5jcy5zdW0gPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShpdGVtLCAobWVtbywgbm9kZSkgPT4ge1xuICAgIHJldHVybiBtZW1vICsgTnVtYmVyKG5vZGVbbWV0cmljXSk7XG4gIH0sIDApO1xufTtcblxuR3JvdXBCeUZ1bmNzLm1heCA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIE1hdGgubWF4KC4uLihfLm1hcChpdGVtLCBub2RlID0+IE51bWJlcihub2RlW21ldHJpY10pKSkpO1xufTtcblxuR3JvdXBCeUZ1bmNzLm1pbiA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIE1hdGgubWluKC4uLihfLm1hcChpdGVtLCBub2RlID0+IE51bWJlcihub2RlW21ldHJpY10pKSkpO1xufTtcblxuR3JvdXBCeUZ1bmNzLmF2ZyA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGl0ZW0sIChtZW1vLCBub2RlKSA9PiB7XG4gICAgcmV0dXJuIG1lbW8gKyBOdW1iZXIobm9kZVttZXRyaWNdKTtcbiAgfSwgMCkgLyBpdGVtLmxlbmd0aDtcbn07XG5cbkdyb3VwQnlGdW5jcy5sYXN0ID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gaXRlbVtpdGVtLmxlbmd0aCAtIDFdW21ldHJpY107XG59O1xuXG5Hcm91cEJ5RnVuY3MuZmlyc3QgPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBpdGVtWzBdW21ldHJpY107XG59O1xuXG5Hcm91cEJ5RnVuY3MuYXJyYXkgPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBfLm1hcChpdGVtLCBub2RlID0+IE51bWJlcihub2RlW21ldHJpY10pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwQnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9hZ2dyZWdhdGlvbk1ldGhvZHMvR3JvdXBCeS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFmQTtBQWdCQTtBQUFBO0FBQ0E7QUFDQTs7QUFsREE7QUFDQTtBQW9EQTs7Ozs7Ozs7Ozs7OztBQzVEQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBREE7QUFGQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBVEE7QUFVQTtBQVpBO0FBY0E7QUFmQTtBQTdCQTtBQUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==