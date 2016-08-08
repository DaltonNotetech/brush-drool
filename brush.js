
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

	var constants = [
		"AbstractMethodError",
		"AssertionError",
		"ClassCircularityError",
		"ClassFormatError",
		"Deprecated",
		"EnumConstantNotPresentException",
		"ExceptionInInitializerError",
		"IllegalAccessError",
		"IllegalThreadStateException",
		"InstantiationError",
		"InternalError",
		"NegativeArraySizeException",
		"NoSuchFieldError",
		"Override",
		"Process",
		"ProcessBuilder",
		"SecurityManager",
		"StringIndexOutOfBoundsException",
		"SuppressWarnings",
		"TypeNotPresentException",
		"UnknownError",
		"UnsatisfiedLinkError",
		"UnsupportedClassVersionError",
		"VerifyError",
		"InstantiationException",
		"IndexOutOfBoundsException",
		"ArrayIndexOutOfBoundsException",
		"CloneNotSupportedException",
		"NoSuchFieldException",
		"IllegalArgumentException",
		"NumberFormatException",
		"SecurityException",
		"Void",
		"InheritableThreadLocal",
		"IllegalStateException",
		"InterruptedException",
		"NoSuchMethodException",
		"IllegalAccessException",
		"UnsupportedOperationException",
		"Enum",
		"StrictMath",
		"Package",
		"Compiler",
		"Readable",
		"Runtime",
		"StringBuilder",
		"Math",
		"IncompatibleClassChangeError",
		"NoSuchMethodError",
		"ThreadLocal",
		"RuntimePermission",
		"ArithmeticException",
		"NullPointerException",
		"Long",
		"Integer",
		"Short",
		"Byte",
		"Double",
		"Number",
		"Float",
		"Character",
		"Boolean",
		"StackTraceElement",
		"Appendable",
		"StringBuffer",
		"Iterable",
		"ThreadGroup",
		"Runnable",
		"Thread",
		"IllegalMonitorStateException",
		"StackOverflowError",
		"OutOfMemoryError",
		"VirtualMachineError",
		"ArrayStoreException",
		"ClassCastException",
		"LinkageError",
		"NoClassDefFoundError",
		"ClassNotFoundException",
		"RuntimeException",
		"Exception",
		"ThreadDeath",
		"Error",
		"Throwable",
		"System",
		"ClassLoader",
		"Cloneable",
		"Class",
		"CharSequence",
		"Comparable",
		"String",
		"Object"
	].join(' ');

	var functions = [
		"retract",
		"update",
		"modify",
		"insert"
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
		},
		{
			regex: new RegExp(this.getKeywords(functions), 'gm'),
			css: 'functions'
		},
		{
			regex: new RegExp(this.getKeywords(constants), 'gm'),
			css: 'constants'
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
