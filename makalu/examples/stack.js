webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(16);

	var _lodash = __webpack_require__(8);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _moment = __webpack_require__(13);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(17);

	var _data = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var TransSourceToStack = function TransSourceToStack(collection, gk, sgk, groupAxis, subgroupAxis, yAxis, yAggregate) {
	  var middleTransObject = {};
	  gk.map(function (k) {
	    if (!middleTransObject[k]) {
	      var _middleTransObject$k;

	      middleTransObject[k] = (_middleTransObject$k = {}, _defineProperty(_middleTransObject$k, groupAxis, k), _defineProperty(_middleTransObject$k, 'positive_total', 0), _defineProperty(_middleTransObject$k, 'negative_total', 0), _middleTransObject$k);
	    }
	    sgk.map(function (sk) {
	      if (!middleTransObject[k][sk]) {
	        middleTransObject[k][sk] = [];
	      }
	    });
	  });
	  collection.map(function (row) {
	    var _gk = row[groupAxis];
	    var _sgk = row[subgroupAxis];
	    middleTransObject[_gk][_sgk].push(row[yAxis]);
	    if (row[yAxis] >= 0) {
	      middleTransObject[_gk].positive_total += Number(row[yAxis]);
	    } else {
	      middleTransObject[_gk].negative_total += Number(row[yAxis]);
	    }
	  });
	  var result = _lodash2.default.values(middleTransObject);
	  result.forEach(function (stack, i) {
	    if (yAggregate === 'sum') {
	      sgk.map(function (k) {
	        result[i][k] = _lodash2.default.reduce(stack[k], function (t, n) {
	          return t + n;
	        }, 0);
	      });
	    } else if (yAggregate === 'max') {
	      sgk.map(function (k) {
	        result[i][k] = Math.max.apply(Math, _toConsumableArray(stack[k]));
	      });
	    } else if (yAggregate === 'min') {
	      sgk.map(function (k) {
	        result[i][k] = Math.min.apply(Math, _toConsumableArray(stack[k]));
	      });
	    } else if (yAggregate === 'avg') {
	      sgk.map(function (k) {
	        stack[k] /= stack[k].length;
	      });
	    } else if (yAggregate === 'last') {
	      sgk.map(function (k) {
	        result[i][k] = stack[k].pop();
	      });
	    } else {
	      sgk.map(function (k) {
	        result[i][k] = stack[k].shift();
	      });
	    }
	  });
	  return result;
	};

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
	    var StackSource = TransSourceToStack(_source, _data.metrics, _data.dimensions, 'metric', 'city', 'value', 'sum');

	    return _react2.default.createElement(_src.Stack, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: StackSource,
	      groupAxis: 'metric',
	      groupAxisDomain: _data.metrics,
	      subgroupAxis: 'city',
	      subgroupAxisDomain: _data.dimensions,
	      yAxis: 'value',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc3RhY2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvc3RhY2subWQiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2RhdGEuanM/MGNiZCoqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vc3JjJztcblxuaW1wb3J0IHsgc291cmNlLCBkaW1lbnNpb25zLCBtZXRyaWNzLCBkYXRlcyB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IFRyYW5zU291cmNlVG9TdGFjayA9IChjb2xsZWN0aW9uLCBnaywgc2drLCBncm91cEF4aXMsIHN1Ymdyb3VwQXhpcywgeUF4aXMsIHlBZ2dyZWdhdGUpID0+IHtcbiAgY29uc3QgbWlkZGxlVHJhbnNPYmplY3QgPSB7fTtcbiAgZ2subWFwKGsgPT4ge1xuICAgIGlmICghbWlkZGxlVHJhbnNPYmplY3Rba10pIHtcbiAgICAgIG1pZGRsZVRyYW5zT2JqZWN0W2tdID0ge1xuICAgICAgICBbZ3JvdXBBeGlzXTogayxcbiAgICAgICAgcG9zaXRpdmVfdG90YWw6IDAsXG4gICAgICAgIG5lZ2F0aXZlX3RvdGFsOiAwLFxuICAgICAgfTtcbiAgICB9XG4gICAgc2drLm1hcChzayA9PiB7XG4gICAgICBpZiAoIW1pZGRsZVRyYW5zT2JqZWN0W2tdW3NrXSkge1xuICAgICAgICBtaWRkbGVUcmFuc09iamVjdFtrXVtza10gPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbGxlY3Rpb24ubWFwKHJvdyA9PiB7XG4gICAgY29uc3QgX2drID0gcm93W2dyb3VwQXhpc107XG4gICAgY29uc3QgX3NnayA9IHJvd1tzdWJncm91cEF4aXNdO1xuICAgIG1pZGRsZVRyYW5zT2JqZWN0W19na11bX3Nna10ucHVzaChyb3dbeUF4aXNdKTtcbiAgICBpZiAocm93W3lBeGlzXSA+PSAwKSB7XG4gICAgICBtaWRkbGVUcmFuc09iamVjdFtfZ2tdLnBvc2l0aXZlX3RvdGFsICs9IE51bWJlcihyb3dbeUF4aXNdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlkZGxlVHJhbnNPYmplY3RbX2drXS5uZWdhdGl2ZV90b3RhbCArPSBOdW1iZXIocm93W3lBeGlzXSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gXy52YWx1ZXMobWlkZGxlVHJhbnNPYmplY3QpO1xuICByZXN1bHQuZm9yRWFjaCgoc3RhY2ssIGkpID0+IHtcbiAgICBpZiAoeUFnZ3JlZ2F0ZSA9PT0gJ3N1bScpIHtcbiAgICAgIHNnay5tYXAoayA9PiB7XG4gICAgICAgIHJlc3VsdFtpXVtrXSA9IF8ucmVkdWNlKHN0YWNrW2tdLCAodCwgbikgPT4gdCArIG4sIDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh5QWdncmVnYXRlID09PSAnbWF4Jykge1xuICAgICAgc2drLm1hcChrID0+IHtcbiAgICAgICAgcmVzdWx0W2ldW2tdID0gTWF0aC5tYXgoLi4uc3RhY2tba10pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh5QWdncmVnYXRlID09PSAnbWluJykge1xuICAgICAgc2drLm1hcChrID0+IHtcbiAgICAgICAgcmVzdWx0W2ldW2tdID0gTWF0aC5taW4oLi4uc3RhY2tba10pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh5QWdncmVnYXRlID09PSAnYXZnJykge1xuICAgICAgc2drLm1hcChrID0+IHtcbiAgICAgICAgc3RhY2tba10gLz0gc3RhY2tba10ubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh5QWdncmVnYXRlID09PSAnbGFzdCcpIHtcbiAgICAgIHNnay5tYXAoayA9PiB7XG4gICAgICAgIHJlc3VsdFtpXVtrXSA9IHN0YWNrW2tdLnBvcCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNnay5tYXAoayA9PiB7XG4gICAgICAgIHJlc3VsdFtpXVtrXSA9IHN0YWNrW2tdLnNoaWZ0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgIHRpbWVGaWx0ZXI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIG9uVGltZWJhckNoYW5nZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lRmlsdGVyOiBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgX3NvdXJjZSA9IHNvdXJjZTtcbiAgICBjb25zdCB7IHRpbWVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRpbWVGaWx0ZXIpIHtcbiAgICAgIF9zb3VyY2UgPSBfc291cmNlLmZpbHRlcih2ID0+IHYudGltZSA+PSB0aW1lRmlsdGVyWzBdICYmIHYudGltZSA8PSB0aW1lRmlsdGVyWzFdKTtcbiAgICB9XG4gICAgY29uc3QgU3RhY2tTb3VyY2UgPSBUcmFuc1NvdXJjZVRvU3RhY2soX3NvdXJjZSwgbWV0cmljcywgZGltZW5zaW9ucywgJ21ldHJpYycsICdjaXR5JywgJ3ZhbHVlJywgJ3N1bScpO1xuXG4gICAgcmV0dXJuIDxTdGFja1xuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17U3RhY2tTb3VyY2V9XG4gICAgICBncm91cEF4aXM9e2BtZXRyaWNgfVxuICAgICAgZ3JvdXBBeGlzRG9tYWluPXttZXRyaWNzfVxuICAgICAgc3ViZ3JvdXBBeGlzPXtgY2l0eWB9XG4gICAgICBzdWJncm91cEF4aXNEb21haW49e2RpbWVuc2lvbnN9XG4gICAgICB5QXhpcz17YHZhbHVlYH1cbiAgICAgIHRpbWViYXJTaG93PXt0cnVlfVxuICAgICAgdGltZWJhckRvbWFpbj17ZGF0ZXN9XG4gICAgICB0aW1lYmFyVGlja0Zvcm1hdD17diA9PiBtb21lbnQodikuZm9ybWF0KCdZWVlZJyl9XG4gICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfVxuICAgICAgb25UaW1lYmFyQ2hhbmdlPXtlID0+IHRoaXMub25UaW1lYmFyQ2hhbmdlKGUpfSAvPlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3N0YWNrLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBaERBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFVQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=