/* start module: imports.cls1 */
$pyjs['loaded_modules']['imports.cls1'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.cls1']['__was_initialized__']) return $pyjs['loaded_modules']['imports.cls1'];
	if(typeof $pyjs['loaded_modules']['imports'] == 'undefined' || !$pyjs['loaded_modules']['imports']['__was_initialized__']) $p['___import___']('imports', null);
	var $m = $pyjs['loaded_modules']['imports.cls1'];
	$m['__repr__'] = function() { return '<module: imports.cls1>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.cls1';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports']['cls1'] = $pyjs['loaded_modules']['imports.cls1'];
	try {


		$m['CLS'] = $p['___import___']('cls.CLS', 'imports', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.cls1 */


/* end module: imports.cls1 */


/*
PYJS_DEPS: ['cls.CLS', 'cls']
*/
