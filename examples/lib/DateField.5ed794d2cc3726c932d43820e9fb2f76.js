/* start module: DateField */
$pyjs['loaded_modules']['DateField'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['DateField']['__was_initialized__']) return $pyjs['loaded_modules']['DateField'];
	var $m = $pyjs['loaded_modules']['DateField'];
	$m['__repr__'] = function() { return '<module: DateField>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DateField';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_10 = new $p['int'](10);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', null, null, false);
		$m['Calendar'] = $p['___import___']('pyjamas.ui.Calendar.Calendar', null, null, false);
		$m['CalendarPopup'] = $p['___import___']('pyjamas.ui.Calendar.CalendarPopup', null, null, false);
		$m['MonthField'] = $p['___import___']('pyjamas.ui.MonthField.MonthField', null, null, false);
		$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
		$m['log'] = $m['logging']['getAppendLogger']();
		$m['App'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'DateField';
			$cls_definition['__md5__'] = '8d72074a1b86bb5b0e35e98efed3e3af';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8d72074a1b86bb5b0e35e98efed3e3af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b,$iter1_nextval,$iter1_type,text,df1,df3,df2,vp,$iter1_array,obj,$iter1_iter,$iter1_idx;
				text = $m['TextBox']();
				df1 = $m['DateField']();
				df2 = $pyjs_kwargs_call(null, $m['DateField'], null, null, [{'format':'%Y/%m/%d'}]);
				b = $m['Button']('Show Calendar', self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cal', $m['Calendar']()) : $p['setattr'](self, 'cal', $m['Calendar']()); 
				df3 = $m['MonthField']();
				vp = $m['VerticalPanel']();
				vp['setSpacing']($constant_int_10);
				vp['add'](df1);
				vp['add'](b);
				vp['add'](df2);
				vp['add'](df3);
				$m['RootPanel']()['add'](vp);
				$iter1_iter = $p['list']([$p['getattr'](self, 'cal'), df1, df2, df3]);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					obj = $iter1_nextval;
					$pyjs_kwargs_call(obj, 'addSelectedDateListener', null, null, [{'dobj':true}, self]);
					obj['addSelectedDateListener']($p['getattr'](self, 'onYMDSelected'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
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
					if (self.prototype['__md5__'] !== '8d72074a1b86bb5b0e35e98efed3e3af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add2,p,$add1,$add4,y,x;
				p = $m['CalendarPopup']($p['getattr'](self, 'cal'));
				x = (typeof ($add1=sender['getAbsoluteLeft']())==typeof ($add2=$constant_int_10) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				y = (typeof ($add3=sender['getAbsoluteTop']())==typeof ($add4=$constant_int_10) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				p['setPopupPosition'](x, y);
				p['show']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onDateSelected', function(d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					d = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8d72074a1b86bb5b0e35e98efed3e3af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['log']['info']($p['sprintf']('onDateSelected(%s/%r)', $p['tuple']([d, d])));
				return null;
			}
	, 1, [null,null,['self'],['d']]);
			$cls_definition['onDateSelected'] = $method;
			$method = $pyjs__bind_method2('onYMDSelected', function(y, m, d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					y = arguments[1];
					m = arguments[2];
					d = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8d72074a1b86bb5b0e35e98efed3e3af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['log']['info']($p['sprintf']('onYMDSelected(%s,%s,%s)', $p['tuple']([y, m, d])));
				return null;
			}
	, 1, [null,null,['self'],['y'],['m'],['d']]);
			$cls_definition['onYMDSelected'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('App', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['pyjd']['setup']('./public/DateField.html');
			$m['app'] = $m['App']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DateField */


/* end module: DateField */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Calendar.DateField', 'pyjamas.ui.Calendar', 'pyjamas.ui.Calendar.Calendar', 'pyjamas.ui.Calendar.CalendarPopup', 'pyjamas.ui.MonthField.MonthField', 'pyjamas.ui.MonthField', 'pyjamas.logging']
*/
