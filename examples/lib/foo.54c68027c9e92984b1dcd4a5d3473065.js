/* start module: foo */
$pyjs['loaded_modules']['foo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['foo']['__was_initialized__']) return $pyjs['loaded_modules']['foo'];
	var $m = $pyjs['loaded_modules']['foo'];
	$m['__repr__'] = function() { return '<module: foo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'foo';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		$m['Bar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'foo';
			$cls_definition['__md5__'] = 'ee6e3a8e104a0e541553612a84370dcc';
			$cls_definition['X'] = $constant_int_1;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Bar', $p['tuple']($bases), $data);
		})();
		$m['bar'] = $m['Bar']();
		$m['foo_value'] = $constant_int_1;
		$m['get_foo_value'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['foo_value'];
		};
		$m['get_foo_value']['__name__'] = 'get_foo_value';

		$m['get_foo_value']['__bind_type__'] = 0;
		$m['get_foo_value']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end foo */


/* end module: foo */


