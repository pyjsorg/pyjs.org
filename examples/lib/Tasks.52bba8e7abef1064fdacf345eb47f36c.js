/* start module: Tasks */
$pyjs['loaded_modules']['Tasks'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Tasks']['__was_initialized__']) return $pyjs['loaded_modules']['Tasks'];
	var $m = $pyjs['loaded_modules']['Tasks'];
	$m['__repr__'] = function() { return '<module: Tasks>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Tasks';
	$m['__name__'] = __mod_name__;
	try {


		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Tasks'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Tasks';
			$cls_definition['__md5__'] = 'f4fcf7efe8e61a0b757ef62369601853';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f4fcf7efe8e61a0b757ef62369601853') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var panel;
				$m['Composite']['__init__'](self);
				panel = $m['VerticalPanel']();
				panel['add']($m['CheckBox']('Get groceries'));
				panel['add']($m['CheckBox']('Walk the dog'));
				panel['add']($m['CheckBox']('Start Web 2.0 company'));
				panel['add']($m['CheckBox']('Write cool app in GWT'));
				panel['add']($m['CheckBox']('Get funding'));
				panel['add']($m['CheckBox']('Take a vacation'));
				self['initWidget'](panel);
				self['setStyleName']('mail-Tasks');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Tasks', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Tasks */


/* end module: Tasks */


/*
PYJS_DEPS: ['pyjamas.ui.CheckBox.CheckBox', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.CheckBox', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel']
*/
