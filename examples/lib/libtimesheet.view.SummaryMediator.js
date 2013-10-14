/* start module: libtimesheet.view.SummaryMediator */
$pyjs['loaded_modules']['libtimesheet.view.SummaryMediator'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.SummaryMediator']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.SummaryMediator'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view']['__was_initialized__']) $p['___import___']('libtimesheet.view', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.SummaryMediator'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.SummaryMediator>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.SummaryMediator';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view']['SummaryMediator'] = $pyjs['loaded_modules']['libtimesheet.view.SummaryMediator'];
	try {


		$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'libtimesheet.view', null, false);
		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view', null, false);
		$m['model'] = $p['___import___']('libtimesheet.model', 'libtimesheet.view', null, false);
		$m['TimeProxy'] = $p['___import___']('libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet.view', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view', null, false);
		$m['SummaryMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.SummaryMediator';
			$cls_definition['__md5__'] = 'f5326f78dffa1ae7f736305344d06656';
			$cls_definition['NAME'] = 'SummaryMediator';
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
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SummaryMediator'], self)['__init__']($p['getattr']($m['SummaryMediator'], 'NAME'), viewComponent);
				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('mediator', self) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'mediator', self); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timeProxy', self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'))) : $p['setattr'](self, 'timeProxy', self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'))); 
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
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($m['Notification'], 'EDIT_SELECTED'), $p['getattr']($m['Notification'], 'SUM_SELECTED')]);
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
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var nodeBody,$bool2,$pyjs_try_err,$bool3,$bool1,noteName;
				try {
					noteName = note['getName']();
					nodeBody = note['getBody']();
					if ((($bool1=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'DATE_SELECTED'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						self['onDateSelected'](nodeBody);
					}
					else if ((($bool2=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'EDIT_SELECTED'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						self['onEditSelected']();
					}
					else if ((($bool3=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'SUM_SELECTED'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
							false :
							(typeof $bool3=='object'?
								(typeof $bool3['__nonzero__']=='function'?
									$bool3['__nonzero__']() :
									(typeof $bool3['__len__']=='function'?
										($bool3['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['onSumSelected']();
					}
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
	, 1, [null,null,['self'],['note']]);
			$cls_definition['handleNotification'] = $method;
			$method = $pyjs__bind_method2('onDateSelected', function(date) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					date = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('date', date) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'date', date); 
				self['viewComponent']['setEntries'](self['timeProxy']['getDateEntries']($p['getattr']($p['getattr'](self, 'viewComponent'), 'date')));
				return null;
			}
	, 1, [null,null,['self'],['date']]);
			$cls_definition['onDateSelected'] = $method;
			$method = $pyjs__bind_method2('onEditSelected', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['viewComponent']['setVisible'](false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onEditSelected'] = $method;
			$method = $pyjs__bind_method2('onSumSelected', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5326f78dffa1ae7f736305344d06656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['viewComponent']['setVisible'](true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onSumSelected'] = $method;
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SummaryMediator', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.SummaryMediator */


/* end module: libtimesheet.view.SummaryMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'libtimesheet.model', 'libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet.model.TimeProxy', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
