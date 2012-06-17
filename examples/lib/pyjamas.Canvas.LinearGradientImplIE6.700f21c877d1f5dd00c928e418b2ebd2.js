/* start module: pyjamas.Canvas.LinearGradientImplIE6 */
$pyjs.loaded_modules['pyjamas.Canvas.LinearGradientImplIE6'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.LinearGradientImplIE6'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.LinearGradientImplIE6'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.LinearGradientImplIE6>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.LinearGradientImplIE6';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['LinearGradientImplIE6'] = $pyjs.loaded_modules['pyjamas.Canvas.LinearGradientImplIE6'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
		$m['LinearGradientImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.LinearGradientImplIE6';
			$cls_definition.__md5__ = '98090446419bfe859f32ca8a2d574f8c';
			$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '98090446419bfe859f32ca8a2d574f8c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['CanvasGradientImplIE6']['__init__'](self, x0, y0, x1, y1);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('type', 'gradient') : $p['setattr'](self, 'type', 'gradient'); 
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('cloneGradient', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '98090446419bfe859f32ca8a2d574f8c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,cStops,newGrad,$iter1_iter,$iter1_array,$len1,$1,$2,$iter1_idx;
				newGrad = $m['LinearGradientImplIE6']($p['getattr'](self, 'startX'), $p['getattr'](self, 'startY'), $p['getattr'](self, 'endX'), $p['getattr'](self, 'endY'));
				newGrad.__is_instance__ && typeof newGrad.__setattr__ == 'function' ? newGrad.__setattr__('startX', $p['getattr'](self, 'startX')) : $p['setattr'](newGrad, 'startX', $p['getattr'](self, 'startX')); 
				newGrad.__is_instance__ && typeof newGrad.__setattr__ == 'function' ? newGrad.__setattr__('startY', $p['getattr'](self, 'startY')) : $p['setattr'](newGrad, 'startY', $p['getattr'](self, 'startY')); 
				newGrad.__is_instance__ && typeof newGrad.__setattr__ == 'function' ? newGrad.__setattr__('endX', $p['getattr'](self, 'endX')) : $p['setattr'](newGrad, 'endX', $p['getattr'](self, 'endX')); 
				newGrad.__is_instance__ && typeof newGrad.__setattr__ == 'function' ? newGrad.__setattr__('endY', $p['getattr'](self, 'endY')) : $p['setattr'](newGrad, 'endY', $p['getattr'](self, 'endY')); 
				cStops = $p['getattr'](self, 'colorStops');
				$iter1_iter = $p['range']((($len1=cStops) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					newGrad['colorStops']['append']((typeof ($1=cStops).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i))['cloneColorStop']());
				}
				return newGrad;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cloneGradient'] = $method;
			var $bases = new Array($m['CanvasGradientImplIE6']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LinearGradientImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.LinearGradientImplIE6 */


/* end module: pyjamas.Canvas.LinearGradientImplIE6 */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
