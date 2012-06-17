/* start module: BuiltinTest */
$pyjs.loaded_modules['BuiltinTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['BuiltinTest'].__was_initialized__) return $pyjs.loaded_modules['BuiltinTest'];
	var $m = $pyjs.loaded_modules["BuiltinTest"];
	$m.__repr__ = function() { return "<module: BuiltinTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BuiltinTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool1,$pyjs_try_err;
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
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_10000 = new $p['int'](10000);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_123456789 = new $p['int'](123456789);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_12345 = new $p['int'](12345);
		var $constant_int_10000000 = new $p['int'](10000000);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_81 = new $p['int'](81);
		var $constant_int_1234 = new $p['int'](1234);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_2007 = new $p['int'](2007);
		var $constant_int_9999 = new $p['int'](9999);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_123 = new $p['int'](123);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_4 = new $p['long'](4);
		var $constant_long_5 = new $p['long'](5);
		var $constant_long_100 = new $p['long'](100);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['PY27_BEHAVIOUR'] = $p['___import___']('UnitTest.PY27_BEHAVIOUR', null, null, false);
		try {
			$m['builtin_value'] = $p['getattr']((typeof builtin == "undefined"?$m.builtin:builtin), 'value');
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				$m['builtin_value'] = null;
			}
		}
		if ((($bool1=false) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['builtin'] = $p['___import___']('builtin', null);
		}
		$m['builtin'] = $p['___import___']('builtin', null);
		$m['CLS'] = $p['___import___']('imports.cls.CLS', null, null, false);
		$m['CLS1'] = $p['___import___']('imports.cls1.CLS', null, null, false);
		$m['other'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}

			return kwargs;
		};
		$m['other'].__name__ = 'other';

		$m['other'].__bind_type__ = 0;
		$m['other'].__args__ = [null,['kwargs']];
		$m['foo'] = function(_some, _long, _list, _of, _arguments) {
			if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
			var _additional;
			_additional = $constant_int_5;
			return $pyjs_kwargs_call(null, $m['other'], null, $p.dict({'_some': _some,'_list': _list,'_additional': _additional,'_long': _long,'_of': _of,'_arguments': _arguments}), [{}]);
		};
		$m['foo'].__name__ = 'foo';

		$m['foo'].__bind_type__ = 0;
		$m['foo'].__args__ = [null,null,['_some'],['_long'],['_list'],['_of'],['_arguments']];
		$m['ColourThing'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '9825483768d39b83ef27351285b90816';
			$method = $pyjs__bind_method2('rgb', function() {
				if (this.__is_instance__ === true) {
					if ($pyjs.options.arg_count && arguments.length != -1) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length+1);
				} else {
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				}
				var fset,fget;
				fset = function(self, rgb) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

					var $tupleassign1 = $p['__ass_unpack'](rgb, 3, null);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('r', $tupleassign1[0]) : $p['setattr'](self, 'r', $tupleassign1[0]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('g', $tupleassign1[1]) : $p['setattr'](self, 'g', $tupleassign1[1]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', $tupleassign1[2]) : $p['setattr'](self, 'b', $tupleassign1[2]); 
					return null;
				};
				fset.__name__ = 'fset';

				fset.__bind_type__ = 0;
				fset.__args__ = [null,null,['self'],['rgb']];
				fget = function(self) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					return $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b')]);
				};
				fget.__name__ = 'fget';

				fget.__bind_type__ = 0;
				fget.__args__ = [null,null,['self']];
				return $pyjs_kwargs_call(null, $p['property'], null, $p.dict({'fset': fset,'fget': fget}), [{}]);
			}
	, 1, [null,null]);
			$cls_definition['rgb'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ColourThing', $p['tuple']($bases), $data);
		})();
		$m['C'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = 'fd59be65a92797103e0e5d5a603763a9';
			$method = $pyjs__bind_method2('x', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fd59be65a92797103e0e5d5a603763a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $p['property']($p['staticmethod']($method));
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('C', $p['tuple']($bases), $data);
		})();
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '74ea3024d40ef457630a2dc41fd952a0';
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$m['LocalsTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '6899ef27534aeff6a456220b70e6d580';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('testargs', function(test1, test2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					test1 = arguments[1];
					test2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p.dict({'test1': test1,'self': self,'test2': test2});
			}
	, 1, [null,null,['self'],['test1'],['test2']]);
			$cls_definition['testargs'] = $method;
			$method = $pyjs__bind_method2('testkwargs', function(test1, test2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					test1 = arguments[1];
					test2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof test1 == 'undefined') test1=arguments.callee.__args__[3][1];
				if (typeof test2 == 'undefined') test2=arguments.callee.__args__[4][1];

				return $p.dict({'test1': test1,'self': self,'test2': test2});
			}
	, 1, [null,null,['self'],['test1', null],['test2', null]]);
			$cls_definition['testkwargs'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LocalsTest', $p['tuple']($bases), $data);
		})();
		$m['BuiltinTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '334de2122148adba7d37466708b0c4f6';
			$method = $pyjs__bind_method2('testMinMax', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['max']($constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4), $constant_int_4);
				self['assertEqual']($p['min']($constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4), $constant_int_1);
				self['assertEqual']($p['max']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $constant_int_4);
				self['assertEqual']($p['min']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $constant_int_1);
				self['assertTrue']($p['op_eq']($p['max']($p['list']([$constant_int_5, $constant_int_3, $constant_int_4]), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), 'max([5,3,4],[6,1,2])');
				self['assertTrue']($p['op_eq']($p['min']($p['list']([$constant_int_5, $constant_int_3, $constant_int_4]), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), $p['list']([$constant_int_5, $constant_int_3, $constant_int_4])), 'min([5,3,4],[6,1,2])');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMinMax'] = $method;
			$method = $pyjs__bind_method2('testIterProperty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,o,$iter1_iter,$iter2_idx,$pyjs_try_err,$iter1_array,y,$iter2_type,tst,$iter2_array,$iter1_idx;
				o = $m['C']();
				tst = $p['list']([]);
				$iter1_iter = $p['iter']($p['getattr'](o, 'x'));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					y = $iter1_nextval;
					tst['append'](y);
				}
				self['assertTrue'](tst, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				tst = $p['list']([]);
				try {
					$iter2_iter = $p['getattr'](o, 'x');
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						y = $iter2_nextval;
						tst['append'](y);
					}
					self['assertTrue'](tst, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('#490 - no function iter.__iter__ not a function');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIterProperty'] = $method;
			$method = $pyjs__bind_method2('testInt', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$10,$pyjs_try_err,$8,$9,$6,$7,$4,$5,$2,$3,$1;
				self['assertEqual']($p['int']('5'), $constant_int_5);
				self['assertEqual']($p['int']('09'), $constant_int_9);
				self['assertEqual']($constant_int_6, $constant_int_6);
				self['assertEqual']($p['int']('0'), $constant_int_0);
				self['assertEqual']($p['int']($constant_int_0), $constant_int_0);
				self['assertEqual']($p['int']('-1'), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				self['assertEqual']($p['int']('- 2'), (typeof ($usub2=$constant_int_2)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				self['assertEqual']($p['int'](' - 3'), (typeof ($usub3=$constant_int_3)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				try {
					$p['int']('');
					self['fail']("No int() argument error raised: int('')");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($1=e).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_0)), "invalid literal for int() with base 10: ''");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['int'](' ');
					self['fail']("No int() argument error raised: int(' ')");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($3=e).__array != 'undefined'?
							((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__($constant_int_0)), "invalid literal for int() with base 10: ''");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['int']('not int');
					self['fail']("No int() argument error raised: int('not-int')");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($5=e).__array != 'undefined'?
							((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__($constant_int_0)), "invalid literal for int() with base 10: 'not int'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['int']($constant_int_1, $constant_int_10);
					self['fail']('No int() argument error raised: int(1, 10)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($7=e).__array != 'undefined'?
							((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__($constant_int_0)), "int() can't convert non-string with explicit base");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['int']('10px');
					self['fail']("No int() argument error raised: int('10px')");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($9=e).__array != 'undefined'?
							((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__($constant_int_0)), "invalid literal for int() with base 10: '10px'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInt'] = $method;
			$method = $pyjs__bind_method2('testFloat', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,e,$11,$12,$13,$pyjs_try_err;
				self['assertEqual']($p['float']('5.1'), 5.1);
				self['assertEqual']($p['float']('09'), $constant_int_9);
				self['assertEqual'](6.1, 6.1);
				self['assertEqual']($p['float']('0'), $constant_int_0);
				self['assertEqual']($p['float']($constant_int_0), $constant_int_0);
				try {
					$p['float']('not float');
					self['fail']("No float('not float') argument error raised");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertIn']((typeof ($11=e).__array != 'undefined'?
							((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
								$11.__getitem__($12)):
								$11.__getitem__($constant_int_0)), $p['list'](['invalid literal for float(): not float', 'could not convert string to float: not float']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['float']('');
					self['fail']("No float('') argument error raised");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertIn']((typeof ($13=e).__array != 'undefined'?
							((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__($constant_int_0)), $p['list'](['empty string for float()', 'could not convert string to float: ']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					$p['float'](' ');
					self['fail']("No float(' ') argument error raised");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertIn']((typeof ($15=e).__array != 'undefined'?
							((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
								$15.__getitem__($16)):
								$15.__getitem__($constant_int_0)), $p['list'](['empty string for float()', 'could not convert string to float: ']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['assertTrue']($p['isinstance'](1.0, $p['float']), '1.0 should be instance of float');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFloat'] = $method;
			$method = $pyjs__bind_method2('testOrdChr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
				$iter3_iter = $p['range']($constant_int_256);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['assertEqual']($p['ord']($p['chr'](i)), i);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOrdChr'] = $method;
			$method = $pyjs__bind_method2('testMod', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod20,$mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$mod5,$mod4,$mod7,$mod6,$mod1,$mod3,$mod2,$mod9,$mod8,$mod15,$mod14,$mod17,$mod16,$mod11,$mod10,$mod13,$mod12,$mod19,$mod18;
				self['assertEqual']((typeof ($mod1=$constant_int_12)==typeof ($mod2=$constant_int_5) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), $constant_int_2);
				self['assertEqual']((typeof ($mod3=(typeof ($usub4=0.4)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))==typeof ($mod4=$constant_int_1) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0.6, 'Modulo error 1 for negative base, bug #473');
				self['assertEqual']((typeof ($mod5=(typeof ($usub5=0.3)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))==typeof ($mod6=1.0) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), 0.7);
				self['assertEqual']((typeof ($mod7=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))==typeof ($mod8=$constant_int_2) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)), $constant_int_1);
				self['assertEqual']((typeof ($mod9=(typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7)))==typeof ($mod10=(typeof ($usub8=$constant_int_2)=='number'?
					-$usub8:
					$p['op_usub']($usub8))) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)), (typeof ($usub9=$constant_int_1)=='number'?
					-$usub9:
					$p['op_usub']($usub9)));
				self['assertEqual']((typeof ($mod11=(typeof ($usub10=$constant_int_1)=='number'?
					-$usub10:
					$p['op_usub']($usub10)))==typeof ($mod12=$constant_long_3) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)), $constant_long_2);
				self['assertEqual']((typeof ($mod13=(typeof ($usub11=$constant_int_2)=='number'?
					-$usub11:
					$p['op_usub']($usub11)))==typeof ($mod14=(typeof ($usub12=$constant_long_3)=='number'?
					-$usub12:
					$p['op_usub']($usub12))) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14)), (typeof ($usub13=$constant_long_2)=='number'?
					-$usub13:
					$p['op_usub']($usub13)));
				self['assertEqual']((typeof ($mod15=(typeof ($usub14=$constant_long_1)=='number'?
					-$usub14:
					$p['op_usub']($usub14)))==typeof ($mod16=$constant_int_4) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16)), $constant_long_3);
				self['assertEqual']((typeof ($mod17=(typeof ($usub15=$constant_long_3)=='number'?
					-$usub15:
					$p['op_usub']($usub15)))==typeof ($mod18=(typeof ($usub16=$constant_int_4)=='number'?
					-$usub16:
					$p['op_usub']($usub16))) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18)), (typeof ($usub17=$constant_long_3)=='number'?
					-$usub17:
					$p['op_usub']($usub17)));
				self['assertEqual']((typeof ($mod19=(typeof ($usub18=$constant_long_1)=='number'?
					-$usub18:
					$p['op_usub']($usub18)))==typeof ($mod20=$constant_long_5) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20)), $constant_long_4);
				self['assertEqual']((typeof ($mod21=(typeof ($usub19=$constant_long_4)=='number'?
					-$usub19:
					$p['op_usub']($usub19)))==typeof ($mod22=(typeof ($usub20=$constant_long_5)=='number'?
					-$usub20:
					$p['op_usub']($usub20))) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22)), (typeof ($usub21=$constant_long_4)=='number'?
					-$usub21:
					$p['op_usub']($usub21)));
				self['assertEqual']((typeof ($mod23=(typeof ($usub22=1.0)=='number'?
					-$usub22:
					$p['op_usub']($usub22)))==typeof ($mod24=$constant_int_6) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24)), 5.0);
				self['assertEqual']((typeof ($mod25=(typeof ($usub23=5.0)=='number'?
					-$usub23:
					$p['op_usub']($usub23)))==typeof ($mod26=(typeof ($usub24=$constant_int_6)=='number'?
					-$usub24:
					$p['op_usub']($usub24))) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26)), (typeof ($usub25=5.0)=='number'?
					-$usub25:
					$p['op_usub']($usub25)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMod'] = $method;
			$method = $pyjs__bind_method2('testPower', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow2,$pow1;
				self['assertEqual']((typeof ($pow1=$constant_int_3)==typeof ($pow2=$constant_int_4) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)), $constant_int_81);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPower'] = $method;
			$method = $pyjs__bind_method2('testPowerfunc', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['pow']($constant_int_10, $constant_int_3), $constant_int_1000);
				self['assertEqual']($p['pow']($constant_int_10, $constant_int_3, $constant_int_7), $constant_int_6);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPowerfunc'] = $method;
			$method = $pyjs__bind_method2('testHex', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $17,h,$18,$pyjs_try_err,why;
				self['assertEqual']($p['hex']($constant_int_23), '0x17');
				try {
					h = $p['hex'](23.2);
					self['fail']('No hex() argument error raised');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						why = $pyjs_try_err;
						self['assertEqual']((typeof ($17=$p['getattr'](why, 'args')).__array != 'undefined'?
							((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__($constant_int_0)), "hex() argument can't be converted to hex");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testHex'] = $method;
			$method = $pyjs__bind_method2('testOct', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,why,o;
				self['assertEqual']($p['oct']($constant_int_23), '027');
				try {
					o = $p['oct'](23.2);
					self['fail']('No oct() argument error raised');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						why = $pyjs_try_err;
						self['assertEqual']($p['str'](why), "oct() argument can't be converted to oct");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOct'] = $method;
			$method = $pyjs__bind_method2('testRound', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['round'](13.12345), 13.0);
				self['assertEqual']($p['round'](13.12345, $constant_int_3), 13.123);
				self['assertEqual']($p['round']((typeof ($usub26=13.12345)=='number'?
					-$usub26:
					$p['op_usub']($usub26))), (typeof ($usub27=13.0)=='number'?
					-$usub27:
					$p['op_usub']($usub27)));
				self['assertEqual']($p['round']((typeof ($usub28=13.12345)=='number'?
					-$usub28:
					$p['op_usub']($usub28)), $constant_int_3), (typeof ($usub29=13.123)=='number'?
					-$usub29:
					$p['op_usub']($usub29)));
				self['assertEqual']($p['round'](13.62345), 14.0);
				self['assertEqual']($p['round'](13.62345, $constant_int_3), 13.623);
				self['assertEqual']($p['round']((typeof ($usub30=13.62345)=='number'?
					-$usub30:
					$p['op_usub']($usub30))), (typeof ($usub31=14.0)=='number'?
					-$usub31:
					$p['op_usub']($usub31)));
				self['assertEqual']($p['round']((typeof ($usub32=13.62345)=='number'?
					-$usub32:
					$p['op_usub']($usub32)), $constant_int_3), (typeof ($usub33=13.623)=='number'?
					-$usub33:
					$p['op_usub']($usub33)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRound'] = $method;
			$method = $pyjs__bind_method2('testDivmod', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var q,$cmp2,$cmp1,test_set,p,$21,$iter4_nextval,$22,$19,$sub2,$iter4_idx,y,$iter4_type,$20,$iter4_array,x,$sub1,$iter4_iter,d;
				test_set = $p['list']([$p['tuple']([$constant_int_14, $constant_int_3, $constant_int_4, $constant_int_2]), $p['tuple']([14.1, $constant_int_3, 4.0, 2.1]), $p['tuple']([14.1, 3.1, 4.0, 1.7])]);
				$iter4_iter = test_set;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter4_nextval, 4, null);
					x = $tupleassign2[0];
					y = $tupleassign2[1];
					p = $tupleassign2[2];
					q = $tupleassign2[3];
					d = $p['divmod'](x, y);
					self['assertEqual']((typeof ($19=d).__array != 'undefined'?
						((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__($constant_int_0)), p);
					self['assertEqual'](((($cmp1=$p['abs']((typeof ($sub1=(typeof ($21=d).__array != 'undefined'?
						((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__($constant_int_1)))==typeof ($sub2=q) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))))===($cmp2=1e-05)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1), true);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivmod'] = $method;
			$method = $pyjs__bind_method2('testFloorDiv', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv6,$floordiv5,$floordiv4,$floordiv3,$floordiv2,$floordiv1;
				self['assertEqual']($constant_int_1, (typeof ($floordiv1=$constant_int_4)==typeof ($floordiv2=$constant_int_3) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2)));
				self['assertEqual']($constant_int_1, (typeof ($floordiv3=$constant_int_5)==typeof ($floordiv4=$constant_int_3) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math.floor($floordiv3/$floordiv4):
					$p['op_floordiv']($floordiv3,$floordiv4)));
				self['assertEqual']($constant_int_2, (typeof ($floordiv5=$constant_int_6)==typeof ($floordiv6=$constant_int_3) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math.floor($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFloorDiv'] = $method;
			$method = $pyjs__bind_method2('testAll', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, 'a'])), true);
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, null, 'a'])), false);
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, '', 'a'])), false);
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, false, 'a'])), false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAll'] = $method;
			$method = $pyjs__bind_method2('testAny', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, 'a'])), true);
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, null, 'a'])), true);
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, '', 'a'])), true);
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, false, 'a'])), true);
				self['assertEqual']($p['any']($p['list']([false, '', null])), false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAny'] = $method;
			$method = $pyjs__bind_method2('testRepr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,i1,t2,t1,l2,l1,d2,d1;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l2 = $p['list'](['a', 'b', 'c']);
				t1 = $p['tuple']([$constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7]);
				t2 = $p['tuple'](['aa', 'bb']);
				d1 = $p['dict']([['a', $constant_int_1], ['b', 'B']]);
				d2 = $p['dict']([[$constant_int_1, l1], [$constant_int_2, l2], [$constant_int_3, t1], [$constant_int_4, t2], [$constant_int_5, d1]]);
				i1 = $constant_int_10000;
				f1 = 1.5;
				self['assertEqual']($p['repr'](l1), '[1, 2, 3]');
				self['assertEqual'](l1['__repr__'](), '[1, 2, 3]');
				self['assertEqual']($p['repr'](l2), "['a', 'b', 'c']");
				self['assertEqual']($p['repr'](t1), '(4, 5, 6, 7)');
				self['assertEqual']($p['repr'](t2), "('aa', 'bb')");
				self['assertEqual']($p['repr'](d1), "{'a': 1, 'b': 'B'}");
				self['assertEqual']($p['repr'](d2), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}");
				self['assertEqual'](d2['__repr__'](), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}");
				self['assertEqual']($p['repr'](i1), '10000');
				self['assertEqual'](i1['__repr__'](), '10000');
				self['assertEqual']($p['repr'](f1), '1.5');
				self['assertEqual'](f1['__repr__'](), '1.5', 'float.__repr__() returns type instead of value, bug #487');
				self['assertEqual']($p['repr'](l1), '[1, 2, 3]');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			$method = $pyjs__bind_method2('testIsInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,Cls;
				s = 'hello';
				self['assertTrue']($p['isinstance'](s, $p['str']), 's is a string');
				self['assertFalse']($p['isinstance'](s, $p['int']), 's is a string not an integer');
				s = $constant_int_1;
				self['assertFalse']($p['isinstance'](s, $p['str']), 's is an integer not a string');
				self['assertTrue']($p['isinstance'](s, $p['int']), 's is an integer');
				self['assertFalse']($p['isinstance']('', $p['list']), "'' is not instance of list");
				self['assertTrue']($p['isinstance']($p['list']([]), $p['list']), '[] is an instance of list');
				Cls = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'ce745f267f05f4829c02418464a4da11';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Cls', $p['tuple']($bases), $data);
				})();
				self['assertTrue']($p['isinstance'](Cls, $p['type']), 'Bug #578 classes are instances of type');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstance'] = $method;
			$method = $pyjs__bind_method2('testImport', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cls1,imports,$pyjs_try_err,overrideme;
				self['assertEqual']($m['builtin_value'], null, 'The builtin is loaded before import!');
				try {
					self['assertEqual']($p['getattr']($m['builtin'], 'value'), $m['builtin']['get_value']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('Import failed for builtin');
					}
				}
				overrideme = $p['___import___']('imports.overrideme', null, null, false);
				cls1 = $m['CLS1']();
				self['assertTrue']($p['op_is']($m['CLS'], $m['CLS1']), 'CLS is CLS1');
				self['assertTrue']($p['isinstance'](cls1, $m['CLS']), 'isinstance(cls1, CLS)');
				self['assertEqual'](overrideme, 'not overridden');
				imports = $p['___import___']('imports.override', null);
				self['assertEqual'](overrideme, 'not overridden');
				overrideme = $p['___import___']('imports.overrideme', null, null, false);
				try {
					self['assertTrue']($p['op_is']($p['getattr'](overrideme, 'overridden'), true), 'overrideme.overridden is True');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']("Exception on 'overrideme.overridden is True'");
					}
				}
				imports = $p['___import___']('imports', null);
				self['assertTrue']($p['op_is']($m['CLS'], $p['getattr']($p['getattr'](imports, 'loccls'), 'CLS')), 'CLS is imports.loccls.CLS');
				self['assertTrue']($p['op_is']($m['CLS'], $p['getattr']($p['getattr'](imports, 'upcls'), 'CLS')), 'CLS is imports.upcls.CLS');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$method = $pyjs__bind_method2('testImport', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict_bltin,__builtin__,imports_doc,imports_name;
				self['fail']('Bug #XXX - from X import .. not completely implemented, only considering modules');
				return null;
				imports_doc = $p['___import___']('imports.__doc__', null, null, false);
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), '__doc__'), imports_doc, 'Module object must have __doc__ attribute');
				imports_name = $p['___import___']('imports.__name__', null, null, false);
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), '__name__'), imports_name);
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_masked'), false, 'from ... import * should respect __all__, #615');
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_override'), true, 'Should override globals, #615');
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import1'), $constant_int_1);
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import2'), $constant_int_3);
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import3'), $constant_int_3);
				__builtin__ = $p['___import___']('__builtin__', null);
				self['assertEqual']($p['getattr'](__builtin__, 'dict'), $p['dict'], '__builtin__.dict != dict');
				dict_bltin = $p['___import___']('__builtin__.dict', null, null, false);
				self['assertEqual'](dict_bltin, $p['dict'], '__builtin__.dict != dict');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$method = $pyjs__bind_method2('testBitOperations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4,$sub3,$sub6,$sub5,$sub4;
				self['assertEqual']($p['op_bitshiftleft']($constant_int_1,(typeof ($sub3=$constant_int_2)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))), $constant_int_2, 'shift error 1');
				self['assertEqual']((typeof ($sub5=$p['op_bitshiftleft']($constant_int_1,$constant_int_2))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)), $constant_int_3, 'shift error 2');
				self['assertEqual']($p['op_bitand2']($constant_int_1, (typeof ($add1=$constant_int_3)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), $constant_int_0, 'and error 1');
				self['assertEqual']((typeof ($add3=$p['op_bitand2']($constant_int_1, $constant_int_3))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)), $constant_int_2, 'and error 2');
				self['assertEqual']($p['op_bitshiftright']($constant_int_4,$constant_int_2), $constant_int_1, 'right shift error 1');
				self['assertEqual']($p['op_bitshiftright']((typeof ($usub34=$constant_int_4)=='number'?
					-$usub34:
					$p['op_usub']($usub34)),$constant_int_2), (typeof ($usub35=$constant_int_1)=='number'?
					-$usub35:
					$p['op_usub']($usub35)), 'right shift error 2 - bug #341');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBitOperations'] = $method;
			$method = $pyjs__bind_method2('testLocals', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fn4,fn3,fn2,fn1,la,keys,args,$24,argsreturn,inner_locals,outer_locals,v1,v2,local_vars,t,$len1,$23;
				v1 = $constant_int_1;
				v2 = $constant_int_2;
				local_vars = $p.dict({'v1': v1,'self': self,'v2': v2});
				self['assertEqual']((($len1=local_vars) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_3);
				self['assertEqual']((typeof ($23=local_vars).__array != 'undefined'?
					((typeof $23.__array[$24='v1']) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__('v1')), $constant_int_1);
				fn1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,fn2;
					a = $constant_int_1;
					fn2 = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var c,b;
						b = $constant_int_1;
						c = $p.dict({'b': b});
						return c;
					};
					fn2.__name__ = 'fn2';

					fn2.__bind_type__ = 0;
					fn2.__args__ = [null,null];
					return fn2();
				};
				fn1.__name__ = 'fn1';

				fn1.__bind_type__ = 0;
				fn1.__args__ = [null,null];
				local_vars = fn1();
				self['assertEqual'](local_vars, $p['dict']([['b', $constant_int_1]]));
				fn2 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var g,lx;
					lx = $constant_int_3;
					g = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var li;
						li = lx;
						return $p.dict({'li': li});
					};
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					return g();
				};
				fn2.__name__ = 'fn2';

				fn2.__bind_type__ = 0;
				fn2.__args__ = [null,null];
				self['assertEqual'](fn2(), $p['dict']([['li', $constant_int_3], ['lx', $constant_int_3]]), 'locals() bugs: #589');
				fn3 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var g,lx;
					lx = $constant_int_3;
					g = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var lh;
						lh = function() {
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
							var li;
							li = lx;
							return $p.dict({'li': li});
						};
						lh.__name__ = 'lh';

						lh.__bind_type__ = 0;
						lh.__args__ = [null,null];
						return $p['tuple']([$p.dict({'lh': lh}), lh()]);
					};
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					return g();
				};
				fn3.__name__ = 'fn3';

				fn3.__bind_type__ = 0;
				fn3.__args__ = [null,null];
				var $tupleassign3 = $p['__ass_unpack'](fn3(), 2, null);
				outer_locals = $tupleassign3[0];
				inner_locals = $tupleassign3[1];
				self['assertEqual'](inner_locals, $p['dict']([['li', $constant_int_3], ['lx', $constant_int_3]]), 'locals() bugs: #589');
				keys = outer_locals['keys']();
				keys['sort']();
				self['assertEqual'](keys, $p['list'](['lh', 'lx']), 'locals() bugs: #589');
				fn4 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$m['X'] = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'BuiltinTest';
						$cls_definition.__md5__ = '90cf3c7319c973772f9743e9e182253c';
						$cls_definition['x'] = $constant_int_12;
						$method = $pyjs__bind_method2('fn4', function() {
							if (this.__is_instance__ === true) {
								var self = this;
								if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
							} else {
								var self = arguments[0];
								if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
								if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
							}
							if ($pyjs.options.arg_instance_type) {
								if (self.prototype.__md5__ !== '90cf3c7319c973772f9743e9e182253c') {
									if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
										$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
									}
								}
							}

							return x;
						}
	, 1, [null,null,['self']]);
						$cls_definition['fn4'] = $method;
						$p.dict({'x': $cls_definition['x'],'fn4': $p['staticmethod']($cls_definition['fn4'])});
						var $bases = new Array(pyjslib.object);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('X', $p['tuple']($bases), $data);
					})();
					return $m['X'];
				};
				fn4.__name__ = 'fn4';

				fn4.__bind_type__ = 0;
				fn4.__args__ = [null,null,['x']];
				self['assertEqual']($p['getattr'](fn4($constant_int_1), 'x'), $constant_int_12);
				args = $p['dict']([['test1', $constant_int_5], ['test2', 'hello']]);
				la = $m['LocalsTest']();
				argsreturn = $pyjs_kwargs_call(la, 'testkwargs', null, args, [{}]);
				args.__setitem__('self', la);
				self['assertEqual'](args, argsreturn);
				args.__delitem__('self');
				argsreturn = $pyjs_kwargs_call(la, 'testargs', null, args, [{}]);
				args.__setitem__('self', la);
				self['assertEqual'](args, argsreturn);
				t = $m['ColourThing']();
				t.__is_instance__ && typeof t.__setattr__ == 'function' ? t.__setattr__('rgb', $constant_int_1) : $p['setattr'](t, 'rgb', $constant_int_1); 
				self['assertEqual']($p['getattr'](t, 'rgb'), $constant_int_1);
				args = $m['foo']($constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4);
				self['assertEqual'](args, $p['dict']([['_some', $constant_int_0], ['_additional', $constant_int_5], ['_of', $constant_int_3], ['_list', $constant_int_2], ['_long', $constant_int_1], ['_arguments', $constant_int_4]]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocals'] = $method;
			$method = $pyjs__bind_method2('testIfExp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool6,$bool4,$bool5,$$var;
				$$var = ((($bool2=true) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				self['assertEqual']($$var, $constant_int_1);
				$$var = ((($bool3=false) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				self['assertEqual']($$var, $constant_int_0);
				$$var = ((($bool4=$p['list']([])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				self['assertEqual']($$var, $constant_int_0);
				$$var = ((($bool6=!(($bool5=$p['list']([])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				self['assertEqual']($$var, $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIfExp'] = $method;
			$method = $pyjs__bind_method2('testRange', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				r = $p['range']($constant_int_3);
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				r = $p['range']($constant_int_2, $constant_int_5);
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3, $constant_int_4]));
				r = $p['range']($constant_int_2, $constant_int_15, $constant_int_3);
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_5, $constant_int_8, $constant_int_11, $constant_int_14]));
				r = $p['range']($constant_int_15, $constant_int_2, (typeof ($usub36=$constant_int_3)=='number'?
					-$usub36:
					$p['op_usub']($usub36)));
				self['assertEqual'](r, $p['list']([$constant_int_15, $constant_int_12, $constant_int_9, $constant_int_6, $constant_int_3]));
				r = $p['range']($constant_int_15, $constant_int_2, $constant_int_3);
				self['assertEqual'](r, $p['list']([]));
				r = $p['range']((typeof ($usub37=$constant_int_6)=='number'?
					-$usub37:
					$p['op_usub']($usub37)), (typeof ($usub38=$constant_int_2)=='number'?
					-$usub38:
					$p['op_usub']($usub38)), (typeof ($usub39=$constant_int_1)=='number'?
					-$usub39:
					$p['op_usub']($usub39)));
				self['assertEqual'](r, $p['list']([]));
				r = $p['range']($constant_int_2, $constant_int_1, $constant_int_2);
				self['assertEqual'](r, $p['list']([]));
				r = $p['range']($constant_int_0, $constant_int_2, $constant_int_2);
				self['assertEqual'](r, $p['list']([$constant_int_0]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRange'] = $method;
			$method = $pyjs__bind_method2('testXRange', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				r = function(){
					var $iter5_nextval,i,$iter5_idx,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
				$iter5_iter = $p['xrange']($constant_int_3);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$collcomp1['append'](i);
				}

	return $collcomp1;}();
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				r = function(){
					var $iter6_idx,$iter6_type,$collcomp2,i,$iter6_array,$iter6_iter,$iter6_nextval;
	$collcomp2 = $p['list']();
				$iter6_iter = $p['xrange']($constant_int_2, $constant_int_5);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					$collcomp2['append'](i);
				}

	return $collcomp2;}();
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3, $constant_int_4]));
				r = function(){
					var $iter7_nextval,i,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,$iter7_type;
	$collcomp3 = $p['list']();
				$iter7_iter = $p['xrange']($constant_int_2, $constant_int_15, $constant_int_3);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					i = $iter7_nextval;
					$collcomp3['append'](i);
				}

	return $collcomp3;}();
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_5, $constant_int_8, $constant_int_11, $constant_int_14]));
				r = function(){
					var $iter8_idx,i,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval;
	$collcomp4 = $p['list']();
				$iter8_iter = $p['xrange']($constant_int_15, $constant_int_2, (typeof ($usub40=$constant_int_3)=='number'?
					-$usub40:
					$p['op_usub']($usub40)));
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					$collcomp4['append'](i);
				}

	return $collcomp4;}();
				self['assertEqual'](r, $p['list']([$constant_int_15, $constant_int_12, $constant_int_9, $constant_int_6, $constant_int_3]));
				r = function(){
					var $iter9_iter,i,$collcomp5,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
	$collcomp5 = $p['list']();
				$iter9_iter = $p['xrange']($constant_int_15, $constant_int_2, $constant_int_3);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$collcomp5['append'](i);
				}

	return $collcomp5;}();
				self['assertEqual'](r, $p['list']([]));
				r = function(){
					var $iter10_nextval,i,$collcomp6,$iter10_idx,$iter10_array,$iter10_type,$iter10_iter;
	$collcomp6 = $p['list']();
				$iter10_iter = $p['xrange']((typeof ($usub41=$constant_int_6)=='number'?
					-$usub41:
					$p['op_usub']($usub41)), (typeof ($usub42=$constant_int_2)=='number'?
					-$usub42:
					$p['op_usub']($usub42)), (typeof ($usub43=$constant_int_1)=='number'?
					-$usub43:
					$p['op_usub']($usub43)));
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					$collcomp6['append'](i);
				}

	return $collcomp6;}();
				self['assertEqual'](r, $p['list']([]));
				self['assertEqual']($p['str']($p['xrange']($constant_int_3)), 'xrange(3)');
				self['assertEqual']($p['str']($p['xrange']($constant_int_3, $constant_int_4)), 'xrange(3, 4)');
				self['assertEqual']($p['str']($p['xrange']($constant_int_3, $constant_int_4, $constant_int_5)), 'xrange(3, 8, 5)');
				self['assertEqual']($p['str']($p['xrange']($constant_int_14, $constant_int_3, (typeof ($usub44=$constant_int_5)=='number'?
					-$usub44:
					$p['op_usub']($usub44)))), 'xrange(14, -1, -5)');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testXRange'] = $method;
			$method = $pyjs__bind_method2('testForLoop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,$iter20_nextval,$iter21_idx,$iter22_array,$iter22_idx,$iter18_iter,$iter21_type,$iter21_array,$iter16_idx,$iter13_idx,X,$iter17_type,$iter15_idx,$iter16_iter,$iter20_array,x,$iter17_iter,$iter22_nextval,$iter15_iter,$iter16_type,$iter20_idx,$mul3,$iter19_nextval,$mul2,$iter19_iter,$iter18_idx,$pyjs_try_err,$mul1,$iter16_nextval,$iter11_idx,$iter13_array,$iter16_test,$iter17_idx,$iter14_test,$iter20_iter,$iter14_array,$iter15_array,$iter14_type,$iter20_type,$iter21_nextval,$iter15_test,$iter11_iter,$iter15_type,$iter12_array,$iter19_array,$iter18_type,$iter17_array,$iter21_iter,$iter19_idx,a,$iter14_iter,$iter11_array,e,$iter11_nextval,$mul4,b,n2,$iter14_idx,$iter14_nextval,$iter16_array,c,$iter18_nextval,$iter13_nextval,d,$iter18_array,$iter13_iter,i,$iter12_type,$iter11_type,l,$iter13_type,$iter12_iter,$iter19_type,$add6,$add7,$iter15_nextval,$add5,n1,$add8,$iter22_iter,$iter12_idx,$iter12_nextval,$iter22_type;
				n1 = $constant_int_0;
				n2 = $constant_int_0;
				$iter11_iter = $p['range']($constant_int_10);
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					n1 = (typeof ($add5=n1)==typeof ($add6=i) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					$iter12_iter = $p['xrange']($constant_int_4);
					if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter.__iter__();
						$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						i = $iter12_nextval;
						n2 = (typeof ($add7=n2)==typeof ($add8=i) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
					}
				}
				self['assertEqual'](n1, $constant_int_45);
				self['assertEqual'](n2, $constant_int_60);
				self['assertEqual'](i, $constant_int_3);
				try {
					$iter13_iter = $p['xrange']($constant_int_4);
					if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter.__iter__();
						$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						i = $iter13_nextval;
						throw ($p['StopIteration']);
					}
					self['fail']('Failed to raise StopIteration');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['assertEqual'](i, $constant_int_0);
				e = $constant_int_0;
				i = (typeof ($usub45=$constant_int_1)=='number'?
					-$usub45:
					$p['op_usub']($usub45));
				$iter14_iter = $p['range']($constant_int_1);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while ($iter14_test = typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
				}
				if (!$iter14_test) {
					e = $constant_int_1;
				}
				self['assertEqual'](i, $constant_int_0);
				self['assertEqual'](e, $constant_int_1);
				e = $constant_int_0;
				i = (typeof ($usub46=$constant_int_1)=='number'?
					-$usub46:
					$p['op_usub']($usub46));
				$iter15_iter = $p['range']($constant_int_0);
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while ($iter15_test = typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
				}
				if (!$iter15_test) {
					e = $constant_int_1;
				}
				self['assertEqual'](i, (typeof ($usub47=$constant_int_1)=='number'?
					-$usub47:
					$p['op_usub']($usub47)));
				self['assertEqual'](e, $constant_int_1, 'bug #316 for X in Y:... else ...');
				e = $constant_int_0;
				i = (typeof ($usub48=$constant_int_1)=='number'?
					-$usub48:
					$p['op_usub']($usub48));
				$iter16_iter = $p['range']($constant_int_1);
				if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter.__iter__();
					$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while ($iter16_test = typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					i = $iter16_nextval;
					e = $constant_int_1;
					break;
				}
				if (!$iter16_test) {
					e = $constant_int_2;
				}
				self['assertEqual'](i, $constant_int_0);
				self['assertEqual'](e, $constant_int_1);
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '4a8702b516c4202a996fe8716388ff38';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				x = X();
				x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $constant_int_1) : $p['setattr'](x, 'a', $constant_int_1); 
				$iter17_iter = $p['list']([$constant_int_3, $constant_int_4, $constant_int_5]);
				if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter.__iter__();
					$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
					x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $iter17_nextval) : $p['setattr'](x, 'a', $iter17_nextval); 
				}
				self['assertEqual']($p['getattr'](x, 'a'), $constant_int_5);
				d = $p['dict']([]);
				$iter18_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter.__iter__();
					$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					d.__setitem__('zz', $iter18_nextval);
				}
				self['assertEqual'](d, $p['dict']([['zz', $constant_int_3]]));
				l = $p['list']([$constant_int_1]);
				$iter19_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter.__iter__();
					$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					l.__setitem__($constant_int_0, $iter19_nextval);
				}
				self['assertEqual'](l, $p['list']([$constant_int_3]));
				l = $p['list']([$constant_int_1, $constant_int_3, $constant_int_4]);
				$iter20_iter = $p['list']([$p['list']([$constant_int_5, $constant_int_6, $constant_int_7])]);
				if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter.__iter__();
					$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					$p['__setslice'](l, $constant_int_1, $constant_int_2, $iter20_nextval);
				}
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_4]));
				x = $p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5])]);
				$iter21_iter = (typeof ($mul1=$p['list']([x]))==typeof ($mul2=$constant_int_5) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter.__iter__();
					$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter21_nextval, 3, null);
					var $tupleassign5 = $p['__ass_unpack']($tupleassign4[0], 2, null);
					a = $tupleassign5[0];
					b = $tupleassign5[1];
					c = $tupleassign4[1];
					var $tupleassign6 = $p['__ass_unpack']($tupleassign4[2], 2, null);
					d = $tupleassign6[0];
					e = $tupleassign6[1];
				}
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				$iter22_iter = (typeof ($mul3=$p['list']([x]))==typeof ($mul4=$constant_int_5) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter.__iter__();
					$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter22_nextval, 3, null);
					var $tupleassign8 = $p['__ass_unpack']($tupleassign7[0], 2, null);
					a = $tupleassign8[0];
					b = $tupleassign8[1];
					c = $tupleassign7[1];
					var $tupleassign9 = $p['__ass_unpack']($tupleassign7[2], 2, null);
					d = $tupleassign9[0];
					e = $tupleassign9[1];
				}
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testForLoop'] = $method;
			$method = $pyjs__bind_method2('testIter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len2,$iter23_type,$iter23_nextval,$cmp3,$cmp4,i,res,j,$iter23_iter,$pyjs_try_err,$iter23_array,$iter23_idx,$bool8;
				i = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '1e14e93d9c6c7a069cde3ffded7f13fa';
					$method = $pyjs__bind_method2('__init__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('idx', $constant_int_0) : $p['setattr'](self, 'idx', $constant_int_0); 
						return null;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__iter__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
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
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add9,$add10,$bool7;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('idx', (typeof ($add9=$p['getattr'](self, 'idx'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))) : $p['setattr'](self, 'idx', (typeof ($add9=$p['getattr'](self, 'idx'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))); 
						if ((($bool7=$p['op_eq']($p['getattr'](self, 'idx'), $constant_int_5)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
								false :
								(typeof $bool7=='object'?
									(typeof $bool7.__nonzero__=='function'?
										$bool7.__nonzero__() :
										(typeof $bool7.__len__=='function'?
											($bool7.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($p['StopIteration']);
						}
						return $p['getattr'](self, 'idx');
					}
	, 1, [null,null,['self']]);
					$cls_definition['next'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('i', $p['tuple']($bases), $data);
				})();
				res = $p['list']([]);
				try {
					$iter23_iter = i();
					if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
						$iter23_type = 0;
					} else {
						$iter23_iter = $iter23_iter.__iter__();
						$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter23_idx = 0;
					while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
						j = $iter23_nextval;
						res['append'](j);
						if ((($bool8=((($cmp3=(($len2=res) === null?$constant_int_0:
							(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
								(typeof $len2.__len__ == 'function'?$len2.__len__():
									(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
										$p['len']($len2))))))===($cmp4=$constant_int_5)?0:
							(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
								($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
								$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
								false :
								(typeof $bool8=='object'?
									(typeof $bool8.__nonzero__=='function'?
										$bool8.__nonzero__() :
										(typeof $bool8.__len__=='function'?
											($bool8.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['fail']('too many items in user-defined iterator');
							break;
						}
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('error in user-defined iterator (caught here so tests can proceed)');
					}
				}
				self['assertEqual'](res, $p['range']($constant_int_1, $constant_int_5));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$method = $pyjs__bind_method2('testSorted', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var lst2,lst1;
				lst1 = $p['range']($constant_int_10);
				lst2 = $p['range']($constant_int_10);
				lst2['reverse']();
				self['assertTrue']($p['op_eq'](lst1, $p['sorted'](lst2)), 'lst1 == sorted(lst2)');
				self['assertTrue']($p['op_eq'](lst1, $p['sorted']($p['xrange']($constant_int_10))), 'lst1 == sorted(xrange(1))');
				self['assertTrue']($p['op_eq'](lst2, $pyjs_kwargs_call(null, $p['sorted'], null, null, [{reverse:true}, $p['xrange']($constant_int_10)])), 'lst2 == sorted(xrange(10), reverse=True)');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSorted'] = $method;
			$method = $pyjs__bind_method2('testReversed', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict1,lst2,lst1,tpl1;
				lst1 = $p['range']($constant_int_10);
				lst2 = $p['range']($constant_int_10);
				lst2['reverse']();
				tpl1 = $p['tuple'](lst1);
				self['assertTrue']($p['op_eq'](lst1, $p['list']($p['reversed'](lst2))), 'lst1 == reversed(lst2)');
				self['assertTrue']($p['op_eq'](lst2, $p['list']($p['reversed']($p['xrange']($constant_int_10)))), 'lst2 == reversed(xrange(10), reverse=True)');
				self['assertTrue']($p['op_eq'](lst2, $p['list']($p['reversed'](tpl1))), 'lst1 == reversed(tpl1)');
				dict1 = $p['dict']([['a', 'A'], ['b', 'B']]);
				self['assertRaises']($p['TypeError'], $p['reversed'], dict1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReversed'] = $method;
			$method = $pyjs__bind_method2('testType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,why,$add12,$add11;
				try {
					self['assertTrue']($p['op_is']($p['type']($p['object']), $p['type']));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						why = $pyjs_try_err;
						self['fail']((typeof ($add11='Bug #229')==typeof ($add12=$p['str'](why)) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['assertTrue']($p['op_is']($p['type']($p['list']([])), $p['type']($p['list']([]))));
				self['assertTrue']($p['op_is']($p['type']($p['list']([])), $p['list']));
				try {
					self['assertTrue']($p['op_eq']($p['type']($p['list']([])), $p['list']));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('Bug #515');
					}
				}
				self['assertTrue']($p['op_is']($p['type'](''), $p['str']), 'str');
				self['assertTrue']($p['op_is']($p['type'](true), $p['bool']), 'bool');
				self['assertTrue']($p['op_is']($p['type']($constant_int_1), $p['int']), 'int');
				self['assertTrue']($p['op_is']($p['type']($constant_long_1), $p['long']), 'long');
				self['assertTrue']($p['op_is']($p['type'](1.1), $p['float']), 'float 1.1');
				self['assertTrue']($p['op_is']($p['type'](1.0), $p['float']), 'float 1.0 issue #524');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testType'] = $method;
			$method = $pyjs__bind_method2('testIter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,lst,fn,G;
				G = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '0334d8912fe29f0351e3336b2ede1c6b';
					$method = $pyjs__bind_method2('__getitem__', function(i) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							i = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0334d8912fe29f0351e3336b2ede1c6b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $cmp5,$cmp7,$cmp6,$cmp8,$bool9;
						if ((($bool9=(((($cmp5=$constant_int_0)===($cmp6=($compare1 = i))?0:
							(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
								($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
								$p['cmp']($cmp5, $cmp6))) < 1)&&((($cmp7=$compare1)===($cmp8=($compare2 = $constant_int_4))?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))) < 1))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9.__nonzero__=='function'?
										$bool9.__nonzero__() :
										(typeof $bool9.__len__=='function'?
											($bool9.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							return i;
						}
						throw ($p['IndexError']('index out of range'));
						return null;
					}
	, 1, [null,null,['self'],['i']]);
					$cls_definition['__getitem__'] = $method;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('G', $p['tuple']($bases), $data);
				})();
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $iter24_idx,i,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,$iter25_idx,$iter25_type,$iter24_iter,$iter24_nextval;
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
							$iter25_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
							if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
								$iter25_type = 0;
							} else {
								$iter25_iter = $iter25_iter.__iter__();
								$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter25_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter25_nextval;
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
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				lst = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				self['assertEqual'](lst, $p['list']($p['iter'](lst)), 'iter(lst)');
				g = G();
				self['assertEqual'](lst, $p['list']($p['iter'](g)), 'iter(g)');
				self['assertEqual'](lst, $p['list']($p['iter']($p['getattr'](fn(), 'next'), $constant_int_5)), 'iter(fn().next, 5)');
				self['assertEqual']($p['list']([$constant_int_0, $constant_int_1]), $p['list']($p['iter']($p['getattr'](fn(), 'next'), $constant_int_2)), 'iter(fn().next, 2)');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$method = $pyjs__bind_method2('testReduce', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1,v;
				var 				$lambda1 = function(x, y) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
					var $add14,$add13;
					return (typeof ($add13=x)==typeof ($add14=y) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['x'],['y']];
				v = $p['reduce']($lambda1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				self['assertEqual'](v, $constant_int_15);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReduce'] = $method;
			$method = $pyjs__bind_method2('testZip', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict1,lst2,lst1,v;
				lst1 = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				lst2 = $p['list']([$constant_int_10, $constant_int_11, $constant_int_12]);
				dict1 = $p['dict']([['a', 'A'], ['b', 'B']]);
				v = $p['zip'](lst1);
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0]), $p['tuple']([$constant_int_1]), $p['tuple']([$constant_int_2]), $p['tuple']([$constant_int_3])]));
				v = $p['zip'](lst1, lst2);
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0, $constant_int_10]), $p['tuple']([$constant_int_1, $constant_int_11]), $p['tuple']([$constant_int_2, $constant_int_12])]));
				v = $p['zip'](dict1);
				self['assertEqual'](v, $p['list']([$p['tuple'](['a']), $p['tuple'](['b'])]));
				v = $p['zip'](lst1, dict1, lst2);
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0, 'a', $constant_int_10]), $p['tuple']([$constant_int_1, 'b', $constant_int_11])]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZip'] = $method;
			$method = $pyjs__bind_method2('testSum', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($constant_int_6, $p['sum']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3])));
				self['assertEqual']($constant_int_5, $p['sum']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), (typeof ($usub49=$constant_int_1)=='number'?
					-$usub49:
					$p['op_usub']($usub49))));
				self['assertRaises']($p['TypeError'], $p['sum'], $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), 'a');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSum'] = $method;
			$method = $pyjs__bind_method2('testSlice', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,s3,s2,s,AnyClass,s1;
				self['assertEqual']($p['repr']($p['slice']($constant_int_1, $constant_int_2, $constant_int_3)), 'slice(1, 2, 3)', 'slice() is mis-used, issue #582');
				s1 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				s2 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				s3 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_4);
				self['assertEqual'](s1, s2);
				self['assertNotEqual'](s1, s3, 'slice() is mis-used, issue #582');
				s = $p['slice']($constant_int_1);
				self['assertEqual']($p['getattr'](s, 'start'), null);
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_1);
				self['assertEqual']($p['getattr'](s, 'step'), null);
				s = $p['slice']($constant_int_1, $constant_int_2);
				self['assertEqual']($p['getattr'](s, 'start'), $constant_int_1);
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_2);
				self['assertEqual']($p['getattr'](s, 'step'), null);
				s = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				self['assertEqual']($p['getattr'](s, 'start'), $constant_int_1);
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_2);
				self['assertEqual']($p['getattr'](s, 'step'), $constant_int_3);
				AnyClass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '019c08bbf13186539b519c3fb2374e1b';
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('AnyClass', $p['tuple']($bases), $data);
				})();
				obj = AnyClass();
				s = $p['slice'](obj);
				self['assertTrue']($p['op_is']($p['getattr'](s, 'stop'), obj));
				self['assertEqual']($p['slice'](null)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				self['assertEqual']($p['slice'](null, null, $constant_int_2)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_2]));
				self['assertEqual']($p['slice']($constant_int_1, null, $constant_int_2)['indices']($constant_int_10), $p['tuple']([$constant_int_1, $constant_int_10, $constant_int_2]));
				self['assertEqual']($p['slice'](null, null, (typeof ($usub50=$constant_int_1)=='number'?
					-$usub50:
					$p['op_usub']($usub50)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub51=$constant_int_1)=='number'?
					-$usub51:
					$p['op_usub']($usub51)), (typeof ($usub52=$constant_int_1)=='number'?
					-$usub52:
					$p['op_usub']($usub52))]));
				self['assertEqual']($p['slice'](null, null, (typeof ($usub53=$constant_int_2)=='number'?
					-$usub53:
					$p['op_usub']($usub53)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub54=$constant_int_1)=='number'?
					-$usub54:
					$p['op_usub']($usub54)), (typeof ($usub55=$constant_int_2)=='number'?
					-$usub55:
					$p['op_usub']($usub55))]));
				self['assertEqual']($p['slice']($constant_int_3, null, (typeof ($usub56=$constant_int_2)=='number'?
					-$usub56:
					$p['op_usub']($usub56)))['indices']($constant_int_10), $p['tuple']([$constant_int_3, (typeof ($usub57=$constant_int_1)=='number'?
					-$usub57:
					$p['op_usub']($usub57)), (typeof ($usub58=$constant_int_2)=='number'?
					-$usub58:
					$p['op_usub']($usub58))]));
				self['assertEqual']($p['slice'](null, (typeof ($usub59=$constant_int_9)=='number'?
					-$usub59:
					$p['op_usub']($usub59)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_1, $constant_int_1]));
				self['assertEqual']($p['slice'](null, (typeof ($usub60=$constant_int_10)=='number'?
					-$usub60:
					$p['op_usub']($usub60)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_1]));
				self['assertEqual']($p['slice'](null, (typeof ($usub61=$constant_int_11)=='number'?
					-$usub61:
					$p['op_usub']($usub61)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_1]));
				self['assertEqual']($p['slice'](null, (typeof ($usub62=$constant_int_10)=='number'?
					-$usub62:
					$p['op_usub']($usub62)), (typeof ($usub63=$constant_int_1)=='number'?
					-$usub63:
					$p['op_usub']($usub63)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_0, (typeof ($usub64=$constant_int_1)=='number'?
					-$usub64:
					$p['op_usub']($usub64))]));
				self['assertEqual']($p['slice'](null, (typeof ($usub65=$constant_int_11)=='number'?
					-$usub65:
					$p['op_usub']($usub65)), (typeof ($usub66=$constant_int_1)=='number'?
					-$usub66:
					$p['op_usub']($usub66)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub67=$constant_int_1)=='number'?
					-$usub67:
					$p['op_usub']($usub67)), (typeof ($usub68=$constant_int_1)=='number'?
					-$usub68:
					$p['op_usub']($usub68))]));
				self['assertEqual']($p['slice'](null, (typeof ($usub69=$constant_int_12)=='number'?
					-$usub69:
					$p['op_usub']($usub69)), (typeof ($usub70=$constant_int_1)=='number'?
					-$usub70:
					$p['op_usub']($usub70)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub71=$constant_int_1)=='number'?
					-$usub71:
					$p['op_usub']($usub71)), (typeof ($usub72=$constant_int_1)=='number'?
					-$usub72:
					$p['op_usub']($usub72))]));
				self['assertEqual']($p['slice'](null, $constant_int_9)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_9, $constant_int_1]));
				self['assertEqual']($p['slice'](null, $constant_int_10)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				self['assertEqual']($p['slice'](null, $constant_int_11)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				self['assertEqual']($p['slice'](null, $constant_int_8, (typeof ($usub73=$constant_int_1)=='number'?
					-$usub73:
					$p['op_usub']($usub73)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_8, (typeof ($usub74=$constant_int_1)=='number'?
					-$usub74:
					$p['op_usub']($usub74))]));
				self['assertEqual']($p['slice'](null, $constant_int_9, (typeof ($usub75=$constant_int_1)=='number'?
					-$usub75:
					$p['op_usub']($usub75)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_9, (typeof ($usub76=$constant_int_1)=='number'?
					-$usub76:
					$p['op_usub']($usub76))]));
				self['assertEqual']($p['slice'](null, $constant_int_10, (typeof ($usub77=$constant_int_1)=='number'?
					-$usub77:
					$p['op_usub']($usub77)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_9, (typeof ($usub78=$constant_int_1)=='number'?
					-$usub78:
					$p['op_usub']($usub78))]));
				self['assertEqual']($p['slice']((typeof ($usub79=$constant_int_100)=='number'?
					-$usub79:
					$p['op_usub']($usub79)), $constant_int_100)['indices']($constant_int_10), $p['slice'](null)['indices']($constant_int_10));
				self['assertEqual']($p['slice']($constant_int_100, (typeof ($usub80=$constant_int_100)=='number'?
					-$usub80:
					$p['op_usub']($usub80)), (typeof ($usub81=$constant_int_1)=='number'?
					-$usub81:
					$p['op_usub']($usub81)))['indices']($constant_int_10), $p['slice'](null, null, (typeof ($usub82=$constant_int_1)=='number'?
					-$usub82:
					$p['op_usub']($usub82)))['indices']($constant_int_10));
				self['assertEqual']($p['slice']((typeof ($usub83=$constant_long_100)=='number'?
					-$usub83:
					$p['op_usub']($usub83)), $constant_long_100, $constant_long_2)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_2]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSlice'] = $method;
			$method = $pyjs__bind_method2('test_format', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var Galt,$mul11,C,$mul12,E,d,G,F,I,H,J,$add36,datetime,$pyjs_try_err,$mul9,$mul8,$mul7,$add35,$mul10,D;
				self['assertEqual'](''['format'](), '');
				self['assertEqual']('a'['format'](), 'a');
				self['assertEqual']('ab'['format'](), 'ab');
				self['assertEqual']('a{{'['format'](), 'a{');
				self['assertEqual']('a}}'['format'](), 'a}');
				self['assertEqual']('{{b'['format'](), '{b');
				self['assertEqual']('}}b'['format'](), '}b');
				self['assertEqual']('a{{b'['format'](), 'a{b');
				datetime = $p['___import___']('datetime', null);
				self['assertEqual']('My name is {0}'['format']('Fred'), 'My name is Fred');
				self['assertEqual']('My name is {0[name]}'['format']($pyjs_kwargs_call(null, $p['dict'], null, null, [{name:'Fred'}])), 'My name is Fred');
				self['assertEqual']('My name is {0} :-{{}}'['format']('Fred'), 'My name is Fred :-{}');
				d = datetime['date']($constant_int_2007, $constant_int_8, $constant_int_18);
				self['assertEqual']('The year is {0.year}'['format'](d), 'The year is 2007');
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '4f6589ca1bc50e562a3c2d0d68e3402b';
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '4f6589ca1bc50e562a3c2d0d68e3402b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_100]]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '4f6589ca1bc50e562a3c2d0d68e3402b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return spec;
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				D = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'f216f67c3238b78d595dfdb197487b50';
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
							if (self.prototype.__md5__ !== 'f216f67c3238b78d595dfdb197487b50') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'f216f67c3238b78d595dfdb197487b50') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return $p['str']($p['getattr'](self, 'x'));
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('D', $p['tuple']($bases), $data);
				})();
				E = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'b67bc2be14598c07da7b428c92b08e1e';
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
							if (self.prototype.__md5__ !== 'b67bc2be14598c07da7b428c92b08e1e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'b67bc2be14598c07da7b428c92b08e1e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add15,$add17,$add18,$add16;
						return (typeof ($add17=(typeof ($add15='E(')==typeof ($add16=$p['getattr'](self, 'x')) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16)))==typeof ($add18=')') && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('E', $p['tuple']($bases), $data);
				})();
				F = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'c1de753f5f019f39bae1325a88cf531b';
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
							if (self.prototype.__md5__ !== 'c1de753f5f019f39bae1325a88cf531b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__repr__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c1de753f5f019f39bae1325a88cf531b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add21,$add20,$add22,$add19;
						return (typeof ($add21=(typeof ($add19='F(')==typeof ($add20=$p['getattr'](self, 'x')) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20)))==typeof ($add22=')') && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
	, 1, [null,null,['self']]);
					$cls_definition['__repr__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('F', $p['tuple']($bases), $data);
				})();
				G = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '0997c850880443e7236e399a8469b706';
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
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add23,$add24;
						return (typeof ($add23='string is ')==typeof ($add24=$p['getattr'](self, 'x')) && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24));
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add28,$bool10,$add25,$add27,$add26;
						if ((($bool10=$p['op_eq'](format_spec, 'd')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							return (typeof ($add27=(typeof ($add25='G(')==typeof ($add26=$p['getattr'](self, 'x')) && (typeof $add25=='number'||typeof $add25=='string')?
								$add25+$add26:
								$p['op_add']($add25,$add26)))==typeof ($add28=')') && (typeof $add27=='number'||typeof $add27=='string')?
								$add27+$add28:
								$p['op_add']($add27,$add28));
						}
						return $p['object']['__format__'](self, format_spec);
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('G', $p['tuple']($bases), $data);
				})();
				Galt = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'c9ce0e0c3a55bd5f883772d2d49fc68e';
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
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add29,$add30;
						return (typeof ($add29='string is ')==typeof ($add30=$p['getattr'](self, 'x')) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30));
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add32,$bool11,$add31,$add34,$add33;
						if ((($bool11=$p['op_eq'](format_spec, 'd')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
								false :
								(typeof $bool11=='object'?
									(typeof $bool11.__nonzero__=='function'?
										$bool11.__nonzero__() :
										(typeof $bool11.__len__=='function'?
											($bool11.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							return (typeof ($add33=(typeof ($add31='G(')==typeof ($add32=$p['getattr'](self, 'x')) && (typeof $add31=='number'||typeof $add31=='string')?
								$add31+$add32:
								$p['op_add']($add31,$add32)))==typeof ($add34=')') && (typeof $add33=='number'||typeof $add33=='string')?
								$add33+$add34:
								$p['op_add']($add33,$add34));
						}
						return $p['format']($p['str'](self), format_spec);
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Galt', $p['tuple']($bases), $data);
				})();
				H = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '74db7ceb84817eaa157f2ab0c5c68579';
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '74db7ceb84817eaa157f2ab0c5c68579') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return 1.0;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('H', $p['tuple']($bases), $data);
				})();
				I = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '38d899c4a86f832e262eae40cb9d032c';
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '38d899c4a86f832e262eae40cb9d032c') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return self['strftime'](format_spec);
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array($p['getattr'](datetime, 'date'));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('I', $p['tuple']($bases), $data);
				})();
				J = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '1dcd720dd5e95d1119a5fc8315079fa6';
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1dcd720dd5e95d1119a5fc8315079fa6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul6,$mul5;
						return $p['int']['__format__']((typeof ($mul5=self)==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)), format_spec);
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array($p['int']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('J', $p['tuple']($bases), $data);
				})();
				self['assertEqual'](''['format'](), '');
				self['assertEqual']('abc'['format'](), 'abc');
				self['assertEqual']('{0}'['format']('abc'), 'abc');
				self['assertEqual']('{0:}'['format']('abc'), 'abc');
				self['assertEqual']('X{0}'['format']('abc'), 'Xabc');
				self['assertEqual']('{0}X'['format']('abc'), 'abcX');
				self['assertEqual']('X{0}Y'['format']('abc'), 'XabcY');
				self['assertEqual']('{1}'['format']($constant_int_1, 'abc'), 'abc');
				self['assertEqual']('X{1}'['format']($constant_int_1, 'abc'), 'Xabc');
				self['assertEqual']('{1}X'['format']($constant_int_1, 'abc'), 'abcX');
				self['assertEqual']('X{1}Y'['format']($constant_int_1, 'abc'), 'XabcY');
				self['assertEqual']('{0}'['format']((typeof ($usub84=$constant_int_15)=='number'?
					-$usub84:
					$p['op_usub']($usub84))), '-15');
				self['assertEqual']('{0}{1}'['format']((typeof ($usub85=$constant_int_15)=='number'?
					-$usub85:
					$p['op_usub']($usub85)), 'abc'), '-15abc');
				self['assertEqual']('{0}X{1}'['format']((typeof ($usub86=$constant_int_15)=='number'?
					-$usub86:
					$p['op_usub']($usub86)), 'abc'), '-15Xabc');
				self['assertEqual']('{{'['format'](), '{');
				self['assertEqual']('}}'['format'](), '}');
				self['assertEqual']('{{}}'['format'](), '{}');
				self['assertEqual']('{{x}}'['format'](), '{x}');
				self['assertEqual']('{{{0}}}'['format']($constant_int_123), '{123}');
				self['assertEqual']('{{{{0}}}}'['format'](), '{{0}}');
				self['assertEqual']('}}{{'['format'](), '}{');
				self['assertEqual']('}}x{{'['format'](), '}x{');
				self['assertEqual']('{0[foo-bar]}'['format']($p['dict']([['foo-bar', 'baz']])), 'baz');
				self['assertEqual']('{0[foo bar]}'['format']($p['dict']([['foo bar', 'baz']])), 'baz');
				self['assertEqual']('{0[ ]}'['format']($p['dict']([[' ', $constant_int_3]])), '3');
				self['assertEqual']($pyjs_kwargs_call('{foo._x}', 'format', null, null, [{foo:C($constant_int_20)}]), '20');
				self['assertEqual']('{1}{0}'['format'](D($constant_int_10), D($constant_int_20)), '2010');
				self['assertEqual']('{0._x.x}'['format'](C(D('abc'))), 'abc');
				self['assertEqual']('{0[0]}'['format']($p['list'](['abc', 'def'])), 'abc');
				self['assertEqual']('{0[1]}'['format']($p['list'](['abc', 'def'])), 'def');
				self['assertEqual']('{0[1][0]}'['format']($p['list'](['abc', $p['list'](['def'])])), 'def');
				self['assertEqual']('{0[1][0].x}'['format']($p['list'](['abc', $p['list']([D('def')])])), 'def');
				self['assertEqual']('{0:.3s}'['format']('abc'), 'abc');
				self['assertEqual']('{0:.3s}'['format']('ab'), 'ab');
				self['assertEqual']('{0:.3s}'['format']('abcdef'), 'abc');
				self['assertEqual']('{0:.0s}'['format']('abcdef'), '');
				self['assertEqual']('{0:3.3s}'['format']('abc'), 'abc');
				self['assertEqual']('{0:2.3s}'['format']('abc'), 'abc');
				self['assertEqual']('{0:2.2s}'['format']('abc'), 'ab');
				self['assertEqual']('{0:3.2s}'['format']('abc'), 'ab ');
				self['assertEqual']('{0:x<0s}'['format']('result'), 'result');
				self['assertEqual']('{0:x<5s}'['format']('result'), 'result');
				self['assertEqual']('{0:x<6s}'['format']('result'), 'result');
				self['assertEqual']('{0:x<7s}'['format']('result'), 'resultx');
				self['assertEqual']('{0:x<8s}'['format']('result'), 'resultxx');
				self['assertEqual']('{0: <7s}'['format']('result'), 'result ');
				self['assertEqual']('{0:<7s}'['format']('result'), 'result ');
				self['assertEqual']('{0:>7s}'['format']('result'), ' result');
				self['assertEqual']('{0:>8s}'['format']('result'), '  result');
				self['assertEqual']('{0:^8s}'['format']('result'), ' result ');
				self['assertEqual']('{0:^9s}'['format']('result'), ' result  ');
				self['assertEqual']('{0:^10s}'['format']('result'), '  result  ');
				self['assertEqual']('{0:10000}'['format']('a'), (typeof ($add35='a')==typeof ($add36=(typeof ($mul7=' ')==typeof ($mul8=$constant_int_9999) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)));
				self['assertEqual']('{0:10000}'['format'](''), (typeof ($mul9=' ')==typeof ($mul10=$constant_int_10000) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				self['assertEqual']('{0:10000000}'['format'](''), (typeof ($mul11=' ')==typeof ($mul12=$constant_int_10000000) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
				self['assertEqual']('{0:abc}'['format'](C()), 'abc');
				self['assertEqual']('{0!s}'['format']('Hello'), 'Hello');
				self['assertEqual']('{0!s:}'['format']('Hello'), 'Hello');
				self['assertEqual']('{0!s:15}'['format']('Hello'), 'Hello          ');
				self['assertEqual']('{0!s:15s}'['format']('Hello'), 'Hello          ');
				self['assertEqual']('{0!r}'['format']('Hello'), "'Hello'");
				self['assertEqual']('{0!r:}'['format']('Hello'), "'Hello'");
				self['assertEqual']('{0!r}'['format'](F('Hello')), 'F(Hello)');
				self['assertEqual']('{0}'['format']($p['dict']([])), '{}');
				self['assertEqual']('{0}'['format']($p['list']([])), '[]');
				self['assertEqual']('{0}'['format']($p['list']([$constant_int_1])), '[1]');
				self['assertEqual']('{0}'['format'](E('data')), 'E(data)');
				self['assertEqual']('{0:d}'['format'](G('data')), 'G(data)');
				self['assertEqual']('{0!s}'['format'](G('dat1')), 'string is dat1');
				self['assertEqual']('{0:^10}'['format'](E('dat2')), ' E(dat2)  ');
				self['assertEqual']('{0:^10s}'['format'](E('dat3')), ' E(dat3)  ');
				self['assertEqual']('{0:>15s}'['format'](Galt('dat4')), ' string is dat4');
				try {
					self['assertEqual']('{0:>15s}'['format'](G('dat5')), ' string is dat5');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['fail']('object.__format__ missing#674');
					}
				}
				self['assertEqual']('{0:date: %Y-%m-%d}'['format']($pyjs_kwargs_call(null, I, null, null, [{year:$constant_int_2007, month:$constant_int_8, day:$constant_int_27}])), 'date: 2007-08-27', 'Issue #673. datetime.date should have __format___');
				self['assertEqual']('{0}'['format'](J($constant_int_10)), '20', 'Issue #670 derived from int/float/str not instance of object');
				self['assertEqual']('{0:}'['format']('a'), 'a');
				self['assertEqual']('{0:.{1}}'['format']('hello world', $constant_int_5), 'hello');
				self['assertEqual']('{0:.{1}s}'['format']('hello world', $constant_int_5), 'hello');
				self['assertEqual']($pyjs_kwargs_call('{0:.{precision}s}', 'format', null, null, [{precision:$constant_int_5}, 'hello world']), 'hello');
				self['assertEqual']($pyjs_kwargs_call('{0:{width}.{precision}s}', 'format', null, null, [{width:$constant_int_10, precision:$constant_int_5}, 'hello world']), 'hello     ');
				self['assertEqual']($pyjs_kwargs_call('{0:{width}.{precision}s}', 'format', null, null, [{width:'10', precision:'5'}, 'hello world']), 'hello     ');
				self['format_raises']($p['ValueError'], '{');
				self['format_raises']($p['ValueError'], '}');
				self['format_raises']($p['ValueError'], 'a{');
				self['format_raises']($p['ValueError'], 'a}');
				self['format_raises']($p['ValueError'], '{a');
				self['format_raises']($p['ValueError'], '}a');
				self['format_raises']($p['IndexError'], '{0}');
				self['format_raises']($p['IndexError'], '{1}', 'abc');
				self['format_raises']($p['KeyError'], '{x}');
				self['format_raises']($p['ValueError'], '}{');
				self['format_raises']($p['ValueError'], '{');
				self['format_raises']($p['ValueError'], '}');
				self['format_raises']($p['ValueError'], 'abc{0:{}');
				self['format_raises']($p['ValueError'], '{0');
				self['format_raises']($p['IndexError'], '{0.}');
				self['format_raises']($p['ValueError'], '{0.}', $constant_int_0);
				self['format_raises']($p['IndexError'], '{0[}');
				self['format_raises']($p['ValueError'], '{0[}', $p['list']([]));
				self['format_raises']($p['KeyError'], '{0]}');
				self['format_raises']($p['ValueError'], '{0.[]}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{0..foo}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{0[0}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{0[0:foo}', $constant_int_0);
				self['format_raises']($p['KeyError'], '{c]}');
				self['format_raises']($p['ValueError'], '{{ {{{0}}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{0}}', $constant_int_0);
				$pyjs_kwargs_call(self, 'format_raises', null, null, [{bar:$constant_int_3}, $p['KeyError'], '{foo}']);
				self['format_raises']($p['ValueError'], '{0!x}', $constant_int_3);
				self['format_raises']($p['ValueError'], '{0!}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{0!rs}', $constant_int_0);
				self['format_raises']($p['ValueError'], '{!}');
				self['format_raises']($p['IndexError'], '{:}');
				self['format_raises']($p['IndexError'], '{:s}');
				self['format_raises']($p['IndexError'], '{}');
				self['format_raises']($p['ValueError'], '{0[0]x}', $p['list']([null]));
				self['format_raises']($p['ValueError'], '{0[0](10)}', $p['list']([null]));
				self['format_raises']($p['TypeError'], '{0[{1}]}', 'abcdefg', $constant_int_4);
				self['format_raises']($p['ValueError'], '{0:{1:{2}}}', 'abc', 's', '');
				self['format_raises']($p['ValueError'], '{0:{1:{2:{3:{4:{5:{6}}}}}}}', $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7);
				self['format_raises']($p['ValueError'], '{0:-s}', '');
				self['assertRaises']($p['ValueError'], $p['format'], '', '-');
				self['format_raises']($p['ValueError'], '{0:=s}', '');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format'] = $method;
			$method = $pyjs__bind_method2('test_format_auto_numbering', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var C;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'abc3b60e0a7063fc24c655be197552c6';
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'abc3b60e0a7063fc24c655be197552c6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_100]]);
					$cls_definition['__init__'] = $method;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'abc3b60e0a7063fc24c655be197552c6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						return spec;
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				self['assertEqual']('{}'['format']($constant_int_10), '10');
				self['assertEqual']('{:5}'['format']('s'), 's    ');
				self['assertEqual']('{!r}'['format']('s'), "'s'");
				self['assertEqual']('{._x}'['format'](C($constant_int_10)), '10');
				self['assertEqual']('{[1]}'['format']($p['list']([$constant_int_1, $constant_int_2])), '2');
				self['assertEqual']('{[a]}'['format']($p['dict']([['a', $constant_int_4], ['b', $constant_int_2]])), '4');
				self['assertEqual']('a{}b{}c'['format']($constant_int_0, $constant_int_1), 'a0b1c');
				self['assertEqual']('a{:{}}b'['format']('x', '^10'), 'a    x     b');
				self['assertEqual']('a{:{}x}b'['format']($constant_int_20, '#'), 'a0x14b');
				self['format_raises']($p['ValueError'], '{}{1}', $constant_int_1, $constant_int_2);
				self['format_raises']($p['ValueError'], '{1}{}', $constant_int_1, $constant_int_2);
				self['format_raises']($p['ValueError'], '{:{1}}', $constant_int_1, $constant_int_2);
				self['format_raises']($p['ValueError'], '{0:{}}', $constant_int_1, $constant_int_2);
				self['assertEqual']($pyjs_kwargs_call('{f}{}', 'format', null, null, [{f:'test'}, $constant_int_4]), 'test4');
				self['assertEqual']($pyjs_kwargs_call('{}{f}', 'format', null, null, [{f:'test'}, $constant_int_4]), '4test');
				self['assertEqual']($pyjs_kwargs_call('{:{f}}{g}{}', 'format', null, null, [{g:'g', f:$constant_int_2}, $constant_int_1, $constant_int_3]), ' 1g3');
				self['assertEqual']($pyjs_kwargs_call('{f:{}}{}{g}', 'format', null, null, [{f:$constant_int_1, g:'g'}, $constant_int_2, $constant_int_4]), ' 14g');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format_auto_numbering'] = $method;
			$method = $pyjs__bind_method2('format_raises', function(e) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kw = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						if (typeof kw != 'undefined') args.__array.push(kw);
						var kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					e = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kw = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						if (typeof kw != 'undefined') args.__array.push(kw);
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof e != 'undefined') {
						if (e !== null && typeof e['$pyjs_is_kwarg'] != 'undefined') {
							kw = e;
							e = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $25,$26,$pyjs_try_err,excName,$bool12;
				self['startTest']();
				try {
					$pyjs_kwargs_call((typeof ($25=args).__array != 'undefined'?
						((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__($constant_int_0)), 'format', $p['__getslice'](args, $constant_int_1, null), kw, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						if ((($bool12=$p['hasattr'](e, '__name__')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
								false :
								(typeof $bool12=='object'?
									(typeof $bool12.__nonzero__=='function'?
										$bool12.__nonzero__() :
										(typeof $bool12.__len__=='function'?
											($bool12.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							excName = $p['getattr'](e, '__name__');
						}
						else {
							excName = $p['str'](e);
						}
						self['fail']($p['sprintf']('%s not raised', excName));
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (($pyjs_try_err_name == e.__name__)||$p['_isinstance']($pyjs_try_err,e)) {
							return true;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				return false;
			}
	, 1, ['args',['kw'],['self'],['e']]);
			$cls_definition['format_raises'] = $method;
			$method = $pyjs__bind_method2('test_format_float', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter26_nextval,$bool13,$bool14,$bool15,$bool16,$bool17,$iter26_idx,format_spec,$iter26_array,issue524_solved,$add42,$add41,$iter26_type,$pyjs_try_err,$iter26_iter,$and1,$and2,$div2,$div1,NAN,x,INF;
				self['assertEqual']($p['format'](0.0, 'f'), '0.000000');
				x = (typeof ($div1=$constant_int_100)==typeof ($div2=7.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				self['assertEqual']($p['format'](x, ''), $p['str'](x));
				self['assertEqual']($p['format'](1.0, 'f'), '1.000000');
				self['assertEqual']($p['format']((typeof ($usub87=1.0)=='number'?
					-$usub87:
					$p['op_usub']($usub87)), 'f'), '-1.000000');
				self['assertEqual']($p['format'](1.0, ' f'), ' 1.000000');
				self['assertEqual']($p['format']((typeof ($usub88=1.0)=='number'?
					-$usub88:
					$p['op_usub']($usub88)), ' f'), '-1.000000');
				self['assertEqual']($p['format'](1.0, '+f'), '+1.000000');
				self['assertEqual']($p['format']((typeof ($usub89=1.0)=='number'?
					-$usub89:
					$p['op_usub']($usub89)), '+f'), '-1.000000');
				self['assertEqual']($p['format']((typeof ($usub90=1.0)=='number'?
					-$usub90:
					$p['op_usub']($usub90)), '%'), '-100.000000%');
				self['format_raises']($p['ValueError'], '{:s}', 3.0);
				$iter26_iter = (typeof ($add41=function(){
					var $iter27_nextval,$add38,$iter27_idx,$collcomp7,$add37,$iter27_array,$iter27_iter,x,$iter27_type;
	$collcomp7 = $p['list']();
				$iter27_iter = $p['range']($p['ord']('a'), (typeof ($add37=$p['ord']('z'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)));
				if (typeof ($iter27_array = $iter27_iter.__array) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter.__iter__();
					$iter27_type = typeof ($iter27_array = $iter27_iter.__array) != 'undefined'? 0 : (typeof $iter27_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					x = $iter27_nextval;
					$collcomp7['append']($p['chr'](x));
				}

	return $collcomp7;}())==typeof ($add42=function(){
					var $add39,$iter28_array,$iter28_nextval,$iter28_idx,$collcomp8,$add40,x,$iter28_iter,$iter28_type;
	$collcomp8 = $p['list']();
				$iter28_iter = $p['range']($p['ord']('A'), (typeof ($add39=$p['ord']('Z'))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)));
				if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter.__iter__();
					$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					x = $iter28_nextval;
					$collcomp8['append']($p['chr'](x));
				}

	return $collcomp8;}()) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42));
				if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter.__iter__();
					$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					format_spec = $iter26_nextval;
					if ((($bool14=!(($bool13='eEfFgGn%'.__contains__(format_spec)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14.__nonzero__=='function'?
									$bool14.__nonzero__() :
									(typeof $bool14.__len__=='function'?
										($bool14.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						issue524_solved = false;
						try {
							$p['format'](1.0, 'd');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
								issue524_solved = true;
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
						if ((($bool17=((($bool16=$and1=!(($bool15=issue524_solved) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15.__nonzero__=='function'?
									$bool15.__nonzero__() :
									(typeof $bool15.__len__=='function'?
										($bool15.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16.__nonzero__=='function'?
									$bool16.__nonzero__() :
									(typeof $bool16.__len__=='function'?
										($bool16.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?'bcdoxX'.__contains__(format_spec):$and1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
								false :
								(typeof $bool17=='object'?
									(typeof $bool17.__nonzero__=='function'?
										$bool17.__nonzero__() :
										(typeof $bool17.__len__=='function'?
											($bool17.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							continue;
						}
						self['assertRaises']($p['ValueError'], $p['format'], 0.0, format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], 1.0, format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub91=1.0)=='number'?
							-$usub91:
							$p['op_usub']($usub91)), format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], 1e+100, format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub92=1e+100)=='number'?
							-$usub92:
							$p['op_usub']($usub92)), format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], 1e-100, format_spec);
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub93=1e-100)=='number'?
							-$usub93:
							$p['op_usub']($usub93)), format_spec);
					}
				}
				try {
					INF = $p['float']('inf');
					NAN = $p['float']('nan');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						self['assertEqual']('{0:f}'['format'](INF), 'inf');
						self['assertEqual']('{0:F}'['format'](INF), 'INF');
						self['assertEqual']('{0:f}'['format']((typeof ($usub94=INF)=='number'?
							-$usub94:
							$p['op_usub']($usub94))), '-inf');
						self['assertEqual']('{0:F}'['format']((typeof ($usub95=INF)=='number'?
							-$usub95:
							$p['op_usub']($usub95))), '-INF');
						self['assertEqual']('{0:f}'['format'](NAN), 'nan');
						self['assertEqual']('{0:F}'['format'](NAN), 'NAN');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format_float'] = $method;
			$method = $pyjs__bind_method2('test_issue5864', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['format'](123.456, '.4'), '123.5');
				self['assertEqual']($p['format'](1234.56, '.4'), '1.235e+03');
				self['assertEqual']($p['format'](12345.6, '.4'), '1.235e+04');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issue5864'] = $method;
			$method = $pyjs__bind_method2('test_sign', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEquals']($p['format']((typeof ($usub96=$constant_int_6)=='number'?
					-$usub96:
					$p['op_usub']($usub96))), '-6');
				self['assertEquals']($p['format']((typeof ($usub97=$constant_int_6)=='number'?
					-$usub97:
					$p['op_usub']($usub97)), '-'), '-6');
				self['assertEquals']($p['format']((typeof ($usub98=$constant_int_6)=='number'?
					-$usub98:
					$p['op_usub']($usub98)), '+'), '-6');
				self['assertEquals']($p['format']((typeof ($usub99=$constant_int_6)=='number'?
					-$usub99:
					$p['op_usub']($usub99)), ' '), '-6');
				self['assertEquals']($p['format']($constant_int_6, ' '), ' 6');
				self['assertEquals']($p['format']($constant_int_6, '-'), '6');
				self['assertEquals']($p['format']($constant_int_6, '+'), '+6');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sign'] = $method;
			$method = $pyjs__bind_method2('test_thousands_separator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEquals']($p['format']($constant_int_123, ','), '123');
				self['assertEquals']($p['format']($constant_int_12345, ','), '12,345');
				self['assertEquals']($p['format']($constant_int_123456789, ','), '123,456,789');
				self['assertEquals']($p['format']($constant_int_12345, '7,'), ' 12,345');
				self['assertEquals']($p['format']($constant_int_12345, '<7,'), '12,345 ');
				self['assertEquals']($p['format']($constant_int_1234, '0=10,'), '00,001,234');
				self['assertEquals']($p['format']($constant_int_1234, '010,'), '00,001,234');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_thousands_separator'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BuiltinTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end BuiltinTest */


/* end module: BuiltinTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.PY27_BEHAVIOUR', 'builtin', 'imports.cls.CLS', 'imports', 'imports.cls', 'imports.cls1.CLS', 'imports.cls1', 'imports.overrideme', 'imports.override', 'imports.__doc__', 'imports.__name__', '__builtin__', '__builtin__.dict', 'datetime']
*/
