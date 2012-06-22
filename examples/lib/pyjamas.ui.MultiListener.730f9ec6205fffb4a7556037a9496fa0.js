/* start module: pyjamas.ui.MultiListener */
$pyjs['loaded_modules']['pyjamas.ui.MultiListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MultiListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MultiListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MultiListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MultiListener'] = $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];
	try {


		$m['MultiListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.MultiListener';
			$cls_definition['__md5__'] = 'e50d64e93b8fb36f8e601d7c2a29fe27';
			$cls_definition['combinations'] = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'onFocus':$p['list'](['onLostFocus']), 'onLostFocus':$p['list'](['onFocus']), 'onKeyDown':$p['list'](['onKeyUp', 'onKeyPress']), 'onKeyUp':$p['list'](['onKeyPress', 'onKeyDown']), 'onKeyPress':$p['list'](['onKeyDown', 'onKeyUp']), 'onMouseMove':$p['list'](['onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave']), 'onMouseDown':$p['list'](['onMouseUp', 'onMouseEnter', 'onMouseLeave', 'onMouseMove']), 'onMouseUp':$p['list'](['onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseDown']), 'onMouseEnter':$p['list'](['onMouseLeave', 'onMouseMove', 'onMouseDown', 'onMouseUp']), 'onMouseLeave':$p['list'](['onMouseMove', 'onMouseDown', 'onMouseUp', 'onMouseEnter']), 'onTabSelected':$p['list'](['onBeforeTabSelected']), 'onBeforeTabSelected':$p['list'](['onTabSelected'])}]);
			$method = $pyjs__bind_method2('__init__', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e50d64e93b8fb36f8e601d7c2a29fe27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof obj != 'undefined') {
						if (obj !== null && typeof obj['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = obj;
							obj = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs_kwargs_call(self, 'set', null, kwargs, [{}, obj]);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['obj']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('set', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e50d64e93b8fb36f8e601d7c2a29fe27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof obj != 'undefined') {
						if (obj !== null && typeof obj['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = obj;
							obj = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $iter1_iter,$iter2_type,$iter2_iter,k1,$iter1_array,$iter1_nextval,$bool2,$bool3,$iter2_idx,$bool1,$2,$1,$iter2_nextval,$iter1_type,k,ignore,$iter1_idx,v,$iter2_array;
				ignore = $p['getattr'](self, 'ignore');
				$iter1_iter = kwargs['iteritems']();
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					$p['setattr'](self, k, $p['getattr'](obj, v));
					if ((($bool1=$p['getattr'](self, 'combinations')['__contains__'](k)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$iter2_iter = (typeof ($1=$p['getattr'](self, 'combinations'))['__array'] != 'undefined'?
							((typeof $1['__array'][$2=k]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__'](k));
						if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
							$iter2_type = 0;
						} else {
							$iter2_iter = $iter2_iter['__iter__']();
							$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter2_idx = 0;
						while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
							k1 = $iter2_nextval;
							if ((($bool3=!(($bool2=$p['hasattr'](self, k1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
								false :
								(typeof $bool2=='object'?
									(typeof $bool2['__nonzero__']=='function'?
										$bool2['__nonzero__']() :
										(typeof $bool2['__len__']=='function'?
											($bool2['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
								$p['setattr'](self, k1, ignore);
							}
						}
					}
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['obj']]);
			$cls_definition['set'] = $method;
			$method = $pyjs__bind_method2('ignore', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e50d64e93b8fb36f8e601d7c2a29fe27') {
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

				return true;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['ignore'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiListener', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.MultiListener */


/* end module: pyjamas.ui.MultiListener */


