webpackJsonp([9],{

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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
	    var PointSource = (0, _GroupBy2.default)(_source, ['metric'], ['avalue', 'bvalue', 'value'], ['sum', 'sum', 'sum']);
	    var bvalues = [];
	    var avalues = [];
	    var values = [];
	    PointSource.map(function (v) {
	      if (v.bvalue instanceof Array) {
	        bvalues.push.apply(bvalues, _toConsumableArray(v.bvalue));
	      } else {
	        bvalues.push(v.bvalue);
	      }
	      if (v.avalue instanceof Array) {
	        avalues.push.apply(avalues, _toConsumableArray(v.avalue));
	      } else {
	        avalues.push(v.avalue);
	      }
	      if (v.value instanceof Array) {
	        values.push.apply(values, _toConsumableArray(v.value));
	      } else {
	        values.push(v.value);
	      }
	    });

	    return _react2.default.createElement(_src.Point, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: PointSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      sizeAxis: 'bvalue',
	      sizeAxisDomain: [Math.min.apply(Math, bvalues), Math.max.apply(Math, bvalues)],
	      xAxis: 'avalue',
	      xAxisDomain: [Math.min.apply(Math, avalues), Math.max.apply(Math, avalues)],
	      xAxisFormat: function xAxisFormat(v) {
	        return parseInt(v / 1000) + '\u5343';
	      },
	      yAxisFormat: function yAxisFormat(v) {
	        return parseInt(v / 1000) + '\u5343';
	      },
	      yAxis: 'value',
	      yAxisDomain: [Math.min.apply(Math, values), Math.max.apply(Math, values)],
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
	      } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcG9pbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvcG9pbnQubWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoqKioqKioiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2FnZ3JlZ2F0aW9uTWV0aG9kcy9Hcm91cEJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9zcmMnO1xuXG5pbXBvcnQgeyBzb3VyY2UsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGRhdGVzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCBHcm91cEJ5IGZyb20gJy4vYWdncmVnYXRpb25NZXRob2RzL0dyb3VwQnknO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBfc291cmNlID0gc291cmNlO1xuICAgIGNvbnN0IHsgdGltZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGltZUZpbHRlcikge1xuICAgICAgX3NvdXJjZSA9IF9zb3VyY2UuZmlsdGVyKHYgPT4gdi50aW1lID49IHRpbWVGaWx0ZXJbMF0gJiYgdi50aW1lIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCBQb2ludFNvdXJjZSA9IEdyb3VwQnkoX3NvdXJjZSxcbiAgICAgIFsnbWV0cmljJ10sXG4gICAgICBbJ2F2YWx1ZScsICdidmFsdWUnLCAndmFsdWUnXSxcbiAgICAgIFsnc3VtJywgJ3N1bScsICdzdW0nXSxcbiAgICApO1xuICAgIGNvbnN0IGJ2YWx1ZXMgPSBbXTtcbiAgICBjb25zdCBhdmFsdWVzID0gW107XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgUG9pbnRTb3VyY2UubWFwKHYgPT4ge1xuICAgICAgaWYgKHYuYnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYnZhbHVlcy5wdXNoKC4uLnYuYnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ2YWx1ZXMucHVzaCh2LmJ2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodi5hdmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBhdmFsdWVzLnB1c2goLi4udi5hdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXZhbHVlcy5wdXNoKHYuYXZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh2LnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goLi4udi52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaCh2LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiA8UG9pbnRcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgIGhlaWdodD17d2luZG93LmlubmVySGVpZ2h0ICogLjZ9XG4gICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICBzb3VyY2U9e1BvaW50U291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXsnbWV0cmljJ31cbiAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgIHNpemVBeGlzPXsnYnZhbHVlJ31cbiAgICAgIHNpemVBeGlzRG9tYWluPXtbTWF0aC5taW4oLi4uYnZhbHVlcyksIE1hdGgubWF4KC4uLmJ2YWx1ZXMpXX1cbiAgICAgIHhBeGlzPXsnYXZhbHVlJ31cbiAgICAgIHhBeGlzRG9tYWluPXtbTWF0aC5taW4oLi4uYXZhbHVlcyksIE1hdGgubWF4KC4uLmF2YWx1ZXMpXX1cbiAgICAgIHhBeGlzRm9ybWF0PXt2ID0+IGAke3BhcnNlSW50KHYgLyAxMDAwKX3ljYNgfVxuICAgICAgeUF4aXNGb3JtYXQ9e3YgPT4gYCR7cGFyc2VJbnQodiAvIDEwMDApfeWNg2B9XG4gICAgICB5QXhpcz17J3ZhbHVlJ31cbiAgICAgIHlBeGlzRG9tYWluPXtbTWF0aC5taW4oLi4udmFsdWVzKSwgTWF0aC5tYXgoLi4udmFsdWVzKV19XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9wb2ludC5tZFxuICoqLyIsIlxuY29uc3QgZmlyc3RfeWVhcl9kYXRhID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgYW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgeWV0YW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgZGF0ZXMgPSAoKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOTcwOyBpIDwgMjAxNzsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goK25ldyBEYXRlKFN0cmluZyhpKSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KSgpO1xuY29uc3QgbWFrZUZha2VEYXRhID0gZmFrZSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZGF0ZXMubWFwKGQgPT4ge1xuICAgIGxldCBkZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmFrZSkpO1xuICAgIGRkID0gZGQubWFwKGRkZCA9PiB7XG4gICAgICByZXR1cm4gZGRkLm1hcChkZGRkID0+IHtcbiAgICAgICAgZGRkZCA9IGRkZGQgKiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBkZGRkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGF0YS5wdXNoKGRkKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRhdGEgPSBtYWtlRmFrZURhdGEoZmlyc3RfeWVhcl9kYXRhKTtcbmNvbnN0IGFkYXRhID0gbWFrZUZha2VEYXRhKGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBzaXplZGF0YSA9IG1ha2VGYWtlRGF0YSh5ZXRhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3QgZGltZW5zaW9ucyA9IFsn5YyX5LqsJywgJ+S4iua1tycsICflub/lt54nLCAn5rex5ZyzJ107XG5jb25zdCBtZXRyaWNzID0gWyfln47luILng63luqYnLCAn6KGjJywgJ+mjnycsICfkvY8nLCAn6Jaq6LWEJywgJ+ihjCcsICfmsJTlgJknLCAn5Yy755aXJywgJ+aVmeiCsiddO1xubGV0IHNvdXJjZSA9IFtdO1xuZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRlcy5sZW5ndGg7IHkrKykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1ldHJpY3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgY2l0eTogZGltZW5zaW9uc1tpXSxcbiAgICAgICAgbWV0cmljOiBtZXRyaWNzW3hdLFxuICAgICAgICB2YWx1ZTogZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYXZhbHVlOiBhZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYnZhbHVlOiBzaXplZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgdGltZTogZGF0ZXNbeV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2UsXG4gIG1ldHJpY3MsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGVzLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2RhdGEuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBHcm91cEJ5ID0gKCgpID0+IHtcbiAgY29uc3QgaGFzID0gKG9iaiwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIF8uc29tZShvYmosIHZhbHVlID0+IHtcbiAgICAgIHJldHVybiBfLmlzRXF1YWwodmFsdWUsIHRhcmdldCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qga2V5cyA9IChkYXRhLCBuYW1lcykgPT4ge1xuICAgIHJldHVybiBfLnJlZHVjZShkYXRhLCAobWVtbywgaXRlbSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXy5waWNrKGl0ZW0sIG5hbWVzKTtcbiAgICAgIGlmICghaGFzKG1lbW8sIGtleSkpIHtcbiAgICAgICAgbWVtby5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9LCBbXSk7XG4gIH07XG5cbiAgY29uc3QgZ3JvdXAgPSAoZGF0YSwgbmFtZXMpID0+IHtcbiAgICBjb25zdCBzdGVtcyA9IGtleXMoZGF0YSwgbmFtZXMpO1xuICAgIHJldHVybiBfLm1hcChzdGVtcywgc3RlbSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHN0ZW0sXG4gICAgICAgIHZhbHM6IF8ubWFwKF8uZmlsdGVyKGRhdGEsIHN0ZW0pLCBpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gXy5vbWl0KGl0ZW0sIG5hbWVzKTtcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoZGF0YSwgZGltZW5zaW9ucywgbWV0cmljcywgY29udmVydGVycykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IF8ubWFwKGdyb3VwKGRhdGEsIGRpbWVuc2lvbnMpLCByb3cgPT4ge1xuICAgICAgY29uc3Qgcm93UmVzdWx0ID0ge307XG4gICAgICBfLm1hcChtZXRyaWNzLCAobWV0cmljLCBpKSA9PiB7XG4gICAgICAgIGlmICghY29udmVydGVyc1tpXSkge1xuICAgICAgICAgIGNvbnZlcnRlcnNbaV0gPSAnZmlyc3QnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgR3JvdXBCeUZ1bmNzW2NvbnZlcnRlcnNbaV1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcm93UmVzdWx0W21ldHJpY10gPSBHcm91cEJ5RnVuY3NbY29udmVydGVyc1tpXV0obWV0cmljLCByb3cudmFscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93UmVzdWx0W21ldHJpY10gPSBHcm91cEJ5RnVuY3MuZmlyc3QobWV0cmljLCByb3cudmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF8uZXh0ZW5kKHt9LCByb3cua2V5LCByb3dSZXN1bHQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KSgpO1xuXG5jb25zdCBHcm91cEJ5RnVuY3MgPSB7fTtcblxuR3JvdXBCeUZ1bmNzLnN1bSA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGl0ZW0sIChtZW1vLCBub2RlKSA9PiB7XG4gICAgcmV0dXJuIG1lbW8gKyBOdW1iZXIobm9kZVttZXRyaWNdKTtcbiAgfSwgMCk7XG59O1xuXG5Hcm91cEJ5RnVuY3MubWF4ID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gTWF0aC5tYXgoLi4uKF8ubWFwKGl0ZW0sIG5vZGUgPT4gTnVtYmVyKG5vZGVbbWV0cmljXSkpKSk7XG59O1xuXG5Hcm91cEJ5RnVuY3MubWluID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gTWF0aC5taW4oLi4uKF8ubWFwKGl0ZW0sIG5vZGUgPT4gTnVtYmVyKG5vZGVbbWV0cmljXSkpKSk7XG59O1xuXG5Hcm91cEJ5RnVuY3MuYXZnID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gXy5yZWR1Y2UoaXRlbSwgKG1lbW8sIG5vZGUpID0+IHtcbiAgICByZXR1cm4gbWVtbyArIE51bWJlcihub2RlW21ldHJpY10pO1xuICB9LCAwKSAvIGl0ZW0ubGVuZ3RoO1xufTtcblxuR3JvdXBCeUZ1bmNzLmxhc3QgPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBpdGVtW2l0ZW0ubGVuZ3RoIC0gMV1bbWV0cmljXTtcbn07XG5cbkdyb3VwQnlGdW5jcy5maXJzdCA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIGl0ZW1bMF1bbWV0cmljXTtcbn07XG5cbkdyb3VwQnlGdW5jcy5hcnJheSA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIF8ubWFwKGl0ZW0sIG5vZGUgPT4gTnVtYmVyKG5vZGVbbWV0cmljXSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FnZ3JlZ2F0aW9uTWV0aG9kcy9Hcm91cEJ5LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQTdFQTtBQUNBO0FBK0VBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFEQTtBQUZBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFUQTtBQVVBO0FBWkE7QUFjQTtBQWZBO0FBN0JBO0FBQ0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9