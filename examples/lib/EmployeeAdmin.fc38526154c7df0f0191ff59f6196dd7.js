/* start module: EmployeeAdmin */
$pyjs['loaded_modules']['EmployeeAdmin'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['EmployeeAdmin']['__was_initialized__']) return $pyjs['loaded_modules']['EmployeeAdmin'];
	var $m = $pyjs['loaded_modules']['EmployeeAdmin'];
	$m['__repr__'] = function() { return '<module: EmployeeAdmin>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EmployeeAdmin';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1,$pyjs_try_err;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		try {
			$m['puremvc'] = $p['___import___']('puremvc.patterns.facade', null);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$m['alert'] = $p['___import___']('pyjamas.Window.alert', null, null, false);
				$m['alert']("This application depends on puremvc for python,\nwhich doesn't seem to be available.\nSee README.\n");
			}
		}
		$m['Facade'] = $p['___import___']('puremvc.patterns.facade.Facade', null, null, false);
		$m['Command'] = $p['___import___']('libemployeeadmin.ApplicationConstants.Command', null, null, false);
		$m['controller'] = $p['___import___']('libemployeeadmin.controller', null, null, false);
		$m['components'] = $p['___import___']('libemployeeadmin.components', null, null, false);
		$m['AppFacade'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'EmployeeAdmin';
			$cls_definition['__md5__'] = '5fd5efb4ecd85c4c207fba1d8aab009b';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fd5efb4ecd85c4c207fba1d8aab009b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['initializeFacade']();
				self['initializeController']();
				self['registerCommand']($p['getattr']($m['Command'], 'STARTUP'), $p['getattr']($m['controller'], 'StartupCommand'));
				self['registerCommand']($p['getattr']($m['Command'], 'DELETE_USER'), $p['getattr']($m['controller'], 'DeleteUserCommand'));
				self['registerCommand']($p['getattr']($m['Command'], 'ADD_ROLE_RESULT'), $p['getattr']($m['controller'], 'AddRoleResultCommand'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getInstance', function() {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

				return $m['AppFacade']();
			}
	, 3, [null,null]);
			$cls_definition['getInstance'] = $method;
			var $bases = new Array($m['Facade']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AppFacade', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['pyjd']['setup']('./public/EmployeeAdmin.html');
			$m['app'] = $m['AppFacade']['getInstance']();
			$m['pyjsApp'] = $m['components']['PyJsApp']();
			$m['app']['sendNotification']($p['getattr']($m['Command'], 'STARTUP'), $p['getattr']($m['pyjsApp'], 'appFrame'));
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end EmployeeAdmin */


/* end module: EmployeeAdmin */


/*
PYJS_DEPS: ['pyjd', 'puremvc.patterns.facade', 'puremvc', 'puremvc.patterns', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window', 'puremvc.patterns.facade.Facade', 'libemployeeadmin.ApplicationConstants.Command', 'libemployeeadmin', 'libemployeeadmin.ApplicationConstants', 'libemployeeadmin.controller', 'libemployeeadmin.components']
*/
