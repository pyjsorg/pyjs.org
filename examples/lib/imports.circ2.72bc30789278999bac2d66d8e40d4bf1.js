/* start module: imports.circ2 */
$pyjs['loaded_modules']['imports.circ2'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.circ2']['__was_initialized__']) return $pyjs['loaded_modules']['imports.circ2'];
	if(typeof $pyjs['loaded_modules']['imports'] == 'undefined' || !$pyjs['loaded_modules']['imports']['__was_initialized__']) $p['___import___']('imports', null);
	var $m = $pyjs['loaded_modules']['imports.circ2'];
	$m['__repr__'] = function() { return '<module: imports.circ2>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.circ2';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports']['circ2'] = $pyjs['loaded_modules']['imports.circ2'];
	try {


		$m['imports'] = $p['___import___']('imports', 'imports');
		$m['imports']['exec_order']['append']('circ2-1');
		$m['imports'] = $p['___import___']('imports.circ1', 'imports');
		$m['imports']['exec_order']['append']('circ2-2');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.circ2 */


/* end module: imports.circ2 */


/*
PYJS_DEPS: ['imports', 'imports.circ1']
*/
