/* start module: libemployeeadmin.model */
$pyjs['loaded_modules']['libemployeeadmin.model'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libemployeeadmin.model']['__was_initialized__']) return $pyjs['loaded_modules']['libemployeeadmin.model'];
	if(typeof $pyjs['loaded_modules']['libemployeeadmin'] == 'undefined' || !$pyjs['loaded_modules']['libemployeeadmin']['__was_initialized__']) $p['___import___']('libemployeeadmin', null);
	var $m = $pyjs['loaded_modules']['libemployeeadmin.model'];
	$m['__repr__'] = function() { return '<module: libemployeeadmin.model>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libemployeeadmin.model';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libemployeeadmin']['model'] = $pyjs['loaded_modules']['libemployeeadmin.model'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		$m['Proxy'] = $p['___import___']('puremvc.patterns.proxy.Proxy', 'libemployeeadmin', null, false);
		$m['vo'] = $p['___import___']('vo', 'libemployeeadmin');
		$m['ApplicationConstants'] = $p['___import___']('ApplicationConstants', 'libemployeeadmin');
		$m['Command'] = $p['___import___']('ApplicationConstants.Command', 'libemployeeadmin', null, false);
		$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'libemployeeadmin', null, false);
		$m['UserProxy'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.model';
			$cls_definition['__md5__'] = 'e24d07b9906b3ad15f11c90815152f0f';
			$cls_definition['NAME'] = 'UserProxy';
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
					if (self.prototype['__md5__'] !== 'e24d07b9906b3ad15f11c90815152f0f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['UserProxy'], self)['__init__']($p['getattr']($m['UserProxy'], 'NAME'), $p['list']([]));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $p['list']([])) : $p['setattr'](self, 'data', $p['list']([])); 
				self['addItem']($m['vo']['UserVO']('lstooge', 'Larry', 'Stooge', 'larry@stooges.com', 'ijk456', $p['getattr']($m['ApplicationConstants'], 'DEPT_ACCT')));
				self['addItem']($m['vo']['UserVO']('cstooge', 'Curly', 'Stooge', 'curly@stooges.com', 'xyz987', $p['getattr']($m['ApplicationConstants'], 'DEPT_SALES')));
				self['addItem']($m['vo']['UserVO']('mstooge', 'Moe', 'Stooge', 'moe@stooges.com', 'abc123', $p['getattr']($m['ApplicationConstants'], 'DEPT_PLANT')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getUsers', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e24d07b9906b3ad15f11c90815152f0f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'data');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getUsers'] = $method;
			$method = $pyjs__bind_method2('addItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e24d07b9906b3ad15f11c90815152f0f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['data']['append'](item);
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['addItem'] = $method;
			$method = $pyjs__bind_method2('updateItem', function(user) {
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
					if (self.prototype['__md5__'] !== 'e24d07b9906b3ad15f11c90815152f0f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$bool1,$iter1_array,$len1,$1,$2;
				$iter1_iter = $p['range']($constant_int_0, (($len1=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					if ((($bool1=$p['op_eq']($p['getattr']((typeof ($1=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i)), 'username'), $p['getattr'](user, 'username'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$p['getattr'](self, 'data')['__setitem__'](i, user);
						break;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['user']]);
			$cls_definition['updateItem'] = $method;
			$method = $pyjs__bind_method2('deleteItem', function(user) {
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
					if (self.prototype['__md5__'] !== 'e24d07b9906b3ad15f11c90815152f0f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$bool2,$iter2_idx,$len2,$4,$3,$iter2_array;
				$iter2_iter = $p['range']($constant_int_0, (($len2=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					if ((($bool2=$p['op_eq']($p['getattr']((typeof ($3=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](i)), 'username'), $p['getattr'](user, 'username'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						$p['getattr'](self, 'data')['__delitem__'](i);
						break;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['user']]);
			$cls_definition['deleteItem'] = $method;
			var $bases = new Array($m['Proxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserProxy', $p['tuple']($bases), $data);
		})();
		$m['RoleProxy'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libemployeeadmin.model';
			$cls_definition['__md5__'] = '35f93f35bdeaa01c410967b7e09678c7';
			$cls_definition['NAME'] = 'RoleProxy';
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
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RoleProxy'], self)['__init__']($p['getattr']($m['RoleProxy'], 'NAME'), $p['list']([]));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $p['list']([])) : $p['setattr'](self, 'data', $p['list']([])); 
				self['addItem']($m['vo']['RoleVO']('lstooge', $p['list']([$p['getattr']($m['ApplicationConstants'], 'ROLE_PAYROLL'), $p['getattr']($m['ApplicationConstants'], 'ROLE_EMP_BENEFITS')])));
				self['addItem']($m['vo']['RoleVO']('cstooge', $p['list']([$p['getattr']($m['ApplicationConstants'], 'ROLE_ACCT_PAY'), $p['getattr']($m['ApplicationConstants'], 'ROLE_ACCT_RCV'), $p['getattr']($m['ApplicationConstants'], 'ROLE_GEN_LEDGER')])));
				self['addItem']($m['vo']['RoleVO']('mstooge', $p['list']([$p['getattr']($m['ApplicationConstants'], 'ROLE_INVENTORY'), $p['getattr']($m['ApplicationConstants'], 'ROLE_PRODUCTION'), $p['getattr']($m['ApplicationConstants'], 'ROLE_SALES'), $p['getattr']($m['ApplicationConstants'], 'ROLE_SHIPPING')])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getRoles', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'data');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getRoles'] = $method;
			$method = $pyjs__bind_method2('addItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['data']['append'](item);
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['addItem'] = $method;
			$method = $pyjs__bind_method2('deleteItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$bool3,i,$iter3_type,$iter3_iter,$iter3_array,$6,$5,$iter3_nextval,$len3;
				$iter3_iter = $p['range']((($len3=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))));
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					if ((($bool3=$p['op_eq']($p['getattr']((typeof ($5=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i)), 'username'), $p['getattr'](item, 'username'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						$p['getattr'](self, 'data')['__delitem__'](i);
						break;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['deleteItem'] = $method;
			$method = $pyjs__bind_method2('doesUserHaveRole', function(user, role) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					user = arguments[1];
					role = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$bool4,$iter5_array,$bool5,userRoles,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,hasRole,$iter5_idx,$8,$9,$7,$10,$11,$12,i,$iter4_nextval,j,$iter4_idx,$len4,$len5,$iter4_array;
				hasRole = false;
				$iter4_iter = $p['range']((($len4=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					if ((($bool4=$p['op_eq']($p['getattr']((typeof ($7=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](i)), 'username'), $p['getattr'](user, 'username'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						userRoles = $p['getattr']((typeof ($9=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
							((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__'](i)), 'roles');
						$iter5_iter = $p['range']((($len5=userRoles) === null?$constant_int_0:
							(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
								(typeof $len5['__len__'] == 'function'?$len5['__len__']():
									(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
										$p['len']($len5))))));
						if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
							$iter5_type = 0;
						} else {
							$iter5_iter = $iter5_iter['__iter__']();
							$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter5_idx = 0;
						while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
							j = $iter5_nextval;
							if ((($bool5=$p['op_eq']((typeof ($11=userRoles)['__array'] != 'undefined'?
								((typeof $11['__array'][$12=j]) != 'undefined'?$11['__array'][$12]:
									$11['__getitem__']($12)):
									$11['__getitem__'](j)), role)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
								hasRole = true;
								break;
							}
						}
					}
				}
				return hasRole;
			}
	, 1, [null,null,['self'],['user'],['role']]);
			$cls_definition['doesUserHaveRole'] = $method;
			$method = $pyjs__bind_method2('addRoleToUser', function(user, role) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					user = arguments[1];
					role = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$14,$15,$iter6_idx,$13,$iter6_type,$16,userRoles,$len6,i,$iter6_array,$bool6,$iter6_iter,$iter6_nextval,$bool8,$bool7;
				result = false;
				if ((($bool7=!(($bool6=self['doesUserHaveRole'](user, role)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6['__nonzero__']=='function'?
							$bool6['__nonzero__']() :
							(typeof $bool6['__len__']=='function'?
								($bool6['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$iter6_iter = $p['range']($constant_int_0, (($len6=$p['getattr'](self, 'data')) === null?$constant_int_0:
						(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
							(typeof $len6['__len__'] == 'function'?$len6['__len__']():
								(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
									$p['len']($len6))))));
					if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter['__iter__']();
						$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						if ((($bool8=$p['op_eq']($p['getattr']((typeof ($13=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
							((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](i)), 'username'), $p['getattr'](user, 'username'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							userRoles = $p['getattr']((typeof ($15=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
								((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
									$15['__getitem__']($16)):
									$15['__getitem__'](i)), 'roles');
							userRoles['append'](role);
							result = true;
							break;
						}
					}
				}
				self['sendNotification']($p['getattr']($m['Command'], 'ADD_ROLE_RESULT'), result);
				return null;
			}
	, 1, [null,null,['self'],['user'],['role']]);
			$cls_definition['addRoleToUser'] = $method;
			$method = $pyjs__bind_method2('removeRoleFromUser', function(user, role) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					user = arguments[1];
					role = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var j,$bool10,$18,userRoles,$iter8_iter,$21,$20,$22,$bool11,$iter7_type,$iter8_idx,$iter7_iter,$iter8_type,$iter7_idx,$bool9,$17,$iter7_nextval,i,$iter7_array,$iter8_array,$19,$len7,$len8,$iter8_nextval;
				if ((($bool9=self['doesUserHaveRole'](user, role)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					$iter7_iter = $p['range']($constant_int_0, (($len7=$p['getattr'](self, 'data')) === null?$constant_int_0:
						(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
							(typeof $len7['__len__'] == 'function'?$len7['__len__']():
								(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
									$p['len']($len7))))));
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						if ((($bool10=$p['op_eq']($p['getattr']((typeof ($17=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
							((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](i)), 'username'), $p['getattr'](user, 'username'))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
							userRoles = $p['getattr']((typeof ($19=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
								((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
									$19['__getitem__']($20)):
									$19['__getitem__'](i)), 'roles');
							$iter8_iter = $p['range']($constant_int_0, (($len8=userRoles) === null?$constant_int_0:
								(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
									(typeof $len8['__len__'] == 'function'?$len8['__len__']():
										(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
											$p['len']($len8))))));
							if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
								$iter8_type = 0;
							} else {
								$iter8_iter = $iter8_iter['__iter__']();
								$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter8_idx = 0;
							while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
								j = $iter8_nextval;
								if ((($bool11=$p['op_eq']((typeof ($21=userRoles)['__array'] != 'undefined'?
									((typeof $21['__array'][$22=j]) != 'undefined'?$21['__array'][$22]:
										$21['__getitem__']($22)):
										$21['__getitem__'](j)), role)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
									userRoles['__delitem__'](j);
									break;
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['user'],['role']]);
			$cls_definition['removeRoleFromUser'] = $method;
			$method = $pyjs__bind_method2('getUserRoles', function(username) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					username = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f93f35bdeaa01c410967b7e09678c7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_iter,i,$25,$iter9_nextval,userRoles,$iter9_array,$bool12,$iter9_idx,$23,$24,$26,$iter9_type,$len9;
				userRoles = $p['list']([]);
				$iter9_iter = $p['range']($constant_int_0, (($len9=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))));
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					if ((($bool12=$p['op_eq']($p['getattr']((typeof ($23=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $23['__array'][$24=i]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__'](i)), 'username'), username)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						userRoles = $p['getattr']((typeof ($25=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
							((typeof $25['__array'][$26=i]) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__'](i)), 'roles');
						break;
					}
				}
				return userRoles;
			}
	, 1, [null,null,['self'],['username']]);
			$cls_definition['getUserRoles'] = $method;
			var $bases = new Array($m['Proxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RoleProxy', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libemployeeadmin.model */


/* end module: libemployeeadmin.model */


/*
PYJS_DEPS: ['puremvc.patterns.proxy.Proxy', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.proxy', 'vo', 'ApplicationConstants', 'ApplicationConstants.Command', 'ApplicationConstants.Notification']
*/
