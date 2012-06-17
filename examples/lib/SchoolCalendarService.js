/* start module: SchoolCalendarService */
$pyjs.loaded_modules['SchoolCalendarService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SchoolCalendarService'].__was_initialized__) return $pyjs.loaded_modules['SchoolCalendarService'];
	var $m = $pyjs.loaded_modules["SchoolCalendarService"];
	$m.__repr__ = function() { return "<module: SchoolCalendarService>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SchoolCalendarService';
	$m.__name__ = __mod_name__;
	try {


		$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
		$m['SchoolCalendarService'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SchoolCalendarService';
			$cls_definition.__md5__ = 'ab92a054bebad580da3d99c0e3d37854';
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
					if (self.prototype.__md5__ !== 'ab92a054bebad580da3d99c0e3d37854') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['JSONProxy']['__init__'](self, 'SchoolCalendarService.php', $p['list'](['getPeople']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['JSONProxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SchoolCalendarService', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SchoolCalendarService */


/* end module: SchoolCalendarService */


/*
PYJS_DEPS: ['pyjamas.JSONService.JSONProxy', 'pyjamas', 'pyjamas.JSONService']
*/
