/* start module: pyjamas.ui.ContextMenuPopupPanel */
$pyjs.loaded_modules['pyjamas.ui.ContextMenuPopupPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ContextMenuPopupPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ContextMenuPopupPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ContextMenuPopupPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ContextMenuPopupPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ContextMenuPopupPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['ContextMenuPopupPanel'] = $pyjs.loaded_modules['pyjamas.ui.ContextMenuPopupPanel'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
		$m['ContextMenuPopupPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.ContextMenuPopupPanel';
			$cls_definition.__md5__ = '6f65251d59e0cad13b42729c7fa6df69';
			$method = $pyjs__bind_method2('__init__', function(item) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f65251d59e0cad13b42729c7fa6df69') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof item != 'undefined') {
						if (item !== null && typeof item['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = item;
							item = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('item', item) : $p['setattr'](self, 'item', item); 
				kwargs.__setitem__('Widget', item);
				$pyjs_kwargs_call($m['PopupPanel'], '__init__', null, kwargs, [{}, self, true]);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['item']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('showAt', function(x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f65251d59e0cad13b42729c7fa6df69') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setPopupPosition'](x, y);
				self['item']['onShow']();
				self['show']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['showAt'] = $method;
			$method = $pyjs__bind_method2('onEventPreview', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f65251d59e0cad13b42729c7fa6df69') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$bool2,$bool3,parentMenuElement,$bool1,type;
				type = $m['DOM']['eventGetType'](event);
				if ((($bool1=$p['op_eq'](type, 'click')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					target = $m['DOM']['eventGetTarget'](event);
					parentMenuElement = self['item']['getElement']();
					if ((($bool2=$m['DOM']['isOrHasChild'](parentMenuElement, target)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						if ((($bool3=self['item']['onBrowserEvent'](event)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
							self['hide']();
						}
						return true;
					}
				}
				return $m['PopupPanel']['onEventPreview'](self, event);
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onEventPreview'] = $method;
			var $bases = new Array($m['PopupPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ContextMenuPopupPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.ContextMenuPopupPanel', 'ContextMenuPopupPanel', $m['ContextMenuPopupPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ContextMenuPopupPanel */


/* end module: pyjamas.ui.ContextMenuPopupPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel']
*/
