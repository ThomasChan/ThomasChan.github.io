webpackJsonp([13],{

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

	    var BoxplotSource = (0, _src.transSourceToBoxplot)((0, _src.makaluFilter)(_source, [{
	      name: 'metric'
	    }], ['value'], ['array']), 'metric', 'value');

	    return _react2.default.createElement(_src.Boxplot, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: BoxplotSource.result,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      yAxis: 'value',
	      yAxisDomain: BoxplotSource.yDomain,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYm94cGxvdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9ib3hwbG90Lm1kIiwid2VicGFjazovLy9leGFtcGxlcy9kYXRhLmpzPzBjYmQqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEJveHBsb3QsIHRyYW5zU291cmNlVG9Cb3hwbG90LCBtYWthbHVGaWx0ZXIgfSBmcm9tICcuLi9zcmMnO1xuXG5pbXBvcnQgeyBzb3VyY2UsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGRhdGVzIH0gZnJvbSAnLi9kYXRhJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG5cbiAgICBjb25zdCBCb3hwbG90U291cmNlID0gdHJhbnNTb3VyY2VUb0JveHBsb3QoXG4gICAgICBtYWthbHVGaWx0ZXIoX3NvdXJjZSwgW3tcbiAgICAgICAgbmFtZTogJ21ldHJpYydcbiAgICAgIH1dLCBbJ3ZhbHVlJ10sIFsnYXJyYXknXSksXG4gICAgICAnbWV0cmljJyxcbiAgICAgICd2YWx1ZScsXG4gICAgKTtcblxuICAgIHJldHVybiA8Qm94cGxvdFxuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17Qm94cGxvdFNvdXJjZS5yZXN1bHR9XG4gICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgZ3JvdXBBeGlzRG9tYWluPXttZXRyaWNzfVxuICAgICAgeUF4aXM9e2B2YWx1ZWB9XG4gICAgICB5QXhpc0RvbWFpbj17Qm94cGxvdFNvdXJjZS55RG9tYWlufVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYm94cGxvdC5tZFxuICoqLyIsIlxuY29uc3QgZmlyc3RfeWVhcl9kYXRhID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgYW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgeWV0YW5vdGhlck1ldHJpY1ZhbHVlID0gW1xuICBbNSwgMiwgMywgMywgNSwgNCwgMiwgNSwgNV0sXG4gIFs1LCAzLCAyLCA0LCA0LCA0LCAzLCAzLCA0XSxcbiAgWzMsIDUsIDUsIDUsIDIsIDUsIDQsIDQsIDNdLFxuICBbNCwgNCwgNCwgMiwgMywgNCwgNSwgMiwgMl0sXG5dO1xuY29uc3QgZGF0ZXMgPSAoKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOTcwOyBpIDwgMjAxNzsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goK25ldyBEYXRlKFN0cmluZyhpKSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KSgpO1xuY29uc3QgbWFrZUZha2VEYXRhID0gZmFrZSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZGF0ZXMubWFwKGQgPT4ge1xuICAgIGxldCBkZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmFrZSkpO1xuICAgIGRkID0gZGQubWFwKGRkZCA9PiB7XG4gICAgICByZXR1cm4gZGRkLm1hcChkZGRkID0+IHtcbiAgICAgICAgZGRkZCA9IGRkZGQgKiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBkZGRkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGF0YS5wdXNoKGRkKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcbmNvbnN0IGRhdGEgPSBtYWtlRmFrZURhdGEoZmlyc3RfeWVhcl9kYXRhKTtcbmNvbnN0IGFkYXRhID0gbWFrZUZha2VEYXRhKGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBzaXplZGF0YSA9IG1ha2VGYWtlRGF0YSh5ZXRhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3QgZGltZW5zaW9ucyA9IFsn5YyX5LqsJywgJ+S4iua1tycsICflub/lt54nLCAn5rex5ZyzJ107XG5jb25zdCBtZXRyaWNzID0gWyfln47luILng63luqYnLCAn6KGjJywgJ+mjnycsICfkvY8nLCAn6Jaq6LWEJywgJ+ihjCcsICfmsJTlgJknLCAn5Yy755aXJywgJ+aVmeiCsiddO1xubGV0IHNvdXJjZSA9IFtdO1xuZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRlcy5sZW5ndGg7IHkrKykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1ldHJpY3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgY2l0eTogZGltZW5zaW9uc1tpXSxcbiAgICAgICAgbWV0cmljOiBtZXRyaWNzW3hdLFxuICAgICAgICB2YWx1ZTogZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYXZhbHVlOiBhZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgYnZhbHVlOiBzaXplZGF0YVt5XVtpXVt4XSxcbiAgICAgICAgdGltZTogZGF0ZXNbeV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2UsXG4gIG1ldHJpY3MsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGVzLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2RhdGEuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQXREQTtBQUNBO0FBd0RBOzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBVUE7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9