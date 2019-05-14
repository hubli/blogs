(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{336:function(t,s,n){"use strict";n.r(s);var a=n(9),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue2-x源码分析-inject-provide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x源码分析-inject-provide","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2.x源码分析 - inject/provide")]),t._v(" "),n("p",[t._v("Vue组件传递数据方式")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("prop")])]),t._v(" "),n("li",[n("code",[t._v("$parent")])]),t._v(" "),n("li",[n("strong",[n("code",[t._v("inject/provide")])]),t._v(" 本质还是通过$parent向上查找祖先节点数据")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// src/core/instance/init.js")]),t._v("\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),n("span",{attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initRender")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'created'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$mount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// inject里的key，通过$parent向上找到provide值，再进行响应式监听")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolveInject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inject"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("defineReactive")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 响应式数据")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolveInject")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inject"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("Object "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keys "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" keys"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" keys"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provideKey "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" inject"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" source "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 循环向上，直到拿到祖先节点中的provide值")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_provided "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("hasOwn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_provided"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" provideKey"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          result"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_provided"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("provideKey"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// provide是在initProvide中设置的")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        source "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent "),n("span",{attrs:{class:"token comment"}},[t._v("// 关键代码")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 单纯把provide值，赋值给vm._provided。initInject中会使用到")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provide "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provide\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provide"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_provided "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" provide "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n      "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" provide"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provide\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="vue-code-7.inject-provide.md";s.default=o.exports}}]);