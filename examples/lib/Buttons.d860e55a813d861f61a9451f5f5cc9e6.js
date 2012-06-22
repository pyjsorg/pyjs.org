/* start module: Buttons */
$pyjs['loaded_modules']['Buttons'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Buttons']['__was_initialized__']) return $pyjs['loaded_modules']['Buttons'];
	var $m = $pyjs['loaded_modules']['Buttons'];
	$m['__repr__'] = function() { return '<module: Buttons>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Buttons';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_8 = new $p['int'](8);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', null, null, false);
		$m['Buttons'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Buttons';
			$cls_definition['__md5__'] = '3d477fa920ccf9deb8b2a68cc7db9384';
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
					if (self.prototype['__md5__'] !== '3d477fa920ccf9deb8b2a68cc7db9384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radio1,normalButton,radio3,radio2,hp,disabledCheck,radio0,normalCheck,disabledButton,panel;
				$m['Sink']['__init__'](self);
				disabledButton = $m['Button']('Disabled Button');
				disabledCheck = $m['CheckBox']('Disabled Check');
				normalButton = $m['Button']('Normal Button');
				normalCheck = $m['CheckBox']('Normal Check');
				panel = $m['VerticalPanel']();
				radio0 = $m['RadioButton']('group0', 'Choice 0');
				radio1 = $m['RadioButton']('group0', 'Choice 1');
				radio2 = $m['RadioButton']('group0', 'Choice 2 (Disabled)');
				radio3 = $m['RadioButton']('group0', 'Choice 3');
				hp = $m['HorizontalPanel']();
				panel['add'](hp);
				hp['setSpacing']($constant_int_8);
				hp['add'](normalButton);
				hp['add'](disabledButton);
				hp = $m['HorizontalPanel']();
				panel['add'](hp);
				hp['setSpacing']($constant_int_8);
				hp['add'](normalCheck);
				hp['add'](disabledCheck);
				hp = $m['HorizontalPanel']();
				panel['add'](hp);
				hp['setSpacing']($constant_int_8);
				hp['add'](radio0);
				hp['add'](radio1);
				hp['add'](radio2);
				hp['add'](radio3);
				disabledButton['setEnabled'](false);
				disabledCheck['setEnabled'](false);
				radio2['setEnabled'](false);
				panel['setSpacing']($constant_int_8);
				self['initWidget'](panel);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3d477fa920ccf9deb8b2a68cc7db9384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Buttons', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var text;
			text = 'GWT supports all the myriad types of buttons that exist in HTML.  Here are a few for your viewing pleasure.';
			return $m['SinkInfo']('Buttons', text, $m['Buttons']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Buttons */


/* end module: Buttons */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton']
*/
