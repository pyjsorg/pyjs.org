/* start module: libtimesheet.controller.StartupCommand */
$pyjs['loaded_modules']['libtimesheet.controller.StartupCommand'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.controller.StartupCommand']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.controller.StartupCommand'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.controller'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.controller']['__was_initialized__']) $p['___import___']('libtimesheet.controller', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.controller.StartupCommand'];
	$m['__repr__'] = function() { return '<module: libtimesheet.controller.StartupCommand>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.controller.StartupCommand';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.controller']['StartupCommand'] = $pyjs['loaded_modules']['libtimesheet.controller.StartupCommand'];
	try {


		$m['SimpleCommand'] = $p['___import___']('puremvc.patterns.command.SimpleCommand', 'libtimesheet.controller', null, false);
		$m['TimeProxy'] = $p['___import___']('libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet.controller', null, false);
		$m['DialogMediator'] = $p['___import___']('libtimesheet.view.DialogMediator.DialogMediator', 'libtimesheet.controller', null, false);
		$m['MenuMediator'] = $p['___import___']('libtimesheet.view.MenuMediator.MenuMediator', 'libtimesheet.controller', null, false);
		$m['DatePickerMediator'] = $p['___import___']('libtimesheet.view.DatePickerMediator.DatePickerMediator', 'libtimesheet.controller', null, false);
		$m['TimeGridMediator'] = $p['___import___']('libtimesheet.view.TimeGridMediator.TimeGridMediator', 'libtimesheet.controller', null, false);
		$m['SummaryMediator'] = $p['___import___']('libtimesheet.view.SummaryMediator.SummaryMediator', 'libtimesheet.controller', null, false);
		$m['StartupCommand'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.controller.StartupCommand';
			$cls_definition['__md5__'] = 'd880c8674a0e12d38ee659ecee21f9b7';
			$method = $pyjs__bind_method2('execute', function(note) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					note = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd880c8674a0e12d38ee659ecee21f9b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var mainPanel;
				self['facade']['registerProxy']($m['TimeProxy']());
				mainPanel = note['getBody']();
				self['facade']['registerMediator']($m['DialogMediator'](mainPanel));
				self['facade']['registerMediator']($m['MenuMediator']($p['getattr'](mainPanel, 'menuBar')));
				self['facade']['registerMediator']($m['TimeGridMediator']($p['getattr'](mainPanel, 'timeGrid')));
				self['facade']['registerMediator']($m['SummaryMediator']($p['getattr'](mainPanel, 'summary')));
				self['facade']['registerMediator']($m['DatePickerMediator']($p['getattr'](mainPanel, 'datePicker')));
				return null;
			}
	, 1, [null,null,['self'],['note']]);
			$cls_definition['execute'] = $method;
			var $bases = new Array($m['SimpleCommand']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StartupCommand', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.controller.StartupCommand */


/* end module: libtimesheet.controller.StartupCommand */


/*
PYJS_DEPS: ['puremvc.patterns.command.SimpleCommand', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.command', 'libtimesheet.model.TimeProxy.TimeProxy', 'libtimesheet', 'libtimesheet.model', 'libtimesheet.model.TimeProxy', 'libtimesheet.view.DialogMediator.DialogMediator', 'libtimesheet.view', 'libtimesheet.view.DialogMediator', 'libtimesheet.view.MenuMediator.MenuMediator', 'libtimesheet.view.MenuMediator', 'libtimesheet.view.DatePickerMediator.DatePickerMediator', 'libtimesheet.view.DatePickerMediator', 'libtimesheet.view.TimeGridMediator.TimeGridMediator', 'libtimesheet.view.TimeGridMediator', 'libtimesheet.view.SummaryMediator.SummaryMediator', 'libtimesheet.view.SummaryMediator']
*/
