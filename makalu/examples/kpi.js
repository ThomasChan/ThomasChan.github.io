webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(16);

	var _moment = __webpack_require__(14);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(17);

	var _data = __webpack_require__(7);

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
	    var KPISource = (0, _src.makaluFilter)(_source, [{
	      name: 'metric'
	    }], ['value'], ['sum']).map(function (v) {
	      return v.value;
	    });

	    return _react2.default.createElement(_src.KPI, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: KPISource,
	      xAxis: 'value',
	      value: KPISource.reduce(function (n, m) {
	        return n + m;
	      }, 0),
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMva3BpLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2twaS5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEtQSSwgbWFrYWx1RmlsdGVyIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG4gICAgY29uc3QgS1BJU291cmNlID0gbWFrYWx1RmlsdGVyKF9zb3VyY2UsIFt7XG4gICAgICAgIG5hbWU6ICdtZXRyaWMnXG4gICAgICB9XSwgWyd2YWx1ZSddLCBbJ3N1bSddKS5tYXAodiA9PiB2LnZhbHVlKTtcblxuICAgIHJldHVybiA8S1BJXG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtLUElTb3VyY2V9XG4gICAgICB4QXhpcz17YHZhbHVlYH1cbiAgICAgIHZhbHVlPXtLUElTb3VyY2UucmVkdWNlKChuLCBtKSA9PiBuICsgbSwgMCl9XG4gICAgICB0aW1lYmFyU2hvdz17dHJ1ZX1cbiAgICAgIHRpbWViYXJEb21haW49e2RhdGVzfVxuICAgICAgdGltZWJhclRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX1cbiAgICAgIG9uVGltZWJhckNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9rcGkubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDIwMTc7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQS9DQTtBQUNBO0FBaURBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9