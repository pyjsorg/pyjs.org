/* start module: pyjamas.Canvas.PathElement */
$pyjs.loaded_modules['pyjamas.Canvas.PathElement'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Canvas.PathElement'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Canvas.PathElement'];
	if(typeof $pyjs.loaded_modules['pyjamas.Canvas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.Canvas'].__was_initialized__) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Canvas.PathElement"];
	$m.__repr__ = function() { return "<module: pyjamas.Canvas.PathElement>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.PathElement';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.Canvas']['PathElement'] = $pyjs.loaded_modules['pyjamas.Canvas.PathElement'];
	try {

		var $constant_int_10 = new $p['int'](10);
		var $constant_int_5 = new $p['int'](5);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$m['ARC'] = ' ar';
		$m['CLOSE'] = ' x';
		$m['END'] = ' e';
		$m['LINETO'] = ' l';
		$m['MOVETO'] = ' m';
		$m['CUBIC'] = ' c';
		$m['arc'] = function(x, y, radius, startAngle, endAngle, antiClockwise, canvas) {
			if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length);
			var $and1,$and2,$bool2,$bool3,$bool1,$bool4,$bool5,matrix,startX,startY,$sub12,$sub11,$sub10,realEndAngle,$add50,$add51,$add52,$mul14,$mul13,$mul12,$mul11,$mul10,endY,endX,context,cy,cx,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,ar,$add29,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,realStartAngle,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,arcX,arcY;
			matrix = $p['getattr'](canvas, 'matrix');
			context = $p['getattr'](canvas, 'context');
			if ((($bool2=!(($bool1=antiClockwise) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				realStartAngle = endAngle;
				realEndAngle = startAngle;
			}
			else {
				realStartAngle = startAngle;
				realEndAngle = endAngle;
			}
			ar = (typeof ($mul1=radius)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			startX = (typeof ($sub1=(typeof ($add1=x)==typeof ($add2=(typeof ($mul3=$m['math']['cos'](realStartAngle))==typeof ($mul4=ar) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($sub2=$constant_int_5) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			startY = (typeof ($sub3=(typeof ($add3=y)==typeof ($add4=(typeof ($mul5=$m['math']['sin'](realStartAngle))==typeof ($mul6=ar) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($sub4=$constant_int_5) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			endX = (typeof ($sub5=(typeof ($add5=x)==typeof ($add6=(typeof ($mul7=$m['math']['cos'](realEndAngle))==typeof ($mul8=ar) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))==typeof ($sub6=$constant_int_5) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6));
			endY = (typeof ($sub7=(typeof ($add7=y)==typeof ($add8=(typeof ($mul9=$m['math']['sin'](realEndAngle))==typeof ($mul10=ar) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($sub8=$constant_int_5) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8));
			if ((($bool5=((($bool3=$and1=$p['op_eq'](startX, endX)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool4=antiClockwise) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				startX = (typeof ($add9=startX)==typeof ($add10=0.125) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			cx = canvas['getCoordX'](matrix, x, y);
			cy = canvas['getCoordY'](matrix, x, y);
			arcX = (typeof ($mul11=$p['getattr'](context, 'arcScaleX'))==typeof ($mul12=ar) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12));
			arcY = (typeof ($mul13=$p['getattr'](context, 'arcScaleY'))==typeof ($mul14=ar) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14));
			return (typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41=(typeof ($add39=(typeof ($add37=(typeof ($add35=(typeof ($add31=(typeof ($add29=(typeof ($add23=(typeof ($add21=(typeof ($add15=(typeof ($add13=$m['ARC'])==typeof ($add14=$p['str']($p['int']($m['math']['floor']((typeof ($add11=(typeof ($sub9=cx)==typeof ($sub10=arcX) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10)))==typeof ($add12=0.5) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14)))==typeof ($add16=',') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)))==typeof ($add22=$p['str']($p['int']($m['math']['floor']((typeof ($add19=(typeof ($add17=cy)==typeof ($add18=arcY) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)))==typeof ($add20=0.5) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)))))) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22)))==typeof ($add24=' ') && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24)))==typeof ($add30=$p['str']($p['int']($m['math']['floor']((typeof ($add27=(typeof ($add25=cx)==typeof ($add26=arcX) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26)))==typeof ($add28=0.5) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28)))))) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)))==typeof ($add32=',') && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32)))==typeof ($add36=$p['str']($p['int']($m['math']['floor']((typeof ($add33=(typeof ($sub11=cy)==typeof ($sub12=arcY) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12)))==typeof ($add34=0.5) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34)))))) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36)))==typeof ($add38=' ') && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)))==typeof ($add40=$p['str'](canvas['getCoordX'](matrix, startX, startY))) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40)))==typeof ($add42=',') && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42)))==typeof ($add44=$p['str'](canvas['getCoordY'](matrix, startX, startY))) && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44)))==typeof ($add46=' ') && (typeof $add45=='number'||typeof $add45=='string')?
				$add45+$add46:
				$p['op_add']($add45,$add46)))==typeof ($add48=$p['str'](canvas['getCoordX'](matrix, endX, endY))) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				$p['op_add']($add47,$add48)))==typeof ($add50=',') && (typeof $add49=='number'||typeof $add49=='string')?
				$add49+$add50:
				$p['op_add']($add49,$add50)))==typeof ($add52=$p['str'](canvas['getCoordY'](matrix, endX, endY))) && (typeof $add51=='number'||typeof $add51=='string')?
				$add51+$add52:
				$p['op_add']($add51,$add52));
		};
		$m['arc'].__name__ = 'arc';

		$m['arc'].__bind_type__ = 0;
		$m['arc'].__args__ = [null,null,['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise'],['canvas']];
		$m['bezierCurveTo'] = function(c1x, c1y, c2x, c2y, x, y, canvas) {
			if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length);
			var $add65,$add64,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$add73,$add67,$add72,matrix,$add70,$add74,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add71;
			matrix = $p['getattr'](canvas, 'matrix');
			return (typeof ($add73=(typeof ($add71=(typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=$m['CUBIC'])==typeof ($add54=$p['str'](canvas['getCoordX'](matrix, c1x, c1y))) && (typeof $add53=='number'||typeof $add53=='string')?
				$add53+$add54:
				$p['op_add']($add53,$add54)))==typeof ($add56=',') && (typeof $add55=='number'||typeof $add55=='string')?
				$add55+$add56:
				$p['op_add']($add55,$add56)))==typeof ($add58=$p['str'](canvas['getCoordY'](matrix, c1x, c1y))) && (typeof $add57=='number'||typeof $add57=='string')?
				$add57+$add58:
				$p['op_add']($add57,$add58)))==typeof ($add60=',') && (typeof $add59=='number'||typeof $add59=='string')?
				$add59+$add60:
				$p['op_add']($add59,$add60)))==typeof ($add62=$p['str'](canvas['getCoordX'](matrix, c2x, c2y))) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$p['op_add']($add61,$add62)))==typeof ($add64=',') && (typeof $add63=='number'||typeof $add63=='string')?
				$add63+$add64:
				$p['op_add']($add63,$add64)))==typeof ($add66=$p['str'](canvas['getCoordY'](matrix, c2x, c2y))) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				$p['op_add']($add65,$add66)))==typeof ($add68=',') && (typeof $add67=='number'||typeof $add67=='string')?
				$add67+$add68:
				$p['op_add']($add67,$add68)))==typeof ($add70=$p['str'](canvas['getCoordX'](matrix, x, y))) && (typeof $add69=='number'||typeof $add69=='string')?
				$add69+$add70:
				$p['op_add']($add69,$add70)))==typeof ($add72=',') && (typeof $add71=='number'||typeof $add71=='string')?
				$add71+$add72:
				$p['op_add']($add71,$add72)))==typeof ($add74=$p['str'](canvas['getCoordY'](matrix, x, y))) && (typeof $add73=='number'||typeof $add73=='string')?
				$add73+$add74:
				$p['op_add']($add73,$add74));
		};
		$m['bezierCurveTo'].__name__ = 'bezierCurveTo';

		$m['bezierCurveTo'].__bind_type__ = 0;
		$m['bezierCurveTo'].__args__ = [null,null,['c1x'],['c1y'],['c2x'],['c2y'],['x'],['y'],['canvas']];
		$m['closePath'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['CLOSE'];
		};
		$m['closePath'].__name__ = 'closePath';

		$m['closePath'].__bind_type__ = 0;
		$m['closePath'].__args__ = [null,null];
		$m['lineTo'] = function(x, y, canvas) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $add76,$add77,$add75,matrix,$add80,$add78,$add79;
			matrix = $p['getattr'](canvas, 'matrix');
			return (typeof ($add79=(typeof ($add77=(typeof ($add75=$m['LINETO'])==typeof ($add76=$p['str'](canvas['getCoordX'](matrix, x, y))) && (typeof $add75=='number'||typeof $add75=='string')?
				$add75+$add76:
				$p['op_add']($add75,$add76)))==typeof ($add78=',') && (typeof $add77=='number'||typeof $add77=='string')?
				$add77+$add78:
				$p['op_add']($add77,$add78)))==typeof ($add80=$p['str'](canvas['getCoordY'](matrix, x, y))) && (typeof $add79=='number'||typeof $add79=='string')?
				$add79+$add80:
				$p['op_add']($add79,$add80));
		};
		$m['lineTo'].__name__ = 'lineTo';

		$m['lineTo'].__bind_type__ = 0;
		$m['lineTo'].__args__ = [null,null,['x'],['y'],['canvas']];
		$m['moveTo'] = function(x, y, canvas) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var matrix,$add83,$add82,$add81,$add86,$add85,$add84;
			matrix = $p['getattr'](canvas, 'matrix');
			return (typeof ($add85=(typeof ($add83=(typeof ($add81=$m['MOVETO'])==typeof ($add82=$p['str'](canvas['getCoordX'](matrix, x, y))) && (typeof $add81=='number'||typeof $add81=='string')?
				$add81+$add82:
				$p['op_add']($add81,$add82)))==typeof ($add84=',') && (typeof $add83=='number'||typeof $add83=='string')?
				$add83+$add84:
				$p['op_add']($add83,$add84)))==typeof ($add86=$p['str'](canvas['getCoordY'](matrix, x, y))) && (typeof $add85=='number'||typeof $add85=='string')?
				$add85+$add86:
				$p['op_add']($add85,$add86));
		};
		$m['moveTo'].__name__ = 'moveTo';

		$m['moveTo'].__bind_type__ = 0;
		$m['moveTo'].__args__ = [null,null,['x'],['y'],['canvas']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.PathElement */


/* end module: pyjamas.Canvas.PathElement */


/*
PYJS_DEPS: ['math']
*/
