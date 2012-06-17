/* start module: SimpleCanvasDemo */
$pyjs.loaded_modules['SimpleCanvasDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SimpleCanvasDemo'].__was_initialized__) return $pyjs.loaded_modules['SimpleCanvasDemo'];
	var $m = $pyjs.loaded_modules["SimpleCanvasDemo"];
	$m.__repr__ = function() { return "<module: SimpleCanvasDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SimpleCanvasDemo';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_400 = new $p['int'](400);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['SimpleCanvasDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SimpleCanvasDemo';
			$cls_definition.__md5__ = '6fb62d1188ba4c1a74ecd150afda29be';
			$method = $pyjs__bind_method2('__init__', function(theCanvas) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					theCanvas = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6fb62d1188ba4c1a74ecd150afda29be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', $constant_int_400) : $p['setattr'](self, 'height', $constant_int_400); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', $constant_int_400) : $p['setattr'](self, 'width', $constant_int_400); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('canvas', theCanvas) : $p['setattr'](self, 'canvas', theCanvas); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('controls', null) : $p['setattr'](self, 'controls', null); 
				return null;
			}
	, 1, [null,null,['self'],['theCanvas']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getControls', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6fb62d1188ba4c1a74ecd150afda29be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_is']($p['getattr'](self, 'controls'), null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['createControls']();
				}
				return $p['getattr'](self, 'controls');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getControls'] = $method;
			$method = $pyjs__bind_method2('getName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6fb62d1188ba4c1a74ecd150afda29be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'demoName');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SimpleCanvasDemo', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SimpleCanvasDemo */


/* end module: SimpleCanvasDemo */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite']
*/
