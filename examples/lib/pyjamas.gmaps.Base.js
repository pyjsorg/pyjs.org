/* start module: pyjamas.gmaps.Base */
$pyjs.loaded_modules['pyjamas.gmaps.Base'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.gmaps.Base'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.gmaps.Base'];
	if(typeof $pyjs.loaded_modules['pyjamas.gmaps'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.gmaps'].__was_initialized__) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs.loaded_modules["pyjamas.gmaps.Base"];
	$m.__repr__ = function() { return "<module: pyjamas.gmaps.Base>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.Base';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.gmaps']['Base'] = $pyjs.loaded_modules['pyjamas.gmaps.Base'];
	try {


		$m['LatLng'] = function(lat, lng, nowrap) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof nowrap == 'undefined') nowrap=arguments.callee.__args__[4][1];
			var $bool1;
			if ((($bool1=nowrap) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
return new $wnd.google.maps.LatLng(lat, lng, nowrap)
			}
			else {
return new $wnd.google.maps.LatLng(lat, lng)
			}
			return null;
		};
		$m['LatLng'].__name__ = 'LatLng';

		$m['LatLng'].__bind_type__ = 0;
		$m['LatLng'].__args__ = [null,null,['lat'],['lng'],['nowrap', true]];
		$m['LatLngBounds'] = function(sw, ne) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and1,$and2,$bool2,$bool3;
			if ((($bool3=((($bool2=$and1=sw) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?ne:$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
return new $wnd.google.maps.LatLngBounds(sw, ne)
			}
			else {
return new $wnd.google.maps.LatLngBounds()
			}
			return null;
		};
		$m['LatLngBounds'].__name__ = 'LatLngBounds';

		$m['LatLngBounds'].__bind_type__ = 0;
		$m['LatLngBounds'].__args__ = [null,null,['sw'],['ne']];
		$m['MVCArray'] = function(array) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

return new $wnd.google.maps.MVCArray(array)
		};
		$m['MVCArray'].__name__ = 'MVCArray';

		$m['MVCArray'].__bind_type__ = 0;
		$m['MVCArray'].__args__ = [null,null,['array']];
		$m['Point'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

return new $wnd.google.maps.Point(x, y)
		};
		$m['Point'].__name__ = 'Point';

		$m['Point'].__bind_type__ = 0;
		$m['Point'].__args__ = [null,null,['x'],['y']];
		$m['Size'] = function(width, height, widthUnit, heightUnit) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var $and3,$and4,$bool4,$bool5;
			if ((($bool5=((($bool4=$and3=widthUnit) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?heightUnit:$and3)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

        return new $wnd.google.maps.Size
           (width, height, widthUnit, heightUnit)
        
			}
			else {
return new $wnd.google.maps.Size(width, height)
			}
			return null;
		};
		$m['Size'].__name__ = 'Size';

		$m['Size'].__bind_type__ = 0;
		$m['Size'].__args__ = [null,null,['width'],['height'],['widthUnit'],['heightUnit']];
		$m['Array'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

return new Array()
		};
		$m['Array'].__name__ = 'Array';

		$m['Array'].__bind_type__ = 0;
		$m['Array'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.Base */


/* end module: pyjamas.gmaps.Base */


