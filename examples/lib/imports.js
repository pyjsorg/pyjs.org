/* start module: imports */
$pyjs.loaded_modules['imports'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports'].__was_initialized__) return $pyjs.loaded_modules['imports'];
	var $m = $pyjs.loaded_modules["imports"];
	$m.__repr__ = function() { return "<module: imports>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_1 = new $p['int'](1);
		$m['exec_order'] = $p['list']([]);
		$m['Imports'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports';
			$cls_definition.__md5__ = 'a103ff10086299651c678af676a549fe';
			$cls_definition['exec_order'] = $m['exec_order'];
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a103ff10086299651c678af676a549fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Imports', $p['tuple']($bases), $data);
		})();
		$m['imports'] = $m['Imports']();
		$m['overrideme'] = 'not overridden';
		$m['loccls'] = $p['___import___']('imports.cls', null, null, false);
		$m['upcls'] = $m['loccls'];
		$m['conditional_func'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return 'not overridden';
		};
		$m['conditional_func'].__name__ = 'conditional_func';

		$m['conditional_func'].__bind_type__ = 0;
		$m['conditional_func'].__args__ = [null,null];
		if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['conditional_func'] = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

				return 'overridden';
			};
			$m['conditional_func'].__name__ = 'conditional_func';

			$m['conditional_func'].__bind_type__ = 0;
			$m['conditional_func'].__args__ = [null,null];
		}
		$m['all_masked'] = false;
		$m['all_override'] = false;
		$p['__import_all__']('allwith__all__', 'imports', $m, null, false);
		$p['__import_all__']('allsimple', 'imports', $m, null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports */


/* end module: imports */


/*
PYJS_DEPS: ['imports.cls', 'imports', 'allwith__all__', 'allsimple']
*/
