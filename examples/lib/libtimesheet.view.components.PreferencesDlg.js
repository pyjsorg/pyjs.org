/* start module: libtimesheet.view.components.PreferencesDlg */
$pyjs['loaded_modules']['libtimesheet.view.components.PreferencesDlg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.components.PreferencesDlg']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.components.PreferencesDlg'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view.components'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view.components']['__was_initialized__']) $p['___import___']('libtimesheet.view.components', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.components.PreferencesDlg'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.components.PreferencesDlg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.components.PreferencesDlg';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view.components']['PreferencesDlg'] = $pyjs['loaded_modules']['libtimesheet.view.components.PreferencesDlg'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_1000000000 = new $p['int'](1000000000);
		var $constant_int_30 = new $p['int'](30);
		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view.components', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'libtimesheet.view.components', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'libtimesheet.view.components', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'libtimesheet.view.components', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'libtimesheet.view.components', null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'libtimesheet.view.components', null, false);
		$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'libtimesheet.view.components', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'libtimesheet.view.components', null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'libtimesheet.view.components', null, false);
		$m['setCookie'] = $p['___import___']('pyjamas.Cookies.setCookie', 'libtimesheet.view.components', null, false);
		$m['getCookie'] = $p['___import___']('pyjamas.Cookies.getCookie', 'libtimesheet.view.components', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view.components', null, false);
		$m['PreferencesDlg'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.components.PreferencesDlg';
			$cls_definition['__md5__'] = '8e52f93c70e6f4226af803dca3d9b9a2';
			$cls_definition['fileLocation'] = null;
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
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments['callee']['__args__'][3][1];
				if (typeof top == 'undefined') top=arguments['callee']['__args__'][4][1];
				var $add2,$add3,$pyjs_try_err,ftable,$add4,hpanel,$add1,ftableFormatter,row;
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{'modal':false}, self]);
				self['setPopupPosition'](left, top);
				self['setText']('Preferences');
				ftable = $m['FlexTable']();
				ftableFormatter = ftable['getFlexCellFormatter']();
				row = $constant_int_0;
				try {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fileLocation', $m['getCookie']('fileLocation')) : $p['setattr'](self, 'fileLocation', $m['getCookie']('fileLocation')); 
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fileLocation', null) : $p['setattr'](self, 'fileLocation', null); 
					}
				}
				row = (typeof ($add1=row)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				ftable['setWidget'](row, $constant_int_0, $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, 'Sheet loaded on startup']));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fileLocationInput', $m['TextBox']()) : $p['setattr'](self, 'fileLocationInput', $m['TextBox']()); 
				self['fileLocationInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['fileLocationInput']['addKeyboardListener'](self);
				self['fileLocationInput']['setVisibleLength']($constant_int_30);
				self['fileLocationInput']['setText']($p['getattr'](self, 'fileLocation'));
				ftable['setWidget'](row, $constant_int_1, $p['getattr'](self, 'fileLocationInput'));
				row = (typeof ($add3=row)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				hpanel = $m['HorizontalPanel']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('saveBtn', $m['Button']('Save', $p['getattr'](self, 'onSave'))) : $p['setattr'](self, 'saveBtn', $m['Button']('Save', $p['getattr'](self, 'onSave'))); 
				self['saveBtn']['setEnabled'](false);
				hpanel['add']($p['getattr'](self, 'saveBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cancelBtn', $m['Button']('Cancel', $p['getattr'](self, 'onCancel'))) : $p['setattr'](self, 'cancelBtn', $m['Button']('Cancel', $p['getattr'](self, 'onCancel'))); 
				hpanel['add']($p['getattr'](self, 'cancelBtn'));
				ftable['setWidget'](row, $constant_int_0, hpanel);
				ftableFormatter['setColSpan'](row, $constant_int_0, $constant_int_2);
				self['setWidget'](ftable);
				return null;
			}
	, 1, [null,null,['self'],['left', $constant_int_50],['top', $constant_int_50]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onCancel', function(sender) {
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
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onCancel'] = $method;
			$method = $pyjs__bind_method2('onSave', function(sender) {
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
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					$m['setCookie']('fileLocation', self['fileLocationInput']['getText'](), $constant_int_1000000000);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onSave'] = $method;
			$method = $pyjs__bind_method2('checkValid', function(evt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof evt == 'undefined') evt=arguments['callee']['__args__'][3][1];
				var $bool1;
				if ((($bool1=!$p['op_eq']($p['getattr'](self, 'fileLocation'), self['fileLocationInput']['getText']())) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['saveBtn']['setEnabled'](true);
				}
				else {
					self['saveBtn']['setEnabled'](false);
				}
				return null;
			}
	, 1, [null,null,['self'],['evt', null]]);
			$cls_definition['checkValid'] = $method;
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
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['checkValid']();
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e52f93c70e6f4226af803dca3d9b9a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PreferencesDlg', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.components.PreferencesDlg */


/* end module: libtimesheet.view.components.PreferencesDlg */


/*
PYJS_DEPS: ['libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Cookies.setCookie', 'pyjamas.Cookies', 'pyjamas.Cookies.getCookie', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
