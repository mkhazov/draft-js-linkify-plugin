'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _linkifyIt = require('linkify-it');

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _addLink = require('../modifiers/addLink');

var _addLink2 = _interopRequireDefault(_addLink);

var _removeLink = require('../modifiers/removeLink');

var _removeLink2 = _interopRequireDefault(_removeLink);

var _linkAddStyles = {
  "addLink": "draftJsLinkifyPlugin__addLink__2Slcm",
  "addLinkPopover": "draftJsLinkifyPlugin__addLinkPopover__bGidN",
  "addLinkClosedPopover": "draftJsLinkifyPlugin__addLinkClosedPopover__1z-Ao",
  "addLinkButton": "draftJsLinkifyPlugin__addLinkButton__2BKP8",
  "addLinkPressedButton": "draftJsLinkifyPlugin__addLinkPressedButton__1mZ9t draftJsLinkifyPlugin__addLinkButton__2BKP8",
  "addLinkBottomGradient": "draftJsLinkifyPlugin__addLinkBottomGradient__2z3iJ",
  "addLinkInput": "draftJsLinkifyPlugin__addLinkInput__31nQz",
  "addLinkInputError": "draftJsLinkifyPlugin__addLinkInputError__2ao3B",
  "addLinkConfirmButton": "draftJsLinkifyPlugin__addLinkConfirmButton__2jIVZ",
  "addLinkError": "draftJsLinkifyPlugin__addLinkError__2YYmJ",
  "addLinkErrorDisabled": "draftJsLinkifyPlugin__addLinkErrorDisabled__1w6oW"
};

var _linkAddStyles2 = _interopRequireDefault(_linkAddStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkAdd = function (_Component) {
  _inherits(LinkAdd, _Component);

  function LinkAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkAdd.__proto__ || Object.getPrototypeOf(LinkAdd)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      url: '',
      open: false,
      linkError: false,
      linkifySchema: {},
      linkifyOptions: {}
    }, _this.linkify = new _linkifyIt2.default(_this.props.linkifySchema, _this.props.linkifyOptions), _this.onPopoverClick = function () {
      _this.preventNextClose = true;
    }, _this.setPosition = function (toolbarElement) {
      var position = {
        top: toolbarElement.offsetTop,
        left: toolbarElement.offsetLeft,
        width: toolbarElement.offsetWidth,
        transform: 'translate(-50%) scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)'
      };
      _this.setState({ position: position });
    }, _this.openPopover = function () {
      if (!_this.state.open) {
        _this.preventNextClose = true;
        // eslint-disable-next-line react/no-find-dom-node
        var toolbarElement = _reactDom2.default.findDOMNode(_this.props.inlineToolbarElement);
        _this.setPosition(toolbarElement);
        setTimeout(function () {
          setTimeout(function () {
            return _this.inputElement.focus();
          }, 0);
          _this.setState({ open: true });
        }, 0);
      }
    }, _this.closePopover = function () {
      if (!_this.preventNextClose && _this.state.open) {
        _this.setState({ open: false });
      }

      _this.preventNextClose = false;
    }, _this.addLink = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var url = _this.state.url;

      if (_this.linkify.test(url)) {
        _this.setState({ linkError: false });
        onChange((0, _addLink2.default)(editorState, url));
        _this.closePopover();
      } else {
        _this.setState({ linkError: true });
      }
    }, _this.removeLink = function () {
      var _this$props2 = _this.props,
          editorState = _this$props2.editorState,
          onChange = _this$props2.onChange;

      onChange((0, _removeLink2.default)(editorState));
      _this.closePopover();
    }, _this.changeUrl = function (evt) {
      _this.setState({ url: evt.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Start the popover closed


  _createClass(LinkAdd, [{
    key: 'componentDidMount',


    // When the popover is open and users click anywhere on the page,
    // the popover should close
    value: function componentDidMount() {
      document.addEventListener('click', this.closePopover);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closePopover);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
        this.addLink();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var popoverClassName = this.state.open ? _linkAddStyles2.default.addLinkPopover : _linkAddStyles2.default.addLinkClosedPopover;

      var inputClassName = this.state.linkError ? _linkAddStyles2.default.addLinkInput + ' ' + _linkAddStyles2.default.addLinkInputError : _linkAddStyles2.default.addLinkInput;

      var inputWidth = void 0;
      if (this.props.showAddButton && this.props.showRemoveButton) {
        // 2 buttons
        inputWidth = '78%';
      } else if (!this.props.showAddButton && !this.props.showRemoveButton) {
        // no buttons
        inputWidth = '100%';
      } else {
        // 1 button
        inputWidth = '89%';
      }

      return _react2.default.createElement(
        'div',
        { className: _linkAddStyles2.default.addLink },
        _react2.default.createElement(
          'div',
          {
            className: popoverClassName,
            onClick: this.onPopoverClick,
            style: this.state.position
          },
          _react2.default.createElement('input', {
            ref: function ref(element) {
              _this2.inputElement = element;
            },
            type: 'text',
            placeholder: this.props.placeholder,
            className: inputClassName,
            style: { width: inputWidth },
            onChange: this.changeUrl,
            onKeyDown: function onKeyDown(e) {
              return _this2.onKeyDown(e);
            },
            value: this.state.url
          }),
          this.props.showAddButton && _react2.default.createElement(
            'button',
            {
              className: _linkAddStyles2.default.addLinkConfirmButton,
              type: 'button',
              onClick: this.addLink
            },
            '+'
          ),
          this.props.showRemoveButton && _react2.default.createElement(
            'button',
            {
              className: _linkAddStyles2.default.addLinkConfirmButton,
              type: 'button',
              onClick: this.removeLink
            },
            _react2.default.createElement(
              'svg',
              { width: '10', height: '10', viewBox: '0 0 10 10', xmlns: 'http://www.w3.org/2000/svg' },
              _react2.default.createElement('path', { d: 'M10 1L9 0 5 4 1 0 0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4', fillRule: 'evenodd' })
            )
          )
        )
      );
    }
  }]);

  return LinkAdd;
}(_react.Component);

LinkAdd.defaultProps = {
  placeholder: 'Paste the link url …',
  showAddButton: true,
  showRemoveButton: true
};
exports.default = LinkAdd;