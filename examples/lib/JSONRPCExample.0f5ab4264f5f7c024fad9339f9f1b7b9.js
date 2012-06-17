/* start module: JSONRPCExample */
$pyjs.loaded_modules['JSONRPCExample'] = function (__mod_name__) {
	if($pyjs.loaded_modules['JSONRPCExample'].__was_initialized__) return $pyjs.loaded_modules['JSONRPCExample'];
	var $m = $pyjs.loaded_modules["JSONRPCExample"];
	$m.__repr__ = function() { return "<module: JSONRPCExample>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'JSONRPCExample';
	$m.__name__ = __mod_name__;
	try {
		var $bool13;
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
		$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
		$m['JSONRPCExample'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSONRPCExample';
			$cls_definition.__md5__ = '29a6a528a491d04ca663c5f30285efe2';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29a6a528a491d04ca663c5f30285efe2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info,buttons,$iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,method_panel,panel,method,$iter1_idx;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('TEXT_WAITING', 'Waiting for response...') : $p['setattr'](self, 'TEXT_WAITING', 'Waiting for response...'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('TEXT_ERROR', 'Server Error') : $p['setattr'](self, 'TEXT_ERROR', 'Server Error'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('METHOD_ECHO', 'Echo') : $p['setattr'](self, 'METHOD_ECHO', 'Echo'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('METHOD_REVERSE', 'Reverse') : $p['setattr'](self, 'METHOD_REVERSE', 'Reverse'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('METHOD_UPPERCASE', 'UPPERCASE') : $p['setattr'](self, 'METHOD_UPPERCASE', 'UPPERCASE'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('METHOD_LOWERCASE', 'lowercase') : $p['setattr'](self, 'METHOD_LOWERCASE', 'lowercase'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('METHOD_NONEXISTANT', 'Non existant') : $p['setattr'](self, 'METHOD_NONEXISTANT', 'Non existant'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('methods', $p['list']([$p['getattr'](self, 'METHOD_ECHO'), $p['getattr'](self, 'METHOD_REVERSE'), $p['getattr'](self, 'METHOD_UPPERCASE'), $p['getattr'](self, 'METHOD_LOWERCASE'), $p['getattr'](self, 'METHOD_NONEXISTANT')])) : $p['setattr'](self, 'methods', $p['list']([$p['getattr'](self, 'METHOD_ECHO'), $p['getattr'](self, 'METHOD_REVERSE'), $p['getattr'](self, 'METHOD_UPPERCASE'), $p['getattr'](self, 'METHOD_LOWERCASE'), $p['getattr'](self, 'METHOD_NONEXISTANT')])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('remote_php', (typeof EchoServicePHP == "undefined"?$m.EchoServicePHP:EchoServicePHP)()) : $p['setattr'](self, 'remote_php', (typeof EchoServicePHP == "undefined"?$m.EchoServicePHP:EchoServicePHP)()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('remote_py', (typeof EchoServicePython == "undefined"?$m.EchoServicePython:EchoServicePython)()) : $p['setattr'](self, 'remote_py', (typeof EchoServicePython == "undefined"?$m.EchoServicePython:EchoServicePython)()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('status', $m['Label']()) : $p['setattr'](self, 'status', $m['Label']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text_area', $m['TextArea']()) : $p['setattr'](self, 'text_area', $m['TextArea']()); 
				self['text_area']['setText']((typeof ($add1='{\'Test\'} ["String"]\n\tTest Tab\nTest Newline\n\nafter newline\n')==typeof ($add2='Literal String:\n{\'Test\'} [\\"String\\"]\n') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				self['text_area']['setCharacterWidth']($constant_int_80);
				self['text_area']['setVisibleLines']($constant_int_8);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('method_list', $m['ListBox']()) : $p['setattr'](self, 'method_list', $m['ListBox']()); 
				self['method_list']['setName']('hello');
				self['method_list']['setVisibleItemCount']($constant_int_1);
				$iter1_iter = $p['getattr'](self, 'methods');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					method = $iter1_nextval;
					self['method_list']['addItem'](method);
				}
				self['method_list']['setSelectedIndex']($constant_int_0);
				method_panel = $m['HorizontalPanel']();
				method_panel['add']($m['HTML']('Remote string method to call: '));
				method_panel['add']($p['getattr'](self, 'method_list'));
				method_panel['setSpacing']($constant_int_8);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button_php', $m['Button']('Send to PHP Service', self)) : $p['setattr'](self, 'button_php', $m['Button']('Send to PHP Service', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button_py', $m['Button']('Send to Python Service', self)) : $p['setattr'](self, 'button_py', $m['Button']('Send to Python Service', self)); 
				buttons = $m['HorizontalPanel']();
				buttons['add']($p['getattr'](self, 'button_php'));
				buttons['add']($p['getattr'](self, 'button_py'));
				buttons['setSpacing']($constant_int_8);
				info = '<h2>JSON-RPC Example</h2>\n        <p>This example demonstrates the calling of server services with\n           <a href="http://json-rpc.org/">JSON-RPC</a>.\n        </p>\n        <p>Enter some text below, and press a button to send the text\n           to an Echo service on your server. An echo service simply sends the exact same text back that it receives.\n           </p>';
				panel = $m['VerticalPanel']();
				panel['add']($m['HTML'](info));
				panel['add']($p['getattr'](self, 'text_area'));
				panel['add'](method_panel);
				panel['add'](buttons);
				panel['add']($p['getattr'](self, 'status'));
				$m['RootPanel']()['add'](panel);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29a6a528a491d04ca663c5f30285efe2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,text,$bool11,id,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$2,method,$1;
				self['status']['setText']($p['getattr'](self, 'TEXT_WAITING'));
				method = (typeof ($1=$p['getattr'](self, 'methods')).__array != 'undefined'?
					((typeof $1.__array[$2=self['method_list']['getSelectedIndex']()]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(self['method_list']['getSelectedIndex']()));
				text = self['text_area']['getText']();
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'button_php'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=$p['op_eq'](method, $p['getattr'](self, 'METHOD_ECHO'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						id = self['remote_php']['echo'](text, self);
					}
					else if ((($bool3=$p['op_eq'](method, $p['getattr'](self, 'METHOD_REVERSE'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						id = self['remote_php']['callMethod']('reverse', $p['list']([text]), self);
					}
					else if ((($bool4=$p['op_eq'](method, $p['getattr'](self, 'METHOD_UPPERCASE'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						id = self['remote_php']['uppercase'](text, self);
					}
					else if ((($bool5=$p['op_eq'](method, $p['getattr'](self, 'METHOD_LOWERCASE'))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						id = $pyjs_kwargs_call(self['remote_php'], 'lowercase', null, null, [{msg:text}, self]);
					}
					else if ((($bool6=$p['op_eq'](method, $p['getattr'](self, 'METHOD_NONEXISTANT'))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						id = self['remote_php']['nonexistant'](text, self);
					}
				}
				else {
					if ((($bool7=$p['op_eq'](method, $p['getattr'](self, 'METHOD_ECHO'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						id = self['remote_py']['echo'](text, self);
					}
					else if ((($bool8=$p['op_eq'](method, $p['getattr'](self, 'METHOD_REVERSE'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						id = self['remote_py']['reverse'](text, self);
					}
					else if ((($bool9=$p['op_eq'](method, $p['getattr'](self, 'METHOD_UPPERCASE'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						id = self['remote_py']['uppercase'](text, self);
					}
					else if ((($bool10=$p['op_eq'](method, $p['getattr'](self, 'METHOD_LOWERCASE'))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						id = self['remote_py']['lowercase'](text, self);
					}
					else if ((($bool11=$p['op_eq'](method, $p['getattr'](self, 'METHOD_NONEXISTANT'))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						id = self['remote_py']['nonexistant'](text, self);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29a6a528a491d04ca663c5f30285efe2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['status']['setText'](response);
				return null;
			}
	, 1, [null,null,['self'],['response'],['request_info']]);
			$cls_definition['onRemoteResponse'] = $method;
			$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					code = arguments[1];
					errobj = arguments[2];
					request_info = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29a6a528a491d04ca663c5f30285efe2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var message,$3,$6,$bool12,$4,$5;
				message = (typeof ($3=errobj).__array != 'undefined'?
					((typeof $3.__array[$4='message']) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__('message'));
				if ((($bool12=!$p['op_eq'](code, $constant_int_0)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['status']['setText']($p['sprintf']('HTTP error %d: %s', $p['tuple']([code, message])));
				}
				else {
					code = (typeof ($5=errobj).__array != 'undefined'?
						((typeof $5.__array[$6='code']) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__('code'));
					self['status']['setText']($p['sprintf']('JSONRPC Error %s: %s', $p['tuple']([code, message])));
				}
				return null;
			}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONRPCExample', $p['tuple']($bases), $data);
		})();
		$m['EchoServicePHP'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSONRPCExample';
			$cls_definition.__md5__ = '938e6f8b1566780f71caa342af97cf9e';
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
					if (self.prototype.__md5__ !== '938e6f8b1566780f71caa342af97cf9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['JSONProxy']['__init__'](self, 'services/EchoService.php', $p['list'](['echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['JSONProxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('EchoServicePHP', $p['tuple']($bases), $data);
		})();
		$m['EchoServicePython'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSONRPCExample';
			$cls_definition.__md5__ = 'b20b01a47764a272949b32e14bb0fc14';
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
					if (self.prototype.__md5__ !== 'b20b01a47764a272949b32e14bb0fc14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['JSONProxy']['__init__'](self, 'services/EchoService.py', $p['list'](['echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['JSONProxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('EchoServicePython', $p['tuple']($bases), $data);
		})();
		if ((($bool13=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
			$m['pyjd']['setup']('http://127.0.0.1/examples/jsonrpc/public/JSONRPCExample.html');
			$m['app'] = $m['JSONRPCExample']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end JSONRPCExample */


/* end module: JSONRPCExample */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService']
*/
