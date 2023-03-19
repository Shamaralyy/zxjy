import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode, createCommentVNode } from "vue";
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
const _style_0 = { "container": { "": { "display": "flex", "height": "337rpx", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgb(205,255,254)" } }, "logo": { "": { "width": "140rpx", "height": "130rpx", "marginTop": "-10rpx" } }, "barcode": { "": { "width": "420rpx", "height": "224rpx", "backgroundColor": "#808080", "marginTop": "-10rpx" } }, "btn": { "": { "position": "absolute", "top": "130rpx", "backgroundColor": "rgb(4,234,231)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#000000", "width": "90rpx", "height": "38rpx", "fontSize": "13rpx", "borderRadius": 0 } }, "rk": { "": { "left": "40rpx" } }, "sb": { "": { "right": "40rpx" } }, "close": { "": { "top": "260rpx", "right": "40rpx" } } };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
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
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("u-image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      createElementVNode("barcode", {
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
      createVNode(_component_button, {
        class: "btn sb",
        onClick: $options.toStart
      }, {
        default: withCtx(() => [
          createTextVNode("开始识别")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn close",
        onClick: $options.tocancel
      }, {
        default: withCtx(() => [
          createTextVNode("关闭")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn rk",
        onClick: $options.toFlash
      }, {
        default: withCtx(() => [
          createTextVNode("开始入库")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createCommentVNode(' <button class="btn" @click="toscan">预览</button> ')
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/刘懿莹/框架/vue/vue3/智享极邮/pages/index/index.nvue"]]);
export {
  index as default
};
