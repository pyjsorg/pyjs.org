/* start module: GeneratorTest */
$pyjs['loaded_modules']['GeneratorTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GeneratorTest']['__was_initialized__']) return $pyjs['loaded_modules']['GeneratorTest'];
	var $m = $pyjs['loaded_modules']['GeneratorTest'];
	$m['__repr__'] = function() { return '<module: GeneratorTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GeneratorTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_109 = new $p['int'](109);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_5 = new $p['int'](5);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$m['GeneratorTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GeneratorTest';
			$cls_definition['__md5__'] = '67c0dba314e80f45e5bdc6d6045c36eb';
			$method = $pyjs__bind_method2('testSimpleStatement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_iter,$sub2,$sub1,$iter1_array,$iter1_nextval,$iter2_idx,$iter3_array,fn,a,$iter2_nextval,$iter1_type,g,i,r,$iter1_idx,$iter3_nextval,$iter2_array;
				fn = function() {
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
							$yield_value = $constant_int_1;
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
							$yield_value = $constant_int_2;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				self['assertEqual'](g['next'](), $constant_int_2);
				$iter1_iter = $p['enumerate'](fn());
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					i = $tupleassign1[0];
					g = $tupleassign1[1];
					self['assertEqual'](i, (typeof ($sub1=g)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
				}
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $add9,$add12,i,j,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$mul4,$mul3,$mul2,$mul1,$add11;
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
							i = $constant_int_0;
							$yield_value = i;
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
							i = (typeof ($add7=i)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
								$add7+$add8:
								$p['op_add']($add7,$add8));
							j = i;
							$yield_value = i;
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
							$yield_value = j;
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							j = (typeof ($mul3=j)==typeof ($mul4=$constant_int_100) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4));
							i = (typeof ($add9=i)==typeof ($add10=j) && (typeof $add9=='number'||typeof $add9=='string')?
								$add9+$add10:
								$p['op_add']($add9,$add10));
							$yield_value = j;
							$yielding = true;
							$generator_state[0] = 4;
							return $yield_value;
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$yield_value = i;
							$yielding = true;
							$generator_state[0] = 5;
							return $yield_value;
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$yield_value = (typeof ($add11=n)==typeof ($add12=i) && (typeof $add11=='number'||typeof $add11=='string')?
								$add11+$add12:
								$p['op_add']($add11,$add12));
							$yielding = true;
							$generator_state[0] = 6;
							return $yield_value;
							$generator_state[0]=6;
						}
						if ($generator_state[0] == 6) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=7;
						}
						if ($generator_state[0] == 7) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter2_iter = fn($constant_int_8);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_100, $constant_int_101, $constant_int_109]));
				a = (typeof A == "undefined"?$m['A']:A)();
				r = $p['list']([]);
				$iter3_iter = a['fn']();
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleStatement'] = $method;
			$method = $pyjs__bind_method2('testSimpleFor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,g,$iter6_type,i,$iter6_array,$sub3,$iter6_iter,$sub4,fn,$iter6_nextval;
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $iter5_nextval,$iter5_idx,i,$iter4_nextval,$iter4_idx,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter;
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
							$iter5_iter = $p['list']([$constant_int_1, $constant_int_2]);
							if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
								$iter5_type = 0;
							} else {
								$iter5_iter = $iter5_iter['__iter__']();
								$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter5_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									i = $iter5_nextval;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				self['assertEqual'](g['next'](), $constant_int_2);
				$iter6_iter = $p['enumerate'](fn());
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 2, null);
					i = $tupleassign2[0];
					g = $tupleassign2[1];
					self['assertEqual'](i, (typeof ($sub3=g)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleFor'] = $method;
			$method = $pyjs__bind_method2('testSimpleWhile', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_array,$iter8_idx,$iter7_nextval,$iter9_iter,i,$iter7_iter,$iter7_array,$iter8_array,$iter9_idx,$iter9_type,$iter8_iter,r,$iter8_nextval,$iter9_nextval,$iter7_idx,y,$iter7_type,$iter8_type,fn;
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $cmp4,$mul8,$cmp1,$cmp3,$cmp2,i,$bool2,$add14,$add15,$add16,$bool1,$add13,$mul7,$mul6,$mul5;
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
							i = $constant_int_0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool2=((($cmp3=i)===($cmp4=n)?0:
								(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
									($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
									$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
									false :
									(typeof $bool2=='object'?
										(typeof $bool2['__nonzero__']=='function'?
											$bool2['__nonzero__']() :
											(typeof $bool2['__len__']=='function'?
												($bool2['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
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
									$yield_value = (typeof ($mul7=i)==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
										$mul7*$mul8:
										$p['op_mul']($mul7,$mul8));
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									i = (typeof ($add15=i)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
										$add15+$add16:
										$p['op_add']($add15,$add16));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter7_iter = fn($constant_int_4);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					i = $iter7_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_0, $constant_int_1, $constant_int_10, $constant_int_2, $constant_int_20, $constant_int_3, $constant_int_30]));
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $cmp5,$cmp7,$cmp6,i,$add20,$cmp8,$bool3,$add17,$bool4,$add18,$add19;
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
							i = $constant_int_0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool4=((($cmp7=i)===($cmp8=n)?0:
								(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
									($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
									$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
									false :
									(typeof $bool4=='object'?
										(typeof $bool4['__nonzero__']=='function'?
											$bool4['__nonzero__']() :
											(typeof $bool4['__len__']=='function'?
												($bool4['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
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
									i = $constant_int_100;
									$yield_value = i;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									i = (typeof ($add19=i)==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
										$add19+$add20:
										$p['op_add']($add19,$add20));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter8_iter = fn($constant_int_50);
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_100]));
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $add28,$add21,$add23,$add22,$add25,$add24,$add27,$add26,$bool6,$bool5,y;
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
							y = $constant_int_0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool6=$p['op_eq'](y, $constant_int_0)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
									false :
									(typeof $bool6=='object'?
										(typeof $bool6['__nonzero__']=='function'?
											$bool6['__nonzero__']() :
											(typeof $bool6['__len__']=='function'?
												($bool6['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									y = (typeof ($add25=y)==typeof ($add26=$constant_int_1) && (typeof $add25=='number'||typeof $add25=='string')?
										$add25+$add26:
										$p['op_add']($add25,$add26));
									$yield_value = y;
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
									y = (typeof ($add27=y)==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
										$add27+$add28:
										$p['op_add']($add27,$add28));
									$yield_value = y;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				r = $p['list']([]);
				$iter9_iter = fn();
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					y = $iter9_nextval;
					r['append'](y);
				}
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleWhile'] = $method;
			$method = $pyjs__bind_method2('testSimpleIfThenElse', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,i,$iter10_array,r,$iter10_type,$iter10_iter,$iter10_idx,fn;
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $add29,$add31,$bool10,$bool11,$add30,$bool13,$cmp9,$bool14,$cmp15,$cmp14,$add32,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$bool8,$bool9,$bool12,$bool7;
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
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool11=((($cmp13=n)===($cmp14=$constant_int_3)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
									false :
									(typeof $bool11=='object'?
										(typeof $bool11['__nonzero__']=='function'?
											$bool11['__nonzero__']() :
											(typeof $bool11['__len__']=='function'?
												($bool11['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool12=((($cmp15=n)===($cmp16=$constant_int_0)?0:
										(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
											($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
											$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
											false :
											(typeof $bool12=='object'?
												(typeof $bool12['__nonzero__']=='function'?
													$bool12['__nonzero__']() :
													(typeof $bool12['__len__']=='function'?
														($bool12['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = 'less than zero';
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==2)||($generator_state[2]<2&&((($bool13=$p['op_eq'](n, $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
											false :
											(typeof $bool13=='object'?
												(typeof $bool13['__nonzero__']=='function'?
													$bool13['__nonzero__']() :
													(typeof $bool13['__len__']=='function'?
														($bool13['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=2;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = 'zero';
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==3)||($generator_state[2]<3&&((($bool14=$p['op_eq'](n, $constant_int_1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
											false :
											(typeof $bool14=='object'?
												(typeof $bool14['__nonzero__']=='function'?
													$bool14['__nonzero__']() :
													(typeof $bool14['__len__']=='function'?
														($bool14['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=3;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = 'one';
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if ($generator_state[2]==0||$generator_state[2]==4) {
										$generator_state[2]=4;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = 'more than one';
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
									n = (typeof ($add31=n)==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
										$add31+$add32:
										$p['op_add']($add31,$add32));
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter10_iter = fn((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list'](['less than zero', 'zero', 'one', 'more than one']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleIfThenElse'] = $method;
			$method = $pyjs__bind_method2('testSimpleTryBody', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,i,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,r,$iter11_array,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval,fn;
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $add38,$add39,i,$add33,$add36,$add37,$add34,$add35,$pyjs_try_err,$add40;
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
							i = $constant_int_1;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = (typeof ($add37=i)==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
										$add37+$add38:
										$p['op_add']($add37,$add38));
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$yield_value = (typeof ($add39=i)==typeof ($add40=$constant_int_2) && (typeof $add39=='number'||typeof $add39=='string')?
										$add39+$add40:
										$p['op_add']($add39,$add40));
									$yielding = true;
									$generator_state[1] = 3;
									return $yield_value;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				r = $p['list']([]);
				$iter11_iter = fn();
				if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter['__iter__']();
					$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3]));
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $add50,$add51,$add52,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$bool15,$add41,$add42,$pyjs_try_err,$bool16,y;
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
							y = $constant_int_0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool16=$p['op_eq'](y, $constant_int_0)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
									false :
									(typeof $bool16=='object'?
										(typeof $bool16['__nonzero__']=='function'?
											$bool16['__nonzero__']() :
											(typeof $bool16['__len__']=='function'?
												($bool16['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											y = (typeof ($add47=y)==typeof ($add48=$constant_int_1) && (typeof $add47=='number'||typeof $add47=='string')?
												$add47+$add48:
												$p['op_add']($add47,$add48));
											$yield_value = y;
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											y = (typeof ($add49=y)==typeof ($add50=$constant_int_1) && (typeof $add49=='number'||typeof $add49=='string')?
												$add49+$add50:
												$p['op_add']($add49,$add50));
											$yield_value = y;
											$yielding = true;
											$generator_state[2] = 3;
											return $yield_value;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$generator_exc[0] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
										$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											y = (typeof ($add51=y)==typeof ($add52=$constant_int_2) && (typeof $add51=='number'||typeof $add51=='string')?
												$add51+$add52:
												$p['op_add']($add51,$add52));
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$yield_value = y;
							$yielding = true;
							$generator_state[0] = 4;
							return $yield_value;
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				r = $p['list']([]);
				$iter12_iter = fn();
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					i = $iter12_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2, $constant_int_4]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleTryBody'] = $method;
			$method = $pyjs__bind_method2('testSimpleTryExceptElseFinally', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter15_iter,$iter18_array,f,i,$iter15_array,$iter15_idx,$iter18_idx,r,$iter15_nextval,$iter15_type,$iter18_nextval,fn;
				f = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = $constant_int_1;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
									throw ($p['ZeroDivisionError'](''));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_2;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f['__name__'] = 'f';

				f['__bind_type__'] = 0;
				f['__args__'] = [null,null];
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_2]));
				f = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = $constant_int_1;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									try {
										if (typeof $generator_exc[1] != 'undefined' && $generator_exc[1] !== null) throw $generator_exc[1];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_exc[1] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$yield_value = $constant_int_3;
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=3;
											throw ($p['ZeroDivisionError'](''));
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$generator_exc[1] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
										$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
										if (true) {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = $constant_int_4;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
									}
									$generator_exc[1] = null;
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
									throw ($p['ZeroDivisionError'](''));
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
									$generator_state[1]=6;
								}
								if ($generator_state[1] == 6) {
									$generator_state[1]=7;
								}
								if ($generator_state[1] == 7) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
										for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_2;
										$yielding = true;
										$generator_state[4] = 1;
										return $yield_value;
										$generator_state[4]=1;
									}
									if ($generator_state[4] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[4] = -1;
											throw $exc;
										}
										$generator_state[4]=2;
									}
									if ($generator_state[4] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f['__name__'] = 'f';

				f['__bind_type__'] = 0;
				f['__args__'] = [null,null];
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_3, $constant_int_4, $constant_int_2]));
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $bool18,$bool19,$bool17,$cmp20,$iter13_idx,$iter13_array,$pyjs_try_err,$bool21,$bool20,$bool22,$iter13_type,$iter14_array,$iter14_type,$cmp17,$iter14_iter,e,$cmp19,$cmp18,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,i;
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
							$iter14_iter = $p['range'](n);
							if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
								$iter14_type = 0;
							} else {
								$iter14_iter = $iter14_iter['__iter__']();
								$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter14_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									i = $iter14_nextval;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$generator_state[4] = 0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if(($generator_state[3]==1)||($generator_state[3]<1&&((($bool20=$p['op_eq'](i, $constant_int_0)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
													false :
													(typeof $bool20=='object'?
														(typeof $bool20['__nonzero__']=='function'?
															$bool20['__nonzero__']() :
															(typeof $bool20['__len__']=='function'?
																($bool20['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=1;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('try %d', i);
													$yielding = true;
													$generator_state[4] = 1;
													return $yield_value;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[4] = -1;
														throw $exc;
													}
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==2)||($generator_state[3]<2&&((($bool21=((($cmp19=i)===($cmp20=$constant_int_3)?0:
												(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
													($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
													$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
													false :
													(typeof $bool21=='object'?
														(typeof $bool21['__nonzero__']=='function'?
															$bool21['__nonzero__']() :
															(typeof $bool21['__len__']=='function'?
																($bool21['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=2;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[4]=1;
													throw ($p['TypeError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==3)||($generator_state[3]<3&&((($bool22=$p['op_eq'](i, $constant_int_3)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
													false :
													(typeof $bool22=='object'?
														(typeof $bool22['__nonzero__']=='function'?
															$bool22['__nonzero__']() :
															(typeof $bool22['__len__']=='function'?
																($bool22['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=3;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[4]=1;
													throw ($p['KeyError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											$generator_state[3]=0;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											throw $p['TryElse'];
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$generator_exc[0] = $pyjs_try_err;
										if ($pyjs_try_err['__name__'] == 'TryElse') {
											if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
												for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = $p['sprintf']('else %d (1)', i);
												$yielding = true;
												$generator_state[5] = 1;
												return $yield_value;
												$generator_state[5]=1;
											}
											if ($generator_state[5] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$yield_value = $p['sprintf']('else %d (2)', i);
												$yielding = true;
												$generator_state[5] = 2;
												return $yield_value;
												$generator_state[5]=2;
											}
											if ($generator_state[5] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$generator_state[5]=3;
											}
											if ($generator_state[5] == 3) {
											}
										} else {
											$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
											var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
											$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
											if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
												e = $pyjs_try_err;
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('TypeError %d (1)', i);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$yield_value = $p['sprintf']('TypeError %d (2)', i);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											} else {
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('Exception %d (1)', i);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$yield_value = $p['sprintf']('Exception %d (2)', i);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											}
										}
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
											for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = $p['sprintf']('finally %d (1)', i);
											$yielding = true;
											$generator_state[6] = 1;
											return $yield_value;
											$generator_state[6]=1;
										}
										if ($generator_state[6] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$yield_value = $p['sprintf']('finally %d (2)', i);
											$yielding = true;
											$generator_state[6] = 2;
											return $yield_value;
											$generator_state[6]=2;
										}
										if ($generator_state[6] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$generator_state[6]=3;
										}
										if ($generator_state[6] == 3) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter15_iter = fn($constant_int_5);
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list'](['try 0', 'else 0 (1)', 'else 0 (2)', 'finally 0 (1)', 'finally 0 (2)', 'TypeError 1 (1)', 'TypeError 1 (2)', 'finally 1 (1)', 'finally 1 (2)', 'TypeError 2 (1)', 'TypeError 2 (2)', 'finally 2 (1)', 'finally 2 (2)', 'Exception 3 (1)', 'Exception 3 (2)', 'finally 3 (1)', 'finally 3 (2)', 'else 4 (1)', 'else 4 (2)', 'finally 4 (1)', 'finally 4 (2)']));
				fn = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $iter16_idx,$cmp21,$cmp22,$cmp23,$cmp24,$iter17_type,$iter16_iter,$iter17_iter,$iter16_type,$bool25,$bool24,$bool27,$pyjs_try_err,$bool23,$iter16_nextval,$bool28,$iter17_nextval,$iter17_array,$bool26,$iter16_array,e,i,$iter17_idx;
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
							$iter17_iter = $p['range'](n);
							if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
								$iter17_type = 0;
							} else {
								$iter17_iter = $iter17_iter['__iter__']();
								$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter17_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									i = $iter17_nextval;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$generator_state[4] = 0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if(($generator_state[3]==1)||($generator_state[3]<1&&((($bool26=$p['op_eq'](i, $constant_int_0)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
													false :
													(typeof $bool26=='object'?
														(typeof $bool26['__nonzero__']=='function'?
															$bool26['__nonzero__']() :
															(typeof $bool26['__len__']=='function'?
																($bool26['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=1;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('try %d', i);
													$yielding = true;
													$generator_state[4] = 1;
													return $yield_value;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[4] = -1;
														throw $exc;
													}
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==2)||($generator_state[3]<2&&((($bool27=((($cmp23=i)===($cmp24=$constant_int_3)?0:
												(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
													($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
													$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
													false :
													(typeof $bool27=='object'?
														(typeof $bool27['__nonzero__']=='function'?
															$bool27['__nonzero__']() :
															(typeof $bool27['__len__']=='function'?
																($bool27['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=2;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[4]=1;
													throw ($p['TypeError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==3)||($generator_state[3]<3&&((($bool28=$p['op_eq'](i, $constant_int_3)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
													false :
													(typeof $bool28=='object'?
														(typeof $bool28['__nonzero__']=='function'?
															$bool28['__nonzero__']() :
															(typeof $bool28['__len__']=='function'?
																($bool28['__len__']()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=3;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[4]=1;
													throw ($p['KeyError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if ($generator_state[3]==0||$generator_state[3]==4) {
												$generator_state[3]=4;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													break;
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											$generator_state[3]=0;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											throw $p['TryElse'];
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$generator_exc[0] = $pyjs_try_err;
										if ($pyjs_try_err['__name__'] == 'TryElse') {
											if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
												for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = $p['sprintf']('else %d (1)', i);
												$yielding = true;
												$generator_state[5] = 1;
												return $yield_value;
												$generator_state[5]=1;
											}
											if ($generator_state[5] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$yield_value = $p['sprintf']('else %d (2)', i);
												$yielding = true;
												$generator_state[5] = 2;
												return $yield_value;
												$generator_state[5]=2;
											}
											if ($generator_state[5] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$generator_state[5]=3;
											}
											if ($generator_state[5] == 3) {
											}
										} else {
											$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
											var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
											$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
											if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
												e = $pyjs_try_err;
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('TypeError %d (1)', i);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$yield_value = $p['sprintf']('TypeError %d (2)', i);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											} else {
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state['length']<7?7:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = $p['sprintf']('Exception %d (1)', i);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$yield_value = $p['sprintf']('Exception %d (2)', i);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											}
										}
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
											for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = $p['sprintf']('finally %d (1)', i);
											$yielding = true;
											$generator_state[6] = 1;
											return $yield_value;
											$generator_state[6]=1;
										}
										if ($generator_state[6] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$yield_value = $p['sprintf']('finally %d (2)', i);
											$yielding = true;
											$generator_state[6] = 2;
											return $yield_value;
											$generator_state[6]=2;
										}
										if ($generator_state[6] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$generator_state[6]=3;
										}
										if ($generator_state[6] == 3) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['n']];
				r = $p['list']([]);
				$iter18_iter = fn($constant_int_5);
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					i = $iter18_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list'](['try 0', 'else 0 (1)', 'else 0 (2)', 'finally 0 (1)', 'finally 0 (2)', 'TypeError 1 (1)', 'TypeError 1 (2)', 'finally 1 (1)', 'finally 1 (2)', 'TypeError 2 (1)', 'TypeError 2 (2)', 'finally 2 (1)', 'finally 2 (2)', 'Exception 3 (1)', 'Exception 3 (2)', 'finally 3 (1)', 'finally 3 (2)', 'finally 4 (1)', 'finally 4 (2)']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleTryExceptElseFinally'] = $method;
			$method = $pyjs__bind_method2('testSend', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,fn;
				fn = function(value) {
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
					if (typeof value == 'undefined') value=arguments['callee']['__args__'][2][1];
					var $bool30,$bool29;
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
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool30=true) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
									false :
									(typeof $bool30=='object'?
										(typeof $bool30['__nonzero__']=='function'?
											$bool30['__nonzero__']() :
											(typeof $bool30['__len__']=='function'?
												($bool30['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = value;
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
									value = $yield_value;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['value', null]];
				g = fn($constant_int_1);
				self['assertEqual'](g['next'](), $constant_int_1);
				self['assertEqual'](g['next'](), null);
				self['assertEqual'](g['send']($constant_int_2), $constant_int_2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSend'] = $method;
			$method = $pyjs__bind_method2('testThrow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter19_idx,e,g,$iter19_type,i,$iter19_array,$iter19_iter,$iter19_nextval,$pyjs_try_err,r,fn;
				fn = function() {
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
							$yield_value = $constant_int_1;
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
							$yield_value = $constant_int_2;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				try {
					r = g['$$throw']($p['TypeError'], 'test1');
					self['fail']('Exception expected (1)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](e, 'test1');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					r = g['next']();
					self['fail']('StopIteration expected (1)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				try {
					r = g['$$throw']($p['TypeError'], 'test2');
					self['fail']('Exception expected (2)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](e, 'test2');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					r = g['next']();
					self['fail']('StopIteration expected (2)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = $constant_int_1;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$yield_value = $constant_int_2;
									$yielding = true;
									$generator_state[1] = 3;
									return $yield_value;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_3;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				try {
					r = g['$$throw']($p['TypeError'], 'test3');
					self['fail']('Exception expected (3)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](e, 'test3');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				try {
					r = g['$$throw']($p['TypeError'], 'test4');
					self['assertEqual'](r, $constant_int_3);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['fail']('No exception expected (4)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					r = g['next']();
					self['fail']('StopIteration expected (4)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				fn = function() {
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
							$yield_value = $constant_int_1;
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
							throw ($p['StopIteration']);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$yield_value = $constant_int_2;
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				try {
					$iter19_iter = fn();
					if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter['__iter__']();
						$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						i = $iter19_nextval;
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual'](i, $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testThrow'] = $method;
			$method = $pyjs__bind_method2('testClose', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,g,$pyjs_try_err,r,$2,fn,$1;
				fn = function() {
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
							$yield_value = $constant_int_1;
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
							$yield_value = $constant_int_2;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				try {
					r = g['close']();
					self['assertEqual'](r, null);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('No exception expected (1a)');
					}
				}
				try {
					r = g['next']();
					self['fail']('StopIteration expected (1)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					r = g['close']();
					self['assertEqual'](r, null);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['fail']('No exception expected (1b)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				try {
					r = g['close']();
					self['assertEqual'](r, null);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['fail']('No exception expected (2)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					r = g['next']();
					self['fail']('StopIteration expected (2)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				fn = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = $constant_int_1;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_2;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null];
				g = fn();
				try {
					r = g['close']();
					self['assertEqual'](r, null);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['fail']('No exception expected (3)');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				g = fn();
				self['assertEqual'](g['next'](), $constant_int_1);
				try {
					r = g['close']();
					self['fail']('RuntimeError expected (4)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['RuntimeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($1=e)['__array'] != 'undefined'?
							((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__']($constant_int_0)), 'generator ignored GeneratorExit');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClose'] = $method;
			$method = $pyjs__bind_method2('testPEP255_fib', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter20_type,$iter20_idx,g,i,fib,r,$iter20_array;
				fib = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var a,b,$add54,$add55,$add56,$bool31,$bool32,$add53;
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
							var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_1]), 2, null);
							a = $tupleassign5[0];
							b = $tupleassign5[1];
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool32=$constant_int_1) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
									false :
									(typeof $bool32=='object'?
										(typeof $bool32['__nonzero__']=='function'?
											$bool32['__nonzero__']() :
											(typeof $bool32['__len__']=='function'?
												($bool32['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = b;
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
									var $tupleassign6 = $p['__ass_unpack']($p['tuple']([b, (typeof ($add55=a)==typeof ($add56=b) && (typeof $add55=='number'||typeof $add55=='string')?
										$add55+$add56:
										$p['op_add']($add55,$add56))]), 2, null);
									a = $tupleassign6[0];
									b = $tupleassign6[1];
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
				fib['__name__'] = 'fib';

				fib['__bind_type__'] = 0;
				fib['__args__'] = [null,null];
				g = fib();
				r = $p['list']([]);
				$iter20_iter = $p['range']($constant_int_6);
				if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter['__iter__']();
					$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					i = $iter20_nextval;
					r['append'](g['next']());
				}
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_5, $constant_int_8]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_fib'] = $method;
			$method = $pyjs__bind_method2('testPEP255_recursion', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var me,e,g,$pyjs_try_err,$4,$3;
				me = null;
				g = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var i;
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
							i = me['next']();
							$yield_value = i;
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
				g['__name__'] = 'g';

				g['__bind_type__'] = 0;
				g['__args__'] = [null,null];
				me = g();
				try {
					me['next']();
					self['fail']('ValueError expected');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($3=e)['__array'] != 'undefined'?
							((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
								$3['__getitem__']($4)):
								$3['__getitem__']($constant_int_0)), 'generator already executing');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_recursion'] = $method;
			$method = $pyjs__bind_method2('testPEP255_return', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,f2;
				f1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									return;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_1;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f1['__name__'] = 'f1';

				f1['__bind_type__'] = 0;
				f1['__args__'] = [null,null];
				self['assertEqual']($p['list'](f1()), $p['list']([]));
				f2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$generator_state[1]=2;
									throw ($p['StopIteration']);
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_42;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f2['__name__'] = 'f2';

				f2['__bind_type__'] = 0;
				f2['__args__'] = [null,null];
				self['assertEqual']($p['list'](f2()), $p['list']([$constant_int_42]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_return'] = $method;
			$method = $pyjs__bind_method2('testPEP255_exceptionPropagation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,g,f,$pyjs_try_err,k;
				f = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var $div2,$6,$5,$div1,v;
					v = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					return (typeof ($5=$p['dict']([]))['__array'] != 'undefined'?
						((typeof $5['__array'][$6='not-there']) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']('not-there'));
				};
				f['__name__'] = 'f';

				f['__bind_type__'] = 0;
				f['__args__'] = [null,null];
				g = function() {
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
							$yield_value = f();
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
							$yield_value = $constant_int_42;
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
				g['__name__'] = 'g';

				g['__bind_type__'] = 0;
				g['__args__'] = [null,null];
				k = g();
				try {
					k['next']();
					self['fail']('Exception expected');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ZeroDivisionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
						e = $pyjs_try_err;
						self['assertTrue'](true);
					} else {
						self['assertTrue'](true, 'ZeroDivisionError expected');
					}
				}
				try {
					k['next']();
					self['fail']('StopIteration expected');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						self['assertTrue'](true);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exceptionPropagation'] = $method;
			$method = $pyjs__bind_method2('testPEP255_tryExceptFinally', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f;
				f = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
					var x,$pyjs_try_err;
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
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$yield_value = $constant_int_1;
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									try {
										if (typeof $generator_exc[1] != 'undefined' && $generator_exc[1] !== null) throw $generator_exc[1];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_exc[1] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$yield_value = $constant_int_2;
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=3;
											throw ($p['ZeroDivisionError']());
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											$yield_value = $constant_int_3;
											$yielding = true;
											$generator_state[2] = 4;
											return $yield_value;
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
											$generator_state[2]=6;
										}
										if ($generator_state[2] == 6) {
										}
									} catch($pyjs_try_err) {
										$generator_exc[1] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
										$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
										if (($pyjs_try_err_name == $p['ZeroDivisionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = $constant_int_4;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$yield_value = $constant_int_5;
												$yielding = true;
												$generator_state[3] = 2;
												return $yield_value;
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=3;
												throw ($pyjs['__last_exception__']?
													$pyjs['__last_exception__']['error']:
													$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
												$generator_state[3]=3;
											}
											if ($generator_state[3] == 3) {
												$generator_state[3]=4;
											}
											if ($generator_state[3] == 4) {
											}
										} else {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = $constant_int_6;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
									}
									$generator_exc[1] = null;
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$yield_value = $constant_int_7;
									$yielding = true;
									$generator_state[1] = 5;
									return $yield_value;
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=6;
								}
								if ($generator_state[1] == 6) {
									$generator_state[1]=7;
								}
								if ($generator_state[1] == 7) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
										for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = $constant_int_8;
										$yielding = true;
										$generator_state[4] = 1;
										return $yield_value;
										$generator_state[4]=1;
									}
									if ($generator_state[4] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[4] = -1;
											throw $exc;
										}
										$generator_state[4]=2;
									}
									if ($generator_state[4] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$yield_value = $constant_int_9;
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									x = $constant_int_12;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							} catch($pyjs_try_err) {
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							} finally {
								if ($yielding === true) return $yield_value;
								if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = $constant_int_10;
									$yielding = true;
									$generator_state[2] = 1;
									return $yield_value;
									$generator_state[2]=1;
								}
								if ($generator_state[2] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[2] = -1;
										throw $exc;
									}
									$generator_state[2]=2;
								}
								if ($generator_state[2] == 2) {
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
							$yield_value = $constant_int_11;
							$yielding = true;
							$generator_state[0] = 6;
							return $yield_value;
							$generator_state[0]=6;
						}
						if ($generator_state[0] == 6) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=7;
						}
						if ($generator_state[0] == 7) {
						}

						return;
					};
					return $generator;
				};
				f['__name__'] = 'f';

				f['__bind_type__'] = 0;
				f['__args__'] = [null,null];
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_2, $constant_int_4, $constant_int_5, $constant_int_8, $constant_int_9, $constant_int_10, $constant_int_11]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_tryExceptFinally'] = $method;
			$method = $pyjs__bind_method2('testPEP255_exampleRecursive', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _inorder,$iter25_idx,$iter25_nextval,$add58,res,$add57,$iter25_iter,s,t,$iter25_type,x,$iter25_array;
				_inorder = function(t) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $iter23_type,$iter22_array,$iter23_idx,$iter22_type,$iter23_iter,$iter24_type,$iter24_iter,$iter24_nextval,$iter22_iter,$iter21_idx,$iter21_array,$iter21_nextval,$iter22_nextval,$iter21_iter,$iter23_array,$iter23_nextval,$iter24_idx,$iter22_idx,$iter21_type,$bool33,$iter24_array,$bool34,x;
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
							$generator_state[2] = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool34=t) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
									false :
									(typeof $bool34=='object'?
										(typeof $bool34['__nonzero__']=='function'?
											$bool34['__nonzero__']() :
											(typeof $bool34['__len__']=='function'?
												($bool34['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )))) {
								$generator_state[1]=1;
								if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									$iter23_iter = $m['inorder']($p['getattr'](t, 'left'));
									if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
										$iter23_type = 0;
									} else {
										$iter23_iter = $iter23_iter['__iter__']();
										$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
									}
									$iter23_idx = 0;
									$generator_state[2]=1;
								}
								if ($generator_state[2] == 1) {
									$generator_state[3] = 0;
									$generator_state[2]=2;
								}
								if ($generator_state[2] == 2) {
									for (;($generator_state[3] > 0 || typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined');$generator_state[3] = 0) {
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											x = $iter23_nextval;
											$yield_value = x;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=3;
								}
								if ($generator_state[2] == 3) {
									$yield_value = $p['getattr'](t, '$$label');
									$yielding = true;
									$generator_state[2] = 4;
									return $yield_value;
									$generator_state[2]=4;
								}
								if ($generator_state[2] == 4) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[2] = -1;
										throw $exc;
									}
									$iter24_iter = $m['inorder']($p['getattr'](t, 'right'));
									if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
										$iter24_type = 0;
									} else {
										$iter24_iter = $iter24_iter['__iter__']();
										$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
									}
									$iter24_idx = 0;
									$generator_state[2]=5;
								}
								if ($generator_state[2] == 5) {
									$generator_state[3] = 0;
									$generator_state[2]=6;
								}
								if ($generator_state[2] == 6) {
									for (;($generator_state[3] > 0 || typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined');$generator_state[3] = 0) {
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											x = $iter24_nextval;
											$yield_value = x;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=7;
								}
								if ($generator_state[2] == 7) {
									$generator_state[2]=8;
								}
								if ($generator_state[2] == 8) {
								}
							}
							$generator_state[1]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
						}

						return;
					};
					return $generator;
				};
				_inorder['__name__'] = '_inorder';

				_inorder['__bind_type__'] = 0;
				_inorder['__args__'] = [null,null,['t']];
				$m['inorder'] = _inorder;
				s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				t = (typeof tree == "undefined"?$m['tree']:tree)(s);
				res = '';
				$iter25_iter = t;
				if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
					$iter25_type = 0;
				} else {
					$iter25_iter = $iter25_iter['__iter__']();
					$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter25_idx = 0;
				while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
					x = $iter25_nextval;
					res = (typeof ($add57=res)==typeof ($add58=x) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58));
				}
				self['assertEqual'](s, res);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exampleRecursive'] = $method;
			$method = $pyjs__bind_method2('testPEP255_exampleNonRecursive', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _inorder,$add60,$iter26_idx,$iter26_nextval,res,$add59,$iter26_type,s,t,x,$iter26_array,$iter26_iter;
				_inorder = function(node) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $bool42,$bool41,$bool40,$pyjs_try_err,$bool36,$bool37,$bool35,$bool38,$bool39,stack;
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
							stack = $p['list']([]);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state['splice'](1, $generator_state['length']-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool39=node) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
									false :
									(typeof $bool39=='object'?
										(typeof $bool39['__nonzero__']=='function'?
											$bool39['__nonzero__']() :
											(typeof $bool39['__len__']=='function'?
												($bool39['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									while ((($bool40=$p['getattr'](node, 'left')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
											false :
											(typeof $bool40=='object'?
												(typeof $bool40['__nonzero__']=='function'?
													$bool40['__nonzero__']() :
													(typeof $bool40['__len__']=='function'?
														($bool40['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )) {
										stack['append'](node);
										node = $p['getattr'](node, 'left');
									}
									$yield_value = $p['getattr'](node, '$$label');
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
									$generator_state['splice'](2, $generator_state['length']-2);
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									for (;($generator_state[2] > 0)||((($bool42=!(($bool41=$p['getattr'](node, 'right')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
										false :
										(typeof $bool41=='object'?
											(typeof $bool41['__nonzero__']=='function'?
												$bool41['__nonzero__']() :
												(typeof $bool41['__len__']=='function'?
													($bool41['__len__']()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
											false :
											(typeof $bool42=='object'?
												(typeof $bool42['__nonzero__']=='function'?
													$bool42['__nonzero__']() :
													(typeof $bool42['__len__']=='function'?
														($bool42['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) ));$generator_state[2] = 0) {
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											try {
												if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
												if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
													for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_exc[0] = null;
													$generator_state[3]=1;
												}
												if ($generator_state[3] == 1) {
													node = stack['pop']();
													$generator_state[3]=2;
												}
												if ($generator_state[3] == 2) {
													$generator_state[3]=3;
												}
												if ($generator_state[3] == 3) {
												}
											} catch($pyjs_try_err) {
												$generator_exc[0] = $pyjs_try_err;
												$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
												var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
												$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
												if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
													if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
														for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
														return;
														$generator_state[4]=1;
													}
													if ($generator_state[4] == 1) {
													}
												} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
											}
											$generator_exc[0] = null;
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											$yield_value = $p['getattr'](node, '$$label');
											$yielding = true;
											$generator_state[2] = 3;
											return $yield_value;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
										}
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									node = $p['getattr'](node, 'right');
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
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
				_inorder['__name__'] = '_inorder';

				_inorder['__bind_type__'] = 0;
				_inorder['__args__'] = [null,null,['node']];
				$m['inorder'] = _inorder;
				s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				t = (typeof tree == "undefined"?$m['tree']:tree)(s);
				res = '';
				$iter26_iter = t;
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					x = $iter26_nextval;
					res = (typeof ($add59=res)==typeof ($add60=x) && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60));
				}
				self['assertEqual'](s, res);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exampleNonRecursive'] = $method;
			$method = $pyjs__bind_method2('testMixed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter29_type,i,$iter29_nextval,$iter29_array,$iter29_idx,r,$iter29_iter,fn;
				fn = function(value) {
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
					if (typeof value == 'undefined') value=arguments['callee']['__args__'][2][1];
					var $iter28_idx,$cmp25,$cmp26,$cmp27,$cmp28,$iter27_nextval,$div3,$iter27_array,$pyjs_try_err,$iter27_iter,$iter27_type,$bool47,$bool46,$bool45,$bool44,$bool43,$bool48,$iter28_iter,$iter28_type,$div6,$div4,$div5,$iter28_array,i,$iter28_nextval,$iter27_idx,v;
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
							$iter28_iter = $p['list']([(typeof ($usub3=$constant_int_1)=='number'?
								-$usub3:
								$p['op_usub']($usub3)), $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
							if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
								$iter28_type = 0;
							} else {
								$iter28_iter = $iter28_iter['__iter__']();
								$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter28_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									i = $iter28_nextval;
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool46=((($cmp27=i)===($cmp28=$constant_int_0)?0:
										(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
											($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
											$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
											false :
											(typeof $bool46=='object'?
												(typeof $bool46['__nonzero__']=='function'?
													$bool46['__nonzero__']() :
													(typeof $bool46['__len__']=='function'?
														($bool46['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											continue;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
										}
									}
									else if(($generator_state[2]==2)||($generator_state[2]<2&&((($bool47=$p['op_eq'](i, $constant_int_0)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
											false :
											(typeof $bool47=='object'?
												(typeof $bool47['__nonzero__']=='function'?
													$bool47['__nonzero__']() :
													(typeof $bool47['__len__']=='function'?
														($bool47['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=2;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = $constant_int_0;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==3)||($generator_state[2]<3&&((($bool48=$p['op_eq'](i, $constant_int_1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
											false :
											(typeof $bool48=='object'?
												(typeof $bool48['__nonzero__']=='function'?
													$bool48['__nonzero__']() :
													(typeof $bool48['__len__']=='function'?
														($bool48['__len__']()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=3;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = $constant_int_1;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											i = $constant_int_0;
											$yield_value = value;
											$yielding = true;
											$generator_state[3] = 2;
											return $yield_value;
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$yield_value = $constant_int_2;
											$yielding = true;
											$generator_state[3] = 3;
											return $yield_value;
											$generator_state[3]=3;
										}
										if ($generator_state[3] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=4;
										}
										if ($generator_state[3] == 4) {
										}
									}
									else if ($generator_state[2]==0||$generator_state[2]==4) {
										$generator_state[2]=4;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											try {
												v = (typeof ($div5=i)==typeof ($div6=value) && typeof $div5=='number' && $div6 !== 0?
													$div5/$div6:
													$p['op_div']($div5,$div6));
											} catch($pyjs_try_err) {
												$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
												var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
												$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
												if (true) {
													v = i;
												}
											}
											$yield_value = v;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
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
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['value', null]];
				r = $p['list']([]);
				$iter29_iter = fn();
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					i = $iter29_nextval;
					r['append'](i);
				}
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, null, $constant_int_2, $constant_int_2, $constant_int_3, $constant_int_4]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMixed'] = $method;
			$method = $pyjs__bind_method2('testGenExp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,$iter32_idx,$bool50,$iter32_nextval,$iter31_nextval,$iter33_nextval,$iter32_iter,$iter30_array,$iter33_type,$iter30_nextval,$iter31_idx,$iter32_type,$pyjs_try_err,$iter32_array,$iter30_type,$iter31_array,$bool49,$iter30_idx,$iter31_type,$8,child,$7,$iter33_idx,$iter33_array,a,e,g,$iter30_iter,$iter31_iter;
				g = function(){
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
						$iter30_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
						if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
							$iter30_type = 0;
						} else {
							$iter30_iter = $iter30_iter['__iter__']();
							$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter30_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								child = $iter30_nextval;
								$yield_value = child;
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
				}()
;
				self['assertEqual'](g['next'](), $constant_int_1);
				self['assertEqual'](g['next'](), $constant_int_2);
				try {
					g['$$throw']($p['KeyError'], 'test');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($7=e)['__array'] != 'undefined'?
							((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__']($constant_int_0)), 'test');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ((($bool49=$p['any'](function(){
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
						$iter31_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
						if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
							$iter31_type = 0;
						} else {
							$iter31_iter = $iter31_iter['__iter__']();
							$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter31_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								child = $iter31_nextval;
								$yield_value = $p['isinstance'](child, $p['int']);
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
				}()
)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49['__nonzero__']=='function'?
								$bool49['__nonzero__']() :
								(typeof $bool49['__len__']=='function'?
									($bool49['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['assertTrue'](true);
				}
				else {
					self['fail']('any(isinstance(child, int) for child in [1,2,3])');
				}
				if ((($bool50=$p['any'](function(){
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
						$iter32_iter = $p['list'](['1', '2', '3']);
						if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
							$iter32_type = 0;
						} else {
							$iter32_iter = $iter32_iter['__iter__']();
							$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter32_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								child = $iter32_nextval;
								$yield_value = $p['isinstance'](child, $p['int']);
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
				}()
)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['fail']("any(isinstance(child, int) for child in ['1','2','3'])");
				}
				else {
					self['assertTrue'](true);
				}
				a = (typeof A == "undefined"?$m['A']:A)();
				g = function(){
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
						$iter33_iter = a['fn']();
						if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
							$iter33_type = 0;
						} else {
							$iter33_iter = $iter33_iter['__iter__']();
							$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter33_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								child = $iter33_nextval;
								$yield_value = child;
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
				}()
;
				self['assertEqual'](g['next'](), $constant_int_1);
				self['assertEqual'](g['next'](), $constant_int_2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGenExp'] = $method;
			$method = $pyjs__bind_method2('testTupleReturn', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter34_nextval,$iter34_array,$iter34_idx,lst,$iter34_iter,t,$iter34_type;
				lst = $p['list']([]);
				$iter34_iter = $p['enumerate']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				if (typeof ($iter34_array = $iter34_iter['__array']) != 'undefined') {
					$iter34_type = 0;
				} else {
					$iter34_iter = $iter34_iter['__iter__']();
					$iter34_type = typeof ($iter34_array = $iter34_iter['__array']) != 'undefined'? 0 : (typeof $iter34_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter34_idx = 0;
				while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
					t = $iter34_nextval;
					lst['append'](t);
				}
				self['assertEqual'](lst, $p['list']([$p['tuple']([$constant_int_0, $constant_int_0]), $p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2])]));
				lst = function(){
					var $iter35_idx,$iter35_nextval,$collcomp1,$iter35_type,t,$iter35_array,$iter35_iter;
	$collcomp1 = $p['list']();
				$iter35_iter = $p['enumerate']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				if (typeof ($iter35_array = $iter35_iter['__array']) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter['__iter__']();
					$iter35_type = typeof ($iter35_array = $iter35_iter['__array']) != 'undefined'? 0 : (typeof $iter35_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					t = $iter35_nextval;
					$collcomp1['append'](t);
				}

	return $collcomp1;}();
				self['assertEqual'](lst, $p['list']([$p['tuple']([$constant_int_0, $constant_int_0]), $p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2])]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTupleReturn'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GeneratorTest', $p['tuple']($bases), $data);
		})();
		$m['A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GeneratorTest';
			$cls_definition['__md5__'] = '2d9f2a68b023a55bf94cf9f3eb666be7';
			$method = $pyjs__bind_method2('fn', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2d9f2a68b023a55bf94cf9f3eb666be7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

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
						$yield_value = $constant_int_1;
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
						$yield_value = $constant_int_2;
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['fn'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('A', $p['tuple']($bases), $data);
		})();
		$m['inorder'] = null;
		$m['Tree'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GeneratorTest';
			$cls_definition['__md5__'] = '0723149834d6bb286a693c9146e7ba75';
			$method = $pyjs__bind_method2('__init__', function($$label, left, right) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$label = arguments[1];
					left = arguments[2];
					right = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments['callee']['__args__'][4][1];
				if (typeof right == 'undefined') right=arguments['callee']['__args__'][5][1];
				var $$label;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$label', $$label) : $p['setattr'](self, '$$label', $$label); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('left', left) : $p['setattr'](self, 'left', left); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('right', right) : $p['setattr'](self, 'right', right); 
				return null;
			}
	, 1, [null,null,['self'],['$$label'],['left', null],['right', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__repr__', function(level, indent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					indent = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
				if (typeof indent == 'undefined') indent=arguments['callee']['__args__'][4][1];
				var $bool51,$bool52,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,$add71,$mul9,$add74,$add72,$add73,$add70,$mul10,s;
				s = (typeof ($add61=(typeof ($mul9=level)==typeof ($mul10=indent) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($add62=$p['repr']($p['getattr'](self, '$$label'))) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62));
				if ((($bool51=$p['getattr'](self, 'left')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = (typeof ($add67=(typeof ($add63=s)==typeof ($add64='\n') && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64)))==typeof ($add68=self['left']['__repr__']((typeof ($add65=level)==typeof ($add66=$constant_int_1) && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66)), indent)) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68));
				}
				if ((($bool52=$p['getattr'](self, 'right')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52['__nonzero__']=='function'?
								$bool52['__nonzero__']() :
								(typeof $bool52['__len__']=='function'?
									($bool52['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = (typeof ($add73=(typeof ($add69=s)==typeof ($add70='\n') && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70)))==typeof ($add74=self['right']['__repr__']((typeof ($add71=level)==typeof ($add72=$constant_int_1) && (typeof $add71=='number'||typeof $add71=='string')?
						$add71+$add72:
						$p['op_add']($add71,$add72)), indent)) && (typeof $add73=='number'||typeof $add73=='string')?
						$add73+$add74:
						$p['op_add']($add73,$add74));
				}
				return s;
			}
	, 1, [null,null,['self'],['level', $constant_int_0],['indent', '    ']]);
			$cls_definition['__repr__'] = $method;
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
					if (self.prototype['__md5__'] !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['inorder'](self);
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Tree', $p['tuple']($bases), $data);
		})();
		$m['tree'] = function(list) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add76,$add75,$10,$bool53,i,$9,n,$div8,$len1,$div7;
			n = (($len1=list) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1)))));
			if ((($bool53=$p['op_eq'](n, $constant_int_0)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53['__nonzero__']=='function'?
							$bool53['__nonzero__']() :
							(typeof $bool53['__len__']=='function'?
								($bool53['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['list']([]);
			}
			i = (typeof ($div7=n)==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			return $m['Tree']((typeof ($9=list)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](i)), $m['tree']($p['__getslice'](list, 0, i)), $m['tree']($p['__getslice'](list, (typeof ($add75=i)==typeof ($add76=$constant_int_1) && (typeof $add75=='number'||typeof $add75=='string')?
				$add75+$add76:
				$p['op_add']($add75,$add76)), null)));
		};
		$m['tree']['__name__'] = 'tree';

		$m['tree']['__bind_type__'] = 0;
		$m['tree']['__args__'] = [null,null,['list']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GeneratorTest */


/* end module: GeneratorTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write.write', 'write', 'write.writebr']
*/
