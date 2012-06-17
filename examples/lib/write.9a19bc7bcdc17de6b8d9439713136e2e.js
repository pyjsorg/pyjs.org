/* start module: write */
$pyjs.loaded_modules['write'] = function (__mod_name__) {
	if($pyjs.loaded_modules['write'].__was_initialized__) return $pyjs.loaded_modules['write'];
	var $m = $pyjs.loaded_modules["write"];
	$m.__repr__ = function() { return "<module: write>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'write';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;

		$m['sys'] = $p['___import___']('sys', null);
		$m['re'] = $p['___import___']('re', null);
		$m['tag_re'] = $m['re']['compile']('<.*?>');
		$m['write'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

 			return null;
		};
		$m['write'].__name__ = 'write';

		$m['write'].__bind_type__ = 0;
		$m['write'].__args__ = [null,null,['text']];
		$m['writebr'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

 			return null;
		};
		$m['writebr'].__name__ = 'writebr';

		$m['writebr'].__bind_type__ = 0;
		$m['writebr'].__args__ = [null,null,['text']];
		$m['data'] = '';
		$m['element'] = null;
		$m['write_web'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add2,$add1;
			$m['data'] = (typeof ($add1=$m['data'])==typeof ($add2=text) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
$m['element'].innerHTML = $m['data']; 
		};
		$m['write_web'].__name__ = 'write_web';

		$m['write_web'].__bind_type__ = 0;
		$m['write_web'].__args__ = [null,null,['text']];
		$m['writebr_web'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add4,$add3;
			$m['write']((typeof ($add3=text)==typeof ($add4='<br />\n') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			return null;
		};
		$m['writebr_web'].__name__ = 'writebr_web';

		$m['writebr_web'].__bind_type__ = 0;
		$m['writebr_web'].__args__ = [null,null,['text']];
		$m['init_web'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

$m['element'] = $doc.createElement("div");
           $doc.body.appendChild($m['element']); 
		};
		$m['init_web'].__name__ = 'init_web';

		$m['init_web'].__bind_type__ = 0;
		$m['init_web'].__args__ = [null,null];
		$m['write_std'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			text = $m['tag_re']['sub']('', text);
			return null;
		};
		$m['write_std'].__name__ = 'write_std';

		$m['write_std'].__bind_type__ = 0;
		$m['write_std'].__args__ = [null,null,['text']];
		$m['writebr_std'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			text = $m['tag_re']['sub']('', text);
			return null;
		};
		$m['writebr_std'].__name__ = 'writebr_std';

		$m['writebr_std'].__bind_type__ = 0;
		$m['writebr_std'].__args__ = [null,null,['text']];
		if ((($bool1=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['init_web']();
			$m['write'] = $m['write_web'];
			$m['writebr'] = $m['writebr_web'];
		}
		else {
			$m['write'] = $m['write_std'];
			$m['writebr'] = $m['writebr_std'];
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end write */


/* end module: write */


/*
PYJS_DEPS: ['sys', 're']
*/
