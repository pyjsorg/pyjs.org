/* start module: pyjamas.builder.XMLFile */
$pyjs.loaded_modules['pyjamas.builder.XMLFile'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.builder.XMLFile'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.builder.XMLFile'];
	if(typeof $pyjs.loaded_modules['pyjamas.builder'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.builder'].__was_initialized__) $p['___import___']('pyjamas.builder', null);
	var $m = $pyjs.loaded_modules["pyjamas.builder.XMLFile"];
	$m.__repr__ = function() { return "<module: pyjamas.builder.XMLFile>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.builder.XMLFile';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.builder']['XMLFile'] = $pyjs.loaded_modules['pyjamas.builder.XMLFile'];
	try {
		var $iter8_iter,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$bool61,$iter8_idx,$86,$iter8_type,$82,$81,$iter8_nextval,$85,$iter8_array,$iter9_array;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['re'] = $p['___import___']('re', 'pyjamas.builder');
		$m['XMLFileError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.builder.XMLFile';
			$cls_definition.__md5__ = '36a27a4d3e52c8b4225d71aaa98a74b4';
			var $bases = new Array($p['RuntimeError']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('XMLFileError', $p['tuple']($bases), $data);
		})();
		$m['XMLFile'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.builder.XMLFile';
			$cls_definition.__md5__ = 'f706af0d390849028acd4ff66d1d321c';
			$cls_definition['re_xml'] = $m['re']['compile']('<[?]xml([^?]*)[?]>');
			$cls_definition['re_comment'] = $m['re']['compile']('<!--(-*)');
			$cls_definition['re_tag'] = $m['re']['compile']('<\\s*([^/]\\S*)(.*)>');
			$cls_definition['re_tag_close'] = $m['re']['compile']('</\\s*(\\S+)\\s*>');
			$cls_definition['re_attr'] = $m['re']['compile']('\\S+="[^"]*"');
			$method = $pyjs__bind_method2('__init__', function(lines) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					lines = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['isinstance'](lines, $p['basestring'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					lines = lines['$$split']('\n');
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lines', lines) : $p['setattr'](self, 'lines', lines); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineno', $constant_int_0) : $p['setattr'](self, 'lineno', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xmlAttrs', null) : $p['setattr'](self, 'xmlAttrs', null); 
				return null;
			}
	, 1, [null,null,['self'],['lines']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('error', function(msg) {
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
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($m['XMLFileError']($p['sprintf']('Line %s: %s', $p['tuple']([$p['getattr'](self, 'lineno'), msg]))));
				return null;
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['error'] = $method;
			$method = $pyjs__bind_method2('parseValue', function(v, unpackStr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					unpackStr = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof unpackStr == 'undefined') unpackStr=arguments.callee.__args__[4][1];
				var $8,$bool10,$bool11,$bool12,$9,$bool14,$bool15,$bool16,$iter1_iter,$bool13,vlower,$10,$bool8,$12,$bool9,$pyjs_try_err,$iter1_array,$11,$len2,$and8,$and3,$iter1_nextval,$and1,$and2,$and4,$and5,$and6,$and7,$bool2,$bool3,$bool6,$bool7,$bool4,$bool5,$6,$7,$4,$5,$2,$3,$1,$14,$cmp4,$cmp1,$iter1_type,$cmp3,$cmp2,$13,value,values,$iter1_idx,$len1;
				if ((($bool2=$p['op_eq'](v, '')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return v;
				}
				vlower = v['lower']();
				if ((($bool3=$p['list'](['null', 'none']).__contains__(vlower)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool4=$p['op_eq'](vlower, 'true')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
				if ((($bool5=$p['op_eq'](vlower, 'false')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					return false;
				}
				try {
					v = $p['int'](v);
					return v;
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
				try {
					v = $p['float'](v);
					return v;
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
				if ((($bool6=((($cmp1=(($len1=v) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))))===($cmp2=$constant_int_1)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					if ((($bool7=$p['op_eq']((typeof ($1=v).__array != 'undefined'?
						((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__($constant_int_0)), (typeof ($3=v).__array != 'undefined'?
						((typeof $3.__array[$4=(typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						if ((($bool9=((($bool8=$and1=unpackStr) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8.__nonzero__=='function'?
									$bool8.__nonzero__() :
									(typeof $bool8.__len__=='function'?
										($bool8.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['list'](["'", '"']).__contains__((typeof ($5=v).__array != 'undefined'?
							((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__($constant_int_0))):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							return $p['__getslice'](v, $constant_int_1, (typeof ($usub2=$constant_int_1)=='number'?
								-$usub2:
								$p['op_usub']($usub2)));
						}
					}
					else if ((($bool11=((($bool10=$and3=$p['op_eq']((typeof ($7=v).__array != 'undefined'?
						((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__($constant_int_0)), '(')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']((typeof ($9=v).__array != 'undefined'?
						((typeof $9.__array[$10=(typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__((typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)))), ')'):$and3)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						values = $p['list']([]);
						try {
							$iter1_iter = $p['__getslice'](v, $constant_int_1, (typeof ($usub4=$constant_int_1)=='number'?
								-$usub4:
								$p['op_usub']($usub4)))['$$split'](',');
							if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
								$iter1_type = 0;
							} else {
								$iter1_iter = $iter1_iter.__iter__();
								$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter1_idx = 0;
							while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
								value = $iter1_nextval;
								value = self['parseValue'](value['strip'](), true);
								values['append'](value);
							}
							return $p['tuple'](values);
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (true) {
							}
						}
					}
					if ((($bool12=((($cmp3=(($len2=v) === null?$constant_int_0:
						(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
							(typeof $len2.__len__ == 'function'?$len2.__len__():
								(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
									$p['len']($len2))))))===($cmp4=$constant_int_2)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						if ((($bool14=((($bool13=$and5=$p['op_eq']($p['__getslice'](v, 0, $constant_int_2), "u'")) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
							false :
							(typeof $bool13=='object'?
								(typeof $bool13.__nonzero__=='function'?
									$bool13.__nonzero__() :
									(typeof $bool13.__len__=='function'?
										($bool13.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['op_eq']((typeof ($11=v).__array != 'undefined'?
							((typeof $11.__array[$12=(typeof ($usub5=$constant_int_1)=='number'?
							-$usub5:
							$p['op_usub']($usub5))]) != 'undefined'?$11.__array[$12]:
								$11.__getitem__($12)):
								$11.__getitem__((typeof ($usub5=$constant_int_1)=='number'?
							-$usub5:
							$p['op_usub']($usub5)))), "'"):$and5)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
							return $p['__getslice'](v, $constant_int_2, (typeof ($usub6=$constant_int_1)=='number'?
								-$usub6:
								$p['op_usub']($usub6)));
						}
						if ((($bool16=((($bool15=$and7=$p['op_eq']($p['__getslice'](v, 0, $constant_int_2), 'u"')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15.__nonzero__=='function'?
									$bool15.__nonzero__() :
									(typeof $bool15.__len__=='function'?
										($bool15.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['op_eq']((typeof ($13=v).__array != 'undefined'?
							((typeof $13.__array[$14=(typeof ($usub7=$constant_int_1)=='number'?
							-$usub7:
							$p['op_usub']($usub7))]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__((typeof ($usub7=$constant_int_1)=='number'?
							-$usub7:
							$p['op_usub']($usub7)))), '"'):$and7)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
							return $p['__getslice'](v, $constant_int_2, (typeof ($usub8=$constant_int_1)=='number'?
								-$usub8:
								$p['op_usub']($usub8)));
						}
					}
				}
				return v;
			}
	, 1, [null,null,['self'],['v'],['unpackStr', false]]);
			$cls_definition['parseValue'] = $method;
			$method = $pyjs__bind_method2('getAttrs', function(line) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					line = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,attrs,v,k,$iter2_array,kv;
				attrs = $p['dict']([]);
				$iter2_iter = self['re_attr']['findall'](line);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					kv = $iter2_nextval;
					var $tupleassign1 = $p['__ass_unpack'](kv['$$split']('=', $constant_int_1), 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					k = k['strip']();
					v = v['$$replace']('%22;', '"');
					v = v['$$replace']('%0A;', '\n');
					v = $p['__getslice'](v['strip'](), $constant_int_1, (typeof ($usub9=$constant_int_1)=='number'?
						-$usub9:
						$p['op_usub']($usub9)));
					attrs.__setitem__(k, self['parseValue'](v));
				}
				return attrs;
			}
	, 1, [null,null,['self'],['line']]);
			$cls_definition['getAttrs'] = $method;
			$method = $pyjs__bind_method2('getTag', function(line, requiredTags) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					line = arguments[1];
					requiredTags = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof requiredTags == 'undefined') requiredTags=arguments.callee.__args__[4][1];
				var $bool18,$bool19,$bool17,tagName,tagClose,tagAttrs,$bool21,$bool20,$bool23,$bool22,$15,$and9,$or1,$or2,$and12,$and10,$and11,$16,mTag;
				mTag = self['re_tag']['match'](line);
				if ((($bool20=((($bool18=$or1=!(($bool17=mTag) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						 true ) )?$or1:((($bool19=$and9=!$p['op_is'](requiredTags, null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!requiredTags.__contains__(mTag['group']($constant_int_1)):$and9))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					if ((($bool21=!$p['op_is'](requiredTags, null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						self['error']($p['sprintf']('Expected tag %s', ','['join'](requiredTags)));
					}
					else {
						self['error']('Expected a tag');
					}
				}
				tagName = mTag['group']($constant_int_1);
				tagAttrs = mTag['group']($constant_int_2);
				if ((($bool23=((($bool22=$and11=tagAttrs) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((typeof ($15=tagAttrs).__array != 'undefined'?
					((typeof $15.__array[$16=(typeof ($usub10=$constant_int_1)=='number'?
					-$usub10:
					$p['op_usub']($usub10))]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__((typeof ($usub10=$constant_int_1)=='number'?
					-$usub10:
					$p['op_usub']($usub10)))), '/'):$and11)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					tagAttrs = $p['__getslice'](tagAttrs, 0, (typeof ($usub11=$constant_int_1)=='number'?
						-$usub11:
						$p['op_usub']($usub11)));
					tagClose = true;
				}
				else {
					tagClose = false;
				}
				return $p['tuple']([tagName, tagClose, self['getAttrs'](tagAttrs)]);
			}
	, 1, [null,null,['self'],['line'],['requiredTags', null]]);
			$cls_definition['getTag'] = $method;
			$method = $pyjs__bind_method2('getTagClose', function(line, tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					line = arguments[1];
					tag = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tag == 'undefined') tag=arguments.callee.__args__[4][1];
				var $or4,$or3,$and13,mTag,$bool25,$bool24,$bool27,$bool26,$and14,$bool28;
				mTag = self['re_tag_close']['match'](line);
				if ((($bool27=((($bool25=$or3=!(($bool24=mTag) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($bool26=$and13=!$p['op_is'](tag, null)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_eq'](mTag['group']($constant_int_1), tag):$and13))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					if ((($bool28=!$p['op_is'](tag, null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
						self['error']($p['sprintf']("Expected closing tag '%s'", tag));
					}
					else {
						self['error']('Expected a closing tag');
					}
				}
				return $p['tuple']([mTag['group']($constant_int_1)]);
			}
	, 1, [null,null,['self'],['line'],['tag', null]]);
			$cls_definition['getTagClose'] = $method;
			$method = $pyjs__bind_method2('currentLine', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var right,$bool32,$19,$len6,end,$len7,$20,$bool30,start,$len5,$sub2,$sub1,$bool29,$add7,mComment,$17,startlineno,$add11,$add12,line,$cmp5,$cmp7,$cmp6,$add9,$18,$cmp8,$add2,$add3,$len4,$bool31,$add6,$len3,$add4,$add5,$add10,$add8,$add1,$len8,left;
				if ((($bool29=((($cmp5=$p['getattr'](self, 'lineno'))===($cmp6=(($len3=$p['getattr'](self, 'lines')) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				line = (typeof ($17=$p['getattr'](self, 'lines')).__array != 'undefined'?
					((typeof $17.__array[$18=$p['getattr'](self, 'lineno')]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($p['getattr'](self, 'lineno')))['strip']();
				startlineno = $p['getattr'](self, 'lineno');
				mComment = self['re_comment']['search'](line);
				while ((($bool30=mComment) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					start = $p['sprintf']('<!--%s', mComment['group']($constant_int_1));
					end = $p['sprintf']('%s-->', mComment['group']($constant_int_1));
					left = (typeof ($add1=line['find'](start))==typeof ($add2=(($len4=start) === null?$constant_int_0:
						(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
							(typeof $len4.__len__ == 'function'?$len4.__len__():
								(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
									$p['len']($len4)))))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					right = line['find'](end, left);
					if ((($bool31=((((($cmp7=right)===($cmp8=left)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						right = (typeof ($add3=right)==typeof ($add4=(($len5=end) === null?$constant_int_0:
							(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
								(typeof $len5.__len__ == 'function'?$len5.__len__():
									(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
										$p['len']($len5)))))) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
						line = (typeof ($add7=$p['__getslice'](line, 0, (typeof ($sub1=left)==typeof ($sub2=(($len6=start) === null?$constant_int_0:
							(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
								(typeof $len6.__len__ == 'function'?$len6.__len__():
									(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
										$p['len']($len6)))))) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))))==typeof ($add8=$p['__getslice'](line, (typeof ($add5=right)==typeof ($add6=(($len7=end) === null?$constant_int_0:
							(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
								(typeof $len7.__len__ == 'function'?$len7.__len__():
									(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
										$p['len']($len7)))))) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6)), null)) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
						mComment = self['re_comment']['search'](line);
					}
					else if ((($bool32=$p['op_eq']($p['getattr'](self, 'lineno'), (($len8=$p['getattr'](self, 'lines')) === null?$constant_int_0:
						(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
							(typeof $len8.__len__ == 'function'?$len8.__len__():
								(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
									$p['len']($len8))))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
						self['error']($p['sprintf']('Unterminated comment starting at line %s', startlineno));
					}
					else {
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineno', (typeof ($add9=$p['getattr'](self, 'lineno'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))) : $p['setattr'](self, 'lineno', (typeof ($add9=$p['getattr'](self, 'lineno'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))); 
						line = (typeof ($add11=$p['__getslice'](line, 0, left))==typeof ($add12=(typeof ($19=$p['getattr'](self, 'lines')).__array != 'undefined'?
							((typeof $19.__array[$20=$p['getattr'](self, 'lineno')]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__($p['getattr'](self, 'lineno')))['strip']()) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12));
					}
				}
				return line;
			}
	, 1, [null,null,['self']]);
			$cls_definition['currentLine'] = $method;
			$method = $pyjs__bind_method2('nextLine', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp9,$add14,$bool33,$cmp10,$add13,line,$len9;
				if ((($bool33=((($cmp9=$p['getattr'](self, 'lineno'))===($cmp10=(($len9=$p['getattr'](self, 'lines')) === null?$constant_int_0:
					(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
								$p['len']($len9))))))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					return null;
				}
				line = self['currentLine']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineno', (typeof ($add13=$p['getattr'](self, 'lineno'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'lineno', (typeof ($add13=$p['getattr'](self, 'lineno'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				return line;
			}
	, 1, [null,null,['self']]);
			$cls_definition['nextLine'] = $method;
			$method = $pyjs__bind_method2('isTagClose', function(tagName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tagName = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var mTag,$and16,$bool34,$and15,line,$bool35;
				line = self['currentLine']();
				mTag = self['re_tag_close']['match'](line);
				if ((($bool35=((($bool34=$and15=mTag) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](mTag['group']($constant_int_1), tagName):$and15)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					return true;
				}
				return false;
			}
	, 1, [null,null,['self'],['tagName']]);
			$cls_definition['isTagClose'] = $method;
			$method = $pyjs__bind_method2('nextTag', function(requiredTags) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					requiredTags = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $28,tagFunc,$21,$22,$25,$24,$27,$26,$add15,$add16,tag,$bool36,$bool37,line,$23;
				line = self['nextLine']();
				tag = self['getTag'](line, requiredTags);
				if ((($bool36=self['isTagClose']((typeof ($21=tag).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_0)))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					line = self['nextLine']();
					tag = (typeof ($add15=$p['tuple']([(typeof ($23=tag).__array != 'undefined'?
						((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
							$23.__getitem__($24)):
							$23.__getitem__($constant_int_0)), true]))==typeof ($add16=$p['__getslice'](tag, $constant_int_2, null)) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				tagFunc = $p['sprintf']('tag_%s', (typeof ($25=tag).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_0)));
				if ((($bool37=$p['hasattr'](self, tagFunc)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					return $p['getattr'](self, tagFunc)(tag);
				}
				self['error']($p['sprintf']("Unknown tag '%s'", (typeof ($27=tag).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_0]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_0))));
				return null;
			}
	, 1, [null,null,['self'],['requiredTags']]);
			$cls_definition['nextTag'] = $method;
			$method = $pyjs__bind_method2('parse', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$40,xmlAttrs,$bool41,$bool40,line,properties,rootTag,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31,components,mXML,$bool38,$bool39;
				line = self['currentLine']();
				mXML = self['re_xml']['match'](line);
				if ((($bool38=mXML) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					xmlAttrs = mXML['group']($constant_int_1);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xmlAttrs', self['getAttrs'](xmlAttrs)) : $p['setattr'](self, 'xmlAttrs', self['getAttrs'](xmlAttrs)); 
					line = self['nextLine']();
				}
				rootTag = null;
				properties = self['nextTag']($p['list'](['pyjsglade', 'properties', 'components']));
				if ((($bool39=$p['op_eq']((typeof ($29=properties).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_0]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_0)), 'pyjsglade')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rootTag = (typeof ($31=properties).__array != 'undefined'?
						((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__($constant_int_0));
					properties = self['nextTag']($p['list'](['properties', 'components']));
				}
				if ((($bool40=$p['op_eq']((typeof ($33=properties).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_0)), 'properties')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					properties = (typeof ($35=properties).__array != 'undefined'?
						((typeof $35.__array[$36=$constant_int_2]) != 'undefined'?$35.__array[$36]:
							$35.__getitem__($36)):
							$35.__getitem__($constant_int_2));
					components = (typeof ($37=self['nextTag']($p['list'](['components']))).__array != 'undefined'?
						((typeof $37.__array[$38=$constant_int_1]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__($constant_int_1));
				}
				else {
					components = (typeof ($39=properties).__array != 'undefined'?
						((typeof $39.__array[$40=$constant_int_1]) != 'undefined'?$39.__array[$40]:
							$39.__getitem__($40)):
							$39.__getitem__($constant_int_1));
					properties = $p['dict']([]);
				}
				if ((($bool41=!$p['op_is'](rootTag, null)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					line = self['nextLine']();
					self['getTagClose'](line, rootTag);
				}
				return $p['tuple']([properties, components]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['parse'] = $method;
			$method = $pyjs__bind_method2('tag_pyjsglade', function(tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return tag;
			}
	, 1, [null,null,['self'],['tag']]);
			$cls_definition['tag_pyjsglade'] = $method;
			$method = $pyjs__bind_method2('tag_components', function(tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool45,$bool44,$bool43,$bool42,tags,tagAttrs,tagClosed,$iter3_array,$iter3_idx,$43,$iter3_iter,tagName,$iter3_type,$41,components,line,$42,$iter3_nextval,$44;
				tags = $p['list']([]);
				var $tupleassign2 = $p['__ass_unpack'](tag, 3, null);
				tagName = $tupleassign2[0];
				tagClosed = $tupleassign2[1];
				tagAttrs = $tupleassign2[2];
				if ((($bool43=!(($bool42=tagClosed) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43.__nonzero__=='function'?
								$bool43.__nonzero__() :
								(typeof $bool43.__len__=='function'?
									($bool43.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					while ((($bool45=!(($bool44=self['isTagClose'](tagName)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44.__nonzero__=='function'?
								$bool44.__nonzero__() :
								(typeof $bool44.__len__=='function'?
									($bool44.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
						tags['append'](self['nextTag']($p['list'](['component'])));
					}
					line = self['nextLine']();
					self['getTagClose'](line, tagName);
				}
				components = $p['list']([]);
				$iter3_iter = tags;
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					tag = $iter3_nextval;
					components['append']($p['tuple']([(typeof ($43=(typeof ($41=tag).__array != 'undefined'?
						((typeof $41.__array[$42=$constant_int_1]) != 'undefined'?$41.__array[$42]:
							$41.__getitem__($42)):
							$41.__getitem__($constant_int_1))).__array != 'undefined'?
						((typeof $43.__array[$44='index']) != 'undefined'?$43.__array[$44]:
							$43.__getitem__($44)):
							$43.__getitem__('index')), $p['__getslice'](tag, $constant_int_1, null)]));
					components['sort']();
				}
				return $p['tuple']([tagName, function(){
					var c,$iter4_nextval,$collcomp1,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,$46,$45;
	$collcomp1 = $p['list']();
				$iter4_iter = components;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					c = $iter4_nextval;
					$collcomp1['append']((typeof ($45=c).__array != 'undefined'?
						((typeof $45.__array[$46=$constant_int_1]) != 'undefined'?$45.__array[$46]:
							$45.__getitem__($46)):
							$45.__getitem__($constant_int_1)));
				}

	return $collcomp1;}()]);
			}
	, 1, [null,null,['self'],['tag']]);
			$cls_definition['tag_components'] = $method;
			$method = $pyjs__bind_method2('tag_component', function(tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,childs,$bool50,$bool51,$bool52,$bool53,$iter5_array,$iter5_idx,tagName,$iter5_type,tagAttrs,$49,$48,tagClosed,$47,$60,$62,$bool47,$bool46,tags,props,$bool49,$bool48,$add17,line,$add18,name,$61,$58,$59,$iter5_iter,$50,$51,$52,$53,$54,$55,$56,$57;
				tags = $p['list']([]);
				var $tupleassign3 = $p['__ass_unpack'](tag, 3, null);
				tagName = $tupleassign3[0];
				tagClosed = $tupleassign3[1];
				tagAttrs = $tupleassign3[2];
				if ((($bool47=!(($bool46=tagClosed) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					while ((($bool49=!(($bool48=self['isTagClose'](tagName)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48.__nonzero__=='function'?
								$bool48.__nonzero__() :
								(typeof $bool48.__len__=='function'?
									($bool48.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
							false :
							(typeof $bool49=='object'?
								(typeof $bool49.__nonzero__=='function'?
									$bool49.__nonzero__() :
									(typeof $bool49.__len__=='function'?
										($bool49.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						tags['append'](self['nextTag']($p['list'](['properties', 'components'])));
					}
					line = self['nextLine']();
					self['getTagClose'](line, tagName);
				}
				props = $p['dict']([]);
				childs = $p['list']([]);
				$iter5_iter = tags;
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					tag = $iter5_nextval;
					if ((($bool50=$p['op_eq']((typeof ($47=tag).__array != 'undefined'?
						((typeof $47.__array[$48=$constant_int_0]) != 'undefined'?$47.__array[$48]:
							$47.__getitem__($48)):
							$47.__getitem__($constant_int_0)), 'properties')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
						name = (typeof ($51=(typeof ($49=tag).__array != 'undefined'?
							((typeof $49.__array[$50=$constant_int_1]) != 'undefined'?$49.__array[$50]:
								$49.__getitem__($50)):
								$49.__getitem__($constant_int_1))).__array != 'undefined'?
							((typeof $51.__array[$52='name']) != 'undefined'?$51.__array[$52]:
								$51.__getitem__($52)):
								$51.__getitem__('name'));
						if ((($bool52=!(($bool51=props.__contains__(name)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51.__nonzero__=='function'?
									$bool51.__nonzero__() :
									(typeof $bool51.__len__=='function'?
										($bool51.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
							props.__setitem__(name, $p['dict']([]));
						}
						(typeof ($53=props).__array != 'undefined'?
							((typeof $53.__array[$54=name]) != 'undefined'?$53.__array[$54]:
								$53.__getitem__($54)):
								$53.__getitem__(name))['update']((typeof ($55=tag).__array != 'undefined'?
							((typeof $55.__array[$56=$constant_int_2]) != 'undefined'?$55.__array[$56]:
								$55.__getitem__($56)):
								$55.__getitem__($constant_int_2)));
					}
					else if ((($bool53=$p['op_eq']((typeof ($57=tag).__array != 'undefined'?
						((typeof $57.__array[$58=$constant_int_0]) != 'undefined'?$57.__array[$58]:
							$57.__getitem__($58)):
							$57.__getitem__($constant_int_0)), 'components')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
						childs = (typeof ($add17=childs)==typeof ($add18=(typeof ($59=tag).__array != 'undefined'?
							((typeof $59.__array[$60=$constant_int_1]) != 'undefined'?$59.__array[$60]:
								$59.__getitem__($60)):
								$59.__getitem__($constant_int_1))) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
					}
					else {
						if (!( $p['sprintf']('Unknown tag found: %s', $p['repr']((typeof ($61=tag).__array != 'undefined'?
							((typeof $61.__array[$62=$constant_int_0]) != 'undefined'?$61.__array[$62]:
								$61.__getitem__($62)):
								$61.__getitem__($constant_int_0)))) )) {
						   throw $p['AssertionError']();
						 }
					}
				}
				return $p['tuple']([tagName, tagAttrs, props, childs]);
			}
	, 1, [null,null,['self'],['tag']]);
			$cls_definition['tag_component'] = $method;
			$method = $pyjs__bind_method2('tag_properties', function(tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool54,$bool55,$bool56,$bool57,$iter6_type,tagClosed,$bool58,tagName,$iter6_iter,$iter6_nextval,tagAttrs,$69,$68,props,$65,$64,$67,$66,$63,$iter6_idx,tags,$iter6_array,line,$72,$70,$71;
				tags = $p['list']([]);
				var $tupleassign4 = $p['__ass_unpack'](tag, 3, null);
				tagName = $tupleassign4[0];
				tagClosed = $tupleassign4[1];
				tagAttrs = $tupleassign4[2];
				if ((($bool55=!(($bool54=tagClosed) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54.__nonzero__=='function'?
							$bool54.__nonzero__() :
							(typeof $bool54.__len__=='function'?
								($bool54.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
					while ((($bool57=!(($bool56=self['isTagClose'](tagName)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56.__nonzero__=='function'?
								$bool56.__nonzero__() :
								(typeof $bool56.__len__=='function'?
									($bool56.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
						tags['append'](self['nextTag']($p['list'](['properties', 'property'])));
					}
					line = self['nextLine']();
					self['getTagClose'](line, tagName);
				}
				props = $p['dict']([]);
				$iter6_iter = tags;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					tag = $iter6_nextval;
					if ((($bool58=$p['op_eq']((typeof ($63=tag).__array != 'undefined'?
						((typeof $63.__array[$64=$constant_int_0]) != 'undefined'?$63.__array[$64]:
							$63.__getitem__($64)):
							$63.__getitem__($constant_int_0)), 'properties')) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
						props.__setitem__((typeof ($69=(typeof ($67=tag).__array != 'undefined'?
							((typeof $67.__array[$68=$constant_int_1]) != 'undefined'?$67.__array[$68]:
								$67.__getitem__($68)):
								$67.__getitem__($constant_int_1))).__array != 'undefined'?
							((typeof $69.__array[$70='name']) != 'undefined'?$69.__array[$70]:
								$69.__getitem__($70)):
								$69.__getitem__('name')), (typeof ($65=tag).__array != 'undefined'?
							((typeof $65.__array[$66=$constant_int_2]) != 'undefined'?$65.__array[$66]:
								$65.__getitem__($66)):
								$65.__getitem__($constant_int_2)));
					}
					else {
						props['update']((typeof ($71=tag).__array != 'undefined'?
							((typeof $71.__array[$72=$constant_int_1]) != 'undefined'?$71.__array[$72]:
								$71.__getitem__($72)):
								$71.__getitem__($constant_int_1)));
					}
				}
				return $p['tuple']([tagName, tagAttrs, props]);
			}
	, 1, [null,null,['self'],['tag']]);
			$cls_definition['tag_properties'] = $method;
			$method = $pyjs__bind_method2('tag_property', function(tag) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f706af0d390849028acd4ff66d1d321c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool60,$79,$76,$77,$74,tags,tagAttrs,tagClosed,$75,$bool59,$80,tagName,line,$73,$78;
				tags = $p['list']([]);
				var $tupleassign5 = $p['__ass_unpack'](tag, 3, null);
				tagName = $tupleassign5[0];
				tagClosed = $tupleassign5[1];
				tagAttrs = $tupleassign5[2];
				if ((($bool60=!(($bool59=tagClosed) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
					line = self['nextLine']();
					self['getTagClose'](line, tagName);
				}
				return $p['tuple']([tagName, $p['dict']([[(typeof ($75=(typeof ($73=tag).__array != 'undefined'?
					((typeof $73.__array[$74=$constant_int_2]) != 'undefined'?$73.__array[$74]:
						$73.__getitem__($74)):
						$73.__getitem__($constant_int_2))).__array != 'undefined'?
					((typeof $75.__array[$76='name']) != 'undefined'?$75.__array[$76]:
						$75.__getitem__($76)):
						$75.__getitem__('name')), (typeof ($79=(typeof ($77=tag).__array != 'undefined'?
					((typeof $77.__array[$78=$constant_int_2]) != 'undefined'?$77.__array[$78]:
						$77.__getitem__($78)):
						$77.__getitem__($constant_int_2))).__array != 'undefined'?
					((typeof $79.__array[$80='value']) != 'undefined'?$79.__array[$80]:
						$79.__getitem__($80)):
						$79.__getitem__('value'))]])]);
			}
	, 1, [null,null,['self'],['tag']]);
			$cls_definition['tag_property'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('XMLFile', $p['tuple']($bases), $data);
		})();
		if ((($bool61=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
			$m['sys'] = $p['___import___']('sys', 'pyjamas.builder');
			$m['lines'] = $p['open']((typeof ($81=$p['getattr']($m['sys'], 'argv')).__array != 'undefined'?
				((typeof $81.__array[$82=$constant_int_1]) != 'undefined'?$81.__array[$82]:
					$81.__getitem__($82)):
					$81.__getitem__($constant_int_1)))['read']();
			$m['xmlFile'] = $m['XMLFile']($m['lines']);
			var $tupleassign6 = $p['__ass_unpack']($m['xmlFile']['parse'](), 2, null);
			$m['tagName'] = $tupleassign6[0];
			$m['components'] = $tupleassign6[1];
			$m['dump'] = function(component) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var c,$84,$83,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
				$iter7_iter = (typeof ($83=component).__array != 'undefined'?
					((typeof $83.__array[$84=$constant_int_2]) != 'undefined'?$83.__array[$84]:
						$83.__getitem__($84)):
						$83.__getitem__($constant_int_2));
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					c = $iter7_nextval;
					$m['dump'](c);
				}
				return null;
			};
			$m['dump'].__name__ = 'dump';

			$m['dump'].__bind_type__ = 0;
			$m['dump'].__args__ = [null,null,['component']];
			$iter8_iter = $m['components'];
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				$m['component'] = $iter8_nextval;
				$iter9_iter = (typeof ($85=$m['component']).__array != 'undefined'?
					((typeof $85.__array[$86=$constant_int_2]) != 'undefined'?$85.__array[$86]:
						$85.__getitem__($86)):
						$85.__getitem__($constant_int_2));
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					$m['c'] = $iter9_nextval;
					$m['dump']($m['c']);
				}
			}
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.builder.XMLFile */


/* end module: pyjamas.builder.XMLFile */


/*
PYJS_DEPS: ['re', 'sys']
*/
