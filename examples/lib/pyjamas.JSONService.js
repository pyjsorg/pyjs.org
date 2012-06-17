/* start module: pyjamas.JSONService */
$pyjs.loaded_modules['pyjamas.JSONService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.JSONService'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.JSONService'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.JSONService"];
	$m.__repr__ = function() { return "<module: pyjamas.JSONService>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONService';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['JSONService'] = $pyjs.loaded_modules['pyjamas.JSONService'];
	try {
		var $pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_32603 = new $p['int'](32603);
		var $constant_int_32700 = new $p['int'](32700);
		$m['sys'] = $p['___import___']('sys', 'pyjamas');
		$m['HTTPRequest'] = $p['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
		try {
			$m['dumps'] = $p['___import___']('json.dumps', 'pyjamas', null, false);
			$m['loads'] = $p['___import___']('json.loads', 'pyjamas', null, false);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
				$m['dumps'] = $p['___import___']('simplejson.dumps', 'pyjamas', null, false);
				$m['loads'] = $p['___import___']('simplejson.loads', 'pyjamas', null, false);
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		$m['JSONServiceError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = 'ae201fc788ee16e8b40fe9cb982d1564';
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONServiceError', $p['tuple']($bases), $data);
		})();
		$m['__requestID'] = $constant_int_0;
		$m['__requestIDPrefix'] = 'ID';
		$m['__lastRequestID'] = null;
		$m['nextRequestID'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $bool1,$add3,$add2,$add1,$add4,id;
			$m['__requestID'] = (typeof ($add1=$m['__requestID'])==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			id = $p['sprintf']('%s%s', $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]));
			if ((($bool1=$p['op_eq']($m['__lastRequestID'], id)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['__requestIDPrefix'] = (typeof ($add3=$m['__requestIDPrefix'])==typeof ($add4='_') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$m['__requestID'] = $constant_int_0;
				id = $p['sprintf']('%s%s', $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]));
			}
			$m['__lastRequestID'] = id;
			return id;
		};
		$m['nextRequestID'].__name__ = 'nextRequestID';

		$m['nextRequestID'].__bind_type__ = 0;
		$m['nextRequestID'].__args__ = [null,null];
		$m['JSONService'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = '2a39fd448d2d09a14fdfdd7ea8c9afac';
			$cls_definition['content_type'] = 'application/json-rpc';
			$cls_definition['accept'] = 'application/json-rpc';
			$method = $pyjs__bind_method2('__init__', function(url, handler, headers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					handler = arguments[2];
					headers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a39fd448d2d09a14fdfdd7ea8c9afac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof handler == 'undefined') handler=arguments.callee.__args__[4][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
				var $bool3,$bool2,$bool4;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('url', url) : $p['setattr'](self, 'url', url); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('handler', handler) : $p['setattr'](self, 'handler', handler); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('headers', ((($bool2=!$p['op_is'](headers, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (headers) : ($p['dict']([])))) : $p['setattr'](self, 'headers', ((($bool2=!$p['op_is'](headers, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (headers) : ($p['dict']([])))); 
				if ((($bool4=!(($bool3=self['headers']['get']('Accept')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$p['getattr'](self, 'headers').__setitem__('Accept', $p['getattr'](self, 'accept'));
				}
				return null;
			}
	, 1, [null,null,['self'],['url'],['handler', null],['headers', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('callMethod', function(method, params, handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					params = arguments[2];
					handler = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a39fd448d2d09a14fdfdd7ea8c9afac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof handler == 'undefined') handler=arguments.callee.__args__[5][1];
				var $bool6,$bool5;
				if ((($bool5=$p['op_is'](handler, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					handler = $p['getattr'](self, 'handler');
				}
				if ((($bool6=$p['op_is'](handler, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return self['sendNotify'](method, params);
				}
				else {
					return self['sendRequest'](method, params, handler);
				}
				return null;
			}
	, 1, [null,null,['self'],['method'],['params'],['handler', null]]);
			$cls_definition['callMethod'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(response) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					response = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a39fd448d2d09a14fdfdd7ea8c9afac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['response']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('sendNotify', function(method, params) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					params = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a39fd448d2d09a14fdfdd7ea8c9afac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7,msg_data,msg,$bool8;
				msg = $p['dict']([['jsonrpc', '2.0'], ['version', '1.1'], ['method', method], ['params', params]]);
				msg_data = $m['dumps'](msg);
				if ((($bool8=!(($bool7=$m['HTTPRequest']()['asyncPost']($p['getattr'](self, 'url'), msg_data, self, false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
				}
				return $constant_int_1;
			}
	, 1, [null,null,['self'],['method'],['params']]);
			$cls_definition['sendNotify'] = $method;
			$method = $pyjs__bind_method2('sendRequest', function(method, params, handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					params = arguments[2];
					handler = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a39fd448d2d09a14fdfdd7ea8c9afac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,id,msg_data,msg,request_info,$bool9;
				id = $m['nextRequestID']();
				msg = $p['dict']([['jsonrpc', '2.0'], ['id', id], ['method', method], ['params', params]]);
				msg_data = $m['dumps'](msg);
				request_info = (typeof JSONRequestInfo == "undefined"?$m.JSONRequestInfo:JSONRequestInfo)(id, method, handler);
				if ((($bool10=!(($bool9=$m['HTTPRequest']()['asyncPost']($p['getattr'](self, 'url'), msg_data, (typeof JSONResponseTextHandler == "undefined"?$m.JSONResponseTextHandler:JSONResponseTextHandler)(request_info), false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					return (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
				}
				return id;
			}
	, 1, [null,null,['self'],['method'],['params'],['handler']]);
			$cls_definition['sendRequest'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
		})();
		$m['JSONRequestInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = '8cd094067c795c69b4daf688fcdc18cb';
			$method = $pyjs__bind_method2('__init__', function(id, method, handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					id = arguments[1];
					method = arguments[2];
					handler = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8cd094067c795c69b4daf688fcdc18cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', id) : $p['setattr'](self, 'id', id); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('method', method) : $p['setattr'](self, 'method', method); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('handler', handler) : $p['setattr'](self, 'handler', handler); 
				return null;
			}
	, 1, [null,null,['self'],['id'],['method'],['handler']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONRequestInfo', $p['tuple']($bases), $data);
		})();
		$m['create_object'] = function(items) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var clsname,modulename,$iter1_nextval,$iter1_type,vars,$iter1_idx,kls,$bool12,$add5,v,$iter1_iter,$add6,$iter1_array,$bool11,k,$4,$2,$3,dot,$1;
			clsname = items['pop']('__jsonclass__', null);
			if ((($bool12=!(($bool11=clsname) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				return items;
			}
			clsname = (typeof ($1=clsname).__array != 'undefined'?
				((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($constant_int_0));
			dot = clsname['rfind']('.');
			modulename = $p['__getslice'](clsname, 0, dot);
			clsname = $p['__getslice'](clsname, (typeof ($add5=dot)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)), null);
			vars = $p['dict']([]);
			kls = (typeof ($3=vars).__array != 'undefined'?
				((typeof $3.__array[$4='kls']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('kls'));
			vars = $p['dict']([]);
			$iter1_iter = items['items']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				vars.__setitem__($p['str'](k), v);
			}
			return $pyjs_kwargs_call(null, kls, null, vars, [{}]);
		};
		$m['create_object'].__name__ = 'create_object';

		$m['create_object'].__bind_type__ = 0;
		$m['create_object'].__args__ = [null,null,['items']];
		$m['_decode_response'] = function(json_str) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $pyjs_kwargs_call(null, $m['loads'], null, null, [{object_hook:$m['create_object']}, json_str]);
		};
		$m['_decode_response'].__name__ = '_decode_response';

		$m['_decode_response'].__bind_type__ = 0;
		$m['_decode_response'].__args__ = [null,null,['json_str']];
		$m['JSONResponseTextHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = '2161c9a8321b05a3e550872e6947beab';
			$method = $pyjs__bind_method2('__init__', function(request) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					request = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2161c9a8321b05a3e550872e6947beab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('request', request) : $p['setattr'](self, 'request', request); 
				return null;
			}
	, 1, [null,null,['self'],['request']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(json_str) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					json_str = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2161c9a8321b05a3e550872e6947beab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,code,jsonrpc,$bool13,$bool14,$bool15,$bool16,$bool17,$pyjs_try_err,$8,error,$6,$7,message,$5,data,response;
				try {
					response = $m['_decode_response'](json_str);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub3=$constant_int_32700)=='number'?
							-$usub3:
							$p['op_usub']($usub3)), message:'Parse error while decoding response', data:null}]);
						self['request']['handler']['onRemoteError']($constant_int_0, error, $p['getattr'](self, 'request'));
						return null;
					}
				}
				if ((($bool14=!(($bool13=response) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub4=$constant_int_32603)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), message:'Empty Response', data:null}]);
					self['request']['handler']['onRemoteError']($constant_int_0, error, $p['getattr'](self, 'request'));
				}
				else if ((($bool15=response['get']('error')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					error = (typeof ($5=response).__array != 'undefined'?
						((typeof $5.__array[$6='error']) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__('error'));
					jsonrpc = response['get']('jsonrpc');
					code = error['get']('code', $constant_int_0);
					message = error['get']('message', error);
					data = error['get']('data');
					if ((($bool17=!(($bool16=jsonrpc) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17.__nonzero__=='function'?
									$bool17.__nonzero__() :
									(typeof $bool17.__len__=='function'?
										($bool17.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						jsonrpc = response['get']('version', '1.0');
						if ((($bool18=$p['op_eq'](jsonrpc, '1.0')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
							message = error;
						}
						else {
							data = error['get']('error');
						}
					}
					error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:code, message:message, data:data}]);
					self['request']['handler']['onRemoteError']($constant_int_0, error, $p['getattr'](self, 'request'));
				}
				else if ((($bool19=response.__contains__('result')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					self['request']['handler']['onRemoteResponse']((typeof ($7=response).__array != 'undefined'?
						((typeof $7.__array[$8='result']) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__('result')), $p['getattr'](self, 'request'));
				}
				else {
					error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub5=$constant_int_32603)=='number'?
						-$usub5:
						$p['op_usub']($usub5)), message:'No result or error in response', data:response}]);
					self['request']['handler']['onRemoteError']($constant_int_0, error, $p['getattr'](self, 'request'));
				}
				return null;
			}
	, 1, [null,null,['self'],['json_str']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('onError', function(error_str, error_code) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					error_str = arguments[1];
					error_code = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2161c9a8321b05a3e550872e6947beab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var error;
				error = $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:error_code, message:error_str, data:null}]);
				self['request']['handler']['onRemoteError'](error_code, error, $p['getattr'](self, 'request'));
				return null;
			}
	, 1, [null,null,['self'],['error_str'],['error_code']]);
			$cls_definition['onError'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONResponseTextHandler', $p['tuple']($bases), $data);
		})();
		$m['ServiceProxy'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = '1929c920652e25232e07fed3229aa94d';
			$method = $pyjs__bind_method2('__init__', function(serviceURL, serviceName, headers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					serviceURL = arguments[1];
					serviceName = arguments[2];
					headers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1929c920652e25232e07fed3229aa94d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof serviceName == 'undefined') serviceName=arguments.callee.__args__[4][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

				$pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:headers}, self, serviceURL]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__serviceName', serviceName) : $p['setattr'](self, '__serviceName', serviceName); 
				return null;
			}
	, 1, [null,null,['self'],['serviceURL'],['serviceName', null],['headers', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__call__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var params = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') params.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var params = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') params.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1929c920652e25232e07fed3229aa94d') {
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
				var $bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,handler,$and1,$and2,$and3,$and4,$9,$10,$11,$12;
				if ((($bool20=$p['isinstance'](params, $p['tuple'])) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					params = $p['list'](params);
				}
				if ((($bool22=((($bool21=$and1=params) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['hasattr']((typeof ($9=params).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)), 'onRemoteResponse'):$and1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					handler = params['pop']($constant_int_0);
				}
				else if ((($bool24=((($bool23=$and3=params) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['hasattr']((typeof ($11=params).__array != 'undefined'?
					((typeof $11.__array[$12=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__((typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))), 'onRemoteResponse'):$and3)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					handler = params['pop']();
				}
				else {
					handler = null;
				}
				if ((($bool25=kwargs) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					if ((($bool26=params) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26.__nonzero__=='function'?
									$bool26.__nonzero__() :
									(typeof $bool26.__len__=='function'?
										($bool26.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool28=!(($bool27=$p['isinstance'](params, $p['dict'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27.__nonzero__=='function'?
									$bool27.__nonzero__() :
									(typeof $bool27.__len__=='function'?
										($bool27.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
							throw ($m['JSONServiceError']('Cannot mix positional and keyword arguments'));
						}
						params['update'](kwargs);
					}
					else {
						params = kwargs;
					}
				}
				if ((($bool29=!$p['op_is'](handler, null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					return $m['JSONService']['sendRequest'](self, $p['getattr'](self, '__serviceName'), params, handler);
				}
				else {
					return $m['JSONService']['sendNotify'](self, $p['getattr'](self, '__serviceName'), params);
				}
				return null;
			}
	, 1, ['params',['kwargs'],['self']]);
			$cls_definition['__call__'] = $method;
			var $bases = new Array($m['JSONService']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ServiceProxy', $p['tuple']($bases), $data);
		})();
		$m['JSONProxy'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.JSONService';
			$cls_definition.__md5__ = 'a438287088e797f0b464f1d6ef5b125e';
			$method = $pyjs__bind_method2('__init__', function(url, methods, headers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					methods = arguments[2];
					headers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a438287088e797f0b464f1d6ef5b125e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
				var $bool30;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_serviceURL', url) : $p['setattr'](self, '_serviceURL', url); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('methods', methods) : $p['setattr'](self, 'methods', methods); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('headers', ((($bool30=$p['op_is'](headers, null)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['dict']([])) : (headers))) : $p['setattr'](self, 'headers', ((($bool30=$p['op_is'](headers, null)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['dict']([])) : (headers))); 
				$pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:$p['getattr'](self, 'headers')}, self, url]);
				self['_registerMethods'](methods);
				return null;
			}
	, 1, [null,null,['self'],['url'],['methods', null],['headers', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_registerMethods', function(methods) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					methods = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a438287088e797f0b464f1d6ef5b125e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$bool31,method,$iter2_array;
				if ((($bool31=methods) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					$iter2_iter = methods;
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						method = $iter2_nextval;
						$p['setattr'](self, method, $p['getattr']($pyjs_kwargs_call(null, $m['ServiceProxy'], null, null, [{headers:$p['getattr'](self, 'headers')}, $p['getattr'](self, '_serviceURL'), method]), '__call__'));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['methods']]);
			$cls_definition['_registerMethods'] = $method;
			var $bases = new Array($m['JSONService']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONProxy', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.JSONService */


/* end module: pyjamas.JSONService */


/*
PYJS_DEPS: ['sys', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'json.dumps', 'json', 'json.loads', 'simplejson.dumps', 'simplejson', 'simplejson.loads']
*/
