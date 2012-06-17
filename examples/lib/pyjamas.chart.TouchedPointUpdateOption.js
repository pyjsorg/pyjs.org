/* start module: pyjamas.chart.TouchedPointUpdateOption */
$pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.TouchedPointUpdateOption"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.TouchedPointUpdateOption>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.TouchedPointUpdateOption';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['TouchedPointUpdateOption'] = $pyjs.loaded_modules['pyjamas.chart.TouchedPointUpdateOption'];
	try {


		$m['TouchedPointUpdateOption'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.TouchedPointUpdateOption';
			$cls_definition.__md5__ = 'ba6aa1100e0a43d57516dc36062ff211';
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
					if (self.prototype.__md5__ !== 'ba6aa1100e0a43d57516dc36062ff211') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TouchedPointUpdateOption', $p['tuple']($bases), $data);
		})();
		$m['TOUCHED_POINT_CLEARED'] = $m['TouchedPointUpdateOption']();
		$m['TOUCHED_POINT_LOCKED'] = $m['TouchedPointUpdateOption']();
		$m['TOUCHED_POINT_UPDATED'] = $m['TouchedPointUpdateOption']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.TouchedPointUpdateOption */


/* end module: pyjamas.chart.TouchedPointUpdateOption */


