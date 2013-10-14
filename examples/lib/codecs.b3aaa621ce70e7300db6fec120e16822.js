/* start module: codecs */
$pyjs['loaded_modules']['codecs'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['codecs']['__was_initialized__']) return $pyjs['loaded_modules']['codecs'];
	var $m = $pyjs['loaded_modules']['codecs'];
	$m['__repr__'] = function() { return '<module: codecs>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'codecs';
	$m['__name__'] = __mod_name__;
	try {
		var $bool63,$bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_8000 = new $p['int'](8000);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_72 = new $p['int'](72);
		var $constant_int_0 = new $p['int'](0);
		$m['__builtin__'] = $p['___import___']('__builtin__', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['__all__'] = $p['list'](['register', 'lookup', 'open', 'EncodedFile', 'BOM', 'BOM_BE', 'BOM_LE', 'BOM32_BE', 'BOM32_LE', 'BOM64_BE', 'BOM64_LE', 'BOM_UTF8', 'BOM_UTF16', 'BOM_UTF16_LE', 'BOM_UTF16_BE', 'BOM_UTF32', 'BOM_UTF32_LE', 'BOM_UTF32_BE', 'strict_errors', 'ignore_errors', 'replace_errors', 'xmlcharrefreplace_errors', 'register_error', 'lookup_error']);
		$m['BOM_UTF8'] = '\xef\xbb\xbf';
		$m['$assign1'] = '\xff\xfe';
		$m['BOM_LE'] = $m['$assign1'];
		$m['BOM_UTF16_LE'] = $m['$assign1'];
		$m['$assign2'] = '\xfe\xff';
		$m['BOM_BE'] = $m['$assign2'];
		$m['BOM_UTF16_BE'] = $m['$assign2'];
		$m['BOM_UTF32_LE'] = '\xff\xfe\x00\x00';
		$m['BOM_UTF32_BE'] = '\x00\x00\xfe\xff';
		if ((($bool1=$p['op_eq']($p['getattr']($m['sys'], 'byteorder'), 'little')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['$assign3'] = $m['BOM_UTF16_LE'];
			$m['BOM'] = $m['$assign3'];
			$m['BOM_UTF16'] = $m['$assign3'];
			$m['BOM_UTF32'] = $m['BOM_UTF32_LE'];
		}
		else {
			$m['$assign4'] = $m['BOM_UTF16_BE'];
			$m['BOM'] = $m['$assign4'];
			$m['BOM_UTF16'] = $m['$assign4'];
			$m['BOM_UTF32'] = $m['BOM_UTF32_BE'];
		}
		$m['BOM32_LE'] = $m['BOM_UTF16_LE'];
		$m['BOM32_BE'] = $m['BOM_UTF16_BE'];
		$m['BOM64_LE'] = $m['BOM_UTF32_LE'];
		$m['BOM64_BE'] = $m['BOM_UTF32_BE'];
		$m['CodecInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '04186e2a5428304d1466a546b4a832ea';
			$method = $pyjs__bind_method2('__new__', function(cls, encode, decode, streamreader, streamwriter, incrementalencoder, incrementaldecoder, name) {
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 8, arguments['length']);
				if (typeof streamreader == 'undefined') streamreader=arguments['callee']['__args__'][5][1];
				if (typeof streamwriter == 'undefined') streamwriter=arguments['callee']['__args__'][6][1];
				if (typeof incrementalencoder == 'undefined') incrementalencoder=arguments['callee']['__args__'][7][1];
				if (typeof incrementaldecoder == 'undefined') incrementaldecoder=arguments['callee']['__args__'][8][1];
				if (typeof name == 'undefined') name=arguments['callee']['__args__'][9][1];
				var self;
				self = $p['tuple']['__new__'](cls, $p['tuple']([encode, decode, streamreader, streamwriter]));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', name) : $p['setattr'](self, '$$name', name); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('encode', encode) : $p['setattr'](self, 'encode', encode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('decode', decode) : $p['setattr'](self, 'decode', decode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('incrementalencoder', incrementalencoder) : $p['setattr'](self, 'incrementalencoder', incrementalencoder); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('incrementaldecoder', incrementaldecoder) : $p['setattr'](self, 'incrementaldecoder', incrementaldecoder); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('streamwriter', streamwriter) : $p['setattr'](self, 'streamwriter', streamwriter); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('streamreader', streamreader) : $p['setattr'](self, 'streamreader', streamreader); 
				return self;
			}
	, 3, [null,null,['cls'],['encode'],['decode'],['streamreader', null],['streamwriter', null],['incrementalencoder', null],['incrementaldecoder', null],['name', null]]);
			$cls_definition['__new__'] = $method;
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
					if (self.prototype['__md5__'] !== '04186e2a5428304d1466a546b4a832ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['sprintf']('<%s.%s object for encoding %s at 0x%x>', $p['tuple']([$p['getattr']($p['getattr'](self, '__class__'), '__module__'), $p['getattr']($p['getattr'](self, '__class__'), '__name__'), $p['getattr'](self, '$$name'), (typeof id == "undefined"?$m['id']:id)(self)]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			var $bases = new Array($p['tuple']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CodecInfo', $p['tuple']($bases), $data);
		})();
		$m['Codec'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '0668fba6c6eabaa9c54155e89d8f14d9';
			$method = $pyjs__bind_method2('encode', function(input, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0668fba6c6eabaa9c54155e89d8f14d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['encode'] = $method;
			$method = $pyjs__bind_method2('decode', function(input, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0668fba6c6eabaa9c54155e89d8f14d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['decode'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Codec', $p['tuple']($bases), $data);
		})();
		$m['IncrementalEncoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '33fe4dbcb36c81a9f8f08bf52b980062';
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('encode', function(input, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
				var $$final;
				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['encode'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $constant_int_0;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IncrementalEncoder', $p['tuple']($bases), $data);
		})();
		$m['BufferedIncrementalEncoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = 'e5e66791e22432b86b922f348b3dd6f1';
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

				$m['IncrementalEncoder']['__init__'](self, errors);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_buffer_encode', function(input, errors, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					$$final = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$final;
				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
			$cls_definition['_buffer_encode'] = $method;
			$method = $pyjs__bind_method2('encode', function(input, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
				var $add2,consumed,$add1,result,data,$$final;
				data = (typeof ($add1=$p['getattr'](self, 'buffer'))==typeof ($add2=input) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				var $tupleassign1 = $p['__ass_unpack'](self['_buffer_encode'](data, $p['getattr'](self, 'errors'), $$final), 2, null);
				result = $tupleassign1[0];
				consumed = $tupleassign1[1];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', $p['__getslice'](data, consumed, null)) : $p['setattr'](self, 'buffer', $p['__getslice'](data, consumed, null)); 
				return result;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['encode'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['IncrementalEncoder']['reset'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$or1,$or2;
				return ((($bool2=$or1=$p['getattr'](self, 'buffer')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$constant_int_0);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$or3,$or4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', ((($bool3=$or3=state) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:'')) : $p['setattr'](self, 'buffer', ((($bool3=$or3=state) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:'')); 
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			var $bases = new Array($m['IncrementalEncoder']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferedIncrementalEncoder', $p['tuple']($bases), $data);
		})();
		$m['IncrementalDecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = 'b06a9419b9e935325b52a2a9ff2b8f61';
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('decode', function(input, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
				var $$final;
				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['decode'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['tuple'](['', $constant_int_0]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IncrementalDecoder', $p['tuple']($bases), $data);
		})();
		$m['BufferedIncrementalDecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '24770d0d7d6d34c1ed275aceaccf3e16';
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

				$m['IncrementalDecoder']['__init__'](self, errors);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_buffer_decode', function(input, errors, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					$$final = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$final;
				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
			$cls_definition['_buffer_decode'] = $method;
			$method = $pyjs__bind_method2('decode', function(input, $$final) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
				var consumed,$add3,result,$add4,data,$$final;
				data = (typeof ($add3=$p['getattr'](self, 'buffer'))==typeof ($add4=input) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				var $tupleassign2 = $p['__ass_unpack'](self['_buffer_decode'](data, $p['getattr'](self, 'errors'), $$final), 2, null);
				result = $tupleassign2[0];
				consumed = $tupleassign2[1];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', $p['__getslice'](data, consumed, null)) : $p['setattr'](self, 'buffer', $p['__getslice'](data, consumed, null)); 
				return result;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['decode'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['IncrementalDecoder']['reset'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['tuple']([$p['getattr'](self, 'buffer'), $constant_int_0]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $2,$1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buffer', (typeof ($1=state)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))) : $p['setattr'](self, 'buffer', (typeof ($1=state)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))); 
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			var $bases = new Array($m['IncrementalDecoder']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferedIncrementalDecoder', $p['tuple']($bases), $data);
		})();
		$m['StreamWriter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '361db611cdeb5b0d170056a88981911f';
			$method = $pyjs__bind_method2('__init__', function(stream, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					errors = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('stream', stream) : $p['setattr'](self, 'stream', stream); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				return null;
			}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('write', function(object) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					object = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,consumed;
				var $tupleassign3 = $p['__ass_unpack'](self['encode'](object, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign3[0];
				consumed = $tupleassign3[1];
				self['stream']['write'](data);
				return null;
			}
	, 1, [null,null,['self'],['object']]);
			$cls_definition['write'] = $method;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['write'](''['join'](list));
				return null;
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];
				var $and1,$bool5,$bool4,$and2;
				self['stream']['seek'](offset, whence);
				if ((($bool5=((($bool4=$and1=$p['op_eq'](whence, $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](offset, $constant_int_0):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['reset']();
				}
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

				return getattr(getattr(self, 'stream'), name);
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['stream']['close']();
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			var $bases = new Array($m['Codec']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamWriter', $p['tuple']($bases), $data);
		})();
		$m['StreamReader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '007769940b50633f33b3e465f886b00e';
			$method = $pyjs__bind_method2('__init__', function(stream, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					errors = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('stream', stream) : $p['setattr'](self, 'stream', stream); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bytebuffer', '') : $p['setattr'](self, 'bytebuffer', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				return null;
			}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('decode', function(input, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

				throw ($p['NotImplementedError']);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['decode'] = $method;
			$method = $pyjs__bind_method2('read', function(size, chars, firstline) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					chars = arguments[2];
					firstline = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof chars == 'undefined') chars=arguments['callee']['__args__'][4][1];
				if (typeof firstline == 'undefined') firstline=arguments['callee']['__args__'][5][1];
				var $bool18,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,result,$cmp12,$pyjs_try_err,$add6,newdata,$add7,$add5,$cmp14,$bool6,$bool7,$cmp13,newchars,$bool8,$bool9,data,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,exc,$cmp3,$cmp2,decodedbytes,$cmp9,$cmp8,$len2,$len3,$len1,$cmp11,$add8,lines,$cmp10;
				if ((($bool6=$p['getattr'](self, 'linebuffer')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', ''['join']($p['getattr'](self, 'linebuffer'))) : $p['setattr'](self, 'charbuffer', ''['join']($p['getattr'](self, 'linebuffer'))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				}
				while ((($bool7=true) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					if ((($bool8=((($cmp1=chars)===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						if ((($bool9=((($cmp3=size)===($cmp4=$constant_int_0)?0:
							(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
								($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
								$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							if ((($bool10=$p['getattr'](self, 'charbuffer')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
								break;
							}
						}
						else if ((($bool11=((((($cmp5=(($len1=$p['getattr'](self, 'charbuffer')) === null?$constant_int_0:
							(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
								(typeof $len1['__len__'] == 'function'?$len1['__len__']():
									(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
										$p['len']($len1))))))===($cmp6=size)?0:
							(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
								($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
								$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							break;
						}
					}
					else {
						if ((($bool12=((((($cmp7=(($len2=$p['getattr'](self, 'charbuffer')) === null?$constant_int_0:
							(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
								(typeof $len2['__len__'] == 'function'?$len2['__len__']():
									(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
										$p['len']($len2))))))===($cmp8=chars)?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
							break;
						}
					}
					if ((($bool13=((($cmp9=size)===($cmp10=$constant_int_0)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						newdata = self['stream']['read']();
					}
					else {
						newdata = self['stream']['read'](size);
					}
					data = (typeof ($add5=$p['getattr'](self, 'bytebuffer'))==typeof ($add6=newdata) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					try {
						var $tupleassign4 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
						newchars = $tupleassign4[0];
						decodedbytes = $tupleassign4[1];
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == (typeof UnicodeDecodeError == "undefined"?$m['UnicodeDecodeError']:UnicodeDecodeError)['__name__'])||$p['_isinstance']($pyjs_try_err,(typeof UnicodeDecodeError == "undefined"?$m['UnicodeDecodeError']:UnicodeDecodeError))) {
							exc = $pyjs_try_err;
							if ((($bool14=firstline) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
								var $tupleassign5 = $p['__ass_unpack'](self['decode']($p['__getslice'](data, 0, $p['getattr'](exc, 'start')), $p['getattr'](self, 'errors')), 2, null);
								newchars = $tupleassign5[0];
								decodedbytes = $tupleassign5[1];
								lines = newchars['splitlines'](true);
								if ((($bool15=((($cmp11=(($len3=lines) === null?$constant_int_0:
									(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
										(typeof $len3['__len__'] == 'function'?$len3['__len__']():
											(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
												$p['len']($len3))))))===($cmp12=$constant_int_1)?0:
									(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
										($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
										$p['cmp']($cmp11, $cmp12))) < 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
									throw ($pyjs['__last_exception__']?
										$pyjs['__last_exception__']['error']:
										$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
								}
							}
							else {
								throw ($pyjs['__last_exception__']?
									$pyjs['__last_exception__']['error']:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bytebuffer', $p['__getslice'](data, decodedbytes, null)) : $p['setattr'](self, 'bytebuffer', $p['__getslice'](data, decodedbytes, null)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', (typeof ($add7=$p['getattr'](self, 'charbuffer'))==typeof ($add8=newchars) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))) : $p['setattr'](self, 'charbuffer', (typeof ($add7=$p['getattr'](self, 'charbuffer'))==typeof ($add8=newchars) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))); 
					if ((($bool17=!(($bool16=newdata) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						break;
					}
				}
				if ((($bool18=((($cmp13=chars)===($cmp14=$constant_int_0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					result = $p['getattr'](self, 'charbuffer');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				}
				else {
					result = $p['__getslice']($p['getattr'](self, 'charbuffer'), 0, chars);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', $p['__getslice']($p['getattr'](self, 'charbuffer'), chars, null)) : $p['setattr'](self, 'charbuffer', $p['__getslice']($p['getattr'](self, 'charbuffer'), chars, null)); 
				}
				return result;
			}
	, 1, [null,null,['self'],['size', (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))],['chars', (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))],['firstline', false]]);
			$cls_definition['read'] = $method;
			$method = $pyjs__bind_method2('readline', function(size, keepends) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					keepends = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof keepends == 'undefined') keepends=arguments['callee']['__args__'][4][1];
				var $bool19,$mul2,$add12,$18,$cmp18,$9,$add18,$bool32,$19,$cmp20,$4,line0withend,$cmp19,$or7,$21,$20,$22,$bool30,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$augexpr1,$24,$bool39,$bool29,$bool28,$bool40,$or5,line0withoutend,$or6,$bool34,$15,$and3,$and4,$or8,$augsub1,$cmp15,$add15,$cmp17,$cmp16,$add10,$add11,$8,readsize,$6,$7,line,$5,data,$3,$mul1,$14,$add14,$16,$17,$10,$11,$12,$13,lines,$add16,$len6,$bool33,$len4,$len5,$bool36,$bool37,$add13,$bool35,$bool31,$bool38,$add9,$23,$add17;
				if ((($bool19=$p['getattr'](self, 'linebuffer')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					line = (typeof ($3=$p['getattr'](self, 'linebuffer'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_0));
					$p['getattr'](self, 'linebuffer')['__delitem__']($constant_int_0);
					if ((($bool20=$p['op_eq']((($len4=$p['getattr'](self, 'linebuffer')) === null?$constant_int_0:
						(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
							(typeof $len4['__len__'] == 'function'?$len4['__len__']():
								(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
									$p['len']($len4))))), $constant_int_1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', (typeof ($5=$p['getattr'](self, 'linebuffer'))['__array'] != 'undefined'?
							((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__']($constant_int_0))) : $p['setattr'](self, 'charbuffer', (typeof ($5=$p['getattr'](self, 'linebuffer'))['__array'] != 'undefined'?
							((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__']($constant_int_0))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
					}
					if ((($bool22=!(($bool21=keepends) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						line = (typeof ($7=line['splitlines'](false))['__array'] != 'undefined'?
							((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__']($constant_int_0));
					}
					return line;
				}
				readsize = ((($bool23=$or5=size) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23['__nonzero__']=='function'?
							$bool23['__nonzero__']() :
							(typeof $bool23['__len__']=='function'?
								($bool23['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:$constant_int_72);
				line = '';
				while ((($bool24=true) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					data = $pyjs_kwargs_call(self, 'read', null, null, [{'firstline':true}, readsize]);
					if ((($bool25=data) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						if ((($bool26=data['endswith']('\r')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
							data = (typeof ($add9=data)==typeof ($add10=$pyjs_kwargs_call(self, 'read', null, null, [{'size':$constant_int_1, 'chars':$constant_int_1}])) && (typeof $add9=='number'||typeof $add9=='string')?
								$add9+$add10:
								$p['op_add']($add9,$add10));
						}
					}
					line = (typeof ($add11=line)==typeof ($add12=data) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
					lines = line['splitlines'](true);
					if ((($bool27=lines) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						if ((($bool28=((($cmp15=(($len5=lines) === null?$constant_int_0:
							(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
								(typeof $len5['__len__'] == 'function'?$len5['__len__']():
									(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
										$p['len']($len5))))))===($cmp16=$constant_int_1)?0:
							(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
								($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
								$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
							line = (typeof ($9=lines)['__array'] != 'undefined'?
								((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
									$9['__getitem__']($10)):
									$9['__getitem__']($constant_int_0));
							lines['__delitem__']($constant_int_0);
							if ((($bool29=((($cmp17=(($len6=lines) === null?$constant_int_0:
								(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
									(typeof $len6['__len__'] == 'function'?$len6['__len__']():
										(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
											$p['len']($len6))))))===($cmp18=$constant_int_1)?0:
								(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
									($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
									$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
								var $augsub1 = (typeof ($usub3=$constant_int_1)=='number'?
									-$usub3:
									$p['op_usub']($usub3));
								var $augexpr1 = lines;
								$augexpr1['__setitem__']($augsub1, (typeof ($add13=(typeof ($11=$augexpr1)['__array'] != 'undefined'?
									((typeof $11['__array'][$12=$augsub1]) != 'undefined'?$11['__array'][$12]:
										$11['__getitem__']($12)):
										$11['__getitem__']($augsub1)))==typeof ($add14=$p['getattr'](self, 'charbuffer')) && (typeof $add13=='number'||typeof $add13=='string')?
									$add13+$add14:
									$p['op_add']($add13,$add14)));
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linebuffer', lines) : $p['setattr'](self, 'linebuffer', lines); 
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', null) : $p['setattr'](self, 'charbuffer', null); 
							}
							else {
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', (typeof ($add15=(typeof ($13=lines)['__array'] != 'undefined'?
									((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
										$13['__getitem__']($14)):
										$13['__getitem__']($constant_int_0)))==typeof ($add16=$p['getattr'](self, 'charbuffer')) && (typeof $add15=='number'||typeof $add15=='string')?
									$add15+$add16:
									$p['op_add']($add15,$add16))) : $p['setattr'](self, 'charbuffer', (typeof ($add15=(typeof ($13=lines)['__array'] != 'undefined'?
									((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
										$13['__getitem__']($14)):
										$13['__getitem__']($constant_int_0)))==typeof ($add16=$p['getattr'](self, 'charbuffer')) && (typeof $add15=='number'||typeof $add15=='string')?
									$add15+$add16:
									$p['op_add']($add15,$add16))); 
							}
							if ((($bool31=!(($bool30=keepends) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
								false :
								(typeof $bool30=='object'?
									(typeof $bool30['__nonzero__']=='function'?
										$bool30['__nonzero__']() :
										(typeof $bool30['__len__']=='function'?
											($bool30['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
								line = (typeof ($15=line['splitlines'](false))['__array'] != 'undefined'?
									((typeof $15['__array'][$16=$constant_int_0]) != 'undefined'?$15['__array'][$16]:
										$15['__getitem__']($16)):
										$15['__getitem__']($constant_int_0));
							}
							break;
						}
						line0withend = (typeof ($17=lines)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__']($constant_int_0));
						line0withoutend = (typeof ($21=(typeof ($19=lines)['__array'] != 'undefined'?
							((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']($constant_int_0))['splitlines'](false))['__array'] != 'undefined'?
							((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
								$21['__getitem__']($22)):
								$21['__getitem__']($constant_int_0));
						if ((($bool32=!$p['op_eq'](line0withend, line0withoutend)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', (typeof ($add17=''['join']($p['__getslice'](lines, $constant_int_1, null)))==typeof ($add18=$p['getattr'](self, 'charbuffer')) && (typeof $add17=='number'||typeof $add17=='string')?
								$add17+$add18:
								$p['op_add']($add17,$add18))) : $p['setattr'](self, 'charbuffer', (typeof ($add17=''['join']($p['__getslice'](lines, $constant_int_1, null)))==typeof ($add18=$p['getattr'](self, 'charbuffer')) && (typeof $add17=='number'||typeof $add17=='string')?
								$add17+$add18:
								$p['op_add']($add17,$add18))); 
							if ((($bool33=keepends) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
								line = line0withend;
							}
							else {
								line = line0withoutend;
							}
							break;
						}
					}
					if ((($bool36=((($bool35=$or7=!(($bool34=data) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:!$p['op_is'](size, null))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						if ((($bool39=((($bool37=$and3=line) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
							false :
							(typeof $bool37=='object'?
								(typeof $bool37['__nonzero__']=='function'?
									$bool37['__nonzero__']() :
									(typeof $bool37['__len__']=='function'?
										($bool37['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?!(($bool38=keepends) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
							false :
							(typeof $bool38=='object'?
								(typeof $bool38['__nonzero__']=='function'?
									$bool38['__nonzero__']() :
									(typeof $bool38['__len__']=='function'?
										($bool38['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ):$and3)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
							line = (typeof ($23=line['splitlines'](false))['__array'] != 'undefined'?
								((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
									$23['__getitem__']($24)):
									$23['__getitem__']($constant_int_0));
						}
						break;
					}
					if ((($bool40=((($cmp19=readsize)===($cmp20=$constant_int_8000)?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
							false :
							(typeof $bool40=='object'?
								(typeof $bool40['__nonzero__']=='function'?
									$bool40['__nonzero__']() :
									(typeof $bool40['__len__']=='function'?
										($bool40['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						readsize = (typeof ($mul1=readsize)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2));
					}
				}
				return line;
			}
	, 1, [null,null,['self'],['size', null],['keepends', true]]);
			$cls_definition['readline'] = $method;
			$method = $pyjs__bind_method2('readlines', function(sizehint, keepends) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					keepends = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];
				if (typeof keepends == 'undefined') keepends=arguments['callee']['__args__'][4][1];
				var data;
				data = self['read']();
				return data['splitlines'](keepends);
			}
	, 1, [null,null,['self'],['sizehint', null],['keepends', true]]);
			$cls_definition['readlines'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bytebuffer', '') : $p['setattr'](self, 'bytebuffer', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];

				self['stream']['seek'](offset, whence);
				self['reset']();
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var line,$bool41;
				line = self['readline']();
				if ((($bool41=line) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return line;
				}
				throw ($p['StopIteration']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

				return getattr(getattr(self, 'stream'), name);
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['stream']['close']();
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			var $bases = new Array($m['Codec']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamReader', $p['tuple']($bases), $data);
		})();
		$m['StreamReaderWriter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '7c9aa5918cae9beb9bbc88966148f8bf';
			$cls_definition['encoding'] = 'unknown';
			$method = $pyjs__bind_method2('__init__', function(stream, Reader, Writer, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					Reader = arguments[2];
					Writer = arguments[3];
					errors = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][6][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('stream', stream) : $p['setattr'](self, 'stream', stream); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('reader', Reader(stream, errors)) : $p['setattr'](self, 'reader', Reader(stream, errors)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('writer', Writer(stream, errors)) : $p['setattr'](self, 'writer', Writer(stream, errors)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				return null;
			}
	, 1, [null,null,['self'],['stream'],['Reader'],['Writer'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('read', function(size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];

				return self['reader']['read'](size);
			}
	, 1, [null,null,['self'],['size', (typeof ($usub4=$constant_int_1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))]]);
			$cls_definition['read'] = $method;
			$method = $pyjs__bind_method2('readline', function(size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];

				return self['reader']['readline'](size);
			}
	, 1, [null,null,['self'],['size', null]]);
			$cls_definition['readline'] = $method;
			$method = $pyjs__bind_method2('readlines', function(sizehint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];

				return self['reader']['readlines'](sizehint);
			}
	, 1, [null,null,['self'],['sizehint', null]]);
			$cls_definition['readlines'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['reader']['next']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$method = $pyjs__bind_method2('write', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['writer']['write'](data);
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['write'] = $method;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['writer']['writelines'](list);
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['reader']['reset']();
				self['writer']['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];
				var $bool43,$bool42,$and5,$and6;
				self['stream']['seek'](offset, whence);
				self['reader']['reset']();
				if ((($bool43=((($bool42=$and5=$p['op_eq'](whence, $constant_int_0)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](offset, $constant_int_0):$and5)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43['__nonzero__']=='function'?
								$bool43['__nonzero__']() :
								(typeof $bool43['__len__']=='function'?
									($bool43['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['writer']['reset']();
				}
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

				return getattr(getattr(self, 'stream'), name);
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['stream']['close']();
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamReaderWriter', $p['tuple']($bases), $data);
		})();
		$m['StreamRecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'codecs';
			$cls_definition['__md5__'] = '641a6832a68e697d4532d93e8edc6c91';
			$cls_definition['data_encoding'] = 'unknown';
			$cls_definition['file_encoding'] = 'unknown';
			$method = $pyjs__bind_method2('__init__', function(stream, encode, decode, Reader, Writer, errors) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					encode = arguments[2];
					decode = arguments[3];
					Reader = arguments[4];
					Writer = arguments[5];
					errors = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 6 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][8][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('stream', stream) : $p['setattr'](self, 'stream', stream); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('encode', encode) : $p['setattr'](self, 'encode', encode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('decode', decode) : $p['setattr'](self, 'decode', decode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('reader', Reader(stream, errors)) : $p['setattr'](self, 'reader', Reader(stream, errors)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('writer', Writer(stream, errors)) : $p['setattr'](self, 'writer', Writer(stream, errors)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errors', errors) : $p['setattr'](self, 'errors', errors); 
				return null;
			}
	, 1, [null,null,['self'],['stream'],['encode'],['decode'],['Reader'],['Writer'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('read', function(size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				var bytesencoded,data;
				data = self['reader']['read'](size);
				var $tupleassign6 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign6[0];
				bytesencoded = $tupleassign6[1];
				return data;
			}
	, 1, [null,null,['self'],['size', (typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5))]]);
			$cls_definition['read'] = $method;
			$method = $pyjs__bind_method2('readline', function(size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				var bytesencoded,$bool44,data;
				if ((($bool44=$p['op_is'](size, null)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					data = self['reader']['readline']();
				}
				else {
					data = self['reader']['readline'](size);
				}
				var $tupleassign7 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign7[0];
				bytesencoded = $tupleassign7[1];
				return data;
			}
	, 1, [null,null,['self'],['size', null]]);
			$cls_definition['readline'] = $method;
			$method = $pyjs__bind_method2('readlines', function(sizehint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];
				var data,bytesencoded;
				data = self['reader']['read']();
				var $tupleassign8 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign8[0];
				bytesencoded = $tupleassign8[1];
				return data['splitlines']($constant_int_1);
			}
	, 1, [null,null,['self'],['sizehint', null]]);
			$cls_definition['readlines'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bytesencoded,data;
				data = self['reader']['next']();
				var $tupleassign9 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign9[0];
				bytesencoded = $tupleassign9[1];
				return data;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$method = $pyjs__bind_method2('write', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bytesdecoded;
				var $tupleassign10 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign10[0];
				bytesdecoded = $tupleassign10[1];
				return self['writer']['write'](data);
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['write'] = $method;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,bytesdecoded;
				data = ''['join'](list);
				var $tupleassign11 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
				data = $tupleassign11[0];
				bytesdecoded = $tupleassign11[1];
				return self['writer']['write'](data);
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['reader']['reset']();
				self['writer']['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

				return getattr(getattr(self, 'stream'), name);
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['stream']['close']();
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamRecoder', $p['tuple']($bases), $data);
		})();
		$m['open'] = function(filename, mode, encoding, errors, buffering) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
			if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][3][1];
			if (typeof encoding == 'undefined') encoding=arguments['callee']['__args__'][4][1];
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][5][1];
			if (typeof buffering == 'undefined') buffering=arguments['callee']['__args__'][6][1];
			var $bool47,$bool46,$bool45,$add21,$add20,$add22,$bool48,$bool49,info,file,$add19,srw;
			if ((($bool45=!$p['op_is'](encoding, null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool46=mode['__contains__']('U')) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					mode = mode['strip']()['$$replace']('U', '');
					if ((($bool47=!$p['set']('rwa')['__contains__']($p['__getslice'](mode, 0, $constant_int_1))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47['__nonzero__']=='function'?
									$bool47['__nonzero__']() :
									(typeof $bool47['__len__']=='function'?
										($bool47['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						mode = (typeof ($add19='r')==typeof ($add20=mode) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20));
					}
				}
				if ((($bool48=!mode['__contains__']('b')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48['__nonzero__']=='function'?
								$bool48['__nonzero__']() :
								(typeof $bool48['__len__']=='function'?
									($bool48['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					mode = (typeof ($add21=mode)==typeof ($add22='b') && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
				}
			}
			file = $m['__builtin__']['open'](filename, mode, buffering);
			if ((($bool49=$p['op_is'](encoding, null)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return file;
			}
			info = (typeof lookup == "undefined"?$m['lookup']:lookup)(encoding);
			srw = $m['StreamReaderWriter'](file, $p['getattr'](info, 'streamreader'), $p['getattr'](info, 'streamwriter'), errors);
			srw['__is_instance__'] && typeof srw['__setattr__'] == 'function' ? srw['__setattr__']('encoding', encoding) : $p['setattr'](srw, 'encoding', encoding); 
			return srw;
		};
		$m['open']['__name__'] = 'open';

		$m['open']['__bind_type__'] = 0;
		$m['open']['__args__'] = [null,null,['filename'],['mode', 'rb'],['encoding', null],['errors', 'strict'],['buffering', $constant_int_1]];
		$m['EncodedFile'] = function(file, data_encoding, file_encoding, errors) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
			if (typeof file_encoding == 'undefined') file_encoding=arguments['callee']['__args__'][4][1];
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][5][1];
			var $bool50,sr,file_info,data_info;
			if ((($bool50=$p['op_is'](file_encoding, null)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50['__nonzero__']=='function'?
							$bool50['__nonzero__']() :
							(typeof $bool50['__len__']=='function'?
								($bool50['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				file_encoding = data_encoding;
			}
			data_info = (typeof lookup == "undefined"?$m['lookup']:lookup)(data_encoding);
			file_info = (typeof lookup == "undefined"?$m['lookup']:lookup)(file_encoding);
			sr = $m['StreamRecoder'](file, $p['getattr'](data_info, 'encode'), $p['getattr'](data_info, 'decode'), $p['getattr'](file_info, 'streamreader'), $p['getattr'](file_info, 'streamwriter'), errors);
			sr['__is_instance__'] && typeof sr['__setattr__'] == 'function' ? sr['__setattr__']('data_encoding', data_encoding) : $p['setattr'](sr, 'data_encoding', data_encoding); 
			sr['__is_instance__'] && typeof sr['__setattr__'] == 'function' ? sr['__setattr__']('file_encoding', file_encoding) : $p['setattr'](sr, 'file_encoding', file_encoding); 
			return sr;
		};
		$m['EncodedFile']['__name__'] = 'EncodedFile';

		$m['EncodedFile']['__bind_type__'] = 0;
		$m['EncodedFile']['__args__'] = [null,null,['file'],['data_encoding'],['file_encoding', null],['errors', 'strict']];
		$m['getencoder'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'encode');
		};
		$m['getencoder']['__name__'] = 'getencoder';

		$m['getencoder']['__bind_type__'] = 0;
		$m['getencoder']['__args__'] = [null,null,['encoding']];
		$m['getdecoder'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'decode');
		};
		$m['getdecoder']['__name__'] = 'getdecoder';

		$m['getdecoder']['__bind_type__'] = 0;
		$m['getdecoder']['__args__'] = [null,null,['encoding']];
		$m['getincrementalencoder'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var encoder,$bool51;
			encoder = $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'incrementalencoder');
			if ((($bool51=$p['op_is'](encoder, null)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51['__nonzero__']=='function'?
							$bool51['__nonzero__']() :
							(typeof $bool51['__len__']=='function'?
								($bool51['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['LookupError'](encoding));
			}
			return encoder;
		};
		$m['getincrementalencoder']['__name__'] = 'getincrementalencoder';

		$m['getincrementalencoder']['__bind_type__'] = 0;
		$m['getincrementalencoder']['__args__'] = [null,null,['encoding']];
		$m['getincrementaldecoder'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var decoder,$bool52;
			decoder = $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'incrementaldecoder');
			if ((($bool52=$p['op_is'](decoder, null)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['LookupError'](encoding));
			}
			return decoder;
		};
		$m['getincrementaldecoder']['__name__'] = 'getincrementaldecoder';

		$m['getincrementaldecoder']['__bind_type__'] = 0;
		$m['getincrementaldecoder']['__args__'] = [null,null,['encoding']];
		$m['getreader'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'streamreader');
		};
		$m['getreader']['__name__'] = 'getreader';

		$m['getreader']['__bind_type__'] = 0;
		$m['getreader']['__args__'] = [null,null,['encoding']];
		$m['getwriter'] = function(encoding) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'streamwriter');
		};
		$m['getwriter']['__name__'] = 'getwriter';

		$m['getwriter']['__bind_type__'] = 0;
		$m['getwriter']['__args__'] = [null,null,['encoding']];
		$m['iterencode'] = function(iterator, encoding, errors) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof errors != 'undefined') {
					if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errors;
						errors = arguments[3];
					}
				} else 				if (typeof encoding != 'undefined') {
					if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = encoding;
						encoding = arguments[3];
					}
				} else 				if (typeof iterator != 'undefined') {
					if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = iterator;
						iterator = arguments[3];
					}
				} else {
				}
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];
			var $bool54,$iter2_iter,$bool56,$iter1_nextval,$iter1_type,$bool53,$iter2_idx,$iter1_iter,$iter2_type,output,$iter2_nextval,$iter1_array,input,encoder,$bool55,$iter2_array,$iter1_idx;
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
					encoder = $pyjs_kwargs_call(null, $m['getincrementalencoder'](encoding), null, kwargs, [{}, errors]);
					$iter2_iter = iterator;
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							input = $iter2_nextval;
							output = encoder['encode'](input);
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool55=output) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
									false :
									(typeof $bool55=='object'?
										(typeof $bool55['__nonzero__']=='function'?
											$bool55['__nonzero__']() :
											(typeof $bool55['__len__']=='function'?
												($bool55['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = output;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					output = encoder['encode']('', true);
					$generator_state[2] = 0;
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool56=output) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
							false :
							(typeof $bool56=='object'?
								(typeof $bool56['__nonzero__']=='function'?
									$bool56['__nonzero__']() :
									(typeof $bool56['__len__']=='function'?
										($bool56['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = output;
							$yielding = true;
							$generator_state[2] = 1;
							return $yield_value;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[2] = -1;
								throw $exc;
							}
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		};
		$m['iterencode']['__name__'] = 'iterencode';

		$m['iterencode']['__bind_type__'] = 0;
		$m['iterencode']['__args__'] = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
		$m['iterdecode'] = function(iterator, encoding, errors) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof errors != 'undefined') {
					if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errors;
						errors = arguments[3];
					}
				} else 				if (typeof encoding != 'undefined') {
					if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = encoding;
						encoding = arguments[3];
					}
				} else 				if (typeof iterator != 'undefined') {
					if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = iterator;
						iterator = arguments[3];
					}
				} else {
				}
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];
			var $bool60,$iter3_type,$iter4_nextval,$iter3_nextval,decoder,$bool58,$bool59,output,$iter4_idx,$iter4_array,$iter3_idx,$iter3_iter,$iter4_type,$bool57,input,$iter4_iter,$iter3_array;
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
					decoder = $pyjs_kwargs_call(null, $m['getincrementaldecoder'](encoding), null, kwargs, [{}, errors]);
					$iter4_iter = iterator;
					if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter['__iter__']();
						$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							input = $iter4_nextval;
							output = decoder['decode'](input);
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool59=output) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
									false :
									(typeof $bool59=='object'?
										(typeof $bool59['__nonzero__']=='function'?
											$bool59['__nonzero__']() :
											(typeof $bool59['__len__']=='function'?
												($bool59['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = output;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					output = decoder['decode']('', true);
					$generator_state[2] = 0;
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool60=output) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60['__nonzero__']=='function'?
									$bool60['__nonzero__']() :
									(typeof $bool60['__len__']=='function'?
										($bool60['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = output;
							$yielding = true;
							$generator_state[2] = 1;
							return $yield_value;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[2] = -1;
								throw $exc;
							}
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		};
		$m['iterdecode']['__name__'] = 'iterdecode';

		$m['iterdecode']['__bind_type__'] = 0;
		$m['iterdecode']['__args__'] = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
		$m['make_identity_dict'] = function(rng) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter5_nextval,$iter5_idx,i,res,$iter5_iter,$iter5_array,$iter5_type;
			res = $p['dict']([]);
			$iter5_iter = rng;
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				res['__setitem__'](i, i);
			}
			return res;
		};
		$m['make_identity_dict']['__name__'] = 'make_identity_dict';

		$m['make_identity_dict']['__bind_type__'] = 0;
		$m['make_identity_dict']['__args__'] = [null,null,['rng']];
		$m['make_encoding_map'] = function(decoding_map) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $bool61,$bool62,$iter6_idx,$iter6_type,k,m,$iter6_array,v,$iter6_iter,$iter6_nextval;
			m = $p['dict']([]);
			$iter6_iter = decoding_map['items']();
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				var $tupleassign12 = $p['__ass_unpack']($iter6_nextval, 2, null);
				k = $tupleassign12[0];
				v = $tupleassign12[1];
				if ((($bool62=!(($bool61=m['__contains__'](v)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61['__nonzero__']=='function'?
							$bool61['__nonzero__']() :
							(typeof $bool61['__len__']=='function'?
								($bool61['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					m['__setitem__'](v, k);
				}
				else {
					m['__setitem__'](v, null);
				}
			}
			return m;
		};
		$m['make_encoding_map']['__name__'] = 'make_encoding_map';

		$m['make_encoding_map']['__bind_type__'] = 0;
		$m['make_encoding_map']['__args__'] = [null,null,['decoding_map']];
		$m['strict_errors'] = null;
		$m['ignore_errors'] = null;
		$m['replace_errors'] = null;
		$m['xmlcharrefreplace_errors'] = null;
		$m['backslashreplace_errors'] = null;
		$m['_false'] = $constant_int_0;
		if ((($bool63=$m['_false']) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63['__nonzero__']=='function'?
						$bool63['__nonzero__']() :
						(typeof $bool63['__len__']=='function'?
							($bool63['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['encodings'] = $p['___import___']('encodings', null);
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end codecs */


/* end module: codecs */


/*
PYJS_DEPS: ['__builtin__', 'sys', 'encodings']
*/
