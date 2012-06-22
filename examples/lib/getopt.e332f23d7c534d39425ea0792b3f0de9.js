/* start module: getopt */
$pyjs['loaded_modules']['getopt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['getopt']['__was_initialized__']) return $pyjs['loaded_modules']['getopt'];
	var $m = $pyjs['loaded_modules']['getopt'];
	$m['__repr__'] = function() { return '<module: getopt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'getopt';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_0 = new $p['int'](0);
		$m['__all__'] = $p['list'](['GetoptError', 'error', 'getopt', 'gnu_getopt']);
		$m['GetoptError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'getopt';
			$cls_definition['__md5__'] = '8c1129e280a7101a44c44c5164e2fb5b';
			$cls_definition['opt'] = '';
			$cls_definition['msg'] = '';
			$method = $pyjs__bind_method2('__init__', function(msg, opt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					opt = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c1129e280a7101a44c44c5164e2fb5b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof opt == 'undefined') opt=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('msg', msg) : $p['setattr'](self, 'msg', msg); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('opt', opt) : $p['setattr'](self, 'opt', opt); 
				$p['Exception']['__init__'](self, msg, opt);
				return null;
			}
	, 1, [null,null,['self'],['msg'],['opt', '']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c1129e280a7101a44c44c5164e2fb5b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'msg');
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GetoptError', $p['tuple']($bases), $data);
		})();
		$m['error'] = $m['GetoptError'];
		$m['getopt'] = function(args, shortopts, longopts) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
			var $bool4,$bool5,$and1,$and2,$and3,$bool2,$bool3,$bool1,$bool6,$8,$9,$6,$7,$4,$5,$2,$3,$1,$10,$11,$12,opts;
			opts = $p['list']([]);
			if ((($bool1=$p['op_eq']($p['type'](longopts), $p['type'](''))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				longopts = $p['list']([longopts]);
			}
			else {
				longopts = $p['list'](longopts);
			}
			while ((($bool4=((($bool2=$and1=args) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2['__nonzero__']=='function'?
						$bool2['__nonzero__']() :
						(typeof $bool2['__len__']=='function'?
							($bool2['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool3=$and2=(typeof ($1=args)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__']($constant_int_0))['startswith']('-')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']((typeof ($3=args)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__']($constant_int_0)), '-'):$and2):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=$p['op_eq']((typeof ($5=args)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0)), '--')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					args = $p['__getslice'](args, $constant_int_1, null);
					break;
				}
				if ((($bool6=(typeof ($7=args)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_0))['startswith']('--')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					var $tupleassign1 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice']((typeof ($9=args)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_0)), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign1[0];
					args = $tupleassign1[1];
				}
				else {
					var $tupleassign2 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice']((typeof ($11=args)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_0)), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign2[0];
					args = $tupleassign2[1];
				}
			}
			return $p['tuple']([opts, args]);
		};
		$m['getopt']['__name__'] = 'getopt';

		$m['getopt']['__bind_type__'] = 0;
		$m['getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
		$m['gnu_getopt'] = function(args, shortopts, longopts) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
			var $bool10,prog_args,$bool12,$bool13,all_options_first,$21,$20,$23,$22,$24,$bool11,$bool7,$bool8,$bool9,$14,$15,$16,$17,$13,$18,$19,$add2,$add3,$add1,$add4,opts;
			opts = $p['list']([]);
			prog_args = $p['list']([]);
			if ((($bool7=$p['isinstance'](longopts, $p['str'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				longopts = $p['list']([longopts]);
			}
			else {
				longopts = $p['list'](longopts);
			}
			if ((($bool8=shortopts['startswith']('+')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				shortopts = $p['__getslice'](shortopts, $constant_int_1, null);
				all_options_first = true;
			}
			else {
				all_options_first = false;
			}
			while ((($bool9=args) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				if ((($bool10=$p['op_eq']((typeof ($13=args)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_0)), '--')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					prog_args = (typeof ($add1=prog_args)==typeof ($add2=$p['__getslice'](args, $constant_int_1, null)) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					break;
				}
				if ((($bool11=$p['op_eq']($p['__getslice']((typeof ($15=args)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=$constant_int_0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']($constant_int_0)), 0, $constant_int_2), '--')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					var $tupleassign3 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice']((typeof ($17=args)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_0)), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign3[0];
					args = $tupleassign3[1];
				}
				else if ((($bool12=$p['op_eq']($p['__getslice']((typeof ($19=args)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_0)), 0, $constant_int_1), '-')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					var $tupleassign4 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice']((typeof ($21=args)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_0)), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign4[0];
					args = $tupleassign4[1];
				}
				else {
					if ((($bool13=all_options_first) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						prog_args = (typeof ($add3=prog_args)==typeof ($add4=args) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
						break;
					}
					else {
						prog_args['append']((typeof ($23=args)['__array'] != 'undefined'?
							((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
								$23['__getitem__']($24)):
								$23['__getitem__']($constant_int_0)));
						args = $p['__getslice'](args, $constant_int_1, null);
					}
				}
			}
			return $p['tuple']([opts, prog_args]);
		};
		$m['gnu_getopt']['__name__'] = 'gnu_getopt';

		$m['gnu_getopt']['__bind_type__'] = 0;
		$m['gnu_getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
		$m['do_longs'] = function(opts, opt, longopts, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $bool18,$bool19,$bool14,$bool15,$bool16,$bool17,$25,$26,$bool20,optarg,$or1,$or2,has_arg,i,$add6,$add7,$add5,$add8;
			i = opt['find']('=');
			if ((($bool14=$p['op_eq'](i, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				optarg = null;
			}
			else {
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](opt, 0, i), $p['__getslice'](opt, (typeof ($add5=i)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)), null)]), 2, null);
				opt = $tupleassign5[0];
				optarg = $tupleassign5[1];
			}
			var $tupleassign6 = $p['__ass_unpack']((typeof long_has_args == "undefined"?$m['long_has_args']:long_has_args)(opt, longopts), 2, null);
			has_arg = $tupleassign6[0];
			opt = $tupleassign6[1];
			if ((($bool15=has_arg) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				if ((($bool16=$p['op_is'](optarg, null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					if ((($bool18=!(($bool17=args) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						throw ($m['GetoptError']($p['sprintf']('option --%s requires argument', opt), opt));
					}
					var $tupleassign7 = $p['__ass_unpack']($p['tuple']([(typeof ($25=args)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=$constant_int_0]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']($constant_int_0)), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
					optarg = $tupleassign7[0];
					args = $tupleassign7[1];
				}
			}
			else if ((($bool19=optarg) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				throw ($m['GetoptError']($p['sprintf']('option --%s must not have an argument', opt), opt));
			}
			opts['append']($p['tuple']([(typeof ($add7='--')==typeof ($add8=opt) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)), ((($bool20=$or1=optarg) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20['__nonzero__']=='function'?
						$bool20['__nonzero__']() :
						(typeof $bool20['__len__']=='function'?
							($bool20['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:'')]));
			return $p['tuple']([opts, args]);
		};
		$m['do_longs']['__name__'] = 'do_longs';

		$m['do_longs']['__bind_type__'] = 0;
		$m['do_longs']['__args__'] = [null,null,['opts'],['opt'],['longopts'],['args']];
		$m['long_has_args'] = function(opt, longopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $bool25,$cmp1,$28,$cmp2,$len1,$27,possibilities,$bool24,$bool27,$bool26,$add10,$bool23,$bool22,$len2,has_arg,$add9,unique_match;
			possibilities = function(){
				var o,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$bool21,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = longopts;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				o = $iter1_nextval;
				if ((($bool21=o['startswith'](opt)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$collcomp1['append'](o);
				}
			}

	return $collcomp1;}();
			if ((($bool23=!(($bool22=possibilities) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				throw ($m['GetoptError']($p['sprintf']('option --%s not recognized', opt), opt));
			}
			if ((($bool24=possibilities['__contains__'](opt)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return $p['tuple']([false, opt]);
			}
			else if ((($bool25=possibilities['__contains__']((typeof ($add9=opt)==typeof ($add10='=') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				return $p['tuple']([true, opt]);
			}
			if ((($bool26=((($cmp1=(($len1=possibilities) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))))===($cmp2=$constant_int_1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				throw ($m['GetoptError']($p['sprintf']('option --%s not a unique prefix', opt), opt));
			}
			if (!( $p['op_eq']((($len2=possibilities) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))), $constant_int_1) )) {
			   throw $p['AssertionError']();
			 }
			unique_match = (typeof ($27=possibilities)['__array'] != 'undefined'?
				((typeof $27['__array'][$28=$constant_int_0]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__']($constant_int_0));
			has_arg = unique_match['endswith']('=');
			if ((($bool27=has_arg) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				unique_match = $p['__getslice'](unique_match, 0, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
			}
			return $p['tuple']([has_arg, unique_match]);
		};
		$m['long_has_args']['__name__'] = 'long_has_args';

		$m['long_has_args']['__bind_type__'] = 0;
		$m['long_has_args']['__args__'] = [null,null,['opt'],['longopts']];
		$m['do_shorts'] = function(opts, optstring, shortopts, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $29,opt,$32,$30,$31,$bool32,$bool30,$bool31,$add11,$add12,$bool29,$bool28,optarg;
			while ((($bool28=!$p['op_eq'](optstring, '')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([(typeof ($29=optstring)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=$constant_int_0]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']($constant_int_0)), $p['__getslice'](optstring, $constant_int_1, null)]), 2, null);
				opt = $tupleassign8[0];
				optstring = $tupleassign8[1];
				if ((($bool29=(typeof short_has_arg == "undefined"?$m['short_has_arg']:short_has_arg)(opt, shortopts)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					if ((($bool30=$p['op_eq'](optstring, '')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						if ((($bool32=!(($bool31=args) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
							false :
							(typeof $bool31=='object'?
								(typeof $bool31['__nonzero__']=='function'?
									$bool31['__nonzero__']() :
									(typeof $bool31['__len__']=='function'?
										($bool31['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
							throw ($m['GetoptError']($p['sprintf']('option -%s requires argument', opt), opt));
						}
						var $tupleassign9 = $p['__ass_unpack']($p['tuple']([(typeof ($31=args)['__array'] != 'undefined'?
							((typeof $31['__array'][$32=$constant_int_0]) != 'undefined'?$31['__array'][$32]:
								$31['__getitem__']($32)):
								$31['__getitem__']($constant_int_0)), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
						optstring = $tupleassign9[0];
						args = $tupleassign9[1];
					}
					var $tupleassign10 = $p['__ass_unpack']($p['tuple']([optstring, '']), 2, null);
					optarg = $tupleassign10[0];
					optstring = $tupleassign10[1];
				}
				else {
					optarg = '';
				}
				opts['append']($p['tuple']([(typeof ($add11='-')==typeof ($add12=opt) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)), optarg]));
			}
			return $p['tuple']([opts, args]);
		};
		$m['do_shorts']['__name__'] = 'do_shorts';

		$m['do_shorts']['__bind_type__'] = 0;
		$m['do_shorts']['__args__'] = [null,null,['opts'],['optstring'],['shortopts'],['args']];
		$m['short_has_arg'] = function(opt, shortopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$34,$33,$add14,$bool33,$iter2_idx,$len3,$add13,$iter2_array;
			$iter2_iter = $p['range']((($len3=shortopts) === null?$constant_int_0:
				(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
							$p['len']($len3))))));
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				if ((($bool33=($p['op_eq'](opt, ($compare1 = (typeof ($33=shortopts)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=i]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](i))))&&!$p['op_eq']($compare1, ($compare2 = ':')))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return shortopts['startswith'](':', (typeof ($add13=i)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)));
				}
			}
			throw ($m['GetoptError']($p['sprintf']('option -%s not recognized', opt), opt));
			return null;
		};
		$m['short_has_arg']['__name__'] = 'short_has_arg';

		$m['short_has_arg']['__bind_type__'] = 0;
		$m['short_has_arg']['__args__'] = [null,null,['opt'],['shortopts']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end getopt */


/* end module: getopt */


