/* start module: string */
$pyjs['loaded_modules']['string'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['string']['__was_initialized__']) return $pyjs['loaded_modules']['string'];
	var $m = $pyjs['loaded_modules']['string'];
	$m['__repr__'] = function() { return '<module: string>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'string';
	$m['__name__'] = __mod_name__;
	try {
		var $add14,$add11,$add12,$add13,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_0 = new $p['int'](0);
		$m['whitespace'] = ' \t\n\r\x0b\x0c';
		$m['lowercase'] = 'abcdefghijklmnopqrstuvwxyz';
		$m['uppercase'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$m['letters'] = (typeof ($add1=$m['lowercase'])==typeof ($add2=$m['uppercase']) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		$m['ascii_lowercase'] = $m['lowercase'];
		$m['ascii_uppercase'] = $m['uppercase'];
		$m['ascii_letters'] = (typeof ($add3=$m['ascii_lowercase'])==typeof ($add4=$m['ascii_uppercase']) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4));
		$m['digits'] = '0123456789';
		$m['hexdigits'] = (typeof ($add7=(typeof ($add5=$m['digits'])==typeof ($add6='abcdef') && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6)))==typeof ($add8='ABCDEF') && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8));
		$m['octdigits'] = '01234567';
		$m['punctuation'] = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
		$m['printable'] = (typeof ($add13=(typeof ($add11=(typeof ($add9=$m['digits'])==typeof ($add10=$m['letters']) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10)))==typeof ($add12=$m['punctuation']) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12)))==typeof ($add14=$m['whitespace']) && (typeof $add13=='number'||typeof $add13=='string')?
			$add13+$add14:
			$p['op_add']($add13,$add14));
		$m['l'] = $p['map']($p['chr'], $p['xrange']($constant_int_256));
		$m['_idmap'] = $p['str']('')['join']($m['l']);
		delete $m['l'];
		$m['capwords'] = function(s, sep) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
			var $iter1_nextval,$iter1_type,$iter1_iter,$bool1,$iter1_array,x,$iter1_idx;
			if ((($bool1=$p['op_is'](sep, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				sep = ' ';
			}
			return sep['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter1_iter = s['$$split'](sep);
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							x = $iter1_nextval;
							$yield_value = x['capitalize']();
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
		};
		$m['capwords']['__name__'] = 'capwords';

		$m['capwords']['__bind_type__'] = 0;
		$m['capwords']['__args__'] = [null,null,['s'],['sep', null]];
		$m['_idmapL'] = null;
		$m['maketrans'] = function(fromstr, tostr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,L,$bool2,$bool3,$len2,$len3,$bool4,$len1,$4,$2,$3,$iter2_array,$1;
			if ((($bool2=!$p['op_eq']((($len1=fromstr) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))), (($len2=tostr) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'maketrans arguments must have same length';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ((($bool4=!(($bool3=$m['_idmapL']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['_idmapL'] = $p['list']($m['_idmap']);
			}
			L = $p['__getslice']($m['_idmapL'], 0, null);
			fromstr = $p['map']($p['ord'], fromstr);
			$iter2_iter = $p['range']((($len3=fromstr) === null?$constant_int_0:
				(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
							$p['len']($len3))))));
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				L['__setitem__']((typeof ($3=fromstr)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](i)), (typeof ($1=tostr)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i)));
			}
			return ''['join'](L);
		};
		$m['maketrans']['__name__'] = 'maketrans';

		$m['maketrans']['__bind_type__'] = 0;
		$m['maketrans']['__args__'] = [null,null,['fromstr'],['tostr']];
		$m['_re'] = $p['___import___']('re', null, null, false);
		$m['_multimap'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'string';
			$cls_definition['__md5__'] = 'ea1c794b2d8efdbdd7b884398d3ac149';
			$method = $pyjs__bind_method2('__init__', function(primary, secondary) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					primary = arguments[1];
					secondary = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ea1c794b2d8efdbdd7b884398d3ac149') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_primary', primary) : $p['setattr'](self, '_primary', primary); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_secondary', secondary) : $p['setattr'](self, '_secondary', secondary); 
				return null;
			}
	, 1, [null,null,['self'],['primary'],['secondary']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__getitem__', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ea1c794b2d8efdbdd7b884398d3ac149') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $8,$pyjs_try_err,$6,$7,$5;
				try {
					return (typeof ($5=$p['getattr'](self, '_primary'))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=key]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](key));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						return (typeof ($7=$p['getattr'](self, '_secondary'))['__array'] != 'undefined'?
							((typeof $7['__array'][$8=key]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__'](key));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['__getitem__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_multimap', $p['tuple']($bases), $data);
		})();
		$m['Template'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'string';
			$cls_definition['__md5__'] = '3dcdcd6a5050af166e0f7aec3ac8386b';
			$cls_definition['delimiter'] = '$';
			$cls_definition['idpattern'] = '[_a-z][_a-z0-9]*';
			$cls_definition['regexp'] = '%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())';
			$method = $pyjs__bind_method2('__init__', function(template) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					template = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_definePattern']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('template', template) : $p['setattr'](self, 'template', template); 
				return null;
			}
	, 1, [null,null,['self'],['template']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_definePattern', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16,$mod1,$mod2,regexp;
				regexp = (typeof ($mod1=$p['getattr'](self, 'regexp'))==typeof ($mod2=$p['dict']([['delim', (typeof ($add15='\\')==typeof ($add16=$p['getattr'](self, 'delimiter')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))], ['id', $p['getattr'](self, 'idpattern')]])) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pattern', $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'))) : $p['setattr'](self, 'pattern', $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_definePattern'] = $method;
			$method = $pyjs__bind_method2('_invalid', function(mo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					mo = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$add20,j,$add19,$len4,$add17,$add18;
				i = mo['start']();
				j = $p['min']((typeof ($add17=i)==typeof ($add18=$constant_int_10) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)), (($len4=$p['getattr'](self, 'template')) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))));
				throw ($p['ValueError']((typeof ($add19='Invalid placeholder in string: ')==typeof ($add20=$p['__getslice']($p['getattr'](self, 'template'), i, j)) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))));
				return null;
			}
	, 1, [null,null,['self'],['mo']]);
			$cls_definition['_invalid'] = $method;
			$method = $pyjs__bind_method2('substitute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kws != 'undefined') args['__array']['push'](kws);
						var kws = arguments[arguments['length']+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kws != 'undefined') args['__array']['push'](kws);
						kws = arguments[arguments['length']+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kws == 'undefined') {
					kws = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kws = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var convert,$cmp1,$9,$12,$cmp2,mapping,$len5,$bool6,$bool7,$bool5,$10,$bool8,$11;
				if ((($bool5=((($cmp1=(($len5=args) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))))===($cmp2=$constant_int_1)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					throw ($p['TypeError']('Too many positional arguments'));
				}
				if ((($bool7=!(($bool6=args) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					mapping = kws;
				}
				else if ((($bool8=kws) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					mapping = $m['_multimap'](kws, (typeof ($9=args)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_0)));
				}
				else {
					mapping = (typeof ($11=args)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_0));
				}
				convert = function(mo) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $14,named,$or1,val,$or2,$bool10,$bool11,$13,$bool9,$bool12;
					named = ((($bool9=$or1=mo['group']($constant_int_2)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:mo['group']($constant_int_3));
					if ((($bool10=!$p['op_is'](named, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						val = (typeof ($13=mapping)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=named]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](named));
						return $p['sprintf']('%s', $p['tuple']([val]));
					}
					if ((($bool11=!$p['op_is'](mo['group']($constant_int_1), null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						return $p['getattr'](self, 'delimiter');
					}
					if ((($bool12=!$p['op_is'](mo['group']($constant_int_4), null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						self['_invalid'](mo);
					}
					throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
					return null;
				};
				convert['__name__'] = 'convert';

				convert['__bind_type__'] = 0;
				convert['__args__'] = [null,null,['mo']];
				return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
			}
	, 1, ['args',['kws'],['self']]);
			$cls_definition['substitute'] = $method;
			$method = $pyjs__bind_method2('safe_substitute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kws != 'undefined') args['__array']['push'](kws);
						var kws = arguments[arguments['length']+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kws != 'undefined') args['__array']['push'](kws);
						kws = arguments[arguments['length']+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kws == 'undefined') {
					kws = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kws = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $cmp4,$16,$bool13,$cmp3,$15,$18,$bool14,$bool15,$bool16,mapping,$len6,$17,convert;
				if ((($bool13=((($cmp3=(($len6=args) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6))))))===($cmp4=$constant_int_1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					throw ($p['TypeError']('Too many positional arguments'));
				}
				if ((($bool15=!(($bool14=args) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					mapping = kws;
				}
				else if ((($bool16=kws) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					mapping = $m['_multimap'](kws, (typeof ($15=args)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_0]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_0)));
				}
				else {
					mapping = (typeof ($17=args)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_0));
				}
				convert = function(mo) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $bool18,$add28,named,$22,$bool19,$add21,$20,$add22,$add25,$19,$add27,$bool17,$21,$pyjs_try_err,$bool20,braced,$add24,$add26,$add23;
					named = mo['group']($constant_int_2);
					if ((($bool17=!$p['op_is'](named, null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						try {
							return $p['sprintf']('%s', $p['tuple']([(typeof ($19=mapping)['__array'] != 'undefined'?
								((typeof $19['__array'][$20=named]) != 'undefined'?$19['__array'][$20]:
									$19['__getitem__']($20)):
									$19['__getitem__'](named))]));
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								return (typeof ($add21=$p['getattr'](self, 'delimiter'))==typeof ($add22=named) && (typeof $add21=='number'||typeof $add21=='string')?
									$add21+$add22:
									$p['op_add']($add21,$add22));
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
					braced = mo['group']($constant_int_3);
					if ((($bool18=!$p['op_is'](braced, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						try {
							return $p['sprintf']('%s', $p['tuple']([(typeof ($21=mapping)['__array'] != 'undefined'?
								((typeof $21['__array'][$22=braced]) != 'undefined'?$21['__array'][$22]:
									$21['__getitem__']($22)):
									$21['__getitem__'](braced))]));
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								return (typeof ($add27=(typeof ($add25=(typeof ($add23=$p['getattr'](self, 'delimiter'))==typeof ($add24='{') && (typeof $add23=='number'||typeof $add23=='string')?
									$add23+$add24:
									$p['op_add']($add23,$add24)))==typeof ($add26=braced) && (typeof $add25=='number'||typeof $add25=='string')?
									$add25+$add26:
									$p['op_add']($add25,$add26)))==typeof ($add28='}') && (typeof $add27=='number'||typeof $add27=='string')?
									$add27+$add28:
									$p['op_add']($add27,$add28));
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
					if ((($bool19=!$p['op_is'](mo['group']($constant_int_1), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						return $p['getattr'](self, 'delimiter');
					}
					if ((($bool20=!$p['op_is'](mo['group']($constant_int_4), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						return $p['getattr'](self, 'delimiter');
					}
					throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
					return null;
				};
				convert['__name__'] = 'convert';

				convert['__bind_type__'] = 0;
				convert['__args__'] = [null,null,['mo']];
				return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
			}
	, 1, ['args',['kws'],['self']]);
			$cls_definition['safe_substitute'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Template', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end string */


/* end module: string */


/*
PYJS_DEPS: ['re']
*/
