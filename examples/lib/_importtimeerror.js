/* start module: _importtimeerror */
$pyjs.loaded_modules['_importtimeerror'] = function (__mod_name__) {
	if($pyjs.loaded_modules['_importtimeerror'].__was_initialized__) return $pyjs.loaded_modules['_importtimeerror'];
	var $m = $pyjs.loaded_modules["_importtimeerror"];
	$m.__repr__ = function() { return "<module: _importtimeerror>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '_importtimeerror';
	$m.__name__ = __mod_name__;
	try {


		throw ($p['Exception']('Testing import-time exception'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end _importtimeerror */


/* end module: _importtimeerror */


