/* start module: JSOTest */
$pyjs.loaded_modules['JSOTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['JSOTest'].__was_initialized__) return $pyjs.loaded_modules['JSOTest'];
	var $m = $pyjs.loaded_modules["JSOTest"];
	$m.__repr__ = function() { return "<module: JSOTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'JSOTest';
	$m.__name__ = __mod_name__;
	try {
		var $pyjs_try_err;
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		try {
			$m['pyjslib'] = $p['___import___']('pyjslib', null);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				$m['pyjslib'] = $p['___import___']('__builtin__', null, null, false);
			}
		}
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSOTest';
			$cls_definition.__md5__ = '40cd7f073a2c8227747e124918250a5d';
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$m['JSOTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSOTest';
			$cls_definition.__md5__ = 'da361d63b3083af7c69f1e19b4a405dd';
			$method = $pyjs__bind_method2('testJSObject', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da361d63b3083af7c69f1e19b4a405dd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,dd,d,f2;
				f1 = $m['Foo']();
				d = $p['dict']([['f1key', f1]]);
				self['assertEqual']($p['getattr']($m['pyjslib']['toJSObjects'](d), 'f1key'), f1);
				f2 = $m['Foo']();
				d = $p['dict']([['x', $constant_int_1], ['y', $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])], ['z', $p['dict']([['a', $constant_int_3]])], ['f', f1]]);
				dd = $p['dict']([['d', d]]);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($m['pyjslib']['toJSObjects'](dd), 'd'), 'z'), 'a'), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testJSObject'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSOTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end JSOTest */


/* end module: JSOTest */


/*
PYJS_DEPS: ['pyjslib', '__builtin__', 'UnitTest.UnitTest', 'UnitTest']
*/
