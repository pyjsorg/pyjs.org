/* start module: pyjamas.ui.DoubleControl */
$pyjs['loaded_modules']['pyjamas.ui.DoubleControl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DoubleControl']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DoubleControl'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DoubleControl'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DoubleControl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DoubleControl';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DoubleControl'] = $pyjs['loaded_modules']['pyjamas.ui.DoubleControl'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_20 = new $p['int'](20);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['math'] = $p['___import___']('math', 'pyjamas.ui');
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
		$m['Control'] = $p['___import___']('pyjamas.ui.Control.Control', 'pyjamas.ui', null, false);
		$m['DoubleControl'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DoubleControl';
			$cls_definition['__md5__'] = '870efa20defc1c18ee78f86d290adfaf';
			$method = $pyjs__bind_method2('__init__', function(element, min_value, max_value, start_value_xy, step_xy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					min_value = arguments[2];
					max_value = arguments[3];
					start_value_xy = arguments[4];
					step_xy = arguments[5];
					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870efa20defc1c18ee78f86d290adfaf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof step_xy != 'undefined') {
						if (step_xy !== null && typeof step_xy['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = step_xy;
							step_xy = arguments[6];
						}
					} else 					if (typeof start_value_xy != 'undefined') {
						if (start_value_xy !== null && typeof start_value_xy['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = start_value_xy;
							start_value_xy = arguments[6];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = max_value;
							max_value = arguments[6];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = min_value;
							min_value = arguments[6];
						}
					} else 					if (typeof element != 'undefined') {
						if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = element;
							element = arguments[6];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[6];
						}
					} else {
					}
				}
				if (typeof start_value_xy == 'undefined') start_value_xy=arguments['callee']['__args__'][6][1];
				if (typeof step_xy == 'undefined') step_xy=arguments['callee']['__args__'][7][1];
				var $bool4,$div2,$div3,$div1,$div4,$sub3,$sub2,$sub1,$sub4,$bool2,$bool3,$bool1,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$11,$12,$13;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('min_value_x', (typeof ($1=min_value)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))) : $p['setattr'](self, 'min_value_x', (typeof ($1=min_value)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('min_value_y', (typeof ($3=min_value)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))) : $p['setattr'](self, 'min_value_y', (typeof ($3=min_value)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('max_value_x', (typeof ($5=max_value)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0))) : $p['setattr'](self, 'max_value_x', (typeof ($5=max_value)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('max_value_y', (typeof ($7=max_value)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_1))) : $p['setattr'](self, 'max_value_y', (typeof ($7=max_value)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_1))); 
				if ((($bool1=$p['op_is'](start_value_xy, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('start_value_x', $p['getattr'](self, 'min_value_x')) : $p['setattr'](self, 'start_value_x', $p['getattr'](self, 'min_value_x')); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('start_value_y', $p['getattr'](self, 'min_value_y')) : $p['setattr'](self, 'start_value_y', $p['getattr'](self, 'min_value_y')); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('start_value_x', (typeof ($9=start_value_xy)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_0))) : $p['setattr'](self, 'start_value_x', (typeof ($9=start_value_xy)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_0))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('start_value_y', (typeof ($11=start_value_xy)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_1))) : $p['setattr'](self, 'start_value_y', (typeof ($11=start_value_xy)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_1))); 
				}
				if ((($bool2=$p['op_is'](step_xy, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step_x', (typeof ($div1=(typeof ($sub1=$p['getattr'](self, 'max_value_x'))==typeof ($sub2=$p['getattr'](self, 'min_value_x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)))==typeof ($div2=$constant_int_20) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))) : $p['setattr'](self, 'step_x', (typeof ($div1=(typeof ($sub1=$p['getattr'](self, 'max_value_x'))==typeof ($sub2=$p['getattr'](self, 'min_value_x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)))==typeof ($div2=$constant_int_20) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step_y', (typeof ($div3=(typeof ($sub3=$p['getattr'](self, 'max_value_y'))==typeof ($sub4=$p['getattr'](self, 'min_value_y')) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))==typeof ($div4=$constant_int_20) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))) : $p['setattr'](self, 'step_y', (typeof ($div3=(typeof ($sub3=$p['getattr'](self, 'max_value_y'))==typeof ($sub4=$p['getattr'](self, 'min_value_y')) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))==typeof ($div4=$constant_int_20) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step_x', (typeof ($13=step_xy)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_0))) : $p['setattr'](self, 'step_x', (typeof ($13=step_xy)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_0))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step_y', (typeof ($15=step_xy)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_1]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_1))) : $p['setattr'](self, 'step_y', (typeof ($15=step_xy)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_1]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_1))); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_x', $p['getattr'](self, 'start_value_x')) : $p['setattr'](self, 'value_x', $p['getattr'](self, 'start_value_x')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_y', $p['getattr'](self, 'start_value_y')) : $p['setattr'](self, 'value_y', $p['getattr'](self, 'start_value_y')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('valuechange_listeners', $p['list']([])) : $p['setattr'](self, 'valuechange_listeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dragging', false) : $p['setattr'](self, 'dragging', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('drag_enabled', false) : $p['setattr'](self, 'drag_enabled', false); 
				if ((($bool4=!(($bool3=kwargs['has_key']('TabIndex')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					kwargs['__setitem__']('TabIndex', $constant_int_0);
				}
				$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
				$m['MouseHandler']['__init__'](self);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['element'],['min_value'],['max_value'],['start_value_xy', null],['step_xy', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('processValue', function(value) {
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
					if (self.prototype['__md5__'] !== '870efa20defc1c18ee78f86d290adfaf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $20,$div7,$sub8,$sub7,$sub6,$sub5,$div8,$mul4,$mul3,$mul2,$mul1,$div5,$17,value_y,value_x,$18,$19,$add2,$add3,$add1,$add4,$div6;
				value_x = (typeof ($17=value)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']($constant_int_0));
				value_y = (typeof ($19=value)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_1]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_1));
				value_x = $m['math']['floor']((typeof ($div5=(typeof ($sub5=value_x)==typeof ($sub6=$p['getattr'](self, 'min_value_x')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))==typeof ($div6=$p['getattr'](self, 'step_x')) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
				value_x = (typeof ($add1=(typeof ($mul1=value_x)==typeof ($mul2=$p['getattr'](self, 'step_x')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($add2=$p['getattr'](self, 'min_value_x')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				value_x = $p['max'](value_x, $p['getattr'](self, 'min_value_x'));
				value_x = $p['min'](value_x, $p['getattr'](self, 'max_value_x'));
				value_y = $m['math']['floor']((typeof ($div7=(typeof ($sub7=value_y)==typeof ($sub8=$p['getattr'](self, 'min_value_y')) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($div8=$p['getattr'](self, 'step_y')) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)));
				value_y = (typeof ($add3=(typeof ($mul3=value_y)==typeof ($mul4=$p['getattr'](self, 'step_y')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($add4=$p['getattr'](self, 'min_value_y')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				value_y = $p['max'](value_y, $p['getattr'](self, 'min_value_y'));
				value_y = $p['min'](value_y, $p['getattr'](self, 'max_value_y'));
				return $p['list']([value_x, value_y]);
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['processValue'] = $method;
			$method = $pyjs__bind_method2('setValue', function(new_value_x, new_value_y, notify) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					new_value_x = arguments[1];
					new_value_y = arguments[2];
					notify = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870efa20defc1c18ee78f86d290adfaf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof notify == 'undefined') notify=arguments['callee']['__args__'][5][1];
				var $iter1_array,$iter1_nextval,$iter1_type,$iter1_idx,$21,$22,old_value,$24,$iter1_iter,listener,$bool6,$bool5,$23;
				old_value = $p['list']([$p['getattr'](self, 'value_x'), $p['getattr'](self, 'value_y')]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_x', (typeof ($21=(typeof new_value == "undefined"?$m['new_value']:new_value))['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_0))) : $p['setattr'](self, 'value_x', (typeof ($21=(typeof new_value == "undefined"?$m['new_value']:new_value))['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value_y', (typeof ($23=(typeof new_value == "undefined"?$m['new_value']:new_value))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_1]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_1))) : $p['setattr'](self, 'value_y', (typeof ($23=(typeof new_value == "undefined"?$m['new_value']:new_value))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_1]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_1))); 
				if ((($bool6=!(($bool5=notify) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					listener['onControlValueChanged'](self, old_value, (typeof new_value == "undefined"?$m['new_value']:new_value));
				}
				return null;
			}
	, 1, [null,null,['self'],['new_value_x'],['new_value_y'],['notify', $constant_int_1]]);
			$cls_definition['setValue'] = $method;
			$method = $pyjs__bind_method2('onControlValueChanged', function(value_old_xy, value_new_xy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					value_old_xy = arguments[1];
					value_new_xy = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870efa20defc1c18ee78f86d290adfaf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['value_old_xy'],['value_new_xy']]);
			$cls_definition['onControlValueChanged'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870efa20defc1c18ee78f86d290adfaf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool8,$sub12,$sub10,$sub9,$add6,$bool7,$add5,$sub11,new_value,$add8,$add7;
				if ((($bool7=$p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
					new_value = self['processValue']($p['tuple']([(typeof ($add5=$p['getattr'](self, 'value_x'))==typeof ($add6=$p['getattr'](self, 'step_x')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)), (typeof ($add7=$p['getattr'](self, 'value_y'))==typeof ($add8=$p['getattr'](self, 'step_y')) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))]));
					self['setControlPos'](new_value);
					self['setValue'](new_value);
				}
				else if ((($bool8=$p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
					new_value = self['processValue']($p['tuple']([(typeof ($sub9=$p['getattr'](self, 'value_x'))==typeof ($sub10=$p['getattr'](self, 'step_x')) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10)), (typeof ($sub11=$p['getattr'](self, 'value_y'))==typeof ($sub12=$p['getattr'](self, 'step_y')) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))]));
					self['setControlPos'](new_value);
					self['setValue'](new_value);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			var $bases = new Array($m['Control']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DoubleControl', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DoubleControl', 'DoubleControl', $m['DoubleControl']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DoubleControl */


/* end module: pyjamas.ui.DoubleControl */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'math', 'pyjamas.DOM', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Focus', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Control.Control', 'pyjamas.ui.Control']
*/
