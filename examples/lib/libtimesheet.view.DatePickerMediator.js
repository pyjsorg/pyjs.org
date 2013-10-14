/* start module: libtimesheet.view.DatePickerMediator */
$pyjs['loaded_modules']['libtimesheet.view.DatePickerMediator'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.DatePickerMediator']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.DatePickerMediator'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view']['__was_initialized__']) $p['___import___']('libtimesheet.view', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.DatePickerMediator'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.DatePickerMediator>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.DatePickerMediator';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view']['DatePickerMediator'] = $pyjs['loaded_modules']['libtimesheet.view.DatePickerMediator'];
	try {


		$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'libtimesheet.view', null, false);
		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view', null, false);
		$m['DatePickerMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.DatePickerMediator';
			$cls_definition['__md5__'] = '24023fd2503764f9e507f585136fb7df';
			$cls_definition['NAME'] = 'DatePickerMediator';
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
					if (self.prototype['__md5__'] !== '24023fd2503764f9e507f585136fb7df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Mediator']['__init__'](self, $p['getattr']($m['DatePickerMediator'], 'NAME'), viewComponent);
				viewComponent['prevDayBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
				viewComponent['nextDayBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
				viewComponent['prevWeekBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
				viewComponent['nextWeekBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
				self['displayDay']();
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
					if (self.prototype['__md5__'] !== '24023fd2503764f9e507f585136fb7df') {
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
					if (self.prototype['__md5__'] !== '24023fd2503764f9e507f585136fb7df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['note']]);
			$cls_definition['handleNotification'] = $method;
			$method = $pyjs__bind_method2('displayDay', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24023fd2503764f9e507f585136fb7df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['viewComponent']['displayDay']();
				self['sendNotification']($p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'date'));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['displayDay'] = $method;
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DatePickerMediator', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.DatePickerMediator */


/* end module: libtimesheet.view.DatePickerMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
