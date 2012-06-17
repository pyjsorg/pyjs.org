/* start module: Canvas2DTab */
$pyjs.loaded_modules['Canvas2DTab'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Canvas2DTab'].__was_initialized__) return $pyjs.loaded_modules['Canvas2DTab'];
	var $m = $pyjs.loaded_modules["Canvas2DTab"];
	$m.__repr__ = function() { return "<module: Canvas2DTab>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Canvas2DTab';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_140 = new $p['int'](140);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_20000 = new $p['int'](20000);
		var $constant_int_6000 = new $p['int'](6000);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_72 = new $p['int'](72);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_51 = new $p['int'](51);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_75 = new $p['int'](75);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_95 = new $p['int'](95);
		var $constant_int_60000 = new $p['int'](60000);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_102 = new $p['int'](102);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_255 = new $p['int'](255);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Canvas'] = $p['___import___']('pyjamas.Canvas2D.Canvas', null, null, false);
		$m['CanvasImage'] = $p['___import___']('pyjamas.Canvas2D.CanvasImage', null, null, false);
		$m['ImageLoadListener'] = $p['___import___']('pyjamas.Canvas2D.ImageLoadListener', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['floor'] = $p['___import___']('math.floor', null, null, false);
		$m['cos'] = $p['___import___']('math.cos', null, null, false);
		$m['sin'] = $p['___import___']('math.sin', null, null, false);
		$m['time'] = $p['___import___']('time', null);
		$m['CanvasTab'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = '8775532d7b3772e9a6f96f4bdea00d23';
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
					if (self.prototype.__md5__ !== '8775532d7b3772e9a6f96f4bdea00d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var row0,row1,colour_grid,spiro,pattern,rotated,spheres,panel;
				$m['Sink']['__init__'](self);
				colour_grid = (typeof ColourGridCanvas == "undefined"?$m.ColourGridCanvas:ColourGridCanvas)();
				rotated = (typeof RotatedCanvas == "undefined"?$m.RotatedCanvas:RotatedCanvas)();
				spheres = (typeof SpheresCanvas == "undefined"?$m.SpheresCanvas:SpheresCanvas)();
				pattern = (typeof PatternCanvas == "undefined"?$m.PatternCanvas:PatternCanvas)();
				spiro = (typeof SpiroCanvas == "undefined"?$m.SpiroCanvas:SpiroCanvas)();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('solar', (typeof SolarCanvas == "undefined"?$m.SolarCanvas:SolarCanvas)()) : $p['setattr'](self, 'solar', (typeof SolarCanvas == "undefined"?$m.SolarCanvas:SolarCanvas)()); 
				row0 = $m['HorizontalPanel']();
				row0['setSpacing']($constant_int_8);
				row0['add'](colour_grid);
				row0['add'](rotated);
				row0['add'](spheres);
				row0['add'](pattern);
				row1 = $m['HorizontalPanel']();
				row1['setSpacing']($constant_int_8);
				row1['add']($p['getattr'](self, 'solar'));
				row1['add'](spiro);
				panel = $m['VerticalPanel']();
				panel['add'](row0);
				panel['add'](row1);
				self['setWidget'](panel);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype.__md5__ !== '8775532d7b3772e9a6f96f4bdea00d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'solar').__is_instance__ && typeof $p['getattr'](self, 'solar').__setattr__ == 'function' ? $p['getattr'](self, 'solar').__setattr__('isActive', true) : $p['setattr']($p['getattr'](self, 'solar'), 'isActive', true); 
				self['solar']['onTimer']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
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
					if (self.prototype.__md5__ !== '8775532d7b3772e9a6f96f4bdea00d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'solar').__is_instance__ && typeof $p['getattr'](self, 'solar').__setattr__ == 'function' ? $p['getattr'](self, 'solar').__setattr__('isActive', false) : $p['setattr']($p['getattr'](self, 'solar'), 'isActive', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onHide'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CanvasTab', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var text;
			text = '\n<b>Canvas vector drawing component: Canvas2D</b>\n<p>Gives python access to the browser\'s native canvas tag.\n\n<p>There are two canvas drawing libraries: Canvas2D (oldest) and Canvas\n(preferred). Both work in modern browsers (that support canvas). For IE\nthe canvas functionality is emulated in javascript. This leads to\nlower performance in IE and missing/broken functionality. Canvas2D\ndepends on <a href="http://excanvas.sourceforge.net">Explorer Canvas</a>\nin IE.\n\n<p>Originally by Alexei Sokolov at <a href="http://gwt.components.googlepages.com">gwt.components.googlepages.com</a>"\n<br>Samples ported from the <a href="http://developer.mozilla.org/en/docs/Canvas_tutorial">Mozilla canvas tutorial</a>"\n<br>Samples ported from the <a href="http://developer.mozilla.org/en/docs/Canvas_tutorial">Mozilla canvas tutorial</a>\n';
			return $m['SinkInfo']('Canvas2D', text, $m['CanvasTab']);
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$m['ColourGridCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = '0e4e887e81ef0895f077cd460ea6aacc';
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
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_150, $constant_int_150);
				self['draw']();
				self['addMouseListener'](self);
				self['addKeyboardListener'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$mod1,$mod2,$iter2_type,$iter2_iter,$iter1_array,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$iter2_idx,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter2_nextval,$iter1_type,i,j,$iter1_idx,$iter2_array;
				$iter1_iter = $p['range']($constant_int_0, $constant_int_6);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					$iter2_iter = $p['range']($constant_int_0, $constant_int_6);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						j = $iter2_nextval;
						$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', (typeof ($mod1='rgb(%d,%d,0)')==typeof ($mod2=$p['tuple']([$m['floor']((typeof ($sub1=$constant_int_255)==typeof ($sub2=(typeof ($mul1=42.5)==typeof ($mul2=i) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))), $m['floor']((typeof ($sub3=$constant_int_255)==typeof ($sub4=(typeof ($mul3=42.5)==typeof ($mul4=j) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)))])) && typeof $mod1=='number'?
							(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
							$p['op_mod']($mod1,$mod2))) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', (typeof ($mod1='rgb(%d,%d,0)')==typeof ($mod2=$p['tuple']([$m['floor']((typeof ($sub1=$constant_int_255)==typeof ($sub2=(typeof ($mul1=42.5)==typeof ($mul2=i) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))), $m['floor']((typeof ($sub3=$constant_int_255)==typeof ($sub4=(typeof ($mul3=42.5)==typeof ($mul4=j) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)))])) && typeof $mod1=='number'?
							(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
							$p['op_mod']($mod1,$mod2))); 
						self['context']['fillRect']((typeof ($mul5=j)==typeof ($mul6=$constant_int_25) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)), (typeof ($mul7=i)==typeof ($mul8=$constant_int_25) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)), $constant_int_25, $constant_int_25);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
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
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']('mouseenter: setting focus (keyboard input accepted)'));
				self['setFocus'](true);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseEnter'] = $method;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
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
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']('mouseleave: clearing focus (keyboard input not accepted)'));
				self['setFocus'](false);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$m['RootPanel']()['add']($m['HTML']((typeof ($add1=$p['sprintf']('move: x %d ', x))==typeof ($add2=$p['sprintf']('y %d', y)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))));
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']($p['sprintf']('keyup: %s', keyCode)));
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']($p['sprintf']('keydown: %s', keyCode)));
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
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
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']('click'));
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0e4e887e81ef0895f077cd460ea6aacc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['RootPanel']()['add']($m['HTML']($p['sprintf']('keypressed: %s', keyCode)));
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ColourGridCanvas', $p['tuple']($bases), $data);
		})();
		$m['RotatedCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = 'fa3235022106b50592d061986bde08cb';
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
					if (self.prototype.__md5__ !== 'fa3235022106b50592d061986bde08cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_150, $constant_int_150);
				self['context']['translate']($constant_int_75, $constant_int_75);
				self['draw']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fa3235022106b50592d061986bde08cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$iter4_type,$iter4_iter,$iter3_idx,$iter3_iter,pi,$mul22,$sub6,$sub5,$mul21,$mul9,$iter3_type,$div2,$div1,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,i,$iter4_nextval,j,$mul19,$mul18,$iter4_idx,$mul20,$iter4_array,$iter3_nextval;
				pi = 3.14159265359;
				$iter3_iter = $p['range']($constant_int_1, $constant_int_6);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['context']['save']();
					$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', $p['sprintf']('rgb(%d,%d,255)', $p['tuple']([(typeof ($mul9=$constant_int_51)==typeof ($mul10=i) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)), (typeof ($sub5=$constant_int_255)==typeof ($sub6=(typeof ($mul11=$constant_int_51)==typeof ($mul12=i) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6))]))) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', $p['sprintf']('rgb(%d,%d,255)', $p['tuple']([(typeof ($mul9=$constant_int_51)==typeof ($mul10=i) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)), (typeof ($sub5=$constant_int_255)==typeof ($sub6=(typeof ($mul11=$constant_int_51)==typeof ($mul12=i) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6))]))); 
					$iter4_iter = $p['range']($constant_int_0, (typeof ($mul13=i)==typeof ($mul14=$constant_int_6) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)));
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						j = $iter4_nextval;
						self['context']['rotate']((typeof ($div1=(typeof ($mul15=pi)==typeof ($mul16=$constant_int_2) && typeof $mul15=='number'?
							$mul15*$mul16:
							$p['op_mul']($mul15,$mul16)))==typeof ($div2=(typeof ($mul17=i)==typeof ($mul18=$constant_int_6) && typeof $mul17=='number'?
							$mul17*$mul18:
							$p['op_mul']($mul17,$mul18))) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2)));
						self['context']['beginPath']();
						self['context']['arc']($constant_int_0, (typeof ($mul19=i)==typeof ($mul20=12.5) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20)), $constant_int_5, $constant_int_0, (typeof ($mul21=pi)==typeof ($mul22=$constant_int_2) && typeof $mul21=='number'?
							$mul21*$mul22:
							$p['op_mul']($mul21,$mul22)), true);
						self['context']['fill']();
					}
					self['context']['restore']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RotatedCanvas', $p['tuple']($bases), $data);
		})();
		$m['SpheresCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = 'c2a92373fb812e55e6bf1c69597cc5f9';
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
					if (self.prototype.__md5__ !== 'c2a92373fb812e55e6bf1c69597cc5f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_150, $constant_int_150);
				self['draw']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c2a92373fb812e55e6bf1c69597cc5f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radgrad4,radgrad3,radgrad,radgrad2;
				radgrad = self['context']['createRadialGradient']($constant_int_45, $constant_int_45, $constant_int_10, $constant_int_52, $constant_int_50, $constant_int_30);
				radgrad['addColorStop']($constant_int_0, '#A7D30C');
				radgrad['addColorStop'](0.9, '#019F62');
				radgrad['addColorStop']($constant_int_1, 'rgba(1,159,98,0)');
				radgrad2 = self['context']['createRadialGradient']($constant_int_105, $constant_int_105, $constant_int_20, $constant_int_112, $constant_int_120, $constant_int_50);
				radgrad2['addColorStop']($constant_int_0, '#FF5F98');
				radgrad2['addColorStop'](0.75, '#FF0188');
				radgrad2['addColorStop']($constant_int_1, 'rgba(255,1,136,0)');
				radgrad3 = self['context']['createRadialGradient']($constant_int_95, $constant_int_15, $constant_int_15, $constant_int_102, $constant_int_20, $constant_int_40);
				radgrad3['addColorStop']($constant_int_0, '#00C9FF');
				radgrad3['addColorStop'](0.8, '#00B5E2');
				radgrad3['addColorStop']($constant_int_1, 'rgba(0,201,255,0)');
				radgrad4 = self['context']['createRadialGradient']($constant_int_0, $constant_int_150, $constant_int_50, $constant_int_0, $constant_int_140, $constant_int_90);
				radgrad4['addColorStop']($constant_int_0, '#F4F201');
				radgrad4['addColorStop'](0.8, '#E4C700');
				radgrad4['addColorStop']($constant_int_1, 'rgba(228,199,0,0)');
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', radgrad4) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', radgrad4); 
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', radgrad3) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', radgrad3); 
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', radgrad2) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', radgrad2); 
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', radgrad) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', radgrad); 
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SpheresCanvas', $p['tuple']($bases), $data);
		})();
		$m['PatternCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = '8e49f30f672c5918c762af2c6814b79c';
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
					if (self.prototype.__md5__ !== '8e49f30f672c5918c762af2c6814b79c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_150, $constant_int_150);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('img', $m['CanvasImage']('images/wallpaper.png', self)) : $p['setattr'](self, 'img', $m['CanvasImage']('images/wallpaper.png', self)); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8e49f30f672c5918c762af2c6814b79c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
				var $bool1;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'img'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['draw']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('onError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8e49f30f672c5918c762af2c6814b79c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8e49f30f672c5918c762af2c6814b79c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ptrn;
				ptrn = self['context']['createPattern'](self['img']['getElement'](), 'repeat');
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', ptrn) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', ptrn); 
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_200, $constant_int_200);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PatternCanvas', $p['tuple']($bases), $data);
		})();
		$m['SpiroCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = '3f6057264bf5d446e884788d4cc8e48a';
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
					if (self.prototype.__md5__ !== '3f6057264bf5d446e884788d4cc8e48a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_300, $constant_int_300);
				self['draw']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3f6057264bf5d446e884788d4cc8e48a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_type,$iter5_idx,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$mul28,$iter5_array,$mul26,$mul27,$mul24,$mul25,$mul23,$iter6_idx,$mul29,$add14,$iter6_array,$add10,$add11,$add12,$add13,$div3,$div6,$div4,$div5,i,j,$add3,$add6,$add7,$add4,$add5,$add8,$add9,$mul30;
				self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_300, $constant_int_300);
				$iter5_iter = $p['range']($constant_int_0, $constant_int_3);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$iter6_iter = $p['range']($constant_int_0, $constant_int_3);
					if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter.__iter__();
						$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						j = $iter6_nextval;
						self['context']['save']();
						$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('strokeStyle', '#9CFF00') : $p['setattr']($p['getattr'](self, 'context'), 'strokeStyle', '#9CFF00'); 
						self['context']['translate']((typeof ($add3=$constant_int_50)==typeof ($add4=(typeof ($mul23=j)==typeof ($mul24=$constant_int_100) && typeof $mul23=='number'?
							$mul23*$mul24:
							$p['op_mul']($mul23,$mul24))) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4)), (typeof ($add5=$constant_int_50)==typeof ($add6=(typeof ($mul25=i)==typeof ($mul26=$constant_int_100) && typeof $mul25=='number'?
							$mul25*$mul26:
							$p['op_mul']($mul25,$mul26))) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6)));
						self['drawSpirograph']((typeof ($div3=(typeof ($mul27=$constant_int_20)==typeof ($mul28=(typeof ($add7=j)==typeof ($add8=$constant_int_2) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8))) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)))==typeof ($div4=(typeof ($add9=j)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)), (typeof ($div5=(typeof ($mul29=(typeof ($usub1=$constant_int_8)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))==typeof ($mul30=(typeof ($add11=i)==typeof ($add12=$constant_int_3) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12))) && typeof $mul29=='number'?
							$mul29*$mul30:
							$p['op_mul']($mul29,$mul30)))==typeof ($div6=(typeof ($add13=i)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14))) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6)), $constant_int_10);
						self['context']['restore']();
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			$method = $pyjs__bind_method2('drawSpirograph', function(R, r, O) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					R = arguments[1];
					r = arguments[2];
					O = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3f6057264bf5d446e884788d4cc8e48a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul44,$div17,$mul40,$mul35,$mul41,$mul45,$mul42,$add27,y1,y2,$add28,$sub13,$div18,$mul49,$add21,$add20,$add22,$div10,$div11,$div12,$add19,$div13,$sub9,$sub8,$add26,$sub12,$add24,pi,$sub7,$sub11,$add25,$mul43,$mul46,$and1,$and2,$sub10,$mul47,$sub14,$bool2,$bool3,$add16,$bool4,x2,$mul48,x1,$add18,$div7,$mul50,$cmp1,$add15,i,$div16,$cmp2,$div8,$div9,$div14,$mul39,$mul38,$div15,$add17,$mul34,$mul37,$mul36,$mul31,$add23,$mul33,$mul32;
				pi = 3.14159265359;
				x1 = (typeof ($sub7=R)==typeof ($sub8=O) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				y1 = $constant_int_0;
				x2 = (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				y2 = (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3));
				i = $constant_int_1;
				self['context']['beginPath']();
				self['context']['moveTo'](x1, y1);
				while ((($bool3=((($bool2=$and1=!$p['op_eq'](x2, (typeof ($sub9=R)==typeof ($sub10=O) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_eq'](y2, $constant_int_0):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					if ((($bool4=((($cmp1=i)===($cmp2=$constant_int_20000)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						break;
					}
					x2 = (typeof ($sub11=(typeof ($mul33=(typeof ($add15=R)==typeof ($add16=r) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))==typeof ($mul34=$m['cos']((typeof ($div7=(typeof ($mul31=i)==typeof ($mul32=pi) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32)))==typeof ($div8=$constant_int_72) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)))) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34)))==typeof ($sub12=(typeof ($mul39=(typeof ($add17=r)==typeof ($add18=O) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))==typeof ($mul40=$m['cos']((typeof ($mul37=(typeof ($div9=(typeof ($add19=R)==typeof ($add20=r) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))==typeof ($div10=r) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10)))==typeof ($mul38=(typeof ($div11=(typeof ($mul35=i)==typeof ($mul36=pi) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)))==typeof ($div12=$constant_int_72) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12))) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)))) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40))) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
					y2 = (typeof ($sub13=(typeof ($mul43=(typeof ($add21=R)==typeof ($add22=r) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($mul44=$m['sin']((typeof ($div13=(typeof ($mul41=i)==typeof ($mul42=pi) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($div14=$constant_int_72) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14)))) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44)))==typeof ($sub14=(typeof ($mul49=(typeof ($add23=r)==typeof ($add24=O) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))==typeof ($mul50=$m['sin']((typeof ($mul47=(typeof ($div15=(typeof ($add25=R)==typeof ($add26=r) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))==typeof ($div16=r) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)))==typeof ($mul48=(typeof ($div17=(typeof ($mul45=i)==typeof ($mul46=pi) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46)))==typeof ($div18=$constant_int_72) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18))) && typeof $mul47=='number'?
						$mul47*$mul48:
						$p['op_mul']($mul47,$mul48)))) && typeof $mul49=='number'?
						$mul49*$mul50:
						$p['op_mul']($mul49,$mul50))) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14));
					self['context']['lineTo'](x2, y2);
					x1 = x2;
					y1 = y2;
					i = (typeof ($add27=i)==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
				}
				self['context']['stroke']();
				return null;
			}
	, 1, [null,null,['self'],['R'],['r'],['O']]);
			$cls_definition['drawSpirograph'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SpiroCanvas', $p['tuple']($bases), $data);
		})();
		$m['SolarCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Canvas2DTab';
			$cls_definition.__md5__ = '1bf323482e62ae15071e9ea13ea0d42b';
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
					if (self.prototype.__md5__ !== '1bf323482e62ae15071e9ea13ea0d42b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Canvas']['__init__'](self, $constant_int_300, $constant_int_300);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sun', $m['CanvasImage']('images/sun.png')) : $p['setattr'](self, 'sun', $m['CanvasImage']('images/sun.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('moon', $m['CanvasImage']('images/moon.png')) : $p['setattr'](self, 'moon', $m['CanvasImage']('images/moon.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('earth', $m['CanvasImage']('images/earth.png')) : $p['setattr'](self, 'earth', $m['CanvasImage']('images/earth.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loader', $m['ImageLoadListener']()) : $p['setattr'](self, 'loader', $m['ImageLoadListener']()); 
				self['loader']['add']($p['getattr'](self, 'sun'));
				self['loader']['add']($p['getattr'](self, 'moon'));
				self['loader']['add']($p['getattr'](self, 'earth'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('isActive', true) : $p['setattr'](self, 'isActive', true); 
				self['onTimer']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(t) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					t = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1bf323482e62ae15071e9ea13ea0d42b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof t == 'undefined') t=arguments.callee.__args__[3][1];
				var $bool6,$bool5;
				if ((($bool6=!(($bool5=$p['getattr'](self, 'isActive')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return null;
				}
				$m['Timer']($constant_int_100, self);
				self['draw']();
				return null;
			}
	, 1, [null,null,['self'],['t', null]]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('getTimeSeconds', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1bf323482e62ae15071e9ea13ea0d42b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod4,$mod3;
				return (typeof ($mod3=$m['time']['time']())==typeof ($mod4=$constant_int_60) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeSeconds'] = $method;
			$method = $pyjs__bind_method2('getTimeMilliseconds', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1bf323482e62ae15071e9ea13ea0d42b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod5,$mul52,$mod6,$mul51;
				return (typeof ($mod5=(typeof ($mul51=$m['time']['time']())==typeof ($mul52=1000.0) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)))==typeof ($mod6=1.0) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeMilliseconds'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1bf323482e62ae15071e9ea13ea0d42b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add29,$mul63,$mul60,$mul61,$mul66,$div19,$mul64,$mul65,$mul69,pi,$mul62,$mul70,$div23,$div22,$bool7,$bool8,$mul67,$div21,$div20,$mul59,$mul58,$div25,$div24,$div26,$mul53,$add30,$add31,$mul57,$mul56,$mul55,$mul54,$add32,$mul68;
				pi = 3.14159265359;
				if ((($bool8=!(($bool7=self['loader']['isLoaded']()) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					return null;
				}
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('globalCompositeOperation', 'destination-over') : $p['setattr']($p['getattr'](self, 'context'), 'globalCompositeOperation', 'destination-over'); 
				self['context']['clearRect']($constant_int_0, $constant_int_0, $constant_int_300, $constant_int_300);
				self['context']['save']();
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', 'rgba(0,0,0,0.4)') : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', 'rgba(0,0,0,0.4)'); 
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('strokeStyle', 'rgba(0,153,255,0.4)') : $p['setattr']($p['getattr'](self, 'context'), 'strokeStyle', 'rgba(0,153,255,0.4)'); 
				self['context']['translate']($constant_int_150, $constant_int_150);
				self['context']['rotate']((typeof ($add29=(typeof ($mul55=(typeof ($div19=(typeof ($mul53=$constant_int_2)==typeof ($mul54=pi) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54)))==typeof ($div20=$constant_int_60) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)))==typeof ($mul56=self['getTimeSeconds']()) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)))==typeof ($add30=(typeof ($mul59=(typeof ($div21=(typeof ($mul57=$constant_int_2)==typeof ($mul58=pi) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)))==typeof ($div22=$constant_int_60000) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)))==typeof ($mul60=self['getTimeMilliseconds']()) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)));
				self['context']['translate']($constant_int_105, $constant_int_0);
				self['context']['fillRect']($constant_int_0, (typeof ($usub4=$constant_int_12)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), $constant_int_50, $constant_int_24);
				self['context']['drawImage'](self['earth']['getElement'](), (typeof ($usub5=$constant_int_12)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), (typeof ($usub6=$constant_int_12)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				self['context']['save']();
				self['context']['rotate']((typeof ($add31=(typeof ($mul63=(typeof ($div23=(typeof ($mul61=$constant_int_2)==typeof ($mul62=pi) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)))==typeof ($div24=$constant_int_6) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)))==typeof ($mul64=self['getTimeSeconds']()) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64)))==typeof ($add32=(typeof ($mul67=(typeof ($div25=(typeof ($mul65=$constant_int_2)==typeof ($mul66=pi) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)))==typeof ($div26=$constant_int_6000) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)))==typeof ($mul68=self['getTimeMilliseconds']()) && typeof $mul67=='number'?
					$mul67*$mul68:
					$p['op_mul']($mul67,$mul68))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)));
				self['context']['translate']($constant_int_0, 28.5);
				self['context']['drawImage'](self['moon']['getElement'](), (typeof ($usub7=3.5)=='number'?
					-$usub7:
					$p['op_usub']($usub7)), (typeof ($usub8=3.5)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
				self['context']['restore']();
				self['context']['restore']();
				self['context']['beginPath']();
				self['context']['arc']($constant_int_150, $constant_int_150, $constant_int_105, $constant_int_0, (typeof ($mul69=pi)==typeof ($mul70=$constant_int_2) && typeof $mul69=='number'?
					$mul69*$mul70:
					$p['op_mul']($mul69,$mul70)), false);
				self['context']['stroke']();
				self['context']['drawImage'](self['sun']['getElement'](), $constant_int_0, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SolarCanvas', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Canvas2DTab */


/* end module: Canvas2DTab */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Canvas2D.Canvas', 'pyjamas.Canvas2D', 'pyjamas.Canvas2D.CanvasImage', 'pyjamas.Canvas2D.ImageLoadListener', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'math.floor', 'math', 'math.cos', 'math.sin', 'time']
*/
