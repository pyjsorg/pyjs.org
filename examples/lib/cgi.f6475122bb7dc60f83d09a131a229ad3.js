/* start module: cgi */
$pyjs['loaded_modules']['cgi'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['cgi']['__was_initialized__']) return $pyjs['loaded_modules']['cgi'];
	var $m = $pyjs['loaded_modules']['cgi'];
	$m['__repr__'] = function() { return '<module: cgi>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'cgi';
	$m['__name__'] = __mod_name__;
	try {


		$m['escape'] = function(s, quote) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof quote == 'undefined') quote=arguments['callee']['__args__'][3][1];
			var $bool1;
			s = s['$$replace']('&', '&amp;');
			s = s['$$replace']('<', '&lt;');
			s = s['$$replace']('>', '&gt;');
			if ((($bool1=quote) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				s = s['$$replace']('"', '&quot;');
			}
			return s;
		};
		$m['escape']['__name__'] = 'escape';

		$m['escape']['__bind_type__'] = 0;
		$m['escape']['__args__'] = [null,null,['s'],['quote', null]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end cgi */


/* end module: cgi */


