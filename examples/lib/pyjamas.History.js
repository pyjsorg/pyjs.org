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
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		}
		$m['historyToken'] = '';
		$m['historyListeners'] = $p['list']([]);
		$m['addHistoryListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

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
			var $bool2;
			if ((($bool2=$p['op_eq']($m['historyToken'], ht)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$bool3,$iter1_array,$iter1_idx;
			if ((($bool3=$p['op_eq']($m['historyToken'], ht)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return null;
			}
			$m['historyToken'] = ht;
			$iter1_iter = $m['historyListeners'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
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

			$m['onHistoryChanged']($m['historyToken']);
			return null;
		};
		$m['_first_notify']['__name__'] = '_first_notify';

		$m['_first_notify']['__bind_type__'] = 0;
		$m['_first_notify']['__args__'] = [null,null];
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var hash,$cmp2,$and1,$and2,$len1,$bool6,$bool7,$bool4,$bool5,$cmp1;
			if ((($bool4=$p['op_is']((typeof get_main_frame == "undefined"?$m['get_main_frame']:get_main_frame)(), null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$m['pyjd']['add_setup_callback']($m['init']);
				}
				return null;
			}
			$m['historyToken'] = '';
			hash = $p['getattr']($p['getattr']($wnd, 'location'), 'hash');
			if ((($bool7=((($bool6=$and1=hash) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp1=(($len1=hash) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
