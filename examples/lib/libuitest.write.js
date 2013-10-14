/* start module: libuitest.write */
$pyjs['loaded_modules']['libuitest.write'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libuitest.write']['__was_initialized__']) return $pyjs['loaded_modules']['libuitest.write'];
	if(typeof $pyjs['loaded_modules']['libuitest'] == 'undefined' || !$pyjs['loaded_modules']['libuitest']['__was_initialized__']) $p['___import___']('libuitest', null);
	var $m = $pyjs['loaded_modules']['libuitest.write'];
	$m['__repr__'] = function() { return '<module: libuitest.write>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libuitest.write';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libuitest']['write'] = $pyjs['loaded_modules']['libuitest.write'];
	try {


		$m['data'] = '';
		$m['escape'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			s = s['$$replace']('&', '&amp;');
			s = s['$$replace']('<', '&lt;');
			s = s['$$replace']('>', '&gt;');
			s = s['$$replace']('"', '&quot;');
			return s;
		};
		$m['escape']['__name__'] = 'escape';

		$m['escape']['__bind_type__'] = 0;
		$m['escape']['__args__'] = [null,null,['s']];
		$m['display_log_output'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['element'] = $doc['createElement']('div');
			$doc['body']['appendChild']($m['element']);
			$m['element']['__is_instance__'] && typeof $m['element']['__setattr__'] == 'function' ? $m['element']['__setattr__']('innerHTML', $m['data']) : $p['setattr']($m['element'], 'innerHTML', $m['data']); 
			return null;
		};
		$m['display_log_output']['__name__'] = 'display_log_output';

		$m['display_log_output']['__bind_type__'] = 0;
		$m['display_log_output']['__args__'] = [null,null];
		$m['write'] = function(text, do_escape) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof do_escape == 'undefined') do_escape=arguments['callee']['__args__'][3][1];
			var $add2,$bool1,$add1;
			if ((($bool1=do_escape) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				text = $m['escape'](text);
			}
			$m['data'] = (typeof ($add1=$m['data'])==typeof ($add2=text) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			return null;
		};
		$m['write']['__name__'] = 'write';

		$m['write']['__bind_type__'] = 0;
		$m['write']['__args__'] = [null,null,['text'],['do_escape', true]];
		$m['writebr'] = function(text, do_escape) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof do_escape == 'undefined') do_escape=arguments['callee']['__args__'][3][1];
			var $add4,$add3;
			$m['write']((typeof ($add3=text)==typeof ($add4='<br />\n') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)), do_escape);
			return null;
		};
		$m['writebr']['__name__'] = 'writebr';

		$m['writebr']['__bind_type__'] = 0;
		$m['writebr']['__args__'] = [null,null,['text'],['do_escape', true]];
		$m['write_web'] = $m['writebr'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libuitest.write */


/* end module: libuitest.write */


