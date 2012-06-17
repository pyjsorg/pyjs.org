/* start module: NoInlineCodeTest */
$pyjs.loaded_modules['NoInlineCodeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['NoInlineCodeTest'].__was_initialized__) return $pyjs.loaded_modules['NoInlineCodeTest'];
	var $m = $pyjs.loaded_modules["NoInlineCodeTest"];
	$m.__repr__ = function() { return "<module: NoInlineCodeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'NoInlineCodeTest';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_long_1 = new $p['long'](1);
		$m['sys'] = $p['___import___']('sys', null);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['urllib'] = $p['___import___']('urllib', null);
		$m['test'] = function(a) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return null;
		};
		$m['test'].__name__ = 'test';

		$m['test'].__bind_type__ = 0;
		$m['test'].__args__ = [null,null,['a']];
		$m['NoInlineCodeTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NoInlineCodeTest';
			$cls_definition.__md5__ = '4ed9592d20555372275c24dedfaa6d23';
			$method = $pyjs__bind_method2('test_bool', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['bool']($constant_int_1);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,bool,i4;
					i2 = true;
					bool = $m['test'];
					i3 = bool($constant_int_1);
					i4 = true;
					self['assertEqual'](i1, true);
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_bool'] = $method;
			$method = $pyjs__bind_method2('test_int', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['int']($constant_int_1);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var int,i3,i2,i4;
					i2 = $constant_int_1;
					int = $m['test'];
					i3 = int($constant_int_1);
					i4 = $constant_int_1;
					self['assertEqual'](i1, $constant_int_1);
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_int'] = $method;
			$method = $pyjs__bind_method2('test_hexint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['int']($constant_int_1);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var int,i3,i2,hex,i4,$assign1;
					i2 = $constant_int_1;
					$assign1 = $m['test'];
					int = $assign1;
					hex = $assign1;
					i3 = int($constant_int_1);
					i4 = $constant_int_1;
					self['assertEqual'](i1, $constant_int_1);
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hexint'] = $method;
			$method = $pyjs__bind_method2('test_long', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['long']($constant_int_1);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,i4,long;
					i2 = $constant_long_1;
					long = $m['test'];
					i3 = long($constant_int_1);
					i4 = $constant_long_1;
					self['assertEqual'](i1, $constant_long_1);
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_long'] = $method;
			$method = $pyjs__bind_method2('test_float', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['float'](1.0);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var float,i3,i2,i4;
					i2 = 1.0;
					float = $m['test'];
					i3 = float(1.0);
					i4 = 1.0;
					self['assertEqual'](i1, 1.0);
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_float'] = $method;
			$method = $pyjs__bind_method2('test_tuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['tuple']($p['tuple']([$constant_int_1]));
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,i4,tuple;
					i2 = $p['tuple']([$constant_int_1]);
					tuple = $m['test'];
					i3 = tuple($p['tuple']([$constant_int_1]));
					i4 = $p['tuple']([$constant_int_1]);
					self['assertEqual'](i1, $p['tuple']([$constant_int_1]));
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_tuple'] = $method;
			$method = $pyjs__bind_method2('test_list', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $p['list']($p['list']([$constant_int_1]));
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,list,i4;
					i2 = $p['list']([$constant_int_1]);
					list = $m['test'];
					i3 = list($p['list']([$constant_int_1]));
					i4 = $p['list']([$constant_int_1]);
					self['assertEqual'](i1, $p['list']([$constant_int_1]));
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_list'] = $method;
			$method = $pyjs__bind_method2('test_dict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				i1 = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}]);
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,dict,i4;
					i2 = $p['dict']([['a', $constant_int_1]]);
					dict = $m['test'];
					i3 = $pyjs_kwargs_call(null, dict, null, null, [{a:$constant_int_1}]);
					i4 = $p['dict']([['a', $constant_int_1]]);
					self['assertEqual'](i1, $p['dict']([['a', $constant_int_1]]));
					self['assertEqual'](i1, i2);
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_dict'] = $method;
			$method = $pyjs__bind_method2('test_set', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,_set,fn;
				i1 = $p['set']($p['list']([$constant_int_1]));
				_set = $p['set'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,set,i4;
					set = $m['test'];
					i3 = set($p['list']([$constant_int_1]));
					i4 = _set($p['list']([$constant_int_1]));
					self['assertNotEqual'](i1, i3);
					self['assertEqual'](i1, i4);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_set'] = $method;
			$method = $pyjs__bind_method2('test_ArithmeticError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['ArithmeticError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,ArithmeticError,$pyjs_try_err,$div2,$div1;
					ArithmeticError = $p['bool'];
					try {
						a = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise ArithmeticError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, ArithmeticError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ArithmeticError'] = $method;
			$method = $pyjs__bind_method2('test_AttributeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['AttributeError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$pyjs_try_err,AttributeError;
					AttributeError = $p['bool'];
					try {
						a = $p['getattr'](e1, 'noooo');
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise AttributeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, AttributeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_AttributeError'] = $method;
			$method = $pyjs__bind_method2('test_BaseException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['BaseException'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$pyjs_try_err,$div3,$div4,BaseException;
					BaseException = $p['bool'];
					try {
						a = (typeof ($div3=$constant_int_1)==typeof ($div4=$constant_int_0) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise BaseException');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, BaseException));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_BaseException'] = $method;
			$method = $pyjs__bind_method2('test_Exception', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['Exception'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,Exception,e,$pyjs_try_err,$div6,$div5;
					Exception = $p['bool'];
					try {
						a = (typeof ($div5=$constant_int_1)==typeof ($div6=$constant_int_0) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise Exception');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, Exception));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_Exception'] = $method;
			$method = $pyjs__bind_method2('_test_GeneratorExit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['GeneratorExit'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,GeneratorExit,e,$div8,$pyjs_try_err,$div7;
					GeneratorExit = $p['bool'];
					try {
						a = (typeof ($div7=$constant_int_1)==typeof ($div8=$constant_int_0) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise GeneratorExit');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, GeneratorExit));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_GeneratorExit'] = $method;
			$method = $pyjs__bind_method2('test_ImportError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['ImportError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var ImportError,e,$pyjs_try_err,nosuchmodule;
					ImportError = $p['bool'];
					try {
						nosuchmodule = $p['___import___']('nosuchmodule', null);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise ImportError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, ImportError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ImportError'] = $method;
			$method = $pyjs__bind_method2('test_IndexError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['IndexError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,IndexError,$pyjs_try_err,e,$2,$1;
					IndexError = $p['bool'];
					try {
						a = (typeof ($1=$p['list']([$constant_int_0])).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise IndexError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, IndexError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_IndexError'] = $method;
			$method = $pyjs__bind_method2('test_KeyError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['KeyError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,KeyError,$pyjs_try_err,$4,$3;
					KeyError = $p['bool'];
					try {
						a = (typeof ($3=$pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}])).__array != 'undefined'?
							((typeof $3.__array[$4='b']) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__('b'));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise KeyError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, KeyError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_KeyError'] = $method;
			$method = $pyjs__bind_method2('test_LookupError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['LookupError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,LookupError,e,$pyjs_try_err;
					LookupError = $p['bool'];
					try {
						a = $p['set']($p['list']([$constant_int_1]))['remove']($constant_int_2);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise LookupError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, LookupError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_LookupError'] = $method;
			$method = $pyjs__bind_method2('_test_NameError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['NameError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var NameError,a,$pyjs_try_err,e;
					NameError = $p['bool'];
					try {
						a = (typeof nosuchname == "undefined"?$m.nosuchname:nosuchname);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise NameError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, NameError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_NameError'] = $method;
			$method = $pyjs__bind_method2('_test_RuntimeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['RuntimeError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,$iter1_nextval,$iter1_type,RuntimeError,$iter1_iter,$pyjs_try_err,$iter1_array,v,e,k,$iter1_idx;
					RuntimeError = $p['bool'];
					try {
						a = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1, b:$constant_int_2, c:$constant_int_3}]);
						$iter1_iter = a['iteritems']();
						if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter.__iter__();
							$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
							k = $tupleassign1[0];
							v = $tupleassign1[1];
							a.__setitem__($p['sprintf']('_%s', k), v);
						}
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise RuntimeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, RuntimeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_RuntimeError'] = $method;
			$method = $pyjs__bind_method2('test_StandardError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['StandardError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,StandardError,$div10,$pyjs_try_err,$div9;
					StandardError = $p['bool'];
					try {
						a = (typeof ($div9=$constant_int_1)==typeof ($div10=$constant_int_0) && typeof $div9=='number' && $div10 !== 0?
							$div9/$div10:
							$p['op_div']($div9,$div10));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise StandardError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, StandardError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_StandardError'] = $method;
			$method = $pyjs__bind_method2('_test_StopIteration', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['StopIteration'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var StopIteration,a,$pyjs_try_err,e,g;
					g = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

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
								for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[0] = -1;
									throw $exc;
								}
								$yield_value = null;
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
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					StopIteration = $p['bool'];
					try {
						a = g();
						a['next']();
						a['next']();
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise StopIteration');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, StopIteration));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_StopIteration'] = $method;
			$method = $pyjs__bind_method2('test_TypeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['TypeError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,TypeError,e,$add2,$pyjs_try_err,$add1;
					TypeError = $p['bool'];
					try {
						a = (typeof ($add1=$constant_int_1)==typeof ($add2='a') && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise TypeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, TypeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_TypeError'] = $method;
			$method = $pyjs__bind_method2('test_ValueError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['ValueError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,$pyjs_try_err,e,ValueError;
					ValueError = $p['bool'];
					try {
						a = $p['list']($p['list']([$constant_int_1]))['index']($constant_int_2);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise ValueError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, ValueError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ValueError'] = $method;
			$method = $pyjs__bind_method2('test_ZeroDivisionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				e1 = $p['ZeroDivisionError'];
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$div11,$div12,ZeroDivisionError,$pyjs_try_err;
					ZeroDivisionError = $p['bool'];
					try {
						a = (typeof ($div11=$constant_int_1)==typeof ($div12=$constant_int_0) && typeof $div11=='number' && $div12 !== 0?
							$div11/$div12:
							$p['op_div']($div11,$div12));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							self['fail']('Failed to raise ZeroDivisionError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								self['assertTrue']($p['isinstance'](e, e1));
								self['assertFalse']($p['isinstance'](e, ZeroDivisionError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				fn();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ZeroDivisionError'] = $method;
			$method = $pyjs__bind_method2('test_ArgsScoping', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var args,fn,collection,kwargs;
				collection = $p['list']([]);
				fn = function(i) {
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if (typeof kwargs == 'undefined') {
						kwargs = $p['__empty_dict']();
						if (typeof i != 'undefined') {
							if (i !== null && typeof i['$pyjs_is_kwarg'] != 'undefined') {
								kwargs = i;
								i = arguments[1];
							}
						} else {
						}
					}
					var $cmp1,$cmp2,$add3,$bool1,$add4;
					if ((($bool1=((($cmp1=i)===($cmp2=$constant_int_2)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
							false :
							(typeof $bool1=='object'?
								(typeof $bool1.__nonzero__=='function'?
									$bool1.__nonzero__() :
									(typeof $bool1.__len__=='function'?
										($bool1.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						fn((typeof ($add3=i)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4)));
					}
					collection['append']($p['tuple']([i, args, kwargs]));
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = ['args',['kwargs'],['i']];
				args = $p['tuple']([$constant_int_2, $constant_int_3]);
				kwargs = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:'a', b:'b'}]);
				collection['append']($p['tuple']([$constant_int_0, args, kwargs]));
				$pyjs_kwargs_call(null, fn, args, kwargs, [{}, $constant_int_1]);
				self['assertEqual'](collection, $p['list']([$p['tuple']([$constant_int_0, $p['tuple']([$constant_int_2, $constant_int_3]), $p['dict']([['a', 'a'], ['b', 'b']])]), $p['tuple']([$constant_int_2, $p['tuple']([]), $p['dict']([])]), $p['tuple']([$constant_int_1, $p['tuple']([$constant_int_2, $constant_int_3]), $p['dict']([['a', 'a'], ['b', 'b']])])]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ArgsScoping'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NoInlineCodeTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end NoInlineCodeTest */


/* end module: NoInlineCodeTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'urllib', 'nosuchmodule']
*/
