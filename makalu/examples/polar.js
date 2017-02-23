webpackJsonp([4],{

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

	var _filterGroup = __webpack_require__(26);

	var _filterGroup2 = _interopRequireDefault(_filterGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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
	    var PolarSource = (0, _filterGroup2.default)(_source, 'metric', {
	      'value': 'sum',
	      'metric': 'group by'
	    });

	    return _react2.default.createElement(_src.Polar, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: PolarSource.data,
	      groupAxis: 'metric',
	      groupAxisDomain: PolarSource.columns,
	      sizeAxis: 'value',
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

/***/ 26:
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

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var filterGroup = function filterGroup(collection, column, methods) {
	  var trans = {};
	  var result = [];
	  var keys = Object.keys(methods);
	  keys.splice(keys.indexOf(column), 1);
	  var anotherKey = keys[0];
	  var anotherKeyValues = {};
	  collection.map(function (row) {
	    if (!trans[row[column]]) {
	      var _trans$row$column;

	      trans[row[column]] = (_trans$row$column = {}, _defineProperty(_trans$row$column, column, row[column]), _defineProperty(_trans$row$column, anotherKey, 0), _trans$row$column);
	    }
	    trans[row[column]][anotherKey] += Number(row[anotherKey]);
	    if (!anotherKeyValues[row[column]]) {
	      anotherKeyValues[row[column]] = [];
	    }
	    anotherKeyValues[row[column]].push(row[anotherKey]);
	  });
	  var transKeys = Object.keys(trans);
	  transKeys.map(function (objKey) {
	    if (methods[anotherKey] === 'avg') {
	      var sum = anotherKeyValues[objKey].reduce(function (total, next) {
	        return total + next;
	      }, 0);
	      trans[objKey][anotherKey] = sum / anotherKeyValues[objKey].length;
	    } else if (methods[anotherKey] === 'min') {
	      trans[objKey][anotherKey] = Math.min.apply(Math, _toConsumableArray(anotherKeyValues[objKey]));
	    } else if (methods[anotherKey] === 'max') {
	      trans[objKey][anotherKey] = Math.max.apply(Math, _toConsumableArray(anotherKeyValues[objKey]));
	    } else if (methods[anotherKey] === 'sum') {
	      var _sum = anotherKeyValues[objKey].reduce(function (total, next) {
	        return total + next;
	      }, 0);
	      trans[objKey][anotherKey] = _sum;
	    } else if (methods[anotherKey] === 'last') {
	      trans[objKey][anotherKey] = anotherKeyValues[objKey][anotherKeyValues[objKey].length - 1];
	    } else if (methods[anotherKey] === 'group by') {
	      trans[objKey][anotherKey] = _lodash2.default.uniqBy(anotherKeyValues[objKey]);
	    } else {
	      trans[objKey][anotherKey] = anotherKeyValues[objKey][0];
	    }
	    result.push(_extends({}, trans[objKey]));
	  });
	  return {
	    data: result,
	    columns: transKeys
	  };
	};
	exports.default = filterGroup;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcG9sYXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvcG9sYXIubWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoqKiIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL2ZpbHRlckdyb3VwLmpzP2EzODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBQb2xhciB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGZpbHRlckdyb3VwIGZyb20gJy4vYWdncmVnYXRpb25NZXRob2RzL2ZpbHRlckdyb3VwJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG4gICAgY29uc3QgUG9sYXJTb3VyY2UgPSBmaWx0ZXJHcm91cChfc291cmNlLCAnbWV0cmljJywge1xuICAgICAgJ3ZhbHVlJzogJ3N1bScsXG4gICAgICAnbWV0cmljJzogJ2dyb3VwIGJ5JyxcbiAgICB9KTtcblxuICAgIHJldHVybiA8UG9sYXJcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgIGhlaWdodD17d2luZG93LmlubmVySGVpZ2h0ICogLjZ9XG4gICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICBzb3VyY2U9e1BvbGFyU291cmNlLmRhdGF9XG4gICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgZ3JvdXBBeGlzRG9tYWluPXtQb2xhclNvdXJjZS5jb2x1bW5zfVxuICAgICAgc2l6ZUF4aXM9e2B2YWx1ZWB9XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9wb2xhci5tZFxuICoqLyIsIlxuY29uc3QgZmlyc3RfeWVhcl9kYXRhID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgYW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgeWV0YW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgZGF0ZXMgPSAoKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOTcwOyBpIDwgMjAxNzsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goK25ldyBEYXRlKFN0cmluZyhpKSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KSgpO1xuY29uc3QgbWFrZUZha2VEYXRhID0gZmFrZSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZGF0ZXMubWFwKGQgPT4ge1xuICAgIGxldCBkZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmFrZSkpO1xuICAgIGRkID0gZGQubWFwKGRkZCA9PiB7XG4gICAgICByZXR1cm4gZGRkLm1hcChkZGRkID0+IHtcbiAgICAgICAgZGRkZCA9IGRkZGQgKiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBkZGRkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGF0YS5wdXNoKGRkKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRhdGEgPSBtYWtlRmFrZURhdGEoZmlyc3RfeWVhcl9kYXRhKTtcbmNvbnN0IGFkYXRhID0gbWFrZUZha2VEYXRhKGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBzaXplZGF0YSA9IG1ha2VGYWtlRGF0YSh5ZXRhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3QgZGltZW5zaW9ucyA9IFsn5YyX5LqsJywgJ+S4iua1tycsICflub/lt54nLCAn5rex5ZyzJ107XG5jb25zdCBtZXRyaWNzID0gWyfln47luILng63luqYnLCAn6KGjJywgJ+mjnycsICfkvY8nLCAn6Jaq6LWEJywgJ+ihjCcsICfmsJTlgJknLCAn5Yy755aXJywgJ+aVmeiCsiddO1xubGV0IHNvdXJjZSA9IFtdO1xuZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRlcy5sZW5ndGg7IHkrKykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1ldHJpY3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgY2l0eTogZGltZW5zaW9uc1tpXSxcbiAgICAgICAgbWV0cmljOiBtZXRyaWNzW3hdLFxuICAgICAgICB2YWx1ZTogZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYXZhbHVlOiBhZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYnZhbHVlOiBzaXplZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgdGltZTogZGF0ZXNbeV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2UsXG4gIG1ldHJpY3MsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGVzLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2RhdGEuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBmaWx0ZXJHcm91cCA9IChjb2xsZWN0aW9uLCBjb2x1bW4sIG1ldGhvZHMpID0+IHtcbiAgY29uc3QgdHJhbnMgPSB7fTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtZXRob2RzKTtcbiAga2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKGNvbHVtbiksIDEpO1xuICBjb25zdCBhbm90aGVyS2V5ID0ga2V5c1swXTtcbiAgY29uc3QgYW5vdGhlcktleVZhbHVlcyA9IHt9O1xuICBjb2xsZWN0aW9uLm1hcChyb3cgPT4ge1xuICAgIGlmICghdHJhbnNbcm93W2NvbHVtbl1dKSB7XG4gICAgICB0cmFuc1tyb3dbY29sdW1uXV0gPSB7XG4gICAgICAgIFtjb2x1bW5dOiByb3dbY29sdW1uXSxcbiAgICAgICAgW2Fub3RoZXJLZXldOiAwLFxuICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNbcm93W2NvbHVtbl1dW2Fub3RoZXJLZXldICs9IE51bWJlcihyb3dbYW5vdGhlcktleV0pO1xuICAgIGlmICghYW5vdGhlcktleVZhbHVlc1tyb3dbY29sdW1uXV0pIHtcbiAgICAgIGFub3RoZXJLZXlWYWx1ZXNbcm93W2NvbHVtbl1dID0gW107XG4gICAgfVxuICAgIGFub3RoZXJLZXlWYWx1ZXNbcm93W2NvbHVtbl1dLnB1c2gocm93W2Fub3RoZXJLZXldKTtcbiAgfSk7XG4gIGNvbnN0IHRyYW5zS2V5cyA9IE9iamVjdC5rZXlzKHRyYW5zKTtcbiAgdHJhbnNLZXlzLm1hcChvYmpLZXkgPT4ge1xuICAgIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnYXZnJykge1xuICAgICAgY29uc3Qgc3VtID0gYW5vdGhlcktleVZhbHVlc1tvYmpLZXldLnJlZHVjZSgodG90YWwsIG5leHQpID0+IHRvdGFsICsgbmV4dCwgMCk7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gc3VtIC8gYW5vdGhlcktleVZhbHVlc1tvYmpLZXldLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdtaW4nKSB7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gTWF0aC5taW4oLi4uYW5vdGhlcktleVZhbHVlc1tvYmpLZXldKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdtYXgnKSB7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gTWF0aC5tYXgoLi4uYW5vdGhlcktleVZhbHVlc1tvYmpLZXldKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdzdW0nKSB7XG4gICAgICBjb25zdCBzdW0gPSBhbm90aGVyS2V5VmFsdWVzW29iaktleV0ucmVkdWNlKCh0b3RhbCwgbmV4dCkgPT4gdG90YWwgKyBuZXh0LCAwKTtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBzdW07XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnbGFzdCcpIHtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBhbm90aGVyS2V5VmFsdWVzW29iaktleV1bYW5vdGhlcktleVZhbHVlc1tvYmpLZXldLmxlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ2dyb3VwIGJ5Jykge1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IF8udW5pcUJ5KGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBhbm90aGVyS2V5VmFsdWVzW29iaktleV1bMF07XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHsgLi4udHJhbnNbb2JqS2V5XSB9KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcmVzdWx0LFxuICAgIGNvbHVtbnM6IHRyYW5zS2V5cyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJHcm91cDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FnZ3JlZ2F0aW9uTWV0aG9kcy9maWx0ZXJHcm91cC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWpEQTtBQUNBO0FBbURBOzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQWxCQTs7QUFvQkE7QUFBQTtBQUFBO0FBekNBO0FBOENBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=