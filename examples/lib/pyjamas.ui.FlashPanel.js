/* start module: pyjamas.ui.FlashPanel */
$pyjs['loaded_modules']['pyjamas.ui.FlashPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FlashPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FlashPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FlashPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FlashPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlashPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FlashPanel'] = $pyjs['loaded_modules']['pyjamas.ui.FlashPanel'];
	try {
		var $bool1,$bool2;

		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
		if ((($bool2=!(($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1['__nonzero__']=='function'?
					$bool1['__nonzero__']() :
					(typeof $bool1['__len__']=='function'?
						($bool1['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		}
		$m['browser'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return 'w3c';
		};
		$m['browser']['__name__'] = 'browser';

		$m['browser']['__bind_type__'] = 0;
		$m['browser']['__args__'] = [null,null];
		$m['FlashPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.FlashPanel';
			$cls_definition['__md5__'] = '8ba9b5d6e278b36cf8d2e78b224da0b1';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
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
				var element;
				element = $m['DOM']['createDiv']();
				self['setElement'](element);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_id', 'FlashObject') : $p['setattr'](self, 'object_id', 'FlashObject'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_class', null) : $p['setattr'](self, 'object_class', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_width', null) : $p['setattr'](self, 'object_width', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_height', null) : $p['setattr'](self, 'object_height', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flash_url', null) : $p['setattr'](self, 'flash_url', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wmode', null) : $p['setattr'](self, 'wmode', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quality', 'high') : $p['setattr'](self, 'quality', 'high'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('menu', null) : $p['setattr'](self, 'menu', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('allowScriptAccess', 'always') : $p['setattr'](self, 'allowScriptAccess', 'always'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('allowFullscreen', 'false') : $p['setattr'](self, 'allowFullscreen', 'false'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bgColor', '#FFFFFF') : $p['setattr'](self, 'bgColor', '#FFFFFF'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flashvars', '') : $p['setattr'](self, 'flashvars', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('browser', $m['browser']()) : $p['setattr'](self, 'browser', $m['browser']()); 
				$pyjs_kwargs_call($m['Panel'], '__init__', null, kwargs, [{}, self]);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setInnerHTML']($p['getattr'](self, 'element'), self['__getFlashHTML']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('getObjectID', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'object_id');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getObjectID'] = $method;
			$method = $pyjs__bind_method2('setObjectID', function(object_id) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					object_id = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_id', object_id) : $p['setattr'](self, 'object_id', object_id); 
				return null;
			}
	, 1, [null,null,['self'],['object_id']]);
			$cls_definition['setObjectID'] = $method;
			$method = $pyjs__bind_method2('getObjectClass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'object_class');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getObjectClass'] = $method;
			$method = $pyjs__bind_method2('setObjectClass', function(object_class) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					object_class = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_class', object_class) : $p['setattr'](self, 'object_class', object_class); 
				return null;
			}
	, 1, [null,null,['self'],['object_class']]);
			$cls_definition['setObjectClass'] = $method;
			$method = $pyjs__bind_method2('getObjectWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'object_width');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getObjectWidth'] = $method;
			$method = $pyjs__bind_method2('setObjectWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_width', $p['str'](width)) : $p['setattr'](self, 'object_width', $p['str'](width)); 
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setObjectWidth'] = $method;
			$method = $pyjs__bind_method2('getObjectHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'object_height');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getObjectHeight'] = $method;
			$method = $pyjs__bind_method2('setObjectHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('object_height', $p['str'](height)) : $p['setattr'](self, 'object_height', $p['str'](height)); 
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setObjectHeight'] = $method;
			$method = $pyjs__bind_method2('getFlashUrl', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'flash_url');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFlashUrl'] = $method;
			$method = $pyjs__bind_method2('setFlashUrl', function(flash_url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					flash_url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flash_url', flash_url) : $p['setattr'](self, 'flash_url', flash_url); 
				return null;
			}
	, 1, [null,null,['self'],['flash_url']]);
			$cls_definition['setFlashUrl'] = $method;
			$method = $pyjs__bind_method2('getWmode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'wmode');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWmode'] = $method;
			$method = $pyjs__bind_method2('setWmode', function(wmode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					wmode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wmode', wmode) : $p['setattr'](self, 'wmode', wmode); 
				return null;
			}
	, 1, [null,null,['self'],['wmode']]);
			$cls_definition['setWmode'] = $method;
			$method = $pyjs__bind_method2('getQuality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'quality');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getQuality'] = $method;
			$method = $pyjs__bind_method2('setQuality', function(quality) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					quality = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quality', quality) : $p['setattr'](self, 'quality', quality); 
				return null;
			}
	, 1, [null,null,['self'],['quality']]);
			$cls_definition['setQuality'] = $method;
			$method = $pyjs__bind_method2('getMenu', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3;
				if ((($bool3=$p['op_eq']($p['getattr'](self, 'menu'), 'true')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
				else {
					return false;
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMenu'] = $method;
			$method = $pyjs__bind_method2('setMenu', function(menu) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					menu = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4;
				if ((($bool4=menu) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('menu', 'true') : $p['setattr'](self, 'menu', 'true'); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('menu', 'false') : $p['setattr'](self, 'menu', 'false'); 
				}
				return null;
			}
	, 1, [null,null,['self'],['menu']]);
			$cls_definition['setMenu'] = $method;
			$method = $pyjs__bind_method2('getAllowFullscreen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool5;
				if ((($bool5=$p['op_eq']($p['getattr'](self, 'allowFullscreen'), 'true')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					return true;
				}
				else {
					return false;
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAllowFullscreen'] = $method;
			$method = $pyjs__bind_method2('setAllowFullscreen', function(allowFullscreen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					allowFullscreen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6;
				if ((($bool6=allowFullscreen) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('allowFullscreen', 'true') : $p['setattr'](self, 'allowFullscreen', 'true'); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('allowFullscreen', 'false') : $p['setattr'](self, 'allowFullscreen', 'false'); 
				}
				return null;
			}
	, 1, [null,null,['self'],['allowFullscreen']]);
			$cls_definition['setAllowFullscreen'] = $method;
			$method = $pyjs__bind_method2('getBGColor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'bgColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBGColor'] = $method;
			$method = $pyjs__bind_method2('setBGColor', function(bgcolor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bgcolor = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bgColor', bgcolor) : $p['setattr'](self, 'bgColor', bgcolor); 
				return null;
			}
	, 1, [null,null,['self'],['bgcolor']]);
			$cls_definition['setBGColor'] = $method;
			$method = $pyjs__bind_method2('getFlashVars', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'flashvars');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFlashVars'] = $method;
			$method = $pyjs__bind_method2('setFlashVars', function(flashvars) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					flashvars = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flashvars', flashvars) : $p['setattr'](self, 'flashvars', flashvars); 
				return null;
			}
	, 1, [null,null,['self'],['flashvars']]);
			$cls_definition['setFlashVars'] = $method;
			$method = $pyjs__bind_method2('__getFlashHTML', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add44,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$add42,$add41,$add53,$add40,flashvars,$add29,$add28,$add61,$add60,$add49,$add48,$add21,$add20,$add22,$add25,$add24,$add27,$add26,html,$add43,$add46,$add58,$add62,$add47,$add64,$add59,$add52,$bool17,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add54,$bool8,$bool9,$add18,$add19,$add63,$add50,$add51,$add38,$add39,obj,$add55,$add56,$add57,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add45,$add8,$add9,$add23,$bool7;
				obj = (typeof ($add3=(typeof ($add1='id="')==typeof ($add2=$p['getattr'](self, 'object_id')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='"') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				if ((($bool7=$p['getattr'](self, 'object_width')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					obj = (typeof ($add9=obj)==typeof ($add10=(typeof ($add7=(typeof ($add5=' width="')==typeof ($add6=$p['getattr'](self, 'object_width')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($add8='"') && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				if ((($bool8=$p['getattr'](self, 'object_height')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					obj = (typeof ($add15=obj)==typeof ($add16=(typeof ($add13=(typeof ($add11=' height="')==typeof ($add12=$p['getattr'](self, 'object_height')) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($add14='"') && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				if ((($bool9=$p['getattr'](self, 'object_class')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					obj = (typeof ($add21=obj)==typeof ($add22=(typeof ($add19=(typeof ($add17=' class="')==typeof ($add18=$p['getattr'](self, 'object_class')) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))==typeof ($add20='"') && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
				}
				if ((($bool10=$p['op_eq']($p['getattr'](self, 'browser'), 'ie')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					obj = (typeof ($add23=obj)==typeof ($add24=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"') && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				else {
					obj = (typeof ($add25=obj)==typeof ($add26=' type="application/x-shockwave-flash"') && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
					obj = (typeof ($add31=obj)==typeof ($add32=(typeof ($add29=(typeof ($add27=' data="')==typeof ($add28=$p['getattr'](self, 'flash_url')) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($add30='"') && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30))) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32));
				}
				html = $p['list']([$p['sprintf']('<object %s>', obj)]);
				if ((($bool11=$p['getattr'](self, 'flash_url')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					html['append']((typeof ($add35=(typeof ($add33='<param name="movie" value="')==typeof ($add34=$p['getattr'](self, 'flash_url')) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)))==typeof ($add36='" />') && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36)));
				}
				if ((($bool12=$p['getattr'](self, 'quality')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					html['append']((typeof ($add39=(typeof ($add37='<param name="quality" value="')==typeof ($add38=$p['getattr'](self, 'quality')) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($add40='" />') && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40)));
				}
				if ((($bool13=!$p['op_eq']($p['getattr'](self, 'allowScriptAccess'), null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					html['append']((typeof ($add43=(typeof ($add41='<param name="allowscriptaccess" value="')==typeof ($add42=$p['getattr'](self, 'allowScriptAccess')) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42)))==typeof ($add44='" />') && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44)));
				}
				if ((($bool14=!$p['op_eq']($p['getattr'](self, 'allowFullscreen'), null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					html['append']((typeof ($add47=(typeof ($add45='<param name="allowfullscreen" value="')==typeof ($add46=$p['getattr'](self, 'allowFullscreen')) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)))==typeof ($add48='" />') && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48)));
				}
				if ((($bool15=$p['getattr'](self, 'bgColor')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					html['append']((typeof ($add51=(typeof ($add49='<param name="bgcolor" value="')==typeof ($add50=$p['getattr'](self, 'bgColor')) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50)))==typeof ($add52='"/>') && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)));
				}
				if ((($bool16=!$p['op_eq']($p['getattr'](self, 'wmode'), null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					html['append']((typeof ($add55=(typeof ($add53='<param name="wmode" value="')==typeof ($add54=$p['getattr'](self, 'wmode')) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)))==typeof ($add56='" />') && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56)));
				}
				if ((($bool17=!$p['op_eq']($p['getattr'](self, 'menu'), null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					html['append']((typeof ($add59=(typeof ($add57='<param name="menu" value="')==typeof ($add58=$p['getattr'](self, 'menu')) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58)))==typeof ($add60='" />') && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60)));
				}
				html['append']((typeof ($add63=(typeof ($add61='<param name="flashvars" value="')==typeof ($add62=self['getFlashVars']()) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))==typeof ($add64='" />') && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)));
				html['append']('\n        <div class="noflash">\n            <h3>You have no flash plugin installed</h3>\n            <p>Click here to download latest version</p>\n            <p>Download latest version from <a href=\'http://www.adobe.com/go/getflashplayer\'>here</a></p>\n        </div>\n        ');
				html['append']('</object>');
				flashvars = ''['join'](html);
				return flashvars;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__getFlashHTML'] = $method;
			$method = $pyjs__bind_method2('getMovieElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				element = $m['DOM']['getElementById']($p['getattr'](self, 'object_id'));
				return element;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMovieElement'] = $method;
			$method = $pyjs__bind_method2('callFlash', function(functionName, $$arguments) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					functionName = arguments[1];
					$$arguments = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$arguments == 'undefined') $$arguments=arguments['callee']['__args__'][4][1];
				var $$arguments;
				throw ($p['NotImplemented']('calling of javascript and conversion of javascript parameters is required'));
				return null;
			}
	, 1, [null,null,['self'],['functionName'],['$$arguments', $p['list']([])]]);
			$cls_definition['callFlash'] = $method;
			$method = $pyjs__bind_method2('toJS', function(list_or_dict) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					list_or_dict = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplemented']('conversion of javascript parameters is required'));
				return null;
			}
	, 1, [null,null,['self'],['list_or_dict']]);
			$cls_definition['toJS'] = $method;
			$method = $pyjs__bind_method2('flashArgumentsToXML', function($$arguments, num) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$arguments = arguments[1];
					num = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ba9b5d6e278b36cf8d2e78b224da0b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$arguments;
				$$arguments = self['toJS']($$arguments);
				return $wnd['__flash__argumentsToXML']($$arguments, num);
				return null;
			}
	, 1, [null,null,['self'],['$$arguments'],['num']]);
			$cls_definition['flashArgumentsToXML'] = $method;
			var $bases = new Array($m['Panel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FlashPanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.FlashPanel */


/* end module: pyjamas.ui.FlashPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel', 'pyjd']
*/
