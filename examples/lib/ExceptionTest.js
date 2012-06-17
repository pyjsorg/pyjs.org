/* start module: ExceptionTest */
$pyjs.loaded_modules['ExceptionTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ExceptionTest'].__was_initialized__) return $pyjs.loaded_modules['ExceptionTest'];
	var $m = $pyjs.loaded_modules["ExceptionTest"];
	$m.__repr__ = function() { return "<module: ExceptionTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ExceptionTest';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_0 = new $p['int'](0);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['PY27_BEHAVIOUR'] = $p['___import___']('UnitTest.PY27_BEHAVIOUR', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['MyException'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = 'b1d94d61cdd601bc8619a3a62589934c';
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
					if (self.prototype.__md5__ !== 'b1d94d61cdd601bc8619a3a62589934c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'MyException';
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MyException', $p['tuple']($bases), $data);
		})();
		$m['MyException2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = '7c758a2e92da4765bcf4c08af33aad42';
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
					if (self.prototype.__md5__ !== '7c758a2e92da4765bcf4c08af33aad42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'MyException2';
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MyException2', $p['tuple']($bases), $data);
		})();
		$m['ExceptionTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = 'cd3c3909fe4c017e583d5c443d8d9087';
			$method = $pyjs__bind_method2('testTypeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					throw ($p['TypeError']('fred'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertTrue'](true, 'the exception should have happened');
						return null;
					}
				}
				self['assertTrue'](false, 'the exception should have happened');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTypeError'] = $method;
			$method = $pyjs__bind_method2('testExceptionOrdTrigger', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,$pyjs_try_err;
				try {
					x = $p['ord']($constant_int_5);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertTrue'](true, 'the exception should have happened');
						return null;
					}
				}
				self['assertTrue'](false, "mustn't be able to do ord() on a number");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExceptionOrdTrigger'] = $method;
			$method = $pyjs__bind_method2('testExceptionOrdNoTrigger', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,$pyjs_try_err;
				try {
					x = $p['ord']('5');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['assertTrue'](false, "the exception shouldn't have happened");
						return null;
					}
				}
				self['assertTrue'](true, 'the exception should have happened');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExceptionOrdNoTrigger'] = $method;
			$method = $pyjs__bind_method2('testRaiseException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					throw ($m['MyException']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						return null;
					}
				}
				self['fail']('MyException was not raised');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRaiseException'] = $method;
			$method = $pyjs__bind_method2('testCatchClassException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				try {
					throw ($m['MyException']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['MyException'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException'])) {
						e = $pyjs_try_err;
						self['assertEqual'](e['__str__'](), 'MyException', 'Caught exception does not match');
						return null;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['fail']('MyException was not caught or raised');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchClassException'] = $method;
			$method = $pyjs__bind_method2('testCatchMultiClassException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				try {
					throw ($m['MyException']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ((($pyjs_try_err_name == $m['MyException'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException']))||(($pyjs_try_err_name == $m['MyException2'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException2']))) {
						e = $pyjs_try_err;
						self['assertEqual'](e['__str__'](), 'MyException', 'Caught exception does not match');
						return null;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['fail']('MyException was not caught or raised');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchMultiClassException'] = $method;
			$method = $pyjs__bind_method2('testCatchStringException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$cmp2,$pyjs_try_err,$bool1,$cmp1;
				if ((($bool1=((((($cmp1=$p['getattr']($m['sys'], 'version_info'))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_6]))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return null;
				}
				try {
					throw ('test');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == 'test'.__name__)||$p['_isinstance']($pyjs_try_err,'test')) {
						return null;
					} else if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['fail'](e);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['fail']('"test" was not caught or raised');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchStringException'] = $method;
			$method = $pyjs__bind_method2('testBuiltInException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,err;
				try {
					throw ($p['LookupError']('hoschi'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['LookupError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['LookupError'])) {
						err = $pyjs_try_err;
						self['assertEqual']($p['getattr']($p['getattr'](err, '__class__'), '__name__'), 'LookupError');
						return null;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['fail']('LookupError should be caught');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBuiltInException'] = $method;
			$method = $pyjs__bind_method2('testZeroDivisionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var err,$pyjs_try_err,v,$div2,$div1;
				try {
					v = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ZeroDivisionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
						err = $pyjs_try_err;
						self['assertEqual']($p['getattr']($p['getattr'](err, '__class__'), '__name__'), 'ZeroDivisionError');
						return null;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				self['fail']('ZeroDivisionError should be caught bug #265');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZeroDivisionError'] = $method;
			$method = $pyjs__bind_method2('testStrReprSingleArg', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $7,$21,$20,$22,$24,args,$8,$9,$6,$10,$4,$5,$2,$3,$1,$14,$15,$16,$17,e,$11,$12,$13,$18,$19,$23;
				args = $p['tuple'](['test']);
				e = $pyjs_kwargs_call(null, $p['BaseException'], args, null, [{}]);
				self['assertEqual']((typeof ($1=$p['getattr'](e, 'args')).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), (typeof ($3=args).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0)));
				self['assertEqual']($p['str'](e), (typeof ($5=args).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "BaseException('test',)");
				e = $pyjs_kwargs_call(null, $p['Exception'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($7=args).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "Exception('test',)");
				e = $pyjs_kwargs_call(null, $p['TypeError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($9=args).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "TypeError('test',)");
				e = $pyjs_kwargs_call(null, $p['StandardError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($11=args).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "StandardError('test',)");
				e = $pyjs_kwargs_call(null, $p['LookupError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($13=args).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "LookupError('test',)");
				e = $pyjs_kwargs_call(null, $p['KeyError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), $p['sprintf']("'%s'", (typeof ($15=args).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_0))));
				self['assertEqual']($p['repr'](e), "KeyError('test',)");
				e = $pyjs_kwargs_call(null, $p['AttributeError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($17=args).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "AttributeError('test',)");
				e = $pyjs_kwargs_call(null, $p['NameError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($19=args).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "NameError('test',)");
				e = $pyjs_kwargs_call(null, $p['ValueError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($21=args).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "ValueError('test',)");
				e = $pyjs_kwargs_call(null, $p['IndexError'], args, null, [{}]);
				self['assertEqual']($p['str'](e), (typeof ($23=args).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0)));
				self['assertEqual']($p['repr'](e), "IndexError('test',)");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrReprSingleArg'] = $method;
			$method = $pyjs__bind_method2('test_exc_info_traceback', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,$add2,$25,$26,$bool2,$pyjs_try_err,func,$add1,tb;
				func = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					throw ($p['ValueError']('Baaa!'));
					return null;
				};
				func.__name__ = 'func';

				func.__bind_type__ = 0;
				func.__args__ = [null,null];
				try {
					func();
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						self['fail']('Exception expected');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
							tb = (typeof ($25=$m['sys']['exc_info']()).__array != 'undefined'?
								((typeof $25.__array[$26=$constant_int_2]) != 'undefined'?$25.__array[$26]:
									$25.__getitem__($26)):
									$25.__getitem__($constant_int_2));
							count = $constant_int_1;
							while ((($bool2=$p['getattr'](tb, 'tb_next')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
									false :
									(typeof $bool2=='object'?
										(typeof $bool2.__nonzero__=='function'?
											$bool2.__nonzero__() :
											(typeof $bool2.__len__=='function'?
												($bool2.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								tb = $p['getattr'](tb, 'tb_next');
								count = (typeof ($add1=count)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
									$add1+$add2:
									$p['op_add']($add1,$add2));
							}
							self['assertEqual'](count, $constant_int_2, 'sys.exc_info() traceback must be relative to caller');
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_exc_info_traceback'] = $method;
			$method = $pyjs__bind_method2('testSyntax', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $48,raised_errors,$iter1_iter,$29,$28,$27,$49,$pyjs_try_err,$iter1_array,$43,$42,$41,$40,$47,$46,$45,$44,$iter1_nextval,$bool3,$bool4,e1,$56,e3,$iter1_type,a,b,e,$38,err,$39,$36,$37,$34,$35,$32,$33,$30,$31,$len2,$iter1_idx,raise_errors,$len1,$50,$51,$52,$53,$54,$55,e2;
				try {
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
					} else if ((($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['LookupError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['LookupError']))) {
						e = $pyjs_try_err;
					} else {
					}
				} finally {
				}
				try {
					a = $constant_int_1;
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						a = $constant_int_3;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
							a = $constant_int_2;
						}
					}
				} finally {
					self['assertEqual'](a, $constant_int_3);
					a = $constant_int_4;
				}
				self['assertEqual'](a, $constant_int_4);
				try {
					a = $constant_int_11;
					throw ($p['KeyError']('test'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						a = $constant_int_13;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
							a = $constant_int_12;
						}
					}
				} finally {
					self['assertEqual'](a, $constant_int_12);
					a = $constant_int_14;
				}
				self['assertEqual'](a, $constant_int_14);
				try {
					a = $constant_int_1;
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				} finally {
					a = $constant_int_2;
				}
				self['assertEqual'](a, $constant_int_2);
				try {
					a = $constant_int_1;
					try {
						b = $constant_int_1;
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						if ($pyjs_try_err.__name__ == 'TryElse') {
							b = $constant_int_3;
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (true) {
								b = $constant_int_2;
							}
						}
					} finally {
						self['assertEqual'](b, $constant_int_3);
						b = $constant_int_4;
					}
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err.__name__ == 'TryElse') {
						a = $constant_int_3;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
							a = $constant_int_2;
						}
					}
				} finally {
					self['assertEqual'](a, $constant_int_3);
					a = $constant_int_4;
				}
				self['assertEqual'](a, $constant_int_4);
				self['assertEqual'](b, $constant_int_4);
				$m['sys']['exc_clear']();
				try {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					self['fail']("No error raised on 'raise' after 'sys.exc_clear()'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertTrue']((typeof ($27=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $27.__array[$28=$constant_int_0]) != 'undefined'?$27.__array[$28]:
								$27.__getitem__($28)):
								$27.__getitem__($constant_int_0))['startswith']('exceptions must be'), (typeof ($29=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $29.__array[$30=$constant_int_0]) != 'undefined'?$29.__array[$30]:
								$29.__getitem__($30)):
								$29.__getitem__($constant_int_0)));
					} else {
						e = $m['sys']['exc_info']();
						self['fail']($p['sprintf']('TypeError expected, got %s', (typeof ($31=e).__array != 'undefined'?
							((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
								$31.__getitem__($32)):
								$31.__getitem__($constant_int_0))));
					}
				}
				try {

					var $pyjs__raise_expr1 = $p['KeyError'];
					var $pyjs__raise_expr2 = 'test';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

					self['fail']('No error raised');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($33=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
								$33.__getitem__($34)):
								$33.__getitem__($constant_int_0)), 'test');
					} else {
						e = $m['sys']['exc_info']();
						self['fail']($p['sprintf']('KeyError expected, got %s', (typeof ($35=e).__array != 'undefined'?
							((typeof $35.__array[$36=$constant_int_0]) != 'undefined'?$35.__array[$36]:
								$35.__getitem__($36)):
								$35.__getitem__($constant_int_0))));
						e = (typeof ($37=e).__array != 'undefined'?
							((typeof $37.__array[$38=$constant_int_1]) != 'undefined'?$37.__array[$38]:
								$37.__getitem__($38)):
								$37.__getitem__($constant_int_1));
					}
				}
				try {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						err = $m['sys']['exc_info']();
						self['assertEqual']((typeof ($39=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $39.__array[$40=$constant_int_0]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__($constant_int_0)), (typeof ($43=$p['getattr']((typeof ($41=err).__array != 'undefined'?
							((typeof $41.__array[$42=$constant_int_1]) != 'undefined'?$41.__array[$42]:
								$41.__getitem__($42)):
								$41.__getitem__($constant_int_1)), 'args')).__array != 'undefined'?
							((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
								$43.__getitem__($44)):
								$43.__getitem__($constant_int_0)));
					}
				}
				raise_errors = $p['list']([$p['KeyError']('KeyError'), $p['TypeError']('TypeError'), $p['AttributeError']('AttributeError'), $p['LookupError']('LookupError')]);
				raised_errors = $p['list']([]);
				$iter1_iter = raise_errors;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					err = $iter1_nextval;
					try {
						throw (err);
						self['fail']('Failed to raise exception');
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ((($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError']))||(($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError']))) {
							e1 = $pyjs_try_err;
							raised_errors['append'](e1);
							if ((($bool3=$p['isinstance'](e1, $p['KeyError'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
									false :
									(typeof $bool3=='object'?
										(typeof $bool3.__nonzero__=='function'?
											$bool3.__nonzero__() :
											(typeof $bool3.__len__=='function'?
												($bool3.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['assertEqual']((typeof ($45=$p['getattr'](e1, 'args')).__array != 'undefined'?
									((typeof $45.__array[$46=$constant_int_0]) != 'undefined'?$45.__array[$46]:
										$45.__getitem__($46)):
										$45.__getitem__($constant_int_0)), 'KeyError');
							}
							else if ((($bool4=$p['isinstance'](e1, $p['TypeError'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
									false :
									(typeof $bool4=='object'?
										(typeof $bool4.__nonzero__=='function'?
											$bool4.__nonzero__() :
											(typeof $bool4.__len__=='function'?
												($bool4.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['assertEqual']((typeof ($47=$p['getattr'](e1, 'args')).__array != 'undefined'?
									((typeof $47.__array[$48=$constant_int_0]) != 'undefined'?$47.__array[$48]:
										$47.__getitem__($48)):
										$47.__getitem__($constant_int_0)), 'TypeError');
							}
							else {
								self['fail']('neither KeyError nor TypeError in except (KeyError, TypeError)');
							}
						} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							e2 = $pyjs_try_err;
							raised_errors['append'](e2);
							self['assertEqual']((typeof ($49=$p['getattr'](e2, 'args')).__array != 'undefined'?
								((typeof $49.__array[$50=$constant_int_0]) != 'undefined'?$49.__array[$50]:
									$49.__getitem__($50)):
									$49.__getitem__($constant_int_0)), 'AttributeError');
						} else {
							e3 = (typeof ($51=$m['sys']['exc_info']()).__array != 'undefined'?
								((typeof $51.__array[$52=$constant_int_1]) != 'undefined'?$51.__array[$52]:
									$51.__getitem__($52)):
									$51.__getitem__($constant_int_1));
							raised_errors['append'](e3);
							self['assertEqual']((typeof ($53=$p['getattr'](e3, 'args')).__array != 'undefined'?
								((typeof $53.__array[$54=$constant_int_0]) != 'undefined'?$53.__array[$54]:
									$53.__getitem__($54)):
									$53.__getitem__($constant_int_0)), 'LookupError');
						}
					}
				}
				self['assertEqual']((($len1=raised_errors) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), (($len2=raise_errors) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))));
				try {
					try {
						throw ($p['TypeError']('TypeError'));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							e = $pyjs_try_err;
							self['fail']('Got KeyError');
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					self['fail']('TypeError should not be ignored');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($55=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $55.__array[$56=$constant_int_0]) != 'undefined'?$55.__array[$56]:
								$55.__getitem__($56)):
								$55.__getitem__($constant_int_0)), 'TypeError');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSyntax'] = $method;
			$method = $pyjs__bind_method2('testCatchSuperException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				try {
					throw ($p['TypeError']('test'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['fail']('Failed to catch exception: bug #254');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchSuperException'] = $method;
			$method = $pyjs__bind_method2('testAssertionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $58,$pyjs_try_err,e,$57;
				try {
					if (!( true )) {
					   throw $p['AssertionError']();
					 }
					self['assertTrue'](true);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						self['fail']($p['sprintf']('Got an unexpected assertion error: %r', e));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					if (!( false )) {
					   throw $p['AssertionError']();
					 }
					self['fail']('AssertionError expected');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				try {
					if (!( false )) {
					   throw $p['AssertionError']('reason');
					 }
					self['fail']('AssertionError expected');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($57=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $57.__array[$58=$constant_int_0]) != 'undefined'?$57.__array[$58]:
								$57.__getitem__($58)):
								$57.__getitem__($constant_int_0)), 'reason');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAssertionError'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExceptionTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ExceptionTest */


/* end module: ExceptionTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.PY27_BEHAVIOUR', 'sys']
*/
