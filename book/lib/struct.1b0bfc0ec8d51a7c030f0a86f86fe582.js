/* start module: struct */
$pyjs['loaded_modules']['struct'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['struct']['__was_initialized__']) return $pyjs['loaded_modules']['struct'];
	var $m = $pyjs['loaded_modules']['struct'];
	$m['__repr__'] = function() { return '<module: struct>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'struct';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_255 = new $p['int'](255);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_1023 = new $p['int'](1023);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_127 = new $p['int'](127);
		var $constant_long_0 = new $p['long'](0);
		$m['math'] = $p['___import___']('math', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['StructError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'struct';
			$cls_definition['__md5__'] = 'b13a27c51077f5df2a7123a1545fd885';
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StructError', $p['tuple']($bases), $data);
		})();
		$m['error'] = $m['StructError'];
		$m['unpack_int'] = function(data, index, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $iter2_type,$iter2_iter,bytes,number,$iter2_idx,$iter2_nextval,b,$iter2_array;
			bytes = function(){
				var b,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$add2,$add1,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['__getslice'](data, index, $p['__op_add']($add1=index,$add2=size));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				b = $iter1_nextval['$nextval'];
				$collcomp1['append']($p['ord'](b));
			}

	return $collcomp1;}();
			if ($p['bool']($p['op_eq'](le, 'little'))) {
				bytes['reverse']();
			}
			number = $constant_long_0;
			$iter2_iter = bytes;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				b = $iter2_nextval['$nextval'];
				number = $p['op_bitor2']($p['op_bitshiftleft'](number,$constant_int_8), b);
			}
			return $p['int'](number);
		};
		$m['unpack_int']['__name__'] = 'unpack_int';

		$m['unpack_int']['__bind_type__'] = 0;
		$m['unpack_int']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
		$m['unpack_signed_int'] = function(data, index, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var number,$pow3,$pow2,$pow1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,max,$pow4,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1;
			number = $m['unpack_int'](data, index, size, le);
			max = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($mul1=size)==typeof ($mul2=$constant_int_8) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2));
			if ($p['bool'](($p['cmp'](number, $p['__op_sub']($sub3=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$p['__op_sub']($sub1=(typeof ($mul3=size)==typeof ($mul4=$constant_int_8) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$sub2=$constant_int_1)) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4)),$sub4=$constant_int_1)) == 1))) {
				number = $p['int']((typeof ($mul5=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))==typeof ($mul6=$p['__op_sub']($sub5=max,$sub6=number)) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
			}
			return number;
		};
		$m['unpack_signed_int']['__name__'] = 'unpack_signed_int';

		$m['unpack_signed_int']['__bind_type__'] = 0;
		$m['unpack_signed_int']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
		$m['unpack_float'] = function(data, index, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $sub22,$sub23,$sub20,$sub21,$sub24,number,sign,$div2,bias,$pow9,$iter4_type,$iter4_iter,$pow7,$pow5,revbytes,prec,$pow8,$sub13,$sub9,$sub8,$pow10,$sub7,$sub19,$sub18,$pow6,mantissa,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$add10,$mul9,$mul8,$mul7,$div3,$div1,$div4,b,e,$mul10,$iter4_nextval,bytes,$iter4_idx,$add6,$add7,exp,$add5,$iter4_array,$add8,$add9;
			bytes = function(){
				var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$add3,b,$iter3_iter,$add4,$iter3_type;
	$collcomp2 = $p['list']();
			$iter3_iter = $p['__getslice'](data, index, $p['__op_add']($add3=index,$add4=size));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				b = $iter3_nextval['$nextval'];
				$collcomp2['append']($p['ord'](b));
			}

	return $collcomp2;}();
			if ($p['bool'](!$p['op_eq']($p['len'](bytes), size))) {

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'Not enough data to unpack';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ($p['bool']($p['op_eq']($p['max'](bytes), $constant_int_0))) {
				return 0.0;
			}
			if ($p['bool']($p['op_eq'](le, 'big'))) {
				bytes['reverse']();
			}
			if ($p['bool']($p['op_eq'](size, $constant_int_4))) {
				bias = $constant_int_127;
				exp = $constant_int_8;
				prec = $constant_int_23;
			}
			else {
				bias = $constant_int_1023;
				exp = $constant_int_11;
				prec = $constant_int_52;
			}
			mantissa = $p['long']($p['op_bitand2'](bytes['__getitem__']($p['__op_sub']($sub7=size,$sub8=$constant_int_2)), $p['__op_sub']($sub11=(typeof ($pow5=$constant_int_2)==typeof ($pow6=$p['__op_sub']($sub9=$constant_int_15,$sub10=exp)) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)),$sub12=$constant_int_1)));
			revbytes = bytes;
			revbytes['reverse']();
			$iter4_iter = $p['__getslice'](revbytes, $constant_int_3, null);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				b = $iter4_nextval['$nextval'];
				mantissa = $p['op_bitor2']($p['op_bitshiftleft'](mantissa,$constant_int_8), b);
			}
			mantissa = $p['__op_add']($add5=$constant_int_1,$add6=(typeof ($div1=(typeof ($mul7=1.0)==typeof ($mul8=mantissa) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($div2=(typeof ($pow7=$constant_int_2)==typeof ($pow8=prec) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			mantissa = (typeof ($div3=mantissa)==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			e = $p['op_bitshiftleft']($p['op_bitand2'](bytes['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), $constant_int_127),$p['__op_sub']($sub13=exp,$sub14=$constant_int_7));
			e = $p['__op_add']($add7=e,$add8=$p['op_bitand2']($p['op_bitshiftright'](bytes['__getitem__']($p['__op_sub']($sub15=size,$sub16=$constant_int_2)),$p['__op_sub']($sub17=$constant_int_15,$sub18=exp)), $p['__op_sub']($sub21=(typeof ($pow9=$constant_int_2)==typeof ($pow10=$p['__op_sub']($sub19=exp,$sub20=$constant_int_7)) && typeof $pow9=='number'?
				Math['pow']($pow9,$pow10):
				$p['op_pow']($pow9,$pow10)),$sub22=$constant_int_1)));
			e = $p['__op_sub']($sub23=e,$sub24=bias);
			e = $p['__op_add']($add9=e,$add10=$constant_int_1);
			sign = $p['op_bitand2'](bytes['__getitem__']((typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))), $constant_int_128);
			number = $m['math']['ldexp'](mantissa, e);
			if ($p['bool'](sign)) {
				number = (typeof ($mul9=number)==typeof ($mul10=(typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
			}
			return number;
		};
		$m['unpack_float']['__name__'] = 'unpack_float';

		$m['unpack_float']['__bind_type__'] = 0;
		$m['unpack_float']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
		$m['unpack_char'] = function(data, index, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $add11,$add12;
			return $p['__getslice'](data, index, $p['__op_add']($add11=index,$add12=size));
		};
		$m['unpack_char']['__name__'] = 'unpack_char';

		$m['unpack_char']['__bind_type__'] = 0;
		$m['unpack_char']['__args__'] = [null,null,['data'],['index'],['size'],['le']];
		$m['pack_int'] = function(number, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter5_nextval,$iter5_idx,$iter5_array,res,i,$iter5_iter,$iter5_type,x;
			x = number;
			res = $p['list']([]);
			$iter5_iter = $p['range'](size);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				res['append']($p['chr']($p['op_bitand2'](x, $constant_int_255)));
				x = $p['op_bitshiftright'](x,$constant_int_8);
			}
			if ($p['bool']($p['op_eq'](le, 'big'))) {
				res['reverse']();
			}
			return ''['join'](res);
		};
		$m['pack_int']['__name__'] = 'pack_int';

		$m['pack_int']['__bind_type__'] = 0;
		$m['pack_int']['__args__'] = [null,null,['number'],['size'],['le']];
		$m['pack_signed_int'] = function(number, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $sub29,$sub30,$mul15,$sub26,$mul12,$mul11,$sub25,$mul16,$sub28,$or2,$sub27,$mul14,$or1,$mul13,$pow14,$pow13,$pow12,$pow11;
			if ($p['bool'](!$p['bool']($p['isinstance'](number, $p['tuple']([$p['int'], $p['long']]))))) {

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ($p['bool'](($p['bool']($or1=($p['cmp'](number, $p['__op_sub']($sub27=(typeof ($pow11=$constant_int_2)==typeof ($pow12=$p['__op_sub']($sub25=(typeof ($mul11=$constant_int_8)==typeof ($mul12=size) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)),$sub26=$constant_int_1)) && typeof $pow11=='number'?
				Math['pow']($pow11,$pow12):
				$p['op_pow']($pow11,$pow12)),$sub28=$constant_int_1)) == 1))?$or1:($p['cmp'](number, (typeof ($mul15=(typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))==typeof ($mul16=(typeof ($pow13=$constant_int_2)==typeof ($pow14=$p['__op_sub']($sub29=(typeof ($mul13=$constant_int_8)==typeof ($mul14=size) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$sub30=$constant_int_1)) && typeof $pow13=='number'?
				Math['pow']($pow13,$pow14):
				$p['op_pow']($pow13,$pow14))) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))) == -1)))) {

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m['OverflowError']:OverflowError);
				var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return $m['pack_int'](number, size, le);
		};
		$m['pack_signed_int']['__name__'] = 'pack_signed_int';

		$m['pack_signed_int']['__bind_type__'] = 0;
		$m['pack_signed_int']['__args__'] = [null,null,['number'],['size'],['le']];
		$m['pack_unsigned_int'] = function(number, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $mul17,$sub31,$mul18,$sub32,$pow16,$pow15;
			if ($p['bool'](!$p['bool']($p['isinstance'](number, $p['tuple']([$p['int'], $p['long']]))))) {

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ($p['bool'](($p['cmp'](number, $constant_int_0) == -1))) {

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = "can't convert negative long to unsigned";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			if ($p['bool'](($p['cmp'](number, $p['__op_sub']($sub31=(typeof ($pow15=$constant_int_2)==typeof ($pow16=(typeof ($mul17=$constant_int_8)==typeof ($mul18=size) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))) && typeof $pow15=='number'?
				Math['pow']($pow15,$pow16):
				$p['op_pow']($pow15,$pow16)),$sub32=$constant_int_1)) == 1))) {

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m['OverflowError']:OverflowError);
				var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return $m['pack_int'](number, size, le);
		};
		$m['pack_unsigned_int']['__name__'] = 'pack_unsigned_int';

		$m['pack_unsigned_int']['__bind_type__'] = 0;
		$m['pack_unsigned_int']['__args__'] = [null,null,['number'],['size'],['le']];
		$m['pack_char'] = function($$char, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $$char;
			return $p['str']($$char);
		};
		$m['pack_char']['__name__'] = 'pack_char';

		$m['pack_char']['__bind_type__'] = 0;
		$m['pack_char']['__args__'] = [null,null,['$$char'],['size'],['le']];
		$m['sane_float'] = function(man, e) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return true;
		};
		$m['sane_float']['__name__'] = 'sane_float';

		$m['sane_float']['__bind_type__'] = 0;
		$m['sane_float']['__args__'] = [null,null,['man'],['e']];
		$m['pack_float'] = function(number, size, le) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter6_type,$pow21,sign,$sub48,$sub40,bias,$sub47,$pow19,$pow18,$pow17,$sub41,$iter6_iter,$sub43,$sub44,$sub42,$sub46,$sub37,res,$sub50,prec,$sub45,$sub39,$sub38,$mul24,$iter6_nextval,$mul22,$mul23,$mul20,$mul21,$sub33,$sub35,$sub34,$iter6_idx,$sub36,mantissa,$and1,$and2,$add14,$add15,$add16,$add17,$pow22,$pow20,$add13,$add18,man,e,$sub49,i,$iter6_array,$mul19,exp;
			if ($p['bool'](($p['cmp'](number, $constant_int_0) == -1))) {
				sign = $constant_int_1;
				number = (typeof ($mul19=number)==typeof ($mul20=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20));
			}
			else if ($p['bool']($p['op_eq'](number, 0.0))) {
				return ''['ljust'](size, '\x00');
			}
			else {
				sign = $constant_int_0;
			}
			if ($p['bool']($p['op_eq'](size, $constant_int_4))) {
				bias = $constant_int_127;
				exp = $constant_int_8;
				prec = $constant_int_23;
			}
			else {
				bias = $constant_int_1023;
				exp = $constant_int_11;
				prec = $constant_int_52;
			}
			var $tupleassign1 = $p['__ass_unpack']($m['math']['frexp'](number), 2, null);
			man = $tupleassign1[0];
			e = $tupleassign1[1];
			if ($p['bool'](($p['bool']($and1=($p['cmp'](0.5, man) < 1))?($p['cmp'](man, 1.0) == -1):$and1))) {
				man = (typeof ($mul21=man)==typeof ($mul22=$constant_int_2) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
				e = $p['__op_sub']($sub33=e,$sub34=$constant_int_1);
			}
			if ($p['bool']($m['sane_float'](man, e))) {
				man = $p['__op_sub']($sub35=man,$sub36=$constant_int_1);
				e = $p['__op_add']($add13=e,$add14=bias);
				mantissa = $p['int']($p['__op_add']($add15=(typeof ($mul23=(typeof ($pow17=$constant_int_2)==typeof ($pow18=prec) && typeof $pow17=='number'?
					Math['pow']($pow17,$pow18):
					$p['op_pow']($pow17,$pow18)))==typeof ($mul24=man) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)),$add16=0.5));
				res = $p['list']([]);
				if ($p['bool']($p['op_bitshiftright'](mantissa,prec))) {
					mantissa = $constant_int_0;
					e = $p['__op_add']($add17=e,$add18=$constant_int_1);
				}
				$iter6_iter = $p['range']($p['__op_sub']($sub37=size,$sub38=$constant_int_2));
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					i = $iter6_nextval['$nextval'];
					res['extend']($p['list']([$p['op_bitand2'](mantissa, $constant_int_255)]));
					mantissa = $p['op_bitshiftright'](mantissa,$constant_int_8);
				}
				res['extend']($p['list']([$p['op_bitor2']($p['op_bitand2'](mantissa, $p['__op_sub']($sub41=(typeof ($pow19=$constant_int_2)==typeof ($pow20=$p['__op_sub']($sub39=$constant_int_15,$sub40=exp)) && typeof $pow19=='number'?
					Math['pow']($pow19,$pow20):
					$p['op_pow']($pow19,$pow20)),$sub42=$constant_int_1)), $p['op_bitshiftleft']($p['op_bitand2'](e, $p['__op_sub']($sub45=(typeof ($pow21=$constant_int_2)==typeof ($pow22=$p['__op_sub']($sub43=exp,$sub44=$constant_int_7)) && typeof $pow21=='number'?
					Math['pow']($pow21,$pow22):
					$p['op_pow']($pow21,$pow22)),$sub46=$constant_int_1)),$p['__op_sub']($sub47=$constant_int_15,$sub48=exp)))]));
				res['extend']($p['list']([$p['op_bitor2']($p['op_bitshiftleft'](sign,$constant_int_7), $p['op_bitshiftright'](e,$p['__op_sub']($sub49=exp,$sub50=$constant_int_7)))]));
				if ($p['bool']($p['op_eq'](le, 'big'))) {
					res['reverse']();
				}
				return ''['join'](function(){
					var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type;
	$collcomp3 = $p['list']();
				$iter7_iter = res;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					x = $iter7_nextval['$nextval'];
					$collcomp3['append']($p['chr'](x));
				}

	return $collcomp3;}());
			}
			return null;
		};
		$m['pack_float']['__name__'] = 'pack_float';

		$m['pack_float']['__bind_type__'] = 0;
		$m['pack_float']['__args__'] = [null,null,['number'],['size'],['le']];
		$m['big_endian_format'] = $p['dict']([['x', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['b', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['B', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['c', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_char']], ['unpack', $m['unpack_char']]])], ['s', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['p', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['h', $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['H', $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['i', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['I', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['l', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['L', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['q', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['Q', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['f', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])], ['d', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])]]);
		$m['$$default'] = $m['big_endian_format'];
		$m['formatmode'] = $p['dict']([['<', $p['tuple']([$m['$$default'], 'little'])], ['>', $p['tuple']([$m['$$default'], 'big'])], ['!', $p['tuple']([$m['$$default'], 'big'])], ['=', $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')])], ['@', $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')])]]);
		$m['getmode'] = function(fmt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var index,$pyjs_try_err,endianness,formatdef;
			try {
				var $tupleassign2 = $p['__ass_unpack']($m['formatmode']['__getitem__'](fmt['__getitem__']($constant_int_0)), 2, null);
				formatdef = $tupleassign2[0];
				endianness = $tupleassign2[1];
				index = $constant_int_1;
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					var $tupleassign3 = $p['__ass_unpack']($m['formatmode']['__getitem__']('@'), 2, null);
					formatdef = $tupleassign3[0];
					endianness = $tupleassign3[1];
					index = $constant_int_0;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return $p['tuple']([formatdef, endianness, index]);
		};
		$m['getmode']['__name__'] = 'getmode';

		$m['getmode']['__bind_type__'] = 0;
		$m['getmode']['__args__'] = [null,null,['fmt']];
		$m['getNum'] = function(fmt, i) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $add22,cur,$add20,$and3,$and4,$add21,num,$mul26,$mul25,$add19;
			num = null;
			cur = fmt['__getitem__'](i);
			while ($p['bool'](($p['bool']($and3=($p['cmp']('0', cur) < 1))?($p['cmp'](cur, '9') < 1):$and3))) {
				if ($p['bool']($p['op_eq'](num, null))) {
					num = $p['int'](cur);
				}
				else {
					num = $p['__op_add']($add19=(typeof ($mul25=$constant_int_10)==typeof ($mul26=num) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)),$add20=$p['int'](cur));
				}
				i = $p['__op_add']($add21=i,$add22=$constant_int_1);
				cur = fmt['__getitem__'](i);
			}
			return $p['tuple']([num, i]);
		};
		$m['getNum']['__name__'] = 'getNum';

		$m['getNum']['__bind_type__'] = 0;
		$m['getNum']['__args__'] = [null,null,['fmt'],['i']];
		$m['calcsize'] = function(fmt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add28,cur,format,i,$mul28,$add25,$pyjs_try_err,$add27,$add24,num,result,endianness,$mul27,$add26,$add23,formatdef;
			var $tupleassign4 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign4[0];
			endianness = $tupleassign4[1];
			i = $tupleassign4[2];
			num = $constant_int_0;
			result = $constant_int_0;
			while ($p['bool'](($p['cmp'](i, $p['len'](fmt)) == -1))) {
				var $tupleassign5 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign5[0];
				i = $tupleassign5[1];
				cur = fmt['__getitem__'](i);
				try {
					format = formatdef['__getitem__'](cur);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ($p['bool'](!$p['op_eq'](num, null))) {
					result = $p['__op_add']($add23=result,$add24=(typeof ($mul27=num)==typeof ($mul28=format['__getitem__']('size')) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28)));
				}
				else {
					result = $p['__op_add']($add25=result,$add26=format['__getitem__']('size'));
				}
				num = $constant_int_0;
				i = $p['__op_add']($add27=i,$add28=$constant_int_1);
			}
			return result;
		};
		$m['calcsize']['__name__'] = 'calcsize';

		$m['calcsize']['__bind_type__'] = 0;
		$m['calcsize']['__args__'] = [null,null,['fmt']];
		$m['pack'] = function(fmt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			var $iter8_array,$iter8_iter,num,result,$iter8_idx,$sub64,$sub62,$sub63,$sub60,$sub61,$add29,cur,$add40,$pyjs_try_err,endianness,$$var,$sub57,$sub56,$sub55,$sub54,$sub53,$sub52,$sub51,format,$iter8_type,$sub59,$sub58,padding,$add32,$iter8_nextval,formatdef,$add38,$add39,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,n_args,num_s;
			var $tupleassign6 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign6[0];
			endianness = $tupleassign6[1];
			i = $tupleassign6[2];
			args = $p['list'](args);
			n_args = $p['len'](args);
			result = $p['list']([]);
			while ($p['bool'](($p['cmp'](i, $p['len'](fmt)) == -1))) {
				var $tupleassign7 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign7[0];
				i = $tupleassign7[1];
				cur = fmt['__getitem__'](i);
				try {
					format = formatdef['__getitem__'](cur);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ($p['bool']($p['op_eq'](num, null))) {
					num_s = $constant_int_0;
					num = $constant_int_1;
				}
				else {
					num_s = num;
				}
				if ($p['bool']($p['op_eq'](cur, 'x'))) {
					result['extend']($p['list']([''['ljust'](num, '\x00')]));
				}
				else if ($p['bool']($p['op_eq'](cur, 's'))) {
					if ($p['bool']($p['isinstance'](args['__getitem__']($constant_int_0), $p['str']))) {
						padding = $p['__op_sub']($sub51=num,$sub52=$p['len'](args['__getitem__']($constant_int_0)));
						result['extend']($p['list']([$p['__op_add']($add29=$p['__getslice'](args['__getitem__']($constant_int_0), 0, num),$add30=''['ljust'](padding, '\x00'))]));
						args['pop']($constant_int_0);
					}
					else {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'arg for string format not a string';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
				}
				else if ($p['bool']($p['op_eq'](cur, 'p'))) {
					if ($p['bool']($p['isinstance'](args['__getitem__']($constant_int_0), $p['str']))) {
						padding = $p['__op_sub']($sub55=$p['__op_sub']($sub53=num,$sub54=$p['len'](args['__getitem__']($constant_int_0))),$sub56=$constant_int_1);
						if ($p['bool'](($p['cmp'](padding, $constant_int_0) == 1))) {
							result['extend']($p['list']([$p['__op_add']($add33=$p['__op_add']($add31=$p['chr']($p['len'](args['__getitem__']($constant_int_0))),$add32=$p['__getslice'](args['__getitem__']($constant_int_0), 0, $p['__op_sub']($sub57=num,$sub58=$constant_int_1))),$add34=''['ljust'](padding, '\x00'))]));
						}
						else {
							if ($p['bool'](($p['cmp'](num, $constant_int_255) == -1))) {
								result['extend']($p['list']([$p['__op_add']($add35=$p['chr']($p['__op_sub']($sub59=num,$sub60=$constant_int_1)),$add36=$p['__getslice'](args['__getitem__']($constant_int_0), 0, $p['__op_sub']($sub61=num,$sub62=$constant_int_1)))]));
							}
							else {
								result['extend']($p['list']([$p['__op_add']($add37=$p['chr']($constant_int_255),$add38=$p['__getslice'](args['__getitem__']($constant_int_0), 0, $p['__op_sub']($sub63=num,$sub64=$constant_int_1)))]));
							}
						}
						args['pop']($constant_int_0);
					}
					else {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'arg for string format not a string';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
				}
				else {
					if ($p['bool'](($p['cmp']($p['len'](args), num) == -1))) {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'insufficient arguments to pack';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					$iter8_iter = $p['__getslice'](args, 0, num);
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						$$var = $iter8_nextval['$nextval'];
						result['extend']($p['list']([format['__getitem__']('pack')($$var, format['__getitem__']('size'), endianness)]));
					}
					args = $p['__getslice'](args, num, null);
				}
				num = null;
				i = $p['__op_add']($add39=i,$add40=$constant_int_1);
			}
			if ($p['bool'](!$p['op_eq']($p['len'](args), $constant_int_0))) {

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'too many arguments for pack format';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return ''['join'](result);
		};
		$m['pack']['__name__'] = 'pack';

		$m['pack']['__bind_type__'] = 0;
		$m['pack']['__args__'] = ['args',null,['fmt']];
		$m['unpack'] = function(fmt, data) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter9_iter,$iter9_idx,num,result,$sub66,$sub65,$iter9_array,cur,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$pyjs_try_err,endianness,$iter9_nextval,$iter9_type,format,formatdef,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,i,j,n,$add58,length,$add45;
			var $tupleassign8 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign8[0];
			endianness = $tupleassign8[1];
			i = $tupleassign8[2];
			j = $constant_int_0;
			num = $constant_int_0;
			result = $p['list']([]);
			length = $m['calcsize'](fmt);
			if ($p['bool'](!$p['op_eq'](length, $p['len'](data)))) {

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'unpack str size does not match format';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			while ($p['bool'](($p['cmp'](i, $p['len'](fmt)) == -1))) {
				var $tupleassign9 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign9[0];
				i = $tupleassign9[1];
				cur = fmt['__getitem__'](i);
				i = $p['__op_add']($add41=i,$add42=$constant_int_1);
				try {
					format = formatdef['__getitem__'](cur);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ($p['bool'](!$p['bool'](num))) {
					num = $constant_int_1;
				}
				if ($p['bool']($p['op_eq'](cur, 'x'))) {
					j = $p['__op_add']($add43=j,$add44=num);
				}
				else if ($p['bool']($p['op_eq'](cur, 's'))) {
					result['append']($p['__getslice'](data, j, $p['__op_add']($add45=j,$add46=num)));
					j = $p['__op_add']($add47=j,$add48=num);
				}
				else if ($p['bool']($p['op_eq'](cur, 'p'))) {
					n = $p['ord'](data['__getitem__'](j));
					if ($p['bool'](((($p['cmp'](n, num))|1) == 1))) {
						n = $p['__op_sub']($sub65=num,$sub66=$constant_int_1);
					}
					result['append']($p['__getslice'](data, $p['__op_add']($add49=j,$add50=$constant_int_1), $p['__op_add']($add53=$p['__op_add']($add51=j,$add52=n),$add54=$constant_int_1)));
					j = $p['__op_add']($add55=j,$add56=num);
				}
				else {
					$iter9_iter = $p['range'](num);
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						n = $iter9_nextval['$nextval'];
						result['extend']($p['list']([format['__getitem__']('unpack')(data, j, format['__getitem__']('size'), endianness)]));
						j = $p['__op_add']($add57=j,$add58=format['__getitem__']('size'));
					}
				}
			}
			return $p['tuple'](result);
		};
		$m['unpack']['__name__'] = 'unpack';

		$m['unpack']['__bind_type__'] = 0;
		$m['unpack']['__args__'] = [null,null,['fmt'],['data']];
		$m['pack_into'] = function(fmt, buf, offset) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']));


			throw ($p['NotImplementedError']('pack_into'));
			return null;
		};
		$m['pack_into']['__name__'] = 'pack_into';

		$m['pack_into']['__bind_type__'] = 0;
		$m['pack_into']['__args__'] = ['args',null,['fmt'],['buf'],['offset']];
		$m['unpack_from'] = function(fmt, buf, offset) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];

			throw ($p['NotImplementedError']('unpack_from'));
			return null;
		};
		$m['unpack_from']['__name__'] = 'unpack_from';

		$m['unpack_from']['__bind_type__'] = 0;
		$m['unpack_from']['__args__'] = [null,null,['fmt'],['buf'],['offset', $constant_int_0]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end struct */


/* end module: struct */


/*
PYJS_DEPS: ['math', 'sys']
*/
