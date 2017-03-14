webpackJsonp([10],{

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
	    var DonutSource = (0, _src.makaluFilter)(_source, [{
	      name: 'metric'
	    }], ['value'], ['sum']);

	    return _react2.default.createElement(_src.Donut, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: DonutSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvZG9udXQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvZG9udXQubWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRG9udXQsIG1ha2FsdUZpbHRlciB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IERvbnV0U291cmNlID0gbWFrYWx1RmlsdGVyKF9zb3VyY2UsIFt7XG4gICAgICAgIG5hbWU6ICdtZXRyaWMnXG4gICAgICB9XSwgWyd2YWx1ZSddLCBbJ3N1bSddKTtcblxuICAgIHJldHVybiA8RG9udXRcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgIGhlaWdodD17d2luZG93LmlubmVySGVpZ2h0ICogLjZ9XG4gICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICBzb3VyY2U9e0RvbnV0U291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgIHNpemVBeGlzPXtgdmFsdWVgfVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZG9udXQubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDIwMTc7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWhEQTtBQUNBO0FBa0RBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9