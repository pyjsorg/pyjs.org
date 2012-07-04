/* start module: i18n */
$pyjs['loaded_modules']['i18n'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['i18n']['__was_initialized__']) return $pyjs['loaded_modules']['i18n'];
	var $m = $pyjs['loaded_modules']['i18n'];
	$m['__repr__'] = function() { return '<module: i18n>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'i18n';
	$m['__name__'] = __mod_name__;
	try {


		$m['JSONTranslations'] = $p['___import___']('pyjamas.JSONTranslations.JSONTranslations', null, null, false);
		$m['__all__'] = $p['list'](['i18n', 'gettext', 'ngettext', '_']);
		$m['Translations'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'i18n';
			$cls_definition['__md5__'] = '1882d21fabd2f0fdae895feb2abf8131';
			$cls_definition['base_url'] = 'lang';
			$cls_definition['domain'] = 'Gettext';
			var $bases = new Array($m['JSONTranslations']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Translations', $p['tuple']($bases), $data);
		})();
		$m['i18n'] = $m['Translations']();
		$m['gettext'] = $p['getattr']($m['i18n'], 'gettext');
		$m['ngettext'] = $p['getattr']($m['i18n'], 'ngettext');
		$m['_'] = $m['gettext'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end i18n */


/* end module: i18n */


/*
PYJS_DEPS: ['pyjamas.JSONTranslations.JSONTranslations', 'pyjamas', 'pyjamas.JSONTranslations']
*/
