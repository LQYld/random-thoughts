import { _ as __unplugin_components_0 } from "../main.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "@vueuse/core";
import "vite-ssg";
import "vue-router";
import "dayjs";
const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "meta": [] };
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = __unplugin_components_0;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h1 id="_404" tabindex="-1"${_scopeId}>404</h1><p${_scopeId}>似乎你并没有找到所需内容，不妨去看看其他内容，也许会对你有所帮助 :)</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h1", {
                  id: "_404",
                  tabindex: "-1"
                }, "404"),
                createVNode("p", null, "似乎你并没有找到所需内容，不妨去看看其他内容，也许会对你有所帮助 :)")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/404.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
