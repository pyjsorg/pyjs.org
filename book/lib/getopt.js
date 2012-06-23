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
			var $and3,$and1,$and2,opts;
			opts = $p['list']([]);
			if ($p['bool']($p['op_eq']($p['type'](longopts), $p['type']('')))) {
				longopts = $p['list']([longopts]);
			}
			else {
				longopts = $p['list'](longopts);
			}
			while ($p['bool'](($p['bool']($and1=args)?($p['bool']($and2=args['__getitem__']($constant_int_0)['startswith']('-'))?!$p['op_eq'](args['__getitem__']($constant_int_0), '-'):$and2):$and1))) {
				if ($p['bool']($p['op_eq'](args['__getitem__']($constant_int_0), '--'))) {
					args = $p['__getslice'](args, $constant_int_1, null);
					break;
				}
				if ($p['bool'](args['__getitem__']($constant_int_0)['startswith']('--'))) {
					var $tupleassign1 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign1[0];
					args = $tupleassign1[1];
				}
				else {
					var $tupleassign2 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
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
			var prog_args,$add2,$add3,$add1,$add4,all_options_first,opts;
			opts = $p['list']([]);
			prog_args = $p['list']([]);
			if ($p['bool']($p['isinstance'](longopts, $p['str']))) {
				longopts = $p['list']([longopts]);
			}
			else {
				longopts = $p['list'](longopts);
			}
			if ($p['bool'](shortopts['startswith']('+'))) {
				shortopts = $p['__getslice'](shortopts, $constant_int_1, null);
				all_options_first = true;
			}
			else {
				all_options_first = false;
			}
			while ($p['bool'](args)) {
				if ($p['bool']($p['op_eq'](args['__getitem__']($constant_int_0), '--'))) {
					prog_args = $p['__op_add']($add1=prog_args,$add2=$p['__getslice'](args, $constant_int_1, null));
					break;
				}
				if ($p['bool']($p['op_eq']($p['__getslice'](args['__getitem__']($constant_int_0), 0, $constant_int_2), '--'))) {
					var $tupleassign3 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign3[0];
					args = $tupleassign3[1];
				}
				else if ($p['bool']($p['op_eq']($p['__getslice'](args['__getitem__']($constant_int_0), 0, $constant_int_1), '-'))) {
					var $tupleassign4 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign4[0];
					args = $tupleassign4[1];
				}
				else {
					if ($p['bool'](all_options_first)) {
						prog_args = $p['__op_add']($add3=prog_args,$add4=args);
						break;
					}
					else {
						prog_args['append'](args['__getitem__']($constant_int_0));
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
			var $or1,$or2,i,$add6,$add7,$add5,has_arg,$add8,optarg;
			i = opt['find']('=');
			if ($p['bool']($p['op_eq'](i, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))) {
				optarg = null;
			}
			else {
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](opt, 0, i), $p['__getslice'](opt, $p['__op_add']($add5=i,$add6=$constant_int_1), null)]), 2, null);
				opt = $tupleassign5[0];
				optarg = $tupleassign5[1];
			}
			var $tupleassign6 = $p['__ass_unpack']((typeof long_has_args == "undefined"?$m['long_has_args']:long_has_args)(opt, longopts), 2, null);
			has_arg = $tupleassign6[0];
			opt = $tupleassign6[1];
			if ($p['bool'](has_arg)) {
				if ($p['bool']($p['op_is'](optarg, null))) {
					if ($p['bool'](!$p['bool'](args))) {
						throw ($m['GetoptError']($p['sprintf']('option --%s requires argument', opt), opt));
					}
					var $tupleassign7 = $p['__ass_unpack']($p['tuple']([args['__getitem__']($constant_int_0), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
					optarg = $tupleassign7[0];
					args = $tupleassign7[1];
				}
			}
			else if ($p['bool'](optarg)) {
				throw ($m['GetoptError']($p['sprintf']('option --%s must not have an argument', opt), opt));
			}
			opts['append']($p['tuple']([$p['__op_add']($add7='--',$add8=opt), ($p['bool']($or1=optarg)?$or1:'')]));
			return $p['tuple']([opts, args]);
		};
		$m['do_longs']['__name__'] = 'do_longs';

		$m['do_longs']['__bind_type__'] = 0;
		$m['do_longs']['__args__'] = [null,null,['opts'],['opt'],['longopts'],['args']];
		$m['long_has_args'] = function(opt, longopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var possibilities,$add10,has_arg,$add9,unique_match;
			possibilities = function(){
				var o,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = longopts;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				o = $iter1_nextval['$nextval'];
				if ($p['bool'](o['startswith'](opt))) {
					$collcomp1['append'](o);
				}
			}

	return $collcomp1;}();
			if ($p['bool'](!$p['bool'](possibilities))) {
				throw ($m['GetoptError']($p['sprintf']('option --%s not recognized', opt), opt));
			}
			if ($p['bool'](possibilities['__contains__'](opt))) {
				return $p['tuple']([false, opt]);
			}
			else if ($p['bool'](possibilities['__contains__']($p['__op_add']($add9=opt,$add10='=')))) {
				return $p['tuple']([true, opt]);
			}
			if ($p['bool'](($p['cmp']($p['len'](possibilities), $constant_int_1) == 1))) {
				throw ($m['GetoptError']($p['sprintf']('option --%s not a unique prefix', opt), opt));
			}
			if (!( $p['op_eq']($p['len'](possibilities), $constant_int_1) )) {
			   throw $p['AssertionError']();
			 }
			unique_match = possibilities['__getitem__']($constant_int_0);
			has_arg = unique_match['endswith']('=');
			if ($p['bool'](has_arg)) {
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
			var opt,$add11,$add12,optarg;
			while ($p['bool'](!$p['op_eq'](optstring, ''))) {
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([optstring['__getitem__']($constant_int_0), $p['__getslice'](optstring, $constant_int_1, null)]), 2, null);
				opt = $tupleassign8[0];
				optstring = $tupleassign8[1];
				if ($p['bool']((typeof short_has_arg == "undefined"?$m['short_has_arg']:short_has_arg)(opt, shortopts))) {
					if ($p['bool']($p['op_eq'](optstring, ''))) {
						if ($p['bool'](!$p['bool'](args))) {
							throw ($m['GetoptError']($p['sprintf']('option -%s requires argument', opt), opt));
						}
						var $tupleassign9 = $p['__ass_unpack']($p['tuple']([args['__getitem__']($constant_int_0), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
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
				opts['append']($p['tuple']([$p['__op_add']($add11='-',$add12=opt), optarg]));
			}
			return $p['tuple']([opts, args]);
		};
		$m['do_shorts']['__name__'] = 'do_shorts';

		$m['do_shorts']['__bind_type__'] = 0;
		$m['do_shorts']['__args__'] = [null,null,['opts'],['optstring'],['shortopts'],['args']];
		$m['short_has_arg'] = function(opt, shortopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$add14,$iter2_idx,$add13,$iter2_array;
			$iter2_iter = $p['range']($p['len'](shortopts));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				if ($p['bool'](($p['op_eq'](opt, ($compare1 = shortopts['__getitem__'](i)))&&!$p['op_eq']($compare1, ($compare2 = ':'))))) {
					return shortopts['startswith'](':', $p['__op_add']($add13=i,$add14=$constant_int_1));
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


