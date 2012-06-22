/* start module: view */
$pyjs['loaded_modules']['view'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['view']['__was_initialized__']) return $pyjs['loaded_modules']['view'];
	var $m = $pyjs['loaded_modules']['view'];
	$m['__repr__'] = function() { return '<module: view>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', null, null, false);
		$m['model'] = $p['___import___']('model', null);
		$m['vo'] = $p['___import___']('vo', null);
		$m['ApplicationConstants'] = $p['___import___']('ApplicationConstants', null);
		$m['Command'] = $p['___import___']('ApplicationConstants.Command', null, null, false);
		$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', null, null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', null, null, false);
		$m['DialogMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'view';
			$cls_definition['__md5__'] = '790943a70f073b5ead22232d4db05e78';
			$cls_definition['NAME'] = 'DialogMediator';
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
					if (self.prototype['__md5__'] !== '790943a70f073b5ead22232d4db05e78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['DialogMediator'], self)['__init__']($p['getattr']($m['DialogMediator'], 'NAME'), viewComponent);
				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('mediator', self) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'mediator', self); 
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
					if (self.prototype['__md5__'] !== '790943a70f073b5ead22232d4db05e78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr']($m['Notification'], 'SHOW_DIALOG')]);
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
					if (self.prototype['__md5__'] !== '790943a70f073b5ead22232d4db05e78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,$bool1,noteName;
				try {
					noteName = note['getName']();
					if ((($bool1=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'SHOW_DIALOG'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$m['alert'](note['getBody']());
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
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DialogMediator', $p['tuple']($bases), $data);
		})();
		$m['UserFormMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'view';
			$cls_definition['__md5__'] = '2eeb4a6dfa4c43b4943bfd51d7c56add';
			$cls_definition['NAME'] = 'UserFormMediator';
			$cls_definition['userProxy'] = null;
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
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['UserFormMediator'], self)['__init__']($p['getattr']($m['UserFormMediator'], 'NAME'), viewComponent);
				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('mediator', self) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'mediator', self); 
				self['viewComponent']['addBtn']['addClickListener']($p['getattr'](self, 'onAdd'));
				self['viewComponent']['cancelBtn']['addClickListener']($p['getattr'](self, 'onCancel'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'))) : $p['setattr'](self, 'userProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'))); 
				self['viewComponent']['updateDepartmentCombo']($p['getattr']($m['ApplicationConstants'], 'DeptList'), $p['getattr']($m['ApplicationConstants'], 'DEPT_NONE_SELECTED'));
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
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr']($m['Notification'], 'NEW_USER'), $p['getattr']($m['Notification'], 'USER_DELETED'), $p['getattr']($m['Notification'], 'USER_SELECTED')]);
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
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$pyjs_try_err,$bool6,noteName,$bool4,$bool5,user;
				try {
					noteName = note['getName']();
					if ((($bool2=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'NEW_USER'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						self['viewComponent']['clearForm']();
						self['viewComponent']['updateMode']($p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_ADD'));
						self['viewComponent']['firstInput']['setFocus'](true);
					}
					if ((($bool3=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_DELETED'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('user', null) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'user', null); 
						self['viewComponent']['clearForm']();
					}
					if ((($bool4=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_SELECTED'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						user = note['getBody']();
						if ((($bool6=!(($bool5=user) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
							false :
							(typeof $bool5=='object'?
								(typeof $bool5['__nonzero__']=='function'?
									$bool5['__nonzero__']() :
									(typeof $bool5['__len__']=='function'?
										($bool5['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
							self['viewComponent']['clearForm']();
						}
						else {
							self['viewComponent']['updateUser'](note['getBody']());
							self['viewComponent']['updateMode']($p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_EDIT'));
						}
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
			$method = $pyjs__bind_method2('onAdd', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				if ((($bool7=$p['op_eq']($p['getattr']($p['getattr'](self, 'viewComponent'), 'mode'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_ADD'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['addUser']();
				}
				else {
					self['updateUser']();
				}
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onAdd'] = $method;
			$method = $pyjs__bind_method2('addUser', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$and1,l,user,$bool8,$bool9,$2,$and2,$1;
				l = self['viewComponent']['departmentCombo']['getSelectedItemText'](true);
				l = ((($bool9=$or1=((($bool8=$and1=l) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(typeof ($1=l)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9['__nonzero__']=='function'?
							$bool9['__nonzero__']() :
							(typeof $bool9['__len__']=='function'?
								($bool9['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:null);
				user = $m['vo']['UserVO'](self['viewComponent']['usernameInput']['getText'](), self['viewComponent']['firstInput']['getText'](), self['viewComponent']['lastInput']['getText'](), self['viewComponent']['emailInput']['getText'](), self['viewComponent']['passwordInput']['getText'](), l);
				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('user', user) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'user', user); 
				self['userProxy']['addItem'](user);
				self['sendNotification']($p['getattr']($m['Notification'], 'USER_ADDED'), user);
				self['viewComponent']['clearForm']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addUser'] = $method;
			$method = $pyjs__bind_method2('updateUser', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3,$bool10,$bool11,$and3,$and4,l,user,$4,$3;
				l = self['viewComponent']['departmentCombo']['getSelectedItemText'](true);
				l = ((($bool11=$or3=((($bool10=$and3=l) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(typeof ($3=l)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0)):$and3)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:null);
				user = $m['vo']['UserVO'](self['viewComponent']['usernameInput']['getText'](), self['viewComponent']['firstInput']['getText'](), self['viewComponent']['lastInput']['getText'](), self['viewComponent']['emailInput']['getText'](), self['viewComponent']['passwordInput']['getText'](), l);
				$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('user', user) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'user', user); 
				self['userProxy']['updateItem'](user);
				self['sendNotification']($p['getattr']($m['Notification'], 'USER_UPDATED'), user);
				self['viewComponent']['clearForm']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['updateUser'] = $method;
			$method = $pyjs__bind_method2('onCancel', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2eeb4a6dfa4c43b4943bfd51d7c56add') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['sendNotification']($p['getattr']($m['Notification'], 'CANCEL_SELECTED'));
				self['viewComponent']['clearForm']();
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onCancel'] = $method;
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserFormMediator', $p['tuple']($bases), $data);
		})();
		$m['UserListMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'view';
			$cls_definition['__md5__'] = '0463b55e99142ea116d3da88370bf244';
			$cls_definition['NAME'] = 'UserListMediator';
			$cls_definition['userProxy'] = null;
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
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['UserListMediator'], self)['__init__']($p['getattr']($m['UserListMediator'], 'NAME'), viewComponent);
				self['viewComponent']['newBtn']['addClickListener']($p['getattr'](self, 'onNewUser'));
				self['viewComponent']['deleteBtn']['addClickListener']($p['getattr'](self, 'onDeleteUser'));
				self['viewComponent']['userGrid']['addTableListener']($p['getattr'](self, 'onSelectUser'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'))) : $p['setattr'](self, 'userProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'))); 
				self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
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
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr']($m['Notification'], 'CANCEL_SELECTED'), $p['getattr']($m['Notification'], 'USER_UPDATED'), $p['getattr']($m['Notification'], 'USER_ADDED'), $p['getattr']($m['Notification'], 'USER_DELETED')]);
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
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13,$bool14,$bool15,$pyjs_try_err,noteName;
				try {
					noteName = note['getName']();
					self['viewComponent']['deSelect']();
					if ((($bool12=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'CANCEL_SELECTED'))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						self['viewComponent']['deSelect']();
						self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
					}
					else if ((($bool13=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_UPDATED'))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						self['viewComponent']['deSelect']();
						self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
					}
					else if ((($bool14=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_ADDED'))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14['__nonzero__']=='function'?
									$bool14['__nonzero__']() :
									(typeof $bool14['__len__']=='function'?
										($bool14['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['viewComponent']['deSelect']();
						self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
					}
					else if ((($bool15=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_DELETED'))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15['__nonzero__']=='function'?
									$bool15['__nonzero__']() :
									(typeof $bool15['__len__']=='function'?
										($bool15['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['viewComponent']['deSelect']();
						self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
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
			$method = $pyjs__bind_method2('onSelectUser', function(evt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['sendNotification']($p['getattr']($m['Notification'], 'USER_SELECTED'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser'));
				return null;
			}
	, 1, [null,null,['self'],['evt']]);
			$cls_definition['onSelectUser'] = $method;
			$method = $pyjs__bind_method2('onNewUser', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['viewComponent']['deSelect']();
				self['sendNotification']($p['getattr']($m['Notification'], 'NEW_USER'));
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onNewUser'] = $method;
			$method = $pyjs__bind_method2('onDeleteUser', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0463b55e99142ea116d3da88370bf244') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool16;
				if ((($bool16=$p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['sendNotification']($p['getattr']($m['Command'], 'DELETE_USER'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser'));
					self['viewComponent']['deSelect']();
				}
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onDeleteUser'] = $method;
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserListMediator', $p['tuple']($bases), $data);
		})();
		$m['RolePanelMediator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'view';
			$cls_definition['__md5__'] = 'db3dbce7fe431c315725b24d1647ecc8';
			$cls_definition['NAME'] = 'RolePanelMediator';
			$cls_definition['roleProxy'] = null;
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
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RolePanelMediator'], self)['__init__']($p['getattr']($m['RolePanelMediator'], 'NAME'), viewComponent);
				self['viewComponent']['addBtn']['addClickListener']($p['getattr'](self, 'onAddRole'));
				self['viewComponent']['removeBtn']['addClickListener']($p['getattr'](self, 'onRemoveRole'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('roleProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'RoleProxy'), 'NAME'))) : $p['setattr'](self, 'roleProxy', self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'RoleProxy'), 'NAME'))); 
				self['viewComponent']['updateRoleCombo']($p['getattr']($m['ApplicationConstants'], 'RoleList'), $p['getattr']($m['ApplicationConstants'], 'ROLE_NONE_SELECTED'));
				return null;
			}
	, 1, [null,null,['self'],['viewComponent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getRolePanel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return (typeof viewComponent == "undefined"?$m['viewComponent']:viewComponent);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getRolePanel'] = $method;
			$method = $pyjs__bind_method2('onAddRole', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['roleProxy']['addRoleToUser']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedRole'));
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onAddRole'] = $method;
			$method = $pyjs__bind_method2('onRemoveRole', function(evnt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					evnt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['roleProxy']['removeRoleFromUser']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedRole'));
				self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
				return null;
			}
	, 1, [null,null,['self'],['evnt']]);
			$cls_definition['onRemoveRole'] = $method;
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
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr']($m['Notification'], 'NEW_USER'), $p['getattr']($m['Notification'], 'USER_ADDED'), $p['getattr']($m['Notification'], 'USER_UPDATED'), $p['getattr']($m['Notification'], 'USER_DELETED'), $p['getattr']($m['Notification'], 'CANCEL_SELECTED'), $p['getattr']($m['Notification'], 'USER_SELECTED'), $p['getattr']($m['Command'], 'ADD_ROLE_RESULT')]);
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
					if (self.prototype['__md5__'] !== 'db3dbce7fe431c315725b24d1647ecc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$bool17,$bool24,$pyjs_try_err,$bool21,noteName,$bool23,$bool22,roleVO,$bool25,$bool20;
				try {
					noteName = note['getName']();
					if ((($bool17=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'NEW_USER'))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						self['viewComponent']['clearForm']();
					}
					else if ((($bool18=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_ADDED'))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('user', note['getBody']()) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'user', note['getBody']()); 
						roleVO = $m['vo']['RoleVO']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username'));
						self['roleProxy']['addItem'](roleVO);
						self['viewComponent']['clearForm']();
					}
					else if ((($bool19=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_UPDATED'))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						self['viewComponent']['clearForm']();
					}
					else if ((($bool20=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_DELETED'))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						self['viewComponent']['clearForm']();
					}
					else if ((($bool21=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'CANCEL_SELECTED'))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
							false :
							(typeof $bool21=='object'?
								(typeof $bool21['__nonzero__']=='function'?
									$bool21['__nonzero__']() :
									(typeof $bool21['__len__']=='function'?
										($bool21['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['viewComponent']['clearForm']();
					}
					else if ((($bool22=$p['op_eq'](noteName, $p['getattr']($m['Notification'], 'USER_SELECTED'))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						$p['getattr'](self, 'viewComponent')['__is_instance__'] && typeof $p['getattr'](self, 'viewComponent')['__setattr__'] == 'function' ? $p['getattr'](self, 'viewComponent')['__setattr__']('user', note['getBody']()) : $p['setattr']($p['getattr'](self, 'viewComponent'), 'user', note['getBody']()); 
						if ((($bool24=!(($bool23=$p['getattr']($p['getattr'](self, 'viewComponent'), 'user')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23['__nonzero__']=='function'?
									$bool23['__nonzero__']() :
									(typeof $bool23['__len__']=='function'?
										($bool23['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
								false :
								(typeof $bool24=='object'?
									(typeof $bool24['__nonzero__']=='function'?
										$bool24['__nonzero__']() :
										(typeof $bool24['__len__']=='function'?
											($bool24['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles'](null));
						}
						else {
							self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
						}
					}
					else if ((($bool25=$p['op_eq'](noteName, $p['getattr']($m['Command'], 'ADD_ROLE_RESULT'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
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
			var $bases = new Array($m['Mediator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RolePanelMediator', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end view */


/* end module: view */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'model', 'vo', 'ApplicationConstants', 'ApplicationConstants.Command', 'ApplicationConstants.Notification', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
