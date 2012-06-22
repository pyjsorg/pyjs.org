/* start module: urllib */
$pyjs['loaded_modules']['urllib'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['urllib']['__was_initialized__']) return $pyjs['loaded_modules']['urllib'];
	var $m = $pyjs['loaded_modules']['urllib'];
	$m['__repr__'] = function() { return '<module: urllib>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'urllib';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		$m['quote'] = function(s, safe) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof safe == 'undefined') safe=arguments['callee']['__args__'][3][1];

			return encodeURIComponent(s);
		};
		$m['quote']['__name__'] = 'quote';

		$m['quote']['__bind_type__'] = 0;
		$m['quote']['__args__'] = [null,null,['s'],['safe', '']];
		$m['unquote_plus'] = function(st) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return decodeURIComponent(st['$$replace']('+', ' '));
		};
		$m['unquote_plus']['__name__'] = 'unquote_plus';

		$m['unquote_plus']['__bind_type__'] = 0;
		$m['unquote_plus']['__args__'] = [null,null,['st']];
		$m['unquote'] = function(st) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return decodeURIComponent(st);
		};
		$m['unquote']['__name__'] = 'unquote';

		$m['unquote']['__bind_type__'] = 0;
		$m['unquote']['__args__'] = [null,null,['st']];
		$m['urlencode'] = function(d) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $bool1,$iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$add2,s,$add1,$iter1_array,v;
			s = '';
			$iter1_iter = d['iteritems']();
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				i = $tupleassign1[0];
				v = $tupleassign1[1];
				s = (typeof ($add1=s)==typeof ($add2=$p['sprintf']('%s=%s&', $p['tuple']([i, $m['quote']($p['str'](v))]))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			if ((($bool1=!$p['op_eq'](s, '')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				s = $p['__getslice'](s, 0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
			}
			return s;
		};
		$m['urlencode']['__name__'] = 'urlencode';

		$m['urlencode']['__bind_type__'] = 0;
		$m['urlencode']['__args__'] = [null,null,['d']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end urllib */


/* end module: urllib */


