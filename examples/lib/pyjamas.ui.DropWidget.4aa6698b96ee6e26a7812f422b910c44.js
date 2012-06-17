/* start module: pyjamas.ui.DropWidget */
$pyjs.loaded_modules['pyjamas.ui.DropWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DropWidget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DropWidget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DropWidget"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DropWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DropWidget';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['DropWidget'] = $pyjs.loaded_modules['pyjamas.ui.DropWidget'];
	try {
		var $bool6;

		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['dndHelper'] = $p['___import___']('pyjamas.dnd.DNDHelper.dndHelper', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
		$m['DropWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DropWidget';
			$cls_definition.__md5__ = 'a4e0b183060f6114478a12f34db9dcf2';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget', $p['tuple']($bases), $data);
		})();
		$m['Html5DropWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DropWidget';
			$cls_definition.__md5__ = '1400baa270b8b1100f1cfaabed1a910f';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						var kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kw = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1400baa270b8b1100f1cfaabed1a910f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $or1,$or2,$bool2,$bool3,$bool1;
				if ((($bool3=((($bool2=$or1=!(($bool1=$p['hasattr'](self, 'attached')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						 true ) )?$or1:kw)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs_kwargs_call($m['Widget'], '__init__', null, kw, [{}, self]);
				}
				$m['DropHandler']['__init__'](self);
				self['addDropListener'](self);
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Widget'],$m['DropHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Html5DropWidget', $p['tuple']($bases), $data);
		})();
		$m['EmulatedDropWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DropWidget';
			$cls_definition.__md5__ = 'e9ef48f584b408adb01339a195513e6e';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						var kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kw = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e9ef48f584b408adb01339a195513e6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['Html5DropWidget'], '__init__', null, kw, [{}, self]);
				$m['dndHelper']['registerTarget'](self);
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Html5DropWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('EmulatedDropWidget', $p['tuple']($bases), $data);
		})();
		$m['init'] = function(is_native) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof is_native == 'undefined') is_native=arguments.callee.__args__[2][1];
			var html5_dnd,$bool5,$bool4;
			if ((($bool4=$p['op_is'](is_native, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				html5_dnd = $p['hasattr']($m['DOM']['createElement']('span'), 'draggable');
			}
			else {
				html5_dnd = is_native;
			}
			if ((($bool5=html5_dnd) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$m['DropWidget'] = $m['Html5DropWidget'];
			}
			else {
				$m['DropWidget'] = $m['EmulatedDropWidget'];
			}
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null,['is_native', null]];
		if ((($bool6=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			$m['init']($p['getattr']($m['pyjd'], 'native_dnd'));
		}
		else {
			$m['init'](null);
		}
		$m['Factory']['registerClass']('pyjamas.ui.DropWidget', 'DropWidget', $m['DropWidget']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DropWidget */


/* end module: pyjamas.ui.DropWidget */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.dnd.DNDHelper.dndHelper', 'pyjamas.dnd', 'pyjamas.dnd.DNDHelper', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler', 'pyjd']
*/
