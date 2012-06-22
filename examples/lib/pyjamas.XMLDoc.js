/* start module: pyjamas.XMLDoc */
$pyjs['loaded_modules']['pyjamas.XMLDoc'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.XMLDoc']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.XMLDoc'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.XMLDoc'];
	$m['__repr__'] = function() { return '<module: pyjamas.XMLDoc>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.XMLDoc';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['XMLDoc'] = $pyjs['loaded_modules']['pyjamas.XMLDoc'];
	try {


		$m['create_xml_doc'] = function(text) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return null;
		};
		$m['create_xml_doc']['__name__'] = 'create_xml_doc';

		$m['create_xml_doc']['__bind_type__'] = 0;
		$m['create_xml_doc']['__args__'] = [null,null,['text']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.XMLDoc */


/* end module: pyjamas.XMLDoc */


