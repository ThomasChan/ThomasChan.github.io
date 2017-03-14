webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _moment = __webpack_require__(15);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(18);

	var _data = __webpack_require__(8);

	var _makaluFilter = __webpack_require__(9);

	var _makaluFilter2 = _interopRequireDefault(_makaluFilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var TransSourceToStack = function TransSourceToStack(series, x, y, z) {
	  var seriesLength = series.length;
	  var xValues = [];
	  var xLength = 0;
	  var yValues = [];
	  var yLength = 1;
	  var zValues = {};
	  var result = [];
	  for (var i = 0; i < seriesLength; i++) {
	    if (xValues.indexOf(series[i][x]) === -1) {
	      xValues.push(series[i][x]);
	      xLength += 1;
	    }
	    if (yValues.indexOf(series[i][y]) === -1) {
	      yValues.push(series[i][y]);
	      yLength += 1;
	    }
	    zValues[series[i][x] + '*' + series[i][y]] = series[i][z];
	  }
	  for (var j = 0; j < xLength; j++) {
	    var _object;

	    var object = (_object = {}, _defineProperty(_object, x, xValues[j]), _defineProperty(_object, 'positive_total', 0), _defineProperty(_object, 'negative_total', 0), _object);
	    for (var m = 0; m < yLength; m++) {
	      object[yValues[m]] = zValues[xValues[j] + '*' + yValues[m]];
	      if (zValues[xValues[j] + '*' + yValues[m]] > 0) {
	        object.positive_total += zValues[xValues[j] + '*' + yValues[m]];
	      } else if (zValues[xValues[j] + '*' + yValues[m]] < 0) {
	        object.negative_total += zValues[xValues[j] + '*' + yValues[m]];
	      }
	    }
	    result.push(object);
	  }
	  return result;
	};

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
	    var StackSource = TransSourceToStack((0, _makaluFilter2.default)(_source, [{ name: 'metric' }, { name: 'city' }], ['value'], ['sum']), 'metric', 'city', 'value');

	    return _react2.default.createElement(_src.Stack, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: StackSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      subgroupAxis: 'city',
	      subgroupAxisDomain: _data.dimensions,
	      yAxis: 'value',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc3RhY2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvc3RhY2subWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoiLCJ3ZWJwYWNrOi8vL3NyYy91dGlsL21ha2FsdUZpbHRlci5qcz85NDEyKiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IG1ha2FsdUZpbHRlciBmcm9tICcuLi9zcmMvdXRpbC9tYWthbHVGaWx0ZXInO1xuXG5jb25zdCBUcmFuc1NvdXJjZVRvU3RhY2sgPSAoc2VyaWVzLCB4LCB5LCB6KSA9PiB7XG4gIGNvbnN0IHNlcmllc0xlbmd0aCA9IHNlcmllcy5sZW5ndGg7XG4gIGNvbnN0IHhWYWx1ZXMgPSBbXTtcbiAgbGV0IHhMZW5ndGggPSAwO1xuICBjb25zdCB5VmFsdWVzID0gW107XG4gIGxldCB5TGVuZ3RoID0gMTtcbiAgY29uc3QgelZhbHVlcyA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXNMZW5ndGg7IGkrKykge1xuICAgIGlmICh4VmFsdWVzLmluZGV4T2Yoc2VyaWVzW2ldW3hdKSA9PT0gLTEpIHtcbiAgICAgIHhWYWx1ZXMucHVzaChzZXJpZXNbaV1beF0pO1xuICAgICAgeExlbmd0aCArPSAxO1xuICAgIH1cbiAgICBpZiAoeVZhbHVlcy5pbmRleE9mKHNlcmllc1tpXVt5XSkgPT09IC0xKSB7XG4gICAgICB5VmFsdWVzLnB1c2goc2VyaWVzW2ldW3ldKTtcbiAgICAgIHlMZW5ndGggKz0gMTtcbiAgICB9XG4gICAgelZhbHVlc1tgJHtzZXJpZXNbaV1beF19KiR7c2VyaWVzW2ldW3ldfWBdID0gc2VyaWVzW2ldW3pdO1xuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgeExlbmd0aDsgaisrKSB7XG4gICAgY29uc3Qgb2JqZWN0ID0ge1xuICAgICAgW3hdOiB4VmFsdWVzW2pdLFxuICAgICAgcG9zaXRpdmVfdG90YWw6IDAsXG4gICAgICBuZWdhdGl2ZV90b3RhbDogMCxcbiAgICB9O1xuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgeUxlbmd0aDsgbSsrKSB7XG4gICAgICBvYmplY3RbeVZhbHVlc1ttXV0gPSB6VmFsdWVzW2Ake3hWYWx1ZXNbal19KiR7eVZhbHVlc1ttXX1gXTtcbiAgICAgIGlmICh6VmFsdWVzW2Ake3hWYWx1ZXNbal19KiR7eVZhbHVlc1ttXX1gXSA+IDApIHtcbiAgICAgICAgb2JqZWN0LnBvc2l0aXZlX3RvdGFsICs9IHpWYWx1ZXNbYCR7eFZhbHVlc1tqXX0qJHt5VmFsdWVzW21dfWBdO1xuICAgICAgfSBlbHNlIGlmICh6VmFsdWVzW2Ake3hWYWx1ZXNbal19KiR7eVZhbHVlc1ttXX1gXSA8IDApIHtcbiAgICAgICAgb2JqZWN0Lm5lZ2F0aXZlX3RvdGFsICs9IHpWYWx1ZXNbYCR7eFZhbHVlc1tqXX0qJHt5VmFsdWVzW21dfWBdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBfc291cmNlID0gc291cmNlO1xuICAgIGNvbnN0IHsgdGltZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGltZUZpbHRlcikge1xuICAgICAgX3NvdXJjZSA9IF9zb3VyY2UuZmlsdGVyKHYgPT4gdi50aW1lID49IHRpbWVGaWx0ZXJbMF0gJiYgdi50aW1lIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCBTdGFja1NvdXJjZSA9IFRyYW5zU291cmNlVG9TdGFjayhcbiAgICAgIG1ha2FsdUZpbHRlcihfc291cmNlLFxuICAgICAgICBbeyBuYW1lOiAnbWV0cmljJyB9LCB7IG5hbWU6ICdjaXR5JyB9XSxcbiAgICAgICAgWyd2YWx1ZSddLFxuICAgICAgICBbJ3N1bSddLFxuICAgICAgKSxcbiAgICAgICdtZXRyaWMnLFxuICAgICAgJ2NpdHknLFxuICAgICAgJ3ZhbHVlJyxcbiAgICApO1xuXG4gICAgcmV0dXJuIDxTdGFja1xuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17U3RhY2tTb3VyY2V9XG4gICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgZ3JvdXBBeGlzRG9tYWluPXttZXRyaWNzfVxuICAgICAgc3ViZ3JvdXBBeGlzPXtgY2l0eWB9XG4gICAgICBzdWJncm91cEF4aXNEb21haW49e2RpbWVuc2lvbnN9XG4gICAgICB5QXhpcz17YHZhbHVlYH1cbiAgICAgIHRpbWViYXJTaG93PXt0cnVlfVxuICAgICAgdGltZWJhckRvbWFpbj17ZGF0ZXN9XG4gICAgICB0aW1lYmFyVGlja0Zvcm1hdD17diA9PiBtb21lbnQodikuZm9ybWF0KCdZWVlZJyl9XG4gICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfVxuICAgICAgb25UaW1lYmFyQ2hhbmdlPXtlID0+IHRoaXMub25UaW1lYmFyQ2hhbmdlKGUpfSAvPlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3N0YWNrLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IG1ha2FsdUZpbHRlciA9IChzZXJpZXMsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGFnZ3JlZ2F0ZXMpID0+IHtcbiAgY29uc3Qgb2JqZWN0ID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBkaW1lbnNpb25WYWx1ZXMgPSBbXTtcbiAgY29uc3Qgc2VyaWVzTGVuZ3RoID0gc2VyaWVzLmxlbmd0aDtcbiAgY29uc3QgbWV0cmljc0xlbmd0aCA9IG1ldHJpY3MubGVuZ3RoO1xuICBjb25zdCBkaW1lbnNpb25zTGVuZ3RoID0gZGltZW5zaW9ucy5sZW5ndGg7XG4gIGxldCBvYmplY3RMZW5ndGggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmllc0xlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpbWVuc2lvblZhbHVlID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBkaW1lbnNpb25zTGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChkaW1lbnNpb25zW3hdLmZvcm1hdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRpbWVuc2lvbnNbeF0uZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGltZW5zaW9uVmFsdWUucHVzaChkaW1lbnNpb25zW3hdLmZvcm1hdChzZXJpZXNbaV1bZGltZW5zaW9uc1t4XS5uYW1lXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaW1lbnNpb25WYWx1ZS5wdXNoKHNlcmllc1tpXVtkaW1lbnNpb25zW3hdLm5hbWVdKTtcbiAgICB9XG4gICAgY29uc3QgZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZSA9IGRpbWVuc2lvblZhbHVlLmpvaW4oJyonKTtcbiAgICAvLyBmaXJzdCBvZiBhbGwgZ3JvdXAgZGltZW5zaW9uXG4gICAgaWYgKCFvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV0pIHtcbiAgICAgIG9iamVjdFtkaW1lbnNpb25Db25jYXRlZFZhbHVlXSA9IHt9O1xuICAgICAgZGltZW5zaW9uVmFsdWVzLnB1c2goZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRpbWVuc2lvbnNMZW5ndGg7IHgrKykge1xuICAgICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bZGltZW5zaW9uc1t4XS5uYW1lXSA9IHNlcmllc1tpXVtkaW1lbnNpb25zW3hdLm5hbWVdOyAvLyBkaW1lbnNpb25WYWx1ZVt4XTtcbiAgICAgIH1cbiAgICAgIG9iamVjdExlbmd0aCArPSAxO1xuICAgIH1cbiAgICAvLyBpbnNlcnQgbWV0cmljJ3MgdmFsdWUgaW50byBrZXktdmFsdWUgYXJyYXlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1ldHJpY3NMZW5ndGg7IGorKykge1xuICAgICAgaWYgKCFvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bbWV0cmljc1tqXV0pIHtcbiAgICAgICAgb2JqZWN0W2RpbWVuc2lvbkNvbmNhdGVkVmFsdWVdW21ldHJpY3Nbal1dID0gW107XG4gICAgICB9XG4gICAgICBvYmplY3RbZGltZW5zaW9uQ29uY2F0ZWRWYWx1ZV1bbWV0cmljc1tqXV0ucHVzaChzZXJpZXNbaV1bbWV0cmljc1tqXV0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvYmplY3RMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkaW1lbnNpb25LZXkgPSBkaW1lbnNpb25WYWx1ZXNbaW5kZXhdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWV0cmljc0xlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBtZXRyaWNLZXkgPSBtZXRyaWNzW2pdO1xuICAgICAgc3dpdGNoIChhZ2dyZWdhdGVzW2pdKSB7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgIGNhc2UgJ2F2Zyc6XG4gICAgICAgICAgY29uc3Qgc3VtID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5yZWR1Y2UoKHRvdGFsLCBuZXh0KSA9PiB0b3RhbCArIG5leHQsIDApO1xuICAgICAgICAgIGlmIChhZ2dyZWdhdGVzW2pdID09PSAnc3VtJykge1xuICAgICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IHN1bTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IHN1bSAvIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0ubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gTWF0aC5tYXgoLi4ub2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IE1hdGgubWluKC4uLm9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmaXJzdCc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV1bMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xhc3QnOlxuICAgICAgICAgIG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0gPSBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldLnBvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncm91cCBieSc6XG4gICAgICAgICAgb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XSA9IF8udW5pcUJ5KG9iamVjdFtkaW1lbnNpb25LZXldW21ldHJpY0tleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBvYmplY3RbZGltZW5zaW9uS2V5XVttZXRyaWNLZXldID0gb2JqZWN0W2RpbWVuc2lvbktleV1bbWV0cmljS2V5XS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG9iamVjdFtkaW1lbnNpb25LZXldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrYWx1RmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3V0aWwvbWFrYWx1RmlsdGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBekRBO0FBQ0E7QUEyREE7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFVQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==