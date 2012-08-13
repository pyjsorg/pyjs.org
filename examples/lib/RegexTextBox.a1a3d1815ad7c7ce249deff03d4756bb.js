/* start module: RegexTextBox */
$pyjs['loaded_modules']['RegexTextBox'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['RegexTextBox']['__was_initialized__']) return $pyjs['loaded_modules']['RegexTextBox'];
	var $m = $pyjs['loaded_modules']['RegexTextBox'];
	$m['__repr__'] = function() { return '<module: RegexTextBox>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RegexTextBox';
	$m['__name__'] = __mod_name__;
	try {


		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$m['re'] = $p['___import___']('re', null);
		$m['RegexTextBox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'RegexTextBox';
			$cls_definition['__md5__'] = '13fcfb14b2381047afac4aad310bff4d';
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
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['TextBox']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_blurListeners', $p['list']([])) : $p['setattr'](self, '_blurListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_invalidListeners', $p['list']([])) : $p['setattr'](self, '_invalidListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_validListeners', $p['list']([])) : $p['setattr'](self, '_validListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_regex', null) : $p['setattr'](self, '_regex', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setRegex', function(regex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					regex = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_regex', regex) : $p['setattr'](self, '_regex', regex); 
				self['_blurListeners']['append']($p['getattr'](self, 'validate'));
				return null;
			}
	, 1, [null,null,['self'],['regex']]);
			$cls_definition['setRegex'] = $method;
			$method = $pyjs__bind_method2('validate', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _listener,_listeners,$iter1_nextval,$iter1_type,$iter1_iter,$bool2,$bool1,$iter1_array,$iter1_idx;
				if ((($bool1=$p['op_is']($p['getattr'](self, '_regex'), null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return null;
				}
				if ((($bool2=$m['re']['match']($p['getattr'](self, '_regex'), self['getText']())) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					_listeners = $p['getattr'](self, '_validListeners');
				}
				else {
					_listeners = $p['getattr'](self, '_invalidListeners');
				}
				$iter1_iter = _listeners;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					_listener = $iter1_nextval;
					_listener(self);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['validate'] = $method;
			$method = $pyjs__bind_method2('appendInvalidListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_invalidListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['appendInvalidListener'] = $method;
			$method = $pyjs__bind_method2('appendValidListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_validListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['appendValidListener'] = $method;
			$method = $pyjs__bind_method2('onBlur', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['validate']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onBlur'] = $method;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '13fcfb14b2381047afac4aad310bff4d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _listener,$iter2_nextval,$iter2_type,$iter2_iter,$bool3,$iter2_idx,$bool4,type,$iter2_array;
				$m['TextBox']['onBrowserEvent'](self, event);
				type = $m['DOM']['eventGetType'](event);
				if ((($bool3=$p['op_eq'](type, 'blur')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$iter2_iter = $p['getattr'](self, '_blurListeners');
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						_listener = $iter2_nextval;
						if ((($bool4=$p['hasattr'](_listener, 'onBlur')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
							_listener['onBlur'](self);
						}
						else {
							_listener(self);
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			var $bases = new Array($m['TextBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RegexTextBox', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end RegexTextBox */


/* end module: RegexTextBox */


/*
PYJS_DEPS: ['pyjamas.ui.TextBox.TextBox', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.ui.Event', 're']
*/
