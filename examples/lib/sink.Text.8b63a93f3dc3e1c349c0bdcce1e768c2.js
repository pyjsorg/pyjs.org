/* start module: sink.Text */
$pyjs['loaded_modules']['sink.Text'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Text']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Text'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Text'];
	$m['__repr__'] = function() { return '<module: sink.Text>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Text';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Text'] = $pyjs['loaded_modules']['sink.Text'];
	try {

		var $constant_int_8 = new $p['int'](8);
		var $constant_int_4 = new $p['int'](4);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'sink', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'sink', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'sink', null, false);
		$m['PasswordTextBox'] = $p['___import___']('pyjamas.ui.PasswordTextBox.PasswordTextBox', 'sink', null, false);
		$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', 'sink', null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'sink', null, false);
		$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', 'sink', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'sink', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'sink', null, false);
		$m['Text'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Text';
			$cls_definition['__md5__'] = '6add1229c197f0f2df5ccb73e33ef540';
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
					if (self.prototype['__md5__'] !== '6add1229c197f0f2df5ccb73e33ef540') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var vp,textArea,panel;
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fPasswordText', $m['PasswordTextBox']()) : $p['setattr'](self, 'fPasswordText', $m['PasswordTextBox']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fTextArea', $m['TextArea']()) : $p['setattr'](self, 'fTextArea', $m['TextArea']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fTextBox', $m['TextBox']()) : $p['setattr'](self, 'fTextBox', $m['TextBox']()); 
				panel = $m['VerticalPanel']();
				panel['setSpacing']($constant_int_8);
				panel['add']($m['HTML']('Normal text box:'));
				panel['add'](self['createTextThing']($p['getattr'](self, 'fTextBox')));
				panel['add']($m['HTML']('Password text box:'));
				panel['add'](self['createTextThing']($p['getattr'](self, 'fPasswordText')));
				panel['add']($m['HTML']('Text area:'));
				panel['add'](self['createTextThing']($p['getattr'](self, 'fTextArea')));
				panel['add']($m['HTML']("Textarea below demos oninput event. oninput allows\nto detect when the content of an element has changed. This is different\nfrom examples above, where changes are detected only if they are made with\nkeyboard. oninput occurs when the content is changed through any user\ninterface(keyboard, mouse, etc.). For example, at first type few chars, but\nthen paste some text to the text areas above and below by selecting 'Paste'\ncommand from context menu or by dragging&dropping and see the difference.\noninput is similar to onchange event, but onchange event fires only when a\ntext-entry widget loses focus."));
				vp = $m['VerticalPanel']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('echo', $m['HTML']()) : $p['setattr'](self, 'echo', $m['HTML']()); 
				textArea = $m['TextArea']();
				vp['add'](textArea);
				vp['add']($p['getattr'](self, 'echo'));
				textArea['addInputListener'](self);
				panel['add'](vp);
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
					if (self.prototype['__md5__'] !== '6add1229c197f0f2df5ccb73e33ef540') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('onInput', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6add1229c197f0f2df5ccb73e33ef540') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['echo']['setText'](sender['getText']());
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onInput'] = $method;
			$method = $pyjs__bind_method2('createTextThing', function(textBox) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					textBox = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6add1229c197f0f2df5ccb73e33ef540') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var select_all,echo,listener,p;
				p = $m['HorizontalPanel']();
				p['setSpacing']($constant_int_4);
				p['add'](textBox);
				echo = $m['HTML']();
				select_all = $m['Button']('select all');
				p['add'](select_all);
				p['add'](echo);
				listener = (typeof TextBoxListener == "undefined"?$m['TextBoxListener']:TextBoxListener)(self, textBox, echo, select_all);
				select_all['addClickListener'](listener);
				textBox['addKeyboardListener'](listener);
				textBox['addClickListener'](listener);
				return p;
			}
	, 1, [null,null,['self'],['textBox']]);
			$cls_definition['createTextThing'] = $method;
			$method = $pyjs__bind_method2('updateText', function(text, echo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					echo = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6add1229c197f0f2df5ccb73e33ef540') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
				echo['setHTML']((typeof ($add7=(typeof ($add5=(typeof ($add3=(typeof ($add1='Text: ')==typeof ($add2=text['getText']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='<br>') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($add6=$p['sprintf']('Selection: %d', text['getCursorPos']())) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=$p['sprintf'](', %d', text['getSelectionLength']())) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
				return null;
			}
	, 1, [null,null,['self'],['text'],['echo']]);
			$cls_definition['updateText'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Text', $p['tuple']($bases), $data);
		})();
		$m['TextBoxListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Text';
			$cls_definition['__md5__'] = '870f968989d776b692e3bb14dcb1e039';
			$method = $pyjs__bind_method2('__init__', function(parent, textBox, echo, select_all) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					textBox = arguments[2];
					echo = arguments[3];
					select_all = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870f968989d776b692e3bb14dcb1e039') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textBox', textBox) : $p['setattr'](self, 'textBox', textBox); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('echo', echo) : $p['setattr'](self, 'echo', echo); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', parent) : $p['setattr'](self, 'parent', parent); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('select_all', select_all) : $p['setattr'](self, 'select_all', select_all); 
				return null;
			}
	, 1, [null,null,['self'],['parent'],['textBox'],['echo'],['select_all']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870f968989d776b692e3bb14dcb1e039') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'select_all'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['textBox']['selectAll']();
					self['textBox']['setFocus'](true);
				}
				self['parent']['updateText']($p['getattr'](self, 'textBox'), $p['getattr'](self, 'echo'));
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870f968989d776b692e3bb14dcb1e039') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']['updateText']($p['getattr'](self, 'textBox'), $p['getattr'](self, 'echo'));
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870f968989d776b692e3bb14dcb1e039') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '870f968989d776b692e3bb14dcb1e039') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextBoxListener', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var text,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add9,$add18;
			text = 'GWT includes the standard complement of text-entry widgets, each of which ';
			text = (typeof ($add9=text)==typeof ($add10='supports keyboard and selection events you can use to control text entry.  ') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			text = (typeof ($add11=text)==typeof ($add12='In particular, notice that the selection range for each widget is ') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			text = (typeof ($add13=text)==typeof ($add14='updated whenever you press a key.  ') && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			text = (typeof ($add15=text)==typeof ($add16='This can be a bit tricky on some browsers, but the GWT class library ') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16));
			text = (typeof ($add17=text)==typeof ($add18='takes care of the plumbing for you automatically.') && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18));
			return $m['SinkInfo']('Text', text, $m['Text']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Text */


/* end module: sink.Text */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.PasswordTextBox.PasswordTextBox', 'pyjamas.ui.PasswordTextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui.TextBoxBase', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
