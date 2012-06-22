/* start module: VarsTest */
$pyjs['loaded_modules']['VarsTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['VarsTest']['__was_initialized__']) return $pyjs['loaded_modules']['VarsTest'];
	var $m = $pyjs['loaded_modules']['VarsTest'];
	$m['__repr__'] = function() { return '<module: VarsTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'VarsTest';
	$m['__name__'] = __mod_name__;
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
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_56 = new $p['int'](56);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_66 = new $p['int'](66);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['foo'] = $p['___import___']('foo', null);
		$m['myfoo'] = $pyjs['loaded_modules']['foo'];
		$m['myfoo_value'] = $p['___import___']('foo.foo_value', null, null, false);
		$m['myget_foo_value'] = $p['___import___']('foo.get_foo_value', null, null, false);
		$m['module_global_x'] = $constant_int_1;
		$m['data'] = $p['list']([]);
		$m['data']['append']($constant_int_5);
		$m['data']['append']($constant_int_6);
		$m['data_test'] = $p['cmp']($m['data'], $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
		$m['changeme'] = function(lst) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			lst['__setitem__']($constant_int_0, $constant_int_5);
			return null;
		};
		$m['changeme']['__name__'] = 'changeme';

		$m['changeme']['__bind_type__'] = 0;
		$m['changeme']['__args__'] = [null,null,['lst']];
		$m['import_sys'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['sys'] = $p['___import___']('sys', null);
			return null;
		};
		$m['import_sys']['__name__'] = 'import_sys';

		$m['import_sys']['__bind_type__'] = 0;
		$m['import_sys']['__args__'] = [null,null];
		$m['VarsTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'VarsTest';
			$cls_definition['__md5__'] = '0962d0b82355b636f150aa9922c62c15';
			$method = $pyjs__bind_method2('testGlobalListData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']($p['cmp']($m['data'], $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])), 'global list should be [1,2,3]');
				self['assertTrue']($m['data_test'], 'global test of list should be True');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalListData'] = $method;
			$method = $pyjs__bind_method2('testChangeUsingTopLevelFunction', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $2,l,$1;
				l = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$m['changeme'](l);
				self['assertEqual']((typeof ($1=l)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)), $constant_int_5);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testChangeUsingTopLevelFunction'] = $method;
			$method = $pyjs__bind_method2('testChangeVarInInnerScope', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,x,$bool1;
				x = $constant_int_5;
				if ((($bool1=$p['op_eq'](x, $constant_int_1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					x = $constant_int_2;
				}
				else if ((($bool2=$p['op_eq'](x, $constant_int_5)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					x = $constant_int_3;
				}
				self['assertEqual'](x, $constant_int_3, 'the value of x should be 3');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testChangeVarInInnerScope'] = $method;
			$method = $pyjs__bind_method2('testGlobalVars', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($m['module_global_x'], $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalVars'] = $method;
			$method = $pyjs__bind_method2('testImports', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['failUnless']($m['UnitTest']['UnitTest']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImports'] = $method;
			$method = $pyjs__bind_method2('testLocalVar', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var VarsTest;
				VarsTest = $constant_int_1;
				self['assertEqual'](VarsTest, $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocalVar'] = $method;
			$method = $pyjs__bind_method2('testUnpack', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,c,b,e,d,l,X,a1,a3,a2,b1,b2,c2,y,x,c1,d2,d1;
				l = $p['list']([$constant_int_1, $constant_int_2]);
				var $tupleassign1 = $p['__ass_unpack'](l, 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				self['assertEqual'](x, $constant_int_1);
				self['assertEqual'](y, $constant_int_2);
				x = $p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5])]);
				var $tupleassign2 = $p['__ass_unpack'](x, 3, null);
				var $tupleassign3 = $p['__ass_unpack']($tupleassign2[0], 2, null);
				a = $tupleassign3[0];
				b = $tupleassign3[1];
				c = $tupleassign2[1];
				var $tupleassign4 = $p['__ass_unpack']($tupleassign2[2], 2, null);
				d = $tupleassign4[0];
				e = $tupleassign4[1];
				self['assertEqual'](a, $constant_int_1);
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				x = $p['tuple']([$constant_int_1, $p['tuple']([$constant_int_2, $p['tuple']([$constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5]), $constant_int_6]), $constant_int_7]), $constant_int_8, $p['tuple']([$constant_int_9, $constant_int_10])]);
				var $tupleassign5 = $p['__ass_unpack'](x, 4, null);
				a1 = $tupleassign5[0];
				var $tupleassign6 = $p['__ass_unpack']($tupleassign5[1], 3, null);
				b1 = $tupleassign6[0];
				var $tupleassign7 = $p['__ass_unpack']($tupleassign6[1], 3, null);
				c1 = $tupleassign7[0];
				var $tupleassign8 = $p['__ass_unpack']($tupleassign7[1], 2, null);
				d1 = $tupleassign8[0];
				d2 = $tupleassign8[1];
				c2 = $tupleassign7[2];
				b2 = $tupleassign6[2];
				a2 = $tupleassign5[2];
				a3 = $tupleassign5[3];
				self['assertEqual'](d1, $constant_int_4);
				self['assertEqual']($p['list']([a1, b1, c1, d1, d2, c2, b2, a2, a3]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $p['tuple']([$constant_int_9, $constant_int_10])]));
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'VarsTest';
					$cls_definition['__md5__'] = '253a02535a6241b5aa586e20d5bc0e5a';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				x = X();
				x['__is_instance__'] && typeof x['__setattr__'] == 'function' ? x['__setattr__']('a', $constant_int_1) : $p['setattr'](x, 'a', $constant_int_1); 
				d = $p['dict']([]);
				l = $p['list']([$constant_int_1, $constant_int_3, $constant_int_4]);
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['tuple']([$constant_int_10, $constant_int_11]), $constant_int_20, $constant_int_30]), 3, null);
				$p['__setslice'](l, $constant_int_1, $constant_int_2, $tupleassign9[0]);
				x['__is_instance__'] && typeof x['__setattr__'] == 'function' ? x['__setattr__']('a', $tupleassign9[1]) : $p['setattr'](x, 'a', $tupleassign9[1]); 
				d['__setitem__']('zz', $tupleassign9[2]);
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_10, $constant_int_11, $constant_int_4]));
				self['assertEqual']($p['getattr'](x, 'a'), $constant_int_20);
				self['assertEqual'](d, $p['dict']([['zz', $constant_int_30]]));
				var $tupleassign10 = $p['__ass_unpack']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]), 3, null);
				a = $tupleassign10[0];
				b = $tupleassign10[1];
				c = $tupleassign10[2];
				self['assertEqual']($p['list']([a, b, c]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$constant_int_4, $constant_int_5, $constant_int_6]), 3, null);
				a = $tupleassign11[0];
				b = $tupleassign11[1];
				c = $tupleassign11[2];
				self['assertEqual']($p['list']([a, b, c]), $p['list']([$constant_int_4, $constant_int_5, $constant_int_6]));
				var $tupleassign12 = $p['__ass_unpack']($p['set']($p['list']([$constant_int_7, $constant_int_8, $constant_int_9])), 3, null);
				a = $tupleassign12[0];
				b = $tupleassign12[1];
				c = $tupleassign12[2];
				self['assertEqual']($p['set']($p['list']([a, b, c])), $p['set']($p['list']([$constant_int_7, $constant_int_8, $constant_int_9])));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnpack'] = $method;
			$method = $pyjs__bind_method2('testUnpackInLoop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,xxx,yyy,l,$iter1_iter,$iter1_array,$iter1_idx;
				l = $p['list']([$p['list']([$constant_int_1, $constant_int_2]), $p['list']([$constant_int_1, $constant_int_2])]);
				$iter1_iter = l;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign13 = $p['__ass_unpack']($iter1_nextval, 2, null);
					xxx = $tupleassign13[0];
					yyy = $tupleassign13[1];
					self['assertEqual'](xxx, $constant_int_1);
					self['assertEqual'](yyy, $constant_int_2);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnpackInLoop'] = $method;
			$method = $pyjs__bind_method2('testImportedNamespace', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b;
				b = $m['foo']['Bar']();
				self['assertEqual']($p['getattr'](b, 'X'), $constant_int_1);
				self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'Bar'), 'X'), $constant_int_1);
				self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'bar'), 'X'), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportedNamespace'] = $method;
			$method = $pyjs__bind_method2('testImport', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a0,$pyjs_try_err,a1;
				a0 = $p['getattr']($m['foo'], 'foo_value');
				a1 = $constant_int_2;
				self['assertEqual']($m['myfoo_value'], a0);
				self['assertEqual']($m['myget_foo_value'](), a0);
				$m['myfoo']['__is_instance__'] && typeof $m['myfoo']['__setattr__'] == 'function' ? $m['myfoo']['__setattr__']('foo_value', a1) : $p['setattr']($m['myfoo'], 'foo_value', a1); 
				self['assertEqual']($m['myfoo_value'], a0);
				self['assertEqual']($m['myget_foo_value'](), a1);
				$m['import_sys']();
				try {
					self['assertEqual']($p['getattr']($m['sys'], '__name__'), 'sys');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Global module sys not available (bug #216)');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$method = $pyjs__bind_method2('testGlobalsBltin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1,$4,globkeys2,$pyjs_try_err,$bool4,$6,globkeys,$5,globs,$3;
				globs = $p['_globals']($m);
				globkeys = globs['keys']();
				var 				$lambda1 = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $bool3;
					return !(($bool3=x['startswith']('__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['x']];
				globkeys2 = $p['filter']($lambda1, globkeys);
				if ((($bool4=globkeys2['__contains__']('sys')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					globkeys2['remove']('sys');
				}
				self['assertEqual']($p['set'](globkeys2), $p['set']($p['list'](['changeme', 'foo', 'myfoo_value', 'data', 'UnitTest', 'import_sys', 'VarsTest', 'data_test', 'module_global_x', 'myget_foo_value', 'myfoo'])));
				self['assertEqual']((typeof ($3=globs)['__array'] != 'undefined'?
					((typeof $3['__array'][$4='__name__']) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']('__name__')), (typeof __name__ == "undefined"?$m['__name__']:__name__));
				try {
					$p['_globals']($m)['__setitem__']('new_global_via_dict', $constant_int_1);
					self['assertEqual']((typeof ($5=$p['_globals']($m))['__array'] != 'undefined'?
						((typeof $5['__array'][$6='new_global_via_dict']) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']('new_global_via_dict')), $constant_int_1);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						self['fail']('Assigning to globals() does not work, #590');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalsBltin'] = $method;
			$method = $pyjs__bind_method2('testDiscardNames', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				try {
					(typeof someundefinedvariable1234 == "undefined"?$m['someundefinedvariable1234']:someundefinedvariable1234);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('Discarded names should trigger NameError if undefined, bug #584');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition['__module__'] = 'VarsTest';
					$cls_definition['__md5__'] = '29e4c41f09d9f34604609dd1fdc5082f';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				x = X();
				try {
					$p['getattr'](x, 'a');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('Discarded getattr should trigger AttributeError if undefined, bug #584');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDiscardNames'] = $method;
			$method = $pyjs__bind_method2('testAugmentedAssignments', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0962d0b82355b636f150aa9922c62c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$pow2,$pow1,$add2,a0,$mod1,$add1,$assign1,$floordiv2,$floordiv1,$mod2,$div2,$sub2,$sub1,$div1,$mul2,$mul1;
				$assign1 = $constant_int_100;
				a = $assign1;
				a0 = $assign1;
				self['assertTrue']($p['op_is'](a, a0));
				a = (typeof ($add1=a)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self['assertFalse']($p['op_is'](a, a0));
				self['assertEqual'](a, $constant_int_101);
				a = (typeof ($sub1=a)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				self['assertEqual'](a, $constant_int_100);
				a = (typeof ($mul1=a)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				self['assertEqual'](a, $constant_int_200);
				a = (typeof ($div1=a)==typeof ($div2=$constant_int_3) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				self['assertEqual'](a, $constant_int_66);
				a = (typeof ($floordiv1=a)==typeof ($floordiv2=$constant_int_60) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math['floor']($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2));
				self['assertEqual'](a, $constant_int_1);
				a = $constant_int_15;
				a = (typeof ($mod1=a)==typeof ($mod2=$constant_int_10) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				self['assertEqual'](a, $constant_int_5);
				a = (typeof ($pow1=a)==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2));
				self['assertEqual'](a, $constant_int_25);
				a = $p['op_bitshiftright'](a,$constant_int_2);
				self['assertEqual'](a, $constant_int_6);
				a = $p['op_bitshiftleft'](a,$constant_int_2);
				self['assertEqual'](a, $constant_int_24);
				a = $p['op_bitand2'](a, $constant_int_16);
				self['assertEqual'](a, $constant_int_16);
				a = $p['op_bitxor2'](a, $constant_int_8);
				self['assertEqual'](a, $constant_int_24);
				a = $p['op_bitor2'](a, $constant_int_32);
				self['assertEqual'](a, $constant_int_56);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAugmentedAssignments'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('VarsTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end VarsTest */


/* end module: VarsTest */


/*
PYJS_DEPS: ['UnitTest', 'foo', 'foo.foo_value', 'foo.get_foo_value', 'sys']
*/
