/* start module: ParticleDemo */
$pyjs.loaded_modules['ParticleDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ParticleDemo'].__was_initialized__) return $pyjs.loaded_modules['ParticleDemo'];
	var $m = $pyjs.loaded_modules["ParticleDemo"];
	$m.__repr__ = function() { return "<module: ParticleDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ParticleDemo';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_217728 = new $p['int'](217728);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_84589 = new $p['int'](84589);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_255 = new $p['int'](255);
		var $constant_int_45989 = new $p['int'](45989);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', null, null, false);
		$m['time'] = $p['___import___']('time', null);
		$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
		$m['ig'] = $constant_int_0;
		$m['rnd'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var a,c,m,$add2,$add1,$mod1,$mod2,$div2,$div1,$mul2,$mul1;
			m = $constant_int_217728;
			a = $constant_int_84589;
			c = $constant_int_45989;
			$m['ig'] = (typeof ($mod1=(typeof ($add1=(typeof ($mul1=a)==typeof ($mul2=$m['ig']) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($add2=c) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($mod2=m) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			return (typeof ($div1=$p['float']($m['ig']))==typeof ($div2=m) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
		};
		$m['rnd'].__name__ = 'rnd';

		$m['rnd'].__bind_type__ = 0;
		$m['rnd'].__args__ = [null,null];
		$m['Particle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ParticleDemo';
			$cls_definition.__md5__ = '7367cf23ef0fe4e117d38b62c9866cc8';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7367cf23ef0fe4e117d38b62c9866cc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul10,$sub2,$sub3,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$sub1,$sub4;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chart', chart) : $p['setattr'](self, 'chart', chart); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('kill', false) : $p['setattr'](self, 'kill', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gravity', 0.1) : $p['setattr'](self, 'gravity', 0.1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xDampening', 0.9) : $p['setattr'](self, 'xDampening', 0.9); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yDampening', 0.9) : $p['setattr'](self, 'yDampening', 0.9); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xPos', (typeof ($mul3=$m['rnd']())==typeof ($mul4=$p['getattr']($p['getattr'](self, 'chart'), 'width')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'xPos', (typeof ($mul3=$m['rnd']())==typeof ($mul4=$p['getattr']($p['getattr'](self, 'chart'), 'width')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yPos', (typeof ($mul5=$m['rnd']())==typeof ($mul6=$p['getattr']($p['getattr'](self, 'chart'), 'height')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) : $p['setattr'](self, 'yPos', (typeof ($mul5=$m['rnd']())==typeof ($mul6=$p['getattr']($p['getattr'](self, 'chart'), 'height')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xVel', (typeof ($sub1=(typeof ($mul7=$m['rnd']())==typeof ($mul8=$constant_int_5) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($sub2=2.5) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'xVel', (typeof ($sub1=(typeof ($mul7=$m['rnd']())==typeof ($mul8=$constant_int_5) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($sub2=2.5) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yVel', (typeof ($sub3=(typeof ($mul9=$m['rnd']())==typeof ($mul10=$constant_int_5) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($sub4=2.5) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))) : $p['setattr'](self, 'yVel', (typeof ($sub3=(typeof ($mul9=$m['rnd']())==typeof ($mul10=$constant_int_5) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($sub4=2.5) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))); 
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7367cf23ef0fe4e117d38b62c9866cc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$cmp12,$add10,$mul14,$sub9,$sub8,$sub7,$sub6,$sub5,$or4,$or1,$or3,$or2,$and1,$and2,$sub10,$bool2,$bool3,$bool1,$cmp11,$cmp10,$bool4,$bool5,$mul13,$mul12,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$mul11,$cmp2,$cmp9,$cmp8,$add3,$add6,$add7,$add4,$add5,$bool6,$add8,$add9,$add11;
				if ((($bool2=((($bool1=$or1=((($cmp1=$p['getattr'](self, 'xPos'))===($cmp2=$p['getattr']($p['getattr'](self, 'chart'), 'width'))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($cmp3=$p['getattr'](self, 'xPos'))===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xVel', (typeof ($usub1=$p['getattr'](self, 'xVel'))=='number'?
						-$usub1:
						$p['op_usub']($usub1))) : $p['setattr'](self, 'xVel', (typeof ($usub1=$p['getattr'](self, 'xVel'))=='number'?
						-$usub1:
						$p['op_usub']($usub1))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xPos', (typeof ($add3=$p['getattr'](self, 'xPos'))==typeof ($add4=$p['getattr'](self, 'xVel')) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))) : $p['setattr'](self, 'xPos', (typeof ($add3=$p['getattr'](self, 'xPos'))==typeof ($add4=$p['getattr'](self, 'xVel')) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xDampening', $p['max']((typeof ($sub5=$p['getattr'](self, 'xDampening'))==typeof ($sub6=0.1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)), $constant_int_0)) : $p['setattr'](self, 'xDampening', $p['max']((typeof ($sub5=$p['getattr'](self, 'xDampening'))==typeof ($sub6=0.1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)), $constant_int_0)); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xVel', (typeof ($mul11=$p['getattr'](self, 'xVel'))==typeof ($mul12=$p['getattr'](self, 'xDampening')) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) : $p['setattr'](self, 'xVel', (typeof ($mul11=$p['getattr'](self, 'xVel'))==typeof ($mul12=$p['getattr'](self, 'xDampening')) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))); 
				}
				if ((($bool4=((($bool3=$or3=((($cmp5=$p['getattr'](self, 'yPos'))===($cmp6=$p['getattr']($p['getattr'](self, 'chart'), 'height'))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($cmp7=$p['getattr'](self, 'yPos'))===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yVel', (typeof ($usub2=$p['getattr'](self, 'yVel'))=='number'?
						-$usub2:
						$p['op_usub']($usub2))) : $p['setattr'](self, 'yVel', (typeof ($usub2=$p['getattr'](self, 'yVel'))=='number'?
						-$usub2:
						$p['op_usub']($usub2))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yPos', (typeof ($add5=$p['getattr'](self, 'yPos'))==typeof ($add6=$p['getattr'](self, 'yVel')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))) : $p['setattr'](self, 'yPos', (typeof ($add5=$p['getattr'](self, 'yPos'))==typeof ($add6=$p['getattr'](self, 'yVel')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yDampening', $p['max']((typeof ($sub7=$p['getattr'](self, 'yDampening'))==typeof ($sub8=0.1) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)), $constant_int_0)) : $p['setattr'](self, 'yDampening', $p['max']((typeof ($sub7=$p['getattr'](self, 'yDampening'))==typeof ($sub8=0.1) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)), $constant_int_0)); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yVel', (typeof ($mul13=$p['getattr'](self, 'yVel'))==typeof ($mul14=$p['getattr'](self, 'yDampening')) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14))) : $p['setattr'](self, 'yVel', (typeof ($mul13=$p['getattr'](self, 'yVel'))==typeof ($mul14=$p['getattr'](self, 'yDampening')) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14))); 
					if ((($bool6=((($bool5=$and1=((($cmp9=$p['getattr'](self, 'yPos'))===($cmp10=(typeof ($sub9=$p['getattr']($p['getattr'](self, 'chart'), 'height'))==typeof ($sub10=$constant_int_4) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10)))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp11=$p['abs']($p['getattr'](self, 'yVel')))===($cmp12=0.1)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == -1):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yPos', $p['getattr']($p['getattr'](self, 'chart'), 'height')) : $p['setattr'](self, 'yPos', $p['getattr']($p['getattr'](self, 'chart'), 'height')); 
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xVel', $constant_int_0) : $p['setattr'](self, 'xVel', $constant_int_0); 
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gravity', $constant_int_0) : $p['setattr'](self, 'gravity', $constant_int_0); 
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('kill', true) : $p['setattr'](self, 'kill', true); 
					}
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xPos', (typeof ($add7=$p['getattr'](self, 'xPos'))==typeof ($add8=$p['getattr'](self, 'xVel')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))) : $p['setattr'](self, 'xPos', (typeof ($add7=$p['getattr'](self, 'xPos'))==typeof ($add8=$p['getattr'](self, 'xVel')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yPos', (typeof ($add9=$p['getattr'](self, 'yPos'))==typeof ($add10=$p['getattr'](self, 'yVel')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))) : $p['setattr'](self, 'yPos', (typeof ($add9=$p['getattr'](self, 'yPos'))==typeof ($add10=$p['getattr'](self, 'yVel')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yVel', (typeof ($add11=$p['getattr'](self, 'yVel'))==typeof ($add12=$p['getattr'](self, 'gravity')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))) : $p['setattr'](self, 'yVel', (typeof ($add11=$p['getattr'](self, 'yVel'))==typeof ($add12=$p['getattr'](self, 'gravity')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Particle', $p['tuple']($bases), $data);
		})();
		$m['ParticleDemoControls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ParticleDemo';
			$cls_definition.__md5__ = '3d7db90bc750dfc15852ca3449abd459';
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
					if (self.prototype.__md5__ !== '3d7db90bc750dfc15852ca3449abd459') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var layout;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('average', $constant_int_1) : $p['setattr'](self, 'average', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('iterations', $constant_int_1) : $p['setattr'](self, 'iterations', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('startTime', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) : $p['setattr'](self, 'startTime', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('refreshRateLabel', $m['Label']('')) : $p['setattr'](self, 'refreshRateLabel', $m['Label']('')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('averageLabel', $m['Label']('')) : $p['setattr'](self, 'averageLabel', $m['Label']('')); 
				layout = $m['VerticalPanel']();
				layout['add']($p['getattr'](self, 'refreshRateLabel'));
				layout['add']($p['getattr'](self, 'averageLabel'));
				$m['Composite']['__init__'](self, layout);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('doBenchmark', function(now) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					now = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d7db90bc750dfc15852ca3449abd459') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul16,$mul15,$add15,$add21,$sub12,$sub11,$add22,$add19,$add14,$cmp14,$add16,$add17,$bool7,$cmp13,$add13,$add20,$div3,$add18,$div4;
				if ((($bool7=((($cmp13=$p['getattr'](self, 'startTime'))===($cmp14=$constant_int_0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('startTime', now) : $p['setattr'](self, 'startTime', now); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('refreshRate', (typeof ($sub11=now)==typeof ($sub12=$p['getattr'](self, 'startTime')) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'refreshRate', (typeof ($sub11=now)==typeof ($sub12=$p['getattr'](self, 'startTime')) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('startTime', now) : $p['setattr'](self, 'startTime', now); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('average', (typeof ($div3=(typeof ($add13=(typeof ($mul15=$p['getattr'](self, 'average'))==typeof ($mul16=$p['getattr'](self, 'iterations')) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16)))==typeof ($add14=$p['getattr'](self, 'refreshRate')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($div4=(typeof ($add15=$p['getattr'](self, 'iterations'))==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))) : $p['setattr'](self, 'average', (typeof ($div3=(typeof ($add13=(typeof ($mul15=$p['getattr'](self, 'average'))==typeof ($mul16=$p['getattr'](self, 'iterations')) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16)))==typeof ($add14=$p['getattr'](self, 'refreshRate')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($div4=(typeof ($add15=$p['getattr'](self, 'iterations'))==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('iterations', (typeof ($add17=$p['getattr'](self, 'iterations'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))) : $p['setattr'](self, 'iterations', (typeof ($add17=$p['getattr'](self, 'iterations'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))); 
					self['refreshRateLabel']['setText']((typeof ($add19='Refresh Interval: ')==typeof ($add20=$p['str']((typeof refreshRate == "undefined"?$m.refreshRate:refreshRate))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)));
					self['averageLabel']['setText']((typeof ($add21='Average Interval: ')==typeof ($add22=$p['str']((typeof average == "undefined"?$m.average:average))) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)));
				}
				return null;
			}
	, 1, [null,null,['self'],['now']]);
			$cls_definition['doBenchmark'] = $method;
			$method = $pyjs__bind_method2('resetBenchmark', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d7db90bc750dfc15852ca3449abd459') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('average', $constant_int_1) : $p['setattr'](self, 'average', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('iterations', $constant_int_1) : $p['setattr'](self, 'iterations', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('startTime', (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))) : $p['setattr'](self, 'startTime', (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetBenchmark'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ParticleDemoControls', $p['tuple']($bases), $data);
		})();
		$m['ParticleDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ParticleDemo';
			$cls_definition.__md5__ = 'ffc1fee424560a4f589c427de78f9f2b';
			$method = $pyjs__bind_method2('__init__', function(theCanvas) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					theCanvas = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numParticles', $constant_int_20) : $p['setattr'](self, 'numParticles', $constant_int_20); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('particles', $p['list']([])) : $p['setattr'](self, 'particles', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('takeBenchmarks', false) : $p['setattr'](self, 'takeBenchmarks', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', $constant_int_400) : $p['setattr'](self, 'width', $constant_int_400); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', $constant_int_300) : $p['setattr'](self, 'height', $constant_int_300); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('canvas', theCanvas) : $p['setattr'](self, 'canvas', theCanvas); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('demoName', 'Particle Demo') : $p['setattr'](self, 'demoName', 'Particle Demo'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('run', false) : $p['setattr'](self, 'run', false); 
				return null;
			}
	, 1, [null,null,['self'],['theCanvas']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createControls', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('controls', $m['ParticleDemoControls']()) : $p['setattr'](self, 'controls', $m['ParticleDemoControls']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createControls'] = $method;
			$method = $pyjs__bind_method2('drawDemo', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$iter1_idx;
				self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('particles', $p['list']([])) : $p['setattr'](self, 'particles', $p['list']([])); 
				$iter1_iter = $p['range']($p['getattr'](self, 'numParticles'));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['particles']['append']($m['Particle'](self));
				}
				self['canvas']['saveContext']();
				self['canvas']['setLineWidth']($constant_int_2);
				self['canvas']['setStrokeStyle']($m['Color']($constant_int_255, $constant_int_0, $constant_int_0));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('run', true) : $p['setattr'](self, 'run', true); 
				$m['Timer']($constant_int_10, self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawDemo'] = $method;
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
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool9,$bool8;
				if ((($bool9=!(($bool8=$p['getattr'](self, 'run')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return null;
				}
				self['renderingLoop']();
				timer['schedule']($constant_int_10);
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('renderingLoop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool11,$iter2_iter,$iter2_type,$sub13,$sub16,$sub15,$sub14,$iter2_idx,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$iter2_nextval,$10,$11,$12,$13,i,$len1,$iter2_array;
				self['canvas']['clear']();
				$iter2_iter = $p['range']((($len1=$p['getattr'](self, 'particles')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					if ((($bool10=$p['getattr']((typeof ($1=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i)), 'kill')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						continue;
					}
					(typeof ($3=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(i))['update']();
					self['canvas']['beginPath']();
					self['canvas']['moveTo']($p['getattr']((typeof ($5=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(i)), 'xPos'), $p['getattr']((typeof ($7=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i)), 'yPos'));
					self['canvas']['lineTo']((typeof ($sub13=$p['getattr']((typeof ($9=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i)), 'xPos'))==typeof ($sub14=$p['getattr']((typeof ($11=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i)), 'xVel')) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)), (typeof ($sub15=$p['getattr']((typeof ($13=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $13.__array[$14=i]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(i)), 'yPos'))==typeof ($sub16=$p['getattr']((typeof ($15=$p['getattr'](self, 'particles')).__array != 'undefined'?
						((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(i)), 'yVel')) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16)));
					self['canvas']['closePath']();
					self['canvas']['stroke']();
				}
				if ((($bool11=$p['getattr'](self, 'takeBenchmarks')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['controls']['doBenchmark']($m['time']['gmtime']());
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['renderingLoop'] = $method;
			$method = $pyjs__bind_method2('stopDemo', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ffc1fee424560a4f589c427de78f9f2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('run', false) : $p['setattr'](self, 'run', false); 
				self['controls']['resetBenchmark']();
				self['canvas']['restoreContext']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stopDemo'] = $method;
			var $bases = new Array($m['SimpleCanvasDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ParticleDemo', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ParticleDemo */


/* end module: ParticleDemo */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'time', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
