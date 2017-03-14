webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _moment = __webpack_require__(15);

	var _moment2 = _interopRequireDefault(_moment);

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

	    var BoxplotmaxValue = 0;
	    var BoxplotminValue = 0;
	    var BoxplotSource = (0, _makaluFilter2.default)(_source, [{
	      name: 'metric'
	    }], ['value'], ['array']);
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYm94cGxvdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9ib3hwbG90Lm1kIiwid2VicGFjazovLy9leGFtcGxlcy9kYXRhLmpzPzBjYmQqKioqKioqKioqIiwid2VicGFjazovLy9zcmMvdXRpbC9tYWthbHVGaWx0ZXIuanM/OTQxMioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCb3hwbG90IH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgbWFrYWx1RmlsdGVyIGZyb20gJy4uL3NyYy91dGlsL21ha2FsdUZpbHRlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuXG4gICAgbGV0IEJveHBsb3RtYXhWYWx1ZSA9IDA7XG4gICAgbGV0IEJveHBsb3RtaW5WYWx1ZSA9IDA7XG4gICAgbGV0IEJveHBsb3RTb3VyY2UgPSBtYWthbHVGaWx0ZXIoX3NvdXJjZSwgW3tcbiAgICAgICAgbmFtZTogJ21ldHJpYydcbiAgICAgIH1dLCBbJ3ZhbHVlJ10sIFsnYXJyYXknXSk7XG4gICAgY29uc3QgVHJhbnNTb3VyY2VUb0JveHBsb3QgPSAoKSA9PiB7XG4gICAgICAvLyBmcm9tIGh0dHA6Ly9pbmZvcm1hdGlvbmFuZHZpc3VhbGl6YXRpb24uZGUvYmxvZy9ib3gtcGxvdFxuICAgICAgcmV0dXJuIEJveHBsb3RTb3VyY2UubWFwKGJveCA9PiB7XG4gICAgICAgIGNvbnN0IHNvcnRlZFZhbHVlID0gYm94Wyd2YWx1ZSddLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgY29uc3QgbGVuID0gc29ydGVkVmFsdWUubGVuZ3RoO1xuICAgICAgICBjb25zdCBtYXhpbXVtID0gc29ydGVkVmFsdWVbbGVuIC0gMV07XG4gICAgICAgIGNvbnN0IG1pbmltdW0gPSBzb3J0ZWRWYWx1ZVswXTtcbiAgICAgICAgQm94cGxvdG1heFZhbHVlID0gTWF0aC5tYXgoQm94cGxvdG1heFZhbHVlLCBtYXhpbXVtKTtcbiAgICAgICAgQm94cGxvdG1pblZhbHVlID0gTWF0aC5taW4oQm94cGxvdG1pblZhbHVlLCBtaW5pbXVtKTtcblxuICAgICAgICBjb25zdCBxdWFydGlsZTNQb3MgPSBsZW4gKiAwLjc1O1xuICAgICAgICBsZXQgcXVhcnRpbGUzID0gMDtcbiAgICAgICAgaWYgKHF1YXJ0aWxlM1BvcyAlIDEgIT09IDApIHtcbiAgICAgICAgICBxdWFydGlsZTMgPSBzb3J0ZWRWYWx1ZVtNYXRoLmZsb29yKHF1YXJ0aWxlM1BvcyldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1YXJ0aWxlMyA9IChzb3J0ZWRWYWx1ZVtNYXRoLmZsb29yKHF1YXJ0aWxlM1BvcyldICtcbiAgICAgICAgICAgIHNvcnRlZFZhbHVlW01hdGguZmxvb3IocXVhcnRpbGUzUG9zIC0gMSldKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZWRpYW5Qb3MgPSBsZW4gKiAwLjU7XG4gICAgICAgIGxldCBtZWRpYW4gPSAwO1xuICAgICAgICBpZiAobWVkaWFuUG9zICUgMSAhPT0gMCkge1xuICAgICAgICAgIG1lZGlhbiA9IHNvcnRlZFZhbHVlW01hdGguZmxvb3IobWVkaWFuUG9zKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFuID0gKHNvcnRlZFZhbHVlW01hdGguZmxvb3IobWVkaWFuUG9zKV0gK1xuICAgICAgICAgICAgc29ydGVkVmFsdWVbTWF0aC5mbG9vcihtZWRpYW5Qb3MgLSAxKV0pIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1YXJ0aWxlMVBvcyA9IGxlbiAqIDAuMjU7XG4gICAgICAgIGxldCBxdWFydGlsZTEgPSAwO1xuICAgICAgICBpZiAocXVhcnRpbGUxUG9zICUgMSAhPT0gMCkge1xuICAgICAgICAgIHF1YXJ0aWxlMSA9IHNvcnRlZFZhbHVlW01hdGguZmxvb3IocXVhcnRpbGUxUG9zKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVhcnRpbGUxID0gKHNvcnRlZFZhbHVlW01hdGguZmxvb3IocXVhcnRpbGUxUG9zKV0gK1xuICAgICAgICAgICAgc29ydGVkVmFsdWVbTWF0aC5mbG9vcihxdWFydGlsZTFQb3MgLSAxKV0pIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlxciA9IHF1YXJ0aWxlMyAtIHF1YXJ0aWxlMTtcbiAgICAgICAgY29uc3QgbWlsZE91dGxpZXJzID0gW107XG4gICAgICAgIGNvbnN0IGV4dHJlbWVPdXRsaWVycyA9IFtdO1xuICAgICAgICBsZXQgbG93ZXJXaGlza2VyID0gbWluaW11bTtcbiAgICAgICAgbGV0IHVwcGVyV2hpc2tlciA9IG1heGltdW07XG4gICAgICAgIGlmIChtaW5pbXVtIDwgKHF1YXJ0aWxlMSAtIDEuNSAqIGlxcikpIHtcbiAgICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgcXVhcnRpbGUxUG9zOyBpaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkVmFsdWVbaWldIDwgKHF1YXJ0aWxlMSAtIDMgKiBpcXIpKSB7XG4gICAgICAgICAgICAgIGV4dHJlbWVPdXRsaWVycy5wdXNoKHNvcnRlZFZhbHVlW2lpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZFZhbHVlW2lpXSA8IChxdWFydGlsZTEgLSAxLjUgKiBpcXIpKSB7XG4gICAgICAgICAgICAgIG1pbGRPdXRsaWVycy5wdXNoKHNvcnRlZFZhbHVlW2lpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZFZhbHVlW2lpXSA+PSAocXVhcnRpbGUxIC0gMS41ICogaXFyKSkge1xuICAgICAgICAgICAgICBsb3dlcldoaXNrZXIgPSBzb3J0ZWRWYWx1ZVtpaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhpbXVtID4gKHF1YXJ0aWxlMyArICgxLjUgKiBpcXIpKSkge1xuICAgICAgICAgIGZvciAobGV0IGlpID0gcXVhcnRpbGUzUG9zOyBpaSA8IGxlbjsgaWkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRlZFZhbHVlW2lpXSA+IChxdWFydGlsZTMgKyAzICogaXFyKSkge1xuICAgICAgICAgICAgICBleHRyZW1lT3V0bGllcnMucHVzaChzb3J0ZWRWYWx1ZVtpaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRWYWx1ZVtpaV0gPiAocXVhcnRpbGUzICsgMS41ICogaXFyKSkge1xuICAgICAgICAgICAgICBtaWxkT3V0bGllcnMucHVzaChzb3J0ZWRWYWx1ZVtpaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRWYWx1ZVtpaV0gPD0gKHF1YXJ0aWxlMyArIDEuNSAqIGlxcikpIHtcbiAgICAgICAgICAgICAgdXBwZXJXaGlza2VyID0gc29ydGVkVmFsdWVbaWldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWydtZXRyaWMnXTogYm94WydtZXRyaWMnXSxcbiAgICAgICAgICBtYXhpbXVtLFxuICAgICAgICAgIG1pbGRPdXRsaWVycyxcbiAgICAgICAgICBleHRyZW1lT3V0bGllcnMsXG4gICAgICAgICAgdXBwZXJXaGlza2VyLFxuICAgICAgICAgIHF1YXJ0aWxlMyxcbiAgICAgICAgICBtZWRpYW4sXG4gICAgICAgICAgcXVhcnRpbGUxLFxuICAgICAgICAgIGxvd2VyV2hpc2tlcixcbiAgICAgICAgICBtaW5pbXVtLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBCb3hwbG90U291cmNlID0gVHJhbnNTb3VyY2VUb0JveHBsb3QoKTtcblxuICAgIHJldHVybiA8Qm94cGxvdFxuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17Qm94cGxvdFNvdXJjZX1cbiAgICAgIGdyb3VwQXhpcz17YG1ldHJpY2B9XG4gICAgICBncm91cEF4aXNEb21haW49e21ldHJpY3N9XG4gICAgICB5QXhpcz17YHZhbHVlYH1cbiAgICAgIHlBeGlzRG9tYWluPXtbQm94cGxvdG1pblZhbHVlLCBCb3hwbG90bWF4VmFsdWVdfVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYm94cGxvdC5tZFxuICoqLyIsIlxuY29uc3QgZmlyc3RfeWVhcl9kYXRhID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgYW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgeWV0YW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgZGF0ZXMgPSAoKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOTcwOyBpIDwgMjAxNzsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goK25ldyBEYXRlKFN0cmluZyhpKSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KSgpO1xuY29uc3QgbWFrZUZha2VEYXRhID0gZmFrZSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZGF0ZXMubWFwKGQgPT4ge1xuICAgIGxldCBkZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmFrZSkpO1xuICAgIGRkID0gZGQubWFwKGRkZCA9PiB7XG4gICAgICByZXR1cm4gZGRkLm1hcChkZGRkID0+IHtcbiAgICAgICAgZGRkZCA9IGRkZGQgKiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBkZGRkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGF0YS5wdXNoKGRkKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRhdGEgPSBtYWtlRmFrZURhdGEoZmlyc3RfeWVhcl9kYXRhKTtcbmNvbnN0IGFkYXRhID0gbWFrZUZha2VEYXRhKGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBzaXplZGF0YSA9IG1ha2VGYWtlRGF0YSh5ZXRhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3QgZGltZW5zaW9ucyA9IFsn5YyX5LqsJywgJ+S4iua1tycsICflub/lt54nLCAn5rex5ZyzJ107XG5jb25zdCBtZXRyaWNzID0gWyfln47luILng63luqYnLCAn6KGjJywgJ+mjnycsICfkvY8nLCAn6Jaq6LWEJywgJ+ihjCcsICfmsJTlgJknLCAn5Yy755aXJywgJ+aVmeiCsiddO1xubGV0IHNvdXJjZSA9IFtdO1xuZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRlcy5sZW5ndGg7IHkrKykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1ldHJpY3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgY2l0eTogZGltZW5zaW9uc1tpXSxcbiAgICAgICAgbWV0cmljOiBtZXRyaWNzW3hdLFxuICAgICAgICB2YWx1ZTogZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYXZhbHVlOiBhZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYnZhbHVlOiBzaXplZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgdGltZTogZGF0ZXNbeV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2UsXG4gIG1ldHJpY3MsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGVzLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2RhdGEuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBtYWthbHVGaWx0ZXIgPSAoc2VyaWVzLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBhZ2dyZWdhdGVzKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgZGltZW5zaW9uVmFsdWVzID0gW107XG4gIGNvbnN0IHNlcmllc0xlbmd0aCA9IHNlcmllcy5sZW5ndGg7XG4gIGNvbnN0IG1ldHJpY3NMZW5ndGggPSBtZXRyaWNzLmxlbmd0aDtcbiAgY29uc3QgZGltZW5zaW9uc0xlbmd0aCA9IGRpbWVuc2lvbnMubGVuZ3RoO1xuICBsZXQgb2JqZWN0TGVuZ3RoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXNMZW5ndGg7IGkrKykge1xuICAgIGxldCBkaW1lbnNpb25WYWx1ZSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGltZW5zaW9uc0xlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoZGltZW5zaW9uc1t4XS5mb3JtYXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkaW1lbnNpb25zW3hdLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRpbWVuc2lvblZhbHVlLnB1c2goZGltZW5zaW9uc1t4XS5mb3JtYXQoc2VyaWVzW2ldW2RpbWVuc2lvbnNbeF0ubmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGltZW5zaW9uVmFsdWUucHVzaChzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXSk7XG4gICAgfVxuICAgIGNvbnN0IGRpbWVuc2lvbkNvbmNhdGVkVmFsdWUgPSBkaW1lbnNpb25WYWx1ZS5qb2luKCcqJyk7XG4gICAgLy8gZmlyc3Qgb2YgYWxsIGdyb3VwIGRpbWVuc2lvblxuICAgIGlmICghb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdKSB7XG4gICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV0gPSB7fTtcbiAgICAgIGRpbWVuc2lvblZhbHVlcy5wdXNoKGRpbWVuc2lvbkNvbmNhdGVkVmFsdWUpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkaW1lbnNpb25zTGVuZ3RoOyB4KyspIHtcbiAgICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW2RpbWVuc2lvbnNbeF0ubmFtZV0gPSBzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXTsgLy8gZGltZW5zaW9uVmFsdWVbeF07XG4gICAgICB9XG4gICAgICBvYmplY3RMZW5ndGggKz0gMTtcbiAgICB9XG4gICAgLy8gaW5zZXJ0IG1ldHJpYydzIHZhbHVlIGludG8ga2V5LXZhbHVlIGFycmF5XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZXRyaWNzTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICghb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dKSB7XG4gICAgICAgIG9iamVjdFtkaW1lbnNpb25Db25jYXRlZFZhbHVlXVttZXRyaWNzW2pdXSA9IFtdO1xuICAgICAgfVxuICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dLnB1c2goc2VyaWVzW2ldW21ldHJpY3Nbal1dKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqZWN0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGltZW5zaW9uS2V5ID0gZGltZW5zaW9uVmFsdWVzW2luZGV4XTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1ldHJpY3NMZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgbWV0cmljS2V5ID0gbWV0cmljc1tqXTtcbiAgICAgIHN3aXRjaCAoYWdncmVnYXRlc1tqXSkge1xuICAgICAgICBjYXNlICdzdW0nOlxuICAgICAgICBjYXNlICdhdmcnOlxuICAgICAgICAgIGNvbnN0IHN1bSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ucmVkdWNlKCh0b3RhbCwgbmV4dCkgPT4gdG90YWwgKyBuZXh0LCAwKTtcbiAgICAgICAgICBpZiAoYWdncmVnYXRlc1tqXSA9PT0gJ3N1bScpIHtcbiAgICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBzdW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBzdW0gLyBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IE1hdGgubWF4KC4uLm9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBNYXRoLm1pbiguLi5vYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldWzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5wb3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JvdXAgYnknOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBfLnVuaXFCeShvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb3VudCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChvYmplY3RbZGltZW5zaW9uS2V5XSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2FsdUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy91dGlsL21ha2FsdUZpbHRlci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFwSUE7QUFDQTtBQXNJQTs7Ozs7Ozs7Ozs7OztBQzlJQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9