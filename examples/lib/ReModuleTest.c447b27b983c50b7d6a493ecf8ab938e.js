/* start module: ReModuleTest */
$pyjs['loaded_modules']['ReModuleTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ReModuleTest']['__was_initialized__']) return $pyjs['loaded_modules']['ReModuleTest'];
	var $m = $pyjs['loaded_modules']['ReModuleTest'];
	$m['__repr__'] = function() { return '<module: ReModuleTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ReModuleTest';
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
		var $constant_int_0 = new $p['int'](0);
		$m['sys'] = $p['___import___']('sys', null);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['re'] = $p['___import___']('re', null);
		$m['ReModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ReModuleTest';
			$cls_definition['__md5__'] = '199ab4ea4bb030f29b32a3c2ef6fb0d6';
			$method = $pyjs__bind_method2('matchTest', function(msg, pat, flags, string, groups, span) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					pat = arguments[2];
					flags = arguments[3];
					string = arguments[4];
					groups = arguments[5];
					span = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $8,$iter1_iter,$7,$len5,$iter1_array,$11,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$bool1,$9,$6,$4,$5,$2,$3,$1,$14,$10,$iter1_type,$12,$iter1_idx,i,$13,m,$len4,r,$len2,$len3,$len1;
				r = $m['re']['compile'](pat, flags);
				m = r['match'](string);
				if ((($bool1=$p['op_is'](groups, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['assertTrue']($p['op_is'](m, null), $p['sprintf']('%s: None expected', msg));
					return null;
				}
				self['assertTrue'](!$p['op_is'](m, null), $p['sprintf']('%s: Unexpected None', msg));
				self['assertTrue']($p['op_eq']((($len1=m['groups']()) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), (typeof ($sub1=(($len2=groups) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len3=m['groups']()) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), (typeof ($sub3=(($len4=groups) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))])));
				$iter1_iter = $p['range']((($len5=groups) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['assertEqual'](m['group'](i), (typeof ($1=groups)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($3=groups)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](i))])));
				}
				self['assertEqual'](m['start'](), (typeof ($5=span)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($7=span)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_0))])));
				self['assertEqual'](m['end'](), (typeof ($9=span)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_1]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($11=span)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_1))])));
				self['assertTrue']($p['op_eq'](m['span'](), span), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($13=span)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_1]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_1))])));
				return null;
			}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
			$cls_definition['matchTest'] = $method;
			$method = $pyjs__bind_method2('searchTest', function(msg, pat, flags, string, groups, span) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					pat = arguments[2];
					flags = arguments[3];
					string = arguments[4];
					groups = arguments[5];
					span = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $18,$28,$iter2_iter,$21,$20,$22,$25,$24,$27,$26,$sub8,$sub7,$sub6,$sub5,$iter2_type,$bool2,$iter2_idx,$17,$len10,$15,$16,$iter2_nextval,i,m,$19,$len6,$len7,r,$len8,$23,$iter2_array,$len9;
				r = $m['re']['compile'](pat, flags);
				m = r['search'](string);
				if ((($bool2=$p['op_is'](groups, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['assertTrue']($p['op_is'](m, null), $p['sprintf']('%s: None expected', msg));
					return null;
				}
				self['assertTrue'](!$p['op_is'](m, null), $p['sprintf']('%s: Unexpected None', msg));
				self['assertTrue']($p['op_eq']((($len6=m['groups']()) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6))))), (typeof ($sub5=(($len7=groups) === null?$constant_int_0:
					(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
								$p['len']($len7))))))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len8=m['groups']()) === null?$constant_int_0:
					(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
								$p['len']($len8))))), (typeof ($sub7=(($len9=groups) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))))==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8))])));
				$iter2_iter = $p['range']((($len10=groups) === null?$constant_int_0:
					(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
								$p['len']($len10))))));
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					self['assertEqual'](m['group'](i), (typeof ($15=groups)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($17=groups)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](i))])));
				}
				self['assertEqual'](m['start'](), (typeof ($19=span)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($21=span)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_0))])));
				self['assertEqual'](m['end'](), (typeof ($23=span)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_1]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($25=span)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=$constant_int_1]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']($constant_int_1))])));
				self['assertTrue']($p['op_eq'](m['span'](), span), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($27=span)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=$constant_int_1]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']($constant_int_1))])));
				return null;
			}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
			$cls_definition['searchTest'] = $method;
			$method = $pyjs__bind_method2('testMatchBasics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m;
				self['matchTest']('test 1', 'Ab.cd', $constant_int_0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 2', 'Ab.cd', $constant_int_0, 'abXcd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 3b', '(?i)Ab.cd', $constant_int_0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 4', 'Ab.cd', $constant_int_0, 'ab\ncd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 5b', '(?s)Ab.cd', $constant_int_0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 6a', 'A(b).(c)d', $p['op_bitor2']($p['getattr']($m['re'], 'I'), $p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['matchTest']('test 6b', '(?is)A(b).(c)d', $constant_int_0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				m = $m['re']['match']('1..4', '1234');
				self['assertFalse']($p['op_is'](m, null), 're.match("1..4", "1234")');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMatchBasics'] = $method;
			$method = $pyjs__bind_method2('testSearchBasics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m;
				self['searchTest']('test 1', 'Ab.cd', $constant_int_0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 2', 'Ab.cd', $constant_int_0, 'abXcd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 3b', '(?i)Ab.cd', $constant_int_0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 4', 'Ab.cd', $constant_int_0, 'ab\ncd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 5b', 'Ab.cd(?s)', $constant_int_0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 6a', 'A(b).(c)d', $p['op_bitor2']($p['getattr']($m['re'], 'I'), $p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 6b', 'A(b)(?is).(c)d', $constant_int_0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				self['searchTest']('test 7', 'Ab.cd', $constant_int_0, 'AAAbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_2, $constant_int_7]));
				self['searchTest']('test 8', ' ', $constant_int_0, 'Spaces in a sentence', $p['list']([' ']), $p['tuple']([$constant_int_6, $constant_int_7]));
				m = $m['re']['search']('ab', 'dab abba a b');
				self['assertFalse']($p['op_is'](m, null), 're.search("ab", "dab abba a b")');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSearchBasics'] = $method;
			$method = $pyjs__bind_method2('testFindallBasics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len11,e;
				e = $m['re']['compile']('e')['findall']('Where are all these eees');
				self['assertEqual']((($len11=e) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))), $constant_int_8);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFindallBasics'] = $method;
			$method = $pyjs__bind_method2('testFindallExtra', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,s,out;
				r = $m['re']['compile']('\\w+ly');
				s = 'He was carefully disguised but captured quickly by police.';
				out = $p['list'](['carefully', 'quickly']);
				self['assertEqual'](r['findall'](s), out);
				r = $m['re']['compile']('\\$(?:(\\$)|([_a-z][_a-z0-9]*)|{([_a-z][_a-z0-9]*)}|())');
				s = 'Here is $$some $text which contains ${some} $2 placeholders';
				out = $p['list']([$p['tuple'](['$', '', '', '']), $p['tuple'](['', 'text', '', '']), $p['tuple'](['', '', 'some', '']), $p['tuple'](['', '', '', ''])]);
				self['assertEqual'](r['findall'](s), out);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFindallExtra'] = $method;
			$method = $pyjs__bind_method2('testSubBasics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var matches,r,s,fn;
				matches = $p['list']([]);
				fn = function(m) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $len12;
					matches['append'](m);
					return $p['sprintf']('%s', (($len12=matches) === null?$constant_int_0:
						(typeof $len12['__array'] != 'undefined' ? new $p['int']($len12['__array']['length']):
							(typeof $len12['__len__'] == 'function'?$len12['__len__']():
								(typeof $len12['length'] != 'undefined'? new $p['int']($len12['length']):
									$p['len']($len12))))));
				};
				fn['__name__'] = 'fn';

				fn['__bind_type__'] = 0;
				fn['__args__'] = [null,null,['m']];
				r = $m['re']['compile']('e');
				s = 'Where are all these eees';
				self['assertEqual'](r['sub']('Q', s), 'WhQrQ arQ all thQsQ QQQs');
				self['assertEqual'](r['sub'](fn, s), 'Wh1r2 ar3 all th4s5 678s');
				self['assertEqual'](r['sub']('Q', s, $constant_int_4), 'WhQrQ arQ all thQse eees');
				matches = $p['list']([]);
				self['assertEqual'](r['sub'](fn, s, $constant_int_5), 'Wh1r2 ar3 all th4s5 eees');
				self['assertEqual'](r['subn']('Q', s), $p['tuple'](['WhQrQ arQ all thQsQ QQQs', $constant_int_8]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSubBasics'] = $method;
			$method = $pyjs__bind_method2('testSplitBasics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,s;
				r = $m['re']['compile']('e');
				s = 'Where are all these eees';
				self['assertEqual'](r['$$split'](s), $p['list'](['Wh', 'r', ' ar', ' all th', 's', ' ', '', '', 's']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSplitBasics'] = $method;
			$method = $pyjs__bind_method2('testMatchExtended', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,m,g;
				r = $m['re']['compile']('ed');
				m = r['match']('ed ed', $constant_int_0);
				self['assertEqual'](m['group']($constant_int_0), 'ed');
				m = r['match']('ed ed', $constant_int_1);
				self['assertTrue']($p['op_is'](m, null), 'match("ed ed", 1)');
				m = r['match']('ed ed', $constant_int_3);
				self['assertEqual'](m['group']($constant_int_0), 'ed');
				r = $m['re']['compile']('^a.*$', $p['getattr']($m['re'], 'M'));
				m = r['match']('a  ');
				self['assertEqual'](m['group']($constant_int_0), 'a  ');
				m = r['match']('a1\na2');
				self['assertEqual'](m['group']($constant_int_0), 'a1');
				m = r['match']('a1\na2', $constant_int_2);
				self['assertTrue']($p['op_is'](m, null), 'match("a1\na2", 2)');
				m = r['match']('a1\na2', $constant_int_3);
				self['assertEqual'](m['group']($constant_int_0), 'a2');
				m = r['match']('a1\na2', $constant_int_3, $constant_int_4);
				self['assertEqual'](m['group']($constant_int_0), 'a');
				r = $m['re']['compile']('([+])?(\\d{1,})?');
				m = r['match']('1');
				g = m['groups']('');
				self['assertEqual'](g, $p['tuple'](['', '1']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMatchExtended'] = $method;
			$method = $pyjs__bind_method2('testBackReferences', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var expected,s,EM_re,B_re;
				B_re = $m['re']['compile']('\\*\\*(.*?)\\*\\*', $p['getattr']($m['re'], 'DOTALL'));
				EM_re = $m['re']['compile']('\\*(.*?)\\*', $p['getattr']($m['re'], 'DOTALL'));
				s = 'Text between *single asterisks* is emphasized.<br>Text between **double asterisks** is bolded.<br>You **can *even* embed** them!';
				expected = 'Text between <EM>single asterisks</EM> is emphasized.<br>Text between <STRONG>double asterisks</STRONG> is bolded.<br>You <STRONG>can <EM>even</EM> embed</STRONG> them!';
				s = B_re['sub']('<STRONG>\\1</STRONG>', s);
				s = EM_re['sub']('<EM>\\1</EM>', s);
				self['assertEqual'](s, expected, 'Bug #495');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBackReferences'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ReModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ReModuleTest */


/* end module: ReModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 're']
*/
