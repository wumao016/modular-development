// 定义一个工具方法对象
var Util = {
	// 封装获取数据的方法
	ajax: function (url, fn) {
		// 实现异步请求方法
		var xhr = new XMLHttpRequest();
		// 监听change事件
		xhr.onreadystatechange = function () {
			// 监听状态
			if (xhr.readyState === 4) {
				// 监听状态码
				if (xhr.status === 200) {
					// 返回成功，执行回调函数
					fn && fn(JSON.parse(xhr.responseText));
				}
			}
		}
		// 打开请求
		xhr.open('GET', url, true);
		// 发送请求
		xhr.send(null);
	}
}
// 暴漏接口
module.exports = Util;