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
    
		};
		$m['back']['__name__'] = 'back';

		$m['back']['__bind_type__'] = 0;
		$m['back']['__args__'] = [null,null];
		$m['forward'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    $wnd['history']['forward']();
    
		};
		$m['forward']['__name__'] = 'forward';

		$m['forward']['__bind_type__'] = 0;
		$m['forward']['__args__'] = [null,null];
		$m['getToken'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    return $wnd['__historyToken'];
    
		};
		$m['getToken']['__name__'] = 'getToken';

		$m['getToken']['__bind_type__'] = 0;
		$m['getToken']['__args__'] = [null,null];
		$m['newItem'] = function(historyToken) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var iframe = $doc['getElementById']('__pygwt_historyFrame');
    iframe['contentWindow']['location']['href'] = 'history.html?' + historyToken;
    
		};
		$m['newItem']['__name__'] = 'newItem';

		$m['newItem']['__bind_type__'] = 0;
		$m['newItem']['__args__'] = [null,null,['historyToken']];
		$m['onHistoryChanged'] = function(historyToken) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			(typeof fireHistoryChangedImpl == "undefined"?$m['fireHistoryChangedImpl']:fireHistoryChangedImpl)(historyToken);
			return null;
		};
		$m['onHistoryChanged']['__name__'] = 'onHistoryChanged';

		$m['onHistoryChanged']['__bind_type__'] = 0;
		$m['onHistoryChanged']['__args__'] = [null,null,['historyToken']];
		$m['fireHistoryChangedAndCatch'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

 			return null;
		};
		$m['fireHistoryChangedAndCatch']['__name__'] = 'fireHistoryChangedAndCatch';

		$m['fireHistoryChangedAndCatch']['__bind_type__'] = 0;
		$m['fireHistoryChangedAndCatch']['__args__'] = [null,null];
		$m['fireHistoryChangedImpl'] = function(historyToken) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
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
				listener['onHistoryChanged'](historyToken);
			}
			return null;
		};
		$m['fireHistoryChangedImpl']['__name__'] = 'fireHistoryChangedImpl';

		$m['fireHistoryChangedImpl']['__bind_type__'] = 0;
		$m['fireHistoryChangedImpl']['__args__'] = [null,null,['historyToken']];
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


    // Check for existence of the history frame.
    var historyFrame = $doc['getElementById']('__pygwt_historyFrame');
    if (!historyFrame)
        return false;

    // Get the initial token from the url's hash component.
    var hash = $wnd['location']['hash'];
    if (hash['length'] > 0)
        $wnd['__historyToken'] = decodeURI(hash['substring'](1))['replace']('%23','#');
    else
        $wnd['__historyToken'] = '';

    // Initialize the history iframe.  If '__historyToken' already exists, then
    // we're probably backing into the app, so _don't_ set the iframe's location.
    var tokenElement = null;
    if (historyFrame['contentWindow']) {
        var doc = historyFrame['contentWindow']['document'];
        tokenElement = doc ? doc['getElementById']('__historyToken') : null;
    }

    if (tokenElement)
        $wnd['__historyToken'] = tokenElement['value'];
    else
        historyFrame['src'] = 'history.html?' + $wnd['__historyToken'];

    // Expose the '__onHistoryChanged' function, which will be called by
    // the history frame when it loads.
    $wnd['__onHistoryChanged'] = function(token) {
        // Change the URL and notify the application that its history frame
        // is changing.  Note that setting location['hash'] does _not_ add a history
        // frame on IE, so we don't have to do a 'location['replace']()'.
        if (token != $wnd['__historyToken']) {
            $wnd['__historyToken'] = token;
            $wnd['location']['hash'] = encodeURI(token)['replace']('#','%23');
            // TODO - move init back into History
            // this['onHistoryChanged'](token);
            $m['onHistoryChanged'](token);
        }
    };

    // This is the URL check timer.  It detects when an unexpected change
    // occurs in the document's URL (e['g']. when the user enters one manually
    // or selects a 'favorite', but only the #hash part changes).  When this
    // occurs, we _must_ reload the page.  This is because IE has a really
    // nasty bug that totally mangles its history stack and causes the location
    // bar in the UI to stop working under these circumstances.
    var urlChecker = function() {
        var hash = $wnd['location']['hash'];
        if (hash['length'] > 0) {
            var token = decodeURI(hash['substring'](1))['replace']('%23','#');
            if ($wnd['__historyToken'] && (token != $wnd['__historyToken']))
                $wnd['location']['reload']();
        }
        $wnd['setTimeout'](urlChecker, 250);
    };
    urlChecker();

    return true;
    
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
