/* start module: pyjamas.Canvas.Color */
$pyjs.loaded_modules['pyjamas.Canvas.Color'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.Color'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.Color'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.Color"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.Color>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.Color';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['Color'] = $pyjs.loaded_modules['pyjamas.Canvas.Color'];
	try {


		$m['Color'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Canvas.Color';
			$cls_definition.__md5__ = '94470218b72a20018606c993f1203541';
			$method = $pyjs__bind_method2('__init__', function(r, g, b, a) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					r = arguments[1];
					g = arguments[2];
					b = arguments[3];
					a = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '94470218b72a20018606c993f1203541') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof g == 'undefined') g=arguments.callee.__args__[4][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[5][1];
				if (typeof a == 'undefined') a=arguments.callee.__args__[6][1];
				var $bool1,$and1,$and3,$bool2,$bool3,$bool4,$and2;
				if ((($bool3=((($bool1=$and1=$p['op_is'](g, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool2=$and2=$p['op_is'](b, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_is'](a, null):$and2):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('colorStr', r) : $p['setattr'](self, 'colorStr', r); 
				}
				else if ((($bool4=$p['op_is'](a, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('colorStr', $p['sprintf']('rgb(%d,%d,%d)', $p['tuple']([r, g, b]))) : $p['setattr'](self, 'colorStr', $p['sprintf']('rgb(%d,%d,%d)', $p['tuple']([r, g, b]))); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('colorStr', $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([r, g, b, a]))) : $p['setattr'](self, 'colorStr', $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([r, g, b, a]))); 
				}
				return null;
			}
	, 1, [null,null,['self'],['r'],['g', null],['b', null],['a', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '94470218b72a20018606c993f1203541') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'colorStr');
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Color', $p['tuple']($bases), $data);
		})();
		$m['ALPHA_GREY'] = $m['Color']('rgba(0,0,0,0.3)');
		$m['ALPHA_RED'] = $m['Color']('rgba(255,0,0,0.3)');
		$m['BLACK'] = $m['Color']('#000000');
		$m['BLUE'] = $m['Color']('#318ce0');
		$m['BLUEVIOLET'] = $m['Color']('#8a2be2');
		$m['CYAN'] = $m['Color']('#5fa2e0');
		$m['GREEN'] = $m['Color']('#23ef24');
		$m['GREY'] = $m['Color']('#a9a9a9');
		$m['LIGHTGREY'] = $m['Color']('#eeeeee');
		$m['ORANGE'] = $m['Color']('#f88247');
		$m['PEACH'] = $m['Color']('#ffd393');
		$m['PINK'] = $m['Color']('#ff00ff');
		$m['RED'] = $m['Color']('#ff0000');
		$m['SKY_BLUE'] = $m['Color']('#c6defa');
		$m['WHITE'] = $m['Color']('#ffffff');
		$m['YELLOW'] = $m['Color']('yellow');
		$m['DARK_ORANGE'] = $m['Color']('#c44607');
		$m['BRIGHT_ORANGE'] = $m['Color']('#fb5c0c');
		$m['DARK_BLUE'] = $m['Color']('#0c6ac1');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.Color */


/* end module: pyjamas.Canvas.Color */


