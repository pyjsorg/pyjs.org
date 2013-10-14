/* start module: StringTest */
$pyjs['loaded_modules']['StringTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['StringTest']['__was_initialized__']) return $pyjs['loaded_modules']['StringTest'];
	var $m = $pyjs['loaded_modules']['StringTest'];
	$m['__repr__'] = function() { return '<module: StringTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_1234 = new $p['int'](1234);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_200 = new $p['int'](200);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['write'] = $p['___import___']('write', null);
		$m['StringTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'StringTest';
			$cls_definition['__md5__'] = '2729babae4fdcf3e0aab6fe412322272';
			$method = $pyjs__bind_method2('testBasestring', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = 'A string';
				self['assertTrue']($p['isinstance'](s, $p['str']), 'isinstance(s, str)');
				self['assertTrue']($p['isinstance'](s, $p['basestring']), 'isinstance(s, basestring)');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBasestring'] = $method;
			$method = $pyjs__bind_method2('testToString', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,o;
				o = (typeof ClassWithOwnToString == "undefined"?$m['ClassWithOwnToString']:ClassWithOwnToString)();
				self['assertEquals'](o['toString'](), 'ClassWithOwnToString as a String');
				o = (typeof ClassWithOwnToString2 == "undefined"?$m['ClassWithOwnToString2']:ClassWithOwnToString2)();
				try {
					self['assertEquals'](o['toString'](), 'ClassWithOwnToString2 as a String');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testToString'] = $method;
			$method = $pyjs__bind_method2('testReplace', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result,expected_result1,expected_result2,expected_result3;
				text = 'this is a rather long string';
				expected_result1 = 'th--- --- a rather long string';
				expected_result2 = 'thi-- is a rather long string';
				expected_result3 = 'this_is_a_rather_long_string';
				result = text['$$replace']('is', '---');
				self['assertEquals'](result, expected_result1);
				result = text['$$replace']('s', '--', $constant_int_1);
				self['assertEquals'](result, expected_result2);
				result = text['$$replace'](' ', '_');
				self['assertEquals'](result, expected_result3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReplace'] = $method;
			$method = $pyjs__bind_method2('testRFind', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result;
				text = 'this is a yes it is a rather long string';
				result = text['rfind']('not found');
				self['assertEquals'](result, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				result = text['rfind']('is');
				self['assertEquals'](result, $constant_int_17);
				result = text['rfind']('is', $constant_int_18);
				self['assertEquals'](result, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				result = text['rfind']('is', $constant_int_17);
				self['assertEquals'](result, $constant_int_17);
				result = text['rfind']('is', $constant_int_16);
				self['assertEquals'](result, $constant_int_17);
				result = text['rfind']('is', $constant_int_2, $constant_int_3);
				self['assertEquals'](result, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRFind'] = $method;
			$method = $pyjs__bind_method2('testFind', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result;
				text = 'this is a rather long string';
				result = text['find']('not found');
				self['assertEquals'](result, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				result = text['find']('is');
				self['assertEquals'](result, $constant_int_2);
				result = text['find']('is', $constant_int_3);
				self['assertEquals'](result, $constant_int_5);
				result = text['find']('is', $constant_int_2, $constant_int_3);
				self['assertEquals'](result, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFind'] = $method;
			$method = $pyjs__bind_method2('testJoin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,sep1,sep2,data,expected_result1,expected_result2;
				data = 'this is a rather long string';
				data = data['$$split'](' ');
				sep1 = ', ';
				sep2 = '';
				expected_result1 = 'this, is, a, rather, long, string';
				expected_result2 = 'thisisaratherlongstring';
				result = sep1['join'](data);
				self['assertEquals'](result, expected_result1);
				result = sep2['join'](data);
				self['assertEquals'](result, expected_result2);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testJoin'] = $method;
			$method = $pyjs__bind_method2('testSplit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$5,$10,$3,space,text,t,empty,$8,$9,$6,$7,$4,$1,$2,expected_result1,expected_result2,expected_result3;
				text = ' this is  a rather long string  ';
				space = ' ';
				empty = '';
				expected_result1 = ' this is  a rather long string  ';
				expected_result2 = 'thisis  a rather long string  ';
				expected_result3 = 'this is a rather long string';
				t = text['$$split'](space);
				self['assertEquals']((typeof ($1=t)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)), '');
				self['assertEquals']((typeof ($3=t)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1)), 'this');
				self['assertEquals']((typeof ($5=t)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_2]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_2)), 'is');
				self['assertEquals']((typeof ($7=t)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_3]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_3)), '');
				self['assertEquals']((typeof ($9=t)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_4]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_4)), 'a');
				result = space['join'](t);
				self['assertEquals'](result, expected_result1);
				result = empty['join'](text['$$split'](space, $constant_int_2));
				self['assertEquals'](result, expected_result2);
				result = space['join'](text['$$split']());
				self['assertEquals'](result, expected_result3);
				result = empty['$$split']();
				self['assertEquals'](result, $p['list']([]));
				result = empty['$$split'](null);
				self['assertEquals'](result, $p['list']([]));
				result = empty['$$split'](' ');
				self['assertEquals'](result, $p['list'](['']));
				self['assertEquals']('1.2.3'['rsplit']('.', $constant_int_1), $p['list'](['1.2', '3']));
				self['assertEquals']('1.2.3'['rsplit']('.', $constant_int_2), $p['list'](['1', '2', '3']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSplit'] = $method;
			$method = $pyjs__bind_method2('testStrip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,expected_result1,expected_result2,result;
				text = ' this is  a rather long string  ';
				expected_result1 = 'this is  a rather long string';
				expected_result2 = 'a rather long string';
				result = text['strip']();
				self['assertEquals'](result, expected_result1);
				result = text['strip'](' sthi');
				self['assertEquals'](result, expected_result2);
				result = text['strip']('');
				self['assertEquals'](result, text);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrip'] = $method;
			$method = $pyjs__bind_method2('testUnicode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text;
				text = 'Liebe \'hallo\' "gr\xfcsse" Gr\xfcsse';
				self['assertEqual'](text, $p['__getslice'](text, 0, null));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnicode'] = $method;
			$method = $pyjs__bind_method2('testIsDigit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']('123'['isdigit'](), true);
				self['assertEqual']('-123'['isdigit'](), false);
				self['assertEqual']('123.45'['isdigit'](), false);
				self['assertEqual']('1a'['isdigit'](), false);
				self['assertEqual']('   '['isdigit'](), false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsDigit'] = $method;
			$method = $pyjs__bind_method2('testStringIterate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,text,$iter1_iter,$add2,$add1,t,x,$iter1_array;
				text = ' this is  a rather long string  ';
				t = '';
				$iter1_iter = text;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					t = (typeof ($add1=t)==typeof ($add2=x) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				self['assertEqual'](text, t);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStringIterate'] = $method;
			$method = $pyjs__bind_method2('testStrTuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['str']($p['tuple']([$constant_int_5, $constant_int_6])), '(5, 6)');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrTuple'] = $method;
			$method = $pyjs__bind_method2('testStrList', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['str']($p['list']([$constant_int_5, $constant_int_6])), '[5, 6]');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrList'] = $method;
			$method = $pyjs__bind_method2('testStrFloat', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1;
				f1 = 1.5;
				self['assertEqual']($p['str'](f1), '1.5');
				self['assertEqual'](f1['__str__'](), '1.5', 'float.__str__() returns type instead of value, bug #487');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrFloat'] = $method;
			$method = $pyjs__bind_method2('testStartsWith', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = 'abcd';
				self['assertEqual'](s['startswith']('ab'), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_0), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_1), false);
				self['assertEqual'](s['startswith']('bc', $constant_int_1), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_8), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_3), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_2), true);
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_1), false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStartsWith'] = $method;
			$method = $pyjs__bind_method2('testEndsWith', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				s = 'abcd';
				self['assertEqual'](s['endswith']('cd'), true);
				self['assertEqual'](s['endswith']('cd', $constant_int_0), true);
				self['assertEqual'](s['endswith']('cd', $constant_int_2), true);
				self['assertEqual'](s['endswith']('cd', $constant_int_3), false);
				self['assertEqual'](s['endswith']('cd', $constant_int_0, $constant_int_3), false);
				self['assertEqual'](s['endswith']('bc', $constant_int_0, $constant_int_3), true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEndsWith'] = $method;
			$method = $pyjs__bind_method2('testLjust', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']('a'['ljust']($constant_int_0), 'a');
				self['assertEqual']('a'['ljust']($constant_int_4), 'a   ');
				self['assertEqual']('a'['ljust']($constant_int_4, 'b'), 'abbb');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLjust'] = $method;
			$method = $pyjs__bind_method2('testRjust', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']('a'['rjust']($constant_int_4, 'b'), 'bbba');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRjust'] = $method;
			$method = $pyjs__bind_method2('testCenter', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']('a'['center']($constant_int_4, '1'), '1a11');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCenter'] = $method;
			$method = $pyjs__bind_method2('testZfill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']('a'['zfill']($constant_int_4), '000a');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZfill'] = $method;
			$method = $pyjs__bind_method2('testSprintfList', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,s;
				self['assertEqual']($p['sprintf']('%s', 'foo'), 'foo');
				self['assertEqual']($p['sprintf']('%% %s', ''), '% ');
				self['assertEqual']($p['sprintf']('[%% %s]', ''), '[% ]');
				self['assertEqual']($p['sprintf']('[%c]', $constant_int_32), '[ ]');
				self['assertEqual']($p['sprintf']('[%r]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%s]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%d]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%i]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%u]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%e]', $constant_int_11), '[1.100000e+01]');
				self['assertEqual']($p['sprintf']('[%E]', $constant_int_11), '[1.100000E+01]');
				self['assertEqual']($p['sprintf']('[%f]', $constant_int_11), '[11.000000]');
				self['assertEqual']($p['sprintf']('[%.2f]', $constant_int_11), '[11.00]');
				self['assertEqual']($p['sprintf']('[%F]', $constant_int_11), '[11.000000]');
				self['assertEqual']($p['sprintf']('[%g]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%G]', $constant_int_11), '[11]');
				self['assertEqual']($p['sprintf']('[%o]', $constant_int_11), '[13]');
				self['assertEqual']($p['sprintf']('[%x]', $constant_int_11), '[b]');
				self['assertEqual']($p['sprintf']('[%X]', $constant_int_11), '[B]');
				self['assertEqual']($p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_6, 1.234, 1.234])), ' 1.234,  1.234000');
				self['assertEqual']($p['sprintf']('%0*g,%010f', $p['tuple']([$constant_int_6, 1.234, 1.234])), '01.234,001.234000');
				self['assertEqual']($p['sprintf']('[%04x]', $constant_int_1234), '[04d2]');
				self['assertEqual']($p['sprintf']('[%3% %s]', 'a'), '[  % a]');
				try {
					s = $p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_1, $constant_int_2]));
					self['fail']('Failed to raise error for "%*g,%10f" % (1, 2)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']($p['str'](e), 'not enough arguments for format string');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					s = $p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]));
					self['fail']('Failed to raise error for "%*g,%10f" % (1, 2, 3, 4)');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						self['assertEqual']($p['str'](e), 'not all arguments converted during string formatting');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual']($p['sprintf']('\n%s\n%s\n', $p['tuple'](['s1', 's2'])), '\ns1\ns2\n');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfList'] = $method;
			$method = $pyjs__bind_method2('testSprintfDict', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,testdict,s;
				testdict = $p['dict']([['s1', 'string'], ['s2', 'another string'], ['v0', $constant_int_0], ['v1', $constant_int_1], ['v2', 1.234]]);
				self['assertEqual']($p['sprintf']('[%(v1)12s|%(v1)-12s]', testdict), '[           1|1           ]');
				self['assertEqual']($p['sprintf']('[%(v1)012o|%(v1)-012o]', testdict), '[000000000001|1           ]');
				self['assertEqual']($p['sprintf']('[%(v1)#012o|%(v1)#-012o]', testdict), '[000000000001|01          ]');
				self['assertEqual']($p['sprintf']('[%(v0)#012o|%(v0)#-012o]', testdict), '[000000000000|0           ]');
				self['assertEqual']($p['sprintf']('[%(v1)#012x|%(v1)#-012x]', testdict), '[0x0000000001|0x1         ]');
				self['assertEqual']($p['sprintf']('%(s1)3% %(s1)s', testdict), '  % string');
				self['assertEqual']($p['sprintf']('%(v1)#g', testdict), '1.00000');
				try {
					s = $p['sprintf']('%(not-there)s', testdict);
					self['fail']('Failed to raise error for "%(not-there)s" % testdict');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						self['assertEqual']($p['str'](e), "'not-there'");
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['assertEqual']($p['sprintf']('\n%(s1)s\n%(s1)s\n', testdict), '\nstring\nstring\n');
				self['assertEqual']($p['sprintf']('%%s %(foo)s', $p['dict']([['foo', $constant_int_1]])), '%s 1');
				self['assertEqual']($p['sprintf']('%s %%(foo)s', $p['dict']([['foo', $constant_int_1]])), "{'foo': 1} %(foo)s");
				self['assertEqual']($p['sprintf']('%s %(foo)s', $p['dict']([['foo', $constant_int_1]])), "{'foo': 1} 1");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfDict'] = $method;
			$method = $pyjs__bind_method2('testSprintfVar', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod2,$mod1,f;
				f = '%s';
				self['assertEqual']((typeof ($mod1=f)==typeof ($mod2='test') && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), 'test');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfVar'] = $method;
			$method = $pyjs__bind_method2('testIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$17,e,$11,$12,$13,$21,$20,$22,$18,$19,s,$pyjs_try_err,a;
				s = '12345';
				self['assertEqual']((typeof ($11=s)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_0]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_0)), '1');
				self['assertEqual']((typeof ($13=s)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']((typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))), '5');
				self['assertEqual']($p['__getslice'](s, $constant_int_1, (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))), '234');
				try {
					a = (typeof ($15=s)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_200]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_200));
					self['fail']('Failed to raise an IndexError');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($17=e)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__']($constant_int_0)), 'string index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					a = (typeof ($19=s)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=(typeof ($usub8=$constant_int_200)=='number'?
						-$usub8:
						$p['op_usub']($usub8))]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__']((typeof ($usub8=$constant_int_200)=='number'?
						-$usub8:
						$p['op_usub']($usub8))));
					self['fail']('Failed to raise an IndexError');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($21=e)['__array'] != 'undefined'?
							((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
								$21['__getitem__']($22)):
								$21['__getitem__']($constant_int_0)), 'string index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndex'] = $method;
			$method = $pyjs__bind_method2('testOperator', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$mul3,$mul2,$mul1;
				self['assertEqual']('1'['__add__']('2'), '12');
				self['assertEqual']('1'['__mul__']($constant_int_2), '11');
				self['assertEqual']('1'['__rmul__']($constant_int_3), '111');
				self['assertEqual']((typeof ($mul1='2')==typeof ($mul2=$constant_int_3) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), '222');
				self['assertEqual']((typeof ($mul3=$constant_int_3)==typeof ($mul4='3') && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), '333');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOperator'] = $method;
			$method = $pyjs__bind_method2('testIsAlnum', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']('abc'['isalnum']());
				self['assertTrue']('0bc'['isalnum']());
				self['assertFalse']('.?abc'['isalnum']());
				self['assertFalse'](' 0bc'['isalnum']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsAlnum'] = $method;
			$method = $pyjs__bind_method2('testIsAlpha', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']('abc'['isalpha']());
				self['assertFalse']('0bc'['isalpha']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsAlpha'] = $method;
			$method = $pyjs__bind_method2('testIsUpper', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']('ABC'['isupper'](), 'ABC');
				self['assertFalse']('AbC'['isupper'](), 'AbC');
				self['assertTrue']('A0C'['isupper'](), 'A0C');
				self['assertFalse']('A0c'['isupper'](), 'A0c');
				self['assertTrue']('A C'['isupper'](), 'A C');
				self['assertFalse']('A c'['isupper'](), 'A c');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsUpper'] = $method;
			$method = $pyjs__bind_method2('testIsLower', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2729babae4fdcf3e0aab6fe412322272') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertTrue']('abc'['islower'](), 'abc');
				self['assertFalse']('AbC'['islower'](), 'AbC');
				self['assertTrue']('a0c'['islower'](), 'a0c');
				self['assertFalse']('A0c'['islower'](), 'A0c');
				self['assertTrue']('a c'['islower'](), 'a c');
				self['assertFalse']('A c'['islower'](), 'A c');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsLower'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StringTest', $p['tuple']($bases), $data);
		})();
		$m['ClassWithOwnToString'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'StringTest';
			$cls_definition['__md5__'] = 'e37ea8696f85cb0081d23c944524bf13';
			$method = $pyjs__bind_method2('toString', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e37ea8696f85cb0081d23c944524bf13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'ClassWithOwnToString as a String';
			}
	, 1, [null,null,['self']]);
			$cls_definition['toString'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassWithOwnToString', $p['tuple']($bases), $data);
		})();
		$m['ClassWithOwnToString2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'StringTest';
			$cls_definition['__md5__'] = '490b8ebec5769405e14c9a57c2ae9a1e';
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '490b8ebec5769405e14c9a57c2ae9a1e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return 'ClassWithOwnToString2 as a String';
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassWithOwnToString2', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end StringTest */


/* end module: StringTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write']
*/
