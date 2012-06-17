/* start module: pyjamas.Canvas.VMLContext */
$pyjs.loaded_modules['pyjamas.Canvas.VMLContext'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.VMLContext'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.VMLContext'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.VMLContext"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.VMLContext>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.VMLContext';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['VMLContext'] = $pyjs.loaded_modules['pyjamas.Canvas.VMLContext'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_9 = new $p['int'](9);
		$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
		$m['GWTCanvasImplIEConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas', null, false);
		$m['VMLStyle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.VMLContext';
			$cls_definition.__md5__ = 'bb47b87a0d32c1cd68c48ca69ab40cb3';
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
					if (self.prototype.__md5__ !== 'bb47b87a0d32c1cd68c48ca69ab40cb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('type', 'Color') : $p['setattr'](self, 'type', 'Color'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('alpha', $constant_int_1) : $p['setattr'](self, 'alpha', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('color', '#000') : $p['setattr'](self, 'color', '#000'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gradient', null) : $p['setattr'](self, 'gradient', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('VMLStyle', $p['tuple']($bases), $data);
		})();
		$m['VMLContext'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.VMLContext';
			$cls_definition.__md5__ = '9cb03edee7907dd3fe40b4edee0b4c35';
			$method = $pyjs__bind_method2('__init__', function(ctx) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					ctx = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9cb03edee7907dd3fe40b4edee0b4c35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctx == 'undefined') ctx=arguments.callee.__args__[3][1];
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$bool1,$iter1_array,$1,$2,$iter1_idx;
				if ((($bool1=$p['op_is'](ctx, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1])) : $p['setattr'](self, 'matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1])); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('arcScaleX', $constant_int_1) : $p['setattr'](self, 'arcScaleX', $constant_int_1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('arcScaleY', $constant_int_1) : $p['setattr'](self, 'arcScaleY', $constant_int_1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('globalAlpha', $constant_int_1) : $p['setattr'](self, 'globalAlpha', $constant_int_1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('miterLimit', $constant_int_10) : $p['setattr'](self, 'miterLimit', $constant_int_10); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineWidth', $constant_int_1) : $p['setattr'](self, 'lineWidth', $constant_int_1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineCap', $p['getattr']($m['GWTCanvasImplIEConsts'], 'BUTT')) : $p['setattr'](self, 'lineCap', $p['getattr']($m['GWTCanvasImplIEConsts'], 'BUTT')); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineJoin', $p['getattr']($m['GWTCanvasConsts'], 'MITER')) : $p['setattr'](self, 'lineJoin', $p['getattr']($m['GWTCanvasConsts'], 'MITER')); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('strokeStyle', $m['VMLStyle']()) : $p['setattr'](self, 'strokeStyle', $m['VMLStyle']()); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillStyle', $m['VMLStyle']()) : $p['setattr'](self, 'fillStyle', $m['VMLStyle']()); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('globalCompositeOperation', $p['getattr']($m['GWTCanvasImplIEConsts'], 'SOURCE_OVER')) : $p['setattr'](self, 'globalCompositeOperation', $p['getattr']($m['GWTCanvasImplIEConsts'], 'SOURCE_OVER')); 
					return null;
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('matrix', $p['list']([])) : $p['setattr'](self, 'matrix', $p['list']([])); 
				$iter1_iter = $p['range']($constant_int_9);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['matrix']['append']((typeof ($1=$p['getattr'](ctx, 'matrix')).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i)));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('arcScaleX', $p['getattr'](ctx, 'arcScaleX')) : $p['setattr'](self, 'arcScaleX', $p['getattr'](ctx, 'arcScaleX')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('arcScaleY', $p['getattr'](ctx, 'arcScaleY')) : $p['setattr'](self, 'arcScaleY', $p['getattr'](ctx, 'arcScaleY')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('globalAlpha', $p['getattr'](ctx, 'globalAlpha')) : $p['setattr'](self, 'globalAlpha', $p['getattr'](ctx, 'globalAlpha')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('miterLimit', $p['getattr'](ctx, 'miterLimit')) : $p['setattr'](self, 'miterLimit', $p['getattr'](ctx, 'miterLimit')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineWidth', $p['getattr'](ctx, 'lineWidth')) : $p['setattr'](self, 'lineWidth', $p['getattr'](ctx, 'lineWidth')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineCap', $p['getattr'](ctx, 'lineCap')) : $p['setattr'](self, 'lineCap', $p['getattr'](ctx, 'lineCap')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineJoin', $p['getattr'](ctx, 'lineJoin')) : $p['setattr'](self, 'lineJoin', $p['getattr'](ctx, 'lineJoin')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('strokeStyle', $p['getattr'](ctx, 'strokeStyle')) : $p['setattr'](self, 'strokeStyle', $p['getattr'](ctx, 'strokeStyle')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillStyle', $p['getattr'](ctx, 'fillStyle')) : $p['setattr'](self, 'fillStyle', $p['getattr'](ctx, 'fillStyle')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('globalCompositeOperation', $p['getattr'](ctx, 'globalCompositeOperation')) : $p['setattr'](self, 'globalCompositeOperation', $p['getattr'](ctx, 'globalCompositeOperation')); 
				return null;
			}
	, 1, [null,null,['self'],['ctx', null]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('VMLContext', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.VMLContext */


/* end module: pyjamas.Canvas.VMLContext */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasConsts', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts']
*/
