webpackJsonp([16],{

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

	var AreaSource = (0, _src.makaluFilter)(_data.source, [{
	  prefix: 'x.',
	  name: 'time',
	  format: function format(d) {
	    return (0, _moment2.default)(d).format('YYYY');
	  }
	}], [{
	  prefix: 'y.',
	  name: 'value'
	}, {
	  prefix: 'y.',
	  name: 'avalue'
	}, {
	  prefix: 'y.',
	  name: 'bvalue'
	}], ['sum', 'sum', 'sum']);

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
	        return v['x.time'] >= timeFilter[0] && v['x.time'] <= timeFilter[1];
	      });
	    }
	    var yAxisDomain = [[0, 0], [0, 0], [0, 0]];
	    var xAxisDomain = [timeFilter ? timeFilter[0] : Math.min.apply(Math, _toConsumableArray(_data.dates)), timeFilter ? timeFilter[1] : Math.min.apply(Math, _toConsumableArray(_data.dates))];
	    _source.map(function (v) {
	      yAxisDomain[0][0] = Math.min(yAxisDomain[0][0], v['y.value']);
	      yAxisDomain[0][1] = Math.max(yAxisDomain[0][1], v['y.value']);
	      yAxisDomain[1][0] = Math.min(yAxisDomain[1][0], v['y.avalue']);
	      yAxisDomain[1][1] = Math.max(yAxisDomain[1][1], v['y.avalue']);
	      yAxisDomain[2][0] = Math.min(yAxisDomain[2][0], v['y.bvalue']);
	      yAxisDomain[2][1] = Math.max(yAxisDomain[2][1], v['y.bvalue']);

	      xAxisDomain[0] = Math.min(xAxisDomain[0], v['x.time']);
	      xAxisDomain[1] = Math.max(xAxisDomain[1], v['x.time']);
	    });

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_src.Area, {
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
	        yAxisDomain: yAxisDomain,
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
	        minimumStepSize: 6,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9hcmVhLm1kIiwid2VicGFjazovLy9leGFtcGxlcy9kYXRhLmpzPzBjYmQqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQXJlYSwgbWFrYWx1RmlsdGVyLCBUaW1lYmFyIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5cblxuY29uc3QgQXJlYVNvdXJjZSA9IG1ha2FsdUZpbHRlcihcbiAgc291cmNlLFxuICBbXG4gICAge1xuICAgICAgcHJlZml4OiAneC4nLFxuICAgICAgbmFtZTogJ3RpbWUnLFxuICAgICAgZm9ybWF0OiBkID0+IG1vbWVudChkKS5mb3JtYXQoJ1lZWVknKSxcbiAgICB9LFxuICBdLFxuICBbe1xuICAgIHByZWZpeDogJ3kuJyxcbiAgICBuYW1lOiAndmFsdWUnLFxuICB9LCB7XG4gICAgcHJlZml4OiAneS4nLFxuICAgIG5hbWU6ICdhdmFsdWUnLFxuICB9LCB7XG4gICAgcHJlZml4OiAneS4nLFxuICAgIG5hbWU6ICdidmFsdWUnLFxuICB9XSxcbiAgWydzdW0nLCAnc3VtJywgJ3N1bSddLFxuKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IEFyZWFTb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2Wyd4LnRpbWUnXSA+PSB0aW1lRmlsdGVyWzBdICYmIHZbJ3gudGltZSddIDw9IHRpbWVGaWx0ZXJbMV0pO1xuICAgIH1cbiAgICBjb25zdCB5QXhpc0RvbWFpbiA9IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICBdO1xuICAgIGNvbnN0IHhBeGlzRG9tYWluID0gW1xuICAgICAgKHRpbWVGaWx0ZXIgPyB0aW1lRmlsdGVyWzBdIDogTWF0aC5taW4oLi4uZGF0ZXMpKSxcbiAgICAgICh0aW1lRmlsdGVyID8gdGltZUZpbHRlclsxXSA6IE1hdGgubWluKC4uLmRhdGVzKSksXG4gICAgXTtcbiAgICBfc291cmNlLm1hcCh2ID0+IHtcbiAgICAgIHlBeGlzRG9tYWluWzBdWzBdID0gTWF0aC5taW4oeUF4aXNEb21haW5bMF1bMF0sIHZbJ3kudmFsdWUnXSk7XG4gICAgICB5QXhpc0RvbWFpblswXVsxXSA9IE1hdGgubWF4KHlBeGlzRG9tYWluWzBdWzFdLCB2Wyd5LnZhbHVlJ10pO1xuICAgICAgeUF4aXNEb21haW5bMV1bMF0gPSBNYXRoLm1pbih5QXhpc0RvbWFpblsxXVswXSwgdlsneS5hdmFsdWUnXSk7XG4gICAgICB5QXhpc0RvbWFpblsxXVsxXSA9IE1hdGgubWF4KHlBeGlzRG9tYWluWzFdWzFdLCB2Wyd5LmF2YWx1ZSddKTtcbiAgICAgIHlBeGlzRG9tYWluWzJdWzBdID0gTWF0aC5taW4oeUF4aXNEb21haW5bMl1bMF0sIHZbJ3kuYnZhbHVlJ10pO1xuICAgICAgeUF4aXNEb21haW5bMl1bMV0gPSBNYXRoLm1heCh5QXhpc0RvbWFpblsyXVsxXSwgdlsneS5idmFsdWUnXSk7XG5cbiAgICAgIHhBeGlzRG9tYWluWzBdID0gTWF0aC5taW4oeEF4aXNEb21haW5bMF0sIHZbJ3gudGltZSddKTtcbiAgICAgIHhBeGlzRG9tYWluWzFdID0gTWF0aC5tYXgoeEF4aXNEb21haW5bMV0sIHZbJ3gudGltZSddKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEFyZWFcbiAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgICBzb3VyY2U9e19zb3VyY2V9XG4gICAgICAgIHhBeGlzPXtgdGltZWB9XG4gICAgICAgIHhBeGlzRG9tYWluPXt4QXhpc0RvbWFpbn1cbiAgICAgICAgeEF4aXNGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgICB5QXhpcz17W2B2YWx1ZWAsICdhdmFsdWUnLCAnYnZhbHVlJ119XG4gICAgICAgIHlBeGlzRG9tYWluPXt5QXhpc0RvbWFpbn1cbiAgICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfSAvPlxuICAgICAgPFRpbWViYXJcbiAgICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIGRvbWFpbj17ZGF0ZXN9XG4gICAgICAgIG1pbmltdW1TdGVwU2l6ZT17Nn1cbiAgICAgICAgdGlja0Zvcm1hdD17diA9PiBtb21lbnQodikuZm9ybWF0KCdZWVlZJyl9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25UaW1lYmFyQ2hhbmdlKGUpfSAvPlxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FyZWEubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDI0NzA7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBckJBO0FBdUJBO0FBQ0E7O0FBeEVBO0FBQ0E7QUEwRUE7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFVQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=