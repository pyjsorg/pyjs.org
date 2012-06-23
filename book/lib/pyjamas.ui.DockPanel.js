/* start module: pyjamas.ui.DockPanel */
$pyjs['loaded_modules']['pyjamas.ui.DockPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DockPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DockPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DockPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DockPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DockPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DockPanel'] = $pyjs['loaded_modules']['pyjamas.ui.DockPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$m['DockPanelTmpRow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DockPanel';
			$cls_definition['__md5__'] = '735c459ac0767d727932c9ad502f34e5';
			$cls_definition['center'] = $constant_int_0;
			$cls_definition['tr'] = null;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DockPanelTmpRow', $p['tuple']($bases), $data);
		})();
		$m['LayoutData'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DockPanel';
			$cls_definition['__md5__'] = '45a5f47e1a01409ae80aa97362fa9125';
			$method = $pyjs__bind_method2('__init__', function(direction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '45a5f47e1a01409ae80aa97362fa9125') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', direction) : $p['setattr'](self, 'direction', direction); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hAlign', 'left') : $p['setattr'](self, 'hAlign', 'left'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', '') : $p['setattr'](self, 'height', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('td', null) : $p['setattr'](self, 'td', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vAlign', 'top') : $p['setattr'](self, 'vAlign', 'top'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', '') : $p['setattr'](self, 'width', ''); 
				return null;
			}
	, 1, [null,null,['self'],['direction']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayoutData', $p['tuple']($bases), $data);
		})();
		$m['DockPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DockPanel';
			$cls_definition['__md5__'] = '913652bb1641ed03890da568ef85f68f';
			$cls_definition['CENTER'] = 'center';
			$cls_definition['EAST'] = 'east';
			$cls_definition['NORTH'] = 'north';
			$cls_definition['SOUTH'] = 'south';
			$cls_definition['WEST'] = 'west';
			$cls_definition['elem_props'] = $p['list']([$p['tuple'](['height', 'Cell Height', 'CellHeight', $p['str'], null]), $p['tuple'](['width', 'Cell Width', 'CellWidth', $p['str'], null]), $p['tuple'](['halign', 'Cell Horizontal Alignment', 'CellHorizontalAlignment', null, 'left']), $p['tuple'](['valign', 'Cell Vertical Alignment', 'CellVerticalAlignment', null, 'top'])]);
			$method = $pyjs__bind_method2('_getElementProps', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				return $p['__op_add']($add1=$m['CellPanel']['_getElementProps'](),$add2=$p['getattr'](self, 'elem_props'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['_getElementProps'] = $method;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('center', null) : $p['setattr'](self, 'center', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dock_children', $p['list']([])) : $p['setattr'](self, 'dock_children', $p['list']([])); 
				$pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(widget, direction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					direction = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var layout;
				if ($p['bool']($p['op_eq'](direction, $p['getattr'](self, 'CENTER')))) {
					if ($p['bool'](!$p['op_is']($p['getattr'](self, 'center'), null))) {
						throw ($p['Exception']('Only one CENTER widget may be added'));
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('center', widget) : $p['setattr'](self, 'center', widget); 
				}
				layout = $m['LayoutData'](direction);
				widget['setLayoutData'](layout);
				self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
				self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
				self['dock_children']['append'](widget);
				self['realizeTable'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['direction']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					item = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['add'](item, index['__getitem__']($constant_int_1));
				return null;
			}
	, 1, [null,null,['self'],['index'],['item']]);
			$cls_definition['addIndexedItem'] = $method;
			$method = $pyjs__bind_method2('getWidgetIndex', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,direction;
				index = self['dock_children']['index'](widget);
				direction = self['getWidgetDirection'](widget);
				return $p['tuple']([index, direction]);
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetIndex'] = $method;
			$method = $pyjs__bind_method2('getIndexedChild', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var direction;
				var $tupleassign1 = $p['__ass_unpack'](index, 2, null);
				index = $tupleassign1[0];
				direction = $tupleassign1[1];
				return $p['getattr'](self, 'dock_children')['__getitem__'](index);
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getIndexedChild'] = $method;
			$method = $pyjs__bind_method2('getWidgetDirection', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
					return null;
				}
				return $p['getattr'](widget['getLayoutData'](), 'direction');
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetDirection'] = $method;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['len']($p['getattr'](self, 'dock_children'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['dock_children']['__iter__']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ret;
				if ($p['bool']($p['op_eq'](widget, $p['getattr'](self, 'center')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('center', null) : $p['setattr'](self, 'center', null); 
				}
				ret = $m['CellPanel']['remove'](self, widget);
				if ($p['bool'](ret)) {
					self['dock_children']['remove'](widget);
					self['realizeTable'](null);
				}
				return ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('height', height) : $p['setattr'](data, 'height', height); 
				if ($p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null))) {
					$m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'height', $p['getattr'](data, 'height'));
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['height']]);
			$cls_definition['setCellHeight'] = $method;
			$method = $pyjs__bind_method2('setCellHorizontalAlignment', function(widget, align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('hAlign', align) : $p['setattr'](data, 'hAlign', align); 
				if ($p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null))) {
					$m['DOM']['setAttribute']($p['getattr'](data, 'td'), 'align', $p['getattr'](data, 'hAlign'));
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('setCellVerticalAlignment', function(widget, align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('vAlign', align) : $p['setattr'](data, 'vAlign', align); 
				if ($p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null))) {
					$m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'verticalAlign', $p['getattr'](data, 'vAlign'));
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellVerticalAlignment'] = $method;
			$method = $pyjs__bind_method2('setCellWidth', function(widget, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('width', width) : $p['setattr'](data, 'width', width); 
				if ($p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null))) {
					$m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'width', $p['getattr'](data, 'width'));
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['width']]);
			$cls_definition['setCellWidth'] = $method;
			$method = $pyjs__bind_method2('realizeTable', function(beingAdded) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					beingAdded = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var westCol,northRow,$iter3_type,$iter1_iter,$or1,centerTd,row,rows,layout,$iter2_iter,bodyElement,$add20,$iter3_iter,$add19,$sub9,$sub8,$iter1_array,$add14,$add7,$sub3,$sub2,$sub1,$sub7,$sub6,$iter3_array,$sub4,$or4,$add15,$iter1_nextval,$or3,$or2,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add13,rowCount,$iter2_idx,$iter3_idx,eastCol,$add11,$add12,child,$add18,td,$add16,$iter2_array,$iter2_nextval,$iter1_type,$sub5,i,southRow,$iter2_type,$add3,colCount,$add6,$iter1_idx,$add4,$add5,$add17,$add10,$add8,$add9,$iter3_nextval,dir;
				bodyElement = self['getBody']();
				while ($p['bool'](($p['cmp']($m['DOM']['getChildCount'](bodyElement), $constant_int_0) == 1))) {
					$m['DOM']['removeChild'](bodyElement, $m['DOM']['getChild'](bodyElement, $constant_int_0));
				}
				rowCount = $constant_int_1;
				colCount = $constant_int_1;
				$iter1_iter = $p['getattr'](self, 'dock_children');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					child = $iter1_nextval['$nextval'];
					dir = $p['getattr'](child['getLayoutData'](), 'direction');
					if ($p['bool'](($p['bool']($or1=$p['op_eq'](dir, $p['getattr'](self, 'NORTH')))?$or1:$p['op_eq'](dir, $p['getattr'](self, 'SOUTH'))))) {
						rowCount = $p['__op_add']($add3=rowCount,$add4=$constant_int_1);
					}
					else if ($p['bool'](($p['bool']($or3=$p['op_eq'](dir, $p['getattr'](self, 'EAST')))?$or3:$p['op_eq'](dir, $p['getattr'](self, 'WEST'))))) {
						colCount = $p['__op_add']($add5=colCount,$add6=$constant_int_1);
					}
				}
				rows = $p['list']([]);
				$iter2_iter = $p['range'](rowCount);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					rows['append']($m['DockPanelTmpRow']());
					rows['__getitem__'](i)['__is_instance__'] && typeof rows['__getitem__'](i)['__setattr__'] == 'function' ? rows['__getitem__'](i)['__setattr__']('tr', $m['DOM']['createTR']()) : $p['setattr'](rows['__getitem__'](i), 'tr', $m['DOM']['createTR']()); 
					$m['DOM']['appendChild'](bodyElement, $p['getattr'](rows['__getitem__'](i), 'tr'));
				}
				westCol = $constant_int_0;
				eastCol = $p['__op_sub']($sub1=colCount,$sub2=$constant_int_1);
				northRow = $constant_int_0;
				southRow = $p['__op_sub']($sub3=rowCount,$sub4=$constant_int_1);
				centerTd = null;
				$iter3_iter = $p['getattr'](self, 'dock_children');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					child = $iter3_nextval['$nextval'];
					layout = child['getLayoutData']();
					td = $m['DOM']['createTD']();
					layout['__is_instance__'] && typeof layout['__setattr__'] == 'function' ? layout['__setattr__']('td', td) : $p['setattr'](layout, 'td', td); 
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'align', $p['getattr'](layout, 'hAlign'));
					$m['DOM']['setStyleAttribute']($p['getattr'](layout, 'td'), 'verticalAlign', $p['getattr'](layout, 'vAlign'));
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'width', $p['getattr'](layout, 'width'));
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'height', $p['getattr'](layout, 'height'));
					if ($p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'NORTH')))) {
						$m['DOM']['insertChild']($p['getattr'](rows['__getitem__'](northRow), 'tr'), td, $p['getattr'](rows['__getitem__'](northRow), 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add7=$p['__op_sub']($sub5=eastCol,$sub6=westCol),$add8=$constant_int_1));
						northRow = $p['__op_add']($add9=northRow,$add10=$constant_int_1);
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'SOUTH')))) {
						$m['DOM']['insertChild']($p['getattr'](rows['__getitem__'](southRow), 'tr'), td, $p['getattr'](rows['__getitem__'](southRow), 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add11=$p['__op_sub']($sub7=eastCol,$sub8=westCol),$add12=$constant_int_1));
						southRow = $p['__op_sub']($sub9=southRow,$sub10=$constant_int_1);
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'WEST')))) {
						row = rows['__getitem__'](northRow);
						$m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
						row['__is_instance__'] && typeof row['__setattr__'] == 'function' ? row['__setattr__']('center', $p['__op_add']($add13=$p['getattr'](row, 'center'),$add14=$constant_int_1)) : $p['setattr'](row, 'center', $p['__op_add']($add13=$p['getattr'](row, 'center'),$add14=$constant_int_1)); 
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add15=$p['__op_sub']($sub11=southRow,$sub12=northRow),$add16=$constant_int_1));
						westCol = $p['__op_add']($add17=westCol,$add18=$constant_int_1);
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'EAST')))) {
						row = rows['__getitem__'](northRow);
						$m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add19=$p['__op_sub']($sub13=southRow,$sub14=northRow),$add20=$constant_int_1));
						eastCol = $p['__op_sub']($sub15=eastCol,$sub16=$constant_int_1);
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'CENTER')))) {
						centerTd = td;
					}
				}
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'center'), null))) {
					row = rows['__getitem__'](northRow);
					$m['DOM']['insertChild']($p['getattr'](row, 'tr'), centerTd, $p['getattr'](row, 'center'));
					self['appendAndMaybeAdopt'](centerTd, self['center']['getElement'](), beingAdded);
				}
				return null;
			}
	, 1, [null,null,['self'],['beingAdded']]);
			$cls_definition['realizeTable'] = $method;
			$method = $pyjs__bind_method2('appendAndMaybeAdopt', function(parent, child, beingAdded) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					child = arguments[2];
					beingAdded = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_is'](beingAdded, null))) {
					if ($p['bool']($m['DOM']['compare'](child, beingAdded['getElement']()))) {
						$m['CellPanel']['add'](self, beingAdded, parent);
						return null;
					}
				}
				$m['DOM']['appendChild'](parent, child);
				return null;
			}
	, 1, [null,null,['self'],['parent'],['child'],['beingAdded']]);
			$cls_definition['appendAndMaybeAdopt'] = $method;
			var $bases = new Array($m['CellPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DockPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DockPanel', 'DockPanel', $m['DockPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DockPanel */


/* end module: pyjamas.ui.DockPanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
