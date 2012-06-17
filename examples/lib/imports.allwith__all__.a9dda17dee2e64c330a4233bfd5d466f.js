/* start module: imports.allwith__all__ */
$pyjs.loaded_modules['imports.allwith__all__'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.allwith__all__'].__was_initialized__) return $pyjs.loaded_modules['imports.allwith__all__'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.allwith__all__"];
	$m.__repr__ = function() { return "<module: imports.allwith__all__>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.allwith__all__';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['imports']['allwith__all__'] = $pyjs.loaded_modules['imports.allwith__all__'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['__all__'] = $p['list'](['all_import1', 'all_import2']);
		$m['all_import1'] = $constant_int_1;
		$m['all_import2'] = $constant_int_2;
		$m['all_masked'] = true;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.allwith__all__ */


/* end module: imports.allwith__all__ */


