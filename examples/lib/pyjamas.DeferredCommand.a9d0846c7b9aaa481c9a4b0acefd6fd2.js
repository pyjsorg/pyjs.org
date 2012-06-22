/* start module: pyjamas.DeferredCommand */
$pyjs['loaded_modules']['pyjamas.DeferredCommand'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.DeferredCommand']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.DeferredCommand'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.DeferredCommand'];
	$m['__repr__'] = function() { return '<module: pyjamas.DeferredCommand>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DeferredCommand';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['DeferredCommand'] = $pyjs['loaded_modules']['pyjamas.DeferredCommand'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas', null, false);
		$m['deferredCommands'] = $p['list']([]);
		$m['timerIsActive'] = false;
		$m['add'] = function(cmd) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['deferredCommands']['append'](cmd);
			(typeof maybeSetDeferredCommandTimer == "undefined"?$m['maybeSetDeferredCommandTimer']:maybeSetDeferredCommandTimer)();
			return null;
		};
		$m['add']['__name__'] = 'add';

		$m['add']['__bind_type__'] = 0;
		$m['add']['__args__'] = [null,null,['cmd']];
		$m['flushDeferredCommands'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $bool2,$iter1_nextval,$iter1_type,i,$iter1_iter,current,$bool1,$iter1_array,$len1,$1,$2,$iter1_idx;
			$iter1_iter = $p['range']((($len1=$m['deferredCommands']) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))));
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				current = (typeof ($1=$m['deferredCommands'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0));
				$m['deferredCommands']['__delitem__']($constant_int_0);
				if ((($bool1=current) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=$p['hasattr'](current, 'execute')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						current['execute']();
					}
					else {
						current();
					}
				}
			}
			return null;
		};
		$m['flushDeferredCommands']['__name__'] = 'flushDeferredCommands';

		$m['flushDeferredCommands']['__bind_type__'] = 0;
		$m['flushDeferredCommands']['__args__'] = [null,null];
		$m['maybeSetDeferredCommandTimer'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $and1,$and2,$bool3,$len2,$bool4,$bool5,$bool6;
			if ((($bool6=((($bool4=$and1=!(($bool3=$m['timerIsActive']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool5=$p['op_eq']((($len2=$m['deferredCommands']) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))), $constant_int_0)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$m['Timer']($constant_int_1, (typeof onTimer == "undefined"?$m['onTimer']:onTimer));
				$m['timerIsActive'] = true;
			}
			return null;
		};
		$m['maybeSetDeferredCommandTimer']['__name__'] = 'maybeSetDeferredCommandTimer';

		$m['maybeSetDeferredCommandTimer']['__bind_type__'] = 0;
		$m['maybeSetDeferredCommandTimer']['__args__'] = [null,null];
		$m['onTimer'] = function(t) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['flushDeferredCommands']();
			$m['timerIsActive'] = false;
			$m['maybeSetDeferredCommandTimer']();
			return null;
		};
		$m['onTimer']['__name__'] = 'onTimer';

		$m['onTimer']['__bind_type__'] = 0;
		$m['onTimer']['__args__'] = [null,null,['t']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DeferredCommand */


/* end module: pyjamas.DeferredCommand */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
