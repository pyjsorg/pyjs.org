/* start module: pyjamas.ui.Event */
$pyjs['loaded_modules']['pyjamas.ui.Event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Event'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Event'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Event';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Event'] = $pyjs['loaded_modules']['pyjamas.ui.Event'];
	try {

		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8192 = new $p['int'](8192);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_524288 = new $p['int'](524288);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_131072 = new $p['int'](131072);
		var $constant_int_896 = new $p['int'](896);
		var $constant_int_262144 = new $p['int'](262144);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_16384 = new $p['int'](16384);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_32768 = new $p['int'](32768);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_2097152 = new $p['int'](2097152);
		var $constant_int_65536 = new $p['int'](65536);
		var $constant_int_6144 = new $p['int'](6144);
		var $constant_int_124 = new $p['int'](124);
		$m['BUTTON_LEFT'] = $constant_int_1;
		$m['BUTTON_MIDDLE'] = $constant_int_4;
		$m['BUTTON_RIGHT'] = $constant_int_2;
		$m['ONBLUR'] = $constant_int_4096;
		$m['ONCHANGE'] = $constant_int_1024;
		$m['ONCLICK'] = $constant_int_1;
		$m['ONCONTEXTMENU'] = $constant_int_131072;
		$m['ONDBLCLICK'] = $constant_int_2;
		$m['ONERROR'] = $constant_int_65536;
		$m['ONFOCUS'] = $constant_int_2048;
		$m['ONKEYDOWN'] = $constant_int_128;
		$m['ONKEYPRESS'] = $constant_int_256;
		$m['ONKEYUP'] = $constant_int_512;
		$m['ONLOAD'] = $constant_int_32768;
		$m['ONLOSECAPTURE'] = $constant_int_8192;
		$m['ONMOUSEDOWN'] = $constant_int_4;
		$m['ONMOUSEMOVE'] = $constant_int_64;
		$m['ONMOUSEOUT'] = $constant_int_32;
		$m['ONMOUSEOVER'] = $constant_int_16;
		$m['ONMOUSEUP'] = $constant_int_8;
		$m['ONMOUSEWHEEL'] = $constant_int_262144;
		$m['ONSCROLL'] = $constant_int_16384;
		$m['ONINPUT'] = $constant_int_524288;
		$m['DRAGEVENTS'] = $constant_int_1048576;
		$m['DROPEVENTS'] = $constant_int_2097152;
		$m['FOCUSEVENTS'] = $constant_int_6144;
		$m['KEYEVENTS'] = $constant_int_896;
		$m['MOUSEEVENTS'] = $constant_int_124;
		$m['eventbits'] = $p['dict']([[$constant_int_1, $p['tuple'](['click', $p['list'](['click'])])], [$constant_int_2, $p['tuple'](['dblclick', $p['list'](['dblclick'])])], [$constant_int_4, $p['tuple'](['mousedown', $p['list'](['mousedown'])])], [$constant_int_8, $p['tuple'](['mouseup', $p['list'](['mouseup'])])], [$constant_int_16, $p['tuple'](['mouseover', $p['list'](['mouseover'])])], [$constant_int_32, $p['tuple'](['mouseout', $p['list'](['mouseout'])])], [$constant_int_64, $p['tuple'](['mousemove', $p['list'](['mousemove'])])], [$constant_int_128, $p['tuple'](['keydown', $p['list'](['keydown'])])], [$constant_int_256, $p['tuple'](['keypress', $p['list'](['keypress'])])], [$constant_int_512, $p['tuple'](['keyup', $p['list'](['keyup'])])], [$constant_int_1024, $p['tuple'](['change', $p['list'](['change'])])], [$constant_int_2048, $p['tuple'](['focus', $p['list'](['focus'])])], [$constant_int_4096, $p['tuple'](['blur', $p['list'](['blur'])])], [$constant_int_8192, $p['tuple'](['losecapture', $p['list'](['losecapture'])])], [$constant_int_16384, $p['tuple'](['scroll', $p['list'](['scroll'])])], [$constant_int_32768, $p['tuple'](['load', $p['list'](['load'])])], [$constant_int_65536, $p['tuple'](['error', $p['list'](['error'])])], [$constant_int_131072, $p['tuple'](['contextmenu', $p['list'](['contextmenu'])])], [$constant_int_262144, $p['tuple'](['mousewheel', $p['list'](['mousewheel'])])], [$constant_int_524288, $p['tuple'](['input', $p['list'](['input'])])], [$constant_int_1048576, $p['tuple'](['dragevents', $p['list'](['drag', 'dragstart', 'dragend'])])], [$constant_int_2097152, $p['tuple'](['dropevents', $p['list'](['drop', 'dragenter', 'dragover', 'dragleave'])])]]);
		$m['eventmap'] = $p['dict']([['mousewheel', $constant_int_262144], ['mousescroll', $constant_int_262144], ['DOMMouseScroll', $constant_int_262144], ['input', $constant_int_524288], ['propertychange', $constant_int_524288]]);
		$m['_create_eventmap'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,bit,bitmap,$iter1_idx;
			$iter1_iter = $m['eventbits']['iteritems']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				bit = $tupleassign1[0];
				bitmap = $tupleassign1[1];
				$m['eventmap']['__setitem__'](bitmap['__getitem__']($constant_int_0), bit);
			}
			return null;
		};
		$m['_create_eventmap']['__name__'] = '_create_eventmap';

		$m['_create_eventmap']['__bind_type__'] = 0;
		$m['_create_eventmap']['__args__'] = [null,null];
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['eventbits']['__setitem__']($constant_int_262144, $p['tuple'](['DOMMouseScroll', $p['list']([])]));
			$m['eventbits']['__setitem__']($constant_int_524288, $p['tuple'](['input', $p['list']([])]));
			$m['_create_eventmap']();
			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$m['init']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Event */


/* end module: pyjamas.ui.Event */


