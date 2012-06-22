/* start module: pyjamas.ui.AreaSlider */
$pyjs['loaded_modules']['pyjamas.ui.AreaSlider'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.AreaSlider']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.AreaSlider'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.AreaSlider'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.AreaSlider>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.AreaSlider';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['AreaSlider'] = $pyjs['loaded_modules']['pyjamas.ui.AreaSlider'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_2 = new $p['int'](2);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
		$m['DoubleControl'] = $p['___import___']('pyjamas.ui.DoubleControl.DoubleControl', 'pyjamas.ui', null, false);
		$m['AreaSlider'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.AreaSlider';
			$cls_definition['__md5__'] = 'c43a5f817ce36cc8b2c08cd7f512838c';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					step = arguments[4];
					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
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
				if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];
				if (typeof step == 'undefined') step=arguments['callee']['__args__'][6][1];
				var element,$bool2,$bool3,$bool1;
				if ((($bool2=!(($bool1=kwargs['has_key']('StyleName')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
							 true ) )) {
					kwargs['__setitem__']('StyleName', 'gwt-VerticalSlider');
				}
				if ((($bool3=kwargs['has_key']('Element')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					element = kwargs['pop']('Element');
				}
				else {
					element = $m['Focus']['createFocusable']();
				}
				$m['DOM']['setStyleAttribute'](element, 'position', 'relative');
				$m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('handle', $m['DOM']['createDiv']()) : $p['setattr'](self, 'handle', $m['DOM']['createDiv']()); 
				$m['DOM']['appendChild'](element, $p['getattr'](self, 'handle'));
				self['setHandleStyle']('1px', '100%', '10px', '#808080');
				$pyjs_kwargs_call($m['DoubleControl'], '__init__', null, kwargs, [{}, self, element, min_value, max_value, start_value, step]);
				self['addClickListener'](self);
				self['addFocusListener'](self);
				self['addMouseListener'](self);
				self['setHandleStyle']('1px', '10px', '10px', '#808080');
				return null;
			}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setHandleStyle', function(border, width, height, backgroundColor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					border = arguments[1];
					width = arguments[2];
					height = arguments[3];
					backgroundColor = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool7,$bool4,$bool5;
				if ((($bool4=!$p['op_is'](border, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'border', border);
				}
				if ((($bool5=!$p['op_is'](width, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'width', width);
				}
				if ((($bool6=!$p['op_is'](height, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'height', height);
				}
				if ((($bool7=!$p['op_is'](backgroundColor, null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'backgroundColor', backgroundColor);
				}
				return null;
			}
	, 1, [null,null,['self'],['border'],['width'],['height'],['backgroundColor']]);
			$cls_definition['setHandleStyle'] = $method;
			$method = $pyjs__bind_method2('setValue', function(new_value, notify) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					new_value = arguments[1];
					notify = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof notify == 'undefined') notify=arguments['callee']['__args__'][4][1];
				var $iter1_array,$iter1_nextval,$iter1_type,$iter1_idx,old_value,$iter1_iter,listener,$bool8,$4,$bool9,$2,$3,$1;
				old_value = $p['list']([$p['getattr'](self, 'value_x'), $p['getattr'](self, 'value_y')]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_x', (typeof ($1=new_value)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))) : $p['setattr'](self, 'value_x', (typeof ($1=new_value)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_y', (typeof ($3=new_value)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))) : $p['setattr'](self, 'value_y', (typeof ($3=new_value)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))); 
				if ((($bool9=!(($bool8=notify) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return null;
				}
				$iter1_iter = $p['getattr'](self, 'valuechange_listeners');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					listener['onControlValueChanged'](self, old_value, new_value);
				}
				return null;
			}
	, 1, [null,null,['self'],['new_value'],['notify', $constant_int_1]]);
			$cls_definition['setValue'] = $method;
			$method = $pyjs__bind_method2('onFocus', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeStyleName']('gwt-VerticalSlider-focussed');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dragging', false) : $p['setattr'](self, 'dragging', false); 
				$m['DOM']['releaseCapture'](self['getElement']());
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onLostFocus'] = $method;
			$method = $pyjs__bind_method2('moveControl', function(mouse_x, mouse_y, first_move) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					mouse_x = arguments[1];
					mouse_y = arguments[2];
					first_move = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof first_move == 'undefined') first_move=arguments['callee']['__args__'][5][1];
				var handle_height,$bool10,$bool11,$bool12,$bool13,$mul1,new_value,val_diff_x,val_diff_y,$mul4,$mul3,$div7,$sub9,$sub8,$div4,widget_height,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add4,$sub13,$sub12,$sub11,$sub10,$sub14,$div8,$cmp6,$div2,$div3,$div1,$div6,$mul2,length_range,$div5,$cmp5,$cmp4,$cmp7,handle_width,$cmp1,$cmp3,height_range,$cmp2,$cmp8,$add2,$add3,$add1,new_value_x,relative_y,relative_x,new_value_y,widget_width;
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
				if ((($bool10=((($cmp1=relative_y)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					relative_y = $constant_int_0;
				}
				if ((($bool11=((((($cmp3=relative_y)===($cmp4=height_range)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					relative_y = height_range;
				}
				relative_y = (typeof ($sub5=height_range)==typeof ($sub6=relative_y) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				handle_width = $m['DOM']['getIntAttribute']($p['getattr'](self, 'handle'), 'offsetWidth');
				widget_width = self['getOffsetWidth']();
				length_range = (typeof ($sub7=widget_width)==typeof ($sub8=$constant_int_10) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				relative_x = (typeof ($sub9=mouse_x)==typeof ($sub10=(typeof ($div3=handle_width)==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				if ((($bool12=((($cmp5=relative_x)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					relative_x = $constant_int_0;
				}
				if ((($bool13=((((($cmp7=relative_x)===($cmp8=length_range)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					relative_x = length_range;
				}
				val_diff_x = (typeof ($sub11=$p['getattr'](self, 'max_value_x'))==typeof ($sub12=$p['getattr'](self, 'min_value_x')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
				new_value_x = (typeof ($add1=(typeof ($div5=(typeof ($mul1=val_diff_x)==typeof ($mul2=relative_x) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($div6=length_range) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))==typeof ($add2=$p['getattr'](self, 'min_value_x')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				val_diff_y = (typeof ($sub13=$p['getattr'](self, 'max_value_y'))==typeof ($sub14=$p['getattr'](self, 'min_value_y')) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14));
				new_value_y = (typeof ($add3=(typeof ($div7=(typeof ($mul3=val_diff_y)==typeof ($mul4=relative_y) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div8=height_range) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)))==typeof ($add4=$p['getattr'](self, 'min_value_y')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				new_value = $p['list']([new_value_x, new_value_y]);
				new_value = self['processValue'](new_value);
				self['setControlPos'](new_value);
				self['setValue'](new_value);
				return null;
			}
	, 1, [null,null,['self'],['mouse_x'],['mouse_y'],['first_move', false]]);
			$cls_definition['moveControl'] = $method;
			$method = $pyjs__bind_method2('setControlPos', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c43a5f817ce36cc8b2c08cd7f512838c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub20,$sub21,$sub26,$cmp13,$sub24,$sub25,$sub28,$mul8,$bool14,$bool15,$bool16,$bool17,$mul7,$7,val_diff_x,val_diff_y,$sub27,$div10,$div11,$div12,widget_height,$sub19,$sub18,$sub17,$sub16,$sub15,$cmp15,$cmp14,$div9,$cmp11,$cmp10,$8,$cmp12,$6,$mul6,$mul5,$5,length_range,value_y,value_x,height_range,$cmp9,$cmp16,relative_y,relative_x,widget_width;
				value_x = (typeof ($5=value)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0));
				value_y = (typeof ($7=value)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_1));
				widget_width = self['getOffsetWidth']();
				length_range = (typeof ($sub15=widget_width)==typeof ($sub16=$constant_int_10) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				val_diff_x = (typeof ($sub17=$p['getattr'](self, 'max_value_x'))==typeof ($sub18=$p['getattr'](self, 'min_value_x')) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18));
				relative_x = (typeof ($div9=(typeof ($mul5=length_range)==typeof ($mul6=(typeof ($sub19=value_x)==typeof ($sub20=$p['getattr'](self, 'min_value_x')) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div10=val_diff_x) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
				if ((($bool14=((($cmp9=relative_x)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					relative_x = $constant_int_0;
				}
				if ((($bool15=((((($cmp11=relative_x)===($cmp12=length_range)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					relative_x = length_range;
				}
				widget_height = self['getOffsetHeight']();
				height_range = (typeof ($sub21=widget_height)==typeof ($sub22=$constant_int_10) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22));
				val_diff_y = (typeof ($sub23=$p['getattr'](self, 'max_value_y'))==typeof ($sub24=$p['getattr'](self, 'min_value_y')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24));
				relative_y = (typeof ($div11=(typeof ($mul7=height_range)==typeof ($mul8=(typeof ($sub25=value_y)==typeof ($sub26=$p['getattr'](self, 'min_value_y')) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($div12=val_diff_y) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
				if ((($bool16=((($cmp13=relative_y)===($cmp14=$constant_int_0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					relative_y = $constant_int_0;
				}
				if ((($bool17=((((($cmp15=relative_y)===($cmp16=height_range)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					relative_y = height_range;
				}
				relative_y = (typeof ($sub27=height_range)==typeof ($sub28=relative_y) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'top', $p['sprintf']('%dpx', relative_y));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'left', $p['sprintf']('%dpx', relative_x));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'position', 'absolute');
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setControlPos'] = $method;
			var $bases = new Array($m['DoubleControl']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AreaSlider', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.AreaSlider', 'AreaSlider', $m['AreaSlider']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.AreaSlider */


/* end module: pyjamas.ui.AreaSlider */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Focus', 'pyjamas.ui', 'pyjamas.ui.DoubleControl.DoubleControl', 'pyjamas.ui.DoubleControl']
*/
