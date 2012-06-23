/* start module: pyjamas.ui.MouseListener */
$pyjs['loaded_modules']['pyjamas.ui.MouseListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MouseListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MouseListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MouseListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MouseListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MouseListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MouseListener'] = $pyjs['loaded_modules']['pyjamas.ui.MouseListener'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['Handler'] = $p['___import___']('pyjamas.EventController.Handler', 'pyjamas.ui', null, false);
		$m['fireMouseEvent'] = function(listeners, sender, event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter5_nextval,$iter5_array,$iter3_array,$iter1_iter,$iter5_iter,to_element,$iter4_type,$iter5_type,$iter2_type,$iter4_iter,$iter4_array,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$iter5_idx,etype,$sub2,$sub1,$iter1_array,$iter1_nextval,$and1,$and2,$and3,$and4,listener,$sub3,$iter2_idx,$iter3_type,$iter1_type,$iter2_nextval,$iter4_nextval,$iter4_idx,$iter1_idx,y,x,$sub4,$iter2_array;
			x = $p['__op_sub']($sub1=$m['DOM']['eventGetClientX'](event),$sub2=$m['DOM']['getAbsoluteLeft'](sender['getElement']()));
			y = $p['__op_sub']($sub3=$m['DOM']['eventGetClientY'](event),$sub4=$m['DOM']['getAbsoluteTop'](sender['getElement']()));
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](etype, 'mousedown'))) {
				$iter1_iter = listeners;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					listener['onMouseDown'](sender, x, y);
				}
				return true;
			}
			else if ($p['bool']($p['op_eq'](etype, 'mouseup'))) {
				$iter2_iter = listeners;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					listener = $iter2_nextval['$nextval'];
					listener['onMouseUp'](sender, x, y);
				}
				return true;
			}
			else if ($p['bool']($p['op_eq'](etype, 'mousemove'))) {
				$iter3_iter = listeners;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					listener = $iter3_nextval['$nextval'];
					listener['onMouseMove'](sender, x, y);
				}
				return true;
			}
			else if ($p['bool']($p['op_eq'](etype, 'mouseover'))) {
				to_element = $m['DOM']['eventGetToElement'](event);
				if ($p['bool'](($p['bool']($and1=to_element)?!$p['bool']($m['DOM']['isOrHasChild'](sender['getElement'](), to_element)):$and1))) {
					$iter4_iter = listeners;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						listener = $iter4_nextval['$nextval'];
						listener['onMouseEnter'](sender);
					}
				}
				return true;
			}
			else if ($p['bool']($p['op_eq'](etype, 'mouseout'))) {
				to_element = $m['DOM']['eventGetToElement'](event);
				if ($p['bool'](($p['bool']($and3=to_element)?!$p['bool']($m['DOM']['isOrHasChild'](sender['getElement'](), to_element)):$and3))) {
					$iter5_iter = listeners;
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						listener = $iter5_nextval['$nextval'];
						listener['onMouseLeave'](sender);
					}
				}
				return true;
			}
			return false;
		};
		$m['fireMouseEvent']['__name__'] = 'fireMouseEvent';

		$m['fireMouseEvent']['__bind_type__'] = 0;
		$m['fireMouseEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
		$m['MOUSE_EVENTS'] = $p['list'](['mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout']);
		$m['MouseHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.MouseListener';
			$cls_definition['__md5__'] = 'f819dcb31a2aeb75f2a90af350b948cd';
			$method = $pyjs__bind_method2('__init__', function(preventDefault) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					preventDefault = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof preventDefault == 'undefined') preventDefault=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_mouseListeners', $p['list']([])) : $p['setattr'](self, '_mouseListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_mousePreventDefault', preventDefault) : $p['setattr'](self, '_mousePreventDefault', preventDefault); 
				self['sinkEvents']($p['getattr']($m['Event'], 'MOUSEEVENTS'));
				return null;
			}
	, 1, [null,null,['self'],['preventDefault', false]]);
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var etype;
				etype = $m['DOM']['eventGetType'](event);
				if ($p['bool']($m['MOUSE_EVENTS']['__contains__'](etype))) {
					if ($p['bool']($p['getattr'](self, '_mousePreventDefault'))) {
						$m['DOM']['eventPreventDefault'](event);
					}
					return $m['fireMouseEvent']($p['getattr'](self, '_mouseListeners'), self, event);
				}
				return false;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('addMouseListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_mouseListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addMouseListener'] = $method;
			$method = $pyjs__bind_method2('removeMouseListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_mouseListeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeMouseListener'] = $method;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseEnter'] = $method;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassEnter'] = $method;
			$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
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
					if (self.prototype['__md5__'] !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassLeave'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseHandler', $p['tuple']($bases), $data);
		})();
		$m['MouseWheelHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.MouseListener';
			$cls_definition['__md5__'] = 'a1822cfd81a4c3f4435b6dfab301215a';
			$method = $pyjs__bind_method2('__init__', function(preventDefault) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					preventDefault = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof preventDefault == 'undefined') preventDefault=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_mouseWheelListeners', $p['list']([])) : $p['setattr'](self, '_mouseWheelListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_mouseWheelPreventDefault', preventDefault) : $p['setattr'](self, '_mouseWheelPreventDefault', preventDefault); 
				self['sinkEvents']($p['getattr']($m['Event'], 'ONMOUSEWHEEL'));
				return null;
			}
	, 1, [null,null,['self'],['preventDefault', false]]);
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
					if (self.prototype['__md5__'] !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,listener,$iter6_array,etype,velocity,$iter6_iter,$iter6_nextval;
				etype = $m['DOM']['eventGetType'](event);
				if ($p['bool']($p['op_eq'](etype, 'mousewheel'))) {
					if ($p['bool']($p['getattr'](self, '_mouseWheelPreventDefault'))) {
						$m['DOM']['eventPreventDefault'](event);
					}
					velocity = $m['DOM']['eventGetMouseWheelVelocityY'](event);
					$iter6_iter = $p['getattr'](self, '_mouseWheelListeners');
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						listener = $iter6_nextval['$nextval'];
						listener['onMouseWheel'](self, velocity);
					}
					return true;
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('addMouseWheelListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_mouseWheelListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addMouseWheelListener'] = $method;
			$method = $pyjs__bind_method2('removeMouseWheelListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_mouseWheelListeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeMouseWheelListener'] = $method;
			$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['onMouseWheel'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseWheelHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.MouseListener */


/* end module: pyjamas.ui.MouseListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.EventController.Handler', 'pyjamas.EventController']
*/
