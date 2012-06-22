/* start module: OnClickTest */
$pyjs['loaded_modules']['OnClickTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['OnClickTest']['__was_initialized__']) return $pyjs['loaded_modules']['OnClickTest'];
	var $m = $pyjs['loaded_modules']['OnClickTest'];
	$m['__repr__'] = function() { return '<module: OnClickTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'OnClickTest';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['onButtonClick'] = function(sender) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['Window']['alert']('function called');
			return null;
		};
		$m['onButtonClick']['__name__'] = 'onButtonClick';

		$m['onButtonClick']['__bind_type__'] = 0;
		$m['onButtonClick']['__args__'] = [null,null,['sender']];
		$m['Object'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'OnClickTest';
			$cls_definition['__md5__'] = '1be314f605f540a480e51fe8551b00cd';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Object', $p['tuple']($bases), $data);
		})();
		$m['OnClickTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'OnClickTest';
			$cls_definition['__md5__'] = '6610f63798c9be4a772ff6e8ff4aa4af';
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
					if (self.prototype['__md5__'] !== '6610f63798c9be4a772ff6e8ff4aa4af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,localFunc;
				localFunc = function(sender) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$m['Window']['alert']('anon object + local func called');
					return null;
				};
				localFunc['__name__'] = 'localFunc';

				localFunc['__bind_type__'] = 0;
				localFunc['__args__'] = [null,null,['sender']];
				obj = $m['Object']();
				$p['setattr'](obj, 'onClick', localFunc);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $m['Button']('function callback', $m['onButtonClick'])) : $p['setattr'](self, 'b', $m['Button']('function callback', $m['onButtonClick'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b2', $m['Button']('object callback', self)) : $p['setattr'](self, 'b2', $m['Button']('object callback', self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b3', $m['Button']('anon object + local func callback', obj)) : $p['setattr'](self, 'b3', $m['Button']('anon object + local func callback', obj)); 
				$m['RootPanel']()['add']($p['getattr'](self, 'b'));
				$m['RootPanel']()['add']($p['getattr'](self, 'b2'));
				$m['RootPanel']()['add']($p['getattr'](self, 'b3'));
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
					if (self.prototype['__md5__'] !== '6610f63798c9be4a772ff6e8ff4aa4af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Window']['alert']('object called');
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OnClickTest', $p['tuple']($bases), $data);
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
			$m['pyjd']['setup']('./OnClickTest.html');
			$m['app'] = $m['OnClickTest']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end OnClickTest */


/* end module: OnClickTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Window']
*/
