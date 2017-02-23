webpackJsonp([2],{

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

	var _filterGroupBy = __webpack_require__(72);

	var _filterGroupBy2 = _interopRequireDefault(_filterGroupBy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var AreaSource = (0, _filterGroupBy2.default)(_data.source, 'time', 'YYYY', {
	  'value': 'sum',
	  'avalue': 'sum',
	  'bvalue': 'sum'
	}).data;

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

	    var _source = AreaSource;
	    var timeFilter = this.state.timeFilter;

	    if (timeFilter) {
	      _source = _source.filter(function (v) {
	        return v.time >= timeFilter[0] && v.time <= timeFilter[1];
	      });
	    }
	    var AreaYs = [];
	    var AreaY1s = [];
	    var AreaY2s = [];
	    var xAxisDomain = [timeFilter ? timeFilter[0] : Math.min.apply(Math, _toConsumableArray(_data.dates)), timeFilter ? timeFilter[1] : Math.min.apply(Math, _toConsumableArray(_data.dates))];
	    _source.map(function (v) {
	      AreaYs.push(v.value);
	      AreaY1s.push(v.avalue);
	      AreaY2s.push(v.bvalue);
	      xAxisDomain[0] = Math.min(xAxisDomain[0], v.time);
	      xAxisDomain[1] = Math.max(xAxisDomain[1], v.time);
	    });

	    return _react2.default.createElement(_src.Area, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: _source,
	      xAxis: 'time',
	      xAxisDomain: xAxisDomain,
	      xAxisFormat: function xAxisFormat(v) {
	        return (0, _moment2.default)(v).format('YYYY');
	      },
	      yAxis: ['value', 'avalue', 'bvalue'],
	      yAxisDomain: [[Math.min.apply(Math, AreaYs), Math.max.apply(Math, AreaYs)], [Math.min.apply(Math, AreaY1s), Math.max.apply(Math, AreaY1s)], [Math.min.apply(Math, AreaY2s), Math.max.apply(Math, AreaY2s)]],
	      timebarMinimumStepSize: 4,
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

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _moment = __webpack_require__(13);

	var _moment2 = _interopRequireDefault(_moment);

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

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var filterGroupBy = function filterGroupBy(collection, field, mask, columnsMethod) {
	  var trans = {};
	  var result = [];
	  var otherKeys = Object.keys(columnsMethod);
	  collection.map(function (item) {
	    var value = item[field];
	    var groupKey = (0, _moment2.default)(Number(value)).format(mask);
	    if (!trans[groupKey]) {
	      trans[groupKey] = _defineProperty({}, field, Number((0, _moment2.default)(Number(value)).format('x')));
	    }
	    otherKeys.map(function (key) {
	      if (trans[groupKey]) {
	        if (!trans[groupKey][key] || !trans[groupKey][key].length) {
	          trans[groupKey][key] = [];
	        }
	        trans[groupKey][key].push(+item[key]);
	      }
	    });
	  });
	  var transKeys = Object.keys(trans);
	  transKeys.map(function (objKey) {
	    otherKeys.map(function (col) {
	      if (columnsMethod[col] === 'avg') {
	        var sum = trans[objKey][col].reduce(function (t, n) {
	          return t + n;
	        }, 0);
	        trans[objKey][col] = sum / trans[objKey][col].length;
	      } else if (columnsMethod[col] === 'min') {
	        trans[objKey][col] = Math.min.apply(Math, _toConsumableArray(trans[objKey][col]));
	      } else if (columnsMethod[col] === 'max') {
	        trans[objKey][col] = Math.max.apply(Math, _toConsumableArray(trans[objKey][col]));
	      } else if (columnsMethod[col] === 'sum') {
	        var _sum = trans[objKey][col].reduce(function (t, n) {
	          return t + n;
	        }, 0);
	        trans[objKey][col] = _sum;
	      } else if (columnsMethod[col] === 'last') {
	        trans[objKey][col] = trans[objKey][col][trans[objKey][col].length - 1];
	      } else {
	        trans[objKey][col] = trans[objKey][col][0];
	      }
	    });
	    result.push(_extends({}, trans[objKey]));
	  });
	  return {
	    data: result,
	    columns: transKeys
	  };
	};
	exports.default = filterGroupBy;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9hcmVhLm1kIiwid2VicGFjazovLy9leGFtcGxlcy9kYXRhLmpzPzBjYmQqIiwid2VicGFjazovLy9leGFtcGxlcy9hZ2dyZWdhdGlvbk1ldGhvZHMvZmlsdGVyR3JvdXBCeS5qcz84YWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQXJlYSB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGZpbHRlckdyb3VwQnkgZnJvbSAnLi9hZ2dyZWdhdGlvbk1ldGhvZHMvZmlsdGVyR3JvdXBCeSc7XG5cbmNvbnN0IEFyZWFTb3VyY2UgPSBmaWx0ZXJHcm91cEJ5KHNvdXJjZSwgJ3RpbWUnLCAnWVlZWScsIHtcbiAgJ3ZhbHVlJzogJ3N1bScsXG4gICdhdmFsdWUnOiAnc3VtJyxcbiAgJ2J2YWx1ZSc6ICdzdW0nLFxufSkuZGF0YTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IEFyZWFTb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IEFyZWFZcyA9IFtdO1xuICAgIGNvbnN0IEFyZWFZMXMgPSBbXTtcbiAgICBjb25zdCBBcmVhWTJzID0gW107XG4gICAgY29uc3QgeEF4aXNEb21haW4gPSBbXG4gICAgICAodGltZUZpbHRlciA/IHRpbWVGaWx0ZXJbMF0gOiBNYXRoLm1pbiguLi5kYXRlcykpLFxuICAgICAgKHRpbWVGaWx0ZXIgPyB0aW1lRmlsdGVyWzFdIDogTWF0aC5taW4oLi4uZGF0ZXMpKSxcbiAgICBdO1xuICAgIF9zb3VyY2UubWFwKHYgPT4ge1xuICAgICAgQXJlYVlzLnB1c2godi52YWx1ZSk7XG4gICAgICBBcmVhWTFzLnB1c2godi5hdmFsdWUpO1xuICAgICAgQXJlYVkycy5wdXNoKHYuYnZhbHVlKTtcbiAgICAgIHhBeGlzRG9tYWluWzBdID0gTWF0aC5taW4oeEF4aXNEb21haW5bMF0sIHYudGltZSk7XG4gICAgICB4QXhpc0RvbWFpblsxXSA9IE1hdGgubWF4KHhBeGlzRG9tYWluWzFdLCB2LnRpbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxBcmVhXG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtfc291cmNlfVxuICAgICAgeEF4aXM9e2B0aW1lYH1cbiAgICAgIHhBeGlzRG9tYWluPXt4QXhpc0RvbWFpbn1cbiAgICAgIHhBeGlzRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIHlBeGlzPXtbYHZhbHVlYCwgJ2F2YWx1ZScsICdidmFsdWUnXX1cbiAgICAgIHlBeGlzRG9tYWluPXtbXG4gICAgICAgIFtNYXRoLm1pbiguLi5BcmVhWXMpLCBNYXRoLm1heCguLi5BcmVhWXMpXSxcbiAgICAgICAgW01hdGgubWluKC4uLkFyZWFZMXMpLCBNYXRoLm1heCguLi5BcmVhWTFzKV0sXG4gICAgICAgIFtNYXRoLm1pbiguLi5BcmVhWTJzKSwgTWF0aC5tYXgoLi4uQXJlYVkycyldLFxuICAgICAgXX1cbiAgICAgIHRpbWViYXJNaW5pbXVtU3RlcFNpemU9ezR9XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9hcmVhLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgZmlsdGVyR3JvdXBCeSA9IChjb2xsZWN0aW9uLCBmaWVsZCwgbWFzaywgY29sdW1uc01ldGhvZCkgPT4ge1xuICBjb25zdCB0cmFucyA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3Qgb3RoZXJLZXlzID0gT2JqZWN0LmtleXMoY29sdW1uc01ldGhvZCk7XG4gIGNvbGxlY3Rpb24ubWFwKGl0ZW0gPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaXRlbVtmaWVsZF07XG4gICAgY29uc3QgZ3JvdXBLZXkgPSBtb21lbnQoTnVtYmVyKHZhbHVlKSkuZm9ybWF0KG1hc2spO1xuICAgIGlmICghdHJhbnNbZ3JvdXBLZXldKSB7XG4gICAgICB0cmFuc1tncm91cEtleV0gPSB7XG4gICAgICAgIFtmaWVsZF06IE51bWJlcihtb21lbnQoTnVtYmVyKHZhbHVlKSkuZm9ybWF0KCd4JykpLFxuICAgICAgfTtcbiAgICB9XG4gICAgb3RoZXJLZXlzLm1hcChrZXkgPT4ge1xuICAgICAgaWYgKHRyYW5zW2dyb3VwS2V5XSkge1xuICAgICAgICBpZiAoIXRyYW5zW2dyb3VwS2V5XVtrZXldIHx8ICF0cmFuc1tncm91cEtleV1ba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgICB0cmFuc1tncm91cEtleV1ba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zW2dyb3VwS2V5XVtrZXldLnB1c2goK2l0ZW1ba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCB0cmFuc0tleXMgPSBPYmplY3Qua2V5cyh0cmFucyk7XG4gIHRyYW5zS2V5cy5tYXAob2JqS2V5ID0+IHtcbiAgICBvdGhlcktleXMubWFwKGNvbCA9PiB7XG4gICAgICBpZiAoY29sdW1uc01ldGhvZFtjb2xdID09PSAnYXZnJykge1xuICAgICAgICBjb25zdCBzdW0gPSB0cmFuc1tvYmpLZXldW2NvbF0ucmVkdWNlKCh0LCBuKSA9PiB0ICsgbiwgMCk7XG4gICAgICAgIHRyYW5zW29iaktleV1bY29sXSA9IHN1bSAvIHRyYW5zW29iaktleV1bY29sXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGNvbHVtbnNNZXRob2RbY29sXSA9PT0gJ21pbicpIHtcbiAgICAgICAgdHJhbnNbb2JqS2V5XVtjb2xdID0gTWF0aC5taW4oLi4udHJhbnNbb2JqS2V5XVtjb2xdKTtcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uc01ldGhvZFtjb2xdID09PSAnbWF4Jykge1xuICAgICAgICB0cmFuc1tvYmpLZXldW2NvbF0gPSBNYXRoLm1heCguLi50cmFuc1tvYmpLZXldW2NvbF0pO1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW5zTWV0aG9kW2NvbF0gPT09ICdzdW0nKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IHRyYW5zW29iaktleV1bY29sXS5yZWR1Y2UoKHQsIG4pID0+IHQgKyBuLCAwKTtcbiAgICAgICAgdHJhbnNbb2JqS2V5XVtjb2xdID0gc3VtO1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW5zTWV0aG9kW2NvbF0gPT09ICdsYXN0Jykge1xuICAgICAgICB0cmFuc1tvYmpLZXldW2NvbF0gPSB0cmFuc1tvYmpLZXldW2NvbF1bdHJhbnNbb2JqS2V5XVtjb2xdLmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNbb2JqS2V5XVtjb2xdID0gdHJhbnNbb2JqS2V5XVtjb2xdWzBdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKHsgLi4udHJhbnNbb2JqS2V5XSB9KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcmVzdWx0LFxuICAgIGNvbHVtbnM6IHRyYW5zS2V5cyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJHcm91cEJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL2ZpbHRlckdyb3VwQnkuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWxFQTtBQUNBO0FBb0VBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBUEE7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBR0E7QUFFQTtBQWhCQTtBQWlCQTtBQWxCQTs7QUFvQkE7QUFBQTtBQUFBO0FBMUNBO0FBK0NBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=