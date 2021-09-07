// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
	title: "CcSir",
	description: "这个杀手不太冷",
	//dest: './dist',
	//port: '80',
	theme: "reco",
	head: [
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
		nav: require("./nav.js"),
		sidebar: require("./sidebar.js"),
		// sidebar: 'auto',//所有页面自动生成侧边栏
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
	plugins: {
		//一键复制代码插件: vuepress-plugin-code-copy
		'vuepress-plugin-code-copy': true,
		// 阅读进度条: vuepress-plugin-reading-progress
		'reading-progress': true,
		// 最后更改时间插件(内置)+moment 格式化为中国地区的样式
		'@vuepress/last-updated': {
			transformer: (timestamp, lang) => {
				return moment(timestamp).format('LLLL')
			}
		},
		// 点击爆炸的彩带效果
		'cursor-effects': {
			size: 3, // size of the particle, default: 2
			shape: ['circle'], // shape of the particle, default: 'star'
			zIndex: 999999999 // z-index property of the canvas, default: 999999999
		},
	}
}
