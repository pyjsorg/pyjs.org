/* start module: LongTest */
$pyjs.loaded_modules['LongTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LongTest'].__was_initialized__) return $pyjs.loaded_modules['LongTest'];
	var $m = $pyjs.loaded_modules["LongTest"];
	$m.__repr__ = function() { return "<module: LongTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LongTest';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_64 = new $p['int'](64);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_274876858369 = new $p['int'](274876858369);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_524287 = new $p['int'](524287);
		var $constant_int_4294967294 = new $p['int'](4294967294);
		var $constant_int_2147483647 = new $p['int'](2147483647);
		var $constant_long_0 = new $p['long'](0);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_2147483649 = new $p['long'](2147483649);
		var $constant_long_2147483648 = new $p['long'](2147483648);
		var $constant_long_18446744073709551616 = new $p['long'](18446744073709551616);
		var $constant_long_8 = new $p['long'](8);
		var $constant_long_4 = new $p['long'](4);
		var $constant_long_4294967294 = new $p['long'](4294967294);
		var $constant_long_1048576 = new $p['long'](1048576);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['LongTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LongTest';
			$cls_definition.__md5__ = '27f704eb321b491a910bd40e1c633e10';
			$method = $pyjs__bind_method2('testAdd', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '27f704eb321b491a910bd40e1c633e10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var y,x,$add1,$add2;
				x = $constant_long_0;
				y = $constant_long_1;
				x = (typeof ($add1=x)==typeof ($add2=y) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self['assertTrue']($p['op_eq'](x, $constant_long_1));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAdd'] = $method;
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
					if (self.prototype.__md5__ !== '27f704eb321b491a910bd40e1c633e10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow2,$pow1,$sub2,$add3,$bool1,$add6,$add4,$add5,$sub3,x,$sub1,$mul4,$mul3,$mul2,$mul1,$sub4;
				x = $p['op_bitshiftleft']($constant_int_1,$constant_int_64);
				self['assertTrue']($p['op_eq'](x, $constant_long_18446744073709551616), $p['sprintf']('#302 - %s != 18446744073709551616L', $p['repr'](x)));
				self['assertTrue']($p['isinstance'](x, $p['long']));
				x = $p['op_bitshiftleft']($constant_long_1,$constant_int_64);
				self['assertTrue']($p['op_eq'](x, $constant_long_18446744073709551616), $p['sprintf']('%s != 18446744073709551616L', $p['repr'](x)));
				self['assertTrue']($p['isinstance'](x, $p['long']));
				x = $p['op_bitshiftleft']($constant_int_1,$constant_int_20);
				self['assertTrue']($p['op_eq'](x, $constant_int_1048576), $p['sprintf']('%s != 1048576', $p['repr'](x)));
				self['assertTrue']($p['isinstance'](x, $p['int']));
				x = $p['op_bitshiftleft']($constant_long_1,$constant_int_20);
				self['assertTrue']($p['op_eq'](x, $constant_long_1048576), $p['sprintf']('%s != 1048576L', $p['repr'](x)));
				self['assertTrue']($p['isinstance'](x, $p['long']));
				self['assertTrue']($p['op_is']($p['int']($constant_long_18446744073709551616), $constant_long_18446744073709551616), 'No automatic int to long conversion');
				if ((($bool1=$p['op_eq']($p['int']($constant_long_18446744073709551616), $constant_long_18446744073709551616)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					x = $p['op_bitshiftleft']($constant_int_1,$constant_int_64);
					self['assertEqual'](x, $constant_long_18446744073709551616);
					x = (typeof ($add3=$constant_int_2147483647)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					self['assertEqual'](x, $constant_long_2147483648);
					x = (typeof ($add5=$constant_int_2147483647)==typeof ($add6=$constant_int_2147483647) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					self['assertEqual'](x, $constant_long_4294967294);
					x = (typeof ($sub1=(typeof ($usub1=$constant_int_2147483647)=='number'?
						-$usub1:
						$p['op_usub']($usub1)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					self['assertEqual'](x, (typeof ($usub2=$constant_long_2147483649)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
					x = (typeof ($sub3=(typeof ($usub3=$constant_int_2147483647)=='number'?
						-$usub3:
						$p['op_usub']($usub3)))==typeof ($sub4=$constant_int_2147483647) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
					self['assertEqual'](x, (typeof ($usub4=$constant_int_4294967294)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
					x = (typeof ($mul1=$constant_int_2147483647)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					self['assertEqual'](x, $constant_int_4294967294);
					x = (typeof ($mul3=$constant_int_2147483647)==typeof ($mul4=(typeof ($usub5=$constant_int_2)=='number'?
						-$usub5:
						$p['op_usub']($usub5))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
					self['assertEqual'](x, (typeof ($usub6=$constant_int_4294967294)=='number'?
						-$usub6:
						$p['op_usub']($usub6)));
					x = (typeof ($pow1=$constant_int_524287)==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
						Math.pow($pow1,$pow2):
						$p['op_pow']($pow1,$pow2));
					self['assertEqual'](x, $constant_int_274876858369);
					self['assertEqual']($p['op_bitshiftleft']($constant_int_1,$constant_long_2), $constant_long_4);
					self['assertEqual']($p['op_bitshiftright']($constant_int_6,$constant_long_2), $constant_long_1);
					x = $constant_int_1;
					x = $p['op_bitshiftleft'](x,$constant_long_3);
					self['assertEqual'](x, $constant_long_8);
					x = $constant_int_8;
					x = $p['op_bitshiftright'](x,$constant_long_1);
					self['assertEqual'](x, $constant_long_4);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testType'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LongTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end LongTest */


/* end module: LongTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
