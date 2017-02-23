webpackJsonp([5],{

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
	    var PieSource = (0, _filterGroup2.default)(_source, 'metric', {
	      'value': 'sum',
	      'metric': 'group by'
	    });

	    return _react2.default.createElement(_src.Pie, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: PieSource.data,
	      groupAxis: 'metric',
	      groupAxisDomain: PieSource.columns,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3BpZS5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkKioqKiIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL2ZpbHRlckdyb3VwLmpzP2EzODEqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgUGllIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgZmlsdGVyR3JvdXAgZnJvbSAnLi9hZ2dyZWdhdGlvbk1ldGhvZHMvZmlsdGVyR3JvdXAnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBfc291cmNlID0gc291cmNlO1xuICAgIGNvbnN0IHsgdGltZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGltZUZpbHRlcikge1xuICAgICAgX3NvdXJjZSA9IF9zb3VyY2UuZmlsdGVyKHYgPT4gdi50aW1lID49IHRpbWVGaWx0ZXJbMF0gJiYgdi50aW1lIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCBQaWVTb3VyY2UgPSBmaWx0ZXJHcm91cChfc291cmNlLCAnbWV0cmljJywge1xuICAgICAgJ3ZhbHVlJzogJ3N1bScsXG4gICAgICAnbWV0cmljJzogJ2dyb3VwIGJ5JyxcbiAgICB9KTtcblxuICAgIHJldHVybiA8UGllXG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtQaWVTb3VyY2UuZGF0YX1cbiAgICAgIGdyb3VwQXhpcz17YG1ldHJpY2B9XG4gICAgICBncm91cEF4aXNEb21haW49e1BpZVNvdXJjZS5jb2x1bW5zfVxuICAgICAgc2l6ZUF4aXM9e2B2YWx1ZWB9XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9waWUubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDIwMTc7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZmlsdGVyR3JvdXAgPSAoY29sbGVjdGlvbiwgY29sdW1uLCBtZXRob2RzKSA9PiB7XG4gIGNvbnN0IHRyYW5zID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobWV0aG9kcyk7XG4gIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihjb2x1bW4pLCAxKTtcbiAgY29uc3QgYW5vdGhlcktleSA9IGtleXNbMF07XG4gIGNvbnN0IGFub3RoZXJLZXlWYWx1ZXMgPSB7fTtcbiAgY29sbGVjdGlvbi5tYXAocm93ID0+IHtcbiAgICBpZiAoIXRyYW5zW3Jvd1tjb2x1bW5dXSkge1xuICAgICAgdHJhbnNbcm93W2NvbHVtbl1dID0ge1xuICAgICAgICBbY29sdW1uXTogcm93W2NvbHVtbl0sXG4gICAgICAgIFthbm90aGVyS2V5XTogMCxcbiAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zW3Jvd1tjb2x1bW5dXVthbm90aGVyS2V5XSArPSBOdW1iZXIocm93W2Fub3RoZXJLZXldKTtcbiAgICBpZiAoIWFub3RoZXJLZXlWYWx1ZXNbcm93W2NvbHVtbl1dKSB7XG4gICAgICBhbm90aGVyS2V5VmFsdWVzW3Jvd1tjb2x1bW5dXSA9IFtdO1xuICAgIH1cbiAgICBhbm90aGVyS2V5VmFsdWVzW3Jvd1tjb2x1bW5dXS5wdXNoKHJvd1thbm90aGVyS2V5XSk7XG4gIH0pO1xuICBjb25zdCB0cmFuc0tleXMgPSBPYmplY3Qua2V5cyh0cmFucyk7XG4gIHRyYW5zS2V5cy5tYXAob2JqS2V5ID0+IHtcbiAgICBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ2F2ZycpIHtcbiAgICAgIGNvbnN0IHN1bSA9IGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XS5yZWR1Y2UoKHRvdGFsLCBuZXh0KSA9PiB0b3RhbCArIG5leHQsIDApO1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IHN1bSAvIGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnbWluJykge1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IE1hdGgubWluKC4uLmFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnbWF4Jykge1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IE1hdGgubWF4KC4uLmFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnc3VtJykge1xuICAgICAgY29uc3Qgc3VtID0gYW5vdGhlcktleVZhbHVlc1tvYmpLZXldLnJlZHVjZSgodG90YWwsIG5leHQpID0+IHRvdGFsICsgbmV4dCwgMCk7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gc3VtO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ2xhc3QnKSB7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gYW5vdGhlcktleVZhbHVlc1tvYmpLZXldW2Fub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XS5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdncm91cCBieScpIHtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBfLnVuaXFCeShhbm90aGVyS2V5VmFsdWVzW29iaktleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gYW5vdGhlcktleVZhbHVlc1tvYmpLZXldWzBdO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh7IC4uLnRyYW5zW29iaktleV0gfSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHJlc3VsdCxcbiAgICBjb2x1bW5zOiB0cmFuc0tleXMsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVyR3JvdXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9hZ2dyZWdhdGlvbk1ldGhvZHMvZmlsdGVyR3JvdXAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFqREE7QUFDQTtBQW1EQTs7Ozs7Ozs7Ozs7OztBQzNEQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFsQkE7O0FBb0JBO0FBQUE7QUFBQTtBQXpDQTtBQThDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9