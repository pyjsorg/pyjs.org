/* start module: MapSimple */
$pyjs.loaded_modules['MapSimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MapSimple'].__was_initialized__) return $pyjs.loaded_modules['MapSimple'];
	var $m = $pyjs.loaded_modules["MapSimple"];
	$m.__repr__ = function() { return "<module: MapSimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MapSimple';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_8 = new $p['int'](8);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['mapPanel'] = $m['SimplePanel']();
			$m['mapPanel']['setSize']('100%', '100%');
			$m['options'] = $pyjs_kwargs_call(null, $m['MapOptions'], null, null, [{zoom:$constant_int_8, center:$m['LatLng']((typeof ($usub1=34.397)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 150.644), mapTypeId:$p['getattr']($m['MapTypeId'], 'ROADMAP')}]);
			$m['map'] = $m['Map']($m['mapPanel']['getElement'](), $m['options']);
			$m['root'] = $m['RootPanel']();
			$m['root']['add']($m['mapPanel']);
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MapSimple */


/* end module: MapSimple */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
