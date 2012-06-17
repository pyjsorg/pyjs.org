/* start module: Screen */
$pyjs.loaded_modules['Screen'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Screen'].__was_initialized__) return $pyjs.loaded_modules['Screen'];
	var $m = $pyjs.loaded_modules["Screen"];
	$m.__repr__ = function() { return "<module: Screen>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Screen';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['DialogBoxModal'] = $p['___import___']('Popups.DialogBoxModal', null, null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
		$m['log'] = $m['logging']['getAppendLogger']((typeof __name__ == "undefined"?$m.__name__:__name__), $p['getattr']($m['logging'], 'DEBUG'), $p['getattr']($m['logging'], 'PLAIN_FORMAT'));
		$m['Application'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Screen';
			$cls_definition.__md5__ = 'fb489aa442a07332a7189051761b6e41';
			$method = $pyjs__bind_method2('__init__', function(screen, title, width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					screen = arguments[1];
					title = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fb489aa442a07332a7189051761b6e41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DialogBoxModal']['__init__'](self, title, null, false, screen);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('screen', screen) : $p['setattr'](self, 'screen', screen); 
				self['setText'](title);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dragged', false) : $p['setattr'](self, 'dragged', false); 
				return null;
			}
	, 1, [null,null,['self'],['screen'],['title'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype.__md5__ !== 'fb489aa442a07332a7189051761b6e41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DialogBoxModal']['onMouseDown'](self, sender, x, y);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dragged', false) : $p['setattr'](self, 'dragged', false); 
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
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
					if (self.prototype.__md5__ !== 'fb489aa442a07332a7189051761b6e41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$bool2,$bool3,$bool1,$bool4;
				if ((($bool2=((($bool1=$or1=!$p['op_eq']($p['getattr'](self, 'dragStartX'), x)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!$p['op_eq']($p['getattr'](self, 'dragStartY'), y))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					if ((($bool4=!(($bool3=$p['getattr'](self, 'dragged')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						self['screen']['raise_app'](self);
					}
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dragged', true) : $p['setattr'](self, 'dragged', true); 
				}
				$m['DialogBoxModal']['onMouseMove'](self, sender, x, y);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
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
					if (self.prototype.__md5__ !== 'fb489aa442a07332a7189051761b6e41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool5;
				$m['DialogBoxModal']['onMouseUp'](self, sender, x, y);
				if ((($bool6=!(($bool5=$p['getattr'](self, 'dragged')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['screen']['raise_or_lower'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
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
					if (self.prototype.__md5__ !== 'fb489aa442a07332a7189051761b6e41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				if ((($bool7=$p['op_eq'](sender, $p['getattr'](self, 'closeButton'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['screen']['close_app'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DialogBoxModal']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Application', $p['tuple']($bases), $data);
		})();
		$m['Screen'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Screen';
			$cls_definition.__md5__ = 'c86dd0b2ed7977a0c756a24b45a85adc';
			$method = $pyjs__bind_method2('__init__', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['AbsolutePanel']['__init__'](self);
				self['setWidth'](width);
				self['setHeight'](height);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('window', $p['dict']([])) : $p['setattr'](self, 'window', $p['dict']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('window_zindex', $p['dict']([])) : $p['setattr'](self, 'window_zindex', $p['dict']([])); 
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add_app', function(app, title, width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					title = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub1,$len1,$sub2,sa;
				sa = $m['Application'](self, title, width, height);
				sa['setWidget'](app);
				$p['getattr'](self, 'window').__setitem__(title, sa);
				$p['getattr'](self, 'window_zindex').__setitem__(title, (typeof ($sub1=(($len1=$p['getattr'](self, 'window')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
				return sa;
			}
	, 1, [null,null,['self'],['app'],['title'],['width'],['height']]);
			$cls_definition['add_app'] = $method;
			$method = $pyjs__bind_method2('set_app_zindex', function(title, zi) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					zi = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var w,$2,$1;
				w = (typeof ($1=$p['getattr'](self, 'window')).__array != 'undefined'?
					((typeof $1.__array[$2=title]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(title));
				$p['getattr'](self, 'window_zindex').__setitem__(title, zi);
				w['setzIndex'](zi);
				return null;
			}
	, 1, [null,null,['self'],['title'],['zi']]);
			$cls_definition['set_app_zindex'] = $method;
			$method = $pyjs__bind_method2('lower_app', function(app) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var zi,app_zi,$iter1_iter,$4,$iter1_array,$iter1_idx,$iter1_nextval,$8,$6,$7,$bool8,$5,$3,$cmp1,$iter1_type,$cmp2,$add2,$add1,t,w;
				app_zi = (typeof ($3=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
					((typeof $3.__array[$4=$p['getattr'](app, 'identifier')]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($p['getattr'](app, 'identifier')));
				$iter1_iter = self['window_zindex']['keys']();
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					t = $iter1_nextval;
					w = (typeof ($5=$p['getattr'](self, 'window')).__array != 'undefined'?
						((typeof $5.__array[$6=t]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(t));
					zi = (typeof ($7=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
						((typeof $7.__array[$8=t]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(t));
					if ((($bool8=((($cmp1=zi)===($cmp2=app_zi)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8.__nonzero__=='function'?
									$bool8.__nonzero__() :
									(typeof $bool8.__len__=='function'?
										($bool8.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['set_app_zindex'](t, (typeof ($add1=zi)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
					}
				}
				self['set_app_zindex']($p['getattr'](app, 'identifier'), $constant_int_0);
				return null;
			}
	, 1, [null,null,['self'],['app']]);
			$cls_definition['lower_app'] = $method;
			$method = $pyjs__bind_method2('raise_app', function(app) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var zi,app_zi,$iter2_iter,$sub3,$sub6,$sub5,$sub4,$iter2_type,$iter2_idx,$12,$9,$bool9,$14,$cmp4,$iter2_nextval,$10,$11,$cmp3,$13,$len2,t,w,$iter2_array;
				app_zi = (typeof ($9=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
					((typeof $9.__array[$10=$p['getattr'](app, 'identifier')]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($p['getattr'](app, 'identifier')));
				$iter2_iter = self['window_zindex']['keys']();
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					t = $iter2_nextval;
					w = (typeof ($11=$p['getattr'](self, 'window')).__array != 'undefined'?
						((typeof $11.__array[$12=t]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(t));
					zi = (typeof ($13=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
						((typeof $13.__array[$14=t]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(t));
					if ((($bool9=((($cmp3=zi)===($cmp4=app_zi)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9.__nonzero__=='function'?
									$bool9.__nonzero__() :
									(typeof $bool9.__len__=='function'?
										($bool9.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['set_app_zindex'](t, (typeof ($sub3=zi)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)));
					}
				}
				app_zi = (typeof ($sub5=(($len2=$p['getattr'](self, 'window')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				self['set_app_zindex']($p['getattr'](app, 'identifier'), app_zi);
				return null;
			}
	, 1, [null,null,['self'],['app']]);
			$cls_definition['raise_app'] = $method;
			$method = $pyjs__bind_method2('raise_or_lower', function(app) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$bool10,app_zi,$sub8,$len3,$sub7;
				app_zi = (typeof ($15=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
					((typeof $15.__array[$16=$p['getattr'](app, 'identifier')]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($p['getattr'](app, 'identifier')));
				if ((($bool10=!$p['op_eq'](app_zi, (typeof ($sub7=(($len3=$p['getattr'](self, 'window')) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))))==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['raise_app'](app);
				}
				else {
					self['lower_app'](app);
				}
				return null;
			}
	, 1, [null,null,['self'],['app']]);
			$cls_definition['raise_or_lower'] = $method;
			$method = $pyjs__bind_method2('close_app', function(app) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c86dd0b2ed7977a0c756a24b45a85adc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var zi,$bool11,$iter3_type,app_zi,$iter3_idx,$21,$20,$22,$24,$sub9,$iter3_iter,$bool12,$bool13,$sub10,$cmp6,$iter3_array,$23,$cmp5,$17,$18,$19,t,w,$iter3_nextval;
				app_zi = (typeof ($17=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
					((typeof $17.__array[$18=$p['getattr'](app, 'identifier')]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($p['getattr'](app, 'identifier')));
				$iter3_iter = self['window_zindex']['keys']();
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					t = $iter3_nextval;
					w = (typeof ($19=$p['getattr'](self, 'window')).__array != 'undefined'?
						((typeof $19.__array[$20=t]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__(t));
					zi = (typeof ($21=$p['getattr'](self, 'window_zindex')).__array != 'undefined'?
						((typeof $21.__array[$22=t]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__(t));
					if ((($bool11=((($cmp5=zi)===($cmp6=app_zi)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11.__nonzero__=='function'?
									$bool11.__nonzero__() :
									(typeof $bool11.__len__=='function'?
										($bool11.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['set_app_zindex'](t, (typeof ($sub9=zi)==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10)));
					}
				}
				t = (typeof ($23=$p['getattr'](self, 'window')).__array != 'undefined'?
					((typeof $23.__array[$24=$p['getattr'](app, 'identifier')]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($p['getattr'](app, 'identifier')));
				if ((($bool13=!(($bool12=self['remove'](t)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['Window']['alert']($p['sprintf']('%s not in app', $p['getattr'](app, 'identifier')));
				}
				t['hide']();
				$p['getattr'](self, 'window').__delitem__($p['getattr'](app, 'identifier'));
				$p['getattr'](self, 'window_zindex').__delitem__($p['getattr'](app, 'identifier'));
				return null;
			}
	, 1, [null,null,['self'],['app']]);
			$cls_definition['close_app'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Screen', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Screen */


/* end module: Screen */


/*
PYJS_DEPS: ['Popups.DialogBoxModal', 'Popups', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window', 'pyjamas.logging']
*/
