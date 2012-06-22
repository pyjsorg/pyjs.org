/* start module: pyjamas.chart.AnnotationLocation */
$pyjs['loaded_modules']['pyjamas.chart.AnnotationLocation'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.chart.AnnotationLocation']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.chart.AnnotationLocation'];
	if(typeof $pyjs['loaded_modules']['pyjamas.chart'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.chart']['__was_initialized__']) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs['loaded_modules']['pyjamas.chart.AnnotationLocation'];
	$m['__repr__'] = function() { return '<module: pyjamas.chart.AnnotationLocation>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.AnnotationLocation';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.chart']['AnnotationLocation'] = $pyjs['loaded_modules']['pyjamas.chart.AnnotationLocation'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['math'] = $p['___import___']('math', 'pyjamas.chart');
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.chart', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.chart', null, false);
		$m['validateMultipliers'] = function(widthMultiplier, heightMultiplier) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $bool2,$or4,$or1,$or3,$or2,$and1,$and2,$bool3,$bool1,$bool6,$add2,$bool4,$bool5,$add1;
			if ((($bool6=((($bool3=$and1=!(($bool2=((($bool1=$or1=$p['op_eq'](widthMultiplier, $constant_int_0)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1['__nonzero__']=='function'?
						$bool1['__nonzero__']() :
						(typeof $bool1['__len__']=='function'?
							($bool1['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['op_eq']($p['abs'](widthMultiplier), $constant_int_1))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2['__nonzero__']=='function'?
						$bool2['__nonzero__']() :
						(typeof $bool2['__len__']=='function'?
							($bool2['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool5=((($bool4=$or3=$p['op_eq'](heightMultiplier, $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:$p['op_eq']($p['abs'](heightMultiplier), $constant_int_1))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)((typeof ($add1='widthMultiplier, heightMultiplier args must both be ')==typeof ($add2='either 0, 1, or -1') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))));
			}
			return null;
		};
		$m['validateMultipliers']['__name__'] = 'validateMultipliers';

		$m['validateMultipliers']['__bind_type__'] = 0;
		$m['validateMultipliers']['__args__'] = [null,null,['widthMultiplier'],['heightMultiplier']];
		$m['getAnnotationLocation'] = function(widthMultiplier, heightMultiplier) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var locationMap,$add3,$add6,result,$add4,$add5,$4,$2,$3,$1;
			locationMap = $p['list']([$p['list']([(typeof NORTHWEST == "undefined"?$m['NORTHWEST']:NORTHWEST), (typeof NORTH == "undefined"?$m['NORTH']:NORTH), (typeof NORTHEAST == "undefined"?$m['NORTHEAST']:NORTHEAST)]), $p['list']([(typeof WEST == "undefined"?$m['WEST']:WEST), (typeof CENTER == "undefined"?$m['CENTER']:CENTER), (typeof EAST == "undefined"?$m['EAST']:EAST)]), $p['list']([(typeof SOUTHWEST == "undefined"?$m['SOUTHWEST']:SOUTHWEST), (typeof SOUTH == "undefined"?$m['SOUTH']:SOUTH), (typeof SOUTHEAST == "undefined"?$m['SOUTHEAST']:SOUTHEAST)])]);
			result = (typeof ($3=(typeof ($1=locationMap)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=(typeof ($add3=heightMultiplier)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__']((typeof ($add3=heightMultiplier)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))))['__array'] != 'undefined'?
				((typeof $3['__array'][$4=(typeof ($add5=widthMultiplier)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__']((typeof ($add5=widthMultiplier)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))));
			return result;
		};
		$m['getAnnotationLocation']['__name__'] = 'getAnnotationLocation';

		$m['getAnnotationLocation']['__bind_type__'] = 0;
		$m['getAnnotationLocation']['__args__'] = [null,null,['widthMultiplier'],['heightMultiplier']];
		$m['transform'] = function(a, signWidth, signHeight) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $or5,$or6,$cmp1,$cmp3,$cmp2,$cmp4,result,$bool8,$mul4,$mul3,$mul2,$mul1,$bool7;
			result = a;
			if ((($bool8=((($bool7=$or5=((($cmp1=signWidth)===($cmp2=$constant_int_0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($cmp3=signHeight)===($cmp4=$constant_int_0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				result = $m['getAnnotationLocation']((typeof ($mul1=signWidth)==typeof ($mul2=$p['getattr'](a, 'widthMultiplier')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), (typeof ($mul3=signHeight)==typeof ($mul4=$p['getattr'](a, 'heightMultiplier')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)));
			}
			return result;
		};
		$m['transform']['__name__'] = 'transform';

		$m['transform']['__bind_type__'] = 0;
		$m['transform']['__args__'] = [null,null,['a'],['signWidth'],['signHeight']];
		$m['AnnotationLocation'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.AnnotationLocation';
			$cls_definition['__md5__'] = '7e8f14065b44d0542d6a26ab4afec8cc';
			$method = $pyjs__bind_method2('__init__', function(widthMultiplier, heightMultiplier) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widthMultiplier = arguments[1];
					heightMultiplier = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['validateMultipliers'](widthMultiplier, heightMultiplier);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widthMultiplier', widthMultiplier) : $p['setattr'](self, 'widthMultiplier', widthMultiplier); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('heightMultiplier', heightMultiplier) : $p['setattr'](self, 'heightMultiplier', heightMultiplier); 
				return null;
			}
	, 1, [null,null,['self'],['widthMultiplier'],['heightMultiplier']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$bool10,$bool11,$add10,result,$add8,$bool9,$add7;
				if ((($bool9=$p['op_eq']($p['getattr'](self, 'widthMultiplier'), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					result = $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_RIGHT');
				}
				else if ((($bool10=$p['op_eq']($p['getattr'](self, 'widthMultiplier'), $constant_int_0)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					result = $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER');
				}
				else if ((($bool11=$p['op_eq']($p['getattr'](self, 'widthMultiplier'), $constant_int_1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					result = $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT');
				}
				else {
					throw ((typeof IllegalStateException == "undefined"?$m['IllegalStateException']:IllegalStateException)((typeof ($add9=(typeof ($add7='Invalid widthMultiplier: ')==typeof ($add8=$p['str']($p['getattr'](self, 'widthMultiplier'))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($add10=' 1, 0, or -1 were expected.') && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('getUpperLeftX', function(x, w, symbolW) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					w = arguments[2];
					symbolW = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add13,$add14,$sub2,$add11,$add12,$mul6,$div2,$mul5,$div1,$sub1,result;
				result = $p['int']($p['round']((typeof ($add13=x)==typeof ($add14=(typeof ($div1=(typeof ($sub1=(typeof ($mul5=$p['getattr'](self, 'widthMultiplier'))==typeof ($mul6=(typeof ($add11=w)==typeof ($add12=symbolW) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($sub2=w) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))));
				return result;
			}
	, 1, [null,null,['self'],['x'],['w'],['symbolW']]);
			$cls_definition['getUpperLeftX'] = $method;
			$method = $pyjs__bind_method2('getUpperLeftY', function(y, h, symbolH) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					y = arguments[1];
					h = arguments[2];
					symbolH = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul7,$add15,$add16,$sub3,result,$add17,$mul8,$div3,$add18,$div4,$sub4;
				result = $p['int']($p['round']((typeof ($add17=y)==typeof ($add18=(typeof ($div3=(typeof ($sub3=(typeof ($mul7=$p['getattr'](self, 'heightMultiplier'))==typeof ($mul8=(typeof ($add15=h)==typeof ($add16=symbolH) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($sub4=h) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))));
				return result;
			}
	, 1, [null,null,['self'],['y'],['h'],['symbolH']]);
			$cls_definition['getUpperLeftY'] = $method;
			$method = $pyjs__bind_method2('getVerticalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add22,$add21,$add20,$bool13,$bool14,$bool12,result,$add19;
				if ((($bool12=$p['op_eq']($p['getattr'](self, 'heightMultiplier'), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					result = $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_BOTTOM');
				}
				else if ((($bool13=$p['op_eq']($p['getattr'](self, 'heightMultiplier'), $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					result = $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_MIDDLE');
				}
				else if ((($bool14=$p['op_eq']($p['getattr'](self, 'heightMultiplier'), $constant_int_1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					result = $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP');
				}
				else {
					throw ((typeof IllegalStateException == "undefined"?$m['IllegalStateException']:IllegalStateException)((typeof ($add21=(typeof ($add19='Invalid heightMultiplier: ')==typeof ($add20=$p['getattr'](self, 'heightMultiplier')) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))==typeof ($add22=' -1, 0, or 1 were expected.') && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVerticalAlignment'] = $method;
			$method = $pyjs__bind_method2('decodePieLocation', function(thetaMid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					thetaMid = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7e8f14065b44d0542d6a26ab4afec8cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$bool18,$cmp7,LOOKS_VERTICAL_OR_HORIZONTAL_DELTA,pieTransformedHeightMultiplier,$cmp8,$cmp9,$bool15,$bool16,pieTransformedWidthMultiplier,$cmp6,$cmp11,$cmp10,$cmp12,$bool17,sinTheta,cosTheta;
				LOOKS_VERTICAL_OR_HORIZONTAL_DELTA = 0.1;
				sinTheta = $m['math']['sin'](thetaMid);
				cosTheta = $m['math']['cos'](thetaMid);
				if ((($bool15=((($cmp5=cosTheta)===($cmp6=(typeof ($usub3=LOOKS_VERTICAL_OR_HORIZONTAL_DELTA)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					pieTransformedWidthMultiplier = (typeof ($usub4=$p['getattr'](self, 'heightMultiplier'))=='number'?
						-$usub4:
						$p['op_usub']($usub4));
				}
				else if ((($bool16=((($cmp7=cosTheta)===($cmp8=LOOKS_VERTICAL_OR_HORIZONTAL_DELTA)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					pieTransformedWidthMultiplier = $p['getattr'](self, 'heightMultiplier');
				}
				else {
					pieTransformedWidthMultiplier = $constant_int_0;
				}
				if ((($bool17=((($cmp9=sinTheta)===($cmp10=(typeof ($usub5=LOOKS_VERTICAL_OR_HORIZONTAL_DELTA)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					pieTransformedHeightMultiplier = (typeof ($usub6=$p['getattr'](self, 'heightMultiplier'))=='number'?
						-$usub6:
						$p['op_usub']($usub6));
				}
				else if ((($bool18=((($cmp11=sinTheta)===($cmp12=LOOKS_VERTICAL_OR_HORIZONTAL_DELTA)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					pieTransformedHeightMultiplier = $p['getattr'](self, 'heightMultiplier');
				}
				else {
					pieTransformedHeightMultiplier = $constant_int_0;
				}
				return $m['getAnnotationLocation'](pieTransformedWidthMultiplier, pieTransformedHeightMultiplier);
			}
	, 1, [null,null,['self'],['thetaMid']]);
			$cls_definition['decodePieLocation'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AnnotationLocation', $p['tuple']($bases), $data);
		})();
		$m['AT_THE_MOUSE'] = $m['AnnotationLocation']($constant_int_0, $constant_int_0);
		$m['AT_THE_MOUSE_SNAP_TO_X'] = $m['AnnotationLocation']($constant_int_0, $constant_int_0);
		$m['AT_THE_MOUSE_SNAP_TO_Y'] = $m['AnnotationLocation']($constant_int_0, $constant_int_0);
		$m['CENTER'] = $m['AnnotationLocation']($constant_int_0, $constant_int_0);
		$m['north'] = $m['AnnotationLocation']($constant_int_0, (typeof ($usub7=$constant_int_1)=='number'?
			-$usub7:
			$p['op_usub']($usub7)));
		$m['west'] = $m['AnnotationLocation']((typeof ($usub8=$constant_int_1)=='number'?
			-$usub8:
			$p['op_usub']($usub8)), $constant_int_0);
		$m['south'] = $m['AnnotationLocation']($constant_int_0, $constant_int_1);
		$m['CLOSEST_TO_HORIZONTAL_BASELINE'] = $m['north'];
		$m['CLOSEST_TO_VERTICAL_BASELINE'] = $m['west'];
		$m['EAST'] = $m['AnnotationLocation']($constant_int_1, $constant_int_0);
		$m['FARTHEST_FROM_HORIZONTAL_BASELINE'] = $m['south'];
		$m['FARTHEST_FROM_VERTICAL_BASELINE'] = $m['EAST'];
		$m['INSIDE_PIE_ARC'] = $m['north'];
		$m['NORTH'] = $m['north'];
		$m['NORTHEAST'] = $m['AnnotationLocation']($constant_int_1, (typeof ($usub9=$constant_int_1)=='number'?
			-$usub9:
			$p['op_usub']($usub9)));
		$m['NORTHWEST'] = $m['AnnotationLocation']((typeof ($usub10=$constant_int_1)=='number'?
			-$usub10:
			$p['op_usub']($usub10)), (typeof ($usub11=$constant_int_1)=='number'?
			-$usub11:
			$p['op_usub']($usub11)));
		$m['ON_PIE_ARC'] = $m['CENTER'];
		$m['OUTSIDE_PIE_ARC'] = $m['south'];
		$m['SOUTH'] = $m['south'];
		$m['SOUTHEAST'] = $m['AnnotationLocation']($constant_int_1, $constant_int_1);
		$m['SOUTHWEST'] = $m['AnnotationLocation']((typeof ($usub12=$constant_int_1)=='number'?
			-$usub12:
			$p['op_usub']($usub12)), $constant_int_1);
		$m['WEST'] = $m['west'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.AnnotationLocation */


/* end module: pyjamas.chart.AnnotationLocation */


/*
PYJS_DEPS: ['math', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HasVerticalAlignment']
*/
