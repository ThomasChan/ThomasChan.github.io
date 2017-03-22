webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _moment = __webpack_require__(14);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(16);

	var _data = __webpack_require__(7);

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
	    var PointSource = (0, _src.makaluFilter)(_source, [{ prefix: 'group.', name: 'metric' }], [{ prefix: 'x.', name: 'avalue' }, { prefix: 'y.', name: 'bvalue' }, { prefix: 'size.', name: 'value' }], ['sum', 'sum', 'sum']);
	    var bvalues = [];
	    var avalues = [];
	    var values = [];
	    PointSource.map(function (v) {
	      if (v['y.bvalue'] instanceof Array) {
	        bvalues.push.apply(bvalues, _toConsumableArray(v['y.bvalue']));
	      } else {
	        bvalues.push(v['y.bvalue']);
	      }
	      if (v['x.avalue'] instanceof Array) {
	        avalues.push.apply(avalues, _toConsumableArray(v['x.avalue']));
	      } else {
	        avalues.push(v['x.avalue']);
	      }
	      if (v['size.value'] instanceof Array) {
	        values.push.apply(values, _toConsumableArray(v['size.value']));
	      } else {
	        values.push(v['size.value']);
	      }
	    });

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_src.Point, {
	        title: this.state.title,
	        description: this.state.description,
	        width: window.innerWidth * .5,
	        height: window.innerHeight * .6,
	        margin: [20, 20, 20, 20],
	        source: PointSource,
	        groupAxis: 'metric',
	        groupAxisDomain: _data.metrics,
	        sizeAxis: 'value',
	        sizeAxisDomain: [Math.min.apply(Math, values), Math.max.apply(Math, values)],
	        xAxis: 'avalue',
	        xAxisDomain: [Math.min.apply(Math, avalues), Math.max.apply(Math, avalues)],
	        xAxisFormat: function xAxisFormat(v) {
	          return parseInt(v / 1000) + '\u5343';
	        },
	        yAxisFormat: function yAxisFormat(v) {
	          return parseInt(v / 1000) + '\u5343';
	        },
	        yAxis: 'bvalue',
	        yAxisDomain: [Math.min.apply(Math, bvalues), Math.max.apply(Math, bvalues)],
	        onTitleChange: function onTitleChange(e) {
	          return _this2.onTitleChange(e);
	        },
	        onDescriptionChange: function onDescriptionChange(e) {
	          return _this2.onDescriptionChange(e);
	        } }),
	      _react2.default.createElement(_src.Timebar, {
	        width: window.innerWidth * .5,
	        height: 40,
	        domain: _data.dates,
	        tickFormat: function tickFormat(v) {
	          return (0, _moment2.default)(v).format('YYYY');
	        },
	        onChange: function onChange(e) {
	          return _this2.onTimebarChange(e);
	        } })
	    );
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
	  for (var i = 1970; i < 2470; i++) {
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcG9pbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvcG9pbnQubWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoqKioiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBQb2ludCwgbWFrYWx1RmlsdGVyLCBUaW1lYmFyIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG4gICAgY29uc3QgUG9pbnRTb3VyY2UgPSBtYWthbHVGaWx0ZXIoX3NvdXJjZSxcbiAgICAgIFt7IHByZWZpeDogJ2dyb3VwLicsIG5hbWU6ICdtZXRyaWMnIH1dLFxuICAgICAgW1xuICAgICAgeyBwcmVmaXg6ICd4LicsIG5hbWU6ICdhdmFsdWUnfSxcbiAgICAgIHsgcHJlZml4OiAneS4nLCBuYW1lOiAnYnZhbHVlJ30sXG4gICAgICB7IHByZWZpeDogJ3NpemUuJywgbmFtZTogJ3ZhbHVlJ31dLFxuICAgICAgWydzdW0nLCAnc3VtJywgJ3N1bSddLFxuICAgICk7XG4gICAgY29uc3QgYnZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGF2YWx1ZXMgPSBbXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICBQb2ludFNvdXJjZS5tYXAodiA9PiB7XG4gICAgICBpZiAodlsneS5idmFsdWUnXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGJ2YWx1ZXMucHVzaCguLi52Wyd5LmJ2YWx1ZSddKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ2YWx1ZXMucHVzaCh2Wyd5LmJ2YWx1ZSddKTtcbiAgICAgIH1cbiAgICAgIGlmICh2Wyd4LmF2YWx1ZSddIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYXZhbHVlcy5wdXNoKC4uLnZbJ3guYXZhbHVlJ10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXZhbHVlcy5wdXNoKHZbJ3guYXZhbHVlJ10pO1xuICAgICAgfVxuICAgICAgaWYgKHZbJ3NpemUudmFsdWUnXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKC4uLnZbJ3NpemUudmFsdWUnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaCh2WydzaXplLnZhbHVlJ10pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxkaXY+PFBvaW50XG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtQb2ludFNvdXJjZX1cbiAgICAgIGdyb3VwQXhpcz17J21ldHJpYyd9XG4gICAgICBncm91cEF4aXNEb21haW49e21ldHJpY3N9XG4gICAgICBzaXplQXhpcz17J3ZhbHVlJ31cbiAgICAgIHNpemVBeGlzRG9tYWluPXtbTWF0aC5taW4oLi4udmFsdWVzKSwgTWF0aC5tYXgoLi4udmFsdWVzKV19XG4gICAgICB4QXhpcz17J2F2YWx1ZSd9XG4gICAgICB4QXhpc0RvbWFpbj17W01hdGgubWluKC4uLmF2YWx1ZXMpLCBNYXRoLm1heCguLi5hdmFsdWVzKV19XG4gICAgICB4QXhpc0Zvcm1hdD17diA9PiBgJHtwYXJzZUludCh2IC8gMTAwMCl95Y2DYH1cbiAgICAgIHlBeGlzRm9ybWF0PXt2ID0+IGAke3BhcnNlSW50KHYgLyAxMDAwKX3ljYNgfVxuICAgICAgeUF4aXM9eydidmFsdWUnfVxuICAgICAgeUF4aXNEb21haW49e1tNYXRoLm1pbiguLi5idmFsdWVzKSwgTWF0aC5tYXgoLi4uYnZhbHVlcyldfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX0gLz5cbiAgICAgIDxUaW1lYmFyXG4gICAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICBkb21haW49e2RhdGVzfVxuICAgICAgICB0aWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcG9pbnQubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDI0NzA7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBeEJBO0FBMEJBO0FBQ0E7O0FBbkZBO0FBQ0E7QUFxRkE7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFVQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=