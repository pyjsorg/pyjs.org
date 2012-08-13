/* start module: RegexTextBoxDemo */
$pyjs['loaded_modules']['RegexTextBoxDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['RegexTextBoxDemo']['__was_initialized__']) return $pyjs['loaded_modules']['RegexTextBoxDemo'];
	var $m = $pyjs['loaded_modules']['RegexTextBoxDemo'];
	$m['__repr__'] = function() { return '<module: RegexTextBoxDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RegexTextBoxDemo';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['RegexTextBox'] = $p['___import___']('RegexTextBox.RegexTextBox', null, null, false);
		$m['display_ok'] = function(obj) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			obj['setStyleName']('gwt-textbox-ok');
			return null;
		};
		$m['display_ok']['__name__'] = 'display_ok';

		$m['display_ok']['__bind_type__'] = 0;
		$m['display_ok']['__args__'] = [null,null,['obj']];
		$m['display_error'] = function(obj) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			obj['setStyleName']('gwt-textbox-error');
			return null;
		};
		$m['display_error']['__name__'] = 'display_error';

		$m['display_error']['__bind_type__'] = 0;
		$m['display_error']['__args__'] = [null,null,['obj']];
		$m['RegexTextBoxDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'RegexTextBoxDemo';
			$cls_definition['__md5__'] = '6ad3e5e9b5735fe795bb4b02a2c1ff24';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6ad3e5e9b5735fe795bb4b02a2c1ff24') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _correct,$iter1_nextval,$iter1_type,_wrong,_descr,$iter1_iter,$add2,$add1,$iter1_array,_regex,_panel,_example_descr,$iter1_idx;
				_example_descr = $m['HTML']("This example shows how to validate text using\n a TextBox.  A new class called RegexTextBox, which inherits from TextBox\n validates text, when focus is removed (ie, onblur event).<br>\nIn the table below, TextBoxes in the 'Valid Text' column contain text \nstrings that match that rows regular expression.  TextBoxes in the 'Invalid Text'\ncolumn contain strings that violates the same regular expressions.  Feel free\nto modify the text to test different values to see if they are valid or not.\n<p>");
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_table', $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{'BorderWidth':$constant_int_0}])) : $p['setattr'](self, '_table', $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{'BorderWidth':$constant_int_0}])); 
				self['_table']['setStyleName']('gwt-table');
				self['_setHeaders']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_row', $constant_int_1) : $p['setattr'](self, '_row', $constant_int_1); 
				$iter1_iter = self['_get_data']();
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 4, null);
					_descr = $tupleassign1[0];
					_regex = $tupleassign1[1];
					_correct = $tupleassign1[2];
					_wrong = $tupleassign1[3];
					self['_rowHelper'](_descr, _regex, _correct, _wrong);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_row', (typeof ($add1=$p['getattr'](self, '_row'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))) : $p['setattr'](self, '_row', (typeof ($add1=$p['getattr'](self, '_row'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))); 
				}
				_panel = $m['VerticalPanel']();
				_panel['add'](_example_descr);
				_panel['add']($p['getattr'](self, '_table'));
				$m['RootPanel']()['add'](_panel);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('_setHeaders', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6ad3e5e9b5735fe795bb4b02a2c1ff24') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_table']['setHTML']($constant_int_0, $constant_int_0, '<b>Description</b>');
				self['_table']['setHTML']($constant_int_0, $constant_int_1, '<b>Regex</b>');
				self['_table']['setHTML']($constant_int_0, $constant_int_2, '<b>Valid Text</b>');
				self['_table']['setHTML']($constant_int_0, $constant_int_3, '<b>Invalid Text</b>');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_setHeaders'] = $method;
			$method = $pyjs__bind_method2('_rowHelper', function(text, regex, value1, value2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					regex = arguments[2];
					value1 = arguments[3];
					value2 = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6ad3e5e9b5735fe795bb4b02a2c1ff24') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _rtb,_rtb1;
				self['_table']['setHTML']($p['getattr'](self, '_row'), $constant_int_0, text);
				self['_table']['setHTML']($p['getattr'](self, '_row'), $constant_int_1, regex);
				_rtb = $m['RegexTextBox']();
				_rtb['setRegex'](regex);
				_rtb['setText'](value1);
				_rtb['appendValidListener']($m['display_ok']);
				_rtb['appendInvalidListener']($m['display_error']);
				_rtb['validate'](null);
				self['_table']['setWidget']($p['getattr'](self, '_row'), $constant_int_2, _rtb);
				_rtb1 = $m['RegexTextBox']();
				_rtb1['setRegex'](regex);
				_rtb1['setText'](value2);
				_rtb1['appendValidListener']($m['display_ok']);
				_rtb1['appendInvalidListener']($m['display_error']);
				_rtb1['validate'](null);
				self['_table']['setWidget']($p['getattr'](self, '_row'), $constant_int_3, _rtb1);
				return null;
			}
	, 1, [null,null,['self'],['text'],['regex'],['value1'],['value2']]);
			$cls_definition['_rowHelper'] = $method;
			$method = $pyjs__bind_method2('_get_data', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6ad3e5e9b5735fe795bb4b02a2c1ff24') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['list'](['Positive Unsigned Integer', '^\\d+$', '123', '1a2']), $p['list'](['Signed Integer', '^[+-]?\\d+$', '+321', '321-']), $p['list'](['No whitespace', '^\\S+$', 'pyjamas', '1 3']), $p['list'](['Date in (MM/DD/YYYY) format', '^\\d\\d/\\d\\d/\\d{4}$', '12/21/2012', '12-21-2012']), $p['list'](['Non digits', '^\\D+$', 'pyjamas', '1 3'])]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_data'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RegexTextBoxDemo', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['pyjd']['setup']('./public/RegexTextBoxDemo.html');
			$m['app'] = $m['RegexTextBoxDemo']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end RegexTextBoxDemo */


/* end module: RegexTextBoxDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui', 'pyjamas.ui.FlexTable', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'RegexTextBox.RegexTextBox', 'RegexTextBox']
*/
