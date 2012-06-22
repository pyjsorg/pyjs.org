/* start module: svgWindow */
$pyjs['loaded_modules']['svgWindow'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['svgWindow']['__was_initialized__']) return $pyjs['loaded_modules']['svgWindow'];
	var $m = $pyjs['loaded_modules']['svgWindow'];
	$m['__repr__'] = function() { return '<module: svgWindow>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'svgWindow';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_30 = new $p['int'](30);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
		$m['svgWindow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'svgWindow';
			$cls_definition['__md5__'] = 'a9b452e70d7c6cf354d54ad0e736b3a2';
			$method = $pyjs__bind_method2('__init__', function(className) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof className == 'undefined') className=arguments['callee']['__args__'][3][1];
				var element;
				element = $m['DOM']['createIFrame']();
				$m['FocusWidget']['__init__'](self, element);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('floorplan_file', 'floorplan.svg') : $p['setattr'](self, 'floorplan_file', 'floorplan.svg'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('svg_area', element) : $p['setattr'](self, 'svg_area', element); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot_deg', 0.0) : $p['setattr'](self, 'rot_deg', 0.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', 1.0) : $p['setattr'](self, 'scale', 1.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_translate', 0.0) : $p['setattr'](self, 'x_translate', 0.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_translate', 0.0) : $p['setattr'](self, 'y_translate', 0.0); 
				self['draw_elements']();
				self['svg_area']['setAttribute']('class', className);
				return null;
			}
	, 1, [null,null,['self'],['className', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('apply_transform', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var svg_g,$add5,transform_string,$add8,transform,$add2,$add3,$add1,$add6,$add7,$add4,rot_string,$add10,translate_string,$add9,scale_string;
				rot_string = $p['sprintf']('rotate(%f)', $p['getattr'](self, 'rot_deg'));
				scale_string = $p['sprintf']('scale(%f)', $p['getattr'](self, 'scale'));
				translate_string = $p['sprintf']('translate(%f,', $p['getattr'](self, 'x_translate'));
				translate_string = (typeof ($add1=translate_string)==typeof ($add2=$p['sprintf']('%f)', $p['getattr'](self, 'y_translate'))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				transform_string = rot_string;
				transform_string = (typeof ($add5=(typeof ($add3=transform_string)==typeof ($add4=' ') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($add6=scale_string) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				transform_string = (typeof ($add9=(typeof ($add7=transform_string)==typeof ($add8=' ') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=translate_string) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				svg_g = self['svg_area']['contentDocument']['getElementById']('svg_transform_element');
				$m['RootPanel']()['add']($m['HTML']($p['sprintf']('transform_string = %s', transform_string)));
				transform = svg_g['getAttribute']('transform');
				svg_g['setAttribute']('transform', transform_string);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['apply_transform'] = $method;
			$method = $pyjs__bind_method2('scale', function(scale) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					scale = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', scale) : $p['setattr'](self, 'scale', scale); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self'],['scale']]);
			$cls_definition['scale'] = $method;
			$method = $pyjs__bind_method2('rotate', function(degrees) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					degrees = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot_deg', degrees) : $p['setattr'](self, 'rot_deg', degrees); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self'],['degrees']]);
			$cls_definition['rotate'] = $method;
			$method = $pyjs__bind_method2('translate', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_translate', x) : $p['setattr'](self, 'x_translate', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_translate', y) : $p['setattr'](self, 'y_translate', y); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			$method = $pyjs__bind_method2('reset_transforms', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot_deg', 0.0) : $p['setattr'](self, 'rot_deg', 0.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', 1.0) : $p['setattr'](self, 'scale', 1.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_translate', 0.0) : $p['setattr'](self, 'x_translate', 0.0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_translate', 0.0) : $p['setattr'](self, 'y_translate', 0.0); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset_transforms'] = $method;
			$method = $pyjs__bind_method2('zoom_in', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add11,$add12;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', (typeof ($add11=$p['getattr'](self, 'scale'))==typeof ($add12=0.5) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))) : $p['setattr'](self, 'scale', (typeof ($add11=$p['getattr'](self, 'scale'))==typeof ($add12=0.5) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['zoom_in'] = $method;
			$method = $pyjs__bind_method2('zoom_out', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$sub1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', (typeof ($sub1=$p['getattr'](self, 'scale'))==typeof ($sub2=0.5) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'scale', (typeof ($sub1=$p['getattr'](self, 'scale'))==typeof ($sub2=0.5) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['zoom_out'] = $method;
			$method = $pyjs__bind_method2('rot_CW', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot_deg', (typeof ($add13=$p['getattr'](self, 'rot_deg'))==typeof ($add14=$constant_int_30) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'rot_deg', (typeof ($add13=$p['getattr'](self, 'rot_deg'))==typeof ($add14=$constant_int_30) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rot_CW'] = $method;
			$method = $pyjs__bind_method2('rot_CCW', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,$sub4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot_deg', (typeof ($sub3=$p['getattr'](self, 'rot_deg'))==typeof ($sub4=$constant_int_30) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))) : $p['setattr'](self, 'rot_deg', (typeof ($sub3=$p['getattr'](self, 'rot_deg'))==typeof ($sub4=$constant_int_30) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))); 
				self['apply_transform']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rot_CCW'] = $method;
			$method = $pyjs__bind_method2('change_floorplan', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_eq']($p['getattr'](self, 'floorplan_file'), 'floorplan.svg')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('floorplan_file', 'floorplan2.svg') : $p['setattr'](self, 'floorplan_file', 'floorplan2.svg'); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('floorplan_file', 'floorplan.svg') : $p['setattr'](self, 'floorplan_file', 'floorplan.svg'); 
				}
				self['svg_area']['setAttribute']('src', $p['getattr'](self, 'floorplan_file'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['change_floorplan'] = $method;
			$method = $pyjs__bind_method2('draw_elements', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a9b452e70d7c6cf354d54ad0e736b3a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,svg_method,$bool4;
				svg_method = $constant_int_2;
				if ((($bool2=$p['op_eq'](svg_method, $constant_int_0)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['DOM']['setInnerHTML']($p['getattr'](self, 'svg_area'), '\n    <object data="floorplan.svg" type="image/svg+xml width="100%" height="100%" />\n      ');
				}
				else if ((($bool3=$p['op_eq'](svg_method, $constant_int_1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['DOM']['setInnerHTML']($p['getattr'](self, 'svg_area'), '\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" id="the_svg" >\n  <g id="svg_transform_element" transform="">\n    <circle  id="thedot" cx="50" cy="50" r="10" fill="red" />\n    <polygon id="triangle" points="2,20 22,20 12,40" fill="black" stroke="blue" stroke-width="1" />\n  </g>\n</svg>\n      ');
				}
				else if ((($bool4=$p['op_eq'](svg_method, $constant_int_2)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['svg_area']['setAttribute']('src', $p['getattr'](self, 'floorplan_file'));
				}
				$m['DOM']['setAttribute']($p['getattr'](self, 'svg_area'), 'id', 'my_div_svg_area');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw_elements'] = $method;
			var $bases = new Array($m['FocusWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('svgWindow', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end svgWindow */


/* end module: svgWindow */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame']
*/
