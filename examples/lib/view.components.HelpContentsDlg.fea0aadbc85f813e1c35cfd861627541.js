/* start module: view.components.HelpContentsDlg */
$pyjs['loaded_modules']['view.components.HelpContentsDlg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['view.components.HelpContentsDlg']['__was_initialized__']) return $pyjs['loaded_modules']['view.components.HelpContentsDlg'];
	if(typeof $pyjs['loaded_modules']['view.components'] == 'undefined' || !$pyjs['loaded_modules']['view.components']['__was_initialized__']) $p['___import___']('view.components', null);
	var $m = $pyjs['loaded_modules']['view.components.HelpContentsDlg'];
	$m['__repr__'] = function() { return '<module: view.components.HelpContentsDlg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.HelpContentsDlg';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['view.components']['HelpContentsDlg'] = $pyjs['loaded_modules']['view.components.HelpContentsDlg'];
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
		$m['HelpContentsDlg'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'view.components.HelpContentsDlg';
			$cls_definition['__md5__'] = 'a40953d54829edbb4024998a578de1c1';
			$method = $pyjs__bind_method2('__init__', function(left, top) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a40953d54829edbb4024998a578de1c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments['callee']['__args__'][3][1];
				if (typeof top == 'undefined') top=arguments['callee']['__args__'][4][1];
				var msg,$pyjs_try_err;
				try {
					$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{'modal':false}, self]);
					self['setPopupPosition'](left, top);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dockPanel', $m['DockPanel']()) : $p['setattr'](self, 'dockPanel', $m['DockPanel']()); 
					self['dockPanel']['setSpacing']($constant_int_4);
					self['setText']('Help Contents');
					self['setWidth']('80%');
					msg = $m['HTML']("<h2>Introduction</h2>\n\nThis application can be used to maintain a timesheet.\n\n<p/>\nOn startup, it tries to open the last opened timesheet.\n\n<p/>\nThere are two modes: Edit and Summary (see menu). In edit mode the user can enter/modify his timescheet. There's some inteligence built in. The 'From' is filled in automatically when the previous line has a 'To'. The 'To' can be filled in as time span, or as end-time. The 'Project' is mandatory (as the 'From' and 'To' are). The user can walk around with the cursor keys.\n\n\n<h2>Opening and saving sheets</h2>\nThe sheet can be loaded and saved from a local file. There might be some issues with Firefox, which might refuse access to the document in an iframe.\n\n<br/>\n", true);
					self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'CENTER'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeBtn', $m['Button']('Close', self)) : $p['setattr'](self, 'closeBtn', $m['Button']('Close', self)); 
					self['dockPanel']['add']($p['getattr'](self, 'closeBtn'), $p['getattr']($m['DockPanel'], 'SOUTH'));
					self['setWidget']($p['getattr'](self, 'dockPanel'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['left', $constant_int_50],['top', $constant_int_50]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a40953d54829edbb4024998a578de1c1') {
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
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HelpContentsDlg', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end view.components.HelpContentsDlg */


/* end module: view.components.HelpContentsDlg */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.DOM', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
