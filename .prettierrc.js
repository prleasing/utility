module.exports = {
	plugins: ['prettier-plugin-jsdoc'],
	jsdocSpaces: 1,
	jsdocKeepUnParseAbleExampleIndent: false,
	jsdocSingleLineComment: false,
	jsdocSeparateTagGroups: true,
	jsdocCapitalizeDescription: false,
	...require('@taknepoidet-config/prettier')
};
