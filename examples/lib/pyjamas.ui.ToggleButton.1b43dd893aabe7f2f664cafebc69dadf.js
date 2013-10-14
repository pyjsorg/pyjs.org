/* start module: pyjamas.ui.ToggleButton */
$pyjs['loaded_modules']['pyjamas.ui.ToggleButton'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ToggleButton']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ToggleButton'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ToggleButton'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ToggleButton>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ToggleButton';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['ToggleButton'] = $pyjs['loaded_modules']['pyjamas.ui.ToggleButton'];
	try {


		$m['CustomButton'] = $p['___import___']('pyjamas.ui.CustomButton.CustomButton', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['ToggleButton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.ToggleButton';
			$cls_definition['__md5__'] = '3c19ca542d992ef5c77891918ca04a5a';
			$cls_definition['STYLENAME_DEFAULT'] = 'gwt-ToggleButton';
			$method = $pyjs__bind_method2('__init__', function(upImageText, downImageText, handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					upImageText = arguments[1];
					downImageText = arguments[2];
					handler = arguments[3];
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c19ca542d992ef5c77891918ca04a5a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof handler != 'undefined') {
						if (handler !== null && typeof handler['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = handler;
							handler = arguments[4];
						}
					} else 					if (typeof downImageText != 'undefined') {
						if (downImageText !== null && typeof downImageText['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = downImageText;
							downImageText = arguments[4];
						}
					} else 					if (typeof upImageText != 'undefined') {
						if (upImageText !== null && typeof upImageText['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = upImageText;
							upImageText = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof upImageText == 'undefined') upImageText=arguments['callee']['__args__'][3][1];
				if (typeof downImageText == 'undefined') downImageText=arguments['callee']['__args__'][4][1];
				if (typeof handler == 'undefined') handler=arguments['callee']['__args__'][5][1];

				kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', $p['getattr'](self, 'STYLENAME_DEFAULT')));
				$pyjs_kwargs_call($m['CustomButton'], '__init__', null, kwargs, [{}, self, upImageText, downImageText, handler]);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['upImageText', null],['downImageText', null],['handler', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c19ca542d992ef5c77891918ca04a5a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['toggleDown']();
				$m['CustomButton']['onClick'](self);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['CustomButton']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ToggleButton', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.ToggleButton', 'ToggleButton', $m['ToggleButton']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ToggleButton */


/* end module: pyjamas.ui.ToggleButton */


/*
PYJS_DEPS: ['pyjamas.ui.CustomButton.CustomButton', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.CustomButton', 'pyjamas.Factory']
*/
