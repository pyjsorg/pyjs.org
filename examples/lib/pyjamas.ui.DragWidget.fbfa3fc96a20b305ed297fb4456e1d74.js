/* start module: pyjamas.ui.DragWidget */
$pyjs['loaded_modules']['pyjamas.ui.DragWidget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DragWidget']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DragWidget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DragWidget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DragWidget'] = $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];
	try {
		var $bool9;

		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
		$m['makeDraggable'] = $p['___import___']('pyjamas.dnd.makeDraggable', 'pyjamas.ui', null, false);
		$m['DNDHelper'] = $p['___import___']('pyjamas.dnd.DNDHelper', 'pyjamas.ui', null, false);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
		$m['DragWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = '45eb4c1f979768a39665acd2706b7f4a';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DragWidget', $p['tuple']($bases), $data);
		})();
		$m['DragContainer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = '8213be931eaf848645ade3a162dcbc5a';
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DragContainer', $p['tuple']($bases), $data);
		})();
		$m['Draggable'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = 'f2924ac95bb2e2abd21f6317dce1c476';
			$method = $pyjs__bind_method2('makeDraggable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f2924ac95bb2e2abd21f6317dce1c476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['makeDraggable'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['makeDraggable'] = $method;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Draggable', $p['tuple']($bases), $data);
		})();
		$m['Html5DragContainer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = 'f4f8508648c8592f1701364f36a9d4fa';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						var kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f4f8508648c8592f1701364f36a9d4fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $or1,$or2,$bool2,$bool3,$bool1;
				if ((($bool3=((($bool2=$or1=!(($bool1=$p['hasattr'](self, 'attached')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:kw)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3['__nonzero__']=='function'?
								$bool3['__nonzero__']() :
								(typeof $bool3['__len__']=='function'?
									($bool3['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call($m['Widget'], '__init__', null, kw, [{}, self]);
				}
				$m['DragHandler']['__init__'](self);
				self['addDragListener'](self);
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Widget'],$m['DragHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Html5DragContainer', $p['tuple']($bases), $data);
		})();
		$m['MouseDragContainer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = 'e452f783c8bbb9bda63436eb39543ffe';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						var kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e452f783c8bbb9bda63436eb39543ffe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $or4,$or3,$bool4,$bool5,$bool6;
				if ((($bool6=((($bool5=$or3=!(($bool4=$p['hasattr'](self, 'attached')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:kw)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6['__nonzero__']=='function'?
								$bool6['__nonzero__']() :
								(typeof $bool6['__len__']=='function'?
									($bool6['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs_kwargs_call($m['Widget'], '__init__', null, kw, [{}, self]);
				}
				$m['MouseHandler']['__init__'](self);
				self['addMouseListener']($p['getattr']($m['DNDHelper'], 'dndHelper'));
				$m['DragHandler']['__init__'](self);
				self['addDragListener'](self);
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['DragHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseDragContainer', $p['tuple']($bases), $data);
		})();
		$m['Html5DragWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = '2c7ccf8f2e412ab6b181e291a37ac4e4';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						var kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2c7ccf8f2e412ab6b181e291a37ac4e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['Html5DragContainer'], '__init__', null, kw, [{}, self]);
				self['makeDraggable']();
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Html5DragContainer'],$m['Draggable']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Html5DragWidget', $p['tuple']($bases), $data);
		})();
		$m['MouseDragWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
			$cls_definition['__md5__'] = 'f1a8198caf45bf2a5c7f30fabd34a186';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						var kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
						kw = arguments[arguments['length']+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f1a8198caf45bf2a5c7f30fabd34a186') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['MouseDragContainer'], '__init__', null, kw, [{}, self]);
				self['makeDraggable']();
				return null;
			}
	, 1, [null,['kw'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['MouseDragContainer'],$m['Draggable']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseDragWidget', $p['tuple']($bases), $data);
		})();
		$m['init'] = function(is_native) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof is_native == 'undefined') is_native=arguments['callee']['__args__'][2][1];
			var html5_dnd,$bool7,$bool8;
			if ((($bool7=$p['op_is'](is_native, null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				html5_dnd = $p['hasattr']($m['DOM']['createElement']('span'), 'draggable');
			}
			else {
				html5_dnd = is_native;
			}
			if ((($bool8=html5_dnd) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8['__nonzero__']=='function'?
							$bool8['__nonzero__']() :
							(typeof $bool8['__len__']=='function'?
								($bool8['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['DragContainer'] = $m['Html5DragContainer'];
				$m['DragWidget'] = $m['Html5DragWidget'];
			}
			else {
				$m['DragContainer'] = $m['MouseDragContainer'];
				$m['DragWidget'] = $m['MouseDragWidget'];
			}
			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null,['is_native', null]];
		if ((($bool9=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['init']($p['getattr']($m['pyjd'], 'native_dnd'));
		}
		else {
			$m['init'](null);
		}
		$m['Factory']['registerClass']('pyjamas.ui.DragWidget', 'DragWidget', $m['DragWidget']);
		$m['Factory']['registerClass']('pyjamas.ui.DragWidget', 'DragContainer', $m['DragContainer']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DragWidget */


/* end module: pyjamas.ui.DragWidget */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.dnd.makeDraggable', 'pyjamas.dnd', 'pyjamas.dnd.DNDHelper', 'pyjd']
*/
