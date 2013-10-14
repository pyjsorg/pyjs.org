/* start module: libtimesheet.model */
$pyjs['loaded_modules']['libtimesheet.model'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.model']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.model'];
	if(typeof $pyjs['loaded_modules']['libtimesheet'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet']['__was_initialized__']) $p['___import___']('libtimesheet', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.model'];
	$m['__repr__'] = function() { return '<module: libtimesheet.model>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.model';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet']['model'] = $pyjs['loaded_modules']['libtimesheet.model'];
	try {


		$m['puremvc'] = $p['___import___']('puremvc.patterns.proxy', 'libtimesheet.model');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.model */


/* end module: libtimesheet.model */


/*
PYJS_DEPS: ['puremvc.patterns.proxy', 'puremvc', 'puremvc.patterns']
*/
