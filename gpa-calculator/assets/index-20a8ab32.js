import { u as useRules, V as VCard, a as VCardActions, b as VSpacer, c as VDialog, d as dialogConfirm } from "./VDialog-655d7923.js";
import { _ as ref, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createTextVNode, T as Fragment, as as renderList, at as createBlock, au as toDisplayString, ap as unref, ar as block0, d as createBaseVNode } from "./index-8021c353.js";
import { j as VCol, k as VRow, d as VTextField } from "./VTextField-d91261c1.js";
import { V as VBtn } from "./VBtn-50bfd7ea.js";
import "./position-eeb180c1.js";
const _hoisted_1 = { class: "pa-10" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { style: { "opacity": "0.7" } }, [
  /* @__PURE__ */ createTextVNode(" 注：行号支持以下格式"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("        7表示第7行"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("        *表示所有行"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("        7-9表示7到9行"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("        7,9表示7和9行"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("        7,9-11表示7和9到11行 ")
], -1);
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const lines = useRules();
    const dialog = ref({
      show: false,
      /** @type{""|"add"|"delete"} */
      action: "",
      content: ""
    });
    function addLine() {
      dialog.value.content = (lines.list.length + 1).toString();
      dialog.value.action = "add";
      dialog.value.show = true;
    }
    function deleteLine() {
      dialog.value.content = "";
      dialog.value.action = "delete";
      dialog.value.show = true;
    }
    function dialogClick() {
      dialogConfirm(dialog.value, lines);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VRow, null, {
          default: withCtx(() => [
            createVNode(VCol, { cols: 6 }, {
              default: withCtx(() => [
                createVNode(VBtn, {
                  block: true,
                  color: "primary",
                  onClick: addLine
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 新增")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VCol, { cols: 6 }, {
              default: withCtx(() => [
                createVNode(VBtn, {
                  block: true,
                  color: "error",
                  onClick: deleteLine
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 删除")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VRow, { class: "align-center" }, {
          default: withCtx(() => [
            createVNode(VCol, { cols: 3 }, {
              default: withCtx(() => [
                createTextVNode("行号")
              ]),
              _: 1
            }),
            createVNode(VCol, { cols: 6 }, {
              default: withCtx(() => [
                createTextVNode("成绩")
              ]),
              _: 1
            }),
            createVNode(VCol, { cols: 3 }, {
              default: withCtx(() => [
                createTextVNode("绩点")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(lines).list, (item, index) => {
          return openBlock(), createBlock(VRow, { key: index }, {
            default: withCtx(() => [
              createVNode(VCol, { cols: 3 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(index + 1), 1)
                ]),
                _: 2
              }, 1024),
              createVNode(VCol, { cols: 6 }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: 3 }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: item.scoreFrom,
                            "onUpdate:modelValue": ($event) => item.scoreFrom = $event,
                            class: "centered-input",
                            color: "primary",
                            variant: "underlined",
                            density: "compact",
                            style: { "margin-top": "-20px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VCol, {
                        cols: 2,
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("到")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: 3 }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: item.scoreTo,
                            "onUpdate:modelValue": ($event) => item.scoreTo = $event,
                            class: "centered-input",
                            color: "primary",
                            variant: "underlined",
                            density: "compact",
                            style: { "margin-top": "-20px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(VCol, { cols: 3 }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: item.gpa,
                    "onUpdate:modelValue": ($event) => item.gpa = $event,
                    class: "centered-input",
                    color: "primary",
                    variant: "underlined",
                    density: "compact",
                    style: { "margin-top": "-20px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128)),
        createVNode(VDialog, {
          modelValue: dialog.value.show,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value.show = $event),
          width: "500"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VTextField, {
                  modelValue: dialog.value.content,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value.content = $event),
                  color: "primary",
                  label: "行号"
                }, null, 8, ["modelValue"]),
                _hoisted_2,
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "text",
                      onClick: dialogClick
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 确定")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "text",
                      onClick: _cache[1] || (_cache[1] = ($event) => dialog.value.show = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 取消")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
