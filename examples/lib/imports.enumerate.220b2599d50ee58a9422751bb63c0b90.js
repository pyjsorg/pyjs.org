/* start module: imports.enumerate */
$pyjs.loaded_modules['imports.enumerate'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enumerate'].__was_initialized__) return $pyjs.loaded_modules['imports.enumerate'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.enumerate"];
	$m.__repr__ = function() { return "<module: imports.enumerate>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enumerate';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports']['enumerate'] = $pyjs.loaded_modules['imports.enumerate'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['list'] = $constant_int_1;
		$m['dict'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var tuple;
			tuple = $p['tuple']([$constant_int_1, $constant_int_2]);
			return tuple;
		};
		$m['dict'].__name__ = 'dict';

		$m['dict'].__bind_type__ = 0;
		$m['dict'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enumerate */


/* end module: imports.enumerate */


