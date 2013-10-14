/* start module: libuitest.UnitTest */
$pyjs['loaded_modules']['libuitest.UnitTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libuitest.UnitTest']['__was_initialized__']) return $pyjs['loaded_modules']['libuitest.UnitTest'];
	if(typeof $pyjs['loaded_modules']['libuitest'] == 'undefined' || !$pyjs['loaded_modules']['libuitest']['__was_initialized__']) $p['___import___']('libuitest', null);
	var $m = $pyjs['loaded_modules']['libuitest.UnitTest'];
	$m['__repr__'] = function() { return '<module: libuitest.UnitTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libuitest.UnitTest';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libuitest']['UnitTest'] = $pyjs['loaded_modules']['libuitest.UnitTest'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_0 = new $p['int'](0);
		$m['write'] = $p['___import___']('write.write', 'libuitest', null, false);
		$m['writebr'] = $p['___import___']('write.writebr', 'libuitest', null, false);
		$m['sys'] = $p['___import___']('sys', 'libuitest');
		$m['IN_BROWSER'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'));
		$m['IN_JS'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari', 'spidermonkey', 'pyv8'])['__contains__']($p['getattr']($m['sys'], 'platform'));
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'libuitest', null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'libuitest', null, false);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', 'libuitest', null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'libuitest', null, false);
		$m['GetTestOutput'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libuitest.UnitTest';
			$cls_definition['__md5__'] = 'fd5ef0c3a29b89ca43487ee1836485b5';
			$method = $pyjs__bind_method2('__init__', function(unittest, test_name, output) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					unittest = arguments[1];
					test_name = arguments[2];
					output = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fd5ef0c3a29b89ca43487ee1836485b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_name', test_name) : $p['setattr'](self, 'test_name', test_name); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('unittest', unittest) : $p['setattr'](self, 'unittest', unittest); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('output', output) : $p['setattr'](self, 'output', output); 
				return null;
			}
	, 1, [null,null,['self'],['unittest'],['test_name'],['output']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(responseText) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					responseText = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fd5ef0c3a29b89ca43487ee1836485b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$and14,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,ec2,ec1,a1,$and20,$and18,$and19,ai1,ai2,$pyjs_try_err,$bool21,$bool20,$bool23,$bool22,$sub2,$sub1,a2,$iter1_array,$and8,$and9,i2,$iter1_nextval,i1,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$bool2,$bool3,$and10,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,e1,e2,$and12,ok,$iter1_type,$and13,$iter1_iter,i,$and15,$and11,$iter1_idx,$and16,$and17;
				$p['getattr'](self, 'unittest')['__is_instance__'] && typeof $p['getattr'](self, 'unittest')['__setattr__'] == 'function' ? $p['getattr'](self, 'unittest')['__setattr__']('async_test_name', $p['getattr'](self, 'test_name')) : $p['setattr']($p['getattr'](self, 'unittest'), 'async_test_name', $p['getattr'](self, 'test_name')); 
				e1 = $m['DOM']['getElementById']('testcompare1');
				e2 = $m['DOM']['getElementById']('testcompare2');
				e1['__is_instance__'] && typeof e1['__setattr__'] == 'function' ? e1['__setattr__']('innerHTML', responseText) : $p['setattr'](e1, 'innerHTML', responseText); 
				e2['__is_instance__'] && typeof e2['__setattr__'] == 'function' ? e2['__setattr__']('innerHTML', responseText) : $p['setattr'](e2, 'innerHTML', responseText); 
				i1 = $m['DOM']['walkChildren'](e1);
				i2 = $m['DOM']['walkChildren'](e2);
				ok = true;
				while ((($bool1=ok) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					try {
						ec1 = i1['next']();
						ec2 = i2['next']();
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
							break;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					ok = ((($bool2=$and1=ok) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']($p['getattr'](ec1, 'nodeType'), $p['getattr'](ec2, 'nodeType')):$and1);
					if ((($bool4=!(($bool3=ok) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						break;
					}
					ok = ((($bool5=$and3=ok) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']($p['getattr'](ec1, 'nodeName'), $p['getattr'](ec2, 'nodeName')):$and3);
					ok = ((($bool6=$and5=ok) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6['__nonzero__']=='function'?
								$bool6['__nonzero__']() :
								(typeof $bool6['__len__']=='function'?
									($bool6['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']($p['getattr'](ec1, 'nodeValue'), $p['getattr'](ec2, 'nodeValue')):$and5);
					if ((($bool8=!(($bool7=ok) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						break;
					}
					if ((($bool10=((($bool9=$and7=$p['hasattr'](ec1, 'getInnerText')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['hasattr'](ec2, 'getInnerText'):$and7)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						ok = ((($bool11=$and9=ok) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['op_eq'](ec1['getInnerText'](), ec2['getInnerText']()):$and9);
					}
					if ((($bool13=!(($bool12=ok) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						break;
					}
					if ((($bool15=((($bool14=$and11=$p['hasattr'](ec1, 'attributes')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['hasattr'](ec2, 'attributes'):$and11)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						a1 = $p['getattr'](ec1, 'attributes');
						a2 = $p['getattr'](ec2, 'attributes');
						ok = ((($bool16=$and13=$p['hasattr'](a1, 'length')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16['__nonzero__']=='function'?
									$bool16['__nonzero__']() :
									(typeof $bool16['__len__']=='function'?
										($bool16['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['hasattr'](a2, 'length'):$and13);
						if ((($bool18=!(($bool17=ok) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
							break;
						}
						ok = ((($bool19=$and15=ok) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19['__nonzero__']=='function'?
									$bool19['__nonzero__']() :
									(typeof $bool19['__len__']=='function'?
										($bool19['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['op_eq']($p['getattr'](a1, 'length'), $p['getattr'](a2, 'length')):$and15);
						if ((($bool21=!(($bool20=ok) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
							break;
						}
						$iter1_iter = $p['range']($p['getattr'](a1, 'length'));
						if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter['__iter__']();
							$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							i = $iter1_nextval;
							ai1 = a1['item'](i);
							ai2 = a2['item'](i);
							ok = ((($bool22=$and17=ok) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
								false :
								(typeof $bool22=='object'?
									(typeof $bool22['__nonzero__']=='function'?
										$bool22['__nonzero__']() :
										(typeof $bool22['__len__']=='function'?
											($bool22['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$p['op_eq']($p['getattr'](ai1, 'nodeValue'), $p['getattr'](ai2, 'nodeValue')):$and17);
							ok = ((($bool23=$and19=ok) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
								false :
								(typeof $bool23=='object'?
									(typeof $bool23['__nonzero__']=='function'?
										$bool23['__nonzero__']() :
										(typeof $bool23['__len__']=='function'?
											($bool23['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$p['op_eq']($p['getattr'](ai1, 'nodeName'), $p['getattr'](ai2, 'nodeName')):$and19);
						}
					}
				}
				self['unittest']['assertTrue'](ok);
				$p['getattr'](self, 'unittest')['__is_instance__'] && typeof $p['getattr'](self, 'unittest')['__setattr__'] == 'function' ? $p['getattr'](self, 'unittest')['__setattr__']('tests_outstanding', (typeof ($sub1=$p['getattr']($p['getattr'](self, 'unittest'), 'tests_outstanding'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr']($p['getattr'](self, 'unittest'), 'tests_outstanding', (typeof ($sub1=$p['getattr']($p['getattr'](self, 'unittest'), 'tests_outstanding'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				e1['__is_instance__'] && typeof e1['__setattr__'] == 'function' ? e1['__setattr__']('innerHTML', '') : $p['setattr'](e1, 'innerHTML', ''); 
				e2['__is_instance__'] && typeof e2['__setattr__'] == 'function' ? e2['__setattr__']('innerHTML', '') : $p['setattr'](e2, 'innerHTML', ''); 
				return null;
			}
	, 1, [null,null,['self'],['responseText']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('onError', function(responseText, status) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					responseText = arguments[1];
					status = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fd5ef0c3a29b89ca43487ee1836485b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,$sub4;
				$p['getattr'](self, 'unittest')['__is_instance__'] && typeof $p['getattr'](self, 'unittest')['__setattr__'] == 'function' ? $p['getattr'](self, 'unittest')['__setattr__']('async_test_name', $p['getattr'](self, 'test_name')) : $p['setattr']($p['getattr'](self, 'unittest'), 'async_test_name', $p['getattr'](self, 'test_name')); 
				self['unittest']['fail']($p['sprintf']('downloading test output %s failed,\nstatus %s, response %s', $p['tuple']([$p['getattr'](self, 'test_name'), $p['str'](status), $p['repr'](responseText)])));
				$p['getattr'](self, 'unittest')['__is_instance__'] && typeof $p['getattr'](self, 'unittest')['__setattr__'] == 'function' ? $p['getattr'](self, 'unittest')['__setattr__']('tests_outstanding', (typeof ($sub3=$p['getattr']($p['getattr'](self, 'unittest'), 'tests_outstanding'))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))) : $p['setattr']($p['getattr'](self, 'unittest'), 'tests_outstanding', (typeof ($sub3=$p['getattr']($p['getattr'](self, 'unittest'), 'tests_outstanding'))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))); 
				return null;
			}
	, 1, [null,null,['self'],['responseText'],['status']]);
			$cls_definition['onError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GetTestOutput', $p['tuple']($bases), $data);
		})();
		$m['UnitTest1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libuitest.UnitTest';
			$cls_definition['__md5__'] = '9232e7c65c17e5b30dd55c0f99c9a863';
			$method = $pyjs__bind_method2('__init__', function(test_gen_folder) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					test_gen_folder = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign5,$assign4,$assign1,$assign3,$assign2;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_gen_folder', test_gen_folder) : $p['setattr'](self, 'test_gen_folder', test_gen_folder); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_completed', $constant_int_0) : $p['setattr'](self, 'tests_completed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_failed', $constant_int_0) : $p['setattr'](self, 'tests_failed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_passed', $constant_int_0) : $p['setattr'](self, 'tests_passed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_methods', $p['list']([])) : $p['setattr'](self, 'test_methods', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', null) : $p['setattr'](self, 'test_idx', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_outstanding', null) : $p['setattr'](self, 'tests_outstanding', null); 
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
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertRaises', $p['getattr'](self, 'failUnlessRaises')) : $p['setattr'](self, 'assertRaises', $p['getattr'](self, 'failUnlessRaises')); 
				$assign5 = $p['getattr'](self, 'failUnless');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assert_', $assign5) : $p['setattr'](self, 'assert_', $assign5); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertTrue', $assign5) : $p['setattr'](self, 'assertTrue', $assign5); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('assertFalse', $p['getattr'](self, 'failIf')) : $p['setattr'](self, 'assertFalse', $p['getattr'](self, 'failIf')); 
				return null;
			}
	, 1, [null,null,['self'],['test_gen_folder']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('do_test', function(output, name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					output = arguments[1];
					name = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool24,handler,fname;
				handler = $m['GetTestOutput'](self, $p['getattr'](self, 'current_test_name'), output);
				if ((($bool24=name) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					fname = $p['sprintf']('%s.%s.txt', $p['tuple']([$p['getattr'](self, 'current_test_name'), name]));
				}
				else {
					fname = $p['sprintf']('%s.txt', $p['getattr'](self, 'current_test_name'));
				}
				$m['HTTPRequest']()['asyncGet'](fname, handler);
				return null;
			}
	, 1, [null,null,['self'],['output'],['name']]);
			$cls_definition['do_test'] = $method;
			$method = $pyjs__bind_method2('write_test_output', function(name, div_id) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					div_id = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof name == 'undefined') name=arguments['callee']['__args__'][3][1];
				if (typeof div_id == 'undefined') div_id=arguments['callee']['__args__'][4][1];
				var $add2,f,$bool29,$bool28,element,$bool25,$bool27,$bool26,fname,output,$add1,os;
				if ((($bool25=$p['op_is'](div_id, null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					div_id = 'tests';
				}
				element = $m['DOM']['getElementById'](div_id);
				output = $p['getattr'](element, 'innerHTML');
				if ((($bool26=$p['op_is']($p['getattr'](self, 'test_gen_folder'), null)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					if ((($bool27=$p['op_is']($p['getattr'](self, 'tests_outstanding'), null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_outstanding', $constant_int_0) : $p['setattr'](self, 'tests_outstanding', $constant_int_0); 
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_outstanding', (typeof ($add1=$p['getattr'](self, 'tests_outstanding'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))) : $p['setattr'](self, 'tests_outstanding', (typeof ($add1=$p['getattr'](self, 'tests_outstanding'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))); 
					self['do_test'](output, name);
					return null;
				}
				os = $p['___import___']('os', 'libuitest');
				if ((($bool28=name) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					fname = $p['sprintf']('%s.%s.txt', $p['tuple']([$p['getattr'](self, 'current_test_name'), name]));
				}
				else {
					fname = $p['sprintf']('%s.txt', $p['getattr'](self, 'current_test_name'));
				}
				f = $p['open'](os['path']['join']($p['getattr'](self, 'test_gen_folder'), fname), 'w');
				f['write'](output);
				f['close']();
				if ((($bool29=$p['op_is']($p['getattr'](self, 'tests_outstanding'), null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_outstanding', $constant_int_0) : $p['setattr'](self, 'tests_outstanding', $constant_int_0); 
				}
				return false;
			}
	, 1, [null,null,['self'],['name', null],['div_id', null]]);
			$cls_definition['write_test_output'] = $method;
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var test_method;
				self['getTestMethods']();
				test_method = $p['getattr'](self, test_method_name);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test_name', test_method_name) : $p['setattr'](self, 'current_test_name', test_method_name); 
				self['setUp']();
				test_method();
				self['tearDown']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test_name', null) : $p['setattr'](self, 'current_test_name', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('async_test_name', null) : $p['setattr'](self, 'async_test_name', null); 
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getTestMethods']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', $constant_int_0) : $p['setattr'](self, 'test_idx', $constant_int_0); 
				$m['Timer']($constant_int_1, self);
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$cmp2,i,$iter2_idx,$add3,$bool30,$bool31,$add4,$len1,$cmp1,$2,$iter2_array,$1;
				if ((($bool30=$p['op_is']($p['getattr'](self, 'test_idx'), 'DONE')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					self['check_start_next_test']();
					return null;
				}
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
					if ((($bool31=((((($cmp1=$p['getattr'](self, 'test_idx'))===($cmp2=(($len1=$p['getattr'](self, 'test_methods')) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))))?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', 'DONE') : $p['setattr'](self, 'test_idx', 'DONE'); 
						self['check_start_next_test']();
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
				timer['schedule']($constant_int_1);
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('check_start_next_test', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool32,$bool33,$bool34;
				if ((($bool32=$p['op_is']($p['getattr'](self, 'tests_outstanding'), null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					return null;
				}
				if ((($bool33=$p['op_eq']($p['getattr'](self, 'tests_outstanding'), $constant_int_0)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					if ((($bool34=$p['hasattr'](self, 'lastTestsCheck')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
						self['lastTestsCheck']();
					}
					self['displayStats']();
					self['start_next_test']();
					return null;
				}
				$m['Timer']($constant_int_100, self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['check_start_next_test'] = $method;
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][3][1];
				var $add11,$or1,$or2,$bool35,$add5,$bool36,$bool37,$add12,test_name,$add6,$bool38,$add9,$add10,$add8,$add7;
				test_name = ((($bool35=$or1=$p['getattr'](self, 'async_test_name')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['getattr'](self, 'current_test_name'));
				if ((($bool36=self['getName']()) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					if ((($bool37=msg) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						msg = (typeof ($add5=' ')==typeof ($add6=$p['str'](msg)) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
					if ((($bool38=test_name) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
						msg = (typeof ($add7=msg)==typeof ($add8=$p['sprintf'](' (%s) ', test_name)) && (typeof $add7=='number'||typeof $add7=='string')?
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter3_type,m,$iter3_iter,$iter3_array,$bool39,$iter3_nextval;
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
					if ((($bool39=self['isTestMethod'](m)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool41,$bool40;
				if ((($bool40=$p['callable']($p['getattr'](self, method))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					if ((($bool41=$p['op_eq'](method['find']('test'), $constant_int_0)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][3][1];
				var $bool44,$bool43,$bool42,title,$add20,$add14,$add15,$add16,$add17,$add13,$add18,$add19;
				self['startTest']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				if ((($bool43=!(($bool42=msg) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					msg = 'assertion failed';
				}
				else {
					msg = $p['str'](msg);
				}
				title = (typeof ($add17=(typeof ($add15='<b>')==typeof ($add16=self['getNameFmt']('Test failed')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))==typeof ($add18='</b>') && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				$m['writebr']((typeof ($add19=title)==typeof ($add20=msg) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
				if ((($bool44=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add21,$add22;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tests_completed', (typeof ($add21=$p['getattr'](self, 'tests_completed'))==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))) : $p['setattr'](self, 'tests_completed', (typeof ($add21=$p['getattr'](self, 'tests_completed'))==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))); 
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][4][1];
				var $bool45;
				self['startTest']();
				if ((($bool45=expr) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][4][1];
				var $bool47,$bool46;
				self['startTest']();
				if ((($bool47=!(($bool46=expr) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['expr'],['msg', null]]);
			$cls_definition['failUnless'] = $method;
			$method = $pyjs__bind_method2('failUnlessRaises', function(excClass, callableObj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
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
				var $bool48,$pyjs_try_err,excName;
				try {
					$pyjs_kwargs_call(null, callableObj, args, kwargs, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						if ((($bool48=$p['hasattr'](excClass, '__name__')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
								false :
								(typeof $bool48=='object'?
									(typeof $bool48['__nonzero__']=='function'?
										$bool48['__nonzero__']() :
										(typeof $bool48['__len__']=='function'?
											($bool48['__len__']()>0 ?
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
			$cls_definition['failUnlessRaises'] = $method;
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $bool50,$bool51,$bool52,$add25,$add24,$bool49,$add26,$add23;
				self['startTest']();
				if ((($bool50=!(($bool49=$p['op_eq'](first, second)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
					if ((($bool52=!(($bool51=msg) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
						msg = (typeof ($add25=(typeof ($add23=$p['repr'](first))==typeof ($add24=' != ') && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24)))==typeof ($add26=$p['repr'](second)) && (typeof $add25=='number'||typeof $add25=='string')?
							$add25+$add26:
							$p['op_add']($add25,$add26));
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][5][1];
				var $bool54,$bool55,$bool53,$add27,$add28,$add29,$add30;
				self['startTest']();
				if ((($bool53=$p['op_eq'](first, second)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					if ((($bool55=!(($bool54=msg) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
							false :
							(typeof $bool55=='object'?
								(typeof $bool55['__nonzero__']=='function'?
									$bool55['__nonzero__']() :
									(typeof $bool55['__len__']=='function'?
										($bool55['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						msg = (typeof ($add29=(typeof ($add27=$p['repr'](first))==typeof ($add28=' == ') && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($add30=$p['repr'](second)) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30));
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments['callee']['__args__'][5][1];
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][6][1];
				var $add36,$bool56,$bool57,$add32,$add33,$add31,$bool58,$add37,$add34,$add35,$add39,$add38,$add40,$sub6,$sub5;
				self['startTest']();
				if ((($bool56=!$p['op_eq']($p['round']((typeof ($sub5=second)==typeof ($sub6=first) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)), places), $constant_int_0)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56['__nonzero__']=='function'?
								$bool56['__nonzero__']() :
								(typeof $bool56['__len__']=='function'?
									($bool56['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool58=!(($bool57=msg) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57['__nonzero__']=='function'?
								$bool57['__nonzero__']() :
								(typeof $bool57['__len__']=='function'?
									($bool57['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
							false :
							(typeof $bool58=='object'?
								(typeof $bool58['__nonzero__']=='function'?
									$bool58['__nonzero__']() :
									(typeof $bool58['__len__']=='function'?
										($bool58['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						msg = (typeof ($add39=(typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31=$p['repr'](first))==typeof ($add32=' != ') && (typeof $add31=='number'||typeof $add31=='string')?
							$add31+$add32:
							$p['op_add']($add31,$add32)))==typeof ($add34=$p['repr'](second)) && (typeof $add33=='number'||typeof $add33=='string')?
							$add33+$add34:
							$p['op_add']($add33,$add34)))==typeof ($add36=' within ') && (typeof $add35=='number'||typeof $add35=='string')?
							$add35+$add36:
							$p['op_add']($add35,$add36)))==typeof ($add38=$p['repr'](places)) && (typeof $add37=='number'||typeof $add37=='string')?
							$add37+$add38:
							$p['op_add']($add37,$add38)))==typeof ($add40=' places') && (typeof $add39=='number'||typeof $add39=='string')?
							$add39+$add40:
							$p['op_add']($add39,$add40));
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments['callee']['__args__'][5][1];
				if (typeof msg == 'undefined') msg=arguments['callee']['__args__'][6][1];
				var $bool61,$bool60,$add49,$add48,$add47,$add46,$add44,$add43,$bool59,$add41,$add42,$add50,$sub8,$sub7,$add45;
				self['startTest']();
				if ((($bool59=$p['op_is']($p['round']((typeof ($sub7=second)==typeof ($sub8=first) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)), places), $constant_int_0)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59['__nonzero__']=='function'?
								$bool59['__nonzero__']() :
								(typeof $bool59['__len__']=='function'?
									($bool59['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool61=!(($bool60=msg) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60['__nonzero__']=='function'?
								$bool60['__nonzero__']() :
								(typeof $bool60['__len__']=='function'?
									($bool60['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
							false :
							(typeof $bool61=='object'?
								(typeof $bool61['__nonzero__']=='function'?
									$bool61['__nonzero__']() :
									(typeof $bool61['__len__']=='function'?
										($bool61['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						msg = (typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41=$p['repr'](first))==typeof ($add42=' == ') && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							$p['op_add']($add41,$add42)))==typeof ($add44=$p['repr'](second)) && (typeof $add43=='number'||typeof $add43=='string')?
							$add43+$add44:
							$p['op_add']($add43,$add44)))==typeof ($add46=' within ') && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46)))==typeof ($add48=$p['repr'](places)) && (typeof $add47=='number'||typeof $add47=='string')?
							$add47+$add48:
							$p['op_add']($add47,$add48)))==typeof ($add50=' places') && (typeof $add49=='number'||typeof $add49=='string')?
							$add49+$add50:
							$p['op_add']($add49,$add50));
					}
					return self['fail'](msg);
				}
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['places', $constant_int_7],['msg', null]]);
			$cls_definition['failIfAlmostEqual'] = $method;
			$method = $pyjs__bind_method2('assertRaises', function(excClass, callableObj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
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
				var $bool62,exc,$pyjs_try_err,excName;
				self['startTest']();
				try {
					$pyjs_kwargs_call(null, callableObj, args, kwargs, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						if ((($bool62=$p['hasattr'](excClass, '__name__')) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
								false :
								(typeof $bool62=='object'?
									(typeof $bool62['__nonzero__']=='function'?
										$bool62['__nonzero__']() :
										(typeof $bool62['__len__']=='function'?
											($bool62['__len__']()>0 ?
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
							exc = $pyjs_try_err;
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
					if (self.prototype['__md5__'] !== '9232e7c65c17e5b30dd55c0f99c9a863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool64,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,$bool66,$add69,$add68,$sub9,tests_passed,$bool63,$bool65,fg_colour,$add51,$sub10,$add70,$add72,bg_colour,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add71,output;
				if ((($bool63=$p['getattr'](self, 'tests_failed')) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63['__nonzero__']=='function'?
								$bool63['__nonzero__']() :
								(typeof $bool63['__len__']=='function'?
									($bool63['__len__']()>0 ?
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
				tests_passed = (typeof ($sub9=$p['getattr'](self, 'tests_completed'))==typeof ($sub10=$p['getattr'](self, 'tests_failed')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				if ((($bool64=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
						false :
						(typeof $bool64=='object'?
							(typeof $bool64['__nonzero__']=='function'?
								$bool64['__nonzero__']() :
								(typeof $bool64['__len__']=='function'?
									($bool64['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add57=(typeof ($add55=(typeof ($add53=(typeof ($add51="<table cellpadding=4 width=100%><tr><td bgcolor='")==typeof ($add52=bg_colour) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)))==typeof ($add54="'><font face='arial' size=4 color='") && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)))==typeof ($add56=fg_colour) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56)))==typeof ($add58="'><b>") && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58));
				}
				else {
					output = '';
				}
				output = (typeof ($add65=output)==typeof ($add66=(typeof ($add63=(typeof ($add61=(typeof ($add59=self['getNameFmt']())==typeof ($add60=$p['sprintf']('Passed %d ', tests_passed)) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60)))==typeof ($add62=$p['sprintf']('/ %d', $p['getattr'](self, 'tests_completed'))) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))==typeof ($add64=' tests') && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64))) && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$p['op_add']($add65,$add66));
				if ((($bool65=$p['getattr'](self, 'tests_failed')) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add67=output)==typeof ($add68=$p['sprintf'](' (%d failed)', $p['getattr'](self, 'tests_failed'))) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68));
				}
				if ((($bool66=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66['__nonzero__']=='function'?
								$bool66['__nonzero__']() :
								(typeof $bool66['__len__']=='function'?
									($bool66['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					output = (typeof ($add69=output)==typeof ($add70='</b></font></td></tr></table>') && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70));
				}
				else {
					output = (typeof ($add71=output)==typeof ($add72='\n') && (typeof $add71=='number'||typeof $add71=='string')?
						$add71+$add72:
						$p['op_add']($add71,$add72));
				}
				$pyjs_kwargs_call(null, $m['write'], null, null, [{'do_escape':false}, output]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['displayStats'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UnitTest1', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libuitest.UnitTest */


/* end module: libuitest.UnitTest */


/*
PYJS_DEPS: ['write.write', 'write', 'write.writebr', 'sys', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'os']
*/
