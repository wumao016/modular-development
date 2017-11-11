// 定义Article组件
module.exports = React.createClass({
	createList: function () {
		return this.props.data.map(function (obj, index) {
			return (
				<li key={index} id={obj.id}>
					<h3>{obj.title}</h3>
					<p>{obj.content}</p>
				</li>
			)
		})
	},
	render: function () {
		return (
			<article className="article">
				<ul>{this.createList()}</ul>
			</article>
		)
	}
})
