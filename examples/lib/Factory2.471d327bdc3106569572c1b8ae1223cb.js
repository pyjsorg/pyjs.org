/* start module: Factory2 */
$pyjs['loaded_modules']['Factory2'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Factory2']['__was_initialized__']) return $pyjs['loaded_modules']['Factory2'];
	var $m = $pyjs['loaded_modules']['Factory2'];
	$m['__repr__'] = function() { return '<module: Factory2>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Factory2';
	$m['__name__'] = __mod_name__;
	try {


		$m['gclasses'] = $p['dict']([]);
		$m['gregister'] = function(className, classe) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$m['gclasses']['__setitem__'](className, classe);
			return null;
		};
		$m['gregister']['__name__'] = 'gregister';

		$m['gregister']['__bind_type__'] = 0;
		$m['gregister']['__args__'] = [null,null,['className'],['classe']];
		$m['ggetObject'] = function(className) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

			var kargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kargs === null || typeof kargs != 'object' || kargs['__name__'] != 'dict' || typeof kargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kargs != 'undefined') args['__array']['push'](kargs);
				kargs = arguments[arguments['length']+1];
			} else {
				delete kargs['$pyjs_is_kwarg'];
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[1];
					}
				} else {
				}
			}
			var classe,$2,$1;
			classe = (typeof ($1=$m['gclasses'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=className]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](className));
			return $pyjs_kwargs_call(null, classe, args, kargs, [{}]);
		};
		$m['ggetObject']['__name__'] = 'ggetObject';

		$m['ggetObject']['__bind_type__'] = 0;
		$m['ggetObject']['__args__'] = ['args',['kargs'],['className']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Factory2 */


/* end module: Factory2 */


