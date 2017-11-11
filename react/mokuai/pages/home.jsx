module.exports=React.createClass({
	// 初始化状态数据
	getInitialState: function () {
		return {
			firstList: [
				{
					img: 'img/sass-less.png',
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - <a href="">Less</a> 和 <a href="">Sass</a> 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
				},
				{
					img: 'img/devices.png',
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
				},
				{
					img: 'img/components.png',
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
				}
			],
			secondList: [
				{
					img: 'img/01.png'
				},
				{
					img: 'img/02.jpg'
				},
				{
					img: 'img/03.png'
				},
				{
					img: 'img/04.png'
				}
			]
		}
	},
	// 渲染列表方法
	getUlList: function (data) {
		return data.map(function (obj, index) {
			// 判断如果有h3和p属性，就渲染第一个列表，否则渲染第二个列表
			if (obj.p && obj.h3) {
				var content = {
					__html: obj.p
				}
				return (
					<li key={index}>
						<img src={obj.img} alt=""/>
						<h3>{obj.h3}</h3>
						<p dangerouslySetInnerHTML={content}></p>
					</li>
				)
			} else {
				return (
					<li key={index}>
						<img src={obj.img} alt=""/>
					</li>
				)
			}
			
		})
	},
	render: function () {
		// 渲染输出虚拟dom
		return (
			<section style={{display: this.props.show}} className="home">
				<div className="banner">
					<div className="big-logo">B</div>
					<h1>Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</h1>
					<span className="btn btn-lg">下载 Bootstrap</span>
					<p className="home-info">当前版本： v3.3.7 | 文档更新于：2017-01-23</p>
				</div>
				<div className="first-list">
					<div className="container">
						<h2>为所有开发者、所有应用场景而设计。</h2>
						<p className="info">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
						<div className="line"></div>	
						<ul className="clearfix">{this.getUlList(this.state.firstList)}</ul>
						<div className="line"></div>	
						<p className="description">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
						<div className="btn btn-lg">查看GitHub项目主页</div>
					</div>
				</div>
				<div className="second-list">
					<div className="container">
						<h2>基于 Bootstrap 构建的网站</h2>
						<p className="info">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
						<div className="line"></div>
						<ul className="clearfix">{this.getUlList(this.state.secondList)}</ul>
						<div className="line"></div>
						<p className="description">我们在“优站精选”里展示了许多精美的 Bootstrap 网站。</p>
						<div className="btn btn-lg">逛一逛“优站精选</div>
					</div>
				</div>
			</section>
		)
	}
})
