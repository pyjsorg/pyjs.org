/* start module: Space */
$pyjs['loaded_modules']['Space'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Space']['__was_initialized__']) return $pyjs['loaded_modules']['Space'];
	var $m = $pyjs['loaded_modules']['Space'];
	$m['__repr__'] = function() { return '<module: Space>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Space';
	$m['__name__'] = __mod_name__;
	try {
		var $bool49,$div2,$div1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_265 = new $p['int'](265);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_165 = new $p['int'](165);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_185 = new $p['int'](185);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_190 = new $p['int'](190);
		var $constant_int_800 = new $p['int'](800);
		var $constant_int_600 = new $p['int'](600);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_125 = new $p['int'](125);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
		$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['math'] = $p['___import___']('math', null);
		$m['pygwt'] = $p['___import___']('pygwt', null);
		$m['random'] = $p['___import___']('random', null);
		$m['NUM_ASTEROIDS'] = $constant_int_2;
		$m['FPS'] = $constant_int_30;
		$m['ROTATE_SPEED_PER_SEC'] = $p['getattr']($m['math'], 'pi');
		$m['ROTATE_SPEED'] = (typeof ($div1=$m['ROTATE_SPEED_PER_SEC'])==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$m['FRICTION'] = 0.05;
		$m['THRUST'] = 0.2;
		$m['SPEED_MAX'] = $constant_int_10;
		$m['MAX_ASTEROID_SPEED'] = 2.0;
		$m['SHOT_LIFESPAN'] = $constant_int_60;
		$m['SHOT_COLOR'] = $m['Color']['Color']('#fff');
		$m['SHOT_SPEED'] = 7.0;
		$m['SHOT_DELAY'] = $constant_int_10;
		$m['ASTEROID_RADIUS'] = 45.0;
		$m['ASTEROID_IMAGE_SIZE'] = 180.0;
		$m['ASTEROID_SIZES'] = $p['list']([90.0, 45.0, 22.0, 11.0]);
		$m['randfloat'] = function(absval) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub2,$sub1,$mul4,$mul3,$mul2,$mul1;
			return (typeof ($sub1=(typeof ($mul3=$m['random']['random']())==typeof ($mul4=(typeof ($mul1=$constant_int_2)==typeof ($mul2=absval) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($sub2=absval) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
		};
		$m['randfloat']['__name__'] = 'randfloat';

		$m['randfloat']['__bind_type__'] = 0;
		$m['randfloat']['__args__'] = [null,null,['absval']];
		$m['distsq'] = function(x1, y1, x2, y2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $mul7,$add1,$sub8,$sub10,$add2,$sub9,$sub3,$mul8,$mul6,$mul5,$sub7,$sub6,$sub5,$sub4;
			return (typeof ($add1=(typeof ($mul5=(typeof ($sub3=x1)==typeof ($sub4=x2) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))==typeof ($mul6=(typeof ($sub5=x1)==typeof ($sub6=x2) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($add2=(typeof ($mul7=(typeof ($sub7=y1)==typeof ($sub8=y2) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)))==typeof ($mul8=(typeof ($sub9=y1)==typeof ($sub10=y2) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		};
		$m['distsq']['__name__'] = 'distsq';

		$m['distsq']['__bind_type__'] = 0;
		$m['distsq']['__args__'] = [null,null,['x1'],['y1'],['x2'],['y2']];
		$m['Asteroid'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Space';
			$cls_definition['__md5__'] = '76798de7d223a30f6f3b2d2c26d372ff';
			$method = $pyjs__bind_method2('__init__', function(canvas, x, y, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					x = arguments[2];
					y = arguments[3];
					size = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '76798de7d223a30f6f3b2d2c26d372ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][4][1];
				if (typeof y == 'undefined') y=arguments['callee']['__args__'][5][1];
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][6][1];
				var $2,$div10,$div11,$div12,$1,$or1,$mul13,$or2,$sub13,$sub12,$sub11,$sub14,$bool2,$bool3,$div8,$div9,$mul9,$div3,$div6,$div7,$div4,$div5,$mul17,$mul16,$mul15,$mul14,$cmp1,$mul12,$mul11,$mul10,$cmp2,$mul18,$bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', canvas) : $p['setattr'](self, 'canvas', canvas); 
				if ((($bool2=((($bool1=$or1=$p['op_is'](x, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_is'](y, null))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($div3=$p['getattr'](canvas, 'width'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))) : $p['setattr'](self, 'x', (typeof ($div3=$p['getattr'](canvas, 'width'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($div5=$p['getattr'](canvas, 'height'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))) : $p['setattr'](self, 'y', (typeof ($div5=$p['getattr'](canvas, 'height'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))); 
					while ((($bool3=((($cmp1=$m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), (typeof ($div7=$p['getattr'](canvas, 'width'))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)), (typeof ($div9=$p['getattr'](canvas, 'height'))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10))))===($cmp2=(typeof ($mul9=$constant_int_180)==typeof ($mul10=$constant_int_180) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $m['random']['randint']($constant_int_0, $p['getattr'](canvas, 'width'))) : $p['setattr'](self, 'x', $m['random']['randint']($constant_int_0, $p['getattr'](canvas, 'width'))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $m['random']['randint']($constant_int_0, $p['getattr'](canvas, 'height'))) : $p['setattr'](self, 'y', $m['random']['randint']($constant_int_0, $p['getattr'](canvas, 'height'))); 
					}
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $m['randfloat']($m['MAX_ASTEROID_SPEED'])) : $p['setattr'](self, 'dx', $m['randfloat']($m['MAX_ASTEROID_SPEED'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $m['randfloat']($m['MAX_ASTEROID_SPEED'])) : $p['setattr'](self, 'dy', $m['randfloat']($m['MAX_ASTEROID_SPEED'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($sub11=(typeof ($mul13=$m['random']['random']())==typeof ($mul14=(typeof ($mul11=$constant_int_2)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($sub12=$p['getattr']($m['math'], 'pi')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'rot', (typeof ($sub11=(typeof ($mul13=$m['random']['random']())==typeof ($mul14=(typeof ($mul11=$constant_int_2)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($sub12=$p['getattr']($m['math'], 'pi')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rotspeed', (typeof ($sub13=(typeof ($mul15=$m['random']['random']())==typeof ($mul16=0.1) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))==typeof ($sub14=0.05) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))) : $p['setattr'](self, 'rotspeed', (typeof ($sub13=(typeof ($mul15=$m['random']['random']())==typeof ($mul16=0.1) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))==typeof ($sub14=0.05) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('size', size) : $p['setattr'](self, 'size', size); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('radius', (typeof ($1=$m['ASTEROID_SIZES'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$p['getattr'](self, 'size')]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($p['getattr'](self, 'size')))) : $p['setattr'](self, 'radius', (typeof ($1=$m['ASTEROID_SIZES'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$p['getattr'](self, 'size')]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($p['getattr'](self, 'size')))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', (typeof ($mul17=(typeof ($div11=$p['getattr'](self, 'radius'))==typeof ($div12=$m['ASTEROID_IMAGE_SIZE']) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))==typeof ($mul18=$constant_int_2) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) : $p['setattr'](self, 'scale', (typeof ($mul17=(typeof ($div11=$p['getattr'](self, 'radius'))==typeof ($div12=$m['ASTEROID_IMAGE_SIZE']) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))==typeof ($mul18=$constant_int_2) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))); 
				return null;
			}
	, 1, [null,null,['self'],['canvas'],['x', null],['y', null],['size', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('move', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '76798de7d223a30f6f3b2d2c26d372ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp13,$bool10,$bool11,$bool5,$and8,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$cmp15,$cmp14,$cmp17,$cmp16,$bool6,$cmp10,$bool4,$cmp12,$bool8,$bool9,$cmp18,$cmp5,$cmp4,$cmp7,$cmp6,$cmp3,$cmp9,$cmp8,$add3,$add6,$add7,$add4,$add5,$cmp11,$add8,$bool7;
				if ((($bool5=((($bool4=$and1=((($cmp3=$p['getattr'](self, 'dx'))===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp5=$p['getattr'](self, 'x'))===($cmp6=$p['getattr']($p['getattr'](self, 'canvas'), 'width'))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($usub1=$p['getattr'](self, 'dx'))=='number'?
						-$usub1:
						$p['op_usub']($usub1))) : $p['setattr'](self, 'dx', (typeof ($usub1=$p['getattr'](self, 'dx'))=='number'?
						-$usub1:
						$p['op_usub']($usub1))); 
				}
				else if ((($bool7=((($bool6=$and3=((($cmp7=$p['getattr'](self, 'dx'))===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6['__nonzero__']=='function'?
							$bool6['__nonzero__']() :
							(typeof $bool6['__len__']=='function'?
								($bool6['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp9=$p['getattr'](self, 'x'))===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1):$and3)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($usub2=$p['getattr'](self, 'dx'))=='number'?
						-$usub2:
						$p['op_usub']($usub2))) : $p['setattr'](self, 'dx', (typeof ($usub2=$p['getattr'](self, 'dx'))=='number'?
						-$usub2:
						$p['op_usub']($usub2))); 
				}
				if ((($bool9=((($bool8=$and5=((($cmp11=$p['getattr'](self, 'dy'))===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp13=$p['getattr'](self, 'y'))===($cmp14=$p['getattr']($p['getattr'](self, 'canvas'), 'height'))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))))|1) == 1):$and5)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($usub3=$p['getattr'](self, 'dy'))=='number'?
						-$usub3:
						$p['op_usub']($usub3))) : $p['setattr'](self, 'dy', (typeof ($usub3=$p['getattr'](self, 'dy'))=='number'?
						-$usub3:
						$p['op_usub']($usub3))); 
				}
				else if ((($bool11=((($bool10=$and7=((($cmp15=$p['getattr'](self, 'dy'))===($cmp16=$constant_int_0)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp17=$p['getattr'](self, 'y'))===($cmp18=$constant_int_0)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) < 1):$and7)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($usub4=$p['getattr'](self, 'dy'))=='number'?
						-$usub4:
						$p['op_usub']($usub4))) : $p['setattr'](self, 'dy', (typeof ($usub4=$p['getattr'](self, 'dy'))=='number'?
						-$usub4:
						$p['op_usub']($usub4))); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](self, 'dx')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) : $p['setattr'](self, 'x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](self, 'dx')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($add5=$p['getattr'](self, 'y'))==typeof ($add6=$p['getattr'](self, 'dy')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))) : $p['setattr'](self, 'y', (typeof ($add5=$p['getattr'](self, 'y'))==typeof ($add6=$p['getattr'](self, 'dy')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($add7=$p['getattr'](self, 'rot'))==typeof ($add8=$p['getattr'](self, 'rotspeed')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))) : $p['setattr'](self, 'rot', (typeof ($add7=$p['getattr'](self, 'rot'))==typeof ($add8=$p['getattr'](self, 'rotspeed')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
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
					if (self.prototype['__md5__'] !== '76798de7d223a30f6f3b2d2c26d372ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div14,$div15,ctx,$div13,$div16;
				ctx = $p['getattr'](self, 'canvas');
				ctx['saveContext']();
				ctx['translate']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'));
				ctx['rotate']($p['getattr'](self, 'rot'));
				ctx['scale']($p['getattr'](self, 'scale'), $p['getattr'](self, 'scale'));
				ctx['drawImage']($p['getattr']($p['getattr'](self, 'canvas'), 'asteroid'), (typeof ($usub5=(typeof ($div13=$m['ASTEROID_IMAGE_SIZE'])==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)))=='number'?
					-$usub5:
					$p['op_usub']($usub5)), (typeof ($usub6=(typeof ($div15=$m['ASTEROID_IMAGE_SIZE'])==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)))=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				ctx['restoreContext']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Asteroid', $p['tuple']($bases), $data);
		})();
		$m['Shot'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Space';
			$cls_definition['__md5__'] = '1a2d09858bfa7a24c0dae99670c83530';
			$method = $pyjs__bind_method2('__init__', function(canvas, x, y, dx, dy, dir) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					x = arguments[2];
					y = arguments[3];
					dx = arguments[4];
					dy = arguments[5];
					dir = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1a2d09858bfa7a24c0dae99670c83530') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', canvas) : $p['setattr'](self, 'canvas', canvas); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', dx) : $p['setattr'](self, 'dx', dx); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', dy) : $p['setattr'](self, 'dy', dy); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dir', dir) : $p['setattr'](self, 'dir', dir); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lifespan', $m['SHOT_LIFESPAN']) : $p['setattr'](self, 'lifespan', $m['SHOT_LIFESPAN']); 
				return null;
			}
	, 1, [null,null,['self'],['canvas'],['x'],['y'],['dx'],['dy'],['dir']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('move', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1a2d09858bfa7a24c0dae99670c83530') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13,$iter1_iter,$cmp20,$cmp21,$cmp22,$iter1_array,$mul24,$mul22,$mul23,$mul20,$mul21,$sub18,$iter1_nextval,$sub17,$sub16,$sub15,$add14,$add10,$add11,$add12,$add13,$cmp19,a,$iter1_type,$mul19,$iter1_idx,$add9;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lifespan', (typeof ($sub15=$p['getattr'](self, 'lifespan'))==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))) : $p['setattr'](self, 'lifespan', (typeof ($sub15=$p['getattr'](self, 'lifespan'))==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))); 
				if ((($bool12=((($cmp19=$p['getattr'](self, 'lifespan'))===($cmp20=$constant_int_0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) < 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					return false;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add11=(typeof ($add9=$p['getattr'](self, 'x'))==typeof ($add10=$p['getattr'](self, 'dx')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=(typeof ($mul19=$m['SHOT_SPEED'])==typeof ($mul20=$m['math']['sin']($p['getattr'](self, 'dir'))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))) : $p['setattr'](self, 'x', (typeof ($add11=(typeof ($add9=$p['getattr'](self, 'x'))==typeof ($add10=$p['getattr'](self, 'dx')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=(typeof ($mul19=$m['SHOT_SPEED'])==typeof ($mul20=$m['math']['sin']($p['getattr'](self, 'dir'))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($sub17=(typeof ($add13=$p['getattr'](self, 'y'))==typeof ($add14=$p['getattr'](self, 'dy')) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($sub18=(typeof ($mul21=$m['SHOT_SPEED'])==typeof ($mul22=$m['math']['cos']($p['getattr'](self, 'dir'))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))) : $p['setattr'](self, 'y', (typeof ($sub17=(typeof ($add13=$p['getattr'](self, 'y'))==typeof ($add14=$p['getattr'](self, 'dy')) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($sub18=(typeof ($mul21=$m['SHOT_SPEED'])==typeof ($mul22=$m['math']['cos']($p['getattr'](self, 'dir'))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))); 
				$iter1_iter = $p['getattr']($p['getattr'](self, 'canvas'), 'asteroids');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					a = $iter1_nextval;
					if ((($bool13=((($cmp21=$m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')))===($cmp22=(typeof ($mul23=$p['getattr'](a, 'radius'))==typeof ($mul24=$p['getattr'](a, 'radius')) && typeof $mul23=='number'?
						$mul23*$mul24:
						$p['op_mul']($mul23,$mul24)))?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						self['canvas']['destroyAsteroid'](a);
						return false;
					}
				}
				return true;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
			$method = $pyjs__bind_method2('draw', function(ctx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ctx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1a2d09858bfa7a24c0dae99670c83530') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub19,$sub21,$sub20;
				ctx['setFillStyle']($m['SHOT_COLOR']);
				ctx['fillRect']($p['int']((typeof ($sub19=$p['getattr'](self, 'x'))==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20))), $p['int']((typeof ($sub21=$p['getattr'](self, 'y'))==typeof ($sub22=$constant_int_1) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22))), $constant_int_3, $constant_int_3);
				return null;
			}
	, 1, [null,null,['self'],['ctx']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Shot', $p['tuple']($bases), $data);
		})();
		$m['GameCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Space';
			$cls_definition['__md5__'] = '8fa9a2cde5feb2b9d769efe10061fa15';
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var images,$assign1;
				$m['GWTCanvas']['__init__'](self, w, h);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', w) : $p['setattr'](self, 'width', w); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', h) : $p['setattr'](self, 'height', h); 
				$assign1 = false;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_up', $assign1) : $p['setattr'](self, 'key_up', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_down', $assign1) : $p['setattr'](self, 'key_down', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_left', $assign1) : $p['setattr'](self, 'key_left', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_right', $assign1) : $p['setattr'](self, 'key_right', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_fire', $assign1) : $p['setattr'](self, 'key_fire', $assign1); 
				images = $p['list'](['./images/Ship1.png', './images/Ship2.png', './images/Asteroid.png']);
				$m['loadImages'](images, self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', false) : $p['setattr'](self, 'run', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('num_asteroids', $m['NUM_ASTEROIDS']) : $p['setattr'](self, 'num_asteroids', $m['NUM_ASTEROIDS']); 
				self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
				self['onTimer']();
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $3,$8,$6,$7,$4,$5;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ship', (typeof ($3=imagesHandles)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))) : $p['setattr'](self, 'ship', (typeof ($3=imagesHandles)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ship_thrust', (typeof ($5=imagesHandles)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_1))) : $p['setattr'](self, 'ship_thrust', (typeof ($5=imagesHandles)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('asteroid', (typeof ($7=imagesHandles)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_2]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_2))) : $p['setattr'](self, 'asteroid', (typeof ($7=imagesHandles)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_2]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_2))); 
				self['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self['reset']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', true) : $p['setattr'](self, 'run', true); 
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
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
			$method = $pyjs__bind_method2('onTimer', function(t) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					t = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
				var $div18,$div17,$bool14,$bool15;
				$m['Timer']($p['int']((typeof ($div17=$constant_int_1000)==typeof ($div18=$m['FPS']) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18))), self);
				if ((($bool15=!(($bool14=$p['getattr'](self, 'run')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					return null;
				}
				self['advance']();
				self['draw']();
				return null;
				self['saveContext']();
				self['clear']();
				self['translate']($constant_int_30, $constant_int_30);
				self['setFillStyle']($m['Color']['Color']('#fff'));
				self['setStrokeStyle']($m['Color']['Color']('#fff'));
				self['beginPath']();
				self['moveTo']($constant_int_25, $constant_int_25);
				self['lineTo']($constant_int_105, $constant_int_25);
				self['lineTo']($constant_int_25, $constant_int_105);
				self['closePath']();
				self['fill']();
				self['beginPath']();
				self['moveTo']($constant_int_125, $constant_int_125);
				self['lineTo']($constant_int_125, $constant_int_45);
				self['lineTo']($constant_int_45, $constant_int_125);
				self['closePath']();
				self['stroke']();
				self['beginPath']();
				self['moveTo']($constant_int_265, $constant_int_265);
				self['lineTo']($constant_int_165, $constant_int_265);
				self['lineTo']($constant_int_265, $constant_int_165);
				self['lineTo']($constant_int_265, $constant_int_265);
				self['fillRect']($constant_int_25, $constant_int_165, $constant_int_100, $constant_int_100);
				self['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
				self['fillRect']($constant_int_45, $constant_int_185, $constant_int_60, $constant_int_60);
				self['strokeRect']($constant_int_50, $constant_int_190, $constant_int_50, $constant_int_50);
				self['rect']($constant_int_165, $constant_int_25, $constant_int_100, $constant_int_100);
				self['stroke']();
				self['restoreContext']();
				return null;
			}
	, 1, [null,null,['self'],['t', null]]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('followMouse', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div21,$sub23,$div22,$sub26,$div19,$sub24,$div20,$sub25,$bool16,$bool17;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($sub23=$p['getattr'](self, 'mouseX'))==typeof ($sub24=$p['getattr'](self, 'xx')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24))) : $p['setattr'](self, 'dx', (typeof ($sub23=$p['getattr'](self, 'mouseX'))==typeof ($sub24=$p['getattr'](self, 'xx')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24))); 
				if ((($bool16=!$p['op_eq']($p['getattr'](self, 'dx'), $constant_int_0)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($div19=$p['getattr'](self, 'dx'))==typeof ($div20=$m['math']['fabs']($p['getattr'](self, 'dx'))) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20))) : $p['setattr'](self, 'dx', (typeof ($div19=$p['getattr'](self, 'dx'))==typeof ($div20=$m['math']['fabs']($p['getattr'](self, 'dx'))) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20))); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($sub25=$p['getattr'](self, 'mouseY'))==typeof ($sub26=$p['getattr'](self, 'yy')) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26))) : $p['setattr'](self, 'dy', (typeof ($sub25=$p['getattr'](self, 'mouseY'))==typeof ($sub26=$p['getattr'](self, 'yy')) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26))); 
				if ((($bool17=!$p['op_eq']($p['getattr'](self, 'dy'), $constant_int_0)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($div21=$p['getattr'](self, 'dy'))==typeof ($div22=$m['math']['fabs']($p['getattr'](self, 'dy'))) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22))) : $p['setattr'](self, 'dy', (typeof ($div21=$p['getattr'](self, 'dy'))==typeof ($div22=$m['math']['fabs']($p['getattr'](self, 'dy'))) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22))); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['followMouse'] = $method;
			$method = $pyjs__bind_method2('keyboardMotion', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$sub27,$and9,$sub28,$sub29,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,$add20,$bool23,$bool25,$bool24,$bool21,$bool20,$mul28,$bool22,$mul26,$mul27,$mul25,$sub31,$sub30,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub38,$mul29,$add15,$add16,$add17,$add18,$add19,$cmp30,$and10,$mul33,$mul35,$mul34,$mul36,$mul31,$mul30,dir,$mul32;
				if ((($bool18=$p['getattr'](self, 'key_left')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18['__nonzero__']=='function'?
								$bool18['__nonzero__']() :
								(typeof $bool18['__len__']=='function'?
									($bool18['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($sub27=$p['getattr'](self, 'rot'))==typeof ($sub28=$m['ROTATE_SPEED']) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))) : $p['setattr'](self, 'rot', (typeof ($sub27=$p['getattr'](self, 'rot'))==typeof ($sub28=$m['ROTATE_SPEED']) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))); 
				}
				if ((($bool19=$p['getattr'](self, 'key_right')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($add15=$p['getattr'](self, 'rot'))==typeof ($add16=$m['ROTATE_SPEED']) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))) : $p['setattr'](self, 'rot', (typeof ($add15=$p['getattr'](self, 'rot'))==typeof ($add16=$m['ROTATE_SPEED']) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))); 
				}
				if ((($bool20=((($cmp23=$p['getattr'](self, 'rot'))===($cmp24=(typeof ($sub29=$constant_int_0)==typeof ($sub30=$p['getattr']($m['math'], 'pi')) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($add17=$p['getattr'](self, 'rot'))==typeof ($add18=(typeof ($mul25=$constant_int_2)==typeof ($mul26=$p['getattr']($m['math'], 'pi')) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))) : $p['setattr'](self, 'rot', (typeof ($add17=$p['getattr'](self, 'rot'))==typeof ($add18=(typeof ($mul25=$constant_int_2)==typeof ($mul26=$p['getattr']($m['math'], 'pi')) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))); 
				}
				else if ((($bool21=((($cmp25=$p['getattr'](self, 'rot'))===($cmp26=$p['getattr']($m['math'], 'pi'))?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($sub31=$p['getattr'](self, 'rot'))==typeof ($sub32=(typeof ($mul27=$constant_int_2)==typeof ($mul28=$p['getattr']($m['math'], 'pi')) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32))) : $p['setattr'](self, 'rot', (typeof ($sub31=$p['getattr'](self, 'rot'))==typeof ($sub32=(typeof ($mul27=$constant_int_2)==typeof ($mul28=$p['getattr']($m['math'], 'pi')) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32))); 
				}
				if ((($bool22=$p['getattr'](self, 'key_up')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($add19=$p['getattr'](self, 'dx'))==typeof ($add20=(typeof ($mul29=$m['THRUST'])==typeof ($mul30=$m['math']['sin']($p['getattr'](self, 'rot'))) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))) : $p['setattr'](self, 'dx', (typeof ($add19=$p['getattr'](self, 'dx'))==typeof ($add20=(typeof ($mul29=$m['THRUST'])==typeof ($mul30=$m['math']['sin']($p['getattr'](self, 'rot'))) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($sub33=$p['getattr'](self, 'dy'))==typeof ($sub34=(typeof ($mul31=$m['THRUST'])==typeof ($mul32=$m['math']['cos']($p['getattr'](self, 'rot'))) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32))) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))) : $p['setattr'](self, 'dy', (typeof ($sub33=$p['getattr'](self, 'dy'))==typeof ($sub34=(typeof ($mul31=$m['THRUST'])==typeof ($mul32=$m['math']['cos']($p['getattr'](self, 'rot'))) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32))) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))); 
				}
				else {
					if ((($bool24=((($bool23=$and9=((($cmp27=$m['math']['fabs']($p['getattr'](self, 'dx')))===($cmp28=0.001)?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp29=$m['math']['fabs']($p['getattr'](self, 'dy')))===($cmp30=0.001)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) == -1):$and9)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
							false :
							(typeof $bool24=='object'?
								(typeof $bool24['__nonzero__']=='function'?
									$bool24['__nonzero__']() :
									(typeof $bool24['__len__']=='function'?
										($bool24['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $constant_int_0) : $p['setattr'](self, 'dx', $constant_int_0); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $constant_int_0) : $p['setattr'](self, 'dy', $constant_int_0); 
					}
					else {
						dir = $m['math']['atan2']($p['getattr'](self, 'dx'), $p['getattr'](self, 'dy'));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($sub35=$p['getattr'](self, 'dx'))==typeof ($sub36=(typeof ($mul33=$m['FRICTION'])==typeof ($mul34=$m['math']['sin'](dir)) && typeof $mul33=='number'?
							$mul33*$mul34:
							$p['op_mul']($mul33,$mul34))) && (typeof $sub35=='number'||typeof $sub35=='string')?
							$sub35-$sub36:
							$p['op_sub']($sub35,$sub36))) : $p['setattr'](self, 'dx', (typeof ($sub35=$p['getattr'](self, 'dx'))==typeof ($sub36=(typeof ($mul33=$m['FRICTION'])==typeof ($mul34=$m['math']['sin'](dir)) && typeof $mul33=='number'?
							$mul33*$mul34:
							$p['op_mul']($mul33,$mul34))) && (typeof $sub35=='number'||typeof $sub35=='string')?
							$sub35-$sub36:
							$p['op_sub']($sub35,$sub36))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($sub37=$p['getattr'](self, 'dy'))==typeof ($sub38=(typeof ($mul35=$m['FRICTION'])==typeof ($mul36=$m['math']['cos'](dir)) && typeof $mul35=='number'?
							$mul35*$mul36:
							$p['op_mul']($mul35,$mul36))) && (typeof $sub37=='number'||typeof $sub37=='string')?
							$sub37-$sub38:
							$p['op_sub']($sub37,$sub38))) : $p['setattr'](self, 'dy', (typeof ($sub37=$p['getattr'](self, 'dy'))==typeof ($sub38=(typeof ($mul35=$m['FRICTION'])==typeof ($mul36=$m['math']['cos'](dir)) && typeof $mul35=='number'?
							$mul35*$mul36:
							$p['op_mul']($mul35,$mul36))) && (typeof $sub37=='number'||typeof $sub37=='string')?
							$sub37-$sub38:
							$p['op_sub']($sub37,$sub38))); 
					}
				}
				if ((($bool25=$p['getattr'](self, 'key_fire')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['checkAddShot']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['keyboardMotion'] = $method;
			$method = $pyjs__bind_method2('setMotion', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['keyboardMotion']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setMotion'] = $method;
			$method = $pyjs__bind_method2('advance', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp39,$iter3_type,$cmp47,$cmp42,$cmp48,$and15,$cmp43,$sub40,$sub41,$sub42,$cmp41,$sub43,$cmp40,$cmp44,$add23,$add28,$iter3_idx,$iter2_iter,$add21,$sub44,$add22,$add25,$add24,$add27,$add26,$bool27,$bool26,$iter3_iter,$bool36,$cmp45,$bool29,$bool28,$iter2_type,$sub39,$bool30,$cmp38,$and18,$and12,$and13,$iter2_idx,$and11,$and16,$and17,$and14,$iter3_array,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,$cmp32,$cmp31,a,$iter2_nextval,$bool32,$bool33,s,$bool31,$cmp46,$mul38,$bool34,$bool35,$mul37,$iter3_nextval,$iter2_array;
				$iter2_iter = $p['getattr'](self, 'asteroids');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					a = $iter2_nextval;
					a['move']();
					if ((($bool26=((($cmp31=$m['distsq']($p['getattr'](self, 'xx'), $p['getattr'](self, 'yy'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')))===($cmp32=(typeof ($mul37=$p['getattr'](a, 'radius'))==typeof ($mul38=$p['getattr'](a, 'radius')) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)))?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26['__nonzero__']=='function'?
									$bool26['__nonzero__']() :
									(typeof $bool26['__len__']=='function'?
										($bool26['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['destroyShip']();
					}
				}
				$iter3_iter = $p['getattr'](self, 'shots');
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					s = $iter3_nextval;
					if ((($bool28=!(($bool27=s['move']()) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
							false :
							(typeof $bool28=='object'?
								(typeof $bool28['__nonzero__']=='function'?
									$bool28['__nonzero__']() :
									(typeof $bool28['__len__']=='function'?
										($bool28['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['removeShot'](s);
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shot_delay', (typeof ($sub39=$p['getattr'](self, 'shot_delay'))==typeof ($sub40=$constant_int_1) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40))) : $p['setattr'](self, 'shot_delay', (typeof ($sub39=$p['getattr'](self, 'shot_delay'))==typeof ($sub40=$constant_int_1) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40))); 
				self['setMotion']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('xx', (typeof ($add21=$p['getattr'](self, 'xx'))==typeof ($add22=$p['getattr'](self, 'dx')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))) : $p['setattr'](self, 'xx', (typeof ($add21=$p['getattr'](self, 'xx'))==typeof ($add22=$p['getattr'](self, 'dx')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yy', (typeof ($add23=$p['getattr'](self, 'yy'))==typeof ($add24=$p['getattr'](self, 'dy')) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24))) : $p['setattr'](self, 'yy', (typeof ($add23=$p['getattr'](self, 'yy'))==typeof ($add24=$p['getattr'](self, 'dy')) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24))); 
				if ((($bool30=((($bool29=$and11=((($cmp33=$p['getattr'](self, 'dx'))===($cmp34=$constant_int_0)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29['__nonzero__']=='function'?
							$bool29['__nonzero__']() :
							(typeof $bool29['__len__']=='function'?
								($bool29['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp35=$p['getattr'](self, 'xx'))===($cmp36=$p['getattr'](self, 'width'))?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))))|1) == 1):$and11)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('xx', (typeof ($sub41=$p['getattr'](self, 'xx'))==typeof ($sub42=$p['getattr'](self, 'width')) && (typeof $sub41=='number'||typeof $sub41=='string')?
						$sub41-$sub42:
						$p['op_sub']($sub41,$sub42))) : $p['setattr'](self, 'xx', (typeof ($sub41=$p['getattr'](self, 'xx'))==typeof ($sub42=$p['getattr'](self, 'width')) && (typeof $sub41=='number'||typeof $sub41=='string')?
						$sub41-$sub42:
						$p['op_sub']($sub41,$sub42))); 
				}
				else if ((($bool32=((($bool31=$and13=((($cmp37=$p['getattr'](self, 'dx'))===($cmp38=$constant_int_0)?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31['__nonzero__']=='function'?
							$bool31['__nonzero__']() :
							(typeof $bool31['__len__']=='function'?
								($bool31['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp39=$p['getattr'](self, 'xx'))===($cmp40=$constant_int_0)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == -1):$and13)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('xx', (typeof ($add25=$p['getattr'](self, 'xx'))==typeof ($add26=$p['getattr'](self, 'width')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26))) : $p['setattr'](self, 'xx', (typeof ($add25=$p['getattr'](self, 'xx'))==typeof ($add26=$p['getattr'](self, 'width')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26))); 
				}
				if ((($bool34=((($bool33=$and15=((($cmp41=$p['getattr'](self, 'yy'))===($cmp42=$constant_int_0)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33['__nonzero__']=='function'?
							$bool33['__nonzero__']() :
							(typeof $bool33['__len__']=='function'?
								($bool33['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp43=$p['getattr'](self, 'yy'))===($cmp44=$p['getattr'](self, 'height'))?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))))|1) == 1):$and15)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yy', (typeof ($sub43=$p['getattr'](self, 'yy'))==typeof ($sub44=$p['getattr'](self, 'height')) && (typeof $sub43=='number'||typeof $sub43=='string')?
						$sub43-$sub44:
						$p['op_sub']($sub43,$sub44))) : $p['setattr'](self, 'yy', (typeof ($sub43=$p['getattr'](self, 'yy'))==typeof ($sub44=$p['getattr'](self, 'height')) && (typeof $sub43=='number'||typeof $sub43=='string')?
						$sub43-$sub44:
						$p['op_sub']($sub43,$sub44))); 
				}
				else if ((($bool36=((($bool35=$and17=((($cmp45=$p['getattr'](self, 'dy'))===($cmp46=$constant_int_0)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp47=$p['getattr'](self, 'yy'))===($cmp48=$constant_int_0)?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == -1):$and17)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yy', (typeof ($add27=$p['getattr'](self, 'yy'))==typeof ($add28=$p['getattr'](self, 'height')) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28))) : $p['setattr'](self, 'yy', (typeof ($add27=$p['getattr'](self, 'yy'))==typeof ($add28=$p['getattr'](self, 'height')) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28))); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['advance'] = $method;
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool41,$bool40,$bool37,$bool38,$bool39;
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				if ((($bool37=$p['op_eq'](k, $p['getattr']($m['KeyboardListener'], 'KEY_UP'))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37['__nonzero__']=='function'?
								$bool37['__nonzero__']() :
								(typeof $bool37['__len__']=='function'?
									($bool37['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_up', set) : $p['setattr'](self, 'key_up', set); 
				}
				else if ((($bool38=$p['op_eq'](k, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN'))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_down', set) : $p['setattr'](self, 'key_down', set); 
				}
				else if ((($bool39=$p['op_eq'](k, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT'))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_left', set) : $p['setattr'](self, 'key_left', set); 
				}
				else if ((($bool40=$p['op_eq'](k, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT'))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
						false :
						(typeof $bool40=='object'?
							(typeof $bool40['__nonzero__']=='function'?
								$bool40['__nonzero__']() :
								(typeof $bool40['__len__']=='function'?
									($bool40['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_right', set) : $p['setattr'](self, 'key_right', set); 
				}
				else if ((($bool41=$p['op_eq'](k, $constant_int_32)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_fire', set) : $p['setattr'](self, 'key_fire', set); 
				}
				return null;
			}
	, 1, [null,null,['self'],['k'],['set']]);
			$cls_definition['setKey'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
			$cls_definition['onKeyPress'] = $method;
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
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
			$method = $pyjs__bind_method2('checkAddShot', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool43,$bool42,s,$cmp49,$cmp50;
				if ((($bool42=((($cmp49=$p['getattr'](self, 'shot_delay'))===($cmp50=$constant_int_0)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == 1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42['__nonzero__']=='function'?
								$bool42['__nonzero__']() :
								(typeof $bool42['__len__']=='function'?
									($bool42['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool43=$p['getattr'](self, 'key_fire')) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43['__nonzero__']=='function'?
								$bool43['__nonzero__']() :
								(typeof $bool43['__len__']=='function'?
									($bool43['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = $m['Shot'](self, $p['getattr'](self, 'xx'), $p['getattr'](self, 'yy'), $p['getattr'](self, 'dx'), $p['getattr'](self, 'dy'), $p['getattr'](self, 'rot'));
					self['shots']['append'](s);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shot_delay', $m['SHOT_DELAY']) : $p['setattr'](self, 'shot_delay', $m['SHOT_DELAY']); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['checkAddShot'] = $method;
			$method = $pyjs__bind_method2('destroyAsteroid', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_type,$iter4_iter,$sub45,$sub46,$add29,$bool45,$bool44,$cmp51,$cmp53,$cmp52,$cmp54,i,$iter4_nextval,$add30,$add31,$iter4_idx,$add32,$len2,$len1,$iter4_array;
				self['asteroids']['remove'](a);
				if ((($bool44=((($cmp51=$p['getattr'](a, 'size'))===($cmp52=(typeof ($sub45=(($len1=$m['ASTEROID_SIZES']) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))))==typeof ($sub46=$constant_int_1) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46)))?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter4_iter = $p['range']($constant_int_2);
					if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter['__iter__']();
						$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						i = $iter4_nextval;
						self['asteroids']['append']($m['Asteroid'](self, $p['getattr'](a, 'x'), $p['getattr'](a, 'y'), (typeof ($add29=$p['getattr'](a, 'size'))==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30))));
					}
				}
				if ((($bool45=((($cmp53=(($len2=$p['getattr'](self, 'asteroids')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))))===($cmp54=$constant_int_0)?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) < 1)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45['__nonzero__']=='function'?
								$bool45['__nonzero__']() :
								(typeof $bool45['__len__']=='function'?
									($bool45['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('num_asteroids', (typeof ($add31=$p['getattr'](self, 'num_asteroids'))==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32))) : $p['setattr'](self, 'num_asteroids', (typeof ($add31=$p['getattr'](self, 'num_asteroids'))==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32))); 
					self['reset']();
				}
				return null;
			}
	, 1, [null,null,['self'],['a']]);
			$cls_definition['destroyAsteroid'] = $method;
			$method = $pyjs__bind_method2('removeShot', function(s) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool46;
				if ((($bool46=$p['getattr'](self, 'shots')['__contains__'](s)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['shots']['remove'](s);
				}
				return null;
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['removeShot'] = $method;
			$method = $pyjs__bind_method2('destroyShip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('num_asteroids', $m['NUM_ASTEROIDS']) : $p['setattr'](self, 'num_asteroids', $m['NUM_ASTEROIDS']); 
				self['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['destroyShip'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,a,$div23,$div25,$div24,$div26,$iter5_idx,$iter5_iter,$iter5_array,$iter5_type;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('asteroids', $p['list']([])) : $p['setattr'](self, 'asteroids', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shots', $p['list']([])) : $p['setattr'](self, 'shots', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shot_delay', $constant_int_0) : $p['setattr'](self, 'shot_delay', $constant_int_0); 
				$iter5_iter = $p['range']($p['getattr'](self, 'num_asteroids'));
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					a = $iter5_nextval;
					self['asteroids']['append']($m['Asteroid'](self));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('xx', (typeof ($div23=$p['getattr'](self, 'width'))==typeof ($div24=$constant_int_2) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))) : $p['setattr'](self, 'xx', (typeof ($div23=$p['getattr'](self, 'width'))==typeof ($div24=$constant_int_2) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yy', (typeof ($div25=$p['getattr'](self, 'height'))==typeof ($div26=$constant_int_2) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26))) : $p['setattr'](self, 'yy', (typeof ($div25=$p['getattr'](self, 'height'))==typeof ($div26=$constant_int_2) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $constant_int_0) : $p['setattr'](self, 'dx', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $constant_int_0) : $p['setattr'](self, 'dy', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', $constant_int_0) : $p['setattr'](self, 'rot', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', $constant_int_0) : $p['setattr'](self, 'speed', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
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
					if (self.prototype['__md5__'] !== '8fa9a2cde5feb2b9d769efe10061fa15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$bool47,$iter7_nextval,$iter6_idx,$iter6_type,$iter7_iter,$iter7_array,s,img,$iter6_array,$iter7_idx,$iter6_iter,$iter7_type,$iter6_nextval;
				self['setFillStyle']($m['Color']['Color']('#000'));
				self['fillRect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$iter6_iter = $p['getattr'](self, 'asteroids');
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					a = $iter6_nextval;
					a['draw']();
				}
				$iter7_iter = $p['getattr'](self, 'shots');
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					s = $iter7_nextval;
					s['draw'](self);
				}
				self['saveContext']();
				self['translate']($p['getattr'](self, 'xx'), $p['getattr'](self, 'yy'));
				self['rotate']($p['getattr'](self, 'rot'));
				if ((($bool47=$p['getattr'](self, 'key_up')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					img = $p['getattr'](self, 'ship_thrust');
				}
				else {
					img = $p['getattr'](self, 'ship');
				}
				self['drawImage'](img, (typeof ($usub7=$constant_int_15)=='number'?
					-$usub7:
					$p['op_usub']($usub7)), (typeof ($usub8=$constant_int_12)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
				self['restoreContext']();
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
			$cls_definition['__md5__'] = '37d1f3ffb16ce68ff9f2d967f5c99265';
			$method = $pyjs__bind_method2('__init__', function(Parent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '37d1f3ffb16ce68ff9f2d967f5c99265') {
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
					if (self.prototype['__md5__'] !== '37d1f3ffb16ce68ff9f2d967f5c99265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('focussed', !(($bool48=$p['getattr'](self, 'focussed')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) : $p['setattr'](self, 'focussed', !(($bool48=$p['getattr'](self, 'focussed')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
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
		if ((($bool49=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49['__nonzero__']=='function'?
						$bool49['__nonzero__']() :
						(typeof $bool49['__len__']=='function'?
							($bool49['__len__']()>0 ?
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
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.Canvas.Color', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'math', 'pygwt', 'random']
*/
