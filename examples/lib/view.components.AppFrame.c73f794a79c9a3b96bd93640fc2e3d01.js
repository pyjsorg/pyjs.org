/* start module: view.components.AppFrame */
$pyjs.loaded_modules['view.components.AppFrame'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.AppFrame'].__was_initialized__) return $pyjs.loaded_modules['view.components.AppFrame'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.AppFrame"];
	$m.__repr__ = function() { return "<module: view.components.AppFrame>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.AppFrame';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['AppFrame'] = $pyjs.loaded_modules['view.components.AppFrame'];
	try {


		$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'view.components', null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', 'view.components', null, false);
		$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', 'view.components', null, false);
		$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', 'view.components', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
		$m['Menu'] = $p['___import___']('Menu.Menu', 'view.components', null, false);
		$m['DatePicker'] = $p['___import___']('DatePicker.DatePicker', 'view.components', null, false);
		$m['TimeGrid'] = $p['___import___']('TimeGrid.TimeGrid', 'view.components', null, false);
		$m['Summary'] = $p['___import___']('Summary.Summary', 'view.components', null, false);
		$m['AppFrame'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'view.components.AppFrame';
			$cls_definition.__md5__ = 'bb4eccf8269a44f9f849014de34fae26';
			$cls_definition['menuBar'] = null;
			$cls_definition['datePicker'] = null;
			$cls_definition['timeGrid'] = null;
			$cls_definition['summary'] = null;
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
					if (self.prototype.__md5__ !== 'bb4eccf8269a44f9f849014de34fae26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,vpanel;
				try {
					$m['RootPanelCls']['__init__'](self);
					vpanel = $m['VerticalPanel']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('menuBar', $m['Menu']()) : $p['setattr'](self, 'menuBar', $m['Menu']()); 
					vpanel['add']($p['getattr'](self, 'menuBar'));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('datePicker', $m['DatePicker']()) : $p['setattr'](self, 'datePicker', $m['DatePicker']()); 
					vpanel['add']($p['getattr'](self, 'datePicker'));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('timeGrid', $m['TimeGrid']()) : $p['setattr'](self, 'timeGrid', $m['TimeGrid']()); 
					vpanel['add']($p['getattr'](self, 'timeGrid'));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('summary', $m['Summary']()) : $p['setattr'](self, 'summary', $m['Summary']()); 
					vpanel['add']($p['getattr'](self, 'summary'));
					self['add'](vpanel);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['RootPanelCls']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AppFrame', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end view.components.AppFrame */


/* end module: view.components.AppFrame */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DockPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'Menu.Menu', 'Menu', 'DatePicker.DatePicker', 'DatePicker', 'TimeGrid.TimeGrid', 'TimeGrid', 'Summary.Summary', 'Summary']
*/
