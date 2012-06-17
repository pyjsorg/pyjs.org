/* start module: pyjamas.gmaps.InfoWindow */
$pyjs.loaded_modules['pyjamas.gmaps.InfoWindow'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.gmaps.InfoWindow'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.gmaps.InfoWindow'];
	if(typeof $pyjs.loaded_modules['pyjamas.gmaps'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.gmaps'].__was_initialized__) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs.loaded_modules["pyjamas.gmaps.InfoWindow"];
	$m.__repr__ = function() { return "<module: pyjamas.gmaps.InfoWindow>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.InfoWindow';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.gmaps']['InfoWindow'] = $pyjs.loaded_modules['pyjamas.gmaps.InfoWindow'];
	try {


		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['createListenerMethods'] = $p['___import___']('pyjamas.gmaps.Utils.createListenerMethods', 'pyjamas.gmaps', null, false);
		$m['InfoWindow'] = function(content) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var infoWindow;
			infoWindow = new $wnd.google.maps.InfoWindow(content);
			$m['createListenerMethods'](infoWindow);
			return infoWindow;
		};
		$m['InfoWindow'].__name__ = 'InfoWindow';

		$m['InfoWindow'].__bind_type__ = 0;
		$m['InfoWindow'].__args__ = [null,null,['content']];
		$m['InfoWindowOptions'] = function() {
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
		$m['InfoWindowOptions'].__name__ = 'InfoWindowOptions';

		$m['InfoWindowOptions'].__bind_type__ = 0;
		$m['InfoWindowOptions'].__args__ = [null,['params']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.InfoWindow */


/* end module: pyjamas.gmaps.InfoWindow */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.dictToJs', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.Utils.createListenerMethods']
*/
