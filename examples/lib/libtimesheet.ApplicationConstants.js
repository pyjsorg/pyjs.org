/* start module: libtimesheet.ApplicationConstants */
$pyjs['loaded_modules']['libtimesheet.ApplicationConstants'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.ApplicationConstants']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.ApplicationConstants'];
	if(typeof $pyjs['loaded_modules']['libtimesheet'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet']['__was_initialized__']) $p['___import___']('libtimesheet', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.ApplicationConstants'];
	$m['__repr__'] = function() { return '<module: libtimesheet.ApplicationConstants>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.ApplicationConstants';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet']['ApplicationConstants'] = $pyjs['loaded_modules']['libtimesheet.ApplicationConstants'];
	try {


		$m['Notification'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.ApplicationConstants';
			$cls_definition['__md5__'] = '82e88e653f686622cdc0da21d26d03f9';
			$cls_definition['STARTUP'] = 'startup';
			$cls_definition['SHOW_DIALOG'] = 'showDialog';
			$cls_definition['HELLO'] = 'hello';
			$cls_definition['FILE_LOADED'] = 'fileLoaded';
			$cls_definition['EDIT_SELECTED'] = 'editMode';
			$cls_definition['SUM_SELECTED'] = 'summaryMode';
			$cls_definition['DATE_SELECTED'] = 'dateSelected';
			$cls_definition['CELL_SELECTED'] = 'cellSelected';
			$cls_definition['CELL_UPDATED'] = 'cellUpdated';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Notification', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.ApplicationConstants */


/* end module: libtimesheet.ApplicationConstants */


