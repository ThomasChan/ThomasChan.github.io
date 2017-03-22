webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _moment = __webpack_require__(14);

	var _moment2 = _interopRequireDefault(_moment);

	var _src = __webpack_require__(16);

	var _density = __webpack_require__(260);

	var _density2 = _interopRequireDefault(_density);

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
	      title: 'Map Chart',
	      description: 'description',
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

	    var source = _density2.default;

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_src.MapChart, {
	        title: this.state.title,
	        description: this.state.description,
	        width: window.innerWidth * .5,
	        height: window.innerHeight * .6,
	        margin: [20, 20, 20, 20],
	        source: source,
	        country: "US",
	        axisField: "density",
	        mapZoom: 3,
	        onTitleChange: function onTitleChange(e) {
	          return _this2.onTitleChange(e);
	        },
	        onDescriptionChange: function onDescriptionChange(e) {
	          return _this2.onDescriptionChange(e);
	        } })
	    );
	  };

	  return App;
	}(_react2.default.Component);

		(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('__chart'));

/***/ },

/***/ 260:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{ "name": "Alabama", "density": 94.65 }, { "name": "Alaska", "density": 1.264 }, { "name": "Arizona", "density": 57.05 }, { "name": "Arkansas", "density": 56.43 }, { "name": "California", "density": 165 }, { "name": "Colorado", "density": 49.33 }, { "name": "Connecticut", "density": 739.1 }, { "name": "Delaware", "density": 464.3 }, { "name": "District of Columbia", "density": 241.7 }, { "name": "Florida", "density": 353.4 }, { "name": "Georgia", "density": 169.5 }, { "name": "Hawaii", "density": 214.1 }, { "name": "Idaho", "density": 19.15 }, { "name": "Illinois", "density": 231.5 }, { "name": "Indiana", "density": 181.7 }, { "name": "Iowa", "density": 54.81 }, { "name": "Kansas", "density": 35.09 }, { "name": "Kentucky", "density": 110 }, { "name": "Louisiana", "density": 105 }, { "name": "Maine", "density": 43.04 }, { "name": "Maryland", "density": 596.3 }, { "name": "Massachusetts", "density": 840.2 }, { "name": "Michigan", "density": 173.9 }, { "name": "Minnesota", "density": 67.14 }, { "name": "Mississippi", "density": 63.50 }, { "name": "Missouri", "density": 87.26 }, { "name": "Montana", "density": 6.858 }, { "name": "Nebraska", "density": 23.97 }, { "name": "Nevada", "density": 24.80 }, { "name": "New Hampshire", "density": 147 }, { "name": "New Jersey", "density": 118.9 }, { "name": "New Mexico", "density": 17.16 }, { "name": "New York", "density": 412.3 }, { "name": "North Carolina", "density": 198.2 }, { "name": "North Dakota", "density": 9.916 }, { "name": "Ohio", "density": 281.9 }, { "name": "Oklahoma", "density": 55.22 }, { "name": "Oregon", "density": 40.33 }, { "name": "Pennsylvania", "density": 284.3 }, { "name": "Rhode Island", "density": 100.6 }, { "name": "South Carolina", "density": 155.4 }, { "name": "South Dakota", "density": 98.07 }, { "name": "Tennessee", "density": 88.08 }, { "name": "Texas", "density": 98.07 }, { "name": "Utah", "density": 34.30 }, { "name": "Vermont", "density": 67.73 }, { "name": "Virginia", "density": 204.5 }, { "name": "Washington", "density": 102.6 }, { "name": "West Virginia", "density": 77.06 }, { "name": "Wisconsin", "density": 105.2 }, { "name": "Wyoming", "density": 5.851 }, { "name": "Puerto Rico", "density": 10.82 }];
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL21hcC5tZCIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvZGVuc2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1hcENoYXJ0LCB0cmFuc1NvdXJjZVRvTWFwLCBtYWthbHVGaWx0ZXIgfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IGZha2VEYXRhIGZyb20gJy4vZGVuc2l0eSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiAnTWFwIENoYXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxuICAgICAgdGltZUZpbHRlcjogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgb25UaXRsZUNoYW5nZSA9IG5ld1RpdGxlID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cbiAgb25EZXNjcmlwdGlvbkNoYW5nZSA9IG5ld0Rlc2NyaXB0aW9uID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XG5cbiAgb25UaW1lYmFyQ2hhbmdlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVGaWx0ZXI6IGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNvdXJjZSA9IGZha2VEYXRhO1xuXG4gICAgcmV0dXJuIDxkaXY+PE1hcENoYXJ0XG4gICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoICogLjV9XG4gICAgICBoZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAqIC42fVxuICAgICAgbWFyZ2luPXtbMjAsIDIwLCAyMCwgMjBdfVxuICAgICAgc291cmNlPXtzb3VyY2V9XG4gICAgICBjb3VudHJ5PXtcIlVTXCJ9XG4gICAgICBheGlzRmllbGQ9e1wiZGVuc2l0eVwifVxuICAgICAgbWFwWm9vbT17M31cbiAgICAgIG9uVGl0bGVDaGFuZ2U9e2UgPT4gdGhpcy5vblRpdGxlQ2hhbmdlKGUpfVxuICAgICAgb25EZXNjcmlwdGlvbkNoYW5nZT17ZSA9PiB0aGlzLm9uRGVzY3JpcHRpb25DaGFuZ2UoZSl9IC8+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fY2hhcnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvbWFwLm1kXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XCJuYW1lXCI6XCJBbGFiYW1hXCIsXCJkZW5zaXR5XCI6OTQuNjV9LFxuICB7XCJuYW1lXCI6XCJBbGFza2FcIixcImRlbnNpdHlcIjoxLjI2NH0sXG4gIHtcIm5hbWVcIjpcIkFyaXpvbmFcIixcImRlbnNpdHlcIjo1Ny4wNX0sXG4gIHtcIm5hbWVcIjpcIkFya2Fuc2FzXCIsXCJkZW5zaXR5XCI6NTYuNDN9LFxuICB7XCJuYW1lXCI6XCJDYWxpZm9ybmlhXCIsXCJkZW5zaXR5XCI6MTY1fSxcbiAge1wibmFtZVwiOlwiQ29sb3JhZG9cIixcImRlbnNpdHlcIjo0OS4zM30sXG4gIHtcIm5hbWVcIjpcIkNvbm5lY3RpY3V0XCIsXCJkZW5zaXR5XCI6NzM5LjF9LFxuICB7XCJuYW1lXCI6XCJEZWxhd2FyZVwiLFwiZGVuc2l0eVwiOjQ2NC4zfSxcbiAge1wibmFtZVwiOlwiRGlzdHJpY3Qgb2YgQ29sdW1iaWFcIixcImRlbnNpdHlcIjoyNDEuN30sXG4gIHtcIm5hbWVcIjpcIkZsb3JpZGFcIixcImRlbnNpdHlcIjozNTMuNH0sXG4gIHtcIm5hbWVcIjpcIkdlb3JnaWFcIixcImRlbnNpdHlcIjoxNjkuNX0sXG4gIHtcIm5hbWVcIjpcIkhhd2FpaVwiLFwiZGVuc2l0eVwiOjIxNC4xfSxcbiAge1wibmFtZVwiOlwiSWRhaG9cIixcImRlbnNpdHlcIjoxOS4xNX0sXG4gIHtcIm5hbWVcIjpcIklsbGlub2lzXCIsXCJkZW5zaXR5XCI6MjMxLjV9LFxuICB7XCJuYW1lXCI6XCJJbmRpYW5hXCIsXCJkZW5zaXR5XCI6MTgxLjd9LFxuICB7XCJuYW1lXCI6XCJJb3dhXCIsXCJkZW5zaXR5XCI6NTQuODF9LFxuICB7XCJuYW1lXCI6XCJLYW5zYXNcIixcImRlbnNpdHlcIjozNS4wOX0sXG4gIHtcIm5hbWVcIjpcIktlbnR1Y2t5XCIsXCJkZW5zaXR5XCI6MTEwfSxcbiAge1wibmFtZVwiOlwiTG91aXNpYW5hXCIsXCJkZW5zaXR5XCI6MTA1fSxcbiAge1wibmFtZVwiOlwiTWFpbmVcIixcImRlbnNpdHlcIjo0My4wNH0sXG4gIHtcIm5hbWVcIjpcIk1hcnlsYW5kXCIsXCJkZW5zaXR5XCI6NTk2LjN9LFxuICB7XCJuYW1lXCI6XCJNYXNzYWNodXNldHRzXCIsXCJkZW5zaXR5XCI6ODQwLjJ9LFxuICB7XCJuYW1lXCI6XCJNaWNoaWdhblwiLFwiZGVuc2l0eVwiOjE3My45fSxcbiAge1wibmFtZVwiOlwiTWlubmVzb3RhXCIsXCJkZW5zaXR5XCI6NjcuMTR9LFxuICB7XCJuYW1lXCI6XCJNaXNzaXNzaXBwaVwiLFwiZGVuc2l0eVwiOjYzLjUwfSxcbiAge1wibmFtZVwiOlwiTWlzc291cmlcIixcImRlbnNpdHlcIjo4Ny4yNn0sXG4gIHtcIm5hbWVcIjpcIk1vbnRhbmFcIixcImRlbnNpdHlcIjo2Ljg1OH0sXG4gIHtcIm5hbWVcIjpcIk5lYnJhc2thXCIsXCJkZW5zaXR5XCI6MjMuOTd9LFxuICB7XCJuYW1lXCI6XCJOZXZhZGFcIixcImRlbnNpdHlcIjoyNC44MH0sXG4gIHtcIm5hbWVcIjpcIk5ldyBIYW1wc2hpcmVcIixcImRlbnNpdHlcIjoxNDd9LFxuICB7XCJuYW1lXCI6XCJOZXcgSmVyc2V5XCIsXCJkZW5zaXR5XCI6MTE4LjkgfSxcbiAge1wibmFtZVwiOlwiTmV3IE1leGljb1wiLFwiZGVuc2l0eVwiOjE3LjE2fSxcbiAge1wibmFtZVwiOlwiTmV3IFlvcmtcIixcImRlbnNpdHlcIjo0MTIuM30sXG4gIHtcIm5hbWVcIjpcIk5vcnRoIENhcm9saW5hXCIsXCJkZW5zaXR5XCI6MTk4LjJ9LFxuICB7XCJuYW1lXCI6XCJOb3J0aCBEYWtvdGFcIixcImRlbnNpdHlcIjo5LjkxNn0sXG4gIHtcIm5hbWVcIjpcIk9oaW9cIixcImRlbnNpdHlcIjoyODEuOX0sXG4gIHtcIm5hbWVcIjpcIk9rbGFob21hXCIsXCJkZW5zaXR5XCI6NTUuMjJ9LFxuICB7XCJuYW1lXCI6XCJPcmVnb25cIixcImRlbnNpdHlcIjo0MC4zM30sXG4gIHtcIm5hbWVcIjpcIlBlbm5zeWx2YW5pYVwiLFwiZGVuc2l0eVwiOjI4NC4zfSxcbiAge1wibmFtZVwiOlwiUmhvZGUgSXNsYW5kXCIsXCJkZW5zaXR5XCI6MTAwLjYgfSxcbiAge1wibmFtZVwiOlwiU291dGggQ2Fyb2xpbmFcIixcImRlbnNpdHlcIjoxNTUuNH0sXG4gIHtcIm5hbWVcIjpcIlNvdXRoIERha290YVwiLFwiZGVuc2l0eVwiOjk4LjA3fSxcbiAge1wibmFtZVwiOlwiVGVubmVzc2VlXCIsXCJkZW5zaXR5XCI6ODguMDh9LFxuICB7XCJuYW1lXCI6XCJUZXhhc1wiLFwiZGVuc2l0eVwiOjk4LjA3fSxcbiAge1wibmFtZVwiOlwiVXRhaFwiLFwiZGVuc2l0eVwiOjM0LjMwfSxcbiAge1wibmFtZVwiOlwiVmVybW9udFwiLFwiZGVuc2l0eVwiOjY3LjczfSxcbiAge1wibmFtZVwiOlwiVmlyZ2luaWFcIixcImRlbnNpdHlcIjoyMDQuNX0sXG4gIHtcIm5hbWVcIjpcIldhc2hpbmd0b25cIixcImRlbnNpdHlcIjoxMDIuNn0sXG4gIHtcIm5hbWVcIjpcIldlc3QgVmlyZ2luaWFcIixcImRlbnNpdHlcIjo3Ny4wNn0sXG4gIHtcIm5hbWVcIjpcIldpc2NvbnNpblwiLFwiZGVuc2l0eVwiOjEwNS4yfSxcbiAge1wibmFtZVwiOlwiV3lvbWluZ1wiLFwiZGVuc2l0eVwiOjUuODUxfSxcbiAge1wibmFtZVwiOlwiUHVlcnRvIFJpY29cIixcImRlbnNpdHlcIjoxMC44MiB9XG5dO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvZGVuc2l0eS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQVdBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQWFBO0FBQ0E7O0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7Ozs7OztBQy9DQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9