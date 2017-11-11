// article和aside组件
var Article = require('./article.jsx');
var Aside = require('./aside.jsx')
// 定义content组件
module.exports = React.createClass({
	// 初始化属性数据
	getDefaultProps: function () {
		return {
			data: []
		}
	},
	render: function () {
		return (
			<div className="container">
				<Article data={this.props.data}></Article>
				<Aside data={this.props.data}></Aside>
			</div>
		)
	}
})