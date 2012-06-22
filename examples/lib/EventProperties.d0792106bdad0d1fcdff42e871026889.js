/* start module: EventProperties */
$pyjs['loaded_modules']['EventProperties'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['EventProperties']['__was_initialized__']) return $pyjs['loaded_modules']['EventProperties'];
	var $m = $pyjs['loaded_modules']['EventProperties'];
	$m['__repr__'] = function() { return '<module: EventProperties>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventProperties';
	$m['__name__'] = __mod_name__;
	try {
		var $bool2;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_4 = new $p['int'](4);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		$m['LatLngBounds'] = $p['___import___']('pyjamas.gmaps.Base.LatLngBounds', null, null, false);
		$m['InfoWindow'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindow', null, null, false);
		$m['InfoWindowOptions'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindowOptions', null, null, false);
		$m['EventProperties'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'EventProperties';
			$cls_definition['__md5__'] = '6baf7c18292c17cd1c40cded5ffc2d15';
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
					if (self.prototype['__md5__'] !== '6baf7c18292c17cd1c40cded5ffc2d15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var options;
				$m['SimplePanel']['__init__'](self);
				self['setSize']('100%', '100%');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('myLatLng', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)) : $p['setattr'](self, 'myLatLng', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)); 
				options = $m['MapOptions']();
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('zoom', $constant_int_4) : $p['setattr'](options, 'zoom', $constant_int_4); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('center', $p['getattr'](self, 'myLatLng')) : $p['setattr'](options, 'center', $p['getattr'](self, 'myLatLng')); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')) : $p['setattr'](options, 'mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('map', $m['Map'](self['getElement'](), options)) : $p['setattr'](self, 'map', $m['Map'](self['getElement'](), options)); 
				self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
				options = $m['InfoWindowOptions']();
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('content', 'Zoom Level Test') : $p['setattr'](options, 'content', 'Zoom Level Test'); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('position', $p['getattr'](self, 'myLatLng')) : $p['setattr'](options, 'position', $p['getattr'](self, 'myLatLng')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('infoWindow', $m['InfoWindow'](options)) : $p['setattr'](self, 'infoWindow', $m['InfoWindow'](options)); 
				self['infoWindow']['open']($p['getattr'](self, 'map'));
				self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('zoomChanged', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6baf7c18292c17cd1c40cded5ffc2d15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var zoomLevel,$add2,$add1,$bool1;
				zoomLevel = self['map']['getZoom']();
				self['map']['setCenter']($p['getattr'](self, 'myLatLng'));
				self['infoWindow']['setContent']((typeof ($add1='Zoom: ')==typeof ($add2=$p['str'](zoomLevel)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				if ((($bool1=$p['op_eq'](zoomLevel, $constant_int_0)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['map']['setZoom']($constant_int_10);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['zoomChanged'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventProperties', $p['tuple']($bases), $data);
		})();
		if ((($bool2=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2['__nonzero__']=='function'?
						$bool2['__nonzero__']() :
						(typeof $bool2['__len__']=='function'?
							($bool2['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['root'] = $m['RootPanel']();
			$m['root']['add']($m['EventProperties']());
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end EventProperties */


/* end module: EventProperties */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.Base.LatLngBounds', 'pyjamas.gmaps.InfoWindow.InfoWindow', 'pyjamas.gmaps.InfoWindow', 'pyjamas.gmaps.InfoWindow.InfoWindowOptions']
*/
