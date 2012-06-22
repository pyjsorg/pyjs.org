/* start module: ClassTest */
$pyjs['loaded_modules']['ClassTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ClassTest']['__was_initialized__']) return $pyjs['loaded_modules']['ClassTest'];
	var $m = $pyjs['loaded_modules']['ClassTest'];
	$m['__repr__'] = function() { return '<module: ClassTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ClassTest';
	$m['__name__'] = __mod_name__;
	try {
		var $bool23,$bool22,$bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_222 = new $p['int'](222);
		$m['sys'] = $p['___import___']('sys', null);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
		if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['imports'] = $p['___import___']('imports.circ1', null);
		}
		$m['exec_order'] = $p['___import___']('imports.exec_order', null, null, false);
		$m['IMPORTS'] = $p['___import___']('imports.imports', null, null, false);
		$m['EXEC_ORDER'] = $pyjs['loaded_modules']['imports']['exec_order'];
		$m['I18N'] = $p['___import___']('I18N', null);
		$m['WithAttribute'] = $p['___import___']('imports.classes.WithAttribute', null, null, false);
		$m['imports'] = $p['___import___']('imports.decors', null);
		$m['names'] = $p['dict']([]);
		$m['SubAssignBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'c43b1b24f9115073b77124bb7b826910';
			$m['names']['__setitem__']('SubAssign', 'SubAssign');
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43b1b24f9115073b77124bb7b826910') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SubAssignBase', $p['tuple']($bases), $data);
		})();
		$m['SubAssign'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'f323ca54ccd173cb1b4bffdbfaff8184';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f323ca54ccd173cb1b4bffdbfaff8184') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['SubAssignBase']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$m['names']['__setitem__']('SubAssignBase', 'SubAssignBase');
			var $bases = new Array($m['SubAssignBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SubAssign', $p['tuple']($bases), $data);
		})();
		$m['GetAttribute'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '5fda3b4b30dc900fdd90430602309f5c';
			$cls_definition['getIt'] = $p['getattr']($m['WithAttribute'], 'ATTR');
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GetAttribute', $p['tuple']($bases), $data);
		})();
		$m['Sink'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '3b51fd51f3f0bddabef66aa7e8e6ed82';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3b51fd51f3f0bddabef66aa7e8e6ed82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sink', 'Sink') : $p['setattr'](self, 'sink', 'Sink'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Sink', $p['tuple']($bases), $data);
		})();
		$m['SinkInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'b440c8d8c9749a0edd049e366f94c2ba';
			$method = $pyjs__bind_method2('__init__', function(object_type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					object_type = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_type', object_type) : $p['setattr'](self, 'object_type', object_type); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('instance', null) : $p['setattr'](self, 'instance', null); 
				return null;
			}
	, 1, [null,null,['self'],['object_type']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createInstance', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['object_type']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['createInstance'] = $method;
			$method = $pyjs__bind_method2('getInstance', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				if ((($bool2=$p['op_eq']($p['getattr'](self, 'instance'), null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('instance', self['createInstance']()) : $p['setattr'](self, 'instance', self['createInstance']()); 
				}
				return $p['getattr'](self, 'instance');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getInstance'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
		})();
		$m['Trees'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '9c1955c46beae9b5a1189de76c868e7a';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c1955c46beae9b5a1189de76c868e7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test', 'Trees') : $p['setattr'](self, 'test', 'Trees'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Trees', $p['tuple']($bases), $data);
		})();
		$m['TestClass1Bug339'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '4a121da7dde1676ee80cd776976b317a';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a121da7dde1676ee80cd776976b317a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var test;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test', (typeof TestClass2 == "undefined"?$m['TestClass2']:TestClass2)()) : $p['setattr'](self, 'test', (typeof TestClass2 == "undefined"?$m['TestClass2']:TestClass2)()); 
				$pyjs_kwargs_call(self['test'], 'test_method', null, null, [{'test_arg':$constant_int_0}]);
				test = (typeof TestClass2 == "undefined"?$m['TestClass2']:TestClass2)();
				$pyjs_kwargs_call(test, 'test_method', null, null, [{'test_arg':$constant_int_0}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test', (typeof TestClass2 == "undefined"?$m['TestClass2']:TestClass2)()) : $p['setattr'](self, 'test', (typeof TestClass2 == "undefined"?$m['TestClass2']:TestClass2)()); 
				self['test']['test_method']($constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClass1Bug339', $p['tuple']($bases), $data);
		})();
		$m['TestClass2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'c65416e3d46f2c0b980478fa548fa911';
			$method = $pyjs__bind_method2('test_method', function(test_arg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					test_arg = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c65416e3d46f2c0b980478fa548fa911') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value', $constant_int_0) : $p['setattr'](self, 'value', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['test_arg']]);
			$cls_definition['test_method'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClass2', $p['tuple']($bases), $data);
		})();
		$m['UserListPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '88413494269ce9c8db703fe31cadcb33';
			$method = $pyjs__bind_method2('setUsers', function(title, screennames) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					screennames = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '88413494269ce9c8db703fe31cadcb33') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof screennames == 'undefined') screennames=arguments['callee']['__args__'][4][1];

 				return null;
			}
	, 1, [null,null,['self'],['title'],['screennames', null]]);
			$cls_definition['setUsers'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserListPanel', $p['tuple']($bases), $data);
		})();
		$m['TestClassBug342'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '34b4d883c44295268a604b2deb3dc833';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34b4d883c44295268a604b2deb3dc833') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('u', $m['UserListPanel']()) : $p['setattr'](self, 'u', $m['UserListPanel']()); 
				$pyjs_kwargs_call(self['u'], 'setUsers', null, null, [{'screennames':$constant_int_33}, 'title']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClassBug342', $p['tuple']($bases), $data);
		})();
		$m['ClassTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '554cd43edf93dfc4ca6bed1328ceefce';
			$method = $pyjs__bind_method2('testInstancePassing', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,s;
				s = $m['SinkInfo']($m['Trees']);
				i = s['getInstance']();
				self['assertEquals']($p['getattr'](i, 'test'), 'Trees');
				self['assertEquals']($p['getattr'](i, 'sink'), 'Sink');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstancePassing'] = $method;
			$method = $pyjs__bind_method2('testBug342', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,t;
				try {
					t = $m['TestClassBug342']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #342 encountered');
					}
				} finally {
					self['assertTrue'](true);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBug342'] = $method;
			$method = $pyjs__bind_method2('testBug339', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					$m['TestClass1Bug339']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #339 encountered');
					}
				} finally {
					self['assertTrue'](true);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBug339'] = $method;
			$method = $pyjs__bind_method2('testSubAssign', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $4,$2,$3,$1;
				self['assertEquals']((typeof ($1=$m['names'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2='SubAssignBase']) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']('SubAssignBase')), 'SubAssignBase');
				self['assertEquals']((typeof ($3=$m['names'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4='SubAssign']) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']('SubAssign')), 'SubAssign');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSubAssign'] = $method;
			$method = $pyjs__bind_method2('testClassVars', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$bool3,$pyjs_try_err,y,x,z,expected_result1,expected_result2;
				expected_result1 = 'test';
				expected_result2 = $constant_int_1;
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'x'), expected_result1);
				self['assertEquals']($m['ExampleClass']['x']['upper'](), expected_result1['upper']());
				y = (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass)();
				self['assertEquals']($p['getattr'](y, 'x'), expected_result1);
				$m['ExampleClass']['__is_instance__'] && typeof $m['ExampleClass']['__setattr__'] == 'function' ? $m['ExampleClass']['__setattr__']('x', expected_result2) : $p['setattr']($m['ExampleClass'], 'x', expected_result2); 
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'x'), expected_result2);
				z = (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass)();
				self['assertEquals']($p['getattr'](z, 'x'), expected_result2);
				self['assertEquals']($p['getattr'](y, 'x'), expected_result2);
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'c'), $p['op_bitor2']($constant_int_1, $constant_int_2));
				try {
					$m['ExampleClass']()['fail_a']();
					self['fail']('Failed to raise error on ExampleClass().fail_a() bug #217');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a() bug #217');
					} else {
						self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a()');
					}
				}
				if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					try {
						x = $m['ExampleClass']()['fail_a']();
						self['assertTrue']($pyjs['loaded_modules']['pyjslib']['isUndefined'](x));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							self['assertTrue'](true);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassVars'] = $method;
			$method = $pyjs__bind_method2('test_iops', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul8,b0,$mul6,$assign2,$sub3,$assign1,$sub4,$and1,$and2,$and3,$and4,$and5,a0,$bool6,$bool4,$bool5,$mul7,X,$mul5,a,c,b,d,$add6,$add7,$add5,$add8;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '03b5c0ca526b570f62b34f49361e2366';
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__add__', function(y) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							y = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add2,$add1;
						return X((typeof ($add1=$p['getattr'](self, 'x'))==typeof ($add2=$p['getattr'](y, 'x')) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__add__'] = $method;
					$method = $pyjs__bind_method2('__mul__', function(y) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							y = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul2,$mul1;
						return X((typeof ($mul1=$p['getattr'](self, 'x'))==typeof ($mul2=$p['getattr'](y, 'x')) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)));
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__mul__'] = $method;
					$method = $pyjs__bind_method2('__sub__', function(y) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							y = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $sub2,$sub1;
						return X((typeof ($sub1=$p['getattr'](self, 'x'))==typeof ($sub2=$p['getattr'](y, 'x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2)));
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__sub__'] = $method;
					$method = $pyjs__bind_method2('__iadd__', function(y) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							y = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add3,$add4;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](y, 'x')) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))) : $p['setattr'](self, 'x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](y, 'x')) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))); 
						return self;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__iadd__'] = $method;
					$method = $pyjs__bind_method2('__imul__', function(y) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							y = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '03b5c0ca526b570f62b34f49361e2366') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul4,$mul3;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($mul3=$p['getattr'](self, 'x'))==typeof ($mul4=$p['getattr'](y, 'x')) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'x', (typeof ($mul3=$p['getattr'](self, 'x'))==typeof ($mul4=$p['getattr'](y, 'x')) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))); 
						return self;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__imul__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$assign1 = X($constant_int_2);
				a = $assign1;
				a0 = $assign1;
				$assign2 = X($constant_int_4);
				b = $assign2;
				b0 = $assign2;
				c = (typeof ($add5=a)==typeof ($add6=b) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				d = (typeof ($mul5=a)==typeof ($mul6=b) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6));
				self['assertTrue'](((($bool4=$and1=!$p['op_is'](c, a)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_is'](c, b):$and1));
				self['assertTrue'](((($bool5=$and3=!$p['op_is'](d, a)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool6=$and4=!$p['op_is'](d, b)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6['__nonzero__']=='function'?
							$bool6['__nonzero__']() :
							(typeof $bool6['__len__']=='function'?
								($bool6['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_is'](d, c):$and4):$and3));
				self['assertEqual']($p['getattr'](c, 'x'), $constant_int_6);
				self['assertEqual']($p['getattr'](d, 'x'), $constant_int_8);
				a = (typeof ($add7=a)==typeof ($add8=b) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				self['assertTrue']($p['op_is'](a, a0), 'Bug #573 __iadd__ should modify object in-place');
				self['assertEqual']($p['getattr'](a, 'x'), $constant_int_6);
				self['assertEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 __iadd__ should modify all references to an object');
				a = (typeof ($sub3=a)==typeof ($sub4=b) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				self['assertTrue'](!$p['op_is'](a, a0));
				self['assertEqual']($p['getattr'](a, 'x'), $constant_int_2);
				self['assertNotEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 reference should not have same value after __iadd__ & __neg__');
				b = (typeof ($mul7=b)==typeof ($mul8=c) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8));
				self['assertTrue']($p['op_is'](b, b0), 'Bug #573 __imul__ should modify object in-place');
				self['assertEqual']($p['getattr'](b, 'x'), $constant_int_24);
				self['assertEqual']($p['getattr'](b0, 'x'), $p['getattr'](b, 'x'), 'Bug #573 __imul__ should modify all references to an object');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iops'] = $method;
			$method = $pyjs__bind_method2('test_getattr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '3e3e661ccffa34f3c0dc5c4e09b94adf';
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '3e3e661ccffa34f3c0dc5c4e09b94adf') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];

						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_0]]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__getattr__', function(name) {
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
							if (self.prototype['__md5__'] !== '3e3e661ccffa34f3c0dc5c4e09b94adf') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add9,$add10;
						return X((typeof ($add9=$p['getattr'](self, 'x'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10)));
					}
	, 1, [null,null,['self'],['name']]);
					$cls_definition['__getattr__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				x = X();
				self['assertEqual']($p['getattr'](x, 'x'), $constant_int_0);
				try {
					self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), $constant_int_1);
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), $constant_int_2);
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'a'), 'b'), 'c'), 'x'), $constant_int_3);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #575 __getattr__ method not supported');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_getattr'] = $method;
			$method = $pyjs__bind_method2('test_deep_property_access', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'e0adb493d21ba1ab82280cc4d8f4de4d';
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'e0adb493d21ba1ab82280cc4d8f4de4d') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];

						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_0]]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('bla', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'e0adb493d21ba1ab82280cc4d8f4de4d') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return $p['getattr'](self, 'next');
					}
	, 1, [null,null,['self']]);
					$cls_definition['bla'] = $p['property']($p['staticmethod']($method));
					$method = $pyjs__bind_method2('next', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'e0adb493d21ba1ab82280cc4d8f4de4d') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add11,$add12;
						return X((typeof ($add11=$p['getattr'](self, 'x'))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
					}
	, 1, [null,null,['self']]);
					$cls_definition['next'] = $p['property']($p['staticmethod']($method));
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				x = X();
				self['assertEqual']($p['getattr'](x, 'x'), $constant_int_0);
				try {
					self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), $constant_int_1);
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), $constant_int_2);
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'next'), 'x'), $constant_int_3);
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'bla'), 'next'), 'bla'), 'next'), 'bla'), 'x'), $constant_int_5);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #576 Deep property access not supported');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_deep_property_access'] = $method;
			$method = $pyjs__bind_method2('test_slice', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,data,x;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '6bb781218ce927ce2426a8c78582aca1';
					$method = $pyjs__bind_method2('__init__', function(data) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							data = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '6bb781218ce927ce2426a8c78582aca1') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
						return null;
					}
	, 1, [null,null,['self'],['data']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__getitem__', function(index) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							index = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '6bb781218ce927ce2426a8c78582aca1') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $6,$5;
						if (!( $p['isinstance'](index, $p['slice']) )) {
						   throw $p['AssertionError']();
						 }
						return (typeof ($5=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
							((typeof $5['__array'][$6=index]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__'](index));
					}
	, 1, [null,null,['self'],['index']]);
					$cls_definition['__getitem__'] = $method;
					$method = $pyjs__bind_method2('__setitem__', function(index, value) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
						} else {
							var self = arguments[0];
							index = arguments[1];
							value = arguments[2];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '6bb781218ce927ce2426a8c78582aca1') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						if (!( $p['isinstance'](index, $p['slice']) )) {
						   throw $p['AssertionError']();
						 }
						$p['getattr'](self, 'data')['__setitem__'](index, value);
						return null;
					}
	, 1, [null,null,['self'],['index'],['value']]);
					$cls_definition['__setitem__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				data = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				x = X(data);
				self['assertEqual']($p['__getslice'](data, 0, $constant_int_2), $p['__getslice'](x, 0, $constant_int_2), 'Bug #577 __getitem__ should be used for slicing');
				self['assertEqual']($p['__getslice'](x, 0, $constant_int_2), $p['list']([$constant_int_1, $constant_int_2]), 'Bug #577 __getitem__ not supported');
				try {
					$p['__setslice'](x, $constant_int_1, $constant_int_2, $p['list']([$constant_int_5]));
					self['assertEqual']($p['__getslice'](data, 0, null), $p['__getslice'](x, 0, null), 'Bug #577 __setitem__ should be used for slice assignment');
					self['assertEqual']($p['__getslice'](x, $constant_int_1, null), $p['list']([$constant_int_5, $constant_int_3]));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #577 slice / __getitem__ / __setitem__ not supported');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_slice'] = $method;
			$method = $pyjs__bind_method2('testInheritedProperties', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj2,obj,expected_result1,expected_result2,expected_result3;
				expected_result1 = 'test';
				expected_result2 = $constant_int_1;
				expected_result3 = 'other';
				obj1 = (typeof ExampleParentClass == "undefined"?$m['ExampleParentClass']:ExampleParentClass)();
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1);
				obj1['__is_instance__'] && typeof obj1['__setattr__'] == 'function' ? obj1['__setattr__']('x', expected_result2) : $p['setattr'](obj1, 'x', expected_result2); 
				obj2 = (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)();
				self['assertEquals']($p['getattr'](obj2, 'x'), expected_result1);
				obj2['__is_instance__'] && typeof obj2['__setattr__'] == 'function' ? obj2['__setattr__']('x', expected_result3) : $p['setattr'](obj2, 'x', expected_result3); 
				self['assertEquals']($p['getattr'](obj2, 'x'), expected_result3);
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result2);
				obj = $pyjs_kwargs_call(null, (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass), null, null, [{'b':$constant_int_222}]);
				self['assertEquals']($p['getattr'](obj, 'prop_a'), $constant_int_1);
				self['assertEquals']($p['getattr'](obj, 'prop_b'), $constant_int_222);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedProperties'] = $method;
			$method = $pyjs__bind_method2('testInheritedPropertyObjects', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj2,$10,$9,$len2,$8,$len1,$7,expected_result1,expected_result2;
				expected_result1 = 'another';
				expected_result2 = 'other';
				obj1 = (typeof ExampleParentObject == "undefined"?$m['ExampleParentObject']:ExampleParentObject)();
				self['assertEquals']((($len1=$p['getattr'](obj1, 'x')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_0);
				obj1['x']['append'](expected_result2);
				obj2 = (typeof ExampleChildObject == "undefined"?$m['ExampleChildObject']:ExampleChildObject)();
				self['assertEquals']((($len2=$p['getattr'](obj2, 'x')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))), $constant_int_1);
				obj2['x']['append'](expected_result1);
				self['assertEquals']((typeof ($7=$p['getattr'](obj2, 'x'))['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_1)), expected_result1);
				self['assertEquals']((typeof ($9=$p['getattr'](obj1, 'x'))['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_0)), expected_result2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedPropertyObjects'] = $method;
			$method = $pyjs__bind_method2('testInheritedConstructors', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj3,obj2,res,expected_result4,expected_result1,expected_result2,expected_result3;
				expected_result1 = 'test';
				expected_result2 = 'parent';
				expected_result3 = 'grandparent';
				expected_result4 = 'older';
				obj1 = (typeof ExampleChildNoConstructor == "undefined"?$m['ExampleChildNoConstructor']:ExampleChildNoConstructor)();
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildNoConstructor');
				obj2 = (typeof ExampleChildConstructor == "undefined"?$m['ExampleChildConstructor']:ExampleChildConstructor)();
				self['assertNotEqual']($p['getattr'](obj2, 'x', null), expected_result1, 'ExampleParentConstructor.__init__() was called for ExampleChildConstructor');
				obj3 = (typeof ExampleChildExplicitConstructor == "undefined"?$m['ExampleChildExplicitConstructor']:ExampleChildExplicitConstructor)();
				self['assertEquals']($p['getattr'](obj3, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildExplicitConstructor');
				self['assertEquals']($p['getattr'](obj1, 'y'), expected_result2, 'Did not inherit property from parent');
				self['assertEquals']($p['getattr'](obj2, 'y'), expected_result2, 'Did not inherit property from parent');
				self['assertEquals']($p['getattr'](obj1, 'z'), expected_result3, 'Did not inherit property from grandparent');
				self['assertEquals']($p['getattr'](obj2, 'z'), expected_result3, 'Did not inherit property from grandparent');
				res = $p['getattr'](obj1, 'r', null);
				self['assertNotEqual'](res, expected_result4, $p['sprintf']('ExampleGrandParentConstructor.__init__() was called (%s)', res));
				self['assertNotEqual']($p['getattr'](obj2, 'r', null), expected_result4, 'ExampleGrandParentConstructor.__init__() was called');
				self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m['ExampleChildConstructor']:ExampleChildConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m['ExampleChildNoConstructor']:ExampleChildNoConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m['ExampleChildExplicitConstructor']:ExampleChildExplicitConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m['ExampleChildConstructor']:ExampleChildConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m['ExampleChildNoConstructor']:ExampleChildNoConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m['ExampleChildExplicitConstructor']:ExampleChildExplicitConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedConstructors'] = $method;
			$method = $pyjs__bind_method2('testInheritFromType', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var SubclassedFloat,subclassed_type,$iter1_nextval,$iter1_type,val,SubclassedInt,$iter1_iter,i_types,SubclassedString,$pyjs_try_err,inst,$iter1_array,v,cls,$iter1_idx;
				i_types = $p['list']([$p['tuple']([$p['int'], $constant_int_1]), $p['tuple']([$p['float'], 1.5]), $p['tuple']([$p['str'], 'test']), $p['tuple']([$p['long'], $constant_int_1]), $p['tuple']([$p['tuple'], $p['tuple']([$constant_int_1, $constant_int_2])]), $p['tuple']([$p['list'], $p['list']([$constant_int_1, $constant_int_2])]), $p['tuple']([$p['dict'], $p['dict']([['1', $constant_int_1]])]), $p['tuple']([$p['set'], $p['set']($p['list']([$constant_int_1, $constant_int_2]))])]);
				$iter1_iter = i_types;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					cls = $tupleassign1[0];
					val = $tupleassign1[1];
					try {
						subclassed_type = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition['__module__'] = 'ClassTest';
							$cls_definition['__md5__'] = '34b6a70dfd55eaca222549022147c887';
							$method = $pyjs__bind_method2('test_inh_method', function() {
								if (this['__is_instance__'] === true) {
									var self = this;
									if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
								} else {
									var self = arguments[0];
									if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
									if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
								}
								if ($pyjs['options']['arg_instance_type']) {
									if (self.prototype['__md5__'] !== '34b6a70dfd55eaca222549022147c887') {
										if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
											$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										}
									}
								}

								return $constant_int_1;
							}
	, 1, [null,null,['self']]);
							$cls_definition['test_inh_method'] = $method;
							var $bases = new Array(cls);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
							return $p['_create_class']('subclassed_type', $p['tuple']($bases), $data);
						})();
						subclassed_type['__is_instance__'] && typeof subclassed_type['__setattr__'] == 'function' ? subclassed_type['__setattr__']('__name__', $p['getattr'](cls, '__name__')) : $p['setattr'](subclassed_type, '__name__', $p['getattr'](cls, '__name__')); 
						inst = subclassed_type(val);
						self['assertEqual'](inst, val, $p['sprintf']("Subclasses of type '%s' are not instantiated properly, issue #623", $p['getattr'](cls, '__name__')));
						self['assertEqual'](inst['test_inh_method'](), $constant_int_1, $p['sprintf']("Methods of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
						self['assertEqual']($p['str'](inst), $p['str'](val), $p['sprintf']("__str__ of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
						self['assertEqual']($p['type'](inst), subclassed_type, $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
						self['assertTrue']($p['isinstance'](inst, subclassed_type), $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['fail']($p['sprintf']("Subclassing type '%s' does not work, issue #623", $p['getattr'](cls, '__name__')));
						}
					}
				}
				SubclassedString = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '075808ccc18a53e6dc0be7465d03a392';
					var $bases = new Array($p['str']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedString', $p['tuple']($bases), $data);
				})();
				SubclassedInt = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'f25e5556f911a6b8bacc2f5ca1f9b42f';
					var $bases = new Array($p['int']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedInt', $p['tuple']($bases), $data);
				})();
				SubclassedFloat = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '6bb07de08698b68a57ed807982dbde26';
					var $bases = new Array($p['float']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedFloat', $p['tuple']($bases), $data);
				})();
				try {
					self['assertEqual']($p['str'](SubclassedString('string')), 'string', '#484');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Could not instantiate subclassed string, bug #484');
					}
				}
				try {
					v = $p['str'](SubclassedInt($constant_int_1));
					self['assertEqual'](v, '1', $p['sprintf']("bug #484 - %s != '1'", v));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Could not instantiate subclassed int');
					}
				}
				try {
					self['assertEqual']($p['str'](SubclassedFloat(1.1)), '1.1', '#484');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Could not instantiate subclassed float');
					}
				}
				self['assertTrue']($p['isinstance'](SubclassedString('abc'), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				self['assertTrue']($p['isinstance'](SubclassedInt($constant_int_1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				self['assertTrue']($p['isinstance'](SubclassedFloat(1.1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritFromType'] = $method;
			$method = $pyjs__bind_method2('testClassMethods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $32,results,$33,$66,$65,$39,$29,$28,$55,$74,$21,$20,$22,$25,$24,$27,$26,instance,$49,$48,$69,$68,$43,$42,$41,$40,$47,$46,$45,$44,$72,$73,$70,$60,$71,$62,$51,$64,$67,$14,$15,$16,$17,$11,$12,$13,$36,$37,$34,$35,$18,$19,$30,$31,$58,$59,$61,$63,$50,$38,$52,$53,$54,$23,$56,$57;
				results = $m['ExampleClass']['sampleClassMethod']('a');
				self['assertEqual']((typeof ($11=results)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_0]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_0)), (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($13=results)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_1]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleParentClass']['sampleClassMethod']('a');
				self['assertEqual']((typeof ($15=results)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=$constant_int_0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']($constant_int_0)), (typeof ExampleParentClass == "undefined"?$m['ExampleParentClass']:ExampleParentClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($17=results)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=$constant_int_1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleChildClass']['sampleClassMethod']('a');
				self['assertEqual']((typeof ($19=results)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_0)), (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($21=results)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_1]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleClass']['sampleClassMethodVarargs']('a', 'b', 'c');
				self['assertEqual']((typeof ($23=results)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_0)), (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($27=(typeof ($25=results)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=$constant_int_1]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $27['__array'][$28=$constant_int_0]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']($constant_int_0)), 'a');
				self['assertEqual']((typeof ($31=(typeof ($29=results)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=$constant_int_1]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $31['__array'][$32=$constant_int_1]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']($constant_int_1)), 'b');
				self['assertEqual']((typeof ($35=(typeof ($33=results)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=$constant_int_1]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $35['__array'][$36=$constant_int_2]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__']($constant_int_2)), 'c');
				results = $pyjs_kwargs_call($m['ExampleClass'], 'sampleClassMethodKwargs', null, null, [{'c':$constant_int_9, 'b':$constant_int_8, 'a':$constant_int_7}]);
				self['assertEqual']((typeof ($37=results)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=$constant_int_0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__']($constant_int_0)), (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($39=results)['__array'] != 'undefined'?
					((typeof $39['__array'][$40=$constant_int_1]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__']($constant_int_1)), $constant_int_7);
				self['assertEqual']((typeof ($41=results)['__array'] != 'undefined'?
					((typeof $41['__array'][$42=$constant_int_2]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__']($constant_int_2)), $constant_int_8);
				self['assertEqual']((typeof ($43=results)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=$constant_int_3]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__']($constant_int_3)), $constant_int_9);
				results = $m['ExampleClass']()['sampleClassMethod']('a');
				self['assertEqual']((typeof ($45=results)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_0)), (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($47=results)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=$constant_int_1]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleParentClass']()['sampleClassMethod']('a');
				self['assertEqual']((typeof ($49=results)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=$constant_int_0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__']($constant_int_0)), (typeof ExampleParentClass == "undefined"?$m['ExampleParentClass']:ExampleParentClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($51=results)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=$constant_int_1]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleChildClass']()['sampleClassMethod']('a');
				self['assertEqual']((typeof ($53=results)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=$constant_int_0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__']($constant_int_0)), (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($55=results)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=$constant_int_1]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__']($constant_int_1)), 'a');
				results = $m['ExampleClass']()['sampleClassMethodVarargs']('a', 'b', 'c');
				self['assertEqual']((typeof ($57=results)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=$constant_int_0]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']($constant_int_0)), (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), 'Expected first parameter to be the class instance');
				self['assertEqual']((typeof ($61=(typeof ($59=results)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=$constant_int_1]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $61['__array'][$62=$constant_int_0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__']($constant_int_0)), 'a');
				self['assertEqual']((typeof ($65=(typeof ($63=results)['__array'] != 'undefined'?
					((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $65['__array'][$66=$constant_int_1]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__']($constant_int_1)), 'b');
				self['assertEqual']((typeof ($69=(typeof ($67=results)['__array'] != 'undefined'?
					((typeof $67['__array'][$68=$constant_int_1]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $69['__array'][$70=$constant_int_2]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__']($constant_int_2)), 'c');
				self['assertEqual']($m['ExampleParentClass']()['inert']('inert'), 'inert');
				self['assertEqual']($m['ExampleParentClass']()['global_x1'](), 'global test');
				self['assertEqual']($m['ExampleParentClass']()['global_x2'](), 'global test');
				instance = (typeof RecurseMe == "undefined"?$m['RecurseMe']:RecurseMe)();
				self['assertEqual']((typeof ($71=$p['getattr'](instance, 'chain'))['__array'] != 'undefined'?
					((typeof $71['__array'][$72=$constant_int_0]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__']($constant_int_0)), $constant_int_0);
				self['assertEqual']((typeof ($73=$p['getattr'](instance, 'chain'))['__array'] != 'undefined'?
					((typeof $73['__array'][$74=$constant_int_1]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__']($constant_int_1)), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassMethods'] = $method;
			$method = $pyjs__bind_method2('testStaticMethod', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,m;
				self['assertEqual']($m['ExampleClass']['sampleStaticMethod']('a'), 'a', 'Expected static method to take the parameter I give as its first parameter');
				try {
					m = $m['ExampleClass']['oldIdiomStaticMethod']('middle');
					self['assertEqual'](m, 'beforemiddleafter');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Issue #415 - staticmethod(method) idiom does not work');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStaticMethod'] = $method;
			$method = $pyjs__bind_method2('test_method_alias', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$pyjs_try_err,C;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'cc9732606be89b2e0e281fee6fbd9774';
					$method = $pyjs__bind_method2('original', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'cc9732606be89b2e0e281fee6fbd9774') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return $constant_int_5;
					}
	, 1, [null,null,['self']]);
					$cls_definition['original'] = $method;
					$cls_definition['alias'] = $p['staticmethod']($cls_definition['original']);
					$method = $pyjs__bind_method2('method_using_alias', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'cc9732606be89b2e0e281fee6fbd9774') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return self['alias']();
					}
	, 1, [null,null,['self']]);
					$cls_definition['method_using_alias'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				c = C();
				self['assertEqual'](c['original'](), $constant_int_5);
				try {
					self['assertEqual'](c['alias'](), $constant_int_5);
					self['assertEqual'](c['method_using_alias'](), $constant_int_5);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Bug #578 : method alias fails');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_method_alias'] = $method;
			$method = $pyjs__bind_method2('test_class_isinstance_type', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var C;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '96e59eba318fbb1d40410500586ac987';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				self['assertTrue']($p['isinstance'](C, $p['type']), 'Bug #579 type type not supported');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_class_isinstance_type'] = $method;
			$method = $pyjs__bind_method2('test__new__Method', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,prop,instance,$pyjs_try_err,$bool7;
				c = (typeof OtherClass1 == "undefined"?$m['OtherClass1']:OtherClass1)();
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass');
				self['assertEqual']($p['getattr'](c, 'prop'), $constant_int_1);
				c = (typeof OtherSubclass1 == "undefined"?$m['OtherSubclass1']:OtherSubclass1)();
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass', 'Issue #414: __new__ method on superclass not called');
				c = (typeof OtherClass2 == "undefined"?$m['OtherClass2']:OtherClass2)();
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'OtherClass2');
				try {
					prop = $p['getattr'](c, 'prop');
					self['fail']('failed to raise an error on c.prop (improperly follows explicit __new__ with implicit __init__)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['assertTrue'](true);
					}
				}
				self['assertTrue']($p['getattr'](c, 'init'), 'OtherClass2.__init__() is not executed');
				try {
					c = (typeof OtherClass3 == "undefined"?$m['OtherClass3']:OtherClass3)($constant_int_41, $constant_int_42);
					self['assertTrue'](true);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Issue #417: __new__ method fails for lack of arguments');
					}
				}
				self['assertEqual'](((($bool7=$p['hasattr'](c, 'y')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['getattr'](c, 'y')) : ($constant_int_0)), $constant_int_42, 'Issue #417: __new__ method not passed constructor arguments.');
				try {
					c = (typeof OtherClass3 == "undefined"?$m['OtherClass3']:OtherClass3)();
					self['fail']("Issue #418: __new__ method doesn't fail for lack of arguments");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['assertTrue'](true);
					}
				}
				try {
					c = (typeof OtherClass4 == "undefined"?$m['OtherClass4']:OtherClass4)();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						self['fail']('TypeError on OtherClass4()');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				c = $pyjs_kwargs_call(null, (typeof OtherSubclass4 == "undefined"?$m['OtherSubclass4']:OtherSubclass4), null, null, [{'c':$constant_int_3, 'd':$constant_int_4}, $constant_int_1, $constant_int_2]);
				try {
					self['assertEqual']($p['getattr'](c, 'args'), $p['tuple']([$constant_int_1, $constant_int_2]));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						self['fail']('c.args is not defined');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					self['assertEqual']($p['getattr'](c, 'kwargs'), $pyjs_kwargs_call(null, $p['dict'], null, null, [{'c':$constant_int_3, 'd':$constant_int_4}]));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						self['fail']('c.kwargs is not defined');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				instance = $m['MultiBase']['__new__']((typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1));
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				instance = $m['MultiInherit1']['__new__']((typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase));
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
				instance = $pyjs_kwargs_call($p['object'], '__new__', null, $p['dict']([]), [{}, (typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1)]);
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__new__Method'] = $method;
			$method = $pyjs__bind_method2('testIsInstance', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)();
				self['failIf']($p['isinstance'](c, (typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass)));
				self['failUnless']($p['isinstance'](c, (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)));
				self['failUnless']($p['isinstance'](c, (typeof ExampleParentClass == "undefined"?$m['ExampleParentClass']:ExampleParentClass)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstance'] = $method;
			$method = $pyjs__bind_method2('testIsInstanceNested', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)();
				self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)])));
				self['failIf']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), (typeof ExampleParentObject == "undefined"?$m['ExampleParentObject']:ExampleParentObject)])));
				self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass), $p['tuple']([(typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)])])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstanceNested'] = $method;
			$method = $pyjs__bind_method2('testInstanceChecking', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $76,$77,$75,$78,$cmp2,$pyjs_try_err,e,$cmp1;
				try {
					$m['ExampleChildClass']['get_x']((typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass)());
					self['assertTrue'](true);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['fail'](e);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					$m['ExampleChildClass']['get_x']((typeof ExampleClass == "undefined"?$m['ExampleClass']:ExampleClass)());
					self['fail']('Failed to raise error for invalid instance');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](((((($cmp1=(typeof ($75=$p['getattr'](e, 'args'))['__array'] != 'undefined'?
							((typeof $75['__array'][$76=$constant_int_0]) != 'undefined'?$75['__array'][$76]:
								$75['__getitem__']($76)):
								$75['__getitem__']($constant_int_0))['find']('get_x() must be called'))===($cmp2=$constant_int_0)?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))))|1) == 1), (typeof ($77=$p['getattr'](e, 'args'))['__array'] != 'undefined'?
							((typeof $77['__array'][$78=$constant_int_0]) != 'undefined'?$77['__array'][$78]:
								$77['__getitem__']($78)):
								$77['__getitem__']($constant_int_0)));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstanceChecking'] = $method;
			$method = $pyjs__bind_method2('testIsSubclass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,C,B,E,D;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '99b64c513fb5455a07e7f5b453c0589d';
					var $bases = new Array(pyjslib['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				B = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '8fbfd3d70da58445d4205f66cd32476c';
					var $bases = new Array(A);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('B', $p['tuple']($bases), $data);
				})();
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '945a0219224728e01a3c99f500d29c65';
					var $bases = new Array(B);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				D = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'aa002d5ea3962a878f500306f42a2a4c';
					var $bases = new Array(pyjslib['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('D', $p['tuple']($bases), $data);
				})();
				E = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '674d59f1056a4179ecba2e12ef1c3339';
					var $bases = new Array(D,C);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('E', $p['tuple']($bases), $data);
				})();
				self['assertTrue']($p['issubclass'](A, A));
				self['assertTrue']($p['issubclass'](C, A));
				self['assertTrue']($p['issubclass'](E, A));
				self['assertTrue']($p['issubclass'](E, $p['tuple']([(typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass), A])));
				self['assertFalse']($p['issubclass'](A, (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass)));
				self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass)(), (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass), (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass)());
				self['assertRaises']($p['TypeError'], $p['issubclass'], null, (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsSubclass'] = $method;
			$method = $pyjs__bind_method2('testMetaClass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var instance,Klass;
				Klass = $p['type']('MyClass', $p['tuple']([$p['object']]), $p['dict']([['method', (typeof method == "undefined"?$m['method']:method)], ['x', $constant_int_5]]));
				instance = Klass();
				self['assertEqual'](instance['method'](), $constant_int_1);
				self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_5);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClass'] = $method;
			$method = $pyjs__bind_method2('testMetaClassInheritFromType', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var instance,$pyjs_try_err,Metaklass,Klass;
				Metaklass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '43f2df54ed0f89bffedf65c9cdacc2d6';
					$method = $pyjs__bind_method2('metamethod', function() {
						if (this['__is_instance__'] === true) {
							var cls = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var cls = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (cls.prototype['__md5__'] !== '43f2df54ed0f89bffedf65c9cdacc2d6') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						return $constant_int_2;
					}
	, 1, [null,null,['cls']]);
					$cls_definition['metamethod'] = $method;
					var $bases = new Array($p['type']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('Metaklass', $p['tuple']($bases), $data);
				})();
				Klass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '87b706f67afaf64c0855456d9223acbe';
					$cls_definition['__metaclass__'] = Metaklass;
					$method = $pyjs__bind_method2('method', function() {
						if (this['__is_instance__'] === true) {
							var cls = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var cls = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (cls.prototype['__md5__'] !== '87b706f67afaf64c0855456d9223acbe') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						return $constant_int_1;
					}
	, 1, [null,null,['cls']]);
					$cls_definition['method'] = $method;
					$cls_definition['x'] = $constant_int_5;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('Klass', $p['tuple']($bases), $data);
				})();
				try {
					self['assertEqual'](Klass['metamethod'](), $constant_int_2);
					instance = Klass();
					self['assertEqual'](instance['method'](), $constant_int_1);
					self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_5);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('bug #298 - missing metaclass features');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClassInheritFromType'] = $method;
			$method = $pyjs__bind_method2('testMetaClassDct', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var MetaklassDctSaver,MyClass,$pyjs_try_err;
				MetaklassDctSaver = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'ea3617a96dcfc21bd37bbeef1ace0068';
					$method = $pyjs__bind_method2('__init__', function(name, bases, dct) {
						if (this['__is_instance__'] === true) {
							var cls = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
						} else {
							var cls = arguments[0];
							name = arguments[1];
							bases = arguments[2];
							dct = arguments[3];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (cls.prototype['__md5__'] !== 'ea3617a96dcfc21bd37bbeef1ace0068') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						$p['$$super'](MetaklassDctSaver, cls)['__init__'](name, bases, dct);
						cls['__is_instance__'] && typeof cls['__setattr__'] == 'function' ? cls['__setattr__']('saved_dct', dct) : $p['setattr'](cls, 'saved_dct', dct); 
						return null;
					}
	, 1, [null,null,['cls'],['name'],['bases'],['dct']]);
					$cls_definition['__init__'] = $method;
					var $bases = new Array($p['type']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('MetaklassDctSaver', $p['tuple']($bases), $data);
				})();
				MyClass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '749ded2f7caf8649b90ca901f3d5a77e';
					$cls_definition['__metaclass__'] = MetaklassDctSaver;
					$cls_definition['a'] = $constant_int_1;
					$cls_definition['b'] = $constant_int_2;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('MyClass', $p['tuple']($bases), $data);
				})();
				try {
					self['assertTrue']($p['isinstance']($p['getattr'](MyClass, 'saved_dct'), $p['dict']));
					self['assertTrue']($p['getattr'](MyClass, 'saved_dct')['__contains__']('a'));
					self['assertTrue']($p['getattr'](MyClass, 'saved_dct')['__contains__']('b'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('bug #298 - missing metaclass features');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClassDct'] = $method;
			$method = $pyjs__bind_method2('testMultiSuperclass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_value,c;
				new_value = 'New value';
				c = (typeof ExampleMultiSuperclassNoConstructor == "undefined"?$m['ExampleMultiSuperclassNoConstructor']:ExampleMultiSuperclassNoConstructor)(new_value);
				self['assertEqual']($p['getattr'](c, 'x'), new_value);
				self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m['ExampleMultiSuperclassParent2']:ExampleMultiSuperclassParent2), 'y'));
				self['assertEqual'](c['get_value'](), new_value);
				c = (typeof ExampleMultiSuperclassExplicitConstructor == "undefined"?$m['ExampleMultiSuperclassExplicitConstructor']:ExampleMultiSuperclassExplicitConstructor)(new_value);
				self['assertEqual']($p['getattr'](c, 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m['ExampleMultiSuperclassParent1']:ExampleMultiSuperclassParent1), 'x'));
				self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m['ExampleMultiSuperclassParent2']:ExampleMultiSuperclassParent2), 'y'));
				self['assertEqual']($p['getattr'](c, 'z'), new_value);
				self['assertEqual'](c['get_value'](), new_value);
				self['assertEqual'](c['get_values'](), ':'['join']($p['list']([$p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m['ExampleMultiSuperclassParent1']:ExampleMultiSuperclassParent1), 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m['ExampleMultiSuperclassParent2']:ExampleMultiSuperclassParent2), 'y'), new_value])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultiSuperclass'] = $method;
			$method = $pyjs__bind_method2('testMultiDoubleInherit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i;
				i = (typeof DoubleInherit == "undefined"?$m['DoubleInherit']:DoubleInherit)($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual'](i['get_x'](), $constant_int_1);
				self['assertEqual'](i['get_y'](), $constant_int_2);
				self['assertEqual'](i['get_z'](), $constant_int_3);
				$m['MultiInherit2']['set_x'](i, $constant_int_5);
				self['assertEqual']($m['MultiInherit1']['get_x'](i), $constant_int_5);
				self['assertEqual'](i['getName'](), 'MultiInherit2', 'Inheritance prolem issue #560');
				self['assertEqual']($p['str'](i), 'MultiInherit2', 'Inheritance prolem issue #560');
				i = (typeof DoubleInheritReversed == "undefined"?$m['DoubleInheritReversed']:DoubleInheritReversed)($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual'](i['getName'](), 'MultiInherit2');
				self['assertEqual']($p['str'](i), 'MultiInherit2');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultiDoubleInherit'] = $method;
			$method = $pyjs__bind_method2('testClassArguments', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,$79,$82,$81,$80,$pyjs_try_err;
				c = (typeof ClassArguments == "undefined"?$m['ClassArguments']:ClassArguments)();
				try {
					c['no_args']();
					self['fail']("Exception should be raised on 'c.no_args()'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($79=$p['getattr'](e, 'args'))['__array'] != 'undefined'?
							((typeof $79['__array'][$80=$constant_int_0]) != 'undefined'?$79['__array'][$80]:
								$79['__getitem__']($80)):
								$79['__getitem__']($constant_int_0)), 'no_args() takes no arguments (1 given)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual'](c['self_arg'](), true);
				self['assertEqual'](c['two_args']($constant_int_1), $constant_int_1);
				try {
					c['two_args']();
					self['fail']("Exception should be raised on 'c.two_args()'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($81=$p['getattr'](e, 'args'))['__array'] != 'undefined'?
							((typeof $81['__array'][$82=$constant_int_0]) != 'undefined'?$81['__array'][$82]:
								$81['__getitem__']($82)):
								$81['__getitem__']($constant_int_0)), 'two_args() takes exactly 2 arguments (1 given)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassArguments'] = $method;
			$method = $pyjs__bind_method2('testSuperTest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,instance,$pyjs_try_err,z;
				c = (typeof DoubleInherit == "undefined"?$m['DoubleInherit']:DoubleInherit)($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m['DoubleInherit']:DoubleInherit), c)['get_y'](), $constant_int_2);
				c['__is_instance__'] && typeof c['__setattr__'] == 'function' ? c['__setattr__']('y', $constant_int_4) : $p['setattr'](c, 'y', $constant_int_4); 
				self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m['DoubleInherit']:DoubleInherit), c)['get_y'](), $constant_int_4);
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase), (typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1));
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase), (typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1))['__new__']((typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase));
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase), (typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1));
				instance['__init__']($constant_int_1, $constant_int_2);
				self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_1);
				self['assertEqual']($p['getattr'](instance, 'y'), $constant_int_2);
				try {
					z = $p['getattr'](instance, 'z');
					self['fail']('failed to raise error for instance.z');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['fail']('failed to raise Attribute error for instance.z');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSuperTest'] = $method;
			$method = $pyjs__bind_method2('testSuperArgTest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a2,a3;
				a2 = $pyjs_kwargs_call(null, (typeof SuperArg2 == "undefined"?$m['SuperArg2']:SuperArg2), null, null, [{'a':$constant_int_1, 'b':$constant_int_2, 'c':$constant_int_3}]);
				a3 = $pyjs_kwargs_call(null, (typeof SuperArg3 == "undefined"?$m['SuperArg3']:SuperArg3), null, null, [{'a':$constant_int_1, 'b':$constant_int_2, 'c':$constant_int_3}]);
				self['assertEqual']($p['list'](['SuperArg2', $p['getattr'](a2, 'a1_args')]), $p['list'](['SuperArg2', $p['list']([$p['tuple'](['a', $constant_int_1]), $p['tuple'](['b', $constant_int_2]), $p['tuple'](['c', $constant_int_3])])]));
				self['assertEqual']($p['list'](['SuperArg3', $p['getattr'](a3, 'a1_args')]), $p['list'](['SuperArg3', $p['list']([$p['tuple'](['a', $constant_int_1]), $p['tuple'](['b', $constant_int_2]), $p['tuple'](['c', $constant_int_3])])]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSuperArgTest'] = $method;
			$method = $pyjs__bind_method2('testImportTest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,$89,$88,$87,imports,$84,$83,$91,$92,$93,$94,teststring,$pyjs_try_err,$90,$86,C,$85;
				imports = $p['___import___']('imports', null);
				self['assertEqual']((typeof ($83=$p['getattr'](imports, 'exec_order'))['__array'] != 'undefined'?
					((typeof $83['__array'][$84=$constant_int_0]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__']($constant_int_0)), 'circ1-1');
				self['assertEqual']((typeof ($85=$m['exec_order'])['__array'] != 'undefined'?
					((typeof $85['__array'][$86=$constant_int_1]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__']($constant_int_1)), 'circ2-1');
				self['assertEqual']((typeof ($87=$m['EXEC_ORDER'])['__array'] != 'undefined'?
					((typeof $87['__array'][$88=$constant_int_2]) != 'undefined'?$87['__array'][$88]:
						$87['__getitem__']($88)):
						$87['__getitem__']($constant_int_2)), 'circ2-2');
				self['assertEqual']((typeof ($89=$p['getattr'](imports, 'exec_order'))['__array'] != 'undefined'?
					((typeof $89['__array'][$90=$constant_int_3]) != 'undefined'?$89['__array'][$90]:
						$89['__getitem__']($90)):
						$89['__getitem__']($constant_int_3)), 'circ1-2');
				self['assertEqual']((typeof ($91=$p['getattr'](imports, 'exec_order'))['__array'] != 'undefined'?
					((typeof $91['__array'][$92=$constant_int_3]) != 'undefined'?$91['__array'][$92]:
						$91['__getitem__']($92)):
						$91['__getitem__']($constant_int_3)), (typeof ($93=$p['getattr']($m['IMPORTS'], 'exec_order'))['__array'] != 'undefined'?
					((typeof $93['__array'][$94=$constant_int_3]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__']($constant_int_3)));
				imports = $p['___import___']('imports.child', null);
				teststring = 'import test';
				try {
					c = imports['child']['Child']();
					self['assertEqual'](c['value'](teststring), teststring);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['fail']($p['getattr'](e, 'message'));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'a7b99dcfe1985099db907008d518202f';
					var $bases = new Array($p['getattr']($p['getattr'](imports, 'child'), 'Child'));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				c = C();
				self['assertEqual'](c['value'](teststring), teststring);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportTest'] = $method;
			$method = $pyjs__bind_method2('testPassMeAClass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res;
				res = (typeof PassMeAClassFunction == "undefined"?$m['PassMeAClassFunction']:PassMeAClassFunction)((typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				self['assertEqual'](res, 'foo in PassMeAClass');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPassMeAClass'] = $method;
			$method = $pyjs__bind_method2('testClassAttributeAccess', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr']($m['GetAttribute'], 'getIt'), $p['getattr']($m['WithAttribute'], 'ATTR'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassAttributeAccess'] = $method;
			$method = $pyjs__bind_method2('testNameMapping', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $101,$100,$103,$102,$98,$99,$107,$106,$109,$95,$97,instance,r,$110,$108,$105,$96,$104;
				instance = (typeof MultiBase == "undefined"?$m['MultiBase']:MultiBase)('a');
				r = instance['$$prototype']($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual']((typeof ($95=r)['__array'] != 'undefined'?
					((typeof $95['__array'][$96=$constant_int_0]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__']($constant_int_0)), 'MultiBase');
				self['assertEqual']((typeof ($97=r)['__array'] != 'undefined'?
					((typeof $97['__array'][$98=$constant_int_1]) != 'undefined'?$97['__array'][$98]:
						$97['__getitem__']($98)):
						$97['__getitem__']($constant_int_1)), $constant_int_1);
				self['assertEqual']((typeof ($99=r)['__array'] != 'undefined'?
					((typeof $99['__array'][$100=$constant_int_2]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__']($constant_int_2)), $constant_int_2);
				self['assertEqual']((typeof ($101=r)['__array'] != 'undefined'?
					((typeof $101['__array'][$102=$constant_int_3]) != 'undefined'?$101['__array'][$102]:
						$101['__getitem__']($102)):
						$101['__getitem__']($constant_int_3)), $constant_int_3);
				instance = (typeof MultiInherit1 == "undefined"?$m['MultiInherit1']:MultiInherit1)('a', 'b');
				r = instance['$$call']($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual']((typeof ($103=r)['__array'] != 'undefined'?
					((typeof $103['__array'][$104=$constant_int_0]) != 'undefined'?$103['__array'][$104]:
						$103['__getitem__']($104)):
						$103['__getitem__']($constant_int_0)), 'MultiInherit1');
				self['assertEqual']((typeof ($105=r)['__array'] != 'undefined'?
					((typeof $105['__array'][$106=$constant_int_1]) != 'undefined'?$105['__array'][$106]:
						$105['__getitem__']($106)):
						$105['__getitem__']($constant_int_1)), $constant_int_1);
				self['assertEqual']((typeof ($107=r)['__array'] != 'undefined'?
					((typeof $107['__array'][$108=$constant_int_2]) != 'undefined'?$107['__array'][$108]:
						$107['__getitem__']($108)):
						$107['__getitem__']($constant_int_2)), $constant_int_2);
				self['assertEqual']((typeof ($109=r)['__array'] != 'undefined'?
					((typeof $109['__array'][$110=$constant_int_3]) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__']($constant_int_3)), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNameMapping'] = $method;
			$method = $pyjs__bind_method2('testGlobalClassFactory', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,pmc;
				(typeof gregister == "undefined"?$m['gregister']:gregister)('passme', (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				(typeof gregister == "undefined"?$m['gregister']:gregister)('exchild', (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass));
				(typeof gregister == "undefined"?$m['gregister']:gregister)('mscp1', (typeof ExampleMultiSuperclassParent1 == "undefined"?$m['ExampleMultiSuperclassParent1']:ExampleMultiSuperclassParent1));
				pmc = (typeof ggetObject == "undefined"?$m['ggetObject']:ggetObject)('passme');
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass', 'foo !in PassMeAClass');
				try {
					pmc = (typeof ggetObject == "undefined"?$m['ggetObject']:ggetObject)('mscp1', $constant_int_5);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual']($p['getattr'](pmc, 'x'), $constant_int_5, 'pass me class x != 5');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5'");
						}
					}
				}
				try {
					pmc = (typeof ggetObject == "undefined"?$m['ggetObject']:ggetObject)('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1, 'pass me class prop_a != 1');
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7, 'pass me class prop_b != 7');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalClassFactory'] = $method;
			$method = $pyjs__bind_method2('testClassFactory', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pmc,$pyjs_try_err,f;
				f = (typeof Factory == "undefined"?$m['Factory']:Factory)();
				f['register']('passme', (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass));
				try {
					pmc = f['getObjectCompilerBug']('passme');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, 'Compiler bug in class factory test');
						}
					}
				}
				pmc = f['getObject']('passme');
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				try {
					pmc = f['getObject']('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1);
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassFactory'] = $method;
			$method = $pyjs__bind_method2('testClassFactory', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pmc,$pyjs_try_err,f;
				f = (typeof Factory == "undefined"?$m['Factory']:Factory)();
				f['register']('passme', (typeof PassMeAClass == "undefined"?$m['PassMeAClass']:PassMeAClass));
				f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m['ExampleChildClass']:ExampleChildClass));
				try {
					pmc = f['getObjectCompilerBug']('passme');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, 'Compiler bug in class factory test');
						}
					}
				}
				pmc = f['getObject']('passme');
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				try {
					pmc = f['getObject']('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1);
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassFactory'] = $method;
			$method = $pyjs__bind_method2('testImportKeywords', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var imports,dict,enumerate;
				imports = $p['___import___']('imports.enum.super', null);
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](imports, '$$enum'), '$$super'), '$$var'), $constant_int_1);
				self['assertEqual'](imports['$$enum']['$$super']['$$function'](), $constant_int_2);
				enumerate = $p['___import___']('imports.enumerate', null, null, false);
				self['assertEqual']($p['getattr'](enumerate, 'list'), $constant_int_1);
				dict = $p['___import___']('imports.enumerate.dict', null, null, false);
				self['assertEqual'](dict(), $p['tuple']([$constant_int_1, $constant_int_2]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportKeywords'] = $method;
			$method = $pyjs__bind_method2('testDescriptors', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,x,decorated;
				decorated = (typeof Decorated == "undefined"?$m['Decorated']:Decorated)();
				$m['revealAccessLog'] = null;
				self['assertEqual']($p['getattr'](decorated, 'x'), $constant_int_10);
				self['assertEqual']($m['revealAccessLog'], "Retrieving var 'x'");
				decorated['__is_instance__'] && typeof decorated['__setattr__'] == 'function' ? decorated['__setattr__']('x', $constant_int_5) : $p['setattr'](decorated, 'x', $constant_int_5); 
				self['assertEqual']($m['revealAccessLog'], "Updating var 'x': 5");
				self['assertEqual']($p['getattr'](decorated, 'x'), $constant_int_5);
				$p['delattr'](decorated, 'x');
				self['assertEqual']($m['revealAccessLog'], "Deleting var 'x'");
				try {
					x = $p['getattr'](decorated, 'x');
					self['fail']("Failed to raise error for 'del decorated.x'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['fail']("Failed to raise Attribute error for 'del decorated.x'");
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDescriptors'] = $method;
			$method = $pyjs__bind_method2('testProperty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var p,$pyjs_try_err,e,x;
				p = (typeof OldStylePropertyDecorating == "undefined"?$m['OldStylePropertyDecorating']:OldStylePropertyDecorating)();
				p['__is_instance__'] && typeof p['__setattr__'] == 'function' ? p['__setattr__']('x', $constant_int_1) : $p['setattr'](p, 'x', $constant_int_1); 
				self['assertEqual']($p['getattr'](p, '_x'), $constant_int_1);
				self['assertEqual']($p['getattr'](p, 'x'), $constant_int_1);
				$p['delattr'](p, 'x');
				try {
					x = $p['getattr'](p, '_x');
					self['fail']("Failed to raise error for 'x = p._x'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['fail']("Failed to raise Attribute error for 'x = p._x'");
					}
				}
				p = (typeof NewStylePropertyDecorating == "undefined"?$m['NewStylePropertyDecorating']:NewStylePropertyDecorating)();
				p['__is_instance__'] && typeof p['__setattr__'] == 'function' ? p['__setattr__']('x', $constant_int_1) : $p['setattr'](p, 'x', $constant_int_1); 
				self['assertEqual']($p['getattr'](p, '_x'), $constant_int_1);
				self['assertEqual']($p['getattr'](p, 'x'), $constant_int_1);
				$p['delattr'](p, 'x');
				try {
					x = $p['getattr'](p, '_x');
					self['fail']("Failed to raise error for 'x = p._x'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['fail']("Failed to raise Attribute error for 'x = p._x'");
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testProperty'] = $method;
			$method = $pyjs__bind_method2('testDynamicLoading', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an example');
				self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain example');
				self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain example');
				self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is another example');
				self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is another example');
				$m['I18N']['set_locale']('en_US');
				self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an en_US example');
				self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain en_US example');
				self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain en_US example');
				self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is en_US another example');
				self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is en_US another example');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDynamicLoading'] = $method;
			$method = $pyjs__bind_method2('testClassesAnywhere', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,a;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'fa0fb287f0bc1cdca7006d91a66d9cce';
					$method = $pyjs__bind_method2('__init__', function(what) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							what = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== 'fa0fb287f0bc1cdca7006d91a66d9cce') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $bool9,$bool8,B;
						if ((($bool9=!(($bool8=what) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8['__nonzero__']=='function'?
									$bool8['__nonzero__']() :
									(typeof $bool8['__len__']=='function'?
										($bool8['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9['__nonzero__']=='function'?
										$bool9['__nonzero__']() :
										(typeof $bool9['__len__']=='function'?
											($bool9['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							B = (function(){
								var $cls_definition = new Object();
								var $method;
								$cls_definition['__module__'] = 'ClassTest';
								$cls_definition['__md5__'] = '8255068a9f89a97687c8c42c18d911f8';
								$method = $pyjs__bind_method2('__init__', function() {
									if (this['__is_instance__'] === true) {
										var self = this;
										if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
									} else {
										var self = arguments[0];
										if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
									}
									if ($pyjs['options']['arg_instance_type']) {
										if (self.prototype['__md5__'] !== '8255068a9f89a97687c8c42c18d911f8') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('v', $constant_int_0) : $p['setattr'](self, 'v', $constant_int_0); 
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
								var $bases = new Array($p['object']);
								var $data = $p['dict']();
								for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
								return $p['_create_class']('B', $p['tuple']($bases), $data);
							})();
						}
						else {
							B = (function(){
								var $cls_definition = new Object();
								var $method;
								$cls_definition['__module__'] = 'ClassTest';
								$cls_definition['__md5__'] = 'a552267e0b457d95c040157bb3737deb';
								$method = $pyjs__bind_method2('__init__', function() {
									if (this['__is_instance__'] === true) {
										var self = this;
										if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
									} else {
										var self = arguments[0];
										if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
									}
									if ($pyjs['options']['arg_instance_type']) {
										if (self.prototype['__md5__'] !== 'a552267e0b457d95c040157bb3737deb') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
								var $bases = new Array($p['object']);
								var $data = $p['dict']();
								for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
								return $p['_create_class']('B', $p['tuple']($bases), $data);
							})();
						}
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', B()) : $p['setattr'](self, 'b', B()); 
						return null;
					}
	, 1, [null,null,['self'],['what']]);
					$cls_definition['__init__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				a = A($constant_int_0);
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_0);
				a = A($constant_int_1);
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassesAnywhere'] = $method;
			$method = $pyjs__bind_method2('testClassDefinitionCode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,a,v;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '5993da1fae0cd151c7f3de3450fc6ece';
					$method = $pyjs__bind_method2('__init__', function(what) {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
						} else {
							var self = arguments[0];
							what = arguments[1];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '5993da1fae0cd151c7f3de3450fc6ece') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var B;
						B = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition['__module__'] = 'ClassTest';
							$cls_definition['__md5__'] = '8ee4527c1f93ed723299937bd8713598';
							if ((($bool11=!(($bool10=what) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10['__nonzero__']=='function'?
										$bool10['__nonzero__']() :
										(typeof $bool10['__len__']=='function'?
											($bool10['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
									false :
									(typeof $bool11=='object'?
										(typeof $bool11['__nonzero__']=='function'?
											$bool11['__nonzero__']() :
											(typeof $bool11['__len__']=='function'?
												($bool11['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$method = $pyjs__bind_method2('__init__', function() {
									if (this['__is_instance__'] === true) {
										var self = this;
										if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
									} else {
										var self = arguments[0];
										if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
									}
									if ($pyjs['options']['arg_instance_type']) {
										if (self.prototype['__md5__'] !== '8ee4527c1f93ed723299937bd8713598') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('v', $constant_int_0) : $p['setattr'](self, 'v', $constant_int_0); 
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
							}
							else {
								$method = $pyjs__bind_method2('__init__', function() {
									if (this['__is_instance__'] === true) {
										var self = this;
										if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
									} else {
										var self = arguments[0];
										if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
									}
									if ($pyjs['options']['arg_instance_type']) {
										if (self.prototype['__md5__'] !== '8ee4527c1f93ed723299937bd8713598') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
							}
							var $bases = new Array($p['object']);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
							return $p['_create_class']('B', $p['tuple']($bases), $data);
						})();
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', B()) : $p['setattr'](self, 'b', B()); 
						return null;
					}
	, 1, [null,null,['self'],['what']]);
					$cls_definition['__init__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				a = A($constant_int_0);
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_0);
				a = A($constant_int_1);
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_1);
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '749d8d43190a8e7abcad83c2dbf9d14a';
					$cls_definition['l'] = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
					$cls_definition['l']['__setitem__']($constant_int_1, $constant_int_22);
					$cls_definition['d'] = $p['dict']([]);
					$cls_definition['d']['__setitem__']('a', $constant_int_1);
					$cls_definition['l1'] = $p['list']([]);
					$cls_definition['l2'] = $p['list']([]);
					$iter2_iter = $p['range']($constant_int_4);
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						$cls_definition['i'] = $iter2_nextval;
						$cls_definition['l1']['append']($cls_definition['i']);
					}
					$cls_definition['i'] = $constant_int_0;
					while ((($bool12=((($cmp3=$cls_definition['i'])===($cmp4=$constant_int_4)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$cls_definition['l2']['append']($cls_definition['i']);
						$cls_definition['i'] = (typeof ($add13=$cls_definition['i'])==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14));
					}
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				a = A();
				v = $p['list']([$constant_int_1, $constant_int_22, $constant_int_3]);
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l'), v])));
				v = $p['dict']([['a', $constant_int_1]]);
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'd'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'd'), v])));
				v = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l1'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l1'), v])));
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l2'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l2'), v])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassDefinitionCode'] = $method;
			$method = $pyjs__bind_method2('testGenericMethodDecorators', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,res,$bool13,$add15,$add16,$pyjs_try_err,t,msg,e,exc_raised;
				obj = (typeof DecoratedMethods == "undefined"?$m['DecoratedMethods']:DecoratedMethods)();
				self['assertEqual'](obj['mtd1']('b'), '1b2');
				self['assertEqual'](obj['mtd2']('b'), '31b24');
				self['assertEqual'](obj['mtd3']('b'), 'abc');
				self['assertEqual'](obj['mtd4']('b'), 'a3b4c');
				exc_raised = false;
				try {
					res = obj['mtd5']('b');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						t = $pyjs_try_err;
						exc_raised = true;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertTrue'](exc_raised, 'TypeError wrong arguments count not raised');
				self['assertEqual'](obj['mtd_static']('b'), '5b6');
				self['assertEqual']($pyjs_kwargs_call($m['DecoratedMethods'], 'mtd_static', $p['list'](['b']), $p['dict']([]), [{}]), '5b6');
				self['assertEqual'](obj['mtd_static2']('b'), '55b66');
				self['assertEqual']($m['DecoratedMethods']['mtd_static']('b'), '5b6');
				self['assertEqual']($m['DecoratedMethods']['mtd_static2']('b'), '55b66');
				try {
					self['assertEqual'](obj['mtd_class']('b'), '7b8');
					self['assertEqual'](obj['mtd_class2']('b'), '77b88');
					self['assertEqual']($m['DecoratedMethods']['mtd_class']('b'), '7b8');
					self['assertEqual']($m['DecoratedMethods']['mtd_class2']('b'), '77b88');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						msg = $p['str'](e);
						if ((($bool13=msg['__contains__']('fnc() takes exactly 2 arguments (1 given)')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
								false :
								(typeof $bool13=='object'?
									(typeof $bool13['__nonzero__']=='function'?
										$bool13['__nonzero__']() :
										(typeof $bool13['__len__']=='function'?
											($bool13['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							msg = (typeof ($add15='bug #318 - ')==typeof ($add16=msg) && (typeof $add15=='number'||typeof $add15=='string')?
								$add15+$add16:
								$p['op_add']($add15,$add16));
							self['fail']($p['sprintf']('Bug #580 : %s ', msg));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGenericMethodDecorators'] = $method;
			$method = $pyjs__bind_method2('testExpressionInherit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '554cd43edf93dfc4ca6bed1328ceefce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $116,$114,$115,$112,$113,$111,t2,cl,T2,T,Y,X,t;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '944fe3913894dc519580e47fabe6a717';
					$method = $pyjs__bind_method2('m1', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '944fe3913894dc519580e47fabe6a717') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return $constant_int_1;
					}
	, 1, [null,null,['self']]);
					$cls_definition['m1'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				Y = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '7e77ae4c82ee5cee1adc32c605aef6f4';
					$method = $pyjs__bind_method2('m2', function() {
						if (this['__is_instance__'] === true) {
							var self = this;
							if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
						} else {
							var self = arguments[0];
							if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
						}
						if ($pyjs['options']['arg_instance_type']) {
							if (self.prototype['__md5__'] !== '7e77ae4c82ee5cee1adc32c605aef6f4') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return $constant_int_2;
					}
	, 1, [null,null,['self']]);
					$cls_definition['m2'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('Y', $p['tuple']($bases), $data);
				})();
				cl = $p['list']([$p['list'], X, Y]);
				T = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = '75a6dc084162679e4d8be8c1f6b7f2e1';
					var $bases = new Array((typeof ($111=cl)['__array'] != 'undefined'?
					((typeof $111['__array'][$112=$constant_int_0]) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__']($constant_int_0)));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('T', $p['tuple']($bases), $data);
				})();
				self['assertEqual'](T($p['list']([$constant_int_1])), $p['list']([$constant_int_1]));
				T = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'b7daa203b745bc7abfe593387cf1b1a2';
					var $bases = new Array((typeof ($113=cl)['__array'] != 'undefined'?
					((typeof $113['__array'][$114=$constant_int_1]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__']($constant_int_1)),(typeof ($115=cl)['__array'] != 'undefined'?
					((typeof $115['__array'][$116=$constant_int_2]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__']($constant_int_2)));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('T', $p['tuple']($bases), $data);
				})();
				t = T();
				self['assertEqual'](t['m1'](), $constant_int_1);
				self['assertEqual'](t['m2'](), $constant_int_2);
				T2 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'ClassTest';
					$cls_definition['__md5__'] = 'a3dc7a416e060b5ed3a949ba2cff4797';
					var $bases = new Array($p['type'](t));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('T2', $p['tuple']($bases), $data);
				})();
				t2 = T2();
				self['assertEqual'](t2['m1'](), $constant_int_1);
				self['assertEqual'](t2['m2'](), $constant_int_2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExpressionInherit'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassTest', $p['tuple']($bases), $data);
		})();
		$m['PassMeAClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'b337f4f10c791943b46549d4adb06130';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b337f4f10c791943b46549d4adb06130') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('foo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b337f4f10c791943b46549d4adb06130') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'foo in PassMeAClass';
			}
	, 1, [null,null,['self']]);
			$cls_definition['foo'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PassMeAClass', $p['tuple']($bases), $data);
		})();
		$m['PassMeAClassFunction'] = function(klass) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var c;
			c = klass();
			return c['foo']();
		};
		$m['PassMeAClassFunction']['__name__'] = 'PassMeAClassFunction';

		$m['PassMeAClassFunction']['__bind_type__'] = 0;
		$m['PassMeAClassFunction']['__args__'] = [null,null,['klass']];
		$m['method'] = function(self) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $constant_int_1;
		};
		$m['method']['__name__'] = 'method';

		$m['method']['__bind_type__'] = 0;
		$m['method']['__args__'] = [null,null,['self']];
		$m['ExampleClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '41937b900cf6125b123dbef43d945d98';
			$cls_definition['x'] = 'test';
			$cls_definition['a'] = $constant_int_1;
			$cls_definition['b'] = $constant_int_2;
			$cls_definition['c'] = $p['op_bitor2']($cls_definition['a'], $cls_definition['b']);
			$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var cls = this['prototype'];

				return $p['tuple']([cls, arg]);
			}
	, 2, [null,null,['cls'],['arg']]);
			$cls_definition['sampleClassMethod'] = $method;
			$method = $pyjs__bind_method2('sampleClassMethodVarargs', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
    var cls = this['prototype'];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([cls, args]);
			}
	, 2, ['args',null,['cls']]);
			$cls_definition['sampleClassMethodVarargs'] = $method;
			$method = $pyjs__bind_method2('sampleClassMethodKwargs', function(a, b, c) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
    var cls = this['prototype'];
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
				if (typeof c == 'undefined') c=arguments['callee']['__args__'][5][1];

				return $p['tuple']([cls, a, b, c]);
			}
	, 2, [null,null,['cls'],['a', $constant_int_0],['b', $constant_int_1],['c', $constant_int_2]]);
			$cls_definition['sampleClassMethodKwargs'] = $method;
			$method = $pyjs__bind_method2('sampleStaticMethod', function(arg) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return arg;
			}
	, 3, [null,null,['arg']]);
			$cls_definition['sampleStaticMethod'] = $method;
			$method = $pyjs__bind_method2('shouldntWork', function() {
				if (this['__is_instance__'] === true) {
					var arg = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var arg = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (arg.prototype['__md5__'] !== '41937b900cf6125b123dbef43d945d98') {
						if (!$p['_isinstance'](arg, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], arg);
						}
					}
				}
				var $add20,$add17,$add18,$add19;
				return (typeof ($add19=(typeof ($add17='before')==typeof ($add18=arg) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20='after') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
			}
	, 1, [null,null,['arg']]);
			$cls_definition['shouldntWork'] = $method;
			$cls_definition['oldIdiomStaticMethod'] = $p['staticmethod']($p['staticmethod']($cls_definition['shouldntWork']));
			$method = $pyjs__bind_method2('fail_a', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '41937b900cf6125b123dbef43d945d98') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return (typeof a == "undefined"?$m['a']:a);
			}
	, 1, [null,null,['self']]);
			$cls_definition['fail_a'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleClass', $p['tuple']($bases), $data);
		})();
		$m['x'] = 'global test';
		$m['ExampleParentClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '340349b74683e15d5865adcfce0e7c21';
			$cls_definition['x'] = 'test';
			$method = $pyjs__bind_method2('__init__', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '340349b74683e15d5865adcfce0e7c21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('prop_a', a) : $p['setattr'](self, 'prop_a', a); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('prop_b', b) : $p['setattr'](self, 'prop_b', b); 
				return null;
			}
	, 1, [null,null,['self'],['a', $constant_int_1],['b', $constant_int_2]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var cls = this['prototype'];

				return $p['tuple']([cls, arg]);
			}
	, 2, [null,null,['cls'],['arg']]);
			$cls_definition['sampleClassMethod'] = $method;
			$method = $pyjs__bind_method2('get_x', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '340349b74683e15d5865adcfce0e7c21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_x'] = $method;
			$method = $pyjs__bind_method2('inert', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '340349b74683e15d5865adcfce0e7c21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['inert'] = $method;
			$method = $pyjs__bind_method2('global_x1', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '340349b74683e15d5865adcfce0e7c21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['x'];
			}
	, 1, [null,null,['self']]);
			$cls_definition['global_x1'] = $method;
			$method = $pyjs__bind_method2('global_x2', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '340349b74683e15d5865adcfce0e7c21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['x'];
			}
	, 1, [null,null,['self']]);
			$cls_definition['global_x2'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentClass', $p['tuple']($bases), $data);
		})();
		$m['ExampleChildClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '02a67c79d5a7b7fb44ee3061fd0ceaf6';
			$method = $pyjs__bind_method2('__init__', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02a67c79d5a7b7fb44ee3061fd0ceaf6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];

				$pyjs_kwargs_call($m['ExampleParentClass'], '__init__', null, null, [{'b':b}, self]);
				return null;
			}
	, 1, [null,null,['self'],['a', $constant_int_11],['b', $constant_int_22]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['ExampleParentClass']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildClass', $p['tuple']($bases), $data);
		})();
		$m['ExampleParentObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'ec7c63a6d0256dce1e11b4dc86eb4aed';
			$cls_definition['x'] = $p['list']([]);
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentObject', $p['tuple']($bases), $data);
		})();
		$m['ExampleChildObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'c8d918498c692039e18361eff950130a';
			var $bases = new Array($m['ExampleParentObject']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildObject', $p['tuple']($bases), $data);
		})();
		$m['ExampleGrandParentConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '7d0406396c22123839ce3ef0303a6c62';
			$cls_definition['z'] = 'grandparent';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7d0406396c22123839ce3ef0303a6c62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', 'older') : $p['setattr'](self, 'r', 'older'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('older', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7d0406396c22123839ce3ef0303a6c62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('w', $constant_int_2) : $p['setattr'](self, 'w', $constant_int_2); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['older'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleGrandParentConstructor', $p['tuple']($bases), $data);
		})();
		$m['ExampleParentConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'd3e7c6596e80b4c7b461bc3c80ba35ac';
			$cls_definition['y'] = 'parent';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd3e7c6596e80b4c7b461bc3c80ba35ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', 'test') : $p['setattr'](self, 'x', 'test'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('dosomething', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd3e7c6596e80b4c7b461bc3c80ba35ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('m', $constant_int_1) : $p['setattr'](self, 'm', $constant_int_1); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['dosomething'] = $method;
			var $bases = new Array($m['ExampleGrandParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentConstructor', $p['tuple']($bases), $data);
		})();
		$m['ExampleChildConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '44ab87b24a8c91b4fbe569a1749882a1';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '44ab87b24a8c91b4fbe569a1749882a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildConstructor', $p['tuple']($bases), $data);
		})();
		$m['ExampleChildNoConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'fd1ef99a68a9505f191b067aaaa14fcd';
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildNoConstructor', $p['tuple']($bases), $data);
		})();
		$m['ExampleChildExplicitConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '55e279a29c7ec8f576be735bc1bb7f83';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '55e279a29c7ec8f576be735bc1bb7f83') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['ExampleParentConstructor']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildExplicitConstructor', $p['tuple']($bases), $data);
		})();
		$m['ObjectClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'c34c95c9cd4b129d30bf6729380db0a8';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c34c95c9cd4b129d30bf6729380db0a8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('prop', $constant_int_1) : $p['setattr'](self, 'prop', $constant_int_1); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ObjectClass', $p['tuple']($bases), $data);
		})();
		$m['OtherClass1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '9167e2ad3bcfdad3f2233f98c5f67294';
			$method = $pyjs__bind_method2('__new__', function(cls) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $m['ObjectClass']();
			}
	, 3, [null,null,['cls']]);
			$cls_definition['__new__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass1', $p['tuple']($bases), $data);
		})();
		$m['OtherSubclass1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'aae3f40549b278728f441f60d8904060';
			var $bases = new Array($m['OtherClass1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherSubclass1', $p['tuple']($bases), $data);
		})();
		$m['OtherClass2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'f6721bc496b296e32d0778391c642511';
			$cls_definition['init'] = false;
			$method = $pyjs__bind_method2('__new__', function(cls) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $m['ObjectClass']['__new__'](cls);
			}
	, 3, [null,null,['cls']]);
			$cls_definition['__new__'] = $method;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6721bc496b296e32d0778391c642511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('init', true) : $p['setattr'](self, 'init', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass2', $p['tuple']($bases), $data);
		})();
		$m['OtherClass3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '447dbe66e380ae979b8079784af9834b';
			$method = $pyjs__bind_method2('__new__', function(cls, x, y) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var val;
				val = $p['object']['__new__'](cls);
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				val['__is_instance__'] && typeof val['__setattr__'] == 'function' ? val['__setattr__']('x', $tupleassign2[0]) : $p['setattr'](val, 'x', $tupleassign2[0]); 
				val['__is_instance__'] && typeof val['__setattr__'] == 'function' ? val['__setattr__']('y', $tupleassign2[1]) : $p['setattr'](val, 'y', $tupleassign2[1]); 
				return val;
			}
	, 3, [null,null,['cls'],['x'],['y']]);
			$cls_definition['__new__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass3', $p['tuple']($bases), $data);
		})();
		$m['OtherClass4Mixin'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'f45c79b26f88fa33f33d521badca0487';
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass4Mixin', $p['tuple']($bases), $data);
		})();
		$m['OtherClass4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '01de5ac39b5134fbaa8def8aa805fb8c';
			$method = $pyjs__bind_method2('__new__', function(cls) {
				if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof cls != 'undefined') {
						if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cls;
							cls = arguments[1];
						}
					} else {
					}
				}

				return $pyjs_kwargs_call($p['$$super']($m['OtherClass4'], cls), '__new__', args, kwargs, [{}, cls]);
			}
	, 3, ['args',['kwargs'],['cls']]);
			$cls_definition['__new__'] = $method;
			var $bases = new Array($p['object'],$m['OtherClass4Mixin']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass4', $p['tuple']($bases), $data);
		})();
		$m['OtherSubclass4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '75fe1df539c1834b6e280c8c6c07c5d2';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '75fe1df539c1834b6e280c8c6c07c5d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('args', args) : $p['setattr'](self, 'args', args); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('kwargs', kwargs) : $p['setattr'](self, 'kwargs', kwargs); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['OtherClass4']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherSubclass4', $p['tuple']($bases), $data);
		})();
		$m['ExampleMultiSuperclassParent1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'e7cf5423bd560a3de7b7aebc9949d226';
			$cls_definition['x'] = 'Initial X';
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7cf5423bd560a3de7b7aebc9949d226') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7cf5423bd560a3de7b7aebc9949d226') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassParent1', $p['tuple']($bases), $data);
		})();
		$m['ExampleMultiSuperclassParent2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '96c5342a0c2a9f6aca218b4871833826';
			$cls_definition['y'] = 'Initial Y';
			$method = $pyjs__bind_method2('__init__', function(y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					y = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '96c5342a0c2a9f6aca218b4871833826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				return null;
			}
	, 1, [null,null,['self'],['y']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '96c5342a0c2a9f6aca218b4871833826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'y');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassParent2', $p['tuple']($bases), $data);
		})();
		$m['ExampleMultiSuperclassNoConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '0f237d00aa05ee0388d9a5cb4ad07da2';
			$cls_definition['z'] = 'Initial Z';
			var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassNoConstructor', $p['tuple']($bases), $data);
		})();
		$m['ExampleMultiSuperclassExplicitConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '3e36d8549edbcac2a95534980141016f';
			$cls_definition['z'] = 'Initial Z';
			$method = $pyjs__bind_method2('__init__', function(z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					z = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3e36d8549edbcac2a95534980141016f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('z', z) : $p['setattr'](self, 'z', z); 
				return null;
			}
	, 1, [null,null,['self'],['z']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3e36d8549edbcac2a95534980141016f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'z');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			$method = $pyjs__bind_method2('get_values', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3e36d8549edbcac2a95534980141016f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return ':'['join']($p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'z')]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_values'] = $method;
			var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassExplicitConstructor', $p['tuple']($bases), $data);
		})();
		$m['ClassArguments'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '593635626ab66c48d8e68f74c118b55b';
			$method = $pyjs__bind_method2('no_args', function() {
				if (this['__is_instance__'] === true) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != -1) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']+1);
				} else {
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
				}

				return false;
			}
	, 1, [null,null]);
			$cls_definition['no_args'] = $method;
			$method = $pyjs__bind_method2('self_arg', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '593635626ab66c48d8e68f74c118b55b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return true;
			}
	, 1, [null,null,['self']]);
			$cls_definition['self_arg'] = $method;
			$method = $pyjs__bind_method2('two_args', function(arg1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					arg1 = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '593635626ab66c48d8e68f74c118b55b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return arg1;
			}
	, 1, [null,null,['self'],['arg1']]);
			$cls_definition['two_args'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassArguments', $p['tuple']($bases), $data);
		})();
		$m['MultiBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '16a7d70788cd882a437afcaaaf79fcc0';
			$cls_definition['$$name'] = 'MultiBase';
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16a7d70788cd882a437afcaaaf79fcc0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_x', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16a7d70788cd882a437afcaaaf79fcc0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_x'] = $method;
			$method = $pyjs__bind_method2('set_x', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16a7d70788cd882a437afcaaaf79fcc0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['set_x'] = $method;
			$method = $pyjs__bind_method2('$$prototype', function($$default, $$arguments, $$this) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					$$arguments = arguments[2];
					$$this = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16a7d70788cd882a437afcaaaf79fcc0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$default,$$this,$$arguments;
				return $p['tuple']([$p['getattr'](self, '$$name'), $$default, $$arguments, $$this]);
			}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
			$cls_definition['$$prototype'] = $method;
			$method = $pyjs__bind_method2('getName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '16a7d70788cd882a437afcaaaf79fcc0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'MultiBase';
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiBase', $p['tuple']($bases), $data);
		})();
		$m['MultiInherit1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '6907fb3965593b3c2fafdd66537bf027';
			$cls_definition['$$name'] = 'MultiInherit1';
			$method = $pyjs__bind_method2('__init__', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6907fb3965593b3c2fafdd66537bf027') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				$m['MultiBase']['__init__'](self, x);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_y', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6907fb3965593b3c2fafdd66537bf027') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'y');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_y'] = $method;
			$method = $pyjs__bind_method2('$$call', function($$default, $$arguments, $$this) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					$$arguments = arguments[2];
					$$this = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6907fb3965593b3c2fafdd66537bf027') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$default,$$this,$$arguments;
				return self['$$prototype']($$default, $$arguments, $$this);
			}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
			$cls_definition['$$call'] = $method;
			var $bases = new Array($m['MultiBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiInherit1', $p['tuple']($bases), $data);
		})();
		$m['MultiInherit2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'ca155b12fa1dad46cc721cc080500a3b';
			$cls_definition['$$name'] = 'MultiInherit2';
			$method = $pyjs__bind_method2('__init__', function(x, z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					z = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca155b12fa1dad46cc721cc080500a3b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('z', z) : $p['setattr'](self, 'z', z); 
				$m['MultiBase']['__init__'](self, x);
				return null;
			}
	, 1, [null,null,['self'],['x'],['z']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get_z', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca155b12fa1dad46cc721cc080500a3b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'z');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_z'] = $method;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca155b12fa1dad46cc721cc080500a3b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'MultiInherit2';
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$method = $pyjs__bind_method2('getName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca155b12fa1dad46cc721cc080500a3b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'MultiInherit2';
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			var $bases = new Array($m['MultiBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiInherit2', $p['tuple']($bases), $data);
		})();
		$m['DoubleInherit'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '8cc491ad2ff71dc871de491dd2a5e37a';
			$cls_definition['$$name'] = 'DoubleInherit';
			$method = $pyjs__bind_method2('__init__', function(x, y, z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8cc491ad2ff71dc871de491dd2a5e37a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['MultiInherit1']['__init__'](self, x, y);
				$m['MultiInherit2']['__init__'](self, x, z);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['MultiInherit1'],$m['MultiInherit2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DoubleInherit', $p['tuple']($bases), $data);
		})();
		$m['DoubleInheritReversed'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '4218a32c8df6145e3ac2895b0655472e';
			$cls_definition['$$name'] = 'DoubleInheritReversed';
			$method = $pyjs__bind_method2('__init__', function(x, y, z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4218a32c8df6145e3ac2895b0655472e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['MultiInherit1']['__init__'](self, x, y);
				$m['MultiInherit2']['__init__'](self, x, z);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['MultiInherit2'],$m['MultiInherit1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DoubleInheritReversed', $p['tuple']($bases), $data);
		})();
		$m['RecurseMe'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '8aca335804e7059276653f64423ecbf9';
			$cls_definition['chain'] = $p['list']([]);
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8aca335804e7059276653f64423ecbf9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['chain']['append']($constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
		})();
		$m['RecurseMe'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '76a545c09940a19f4588a5378ab2908f';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '76a545c09940a19f4588a5378ab2908f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($p['getattr'](self, '__class__'), self)['__init__']();
				self['chain']['append']($constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['RecurseMe']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
		})();
		$m['Factory'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = 'ae17a303a25b075f8d76cc93f459fc35';
			$cls_definition['_classes'] = $p['dict']([]);
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae17a303a25b075f8d76cc93f459fc35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('register', function(className, classe) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					classe = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae17a303a25b075f8d76cc93f459fc35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr']($m['Factory'], '_classes')['__setitem__'](className, classe);
				return null;
			}
	, 1, [null,null,['self'],['className'],['classe']]);
			$cls_definition['register'] = $method;
			$method = $pyjs__bind_method2('getObjectCompilerBug', function(className) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kargs != 'undefined') args['__array']['push'](kargs);
						var kargs = arguments[arguments['length']+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kargs != 'undefined') args['__array']['push'](kargs);
						kargs = arguments[arguments['length']+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae17a303a25b075f8d76cc93f459fc35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kargs == 'undefined') {
					kargs = $p['__empty_dict']();
					if (typeof className != 'undefined') {
						if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
							kargs = className;
							className = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $117,$118;
				return $pyjs_kwargs_call(null, (typeof ($117=$p['getattr']($m['Factory'], '_classes'))['__array'] != 'undefined'?
					((typeof $117['__array'][$118=className]) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__'](className)), args, kargs, [{}]);
			}
	, 1, ['args',['kargs'],['self'],['className']]);
			$cls_definition['getObjectCompilerBug'] = $method;
			$method = $pyjs__bind_method2('getObject', function(className) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kargs != 'undefined') args['__array']['push'](kargs);
						var kargs = arguments[arguments['length']+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kargs != 'undefined') args['__array']['push'](kargs);
						kargs = arguments[arguments['length']+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae17a303a25b075f8d76cc93f459fc35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kargs == 'undefined') {
					kargs = $p['__empty_dict']();
					if (typeof className != 'undefined') {
						if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
							kargs = className;
							className = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var f,$119,$120;
				f = (typeof ($119=$p['getattr']($m['Factory'], '_classes'))['__array'] != 'undefined'?
					((typeof $119['__array'][$120=className]) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__'](className));
				return $pyjs_kwargs_call(null, f, args, kargs, [{}]);
			}
	, 1, ['args',['kargs'],['self'],['className']]);
			$cls_definition['getObject'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Factory', $p['tuple']($bases), $data);
		})();
		$m['gclasses'] = $p['dict']([]);
		$m['gregister'] = function(className, classe) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$m['gclasses']['__setitem__'](className, classe);
			return null;
		};
		$m['gregister']['__name__'] = 'gregister';

		$m['gregister']['__bind_type__'] = 0;
		$m['gregister']['__args__'] = [null,null,['className'],['classe']];
		$m['ggetObject'] = function(className) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

			var kargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kargs != 'undefined') args['__array']['push'](kargs);
				kargs = arguments[arguments['length']+1];
			} else {
				delete kargs['$pyjs_is_kwarg'];
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[1];
					}
				} else {
				}
			}
			var classe,$122,$121;
			classe = (typeof ($121=$m['gclasses'])['__array'] != 'undefined'?
				((typeof $121['__array'][$122=className]) != 'undefined'?$121['__array'][$122]:
					$121['__getitem__']($122)):
					$121['__getitem__'](className));
			return $pyjs_kwargs_call(null, classe, args, kargs, [{}]);
		};
		$m['ggetObject']['__name__'] = 'ggetObject';

		$m['ggetObject']['__bind_type__'] = 0;
		$m['ggetObject']['__args__'] = ['args',['kargs'],['className']];
		$m['revealAccessLog'] = null;
		$m['RevealAccess'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '8c11707a02cf2e109b817701e84b1b85';
			$method = $pyjs__bind_method2('__init__', function(initval, name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					initval = arguments[1];
					name = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c11707a02cf2e109b817701e84b1b85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof initval == 'undefined') initval=arguments['callee']['__args__'][3][1];
				if (typeof name == 'undefined') name=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('val', initval) : $p['setattr'](self, 'val', initval); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', name) : $p['setattr'](self, '$$name', name); 
				return null;
			}
	, 1, [null,null,['self'],['initval', null],['name', 'var']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					objtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c11707a02cf2e109b817701e84b1b85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof objtype == 'undefined') objtype=arguments['callee']['__args__'][4][1];

				$m['revealAccessLog'] = $p['sprintf']('Retrieving %s', $p['getattr'](self, '$$name'));
				return $p['getattr'](self, 'val');
			}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
			$cls_definition['__get__'] = $method;
			$method = $pyjs__bind_method2('__set__', function(obj, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					val = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c11707a02cf2e109b817701e84b1b85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['revealAccessLog'] = $p['sprintf']('Updating %s: %s', $p['tuple']([$p['getattr'](self, '$$name'), val]));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('val', val) : $p['setattr'](self, 'val', val); 
				return null;
			}
	, 1, [null,null,['self'],['obj'],['val']]);
			$cls_definition['__set__'] = $method;
			$method = $pyjs__bind_method2('__delete__', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c11707a02cf2e109b817701e84b1b85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['revealAccessLog'] = $p['sprintf']('Deleting %s', $p['getattr'](self, '$$name'));
				$p['delattr'](self, 'val');
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['__delete__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RevealAccess', $p['tuple']($bases), $data);
		})();
		$m['Decorated'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '38be1e73ec52ea62e4be9eb01aac5a87';
			$cls_definition['x'] = $m['RevealAccess']($constant_int_10, "var 'x'");
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Decorated', $p['tuple']($bases), $data);
		})();
		$m['OldStylePropertyDecorating'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '86b2162551b09b233b28d23dbbd6e16a';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '86b2162551b09b233b28d23dbbd6e16a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_x', null) : $p['setattr'](self, '_x', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getx', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '86b2162551b09b233b28d23dbbd6e16a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getx'] = $method;
			$method = $pyjs__bind_method2('setx', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '86b2162551b09b233b28d23dbbd6e16a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_x', value) : $p['setattr'](self, '_x', value); 
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setx'] = $method;
			$method = $pyjs__bind_method2('delx', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '86b2162551b09b233b28d23dbbd6e16a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['delattr'](self, '_x');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['delx'] = $method;
			$cls_definition['x'] = $p['property']($p['staticmethod']($cls_definition['getx']), $p['staticmethod']($cls_definition['setx']), $p['staticmethod']($cls_definition['delx']), "I'm the 'x' property.");
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OldStylePropertyDecorating', $p['tuple']($bases), $data);
		})();
		$m['Property'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '8db1e3fa7e348e046374dc930cb17869';
			$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					fget = arguments[1];
					fset = arguments[2];
					fdel = arguments[3];
					doc = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fget == 'undefined') fget=arguments['callee']['__args__'][3][1];
				if (typeof fset == 'undefined') fset=arguments['callee']['__args__'][4][1];
				if (typeof fdel == 'undefined') fdel=arguments['callee']['__args__'][5][1];
				if (typeof doc == 'undefined') doc=arguments['callee']['__args__'][6][1];
				var $or1,$or2,$bool14,$bool15,$bool16,$bool17;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fget', fget) : $p['setattr'](self, 'fget', fget); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fset', fset) : $p['setattr'](self, 'fset', fset); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fdel', fdel) : $p['setattr'](self, 'fdel', fdel); 
				if ((($bool17=((($bool15=$or1=!(($bool14=$p['op_is'](doc, null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15['__nonzero__']=='function'?
							$bool15['__nonzero__']() :
							(typeof $bool15['__len__']=='function'?
								($bool15['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!(($bool16=$p['hasattr'](fget, '__doc__')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__doc__', doc) : $p['setattr'](self, '__doc__', doc); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__doc__', $p['getattr'](fget, '__doc__')) : $p['setattr'](self, '__doc__', $p['getattr'](fget, '__doc__')); 
				}
				return null;
			}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					objtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof objtype == 'undefined') objtype=arguments['callee']['__args__'][4][1];
				var $bool18,$bool19;
				if ((($bool18=$p['op_is'](obj, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18['__nonzero__']=='function'?
								$bool18['__nonzero__']() :
								(typeof $bool18['__len__']=='function'?
									($bool18['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self;
				}
				if ((($bool19=$p['op_is']($p['getattr'](self, 'fget'), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = 'unreadable attribute';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				return self['fget'](obj);
			}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
			$cls_definition['__get__'] = $method;
			$method = $pyjs__bind_method2('__set__', function(obj, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool20;
				if ((($bool20=$p['op_is']($p['getattr'](self, 'fset'), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = "can't set attribute";
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				self['fset'](obj, value);
				return null;
			}
	, 1, [null,null,['self'],['obj'],['value']]);
			$cls_definition['__set__'] = $method;
			$method = $pyjs__bind_method2('__delete__', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool21;
				if ((($bool21=$p['op_is']($p['getattr'](self, 'fdel'), null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = "can't delete attribute";
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				self['fdel'](obj);
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['__delete__'] = $method;
			$method = $pyjs__bind_method2('setter', function(fset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fset', fset) : $p['setattr'](self, 'fset', fset); 
				return self;
			}
	, 1, [null,null,['self'],['fset']]);
			$cls_definition['setter'] = $method;
			$method = $pyjs__bind_method2('deleter', function(fdel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fdel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fdel', fdel) : $p['setattr'](self, 'fdel', fdel); 
				return self;
			}
	, 1, [null,null,['self'],['fdel']]);
			$cls_definition['deleter'] = $method;
			$method = $pyjs__bind_method2('property_setter', function(fset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__setattr__']('fset', fset);
				return self;
			}
	, 1, [null,null,['self'],['fset']]);
			$cls_definition['property_setter'] = $method;
			$method = $pyjs__bind_method2('property_deleter', function(fdel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fdel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8db1e3fa7e348e046374dc930cb17869') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__setattr__']('fdel', fdel);
				return self;
			}
	, 1, [null,null,['self'],['fdel']]);
			$cls_definition['property_deleter'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Property', $p['tuple']($bases), $data);
		})();
		$m['property'] = $p['property'];
		if ((($bool23=!(($bool22=$p['hasattr']($m['property'], 'setter')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
			false :
			(typeof $bool22=='object'?
				(typeof $bool22['__nonzero__']=='function'?
					$bool22['__nonzero__']() :
					(typeof $bool22['__len__']=='function'?
						($bool22['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23['__nonzero__']=='function'?
						$bool23['__nonzero__']() :
						(typeof $bool23['__len__']=='function'?
							($bool23['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['property'] = $m['Property'];
		}
		$m['NewStylePropertyDecorating'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '4b3bc7627b499dabfa2137dfef5241b4';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4b3bc7627b499dabfa2137dfef5241b4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_x', null) : $p['setattr'](self, '_x', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('x', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4b3bc7627b499dabfa2137dfef5241b4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $m['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('x', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4b3bc7627b499dabfa2137dfef5241b4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_x', value) : $p['setattr'](self, '_x', value); 
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['x'] = $cls_definition['x']['setter']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('x', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4b3bc7627b499dabfa2137dfef5241b4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['delattr'](self, '_x');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $cls_definition['x']['deleter']($p['staticmethod']($method));
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NewStylePropertyDecorating', $p['tuple']($bases), $data);
		})();
		$m['SuperArg1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '639352a6185103e4bf8d6e2d780e292f';
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '639352a6185103e4bf8d6e2d780e292f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
				if (typeof c == 'undefined') c=arguments['callee']['__args__'][5][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a1_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a1_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg1', $p['tuple']($bases), $data);
		})();
		$m['SuperArg2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '323781b79c3c26b5ceb8c435f67e57e7';
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '323781b79c3c26b5ceb8c435f67e57e7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
				if (typeof c == 'undefined') c=arguments['callee']['__args__'][5][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a2_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a2_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				$pyjs_kwargs_call($p['$$super']($m['SuperArg2'], self), '__init__', null, null, [{'a':a, 'b':b, 'c':c}]);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SuperArg1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg2', $p['tuple']($bases), $data);
		})();
		$m['SuperArg3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '641710846c198c1bb20df2944c524fb5';
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641710846c198c1bb20df2944c524fb5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
				if (typeof c == 'undefined') c=arguments['callee']['__args__'][5][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a3_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a3_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				$p['$$super']($m['SuperArg3'], self)['__init__'](a, b, c);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SuperArg1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg3', $p['tuple']($bases), $data);
		})();
		$m['mdeco1'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fn1;
			fn1 = function(self, x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $add21,$add22,$add24,$bool25,$bool24,$add23;
				if ((($bool25=!(($bool24=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m['DecoratedMethods']:DecoratedMethods))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['TypeError']('fn1 - self is not instance of DecoratedMethods'));
				}
				return (typeof ($add23=(typeof ($add21='1')==typeof ($add22=f(self, x)) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($add24='2') && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
			};
			fn1['__name__'] = 'fn1';

			fn1['__bind_type__'] = 0;
			fn1['__args__'] = [null,null,['self'],['x']];
			return fn1;
		};
		$m['mdeco1']['__name__'] = 'mdeco1';

		$m['mdeco1']['__bind_type__'] = 0;
		$m['mdeco1']['__args__'] = [null,null,['f']];
		$m['mdeco2'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fn2;
			fn2 = function(self, x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $add28,$add25,$add27,$add26,$bool27,$bool26;
				if ((($bool27=!(($bool26=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m['DecoratedMethods']:DecoratedMethods))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26['__nonzero__']=='function'?
							$bool26['__nonzero__']() :
							(typeof $bool26['__len__']=='function'?
								($bool26['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['TypeError']('fn2 - self is not instance of DecoratedMethods'));
				}
				return (typeof ($add27=(typeof ($add25='3')==typeof ($add26=f(self, x)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))==typeof ($add28='4') && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
			};
			fn2['__name__'] = 'fn2';

			fn2['__bind_type__'] = 0;
			fn2['__args__'] = [null,null,['self'],['x']];
			return fn2;
		};
		$m['mdeco2']['__name__'] = 'mdeco2';

		$m['mdeco2']['__bind_type__'] = 0;
		$m['mdeco2']['__args__'] = [null,null,['f']];
		$m['mdeco_with_wrong_args'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fn_wwa;
			fn_wwa = function(x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add29,$add30,$add31,$add32;
				return (typeof ($add31=(typeof ($add29='5')==typeof ($add30=f(x)) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($add32='6') && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
			};
			fn_wwa['__name__'] = 'fn_wwa';

			fn_wwa['__bind_type__'] = 0;
			fn_wwa['__args__'] = [null,null,['x']];
			return fn_wwa;
		};
		$m['mdeco_with_wrong_args']['__name__'] = 'mdeco_with_wrong_args';

		$m['mdeco_with_wrong_args']['__bind_type__'] = 0;
		$m['mdeco_with_wrong_args']['__args__'] = [null,null,['f']];
		$m['mdeco_static'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fns;
			fns = function(x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add35,$add36,$add34,$add33;
				return (typeof ($add35=(typeof ($add33='5')==typeof ($add34=f(x)) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36='6') && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
			};
			fns['__name__'] = 'fns';

			fns['__bind_type__'] = 0;
			fns['__args__'] = [null,null,['x']];
			return fns;
		};
		$m['mdeco_static']['__name__'] = 'mdeco_static';

		$m['mdeco_static']['__bind_type__'] = 0;
		$m['mdeco_static']['__args__'] = [null,null,['f']];
		$m['mdeco_class'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fnc;
			fnc = function(cls, x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $add38,$add39,$add37,$add40,$bool28;
				if ((($bool28=!$p['op_is'](cls, (typeof DecoratedMethods == "undefined"?$m['DecoratedMethods']:DecoratedMethods))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['TypeError']('fnc - cls is not DecoratedMethods'));
				}
				return (typeof ($add39=(typeof ($add37='7')==typeof ($add38=f(cls, x)) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)))==typeof ($add40='8') && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
			};
			fnc['__name__'] = 'fnc';

			fnc['__bind_type__'] = 0;
			fnc['__args__'] = [null,null,['cls'],['x']];
			return fnc;
		};
		$m['mdeco_class']['__name__'] = 'mdeco_class';

		$m['mdeco_class']['__bind_type__'] = 0;
		$m['mdeco_class']['__args__'] = [null,null,['f']];
		$m['DecoratedMethods'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ClassTest';
			$cls_definition['__md5__'] = '5bcb758e0c4abb612e5e0186eb943fc5';
			$method = $pyjs__bind_method2('mtd1', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5bcb758e0c4abb612e5e0186eb943fc5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd1'] = $pyjs__decorated_method('mtd1', $m['mdeco1']($p['staticmethod']($method)), 1);
			$method = $pyjs__bind_method2('mtd2', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5bcb758e0c4abb612e5e0186eb943fc5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd2'] = $pyjs__decorated_method('mtd2', $pyjs__decorated_method('mtd2', $m['mdeco2']($m['mdeco1']($p['staticmethod']($method))), 1), 1);
			$method = $pyjs__bind_method2('mtd3', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5bcb758e0c4abb612e5e0186eb943fc5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd3'] = $pyjs__decorated_method('mtd3', $m['imports']['decors']['othermoduledeco1']($p['staticmethod']($method)), 1);
			$method = $pyjs__bind_method2('mtd4', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5bcb758e0c4abb612e5e0186eb943fc5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd4'] = $pyjs__decorated_method('mtd4', $pyjs__decorated_method('mtd4', $m['imports']['decors']['othermoduledeco1']($m['mdeco2']($p['staticmethod']($method))), 1), 1);
			$method = $pyjs__bind_method2('mtd5', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5bcb758e0c4abb612e5e0186eb943fc5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return x;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd5'] = $pyjs__decorated_method('mtd5', $m['mdeco_with_wrong_args']($p['staticmethod']($method)), 1);
			$method = $pyjs__bind_method2('mtd_static', function(x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return x;
			}
	, 3, [null,null,['x']]);
			$cls_definition['mtd_static'] = $p['staticmethod']($m['mdeco_static']($p['staticmethod']($method)));
			$method = $pyjs__bind_method2('mtd_static2', function(x) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return x;
			}
	, 3, [null,null,['x']]);
			$cls_definition['mtd_static2'] = $p['staticmethod']($m['mdeco_static']($m['mdeco_static']($p['staticmethod']($method))));
			$method = $pyjs__bind_method2('mtd_class', function(x) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var cls = this['prototype'];

				return x;
			}
	, 2, [null,null,['cls'],['x']]);
			$cls_definition['mtd_class'] = $m['mdeco_class']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('mtd_class2', function(x) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var cls = this['prototype'];

				return x;
			}
	, 2, [null,null,['cls'],['x']]);
			$cls_definition['mtd_class2'] = $m['mdeco_class']($m['mdeco_class']($p['staticmethod']($method)));
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedMethods', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ClassTest */


/* end module: ClassTest */


/*
PYJS_DEPS: ['sys', 'UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'imports.circ1', 'imports', 'imports.exec_order', 'imports.imports', 'I18N', 'imports.classes.WithAttribute', 'imports.classes', 'imports.decors', 'imports.child', 'imports.enum.super', 'imports.enum', 'imports.enumerate', 'imports.enumerate.dict']
*/
