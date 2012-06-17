/* start module: DatetimeModuleTest */
$pyjs.loaded_modules['DatetimeModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DatetimeModuleTest'].__was_initialized__) return $pyjs.loaded_modules['DatetimeModuleTest'];
	var $m = $pyjs.loaded_modules["DatetimeModuleTest"];
	$m.__repr__ = function() { return "<module: DatetimeModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DatetimeModuleTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1270804609 = new $p['int'](1270804609);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_95000 = new $p['int'](95000);
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_733871 = new $p['int'](733871);
		var $constant_int_57 = new $p['int'](57);
		var $constant_int_59 = new $p['int'](59);
		var $constant_int_65 = new $p['int'](65);
		var $constant_int_2007 = new $p['int'](2007);
		var $constant_int_2008 = new $p['int'](2008);
		var $constant_int_2010 = new $p['int'](2010);
		var $constant_int_99 = new $p['int'](99);
		$m['sys'] = $p['___import___']('sys', null);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['datetime'] = $p['___import___']('datetime', null);
		$m['DatetimeModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DatetimeModuleTest';
			$cls_definition.__md5__ = 'b673d6f4e7e9f2c0076dc261b429fff8';
			$method = $pyjs__bind_method2('testDate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertEqual']($p['getattr'](d, 'year'), $constant_int_2010);
				self['assertEqual']($p['getattr'](d, 'month'), $constant_int_4);
				self['assertEqual']($p['getattr'](d, 'day'), $constant_int_9);
				self['assertEqual'](d['weekday'](), $constant_int_4);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDate'] = $method;
			$method = $pyjs__bind_method2('testTime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				t = $m['datetime']['time']($constant_int_9, $constant_int_45, $constant_int_11, $constant_int_95000);
				self['assertEqual']($p['getattr'](t, 'hour'), $constant_int_9);
				self['assertEqual']($p['getattr'](t, 'minute'), $constant_int_45);
				self['assertEqual']($p['getattr'](t, 'second'), $constant_int_11);
				self['assertEqual']($p['getattr'](t, 'microsecond'), $constant_int_95000);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTime'] = $method;
			$method = $pyjs__bind_method2('testTimestamp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d;
				d = $m['datetime']['date']['fromtimestamp']($constant_int_1270804609);
				self['assertEqual']($p['str'](d), '2010-04-09');
				dt = $p['str']($m['datetime']['datetime']['fromtimestamp'](1270804609.95));
				self['assertEqual']($p['tuple']([$p['__getslice'](dt, 0, $constant_int_11), $p['__getslice'](dt, $constant_int_16, null)]), $p['tuple'](['2010-04-09 ', ':49.950000']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTimestamp'] = $method;
			$method = $pyjs__bind_method2('testCtime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertEqual'](d['ctime'](), 'Fri Apr  9 00:00:00 2010');
				dt = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32);
				self['assertEqual'](dt['ctime'](), 'Fri Apr  9 10:57:32 2010');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCtime'] = $method;
			$method = $pyjs__bind_method2('testIsoCalendar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,d1;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertEqual'](d['isocalendar'](), $p['tuple']([$constant_int_2010, $constant_int_14, $constant_int_5]));
				d1 = $m['datetime']['date']($constant_int_2007, $constant_int_12, $constant_int_31);
				self['assertEqual'](d1['isocalendar'](), $p['tuple']([$constant_int_2008, $constant_int_1, $constant_int_1]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsoCalendar'] = $method;
			$method = $pyjs__bind_method2('testIsoFormat', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt2,dt,d;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertEqual'](d['isoformat'](), '2010-04-09');
				dt = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32);
				self['assertEqual'](dt['isoformat'](), '2010-04-09T10:57:32');
				dt2 = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32, $constant_int_95000);
				self['assertEqual'](dt2['isoformat'](), '2010-04-09T10:57:32.095000');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsoFormat'] = $method;
			$method = $pyjs__bind_method2('testOrdinal', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,d1;
				d = $m['datetime']['date']['fromordinal']($constant_int_1);
				self['assertEqual']($p['str'](d), '0001-01-01');
				d1 = $m['datetime']['date']['fromordinal']($constant_int_733871);
				self['assertEqual']($p['str'](d1), '2010-04-09');
				self['assertEqual'](d1['toordinal'](), $constant_int_733871);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOrdinal'] = $method;
			$method = $pyjs__bind_method2('testReplace', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d,t;
				d = $pyjs_kwargs_call($m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9), '$$replace', null, null, [{month:$constant_int_6, day:$constant_int_13}]);
				self['assertEqual']($p['str'](d), '2010-06-13');
				t = $pyjs_kwargs_call($m['datetime']['time']($constant_int_23, $constant_int_59, $constant_int_59), '$$replace', null, null, [{minute:$constant_int_45, microsecond:$constant_int_95000}]);
				self['assertEqual']($p['str'](t), '23:45:59.095000');
				dt = $pyjs_kwargs_call($m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32), '$$replace', null, null, [{month:$constant_int_6, day:$constant_int_13, hour:$constant_int_12, minute:$constant_int_0, second:$constant_int_0}]);
				self['assertEqual']($p['str'](dt), '2010-06-13 12:00:00');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReplace'] = $method;
			$method = $pyjs__bind_method2('testTimetuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tm;
				tm = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9)['timetuple']();
				self['assertEqual']($p['getattr'](tm, 'tm_year'), $constant_int_2010);
				self['assertEqual']($p['getattr'](tm, 'tm_mon'), $constant_int_4);
				self['assertEqual']($p['getattr'](tm, 'tm_mday'), $constant_int_9);
				self['assertEqual']($p['getattr'](tm, 'tm_hour'), $constant_int_0);
				self['assertEqual']($p['getattr'](tm, 'tm_min'), $constant_int_0);
				self['assertEqual']($p['getattr'](tm, 'tm_sec'), $constant_int_0);
				self['assertEqual']($p['getattr'](tm, 'tm_wday'), $constant_int_4);
				self['assertEqual']($p['getattr'](tm, 'tm_yday'), $constant_int_99);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTimetuple'] = $method;
			$method = $pyjs__bind_method2('testStrftime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertEqual'](d['strftime']('%d/%m/%y'), '09/04/10');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrftime'] = $method;
			$method = $pyjs__bind_method2('testStrptime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				d = $m['datetime']['datetime']['strptime']('010100 1234', '%d%m%y %H%M');
				self['assertEqual']($p['str'](d), '2000-01-01 12:34:00');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrptime'] = $method;
			$method = $pyjs__bind_method2('testComparision', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,d2,d3,d1;
				d1 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_8);
				d2 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_8);
				d3 = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				self['assertTrue']($p['op_eq'](d1, d2), 'd1 and d2 differ');
				self['assertTrue'](((($cmp1=d1)===($cmp2=d3)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1), 'd1 is not later than d3');
				self['assertTrue'](((($cmp3=d3)===($cmp4=d1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1), 'd3 is not earlier than d1');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComparision'] = $method;
			$method = $pyjs__bind_method2('testOperations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1,diff,$sub3,$sub2,$sub1,$sub4,d2,d1;
				d1 = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				d2 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_13);
				diff = (typeof ($sub1=d2)==typeof ($sub2=d1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				self['assertEqual']($p['getattr'](diff, 'days'), $constant_int_65);
				self['assertEqual']($p['str']((typeof ($add1=d1)==typeof ($add2=diff) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), '2010-06-13');
				self['assertEqual']($p['str']((typeof ($sub3=d1)==typeof ($sub4=diff) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))), '2010-02-03');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOperations'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DatetimeModuleTest', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
			$m['t'] = $m['RunTests']();
			$m['t']['add']($m['DatetimeModuleTest']);
			$m['t']['start_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DatetimeModuleTest */


/* end module: DatetimeModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'datetime', 'RunTests.RunTests', 'RunTests']
*/
