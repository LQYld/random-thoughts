import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { f as formatDate } from "../main.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TalkDate",
  __ssrInlineRender: true,
  props: {
    date: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<time${ssrRenderAttrs(mergeProps({
        date: _ctx.date,
        title: _ctx.date
      }, _attrs))}>${ssrInterpolate(unref(formatDate)(props.date))}</time>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TalkDate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
