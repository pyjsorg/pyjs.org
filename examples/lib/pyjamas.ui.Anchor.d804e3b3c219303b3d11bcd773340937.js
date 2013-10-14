/* start module: pyjamas.ui.Anchor */
$pyjs['loaded_modules']['pyjamas.ui.Anchor'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Anchor']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Anchor'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Anchor'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Anchor>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Anchor';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Anchor'] = $pyjs['loaded_modules']['pyjamas.ui.Anchor'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$m['_Attribute'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Anchor';
			$cls_definition['__md5__'] = '58bc635ffee2e009a84a9c46a0630100';
			$method = $pyjs__bind_method2('__init__', function(element, attribute, attribute_type, type_restriction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					attribute = arguments[2];
					attribute_type = arguments[3];
					type_restriction = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58bc635ffee2e009a84a9c46a0630100') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof attribute_type == 'undefined') attribute_type=arguments['callee']['__args__'][5][1];
				if (typeof type_restriction == 'undefined') type_restriction=arguments['callee']['__args__'][6][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('element', element) : $p['setattr'](self, 'element', element); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('attribute', attribute) : $p['setattr'](self, 'attribute', attribute); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_type', attribute_type) : $p['setattr'](self, '_type', attribute_type); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_restriction', type_restriction) : $p['setattr'](self, '_restriction', type_restriction); 
				return null;
			}
	, 1, [null,null,['self'],['element'],['attribute'],['attribute_type', null],['type_restriction', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('get', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58bc635ffee2e009a84a9c46a0630100') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), $p['getattr'](self, 'attribute'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['get'] = $method;
			$method = $pyjs__bind_method2('set', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58bc635ffee2e009a84a9c46a0630100') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setAttribute']($p['getattr'](self, 'element'), $p['getattr'](self, 'attribute'), value);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['set'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58bc635ffee2e009a84a9c46a0630100') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['removeAttribute']($p['getattr'](self, 'element'), $p['getattr'](self, 'attribute'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_Attribute', $p['tuple']($bases), $data);
		})();
		$m['_Attributes'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Anchor';
			$cls_definition['__md5__'] = 'bd98cc93de8426558e0d1efd33cd3035';
			$method = $pyjs__bind_method2('__init__', function(element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bd98cc93de8426558e0d1efd33cd3035') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', $m['_Attribute'](element, 'name', 'cdata', 'cs')) : $p['setattr'](self, '$$name', $m['_Attribute'](element, 'name', 'cdata', 'cs')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('href', $m['_Attribute'](element, 'href', 'uri', 'ct')) : $p['setattr'](self, 'href', $m['_Attribute'](element, 'href', 'uri', 'ct')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hreflang', $m['_Attribute'](element, 'hreflang', 'langcode', 'ci')) : $p['setattr'](self, 'hreflang', $m['_Attribute'](element, 'hreflang', 'langcode', 'ci')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $m['_Attribute'](element, 'type', 'content-type', 'ci')) : $p['setattr'](self, 'type', $m['_Attribute'](element, 'type', 'content-type', 'ci')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rel', $m['_Attribute'](element, 'rel', 'link-types', 'ci')) : $p['setattr'](self, 'rel', $m['_Attribute'](element, 'rel', 'link-types', 'ci')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rev', $m['_Attribute'](element, 'rev', 'link-types', 'ci')) : $p['setattr'](self, 'rev', $m['_Attribute'](element, 'rev', 'link-types', 'ci')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('charset', $m['_Attribute'](element, 'charset', 'charset', 'ci')) : $p['setattr'](self, 'charset', $m['_Attribute'](element, 'charset', 'charset', 'ci')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('target', $m['_Attribute'](element, 'target', 'target', 'ci')) : $p['setattr'](self, 'target', $m['_Attribute'](element, 'target', 'target', 'ci')); 
				return null;
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_Attributes', $p['tuple']($bases), $data);
		})();
		$m['Anchor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Anchor';
			$cls_definition['__md5__'] = '49e9b191792314b50974d5ef7380ac2b';
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
					if (self.prototype['__md5__'] !== '49e9b191792314b50974d5ef7380ac2b') {
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
				var $or1,$or2,element,$bool1;
				element = ((($bool1=$or1=kwargs['pop']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$m['DOM']['createAnchor']());
				kwargs['__setitem__']('StyleName', kwargs['pop']('StyleName', 'gwt-Anchor'));
				$m['_Attributes']['__init__'](self, element);
				self['setElement'](element);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', null) : $p['setattr'](self, 'widget', null); 
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
				$m['ClickHandler']['__init__'](self);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setWidget', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '49e9b191792314b50974d5ef7380ac2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				widget['removeFromParent']();
				widget['setParent'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', widget) : $p['setattr'](self, 'widget', widget); 
				$m['DOM']['appendChild'](self['getElement'](), widget['getElement']());
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setWidget'] = $method;
			$method = $pyjs__bind_method2('removeWidget', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '49e9b191792314b50974d5ef7380ac2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['widget']['removeFromParent']();
				$m['DOM']['removeChild'](self['getElement'](), self['widget']['getElement']());
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', null) : $p['setattr'](self, 'widget', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['removeWidget'] = $method;
			$method = $pyjs__bind_method2('setHref', function(url) {
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
					if (self.prototype['__md5__'] !== '49e9b191792314b50974d5ef7380ac2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['href']['set'](url);
				return null;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['setHref'] = $method;
			var $bases = new Array($m['Widget'],$m['ClickHandler'],$m['_Attributes']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Anchor', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Anchor */


/* end module: pyjamas.ui.Anchor */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
