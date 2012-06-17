/* start module: MainTest */
$pyjs.loaded_modules['MainTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MainTest'].__was_initialized__) return $pyjs.loaded_modules['MainTest'];
	var $m = $pyjs.loaded_modules["MainTest"];
	$m.__repr__ = function() { return "<module: MainTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MainTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['log'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['Window']['alert'](text);
			return null;
		};
		$m['log'].__name__ = 'log';

		$m['log'].__bind_type__ = 0;
		$m['log'].__args__ = [null,null,['text']];
		$m['global_printable'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['log'](text);
			return null;
		};
		$m['global_printable'].__name__ = 'global_printable';

		$m['global_printable'].__bind_type__ = 0;
		$m['global_printable'].__args__ = [null,null,['text']];
		$m['MainTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'MainTest';
			$cls_definition.__md5__ = '7cdb0df260c2478e75539a003b857dda';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7cdb0df260c2478e75539a003b857dda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = (typeof StoringObject == "undefined"?$m.StoringObject:StoringObject)();
				s['save']($p['getattr'](self, 'printable'));
				s.__is_instance__ && typeof s.__setattr__ == 'function' ? s.__setattr__('message', 'called from storing object via self.printable') : $p['setattr'](s, 'message', 'called from storing object via self.printable'); 
				s['$$call']();
				s['save']($p['getattr'](self, 'printable'));
				s.__is_instance__ && typeof s.__setattr__ == 'function' ? s.__setattr__('message', "called from storing object using getattr(self, 'printable') ") : $p['setattr'](s, 'message', "called from storing object using getattr(self, 'printable') "); 
				s['$$call']();
				s['save']($m['global_printable']);
				s.__is_instance__ && typeof s.__setattr__ == 'function' ? s.__setattr__('message', 'called from storing object using global_printable') : $p['setattr'](s, 'message', 'called from storing object using global_printable'); 
				s['$$call']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('printable', function(text) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$m['log'](text);
				return null;
			}
	, 3, [null,null,['text']]);
			$cls_definition['printable'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MainTest', $p['tuple']($bases), $data);
		})();
		$m['StoringObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'MainTest';
			$cls_definition.__md5__ = '608a4c93f73576e4515a3eb89285ac65';
			$method = $pyjs__bind_method2('save', function(func) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					func = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '608a4c93f73576e4515a3eb89285ac65') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('func', func) : $p['setattr'](self, 'func', func); 
				return null;
			}
	, 1, [null,null,['self'],['func']]);
			$cls_definition['save'] = $method;
			$method = $pyjs__bind_method2('$$call', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '608a4c93f73576e4515a3eb89285ac65') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['func']($p['getattr'](self, 'message'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['$$call'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StoringObject', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('MainTest.html');
			$m['app'] = $m['MainTest']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MainTest */


/* end module: MainTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas']
*/
