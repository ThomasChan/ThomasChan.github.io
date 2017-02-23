webpackJsonp([11],{

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

	    var BoxplotmaxValue = 0;
	    var BoxplotminValue = 0;
	    var BoxplotSource = (0, _GroupBy2.default)(_source, ['metric'], ['value'], ['array']);
	    var TransSourceToBoxplot = function TransSourceToBoxplot() {
	      // from http://informationandvisualization.de/blog/box-plot
	      return BoxplotSource.map(function (box) {
	        var _ref;

	        var sortedValue = box['value'].sort(function (a, b) {
	          return a - b;
	        });
	        var len = sortedValue.length;
	        var maximum = sortedValue[len - 1];
	        var minimum = sortedValue[0];
	        BoxplotmaxValue = Math.max(BoxplotmaxValue, maximum);
	        BoxplotminValue = Math.min(BoxplotminValue, minimum);

	        var quartile3Pos = len * 0.75;
	        var quartile3 = 0;
	        if (quartile3Pos % 1 !== 0) {
	          quartile3 = sortedValue[Math.floor(quartile3Pos)];
	        } else {
	          quartile3 = (sortedValue[Math.floor(quartile3Pos)] + sortedValue[Math.floor(quartile3Pos - 1)]) / 2;
	        }

	        var medianPos = len * 0.5;
	        var median = 0;
	        if (medianPos % 1 !== 0) {
	          median = sortedValue[Math.floor(medianPos)];
	        } else {
	          median = (sortedValue[Math.floor(medianPos)] + sortedValue[Math.floor(medianPos - 1)]) / 2;
	        }

	        var quartile1Pos = len * 0.25;
	        var quartile1 = 0;
	        if (quartile1Pos % 1 !== 0) {
	          quartile1 = sortedValue[Math.floor(quartile1Pos)];
	        } else {
	          quartile1 = (sortedValue[Math.floor(quartile1Pos)] + sortedValue[Math.floor(quartile1Pos - 1)]) / 2;
	        }

	        var iqr = quartile3 - quartile1;
	        var mildOutliers = [];
	        var extremeOutliers = [];
	        var lowerWhisker = minimum;
	        var upperWhisker = maximum;
	        if (minimum < quartile1 - 1.5 * iqr) {
	          for (var ii = 0; ii < quartile1Pos; ii++) {
	            if (sortedValue[ii] < quartile1 - 3 * iqr) {
	              extremeOutliers.push(sortedValue[ii]);
	            } else if (sortedValue[ii] < quartile1 - 1.5 * iqr) {
	              mildOutliers.push(sortedValue[ii]);
	            } else if (sortedValue[ii] >= quartile1 - 1.5 * iqr) {
	              lowerWhisker = sortedValue[ii];
	            }
	          }
	        }
	        if (maximum > quartile3 + 1.5 * iqr) {
	          for (var _ii = quartile3Pos; _ii < len; _ii++) {
	            if (sortedValue[_ii] > quartile3 + 3 * iqr) {
	              extremeOutliers.push(sortedValue[_ii]);
	            } else if (sortedValue[_ii] > quartile3 + 1.5 * iqr) {
	              mildOutliers.push(sortedValue[_ii]);
	            } else if (sortedValue[_ii] <= quartile3 + 1.5 * iqr) {
	              upperWhisker = sortedValue[_ii];
	            }
	          }
	        }

	        return _ref = {}, _defineProperty(_ref, 'metric', box['metric']), _defineProperty(_ref, 'maximum', maximum), _defineProperty(_ref, 'mildOutliers', mildOutliers), _defineProperty(_ref, 'extremeOutliers', extremeOutliers), _defineProperty(_ref, 'upperWhisker', upperWhisker), _defineProperty(_ref, 'quartile3', quartile3), _defineProperty(_ref, 'median', median), _defineProperty(_ref, 'quartile1', quartile1), _defineProperty(_ref, 'lowerWhisker', lowerWhisker), _defineProperty(_ref, 'minimum', minimum), _ref;
	      });
	    };
	    BoxplotSource = TransSourceToBoxplot();

	    return _react2.default.createElement(_src.Boxplot, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: BoxplotSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      yAxis: 'value',
	      yAxisDomain: [BoxplotminValue, BoxplotmaxValue],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYm94cGxvdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9ib3hwbG90Lm1kIiwid2VicGFjazovLy9leGFtcGxlcy9kYXRhLmpzPzBjYmQqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2FnZ3JlZ2F0aW9uTWV0aG9kcy9Hcm91cEJ5LmpzPzE4OTIqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQm94cGxvdCB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IEdyb3VwQnkgZnJvbSAnLi9hZ2dyZWdhdGlvbk1ldGhvZHMvR3JvdXBCeSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuXG4gICAgbGV0IEJveHBsb3RtYXhWYWx1ZSA9IDA7XG4gICAgbGV0IEJveHBsb3RtaW5WYWx1ZSA9IDA7XG4gICAgbGV0IEJveHBsb3RTb3VyY2UgPSBHcm91cEJ5KF9zb3VyY2UsIFsnbWV0cmljJ10sIFsndmFsdWUnXSwgWydhcnJheSddKTtcbiAgICBjb25zdCBUcmFuc1NvdXJjZVRvQm94cGxvdCA9ICgpID0+IHtcbiAgICAgIC8vIGZyb20gaHR0cDovL2luZm9ybWF0aW9uYW5kdmlzdWFsaXphdGlvbi5kZS9ibG9nL2JveC1wbG90XG4gICAgICByZXR1cm4gQm94cGxvdFNvdXJjZS5tYXAoYm94ID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkVmFsdWUgPSBib3hbJ3ZhbHVlJ10uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBjb25zdCBsZW4gPSBzb3J0ZWRWYWx1ZS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1heGltdW0gPSBzb3J0ZWRWYWx1ZVtsZW4gLSAxXTtcbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNvcnRlZFZhbHVlWzBdO1xuICAgICAgICBCb3hwbG90bWF4VmFsdWUgPSBNYXRoLm1heChCb3hwbG90bWF4VmFsdWUsIG1heGltdW0pO1xuICAgICAgICBCb3hwbG90bWluVmFsdWUgPSBNYXRoLm1pbihCb3hwbG90bWluVmFsdWUsIG1pbmltdW0pO1xuXG4gICAgICAgIGNvbnN0IHF1YXJ0aWxlM1BvcyA9IGxlbiAqIDAuNzU7XG4gICAgICAgIGxldCBxdWFydGlsZTMgPSAwO1xuICAgICAgICBpZiAocXVhcnRpbGUzUG9zICUgMSAhPT0gMCkge1xuICAgICAgICAgIHF1YXJ0aWxlMyA9IHNvcnRlZFZhbHVlW01hdGguZmxvb3IocXVhcnRpbGUzUG9zKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVhcnRpbGUzID0gKHNvcnRlZFZhbHVlW01hdGguZmxvb3IocXVhcnRpbGUzUG9zKV0gK1xuICAgICAgICAgICAgc29ydGVkVmFsdWVbTWF0aC5mbG9vcihxdWFydGlsZTNQb3MgLSAxKV0pIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lZGlhblBvcyA9IGxlbiAqIDAuNTtcbiAgICAgICAgbGV0IG1lZGlhbiA9IDA7XG4gICAgICAgIGlmIChtZWRpYW5Qb3MgJSAxICE9PSAwKSB7XG4gICAgICAgICAgbWVkaWFuID0gc29ydGVkVmFsdWVbTWF0aC5mbG9vcihtZWRpYW5Qb3MpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYW4gPSAoc29ydGVkVmFsdWVbTWF0aC5mbG9vcihtZWRpYW5Qb3MpXSArXG4gICAgICAgICAgICBzb3J0ZWRWYWx1ZVtNYXRoLmZsb29yKG1lZGlhblBvcyAtIDEpXSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVhcnRpbGUxUG9zID0gbGVuICogMC4yNTtcbiAgICAgICAgbGV0IHF1YXJ0aWxlMSA9IDA7XG4gICAgICAgIGlmIChxdWFydGlsZTFQb3MgJSAxICE9PSAwKSB7XG4gICAgICAgICAgcXVhcnRpbGUxID0gc29ydGVkVmFsdWVbTWF0aC5mbG9vcihxdWFydGlsZTFQb3MpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWFydGlsZTEgPSAoc29ydGVkVmFsdWVbTWF0aC5mbG9vcihxdWFydGlsZTFQb3MpXSArXG4gICAgICAgICAgICBzb3J0ZWRWYWx1ZVtNYXRoLmZsb29yKHF1YXJ0aWxlMVBvcyAtIDEpXSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXFyID0gcXVhcnRpbGUzIC0gcXVhcnRpbGUxO1xuICAgICAgICBjb25zdCBtaWxkT3V0bGllcnMgPSBbXTtcbiAgICAgICAgY29uc3QgZXh0cmVtZU91dGxpZXJzID0gW107XG4gICAgICAgIGxldCBsb3dlcldoaXNrZXIgPSBtaW5pbXVtO1xuICAgICAgICBsZXQgdXBwZXJXaGlza2VyID0gbWF4aW11bTtcbiAgICAgICAgaWYgKG1pbmltdW0gPCAocXVhcnRpbGUxIC0gMS41ICogaXFyKSkge1xuICAgICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBxdWFydGlsZTFQb3M7IGlpKyspIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRWYWx1ZVtpaV0gPCAocXVhcnRpbGUxIC0gMyAqIGlxcikpIHtcbiAgICAgICAgICAgICAgZXh0cmVtZU91dGxpZXJzLnB1c2goc29ydGVkVmFsdWVbaWldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkVmFsdWVbaWldIDwgKHF1YXJ0aWxlMSAtIDEuNSAqIGlxcikpIHtcbiAgICAgICAgICAgICAgbWlsZE91dGxpZXJzLnB1c2goc29ydGVkVmFsdWVbaWldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkVmFsdWVbaWldID49IChxdWFydGlsZTEgLSAxLjUgKiBpcXIpKSB7XG4gICAgICAgICAgICAgIGxvd2VyV2hpc2tlciA9IHNvcnRlZFZhbHVlW2lpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heGltdW0gPiAocXVhcnRpbGUzICsgKDEuNSAqIGlxcikpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaWkgPSBxdWFydGlsZTNQb3M7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkVmFsdWVbaWldID4gKHF1YXJ0aWxlMyArIDMgKiBpcXIpKSB7XG4gICAgICAgICAgICAgIGV4dHJlbWVPdXRsaWVycy5wdXNoKHNvcnRlZFZhbHVlW2lpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZFZhbHVlW2lpXSA+IChxdWFydGlsZTMgKyAxLjUgKiBpcXIpKSB7XG4gICAgICAgICAgICAgIG1pbGRPdXRsaWVycy5wdXNoKHNvcnRlZFZhbHVlW2lpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZFZhbHVlW2lpXSA8PSAocXVhcnRpbGUzICsgMS41ICogaXFyKSkge1xuICAgICAgICAgICAgICB1cHBlcldoaXNrZXIgPSBzb3J0ZWRWYWx1ZVtpaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbJ21ldHJpYyddOiBib3hbJ21ldHJpYyddLFxuICAgICAgICAgIG1heGltdW0sXG4gICAgICAgICAgbWlsZE91dGxpZXJzLFxuICAgICAgICAgIGV4dHJlbWVPdXRsaWVycyxcbiAgICAgICAgICB1cHBlcldoaXNrZXIsXG4gICAgICAgICAgcXVhcnRpbGUzLFxuICAgICAgICAgIG1lZGlhbixcbiAgICAgICAgICBxdWFydGlsZTEsXG4gICAgICAgICAgbG93ZXJXaGlza2VyLFxuICAgICAgICAgIG1pbmltdW0sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuICAgIEJveHBsb3RTb3VyY2UgPSBUcmFuc1NvdXJjZVRvQm94cGxvdCgpO1xuXG4gICAgcmV0dXJuIDxCb3hwbG90XG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtCb3hwbG90U291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgIHlBeGlzPXtgdmFsdWVgfVxuICAgICAgeUF4aXNEb21haW49e1tCb3hwbG90bWluVmFsdWUsIEJveHBsb3RtYXhWYWx1ZV19XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9ib3hwbG90Lm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEdyb3VwQnkgPSAoKCkgPT4ge1xuICBjb25zdCBoYXMgPSAob2JqLCB0YXJnZXQpID0+IHtcbiAgICByZXR1cm4gXy5zb21lKG9iaiwgdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIF8uaXNFcXVhbCh2YWx1ZSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBrZXlzID0gKGRhdGEsIG5hbWVzKSA9PiB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKGRhdGEsIChtZW1vLCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBfLnBpY2soaXRlbSwgbmFtZXMpO1xuICAgICAgaWYgKCFoYXMobWVtbywga2V5KSkge1xuICAgICAgICBtZW1vLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBjb25zdCBncm91cCA9IChkYXRhLCBuYW1lcykgPT4ge1xuICAgIGNvbnN0IHN0ZW1zID0ga2V5cyhkYXRhLCBuYW1lcyk7XG4gICAgcmV0dXJuIF8ubWFwKHN0ZW1zLCBzdGVtID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogc3RlbSxcbiAgICAgICAgdmFsczogXy5tYXAoXy5maWx0ZXIoZGF0YSwgc3RlbSksIGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiBfLm9taXQoaXRlbSwgbmFtZXMpO1xuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChkYXRhLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBjb252ZXJ0ZXJzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gXy5tYXAoZ3JvdXAoZGF0YSwgZGltZW5zaW9ucyksIHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dSZXN1bHQgPSB7fTtcbiAgICAgIF8ubWFwKG1ldHJpY3MsIChtZXRyaWMsIGkpID0+IHtcbiAgICAgICAgaWYgKCFjb252ZXJ0ZXJzW2ldKSB7XG4gICAgICAgICAgY29udmVydGVyc1tpXSA9ICdmaXJzdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBHcm91cEJ5RnVuY3NbY29udmVydGVyc1tpXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByb3dSZXN1bHRbbWV0cmljXSA9IEdyb3VwQnlGdW5jc1tjb252ZXJ0ZXJzW2ldXShtZXRyaWMsIHJvdy52YWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dSZXN1bHRbbWV0cmljXSA9IEdyb3VwQnlGdW5jcy5maXJzdChtZXRyaWMsIHJvdy52YWxzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gXy5leHRlbmQoe30sIHJvdy5rZXksIHJvd1Jlc3VsdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IEdyb3VwQnlGdW5jcyA9IHt9O1xuXG5Hcm91cEJ5RnVuY3Muc3VtID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gXy5yZWR1Y2UoaXRlbSwgKG1lbW8sIG5vZGUpID0+IHtcbiAgICByZXR1cm4gbWVtbyArIE51bWJlcihub2RlW21ldHJpY10pO1xuICB9LCAwKTtcbn07XG5cbkdyb3VwQnlGdW5jcy5tYXggPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBNYXRoLm1heCguLi4oXy5tYXAoaXRlbSwgbm9kZSA9PiBOdW1iZXIobm9kZVttZXRyaWNdKSkpKTtcbn07XG5cbkdyb3VwQnlGdW5jcy5taW4gPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBNYXRoLm1pbiguLi4oXy5tYXAoaXRlbSwgbm9kZSA9PiBOdW1iZXIobm9kZVttZXRyaWNdKSkpKTtcbn07XG5cbkdyb3VwQnlGdW5jcy5hdmcgPSAobWV0cmljLCBpdGVtKSA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShpdGVtLCAobWVtbywgbm9kZSkgPT4ge1xuICAgIHJldHVybiBtZW1vICsgTnVtYmVyKG5vZGVbbWV0cmljXSk7XG4gIH0sIDApIC8gaXRlbS5sZW5ndGg7XG59O1xuXG5Hcm91cEJ5RnVuY3MubGFzdCA9IChtZXRyaWMsIGl0ZW0pID0+IHtcbiAgcmV0dXJuIGl0ZW1baXRlbS5sZW5ndGggLSAxXVttZXRyaWNdO1xufTtcblxuR3JvdXBCeUZ1bmNzLmZpcnN0ID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gaXRlbVswXVttZXRyaWNdO1xufTtcblxuR3JvdXBCeUZ1bmNzLmFycmF5ID0gKG1ldHJpYywgaXRlbSkgPT4ge1xuICByZXR1cm4gXy5tYXAoaXRlbSwgbm9kZSA9PiBOdW1iZXIobm9kZVttZXRyaWNdKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm91cEJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL0dyb3VwQnkuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFsSUE7QUFDQTtBQW9JQTs7Ozs7Ozs7Ozs7OztBQzVJQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBREE7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBREE7QUFGQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBVEE7QUFVQTtBQVpBO0FBY0E7QUFmQTtBQTdCQTtBQUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==