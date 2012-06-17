/* start module: DayFilterWidget */
$pyjs.loaded_modules['DayFilterWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DayFilterWidget'].__was_initialized__) return $pyjs.loaded_modules['DayFilterWidget'];
	var $m = $pyjs.loaded_modules["DayFilterWidget"];
	$m.__repr__ = function() { return "<module: DayFilterWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DayFilterWidget';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['DayCheckBox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DayFilterWidget';
			$cls_definition.__md5__ = 'be2a3b56215eedaf459c02428dc90f13';
			$method = $pyjs__bind_method2('__init__', function(owner, caption, day) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					owner = arguments[1];
					caption = arguments[2];
					day = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'be2a3b56215eedaf459c02428dc90f13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['CheckBox']['__init__'](self, caption);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('day', day) : $p['setattr'](self, 'day', day); 
				self['addClickListener']($p['getattr'](owner, 'dayCheckBoxListener'));
				self['setChecked'](owner['calendar']['getDayIncluded'](day));
				return null;
			}
	, 1, [null,null,['self'],['owner'],['caption'],['day']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['CheckBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DayCheckBox', $p['tuple']($bases), $data);
		})();
		$m['DayCheckBoxListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DayFilterWidget';
			$cls_definition.__md5__ = 'b8b0bc7b765da1588bc2fdb423d5b7d9';
			$method = $pyjs__bind_method2('__init__', function(calendar) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					calendar = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b8b0bc7b765da1588bc2fdb423d5b7d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('calendar', calendar) : $p['setattr'](self, 'calendar', calendar); 
				return null;
			}
	, 1, [null,null,['self'],['calendar']]);
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
					if (self.prototype.__md5__ !== 'b8b0bc7b765da1588bc2fdb423d5b7d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['calendar']['setDayIncluded']($p['getattr'](sender, 'day'), sender['isChecked']());
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DayCheckBoxListener', $p['tuple']($bases), $data);
		})();
		$m['DayFilterWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DayFilterWidget';
			$cls_definition.__md5__ = 'e318b8812800e7bf193abec1172429c0';
			$method = $pyjs__bind_method2('__init__', function(calendar) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					calendar = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e318b8812800e7bf193abec1172429c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var hp;
				$m['Composite']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('calendar', calendar) : $p['setattr'](self, 'calendar', calendar); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dayCheckBoxListener', $m['DayCheckBoxListener'](calendar)) : $p['setattr'](self, 'dayCheckBoxListener', $m['DayCheckBoxListener'](calendar)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('outer', $m['VerticalPanel']()) : $p['setattr'](self, 'outer', $m['VerticalPanel']()); 
				self['initWidget']($p['getattr'](self, 'outer'));
				self['setStyleName']('DynaTable-DayFilterWidget');
				self['outer']['add']($m['DayCheckBox'](self, 'Sunday', $constant_int_0));
				self['outer']['add']($m['DayCheckBox'](self, 'Monday', $constant_int_1));
				self['outer']['add']($m['DayCheckBox'](self, 'Tuesday', $constant_int_2));
				self['outer']['add']($m['DayCheckBox'](self, 'Wednesday', $constant_int_3));
				self['outer']['add']($m['DayCheckBox'](self, 'Thursday', $constant_int_4));
				self['outer']['add']($m['DayCheckBox'](self, 'Friday', $constant_int_5));
				self['outer']['add']($m['DayCheckBox'](self, 'Saturday', $constant_int_6));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buttonAll', $m['Button']('All', self)) : $p['setattr'](self, 'buttonAll', $m['Button']('All', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buttonNone', $m['Button']('None', self)) : $p['setattr'](self, 'buttonNone', $m['Button']('None', self)); 
				hp = $m['HorizontalPanel']();
				hp['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
				hp['add']($p['getattr'](self, 'buttonAll'));
				hp['add']($p['getattr'](self, 'buttonNone'));
				self['outer']['add'](hp);
				self['outer']['setCellVerticalAlignment'](hp, $p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
				self['outer']['setCellHorizontalAlignment'](hp, $p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
				return null;
			}
	, 1, [null,null,['self'],['calendar']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setAllCheckBoxes', function(checked) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					checked = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e318b8812800e7bf193abec1172429c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var widget,$iter1_nextval,$iter1_type,$iter1_iter,$bool1,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'outer');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					widget = $iter1_nextval;
					if ((($bool1=$p['hasattr'](widget, 'setChecked')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
							false :
							(typeof $bool1=='object'?
								(typeof $bool1.__nonzero__=='function'?
									$bool1.__nonzero__() :
									(typeof $bool1.__len__=='function'?
										($bool1.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						widget['setChecked'](checked);
						self['dayCheckBoxListener']['onClick'](widget);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['checked']]);
			$cls_definition['setAllCheckBoxes'] = $method;
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
					if (self.prototype.__md5__ !== 'e318b8812800e7bf193abec1172429c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3;
				if ((($bool2=$p['op_eq']($p['getattr'](self, 'buttonAll'), sender)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setAllCheckBoxes'](true);
				}
				else if ((($bool3=$p['op_eq']($p['getattr'](self, 'buttonNone'), sender)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setAllCheckBoxes'](false);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DayFilterWidget', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DayFilterWidget */


/* end module: DayFilterWidget */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HasAlignment']
*/
