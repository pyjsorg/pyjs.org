/* start module: datetime */
$pyjs['loaded_modules']['datetime'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['datetime']['__was_initialized__']) return $pyjs['loaded_modules']['datetime'];
	var $m = $pyjs['loaded_modules']['datetime'];
	$m['__repr__'] = function() { return '<module: datetime>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'datetime';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1000000 = new $p['int'](1000000);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_9999 = new $p['int'](9999);
		var $constant_int_59 = new $p['int'](59);
		var $constant_int_86400 = new $p['int'](86400);
		var $constant_int_999999999 = new $p['int'](999999999);
		var $constant_int_86400000 = new $p['int'](86400000);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_999999 = new $p['int'](999999);
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_0 = new $p['int'](0);
		$m['__c__days'] = $p['___import___']('time.__c__days', null, null, false);
		$m['__c__months'] = $p['___import___']('time.__c__months', null, null, false);
		$m['strftime'] = $p['___import___']('time.strftime', null, null, false);
		$m['localtime'] = $p['___import___']('time.localtime', null, null, false);
		$m['gmtime'] = $p['___import___']('time.gmtime', null, null, false);
		$m['_strptime'] = $p['___import___']('time._strptime', null, null, false);
		$m['MINYEAR'] = $constant_int_1;
		$m['MAXYEAR'] = $constant_int_1000000;
		$m['__Jan_01_0001'] = (new Date((new Date('Jan 1 1971'))['getTime']() - 62167132800000))['getTime']();
		$m['date'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'datetime';
			$cls_definition['__md5__'] = 'c167c0e3730134fe3d9bc89d91dcc4cc';
			$method = $pyjs__bind_method2('__init__', function(year, month, day, d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					year = arguments[1];
					month = arguments[2];
					day = arguments[3];
					d = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof d == 'undefined') d=arguments['callee']['__args__'][6][1];
				var $add2,$bool1,$add1;
				if ((($bool1=$p['op_is'](d, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					d = new Date(year, month - 1, day, 0, 0, 0, 0);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_d', d) : $p['setattr'](self, '_d', d); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('year', d['getFullYear']()) : $p['setattr'](self, 'year', d['getFullYear']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('month', (typeof ($add1=d['getMonth']())==typeof ($add2=1.0) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'month', (typeof ($add1=d['getMonth']())==typeof ($add2=1.0) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('day', d['getDate']()) : $p['setattr'](self, 'day', d['getDate']()); 
				return null;
			}
	, 1, [null,null,['self'],['year'],['month'],['day'],['d', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('today', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];

				return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':new Date()}]);
			}
	, 2, [null,null,['self']]);
			$cls_definition['today'] = $method;
			$method = $pyjs__bind_method2('fromtimestamp', function(timestamp) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var self = this['prototype'];
				var d,$mul1,$mul2;
				d = new Date();
				d['setTime']((typeof ($mul1=timestamp)==typeof ($mul2=1000.0) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, $constant_int_0, $constant_int_0, $constant_int_0]);
			}
	, 2, [null,null,['self'],['timestamp']]);
			$cls_definition['fromtimestamp'] = $method;
			$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var self = this['prototype'];
				var d,$add3,t,$add4,$sub2,$sub1,$mul4,$mul3;
				t = (typeof ($add3=$m['__Jan_01_0001'])==typeof ($add4=(typeof ($mul3=(typeof ($sub1=ordinal)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($mul4=86400000.0) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				d = new Date(t);
				return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, $constant_int_0, $constant_int_0, $constant_int_0]);
			}
	, 2, [null,null,['self'],['ordinal']]);
			$cls_definition['fromordinal'] = $method;
			$method = $pyjs__bind_method2('ctime', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $4,$2,$3,$1;
				return $p['sprintf']('%s %s %2d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']((typeof ($1=$m['__c__days'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=self['_d']['getDay']()]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](self['_d']['getDay']())), 0, $constant_int_3), $p['__getslice']((typeof ($3=$m['__c__months'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=self['_d']['getMonth']()]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](self['_d']['getMonth']())), 0, $constant_int_3), self['_d']['getDate'](), self['_d']['getHours'](), self['_d']['getMinutes'](), self['_d']['getSeconds'](), self['_d']['getFullYear']()]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['ctime'] = $method;
			$method = $pyjs__bind_method2('isocalendar', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var isoweeknr,isoyear,isoweekday,$assign1,_d;
				$assign1 = null;
				isoyear = $assign1;
				isoweeknr = $assign1;
				isoweekday = $assign1;
				_d = $p['getattr'](self, '_d');

            var gregdaynumber = function(year, month, day) {
                var y = year;
                var m = month;
                if (month < 3) {
                    y--;
                    m += 12;
                }
                return Math['floor'](365.25 * y) - Math['floor'](y / 100) + Math['floor'](y / 400) + Math['floor'](30.6 * (m + 1)) + day - 62;
            };

            var year = _d['getFullYear']();
            var month = _d['getMonth']();
            var day = _d['getDate']();
            var wday = _d['getDay']();

            isoweekday = ((wday + 6) % 7) + 1;
            isoyear = year;

            var d0 = gregdaynumber(year, 1, 0);
            var weekday0 = ((d0 + 4) % 7) + 1;

            var d = gregdaynumber(year, month + 1, day);
            isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);

            if ((month == 11) && ((day - isoweekday) > 27)) {
                isoweeknr = 1;
                isoyear = isoyear + 1;
            }

            if ((month == 0) && ((isoweekday - day) > 3)) {
                d0 = gregdaynumber(year - 1, 1, 0);
                weekday0 = ((d0 + 4) % 7) + 1;
                isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);
                isoyear--;
            }
        
				return $p['tuple']([isoyear, isoweeknr, isoweekday]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['isocalendar'] = $method;
			$method = $pyjs__bind_method2('isoformat', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['sprintf']('%04d-%02d-%02d', $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day')]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['isoformat'] = $method;
			$method = $pyjs__bind_method2('isoweekday', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add5,$mod1,$add7,$mod2,$add6,$add8;
				return (typeof ($add7=(typeof ($mod1=(typeof ($add5=self['_d']['getDay']())==typeof ($add6=$constant_int_6) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
	, 1, [null,null,['self']]);
			$cls_definition['isoweekday'] = $method;
			$method = $pyjs__bind_method2('$$replace', function(year, month, day) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					year = arguments[1];
					month = arguments[2];
					day = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
				if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
				if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];
				var $bool2,$bool3,$bool4;
				if ((($bool2=$p['op_is'](year, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					year = $p['getattr'](self, 'year');
				}
				if ((($bool3=$p['op_is'](month, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					month = $p['getattr'](self, 'month');
				}
				if ((($bool4=$p['op_is'](day, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					day = $p['getattr'](self, 'day');
				}
				return $m['date'](year, month, day);
			}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null]]);
			$cls_definition['$$replace'] = $method;
			$method = $pyjs__bind_method2('strftime', function(format) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					format = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['strftime'](format, self['timetuple']());
			}
	, 1, [null,null,['self'],['format']]);
			$cls_definition['strftime'] = $method;
			$method = $pyjs__bind_method2('timetuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,tm,$div1,$assign2;
				tm = $m['localtime']($p['int']((typeof ($div1=self['_d']['getTime']())==typeof ($div2=1000.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))));
				$assign2 = $constant_int_0;
				tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $assign2) : $p['setattr'](tm, 'tm_hour', $assign2); 
				tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $assign2) : $p['setattr'](tm, 'tm_min', $assign2); 
				tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $assign2) : $p['setattr'](tm, 'tm_sec', $assign2); 
				return tm;
			}
	, 1, [null,null,['self']]);
			$cls_definition['timetuple'] = $method;
			$method = $pyjs__bind_method2('toordinal', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add10,$sub3,$div3,$add9,$div4,$sub4;
				return (typeof ($add9=$constant_int_1)==typeof ($add10=$p['int']((typeof ($div3=(typeof ($sub3=self['_d']['getTime']())==typeof ($sub4=$m['__Jan_01_0001']) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($div4=86400000.0) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
	, 1, [null,null,['self']]);
			$cls_definition['toordinal'] = $method;
			$method = $pyjs__bind_method2('weekday', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod4,$mod3,$add11,$add12;
				return (typeof ($mod3=(typeof ($add11=self['_d']['getDay']())==typeof ($add12=$constant_int_6) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
			}
	, 1, [null,null,['self']]);
			$cls_definition['weekday'] = $method;
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
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['isoformat']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$method = $pyjs__bind_method2('__cmp__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b,$or1,$or2,$cmp2,$bool6,$bool7,$bool5,$cmp1,$bool8;
				if ((($bool6=((($bool5=$or1=$p['isinstance'](other, $m['date'])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime)))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					a = self['_d']['getTime']();
					b = other['_d']['getTime']();
					if ((($bool7=((($cmp1=a)===($cmp2=b)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						return (typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1));
					}
					else if ((($bool8=$p['op_eq'](a, b)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						return $constant_int_0;
					}
				}
				else {
					throw ($p['TypeError']('expected date or datetime object'));
				}
				return $constant_int_1;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__cmp__'] = $method;
			$method = $pyjs__bind_method2('__add__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$bool9,$add13;
				if ((($bool9=$p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), (typeof ($add13=$p['getattr'](self, 'day'))==typeof ($add14=$p['getattr'](other, 'days')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)));
				}
				else {
					throw ($p['TypeError']('expected timedelta object'));
				}
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__add__'] = $method;
			$method = $pyjs__bind_method2('__sub__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c167c0e3730134fe3d9bc89d91dcc4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod8,$or4,$sub8,$or3,$bool10,$bool11,$sub7,$mod7,$div7,$mod5,$div8,$mod6,$bool12,diff,$div6,$sub6,$sub5,$div5;
				if ((($bool11=((($bool10=$or3=$p['isinstance'](other, $m['date'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime)))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					diff = (typeof ($sub5=self['_d']['getTime']())==typeof ($sub6=other['_d']['getTime']()) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6));
					return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod7=diff)==typeof ($mod8=$constant_int_86400000) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8))}, $p['int']((typeof ($div5=diff)==typeof ($div6=86400000.0) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))), (typeof ($mod5=$p['int']((typeof ($div7=diff)==typeof ($div8=1000.0) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8))))==typeof ($mod6=$constant_int_86400) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6))]);
				}
				else if ((($bool12=$p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), (typeof ($sub7=$p['getattr'](self, 'day'))==typeof ($sub8=$p['getattr'](other, 'days')) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)));
				}
				else {
					throw ($p['TypeError']('expected date or datetime object'));
				}
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__sub__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('date', $p['tuple']($bases), $data);
		})();
		$m['time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'datetime';
			$cls_definition['__md5__'] = 'adc7cbdf68f93576ce6fba4415b9dd76';
			$method = $pyjs__bind_method2('__init__', function(hour, minute, second, microsecond, tzinfo, d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					hour = arguments[1];
					minute = arguments[2];
					second = arguments[3];
					microsecond = arguments[4];
					tzinfo = arguments[5];
					d = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
				if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
				if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
				if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];
				if (typeof d == 'undefined') d=arguments['callee']['__args__'][8][1];
				var $bool13,$bool14,$mul6,$mul5;
				if ((($bool13=!$p['op_eq'](tzinfo, null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					throw ($p['NotImplementedError']('tzinfo'));
				}
				if ((($bool14=$p['op_is'](d, null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					d = new Date(1970, 1, 1, hour, minute, second, 0.5 + microsecond / 1000.0);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_d', d) : $p['setattr'](self, '_d', d); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hour', d['getHours']()) : $p['setattr'](self, 'hour', d['getHours']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('minute', d['getMinutes']()) : $p['setattr'](self, 'minute', d['getMinutes']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('second', d['getSeconds']()) : $p['setattr'](self, 'second', d['getSeconds']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('microsecond', (typeof ($mul5=d['getMilliseconds']())==typeof ($mul6=1000.0) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) : $p['setattr'](self, 'microsecond', (typeof ($mul5=d['getMilliseconds']())==typeof ($mul6=1000.0) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tzinfo', null) : $p['setattr'](self, 'tzinfo', null); 
				return null;
			}
	, 1, [null,null,['self'],['hour'],['minute', $constant_int_0],['second', $constant_int_0],['microsecond', $constant_int_0],['tzinfo', null],['d', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('dst', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('dst'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['dst'] = $method;
			$method = $pyjs__bind_method2('isoformat', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add16,$add15,t,$bool15;
				t = $p['sprintf']('%02d:%02d:%02d', $p['tuple']([$p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]));
				if ((($bool15=$p['getattr'](self, 'microsecond')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					t = (typeof ($add15=t)==typeof ($add16=$p['sprintf']('.%06d', $p['getattr'](self, 'microsecond'))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				return t;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isoformat'] = $method;
			$method = $pyjs__bind_method2('$$replace', function(hour, minute, second, microsecond, tzinfo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					hour = arguments[1];
					minute = arguments[2];
					second = arguments[3];
					microsecond = arguments[4];
					tzinfo = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][3][1];
				if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
				if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
				if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
				if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];
				var $bool18,$bool19,$bool16,$bool17,$bool20;
				if ((($bool16=!$p['op_eq'](tzinfo, null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					throw ($p['NotImplementedError']('tzinfo'));
				}
				if ((($bool17=$p['op_is'](hour, null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					hour = $p['getattr'](self, 'hour');
				}
				if ((($bool18=$p['op_is'](minute, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					minute = $p['getattr'](self, 'minute');
				}
				if ((($bool19=$p['op_is'](second, null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					second = $p['getattr'](self, 'second');
				}
				if ((($bool20=$p['op_is'](microsecond, null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					microsecond = $p['getattr'](self, 'microsecond');
				}
				return $m['time'](hour, minute, second, microsecond);
			}
	, 1, [null,null,['self'],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
			$cls_definition['$$replace'] = $method;
			$method = $pyjs__bind_method2('strftime', function(format) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					format = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div9,$div10;
				return $m['strftime'](format, $m['localtime']($p['int']((typeof ($div9=self['_d']['getTime']())==typeof ($div10=1000.0) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)))));
			}
	, 1, [null,null,['self'],['format']]);
			$cls_definition['strftime'] = $method;
			$method = $pyjs__bind_method2('tzname', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['tzname'] = $method;
			$method = $pyjs__bind_method2('utcoffset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['utcoffset'] = $method;
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
					if (self.prototype['__md5__'] !== 'adc7cbdf68f93576ce6fba4415b9dd76') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['isoformat']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('time', $p['tuple']($bases), $data);
		})();
		$m['datetime'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'datetime';
			$cls_definition['__md5__'] = '73558a8e8eac14a3a19a8e222339a90d';
			$method = $pyjs__bind_method2('__init__', function(year, month, day, hour, minute, second, microsecond, tzinfo, d) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 10, arguments['length']+1);
				} else {
					var self = arguments[0];
					year = arguments[1];
					month = arguments[2];
					day = arguments[3];
					hour = arguments[4];
					minute = arguments[5];
					second = arguments[6];
					microsecond = arguments[7];
					tzinfo = arguments[8];
					d = arguments[9];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 10, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
				if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
				if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
				if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
				if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];
				if (typeof d == 'undefined') d=arguments['callee']['__args__'][11][1];
				var $bool21;
				if ((($bool21=$p['op_is'](d, null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					d = new Date(year, month - 1, day, hour, minute, second, 0.5 + microsecond / 1000.0);
				}
				$pyjs_kwargs_call($m['date'], '__init__', null, null, [{'d':d}, self, $constant_int_0, $constant_int_0, $constant_int_0]);
				$pyjs_kwargs_call($m['time'], '__init__', null, null, [{'d':d}, self, $constant_int_0]);
				return null;
			}
	, 1, [null,null,['self'],['year'],['month'],['day'],['hour', $constant_int_0],['minute', $constant_int_0],['second', $constant_int_0],['microsecond', $constant_int_0],['tzinfo', null],['d', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('combine', function(date, time) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 2, arguments['length']);
    var self = this['prototype'];

				return $m['datetime']($p['getattr'](date, 'year'), $p['getattr'](date, 'month'), $p['getattr'](date, 'day'), $p['getattr'](time, 'hour'), $p['getattr'](time, 'minute'), $p['getattr'](time, 'second'), $p['getattr'](time, 'microsecond'));
			}
	, 2, [null,null,['self'],['date'],['time']]);
			$cls_definition['combine'] = $method;
			$method = $pyjs__bind_method2('fromtimestamp', function(timestamp, tz) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
    var self = this['prototype'];
				if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][4][1];
				var d,$mul8,$bool22,$mul7;
				if ((($bool22=!$p['op_eq'](tz, null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					throw ($p['NotImplementedError']('tz'));
				}
				d = new Date();
				d['setTime']((typeof ($mul7=timestamp)==typeof ($mul8=1000.0) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)));
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, $constant_int_0, $constant_int_0, $constant_int_0]);
			}
	, 2, [null,null,['self'],['timestamp'],['tz', null]]);
			$cls_definition['fromtimestamp'] = $method;
			$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var self = this['prototype'];
				var d,$mul10,$sub10,$sub9,$mul9;
				d = new Date();
				d['setTime']((typeof ($mul9=(typeof ($sub9=ordinal)==typeof ($sub10=719163.0) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))==typeof ($mul10=86400000.0) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, $constant_int_0, $constant_int_0, $constant_int_0]);
			}
	, 2, [null,null,['self'],['ordinal']]);
			$cls_definition['fromordinal'] = $method;
			$method = $pyjs__bind_method2('now', function(tz) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
    var self = this['prototype'];
				if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][3][1];
				var $bool23;
				if ((($bool23=!$p['op_eq'](tz, null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					throw ($p['NotImplementedError']('tz'));
				}
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':new Date()}, $constant_int_0, $constant_int_0, $constant_int_0]);
			}
	, 2, [null,null,['self'],['tz', null]]);
			$cls_definition['now'] = $method;
			$method = $pyjs__bind_method2('strptime', function(datestring, format) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 2, arguments['length']);
    var self = this['prototype'];

				return self['fromtimestamp']($m['_strptime'](datestring, format));
			}
	, 2, [null,null,['self'],['datestring'],['format']]);
			$cls_definition['strptime'] = $method;
			$method = $pyjs__bind_method2('utcfromtimestamp', function(timestamp) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 1, arguments['length']);
    var self = this['prototype'];
				var tm;
				tm = $m['gmtime'](timestamp);
				return $m['datetime']($p['getattr'](tm, 'tm_year'), $p['getattr'](tm, 'tm_mon'), $p['getattr'](tm, 'tm_mday'), $p['getattr'](tm, 'tm_hour'), $p['getattr'](tm, 'tm_min'), $p['getattr'](tm, 'tm_sec'));
			}
	, 2, [null,null,['self'],['timestamp']]);
			$cls_definition['utcfromtimestamp'] = $method;
			$method = $pyjs__bind_method2('utcnow', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var d,$div12,$div11;
				d = new Date();
				return $m['datetime']['utcfromtimestamp']($p['int']((typeof ($div11=d['getTime']())==typeof ($div12=1000.0) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))));
			}
	, 2, [null,null,['self']]);
			$cls_definition['utcnow'] = $method;
			$method = $pyjs__bind_method2('timetuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div14,$div13;
				return $m['localtime']($p['int']((typeof ($div13=self['_d']['getTime']())==typeof ($div14=1000.0) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))));
			}
	, 1, [null,null,['self']]);
			$cls_definition['timetuple'] = $method;
			$method = $pyjs__bind_method2('astimezone', function(tz) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tz = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('astimezone'));
				return null;
			}
	, 1, [null,null,['self'],['tz']]);
			$cls_definition['astimezone'] = $method;
			$method = $pyjs__bind_method2('date', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['date'] = $method;
			$method = $pyjs__bind_method2('time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['time']($p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second'), $p['getattr'](self, 'microsecond'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['time'] = $method;
			$method = $pyjs__bind_method2('$$replace', function(year, month, day, hour, minute, second, microsecond, tzinfo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 9, arguments['length']+1);
				} else {
					var self = arguments[0];
					year = arguments[1];
					month = arguments[2];
					day = arguments[3];
					hour = arguments[4];
					minute = arguments[5];
					second = arguments[6];
					microsecond = arguments[7];
					tzinfo = arguments[8];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 9, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
				if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
				if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];
				if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
				if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
				if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
				if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
				if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];
				var $bool28,$bool31,$bool30,$bool27,$bool25,$bool24,$bool26,$bool29;
				if ((($bool24=!$p['op_eq'](tzinfo, null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					throw ($p['NotImplementedError']('tzinfo'));
				}
				if ((($bool25=$p['op_is'](year, null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					year = $p['getattr'](self, 'year');
				}
				if ((($bool26=$p['op_is'](month, null)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					month = $p['getattr'](self, 'month');
				}
				if ((($bool27=$p['op_is'](day, null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					day = $p['getattr'](self, 'day');
				}
				if ((($bool28=$p['op_is'](hour, null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					hour = $p['getattr'](self, 'hour');
				}
				if ((($bool29=$p['op_is'](minute, null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					minute = $p['getattr'](self, 'minute');
				}
				if ((($bool30=$p['op_is'](second, null)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					second = $p['getattr'](self, 'second');
				}
				if ((($bool31=$p['op_is'](microsecond, null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					microsecond = $p['getattr'](self, 'microsecond');
				}
				return $m['datetime'](year, month, day, hour, minute, second, microsecond);
			}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
			$cls_definition['$$replace'] = $method;
			$method = $pyjs__bind_method2('timetz', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('timetz'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['timetz'] = $method;
			$method = $pyjs__bind_method2('utctimetuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div15,$div16;
				return $m['gmtime']((typeof ($div15=self['_d']['getTime']())==typeof ($div16=1000.0) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)));
			}
	, 1, [null,null,['self']]);
			$cls_definition['utctimetuple'] = $method;
			$method = $pyjs__bind_method2('isoformat', function(sep) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sep = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
				var $bool32,$add17,t,$add18;
				t = $p['sprintf']('%04d-%02d-%02d%s%02d:%02d:%02d', $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'), sep, $p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]));
				if ((($bool32=$p['getattr'](self, 'microsecond')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					t = (typeof ($add17=t)==typeof ($add18=$p['sprintf']('.%06d', $p['getattr'](self, 'microsecond'))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				return t;
			}
	, 1, [null,null,['self'],['sep', 'T']]);
			$cls_definition['isoformat'] = $method;
			$method = $pyjs__bind_method2('__add__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div17,month,second,year,$add26,$mod9,$add28,$div18,$div19,$add21,$add20,$add22,$add25,$add24,$add27,day,$mod11,$mod10,$mod12,microsecond,$add19,minute,$div20,d,hour,$bool33,$add23;
				if ((($bool33=$p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					year = $p['getattr'](self, 'year');
					month = $p['getattr'](self, 'month');
					day = (typeof ($add19=$p['getattr'](self, 'day'))==typeof ($add20=$p['getattr'](other, 'days')) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
					hour = (typeof ($add21=$p['getattr'](self, 'hour'))==typeof ($add22=(typeof ($div17=$p['getattr'](other, 'seconds'))==typeof ($div18=3600.0) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18))) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					minute = (typeof ($add23=$p['getattr'](self, 'minute'))==typeof ($add24=(typeof ($mod9=(typeof ($div19=$p['getattr'](other, 'seconds'))==typeof ($div20=60.0) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20)))==typeof ($mod10=$constant_int_60) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					second = (typeof ($add25=$p['getattr'](self, 'second'))==typeof ($add26=(typeof ($mod11=$p['getattr'](other, 'seconds'))==typeof ($mod12=$constant_int_60) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
					microsecond = (typeof ($add27=$p['getattr'](self, 'microsecond'))==typeof ($add28=$p['getattr'](other, 'microseconds')) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
					d = new Date(year, month, day, hour, minute, second, microsecond);
					return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
				}
				else {
					throw ($p['TypeError']('expected timedelta object'));
				}
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__add__'] = $method;
			$method = $pyjs__bind_method2('__sub__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod20,$mod15,$sub20,$sub21,$sub19,month,$div27,second,$mod16,$sub22,year,diff,$sub18,$mod19,$or5,$mod14,$mod17,$or6,$mod13,$sub13,$sub12,$sub11,$sub17,$sub16,$sub15,$sub14,microsecond,$mod18,day,minute,d,$div21,$div23,$div22,$div25,$div24,hour,$div26,$div28,$bool36,$bool34,$bool35;
				if ((($bool35=((($bool34=$or5=$p['isinstance'](other, $m['date'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34['__nonzero__']=='function'?
							$bool34['__nonzero__']() :
							(typeof $bool34['__len__']=='function'?
								($bool34['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:$p['isinstance'](other, $m['datetime']))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					diff = (typeof ($sub11=self['_d']['getTime']())==typeof ($sub12=other['_d']['getTime']()) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
					return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod15=diff)==typeof ($mod16=$constant_int_86400000) && typeof $mod15=='number'?
						(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
						$p['op_mod']($mod15,$mod16))}, $p['int']((typeof ($div21=diff)==typeof ($div22=86400000.0) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22))), (typeof ($mod13=$p['int']((typeof ($div23=diff)==typeof ($div24=1000.0) && typeof $div23=='number' && $div24 !== 0?
						$div23/$div24:
						$p['op_div']($div23,$div24))))==typeof ($mod14=$constant_int_86400) && typeof $mod13=='number'?
						(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
						$p['op_mod']($mod13,$mod14))]);
				}
				else if ((($bool36=$p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					year = $p['getattr'](self, 'year');
					month = $p['getattr'](self, 'month');
					day = (typeof ($sub13=$p['getattr'](self, 'day'))==typeof ($sub14=$p['getattr'](other, 'days')) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14));
					hour = (typeof ($sub15=$p['getattr'](self, 'hour'))==typeof ($sub16=(typeof ($div25=$p['getattr'](other, 'seconds'))==typeof ($div26=3600.0) && typeof $div25=='number' && $div26 !== 0?
						$div25/$div26:
						$p['op_div']($div25,$div26))) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16));
					minute = (typeof ($sub17=$p['getattr'](self, 'minute'))==typeof ($sub18=(typeof ($mod17=(typeof ($div27=$p['getattr'](other, 'seconds'))==typeof ($div28=60.0) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28)))==typeof ($mod18=$constant_int_60) && typeof $mod17=='number'?
						(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
						$p['op_mod']($mod17,$mod18))) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18));
					second = (typeof ($sub19=$p['getattr'](self, 'second'))==typeof ($sub20=(typeof ($mod19=$p['getattr'](other, 'seconds'))==typeof ($mod20=$constant_int_60) && typeof $mod19=='number'?
						(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
						$p['op_mod']($mod19,$mod20))) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
					microsecond = (typeof ($sub21=$p['getattr'](self, 'microsecond'))==typeof ($sub22=$p['getattr'](other, 'microseconds')) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22));
					d = new Date(year, month, day, hour, minute, second, microsecond);
					return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
				}
				else {
					throw ($p['TypeError']('expected date or datetime object'));
				}
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__sub__'] = $method;
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
					if (self.prototype['__md5__'] !== '73558a8e8eac14a3a19a8e222339a90d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['isoformat'](' ');
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array($m['date'],$m['time']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('datetime', $p['tuple']($bases), $data);
		})();
		$m['timedelta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'datetime';
			$cls_definition['__md5__'] = '6e0b256bed0d7f162dd58c21b0a3f98e';
			$method = $pyjs__bind_method2('__init__', function(days, seconds, microseconds, milliseconds, minutes, hours, weeks) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					days = arguments[1];
					seconds = arguments[2];
					microseconds = arguments[3];
					milliseconds = arguments[4];
					minutes = arguments[5];
					hours = arguments[6];
					weeks = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6e0b256bed0d7f162dd58c21b0a3f98e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof days == 'undefined') days=arguments['callee']['__args__'][3][1];
				if (typeof seconds == 'undefined') seconds=arguments['callee']['__args__'][4][1];
				if (typeof microseconds == 'undefined') microseconds=arguments['callee']['__args__'][5][1];
				if (typeof milliseconds == 'undefined') milliseconds=arguments['callee']['__args__'][6][1];
				if (typeof minutes == 'undefined') minutes=arguments['callee']['__args__'][7][1];
				if (typeof hours == 'undefined') hours=arguments['callee']['__args__'][8][1];
				if (typeof weeks == 'undefined') weeks=arguments['callee']['__args__'][9][1];
				var $add35,$add29,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$add32,$add33,$add30,$add31,$add36,$add34,$mul18;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('days', (typeof ($add29=(typeof ($mul11=weeks)==typeof ($mul12=7.0) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($add30=days) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30))) : $p['setattr'](self, 'days', (typeof ($add29=(typeof ($mul11=weeks)==typeof ($mul12=7.0) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($add30=days) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seconds', (typeof ($add33=(typeof ($add31=(typeof ($mul13=hours)==typeof ($mul14=3600.0) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($add32=(typeof ($mul15=minutes)==typeof ($mul16=60.0) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($add34=seconds) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))) : $p['setattr'](self, 'seconds', (typeof ($add33=(typeof ($add31=(typeof ($mul13=hours)==typeof ($mul14=3600.0) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($add32=(typeof ($mul15=minutes)==typeof ($mul16=60.0) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($add34=seconds) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('microseconds', (typeof ($add35=(typeof ($mul17=milliseconds)==typeof ($mul18=1000.0) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($add36=microseconds) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))) : $p['setattr'](self, 'microseconds', (typeof ($add35=(typeof ($mul17=milliseconds)==typeof ($mul18=1000.0) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($add36=microseconds) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))); 
				return null;
			}
	, 1, [null,null,['self'],['days', $constant_int_0],['seconds', $constant_int_0],['microseconds', $constant_int_0],['milliseconds', $constant_int_0],['minutes', $constant_int_0],['hours', $constant_int_0],['weeks', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('timedelta', $p['tuple']($bases), $data);
		})();
		$m['tzinfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'datetime';
			$cls_definition['__md5__'] = '91197808e3f7e7f5b10fcbc4369dd962';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('tzinfo', $p['tuple']($bases), $data);
		})();
		$m['date']['__is_instance__'] && typeof $m['date']['__setattr__'] == 'function' ? $m['date']['__setattr__']('min', $m['date']($constant_int_1, $constant_int_1, $constant_int_1)) : $p['setattr']($m['date'], 'min', $m['date']($constant_int_1, $constant_int_1, $constant_int_1)); 
		$m['date']['__is_instance__'] && typeof $m['date']['__setattr__'] == 'function' ? $m['date']['__setattr__']('max', $m['date']($constant_int_9999, $constant_int_12, $constant_int_31)) : $p['setattr']($m['date'], 'max', $m['date']($constant_int_9999, $constant_int_12, $constant_int_31)); 
		$m['date']['__is_instance__'] && typeof $m['date']['__setattr__'] == 'function' ? $m['date']['__setattr__']('resolution', $m['timedelta']($constant_int_1)) : $p['setattr']($m['date'], 'resolution', $m['timedelta']($constant_int_1)); 
		$m['time']['__is_instance__'] && typeof $m['time']['__setattr__'] == 'function' ? $m['time']['__setattr__']('min', $m['time']($constant_int_0, $constant_int_0)) : $p['setattr']($m['time'], 'min', $m['time']($constant_int_0, $constant_int_0)); 
		$m['time']['__is_instance__'] && typeof $m['time']['__setattr__'] == 'function' ? $m['time']['__setattr__']('max', $m['time']($constant_int_23, $constant_int_59, $constant_int_59, $constant_int_999999)) : $p['setattr']($m['time'], 'max', $m['time']($constant_int_23, $constant_int_59, $constant_int_59, $constant_int_999999)); 
		$m['time']['__is_instance__'] && typeof $m['time']['__setattr__'] == 'function' ? $m['time']['__setattr__']('resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)) : $p['setattr']($m['time'], 'resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)); 
		$m['datetime']['__is_instance__'] && typeof $m['datetime']['__setattr__'] == 'function' ? $m['datetime']['__setattr__']('min', $m['datetime']($constant_int_1, $constant_int_1, $constant_int_1, $constant_int_0, $constant_int_0)) : $p['setattr']($m['datetime'], 'min', $m['datetime']($constant_int_1, $constant_int_1, $constant_int_1, $constant_int_0, $constant_int_0)); 
		$m['datetime']['__is_instance__'] && typeof $m['datetime']['__setattr__'] == 'function' ? $m['datetime']['__setattr__']('max', $m['datetime']($constant_int_9999, $constant_int_12, $constant_int_31, $constant_int_23, $constant_int_59, $constant_int_59, $constant_int_999999)) : $p['setattr']($m['datetime'], 'max', $m['datetime']($constant_int_9999, $constant_int_12, $constant_int_31, $constant_int_23, $constant_int_59, $constant_int_59, $constant_int_999999)); 
		$m['datetime']['__is_instance__'] && typeof $m['datetime']['__setattr__'] == 'function' ? $m['datetime']['__setattr__']('resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)) : $p['setattr']($m['datetime'], 'resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)); 
		$m['timedelta']['__is_instance__'] && typeof $m['timedelta']['__setattr__'] == 'function' ? $m['timedelta']['__setattr__']('min', $m['timedelta']((typeof ($usub2=$constant_int_999999999)=='number'?
			-$usub2:
			$p['op_usub']($usub2)))) : $p['setattr']($m['timedelta'], 'min', $m['timedelta']((typeof ($usub2=$constant_int_999999999)=='number'?
			-$usub2:
			$p['op_usub']($usub2)))); 
		$m['timedelta']['__is_instance__'] && typeof $m['timedelta']['__setattr__'] == 'function' ? $m['timedelta']['__setattr__']('max', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':$constant_int_23, 'minutes':$constant_int_59, 'seconds':$constant_int_59, 'microseconds':$constant_int_999999}, $constant_int_999999999])) : $p['setattr']($m['timedelta'], 'max', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':$constant_int_23, 'minutes':$constant_int_59, 'seconds':$constant_int_59, 'microseconds':$constant_int_999999}, $constant_int_999999999])); 
		$m['timedelta']['__is_instance__'] && typeof $m['timedelta']['__setattr__'] == 'function' ? $m['timedelta']['__setattr__']('resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)) : $p['setattr']($m['timedelta'], 'resolution', $m['timedelta']($constant_int_0, $constant_int_0, $constant_int_1)); 
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end datetime */


/* end module: datetime */


/*
PYJS_DEPS: ['time.__c__days', 'time', 'time.__c__months', 'time.strftime', 'time.localtime', 'time.gmtime', 'time._strptime']
*/
