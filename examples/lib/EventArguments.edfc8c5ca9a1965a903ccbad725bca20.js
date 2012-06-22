/* start module: EventArguments */
$pyjs['loaded_modules']['EventArguments'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['EventArguments']['__was_initialized__']) return $pyjs['loaded_modules']['EventArguments'];
	var $m = $pyjs['loaded_modules']['EventArguments'];
	$m['__repr__'] = function() { return '<module: EventArguments>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventArguments';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_4 = new $p['int'](4);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['random'] = $p['___import___']('random.random', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		$m['LatLngBounds'] = $p['___import___']('pyjamas.gmaps.Base.LatLngBounds', null, null, false);
		$m['Marker'] = $p['___import___']('pyjamas.gmaps.Marker.Marker', null, null, false);
		$m['MarkerOptions'] = $p['___import___']('pyjamas.gmaps.Marker.MarkerOptions', null, null, false);
		$m['EventArguments'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'EventArguments';
			$cls_definition['__md5__'] = '1b2d4799025940e6e363f61384c2b286';
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
					if (self.prototype['__md5__'] !== '1b2d4799025940e6e363f61384c2b286') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var options;
				$m['SimplePanel']['__init__'](self);
				self['setSize']('100%', '100%');
				options = $m['MapOptions']();
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('zoom', $constant_int_4) : $p['setattr'](options, 'zoom', $constant_int_4); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('center', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)) : $p['setattr'](options, 'center', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')) : $p['setattr'](options, 'mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('map', $m['Map'](self['getElement'](), options)) : $p['setattr'](self, 'map', $m['Map'](self['getElement'](), options)); 
				self['map']['addListener']('click', $p['getattr'](self, 'clicked'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clicked', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1b2d4799025940e6e363f61384c2b286') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['placeMarker']($p['getattr'](event, 'latLng'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['clicked'] = $method;
			$method = $pyjs__bind_method2('placeMarker', function(location) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					location = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1b2d4799025940e6e363f61384c2b286') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var marker,options;
				options = $m['MarkerOptions']();
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('position', location) : $p['setattr'](options, 'position', location); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('map', $p['getattr'](self, 'map')) : $p['setattr'](options, 'map', $p['getattr'](self, 'map')); 
				marker = $m['Marker'](options);
				self['map']['setCenter'](location);
				return null;
			}
	, 1, [null,null,['self'],['location']]);
			$cls_definition['placeMarker'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventArguments', $p['tuple']($bases), $data);
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
			$m['root'] = $m['RootPanel']();
			$m['root']['add']($m['EventArguments']());
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end EventArguments */


/* end module: EventArguments */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'random.random', 'random', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.Base.LatLngBounds', 'pyjamas.gmaps.Marker.Marker', 'pyjamas.gmaps.Marker', 'pyjamas.gmaps.Marker.MarkerOptions']
*/
