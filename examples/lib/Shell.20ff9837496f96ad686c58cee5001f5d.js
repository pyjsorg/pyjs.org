/* start module: Shell */
$pyjs['loaded_modules']['Shell'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Shell']['__was_initialized__']) return $pyjs['loaded_modules']['Shell'];
	var $m = $pyjs['loaded_modules']['Shell'];
	$m['__repr__'] = function() { return '<module: Shell>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Shell';
	$m['__name__'] = __mod_name__;
	try {
		var $bool4,$pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_500 = new $p['int'](500);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['VerticalDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.VerticalDemoSlider', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['TextWindow'] = $p['___import___']('textconsole.TextWindow', null, null, false);
		$m['Screen'] = $p['___import___']('Screen.Screen', null, null, false);
		try {
			$m['pyjslib'] = $p['___import___']('pyjslib', null);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
			}
		}
		$m['sys'] = $p['___import___']('sys', null);
		$m['slider_app'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var b;
			b = $m['VerticalDemoSlider']($constant_int_0, $constant_int_100);
			b['setWidth']('20px');
			b['setHeight']('100px');
			return b;
		};
		$m['slider_app']['__name__'] = 'slider_app';

		$m['slider_app']['__bind_type__'] = 0;
		$m['slider_app']['__args__'] = [null,null];
		$m['text_app'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,j,$iter1_iter,$add2,$iter2_idx,$add1,$iter1_idx,w,$iter2_type,$iter2_array,$iter1_array;
			w = $m['TextWindow']($constant_int_80, $constant_int_20, $constant_int_400, $constant_int_300);
			$m['RootPanel']()['add'](w);
			w['setText']($constant_int_0, $constant_int_0, 'hello');
			w['setText']($constant_int_0, $constant_int_1, 'fred');
			w['setText']($constant_int_0, $constant_int_5, 'goodbye');
			$iter1_iter = $p['range']($constant_int_40);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$iter2_iter = $p['range']($constant_int_2);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					j = $iter2_nextval;
					w['setText'](i, (typeof ($add1=j)==typeof ($add2=$constant_int_10) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)), '.');
				}
			}
			return w;
		};
		$m['text_app']['__name__'] = 'text_app';

		$m['text_app']['__bind_type__'] = 0;
		$m['text_app']['__args__'] = [null,null];
		$m['ShellApp'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Shell';
			$cls_definition['__md5__'] = '51dbb040fbd65054dc37e6f97131e6ea';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51dbb040fbd65054dc37e6f97131e6ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,w;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('GridTest', null) : $p['setattr'](self, 'GridTest', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('screen', $m['Screen']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']())) : $p['setattr'](self, 'screen', $m['Screen']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']())); 
				w = $m['text_app']();
				a = self['screen']['add_app'](w, 'text 1', $constant_int_400, $constant_int_300);
				a['show']();
				w = $m['text_app']();
				a = self['screen']['add_app'](w, 'text 2', $constant_int_400, $constant_int_300);
				a['show']();
				w = $m['slider_app']();
				a = self['screen']['add_app'](w, 's', $constant_int_20, $constant_int_100);
				a['show']();
				$m['RootPanel']()['add']($p['getattr'](self, 'screen'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_apps', $p['list']([])) : $p['setattr'](self, 'loading_apps', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_app', null) : $p['setattr'](self, 'loading_app', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_desc', null) : $p['setattr'](self, 'loading_desc', null); 
				self['load_app']('../../gridtest/output/', 'GridTest', 'grid test');
				self['load_app']('../../widgets/output/', 'Widgets', 'clock');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('load_app', function(path, appname, description) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					path = arguments[1];
					appname = arguments[2];
					description = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51dbb040fbd65054dc37e6f97131e6ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_is']($p['getattr'](self, 'loading_app'), null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['add_app'](path, appname, description);
				}
				else {
					self['loading_apps']['append']($p['tuple']([path, appname, description]));
				}
				return null;
			}
	, 1, [null,null,['self'],['path'],['appname'],['description']]);
			$cls_definition['load_app'] = $method;
			$method = $pyjs__bind_method2('add_app', function(path, appname, description) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					path = arguments[1];
					appname = arguments[2];
					description = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51dbb040fbd65054dc37e6f97131e6ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_app', appname) : $p['setattr'](self, 'loading_app', appname); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_desc', description) : $p['setattr'](self, 'loading_desc', description); 
				try {
					$m['sys']['setloadpath'](path);
					$m['pyjslib']['preload_app_modules']($m['sys']['getloadpath'](), $p['list']([$p['list']([appname])]), self, $constant_int_1, null);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['path'],['appname'],['description']]);
			$cls_definition['add_app'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timerid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					timerid = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51dbb040fbd65054dc37e6f97131e6ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['importDone']();
				return null;
			}
	, 1, [null,null,['self'],['timerid']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('importDone', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51dbb040fbd65054dc37e6f97131e6ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,description,g,appname,$bool2,$bool3,path,mod;
				mod = $m['pyjslib']['get_module']($p['getattr'](self, 'loading_app'));
				if ((($bool2=$p['op_is'](mod, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['Timer']($constant_int_500, self);
					return null;
				}
				g = mod['AppInit']();
				a = self['screen']['add_app'](g, $p['getattr'](self, 'loading_desc'), $constant_int_400, $constant_int_300);
				a['show']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_desc', null) : $p['setattr'](self, 'loading_desc', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loading_app', null) : $p['setattr'](self, 'loading_app', null); 
				if ((($bool3=$p['getattr'](self, 'loading_apps')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					var $tupleassign1 = $p['__ass_unpack'](self['loading_apps']['pop'](), 3, null);
					path = $tupleassign1[0];
					appname = $tupleassign1[1];
					description = $tupleassign1[2];
					self['add_app'](path, appname, description);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['importDone'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ShellApp', $p['tuple']($bases), $data);
		})();
		if ((($bool4=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('./public/Shell.html');
			$m['app'] = $m['ShellApp']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Shell */


/* end module: Shell */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Controls.VerticalDemoSlider', 'pyjamas.ui.Controls', 'pyjamas.Window', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'textconsole.TextWindow', 'textconsole', 'Screen.Screen', 'Screen', 'pyjslib', 'sys']
*/
