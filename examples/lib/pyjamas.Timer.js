/* start module: pyjamas.Timer */
$pyjs.loaded_modules['pyjamas.Timer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Timer'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Timer'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Timer"];
	$m.__repr__ = function() { return "<module: pyjamas.Timer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Timer';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Timer'] = $pyjs.loaded_modules['pyjamas.Timer'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas', null, false);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$m['print_exc'] = $p['___import___']('traceback.print_exc', 'pyjamas', null, false);
		$m['Timer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Timer';
			$cls_definition.__md5__ = 'dc8cec9fd0fd70b692243dd5f15ed4a1';
			$cls_definition['__timers'] = $p['set']();
			$cls_definition['__WindowCloseListener'] = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'pyjamas.Timer';
				$cls_definition.__md5__ = 'cbf9a22399d12fd82463048a488912bf';
				$method = $pyjs__bind_method2('onWindowClosed', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
					} else {
						var self = arguments[0];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'cbf9a22399d12fd82463048a488912bf') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					var $iter1_nextval,$iter1_type,timer,$iter1_iter,$iter1_array,$iter1_idx;
					$iter1_iter = $p['list']($p['getattr']($m['Timer'], '__timers'));
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						timer = $iter1_nextval;
						timer['cancel']();
					}
					return null;
				}
	, 1, [null,null,['self']]);
				$cls_definition['onWindowClosed'] = $method;
				$method = $pyjs__bind_method2('onWindowClosing', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
					} else {
						var self = arguments[0];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'cbf9a22399d12fd82463048a488912bf') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}

 					return null;
				}
	, 1, [null,null,['self']]);
				$cls_definition['onWindowClosing'] = $method;
				var $bases = new Array(pyjslib.object);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('__WindowCloseListener', $p['tuple']($bases), $data);
			})();
			$method = $pyjs__bind_method2('__init__', function(delayMillis, notify) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					notify = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof delayMillis == 'undefined') delayMillis=arguments.callee.__args__[3][1];
				if (typeof notify == 'undefined') notify=arguments.callee.__args__[4][1];
				var run,$lambda2,$lambda1,$bool2,$bool3,$bool1,$bool4;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', null) : $p['setattr'](self, '__tid', null); 
				var 				$lambda1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					return self['run']();
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null];
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__onTimer', $lambda1) : $p['setattr'](self, '__onTimer', $lambda1); 
				$m['Window']['addWindowCloseListener']($m['Timer']['__WindowCloseListener']());
				if ((($bool1=!$p['op_is'](notify, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					run = $p['getattr'](notify, 'onTimer', notify);
					if ((($bool3=!(($bool2=$p['callable'](run)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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

						var $pyjs__raise_expr1 = $p['ValueError'];
						var $pyjs__raise_expr2 = 'Programming error: notify must be callable';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					var 					$lambda2 = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

						return run(self);
					};
					$lambda2.__name__ = '$lambda2';

					$lambda2.__bind_type__ = 0;
					$lambda2.__args__ = [null,null];
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__onTimer', $lambda2) : $p['setattr'](self, '__onTimer', $lambda2); 
				}
				self['__impl_init_hook']();
				if ((($bool4=!$p['op_eq'](delayMillis, $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['schedule'](delayMillis);
				}
				return null;
			}
	, 1, [null,null,['self'],['delayMillis', $constant_int_0],['notify', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__impl_init_hook', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__impl_init_hook'] = $method;
			$method = $pyjs__bind_method2('cancel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool5;
				if ((($bool5=$p['op_is']($p['getattr'](self, '__tid'), null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool6=$p['getattr'](self, '__is_repeating')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['__clearInterval']($p['getattr'](self, '__tid'));
				}
				else {
					self['__clearTimeout']($p['getattr'](self, '__tid'));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', null) : $p['setattr'](self, '__tid', null); 
				$m['Timer']['__timers']['discard'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cancel'] = $method;
			$method = $pyjs__bind_method2('run', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer.run() must be overridden or Timer\n                                       must be instantiated with notify keyword\n                                       argument';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$method = $pyjs__bind_method2('schedule', function(delayMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$bool7,$cmp2;
				if ((($bool7=((($cmp1=delayMillis)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) < 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'delay must be positive';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				self['cancel']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__is_repeating', false) : $p['setattr'](self, '__is_repeating', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', self['__setTimeout'](delayMillis)) : $p['setattr'](self, '__tid', self['__setTimeout'](delayMillis)); 
				$m['Timer']['__timers']['add'](self);
				return null;
			}
	, 1, [null,null,['self'],['delayMillis']]);
			$cls_definition['schedule'] = $method;
			$method = $pyjs__bind_method2('scheduleRepeating', function(periodMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					periodMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$bool8,$cmp3;
				if ((($bool8=((($cmp3=periodMillis)===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) < 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'period must be positive';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				self['cancel']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__is_repeating', true) : $p['setattr'](self, '__is_repeating', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', self['__setInterval'](periodMillis)) : $p['setattr'](self, '__tid', self['__setInterval'](periodMillis)); 
				$m['Timer']['__timers']['add'](self);
				return null;
			}
	, 1, [null,null,['self'],['periodMillis']]);
			$cls_definition['scheduleRepeating'] = $method;
			$method = $pyjs__bind_method2('__fire', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool9;
				if ((($bool10=!(($bool9=$p['getattr'](self, '__is_repeating')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					$m['Timer']['__timers']['discard'](self);
				}
				self['__onTimer']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__fire'] = $method;
			$method = $pyjs__bind_method2('__setTimeout', function(delayMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer is not fully implemented for your platform';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self'],['delayMillis']]);
			$cls_definition['__setTimeout'] = $method;
			$method = $pyjs__bind_method2('__clearTimeout', function(tid) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tid = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer is not fully implemented for your platform';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self'],['tid']]);
			$cls_definition['__clearTimeout'] = $method;
			$method = $pyjs__bind_method2('__setInterval', function(periodMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					periodMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer is not fully implemented for your platform';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self'],['periodMillis']]);
			$cls_definition['__setInterval'] = $method;
			$method = $pyjs__bind_method2('__clearInterval', function(tid) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tid = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dc8cec9fd0fd70b692243dd5f15ed4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer is not fully implemented for your platform';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self'],['tid']]);
			$cls_definition['__clearInterval'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Timer', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjd', 'traceback.print_exc', 'traceback']
*/
