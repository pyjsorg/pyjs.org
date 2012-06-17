/* start module: I18N.domain.subdomain.en_US */
$pyjs.loaded_modules['I18N.domain.subdomain.en_US'] = function (__mod_name__) {
	if($pyjs.loaded_modules['I18N.domain.subdomain.en_US'].__was_initialized__) return $pyjs.loaded_modules['I18N.domain.subdomain.en_US'];
	if(typeof $pyjs.loaded_modules['I18N.domain.subdomain'] == 'undefined' || !$pyjs.loaded_modules['I18N.domain.subdomain'].__was_initialized__) $p['___import___']('I18N.domain.subdomain', null);
	var $m = $pyjs.loaded_modules["I18N.domain.subdomain.en_US"];
	$m.__repr__ = function() { return "<module: I18N.domain.subdomain.en_US>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I18N.domain.subdomain.en_US';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['I18N.domain.subdomain']['en_US'] = $pyjs.loaded_modules['I18N.domain.subdomain.en_US'];
	try {


		$m['I18N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'I18N.domain.subdomain.en_US';
			$cls_definition.__md5__ = '5d483b0c3f4d2d1b21e3c5680c6954f5';
			$method = $pyjs__bind_method2('example', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5d483b0c3f4d2d1b21e3c5680c6954f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'This is a subdomain en_US example';
			}
	, 1, [null,null,['self']]);
			$cls_definition['example'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('I18N', $p['tuple']($bases), $data);
		})();
		$m['parent_parent'] = $p['___import___']('I18N.en_US', 'I18N.domain.subdomain', null, false);
		$m['parent'] = $p['___import___']('I18N.domain.en_US', 'I18N.domain.subdomain', null, false);
		$m['dom'] = $p['___import___']('I18N.domain.subdomain', 'I18N.domain.subdomain', null, false);
		$m['dom'].__is_instance__ && typeof $m['dom'].__setattr__ == 'function' ? $m['dom'].__setattr__('i18n', $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['dom'], 'I18N'), $p['getattr']($m['parent'], 'I18N'), $p['getattr']($m['parent_parent'], 'I18N')]), $p['dict']([]))()) : $p['setattr']($m['dom'], 'i18n', $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['dom'], 'I18N'), $p['getattr']($m['parent'], 'I18N'), $p['getattr']($m['parent_parent'], 'I18N')]), $p['dict']([]))()); 
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end I18N.domain.subdomain.en_US */


/* end module: I18N.domain.subdomain.en_US */


/*
PYJS_DEPS: ['I18N.en_US', 'I18N', 'I18N.domain.en_US', 'I18N.domain', 'I18N.domain.subdomain']
*/
