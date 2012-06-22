/* start module: examplejs */
$pyjs['loaded_modules']['examplejs'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['examplejs']['__was_initialized__']) return $pyjs['loaded_modules']['examplejs'];
	var $m = $pyjs['loaded_modules']['examplejs'];
	$m['__repr__'] = function() { return '<module: examplejs>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'examplejs';
	$m['__name__'] = __mod_name__;
	try {


		$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
		$m['log'] = $m['logging']['getAppendLogger']((typeof __name__ == "undefined"?$m['__name__']:__name__), $p['getattr']($m['logging'], 'DEBUG'), $p['getattr']($m['logging'], 'PLAIN_FORMAT'));
		;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['log']['debug'](examplevar);
			examplevar = 'Altered';
			$m['log']['debug'](get_examplevar());
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$m['main']();
		examplevar = 'Realtered';
		$m['log']['debug'](get_examplevar());
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end examplejs */


/* end module: examplejs */


/*
PYJS_DEPS: ['pyjamas.logging', 'pyjamas']
*/
/*
PYJS_JS: [('example.js', 'default', 'middle')]
*/
