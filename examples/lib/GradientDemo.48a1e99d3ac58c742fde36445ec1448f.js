/* start module: GradientDemo */
$pyjs['loaded_modules']['GradientDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GradientDemo']['__was_initialized__']) return $pyjs['loaded_modules']['GradientDemo'];
	var $m = $pyjs['loaded_modules']['GradientDemo'];
	$m['__repr__'] = function() { return '<module: GradientDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GradientDemo';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_130 = new $p['int'](130);
		var $constant_int_102 = new $p['int'](102);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_140 = new $p['int'](140);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_95 = new $p['int'](95);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', null, null, false);
		$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
		$m['GradientDemoControls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GradientDemo';
			$cls_definition['__md5__'] = 'b615640297555feda93c2572f01a5ccb';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b615640297555feda93c2572f01a5ccb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var layout;
				layout = $m['VerticalPanel']();
				layout['add']($m['HTML']('<b style="color:#f00;">Stroke Gradients currently not working correctly in IE. RadialGradients are not supported in VML. Contributor assistance welcome :).</b>'));
				$m['Composite']['__init__'](self, layout);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GradientDemoControls', $p['tuple']($bases), $data);
		})();
		$m['GradientDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GradientDemo';
			$cls_definition['__md5__'] = '9dc8b9c7d98cef5f2ef4c8de93f47af1';
			$method = $pyjs__bind_method2('__init__', function(theCanvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					theCanvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9dc8b9c7d98cef5f2ef4c8de93f47af1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $constant_int_400) : $p['setattr'](self, 'width', $constant_int_400); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $constant_int_400) : $p['setattr'](self, 'height', $constant_int_400); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('demoName', 'Gradients') : $p['setattr'](self, 'demoName', 'Gradients'); 
				return null;
			}
	, 1, [null,null,['self'],['theCanvas']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createControls', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9dc8b9c7d98cef5f2ef4c8de93f47af1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('controls', $m['GradientDemoControls']()) : $p['setattr'](self, 'controls', $m['GradientDemoControls']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createControls'] = $method;
			$method = $pyjs__bind_method2('drawDemo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9dc8b9c7d98cef5f2ef4c8de93f47af1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radgrad4,radgrad3,radgrad2,lingrad2,radgrad,lingrad;
				self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self['canvas']['saveContext']();
				lingrad = self['canvas']['createLinearGradient']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_150);
				lingrad['addColorStop'](0.0, $m['Color']('#00ABEB'));
				lingrad['addColorStop'](0.5, $m['Color']('#fff'));
				lingrad['addColorStop'](0.5, $m['Color']('#26C000'));
				lingrad['addColorStop']($constant_int_1, $m['Color']('#fff'));
				lingrad2 = self['canvas']['createLinearGradient']($constant_int_0, $constant_int_50, $constant_int_0, $constant_int_95);
				lingrad2['addColorStop'](0.5, $m['Color']('#000'));
				lingrad2['addColorStop']($constant_int_1, $m['Color']('rgba(0,0,0,0)'));
				self['canvas']['setFillStyle'](lingrad);
				self['canvas']['setStrokeStyle'](lingrad2);
				self['canvas']['fillRect']($constant_int_10, $constant_int_10, $constant_int_130, $constant_int_130);
				self['canvas']['strokeRect']($constant_int_50, $constant_int_50, $constant_int_50, $constant_int_50);
				self['canvas']['restoreContext']();
				self['canvas']['saveContext']();
				self['canvas']['translate']($constant_int_150, $constant_int_150);
				radgrad = self['canvas']['createRadialGradient']($constant_int_45, $constant_int_45, $constant_int_10, $constant_int_52, $constant_int_50, $constant_int_30);
				radgrad['addColorStop']($constant_int_0, $m['Color']('#A7D30C'));
				radgrad['addColorStop'](0.9, $m['Color']('#019F62'));
				radgrad['addColorStop']($constant_int_1, $m['Color']('rgba(1,159,98,0)'));
				radgrad2 = self['canvas']['createRadialGradient']($constant_int_105, $constant_int_105, $constant_int_20, $constant_int_112, $constant_int_120, $constant_int_50);
				radgrad2['addColorStop']($constant_int_0, $m['Color']('#FF5F98'));
				radgrad2['addColorStop'](0.75, $m['Color']('#FF0188'));
				radgrad2['addColorStop']($constant_int_1, $m['Color']('rgba(255,1,136,0)'));
				radgrad3 = self['canvas']['createRadialGradient']($constant_int_95, $constant_int_15, $constant_int_15, $constant_int_102, $constant_int_20, $constant_int_40);
				radgrad3['addColorStop']($constant_int_0, $m['Color']('#00C9FF'));
				radgrad3['addColorStop'](0.8, $m['Color']('#00B5E2'));
				radgrad3['addColorStop']($constant_int_1, $m['Color']('rgba(0,201,255,0)'));
				radgrad4 = self['canvas']['createRadialGradient']($constant_int_0, $constant_int_150, $constant_int_50, $constant_int_0, $constant_int_140, $constant_int_90);
				radgrad4['addColorStop']($constant_int_0, $m['Color']('#F4F201'));
				radgrad4['addColorStop'](0.8, $m['Color']('#E4C700'));
				radgrad4['addColorStop']($constant_int_1, $m['Color']('rgba(228,199,0,0)'));
				self['canvas']['setFillStyle'](radgrad4);
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				self['canvas']['setFillStyle'](radgrad3);
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				self['canvas']['setFillStyle'](radgrad2);
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				self['canvas']['setFillStyle'](radgrad);
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				self['canvas']['restoreContext']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawDemo'] = $method;
			$method = $pyjs__bind_method2('stopDemo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9dc8b9c7d98cef5f2ef4c8de93f47af1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stopDemo'] = $method;
			var $bases = new Array($m['SimpleCanvasDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GradientDemo', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GradientDemo */


/* end module: GradientDemo */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
