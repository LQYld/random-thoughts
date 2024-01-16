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
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h1 id="随想" tabindex="-1"${_scopeId}>随想</h1><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Date</th><th${_scopeId}>Topic</th><th${_scopeId}>language</th><th${_scopeId}>Tag</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TalkDate, { date: "2024-01-14 21:49:00" }, null, _parent2, _scopeId));
            _push2(`</td><td${_scopeId}><a href="/posts/flow"${_scopeId}><strong${_scopeId}>WIP:心流</strong></a></td><td${_scopeId}>中文</td><td${_scopeId}>专注, 心理学</td></tr></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h1", {
                  id: "随想",
                  tabindex: "-1"
                }, "随想"),
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Date"),
                      createVNode("th", null, "Topic"),
                      createVNode("th", null, "language"),
                      createVNode("th", null, "Tag")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, [
                        createVNode(_component_TalkDate, { date: "2024-01-14 21:49:00" })
                      ]),
                      createVNode("td", null, [
                        createVNode("a", { href: "/posts/flow" }, [
                          createVNode("strong", null, "WIP:心流")
                        ])
                      ]),
                      createVNode("td", null, "中文"),
                      createVNode("td", null, "专注, 心理学")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/posts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
