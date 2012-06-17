/* start module: HangMan */
$pyjs.loaded_modules['HangMan'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HangMan'].__was_initialized__) return $pyjs.loaded_modules['HangMan'];
	var $m = $pyjs.loaded_modules["HangMan"];
	$m.__repr__ = function() { return "<module: HangMan>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HangMan';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['HangManWidget'] = $p['___import___']('HangManWidget.HangManWidget', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['HangMan'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'HangMan';
			$cls_definition.__md5__ = 'ea093af280de8417da96aa95c21ffbaa';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ea093af280de8417da96aa95c21ffbaa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('webspace', $m['HangManWidget']()) : $p['setattr'](self, 'webspace', $m['HangManWidget']()); 
				$m['RootPanel']()['add']($p['getattr'](self, 'webspace'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HangMan', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['pyjd']['setup']('public/HangMan.html');
			$m['app'] = $m['HangMan']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end HangMan */


/* end module: HangMan */


/*
PYJS_DEPS: ['pyjd', 'HangManWidget.HangManWidget', 'HangManWidget', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel']
*/
