// amd规范
fis.hook('cmd');
// 定义配置
fis.match('**.less', {
	parser: 'less',
	rExt: '.css'
})
fis.match('**.jsx', {
	parser: 'babel2',
	rExt: '.js'
})
// 需要模块化处理
fis.match('js/**.jsx', {
	isMod: true
})
fis.match('**.{js,jsx}', {
	optimizer: 'uglify-js'
})
fis.match('**.{less,css}', {
	optimizer: 'clean-css'
})