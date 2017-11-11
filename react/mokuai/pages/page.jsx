// 引入混合和组件
var Util = require('../mixins/util.jsx');
var Banner = require('../components/banner.jsx');
var Content = require('../components/content.jsx');
// 抽象一个组件Page，来渲染所有页面
var Page = React.createClass({
	// 混合继承方法
	mixins: [Util],
	// 初始化状态
	getInitialState: function () {
		return {
			data: []
		}
	},
	render: function () {
		return (
			<section className="section" style={{display: this.props.show}}>
				<Banner title={this.props.title} intro={this.props.intro}></Banner>
				<Content data={this.state.data}></Content>
			</section>
		)
	},
	// 发送请求
	componentDidMount: function () {
		var me = this;
		// 发送请求
		this.ajax(this.props.url, function (res) {
			me.setState({
				data: res
			})
		})
	}
})
// 保留接口
module.exports = Page;