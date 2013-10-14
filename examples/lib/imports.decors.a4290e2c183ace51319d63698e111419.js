/* start module: imports.decors */
$pyjs['loaded_modules']['imports.decors'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['imports.decors']['__was_initialized__']) return $pyjs['loaded_modules']['imports.decors'];
	if(typeof $pyjs['loaded_modules']['imports'] == 'undefined' || !$pyjs['loaded_modules']['imports']['__was_initialized__']) $p['___import___']('imports', null);
	var $m = $pyjs['loaded_modules']['imports.decors'];
	$m['__repr__'] = function() { return '<module: imports.decors>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.decors';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['imports']['decors'] = $pyjs['loaded_modules']['imports.decors'];
	try {


		$m['othermoduledeco1'] = function(f) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fn;
			fn = function() {
				if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}
				var $add2,$add3,$add1,$add4;
				return (typeof ($add3=(typeof ($add1='a')==typeof ($add2=$pyjs_kwargs_call(null, f, args, kwargs, [{}])) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='c') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			};
			fn['__name__'] = 'fn';

			fn['__bind_type__'] = 0;
			fn['__args__'] = ['args',['kwargs']];
			return fn;
		};
		$m['othermoduledeco1']['__name__'] = 'othermoduledeco1';

		$m['othermoduledeco1']['__bind_type__'] = 0;
		$m['othermoduledeco1']['__args__'] = [null,null,['f']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.decors */


/* end module: imports.decors */


