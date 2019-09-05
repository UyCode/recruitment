"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;
var _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    Index = function(e) {
        function t() {
            var e, o, r, n;
            _classCallCheck(this, t);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.props = {
                item: {
                    twoWay: !0
                },
                itemIndex: {
                    twoWay: !0
                },
                page: {
                    twoWay: !0
                }
            }, r.data = {
                auditStatus: {
                    1: "审核中",
                    2: "已通过",
                    3: "未通过"
                }
            }, r.methods = {
                navigate: function(e) {
                    if ("mapList" != this.page || !(3 == e.status || e.auditStatus && 2 != e.auditStatus)) return e.auditStatus && 1 == e.auditStatus ? void wx.showToast({
                        title: "简历审核未通过，暂不能查看详情",
                        icon: "none",
                        duration: 3e3
                    }) : void wx.navigateTo({
                        url: "resumeDetail?id=" + e.id + "&page=" + this.page
                    })
                }
            }, n = o, _possibleConstructorReturn(r, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;