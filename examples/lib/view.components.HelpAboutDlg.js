/* start module: view.components.HelpAboutDlg */
$pyjs.loaded_modules['view.components.HelpAboutDlg'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.HelpAboutDlg'].__was_initialized__) return $pyjs.loaded_modules['view.components.HelpAboutDlg'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.HelpAboutDlg"];
	$m.__repr__ = function() { return "<module: view.components.HelpAboutDlg>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.HelpAboutDlg';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['HelpAboutDlg'] = $pyjs.loaded_modules['view.components.HelpAboutDlg'];
	try {

		var $constant_int_50 = new $p['int'](50);
		var $constant_int_4 = new $p['int'](4);
		$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'view.components', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'view.components', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'view.components', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'view.components', null, false);
		$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', 'view.components', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'view.components', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view.components', null, false);
		$m['HelpAboutDlg'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'view.components.HelpAboutDlg';
			$cls_definition.__md5__ = '005cb147c6c369cb606c14fb70c98da5';
			$method = $pyjs__bind_method2('__init__', function(left, top) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '005cb147c6c369cb606c14fb70c98da5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments.callee.__args__[3][1];
				if (typeof top == 'undefined') top=arguments.callee.__args__[4][1];
				var msg,$pyjs_try_err;
				try {
					$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{modal:false}, self]);
					self['setPopupPosition'](left, top);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dockPanel', $m['DockPanel']()) : $p['setattr'](self, 'dockPanel', $m['DockPanel']()); 
					self['dockPanel']['setSpacing']($constant_int_4);
					self['setText']('About');
					msg = $m['HTML']('This is an example application, which uses PureMVC<br/>\n<br/>\n', true);
					self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'CENTER'));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('closeBtn', $m['Button']('Close', self)) : $p['setattr'](self, 'closeBtn', $m['Button']('Close', self)); 
					self['dockPanel']['add']($p['getattr'](self, 'closeBtn'), $p['getattr']($m['DockPanel'], 'SOUTH'));
					self['setWidget']($p['getattr'](self, 'dockPanel'));
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
	, 1, [null,null,['self'],['left', $constant_int_50],['top', $constant_int_50]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '005cb147c6c369cb606c14fb70c98da5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HelpAboutDlg', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end view.components.HelpAboutDlg */


/* end module: view.components.HelpAboutDlg */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.DOM', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
