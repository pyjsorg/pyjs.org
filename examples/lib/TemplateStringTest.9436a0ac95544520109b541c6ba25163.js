/* start module: TemplateStringTest */
$pyjs['loaded_modules']['TemplateStringTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['TemplateStringTest']['__was_initialized__']) return $pyjs['loaded_modules']['TemplateStringTest'];
	var $m = $pyjs['loaded_modules']['TemplateStringTest'];
	$m['__repr__'] = function() { return '<module: TemplateStringTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TemplateStringTest';
	$m['__name__'] = __mod_name__;
	try {


		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['Template'] = $p['___import___']('string.Template', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['TemplateStringTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'TemplateStringTest';
			$cls_definition['__md5__'] = '558b325ce70ee64bf8969f2baa74b95b';
			$method = $pyjs__bind_method2('test_substitute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the $first method of the $second class'), 'substitute', null, null, [{'first':'substitute', 'second':'Template'}]), 'This is a test of the substitute method of the Template class');
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the ${first} method of the ${second} class'), 'substitute', null, null, [{'first':'substitute', 'second':'Template'}]), 'This is a test of the substitute method of the Template class');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('__metaclass__ problem, issue #658');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_substitute'] = $method;
			$method = $pyjs__bind_method2('test_safe_substitute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the $first method of the $second class'), 'safe_substitute', null, null, [{'first':'safe_substitute'}]), 'This is a test of the safe_substitute method of the $second class');
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the ${first} method of the ${second} class'), 'safe_substitute', null, null, [{'first':'safe_substitute'}]), 'This is a test of the safe_substitute method of the ${second} class');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('__metaclass__ problem, issue #658');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_safe_substitute'] = $method;
			$method = $pyjs__bind_method2('test__invalid1', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwargs;
				kwargs = $p['dict']([['first', 'substitute'], ['second', 'Template']]);
				$pyjs_kwargs_call(self, 'assertRaises', null, kwargs, [{}, $p['ValueError'], $p['getattr']($m['Template']('This is a test of the $0irst method of the $second class'), 'substitute')]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__invalid1'] = $method;
			$method = $pyjs__bind_method2('test__invalid2', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwargs;
				kwargs = $p['dict']([['first', 'substitute'], ['second', 'Template']]);
				$pyjs_kwargs_call(self, 'assertRaises', null, kwargs, [{}, $p['KeyError'], $p['getattr']($m['Template']('This is a test of the $first method of the $se~cond class'), 'substitute')]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__invalid2'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TemplateStringTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TemplateStringTest */


/* end module: TemplateStringTest */


/*
PYJS_DEPS: ['UnitTest', 'string.Template', 'string', 'sys']
*/
