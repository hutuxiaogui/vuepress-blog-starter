module.exports = [
	// 导航栏
	{
		text: '主页',
		link: '/',
		icon: 'reco-home'
	},
	{
		text: 'Java',
		link: '/views/Java/',
		items: [{
				text: 'JavaSE',
				link: '/views/Java/JavaSE/JavaDevelopmentManual1'
			},
			{
				text: 'JavaEE',
				link: '/views/Java/JavaEE/JavaDevelopmentManual2'
			},
		]
	},
	{
		text: '数据库',
		link: '/views/SQL/',
		items: [{
				text: '数据库基础和原理',
				items : [{
						text: '数据库原理',
						link: '/views/SQL/MySQL1/JavaDevelopmentManual1'
					},
					{
						text: 'SQL语言',
						link: '/views/SQL/MySQL2/JavaDevelopmentManual1'
					},
				]
			},
			{
				text: 'SQL 数据库',
				items : [{
						text: 'MySQL',
						link: '/views/SQL/MySQL/MySQL'
					},
					{
						text: 'Oracle',
						link: '/views/SQL/Oracle/Oracle'
					},
					{
						text: 'SQL Server',
						link: '/views/SQL/SQL_Server/SQL_Server'
					},
				]
			},
			{
				text: 'NoSQL 数据库',
				items : [{
						text: 'Redis',
						link: '/views/SQL/Redis/JavaDevelopmentManual1'
					},
					{
						text: 'MongoDB',
						link: '/views/SQL/MongoDB/JavaDevelopmentManual1'
					},
					{
						text: 'ElasticSearch',
						link: '/views/SQL/ElasticSearch/JavaDevelopmentManual1'
					},
				]
			},
		]
	},
	{
		text: '框架',
		link: '/views/Framework/',
		items: [{
				text: 'Spring',
				link: '/views/Framework/JavaDevelopmentManual/JavaDevelopmentManual1'
			},
			{
				text: 'SpringMVC',
				link: '/views/Framework/JavaDevelopmentManual/JavaDevelopmentManual2'
			},
			{
				text: 'SpringBoot',
				link: '/views/Framework/JavaDevelopmentManual/JavaDevelopmentManual3'
			},
			{
				text: 'SpringCloud',
				link: '/views/Framework/JavaDevelopmentManual/JavaDevelopmentManual4'
			},
		]
	},
	{
		text: '中间件',
		link: '/views/Middleware/',
		items: [{
				text: 'Kafka',
				link: '/views/Middleware/JavaDevelopmentManual/JavaDevelopmentManual1'
			},
			{
				text: 'RocketMQ',
				link: '/views/Middleware/JavaDevelopmentManual/JavaDevelopmentManual2'
			},
		]
	},
	{
		text: '数据结构与算法',
		link: '/views/DataStructureAndAlgorithm/',
		items: [{
				text: '数据结构',
				link: '/views/DataStructureAndAlgorithm/JavaDevelopmentManual/JavaDevelopmentManual1'
			},
			{
				text: '算法',
				link: '/views/DataStructureAndAlgorithm/JavaDevelopmentManual/JavaDevelopmentManual2'
			},
		]
	},
	{
		text: '架构',
		link: '/views/Architect/',
		items: [{
				text: '架构基础',
				link: '/views/Architect/JavaDevelopmentManual1'
			},
			{
				text: '方法论',
				link: '/views/Architect/JavaDevelopmentManual2'
			},
			{
				text: '分布式系统',
				link: '/views/Architect/JavaDevelopmentManual3'
			},
			{
				text: '微服务系统与设计',
				link: '/views/Architect/JavaDevelopmentManual4'
			},
			{
				text: '系统设计和架构案例',
				link: '/views/Architect/JavaDevelopmentManual5'
			},
		]
	},
	{
		text: '开发手册',
		link: '/views/DevelopmentManual/',
		items: [{
				text: 'JAVA开发手册',
				link: '/views/DevelopmentManual/JavaDevelopmentManual/JavaDevelopmentManual'
			},
		]
	},
	{
		text: '工具',
		link: '/views/Tool/',
		items: [{
				text: 'Maven',
				link: '/views/Tool/JavaDevelopmentManual1'
			},
			{
				text: 'Gradle',
				link: '/views/Tool/JavaDevelopmentManual2'
			},
			{
				text: 'Eclipse',
				link: '/views/Tool/JavaDevelopmentManual3'
			},
			{
				text: 'IntelliJ IDEA',
				link: '/views/Tool/JavaDevelopmentManual4'
			},
		]
	},
	{
		text: '项目',
		link: '/views/Project/',
		items: [{
				text: 'A项目',
				link: '/views/Project/JavaDevelopmentManual1'
			},
			{
				text: 'B项目',
				link: '/views/Project/JavaDevelopmentManual2'
			},
		]	
	},
	{
		text: '项目管理',
		link: '/views/ProjectManagement/',
		items: [{
				text: 'PMP',
				link: '/views/ProjectManagement/JavaDevelopmentManual1'
			},
			{
				text: 'ACP',
				link: '/views/ProjectManagement/JavaDevelopmentManual2'
			},
		]
	},
	{
		text: '关于',
		icon: 'reco-message',
		items: [{
				text: '关于我',
				link: '/views/About/author',
				icon: 'reco-account'
			},
			{
				text: '简历',
				link: '/views/About/resume',
				icon: 'reco-document'
			},
			{
				text: 'CSDN',
				link: 'https://blog.csdn.net/hutuxiaogui',
				icon: 'reco-csdn',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/hutuxiaogui',
				icon: 'reco-github',
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/hutuxiaogui',
				icon: 'reco-mayun',
			},
		]
	}
]
