webpackJsonp([6],{

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
	    var KPISource = (0, _filterGroup2.default)(_source, 'metric', {
	      'value': 'sum',
	      'metric': 'group by'
	    }).data.map(function (v) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMva3BpLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2twaS5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGF0YS5qcz8wY2JkKioqKioiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2FnZ3JlZ2F0aW9uTWV0aG9kcy9maWx0ZXJHcm91cC5qcz9hMzgxKioiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBLUEkgfSBmcm9tICcuLi9zcmMnO1xuXG5pbXBvcnQgeyBzb3VyY2UsIGRpbWVuc2lvbnMsIG1ldHJpY3MsIGRhdGVzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCBmaWx0ZXJHcm91cCBmcm9tICcuL2FnZ3JlZ2F0aW9uTWV0aG9kcy9maWx0ZXJHcm91cCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICB0aW1lRmlsdGVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICBvblRpbWViYXJDaGFuZ2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUZpbHRlcjogZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IF9zb3VyY2UgPSBzb3VyY2U7XG4gICAgY29uc3QgeyB0aW1lRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aW1lRmlsdGVyKSB7XG4gICAgICBfc291cmNlID0gX3NvdXJjZS5maWx0ZXIodiA9PiB2LnRpbWUgPj0gdGltZUZpbHRlclswXSAmJiB2LnRpbWUgPD0gdGltZUZpbHRlclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IEtQSVNvdXJjZSA9IGZpbHRlckdyb3VwKF9zb3VyY2UsICdtZXRyaWMnLCB7XG4gICAgICAndmFsdWUnOiAnc3VtJyxcbiAgICAgICdtZXRyaWMnOiAnZ3JvdXAgYnknLFxuICAgIH0pLmRhdGEubWFwKHYgPT4gdi52YWx1ZSk7XG5cbiAgICByZXR1cm4gPEtQSVxuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17S1BJU291cmNlfVxuICAgICAgeEF4aXM9e2B2YWx1ZWB9XG4gICAgICB2YWx1ZT17S1BJU291cmNlLnJlZHVjZSgobiwgbSkgPT4gbiArIG0sIDApfVxuICAgICAgdGltZWJhclNob3c9e3RydWV9XG4gICAgICB0aW1lYmFyRG9tYWluPXtkYXRlc31cbiAgICAgIHRpbWViYXJUaWNrRm9ybWF0PXt2ID0+IG1vbWVudCh2KS5mb3JtYXQoJ1lZWVknKX1cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9XG4gICAgICBvblRpbWViYXJDaGFuZ2U9e2UgPT4gdGhpcy5vblRpbWViYXJDaGFuZ2UoZSl9IC8+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMva3BpLm1kXG4gKiovIiwiXG5jb25zdCBmaXJzdF95ZWFyX2RhdGEgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCB5ZXRhbm90aGVyTWV0cmljVmFsdWUgPSBbXG4gIFs1LCAyLCAzLCAzLCA1LCA0LCAyLCA1LCA1XSxcbiAgWzUsIDMsIDIsIDQsIDQsIDQsIDMsIDMsIDRdLFxuICBbMywgNSwgNSwgNSwgMiwgNSwgNCwgNCwgM10sXG4gIFs0LCA0LCA0LCAyLCAzLCA0LCA1LCAyLCAyXSxcbl07XG5jb25zdCBkYXRlcyA9ICgoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE5NzA7IGkgPCAyMDE3OyBpKyspIHtcbiAgICByZXN1bHQucHVzaCgrbmV3IERhdGUoU3RyaW5nKGkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5jb25zdCBtYWtlRmFrZURhdGEgPSBmYWtlID0+IHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBkYXRlcy5tYXAoZCA9PiB7XG4gICAgbGV0IGRkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmYWtlKSk7XG4gICAgZGQgPSBkZC5tYXAoZGRkID0+IHtcbiAgICAgIHJldHVybiBkZGQubWFwKGRkZGQgPT4ge1xuICAgICAgICBkZGRkID0gZGRkZCAqIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIGRkZGQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkYXRhLnB1c2goZGQpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgZGF0YSA9IG1ha2VGYWtlRGF0YShmaXJzdF95ZWFyX2RhdGEpO1xuY29uc3QgYWRhdGEgPSBtYWtlRmFrZURhdGEoYW5vdGhlck1ldHJpY1ZhbHVlKTtcbmNvbnN0IHNpemVkYXRhID0gbWFrZUZha2VEYXRhKHlldGFub3RoZXJNZXRyaWNWYWx1ZSk7XG5jb25zdCBkaW1lbnNpb25zID0gWyfljJfkuqwnLCAn5LiK5rW3JywgJ+W5v+W3nicsICfmt7HlnLMnXTtcbmNvbnN0IG1ldHJpY3MgPSBbJ+WfjuW4gueDreW6picsICfooaMnLCAn6aOfJywgJ+S9jycsICfolqrotYQnLCAn6KGMJywgJ+awlOWAmScsICfljLvnlpcnLCAn5pWZ6IKyJ107XG5sZXQgc291cmNlID0gW107XG5mb3IgKGxldCB5ID0gMDsgeSA8IGRhdGVzLmxlbmd0aDsgeSsrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWV0cmljcy5sZW5ndGg7IHgrKykge1xuICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICBjaXR5OiBkaW1lbnNpb25zW2ldLFxuICAgICAgICBtZXRyaWM6IG1ldHJpY3NbeF0sXG4gICAgICAgIHZhbHVlOiBkYXRhW3ldW2ldW3hdLFxuICAgICAgICBhdmFsdWU6IGFkYXRhW3ldW2ldW3hdLFxuICAgICAgICBidmFsdWU6IHNpemVkYXRhW3ldW2ldW3hdLFxuICAgICAgICB0aW1lOiBkYXRlc1t5XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZSxcbiAgbWV0cmljcyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGF0YS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGZpbHRlckdyb3VwID0gKGNvbGxlY3Rpb24sIGNvbHVtbiwgbWV0aG9kcykgPT4ge1xuICBjb25zdCB0cmFucyA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1ldGhvZHMpO1xuICBrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoY29sdW1uKSwgMSk7XG4gIGNvbnN0IGFub3RoZXJLZXkgPSBrZXlzWzBdO1xuICBjb25zdCBhbm90aGVyS2V5VmFsdWVzID0ge307XG4gIGNvbGxlY3Rpb24ubWFwKHJvdyA9PiB7XG4gICAgaWYgKCF0cmFuc1tyb3dbY29sdW1uXV0pIHtcbiAgICAgIHRyYW5zW3Jvd1tjb2x1bW5dXSA9IHtcbiAgICAgICAgW2NvbHVtbl06IHJvd1tjb2x1bW5dLFxuICAgICAgICBbYW5vdGhlcktleV06IDAsXG4gICAgICB9O1xuICAgIH1cbiAgICB0cmFuc1tyb3dbY29sdW1uXV1bYW5vdGhlcktleV0gKz0gTnVtYmVyKHJvd1thbm90aGVyS2V5XSk7XG4gICAgaWYgKCFhbm90aGVyS2V5VmFsdWVzW3Jvd1tjb2x1bW5dXSkge1xuICAgICAgYW5vdGhlcktleVZhbHVlc1tyb3dbY29sdW1uXV0gPSBbXTtcbiAgICB9XG4gICAgYW5vdGhlcktleVZhbHVlc1tyb3dbY29sdW1uXV0ucHVzaChyb3dbYW5vdGhlcktleV0pO1xuICB9KTtcbiAgY29uc3QgdHJhbnNLZXlzID0gT2JqZWN0LmtleXModHJhbnMpO1xuICB0cmFuc0tleXMubWFwKG9iaktleSA9PiB7XG4gICAgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdhdmcnKSB7XG4gICAgICBjb25zdCBzdW0gPSBhbm90aGVyS2V5VmFsdWVzW29iaktleV0ucmVkdWNlKCh0b3RhbCwgbmV4dCkgPT4gdG90YWwgKyBuZXh0LCAwKTtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBzdW0gLyBhbm90aGVyS2V5VmFsdWVzW29iaktleV0ubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ21pbicpIHtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBNYXRoLm1pbiguLi5hbm90aGVyS2V5VmFsdWVzW29iaktleV0pO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ21heCcpIHtcbiAgICAgIHRyYW5zW29iaktleV1bYW5vdGhlcktleV0gPSBNYXRoLm1heCguLi5hbm90aGVyS2V5VmFsdWVzW29iaktleV0pO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1thbm90aGVyS2V5XSA9PT0gJ3N1bScpIHtcbiAgICAgIGNvbnN0IHN1bSA9IGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XS5yZWR1Y2UoKHRvdGFsLCBuZXh0KSA9PiB0b3RhbCArIG5leHQsIDApO1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IHN1bTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbYW5vdGhlcktleV0gPT09ICdsYXN0Jykge1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XVthbm90aGVyS2V5VmFsdWVzW29iaktleV0ubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW2Fub3RoZXJLZXldID09PSAnZ3JvdXAgYnknKSB7XG4gICAgICB0cmFuc1tvYmpLZXldW2Fub3RoZXJLZXldID0gXy51bmlxQnkoYW5vdGhlcktleVZhbHVlc1tvYmpLZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNbb2JqS2V5XVthbm90aGVyS2V5XSA9IGFub3RoZXJLZXlWYWx1ZXNbb2JqS2V5XVswXTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goeyAuLi50cmFuc1tvYmpLZXldIH0pO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiByZXN1bHQsXG4gICAgY29sdW1uczogdHJhbnNLZXlzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZpbHRlckdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYWdncmVnYXRpb25NZXRob2RzL2ZpbHRlckdyb3VwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBaERBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFVQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBbEJBOztBQW9CQTtBQUFBO0FBQUE7QUF6Q0E7QUE4Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==