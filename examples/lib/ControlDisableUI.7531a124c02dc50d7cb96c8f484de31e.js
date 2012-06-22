/* start module: ControlDisableUI */
$pyjs['loaded_modules']['ControlDisableUI'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ControlDisableUI']['__was_initialized__']) return $pyjs['loaded_modules']['ControlDisableUI'];
	var $m = $pyjs['loaded_modules']['ControlDisableUI'];
	$m['__repr__'] = function() { return '<module: ControlDisableUI>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ControlDisableUI';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_151 = new $p['int'](151);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		$m['ControlDisableUI'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlDisableUI';
			$cls_definition['__md5__'] = 'dd914252c0d92c6eed872cc3c087fe94';
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
					if (self.prototype['__md5__'] !== 'dd914252c0d92c6eed872cc3c087fe94') {
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
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('center', $m['LatLng']((typeof ($usub1=$constant_int_33)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), $constant_int_151)) : $p['setattr'](options, 'center', $m['LatLng']((typeof ($usub1=$constant_int_33)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), $constant_int_151)); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')) : $p['setattr'](options, 'mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')); 
				options['__is_instance__'] && typeof options['__setattr__'] == 'function' ? options['__setattr__']('disableDefaultUI', true) : $p['setattr'](options, 'disableDefaultUI', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('map', $m['Map'](self['getElement'](), options)) : $p['setattr'](self, 'map', $m['Map'](self['getElement'](), options)); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ControlDisableUI', $p['tuple']($bases), $data);
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
			$m['root']['add']($m['ControlDisableUI']());
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ControlDisableUI */


/* end module: ControlDisableUI */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
