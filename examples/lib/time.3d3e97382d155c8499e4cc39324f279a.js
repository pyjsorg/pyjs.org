/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	try {
		var $sub2,$sub1,$bool2,$bool1,$4,$2,$3,$1,$cmp1,$cmp2;
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
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_86400 = new $p['int'](86400);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_604800000 = new $p['int'](604800000);
		var $constant_int_60 = new $p['int'](60);
		$m['math'] = $p['___import___']('math', null);
		$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
		$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
		if ((($bool1=((($cmp1=$m['altzone'])===($cmp2=$m['timezone'])?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['d'] = $m['timezone'];
			$m['timezone'] = $m['altzone'];
			$m['altzone'] = $m['d'];
		}
		$m['_dst'] = (typeof ($sub1=$m['timezone'])==typeof ($sub2=$m['altzone']) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$p['op_sub']($sub1,$sub2));
		$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
		$m['d'] = (typeof ($1=$p['str']($m['d']['toLocaleString']())['$$split']())['__array'] != 'undefined'?
			((typeof $1['__array'][$2=(typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))));
		if ((($bool2=$p['op_eq']((typeof ($3=$m['d'])['__array'] != 'undefined'?
			((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
				$3['__getitem__']($4)):
				$3['__getitem__']($constant_int_0)), '(')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			$m['d'] = $p['__getslice']($m['d'], $constant_int_1, (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
		}
		$m['tzname'] = $p['tuple']([$m['d'], null]);
		delete $m['d'];
		$m['__c__days'] = $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
		$m['__c__months'] = $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
		$m['time'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $p['float'](new Date()['getTime']() / 1000.0);
		};
		$m['time']['__name__'] = 'time';

		$m['time']['__bind_type__'] = 0;
		$m['time']['__args__'] = [null,null];
		$m['struct_time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'time';
			$cls_definition['__md5__'] = '0d9d18be918958952848029778ec7f45';
			$cls_definition['n_fields'] = $constant_int_9;
			$cls_definition['n_sequence_fields'] = $constant_int_9;
			$cls_definition['n_unnamed_fields'] = $constant_int_0;
			$cls_definition['tm_year'] = null;
			$cls_definition['tm_mon'] = null;
			$cls_definition['tm_mday'] = null;
			$cls_definition['tm_hour'] = null;
			$cls_definition['tm_min'] = null;
			$cls_definition['tm_sec'] = null;
			$cls_definition['tm_wday'] = null;
			$cls_definition['tm_yday'] = null;
			$cls_definition['tm_isdst'] = null;
			$method = $pyjs__bind_method2('__init__', function(ttuple) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ttuple = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];
				var $bool4,$21,$20,$22,$bool3,$8,$9,$6,$7,$5,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19;
				if ((($bool4=!(($bool3=$p['op_is'](ttuple, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_year', (typeof ($5=ttuple)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_0))) : $p['setattr'](self, 'tm_year', (typeof ($5=ttuple)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_0))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mon', (typeof ($7=ttuple)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_1))) : $p['setattr'](self, 'tm_mon', (typeof ($7=ttuple)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_1))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mday', (typeof ($9=ttuple)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_2]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_2))) : $p['setattr'](self, 'tm_mday', (typeof ($9=ttuple)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_2]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_2))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_hour', (typeof ($11=ttuple)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_3]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_3))) : $p['setattr'](self, 'tm_hour', (typeof ($11=ttuple)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_3]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_3))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_min', (typeof ($13=ttuple)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_4]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_4))) : $p['setattr'](self, 'tm_min', (typeof ($13=ttuple)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_4]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_4))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_sec', (typeof ($15=ttuple)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_5]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_5))) : $p['setattr'](self, 'tm_sec', (typeof ($15=ttuple)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_5]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_5))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_wday', (typeof ($17=ttuple)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_6]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_6))) : $p['setattr'](self, 'tm_wday', (typeof ($17=ttuple)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_6]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_6))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_yday', (typeof ($19=ttuple)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=$constant_int_7]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__']($constant_int_7))) : $p['setattr'](self, 'tm_yday', (typeof ($19=ttuple)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=$constant_int_7]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__']($constant_int_7))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_isdst', (typeof ($21=ttuple)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_8]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_8))) : $p['setattr'](self, 'tm_isdst', (typeof ($21=ttuple)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_8]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_8))); 
				}
				return null;
			}
	, 1, [null,null,['self'],['ttuple', null]]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				t = $p['tuple']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
				return t['__str__']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['__str__']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$method = $pyjs__bind_method2('__getitem__', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $23,$24;
				return (typeof ($23=$p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=idx]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](idx));
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['__getitem__'] = $method;
			$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['__getslice']($p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]), lower, upper);
			}
	, 1, [null,null,['self'],['lower'],['upper']]);
			$cls_definition['__getslice__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
		})();
		$m['gmtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $add2,$sub3,$div1,$div2,$sub4,$mod2,$add6,$add5,tm_year,$add3,tm,$assign1,$add4,$bool5,date,$mod1,$add1,$div3,$div4,startOfYear;
			if ((($bool5=$p['op_is'](t, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				t = $m['time']();
			}
			date = new Date(t*1000);
			tm = $m['struct_time']();
			$assign1 = $p['int'](date['getUTCFullYear']());
			tm_year = $assign1;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign1) : $p['setattr'](tm, 'tm_year', $assign1); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', (typeof ($add1=$p['int'](date['getUTCMonth']()))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))) : $p['setattr'](tm, 'tm_mon', (typeof ($add1=$p['int'](date['getUTCMonth']()))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $p['int'](date['getUTCDate']())) : $p['setattr'](tm, 'tm_mday', $p['int'](date['getUTCDate']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getUTCHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getUTCHours']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getUTCMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getUTCMinutes']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getUTCSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getUTCSeconds']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod1=(typeof ($add3=$p['int'](date['getUTCDay']()))==typeof ($add4=$constant_int_6) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod1=(typeof ($add3=$p['int'](date['getUTCDay']()))==typeof ($add4=$constant_int_6) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', $constant_int_0) : $p['setattr'](tm, 'tm_isdst', $constant_int_0); 
			startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', (typeof ($add5=$constant_int_1)==typeof ($add6=$p['int']((typeof ($div3=(typeof ($sub3=t)==typeof ($sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))) : $p['setattr'](tm, 'tm_yday', (typeof ($add5=$constant_int_1)==typeof ($add6=$p['int']((typeof ($div3=(typeof ($sub3=t)==typeof ($sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))); 
			return tm;
		};
		$m['gmtime']['__name__'] = 'gmtime';

		$m['gmtime']['__bind_type__'] = 0;
		$m['gmtime']['__args__'] = [null,null,['t', null]];
		$m['localtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $mod4,$mod3,$sub8,$mul3,$div7,tm,tm_mon,startOfYear,$div5,$sub7,$sub6,$sub5,startOfDay,tm_year,$div8,$bool6,$bool7,$add12,$add13,date,dt,$mul4,$div6,$mul2,$mul1,dateOffset,$add14,startOfYearOffset,tm_mday,$assign4,$add7,$assign3,$assign2,$add10,$add8,$add9,$add11;
			if ((($bool6=$p['op_is'](t, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				t = $m['time']();
			}
			date = new Date(t*1000);
			dateOffset = date['getTimezoneOffset']();
			tm = $m['struct_time']();
			$assign2 = $p['int'](date['getFullYear']());
			tm_year = $assign2;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign2) : $p['setattr'](tm, 'tm_year', $assign2); 
			$assign3 = (typeof ($add7=$p['int'](date['getMonth']()))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			tm_mon = $assign3;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', $assign3) : $p['setattr'](tm, 'tm_mon', $assign3); 
			$assign4 = $p['int'](date['getDate']());
			tm_mday = $assign4;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $assign4) : $p['setattr'](tm, 'tm_mday', $assign4); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getHours']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getMinutes']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getSeconds']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod3=(typeof ($add9=$p['int'](date['getDay']()))==typeof ($add10=$constant_int_6) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod3=(typeof ($add9=$p['int'](date['getDay']()))==typeof ($add10=$constant_int_6) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', ((($bool7=$p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ($constant_int_0) : ($constant_int_1))) : $p['setattr'](tm, 'tm_isdst', ((($bool7=$p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ($constant_int_0) : ($constant_int_1))); 
			startOfYear = new Date(tm_year,0,1);
			startOfYearOffset = startOfYear['getTimezoneOffset']();
			startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
			dt = (typeof ($div5=$p['float']((typeof ($sub5=startOfDay['getTime']())==typeof ($sub6=startOfYear['getTime']()) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))))==typeof ($div6=$constant_int_1000) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			dt = (typeof ($add11=dt)==typeof ($add12=(typeof ($mul3=$constant_int_60)==typeof ($mul4=(typeof ($sub7=startOfYearOffset)==typeof ($sub8=dateOffset) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', (typeof ($add13=$constant_int_1)==typeof ($add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14))) : $p['setattr'](tm, 'tm_yday', (typeof ($add13=$constant_int_1)==typeof ($add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14))); 
			return tm;
		};
		$m['localtime']['__name__'] = 'localtime';

		$m['localtime']['__bind_type__'] = 0;
		$m['localtime']['__args__'] = [null,null,['t', null]];
		$m['mktime'] = function(t) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var tm_sec,$div10,ts,$div12,$29,$28,$25,$div11,$27,$26,$sub9,tm_mon,$sub12,tm_min,tm_hour,$sub11,$sub10,tm_year,$add15,$add16,$div9,date,$bool8,$bool9,utc,$38,$36,$37,tm_mday,$35,$32,$33,$30,$31,$34;
			tm_year = (typeof ($25=t)['__array'] != 'undefined'?
				((typeof $25['__array'][$26=$constant_int_0]) != 'undefined'?$25['__array'][$26]:
					$25['__getitem__']($26)):
					$25['__getitem__']($constant_int_0));
			tm_mon = (typeof ($sub9=(typeof ($27=t)['__array'] != 'undefined'?
				((typeof $27['__array'][$28=$constant_int_1]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__']($constant_int_1)))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10));
			tm_mday = (typeof ($29=t)['__array'] != 'undefined'?
				((typeof $29['__array'][$30=$constant_int_2]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__']($constant_int_2));
			tm_hour = (typeof ($31=t)['__array'] != 'undefined'?
				((typeof $31['__array'][$32=$constant_int_3]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__']($constant_int_3));
			tm_min = (typeof ($33=t)['__array'] != 'undefined'?
				((typeof $33['__array'][$34=$constant_int_4]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__']($constant_int_4));
			tm_sec = (typeof ($35=t)['__array'] != 'undefined'?
				((typeof $35['__array'][$36=$constant_int_5]) != 'undefined'?$35['__array'][$36]:
					$35['__getitem__']($36)):
					$35['__getitem__']($constant_int_5));
			date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
			utc = (typeof ($div9=Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))==typeof ($div10=$constant_int_1000) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
			ts = (typeof ($div11=date['getTime']())==typeof ($div12=$constant_int_1000) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12));
			if ((($bool8=$p['op_eq']((typeof ($37=t)['__array'] != 'undefined'?
				((typeof $37['__array'][$38=$constant_int_8]) != 'undefined'?$37['__array'][$38]:
					$37['__getitem__']($38)):
					$37['__getitem__']($constant_int_8)), $constant_int_0)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=$p['op_eq']((typeof ($sub11=ts)==typeof ($sub12=utc) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12)), $m['timezone'])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return ts;
				}
				return (typeof ($add15=ts)==typeof ($add16=$m['_dst']) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
			}
			return ts;
		};
		$m['mktime']['__name__'] = 'mktime';

		$m['mktime']['__bind_type__'] = 0;
		$m['mktime']['__args__'] = [null,null,['t']];
		$m['strftime'] = function(fmt, t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
			var $add20,tm_sec,firstMonday,$bool10,$bool11,$bool12,$bool13,$bool14,$mod5,$mod6,result,tm_min,remainder,$bool38,$div14,$add18,$add22,$div13,$49,$48,tm_mon,$and1,$43,$42,$41,$40,$47,$46,$45,$44,format,$sub13,tm_hour,$and2,startOfYear,$sub16,$sub15,$sub14,tm_year,$add17,tm_yday,date,firstWeek,tm_wday,$add19,$cmp4,$cmp3,$39,tm_mday,weekNo,$add21,$len1,$50,$51,$52,$53,$54,re_pct;
			if ((($bool10=$p['op_is'](t, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				t = $m['localtime']();
			}
			else {
				if ((($bool13=((($bool12=$and1=!(($bool11=$p['isinstance'](t, $m['struct_time'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12['__nonzero__']=='function'?
							$bool12['__nonzero__']() :
							(typeof $bool12['__len__']=='function'?
								($bool12['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_eq']((($len1=t) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_9):$and1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					throw ($p['TypeError']('argument must be 9-item sequence, not float'));
				}
			}
			tm_year = (typeof ($39=t)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=$constant_int_0]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__']($constant_int_0));
			tm_mon = (typeof ($41=t)['__array'] != 'undefined'?
				((typeof $41['__array'][$42=$constant_int_1]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__']($constant_int_1));
			tm_mday = (typeof ($43=t)['__array'] != 'undefined'?
				((typeof $43['__array'][$44=$constant_int_2]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__']($constant_int_2));
			tm_hour = (typeof ($45=t)['__array'] != 'undefined'?
				((typeof $45['__array'][$46=$constant_int_3]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__']($constant_int_3));
			tm_min = (typeof ($47=t)['__array'] != 'undefined'?
				((typeof $47['__array'][$48=$constant_int_4]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__']($constant_int_4));
			tm_sec = (typeof ($49=t)['__array'] != 'undefined'?
				((typeof $49['__array'][$50=$constant_int_5]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__']($constant_int_5));
			tm_wday = (typeof ($51=t)['__array'] != 'undefined'?
				((typeof $51['__array'][$52=$constant_int_6]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__']($constant_int_6));
			tm_yday = (typeof ($53=t)['__array'] != 'undefined'?
				((typeof $53['__array'][$54=$constant_int_7]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__']($constant_int_7));
			date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
			startOfYear = new Date(tm_year,0,1);
			firstMonday = (typeof ($add19=(typeof ($sub13=$constant_int_1)==typeof ($sub14=(typeof ($mod5=(typeof ($add17=startOfYear['getDay']())==typeof ($add18=$constant_int_6) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)))==typeof ($mod6=$constant_int_7) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6))) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14)))==typeof ($add20=$constant_int_7) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20));
			firstWeek = new Date(tm_year,0,firstMonday);
			weekNo = (typeof ($sub15=date['getTime']())==typeof ($sub16=firstWeek['getTime']()) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16));
			if ((($bool14=((($cmp3=weekNo)===($cmp4=$constant_int_0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				weekNo = $constant_int_0;
			}
			else {
				weekNo = (typeof ($add21=$constant_int_1)==typeof ($add22=$p['int']((typeof ($div13=weekNo)==typeof ($div14=$constant_int_604800000) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)))) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
			}
			format = function(c) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $bool18,$bool19,$bool15,$bool16,$bool17,$mod7,$mod9,$mod8,$bool32,$add23,$add25,$add24,$add26,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$sub18,$mod11,$mod10,$mod12,$sub17,$cmp5,$cmp6,$58,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$55,$56,$57;
				if ((($bool15=$p['op_eq'](c, '%')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					return '%';
				}
				else if ((($bool16=$p['op_eq'](c, 'a')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					return $p['__getslice'](format('A'), 0, $constant_int_3);
				}
				else if ((($bool17=$p['op_eq'](c, 'A')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					return (typeof ($55=$m['__c__days'])['__array'] != 'undefined'?
						((typeof $55['__array'][$56=format('w')]) != 'undefined'?$55['__array'][$56]:
							$55['__getitem__']($56)):
							$55['__getitem__'](format('w')));
				}
				else if ((($bool18=$p['op_eq'](c, 'b')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					return $p['__getslice'](format('B'), 0, $constant_int_3);
				}
				else if ((($bool19=$p['op_eq'](c, 'B')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					return (typeof ($57=$m['__c__months'])['__array'] != 'undefined'?
						((typeof $57['__array'][$58=(typeof ($sub17=tm_mon)==typeof ($sub18=$constant_int_1) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18))]) != 'undefined'?$57['__array'][$58]:
							$57['__getitem__']($58)):
							$57['__getitem__']((typeof ($sub17=tm_mon)==typeof ($sub18=$constant_int_1) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18))));
				}
				else if ((($bool20=$p['op_eq'](c, 'c')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					return date['toLocaleString']();
				}
				else if ((($bool21=$p['op_eq'](c, 'd')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					return $p['sprintf']('%02d', tm_mday);
				}
				else if ((($bool22=$p['op_eq'](c, 'H')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					return $p['sprintf']('%02d', tm_hour);
				}
				else if ((($bool23=$p['op_eq'](c, 'I')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['sprintf']('%02d', (typeof ($mod7=tm_hour)==typeof ($mod8=$constant_int_12) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8)));
				}
				else if ((($bool24=$p['op_eq'](c, 'j')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					return $p['sprintf']('%03d', tm_yday);
				}
				else if ((($bool25=$p['op_eq'](c, 'm')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					return $p['sprintf']('%02d', tm_mon);
				}
				else if ((($bool26=$p['op_eq'](c, 'M')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					return $p['sprintf']('%02d', tm_min);
				}
				else if ((($bool27=$p['op_eq'](c, 'p')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					if ((($bool28=((($cmp5=tm_hour)===($cmp6=$constant_int_12)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
						return 'AM';
					}
					return 'PM';
				}
				else if ((($bool29=$p['op_eq'](c, 'S')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					return $p['sprintf']('%02d', tm_sec);
				}
				else if ((($bool30=$p['op_eq'](c, 'U')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				else if ((($bool31=$p['op_eq'](c, 'w')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					return $p['sprintf']('%d', (typeof ($mod9=(typeof ($add23=tm_wday)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))==typeof ($mod10=$constant_int_7) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10)));
				}
				else if ((($bool32=$p['op_eq'](c, 'W')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					return $p['sprintf']('%d', weekNo);
				}
				else if ((($bool33=$p['op_eq'](c, 'x')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					return $p['sprintf']('%s', date['toLocaleDateString']());
				}
				else if ((($bool34=$p['op_eq'](c, 'X')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					return $p['sprintf']('%s', date['toLocaleTimeString']());
				}
				else if ((($bool35=$p['op_eq'](c, 'y')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					return $p['sprintf']('%02d', (typeof ($mod11=tm_year)==typeof ($mod12=$constant_int_100) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12)));
				}
				else if ((($bool36=$p['op_eq'](c, 'Y')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					return $p['sprintf']('%04d', tm_year);
				}
				else if ((($bool37=$p['op_eq'](c, 'Z')) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37['__nonzero__']=='function'?
								$bool37['__nonzero__']() :
								(typeof $bool37['__len__']=='function'?
									($bool37['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				return (typeof ($add25='%')==typeof ($add26=c) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
			};
			format['__name__'] = 'format';

			format['__bind_type__'] = 0;
			format['__args__'] = [null,null,['c']];
			result = '';
			remainder = fmt;
			re_pct = /([^%]*)%(.)(.*)/;
var a, fmtChar;
			while ((($bool38=remainder) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
			}
			return $p['str'](result);
		};
		$m['strftime']['__name__'] = 'strftime';

		$m['strftime']['__bind_type__'] = 0;
		$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
		$m['asctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $sub20,$add28,$add27,$69,$68,$65,$64,$67,$66,$61,$60,$63,$62,$mod14,$sub19,$mod13,$72,$73,$70,$71,$76,$74,$75,$59,$bool39;
			if ((($bool39=$p['op_is'](t, null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				t = $m['localtime']();
			}
			return $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']((typeof ($61=$m['__c__days'])['__array'] != 'undefined'?
				((typeof $61['__array'][$62=(typeof ($mod13=(typeof ($add27=(typeof ($59=t)['__array'] != 'undefined'?
				((typeof $59['__array'][$60=$constant_int_6]) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__']($constant_int_6)))==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28)))==typeof ($mod14=$constant_int_7) && typeof $mod13=='number'?
				(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
				$p['op_mod']($mod13,$mod14))]) != 'undefined'?$61['__array'][$62]:
					$61['__getitem__']($62)):
					$61['__getitem__']((typeof ($mod13=(typeof ($add27=(typeof ($59=t)['__array'] != 'undefined'?
				((typeof $59['__array'][$60=$constant_int_6]) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__']($constant_int_6)))==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28)))==typeof ($mod14=$constant_int_7) && typeof $mod13=='number'?
				(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
				$p['op_mod']($mod13,$mod14)))), 0, $constant_int_3), (typeof ($65=$m['__c__months'])['__array'] != 'undefined'?
				((typeof $65['__array'][$66=(typeof ($sub19=(typeof ($63=t)['__array'] != 'undefined'?
				((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
					$63['__getitem__']($64)):
					$63['__getitem__']($constant_int_1)))==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20))]) != 'undefined'?$65['__array'][$66]:
					$65['__getitem__']($66)):
					$65['__getitem__']((typeof ($sub19=(typeof ($63=t)['__array'] != 'undefined'?
				((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
					$63['__getitem__']($64)):
					$63['__getitem__']($constant_int_1)))==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20)))), (typeof ($67=t)['__array'] != 'undefined'?
				((typeof $67['__array'][$68=$constant_int_2]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__']($constant_int_2)), (typeof ($69=t)['__array'] != 'undefined'?
				((typeof $69['__array'][$70=$constant_int_3]) != 'undefined'?$69['__array'][$70]:
					$69['__getitem__']($70)):
					$69['__getitem__']($constant_int_3)), (typeof ($71=t)['__array'] != 'undefined'?
				((typeof $71['__array'][$72=$constant_int_4]) != 'undefined'?$71['__array'][$72]:
					$71['__getitem__']($72)):
					$71['__getitem__']($constant_int_4)), (typeof ($73=t)['__array'] != 'undefined'?
				((typeof $73['__array'][$74=$constant_int_5]) != 'undefined'?$73['__array'][$74]:
					$73['__getitem__']($74)):
					$73['__getitem__']($constant_int_5)), (typeof ($75=t)['__array'] != 'undefined'?
				((typeof $75['__array'][$76=$constant_int_0]) != 'undefined'?$75['__array'][$76]:
					$75['__getitem__']($76)):
					$75['__getitem__']($constant_int_0))]));
		};
		$m['asctime']['__name__'] = 'asctime';

		$m['asctime']['__bind_type__'] = 0;
		$m['asctime']['__args__'] = [null,null,['t', null]];
		$m['ctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

			return $m['asctime']($m['localtime'](t));
		};
		$m['ctime']['__name__'] = 'ctime';

		$m['ctime']['__bind_type__'] = 0;
		$m['ctime']['__args__'] = [null,null,['t', null]];

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

		$m['_strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $pyjs_try_err;
			try {
				return $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			return null;
		};
		$m['_strptime']['__name__'] = '_strptime';

		$m['_strptime']['__bind_type__'] = 0;
		$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
		$m['strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var tt,$pyjs_try_err;
			try {
				tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
				tt['__is_instance__'] && typeof tt['__setattr__'] == 'function' ? tt['__setattr__']('tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) : $p['setattr'](tt, 'tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))); 
				return tt;
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			return null;
		};
		$m['strptime']['__name__'] = 'strptime';

		$m['strptime']['__bind_type__'] = 0;
		$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/
