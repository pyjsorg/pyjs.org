/* start module: pyjamas.ui.Controls */
$pyjs['loaded_modules']['pyjamas.ui.Controls'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Controls']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Controls'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Controls'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Controls>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Controls';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Controls'] = $pyjs['loaded_modules']['pyjamas.ui.Controls'];
	try {


		$m['Control'] = $p['___import___']('pyjamas.ui.Control.Control', 'pyjamas.ui', null, false);
		$m['DControl'] = $p['___import___']('pyjamas.ui.DoubleControl.DoubleControl', 'pyjamas.ui', null, false);
		$m['VerticalDemoSlider'] = $p['___import___']('pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui', null, false);
		$m['InputControl'] = $p['___import___']('pyjamas.ui.InputControl.InputControl', 'pyjamas.ui', null, false);
		$m['HorizontalDemoSlider'] = $p['___import___']('pyjamas.ui.HorizontalSlider.HorizontalSlider', 'pyjamas.ui', null, false);
		$m['AreaDemoSlider'] = $p['___import___']('pyjamas.ui.AreaSlider.AreaSlider', 'pyjamas.ui', null, false);
		$m['VerticalDemoSlider2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Controls';
			$cls_definition['__md5__'] = '357f758c048a044e457f28e869f60872';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '357f758c048a044e457f28e869f60872') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof start_value != 'undefined') {
						if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = start_value;
							start_value = arguments[4];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = max_value;
							max_value = arguments[4];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = min_value;
							min_value = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];

				$pyjs_kwargs_call($m['VerticalDemoSlider'], '__init__', null, kwargs, [{}, self, min_value, max_value, start_value]);
				self['setDragable'](true);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['VerticalDemoSlider']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('VerticalDemoSlider2', $p['tuple']($bases), $data);
		})();
		$m['HorizontalDemoSlider2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Controls';
			$cls_definition['__md5__'] = '02fd3d68053f191353a7ffb5c2631c31';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fd3d68053f191353a7ffb5c2631c31') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof start_value != 'undefined') {
						if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = start_value;
							start_value = arguments[4];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = max_value;
							max_value = arguments[4];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = min_value;
							min_value = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];

				$pyjs_kwargs_call($m['HorizontalDemoSlider'], '__init__', null, kwargs, [{}, self, min_value, max_value, start_value]);
				self['setDragable'](true);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['HorizontalDemoSlider']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HorizontalDemoSlider2', $p['tuple']($bases), $data);
		})();
		$m['AreaDemoSlider2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Controls';
			$cls_definition['__md5__'] = 'eb8e89c775bed5c4474520503af9a11a';
			$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					min_value = arguments[1];
					max_value = arguments[2];
					start_value = arguments[3];
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eb8e89c775bed5c4474520503af9a11a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof start_value != 'undefined') {
						if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = start_value;
							start_value = arguments[4];
						}
					} else 					if (typeof max_value != 'undefined') {
						if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = max_value;
							max_value = arguments[4];
						}
					} else 					if (typeof min_value != 'undefined') {
						if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = min_value;
							min_value = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];

				$pyjs_kwargs_call($m['AreaDemoSlider'], '__init__', null, kwargs, [{}, self, min_value, max_value, start_value]);
				self['setDragable'](true);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['AreaDemoSlider']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AreaDemoSlider2', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Controls */


/* end module: pyjamas.ui.Controls */


/*
PYJS_DEPS: ['pyjamas.ui.Control.Control', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Control', 'pyjamas.ui.DoubleControl.DoubleControl', 'pyjamas.ui.DoubleControl', 'pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui.VerticalSlider', 'pyjamas.ui.InputControl.InputControl', 'pyjamas.ui.InputControl', 'pyjamas.ui.HorizontalSlider.HorizontalSlider', 'pyjamas.ui.HorizontalSlider', 'pyjamas.ui.AreaSlider.AreaSlider', 'pyjamas.ui.AreaSlider']
*/
