/* start module: pyjamas.locale */
$pyjs['loaded_modules']['pyjamas.locale'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.locale']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.locale'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.locale'];
	$m['__repr__'] = function() { return '<module: pyjamas.locale>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.locale';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['locale'] = $pyjs['loaded_modules']['pyjamas.locale'];
	try {


		$m['msgs'] = $p['dict']([]);
		$m['_'] = function(identifier) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['msgs']['get'](identifier, identifier);
		};
		$m['_']['__name__'] = '_';

		$m['_']['__bind_type__'] = 0;
		$m['_']['__args__'] = [null,null,['identifier']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.locale */


/* end module: pyjamas.locale */


