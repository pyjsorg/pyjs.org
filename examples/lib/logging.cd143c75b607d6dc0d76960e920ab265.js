/* start module: logging */
$pyjs.loaded_modules['logging'] = function (__mod_name__) {
	if($pyjs.loaded_modules['logging'].__was_initialized__) return $pyjs.loaded_modules['logging'];
	var $m = $pyjs.loaded_modules["logging"];
	$m.__repr__ = function() { return "<module: logging>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'logging';
	$m.__name__ = __mod_name__;
	try {
		var $lambda1,$bool1,$pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_30 = new $p['int'](30);
		$m['sys'] = $p['___import___']('sys', 'logging');
		$m['os'] = $p['___import___']('os', 'logging');
		$m['time'] = $p['___import___']('time', 'logging');
		try {
			$m['codecs'] = $p['___import___']('codecs', 'logging');
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
				$m['codecs'] = null;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		$m['__author__'] = 'Vinay Sajip <vinay_sajip@red-dove.com>';
		$m['__status__'] = 'production';
		$m['__version__'] = '0.5.0.2';
		$m['__date__'] = '16 February 2007';
		$m['_srcfile'] = '/assets/pyjs.org/states/stable/auto@artifacts.pyjs.org/build/pyjs/pyjs/src/pyjs/lib/logging/__init__.py';
		$m['currentframe'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $pyjs_try_err;
			try {
				throw ($p['Exception']);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					return $p['getattr']($p['getattr']($p['getattr']($m['sys'], 'exc_traceback'), 'tb_frame'), 'f_back');
				}
			}
			return null;
		};
		$m['currentframe'].__name__ = 'currentframe';

		$m['currentframe'].__bind_type__ = 0;
		$m['currentframe'].__args__ = [null,null];
		if ((($bool1=$p['hasattr']($m['sys'], '_getframe')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			var 			$lambda1 = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

				return $m['sys']['_getframe']($constant_int_3);
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null];
			$m['currentframe'] = $lambda1;
		}
		$m['_startTime'] = $m['time']['time']();
		$m['raiseExceptions'] = $constant_int_1;
		$m['logThreads'] = $constant_int_1;
		$m['logProcesses'] = $constant_int_1;
		$m['CRITICAL'] = $constant_int_50;
		$m['FATAL'] = $m['CRITICAL'];
		$m['ERROR'] = $constant_int_40;
		$m['WARNING'] = $constant_int_30;
		$m['WARN'] = $m['WARNING'];
		$m['INFO'] = $constant_int_20;
		$m['DEBUG'] = $constant_int_10;
		$m['NOTSET'] = $constant_int_0;
		$m['_levelNames'] = $p['dict']([[$m['CRITICAL'], 'CRITICAL'], [$m['ERROR'], 'ERROR'], [$m['WARNING'], 'WARNING'], [$m['INFO'], 'INFO'], [$m['DEBUG'], 'DEBUG'], [$m['NOTSET'], 'NOTSET'], ['CRITICAL', $m['CRITICAL']], ['ERROR', $m['ERROR']], ['WARN', $m['WARNING']], ['WARNING', $m['WARNING']], ['INFO', $m['INFO']], ['DEBUG', $m['DEBUG']], ['NOTSET', $m['NOTSET']]]);
		$m['getLevelName'] = function(level) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['_levelNames']['get'](level, $p['sprintf']('Level %s', level));
		};
		$m['getLevelName'].__name__ = 'getLevelName';

		$m['getLevelName'].__bind_type__ = 0;
		$m['getLevelName'].__args__ = [null,null,['level']];
		$m['addLevelName'] = function(level, levelName) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['_levelNames'].__setitem__(level, levelName);
			$m['_levelNames'].__setitem__(levelName, level);
			return null;
		};
		$m['addLevelName'].__name__ = 'addLevelName';

		$m['addLevelName'].__bind_type__ = 0;
		$m['addLevelName'].__args__ = [null,null,['level'],['levelName']];
		$m['LogRecord'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'f4bcfa4bb9e6d520145ba981f5aa9b6e';
			$method = $pyjs__bind_method2('__init__', function(name, level, pathname, lineno, msg, args, exc_info, func) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					pathname = arguments[3];
					lineno = arguments[4];
					msg = arguments[5];
					args = arguments[6];
					exc_info = arguments[7];
					func = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof func == 'undefined') func=arguments.callee.__args__[10][1];
				var ct,$mul4,$mul3,$mul2,$sub3,$sub2,$sub1,$sub4,$and1,$and2,$and3,$and4,$bool2,$bool3,$bool4,$bool5,$6,$4,$5,$2,$3,$mul1,$1,$len1;
				ct = $m['time']['time']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('msg', msg) : $p['setattr'](self, 'msg', msg); 
				if ((($bool5=((($bool2=$and1=args) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool3=$and2=$p['op_eq']((($len1=args) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool4=$and3=(typeof ($1=args).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['isinstance']((typeof ($3=args).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0)), $p['dict']):$and3):$and2):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					args = (typeof ($5=args).__array != 'undefined'?
						((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($constant_int_0));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('args', args) : $p['setattr'](self, 'args', args); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('levelname', $m['getLevelName'](level)) : $p['setattr'](self, 'levelname', $m['getLevelName'](level)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('levelno', level) : $p['setattr'](self, 'levelno', level); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pathname', pathname) : $p['setattr'](self, 'pathname', pathname); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('filename', $p['sprintf']('%s.py', pathname)) : $p['setattr'](self, 'filename', $p['sprintf']('%s.py', pathname)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('module', pathname) : $p['setattr'](self, 'module', pathname); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exc_info', exc_info) : $p['setattr'](self, 'exc_info', exc_info); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exc_text', null) : $p['setattr'](self, 'exc_text', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineno', lineno) : $p['setattr'](self, 'lineno', lineno); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('funcName', func) : $p['setattr'](self, 'funcName', func); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('created', ct) : $p['setattr'](self, 'created', ct); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('msecs', (typeof ($mul1=(typeof ($sub1=ct)==typeof ($sub2=$p['long'](ct)) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($mul2=$constant_int_1000) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) : $p['setattr'](self, 'msecs', (typeof ($mul1=(typeof ($sub1=ct)==typeof ($sub2=$p['long'](ct)) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($mul2=$constant_int_1000) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('relativeCreated', (typeof ($mul3=(typeof ($sub3=$p['getattr'](self, 'created'))==typeof ($sub4=$m['_startTime']) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($mul4=$constant_int_1000) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'relativeCreated', (typeof ($mul3=(typeof ($sub3=$p['getattr'](self, 'created'))==typeof ($sub4=$m['_startTime']) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($mul4=$constant_int_1000) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('thread', null) : $p['setattr'](self, 'thread', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('threadName', null) : $p['setattr'](self, 'threadName', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('process', null) : $p['setattr'](self, 'process', null); 
				return null;
			}
	, 1, [null,null,['self'],['name'],['level'],['pathname'],['lineno'],['msg'],['args'],['exc_info'],['func', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['sprintf']('<LogRecord: %s, %s, %s, %s, "%s">', $p['tuple']([$p['getattr'](self, '$$name'), $p['getattr'](self, 'levelno'), $p['getattr'](self, 'pathname'), $p['getattr'](self, 'lineno'), $p['getattr'](self, 'msg')]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$method = $pyjs__bind_method2('getMessage', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var msg,$mod1,$bool6,$mod2;
				msg = $p['str']($p['getattr'](self, 'msg'));
				if ((($bool6=$p['getattr'](self, 'args')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					msg = (typeof ($mod1=msg)==typeof ($mod2=$p['getattr'](self, 'args')) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2));
				}
				return msg;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMessage'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$8,$7,k,$iter1_idx;
				$iter1_iter = kwargs;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					k = $iter1_nextval;
					$p['setattr'](self, k, (typeof ($7=kwargs).__array != 'undefined'?
						((typeof $7.__array[$8=k]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(k)));
				}
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('toDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$bool10,$iter2_idx,_toDict,$bool7,v,$bool8,$bool9,k,$iter2_array;
				_toDict = $p['dict']([]);
				$iter2_iter = $p['dir'](self);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					k = $iter2_nextval;
					if ((($bool7=$p['op_eq']($p['__getslice'](k, 0, $constant_int_2), '__')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7.__nonzero__=='function'?
									$bool7.__nonzero__() :
									(typeof $bool7.__len__=='function'?
										($bool7.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					v = $p['getattr'](self, k);
					if ((($bool9=!(($bool8=$p['callable'](v)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9.__nonzero__=='function'?
									$bool9.__nonzero__() :
									(typeof $bool9.__len__=='function'?
										($bool9.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool10=$p['op_eq']($p['__getslice'](k, 0, $constant_int_2), '$$')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							_toDict.__setitem__($p['__getslice'](k, $constant_int_2, null), v);
						}
						else {
							_toDict.__setitem__(k, v);
						}
					}
				}
				return _toDict;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toDict'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LogRecord', $p['tuple']($bases), $data);
		})();
		$m['makeLogRecord'] = function(dict) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var rv;
			rv = $m['LogRecord'](null, null, '', $constant_int_0, '', $p['tuple']([]), null, null);
			rv['update'](dict);
			return rv;
		};
		$m['makeLogRecord'].__name__ = 'makeLogRecord';

		$m['makeLogRecord'].__bind_type__ = 0;
		$m['makeLogRecord'].__args__ = [null,null,['dict']];
		$m['Formatter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'd52cdab3312bf8b6df02c870bab50d5d';
			$cls_definition['converter'] = $p['getattr']($m['time'], 'localtime');
			$method = $pyjs__bind_method2('__init__', function(fmt, datefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					fmt = arguments[1];
					datefmt = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[3][1];
				if (typeof datefmt == 'undefined') datefmt=arguments.callee.__args__[4][1];
				var $bool11;
				if ((($bool11=fmt) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_fmt', fmt) : $p['setattr'](self, '_fmt', fmt); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_fmt', '%(message)s') : $p['setattr'](self, '_fmt', '%(message)s'); 
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('datefmt', datefmt) : $p['setattr'](self, 'datefmt', datefmt); 
				return null;
			}
	, 1, [null,null,['self'],['fmt', null],['datefmt', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('formatTime', function(record, datefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					datefmt = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof datefmt == 'undefined') datefmt=arguments.callee.__args__[4][1];
				var s,t,$bool12,ct;
				ct = self['converter']($p['getattr'](record, 'created'));
				if ((($bool12=datefmt) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = $m['time']['strftime'](datefmt, ct);
				}
				else {
					t = $m['time']['strftime']('%Y-%m-%d %H:%M:%S', ct);
					s = $p['sprintf']('%s,%03d', $p['tuple']([t, $p['getattr'](record, 'msecs')]));
				}
				return s;
			}
	, 1, [null,null,['self'],['record'],['datefmt', null]]);
			$cls_definition['formatTime'] = $method;
			$method = $pyjs__bind_method2('formatException', function(ei) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					ei = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,cStringIO,traceback,$11,$12,$13,$bool13,$bool14,$add2,s,$add1,$9,$10,sio;
				if ((($bool13=$p['hasattr']($m['sys'], 'trackstackstr')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = $p['str'](ei);
					s = (typeof ($add1=s)==typeof ($add2=$m['sys']['trackstackstr']()) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				else {
					cStringIO = $p['___import___']('cStringIO', 'logging');
					traceback = $p['___import___']('traceback', 'logging');
					sio = cStringIO['StringIO']();
					traceback['print_exception']((typeof ($9=ei).__array != 'undefined'?
						((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__($constant_int_0)), (typeof ($11=ei).__array != 'undefined'?
						((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($constant_int_1)), (typeof ($13=ei).__array != 'undefined'?
						((typeof $13.__array[$14=$constant_int_2]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__($constant_int_2)), null, sio);
					s = sio['getvalue']();
					sio['close']();
				}
				if ((($bool14=$p['op_eq']($p['__getslice'](s, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), null), '\n')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = $p['__getslice'](s, 0, (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
				}
				return s;
			}
	, 1, [null,null,['self'],['ei']]);
			$cls_definition['formatException'] = $method;
			$method = $pyjs__bind_method2('format', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$cmp1,$add4,$cmp2,$bool15,$bool16,$bool17,s,$add6,$bool20,$mod3,$add5,$mod4,$add3;
				record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('message', record['getMessage']()) : $p['setattr'](record, 'message', record['getMessage']()); 
				if ((($bool15=((((($cmp1=self['_fmt']['find']('%(asctime)'))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('asctime', self['formatTime'](record, $p['getattr'](self, 'datefmt'))) : $p['setattr'](record, 'asctime', self['formatTime'](record, $p['getattr'](self, 'datefmt'))); 
				}
				s = (typeof ($mod3=$p['getattr'](self, '_fmt'))==typeof ($mod4=record['toDict']()) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
				if ((($bool16=$p['getattr'](record, 'exc_info')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool18=!(($bool17=$p['getattr'](record, 'exc_text')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
							false :
							(typeof $bool18=='object'?
								(typeof $bool18.__nonzero__=='function'?
									$bool18.__nonzero__() :
									(typeof $bool18.__len__=='function'?
										($bool18.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('exc_text', self['formatException']($p['getattr'](record, 'exc_info'))) : $p['setattr'](record, 'exc_text', self['formatException']($p['getattr'](record, 'exc_info'))); 
					}
				}
				if ((($bool19=$p['getattr'](record, 'exc_text')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool20=!$p['op_eq']($p['__getslice'](s, (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), null), '\n')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
							false :
							(typeof $bool20=='object'?
								(typeof $bool20.__nonzero__=='function'?
									$bool20.__nonzero__() :
									(typeof $bool20.__len__=='function'?
										($bool20.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						s = (typeof ($add3=s)==typeof ($add4='\n') && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					s = (typeof ($add5=s)==typeof ($add6=$p['getattr'](record, 'exc_text')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				return s;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['format'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Formatter', $p['tuple']($bases), $data);
		})();
		$m['_defaultFormatter'] = $m['Formatter']();
		$m['BufferingFormatter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '2a7cec7e085c41771c448de3aa5b7a17';
			$method = $pyjs__bind_method2('__init__', function(linefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					linefmt = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof linefmt == 'undefined') linefmt=arguments.callee.__args__[3][1];
				var $bool21;
				if ((($bool21=linefmt) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21.__nonzero__=='function'?
								$bool21.__nonzero__() :
								(typeof $bool21.__len__=='function'?
									($bool21.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linefmt', linefmt) : $p['setattr'](self, 'linefmt', linefmt); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linefmt', $m['_defaultFormatter']) : $p['setattr'](self, 'linefmt', $m['_defaultFormatter']); 
				}
				return null;
			}
	, 1, [null,null,['self'],['linefmt', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('formatHeader', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return '';
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['formatHeader'] = $method;
			$method = $pyjs__bind_method2('formatFooter', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return '';
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['formatFooter'] = $method;
			$method = $pyjs__bind_method2('format', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,rv,$iter3_idx,$add11,$cmp3,record,$iter3_type,$len2,$add7,$add12,$bool22,$add10,$add8,$add9,$iter3_nextval,$iter3_array,$iter3_iter;
				rv = '';
				if ((($bool22=((($cmp3=(($len2=records) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rv = (typeof ($add7=rv)==typeof ($add8=self['formatHeader'](records)) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					$iter3_iter = records;
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						record = $iter3_nextval;
						rv = (typeof ($add9=rv)==typeof ($add10=self['linefmt']['format'](record)) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
					}
					rv = (typeof ($add11=rv)==typeof ($add12=self['formatFooter'](records)) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				return rv;
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['format'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferingFormatter', $p['tuple']($bases), $data);
		})();
		$m['Filter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'ecee5676f8c6849cc27e7e5c8b5e7257';
			$method = $pyjs__bind_method2('__init__', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ecee5676f8c6849cc27e7e5c8b5e7257') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];
				var $len3;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('nlen', (($len3=name) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))))) : $p['setattr'](self, 'nlen', (($len3=name) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))))); 
				return null;
			}
	, 1, [null,null,['self'],['name', '']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('filter', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ecee5676f8c6849cc27e7e5c8b5e7257') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$bool24,$bool25,$bool23;
				if ((($bool23=$p['op_eq']($p['getattr'](self, 'nlen'), $constant_int_0)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $constant_int_1;
				}
				else if ((($bool24=$p['op_eq']($p['getattr'](self, '$$name'), $p['getattr'](record, '$$name'))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $constant_int_1;
				}
				else if ((($bool25=!$p['op_eq'](record['$$name']['find']($p['getattr'](self, '$$name'), $constant_int_0, $p['getattr'](self, 'nlen')), $constant_int_0)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $constant_int_0;
				}
				return $p['op_eq']((typeof ($15=$p['getattr'](record, '$$name')).__array != 'undefined'?
					((typeof $15.__array[$16=$p['getattr'](self, 'nlen')]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($p['getattr'](self, 'nlen'))), '.');
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['filter'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Filter', $p['tuple']($bases), $data);
		})();
		$m['Filterer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '0149b72b00c03b05c1d29b0a9c037d67';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('filters', $p['list']([])) : $p['setattr'](self, 'filters', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addFilter', function(filter) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool26,$bool27;
				if ((($bool27=!(($bool26=$p['getattr'](self, 'filters').__contains__(filter)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['filters']['append'](filter);
				}
				return null;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['addFilter'] = $method;
			$method = $pyjs__bind_method2('removeFilter', function(filter) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool28;
				if ((($bool28=$p['getattr'](self, 'filters').__contains__(filter)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28.__nonzero__=='function'?
								$bool28.__nonzero__() :
								(typeof $bool28.__len__=='function'?
									($bool28.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['filters']['remove'](filter);
				}
				return null;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['removeFilter'] = $method;
			$method = $pyjs__bind_method2('filter', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv,$bool29,f,$iter4_nextval,$iter4_idx,$bool30,$iter4_type,$iter4_array,$iter4_iter;
				rv = $constant_int_1;
				$iter4_iter = $p['getattr'](self, 'filters');
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					f = $iter4_nextval;
					if ((($bool30=!(($bool29=f['filter'](record)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
							false :
							(typeof $bool30=='object'?
								(typeof $bool30.__nonzero__=='function'?
									$bool30.__nonzero__() :
									(typeof $bool30.__len__=='function'?
										($bool30.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						rv = $constant_int_0;
						break;
					}
				}
				return rv;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['filter'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Filterer', $p['tuple']($bases), $data);
		})();
		$m['_handlers'] = $p['dict']([]);
		$m['_handlerList'] = $p['list']([]);
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '1467e3bea5ebaf8b36eac3e6c1747a81';
			$method = $pyjs__bind_method2('__init__', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];

				$m['Filterer']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', null) : $p['setattr'](self, 'formatter', null); 
				$m['_handlers'].__setitem__(self, $constant_int_1);
				$m['_handlerList']['insert']($constant_int_0, self);
				return null;
			}
	, 1, [null,null,['self'],['level', $m['NOTSET']]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setLevel', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['setLevel'] = $method;
			$method = $pyjs__bind_method2('format', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool31,fmt;
				if ((($bool31=$p['getattr'](self, 'formatter')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31.__nonzero__=='function'?
								$bool31.__nonzero__() :
								(typeof $bool31.__len__=='function'?
									($bool31.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					fmt = $p['getattr'](self, 'formatter');
				}
				else {
					fmt = $m['_defaultFormatter'];
				}
				return fmt['format'](record);
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['format'] = $method;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'emit must be implemented by Handler subclasses';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$method = $pyjs__bind_method2('handle', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool32,rv;
				rv = self['filter'](record);
				if ((($bool32=rv) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['emit'](record);
				}
				return rv;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handle'] = $method;
			$method = $pyjs__bind_method2('setFormatter', function(fmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fmt = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', fmt) : $p['setattr'](self, 'formatter', fmt); 
				return null;
			}
	, 1, [null,null,['self'],['fmt']]);
			$cls_definition['setFormatter'] = $method;
			$method = $pyjs__bind_method2('flush', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flush'] = $method;
			$method = $pyjs__bind_method2('close', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['_handlers'].__delitem__(self);
				$m['_handlerList']['remove'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['close'] = $method;
			$method = $pyjs__bind_method2('handleError', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool33;
				if ((($bool33=$m['raiseExceptions']) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handleError'] = $method;
			var $bases = new Array($m['Filterer']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
		$m['DefaultStream'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'a008c94d1c510723b76abe67e3d8d428';
			$method = $pyjs__bind_method2('write', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a008c94d1c510723b76abe67e3d8d428') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['write'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DefaultStream', $p['tuple']($bases), $data);
		})();
		$m['defaultStream'] = $m['DefaultStream']();
		$m['StreamHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '31137a7dcedb769e5da171a742f1611b';
			$method = $pyjs__bind_method2('__init__', function(strm) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					strm = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof strm == 'undefined') strm=arguments.callee.__args__[3][1];
				var $bool34;
				$m['Handler']['__init__'](self);
				if ((($bool34=$p['op_is'](strm, null)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					strm = $m['defaultStream'];
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', strm) : $p['setattr'](self, 'stream', strm); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', null) : $p['setattr'](self, 'formatter', null); 
				return null;
			}
	, 1, [null,null,['self'],['strm', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('flush', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool35;
				if ((($bool35=$p['hasattr']($p['getattr'](self, 'stream'), 'flush')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['stream']['flush']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flush'] = $method;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fs,$pyjs_try_err,$mod5,$mod6,msg;
				try {
					msg = self['format'](record);
					fs = '%s\n';
					self['stream']['write']((typeof ($mod5=fs)==typeof ($mod6=msg) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)));
					self['flush']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['handleError'](record);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamHandler', $p['tuple']($bases), $data);
		})();
		$m['PlaceHolder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '10ba6209c5b0505b252bc047c8256e85';
			$method = $pyjs__bind_method2('__init__', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '10ba6209c5b0505b252bc047c8256e85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loggerMap', $p['dict']([[alogger, null]])) : $p['setattr'](self, 'loggerMap', $p['dict']([[alogger, null]])); 
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('append', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '10ba6209c5b0505b252bc047c8256e85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool36,$bool37;
				if ((($bool37=!(($bool36=self['loggerMap']['has_key'](alogger)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'loggerMap').__setitem__(alogger, null);
				}
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['append'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PlaceHolder', $p['tuple']($bases), $data);
		})();
		$m['_loggerClass'] = null;
		$m['setLoggerClass'] = function(klass) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool40,$add14,$add13,$bool38,$bool39;
			if ((($bool38=!$p['op_eq'](klass, (typeof Logger == "undefined"?$m.Logger:Logger))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool40=!(($bool39=$p['issubclass'](klass, (typeof Logger == "undefined"?$m.Logger:Logger))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
						false :
						(typeof $bool40=='object'?
							(typeof $bool40.__nonzero__=='function'?
								$bool40.__nonzero__() :
								(typeof $bool40.__len__=='function'?
									($bool40.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

					var $pyjs__raise_expr1 = $p['TypeError'];
					var $pyjs__raise_expr2 = (typeof ($add13='logger not derived from logging.Logger: ')==typeof ($add14=$p['getattr'](klass, '__name__')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			$m['_loggerClass'] = klass;
			return null;
		};
		$m['setLoggerClass'].__name__ = 'setLoggerClass';

		$m['setLoggerClass'].__bind_type__ = 0;
		$m['setLoggerClass'].__args__ = [null,null,['klass']];
		$m['getLoggerClass'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['_loggerClass'];
		};
		$m['getLoggerClass'].__name__ = 'getLoggerClass';

		$m['getLoggerClass'].__bind_type__ = 0;
		$m['getLoggerClass'].__args__ = [null,null];
		$m['Manager'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'bcb0ad1a607d98f4b2774e0db88ef7e4';
			$method = $pyjs__bind_method2('__init__', function(rootnode) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					rootnode = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('root', rootnode) : $p['setattr'](self, 'root', rootnode); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('disable', $constant_int_0) : $p['setattr'](self, 'disable', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('emittedNoHandlerWarning', $constant_int_0) : $p['setattr'](self, 'emittedNoHandlerWarning', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loggerDict', $p['dict']([])) : $p['setattr'](self, 'loggerDict', $p['dict']([])); 
				return null;
			}
	, 1, [null,null,['self'],['rootnode']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getLogger', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv,$17,$bool41,$18,ph,$bool42;
				rv = null;
				if ((($bool41=self['loggerDict']['has_key'](name)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41.__nonzero__=='function'?
								$bool41.__nonzero__() :
								(typeof $bool41.__len__=='function'?
									($bool41.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rv = (typeof ($17=$p['getattr'](self, 'loggerDict')).__array != 'undefined'?
						((typeof $17.__array[$18=name]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(name));
					if ((($bool42=$p['isinstance'](rv, $m['PlaceHolder'])) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
							false :
							(typeof $bool42=='object'?
								(typeof $bool42.__nonzero__=='function'?
									$bool42.__nonzero__() :
									(typeof $bool42.__len__=='function'?
										($bool42.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						ph = rv;
						rv = $m['_loggerClass'](name);
						rv.__is_instance__ && typeof rv.__setattr__ == 'function' ? rv.__setattr__('manager', self) : $p['setattr'](rv, 'manager', self); 
						$p['getattr'](self, 'loggerDict').__setitem__(name, rv);
						self['_fixupChildren'](ph, rv);
						self['_fixupParents'](rv);
					}
				}
				else {
					rv = $m['_loggerClass'](name);
					rv.__is_instance__ && typeof rv.__setattr__ == 'function' ? rv.__setattr__('manager', self) : $p['setattr'](rv, 'manager', self); 
					$p['getattr'](self, 'loggerDict').__setitem__(name, rv);
					self['_fixupParents'](rv);
				}
				return rv;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['getLogger'] = $method;
			$method = $pyjs__bind_method2('_fixupParents', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool50,substr,rv,$20,$sub6,$sub5,$bool47,$bool46,$bool45,$bool44,$bool43,$and5,$bool49,$bool48,$and6,$cmp5,$cmp6,obj,name,i,$19;
				name = $p['getattr'](alogger, '$$name');
				i = name['find']('.');
				rv = null;
				while ((($bool45=((($bool43=$and5=((($cmp5=i)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool44=rv) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and5)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45.__nonzero__=='function'?
								$bool45.__nonzero__() :
								(typeof $bool45.__len__=='function'?
									($bool45.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					substr = $p['__getslice'](name, 0, i);
					if ((($bool47=!(($bool46=self['loggerDict']['has_key'](substr)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$p['getattr'](self, 'loggerDict').__setitem__(substr, $m['PlaceHolder'](alogger));
					}
					else {
						obj = (typeof ($19=$p['getattr'](self, 'loggerDict')).__array != 'undefined'?
							((typeof $19.__array[$20=substr]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__(substr));
						if ((($bool48=$p['isinstance'](obj, (typeof Logger == "undefined"?$m.Logger:Logger))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
								false :
								(typeof $bool48=='object'?
									(typeof $bool48.__nonzero__=='function'?
										$bool48.__nonzero__() :
										(typeof $bool48.__len__=='function'?
											($bool48.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							rv = obj;
						}
						else {
							if (!( $p['isinstance'](obj, $m['PlaceHolder']) )) {
							   throw $p['AssertionError']();
							 }
							obj['append'](alogger);
						}
					}
					i = name['rfind']('.', $constant_int_0, (typeof ($sub5=i)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)));
				}
				if ((($bool50=!(($bool49=rv) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50.__nonzero__=='function'?
								$bool50.__nonzero__() :
								(typeof $bool50.__len__=='function'?
									($bool50.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rv = $p['getattr'](self, 'root');
				}
				alogger.__is_instance__ && typeof alogger.__setattr__ == 'function' ? alogger.__setattr__('parent', rv) : $p['setattr'](alogger, 'parent', rv); 
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['_fixupParents'] = $method;
			$method = $pyjs__bind_method2('_fixupChildren', function(ph, alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					ph = arguments[1];
					alogger = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,c,name,$iter5_array,namelen,$len4,$iter5_iter,$iter5_idx,$iter5_type,$bool51;
				name = $p['getattr'](alogger, '$$name');
				namelen = (($len4=name) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4)))));
				$iter5_iter = ph['loggerMap']['keys']();
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					c = $iter5_nextval;
					if ((($bool51=!$p['op_eq']($p['__getslice']($p['getattr']($p['getattr'](c, 'parent'), '$$name'), 0, namelen), name)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51.__nonzero__=='function'?
									$bool51.__nonzero__() :
									(typeof $bool51.__len__=='function'?
										($bool51.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						alogger.__is_instance__ && typeof alogger.__setattr__ == 'function' ? alogger.__setattr__('parent', $p['getattr'](c, 'parent')) : $p['setattr'](alogger, 'parent', $p['getattr'](c, 'parent')); 
						c.__is_instance__ && typeof c.__setattr__ == 'function' ? c.__setattr__('parent', alogger) : $p['setattr'](c, 'parent', alogger); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['ph'],['alogger']]);
			$cls_definition['_fixupChildren'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Manager', $p['tuple']($bases), $data);
		})();
		$m['Logger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '656bb420830917343c1767926f930921';
			$method = $pyjs__bind_method2('__init__', function(name, level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments.callee.__args__[4][1];

				$m['Filterer']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', null) : $p['setattr'](self, 'parent', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('propagate', $constant_int_1) : $p['setattr'](self, 'propagate', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('handlers', $p['list']([])) : $p['setattr'](self, 'handlers', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('disabled', $constant_int_0) : $p['setattr'](self, 'disabled', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self'],['name'],['level', $m['NOTSET']]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setLevel', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['setLevel'] = $method;
			$method = $pyjs__bind_method2('debug', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $cmp7,$bool52,$bool53,$cmp9,$cmp8,$cmp10;
				if ((($bool52=((((($cmp7=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp8=$m['DEBUG'])?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52.__nonzero__=='function'?
								$bool52.__nonzero__() :
								(typeof $bool52.__len__=='function'?
									($bool52.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool53=((((($cmp9=$m['DEBUG'])===($cmp10=self['getEffectiveLevel']())?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53.__nonzero__=='function'?
								$bool53.__nonzero__() :
								(typeof $bool53.__len__=='function'?
									($bool53.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['DEBUG'], msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['debug'] = $method;
			$method = $pyjs__bind_method2('info', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $bool54,$bool55,$cmp14,$cmp11,$cmp13,$cmp12;
				if ((($bool54=((((($cmp11=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp12=$m['INFO'])?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool55=((((($cmp13=$m['INFO'])===($cmp14=self['getEffectiveLevel']())?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))))|1) == 1)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55.__nonzero__=='function'?
								$bool55.__nonzero__() :
								(typeof $bool55.__len__=='function'?
									($bool55.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['INFO'], msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['info'] = $method;
			$method = $pyjs__bind_method2('warning', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $bool56,$bool57,$cmp15,$cmp16;
				if ((($bool56=((((($cmp15=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp16=$m['WARNING'])?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56.__nonzero__=='function'?
								$bool56.__nonzero__() :
								(typeof $bool56.__len__=='function'?
									($bool56.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool57=self['isEnabledFor']($m['WARNING'])) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57.__nonzero__=='function'?
								$bool57.__nonzero__() :
								(typeof $bool57.__len__=='function'?
									($bool57.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['WARNING'], msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['warning'] = $method;
			$cls_definition['warn'] = $p['staticmethod']($cls_definition['warning']);
			$method = $pyjs__bind_method2('error', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $bool58,$bool59,$cmp17,$cmp18;
				if ((($bool58=((((($cmp17=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp18=$m['ERROR'])?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))))|1) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58.__nonzero__=='function'?
								$bool58.__nonzero__() :
								(typeof $bool58.__len__=='function'?
									($bool58.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool59=self['isEnabledFor']($m['ERROR'])) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59.__nonzero__=='function'?
								$bool59.__nonzero__() :
								(typeof $bool59.__len__=='function'?
									($bool59.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['ERROR'], msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['error'] = $method;
			$method = $pyjs__bind_method2('exception', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16;
				self['error']((typeof ($add15=$p['tuple']([msg]))==typeof ($add16=args) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)), $p['dict']([['exc_info', $constant_int_1]]));
				return null;
			}
	, 1, ['args',null,['self'],['msg']]);
			$cls_definition['exception'] = $method;
			$method = $pyjs__bind_method2('critical', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $bool61,$bool60,$cmp20,$cmp21,$cmp22,$cmp19;
				if ((($bool60=((((($cmp19=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp20=$m['CRITICAL'])?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))))|1) == 1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool61=((((($cmp21=$m['CRITICAL'])===($cmp22=self['getEffectiveLevel']())?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))))|1) == 1)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61.__nonzero__=='function'?
								$bool61.__nonzero__() :
								(typeof $bool61.__len__=='function'?
									($bool61.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['CRITICAL'], msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['critical'] = $method;
			$cls_definition['fatal'] = $p['staticmethod']($cls_definition['critical']);
			$method = $pyjs__bind_method2('log', function(level, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					msg = arguments[2];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[3];
						}
					} else 					if (typeof level != 'undefined') {
						if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = level;
							level = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var $bool63,$bool62,$bool65,$bool64,$cmp23,$cmp24,$bool66;
				if ((($bool63=!(($bool62=$p['isinstance'](level, $p['int'])) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool64=$m['raiseExceptions']) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
							false :
							(typeof $bool64=='object'?
								(typeof $bool64.__nonzero__=='function'?
									$bool64.__nonzero__() :
									(typeof $bool64.__len__=='function'?
										($bool64.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {

						var $pyjs__raise_expr1 = $p['TypeError'];
						var $pyjs__raise_expr2 = 'level must be an integer';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					else {
						return null;
					}
				}
				if ((($bool65=((((($cmp23=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp24=level)?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))))|1) == 1)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65.__nonzero__=='function'?
								$bool65.__nonzero__() :
								(typeof $bool65.__len__=='function'?
									($bool65.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool66=self['isEnabledFor'](level)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66.__nonzero__=='function'?
								$bool66.__nonzero__() :
								(typeof $bool66.__len__=='function'?
									($bool66.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, level, msg, args]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['level'],['msg']]);
			$cls_definition['log'] = $method;
			$method = $pyjs__bind_method2('findCaller', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,$bool67,$iter6_idx,$iter6_type,$22,ts,$21,$iter6_array,lineno,fname,$iter6_iter,stack,$iter6_nextval;
				stack = $p['list']($pyjs.trackstack);
				fname = '(unknown file)';
				lineno = $constant_int_0;
				$iter6_iter = stack;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					obj = $iter6_nextval;
					ts = $p['dict'](obj);
					if ((($bool67=!$p['op_eq']((typeof ($21=ts).__array != 'undefined'?
						((typeof $21.__array[$22='module']) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__('module')), (typeof __name__ == "undefined"?$m.__name__:__name__))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
							false :
							(typeof $bool67=='object'?
								(typeof $bool67.__nonzero__=='function'?
									$bool67.__nonzero__() :
									(typeof $bool67.__len__=='function'?
										($bool67.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						fname = ts['get']('module', '(unknown file)');
						lineno = ts['get']('lineno', $constant_int_0);
					}
				}
				return $p['tuple']([fname, lineno, '(unknown function)']);
			}
	, 1, [null,null,['self']]);
			$cls_definition['findCaller'] = $method;
			$method = $pyjs__bind_method2('makeRecord', function(name, level, fn, lno, msg, args, exc_info, func, extra) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					fn = arguments[3];
					lno = arguments[4];
					msg = arguments[5];
					args = arguments[6];
					exc_info = arguments[7];
					func = arguments[8];
					extra = arguments[9];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 10)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof func == 'undefined') func=arguments.callee.__args__[10][1];
				if (typeof extra == 'undefined') extra=arguments.callee.__args__[11][1];
				var $bool70,rv,$24,$iter7_iter,$iter7_type,$or1,$or2,$bool69,$bool68,key,$iter7_idx,$iter7_nextval,$iter7_array,$23;
				rv = $m['LogRecord'](name, level, fn, lno, msg, args, exc_info, func);
				if ((($bool68=extra) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68.__nonzero__=='function'?
								$bool68.__nonzero__() :
								(typeof $bool68.__len__=='function'?
									($bool68.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter7_iter = extra;
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						key = $iter7_nextval;
						if ((($bool70=((($bool69=$or1=$p['list'](['message', 'asctime']).__contains__(key)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
							false :
							(typeof $bool69=='object'?
								(typeof $bool69.__nonzero__=='function'?
									$bool69.__nonzero__() :
									(typeof $bool69.__len__=='function'?
										($bool69.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or1:rv['toDict']().__contains__(key))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
								false :
								(typeof $bool70=='object'?
									(typeof $bool70.__nonzero__=='function'?
										$bool70.__nonzero__() :
										(typeof $bool70.__len__=='function'?
											($bool70.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($p['KeyError']($p['sprintf']('Attempt to overwrite %r in LogRecord', key)));
						}
						$pyjs_kwargs_call(rv, 'update', null, null, [{key:(typeof ($23=extra).__array != 'undefined'?
							((typeof $23.__array[$24=key]) != 'undefined'?$23.__array[$24]:
								$23.__getitem__($24)):
								$23.__getitem__(key))}]);
					}
				}
				return rv;
			}
	, 1, [null,null,['self'],['name'],['level'],['fn'],['lno'],['msg'],['args'],['exc_info'],['func', null],['extra', null]]);
			$cls_definition['makeRecord'] = $method;
			$method = $pyjs__bind_method2('_log', function(level, msg, args, exc_info, extra) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					msg = arguments[2];
					args = arguments[3];
					exc_info = arguments[4];
					extra = arguments[5];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof exc_info == 'undefined') exc_info=arguments.callee.__args__[6][1];
				if (typeof extra == 'undefined') extra=arguments.callee.__args__[7][1];
				var $bool72,$bool73,$bool71,record,lno,func,$bool74,fn;
				if ((($bool71=$m['_srcfile']) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71.__nonzero__=='function'?
								$bool71.__nonzero__() :
								(typeof $bool71.__len__=='function'?
									($bool71.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					var $tupleassign1 = $p['__ass_unpack'](self['findCaller'](), 3, null);
					fn = $tupleassign1[0];
					lno = $tupleassign1[1];
					func = $tupleassign1[2];
				}
				else {
					var $tupleassign2 = $p['__ass_unpack']($p['tuple'](['(unknown file)', $constant_int_0, '(unknown function)']), 3, null);
					fn = $tupleassign2[0];
					lno = $tupleassign2[1];
					func = $tupleassign2[2];
				}
				if ((($bool72=exc_info) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72.__nonzero__=='function'?
								$bool72.__nonzero__() :
								(typeof $bool72.__len__=='function'?
									($bool72.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool74=!(($bool73=$p['isinstance'](exc_info, $p['tuple'])) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
						false :
						(typeof $bool73=='object'?
							(typeof $bool73.__nonzero__=='function'?
								$bool73.__nonzero__() :
								(typeof $bool73.__len__=='function'?
									($bool73.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
							false :
							(typeof $bool74=='object'?
								(typeof $bool74.__nonzero__=='function'?
									$bool74.__nonzero__() :
									(typeof $bool74.__len__=='function'?
										($bool74.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						exc_info = $m['sys']['exc_info']();
					}
				}
				record = self['makeRecord']($p['getattr'](self, '$$name'), level, fn, lno, msg, args, exc_info, func, extra);
				self['handle'](record);
				return null;
			}
	, 1, [null,null,['self'],['level'],['msg'],['args'],['exc_info', null],['extra', null]]);
			$cls_definition['_log'] = $method;
			$method = $pyjs__bind_method2('handle', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$bool76,$bool77,$bool75,$and7;
				if ((($bool77=((($bool76=$and7=!(($bool75=$p['getattr'](self, 'disabled')) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75.__nonzero__=='function'?
							$bool75.__nonzero__() :
							(typeof $bool75.__len__=='function'?
								($bool75.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76.__nonzero__=='function'?
							$bool76.__nonzero__() :
							(typeof $bool76.__len__=='function'?
								($bool76.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?self['filter'](record):$and7)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
						false :
						(typeof $bool77=='object'?
							(typeof $bool77.__nonzero__=='function'?
								$bool77.__nonzero__() :
								(typeof $bool77.__len__=='function'?
									($bool77.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['callHandlers'](record);
				}
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handle'] = $method;
			$method = $pyjs__bind_method2('addHandler', function(hdlr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hdlr = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool78,$bool79;
				if ((($bool79=!(($bool78=$p['getattr'](self, 'handlers').__contains__(hdlr)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79.__nonzero__=='function'?
								$bool79.__nonzero__() :
								(typeof $bool79.__len__=='function'?
									($bool79.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['handlers']['append'](hdlr);
				}
				return null;
			}
	, 1, [null,null,['self'],['hdlr']]);
			$cls_definition['addHandler'] = $method;
			$method = $pyjs__bind_method2('removeHandler', function(hdlr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hdlr = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool80,$pyjs_try_err;
				if ((($bool80=$p['getattr'](self, 'handlers').__contains__(hdlr)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80.__nonzero__=='function'?
								$bool80.__nonzero__() :
								(typeof $bool80.__len__=='function'?
									($bool80.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					hdlr['acquire']();
					try {
						self['handlers']['remove'](hdlr);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					} finally {
						hdlr['release']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['hdlr']]);
			$cls_definition['removeHandler'] = $method;
			$method = $pyjs__bind_method2('callHandlers', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_iter,$cmp25,$cmp26,hdlr,$bool83,$bool82,$bool81,$bool87,$bool86,$bool85,$bool84,$bool88,$and9,$iter8_idx,$iter8_type,$and10,$add17,$iter8_nextval,$add18,c,$iter8_array,$and11,found;
				c = self;
				found = $constant_int_0;
				while ((($bool81=c) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
						false :
						(typeof $bool81=='object'?
							(typeof $bool81.__nonzero__=='function'?
								$bool81.__nonzero__() :
								(typeof $bool81.__len__=='function'?
									($bool81.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter8_iter = $p['getattr'](c, 'handlers');
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						hdlr = $iter8_nextval;
						found = (typeof ($add17=found)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
						if ((($bool82=((((($cmp25=$p['getattr'](record, 'levelno'))===($cmp26=$p['getattr'](hdlr, 'level'))?0:
							(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
								($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
								$p['cmp']($cmp25, $cmp26))))|1) == 1)) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
								false :
								(typeof $bool82=='object'?
									(typeof $bool82.__nonzero__=='function'?
										$bool82.__nonzero__() :
										(typeof $bool82.__len__=='function'?
											($bool82.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							hdlr['handle'](record);
						}
					}
					if ((($bool84=!(($bool83=$p['getattr'](c, 'propagate')) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83.__nonzero__=='function'?
								$bool83.__nonzero__() :
								(typeof $bool83.__len__=='function'?
									($bool83.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
							false :
							(typeof $bool84=='object'?
								(typeof $bool84.__nonzero__=='function'?
									$bool84.__nonzero__() :
									(typeof $bool84.__len__=='function'?
										($bool84.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c = null;
					}
					else {
						c = $p['getattr'](c, 'parent');
					}
				}
				if ((($bool88=((($bool85=$and9=$p['op_eq'](found, $constant_int_0)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
					false :
					(typeof $bool85=='object'?
						(typeof $bool85.__nonzero__=='function'?
							$bool85.__nonzero__() :
							(typeof $bool85.__len__=='function'?
								($bool85.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool86=$and10=$m['raiseExceptions']) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86.__nonzero__=='function'?
							$bool86.__nonzero__() :
							(typeof $bool86.__len__=='function'?
								($bool86.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool87=$p['getattr']($p['getattr'](self, 'manager'), 'emittedNoHandlerWarning')) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87.__nonzero__=='function'?
							$bool87.__nonzero__() :
							(typeof $bool87.__len__=='function'?
								($bool87.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and10):$and9)) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
						false :
						(typeof $bool88=='object'?
							(typeof $bool88.__nonzero__=='function'?
								$bool88.__nonzero__() :
								(typeof $bool88.__len__=='function'?
									($bool88.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['sys']['stderr']['write']($p['sprintf']('No handlers could be found for logger "%s"\n', $p['getattr'](self, '$$name')));
					$p['getattr'](self, 'manager').__is_instance__ && typeof $p['getattr'](self, 'manager').__setattr__ == 'function' ? $p['getattr'](self, 'manager').__setattr__('emittedNoHandlerWarning', $constant_int_1) : $p['setattr']($p['getattr'](self, 'manager'), 'emittedNoHandlerWarning', $constant_int_1); 
				}
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['callHandlers'] = $method;
			$method = $pyjs__bind_method2('getEffectiveLevel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool90,$bool89,logger;
				logger = self;
				while ((($bool89=logger) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89.__nonzero__=='function'?
								$bool89.__nonzero__() :
								(typeof $bool89.__len__=='function'?
									($bool89.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool90=$p['getattr'](logger, 'level')) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
							false :
							(typeof $bool90=='object'?
								(typeof $bool90.__nonzero__=='function'?
									$bool90.__nonzero__() :
									(typeof $bool90.__len__=='function'?
										($bool90.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $p['getattr'](logger, 'level');
					}
					logger = $p['getattr'](logger, 'parent');
				}
				return $m['NOTSET'];
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEffectiveLevel'] = $method;
			$method = $pyjs__bind_method2('isEnabledFor', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool91,$cmp27,$cmp28,$cmp29,$cmp30;
				if ((($bool91=((((($cmp27=$p['getattr']($p['getattr'](self, 'manager'), 'disable'))===($cmp28=level)?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))))|1) == 1)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91.__nonzero__=='function'?
								$bool91.__nonzero__() :
								(typeof $bool91.__len__=='function'?
									($bool91.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $constant_int_0;
				}
				return ((((($cmp29=level)===($cmp30=self['getEffectiveLevel']())?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))))|1) == 1);
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['isEnabledFor'] = $method;
			var $bases = new Array($m['Filterer']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Logger', $p['tuple']($bases), $data);
		})();
		$m['RootLogger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'a62bb2013649d36f06fc87d1441c3f9c';
			$method = $pyjs__bind_method2('__init__', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a62bb2013649d36f06fc87d1441c3f9c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Logger']['__init__'](self, 'root', level);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Logger']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RootLogger', $p['tuple']($bases), $data);
		})();
		$m['_loggerClass'] = $m['Logger'];
		$m['root'] = $m['RootLogger']($m['WARNING']);
		$m['Logger'].__is_instance__ && typeof $m['Logger'].__setattr__ == 'function' ? $m['Logger'].__setattr__('root', $m['root']) : $p['setattr']($m['Logger'], 'root', $m['root']); 
		$m['$assign1'] = $m['Manager']($p['getattr']($m['Logger'], 'root'));
		$m['root'].__is_instance__ && typeof $m['root'].__setattr__ == 'function' ? $m['root'].__setattr__('manager', $m['$assign1']) : $p['setattr']($m['root'], 'manager', $m['$assign1']); 
		$m['Logger'].__is_instance__ && typeof $m['Logger'].__setattr__ == 'function' ? $m['Logger'].__setattr__('manager', $m['$assign1']) : $p['setattr']($m['Logger'], 'manager', $m['$assign1']); 
		$m['BASIC_FORMAT'] = '%(levelname)s:%(name)s:%(message)s';
		$m['basicConfig'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}
			var $bool92,$bool93,$bool94,stream,level,fmt,fs,filename,$len5,dfs,hdlr;
			if ((($bool92=$p['op_eq']((($len5=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
							$p['len']($len5))))), $constant_int_0)) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92.__nonzero__=='function'?
							$bool92.__nonzero__() :
							(typeof $bool92.__len__=='function'?
								($bool92.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				filename = kwargs['get']('filename');
				if ((($bool93=filename) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
						false :
						(typeof $bool93=='object'?
							(typeof $bool93.__nonzero__=='function'?
								$bool93.__nonzero__() :
								(typeof $bool93.__len__=='function'?
									($bool93.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['NotImplementedError']('Files not supported in javascript'));
				}
				else {
					stream = kwargs['get']('stream');
					hdlr = $m['StreamHandler'](stream);
				}
				fs = kwargs['get']('format', $m['BASIC_FORMAT']);
				dfs = kwargs['get']('datefmt', null);
				fmt = $m['Formatter'](fs, dfs);
				hdlr['setFormatter'](fmt);
				$m['root']['addHandler'](hdlr);
				level = kwargs['get']('level');
				if ((($bool94=level) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94.__nonzero__=='function'?
								$bool94.__nonzero__() :
								(typeof $bool94.__len__=='function'?
									($bool94.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['root']['setLevel'](level);
				}
			}
			return null;
		};
		$m['basicConfig'].__name__ = 'basicConfig';

		$m['basicConfig'].__bind_type__ = 0;
		$m['basicConfig'].__args__ = [null,['kwargs']];
		$m['getLogger'] = function(name) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			var $bool95;
			if ((($bool95=name) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['Logger']['manager']['getLogger'](name);
			}
			else {
				return $m['root'];
			}
			return null;
		};
		$m['getLogger'].__name__ = 'getLogger';

		$m['getLogger'].__bind_type__ = 0;
		$m['getLogger'].__args__ = [null,null,['name', null]];
		$m['critical'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $bool96,$add20,$len6,$add19;
			if ((($bool96=$p['op_eq']((($len6=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
							$p['len']($len6))))), $constant_int_0)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96.__nonzero__=='function'?
							$bool96.__nonzero__() :
							(typeof $bool96.__len__=='function'?
								($bool96.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['critical']((typeof ($add19=$p['tuple']([msg]))==typeof ($add20=args) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)), kwargs);
			return null;
		};
		$m['critical'].__name__ = 'critical';

		$m['critical'].__bind_type__ = 0;
		$m['critical'].__args__ = ['args',['kwargs'],['msg']];
		$m['fatal'] = $m['critical'];
		$m['error'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add22,$bool97,$add21,$len7;
			if ((($bool97=$p['op_eq']((($len7=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
							$p['len']($len7))))), $constant_int_0)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
					false :
					(typeof $bool97=='object'?
						(typeof $bool97.__nonzero__=='function'?
							$bool97.__nonzero__() :
							(typeof $bool97.__len__=='function'?
								($bool97.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['error']((typeof ($add21=$p['tuple']([msg]))==typeof ($add22=args) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22)), kwargs);
			return null;
		};
		$m['error'].__name__ = 'error';

		$m['error'].__bind_type__ = 0;
		$m['error'].__args__ = ['args',['kwargs'],['msg']];
		$m['exception'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			var $add23,$add24;
			$m['error']((typeof ($add23=$p['tuple']([msg]))==typeof ($add24=args) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24)), $p['dict']([['exc_info', $constant_int_1]]));
			return null;
		};
		$m['exception'].__name__ = 'exception';

		$m['exception'].__bind_type__ = 0;
		$m['exception'].__args__ = ['args',null,['msg']];
		$m['warning'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $bool98,$add25,$add26,$len8;
			if ((($bool98=$p['op_eq']((($len8=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
					(typeof $len8.__len__ == 'function'?$len8.__len__():
						(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
							$p['len']($len8))))), $constant_int_0)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98.__nonzero__=='function'?
							$bool98.__nonzero__() :
							(typeof $bool98.__len__=='function'?
								($bool98.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['warning']((typeof ($add25=$p['tuple']([msg]))==typeof ($add26=args) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26)), kwargs);
			return null;
		};
		$m['warning'].__name__ = 'warning';

		$m['warning'].__bind_type__ = 0;
		$m['warning'].__args__ = ['args',['kwargs'],['msg']];
		$m['warn'] = $m['warning'];
		$m['info'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add28,$bool99,$add27,$len9;
			if ((($bool99=$p['op_eq']((($len9=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
					(typeof $len9.__len__ == 'function'?$len9.__len__():
						(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
							$p['len']($len9))))), $constant_int_0)) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99.__nonzero__=='function'?
							$bool99.__nonzero__() :
							(typeof $bool99.__len__=='function'?
								($bool99.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['info']((typeof ($add27=$p['tuple']([msg]))==typeof ($add28=args) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28)), kwargs);
			return null;
		};
		$m['info'].__name__ = 'info';

		$m['info'].__bind_type__ = 0;
		$m['info'].__args__ = ['args',['kwargs'],['msg']];
		$m['debug'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $len10,$add29,$add30,$bool100;
			if ((($bool100=$p['op_eq']((($len10=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
					(typeof $len10.__len__ == 'function'?$len10.__len__():
						(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
							$p['len']($len10))))), $constant_int_0)) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['debug']((typeof ($add29=$p['tuple']([msg]))==typeof ($add30=args) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)), kwargs);
			return null;
		};
		$m['debug'].__name__ = 'debug';

		$m['debug'].__bind_type__ = 0;
		$m['debug'].__args__ = ['args',['kwargs'],['msg']];
		$m['log'] = function(level, msg) {
			if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

			var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof level != 'undefined') {
					if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = level;
						level = arguments[2];
					}
				} else {
				}
			}
			var $len11,$add31,$add32,$bool101;
			if ((($bool101=$p['op_eq']((($len11=$p['getattr']($m['root'], 'handlers')) === null?$constant_int_0:
				(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
					(typeof $len11.__len__ == 'function'?$len11.__len__():
						(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
							$p['len']($len11))))), $constant_int_0)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101.__nonzero__=='function'?
							$bool101.__nonzero__() :
							(typeof $bool101.__len__=='function'?
								($bool101.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['basicConfig']();
			}
			$m['root']['log']((typeof ($add31=$p['tuple']([level, msg]))==typeof ($add32=args) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32)), kwargs);
			return null;
		};
		$m['log'].__name__ = 'log';

		$m['log'].__bind_type__ = 0;
		$m['log'].__args__ = ['args',['kwargs'],['level'],['msg']];
		$m['disable'] = function(level) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$p['getattr']($m['root'], 'manager').__is_instance__ && typeof $p['getattr']($m['root'], 'manager').__setattr__ == 'function' ? $p['getattr']($m['root'], 'manager').__setattr__('disable', level) : $p['setattr']($p['getattr']($m['root'], 'manager'), 'disable', level); 
			return null;
		};
		$m['disable'].__name__ = 'disable';

		$m['disable'].__bind_type__ = 0;
		$m['disable'].__args__ = [null,null,['level']];
		$m['shutdown'] = function(handlerList) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof handlerList == 'undefined') handlerList=arguments.callee.__args__[2][1];
			var $iter9_iter,h,$bool102,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs_try_err,$iter9_array;
			$iter9_iter = $p['__getslice'](handlerList, 0, null);
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				h = $iter9_nextval;
				try {
					h['flush']();
					h['close']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						if ((($bool102=$m['raiseExceptions']) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
								false :
								(typeof $bool102=='object'?
									(typeof $bool102.__nonzero__=='function'?
										$bool102.__nonzero__() :
										(typeof $bool102.__len__=='function'?
											($bool102.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($pyjs.__last_exception__?
								$pyjs.__last_exception__.error:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					}
				}
			}
			return null;
		};
		$m['shutdown'].__name__ = 'shutdown';

		$m['shutdown'].__bind_type__ = 0;
		$m['shutdown'].__args__ = [null,null,['handlerList', $m['_handlerList']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end logging */


/* end module: logging */


/*
PYJS_DEPS: ['sys', 'os', 'time', 'codecs', 'cStringIO', 'traceback']
*/
