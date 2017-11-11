// 引入组件
var Nav = require('./components/nav.jsx');
var Home = require('./pages/home.jsx');
var Page = require('./pages/page.jsx');

// 定义应用程序组件
var App = React.createClass({
	// 定义属性值的类型，以及哪些属性值是必须的
	propTypes: {
		pageName: React.PropTypes.string.isRequired
	},
	// 定义默认状态
	getInitialState: function () {
		// 定义哪个页面需要显示
		var page = {
			home: 'none',
			start: 'none',
			css: 'none',
			component: 'none',
			javascript: 'none',
			marker: 'none'
		}
		page[this.props.pageName] = 'block'
		// 初始化状态
		return {
			page: page
		}
	},
	// 切换导航的回调函数
	changeNav: function (val) {
		// 根据子组件传递val切换页面
		var page = this.state.page;
		// 所有页面设置成none，val页面设置成block
		for (var i in page) {
			page[i] = 'none';
		}
		// 排他法
		page[val] = 'block';
		// 更新状态
		this.setState({
			page: page
		})
	},
	// 获取显示页面的名称
	getShowPageName: function () {
		// 通过状态寻找
		var result = '';
		for (var i in this.state.page) {
			// 值是block
			if (this.state.page[i] === 'block') {
				// 保存页面的名称
				result = i;
			}
		}
		// 将结果返回
		return result;
	},
	render: function () {
		// 缓存page
		var page = this.state.page;
		// 哪个页面显示，就要将页面名称传递给nav
		return (
			<div>
				{/*引入导航组件*/}
				{/*<Nav page={this.getShowPageName()} changeNav={this.changeNav}></Nav>*/}
				<Nav page={this.props.pageName} changeNav={this.changeNav}></Nav>
				<Home show={page.home}></Home>
				<Page show={page.start} title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。" url="data/start.json"></Page>
				<Page show={page.css} title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" url="data/css.json"></Page>
				<Page show={page.component} title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="data/component.json"></Page>
				<Page show={page.javascript} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="data/js.json"></Page>
				<Page show={page.marker} title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="data/download.json"></Page>
				{/*this.createPage()*/}
			</div>
		)
	}
})
// 暴漏接口
module.exports = App;
