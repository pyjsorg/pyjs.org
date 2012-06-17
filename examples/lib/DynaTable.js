/* start module: DynaTable */
$pyjs.loaded_modules['DynaTable'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DynaTable'].__was_initialized__) return $pyjs.loaded_modules['DynaTable'];
	var $m = $pyjs.loaded_modules["DynaTable"];
	$m.__repr__ = function() { return "<module: DynaTable>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DynaTable';
	$m.__name__ = __mod_name__;
	try {
		var $bool3;
		var $constant_int_15 = new $p['int'](15);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['DayFilterWidget'] = $p['___import___']('DayFilterWidget.DayFilterWidget', null, null, false);
		$m['SchoolCalendarWidget'] = $p['___import___']('SchoolCalendarWidget.SchoolCalendarWidget', null, null, false);
		$m['DynaTable'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DynaTable';
			$cls_definition.__md5__ = 'cb8e0d56d9eaddedadc9e8ca2941e575';
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
					if (self.prototype.__md5__ !== 'cb8e0d56d9eaddedadc9e8ca2941e575') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var slot,$bool2,$bool1,filterWidget,calendar;
				slot = $m['RootPanel']('calendar');
				if ((($bool1=!$p['op_is'](slot, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					calendar = $m['SchoolCalendarWidget']($constant_int_15);
					slot['add'](calendar);
					slot = $m['RootPanel']('days');
					if ((($bool2=!$p['op_is'](slot, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						filterWidget = $m['DayFilterWidget'](calendar);
						slot['add'](filterWidget);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DynaTable', $p['tuple']($bases), $data);
		})();
		if ((($bool3=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			$m['pyjd']['setup']('http://127.0.0.1/examples/dynamictable/public/DynaTable.html');
			$m['app'] = $m['DynaTable']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DynaTable */


/* end module: DynaTable */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'DayFilterWidget.DayFilterWidget', 'DayFilterWidget', 'SchoolCalendarWidget.SchoolCalendarWidget', 'SchoolCalendarWidget']
*/
