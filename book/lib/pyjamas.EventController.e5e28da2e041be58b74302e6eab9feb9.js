/* start module: pyjamas.EventController */
$pyjs['loaded_modules']['pyjamas.EventController'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.EventController']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.EventController'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.EventController'];
	$m['__repr__'] = function() { return '<module: pyjamas.EventController>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.EventController';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['EventController'] = $pyjs['loaded_modules']['pyjamas.EventController'];
	try {


		$m['EventGenerator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = 'b4540b487d5792f9b608a42e15f79c43';
			$method = $pyjs__bind_method2('_get_add_listener_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				return $p['__op_add']($add3=$p['__op_add']($add1='add',$add2=ev),$add4='Listener');
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_add_listener_func_name'] = $method;
			$method = $pyjs__bind_method2('_get_remove_listener_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add7,$add5,$add8;
				return $p['__op_add']($add7=$p['__op_add']($add5='remove',$add6=ev),$add8='Listener');
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_remove_listener_func_name'] = $method;
			$method = $pyjs__bind_method2('_get_dispatch_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$add10,$add11,$add12;
				return $p['__op_add']($add11=$p['__op_add']($add9='dispatch',$add10=ev),$add12='Event');
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_dispatch_func_name'] = $method;
			$method = $pyjs__bind_method2('addListenedEvent', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var attr_rem,el,attr_dsp,attr_add;
				el = $m['EventListener'](ev);
				attr_add = self['_get_add_listener_func_name'](ev);
				$p['setattr'](self, attr_add, $p['getattr'](el, 'add_listener'));
				attr_rem = self['_get_remove_listener_func_name'](ev);
				$p['setattr'](self, attr_rem, $p['getattr'](el, 'rem_listener'));
				attr_dsp = self['_get_dispatch_func_name'](ev);
				$p['setattr'](self, attr_dsp, $p['getattr'](el, 'dispatch'));
				return null;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['addListenedEvent'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventGenerator', $p['tuple']($bases), $data);
		})();
		$m['EventListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = '822c98f792c953deaa98f4f7c284e877';
			$method = $pyjs__bind_method2('__init__', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ev', ev) : $p['setattr'](self, 'ev', ev); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('listeners', $p['list']([])) : $p['setattr'](self, 'listeners', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add_listener', function(listener) {
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
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['listeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['add_listener'] = $method;
			$method = $pyjs__bind_method2('rem_listener', function(listener) {
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
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['listeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['rem_listener'] = $method;
			$method = $pyjs__bind_method2('dispatch', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var listener,$iter1_nextval,$iter1_type,$iter1_iter,$add14,$iter1_array,$add13,ev,$iter1_idx;
				ev = $p['__op_add']($add13='on',$add14=$p['getattr'](self, 'ev'));
				$iter1_iter = $p['getattr'](self, 'listeners');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					if ($p['bool']($p['hasattr'](listener, ev))) {
						$pyjs_kwargs_call(null, $p['getattr'](listener, ev), args, null, [{}]);
					}
					else {
						$pyjs_kwargs_call(null, listener, args, null, [{}]);
					}
				}
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['dispatch'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventListener', $p['tuple']($bases), $data);
		})();
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = 'de83f5025e086bd2912df8772302d39f';
			$method = $pyjs__bind_method2('__init__', function(parent, event_type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					event_type = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof event_type != 'undefined') {
						if (event_type !== null && typeof event_type['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = event_type;
							event_type = arguments[3];
						}
					} else 					if (typeof parent != 'undefined') {
						if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = parent;
							parent = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var add_listener_fnname,del_listener_fnname,listener,on_event_name;
				if ($p['bool']($p['op_is'](parent, null))) {
					parent = self;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', parent) : $p['setattr'](self, 'parent', parent); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event_type', event_type) : $p['setattr'](self, 'event_type', event_type); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('listeners', $p['dict']([])) : $p['setattr'](self, 'listeners', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback_fnname', $p['sprintf']('on%s', event_type)) : $p['setattr'](self, 'callback_fnname', $p['sprintf']('on%s', event_type)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extra_args', args) : $p['setattr'](self, 'extra_args', args); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extra_kwargs', kwargs) : $p['setattr'](self, 'extra_kwargs', kwargs); 
				add_listener_fnname = $p['sprintf']('add%sListener', event_type);
				del_listener_fnname = $p['sprintf']('remove%sListener', event_type);
				listener = $p['sprintf']('_%sListeners', event_type);
				on_event_name = $p['sprintf']('on%sEvent', event_type);
				$p['setattr'](parent, listener, self);
				$p['setattr'](parent, add_listener_fnname, $p['getattr'](self, 'addListener'));
				$p['setattr'](parent, del_listener_fnname, $p['getattr'](self, 'removeListener'));
				$p['setattr'](parent, on_event_name, $p['getattr'](self, 'onEvent'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['parent'],['event_type']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof listener != 'undefined') {
						if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = listener;
							listener = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $or4,$or1,$or3,$or2,$add15,$add16;
				args = ($p['bool']($or1=args)?$or1:$p['tuple']([]));
				kwargs = ($p['bool']($or3=kwargs)?$or3:$p['dict']([]));
				args = $p['__op_add']($add15=$p['getattr'](self, 'extra_args'),$add16=args);
				kwargs['update']($p['getattr'](self, 'extra_kwargs'));
				$p['getattr'](self, 'listeners')['__setitem__'](listener, $p['tuple']([args, kwargs]));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['listener']]);
			$cls_definition['addListener'] = $method;
			$method = $pyjs__bind_method2('removeListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['listeners']['pop'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeListener'] = $method;
			$method = $pyjs__bind_method2('onEvent', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$add20,args,listener,$iter2_idx,$add17,fn,kwargs,$add18,$add19,$iter2_array;
				$iter2_iter = self['listeners']['items']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					listener = $tupleassign1[0];
					args = $tupleassign1[1];
					fn = $p['getattr'](listener, $p['getattr'](self, 'callback_fnname'), listener);
					var $tupleassign2 = $p['__ass_unpack'](args, 2, null);
					args = $tupleassign2[0];
					kwargs = $tupleassign2[1];
					args = $p['__op_add']($add19=$p['__op_add']($add17=$p['tuple']([sender]),$add18=args),$add20=eventargs);
					$pyjs_kwargs_call(null, fn, args, kwargs, [{}]);
				}
				return null;
			}
	, 1, ['eventargs',null,['self'],['sender']]);
			$cls_definition['onEvent'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.EventController */


/* end module: pyjamas.EventController */


