import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { b7 as resolveComponent, o as openBlock, aw as createBlock, w as withCtx, a as createVNode, b8 as KeepAlive, b9 as resolveDynamicComponent, ba as VMain, bb as VApp } from "./index-e8705b08.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createBlock(VApp, null, {
    default: withCtx(() => [
      createVNode(VMain, null, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              (openBlock(), createBlock(KeepAlive, null, [
                (openBlock(), createBlock(resolveDynamicComponent(Component)))
              ], 1024))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const blank = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  blank as default
};
