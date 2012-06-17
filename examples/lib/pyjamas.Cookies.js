/* start module: pyjamas.Cookies */
$pyjs.loaded_modules['pyjamas.Cookies'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Cookies'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Cookies'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Cookies"];
	$m.__repr__ = function() { return "<module: pyjamas.Cookies>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Cookies';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Cookies'] = $pyjs.loaded_modules['pyjamas.Cookies'];
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1000 = new $p['int'](1000);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['SimpleCookie'] = $p['___import___']('Cookie.SimpleCookie', 'pyjamas', null, false);
			$m['urllib'] = $p['___import___']('urllib', 'pyjamas');
			$m['datetime'] = $p['___import___']('datetime', 'pyjamas');
			$m['strip'] = $p['___import___']('string.strip', 'pyjamas', null, false);
		}
		$m['getCookie'] = function(key) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return (typeof getCookie2 == "undefined"?$m.getCookie2:getCookie2)(key);
		};
		$m['getCookie'].__name__ = 'getCookie';

		$m['getCookie'].__bind_type__ = 0;
		$m['getCookie'].__args__ = [null,null,['key']];
		$m['getCookie2'] = function(cookie_name) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var cs,$bool2,cookiestr,c;
			cookiestr = $p['getattr']($doc, 'cookie');
			c = $m['SimpleCookie']($p['str'](cookiestr));
			cs = c['get'](cookie_name, null);
			if ((($bool2=cs) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr'](cs, 'value');
			}
			return null;
		};
		$m['getCookie2'].__name__ = 'getCookie2';

		$m['getCookie2'].__bind_type__ = 0;
		$m['getCookie2'].__args__ = [null,null,['cookie_name']];
		$m['setCookie'] = function(name, value, expires, domain, path, secure) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length);
			if (typeof domain == 'undefined') domain=arguments.callee.__args__[5][1];
			if (typeof path == 'undefined') path=arguments.callee.__args__[6][1];
			if (typeof secure == 'undefined') secure=arguments.callee.__args__[7][1];
			var $div1,cookiestr,m,c,d,$add2,$bool3,$add1,_doc,$bool4,$bool5,$div2,$1,$2;
			cookiestr = $p['getattr']($doc, 'cookie');
			c = $m['SimpleCookie']($p['str'](cookiestr));
			c.__setitem__(name, value);
			m = (typeof ($1=c).__array != 'undefined'?
				((typeof $1.__array[$2=name]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(name));
			d = (typeof ($add1=$m['datetime']['datetime']['now']())==typeof ($add2=$m['datetime']['timedelta']($constant_int_0, (typeof ($div1=expires)==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			d = d['strftime']('%a, %d %b %Y %H:%M:%S GMT');
			m.__setitem__('expires', $p['sprintf']('"%s"', d));
			if ((($bool3=domain) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				m.__setitem__('domain', domain);
			}
			if ((($bool4=path) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				m.__setitem__('path', path);
			}
			if ((($bool5=secure) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				m.__setitem__('secure', '');
			}
			c = $pyjs_kwargs_call(c, 'output', null, null, [{header:''}])['strip']();
			_doc = $doc;
			_doc.__is_instance__ && typeof _doc.__setattr__ == 'function' ? _doc.__setattr__('cookie', c) : $p['setattr'](_doc, 'cookie', c); 
			return null;
		};
		$m['setCookie'].__name__ = 'setCookie';

		$m['setCookie'].__bind_type__ = 0;
		$m['setCookie'].__args__ = [null,null,['name'],['value'],['expires'],['domain', null],['path', null],['secure', false]];
		$m['get_crumbs'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var c,docCookie;
			docCookie = $p['getattr']($doc, 'cookie');
			c = $m['SimpleCookie'](docCookie);
			c = $pyjs_kwargs_call(c, 'output', null, null, [{header:''}]);
			return $p['map']($m['strip'], c['$$split']('\n'));
		};
		$m['get_crumbs'].__name__ = 'get_crumbs';

		$m['get_crumbs'].__bind_type__ = 0;
		$m['get_crumbs'].__args__ = [null,null];
		$m['loadCookies'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

 			return null;
		};
		$m['loadCookies'].__name__ = 'loadCookies';

		$m['loadCookies'].__bind_type__ = 0;
		$m['loadCookies'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Cookies */


/* end module: pyjamas.Cookies */


/*
PYJS_DEPS: ['pyjd', 'Cookie.SimpleCookie', 'Cookie', 'urllib', 'datetime', 'string.strip', 'string']
*/
