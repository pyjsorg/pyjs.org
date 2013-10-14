/* start module: libemployeeadmin.components */
$pyjs['loaded_modules']['libemployeeadmin.components'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libemployeeadmin.components']['__was_initialized__']) return $pyjs['loaded_modules']['libemployeeadmin.components'];
	if(typeof $pyjs['loaded_modules']['libemployeeadmin'] == 'undefined' || !$pyjs['loaded_modules']['libemployeeadmin']['__was_initialized__']) $p['___import___']('libemployeeadmin', null);
	var $m = $pyjs['loaded_modules']['libemployeeadmin.components'];
	$m['__repr__'] = function() { return '<module: libemployeeadmin.components>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libemployeeadmin.components';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libemployeeadmin']['components'] = $pyjs['loaded_modules']['libemployeeadmin.components'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_0 = new $p['int'](0);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'libemployeeadmin', null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'libemployeeadmin', null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'libemployeeadmin', null, false);
		$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'libemployeeadmin', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'libemployeeadmin', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'libemployeeadmin', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'libemployeeadmin', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'libemployeeadmin', null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'libemployeeadmin', null, false);
		$m['PasswordTextBox'] = $p['___import___']('pyjamas.ui.PasswordTextBox.PasswordTextBox', 'libemployeeadmin', null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', 'libemployeeadmin', null, false);
		$m['TooltipListener'] = $p['___import___']('pyjamas.ui.Tooltip.TooltipListener', 'libemployeeadmin', null, false);
		$m['Grid'] = $p['___import___']('Grid.Grid', 'libemployeeadmin', null, false);
		$m['ApplicationConstants'] = $p['___import___']('ApplicationConstants', 'libemployeeadmin');
		$m['PyJsApp'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.components';
			$cls_definition['__md5__'] = 'df6ee6d4a30cafed2c5cf1658cbe4d9f';
			$cls_definition['appFrame'] = null;
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
					if (self.prototype['__md5__'] !== 'df6ee6d4a30cafed2c5cf1658cbe4d9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('appFrame', (typeof AppFrame == "undefined"?$m['AppFrame']:AppFrame)()) : $p['setattr'](self, 'appFrame', (typeof AppFrame == "undefined"?$m['AppFrame']:AppFrame)()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyJsApp', $p['tuple']($bases), $data);
		})();
		$m['AppFrame'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.components';
			$cls_definition['__md5__'] = '82e9d46567dd299b3a8feb86debc0581';
			$cls_definition['userForm'] = null;
			$cls_definition['userList'] = null;
			$cls_definition['rolePanel'] = null;
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
					if (self.prototype['__md5__'] !== '82e9d46567dd299b3a8feb86debc0581') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panel', $m['DockPanel']()) : $p['setattr'](self, 'panel', $m['DockPanel']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userList', (typeof UserList == "undefined"?$m['UserList']:UserList)(self)) : $p['setattr'](self, 'userList', (typeof UserList == "undefined"?$m['UserList']:UserList)(self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userForm', (typeof UserForm == "undefined"?$m['UserForm']:UserForm)(self)) : $p['setattr'](self, 'userForm', (typeof UserForm == "undefined"?$m['UserForm']:UserForm)(self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rolePanel', (typeof RolePanel == "undefined"?$m['RolePanel']:RolePanel)(self)) : $p['setattr'](self, 'rolePanel', (typeof RolePanel == "undefined"?$m['RolePanel']:RolePanel)(self)); 
				self['panel']['add']($p['getattr'](self, 'userList'), $p['getattr']($m['DockPanel'], 'NORTH'));
				self['panel']['add']($p['getattr'](self, 'userForm'), $p['getattr']($m['DockPanel'], 'WEST'));
				self['panel']['add']($p['getattr'](self, 'rolePanel'), $p['getattr']($m['DockPanel'], 'EAST'));
				$m['RootPanel']()['add']($p['getattr'](self, 'panel'));
				self['Show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('Show', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '82e9d46567dd299b3a8feb86debc0581') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['Show'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AppFrame', $p['tuple']($bases), $data);
		})();
		$m['RolePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.components';
			$cls_definition['__md5__'] = 'ad5aa9f1d7f5a800f8fa01a5f7291f3e';
			$cls_definition['user'] = null;
			$cls_definition['selectedRole'] = null;
			$cls_definition['roleList'] = null;
			$cls_definition['roleCombo'] = null;
			$cls_definition['addBtn'] = null;
			$cls_definition['removeBtn'] = null;
			$method = $pyjs__bind_method2('__init__', function(parent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var hpanel,vpanel;
				$m['AbsolutePanel']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('roleList', $m['ListBox']()) : $p['setattr'](self, 'roleList', $m['ListBox']()); 
				self['roleList']['setWidth']('300px');
				self['roleList']['setVisibleItemCount']($constant_int_6);
				self['roleList']['addChangeListener']($p['getattr'](self, 'onListChange'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('roleCombo', $m['ListBox']()) : $p['setattr'](self, 'roleCombo', $m['ListBox']()); 
				self['roleCombo']['addKeyboardListener'](self);
				self['roleCombo']['addChangeListener']($p['getattr'](self, 'onComboChange'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('addBtn', $m['Button']('Add')) : $p['setattr'](self, 'addBtn', $m['Button']('Add')); 
				self['addBtn']['setEnabled'](false);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('removeBtn', $m['Button']('Remove')) : $p['setattr'](self, 'removeBtn', $m['Button']('Remove')); 
				self['removeBtn']['setEnabled'](false);
				vpanel = $m['VerticalPanel']();
				vpanel['add']($p['getattr'](self, 'roleList'));
				hpanel = $m['HorizontalPanel']();
				hpanel['add']($p['getattr'](self, 'roleCombo'));
				hpanel['add']($p['getattr'](self, 'addBtn'));
				hpanel['add']($p['getattr'](self, 'removeBtn'));
				vpanel['add'](hpanel);
				self['add'](vpanel);
				self['clearForm']();
				return null;
			}
	, 1, [null,null,['self'],['parent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clearForm', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('user', null) : $p['setattr'](self, 'user', null); 
				self['updateRoleList']($p['list']([]));
				self['roleCombo']['setItemTextSelection'](null);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearForm'] = $method;
			$method = $pyjs__bind_method2('updateRoleList', function(items) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					items = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,item,$iter1_array,$iter1_idx;
				self['roleList']['clear']();
				$iter1_iter = items;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					item = $iter1_nextval;
					self['roleList']['addItem'](item);
				}
				return null;
			}
	, 1, [null,null,['self'],['items']]);
			$cls_definition['updateRoleList'] = $method;
			$method = $pyjs__bind_method2('updateRoleCombo', function(choices, default_) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					choices = arguments[1];
					default_ = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,choice,$iter2_array;
				self['roleCombo']['clear']();
				$iter2_iter = choices;
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					choice = $iter2_nextval;
					self['roleCombo']['addItem'](choice);
				}
				self['roleCombo']['selectValue'](default_);
				return null;
			}
	, 1, [null,null,['self'],['choices'],['default_']]);
			$cls_definition['updateRoleCombo'] = $method;
			$method = $pyjs__bind_method2('onComboChange', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof keyCode == 'undefined') keyCode=arguments['callee']['__args__'][4][1];
				if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];
				var $or1,$or3,$or2,selected,$3,$bool2,$bool3,$bool1,$bool4,$bool5,$4,$2,$1;
				selected = self['roleCombo']['getSelectedItemText']();
				if ((($bool5=((($bool2=$or1=!(($bool1=selected) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool3=$or2=$p['op_eq']((typeof ($1=selected)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)), $p['getattr']($m['ApplicationConstants'], 'ROLE_NONE_SELECTED'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:!(($bool4=$p['getattr'](self, 'user')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['addBtn']['setEnabled'](false);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRole', null) : $p['setattr'](self, 'selectedRole', null); 
				}
				else {
					self['addBtn']['setEnabled'](true);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRole', (typeof ($3=selected)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_0))) : $p['setattr'](self, 'selectedRole', (typeof ($3=selected)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_0))); 
				}
				self['removeBtn']['setEnabled'](false);
				self['roleList']['setItemTextSelection'](null);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode', null],['modifiers', null]]);
			$cls_definition['onComboChange'] = $method;
			$method = $pyjs__bind_method2('onListChange', function(sender) {
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
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var selected,$bool6,$6,$5;
				selected = self['roleList']['getSelectedItemText']();
				if ((($bool6=selected) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['removeBtn']['setEnabled'](true);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRole', (typeof ($5=selected)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_0))) : $p['setattr'](self, 'selectedRole', (typeof ($5=selected)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_0))); 
				}
				else {
					self['removeBtn']['setEnabled'](false);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRole', null) : $p['setattr'](self, 'selectedRole', null); 
				}
				self['addBtn']['setEnabled'](false);
				self['roleCombo']['setItemTextSelection'](null);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onListChange'] = $method;
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
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
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
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7,$bool8;
				if ((($bool7=$p['op_eq'](sender, $p['getattr'](self, 'roleCombo'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['onComboChange'](sender);
				}
				else if ((($bool8=$p['op_eq'](sender, $p['getattr'](self, 'roleList'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					self['onListChange'](sender);
				}
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
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
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
					if (self.prototype['__md5__'] !== 'ad5aa9f1d7f5a800f8fa01a5f7291f3e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RolePanel', $p['tuple']($bases), $data);
		})();
		$m['UserList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.components';
			$cls_definition['__md5__'] = 'c99d9adb0c4ae2a219cb17337487c745';
			$cls_definition['userGrid'] = null;
			$cls_definition['newBtn'] = null;
			$cls_definition['deleteBtn'] = null;
			$cls_definition['users'] = null;
			$cls_definition['selectedUser'] = null;
			$method = $pyjs__bind_method2('__init__', function(parent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c99d9adb0c4ae2a219cb17337487c745') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['AbsolutePanel']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userGrid', $m['Grid']()) : $p['setattr'](self, 'userGrid', $m['Grid']()); 
				self['userGrid']['createGrid']($constant_int_6, $constant_int_6);
				self['userGrid']['addTableListener'](self);
				self['userGrid']['setBorderWidth']($constant_int_2);
				self['userGrid']['setCellPadding']($constant_int_4);
				self['userGrid']['setCellSpacing']($constant_int_1);
				self['userGrid']['setColLabelValue']($constant_int_0, 'Username');
				self['userGrid']['setColLabelValue']($constant_int_1, 'First Name');
				self['userGrid']['setColLabelValue']($constant_int_2, 'Last Name');
				self['userGrid']['setColLabelValue']($constant_int_3, 'Email');
				self['userGrid']['setColLabelValue']($constant_int_4, 'Department');
				self['userGrid']['setColLabelValue']($constant_int_5, 'Password');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('newBtn', $m['Button']('New')) : $p['setattr'](self, 'newBtn', $m['Button']('New')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('deleteBtn', $m['Button']('Delete')) : $p['setattr'](self, 'deleteBtn', $m['Button']('Delete')); 
				self['deleteBtn']['setEnabled'](false);
				self['add']($p['getattr'](self, 'userGrid'));
				self['add']($p['getattr'](self, 'newBtn'));
				self['add']($p['getattr'](self, 'deleteBtn'));
				return null;
			}
	, 1, [null,null,['self'],['parent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('updateUserGrid', function(users) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					users = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c99d9adb0c4ae2a219cb17337487c745') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$iter3_idx,$10,$12,$13,i,$iter3_type,$18,$9,$len1,$iter3_iter,$8,$iter3_array,$7,$17,$iter3_nextval,$11;
				self['userGrid']['clearGrid']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('users', users) : $p['setattr'](self, 'users', users); 
				$iter3_iter = $p['range']((($len1=users) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))));
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['userGrid']['setCellValue'](i, $constant_int_0, $p['getattr']((typeof ($7=users)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](i)), 'username'));
					self['userGrid']['setCellValue'](i, $constant_int_1, $p['getattr']((typeof ($9=users)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](i)), 'fname'));
					self['userGrid']['setCellValue'](i, $constant_int_2, $p['getattr']((typeof ($11=users)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](i)), 'lname'));
					self['userGrid']['setCellValue'](i, $constant_int_3, $p['getattr']((typeof ($13=users)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](i)), 'email'));
					self['userGrid']['setCellValue'](i, $constant_int_4, $p['getattr']((typeof ($15=users)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](i)), 'department'));
					self['userGrid']['setCellValue'](i, $constant_int_5, $p['getattr']((typeof ($17=users)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](i)), 'password'));
				}
				return null;
			}
	, 1, [null,null,['self'],['users']]);
			$cls_definition['updateUserGrid'] = $method;
			$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					row = arguments[2];
					col = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c99d9adb0c4ae2a219cb17337487c745') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,$bool10,$and1,$19,$pyjs_try_err,$and2,$20,$sub2,$len2,$sub1,$bool9;
				try {
					if ((($bool10=((($bool9=$and1=((($cmp1=row)===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp3=row)===($cmp4=(($len2=$p['getattr'](self, 'users')) === null?$constant_int_0:
						(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
									$p['len']($len2))))))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) < 1):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedUser', (typeof ($19=$p['getattr'](self, 'users'))['__array'] != 'undefined'?
							((typeof $19['__array'][$20=(typeof ($sub1=row)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']((typeof ($sub1=row)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))))) : $p['setattr'](self, 'selectedUser', (typeof ($19=$p['getattr'](self, 'users'))['__array'] != 'undefined'?
							((typeof $19['__array'][$20=(typeof ($sub1=row)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']((typeof ($sub1=row)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))))); 
						self['userGrid']['selectRow'](row);
						self['deleteBtn']['setEnabled'](true);
					}
					else {
						self['userGrid']['selectRow']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedUser', null) : $p['setattr'](self, 'selectedUser', null); 
						self['deleteBtn']['setEnabled'](false);
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
			$cls_definition['onCellClicked'] = $method;
			$method = $pyjs__bind_method2('deSelect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c99d9adb0c4ae2a219cb17337487c745') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['userGrid']['selectRow']((typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['deSelect'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserList', $p['tuple']($bases), $data);
		})();
		$m['UserForm'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.components';
			$cls_definition['__md5__'] = '8bcb8058fc4b40c0d9a566961c12a4c7';
			$cls_definition['MODE_ADD'] = 'modeAdd';
			$cls_definition['MODE_EDIT'] = 'modeEdit';
			$cls_definition['user'] = null;
			$cls_definition['mode'] = null;
			$cls_definition['usernameInput'] = null;
			$cls_definition['firstInput'] = null;
			$cls_definition['lastInput'] = null;
			$cls_definition['emailInput'] = null;
			$cls_definition['passwordInput'] = null;
			$cls_definition['confirmInput'] = null;
			$cls_definition['departmentCombo'] = null;
			$cls_definition['addBtn'] = null;
			$cls_definition['cancelBtn'] = null;
			$method = $pyjs__bind_method2('__init__', function(parent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var hpanel,w,ftable,ftableFormatter;
				$m['AbsolutePanel']['__init__'](self);
				ftable = $m['FlexTable']();
				ftable['setWidget']($constant_int_0, $constant_int_0, $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, 'First Name']));
				ftableFormatter = ftable['getFlexCellFormatter']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('firstInput', $m['TextBox']()) : $p['setattr'](self, 'firstInput', $m['TextBox']()); 
				self['firstInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['firstInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_0, $constant_int_1, $p['getattr'](self, 'firstInput'));
				ftable['setWidget']($constant_int_1, $constant_int_0, $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, 'Last Name']));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastInput', $m['TextBox']()) : $p['setattr'](self, 'lastInput', $m['TextBox']()); 
				self['lastInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['lastInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_1, $constant_int_1, $p['getattr'](self, 'lastInput'));
				ftable['setWidget']($constant_int_2, $constant_int_0, $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, 'Email']));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('emailInput', $m['TextBox']()) : $p['setattr'](self, 'emailInput', $m['TextBox']()); 
				self['emailInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['emailInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_2, $constant_int_1, $p['getattr'](self, 'emailInput'));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, '* Username']);
				w['addMouseListener']($m['TooltipListener']('Required, not changable'));
				ftable['setWidget']($constant_int_3, $constant_int_0, w);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('usernameInput', $m['TextBox']()) : $p['setattr'](self, 'usernameInput', $m['TextBox']()); 
				self['usernameInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['usernameInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_3, $constant_int_1, $p['getattr'](self, 'usernameInput'));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, '* Password']);
				w['addMouseListener']($m['TooltipListener']('Required'));
				ftable['setWidget']($constant_int_4, $constant_int_0, w);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('passwordInput', $m['PasswordTextBox']()) : $p['setattr'](self, 'passwordInput', $m['PasswordTextBox']()); 
				self['passwordInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['passwordInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_4, $constant_int_1, $p['getattr'](self, 'passwordInput'));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, '* Confirm']);
				w['addMouseListener']($m['TooltipListener']('Required'));
				ftable['setWidget']($constant_int_5, $constant_int_0, w);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('confirmInput', $m['PasswordTextBox']()) : $p['setattr'](self, 'confirmInput', $m['PasswordTextBox']()); 
				self['confirmInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['confirmInput']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_5, $constant_int_1, $p['getattr'](self, 'confirmInput'));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'wordWrap':false}, '* Department']);
				w['addMouseListener']($m['TooltipListener']('Required'));
				ftable['setWidget']($constant_int_6, $constant_int_0, w);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('departmentCombo', $m['ListBox']()) : $p['setattr'](self, 'departmentCombo', $m['ListBox']()); 
				self['departmentCombo']['addChangeListener']($p['getattr'](self, 'checkValid'));
				self['departmentCombo']['addKeyboardListener'](self);
				ftable['setWidget']($constant_int_6, $constant_int_1, $p['getattr'](self, 'departmentCombo'));
				hpanel = $m['HorizontalPanel']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('addBtn', $m['Button']('Add User')) : $p['setattr'](self, 'addBtn', $m['Button']('Add User')); 
				self['addBtn']['setEnabled'](false);
				hpanel['add']($p['getattr'](self, 'addBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cancelBtn', $m['Button']('Cancel')) : $p['setattr'](self, 'cancelBtn', $m['Button']('Cancel')); 
				hpanel['add']($p['getattr'](self, 'cancelBtn'));
				ftable['setWidget']($constant_int_7, $constant_int_0, hpanel);
				ftableFormatter['setColSpan']($constant_int_7, $constant_int_0, $constant_int_2);
				self['add'](ftable);
				self['clearForm']();
				return null;
			}
	, 1, [null,null,['self'],['parent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clearForm', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('user', null) : $p['setattr'](self, 'user', null); 
				self['usernameInput']['setText']('');
				self['firstInput']['setText']('');
				self['lastInput']['setText']('');
				self['emailInput']['setText']('');
				self['passwordInput']['setText']('');
				self['confirmInput']['setText']('');
				self['departmentCombo']['setItemTextSelection'](null);
				self['updateMode']($p['getattr'](self, 'MODE_ADD'));
				self['checkValid']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearForm'] = $method;
			$method = $pyjs__bind_method2('updateUser', function(user) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					user = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var setText;
				setText = function(elem, value) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
					var $bool11;
					if ((($bool11=value) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						elem['setText'](value);
					}
					else {
						elem['setText']('');
					}
					return null;
				};
				setText['__name__'] = 'setText';

				setText['__bind_type__'] = 0;
				setText['__args__'] = [null,null,['elem'],['value']];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('user', user) : $p['setattr'](self, 'user', user); 
				setText($p['getattr'](self, 'usernameInput'), $p['getattr']($p['getattr'](self, 'user'), 'username'));
				setText($p['getattr'](self, 'firstInput'), $p['getattr']($p['getattr'](self, 'user'), 'fname'));
				setText($p['getattr'](self, 'lastInput'), $p['getattr']($p['getattr'](self, 'user'), 'lname'));
				setText($p['getattr'](self, 'emailInput'), $p['getattr']($p['getattr'](self, 'user'), 'email'));
				setText($p['getattr'](self, 'passwordInput'), $p['getattr']($p['getattr'](self, 'user'), 'password'));
				setText($p['getattr'](self, 'confirmInput'), $p['getattr']($p['getattr'](self, 'user'), 'password'));
				self['departmentCombo']['setItemTextSelection']($p['list']([$p['getattr']($p['getattr'](self, 'user'), 'department')]));
				self['checkValid']();
				return null;
			}
	, 1, [null,null,['self'],['user']]);
			$cls_definition['updateUser'] = $method;
			$method = $pyjs__bind_method2('updateDepartmentCombo', function(choices, default_) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					choices = arguments[1];
					default_ = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,choice,$iter4_iter;
				self['departmentCombo']['clear']();
				$iter4_iter = choices;
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					choice = $iter4_nextval;
					self['departmentCombo']['addItem'](choice);
				}
				self['departmentCombo']['selectValue'](default_);
				return null;
			}
	, 1, [null,null,['self'],['choices'],['default_']]);
			$cls_definition['updateDepartmentCombo'] = $method;
			$method = $pyjs__bind_method2('updateMode', function(mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					mode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', mode) : $p['setattr'](self, 'mode', mode); 
				if ((($bool12=$p['op_eq']($p['getattr'](self, 'mode'), $p['getattr'](self, 'MODE_ADD'))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['addBtn']['setText']('Add User');
				}
				else {
					self['addBtn']['setText']('Update User');
				}
				return null;
			}
	, 1, [null,null,['self'],['mode']]);
			$cls_definition['updateMode'] = $method;
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
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof evt == 'undefined') evt=arguments['callee']['__args__'][3][1];
				var $bool13;
				if ((($bool13=self['enableSubmit'](self['usernameInput']['getText'](), self['passwordInput']['getText'](), self['confirmInput']['getText'](), self['departmentCombo']['getSelectedItemText'](true))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					self['addBtn']['setEnabled'](true);
				}
				else {
					self['addBtn']['setEnabled'](false);
				}
				return null;
			}
	, 1, [null,null,['self'],['evt', null]]);
			$cls_definition['checkValid'] = $method;
			$method = $pyjs__bind_method2('enableSubmit', function(u, p, c, d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					u = arguments[1];
					p = arguments[2];
					c = arguments[3];
					d = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp6,$cmp9,$and4,$and3,$bool14,$cmp7,$and5,$cmp8,$len4,$bool15,$len3,$bool16,$and6,$len5,$cmp10;
				return ((($bool14=$and3=((($cmp5=(($len3=u) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))))===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool15=$and4=((($cmp7=(($len4=p) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))))===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15['__nonzero__']=='function'?
							$bool15['__nonzero__']() :
							(typeof $bool15['__len__']=='function'?
								($bool15['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool16=$and5=$p['op_eq'](p, c)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp9=(($len5=d) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))))===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1):$and5):$and4):$and3);
			}
	, 1, [null,null,['self'],['u'],['p'],['c'],['d']]);
			$cls_definition['enableSubmit'] = $method;
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
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
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
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
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
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
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
					if (self.prototype['__md5__'] !== '8bcb8058fc4b40c0d9a566961c12a4c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserForm', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libemployeeadmin.components */


/* end module: libemployeeadmin.components */


/*
PYJS_DEPS: ['pyjamas.ui.DockPanel.DockPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DockPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.PasswordTextBox.PasswordTextBox', 'pyjamas.ui.PasswordTextBox', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.ui.Tooltip', 'Grid.Grid', 'Grid', 'ApplicationConstants']
*/
