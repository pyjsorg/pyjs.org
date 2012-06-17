/* start module: timerdemo */
$pyjs.loaded_modules['timerdemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['timerdemo'].__was_initialized__) return $pyjs.loaded_modules['timerdemo'];
	var $m = $pyjs.loaded_modules["timerdemo"];
	$m.__repr__ = function() { return "<module: timerdemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'timerdemo';
	$m.__name__ = __mod_name__;
	try {
		var $bool8;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_4 = new $p['int'](4);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['HorizontalSlider'] = $p['___import___']('pyjamas.ui.HorizontalSlider.HorizontalSlider', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['CaptionPanel'] = $p['___import___']('pyjamas.ui.CaptionPanel.CaptionPanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['random'] = $p['___import___']('random.random', null, null, false);
		$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Clock'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'timerdemo';
			$cls_definition.__md5__ = '5c91dee25fa6cce7de9eb8b5a4a9a5c9';
			$cls_definition['__doc__'] = 'This demonstrates using Timer instantiated with the\n    notify keyword, as in:<pre> timer = Timer(notify=func) </pre>When\n    the timer fires it will call func() with no arguments (or\n    <code>self</code> if it is a bound method as in this example).\n    This timer is scheduled with the <code>scheduleRepeating()</code>\n    method, so after func() is called, it is automatically rescheduled\n    to fire again after the specified period.  The timer can be\n    cancelled by calling the <code>cancel()</code> method; this\n    happens when you click on the button.\n    ';
			$cls_definition['start_txt'] = 'Click to start the clock';
			$cls_definition['stop_txt'] = 'Click to stop the clock';
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
					if (self.prototype.__md5__ !== '5c91dee25fa6cce7de9eb8b5a4a9a5c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:self}])) : $p['setattr'](self, 'button', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:self}])); 
				$p['getattr'](self, 'button').__is_instance__ && typeof $p['getattr'](self, 'button').__setattr__ == 'function' ? $p['getattr'](self, 'button').__setattr__('stop', false) : $p['setattr']($p['getattr'](self, 'button'), 'stop', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('datelabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'clock'}])) : $p['setattr'](self, 'datelabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'clock'}])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:$p['getattr'](self, 'updateclock')}])) : $p['setattr'](self, 'timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:$p['getattr'](self, 'updateclock')}])); 
				self['onClick']($p['getattr'](self, 'button'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(button) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					button = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c91dee25fa6cce7de9eb8b5a4a9a5c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['getattr']($p['getattr'](self, 'button'), 'stop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$p['getattr'](self, 'button').__is_instance__ && typeof $p['getattr'](self, 'button').__setattr__ == 'function' ? $p['getattr'](self, 'button').__setattr__('stop', false) : $p['setattr']($p['getattr'](self, 'button'), 'stop', false); 
					self['timer']['cancel']();
					self['button']['setText']($p['getattr'](self, 'start_txt'));
				}
				else {
					$p['getattr'](self, 'button').__is_instance__ && typeof $p['getattr'](self, 'button').__setattr__ == 'function' ? $p['getattr'](self, 'button').__setattr__('stop', true) : $p['setattr']($p['getattr'](self, 'button'), 'stop', true); 
					self['timer']['scheduleRepeating']($constant_int_1000);
					self['button']['setText']($p['getattr'](self, 'stop_txt'));
				}
				return null;
			}
	, 1, [null,null,['self'],['button']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('updateclock', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c91dee25fa6cce7de9eb8b5a4a9a5c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt;
				dt = $pyjs_kwargs_call($m['datetime']['now'](), '$$replace', null, null, [{microsecond:$constant_int_0}]);
				self['datelabel']['setText'](dt['isoformat'](' '));
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['updateclock'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Clock', $p['tuple']($bases), $data);
		})();
		$m['PopupTimerButton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'timerdemo';
			$cls_definition.__md5__ = '4ec63b6eb2f1fe36c2f3f327afd96a19';
			$cls_definition['__doc__'] = 'The timer in this demo is a subclass of Timer which\n    implements the <code>run()</code> method.  Worth noting in this\n    example is the use of the method <code>schedule()</code> at the\n    end of <code>run()</code> (contrast this to the use of\n    <code>scheduleRepeating()</code> in the previous example).  In this\n    demo when the timer counts down to zero it creates a popup which\n    will appear in the box to the left.  The timer can be cancelled by\n    clicking the button before it reaches zero.\n    ';
			$method = $pyjs__bind_method2('__init__', function(countdown) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					countdown = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ec63b6eb2f1fe36c2f3f327afd96a19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Timer']['__init__'](self);
				$m['Button']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('countdown_save', countdown) : $p['setattr'](self, 'countdown_save', countdown); 
				self['addClickListener'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('box', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{StyleName:'popupbox'}])) : $p['setattr'](self, 'box', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{StyleName:'popupbox'}])); 
				self['reset']();
				return null;
			}
	, 1, [null,null,['self'],['countdown']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('run', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ec63b6eb2f1fe36c2f3f327afd96a19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$cmp2,$bool2,$sub2,$sub1;
				self['setHTML']($p['sprintf']('Popup in <b>%d</b> seconds! (Click to cancel)', $p['getattr'](self, 'countdown')));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('countdown', (typeof ($sub1=$p['getattr'](self, 'countdown'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'countdown', (typeof ($sub1=$p['getattr'](self, 'countdown'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				if ((($bool2=((((($cmp1=$p['getattr'](self, 'countdown'))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['schedule']($constant_int_1000);
				}
				else {
					self['create_popup']();
					self['reset']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ec63b6eb2f1fe36c2f3f327afd96a19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setHTML']('Click for countdown popup');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('countdown', $p['getattr'](self, 'countdown_save')) : $p['setattr'](self, 'countdown', $p['getattr'](self, 'countdown_save')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('start', true) : $p['setattr'](self, 'start', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('onClick', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var arg = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var arg = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ec63b6eb2f1fe36c2f3f327afd96a19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$bool4;
				if ((($bool4=!(($bool3=$p['getattr'](self, 'start')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['cancel']();
					self['reset']();
					return null;
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('start', false) : $p['setattr'](self, 'start', false); 
				self['schedule']($constant_int_1);
				return null;
			}
	, 1, ['arg',null,['self']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('create_popup', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ec63b6eb2f1fe36c2f3f327afd96a19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var popup,$lambda1,$add2,$add3,$add1,$add4,y,x,$mul4,$mul3,$mul2,$mul1;
				popup = $m['DialogBox'](false, false);
				var 				$lambda1 = function(w) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					return popup['hide']();
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['w']];
				popup.__is_instance__ && typeof popup.__setattr__ == 'function' ? popup.__setattr__('onClick', $lambda1) : $p['setattr'](popup, 'onClick', $lambda1); 
				popup['setHTML']('<b>Hello!</b>');
				popup['setWidget']($m['Button']('Close', popup));
				x = (typeof ($add1=self['box']['getAbsoluteLeft']())==typeof ($add2=(typeof ($mul1=$m['random']())==typeof ($mul2=$constant_int_100) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				y = (typeof ($add3=self['box']['getAbsoluteTop']())==typeof ($add4=(typeof ($mul3=$m['random']())==typeof ($mul4=$constant_int_100) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				popup['setPopupPosition'](x, y);
				popup['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['create_popup'] = $method;
			var $bases = new Array($m['Timer'],$m['Button']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PopupTimerButton', $p['tuple']($bases), $data);
		})();
		$m['RandomColor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'timerdemo';
			$cls_definition.__md5__ = '235fa430287e968d1f000cee456de625';
			$cls_definition['__doc__'] = "This last example demonstrates what most pyjamas\n    programmers currently do with timers: create a Timer instance\n    specifying <code>notify</code> with an object that has an\n    <code>onTimer</code> attribute that is callable.  The slider on\n    the left will adjust how often the middle panel changes color; it\n    is either OFF or a value of seconds from 1 to 5.  Changing the\n    slider immediately cancels the current timer and starts a new\n    timer to change the color in the newly specified time.  Like the\n    previous example, this timer reschedules itself (if it wasn't\n    turned off) at the end of the call to <code>onTimer()</code>.\n    ";
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
					if (self.prototype.__md5__ !== '235fa430287e968d1f000cee456de625') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var hpanel,slider,$assign1,$assign2;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__label', $m['Label']('OFF')) : $p['setattr'](self, '__label', $m['Label']('OFF')); 
				$assign1 = $pyjs_kwargs_call(null, $m['HorizontalSlider'], null, null, [{step:$constant_int_1, StyleName:'slider'}, $constant_int_0, $constant_int_5]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('slider', $assign1) : $p['setattr'](self, 'slider', $assign1); 
				slider = $assign1;
				slider['setDragable'](true);
				slider['addControlValueListener'](self);
				$assign2 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Spacing:$constant_int_10}]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hpanel', $assign2) : $p['setattr'](self, 'hpanel', $assign2); 
				hpanel = $assign2;
				hpanel['add'](slider);
				hpanel['add']($p['getattr'](self, '__label'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('colorpanel', $m['CaptionPanel']('Color:', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{StyleName:'colorpanel'}]))) : $p['setattr'](self, 'colorpanel', $m['CaptionPanel']('Color:', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{StyleName:'colorpanel'}]))); 
				self['randomcolor']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', $constant_int_0) : $p['setattr'](self, 'value', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:self}])) : $p['setattr'](self, 'timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:self}])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('initialize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '235fa430287e968d1f000cee456de625') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['slider']['setValue']($p['getattr'](self, 'value'));
				self['slider']['setControlPos']($p['getattr'](self, 'value'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['initialize'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '235fa430287e968d1f000cee456de625') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var v,$bool5,$mul6,$mul5;
				self['randomcolor']();
				v = (typeof ($mul5=$p['getattr'](self, 'value'))==typeof ($mul6=$constant_int_1000) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6));
				if ((($bool5=v) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['timer']['schedule'](v);
				}
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old, $$new) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					old = arguments[2];
					$$new = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '235fa430287e968d1f000cee456de625') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$bool6,$bool7,$add5,$$new;
				if ((($bool6=$p['op_eq']($$new, $p['getattr'](self, 'value'))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', $$new) : $p['setattr'](self, 'value', $$new); 
				if ((($bool7=$p['op_eq']($$new, $constant_int_0)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['__label']['setText']('OFF');
					self['timer']['cancel']();
				}
				else {
					self['__label']['setText']((typeof ($add5=$p['str']($$new))==typeof ($add6=' sec') && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
					self['onTimer']($p['getattr'](self, 'timer'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['old'],['$$new']]);
			$cls_definition['onControlValueChanged'] = $method;
			$method = $pyjs__bind_method2('randomcolor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '235fa430287e968d1f000cee456de625') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b,e,$mul11,g,$mul10,color,r,$mul9,$mul8,$mul7,$mul12;
				r = (typeof ($mul7=$m['random']())==typeof ($mul8=$constant_int_256) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8));
				g = (typeof ($mul9=$m['random']())==typeof ($mul10=$constant_int_256) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
				b = (typeof ($mul11=$m['random']())==typeof ($mul12=$constant_int_256) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12));
				e = self['colorpanel']['getWidget']()['getElement']();
				color = $p['sprintf']('#%02x%02x%02x', $p['tuple']([r, g, b]));
				self['colorpanel']['setCaption']($p['sprintf']('Color: %s', color));
				$m['DOM']['setStyleAttribute'](e, 'background', color);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['randomcolor'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RandomColor', $p['tuple']($bases), $data);
		})();
		$m['timerdemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'timerdemo';
			$cls_definition.__md5__ = '5a53e45b1e5fd1a9180910c658ff7979';
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
					if (self.prototype.__md5__ !== '5a53e45b1e5fd1a9180910c658ff7979') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var clock,ptb,rf,grid,randomcolor;
				grid = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{CellPadding:$constant_int_50, CellSpacing:$constant_int_0}, $constant_int_4, $constant_int_3]);
				rf = grid['getRowFormatter']();
				rf['setStyleName']($constant_int_1, 'oddrow');
				rf['setStyleName']($constant_int_3, 'oddrow');
				clock = $m['Clock']();
				grid['setWidget']($constant_int_0, $constant_int_0, $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{StyleName:'left'}, 'Using notify()', $p['getattr'](clock, 'button')]));
				grid['setWidget']($constant_int_0, $constant_int_1, $p['getattr'](clock, 'datelabel'));
				grid['setWidget']($constant_int_0, $constant_int_2, $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'desc'}, $p['getattr']($m['Clock'], '__doc__')]));
				ptb = $m['PopupTimerButton']($constant_int_5);
				grid['setWidget']($constant_int_1, $constant_int_0, $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{StyleName:'left'}, 'Subclassing Timer()', ptb]));
				grid['setWidget']($constant_int_1, $constant_int_1, $p['getattr'](ptb, 'box'));
				grid['setWidget']($constant_int_1, $constant_int_2, $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'desc'}, $p['getattr']($m['PopupTimerButton'], '__doc__')]));
				ptb = $m['PopupTimerButton']($constant_int_15);
				grid['setWidget']($constant_int_2, $constant_int_0, $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{StyleName:'left'}, 'Subclassing Timer()&nbsp;&nbsp;(<em>again</em>)', ptb]));
				grid['setWidget']($constant_int_2, $constant_int_1, $p['getattr'](ptb, 'box'));
				grid['setWidget']($constant_int_2, $constant_int_2, $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'desc'}, 'This is the same as the previous\n                                  example and is here to demonstrate\n                                  creating multiple timers (each with\n                                  their own state) which is difficult\n                                  to do without sublcassing']));
				randomcolor = $m['RandomColor']();
				grid['setWidget']($constant_int_3, $constant_int_0, $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{StyleName:'left'}, 'Using onTimer()', $p['getattr'](randomcolor, 'hpanel')]));
				grid['setWidget']($constant_int_3, $constant_int_1, $p['getattr'](randomcolor, 'colorpanel'));
				grid['setWidget']($constant_int_3, $constant_int_2, $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'desc'}, $p['getattr']($m['RandomColor'], '__doc__')]));
				$m['RootPanel']()['add'](grid);
				randomcolor['initialize']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('timerdemo', $p['tuple']($bases), $data);
		})();
		$m['onModuleLoad'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$m['timerdemo']();
			return null;
		};
		$m['onModuleLoad'].__name__ = 'onModuleLoad';

		$m['onModuleLoad'].__bind_type__ = 0;
		$m['onModuleLoad'].__args__ = [null,null];
		if ((($bool8=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			$m['pyjd']['setup']('public/timerdemo.html');
			$m['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end timerdemo */


/* end module: timerdemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HorizontalSlider.HorizontalSlider', 'pyjamas.ui.HorizontalSlider', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.CaptionPanel.CaptionPanel', 'pyjamas.ui.CaptionPanel', 'pyjamas.DOM', 'random.random', 'random', 'datetime.datetime', 'datetime', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
