/* start module: NameTest */
$pyjs.loaded_modules['NameTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['NameTest'].__was_initialized__) return $pyjs.loaded_modules['NameTest'];
	var $m = $pyjs.loaded_modules["NameTest"];
	$m.__repr__ = function() { return "<module: NameTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'NameTest';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_5 = new $p['int'](5);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NameTest';
			$cls_definition.__md5__ = '895e8820b6183e125d70c583be7e72c0';
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '895e8820b6183e125d70c583be7e72c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_name', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '895e8820b6183e125d70c583be7e72c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, '__class__'), '__name__');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_name'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
		$m['aProcedure'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $p['getattr']($m['aProcedure'], '__name__');
		};
		$m['aProcedure'].__name__ = 'aProcedure';

		$m['aProcedure'].__bind_type__ = 0;
		$m['aProcedure'].__args__ = [null,null];
		$m['NameTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NameTest';
			$cls_definition.__md5__ = '5c966cc1b3c528bbeca43f63f3e28c6a';
			$method = $pyjs__bind_method2('testClassName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x;
				self['assertEqual']($p['getattr']($m['Handler'], '__name__'), 'Handler');
				self['assertEqual']($p['getattr']($p['getattr']($m['Handler'], 'get_name'), '__name__'), 'get_name');
				x = $m['Handler']($constant_int_5);
				self['assertEqual']($p['getattr']($p['getattr'](x, '__class__'), '__name__'), 'Handler');
				self['assertEqual']($p['getattr']($p['getattr'](x, 'get_name'), '__name__'), 'get_name');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassName'] = $method;
			$method = $pyjs__bind_method2('testProcedureName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr']($m['aProcedure'], '__name__'), 'aProcedure');
				self['assertEqual']($m['aProcedure'](), 'aProcedure');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testProcedureName'] = $method;
			$method = $pyjs__bind_method2('testModuleName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']((typeof __name__ == "undefined"?$m.__name__:__name__), 'NameTest');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testModuleName'] = $method;
			$method = $pyjs__bind_method2('testImportName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,foo;
				a = $p['___import___']('foo', null, null, false);
				self['assertEqual']($p['getattr'](a, '__name__'), 'foo');
				foo = $p['object']();
				foo = $p['___import___']('foo', null);
				self['assertEqual']($p['getattr'](foo, '__name__'), 'foo');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportName'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NameTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end NameTest */


/* end module: NameTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'foo']
*/
