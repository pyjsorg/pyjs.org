/* start module: imports.enum.super */
$pyjs.loaded_modules['imports.enum.super'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enum.super'].__was_initialized__) return $pyjs.loaded_modules['imports.enum.super'];
	if(typeof $pyjs.loaded_modules['imports.enum'] == 'undefined' || !$pyjs.loaded_modules['imports.enum'].__was_initialized__) $p['___import___']('imports.enum', null);
	var $m = $pyjs.loaded_modules["imports.enum.super"];
	$m.__repr__ = function() { return "<module: imports.enum.super>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enum.super';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports.enum']['$$super'] = $pyjs.loaded_modules['imports.enum.super'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['$$var'] = $constant_int_1;
		$m['$$function'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $$export;
			$$export = $constant_int_2;
			return $$export;
		};
		$m['$$function'].__name__ = 'function';

		$m['$$function'].__bind_type__ = 0;
		$m['$$function'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enum.super */


/* end module: imports.enum.super */


