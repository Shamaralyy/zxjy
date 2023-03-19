"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../刘懿莹/框架/vue/vue3/智享极邮/unpackage/dist/dev/.nvue/pages/index/index.js
  var import_vue = __toESM(require_vue());
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var _style_0 = { "container": { "": { "display": "flex", "height": "337rpx", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgb(205,255,254)" } }, "logo": { "": { "width": "140rpx", "height": "130rpx", "marginTop": "-10rpx" } }, "barcode": { "": { "width": "420rpx", "height": "224rpx", "backgroundColor": "#808080", "marginTop": "-10rpx" } }, "btn": { "": { "position": "absolute", "top": "130rpx", "backgroundColor": "rgb(4,234,231)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#000000", "width": "90rpx", "height": "38rpx", "fontSize": "13rpx", "borderRadius": 0 } }, "rk": { "": { "left": "40rpx" } }, "sb": { "": { "right": "40rpx" } }, "close": { "": { "top": "260rpx", "right": "40rpx" } } };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main = {
    onLoad() {
    },
    data() {
      return {
        fil: [0, 2, 1]
      };
    },
    methods: {
      success1(e) {
        formatAppLog("log", "at pages/index/index.nvue:26", "success1:" + JSON.stringify(e));
      },
      fail1(e) {
        formatAppLog("log", "at pages/index/index.nvue:29", "fail1:" + JSON.stringify(e));
      },
      toStart: function() {
        this.$refs.barcode.start({
          conserve: true,
          filename: "_doc/barcode/"
        });
      },
      tocancel: function() {
        this.$refs.barcode.cancel();
      },
      toFlash: function() {
        this.$refs.barcode.setFlash(true);
      },
      toscan: function() {
        formatAppLog("log", "at pages/index/index.nvue:45", "scan:");
        const barcodeModule = requireNativePlugin("barcodeScan");
        barcodeModule.scan("/static/barcode1.png", (e) => {
          formatAppLog("log", "at pages/index/index.nvue:48", "scan_error:" + JSON.stringify(e));
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue.resolveComponent)("button");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "container" }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "logo",
          src: "/static/logo.png"
        }),
        (0, import_vue.createElementVNode)("barcode", {
          id: "1",
          class: "barcode",
          autostart: "true",
          ref: "barcode",
          background: "rgb(0,0,0)",
          frameColor: "#1C86EE",
          scanbarColor: "#1C86EE",
          filters: $data.fil,
          onMarked: _cache[0] || (_cache[0] = (...args) => $options.success1 && $options.success1(...args)),
          onError: _cache[1] || (_cache[1] = (...args) => $options.fail1 && $options.fail1(...args))
        }, null, 40, ["filters"]),
        (0, import_vue.createVNode)(_component_button, {
          class: "btn sb",
          onClick: $options.toStart
        }, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createTextVNode)("\u5F00\u59CB\u8BC6\u522B")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue.createVNode)(_component_button, {
          class: "btn close",
          onClick: $options.tocancel
        }, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createTextVNode)("\u5173\u95ED")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue.createVNode)(_component_button, {
          class: "btn rk",
          onClick: $options.toFlash
        }, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createTextVNode)("\u5F00\u59CB\u5165\u5E93")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue.createCommentVNode)(' <button class="btn" @click="toscan">\u9884\u89C8</button> ')
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/\u5218\u61FF\u83B9/\u6846\u67B6/vue/vue3/\u667A\u4EAB\u6781\u90AE/pages/index/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
