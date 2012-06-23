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
        (o['$H'] ? o['$H'] : (o['$H'] = $m['getNextHashId']()));
    
		};
		$m['getHashCode']['__name__'] = 'getHashCode';

		$m['getHashCode']['__bind_type__'] = 0;
		$m['getHashCode']['__args__'] = [null,null,['o']];
		$m['getModuleName'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    return $moduleName;
    
		};
		$m['getModuleName']['__name__'] = 'getModuleName';

		$m['getModuleName']['__bind_type__'] = 0;
		$m['getModuleName']['__args__'] = [null,null];
		$m['getModuleBaseURL'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    // this is intentionally not using $doc, because we want
    // the module's own url
    var s = document['location']['href'];

    // Pull off any hash.
    var i = s['indexOf']('#');
    if (i != -1)
        s = s['substring'](0, i);

    // Pull off any query string.
    i = s['indexOf']('?');
    if (i != -1)
        s = s['substring'](0, i);

    // Rip off everything after the last slash.
    i = s['lastIndexOf']('/');
    if (i != -1)
        s = s['substring'](0, i);

    return (s['length'] > 0) ? s + "/" : "";
    
		};
		$m['getModuleBaseURL']['__name__'] = 'getModuleBaseURL';

		$m['getModuleBaseURL']['__bind_type__'] = 0;
		$m['getModuleBaseURL']['__args__'] = [null,null];
		$m['getImageBaseURL'] = function(images) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][2][1];
			var $add3,pyjd,$add6,$add7,$add4,$add5,$add8;
			pyjd = $p['___import___']('pyjd', null);
			if ($p['bool'](images)) {
				if ($p['bool']($p['isinstance'](images, $p['str']))) {
					return $p['__op_add']($add5=$p['__op_add']($add3=$m['getModuleBaseURL'](),$add4=images),$add6='/');
				}
				else {
					return $p['__op_add']($add7=$m['getModuleBaseURL'](),$add8='images/');
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
PYJS_DEPS: ['pyjd']
*/
