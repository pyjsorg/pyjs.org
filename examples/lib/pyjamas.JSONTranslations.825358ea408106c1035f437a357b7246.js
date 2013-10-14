/* start module: pyjamas.JSONTranslations */
$pyjs['loaded_modules']['pyjamas.JSONTranslations'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.JSONTranslations']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	$m['__repr__'] = function() { return '<module: pyjamas.JSONTranslations>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONTranslations';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['JSONTranslations'] = $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	try {
		var $pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['NullTranslations'] = $p['___import___']('gettext.NullTranslations', 'pyjamas', null, false);
		$m['re'] = $p['___import___']('re', 'pyjamas');
		$m['loads'] = $p['___import___']('JSONService.loads', 'pyjamas', null, false);
		$m['HTTPRequest'] = $p['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
		try {
			$m['c2py'] = $p['___import___']('gettext.c2py', 'pyjamas', null, false);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
				$m['c2py'] = function(plural) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var f;
					f = null;
eval("f=function(n){return " + plural + ";}")
					return f;
				};
				$m['c2py']['__name__'] = 'c2py';

				$m['c2py']['__bind_type__'] = 0;
				$m['c2py']['__args__'] = [null,null,['plural']];
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		$m['JSONTranslations'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.JSONTranslations';
			$cls_definition['__md5__'] = 'a41e20fd5ba7a49fbda74cc0f6021f59';
			$cls_definition['re_nplurals'] = $m['re']['compile']('nplurals *= *(\\d+)');
			$cls_definition['re_plural'] = $m['re']['compile']('plural *= *([^;]+)');
			$cls_definition['base_url'] = null;
			$cls_definition['domain'] = null;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['NullTranslations'], '__init__', args, kwargs, [{}, self]);
				self['new_catalog']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('new_catalog', function(base_url, domain, lang) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					base_url = arguments[1];
					domain = arguments[2];
					lang = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof base_url == 'undefined') base_url=arguments['callee']['__args__'][3][1];
				if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][4][1];
				if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];
				var $lambda1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_catalog', $p['dict']([])) : $p['setattr'](self, '_catalog', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lang', lang) : $p['setattr'](self, 'lang', lang); 
				var 				$lambda1 = function(n) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return $p['int'](!$p['op_eq'](n, $constant_int_1));
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['n']];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('plural', $lambda1) : $p['setattr'](self, 'plural', $lambda1); 
				return null;
			}
	, 1, [null,null,['self'],['base_url', null],['domain', null],['lang', null]]);
			$cls_definition['new_catalog'] = $method;
			$method = $pyjs__bind_method2('load', function(base_url, domain, lang, onCompletion, onError) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					base_url = arguments[1];
					domain = arguments[2];
					lang = arguments[3];
					onCompletion = arguments[4];
					onError = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof base_url == 'undefined') base_url=arguments['callee']['__args__'][3][1];
				if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][4][1];
				if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];
				if (typeof onCompletion == 'undefined') onCompletion=arguments['callee']['__args__'][6][1];
				if (typeof onError == 'undefined') onError=arguments['callee']['__args__'][7][1];
				var $bool3,$and1,$bool2,url,$bool1,$bool4,$and2;
				if ((($bool1=$p['op_is'](base_url, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					base_url = $p['getattr'](self, 'base_url');
				}
				if ((($bool2=$p['op_is'](domain, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					domain = $p['getattr'](self, 'domain');
				}
				url = base_url;
				if ((($bool4=((($bool3=$and1=!$p['op_is'](domain, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_is'](lang, null):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					url = $p['sprintf']('%s/%s_%s.json', $p['tuple']([url, domain, lang]));
				}
				self['new_catalog'](base_url, domain, lang);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_onCompletion', onCompletion) : $p['setattr'](self, '_onCompletion', onCompletion); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_onError', onError) : $p['setattr'](self, '_onError', onError); 
				$m['HTTPRequest']()['asyncGet'](url, self);
				return null;
			}
	, 1, [null,null,['self'],['base_url', null],['domain', null],['lang', null],['onCompletion', null],['onError', null]]);
			$cls_definition['load'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(text) {
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
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool5;
				self['parse_json'](text);
				if ((($bool5=!$p['op_is']($p['getattr'](self, '_onCompletion'), null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_onCompletion'](text);
				}
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6;
				if ((($bool6=!$p['op_is']($p['getattr'](self, '_onError'), null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6['__nonzero__']=='function'?
								$bool6['__nonzero__']() :
								(typeof $bool6['__len__']=='function'?
									($bool6['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_onError'](text, code);
				}
				throw ($p['RuntimeError'](code));
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onTimeout', function(text) {
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
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onTimeout'] = $method;
			$method = $pyjs__bind_method2('onProgress', function(event) {
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
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onProgress'] = $method;
			$method = $pyjs__bind_method2('parse_json', function(text) {
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
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,json,$iter1_array,v,$1,$2,k,$bool7,$iter1_idx;
				json = $m['loads'](text);
				self['_catalog']['update'](json);
				$iter1_iter = (typeof ($1=$p['getattr'](self, '_catalog'))['__array'] != 'undefined'?
					((typeof $1['__array'][$2='']) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](''))['iteritems']();
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					k = k['lower']();
					if ((($bool7=$p['op_eq'](k, 'plural-forms')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7['__nonzero__']=='function'?
									$bool7['__nonzero__']() :
									(typeof $bool7['__len__']=='function'?
										($bool7['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nplurals', $p['int'](self['re_nplurals']['search'](v)['group']($constant_int_1))) : $p['setattr'](self, 'nplurals', $p['int'](self['re_nplurals']['search'](v)['group']($constant_int_1))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('plural', $m['c2py'](self['re_plural']['search'](v)['group']($constant_int_1))) : $p['setattr'](self, 'plural', $m['c2py'](self['re_plural']['search'](v)['group']($constant_int_1))); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['parse_json'] = $method;
			$method = $pyjs__bind_method2('_parse', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['load'](url);
				return null;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['_parse'] = $method;
			$method = $pyjs__bind_method2('gettext', function(message) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tmsg,$4,$3,$bool8,$bool9;
				tmsg = self['_catalog']['get'](message);
				if ((($bool8=$p['op_is'](tmsg, null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool9=$p['getattr'](self, '_fallback')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9['__nonzero__']=='function'?
									$bool9['__nonzero__']() :
									(typeof $bool9['__len__']=='function'?
										($bool9['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return self['_fallback']['gettext'](message);
					}
					return message;
				}
				return (typeof ($3=tmsg)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0));
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['gettext'] = $method;
			$method = $pyjs__bind_method2('ngettext', function(msgid1, msgid2, n) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					msgid1 = arguments[1];
					msgid2 = arguments[2];
					n = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a41e20fd5ba7a49fbda74cc0f6021f59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tmsg,$bool10,$bool11,$6,$5,$bool12;
				tmsg = self['_catalog']['get'](msgid1);
				if ((($bool10=$p['op_is'](tmsg, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool11=$p['getattr'](self, '_fallback')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return self['_fallback']['ngettext'](msgid1, msgid2, n);
					}
					if ((($bool12=self['plural'](n)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return msgid2;
					}
					return msgid1;
				}
				else {
					return (typeof ($5=tmsg)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=self['plural'](n)]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](self['plural'](n)));
				}
				return null;
			}
	, 1, [null,null,['self'],['msgid1'],['msgid2'],['n']]);
			$cls_definition['ngettext'] = $method;
			$cls_definition['lgettext'] = $p['staticmethod']($cls_definition['gettext']);
			$cls_definition['lngettext'] = $p['staticmethod']($cls_definition['ngettext']);
			$cls_definition['ugettext'] = $p['staticmethod']($cls_definition['gettext']);
			$cls_definition['ungettext'] = $p['staticmethod']($cls_definition['ngettext']);
			var $bases = new Array($m['NullTranslations']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONTranslations', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.JSONTranslations */


/* end module: pyjamas.JSONTranslations */


/*
PYJS_DEPS: ['gettext.NullTranslations', 'gettext', 're', 'JSONService.loads', 'JSONService', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'gettext.c2py']
*/
