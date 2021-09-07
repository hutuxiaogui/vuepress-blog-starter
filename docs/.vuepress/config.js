const themeConfig = require('./config/theme/index')
const navConfig = require('./config/nav')
const sidebarConfig = require('./config/sidebar')
const plugConfig = require('./config/plugins/index')

module.exports = {
	title: "CcSir",
	description: "这个杀手不太冷",
	port: '80',
	theme: "reco",
	head: [
		['meta', { 
			name: 'viewport', 
			content: 'width=device-width,initial-scale=1,user-scalable=no' 
		}],
		['meta', {
			name: "baidu_union_verify",
			content: "a0036ccf0b657813fb236f80f376c429"
		}],
		["link", {
			rel: "icon",
			href: "/images/favicon.svg"
		}],
		['meta', {
			name: 'cc',
			content: 'Cc的主页'
		}],
		// 作者
		['meta', {
			name: 'author',
			content: 'Cc的主页'
		}],
	],
	themeConfig: {
		// 博客配置
		type: "blog",
		fullscreen: true,
		logo: "/images/favicon.svg",
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: 'Category' // 默认文案 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: 'Tag' // 默认文案 “标签”
			}
		},
		author: "CcSir",
		authorAvatar: "/images/avatar.svg",
		nav: navConfig,
		sidebar: sidebarConfig,
		//sidebar: 'auto',//所有页面自动生成侧边栏
		subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		mode: "dark", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
		modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
		smooth: "true", // 平滑滚动
		noFoundPageByTencent: false, // 默认 true，false 关闭 404 腾讯公益
	},
	markdown: {
		lineNumbers: true, // 代码显示行号
		anchor: { permalink: false }, // markdown-it-anchor 的选项
		toc: { includeLevel: [1, 2] }, // markdown-it-toc 的选项
	},
	plugins: plugConfig,
}
