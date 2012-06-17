/* start module: pyjamas.ui.VerticalSlider */
$pyjs.loaded_modules['pyjamas.ui.VerticalSlider'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.VerticalSlider'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.VerticalSlider'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.VerticalSlider"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.VerticalSlider>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalSlider';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['VerticalSlider'] = $pyjs.loaded_modules['pyjamas.ui.VerticalSlider'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_2 = new $p['int'](2);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
		$m['Control'] = $p['___import___']('pyjamas.ui.Control.Control', 'pyjamas.ui', null, false);
		$m['VerticalSlider'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.VerticalSlider';
			$cls_definition.__md5__ = '701e840645235d7acd3a749ed4be3fd8';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
				if (this.__is_instance__ === true) {
					var self = this;
					var ka = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						var ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					step = arguments[4];
					var ka = arguments.length >= 6 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof step != 'undefined') {
						if (step !== null && typeof step['$pyjs_is_kwarg'] != 'undefined') {
							ka = step;
							step = arguments[5];
						}
					} else 					if (typeof start_value != 'undefined') {
						if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
							ka = start_value;
							start_value = arguments[5];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							ka = max_value;
							max_value = arguments[5];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							ka = min_value;
							min_value = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof start_value == 'undefined') start_value=arguments.callee.__args__[5][1];
				if (typeof step == 'undefined') step=arguments.callee.__args__[6][1];
				var $or1,$or2,element,$bool1;
				ka.__setitem__('StyleName', ka['get']('StyleName', 'gwt-VerticalSlider'));
				element = ((($bool1=$or1=ka['pop']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$m['Focus']['createFocusable']());
				$m['DOM']['setStyleAttribute'](element, 'position', 'relative');
				$m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('handle', $m['DOM']['createDiv']()) : $p['setattr'](self, 'handle', $m['DOM']['createDiv']()); 
				$m['DOM']['appendChild'](element, $p['getattr'](self, 'handle'));
				self['setHandleStyle']('1px', '100%', '10px', '#808080');
				$pyjs_kwargs_call($m['Control'], '__init__', null, ka, [{}, self, element, min_value, max_value, start_value, step]);
				self['addClickListener'](self);
				self['addFocusListener'](self);
				self['addMouseListener'](self);
				return null;
			}
	, 1, [null,['ka'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setHandleStyle', function(border, width, height, backgroundColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					border = arguments[1];
					width = arguments[2];
					height = arguments[3];
					backgroundColor = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4,$bool3,$bool2,$bool5;
				if ((($bool2=!$p['op_is'](border, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'border', border);
				}
				if ((($bool3=!$p['op_is'](width, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'width', width);
				}
				if ((($bool4=!$p['op_is'](height, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'height', height);
				}
				if ((($bool5=!$p['op_is'](backgroundColor, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'backgroundColor', backgroundColor);
				}
				return null;
			}
	, 1, [null,null,['self'],['border'],['width'],['height'],['backgroundColor']]);
			$cls_definition['setHandleStyle'] = $method;
			$method = $pyjs__bind_method2('onFocus', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addStyleName']('gwt-VerticalSlider-focussed');
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onFocus'] = $method;
			$method = $pyjs__bind_method2('onLostFocus', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeStyleName']('gwt-VerticalSlider-focussed');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dragging', false) : $p['setattr'](self, 'dragging', false); 
				$m['DOM']['releaseCapture'](self['getElement']());
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onLostFocus'] = $method;
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
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof first_move == 'undefined') first_move=arguments.callee.__args__[5][1];
				var handle_height,new_value,$sub8,$div4,widget_height,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,val_diff,$bool6,$bool7,$div2,$div3,$div1,$mul2,$mul1,$cmp4,$cmp1,$cmp3,height_range,$cmp2,$add2,$add1,relative_y;
				handle_height = $m['DOM']['getIntAttribute']($p['getattr'](self, 'handle'), 'offsetHeight');
				widget_height = self['getOffsetHeight']();
				height_range = (typeof ($sub1=widget_height)==typeof ($sub2=$constant_int_10) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				relative_y = (typeof ($sub3=mouse_y)==typeof ($sub4=(typeof ($div1=handle_height)==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				if ((($bool6=((($cmp1=relative_y)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					relative_y = $constant_int_0;
				}
				if ((($bool7=((((($cmp3=relative_y)===($cmp4=height_range)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					relative_y = height_range;
				}
				relative_y = (typeof ($sub5=height_range)==typeof ($sub6=relative_y) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				val_diff = (typeof ($sub7=$p['getattr'](self, 'max_value'))==typeof ($sub8=$p['getattr'](self, 'min_value')) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				new_value = (typeof ($add1=(typeof ($div3=(typeof ($mul1=val_diff)==typeof ($mul2=relative_y) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($div4=height_range) && typeof $div3=='number' && $div4 !== 0?
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
					if (self.prototype.__md5__ !== '701e840645235d7acd3a749ed4be3fd8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$div6,$sub9,widget_height,val_diff,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$bool8,$bool9,$mul3,$div5,$cmp5,$cmp7,$cmp6,height_range,$cmp8,relative_y;
				widget_height = self['getOffsetHeight']();
				height_range = (typeof ($sub9=widget_height)==typeof ($sub10=$constant_int_10) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				val_diff = (typeof ($sub11=$p['getattr'](self, 'max_value'))==typeof ($sub12=$p['getattr'](self, 'min_value')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
				relative_y = (typeof ($div5=(typeof ($mul3=height_range)==typeof ($mul4=(typeof ($sub13=value)==typeof ($sub14=$p['getattr'](self, 'min_value')) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div6=val_diff) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				if ((($bool8=((($cmp5=relative_y)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					relative_y = $constant_int_0;
				}
				if ((($bool9=((((($cmp7=relative_y)===($cmp8=height_range)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					relative_y = height_range;
				}
				relative_y = (typeof ($sub15=height_range)==typeof ($sub16=relative_y) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'top', $p['sprintf']('%dpx', relative_y));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'position', 'absolute');
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setControlPos'] = $method;
			var $bases = new Array($m['Control']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('VerticalSlider', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.VerticalSlider', 'VerticalSlider', $m['VerticalSlider']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.VerticalSlider */


/* end module: pyjamas.ui.VerticalSlider */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Focus', 'pyjamas.ui', 'pyjamas.ui.Control.Control', 'pyjamas.ui.Control']
*/
