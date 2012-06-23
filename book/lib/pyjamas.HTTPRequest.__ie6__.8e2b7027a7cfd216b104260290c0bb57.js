/* start module: pyjamas.HTTPRequest */
$pyjs['loaded_modules']['pyjamas.HTTPRequest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.HTTPRequest']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.HTTPRequest'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.HTTPRequest'];
	$m['__repr__'] = function() { return '<module: pyjamas.HTTPRequest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.HTTPRequest';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['HTTPRequest'] = $pyjs['loaded_modules']['pyjamas.HTTPRequest'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_8 = new $p['int'](8);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas');
		if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
		}
		$m['sys'] = $p['___import___']('sys', 'pyjamas');
		$m['handlers'] = $p['dict']([]);
		$m['XULrunnerHackCallback'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.HTTPRequest';
			$cls_definition['__md5__'] = '1fe73208a424efe9a33ae5408ecea1fd';
			$method = $pyjs__bind_method2('__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 11, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 6 || arguments['length'] > 11)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 11, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1fe73208a424efe9a33ae5408ecea1fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof postData == 'undefined') postData=arguments['callee']['__args__'][8][1];
				if (typeof handler == 'undefined') handler=arguments['callee']['__args__'][9][1];
				if (typeof return_xml == 'undefined') return_xml=arguments['callee']['__args__'][10][1];
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][11][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][12][1];

 				return null;
			}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('callback', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1fe73208a424efe9a33ae5408ecea1fd') {
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
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('XULrunnerHackCallback', $p['tuple']($bases), $data);
		})();
		$m['HTTPRequest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.HTTPRequest';
			$cls_definition['__md5__'] = '24f555fb028891c1dec6339747dfc5cc';
			$method = $pyjs__bind_method2('asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					handler = arguments[2];
					returnxml = arguments[3];
					content_type = arguments[4];
					headers = arguments[5];
					user = arguments[6];
					pwd = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments['callee']['__args__'][5][1];
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][6][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][7][1];
				if (typeof user == 'undefined') user=arguments['callee']['__args__'][8][1];
				if (typeof pwd == 'undefined') pwd=arguments['callee']['__args__'][9][1];
				var postData;
				postData = null;
				if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
					throw ($p['RuntimeError']('Invalid call to asyncGet: handler is not a valid request handler'));
				}
				return self['asyncImpl']('GET', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncGet'] = $method;
			$method = $pyjs__bind_method2('asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 9, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 9, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments['callee']['__args__'][6][1];
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][7][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][8][1];
				if (typeof user == 'undefined') user=arguments['callee']['__args__'][9][1];
				if (typeof pwd == 'undefined') pwd=arguments['callee']['__args__'][10][1];

				if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
					throw ($p['RuntimeError']('Invalid call to asyncPost: handler is not a valid request handler'));
				}
				return self['asyncImpl']('POST', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncPost'] = $method;
			$method = $pyjs__bind_method2('asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					handler = arguments[2];
					returnxml = arguments[3];
					content_type = arguments[4];
					headers = arguments[5];
					user = arguments[6];
					pwd = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments['callee']['__args__'][5][1];
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][6][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][7][1];
				if (typeof user == 'undefined') user=arguments['callee']['__args__'][8][1];
				if (typeof pwd == 'undefined') pwd=arguments['callee']['__args__'][9][1];
				var postData;
				postData = null;
				if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
					throw ($p['RuntimeError']('Invalid call to asyncDelete: handler is not a valid request handler'));
				}
				return self['asyncImpl']('DELETE', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncDelete'] = $method;
			$method = $pyjs__bind_method2('asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 9, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 9, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof returnxml == 'undefined') returnxml=arguments['callee']['__args__'][6][1];
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][7][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][8][1];
				if (typeof user == 'undefined') user=arguments['callee']['__args__'][9][1];
				if (typeof pwd == 'undefined') pwd=arguments['callee']['__args__'][10][1];

				if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
					throw ($p['RuntimeError']('Invalid call to asyncPut: handler is not a valid request handler'));
				}
				return self['asyncImpl']('PUT', user, pwd, url, postData, handler, returnxml, content_type, headers);
			}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
			$cls_definition['asyncPut'] = $method;
			$method = $pyjs__bind_method2('createXmlHTTPRequest', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return new ActiveXObject("Msxml2['XMLHTTP']");
			}
	, 1, [null,null,['self']]);
			$cls_definition['doCreateXmlHTTPRequest'] = $method;
			$method = $pyjs__bind_method2('onProgress', function(sender, event, ignorearg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var localHandler,xmlHttp;
				xmlHttp = $p['getattr'](event, 'target');
				localHandler = $m['handlers']['get'](xmlHttp);
				if ($p['bool']($p['hasattr'](localHandler, 'onProgress'))) {
					localHandler['onProgress'](event);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
			$cls_definition['onProgress'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(sender, event, ignorearg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var status,localHandler,xmlHttp,$or2,handler,responseText,$or1;
				xmlHttp = $p['getattr'](event, 'target');
				localHandler = $m['handlers']['get'](xmlHttp);
				$m['handlers']['__delitem__'](xmlHttp);
				responseText = $p['getattr'](xmlHttp, 'responseText');
				status = $p['getattr'](xmlHttp, 'status');
				handler = null;
				xmlHttp = null;
				if ($p['bool']($p['op_eq'](status, $constant_int_0))) {
					$p['printFunc'](['HACK ALERT! webkit wrapper returns 0 not 200!'], 1);
				}
				if ($p['bool'](($p['bool']($or1=$p['op_eq'](status, $constant_int_200))?$or1:$p['op_eq'](status, $constant_int_0)))) {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					xmlHttp = arguments[1];
					event = arguments[2];
					ignorearg = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var status,$or4,localHandler,$or3,handler,$pyjs_try_err,responseText;
				try {
					xmlHttp = $m['get_main_frame']()['gobject_wrap'](xmlHttp);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				if ($p['bool'](!$p['op_eq']($p['getattr'](xmlHttp, 'readyState'), $constant_int_4))) {
					return null;
				}
				localHandler = $m['handlers']['get'](xmlHttp);
				$m['handlers']['__delitem__'](xmlHttp);
				responseText = $p['getattr'](xmlHttp, 'responseText');
				status = $p['getattr'](xmlHttp, 'status');
				handler = null;
				xmlHttp = null;
				if ($p['bool'](($p['bool']($or3=$p['op_eq'](status, $constant_int_200))?$or3:$p['op_eq'](status, $constant_int_0)))) {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add4,sep,$and1,$and3,uri,$add2,$add3,$add1,$add6,slash,$add5,$and2;
				uri = $m['pygwt']['getModuleBaseURL']();
				if ($p['bool']($p['op_eq'](url['__getitem__']($constant_int_0), '/'))) {
					sep = uri['find']('://');
					if ($p['bool'](!$p['bool'](uri['startswith']('file://')))) {
						slash = uri['find']('/', $p['__op_add']($add1=sep,$add2=$constant_int_3));
						if ($p['bool'](($p['cmp'](slash, $constant_int_0) == 1))) {
							uri = $p['__getslice'](uri, 0, slash);
						}
					}
					return $p['sprintf']('%s%s', $p['tuple']([uri, url]));
				}
				else {
					if ($p['bool'](($p['bool']($and1=!$p['op_eq']($p['__getslice'](url, 0, $constant_int_7), 'file://'))?($p['bool']($and2=!$p['op_eq']($p['__getslice'](url, 0, $constant_int_7), 'http://'))?!$p['op_eq']($p['__getslice'](url, 0, $constant_int_8), 'https://'):$and2):$and1))) {
						slash = uri['rfind']('/');
						return $p['__op_add']($add5=$p['__getslice'](uri, 0, $p['__op_add']($add3=slash,$add4=$constant_int_1)),$add6=url);
					}
				}
				return url;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['_convertUrlToAbsolute'] = $method;
			$method = $pyjs__bind_method2('asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 7 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 10, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 8 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 10, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24f555fb028891c1dec6339747dfc5cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][10][1];
				if (typeof headers == 'undefined') headers=arguments['callee']['__args__'][11][1];
				var hval,$iter1_iter,localHandler,base64,$iter1_array,$iter1_nextval,$and4,$and5,$and6,xmlHttp,$iter1_type,h,onprogress,$pyjs_try_err,$iter1_idx,onreadystatechange;
				if ($p['bool']($p['op_is'](headers, null))) {
					headers = $p['dict']([]);
				}
				if ($p['bool'](($p['bool']($and4=user)?($p['bool']($and5=pwd)?!$p['bool'](headers['__contains__']('Authorization')):$and5):$and4))) {
					base64 = $p['___import___']('base64', 'pyjamas');
					headers['__setitem__']('Authorization', $p['sprintf']('Basic %s', base64['b64encode']($p['sprintf']('%s:%s', $p['tuple']([user, pwd])))));
				}
				if ($p['bool'](!$p['op_is'](content_type, null))) {
					headers['__setitem__']('Content-Type', content_type);
				}
				if ($p['bool'](!$p['bool'](headers['__contains__']('Content-Type')))) {
					if ($p['bool'](returnxml)) {
						headers['__setitem__']('Content-Type', 'application/xml; charset=utf-8');
					}
					else {
						headers['__setitem__']('Content-Type', 'text/plain; charset=utf-8');
					}
				}
				xmlHttp = self['doCreateXmlHTTPRequest']();
				onreadystatechange = function(evnt) {
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
					if (typeof evnt == 'undefined') evnt=arguments['callee']['__args__'][2][1];
					var status,$or5,localHandler,response,$or6;
					if ($p['bool']($p['op_eq']($p['getattr'](xmlHttp, 'readyState'), $constant_int_4))) {
delete xmlHttp['onreadystatechange'];
						localHandler = handler;
						status = $p['getattr'](xmlHttp, 'status');
						if ($p['bool'](returnxml)) {
							response = $p['getattr'](xmlHttp, 'responseXML');
						}
						else {
							response = $p['getattr'](xmlHttp, 'responseText');
						}
						handler = null;
						xmlHttp = null;
						if ($p['bool'](($p['bool']($or5=$p['op_eq'](status, $constant_int_200))?$or5:$p['op_eq'](status, $constant_int_0)))) {
							localHandler['onCompletion'](response);
						}
						else {
							localHandler['onError'](response, status);
						}
					}
					return null;
				};
				onreadystatechange['__name__'] = 'onreadystatechange';

				onreadystatechange['__bind_type__'] = 0;
				onreadystatechange['__args__'] = [null,null,['evnt', null]];
				xmlHttp['__is_instance__'] && typeof xmlHttp['__setattr__'] == 'function' ? xmlHttp['__setattr__']('onreadystatechange', onreadystatechange) : $p['setattr'](xmlHttp, 'onreadystatechange', onreadystatechange); 
				if ($p['bool']($p['hasattr'](handler, 'onProgress'))) {
					onprogress = function(evnt) {
						if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
						if (typeof evnt == 'undefined') evnt=arguments['callee']['__args__'][2][1];

						handler['onProgress'](evnt);
						return null;
					};
					onprogress['__name__'] = 'onprogress';

					onprogress['__bind_type__'] = 0;
					onprogress['__args__'] = [null,null,['evnt', null]];
					xmlHttp['__is_instance__'] && typeof xmlHttp['__setattr__'] == 'function' ? xmlHttp['__setattr__']('onprogress', onprogress) : $p['setattr'](xmlHttp, 'onprogress', onprogress); 
				}
				try {
					xmlHttp['open'](method, url, true);
					$iter1_iter = headers;
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						h = $iter1_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](headers['__getitem__'](h), $p['basestring']))) {
							xmlHttp['setRequestHeader'](h, $p['str'](headers['__getitem__'](h)));
						}
						else {
							hval = ';'['join'](function(){
								var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
							$iter2_iter = headers['__getitem__'](h);
							$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
							while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
								i = $iter2_nextval['$nextval'];
								$collcomp1['append']($p['str'](i));
							}

	return $collcomp1;}());
							xmlHttp['setRequestHeader'](h, hval);
						}
					}
					if ($p['bool']($p['op_is'](postData, null))) {
						postData = '';
					}
					xmlHttp['send'](postData);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
delete xmlHttp['onreadystatechange'];
						localHandler = handler;
						handler = null;
						xmlHttp = null;
						localHandler['onError']($p['str']($m['sys']['exc_info']()['__getitem__']($constant_int_1)), '');
						return null;
					}
				}
				return xmlHttp;
			}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml'],['content_type', null],['headers', null]]);
			$cls_definition['asyncImpl'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.HTTPRequest */


/* end module: pyjamas.HTTPRequest */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'sys', 'base64']
*/
