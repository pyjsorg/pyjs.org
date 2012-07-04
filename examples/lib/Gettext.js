/* start module: Gettext */
$pyjs['loaded_modules']['Gettext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Gettext']['__was_initialized__']) return $pyjs['loaded_modules']['Gettext'];
	var $m = $pyjs['loaded_modules']['Gettext'];
	$m['__repr__'] = function() { return '<module: Gettext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Gettext';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_4 = new $p['int'](4);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['i18n'] = $p['___import___']('i18n.i18n', null, null, false);
		$m['_'] = $p['___import___']('i18n._', null, null, false);
		$m['ngettext'] = $p['___import___']('i18n.ngettext', null, null, false);
		$m['pygwt'] = $p['___import___']('pygwt', null);
		$m['lang'] = $p['list'](['nl_NL', 'de_DE', 'en_US']);
		$m['GettextExample'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Gettext';
			$cls_definition['__md5__'] = 'fcd9fde765eab2b5ccbdd37eb33144f6';
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
					if (self.prototype['__md5__'] !== 'fcd9fde765eab2b5ccbdd37eb33144f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod1,$mod2;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'teststyle'}, $m['_']('Click me'), $p['getattr'](self, 'greet')])) : $p['setattr'](self, 'b', $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'teststyle'}, $m['_']('Click me'), $p['getattr'](self, 'greet')])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('h', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, $m['_']('<b>Hello World</b> (html)')])) : $p['setattr'](self, 'h', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, $m['_']('<b>Hello World</b> (html)')])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('l', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'teststyle'}, $m['_']('Hello World (label)')])) : $p['setattr'](self, 'l', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'teststyle'}, $m['_']('Hello World (label)')])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('base', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, (typeof ($mod1=$m['_']('Hello from %s'))==typeof ($mod2=$m['pygwt']['getModuleBaseURL']()) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))])) : $p['setattr'](self, 'base', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, (typeof ($mod1=$m['_']('Hello from %s'))==typeof ($mod2=$m['pygwt']['getModuleBaseURL']()) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))])); 
				$m['RootPanel']()['add']($p['getattr'](self, 'b'));
				$m['RootPanel']()['add']($p['getattr'](self, 'h'));
				$m['RootPanel']()['add']($p['getattr'](self, 'l'));
				$m['RootPanel']()['add']($p['getattr'](self, 'base'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('change_texts', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fcd9fde765eab2b5ccbdd37eb33144f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$mod5,$mod4,$mod6,$iter1_array,$mod3,$iter1_idx;
				self['b']['setText']($m['_']('Click me'));
				self['h']['setHTML']($m['_']('<b>Hello World</b> (html)'));
				self['l']['setText']($m['_']('Hello World (label)'));
				text = $p['list']([(typeof ($mod3=$m['_']('Hello from %s'))==typeof ($mod4=$m['pygwt']['getModuleBaseURL']()) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4))]);
				$iter1_iter = $p['range']($constant_int_4);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					text['append']((typeof ($mod5=$m['ngettext']('%(num)d single', '%(num)d plural', i))==typeof ($mod6=$pyjs_kwargs_call(null, $p['dict'], null, null, [{'num':i}])) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)));
				}
				text = '<br />'['join'](text);
				self['base']['setHTML'](text);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['change_texts'] = $method;
			$method = $pyjs__bind_method2('greet', function(fred) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fred = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fcd9fde765eab2b5ccbdd37eb33144f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $1,$2;
				fred['setText']($m['_']('No, really click me!'));
				$m['Window']['alert']($m['_']('Hello, there!'));
				$pyjs_kwargs_call($m['i18n'], 'load', null, null, [{'lang':(typeof ($1=$m['lang'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)), 'onCompletion':$p['getattr'](self, 'change_texts')}]);
				$m['lang']['append']($m['lang']['pop']($constant_int_0));
				return null;
			}
	, 1, [null,null,['self'],['fred']]);
			$cls_definition['greet'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GettextExample', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['pyjd']['setup']('public/Hello.html?fred=foo#me');
			$m['ge'] = $m['GettextExample']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Gettext */


/* end module: Gettext */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.Window', 'i18n.i18n', 'i18n', 'i18n._', 'i18n.ngettext', 'pygwt']
*/
