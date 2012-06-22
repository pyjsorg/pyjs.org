/* start module: ControlDemo */
$pyjs['loaded_modules']['ControlDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ControlDemo']['__was_initialized__']) return $pyjs['loaded_modules']['ControlDemo'];
	var $m = $pyjs['loaded_modules']['ControlDemo'];
	$m['__repr__'] = function() { return '<module: ControlDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ControlDemo';
	$m['__name__'] = __mod_name__;
	try {
		var $bool11;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_100 = new $p['int'](100);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['CaptionPanel'] = $p['___import___']('pyjamas.ui.CaptionPanel.CaptionPanel', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['VerticalDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.VerticalDemoSlider', null, null, false);
		$m['VerticalDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.VerticalDemoSlider2', null, null, false);
		$m['HorizontalDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.HorizontalDemoSlider', null, null, false);
		$m['HorizontalDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.HorizontalDemoSlider2', null, null, false);
		$m['AreaDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.AreaDemoSlider', null, null, false);
		$m['AreaDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.AreaDemoSlider2', null, null, false);
		$m['InputControl'] = $p['___import___']('pyjamas.ui.Controls.InputControl', null, null, false);
		$m['MouseInputControl'] = $p['___import___']('pyjamas.ui.MouseInputControl.MouseInputControl', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['SliderClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlDemo';
			$cls_definition['__md5__'] = '679ac7cde14fd4dd16ff1c799a2e535a';
			$method = $pyjs__bind_method2('__init__', function(p2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					p2 = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '679ac7cde14fd4dd16ff1c799a2e535a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				$m['VerticalPanel']['__init__'](self);
				self['setSpacing']($constant_int_10);
				if ((($bool1=p2) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['VerticalDemoSlider2']($constant_int_0, $constant_int_100)) : $p['setattr'](self, 'b', $m['VerticalDemoSlider2']($constant_int_0, $constant_int_100)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['VerticalDemoSlider']($constant_int_0, $constant_int_100)) : $p['setattr'](self, 'b', $m['VerticalDemoSlider']($constant_int_0, $constant_int_100)); 
				}
				self['add']($p['getattr'](self, 'b'));
				self['b']['setWidth']('20px');
				self['b']['setHeight']('100px');
				self['b']['addControlValueListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$label', $m['InputControl']($constant_int_0, $constant_int_100)) : $p['setattr'](self, '$$label', $m['InputControl']($constant_int_0, $constant_int_100)); 
				self['add']($p['getattr'](self, '$$label'));
				self['$$label']['addControlValueListener'](self);
				return null;
			}
	, 1, [null,null,['self'],['p2']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value, new_value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					old_value = arguments[2];
					new_value = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '679ac7cde14fd4dd16ff1c799a2e535a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3;
				if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, '$$label'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['b']['setControlPos'](new_value);
					self['b']['setValue'](new_value, $constant_int_0);
				}
				if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'b'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['$$label']['setControlPos'](new_value);
					self['$$label']['setValue'](new_value, $constant_int_0);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['old_value'],['new_value']]);
			$cls_definition['onControlValueChanged'] = $method;
			var $bases = new Array($m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SliderClass', $p['tuple']($bases), $data);
		})();
		$m['HSliderClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlDemo';
			$cls_definition['__md5__'] = '543e46838b6bca12f6e159265afa8c23';
			$method = $pyjs__bind_method2('__init__', function(p2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					p2 = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '543e46838b6bca12f6e159265afa8c23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4;
				$m['VerticalPanel']['__init__'](self);
				self['setSpacing']($constant_int_10);
				if ((($bool4=p2) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['HorizontalDemoSlider2']($constant_int_0, $constant_int_100)) : $p['setattr'](self, 'b', $m['HorizontalDemoSlider2']($constant_int_0, $constant_int_100)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['HorizontalDemoSlider']($constant_int_0, $constant_int_100)) : $p['setattr'](self, 'b', $m['HorizontalDemoSlider']($constant_int_0, $constant_int_100)); 
				}
				self['add']($p['getattr'](self, 'b'));
				self['b']['setHeight']('20px');
				self['b']['setWidth']('100px');
				self['b']['addControlValueListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$label', $m['InputControl']($constant_int_0, $constant_int_100)) : $p['setattr'](self, '$$label', $m['InputControl']($constant_int_0, $constant_int_100)); 
				self['add']($p['getattr'](self, '$$label'));
				self['$$label']['addControlValueListener'](self);
				return null;
			}
	, 1, [null,null,['self'],['p2']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value, new_value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					old_value = arguments[2];
					new_value = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '543e46838b6bca12f6e159265afa8c23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool5;
				if ((($bool5=$p['op_eq'](sender, $p['getattr'](self, '$$label'))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['b']['setControlPos'](new_value);
					self['b']['setValue'](new_value, $constant_int_0);
				}
				if ((($bool6=$p['op_eq'](sender, $p['getattr'](self, 'b'))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['$$label']['setControlPos'](new_value);
					self['$$label']['setValue'](new_value, $constant_int_0);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['old_value'],['new_value']]);
			$cls_definition['onControlValueChanged'] = $method;
			var $bases = new Array($m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HSliderClass', $p['tuple']($bases), $data);
		})();
		$m['ASliderClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlDemo';
			$cls_definition['__md5__'] = '509a8b3615edf0192a3e9ddf004c5118';
			$method = $pyjs__bind_method2('__init__', function(p2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					p2 = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509a8b3615edf0192a3e9ddf004c5118') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				$m['VerticalPanel']['__init__'](self);
				self['setSpacing']($constant_int_10);
				if ((($bool7=p2) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['AreaDemoSlider2']($p['list']([$constant_int_0, $constant_int_0]), $p['list']([$constant_int_100, $constant_int_100]), $p['list']([0.2, 0.2]))) : $p['setattr'](self, 'b', $m['AreaDemoSlider2']($p['list']([$constant_int_0, $constant_int_0]), $p['list']([$constant_int_100, $constant_int_100]), $p['list']([0.2, 0.2]))); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['AreaDemoSlider']($p['list']([$constant_int_0, $constant_int_0]), $p['list']([$constant_int_100, $constant_int_100]), $p['list']([0.2, 0.2]))) : $p['setattr'](self, 'b', $m['AreaDemoSlider']($p['list']([$constant_int_0, $constant_int_0]), $p['list']([$constant_int_100, $constant_int_100]), $p['list']([0.2, 0.2]))); 
				}
				self['add']($p['getattr'](self, 'b'));
				self['b']['setHeight']('100px');
				self['b']['setWidth']('100px');
				self['b']['addControlValueListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('label_x', $m['MouseInputControl']($constant_int_0, $constant_int_100, 0.2)) : $p['setattr'](self, 'label_x', $m['MouseInputControl']($constant_int_0, $constant_int_100, 0.2)); 
				self['add']($p['getattr'](self, 'label_x'));
				self['label_x']['addControlValueListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('label_y', $m['MouseInputControl']($constant_int_0, $constant_int_100, 0.2)) : $p['setattr'](self, 'label_y', $m['MouseInputControl']($constant_int_0, $constant_int_100, 0.2)); 
				self['add']($p['getattr'](self, 'label_y'));
				self['label_y']['addControlValueListener'](self);
				return null;
			}
	, 1, [null,null,['self'],['p2']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value_xy, new_value_xy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					old_value_xy = arguments[2];
					new_value_xy = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '509a8b3615edf0192a3e9ddf004c5118') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool8,$bool9,new_value_x,new_value_y;
				if ((($bool8=$p['op_eq'](sender, $p['getattr'](self, 'label_x'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					self['b']['setControlPos']($p['list']([new_value_xy, $p['getattr']($p['getattr'](self, 'b'), 'value_y')]));
					self['b']['setValue']($p['list']([new_value_xy, $p['getattr']($p['getattr'](self, 'b'), 'value_y')]), $constant_int_0);
				}
				else if ((($bool9=$p['op_eq'](sender, $p['getattr'](self, 'label_y'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['b']['setControlPos']($p['list']([$p['getattr']($p['getattr'](self, 'b'), 'value_x'), new_value_xy]));
					self['b']['setValue']($p['list']([$p['getattr']($p['getattr'](self, 'b'), 'value_x'), new_value_xy]), $constant_int_0);
				}
				else if ((($bool10=$p['op_eq'](sender, $p['getattr'](self, 'b'))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					var $tupleassign1 = $p['__ass_unpack'](new_value_xy, 2, null);
					new_value_x = $tupleassign1[0];
					new_value_y = $tupleassign1[1];
					self['label_x']['setControlPos'](new_value_x);
					self['label_x']['setValue'](new_value_x, $constant_int_0);
					self['label_y']['setControlPos'](new_value_y);
					self['label_y']['setValue'](new_value_y, $constant_int_0);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['old_value_xy'],['new_value_xy']]);
			$cls_definition['onControlValueChanged'] = $method;
			var $bases = new Array($m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ASliderClass', $p['tuple']($bases), $data);
		})();
		$m['ControlDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlDemo';
			$cls_definition['__md5__'] = '34af6137f681e3da74bf87c5eba996d0';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '34af6137f681e3da74bf87c5eba996d0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sc,p,v;
				v = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Spacing':$constant_int_10}]);
				p = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Spacing':$constant_int_10, 'VerticalAlignment':$p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM')}]);
				sc = $m['SliderClass'](false);
				p['add']($m['CaptionPanel']('clickable only', sc));
				sc = $m['SliderClass'](true);
				p['add']($m['CaptionPanel']('draggable', sc));
				sc = $m['SliderClass'](true);
				p['add']($m['CaptionPanel']('draggable', sc));
				v['add']($m['CaptionPanel']('Vertical Sliders with inputboxes', p));
				p = $m['HorizontalPanel']();
				p['setSpacing']($constant_int_10);
				p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
				sc = $m['HSliderClass'](false);
				p['add']($m['CaptionPanel']('clickable only', sc));
				sc = $m['HSliderClass'](true);
				p['add']($m['CaptionPanel']('draggable', sc));
				v['add']($m['CaptionPanel']('Horizontal Sliders with inputboxes', p));
				p = $m['HorizontalPanel']();
				p['setSpacing']($constant_int_10);
				p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
				sc = $m['ASliderClass'](false);
				p['add']($m['CaptionPanel']('clickable only', sc));
				sc = $m['ASliderClass'](true);
				p['add']($m['CaptionPanel']('draggable', sc));
				v['add']($m['CaptionPanel']('2D Controls: Inputboxes are draggable as well', p));
				$m['RootPanel']()['add'](v);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ControlDemo', $p['tuple']($bases), $data);
		})();
		if ((($bool11=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
			$m['pyjd']['setup']('./public/ControlDemo.html');
			$m['app'] = $m['ControlDemo']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ControlDemo */


/* end module: ControlDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.CaptionPanel.CaptionPanel', 'pyjamas.ui.CaptionPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Controls.VerticalDemoSlider', 'pyjamas.ui.Controls', 'pyjamas.ui.Controls.VerticalDemoSlider2', 'pyjamas.ui.Controls.HorizontalDemoSlider', 'pyjamas.ui.Controls.HorizontalDemoSlider2', 'pyjamas.ui.Controls.AreaDemoSlider', 'pyjamas.ui.Controls.AreaDemoSlider2', 'pyjamas.ui.Controls.InputControl', 'pyjamas.ui.MouseInputControl.MouseInputControl', 'pyjamas.ui.MouseInputControl', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HasAlignment']
*/
