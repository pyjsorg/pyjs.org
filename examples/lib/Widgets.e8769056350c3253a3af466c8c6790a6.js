/* start module: Widgets */
$pyjs['loaded_modules']['Widgets'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Widgets']['__was_initialized__']) return $pyjs['loaded_modules']['Widgets'];
	var $m = $pyjs['loaded_modules']['Widgets'];
	$m['__repr__'] = function() { return '<module: Widgets>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Widgets';
	$m['__name__'] = __mod_name__;
	try {
		var $bool9;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_3600 = new $p['int'](3600);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_60 = new $p['int'](60);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['time'] = $p['___import___']('time', null);
		$m['Widgets'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Widgets';
			$cls_definition['__md5__'] = '9c28c00535e95e8838b42b78c2bf1d57';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c28c00535e95e8838b42b78c2bf1d57') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1,img_url;
				img_url = $m['Window']['getLocation']()['getSearchVar']('img');
				if ((($bool2=!(($bool1=img_url) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					img_url = 'images/chrome_clock.png';
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('solar', (typeof SolarCanvas == "undefined"?$m['SolarCanvas']:SolarCanvas)(img_url)) : $p['setattr'](self, 'solar', (typeof SolarCanvas == "undefined"?$m['SolarCanvas']:SolarCanvas)(img_url)); 
				$m['RootPanel']()['add']($p['getattr'](self, 'solar'));
				self['onShow']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c28c00535e95e8838b42b78c2bf1d57') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'solar')['__is_instance__'] && typeof $p['getattr'](self, 'solar')['__setattr__'] == 'function' ? $p['getattr'](self, 'solar')['__setattr__']('isActive', true) : $p['setattr']($p['getattr'](self, 'solar'), 'isActive', true); 
				self['solar']['onTimer']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('onHide', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c28c00535e95e8838b42b78c2bf1d57') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'solar')['__is_instance__'] && typeof $p['getattr'](self, 'solar')['__setattr__'] == 'function' ? $p['getattr'](self, 'solar')['__setattr__']('isActive', false) : $p['setattr']($p['getattr'](self, 'solar'), 'isActive', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onHide'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Widgets', $p['tuple']($bases), $data);
		})();
		$m['SolarCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Widgets';
			$cls_definition['__md5__'] = '235396b72936e8d531f97e8b5b0d2b86';
			$method = $pyjs__bind_method2('__init__', function(img_url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img_url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['GWTCanvas']['__init__'](self, $constant_int_300, $constant_int_300, $constant_int_300, $constant_int_300);
				$m['loadImages']($p['list']([img_url]), self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $constant_int_150) : $p['setattr'](self, 'width', $constant_int_150); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $constant_int_150) : $p['setattr'](self, 'height', $constant_int_150); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isActive', true) : $p['setattr'](self, 'isActive', true); 
				self['onTimer']();
				return null;
			}
	, 1, [null,null,['self'],['img_url']]);
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
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var el,$2,$1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clock', (typeof ($1=imagesHandles)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))) : $p['setattr'](self, 'clock', (typeof ($1=imagesHandles)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0))); 
				el = self['clock']['getElement']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $m['DOM']['getIntAttribute'](el, 'width')) : $p['setattr'](self, 'width', $m['DOM']['getIntAttribute'](el, 'width')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $m['DOM']['getIntAttribute'](el, 'height')) : $p['setattr'](self, 'height', $m['DOM']['getIntAttribute'](el, 'height')); 
				self['setWidth']($p['sprintf']('%d', $p['getattr'](self, 'width')));
				self['setHeight']($p['sprintf']('%d', $p['getattr'](self, 'height')));
				return null;
			}
	, 1, [null,null,['self'],['imagesHandles']]);
			$cls_definition['onImagesLoaded'] = $method;
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
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Window']['alert']('error of some kind (probably missing image at url)');
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $bool3,$bool4;
				if ((($bool4=!(($bool3=$p['getattr'](self, 'isActive')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return null;
				}
				$m['Timer']($constant_int_1000, self);
				self['draw']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('getTimeSeconds', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod1,$mod2;
				return (typeof ($mod1=$m['time']['time']())==typeof ($mod2=60.0) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeSeconds'] = $method;
			$method = $pyjs__bind_method2('getTimeMilliseconds', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod4,$mod3,$mul2,$mul1;
				return (typeof ($mod3=(typeof ($mul1=$m['time']['time']())==typeof ($mul2=1000.0) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($mod4=1.0) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeMilliseconds'] = $method;
			$method = $pyjs__bind_method2('getTimeMinutes', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$mod5,$div1,$mod6;
				return (typeof ($mod5=(typeof ($div1=$m['time']['time']())==typeof ($div2=$constant_int_60) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($mod6=60.0) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeMinutes'] = $method;
			$method = $pyjs__bind_method2('getTimeHours', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div3,$mod7,$div4,$mod8;
				return (typeof ($mod7=(typeof ($div3=$m['time']['time']())==typeof ($div4=$constant_int_3600) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))==typeof ($mod8=12.0) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTimeHours'] = $method;
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
					if (self.prototype['__md5__'] !== '235396b72936e8d531f97e8b5b0d2b86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul8,mins,$div18,$div14,$div6,$div17,$div10,$div11,$div12,$div13,pi,$mul22,$mul20,$mul21,hours,$div8,$div9,$bool6,$mul9,$bool5,$mul7,$mul6,$mul5,$mul4,$mul3,$div7,$div5,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,$div16,$mul19,$mul18,$add2,$add3,secs,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$div15;
				pi = 3.14159265359;
				if ((($bool6=!(($bool5=$p['getattr'](self, 'clock', null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return null;
				}
				self['setGlobalCompositeOperation']('destination-over');
				self['clear']();
				self['saveContext']();
				self['setFillStyle']($m['Color']('rgba(0,0,0,0.4)'));
				self['setStrokeStyle']($m['Color']('rgba(0,153,255,0.4)'));
				self['translate']((typeof ($div5=$p['getattr'](self, 'width'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)), (typeof ($div7=$p['getattr'](self, 'height'))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)));
				secs = self['getTimeSeconds']();
				mins = (typeof ($add1=self['getTimeMinutes']())==typeof ($add2=(typeof ($div9=secs)==typeof ($div10=60.0) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				hours = (typeof ($add3=self['getTimeHours']())==typeof ($add4=(typeof ($div11=mins)==typeof ($div12=60.0) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['saveContext']();
				self['setFillStyle']($m['Color']('rgba(255,0,0,0.4)'));
				self['rotate']((typeof ($add5=(typeof ($mul5=(typeof ($div13=(typeof ($mul3=$constant_int_2)==typeof ($mul4=pi) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div14=$constant_int_60) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)))==typeof ($mul6=secs) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($add6=pi) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)));
				self['fillRect']((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=(typeof ($mul7=$p['getattr'](self, 'width'))==typeof ($mul8=0.04) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $constant_int_2, (typeof ($mul9=$p['getattr'](self, 'width'))==typeof ($mul10=0.38) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				self['restoreContext']();
				self['saveContext']();
				self['rotate']((typeof ($add7=(typeof ($mul13=(typeof ($div15=(typeof ($mul11=$constant_int_2)==typeof ($mul12=pi) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($div16=$constant_int_60) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)))==typeof ($mul14=mins) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($add8=pi) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
				self['fillRect']((typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), $constant_int_3, (typeof ($mul15=$p['getattr'](self, 'width'))==typeof ($mul16=0.35) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
				self['restoreContext']();
				self['saveContext']();
				self['rotate']((typeof ($add9=(typeof ($mul19=(typeof ($div17=(typeof ($mul17=$constant_int_2)==typeof ($mul18=pi) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($div18=$constant_int_12) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)))==typeof ($mul20=hours) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))==typeof ($add10=pi) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)));
				self['fillRect']((typeof ($usub5=$constant_int_2)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), (typeof ($usub6=$constant_int_2)=='number'?
					-$usub6:
					$p['op_usub']($usub6)), $constant_int_4, (typeof ($mul21=$p['getattr'](self, 'width'))==typeof ($mul22=0.2) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)));
				self['restoreContext']();
				self['restoreContext']();
				self['drawImage'](self['clock']['getElement'](), $constant_int_0, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['GWTCanvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SolarCanvas', $p['tuple']($bases), $data);
		})();
		$m['AppInit'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $bool8,img_url,$bool7,solar;
			img_url = $m['Window']['getLocation']()['getSearchVar']('img');
			if ((($bool8=!(($bool7=img_url) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				img_url = 'images/chrome_clock.png';
			}
			solar = $m['SolarCanvas'](img_url);
			solar['__is_instance__'] && typeof solar['__setattr__'] == 'function' ? solar['__setattr__']('isActive', true) : $p['setattr'](solar, 'isActive', true); 
			solar['onTimer']();
			return solar;
		};
		$m['AppInit']['__name__'] = 'AppInit';

		$m['AppInit']['__bind_type__'] = 0;
		$m['AppInit']['__args__'] = [null,null];
		if ((($bool9=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			$m['pyjd']['setup']('./public/Widgets.html');
			$m['app'] = $m['Widgets']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Widgets */


/* end module: Widgets */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Window', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.DOM', 'time']
*/
