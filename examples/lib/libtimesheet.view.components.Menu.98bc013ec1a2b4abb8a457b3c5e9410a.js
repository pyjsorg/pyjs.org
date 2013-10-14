/* start module: libtimesheet.view.components.Menu */
$pyjs['loaded_modules']['libtimesheet.view.components.Menu'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.components.Menu']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.components.Menu'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view.components'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view.components']['__was_initialized__']) $p['___import___']('libtimesheet.view.components', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.components.Menu'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.components.Menu>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.components.Menu';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view.components']['Menu'] = $pyjs['loaded_modules']['libtimesheet.view.components.Menu'];
	try {


		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view.components', null, false);
		$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', 'libtimesheet.view.components', null, false);
		$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', 'libtimesheet.view.components', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'libtimesheet.view.components', null, false);
		$m['Menu'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.components.Menu';
			$cls_definition['__md5__'] = '1ad5922f1aae51710740f3fc860ecf7b';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ad5922f1aae51710740f3fc860ecf7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var menuFile,menuHelp,$pyjs_try_err,menuView;
				try {
					$pyjs_kwargs_call($m['MenuBar'], '__init__', null, null, [{'vertical':false}, self]);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mFileOpen', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mFileOpen', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mFileSaveAs', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mFileSaveAs', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mFilePreferences', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mFilePreferences', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mViewEdit', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mViewEdit', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mViewSummary', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mViewSummary', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mHelpContents', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mHelpContents', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mHelpAbout', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()) : $p['setattr'](self, 'mHelpAbout', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)()); 
					menuFile = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{'vertical':true}]);
					menuFile['addItem']('Open ...', $p['getattr'](self, 'mFileOpen'));
					menuFile['addItem']('Save as ...', $p['getattr'](self, 'mFileSaveAs'));
					menuFile['addItem']('Preferences', $p['getattr'](self, 'mFilePreferences'));
					self['addItem']($m['MenuItem']('File', menuFile));
					menuView = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{'vertical':true}]);
					menuView['addItem']('Edit', $p['getattr'](self, 'mViewEdit'));
					menuView['addItem']('Summary', $p['getattr'](self, 'mViewSummary'));
					self['addItem']($m['MenuItem']('View', menuView));
					menuHelp = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{'vertical':true}]);
					menuHelp['addItem']('Contents', $p['getattr'](self, 'mHelpContents'));
					menuHelp['addItem']('About', $p['getattr'](self, 'mHelpAbout'));
					self['addItem']($m['MenuItem']('Help', menuHelp));
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
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['MenuBar']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Menu', $p['tuple']($bases), $data);
		})();
		$m['MenuCmd'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.components.Menu';
			$cls_definition['__md5__'] = '5d5c384a61d92ec5bade0209042923c2';
			$method = $pyjs__bind_method2('setHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d5c384a61d92ec5bade0209042923c2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('handler', handler) : $p['setattr'](self, 'handler', handler); 
				return null;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['setHandler'] = $method;
			$method = $pyjs__bind_method2('execute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5d5c384a61d92ec5bade0209042923c2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['handler']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['execute'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MenuCmd', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.components.Menu */


/* end module: libtimesheet.view.components.Menu */


/*
PYJS_DEPS: ['libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel']
*/
