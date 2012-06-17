/* start module: AjaxTest */
$pyjs.loaded_modules['AjaxTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AjaxTest'].__was_initialized__) return $pyjs.loaded_modules['AjaxTest'];
	var $m = $pyjs.loaded_modules["AjaxTest"];
	$m.__repr__ = function() { return "<module: AjaxTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AjaxTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;

		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['pyjslib'] = $p['___import___']('pyjslib', null);
		$m['dynamic'] = $p['___import___']('dynamic', null);
		$m['greet'] = function(sender) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


       test_fn();
    
		};
		$m['greet'].__name__ = 'greet';

		$m['greet'].__bind_type__ = 0;
		$m['greet'].__args__ = [null,null,['sender']];
		$m['AjaxTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'AjaxTest';
			$cls_definition.__md5__ = '763b1ccd253634fd24c01b5e18cf6abf';
			$cls_definition['ClickMe'] = 'Click me';
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
					if (self.prototype.__md5__ !== '763b1ccd253634fd24c01b5e18cf6abf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b;
				b = $m['Button']($p['getattr'](self, 'ClickMe'), $m['greet']);
				$m['RootPanel']()['add'](b);
				$pyjs_kwargs_call($m['dynamic'], 'ajax_import', null, null, [{names:$p['list'](['test_fn'])}, 'test.cache.js']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AjaxTest', $p['tuple']($bases), $data);
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
			$m['x'] = $m['AjaxTest']();
			$m['x']['onModuleLoad']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end AjaxTest */


/* end module: AjaxTest */


/*
PYJS_DEPS: ['pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.DOM', 'pyjslib', 'dynamic']
*/
