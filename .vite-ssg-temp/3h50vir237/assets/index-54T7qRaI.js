import { _ as _sfc_main$1 } from "./TalkDate-grMaOXwL.js";
import { _ as __unplugin_components_0 } from "../main.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "@vueuse/core";
import "vite-ssg";
import "vue-router";
import "dayjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "meta": [] };
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = __unplugin_components_0;
      const _component_TalkDate = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h1 id="小记" tabindex="-1"${_scopeId}>小记</h1><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>时间</th><th${_scopeId}>主题</th><th${_scopeId}>语言</th><th${_scopeId}>标签</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TalkDate, { date: "2024-01-15 23:17:00" }, null, _parent2, _scopeId));
            _push2(`</td><td${_scopeId}><a href="/notes/design-documentation"${_scopeId}><strong${_scopeId}>设计文档</strong></a></td><td${_scopeId}>中文</td><td${_scopeId}>软件工程, 需求设计</td></tr></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h1", {
                  id: "小记",
                  tabindex: "-1"
                }, "小记"),
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "时间"),
                      createVNode("th", null, "主题"),
                      createVNode("th", null, "语言"),
                      createVNode("th", null, "标签")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode(_component_TalkDate, { date: "2024-01-15 23:17:00" })
                      ]),
                      createVNode("td", null, [
                        createVNode("a", { href: "/notes/design-documentation" }, [
                          createVNode("strong", null, "设计文档")
                        ])
                      ]),
                      createVNode("td", null, "中文"),
                      createVNode("td", null, "软件工程, 需求设计")
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
