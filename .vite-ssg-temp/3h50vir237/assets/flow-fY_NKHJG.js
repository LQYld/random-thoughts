import { _ as __unplugin_components_0 } from "../main.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "@vueuse/core";
import "vite-ssg";
import "vue-router";
import "dayjs";
const _sfc_main = {
  __name: "flow",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "WIP:心流", "date": "2024-01-14T21:49:00.000Z", "lang": "zh", "description": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。", "meta": [{ "property": "og:title", "content": "WIP:心流" }, { "name": "twitter:title", "content": "WIP:心流" }, { "name": "description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }, { "property": "og:description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }, { "name": "twitter:description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }] };
    const head = { "title": "WIP:心流", "meta": [{ "property": "og:title", "content": "WIP:心流" }, { "name": "twitter:title", "content": "WIP:心流" }, { "name": "description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }, { "property": "og:description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }, { "name": "twitter:description", "content": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = __unplugin_components_0;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><p${_scopeId}><a href="https://zh.wikipedia.org/wiki/%E5%BF%83%E6%B5%81%E7%90%86%E8%AB%96" target="_blank"${_scopeId}>“心流”</a>是一个心理学概念，由美国心理学家米哈里·契克森米哈赖提出，指的是人们在专注于某种活动时所表现出的一种心理状态。</p><p${_scopeId}>当人们处于心流状态时，通常会全神贯注地投入到当前的任务中，感觉时间过得很快，并且能够充分发挥自己的技能和能力。在这种状态下，人们往往会感到非常愉悦和满足，同时也会提高工作或学习的效率。</p><p${_scopeId}>心流状态通常出现在一些具有挑战性和创造性的活动中，如艺术创作、体育竞赛、学术研究等。为了进入心流状态，人们需要具备一定的技能和经验，同时也需要保持专注和集中注意力。</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://zh.wikipedia.org/wiki/%E5%BF%83%E6%B5%81%E7%90%86%E8%AB%96",
                    target: "_blank"
                  }, "“心流”"),
                  createTextVNode("是一个心理学概念，由美国心理学家米哈里·契克森米哈赖提出，指的是人们在专注于某种活动时所表现出的一种心理状态。")
                ]),
                createVNode("p", null, "当人们处于心流状态时，通常会全神贯注地投入到当前的任务中，感觉时间过得很快，并且能够充分发挥自己的技能和能力。在这种状态下，人们往往会感到非常愉悦和满足，同时也会提高工作或学习的效率。"),
                createVNode("p", null, "心流状态通常出现在一些具有挑战性和创造性的活动中，如艺术创作、体育竞赛、学术研究等。为了进入心流状态，人们需要具备一定的技能和经验，同时也需要保持专注和集中注意力。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/posts/flow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
