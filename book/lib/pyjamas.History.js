/* start module: pyjamas.History */
$pyjs['loaded_modules']['pyjamas.History'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.History']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.History'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.History'];
	$m['__repr__'] = function() { return '<module: pyjamas.History>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.History';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['History'] = $pyjs['loaded_modules']['pyjamas.History'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
		}
		$m['historyToken'] = '';
		$m['historyListeners'] = $p['list']([]);
		$m['addHistoryListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$p['printFunc'](['add listener', listener], 1);
			$m['historyListeners']['append'](listener);
			return null;
		};
		$m['addHistoryListener']['__name__'] = 'addHistoryListener';

		$m['addHistoryListener']['__bind_type__'] = 0;
		$m['addHistoryListener']['__args__'] = [null,null,['listener']];
		$m['back'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$wnd['history']['back']();
			return null;
		};
		$m['back']['__name__'] = 'back';

		$m['back']['__bind_type__'] = 0;
		$m['back']['__args__'] = [null,null];
		$m['forward'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$wnd['history']['forward']();
			return null;
		};
		$m['forward']['__name__'] = 'forward';

		$m['forward']['__bind_type__'] = 0;
		$m['forward']['__args__'] = [null,null];
		$m['getToken'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['historyToken'];
		};
		$m['getToken']['__name__'] = 'getToken';

		$m['getToken']['__bind_type__'] = 0;
		$m['getToken']['__args__'] = [null,null];
		$m['newItem'] = function(ht) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			if ($p['bool']($p['op_eq']($m['historyToken'], ht))) {
				return null;
			}
			(typeof onHistoryChanged == "undefined"?$m['onHistoryChanged']:onHistoryChanged)(ht);
			return null;

    if($m['historyToken'] == "" || $m['historyToken'] == null){
        $m['historyToken'] = "#";
    }
    $wnd['location']['hash'] = encodeURI($m['historyToken'])['replace']('#','%23');
    
		};
		$m['newItem']['__name__'] = 'newItem';

		$m['newItem']['__bind_type__'] = 0;
		$m['newItem']['__args__'] = [null,null,['ht']];
		$m['onHistoryChanged'] = function(ht) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			(typeof fireHistoryChangedImpl == "undefined"?$m['fireHistoryChangedImpl']:fireHistoryChangedImpl)(ht);
			return null;
		};
		$m['onHistoryChanged']['__name__'] = 'onHistoryChanged';

		$m['onHistoryChanged']['__bind_type__'] = 0;
		$m['onHistoryChanged']['__args__'] = [null,null,['ht']];
		$m['fireHistoryChangedAndCatch'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

 			return null;
		};
		$m['fireHistoryChangedAndCatch']['__name__'] = 'fireHistoryChangedAndCatch';

		$m['fireHistoryChangedAndCatch']['__bind_type__'] = 0;
		$m['fireHistoryChangedAndCatch']['__args__'] = [null,null];
		$m['fireHistoryChangedImpl'] = function(ht) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
			if ($p['bool']($p['op_eq']($m['historyToken'], ht))) {
				return null;
			}
			$m['historyToken'] = ht;
			$iter1_iter = $m['historyListeners'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				listener['onHistoryChanged'](ht);
			}
			return null;
		};
		$m['fireHistoryChangedImpl']['__name__'] = 'fireHistoryChangedImpl';

		$m['fireHistoryChangedImpl']['__bind_type__'] = 0;
		$m['fireHistoryChangedImpl']['__args__'] = [null,null,['ht']];
		$m['removeHistoryListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['historyListeners']['remove'](listener);
			return null;
		};
		$m['removeHistoryListener']['__name__'] = 'removeHistoryListener';

		$m['removeHistoryListener']['__bind_type__'] = 0;
		$m['removeHistoryListener']['__args__'] = [null,null,['listener']];
		$m['_first_notify'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$p['printFunc'](['first notify', $m['historyToken']], 1);
			$m['onHistoryChanged']($m['historyToken']);
			return null;
		};
		$m['_first_notify']['__name__'] = '_first_notify';

		$m['_first_notify']['__bind_type__'] = 0;
		$m['_first_notify']['__args__'] = [null,null];
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $and1,$and2,hash;
			$p['printFunc'](['init', (typeof get_main_frame == "undefined"?$m['get_main_frame']:get_main_frame)(), $p['getattr']($m['pyjd'], 'is_desktop')], 1);
			if ($p['bool']($p['op_is']((typeof get_main_frame == "undefined"?$m['get_main_frame']:get_main_frame)(), null))) {
				if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
					$m['pyjd']['add_setup_callback']($m['init']);
				}
				return null;
			}
			$m['historyToken'] = '';
			hash = $p['getattr']($p['getattr']($wnd, 'location'), 'hash');
			if ($p['bool'](($p['bool']($and1=hash)?($p['cmp']($p['len'](hash), $constant_int_0) == 1):$and1))) {
				$m['historyToken'] = $p['__getslice'](hash, $constant_int_1, null);
			}
			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$m['init']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.History */


/* end module: pyjamas.History */


/*
PYJS_DEPS: ['pyjd']
*/
