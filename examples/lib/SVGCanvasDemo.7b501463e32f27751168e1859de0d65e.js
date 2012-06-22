/* start module: SVGCanvasDemo */
$pyjs['loaded_modules']['SVGCanvasDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['SVGCanvasDemo']['__was_initialized__']) return $pyjs['loaded_modules']['SVGCanvasDemo'];
	var $m = $pyjs['loaded_modules']['SVGCanvasDemo'];
	$m['__repr__'] = function() { return '<module: SVGCanvasDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SVGCanvasDemo';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_400 = new $p['int'](400);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['SVGCanvas'] = $p['___import___']('pyjamas.Canvas.SVGCanvas.SVGCanvas', null, null, false);
		$m['GWTCanvasDemo'] = $p['___import___']('GWTCanvasDemo.GWTCanvasDemo', null, null, false);
		$m['SVGCanvasDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SVGCanvasDemo';
			$cls_definition['__md5__'] = '2d4124d0f0acf0aab348afe3d8d6df4e';
			$method = $pyjs__bind_method2('_get_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2d4124d0f0acf0aab348afe3d8d6df4e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['SVGCanvas']($constant_int_400, $constant_int_400);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_canvas'] = $method;
			var $bases = new Array($m['GWTCanvasDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SVGCanvasDemo', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1['__nonzero__']=='function'?
						$bool1['__nonzero__']() :
						(typeof $bool1['__len__']=='function'?
							($bool1['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('./public/SVGCanvasDemo.html');
			$m['app'] = $m['SVGCanvasDemo']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SVGCanvasDemo */


/* end module: SVGCanvasDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Canvas.SVGCanvas.SVGCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.SVGCanvas', 'GWTCanvasDemo.GWTCanvasDemo', 'GWTCanvasDemo']
*/
