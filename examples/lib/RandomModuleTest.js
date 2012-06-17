/* start module: RandomModuleTest */
$pyjs.loaded_modules['RandomModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['RandomModuleTest'].__was_initialized__) return $pyjs.loaded_modules['RandomModuleTest'];
	var $m = $pyjs.loaded_modules["RandomModuleTest"];
	$m.__repr__ = function() { return "<module: RandomModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RandomModuleTest';
	$m.__name__ = __mod_name__;
	try {
		var $pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_5000 = new $p['int'](5000);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['random'] = $p['___import___']('random', null);
		$m['log'] = $p['___import___']('math.log', null, null, false);
		$m['exp'] = $p['___import___']('math.exp', null, null, false);
		$m['sqrt'] = $p['___import___']('math.sqrt', null, null, false);
		$m['pi'] = $p['___import___']('math.pi', null, null, false);
		try {
			$m['msum'] = $p['___import___']('math.fsum', null, null, false);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				$m['fabs'] = $p['___import___']('math.fabs', null, null, false);
				$m['msum'] = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$4,$2,$3,$iter2_array,$1;
					xx = function(){
						var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
					$iter1_iter = $p['enumerate'](x);
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
						i = $tupleassign1[0];
						v = $tupleassign1[1];
						$collcomp1['append']($p['tuple']([$m['fabs'](v), i]));
					}

	return $collcomp1;}();
					xx['sort']();
					sum = $constant_int_0;
					$iter2_iter = xx;
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						sum = (typeof ($add1=sum)==typeof ($add2=(typeof ($3=x).__array != 'undefined'?
							((typeof $3.__array[$4=(typeof ($1=i).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1))]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__((typeof ($1=i).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1))))) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
					}
					return sum;
				};
				$m['msum'].__name__ = 'msum';

				$m['msum'].__bind_type__ = 0;
				$m['msum'].__args__ = [null,null,['x']];
			}
		}
		$m['_gammacoeff'] = $p['tuple']([1.0, 676.520368122, (typeof ($usub1=1259.13921672)=='number'?
			-$usub1:
			$p['op_usub']($usub1)), 771.323428776, (typeof ($usub2=176.61502915)=='number'?
			-$usub2:
			$p['op_usub']($usub2)), 12.5073432401, (typeof ($usub3=0.13857103313)=='number'?
			-$usub3:
			$p['op_usub']($usub3)), 9.93493711393e-06, 1.65947018741e-07]);
		$m['gamma'] = function(z, cof, g) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
			if (typeof cof == 'undefined') cof=arguments.callee.__args__[3][1];
			if (typeof g == 'undefined') g=arguments.callee.__args__[4][1];
			var $mul6,$mul4,$pow2,$pow1,$div4,$sub2,$sub1,v1,v2,$add10,$6,$div3,$mul5,$5,$mul3,$mul2,$mul1,s,$add6,$add7,$add5,$add8,$add9;
			z = (typeof ($sub1=z)==typeof ($sub2=1.0) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			v1 = $p['list']([(typeof ($5=cof).__array != 'undefined'?
				((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__($constant_int_0))]);
			v2 = function(){
				var $iter3_idx,$add4,i,$iter3_nextval,$iter3_array,$collcomp2,$add3,$len1,$iter3_iter,$8,$iter3_type,$div2,$7,$div1;
	$collcomp2 = $p['list']();
			$iter3_iter = $p['range']($constant_int_1, (($len1=cof) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$collcomp2['append']((typeof ($div1=(typeof ($7=cof).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i)))==typeof ($div2=(typeof ($add3=z)==typeof ($add4=i) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
			}

	return $collcomp2;}();
			v1 = v1['__add__'](v2);
			s = $m['msum'](v1);
			z = (typeof ($add5=z)==typeof ($add6=0.5) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			return (typeof ($mul5=(typeof ($mul3=(typeof ($div3=(typeof ($pow1=(typeof ($add7=z)==typeof ($add8=g) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($pow2=z) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)))==typeof ($div4=$m['exp']((typeof ($add9=z)==typeof ($add10=g) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))==typeof ($mul4=$m['sqrt']((typeof ($mul1=2.0)==typeof ($mul2=$m['pi']) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($mul6=s) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6));
		};
		$m['gamma'].__name__ = 'gamma';

		$m['gamma'].__bind_type__ = 0;
		$m['gamma'].__args__ = [null,null,['z'],['cof', $m['_gammacoeff']],['g', $constant_int_7]];
		$m['RandomModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'RandomModuleTest';
			$cls_definition.__md5__ = 'edb20583816566c5c01e7b669609c836';
			$method = $pyjs__bind_method2('test_zeroinputs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'edb20583816566c5c01e7b669609c836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,xx,$bool1,x,$div6,$div5;
				g = $m['random']['Random']();
				xx = function(){
					var i,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
				$iter4_iter = $p['xrange']($constant_int_50);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$collcomp3['append'](g['random']());
				}

	return $collcomp3;}();
				x = $p['list']([0.0]);
				xx = xx['__add__'](x['__mul__']($constant_int_5));
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['uniform']($constant_int_1, $constant_int_10);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['paretovariate'](1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['expovariate'](1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['weibullvariate'](1.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['normalvariate'](0.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['gauss'](0.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['lognormvariate'](0.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['vonmisesvariate'](0.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['gammavariate'](0.01, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['gammavariate'](1.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['gammavariate'](200.0, 1.0);
				x = $p['__getslice'](xx, 0, null);
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				g['betavariate'](3.0, 3.0);
				if ((($bool1=$p['hasattr'](g, 'triangular')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					x = $p['__getslice'](xx, 0, null);
					g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
					g['triangular'](0.0, 1.0, (typeof ($div5=1.0)==typeof ($div6=3.0) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_zeroinputs'] = $method;
			$method = $pyjs__bind_method2('test_avg_std', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'edb20583816566c5c01e7b669609c836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$iter7_type,variate,$bool2,$iter6_array,$iter7_nextval,dists,x,$iter8_iter,$iter6_iter,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$div37,$div34,$div35,$div38,$pow9,$pow8,$len2,$sub11,$sub10,$iter6_idx,$sub13,$sub12,$iter8_type,args,$sub16,$sub15,$sub14,$div21,$div20,$div23,$div22,$div25,$div24,$div27,$div26,$div29,$div28,$iter8_array,$add17,$iter6_type,$add13,xx,$div18,$div19,$div14,$div15,$div16,$div17,$div10,$div11,$div12,$div13,$iter8_idx,$iter7_iter,N,$iter8_nextval,$mul8,$mul7,g,mu,$assign1,$len3,$div31,$iter6_nextval,$add21,s2,$add22,$sub9,$pyjs_try_err,$sub3,$sub7,$sub6,$sub5,$sub4,$div32,$div33,$div30,$add14,$add15,$add16,$div9,$add11,$add12,$iter7_idx,$div36,$add18,$add19,e,sigmasqrd,i,$iter7_array,$add20,y,s1;
				g = $m['random']['Random']();
				N = $constant_int_5000;
				xx = function(){
					var $iter5_nextval,i,$iter5_idx,$collcomp4,$div8,$iter5_iter,$iter5_array,$iter5_type,$div7;
	$collcomp4 = $p['list']();
				$iter5_iter = $p['xrange']($constant_int_1, N);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$collcomp4['append']((typeof ($div7=i)==typeof ($div8=$p['float'](N)) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
				}

	return $collcomp4;}();
				dists = $p['list']([$p['tuple']([$p['getattr'](g, 'uniform'), $p['tuple']([1.0, 10.0]), (typeof ($div9=(typeof ($add11=10.0)==typeof ($add12=1.0) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)), (typeof ($div11=(typeof ($pow3=(typeof ($sub3=10.0)==typeof ($sub4=1.0) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($pow4=$constant_int_2) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4)))==typeof ($div12=$constant_int_12) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))]), $p['tuple']([$p['getattr'](g, 'expovariate'), $p['tuple']([1.5]), (typeof ($div13=$constant_int_1)==typeof ($div14=1.5) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)), (typeof ($div15=$constant_int_1)==typeof ($div16=(typeof ($pow5=1.5)==typeof ($pow6=$constant_int_2) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6))) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))]), $p['tuple']([$p['getattr'](g, 'paretovariate'), $p['tuple']([5.0]), (typeof ($div17=5.0)==typeof ($div18=(typeof ($sub5=5.0)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)), (typeof ($div19=5.0)==typeof ($div20=(typeof ($mul7=(typeof ($pow7=(typeof ($sub7=5.0)==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($pow8=$constant_int_2) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)))==typeof ($mul8=(typeof ($sub9=5.0)==typeof ($sub10=$constant_int_2) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20))]), $p['tuple']([$p['getattr'](g, 'weibullvariate'), $p['tuple']([1.0, 3.0]), $m['gamma']((typeof ($add13=$constant_int_1)==typeof ($add14=(typeof ($div21=$constant_int_1)==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))), (typeof ($sub11=$m['gamma']((typeof ($add15=$constant_int_1)==typeof ($add16=(typeof ($div23=$constant_int_2)==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))))==typeof ($sub12=(typeof ($pow9=$m['gamma']((typeof ($add17=$constant_int_1)==typeof ($add18=(typeof ($div25=$constant_int_1)==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))))==typeof ($pow10=$constant_int_2) && typeof $pow9=='number'?
					Math.pow($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))])]);
				if ((($bool2=$p['hasattr'](g, 'triangular')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					dists['append']($p['tuple']([$p['getattr'](g, 'triangular'), $p['tuple']([0.0, 1.0, (typeof ($div27=1.0)==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28))]), (typeof ($div29=4.0)==typeof ($div30=9.0) && typeof $div29=='number' && $div30 !== 0?
						$div29/$div30:
						$p['op_div']($div29,$div30)), (typeof ($div33=(typeof ($div31=7.0)==typeof ($div32=9.0) && typeof $div31=='number' && $div32 !== 0?
						$div31/$div32:
						$p['op_div']($div31,$div32)))==typeof ($div34=18.0) && typeof $div33=='number' && $div34 !== 0?
						$div33/$div34:
						$p['op_div']($div33,$div34))]));
				}
				$iter6_iter = dists;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 4, null);
					variate = $tupleassign2[0];
					args = $tupleassign2[1];
					mu = $tupleassign2[2];
					sigmasqrd = $tupleassign2[3];
					x = $p['__getslice'](xx, 0, null);
					g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
					y = $p['list']([]);
					$iter7_iter = $p['xrange']((($len2=x) === null?$constant_int_0:
						(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
							(typeof $len2.__len__ == 'function'?$len2.__len__():
								(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
									$p['len']($len2))))));
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						try {
							y['append']($pyjs_kwargs_call(null, variate, args, null, [{}]));
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$assign1 = $constant_int_0;
					s1 = $assign1;
					s2 = $assign1;
					$iter8_iter = y;
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						e = $iter8_nextval;
						s1 = (typeof ($add19=s1)==typeof ($add20=e) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20));
						s2 = (typeof ($add21=s2)==typeof ($add22=(typeof ($pow11=(typeof ($sub13=e)==typeof ($sub14=mu) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14)))==typeof ($pow12=$constant_int_2) && typeof $pow11=='number'?
							Math.pow($pow11,$pow12):
							$p['op_pow']($pow11,$pow12))) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
					N = (($len3=y) === null?$constant_int_0:
						(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
									$p['len']($len3)))));
					self['assertAlmostEqual']((typeof ($div35=s1)==typeof ($div36=N) && typeof $div35=='number' && $div36 !== 0?
						$div35/$div36:
						$p['op_div']($div35,$div36)), mu, $constant_int_2);
					self['assertAlmostEqual']((typeof ($div37=s2)==typeof ($div38=(typeof ($sub15=N)==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))) && typeof $div37=='number' && $div38 !== 0?
						$div37/$div38:
						$p['op_div']($div37,$div38)), sigmasqrd, $constant_int_2);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_avg_std'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RandomModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end RandomModuleTest */


/* end module: RandomModuleTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'random', 'math.log', 'math', 'math.exp', 'math.sqrt', 'math.pi', 'math.fsum', 'math.fabs']
*/
