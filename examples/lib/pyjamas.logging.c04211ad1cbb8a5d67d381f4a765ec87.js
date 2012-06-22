/* start module: pyjamas.logging */
$pyjs['loaded_modules']['pyjamas.logging'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.logging']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.logging'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.logging'];
	$m['__repr__'] = function() { return '<module: pyjamas.logging>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.logging';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['logging'] = $pyjs['loaded_modules']['pyjamas.logging'];
	try {


		$m['__author__'] = 'Peter Bittner <peter.bittner@gmx.net>';
		$m['AlertHandler'] = $p['___import___']('pyjamas.logging.handlers.AlertHandler', 'pyjamas.logging', null, false);
		$m['AppendHandler'] = $p['___import___']('pyjamas.logging.handlers.AppendHandler', 'pyjamas.logging', null, false);
		$m['ConsoleHandler'] = $p['___import___']('pyjamas.logging.handlers.ConsoleHandler', 'pyjamas.logging', null, false);
		$m['NullHandler'] = $p['___import___']('pyjamas.logging.handlers.NullHandler', 'pyjamas.logging', null, false);
		$m['getLogger'] = $p['___import___']('logging.getLogger', 'pyjamas.logging', null, false);
		$m['Formatter'] = $p['___import___']('logging.Formatter', 'pyjamas.logging', null, false);
		$m['StreamHandler'] = $p['___import___']('logging.StreamHandler', 'pyjamas.logging', null, false);
		$m['DEBUG'] = $p['___import___']('logging.DEBUG', 'pyjamas.logging', null, false);
		$m['BASIC_FORMAT'] = $p['___import___']('logging.BASIC_FORMAT', 'pyjamas.logging', null, false);
		$m['PLAIN_FORMAT'] = '%(message)s';
		$m['getLoggerForHandler'] = function(handler, name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][3][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][4][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][5][1];
			var logger,formatter;
			formatter = $m['Formatter'](fmt);
			handler['setFormatter'](formatter);
			logger = $m['getLogger'](name);
			logger['setLevel'](level);
			logger['addHandler'](handler);
			return logger;
		};
		$m['getLoggerForHandler']['__name__'] = 'getLoggerForHandler';

		$m['getLoggerForHandler']['__bind_type__'] = 0;
		$m['getLoggerForHandler']['__args__'] = [null,null,['handler'],['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$m['getAlertLogger'] = function(name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][4][1];

			return $m['getLoggerForHandler']($m['AlertHandler'](), name, level, fmt);
		};
		$m['getAlertLogger']['__name__'] = 'getAlertLogger';

		$m['getAlertLogger']['__bind_type__'] = 0;
		$m['getAlertLogger']['__args__'] = [null,null,['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$m['getAppendLogger'] = function(name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][4][1];

			return $m['getLoggerForHandler']($m['AppendHandler'](name), name, level, fmt);
		};
		$m['getAppendLogger']['__name__'] = 'getAppendLogger';

		$m['getAppendLogger']['__bind_type__'] = 0;
		$m['getAppendLogger']['__args__'] = [null,null,['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$m['getConsoleLogger'] = function(name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][4][1];

			return $m['getLoggerForHandler']($m['ConsoleHandler'](), name, level, fmt);
		};
		$m['getConsoleLogger']['__name__'] = 'getConsoleLogger';

		$m['getConsoleLogger']['__bind_type__'] = 0;
		$m['getConsoleLogger']['__args__'] = [null,null,['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$m['getNullLogger'] = function(name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][4][1];

			return $m['getLoggerForHandler']($m['NullHandler'](), name, level, fmt);
		};
		$m['getNullLogger']['__name__'] = 'getNullLogger';

		$m['getNullLogger']['__bind_type__'] = 0;
		$m['getNullLogger']['__args__'] = [null,null,['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$m['getPrintLogger'] = function(name, level, fmt) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][4][1];

			return $m['getLoggerForHandler']($m['StreamHandler'](), name, level, fmt);
		};
		$m['getPrintLogger']['__name__'] = 'getPrintLogger';

		$m['getPrintLogger']['__bind_type__'] = 0;
		$m['getPrintLogger']['__args__'] = [null,null,['name', (typeof __name__ == "undefined"?$m['__name__']:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.logging */


/* end module: pyjamas.logging */


/*
PYJS_DEPS: ['pyjamas.logging.handlers.AlertHandler', 'pyjamas', 'pyjamas.logging', 'pyjamas.logging.handlers', 'pyjamas.logging.handlers.AppendHandler', 'pyjamas.logging.handlers.ConsoleHandler', 'pyjamas.logging.handlers.NullHandler', 'logging.getLogger', 'logging', 'logging.Formatter', 'logging.StreamHandler', 'logging.DEBUG', 'logging.BASIC_FORMAT']
*/
