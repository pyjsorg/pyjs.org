/* start module: pyjamas.Canvas2D */
$pyjs['loaded_modules']['pyjamas.Canvas2D'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas2D']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas2D'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas2D'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas2D>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas2D';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Canvas2D'] = $pyjs['loaded_modules']['pyjamas.Canvas2D'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas', null, false);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
		$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas', null, false);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas', null, false);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas', null, false);
		$m['FocusListener'] = $p['___import___']('pyjamas.ui.FocusListener', 'pyjamas', null, false);
		$m['Canvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas2D';
			$cls_definition['__md5__'] = 'a39eb419aaba7e5dfd6fa1cc8f7849ad';
			$method = $pyjs__bind_method2('__init__', function(Width, Height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					Width = arguments[1];
					Height = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof Height != 'undefined') {
						if (Height !== null && typeof Height['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = Height;
							Height = arguments[3];
						}
					} else 					if (typeof Width != 'undefined') {
						if (Width !== null && typeof Width['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = Width;
							Width = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof Width == 'undefined') Width=arguments['callee']['__args__'][3][1];
				if (typeof Height == 'undefined') Height=arguments['callee']['__args__'][4][1];
				var focusable,$bool2,$bool1;
				if ((($bool2=!(($bool1=kwargs['has_key']('StyleName')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					kwargs['__setitem__']('StyleName', 'gwt-Canvas');
				}
				kwargs['__setitem__']('Width', Width);
				kwargs['__setitem__']('Height', Height);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', null) : $p['setattr'](self, 'context', null); 
				focusable = $m['Focus']['createFocusable']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', $m['DOM']['createElement']('canvas')) : $p['setattr'](self, 'canvas', $m['DOM']['createElement']('canvas')); 
				$m['DOM']['appendChild'](focusable, $p['getattr'](self, 'canvas'));
				$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
				self['init']();
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('fillStyle', 'black') : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', 'black'); 
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('strokeStyle', 'black') : $p['setattr']($p['getattr'](self, 'context'), 'strokeStyle', 'black'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onImageLoad', $p['getattr'](self, 'onLoad')) : $p['setattr'](self, 'onImageLoad', $p['getattr'](self, 'onLoad')); 
				return null;
			}
	, 1, [null,['kwargs'],['self'],['Width', $constant_int_0],['Height', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setWidth', function(width) {
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
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['FocusWidget']['setWidth'](self, width);
				$p['getattr'](self, 'canvas')['__is_instance__'] && typeof $p['getattr'](self, 'canvas')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvas')['__setattr__']('width', width) : $p['setattr']($p['getattr'](self, 'canvas'), 'width', width); 
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$method = $pyjs__bind_method2('setHeight', function(height) {
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
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['FocusWidget']['setHeight'](self, height);
				$p['getattr'](self, 'canvas')['__is_instance__'] && typeof $p['getattr'](self, 'canvas')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvas')['__setattr__']('height', height) : $p['setattr']($p['getattr'](self, 'canvas'), 'height', height); 
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$method = $pyjs__bind_method2('getContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'context');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContext'] = $method;
			$method = $pyjs__bind_method2('isEmulation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        return (typeof $wnd['G_vmlCanvasManager'] != "undefined");
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['isEmulation'] = $method;
			$method = $pyjs__bind_method2('init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a39eb419aaba7e5dfd6fa1cc8f7849ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        var el = this['canvas'];
        if (typeof $wnd['G_vmlCanvasManager'] != "undefined") {
            var parent = el['parent'];

            el = $wnd['G_vmlCanvasManager']['fixElement_'](el);
            el['getContext'] = function () {
                if (this['context_']) {
                    return this['context_'];
                }
                return this['context_'] = new $wnd['CanvasRenderingContext2D'](el);
            };

            el['attachEvent']("onpropertychange", function (e) {
                // we need to watch changes to width and height
                switch (e['propertyName']) {
                    case "width":
                    case "height":
                    // coord size changed?
                    break;
                }
            });

            // if style['height'] is set

            var attrs = el['attributes'];
            if (attrs['width'] && attrs['width']['specified']) {
                // TODO: use runtimeStyle and coordsize
                // el['getContext']()['setWidth_'](attrs['width']['nodeValue']);
                el['style']['width'] = attrs['width']['nodeValue'] + "px";
            }
            if (attrs['height'] && attrs['height']['specified']) {
                // TODO: use runtimeStyle and coordsize
                // el['getContext']()['setHeight_'](attrs['height']['nodeValue']);
                el['style']['height'] = attrs['height']['nodeValue'] + "px";
            }
        }
        var ctx = el['getContext']("2d");

        ctx['_createPattern'] = ctx['createPattern'];
        ctx['createPattern'] = function(img, rep) {
            // Next line breaks things for Chrome
            //if (!(img instanceof Image)) img = img['getElement']();
            return this['_createPattern'](img, rep);
            }

        ctx['_drawImage'] = ctx['drawImage'];
        ctx['drawImage'] = function() {
            var a=arguments;
            // Next line breaks things for Chrome
            //if (!(a[0] instanceof Image)) a[0] = a[0]['getElement']();
            if (a['length']==9) return this['_drawImage'](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
            else if (a['length']==5) return this['_drawImage'](a[0], a[1], a[2], a[3], a[4]);
            return this['_drawImage'](a[0], a[1], a[2]);
            }

        this['context'] = ctx;
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['init'] = $method;
			var $bases = new Array($m['FocusWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
		})();
		$m['CanvasImage'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas2D';
			$cls_definition['__md5__'] = '945b6eef036e0279574b21abbe920591';
			$method = $pyjs__bind_method2('__init__', function(url, load_listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					load_listener = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '945b6eef036e0279574b21abbe920591') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof url == 'undefined') url=arguments['callee']['__args__'][3][1];
				if (typeof load_listener == 'undefined') load_listener=arguments['callee']['__args__'][4][1];
				var $bool3;
				$m['Image']['__init__'](self, url);
				if ((($bool3=load_listener) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['addLoadListener'](load_listener);
				}
				self['onAttach']();
				return null;
			}
	, 1, [null,null,['self'],['url', ''],['load_listener', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isLoaded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '945b6eef036e0279574b21abbe920591') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self['getElement'](), 'complete');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isLoaded'] = $method;
			var $bases = new Array($m['Image']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CanvasImage', $p['tuple']($bases), $data);
		})();
		$m['ImageLoadListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas2D';
			$cls_definition['__md5__'] = '7717891d032524705e510d3f5c14a4c8';
			$method = $pyjs__bind_method2('__init__', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof listener == 'undefined') listener=arguments['callee']['__args__'][3][1];
				var $bool4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wait_list', $p['list']([])) : $p['setattr'](self, 'wait_list', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadListeners', $p['list']([])) : $p['setattr'](self, 'loadListeners', $p['list']([])); 
				if ((($bool4=listener) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['addLoadListener'](listener);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onImageLoad', $p['getattr'](self, 'onLoad')) : $p['setattr'](self, 'onImageLoad', $p['getattr'](self, 'onLoad')); 
				return null;
			}
	, 1, [null,null,['self'],['listener', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['wait_list']['append'](sender);
				sender['addLoadListener'](self);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('addLoadListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['loadListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addLoadListener'] = $method;
			$method = $pyjs__bind_method2('isLoaded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool5,$len1;
				if ((($bool5=(($len1=$p['getattr'](self, 'wait_list')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					return false;
				}
				return true;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isLoaded'] = $method;
			$method = $pyjs__bind_method2('onError', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,listener,$iter1_array;
				$iter1_iter = $p['getattr'](self, 'loadListeners');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					listener['onError'](sender);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7717891d032524705e510d3f5c14a4c8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$bool6,$iter2_array;
				self['wait_list']['remove'](sender);
				if ((($bool6=self['isLoaded']()) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$iter2_iter = $p['getattr'](self, 'loadListeners');
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						listener = $iter2_nextval;
						listener['onLoad'](self);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onLoad'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageLoadListener', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas2D */


/* end module: pyjamas.Canvas2D */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Focus', 'pyjamas.ui.FocusListener']
*/
