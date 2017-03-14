webpackJsonp([6],{

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
	    var PieSource = (0, _src.makaluFilter)(_source, [{
	      name: 'metric'
	    }], ['value'], ['sum']);

	    return _react2.default.createElement(_src.Pie, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: PieSource,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3BpZS5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBQaWUsIG1ha2FsdUZpbHRlciB9IGZyb20gJy4uL3NyYyc7XG5cbmltcG9ydCB7IHNvdXJjZSwgZGltZW5zaW9ucywgbWV0cmljcywgZGF0ZXMgfSBmcm9tICcuL2RhdGEnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IFBpZVNvdXJjZSA9IG1ha2FsdUZpbHRlcihfc291cmNlLCBbe1xuICAgICAgICBuYW1lOiAnbWV0cmljJ1xuICAgICAgfV0sIFsndmFsdWUnXSwgWydzdW0nXSk7XG5cbiAgICByZXR1cm4gPFBpZVxuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17UGllU291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgIHNpemVBeGlzPXtgdmFsdWVgfVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcGllLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFoREE7QUFDQTtBQWtEQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==