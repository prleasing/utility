module.exports = {
	extends: ['@taknepoidet-config/eslint-config'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.scss', '.sass', '.ts', '.js', '.tsx', '.jsx']
			}
		}
	}
};
