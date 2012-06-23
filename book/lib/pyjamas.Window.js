/* start module: pyjamas.Window */
$pyjs['loaded_modules']['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Window']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Window'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Window'];
	$m['__repr__'] = function() { return '<module: pyjamas.Window>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Window'] = $pyjs['loaded_modules']['pyjamas.Window'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['closingListeners'] = $p['list']([]);
		$m['resizeListeners'] = $p['list']([]);
		$m['Location'] = $p['___import___']('pyjamas.Location', 'pyjamas', null, false);
		$m['init_listeners'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

 			return null;
		};
		$m['init_listeners']['__name__'] = 'init_listeners';

		$m['init_listeners']['__bind_type__'] = 0;
		$m['init_listeners']['__args__'] = [null,null];
		$m['addWindowCloseListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['closingListeners']['append'](listener);
			return null;
		};
		$m['addWindowCloseListener']['__name__'] = 'addWindowCloseListener';

		$m['addWindowCloseListener']['__bind_type__'] = 0;
		$m['addWindowCloseListener']['__args__'] = [null,null,['listener']];
		$m['addWindowResizeListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['resizeListeners']['append'](listener);
			return null;
		};
		$m['addWindowResizeListener']['__name__'] = 'addWindowResizeListener';

		$m['addWindowResizeListener']['__bind_type__'] = 0;
		$m['addWindowResizeListener']['__args__'] = [null,null,['listener']];
		$m['removeWindowCloseListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['closingListeners']['remove'](listener);
			return null;
		};
		$m['removeWindowCloseListener']['__name__'] = 'removeWindowCloseListener';

		$m['removeWindowCloseListener']['__bind_type__'] = 0;
		$m['removeWindowCloseListener']['__args__'] = [null,null,['listener']];
		$m['removeWindowResizeListener'] = function(listener) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['resizeListeners']['remove'](listener);
			return null;
		};
		$m['removeWindowResizeListener']['__name__'] = 'removeWindowResizeListener';

		$m['removeWindowResizeListener']['__bind_type__'] = 0;
		$m['removeWindowResizeListener']['__args__'] = [null,null,['listener']];
		$m['alert'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['get_main_frame']()['_alert'](txt);
			return null;
		};
		$m['alert']['__name__'] = 'alert';

		$m['alert']['__bind_type__'] = 0;
		$m['alert']['__args__'] = [null,null,['txt']];
		$m['confirm'] = function(msg) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $wnd['confirm'](msg);
		};
		$m['confirm']['__name__'] = 'confirm';

		$m['confirm']['__bind_type__'] = 0;
		$m['confirm']['__args__'] = [null,null,['msg']];
		$m['prompt'] = function(msg, defaultReply) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof defaultReply == 'undefined') defaultReply=arguments['callee']['__args__'][3][1];

			return $wnd['prompt'](msg, defaultReply, '', $constant_int_0);
		};
		$m['prompt']['__name__'] = 'prompt';

		$m['prompt']['__bind_type__'] = 0;
		$m['prompt']['__args__'] = [null,null,['msg'],['defaultReply', '']];
		$m['enableScrolling'] = function(enable) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $and1,$and2,$or1,$or2;
			$p['getattr']($p['getattr']($doc, 'body'), 'style')['__is_instance__'] && typeof $p['getattr']($p['getattr']($doc, 'body'), 'style')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($doc, 'body'), 'style')['__setattr__']('overflow', ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden')) : $p['setattr']($p['getattr']($p['getattr']($doc, 'body'), 'style'), 'overflow', ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden')); 
			return null;
		};
		$m['enableScrolling']['__name__'] = 'enableScrolling';

		$m['enableScrolling']['__bind_type__'] = 0;
		$m['enableScrolling']['__args__'] = [null,null,['enable']];
		$m['scrollBy'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$wnd['scrollBy'](x, y);
			return null;
		};
		$m['scrollBy']['__name__'] = 'scrollBy';

		$m['scrollBy']['__bind_type__'] = 0;
		$m['scrollBy']['__args__'] = [null,null,['x'],['y']];
		$m['scroll'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$wnd['scroll'](x, y);
			return null;
		};
		$m['scroll']['__name__'] = 'scroll';

		$m['scroll']['__bind_type__'] = 0;
		$m['scroll']['__args__'] = [null,null,['x'],['y']];
		$m['getClientHeight'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $pyjs_try_err;
			try {
				return $p['getattr']($wnd, 'innerHeight');
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return $p['getattr']($p['getattr']($doc, 'body'), 'clientHeight');
				}
			}
			return null;
		};
		$m['getClientHeight']['__name__'] = 'getClientHeight';

		$m['getClientHeight']['__bind_type__'] = 0;
		$m['getClientHeight']['__args__'] = [null,null];
		$m['getClientWidth'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $pyjs_try_err;
			try {
				return $p['getattr']($wnd, 'innerWidth');
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return $p['getattr']($p['getattr']($doc, 'body'), 'clientWidth');
				}
			}
			return null;
		};
		$m['getClientWidth']['__name__'] = 'getClientWidth';

		$m['getClientWidth']['__bind_type__'] = 0;
		$m['getClientWidth']['__args__'] = [null,null];
		$m['getScrollLeft'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $p['getattr']((typeof getDocumentRoot == "undefined"?$m['getDocumentRoot']:getDocumentRoot)(), 'scrollLeft');
			return null;
		};
		$m['getScrollLeft']['__name__'] = 'getScrollLeft';

		$m['getScrollLeft']['__bind_type__'] = 0;
		$m['getScrollLeft']['__args__'] = [null,null];
		$m['getScrollTop'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $p['getattr']((typeof getDocumentRoot == "undefined"?$m['getDocumentRoot']:getDocumentRoot)(), 'scrollTop');
			return null;
		};
		$m['getScrollTop']['__name__'] = 'getScrollTop';

		$m['getScrollTop']['__bind_type__'] = 0;
		$m['getScrollTop']['__args__'] = [null,null];
		$m['getDocumentRoot'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			if ($p['bool']($p['op_eq']($p['getattr']($doc, 'compatMode'), 'CSS1Compat'))) {
				return $p['getattr']($doc, 'documentElement');
			}
			return $p['getattr']($doc, 'body');
		};
		$m['getDocumentRoot']['__name__'] = 'getDocumentRoot';

		$m['getDocumentRoot']['__bind_type__'] = 0;
		$m['getDocumentRoot']['__args__'] = [null,null];
		$m['setLocation'] = function(url) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var w;
			w = $wnd;
			w['__is_instance__'] && typeof w['__setattr__'] == 'function' ? w['__setattr__']('location', url) : $p['setattr'](w, 'location', url); 
			return null;
		};
		$m['setLocation']['__name__'] = 'setLocation';

		$m['setLocation']['__bind_type__'] = 0;
		$m['setLocation']['__args__'] = [null,null,['url']];
		$m['location'] = null;
		$m['getLocation'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			if ($p['bool'](!$p['bool']($m['location']))) {
				$m['location'] = $m['Location']['Location']($p['getattr']($wnd, 'location'));
			}
			return $m['location'];
		};
		$m['getLocation']['__name__'] = 'getLocation';

		$m['getLocation']['__bind_type__'] = 0;
		$m['getLocation']['__args__'] = [null,null];
		$m['getTitle'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $p['getattr']($doc, 'title');
		};
		$m['getTitle']['__name__'] = 'getTitle';

		$m['getTitle']['__bind_type__'] = 0;
		$m['getTitle']['__args__'] = [null,null];
		$m['open'] = function(url, name, features) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $wnd['open'](url, name, features);
		};
		$m['open']['__name__'] = 'open';

		$m['open']['__bind_type__'] = 0;
		$m['open']['__args__'] = [null,null,['url'],['name'],['features']];
		$m['setMargin'] = function(size) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$p['getattr']($p['getattr']($doc, 'body'), 'style')['__is_instance__'] && typeof $p['getattr']($p['getattr']($doc, 'body'), 'style')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($doc, 'body'), 'style')['__setattr__']('margin', size) : $p['setattr']($p['getattr']($p['getattr']($doc, 'body'), 'style'), 'margin', size); 
			return null;
		};
		$m['setMargin']['__name__'] = 'setMargin';

		$m['setMargin']['__bind_type__'] = 0;
		$m['setMargin']['__args__'] = [null,null,['size']];
		$m['setTitle'] = function(title) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var d;
			d = $doc;
			d['__is_instance__'] && typeof d['__setattr__'] == 'function' ? d['__setattr__']('title', title) : $p['setattr'](d, 'title', title); 
			return null;
		};
		$m['setTitle']['__name__'] = 'setTitle';

		$m['setTitle']['__bind_type__'] = 0;
		$m['setTitle']['__args__'] = [null,null,['title']];
		$m['setOnError'] = function(onError) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['setOnError']['__name__'] = 'setOnError';

		$m['setOnError']['__bind_type__'] = 0;
		$m['setOnError']['__args__'] = [null,null,['onError']];
		$m['onError'] = function(msg, url, linenumber) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

 			return null;
		};
		$m['onError']['__name__'] = 'onError';

		$m['onError']['__bind_type__'] = 0;
		$m['onError']['__args__'] = [null,null,['msg'],['url'],['linenumber']];
		$m['onClosed'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			(typeof fireClosedImpl == "undefined"?$m['fireClosedImpl']:fireClosedImpl)();
			return null;
		};
		$m['onClosed']['__name__'] = 'onClosed';

		$m['onClosed']['__bind_type__'] = 0;
		$m['onClosed']['__args__'] = [null,null];
		$m['onClosing'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			(typeof fireClosingImpl == "undefined"?$m['fireClosingImpl']:fireClosingImpl)();
			return null;
		};
		$m['onClosing']['__name__'] = 'onClosing';

		$m['onClosing']['__bind_type__'] = 0;
		$m['onClosing']['__args__'] = [null,null];
		$m['onResize'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			(typeof fireResizedImpl == "undefined"?$m['fireResizedImpl']:fireResizedImpl)();
			return null;
		};
		$m['onResize']['__name__'] = 'onResize';

		$m['onResize']['__bind_type__'] = 0;
		$m['onResize']['__args__'] = [null,null];
		$m['fireClosedAndCatch'] = function(handler) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['fireClosedAndCatch']['__name__'] = 'fireClosedAndCatch';

		$m['fireClosedAndCatch']['__bind_type__'] = 0;
		$m['fireClosedAndCatch']['__args__'] = [null,null,['handler']];
		$m['fireClosedImpl'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
			$iter1_iter = $m['closingListeners'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				listener['onWindowClosed']();
			}
			return null;
		};
		$m['fireClosedImpl']['__name__'] = 'fireClosedImpl';

		$m['fireClosedImpl']['__bind_type__'] = 0;
		$m['fireClosedImpl']['__args__'] = [null,null];
		$m['fireClosingAndCatch'] = function(handler) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['fireClosingAndCatch']['__name__'] = 'fireClosingAndCatch';

		$m['fireClosingAndCatch']['__bind_type__'] = 0;
		$m['fireClosingAndCatch']['__args__'] = [null,null,['handler']];
		$m['resize'] = function(width, height) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$wnd['resizeTo'](width, height);
			return null;
		};
		$m['resize']['__name__'] = 'resize';

		$m['resize']['__bind_type__'] = 0;
		$m['resize']['__args__'] = [null,null,['width'],['height']];
		$m['resizeBy'] = function(width, height) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$wnd['resizeBy'](width, height);
			return null;
		};
		$m['resizeBy']['__name__'] = 'resizeBy';

		$m['resizeBy']['__bind_type__'] = 0;
		$m['resizeBy']['__args__'] = [null,null,['width'],['height']];
		$m['fireClosingImpl'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,msg,$iter2_array;
			ret = null;
			$iter2_iter = $m['closingListeners'];
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				msg = listener['onWindowClosing']();
				if ($p['bool']($p['op_is'](ret, null))) {
					ret = msg;
				}
			}
			return ret;
		};
		$m['fireClosingImpl']['__name__'] = 'fireClosingImpl';

		$m['fireClosingImpl']['__bind_type__'] = 0;
		$m['fireClosingImpl']['__args__'] = [null,null];
		$m['fireResizedAndCatch'] = function(handler) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

 			return null;
		};
		$m['fireResizedAndCatch']['__name__'] = 'fireResizedAndCatch';

		$m['fireResizedAndCatch']['__bind_type__'] = 0;
		$m['fireResizedAndCatch']['__args__'] = [null,null,['handler']];
		$m['fireResizedImpl'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array;
			$iter3_iter = $m['resizeListeners'];
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				listener = $iter3_nextval['$nextval'];
				listener['onWindowResized']($m['getClientWidth'](), $m['getClientHeight']());
			}
			return null;
		};
		$m['fireResizedImpl']['__name__'] = 'fireResizedImpl';

		$m['fireResizedImpl']['__bind_type__'] = 0;
		$m['fireResizedImpl']['__args__'] = [null,null];
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

 			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$m['init']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas']
*/
