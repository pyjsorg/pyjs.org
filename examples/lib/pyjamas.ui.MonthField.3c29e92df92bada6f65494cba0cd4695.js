/* start module: pyjamas.ui.MonthField */
$pyjs['loaded_modules']['pyjamas.ui.MonthField'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MonthField']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MonthField'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MonthField'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MonthField>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MonthField';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MonthField'] = $pyjs['loaded_modules']['pyjamas.ui.MonthField'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', 'pyjamas.ui', null, false);
		$m['Calendar'] = $p['___import___']('pyjamas.ui.Calendar.Calendar', 'pyjamas.ui', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'pyjamas.ui', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['_'] = $p['___import___']('pyjamas.locale._', 'pyjamas.ui', null, false);
		$m['NoDaysCalendar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.MonthField';
			$cls_definition['__md5__'] = '38cb59087c4d73638f9d9699c2b84c76';
			$cls_definition['cancel'] = $m['_']('Cancel');
			$cls_definition['monthsOfYear'] = $p['list']([$m['_']('Jan'), $m['_']('Feb'), $m['_']('Mar'), $m['_']('Apr'), $m['_']('May'), $m['_']('Jun'), $m['_']('Jul'), $m['_']('Aug'), $m['_']('Sep'), $m['_']('Oct'), $m['_']('Nov'), $m['_']('Dec')]);
			$method = $pyjs__bind_method2('drawGrid', function(month, year) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					month = arguments[1];
					year = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '38cb59087c4d73638f9d9699c2b84c76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var empty;
				empty = $m['SimplePanel']();
				return empty;
			}
	, 1, [null,null,['self'],['month'],['year']]);
			$cls_definition['drawGrid'] = $method;
			$method = $pyjs__bind_method2('_gridShortcutsLinks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '38cb59087c4d73638f9d9699c2b84c76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bh1,b,bh3,b2;
				bh1 = $m['Hyperlink']($m['_']('Current'));
				bh1['addClickListener']($p['getattr'](self, 'onToday'));
				b2 = $m['Button']($m['_']('Choose'), $p['getattr'](self, 'onMonthSelected'));
				bh3 = $m['Hyperlink']($p['getattr'](self, 'cancel'));
				bh3['addClickListener']($p['getattr'](self, 'onCancel'));
				b = $m['HorizontalPanel']();
				b['addStyleName']('calendar-shortcuts');
				b['add'](bh1);
				b['add'](b2);
				b['add'](bh3);
				self['vp']['setHorizontalAlignment']('center');
				b['setPadding']($constant_int_10);
				self['vp']['add'](b);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_gridShortcutsLinks'] = $method;
			$method = $pyjs__bind_method2('_gridCancelLink', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '38cb59087c4d73638f9d9699c2b84c76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_gridCancelLink'] = $method;
			$method = $pyjs__bind_method2('onMonthSelected', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '38cb59087c4d73638f9d9699c2b84c76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onDate'](event, $p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMonthSelected'] = $method;
			var $bases = new Array($m['Calendar']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NoDaysCalendar', $p['tuple']($bases), $data);
		})();
		$m['MonthField'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.MonthField';
			$cls_definition['__md5__'] = 'e66918d50df08a6ab681ab81bd48b0db';
			$cls_definition['today_text'] = $m['_']('Current');
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
					if (self.prototype['__md5__'] !== 'e66918d50df08a6ab681ab81bd48b0db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['MonthField'], self), '__init__', null, null, [{'format':'%Y-%m'}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('calendar', $m['NoDaysCalendar']()) : $p['setattr'](self, 'calendar', $m['NoDaysCalendar']()); 
				self['calendar']['addSelectedDateListener']($p['getattr'](self, 'onDateSelected'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DateField']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MonthField', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.MonthField */


/* end module: pyjamas.ui.MonthField */


/*
PYJS_DEPS: ['pyjamas.ui.Calendar.DateField', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Calendar', 'pyjamas.ui.Calendar.Calendar', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.locale._', 'pyjamas.locale']
*/
