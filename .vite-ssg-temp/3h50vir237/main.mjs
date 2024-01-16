import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { useEventListener, useWindowScroll, useDark } from "@vueuse/core";
import { ViteSSG } from "vite-ssg";
import { useRoute } from "vue-router";
import dayjs from "dayjs";
import { useHead } from "@unhead/vue";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ToggleTheme",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "select-none",
        title: "Toggle Color Scheme"
      }, _attrs))}><div i-ri-sun-line dark:i-ri-moon-line dark:text-white></div></a>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ToggleTheme.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "/quill.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ToggleTheme = _sfc_main$5;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header z-40" }, _attrs))} data-v-ed716b1a>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    class: "h-12 absolute xl:fixed m-5 select-none outline-none flex items-center cursor-pointer",
    to: "/",
    focusable: "false"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img w-10 dark:bg-white p-2 mr-3 rounded-2${ssrRenderAttr("src", _imports_0)} data-v-ed716b1a${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            "w-10": "",
            "dark:bg-white": "",
            "p-2": "",
            "mr-3": "",
            "rounded-2": "",
            src: _imports_0
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="nav" data-v-ed716b1a><div class="spacer" data-v-ed716b1a></div><div class="right" print:op0 data-v-ed716b1a>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/posts",
    title: "随想"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="lt-md:hidden cursor-pointer" data-v-ed716b1a${_scopeId}>随想</span><div i-ri-article-line md:hidden cursor-pointer data-v-ed716b1a${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", { class: "lt-md:hidden cursor-pointer" }, "随想"),
          createVNode("div", {
            "i-ri-article-line": "",
            "md:hidden": "",
            "cursor-pointer": ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/notes",
    title: "小记"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="lt-md:hidden cursor-pointer" data-v-ed716b1a${_scopeId}>小记</span><div i-ri-article-line md:hidden cursor-pointer data-v-ed716b1a${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", { class: "lt-md:hidden cursor-pointer" }, "小记"),
          createVNode("div", {
            "i-ri-article-line": "",
            "md:hidden": "",
            "cursor-pointer": ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ToggleTheme, null, null, _parent));
  _push(`</div></nav></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ed716b1a"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const navigate = () => {
        if (location.hash) {
          const el = document.querySelector(decodeURIComponent(location.hash));
          if (el) {
            const rect = el.getBoundingClientRect();
            const y = window.scrollY + rect.top - 40;
            window.scrollTo({
              top: y,
              behavior: "smooth"
            });
            return true;
          }
        }
      };
      useEventListener(window, "hashchange", navigate);
    });
    const { y: scroll } = useWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<div><div i-ri-menu-2-fill hidden></div><main class="px-7 py-10 of-x-hidden">`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main><button title="Scroll to top" fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full hover-bg-hex-8883 transition duration-300 z-100 print:hidden class="${ssrRenderClass(unref(scroll) > 300 ? "op30" : "op0! pointer-events-none")}"><div i-ri-arrow-up-line dark:text-white></div></button></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 mb-6 prose m-auto flex" }, _attrs))}><span class="text-sm op50"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="${ssrRenderStyle({ "color": "inherit" })}">CC BY-NC-SA 4.0</a> 2024-PRESENT © Qingyun119 (qìng yǔn)</span><div class="flex-auto"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
useDark();
function formatDate(d, onlyDate = true) {
  const date = dayjs(d);
  if (onlyDate || date.year() === dayjs().year())
    return date.format("MM月 D日 HH点mm分");
  return date.format("YYYY年 MM月 D日 HH点mm分");
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WrapperPost",
  __ssrInlineRender: true,
  props: {
    frontmatter: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose m-auto mb-8" }, _attrs))} data-v-ba50ccc5><h1 class="mb-0 slide-enter-50" data-v-ba50ccc5>${ssrInterpolate(__props.frontmatter.display ?? __props.frontmatter.title)}</h1>`);
      if (__props.frontmatter.date) {
        _push(`<p class="opacity-50 !-mt-6 slide-enter-50" data-v-ba50ccc5>${ssrInterpolate(unref(formatDate)(__props.frontmatter.date, false))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<article data-v-ba50ccc5>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
      if (unref(route).path !== "/") {
        _push(`<div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden" data-v-ba50ccc5><span font-mono op50 data-v-ba50ccc5>&gt; </span>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: ((_a = unref(route)) == null ? void 0 : _a.path.split("/").slice(0, -1).join("/")) || "/",
          class: "font-mono op50 hover:op75"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WrapperPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ba50ccc5"]]);
const _sfc_main = {
  __name: "index",
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
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h1${_scopeId}>序言</h1><p${_scopeId}>在我们的生活中，思考是无处不在的。无论是琐碎的日常决策还是人生的重大选择，我们都需要思考。然而，我们的思考方式和质量往往决定了我们的生活质量和成就。因此，随想和慎思的能力就显得尤为重要。</p><p${_scopeId}>随想是一种自由、开放的思考方式，它让我们的思维能够随意驰骋，探索各种可能性。它是创造力和灵感的源泉，能够帮助我们发现新的想法和观点。通过随想，我们能够突破常规，开拓思维的边界。</p><p${_scopeId}>慎思则是一种深入、理性的思考方式。它需要我们审慎地分析和评估信息，权衡利弊，做出明智的决策。慎思能够帮助我们避免冲动和盲目，使我们的思考更加全面和深入。</p><p${_scopeId}>通过随想，我们可以激发自己的创造力和想象力，发现新的机会和可能性。而通过慎思，我们可以做出更加明智和理性的决策，避免错误和遗憾。 在这篇文章中，我将探讨随想和慎思的重要性，并提供一些方法和技巧来培养和运用这两种思考方式。我希望通过这篇文章，能够激发你对思考的热情，帮助你更好地应对生活中的各种挑战和机遇。</p><p class="text-right"${_scopeId}>Qingyun119 (qìng yǔn)</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h1", null, "序言"),
                createVNode("p", null, "在我们的生活中，思考是无处不在的。无论是琐碎的日常决策还是人生的重大选择，我们都需要思考。然而，我们的思考方式和质量往往决定了我们的生活质量和成就。因此，随想和慎思的能力就显得尤为重要。"),
                createVNode("p", null, "随想是一种自由、开放的思考方式，它让我们的思维能够随意驰骋，探索各种可能性。它是创造力和灵感的源泉，能够帮助我们发现新的想法和观点。通过随想，我们能够突破常规，开拓思维的边界。"),
                createVNode("p", null, "慎思则是一种深入、理性的思考方式。它需要我们审慎地分析和评估信息，权衡利弊，做出明智的决策。慎思能够帮助我们避免冲动和盲目，使我们的思考更加全面和深入。"),
                createVNode("p", null, "通过随想，我们可以激发自己的创造力和想象力，发现新的机会和可能性。而通过慎思，我们可以做出更加明智和理性的决策，避免错误和遗憾。 在这篇文章中，我将探讨随想和慎思的重要性，并提供一些方法和技巧来培养和运用这两种思考方式。我希望通过这篇文章，能够激发你对思考的热情，帮助你更好地应对生活中的各种挑战和机遇。"),
                createVNode("p", { class: "text-right" }, "Qingyun119 (qìng yǔn)")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_0__ = () => import("./assets/index-YenFCH_p.js");
const __pages_import_1__ = () => import("./assets/flow-fY_NKHJG.js");
const __pages_import_2__ = () => import("./assets/index-54T7qRaI.js");
const __pages_import_3__ = () => import("./assets/design-documentation-NRPiuODn.js");
const __pages_import_5__ = () => import("./assets/404-jA63DgLF.js");
const routes$1 = [{ "name": "posts", "path": "/posts", "component": __pages_import_0__, "props": true, "meta": { "frontmatter": {} } }, { "name": "posts-flow", "path": "/posts/flow", "component": __pages_import_1__, "props": true, "meta": { "frontmatter": { "title": "WIP:心流", "date": "2024-01-14T21:49:00.000Z", "lang": "zh", "description": "心流是一种非常有益的心理状态，可以帮助人们提高工作和学习效率，增强自我效能感和满足感。" } } }, { "name": "notes", "path": "/notes", "component": __pages_import_2__, "props": true, "meta": { "frontmatter": {} } }, { "name": "notes-design-documentation", "path": "/notes/design-documentation", "component": __pages_import_3__, "props": true, "meta": { "frontmatter": { "title": "设计文档", "date": "2024-01-15T23:17:00.000Z", "lang": "zh", "description": "设计文档是程序员清晰表达需求和设计思路的重要工具。" } } }, { "name": "index", "path": "/", "component": _sfc_main, "props": true, "meta": { "frontmatter": {} } }, { "name": "404", "path": "/404", "component": __pages_import_5__, "props": true, "meta": { "frontmatter": {} } }];
const routes = routes$1.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`
  };
});
const createApp = ViteSSG(
  _sfc_main$3,
  {
    routes
  },
  ({ router }) => {
    router.beforeEach((to, form, next) => {
      if (to.path === "/") {
        next();
      } else {
        if (router.hasRoute(to.path)) {
          next();
        } else {
          next({ path: "/404" });
        }
      }
    });
  }
);
export {
  __unplugin_components_0 as _,
  createApp,
  formatDate as f
};
