import { ay as createSimpleFunctional, e as defineStore, az as distExports, k as genericComponent, m as makeComponentProps, s as provideDefaults, v as useRender, a as createVNode, p as propsFactory, I as IconValue, h as makeDensityProps, a5 as VAvatar, a2 as VDefaultsProvider, N as makeBorderProps, af as makeDimensionProps, O as makeElevationProps, P as makeRoundedProps, Q as makeRouterProps, J as makeTagProps, j as makeThemeProps, K as makeVariantProps, R as Ripple, L as provideTheme, W as useBorder, X as useVariant, E as useDensity, ah as useDimension, Y as useElevation, Z as useRounded, $ as useLink, n as computed, A as withDirectives, B as resolveDirective, aA as VImg, a0 as genOverlays, u as useProxiedModel, a7 as useScopeId, y as ref, aB as IN_BROWSER, a8 as watch, H as nextTick, C as mergeProps, aC as focusableChildren } from "./index-e8705b08.js";
import { h as makeLoaderProps, c as makeLocationProps, d as makePositionProps, g as useLoader, e as useLocation, f as usePosition, L as LoaderSlot } from "./position-c77b8d2a.js";
import { m as makeVOverlayProps, a as VDialogTransition, c as VOverlay, f as forwardRefs } from "./VTextField-6542153f.js";
const VSpacer = createSimpleFunctional("flex-grow-1", "div", "VSpacer");
const useRules = defineStore("rules", {
  state: () => {
    return {
      list: [
        { scoreFrom: 0, scoreTo: 59, gpa: 0 },
        { scoreFrom: 60, scoreTo: 63, gpa: 1 },
        { scoreFrom: 64, scoreTo: 66, gpa: 1.3 },
        { scoreFrom: 67, scoreTo: 69, gpa: 1.7 },
        { scoreFrom: 70, scoreTo: 73, gpa: 2 },
        { scoreFrom: 74, scoreTo: 76, gpa: 2.3 },
        { scoreFrom: 77, scoreTo: 79, gpa: 2.7 },
        { scoreFrom: 80, scoreTo: 83, gpa: 3 },
        { scoreFrom: 84, scoreTo: 86, gpa: 3.3 },
        { scoreFrom: 87, scoreTo: 89, gpa: 3.7 },
        { scoreFrom: 90, scoreTo: 100, gpa: 4 }
      ]
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "rules",
        storage: localStorage
      }
    ]
  }
});
const useMessage = defineStore("message", {
  state: () => {
    return {
      message: distExports.useToast()
    };
  },
  getters: {},
  actions: {
    info(msg) {
      this.message.open({
        message: msg,
        type: "info",
        position: "top",
        duration: 3e3
      });
    },
    success(msg) {
      this.message.open({
        message: msg,
        type: "success",
        position: "top",
        duration: 3e3
      });
    },
    warning(msg) {
      this.message.open({
        message: msg,
        type: "warning",
        position: "top",
        duration: 3e3
      });
    },
    error(msg) {
      this.message.open({
        message: msg,
        type: "error",
        position: "top",
        duration: 3e3
      });
    }
  }
});
const message = useMessage();
function dialogConfirm(dialog, lines) {
  try {
    let linesArr = [];
    if (dialog.content.includes(",")) {
      linesArr = dialog.content.split(",");
    } else {
      if (dialog.content !== "") {
        linesArr = [dialog.content];
      }
    }
    if (linesArr.includes("*")) {
      if (dialog.action === "delete") {
        lines.list = [];
        message.success("删除成功");
        return;
      } else {
        message.error("不能添加*行");
        return;
      }
    }
    const linesArr2 = [];
    for (const line of linesArr) {
      if (line.includes("-")) {
        const lineArr = line.split("-");
        for (let i = parseInt(lineArr[0]); i <= parseInt(lineArr[1]); i++) {
          linesArr2.push(i);
        }
      } else {
        linesArr2.push(parseInt(line));
      }
    }
    if (linesArr2.length === 0) {
      message.error("行号不能为空");
      return;
    }
    if (linesArr2.includes(NaN)) {
      message.error("行号不能包含非数字");
      return;
    }
    linesArr2.sort((a, b) => parseInt(a) - parseInt(b));
    if (dialog.action === "delete") {
      const newList = [];
      for (let i = 0; i < lines.list.length; i++) {
        if (!linesArr2.includes(i + 1)) {
          newList.push(lines.list[i]);
        }
      }
      lines.list = newList;
      message.success("删除成功");
    } else {
      for (let i = 0; i < linesArr2.length; i++) {
        if (linesArr2[i] > lines.list.length) {
          if (linesArr2[i] !== lines.list.length + i + 1) {
            message.error("行号不连续");
            return;
          }
        }
      }
      const newList = [];
      for (let i = 0; i < lines.list.length + linesArr2.length; i++) {
        if (linesArr2.includes(i + 1)) {
          newList.push({});
        }
        if (lines.list[i]) {
          newList.push(lines.list[i]);
        }
      }
      lines.list = newList;
      message.success("添加成功");
    }
  } finally {
    dialog.show = false;
  }
}
const VCard$1 = "";
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => createVNode("div", {
      "class": ["v-card-actions", props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: String,
  title: String,
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => [slots.title?.() ?? props.title]
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => [slots.subtitle?.() ?? props.subtitle]
      }), slots.default?.()]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: String,
  text: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-card__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(LoaderSlot, {
          "name": "v-card",
          "active": !!props.loading,
          "color": typeof props.loading === "boolean" ? void 0 : props.loading
        }, {
          default: slots.loader
        }), hasCardItem && createVNode(VCardItem, {
          "key": "item",
          "prependAvatar": props.prependAvatar,
          "prependIcon": props.prependIcon,
          "title": props.title,
          "subtitle": props.subtitle,
          "appendAvatar": props.appendAvatar,
          "appendIcon": props.appendIcon
        }, {
          default: slots.item,
          prepend: slots.prepend,
          title: slots.title,
          subtitle: slots.subtitle,
          append: slots.append
        }), hasText && createVNode(VCardText, {
          "key": "text"
        }, {
          default: () => [slots.text?.() ?? props.text]
        }), slots.default?.(), slots.actions && createVNode(VCardActions, null, {
          default: slots.actions
        }), genOverlays(isClickable.value, "v-card")]
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const VDialog$1 = "";
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onFocusin(e) {
      const before = e.relatedTarget;
      const after = e.target;
      if (before !== after && overlay.value?.contentEl && // We're the topmost dialog
      overlay.value?.globalTop && // It isn't the document or the dialog body
      ![document, overlay.value.contentEl].includes(after) && // It isn't inside the dialog body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        if (!focusable.length)
          return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        if (before === firstElement) {
          lastElement.focus();
        } else {
          firstElement.focus();
        }
      }
    }
    if (IN_BROWSER) {
      watch(() => isActive.value && props.retainFocus, (val) => {
        val ? document.addEventListener("focusin", onFocusin) : document.removeEventListener("focusin", onFocusin);
      }, {
        immediate: true
      });
    }
    watch(isActive, async (val) => {
      await nextTick();
      if (val) {
        overlay.value.contentEl?.focus({
          preventScroll: true
        });
      } else {
        overlay.value.activatorEl?.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
export {
  VCard as V,
  VCardActions as a,
  VSpacer as b,
  VDialog as c,
  dialogConfirm as d,
  useRules as u
};
