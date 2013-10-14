/* start module: cookiemonster */
$pyjs['loaded_modules']['cookiemonster'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['cookiemonster']['__was_initialized__']) return $pyjs['loaded_modules']['cookiemonster'];
	var $m = $pyjs['loaded_modules']['cookiemonster'];
	$m['__repr__'] = function() { return '<module: cookiemonster>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'cookiemonster';
	$m['__name__'] = __mod_name__;
	try {
		var $bool3;
		var $constant_int_100000 = new $p['int'](100000);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_10000 = new $p['int'](10000);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['setCookie'] = $p['___import___']('pyjamas.Cookies.setCookie', null, null, false);
		$m['getCookie'] = $p['___import___']('pyjamas.Cookies.getCookie', null, null, false);
		$m['CookieExample'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'cookiemonster';
			$cls_definition['__md5__'] = '9d7149115435e2b84369c207d785568d';
			$cls_definition['COOKIE_NAME'] = 'myCookie';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d7149115435e2b84369c207d785568d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var buttons,info,$pyjs_try_err,panel;
				try {
					$m['setCookie']((typeof COOKIE_NAME == "undefined"?$m['COOKIE_NAME']:COOKIE_NAME), 'setme', $constant_int_100000);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('status', $m['Label']()) : $p['setattr'](self, 'status', $m['Label']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('text_area', $m['TextArea']()) : $p['setattr'](self, 'text_area', $m['TextArea']()); 
				self['text_area']['setText']('Me eat cookie!');
				self['text_area']['setCharacterWidth']($constant_int_80);
				self['text_area']['setVisibleLines']($constant_int_8);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button_py_set', $m['Button']('Set Cookie', self)) : $p['setattr'](self, 'button_py_set', $m['Button']('Set Cookie', self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button_py_read', $m['Button']('Read Cookie ', self)) : $p['setattr'](self, 'button_py_read', $m['Button']('Read Cookie ', self)); 
				buttons = $m['HorizontalPanel']();
				buttons['add']($p['getattr'](self, 'button_py_set'));
				buttons['add']($p['getattr'](self, 'button_py_read'));
				buttons['setSpacing']($constant_int_8);
				info = 'This demonstrates setting and reading information using cookies.';
				panel = $m['VerticalPanel']();
				panel['add']($m['HTML'](info));
				panel['add']($p['getattr'](self, 'text_area'));
				panel['add'](buttons);
				panel['add']($p['getattr'](self, 'status'));
				$m['RootPanel']()['add'](panel);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d7149115435e2b84369c207d785568d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,$bool2,$bool1,cookie_text;
				if ((($bool1=$p['op_eq'](sender['getText'](), 'Set Cookie')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					text = self['text_area']['getText']();
					$pyjs_kwargs_call(null, $m['setCookie'], null, null, [{'path':'/'}, (typeof COOKIE_NAME == "undefined"?$m['COOKIE_NAME']:COOKIE_NAME), text, $constant_int_10000]);
				}
				else {
					cookie_text = $m['getCookie']((typeof COOKIE_NAME == "undefined"?$m['COOKIE_NAME']:COOKIE_NAME));
					if ((($bool2=$p['op_is'](cookie_text, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					}
					else {
						self['status']['setText'](cookie_text);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CookieExample', $p['tuple']($bases), $data);
		})();
		if ((($bool3=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			$m['app'] = $m['CookieExample']();
			$m['app']['onModuleLoad']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end cookiemonster */


/* end module: cookiemonster */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.Cookies.setCookie', 'pyjamas.Cookies', 'pyjamas.Cookies.getCookie']
*/
