/* start module: pyjamas.ui.Sink */
$pyjs.loaded_modules['pyjamas.ui.Sink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Sink'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Sink'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Sink"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Sink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Sink';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Sink'] = $pyjs.loaded_modules['pyjamas.ui.Sink'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_0 = new $p['int'](0);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
		$m['SinkList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Sink';
			$cls_definition.__md5__ = '637474951859611e257d8c557a0b0559';
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
					if (self.prototype.__md5__ !== '637474951859611e257d8c557a0b0559') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Composite']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vp_list', $m['VerticalPanel']()) : $p['setattr'](self, 'vp_list', $m['VerticalPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sinks', $p['list']([])) : $p['setattr'](self, 'sinks', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'selectedSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				self['initWidget']($p['getattr'](self, 'vp_list'));
				self['setStyleName']('ks-List');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(info) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					info = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '637474951859611e257d8c557a0b0559') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var link,name;
				name = info['getName']();
				link = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:name}, name, false]);
				link['setStyleName']('ks-SinkItem');
				self['vp_list']['add'](link);
				self['sinks']['append'](info);
				return null;
			}
	, 1, [null,null,['self'],['info']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('find', function(sinkName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sinkName = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '637474951859611e257d8c557a0b0559') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info,$iter1_nextval,$iter1_type,$iter1_iter,$bool1,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'sinks');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					info = $iter1_nextval;
					if ((($bool1=$p['op_eq'](info['getName'](), sinkName)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						return info;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sinkName']]);
			$cls_definition['find'] = $method;
			$method = $pyjs__bind_method2('setSinkSelection', function(name) {
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
					if (self.prototype.__md5__ !== '637474951859611e257d8c557a0b0559') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info,widget,$iter2_nextval,$iter2_type,$iter2_iter,i,$bool2,$bool3,$iter2_idx,$len1,$2,$iter2_array,$1;
				if ((($bool2=!$p['op_eq']($p['getattr'](self, 'selectedSink'), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'))['removeStyleName']('ks-SinkItem-selected');
				}
				$iter2_iter = $p['range']((($len1=$p['getattr'](self, 'sinks')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					info = (typeof ($1=$p['getattr'](self, 'sinks')).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i));
					if ((($bool3=$p['op_eq'](info['getName'](), name)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedSink', i) : $p['setattr'](self, 'selectedSink', i); 
						widget = self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'));
						widget['addStyleName']('ks-SinkItem-selected');
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['setSinkSelection'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SinkList', $p['tuple']($bases), $data);
		})();
		$m['Sink'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Sink';
			$cls_definition.__md5__ = '29edc63d885cc4fe24125f7ed0626e4e';
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
					if (self.prototype.__md5__ !== '29edc63d885cc4fe24125f7ed0626e4e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Composite']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onHide', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29edc63d885cc4fe24125f7ed0626e4e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onHide'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29edc63d885cc4fe24125f7ed0626e4e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('baseURL', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29edc63d885cc4fe24125f7ed0626e4e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return '';
			}
	, 1, [null,null,['self']]);
			$cls_definition['baseURL'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Sink', $p['tuple']($bases), $data);
		})();
		$m['SinkInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Sink';
			$cls_definition.__md5__ = 'ae8fcf9ff7533525a104874e09bac28f';
			$method = $pyjs__bind_method2('__init__', function(name, desc, object_type) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					desc = arguments[2];
					object_type = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae8fcf9ff7533525a104874e09bac28f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('description', desc) : $p['setattr'](self, 'description', desc); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('object_type', object_type) : $p['setattr'](self, 'object_type', object_type); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', null) : $p['setattr'](self, 'instance', null); 
				return null;
			}
	, 1, [null,null,['self'],['name'],['desc'],['object_type']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae8fcf9ff7533525a104874e09bac28f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj;
				obj = self['object_type']();
				obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('$$name', $p['getattr'](self, '$$name')) : $p['setattr'](obj, '$$name', $p['getattr'](self, '$$name')); 
				return obj;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createInstance'] = $method;
			$method = $pyjs__bind_method2('getDescription', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae8fcf9ff7533525a104874e09bac28f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'description');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDescription'] = $method;
			$method = $pyjs__bind_method2('getInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae8fcf9ff7533525a104874e09bac28f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4;
				if ((($bool4=$p['op_is']($p['getattr'](self, 'instance'), null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', self['createInstance']()) : $p['setattr'](self, 'instance', self['createInstance']()); 
				}
				return $p['getattr'](self, 'instance');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getInstance'] = $method;
			$method = $pyjs__bind_method2('getName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae8fcf9ff7533525a104874e09bac28f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '$$name');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Sink */


/* end module: pyjamas.ui.Sink */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink']
*/
