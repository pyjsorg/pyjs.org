/* start module: pygwt */
$pyjs['loaded_modules']['pygwt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pygwt']['__was_initialized__']) return $pyjs['loaded_modules']['pygwt'];
	var $m = $pyjs['loaded_modules']['pygwt'];
	$m['__repr__'] = function() { return '<module: pygwt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['sNextHashId'] = $constant_int_0;
		$m['getNextHashId'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add2,$add1;
			$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=$constant_int_1);
			return $m['sNextHashId'];
		};
		$m['getNextHashId']['__name__'] = 'getNextHashId';

		$m['getNextHashId']['__bind_type__'] = 0;
		$m['getNextHashId']['__args__'] = [null,null];
		$m['getHashCode'] = function(o) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return (o == null) ? 0 :
        (o['$H'] ? o['$H'] : (o['$H'] = pygwt_getNextHashId()))
    
		};
		$m['getHashCode']['__name__'] = 'getHashCode';

		$m['getHashCode']['__bind_type__'] = 0;
		$m['getHashCode']['__args__'] = [null,null,['o']];
		$m['getModuleName'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var sys,os,mod_name;
			os = $p['___import___']('os', null);
			sys = $p['___import___']('sys', null);
			mod_name = $p['getattr'](sys, 'argv')['__getitem__']($constant_int_0);
			mod_name = os['path']['$$split'](mod_name)['__getitem__']($constant_int_1);
			mod_name = os['path']['spliext'](mod_name)['__getitem__']($constant_int_0);
			return mod_name;
		};
		$m['getModuleName']['__name__'] = 'getModuleName';

		$m['getModuleName']['__bind_type__'] = 0;
		$m['getModuleName']['__args__'] = [null,null];
		$m['getModuleBaseURL'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add3,s,os,$add4;
			os = $p['___import___']('os.path', null);
			s = $m['get_main_frame']()['getUri']();
			s = os['path']['dirname'](s);
			if ($p['bool'](($p['cmp']($p['len'](s), $constant_int_0) == 1))) {
				return $p['__op_add']($add3=s,$add4='/');
			}
			return '';
		};
		$m['getModuleBaseURL']['__name__'] = 'getModuleBaseURL';

		$m['getModuleBaseURL']['__bind_type__'] = 0;
		$m['getModuleBaseURL']['__args__'] = [null,null];
		$m['getImageBaseURL'] = function(images) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][2][1];
			var pyjd,$add6,$add7,$add5,$add10,$add8,$add9;
			pyjd = $p['___import___']('pyjd', null);
			if ($p['bool'](images)) {
				if ($p['bool']($p['isinstance'](images, $p['str']))) {
					return $p['__op_add']($add7=$p['__op_add']($add5=$m['getModuleBaseURL'](),$add6=images),$add8='/');
				}
				else {
					return $p['__op_add']($add9=$m['getModuleBaseURL'](),$add10='images/');
				}
			}
			else {
				return $m['getModuleBaseURL']();
			}
			return null;
		};
		$m['getImageBaseURL']['__name__'] = 'getImageBaseURL';

		$m['getImageBaseURL']['__bind_type__'] = 0;
		$m['getImageBaseURL']['__args__'] = [null,null,['images', false]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys', 'os.path', 'pyjd']
*/
