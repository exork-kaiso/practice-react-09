module.exports = {
	mode: 'production',
	entry: './sample-02/src/index.js',
	output: {
		path: __dirname + '/sample-02/dist',
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				// 拡張子 .js の場合
				test: /\.js$/,
				use: [
					{
						// Babel を利用する
						loader: 'babel-loader',
						// Babel のオプションを指定する
						options: {
							presets: [
								// プリセットを指定することで、新しいESをES5に変換
								'@babel/preset-env',
								// React の JSX を解釈
								'@babel/react',
							],
						},
					},
				],
			},
		],
	},
	// ES5(IE11等)向けの指定
	target: ['web', 'es5'],
};
