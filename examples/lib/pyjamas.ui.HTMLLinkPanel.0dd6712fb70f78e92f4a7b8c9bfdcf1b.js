/* start module: pyjamas.ui.HTMLLinkPanel */
$pyjs['loaded_modules']['pyjamas.ui.HTMLLinkPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HTMLLinkPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HTMLLinkPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HTMLLinkPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HTMLLinkPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLLinkPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HTMLLinkPanel'] = $pyjs['loaded_modules']['pyjamas.ui.HTMLLinkPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui', null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['HTMLLinkPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.HTMLLinkPanel';
			$cls_definition['__md5__'] = 'c28f7c47d41d2b125b7fb2cfd3bbb49a';
			$method = $pyjs__bind_method2('__init__', function(html) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = html;
							html = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof html == 'undefined') html=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hyperlinks', $p['list']([])) : $p['setattr'](self, 'hyperlinks', $p['list']([])); 
				$pyjs_kwargs_call($m['HTMLPanel'], '__init__', null, kwargs, [{}, self, html]);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['html', '']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setHTML', function(html) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_clear_hyperlinks']();
				$m['HTMLPanel']['setHTML'](self, html);
				return null;
			}
	, 1, [null,null,['self'],['html']]);
			$cls_definition['setHTML'] = $method;
			$method = $pyjs__bind_method2('_clear_hyperlinks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var el,parent,$bool2,$bool1,hl;
				while ((($bool1=$p['getattr'](self, 'hyperlinks')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					hl = self['hyperlinks']['pop']();
					el = hl['getElement']();
					parent = $m['DOM']['getParent'](el);
					if ((($bool2=!$p['op_is'](parent, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						parent['removeChild'](el);
					}
					hl['setParent'](null);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_clear_hyperlinks'] = $method;
			$method = $pyjs__bind_method2('replaceLinks', function(tagname, use_page_href) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagname = arguments[1];
					use_page_href = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tagname == 'undefined') tagname=arguments['callee']['__args__'][3][1];
				if (typeof use_page_href == 'undefined') use_page_href=arguments['callee']['__args__'][4][1];
				var el,hl,pageloc,$iter1_iter,pagehref,href,$bool8,index,html,$iter1_array,$and2,$iter1_nextval,parent,tags,$and1,$bool3,$bool6,$bool7,$bool4,$bool5,$4,$2,$3,$1,$iter1_type,l,token,$iter1_idx,$len1;
				self['_clear_hyperlinks']();
				tags = self['findTags'](tagname);
				pageloc = $m['Window']['getLocation']();
				pagehref = pageloc['getPageHref']();
				$iter1_iter = tags;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					el = $iter1_nextval;
					href = $p['getattr'](el, 'href');
					l = href['$$split']('#');
					if ((($bool3=!$p['op_eq']((($len1=l) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))), $constant_int_2)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						continue;
					}
					if ((($bool6=((($bool4=$and1=use_page_href) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4['__nonzero__']=='function'?
								$bool4['__nonzero__']() :
								(typeof $bool4['__len__']=='function'?
									($bool4['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool5=(typeof ($1=l)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']($constant_int_0))['startswith'](pagehref)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						continue;
					}
					token = (typeof ($3=l)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_1));
					if ((($bool8=!(($bool7=token) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						continue;
					}
					html = $m['DOM']['getInnerHTML'](el);
					parent = $m['DOM']['getParent'](el);
					index = $m['DOM']['getChildIndex'](parent, el);
					hl = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{'TargetHistoryToken':token, 'HTML':html, 'Element':$m['DOM']['createSpan']()}]);
					$m['DOM']['insertChild'](parent, hl['getElement'](), index);
					parent['removeChild'](el);
					self['children']['insert'](index, hl);
					hl['setParent'](self);
					self['hyperlinks']['append'](hl);
				}
				return null;
			}
	, 1, [null,null,['self'],['tagname', 'a'],['use_page_href', true]]);
			$cls_definition['replaceLinks'] = $method;
			var $bases = new Array($m['HTMLPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTMLLinkPanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HTMLLinkPanel */


/* end module: pyjamas.ui.HTMLLinkPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.Window', 'pyjamas.DOM']
*/
