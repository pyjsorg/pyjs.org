/* start module: pyjamas.Canvas.ColorStop */
$pyjs.loaded_modules['pyjamas.Canvas.ColorStop'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.ColorStop'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.ColorStop'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.ColorStop"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.ColorStop>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ColorStop';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['ColorStop'] = $pyjs.loaded_modules['pyjamas.Canvas.ColorStop'];
	try {


		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$m['ColorStop'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.ColorStop';
			$cls_definition.__md5__ = '8301ec200ec6ea23d424874ded0e5889';
			$method = $pyjs__bind_method2('__init__', function(myOffset, myColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					myOffset = arguments[1];
					myColor = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8301ec200ec6ea23d424874ded0e5889') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('offset', myOffset) : $p['setattr'](self, 'offset', myOffset); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('color', myColor) : $p['setattr'](self, 'color', myColor); 
				return null;
			}
	, 1, [null,null,['self'],['myOffset'],['myColor']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('cloneColorStop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8301ec200ec6ea23d424874ded0e5889') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['ColorStop']($p['getattr'](self, 'offset'), $m['Color']($p['str'](self['color']())));
			}
	, 1, [null,null,['self']]);
			$cls_definition['cloneColorStop'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ColorStop', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.ColorStop */


/* end module: pyjamas.Canvas.ColorStop */


/*
PYJS_DEPS: ['pyjamas.Canvas.Color.Color', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.Color']
*/
