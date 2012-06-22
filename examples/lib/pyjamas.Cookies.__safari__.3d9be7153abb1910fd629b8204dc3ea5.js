/* start module: pyjamas.Cookies */
$pyjs['loaded_modules']['pyjamas.Cookies'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Cookies']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Cookies'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Cookies'];
	$m['__repr__'] = function() { return '<module: pyjamas.Cookies>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Cookies';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Cookies'] = $pyjs['loaded_modules']['pyjamas.Cookies'];
	try {
		var $bool1;

		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['SimpleCookie'] = $p['___import___']('Cookie.SimpleCookie', 'pyjamas', null, false);
			$m['urllib'] = $p['___import___']('urllib', 'pyjamas');
			$m['datetime'] = $p['___import___']('datetime', 'pyjamas');
			$m['strip'] = $p['___import___']('string.strip', 'pyjamas', null, false);
		}
		$m['getCookie'] = function(cookie_name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


	var results = document['cookie']['match'] ( '(^|;) ?' +
                        cookie_name + '=([^;]*)(;|$)' );

	if ( results )
		return ( decodeURIComponent ( results[2] ) );
	else
		return null;

    
		};
		$m['getCookie']['__name__'] = 'getCookie';

		$m['getCookie']['__bind_type__'] = 0;
		$m['getCookie']['__args__'] = [null,null,['cookie_name']];
		$m['getCookie2'] = function(cookie_name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var cs,$bool2,cookiestr,c;
			cookiestr = $p['getattr']($doc, 'cookie');
			c = $m['SimpleCookie']($p['str'](cookiestr));
			cs = c['get'](cookie_name, null);
			if ((($bool2=cs) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr'](cs, 'value');
			}
			return null;
		};
		$m['getCookie2']['__name__'] = 'getCookie2';

		$m['getCookie2']['__bind_type__'] = 0;
		$m['getCookie2']['__args__'] = [null,null,['cookie_name']];
		$m['setCookie'] = function(name, value, expires, domain, path, secure) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 6, arguments['length']);
			if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][5][1];
			if (typeof path == 'undefined') path=arguments['callee']['__args__'][6][1];
			if (typeof secure == 'undefined') secure=arguments['callee']['__args__'][7][1];


    if (expires instanceof Date) expires = expires['getTime']();
    if ($p['isUndefined'](domain)) domain = null;
    if ($p['isUndefined'](path)) path = null;
    if ($p['isUndefined'](secure)) secure = false;

    var today = new Date();
    var expiration = new Date();
    if (!expires) expires = 0;
    expiration['setTime'](today['getTime']() + expires);

    var c = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    c += ';expires=' + expiration['toGMTString']();

    if (domain)
        c += ';domain=' + domain;
    if (path)
        c += ';path=' + path;
    if (secure)
        c += ';secure';

    $doc['cookie'] = c;
    
		};
		$m['setCookie']['__name__'] = 'setCookie';

		$m['setCookie']['__bind_type__'] = 0;
		$m['setCookie']['__args__'] = [null,null,['name'],['value'],['expires'],['domain', null],['path', null],['secure', false]];
		$m['get_crumbs'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var c,docCookie;
			docCookie = $p['getattr']($doc, 'cookie');
			c = $m['SimpleCookie'](docCookie);
			c = $pyjs_kwargs_call(c, 'output', null, null, [{'header':''}]);
			return $p['map']($m['strip'], c['$$split']('\n'));
		};
		$m['get_crumbs']['__name__'] = 'get_crumbs';

		$m['get_crumbs']['__bind_type__'] = 0;
		$m['get_crumbs']['__args__'] = [null,null];
		$m['loadCookies'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    var cookies = {};

    var docCookie = $doc['cookie'];

    if (docCookie && docCookie != '') {
        var crumbs = docCookie['split'](';');
        for (var i = 0; i < crumbs['length']; ++i) {
			alert(crumbs['length']);
            var name, value;

            var eqIdx = crumbs[i]['indexOf']('=');
            if (eqIdx == -1) {
                name = crumbs[i];
                value = '';
            } else {
                name = crumbs[i]['substring'](0, eqIdx);
                value = crumbs[i]['substring'](eqIdx + 1);
            }

			alert(name);
			alert(value);

        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
        }
    }

    return cookies;
    
		};
		$m['loadCookies']['__name__'] = 'loadCookies';

		$m['loadCookies']['__bind_type__'] = 0;
		$m['loadCookies']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Cookies */


/* end module: pyjamas.Cookies */


/*
PYJS_DEPS: ['pyjd', 'Cookie.SimpleCookie', 'Cookie', 'urllib', 'datetime', 'string.strip', 'string']
*/
