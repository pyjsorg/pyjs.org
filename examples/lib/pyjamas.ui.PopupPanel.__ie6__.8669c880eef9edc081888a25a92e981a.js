/* start module: pyjamas.ui.PopupPanel */
$pyjs['loaded_modules']['pyjamas.ui.PopupPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.PopupPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.PopupPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.PopupPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['PopupPanel'] = $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_100 = new $p['int'](100);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
		$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas.ui', null, false);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
		$m['PopupPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.PopupPanel';
			$cls_definition['__md5__'] = '227354ad7c990a1bba558dff26958f72';
			$cls_definition['_props'] = $p['list']([$p['tuple'](['modal', 'Modal', 'Modal', null])]);
			$method = $pyjs__bind_method2('__init__', function(autoHide, modal, rootpanel, glass) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					autoHide = arguments[1];
					modal = arguments[2];
					rootpanel = arguments[3];
					glass = arguments[4];
					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof glass != 'undefined') {
						if (glass !== null && typeof glass['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = glass;
							glass = arguments[5];
						}
					} else 					if (typeof rootpanel != 'undefined') {
						if (rootpanel !== null && typeof rootpanel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rootpanel;
							rootpanel = arguments[5];
						}
					} else 					if (typeof modal != 'undefined') {
						if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modal;
							modal = arguments[5];
						}
					} else 					if (typeof autoHide != 'undefined') {
						if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = autoHide;
							autoHide = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof autoHide == 'undefined') autoHide=arguments['callee']['__args__'][3][1];
				if (typeof modal == 'undefined') modal=arguments['callee']['__args__'][4][1];
				if (typeof rootpanel == 'undefined') rootpanel=arguments['callee']['__args__'][5][1];
				if (typeof glass == 'undefined') glass=arguments['callee']['__args__'][6][1];
				var $bool4,$bool3,element,$bool2,$bool1,$bool6,$bool5,$bool7;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('popupListeners', $p['list']([])) : $p['setattr'](self, 'popupListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('showing', false) : $p['setattr'](self, 'showing', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('autoHide', autoHide) : $p['setattr'](self, 'autoHide', autoHide); 
				kwargs['__setitem__']('Modal', kwargs['get']('Modal', modal));
				if ((($bool1=$p['op_is'](rootpanel, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					rootpanel = $m['RootPanel']();
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootpanel', rootpanel) : $p['setattr'](self, 'rootpanel', rootpanel); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('glass', glass) : $p['setattr'](self, 'glass', glass); 
				if ((($bool2=$p['getattr'](self, 'glass')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('glass', $m['DOM']['createDiv']()) : $p['setattr'](self, 'glass', $m['DOM']['createDiv']()); 
					if ((($bool4=!(($bool3=kwargs['__contains__']('GlassStyleName')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						kwargs['__setitem__']('GlassStyleName', 'gwt-PopupPanelGlass');
					}
				}
				if ((($bool5=kwargs['has_key']('Element')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					element = kwargs['pop']('Element');
				}
				else {
					element = self['createElement']();
				}
				$m['DOM']['setStyleAttribute'](element, 'position', 'absolute');
				$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, element]);
				if ((($bool6=glass) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['setGlassEnabled'](true);
					if ((($bool7=kwargs['__contains__']('GlassStyleName')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self['setGlassStyleName'](kwargs['pop']('GlassStyleName'));
					}
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['autoHide', false],['modal', true],['rootpanel', null],['glass', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				return (typeof ($add1=$m['SimplePanel']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$method = $pyjs__bind_method2('addPopupListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['popupListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addPopupListener'] = $method;
			$method = $pyjs__bind_method2('getPopupLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getIntAttribute'](self['getElement'](), 'offsetLeft');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPopupLeft'] = $method;
			$method = $pyjs__bind_method2('getPopupTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getIntAttribute'](self['getElement'](), 'offsetTop');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPopupTop'] = $method;
			$method = $pyjs__bind_method2('createElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['createDiv']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['createElement'] = $method;
			$method = $pyjs__bind_method2('hide', function(autoClosed) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					autoClosed = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof autoClosed == 'undefined') autoClosed=arguments['callee']['__args__'][3][1];
				var $iter1_nextval,$iter1_type,$bool10,$bool11,$iter1_iter,listener,$iter1_array,$bool8,$bool9,$iter1_idx;
				if ((($bool9=!(($bool8=$p['getattr'](self, 'showing')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('showing', false) : $p['setattr'](self, 'showing', false); 
				if ((($bool10=$p['getattr'](self, 'glass')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self['hideGlass']();
				}
				$m['DOM']['removeEventPreview'](self);
				self['rootpanel']['remove'](self);
				self['onHideImpl'](self['getElement']());
				$iter1_iter = $p['getattr'](self, 'popupListeners');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					if ((($bool11=$p['hasattr'](listener, 'onPopupClosed')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						listener['onPopupClosed'](self, autoClosed);
					}
					else {
						listener(self, autoClosed);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['autoClosed', false]]);
			$cls_definition['hide'] = $method;
			$method = $pyjs__bind_method2('setModal', function(modal) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modal = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modal', modal) : $p['setattr'](self, 'modal', modal); 
				return null;
			}
	, 1, [null,null,['self'],['modal']]);
			$cls_definition['setModal'] = $method;
			$method = $pyjs__bind_method2('getModal', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['isModal']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getModal'] = $method;
			$method = $pyjs__bind_method2('isModal', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'modal');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isModal'] = $method;
			$method = $pyjs__bind_method2('_event_targets_popup', function(event) {
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
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$and1,$bool12,$and2;
				target = $m['DOM']['eventGetTarget'](event);
				return ((($bool12=$and1=target) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12['__nonzero__']=='function'?
							$bool12['__nonzero__']() :
							(typeof $bool12['__len__']=='function'?
								($bool12['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$m['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_event_targets_popup'] = $method;
			$method = $pyjs__bind_method2('onEventPreview', function(event) {
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
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$and9,$bool13,$bool14,$bool15,$bool16,$bool17,$or8,$or5,$or14,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,etype,$bool36,$bool29,$bool28,$bool37,$and8,$or4,$or7,$or6,$or1,$or13,$or3,$or2,$or9,$and3,$and4,$and5,$and6,$and7,$and10,$bool35,$bool32,$bool33,$bool30,$bool31,$or11,$or10,$bool34,$or12;
				etype = $m['DOM']['eventGetType'](event);
				if ((($bool13=$p['op_eq'](etype, 'keydown')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return ((($bool14=$and3=self['onKeyDownPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool16=$or1=!(($bool15=$p['getattr'](self, 'modal')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:self['_event_targets_popup'](event)):$and3);
				}
				else if ((($bool17=$p['op_eq'](etype, 'keyup')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return ((($bool18=$and5=self['onKeyUpPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18['__nonzero__']=='function'?
								$bool18['__nonzero__']() :
								(typeof $bool18['__len__']=='function'?
									($bool18['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool20=$or3=!(($bool19=$p['getattr'](self, 'modal')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:self['_event_targets_popup'](event)):$and5);
				}
				else if ((($bool21=$p['op_eq'](etype, 'keypress')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return ((($bool22=$and7=self['onKeyPressPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool24=$or5=!(($bool23=$p['getattr'](self, 'modal')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:self['_event_targets_popup'](event)):$and7);
				}
				else if ((($bool26=((($bool25=$or7=$p['op_eq'](etype, 'mousedown')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25['__nonzero__']=='function'?
							$bool25['__nonzero__']() :
							(typeof $bool25['__len__']=='function'?
								($bool25['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:$p['op_eq'](etype, 'blur'))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool27=!$p['op_is']($m['DOM']['getCaptureElement'](), null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27['__nonzero__']=='function'?
									$bool27['__nonzero__']() :
									(typeof $bool27['__len__']=='function'?
										($bool27['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return true;
					}
					if ((($bool30=((($bool28=$and9=$p['getattr'](self, 'autoHide')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool29=self['_event_targets_popup'](event)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and9)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
							false :
							(typeof $bool30=='object'?
								(typeof $bool30['__nonzero__']=='function'?
									$bool30['__nonzero__']() :
									(typeof $bool30['__len__']=='function'?
										($bool30['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['hide'](true);
						return true;
					}
				}
				else if ((($bool34=((($bool31=$or9=$p['op_eq'](etype, 'mouseup')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31['__nonzero__']=='function'?
							$bool31['__nonzero__']() :
							(typeof $bool31['__len__']=='function'?
								($bool31['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:((($bool32=$or10=$p['op_eq'](etype, 'click')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32['__nonzero__']=='function'?
							$bool32['__nonzero__']() :
							(typeof $bool32['__len__']=='function'?
								($bool32['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or10:((($bool33=$or11=$p['op_eq'](etype, 'mousemove')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33['__nonzero__']=='function'?
							$bool33['__nonzero__']() :
							(typeof $bool33['__len__']=='function'?
								($bool33['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or11:$p['op_eq']($p['type'], 'dblclick'))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool35=!$p['op_is']($m['DOM']['getCaptureElement'](), null)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
							false :
							(typeof $bool35=='object'?
								(typeof $bool35['__nonzero__']=='function'?
									$bool35['__nonzero__']() :
									(typeof $bool35['__len__']=='function'?
										($bool35['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return true;
					}
				}
				return ((($bool37=$or13=!(($bool36=$p['getattr'](self, 'modal')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36['__nonzero__']=='function'?
							$bool36['__nonzero__']() :
							(typeof $bool36['__len__']=='function'?
								($bool36['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:self['_event_targets_popup'](event));
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onEventPreview'] = $method;
			$method = $pyjs__bind_method2('onKeyDownPreview', function(key, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					modifiers = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return true;
			}
	, 1, [null,null,['self'],['key'],['modifiers']]);
			$cls_definition['onKeyDownPreview'] = $method;
			$method = $pyjs__bind_method2('onKeyPressPreview', function(key, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					modifiers = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return true;
			}
	, 1, [null,null,['self'],['key'],['modifiers']]);
			$cls_definition['onKeyPressPreview'] = $method;
			$method = $pyjs__bind_method2('onKeyUpPreview', function(key, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					modifiers = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return true;
			}
	, 1, [null,null,['self'],['key'],['modifiers']]);
			$cls_definition['onKeyUpPreview'] = $method;
			$method = $pyjs__bind_method2('onHideImpl', function(popup) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					popup = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        var frame = popup['__frame'];
        frame['parentElement']['removeChild'](frame);
        popup['__frame'] = null;
        frame['__popup'] = null;
        
			}
	, 1, [null,null,['self'],['popup']]);
			$cls_definition['onHideImpl'] = $method;
			$method = $pyjs__bind_method2('onShowImpl', function(popup) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					popup = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        var frame = $doc['createElement']('iframe');
        frame['scrolling'] = 'no';
        frame['frameBorder'] = 0;
        frame['style']['position'] = 'absolute';
        frame['src'] = "javascript:''";

        popup['__frame'] = frame;
        frame['__popup'] = popup;
        frame['style']['setExpression']('left', "this['__popup']['offsetLeft']");
        frame['style']['setExpression']('top', "this['__popup']['offsetTop']");
        frame['style']['setExpression']('width', "this['__popup']['offsetWidth']");
        frame['style']['setExpression']('height', "this['__popup']['offsetHeight']");
        popup['parentElement']['insertBefore'](frame, popup);
        
			}
	, 1, [null,null,['self'],['popup']]);
			$cls_definition['onShowImpl'] = $method;
			$method = $pyjs__bind_method2('removePopupListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['popupListeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removePopupListener'] = $method;
			$method = $pyjs__bind_method2('setPopupPosition', function(left, top) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$mul1,$sub3,$sub2,$sub1,$sub4,$bool43,$bool42,$bool41,$bool40,$div2,$div3,$div1,$mul3,$mul2,$div4,element,$bool38,$bool39;
				if ((($bool38=$p['isinstance'](left, $p['basestring'])) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool39=left['endswith']('%')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
							false :
							(typeof $bool39=='object'?
								(typeof $bool39['__nonzero__']=='function'?
									$bool39['__nonzero__']() :
									(typeof $bool39['__len__']=='function'?
										($bool39['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						left = $p['int']($p['__getslice'](left, 0, (typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))));
						left = $p['int']((typeof ($div1=(typeof ($mul1=left)==typeof ($mul2=$m['Window']['getClientWidth']()) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)))==typeof ($div2=$constant_int_100) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2)));
					}
					else if ((($bool40=left['lower']()['endswith']('px')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
							false :
							(typeof $bool40=='object'?
								(typeof $bool40['__nonzero__']=='function'?
									$bool40['__nonzero__']() :
									(typeof $bool40['__len__']=='function'?
										($bool40['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						left = $p['int']($p['__getslice'](left, 0, (typeof ($usub2=$constant_int_2)=='number'?
							-$usub2:
							$p['op_usub']($usub2))));
					}
				}
				if ((($bool41=$p['isinstance'](top, $p['basestring'])) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool42=top['lower']()['endswith']('%')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
							false :
							(typeof $bool42=='object'?
								(typeof $bool42['__nonzero__']=='function'?
									$bool42['__nonzero__']() :
									(typeof $bool42['__len__']=='function'?
										($bool42['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						top = $p['int']($p['__getslice'](top, 0, (typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))));
						top = $p['int']((typeof ($div3=(typeof ($mul3=top)==typeof ($mul4=$m['Window']['getClientHeight']()) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)))==typeof ($div4=$constant_int_100) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)));
					}
					else if ((($bool43=top['endswith']('px')) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
							false :
							(typeof $bool43=='object'?
								(typeof $bool43['__nonzero__']=='function'?
									$bool43['__nonzero__']() :
									(typeof $bool43['__len__']=='function'?
										($bool43['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						top = $p['int']($p['__getslice'](top, 0, (typeof ($usub4=$constant_int_2)=='number'?
							-$usub4:
							$p['op_usub']($usub4))));
					}
				}
				left = $p['max'](left, $constant_int_0);
				top = $p['max'](top, $constant_int_0);
				left = (typeof ($sub1=left)==typeof ($sub2=$m['DOM']['getBodyOffsetLeft']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				top = (typeof ($sub3=top)==typeof ($sub4=$m['DOM']['getBodyOffsetTop']()) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				element = self['getElement']();
				$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
				$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
				return null;
			}
	, 1, [null,null,['self'],['left'],['top']]);
			$cls_definition['setPopupPosition'] = $method;
			$method = $pyjs__bind_method2('isGlassEnabled', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return !$p['op_is']($p['getattr'](self, 'glass'), null);
			}
	, 1, [null,null,['self']]);
			$cls_definition['isGlassEnabled'] = $method;
			$method = $pyjs__bind_method2('setGlassEnabled', function(enabled) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					enabled = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool46,$bool44,$bool45;
				if ((($bool44=enabled) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool45=$p['op_is']($p['getattr'](self, 'glass'), null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
							false :
							(typeof $bool45=='object'?
								(typeof $bool45['__nonzero__']=='function'?
									$bool45['__nonzero__']() :
									(typeof $bool45['__len__']=='function'?
										($bool45['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('glass', $m['DOM']['createDiv']()) : $p['setattr'](self, 'glass', $m['DOM']['createDiv']()); 
						self['setGlassStyleName']();
					}
				}
				else if ((($bool46=!$p['op_is']($p['getattr'](self, 'glass'), null)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['hideGlass']();
				}
				return null;
			}
	, 1, [null,null,['self'],['enabled']]);
			$cls_definition['setGlassEnabled'] = $method;
			$method = $pyjs__bind_method2('getGlassElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'glass');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlassElement'] = $method;
			$method = $pyjs__bind_method2('setGlassStyleName', function(style) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof style == 'undefined') style=arguments['callee']['__args__'][3][1];
				var $bool47;
				if ((($bool47=$p['getattr'](self, 'glass')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['DOM']['setAttribute']($p['getattr'](self, 'glass'), 'className', style);
				}
				return null;
			}
	, 1, [null,null,['self'],['style', 'gwt-PopupPanelGlass']]);
			$cls_definition['setGlassStyleName'] = $method;
			$method = $pyjs__bind_method2('getGlassStyleName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool48;
				if ((($bool48=$p['getattr'](self, 'glass')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48['__nonzero__']=='function'?
								$bool48['__nonzero__']() :
								(typeof $bool48['__len__']=='function'?
									($bool48['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $m['DOM']['setAttribute']($p['getattr'](self, 'glass'), 'className');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlassStyleName'] = $method;
			$method = $pyjs__bind_method2('setGlassPosition', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool50,$add3,$bool49,height,width,$add6,$add4,$add5,top,left;
				top = $m['Window']['getScrollTop']();
				left = $m['Window']['getScrollLeft']();
				height = $m['Window']['getClientHeight']();
				width = $m['Window']['getClientWidth']();
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'position', 'absolute');
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'left', ((($bool49=$p['op_eq'](left, $constant_int_0)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['sprintf']('%s', left)) : ($p['sprintf']('%spx', left))));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'top', ((($bool50=$p['op_eq'](top, $constant_int_0)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50['__nonzero__']=='function'?
							$bool50['__nonzero__']() :
							(typeof $bool50['__len__']=='function'?
								($bool50['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['sprintf']('%s', top)) : ($p['sprintf']('%spx', top))));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'height', $p['sprintf']('%spx', (typeof ($add3=top)==typeof ($add4=height) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))));
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'width', $p['sprintf']('%spx', (typeof ($add5=left)==typeof ($add6=width) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setGlassPosition'] = $method;
			$method = $pyjs__bind_method2('showGlass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Window']['enableScrolling'](false);
				self['setGlassPosition']();
				$doc['body']['appendChild']($p['getattr'](self, 'glass'));
				$m['Window']['addWindowResizeListener'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['showGlass'] = $method;
			$method = $pyjs__bind_method2('hideGlass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Window']['removeWindowResizeListener'](self);
				$doc['body']['removeChild']($p['getattr'](self, 'glass'));
				$m['Window']['enableScrolling'](true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hideGlass'] = $method;
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setGlassPosition']();
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$method = $pyjs__bind_method2('centerBox', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div12,self_top,self_left,width,$sub8,$sub6,self_height,$div10,$div8,$div9,height,$sub7,self_width,center_x,center_y,$div11,$div6,$div7,$sub5,$div5;
				self_width = self['getOffsetWidth']();
				self_height = self['getOffsetHeight']();
				height = $m['Window']['getClientHeight']();
				width = $m['Window']['getClientWidth']();
				center_x = (typeof ($div5=$p['int'](width))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				center_y = (typeof ($div7=$p['int'](height))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8));
				self_top = (typeof ($sub5=center_y)==typeof ($sub6=(typeof ($div9=$p['int'](self_height))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				self_left = (typeof ($sub7=center_x)==typeof ($sub8=(typeof ($div11=$p['int'](self_width))==typeof ($div12=$constant_int_2) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				self['setPopupPosition'](self_left, self_top);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['centerBox'] = $method;
			$method = $pyjs__bind_method2('center', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['centerBox']();
				self['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['center'] = $method;
			$method = $pyjs__bind_method2('add', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setWidget'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('show', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '227354ad7c990a1bba558dff26958f72') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool51,$bool52;
				if ((($bool51=$p['getattr'](self, 'showing')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('showing', true) : $p['setattr'](self, 'showing', true); 
				if ((($bool52=$p['getattr'](self, 'glass')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52['__nonzero__']=='function'?
								$bool52['__nonzero__']() :
								(typeof $bool52['__len__']=='function'?
									($bool52['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['showGlass']();
				}
				$m['DOM']['addEventPreview'](self);
				self['rootpanel']['add'](self);
				self['onShowImpl'](self['getElement']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['show'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PopupPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.PopupPanel', 'PopupPanel', $m['PopupPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.PopupPanel */


/* end module: pyjamas.ui.PopupPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener']
*/
