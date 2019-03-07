(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{360:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git实用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git实用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" git实用命令")]),t._v(" "),a("blockquote",[a("p",[t._v("总结最常用的git命令操作。Mac推荐可视化软件"),a("code",[t._v("Sourcetree")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/43519854-8b1ed5c4-95c3-11e8-931f-2754963333d2.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_1-本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 本地仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{attrs:{class:"token comment"}},[t._v("# 初始化本地git 以下所有操作的前提条件")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A "),a("span",{attrs:{class:"token comment"}},[t._v("# 添加当前所有变动文件到本地缓存区")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'<commit-word>'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 提交缓存区内容到本地仓库")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("feat-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 新建feat-name分支并切换到该分支")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a "),a("span",{attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("feat-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 删除本地feat-name分支")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" status "),a("span",{attrs:{class:"token comment"}},[t._v("# 显示当前分支状态")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{attrs:{class:"token comment"}},[t._v("# 回滚到最近的commit")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list "),a("span",{attrs:{class:"token comment"}},[t._v("# 显示当前的Git配置")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-远程仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 远程仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" remote add origin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("URL"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 关联远程仓库，以下操作的前提条件")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{attrs:{class:"token comment"}},[t._v("# 拉取远程代码到本地")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master "),a("span",{attrs:{class:"token comment"}},[t._v("# 推送本地到远程master分支")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :branch-name "),a("span",{attrs:{class:"token comment"}},[t._v("# 删除远程分支 # 等同于 git push origin --delete [branch-name]")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" merge feat-name "),a("span",{attrs:{class:"token comment"}},[t._v("# feat-name分支内容合并到当前分支，适合不同分支间commit合并操作")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-高级","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 高级")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 变基。记住，rebase操作永远不在公共分支操作；同时rebase与公共分支名永远不同时出现")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3 "),a("span",{attrs:{class:"token comment"}},[t._v("# 交互式合并当前分支最近三次的记录，用于简化提交记录，适合同分支上commit合并，不影响其他分支。")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reabse feat-B "),a("span",{attrs:{class:"token comment"}},[t._v("# 把当前A分支的提交commit，变基到A和B分支共同祖先的commit上，然后加上B分支后续的commit。")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 子模块")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule add https://github.com/djyde/ToProgress "),a("span",{attrs:{class:"token comment"}},[t._v("# 添加子模块")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule status "),a("span",{attrs:{class:"token comment"}},[t._v("# 检查子模块状态")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update ToProgress "),a("span",{attrs:{class:"token comment"}},[t._v("# 更新子模块")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule deinit ToProgress "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" ToPogress "),a("span",{attrs:{class:"token comment"}},[t._v("# 删除子模块")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Tag")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看tag")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -m "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("comment"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 新建tag")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags "),a("span",{attrs:{class:"token comment"}},[t._v("# 推送tag")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用 Git 命令清单"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git远程操作详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/rebase#start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rebase 代替合并"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/submodules#start",target:"_blank",rel:"noopener noreferrer"}},[t._v("子模块"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yrq110.me/post/tool/git-rebase-submodule-and-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase/submodule/flow介绍"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.options.__file="git-command.md";s.default=e.exports}}]);