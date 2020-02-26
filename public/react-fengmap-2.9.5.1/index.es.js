import React, { Component } from 'react';
import PropTypes from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function isNil(obj) {
  return obj === undefined || obj === null;
}
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}
function grabNumbers(str) {
  if (!str) {
    return 0;
  }

  return +str.match(/\d+/)[0];
}
function pick(obj, keys) {
  var newObj = {};
  keys.forEach(function (key) {
    newObj[key] = obj[key];
  });
  return newObj;
}

var FengmapBaseControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FengmapBaseControl, _React$Component);

  function FengmapBaseControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FengmapBaseControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FengmapBaseControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "load", function () {});

    _defineProperty(_assertThisInitialized(_this), "unload", function () {});

    return _this;
  }

  return FengmapBaseControl;
}(React.Component);

var FengmapBaseOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FengmapBaseOverlay, _React$Component);

  function FengmapBaseOverlay() {
    _classCallCheck(this, FengmapBaseOverlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(FengmapBaseOverlay).apply(this, arguments));
  }

  return FengmapBaseOverlay;
}(React.Component);

var VALID_SUB_COMPONENTS = [FengmapBaseControl, FengmapBaseOverlay];

function isChildrenValid(children) {
  if (!children || isArray(children) && !children.length) {
    return true;
  }

  if (!isArray(children)) {
    if (VALID_SUB_COMPONENTS.every(function (c) {
      return !(children.type.prototype instanceof c);
    })) {
      throw new Error("".concat(children, " is not a valid child for <FengmapBase />"));
    }

    return true;
  }

  var child = children.find(function (child) {
    return VALID_SUB_COMPONENTS.every(function (c) {
      return !(child.type.prototype instanceof c);
    });
  });

  if (child) {
    throw new Error("".concat(child, " is not a valid child for <FengmapBase />"));
  }

  return true;
}

function isOrderIE() {
  var version = ieVersion();
  return version !== false && version < 11;
}
function ieVersion() {
  var ua = window.navigator.userAgent; // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // not ie


  return false;
}

function getFloors(map) {
  try {
    return map.listGroups.map(function (g) {
      if (g.gname.toLowerCase().indexOf('f') > -1) {
        return +g.gname.match(/\d+/)[0];
      }

      return +g.gname.match(/\d+/)[0] * -1;
    });
  } catch (error) {
    return false;
  }
}
function initFloorsToMapInstance(map) {
  if (!map) {
    return;
  }

  Object.defineProperty(map, 'focusFloor', {
    get: function get() {
      return getFloors(map)[map.groupIDs.indexOf(map.focusGroupID)];
    },
    set: function set(floor) {
      var floors = getFloors(map);
      var focusGroupID = map.groupIDs[floors.indexOf(floor)];
      map.visibleGroupIDs = [focusGroupID];
      map.focusGroupID = focusGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(map, 'listFloors', {
    get: function get() {
      return getFloors(map);
    },
    set: function set(floor) {
      throw new Error('listFloors is not writable');
    },
    enumerable: true,
    configurable: true
  });
}
var STYLE_LEFT_TOP = {
  position: 'absolute',
  top: '15px',
  left: '15px'
};
var STYLE_LEFT_BOTTOM = {
  position: 'absolute',
  bottom: '60px',
  left: '15px'
};
var STYLE_RIGHT_TOP = {
  position: 'absolute',
  top: '15px',
  right: '10px'
};
var STYLE_RIGHT_BOTTOM = {
  position: 'absolute',
  bottom: '60px',
  right: '10px'
};
function mergeWithOffset(ctrlOptions, POSITIONS, baseStyle) {
  // LEFT_BOTTOM
  if (ctrlOptions.position === POSITIONS[0]) {
    if (!ctrlOptions.offset) {
      return Object.assign({}, baseStyle, STYLE_LEFT_BOTTOM);
    }

    return Object.assign({}, baseStyle, _objectSpread2({}, STYLE_LEFT_BOTTOM, {
      bottom: "".concat(grabNumbers(STYLE_LEFT_BOTTOM.bottom) + ctrlOptions.offset.y, "px"),
      left: "".concat(grabNumbers(STYLE_LEFT_BOTTOM.left) + ctrlOptions.offset.x, "px")
    }));
  } // LEFT_TOP


  if (ctrlOptions.position === POSITIONS[1]) {
    if (!ctrlOptions.offset) {
      return Object.assign({}, baseStyle, STYLE_LEFT_TOP);
    }

    return Object.assign({}, baseStyle, _objectSpread2({}, STYLE_LEFT_TOP, {
      top: "".concat(grabNumbers(STYLE_LEFT_TOP.top) + ctrlOptions.offset.y, "px"),
      left: "".concat(grabNumbers(STYLE_LEFT_TOP.left) + ctrlOptions.offset.x, "px")
    }));
  } // RIGHT_BOTTOM


  if (ctrlOptions.position === POSITIONS[2]) {
    if (!ctrlOptions.offset) {
      return Object.assign({}, baseStyle, STYLE_RIGHT_BOTTOM);
    }

    return Object.assign({}, baseStyle, _objectSpread2({}, STYLE_RIGHT_BOTTOM, {
      bottom: "".concat(grabNumbers(STYLE_RIGHT_BOTTOM.bottom) + ctrlOptions.offset.y, "px"),
      right: "".concat(grabNumbers(STYLE_RIGHT_BOTTOM.right) + ctrlOptions.offset.x, "px")
    }));
  } // RIGHT_TOP


  if (ctrlOptions.position === POSITIONS[3]) {
    if (!ctrlOptions.offset) {
      return Object.assign({}, baseStyle, STYLE_RIGHT_TOP);
    }

    return Object.assign({}, baseStyle, _objectSpread2({}, STYLE_RIGHT_TOP, {
      top: "".concat(grabNumbers(STYLE_RIGHT_TOP.top) + ctrlOptions.offset.y, "px"),
      right: "".concat(grabNumbers(STYLE_RIGHT_TOP.right) + ctrlOptions.offset.x, "px")
    }));
  }
}

var EVENTS = ['focusGroupIDChanged', 'loadComplete', 'mapClickNode', 'mapHoverNode', 'mapScaleLevelChanged', 'scaleLevelChanged', 'visibleGroupIDsChanged'];
var INNER_STYLE = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var FengmapBase =
/*#__PURE__*/
function (_Component) {
  _inherits(FengmapBase, _Component);

  function FengmapBase(props) {
    var _this;

    _classCallCheck(this, FengmapBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FengmapBase).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_removeNullDomArray", function () {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return children.reduce(function (init, curr) {
        if (curr === null) {
          return init;
        }

        return init.concat(curr);
      }, []);
    });

    _defineProperty(_assertThisInitialized(_this), "_loadMap", function (mapId) {
      return new Promise(function (resolve, reject) {
        var _this$props = _this.props,
            mapOptions = _this$props.mapOptions,
            events = _this$props.events,
            fengmapSDK = _this$props.fengmapSDK;

        if (!mapId || !fengmapSDK || isOrderIE()) {
          return resolve();
        }

        if (_this.mapInstance) {
          _this.mapContainer.current.innerHTML = '';
        }

        _this.mapInstance = new fengmapSDK.FMMap(Object.assign({}, mapOptions, {
          container: _this.mapContainer.current
        }));
        EVENTS.forEach(function (e) {
          _this.mapInstance.on(e, function (event) {
            if (e === 'loadComplete') {
              _this.loadingTxt.current.style['zIndex'] = -10;

              _this._configGestureEnableController();

              _this._initAllChildren(_this.mapInstance);

              initFloorsToMapInstance(_this.mapInstance);
              resolve();
            }

            if (events && events[e]) {
              events[e](event, _this.mapInstance);
            }

            if (!_this.mapInstance) {
              return;
            }

            if (events && events.mapHoverNode) {
              _this.mapInstance.gestureEnableController.enableMapHover = true;
            } else {
              _this.mapInstance.gestureEnableController.enableMapHover = false;
            }
          });
        });

        _this.mapInstance.openMapById(mapId);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_configGestureEnableController", function () {
      var gestureEnableController = _this.props.gestureEnableController;

      if (gestureEnableController) {
        Object.keys(gestureEnableController).forEach(function (key) {
          _this.mapInstance.gestureEnableController[key] = gestureEnableController[key];
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_initAllChildren", function (map) {
      var fengmapSDK = _this.props.fengmapSDK;

      var _assertThisInitialize = _assertThisInitialized(_this),
          refs = _assertThisInitialize.refs;

      if (!isArray(refs)) {
        return;
      }

      refs.forEach(function (ref) {
        ref.current.load(map, fengmapSDK, _assertThisInitialized(_this));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_destroyAllChildren", function (map) {
      var fengmapSDK = _this.props.fengmapSDK;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          refs = _assertThisInitialize2.refs;

      if (!isArray(refs)) {
        return;
      }

      refs.forEach(function (ref) {
        if (ref.current.unload) {
          ref.current.unload(map, fengmapSDK, _assertThisInitialized(_this));
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_destroy", function () {
      if (!_this.mapInstance) {
        return;
      }

      _this._destroyAllChildren(_this.mapInstance);

      EVENTS.forEach(function (e) {
        _this.mapInstance.off(e);
      });

      if (isFunction(_this.mapInstance.dispose)) {
        try {
          _this.mapInstance.dispose();
        } catch (err) {
          console.warn(err);
        }
      }
    });

    _this.mapContainer = React.createRef();
    _this.loadingTxt = React.createRef();

    var _children = _this._removeNullDomArray(props.children || []);

    isChildrenValid(_children);
    _this.refs = null;
    _this.isFengmapBase = props.isFengmapBase === undefined ? true : props.isFengmapBase;
    return _this;
  }

  _createClass(FengmapBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._loadMap(this.props.mapId);

      if (this.loadingTxt && this.loadingTxt.current) {
        this.loadingTxt.current.style['zIndex'] = 10;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.mapId === this.props.mapId) {
        return;
      }

      this._destroy();

      this._loadMap(this.props.mapId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          loadingTxt = _this$props2.loadingTxt,
          children = _this$props2.children;

      if (isOrderIE()) {
        return React.createElement("div", {
          style: Object.assign({}, style, {
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center'
          })
        }, React.createElement("span", {
          style: {
            display: 'inline-block'
          }
        }, this.props.supportTxt));
      }

      var childs = this._removeNullDomArray(children || []);

      var cloneChildren = cloneElements(childs);

      if (cloneChildren) {
        this.refs = cloneChildren.map(function (c) {
          return c.ref;
        });
      }

      return React.createElement("div", {
        style: Object.assign({}, style, {
          position: 'relative'
        })
      }, React.createElement("div", {
        ref: this.mapContainer,
        style: INNER_STYLE
      }), React.createElement("div", {
        ref: this.loadingTxt,
        style: INNER_STYLE
      }, loadingTxt), cloneChildren ? cloneChildren.map(function (c) {
        return c.child;
      }) : null);
    }
  }]);

  return FengmapBase;
}(Component);

_defineProperty(FengmapBase, "propTypes", {
  isFengmapBase: PropTypes.bool,
  reference: PropTypes.any,
  mapOptions: PropTypes.object.isRequired,
  events: PropTypes.object,
  mapId: PropTypes.string,
  style: PropTypes.object,
  fengmapSDK: PropTypes.any.isRequired,
  loadingTxt: PropTypes.string,
  supportTxt: PropTypes.string,
  gestureEnableController: PropTypes.shape({
    enableMapHover: PropTypes.bool,
    enableMapPan: PropTypes.bool,
    enableMapPinch: PropTypes.bool,
    enableMapRotate: PropTypes.bool,
    enableMapIncline: PropTypes.bool,
    enableMapSingleTap: PropTypes.bool
  }),
  children: PropTypes.any
});

_defineProperty(FengmapBase, "defaultProps", {
  loadingTxt: '地图加载中...',
  supportTxt: '您使用的浏览器暂不支持地图，请升级或改用Chrome获取更好的服务'
});

function cloneElements(children) {
  if (!children) {
    return null;
  }

  if (!isArray(children)) {
    var ref = React.createRef();
    return [{
      child: React.cloneElement(children, {
        key: 'onlyone',
        ref: ref
      }),
      ref: ref
    }];
  }

  return children.map(function (child, i) {
    var ref = React.createRef();
    return {
      child: React.cloneElement(child, {
        ref: ref,
        key: i
      }),
      ref: ref
    };
  });
}

var FengmapFloors =
/*#__PURE__*/
function (_Component) {
  _inherits(FengmapFloors, _Component);

  function FengmapFloors(props) {
    var _this;

    _classCallCheck(this, FengmapFloors);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FengmapFloors).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_changeFloor", function () {
      var _this$props = _this.props,
          onFloorChange = _this$props.onFloorChange,
          value = _this$props.value;

      try {
        if (!_this.mapInstance || isNil(_this.mapInstance.listFloors)) {
          return;
        }

        var listFloors = _this.mapInstance.listFloors;
        var index = listFloors.findIndex(function (f) {
          return f === value;
        });
        var groupId = index + 1;
        _this.mapInstance.visibleGroupIDs = [groupId];
        _this.mapInstance.focusGroupID = groupId;

        if (onFloorChange) {
          onFloorChange({
            floorLevel: value,
            groupId: groupId
          });
        }
      } catch (error) {// such error: TypeError: Cannot read property 'scene_data' of undefined, should not be printed
      }
    });

    _this.mapInstance = null;
    return _this;
  }

  _createClass(FengmapFloors, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value === prevProps.value) {
        return;
      }

      if (!this.mapInstance) {
        return;
      }

      this._changeFloor();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = omit(this.props, 'events', 'mapOptions');
      var events = omit(this.props.events || {}, 'loadComplete');
      var mapOptions = this.props.mapOptions;
      return React.createElement(FengmapBase, _extends({}, props, {
        isFengmapBase: false,
        ref: props.reference,
        mapOptions: Object.assign({}, mapOptions, {
          defaultVisibleGroups: [],
          defaultFocusGroup: null
        }),
        events: _objectSpread2({}, events, {
          loadComplete: function loadComplete(e, map) {
            _this2.mapInstance = map;

            if (_this2.props.events && _this2.props.events.loadComplete) {
              _this2.props.events.loadComplete(e, map);
            }

            _this2._changeFloor();
          }
        })
      }), props.children);
    }
  }]);

  return FengmapFloors;
}(Component);

_defineProperty(FengmapFloors, "propTypes", {
  reference: PropTypes.any,
  mapOptions: PropTypes.object,
  events: PropTypes.object,
  value: PropTypes.number,
  onFloorChange: PropTypes.func
});

var FengmapFloors$1 = React.forwardRef(function (props, ref) {
  return React.createElement(FengmapFloors, _extends({
    reference: ref
  }, props));
});

function omit(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var newObj = {};
  Object.keys(obj).filter(function (k) {
    return keys.indexOf(k) < 0;
  }).forEach(function (k) {
    newObj[k] = obj[k];
  });
  return newObj;
}

var FengmapZoomControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(FengmapZoomControl, _FengmapBaseControl);

  function FengmapZoomControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FengmapZoomControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FengmapZoomControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var ctrlOptions = _this.props.ctrlOptions;
      new fengmapSDK.zoomControl(map, ctrlOptions);
    });

    return _this;
  }

  _createClass(FengmapZoomControl, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FengmapZoomControl;
}(FengmapBaseControl);

_defineProperty(FengmapZoomControl, "propTypes", {
  ctrlOptions: PropTypes.shape({
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    imgURL: PropTypes.string
  }).isRequired
});

var rotateIcon = "data:image/jpeg;base64,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";

var INLINE_STYLE = {
  width: '42px',
  height: '42px',
  zIndex: '10',
  cursor: 'pointer',
  backgroundColor: '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 3px',
  borderRadius: '2px'
};
var INNER_STYLE$1 = {
  width: '20px',
  height: '20px',
  position: 'absolute',
  top: '50%',
  marginTop: '-10px',
  left: '50%',
  marginLeft: '-10px'
};

var FengmapRotateControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(FengmapRotateControl, _FengmapBaseControl);

  function FengmapRotateControl(_props) {
    var _this;

    _classCallCheck(this, FengmapRotateControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FengmapRotateControl).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "_getFinalStyle", function (props, POSITIONS) {
      var ctrlOptions = props.ctrlOptions;

      if (!ctrlOptions) {
        return mergeWithOffset({
          position: POSITIONS[0]
        }, POSITIONS, INLINE_STYLE);
      } // no position specified, with LEFT_BOTTOM by default


      if (POSITIONS.indexOf(ctrlOptions.position) < 0) {
        return mergeWithOffset(_objectSpread2({}, ctrlOptions, {
          position: POSITIONS[0]
        }), POSITIONS, INLINE_STYLE);
      }

      return mergeWithOffset(ctrlOptions, POSITIONS, INLINE_STYLE);
    });

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var POSITIONS = [fengmapSDK.controlPositon.LEFT_BOTTOM, fengmapSDK.controlPositon.LEFT_TOP, fengmapSDK.controlPositon.RIGHT_BOTTOM, fengmapSDK.controlPositon.RIGHT_TOP];

      _this.setState({
        style: _this._getFinalStyle(_this.props, POSITIONS),
        POSITIONS: POSITIONS,
        loaded: true
      }, function () {
        var elem = _this.rotateControl.current;

        if (!elem) {
          return;
        }

        elem.addEventListener('click', function () {
          map.rotateAngle = _this._getNextRotateAngle(map.rotateAngle);
        }, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getNextRotateAngle", function (rotateAngle) {
      var angle = _this.props.angle;
      var next = rotateAngle + angle;

      if (next <= 360) {
        return next;
      }

      return next - 360;
    });

    _this.state = {
      style: {},
      POSITIONS: [],
      loaded: false
    };
    _this.rotateControl = React.createRef();
    return _this;
  }

  _createClass(FengmapRotateControl, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loaded = _this$state.loaded,
          style = _this$state.style;

      if (!loaded) {
        return null;
      }

      return React.createElement("div", {
        className: "fm-control-rotate-btn",
        style: style,
        ref: this.rotateControl
      }, React.createElement("img", {
        src: rotateIcon,
        style: INNER_STYLE$1,
        alt: ""
      }));
    }
  }]);

  return FengmapRotateControl;
}(FengmapBaseControl);

_defineProperty(FengmapRotateControl, "propTypes", {
  ctrlOptions: PropTypes.shape({
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  }).isRequired,
  angle: function angle(props, propName, componentName) {
    if (props[propName] === undefined) {
      return true;
    }

    if (Object.prototype.toString.call(props[propName]) !== '[object Number]') {
      throw new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Must be number > 0 && < 360"));
    }

    if (props[propName] <= 0 || props[propName] >= 360) {
      throw new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Must be number > 0 && < 360"));
    }
  }
});

_defineProperty(FengmapRotateControl, "defaultProps", {
  angle: 10
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_horizontalButtonGroup__3uinz {\n  position: absolute;\n  z-index: 10;\n  width: 42px;\n  height: 42px;\n}\n\n.index_floorBlock__1zdDe {\n  width: 42px;\n  height: 42px;\n  background-color: white;\n  text-align: center;\n  cursor: pointer;\n  font-size: 0.8em;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 42px;\n  color: #000;\n}\n\n.index_withBorder__pP6FB {\n  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 3px;\n  border-radius: 2px;\n}\n\n.index_active__KDiYO {\n  color: rgb(30, 130, 250);\n}\n\n.index_inlineBlock__3CHSo {\n  display: inline-block;\n}\n\n.index_groupsContainer__1KXH0 {\n  height: 42px;\n  position: absolute;\n  overflow-x: auto;\n  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 3px;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n\n.index_groupsContainer__1KXH0::-webkit-scrollbar:horizontal,\n.index_groupsContainer__1KXH0::-webkit-scrollbar:vertical {\n  width: 3px;\n}\n\n.index_groupsContainer__1KXH0::-webkit-scrollbar-track:horizontal,\n.index_groupsContainer__1KXH0::-webkit-scrollbar-track:vertical {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.index_groupsContainer__1KXH0::-webkit-scrollbar-thumb:horizontal,\n.index_groupsContainer__1KXH0::-webkit-scrollbar-thumb:vertical {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n";
var styles = {"horizontalButtonGroup":"index_horizontalButtonGroup__3uinz","floorBlock":"index_floorBlock__1zdDe","withBorder":"index_withBorder__pP6FB","active":"index_active__KDiYO","inlineBlock":"index_inlineBlock__3CHSo","groupsContainer":"index_groupsContainer__1KXH0"};
styleInject(css);

var HorizontalButtonGroupsControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HorizontalButtonGroupsControl, _React$Component);

  function HorizontalButtonGroupsControl(props) {
    var _this;

    _classCallCheck(this, HorizontalButtonGroupsControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalButtonGroupsControl).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {});

    _defineProperty(_assertThisInitialized(_this), "_getPosition", function () {
      var _this$props = _this.props,
          height = _this$props.height,
          sdk = _this$props.sdk,
          ctrlOptions = _this$props.ctrlOptions;

      if (ctrlOptions && !ctrlOptions.offset) {
        if (!ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }

        if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
          return {
            left: '10px',
            top: "".concat(height * 0.18, "px")
          };
        }

        if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
          return {
            left: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }

        if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.18, "px")
          };
        }

        if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }
      }

      if (!ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
        return {
          left: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.18 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
        return {
          left: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.18 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleShowGroups", function () {
      _this.setState({
        showGroups: !_this.state.showGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getFloorName", function (floorLevel, isFocusFloorName) {
      var _this$props2 = _this.props,
          labelFormater = _this$props2.labelFormater,
          focusFloor = _this$props2.map.focusFloor;

      if (!floorLevel || Number.isNaN(floorLevel)) {
        return '';
      } //重置时重新设置楼层按钮显示


      if (isFocusFloorName && typeof focusFloor === 'undefined') {
        floorLevel = _this.state.listFloors[0];
        setTimeout(function () {
          _this.setState({
            focusFloor: floorLevel
          });
        }, 50);
      }

      if (labelFormater) {
        return "".concat(labelFormater(floorLevel));
      }

      if (floorLevel > 0) {
        return "F".concat(floorLevel);
      }

      return "B".concat(Math.abs(floorLevel));
    });

    _defineProperty(_assertThisInitialized(_this), "_changeFloor", function (floor) {
      var map = _this.props.map;
      map.focusFloor = floor; //切换时存储最新的楼层信息

      _this.setState({
        focusFloor: floor
      });

      _this._toggleShowGroups();
    });

    _defineProperty(_assertThisInitialized(_this), "_getDisplayGroups", function (containerPosition) {
      var _this$props3 = _this.props,
          map = _this$props3.map,
          ctrlOptions = _this$props3.ctrlOptions;
      var showGroups = _this.state.showGroups;
      var showBtnCount = ctrlOptions.showBtnCount;

      if (!showGroups || !map || !map.listFloors) {
        return null;
      }

      var realBtnCount = showBtnCount > map.listFloors.length || showBtnCount < 1 ? map.listFloors.length : showBtnCount || 3;
      var groupsContainerPosition = {
        width: "".concat(42 * realBtnCount, "px")
      };

      if (containerPosition.right) {
        var rightNumber = +containerPosition.right.replace('px', '');
        groupsContainerPosition.right = "".concat(rightNumber + 42, "px");
      } else {
        var leftNumber = +containerPosition.left.replace('px', '');
        groupsContainerPosition.left = "".concat(leftNumber + 42, "px");
      }

      return React.createElement("div", {
        className: styles.groupsContainer,
        style: groupsContainerPosition
      }, map.listFloors.map(function (floor, i) {
        return React.createElement("div", {
          key: floor,
          className: classnames(styles.floorBlock, styles.inlineBlock, _defineProperty({}, styles.active, floor === map.focusFloor)),
          onClick: function onClick() {
            return _this._changeFloor(floor);
          }
        }, _this._getFloorName(floor));
      }));
    });

    _this.state = {
      focusFloor: props.map.focusFloor,
      showGroups: false,
      listFloors: null
    };
    return _this;
  }

  _createClass(HorizontalButtonGroupsControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var map = this.props.map;
      map.on('focusGroupIDChanged', function () {
        _this2.setState({
          focusFloor: map.focusFloor
        });
      });
      setTimeout(function () {
        _this2.setState({
          focusFloor: map.focusFloor,
          listFloors: map.listFloors
        });
      }, 500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this.props.map;
      map.off('focusGroupIDChanged');
    }
  }, {
    key: "render",
    value: function render() {
      var focusFloor = this.state.focusFloor;
      var mapOnloadOver = this.props.mapOnloadOver;

      var containerPosition = this._getPosition();

      return React.createElement("div", {
        className: styles.horizontalButtonGroup,
        style: Object.assign({}, containerPosition, {
          display: mapOnloadOver ? 'block' : 'none'
        })
      }, this._getDisplayGroups(containerPosition), React.createElement("div", {
        className: classnames(styles.floorBlock, styles.initFloor, styles.withBorder, styles.active),
        onClick: this._toggleShowGroups
      }, this._getFloorName(focusFloor, true)));
    }
  }]);

  return HorizontalButtonGroupsControl;
}(React.Component);

_defineProperty(HorizontalButtonGroupsControl, "propTypes", {
  map: PropTypes.any,
  sdk: PropTypes.any,
  height: PropTypes.number,
  ctrlOptions: PropTypes.shape({
    showBtnCount: PropTypes.number,
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }),
  labelFormater: PropTypes.func,
  mapOnloadOver: PropTypes.bool
});

var css$1 = ".index_verticalButtonGroup__Rd1wl {\n  position: absolute;\n  z-index: 10;\n  width: 42px;\n}\n\n.index_floorBlock__2vsJ9 {\n  width: 42px;\n  height: 42px;\n  background-color: white;\n  text-align: center;\n  cursor: pointer;\n  font-size: 0.8em;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 42px;\n  color: #000;\n}\n\n.index_withBorder__3mI3S {\n  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 3px;\n  border-radius: 2px;\n}\n\n.index_active__21NUO {\n  color: rgb(30, 130, 250);\n}\n\n.index_groupsContainer__1CXgv {\n  width: 42px;\n  position: absolute;\n  overflow-y: auto;\n  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 3px;\n  border-radius: 2px;\n}\n\n.index_groupsContainer__1CXgv::-webkit-scrollbar {\n  width: 3px;\n}\n\n.index_groupsContainer__1CXgv::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.index_groupsContainer__1CXgv::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n";
var styles$1 = {"verticalButtonGroup":"index_verticalButtonGroup__Rd1wl","floorBlock":"index_floorBlock__2vsJ9","withBorder":"index_withBorder__3mI3S","active":"index_active__21NUO","groupsContainer":"index_groupsContainer__1CXgv"};
styleInject(css$1);

var VerticalButtonGroupsControl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticalButtonGroupsControl, _React$Component);

  function VerticalButtonGroupsControl(props) {
    var _this;

    _classCallCheck(this, VerticalButtonGroupsControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalButtonGroupsControl).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_getPosition", function () {
      var _this$props = _this.props,
          height = _this$props.height,
          sdk = _this$props.sdk,
          ctrlOptions = _this$props.ctrlOptions;

      if (ctrlOptions && !ctrlOptions.offset) {
        if (!ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }

        if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
          return {
            left: '10px',
            top: "".concat(height * 0.18, "px")
          };
        }

        if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
          return {
            left: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }

        if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.18, "px")
          };
        }

        if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
          return {
            right: '10px',
            top: "".concat(height * 0.82, "px")
          };
        }
      }

      if (!ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
        return {
          left: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.18 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
        return {
          left: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.18 - ctrlOptions.offset.y, "px")
        };
      }

      if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
        return {
          right: "".concat(10 + ctrlOptions.offset.x, "px"),
          top: "".concat(height * 0.82 - ctrlOptions.offset.y, "px")
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleShowGroups", function () {
      _this.setState({
        showGroups: !_this.state.showGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getFloorName", function (floorLevel, isFocusFloorName) {
      var _this$props2 = _this.props,
          labelFormater = _this$props2.labelFormater,
          focusFloor = _this$props2.map.focusFloor;

      if (!floorLevel || Number.isNaN(floorLevel)) {
        return '';
      } //重置时重新设置楼层按钮显示


      if (isFocusFloorName && typeof focusFloor === 'undefined') {
        floorLevel = _this.state.listFloors[0];
        setTimeout(function () {
          _this.setState({
            focusFloor: floorLevel
          });
        }, 50);
      }

      if (labelFormater) {
        return "".concat(labelFormater(floorLevel));
      }

      if (floorLevel > 0) {
        return "F".concat(floorLevel);
      }

      return "B".concat(Math.abs(floorLevel));
    });

    _defineProperty(_assertThisInitialized(_this), "_changeFloor", function (floor) {
      var map = _this.props.map;
      map.focusFloor = floor; //切换时存储最新的楼层信息

      _this.setState({
        focusFloor: floor
      });

      _this._toggleShowGroups();
    });

    _defineProperty(_assertThisInitialized(_this), "_getDisplayGroups", function (containerPosition) {
      var _this$props3 = _this.props,
          map = _this$props3.map,
          ctrlOptions = _this$props3.ctrlOptions;
      var showGroups = _this.state.showGroups;
      var showBtnCount = ctrlOptions.showBtnCount;

      if (!showGroups || !map || !map.listFloors) {
        return null;
      }

      var realBtnCount = showBtnCount > map.listFloors.length || showBtnCount < 1 ? map.listFloors.length : showBtnCount || 3;
      var groupsContainerPosition = {
        top: "-".concat(realBtnCount * 42 + 10, "px"),
        height: "".concat(realBtnCount * 42, "px")
      };
      return React.createElement("div", {
        className: styles$1.groupsContainer,
        style: groupsContainerPosition
      }, map.listFloors.map(function (floor, i) {
        return React.createElement("div", {
          key: floor,
          className: classnames(styles$1.floorBlock, _defineProperty({}, styles$1.active, floor === map.focusFloor)),
          onClick: function onClick() {
            return _this._changeFloor(floor);
          }
        }, _this._getFloorName(floor));
      }));
    });

    _this.state = {
      focusFloor: props.map.focusFloor,
      showGroups: false,
      listFloors: null
    };
    return _this;
  }

  _createClass(VerticalButtonGroupsControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var map = this.props.map;
      map.on('focusGroupIDChanged', function () {
        _this2.setState({
          focusFloor: map.focusFloor
        });
      });
      setTimeout(function () {
        _this2.setState({
          focusFloor: map.focusFloor,
          listFloors: map.listFloors
        });
      }, 500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this.props.map;
      map.off('focusGroupIDChanged');
    }
  }, {
    key: "render",
    value: function render() {
      var focusFloor = this.state.focusFloor;
      var mapOnloadOver = this.props.mapOnloadOver;

      var containerPosition = this._getPosition();

      return React.createElement("div", {
        className: styles$1.verticalButtonGroup,
        style: Object.assign({}, containerPosition, {
          display: mapOnloadOver ? 'block' : 'none'
        })
      }, this._getDisplayGroups(containerPosition), React.createElement("div", {
        className: classnames(styles$1.floorBlock, styles$1.withBorder, styles$1.active),
        onClick: this._toggleShowGroups
      }, this._getFloorName(focusFloor, true)));
    }
  }]);

  return VerticalButtonGroupsControl;
}(React.Component);

_defineProperty(VerticalButtonGroupsControl, "propTypes", {
  map: PropTypes.any,
  sdk: PropTypes.any,
  height: PropTypes.number,
  ctrlOptions: PropTypes.shape({
    showBtnCount: PropTypes.number,
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }),
  labelFormater: PropTypes.func,
  mapOnloadOver: PropTypes.bool
});

var FengmapFloorControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(FengmapFloorControl, _FengmapBaseControl);

  function FengmapFloorControl(props) {
    var _this;

    _classCallCheck(this, FengmapFloorControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FengmapFloorControl).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var ctrlOptions = _this.props.ctrlOptions;

      if (!parent.isFengmapBase) {
        throw new Error('<FengmapFloorControl /> cannot work with <FengmapFloors />');
      }

      _this.resizeHandler = function () {
        _this.resizeTimer = setTimeout(function () {
          try {
            _this.setState({
              showHorizontal: map.height < 450
            });
          } catch (error) {
            console.warn(error.message);
          }
        }, 1000);
      };

      window.addEventListener('resize', _this.resizeHandler);

      _this.setState({
        ctrlOptions: ctrlOptions,
        map: map,
        fengmapSDK: fengmapSDK,
        mapOnloadOver: true
      });

      setTimeout(_this.resizeHandler, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "unload", function (map, fengmapSDK, parent) {
      clearTimeout(_this.resizeTimer);
      window.removeEventListener('resize', _this.resizeHandler);

      _this.setState({
        mapOnloadOver: false
      });
    });

    _this.state = {
      showHorizontal: false,
      ctrlOptions: null,
      map: null,
      fengmapSDK: null,
      mapOnloadOver: false
    };
    return _this;
  }

  _createClass(FengmapFloorControl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var labelFormater = this.props.labelFormater;
      var _this$state = this.state,
          showHorizontal = _this$state.showHorizontal,
          ctrlOptions = _this$state.ctrlOptions,
          map = _this$state.map,
          fengmapSDK = _this$state.fengmapSDK,
          mapOnloadOver = _this$state.mapOnloadOver;

      if (!map) {
        return null;
      }

      var ButtonGroupsControl = showHorizontal ? HorizontalButtonGroupsControl : VerticalButtonGroupsControl;

      if (!mapOnloadOver) {
        return null;
      }

      return React.createElement(ButtonGroupsControl, {
        ctrlOptions: ctrlOptions || {},
        height: map.height,
        sdk: fengmapSDK,
        map: map,
        labelFormater: labelFormater,
        mapOnloadOver: mapOnloadOver
      });
    }
  }]);

  return FengmapFloorControl;
}(FengmapBaseControl);

_defineProperty(FengmapFloorControl, "propTypes", {
  ctrlOptions: PropTypes.shape({
    allLayer: PropTypes.bool,
    showBtnCount: PropTypes.number,
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }).isRequired,
  labelFormater: PropTypes.func
});

var Fengmap3DControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(Fengmap3DControl, _FengmapBaseControl);

  function Fengmap3DControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fengmap3DControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fengmap3DControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var ctrlOptions = _this.props.ctrlOptions;
      new fengmapSDK.toolControl(map, ctrlOptions);
    });

    return _this;
  }

  _createClass(Fengmap3DControl, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Fengmap3DControl;
}(FengmapBaseControl);

_defineProperty(Fengmap3DControl, "propTypes", {
  ctrlOptions: PropTypes.shape({
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    imgURL: PropTypes.string
  }).isRequired
});

var FengmapCompassControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(FengmapCompassControl, _FengmapBaseControl);

  function FengmapCompassControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FengmapCompassControl);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FengmapCompassControl)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var visible = _this.props.visible;
      _this.mapInstance = map;
      map.showCompass = visible;

      _this._initImage();

      _this._initClick();
    });

    _defineProperty(_assertThisInitialized(_this), "_initImage", function () {
      var image = _this.props.image;
      var img = image || {};

      _this.mapInstance.compass.setBgImage(img.bg);

      _this.mapInstance.compass.setFgImage(img.fg);
    });

    _defineProperty(_assertThisInitialized(_this), "_initClick", function () {
      var onClick = _this.props.onClick;

      _this.mapInstance.off('mapClickCompass');

      if (!onClick) {
        return;
      }

      _this.mapInstance.on('mapClickCompass', function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        onClick.apply(void 0, [_this.mapInstance].concat(args));
      });
    });

    return _this;
  }

  _createClass(FengmapCompassControl, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      if (prev.visible !== this.props.visible) {
        this.mapInstance.showCompass = this.props.visible;
      }

      if (prev.onClick !== this.props.onClick) {
        this._initClick();
      }

      if (prev.image !== this.props.image) {
        this._initImage();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FengmapCompassControl;
}(FengmapBaseControl);

_defineProperty(FengmapCompassControl, "propTypes", {
  visible: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    bg: PropTypes.string,
    fg: PropTypes.string
  }),
  onClick: PropTypes.func
});

var RESET_STYLE = {
  position: 'absolute',
  width: '42PX',
  height: '42PX',
  backgroundSize: 'contain',
  boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 3px',
  cursor: 'pointer',
  backgroundColor: '#fff'
};

var FengmapResetControl =
/*#__PURE__*/
function (_FengmapBaseControl) {
  _inherits(FengmapResetControl, _FengmapBaseControl);

  function FengmapResetControl(props) {
    var _this;

    _classCallCheck(this, FengmapResetControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FengmapResetControl).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var ctrlOptions = _this.props.ctrlOptions;

      _this.setState({
        map: map,
        ctrlOptions: ctrlOptions,
        parent: parent
      });

      setTimeout(function () {
        _this.setState({
          mapOnloadOver: true
        });
      }, 200);
    });

    _defineProperty(_assertThisInitialized(_this), "resetMap", function () {
      _this.setState({
        mapOnloadOver: false
      });

      var original = _this.btnRef.current.style['pointer-events'] || 'auto';
      _this.btnRef.current.style['pointer-events'] = 'none';
      var parent = _this.state.parent;

      parent._destroy();

      parent._loadMap(parent.props.mapId).then(function () {
        _this.btnRef.current.style['pointer-events'] = original;
      });
    });

    _this.state = {
      ctrlOptions: null,
      parent: null,
      map: null,
      mapOnloadOver: false
    };
    _this.btnRef = React.createRef();
    return _this;
  }

  _createClass(FengmapResetControl, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ctrlOptions = _this$state.ctrlOptions,
          map = _this$state.map,
          mapOnloadOver = _this$state.mapOnloadOver;

      if (!map) {
        return null;
      }

      return React.createElement("div", {
        ref: this.btnRef,
        onClick: this.resetMap,
        style: Object.assign({}, RESET_STYLE, getResetPosition(ctrlOptions), {
          display: mapOnloadOver ? 'block' : 'none'
        })
      });
    }
  }]);

  return FengmapResetControl;
}(FengmapBaseControl);

_defineProperty(FengmapResetControl, "propTypes", {
  ctrlOptions: PropTypes.shape({
    position: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }).isRequired
});

function getResetPosition(ctrlOptions) {
  var x = 0;
  var y = 0;
  var position = ctrlOptions.position;

  if (ctrlOptions.hasOwnProperty('offset')) {
    x = ctrlOptions.offset.x;
    y = ctrlOptions.offset.y;
  }

  var imgURL = ctrlOptions.imgURL;

  switch (position) {
    case 1:
      return {
        left: "".concat(10 + x, "px"),
        top: "".concat(50 + y, "px"),
        backgroundImage: "url(".concat(imgURL, ")")
      };

    case 3:
      return {
        right: "".concat(10 + x, "px"),
        top: "".concat(50 + y, "px"),
        backgroundImage: "url(".concat(imgURL, ")")
      };

    case 2:
      return {
        left: "".concat(10 + x, "px"),
        bottom: "".concat(50 + y, "px"),
        backgroundImage: "url(".concat(imgURL, ")")
      };

    case 4:
      return {
        right: "".concat(10 + x, "px"),
        bottom: "".concat(50 + y, "px"),
        backgroundImage: "url(".concat(imgURL, ")")
      };

    default:
      return {
        right: "".concat(10 + x, "px"),
        bottom: "".concat(50 + y, "px"),
        backgroundImage: "url('/assets/reset.png')"
      };
  }
}

var FengmapImageMarker =
/*#__PURE__*/
function (_FengmapBaseOverlay) {
  _inherits(FengmapImageMarker, _FengmapBaseOverlay);

  function FengmapImageMarker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FengmapImageMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FengmapImageMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var opts = _this.props.opts;

      _this._createMarker(map, fengmapSDK, opts);
    });

    _defineProperty(_assertThisInitialized(_this), "_createMarker", function (map, fengmapSDK, opts) {
      _this.map = map;
      _this.fengmapSDK = fengmapSDK;
      _this.focusGroupID = _this.map.focusGroupID;
      _this.groupLayer = _this.map.getFMGroup(_this.map.focusGroupID);
      _this.layer = new _this.fengmapSDK.FMImageMarkerLayer();

      _this.groupLayer.addLayer(_this.layer);

      _this.marker = new _this.fengmapSDK.FMImageMarker(_objectSpread2({}, opts, {
        callback: function callback() {
          _this.marker.alwaysShow();

          if (opts.callback) {
            opts.callback(_this.marker);
          }
        }
      }));

      _this.layer.addMarker(_this.marker);
    });

    _defineProperty(_assertThisInitialized(_this), "_destroy", function () {
      if (_this.layer) {
        _this.layer.removeAll();
      }

      if (_this.groupLayer) {
        _this.groupLayer.removeLayer(_this.layer);
      }
    });

    return _this;
  }

  _createClass(FengmapImageMarker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      if (prev.opts === this.props.opts) {
        return;
      }

      var opts = this.props.opts;

      if (this.focusGroupID === this.map.focusGroupID) {
        this.marker.setPosition(pick(opts, ['x', 'y']), this.map.focusGroupID, opts.height);
        return;
      }

      this._destroy();

      this._createMarker(this.map, this.fengmapSDK, opts);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FengmapImageMarker;
}(FengmapBaseOverlay);

_defineProperty(FengmapImageMarker, "propTypes", {
  opts: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    size: PropTypes.number,
    height: PropTypes.number,
    url: PropTypes.string,
    callback: PropTypes.func
  }).isRequired
});

var EVENTS$1 = ['complete', 'crossGroup', 'walking'];

var FengmapNavigation =
/*#__PURE__*/
function (_FengmapBaseOverlay) {
  _inherits(FengmapNavigation, _FengmapBaseOverlay);

  function FengmapNavigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FengmapNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FengmapNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "load", function (map, fengmapSDK, parent) {
      var naviOptions = _this.props.naviOptions;

      _this._createNavigation(map, fengmapSDK, naviOptions);
    });

    _defineProperty(_assertThisInitialized(_this), "_createNavigation", function (map, fengmapSDK, naviOptions) {
      _this.map = map;
      _this.fengmapSDK = fengmapSDK;
      _this.navigation = new fengmapSDK.FMNavigation(_objectSpread2({}, naviOptions || {}, {
        map: map
      }));
      var events = _this.props.events;
      EVENTS$1.forEach(function (e) {
        _this.navigation.on(e, function (event) {
          if (events && events[e]) {
            events[e](event, _this.navigation);
          }
        });
      });

      _this._setRoute({}, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "_setRoute", function (prev, props) {
      var start = props.start,
          end = props.end,
          onDrawComplete = props.onDrawComplete;

      if (!_this.navigation) {
        return;
      }

      if (start !== prev.start || end !== prev.end) {
        _this.navigation.clearAll();
      }

      if (start && start.options) {
        _this.navigation.setStartPoint(start.options, start.noMarker);
      }

      if (end && end.options) {
        _this.navigation.setEndPoint(end.options, end.noMarker);
      }

      if (start && end) {
        _this.navigation.drawNaviLine();

        onDrawComplete && onDrawComplete(_this.navigation);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_destroy", function () {
      if (_this.navigation) {
        _this.navigation.clearAll();
      }
    });

    return _this;
  }

  _createClass(FengmapNavigation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      this._setRoute(prev || {}, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FengmapNavigation;
}(FengmapBaseOverlay);

_defineProperty(FengmapNavigation, "propTypes", {
  naviOptions: PropTypes.shape({
    speed: PropTypes.number,
    followPosition: PropTypes.bool,
    followAngle: PropTypes.bool,
    changeTiltAngle: PropTypes.bool,
    scaleLevel: PropTypes.number,
    offsetHeight: PropTypes.number,
    lineStyle: PropTypes.object
  }),
  start: PropTypes.shape({
    options: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      groupID: PropTypes.number,
      url: PropTypes.string,
      size: PropTypes.number,
      callback: PropTypes.func
    }),
    noMarker: PropTypes.bool
  }),
  end: PropTypes.shape({
    options: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      groupID: PropTypes.number,
      url: PropTypes.string,
      size: PropTypes.number,
      callback: PropTypes.func
    }),
    noMarker: PropTypes.bool
  }),
  events: PropTypes.object,
  onDrawComplete: PropTypes.func
});

export { Fengmap3DControl, FengmapBase, FengmapCompassControl, FengmapFloorControl, FengmapFloors$1 as FengmapFloors, FengmapImageMarker, FengmapNavigation, FengmapResetControl, FengmapRotateControl, FengmapZoomControl };
//# sourceMappingURL=index.es.js.map
