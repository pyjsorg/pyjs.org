/* start module: SplitPanel */
$pyjs.loaded_modules['SplitPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SplitPanel'].__was_initialized__) return $pyjs.loaded_modules['SplitPanel'];
	var $m = $pyjs.loaded_modules["SplitPanel"];
	$m.__repr__ = function() { return "<module: SplitPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SplitPanel';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_200 = new $p['int'](200);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['VerticalSplitPanel'] = $p['___import___']('pyjamas.ui.VerticalSplitPanel.VerticalSplitPanel', null, null, false);
		$m['HorizontalSplitPanel'] = $p['___import___']('pyjamas.ui.HorizontalSplitPanel.HorizontalSplitPanel', null, null, false);
		$m['SplitPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SplitPanel';
			$cls_definition.__md5__ = '406cb056252c5787f52ad44fa8ec2319';
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
					if (self.prototype.__md5__ !== '406cb056252c5787f52ad44fa8ec2319') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add1,$iter1_array,randomText,$iter1_idx;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vertpanel', $m['VerticalSplitPanel']()) : $p['setattr'](self, 'vertpanel', $m['VerticalSplitPanel']()); 
				self['vertpanel']['setSize']('500px', '350px');
				self['vertpanel']['setSplitPosition']('30%');
				self['vertpanel']['setStyleAttribute']('background', 'red');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzpanel', $m['HorizontalSplitPanel']()) : $p['setattr'](self, 'horzpanel', $m['HorizontalSplitPanel']()); 
				self['horzpanel']['setSize']('500px', '350px');
				self['horzpanel']['setSplitPosition']('50%');
				self['horzpanel']['setStyleAttribute']('background', 'yellow');
				randomText = '';
				$iter1_iter = $p['range']($constant_int_200);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					randomText = (typeof ($add1=randomText)==typeof ($add2=$p['sprintf']('hello %d ', i)) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				self['vertpanel']['setTopWidget']($m['HTML'](randomText));
				self['vertpanel']['setBottomWidget']($m['HTML'](randomText));
				self['horzpanel']['setLeftWidget']($m['HTML'](randomText));
				self['horzpanel']['setRightWidget']($m['HTML'](randomText));
				$m['RootPanel']()['add']($p['getattr'](self, 'vertpanel'));
				$m['RootPanel']()['add']($p['getattr'](self, 'horzpanel'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SplitPanel', $p['tuple']($bases), $data);
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
			$m['pyjd']['setup']('./public/SplitPanel.html');
			$m['app'] = $m['SplitPanel']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SplitPanel */


/* end module: SplitPanel */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.Window', 'pyjamas.ui.VerticalSplitPanel.VerticalSplitPanel', 'pyjamas.ui.VerticalSplitPanel', 'pyjamas.ui.HorizontalSplitPanel.HorizontalSplitPanel', 'pyjamas.ui.HorizontalSplitPanel']
*/
