import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createTextVNode, d as createBaseVNode } from "./index-e8705b08.js";
import { V as VBtn } from "./VBtn-4f6b1375.js";
import "./position-c77b8d2a.js";
const _sfc_main = {};
const _hoisted_1 = {
  class: "h-screen",
  layout: "column center-center"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "text-h1 font-weight-bold" }, "404", -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(VBtn, {
      color: "primary",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
    }, {
      default: withCtx(() => [
        createTextVNode(" 返回")
      ]),
      _: 1
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
