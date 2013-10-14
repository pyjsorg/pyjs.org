/* start module: SetTest */
$pyjs['loaded_modules']['SetTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['SetTest']['__was_initialized__']) return $pyjs['loaded_modules']['SetTest'];
	var $m = $pyjs['loaded_modules']['SetTest'];
	$m['__repr__'] = function() { return '<module: SetTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SetTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_2200 = new $p['int'](2200);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['randrange'] = $p['___import___']('random.randrange', null, null, false);
		$m['shuffle'] = $p['___import___']('random.shuffle', null, null, false);
		$m['PassThru'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '75558e0f8a0192366bfe3c94d987dbdc';
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PassThru', $p['tuple']($bases), $data);
		})();
		$m['check_pass_thru'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=1;
					throw ($m['PassThru']);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$yield_value = $constant_int_1;
					$yielding = true;
					$generator_state[0] = 2;
					return $yield_value;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
				}

				return;
			};
			return $generator;
		};
		$m['check_pass_thru']['__name__'] = 'check_pass_thru';

		$m['check_pass_thru']['__bind_type__'] = 0;
		$m['check_pass_thru']['__args__'] = [null,null];
		$m['BadCmp'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '940be73323c2dfda98e841d13164551b';
			$method = $pyjs__bind_method2('__hash__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '940be73323c2dfda98e841d13164551b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $constant_int_1;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__hash__'] = $method;
			$method = $pyjs__bind_method2('__cmp__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '940be73323c2dfda98e841d13164551b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['RuntimeError']);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__cmp__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BadCmp', $p['tuple']($bases), $data);
		})();
		$m['ReprWrapper'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '9645148a44e1ed1c8c4977345625d5bc';
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9645148a44e1ed1c8c4977345625d5bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['repr']($p['getattr'](self, 'value'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ReprWrapper', $p['tuple']($bases), $data);
		})();
		$m['HashCountingInt'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'e269246c9ca5d5cd1be8873a176946ed';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e269246c9ca5d5cd1be8873a176946ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hash_count', $constant_int_0) : $p['setattr'](self, 'hash_count', $constant_int_0); 
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__hash__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e269246c9ca5d5cd1be8873a176946ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hash_count', (typeof ($add1=$p['getattr'](self, 'hash_count'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'hash_count', (typeof ($add1=$p['getattr'](self, 'hash_count'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				return $p['int']['__hash__'](self);
			}
	, 1, [null,null,['self']]);
			$cls_definition['__hash__'] = $method;
			var $bases = new Array($p['int']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HashCountingInt', $p['tuple']($bases), $data);
		})();
		$m['TestJointOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '9fe88950c2b5aadca43d27fa45cea2f7';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
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
				var word,$assign1;
				$assign1 = 'simsalabim';
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('word', $assign1) : $p['setattr'](self, 'word', $assign1); 
				word = $assign1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherword', 'madagascar') : $p['setattr'](self, 'otherword', 'madagascar'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('letters', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') : $p['setattr'](self, 'letters', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('s', self['thetype'](word)) : $p['setattr'](self, 's', self['thetype'](word)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('d', $p['dict']['fromkeys'](word)) : $p['setattr'](self, 'd', $p['dict']['fromkeys'](word)); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_new_or_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertRaises']($p['TypeError'], $p['getattr'](self, 'thetype'), $p['list']([]), $constant_int_2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_new_or_init'] = $method;
			$method = $pyjs__bind_method2('test_uniquification', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var expected,actual;
				actual = $p['sorted']($p['getattr'](self, 's'));
				expected = $p['sorted']($p['getattr'](self, 'd'));
				self['assertEqual'](actual, expected);
				self['assertRaises']($m['PassThru'], $p['getattr'](self, 'thetype'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr'](self, 'thetype'), $p['list']([$p['list']([])]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_uniquification'] = $method;
			$method = $pyjs__bind_method2('test_len', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len2,$len1;
				self['assertEqual']((($len1=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), (($len2=$p['getattr'](self, 'd')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_len'] = $method;
			$method = $pyjs__bind_method2('test_contains', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter1_nextval,$iter1_type,$iter1_iter,s,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					c = $iter1_nextval;
					self['assertEqual']($p['getattr'](self, 's')['__contains__'](c), $p['getattr'](self, 'd')['__contains__'](c));
				}
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), '__contains__'), $p['list']([$p['list']([])]));
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'letters'))]));
				self['assert_'](s['__contains__'](self['thetype']($p['getattr'](self, 'letters'))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_contains'] = $method;
			$method = $pyjs__bind_method2('test_union', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter2_nextval,$iter2_type,$iter2_iter,$or2,C,$iter3_array,$iter3_idx,$iter2_idx,$bool1,u,$iter3_iter,$iter3_type,$or1,$iter3_nextval,$iter2_array;
				u = self['s']['union']($p['getattr'](self, 'otherword'));
				$iter2_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					c = $iter2_nextval;
					self['assertEqual'](u['__contains__'](c), ((($bool1=$or1=$p['getattr'](self, 'd')['__contains__'](c)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:$p['getattr'](self, 'otherword')['__contains__'](c)));
				}
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'union'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'union'), $p['list']([$p['list']([])]));
				$iter3_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					C = $iter3_nextval;
					self['assertEqual'](self['thetype']('abcba')['union'](C('cdc')), $p['set']('abcd'));
					self['assertEqual'](self['thetype']('abcba')['union'](C('efgfe')), $p['set']('abcefg'));
					self['assertEqual'](self['thetype']('abcba')['union'](C('ccb')), $p['set']('abc'));
					self['assertEqual'](self['thetype']('abcba')['union'](C('ef')), $p['set']('abcef'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union'] = $method;
			$method = $pyjs__bind_method2('test_or', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				i = self['s']['union']($p['getattr'](self, 'otherword'));
				self['assertEqual']($p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				self['assertEqual']($p['op_bitor2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				try {
					v = $p['op_bitor2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('s|t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_or'] = $method;
			$method = $pyjs__bind_method2('test_intersection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$bool2,c,$iter5_idx,i,$iter4_nextval,$iter5_array,C,$iter4_idx,s,$iter5_iter,$iter4_type,$and1,$iter4_array,$iter5_type,$iter4_iter,$and2;
				i = self['s']['intersection']($p['getattr'](self, 'otherword'));
				$iter4_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					c = $iter4_nextval;
					self['assertEqual'](i['__contains__'](c), ((($bool2=$and1=$p['getattr'](self, 'd')['__contains__'](c)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](self, 'otherword')['__contains__'](c):$and1));
				}
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'intersection'), $m['check_pass_thru']());
				$iter5_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					C = $iter5_nextval;
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('cdc')), $p['set']('cc'));
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('efgfe')), $p['set'](''));
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('ccb')), $p['set']('bc'));
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('ef')), $p['set'](''));
				}
				s = self['thetype']('abcba');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,$or3,s2,larg,expected,$iter7_type,$or4,C,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$bool3,$iter6_array,$bool6,$iter8_nextval,$bool4,$iter7_idx,actual,rarg,$iter7_nextval,f,$iter7_array,$iter8_array,s1;
				if ((($bool4=!(($bool3=$p['hasattr']($p['set'], 'isdisjoint')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4['__nonzero__']=='function'?
								$bool4['__nonzero__']() :
								(typeof $bool4['__len__']=='function'?
									($bool4['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['fail']('isdisjoint not supported');
					return null;
				}
				f = function(s1, s2) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
					var $bool5;
					return !(($bool5=$p['set'](s1)['intersection'](s2)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
				};
				f['__name__'] = 'f';

				f['__bind_type__'] = 0;
				f['__args__'] = [null,null,['s1'],['s2']];
				$iter6_iter = $p['tuple'](['', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef']);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					larg = $iter6_nextval;
					s1 = self['thetype'](larg);
					$iter7_iter = $p['tuple'](['', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef']);
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						rarg = $iter7_nextval;
						$iter8_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
						if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
							$iter8_type = 0;
						} else {
							$iter8_iter = $iter8_iter['__iter__']();
							$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter8_idx = 0;
						while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
							C = $iter8_nextval;
							s2 = C(rarg);
							actual = s1['isdisjoint'](s2);
							expected = f(s1, s2);
							self['assertEqual'](actual, expected);
							self['assert_'](((($bool6=$or3=$p['op_is'](actual, true)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
								false :
								(typeof $bool6=='object'?
									(typeof $bool6['__nonzero__']=='function'?
										$bool6['__nonzero__']() :
										(typeof $bool6['__len__']=='function'?
											($bool6['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or3:$p['op_is'](actual, false)));
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint'] = $method;
			$method = $pyjs__bind_method2('test_and', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				i = self['s']['intersection']($p['getattr'](self, 'otherword'));
				self['assertEqual']($p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				self['assertEqual']($p['op_bitand2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				try {
					v = $p['op_bitand2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('s&t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_and'] = $method;
			$method = $pyjs__bind_method2('test_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter10_nextval,$iter9_iter,i,$and4,$and3,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,C,$bool7,$iter10_type,$iter10_iter,$iter9_array,$iter10_idx;
				i = self['s']['difference']($p['getattr'](self, 'otherword'));
				$iter9_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					c = $iter9_nextval;
					self['assertEqual'](i['__contains__'](c), ((($bool7=$and3=$p['getattr'](self, 'd')['__contains__'](c)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword')['__contains__'](c):$and3));
				}
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'difference'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'difference'), $p['list']([$p['list']([])]));
				$iter10_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					C = $iter10_nextval;
					self['assertEqual'](self['thetype']('abcba')['difference'](C('cdc')), $p['set']('ab'));
					self['assertEqual'](self['thetype']('abcba')['difference'](C('efgfe')), $p['set']('abc'));
					self['assertEqual'](self['thetype']('abcba')['difference'](C('ccb')), $p['set']('a'));
					self['assertEqual'](self['thetype']('abcba')['difference'](C('ef')), $p['set']('abc'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference'] = $method;
			$method = $pyjs__bind_method2('test_symmetric_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,c,i,$iter11_iter,$iter11_type,$iter12_array,C,$iter12_iter,$iter11_array,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval;
				i = self['s']['symmetric_difference']($p['getattr'](self, 'otherword'));
				$iter11_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter['__iter__']();
					$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					c = $iter11_nextval;
					self['assertEqual'](i['__contains__'](c), $p['op_bitxor2']($p['getattr'](self, 'd')['__contains__'](c), $p['getattr'](self, 'otherword')['__contains__'](c)));
				}
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference'), $p['list']([$p['list']([])]));
				$iter12_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					C = $iter12_nextval;
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('cdc')), $p['set']('abd'));
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('efgfe')), $p['set']('abcefg'));
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('ccb')), $p['set']('a'));
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('ef')), $p['set']('abcef'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_symmetric_difference'] = $method;
			$method = $pyjs__bind_method2('test_xor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				i = self['s']['symmetric_difference']($p['getattr'](self, 'otherword'));
				self['assertEqual']($p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				self['assertEqual']($p['op_bitxor2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				try {
					v = $p['op_bitxor2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('s^t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_xor'] = $method;
			$method = $pyjs__bind_method2('test_equality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'word')));
				self['assertEqual']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'word')));
				self['assertEqual']($p['op_eq']($p['getattr'](self, 's'), $p['getattr'](self, 'word')), false);
				self['assertNotEqual']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')));
				self['assertNotEqual']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword')));
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 's'), $p['getattr'](self, 'word')), true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_equality'] = $method;
			$method = $pyjs__bind_method2('test_setOfFrozensets', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,t,$len3;
				t = $p['map']($p['frozenset'], $p['list'](['abcdef', 'bcd', 'bdcb', 'fed', 'fedccba']));
				s = self['thetype'](t);
				self['assertEqual']((($len3=s) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_setOfFrozensets'] = $method;
			$method = $pyjs__bind_method2('test_compare', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), '__cmp__'), $p['getattr'](self, 's'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_compare'] = $method;
			$method = $pyjs__bind_method2('test_sub_and_super', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp18,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp9,$cmp8,q,p,r;
				var $tupleassign1 = $p['__ass_unpack']($p['map']($p['getattr'](self, 'thetype'), $p['list'](['ab', 'abcde', 'def'])), 3, null);
				p = $tupleassign1[0];
				q = $tupleassign1[1];
				r = $tupleassign1[2];
				self['assert_'](((($cmp1=p)===($cmp2=q)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1));
				self['assert_'](((($cmp3=p)===($cmp4=q)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) < 1));
				self['assert_'](((($cmp5=q)===($cmp6=q)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) < 1));
				self['assert_'](((($cmp7=q)===($cmp8=p)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1));
				self['assert_'](((((($cmp9=q)===($cmp10=p)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1));
				self['failIf'](((($cmp11=q)===($cmp12=r)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1));
				self['failIf'](((($cmp13=q)===($cmp14=r)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) < 1));
				self['failIf'](((($cmp15=q)===($cmp16=r)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1));
				self['failIf'](((((($cmp17=q)===($cmp18=r)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))))|1) == 1));
				self['assert_']($p['set']('a')['issubset']('abc'));
				self['assert_']($p['set']('abc')['issuperset']('a'));
				self['failIf']($p['set']('a')['issubset']('cbs'));
				self['failIf']($p['set']('cbs')['issuperset']('a'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sub_and_super'] = $method;
			$method = $pyjs__bind_method2('test_badcmp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,s;
				s = self['thetype']($p['list']([$m['BadCmp']()]));
				try {
					s = self['thetype']($p['list']([$m['BadCmp'](), $m['BadCmp']()]));
					self['fail']('Issue #571 Set allows adding objects with bad comparison methods');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['RuntimeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_badcmp'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestJointOps', $p['tuple']($bases), $data);
		})();
		$m['SetTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '60b3f9ea28074b7d9e2ae258b8628f8d';
			$cls_definition['thetype'] = $p['set'];
			$method = $pyjs__bind_method2('test_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = self['thetype']();
				s['__init__']($p['getattr'](self, 'word'));
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'word')));
				s['__init__']($p['getattr'](self, 'otherword'));
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'otherword')));
				self['assertRaises']($p['TypeError'], $p['getattr'](s, '__init__'), s, $constant_int_2);
				self['assertRaises']($p['TypeError'], $p['getattr'](s, '__init__'), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_init'] = $method;
			$method = $pyjs__bind_method2('test_hash', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertRaises']($p['TypeError'], $p['hash'], $p['getattr'](self, 's'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash'] = $method;
			$method = $pyjs__bind_method2('test_clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len4;
				self['s']['clear']();
				self['assertEqual']($p['getattr'](self, 's'), $p['set']());
				self['assertEqual']((($len4=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))), $constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_clear'] = $method;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				dup = self['s']['copy']();
				self['assertEqual']($p['getattr'](self, 's'), dup);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$method = $pyjs__bind_method2('test_add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				self['s']['add']('Q');
				self['assert_']($p['getattr'](self, 's')['__contains__']('Q'));
				dup = self['s']['copy']();
				self['s']['add']('Q');
				self['assertEqual']($p['getattr'](self, 's'), dup);
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'add'), $p['list']([]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add'] = $method;
			$method = $pyjs__bind_method2('test_remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				self['s']['remove']('a');
				self['assert_'](!$p['getattr'](self, 's')['__contains__']('a'));
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), 'Q');
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), $p['list']([]));
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'word'))]));
				self['assert_'](s['__contains__'](self['thetype']($p['getattr'](self, 'word'))));
				s['remove'](self['thetype']($p['getattr'](self, 'word')));
				self['assert_'](!s['__contains__'](self['thetype']($p['getattr'](self, 'word'))));
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), self['thetype']($p['getattr'](self, 'word')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove'] = $method;
			$method = $pyjs__bind_method2('test_remove_keyerror_unpacking', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,$iter13_iter,$iter13_type,v1,v2,$pyjs_try_err,$iter13_idx,e,$2,$iter13_array,$1;
				$iter13_iter = $p['list'](['Q', $p['tuple']([$constant_int_1])]);
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					v1 = $iter13_nextval;
					try {
						self['s']['remove'](v1);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err['__name__'] == 'TryElse') {
							self['fail']();
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								e = $pyjs_try_err;
								v2 = (typeof ($1=$p['getattr'](e, 'args'))['__array'] != 'undefined'?
									((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
										$1['__getitem__']($2)):
										$1['__getitem__']($constant_int_0));
								self['assertEqual'](v1, v2);
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_keyerror_unpacking'] = $method;
			$method = $pyjs__bind_method2('test_remove_keyerror_set', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,key,$6,$4,$5,$3;
				key = self['thetype']($p['list']([$constant_int_3, $constant_int_4]));
				try {
					self['s']['remove'](key);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']();
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							e = $pyjs_try_err;
							self['assertTrue']($p['op_is']((typeof ($3=e)['__array'] != 'undefined'?
								((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
									$3['__getitem__']($4)):
									$3['__getitem__']($constant_int_0)), key), $p['sprintf']('KeyError should be %s, not %s', $p['tuple']([key, (typeof ($5=e)['__array'] != 'undefined'?
								((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
									$5['__getitem__']($6)):
									$5['__getitem__']($constant_int_0))])));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_keyerror_set'] = $method;
			$method = $pyjs__bind_method2('test_discard', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				self['s']['discard']('a');
				self['assert_'](!$p['getattr'](self, 's')['__contains__']('a'));
				self['s']['discard']('Q');
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'discard'), $p['list']([]));
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'word'))]));
				self['assert_'](s['__contains__'](self['thetype']($p['getattr'](self, 'word'))));
				s['discard'](self['thetype']($p['getattr'](self, 'word')));
				self['assert_'](!s['__contains__'](self['thetype']($p['getattr'](self, 'word'))));
				s['discard'](self['thetype']($p['getattr'](self, 'word')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard'] = $method;
			$method = $pyjs__bind_method2('test_pop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,i,elem,$len5,$iter14_iter,$iter14_idx,$iter14_nextval;
				$iter14_iter = $p['xrange']((($len5=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))));
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					elem = self['s']['pop']();
					self['assert_'](!$p['getattr'](self, 's')['__contains__'](elem));
				}
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'pop'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_pop'] = $method;
			$method = $pyjs__bind_method2('test_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter16_idx,$iter17_type,$iter16_iter,$iter17_iter,$iter15_iter,$iter16_type,$add3,$iter19_nextval,$iter19_iter,$iter18_idx,$iter16_nextval,$iter18_nextval,$iter17_nextval,C,$iter15_nextval,$iter15_array,$iter19_array,$iter17_array,$iter16_array,c,$iter19_idx,$iter18_array,$iter15_idx,q,p,s,$iter19_type,t,$add4,$iter15_type,$iter17_idx,retval;
				retval = self['s']['update']($p['getattr'](self, 'otherword'));
				self['assertEqual'](retval, null);
				t = (typeof ($add3=$p['getattr'](self, 'word'))==typeof ($add4=$p['getattr'](self, 'otherword')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$iter15_iter = t;
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					c = $iter15_nextval;
					self['assert_']($p['getattr'](self, 's')['__contains__'](c));
				}
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'update'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'update'), $p['list']([$p['list']([])]));
				$iter16_iter = $p['tuple']([$p['tuple'](['cdc', 'abcd']), $p['tuple'](['efgfe', 'abcefg']), $p['tuple'](['ccb', 'abc']), $p['tuple'](['ef', 'abcef'])]);
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter16_nextval, 2, null);
					p = $tupleassign2[0];
					q = $tupleassign2[1];
					$iter17_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
						$iter17_type = 0;
					} else {
						$iter17_iter = $iter17_iter['__iter__']();
						$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter17_idx = 0;
					while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
						C = $iter17_nextval;
						s = self['thetype']('abcba');
						self['assertEqual'](s['update'](C(p)), null);
						self['assertEqual'](s, $p['set'](q));
					}
				}
				return null;
				$iter18_iter = $p['tuple'](['cdc', 'efgfe', 'ccb', 'ef', 'abcda']);
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					p = $iter18_nextval;
					q = 'ahi';
					$iter19_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter['__iter__']();
						$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						C = $iter19_nextval;
						s = self['thetype']('abcba');
						self['assertEqual'](s['update'](C(p), C(q)), null);
						self['assertEqual'](s, $p['op_bitor']([$p['set'](s), $p['set'](p), $p['set'](q)]));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update'] = $method;
			$method = $pyjs__bind_method2('test_ior', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter20_type,c,$iter20_idx,$add6,t,$add5,$bool8,$iter20_array;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('s', $p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				t = (typeof ($add5=$p['getattr'](self, 'word'))==typeof ($add6=$p['getattr'](self, 'otherword')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				if ((($bool8=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter20_iter = t;
					if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
						$iter20_type = 0;
					} else {
						$iter20_iter = $iter20_iter['__iter__']();
						$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter20_idx = 0;
					while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
						c = $iter20_nextval;
						self['assert_']($p['getattr'](self, 's')['__contains__'](c));
					}
				}
				else {
					self['fail']('|= result not a set');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ior'] = $method;
			$method = $pyjs__bind_method2('test_intersection_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter22_array,$bool10,C,$iter23_idx,$iter22_type,$iter21_type,$iter23_iter,t,$iter22_iter,$iter21_idx,$iter21_nextval,$iter22_nextval,$and5,$and6,$iter21_iter,$iter23_array,$bool9,c,$iter23_nextval,ss,$iter22_idx,q,p,s,$add7,$iter21_array,$add8,retval;
				retval = self['s']['intersection_update']($p['getattr'](self, 'otherword'));
				self['assertEqual'](retval, null);
				t = (typeof ($add7=$p['getattr'](self, 'word'))==typeof ($add8=$p['getattr'](self, 'otherword')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$iter21_iter = t;
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					c = $iter21_nextval;
					if ((($bool10=((($bool9=$and5=$p['getattr'](self, 'otherword')['__contains__'](c)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](self, 'word')['__contains__'](c):$and5)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
							false :
							(typeof $bool10=='object'?
								(typeof $bool10['__nonzero__']=='function'?
									$bool10['__nonzero__']() :
									(typeof $bool10['__len__']=='function'?
										($bool10['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['assert_']($p['getattr'](self, 's')['__contains__'](c));
					}
					else {
						self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
					}
				}
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'intersection_update'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'intersection_update'), $p['list']([$p['list']([])]));
				$iter22_iter = $p['tuple']([$p['tuple'](['cdc', 'c']), $p['tuple'](['efgfe', '']), $p['tuple'](['ccb', 'bc']), $p['tuple'](['ef', ''])]);
				if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter['__iter__']();
					$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter22_nextval, 2, null);
					p = $tupleassign3[0];
					q = $tupleassign3[1];
					$iter23_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
						$iter23_type = 0;
					} else {
						$iter23_iter = $iter23_iter['__iter__']();
						$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter23_idx = 0;
					while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
						C = $iter23_nextval;
						s = self['thetype']('abcba');
						self['assertEqual'](s['intersection_update'](C(p)), null);
						self['assertEqual'](s, $p['set'](q));
						ss = 'abcba';
						s = self['thetype'](ss);
						t = 'cbc';
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update'] = $method;
			$method = $pyjs__bind_method2('test_iand', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,c,$iter24_idx,$bool11,$bool13,$iter24_type,$bool12,$iter24_array,$add10,t,$and7,$add9,$iter24_iter,$iter24_nextval;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('s', $p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				t = (typeof ($add9=$p['getattr'](self, 'word'))==typeof ($add10=$p['getattr'](self, 'otherword')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				if ((($bool11=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$iter24_iter = t;
					if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
						$iter24_type = 0;
					} else {
						$iter24_iter = $iter24_iter['__iter__']();
						$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter24_idx = 0;
					while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
						c = $iter24_nextval;
						if ((($bool13=((($bool12=$and7=$p['getattr'](self, 'otherword')['__contains__'](c)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['getattr'](self, 'word')['__contains__'](c):$and7)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							self['assert_']($p['getattr'](self, 's')['__contains__'](c));
						}
						else {
							self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
						}
					}
				}
				else {
					self['fail']('&= result not a set');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iand'] = $method;
			$method = $pyjs__bind_method2('test_difference_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter25_nextval,$iter26_nextval,$iter25_array,$bool14,$bool15,$iter26_idx,$iter26_array,$iter27_nextval,$iter27_array,$iter26_type,$iter27_iter,$iter26_iter,$iter27_type,$and9,C,$and10,$add11,$add12,$iter27_idx,$iter25_type,c,$iter25_iter,q,p,s,t,$iter25_idx,retval;
				retval = self['s']['difference_update']($p['getattr'](self, 'otherword'));
				self['assertEqual'](retval, null);
				t = (typeof ($add11=$p['getattr'](self, 'word'))==typeof ($add12=$p['getattr'](self, 'otherword')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				$iter25_iter = t;
				if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
					$iter25_type = 0;
				} else {
					$iter25_iter = $iter25_iter['__iter__']();
					$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter25_idx = 0;
				while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
					c = $iter25_nextval;
					if ((($bool15=((($bool14=$and9=$p['getattr'](self, 'word')['__contains__'](c)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword')['__contains__'](c):$and9)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15['__nonzero__']=='function'?
									$bool15['__nonzero__']() :
									(typeof $bool15['__len__']=='function'?
										($bool15['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['assert_']($p['getattr'](self, 's')['__contains__'](c));
					}
					else {
						self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
					}
				}
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'difference_update'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'difference_update'), $p['list']([$p['list']([])]));
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $p['list']([$p['list']([])]));
				$iter26_iter = $p['tuple']([$p['tuple'](['cdc', 'ab']), $p['tuple'](['efgfe', 'abc']), $p['tuple'](['ccb', 'a']), $p['tuple'](['ef', 'abc'])]);
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter26_nextval, 2, null);
					p = $tupleassign4[0];
					q = $tupleassign4[1];
					$iter27_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
						$iter27_type = 0;
					} else {
						$iter27_iter = $iter27_iter['__iter__']();
						$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter27_idx = 0;
					while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
						C = $iter27_nextval;
						s = self['thetype']('abcba');
						self['assertEqual'](s['difference_update'](C(p)), null);
						self['assertEqual'](s, $p['set'](q));
						s = self['thetype']('abcdefghih');
						self['assertEqual'](s, self['thetype']('abcdefghih'));
						s = self['thetype']('abcdefghih');
						s['difference_update'](C('aba'));
						self['assertEqual'](s, self['thetype']('cdefghih'));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update'] = $method;
			$method = $pyjs__bind_method2('test_isub', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and12,c,$iter28_array,$iter28_idx,$bool16,$bool17,$add14,$and11,t,$iter28_iter,$add13,$sub2,$sub1,$iter28_type,$iter28_nextval;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('s', (typeof ($sub1=$p['getattr'](self, 's'))==typeof ($sub2=$p['set']($p['getattr'](self, 'otherword'))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 's', (typeof ($sub1=$p['getattr'](self, 's'))==typeof ($sub2=$p['set']($p['getattr'](self, 'otherword'))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				t = (typeof ($add13=$p['getattr'](self, 'word'))==typeof ($add14=$p['getattr'](self, 'otherword')) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$iter28_iter = t;
				if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter['__iter__']();
					$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					c = $iter28_nextval;
					if ((($bool17=((($bool16=$and11=$p['getattr'](self, 'word')['__contains__'](c)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword')['__contains__'](c):$and11)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						self['assert_']($p['getattr'](self, 's')['__contains__'](c));
					}
					else {
						self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isub'] = $method;
			$method = $pyjs__bind_method2('test_symmetric_difference_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$iter31_nextval,C,$iter30_array,$iter30_nextval,$iter29_type,$iter31_idx,$iter29_array,$iter30_type,$iter31_array,$add15,$add16,$iter29_nextval,$iter30_idx,$iter31_type,c,$iter30_iter,$iter29_iter,q,p,s,t,$iter29_idx,retval,$iter31_iter;
				retval = self['s']['symmetric_difference_update']($p['getattr'](self, 'otherword'));
				self['assertEqual'](retval, null);
				t = (typeof ($add15=$p['getattr'](self, 'word'))==typeof ($add16=$p['getattr'](self, 'otherword')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				$iter29_iter = t;
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					c = $iter29_nextval;
					if ((($bool18=$p['op_bitxor2']($p['getattr'](self, 'word')['__contains__'](c), $p['getattr'](self, 'otherword')['__contains__'](c))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						self['assert_']($p['getattr'](self, 's')['__contains__'](c));
					}
					else {
						self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
					}
				}
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $m['check_pass_thru']());
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $p['list']([$p['list']([])]));
				$iter30_iter = $p['tuple']([$p['tuple'](['cdc', 'abd']), $p['tuple'](['efgfe', 'abcefg']), $p['tuple'](['ccb', 'a']), $p['tuple'](['ef', 'abcef'])]);
				if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
					$iter30_type = 0;
				} else {
					$iter30_iter = $iter30_iter['__iter__']();
					$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter30_idx = 0;
				while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter30_nextval, 2, null);
					p = $tupleassign5[0];
					q = $tupleassign5[1];
					$iter31_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
						$iter31_type = 0;
					} else {
						$iter31_iter = $iter31_iter['__iter__']();
						$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter31_idx = 0;
					while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
						C = $iter31_nextval;
						s = self['thetype']('abcba');
						self['assertEqual'](s['symmetric_difference_update'](C(p)), null);
						self['assertEqual'](s, $p['set'](q));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_symmetric_difference_update'] = $method;
			$method = $pyjs__bind_method2('test_ixor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$iter32_idx,$iter32_nextval,c,$iter32_type,$iter32_iter,$add17,t,$iter32_array,$add18,$bool20;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('s', $p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				t = (typeof ($add17=$p['getattr'](self, 'word'))==typeof ($add18=$p['getattr'](self, 'otherword')) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				if ((($bool19=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$iter32_iter = t;
					if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
						$iter32_type = 0;
					} else {
						$iter32_iter = $iter32_iter['__iter__']();
						$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter32_idx = 0;
					while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
						c = $iter32_nextval;
						if ((($bool20=$p['op_bitxor2']($p['getattr'](self, 'word')['__contains__'](c), $p['getattr'](self, 'otherword')['__contains__'](c))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
							self['assert_']($p['getattr'](self, 's')['__contains__'](c));
						}
						else {
							self['assert_'](!$p['getattr'](self, 's')['__contains__'](c));
						}
					}
				}
				else {
					self['fail']('^= result not a set');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ixor'] = $method;
			$method = $pyjs__bind_method2('test_inplace_on_self', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,t,$sub4;
				return null;
				t = self['s']['copy']();
				t = $p['op_bitor2'](t, t);
				self['assertEqual'](t, $p['getattr'](self, 's'));
				t = $p['op_bitand2'](t, t);
				self['assertEqual'](t, $p['getattr'](self, 's'));
				t = (typeof ($sub3=t)==typeof ($sub4=t) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				self['assertEqual'](t, self['thetype']());
				t = self['s']['copy']();
				t = $p['op_bitxor2'](t, t);
				self['assertEqual'](t, self['thetype']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inplace_on_self'] = $method;
			var $bases = new Array($m['TestJointOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SetTest', $p['tuple']($bases), $data);
		})();
		$m['SetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '463f9eb71e378cfc9e880a931108111e';
			var $bases = new Array($p['set']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SetSubclass', $p['tuple']($bases), $data);
		})();
		$m['TestSetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '8cc4b960a382ad222cb243db68bd0bcf';
			$cls_definition['thetype'] = $m['SetSubclass'];
			var $bases = new Array($m['SetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetSubclass', $p['tuple']($bases), $data);
		})();
		$m['SetSubclassWithKeywordArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'c623f2118dd78bf5e2f55739f1bddaed';
			$method = $pyjs__bind_method2('__init__', function(iterable, newarg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					iterable = arguments[1];
					newarg = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c623f2118dd78bf5e2f55739f1bddaed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof iterable == 'undefined') iterable=arguments['callee']['__args__'][3][1];
				if (typeof newarg == 'undefined') newarg=arguments['callee']['__args__'][4][1];

				$p['set']['__init__'](self, iterable);
				return null;
			}
	, 1, [null,null,['self'],['iterable', $p['list']([])],['newarg', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['set']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SetSubclassWithKeywordArgs', $p['tuple']($bases), $data);
		})();
		$m['TestSetSubclassWithKeywordArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '0af055b878522786128366d6736621db';
			$method = $pyjs__bind_method2('test_keywords_in_subclass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0af055b878522786128366d6736621db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call(null, $m['SetSubclassWithKeywordArgs'], null, null, [{'newarg':$constant_int_1}]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_keywords_in_subclass'] = $method;
			var $bases = new Array($m['SetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetSubclassWithKeywordArgs', $p['tuple']($bases), $data);
		})();
		$m['FrozenSetTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'de78efd26abd603ffb20539a12145d42';
			$cls_definition['thetype'] = $p['frozenset'];
			$method = $pyjs__bind_method2('test_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = self['thetype']($p['getattr'](self, 'word'));
				s['__init__']($p['getattr'](self, 'otherword'));
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'word')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_init'] = $method;
			$method = $pyjs__bind_method2('test_singleton_empty_frozenset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len6,efs,f;
				f = $p['frozenset']();
				efs = $p['list']([$p['frozenset'](), $p['frozenset']($p['list']([])), $p['frozenset']($p['tuple']([])), $p['frozenset'](''), $p['frozenset'](), $p['frozenset']($p['list']([])), $p['frozenset']($p['tuple']([])), $p['frozenset'](''), $p['frozenset']($p['xrange']($constant_int_0)), $p['frozenset']($p['frozenset']()), $p['frozenset'](f), f]);
				self['assertEqual']((($len6=$p['set']($p['map']($p['hash'], efs))) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6))))), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_singleton_empty_frozenset'] = $method;
			$method = $pyjs__bind_method2('test_hash', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter34_nextval,i,seq,$len7,$iter34_array,results,n,$iter34_idx,$iter34_iter,$iter34_type;
				self['assertEqual']($p['hash'](self['thetype']('abcdeb')), $p['hash'](self['thetype']('ebecda')));
				n = $constant_int_100;
				seq = function(){
					var $iter33_iter,$iter33_nextval,$iter33_type,i,$collcomp1,$iter33_idx,$iter33_array;
	$collcomp1 = $p['list']();
				$iter33_iter = $p['xrange'](n);
				if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter['__iter__']();
					$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					i = $iter33_nextval;
					$collcomp1['append']($m['randrange'](n));
				}

	return $collcomp1;}();
				results = $p['set']();
				$iter34_iter = $p['xrange']($constant_int_200);
				if (typeof ($iter34_array = $iter34_iter['__array']) != 'undefined') {
					$iter34_type = 0;
				} else {
					$iter34_iter = $iter34_iter['__iter__']();
					$iter34_type = typeof ($iter34_array = $iter34_iter['__array']) != 'undefined'? 0 : (typeof $iter34_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter34_idx = 0;
				while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
					i = $iter34_nextval;
					$m['shuffle'](seq);
					results['add']($p['hash'](self['thetype'](seq)));
				}
				self['assertEqual']((($len7=results) === null?$constant_int_0:
					(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
								$p['len']($len7))))), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash'] = $method;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				dup = self['s']['copy']();
				self['assertEqual']($p['getattr'](self, 's'), dup);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$method = $pyjs__bind_method2('test_frozen_as_dictkey', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,seq,$add21,$add20,$add22,$8,key2,$7,$add19,key1;
				seq = (typeof ($add21=(typeof ($add19=$p['range']($constant_int_10))==typeof ($add20=$p['list']('abcdefg')) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($add22=$p['list'](['apple'])) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				key1 = self['thetype'](seq);
				key2 = self['thetype']($p['reversed'](seq));
				self['assertEqual'](key1, key2);
				d = $p['dict']([]);
				d['__setitem__'](key1, $constant_int_42);
				self['assertEqual']((typeof ($7=d)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=key2]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](key2)), $constant_int_42);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_frozen_as_dictkey'] = $method;
			$method = $pyjs__bind_method2('test_hash_caching', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f;
				f = self['thetype']('abcdcda');
				self['assertEqual']($p['hash'](f), $p['hash'](f));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash_caching'] = $method;
			$method = $pyjs__bind_method2('test_hash_effectiveness', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow4,$pow3,i,$pow1,$iter35_idx,$iter35_nextval,addhashvalue,n,$iter35_type,elemmasks,hashvalues,$iter35_array,$iter35_iter,$len8,$pow2;
				n = $constant_int_13;
				hashvalues = $p['set']();
				addhashvalue = $p['getattr'](hashvalues, 'add');
				elemmasks = $p['list']([$p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4]), $p['tuple']([$constant_int_4, $constant_int_8]), $p['tuple']([$constant_int_5, $constant_int_16]), $p['tuple']([$constant_int_6, $constant_int_32]), $p['tuple']([$constant_int_7, $constant_int_64]), $p['tuple']([$constant_int_8, $constant_int_128]), $p['tuple']([$constant_int_9, $constant_int_256]), $p['tuple']([$constant_int_10, $constant_int_512]), $p['tuple']([$constant_int_11, $constant_int_1024]), $p['tuple']([$constant_int_12, $constant_int_2048]), $p['tuple']([$constant_int_13, $constant_int_4096])]);
				$iter35_iter = $p['xrange']((typeof ($pow1=$constant_int_2)==typeof ($pow2=n) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)));
				if (typeof ($iter35_array = $iter35_iter['__array']) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter['__iter__']();
					$iter35_type = typeof ($iter35_array = $iter35_iter['__array']) != 'undefined'? 0 : (typeof $iter35_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					i = $iter35_nextval;
					addhashvalue($p['hash']($p['frozenset'](function(){
						var e,$iter36_nextval,$iter36_array,m,$collcomp2,$iter36_iter,$bool21,$iter36_idx,$iter36_type;
	$collcomp2 = $p['list']();
					$iter36_iter = elemmasks;
					if (typeof ($iter36_array = $iter36_iter['__array']) != 'undefined') {
						$iter36_type = 0;
					} else {
						$iter36_iter = $iter36_iter['__iter__']();
						$iter36_type = typeof ($iter36_array = $iter36_iter['__array']) != 'undefined'? 0 : (typeof $iter36_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter36_idx = 0;
					while (typeof ($iter36_nextval=($iter36_type?($iter36_type > 0?$iter36_iter.next(true,false):$p['wrapped_next']($iter36_iter)):$iter36_array[$iter36_idx++])) != 'undefined') {
						var $tupleassign6 = $p['__ass_unpack']($iter36_nextval, 2, null);
						e = $tupleassign6[0];
						m = $tupleassign6[1];
						if ((($bool21=$p['op_bitand2'](m, i)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
							$collcomp2['append'](e);
						}
					}

	return $collcomp2;}())));
				}
				self['assertEqual']((($len8=hashvalues) === null?$constant_int_0:
					(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
								$p['len']($len8))))), (typeof ($pow3=$constant_int_2)==typeof ($pow4=n) && typeof $pow3=='number'?
					Math['pow']($pow3,$pow4):
					$p['op_pow']($pow3,$pow4)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash_effectiveness'] = $method;
			var $bases = new Array($m['TestJointOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetTest', $p['tuple']($bases), $data);
		})();
		$m['FrozenSetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'cee99b6439ce06833ea9d82f68400131';
			var $bases = new Array($p['frozenset']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetSubclass', $p['tuple']($bases), $data);
		})();
		$m['FrozenSetSubclassTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '381f0c22eca58cfc983ab2a494515046';
			$cls_definition['thetype'] = $m['FrozenSetSubclass'];
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				dup = self['s']['copy']();
				self['assertEqual']($p['getattr'](self, 's'), dup);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$method = $pyjs__bind_method2('test_nested_empty_constructor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,t;
				s = self['thetype']();
				t = self['thetype'](s);
				self['assertEqual'](s, t);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_nested_empty_constructor'] = $method;
			$method = $pyjs__bind_method2('test_singleton_empty_frozenset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len10,efs,f,F,Frozenset,$len9;
				Frozenset = $p['getattr'](self, 'thetype');
				f = $p['frozenset']();
				F = Frozenset();
				efs = $p['list']([Frozenset(), Frozenset($p['list']([])), Frozenset($p['tuple']([])), Frozenset(''), Frozenset(), Frozenset($p['list']([])), Frozenset($p['tuple']([])), Frozenset(''), Frozenset($p['xrange']($constant_int_0)), Frozenset(Frozenset()), Frozenset($p['frozenset']()), f, F, Frozenset(f), Frozenset(F)]);
				self['assertEqual']((($len9=$p['set']($p['map']($p['hash'], efs))) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))), (($len10=efs) === null?$constant_int_0:
					(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
								$p['len']($len10))))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_singleton_empty_frozenset'] = $method;
			var $bases = new Array($m['FrozenSetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetSubclassTest', $p['tuple']($bases), $data);
		})();
		$m['empty_set'] = $p['set']();
		$m['TestBasicOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '34106f6ca82e11e17d3b3fd68466b361';
			$method = $pyjs__bind_method2('test_repr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool22;
				if ((($bool22=!$p['op_is']($p['getattr'](self, 'repr'), null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['assertEqual']($p['repr']($p['getattr'](self, 'set')), $p['getattr'](self, 'repr'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_repr'] = $method;
			$method = $pyjs__bind_method2('test_length', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len11;
				self['assertEqual']((($len11=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))), $p['getattr'](self, 'length'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_length'] = $method;
			$method = $pyjs__bind_method2('test_self_equality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_equality'] = $method;
			$method = $pyjs__bind_method2('test_equivalent_equality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr'](self, 'set'), $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_equivalent_equality'] = $method;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual'](self['set']['copy'](), $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$method = $pyjs__bind_method2('test_self_union', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_union'] = $method;
			$method = $pyjs__bind_method2('test_empty_union', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $m['empty_set']);
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_union'] = $method;
			$method = $pyjs__bind_method2('test_union_empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($m['empty_set'], $p['getattr'](self, 'set'));
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_empty'] = $method;
			$method = $pyjs__bind_method2('test_self_intersection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_intersection'] = $method;
			$method = $pyjs__bind_method2('test_empty_intersection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $m['empty_set']);
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_intersection'] = $method;
			$method = $pyjs__bind_method2('test_intersection_empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($m['empty_set'], $p['getattr'](self, 'set'));
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_empty'] = $method;
			$method = $pyjs__bind_method2('test_self_isdisjoint', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$bool23;
				result = self['set']['isdisjoint']($p['getattr'](self, 'set'));
				self['assertEqual'](result, !(($bool23=$p['getattr'](self, 'set')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23['__nonzero__']=='function'?
							$bool23['__nonzero__']() :
							(typeof $bool23['__len__']=='function'?
								($bool23['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_isdisjoint'] = $method;
			$method = $pyjs__bind_method2('test_empty_isdisjoint', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['set']['isdisjoint']($m['empty_set']);
				self['assertEqual'](result, true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_isdisjoint'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint_empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $m['empty_set']['isdisjoint']($p['getattr'](self, 'set'));
				self['assertEqual'](result, true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_empty'] = $method;
			$method = $pyjs__bind_method2('test_self_symmetric_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_symmetric_difference'] = $method;
			$method = $pyjs__bind_method2('checkempty_symmetric_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $m['empty_set']);
				self['assertEqual'](result, $p['getattr'](self, 'set'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['checkempty_symmetric_difference'] = $method;
			$method = $pyjs__bind_method2('test_self_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub6,$sub5,result;
				result = (typeof ($sub5=$p['getattr'](self, 'set'))==typeof ($sub6=$p['getattr'](self, 'set')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_difference'] = $method;
			$method = $pyjs__bind_method2('test_empty_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$sub7,result;
				result = (typeof ($sub7=$p['getattr'](self, 'set'))==typeof ($sub8=$m['empty_set']) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_difference'] = $method;
			$method = $pyjs__bind_method2('test_empty_difference_rev', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub10,$sub9,result;
				result = (typeof ($sub9=$m['empty_set'])==typeof ($sub10=$p['getattr'](self, 'set')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_difference_rev'] = $method;
			$method = $pyjs__bind_method2('test_iteration', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len12,$iter37_idx,setiter,$iter37_type,$iter37_array,v,$iter37_iter,$iter37_nextval;
				$iter37_iter = $p['getattr'](self, 'set');
				if (typeof ($iter37_array = $iter37_iter['__array']) != 'undefined') {
					$iter37_type = 0;
				} else {
					$iter37_iter = $iter37_iter['__iter__']();
					$iter37_type = typeof ($iter37_array = $iter37_iter['__array']) != 'undefined'? 0 : (typeof $iter37_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter37_idx = 0;
				while (typeof ($iter37_nextval=($iter37_type?($iter37_type > 0?$iter37_iter.next(true,false):$p['wrapped_next']($iter37_iter)):$iter37_array[$iter37_idx++])) != 'undefined') {
					v = $iter37_nextval;
					self['assert_']($p['getattr'](self, 'values')['__contains__'](v));
				}
				setiter = $p['iter']($p['getattr'](self, 'set'));
				self['assertEqual'](setiter['__length_hint__'](), (($len12=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len12['__array'] != 'undefined' ? new $p['int']($len12['__array']['length']):
						(typeof $len12['__len__'] == 'function'?$len12['__len__']():
							(typeof $len12['length'] != 'undefined'? new $p['int']($len12['length']):
								$p['len']($len12))))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iteration'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOps', $p['tuple']($bases), $data);
		})();
		$m['TestBasicOpsEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '30dfc8f690a7e05131aaccc64b137cc6';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '30dfc8f690a7e05131aaccc64b137cc6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$case', 'empty set') : $p['setattr'](self, '$$case', 'empty set'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', $p['list']([])) : $p['setattr'](self, 'values', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('length', $constant_int_0) : $p['setattr'](self, 'length', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repr', 'set([])') : $p['setattr'](self, 'repr', 'set([])'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsEmpty', $p['tuple']($bases), $data);
		})();
		$m['TestBasicOpsSingleton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '4ce6386b318218bd114dc98b8a2e9ffb';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$case', 'unit set (number)') : $p['setattr'](self, '$$case', 'unit set (number)'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', $p['list']([$constant_int_3])) : $p['setattr'](self, 'values', $p['list']([$constant_int_3])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('length', $constant_int_1) : $p['setattr'](self, 'length', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repr', 'set([3])') : $p['setattr'](self, 'repr', 'set([3])'); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_in', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['failUnless']($p['getattr'](self, 'set')['__contains__']($constant_int_3));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_in'] = $method;
			$method = $pyjs__bind_method2('test_not_in', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['failUnless'](!$p['getattr'](self, 'set')['__contains__']($constant_int_2));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_not_in'] = $method;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsSingleton', $p['tuple']($bases), $data);
		})();
		$m['TestBasicOpsTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '7bbec324343ba3eb992872a0302d37f2';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$case', 'unit set (tuple)') : $p['setattr'](self, '$$case', 'unit set (tuple)'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', $p['list']([$p['tuple']([$constant_int_0, 'zero'])])) : $p['setattr'](self, 'values', $p['list']([$p['tuple']([$constant_int_0, 'zero'])])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('length', $constant_int_1) : $p['setattr'](self, 'length', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('repr', "set([(0, 'zero')])") : $p['setattr'](self, 'repr', "set([(0, 'zero')])"); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_in', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['failUnless']($p['getattr'](self, 'set')['__contains__']($p['tuple']([$constant_int_0, 'zero'])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_in'] = $method;
			$method = $pyjs__bind_method2('test_not_in', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['failUnless'](!$p['getattr'](self, 'set')['__contains__']($constant_int_9));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_not_in'] = $method;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsTuple', $p['tuple']($bases), $data);
		})();
		$m['baditer'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=1;
					throw ($p['TypeError']);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$yield_value = true;
					$yielding = true;
					$generator_state[0] = 2;
					return $yield_value;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
				}

				return;
			};
			return $generator;
		};
		$m['baditer']['__name__'] = 'baditer';

		$m['baditer']['__bind_type__'] = 0;
		$m['baditer']['__args__'] = [null,null];
		$m['gooditer'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$yield_value = true;
					$yielding = true;
					$generator_state[0] = 1;
					return $yield_value;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		};
		$m['gooditer']['__name__'] = 'gooditer';

		$m['gooditer']['__bind_type__'] = 0;
		$m['gooditer']['__args__'] = [null,null];
		$m['TestExceptionPropagation'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'ec53ff63900797cc62149b4078b7cdbc';
			$method = $pyjs__bind_method2('test_instanceWithException', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertRaises']($p['TypeError'], $p['set'], $m['baditer']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_instanceWithException'] = $method;
			$method = $pyjs__bind_method2('test_instancesWithoutException', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['set']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$p['set']($p['dict']([['one', $constant_int_1], ['two', $constant_int_2], ['three', $constant_int_3]]));
				$p['set']($p['xrange']($constant_int_3));
				$p['set']('abc');
				$p['set']($m['gooditer']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_instancesWithoutException'] = $method;
			$method = $pyjs__bind_method2('test_changingSizeWhileIterating', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter38_iter,i,$iter38_idx,$iter38_nextval,s,$pyjs_try_err,$iter38_type,$iter38_array;
				s = $p['set']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				try {
					$iter38_iter = s;
					if (typeof ($iter38_array = $iter38_iter['__array']) != 'undefined') {
						$iter38_type = 0;
					} else {
						$iter38_iter = $iter38_iter['__iter__']();
						$iter38_type = typeof ($iter38_array = $iter38_iter['__array']) != 'undefined'? 0 : (typeof $iter38_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter38_idx = 0;
					while (typeof ($iter38_nextval=($iter38_type?($iter38_type > 0?$iter38_iter.next(true,false):$p['wrapped_next']($iter38_iter)):$iter38_array[$iter38_idx++])) != 'undefined') {
						i = $iter38_nextval;
						s['update']($p['list']([$constant_int_4]));
					}
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('no exception when changing size during iteration');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['RuntimeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_changingSizeWhileIterating'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestExceptionPropagation', $p['tuple']($bases), $data);
		})();
		$m['TestSetOfSets'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'fddf8ebbbc6858044f0d82b3c8d23f4c';
			$method = $pyjs__bind_method2('test_constructor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fddf8ebbbc6858044f0d82b3c8d23f4c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var outer,inner,element;
				inner = $p['frozenset']($p['list']([$constant_int_1]));
				outer = $p['set']($p['list']([inner]));
				element = outer['pop']();
				outer['add'](inner);
				outer['remove'](inner);
				self['assertEqual'](outer, $p['set']());
				outer['discard'](inner);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_constructor'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetOfSets', $p['tuple']($bases), $data);
		})();
		$m['TestBinaryOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'b3ddf18cf06e8e0188d9e4e3e33c9cf0';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_eq', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['dict']([[$constant_int_2, $constant_int_1], [$constant_int_4, $constant_int_3], [$constant_int_6, $constant_int_5]])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_eq'] = $method;
			$method = $pyjs__bind_method2('test_union_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])));
				self['assertEqual'](result, $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_subset'] = $method;
			$method = $pyjs__bind_method2('test_union_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_superset'] = $method;
			$method = $pyjs__bind_method2('test_union_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_overlap'] = $method;
			$method = $pyjs__bind_method2('test_union_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_intersection_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				self['assertEqual'](result, $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_subset'] = $method;
			$method = $pyjs__bind_method2('test_intersection_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_superset'] = $method;
			$method = $pyjs__bind_method2('test_intersection_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_4])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_overlap'] = $method;
			$method = $pyjs__bind_method2('test_intersection_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				self['assertEqual'](result, $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['set']['isdisjoint']($p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				self['assertEqual'](result, false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_subset'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				self['assertEqual'](result, false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_superset'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual'](result, false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_overlap'] = $method;
			$method = $pyjs__bind_method2('test_isdisjoint_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_8])));
				self['assertEqual'](result, true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_subset'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_superset'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_overlap'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_cmp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b;
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['set']('a'), $p['set']('b')]), 2, null);
				a = $tupleassign7[0];
				b = $tupleassign7[1];
				self['assertRaises']($p['TypeError'], $p['cmp'], a, b);
				self['assertEqual']($p['cmp'](a, a), $constant_int_0);
				self['assertRaises']($p['TypeError'], $p['cmp'], a, $constant_int_12);
				self['assertRaises']($p['TypeError'], $p['cmp'], 'abc', a);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_cmp'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBinaryOps', $p['tuple']($bases), $data);
		})();
		$m['TestUpdateOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '7be02f96a0de487d8ef35bb80b0b70fb';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_union_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_subset'] = $method;
			$method = $pyjs__bind_method2('test_union_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_superset'] = $method;
			$method = $pyjs__bind_method2('test_union_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_overlap'] = $method;
			$method = $pyjs__bind_method2('test_union_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_union_method_call', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_method_call'] = $method;
			$method = $pyjs__bind_method2('test_intersection_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_subset'] = $method;
			$method = $pyjs__bind_method2('test_intersection_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_superset'] = $method;
			$method = $pyjs__bind_method2('test_intersection_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_4])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_overlap'] = $method;
			$method = $pyjs__bind_method2('test_intersection_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $m['empty_set']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_intersection_method_call', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['intersection_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_4])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_method_call'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_subset'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_superset'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_overlap'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_method_call', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['symmetric_difference_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_method_call'] = $method;
			$method = $pyjs__bind_method2('test_difference_subset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub12,$sub11;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', (typeof ($sub11=$p['getattr'](self, 'set'))==typeof ($sub12=$p['set']($p['tuple']([$constant_int_2, $constant_int_4]))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'set', (typeof ($sub11=$p['getattr'](self, 'set'))==typeof ($sub12=$p['set']($p['tuple']([$constant_int_2, $constant_int_4]))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_subset'] = $method;
			$method = $pyjs__bind_method2('test_difference_superset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$sub14;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', (typeof ($sub13=$p['getattr'](self, 'set'))==typeof ($sub14=$p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]))) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))) : $p['setattr'](self, 'set', (typeof ($sub13=$p['getattr'](self, 'set'))==typeof ($sub14=$p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]))) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_superset'] = $method;
			$method = $pyjs__bind_method2('test_difference_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub16,$sub15;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', (typeof ($sub15=$p['getattr'](self, 'set'))==typeof ($sub16=$p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5]))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))) : $p['setattr'](self, 'set', (typeof ($sub15=$p['getattr'](self, 'set'))==typeof ($sub16=$p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5]))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_overlap'] = $method;
			$method = $pyjs__bind_method2('test_difference_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub18,$sub17;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', (typeof ($sub17=$p['getattr'](self, 'set'))==typeof ($sub18=$p['set']($p['list']([$constant_int_8]))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))) : $p['setattr'](self, 'set', (typeof ($sub17=$p['getattr'](self, 'set'))==typeof ($sub18=$p['set']($p['list']([$constant_int_8]))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))); 
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_non_overlap'] = $method;
			$method = $pyjs__bind_method2('test_difference_method_call', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['difference_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_6])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_method_call'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestUpdateOps', $p['tuple']($bases), $data);
		})();
		$m['TestMutate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '774a534acf8fb9ede39e2727de3e53a6';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', $p['list'](['a', 'b', 'c'])) : $p['setattr'](self, 'values', $p['list'](['a', 'b', 'c'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_add_present', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['add']('c');
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abc'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_present'] = $method;
			$method = $pyjs__bind_method2('test_add_absent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['add']('d');
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abcd'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_absent'] = $method;
			$method = $pyjs__bind_method2('test_add_until_full', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tmp,$len13,$iter39_idx,v,$iter39_type,$iter39_array,expected_len,$iter39_nextval,$iter39_iter,$add24,$add23;
				tmp = $p['set']();
				expected_len = $constant_int_0;
				$iter39_iter = $p['getattr'](self, 'values');
				if (typeof ($iter39_array = $iter39_iter['__array']) != 'undefined') {
					$iter39_type = 0;
				} else {
					$iter39_iter = $iter39_iter['__iter__']();
					$iter39_type = typeof ($iter39_array = $iter39_iter['__array']) != 'undefined'? 0 : (typeof $iter39_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter39_idx = 0;
				while (typeof ($iter39_nextval=($iter39_type?($iter39_type > 0?$iter39_iter.next(true,false):$p['wrapped_next']($iter39_iter)):$iter39_array[$iter39_idx++])) != 'undefined') {
					v = $iter39_nextval;
					tmp['add'](v);
					expected_len = (typeof ($add23=expected_len)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					self['assertEqual']((($len13=tmp) === null?$constant_int_0:
						(typeof $len13['__array'] != 'undefined' ? new $p['int']($len13['__array']['length']):
							(typeof $len13['__len__'] == 'function'?$len13['__len__']():
								(typeof $len13['length'] != 'undefined'? new $p['int']($len13['length']):
									$p['len']($len13))))), expected_len);
				}
				self['assertEqual'](tmp, $p['getattr'](self, 'set'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_until_full'] = $method;
			$method = $pyjs__bind_method2('test_remove_present', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['remove']('b');
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('ac'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_present'] = $method;
			$method = $pyjs__bind_method2('test_remove_absent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['set']['remove']('d');
					self['fail']('Removing missing element should have raised LookupError');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['LookupError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['LookupError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_absent'] = $method;
			$method = $pyjs__bind_method2('test_remove_until_empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub19,$len14,$iter40_type,$sub20,$iter40_iter,expected_len,$iter40_array,v,$iter40_nextval,$iter40_idx,$len15;
				expected_len = (($len14=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len14['__array'] != 'undefined' ? new $p['int']($len14['__array']['length']):
						(typeof $len14['__len__'] == 'function'?$len14['__len__']():
							(typeof $len14['length'] != 'undefined'? new $p['int']($len14['length']):
								$p['len']($len14)))));
				$iter40_iter = $p['getattr'](self, 'values');
				if (typeof ($iter40_array = $iter40_iter['__array']) != 'undefined') {
					$iter40_type = 0;
				} else {
					$iter40_iter = $iter40_iter['__iter__']();
					$iter40_type = typeof ($iter40_array = $iter40_iter['__array']) != 'undefined'? 0 : (typeof $iter40_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter40_idx = 0;
				while (typeof ($iter40_nextval=($iter40_type?($iter40_type > 0?$iter40_iter.next(true,false):$p['wrapped_next']($iter40_iter)):$iter40_array[$iter40_idx++])) != 'undefined') {
					v = $iter40_nextval;
					self['set']['remove'](v);
					expected_len = (typeof ($sub19=expected_len)==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
					self['assertEqual']((($len15=$p['getattr'](self, 'set')) === null?$constant_int_0:
						(typeof $len15['__array'] != 'undefined' ? new $p['int']($len15['__array']['length']):
							(typeof $len15['__len__'] == 'function'?$len15['__len__']():
								(typeof $len15['length'] != 'undefined'? new $p['int']($len15['length']):
									$p['len']($len15))))), expected_len);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_until_empty'] = $method;
			$method = $pyjs__bind_method2('test_discard_present', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['discard']('c');
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('ab'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard_present'] = $method;
			$method = $pyjs__bind_method2('test_discard_absent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['discard']('d');
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abc'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard_absent'] = $method;
			$method = $pyjs__bind_method2('test_clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len16;
				self['set']['clear']();
				self['assertEqual']((($len16=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len16['__array'] != 'undefined' ? new $p['int']($len16['__array']['length']):
						(typeof $len16['__len__'] == 'function'?$len16['__len__']():
							(typeof $len16['length'] != 'undefined'? new $p['int']($len16['length']):
								$p['len']($len16))))), $constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_clear'] = $method;
			$method = $pyjs__bind_method2('test_pop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var popped,$iter41_array,$len17,$len18,$bool24,$iter41_type,$iter41_nextval,v,$iter41_iter,$iter41_idx;
				popped = $p['dict']([]);
				while ((($bool24=$p['getattr'](self, 'set')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					popped['__setitem__'](self['set']['pop'](), null);
				}
				self['assertEqual']((($len17=popped) === null?$constant_int_0:
					(typeof $len17['__array'] != 'undefined' ? new $p['int']($len17['__array']['length']):
						(typeof $len17['__len__'] == 'function'?$len17['__len__']():
							(typeof $len17['length'] != 'undefined'? new $p['int']($len17['length']):
								$p['len']($len17))))), (($len18=$p['getattr'](self, 'values')) === null?$constant_int_0:
					(typeof $len18['__array'] != 'undefined' ? new $p['int']($len18['__array']['length']):
						(typeof $len18['__len__'] == 'function'?$len18['__len__']():
							(typeof $len18['length'] != 'undefined'? new $p['int']($len18['length']):
								$p['len']($len18))))));
				$iter41_iter = $p['getattr'](self, 'values');
				if (typeof ($iter41_array = $iter41_iter['__array']) != 'undefined') {
					$iter41_type = 0;
				} else {
					$iter41_iter = $iter41_iter['__iter__']();
					$iter41_type = typeof ($iter41_array = $iter41_iter['__array']) != 'undefined'? 0 : (typeof $iter41_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter41_idx = 0;
				while (typeof ($iter41_nextval=($iter41_type?($iter41_type > 0?$iter41_iter.next(true,false):$p['wrapped_next']($iter41_iter)):$iter41_array[$iter41_idx++])) != 'undefined') {
					v = $iter41_nextval;
					self['failUnless'](popped['__contains__'](v));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_pop'] = $method;
			$method = $pyjs__bind_method2('test_update_empty_tuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['update']($p['tuple']([]));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['getattr'](self, 'values')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_empty_tuple'] = $method;
			$method = $pyjs__bind_method2('test_update_unit_tuple_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['set']['update']($p['tuple'](['a']));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['getattr'](self, 'values')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_unit_tuple_overlap'] = $method;
			$method = $pyjs__bind_method2('test_update_unit_tuple_non_overlap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$add26;
				self['set']['update']($p['tuple'](['a', 'z']));
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']((typeof ($add25=$p['getattr'](self, 'values'))==typeof ($add26=$p['list'](['z'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_unit_tuple_non_overlap'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestMutate', $p['tuple']($bases), $data);
		})();
		$m['TestSubsets'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'ae23442477dd5c9de56460df5f2ee82b';
			$cls_definition['case2method'] = $p['dict']([['<=', 'issubset'], ['>=', 'issuperset']]);
			$cls_definition['reverse'] = $p['dict']([['==', '=='], ['!=', '!='], ['<', '>'], ['>', '<'], ['<=', '>='], ['>=', '<=']]);
			$method = $pyjs__bind_method2('test_issubset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae23442477dd5c9de56460df5f2ee82b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter42_array,result,$add29,$add28,$iter42_idx,$add27,$bool25,$iter42_type,expected,method,$14,$bool26,$9,$$case,$10,$11,$12,$13,$add32,$add33,$add30,$add31,$add34,$iter42_iter,$iter42_nextval,y,x,rcase;
				x = $p['getattr'](self, 'left');
				y = $p['getattr'](self, 'right');
				$iter42_iter = $p['tuple'](['!=', '==', '<', '<=', '>', '>=']);
				if (typeof ($iter42_array = $iter42_iter['__array']) != 'undefined') {
					$iter42_type = 0;
				} else {
					$iter42_iter = $iter42_iter['__iter__']();
					$iter42_type = typeof ($iter42_array = $iter42_iter['__array']) != 'undefined'? 0 : (typeof $iter42_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter42_idx = 0;
				while (typeof ($iter42_nextval=($iter42_type?($iter42_type > 0?$iter42_iter.next(true,false):$p['wrapped_next']($iter42_iter)):$iter42_array[$iter42_idx++])) != 'undefined') {
					$$case = $iter42_nextval;
					expected = $p['getattr'](self, 'cases')['__contains__']($$case);
					result = (typeof eval == "undefined"?$m['eval']:eval)((typeof ($add29=(typeof ($add27='x')==typeof ($add28=$$case) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($add30='y') && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)), $p['dict']({'case': $$case,'$add28': $add28,'$iter42_idx': $iter42_idx,'self': self,'$add27': $add27,'$iter42_array': $iter42_array,'$iter42_iter': $iter42_iter,'$iter42_nextval': $iter42_nextval,'$iter42_type': $iter42_type,'$add29': $add29,'y': y,'x': x,'$add30': $add30,'expected': expected}));
					self['assertEqual'](result, expected);
					if ((($bool25=$p['getattr']($m['TestSubsets'], 'case2method')['__contains__']($$case)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						method = $p['getattr'](x, (typeof ($9=$p['getattr']($m['TestSubsets'], 'case2method'))['__array'] != 'undefined'?
							((typeof $9['__array'][$10=$$case]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__']($$case)));
						result = method(y);
						self['assertEqual'](result, expected);
					}
					rcase = (typeof ($11=$p['getattr']($m['TestSubsets'], 'reverse'))['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$$case]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($$case));
					result = (typeof eval == "undefined"?$m['eval']:eval)((typeof ($add33=(typeof ($add31='y')==typeof ($add32=rcase) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))==typeof ($add34='x') && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)), $p['dict']({'$iter42_array': $iter42_array,'result': result,'$add29': $add29,'$add28': $add28,'$iter42_idx': $iter42_idx,'self': self,'$add27': $add27,'$bool25': $bool25,'$iter42_type': $iter42_type,'expected': expected,'method': method,'$9': $9,'case': $$case,'$10': $10,'$11': $11,'$12': $12,'$add32': $add32,'$add33': $add33,'$add30': $add30,'$add31': $add31,'$add34': $add34,'$iter42_iter': $iter42_iter,'$iter42_nextval': $iter42_nextval,'y': y,'x': x,'rcase': rcase}));
					self['assertEqual'](result, expected);
					if ((($bool26=$p['getattr']($m['TestSubsets'], 'case2method')['__contains__'](rcase)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26['__nonzero__']=='function'?
									$bool26['__nonzero__']() :
									(typeof $bool26['__len__']=='function'?
										($bool26['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						method = $p['getattr'](y, (typeof ($13=$p['getattr']($m['TestSubsets'], 'case2method'))['__array'] != 'undefined'?
							((typeof $13['__array'][$14=rcase]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](rcase)));
						result = method(x);
						self['assertEqual'](result, expected);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issubset'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsets', $p['tuple']($bases), $data);
		})();
		$m['TestSubsetEqualEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '1d207894d6114459a4e642f24895f4d8';
			$cls_definition['left'] = $p['set']();
			$cls_definition['right'] = $p['set']();
			$cls_definition['$$name'] = 'both empty';
			$cls_definition['cases'] = $p['tuple'](['==', '<=', '>=']);
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEqualEmpty', $p['tuple']($bases), $data);
		})();
		$m['TestSubsetEqualNonEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '1fd34372b359120a626c9e3019fae98c';
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$cls_definition['$$name'] = 'equal pair';
			$cls_definition['cases'] = $p['tuple'](['==', '<=', '>=']);
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEqualNonEmpty', $p['tuple']($bases), $data);
		})();
		$m['TestSubsetEmptyNonEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '303359b7a39042405bfc90675feccf27';
			$cls_definition['left'] = $p['set']();
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$cls_definition['$$name'] = 'one empty, one non-empty';
			$cls_definition['cases'] = $p['tuple'](['!=', '<', '<=']);
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEmptyNonEmpty', $p['tuple']($bases), $data);
		})();
		$m['TestSubsetPartial'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'e75b208c7cdf9a1f1a359605bcbcc7c0';
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1]));
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$cls_definition['$$name'] = 'one a non-empty proper subset of other';
			$cls_definition['cases'] = $p['tuple'](['!=', '<', '<=']);
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetPartial', $p['tuple']($bases), $data);
		})();
		$m['TestSubsetNonOverlap'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '456233371de0c73e6dd22d3c41fb6f56';
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1]));
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_2]));
			$cls_definition['$$name'] = 'neither empty, neither contains';
			$cls_definition['cases'] = '!=';
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetNonOverlap', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsInBinaryOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'a17ad64ab34c723746d8a419d9888265';
			$method = $pyjs__bind_method2('test_eq_ne', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['op_eq']($p['getattr'](self, 'other'), $p['getattr'](self, 'set')), false);
				self['assertEqual']($p['op_eq']($p['getattr'](self, 'set'), $p['getattr'](self, 'other')), false);
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 'other'), $p['getattr'](self, 'set')), true);
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 'set'), $p['getattr'](self, 'other')), true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_eq_ne'] = $method;
			$method = $pyjs__bind_method2('test_ge_gt_le_lt', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda8;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp20,$cmp19;
					return ((($cmp19=$p['getattr'](self, 'set'))===($cmp20=$p['getattr'](self, 'other'))?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == -1);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda1);
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp21,$cmp22;
					return ((($cmp21=$p['getattr'](self, 'set'))===($cmp22=$p['getattr'](self, 'other'))?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) < 1);
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda2);
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp23,$cmp24;
					return ((($cmp23=$p['getattr'](self, 'set'))===($cmp24=$p['getattr'](self, 'other'))?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) == 1);
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda3);
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp25,$cmp26;
					return ((((($cmp25=$p['getattr'](self, 'set'))===($cmp26=$p['getattr'](self, 'other'))?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))))|1) == 1);
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda4);
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp28,$cmp27;
					return ((($cmp27=$p['getattr'](self, 'other'))===($cmp28=$p['getattr'](self, 'set'))?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == -1);
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda5);
				var 				$lambda6 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp29,$cmp30;
					return ((($cmp29=$p['getattr'](self, 'other'))===($cmp30=$p['getattr'](self, 'set'))?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) < 1);
				};
				$lambda6['__name__'] = '$lambda6';

				$lambda6['__bind_type__'] = 0;
				$lambda6['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda6);
				var 				$lambda7 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp32,$cmp31;
					return ((($cmp31=$p['getattr'](self, 'other'))===($cmp32=$p['getattr'](self, 'set'))?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == 1);
				};
				$lambda7['__name__'] = '$lambda7';

				$lambda7['__bind_type__'] = 0;
				$lambda7['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda7);
				var 				$lambda8 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $cmp34,$cmp33;
					return ((((($cmp33=$p['getattr'](self, 'other'))===($cmp34=$p['getattr'](self, 'set'))?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))))|1) == 1);
				};
				$lambda8['__name__'] = '$lambda8';

				$lambda8['__bind_type__'] = 0;
				$lambda8['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda8);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ge_gt_le_lt'] = $method;
			$method = $pyjs__bind_method2('test_update_operator', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_operator'] = $method;
			$method = $pyjs__bind_method2('test_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool27;
				if ((($bool27=$p['getattr'](self, 'otherIsIterable')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					self['set']['update']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'update'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update'] = $method;
			$method = $pyjs__bind_method2('test_union', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda10,$bool28,$lambda9;
				var 				$lambda9 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
				};
				$lambda9['__name__'] = '$lambda9';

				$lambda9['__bind_type__'] = 0;
				$lambda9['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda9);
				var 				$lambda10 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitor2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
				};
				$lambda10['__name__'] = '$lambda10';

				$lambda10['__bind_type__'] = 0;
				$lambda10['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda10);
				if ((($bool28=$p['getattr'](self, 'otherIsIterable')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					self['set']['union']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'union'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union'] = $method;
			$method = $pyjs__bind_method2('test_intersection_update_operator', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update_operator'] = $method;
			$method = $pyjs__bind_method2('test_intersection_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool29;
				if ((($bool29=$p['getattr'](self, 'otherIsIterable')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['intersection_update']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'intersection_update'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update'] = $method;
			$method = $pyjs__bind_method2('test_intersection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda12,$bool30,$lambda11;
				var 				$lambda11 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
				};
				$lambda11['__name__'] = '$lambda11';

				$lambda11['__bind_type__'] = 0;
				$lambda11['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda11);
				var 				$lambda12 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitand2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
				};
				$lambda12['__name__'] = '$lambda12';

				$lambda12['__bind_type__'] = 0;
				$lambda12['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda12);
				if ((($bool30=$p['getattr'](self, 'otherIsIterable')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['intersection']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'intersection'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_update_operator', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_update_operator'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool31;
				if ((($bool31=$p['getattr'](self, 'otherIsIterable')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31['__nonzero__']=='function'?
								$bool31['__nonzero__']() :
								(typeof $bool31['__len__']=='function'?
									($bool31['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['symmetric_difference_update']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'symmetric_difference_update'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_update'] = $method;
			$method = $pyjs__bind_method2('test_sym_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda13,$bool32,$lambda14;
				var 				$lambda13 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
				};
				$lambda13['__name__'] = '$lambda13';

				$lambda13['__bind_type__'] = 0;
				$lambda13['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda13);
				var 				$lambda14 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $p['op_bitxor2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
				};
				$lambda14['__name__'] = '$lambda14';

				$lambda14['__bind_type__'] = 0;
				$lambda14['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda14);
				if ((($bool32=$p['getattr'](self, 'otherIsIterable')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['symmetric_difference']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'symmetric_difference'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference'] = $method;
			$method = $pyjs__bind_method2('test_difference_update_operator', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub21,$pyjs_try_err;
				try {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', (typeof ($sub21=$p['getattr'](self, 'set'))==typeof ($sub22=$p['getattr'](self, 'other')) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22))) : $p['setattr'](self, 'set', (typeof ($sub21=$p['getattr'](self, 'set'))==typeof ($sub22=$p['getattr'](self, 'other')) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update_operator'] = $method;
			$method = $pyjs__bind_method2('test_difference_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool33;
				if ((($bool33=$p['getattr'](self, 'otherIsIterable')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['difference_update']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'difference_update'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update'] = $method;
			$method = $pyjs__bind_method2('test_difference', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool34,$lambda16,$lambda15;
				var 				$lambda15 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $sub23,$sub24;
					return (typeof ($sub23=$p['getattr'](self, 'set'))==typeof ($sub24=$p['getattr'](self, 'other')) && (typeof $sub23=='number'||typeof $sub23=='string')?
						$sub23-$sub24:
						$p['op_sub']($sub23,$sub24));
				};
				$lambda15['__name__'] = '$lambda15';

				$lambda15['__bind_type__'] = 0;
				$lambda15['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda15);
				var 				$lambda16 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $sub26,$sub25;
					return (typeof ($sub25=$p['getattr'](self, 'other'))==typeof ($sub26=$p['getattr'](self, 'set')) && (typeof $sub25=='number'||typeof $sub25=='string')?
						$sub25-$sub26:
						$p['op_sub']($sub25,$sub26));
				};
				$lambda16['__name__'] = '$lambda16';

				$lambda16['__bind_type__'] = 0;
				$lambda16['__args__'] = [null,null];
				self['assertRaises']($p['TypeError'], $lambda16);
				if ((($bool34=$p['getattr'](self, 'otherIsIterable')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set']['difference']($p['getattr'](self, 'other'));
				}
				else {
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'difference'), $p['getattr'](self, 'other'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsInBinaryOps', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsNumeric'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'c9c088c2a01b83dbc31fc0ffaee13d62';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c9c088c2a01b83dbc31fc0ffaee13d62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', $constant_int_19) : $p['setattr'](self, 'other', $constant_int_19); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', false) : $p['setattr'](self, 'otherIsIterable', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsNumeric', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsDict'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '971fe96918cbf48ced8f9519245da298';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '971fe96918cbf48ced8f9519245da298') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]])) : $p['setattr'](self, 'other', $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsDict', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsOperator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'd3f5499e1dddd14fa1ef349049ad342c';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd3f5499e1dddd14fa1ef349049ad342c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', $p['getattr']((typeof operator == "undefined"?$m['operator']:operator), 'add')) : $p['setattr'](self, 'other', $p['getattr']((typeof operator == "undefined"?$m['operator']:operator), 'add')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', false) : $p['setattr'](self, 'otherIsIterable', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsOperator', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '2f0cbf7dc4b8ed84d9013cac119cfe40';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f0cbf7dc4b8ed84d9013cac119cfe40') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', $p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])) : $p['setattr'](self, 'other', $p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsTuple', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsString'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'e31e13fad0d33e97c86b622c6b9730b0';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e31e13fad0d33e97c86b622c6b9730b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', 'abc') : $p['setattr'](self, 'other', 'abc'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsString', $p['tuple']($bases), $data);
		})();
		$m['TestOnlySetsGenerator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '5e96c3bc0fe21bd1c297485bac88c89c';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5e96c3bc0fe21bd1c297485bac88c89c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var gen;
				gen = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $iter43_type,$iter44_type,$iter43_iter,$iter43_array,$iter44_idx,i,$iter44_array,$iter44_iter,$iter43_idx,$iter44_nextval,$iter43_nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$iter44_iter = $p['xrange']($constant_int_0, $constant_int_10, $constant_int_2);
							if (typeof ($iter44_array = $iter44_iter['__array']) != 'undefined') {
								$iter44_type = 0;
							} else {
								$iter44_iter = $iter44_iter['__iter__']();
								$iter44_type = typeof ($iter44_array = $iter44_iter['__array']) != 'undefined'? 0 : (typeof $iter44_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter44_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter44_nextval=($iter44_type?($iter44_type > 0?$iter44_iter.next(true,false):$p['wrapped_next']($iter44_iter)):$iter44_array[$iter44_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									i = $iter44_nextval;
									$yield_value = i;
									$yielding = true;
									$generator_state[1] = 1;
									return $yield_value;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

						return;
					};
					return $generator;
				};
				gen['__name__'] = 'gen';

				gen['__bind_type__'] = 0;
				gen['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('other', gen()) : $p['setattr'](self, 'other', gen()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsGenerator', $p['tuple']($bases), $data);
		})();
		$m['TestCopying'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '853feb2b1909ef0711aa5eed15347bb1';
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '853feb2b1909ef0711aa5eed15347bb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$len21,$iter45_iter,$len20,i,$len19,set_list,$iter45_array,$iter45_type,$iter45_nextval,$17,$18,dup,$iter45_idx,dup_list;
				dup = self['set']['copy']();
				dup_list = $p['list'](dup);
				dup_list['sort']();
				set_list = $p['list']($p['getattr'](self, 'set'));
				set_list['sort']();
				self['assertEqual']((($len19=dup_list) === null?$constant_int_0:
					(typeof $len19['__array'] != 'undefined' ? new $p['int']($len19['__array']['length']):
						(typeof $len19['__len__'] == 'function'?$len19['__len__']():
							(typeof $len19['length'] != 'undefined'? new $p['int']($len19['length']):
								$p['len']($len19))))), (($len20=set_list) === null?$constant_int_0:
					(typeof $len20['__array'] != 'undefined' ? new $p['int']($len20['__array']['length']):
						(typeof $len20['__len__'] == 'function'?$len20['__len__']():
							(typeof $len20['length'] != 'undefined'? new $p['int']($len20['length']):
								$p['len']($len20))))));
				$iter45_iter = $p['range']((($len21=dup_list) === null?$constant_int_0:
					(typeof $len21['__array'] != 'undefined' ? new $p['int']($len21['__array']['length']):
						(typeof $len21['__len__'] == 'function'?$len21['__len__']():
							(typeof $len21['length'] != 'undefined'? new $p['int']($len21['length']):
								$p['len']($len21))))));
				if (typeof ($iter45_array = $iter45_iter['__array']) != 'undefined') {
					$iter45_type = 0;
				} else {
					$iter45_iter = $iter45_iter['__iter__']();
					$iter45_type = typeof ($iter45_array = $iter45_iter['__array']) != 'undefined'? 0 : (typeof $iter45_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter45_idx = 0;
				while (typeof ($iter45_nextval=($iter45_type?($iter45_type > 0?$iter45_iter.next(true,false):$p['wrapped_next']($iter45_iter)):$iter45_array[$iter45_idx++])) != 'undefined') {
					i = $iter45_nextval;
					self['failUnless']($p['op_is']((typeof ($15=dup_list)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](i)), (typeof ($17=set_list)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](i))));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$method = $pyjs__bind_method2('test_deep_copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '853feb2b1909ef0711aa5eed15347bb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len24,$iter46_array,$len23,$len22,i,$20,set_list,$iter46_iter,$iter46_nextval,$19,$21,$iter46_idx,dup,dup_list,$22,$iter46_type;
				dup = $m['copy']['deepcopy']($p['getattr'](self, 'set'));
				dup_list = $p['list'](dup);
				dup_list['sort']();
				set_list = $p['list']($p['getattr'](self, 'set'));
				set_list['sort']();
				self['assertEqual']((($len22=dup_list) === null?$constant_int_0:
					(typeof $len22['__array'] != 'undefined' ? new $p['int']($len22['__array']['length']):
						(typeof $len22['__len__'] == 'function'?$len22['__len__']():
							(typeof $len22['length'] != 'undefined'? new $p['int']($len22['length']):
								$p['len']($len22))))), (($len23=set_list) === null?$constant_int_0:
					(typeof $len23['__array'] != 'undefined' ? new $p['int']($len23['__array']['length']):
						(typeof $len23['__len__'] == 'function'?$len23['__len__']():
							(typeof $len23['length'] != 'undefined'? new $p['int']($len23['length']):
								$p['len']($len23))))));
				$iter46_iter = $p['range']((($len24=dup_list) === null?$constant_int_0:
					(typeof $len24['__array'] != 'undefined' ? new $p['int']($len24['__array']['length']):
						(typeof $len24['__len__'] == 'function'?$len24['__len__']():
							(typeof $len24['length'] != 'undefined'? new $p['int']($len24['length']):
								$p['len']($len24))))));
				if (typeof ($iter46_array = $iter46_iter['__array']) != 'undefined') {
					$iter46_type = 0;
				} else {
					$iter46_iter = $iter46_iter['__iter__']();
					$iter46_type = typeof ($iter46_array = $iter46_iter['__array']) != 'undefined'? 0 : (typeof $iter46_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter46_idx = 0;
				while (typeof ($iter46_nextval=($iter46_type?($iter46_type > 0?$iter46_iter.next(true,false):$p['wrapped_next']($iter46_iter)):$iter46_array[$iter46_idx++])) != 'undefined') {
					i = $iter46_nextval;
					self['assertEqual']((typeof ($19=dup_list)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](i)), (typeof ($21=set_list)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=i]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](i)));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_deep_copy'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopying', $p['tuple']($bases), $data);
		})();
		$m['TestCopyingEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'f5262c07159485e6e315b1dfb4838dab';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5262c07159485e6e315b1dfb4838dab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']()) : $p['setattr'](self, 'set', $p['set']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingEmpty', $p['tuple']($bases), $data);
		})();
		$m['TestCopyingSingleton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '18fae02c35cdeb97941f388af896dc5d';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '18fae02c35cdeb97941f388af896dc5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['list'](['hello']))) : $p['setattr'](self, 'set', $p['set']($p['list'](['hello']))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingSingleton', $p['tuple']($bases), $data);
		})();
		$m['TestCopyingTriple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'c0a0fc172b8bab444020db9722dc7a1c';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0a0fc172b8bab444020db9722dc7a1c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['list'](['zero', $constant_int_0, null]))) : $p['setattr'](self, 'set', $p['set']($p['list'](['zero', $constant_int_0, null]))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingTriple', $p['tuple']($bases), $data);
		})();
		$m['TestCopyingTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'c592ec1ce6c9e9165e529e1629218377';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c592ec1ce6c9e9165e529e1629218377') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['list']([$p['tuple']([$constant_int_1, $constant_int_2])]))) : $p['setattr'](self, 'set', $p['set']($p['list']([$p['tuple']([$constant_int_1, $constant_int_2])]))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingTuple', $p['tuple']($bases), $data);
		})();
		$m['TestCopyingNested'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '8434e648e489d006d103e2be0d55a739';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8434e648e489d006d103e2be0d55a739') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set', $p['set']($p['list']([$p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4])])]))) : $p['setattr'](self, 'set', $p['set']($p['list']([$p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4])])]))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingNested', $p['tuple']($bases), $data);
		})();
		$m['TestIdentities'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '52ea865ebce622b63bd4b309742483c6';
			$method = $pyjs__bind_method2('setUp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $p['set']('abracadabra')) : $p['setattr'](self, 'a', $p['set']('abracadabra')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $p['set']('alacazam')) : $p['setattr'](self, 'b', $p['set']('alacazam')); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('test_binopsVsSubsets', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$sub30,b,$sub27,$cmp40,$sub29,$cmp48,$cmp47,$cmp42,$cmp43,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp41,$cmp46,$sub28,$cmp44,$cmp45;
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign8[0];
				b = $tupleassign8[1];
				self['assert_'](((($cmp35=(typeof ($sub27=a)==typeof ($sub28=b) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28)))===($cmp36=a)?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1));
				self['assert_'](((($cmp37=(typeof ($sub29=b)==typeof ($sub30=a) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))===($cmp38=b)?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == -1));
				self['assert_'](((($cmp39=$p['op_bitand2'](a, b))===($cmp40=a)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == -1));
				self['assert_'](((($cmp41=$p['op_bitand2'](a, b))===($cmp42=b)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1));
				self['assert_'](((($cmp43=$p['op_bitor2'](a, b))===($cmp44=a)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == 1));
				self['assert_'](((($cmp45=$p['op_bitor2'](a, b))===($cmp46=b)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1));
				self['assert_'](((($cmp47=$p['op_bitxor2'](a, b))===($cmp48=$p['op_bitor2'](a, b))?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == -1));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_binopsVsSubsets'] = $method;
			$method = $pyjs__bind_method2('test_commutativity', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$sub31,$sub33,b,$sub34,$sub32,$bool35;
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign9[0];
				b = $tupleassign9[1];
				self['assertEqual']($p['op_bitand2'](a, b), $p['op_bitand2'](b, a));
				self['assertEqual']($p['op_bitor2'](a, b), $p['op_bitor2'](b, a));
				self['assertEqual']($p['op_bitxor2'](a, b), $p['op_bitxor2'](b, a));
				if ((($bool35=!$p['op_eq'](a, b)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['assertNotEqual']((typeof ($sub31=a)==typeof ($sub32=b) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32)), (typeof ($sub33=b)==typeof ($sub34=a) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34)));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_commutativity'] = $method;
			$method = $pyjs__bind_method2('test_summations', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b,$sub35,$sub37,$sub36,$sub39,$sub38,$sub50,$sub48,$sub49,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47;
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign10[0];
				b = $tupleassign10[1];
				self['assertEqual']($p['op_bitor']([(typeof ($sub35=a)==typeof ($sub36=b) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36)), $p['op_bitand2'](a, b), (typeof ($sub37=b)==typeof ($sub38=a) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38))]), $p['op_bitor2'](a, b));
				self['assertEqual']($p['op_bitor2']($p['op_bitand2'](a, b), $p['op_bitxor2'](a, b)), $p['op_bitor2'](a, b));
				self['assertEqual']($p['op_bitor2'](a, (typeof ($sub39=b)==typeof ($sub40=a) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40))), $p['op_bitor2'](a, b));
				self['assertEqual']($p['op_bitor2']((typeof ($sub41=a)==typeof ($sub42=b) && (typeof $sub41=='number'||typeof $sub41=='string')?
					$sub41-$sub42:
					$p['op_sub']($sub41,$sub42)), b), $p['op_bitor2'](a, b));
				self['assertEqual']($p['op_bitor2']((typeof ($sub43=a)==typeof ($sub44=b) && (typeof $sub43=='number'||typeof $sub43=='string')?
					$sub43-$sub44:
					$p['op_sub']($sub43,$sub44)), $p['op_bitand2'](a, b)), a);
				self['assertEqual']($p['op_bitor2']((typeof ($sub45=b)==typeof ($sub46=a) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46)), $p['op_bitand2'](a, b)), b);
				self['assertEqual']($p['op_bitor2']((typeof ($sub47=a)==typeof ($sub48=b) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$p['op_sub']($sub47,$sub48)), (typeof ($sub49=b)==typeof ($sub50=a) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50))), $p['op_bitxor2'](a, b));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_summations'] = $method;
			$method = $pyjs__bind_method2('test_exclusion', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b,$sub53,$sub52,$sub51,zero,$sub54;
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b'), $p['set']()]), 3, null);
				a = $tupleassign11[0];
				b = $tupleassign11[1];
				zero = $tupleassign11[2];
				self['assertEqual']($p['op_bitand2']((typeof ($sub51=a)==typeof ($sub52=b) && (typeof $sub51=='number'||typeof $sub51=='string')?
					$sub51-$sub52:
					$p['op_sub']($sub51,$sub52)), b), zero);
				self['assertEqual']($p['op_bitand2']((typeof ($sub53=b)==typeof ($sub54=a) && (typeof $sub53=='number'||typeof $sub53=='string')?
					$sub53-$sub54:
					$p['op_sub']($sub53,$sub54)), a), zero);
				self['assertEqual']($p['op_bitand2']($p['op_bitand2'](a, b), $p['op_bitxor2'](a, b)), zero);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_exclusion'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestIdentities', $p['tuple']($bases), $data);
		})();
		$m['R'] = function(seqn) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter48_nextval,$iter47_idx,$iter48_iter,i,$iter47_type,$iter48_array,$iter48_idx,$iter47_nextval,$iter47_array,$iter48_type,$iter47_iter;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter48_iter = seqn;
					if (typeof ($iter48_array = $iter48_iter['__array']) != 'undefined') {
						$iter48_type = 0;
					} else {
						$iter48_iter = $iter48_iter['__iter__']();
						$iter48_type = typeof ($iter48_array = $iter48_iter['__array']) != 'undefined'? 0 : (typeof $iter48_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter48_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter48_nextval=($iter48_type?($iter48_type > 0?$iter48_iter.next(true,false):$p['wrapped_next']($iter48_iter)):$iter48_array[$iter48_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							i = $iter48_nextval;
							$yield_value = i;
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		};
		$m['R']['__name__'] = 'R';

		$m['R']['__bind_type__'] = 0;
		$m['R']['__args__'] = [null,null,['seqn']];
		$m['G'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'bef588f8bb787a27aefa6e25b85d6c15';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bef588f8bb787a27aefa6e25b85d6c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__getitem__', function(i) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					i = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bef588f8bb787a27aefa6e25b85d6c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $23,$24;
				return (typeof ($23=$p['getattr'](self, 'seqn'))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=i]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](i));
			}
	, 1, [null,null,['self'],['i']]);
			$cls_definition['__getitem__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('G', $p['tuple']($bases), $data);
		})();
		$m['I'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'f5bf13760967e00140dc757f7fcb0785';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
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
					if (self.prototype['__md5__'] !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len25,$add36,$25,$26,$cmp49,$bool36,v,$cmp50,$add35;
				if ((($bool36=((((($cmp49=$p['getattr'](self, 'i'))===($cmp50=(($len25=$p['getattr'](self, 'seqn')) === null?$constant_int_0:
					(typeof $len25['__array'] != 'undefined' ? new $p['int']($len25['__array']['length']):
						(typeof $len25['__len__'] == 'function'?$len25['__len__']():
							(typeof $len25['length'] != 'undefined'? new $p['int']($len25['length']):
								$p['len']($len25))))))?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))))|1) == 1)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['StopIteration']);
				}
				v = (typeof ($25=$p['getattr'](self, 'seqn'))['__array'] != 'undefined'?
					((typeof $25['__array'][$26=$p['getattr'](self, 'i')]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']($p['getattr'](self, 'i')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', (typeof ($add35=$p['getattr'](self, 'i'))==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))) : $p['setattr'](self, 'i', (typeof ($add35=$p['getattr'](self, 'i'))==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))); 
				return v;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('I', $p['tuple']($bases), $data);
		})();
		$m['Ig'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '5a2db18ad5f42ab7fee73cca84b12727';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5a2db18ad5f42ab7fee73cca84b12727') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5a2db18ad5f42ab7fee73cca84b12727') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter50_idx,val,$iter49_type,$iter50_type,$iter49_array,$iter49_iter,$iter50_nextval,$iter50_array,$iter49_idx,$iter49_nextval,$iter50_iter;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter50_iter = $p['getattr'](self, 'seqn');
						if (typeof ($iter50_array = $iter50_iter['__array']) != 'undefined') {
							$iter50_type = 0;
						} else {
							$iter50_iter = $iter50_iter['__iter__']();
							$iter50_type = typeof ($iter50_array = $iter50_iter['__array']) != 'undefined'? 0 : (typeof $iter50_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter50_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter50_nextval=($iter50_type?($iter50_type > 0?$iter50_iter.next(true,false):$p['wrapped_next']($iter50_iter)):$iter50_array[$iter50_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								val = $iter50_nextval;
								$yield_value = val;
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Ig', $p['tuple']($bases), $data);
		})();
		$m['X'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '40612223deb4f1d0598104ba70ce55e0';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '40612223deb4f1d0598104ba70ce55e0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '40612223deb4f1d0598104ba70ce55e0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $28,$add38,$len26,$add37,$27,$bool37,v,$cmp51,$cmp52;
				if ((($bool37=((((($cmp51=$p['getattr'](self, 'i'))===($cmp52=(($len26=$p['getattr'](self, 'seqn')) === null?$constant_int_0:
					(typeof $len26['__array'] != 'undefined' ? new $p['int']($len26['__array']['length']):
						(typeof $len26['__len__'] == 'function'?$len26['__len__']():
							(typeof $len26['length'] != 'undefined'? new $p['int']($len26['length']):
								$p['len']($len26))))))?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))))|1) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37['__nonzero__']=='function'?
								$bool37['__nonzero__']() :
								(typeof $bool37['__len__']=='function'?
									($bool37['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['StopIteration']);
				}
				v = (typeof ($27=$p['getattr'](self, 'seqn'))['__array'] != 'undefined'?
					((typeof $27['__array'][$28=$p['getattr'](self, 'i')]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']($p['getattr'](self, 'i')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', (typeof ($add37=$p['getattr'](self, 'i'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))) : $p['setattr'](self, 'i', (typeof ($add37=$p['getattr'](self, 'i'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))); 
				return v;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('X', $p['tuple']($bases), $data);
		})();
		$m['N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'dbb7a531040faf3ca4a4bb15e7e83183';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dbb7a531040faf3ca4a4bb15e7e83183') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dbb7a531040faf3ca4a4bb15e7e83183') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('N', $p['tuple']($bases), $data);
		})();
		$m['E'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '97ea1a7e55f5a4c812a5a756968d16ff';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
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
					if (self.prototype['__md5__'] !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv2,$floordiv1,t;
				t = (typeof ($floordiv1=$constant_int_3)==typeof ($floordiv2=$constant_int_0) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math['floor']($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('E', $p['tuple']($bases), $data);
		})();
		$m['S'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = '866dad0382cf1054b1fbb202d09010b0';
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
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
					if (self.prototype['__md5__'] !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['StopIteration']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('S', $p['tuple']($bases), $data);
		})();
		$m['TestVariousIteratorArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SetTest';
			$cls_definition['__md5__'] = 'e226274f4d066c5a8df8920f6adb6243';
			$method = $pyjs__bind_method2('test_constructor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter53_type,$iter51_array,$iter52_iter,g,$iter53_nextval,$iter53_array,$iter53_iter,$iter52_idx,$iter51_iter,$iter51_nextval,$iter52_nextval,s,cons,$iter52_type,$iter51_idx,$iter52_array,$iter53_idx,$iter51_type;
				$iter51_iter = $p['tuple']([$p['set'], $p['frozenset']]);
				if (typeof ($iter51_array = $iter51_iter['__array']) != 'undefined') {
					$iter51_type = 0;
				} else {
					$iter51_iter = $iter51_iter['__iter__']();
					$iter51_type = typeof ($iter51_array = $iter51_iter['__array']) != 'undefined'? 0 : (typeof $iter51_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter51_idx = 0;
				while (typeof ($iter51_nextval=($iter51_type?($iter51_type > 0?$iter51_iter.next(true,false):$p['wrapped_next']($iter51_iter)):$iter51_array[$iter51_idx++])) != 'undefined') {
					cons = $iter51_nextval;
					$iter52_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5)]);
					if (typeof ($iter52_array = $iter52_iter['__array']) != 'undefined') {
						$iter52_type = 0;
					} else {
						$iter52_iter = $iter52_iter['__iter__']();
						$iter52_type = typeof ($iter52_array = $iter52_iter['__array']) != 'undefined'? 0 : (typeof $iter52_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter52_idx = 0;
					while (typeof ($iter52_nextval=($iter52_type?($iter52_type > 0?$iter52_iter.next(true,false):$p['wrapped_next']($iter52_iter)):$iter52_array[$iter52_idx++])) != 'undefined') {
						s = $iter52_nextval;
						$iter53_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['S'], $m['R']]);
						if (typeof ($iter53_array = $iter53_iter['__array']) != 'undefined') {
							$iter53_type = 0;
						} else {
							$iter53_iter = $iter53_iter['__iter__']();
							$iter53_type = typeof ($iter53_array = $iter53_iter['__array']) != 'undefined'? 0 : (typeof $iter53_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter53_idx = 0;
						while (typeof ($iter53_nextval=($iter53_type?($iter53_type > 0?$iter53_iter.next(true,false):$p['wrapped_next']($iter53_iter)):$iter53_array[$iter53_idx++])) != 'undefined') {
							g = $iter53_nextval;
							self['assertEqual']($p['sorted'](cons(g(s))), $p['sorted'](g(s)));
						}
						self['assertRaises']($p['TypeError'], cons, $m['X'](s));
						self['assertRaises']($p['TypeError'], cons, $m['N'](s));
						self['assertRaises']($p['ZeroDivisionError'], cons, $m['E'](s));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_constructor'] = $method;
			$method = $pyjs__bind_method2('test_inline_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter56_array,meth,$iter55_nextval,$iter55_iter,$iter54_idx,expected,$iter54_nextval,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,data,$iter55_idx,actual,$iter54_array,g,s,$iter55_type,$bool38;
				s = $p['set']('november');
				$iter54_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5), 'december']);
				if (typeof ($iter54_array = $iter54_iter['__array']) != 'undefined') {
					$iter54_type = 0;
				} else {
					$iter54_iter = $iter54_iter['__iter__']();
					$iter54_type = typeof ($iter54_array = $iter54_iter['__array']) != 'undefined'? 0 : (typeof $iter54_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter54_idx = 0;
				while (typeof ($iter54_nextval=($iter54_type?($iter54_type > 0?$iter54_iter.next(true,false):$p['wrapped_next']($iter54_iter)):$iter54_array[$iter54_idx++])) != 'undefined') {
					data = $iter54_nextval;
					$iter55_iter = $p['tuple']([$p['getattr'](s, 'union'), $p['getattr'](s, 'intersection'), $p['getattr'](s, 'difference'), $p['getattr'](s, 'symmetric_difference'), $p['getattr'](s, 'isdisjoint')]);
					if (typeof ($iter55_array = $iter55_iter['__array']) != 'undefined') {
						$iter55_type = 0;
					} else {
						$iter55_iter = $iter55_iter['__iter__']();
						$iter55_type = typeof ($iter55_array = $iter55_iter['__array']) != 'undefined'? 0 : (typeof $iter55_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter55_idx = 0;
					while (typeof ($iter55_nextval=($iter55_type?($iter55_type > 0?$iter55_iter.next(true,false):$p['wrapped_next']($iter55_iter)):$iter55_array[$iter55_idx++])) != 'undefined') {
						meth = $iter55_nextval;
						$iter56_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['R']]);
						if (typeof ($iter56_array = $iter56_iter['__array']) != 'undefined') {
							$iter56_type = 0;
						} else {
							$iter56_iter = $iter56_iter['__iter__']();
							$iter56_type = typeof ($iter56_array = $iter56_iter['__array']) != 'undefined'? 0 : (typeof $iter56_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter56_idx = 0;
						while (typeof ($iter56_nextval=($iter56_type?($iter56_type > 0?$iter56_iter.next(true,false):$p['wrapped_next']($iter56_iter)):$iter56_array[$iter56_idx++])) != 'undefined') {
							g = $iter56_nextval;
							expected = meth(data);
							actual = meth($m['G'](data));
							if ((($bool38=$p['isinstance'](expected, $p['bool'])) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
									false :
									(typeof $bool38=='object'?
										(typeof $bool38['__nonzero__']=='function'?
											$bool38['__nonzero__']() :
											(typeof $bool38['__len__']=='function'?
												($bool38['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['assertEqual'](actual, expected);
							}
							else {
								self['assertEqual']($p['sorted'](actual), $p['sorted'](expected));
							}
						}
						self['assertRaises']($p['TypeError'], meth, $m['X'](s));
						self['assertRaises']($p['TypeError'], meth, $m['N'](s));
						self['assertRaises']($p['ZeroDivisionError'], meth, $m['E'](s));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inline_methods'] = $method;
			$method = $pyjs__bind_method2('test_inplace_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter59_nextval,$iter58_array,methname,$iter58_type,$iter57_type,g,data,$iter59_array,$iter57_iter,s,$iter57_array,$iter58_iter,$iter59_type,$iter59_iter,t,$iter59_idx,$iter57_nextval,$iter57_idx,$iter58_idx,$iter58_nextval;
				$iter57_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5), 'december']);
				if (typeof ($iter57_array = $iter57_iter['__array']) != 'undefined') {
					$iter57_type = 0;
				} else {
					$iter57_iter = $iter57_iter['__iter__']();
					$iter57_type = typeof ($iter57_array = $iter57_iter['__array']) != 'undefined'? 0 : (typeof $iter57_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter57_idx = 0;
				while (typeof ($iter57_nextval=($iter57_type?($iter57_type > 0?$iter57_iter.next(true,false):$p['wrapped_next']($iter57_iter)):$iter57_array[$iter57_idx++])) != 'undefined') {
					data = $iter57_nextval;
					$iter58_iter = $p['tuple'](['update', 'intersection_update', 'difference_update', 'symmetric_difference_update']);
					if (typeof ($iter58_array = $iter58_iter['__array']) != 'undefined') {
						$iter58_type = 0;
					} else {
						$iter58_iter = $iter58_iter['__iter__']();
						$iter58_type = typeof ($iter58_array = $iter58_iter['__array']) != 'undefined'? 0 : (typeof $iter58_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter58_idx = 0;
					while (typeof ($iter58_nextval=($iter58_type?($iter58_type > 0?$iter58_iter.next(true,false):$p['wrapped_next']($iter58_iter)):$iter58_array[$iter58_idx++])) != 'undefined') {
						methname = $iter58_nextval;
						$iter59_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['S'], $m['R']]);
						if (typeof ($iter59_array = $iter59_iter['__array']) != 'undefined') {
							$iter59_type = 0;
						} else {
							$iter59_iter = $iter59_iter['__iter__']();
							$iter59_type = typeof ($iter59_array = $iter59_iter['__array']) != 'undefined'? 0 : (typeof $iter59_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter59_idx = 0;
						while (typeof ($iter59_nextval=($iter59_type?($iter59_type > 0?$iter59_iter.next(true,false):$p['wrapped_next']($iter59_iter)):$iter59_array[$iter59_idx++])) != 'undefined') {
							g = $iter59_nextval;
							s = $p['set']('january');
							t = s['copy']();
							$p['getattr'](s, methname)($p['list'](g(data)));
							$p['getattr'](t, methname)(g(data));
							self['assertEqual']($p['sorted'](s), $p['sorted'](t));
						}
						self['assertRaises']($p['TypeError'], $p['getattr']($p['set']('january'), methname), $m['X'](data));
						self['assertRaises']($p['TypeError'], $p['getattr']($p['set']('january'), methname), $m['N'](data));
						self['assertRaises']($p['ZeroDivisionError'], $p['getattr']($p['set']('january'), methname), $m['E'](data));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inplace_methods'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestVariousIteratorArgs', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SetTest */


/* end module: SetTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'random.randrange', 'random', 'random.shuffle']
*/
