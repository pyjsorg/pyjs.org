/* start module: ControlOptions */
$pyjs['loaded_modules']['ControlOptions'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ControlOptions']['__was_initialized__']) return $pyjs['loaded_modules']['ControlOptions'];
	var $m = $pyjs['loaded_modules']['ControlOptions'];
	$m['__repr__'] = function() { return '<module: ControlOptions>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ControlOptions';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_4 = new $p['int'](4);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['MapTypeControlOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeControlOptions', null, null, false);
		$m['NavigationControlOptions'] = $p['___import___']('pyjamas.gmaps.Map.NavigationControlOptions', null, null, false);
		$m['MapTypeControlStyle'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeControlStyle', null, null, false);
		$m['NavigationControlStyle'] = $p['___import___']('pyjamas.gmaps.Map.NavigationControlStyle', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		$m['ControlOptions'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ControlOptions';
			$cls_definition['__md5__'] = 'bfcd6433ddef2342f4e80daf4534731d';
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
					if (self.prototype['__md5__'] !== 'bfcd6433ddef2342f4e80daf4534731d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var options;
				$m['SimplePanel']['__init__'](self);
				self['setSize']('100%', '100%');
				options = $pyjs_kwargs_call(null, $m['MapOptions'], null, null, [{'zoom':$constant_int_4, 'center':$m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922), 'mapTypeId':$p['getattr']($m['MapTypeId'], 'ROADMAP'), 'mapTypeControl':true, 'mapTypeControlOptions':$pyjs_kwargs_call(null, $m['MapTypeControlOptions'], null, null, [{'style':$p['getattr']($m['MapTypeControlStyle'], 'DROPDOWN_MENU')}]), 'navigationControl':true, 'navigationControlOptions':$pyjs_kwargs_call(null, $m['NavigationControlOptions'], null, null, [{'style':$p['getattr']($m['NavigationControlStyle'], 'SMALL')}])}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('map', $m['Map'](self['getElement'](), options)) : $p['setattr'](self, 'map', $m['Map'](self['getElement'](), options)); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ControlOptions', $p['tuple']($bases), $data);
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
			$m['root']['add']($m['ControlOptions']());
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ControlOptions */


/* end module: ControlOptions */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Map.MapTypeControlOptions', 'pyjamas.gmaps.Map.NavigationControlOptions', 'pyjamas.gmaps.Map.MapTypeControlStyle', 'pyjamas.gmaps.Map.NavigationControlStyle', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
