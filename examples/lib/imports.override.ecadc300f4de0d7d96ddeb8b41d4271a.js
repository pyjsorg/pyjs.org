/* start module: imports.override */
$pyjs['loaded_modules']['imports.override'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.override']['__was_initialized__']) return $pyjs['loaded_modules']['imports.override'];
	if(typeof $pyjs['loaded_modules']['imports'] == 'undefined' || !$pyjs['loaded_modules']['imports']['__was_initialized__']) $p['___import___']('imports', null);
	var $m = $pyjs['loaded_modules']['imports.override'];
	$m['__repr__'] = function() { return '<module: imports.override>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.override';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports']['override'] = $pyjs['loaded_modules']['imports.override'];
	try {


		$m['overrideme'] = $p['___import___']('overrideme', 'imports');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.override */


/* end module: imports.override */


/*
PYJS_DEPS: ['overrideme']
*/
