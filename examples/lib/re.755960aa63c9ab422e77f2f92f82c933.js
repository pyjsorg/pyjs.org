/* start module: re */
$pyjs['loaded_modules']['re'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['re']['__was_initialized__']) return $pyjs['loaded_modules']['re'];
	var $m = $pyjs['loaded_modules']['re'];
	$m['__repr__'] = function() { return '<module: re>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 're';
	$m['__name__'] = __mod_name__;
	try {
		var $iter1_iter,$iter1_array,$iter1_nextval,$iter1_type,$iter1_idx;
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_100 = new $p['int'](100);
		$m['$assign1'] = $constant_int_1;
		$m['I'] = $m['$assign1'];
		$m['IGNORECASE'] = $m['$assign1'];
		$m['$assign2'] = $constant_int_2;
		$m['L'] = $m['$assign2'];
		$m['LOCALE'] = $m['$assign2'];
		$m['$assign3'] = $constant_int_4;
		$m['U'] = $m['$assign3'];
		$m['UNICODE'] = $m['$assign3'];
		$m['$assign4'] = $constant_int_8;
		$m['M'] = $m['$assign4'];
		$m['MULTILINE'] = $m['$assign4'];
		$m['$assign5'] = $constant_int_16;
		$m['S'] = $m['$assign5'];
		$m['DOTALL'] = $m['$assign5'];
		$m['$assign6'] = $constant_int_32;
		$m['X'] = $m['$assign6'];
		$m['VERBOSE'] = $m['$assign6'];
		$m['match'] = function(pattern, string, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

			return $m['compile'](pattern, flags)['match'](string);
		};
		$m['match']['__name__'] = 'match';

		$m['match']['__bind_type__'] = 0;
		$m['match']['__args__'] = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$m['search'] = function(pattern, string, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

			return $m['compile'](pattern, flags)['search'](string);
		};
		$m['search']['__name__'] = 'search';

		$m['search']['__bind_type__'] = 0;
		$m['search']['__args__'] = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$m['sub'] = function(pattern, repl, string, count) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

			return $m['compile'](pattern, $constant_int_0)['sub'](repl, string, count);
		};
		$m['sub']['__name__'] = 'sub';

		$m['sub']['__bind_type__'] = 0;
		$m['sub']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', $constant_int_0]];
		$m['subn'] = function(pattern, repl, string, count) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

			return $m['compile'](pattern, $constant_int_0)['subn'](repl, string, count);
		};
		$m['subn']['__name__'] = 'subn';

		$m['subn']['__bind_type__'] = 0;
		$m['subn']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', $constant_int_0]];
		$m['$$split'] = function(pattern, string, maxsplit) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];

			return $m['compile'](pattern, $constant_int_0)['$$split'](string, maxsplit);
		};
		$m['$$split']['__name__'] = 'split';

		$m['$$split']['__bind_type__'] = 0;
		$m['$$split']['__args__'] = [null,null,['pattern'],['string'],['maxsplit', $constant_int_0]];
		$m['findall'] = function(pattern, string, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

			return $m['compile'](pattern, flags)['findall'](string);
		};
		$m['findall']['__name__'] = 'findall';

		$m['findall']['__bind_type__'] = 0;
		$m['findall']['__args__'] = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$m['finditer'] = function(pattern, string, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

			return $m['compile'](pattern, flags)['finditer'](string);
		};
		$m['finditer']['__name__'] = 'finditer';

		$m['finditer']['__bind_type__'] = 0;
		$m['finditer']['__args__'] = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$m['compile'] = function(pattern, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

			return (typeof SRE_Pattern == "undefined"?$m['SRE_Pattern']:SRE_Pattern)(pattern, flags, (typeof _compile == "undefined"?$m['_compile']:_compile)(pattern, flags));
		};
		$m['compile']['__name__'] = 'compile';

		$m['compile']['__bind_type__'] = 0;
		$m['compile']['__args__'] = [null,null,['pattern'],['flags', $constant_int_0]];
		$m['purge'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['_cache']['clear']();
			$m['_cache_repl']['clear']();
			return null;
		};
		$m['purge']['__name__'] = 'purge';

		$m['purge']['__bind_type__'] = 0;
		$m['purge']['__args__'] = [null,null];
		$m['template'] = function(pattern, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

			throw ($p['NotImplementedError']('re.template'));
			return null;
		};
		$m['template']['__name__'] = 'template';

		$m['template']['__bind_type__'] = 0;
		$m['template']['__args__'] = [null,null,['pattern'],['flags', $constant_int_0]];
		$m['_alphanum'] = $p['dict']([]);
		$iter1_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			$m['c'] = $iter1_nextval;
			$m['_alphanum']['__setitem__']($m['c'], $constant_int_1);
		}
		delete $m['c'];
		$m['escape'] = function(pattern) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add2,c,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$bool2,s,$bool1,alphanum,$len1,$add1,$2,$iter2_array,$1;
			s = $p['list'](pattern);
			alphanum = $m['_alphanum'];
			$iter2_iter = $p['range']((($len1=pattern) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))));
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				c = (typeof ($1=pattern)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i));
				if ((($bool1=!alphanum['__contains__'](c)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=$p['op_eq'](c, '\x00')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						s['__setitem__'](i, '\\000');
					}
					else {
						s['__setitem__'](i, (typeof ($add1='\\')==typeof ($add2=c) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
					}
				}
			}
			return $p['__getslice'](pattern, 0, $constant_int_0)['join'](s);
		};
		$m['escape']['__name__'] = 'escape';

		$m['escape']['__bind_type__'] = 0;
		$m['escape']['__args__'] = [null,null,['pattern']];
		$m['__inline_flags_re__'] = new RegExp("[(][?][iLmsux]+[)]");
		$m['_cache'] = $p['dict']([]);
		$m['_cache_repl'] = $p['dict']([]);
		$m['_MAXCACHE'] = $constant_int_100;
		$m['_compile'] = function(pat, flags) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];
			var $bool18,$iter5_nextval,$add12,$bool19,$bool10,$bool11,$bool12,$iter3_type,$bool14,$bool15,$bool16,$bool17,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$add3,$iter3_nextval,$bool27,$bool25,$bool24,brack,$bool26,$bool21,$iter3_iter,$bool23,$iter5_array,$sub3,$sub2,$sub1,$bool28,spat,$bool20,flgs,$bool13,$iter5_idx,$cmp4,$and1,$and2,$bool22,$add6,backslash,$bool3,$bool6,$bool7,$bool4,$iter3_array,$bool8,$bool9,$add8,$len2,c,cachekey,$cmp1,$cmp3,$cmp2,i,$iter4_nextval,$add9,m,$iter4_idx,p,$add7,$add4,$add5,$iter4_array,$add10,$bool5,$sub4,$add11;
			cachekey = $p['tuple']([pat, flags]);
			p = $m['_cache']['get'](cachekey);
			if ((($bool3=!$p['op_is'](p, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return p;
			}
			flgs = '';
			while ((($bool4=true) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				m = $m['__inline_flags_re__']['Exec'](pat);
				if ((($bool5=m === null) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					m = null;
					break;
				}
				pat = pat['$$replace']($m['__inline_flags_re__'], '');
				$iter3_iter = $p['list'](m);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					m = $iter3_nextval;
					if ((($bool6=m === null) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						continue;
					}
					$iter4_iter = $p['str'](m);
					if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter['__iter__']();
						$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						c = $iter4_nextval;
						if ((($bool7=$p['list'](['(', '?', ')'])['__contains__'](c)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						}
						else if ((($bool8=$p['op_eq'](c, 'i')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['IGNORECASE']);
						}
						else if ((($bool9=$p['op_eq'](c, 'L')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['LOCALE']);
						}
						else if ((($bool10=$p['op_eq'](c, 'm')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['MULTILINE']);
						}
						else if ((($bool11=$p['op_eq'](c, 's')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['DOTALL']);
						}
						else if ((($bool12=$p['op_eq'](c, 'u')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['UNICODE']);
						}
						else if ((($bool13=$p['op_eq'](c, 'x')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							flags = $p['op_bitor2'](flags, $m['VERBOSE']);
						}
					}
				}
			}
			if ((($bool14=flags) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				if ((($bool15=$p['op_bitand2'](flags, $m['LOCALE'])) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					throw ($p['NotImplementedError']('L/LOCALE flag is not implemented'));
				}
				if ((($bool16=$p['op_bitand2'](flags, $m['UNICODE'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					throw ($p['NotImplementedError']('U/UNICODE flag is not implemented'));
				}
				if ((($bool17=$p['op_bitand2'](flags, $m['VERBOSE'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					throw ($p['NotImplementedError']('X/VERBOSE flag is not implemented'));
				}
				if ((($bool18=$p['op_bitand2'](flags, $m['DOTALL'])) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					p = '';
					brack = (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
					backslash = (typeof ($usub2=$constant_int_2)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
					$iter5_iter = $p['enumerate'](pat);
					if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter['__iter__']();
						$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter5_nextval, 2, null);
						i = $tupleassign1[0];
						c = $tupleassign1[1];
						if ((($bool19=!$p['op_eq'](backslash, (typeof ($sub1=i)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2)))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
							if ((($bool20=((($cmp1=brack)===($cmp2=$constant_int_0)?0:
								(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
									($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
									$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
								if ((($bool21=$p['op_eq'](c, '[')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
									brack = i;
								}
								else if ((($bool22=$p['op_eq'](c, '.')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
									c = '[\\s\\S]';
								}
								else if ((($bool23=$p['op_eq'](c, '\\')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
									backslash = i;
								}
							}
							else {
								if ((($bool25=((($bool24=$and1=$p['op_eq'](c, ']')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
									false :
									(typeof $bool24=='object'?
										(typeof $bool24['__nonzero__']=='function'?
											$bool24['__nonzero__']() :
											(typeof $bool24['__len__']=='function'?
												($bool24['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )?!$p['op_eq'](brack, (typeof ($sub3=i)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
									$sub3-$sub4:
									$p['op_sub']($sub3,$sub4))):$and1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
									brack = (typeof ($usub3=$constant_int_1)=='number'?
										-$usub3:
										$p['op_usub']($usub3));
								}
							}
						}
						p = (typeof ($add3=p)==typeof ($add4=c) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					pat = p;
				}
				if ((($bool26=$p['op_bitand2'](flags, $m['IGNORECASE'])) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					flgs = (typeof ($add5=flgs)==typeof ($add6='i') && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				if ((($bool27=$p['op_bitand2'](flags, $m['MULTILINE'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					flgs = (typeof ($add7=flgs)==typeof ($add8='m') && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
			}
			spat = (typeof ($add11=(typeof ($add9='([\\s\\S]*?)(')==typeof ($add10=pat) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($add12=')[\\s\\S]*') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			p = $p['tuple']([new RegExp(pat, flgs), new RegExp(spat, flgs), new RegExp(pat, "g"+flgs)]);
			if ((($bool28=((((($cmp3=(($len2=$m['_cache']) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))))===($cmp4=$m['_MAXCACHE'])?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				$m['_cache']['clear']();
			}
			$m['_cache']['__setitem__'](cachekey, p);
			return p;
		};
		$m['_compile']['__name__'] = '_compile';

		$m['_compile']['__bind_type__'] = 0;
		$m['_compile']['__args__'] = [null,null,['pat'],['flags', $constant_int_0]];
		$m['SRE_Match'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 're';
			$cls_definition['__md5__'] = 'c0cf25878c85327f552e7a9e7ea1ba26';
			$method = $pyjs__bind_method2('__init__', function(re, string, pos, endpos, groups, start, lastindex, lastgroup) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 9, 9, arguments['length']+1);
				} else {
					var self = arguments[0];
					re = arguments[1];
					string = arguments[2];
					pos = arguments[3];
					endpos = arguments[4];
					groups = arguments[5];
					start = arguments[6];
					lastindex = arguments[7];
					lastgroup = arguments[8];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 9) $pyjs__exception_func_param(arguments['callee']['__name__'], 9, 9, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13,$4,$3,$len3;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_groups', groups) : $p['setattr'](self, '_groups', groups); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_start', start) : $p['setattr'](self, '_start', start); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_end', (typeof ($add13=start)==typeof ($add14=(($len3=(typeof ($3=groups)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3)))))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, '_end', (typeof ($add13=start)==typeof ($add14=(($len3=(typeof ($3=groups)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3)))))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('re', re) : $p['setattr'](self, 're', re); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('string', string) : $p['setattr'](self, 'string', string); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', pos) : $p['setattr'](self, 'pos', pos); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('endpos', endpos) : $p['setattr'](self, 'endpos', endpos); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastindex', lastindex) : $p['setattr'](self, 'lastindex', lastindex); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastgroup', lastgroup) : $p['setattr'](self, 'lastgroup', lastgroup); 
				return null;
			}
	, 1, [null,null,['self'],['re'],['string'],['pos'],['endpos'],['groups'],['start'],['lastindex'],['lastgroup']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('start', function(group) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
				var idx,substr,$bool30,$bool29;
				if ((($bool29=!$p['op_eq'](group, $constant_int_0)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					substr = self['group'](group);
					if ((($bool30=substr) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
						return idx;
					}
					throw ($p['NotImplementedError']('group argument not supported'));
				}
				return $p['getattr'](self, '_start');
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['start'] = $method;
			$method = $pyjs__bind_method2('end', function(group) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
				var idx,$add15,$add16,$bool32,substr,$len4,$bool31;
				if ((($bool31=!$p['op_eq'](group, $constant_int_0)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31['__nonzero__']=='function'?
								$bool31['__nonzero__']() :
								(typeof $bool31['__len__']=='function'?
									($bool31['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					substr = self['group'](group);
					if ((($bool32=substr) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
						idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
						return (typeof ($add15=idx)==typeof ($add16=(($len4=substr) === null?$constant_int_0:
							(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
								(typeof $len4['__len__'] == 'function'?$len4['__len__']():
									(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
										$p['len']($len4)))))) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16));
					}
					throw ($p['NotImplementedError']('group argument not supported'));
				}
				return $p['getattr'](self, '_end');
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['end'] = $method;
			$method = $pyjs__bind_method2('span', function(group) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];

				return $p['tuple']([self['start'](group), self['end'](group)]);
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['span'] = $method;
			$method = $pyjs__bind_method2('expand', function(template) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					template = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('expand'));
				return null;
			}
	, 1, [null,null,['self'],['template']]);
			$cls_definition['expand'] = $method;
			$method = $pyjs__bind_method2('groups', function($$default) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
				var $$default;
				return $p['tuple'](function(){
					var $iter6_idx,$iter6_type,$collcomp1,$bool33,$iter6_array,x,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
				$iter6_iter = $p['__getslice']($p['getattr'](self, '_groups'), $constant_int_1, null);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					x = $iter6_nextval;
					$collcomp1['append'](((($bool33=!$p['op_is'](x, null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (x) : ($$default)));
				}

	return $collcomp1;}());
			}
	, 1, [null,null,['self'],['$$default', null]]);
			$cls_definition['groups'] = $method;
			$method = $pyjs__bind_method2('groupdict', function($$default) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
				var $$default;
				throw ($p['NotImplementedError']('groupdict'));
				return null;
			}
	, 1, [null,null,['self'],['$$default', null]]);
			$cls_definition['groupdict'] = $method;
			$method = $pyjs__bind_method2('group', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var grouplist,$iter7_array,group,$8,$iter7_nextval,$iter7_iter,$5,$len6,$len5,$bool34,$iter7_idx,$6,$7,$iter7_type,$bool35;
				if ((($bool34=$p['op_eq']((($len5=args) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))), $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					args = $p['tuple']([$constant_int_0]);
				}
				grouplist = $p['list']([]);
				$iter7_iter = args;
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					group = $iter7_nextval;
					grouplist['append']((typeof ($5=$p['getattr'](self, '_groups'))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=group]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](group)));
				}
				if ((($bool35=$p['op_eq']((($len6=grouplist) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6))))), $constant_int_1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return (typeof ($7=grouplist)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_0));
				}
				else {
					return $p['tuple'](grouplist);
				}
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['group'] = $method;
			$method = $pyjs__bind_method2('__copy__', function() {
				if (this['__is_instance__'] === true) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != -1) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']+1);
				} else {
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
				}


				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null]);
			$cls_definition['__copy__'] = $method;
			$method = $pyjs__bind_method2('__deepcopy__', function() {
				if (this['__is_instance__'] === true) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != -1) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']+1);
				} else {
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
				}


				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null]);
			$cls_definition['__deepcopy__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SRE_Match', $p['tuple']($bases), $data);
		})();
		$m['SRE_Pattern'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 're';
			$cls_definition['__md5__'] = 'b7bc2e6ce6b290c91e9d2ab47d772042';
			$method = $pyjs__bind_method2('__init__', function(pat, flags, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					pat = arguments[1];
					flags = arguments[2];
					code = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$10,$11,$12,$13,$9;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pat', pat) : $p['setattr'](self, 'pat', pat); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flags', flags) : $p['setattr'](self, 'flags', flags); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('match_code', (typeof ($9=code)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_0))) : $p['setattr'](self, 'match_code', (typeof ($9=code)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_0))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('search_code', (typeof ($11=code)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_1))) : $p['setattr'](self, 'search_code', (typeof ($11=code)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('findall_code', (typeof ($13=code)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_2]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_2))) : $p['setattr'](self, 'findall_code', (typeof ($13=code)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_2]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_2))); 
				return null;
			}
	, 1, [null,null,['self'],['pat'],['flags'],['code']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('match', function(string, pos, endpos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
				if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
				var $iter8_iter,$bool43,$bool42,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,_groups,$bool44,$iter8_idx,$bool41,$bool40,$iter8_type,$iter8_nextval,groups,$cmp5,$cmp6,i,$iter8_array,$len7,$bool36,$bool37,$bool38,$bool39,$iter9_array,$len8;
				if ((($bool37=!(($bool36=$p['op_is'](endpos, null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36['__nonzero__']=='function'?
							$bool36['__nonzero__']() :
							(typeof $bool36['__len__']=='function'?
								($bool36['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					string = $p['__getslice'](string, 0, endpos);
				}
				else {
					endpos = (($len7=string) === null?$constant_int_0:
						(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
							(typeof $len7['__len__'] == 'function'?$len7['__len__']():
								(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
									$p['len']($len7)))));
				}
				if ((($bool38=$p['op_eq'](pos, $constant_int_0)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					groups = self['match_code']['Exec'](string);
					if ((($bool39=groups === null) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
						return null;
					}
					_groups = $p['list']([]);
					$iter8_iter = $p['list'](groups);
					if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter['__iter__']();
						$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						i = $iter8_nextval;
						if ((($bool40=i === null) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
							_groups['append'](null);
						}
						else {
							_groups['append']($p['str'](i));
						}
					}
					groups = _groups;
				}
				else if ((($bool41=((((($cmp5=pos)===($cmp6=(($len8=string) === null?$constant_int_0:
					(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
								$p['len']($len8))))))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					return null;
				}
				else {
					groups = self['match_code']['Exec']($p['__getslice'](string, pos, null));
					if ((($bool42=groups === null) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					if ((($bool43=!$p['op_eq']($p['getattr'](groups, 'index'), $constant_int_0)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
						return null;
					}
					_groups = $p['list']([]);
					$iter9_iter = $p['list'](groups);
					if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter['__iter__']();
						$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						i = $iter9_nextval;
						if ((($bool44=i === null) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
							_groups['append'](null);
						}
						else {
							_groups['append']($p['str'](i));
						}
					}
					groups = _groups;
				}
				return $m['SRE_Match'](self, string, pos, endpos, groups, pos, null, null);
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['match'] = $method;
			$method = $pyjs__bind_method2('search', function(string, pos, endpos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
				if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
				var _groups,$iter10_nextval,$bool50,$bool51,$bool52,$iter10_iter,$iter11_idx,$bool47,$bool46,$bool45,$iter11_iter,$16,$bool49,$bool48,$add17,groups,$iter11_array,$iter11_nextval,$add18,$len10,$15,$cmp7,i,$iter11_type,$cmp8,$iter10_array,$iter10_type,$iter10_idx,$len9;
				if ((($bool46=!(($bool45=$p['op_is'](endpos, null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					string = $p['__getslice'](string, 0, endpos);
				}
				if ((($bool47=$p['op_eq'](pos, $constant_int_0)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					groups = self['search_code']['Exec'](string);
					if ((($bool48=groups === null) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
							false :
							(typeof $bool48=='object'?
								(typeof $bool48['__nonzero__']=='function'?
									$bool48['__nonzero__']() :
									(typeof $bool48['__len__']=='function'?
										($bool48['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return null;
					}
					_groups = $p['list']([]);
					$iter10_iter = $p['list'](groups);
					if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter['__iter__']();
						$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						i = $iter10_nextval;
						if ((($bool49=i === null) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
							_groups['append'](null);
						}
						else {
							_groups['append']($p['str'](i));
						}
					}
					groups = _groups;
				}
				else if ((($bool50=((((($cmp7=pos)===($cmp8=(($len9=string) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				else {
					groups = self['search_code']['Exec']($p['__getslice'](string, pos, null));
					if ((($bool51=groups === null) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51['__nonzero__']=='function'?
									$bool51['__nonzero__']() :
									(typeof $bool51['__len__']=='function'?
										($bool51['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return null;
					}
					_groups = $p['list']([]);
					$iter11_iter = $p['list'](groups);
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						i = $iter11_nextval;
						if ((($bool52=i === null) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
								false :
								(typeof $bool52=='object'?
									(typeof $bool52['__nonzero__']=='function'?
										$bool52['__nonzero__']() :
										(typeof $bool52['__len__']=='function'?
											($bool52['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							_groups['append'](null);
						}
						else {
							_groups['append']($p['str'](i));
						}
					}
					groups = _groups;
				}
				return $m['SRE_Match'](self, string, pos, endpos, $p['__getslice'](groups, $constant_int_2, null), (typeof ($add17=pos)==typeof ($add18=(($len10=(typeof ($15=groups)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=$constant_int_1]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']($constant_int_1))) === null?$constant_int_0:
					(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
								$p['len']($len10)))))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)), null, null);
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['search'] = $method;
			$method = $pyjs__bind_method2('findall', function(string, pos, endpos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
				if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
				var $bool54,$bool55,all,$bool57,span,$bool53,$21,$bool58,$22,m,$19,$17,$20,$18,$bool56;
				if ((($bool54=!(($bool53=$p['op_is'](endpos, null)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53['__nonzero__']=='function'?
							$bool53['__nonzero__']() :
							(typeof $bool53['__len__']=='function'?
								($bool53['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					string = $p['__getslice'](string, 0, endpos);
				}
				all = $p['list']([]);
				while ((($bool55=true) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55['__nonzero__']=='function'?
								$bool55['__nonzero__']() :
								(typeof $bool55['__len__']=='function'?
									($bool55['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					m = self['search'](string, pos);
					if ((($bool56=$p['op_is'](m, null)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
							false :
							(typeof $bool56=='object'?
								(typeof $bool56['__nonzero__']=='function'?
									$bool56['__nonzero__']() :
									(typeof $bool56['__len__']=='function'?
										($bool56['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
					span = m['span']();
					if ((($bool58=!(($bool57=m['groups']()) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57['__nonzero__']=='function'?
								$bool57['__nonzero__']() :
								(typeof $bool57['__len__']=='function'?
									($bool57['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
							false :
							(typeof $bool58=='object'?
								(typeof $bool58['__nonzero__']=='function'?
									$bool58['__nonzero__']() :
									(typeof $bool58['__len__']=='function'?
										($bool58['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						all['append']($p['__getslice'](string, (typeof ($17=span)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__']($constant_int_0)), (typeof ($19=span)['__array'] != 'undefined'?
							((typeof $19['__array'][$20=$constant_int_1]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']($constant_int_1))));
					}
					else {
						all['append']($p['tuple'](function(){
							var group,$or2,$iter12_type,$iter12_array,$collcomp2,$bool59,$iter12_iter,$or1,$iter12_idx,$iter12_nextval;
	$collcomp2 = $p['list']();
						$iter12_iter = m['groups']();
						if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
							$iter12_type = 0;
						} else {
							$iter12_iter = $iter12_iter['__iter__']();
							$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter12_idx = 0;
						while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
							group = $iter12_nextval;
							$collcomp2['append'](((($bool59=$or1=group) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
								false :
								(typeof $bool59=='object'?
									(typeof $bool59['__nonzero__']=='function'?
										$bool59['__nonzero__']() :
										(typeof $bool59['__len__']=='function'?
											($bool59['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or1:''));
						}

	return $collcomp2;}()));
					}
					pos = (typeof ($21=span)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_1]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_1));
				}
				return all;
				return $p['list']($p['__getslice'](string, pos, null)['match']($p['getattr'](self, 'findall_code')));
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['findall'] = $method;
			$method = $pyjs__bind_method2('sub', function(repl, string, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					repl = arguments[1];
					string = arguments[2];
					count = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];
				var $24,$23;
				return (typeof ($23=self['subn'](repl, string, count))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_0));
			}
	, 1, [null,null,['self'],['repl'],['string'],['count', $constant_int_0]]);
			$cls_definition['sub'] = $method;
			$method = $pyjs__bind_method2('subn', function(repl, string, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					repl = arguments[1];
					string = arguments[2];
					count = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];
				var m,pos,$add26,$bool64,$28,span,$add21,res,$add22,$25,$add24,$27,$26,subst,$sub6,$sub5,$bool61,$bool60,$bool63,$bool62,$cmp10,$add25,$add19,$cmp9,n,$add20,$add23;
				res = '';
				n = $constant_int_0;
				subst = repl;
				pos = $constant_int_0;
				while ((($bool60=((((($cmp9=count)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60['__nonzero__']=='function'?
								$bool60['__nonzero__']() :
								(typeof $bool60['__len__']=='function'?
									($bool60['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					m = self['search'](string, pos);
					if ((($bool61=$p['op_is'](m, null)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
							false :
							(typeof $bool61=='object'?
								(typeof $bool61['__nonzero__']=='function'?
									$bool61['__nonzero__']() :
									(typeof $bool61['__len__']=='function'?
										($bool61['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
					span = m['span']();
					if ((($bool62=$p['callable'](repl)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
							false :
							(typeof $bool62=='object'?
								(typeof $bool62['__nonzero__']=='function'?
									$bool62['__nonzero__']() :
									(typeof $bool62['__len__']=='function'?
										($bool62['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						subst = repl(m);
					}
					res = (typeof ($add19=res)==typeof ($add20=$p['__getslice'](string, pos, (typeof ($25=span)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=$constant_int_0]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']($constant_int_0)))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
					res = (typeof ($add21=res)==typeof ($add22=subst) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					pos = (typeof ($27=span)['__array'] != 'undefined'?
						((typeof $27['__array'][$28=$constant_int_1]) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__']($constant_int_1));
					n = (typeof ($add23=n)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					if ((($bool63=count) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
							false :
							(typeof $bool63=='object'?
								(typeof $bool63['__nonzero__']=='function'?
									$bool63['__nonzero__']() :
									(typeof $bool63['__len__']=='function'?
										($bool63['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool64=$p['op_eq'](count, $constant_int_1)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
								false :
								(typeof $bool64=='object'?
									(typeof $bool64['__nonzero__']=='function'?
										$bool64['__nonzero__']() :
										(typeof $bool64['__len__']=='function'?
											($bool64['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							break;
						}
						count = (typeof ($sub5=count)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6));
					}
				}
				return $p['tuple']([(typeof ($add25=res)==typeof ($add26=$p['__getslice'](string, pos, null)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)), n]);
			}
	, 1, [null,null,['self'],['repl'],['string'],['count', $constant_int_0]]);
			$cls_definition['subn'] = $method;
			$method = $pyjs__bind_method2('$$split', function(string, maxsplit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					maxsplit = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];
				var $29,$len11,$bool65,$bool67,$bool66,$32,$cmp12,m,pos,$30,$31,$cmp14,$cmp11,$cmp13,splitted,span;
				splitted = $p['list']([]);
				pos = $constant_int_0;
				while ((($bool65=((((($cmp11=maxsplit)===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					m = self['search'](string, pos);
					if ((($bool66=$p['op_is'](m, null)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
							false :
							(typeof $bool66=='object'?
								(typeof $bool66['__nonzero__']=='function'?
									$bool66['__nonzero__']() :
									(typeof $bool66['__len__']=='function'?
										($bool66['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
					span = m['span']();
					splitted['append']($p['__getslice'](string, pos, (typeof ($29=span)['__array'] != 'undefined'?
						((typeof $29['__array'][$30=$constant_int_0]) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__']($constant_int_0))));
					pos = (typeof ($31=span)['__array'] != 'undefined'?
						((typeof $31['__array'][$32=$constant_int_1]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__']($constant_int_1));
				}
				if ((($bool67=((($cmp13=pos)===($cmp14=(($len11=string) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67['__nonzero__']=='function'?
								$bool67['__nonzero__']() :
								(typeof $bool67['__len__']=='function'?
									($bool67['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					splitted['append']($p['__getslice'](string, pos, null));
				}
				return splitted;
			}
	, 1, [null,null,['self'],['string'],['maxsplit', $constant_int_0]]);
			$cls_definition['$$split'] = $method;
			$method = $pyjs__bind_method2('finditer', function(string, pos, endpos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
				if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];

				return self['findall'](string, pos, endpos)['__iter__']();
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['finditer'] = $method;
			$method = $pyjs__bind_method2('scanner', function(string, start, end) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					start = arguments[2];
					end = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof start == 'undefined') start=arguments['callee']['__args__'][4][1];
				if (typeof end == 'undefined') end=arguments['callee']['__args__'][5][1];

				throw ($p['NotImplementedError']('scanner'));
				return null;
			}
	, 1, [null,null,['self'],['string'],['start', $constant_int_0],['end', null]]);
			$cls_definition['scanner'] = $method;
			$method = $pyjs__bind_method2('__copy__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__copy__'] = $method;
			$method = $pyjs__bind_method2('__deepcopy__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__deepcopy__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SRE_Pattern', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end re */


/* end module: re */


