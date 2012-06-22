/* start module: UnitTest */
$pyjs['loaded_modules']['UnitTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['UnitTest']['__was_initialized__']) return $pyjs['loaded_modules']['UnitTest'];
	var $m = $pyjs['loaded_modules']['UnitTest'];
	$m['__repr__'] = function() { return '<module: UnitTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'UnitTest';
	$m['__name__'] = __mod_name__;
	try {
		var $cmp1,$cmp2,$and2,$bool2,$bool1,$bool3,$and1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_0 = new $p['int'](0);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['IN_BROWSER'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'));
		$m['IN_JS'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari', 'spidermonkey', 'pyv8'])['__contains__']($p['getattr']($m['sys'], 'platform'));
		$m['PY27_BEHAVIOUR'] = ((($bool2=$and1=!(($bool1=$m['IN_JS']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1['__nonzero__']=='function'?
					$bool1['__nonzero__']() :
					(typeof $bool1['__len__']=='function'?
						($bool1['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2['__nonzero__']=='function'?
					$bool2['__nonzero__']() :
					(typeof $bool2['__len__']=='function'?
						($bool2['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((((($cmp1=$p['__getslice']($p['getattr']($m['sys'], 'version_info'), $constant_int_0, $constant_int_2))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_7]))?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))))|1) == 1):$and1);
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
			$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		}
		$m['UnitTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'UnitTest';
			$cls_definition['__md5__'] = 'e28cdfce3446dbb5491b93aab49d366a';
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
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign5,$assign4,$assign1,$assign3,$assign2;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_completed', $constant_int_0) : $p['setattr'](self, 'tests_completed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_failed', $constant_int_0) : $p['setattr'](self, 'tests_failed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_passed', $constant_int_0) : $p['setattr'](self, 'tests_passed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_methods', $p['list']([])) : $p['setattr'](self, 'test_methods', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', null) : $p['setattr'](self, 'test_idx', null); 
				$assign1 = $p['getattr'](self, 'failUnlessEqual');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertEqual', $assign1) : $p['setattr'](self, 'assertEqual', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertEquals', $assign1) : $p['setattr'](self, 'assertEquals', $assign1); 
				$assign2 = $p['getattr'](self, 'failIfEqual');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertNotEqual', $assign2) : $p['setattr'](self, 'assertNotEqual', $assign2); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertNotEquals', $assign2) : $p['setattr'](self, 'assertNotEquals', $assign2); 
				$assign3 = $p['getattr'](self, 'failUnlessAlmostEqual');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertAlmostEqual', $assign3) : $p['setattr'](self, 'assertAlmostEqual', $assign3); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertAlmostEquals', $assign3) : $p['setattr'](self, 'assertAlmostEquals', $assign3); 
				$assign4 = $p['getattr'](self, 'failIfAlmostEqual');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertNotAlmostEqual', $assign4) : $p['setattr'](self, 'assertNotAlmostEqual', $assign4); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertNotAlmostEquals', $assign4) : $p['setattr'](self, 'assertNotAlmostEquals', $assign4); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('failUnlessRaises', $p['getattr'](self, 'assertRaises')) : $p['setattr'](self, 'failUnlessRaises', $p['getattr'](self, 'assertRaises')); 
				$assign5 = $p['getattr'](self, 'failUnless');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assert_', $assign5) : $p['setattr'](self, 'assert_', $assign5); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertTrue', $assign5) : $p['setattr'](self, 'assertTrue', $assign5); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertFalse', $p['getattr'](self, 'failIf')) : $p['setattr'](self, 'assertFalse', $p['getattr'](self, 'failIf')); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_run_test', function(test_method_name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					test_method_name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$add2,$pyjs_try_err,test_method,$add1;
				self['getTestMethods']();
				test_method = $p['getattr'](self, test_method_name);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test_name', test_method_name) : $p['setattr'](self, 'current_test_name', test_method_name); 
				self['setUp']();
				try {
					try {
						test_method();
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
							e = $pyjs_try_err;
							self['fail']((typeof ($add1='uncaught exception: ')==typeof ($add2=$p['str'](e)) && (typeof $add1=='number'||typeof $add1=='string')?
								$add1+$add2:
								$p['op_add']($add1,$add2)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('uncaught javascript exception');
					}
				}
				self['tearDown']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test_name', null) : $p['setattr'](self, 'current_test_name', null); 
				return null;
			}
	, 1, [null,null,['self'],['test_method_name']]);
			$cls_definition['_run_test'] = $method;
			$method = $pyjs__bind_method2('run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,test_method_name,$iter1_iter,$bool6,$iter1_array,$bool4,$bool5,$iter1_idx;
				self['getTestMethods']();
				if ((($bool5=!(($bool4=$m['IN_BROWSER']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter1_iter = $p['getattr'](self, 'test_methods');
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						test_method_name = $iter1_nextval;
						self['_run_test'](test_method_name);
					}
					self['displayStats']();
					if ((($bool6=$p['hasattr'](self, 'start_next_test')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6['__nonzero__']=='function'?
									$bool6['__nonzero__']() :
									(typeof $bool6['__len__']=='function'?
										($bool6['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['start_next_test']();
					}
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', $constant_int_0) : $p['setattr'](self, 'test_idx', $constant_int_0); 
				$m['Timer']($constant_int_10, self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$iter2_nextval,$iter2_type,$cmp3,$iter2_iter,i,$add3,$iter2_idx,$bool7,$add4,$len1,$2,$iter2_array,$1;
				$iter2_iter = $p['range']($constant_int_1);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					if ((($bool7=((((($cmp3=$p['getattr'](self, 'test_idx'))===($cmp4=(($len1=$p['getattr'](self, 'test_methods')) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7['__nonzero__']=='function'?
									$bool7['__nonzero__']() :
									(typeof $bool7['__len__']=='function'?
										($bool7['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['displayStats']();
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', 'DONE') : $p['setattr'](self, 'test_idx', 'DONE'); 
						self['start_next_test']();
						return null;
					}
					self['_run_test']((typeof ($1=$p['getattr'](self, 'test_methods'))['__array'] != 'undefined'?
						((typeof $1['__array'][$2=$p['getattr'](self, 'test_idx')]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']($p['getattr'](self, 'test_idx'))));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', (typeof ($add3=$p['getattr'](self, 'test_idx'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))) : $p['setattr'](self, 'test_idx', (typeof ($add3=$p['getattr'](self, 'test_idx'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))); 
				}
				timer['schedule']($constant_int_10);
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
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
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$method = $pyjs__bind_method2('tearDown', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['tearDown'] = $method;
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
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, '__class__'), '__name__');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			$method = $pyjs__bind_method2('getNameFmt', function(msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][3][1];
				var $add9,$bool10,$add6,$add7,$add12,$add5,$add10,$bool8,$bool9,$add8,$add11;
				if ((($bool8=self['getName']()) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					if ((($bool9=msg) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						msg = (typeof ($add5=' ')==typeof ($add6=$p['str'](msg)) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
					if ((($bool10=$p['getattr'](self, 'current_test_name')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						msg = (typeof ($add7=msg)==typeof ($add8=$p['sprintf'](' (%s) ', self['getCurrentTestID']())) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
					}
					return (typeof ($add11=(typeof ($add9=self['getName']())==typeof ($add10=msg) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)))==typeof ($add12=': ') && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				return '';
			}
	, 1, [null,null,['self'],['msg', '']]);
			$cls_definition['getNameFmt'] = $method;
			$method = $pyjs__bind_method2('getCurrentTestID', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['sprintf']('%s/%i', $p['tuple']([$p['getattr'](self, 'current_test_name'), $p['getattr'](self, 'tests_completed')]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentTestID'] = $method;
			$method = $pyjs__bind_method2('getTestMethods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$bool11,$iter3_type,m,$iter3_iter,$iter3_array,$iter3_nextval;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_methods', $p['list']([])) : $p['setattr'](self, 'test_methods', $p['list']([])); 
				$iter3_iter = $p['dir'](self);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					m = $iter3_nextval;
					if ((($bool11=self['isTestMethod'](m)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						self['test_methods']['append'](m);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTestMethods'] = $method;
			$method = $pyjs__bind_method2('isTestMethod', function(method) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13;
				if ((($bool12=$p['callable']($p['getattr'](self, method))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					if ((($bool13=$p['op_eq'](method['find']('test'), $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						return true;
					}
				}
				return false;
			}
	, 1, [null,null,['self'],['method']]);
			$cls_definition['isTestMethod'] = $method;
			$method = $pyjs__bind_method2('fail', function(msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][3][1];
				var $bool18,has_bugreport,$bool14,$bool15,$bool16,$bool17,$add26,$add29,$add28,title,$add21,$add20,$add22,$add25,$add24,$add27,$add19,fg_colour,$and3,$and4,$add14,$add15,$add16,$add17,$add13,$4,$add18,$3,$cmp5,bg_colour,$cmp6,$add32,$add30,$add31,name_fmt,octothorp,output,$add23;
				self['startTest']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				if ((($bool15=!(($bool14=msg) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
							 true ) )) {
					msg = 'assertion failed';
				}
				else {
					msg = $p['str'](msg);
				}
				octothorp = msg['find']('#');
				has_bugreport = ((($bool16=$and3=((((($cmp5=octothorp)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(typeof ($3=msg)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=(typeof ($add15=octothorp)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']((typeof ($add15=octothorp)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))))['isdigit']():$and3);
				if ((($bool17=has_bugreport) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					name_fmt = 'Known issue';
					bg_colour = '#ffc000';
					fg_colour = '#000000';
				}
				else {
					bg_colour = '#ff8080';
					fg_colour = '#000000';
					name_fmt = 'Test failed';
				}
				output = (typeof ($add23=(typeof ($add21=(typeof ($add19=(typeof ($add17="<table style='padding-left:20px;padding-right:20px;' cellpadding=2 width=100%><tr><td bgcolor='")==typeof ($add18=bg_colour) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20="'><font color='") && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($add22=fg_colour) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($add24="'>") && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				$m['write'](output);
				title = (typeof ($add27=(typeof ($add25='<b>')==typeof ($add26=self['getNameFmt'](name_fmt)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))==typeof ($add28='</b>') && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
				$m['write']((typeof ($add29=title)==typeof ($add30=msg) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)));
				output = '</font></td></tr></table>';
				output = (typeof ($add31=output)==typeof ($add32='\n') && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				$m['write'](output);
				if ((($bool18=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
if (typeof console != 'undefined') {
                if (typeof console.error == 'function') console.error(msg);
                if (typeof console.trace == 'function') console.trace();
            }
				}
				return false;
			}
	, 1, [null,null,['self'],['msg', null]]);
			$cls_definition['fail'] = $method;
			$method = $pyjs__bind_method2('startTest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add33,$add34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_completed', (typeof ($add33=$p['getattr'](self, 'tests_completed'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))) : $p['setattr'](self, 'tests_completed', (typeof ($add33=$p['getattr'](self, 'tests_completed'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['startTest'] = $method;
			$method = $pyjs__bind_method2('failIf', function(expr, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					expr = arguments[1];
					msg = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][4][1];
				var $bool19;
				self['startTest']();
				if ((($bool19=expr) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['expr'],['msg', null]]);
			$cls_definition['failIf'] = $method;
			$method = $pyjs__bind_method2('failUnless', function(expr, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					expr = arguments[1];
					msg = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][4][1];
				var $bool21,$bool20,$bool23,$bool22;
				self['startTest']();
				if ((($bool21=!(($bool20=expr) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					if ((($bool23=!(($bool22=msg) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						msg = 'expected True, got False';
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['expr'],['msg', null]]);
			$cls_definition['failUnless'] = $method;
			$method = $pyjs__bind_method2('failUnlessEqual', function(first, second, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					msg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $add38,$add37,$add36,$bool27,$add35,$bool25,$bool24,$bool26;
				self['startTest']();
				if ((($bool25=!(($bool24=$p['op_eq'](first, second)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					if ((($bool27=!(($bool26=msg) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						msg = (typeof ($add37=(typeof ($add35=$p['repr'](first))==typeof ($add36=' != ') && (typeof $add35=='number'||typeof $add35=='string')?
							$add35+$add36:
							$p['op_add']($add35,$add36)))==typeof ($add38=$p['repr'](second)) && (typeof $add37=='number'||typeof $add37=='string')?
							$add37+$add38:
							$p['op_add']($add37,$add38));
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['msg', null]]);
			$cls_definition['failUnlessEqual'] = $method;
			$method = $pyjs__bind_method2('failIfEqual', function(first, second, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					msg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $add39,$bool30,$add41,$add40,$add42,$bool29,$bool28;
				self['startTest']();
				if ((($bool28=$p['op_eq'](first, second)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					if ((($bool30=!(($bool29=msg) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						msg = (typeof ($add41=(typeof ($add39=$p['repr'](first))==typeof ($add40=' == ') && (typeof $add39=='number'||typeof $add39=='string')?
							$add39+$add40:
							$p['op_add']($add39,$add40)))==typeof ($add42=$p['repr'](second)) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							$p['op_add']($add41,$add42));
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['msg', null]]);
			$cls_definition['failIfEqual'] = $method;
			$method = $pyjs__bind_method2('failUnlessAlmostEqual', function(first, second, places, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					places = arguments[3];
					msg = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments['callee']['__args__'][5][1];
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][6][1];
				var $add50,$add51,$add52,$add49,$add48,$add47,$add46,$add44,$add43,$bool32,$bool33,$bool31,$sub2,$sub1,$add45;
				self['startTest']();
				if ((($bool31=!$p['op_eq']($p['round']((typeof ($sub1=second)==typeof ($sub2=first) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), places), $constant_int_0)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					if ((($bool33=!(($bool32=msg) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
						msg = (typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=$p['repr'](first))==typeof ($add44=' != ') && (typeof $add43=='number'||typeof $add43=='string')?
							$add43+$add44:
							$p['op_add']($add43,$add44)))==typeof ($add46=$p['repr'](second)) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46)))==typeof ($add48=' within ') && (typeof $add47=='number'||typeof $add47=='string')?
							$add47+$add48:
							$p['op_add']($add47,$add48)))==typeof ($add50=$p['repr'](places)) && (typeof $add49=='number'||typeof $add49=='string')?
							$add49+$add50:
							$p['op_add']($add49,$add50)))==typeof ($add52=' places') && (typeof $add51=='number'||typeof $add51=='string')?
							$add51+$add52:
							$p['op_add']($add51,$add52));
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['places', $constant_int_7],['msg', null]]);
			$cls_definition['failUnlessAlmostEqual'] = $method;
			$method = $pyjs__bind_method2('failIfAlmostEqual', function(first, second, places, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					places = arguments[3];
					msg = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments['callee']['__args__'][5][1];
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][6][1];
				var $add60,$add53,$add54,$add55,$add57,$add58,$add59,$add62,$sub3,$bool36,$add56,$bool34,$bool35,$add61,$sub4;
				self['startTest']();
				if ((($bool34=$p['op_is']($p['round']((typeof ($sub3=second)==typeof ($sub4=first) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)), places), $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					if ((($bool36=!(($bool35=msg) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						msg = (typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=$p['repr'](first))==typeof ($add54=' == ') && (typeof $add53=='number'||typeof $add53=='string')?
							$add53+$add54:
							$p['op_add']($add53,$add54)))==typeof ($add56=$p['repr'](second)) && (typeof $add55=='number'||typeof $add55=='string')?
							$add55+$add56:
							$p['op_add']($add55,$add56)))==typeof ($add58=' within ') && (typeof $add57=='number'||typeof $add57=='string')?
							$add57+$add58:
							$p['op_add']($add57,$add58)))==typeof ($add60=$p['repr'](places)) && (typeof $add59=='number'||typeof $add59=='string')?
							$add59+$add60:
							$p['op_add']($add59,$add60)))==typeof ($add62=' places') && (typeof $add61=='number'||typeof $add61=='string')?
							$add61+$add62:
							$p['op_add']($add61,$add62));
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['places', $constant_int_7],['msg', null]]);
			$cls_definition['failIfAlmostEqual'] = $method;
			$method = $pyjs__bind_method2('assertIn', function(member, container, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					member = arguments[1];
					container = arguments[2];
					msg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $bool37,$bool38,standardMsg;
				if ((($bool37=!container['__contains__'](member)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					standardMsg = $p['sprintf']('%s not found in %s', $p['tuple']([$p['__getslice']($p['repr'](member), 0, $constant_int_80), $p['__getslice']($p['repr'](container), 0, $constant_int_80)]));
					self['fail'](((($bool38=msg) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (msg) : (standardMsg)));
				}
				return null;
			}
	, 1, [null,null,['self'],['member'],['container'],['msg', null]]);
			$cls_definition['assertIn'] = $method;
			$method = $pyjs__bind_method2('assertNotIn', function(member, container, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					member = arguments[1];
					container = arguments[2];
					msg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $bool40,$bool39,standardMsg;
				if ((($bool39=container['__contains__'](member)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					standardMsg = $p['sprintf']('%s unexpectedly found in %s', $p['tuple']([$p['__getslice']($p['repr'](member), 0, $constant_int_80), $p['__getslice']($p['repr'](container), 0, $constant_int_80)]));
					self['fail'](((($bool40=msg) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
						false :
						(typeof $bool40=='object'?
							(typeof $bool40['__nonzero__']=='function'?
								$bool40['__nonzero__']() :
								(typeof $bool40['__len__']=='function'?
									($bool40['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (msg) : (standardMsg)));
				}
				return null;
			}
	, 1, [null,null,['self'],['member'],['container'],['msg', null]]);
			$cls_definition['assertNotIn'] = $method;
			$method = $pyjs__bind_method2('assertRaises', function(excClass, callableObj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					excClass = arguments[1];
					callableObj = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof callableObj != 'undefined') {
						if (callableObj !== null && typeof callableObj['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = callableObj;
							callableObj = arguments[3];
						}
					} else 					if (typeof excClass != 'undefined') {
						if (excClass !== null && typeof excClass['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = excClass;
							excClass = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var $bool41,$pyjs_try_err,excName;
				self['startTest']();
				try {
					$pyjs_kwargs_call(null, callableObj, args, kwargs, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						if ((($bool41=$p['hasattr'](excClass, '__name__')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
								false :
								(typeof $bool41=='object'?
									(typeof $bool41['__nonzero__']=='function'?
										$bool41['__nonzero__']() :
										(typeof $bool41['__len__']=='function'?
											($bool41['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							excName = $p['getattr'](excClass, '__name__');
						}
						else {
							excName = $p['str'](excClass);
						}
						self['fail']($p['sprintf']('%s not raised', excName));
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == excClass['__name__'])||$p['_isinstance']($pyjs_try_err,excClass)) {
							return null;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['excClass'],['callableObj']]);
			$cls_definition['assertRaises'] = $method;
			$method = $pyjs__bind_method2('displayStats', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add83,$add82,$add81,$add80,$add84,fg_colour,$add65,$add64,$add67,$add66,$add63,$add69,$add68,tests_passed,$sub6,$sub5,$bool45,$bool44,$bool43,$bool42,$add77,$add76,bg_colour,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,output;
				if ((($bool42=$p['getattr'](self, 'tests_failed')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42['__nonzero__']=='function'?
								$bool42['__nonzero__']() :
								(typeof $bool42['__len__']=='function'?
									($bool42['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					bg_colour = '#ff0000';
					fg_colour = '#ffffff';
				}
				else {
					bg_colour = '#00ff00';
					fg_colour = '#000000';
				}
				tests_passed = (typeof ($sub5=$p['getattr'](self, 'tests_completed'))==typeof ($sub6=$p['getattr'](self, 'tests_failed')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				if ((($bool43=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43['__nonzero__']=='function'?
								$bool43['__nonzero__']() :
								(typeof $bool43['__len__']=='function'?
									($bool43['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63="<table cellpadding=4 width=100%><tr><td bgcolor='")==typeof ($add64=bg_colour) && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64)))==typeof ($add66="'><font face='arial' size=4 color='") && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66)))==typeof ($add68=fg_colour) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68)))==typeof ($add70="'><b>") && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70));
				}
				else {
					output = '';
				}
				output = (typeof ($add77=output)==typeof ($add78=(typeof ($add75=(typeof ($add73=(typeof ($add71=self['getNameFmt']())==typeof ($add72=$p['sprintf']('Passed %d ', tests_passed)) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($add74=$p['sprintf']('/ %d', $p['getattr'](self, 'tests_completed'))) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74)))==typeof ($add76=' tests') && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76))) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78));
				if ((($bool44=$p['getattr'](self, 'tests_failed')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add79=output)==typeof ($add80=$p['sprintf'](' (%d failed)', $p['getattr'](self, 'tests_failed'))) && (typeof $add79=='number'||typeof $add79=='string')?
						$add79+$add80:
						$p['op_add']($add79,$add80));
				}
				if ((($bool45=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45['__nonzero__']=='function'?
								$bool45['__nonzero__']() :
								(typeof $bool45['__len__']=='function'?
									($bool45['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add81=output)==typeof ($add82='</b></font></td></tr></table>') && (typeof $add81=='number'||typeof $add81=='string')?
						$add81+$add82:
						$p['op_add']($add81,$add82));
				}
				else {
					output = (typeof ($add83=output)==typeof ($add84='\n') && (typeof $add83=='number'||typeof $add83=='string')?
						$add83+$add84:
						$p['op_add']($add83,$add84));
				}
				$m['write'](output);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['displayStats'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UnitTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end UnitTest */


/* end module: UnitTest */


/*
PYJS_DEPS: ['write.write', 'write', 'write.writebr', 'sys', 'pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
