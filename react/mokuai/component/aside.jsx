// 定义aside组件
module.exports = React.createClass({
	// 定义渲染列表的方法
	createList: function () {
		return this.props.data.map(function (obj, index) {
			return (
				<li key={index}>
					<a href={'#' + obj.id}>{obj.title}</a>
				</li>
			)
		})
	},
	render: function () {
		return (
			<aside className="aside">
				<ul>{this.createList()}</ul>
			</aside>
		)
	}
})