/* start module: Toggle */
$pyjs.loaded_modules['Toggle'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Toggle'].__was_initialized__) return $pyjs.loaded_modules['Toggle'];
	var $m = $pyjs.loaded_modules["Toggle"];
	$m.__repr__ = function() { return "<module: Toggle>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Toggle';
	$m.__name__ = __mod_name__;
	try {
		var $bool6;
		var $constant_int_10 = new $p['int'](10);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['ButtonBase'] = $p['___import___']('pyjamas.ui.ButtonBase.ButtonBase', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['ToggleButton'] = $p['___import___']('pyjamas.ui.ToggleButton.ToggleButton', null, null, false);
		$m['PushButton'] = $p['___import___']('pyjamas.ui.PushButton.PushButton', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['Toggle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Toggle';
			$cls_definition.__md5__ = '57af19ec936b6a2281103e6e831a0fbf';
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
					if (self.prototype.__md5__ !== '57af19ec936b6a2281103e6e831a0fbf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$label', $m['Label']('Not set yet')) : $p['setattr'](self, '$$label', $m['Label']('Not set yet')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button', $m['Button']('Probe button', self)) : $p['setattr'](self, 'button', $m['Button']('Probe button', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image_up', $m['Image']('./images/logo.png')) : $p['setattr'](self, 'image_up', $m['Image']('./images/logo.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image_up3', $m['Image']('./images/logo.png')) : $p['setattr'](self, 'image_up3', $m['Image']('./images/logo.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image_down', $m['Image']('./images/logo.png')) : $p['setattr'](self, 'image_down', $m['Image']('./images/logo.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image_down3', $m['Image']('./images/logo.png')) : $p['setattr'](self, 'image_down3', $m['Image']('./images/logo.png')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toggle', $m['ToggleButton']($p['getattr'](self, 'image_up'), $p['getattr'](self, 'image_down'), self)) : $p['setattr'](self, 'toggle', $m['ToggleButton']($p['getattr'](self, 'image_up'), $p['getattr'](self, 'image_down'), self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toggle2', $m['ToggleButton']('up', 'down', $p['getattr'](self, 'onToggleUD'))) : $p['setattr'](self, 'toggle2', $m['ToggleButton']('up', 'down', $p['getattr'](self, 'onToggleUD'))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('push', $m['PushButton']($p['getattr'](self, 'image_up3'), $p['getattr'](self, 'image_down3'))) : $p['setattr'](self, 'push', $m['PushButton']($p['getattr'](self, 'image_up3'), $p['getattr'](self, 'image_down3'))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vpanel', $m['VerticalPanel']()) : $p['setattr'](self, 'vpanel', $m['VerticalPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('togglePanel', $m['HorizontalPanel']()) : $p['setattr'](self, 'togglePanel', $m['HorizontalPanel']()); 
				self['togglePanel']['setSpacing']($constant_int_10);
				self['togglePanel']['add']($p['getattr'](self, 'toggle'));
				self['togglePanel']['add']($p['getattr'](self, 'toggle2'));
				self['togglePanel']['add']($p['getattr'](self, 'push'));
				self['vpanel']['add']($p['getattr'](self, '$$label'));
				self['vpanel']['add']($p['getattr'](self, 'button'));
				self['vpanel']['add']($p['getattr'](self, 'togglePanel'));
				$m['RootPanel']()['add']($p['getattr'](self, 'vpanel'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', false) : $p['setattr'](self, 'i', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('onToggleUD', function(sender) {
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
					if (self.prototype.__md5__ !== '57af19ec936b6a2281103e6e831a0fbf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['$$label']['setText']((typeof ($add1=' Toggle2 isdown: ')==typeof ($add2=$p['str'](self['toggle2']['isDown']())) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onToggleUD'] = $method;
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
					if (self.prototype.__md5__ !== '57af19ec936b6a2281103e6e831a0fbf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,text,$add5,$bool2,$bool3,$bool1,$add6,$add4,$bool4,$bool5;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'button'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=$p['getattr'](self, 'i')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', false) : $p['setattr'](self, 'i', false); 
						text = '>>>>UP<<<<';
						self['toggle']['setCurrentFace'](self['toggle']['getUpFace']());
					}
					else {
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', true) : $p['setattr'](self, 'i', true); 
						text = '>>>DOWN<<<';
						self['toggle']['setCurrentFace'](self['toggle']['getDownFace']());
					}
					self['$$label']['setText'](text);
				}
				else if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'toggle'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					text = '>>>DOWN<<<';
					if ((($bool4=$p['getattr'](self, 'i')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						text = '>>>>UP<<<<';
					}
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', !(($bool5=$p['getattr'](self, 'i')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) : $p['setattr'](self, 'i', !(($bool5=$p['getattr'](self, 'i')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )); 
					self['$$label']['setText']((typeof ($add5=(typeof ($add3=text)==typeof ($add4=' isdown: ') && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)))==typeof ($add6=$p['str'](self['toggle']['isDown']())) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Toggle', $p['tuple']($bases), $data);
		})();
		if ((($bool6=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			$m['pyjd']['setup']('./public/Toggle.html');
			$m['app'] = $m['Toggle']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Toggle */


/* end module: Toggle */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Label.Label', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui.ButtonBase', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.ToggleButton.ToggleButton', 'pyjamas.ui.ToggleButton', 'pyjamas.ui.PushButton.PushButton', 'pyjamas.ui.PushButton', 'pyjamas.DOM', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel']
*/
