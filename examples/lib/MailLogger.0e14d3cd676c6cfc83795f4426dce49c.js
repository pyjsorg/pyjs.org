/* start module: MailLogger */
$pyjs['loaded_modules']['MailLogger'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['MailLogger']['__was_initialized__']) return $pyjs['loaded_modules']['MailLogger'];
	var $m = $pyjs['loaded_modules']['MailLogger'];
	$m['__repr__'] = function() { return '<module: MailLogger>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailLogger';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['_logger'] = null;
		$m['LoggerCls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'MailLogger';
			$cls_definition['__md5__'] = 'f0cf2cf8b129ff042ef7737061357abc';
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
					if (self.prototype['__md5__'] !== 'f0cf2cf8b129ff042ef7737061357abc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add3,$add1,$len2,$iter1_array,$add4,$len1,$1,$2,target,$iter1_idx;
				$m['Grid']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('targets', $p['list']([])) : $p['setattr'](self, 'targets', $p['list']([])); 
				self['targets']['append']('app');
				self['resize']((typeof ($add1=(($len1=$p['getattr'](self, 'targets')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), $constant_int_2);
				self['setBorderWidth']('1px');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('counter', $constant_int_0) : $p['setattr'](self, 'counter', $constant_int_0); 
				self['setHTML']($constant_int_0, $constant_int_0, '<b>Log</b>');
				self['setText']($constant_int_1, $constant_int_0, 'app');
				$iter1_iter = $p['range']((($len2=$p['getattr'](self, 'targets')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					target = (typeof ($1=$p['getattr'](self, 'targets'))['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i));
					self['setText']((typeof ($add3=i)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)), $constant_int_0, target);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addTarget', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f0cf2cf8b129ff042ef7737061357abc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len4,$add6,$len3,$add5;
				self['targets']['append'](target);
				self['resize']((typeof ($add5=(($len3=$p['getattr'](self, 'targets')) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))))==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)), $constant_int_2);
				self['setText']((($len4=$p['getattr'](self, 'targets')) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))), $constant_int_0, target);
				return self['targets']['index'](target);
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['addTarget'] = $method;
			$method = $pyjs__bind_method2('write', function(target, message) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					message = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f0cf2cf8b129ff042ef7737061357abc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_text,log_line,$pyjs_try_err,$add15,old_text,$add14,$bool3,$add16,$bool1,$add10,$add11,$add12,$add13,target_row,$bool2,$cmp1,$cmp2,$add7,$add8,$add9,target_idx;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('counter', (typeof ($add7=$p['getattr'](self, 'counter'))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))) : $p['setattr'](self, 'counter', (typeof ($add7=$p['getattr'](self, 'counter'))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))); 
				if ((($bool1=$p['op_eq'](target, '')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					target = 'app';
				}
				try {
					target_idx = self['targets']['index'](target);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						target_idx = (typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ((($bool2=((($cmp1=target_idx)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					target_idx = self['addTarget'](target);
				}
				target_row = (typeof ($add9=target_idx)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				old_text = self['getHTML'](target_row, $constant_int_1);
				log_line = (typeof ($add11=$p['sprintf']('%d: ', $p['getattr'](self, 'counter')))==typeof ($add12=message) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				if ((($bool3=$p['op_eq'](old_text, '&nbsp;')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					new_text = log_line;
				}
				else {
					new_text = (typeof ($add15=(typeof ($add13=old_text)==typeof ($add14='<br>') && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($add16=log_line) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				self['setHTML'](target_row, $constant_int_1, new_text);
				return null;
			}
	, 1, [null,null,['self'],['target'],['message']]);
			$cls_definition['write'] = $method;
			var $bases = new Array($m['Grid']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LoggerCls', $p['tuple']($bases), $data);
		})();
		$m['Logger'] = function(target, message) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 2, arguments['length']);
			if (typeof target == 'undefined') target=arguments['callee']['__args__'][2][1];
			if (typeof message == 'undefined') message=arguments['callee']['__args__'][3][1];
			var $bool4,$bool5;
			if ((($bool5=!(($bool4=$m['_logger']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$m['_logger'] = $m['LoggerCls']();
			}
			$m['_logger']['write'](target, message);
			return $m['_logger'];
		};
		$m['Logger']['__name__'] = 'Logger';

		$m['Logger']['__bind_type__'] = 0;
		$m['Logger']['__args__'] = [null,null,['target', ''],['message', '']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MailLogger */


/* end module: MailLogger */


/*
PYJS_DEPS: ['pyjamas.ui.Grid.Grid', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Grid']
*/
