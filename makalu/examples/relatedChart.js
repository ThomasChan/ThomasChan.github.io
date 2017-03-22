webpackJsonp([4],{

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
	    var BarSource = (0, _src.makaluFilter)(_source, [{ prefix: 'group.', name: 'metric' }], [{ prefix: 'y.', name: 'value' }, { prefix: 'color.', name: 'avalue' }], ['sum', 'sum']);
	    var min = 0;
	    var minColor = 0;
	    var max = 0;
	    var maxColor = 0;
	    var l = BarSource.length;
	    while (l--) {
	      min = Math.min(min, BarSource[l]['y.value']);
	      max = Math.max(max, BarSource[l]['y.value']);
	      minColor = Math.min(minColor, BarSource[l]['color.avalue']);
	      maxColor = Math.max(maxColor, BarSource[l]['color.avalue']);
	    }
	    var StackSource = (0, _src.transSourceToStack)((0, _src.makaluFilter)(_source, [{ prefix: 'group.', name: 'metric' }, { prefix: 'subgroup.', name: 'city' }], [{ prefix: 'y.', name: 'value' }], ['sum']), 'group.metric', 'subgroup.city', 'y.value');
	    var BubbleSource = (0, _src.makaluFilter)(_source, [{
	      prefix: 'group.',
	      name: 'metric'
	    }], [{
	      prefix: 'size.',
	      name: 'value'
	    }, {
	      prefix: 'color.',
	      name: 'value'
	    }], ['sum', 'sum']);
	    var minColorBubble = 0;
	    var maxColorBubble = 0;
	    var bl = BubbleSource.length;
	    while (bl--) {
	      minColorBubble = Math.min(minColorBubble, BubbleSource[bl]['color.value']);
	      maxColorBubble = Math.max(maxColorBubble, BubbleSource[bl]['color.value']);
	    }
	    var KPISource = BubbleSource.map(function (v) {
	      return v['size.value'];
	    });

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_src.Bar, {
	        width: 600,
	        height: 340,
	        margin: [20, 20, 20, 20],
	        source: BarSource,
	        groupAxis: 'metric',
	        groupAxisDomain: _data.metrics,
	        yAxis: ['value'],
	        yAxisDomain: [[min, max]],
	        colorAxis: 'avalue',
	        colorAxisDomain: [minColor, maxColor],
	        onTitleChange: function onTitleChange(e) {
	          return _this2.onTitleChange(e);
	        },
	        onDescriptionChange: function onDescriptionChange(e) {
	          return _this2.onDescriptionChange(e);
	        } }),
	      _react2.default.createElement(_src.KPI, {
	        width: 600,
	        height: 340,
	        margin: [20, 20, 20, 20],
	        source: KPISource,
	        xAxis: 'value',
	        value: KPISource.reduce(function (n, m) {
	          return n + m;
	        }, 0),
	        onTitleChange: function onTitleChange(e) {
	          return _this2.onTitleChange(e);
	        },
	        onDescriptionChange: function onDescriptionChange(e) {
	          return _this2.onDescriptionChange(e);
	        } }),
	      _react2.default.createElement(_src.Stack, {
	        width: 600,
	        height: 340,
	        margin: [20, 20, 20, 20],
	        source: StackSource.result,
	        groupAxis: 'metric',
	        groupAxisDomain: _data.metrics,
	        subgroupAxis: 'city',
	        subgroupAxisDomain: _data.dimensions,
	        yAxis: 'value',
	        yAxisDomain: StackSource.yAxisDomain,
	        onTitleChange: function onTitleChange(e) {
	          return _this2.onTitleChange(e);
	        },
	        onDescriptionChange: function onDescriptionChange(e) {
	          return _this2.onDescriptionChange(e);
	        } }),
	      _react2.default.createElement(_src.Bubble, {
	        width: 600,
	        height: 340,
	        margin: [20, 20, 20, 20],
	        source: BubbleSource,
	        groupAxis: 'metric',
	        groupAxisDomain: _data.metrics,
	        sizeAxis: 'value',
	        colorAxis: 'value',
	        colorAxisDomain: [minColorBubble, maxColorBubble],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcmVsYXRlZENoYXJ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3JlbGF0ZWRDaGFydC5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkKioiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCYXIsIEtQSSwgU3RhY2ssIEJ1YmJsZSwgdHJhbnNTb3VyY2VUb1N0YWNrLCBtYWthbHVGaWx0ZXIsIFRpbWViYXIgfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IEJhclNvdXJjZSA9IG1ha2FsdUZpbHRlcihfc291cmNlLFxuICAgICAgW3sgcHJlZml4OiAnZ3JvdXAuJywgbmFtZTogJ21ldHJpYycgfV0sXG4gICAgICBbeyBwcmVmaXg6ICd5LicsIG5hbWU6ICd2YWx1ZSd9LCB7IHByZWZpeDogJ2NvbG9yLicsIG5hbWU6ICdhdmFsdWUnfV0sXG4gICAgICBbJ3N1bScsICdzdW0nXSxcbiAgICApO1xuICAgIGxldCBtaW4gPSAwO1xuICAgIGxldCBtaW5Db2xvciA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgbGV0IG1heENvbG9yID0gMDtcbiAgICBsZXQgbCA9IEJhclNvdXJjZS5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgbWluID0gTWF0aC5taW4obWluLCBCYXJTb3VyY2VbbF1bJ3kudmFsdWUnXSk7XG4gICAgICBtYXggPSBNYXRoLm1heChtYXgsIEJhclNvdXJjZVtsXVsneS52YWx1ZSddKTtcbiAgICAgIG1pbkNvbG9yID0gTWF0aC5taW4obWluQ29sb3IsIEJhclNvdXJjZVtsXVsnY29sb3IuYXZhbHVlJ10pO1xuICAgICAgbWF4Q29sb3IgPSBNYXRoLm1heChtYXhDb2xvciwgQmFyU291cmNlW2xdWydjb2xvci5hdmFsdWUnXSk7XG4gICAgfVxuICAgIGNvbnN0IFN0YWNrU291cmNlID0gdHJhbnNTb3VyY2VUb1N0YWNrKFxuICAgICAgbWFrYWx1RmlsdGVyKF9zb3VyY2UsXG4gICAgICAgIFt7IHByZWZpeDogJ2dyb3VwLicsIG5hbWU6ICdtZXRyaWMnIH0sIHsgcHJlZml4OiAnc3ViZ3JvdXAuJywgbmFtZTogJ2NpdHknIH1dLFxuICAgICAgICBbeyBwcmVmaXg6ICd5LicsIG5hbWU6ICd2YWx1ZSd9XSxcbiAgICAgICAgWydzdW0nXSxcbiAgICAgICksXG4gICAgICAnZ3JvdXAubWV0cmljJyxcbiAgICAgICdzdWJncm91cC5jaXR5JyxcbiAgICAgICd5LnZhbHVlJyxcbiAgICApO1xuICAgIGNvbnN0IEJ1YmJsZVNvdXJjZSA9IG1ha2FsdUZpbHRlcihfc291cmNlLCBbe1xuICAgICAgICBwcmVmaXg6ICdncm91cC4nLFxuICAgICAgICBuYW1lOiAnbWV0cmljJ1xuICAgICAgfV0sIFt7XG4gICAgICAgIHByZWZpeDogJ3NpemUuJyxcbiAgICAgICAgbmFtZTogJ3ZhbHVlJ1xuICAgICAgfSwge1xuICAgICAgICBwcmVmaXg6ICdjb2xvci4nLFxuICAgICAgICBuYW1lOiAndmFsdWUnXG4gICAgICB9XSwgWydzdW0nLCAnc3VtJ10pO1xuICAgIGxldCBtaW5Db2xvckJ1YmJsZSA9IDA7XG4gICAgbGV0IG1heENvbG9yQnViYmxlID0gMDtcbiAgICBsZXQgYmwgPSBCdWJibGVTb3VyY2UubGVuZ3RoO1xuICAgIHdoaWxlIChibC0tKSB7XG4gICAgICBtaW5Db2xvckJ1YmJsZSA9IE1hdGgubWluKG1pbkNvbG9yQnViYmxlLCBCdWJibGVTb3VyY2VbYmxdWydjb2xvci52YWx1ZSddKTtcbiAgICAgIG1heENvbG9yQnViYmxlID0gTWF0aC5tYXgobWF4Q29sb3JCdWJibGUsIEJ1YmJsZVNvdXJjZVtibF1bJ2NvbG9yLnZhbHVlJ10pO1xuICAgIH1cbiAgICBjb25zdCBLUElTb3VyY2UgPSBCdWJibGVTb3VyY2UubWFwKHYgPT4gdlsnc2l6ZS52YWx1ZSddKTtcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEJhclxuICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICBoZWlnaHQ9ezM0MH1cbiAgICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgICBzb3VyY2U9e0JhclNvdXJjZX1cbiAgICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgICAgZ3JvdXBBeGlzRG9tYWluPXttZXRyaWNzfVxuICAgICAgICB5QXhpcz17W2B2YWx1ZWBdfVxuICAgICAgICB5QXhpc0RvbWFpbj17W1ttaW4sIG1heF1dfVxuICAgICAgICBjb2xvckF4aXM9e2BhdmFsdWVgfVxuICAgICAgICBjb2xvckF4aXNEb21haW49e1ttaW5Db2xvciwgbWF4Q29sb3JdfVxuICAgICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9IC8+XG4gICAgICA8S1BJXG4gICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgIGhlaWdodD17MzQwfVxuICAgICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICAgIHNvdXJjZT17S1BJU291cmNlfVxuICAgICAgICB4QXhpcz17YHZhbHVlYH1cbiAgICAgICAgdmFsdWU9e0tQSVNvdXJjZS5yZWR1Y2UoKG4sIG0pID0+IG4gKyBtLCAwKX1cbiAgICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfSAvPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgIGhlaWdodD17MzQwfVxuICAgICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICAgIHNvdXJjZT17U3RhY2tTb3VyY2UucmVzdWx0fVxuICAgICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgICBncm91cEF4aXNEb21haW49e21ldHJpY3N9XG4gICAgICAgIHN1Ymdyb3VwQXhpcz17YGNpdHlgfVxuICAgICAgICBzdWJncm91cEF4aXNEb21haW49e2RpbWVuc2lvbnN9XG4gICAgICAgIHlBeGlzPXtgdmFsdWVgfVxuICAgICAgICB5QXhpc0RvbWFpbj17U3RhY2tTb3VyY2UueUF4aXNEb21haW59XG4gICAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlPXtlID0+IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZShlKX0gLz5cbiAgICAgIDxCdWJibGVcbiAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgaGVpZ2h0PXszNDB9XG4gICAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgICAgc291cmNlPXtCdWJibGVTb3VyY2V9XG4gICAgICAgIGdyb3VwQXhpcz17YG1ldHJpY2B9XG4gICAgICAgIGdyb3VwQXhpc0RvbWFpbj17bWV0cmljc31cbiAgICAgICAgc2l6ZUF4aXM9e2B2YWx1ZWB9XG4gICAgICAgIGNvbG9yQXhpcz17YHZhbHVlYH1cbiAgICAgICAgY29sb3JBeGlzRG9tYWluPXtbbWluQ29sb3JCdWJibGUsIG1heENvbG9yQnViYmxlXX1cbiAgICAgICAgb25UaXRsZUNoYW5nZT17ZSA9PiB0aGlzLm9uVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfSAvPlxuICAgICAgPFRpbWViYXJcbiAgICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIGRvbWFpbj17ZGF0ZXN9XG4gICAgICAgIHRpY2tGb3JtYXQ9e3YgPT4gbW9tZW50KHYpLmZvcm1hdCgnWVlZWScpfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLm9uVGltZWJhckNoYW5nZShlKX0gLz5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19jaGFydCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9yZWxhdGVkQ2hhcnQubWRcbiAqKi8iLCJcbmNvbnN0IGZpcnN0X3llYXJfZGF0YSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IHlldGFub3RoZXJNZXRyaWNWYWx1ZSA9IFtcbiAgWzUsIDIsIDMsIDMsIDUsIDQsIDIsIDUsIDVdLFxuICBbNSwgMywgMiwgNCwgNCwgNCwgMywgMywgNF0sXG4gIFszLCA1LCA1LCA1LCAyLCA1LCA0LCA0LCAzXSxcbiAgWzQsIDQsIDQsIDIsIDMsIDQsIDUsIDIsIDJdLFxuXTtcbmNvbnN0IGRhdGVzID0gKCgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTk3MDsgaSA8IDI0NzA7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKCtuZXcgRGF0ZShTdHJpbmcoaSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmNvbnN0IG1ha2VGYWtlRGF0YSA9IGZha2UgPT4ge1xuICBjb25zdCBkYXRhID0gW107XG4gIGRhdGVzLm1hcChkID0+IHtcbiAgICBsZXQgZGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZha2UpKTtcbiAgICBkZCA9IGRkLm1hcChkZGQgPT4ge1xuICAgICAgcmV0dXJuIGRkZC5tYXAoZGRkZCA9PiB7XG4gICAgICAgIGRkZGQgPSBkZGRkICogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gZGRkZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRhdGEucHVzaChkZCk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBkYXRhID0gbWFrZUZha2VEYXRhKGZpcnN0X3llYXJfZGF0YSk7XG5jb25zdCBhZGF0YSA9IG1ha2VGYWtlRGF0YShhbm90aGVyTWV0cmljVmFsdWUpO1xuY29uc3Qgc2l6ZWRhdGEgPSBtYWtlRmFrZURhdGEoeWV0YW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ+WMl+S6rCcsICfkuIrmtbcnLCAn5bm/5beeJywgJ+a3seWcsyddO1xuY29uc3QgbWV0cmljcyA9IFsn5Z+O5biC54Ot5bqmJywgJ+ihoycsICfpo58nLCAn5L2PJywgJ+iWqui1hCcsICfooYwnLCAn5rCU5YCZJywgJ+WMu+eWlycsICfmlZnogrInXTtcbmxldCBzb3VyY2UgPSBbXTtcbmZvciAobGV0IHkgPSAwOyB5IDwgZGF0ZXMubGVuZ3RoOyB5KyspIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZXRyaWNzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBzb3VyY2UucHVzaCh7XG4gICAgICAgIGNpdHk6IGRpbWVuc2lvbnNbaV0sXG4gICAgICAgIG1ldHJpYzogbWV0cmljc1t4XSxcbiAgICAgICAgdmFsdWU6IGRhdGFbeV1baV1beF0sXG4gICAgICAgIGF2YWx1ZTogYWRhdGFbeV1baV1beF0sXG4gICAgICAgIGJ2YWx1ZTogc2l6ZWRhdGFbeV1baV1beF0sXG4gICAgICAgIHRpbWU6IGRhdGVzW3ldLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlLFxuICBtZXRyaWNzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlcyxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9kYXRhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFyREE7QUF1REE7QUFDQTs7QUFoSUE7QUFDQTtBQWtJQTs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQU1BO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQVVBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==