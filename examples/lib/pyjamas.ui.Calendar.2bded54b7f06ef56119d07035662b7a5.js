/* start module: pyjamas.ui.Calendar */
$pyjs['loaded_modules']['pyjamas.ui.Calendar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Calendar']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Calendar'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Calendar'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Calendar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Calendar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Calendar'] = $pyjs['loaded_modules']['pyjamas.ui.Calendar'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_28 = new $p['int'](28);
		var $constant_int_29 = new $p['int'](29);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_3600 = new $p['int'](3600);
		var $constant_int_100 = new $p['int'](100);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
		$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.ui', null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
		$m['HyperlinkImage'] = $p['___import___']('pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
		$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui', null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.ui', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.ui');
		$m['time'] = $p['___import___']('time', 'pyjamas.ui');
		$m['datetime'] = $p['___import___']('datetime.datetime', 'pyjamas.ui', null, false);
		$m['date'] = $p['___import___']('datetime.date', 'pyjamas.ui', null, false);
		$m['DateSelectedHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
			$cls_definition['__md5__'] = '367d98806da99ef3b107a0c14b5f4c36';
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
					if (self.prototype['__md5__'] !== '367d98806da99ef3b107a0c14b5f4c36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedDateListeners', $p['list']([])) : $p['setattr'](self, 'selectedDateListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedDObjListeners', $p['list']([])) : $p['setattr'](self, 'selectedDObjListeners', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addSelectedDateListener', function(listener, dobj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					dobj = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '367d98806da99ef3b107a0c14b5f4c36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dobj == 'undefined') dobj=arguments['callee']['__args__'][4][1];
				var $bool1;
				if ((($bool1=dobj) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['selectedDObjListeners']['append'](listener);
				}
				else {
					self['selectedDateListeners']['append'](listener);
				}
				return null;
			}
	, 1, [null,null,['self'],['listener'],['dobj', false]]);
			$cls_definition['addSelectedDateListener'] = $method;
			$method = $pyjs__bind_method2('removeSelectedDateListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '367d98806da99ef3b107a0c14b5f4c36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					self['selectedDateListeners']['remove'](listener);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						self['selectedDObjListeners']['remove'](listener);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeSelectedDateListener'] = $method;
			$method = $pyjs__bind_method2('fireDateSelectedEvent', function(dateobj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dateobj = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '367d98806da99ef3b107a0c14b5f4c36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'selectedDateListeners');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					$p['getattr'](listener, 'onDateSelected', listener)($p['getattr'](dateobj, 'year'), $p['getattr'](dateobj, 'month'), $p['getattr'](dateobj, 'day'));
				}
				$iter2_iter = $p['getattr'](self, 'selectedDObjListeners');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					$p['getattr'](listener, 'onDateSelected', listener)(dateobj);
				}
				return null;
			}
	, 1, [null,null,['self'],['dateobj']]);
			$cls_definition['fireDateSelectedEvent'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DateSelectedHandler', $p['tuple']($bases), $data);
		})();
		$m['Calendar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
			$cls_definition['__md5__'] = '9c03ce6ae44ed8ee1c84fb5c788f0424';
			$cls_definition['monthsOfYear'] = $p['list'](['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
			$cls_definition['daysOfWeek'] = $p['list'](['S', 'M', 'T', 'W', 'T', 'F', 'S']);
			$cls_definition['today'] = 'Today';
			$cls_definition['tomorrow'] = 'Tomorrow';
			$cls_definition['yesterday'] = 'Yesterday';
			$cls_definition['cancel'] = 'Cancel';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var yr,mth,day;
				$pyjs_kwargs_call($m['FocusPanel'], '__init__', null, kwargs, [{}, self]);
				$m['DateSelectedHandler']['__init__'](self);
				var $tupleassign1 = $p['__ass_unpack']($m['time']['strftime']('%Y-%m-%d')['$$split']('-'), 3, null);
				yr = $tupleassign1[0];
				mth = $tupleassign1[1];
				day = $tupleassign1[2];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayYear', $p['int'](yr)) : $p['setattr'](self, 'todayYear', $p['int'](yr)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayMonth', $p['int'](mth)) : $p['setattr'](self, 'todayMonth', $p['int'](mth)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayDay', $p['int'](day)) : $p['setattr'](self, 'todayDay', $p['int'](day)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', $p['getattr'](self, 'todayMonth')) : $p['setattr'](self, 'currentMonth', $p['getattr'](self, 'todayMonth')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', $p['getattr'](self, 'todayYear')) : $p['setattr'](self, 'currentYear', $p['getattr'](self, 'todayYear')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentDay', $p['getattr'](self, 'todayDay')) : $p['setattr'](self, 'currentDay', $p['getattr'](self, 'todayDay')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultGrid', null) : $p['setattr'](self, 'defaultGrid', null); 
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setDate', function(_date) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					_date = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', $p['getattr'](_date, 'month')) : $p['setattr'](self, 'currentMonth', $p['getattr'](_date, 'month')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', $p['getattr'](_date, 'year')) : $p['setattr'](self, 'currentYear', $p['getattr'](_date, 'year')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentDay', $p['getattr'](_date, 'day')) : $p['setattr'](self, 'currentDay', $p['getattr'](_date, 'day')); 
				return null;
			}
	, 1, [null,null,['self'],['_date']]);
			$cls_definition['setDate'] = $method;
			$method = $pyjs__bind_method2('getMonthsOfYear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'monthsOfYear');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMonthsOfYear'] = $method;
			$method = $pyjs__bind_method2('getDaysOfWeek', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'daysOfWeek');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDaysOfWeek'] = $method;
			$method = $pyjs__bind_method2('isLeapYear', function(year) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					year = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod5,$or1,$bool4,$bool3,$and1,$bool2,$mod4,$mod6,$mod1,$mod3,$mod2,$and2,$or2;
				if ((($bool4=((($bool3=$or1=((($bool2=$and1=$p['op_eq']((typeof ($mod1=year)==typeof ($mod2=$constant_int_4) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), $constant_int_0)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_eq']((typeof ($mod3=year)==typeof ($mod4=$constant_int_100) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), $constant_int_0):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_eq']((typeof ($mod5=year)==typeof ($mod6=$constant_int_400) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), $constant_int_0))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4['__nonzero__']=='function'?
								$bool4['__nonzero__']() :
								(typeof $bool4['__len__']=='function'?
									($bool4['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
				else {
					return false;
				}
				return null;
			}
	, 1, [null,null,['self'],['year']]);
			$cls_definition['isLeapYear'] = $method;
			$method = $pyjs__bind_method2('getDaysInMonth', function(mth, year) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mth = arguments[1];
					year = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and3,$and4,days,$bool6,$bool7,$bool5,$bool8;
				days = $constant_int_0;
				if ((($bool5=$p['list']([$constant_int_1, $constant_int_3, $constant_int_5, $constant_int_7, $constant_int_8, $constant_int_10, $constant_int_12])['__contains__'](mth)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					days = $constant_int_31;
				}
				else if ((($bool6=$p['list']([$constant_int_4, $constant_int_6, $constant_int_9, $constant_int_11])['__contains__'](mth)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6['__nonzero__']=='function'?
								$bool6['__nonzero__']() :
								(typeof $bool6['__len__']=='function'?
									($bool6['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					days = $constant_int_30;
				}
				else if ((($bool8=((($bool7=$and3=$p['op_eq'](mth, $constant_int_2)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?self['isLeapYear'](year):$and3)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					days = $constant_int_29;
				}
				else {
					days = $constant_int_28;
				}
				return days;
			}
	, 1, [null,null,['self'],['mth'],['year']]);
			$cls_definition['getDaysInMonth'] = $method;
			$method = $pyjs__bind_method2('setPosition', function(left, top) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				element = self['getElement']();
				$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
				$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
				return null;
			}
	, 1, [null,null,['self'],['left'],['top']]);
			$cls_definition['setPosition'] = $method;
			$method = $pyjs__bind_method2('show', function(left, top) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,$bool10,$bool9;
				if ((($bool9=((($cmp1=left)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					left = $constant_int_0;
				}
				if ((($bool10=((($cmp3=top)===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					top = $constant_int_0;
				}
				self['setPosition'](left, top);
				self['drawCurrent']();
				self['setVisible'](true);
				return null;
			}
	, 1, [null,null,['self'],['left'],['top']]);
			$cls_definition['show'] = $method;
			$method = $pyjs__bind_method2('drawCurrent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var yr,mth,day;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentDay')]), 3, null);
				yr = $tupleassign2[0];
				mth = $tupleassign2[1];
				day = $tupleassign2[2];
				self['draw']($p['int'](mth), $p['int'](yr));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawCurrent'] = $method;
			$method = $pyjs__bind_method2('draw', function(month, year) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,hasChangeMonth,txt,$sub2,$sub1,tod,$or4,$or3,$and5,$and6,$and7,yy,$bool17,$2,$1,g,mm,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
				tod = $m['time']['localtime']();
				mm = $p['getattr'](tod, 'tm_mon');
				yy = $p['getattr'](tod, 'tm_year');
				hasChangeMonth = false;
				if ((($bool12=((($bool11=$or3=!$p['op_eq'](yy, $p['getattr'](self, 'todayYear'))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:!$p['op_eq'](mm, $p['getattr'](self, 'todayMonth')))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					hasChangeMonth = true;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayYear', yy) : $p['setattr'](self, 'todayYear', yy); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayMonth', mm) : $p['setattr'](self, 'todayMonth', mm); 
				}
				if ((($bool13=$p['op_is']($p['getattr'](self, 'defaultGrid'), null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['drawFull'](month, year);
				}
				else {
					if ((($bool17=((($bool15=$and5=!(($bool14=hasChangeMonth) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool16=$and6=$p['op_eq'](month, $p['getattr'](self, 'todayMonth'))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq'](year, $p['getattr'](self, 'todayYear')):$and6):$and5)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['middlePanel']['setWidget']($p['getattr'](self, 'defaultGrid'));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', $p['getattr'](self, 'todayMonth')) : $p['setattr'](self, 'currentMonth', $p['getattr'](self, 'todayMonth')); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', $p['getattr'](self, 'todayYear')) : $p['setattr'](self, 'currentYear', $p['getattr'](self, 'todayYear')); 
					}
					else {
						g = self['drawGrid'](month, year);
						if ((($bool18=hasChangeMonth) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
								false :
								(typeof $bool18=='object'?
									(typeof $bool18['__nonzero__']=='function'?
										$bool18['__nonzero__']() :
										(typeof $bool18['__len__']=='function'?
											($bool18['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultGrid', (typeof grid == "undefined"?$m['grid']:grid)) : $p['setattr'](self, 'defaultGrid', (typeof grid == "undefined"?$m['grid']:grid)); 
						}
					}
					txt = '<b>';
					txt = (typeof ($add5=txt)==typeof ($add6=(typeof ($add3=(typeof ($add1=(typeof ($1=self['getMonthsOfYear']())['__array'] != 'undefined'?
						((typeof $1['__array'][$2=(typeof ($sub1=month)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']((typeof ($sub1=month)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)))))==typeof ($add2=' ') && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)))==typeof ($add4=$p['str'](year)) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					txt = (typeof ($add7=txt)==typeof ($add8='</b>') && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					self['titlePanel']['setWidget']($m['HTML'](txt));
					self['setVisible'](true);
				}
				return null;
			}
	, 1, [null,null,['self'],['month'],['year']]);
			$cls_definition['draw'] = $method;
			$method = $pyjs__bind_method2('drawFull', function(month, year) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h2,h1,tvp,h4,h5,txt,yr,tp,$sub3,$sub4,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$4,$3,mth,grid,$add9;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vp', $m['VerticalPanel']()) : $p['setattr'](self, 'vp', $m['VerticalPanel']()); 
				self['vp']['setSpacing']($constant_int_2);
				self['vp']['addStyleName']('calendarbox calendar-module calendar');
				self['setWidget']($p['getattr'](self, 'vp'));
				self['setVisible'](false);
				mth = $p['int'](month);
				yr = $p['int'](year);
				tp = $m['HorizontalPanel']();
				tp['addStyleName']('calendar-top-panel');
				tp['setSpacing']($constant_int_5);
				h1 = $m['Hyperlink']('<<');
				h1['addClickListener']($p['getattr'](self, 'onPreviousYear'));
				h2 = $m['Hyperlink']('<');
				h2['addClickListener']($p['getattr'](self, 'onPreviousMonth'));
				h4 = $m['Hyperlink']('>');
				h4['addClickListener']($p['getattr'](self, 'onNextMonth'));
				h5 = $m['Hyperlink']('>>');
				h5['addClickListener']($p['getattr'](self, 'onNextYear'));
				tp['add'](h1);
				tp['add'](h2);
				txt = '<b>';
				txt = (typeof ($add13=txt)==typeof ($add14=(typeof ($add11=(typeof ($add9=(typeof ($3=self['getMonthsOfYear']())['__array'] != 'undefined'?
					((typeof $3['__array'][$4=(typeof ($sub3=mth)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']((typeof ($sub3=mth)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))))==typeof ($add10=' ') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=$p['str'](yr)) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				txt = (typeof ($add15=txt)==typeof ($add16='</b>') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('titlePanel', $m['SimplePanel']()) : $p['setattr'](self, 'titlePanel', $m['SimplePanel']()); 
				self['titlePanel']['setWidget']($m['HTML'](txt));
				self['titlePanel']['setStyleName']('calendar-center');
				tp['add']($p['getattr'](self, 'titlePanel'));
				tp['add'](h4);
				tp['add'](h5);
				tvp = $m['VerticalPanel']();
				tvp['setSpacing']($constant_int_10);
				tvp['add'](tp);
				self['vp']['add'](tvp);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('middlePanel', $m['SimplePanel']()) : $p['setattr'](self, 'middlePanel', $m['SimplePanel']()); 
				grid = self['drawGrid'](mth, yr);
				self['middlePanel']['setWidget'](grid);
				self['vp']['add']($p['getattr'](self, 'middlePanel'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultGrid', grid) : $p['setattr'](self, 'defaultGrid', grid); 
				self['_gridShortcutsLinks']();
				self['_gridCancelLink']();
				self['setVisible'](true);
				return null;
			}
	, 1, [null,null,['self'],['month'],['year']]);
			$cls_definition['drawFull'] = $method;
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bh1,bh2,b,bh3;
				bh1 = $m['Hyperlink']($p['getattr'](self, 'yesterday'));
				bh1['addClickListener']($p['getattr'](self, 'onYesterday'));
				bh2 = $m['Hyperlink']($p['getattr'](self, 'today'));
				bh2['addClickListener']($p['getattr'](self, 'onToday'));
				bh3 = $m['Hyperlink']($p['getattr'](self, 'tomorrow'));
				bh3['addClickListener']($p['getattr'](self, 'onTomorrow'));
				b = $m['HorizontalPanel']();
				b['add'](bh1);
				b['add'](bh2);
				b['add'](bh3);
				b['addStyleName']('calendar-shortcuts');
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bh4,b2;
				bh4 = $m['Hyperlink']($p['getattr'](self, 'cancel'));
				bh4['addClickListener']($p['getattr'](self, 'onCancel'));
				b2 = $m['SimplePanel']();
				b2['add'](bh4);
				b2['addStyleName']('calendar-cancel');
				self['vp']['add'](b2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_gridCancelLink'] = $method;
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$add36,$iter3_array,pos,$add35,$6,$mod7,daysInMonth,slots,$add26,$mod9,startPos,row,$add29,$add28,rows,struct,$add21,$add20,$add22,$add25,$add24,$add27,$mod8,$bool25,$bool24,$bool26,$bool21,$iter3_iter,$bool23,$bool22,$sub6,$sub5,$bool20,$and8,$and9,$mod11,$mod10,$mod12,$5,$iter3_idx,$and12,day,$and10,$add17,grid,$cmp10,$iter3_type,$div2,$div1,$add18,$add19,$cmp5,$cmp7,$iter3_nextval,i,$add33,$add30,$add31,$cmp9,$cmp8,$add34,col,$add32,secs,$and11,$add23,$cmp6;
				daysInMonth = self['getDaysInMonth'](month, year);
				secs = $m['time']['mktime']($p['tuple']([year, month, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]));
				struct = $m['time']['localtime'](secs);
				startPos = (typeof ($mod7=(typeof ($add17=$p['getattr'](struct, 'tm_wday'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($mod8=$constant_int_7) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
				slots = (typeof ($sub5=(typeof ($add19=startPos)==typeof ($add20=daysInMonth) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				rows = (typeof ($add21=$p['int']((typeof ($div1=slots)==typeof ($div2=$constant_int_7) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				grid = $m['Grid']((typeof ($add23=rows)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)), $constant_int_7);
				grid['setWidth']('100%');
				grid['addTableListener'](self);
				self['middlePanel']['setWidget'](grid);
				$iter3_iter = $p['range']($constant_int_7);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					grid['setText']($constant_int_0, i, (typeof ($5=self['getDaysOfWeek']())['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i)));
					grid['cellFormatter']['addStyleName']($constant_int_0, i, 'calendar-header');
				}
				day = $constant_int_0;
				pos = $constant_int_0;
				while ((($bool19=((($cmp5=pos)===($cmp6=startPos)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grid['setText']($constant_int_1, pos, ' ');
					grid['cellFormatter']['setStyleAttr']($constant_int_1, pos, 'background', '#f3f3f3');
					grid['cellFormatter']['addStyleName']($constant_int_1, pos, 'calendar-blank-cell');
					pos = (typeof ($add25=pos)==typeof ($add26=$constant_int_1) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
				}
				row = $constant_int_1;
				day = $constant_int_1;
				col = startPos;
				while ((($bool20=((($cmp7=day)===($cmp8=daysInMonth)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool22=((($bool21=$and8=$p['op_eq']((typeof ($mod9=pos)==typeof ($mod10=$constant_int_7) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10)), $constant_int_0)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq'](day, $constant_int_1):$and8)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
							false :
							(typeof $bool22=='object'?
								(typeof $bool22['__nonzero__']=='function'?
									$bool22['__nonzero__']() :
									(typeof $bool22['__len__']=='function'?
										($bool22['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						row = (typeof ($add27=row)==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28));
					}
					col = (typeof ($mod11=pos)==typeof ($mod12=$constant_int_7) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12));
					grid['setText'](row, col, $p['str'](day));
					if ((($bool25=((($bool23=$and10=$p['op_eq']($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'todayYear'))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool24=$and11=$p['op_eq']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'todayMonth'))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq'](day, $p['getattr'](self, 'todayDay')):$and11):$and10)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
							false :
							(typeof $bool25=='object'?
								(typeof $bool25['__nonzero__']=='function'?
									$bool25['__nonzero__']() :
									(typeof $bool25['__len__']=='function'?
										($bool25['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						grid['cellFormatter']['addStyleName'](row, col, 'calendar-cell-today');
					}
					else {
						grid['cellFormatter']['addStyleName'](row, col, 'calendar-day-cell');
					}
					day = (typeof ($add29=day)==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30));
					pos = (typeof ($add31=pos)==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32));
				}
				col = (typeof ($add33=col)==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34));
				while ((($bool26=((($cmp9=col)===($cmp10=$constant_int_7)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grid['setText'](row, col, ' ');
					grid['cellFormatter']['setStyleAttr'](row, col, 'background', '#f3f3f3');
					grid['cellFormatter']['addStyleName'](row, col, 'calendar-blank-cell');
					col = (typeof ($add35=col)==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36));
				}
				return grid;
			}
	, 1, [null,null,['self'],['month'],['year']]);
			$cls_definition['drawGrid'] = $method;
			$method = $pyjs__bind_method2('onCellClicked', function(grid, row, col) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					grid = arguments[1];
					row = arguments[2];
					col = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var selectedDay,e,text,$bool28,$bool27,$pyjs_try_err;
				if ((($bool27=$p['op_eq'](row, $constant_int_0)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				text = grid['getText'](row, col)['strip']();
				if ((($bool28=$p['op_eq'](text, '')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				try {
					selectedDay = $p['int'](text);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						return null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['fireDateSelectedEvent']($m['date']($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), selectedDay));
				self['setVisible'](false);
				return null;
			}
	, 1, [null,null,['self'],['grid'],['row'],['col']]);
			$cls_definition['onCellClicked'] = $method;
			$method = $pyjs__bind_method2('onPreviousYear', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['drawPreviousYear']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onPreviousYear'] = $method;
			$method = $pyjs__bind_method2('onPreviousMonth', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['drawPreviousMonth']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onPreviousMonth'] = $method;
			$method = $pyjs__bind_method2('onNextMonth', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['drawNextMonth']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onNextMonth'] = $method;
			$method = $pyjs__bind_method2('onNextYear', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['drawNextYear']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onNextYear'] = $method;
			$method = $pyjs__bind_method2('onDate', function(event, yy, mm, dd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					yy = arguments[2];
					mm = arguments[3];
					dd = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['fireDateSelectedEvent']($m['date'](yy, mm, dd));
				self['setVisible'](false);
				return null;
			}
	, 1, [null,null,['self'],['event'],['yy'],['mm'],['dd']]);
			$cls_definition['onDate'] = $method;
			$method = $pyjs__bind_method2('onYesterday', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var mm,yesterday,$mul2,yy,$sub8,dd,$sub7,$mul1;
				yesterday = $m['time']['localtime']((typeof ($sub7=$m['time']['time']())==typeof ($sub8=(typeof ($mul1=$constant_int_3600)==typeof ($mul2=$constant_int_24) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)));
				mm = $p['getattr'](yesterday, 'tm_mon');
				dd = $p['getattr'](yesterday, 'tm_mday');
				yy = $p['getattr'](yesterday, 'tm_year');
				self['onDate'](event, yy, mm, dd);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onYesterday'] = $method;
			$method = $pyjs__bind_method2('onToday', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var mm,yy,dd,tod;
				tod = $m['time']['localtime']();
				mm = $p['getattr'](tod, 'tm_mon');
				dd = $p['getattr'](tod, 'tm_mday');
				yy = $p['getattr'](tod, 'tm_year');
				self['onDate'](event, yy, mm, dd);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onToday'] = $method;
			$method = $pyjs__bind_method2('onTomorrow', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add38,mm,$add37,yy,dd,tom,$mul4,$mul3;
				tom = $m['time']['localtime']((typeof ($add37=$m['time']['time']())==typeof ($add38=(typeof ($mul3=$constant_int_3600)==typeof ($mul4=$constant_int_24) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)));
				mm = $p['getattr'](tom, 'tm_mon');
				dd = $p['getattr'](tom, 'tm_mday');
				yy = $p['getattr'](tom, 'tm_year');
				self['onDate'](event, yy, mm, dd);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTomorrow'] = $method;
			$method = $pyjs__bind_method2('onCancel', function(event) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setVisible'](false);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onCancel'] = $method;
			$method = $pyjs__bind_method2('drawDate', function(month, year) {
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
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', month) : $p['setattr'](self, 'currentMonth', month); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', year) : $p['setattr'](self, 'currentYear', year); 
				self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
				return null;
			}
	, 1, [null,null,['self'],['month'],['year']]);
			$cls_definition['drawDate'] = $method;
			$method = $pyjs__bind_method2('drawPreviousMonth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub12,$sub11,$sub10,$sub9,$bool29;
				if ((($bool29=$p['op_eq']($p['int']($p['getattr'](self, 'currentMonth')), $constant_int_1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', $constant_int_12) : $p['setattr'](self, 'currentMonth', $constant_int_12); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', (typeof ($sub9=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10))) : $p['setattr'](self, 'currentYear', (typeof ($sub9=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10))); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', (typeof ($sub11=$p['int']($p['getattr'](self, 'currentMonth')))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'currentMonth', (typeof ($sub11=$p['int']($p['getattr'](self, 'currentMonth')))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))); 
				}
				self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawPreviousMonth'] = $method;
			$method = $pyjs__bind_method2('drawNextMonth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add39,$add42,$add41,$add40,$bool30;
				if ((($bool30=$p['op_eq']($p['int']($p['getattr'](self, 'currentMonth')), $constant_int_12)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', $constant_int_1) : $p['setattr'](self, 'currentMonth', $constant_int_1); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', (typeof ($add39=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))) : $p['setattr'](self, 'currentYear', (typeof ($add39=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMonth', (typeof ($add41=$p['int']($p['getattr'](self, 'currentMonth')))==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42))) : $p['setattr'](self, 'currentMonth', (typeof ($add41=$p['int']($p['getattr'](self, 'currentMonth')))==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42))); 
				}
				self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawNextMonth'] = $method;
			$method = $pyjs__bind_method2('drawPreviousYear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$sub14;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', (typeof ($sub13=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($sub14=$constant_int_1) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))) : $p['setattr'](self, 'currentYear', (typeof ($sub13=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($sub14=$constant_int_1) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))); 
				self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawPreviousYear'] = $method;
			$method = $pyjs__bind_method2('drawNextYear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c03ce6ae44ed8ee1c84fb5c788f0424') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add44,$add43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentYear', (typeof ($add43=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44))) : $p['setattr'](self, 'currentYear', (typeof ($add43=$p['int']($p['getattr'](self, 'currentYear')))==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44))); 
				self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawNextYear'] = $method;
			var $bases = new Array($m['FocusPanel'],$m['DateSelectedHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Calendar', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'Calendar', $m['Calendar']);
		$m['DateField'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
			$cls_definition['__md5__'] = 'df93590de82016f40a78719db4779dbb';
			$cls_definition['img_base'] = null;
			$cls_definition['icon_img'] = null;
			$cls_definition['icon_style'] = 'calendar-img';
			$cls_definition['today_text'] = 'Today';
			$cls_definition['today_style'] = 'calendar-today-link';
			$method = $pyjs__bind_method2('__init__', function(format) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					format = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof format == 'undefined') format=arguments['callee']['__args__'][3][1];
				var $cmp15,vp,$bool34,$add46,$bool35,hp,$cmp16,$bool32,$bool33,$cmp14,$bool31,$cmp11,$cmp13,$cmp12,$add45;
				$m['DateSelectedHandler']['__init__'](self);
				if ((($bool31=$p['op_is']($p['getattr'](self, 'img_base'), null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31['__nonzero__']=='function'?
								$bool31['__nonzero__']() :
								(typeof $bool31['__len__']=='function'?
									($bool31['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('img_base', $m['pygwt']['getImageBaseURL'](true)) : $p['setattr'](self, 'img_base', $m['pygwt']['getImageBaseURL'](true)); 
				}
				if ((($bool32=$p['op_is']($p['getattr'](self, 'icon_img'), null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('icon_img', (typeof ($add45=$p['getattr'](self, 'img_base'))==typeof ($add46='icon_calendar.gif') && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46))) : $p['setattr'](self, 'icon_img', (typeof ($add45=$p['getattr'](self, 'img_base'))==typeof ($add46='icon_calendar.gif') && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46))); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', format) : $p['setattr'](self, 'format', format); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tbox', $m['TextBox']()) : $p['setattr'](self, 'tbox', $m['TextBox']()); 
				self['tbox']['setVisibleLength']($constant_int_10);
				if ((($bool33=((((($cmp11=format['find']('-'))===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sep', '-') : $p['setattr'](self, 'sep', '-'); 
				}
				else if ((($bool34=((((($cmp13=format['find']('/'))===($cmp14=$constant_int_0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))))|1) == 1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sep', '/') : $p['setattr'](self, 'sep', '/'); 
				}
				else if ((($bool35=((((($cmp15=format['find']('.'))===($cmp16=$constant_int_0)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sep', '.') : $p['setattr'](self, 'sep', '.'); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sep', '') : $p['setattr'](self, 'sep', ''); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('calendar', $m['Calendar']()) : $p['setattr'](self, 'calendar', $m['Calendar']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('img', $m['Image']($p['getattr'](self, 'icon_img'))) : $p['setattr'](self, 'img', $m['Image']($p['getattr'](self, 'icon_img'))); 
				self['img']['addStyleName']($p['getattr'](self, 'icon_style'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('calendarLink', $m['HyperlinkImage']($p['getattr'](self, 'img'))) : $p['setattr'](self, 'calendarLink', $m['HyperlinkImage']($p['getattr'](self, 'img'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('todayLink', $m['Hyperlink']($p['getattr'](self, 'today_text'))) : $p['setattr'](self, 'todayLink', $m['Hyperlink']($p['getattr'](self, 'today_text'))); 
				self['todayLink']['addStyleName']($p['getattr'](self, 'today_style'));
				hp = $m['HorizontalPanel']();
				hp['setSpacing']($constant_int_2);
				vp = $m['VerticalPanel']();
				hp['add']($p['getattr'](self, 'tbox'));
				vp['add']($p['getattr'](self, 'calendarLink'));
				vp['add']($p['getattr'](self, 'todayLink'));
				hp['add'](vp);
				$m['Composite']['__init__'](self);
				self['initWidget'](hp);
				self['tbox']['addFocusListener'](self);
				self['calendar']['addSelectedDateListener']($p['getattr'](self, 'onDateSelected'));
				self['todayLink']['addClickListener']($p['getattr'](self, 'onTodayClicked'));
				self['calendarLink']['addClickListener']($p['getattr'](self, 'onShowCalendar'));
				self['tbox']['addChangeListener']($p['getattr'](self, 'onFieldChanged'));
				self['tbox']['addInputListener']($p['getattr'](self, 'onFieldChanged'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_last_date', null) : $p['setattr'](self, '_last_date', null); 
				return null;
			}
	, 1, [null,null,['self'],['format', '%d-%m-%Y']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('emitSelectedDate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _d,$bool36;
				_d = self['getDate']();
				if ((($bool36=$p['op_eq'](_d, $p['getattr'](self, '_last_date'))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_last_date', _d) : $p['setattr'](self, '_last_date', _d); 
				self['fireDateSelectedEvent'](_d);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['emitSelectedDate'] = $method;
			$method = $pyjs__bind_method2('onFieldChanged', function(event) {
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
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['emitSelectedDate']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onFieldChanged'] = $method;
			$method = $pyjs__bind_method2('getTextBox', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tbox');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextBox'] = $method;
			$method = $pyjs__bind_method2('getCalendar', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'calendar');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCalendar'] = $method;
			$method = $pyjs__bind_method2('getDate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,_sdate;
				_sdate = self['tbox']['getText']();
				try {
					return $m['datetime']['strptime'](_sdate, $p['getattr'](self, 'format'))['date']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						return null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDate'] = $method;
			$method = $pyjs__bind_method2('setID', function(id) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					id = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['tbox']['setID'](id);
				return null;
			}
	, 1, [null,null,['self'],['id']]);
			$cls_definition['setID'] = $method;
			$method = $pyjs__bind_method2('onDateSelected', function(yyyy, mm, dd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					yyyy = arguments[1];
					mm = arguments[2];
					dd = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,secs;
				secs = $m['time']['mktime']($p['tuple']([$p['int'](yyyy), $p['int'](mm), $p['int'](dd), $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]));
				d = $m['time']['strftime']($p['getattr'](self, 'format'), $m['time']['localtime'](secs));
				self['tbox']['setText'](d);
				self['emitSelectedDate']();
				return null;
			}
	, 1, [null,null,['self'],['yyyy'],['mm'],['dd']]);
			$cls_definition['onDateSelected'] = $method;
			$method = $pyjs__bind_method2('onLostFocus', function(sender) {
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
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add50,$add51,$add52,$add53,$add54,$add49,$add48,$add47,text,$and13,$bool37,$and14,$len1,$bool38,txt;
				text = self['tbox']['getText']()['strip']();
				if ((($bool38=((($bool37=$and13=text) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((($len1=text) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_8):$and13)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					txt = (typeof ($add53=(typeof ($add51=(typeof ($add49=(typeof ($add47=$p['__getslice'](text, $constant_int_0, $constant_int_2))==typeof ($add48=$p['getattr'](self, 'sep')) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48)))==typeof ($add50=$p['__getslice'](text, $constant_int_2, $constant_int_4)) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50)))==typeof ($add52=$p['getattr'](self, 'sep')) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)))==typeof ($add54=$p['__getslice'](text, $constant_int_4, $constant_int_8)) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54));
					self['tbox']['setText'](txt);
				}
				self['emitSelectedDate']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onLostFocus'] = $method;
			$method = $pyjs__bind_method2('onFocus', function(sender) {
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
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onFocus'] = $method;
			$method = $pyjs__bind_method2('onTodayClicked', function(event) {
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
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var today;
				today = $m['time']['strftime']($p['getattr'](self, 'format'));
				self['tbox']['setText'](today);
				self['emitSelectedDate']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTodayClicked'] = $method;
			$method = $pyjs__bind_method2('onShowCalendar', function(sender) {
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
					if (self.prototype['__md5__'] !== 'df93590de82016f40a78719db4779dbb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var txt,$add56,$add57,$add58,p,$pyjs_try_err,$bool39,y,x,_d,$add55;
				txt = self['tbox']['getText']()['strip']();
				try {
					if ((($bool39=txt) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
							false :
							(typeof $bool39=='object'?
								(typeof $bool39['__nonzero__']=='function'?
									$bool39['__nonzero__']() :
									(typeof $bool39['__len__']=='function'?
										($bool39['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						_d = $m['datetime']['strptime'](txt, $p['getattr'](self, 'format'))['date']();
						self['calendar']['setDate'](_d);
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				p = (typeof CalendarPopup == "undefined"?$m['CalendarPopup']:CalendarPopup)($p['getattr'](self, 'calendar'));
				x = (typeof ($add55=self['tbox']['getAbsoluteLeft']())==typeof ($add56=$constant_int_10) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56));
				y = (typeof ($add57=self['tbox']['getAbsoluteTop']())==typeof ($add58=$constant_int_10) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58));
				p['setPopupPosition'](x, y);
				p['show']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onShowCalendar'] = $method;
			var $bases = new Array($m['Composite'],$m['DateSelectedHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DateField', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'DateField', $m['DateField']);
		$m['CalendarPopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
			$cls_definition['__md5__'] = 'f5d95b6eb15154dd481d6d2861229b43';
			$method = $pyjs__bind_method2('__init__', function(c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					c = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f5d95b6eb15154dd481d6d2861229b43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var p;
				$m['PopupPanel']['__init__'](self, true);
				p = $m['SimplePanel']();
				p['add'](c);
				c['show']($constant_int_10, $constant_int_10);
				p['setWidth']('100%');
				self['setWidget'](p);
				return null;
			}
	, 1, [null,null,['self'],['c']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['PopupPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CalendarPopup', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'CalendarPopup', $m['CalendarPopup']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Calendar */


/* end module: pyjamas.ui.Calendar */


/*
PYJS_DEPS: ['pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui.HyperlinkImage', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HasAlignment', 'pyjamas.DOM', 'pygwt', 'time', 'datetime.datetime', 'datetime', 'datetime.date']
*/
