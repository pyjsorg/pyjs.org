/* start module: imports.classes */
$pyjs['loaded_modules']['imports.classes'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.classes']['__was_initialized__']) return $pyjs['loaded_modules']['imports.classes'];
	if(typeof $pyjs['loaded_modules']['imports'] == 'undefined' || !$pyjs['loaded_modules']['imports']['__was_initialized__']) $p['___import___']('imports', null);
	var $m = $pyjs['loaded_modules']['imports.classes'];
	$m['__repr__'] = function() { return '<module: imports.classes>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.classes';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports']['classes'] = $pyjs['loaded_modules']['imports.classes'];
	try {


		$m['WithAttribute'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'imports.classes';
			$cls_definition['__md5__'] = '327cef021b37f5cdbeb79012f875aa4e';
			$cls_definition['ATTR'] = 'attr';
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('WithAttribute', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.classes */


/* end module: imports.classes */


