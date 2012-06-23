/* start module: pyjamas.Factory */
$pyjs['loaded_modules']['pyjamas.Factory'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Factory']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Factory'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Factory'];
	$m['__repr__'] = function() { return '<module: pyjamas.Factory>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Factory';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Factory'] = $pyjs['loaded_modules']['pyjamas.Factory'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
		$m['factory'] = $p['dict']([]);
		$m['registerClass'] = function(modname, klsname, kls) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var name;
			if ($p['bool']($p['op_is'](modname, null))) {
				modname = '.'['join']($p['list'](['pyjamas.ui', klsname]));
			}
			name = '.'['join']($p['list']([modname, klsname]));
			$m['factory']['__setitem__'](name, kls);
			return null;
		};
		$m['registerClass']['__name__'] = 'registerClass';

		$m['registerClass']['__bind_type__'] = 0;
		$m['registerClass']['__args__'] = [null,null,['modname'],['klsname'],['kls']];
		$m['lookupClass'] = function(name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['factory']['__getitem__'](name);
		};
		$m['lookupClass']['__name__'] = 'lookupClass';

		$m['lookupClass']['__bind_type__'] = 0;
		$m['lookupClass']['__args__'] = [null,null,['name']];
		$m['createWidgetOnElement'] = function(element) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var txtargs,lbr,$iter1_iter,arg,$or1,$iter1_array,kwargs,klsname,findeq,$and3,$iter1_nextval,$or2,$and1,$and2,args,$and4,fc,$iter1_type,k,$add2,$add3,$add1,$iter1_idx,$add4,v;
			fc = $m['DOM']['getAttribute'](element, 'id');
			lbr = fc['find']('(');
			klsname = $p['__getslice'](fc, 0, lbr);
			txtargs = $p['__getslice'](fc, $p['__op_add']($add1=lbr,$add2=$constant_int_1), (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			args = $p['list']([]);
			kwargs = $p['dict']([]);
			$iter1_iter = txtargs['$$split'](',');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				arg = $iter1_nextval['$nextval'];
				findeq = arg['find']('=');
				if ($p['bool']($p['op_eq'](findeq, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))) {
					args['append'](arg);
				}
				else {
					k = $p['__getslice'](arg, 0, findeq);
					v = $p['__getslice'](arg, $p['__op_add']($add3=findeq,$add4=$constant_int_1), null);
					if ($p['bool'](($p['bool']($or1=($p['bool']($and1=$p['op_eq'](v['__getitem__']($constant_int_0), "'"))?$p['op_eq'](v['__getitem__']((typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))), "'"):$and1))?$or1:($p['bool']($and3=$p['op_eq'](v['__getitem__']($constant_int_0), '"'))?$p['op_eq'](v['__getitem__']((typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4))), '"'):$and3)))) {
						v = $p['__getslice'](v, $constant_int_1, (typeof ($usub5=$constant_int_1)=='number'?
							-$usub5:
							$p['op_usub']($usub5)));
					}
					else {
						v = $p['int'](v);
					}
					kwargs['__setitem__'](k, v);
				}
			}
			kwargs['__setitem__']('Element', element);
			return $pyjs_kwargs_call(null, $m['lookupClass'](klsname), args, kwargs, [{}]);
		};
		$m['createWidgetOnElement']['__name__'] = 'createWidgetOnElement';

		$m['createWidgetOnElement']['__bind_type__'] = 0;
		$m['createWidgetOnElement']['__args__'] = [null,null,['element']];
		$m['addPyjamasNameSpace'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['doc']()['createElementNS']('urn:schemas-pyjs-org:pyjs');
			return null;
		};
		$m['addPyjamasNameSpace']['__name__'] = 'addPyjamasNameSpace';

		$m['addPyjamasNameSpace']['__bind_type__'] = 0;
		$m['addPyjamasNameSpace']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Factory */


/* end module: pyjamas.Factory */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
