/* start module: pyjamas.ui.HorizontalSlider */
$pyjs.loaded_modules['pyjamas.ui.HorizontalSlider'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HorizontalSlider'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HorizontalSlider'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HorizontalSlider"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HorizontalSlider>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalSlider';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['HorizontalSlider'] = $pyjs.loaded_modules['pyjamas.ui.HorizontalSlider'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_2 = new $p['int'](2);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['VerticalSlider'] = $p['___import___']('pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui', null, false);
		$m['HorizontalSlider'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.HorizontalSlider';
			$cls_definition.__md5__ = '66ba41636b84fc49d88849acaa3ef7e2';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					step = arguments[4];
					var kwargs = arguments.length >= 6 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '66ba41636b84fc49d88849acaa3ef7e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof step != 'undefined') {
						if (step !== null && typeof step['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = step;
							step = arguments[5];
						}
					} else 					if (typeof start_value != 'undefined') {
						if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = start_value;
							start_value = arguments[5];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = max_value;
							max_value = arguments[5];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = min_value;
							min_value = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof start_value == 'undefined') start_value=arguments.callee.__args__[5][1];
				if (typeof step == 'undefined') step=arguments.callee.__args__[6][1];

				$pyjs_kwargs_call($m['VerticalSlider'], '__init__', null, kwargs, [{}, self, min_value, max_value, start_value, step]);
				self['setHandleStyle'](null, '10px', '100%', null);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('moveControl', function(mouse_x, mouse_y, first_move) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					mouse_x = arguments[1];
					mouse_y = arguments[2];
					first_move = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '66ba41636b84fc49d88849acaa3ef7e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof first_move == 'undefined') first_move=arguments.callee.__args__[5][1];
				var $div4,new_value,$mul1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,val_diff,$bool2,$bool1,$div2,$div3,$div1,$mul2,length_range,$cmp4,handle_width,$cmp1,$cmp3,$cmp2,$add2,$add1,relative_x,widget_width;
				handle_width = $m['DOM']['getIntAttribute']($p['getattr'](self, 'handle'), 'offsetWidth');
				widget_width = self['getOffsetWidth']();
				length_range = (typeof ($sub1=widget_width)==typeof ($sub2=$constant_int_10) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				relative_x = (typeof ($sub3=mouse_x)==typeof ($sub4=(typeof ($div1=handle_width)==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				if ((($bool1=((($cmp1=relative_x)===($cmp2=$constant_int_0)?0:
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
					relative_x = $constant_int_0;
				}
				if ((($bool2=((((($cmp3=relative_x)===($cmp4=length_range)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					relative_x = length_range;
				}
				val_diff = (typeof ($sub5=$p['getattr'](self, 'max_value'))==typeof ($sub6=$p['getattr'](self, 'min_value')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				new_value = (typeof ($add1=(typeof ($div3=(typeof ($mul1=val_diff)==typeof ($mul2=relative_x) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($div4=length_range) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))==typeof ($add2=$p['getattr'](self, 'min_value')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				new_value = self['processValue'](new_value);
				self['setControlPos'](new_value);
				self['setValue'](new_value);
				return null;
			}
	, 1, [null,null,['self'],['mouse_x'],['mouse_y'],['first_move', false]]);
			$cls_definition['moveControl'] = $method;
			$method = $pyjs__bind_method2('setControlPos', function(value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '66ba41636b84fc49d88849acaa3ef7e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul3,$sub9,$sub8,$sub7,val_diff,$sub12,$sub11,$sub10,$bool3,$bool4,$mul4,$div6,length_range,$div5,$cmp5,$cmp7,$cmp6,$cmp8,relative_x,widget_width;
				widget_width = self['getOffsetWidth']();
				length_range = (typeof ($sub7=widget_width)==typeof ($sub8=$constant_int_10) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				val_diff = (typeof ($sub9=$p['getattr'](self, 'max_value'))==typeof ($sub10=$p['getattr'](self, 'min_value')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				relative_x = (typeof ($div5=(typeof ($mul3=length_range)==typeof ($mul4=(typeof ($sub11=value)==typeof ($sub12=$p['getattr'](self, 'min_value')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div6=val_diff) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				if ((($bool3=((($cmp5=relative_x)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					relative_x = $constant_int_0;
				}
				if ((($bool4=((((($cmp7=relative_x)===($cmp8=length_range)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					relative_x = length_range;
				}
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'left', $p['sprintf']('%dpx', relative_x));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'position', 'absolute');
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setControlPos'] = $method;
			var $bases = new Array($m['VerticalSlider']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HorizontalSlider', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.HorizontalSlider', 'HorizontalSlider', $m['HorizontalSlider']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HorizontalSlider */


/* end module: pyjamas.ui.HorizontalSlider */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui', 'pyjamas.ui.VerticalSlider']
*/
