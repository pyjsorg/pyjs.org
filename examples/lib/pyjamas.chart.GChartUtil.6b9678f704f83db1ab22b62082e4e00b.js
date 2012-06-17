/* start module: pyjamas.chart.GChartUtil */
$pyjs.loaded_modules['pyjamas.chart.GChartUtil'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.GChartUtil'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.GChartUtil'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.GChartUtil"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.GChartUtil>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.GChartUtil';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['GChartUtil'] = $pyjs.loaded_modules['pyjamas.chart.GChartUtil'];
	try {
		var $pow2,$pow1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_31 = new $p['int'](31);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.chart', null, false);
		$m['NAI'] = (typeof ($pow1=$constant_int_2)==typeof ($pow2=$constant_int_31) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
		$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
		$m['setBackgroundColor'] = function(uio, cssColor) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'backgroundColor', cssColor);
			return null;
		};
		$m['setBackgroundColor'].__name__ = 'setBackgroundColor';

		$m['setBackgroundColor'].__bind_type__ = 0;
		$m['setBackgroundColor'].__args__ = [null,null,['uio'],['cssColor']];
		$m['setBorderColor'] = function(uio, cssColor) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderColor', cssColor);
			return null;
		};
		$m['setBorderColor'].__name__ = 'setBorderColor';

		$m['setBorderColor'].__bind_type__ = 0;
		$m['setBorderColor'].__args__ = [null,null,['uio'],['cssColor']];
		$m['setBorderStyle'] = function(uio, cssBorderStyle) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderStyle', cssBorderStyle);
			return null;
		};
		$m['setBorderStyle'].__name__ = 'setBorderStyle';

		$m['setBorderStyle'].__bind_type__ = 0;
		$m['setBorderStyle'].__args__ = [null,null,['uio'],['cssBorderStyle']];
		$m['setBorderWidth'] = function(uio, borderWidth) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $add2,cssBorderWidth,$and1,$and2,$bool2,$bool1,$add1;
			if ((($bool2=((($bool1=$and1=!$p['op_eq'](borderWidth, $m['NAI'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?borderWidth:$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				cssBorderWidth = (typeof ($add1=$p['str'](borderWidth))==typeof ($add2='px') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			else {
				cssBorderWidth = '';
			}
			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'borderWidth', cssBorderWidth);
			return null;
		};
		$m['setBorderWidth'].__name__ = 'setBorderWidth';

		$m['setBorderWidth'].__bind_type__ = 0;
		$m['setBorderWidth'].__args__ = [null,null,['uio'],['borderWidth']];
		$m['setFontFamily'] = function(uio, cssFontFamily) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontFamily', cssFontFamily);
			return null;
		};
		$m['setFontFamily'].__name__ = 'setFontFamily';

		$m['setFontFamily'].__bind_type__ = 0;
		$m['setFontFamily'].__args__ = [null,null,['uio'],['cssFontFamily']];
		$m['setFontSize'] = function(uio, fontSize) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setIntStyleAttribute'](uio['getElement'](), 'fontSize', fontSize);
			return null;
		};
		$m['setFontSize'].__name__ = 'setFontSize';

		$m['setFontSize'].__bind_type__ = 0;
		$m['setFontSize'].__args__ = [null,null,['uio'],['fontSize']];
		$m['setFontStyle'] = function(uio, fontStyle) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontStyle', fontStyle);
			return null;
		};
		$m['setFontStyle'].__name__ = 'setFontStyle';

		$m['setFontStyle'].__bind_type__ = 0;
		$m['setFontStyle'].__args__ = [null,null,['uio'],['fontStyle']];
		$m['setFontWeight'] = function(uio, fontWeight) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'fontWeight', fontWeight);
			return null;
		};
		$m['setFontWeight'].__name__ = 'setFontWeight';

		$m['setFontWeight'].__bind_type__ = 0;
		$m['setFontWeight'].__args__ = [null,null,['uio'],['fontWeight']];
		$m['setColor'] = function(uio, cssColor) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'color', cssColor);
			return null;
		};
		$m['setColor'].__name__ = 'setColor';

		$m['setColor'].__bind_type__ = 0;
		$m['setColor'].__args__ = [null,null,['uio'],['cssColor']];
		$m['setPadding'] = function(uio, cssPadding) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'padding', cssPadding);
			return null;
		};
		$m['setPadding'].__name__ = 'setPadding';

		$m['setPadding'].__bind_type__ = 0;
		$m['setPadding'].__args__ = [null,null,['uio'],['cssPadding']];
		$m['setOverflow'] = function(uio, cssOverflow) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['DOM']['setStyleAttribute'](uio['getElement'](), 'overflow', cssOverflow);
			return null;
		};
		$m['setOverflow'].__name__ = 'setOverflow';

		$m['setOverflow'].__bind_type__ = 0;
		$m['setOverflow'].__args__ = [null,null,['uio'],['cssOverflow']];
		$m['sign'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $cmp1,$cmp2,$and3,$and4,$bool3,result,$bool4,$or1,$or2;
			result = ((($bool4=$or1=((($bool3=$and3=((($cmp1=x)===($cmp2=$constant_int_0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)):$and3)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$constant_int_1);
			return result;
		};
		$m['sign'].__name__ = 'sign';

		$m['sign'].__bind_type__ = 0;
		$m['sign'].__args__ = [null,null,['x']];
		$m['indexOfBr'] = function(s, iStart) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof iStart == 'undefined') iStart=arguments.callee.__args__[3][1];
			var $bool10,BR6,BR5,BR4,BR3,BR2,BR1,result,$bool12,$bool11,iBr6,iBr5,iBr4,iBr3,iBr2,iBr1,$bool13,$bool14,result2,result3,result1,$bool6,$bool7,$bool5,$bool8,$bool9;
			BR1 = '<br>';
			BR2 = '<BR>';
			BR3 = '<li>';
			BR4 = '<LI>';
			BR5 = '<tr>';
			BR6 = '<TR>';
			iBr1 = s['find'](BR1, iStart);
			iBr2 = s['find'](BR2, iStart);
			iBr3 = s['find'](BR3, iStart);
			iBr4 = s['find'](BR4, iStart);
			iBr5 = s['find'](BR5, iStart);
			iBr6 = s['find'](BR6, iStart);
			result1 = $constant_int_0;
			result2 = $constant_int_0;
			result3 = $constant_int_0;
			result = $constant_int_0;
			if ((($bool5=$p['op_eq']((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), iBr1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				result1 = iBr2;
			}
			else if ((($bool6=$p['op_eq']((typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), iBr2)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				result1 = iBr1;
			}
			else {
				result1 = $p['min'](iBr1, iBr2);
			}
			if ((($bool7=$p['op_eq']((typeof ($usub4=$constant_int_1)=='number'?
				-$usub4:
				$p['op_usub']($usub4)), iBr3)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				result2 = iBr4;
			}
			else if ((($bool8=$p['op_eq']((typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)), iBr4)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				result2 = iBr3;
			}
			else {
				result2 = $p['min'](iBr3, iBr4);
			}
			if ((($bool9=$p['op_eq']((typeof ($usub6=$constant_int_1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)), iBr5)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				result3 = iBr6;
			}
			else if ((($bool10=$p['op_eq']((typeof ($usub7=$constant_int_1)=='number'?
				-$usub7:
				$p['op_usub']($usub7)), iBr6)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				result3 = iBr5;
			}
			else {
				result3 = $p['min'](iBr5, iBr6);
			}
			if ((($bool11=$p['op_eq']((typeof ($usub8=$constant_int_1)=='number'?
				-$usub8:
				$p['op_usub']($usub8)), result1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				result = result2;
			}
			else if ((($bool12=$p['op_eq']((typeof ($usub9=$constant_int_1)=='number'?
				-$usub9:
				$p['op_usub']($usub9)), result2)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				result = result1;
			}
			else {
				result = $p['min'](result1, result2);
			}
			if ((($bool13=$p['op_eq']((typeof ($usub10=$constant_int_1)=='number'?
				-$usub10:
				$p['op_usub']($usub10)), result)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				result = result3;
			}
			else if ((($bool14=!$p['op_eq']((typeof ($usub11=$constant_int_1)=='number'?
				-$usub11:
				$p['op_usub']($usub11)), result3)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				result = $p['min'](result, result3);
			}
			return result;
		};
		$m['indexOfBr'].__name__ = 'indexOfBr';

		$m['indexOfBr'].__bind_type__ = 0;
		$m['indexOfBr'].__args__ = [null,null,['s'],['iStart', $constant_int_0]];
		$m['htmlWidth'] = function(sIn) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var LITERAL_PAT,$bool15,TAG_PAT,s,$len1,iBr;
			iBr = $m['indexOfBr'](sIn);
			if ((($bool15=$p['op_eq']((typeof ($usub12=$constant_int_1)=='number'?
				-$usub12:
				$p['op_usub']($usub12)), iBr)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				s = sIn;
			}
			else {
				s = $p['__getslice'](sIn, 0, iBr);
			}
			return (($len1=s) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1)))));
			LITERAL_PAT = '[&][#a-zA-Z]+[;]';
			s = s['replaceAll'](LITERAL_PAT, 'X');
			TAG_PAT = '[<][^>]+[>]';
			s = s['replaceAll'](TAG_PAT, '');
			return s['length']();
		};
		$m['htmlWidth'].__name__ = 'htmlWidth';

		$m['htmlWidth'].__bind_type__ = 0;
		$m['htmlWidth'].__args__ = [null,null,['sIn']];
		$m['htmlHeight'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add4,$bool16,$bool17,$add3,$len2,result,BR_LEN,$add5,$add6,iBr;
			BR_LEN = (($len2='<br>') === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2)))));
			iBr = $constant_int_0;
			result = $constant_int_1;
			if ((($bool16=!$p['op_eq'](null, s)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				iBr = $m['indexOfBr'](s);
				while ((($bool17=!$p['op_eq'](iBr, (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13)))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add3=result)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					iBr = $m['indexOfBr'](s, (typeof ($add5=iBr)==typeof ($add6=BR_LEN) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
				}
			}
			return result;
		};
		$m['htmlHeight'].__name__ = 'htmlHeight';

		$m['htmlHeight'].__bind_type__ = 0;
		$m['htmlHeight'].__args__ = [null,null,['s']];
		$m['withinRange'] = function(x, minLim, maxLim) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool18,$bool19,$cmp4,$cmp3,$or3,$or4,$and8,$and5,$and6,$and7,$cmp6,$bool20,$cmp5,result;
			result = ((($bool19=$or3=((($bool18=$and5=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?true:$and5)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:((($bool20=$and7=((((($cmp3=x)===($cmp4=minLim)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp5=x)===($cmp6=maxLim)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) < 1):$and7));
			return result;
		};
		$m['withinRange'].__name__ = 'withinRange';

		$m['withinRange'].__bind_type__ = 0;
		$m['withinRange'].__args__ = [null,null,['x'],['minLim'],['maxLim']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.GChartUtil */


/* end module: pyjamas.chart.GChartUtil */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart', 'pyjamas.chart.Double']
*/
