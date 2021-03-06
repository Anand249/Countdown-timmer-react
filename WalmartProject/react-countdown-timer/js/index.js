var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; } function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);
  function Timer(props) {
    _classCallCheck(this, Timer); var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this,
      props));
    _this.state = { count: 1 }; return _this;
  } _createClass(Timer, [{
    key: 'componentWillUnmount', value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'tick', value: function tick() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: 'startTimer', value: function startTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  }, {
    key: 'stopTimer', value: function stopTimer() {
      clearInterval(this.timer);
    }
  }, {
    key: 'resetTimer', value: function resetTimer() {
      clearInterval(this.timer);
      this.setState({ count: 1 });
    }
  }, {
    key: 'render', value: function render() {
      return (
        React.createElement('div', null,
          React.createElement('h1', null, this.state.count),
          React.createElement('div', null,
            React.createElement('button', { onClick: this.startTimer.bind(this) }, 'Start'),
            React.createElement('button', { onClick: this.stopTimer.bind(this) }, 'Stop'),
            React.createElement('button', { onClick: this.resetTimer.bind(this) }, 'Reset'))));



    }
  }]); return Timer;
}(React.Component);


ReactDOM.render(
  React.createElement(Timer, null),
  document.getElementById('root'));