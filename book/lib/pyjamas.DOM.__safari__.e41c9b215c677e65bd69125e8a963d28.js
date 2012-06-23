/* start module: pyjamas.DOM */
$pyjs['loaded_modules']['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.DOM']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.DOM'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.DOM'];
	$m['__repr__'] = function() { return '<module: pyjamas.DOM>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['DOM'] = $pyjs['loaded_modules']['pyjamas.DOM'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_9 = new $p['int'](9);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
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
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var ret;
			if ($p['bool']($p['op_is'](item, null))) {
				return null;
			}
			if ($p['bool']($p['hasattr'](item, '__instance__'))) {
				ret = $m['listeners']['get']($p['getattr'](item, '__instance__'));
			}
			else {
				ret = $m['listeners']['get']($p['hash'](item));
			}
			return ret;
		};
		$m['get_listener']['__name__'] = 'get_listener';

		$m['get_listener']['__bind_type__'] = 0;
		$m['get_listener']['__args__'] = [null,null,['item']];
		$m['set_listener'] = function(item, listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			if ($p['bool']($p['hasattr'](item, '__instance__'))) {
				$m['listeners']['__setitem__']($p['getattr'](item, '__instance__'), listener);
			}
			else if ($p['bool']($p['op_is'](listener, null))) {
				$m['listeners']['pop']($p['hash'](item));
			}
			else {
				$m['listeners']['__setitem__']($p['hash'](item), listener);
			}
			return null;
		};
		$m['set_listener']['__name__'] = 'set_listener';

		$m['set_listener']['__bind_type__'] = 0;
		$m['set_listener']['__args__'] = [null,null,['item'],['listener']];
		$m['hack_timer_workaround_bug_button'] = null;
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var mousewheel;
			mousewheel = $p['getattr']($m['Event'], 'eventbits')['__getitem__']($p['getattr']($m['Event'], 'eventmap')['__getitem__']('mousewheel'))['__getitem__']($constant_int_0);

    // Set up capture event dispatchers.
    $wnd['__dispatchCapturedMouseEvent'] = function(evt) {
        if ($wnd['__dispatchCapturedEvent'](evt)) {
            var cap = $m['getCaptureElement']();
            if (cap && cap['__listener']) {
                $m['dispatchEvent'](evt, cap, cap['__listener']);
                evt['stopPropagation']();
            }
        }
    };

    $wnd['__dispatchCapturedEvent'] = function(evt) {
        if (!$m['previewEvent'](evt)['valueOf']()) {
            evt['stopPropagation']();
            evt['preventDefault']();
            return false;
        }

        return true;
        };

    $wnd['addEventListener'](
        'mouseout',
        function(evt){
            var cap = $m['getCaptureElement']();
            if (cap) {
                if (!evt['relatedTarget']) {
                    // When the mouse leaves the window during capture,
                    // release capture and synthesize an 'onlosecapture' event.
                    $m['sCaptureElem'] = null;
                    if (cap['__listener']) {
                        var lcEvent = $doc['createEvent']('UIEvent');
                        lcEvent['initUIEvent']('losecapture', false, false,
                                             $wnd, 0);
                        $m['dispatchEvent'](lcEvent, cap, cap['__listener']);
                    }
                }
            }
        },
        true
    );

    var dcme = $wnd['__dispatchCapturedMouseEvent'];
    var dce = $wnd['__dispatchCapturedEvent'];

    $wnd['addEventListener']('click', dcme, true);
    $wnd['addEventListener']('dblclick', dcme, true);
    $wnd['addEventListener']('mousedown', dcme, true);
    $wnd['addEventListener']('mouseup', dcme, true);
    $wnd['addEventListener']('mousemove', dcme, true);
    $wnd['addEventListener']('keydown', dce, true);
    $wnd['addEventListener']('keyup', dce, true);
    $wnd['addEventListener']('keypress', dce, true);

    $wnd['__dispatchEvent'] = function(evt) {

        var listener, curElem = this;

        while (curElem && !(listener = curElem['__listener'])) {
            curElem = curElem['parentNode'];
        }
        if (curElem && curElem['nodeType'] != 1) {
            curElem = null;
        }

        if (listener) {
            $m['dispatchEvent'](evt, curElem, listener);
        }
    };
    var dcme = $wnd['__dispatchCapturedMouseEvent'];
    $wnd['addEventListener'](mousewheel, dcme, true);
    
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$m['_init_testing'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var body;
			body = $doc['getElementsByTagName']('body')['__getitem__']($constant_int_0);
			$m['mf']['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m['cb']:cb));
			$m['mf']['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m['cb']:cb));
			return null;
		};
		$m['_init_testing']['__name__'] = '_init_testing';

		$m['_init_testing']['__bind_type__'] = 0;
		$m['_init_testing']['__args__'] = [null,null];
		$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

 			return null;
		};
		$m['_dispatchWindowEvent']['__name__'] = '_dispatchWindowEvent';

		$m['_dispatchWindowEvent']['__bind_type__'] = 0;
		$m['_dispatchWindowEvent']['__args__'] = [null,null,['sender'],['evt'],['useCap']];
		$m['_dispatchEvent'] = function(sender, evt, useCap) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var curElem,$and3,$and1,$and2,cap,$and4,$and5,$and6,listener,$pyjs_try_err;
			if ($p['bool']($p['op_is'](evt, null))) {
				evt = $p['getattr']($wnd, 'event');
			}
			else {
				try {
					sender = $m['get_main_frame']()['gobject_wrap'](sender);
					evt = $m['get_main_frame']()['gobject_wrap'](evt);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
			}
			listener = null;
			curElem = sender;
			cap = (typeof getCaptureElement == "undefined"?$m['getCaptureElement']:getCaptureElement)();
			listener = $m['get_listener'](cap);
			if ($p['bool'](($p['bool']($and1=cap)?!$p['op_is'](listener, null):$and1))) {
				(typeof dispatchEvent == "undefined"?$m['dispatchEvent']:dispatchEvent)(evt, cap, listener);
				evt['stopPropagation']();
				return null;
			}
			while ($p['bool'](($p['bool']($and3=curElem)?$p['op_is']($m['get_listener'](curElem), null):$and3))) {
				curElem = (typeof getParent == "undefined"?$m['getParent']:getParent)(curElem);
			}
			if ($p['bool'](($p['bool']($and5=curElem)?!$p['op_eq']((typeof getNodeType == "undefined"?$m['getNodeType']:getNodeType)(curElem), $constant_int_1):$and5))) {
				curElem = null;
			}
			listener = $m['get_listener'](curElem);
			if ($p['bool'](!$p['op_is'](listener, null))) {
				(typeof dispatchEvent == "undefined"?$m['dispatchEvent']:dispatchEvent)(evt, curElem, listener);
			}
			return null;
		};
		$m['_dispatchEvent']['__name__'] = '_dispatchEvent';

		$m['_dispatchEvent']['__bind_type__'] = 0;
		$m['_dispatchEvent']['__args__'] = [null,null,['sender'],['evt'],['useCap']];
		$m['_dispatchCapturedMouseEvent'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var listener,$and8,cap,$and7;
			if ($p['bool'](!$p['bool']((typeof _dispatchCapturedEvent == "undefined"?$m['_dispatchCapturedEvent']:_dispatchCapturedEvent)(evt)))) {
				return null;
			}
			cap = (typeof getCaptureElement == "undefined"?$m['getCaptureElement']:getCaptureElement)();
			listener = $m['get_listener'](cap);
			if ($p['bool'](($p['bool']($and7=cap)?!$p['op_is'](listener, null):$and7))) {
				(typeof dispatchEvent == "undefined"?$m['dispatchEvent']:dispatchEvent)(evt, cap, listener);
				evt['stopPropagation']();
			}
			return null;
		};
		$m['_dispatchCapturedMouseEvent']['__name__'] = '_dispatchCapturedMouseEvent';

		$m['_dispatchCapturedMouseEvent']['__bind_type__'] = 0;
		$m['_dispatchCapturedMouseEvent']['__args__'] = [null,null,['evt']];
		$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var listener,lcEvent,cap;
			cap = (typeof getCaptureElement == "undefined"?$m['getCaptureElement']:getCaptureElement)();
			if ($p['bool']($p['op_is'](cap, null))) {
				return null;
			}
			if ($p['bool']((typeof eventGetToElement == "undefined"?$m['eventGetToElement']:eventGetToElement)(evt))) {
				return null;
			}
			(typeof setCapture == "undefined"?$m['setCapture']:setCapture)(null);
			listener = $m['get_listener'](cap);
			if ($p['bool']($p['op_is'](listener, null))) {
				return null;
			}
			lcEvent = $doc['createEvent']('UIEvent');
			lcEvent['initUIEvent']('losecapture', false, false, $wnd, $constant_int_0);
			(typeof dispatchEvent == "undefined"?$m['dispatchEvent']:dispatchEvent)(lcEvent, cap, listener);
			return null;
		};
		$m['_dispatchCapturedMouseoutEvent']['__name__'] = '_dispatchCapturedMouseoutEvent';

		$m['_dispatchCapturedMouseoutEvent']['__bind_type__'] = 0;
		$m['_dispatchCapturedMouseoutEvent']['__args__'] = [null,null,['evt']];
		$m['browser_event_cb'] = function(view, event, from_window) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $or4,$or1,$or3,$or2,$pyjs_try_err,et;
			if ($p['bool']($p['op_is'](event, null))) {
				event = $p['getattr']($wnd, 'event');
			}
			else {
				try {
					event = $m['get_main_frame']()['gobject_wrap'](event);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
			}
			et = (typeof eventGetType == "undefined"?$m['eventGetType']:eventGetType)(event);
			if ($p['bool']($p['op_eq'](et, 'resize'))) {
				$m['onResize']();
				return null;
			}
			if ($p['bool']($p['op_eq'](et, 'mouseout'))) {
				$m['_dispatchCapturedMouseoutEvent'](event);
			}
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](et, 'keyup'))?$or1:($p['bool']($or2=$p['op_eq'](et, 'keydown'))?$or2:($p['bool']($or3=$p['op_eq'](et, 'keypress'))?$or3:$p['op_eq'](et, 'change')))))) {
				return (typeof _dispatchCapturedEvent == "undefined"?$m['_dispatchCapturedEvent']:_dispatchCapturedEvent)(event);
			}
			else {
				return $m['_dispatchCapturedMouseEvent'](event);
			}
			return null;
		};
		$m['browser_event_cb']['__name__'] = 'browser_event_cb';

		$m['browser_event_cb']['__bind_type__'] = 0;
		$m['browser_event_cb']['__args__'] = [null,null,['view'],['event'],['from_window']];
		$m['_dispatchCapturedEvent'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			if ($p['bool'](!$p['bool']((typeof previewEvent == "undefined"?$m['previewEvent']:previewEvent)(event)))) {
				event['stopPropagation']();
				(typeof eventPreventDefault == "undefined"?$m['eventPreventDefault']:eventPreventDefault)(event);
				return false;
			}
			return true;
		};
		$m['_dispatchCapturedEvent']['__name__'] = '_dispatchCapturedEvent';

		$m['_dispatchCapturedEvent']['__bind_type__'] = 0;
		$m['_dispatchCapturedEvent']['__args__'] = [null,null,['event']];
		$m['addEventPreview'] = function(preview) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['sEventPreviewStack']['append'](preview);
			return null;
		};
		$m['addEventPreview']['__name__'] = 'addEventPreview';

		$m['addEventPreview']['__bind_type__'] = 0;
		$m['addEventPreview']['__args__'] = [null,null,['preview']];
		$m['appendChild'] = function(parent, child) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			parent['appendChild'](child);
			return null;
		};
		$m['appendChild']['__name__'] = 'appendChild';

		$m['appendChild']['__bind_type__'] = 0;
		$m['appendChild']['__args__'] = [null,null,['parent'],['child']];
		$m['removeChild'] = function(parent, child) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			parent['removeChild'](child);
			return null;
		};
		$m['removeChild']['__name__'] = 'removeChild';

		$m['removeChild']['__bind_type__'] = 0;
		$m['removeChild']['__args__'] = [null,null,['parent'],['child']];
		$m['replaceChild'] = function(parent, newChild, oldChild) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			parent['replaceChild'](newChild, oldChild);
			return null;
		};
		$m['replaceChild']['__name__'] = 'replaceChild';

		$m['replaceChild']['__bind_type__'] = 0;
		$m['replaceChild']['__args__'] = [null,null,['parent'],['newChild'],['oldChild']];
		$m['buttonClick'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


        var evt = $doc['createEvent']('MouseEvents');
        evt['initMouseEvent']('click', true, true, null, 1, 0,
                    0, 0, 0, false, false, false, false, 0, null);

        elem['dispatchEvent'](evt);
    
		};
		$m['buttonClick']['__name__'] = 'buttonClick';

		$m['buttonClick']['__bind_type__'] = 0;
		$m['buttonClick']['__args__'] = [null,null,['elem']];
		$m['compare'] = function(elem1, elem2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    return (elem1 == elem2);
    
		};
		$m['compare']['__name__'] = 'compare';

		$m['compare']['__bind_type__'] = 0;
		$m['compare']['__args__'] = [null,null,['elem1'],['elem2']];
		$m['createAnchor'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return (typeof createElement == "undefined"?$m['createElement']:createElement)('A');
		};
		$m['createAnchor']['__name__'] = 'createAnchor';

		$m['createAnchor']['__bind_type__'] = 0;
		$m['createAnchor']['__args__'] = [null,null];
		$m['createButton'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return (typeof createElement == "undefined"?$m['createElement']:createElement)('button');
		};
		$m['createButton']['__name__'] = 'createButton';

		$m['createButton']['__bind_type__'] = 0;
		$m['createButton']['__args__'] = [null,null];
		$m['createCol'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return (typeof createElement == "undefined"?$m['createElement']:createElement)('col');
		};
		$m['createCol']['__name__'] = 'createCol';

		$m['createCol']['__bind_type__'] = 0;
		$m['createCol']['__args__'] = [null,null];
		$m['createDiv'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return (typeof createElement == "undefined"?$m['createElement']:createElement)('div');
		};
		$m['createDiv']['__name__'] = 'createDiv';

		$m['createDiv']['__bind_type__'] = 0;
		$m['createDiv']['__args__'] = [null,null];
		$m['createElement'] = function(tag) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return $doc['createElement'](tag);
    
		};
		$m['createElement']['__name__'] = 'createElement';

		$m['createElement']['__bind_type__'] = 0;
		$m['createElement']['__args__'] = [null,null,['tag']];
		$m['createFieldSet'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('fieldset');
		};
		$m['createFieldSet']['__name__'] = 'createFieldSet';

		$m['createFieldSet']['__bind_type__'] = 0;
		$m['createFieldSet']['__args__'] = [null,null];
		$m['createForm'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('form');
		};
		$m['createForm']['__name__'] = 'createForm';

		$m['createForm']['__bind_type__'] = 0;
		$m['createForm']['__args__'] = [null,null];
		$m['createIFrame'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('iframe');
		};
		$m['createIFrame']['__name__'] = 'createIFrame';

		$m['createIFrame']['__bind_type__'] = 0;
		$m['createIFrame']['__args__'] = [null,null];
		$m['createImg'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('img');
		};
		$m['createImg']['__name__'] = 'createImg';

		$m['createImg']['__bind_type__'] = 0;
		$m['createImg']['__args__'] = [null,null];
		$m['createInputCheck'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return (typeof createInputElement == "undefined"?$m['createInputElement']:createInputElement)('checkbox');
		};
		$m['createInputCheck']['__name__'] = 'createInputCheck';

		$m['createInputCheck']['__bind_type__'] = 0;
		$m['createInputCheck']['__args__'] = [null,null];
		$m['createInputElement'] = function(elementType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var e = $doc['createElement']("INPUT");
    e['type'] = elementType;
    return e;
    
		};
		$m['createInputElement']['__name__'] = 'createInputElement';

		$m['createInputElement']['__bind_type__'] = 0;
		$m['createInputElement']['__args__'] = [null,null,['elementType']];
		$m['createInputPassword'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createInputElement']('password');
		};
		$m['createInputPassword']['__name__'] = 'createInputPassword';

		$m['createInputPassword']['__bind_type__'] = 0;
		$m['createInputPassword']['__args__'] = [null,null];
		$m['createInputRadio'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var elem = $doc['createElement']("INPUT");
    elem['type'] = 'radio';
    elem['name'] = group;
    return elem;
    
		};
		$m['createInputRadio']['__name__'] = 'createInputRadio';

		$m['createInputRadio']['__bind_type__'] = 0;
		$m['createInputRadio']['__args__'] = [null,null,['group']];
		$m['createInputText'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createInputElement']('text');
		};
		$m['createInputText']['__name__'] = 'createInputText';

		$m['createInputText']['__bind_type__'] = 0;
		$m['createInputText']['__args__'] = [null,null];
		$m['createLabel'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('label');
		};
		$m['createLabel']['__name__'] = 'createLabel';

		$m['createLabel']['__bind_type__'] = 0;
		$m['createLabel']['__args__'] = [null,null];
		$m['createLegend'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('legend');
		};
		$m['createLegend']['__name__'] = 'createLegend';

		$m['createLegend']['__bind_type__'] = 0;
		$m['createLegend']['__args__'] = [null,null];
		$m['createOptions'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('options');
		};
		$m['createOptions']['__name__'] = 'createOptions';

		$m['createOptions']['__bind_type__'] = 0;
		$m['createOptions']['__args__'] = [null,null];
		$m['createSelect'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('select');
		};
		$m['createSelect']['__name__'] = 'createSelect';

		$m['createSelect']['__bind_type__'] = 0;
		$m['createSelect']['__args__'] = [null,null];
		$m['createSpan'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('span');
		};
		$m['createSpan']['__name__'] = 'createSpan';

		$m['createSpan']['__bind_type__'] = 0;
		$m['createSpan']['__args__'] = [null,null];
		$m['createTable'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('table');
		};
		$m['createTable']['__name__'] = 'createTable';

		$m['createTable']['__bind_type__'] = 0;
		$m['createTable']['__args__'] = [null,null];
		$m['createTBody'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('tbody');
		};
		$m['createTBody']['__name__'] = 'createTBody';

		$m['createTBody']['__bind_type__'] = 0;
		$m['createTBody']['__args__'] = [null,null];
		$m['createTD'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('td');
		};
		$m['createTD']['__name__'] = 'createTD';

		$m['createTD']['__bind_type__'] = 0;
		$m['createTD']['__args__'] = [null,null];
		$m['createTextArea'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('textarea');
		};
		$m['createTextArea']['__name__'] = 'createTextArea';

		$m['createTextArea']['__bind_type__'] = 0;
		$m['createTextArea']['__args__'] = [null,null];
		$m['createTH'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('th');
		};
		$m['createTH']['__name__'] = 'createTH';

		$m['createTH']['__bind_type__'] = 0;
		$m['createTH']['__args__'] = [null,null];
		$m['createTR'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['createElement']('tr');
		};
		$m['createTR']['__name__'] = 'createTR';

		$m['createTR']['__bind_type__'] = 0;
		$m['createTR']['__args__'] = [null,null];
		$m['eventStopPropagation'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			evt['stopPropagation']();
			return null;
		};
		$m['eventStopPropagation']['__name__'] = 'eventStopPropagation';

		$m['eventStopPropagation']['__bind_type__'] = 0;
		$m['eventStopPropagation']['__args__'] = [null,null,['evt']];
		$m['eventCancelBubble'] = function(evt, cancel) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			evt['__is_instance__'] && typeof evt['__setattr__'] == 'function' ? evt['__setattr__']('cancelBubble', cancel) : $p['setattr'](evt, 'cancelBubble', cancel); 
			return null;
		};
		$m['eventCancelBubble']['__name__'] = 'eventCancelBubble';

		$m['eventCancelBubble']['__bind_type__'] = 0;
		$m['eventCancelBubble']['__args__'] = [null,null,['evt'],['cancel']];
		$m['eventGetAltKey'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'altKey');
		};
		$m['eventGetAltKey']['__name__'] = 'eventGetAltKey';

		$m['eventGetAltKey']['__bind_type__'] = 0;
		$m['eventGetAltKey']['__args__'] = [null,null,['evt']];
		$m['eventGetButton'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var button = evt['which'];
    if(button == 2) {
        return 4;
    } else if (button == 3) {
        return 2;
    } else {
        return button || 0;
    }
    
		};
		$m['eventGetButton']['__name__'] = 'eventGetButton';

		$m['eventGetButton']['__bind_type__'] = 0;
		$m['eventGetButton']['__args__'] = [null,null,['evt']];
		$m['eventGetClientX'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'clientX');
		};
		$m['eventGetClientX']['__name__'] = 'eventGetClientX';

		$m['eventGetClientX']['__bind_type__'] = 0;
		$m['eventGetClientX']['__args__'] = [null,null,['evt']];
		$m['eventGetClientY'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'clientY');
		};
		$m['eventGetClientY']['__name__'] = 'eventGetClientY';

		$m['eventGetClientY']['__bind_type__'] = 0;
		$m['eventGetClientY']['__args__'] = [null,null,['evt']];
		$m['eventGetCtrlKey'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'ctrlKey');
		};
		$m['eventGetCtrlKey']['__name__'] = 'eventGetCtrlKey';

		$m['eventGetCtrlKey']['__bind_type__'] = 0;
		$m['eventGetCtrlKey']['__args__'] = [null,null,['evt']];
		$m['eventGetFromElement'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return evt['fromElement'] ? evt['fromElement'] : null;
    
		};
		$m['eventGetFromElement']['__name__'] = 'eventGetFromElement';

		$m['eventGetFromElement']['__bind_type__'] = 0;
		$m['eventGetFromElement']['__args__'] = [null,null,['evt']];
		$m['eventGetKeyCode'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return evt['which'] ? evt['which'] :
            (evt['keyCode'] ? evt['keyCode'] : 0);
    
		};
		$m['eventGetKeyCode']['__name__'] = 'eventGetKeyCode';

		$m['eventGetKeyCode']['__bind_type__'] = 0;
		$m['eventGetKeyCode']['__args__'] = [null,null,['evt']];
		$m['eventGetRepeat'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'repeat');
		};
		$m['eventGetRepeat']['__name__'] = 'eventGetRepeat';

		$m['eventGetRepeat']['__bind_type__'] = 0;
		$m['eventGetRepeat']['__args__'] = [null,null,['evt']];
		$m['eventGetScreenX'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'screenX');
		};
		$m['eventGetScreenX']['__name__'] = 'eventGetScreenX';

		$m['eventGetScreenX']['__bind_type__'] = 0;
		$m['eventGetScreenX']['__args__'] = [null,null,['evt']];
		$m['eventGetScreenY'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'screenY');
		};
		$m['eventGetScreenY']['__name__'] = 'eventGetScreenY';

		$m['eventGetScreenY']['__bind_type__'] = 0;
		$m['eventGetScreenY']['__args__'] = [null,null,['evt']];
		$m['eventGetShiftKey'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](evt, 'shiftKey');
		};
		$m['eventGetShiftKey']['__name__'] = 'eventGetShiftKey';

		$m['eventGetShiftKey']['__bind_type__'] = 0;
		$m['eventGetShiftKey']['__args__'] = [null,null,['evt']];
		$m['eventGetCurrentTarget'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](event, 'currentTarget');
		};
		$m['eventGetCurrentTarget']['__name__'] = 'eventGetCurrentTarget';

		$m['eventGetCurrentTarget']['__bind_type__'] = 0;
		$m['eventGetCurrentTarget']['__args__'] = [null,null,['event']];
		$m['eventGetTarget'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return event['target'] ? event['target'] : null;
    
		};
		$m['eventGetTarget']['__name__'] = 'eventGetTarget';

		$m['eventGetTarget']['__bind_type__'] = 0;
		$m['eventGetTarget']['__args__'] = [null,null,['event']];
		$m['eventGetToElement'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return evt['relatedTarget'] ? evt['relatedTarget'] : null;
    
		};
		$m['eventGetToElement']['__name__'] = 'eventGetToElement';

		$m['eventGetToElement']['__bind_type__'] = 0;
		$m['eventGetToElement']['__args__'] = [null,null,['evt']];
		$m['eventGetType'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](event, 'type');
		};
		$m['eventGetType']['__name__'] = 'eventGetType';

		$m['eventGetType']['__bind_type__'] = 0;
		$m['eventGetType']['__args__'] = [null,null,['event']];
		$m['eventGetTypeInt'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['Event']['eventmap']['get']($p['str']($p['getattr'](event, 'type')), $constant_int_0);
		};
		$m['eventGetTypeInt']['__name__'] = 'eventGetTypeInt';

		$m['eventGetTypeInt']['__bind_type__'] = 0;
		$m['eventGetTypeInt']['__args__'] = [null,null,['event']];
		$m['eventGetTypeString'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['eventGetType'](event);
		};
		$m['eventGetTypeString']['__name__'] = 'eventGetTypeString';

		$m['eventGetTypeString']['__bind_type__'] = 0;
		$m['eventGetTypeString']['__args__'] = [null,null,['event']];
		$m['eventPreventDefault'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			evt['preventDefault']();
			return null;
		};
		$m['eventPreventDefault']['__name__'] = 'eventPreventDefault';

		$m['eventPreventDefault']['__bind_type__'] = 0;
		$m['eventPreventDefault']['__args__'] = [null,null,['evt']];
		$m['eventSetKeyCode'] = function(evt, key) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			evt['__is_instance__'] && typeof evt['__setattr__'] == 'function' ? evt['__setattr__']('keyCode', key) : $p['setattr'](evt, 'keyCode', key); 
			return null;
		};
		$m['eventSetKeyCode']['__name__'] = 'eventSetKeyCode';

		$m['eventSetKeyCode']['__bind_type__'] = 0;
		$m['eventSetKeyCode']['__args__'] = [null,null,['evt'],['key']];
		$m['eventToString'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return evt['toString']();
    
		};
		$m['eventToString']['__name__'] = 'eventToString';

		$m['eventToString']['__bind_type__'] = 0;
		$m['eventToString']['__args__'] = [null,null,['evt']];
		$m['iframeGetSrc'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](elem, 'src');
		};
		$m['iframeGetSrc']['__name__'] = 'iframeGetSrc';

		$m['iframeGetSrc']['__bind_type__'] = 0;
		$m['iframeGetSrc']['__args__'] = [null,null,['elem']];
		$m['getAbsoluteLeft'] = function(_elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetLeft.
    var elem = _elem;
    if (elem['offsetLeft'] == null) {
      return 0;
    }

    var left = 0;
    var curr = elem['parentNode'];
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr['offsetParent']) {
        left -= curr['scrollLeft'];
        curr = curr['parentNode'];
      }
    }

    while (elem) {
      left += elem['offsetLeft'];

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem['offsetParent'];
      if (parent && (parent['tagName'] == 'BODY') &&
          (elem['style']['position'] == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return left;
    
		};
		$m['getAbsoluteLeft']['__name__'] = 'getAbsoluteLeft';

		$m['getAbsoluteLeft']['__bind_type__'] = 0;
		$m['getAbsoluteLeft']['__args__'] = [null,null,['_elem']];
		$m['getAbsoluteTop'] = function(_elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetTop.
    var elem = _elem;
    if (elem['offsetTop'] == null) {
      return 0;
    }

    var top = 0;
    var curr = elem['parentNode'];
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr['offsetParent']) {
        top -= curr['scrollTop'];
        curr = curr['parentNode'];
      }
    }

    while (elem) {
      top += elem['offsetTop'];

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem['offsetParent'];
      if (parent && (parent['tagName'] == 'BODY') &&
          (elem['style']['position'] == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return top;
    
		};
		$m['getAbsoluteTop']['__name__'] = 'getAbsoluteTop';

		$m['getAbsoluteTop']['__bind_type__'] = 0;
		$m['getAbsoluteTop']['__args__'] = [null,null,['_elem']];
		$m['getAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
		};
		$m['getAttribute']['__name__'] = 'getAttribute';

		$m['getAttribute']['__bind_type__'] = 0;
		$m['getAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getElemAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return elem['getAttribute'](attr);
		};
		$m['getElemAttribute']['__name__'] = 'getElemAttribute';

		$m['getElemAttribute']['__bind_type__'] = 0;
		$m['getElemAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getBooleanAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    return !!elem[attr];
    
		};
		$m['getBooleanAttribute']['__name__'] = 'getBooleanAttribute';

		$m['getBooleanAttribute']['__bind_type__'] = 0;
		$m['getBooleanAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getBooleanElemAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			if ($p['bool'](!$p['bool'](elem['hasAttribute'](attr)))) {
				return null;
			}
			return $p['bool'](elem['getAttribute'](attr));
		};
		$m['getBooleanElemAttribute']['__name__'] = 'getBooleanElemAttribute';

		$m['getBooleanElemAttribute']['__bind_type__'] = 0;
		$m['getBooleanElemAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getCaptureElement'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['sCaptureElem'];
		};
		$m['getCaptureElement']['__name__'] = 'getCaptureElement';

		$m['getCaptureElement']['__bind_type__'] = 0;
		$m['getCaptureElement']['__args__'] = [null,null];
		$m['getChild'] = function(elem, index) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var count = 0, child = elem['firstChild'];
    while (child) {
      var next = child['nextSibling'];
      if (child['nodeType'] == 1) {
        if (index == count)
          return child;
        ++count;
      }
      child = next;
    }

    return null;
    
		};
		$m['getChild']['__name__'] = 'getChild';

		$m['getChild']['__bind_type__'] = 0;
		$m['getChild']['__args__'] = [null,null,['elem'],['index']];
		$m['getChildCount'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var count = 0, child = elem['firstChild'];
    while (child) {
      if (child['nodeType'] == 1)
      ++count;
      child = child['nextSibling'];
    }
    return count;
    
		};
		$m['getChildCount']['__name__'] = 'getChildCount';

		$m['getChildCount']['__bind_type__'] = 0;
		$m['getChildCount']['__args__'] = [null,null,['elem']];
		$m['getChildIndex'] = function(parent, toFind) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var count = 0, child = parent['firstChild'];
    while (child) {
        if (child == toFind)
            return count;
        if (child['nodeType'] == 1)
            ++count;
        child = child['nextSibling'];
    }

    return -1;
    
		};
		$m['getChildIndex']['__name__'] = 'getChildIndex';

		$m['getChildIndex']['__bind_type__'] = 0;
		$m['getChildIndex']['__args__'] = [null,null,['parent'],['toFind']];
		$m['getElementById'] = function(id) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var elem = $doc['getElementById'](id);
    return elem ? elem : null;
    
		};
		$m['getElementById']['__name__'] = 'getElementById';

		$m['getElementById']['__bind_type__'] = 0;
		$m['getElementById']['__args__'] = [null,null,['id']];
		$m['getEventListener'] = function(element) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return element['__listener'];
    
		};
		$m['getEventListener']['__name__'] = 'getEventListener';

		$m['getEventListener']['__bind_type__'] = 0;
		$m['getEventListener']['__args__'] = [null,null,['element']];
		$m['eventbitsmap'] = $p['dict']([]);
		$m['getEventsSunk'] = function(element) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return new $p['int'](element['__eventBits'] ? element['__eventBits'] : 0);
		};
		$m['getEventsSunk']['__name__'] = 'getEventsSunk';

		$m['getEventsSunk']['__bind_type__'] = 0;
		$m['getEventsSunk']['__args__'] = [null,null,['element']];
		$m['getFirstChild'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var child = elem['firstChild'];
    while (child && child['nodeType'] != 1)
      child = child['nextSibling'];
    return child ? child : null;
    
		};
		$m['getFirstChild']['__name__'] = 'getFirstChild';

		$m['getFirstChild']['__bind_type__'] = 0;
		$m['getFirstChild']['__args__'] = [null,null,['elem']];
		$m['getLastChild'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $and9,$and12,$and10,$and11,child;
			child = ($p['bool']($and9=elem)?$p['getattr'](elem, 'lastChild'):$and9);
			while ($p['bool'](($p['bool']($and11=child)?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and11))) {
				child = $p['getattr'](child, 'previousSibling');
			}
			return child;
		};
		$m['getLastChild']['__name__'] = 'getLastChild';

		$m['getLastChild']['__bind_type__'] = 0;
		$m['getLastChild']['__args__'] = [null,null,['elem']];
		$m['getInnerHTML'] = function(element) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var ret = element['innerHTML'];
    return (ret == null) ? null : ret;
    
		};
		$m['getInnerHTML']['__name__'] = 'getInnerHTML';

		$m['getInnerHTML']['__bind_type__'] = 0;
		$m['getInnerHTML']['__args__'] = [null,null,['element']];
		$m['getInnerText'] = function(element) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    // To mimic IE's 'innerText' property in the W3C DOM, we need to recursively
    // concatenate all child text nodes (depth first).
    var text = '', child = element['firstChild'];
    while (child) {
      if (child['nodeType'] == 1){ // 1 == Element node
        text += $m['getInnerText'](child);
      } else if (child['nodeValue']) {
        text += child['nodeValue'];
      }
      child = child['nextSibling'];
    }
    return text;
    
		};
		$m['getInnerText']['__name__'] = 'getInnerText';

		$m['getInnerText']['__bind_type__'] = 0;
		$m['getInnerText']['__args__'] = [null,null,['element']];
		$m['getIntAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
		};
		$m['getIntAttribute']['__name__'] = 'getIntAttribute';

		$m['getIntAttribute']['__bind_type__'] = 0;
		$m['getIntAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getIntElemAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			if ($p['bool'](!$p['bool'](elem['hasAttribute'](attr)))) {
				return null;
			}
			return $p['int'](elem['getAttribute'](attr));
		};
		$m['getIntElemAttribute']['__name__'] = 'getIntElemAttribute';

		$m['getIntElemAttribute']['__bind_type__'] = 0;
		$m['getIntElemAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getIntStyleAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var i = parseInt(elem['style'][attr]);
    if (!i) {
        return 0;
    }
    return i;
    
		};
		$m['getIntStyleAttribute']['__name__'] = 'getIntStyleAttribute';

		$m['getIntStyleAttribute']['__bind_type__'] = 0;
		$m['getIntStyleAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['getPrevSibling'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var sib,$and14,$and13;
			sib = $p['getattr'](elem, 'previousSibling');
			while ($p['bool'](($p['bool']($and13=sib)?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and13))) {
				sib = $p['getattr'](sib, 'previousSibling');
			}
			return sib;
		};
		$m['getPrevSibling']['__name__'] = 'getPrevSibling';

		$m['getPrevSibling']['__bind_type__'] = 0;
		$m['getPrevSibling']['__args__'] = [null,null,['elem']];
		$m['getNextSibling'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var sib = elem['nextSibling'];
    while (sib && sib['nodeType'] != 1)
      sib = sib['nextSibling'];
    return sib ? sib : null;
    
		};
		$m['getNextSibling']['__name__'] = 'getNextSibling';

		$m['getNextSibling']['__bind_type__'] = 0;
		$m['getNextSibling']['__args__'] = [null,null,['elem']];
		$m['getNodeType'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](elem, 'nodeType');
		};
		$m['getNodeType']['__name__'] = 'getNodeType';

		$m['getNodeType']['__bind_type__'] = 0;
		$m['getNodeType']['__args__'] = [null,null,['elem']];
		$m['getParent'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var parent = elem['parentNode'];
    if(parent == null) {
        return null;
    }
    if (parent['nodeType'] != 1)
        parent = null;
    return parent ? parent : null;
    
		};
		$m['getParent']['__name__'] = 'getParent';

		$m['getParent']['__bind_type__'] = 0;
		$m['getParent']['__args__'] = [null,null,['elem']];
		$m['getStyleAttribute'] = function(elem, attr) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var ret = elem['style'][attr];
    return (ret == null) ? null : ret;
    
		};
		$m['getStyleAttribute']['__name__'] = 'getStyleAttribute';

		$m['getStyleAttribute']['__bind_type__'] = 0;
		$m['getStyleAttribute']['__args__'] = [null,null,['elem'],['attr']];
		$m['insertChild'] = function(parent, toAdd, index) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    var count = 0, child = parent['firstChild'], before = null;
    while (child) {
      if (child['nodeType'] == 1) {
        if (count == index) {
          before = child;
          break;
        }
        ++count;
      }
      child = child['nextSibling'];
    }

    parent['insertBefore'](toAdd, before);
    
		};
		$m['insertChild']['__name__'] = 'insertChild';

		$m['insertChild']['__bind_type__'] = 0;
		$m['insertChild']['__args__'] = [null,null,['parent'],['toAdd'],['index']];
		$m['IterChildrenClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.DOM';
			$cls_definition['__md5__'] = '11d97d729fc0a85ba40e8929b22af90b';
			$method = $pyjs__bind_method2('__init__', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', elem) : $p['setattr'](self, 'parent', elem); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['bool']($p['getattr'](self, 'child')))) {
					throw ($p['StopIteration']);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', $m['getNextSibling']($p['getattr'](self, 'child'))) : $p['setattr'](self, 'child', $m['getNextSibling']($p['getattr'](self, 'child'))); 
				return $p['getattr'](self, 'lastChild');
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11d97d729fc0a85ba40e8929b22af90b') {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
		})();
		$m['iterChildren'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var parent = elem;
    var child = elem['firstChild'];
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            child = $m['getNextSibling'](child);
            return lastChild;
        },
        'remove': function() {
            parent['removeChild'](lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
		};
		$m['iterChildren']['__name__'] = 'iterChildren';

		$m['iterChildren']['__bind_type__'] = 0;
		$m['iterChildren']['__args__'] = [null,null,['elem']];
		$m['IterWalkChildren'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.DOM';
			$cls_definition['__md5__'] = '8c737fccd3bdd27796a1c4a73193d915';
			$method = $pyjs__bind_method2('__init__', function(elem, all_nodes) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					all_nodes = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof all_nodes == 'undefined') all_nodes=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', elem) : $p['setattr'](self, 'parent', elem); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('all_nodes', all_nodes) : $p['setattr'](self, 'all_nodes', all_nodes); 
				if ($p['bool'](all_nodes)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', $m['getFirstChild'](elem)) : $p['setattr'](self, 'child', $m['getFirstChild'](elem)); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('stack', $p['list']([])) : $p['setattr'](self, 'stack', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self'],['elem'],['all_nodes', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var nextSibling,firstChild;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'child')))) {
					throw ($p['StopIteration']);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				if ($p['bool']($p['getattr'](self, 'all_nodes'))) {
					firstChild = $p['getattr']($p['getattr'](self, 'child'), 'firstChild');
					nextSibling = $p['getattr']($p['getattr'](self, 'child'), 'nextSibling');
				}
				else {
					firstChild = $m['getFirstChild']($p['getattr'](self, 'child'));
					nextSibling = $m['getNextSibling']($p['getattr'](self, 'child'));
				}
				if ($p['bool'](!$p['op_is'](firstChild, null))) {
					if ($p['bool'](!$p['op_is'](nextSibling, null))) {
						self['stack']['append']($p['tuple']([nextSibling, $p['getattr'](self, 'parent')]));
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', $p['getattr'](self, 'child')) : $p['setattr'](self, 'parent', $p['getattr'](self, 'child')); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', firstChild) : $p['setattr'](self, 'child', firstChild); 
				}
				else if ($p['bool'](!$p['op_is'](nextSibling, null))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', nextSibling) : $p['setattr'](self, 'child', nextSibling); 
				}
				else if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'stack')), $constant_int_0) == 1))) {
					var $tupleassign1 = $p['__ass_unpack'](self['stack']['pop'](), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', $tupleassign1[0]) : $p['setattr'](self, 'child', $tupleassign1[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', $tupleassign1[1]) : $p['setattr'](self, 'parent', $tupleassign1[1]); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('child', null) : $p['setattr'](self, 'child', null); 
				}
				return $p['getattr'](self, 'lastChild');
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c737fccd3bdd27796a1c4a73193d915') {
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
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
		})();
		$m['walkChildren'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var parent = elem;
    var child = $m['getFirstChild'](elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            var firstChild = $m['getFirstChild'](child);
            var nextSibling = $m['getNextSibling'](child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack['push'](nextSibling);
                   parentStack['push'](parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack['length'] > 0) {
                child = stack['pop']();
                parent = parentStack['pop']();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {
            parent['removeChild'](lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
		};
		$m['walkChildren']['__name__'] = 'walkChildren';

		$m['walkChildren']['__bind_type__'] = 0;
		$m['walkChildren']['__args__'] = [null,null,['elem']];
		$m['isOrHasChild'] = function(parent, child) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			while ($p['bool'](child)) {
				if ($p['bool']($m['compare'](parent, child))) {
					return true;
				}
				child = $p['getattr'](child, 'parentNode');
				if ($p['bool'](!$p['bool'](child))) {
					return false;
				}
				if ($p['bool'](!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1))) {
					child = null;
				}
			}
			return false;
		};
		$m['isOrHasChild']['__name__'] = 'isOrHasChild';

		$m['isOrHasChild']['__bind_type__'] = 0;
		$m['isOrHasChild']['__args__'] = [null,null,['parent'],['child']];
		$m['releaseCapture'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $and16,$and15;
			if ($p['bool'](($p['bool']($and15=$m['sCaptureElem'])?$m['compare'](elem, $m['sCaptureElem']):$and15))) {
				$m['sCaptureElem'] = null;
				(typeof releaseCapture_impl == "undefined"?$m['releaseCapture_impl']:releaseCapture_impl)(elem);
			}
			return null;
		};
		$m['releaseCapture']['__name__'] = 'releaseCapture';

		$m['releaseCapture']['__bind_type__'] = 0;
		$m['releaseCapture']['__args__'] = [null,null,['elem']];
		$m['releaseCapture_impl'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['releaseCapture_impl']['__name__'] = 'releaseCapture_impl';

		$m['releaseCapture_impl']['__bind_type__'] = 0;
		$m['releaseCapture_impl']['__args__'] = [null,null,['elem']];
		$m['removeEventPreview'] = function(preview) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['sEventPreviewStack']['remove'](preview);
			return null;
		};
		$m['removeEventPreview']['__name__'] = 'removeEventPreview';

		$m['removeEventPreview']['__bind_type__'] = 0;
		$m['removeEventPreview']['__args__'] = [null,null,['preview']];
		$m['getOffsetHeight'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](elem, 'offsetHeight');
		};
		$m['getOffsetHeight']['__name__'] = 'getOffsetHeight';

		$m['getOffsetHeight']['__bind_type__'] = 0;
		$m['getOffsetHeight']['__args__'] = [null,null,['elem']];
		$m['getOffsetWidth'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr'](elem, 'offsetWidth');
		};
		$m['getOffsetWidth']['__name__'] = 'getOffsetWidth';

		$m['getOffsetWidth']['__bind_type__'] = 0;
		$m['getOffsetWidth']['__args__'] = [null,null,['elem']];
		$m['scrollIntoView'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var left = elem['offsetLeft'], top = elem['offsetTop'];
    var width = elem['offsetWidth'], height = elem['offsetHeight'];

    if (elem['parentNode'] != elem['offsetParent']) {
        left -= elem['parentNode']['offsetLeft'];
        top -= elem['parentNode']['offsetTop'];
    }

    var cur = elem['parentNode'];
    while (cur && (cur['nodeType'] == 1)) {
        if ((cur['style']['overflow'] == 'auto') || (cur['style']['overflow'] == 'scroll')) {
            if (left < cur['scrollLeft']) {
                cur['scrollLeft'] = left;
            }
            if (left + width > cur['scrollLeft'] + cur['clientWidth']) {
                cur['scrollLeft'] = (left + width) - cur['clientWidth'];
            }
            if (top < cur['scrollTop']) {
                cur['scrollTop'] = top;
            }
            if (top + height > cur['scrollTop'] + cur['clientHeight']) {
                cur['scrollTop'] = (top + height) - cur['clientHeight'];
            }
        }

        var offsetLeft = cur['offsetLeft'], offsetTop = cur['offsetTop'];
        if (cur['parentNode'] != cur['offsetParent']) {
            offsetLeft -= cur['parentNode']['offsetLeft'];
            offsetTop -= cur['parentNode']['offsetTop'];
        }

        left += offsetLeft - cur['scrollLeft'];
        top += offsetTop - cur['scrollTop'];
        cur = cur['parentNode'];
    }
    
		};
		$m['scrollIntoView']['__name__'] = 'scrollIntoView';

		$m['scrollIntoView']['__bind_type__'] = 0;
		$m['scrollIntoView']['__args__'] = [null,null,['elem']];
		$m['mash_name_for_glib'] = function(name, joiner) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof joiner == 'undefined') joiner=arguments['callee']['__args__'][3][1];
			var c,$iter1_nextval,$iter1_idx,res,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$iter1_type;
			res = '';
			$iter1_iter = name;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				c = $iter1_nextval['$nextval'];
				if ($p['bool'](c['isupper']())) {
					res = $p['__op_add']($add3=res,$add4=$p['__op_add']($add1=joiner,$add2=c['lower']()));
				}
				else {
					res = $p['__op_add']($add5=res,$add6=c);
				}
			}
			return res;
		};
		$m['mash_name_for_glib']['__name__'] = 'mash_name_for_glib';

		$m['mash_name_for_glib']['__bind_type__'] = 0;
		$m['mash_name_for_glib']['__args__'] = [null,null,['name'],['joiner', '-']];
		$m['removeAttribute'] = function(element, attribute) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    delete element[attribute];
    
		};
		$m['removeAttribute']['__name__'] = 'removeAttribute';

		$m['removeAttribute']['__bind_type__'] = 0;
		$m['removeAttribute']['__args__'] = [null,null,['element'],['attribute']];
		$m['setAttribute'] = function(element, attribute, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    element[attribute] = value;
    
		};
		$m['setAttribute']['__name__'] = 'setAttribute';

		$m['setAttribute']['__bind_type__'] = 0;
		$m['setAttribute']['__args__'] = [null,null,['element'],['attribute'],['value']];
		$m['setElemAttribute'] = function(element, attribute, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			element['setAttribute'](attribute, value);
			return null;
		};
		$m['setElemAttribute']['__name__'] = 'setElemAttribute';

		$m['setElemAttribute']['__bind_type__'] = 0;
		$m['setElemAttribute']['__args__'] = [null,null,['element'],['attribute'],['value']];
		$m['setBooleanAttribute'] = function(elem, attr, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    elem[attr] = value;
    
		};
		$m['setBooleanAttribute']['__name__'] = 'setBooleanAttribute';

		$m['setBooleanAttribute']['__bind_type__'] = 0;
		$m['setBooleanAttribute']['__args__'] = [null,null,['elem'],['attr'],['value']];
		$m['setCapture'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['sCaptureElem'] = elem;
			(typeof setCapture_impl == "undefined"?$m['setCapture_impl']:setCapture_impl)(elem);
			return null;
		};
		$m['setCapture']['__name__'] = 'setCapture';

		$m['setCapture']['__bind_type__'] = 0;
		$m['setCapture']['__args__'] = [null,null,['elem']];
		$m['setCapture_impl'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['setCapture_impl']['__name__'] = 'setCapture_impl';

		$m['setCapture_impl']['__bind_type__'] = 0;
		$m['setCapture_impl']['__args__'] = [null,null,['elem']];
		$m['setEventListener'] = function(element, listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    element['__listener'] = listener;
    
		};
		$m['setEventListener']['__name__'] = 'setEventListener';

		$m['setEventListener']['__bind_type__'] = 0;
		$m['setEventListener']['__args__'] = [null,null,['element'],['listener']];
		$m['createTextNode'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $doc['createTextNode'](txt);
		};
		$m['createTextNode']['__name__'] = 'createTextNode';

		$m['createTextNode']['__bind_type__'] = 0;
		$m['createTextNode']['__args__'] = [null,null,['txt']];
		$m['setInnerHTML'] = function(element, html) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

element['innerHTML'] = html || "";
		};
		$m['setInnerHTML']['__name__'] = 'setInnerHTML';

		$m['setInnerHTML']['__bind_type__'] = 0;
		$m['setInnerHTML']['__args__'] = [null,null,['element'],['html']];
		$m['setInnerText'] = function(elem, text) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    // Remove all children first.
    while (elem['firstChild']) {
        elem['removeChild'](elem['firstChild']);
    }
    // Add a new text node.
    elem['appendChild']($doc['createTextNode'](text));
    
		};
		$m['setInnerText']['__name__'] = 'setInnerText';

		$m['setInnerText']['__bind_type__'] = 0;
		$m['setInnerText']['__args__'] = [null,null,['elem'],['text']];
		$m['setIntElemAttribute'] = function(elem, attr, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			elem['setAttribute'](attr, $p['str'](value));
			return null;
		};
		$m['setIntElemAttribute']['__name__'] = 'setIntElemAttribute';

		$m['setIntElemAttribute']['__bind_type__'] = 0;
		$m['setIntElemAttribute']['__args__'] = [null,null,['elem'],['attr'],['value']];
		$m['setIntAttribute'] = function(elem, attr, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    elem[attr] = value['valueOf']();
    
		};
		$m['setIntAttribute']['__name__'] = 'setIntAttribute';

		$m['setIntAttribute']['__bind_type__'] = 0;
		$m['setIntAttribute']['__args__'] = [null,null,['elem'],['attr'],['value']];
		$m['setIntStyleAttribute'] = function(elem, attr, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    elem['style'][attr] = value['valueOf']();
    
		};
		$m['setIntStyleAttribute']['__name__'] = 'setIntStyleAttribute';

		$m['setIntStyleAttribute']['__bind_type__'] = 0;
		$m['setIntStyleAttribute']['__args__'] = [null,null,['elem'],['attr'],['value']];
		$m['setOptionText'] = function(select, text, index) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var option;
			option = select['options']['item'](index);
			option['__is_instance__'] && typeof option['__setattr__'] == 'function' ? option['__setattr__']('text', text) : $p['setattr'](option, 'text', text); 
			return null;
		};
		$m['setOptionText']['__name__'] = 'setOptionText';

		$m['setOptionText']['__bind_type__'] = 0;
		$m['setOptionText']['__args__'] = [null,null,['select'],['text'],['index']];
		$m['setStyleAttribute'] = function(element, attr, value) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    element['style'][attr] = value;
    
		};
		$m['setStyleAttribute']['__name__'] = 'setStyleAttribute';

		$m['setStyleAttribute']['__bind_type__'] = 0;
		$m['setStyleAttribute']['__args__'] = [null,null,['element'],['attr'],['value']];
		$m['setStyleAttributes'] = function(element) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
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
			var $iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$iter2_array;
			$iter2_iter = kwargs['items']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
				attr = $tupleassign2[0];
				val = $tupleassign2[1];
				if ($p['bool']($p['hasattr']($p['getattr'](element, 'style'), 'setProperty'))) {
					element['style']['setProperty']($m['mash_name_for_glib'](attr), val, '');
				}
				else {
					element['style']['setAttribute'](attr, val, '');
				}
			}
			return null;
		};
		$m['setStyleAttributes']['__name__'] = 'setStyleAttributes';

		$m['setStyleAttributes']['__bind_type__'] = 0;
		$m['setStyleAttributes']['__args__'] = [null,['kwargs'],['element']];
		$m['sinkEvents'] = function(element, bits) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter5_nextval,$iter3_idx,$iter5_idx,dispEvnt,event_name,$iter4_iter,$iter3_nextval,$iter3_array,$iter5_array,$iter4_idx,$iter5_iter,$iter3_iter,$iter4_type,$iter3_type,$iter4_array,$iter5_type,bit,$iter4_nextval;
element['__eventBits'] = bits;
			(typeof sinkEventsMozilla == "undefined"?$m['sinkEventsMozilla']:sinkEventsMozilla)(element, bits);
			dispEvnt = $wnd['__dispatchEvent'];
			$iter3_iter = $p['getattr']($m['Event'], 'eventbits');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				bit = $iter3_nextval['$nextval'];
				if ($p['bool']($p['op_bitand2'](bits, bit))) {
					$iter4_iter = $p['getattr']($m['Event'], 'eventbits')['__getitem__'](bit)['__getitem__']($constant_int_1);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						event_name = $iter4_nextval['$nextval'];
element['on'+event_name] = dispEvnt
					}
				}
				else {
					$iter5_iter = $p['getattr']($m['Event'], 'eventbits')['__getitem__'](bit)['__getitem__']($constant_int_1);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						event_name = $iter5_nextval['$nextval'];
element['on'+event_name] = null
					}
				}
			}
			return null;
		};
		$m['sinkEvents']['__name__'] = 'sinkEvents';

		$m['sinkEvents']['__bind_type__'] = 0;
		$m['sinkEvents']['__args__'] = [null,null,['element'],['bits']];
		$m['sinkEventsMozilla'] = function(element, bits) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

 			return null;
		};
		$m['sinkEventsMozilla']['__name__'] = 'sinkEventsMozilla';

		$m['sinkEventsMozilla']['__bind_type__'] = 0;
		$m['sinkEventsMozilla']['__args__'] = [null,null,['element'],['bits']];
		$m['toString'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var temp = elem['cloneNode'](true);
    var tempDiv = $doc['createElement']("DIV");
    tempDiv['appendChild'](temp);
    var outer = tempDiv['innerHTML'];
    //temp['innerHTML'] = " ";
    return outer;
    
		};
		$m['toString']['__name__'] = 'toString';

		$m['toString']['__bind_type__'] = 0;
		$m['toString']['__args__'] = [null,null,['elem']];
		$m['dispatchEvent'] = function(event, element, listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			(typeof dispatchEventImpl == "undefined"?$m['dispatchEventImpl']:dispatchEventImpl)(event, element, listener);
			return null;
		};
		$m['dispatchEvent']['__name__'] = 'dispatchEvent';

		$m['dispatchEvent']['__bind_type__'] = 0;
		$m['dispatchEvent']['__args__'] = [null,null,['event'],['element'],['listener']];
		$m['previewEvent'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub2,$sub1,preview,ret;
			ret = true;
			if ($p['bool'](($p['cmp']($p['len']($m['sEventPreviewStack']), $constant_int_0) == 1))) {
				preview = $m['sEventPreviewStack']['__getitem__']($p['__op_sub']($sub1=$p['len']($m['sEventPreviewStack']),$sub2=$constant_int_1));
				ret = preview['onEventPreview'](evt);
				if ($p['bool'](!$p['bool'](ret))) {
					$m['eventCancelBubble'](evt, true);
					$m['eventPreventDefault'](evt);
				}
			}
			return ret;
		};
		$m['previewEvent']['__name__'] = 'previewEvent';

		$m['previewEvent']['__bind_type__'] = 0;
		$m['previewEvent']['__args__'] = [null,null,['evt']];
		$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);

 			return null;
		};
		$m['dispatchEventAndCatch']['__name__'] = 'dispatchEventAndCatch';

		$m['dispatchEventAndCatch']['__bind_type__'] = 0;
		$m['dispatchEventAndCatch']['__args__'] = [null,null,['evt'],['elem'],['listener'],['handler']];
		$m['currentEvent'] = null;
		$m['dispatchEventImpl'] = function(event, element, listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var prevCurrentEvent;
			if ($p['bool']($p['op_eq'](element, $m['sCaptureElem']))) {
				if ($p['bool']($p['op_eq']($m['eventGetType'](event), 'losecapture'))) {
					$m['sCaptureElem'] = null;
				}
			}
			prevCurrentEvent = $m['currentEvent'];
			$m['currentEvent'] = event;
			listener['onBrowserEvent'](event);
			$m['currentEvent'] = prevCurrentEvent;
			return null;
		};
		$m['dispatchEventImpl']['__name__'] = 'dispatchEventImpl';

		$m['dispatchEventImpl']['__bind_type__'] = 0;
		$m['dispatchEventImpl']['__args__'] = [null,null,['event'],['element'],['listener']];
		$m['eventGetCurrentEvent'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['currentEvent'];
		};
		$m['eventGetCurrentEvent']['__name__'] = 'eventGetCurrentEvent';

		$m['eventGetCurrentEvent']['__bind_type__'] = 0;
		$m['eventGetCurrentEvent']['__args__'] = [null,null];
		$m['insertListItem'] = function(select, item, value, index) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var option;
			option = $m['createElement']('OPTION');
			$m['setInnerText'](option, item);
			if ($p['bool'](!$p['op_is'](value, null))) {
				$m['setAttribute'](option, 'value', value);
			}
			if ($p['bool']($p['op_eq'](index, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))) {
				$m['appendChild'](select, option);
			}
			else {
				$m['insertChild'](select, option, index);
			}
			return null;
		};
		$m['insertListItem']['__name__'] = 'insertListItem';

		$m['insertListItem']['__bind_type__'] = 0;
		$m['insertListItem']['__args__'] = [null,null,['select'],['item'],['value'],['index']];
		$m['getBodyOffsetTop'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $constant_int_0;
		};
		$m['getBodyOffsetTop']['__name__'] = 'getBodyOffsetTop';

		$m['getBodyOffsetTop']['__bind_type__'] = 0;
		$m['getBodyOffsetTop']['__args__'] = [null,null];
		$m['getBodyOffsetLeft'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $constant_int_0;
		};
		$m['getBodyOffsetLeft']['__name__'] = 'getBodyOffsetLeft';

		$m['getBodyOffsetLeft']['__bind_type__'] = 0;
		$m['getBodyOffsetLeft']['__args__'] = [null,null];
		$m['eventGetMouseWheelVelocityY'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return Math['round'](-evt['wheelDelta'] / 40) || 0;
    
		};
		$m['eventGetMouseWheelVelocityY']['__name__'] = 'eventGetMouseWheelVelocityY';

		$m['eventGetMouseWheelVelocityY']['__bind_type__'] = 0;
		$m['eventGetMouseWheelVelocityY']['__args__'] = [null,null,['evt']];
		if ($p['bool'](!$p['bool']($p['getattr']($m['pyjd'], 'is_desktop')))) {
			$m['init']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
