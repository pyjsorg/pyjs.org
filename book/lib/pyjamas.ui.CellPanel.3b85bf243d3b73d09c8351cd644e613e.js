/* start module: pyjamas.ui.CellPanel */
$pyjs['loaded_modules']['pyjamas.ui.CellPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CellPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CellPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CellPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['CellPanel'] = $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$m['CellPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.CellPanel';
			$cls_definition['__md5__'] = '4da375bade73687d33e77fd47c0fa42d';
			$cls_definition['_props'] = $p['list']([$p['tuple'](['horzAlign', 'Horizontal alignment', 'HorizontalAlignment', null]), $p['tuple'](['vertAlign', 'Vertical alignment', 'VerticalAlignment', null]), $p['tuple'](['border', 'Border width', 'BorderWidth', $p['int']]), $p['tuple'](['spacing', 'Spacing', 'Spacing', null]), $p['tuple'](['padding', 'Padding', 'Padding', null])]);
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
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
				var $or1,$or2,element,fc;
				kwargs['__setitem__']('Spacing', kwargs['get']('Spacing', $constant_int_0));
				kwargs['__setitem__']('Padding', kwargs['get']('Padding', $constant_int_0));
				kwargs['__setitem__']('HorizontalAlignment', kwargs['get']('HorizontalAlignment', $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT')));
				kwargs['__setitem__']('VerticalAlignment', kwargs['get']('VerticalAlignment', $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP')));
				element = ($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createTable']());
				fc = $m['DOM']['getFirstChild'](element);
				if ($p['bool'](fc)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('body', fc) : $p['setattr'](self, 'body', fc); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('body', $m['DOM']['createTBody']()) : $p['setattr'](self, 'body', $m['DOM']['createTBody']()); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', element) : $p['setattr'](self, 'table', element); 
				self['setElement']($p['getattr'](self, 'table'));
				$m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'body'));
				$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				return $p['__op_add']($add1=$m['ComplexPanel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$method = $pyjs__bind_method2('getTable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'table');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTable'] = $method;
			$method = $pyjs__bind_method2('getBody', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'body');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBody'] = $method;
			$method = $pyjs__bind_method2('getBorderWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getAttribute']($p['getattr'](self, 'table'), 'border');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderWidth'] = $method;
			$method = $pyjs__bind_method2('getCellHeight', function(widget) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = $m['DOM']['getParent'](widget['getElement']());
				return $m['DOM']['getAttribute'](td, 'height');
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellHeight'] = $method;
			$method = $pyjs__bind_method2('getCellWidth', function(widget) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = $m['DOM']['getParent'](widget['getElement']());
				return $m['DOM']['getAttribute'](td, 'width');
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellWidth'] = $method;
			$method = $pyjs__bind_method2('getSpacing', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'spacing');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSpacing'] = $method;
			$method = $pyjs__bind_method2('getPadding', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'padding');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPadding'] = $method;
			$method = $pyjs__bind_method2('getCellHorizontalAlignment', function(widget) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = self['getWidgetTd'](widget);
				if ($p['bool']($p['op_is'](td, null))) {
					return null;
				}
				return $m['DOM']['getAttribute'](td, 'align');
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('getCellVerticalAlignment', function(widget) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = self['getWidgetTd'](widget);
				if ($p['bool']($p['op_is'](td, null))) {
					return null;
				}
				return $m['DOM']['getStyleAttribute'](td, 'verticalAlign');
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellVerticalAlignment'] = $method;
			$method = $pyjs__bind_method2('getWidgetTd', function(widget) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
					return null;
				}
				return $m['DOM']['getParent'](widget['getElement']());
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetTd'] = $method;
			$method = $pyjs__bind_method2('setBorderWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or3,$or4;
				if ($p['bool'](($p['bool']($or3=$p['op_is'](width, null))?$or3:$p['op_eq'](width, '')))) {
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'border');
				}
				else {
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'border', $p['sprintf']('%d', width));
				}
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setBorderWidth'] = $method;
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = $m['DOM']['getParent'](widget['getElement']());
				if ($p['bool']($p['op_is'](height, null))) {
					$m['DOM']['removeAttribute'](td, 'height');
				}
				else {
					$m['DOM']['setAttribute'](td, 'height', $p['str'](height));
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = self['getWidgetTd'](widget);
				if ($p['bool'](!$p['op_is'](td, null))) {
					if ($p['bool']($p['op_is'](align, null))) {
						$m['DOM']['removeAttribute'](td, 'align');
					}
					else {
						$m['DOM']['setAttribute'](td, 'align', align);
					}
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = self['getWidgetTd'](widget);
				if ($p['bool'](!$p['op_is'](td, null))) {
					if ($p['bool']($p['op_is'](align, null))) {
						$m['DOM']['setStyleAttribute'](td, 'verticalAlign', '');
					}
					else {
						$m['DOM']['setStyleAttribute'](td, 'verticalAlign', align);
					}
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = $m['DOM']['getParent'](widget['getElement']());
				if ($p['bool']($p['op_is'](width, null))) {
					$m['DOM']['removeAttribute'](td, 'width');
				}
				else {
					$m['DOM']['setAttribute'](td, 'width', $p['str'](width));
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['width']]);
			$cls_definition['setCellWidth'] = $method;
			$method = $pyjs__bind_method2('setSpacing', function(spacing) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					spacing = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('spacing', spacing) : $p['setattr'](self, 'spacing', spacing); 
				if ($p['bool']($p['op_is'](spacing, null))) {
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'cellSpacing');
				}
				else {
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellSpacing', $p['str'](spacing));
				}
				return null;
			}
	, 1, [null,null,['self'],['spacing']]);
			$cls_definition['setSpacing'] = $method;
			$method = $pyjs__bind_method2('setPadding', function(padding) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					padding = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('padding', padding) : $p['setattr'](self, 'padding', padding); 
				if ($p['bool']($p['op_is'](padding, null))) {
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'cellPadding');
				}
				else {
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellPadding', $p['str'](padding));
				}
				return null;
			}
	, 1, [null,null,['self'],['padding']]);
			$cls_definition['setPadding'] = $method;
			$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					align = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('horzAlign', align) : $p['setattr'](self, 'horzAlign', align); 
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('setVerticalAlignment', function(align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					align = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vertAlign', align) : $p['setattr'](self, 'vertAlign', align); 
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setVerticalAlignment'] = $method;
			$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'horzAlign');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('getVerticalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'vertAlign');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVerticalAlignment'] = $method;
			var $bases = new Array($m['ComplexPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CellPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.CellPanel', 'CellPanel', $m['CellPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.CellPanel */


/* end module: pyjamas.ui.CellPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
