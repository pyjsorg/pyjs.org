/* start module: pyjamas.gmaps.DirectionsRenderer */
$pyjs['loaded_modules']['pyjamas.gmaps.DirectionsRenderer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.gmaps.DirectionsRenderer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsRenderer'];
	if(typeof $pyjs['loaded_modules']['pyjamas.gmaps'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.gmaps']['__was_initialized__']) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsRenderer'];
	$m['__repr__'] = function() { return '<module: pyjamas.gmaps.DirectionsRenderer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.DirectionsRenderer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.gmaps']['DirectionsRenderer'] = $pyjs['loaded_modules']['pyjamas.gmaps.DirectionsRenderer'];
	try {


		$m['dictToJs'] = $p['___import___']('pyjamas.gmaps.Utils.dictToJs', 'pyjamas.gmaps', null, false);
		$m['translateDirectionsResults'] = $p['___import___']('pyjamas.gmaps.DirectionsService.translateDirectionsResults', 'pyjamas.gmaps', null, false);
		$m['DirectionsRenderer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.gmaps.DirectionsRenderer';
			$cls_definition['__md5__'] = 'd19b678ebce01b4d8096442b64fd1712';
			$method = $pyjs__bind_method2('__init__', function(options) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					options = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd19b678ebce01b4d8096442b64fd1712') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=options) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('renderer', new $wnd['google']['maps']['DirectionsRenderer'](options)) : $p['setattr'](self, 'renderer', new $wnd['google']['maps']['DirectionsRenderer'](options)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('renderer', new $wnd['google']['maps']['DirectionsRenderer']()) : $p['setattr'](self, 'renderer', new $wnd['google']['maps']['DirectionsRenderer']()); 
				}
				return null;
			}
	, 1, [null,null,['self'],['options']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setDirections', function(results) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					results = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd19b678ebce01b4d8096442b64fd1712') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['renderer']['setDirections']($m['translateDirectionsResults'](results, true));
				return null;
			}
	, 1, [null,null,['self'],['results']]);
			$cls_definition['setDirections'] = $method;
			$method = $pyjs__bind_method2('setMap', function(map) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					map = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd19b678ebce01b4d8096442b64fd1712') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['renderer']['setMap'](map);
				return null;
			}
	, 1, [null,null,['self'],['map']]);
			$cls_definition['setMap'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DirectionsRenderer', $p['tuple']($bases), $data);
		})();
		$m['DirectionsRendererOptions'] = function() {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var params = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (params === null || typeof params != 'object' || params['__name__'] != 'dict' || typeof params['$pyjs_is_kwarg'] == 'undefined') {
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
		$m['DirectionsRendererOptions']['__name__'] = 'DirectionsRendererOptions';

		$m['DirectionsRendererOptions']['__bind_type__'] = 0;
		$m['DirectionsRendererOptions']['__args__'] = [null,['params']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.DirectionsRenderer */


/* end module: pyjamas.gmaps.DirectionsRenderer */


/*
PYJS_DEPS: ['pyjamas.gmaps.Utils.dictToJs', 'pyjamas', 'pyjamas.gmaps', 'pyjamas.gmaps.Utils', 'pyjamas.gmaps.DirectionsService.translateDirectionsResults', 'pyjamas.gmaps.DirectionsService']
*/
