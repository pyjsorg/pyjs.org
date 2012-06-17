/* start module: pyjamas.HTTPRequest */
$pyjs.loaded_modules['pyjamas.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.HTTPRequest"];
	$m.__repr__ = function() { return "<module: pyjamas.HTTPRequest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.HTTPRequest';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['HTTPRequest'] = $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_8 = new $p['int'](8);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas');
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		}
		$m['sys'] = $p['___import___']('sys', 'pyjamas');
		$m['handlers'] = $p['dict']([]);
		$m['XULrunnerHackCallback'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.HTTPRequest';
			$cls_definition.__md5__ = '1fe73208a424efe9a33ae5408ecea1fd';
			$method = $pyjs__bind_method2('__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 5 || arguments.length > 10)) $pyjs__exception_func_param(arguments.callee.__name__, 6, 11, arguments.length+1);
				} else {
					var self = arguments[0];
					htr = arguments[1];
					mode = arguments[2];
					user = arguments[3];
					pwd = arguments[4];
					url = arguments[5];
					postData = arguments[6];
					handler = arguments[7];
					return_xml = arguments[8];
					content_type = arguments[9];
					headers = arguments[10];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 6 || arguments.length > 11)) $pyjs__exception_func_param(arguments.callee.__name__, 6, 11, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1fe73208a424efe9a33ae5408ecea1fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof postData == 'undefined') postData=arguments.callee.__args__[8][1];
				if (typeof handler == 'undefined') handler=arguments.callee.__args__[9][1];
				if (typeof return_xml == 'undefined') return_xml=arguments.callee.__args__[10][1];
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[11][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[12][1];

 				return null;
			}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('callback', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1fe73208a424efe9a33ae5408ecea1fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['htr']['asyncImpl']($p['getattr'](self, 'mode'), $p['getattr'](self, 'user'), $p['getattr'](self, 'pwd'), $p['getattr'](self, 'url'), $p['getattr'](self, 'postData'), $p['getattr'](self, 'handler'), $p['getattr'](self, 'return_xml'), $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['callback'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('XULrunnerHackCallback', $p['tuple']($bases), $data);
		})();
		$m['HTTPRequest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.HTTPRequest';
			$cls_definition.__md5__ = '43f3220b8cba753b27903e70fd0205d4';
			$method = $pyjs__bind_method2('asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 7)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 8, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					handler = arguments[2];
					returnxml = arguments[3];
					content_type = arguments[4];
					headers = arguments[5];
					user = arguments[6];
					pwd = arguments[7];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 8, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
				if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
				if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
				var postData,$bool3,$bool2;
				postData = null;
				if ((($bool3=!(($bool2=$p['hasattr'](handler, 'onCompletion')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					throw ($p['RuntimeError']('Invalid call to asyncGet: handler is not a valid request handler'));
				}
				return self['asyncImpl']('GET', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncGet'] = $method;
			$method = $pyjs__bind_method2('asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					postData = arguments[2];
					handler = arguments[3];
					returnxml = arguments[4];
					content_type = arguments[5];
					headers = arguments[6];
					user = arguments[7];
					pwd = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
				if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
				if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];
				var $bool4,$bool5;
				if ((($bool5=!(($bool4=$p['hasattr'](handler, 'onCompletion')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					throw ($p['RuntimeError']('Invalid call to asyncPost: handler is not a valid request handler'));
				}
				return self['asyncImpl']('POST', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncPost'] = $method;
			$method = $pyjs__bind_method2('asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 7)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 8, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					handler = arguments[2];
					returnxml = arguments[3];
					content_type = arguments[4];
					headers = arguments[5];
					user = arguments[6];
					pwd = arguments[7];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 8, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
				if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
				if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
				var postData,$bool6,$bool7;
				postData = null;
				if ((($bool7=!(($bool6=$p['hasattr'](handler, 'onCompletion')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					throw ($p['RuntimeError']('Invalid call to asyncDelete: handler is not a valid request handler'));
				}
				return self['asyncImpl']('DELETE', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncDelete'] = $method;
			$method = $pyjs__bind_method2('asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					postData = arguments[2];
					handler = arguments[3];
					returnxml = arguments[4];
					content_type = arguments[5];
					headers = arguments[6];
					user = arguments[7];
					pwd = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
				if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
				if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];
				var $bool8,$bool9;
				if ((($bool9=!(($bool8=$p['hasattr'](handler, 'onCompletion')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					throw ($p['RuntimeError']('Invalid call to asyncPut: handler is not a valid request handler'));
				}
				return self['asyncImpl']('PUT', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncPut'] = $method;
			$method = $pyjs__bind_method2('createXmlHTTPRequest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['doCreateXmlHTTPRequest']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['createXmlHTTPRequest'] = $method;
			$method = $pyjs__bind_method2('doCreateXmlHTTPRequest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,res;
				if ((($bool10=typeof $wnd.XMLHttpRequest != 'undefined') === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					res = new XMLHttpRequest();
					return res;
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doCreateXmlHTTPRequest'] = $method;
			$method = $pyjs__bind_method2('onProgress', function(sender, event, ignorearg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var localHandler,xmlHttp,$bool11;
				xmlHttp = $p['getattr'](event, 'target');
				localHandler = $m['handlers']['get'](xmlHttp);
				if ((($bool11=$p['hasattr'](localHandler, 'onProgress')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					localHandler['onProgress'](event);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
			$cls_definition['onProgress'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(sender, event, ignorearg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var status,localHandler,xmlHttp,$or2,$bool13,$bool14,$bool12,handler,responseText,$or1;
				xmlHttp = $p['getattr'](event, 'target');
				localHandler = $m['handlers']['get'](xmlHttp);
				$m['handlers'].__delitem__(xmlHttp);
				responseText = $p['getattr'](xmlHttp, 'responseText');
				status = $p['getattr'](xmlHttp, 'status');
				handler = null;
				xmlHttp = null;
				if ((($bool12=$p['op_eq'](status, $constant_int_0)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				}
				if ((($bool14=((($bool13=$or1=$p['op_eq'](status, $constant_int_200)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_eq'](status, $constant_int_0))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					localHandler['onCompletion'](responseText);
				}
				else {
					localHandler['onError'](responseText, status);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('onReadyStateChange', function(xmlHttp, event, ignorearg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					xmlHttp = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var status,$or4,localHandler,$or3,handler,$bool15,$bool16,$bool17,$pyjs_try_err,responseText;
				try {
					xmlHttp = $m.get_main_frame()['gobject_wrap'](xmlHttp);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
				if ((($bool15=!$p['op_eq']($p['getattr'](xmlHttp, 'readyState'), $constant_int_4)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					return null;
				}
				localHandler = $m['handlers']['get'](xmlHttp);
				$m['handlers'].__delitem__(xmlHttp);
				responseText = $p['getattr'](xmlHttp, 'responseText');
				status = $p['getattr'](xmlHttp, 'status');
				handler = null;
				xmlHttp = null;
				if ((($bool17=((($bool16=$or3=$p['op_eq'](status, $constant_int_200)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['op_eq'](status, $constant_int_0))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					localHandler['onCompletion'](responseText);
				}
				else {
					localHandler['onError'](responseText, status);
				}
				return null;
			}
	, 1, [null,null,['self'],['xmlHttp'],['event'],['ignorearg']]);
			$cls_definition['onReadyStateChange'] = $method;
			$method = $pyjs__bind_method2('_convertUrlToAbsolute', function(url) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,sep,$bool24,$bool21,$bool20,$bool23,$bool22,slash,$and1,$and2,$and3,$2,$1,$cmp1,$cmp2,uri,$add2,$add3,$add1,$add6,$add4,$add5;
				uri = $m['pygwt']['getModuleBaseURL']();
				if ((($bool18=$p['op_eq']((typeof ($1=url).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), '/')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					sep = uri['find']('://');
					if ((($bool20=!(($bool19=uri['startswith']('file://')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						slash = uri['find']('/', (typeof ($add1=sep)==typeof ($add2=$constant_int_3) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
						if ((($bool21=((($cmp1=slash)===($cmp2=$constant_int_0)?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
							uri = $p['__getslice'](uri, 0, slash);
						}
					}
					return $p['sprintf']('%s%s', $p['tuple']([uri, url]));
				}
				else {
					if ((($bool24=((($bool22=$and1=!$p['op_eq']($p['__getslice'](url, 0, $constant_int_7), 'file://')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool23=$and2=!$p['op_eq']($p['__getslice'](url, 0, $constant_int_7), 'http://')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq']($p['__getslice'](url, 0, $constant_int_8), 'https://'):$and2):$and1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						slash = uri['rfind']('/');
						return (typeof ($add5=$p['__getslice'](uri, 0, (typeof ($add3=slash)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
				}
				return url;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['_convertUrlToAbsolute'] = $method;
			$method = $pyjs__bind_method2('asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					user = arguments[2];
					pwd = arguments[3];
					url = arguments[4];
					postData = arguments[5];
					handler = arguments[6];
					returnxml = arguments[7];
					content_type = arguments[8];
					headers = arguments[9];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 10)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '43f3220b8cba753b27903e70fd0205d4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[10][1];
				if (typeof headers == 'undefined') headers=arguments.callee.__args__[11][1];
				var hval,$iter1_iter,localHandler,$bool33,base64,$bool25,$bool27,$bool26,$iter1_array,$bool29,$bool28,$iter1_nextval,$bool40,$and4,$and5,$and6,$9,$6,$10,$4,$5,$3,xmlHttp,$iter1_type,h,onprogress,$pyjs_try_err,$bool32,$bool30,$bool31,$iter1_idx,$bool38,$bool39,onreadystatechange;
				if ((($bool25=$p['op_is'](headers, null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					headers = $p['dict']([]);
				}
				if ((($bool29=((($bool26=$and4=user) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool27=$and5=pwd) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool28=headers.__contains__('Authorization')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and5):$and4)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					base64 = $p['___import___']('base64', 'pyjamas');
					headers.__setitem__('Authorization', $p['sprintf']('Basic %s', base64['b64encode']($p['sprintf']('%s:%s', $p['tuple']([user, pwd])))));
				}
				if ((($bool30=!$p['op_is'](content_type, null)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					headers.__setitem__('Content-Type', content_type);
				}
				if ((($bool32=!(($bool31=headers.__contains__('Content-Type')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					if ((($bool33=returnxml) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
						headers.__setitem__('Content-Type', 'application/xml; charset=utf-8');
					}
					else {
						headers.__setitem__('Content-Type', 'text/plain; charset=utf-8');
					}
				}
				xmlHttp = self['doCreateXmlHTTPRequest']();
				onreadystatechange = function(evnt) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof evnt == 'undefined') evnt=arguments.callee.__args__[2][1];
					var status,$or5,localHandler,$bool36,$bool37,$bool34,$bool35,response,$or6;
					if ((($bool34=$p['op_eq']($p['getattr'](xmlHttp, 'readyState'), $constant_int_4)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
delete xmlHttp.onreadystatechange;
						localHandler = handler;
						status = $p['getattr'](xmlHttp, 'status');
						if ((($bool35=returnxml) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
							response = $p['getattr'](xmlHttp, 'responseXML');
						}
						else {
							response = $p['getattr'](xmlHttp, 'responseText');
						}
						handler = null;
						xmlHttp = null;
						if ((($bool37=((($bool36=$or5=$p['op_eq'](status, $constant_int_200)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
							false :
							(typeof $bool36=='object'?
								(typeof $bool36.__nonzero__=='function'?
									$bool36.__nonzero__() :
									(typeof $bool36.__len__=='function'?
										($bool36.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or5:$p['op_eq'](status, $constant_int_0))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
							localHandler['onCompletion'](response);
						}
						else {
							localHandler['onError'](response, status);
						}
					}
					return null;
				};
				onreadystatechange.__name__ = 'onreadystatechange';

				onreadystatechange.__bind_type__ = 0;
				onreadystatechange.__args__ = [null,null,['evnt', null]];
				xmlHttp.__is_instance__ && typeof xmlHttp.__setattr__ == 'function' ? xmlHttp.__setattr__('onreadystatechange', onreadystatechange) : $p['setattr'](xmlHttp, 'onreadystatechange', onreadystatechange); 
				if ((($bool38=$p['hasattr'](handler, 'onProgress')) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					onprogress = function(evnt) {
						if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
						if (typeof evnt == 'undefined') evnt=arguments.callee.__args__[2][1];

						handler['onProgress'](evnt);
						return null;
					};
					onprogress.__name__ = 'onprogress';

					onprogress.__bind_type__ = 0;
					onprogress.__args__ = [null,null,['evnt', null]];
					xmlHttp.__is_instance__ && typeof xmlHttp.__setattr__ == 'function' ? xmlHttp.__setattr__('onprogress', onprogress) : $p['setattr'](xmlHttp, 'onprogress', onprogress); 
				}
				try {
					xmlHttp['open'](method, url, true);
					$iter1_iter = headers;
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						h = $iter1_nextval;
						if ((($bool39=$p['isinstance']((typeof ($3=headers).__array != 'undefined'?
							((typeof $3.__array[$4=h]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__(h)), $p['basestring'])) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
							xmlHttp['setRequestHeader'](h, $p['str']((typeof ($5=headers).__array != 'undefined'?
								((typeof $5.__array[$6=h]) != 'undefined'?$5.__array[$6]:
									$5.__getitem__($6)):
									$5.__getitem__(h))));
						}
						else {
							hval = ';'['join'](function(){
								var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp1,$iter2_idx,$8,$7,$iter2_array;
	$collcomp1 = $p['list']();
							$iter2_iter = (typeof ($7=headers).__array != 'undefined'?
								((typeof $7.__array[$8=h]) != 'undefined'?$7.__array[$8]:
									$7.__getitem__($8)):
									$7.__getitem__(h));
							if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
								$iter2_type = 0;
							} else {
								$iter2_iter = $iter2_iter.__iter__();
								$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter2_idx = 0;
							while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
								i = $iter2_nextval;
								$collcomp1['append']($p['str'](i));
							}

	return $collcomp1;}());
							xmlHttp['setRequestHeader'](h, hval);
						}
					}
					if ((($bool40=$p['op_is'](postData, null)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
						postData = '';
					}
					xmlHttp['send'](postData);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
delete xmlHttp.onreadystatechange;
						localHandler = handler;
						handler = null;
						xmlHttp = null;
						localHandler['onError']($p['str']((typeof ($9=$m['sys']['exc_info']()).__array != 'undefined'?
							((typeof $9.__array[$10=$constant_int_1]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__($constant_int_1))), '');
						return null;
					}
				}
				return xmlHttp;
			}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml'],['content_type', null],['headers', null]]);
			$cls_definition['asyncImpl'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.HTTPRequest */


/* end module: pyjamas.HTTPRequest */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'sys', 'base64']
*/
