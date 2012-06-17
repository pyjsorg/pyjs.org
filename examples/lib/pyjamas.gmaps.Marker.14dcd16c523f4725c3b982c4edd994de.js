/* start module: pyjamas.gmaps.Marker */
$pyjs.loaded_modules['pyjamas.gmaps.Marker'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.gmaps.Marker'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.gmaps.Marker'];
	if(typeof $pyjs.loaded_modules['pyjamas.gmaps'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.gmaps'].__was_initialized__) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs.loaded_modules["pyjamas.gmaps.Marker"];
	$m.__repr__ = function() { return "<module: pyjamas.gmaps.Marker>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.Marker';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.gmaps']['Marker'] = $pyjs.loaded_modules['pyjamas.gmaps.Marker'];
	try {


		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['createListenerMethods'] = $p['___import___']('pyjamas.gmaps.Utils.createListenerMethods', 'pyjamas.gmaps', null, false);
		$m['Marker'] = function(options) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var marker;
			marker = new $wnd.google.maps.Marker(options);
			$m['createListenerMethods'](marker);
			return marker;
		};
		$m['Marker'].__name__ = 'Marker';

		$m['Marker'].__bind_type__ = 0;
		$m['Marker'].__args__ = [null,null,['options']];
		$m['MarkerOptions'] = function() {
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
		$m['MarkerOptions'].__name__ = 'MarkerOptions';

		$m['MarkerOptions'].__bind_type__ = 0;
		$m['MarkerOptions'].__args__ = [null,['params']];
		$m['MarkerImage'] = function(url, size, origin, anchor) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var markerImage;
			markerImage = 
       new $wnd.google.maps.MarkerImage(url, size, origin, anchor)
    ;
			$m['createListenerMethods']((typeof marker == "undefined"?$m.marker:marker));
			return markerImage;
		};
		$m['MarkerImage'].__name__ = 'MarkerImage';

		$m['MarkerImage'].__bind_type__ = 0;
		$m['MarkerImage'].__args__ = [null,null,['url'],['size'],['origin'],['anchor']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.Marker */


/* end module: pyjamas.gmaps.Marker */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.dictToJs', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.Utils.createListenerMethods']
*/
