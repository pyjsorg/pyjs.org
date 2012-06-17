/* start module: pyjamas.gmaps.Map */
$pyjs.loaded_modules['pyjamas.gmaps.Map'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.gmaps.Map'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.gmaps.Map'];
	if(typeof $pyjs.loaded_modules['pyjamas.gmaps'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.gmaps'].__was_initialized__) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs.loaded_modules["pyjamas.gmaps.Map"];
	$m.__repr__ = function() { return "<module: pyjamas.gmaps.Map>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.Map';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.gmaps']['Map'] = $pyjs.loaded_modules['pyjamas.gmaps.Map'];
	try {


		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['createListenerMethods'] = $p['___import___']('pyjamas.gmaps.Utils.createListenerMethods', 'pyjamas.gmaps', null, false);
		$m['MapTypeId'] = $wnd.google.maps.MapTypeId;
		$m['MapTypeControlStyle'] = $wnd.google.maps.MapTypeControlStyle;
		$m['NavigationControlStyle'] = $wnd.google.maps.NavigationControlStyle;
		$m['ScaleControlStyle'] = $wnd.google.maps.ScaleControlStyle;
		$m['MapOptions'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var params = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof params != 'object' || params.__name__ != 'dict' || typeof params.$pyjs_is_kwarg == 'undefined') {
				params = arguments[arguments.length+1];
			} else {
				delete params['$pyjs_is_kwarg'];
			}
			if (typeof params == 'undefined') {
				params = $p['__empty_dict']();
{
				}
			}

			return $m['dictToJs'](params);
		};
		$m['MapOptions'].__name__ = 'MapOptions';

		$m['MapOptions'].__bind_type__ = 0;
		$m['MapOptions'].__args__ = [null,['params']];
		$m['MapTypeControlOptions'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var params = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof params != 'object' || params.__name__ != 'dict' || typeof params.$pyjs_is_kwarg == 'undefined') {
				params = arguments[arguments.length+1];
			} else {
				delete params['$pyjs_is_kwarg'];
			}
			if (typeof params == 'undefined') {
				params = $p['__empty_dict']();
{
				}
			}

			return $m['dictToJs'](params);
		};
		$m['MapTypeControlOptions'].__name__ = 'MapTypeControlOptions';

		$m['MapTypeControlOptions'].__bind_type__ = 0;
		$m['MapTypeControlOptions'].__args__ = [null,['params']];
		$m['NavigationControlOptions'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var params = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof params != 'object' || params.__name__ != 'dict' || typeof params.$pyjs_is_kwarg == 'undefined') {
				params = arguments[arguments.length+1];
			} else {
				delete params['$pyjs_is_kwarg'];
			}
			if (typeof params == 'undefined') {
				params = $p['__empty_dict']();
{
				}
			}

			return $m['dictToJs'](params);
		};
		$m['NavigationControlOptions'].__name__ = 'NavigationControlOptions';

		$m['NavigationControlOptions'].__bind_type__ = 0;
		$m['NavigationControlOptions'].__args__ = [null,['params']];
		$m['ScaleControlOptions'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var params = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof params != 'object' || params.__name__ != 'dict' || typeof params.$pyjs_is_kwarg == 'undefined') {
				params = arguments[arguments.length+1];
			} else {
				delete params['$pyjs_is_kwarg'];
			}
			if (typeof params == 'undefined') {
				params = $p['__empty_dict']();
{
				}
			}

			return $m['dictToJs'](params);
		};
		$m['ScaleControlOptions'].__name__ = 'ScaleControlOptions';

		$m['ScaleControlOptions'].__bind_type__ = 0;
		$m['ScaleControlOptions'].__args__ = [null,['params']];
		$m['Map'] = function(el, options) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool1,map;
			if ((($bool1=options) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				map = new $wnd.google.maps.Map(el, options);
			}
			else {
				map = new $wnd.google.maps.Map(el);
			}
			$m['createListenerMethods'](map);
			return map;
		};
		$m['Map'].__name__ = 'Map';

		$m['Map'].__bind_type__ = 0;
		$m['Map'].__args__ = [null,null,['el'],['options']];
		$m['MapPanes'] = function(el) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

return new $wnd.google.maps.MapPanes(el)
		};
		$m['MapPanes'].__name__ = 'MapPanes';

		$m['MapPanes'].__bind_type__ = 0;
		$m['MapPanes'].__args__ = [null,null,['el']];
		$m['MapCanvasProjection'] = function(el) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

return new $wnd.google.maps.MapCanvasProjection(el)
		};
		$m['MapCanvasProjection'].__name__ = 'MapCanvasProjection';

		$m['MapCanvasProjection'].__bind_type__ = 0;
		$m['MapCanvasProjection'].__args__ = [null,null,['el']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.Map */


/* end module: pyjamas.gmaps.Map */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.dictToJs', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.Utils.createListenerMethods']
*/
