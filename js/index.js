var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Movies = function (_React$Component) {_inherits(Movies, _React$Component);
  function Movies(props) {_classCallCheck(this, Movies);var _this = _possibleConstructorReturn(this, (Movies.__proto__ || Object.getPrototypeOf(Movies)).call(this,
    props));
    _this.state = {
      pictures: [],
      input: "" };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(Movies, [{ key: "handleChange", value: function handleChange(

    event) {
      event.preventDefault();
      this.setState({
        input: event.target.value });

    } }, { key: "componentWillUpdate", value: function componentWillUpdate()


    {var _this2 = this;
      var pa = "https://image.tmdb.org/t/p/w500/";
      var url = "https://api.themoviedb.org/3/search/movie?api_key=72dd6fd046af43945d3cd30db5e1d901&query=";
      var urlEm = "https://api.themoviedb.org/3/movie/top_rated?api_key=72dd6fd046af43945d3cd30db5e1d901";


      if (this.state.input == "") {

        fetch(urlEm).then(function (results) {
          return results.json();
        }).then(function (data) {
          var pictures1 = data.results.map(function (pic, index) {
            return (
              React.createElement("div", { className: "res1", key: pic.results },
                React.createElement("h1", null, pic.title),
                React.createElement("img", { src: pa + pic.poster_path })));


          });
          pictures1.splice(10, pictures1.length - 1);
          _this2.setState({ pictures: pictures1 });

        });
      } else {
        fetch(url + this.state.input).then(function (results) {
          return results.json();
        }).then(function (data) {
          var pictures = data.results.map(function (pic) {
            return (
              React.createElement("div", { className: "res", key: pic.results },
                React.createElement("h1", null, pic.title),
                React.createElement("img", { src: pa + pic.poster_path })));


          });
          _this2.setState({ pictures: pictures });
        });
      }
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("input", { value: this.state.input, onChange: this.handleChange, placeholder: "Search..." }),
          React.createElement("br", null),
          this.state.pictures));


    } }]);return Movies;}(React.Component);
;var

TVShows = function (_React$Component2) {_inherits(TVShows, _React$Component2);
  function TVShows(props) {_classCallCheck(this, TVShows);var _this3 = _possibleConstructorReturn(this, (TVShows.__proto__ || Object.getPrototypeOf(TVShows)).call(this,
    props));
    _this3.state = {
      pictures: [],
      input: "" };

    _this3.handleChange = _this3.handleChange.bind(_this3);return _this3;
  }_createClass(TVShows, [{ key: "handleChange", value: function handleChange(

    event) {
      event.preventDefault();
      this.setState({
        input: event.target.value });

    } }, { key: "componentWillUpdate", value: function componentWillUpdate()

    {var _this4 = this;
      var pa = "https://image.tmdb.org/t/p/w500/";
      var url = "https://api.themoviedb.org/3/search/tv?api_key=72dd6fd046af43945d3cd30db5e1d901&query=";
      var urlEm = "https://api.themoviedb.org/3/tv/top_rated?api_key=72dd6fd046af43945d3cd30db5e1d901";

      if (this.state.input == "") {
        fetch(urlEm).then(function (results) {
          return results.json();
        }).then(function (data) {
          var pictures1 = data.results.map(function (pic) {
            return (
              React.createElement("div", { className: "res1", key: pic.results },
                React.createElement("h1", null, pic.original_name),
                React.createElement("img", { src: pa + pic.poster_path })));


          });
          pictures1.splice(10, pictures1.length - 1);
          _this4.setState({ pictures: pictures1 });
        });
      } else {
        fetch(url + this.state.input).then(function (results) {
          return results.json();
        }).then(function (data) {
          var pictures = data.results.map(function (pic) {
            return (
              React.createElement("div", { className: "res", key: pic.results },
                React.createElement("h1", null, pic.original_name),
                React.createElement("img", { src: pa + pic.poster_path })));


          });
          _this4.setState({ pictures: pictures });
        });
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("input", { value: this.state.input, onChange: this.handleChange, placeholder: "Search..." }),
          React.createElement("br", null),
          this.state.pictures));


    } }]);return TVShows;}(React.Component);
;var

Application = function (_React$Component3) {_inherits(Application, _React$Component3);
  function Application(props) {_classCallCheck(this, Application);var _this5 = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this,
    props));
    _this5.state = {
      isHiddenMovie: false,
      isHiddenTV: false };

    _this5.toggleHiddenMovie = _this5.toggleHiddenMovie.bind(_this5);
    _this5.toggleHiddenTV = _this5.toggleHiddenTV.bind(_this5);return _this5;
  }_createClass(Application, [{ key: "toggleHiddenMovie", value: function toggleHiddenMovie()
    {
      this.setState({
        isHiddenMovie: true,
        isHiddenTV: false });

    } }, { key: "toggleHiddenTV", value: function toggleHiddenTV()
    {
      this.setState({
        isHiddenTV: true,
        isHiddenMovie: false });

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "main" },
          React.createElement("button", { onClick: this.toggleHiddenMovie }, "Movies"),
          React.createElement("button", { onClick: this.toggleHiddenTV }, "TV Shows"),
          React.createElement("br", null),
          React.createElement("div", { id: "result" },
            this.state.isHiddenMovie && React.createElement(Movies, null),
            this.state.isHiddenTV && React.createElement(TVShows, null))));



    } }]);return Application;}(React.Component);
;

ReactDOM.render(React.createElement(Application, null), document.getElementById("app"));
