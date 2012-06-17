/* start module: WindowTest */
$pyjs.loaded_modules['WindowTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['WindowTest'].__was_initialized__) return $pyjs.loaded_modules['WindowTest'];
	var $m = $pyjs.loaded_modules["WindowTest"];
	$m.__repr__ = function() { return "<module: WindowTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'WindowTest';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_800 = new $p['int'](800);
		var $constant_int_600 = new $p['int'](600);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['WindowTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'WindowTest';
			$cls_definition.__md5__ = '63161147de1649423d2ea127604dba21';
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
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
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var nh,$bool2,$bool1,nw;
				if ((($bool2=!(($bool1=$p['getattr'](self, 'resize_test')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['fail']('onWindowResized called after WindowListener removed');
					return null;
				}
				nh = $m['Window']['getClientHeight']();
				nw = $m['Window']['getClientWidth']();
				self['assertTrue'](!$p['op_eq'](nw, $p['getattr'](self, 'w')));
				self['assertTrue'](!$p['op_eq'](nh, $p['getattr'](self, 'h')));
				self['assertTrue']($p['isinstance'](nw, $p['int']));
				self['assertTrue']($p['isinstance'](nh, $p['int']));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resize_test', false) : $p['setattr'](self, 'resize_test', false); 
				$m['Window']['removeWindowResizeListener'](self);
				$m['Window']['resize']($p['getattr'](self, 'w'), $p['getattr'](self, 'h'));
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$method = $pyjs__bind_method2('testResize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3;
				if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resize_test', true) : $p['setattr'](self, 'resize_test', true); 
				$m['Window']['addWindowResizeListener'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('h', $m['Window']['getClientHeight']()) : $p['setattr'](self, 'h', $m['Window']['getClientHeight']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('w', $m['Window']['getClientWidth']()) : $p['setattr'](self, 'w', $m['Window']['getClientWidth']()); 
				$m['Window']['resize']($constant_int_800, $constant_int_600);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testResize'] = $method;
			$method = $pyjs__bind_method2('testClientDimensions', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,w;
				h = $m['Window']['getClientHeight']();
				w = $m['Window']['getClientWidth']();
				self['assertTrue']($p['isinstance'](w, $p['int']));
				self['assertTrue']($p['isinstance'](h, $p['int']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClientDimensions'] = $method;
			$method = $pyjs__bind_method2('testLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']($m['Window']['getLocation']()['getHref']()['endswith']('LibTest.html'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocation'] = $method;
			$method = $pyjs__bind_method2('testTitle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEquals']($m['Window']['getTitle'](), 'LibTest');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTitle'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('WindowTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end WindowTest */


/* end module: WindowTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'pyjamas.Window', 'pyjamas']
*/
