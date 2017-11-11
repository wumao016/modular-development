// banner组件
module.exports = React.createClass({
	render: function () {
		return (
			<div className="banner">
				<div className="container">
					<h2>{this.props.title}</h2>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
})