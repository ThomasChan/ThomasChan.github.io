webpackJsonp([17],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _src = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var source = [["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9], ["10", 10], ["11", 11], ["12", 12], ["13", 13], ["14", 14], ["15", 15], ["16", 16], ["17", 17], ["18", 18], ["19", 19], ["20", 20], ["21", 21], ["22", 22], ["23", 23], ["24", 24], ["25", 25], ["26", 26], ["27", 27], ["28", 28], ["29", 29], ["30", 30], ["31", 31], ["32", 32], ["33", 33], ["34", 34], ["35", 35], ["36", 36], ["37", 37], ["38", 38], ["39", 39], ["40", 40], ["41", 41], ["42", 42], ["43", 43], ["44", 44], ["45", 45], ["46", 46], ["47", 47], ["48", 48], ["49", 49], ["50", 50], ["51", 51], ["52", 52], ["53", 53], ["54", 54], ["55", 55], ["56", 56], ["57", 57], ["58", 58], ["59", 59], ["60", 60], ["61", 61], ["62", 62], ["63", 63], ["64", 64], ["65", 65], ["66", 66], ["67", 67], ["68", 68], ["69", 69], ["70", 70], ["71", 71], ["72", 72], ["73", 73], ["74", 74], ["75", 75], ["76", 76], ["77", 77], ["78", 78], ["79", 79], ["80", 80], ["81", 81], ["82", 82], ["83", 83], ["84", 84], ["85", 85], ["86", 86], ["87", 87], ["88", 88], ["89", 89], ["90", 90], ["91", 91], ["92", 92], ["93", 93], ["94", 94], ["95", 95], ["96", 96], ["97", 97], ["98", 98], ["99", 99]];

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
	      description: null
	    };
	    return _this;
	  }

	  App.prototype.render = function render() {
	    var _this2 = this;

	    return _react2.default.createElement(_src.WordCloud, {
	      title: this.state.title,
	      description: this.state.description,
	      width: window.innerWidth * .5,
	      height: window.innerHeight * .6,
	      margin: [20, 20, 20, 20],
	      source: source,
	      groupAxis: 'metric',
	      sizeAxis: 'value',
	      sizeAxisDomain: [1, 99],
	      onTitleChange: function onTitleChange(e) {
	        return _this2.onTitleChange(e);
	      },
	      onDescriptionChange: function onDescriptionChange(e) {
	        return _this2.onDescriptionChange(e);
	      } });
	  };

	  return App;
	}(_react2.default.Component);

		(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('__chart'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvd29yZGNsb3VkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3dvcmRjbG91ZC5tZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFdvcmRDbG91ZCwgbWFrYWx1RmlsdGVyIH0gZnJvbSAnLi4vc3JjJztcblxuY29uc3Qgc291cmNlID0gW1xuICBbXCIxXCIsMV0sXG4gIFtcIjJcIiwyXSxbXCIzXCIsM10sW1wiNFwiLDRdLFtcIjVcIiw1XSxbXCI2XCIsNl0sW1wiN1wiLDddLFtcIjhcIiw4XSxbXCI5XCIsOV0sW1wiMTBcIiwxMF0sW1wiMTFcIiwxMV0sW1wiMTJcIiwxMl0sW1wiMTNcIiwxM10sW1wiMTRcIiwxNF0sW1wiMTVcIiwxNV0sW1wiMTZcIiwxNl0sW1wiMTdcIiwxN10sW1wiMThcIiwxOF0sW1wiMTlcIiwxOV0sW1wiMjBcIiwyMF0sW1wiMjFcIiwyMV0sW1wiMjJcIiwyMl0sW1wiMjNcIiwyM10sW1wiMjRcIiwyNF0sW1wiMjVcIiwyNV0sW1wiMjZcIiwyNl0sW1wiMjdcIiwyN10sW1wiMjhcIiwyOF0sW1wiMjlcIiwyOV0sW1wiMzBcIiwzMF0sW1wiMzFcIiwzMV0sW1wiMzJcIiwzMl0sW1wiMzNcIiwzM10sW1wiMzRcIiwzNF0sW1wiMzVcIiwzNV0sW1wiMzZcIiwzNl0sW1wiMzdcIiwzN10sW1wiMzhcIiwzOF0sW1wiMzlcIiwzOV0sW1wiNDBcIiw0MF0sW1wiNDFcIiw0MV0sW1wiNDJcIiw0Ml0sW1wiNDNcIiw0M10sW1wiNDRcIiw0NF0sW1wiNDVcIiw0NV0sW1wiNDZcIiw0Nl0sW1wiNDdcIiw0N10sW1wiNDhcIiw0OF0sW1wiNDlcIiw0OV0sW1wiNTBcIiw1MF0sW1wiNTFcIiw1MV0sW1wiNTJcIiw1Ml0sW1wiNTNcIiw1M10sW1wiNTRcIiw1NF0sW1wiNTVcIiw1NV0sW1wiNTZcIiw1Nl0sW1wiNTdcIiw1N10sW1wiNThcIiw1OF0sW1wiNTlcIiw1OV0sW1wiNjBcIiw2MF0sW1wiNjFcIiw2MV0sW1wiNjJcIiw2Ml0sW1wiNjNcIiw2M10sW1wiNjRcIiw2NF0sW1wiNjVcIiw2NV0sW1wiNjZcIiw2Nl0sW1wiNjdcIiw2N10sW1wiNjhcIiw2OF0sW1wiNjlcIiw2OV0sW1wiNzBcIiw3MF0sW1wiNzFcIiw3MV0sW1wiNzJcIiw3Ml0sW1wiNzNcIiw3M10sW1wiNzRcIiw3NF0sW1wiNzVcIiw3NV0sW1wiNzZcIiw3Nl0sW1wiNzdcIiw3N10sW1wiNzhcIiw3OF0sW1wiNzlcIiw3OV0sW1wiODBcIiw4MF0sW1wiODFcIiw4MV0sW1wiODJcIiw4Ml0sW1wiODNcIiw4M10sW1wiODRcIiw4NF0sW1wiODVcIiw4NV0sW1wiODZcIiw4Nl0sW1wiODdcIiw4N10sW1wiODhcIiw4OF0sW1wiODlcIiw4OV0sW1wiOTBcIiw5MF0sW1wiOTFcIiw5MV0sW1wiOTJcIiw5Ml0sW1wiOTNcIiw5M10sW1wiOTRcIiw5NF0sW1wiOTVcIiw5NV0sW1wiOTZcIiw5Nl0sW1wiOTdcIiw5N10sW1wiOThcIiw5OF0sW1wiOTlcIiw5OV1cbl07XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSBuZXdUaXRsZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5ld1RpdGxlIH0pO1xuXG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSBuZXdEZXNjcmlwdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFdvcmRDbG91ZFxuICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAqIC41fVxuICAgICAgaGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNn1cbiAgICAgIG1hcmdpbj17WzIwLCAyMCwgMjAsIDIwXX1cbiAgICAgIHNvdXJjZT17c291cmNlfVxuICAgICAgZ3JvdXBBeGlzPXtgbWV0cmljYH1cbiAgICAgIHNpemVBeGlzPXtgdmFsdWVgfVxuICAgICAgc2l6ZUF4aXNEb21haW49e1sxLCA5OV19XG4gICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfSAvPlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3dvcmRjbG91ZC5tZFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFUQTtBQVVBO0FBQUE7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQTVCQTtBQUNBO0FBOEJBOzs7Iiwic291cmNlUm9vdCI6IiJ9