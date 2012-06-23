/* start module: pyjamas.ui.KeyboardListener */
$pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.KeyboardListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.KeyboardListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.KeyboardListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['KeyboardListener'] = $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_27 = new $p['int'](27);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['KEY_ALT'] = $constant_int_18;
		$m['KEY_BACKSPACE'] = $constant_int_8;
		$m['KEY_CTRL'] = $constant_int_17;
		$m['KEY_DELETE'] = $constant_int_46;
		$m['KEY_DOWN'] = $constant_int_40;
		$m['KEY_END'] = $constant_int_35;
		$m['KEY_ENTER'] = $constant_int_13;
		$m['KEY_ESCAPE'] = $constant_int_27;
		$m['KEY_HOME'] = $constant_int_36;
		$m['KEY_LEFT'] = $constant_int_37;
		$m['KEY_PAGEDOWN'] = $constant_int_34;
		$m['KEY_PAGEUP'] = $constant_int_33;
		$m['KEY_RIGHT'] = $constant_int_39;
		$m['KEY_SHIFT'] = $constant_int_16;
		$m['KEY_TAB'] = $constant_int_9;
		$m['KEY_UP'] = $constant_int_38;
		$m['KEYS'] = $p['list']([$m['KEY_ALT'], $m['KEY_BACKSPACE'], $m['KEY_CTRL'], $m['KEY_DELETE'], $m['KEY_DOWN'], $m['KEY_END'], $m['KEY_ENTER'], $m['KEY_ESCAPE'], $m['KEY_HOME'], $m['KEY_LEFT'], $m['KEY_PAGEDOWN'], $m['KEY_PAGEUP'], $m['KEY_RIGHT'], $m['KEY_SHIFT'], $m['KEY_TAB'], $m['KEY_UP']]);
		$m['MODIFIER_ALT'] = $constant_int_4;
		$m['MODIFIER_CTRL'] = $constant_int_2;
		$m['MODIFIER_SHIFT'] = $constant_int_1;
		$m['getKeyboardModifiers'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var shift,alt,ctrl;
			shift = $constant_int_0;
			ctrl = $constant_int_0;
			alt = $constant_int_0;
			if ($p['bool']($m['DOM']['eventGetShiftKey'](event))) {
				shift = $m['MODIFIER_SHIFT'];
			}
			if ($p['bool']($m['DOM']['eventGetCtrlKey'](event))) {
				ctrl = $m['MODIFIER_CTRL'];
			}
			if ($p['bool']($m['DOM']['eventGetAltKey'](event))) {
				alt = $m['MODIFIER_ALT'];
			}
			return $p['op_bitor']([shift, ctrl, alt]);
		};
		$m['getKeyboardModifiers']['__name__'] = 'getKeyboardModifiers';

		$m['getKeyboardModifiers']['__bind_type__'] = 0;
		$m['getKeyboardModifiers']['__args__'] = [null,null,['event']];
		$m['fireKeyboardEvent'] = function(listeners, sender, event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,type,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter2_nextval,$iter3_array,keycode,$iter1_type,modifiers,$iter1_idx,$iter2_array;
			modifiers = $m['getKeyboardModifiers'](event);
			keycode = $m['DOM']['eventGetKeyCode'](event);
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'keydown'))) {
				$iter1_iter = listeners;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					listener['onKeyDown'](sender, keycode, modifiers);
				}
			}
			else if ($p['bool']($p['op_eq'](type, 'keyup'))) {
				$iter2_iter = listeners;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					listener = $iter2_nextval['$nextval'];
					listener['onKeyUp'](sender, keycode, modifiers);
				}
			}
			else if ($p['bool']($p['op_eq'](type, 'keypress'))) {
				$iter3_iter = listeners;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					listener = $iter3_nextval['$nextval'];
					listener['onKeyPress'](sender, keycode, modifiers);
				}
			}
			return null;
		};
		$m['fireKeyboardEvent']['__name__'] = 'fireKeyboardEvent';

		$m['fireKeyboardEvent']['__bind_type__'] = 0;
		$m['fireKeyboardEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
		$m['KEYBOARD_EVENTS'] = $p['list'](['keydown', 'keyup', 'keypress']);
		$m['KeyboardHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.KeyboardListener';
			$cls_definition['__md5__'] = '389c3b78e27003f466da7e05c81b8898';
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
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_keyboardListeners', $p['list']([])) : $p['setattr'](self, '_keyboardListeners', $p['list']([])); 
				self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var type;
				type = $m['DOM']['eventGetType'](event);
				if ($p['bool']($p['list'](['keydown', 'keyup', 'keypress'])['__contains__'](type))) {
					$m['fireKeyboardEvent']($p['getattr'](self, '_keyboardListeners'), self, event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('addKeyboardListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_keyboardListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addKeyboardListener'] = $method;
			$method = $pyjs__bind_method2('removeKeyboardListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_keyboardListeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeKeyboardListener'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('KeyboardHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.KeyboardListener */


/* end module: pyjamas.ui.KeyboardListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
