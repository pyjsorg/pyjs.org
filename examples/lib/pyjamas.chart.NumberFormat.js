/* start module: pyjamas.chart.NumberFormat */
$pyjs.loaded_modules['pyjamas.chart.NumberFormat'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.NumberFormat'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.NumberFormat'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.NumberFormat"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.NumberFormat>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.NumberFormat';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['NumberFormat'] = $pyjs.loaded_modules['pyjamas.chart.NumberFormat'];
	try {


		$m['NF'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.NumberFormat';
			$cls_definition.__md5__ = '8ed86e92bab9fd96fafd6d4937ab048c';
			$method = $pyjs__bind_method2('__init__', function(fmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fmt = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8ed86e92bab9fd96fafd6d4937ab048c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fmt', fmt) : $p['setattr'](self, 'fmt', fmt); 
				return null;
			}
	, 1, [null,null,['self'],['fmt']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('format', function(num) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					num = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8ed86e92bab9fd96fafd6d4937ab048c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['str'](new $p['int'](num));
			}
	, 1, [null,null,['self'],['num']]);
			$cls_definition['format'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NF', $p['tuple']($bases), $data);
		})();
		$m['getFormat'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['NF'](fmt);
		};
		$m['getFormat'].__name__ = 'getFormat';

		$m['getFormat'].__bind_type__ = 0;
		$m['getFormat'].__args__ = [null,null,['fmt']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.NumberFormat */


/* end module: pyjamas.chart.NumberFormat */


