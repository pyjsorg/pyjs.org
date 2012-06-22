/* start module: pyjamas.gmaps.Geocoder */
$pyjs['loaded_modules']['pyjamas.gmaps.Geocoder'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.gmaps.Geocoder']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.gmaps.Geocoder'];
	if(typeof $pyjs['loaded_modules']['pyjamas.gmaps'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.gmaps']['__was_initialized__']) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs['loaded_modules']['pyjamas.gmaps.Geocoder'];
	$m['__repr__'] = function() { return '<module: pyjamas.gmaps.Geocoder>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.Geocoder';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.gmaps']['Geocoder'] = $pyjs['loaded_modules']['pyjamas.gmaps.Geocoder'];
	try {


		$m['translateGmapsObject'] = $p['___import___']('pyjamas.gmaps.Utils.translateGmapsObject', 'pyjamas.gmaps', null, false);
		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['GeocoderStatus'] = $wnd['google']['maps']['GeocoderStatus'];
		$m['GeocoderLocationType'] = $wnd['google']['maps']['GeocoderLocationType'];
		$m['geocoderResultsFields'] = $m['dictToJs']($p['dict']([['results', 'l'], ['types', 'l'], ['address_components', 'l'], ['results[]', 'd'], ['address_components[]', 'd'], ['geometry', 'd'], ['result', 'd']]));
		$m['translateGeocoderResults'] = function(jsResults, pyToJs) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof pyToJs == 'undefined') pyToJs=arguments['callee']['__args__'][3][1];

			return $m['translateGmapsObject'](jsResults, 'results', $m['geocoderResultsFields'], pyToJs);
		};
		$m['translateGeocoderResults']['__name__'] = 'translateGeocoderResults';

		$m['translateGeocoderResults']['__bind_type__'] = 0;
		$m['translateGeocoderResults']['__args__'] = [null,null,['jsResults'],['pyToJs', false]];
		$m['translateGeocoderResult'] = function(jsResult, pyToJs) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof pyToJs == 'undefined') pyToJs=arguments['callee']['__args__'][3][1];

			return $m['translateGmapsObject'](jsResult, 'result', $m['geocoderResultsFields'], pyToJs);
		};
		$m['translateGeocoderResult']['__name__'] = 'translateGeocoderResult';

		$m['translateGeocoderResult']['__bind_type__'] = 0;
		$m['translateGeocoderResult']['__args__'] = [null,null,['jsResult'],['pyToJs', false]];
		$m['Geocoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.gmaps.Geocoder';
			$cls_definition['__md5__'] = '44a87582046c4a98b7fff34ab8a20205';
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
					if (self.prototype['__md5__'] !== '44a87582046c4a98b7fff34ab8a20205') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('geocoder', new $wnd['google']['maps']['Geocoder']()) : $p['setattr'](self, 'geocoder', new $wnd['google']['maps']['Geocoder']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('geocode', function(request, callback) {
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
					if (self.prototype['__md5__'] !== '44a87582046c4a98b7fff34ab8a20205') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				var 				$lambda1 = function(jsResults, status) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

					return callback($m['translateGeocoderResults'](jsResults), status);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['jsResults'],['status']];
				self['geocoder']['geocode'](request, $lambda1);
				return null;
			}
	, 1, [null,null,['self'],['request'],['callback']]);
			$cls_definition['geocode'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Geocoder', $p['tuple']($bases), $data);
		})();
		$m['GeocoderRequest'] = function() {
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
		$m['GeocoderRequest']['__name__'] = 'GeocoderRequest';

		$m['GeocoderRequest']['__bind_type__'] = 0;
		$m['GeocoderRequest']['__args__'] = [null,['params']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.Geocoder */


/* end module: pyjamas.gmaps.Geocoder */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.translateGmapsObject', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.Utils.dictToJs']
*/
