/* start module: FlowPanel */
$pyjs.loaded_modules['FlowPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['FlowPanel'].__was_initialized__) return $pyjs.loaded_modules['FlowPanel'];
	var $m = $pyjs.loaded_modules["FlowPanel"];
	$m.__repr__ = function() { return "<module: FlowPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'FlowPanel';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['FlowPanelDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'FlowPanel';
			$cls_definition.__md5__ = 'dfd1c5f6a90d7cdb5393637e2ad4bc4b';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dfd1c5f6a90d7cdb5393637e2ad4bc4b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,title,$iter1_iter,$iter1_array,x,image,$iter1_idx;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('root', $m['RootPanel']()) : $p['setattr'](self, 'root', $m['RootPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('flow', $pyjs_kwargs_call(null, $m['FlowPanel'], null, null, [{Width:'70%', StyleName:'flow-panel'}])) : $p['setattr'](self, 'flow', $pyjs_kwargs_call(null, $m['FlowPanel'], null, null, [{Width:'70%', StyleName:'flow-panel'}])); 
				$iter1_iter = $p['range']($constant_int_0, $constant_int_10);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', $m['VerticalPanel']()) : $p['setattr'](self, 'panel', $m['VerticalPanel']()); 
					title = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('span'), StyleName:'title item'}, $p['sprintf']('Item %s', x)]);
					image = $pyjs_kwargs_call(null, $m['Image'], null, null, [{Width:'200px', Height:'200px', StyleName:'cat-image cat-item'}, 'images/pyjamas.png']);
					self['panel']['add'](title);
					self['panel']['add'](image);
					self['flow']['add']($p['getattr'](self, 'panel'));
				}
				self['root']['add']($p['getattr'](self, 'flow'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FlowPanelDemo', $p['tuple']($bases), $data);
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
			$m['pyjd']['setup']('./public/FlowPanel.html');
			$m['FlowPanelDemo']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end FlowPanel */


/* end module: FlowPanel */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM']
*/
