import { _ as __unplugin_components_0 } from "../main.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "@vueuse/core";
import "vite-ssg";
import "vue-router";
import "dayjs";
const _sfc_main = {
  __name: "design-documentation",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "设计文档", "date": "2024-01-15T23:17:00.000Z", "lang": "zh", "description": "设计文档是程序员清晰表达需求和设计思路的重要工具。", "meta": [{ "property": "og:title", "content": "设计文档" }, { "name": "twitter:title", "content": "设计文档" }, { "name": "description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }, { "property": "og:description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }, { "name": "twitter:description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }] };
    const head = { "title": "设计文档", "meta": [{ "property": "og:title", "content": "设计文档" }, { "name": "twitter:title", "content": "设计文档" }, { "name": "description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }, { "property": "og:description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }, { "name": "twitter:description", "content": "设计文档是程序员清晰表达需求和设计思路的重要工具。" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = __unplugin_components_0;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><p${_scopeId}><div class="table-of-contents"${_scopeId}><div class="table-of-contents-anchor"${_scopeId}><div class="i-ri-menu-2-fill dark:text-white"${_scopeId}></div></div><ul${_scopeId}><li${_scopeId}><a href="#概要"${_scopeId}>概要</a></li><li${_scopeId}><a href="#现状与背景"${_scopeId}>现状与背景</a></li><li${_scopeId}><a href="#需求"${_scopeId}>需求</a></li><li${_scopeId}><a href="#变更的目的"${_scopeId}>变更的目的</a></li><li${_scopeId}><a href="#系统构成图"${_scopeId}>系统构成图</a></li><li${_scopeId}><a href="#潜在的解决方案"${_scopeId}>潜在的解决方案</a></li><li${_scopeId}><a href="#建议的解决方案"${_scopeId}>建议的解决方案</a></li><li${_scopeId}><a href="#设计与架构"${_scopeId}>设计与架构</a></li><li${_scopeId}><a href="#ui-ux变更点"${_scopeId}>UI/UX变更点</a></li><li${_scopeId}><a href="#代码变更点"${_scopeId}>代码变更点</a></li><li${_scopeId}><a href="#api变更点"${_scopeId}>API变更点</a></li><li${_scopeId}><a href="#持久层变更点"${_scopeId}>持久层变更点</a></li><li${_scopeId}><a href="#测试计划"${_scopeId}>测试计划</a></li><li${_scopeId}><a href="#发布计划"${_scopeId}>发布计划</a></li><li${_scopeId}><a href="#遗留的问题"${_scopeId}>遗留的问题</a></li><li${_scopeId}><a href="#附录"${_scopeId}>附录</a></li></ul></div></p><blockquote${_scopeId}><p${_scopeId}>设计文档是程序员清晰表达需求和设计思路的重要工具。</p></blockquote><h2 id="概要" tabindex="-1"${_scopeId}>概要</h2><ul${_scopeId}><li${_scopeId}>介绍正在解决的问题，并说明为什么它值得被解决。</li></ul><h2 id="现状与背景" tabindex="-1"${_scopeId}>现状与背景</h2><ul${_scopeId}><li${_scopeId}>描述正在修改的结构并定义专有名词，解释那些名字不显眼的系统是干什么的。</li><li${_scopeId}>谈谈目前解决响应问题的方法。</li><li${_scopeId}>是否正在采用的变通方式。</li><li${_scopeId}>它们的缺点是什么？</li></ul><h2 id="需求" tabindex="-1"${_scopeId}>需求</h2><ul${_scopeId}><li${_scopeId}>面向用户的需求。</li><li${_scopeId}>技术需求。</li><li${_scopeId}>安全与合规性需求。</li><li${_scopeId}>其他。</li></ul><h2 id="变更的目的" tabindex="-1"${_scopeId}>变更的目的</h2><ul${_scopeId}><li${_scopeId}>为什么这个特别的问题值得去解决？</li><li${_scopeId}>描述这项工作将带来的好处，把这些好处与业务需求联系起来（不要过度承诺）。</li></ul><h2 id="系统构成图" tabindex="-1"${_scopeId}>系统构成图</h2><ul${_scopeId}><li${_scopeId}>展示主要组件和它们如何互动的图例，突显出正在发生的变化。</li><li${_scopeId}>引导读者了解这些变化。</li></ul><h2 id="潜在的解决方案" tabindex="-1"${_scopeId}>潜在的解决方案</h2><ul${_scopeId}><li${_scopeId}>暂定的第一个想法，思考其他的想法和它们之间的利弊。</li><li${_scopeId}>描述合理的替代方案，以及你为什么拒绝它们。</li></ul><h2 id="建议的解决方案" tabindex="-1"${_scopeId}>建议的解决方案</h2><ul${_scopeId}><li${_scopeId}>描述你所确定采用的解决方案，要比概要简短的描述更加详细。</li></ul><h2 id="设计与架构" tabindex="-1"${_scopeId}>设计与架构</h2><ul${_scopeId}><li${_scopeId}>利用的关键类库和框架、实施模式、以及任何与公司常见做法不同的地方。</li><li${_scopeId}>应该包括组件的示意图、调用流程和数据流、用户界面、代码、API和模式模拟。</li></ul><h2 id="ui-ux变更点" tabindex="-1"${_scopeId}>UI/UX变更点</h2><ul${_scopeId}><li${_scopeId}>如果你的项目改变了用户界面，请创建原型，用原型的方式来预演用户的动作流。</li><li${_scopeId}>如果你的变更没有可视化的组件，这部分可以讨论开发者对于你正在创建的类库的使用体验，或者描述用户使用你的命令行工具的方式。</li></ul><h2 id="代码变更点" tabindex="-1"${_scopeId}>代码变更点</h2><ul${_scopeId}><li${_scopeId}>描述你的具体实现的过程。</li><li${_scopeId}>要高亮出现有的代码需要变更的内容、方式和时间。</li><li${_scopeId}>当引入任何新的抽象概念时，也需要描述出来。</li></ul><h2 id="api变更点" tabindex="-1"${_scopeId}>API变更点</h2><ul${_scopeId}><li${_scopeId}>记录所有对现有的API的任何新增的API的改变。</li><li${_scopeId}>讨论向前或向后的兼容性与版本问题。</li><li${_scopeId}>记录你的API提案中包含错误处理。</li><li${_scopeId}>当遇到不规则输入、违反约束条件、意外的内部错误或异常时，应该以有用的消息来响应。</li></ul><h2 id="持久层变更点" tabindex="-1"${_scopeId}>持久层变更点</h2><ul${_scopeId}><li${_scopeId}>解释正在引入或已经修改的存储技术。</li><li${_scopeId}>讨论新的数据库、文件和文件系统架构、检索的索引和数据传输管道。</li><li${_scopeId}>包括所有模式的变化并对其向后兼容性进行说明。</li></ul><h2 id="测试计划" tabindex="-1"${_scopeId}>测试计划</h2><ul${_scopeId}><li${_scopeId}>事先不要定义每项计划，而是去解释你计划如何去验证你的变更。</li><li${_scopeId}>讨论测试数据的来源或生成方法，强调需要覆盖的用例。</li><li${_scopeId}>讨论你期望使用的类库和测试策略。</li><li${_scopeId}>解释你讲如何验证安全性的需求是否得到满足。</li></ul><h2 id="发布计划" tabindex="-1"${_scopeId}>发布计划</h2><ul${_scopeId}><li${_scopeId}>描述你进行采用的策略，以避免复杂的部署顺序需求。</li><li${_scopeId}>记录你需要设置特性开关，以控制新版本的展开。</li><li${_scopeId}>你的发布的变更是否生效？以及在发现问题时你将如何回滚。</li></ul><h2 id="遗留的问题" tabindex="-1"${_scopeId}>遗留的问题</h2><ul${_scopeId}><li${_scopeId}>明确地列出设计中尚未回答的紧迫问题。</li><li${_scopeId}>并说明你的“已知的未知”。</li></ul><h2 id="附录" tabindex="-1"${_scopeId}>附录</h2><ul${_scopeId}><li${_scopeId}>加入额外的令人感兴趣的细节。</li><li${_scopeId}>添加相关工作参考</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("p", null, [
                  createVNode("div", { class: "table-of-contents" }, [
                    createVNode("div", { class: "table-of-contents-anchor" }, [
                      createVNode("div", { class: "i-ri-menu-2-fill dark:text-white" })
                    ]),
                    createVNode("ul", null, [
                      createVNode("li", null, [
                        createVNode("a", { href: "#概要" }, "概要")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#现状与背景" }, "现状与背景")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#需求" }, "需求")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#变更的目的" }, "变更的目的")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#系统构成图" }, "系统构成图")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#潜在的解决方案" }, "潜在的解决方案")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#建议的解决方案" }, "建议的解决方案")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#设计与架构" }, "设计与架构")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#ui-ux变更点" }, "UI/UX变更点")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#代码变更点" }, "代码变更点")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#api变更点" }, "API变更点")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#持久层变更点" }, "持久层变更点")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#测试计划" }, "测试计划")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#发布计划" }, "发布计划")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#遗留的问题" }, "遗留的问题")
                      ]),
                      createVNode("li", null, [
                        createVNode("a", { href: "#附录" }, "附录")
                      ])
                    ])
                  ])
                ]),
                createVNode("blockquote", null, [
                  createVNode("p", null, "设计文档是程序员清晰表达需求和设计思路的重要工具。")
                ]),
                createVNode("h2", {
                  id: "概要",
                  tabindex: "-1"
                }, "概要"),
                createVNode("ul", null, [
                  createVNode("li", null, "介绍正在解决的问题，并说明为什么它值得被解决。")
                ]),
                createVNode("h2", {
                  id: "现状与背景",
                  tabindex: "-1"
                }, "现状与背景"),
                createVNode("ul", null, [
                  createVNode("li", null, "描述正在修改的结构并定义专有名词，解释那些名字不显眼的系统是干什么的。"),
                  createVNode("li", null, "谈谈目前解决响应问题的方法。"),
                  createVNode("li", null, "是否正在采用的变通方式。"),
                  createVNode("li", null, "它们的缺点是什么？")
                ]),
                createVNode("h2", {
                  id: "需求",
                  tabindex: "-1"
                }, "需求"),
                createVNode("ul", null, [
                  createVNode("li", null, "面向用户的需求。"),
                  createVNode("li", null, "技术需求。"),
                  createVNode("li", null, "安全与合规性需求。"),
                  createVNode("li", null, "其他。")
                ]),
                createVNode("h2", {
                  id: "变更的目的",
                  tabindex: "-1"
                }, "变更的目的"),
                createVNode("ul", null, [
                  createVNode("li", null, "为什么这个特别的问题值得去解决？"),
                  createVNode("li", null, "描述这项工作将带来的好处，把这些好处与业务需求联系起来（不要过度承诺）。")
                ]),
                createVNode("h2", {
                  id: "系统构成图",
                  tabindex: "-1"
                }, "系统构成图"),
                createVNode("ul", null, [
                  createVNode("li", null, "展示主要组件和它们如何互动的图例，突显出正在发生的变化。"),
                  createVNode("li", null, "引导读者了解这些变化。")
                ]),
                createVNode("h2", {
                  id: "潜在的解决方案",
                  tabindex: "-1"
                }, "潜在的解决方案"),
                createVNode("ul", null, [
                  createVNode("li", null, "暂定的第一个想法，思考其他的想法和它们之间的利弊。"),
                  createVNode("li", null, "描述合理的替代方案，以及你为什么拒绝它们。")
                ]),
                createVNode("h2", {
                  id: "建议的解决方案",
                  tabindex: "-1"
                }, "建议的解决方案"),
                createVNode("ul", null, [
                  createVNode("li", null, "描述你所确定采用的解决方案，要比概要简短的描述更加详细。")
                ]),
                createVNode("h2", {
                  id: "设计与架构",
                  tabindex: "-1"
                }, "设计与架构"),
                createVNode("ul", null, [
                  createVNode("li", null, "利用的关键类库和框架、实施模式、以及任何与公司常见做法不同的地方。"),
                  createVNode("li", null, "应该包括组件的示意图、调用流程和数据流、用户界面、代码、API和模式模拟。")
                ]),
                createVNode("h2", {
                  id: "ui-ux变更点",
                  tabindex: "-1"
                }, "UI/UX变更点"),
                createVNode("ul", null, [
                  createVNode("li", null, "如果你的项目改变了用户界面，请创建原型，用原型的方式来预演用户的动作流。"),
                  createVNode("li", null, "如果你的变更没有可视化的组件，这部分可以讨论开发者对于你正在创建的类库的使用体验，或者描述用户使用你的命令行工具的方式。")
                ]),
                createVNode("h2", {
                  id: "代码变更点",
                  tabindex: "-1"
                }, "代码变更点"),
                createVNode("ul", null, [
                  createVNode("li", null, "描述你的具体实现的过程。"),
                  createVNode("li", null, "要高亮出现有的代码需要变更的内容、方式和时间。"),
                  createVNode("li", null, "当引入任何新的抽象概念时，也需要描述出来。")
                ]),
                createVNode("h2", {
                  id: "api变更点",
                  tabindex: "-1"
                }, "API变更点"),
                createVNode("ul", null, [
                  createVNode("li", null, "记录所有对现有的API的任何新增的API的改变。"),
                  createVNode("li", null, "讨论向前或向后的兼容性与版本问题。"),
                  createVNode("li", null, "记录你的API提案中包含错误处理。"),
                  createVNode("li", null, "当遇到不规则输入、违反约束条件、意外的内部错误或异常时，应该以有用的消息来响应。")
                ]),
                createVNode("h2", {
                  id: "持久层变更点",
                  tabindex: "-1"
                }, "持久层变更点"),
                createVNode("ul", null, [
                  createVNode("li", null, "解释正在引入或已经修改的存储技术。"),
                  createVNode("li", null, "讨论新的数据库、文件和文件系统架构、检索的索引和数据传输管道。"),
                  createVNode("li", null, "包括所有模式的变化并对其向后兼容性进行说明。")
                ]),
                createVNode("h2", {
                  id: "测试计划",
                  tabindex: "-1"
                }, "测试计划"),
                createVNode("ul", null, [
                  createVNode("li", null, "事先不要定义每项计划，而是去解释你计划如何去验证你的变更。"),
                  createVNode("li", null, "讨论测试数据的来源或生成方法，强调需要覆盖的用例。"),
                  createVNode("li", null, "讨论你期望使用的类库和测试策略。"),
                  createVNode("li", null, "解释你讲如何验证安全性的需求是否得到满足。")
                ]),
                createVNode("h2", {
                  id: "发布计划",
                  tabindex: "-1"
                }, "发布计划"),
                createVNode("ul", null, [
                  createVNode("li", null, "描述你进行采用的策略，以避免复杂的部署顺序需求。"),
                  createVNode("li", null, "记录你需要设置特性开关，以控制新版本的展开。"),
                  createVNode("li", null, "你的发布的变更是否生效？以及在发现问题时你将如何回滚。")
                ]),
                createVNode("h2", {
                  id: "遗留的问题",
                  tabindex: "-1"
                }, "遗留的问题"),
                createVNode("ul", null, [
                  createVNode("li", null, "明确地列出设计中尚未回答的紧迫问题。"),
                  createVNode("li", null, "并说明你的“已知的未知”。")
                ]),
                createVNode("h2", {
                  id: "附录",
                  tabindex: "-1"
                }, "附录"),
                createVNode("ul", null, [
                  createVNode("li", null, "加入额外的令人感兴趣的细节。"),
                  createVNode("li", null, "添加相关工作参考")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/notes/design-documentation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
