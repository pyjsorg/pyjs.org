/* start module: pyjamas.dnd.DragEvent */
$pyjs.loaded_modules['pyjamas.dnd.DragEvent'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.dnd.DragEvent'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.dnd.DragEvent'];
	if(typeof $pyjs.loaded_modules['pyjamas.dnd'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.dnd'].__was_initialized__) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs.loaded_modules["pyjamas.dnd.DragEvent"];
	$m.__repr__ = function() { return "<module: pyjamas.dnd.DragEvent>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DragEvent';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.dnd']['DragEvent'] = $pyjs.loaded_modules['pyjamas.dnd.DragEvent'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
		$m['DragEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.dnd.DragEvent';
			$cls_definition.__md5__ = '922e57a292c1874d717e04f19e271500';
			$cls_definition['relatedTarget'] = null;
			$cls_definition['detail'] = $constant_int_0;
			$cls_definition['returnValue'] = true;
			$method = $pyjs__bind_method2('__init__', function(evt, type, dataTransfer, target) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					evt = arguments[1];
					type = arguments[2];
					dataTransfer = arguments[3];
					target = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof target == 'undefined') target=arguments.callee.__args__[6][1];
				var $bool1;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('evt', evt) : $p['setattr'](self, 'evt', evt); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('type', type) : $p['setattr'](self, 'type', type); 
				self['setTarget'](target);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dataTransfer', dataTransfer) : $p['setattr'](self, 'dataTransfer', dataTransfer); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('canBubble', true) : $p['setattr'](self, 'canBubble', true); 
				if ((($bool1=$p['list'](['dragleave', 'dragend']).__contains__($p['getattr'](self, 'type'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cancelable', false) : $p['setattr'](self, 'cancelable', false); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cancelable', true) : $p['setattr'](self, 'cancelable', true); 
				}
				return null;
			}
	, 1, [null,null,['self'],['evt'],['type'],['dataTransfer'],['target', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setTarget', function(target) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof target == 'undefined') target=arguments.callee.__args__[3][1];
				var $bool2;
				if ((($bool2=!$p['op_is'](target, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('target', target) : $p['setattr'](self, 'target', target); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('target', $m['DOM']['eventGetTarget']($p['getattr'](self, 'evt'))) : $p['setattr'](self, 'target', $m['DOM']['eventGetTarget']($p['getattr'](self, 'evt'))); 
				}
				return null;
			}
	, 1, [null,null,['self'],['target', null]]);
			$cls_definition['setTarget'] = $method;
			$method = $pyjs__bind_method2('stopPropagation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['evt']['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stopPropagation'] = $method;
			$method = $pyjs__bind_method2('screenX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'screenX');
			}
	, 1, [null,null,['self']]);
			$cls_definition['screenX'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('screenY', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'screenY');
			}
	, 1, [null,null,['self']]);
			$cls_definition['screenY'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('pageX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'pageX');
			}
	, 1, [null,null,['self']]);
			$cls_definition['pageX'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('pageY', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'pageY');
			}
	, 1, [null,null,['self']]);
			$cls_definition['pageY'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('clientX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'clientX');
			}
	, 1, [null,null,['self']]);
			$cls_definition['clientX'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('clientY', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'clientY');
			}
	, 1, [null,null,['self']]);
			$cls_definition['clientY'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('altKey', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'altKey');
			}
	, 1, [null,null,['self']]);
			$cls_definition['altKey'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('ctrlKey', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'ctrlKey');
			}
	, 1, [null,null,['self']]);
			$cls_definition['ctrlKey'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('shiftKey', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'shiftKey');
			}
	, 1, [null,null,['self']]);
			$cls_definition['shiftKey'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('metaKey', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'metaKey');
			}
	, 1, [null,null,['self']]);
			$cls_definition['metaKey'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('button', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'evt'), 'button');
			}
	, 1, [null,null,['self']]);
			$cls_definition['button'] = $p['property']($p['staticmethod']($method));
			$method = $pyjs__bind_method2('preventDefault', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('returnValue', false) : $p['setattr'](self, 'returnValue', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['preventDefault'] = $method;
			$method = $pyjs__bind_method2('initDragEvent', function(type, canBubble, cancelable, dummy, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget, dataTransfer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 16) $pyjs__exception_func_param(arguments.callee.__name__, 17, 17, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					canBubble = arguments[2];
					cancelable = arguments[3];
					dummy = arguments[4];
					detail = arguments[5];
					screenX = arguments[6];
					screenY = arguments[7];
					clientX = arguments[8];
					clientY = arguments[9];
					ctrlKey = arguments[10];
					altKey = arguments[11];
					shiftKey = arguments[12];
					metaKey = arguments[13];
					button = arguments[14];
					relatedTarget = arguments[15];
					dataTransfer = arguments[16];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 17) $pyjs__exception_func_param(arguments.callee.__name__, 17, 17, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '922e57a292c1874d717e04f19e271500') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplemented']('Instanciate this class with a mouse event.'));
				return null;
			}
	, 1, [null,null,['self'],['type'],['canBubble'],['cancelable'],['dummy'],['detail'],['screenX'],['screenY'],['clientX'],['clientY'],['ctrlKey'],['altKey'],['shiftKey'],['metaKey'],['button'],['relatedTarget'],['dataTransfer']]);
			$cls_definition['initDragEvent'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragEvent', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.dnd.DragEvent */


/* end module: pyjamas.dnd.DragEvent */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
