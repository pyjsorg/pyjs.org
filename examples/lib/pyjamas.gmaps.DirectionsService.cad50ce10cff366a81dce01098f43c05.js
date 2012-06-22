/* start module: pyjamas.gmaps.DirectionsService */
$pyjs['loaded_modules']['pyjamas.gmaps.DirectionsService'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.gmaps.DirectionsService']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsService'];
	if(typeof $pyjs['loaded_modules']['pyjamas.gmaps'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.gmaps']['__was_initialized__']) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsService'];
	$m['__repr__'] = function() { return '<module: pyjamas.gmaps.DirectionsService>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.DirectionsService';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.gmaps']['DirectionsService'] = $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsService'];
	try {


		$m['translateGmapsObject'] = $p['___import___']('pyjamas.gmaps.Utils.translateGmapsObject', 'pyjamas.gmaps', null, false);
		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['translateGeocoderResult'] = $p['___import___']('pyjamas.gmaps.Geocoder.translateGeocoderResult', 'pyjamas.gmaps', null, false);
		$m['DirectionsStatus'] = $wnd['google']['maps']['DirectionsStatus'];
		$m['DirectionsTravelMode'] = $wnd['google']['maps']['DirectionsTravelMode'];
		$m['DirectionsUnitSystem'] = $wnd['google']['maps']['DirectionsUnitSystem'];
		$m['directionsResultsFields'] = $m['dictToJs']($p['dict']([['trips', 'l'], ['warnings', 'l'], ['routes', 'l'], ['steps', 'l'], ['results', 'd'], ['trips[]', 'd'], ['routes[]', 'd'], ['steps[]', 'd'], ['start_geocode', $m['translateGeocoderResult']], ['end_geocode', $m['translateGeocoderResult']]]));
		$m['translateDirectionsResults'] = function(jsResults, pyToJs) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof pyToJs == 'undefined') pyToJs=arguments['callee']['__args__'][3][1];

			return $m['translateGmapsObject'](jsResults, 'results', $m['directionsResultsFields'], pyToJs);
		};
		$m['translateDirectionsResults']['__name__'] = 'translateDirectionsResults';

		$m['translateDirectionsResults']['__bind_type__'] = 0;
		$m['translateDirectionsResults']['__args__'] = [null,null,['jsResults'],['pyToJs', false]];
		$m['DirectionsService'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.gmaps.DirectionsService';
			$cls_definition['__md5__'] = 'c32cf26553d6b2873771c4e35c6c3fc4';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c32cf26553d6b2873771c4e35c6c3fc4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ds', new $wnd['google']['maps']['DirectionsService']()) : $p['setattr'](self, 'ds', new $wnd['google']['maps']['DirectionsService']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('route', function(request, callback) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					request = arguments[1];
					callback = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c32cf26553d6b2873771c4e35c6c3fc4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				var 				$lambda1 = function(jsResults, status) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

					return callback($m['translateDirectionsResults'](jsResults), status);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['jsResults'],['status']];
				self['ds']['route'](request, $lambda1);
				return null;
			}
	, 1, [null,null,['self'],['request'],['callback']]);
			$cls_definition['route'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DirectionsService', $p['tuple']($bases), $data);
		})();
		$m['DirectionsRequest'] = function() {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var params = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (typeof params != 'object' || params['__name__'] != 'dict' || typeof params['$pyjs_is_kwarg'] == 'undefined') {
				params = arguments[arguments['length']+1];
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
		$m['DirectionsRequest']['__name__'] = 'DirectionsRequest';

		$m['DirectionsRequest']['__bind_type__'] = 0;
		$m['DirectionsRequest']['__args__'] = [null,['params']];
		$m['DirectionsWaypoint'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {}
		};
		$m['DirectionsWaypoint']['__name__'] = 'DirectionsWaypoint';

		$m['DirectionsWaypoint']['__bind_type__'] = 0;
		$m['DirectionsWaypoint']['__args__'] = [null,null];
		$m['DirectionsTrip'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {}
		};
		$m['DirectionsTrip']['__name__'] = 'DirectionsTrip';

		$m['DirectionsTrip']['__bind_type__'] = 0;
		$m['DirectionsTrip']['__args__'] = [null,null];
		$m['DirectionsRoute'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {};
		};
		$m['DirectionsRoute']['__name__'] = 'DirectionsRoute';

		$m['DirectionsRoute']['__bind_type__'] = 0;
		$m['DirectionsRoute']['__args__'] = [null,null];
		$m['DirectionsStep'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {};
		};
		$m['DirectionsStep']['__name__'] = 'DirectionsStep';

		$m['DirectionsStep']['__bind_type__'] = 0;
		$m['DirectionsStep']['__args__'] = [null,null];
		$m['DirectionsDistance'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {};
		};
		$m['DirectionsDistance']['__name__'] = 'DirectionsDistance';

		$m['DirectionsDistance']['__bind_type__'] = 0;
		$m['DirectionsDistance']['__args__'] = [null,null];
		$m['DirectionsDuration'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

return {};
		};
		$m['DirectionsDuration']['__name__'] = 'DirectionsDuration';

		$m['DirectionsDuration']['__bind_type__'] = 0;
		$m['DirectionsDuration']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.DirectionsService */


/* end module: pyjamas.gmaps.DirectionsService */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.translateGmapsObject', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps.Geocoder.translateGeocoderResult', 'pyjamas.gmaps.Geocoder']
*/
