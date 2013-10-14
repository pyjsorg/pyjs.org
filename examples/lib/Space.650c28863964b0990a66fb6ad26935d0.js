/* start module: Space */
$pyjs['loaded_modules']['Space'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Space']['__was_initialized__']) return $pyjs['loaded_modules']['Space'];
	var $m = $pyjs['loaded_modules']['Space'];
	$m['__repr__'] = function() { return '<module: Space>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Space';
	$m['__name__'] = __mod_name__;
	try {
		var $bool8;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_600 = new $p['int'](600);
		var $constant_int_800 = new $p['int'](800);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
		$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
		$m['Model'] = $p['___import___']('game_model.Model', null, null, false);
		$m['ASTEROID_SIZE'] = $p['___import___']('game_model.ASTEROID_SIZE', null, null, false);
		$m['Controller'] = $p['___import___']('game_controller.Controller', null, null, false);
		$m['SHOT_COLOR'] = $m['Color']['Color']('#fff');
		$m['GameCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Space';
			$cls_definition['__md5__'] = '43434a8fe6055ca6051f14fe2f5b337d';
			$method = $pyjs__bind_method2('__init__', function(w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					w = arguments[1];
					h = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var images;
				$m['GWTCanvas']['__init__'](self, w, h);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', w) : $p['setattr'](self, 'width', w); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', h) : $p['setattr'](self, 'height', h); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('model', $m['Model'](w, h)) : $p['setattr'](self, 'model', $m['Model'](w, h)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('controller', $m['Controller']($p['getattr'](self, 'model'))) : $p['setattr'](self, 'controller', $m['Controller']($p['getattr'](self, 'model'))); 
				images = $p['list'](['./images/ship1.png', './images/ship2.png', './images/asteroid.png']);
				$m['loadImages'](images, self);
				self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
				return null;
			}
	, 1, [null,null,['self'],['w'],['h']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onImagesLoaded', function(imagesHandles) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagesHandles = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $3,$6,$4,$5,$2,$1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ship', (typeof ($1=imagesHandles)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))) : $p['setattr'](self, 'ship', (typeof ($1=imagesHandles)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ship_thrust', (typeof ($3=imagesHandles)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))) : $p['setattr'](self, 'ship_thrust', (typeof ($3=imagesHandles)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('asteroid', (typeof ($5=imagesHandles)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_2]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_2))) : $p['setattr'](self, 'asteroid', (typeof ($5=imagesHandles)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_2]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_2))); 
				self['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self['controller']['start_game'](self);
				return null;
			}
	, 1, [null,null,['self'],['imagesHandles']]);
			$cls_definition['onImagesLoaded'] = $method;
			$method = $pyjs__bind_method2('addTo', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					panel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				panel['add'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('top', $m['DOM']['getAbsoluteTop'](self['getElement']())) : $p['setattr'](self, 'top', $m['DOM']['getAbsoluteTop'](self['getElement']())); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('left', $m['DOM']['getAbsoluteLeft'](self['getElement']())) : $p['setattr'](self, 'left', $m['DOM']['getAbsoluteLeft'](self['getElement']())); 
				return null;
			}
	, 1, [null,null,['self'],['panel']]);
			$cls_definition['addTo'] = $method;
			$method = $pyjs__bind_method2('setKey', function(k, set) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					k = arguments[1];
					set = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool1,$bool4,$bool5;
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				if ((($bool1=$p['op_eq'](k, $constant_int_38)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'controller')['__is_instance__'] && typeof $p['getattr'](self, 'controller')['__setattr__'] == 'function' ? $p['getattr'](self, 'controller')['__setattr__']('key_up', set) : $p['setattr']($p['getattr'](self, 'controller'), 'key_up', set); 
				}
				else if ((($bool2=$p['op_eq'](k, $constant_int_40)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$p['getattr'](self, 'controller')['__is_instance__'] && typeof $p['getattr'](self, 'controller')['__setattr__'] == 'function' ? $p['getattr'](self, 'controller')['__setattr__']('key_down', set) : $p['setattr']($p['getattr'](self, 'controller'), 'key_down', set); 
				}
				else if ((($bool3=$p['op_eq'](k, $constant_int_37)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$p['getattr'](self, 'controller')['__is_instance__'] && typeof $p['getattr'](self, 'controller')['__setattr__'] == 'function' ? $p['getattr'](self, 'controller')['__setattr__']('key_left', set) : $p['setattr']($p['getattr'](self, 'controller'), 'key_left', set); 
				}
				else if ((($bool4=$p['op_eq'](k, $constant_int_39)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$p['getattr'](self, 'controller')['__is_instance__'] && typeof $p['getattr'](self, 'controller')['__setattr__'] == 'function' ? $p['getattr'](self, 'controller')['__setattr__']('key_right', set) : $p['setattr']($p['getattr'](self, 'controller'), 'key_right', set); 
				}
				else if ((($bool5=$p['op_eq'](k, $constant_int_32)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$p['getattr'](self, 'controller')['__is_instance__'] && typeof $p['getattr'](self, 'controller')['__setattr__'] == 'function' ? $p['getattr'](self, 'controller')['__setattr__']('key_fire', set) : $p['setattr']($p['getattr'](self, 'controller'), 'key_fire', set); 
				}
				return null;
			}
	, 1, [null,null,['self'],['k'],['set']]);
			$cls_definition['setKey'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];

				self['setKey'](keyCode, true);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];

				self['setKey'](keyCode, false);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('draw_asteroid', function(asteroid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					asteroid = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div3,$div1,$div4;
				self['saveContext']();
				self['translate']($p['getattr'](asteroid, 'x'), $p['getattr'](asteroid, 'y'));
				self['rotate']($p['getattr'](asteroid, 'rot'));
				self['scale']($p['getattr'](asteroid, 'scale'), $p['getattr'](asteroid, 'scale'));
				self['drawImage']($p['getattr'](self, 'asteroid'), (typeof ($usub1=(typeof ($div1=$m['ASTEROID_SIZE'])==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=(typeof ($div3=$m['ASTEROID_SIZE'])==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				self['restoreContext']();
				return null;
			}
	, 1, [null,null,['self'],['asteroid']]);
			$cls_definition['draw_asteroid'] = $method;
			$method = $pyjs__bind_method2('draw_shot', function(shot) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					shot = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,$sub2,$sub1,$sub4;
				self['setFillStyle']($m['SHOT_COLOR']);
				self['fillRect']($p['int']((typeof ($sub1=$p['getattr'](shot, 'x'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))), $p['int']((typeof ($sub3=$p['getattr'](shot, 'y'))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))), $constant_int_3, $constant_int_3);
				return null;
			}
	, 1, [null,null,['self'],['shot']]);
			$cls_definition['draw_shot'] = $method;
			$method = $pyjs__bind_method2('draw_ship', function(ship) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ship = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,img;
				self['saveContext']();
				self['translate']($p['getattr'](ship, 'x'), $p['getattr'](ship, 'y'));
				self['rotate']($p['getattr'](ship, 'rot'));
				if ((($bool6=$p['getattr']($p['getattr'](self, 'controller'), 'key_up')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					img = $p['getattr'](self, 'ship_thrust');
				}
				else {
					img = $p['getattr'](self, 'ship');
				}
				self['drawImage'](img, (typeof ($usub3=$constant_int_15)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=$constant_int_12)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				self['restoreContext']();
				return null;
			}
	, 1, [null,null,['self'],['ship']]);
			$cls_definition['draw_ship'] = $method;
			$method = $pyjs__bind_method2('draw', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '43434a8fe6055ca6051f14fe2f5b337d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,s,$iter1_iter,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
				self['setFillStyle']($m['Color']['Color']('#000'));
				self['fillRect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$iter1_iter = $p['getattr']($p['getattr'](self, 'model'), 'asteroids');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					a = $iter1_nextval;
					self['draw_asteroid'](a);
				}
				$iter2_iter = $p['getattr']($p['getattr'](self, 'model'), 'shots');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					s = $iter2_nextval;
					self['draw_shot'](s);
				}
				self['draw_ship']($p['getattr']($p['getattr'](self, 'model'), 'ship'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['GWTCanvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GameCanvas', $p['tuple']($bases), $data);
		})();
		$m['RootPanelListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Space';
			$cls_definition['__md5__'] = '0a7e27fc06df3858f5c0137d2baf0dae';
			$method = $pyjs__bind_method2('__init__', function(Parent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					Parent = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0a7e27fc06df3858f5c0137d2baf0dae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof Parent != 'undefined') {
						if (Parent !== null && typeof Parent['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = Parent;
							Parent = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Parent', Parent) : $p['setattr'](self, 'Parent', Parent); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('focussed', false) : $p['setattr'](self, 'focussed', false); 
				$pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
				$m['ClickHandler']['__init__'](self);
				$m['KeyboardHandler']['__init__'](self);
				self['addClickListener'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(Sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					Sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0a7e27fc06df3858f5c0137d2baf0dae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('focussed', !(($bool7=$p['getattr'](self, 'focussed')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) : $p['setattr'](self, 'focussed', !(($bool7=$p['getattr'](self, 'focussed')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )); 
				self['Parent']['setFocus']($p['getattr'](self, 'focussed'));
				return null;
			}
	, 1, [null,null,['self'],['Sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler'],$m['ClickHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
		})();
		if ((($bool8=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			$m['pyjd']['setup']('public/Space.html');
			$m['c'] = $m['GameCanvas']($constant_int_800, $constant_int_600);
			$m['panel'] = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$m['c']}]);
			$m['RootPanel']()['add']($m['panel']);
			$m['panel']['addKeyboardListener']($m['c']);
			$m['panel']['setFocus'](true);
			$m['RootPanel']()['add']($m['HTML']('\n<hr/>\nLeft/Right arrows turn, Up key thrusts, Space bar fires<br/>\n<a href="http://rumsey.org/blog/?p=215">About Space Game</a> by <a href="http://rumsey.org/blog/">Ogre</a><br/>\nWritten entirely in Python, using <a href="http://pyjs.org/">Pyjamas</a></br>\nCopyright &copy; 2009 Joe Rumsey\n'));
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Space */


/* end module: Space */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'game_model.Model', 'game_model', 'game_model.ASTEROID_SIZE', 'game_controller.Controller', 'game_controller']
*/
