webpackJsonp([15],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _src = __webpack_require__(18);

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
	      sizeDomain: [1, 99],
	      timebarShow: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvd29yZGNsb3VkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3dvcmRjbG91ZC5tZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFdvcmRDbG91ZCB9IGZyb20gJy4uL3NyYyc7XG5cbmNvbnN0IHNvdXJjZSA9IFtcbiAgW1wiMVwiLDFdLFxuICBbXCIyXCIsMl0sW1wiM1wiLDNdLFtcIjRcIiw0XSxbXCI1XCIsNV0sW1wiNlwiLDZdLFtcIjdcIiw3XSxbXCI4XCIsOF0sW1wiOVwiLDldLFtcIjEwXCIsMTBdLFtcIjExXCIsMTFdLFtcIjEyXCIsMTJdLFtcIjEzXCIsMTNdLFtcIjE0XCIsMTRdLFtcIjE1XCIsMTVdLFtcIjE2XCIsMTZdLFtcIjE3XCIsMTddLFtcIjE4XCIsMThdLFtcIjE5XCIsMTldLFtcIjIwXCIsMjBdLFtcIjIxXCIsMjFdLFtcIjIyXCIsMjJdLFtcIjIzXCIsMjNdLFtcIjI0XCIsMjRdLFtcIjI1XCIsMjVdLFtcIjI2XCIsMjZdLFtcIjI3XCIsMjddLFtcIjI4XCIsMjhdLFtcIjI5XCIsMjldLFtcIjMwXCIsMzBdLFtcIjMxXCIsMzFdLFtcIjMyXCIsMzJdLFtcIjMzXCIsMzNdLFtcIjM0XCIsMzRdLFtcIjM1XCIsMzVdLFtcIjM2XCIsMzZdLFtcIjM3XCIsMzddLFtcIjM4XCIsMzhdLFtcIjM5XCIsMzldLFtcIjQwXCIsNDBdLFtcIjQxXCIsNDFdLFtcIjQyXCIsNDJdLFtcIjQzXCIsNDNdLFtcIjQ0XCIsNDRdLFtcIjQ1XCIsNDVdLFtcIjQ2XCIsNDZdLFtcIjQ3XCIsNDddLFtcIjQ4XCIsNDhdLFtcIjQ5XCIsNDldLFtcIjUwXCIsNTBdLFtcIjUxXCIsNTFdLFtcIjUyXCIsNTJdLFtcIjUzXCIsNTNdLFtcIjU0XCIsNTRdLFtcIjU1XCIsNTVdLFtcIjU2XCIsNTZdLFtcIjU3XCIsNTddLFtcIjU4XCIsNThdLFtcIjU5XCIsNTldLFtcIjYwXCIsNjBdLFtcIjYxXCIsNjFdLFtcIjYyXCIsNjJdLFtcIjYzXCIsNjNdLFtcIjY0XCIsNjRdLFtcIjY1XCIsNjVdLFtcIjY2XCIsNjZdLFtcIjY3XCIsNjddLFtcIjY4XCIsNjhdLFtcIjY5XCIsNjldLFtcIjcwXCIsNzBdLFtcIjcxXCIsNzFdLFtcIjcyXCIsNzJdLFtcIjczXCIsNzNdLFtcIjc0XCIsNzRdLFtcIjc1XCIsNzVdLFtcIjc2XCIsNzZdLFtcIjc3XCIsNzddLFtcIjc4XCIsNzhdLFtcIjc5XCIsNzldLFtcIjgwXCIsODBdLFtcIjgxXCIsODFdLFtcIjgyXCIsODJdLFtcIjgzXCIsODNdLFtcIjg0XCIsODRdLFtcIjg1XCIsODVdLFtcIjg2XCIsODZdLFtcIjg3XCIsODddLFtcIjg4XCIsODhdLFtcIjg5XCIsODldLFtcIjkwXCIsOTBdLFtcIjkxXCIsOTFdLFtcIjkyXCIsOTJdLFtcIjkzXCIsOTNdLFtcIjk0XCIsOTRdLFtcIjk1XCIsOTVdLFtcIjk2XCIsOTZdLFtcIjk3XCIsOTddLFtcIjk4XCIsOThdLFtcIjk5XCIsOTldXG5dO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gbmV3VGl0bGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXdUaXRsZSB9KTtcblxuICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gbmV3RGVzY3JpcHRpb24gPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxXb3JkQ2xvdWRcbiAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICB3aWR0aD17d2luZG93LmlubmVyV2lkdGggKiAuNX1cbiAgICAgIGhlaWdodD17d2luZG93LmlubmVySGVpZ2h0ICogLjZ9XG4gICAgICBtYXJnaW49e1syMCwgMjAsIDIwLCAyMF19XG4gICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgIGdyb3VwQXhpcz17YG1ldHJpY2B9XG4gICAgICBzaXplQXhpcz17YHZhbHVlYH1cbiAgICAgIHNpemVEb21haW49e1sxLCA5OV19XG4gICAgICB0aW1lYmFyU2hvdz17ZmFsc2V9XG4gICAgICBvblRpdGxlQ2hhbmdlPXtlID0+IHRoaXMub25UaXRsZUNoYW5nZShlKX1cbiAgICAgIG9uRGVzY3JpcHRpb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlKGUpfSAvPlxuICB9XG5cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2NoYXJ0JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3dvcmRjbG91ZC5tZFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFUQTtBQVVBO0FBQUE7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBN0JBO0FBQ0E7QUErQkE7OzsiLCJzb3VyY2VSb290IjoiIn0=