/* start module: sink.Logger */
$pyjs['loaded_modules']['sink.Logger'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Logger']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Logger'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Logger'];
	$m['__repr__'] = function() { return '<module: sink.Logger>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Logger';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Logger'] = $pyjs['loaded_modules']['sink.Logger'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'sink', null, false);
		$m['Logger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Logger';
			$cls_definition['__md5__'] = '48bdbff51b15e20811f9119487061b34';
			$cls_definition['instances'] = $p['list']([]);
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
					if (self.prototype['__md5__'] !== '48bdbff51b15e20811f9119487061b34') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add3,$add1,$len2,$iter1_array,$add4,$len1,$1,$2,target,$iter1_idx;
				$m['Logger']['instances']['append'](self);
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
				self['setBorderWidth']('1');
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
			$method = $pyjs__bind_method2('getSingleton', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];

				return $p['getattr']($m['Logger'], 'singleton');
			}
	, 2, [null,null,['self']]);
			$cls_definition['getSingleton'] = $method;
			$method = $pyjs__bind_method2('setSingleton', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48bdbff51b15e20811f9119487061b34') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Logger']['__is_instance__'] && typeof $m['Logger']['__setattr__'] == 'function' ? $m['Logger']['__setattr__']('singleton', self) : $p['setattr']($m['Logger'], 'singleton', self); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setSingleton'] = $method;
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
					if (self.prototype['__md5__'] !== '48bdbff51b15e20811f9119487061b34') {
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
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 2, arguments['length']);
    var cls = this['prototype'];
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,logger,$iter2_array;
				$iter2_iter = $p['getattr'](cls, 'instances');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					logger = $iter2_nextval;
					logger['onMessage'](target, message);
				}
				return null;
			}
	, 2, [null,null,['cls'],['target'],['message']]);
			$cls_definition['write'] = $method;
			$method = $pyjs__bind_method2('onMessage', function(target, message) {
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
					if (self.prototype['__md5__'] !== '48bdbff51b15e20811f9119487061b34') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_text,log_line,$bool3,old_text,$add14,$add15,$add16,$bool1,$add10,$add11,$add12,$add13,$add18,target_row,$bool2,$cmp1,$cmp2,$add17,$add7,$add8,$add9,target_idx;
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
				target_idx = self['targets']['index'](target);
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
				log_line = (typeof ($add13=(typeof ($add11=$p['getattr'](self, 'counter'))==typeof ($add12=': ') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($add14=message) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
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
					new_text = (typeof ($add17=(typeof ($add15=old_text)==typeof ($add16='<br>') && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))==typeof ($add18=log_line) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				self['setHTML'](target_row, $constant_int_1, new_text);
				return null;
			}
	, 1, [null,null,['self'],['target'],['message']]);
			$cls_definition['onMessage'] = $method;
			var $bases = new Array($m['Grid']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Logger', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Logger */


/* end module: sink.Logger */


/*
PYJS_DEPS: ['pyjamas.ui.Grid.Grid', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Grid']
*/
