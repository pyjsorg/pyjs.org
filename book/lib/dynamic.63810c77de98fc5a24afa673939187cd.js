/* start module: dynamic */
$pyjs['loaded_modules']['dynamic'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['dynamic']['__was_initialized__']) return $pyjs['loaded_modules']['dynamic'];
	var $m = $pyjs['loaded_modules']['dynamic'];
	$m['__repr__'] = function() { return '<module: dynamic>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_200 = new $p['int'](200);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		;
		$m['AjaxError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'dynamic';
			$cls_definition['__md5__'] = 'e470508acbf89106acbe59a43e68272f';
			var $bases = new Array($p['RuntimeError']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AjaxError', $p['tuple']($bases), $data);
		})();
		$m['createHttpRequest'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var res,$pyjs_try_err;
			if ($p['bool'](typeof $wnd['XMLHttpRequest'] != 'undefined')) {
				return new XMLHttpRequest();
			}
			try {
				res = new ActiveXObject("Msxml2['XMLHTTP']");
				return res;
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		};
		$m['createHttpRequest']['__name__'] = 'createHttpRequest';

		$m['createHttpRequest']['__bind_type__'] = 0;
		$m['createHttpRequest']['__args__'] = [null,null];
		$m['load'] = function(url, onreadystatechange, on_load_fn, async) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
			if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments['callee']['__args__'][3][1];
			if (typeof on_load_fn == 'undefined') on_load_fn=arguments['callee']['__args__'][4][1];
			if (typeof async == 'undefined') async=arguments['callee']['__args__'][5][1];
			var $or5,$or4,$and3,$or3,req,$and4,$pyjs_try_err,$add2,$add1,$or6;
			;
			$wnd['__is_instance__'] && typeof $wnd['__setattr__'] == 'function' ? $wnd['__setattr__']('status', $p['__op_add']($add1='Loading ',$add2=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add1='Loading ',$add2=url)); 
			req = $m['createHttpRequest']();
			if ($p['bool']($p['op_is'](onreadystatechange, null))) {
				onreadystatechange = function(evnt) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $or1,$add4,$or2,$and1,$and2,$add3,str;
					if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr'](req, 'readyState'), $constant_int_4))?($p['bool']($or1=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_200))?$or1:$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0)):$and1))) {
						str = $p['getattr'](req, 'responseText');
						$wnd['__is_instance__'] && typeof $wnd['__setattr__'] == 'function' ? $wnd['__setattr__']('status', $p['__op_add']($add3='Loaded ',$add4=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add3='Loaded ',$add4=url)); 
						if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
							on_load_fn(evnt, req);
						}
					}
					return null;
				};
				onreadystatechange['__name__'] = 'onreadystatechange';

				onreadystatechange['__bind_type__'] = 0;
				onreadystatechange['__args__'] = [null,null,['evnt']];
			}
req['onreadystatechange'] = onreadystatechange;
			req['open']('GET', url, async);
			try {
				req['send'](null);
				if ($p['bool'](async)) {
					return null;
				}
				while ($p['bool'](true)) {
					if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_200))?$or3:($p['bool']($and3=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0))?$p['getattr'](req, 'responseText'):$and3)))) {
						if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
							on_load_fn(null, req);
						}
						return req;
					}
					if ($p['bool'](($p['bool']($or5=!$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0))?$or5:!$p['op_eq']($p['getattr'](req, 'responseText'), '')))) {
						break;
					}
				}
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			throw ($m['AjaxError']('Synchronous error', $p['getattr'](req, 'status')));
			return null;
		};
		$m['load']['__name__'] = 'load';

		$m['load']['__bind_type__'] = 0;
		$m['load']['__args__'] = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
		$m['inject'] = function(values, namespace, names) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
			if (typeof namespace == 'undefined') namespace=arguments['callee']['__args__'][3][1];
			if (typeof names == 'undefined') names=arguments['callee']['__args__'][4][1];
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
			if ($p['bool']($p['op_is'](namespace, null))) {
				namespace = $pyjs['global_namespace'];
			}
			values = $p['dict'](values);
			if ($p['bool']($p['op_is'](names, null))) {
				$iter1_iter = values;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					k = $iter1_nextval['$nextval'];
					v = values['__getitem__'](k);
namespace[k] = v;
				}
			}
			else {
				$iter2_iter = names;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					k = $iter2_nextval['$nextval'];
					v = values['__getitem__'](k);
namespace[k] = v;
				}
			}
			return null;
		};
		$m['inject']['__name__'] = 'inject';

		$m['inject']['__bind_type__'] = 0;
		$m['inject']['__args__'] = [null,null,['values'],['namespace', null],['names', null]];
		$m['activate_css'] = function(targetnode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter3_idx,LC,$iter3_type,$iter3_nextval,scriptnodes,$iter3_iter,$iter3_array,fileref,sn;
			scriptnodes = $p['list'](targetnode['getElementsByTagName']('link'));
			$iter3_iter = $p['range']($p['len'](scriptnodes));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				LC = $iter3_nextval['$nextval'];
				sn = scriptnodes['__getitem__'](LC);
				sn['parentNode']['removeChild'](sn);
				fileref = $m['DOM']['createElement']('link');
				if ($p['bool']((typeof hassattr == "undefined"?$m['hassattr']:hassattr)(sn, 'href'))) {
					fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('href', $p['getattr'](sn, 'href')) : $p['setattr'](fileref, 'href', $p['getattr'](sn, 'href')); 
				}
				else {
					fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('text', $p['getattr'](sn, 'text')) : $p['setattr'](fileref, 'text', $p['getattr'](sn, 'text')); 
				}
				fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('rel', 'stylesheet') : $p['setattr'](fileref, 'rel', 'stylesheet'); 
				fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('type', 'text/css') : $p['setattr'](fileref, 'type', 'text/css'); 
				$doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild'](fileref);
			}
			return null;
		};
		$m['activate_css']['__name__'] = 'activate_css';

		$m['activate_css']['__bind_type__'] = 0;
		$m['activate_css']['__args__'] = [null,null,['targetnode']];
		$m['activate_javascript'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var fileref;
			fileref = $m['DOM']['createElement']('script');
			fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('text', txt) : $p['setattr'](fileref, 'text', txt); 
			fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('type', 'text/javascript') : $p['setattr'](fileref, 'type', 'text/javascript'); 
			fileref['__is_instance__'] && typeof fileref['__setattr__'] == 'function' ? fileref['__setattr__']('language', 'javascript') : $p['setattr'](fileref, 'language', 'javascript'); 
			fileref = fileref['cloneNode'](true);
			$doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild'](fileref);
			return null;
		};
		$m['activate_javascript']['__name__'] = 'activate_javascript';

		$m['activate_javascript']['__bind_type__'] = 0;
		$m['activate_javascript']['__args__'] = [null,null,['txt']];
		$m['eval'] = function(str) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return eval(str);
		};
		$m['eval']['__name__'] = 'eval';

		$m['eval']['__bind_type__'] = 0;
		$m['eval']['__args__'] = [null,null,['str']];
		$m['ajax_eval'] = function(url, on_load_fn, async) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var onready;
			;
			onready = function(evnt, req) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var str;
				str = $p['getattr'](req, 'responseText');
				$m['activate_javascript'](str);
				if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
					on_load_fn();
				}
				return null;
			};
			onready['__name__'] = 'onready';

			onready['__bind_type__'] = 0;
			onready['__args__'] = [null,null,['evnt'],['req']];
			$m['load'](url, null, onready, async);
			return null;
		};
		$m['ajax_eval']['__name__'] = 'ajax_eval';

		$m['ajax_eval']['__bind_type__'] = 0;
		$m['ajax_eval']['__args__'] = [null,null,['url'],['on_load_fn'],['async']];
		$m['__imported__'] = $p['dict']([]);
		$m['ajax_import'] = function(url, namespace, names) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
			if (typeof namespace == 'undefined') namespace=arguments['callee']['__args__'][3][1];
			if (typeof names == 'undefined') names=arguments['callee']['__args__'][4][1];
			var e,name,script,$iter4_nextval,req,module,$iter4_idx,name_getter,$pyjs_try_err,$iter4_type,$iter4_array,$iter4_iter;
			;
			if ($p['bool']($m['__imported__']['has_key'](url))) {
				module = $m['__imported__']['__getitem__'](url);
			}
			else {
				req = $m['load'](url, null, null, false);
				module = null;
				name_getter = $p['list']([]);
				if ($p['bool']($p['op_is'](names, null))) {
					names = $p['list']([]);
				}
				$iter4_iter = names;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					name = $iter4_nextval['$nextval'];
					name_getter['append']($p['sprintf']("$pyjs$moduleObject['%s'] = %s;", $p['tuple']([name, name])));
				}
				script = $p['sprintf']('(function ( ) {\n$pyjs$moduleObject={};\n%s;\n%s\nreturn $pyjs$moduleObject;\n})();', $p['tuple']([$p['getattr'](req, 'responseText'), '\n'['join'](name_getter)]));
				try {
					module = $m['eval'](script);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						e = $m['sys']['exc_info']();
						throw ($m['AjaxError']($p['sprintf']('Error in %s: %s', $p['tuple']([url, $p['getattr'](e, 'message')]))));
					}
				}
				$m['__imported__']['__setitem__'](url, module);
			}
			$m['inject'](module, namespace, names);
			return null;
		};
		$m['ajax_import']['__name__'] = 'ajax_import';

		$m['ajax_import']['__bind_type__'] = 0;
		$m['ajax_import']['__args__'] = [null,null,['url'],['namespace', null],['names', null]];
		$m['load_script'] = function(url, onload, async) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var e,onload_fn,$add6,$add5;
			$wnd['__is_instance__'] && typeof $wnd['__setattr__'] == 'function' ? $wnd['__setattr__']('status', $p['__op_add']($add5='Loading ',$add6=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add5='Loading ',$add6=url)); 
			onload_fn = function() {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
				var $add8,$add7;
				$wnd['__is_instance__'] && typeof $wnd['__setattr__'] == 'function' ? $wnd['__setattr__']('status', $p['__op_add']($add7='Loaded ',$add8=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add7='Loaded ',$add8=url)); 
				if ($p['bool'](!$p['bool']($p['op_is'](onload, null)))) {
					$m['eval'](onload);
				}
				return true;
			};
			onload_fn['__name__'] = 'onload_fn';

			onload_fn['__bind_type__'] = 0;
			onload_fn['__args__'] = [null,null];
			e = $m['DOM']['createElement']('script');
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('src', url) : $p['setattr'](e, 'src', url); 
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('type', 'text/javascript') : $p['setattr'](e, 'type', 'text/javascript'); 
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('language', 'javascript') : $p['setattr'](e, 'language', 'javascript'); 
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('defer', async) : $p['setattr'](e, 'defer', async); 
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('onload', onload_fn) : $p['setattr'](e, 'onload', onload_fn); 
			$doc['getElementsByTagName']('head')['__getitem__']($constant_int_0)['appendChild'](e);
			return null;
		};
		$m['load_script']['__name__'] = 'load_script';

		$m['load_script']['__bind_type__'] = 0;
		$m['load_script']['__args__'] = [null,null,['url'],['onload'],['async']];
		$m['running_timeout'] = $constant_int_0;
		$m['timeout_idname'] = null;
		$m['timeout_url'] = null;
		$m['timeout_on_load_fn'] = null;
		$m['redo_timeout'] = null;
		$m['timeout_id'] = null;
		$m['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);

			$m['timeout_idname'] = idname;
			$m['timeout_url'] = url;
			$m['timeout_on_load_fn'] = on_load_fn;
			$m['redo_timeout'] = timeout;
			if ($p['bool'](($p['cmp']($m['running_timeout'], $constant_int_0) == 1))) {
				return null;
			}
			$m['timeout_id'] = setTimeout((typeof do_ajax_dlink_refresh == "undefined"?$m['do_ajax_dlink_refresh']:do_ajax_dlink_refresh), timeout);
			$m['running_timeout'] = $constant_int_1;
			return null;
		};
		$m['ajax_dlink_refresh']['__name__'] = 'ajax_dlink_refresh';

		$m['ajax_dlink_refresh']['__bind_type__'] = 0;
		$m['ajax_dlink_refresh']['__args__'] = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
		$m['do_ajax_dlink_refresh'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			if ($p['bool']($p['op_eq']((typeof ajax_dlink == "undefined"?$m['ajax_dlink']:ajax_dlink)($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn']), $constant_int_0))) {
				$m['timeout_id'] = null;
				$m['running_timeout'] = $constant_int_0;
				return null;
			}
			$m['timeout_id'] = null;
			$m['running_timeout'] = $constant_int_0;
			$m['ajax_dlink_refresh']($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn'], $m['redo_timeout']);
			return null;
		};
		$m['do_ajax_dlink_refresh']['__name__'] = 'do_ajax_dlink_refresh';

		$m['do_ajax_dlink_refresh']['__bind_type__'] = 0;
		$m['do_ajax_dlink_refresh']['__args__'] = [null,null];
		$m['ajax_dlink'] = function(idname, url, on_load_fn) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var body,xhtoj,onreadystatechange;
			body = $p['getattr']($doc, 'body');
			if ($p['bool']($m['timeout_id'])) {
				clearTimeout($m['timeout_id']);
			}
			onreadystatechange = function() {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
				var txt,jsnode;
				if ($p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'readyState'), $constant_int_4))) {
					jsnode = $constant_int_0;
					if ($p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'status'), $constant_int_200))) {
						txt = $p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'responseText');
						jsnode = null;
						if ($p['bool'](idname)) {
							jsnode = $m['DOM']['getElementById'](idname);
						}
						if ($p['bool']($p['op_is'](jsnode, null))) {
							jsnode = $m['DOM']['createElement']('script');
						}
						$m['activate_javascript'](txt);
						if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
							$wnd['alert'](on_load_fn);
							(typeof test_fn == "undefined"?$m['test_fn']:test_fn)();
						}
						return $constant_int_1;
					}
					else {
						jsnode = $m['DOM']['getElementById'](idname);
						if ($p['bool'](!$p['bool']($p['op_is'](jsnode, null)))) {
							jsnode['__is_instance__'] && typeof jsnode['__setattr__'] == 'function' ? jsnode['__setattr__']('innerHTML', $p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'status')) : $p['setattr'](jsnode, 'innerHTML', $p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'status')); 
						}
					}
				}
				return null;
			};
			onreadystatechange['__name__'] = 'onreadystatechange';

			onreadystatechange['__bind_type__'] = 0;
			onreadystatechange['__args__'] = [null,null];
			xhtoj = $m['createHttpRequest']();
			xhtoj['__is_instance__'] && typeof xhtoj['__setattr__'] == 'function' ? xhtoj['__setattr__']('onreadystatechange', onreadystatechange) : $p['setattr'](xhtoj, 'onreadystatechange', onreadystatechange); 
			xhtoj['open']('GET', url, true);
			xhtoj['send']('');
			return $constant_int_0;
		};
		$m['ajax_dlink']['__name__'] = 'ajax_dlink';

		$m['ajax_dlink']['__bind_type__'] = 0;
		$m['ajax_dlink']['__args__'] = [null,null,['idname'],['url'],['on_load_fn']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
