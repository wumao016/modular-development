// 定义导航组件
module.exports = React.createClass({
	// 定义初始化状态
	getInitialState: function () {
		// 哪个导航选中，由显示的页面决定
		var cls = {};
		cls[this.props.page] = 'choose'
		return {
			cls: cls
		}
	},
	// 点击导航回调函数
	childChangeNav: function (val) {
		// 更新自己的状态
		var cls = {};
		cls[val] = 'choose';
		// 更新状态
		this.setState({
			cls: cls
		})
		// 执行父组件的回调函数
		this.props.changeNav(val)
	},
	render: function () {
		// 点击导航，切换显示的页面的
		return (
			<div className="header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" onClick={this.childChangeNav.bind(this, 'home')}>Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a>主题/模板</a>
						</li>
						<li>
							<a>Bootstrap中文网</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills">
						<li>
							<a className={this.state.cls.start} data-id="start" onClick={this.childChangeNav.bind(this, 'start')}>起步</a>
						</li>
						<li>
							<a className={this.state.cls.css} onClick={this.childChangeNav.bind(this, 'css')}>全局 CSS 样式</a>
						</li>
						<li>
							<a className={this.state.cls.component} onClick={this.childChangeNav.bind(this, 'component')}>组件</a>
						</li>
						<li>
							<a className={this.state.cls.javascript}  onClick={this.childChangeNav.bind(this, 'javascript')}>JavaScript 插件</a>
						</li>
						<li>
							<a className={this.state.cls.marker} onClick={this.childChangeNav.bind(this, 'marker')}>定制</a>
						</li>
						<li>
							<a>网站实例</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})
