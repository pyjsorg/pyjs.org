/* start module: MD5Test */
$pyjs['loaded_modules']['MD5Test'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['MD5Test']['__was_initialized__']) return $pyjs['loaded_modules']['MD5Test'];
	var $m = $pyjs['loaded_modules']['MD5Test'];
	$m['__repr__'] = function() { return '<module: MD5Test>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MD5Test';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_15 = new $p['int'](15);
		$m['sys'] = $p['___import___']('sys', null);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['md5'] = $p['___import___']('md5.md5', null, null, false);
		if ((($bool1=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari', 'spidermonkey', 'pyv8'])['__contains__']($p['getattr']($m['sys'], 'platform'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['hexstr'] = function(s) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $iter1_nextval,$iter1_type,i,h,$iter1_iter,$add2,$add3,r,$iter1_array,$add4,$add1,x,$4,$1,$2,$3,$iter1_idx;
				h = '0123456789abcdef';
				r = '';
				i = null;
				$iter1_iter = $p['range']($constant_int_16);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					i = $p['int'](s[x]);
					r = (typeof ($add3=(typeof ($add1=r)==typeof ($add2=(typeof ($1=h)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=$p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']($p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)))==typeof ($add4=(typeof ($3=h)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$p['op_bitand2'](i, $constant_int_15)]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($p['op_bitand2'](i, $constant_int_15)))) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
				return r;
			};
			$m['hexstr']['__name__'] = 'hexstr';

			$m['hexstr']['__bind_type__'] = 0;
			$m['hexstr']['__args__'] = [null,null,['s']];
		}
		else {
			$m['hexstr'] = function(s) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var c,$iter2_nextval,$iter2_type,$iter2_iter,i,h,$iter2_idx,r,$add6,$add7,$8,$add5,$6,$7,$add8,$5,$iter2_array;
				h = '0123456789abcdef';
				r = '';
				$iter2_iter = s;
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					c = $iter2_nextval;
					i = $p['ord'](c);
					r = (typeof ($add7=(typeof ($add5=r)==typeof ($add6=(typeof ($5=h)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($add8=(typeof ($7=h)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$p['op_bitand2'](i, $constant_int_15)]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($p['op_bitand2'](i, $constant_int_15)))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				return r;
			};
			$m['hexstr']['__name__'] = 'hexstr';

			$m['hexstr']['__bind_type__'] = 0;
			$m['hexstr']['__args__'] = [null,null,['s']];
		}
		$m['MD5Test'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'MD5Test';
			$cls_definition['__md5__'] = '71ddfc606fe3aedaac79ec806325d10a';
			$method = $pyjs__bind_method2('md5test', function(s, expected) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					expected = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($m['hexstr']($m['md5'](s)['digest']()), expected);
				self['assertEqual']($m['md5'](s)['hexdigest'](), expected);
				return null;
			}
	, 1, [null,null,['self'],['s'],['expected']]);
			$cls_definition['md5test'] = $method;
			$method = $pyjs__bind_method2('test_basics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['md5test']('', 'd41d8cd98f00b204e9800998ecf8427e');
				self['md5test']('a', '0cc175b9c0f1b6a831c399e269772661');
				self['md5test']('abc', '900150983cd24fb0d6963f7d28e17f72');
				self['md5test']('message digest', 'f96b697d7cb7938d525a2f31aaf161d0');
				self['md5test']('abcdefghijklmnopqrstuvwxyz', 'c3fcd3d76192e4007dfb496cca67e13b');
				self['md5test']('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 'd174ab98d277d9f5a5611c2c9f419d9f');
				self['md5test']('12345678901234567890123456789012345678901234567890123456789012345678901234567890', '57edf4a22be3c955ac49da2e2107b67a');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_basics'] = $method;
			$method = $pyjs__bind_method2('test_hexdigest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,m;
				m = $m['md5']('testing the hexdigest method');
				h = m['hexdigest']();
				self['assertEqual']($m['hexstr'](m['digest']()), h);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hexdigest'] = $method;
			$method = $pyjs__bind_method2('test_large_update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,bs,m1,$add11,aas,m2,cs,$add10,$add9;
				aas = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
				bs = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
				cs = 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc';
				m1 = $m['md5']();
				m1['update'](aas);
				m1['update'](bs);
				m1['update'](cs);
				m2 = $m['md5']();
				m2['update']((typeof ($add11=(typeof ($add9=aas)==typeof ($add10=bs) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=cs) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				self['assertEqual']($m['hexstr'](m1['digest']()), $m['hexstr'](m2['digest']()));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_large_update'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MD5Test', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MD5Test */


/* end module: MD5Test */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'md5.md5', 'md5']
*/
