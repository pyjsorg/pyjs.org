/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DOM"];
	$m.__repr__ = function() { return "<module: pyjamas.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['DOM'] = $pyjs.loaded_modules['pyjamas.DOM'];
	try {
		var $bool1,$bool131,$bool130;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_9 = new $p['int'](9);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
			$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
			$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
			$m['currentEvent'] = null;
		}
		$m['sCaptureElem'] = null;
		$m['sEventPreviewStack'] = $p['list']([]);
		$m['listeners'] = $p['dict']([]);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
		$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'pyjamas', null, false);
		$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'pyjamas', null, false);
		$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'pyjamas', null, false);
		$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas', null, false);
		$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'pyjamas', null, false);
		$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'pyjamas', null, false);
		$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'pyjamas', null, false);
		$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'pyjamas', null, false);
		$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'pyjamas', null, false);
		$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'pyjamas', null, false);
		$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'pyjamas', null, false);
		$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas', null, false);
		$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas', null, false);
		$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas', null, false);
		$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas', null, false);
		$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas', null, false);
		$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'pyjamas', null, false);
		$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'pyjamas', null, false);
		$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'pyjamas', null, false);
		$m['ELEMENT_NODE'] = $constant_int_1;
		$m['TEXT_NODE'] = $constant_int_3;
		$m['DOCUMENT_NODE'] = $constant_int_9;
		$m['get_listener'] = function(item) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool2,ret,$bool3;
			if ((($bool2=$p['op_is'](item, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return null;
			}
			if ((($bool3=$p['hasattr'](item, '__instance__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				ret = $m['listeners']['get']($p['getattr'](item, '__instance__'));
			}
			else {
				ret = $m['listeners']['get']($p['hash'](item));
			}
			return ret;
		};
		$m['get_listener'].__name__ = 'get_listener';

		$m['get_listener'].__bind_type__ = 0;
		$m['get_listener'].__args__ = [null,null,['item']];
		$m['set_listener'] = function(item, listener) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool4,$bool5;
			if ((($bool4=$p['hasattr'](item, '__instance__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['listeners'].__setitem__($p['getattr'](item, '__instance__'), listener);
			}
			else if ((($bool5=$p['op_is'](listener, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$m['listeners']['pop']($p['hash'](item));
			}
			else {
				$m['listeners'].__setitem__($p['hash'](item), listener);
			}
			return null;
		};
		$m['set_listener'].__name__ = 'set_listener';

		$m['set_listener'].__bind_type__ = 0;
		$m['set_listener'].__args__ = [null,null,['item'],['listener']];
		$m['hack_timer_workaround_bug_button'] = null;
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var mf;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$m['_init_testing'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var body,$2,$1;
			body = (typeof ($1=$doc['getElementsByTagName']('body')).__array != 'undefined'?
				((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($constant_int_0));
			$m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
			$m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
			return null;
		};
		$m['_init_testing'].__name__ = '_init_testing';

		$m['_init_testing'].__bind_type__ = 0;
		$m['_init_testing'].__args__ = [null,null];
		$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

 			return null;
		};
		$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

		$m['_dispatchWindowEvent'].__bind_type__ = 0;
		$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
		$m['_dispatchEvent'] = function(sender, evt, useCap) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var curElem,$and3,$bool10,$and1,$and2,cap,$and4,$and5,$and6,listener,$pyjs_try_err,$bool6,$bool11,$bool13,$bool8,$bool9,$bool12,$bool7;
			if ((($bool6=$p['op_is'](evt, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				evt = $p['getattr']($wnd, 'event');
			}
			else {
				try {
					sender = $m.get_main_frame()['gobject_wrap'](sender);
					evt = $m.get_main_frame()['gobject_wrap'](evt);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
			}
			listener = null;
			curElem = sender;
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			listener = $m['get_listener'](cap);
			if ((($bool8=((($bool7=$and1=cap) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_is'](listener, null):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
				evt['stopPropagation']();
				return null;
			}
			while ((($bool10=((($bool9=$and3=curElem) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['op_is']($m['get_listener'](curElem), null):$and3)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				curElem = (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
			}
			if ((($bool12=((($bool11=$and5=curElem) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']((typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem), $constant_int_1):$and5)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				curElem = null;
			}
			listener = $m['get_listener'](curElem);
			if ((($bool13=!$p['op_is'](listener, null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
			}
			return null;
		};
		$m['_dispatchEvent'].__name__ = '_dispatchEvent';

		$m['_dispatchEvent'].__bind_type__ = 0;
		$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
		$m['_dispatchCapturedMouseEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $and8,cap,$bool14,$bool15,$bool16,$and7,listener,$bool17;
			if ((($bool15=!(($bool14=(typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			listener = $m['get_listener'](cap);
			if ((($bool17=((($bool16=$and7=cap) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_is'](listener, null):$and7)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
				evt['stopPropagation']();
			}
			return null;
		};
		$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

		$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
		$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool18,$bool19,cap,listener,lcEvent,$bool20;
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			if ((($bool18=$p['op_is'](cap, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool19=(typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			(typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
			listener = $m['get_listener'](cap);
			if ((($bool20=$p['op_is'](listener, null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			lcEvent = $doc['createEvent']('UIEvent');
			lcEvent['initUIEvent']('losecapture', false, false, $wnd, $constant_int_0);
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
			return null;
		};
		$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

		$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
		$m['browser_event_cb'] = function(view, event, from_window) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $or4,$or1,$or3,$or2,$bool25,$bool24,$bool27,$pyjs_try_err,$bool21,$bool26,$bool23,$bool22,et;
			if ((($bool21=$p['op_is'](event, null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				event = $p['getattr']($wnd, 'event');
			}
			else {
				try {
					event = $m.get_main_frame()['gobject_wrap'](event);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
			}
			et = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
			if ((($bool22=$p['op_eq'](et, 'resize')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['onResize']();
				return null;
			}
			if ((($bool23=$p['op_eq'](et, 'mouseout')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['_dispatchCapturedMouseoutEvent'](event);
			}
			if ((($bool27=((($bool24=$or1=$p['op_eq'](et, 'keyup')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool25=$or2=$p['op_eq'](et, 'keydown')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or2:((($bool26=$or3=$p['op_eq'](et, 'keypress')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:$p['op_eq'](et, 'change'))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
			}
			else {
				return $m['_dispatchCapturedMouseEvent'](event);
			}
			return null;
		};
		$m['browser_event_cb'].__name__ = 'browser_event_cb';

		$m['browser_event_cb'].__bind_type__ = 0;
		$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
		$m['_dispatchCapturedEvent'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool29,$bool28;
			if ((($bool29=!(($bool28=(typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				event['stopPropagation']();
				(typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
				return false;
			}
			return true;
		};
		$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

		$m['_dispatchCapturedEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
		$m['addEventPreview'] = function(preview) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['sEventPreviewStack']['append'](preview);
			return null;
		};
		$m['addEventPreview'].__name__ = 'addEventPreview';

		$m['addEventPreview'].__bind_type__ = 0;
		$m['addEventPreview'].__args__ = [null,null,['preview']];
		$m['appendChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			parent['appendChild'](child);
			return null;
		};
		$m['appendChild'].__name__ = 'appendChild';

		$m['appendChild'].__bind_type__ = 0;
		$m['appendChild'].__args__ = [null,null,['parent'],['child']];
		$m['removeChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			parent['removeChild'](child);
			return null;
		};
		$m['removeChild'].__name__ = 'removeChild';

		$m['removeChild'].__bind_type__ = 0;
		$m['removeChild'].__args__ = [null,null,['parent'],['child']];
		$m['replaceChild'] = function(parent, newChild, oldChild) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			parent['replaceChild'](newChild, oldChild);
			return null;
		};
		$m['replaceChild'].__name__ = 'replaceChild';

		$m['replaceChild'].__bind_type__ = 0;
		$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
		$m['buttonClick'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var evt;
			evt = $doc['createEvent']('MouseEvents');
			evt['initMouseEvent']('click', true, true, $wnd, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, false, false, false, false, $constant_int_0, element);
			element['dispatchEvent'](evt);
			return null;
		};
		$m['buttonClick'].__name__ = 'buttonClick';

		$m['buttonClick'].__bind_type__ = 0;
		$m['buttonClick'].__args__ = [null,null,['element']];
		$m['compare'] = function(elem1, elem2) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and9,$and10,$bool30,$bool31;
			if ((($bool31=((($bool30=$and9=$p['hasattr'](elem1, 'isSameNode')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30.__nonzero__=='function'?
						$bool30.__nonzero__() :
						(typeof $bool30.__len__=='function'?
							($bool30.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['hasattr'](elem2, 'isSameNode'):$and9)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return elem1['isSameNode'](elem2);
			}
			return $p['op_eq'](elem1, elem2);
		};
		$m['compare'].__name__ = 'compare';

		$m['compare'].__bind_type__ = 0;
		$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
		$m['createAnchor'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
		};
		$m['createAnchor'].__name__ = 'createAnchor';

		$m['createAnchor'].__bind_type__ = 0;
		$m['createAnchor'].__args__ = [null,null];
		$m['createButton'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
		};
		$m['createButton'].__name__ = 'createButton';

		$m['createButton'].__bind_type__ = 0;
		$m['createButton'].__args__ = [null,null];
		$m['createCol'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
		};
		$m['createCol'].__name__ = 'createCol';

		$m['createCol'].__bind_type__ = 0;
		$m['createCol'].__args__ = [null,null];
		$m['createDiv'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
		};
		$m['createDiv'].__name__ = 'createDiv';

		$m['createDiv'].__bind_type__ = 0;
		$m['createDiv'].__args__ = [null,null];
		$m['createElement'] = function(tag) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $doc['createElement'](tag);
		};
		$m['createElement'].__name__ = 'createElement';

		$m['createElement'].__bind_type__ = 0;
		$m['createElement'].__args__ = [null,null,['tag']];
		$m['createFieldSet'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('fieldset');
		};
		$m['createFieldSet'].__name__ = 'createFieldSet';

		$m['createFieldSet'].__bind_type__ = 0;
		$m['createFieldSet'].__args__ = [null,null];
		$m['createForm'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('form');
		};
		$m['createForm'].__name__ = 'createForm';

		$m['createForm'].__bind_type__ = 0;
		$m['createForm'].__args__ = [null,null];
		$m['createIFrame'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('iframe');
		};
		$m['createIFrame'].__name__ = 'createIFrame';

		$m['createIFrame'].__bind_type__ = 0;
		$m['createIFrame'].__args__ = [null,null];
		$m['createImg'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('img');
		};
		$m['createImg'].__name__ = 'createImg';

		$m['createImg'].__bind_type__ = 0;
		$m['createImg'].__args__ = [null,null];
		$m['createInputCheck'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
		};
		$m['createInputCheck'].__name__ = 'createInputCheck';

		$m['createInputCheck'].__bind_type__ = 0;
		$m['createInputCheck'].__args__ = [null,null];
		$m['createInputElement'] = function(elementType) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var e;
			e = $m['createElement']('input');
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', elementType) : $p['setattr'](e, 'type', elementType); 
			return e;
		};
		$m['createInputElement'].__name__ = 'createInputElement';

		$m['createInputElement'].__bind_type__ = 0;
		$m['createInputElement'].__args__ = [null,null,['elementType']];
		$m['createInputPassword'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createInputElement']('password');
		};
		$m['createInputPassword'].__name__ = 'createInputPassword';

		$m['createInputPassword'].__bind_type__ = 0;
		$m['createInputPassword'].__args__ = [null,null];
		$m['createInputRadio'] = function(group) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var e;
			e = $m['createInputElement']('radio');
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('$$name', group) : $p['setattr'](e, '$$name', group); 
			return e;
		};
		$m['createInputRadio'].__name__ = 'createInputRadio';

		$m['createInputRadio'].__bind_type__ = 0;
		$m['createInputRadio'].__args__ = [null,null,['group']];
		$m['createInputText'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createInputElement']('text');
		};
		$m['createInputText'].__name__ = 'createInputText';

		$m['createInputText'].__bind_type__ = 0;
		$m['createInputText'].__args__ = [null,null];
		$m['createLabel'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('label');
		};
		$m['createLabel'].__name__ = 'createLabel';

		$m['createLabel'].__bind_type__ = 0;
		$m['createLabel'].__args__ = [null,null];
		$m['createLegend'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('legend');
		};
		$m['createLegend'].__name__ = 'createLegend';

		$m['createLegend'].__bind_type__ = 0;
		$m['createLegend'].__args__ = [null,null];
		$m['createOptions'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('options');
		};
		$m['createOptions'].__name__ = 'createOptions';

		$m['createOptions'].__bind_type__ = 0;
		$m['createOptions'].__args__ = [null,null];
		$m['createSelect'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('select');
		};
		$m['createSelect'].__name__ = 'createSelect';

		$m['createSelect'].__bind_type__ = 0;
		$m['createSelect'].__args__ = [null,null];
		$m['createSpan'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('span');
		};
		$m['createSpan'].__name__ = 'createSpan';

		$m['createSpan'].__bind_type__ = 0;
		$m['createSpan'].__args__ = [null,null];
		$m['createTable'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('table');
		};
		$m['createTable'].__name__ = 'createTable';

		$m['createTable'].__bind_type__ = 0;
		$m['createTable'].__args__ = [null,null];
		$m['createTBody'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('tbody');
		};
		$m['createTBody'].__name__ = 'createTBody';

		$m['createTBody'].__bind_type__ = 0;
		$m['createTBody'].__args__ = [null,null];
		$m['createTD'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('td');
		};
		$m['createTD'].__name__ = 'createTD';

		$m['createTD'].__bind_type__ = 0;
		$m['createTD'].__args__ = [null,null];
		$m['createTextArea'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('textarea');
		};
		$m['createTextArea'].__name__ = 'createTextArea';

		$m['createTextArea'].__bind_type__ = 0;
		$m['createTextArea'].__args__ = [null,null];
		$m['createTH'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('th');
		};
		$m['createTH'].__name__ = 'createTH';

		$m['createTH'].__bind_type__ = 0;
		$m['createTH'].__args__ = [null,null];
		$m['createTR'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['createElement']('tr');
		};
		$m['createTR'].__name__ = 'createTR';

		$m['createTR'].__bind_type__ = 0;
		$m['createTR'].__args__ = [null,null];
		$m['eventStopPropagation'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			evt['stopPropagation']();
			return null;
		};
		$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

		$m['eventStopPropagation'].__bind_type__ = 0;
		$m['eventStopPropagation'].__args__ = [null,null,['evt']];
		$m['eventCancelBubble'] = function(evt, cancel) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('cancelBubble', cancel) : $p['setattr'](evt, 'cancelBubble', cancel); 
			return null;
		};
		$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

		$m['eventCancelBubble'].__bind_type__ = 0;
		$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
		$m['eventGetAltKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'altKey');
		};
		$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

		$m['eventGetAltKey'].__bind_type__ = 0;
		$m['eventGetAltKey'].__args__ = [null,null,['evt']];
		$m['eventGetButton'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'button');
		};
		$m['eventGetButton'].__name__ = 'eventGetButton';

		$m['eventGetButton'].__bind_type__ = 0;
		$m['eventGetButton'].__args__ = [null,null,['evt']];
		$m['eventGetClientX'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'clientX');
		};
		$m['eventGetClientX'].__name__ = 'eventGetClientX';

		$m['eventGetClientX'].__bind_type__ = 0;
		$m['eventGetClientX'].__args__ = [null,null,['evt']];
		$m['eventGetClientY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'clientY');
		};
		$m['eventGetClientY'].__name__ = 'eventGetClientY';

		$m['eventGetClientY'].__bind_type__ = 0;
		$m['eventGetClientY'].__args__ = [null,null,['evt']];
		$m['eventGetCtrlKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'ctrlKey');
		};
		$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

		$m['eventGetCtrlKey'].__bind_type__ = 0;
		$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
		$m['eventGetFromElement'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $pyjs_try_err;
			try {
				return $p['getattr'](evt, 'fromElement');
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					return null;
				}
			}
			return null;
		};
		$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

		$m['eventGetFromElement'].__bind_type__ = 0;
		$m['eventGetFromElement'].__args__ = [null,null,['evt']];
		$m['eventGetKeyCode'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $or5,$or7,$or6,$bool32,$bool33;
			return ((($bool32=$or5=$p['getattr'](evt, 'which')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
				false :
				(typeof $bool32=='object'?
					(typeof $bool32.__nonzero__=='function'?
						$bool32.__nonzero__() :
						(typeof $bool32.__len__=='function'?
							($bool32.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($bool33=$or6=$p['getattr'](evt, 'keyCode')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33.__nonzero__=='function'?
						$bool33.__nonzero__() :
						(typeof $bool33.__len__=='function'?
							($bool33.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or6:$constant_int_0));
		};
		$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

		$m['eventGetKeyCode'].__bind_type__ = 0;
		$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
		$m['eventGetRepeat'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'repeat');
		};
		$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

		$m['eventGetRepeat'].__bind_type__ = 0;
		$m['eventGetRepeat'].__args__ = [null,null,['evt']];
		$m['eventGetScreenX'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'screenX');
		};
		$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

		$m['eventGetScreenX'].__bind_type__ = 0;
		$m['eventGetScreenX'].__args__ = [null,null,['evt']];
		$m['eventGetScreenY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'screenY');
		};
		$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

		$m['eventGetScreenY'].__bind_type__ = 0;
		$m['eventGetScreenY'].__args__ = [null,null,['evt']];
		$m['eventGetShiftKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](evt, 'shiftKey');
		};
		$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

		$m['eventGetShiftKey'].__bind_type__ = 0;
		$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
		$m['eventGetCurrentTarget'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](event, 'currentTarget');
		};
		$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

		$m['eventGetCurrentTarget'].__bind_type__ = 0;
		$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
		$m['eventGetTarget'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](event, 'target');
		};
		$m['eventGetTarget'].__name__ = 'eventGetTarget';

		$m['eventGetTarget'].__bind_type__ = 0;
		$m['eventGetTarget'].__args__ = [null,null,['event']];
		$m['eventGetToElement'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var type,$bool34,$bool35;
			type = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
			if ((($bool34=$p['op_eq'](type, 'mouseout')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr'](evt, 'relatedTarget');
			}
			else if ((($bool35=$p['op_eq'](type, 'mouseover')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['getattr'](evt, 'target');
			}
			return null;
		};
		$m['eventGetToElement'].__name__ = 'eventGetToElement';

		$m['eventGetToElement'].__bind_type__ = 0;
		$m['eventGetToElement'].__args__ = [null,null,['evt']];
		$m['eventGetType'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](event, 'type');
		};
		$m['eventGetType'].__name__ = 'eventGetType';

		$m['eventGetType'].__bind_type__ = 0;
		$m['eventGetType'].__args__ = [null,null,['event']];
		$m['eventGetTypeInt'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['Event']['eventmap']['get']($p['str']($p['getattr'](event, 'type')), $constant_int_0);
		};
		$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

		$m['eventGetTypeInt'].__bind_type__ = 0;
		$m['eventGetTypeInt'].__args__ = [null,null,['event']];
		$m['eventGetTypeString'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['eventGetType'](event);
		};
		$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

		$m['eventGetTypeString'].__bind_type__ = 0;
		$m['eventGetTypeString'].__args__ = [null,null,['event']];
		$m['eventPreventDefault'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			evt['preventDefault']();
			return null;
		};
		$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

		$m['eventPreventDefault'].__bind_type__ = 0;
		$m['eventPreventDefault'].__args__ = [null,null,['evt']];
		$m['eventSetKeyCode'] = function(evt, key) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('keyCode', key) : $p['setattr'](evt, 'keyCode', key); 
			return null;
		};
		$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

		$m['eventSetKeyCode'].__bind_type__ = 0;
		$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
		$m['eventToString'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return evt['toString']();
		};
		$m['eventToString'].__name__ = 'eventToString';

		$m['eventToString'].__bind_type__ = 0;
		$m['eventToString'].__args__ = [null,null,['evt']];
		$m['iframeGetSrc'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](elem, 'src');
		};
		$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

		$m['iframeGetSrc'].__bind_type__ = 0;
		$m['iframeGetSrc'].__args__ = [null,null,['elem']];
		$m['getAbsoluteLeft'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var curr,$add2,$add1,$bool36,$bool37,$sub3,$sub2,$sub1,$sub4,left;
			left = $constant_int_0;
			curr = elem;
			while ((($bool36=$p['getattr'](curr, 'offsetParent')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = (typeof ($sub1=left)==typeof ($sub2=$p['getattr'](curr, 'scrollLeft')) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				curr = $p['getattr'](curr, 'parentNode');
			}
			while ((($bool37=elem) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = (typeof ($add1=left)==typeof ($add2=(typeof ($sub3=$p['getattr'](elem, 'offsetLeft'))==typeof ($sub4=$p['getattr'](elem, 'scrollLeft')) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				elem = $p['getattr'](elem, 'offsetParent');
			}
			return left;
		};
		$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

		$m['getAbsoluteLeft'].__bind_type__ = 0;
		$m['getAbsoluteLeft'].__args__ = [null,null,['elem']];
		$m['getAbsoluteTop'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var curr,top,$add3,$sub8,$add4,$bool38,$bool39,$sub7,$sub6,$sub5;
			top = $constant_int_0;
			curr = elem;
			while ((($bool38=$p['getattr'](curr, 'offsetParent')) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				top = (typeof ($sub5=top)==typeof ($sub6=$p['getattr'](curr, 'scrollTop')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				curr = $p['getattr'](curr, 'parentNode');
			}
			while ((($bool39=elem) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				top = (typeof ($add3=top)==typeof ($add4=(typeof ($sub7=$p['getattr'](elem, 'offsetTop'))==typeof ($sub8=$p['getattr'](elem, 'scrollTop')) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				elem = $p['getattr'](elem, 'offsetParent');
			}
			return top;
		};
		$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

		$m['getAbsoluteTop'].__bind_type__ = 0;
		$m['getAbsoluteTop'].__args__ = [null,null,['elem']];
		$m['getAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool40;
			attr = $p['getattr'](elem, attr);
			if ((($bool40=$p['op_is'](attr, null)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			return $p['str'](attr);
		};
		$m['getAttribute'].__name__ = 'getAttribute';

		$m['getAttribute'].__bind_type__ = 0;
		$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool42,mf,$bool41;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			if ((($bool42=!(($bool41=elem['hasAttribute'](attr)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['str']($p['getattr'](elem, mf['mash_attrib'](attr)));
			}
			return $p['str'](elem['getAttribute'](attr));
		};
		$m['getElemAttribute'].__name__ = 'getElemAttribute';

		$m['getElemAttribute'].__bind_type__ = 0;
		$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getBooleanAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var mf;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			return $p['bool']($p['getattr'](elem, mf['mash_attrib'](attr)));
		};
		$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

		$m['getBooleanAttribute'].__bind_type__ = 0;
		$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getBooleanElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool44,$bool43;
			if ((($bool44=!(($bool43=elem['hasAttribute'](attr)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43.__nonzero__=='function'?
						$bool43.__nonzero__() :
						(typeof $bool43.__len__=='function'?
							($bool43.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			return $p['bool'](elem['getAttribute'](attr));
		};
		$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

		$m['getBooleanElemAttribute'].__bind_type__ = 0;
		$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getCaptureElement'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['sCaptureElem'];
		};
		$m['getCaptureElement'].__name__ = 'getCaptureElement';

		$m['getCaptureElement'].__bind_type__ = 0;
		$m['getCaptureElement'].__args__ = [null,null];
		$m['getChild'] = function(elem, index) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var count,$bool45,$bool46,$add5,$bool47,next,$add6,child;
			count = $constant_int_0;
			child = $p['getattr'](elem, 'firstChild');
			while ((($bool45=child) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				next = $p['getattr'](child, 'nextSibling');
				if ((($bool46=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool47=$p['op_eq'](index, count)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return child;
					}
					count = (typeof ($add5=count)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				child = next;
			}
			return null;
		};
		$m['getChild'].__name__ = 'getChild';

		$m['getChild'].__bind_type__ = 0;
		$m['getChild'].__args__ = [null,null,['elem'],['index']];
		$m['getChildCount'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var count,$bool49,$bool48,$add7,child,$add8;
			count = $constant_int_0;
			child = $p['getattr'](elem, 'firstChild');
			while ((($bool48=child) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool49=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					count = (typeof ($add7=count)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				child = $p['getattr'](child, 'nextSibling');
			}
			return count;
		};
		$m['getChildCount'].__name__ = 'getChildCount';

		$m['getChildCount'].__bind_type__ = 0;
		$m['getChildCount'].__args__ = [null,null,['elem']];
		$m['getChildIndex'] = function(parent, toFind) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var count,$bool50,$bool51,$bool52,child,$add10,$add9;
			count = $constant_int_0;
			child = $p['getattr'](parent, 'firstChild');
			while ((($bool50=child) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool51=$p['op_eq'](child, toFind)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return count;
				}
				if ((($bool52=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52.__nonzero__=='function'?
								$bool52.__nonzero__() :
								(typeof $bool52.__len__=='function'?
									($bool52.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					count = (typeof ($add9=count)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				child = $p['getattr'](child, 'nextSibling');
			}
			return (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		};
		$m['getChildIndex'].__name__ = 'getChildIndex';

		$m['getChildIndex'].__bind_type__ = 0;
		$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
		$m['getElementById'] = function(id) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $doc['getElementById'](id);
		};
		$m['getElementById'].__name__ = 'getElementById';

		$m['getElementById'].__bind_type__ = 0;
		$m['getElementById'].__args__ = [null,null,['id']];
		$m['getEventListener'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['get_listener'](element);
		};
		$m['getEventListener'].__name__ = 'getEventListener';

		$m['getEventListener'].__bind_type__ = 0;
		$m['getEventListener'].__args__ = [null,null,['element']];
		$m['eventbitsmap'] = $p['dict']([]);
		$m['getEventsSunk'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['eventbitsmap']['get'](element, $constant_int_0);
		};
		$m['getEventsSunk'].__name__ = 'getEventsSunk';

		$m['getEventsSunk'].__bind_type__ = 0;
		$m['getEventsSunk'].__args__ = [null,null,['element']];
		$m['getFirstChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool54,$bool55,$bool53,$and12,$and13,$and11,$and14,child;
			child = ((($bool53=$and11=elem) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
				false :
				(typeof $bool53=='object'?
					(typeof $bool53.__nonzero__=='function'?
						$bool53.__nonzero__() :
						(typeof $bool53.__len__=='function'?
							($bool53.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](elem, 'firstChild'):$and11);
			while ((($bool55=((($bool54=$and13=child) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54.__nonzero__=='function'?
						$bool54.__nonzero__() :
						(typeof $bool54.__len__=='function'?
							($bool54.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and13)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				child = $p['getattr'](child, 'nextSibling');
			}
			return child;
		};
		$m['getFirstChild'].__name__ = 'getFirstChild';

		$m['getFirstChild'].__bind_type__ = 0;
		$m['getFirstChild'].__args__ = [null,null,['elem']];
		$m['getLastChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool56,$bool57,$and15,$bool58,$and16,$and17,child,$and18;
			child = ((($bool56=$and15=elem) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56.__nonzero__=='function'?
						$bool56.__nonzero__() :
						(typeof $bool56.__len__=='function'?
							($bool56.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](elem, 'lastChild'):$and15);
			while ((($bool58=((($bool57=$and17=child) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57.__nonzero__=='function'?
						$bool57.__nonzero__() :
						(typeof $bool57.__len__=='function'?
							($bool57.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and17)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				child = $p['getattr'](child, 'previousSibling');
			}
			return child;
		};
		$m['getLastChild'].__name__ = 'getLastChild';

		$m['getLastChild'].__bind_type__ = 0;
		$m['getLastChild'].__args__ = [null,null,['elem']];
		$m['getInnerHTML'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool60,$and20,$bool59,$pyjs_try_err,$and22,$and21,$and19;
			try {
				return ((($bool59=$and19=element) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](element, 'innerHtml'):$and19);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					return ((($bool60=$and21=element) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](element, 'innerHTML'):$and21);
				}
			}
			return null;
		};
		$m['getInnerHTML'].__name__ = 'getInnerHTML';

		$m['getInnerHTML'].__bind_type__ = 0;
		$m['getInnerHTML'].__args__ = [null,null,['element']];
		$m['getInnerText'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool61,$bool63,$bool62,text,$add13,$add14,$add11,$add12,child;
			text = '';
			child = $p['getattr'](element, 'firstChild');
			while ((($bool61=child) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool62=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62.__nonzero__=='function'?
								$bool62.__nonzero__() :
								(typeof $bool62.__len__=='function'?
									($bool62.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					text = (typeof ($add11=text)==typeof ($add12=$m['getInnerText'](child)) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				else if ((($bool63=$p['getattr'](child, 'nodeValue')) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					text = (typeof ($add13=text)==typeof ($add14=$p['getattr'](child, 'nodeValue')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
				child = $p['getattr'](child, 'nextSibling');
			}
			return text;
		};
		$m['getInnerText'].__name__ = 'getInnerText';

		$m['getInnerText'].__bind_type__ = 0;
		$m['getInnerText'].__args__ = [null,null,['element']];
		$m['getIntAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			return $p['int']($p['getattr'](elem, attr));
		};
		$m['getIntAttribute'].__name__ = 'getIntAttribute';

		$m['getIntAttribute'].__bind_type__ = 0;
		$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getIntElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool65,$bool64;
			if ((($bool65=!(($bool64=elem['hasAttribute'](attr)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			return $p['int'](elem['getAttribute'](attr));
		};
		$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

		$m['getIntElemAttribute'].__bind_type__ = 0;
		$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getIntStyleAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			return $m['getIntAttribute']($p['getattr'](elem, 'style'), attr);
		};
		$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

		$m['getIntStyleAttribute'].__bind_type__ = 0;
		$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['getPrevSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool67,$bool66,sib,$and23,$and24;
			sib = $p['getattr'](elem, 'previousSibling');
			while ((($bool67=((($bool66=$and23=sib) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and23)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
					false :
					(typeof $bool67=='object'?
						(typeof $bool67.__nonzero__=='function'?
							$bool67.__nonzero__() :
							(typeof $bool67.__len__=='function'?
								($bool67.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sib = $p['getattr'](sib, 'previousSibling');
			}
			return sib;
		};
		$m['getPrevSibling'].__name__ = 'getPrevSibling';

		$m['getPrevSibling'].__bind_type__ = 0;
		$m['getPrevSibling'].__args__ = [null,null,['elem']];
		$m['getNextSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool69,$bool68,sib,$and26,$and25;
			sib = $p['getattr'](elem, 'nextSibling');
			while ((($bool69=((($bool68=$and25=sib) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
				false :
				(typeof $bool68=='object'?
					(typeof $bool68.__nonzero__=='function'?
						$bool68.__nonzero__() :
						(typeof $bool68.__len__=='function'?
							($bool68.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and25)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sib = $p['getattr'](sib, 'nextSibling');
			}
			return sib;
		};
		$m['getNextSibling'].__name__ = 'getNextSibling';

		$m['getNextSibling'].__bind_type__ = 0;
		$m['getNextSibling'].__args__ = [null,null,['elem']];
		$m['getNodeType'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](elem, 'nodeType');
		};
		$m['getNodeType'].__name__ = 'getNodeType';

		$m['getNodeType'].__bind_type__ = 0;
		$m['getNodeType'].__args__ = [null,null,['elem']];
		$m['getParent'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool70,parent,$bool71;
			parent = $p['getattr'](elem, 'parentNode');
			if ((($bool70=$p['op_is'](parent, null)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			if ((($bool71=!$p['op_eq']($m['getNodeType'](parent), $constant_int_1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71.__nonzero__=='function'?
							$bool71.__nonzero__() :
							(typeof $bool71.__len__=='function'?
								($bool71.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			return parent;
		};
		$m['getParent'].__name__ = 'getParent';

		$m['getParent'].__bind_type__ = 0;
		$m['getParent'].__args__ = [null,null,['elem']];
		$m['getStyleAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool73,$pyjs_try_err,$bool72;
			try {
				if ((($bool72=$p['hasattr']($p['getattr'](elem, 'style'), 'getPropertyValue')) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72.__nonzero__=='function'?
								$bool72.__nonzero__() :
								(typeof $bool72.__len__=='function'?
									($bool72.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return elem['style']['getPropertyValue']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
				}
				else if ((($bool73=$p['hasattr']($p['getattr'](elem, 'style'), 'getProperty')) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
						false :
						(typeof $bool73=='object'?
							(typeof $bool73.__nonzero__=='function'?
								$bool73.__nonzero__() :
								(typeof $bool73.__len__=='function'?
									($bool73.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return elem['style']['getProperty']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
				}
				return elem['style']['getAttribute'](attr);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return $p['getattr']($p['getattr'](elem, 'style'), attr, null);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		};
		$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

		$m['getStyleAttribute'].__bind_type__ = 0;
		$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$m['insertChild'] = function(parent, toAdd, index) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var count,$bool76,$bool77,$bool74,$bool75,$add15,$add16,child,before;
			count = $constant_int_0;
			child = $p['getattr'](parent, 'firstChild');
			before = null;
			while ((($bool74=child) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool75=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75.__nonzero__=='function'?
								$bool75.__nonzero__() :
								(typeof $bool75.__len__=='function'?
									($bool75.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool76=$p['op_eq'](count, index)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
							false :
							(typeof $bool76=='object'?
								(typeof $bool76.__nonzero__=='function'?
									$bool76.__nonzero__() :
									(typeof $bool76.__len__=='function'?
										($bool76.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						before = child;
						break;
					}
					count = (typeof ($add15=count)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				child = $p['getattr'](child, 'nextSibling');
			}
			if ((($bool77=$p['op_is'](before, null)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				parent['appendChild'](toAdd);
			}
			else {
				parent['insertBefore'](toAdd, before);
			}
			return null;
		};
		$m['insertChild'].__name__ = 'insertChild';

		$m['insertChild'].__bind_type__ = 0;
		$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
		$m['IterChildrenClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.DOM';
			$cls_definition.__md5__ = '11d97d729fc0a85ba40e8929b22af90b';
			$method = $pyjs__bind_method2('__init__', function(elem) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool78,$bool79;
				if ((($bool79=!(($bool78=$p['getattr'](self, 'child')) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79.__nonzero__=='function'?
								$bool79.__nonzero__() :
								(typeof $bool79.__len__=='function'?
									($bool79.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['StopIteration']);
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getNextSibling']($p['getattr'](self, 'child'))) : $p['setattr'](self, 'child', $m['getNextSibling']($p['getattr'](self, 'child'))); 
				return $p['getattr'](self, 'lastChild');
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
		})();
		$m['iterChildren'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['IterChildrenClass'](elem);
		};
		$m['iterChildren'].__name__ = 'iterChildren';

		$m['iterChildren'].__bind_type__ = 0;
		$m['iterChildren'].__args__ = [null,null,['elem']];
		$m['IterWalkChildren'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.DOM';
			$cls_definition.__md5__ = '8c737fccd3bdd27796a1c4a73193d915';
			$method = $pyjs__bind_method2('__init__', function(elem, all_nodes) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					all_nodes = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof all_nodes == 'undefined') all_nodes=arguments.callee.__args__[4][1];
				var $bool80;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('all_nodes', all_nodes) : $p['setattr'](self, 'all_nodes', all_nodes); 
				if ((($bool80=all_nodes) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80.__nonzero__=='function'?
								$bool80.__nonzero__() :
								(typeof $bool80.__len__=='function'?
									($bool80.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getFirstChild'](elem)) : $p['setattr'](self, 'child', $m['getFirstChild'](elem)); 
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', $p['list']([])) : $p['setattr'](self, 'stack', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self'],['elem'],['all_nodes', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool83,$bool82,$bool81,$cmp1,$bool86,$bool85,$bool84,$cmp2,nextSibling,firstChild,$len1,$bool87;
				if ((($bool82=!(($bool81=$p['getattr'](self, 'child')) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81.__nonzero__=='function'?
							$bool81.__nonzero__() :
							(typeof $bool81.__len__=='function'?
								($bool81.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
						false :
						(typeof $bool82=='object'?
							(typeof $bool82.__nonzero__=='function'?
								$bool82.__nonzero__() :
								(typeof $bool82.__len__=='function'?
									($bool82.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['StopIteration']);
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				if ((($bool83=$p['getattr'](self, 'all_nodes')) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83.__nonzero__=='function'?
								$bool83.__nonzero__() :
								(typeof $bool83.__len__=='function'?
									($bool83.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					firstChild = $p['getattr']($p['getattr'](self, 'child'), 'firstChild');
					nextSibling = $p['getattr']($p['getattr'](self, 'child'), 'nextSibling');
				}
				else {
					firstChild = $m['getFirstChild']($p['getattr'](self, 'child'));
					nextSibling = $m['getNextSibling']($p['getattr'](self, 'child'));
				}
				if ((($bool84=!$p['op_is'](firstChild, null)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
						false :
						(typeof $bool84=='object'?
							(typeof $bool84.__nonzero__=='function'?
								$bool84.__nonzero__() :
								(typeof $bool84.__len__=='function'?
									($bool84.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool85=!$p['op_is'](nextSibling, null)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
							false :
							(typeof $bool85=='object'?
								(typeof $bool85.__nonzero__=='function'?
									$bool85.__nonzero__() :
									(typeof $bool85.__len__=='function'?
										($bool85.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['stack']['append']($p['tuple']([nextSibling, $p['getattr'](self, 'parent')]));
					}
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $p['getattr'](self, 'child')) : $p['setattr'](self, 'parent', $p['getattr'](self, 'child')); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild); 
				}
				else if ((($bool86=!$p['op_is'](nextSibling, null)) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
						false :
						(typeof $bool86=='object'?
							(typeof $bool86.__nonzero__=='function'?
								$bool86.__nonzero__() :
								(typeof $bool86.__len__=='function'?
									($bool86.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling); 
				}
				else if ((($bool87=((($cmp1=(($len1=$p['getattr'](self, 'stack')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87.__nonzero__=='function'?
								$bool87.__nonzero__() :
								(typeof $bool87.__len__=='function'?
									($bool87.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					var $tupleassign1 = $p['__ass_unpack'](self['stack']['pop'](), 2, null);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $tupleassign1[0]) : $p['setattr'](self, 'child', $tupleassign1[0]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $tupleassign1[1]) : $p['setattr'](self, 'parent', $tupleassign1[1]); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', null) : $p['setattr'](self, 'child', null); 
				}
				return $p['getattr'](self, 'lastChild');
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
		})();
		$m['walkChildren'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $m['IterWalkChildren'](elem);
		};
		$m['walkChildren'].__name__ = 'walkChildren';

		$m['walkChildren'].__bind_type__ = 0;
		$m['walkChildren'].__args__ = [null,null,['elem']];
		$m['isOrHasChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool90,$bool91,$bool92,$bool89,$bool88;
			while ((($bool88=child) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
					false :
					(typeof $bool88=='object'?
						(typeof $bool88.__nonzero__=='function'?
							$bool88.__nonzero__() :
							(typeof $bool88.__len__=='function'?
								($bool88.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool89=$m['compare'](parent, child)) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89.__nonzero__=='function'?
								$bool89.__nonzero__() :
								(typeof $bool89.__len__=='function'?
									($bool89.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
				child = $p['getattr'](child, 'parentNode');
				if ((($bool91=!(($bool90=child) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90.__nonzero__=='function'?
							$bool90.__nonzero__() :
							(typeof $bool90.__len__=='function'?
								($bool90.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91.__nonzero__=='function'?
								$bool91.__nonzero__() :
								(typeof $bool91.__len__=='function'?
									($bool91.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return false;
				}
				if ((($bool92=!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
						false :
						(typeof $bool92=='object'?
							(typeof $bool92.__nonzero__=='function'?
								$bool92.__nonzero__() :
								(typeof $bool92.__len__=='function'?
									($bool92.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					child = null;
				}
			}
			return false;
		};
		$m['isOrHasChild'].__name__ = 'isOrHasChild';

		$m['isOrHasChild'].__bind_type__ = 0;
		$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
		$m['releaseCapture'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool93,$bool94,$and28,$and27;
			if ((($bool94=((($bool93=$and27=$m['sCaptureElem']) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93.__nonzero__=='function'?
						$bool93.__nonzero__() :
						(typeof $bool93.__len__=='function'?
							($bool93.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$m['compare'](elem, $m['sCaptureElem']):$and27)) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94.__nonzero__=='function'?
							$bool94.__nonzero__() :
							(typeof $bool94.__len__=='function'?
								($bool94.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['sCaptureElem'] = null;
				(typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
			}
			return null;
		};
		$m['releaseCapture'].__name__ = 'releaseCapture';

		$m['releaseCapture'].__bind_type__ = 0;
		$m['releaseCapture'].__args__ = [null,null,['elem']];
		$m['releaseCapture_impl'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

 			return null;
		};
		$m['releaseCapture_impl'].__name__ = 'releaseCapture_impl';

		$m['releaseCapture_impl'].__bind_type__ = 0;
		$m['releaseCapture_impl'].__args__ = [null,null,['elem']];
		$m['removeEventPreview'] = function(preview) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['sEventPreviewStack']['remove'](preview);
			return null;
		};
		$m['removeEventPreview'].__name__ = 'removeEventPreview';

		$m['removeEventPreview'].__bind_type__ = 0;
		$m['removeEventPreview'].__args__ = [null,null,['preview']];
		$m['getOffsetHeight'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](elem, 'offsetHeight');
		};
		$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

		$m['getOffsetHeight'].__bind_type__ = 0;
		$m['getOffsetHeight'].__args__ = [null,null,['elem']];
		$m['getOffsetWidth'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $p['getattr'](elem, 'offsetWidth');
		};
		$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

		$m['getOffsetWidth'].__bind_type__ = 0;
		$m['getOffsetWidth'].__args__ = [null,null,['elem']];
		$m['scrollIntoView'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $sub22,$sub23,$sub20,$sub21,$sub24,$add30,height,$and29,$cmp8,$add26,$add29,$add28,cur,$add21,$add18,top,$add22,$add25,$add24,$add27,$add19,width,$sub9,offsetLeft,offsetTop,$bool108,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$or9,$or8,$sub15,$sub14,$bool105,$bool104,$sub16,$add17,$bool101,$bool100,$bool103,$bool102,$cmp3,$and30,$and31,$and32,$and33,$cmp5,$cmp4,$cmp7,$cmp6,$bool95,$bool96,$bool97,$bool98,$bool99,$cmp10,$add31,$cmp9,$bool107,$add32,$bool106,$add20,$sub17,$add23,left;
			left = $p['getattr'](elem, 'offsetLeft');
			top = $p['getattr'](elem, 'offsetTop');
			width = $p['getattr'](elem, 'offsetWidth');
			height = $p['getattr'](elem, 'offsetHeight');
			if ((($bool95=!$p['op_eq']($p['getattr'](elem, 'parentNode'), $p['getattr'](elem, 'offsetParent'))) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = (typeof ($sub9=left)==typeof ($sub10=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetLeft')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				top = (typeof ($sub11=top)==typeof ($sub12=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetTop')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
			}
			cur = $p['getattr'](elem, 'parentNode');
			while ((($bool97=((($bool96=$and29=cur) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
				false :
				(typeof $bool96=='object'?
					(typeof $bool96.__nonzero__=='function'?
						$bool96.__nonzero__() :
						(typeof $bool96.__len__=='function'?
							($bool96.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['op_eq']($p['getattr'](cur, 'nodeType'), $constant_int_1):$and29)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
					false :
					(typeof $bool97=='object'?
						(typeof $bool97.__nonzero__=='function'?
							$bool97.__nonzero__() :
							(typeof $bool97.__len__=='function'?
								($bool97.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool101=((($bool98=$and31=$p['hasattr'](cur, 'style')) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98.__nonzero__=='function'?
							$bool98.__nonzero__() :
							(typeof $bool98.__len__=='function'?
								($bool98.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool99=$and32=$p['hasattr']($p['getattr'](cur, 'style'), 'overflow')) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99.__nonzero__=='function'?
							$bool99.__nonzero__() :
							(typeof $bool99.__len__=='function'?
								($bool99.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool100=$or8=$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'auto')) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'scroll')):$and32):$and31)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
						false :
						(typeof $bool101=='object'?
							(typeof $bool101.__nonzero__=='function'?
								$bool101.__nonzero__() :
								(typeof $bool101.__len__=='function'?
									($bool101.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool102=((($cmp3=left)===($cmp4=$p['getattr'](cur, 'scrollLeft'))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
							false :
							(typeof $bool102=='object'?
								(typeof $bool102.__nonzero__=='function'?
									$bool102.__nonzero__() :
									(typeof $bool102.__len__=='function'?
										($bool102.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', left) : $p['setattr'](cur, 'scrollLeft', left); 
					}
					if ((($bool103=((($cmp5=(typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))===($cmp6=(typeof ($add19=$p['getattr'](cur, 'scrollLeft'))==typeof ($add20=$p['getattr'](cur, 'clientWidth')) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
							false :
							(typeof $bool103=='object'?
								(typeof $bool103.__nonzero__=='function'?
									$bool103.__nonzero__() :
									(typeof $bool103.__len__=='function'?
										($bool103.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)))==typeof ($sub14=$p['getattr'](cur, 'clientWidth')) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14))) : $p['setattr'](cur, 'scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)))==typeof ($sub14=$p['getattr'](cur, 'clientWidth')) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14))); 
					}
					if ((($bool104=((($cmp7=top)===($cmp8=$p['getattr'](cur, 'scrollTop'))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
							false :
							(typeof $bool104=='object'?
								(typeof $bool104.__nonzero__=='function'?
									$bool104.__nonzero__() :
									(typeof $bool104.__len__=='function'?
										($bool104.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', top) : $p['setattr'](cur, 'scrollTop', top); 
					}
					if ((($bool105=((($cmp9=(typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))===($cmp10=(typeof ($add25=$p['getattr'](cur, 'scrollTop'))==typeof ($add26=$p['getattr'](cur, 'clientHeight')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105.__nonzero__=='function'?
									$bool105.__nonzero__() :
									(typeof $bool105.__len__=='function'?
										($bool105.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($sub16=$p['getattr'](cur, 'clientHeight')) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16))) : $p['setattr'](cur, 'scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($sub16=$p['getattr'](cur, 'clientHeight')) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16))); 
					}
				}
				offsetLeft = $p['getattr'](cur, 'offsetLeft');
				offsetTop = $p['getattr'](cur, 'offsetTop');
				if ((($bool106=!$p['op_eq']($p['getattr'](cur, 'parentNode'), $p['getattr'](cur, 'offsetParent'))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
						false :
						(typeof $bool106=='object'?
							(typeof $bool106.__nonzero__=='function'?
								$bool106.__nonzero__() :
								(typeof $bool106.__len__=='function'?
									($bool106.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool107=$p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft')) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
							false :
							(typeof $bool107=='object'?
								(typeof $bool107.__nonzero__=='function'?
									$bool107.__nonzero__() :
									(typeof $bool107.__len__=='function'?
										($bool107.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						offsetLeft = (typeof ($sub17=offsetLeft)==typeof ($sub18=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft')) && (typeof $sub17=='number'||typeof $sub17=='string')?
							$sub17-$sub18:
							$p['op_sub']($sub17,$sub18));
					}
					if ((($bool108=$p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetTop')) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
							false :
							(typeof $bool108=='object'?
								(typeof $bool108.__nonzero__=='function'?
									$bool108.__nonzero__() :
									(typeof $bool108.__len__=='function'?
										($bool108.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						offsetTop = (typeof ($sub19=offsetTop)==typeof ($sub20=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetTop')) && (typeof $sub19=='number'||typeof $sub19=='string')?
							$sub19-$sub20:
							$p['op_sub']($sub19,$sub20));
					}
				}
				left = (typeof ($add29=left)==typeof ($add30=(typeof ($sub21=offsetLeft)==typeof ($sub22=$p['getattr'](cur, 'scrollLeft')) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				top = (typeof ($add31=top)==typeof ($add32=(typeof ($sub23=offsetTop)==typeof ($sub24=$p['getattr'](cur, 'scrollTop')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				cur = $p['getattr'](cur, 'parentNode');
			}
			return null;
		};
		$m['scrollIntoView'].__name__ = 'scrollIntoView';

		$m['scrollIntoView'].__bind_type__ = 0;
		$m['scrollIntoView'].__args__ = [null,null,['elem']];
		$m['mash_name_for_glib'] = function(name, joiner) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
			var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add37,$add34,$iter1_iter,$iter1_array,$add33,$bool109,$add38,$iter1_type;
			res = '';
			$iter1_iter = name;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				c = $iter1_nextval;
				if ((($bool109=c['isupper']()) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
						false :
						(typeof $bool109=='object'?
							(typeof $bool109.__nonzero__=='function'?
								$bool109.__nonzero__() :
								(typeof $bool109.__len__=='function'?
									($bool109.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					res = (typeof ($add35=res)==typeof ($add36=(typeof ($add33=joiner)==typeof ($add34=c['lower']()) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34))) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36));
				}
				else {
					res = (typeof ($add37=res)==typeof ($add38=c) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38));
				}
			}
			return res;
		};
		$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

		$m['mash_name_for_glib'].__bind_type__ = 0;
		$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
		$m['removeAttribute'] = function(element, attribute) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			element['removeAttribute'](attribute);
			return null;
		};
		$m['removeAttribute'].__name__ = 'removeAttribute';

		$m['removeAttribute'].__bind_type__ = 0;
		$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
		$m['setAttribute'] = function(element, attribute, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$p['setattr'](element, attribute, value);
			return null;
		};
		$m['setAttribute'].__name__ = 'setAttribute';

		$m['setAttribute'].__bind_type__ = 0;
		$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
		$m['setElemAttribute'] = function(element, attribute, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			element['setAttribute'](attribute, value);
			return null;
		};
		$m['setElemAttribute'].__name__ = 'setElemAttribute';

		$m['setElemAttribute'].__bind_type__ = 0;
		$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
		$m['setBooleanAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var mf;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$p['setattr'](elem, mf['mash_attrib'](attr), value);
			return null;
		};
		$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

		$m['setBooleanAttribute'].__bind_type__ = 0;
		$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$m['setCapture'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['sCaptureElem'] = elem;
			(typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
			return null;
		};
		$m['setCapture'].__name__ = 'setCapture';

		$m['setCapture'].__bind_type__ = 0;
		$m['setCapture'].__args__ = [null,null,['elem']];
		$m['setCapture_impl'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

 			return null;
		};
		$m['setCapture_impl'].__name__ = 'setCapture_impl';

		$m['setCapture_impl'].__bind_type__ = 0;
		$m['setCapture_impl'].__args__ = [null,null,['elem']];
		$m['setEventListener'] = function(element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$m['set_listener'](element, listener);
			return null;
		};
		$m['setEventListener'].__name__ = 'setEventListener';

		$m['setEventListener'].__bind_type__ = 0;
		$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
		$m['createTextNode'] = function(txt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return $doc['createTextNode'](txt);
		};
		$m['createTextNode'].__name__ = 'createTextNode';

		$m['createTextNode'].__bind_type__ = 0;
		$m['createTextNode'].__args__ = [null,null,['txt']];
		$m['setInnerHTML'] = function(element, html) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $pyjs_try_err;
			try {
				element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHtml', html) : $p['setattr'](element, 'innerHtml', html); 
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHTML', html) : $p['setattr'](element, 'innerHTML', html); 
				}
			}
			return null;
		};
		$m['setInnerHTML'].__name__ = 'setInnerHTML';

		$m['setInnerHTML'].__bind_type__ = 0;
		$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
		$m['setInnerText'] = function(elem, text) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool110,$bool111,$or11,$or10;
			while ((($bool110=!$p['op_is']($p['getattr'](elem, 'firstChild'), null)) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
					false :
					(typeof $bool110=='object'?
						(typeof $bool110.__nonzero__=='function'?
							$bool110.__nonzero__() :
							(typeof $bool110.__len__=='function'?
								($bool110.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				elem['removeChild']($p['getattr'](elem, 'firstChild'));
			}
			elem['appendChild']($m['createTextNode'](((($bool111=$or10=text) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
				false :
				(typeof $bool111=='object'?
					(typeof $bool111.__nonzero__=='function'?
						$bool111.__nonzero__() :
						(typeof $bool111.__len__=='function'?
							($bool111.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or10:'')));
			return null;
		};
		$m['setInnerText'].__name__ = 'setInnerText';

		$m['setInnerText'].__bind_type__ = 0;
		$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
		$m['setIntElemAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			elem['setAttribute'](attr, $p['str'](value));
			return null;
		};
		$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

		$m['setIntElemAttribute'].__bind_type__ = 0;
		$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$m['setIntAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$p['setattr'](elem, attr, $p['int'](value));
			return null;
		};
		$m['setIntAttribute'].__name__ = 'setIntAttribute';

		$m['setIntAttribute'].__bind_type__ = 0;
		$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$m['setIntStyleAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool112,mf;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			if ((($bool112=$p['hasattr']($p['getattr'](elem, 'style'), 'setProperty')) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				elem['style']['setProperty'](mf['mash_attrib'](attr), $p['str'](value), '');
			}
			else {
				elem['style']['setAttribute'](mf['mash_attrib'](attr), $p['str'](value), '');
			}
			return null;
		};
		$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

		$m['setIntStyleAttribute'].__bind_type__ = 0;
		$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$m['setOptionText'] = function(select, text, index) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var option;
			option = select['options']['item'](index);
			option.__is_instance__ && typeof option.__setattr__ == 'function' ? option.__setattr__('textContent', text) : $p['setattr'](option, 'textContent', text); 
			return null;
		};
		$m['setOptionText'].__name__ = 'setOptionText';

		$m['setOptionText'].__bind_type__ = 0;
		$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
		$m['setStyleAttribute'] = function(element, name, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool113;
			if ((($bool113=$p['hasattr']($p['getattr'](element, 'style'), 'setProperty')) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113.__nonzero__=='function'?
							$bool113.__nonzero__() :
							(typeof $bool113.__len__=='function'?
								($bool113.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				element['style']['setProperty']($m['mash_name_for_glib'](name), value, '');
			}
			else {
				element['style']['setAttribute'](name, value, '');
			}
			return null;
		};
		$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

		$m['setStyleAttribute'].__bind_type__ = 0;
		$m['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
		$m['setStyleAttributes'] = function(element) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[1];
					}
				} else {
				}
			}
			var $iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$bool114,$iter2_array;
			$iter2_iter = kwargs['items']();
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
				attr = $tupleassign2[0];
				val = $tupleassign2[1];
				if ((($bool114=$p['hasattr']($p['getattr'](element, 'style'), 'setProperty')) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
						false :
						(typeof $bool114=='object'?
							(typeof $bool114.__nonzero__=='function'?
								$bool114.__nonzero__() :
								(typeof $bool114.__len__=='function'?
									($bool114.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					element['style']['setProperty']($m['mash_name_for_glib'](attr), val, '');
				}
				else {
					element['style']['setAttribute'](attr, val, '');
				}
			}
			return null;
		};
		$m['setStyleAttributes'].__name__ = 'setStyleAttributes';

		$m['setStyleAttributes'].__bind_type__ = 0;
		$m['setStyleAttributes'].__args__ = [null,['kwargs'],['element']];
		$m['sinkEvents'] = function(element, bits) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var cb,$cmp12,$bool116,$bool117,$bool115,$bool118,$bool119,$4,$iter3_idx,$iter3_array,$iter3_nextval,$3,$iter3_iter,event_name,$cmp11,$iter3_type,$6,bit,$5,$bool122,$bool121,$bool120,mf,aev,mask;
			mask = $p['op_bitxor2']($m['getEventsSunk'](element), bits);
			$m['eventbitsmap'].__setitem__(element, bits);
			if ((($bool116=!(($bool115=mask) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115.__nonzero__=='function'?
						$bool115.__nonzero__() :
						(typeof $bool115.__len__=='function'?
							($bool115.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116.__nonzero__=='function'?
							$bool116.__nonzero__() :
							(typeof $bool116.__len__=='function'?
								($bool116.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			bits = mask;
			if ((($bool118=!(($bool117=bits) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
				false :
				(typeof $bool117=='object'?
					(typeof $bool117.__nonzero__=='function'?
						$bool117.__nonzero__() :
						(typeof $bool117.__len__=='function'?
							($bool117.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118.__nonzero__=='function'?
							$bool118.__nonzero__() :
							(typeof $bool118.__len__=='function'?
								($bool118.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			if ((($bool119=$p['hasattr'](mf, '_addEventListener')) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
					false :
					(typeof $bool119=='object'?
						(typeof $bool119.__nonzero__=='function'?
							$bool119.__nonzero__() :
							(typeof $bool119.__len__=='function'?
								($bool119.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				aev = $p['getattr'](mf, '_addEventListener');
			}
			else {
				aev = $p['getattr'](mf, 'addEventListener');
			}
			cb = $m['_dispatchEvent'];
			(typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
			bit = $constant_int_1;
			while ((($bool120=bits) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
					false :
					(typeof $bool120=='object'?
						(typeof $bool120.__nonzero__=='function'?
							$bool120.__nonzero__() :
							(typeof $bool120.__len__=='function'?
								($bool120.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool121=((($cmp11=bit)===($cmp12=bits)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
						false :
						(typeof $bool121=='object'?
							(typeof $bool121.__nonzero__=='function'?
								$bool121.__nonzero__() :
								(typeof $bool121.__len__=='function'?
									($bool121.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['RuntimeError']('sinkEvents: bit outruns bits'));
				}
				if ((($bool122=$p['op_bitand2'](bits, bit)) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
						false :
						(typeof $bool122=='object'?
							(typeof $bool122.__nonzero__=='function'?
								$bool122.__nonzero__() :
								(typeof $bool122.__len__=='function'?
									($bool122.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter3_iter = (typeof ($5=(typeof ($3=$p['getattr']($m['Event'], 'eventbits')).__array != 'undefined'?
						((typeof $3.__array[$4=bit]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(bit))).__array != 'undefined'?
						((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($constant_int_1));
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						event_name = $iter3_nextval;
						aev(element, event_name, cb);
					}
					bits = $p['op_bitxor2'](bits, bit);
				}
				bit = $p['op_bitshiftleft'](bit,$constant_int_1);
			}
			return null;
		};
		$m['sinkEvents'].__name__ = 'sinkEvents';

		$m['sinkEvents'].__bind_type__ = 0;
		$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
		$m['sinkEventsMozilla'] = function(element, bits) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

 			return null;
		};
		$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

		$m['sinkEventsMozilla'].__bind_type__ = 0;
		$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
		$m['toString'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var outer,tempDiv,temp;
			temp = elem['cloneNode'](true);
			tempDiv = $m['createDiv']();
			tempDiv['appendChild'](temp);
			outer = $m['getInnerHTML'](tempDiv);
			$m['setInnerHTML'](temp, '');
			return outer;
		};
		$m['toString'].__name__ = 'toString';

		$m['toString'].__bind_type__ = 0;
		$m['toString'].__args__ = [null,null,['elem']];
		$m['dispatchEvent'] = function(event, element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			(typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
			return null;
		};
		$m['dispatchEvent'].__name__ = 'dispatchEvent';

		$m['dispatchEvent'].__bind_type__ = 0;
		$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
		$m['previewEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool124,ret,$len2,$8,$7,$bool125,preview,$bool123;
			if ((($bool123=$p['op_eq']((($len2=$m['sEventPreviewStack']) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))), $constant_int_0)) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
					false :
					(typeof $bool123=='object'?
						(typeof $bool123.__nonzero__=='function'?
							$bool123.__nonzero__() :
							(typeof $bool123.__len__=='function'?
								($bool123.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			preview = (typeof ($7=$m['sEventPreviewStack']).__array != 'undefined'?
				((typeof $7.__array[$8=(typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))));
			ret = preview['onEventPreview'](evt);
			if ((($bool124=ret) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
					false :
					(typeof $bool124=='object'?
						(typeof $bool124.__nonzero__=='function'?
							$bool124.__nonzero__() :
							(typeof $bool124.__len__=='function'?
								($bool124.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			if ((($bool125=evt) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125.__nonzero__=='function'?
							$bool125.__nonzero__() :
							(typeof $bool125.__len__=='function'?
								($bool125.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['eventCancelBubble'](evt, true);
				$m['eventPreventDefault'](evt);
			}
			return ret;
		};
		$m['previewEvent'].__name__ = 'previewEvent';

		$m['previewEvent'].__bind_type__ = 0;
		$m['previewEvent'].__args__ = [null,null,['evt']];
		$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);

 			return null;
		};
		$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

		$m['dispatchEventAndCatch'].__bind_type__ = 0;
		$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
		$m['currentEvent'] = null;
		$m['dispatchEventImpl'] = function(event, element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool127,$bool126,prevCurrentEvent;
			if ((($bool126=$p['op_eq'](element, $m['sCaptureElem'])) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
					false :
					(typeof $bool126=='object'?
						(typeof $bool126.__nonzero__=='function'?
							$bool126.__nonzero__() :
							(typeof $bool126.__len__=='function'?
								($bool126.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool127=$p['op_eq']($m['eventGetType'](event), 'losecapture')) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
						false :
						(typeof $bool127=='object'?
							(typeof $bool127.__nonzero__=='function'?
								$bool127.__nonzero__() :
								(typeof $bool127.__len__=='function'?
									($bool127.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['sCaptureElem'] = null;
				}
			}
			prevCurrentEvent = $m['currentEvent'];
			$m['currentEvent'] = event;
			listener['onBrowserEvent'](event);
			$m['currentEvent'] = prevCurrentEvent;
			return null;
		};
		$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

		$m['dispatchEventImpl'].__bind_type__ = 0;
		$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
		$m['eventGetCurrentEvent'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['currentEvent'];
		};
		$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

		$m['eventGetCurrentEvent'].__bind_type__ = 0;
		$m['eventGetCurrentEvent'].__args__ = [null,null];
		$m['insertListItem'] = function(select, item, value, index) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var option,$bool129,$bool128;
			option = $m['createElement']('OPTION');
			$m['setInnerText'](option, item);
			if ((($bool128=!$p['op_is'](value, null)) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
					false :
					(typeof $bool128=='object'?
						(typeof $bool128.__nonzero__=='function'?
							$bool128.__nonzero__() :
							(typeof $bool128.__len__=='function'?
								($bool128.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['setAttribute'](option, 'value', value);
			}
			if ((($bool129=$p['op_eq'](index, (typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
					false :
					(typeof $bool129=='object'?
						(typeof $bool129.__nonzero__=='function'?
							$bool129.__nonzero__() :
							(typeof $bool129.__len__=='function'?
								($bool129.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['appendChild'](select, option);
			}
			else {
				$m['insertChild'](select, option, index);
			}
			return null;
		};
		$m['insertListItem'].__name__ = 'insertListItem';

		$m['insertListItem'].__bind_type__ = 0;
		$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
		$m['getBodyOffsetTop'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $constant_int_0;
		};
		$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

		$m['getBodyOffsetTop'].__bind_type__ = 0;
		$m['getBodyOffsetTop'].__args__ = [null,null];
		$m['getBodyOffsetLeft'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $constant_int_0;
		};
		$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

		$m['getBodyOffsetLeft'].__bind_type__ = 0;
		$m['getBodyOffsetLeft'].__args__ = [null,null];
		$m['eventGetMouseWheelVelocityY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

 			return null;
		};
		$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

		$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
		$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
		if ((($bool131=!(($bool130=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
			false :
			(typeof $bool130=='object'?
				(typeof $bool130.__nonzero__=='function'?
					$bool130.__nonzero__() :
					(typeof $bool130.__len__=='function'?
						($bool130.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
				false :
				(typeof $bool131=='object'?
					(typeof $bool131.__nonzero__=='function'?
						$bool131.__nonzero__() :
						(typeof $bool131.__len__=='function'?
							($bool131.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['init']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
