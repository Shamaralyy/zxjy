"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref();
    function store() {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        }
      });
    }
    function identify() {
      common_vendor.index.scanCode({
        scanType: ["barCode"],
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(store),
        b: common_vendor.o(identify)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/刘懿莹/框架/vue/vue3/智享极邮/pages/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
