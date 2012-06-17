/* start module: DNDTest */
$pyjs.loaded_modules['DNDTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DNDTest'].__was_initialized__) return $pyjs.loaded_modules['DNDTest'];
	var $m = $pyjs.loaded_modules["DNDTest"];
	$m.__repr__ = function() { return "<module: DNDTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DNDTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool62;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_500 = new $p['int'](500);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_20 = new $p['int'](20);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
		$m['makeDraggable'] = $p['___import___']('pyjamas.dnd.makeDraggable', null, null, false);
		$m['DragWidget'] = $p['___import___']('pyjamas.ui.DragWidget.DragWidget', null, null, false);
		$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', null, null, false);
		$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', null, null, false);
		$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', null, null, false);
		$m['getTypes'] = $p['___import___']('pyjamas.dnd.getTypes', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['json'] = $p['___import___']('json', null);
		$m['DNDDemos'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '1bed90e287564d7ccaa47470ae023c07';
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
					if (self.prototype.__md5__ !== '1bed90e287564d7ccaa47470ae023c07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['VerticalPanel']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', '100%') : $p['setattr'](self, 'width', '100%'); 
				self['setID']('content');
				self['add']((typeof TopVerbage == "undefined"?$m.TopVerbage:TopVerbage)());
				self['add']((typeof NewSchool == "undefined"?$m.NewSchool:NewSchool)());
				self['add']((typeof Delegated == "undefined"?$m.Delegated:Delegated)());
				self['add']((typeof ImageDrop == "undefined"?$m.ImageDrop:ImageDrop)());
				self['add']((typeof DataTransferDemo == "undefined"?$m.DataTransferDemo:DataTransferDemo)());
				self['add']((typeof DragEffects == "undefined"?$m.DragEffects:DragEffects)());
				self['add']((typeof AbsolutePosition == "undefined"?$m.AbsolutePosition:AbsolutePosition)());
				self['add']((typeof MultiTargetDemo == "undefined"?$m.MultiTargetDemo:MultiTargetDemo)());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DNDDemos', $p['tuple']($bases), $data);
		})();
		$m['AddablePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'f458289d781386c009f82405f9dfe306';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						var kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kw = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f458289d781386c009f82405f9dfe306') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['Panel'], '__init__', null, kw, [{}, self]);
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(widget, container) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f458289d781386c009f82405f9dfe306') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof container == 'undefined') container=arguments.callee.__args__[4][1];

				self['adopt'](widget, self['getElement']());
				self['children']['append'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container', null]]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f458289d781386c009f82405f9dfe306') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['disown'](widget);
				self['children']['remove'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			var $bases = new Array($m['Panel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AddablePanel', $p['tuple']($bases), $data);
		})();
		$m['TopVerbage'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '6b8c7216ea1169e00a1cd7fa2b1a2c6c';
			$cls_definition['title'] = 'Drag and Drop in %s Pyjamas';
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
					if (self.prototype.__md5__ !== '6b8c7216ea1169e00a1cd7fa2b1a2c6c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod1,img,$mod2;
				$pyjs_kwargs_call($m['AddablePanel'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				self['setID']('toc');
				img = '<img id="logo" src="pyjamas.png">';
				self['add']($m['HTML']($p['sprintf']('<h1>%s</h1>', $p['tuple']([(typeof ($mod1=$p['getattr'](self, 'title'))==typeof ($mod2=img) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))]))));
				self['add']($m['HTML']('\n            <p>This page is a reimagining of\n            <a href="http://decafbad.com/2009/07/drag-and-drop/api-demos.html">\n            http://decafbad.com/2009/07/drag-and-drop/api-demos.html</a> using\n            pyjamas.</p>\n            <p>\n            <p>This page offers a few demonstrations and experiments, mostly\n            as a test tool for the background implementation.</p>\n            '));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TopVerbage', $p['tuple']($bases), $data);
		})();
		$m['DragWidget1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '9aba67c534d843f5ba35f29370ef5ea0';
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
					if (self.prototype.__md5__ !== '9aba67c534d843f5ba35f29370ef5ea0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['Label'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				self['setText']('Drag me!');
				$m['DragWidget']['__init__'](self);
				self['setStyleName']('dragme1');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9aba67c534d843f5ba35f29370ef5ea0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt;
				dt = $p['getattr'](event, 'dataTransfer');
				dt['setData']('Text', 'Dropped in zone!');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('effectAllowed', 'copy') : $p['setattr'](dt, 'effectAllowed', 'copy'); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9aba67c534d843f5ba35f29370ef5ea0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addMessage']('Drag ended');
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9aba67c534d843f5ba35f29370ef5ea0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1,parent;
				parent = self['getParent']();
				while ((($bool2=!(($bool1=$p['hasattr'](parent, 'addMessage')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['DragWidget'],$m['Label']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget1', $p['tuple']($bases), $data);
		})();
		$m['DropWidget1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'e3ab14b0a0eac77fb79fce2c87a8e69f';
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
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['Label'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				$m['DropWidget']['__init__'](self);
				self['setText']('Drop here!');
				self['setStyleName']('drophere');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addStyleName']('dragover');
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeStyleName']('dragover');
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var item,$pyjs_try_err,dt;
				dt = $p['getattr'](event, 'dataTransfer');
				try {
					item = dt['getData']('text/plain');
					self['addMessage'](item);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						self['addMessage']('unsupported data type');
					}
				}
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e3ab14b0a0eac77fb79fce2c87a8e69f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$bool4,parent;
				parent = self['getParent']();
				while ((($bool4=!(($bool3=$p['hasattr'](parent, 'addMessage')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['DropWidget'],$m['Label']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget1', $p['tuple']($bases), $data);
		})();
		$m['Messages'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '79f550fb3ae08874f15598b153767c28';
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
					if (self.prototype.__md5__ !== '79f550fb3ae08874f15598b153767c28') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['Widget'], '__init__', null, null, [{Element:$m['DOM']['createElement']('ul')}, self]);
				self['setStyleName']('messages');
				self['addStyleName']('events_monitor');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '79f550fb3ae08874f15598b153767c28') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,li;
				d = $m['datetime']['now']()['strftime']('%x %X');
				li = $m['DOM']['createElement']('li');
				$m['DOM']['setInnerHTML'](li, $p['sprintf']('<dt class="time">%s</dt><dd class="txt">%s</dd>', $p['tuple']([d, text])));
				$m['DOM']['insertChild']($p['getattr'](self, 'element'), li, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Messages', $p['tuple']($bases), $data);
		})();
		$m['DNDDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '05a8a02cfd00d97cf8d8ecf0aefd594e';
			$cls_definition['title'] = 'DND Demo';
			$cls_definition['id'] = 'none';
			$cls_definition['drag_widget'] = null;
			$cls_definition['drop_widget'] = null;
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
					if (self.prototype.__md5__ !== '05a8a02cfd00d97cf8d8ecf0aefd594e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,p,$bool6,$bool5,demo_div,top_frame;
				$pyjs_kwargs_call($m['AddablePanel'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				self['setID']($p['getattr'](self, 'id'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('h2', $m['HTML']($p['sprintf']('<h2>%s</h2>', $p['getattr'](self, 'title')))) : $p['setattr'](self, 'h2', $m['HTML']($p['sprintf']('<h2>%s</h2>', $p['getattr'](self, 'title')))); 
				self['append']($p['getattr'](self, 'h2'));
				demo_div = $pyjs_kwargs_call(null, $m['AddablePanel'], null, null, [{Element:$m['DOM']['createElement']('div')}]);
				demo_div['setStyleName']('demo');
				top_frame = $m['HorizontalPanel']();
				g = $p['getattr'](self, 'drag_widget');
				if ((($bool5=!$p['op_is'](g, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					top_frame['add'](g);
				}
				p = $p['getattr'](self, 'drop_widget');
				if ((($bool6=!$p['op_is'](p, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					top_frame['add'](p);
				}
				demo_div['add'](top_frame);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('messages', $m['Messages']()) : $p['setattr'](self, 'messages', $m['Messages']()); 
				demo_div['append']($p['getattr'](self, 'messages'));
				self['add'](demo_div);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '05a8a02cfd00d97cf8d8ecf0aefd594e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['messages']['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DNDDemo', $p['tuple']($bases), $data);
		})();
		$m['NewSchool'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '12dcfdfb0ec34dd6fec658346b7312fa';
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
					if (self.prototype.__md5__ !== '12dcfdfb0ec34dd6fec658346b7312fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Drag and drop') : $p['setattr'](self, 'title', 'Drag and drop'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'newschool') : $p['setattr'](self, 'id', 'newschool'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drag_widget', $m['DragWidget1']()) : $p['setattr'](self, 'drag_widget', $m['DragWidget1']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidget1']()) : $p['setattr'](self, 'drop_widget', $m['DropWidget1']()); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NewSchool', $p['tuple']($bases), $data);
		})();
		$m['DragWidget2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'f0c6c3cd80b52db86024943182f0406a';
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,target;
				target = $m['DOM']['eventGetTarget'](event);
				dt = $p['getattr'](event, 'dataTransfer');
				dt['setData']('Text', $p['sprintf']('Dropped %s', $p['getattr'](target, 'id')));
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('effectAllowed', 'copy') : $p['setattr'](dt, 'effectAllowed', 'copy'); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
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
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setElement']($m['DOM']['createElement']('ul'));
				$m['DragContainer']['__init__'](self);
				$m['AddablePanel']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,link,$iter1_array,li,k,$iter1_idx;
				link = self['makeLink']();
				link['addClickListener'](self);
				li = $pyjs_kwargs_call(null, $m['AddablePanel'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				li['add'](link);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button', li) : $p['setattr'](self, 'button', li); 
				self['add']($p['getattr'](self, 'button'));
				$iter1_iter = $p['range']($constant_int_3);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					k = $iter1_nextval;
					self['addDragWidget']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool8,parent,$bool7;
				parent = self['getParent']();
				while ((($bool8=!(($bool7=$p['hasattr'](parent, 'addMessage')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			$method = $pyjs__bind_method2('addDragWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add4,$add2,$add3,s,$add1,w,$len1;
				self['remove']($p['getattr'](self, 'button'));
				s = (($len1=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setID']((typeof ($add1='drag')==typeof ($add2=$p['str'](s)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				w['setStyleName']('dragme');
				w['setText']((typeof ($add3='Drag ')==typeof ($add4=$p['str'](s)) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
				self['add'](w);
				$m['makeDraggable'](w);
				self['add']($p['getattr'](self, 'button'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDragWidget'] = $method;
			$method = $pyjs__bind_method2('makeLink', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var link;
				link = $m['Button']();
				link['setText']('+ Add another');
				return link;
			}
	, 1, [null,null,['self']]);
			$cls_definition['makeLink'] = $method;
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
					if (self.prototype.__md5__ !== 'f0c6c3cd80b52db86024943182f0406a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addDragWidget']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DragContainer'],$m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget2', $p['tuple']($bases), $data);
		})();
		$m['DropWidget2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '30aa382048d07212426d6fcd73eb7742';
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
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setElement']($m['DOM']['createElement']('ul'));
				$m['DropWidget']['__init__'](self);
				$m['AddablePanel']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,li,$iter2_idx,k,button,$iter2_array;
				button = self['makeButton']();
				button['addClickListener'](self);
				li = $pyjs_kwargs_call(null, $m['AddablePanel'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				li['add'](button);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button', li) : $p['setattr'](self, 'button', li); 
				self['add']($p['getattr'](self, 'button'));
				$iter2_iter = $p['range']($constant_int_3);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					k = $iter2_nextval;
					self['addDropWidget']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('addDropWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,$add6,$add7,w,$add5,$len2,$add8;
				self['remove']($p['getattr'](self, 'button'));
				s = (($len2=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setID']((typeof ($add5='drop')==typeof ($add6=$p['str'](s)) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)));
				w['setStyleName']('drophere');
				w['setText']((typeof ($add7='Drop ')==typeof ($add8=$p['str'](s)) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
				self['append'](w);
				self['append']($p['getattr'](self, 'button'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDropWidget'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$bool10,$pyjs_try_err,t,dt,$bool9,class_names;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				try {
					class_names = t['getStyleName']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						class_names = null;
					}
				}
				dt = $p['getattr'](event, 'dataTransfer');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'copy') : $p['setattr'](dt, 'dropEffect', 'copy'); 
				if ((($bool9=!$p['op_is'](class_names, null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					if ((($bool10=class_names.__contains__('drophere')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						t['addStyleName']('dragover');
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$bool11,$bool12,t,dt,class_names;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				dt = $p['getattr'](event, 'dataTransfer');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'copy') : $p['setattr'](dt, 'dropEffect', 'copy'); 
				class_names = t['getStyleName']();
				if ((($bool11=!$p['op_is'](class_names, null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					if ((($bool12=class_names.__contains__('drophere')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$bool13,$bool14,$pyjs_try_err,t,class_names;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				try {
					class_names = t['getStyleName']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						class_names = null;
					}
				}
				if ((($bool13=!$p['op_is'](class_names, null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					if ((($bool14=class_names.__contains__('drophere')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						t['removeStyleName']('dragover');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,text,$bool15,$bool16,t,dt,class_names;
				dt = $p['getattr'](event, 'dataTransfer');
				text = dt['getData']('Text');
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				class_names = t['getStyleName']();
				$m['DOM']['eventPreventDefault'](event);
				if ((($bool15=!$p['op_is'](class_names, null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					if ((($bool16=class_names.__contains__('drophere')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16.__nonzero__=='function'?
									$bool16.__nonzero__() :
									(typeof $bool16.__len__=='function'?
										($bool16.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['addMessage']($p['sprintf']('%s onto %s', $p['tuple']([text, $p['getattr'](target, 'id')])));
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('makeButton', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var button;
				button = $m['Button']('+ Add another');
				return button;
			}
	, 1, [null,null,['self']]);
			$cls_definition['makeButton'] = $method;
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
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addDropWidget']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30aa382048d07212426d6fcd73eb7742') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,parent,$bool17;
				parent = self['getParent']();
				while ((($bool18=!(($bool17=$p['hasattr'](parent, 'addMessage')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['DropWidget'],$m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget2', $p['tuple']($bases), $data);
		})();
		$m['Delegated'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'c8229741ca994d7ac16c56dabff48f5b';
			$cls_definition['title'] = 'DND with Event Delegation';
			$cls_definition['id'] = 'delegated';
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
					if (self.prototype.__md5__ !== 'c8229741ca994d7ac16c56dabff48f5b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var drop,drag;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drag_widget', $m['DragWidget2']()) : $p['setattr'](self, 'drag_widget', $m['DragWidget2']()); 
				drag = $p['getattr'](self, 'drag_widget');
				drag['setStyleName']('drag_delegates');
				drag['addStyleName']('draglist');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidget2']()) : $p['setattr'](self, 'drop_widget', $m['DropWidget2']()); 
				drop = $p['getattr'](self, 'drop_widget');
				drop['setStyleName']('drop_delegates');
				drop['addStyleName']('droplist');
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Delegated', $p['tuple']($bases), $data);
		})();
		$m['DragWidget3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '322138b7a5bb2d8ce03f7b5af0effadd';
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
					if (self.prototype.__md5__ !== '322138b7a5bb2d8ce03f7b5af0effadd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setElement']($m['DOM']['createElement']('ul'));
				$p['$$super']($m['DragWidget3'], self)['__init__']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '322138b7a5bb2d8ce03f7b5af0effadd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter3_type,$iter3_iter,$iter3_array,k,$iter3_nextval;
				self['setStyleName']('drag_delegates');
				self['addStyleName']('draglist');
				$iter3_iter = $p['range']($constant_int_4);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					k = $iter3_nextval;
					self['addDragWidget']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('makeCanvasImg', function(canvas) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '322138b7a5bb2d8ce03f7b5af0effadd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ctx;
				ctx = canvas;
				ctx['beginPath']();
				ctx['setLineWidth']($constant_int_3);
				ctx['setStrokeStyle']($p['getattr']($m['Color'], 'ORANGE'));
				ctx['moveTo']($constant_int_25, 1.5);
				ctx['lineTo']($constant_int_50, $constant_int_50);
				ctx['lineTo'](1.5, $constant_int_50);
				ctx['lineTo']($constant_int_25, 1.5);
				ctx['stroke']();
				return null;
			}
	, 1, [null,null,['self'],['canvas']]);
			$cls_definition['makeCanvasImg'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '322138b7a5bb2d8ce03f7b5af0effadd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,target,parent,img,ctx,$pyjs_try_err,$bool21,$bool20,$bool23,$bool22,dt,id;
				dt = $p['getattr'](event, 'dataTransfer');
				target = $m['DOM']['eventGetTarget'](event);
				target = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				id = target['getID']();
				dt['setData']('Text', $p['sprintf']('Dropped %s', target['getID']()));
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('effectAllowed', 'copy') : $p['setattr'](dt, 'effectAllowed', 'copy'); 
				if ((($bool19=$p['op_eq'](id, 'imgdrag1')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					parent = self['getParent']();
					while ((($bool21=!(($bool20=$p['hasattr'](parent, 'h2')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						parent = parent['getParent']();
					}
					dt['setDragImage'](parent['h2']['getElement'](), $constant_int_10, $constant_int_10);
				}
				else if ((($bool22=$p['op_eq'](id, 'imgdrag2')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					dt['setDragImage']($doc['getElementById']('logo'), $constant_int_10, $constant_int_10);
				}
				else if ((($bool23=$p['op_eq'](id, 'imgdrag3')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					ctx = $m['GWTCanvas']($constant_int_50, $constant_int_50);
					self['makeCanvasImg'](ctx);
					try {
						img = $m['DOM']['createImg']();
						$m['DOM']['setAttribute'](img, 'src', ctx['canvas']['toDataURL']());
						dt['setDragImage'](img, $constant_int_25, $constant_int_25);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if (true) {
							dt['setDragImage']($p['getattr'](ctx, 'canvas'), $constant_int_25, $constant_int_25);
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('addDragWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '322138b7a5bb2d8ce03f7b5af0effadd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var texts,s,$add10,$len3,w,$add9,$2,$1;
				s = (($len3=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setStyleName']('dragme');
				w['setID']((typeof ($add9='imgdrag')==typeof ($add10=$p['str'](s)) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)));
				texts = $p['list'](['Default', 'Element', 'Image', 'Canvas']);
				w['setText']((typeof ($1=texts).__array != 'undefined'?
					((typeof $1.__array[$2=s]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(s)));
				self['add'](w);
				$m['makeDraggable'](w);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDragWidget'] = $method;
			var $bases = new Array($m['DragWidget2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget3', $p['tuple']($bases), $data);
		})();
		$m['DropWidget3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '7bc89179675ebc65a47181d24f2d9df6';
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7bc89179675ebc65a47181d24f2d9df6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setID']('imgdrop');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			var $bases = new Array($m['DropWidget1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget3', $p['tuple']($bases), $data);
		})();
		$m['ImageDrop'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'fa4c8d2c9fe08c1d0eae2fc298460ed7';
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
					if (self.prototype.__md5__ !== 'fa4c8d2c9fe08c1d0eae2fc298460ed7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Using drag feedback images') : $p['setattr'](self, 'title', 'Using drag feedback images'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'feedback_image') : $p['setattr'](self, 'id', 'feedback_image'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidget3']()) : $p['setattr'](self, 'drop_widget', $m['DropWidget3']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drag_widget', $m['DragWidget3']()) : $p['setattr'](self, 'drag_widget', $m['DragWidget3']()); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageDrop', $p['tuple']($bases), $data);
		})();
		$m['DragWidget4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '946aec4d5fd4e77c29f6699753f19fab';
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
					if (self.prototype.__md5__ !== '946aec4d5fd4e77c29f6699753f19fab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setElement']($m['DOM']['createElement']('ul'));
				$p['$$super']($m['DragWidget4'], self)['__init__']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '946aec4d5fd4e77c29f6699753f19fab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,k;
				self['setStyleName']('drag_delegates');
				self['addStyleName']('draglist');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('following_text', $m['HTML']('<li><p>\n               ... and try dragging to other windows and applications.\n               </p></li>\n            ')) : $p['setattr'](self, 'following_text', $m['HTML']('<li><p>\n               ... and try dragging to other windows and applications.\n               </p></li>\n            ')); 
				$iter4_iter = $p['range']($constant_int_3);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					k = $iter4_nextval;
					self['addDragWidget']();
				}
				self['append']($p['getattr'](self, 'following_text'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('addDragWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '946aec4d5fd4e77c29f6699753f19fab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var w,$len4,texts,s,$add11,$add12,$4,$3;
				s = (($len4=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setID']((typeof ($add11='datadrag')==typeof ($add12=$p['str'](s)) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				w['setStyleName']('dragme');
				texts = $p['list'](['Text', 'Text / HTML / URI', 'Disallowed']);
				w['setText']((typeof ($3=texts).__array != 'undefined'?
					((typeof $3.__array[$4=s]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(s)));
				self['append'](w);
				$m['makeDraggable'](w);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDragWidget'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '946aec4d5fd4e77c29f6699753f19fab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,text,uri,html,logo_parent_element,$bool25,$bool24,$pyjs_try_err,$bool26,logo,dt,id;
				dt = $p['getattr'](event, 'dataTransfer');
				target = $m['DOM']['eventGetTarget'](event);
				target = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				try {
					id = target['getID']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						id = '';
					}
				}
				if ((($bool24=$p['op_eq'](id, 'datadrag0')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					dt['setData']('text/plain', 'Hello World!');
				}
				else if ((($bool25=$p['op_eq'](id, 'datadrag1')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					logo = $doc['getElementById']('logo');
					logo_parent_element = $m['DOM']['getParent'](logo);
					text = $m['DOM']['getInnerText'](logo_parent_element);
					html = $m['DOM']['getInnerHTML'](logo_parent_element);
					uri = $m['DOM']['getAttribute'](logo, 'src');
					dt['setData']('text/plain', text);
					dt['setData']('text/html', html);
					dt['setData']('text/uri-list', uri);
				}
				else if ((($bool26=$p['op_eq'](id, 'datadrag2')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					dt['setData']('x-star-trek/tribble', 'I am a tribble');
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			var $bases = new Array($m['DragWidget2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget4', $p['tuple']($bases), $data);
		})();
		$m['DropWidget4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '685861be91324dfe4ff72980cd2b6970';
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '685861be91324dfe4ff72980cd2b6970') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setText']('Drop here from items on the left - and selected\n        content from other windows and applications.');
				self['setID']('datadrop');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '685861be91324dfe4ff72980cd2b6970') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_type,$iter5_idx,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$iter6_idx,$bool27,$pyjs_try_err,$iter5_array,files,parent,ctype,$add14,$add15,$add16,$add13,dt,data,types,name,idx,$iter6_array,item,file_names;
				dt = $p['getattr'](event, 'dataTransfer');
				types = $m['getTypes'](event);
				self['addMessage']((typeof ($add13='drop types received: ')==typeof ($add14=', '['join'](types)) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)));
				parent = self['getParent']();
				parent['clearContent']();
				self['addMessage']((typeof ($add15='dt: ')==typeof ($add16=$p['str'](dt)) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)));
				types['sort']();
				$iter5_iter = types;
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					ctype = $iter5_nextval;
					data = dt['getData'](ctype);
					if ((($bool27=$p['op_eq'](ctype, 'Files')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27.__nonzero__=='function'?
									$bool27.__nonzero__() :
									(typeof $bool27.__len__=='function'?
										($bool27.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						file_names = $p['list']([]);
						files = $p['getattr'](dt, 'files');
						$iter6_iter = $p['range']($p['getattr'](files, 'length'));
						if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
							$iter6_type = 0;
						} else {
							$iter6_iter = $iter6_iter.__iter__();
							$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter6_idx = 0;
						while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
							idx = $iter6_nextval;
							item = files['item'](idx);
							try {
								name = $p['getattr'](item, '$$name');
							} catch($pyjs_try_err) {
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if (true) {
									name = $p['getattr'](item, 'fileName');
								}
							}
							file_names['append'](name);
						}
						data = '<br>'['join'](file_names);
					}
					parent['addContent'](ctype, data);
				}
				$m['DOM']['eventPreventDefault'](event);
				$m['DOM']['eventCancelBubble'](event, true);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '685861be91324dfe4ff72980cd2b6970') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool29,types,$bool28;
				types = $m['getTypes'](event);
				if ((($bool29=!(($bool28=types.__contains__('x-star-trek/tribble')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					self['addStyleName']('dragover');
					$m['DOM']['eventPreventDefault'](event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '685861be91324dfe4ff72980cd2b6970') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool30,$bool31,types;
				types = $m['getTypes'](event);
				if ((($bool31=!(($bool30=types.__contains__('x-star-trek/tribble')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					self['addStyleName']('dragover');
					$m['DOM']['eventPreventDefault'](event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			var $bases = new Array($m['DropWidget1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget4', $p['tuple']($bases), $data);
		})();
		$m['ContentDisplay'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'b9465da8d4c3052f6df4b771070fe078';
			$method = $pyjs__bind_method2('__init__', function(ctype, data) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					ctype = arguments[1];
					data = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b9465da8d4c3052f6df4b771070fe078') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Label']['__init__'](self);
				$m['AddablePanel']['__init__'](self);
				self['setStyleName']('content_text');
				self['setText']($p['sprintf']("'%s' content:", ctype));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'content'}, data])) : $p['setattr'](self, 'content', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'content'}, data])); 
				self['append']($p['getattr'](self, 'content'));
				return null;
			}
	, 1, [null,null,['self'],['ctype'],['data']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Label'],$m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ContentDisplay', $p['tuple']($bases), $data);
		})();
		$m['DropWidgetPanel4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'a8384c3b3c46f7a08c820c85eea24bb8';
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
					if (self.prototype.__md5__ !== 'a8384c3b3c46f7a08c820c85eea24bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['AddablePanel'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a8384c3b3c46f7a08c820c85eea24bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidget4']()) : $p['setattr'](self, 'drop_widget', $m['DropWidget4']()); 
				self['add']($p['getattr'](self, 'drop_widget'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentPanel', $pyjs_kwargs_call(null, $m['AddablePanel'], null, null, [{Element:$m['DOM']['createElement']('div')}])) : $p['setattr'](self, 'contentPanel', $pyjs_kwargs_call(null, $m['AddablePanel'], null, null, [{Element:$m['DOM']['createElement']('div')}])); 
				self['add']($p['getattr'](self, 'contentPanel'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('clearContent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a8384c3b3c46f7a08c820c85eea24bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['contentPanel']['clear']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearContent'] = $method;
			$method = $pyjs__bind_method2('addContent', function(ctype, data) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					ctype = arguments[1];
					data = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a8384c3b3c46f7a08c820c85eea24bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var display;
				display = $m['ContentDisplay'](ctype, data);
				self['contentPanel']['add'](display);
				return null;
			}
	, 1, [null,null,['self'],['ctype'],['data']]);
			$cls_definition['addContent'] = $method;
			var $bases = new Array($m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidgetPanel4', $p['tuple']($bases), $data);
		})();
		$m['DataTransferDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '2745c8d30bfddd029abcf3bddad00645';
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
					if (self.prototype.__md5__ !== '2745c8d30bfddd029abcf3bddad00645') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Using data transfer content types') : $p['setattr'](self, 'title', 'Using data transfer content types'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'data_transfer') : $p['setattr'](self, 'id', 'data_transfer'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drag_widget', $m['DragWidget4']()) : $p['setattr'](self, 'drag_widget', $m['DragWidget4']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidgetPanel4']()) : $p['setattr'](self, 'drop_widget', $m['DropWidgetPanel4']()); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DataTransferDemo', $p['tuple']($bases), $data);
		})();
		$m['DragWidget5'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '3de65691e709eecfd85d3ea99805244a';
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3de65691e709eecfd85d3ea99805244a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,effect_allowed,$pyjs_try_err,$8,$6,$7,dt,$5,id;
				target = $m['DOM']['eventGetTarget'](event);
				dt = $p['getattr'](event, 'dataTransfer');
				try {
					id = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}])['getID']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						id = '';
					}
				}
				dt['setData']('Text', $p['sprintf']('Dropped %s', id));
				effect_allowed = (typeof ($7=$p['getattr'](self, 'data')).__array != 'undefined'?
					((typeof $7.__array[$8=$p['int']((typeof ($5=id).__array != 'undefined'?
					((typeof $5.__array[$6=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))))]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($p['int']((typeof ($5=id).__array != 'undefined'?
					((typeof $5.__array[$6=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))))));
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('effectAllowed', effect_allowed) : $p['setattr'](dt, 'effectAllowed', effect_allowed); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3de65691e709eecfd85d3ea99805244a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,k;
				self['setStyleName']('drag_delegates');
				self['addStyleName']('draglist');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('data', $p['list'](['copy', 'move', 'link', 'all', 'none'])) : $p['setattr'](self, 'data', $p['list'](['copy', 'move', 'link', 'all', 'none'])); 
				$iter7_iter = $p['range']($constant_int_5);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					k = $iter7_nextval;
					self['addDragWidget']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('addDragWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3de65691e709eecfd85d3ea99805244a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $10,s,$add17,w,$9,$len5,$add18;
				s = (($len5=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setID']((typeof ($add17='effectdrag')==typeof ($add18=$p['str'](s)) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)));
				w['setStyleName']('dragme');
				w['setText']($p['sprintf']('Drag %s (%s)', $p['tuple']([s, (typeof ($9=$p['getattr'](self, 'data')).__array != 'undefined'?
					((typeof $9.__array[$10=s]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(s))])));
				self['add'](w);
				$m['makeDraggable'](w);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDragWidget'] = $method;
			var $bases = new Array($m['DragWidget2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget5', $p['tuple']($bases), $data);
		})();
		$m['DropWidget5'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'b0ab25975ad7bbda7c74e049a8ae769c';
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,k,$iter8_type;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('data', $p['list'](['copy', 'move', 'link', 'all', 'none'])) : $p['setattr'](self, 'data', $p['list'](['copy', 'move', 'link', 'all', 'none'])); 
				self['setStyleName']('drop_delegates');
				self['addStyleName']('droplist');
				$iter8_iter = $p['range']($constant_int_5);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					k = $iter8_nextval;
					self['addDropWidget']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('addDropWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $11,$12,$add20,$len6,s,w,$add19;
				s = (($len6=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6)))));
				w = $pyjs_kwargs_call(null, $m['Label'], null, null, [{Element:$m['DOM']['createElement']('li')}]);
				w['setID']((typeof ($add19='effectdrop')==typeof ($add20=$p['str'](s)) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
				w['setStyleName']('drophere');
				w['setText']($p['sprintf']('Drop %s (%s)', $p['tuple']([s, (typeof ($11=$p['getattr'](self, 'data')).__array != 'undefined'?
					((typeof $11.__array[$12=s]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(s))])));
				self['append'](w);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addDropWidget'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$bool32,$bool33,$pyjs_try_err,t,class_names;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				try {
					class_names = t['getStyleName']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						class_names = null;
					}
				}
				if ((($bool32=!$p['op_is'](class_names, null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					if ((($bool33=class_names.__contains__('drophere')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
						t['addStyleName']('dragover');
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,target,$13,drop_effect,id,t,$bool34,$bool35,dt,class_names;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				class_names = t['getStyleName']();
				if ((($bool34=!$p['op_is'](class_names, null)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					if ((($bool35=class_names.__contains__('drophere')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
						dt = $p['getattr'](event, 'dataTransfer');
						id = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}])['getID']();
						drop_effect = (typeof ($15=$p['getattr'](self, 'data')).__array != 'undefined'?
							((typeof $15.__array[$16=$p['int']((typeof ($13=id).__array != 'undefined'?
							((typeof $13.__array[$14=(typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)))))]) != 'undefined'?$15.__array[$16]:
								$15.__getitem__($16)):
								$15.__getitem__($p['int']((typeof ($13=id).__array != 'undefined'?
							((typeof $13.__array[$14=(typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)))))));
						dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', drop_effect) : $p['setattr'](dt, 'dropEffect', drop_effect); 
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,$pyjs_try_err,$bool36,t,class_names,$bool37;
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				try {
					class_names = t['getStyleName']();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						class_names = null;
					}
				}
				if ((($bool36=!$p['op_is'](class_names, null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool37=class_names.__contains__('drophere')) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						t['removeStyleName']('dragover');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b0ab25975ad7bbda7c74e049a8ae769c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var target,text,t,$bool38,dt,$bool39,class_names;
				dt = $p['getattr'](event, 'dataTransfer');
				text = dt['getData']('Text');
				target = $m['DOM']['eventGetTarget'](event);
				t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{Element:target}]);
				class_names = t['getStyleName']();
				if ((($bool38=!$p['op_is'](class_names, null)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					if ((($bool39=class_names.__contains__('drophere')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
						self['addMessage']($p['sprintf']('%s onto %s<br>effectAllowed=%s, dropEffect=%s', $p['tuple']([text, $p['getattr'](target, 'id'), $p['getattr'](dt, 'effectAllowed'), $p['getattr'](dt, 'dropEffect')])));
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			var $bases = new Array($m['DropWidget2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget5', $p['tuple']($bases), $data);
		})();
		$m['DragEffects'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '90ff3c3f6d7121ada17a4de5ce9d3a28';
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
					if (self.prototype.__md5__ !== '90ff3c3f6d7121ada17a4de5ce9d3a28') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Using drag effects') : $p['setattr'](self, 'title', 'Using drag effects'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'data_transfer') : $p['setattr'](self, 'id', 'data_transfer'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drag_widget', $m['DragWidget5']()) : $p['setattr'](self, 'drag_widget', $m['DragWidget5']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['DropWidget5']()) : $p['setattr'](self, 'drop_widget', $m['DropWidget5']()); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragEffects', $p['tuple']($bases), $data);
		})();
		$m['AbsolutePosition'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '7f606fba08fb5688a035e86ee8d3954f';
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
					if (self.prototype.__md5__ !== '7f606fba08fb5688a035e86ee8d3954f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Absolute Position Drag and Drop') : $p['setattr'](self, 'title', 'Absolute Position Drag and Drop'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'absolute_position') : $p['setattr'](self, 'id', 'absolute_position'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', (typeof Drop6Container == "undefined"?$m.Drop6Container:Drop6Container)()) : $p['setattr'](self, 'drop_widget', (typeof Drop6Container == "undefined"?$m.Drop6Container:Drop6Container)()); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AbsolutePosition', $p['tuple']($bases), $data);
		})();
		$m['Drop6Container'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '7ef998f8226188ea813e362d880c183a';
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
					if (self.prototype.__md5__ !== '7ef998f8226188ea813e362d880c183a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var right,drag2,drag,left;
				$m['HorizontalPanel']['__init__'](self);
				left = (typeof DropWidget6 == "undefined"?$m.DropWidget6:DropWidget6)();
				right = (typeof DropWidget6 == "undefined"?$m.DropWidget6:DropWidget6)();
				self['setSpacing']('10px');
				drag = (typeof DragWidget6 == "undefined"?$m.DragWidget6:DragWidget6)('Drag1');
				drag2 = (typeof DragWidget6 == "undefined"?$m.DragWidget6:DragWidget6)('Drag2');
				left['add'](drag2);
				drag2['setStyleAttribute']('top', '0');
				drag2['setStyleAttribute']('left', '0');
				$m['makeDraggable'](drag2);
				left['add'](drag);
				drag['setStyleAttribute']('top', '0');
				drag['setStyleAttribute']('left', '100');
				$m['makeDraggable'](drag);
				self['add'](left);
				self['add'](right);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['HorizontalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Drop6Container', $p['tuple']($bases), $data);
		})();
		$m['DragWidget6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '34d4e7b26bb4e76b1620cba411a5fe71';
			$method = $pyjs__bind_method2('__init__', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34d4e7b26bb4e76b1620cba411a5fe71') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Label']['__init__'](self, text);
				self['setStyleName']('dragme2');
				self['setStyleAttribute']('position', 'absolute');
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Label']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget6', $p['tuple']($bases), $data);
		})();
		$m['DropWidget6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = 'c668d978f49bf4a422cb9eb0d1de0772';
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
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['AddablePanel'], '__init__', null, null, [{Element:$m['DOM']['createElement']('div')}, self]);
				$m['DropWidget']['__init__'](self);
				$m['DragContainer']['__init__'](self);
				self['setStyleName']('drophere2');
				self['setStyleAttribute']('position', 'relative');
				self['setSize']('300px', '300px');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_idx,$add23,$iter9_iter,$add21,$add22,$iter9_nextval,$add24,$sub3,$sub2,$sub1,$iter9_type,$sub4,clientX,clientY,widget,$bool40,dt,target,package,absx,absy,$iter9_array;
				dt = $p['getattr'](event, 'dataTransfer');
				target = $m['DOM']['eventGetTarget'](event);
				clientX = $p['getattr'](event, 'clientX');
				clientY = $p['getattr'](event, 'clientY');
				absx = (typeof ($add21=clientX)==typeof ($add22=$m['Window']['getScrollLeft']()) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				absy = (typeof ($add23=clientY)==typeof ($add24=$m['Window']['getScrollTop']()) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				package = $m['json']['dumps']($p['dict']([['text', $m['DOM']['getInnerText'](target)], ['offsetX', (typeof ($sub1=absx)==typeof ($sub2=$m['DOM']['getAbsoluteLeft'](target)) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))], ['offsetY', (typeof ($sub3=absy)==typeof ($sub4=$m['DOM']['getAbsoluteTop'](target)) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))]]));
				dt['setData']('text', package);
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('allowedEffects', 'copy') : $p['setattr'](dt, 'allowedEffects', 'copy'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('movingWidget', null) : $p['setattr'](self, 'movingWidget', null); 
				$iter9_iter = $p['getattr'](self, 'children');
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					widget = $iter9_nextval;
					if ((($bool40=$p['op_eq'](target, widget['getElement']())) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('movingWidget', widget) : $p['setattr'](self, 'movingWidget', widget); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt;
				dt = $p['getattr'](event, 'dataTransfer');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'none') : $p['setattr'](dt, 'dropEffect', 'none'); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDrag', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['movingWidget']['addStyleName']('invisible');
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrag'] = $method;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,$bool41,ontimer;
				dt = $p['getattr'](event, 'dataTransfer');
				self['addMessage']($p['sprintf']('Drop effect is "%s"', $p['getattr'](dt, 'dropEffect')));
				if ((($bool41=!$p['op_eq']($p['getattr'](dt, 'dropEffect'), 'none')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41.__nonzero__=='function'?
								$bool41.__nonzero__() :
								(typeof $bool41.__len__=='function'?
									($bool41.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['remove']($p['getattr'](self, 'movingWidget'));
				}
				else {
					ontimer = function(timer) {
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

						self['movingWidget']['removeStyleName']('invisible');
						return null;
					};
					ontimer.__name__ = 'ontimer';

					ontimer.__bind_type__ = 0;
					ontimer.__args__ = [null,null,['timer']];
					$pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:ontimer}, $constant_int_500]);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt;
				dt = $p['getattr'](event, 'dataTransfer');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'copy') : $p['setattr'](dt, 'dropEffect', 'copy'); 
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,al,$19,at,$21,$20,$22,$sub9,$sub8,$sub7,$sub6,$sub5,w,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$18,dt,$17,package,offsetX,offsetY,scrollX,scrollY,posX,posY,y,x;
				dt = $p['getattr'](event, 'dataTransfer');
				text = dt['getData']('text');
				package = $m['json']['loads'](text);
				x = $m['DOM']['eventGetClientX'](event);
				y = $m['DOM']['eventGetClientY'](event);
				scrollY = $m['Window']['getScrollTop']();
				scrollX = $m['Window']['getScrollLeft']();
				offsetX = $p['int']((typeof ($17=package).__array != 'undefined'?
					((typeof $17.__array[$18='offsetX']) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__('offsetX')));
				offsetY = $p['int']((typeof ($19=package).__array != 'undefined'?
					((typeof $19.__array[$20='offsetY']) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__('offsetY')));
				at = self['getAbsoluteTop']();
				al = self['getAbsoluteLeft']();
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(typeof ($sub7=x)==typeof ($sub8=(typeof ($sub5=al)==typeof ($sub6=scrollX) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)), (typeof ($sub11=y)==typeof ($sub12=(typeof ($sub9=at)==typeof ($sub10=scrollY) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))]), 2, null);
				posX = $tupleassign1[0];
				posY = $tupleassign1[1];
				w = $m['DragWidget6']((typeof ($21=package).__array != 'undefined'?
					((typeof $21.__array[$22='text']) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__('text')));
				self['add'](w);
				$m['makeDraggable'](w);
				w['setStyleAttribute']('left', (typeof ($sub13=posX)==typeof ($sub14=offsetX) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)));
				w['setStyleAttribute']('top', (typeof ($sub15=posY)==typeof ($sub16=offsetY) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)));
				w['removeStyleName']('invisible');
				self['addMessage']($p['sprintf']('top:%s, left:%s, cy:%s cx:%s, sy:%s sx:%s dropy:%s dropx:%s', $p['tuple']([at, al, y, x, scrollY, scrollX, posY, posX])));
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c668d978f49bf4a422cb9eb0d1de0772') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool43,parent,$bool42;
				parent = self['getParent']();
				while ((($bool43=!(($bool42=$p['hasattr'](parent, 'addMessage')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43.__nonzero__=='function'?
								$bool43.__nonzero__() :
								(typeof $bool43.__len__=='function'?
									($bool43.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['DropWidget'],$m['DragContainer'],$m['AddablePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropWidget6', $p['tuple']($bases), $data);
		})();
		$m['StudentWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '853f6b3eaffe5dceabb4c83a88ba3f65';
			$method = $pyjs__bind_method2('__init__', function(name, age) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					age = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '853f6b3eaffe5dceabb4c83a88ba3f65') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['Label'], '__init__', null, null, [{Element:$m['DOM']['createElement']('li')}, self]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('student_name', name) : $p['setattr'](self, 'student_name', name); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('age', $p['int'](age)) : $p['setattr'](self, 'age', $p['int'](age)); 
				self['setText']($p['sprintf']('%s (%s)', $p['tuple']([$p['getattr'](self, 'student_name'), $p['getattr'](self, 'age')])));
				self['setStyleName']('dragme');
				return null;
			}
	, 1, [null,null,['self'],['name'],['age']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype.__md5__ !== '853f6b3eaffe5dceabb4c83a88ba3f65') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addMessage']('clicked');
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '853f6b3eaffe5dceabb4c83a88ba3f65') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool45,$bool44,parent;
				parent = self['getParent']();
				while ((($bool45=!(($bool44=$p['hasattr'](parent, 'addMessage')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45.__nonzero__=='function'?
								$bool45.__nonzero__() :
								(typeof $bool45.__len__=='function'?
									($bool45.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['Label']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StudentWidget', $p['tuple']($bases), $data);
		})();
		$m['StudentContainer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '2663bad66f1b8bb4b6d274931cbe1d27';
			$method = $pyjs__bind_method2('__init__', function(min_age, max_age, id) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					min_age = arguments[1];
					max_age = arguments[2];
					id = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('min_age', min_age) : $p['setattr'](self, 'min_age', min_age); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('max_age', max_age) : $p['setattr'](self, 'max_age', max_age); 
				$m['VerticalPanel']['__init__'](self);
				$m['DropWidget']['__init__'](self);
				$m['DragContainer']['__init__'](self);
				self['setID'](id);
				self['setWidth']($constant_int_200);
				self['setHeight']($constant_int_300);
				self['setVerticalAlignment']($p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP'));
				self['setStyleName']('drophere2');
				self['addTitle']();
				return null;
			}
	, 1, [null,null,['self'],['min_age'],['max_age'],['id']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getNames', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool46,$iter10_nextval,$iter10_array,item,names,$iter10_type,$iter10_iter,$iter10_idx;
				names = $p['list']([]);
				$iter10_iter = $p['getattr'](self, 'children');
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					item = $iter10_nextval;
					if ((($bool46=$p['isinstance'](item, $m['StudentWidget'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
							false :
							(typeof $bool46=='object'?
								(typeof $bool46.__nonzero__=='function'?
									$bool46.__nonzero__() :
									(typeof $bool46.__len__=='function'?
										($bool46.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						names['append']($p['tuple']([$p['getattr'](item, 'student_name'), $p['getattr'](item, 'age')]));
					}
				}
				return names;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNames'] = $method;
			$method = $pyjs__bind_method2('addTitle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['append']($m['Label']($p['sprintf']('Allowed: %s to %s', $p['tuple']([$p['getattr'](self, 'min_age'), $p['getattr'](self, 'max_age')]))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addTitle'] = $method;
			$method = $pyjs__bind_method2('addStudent', function(name, age) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					age = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool50,$28,item,$25,$24,$27,$26,$iter11_idx,$bool47,new_names,$iter11_iter,$iter12_array,$bool49,$bool48,student,$iter11_array,$iter11_nextval,$23,$iter12_type,$iter11_type,sw,$iter12_nextval,$iter12_iter,$len7,found,$iter12_idx;
				new_names = self['getNames']();
				found = false;
				$iter11_iter = new_names;
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					item = $iter11_nextval;
					if ((($bool47=$p['op_eq'](item, $p['tuple']([name, age]))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						found = true;
						break;
					}
				}
				if ((($bool49=!(($bool48=found) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					new_names['append']($p['tuple']([name, age]));
				}
				new_names['sort']();
				while ((($bool50=(($len7=$p['getattr'](self, 'children')) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7)))))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50.__nonzero__=='function'?
								$bool50.__nonzero__() :
								(typeof $bool50.__len__=='function'?
									($bool50.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['remove']((typeof ($23=$p['getattr'](self, 'children')).__array != 'undefined'?
						((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
							$23.__getitem__($24)):
							$23.__getitem__($constant_int_0)));
				}
				self['addTitle']();
				$iter12_iter = new_names;
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					student = $iter12_nextval;
					sw = $m['StudentWidget']((typeof ($25=student).__array != 'undefined'?
						((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__($constant_int_0)), (typeof ($27=student).__array != 'undefined'?
						((typeof $27.__array[$28=$constant_int_1]) != 'undefined'?$27.__array[$28]:
							$27.__getitem__($28)):
							$27.__getitem__($constant_int_1)));
					$m['makeDraggable'](sw);
					self['append'](sw);
					self['setCellVerticalAlignment'](sw, $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP'));
				}
				return null;
			}
	, 1, [null,null,['self'],['name'],['age']]);
			$cls_definition['addStudent'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var widget,$iter13_nextval,target,$iter13_iter,$iter13_type,$bool51,$iter13_array,dt,$iter13_idx;
				self['removeStyleName']('drop_fail');
				dt = $p['getattr'](event, 'dataTransfer');
				dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('effectAllowed', 'copy') : $p['setattr'](dt, 'effectAllowed', 'copy'); 
				target = $m['DOM']['eventGetTarget'](event);
				widget = null;
				$iter13_iter = $p['getattr'](self, 'children');
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					widget = $iter13_nextval;
					if ((($bool51=$p['op_eq'](widget['getElement'](), target)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51.__nonzero__=='function'?
									$bool51.__nonzero__() :
									(typeof $bool51.__len__=='function'?
										($bool51.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('movingWidget', widget) : $p['setattr'](self, 'movingWidget', widget); 
						break;
					}
				}
				dt['setData']('Text', $m['json']['encode']($p['dict']([['name', $p['getattr'](widget, 'student_name')], ['age', $p['getattr'](widget, 'age')], ['parent', self['getID']()]])));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onDrag', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['movingWidget']['addStyleName']('invisible');
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrag'] = $method;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var styles,$bool54,$bool52,$bool53,$and1,$and2,msg,dt;
				dt = $p['getattr'](event, 'dataTransfer');
				styles = self['getStyleName']();
				if ((($bool54=((($bool52=$and1=!$p['op_eq']($p['getattr'](dt, 'dropEffect'), 'none')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool53=styles.__contains__('drop_fail')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['remove']($p['getattr'](self, 'movingWidget'));
					msg = 'drop succeeded';
				}
				else {
					self['movingWidget']['removeStyleName']('invisible');
					msg = 'drop failed';
				}
				self['addMessage'](msg);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addStyleName']('dragover');
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeStyleName']('dragover');
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('age_is_ok', function(age) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					age = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool55,$cmp4,$cmp1,$cmp3,$cmp2,$and3,$and4;
				return ((($bool55=$and3=((((($cmp1=age)===($cmp2=$p['getattr'](self, 'min_age'))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp3=age)===($cmp4=$p['getattr'](self, 'max_age'))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) < 1):$and3);
			}
	, 1, [null,null,['self'],['age']]);
			$cls_definition['age_is_ok'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$34,$bool56,$bool57,name,$bool58,$33,$32,$and5,$and6,$31,item,item_parent,$30,item_parent_id,dt,age,data,removeFlash;
				dt = $p['getattr'](event, 'dataTransfer');
				item = dt['getData']('Text');
				data = $m['json']['decode'](item);
				if ((($bool57=((($bool56=$and5=data.__contains__('name')) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?data.__contains__('age'):$and5)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57.__nonzero__=='function'?
								$bool57.__nonzero__() :
								(typeof $bool57.__len__=='function'?
									($bool57.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					age = (typeof ($29=data).__array != 'undefined'?
						((typeof $29.__array[$30='age']) != 'undefined'?$29.__array[$30]:
							$29.__getitem__($30)):
							$29.__getitem__('age'));
					name = (typeof ($31=data).__array != 'undefined'?
						((typeof $31.__array[$32='name']) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__('name'));
					self['removeStyleName']('dragover');
					if ((($bool58=self['age_is_ok'](age)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
							false :
							(typeof $bool58=='object'?
								(typeof $bool58.__nonzero__=='function'?
									$bool58.__nonzero__() :
									(typeof $bool58.__len__=='function'?
										($bool58.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['addStudent'](name, age);
						dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'copy') : $p['setattr'](dt, 'dropEffect', 'copy'); 
						self['addStyleName']('flash');
						removeFlash = function(timer) {
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

							self['removeStyleName']('flash');
							return null;
						};
						removeFlash.__name__ = 'removeFlash';

						removeFlash.__bind_type__ = 0;
						removeFlash.__args__ = [null,null,['timer']];
						$pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:removeFlash}, $constant_int_250]);
					}
					else {
						dt.__is_instance__ && typeof dt.__setattr__ == 'function' ? dt.__setattr__('dropEffect', 'none') : $p['setattr'](dt, 'dropEffect', 'none'); 
						self['addMessage']('student could not be added');
						item_parent_id = (typeof ($33=data).__array != 'undefined'?
							((typeof $33.__array[$34='parent']) != 'undefined'?$33.__array[$34]:
								$33.__getitem__($34)):
								$33.__getitem__('parent'));
						item_parent = self['parent']['containerFromId'](item_parent_id);
						item_parent['addStyleName']('drop_fail');
					}
				}
				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('addMessage', function(message) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2663bad66f1b8bb4b6d274931cbe1d27') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool60,parent,$bool59;
				parent = self['getParent']();
				while ((($bool60=!(($bool59=$p['hasattr'](parent, 'addMessage')) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					parent = parent['getParent']();
				}
				parent['addMessage'](message);
				return null;
			}
	, 1, [null,null,['self'],['message']]);
			$cls_definition['addMessage'] = $method;
			var $bases = new Array($m['DragContainer'],$m['DropWidget'],$m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StudentContainer', $p['tuple']($bases), $data);
		})();
		$m['ClassContainer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '7cc020a880e142736693636f6e0eceeb';
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
					if (self.prototype.__md5__ !== '7cc020a880e142736693636f6e0eceeb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,$38,$36,$37,$35,item,$iter14_idx,$iter14_iter,pool,$iter14_nextval;
				$m['HorizontalPanel']['__init__'](self);
				pool = $m['StudentContainer']($constant_int_1, $constant_int_20, 'pool_1');
				$iter14_iter = $p['list']([$p['list'](['Fred', $constant_int_12]), $p['list'](['Jane', $constant_int_10]), $p['list'](['Sam', $constant_int_18]), $p['list'](['Ginger', $constant_int_8]), $p['list'](['Mary', $constant_int_4])]);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					item = $iter14_nextval;
					$pyjs_kwargs_call(pool, 'addStudent', null, null, [{name:(typeof ($35=item).__array != 'undefined'?
						((typeof $35.__array[$36=$constant_int_0]) != 'undefined'?$35.__array[$36]:
							$35.__getitem__($36)):
							$35.__getitem__($constant_int_0)), age:(typeof ($37=item).__array != 'undefined'?
						((typeof $37.__array[$38=$constant_int_1]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__($constant_int_1))}]);
				}
				self['append'](pool);
				self['append']($m['StudentContainer']($constant_int_6, $constant_int_13, 'pool_2'));
				self['append']($m['StudentContainer']($constant_int_11, $constant_int_20, 'pool_3'));
				self['setSpacing']('10px');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('containerFromId', function(id) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					id = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7cc020a880e142736693636f6e0eceeb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool61,$iter15_iter,$iter15_array,$iter15_idx,item,$iter15_nextval,$iter15_type;
				$iter15_iter = $p['getattr'](self, 'children');
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					item = $iter15_nextval;
					if ((($bool61=$p['op_eq'](item['getID'](), id)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
							false :
							(typeof $bool61=='object'?
								(typeof $bool61.__nonzero__=='function'?
									$bool61.__nonzero__() :
									(typeof $bool61.__len__=='function'?
										($bool61.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return item;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['id']]);
			$cls_definition['containerFromId'] = $method;
			var $bases = new Array($m['HorizontalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassContainer', $p['tuple']($bases), $data);
		})();
		$m['MultiTargetDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DNDTest';
			$cls_definition.__md5__ = '9eed30702abcad4e8cef99c2ee2986c6';
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
					if (self.prototype.__md5__ !== '9eed30702abcad4e8cef99c2ee2986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drop_widget', $m['ClassContainer']()) : $p['setattr'](self, 'drop_widget', $m['ClassContainer']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', 'Drop with Validation') : $p['setattr'](self, 'title', 'Drop with Validation'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('id', 'multi') : $p['setattr'](self, 'id', 'multi'); 
				$m['DNDDemo']['__init__'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DNDDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiTargetDemo', $p['tuple']($bases), $data);
		})();
		if ((($bool62=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
				false :
				(typeof $bool62=='object'?
					(typeof $bool62.__nonzero__=='function'?
						$bool62.__nonzero__() :
						(typeof $bool62.__len__=='function'?
							($bool62.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('./public/DNDTest.html');
			$m['j'] = $m['RootPanel']();
			$m['j']['add']($m['DNDDemos']());
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DNDTest */


/* end module: DNDTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas', 'pyjamas.ui', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'datetime.datetime', 'datetime', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.Color', 'pyjamas.dnd.makeDraggable', 'pyjamas.dnd', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas.ui.DragWidget', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DropWidget.DropWidget', 'pyjamas.ui.DropWidget', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui.Panel', 'pyjamas.dnd.getTypes', 'pyjamas.Window', 'json']
*/
