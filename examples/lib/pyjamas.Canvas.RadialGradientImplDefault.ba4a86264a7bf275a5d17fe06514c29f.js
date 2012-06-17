/* start module: pyjamas.Canvas.RadialGradientImplDefault */
$pyjs.loaded_modules['pyjamas.Canvas.RadialGradientImplDefault'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.RadialGradientImplDefault'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.RadialGradientImplDefault'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.RadialGradientImplDefault"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.RadialGradientImplDefault>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.RadialGradientImplDefault';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['RadialGradientImplDefault'] = $pyjs.loaded_modules['pyjamas.Canvas.RadialGradientImplDefault'];
	try {


		$m['CanvasGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas.Canvas', null, false);
		$m['RadialGradientImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.RadialGradientImplDefault';
			$cls_definition.__md5__ = '598f0884a9b75db0dbc5816a9c31ca52';
			$method = $pyjs__bind_method2('__init__', function(x0, y0, r0, x1, y1, r1, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 8, 8, arguments.length+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					c = arguments[7];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 8) $pyjs__exception_func_param(arguments.callee.__name__, 8, 8, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '598f0884a9b75db0dbc5816a9c31ca52') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['CanvasGradientImplDefault']['__init__'](self);
				self['createNativeGradientObject'](x0, y0, r0, x1, y1, r1, c);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1'],['c']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createNativeGradientObject', function(x0, y0, r0, x1, y1, r1, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 8, 8, arguments.length+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					c = arguments[7];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 8) $pyjs__exception_func_param(arguments.callee.__name__, 8, 8, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '598f0884a9b75db0dbc5816a9c31ca52') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var gradient,ctx;
				ctx = c['getContext']('2d');
				gradient = ctx['createRadialGradient'](x0, y0, r0, x1, y1, r1);
				self['setNativeGradient'](gradient);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1'],['c']]);
			$cls_definition['createNativeGradientObject'] = $method;
			var $bases = new Array($m['CanvasGradientImplDefault']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RadialGradientImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.RadialGradientImplDefault */


/* end module: pyjamas.Canvas.RadialGradientImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplDefault']
*/
