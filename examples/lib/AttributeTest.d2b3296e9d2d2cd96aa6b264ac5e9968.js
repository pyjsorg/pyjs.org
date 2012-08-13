/* start module: AttributeTest */
$pyjs['loaded_modules']['AttributeTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['AttributeTest']['__was_initialized__']) return $pyjs['loaded_modules']['AttributeTest'];
	var $m = $pyjs['loaded_modules']['AttributeTest'];
	$m['__repr__'] = function() { return '<module: AttributeTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AttributeTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_6 = new $p['int'](6);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['$$name'] = 'Name';
		$m['$$prototype'] = 'Prototype';
		$m['$$call'] = 'Call';
		$m['$$apply'] = 'Apply';
		$m['$$constructor'] = 'Constructor';
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'AttributeTest';
			$cls_definition['__md5__'] = 'a6ad13e363b631ba2c59d0d854ddb3d8';
			$cls_definition['a'] = $constant_int_1;
			$cls_definition['b'] = $p['list']([$constant_int_1, $constant_int_2]);
			$cls_definition['$$name'] = 'Foo';
			$cls_definition['$$label'] = 'label';
			$method = $pyjs__bind_method2('__init__', function(v) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('v', v) : $p['setattr'](self, 'v', v); 
				return null;
			}
	, 1, [null,null,['self'],['v']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getV', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'v');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getV'] = $method;
			$method = $pyjs__bind_method2('$$call', function(name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var apply,prototype;
				name = name['upper']();
				prototype = $p['getattr'](self, '$$name');
				apply = self['$$name']['lower']();
				return $p['tuple']([name, prototype, apply, $p['getattr'](self, '$$name')]);
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['$$call'] = $method;
			$method = $pyjs__bind_method2('$$do', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'do';
			}
	, 1, [null,null,['self']]);
			$cls_definition['$$do'] = $method;
			$method = $pyjs__bind_method2('delete_me', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['delete_me'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$m['AttributeTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'AttributeTest';
			$cls_definition['__md5__'] = '556ca42a0951d1febad3a135aa7ccdda';
			$method = $pyjs__bind_method2('testHasattr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['hasattr'](self, 'getName'), true, "AttrTest should have method 'getName'");
				self['assertEqual']($p['hasattr'](self, 'blah'), false, "AttrTest has no method 'getName'");
				self['assertEqual']($p['hasattr']('', 'find'), true, "str should have method 'find', bug #483");
				self['assertEqual']($p['hasattr'](1.0, 'real'), true, "float should have attribute 'real', bug #483");
				self['assertEqual']($p['hasattr']($constant_int_1, 'real'), true, "int should have attribute 'real', bug #483");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testHasattr'] = $method;
			$method = $pyjs__bind_method2('testGetattr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo,e,$pyjs_try_err,func;
				func = $p['getattr'](self, 'getName');
				self['assertEqual'](func(), 'AttributeTest', "getattr does not return correct value'");
				self['assertEqual']($p['getattr']($m['Foo'], 'name'), 'Foo', 'attribute mapping, bug #521');
				self['assertEqual']($constant_int_1, $p['getattr']($m['Foo'], 'notthere', $constant_int_1));
				foo = $m['Foo']($constant_int_1);
				self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
				self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
				self['assertEqual']($p['getattr']($constant_int_1, 'x', $constant_int_2), $constant_int_2);
				self['assertEqual']($p['getattr'](null, 'x', $constant_int_2), $constant_int_2);
				try {
					self['assertEqual']($constant_int_1, $p['getattr'](foo, 'vv'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']($p['getattr']($p['getattr'](e, '__class__'), '__name__'), 'AttributeError');
						return null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['fail']('No AttributeError raised');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGetattr'] = $method;
			$method = $pyjs__bind_method2('testSetAttr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,f3,f2;
				f1 = $m['Foo']($constant_int_1);
				self['assertEqual'](f1['getV'](), $constant_int_1);
				f2 = $m['Foo']($constant_int_2);
				self['assertEqual'](f2['getV'](), $constant_int_2);
				f3 = $m['Foo']($constant_int_3);
				self['assertEqual'](f3['getV'](), $constant_int_3);
				$p['setattr'](f1, 'getV', $p['getattr'](f2, 'getV'));
				self['assertEqual'](f1['getV'](), $constant_int_2);
				$p['setattr'](f1, 'getV', $p['getattr'](f3, 'getV'));
				self['assertEqual'](f1['getV'](), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSetAttr'] = $method;
			$method = $pyjs__bind_method2('testDelAttr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,Foo1,$pyjs_try_err,foo,foo1;
				foo = $m['Foo']($constant_int_1);
				self['assertEqual']($p['hasattr'](foo, 'v'), true);
				$p['delattr'](foo, 'v');
				self['assertEqual']($p['hasattr'](foo, 'v'), false);
				self['assertEqual']($p['hasattr'](foo, 'getV'), true);
				try {
					$p['delattr'](foo, 'getV');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']($p['str'](e), "Foo instance has no attribute 'getV'");
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				Foo1 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'AttributeTest';
					$cls_definition['__md5__'] = 'fcacd2edb7fc087f49676bb38fe8df58';
					var $bases = new Array($m['Foo']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('Foo1', $p['tuple']($bases), $data);
				})();
				foo1 = Foo1($constant_int_1);
				try {
					$p['delattr'](foo, 'delete_me');
					self['fail']('Bug #697: No AttributeError raised');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual']($p['hasattr'](foo, 'delete_me'), true);
				try {
					$p['delattr'](Foo1, 'delete_me');
					self['fail']('Bug #697: No AttributeError raised');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), true, "Bug #697: Foo1 should still have method 'delete_me'");
				$p['delattr']($m['Foo'], 'delete_me');
				self['assertEqual']($p['hasattr']($m['Foo'], 'delete_me'), false, "Foo shouldn't have method 'delete_me'");
				self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), false, "Foo1 shouldn't have method 'delete_me'");
				self['assertEqual']($p['hasattr'](foo, 'delete_me'), false, "foo shouldn't have method 'delete_me'");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDelAttr'] = $method;
			$method = $pyjs__bind_method2('testAttrErr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo,$pyjs_try_err,v;
				foo = $m['Foo']($constant_int_1);
				try {
					v = $p['getattr'](foo, 'bar');
					self['fail']('No Error raised on foo.bar');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['assertTrue'](true, 'Exception raised');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAttrErr'] = $method;
			$method = $pyjs__bind_method2('testInstanceAttr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo_fn,$pyjs_try_err,t,foo,$2,$1;
				foo = $m['Foo']($constant_int_1);
				foo_fn = $p['getattr'](foo, 'getV');
				try {
					t = foo_fn();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						t = null;
					}
				}
				self['assertEqual'](t, $constant_int_1);
				foo['__is_instance__'] && typeof foo['__setattr__'] == 'function' ? foo['__setattr__']('getV', $constant_int_2) : $p['setattr'](foo, 'getV', $constant_int_2); 
				try {
					t = foo_fn();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						t = null;
					}
				}
				self['assertEqual'](t, $constant_int_1);
				t = $p['getattr'](foo, 'a');
				foo['__is_instance__'] && typeof foo['__setattr__'] == 'function' ? foo['__setattr__']('a', $constant_int_2) : $p['setattr'](foo, 'a', $constant_int_2); 
				self['assertEqual'](t, $constant_int_1);
				t = $p['getattr'](foo, 'b');
				foo['b']['append']($constant_int_3);
				self['assertEqual']((typeof ($1=t)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_2]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_2)), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstanceAttr'] = $method;
			$method = $pyjs__bind_method2('testAttributMapping', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,name,f,o,$pyjs_try_err,constructor,apply,prototype;
				f = $m['Foo']($constant_int_1);
				self['assertEqual']($p['getattr']($m['Foo'], '$$name'), 'Foo');
				self['assertEqual']($p['getattr'](f, '$$name'), 'Foo');
				var $tupleassign1 = $p['__ass_unpack'](f['$$call']('bAr'), 4, null);
				name = $tupleassign1[0];
				prototype = $tupleassign1[1];
				apply = $tupleassign1[2];
				constructor = $tupleassign1[3];
				self['assertEqual'](name, 'BAR');
				self['assertEqual'](prototype, 'Foo');
				self['assertEqual'](apply, 'foo');
				self['assertEqual'](constructor, 'Foo');
				self['assertEqual']($p['getattr']($m['Foo'], '$$label'), 'label');
				self['assertEqual']($p['getattr'](f, '$$label'), 'label');
				self['assertEqual'](f['$$do'](), 'do');
				self['assertEqual']($p['getattr'](f, 'do')(), 'do');
				$p['setattr']($m['Foo'], 'typeof', $constant_int_1);
				self['assertEqual']($p['getattr'](f, 'typeof'), $constant_int_1);
				try {
					self['assertEqual']($p['getattr'](f, '$$typeof'), $constant_int_1);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['fail']('Bug #402 setattr error for keywords');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
				$p['delattr']($m['Foo'], 'typeof');
				self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
				$p['setattr']($m['Foo'], 'typeof', $constant_int_2);
				self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
				$p['delattr']($m['Foo'], '$$typeof');
				self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
				o = $p['object']();
				self['assertFalse']($p['hasattr'](o, 'name'), "hasattr(o, 'name') should be False");
				self['assertFalse']($p['getattr'](o, 'name', false));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAttributMapping'] = $method;
			$method = $pyjs__bind_method2('testTypeAttributes', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$lambda1,$cmp2,$pyjs_try_err,$bool1,x,e;
				try {
					x = $p['getattr']($p['list']([]), 'append');
					x = $p['getattr']($p['dict']([]), 'get');
					if ((($bool1=((((($cmp1=$p['getattr']($m['sys'], 'version_info'))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_6]))?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
							false :
							(typeof $bool1=='object'?
								(typeof $bool1['__nonzero__']=='function'?
									$bool1['__nonzero__']() :
									(typeof $bool1['__len__']=='function'?
										($bool1['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						x = $p['getattr']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]), 'count');
					}
					var 					$lambda1 = function(x) {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

						return (typeof z == "undefined"?$m['z']:z);
					};
					$lambda1['__name__'] = '$lambda1';

					$lambda1['__bind_type__'] = 0;
					$lambda1['__args__'] = [null,null,['x']];
					x = $p['getattr']($lambda1, '__name__');
					x = $p['getattr']($p['__getslice']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]), $constant_int_1, $constant_int_2), 'append');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						self['fail']($p['sprintf']("Base type attribute, #594, '%s'", e));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					x = $p['getattr']('asdfgd', 'rjust');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						self['fail']($p['sprintf']("String attribute, #595, '%s'", e));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTypeAttributes'] = $method;
			$method = $pyjs__bind_method2('testExpressionAttributeCall', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '556ca42a0951d1febad3a135aa7ccdda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s3,s2,l,$3,$add2,$add3,$add1,$add6,$add4,$add5,$4,s1;
				s1 = '    1234';
				s2 = '5678    ';
				s3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return ' 6 ';
				};
				s3['__name__'] = 's3';

				s3['__bind_type__'] = 0;
				s3['__args__'] = [null,null];
				l = $p['list']([' 1 ', ' 2', '3 ']);
				self['assertEqual']((typeof ($add1=s1)==typeof ($add2=s2) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))['strip'](), '12345678');
				self['assertEqual']((typeof ($add3=s1)==typeof ($add4='') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))['strip'](), '1234');
				self['assertEqual']((typeof ($3=l)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))['strip'](), '1');
				self['assertEqual'](''['join'](l)['strip'](), '1  23');
				self['assertEqual']((typeof ($add5=s3())==typeof ($add6=s2) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))['strip'](), '6 5678');
				self['assertEqual'](s3()['strip'](), '6');
				self['assertEqual'](' 6 '['strip'](), '6');
				self['assertEqual']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3])['pop'](), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExpressionAttributeCall'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AttributeTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end AttributeTest */


/* end module: AttributeTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys']
*/
