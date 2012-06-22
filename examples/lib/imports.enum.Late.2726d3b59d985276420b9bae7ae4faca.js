/* start module: imports.enum.Late */
$pyjs['loaded_modules']['imports.enum.Late'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.enum.Late']['__was_initialized__']) return $pyjs['loaded_modules']['imports.enum.Late'];
	if(typeof $pyjs['loaded_modules']['imports.enum'] == 'undefined' || !$pyjs['loaded_modules']['imports.enum']['__was_initialized__']) $p['___import___']('imports.enum', null);
	var $m = $pyjs['loaded_modules']['imports.enum.Late'];
	$m['__repr__'] = function() { return '<module: imports.enum.Late>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enum.Late';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports.enum']['Late'] = $pyjs['loaded_modules']['imports.enum.Late'];
	try {


		$m['getLate'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var v;
			v = $pyjs_kwargs_call(null, (typeof Late == "undefined"?$m['Late']:Late), null, $p['dict']([]), [{}]);
			return v;
		};
		$m['getLate']['__name__'] = 'getLate';

		$m['getLate']['__bind_type__'] = 0;
		$m['getLate']['__args__'] = [null,null];
		$m['Late'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'imports.enum.Late';
			$cls_definition['__md5__'] = 'a7a55094a4fc84b06ac731a80a7f75b9';
			$cls_definition['value'] = 'late';
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Late', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enum.Late */


/* end module: imports.enum.Late */


