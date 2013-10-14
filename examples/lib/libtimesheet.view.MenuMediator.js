/* start module: libtimesheet.view.MenuMediator */
$pyjs['loaded_modules']['libtimesheet.view.MenuMediator'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.MenuMediator']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.MenuMediator'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view']['__was_initialized__']) $p['___import___']('libtimesheet.view', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.MenuMediator'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.MenuMediator>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.MenuMediator';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view']['MenuMediator'] = $pyjs['loaded_modules']['libtimesheet.view.MenuMediator'];
	try {


		$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'libtimesheet.view', null, false);
		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view', null, false);
		$m['TimeProxy'] = $p['___import___']('libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet.view', null, false);
		$m['FileOpenDlg'] = $p['___import___']('libtimesheet.view.components.FileOpenDlg.FileOpenDlg', 'libtimesheet.view', null, false);
		$m['PreferencesDlg'] = $p['___import___']('libtimesheet.view.components.PreferencesDlg.PreferencesDlg', 'libtimesheet.view', null, false);
		$m['HelpContentsDlg'] = $p['___import___']('libtimesheet.view.components.HelpContentsDlg.HelpContentsDlg', 'libtimesheet.view', null, false);
		$m['HelpAboutDlg'] = $p['___import___']('libtimesheet.view.components.HelpAboutDlg.HelpAboutDlg', 'libtimesheet.view', null, false);
		$m['getCookie'] = $p['___import___']('pyjamas.Cookies.getCookie', 'libtimesheet.view', null, false);
		$m['sys'] = $p['___import___']('sys', 'libtimesheet.view');
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view', null, false);
		$m['base64'] = $p['___import___']('base64', 'libtimesheet.view');
		$m['MenuMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.MenuMediator';
			$cls_definition['__md5__'] = '7dd01a31aa65407a3c3fcb6eeed0d014';
			$cls_definition['NAME'] = 'MenuMediator';
			$cls_definition['fileLocation'] = null;
			$method = $pyjs__bind_method2('__init__', function(viewComponent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					viewComponent = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fileLocation,$pyjs_try_err;
				$m['Mediator']['__init__'](self, $p['getattr']($m['MenuMediator'], 'NAME'), viewComponent);
				viewComponent['mFileOpen']['setHandler']($p['getattr'](self, 'onFileOpen'));
				viewComponent['mFileSaveAs']['setHandler']($p['getattr'](self, 'onFileSaveAs'));
				viewComponent['mFilePreferences']['setHandler']($p['getattr'](self, 'onFilePreferences'));
				viewComponent['mViewEdit']['setHandler']($p['getattr'](self, 'onViewEdit'));
				viewComponent['mViewSummary']['setHandler']($p['getattr'](self, 'onViewSummary'));
				viewComponent['mHelpContents']['setHandler']($p['getattr'](self, 'onHelpContents'));
				viewComponent['mHelpAbout']['setHandler']($p['getattr'](self, 'onHelpAbout'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timeProxy', self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'))) : $p['setattr'](self, 'timeProxy', self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'))); 
				try {
					fileLocation = $m['getCookie']('fileLocation');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						fileLocation = null;
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fileLocation', self['checkFileLocation'](fileLocation)) : $p['setattr'](self, 'fileLocation', self['checkFileLocation'](fileLocation)); 
				self['onFileOpen']($p['getattr'](self, 'fileLocation'));
				return null;
			}
	, 1, [null,null,['self'],['viewComponent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('listNotificationInterests', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['listNotificationInterests'] = $method;
			$method = $pyjs__bind_method2('handleNotification', function(note) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					note = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['note']]);
			$cls_definition['handleNotification'] = $method;
			$method = $pyjs__bind_method2('checkFileLocation', function(fileLocation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fileLocation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$bool2,$bool1;
				if ((($bool2=((($bool1=$or1=$p['op_is'](fileLocation, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_is'](fileLocation, 'null'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					fileLocation = 'timesheet.txt';
				}
				return fileLocation;
			}
	, 1, [null,null,['self'],['fileLocation']]);
			$cls_definition['checkFileLocation'] = $method;
			$method = $pyjs__bind_method2('onFileOpen', function(fileLocation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fileLocation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fileLocation == 'undefined') fileLocation=arguments['callee']['__args__'][3][1];
				var onOpen,dlg,$pyjs_try_err;
				try {
					dlg = null;
					onOpen = function(sender) {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

						self['sendNotification']($p['getattr']($m['Notification'], 'FILE_LOADED'), $p['tuple']([$p['getattr'](dlg, 'filename'), $p['getattr'](dlg, 'data')]));
						return null;
					};
					onOpen['__name__'] = 'onOpen';

					onOpen['__bind_type__'] = 0;
					onOpen['__args__'] = [null,null,['sender']];
					fileLocation = self['checkFileLocation'](fileLocation);
					dlg = $pyjs_kwargs_call(null, $m['FileOpenDlg'], null, null, [{'fileLocation':fileLocation}]);
					dlg['openBtn']['addClickListener'](onOpen);
					dlg['show']();
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
	, 1, [null,null,['self'],['fileLocation', null]]);
			$cls_definition['onFileOpen'] = $method;
			$method = $pyjs__bind_method2('onFileSaveAs', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,w,data_uri;
				data = self['timeProxy']['exportData']();
				data_uri = $p['sprintf']('data:text/plain;base64,%s', $m['base64']['encodestring'](data));
				w = $wnd['open']('', '_blank', 'scrollbars=yes,width=300,height=300');
				w['document']['open']('text/html');
				w['document']['write']($p['sprintf']('<a href="%s">Right click here</a> if your browser supports data uri<br />Otherwise, you\'ll have to copy and paste this output to a text file<br />\n', data_uri));
				w['document']['write']('<pre>');
				w['document']['write'](data);
				w['document']['write']('</pre>');
				w['document']['close']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onFileSaveAs'] = $method;
			$method = $pyjs__bind_method2('onFilePreferences', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dlg;
				dlg = $m['PreferencesDlg']();
				dlg['__is_instance__'] && typeof dlg['__setattr__'] == 'function' ? dlg['__setattr__']('mediator', self) : $p['setattr'](dlg, 'mediator', self); 
				dlg['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onFilePreferences'] = $method;
			$method = $pyjs__bind_method2('onViewEdit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['sendNotification']($p['getattr']($m['Notification'], 'EDIT_SELECTED'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onViewEdit'] = $method;
			$method = $pyjs__bind_method2('onViewSummary', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['sendNotification']($p['getattr']($m['Notification'], 'SUM_SELECTED'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onViewSummary'] = $method;
			$method = $pyjs__bind_method2('onHelpContents', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dlg;
				dlg = $m['HelpContentsDlg']();
				dlg['__is_instance__'] && typeof dlg['__setattr__'] == 'function' ? dlg['__setattr__']('mediator', self) : $p['setattr'](dlg, 'mediator', self); 
				dlg['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onHelpContents'] = $method;
			$method = $pyjs__bind_method2('onHelpAbout', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7dd01a31aa65407a3c3fcb6eeed0d014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dlg;
				dlg = $m['HelpAboutDlg']();
				dlg['__is_instance__'] && typeof dlg['__setattr__'] == 'function' ? dlg['__setattr__']('mediator', self) : $p['setattr'](dlg, 'mediator', self); 
				dlg['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onHelpAbout'] = $method;
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MenuMediator', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.MenuMediator */


/* end module: libtimesheet.view.MenuMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window', 'libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet.model', 'libtimesheet.model.TimeProxy', 'libtimesheet.view.components.FileOpenDlg.FileOpenDlg', 'libtimesheet.view', 'libtimesheet.view.components', 'libtimesheet.view.components.FileOpenDlg', 'libtimesheet.view.components.PreferencesDlg.PreferencesDlg', 'libtimesheet.view.components.PreferencesDlg', 'libtimesheet.view.components.HelpContentsDlg.HelpContentsDlg', 'libtimesheet.view.components.HelpContentsDlg', 'libtimesheet.view.components.HelpAboutDlg.HelpAboutDlg', 'libtimesheet.view.components.HelpAboutDlg', 'pyjamas.Cookies.getCookie', 'pyjamas.Cookies', 'sys', 'base64']
*/
