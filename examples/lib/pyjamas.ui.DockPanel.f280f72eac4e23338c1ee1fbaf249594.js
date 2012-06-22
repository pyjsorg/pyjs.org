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
		var $constant_int_0 = new $p['int'](0);
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
				return (typeof ($add1=$m['CellPanel']['_getElementProps']())==typeof ($add2=$p['getattr'](self, 'elem_props')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
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
				var layout,$bool2,$bool1;
				if ((($bool1=$p['op_eq'](direction, $p['getattr'](self, 'CENTER'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=!$p['op_is']($p['getattr'](self, 'center'), null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
							false :
							(typeof $bool2=='object'?
								(typeof $bool2['__nonzero__']=='function'?
									$bool2['__nonzero__']() :
									(typeof $bool2['__len__']=='function'?
										($bool2['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
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
				var $1,$2;
				self['add'](item, (typeof ($1=index)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_1]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_1)));
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
				var $4,direction,$3;
				var $tupleassign1 = $p['__ass_unpack'](index, 2, null);
				index = $tupleassign1[0];
				direction = $tupleassign1[1];
				return (typeof ($3=$p['getattr'](self, 'dock_children'))['__array'] != 'undefined'?
					((typeof $3['__array'][$4=index]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](index));
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
				var $bool3;
				if ((($bool3=!$p['op_eq'](widget['getParent'](), self)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				var $len1;
				return (($len1=$p['getattr'](self, 'dock_children')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1)))));
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
				var $bool5,$bool4,ret;
				if ((($bool4=$p['op_eq'](widget, $p['getattr'](self, 'center'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4['__nonzero__']=='function'?
								$bool4['__nonzero__']() :
								(typeof $bool4['__len__']=='function'?
									($bool4['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('center', null) : $p['setattr'](self, 'center', null); 
				}
				ret = $m['CellPanel']['remove'](self, widget);
				if ((($bool5=ret) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
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
				var $bool6,data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('height', height) : $p['setattr'](data, 'height', height); 
				if ((($bool6=!$p['op_is']($p['getattr'](data, 'td'), null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				var data,$bool7;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('hAlign', align) : $p['setattr'](data, 'hAlign', align); 
				if ((($bool7=!$p['op_is']($p['getattr'](data, 'td'), null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				var data,$bool8;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('vAlign', align) : $p['setattr'](data, 'vAlign', align); 
				if ((($bool8=!$p['op_is']($p['getattr'](data, 'td'), null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				var $bool9,data;
				data = widget['getLayoutData']();
				data['__is_instance__'] && typeof data['__setattr__'] == 'function' ? data['__setattr__']('width', width) : $p['setattr'](data, 'width', width); 
				if ((($bool9=!$p['op_is']($p['getattr'](data, 'td'), null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				var $bool18,$bool19,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$iter1_iter,row,layout,$iter3_iter,td,$iter2_type,$iter2_nextval,eastCol,$bool17,child,dir,$iter2_iter,bodyElement,$bool20,$iter1_idx,$iter1_nextval,$add4,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,rowCount,$iter2_array,westCol,$iter3_array,rows,$iter3_nextval,$iter1_array,$iter2_idx,$8,$9,$6,$7,$5,$14,$15,$16,$17,$10,$11,$12,$13,northRow,$18,$19,$add3,colCount,$add6,$add7,$add13,$add5,$add8,$add9,centerTd,$iter3_idx,$21,$20,$22,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$or4,$or1,$or3,$or2,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19,$cmp1,$iter1_type,$cmp2,i,southRow,$add20;
				bodyElement = self['getBody']();
				while ((($bool10=((($cmp1=$m['DOM']['getChildCount'](bodyElement))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['DOM']['removeChild'](bodyElement, $m['DOM']['getChild'](bodyElement, $constant_int_0));
				}
				rowCount = $constant_int_1;
				colCount = $constant_int_1;
				$iter1_iter = $p['getattr'](self, 'dock_children');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					child = $iter1_nextval;
					dir = $p['getattr'](child['getLayoutData'](), 'direction');
					if ((($bool12=((($bool11=$or1=$p['op_eq'](dir, $p['getattr'](self, 'NORTH'))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11['__nonzero__']=='function'?
								$bool11['__nonzero__']() :
								(typeof $bool11['__len__']=='function'?
									($bool11['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:$p['op_eq'](dir, $p['getattr'](self, 'SOUTH')))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						rowCount = (typeof ($add3=rowCount)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					else if ((($bool14=((($bool13=$or3=$p['op_eq'](dir, $p['getattr'](self, 'EAST'))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:$p['op_eq'](dir, $p['getattr'](self, 'WEST')))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14['__nonzero__']=='function'?
									$bool14['__nonzero__']() :
									(typeof $bool14['__len__']=='function'?
										($bool14['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						colCount = (typeof ($add5=colCount)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
				}
				rows = $p['list']([]);
				$iter2_iter = $p['range'](rowCount);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					rows['append']($m['DockPanelTmpRow']());
					(typeof ($5=rows)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i))['__is_instance__'] && typeof (typeof ($5=rows)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i))['__setattr__'] == 'function' ? (typeof ($5=rows)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i))['__setattr__']('tr', $m['DOM']['createTR']()) : $p['setattr']((typeof ($5=rows)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](i)), 'tr', $m['DOM']['createTR']()); 
					$m['DOM']['appendChild'](bodyElement, $p['getattr']((typeof ($7=rows)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](i)), 'tr'));
				}
				westCol = $constant_int_0;
				eastCol = (typeof ($sub1=colCount)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				northRow = $constant_int_0;
				southRow = (typeof ($sub3=rowCount)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				centerTd = null;
				$iter3_iter = $p['getattr'](self, 'dock_children');
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					child = $iter3_nextval;
					layout = child['getLayoutData']();
					td = $m['DOM']['createTD']();
					layout['__is_instance__'] && typeof layout['__setattr__'] == 'function' ? layout['__setattr__']('td', td) : $p['setattr'](layout, 'td', td); 
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'align', $p['getattr'](layout, 'hAlign'));
					$m['DOM']['setStyleAttribute']($p['getattr'](layout, 'td'), 'verticalAlign', $p['getattr'](layout, 'vAlign'));
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'width', $p['getattr'](layout, 'width'));
					$m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'height', $p['getattr'](layout, 'height'));
					if ((($bool15=$p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'NORTH'))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15['__nonzero__']=='function'?
									$bool15['__nonzero__']() :
									(typeof $bool15['__len__']=='function'?
										($bool15['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['DOM']['insertChild']($p['getattr']((typeof ($9=rows)['__array'] != 'undefined'?
							((typeof $9['__array'][$10=northRow]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__'](northRow)), 'tr'), td, $p['getattr']((typeof ($11=rows)['__array'] != 'undefined'?
							((typeof $11['__array'][$12=northRow]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](northRow)), 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'colSpan', (typeof ($add7=(typeof ($sub5=eastCol)==typeof ($sub6=westCol) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6)))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8)));
						northRow = (typeof ($add9=northRow)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
					}
					else if ((($bool16=$p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'SOUTH'))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16['__nonzero__']=='function'?
									$bool16['__nonzero__']() :
									(typeof $bool16['__len__']=='function'?
										($bool16['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m['DOM']['insertChild']($p['getattr']((typeof ($13=rows)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=southRow]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](southRow)), 'tr'), td, $p['getattr']((typeof ($15=rows)['__array'] != 'undefined'?
							((typeof $15['__array'][$16=southRow]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__'](southRow)), 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'colSpan', (typeof ($add11=(typeof ($sub7=eastCol)==typeof ($sub8=westCol) && (typeof $sub7=='number'||typeof $sub7=='string')?
							$sub7-$sub8:
							$p['op_sub']($sub7,$sub8)))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
						southRow = (typeof ($sub9=southRow)==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10));
					}
					else if ((($bool17=$p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'WEST'))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						row = (typeof ($17=rows)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=northRow]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](northRow));
						$m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
						row['__is_instance__'] && typeof row['__setattr__'] == 'function' ? row['__setattr__']('center', (typeof ($add13=$p['getattr'](row, 'center'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14))) : $p['setattr'](row, 'center', (typeof ($add13=$p['getattr'](row, 'center'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14))); 
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'rowSpan', (typeof ($add15=(typeof ($sub11=southRow)==typeof ($sub12=northRow) && (typeof $sub11=='number'||typeof $sub11=='string')?
							$sub11-$sub12:
							$p['op_sub']($sub11,$sub12)))==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16)));
						westCol = (typeof ($add17=westCol)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
					}
					else if ((($bool18=$p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'EAST'))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
							false :
							(typeof $bool18=='object'?
								(typeof $bool18['__nonzero__']=='function'?
									$bool18['__nonzero__']() :
									(typeof $bool18['__len__']=='function'?
										($bool18['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						row = (typeof ($19=rows)['__array'] != 'undefined'?
							((typeof $19['__array'][$20=northRow]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](northRow));
						$m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
						self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
						$m['DOM']['setIntAttribute'](td, 'rowSpan', (typeof ($add19=(typeof ($sub13=southRow)==typeof ($sub14=northRow) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14)))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20)));
						eastCol = (typeof ($sub15=eastCol)==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16));
					}
					else if ((($bool19=$p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'CENTER'))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19['__nonzero__']=='function'?
									$bool19['__nonzero__']() :
									(typeof $bool19['__len__']=='function'?
										($bool19['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						centerTd = td;
					}
				}
				if ((($bool20=!$p['op_is']($p['getattr'](self, 'center'), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20['__nonzero__']=='function'?
								$bool20['__nonzero__']() :
								(typeof $bool20['__len__']=='function'?
									($bool20['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					row = (typeof ($21=rows)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=northRow]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](northRow));
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
				var $bool21,$bool22;
				if ((($bool21=!$p['op_is'](beingAdded, null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool22=$m['DOM']['compare'](child, beingAdded['getElement']())) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
							false :
							(typeof $bool22=='object'?
								(typeof $bool22['__nonzero__']=='function'?
									$bool22['__nonzero__']() :
									(typeof $bool22['__len__']=='function'?
										($bool22['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
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
