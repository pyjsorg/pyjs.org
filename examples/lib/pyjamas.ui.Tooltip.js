/* start module: pyjamas.ui.Tooltip */
$pyjs.loaded_modules['pyjamas.ui.Tooltip'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Tooltip'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Tooltip'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Tooltip"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Tooltip>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Tooltip';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Tooltip'] = $pyjs.loaded_modules['pyjamas.ui.Tooltip'];
	try {

		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_5000 = new $p['int'](5000);
		$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.ui', null, false);
		$m['tooltip_hide_timer'] = null;
		$m['Tooltip'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Tooltip';
			$cls_definition.__md5__ = 'b84ecea4a518d6486ba85bbc76a5925d';
			$method = $pyjs__bind_method2('__init__', function(sender, offsetX, offsetY, contents, show_delay, hide_delay, styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 8 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					offsetX = arguments[2];
					offsetY = arguments[3];
					contents = arguments[4];
					show_delay = arguments[5];
					hide_delay = arguments[6];
					styleName = arguments[7];
					var kwargs = arguments.length >= 9 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b84ecea4a518d6486ba85bbc76a5925d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof styleName != 'undefined') {
						if (styleName !== null && typeof styleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = styleName;
							styleName = arguments[8];
						}
					} else 					if (typeof hide_delay != 'undefined') {
						if (hide_delay !== null && typeof hide_delay['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = hide_delay;
							hide_delay = arguments[8];
						}
					} else 					if (typeof show_delay != 'undefined') {
						if (show_delay !== null && typeof show_delay['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = show_delay;
							show_delay = arguments[8];
						}
					} else 					if (typeof contents != 'undefined') {
						if (contents !== null && typeof contents['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = contents;
							contents = arguments[8];
						}
					} else 					if (typeof offsetY != 'undefined') {
						if (offsetY !== null && typeof offsetY['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = offsetY;
							offsetY = arguments[8];
						}
					} else 					if (typeof offsetX != 'undefined') {
						if (offsetX !== null && typeof offsetX['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = offsetX;
							offsetX = arguments[8];
						}
					} else 					if (typeof sender != 'undefined') {
						if (sender !== null && typeof sender['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = sender;
							sender = arguments[8];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[8];
						}
					} else {
					}
				}
				var $bool2,top,$add2,$add3,$bool1,$add4,$add1,left;
				$pyjs_kwargs_call($m['PopupPanel'], '__init__', null, kwargs, [{}, self, true]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('show_delay', show_delay) : $p['setattr'](self, 'show_delay', show_delay); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hide_delay', hide_delay) : $p['setattr'](self, 'hide_delay', hide_delay); 
				if ((($bool1=$p['isinstance'](contents, $p['basestring'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					contents = $m['HTML'](contents);
				}
				self['add'](contents);
				left = (typeof ($add1=sender['getAbsoluteLeft']())==typeof ($add2=offsetX) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				top = (typeof ($add3=sender['getAbsoluteTop']())==typeof ($add4=offsetY) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['setPopupPosition'](left, top);
				self['setStyleName'](styleName);
				if ((($bool2=$m['tooltip_hide_timer']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tooltip_show_timer', $m['Timer']($constant_int_1, self)) : $p['setattr'](self, 'tooltip_show_timer', $m['Timer']($constant_int_1, self)); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tooltip_show_timer', $m['Timer']($p['getattr'](self, 'show_delay'), self)) : $p['setattr'](self, 'tooltip_show_timer', $m['Timer']($p['getattr'](self, 'show_delay'), self)); 
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['sender'],['offsetX'],['offsetY'],['contents'],['show_delay'],['hide_delay'],['styleName']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('show', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b84ecea4a518d6486ba85bbc76a5925d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['tooltip_hide_timer'] = $m['Timer']($p['getattr'](self, 'hide_delay'), self);
				$m['PopupPanel']['show'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['show'] = $method;
			$method = $pyjs__bind_method2('hide', function(autoClosed) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					autoClosed = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b84ecea4a518d6486ba85bbc76a5925d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof autoClosed == 'undefined') autoClosed=arguments.callee.__args__[3][1];

				self['tooltip_show_timer']['cancel']();
				$m['PopupPanel']['hide'](self, autoClosed);
				return null;
			}
	, 1, [null,null,['self'],['autoClosed', false]]);
			$cls_definition['hide'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b84ecea4a518d6486ba85bbc76a5925d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$bool4;
				if ((($bool3=$p['op_is'](timer, $m['tooltip_hide_timer'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['tooltip_hide_timer'] = null;
				}
				if ((($bool4=$p['op_is'](timer, $p['getattr'](self, 'tooltip_show_timer'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['show']();
				}
				else {
					self['hide']();
				}
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			var $bases = new Array($m['PopupPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Tooltip', $p['tuple']($bases), $data);
		})();
		$m['TooltipListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Tooltip';
			$cls_definition.__md5__ = '37baecc3638af5c787bb8d2f4cbd7ce2';
			$cls_definition['DEFAULT_TOOLTIP_STYLE'] = 'TooltipPopup';
			$cls_definition['DEFAULT_OFFSET_X'] = $constant_int_10;
			$cls_definition['DEFAULT_OFFSET_Y'] = $constant_int_35;
			$method = $pyjs__bind_method2('__init__', function(text, show_delay, hide_delay, styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					show_delay = arguments[2];
					hide_delay = arguments[3];
					styleName = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof show_delay == 'undefined') show_delay=arguments.callee.__args__[4][1];
				if (typeof hide_delay == 'undefined') hide_delay=arguments.callee.__args__[5][1];
				if (typeof styleName == 'undefined') styleName=arguments.callee.__args__[6][1];
				var $bool6,$bool5;
				if ((($bool6=!(($bool5=styleName) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					styleName = $p['getattr'](self, 'DEFAULT_TOOLTIP_STYLE');
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tooltip', null) : $p['setattr'](self, 'tooltip', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text', text) : $p['setattr'](self, 'text', text); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('styleName', styleName) : $p['setattr'](self, 'styleName', styleName); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('show_delay', show_delay) : $p['setattr'](self, 'show_delay', show_delay); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hide_delay', hide_delay) : $p['setattr'](self, 'hide_delay', hide_delay); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('offsetX', $p['getattr'](self, 'DEFAULT_OFFSET_X')) : $p['setattr'](self, 'offsetX', $p['getattr'](self, 'DEFAULT_OFFSET_X')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('offsetY', $p['getattr'](self, 'DEFAULT_OFFSET_Y')) : $p['setattr'](self, 'offsetY', $p['getattr'](self, 'DEFAULT_OFFSET_Y')); 
				return null;
			}
	, 1, [null,null,['self'],['text'],['show_delay', $constant_int_1000],['hide_delay', $constant_int_5000],['styleName', '']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tooltip', $m['Tooltip'](sender, $p['getattr'](self, 'offsetX'), $p['getattr'](self, 'offsetY'), $p['getattr'](self, 'text'), $p['getattr'](self, 'show_delay'), $p['getattr'](self, 'hide_delay'), $p['getattr'](self, 'styleName'))) : $p['setattr'](self, 'tooltip', $m['Tooltip'](sender, $p['getattr'](self, 'offsetX'), $p['getattr'](self, 'offsetY'), $p['getattr'](self, 'text'), $p['getattr'](self, 'show_delay'), $p['getattr'](self, 'hide_delay'), $p['getattr'](self, 'styleName'))); 
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseEnter'] = $method;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('getStyleName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'styleName');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStyleName'] = $method;
			$method = $pyjs__bind_method2('setStyleName', function(styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					styleName = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('styleName', styleName) : $p['setattr'](self, 'styleName', styleName); 
				return null;
			}
	, 1, [null,null,['self'],['styleName']]);
			$cls_definition['setStyleName'] = $method;
			$method = $pyjs__bind_method2('getOffsetX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'offsetX');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOffsetX'] = $method;
			$method = $pyjs__bind_method2('setOffsetX', function(offsetX) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					offsetX = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('offsetX', offsetX) : $p['setattr'](self, 'offsetX', offsetX); 
				return null;
			}
	, 1, [null,null,['self'],['offsetX']]);
			$cls_definition['setOffsetX'] = $method;
			$method = $pyjs__bind_method2('getOffsetY', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'offsetY');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOffsetY'] = $method;
			$method = $pyjs__bind_method2('setOffsetY', function(offsetY) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					offsetY = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('offsetY', offsetY) : $p['setattr'](self, 'offsetY', offsetY); 
				return null;
			}
	, 1, [null,null,['self'],['offsetY']]);
			$cls_definition['setOffsetY'] = $method;
			$method = $pyjs__bind_method2('hide', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '37baecc3638af5c787bb8d2f4cbd7ce2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				if ((($bool7=!$p['op_is']($p['getattr'](self, 'tooltip'), null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['tooltip']['hide']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hide'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TooltipListener', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Tooltip', 'Tooltip', $m['Tooltip']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Tooltip */


/* end module: pyjamas.ui.Tooltip */


/*
PYJS_DEPS: ['pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.Factory', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
