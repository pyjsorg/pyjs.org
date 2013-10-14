/* start module: game_model */
$pyjs['loaded_modules']['game_model'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game_model']['__was_initialized__']) return $pyjs['loaded_modules']['game_model'];
	var $m = $pyjs['loaded_modules']['game_model'];
	$m['__repr__'] = function() { return '<module: game_model>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game_model';
	$m['__name__'] = __mod_name__;
	try {
		var $div2,$div1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_30 = new $p['int'](30);
		$m['math'] = $p['___import___']('math', null);
		$m['random'] = $p['___import___']('random', null);
		$m['NUM_ASTEROIDS'] = $constant_int_2;
		$m['FPS'] = $constant_int_30;
		$m['FRICTION'] = 0.05;
		$m['THRUST'] = 0.2;
		$m['ROTATE_SPEED_PER_SEC'] = $p['getattr']((typeof Math == "undefined"?$m['Math']:Math), 'PI');
		$m['ROTATE_SPEED'] = (typeof ($div1=$m['ROTATE_SPEED_PER_SEC'])==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$m['MAX_ASTEROID_SPEED'] = 2.0;
		$m['SHOT_LIFESPAN'] = $constant_int_60;
		$m['SHOT_SPEED'] = 8.0;
		$m['SHOT_DELAY'] = $constant_int_10;
		$m['ASTEROID_SIZE'] = 180.0;
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
			$cls_definition['__module__'] = 'game_model';
			$cls_definition['__md5__'] = '65f04935271428e2749423e9f4702b21';
			$method = $pyjs__bind_method2('__init__', function(model, x, y, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					model = arguments[1];
					x = arguments[2];
					y = arguments[3];
					size = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '65f04935271428e2749423e9f4702b21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][4][1];
				if (typeof y == 'undefined') y=arguments['callee']['__args__'][5][1];
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][6][1];
				var $2,$div10,$div11,$div12,$1,$mul20,$or1,$mul13,$or2,$sub13,$sub12,$sub11,$sub14,$bool2,$bool3,$div8,$div9,$mul9,$div3,$div6,$div7,$div4,$div5,$mul17,$mul16,$mul15,$mul14,$cmp1,$mul12,$mul11,$mul10,$cmp2,$mul19,$mul18,$bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('model', model) : $p['setattr'](self, 'model', model); 
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($div3=$p['getattr'](model, 'x'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))) : $p['setattr'](self, 'x', (typeof ($div3=$p['getattr'](model, 'x'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($div5=$p['getattr'](model, 'y'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))) : $p['setattr'](self, 'y', (typeof ($div5=$p['getattr'](model, 'y'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))); 
					while ((($bool3=((($cmp1=$m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), (typeof ($div7=$p['getattr'](model, 'x'))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)), (typeof ($div9=$p['getattr'](model, 'y'))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $m['random']['randint']($constant_int_0, $p['getattr'](model, 'x'))) : $p['setattr'](self, 'x', $m['random']['randint']($constant_int_0, $p['getattr'](model, 'x'))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $m['random']['randint']($constant_int_0, $p['getattr'](model, 'y'))) : $p['setattr'](self, 'y', $m['random']['randint']($constant_int_0, $p['getattr'](model, 'y'))); 
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
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('radius2', (typeof ($mul17=$p['getattr'](self, 'radius'))==typeof ($mul18=$p['getattr'](self, 'radius')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) : $p['setattr'](self, 'radius2', (typeof ($mul17=$p['getattr'](self, 'radius'))==typeof ($mul18=$p['getattr'](self, 'radius')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scale', (typeof ($mul19=(typeof ($div11=$p['getattr'](self, 'radius'))==typeof ($div12=$m['ASTEROID_SIZE']) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))==typeof ($mul20=$constant_int_2) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) : $p['setattr'](self, 'scale', (typeof ($mul19=(typeof ($div11=$p['getattr'](self, 'radius'))==typeof ($div12=$m['ASTEROID_SIZE']) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))==typeof ($mul20=$constant_int_2) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))); 
				return null;
			}
	, 1, [null,null,['self'],['model'],['x', null],['y', null],['size', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('update_dim', function(pos, d_dim, max_dim) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					d_dim = arguments[2];
					max_dim = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '65f04935271428e2749423e9f4702b21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp4,$cmp7,$cmp6,$bool4,$cmp3,$sub15,$cmp8,$add3,$bool6,$sub16,$add4,$bool5,$mul22,$mul21;
				pos = (typeof ($add3=pos)==typeof ($add4=d_dim) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				if ((($bool4=((($cmp3=d_dim)===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					if ((($bool5=((($cmp5=pos)===($cmp6=$constant_int_0)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) < 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						pos = (typeof ($usub1=pos)=='number'?
							-$usub1:
							$p['op_usub']($usub1));
						d_dim = (typeof ($usub2=d_dim)=='number'?
							-$usub2:
							$p['op_usub']($usub2));
					}
				}
				else {
					if ((($bool6=((((($cmp7=pos)===($cmp8=max_dim)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						d_dim = (typeof ($usub3=d_dim)=='number'?
							-$usub3:
							$p['op_usub']($usub3));
						pos = (typeof ($sub15=(typeof ($mul21=$constant_int_2)==typeof ($mul22=max_dim) && typeof $mul21=='number'?
							$mul21*$mul22:
							$p['op_mul']($mul21,$mul22)))==typeof ($sub16=pos) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16));
					}
				}
				return $p['tuple']([pos, d_dim]);
			}
	, 1, [null,null,['self'],['pos'],['d_dim'],['max_dim']]);
			$cls_definition['update_dim'] = $method;
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
					if (self.prototype['__md5__'] !== '65f04935271428e2749423e9f4702b21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add5;
				var $tupleassign1 = $p['__ass_unpack'](self['update_dim']($p['getattr'](self, 'x'), $p['getattr'](self, 'dx'), $p['getattr']($p['getattr'](self, 'model'), 'x')), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign1[0]) : $p['setattr'](self, 'x', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $tupleassign1[1]) : $p['setattr'](self, 'dx', $tupleassign1[1]); 
				var $tupleassign2 = $p['__ass_unpack'](self['update_dim']($p['getattr'](self, 'y'), $p['getattr'](self, 'dy'), $p['getattr']($p['getattr'](self, 'model'), 'y')), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign2[0]) : $p['setattr'](self, 'y', $tupleassign2[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $tupleassign2[1]) : $p['setattr'](self, 'dy', $tupleassign2[1]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($add5=$p['getattr'](self, 'rot'))==typeof ($add6=$p['getattr'](self, 'rotspeed')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))) : $p['setattr'](self, 'rot', (typeof ($add5=$p['getattr'](self, 'rot'))==typeof ($add6=$p['getattr'](self, 'rotspeed')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Asteroid', $p['tuple']($bases), $data);
		})();
		$m['Shot'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'game_model';
			$cls_definition['__md5__'] = 'e70e1f87fe134967aa329bf6d046698d';
			$method = $pyjs__bind_method2('__init__', function(model, ship) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					model = arguments[1];
					ship = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e70e1f87fe134967aa329bf6d046698d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('model', model) : $p['setattr'](self, 'model', model); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $p['getattr'](ship, 'x')) : $p['setattr'](self, 'x', $p['getattr'](ship, 'x')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $p['getattr'](ship, 'y')) : $p['setattr'](self, 'y', $p['getattr'](ship, 'y')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $p['getattr'](ship, 'dx')) : $p['setattr'](self, 'dx', $p['getattr'](ship, 'dx')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $p['getattr'](ship, 'dy')) : $p['setattr'](self, 'dy', $p['getattr'](ship, 'dy')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dir', $p['getattr'](ship, 'rot')) : $p['setattr'](self, 'dir', $p['getattr'](ship, 'rot')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lifespan', $m['SHOT_LIFESPAN']) : $p['setattr'](self, 'lifespan', $m['SHOT_LIFESPAN']); 
				return null;
			}
	, 1, [null,null,['self'],['model'],['ship']]);
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
					if (self.prototype['__md5__'] !== 'e70e1f87fe134967aa329bf6d046698d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub20,$iter1_iter,$bool8,$iter1_array,$mul26,$mul24,$mul25,$mul23,$bool7,$iter1_idx,$sub19,$sub18,$iter1_nextval,$sub17,$add10,$add11,$add12,$cmp12,$4,$3,a,$iter1_type,i,$cmp9,$add7,$len1,$cmp11,$add8,$add9,$cmp10;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lifespan', (typeof ($sub17=$p['getattr'](self, 'lifespan'))==typeof ($sub18=$constant_int_1) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))) : $p['setattr'](self, 'lifespan', (typeof ($sub17=$p['getattr'](self, 'lifespan'))==typeof ($sub18=$constant_int_1) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))); 
				if ((($bool7=((($cmp9=$p['getattr'](self, 'lifespan'))===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					return false;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add9=(typeof ($add7=$p['getattr'](self, 'x'))==typeof ($add8=$p['getattr'](self, 'dx')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=(typeof ($mul23=$m['SHOT_SPEED'])==typeof ($mul24=$m['math']['sin']($p['getattr'](self, 'dir'))) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))) : $p['setattr'](self, 'x', (typeof ($add9=(typeof ($add7=$p['getattr'](self, 'x'))==typeof ($add8=$p['getattr'](self, 'dx')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=(typeof ($mul23=$m['SHOT_SPEED'])==typeof ($mul24=$m['math']['sin']($p['getattr'](self, 'dir'))) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($sub19=(typeof ($add11=$p['getattr'](self, 'y'))==typeof ($add12=$p['getattr'](self, 'dy')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($sub20=(typeof ($mul25=$m['SHOT_SPEED'])==typeof ($mul26=$m['math']['cos']($p['getattr'](self, 'dir'))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20))) : $p['setattr'](self, 'y', (typeof ($sub19=(typeof ($add11=$p['getattr'](self, 'y'))==typeof ($add12=$p['getattr'](self, 'dy')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($sub20=(typeof ($mul25=$m['SHOT_SPEED'])==typeof ($mul26=$m['math']['cos']($p['getattr'](self, 'dir'))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20))); 
				$iter1_iter = $p['range']((($len1=$p['getattr']($p['getattr'](self, 'model'), 'asteroids')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					a = (typeof ($3=$p['getattr']($p['getattr'](self, 'model'), 'asteroids'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](i));
					if ((($bool8=((($cmp11=$m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')))===($cmp12=$p['getattr'](a, 'radius2'))?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						self['model']['split_asteroid'](i);
						return false;
					}
				}
				return true;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Shot', $p['tuple']($bases), $data);
		})();
		$m['Ship'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'game_model';
			$cls_definition['__md5__'] = '71e945e19a777d7052f53824ca4dbe41';
			$method = $pyjs__bind_method2('__init__', function(cx, cy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					cx = arguments[1];
					cy = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cx', cx) : $p['setattr'](self, 'cx', cx); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cy', cy) : $p['setattr'](self, 'cy', cy); 
				self['reset']();
				return null;
			}
	, 1, [null,null,['self'],['cx'],['cy']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('rotate_ship', function(drot) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					drot = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$cmp15,$sub21,$mul28,$sub24,$add15,$bool10,$mul29,$add14,$cmp14,$add16,$cmp16,$sub23,$cmp13,$add13,$mul27,$bool9,$mul30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', (typeof ($add13=$p['getattr'](self, 'rot'))==typeof ($add14=drot) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'rot', (typeof ($add13=$p['getattr'](self, 'rot'))==typeof ($add14=drot) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				if ((($bool9=((($cmp13=drot)===($cmp14=(typeof ($sub21=$constant_int_0)==typeof ($sub22=$p['getattr']($m['math'], 'pi')) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22)))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					drot = (typeof ($add15=drot)==typeof ($add16=(typeof ($mul27=$constant_int_2)==typeof ($mul28=$p['getattr']($m['math'], 'pi')) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				else if ((($bool10=((($cmp15=drot)===($cmp16=$p['getattr']($m['math'], 'pi'))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					drot = (typeof ($sub23=drot)==typeof ($sub24=(typeof ($mul29=$constant_int_2)==typeof ($mul30=$p['getattr']($m['math'], 'pi')) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30))) && (typeof $sub23=='number'||typeof $sub23=='string')?
						$sub23-$sub24:
						$p['op_sub']($sub23,$sub24));
				}
				return null;
			}
	, 1, [null,null,['self'],['drot']]);
			$cls_definition['rotate_ship'] = $method;
			$method = $pyjs__bind_method2('thrust', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub26,$sub25,$mul31,$add17,$mul34,$add18,$mul33,$mul32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($add17=$p['getattr'](self, 'dx'))==typeof ($add18=(typeof ($mul31=$m['THRUST'])==typeof ($mul32=$m['math']['sin']($p['getattr'](self, 'rot'))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))) : $p['setattr'](self, 'dx', (typeof ($add17=$p['getattr'](self, 'dx'))==typeof ($add18=(typeof ($mul31=$m['THRUST'])==typeof ($mul32=$m['math']['sin']($p['getattr'](self, 'rot'))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($sub25=$p['getattr'](self, 'dy'))==typeof ($sub26=(typeof ($mul33=$m['THRUST'])==typeof ($mul34=$m['math']['cos']($p['getattr'](self, 'rot'))) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26))) : $p['setattr'](self, 'dy', (typeof ($sub25=$p['getattr'](self, 'dy'))==typeof ($sub26=(typeof ($mul33=$m['THRUST'])==typeof ($mul34=$m['math']['cos']($p['getattr'](self, 'rot'))) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['thrust'] = $method;
			$method = $pyjs__bind_method2('friction', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$sub28,$sub27,$sub30,$and1,$sub29,$cmp18,$cmp20,$cmp17,$mul38,$bool11,$mul35,$mul37,$mul36,$cmp19,$and2,dir;
				if ((($bool12=((($bool11=$and1=((($cmp17=$m['math']['fabs']($p['getattr'](self, 'dx')))===($cmp18=0.001)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp19=$m['math']['fabs']($p['getattr'](self, 'dy')))===($cmp20=0.001)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == -1):$and1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $constant_int_0) : $p['setattr'](self, 'dx', $constant_int_0); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $constant_int_0) : $p['setattr'](self, 'dy', $constant_int_0); 
				}
				else {
					dir = $m['math']['atan2']($p['getattr'](self, 'dx'), $p['getattr'](self, 'dy'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', (typeof ($sub27=$p['getattr'](self, 'dx'))==typeof ($sub28=(typeof ($mul35=$m['FRICTION'])==typeof ($mul36=$m['math']['sin'](dir)) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36))) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))) : $p['setattr'](self, 'dx', (typeof ($sub27=$p['getattr'](self, 'dx'))==typeof ($sub28=(typeof ($mul35=$m['FRICTION'])==typeof ($mul36=$m['math']['sin'](dir)) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36))) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', (typeof ($sub29=$p['getattr'](self, 'dy'))==typeof ($sub30=(typeof ($mul37=$m['FRICTION'])==typeof ($mul38=$m['math']['cos'](dir)) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38))) && (typeof $sub29=='number'||typeof $sub29=='string')?
						$sub29-$sub30:
						$p['op_sub']($sub29,$sub30))) : $p['setattr'](self, 'dy', (typeof ($sub29=$p['getattr'](self, 'dy'))==typeof ($sub30=(typeof ($mul37=$m['FRICTION'])==typeof ($mul38=$m['math']['cos'](dir)) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38))) && (typeof $sub29=='number'||typeof $sub29=='string')?
						$sub29-$sub30:
						$p['op_sub']($sub29,$sub30))); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['friction'] = $method;
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
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$and8,$bool19,$bool13,$bool14,$bool15,$bool16,$bool17,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,$add26,$add21,$add20,$add22,$add25,$add24,$cmp32,$bool20,$sub31,$and9,$sub33,$sub32,$sub35,$sub34,$sub36,$and3,$and4,$and5,$and6,$and7,$and10,$cmp36,$cmp35,$cmp34,$cmp33,$add19,$cmp31,$cmp30,$add23;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shot_delay', (typeof ($sub31=$p['getattr'](self, 'shot_delay'))==typeof ($sub32=$constant_int_1) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					$p['op_sub']($sub31,$sub32))) : $p['setattr'](self, 'shot_delay', (typeof ($sub31=$p['getattr'](self, 'shot_delay'))==typeof ($sub32=$constant_int_1) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					$p['op_sub']($sub31,$sub32))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add19=$p['getattr'](self, 'x'))==typeof ($add20=$p['getattr'](self, 'dx')) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))) : $p['setattr'](self, 'x', (typeof ($add19=$p['getattr'](self, 'x'))==typeof ($add20=$p['getattr'](self, 'dx')) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($add21=$p['getattr'](self, 'y'))==typeof ($add22=$p['getattr'](self, 'dy')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))) : $p['setattr'](self, 'y', (typeof ($add21=$p['getattr'](self, 'y'))==typeof ($add22=$p['getattr'](self, 'dy')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22))); 
				if ((($bool14=((($bool13=$and3=((($cmp21=$p['getattr'](self, 'dx'))===($cmp22=$constant_int_0)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp23=$p['getattr'](self, 'x'))===($cmp24=$p['getattr'](self, 'cx'))?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))))|1) == 1):$and3)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($sub33=$p['getattr'](self, 'x'))==typeof ($sub34=$p['getattr'](self, 'cx')) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))) : $p['setattr'](self, 'x', (typeof ($sub33=$p['getattr'](self, 'x'))==typeof ($sub34=$p['getattr'](self, 'cx')) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))); 
				}
				else if ((($bool16=((($bool15=$and5=((($cmp25=$p['getattr'](self, 'dx'))===($cmp26=$constant_int_0)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15['__nonzero__']=='function'?
							$bool15['__nonzero__']() :
							(typeof $bool15['__len__']=='function'?
								($bool15['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp27=$p['getattr'](self, 'x'))===($cmp28=$constant_int_0)?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) == -1):$and5)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($add23=$p['getattr'](self, 'x'))==typeof ($add24=$p['getattr'](self, 'cx')) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24))) : $p['setattr'](self, 'x', (typeof ($add23=$p['getattr'](self, 'x'))==typeof ($add24=$p['getattr'](self, 'cx')) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24))); 
				}
				if ((($bool18=((($bool17=$and7=((($cmp29=$p['getattr'](self, 'y'))===($cmp30=$constant_int_0)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp31=$p['getattr'](self, 'y'))===($cmp32=$p['getattr'](self, 'cy'))?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))))|1) == 1):$and7)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($sub35=$p['getattr'](self, 'y'))==typeof ($sub36=$p['getattr'](self, 'cy')) && (typeof $sub35=='number'||typeof $sub35=='string')?
						$sub35-$sub36:
						$p['op_sub']($sub35,$sub36))) : $p['setattr'](self, 'y', (typeof ($sub35=$p['getattr'](self, 'y'))==typeof ($sub36=$p['getattr'](self, 'cy')) && (typeof $sub35=='number'||typeof $sub35=='string')?
						$sub35-$sub36:
						$p['op_sub']($sub35,$sub36))); 
				}
				else if ((($bool20=((($bool19=$and9=((($cmp33=$p['getattr'](self, 'dy'))===($cmp34=$constant_int_0)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp35=$p['getattr'](self, 'y'))===($cmp36=$constant_int_0)?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1):$and9)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($add25=$p['getattr'](self, 'y'))==typeof ($add26=$p['getattr'](self, 'cy')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26))) : $p['setattr'](self, 'y', (typeof ($add25=$p['getattr'](self, 'y'))==typeof ($add26=$p['getattr'](self, 'cy')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26))); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
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
					if (self.prototype['__md5__'] !== '71e945e19a777d7052f53824ca4dbe41') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div14,$div15,$div16,$div13;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', (typeof ($div13=$p['getattr'](self, 'cx'))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))) : $p['setattr'](self, 'x', (typeof ($div13=$p['getattr'](self, 'cx'))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', (typeof ($div15=$p['getattr'](self, 'cy'))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))) : $p['setattr'](self, 'y', (typeof ($div15=$p['getattr'](self, 'cy'))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $constant_int_0) : $p['setattr'](self, 'dx', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $constant_int_0) : $p['setattr'](self, 'dy', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rot', $constant_int_0) : $p['setattr'](self, 'rot', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shot_delay', $constant_int_0) : $p['setattr'](self, 'shot_delay', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Ship', $p['tuple']($bases), $data);
		})();
		$m['Model'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'game_model';
			$cls_definition['__md5__'] = '8fb4d4702bffb2142bf93b3d8a2ede9d';
			$method = $pyjs__bind_method2('__init__', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('num_asteroids', $m['NUM_ASTEROIDS']) : $p['setattr'](self, 'num_asteroids', $m['NUM_ASTEROIDS']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ship', $m['Ship'](x, y)) : $p['setattr'](self, 'ship', $m['Ship'](x, y)); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('start_game', function(view) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					view = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				return null;
			}
	, 1, [null,null,['self'],['view']]);
			$cls_definition['start_game'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,$cmp37,$iter3_idx,$iter2_iter,$bool24,$bool21,$iter3_iter,$bool23,$bool22,$iter2_type,$cmp38,$iter2_idx,$iter3_array,$6,$5,a,$iter2_nextval,i,$len2,$len3,$iter3_nextval,$iter2_array;
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
					if ((($bool21=((($cmp37=$m['distsq']($p['getattr']($p['getattr'](self, 'ship'), 'x'), $p['getattr']($p['getattr'](self, 'ship'), 'y'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')))===($cmp38=$p['getattr'](a, 'radius2'))?0:
						(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
							($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
							$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						self['destroyShip']();
						return null;
					}
				}
				$iter3_iter = $p['reversed']($p['range']((($len2=$p['getattr'](self, 'shots')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2)))))));
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					if ((($bool23=!(($bool22=(typeof ($5=$p['getattr'](self, 'shots'))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i))['move']()) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23['__nonzero__']=='function'?
									$bool23['__nonzero__']() :
									(typeof $bool23['__len__']=='function'?
										($bool23['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['shots']['pop'](i);
						if ((($bool24=$p['op_eq']((($len3=$p['getattr'](self, 'asteroids')) === null?$constant_int_0:
							(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
								(typeof $len3['__len__'] == 'function'?$len3['__len__']():
									(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
										$p['len']($len3))))), $constant_int_0)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
							self['start_next_level']();
							return null;
						}
					}
				}
				self['ship']['move']();
				self['view']['draw']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('start_next_level', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add28,$add27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('num_asteroids', (typeof ($add27=$p['getattr'](self, 'num_asteroids'))==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28))) : $p['setattr'](self, 'num_asteroids', (typeof ($add27=$p['getattr'](self, 'num_asteroids'))==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28))); 
				self['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start_next_level'] = $method;
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
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
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
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shots', $p['list']([])) : $p['setattr'](self, 'shots', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('asteroids', function(){
					var i,$iter4_nextval,$collcomp1,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp1 = $p['list']();
				$iter4_iter = $p['range']($p['getattr'](self, 'num_asteroids'));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$collcomp1['append']($m['Asteroid'](self));
				}

	return $collcomp1;}()) : $p['setattr'](self, 'asteroids', function(){
					var i,$iter4_nextval,$collcomp1,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp1 = $p['list']();
				$iter4_iter = $p['range']($p['getattr'](self, 'num_asteroids'));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$collcomp1['append']($m['Asteroid'](self));
				}

	return $collcomp1;}()); 
				self['ship']['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('trigger_fire', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool25,$cmp40,$cmp39;
				if ((($bool25=((($cmp39=$p['getattr']($p['getattr'](self, 'ship'), 'shot_delay'))===($cmp40=$constant_int_0)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					return null;
				}
				else {
					self['shots']['append']($m['Shot'](self, $p['getattr'](self, 'ship')));
					$p['getattr'](self, 'ship')['__is_instance__'] && typeof $p['getattr'](self, 'ship')['__setattr__'] == 'function' ? $p['getattr'](self, 'ship')['__setattr__']('shot_delay', $m['SHOT_DELAY']) : $p['setattr']($p['getattr'](self, 'ship'), 'shot_delay', $m['SHOT_DELAY']); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['trigger_fire'] = $method;
			$method = $pyjs__bind_method2('split_asteroid', function(i) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					i = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8fb4d4702bffb2142bf93b3d8a2ede9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$iter5_nextval,$iter5_idx,$sub37,$sub38,j,$iter5_array,$add29,$len4,$bool26,$8,$iter5_type,$cmp42,$7,$cmp41,$iter5_iter,$add30;
				a = (typeof ($7=$p['getattr'](self, 'asteroids'))['__array'] != 'undefined'?
					((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](i));
				if ((($bool26=((($cmp41=$p['getattr'](a, 'size'))===($cmp42=(typeof ($sub37=(($len4=$m['ASTEROID_SIZES']) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))))==typeof ($sub38=$constant_int_1) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)))?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					$iter5_iter = $p['range']($constant_int_2);
					if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter['__iter__']();
						$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						j = $iter5_nextval;
						self['asteroids']['append']($m['Asteroid'](self, $p['getattr'](a, 'x'), $p['getattr'](a, 'y'), (typeof ($add29=$p['getattr'](a, 'size'))==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30))));
					}
				}
				self['asteroids']['pop'](i);
				return null;
			}
	, 1, [null,null,['self'],['i']]);
			$cls_definition['split_asteroid'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Model', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end game_model */


/* end module: game_model */


/*
PYJS_DEPS: ['math', 'random']
*/
