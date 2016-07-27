
var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
	var keywords = [
		"lock-on-active",
		"date-effective",
		"date-expires",
		"no-loop",
		"auto-focus",
		"activation-group",
		"agenda-group",
		"ruleflow-group",
		"entry-point",
		"duration",
		"dialect",
		"salience",
		"enabled",
		"attributes",
		"rule",
		"extend",
		"when",
		"then",
		"template",
		"query",
		"declare",
		"function",
		"global",
		"eval",
		"not",
		"in",
		"or",
		"and",
		"exists",
		"forall",
		"accumulate",
		"collect",
		"from",
		"action",
		"reverse",
		"result",
		"end",
		"over",
		"init"
	].join(' ');

	var script = [
		"abstract",
		"assert",
		"boolean",
		"break",
		"byte",
		"case",
		"catch",
		"char",
		"class",
		"const",
		"continue",
		"default",
		"do",
		"double",
		"else",
		"enum",
		"extends",
		"false",
		"final",
		"finally",
		"float",
		"for",
		"goto",
		"if",
		"implements",
		"import",
		"instanceof",
		"int",
		"interface",
		"long",
		"native",
		"new",
		"null",
		"package",
		"private",
		"protected",
		"public",
		"return",
		"short",
		"static",
		"strictfp",
		"super",
		"switch",
		"synchronized",
		"this",
		"throw",
		"throws",
		"true",
		"transient",
		"try",
		"void",
		"volatile",
		"while"
	].join(' ');

	this.regexList = [
		{
			regex: regexLib.singleLineCComments,
			css: 'comments'
		},
		{
			regex: /\/\*([^\*][\s\S]*?)?\*\//gm,
			css: 'comments'
		},
		{
			regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,
			css: 'preprocessor'
		},
		{
			regex: regexLib.doubleQuotedString,
			css: 'string'
		},
		{
			regex: regexLib.singleQuotedString,
			css: 'string'
		},
		{
			regex: /\b([\d]+(\.[\d]+)?f?|[\d]+l?|0x[a-f0-9]+)\b/gi,
			css: 'value'
		},
		{
			regex: /(?!\@interface\b)\@[\$\w]+\b/g,
			css: 'color1'
		},
		{
			regex: /\@interface\b/g,
			css: 'color2'
		},
		{
			regex: new RegExp(this.getKeywords(keywords), 'gm'),
			css: 'keyword'
		},
		{
			regex: new RegExp(this.getKeywords(script), 'gm'),
			css: 'script'
		}
	];

	this.forHtmlScript({
		left: /(&lt;|<)%[@!=]?/g,
		right: /%(&gt;|>)/g
	});
}

Brush.prototype = new BrushBase();
Brush.aliases = ['drools', 'drl'];
module.exports = Brush;
