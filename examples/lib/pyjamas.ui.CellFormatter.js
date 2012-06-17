/* start module: pyjamas.ui.CellFormatter */
$pyjs.loaded_modules['pyjamas.ui.CellFormatter'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CellFormatter'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CellFormatter'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.CellFormatter"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.CellFormatter>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CellFormatter';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['CellFormatter'] = $pyjs.loaded_modules['pyjamas.ui.CellFormatter'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
		$m['CellFormatter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.CellFormatter';
			$cls_definition.__md5__ = 'bdb5cd4145ffd6bef96c2c0243259250';
			$cls_definition['_elem_props'] = $p['list']([$p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null, true]), $p['tuple'](['stylename', 'Style Name', 'StyleName', null, '']), $p['tuple'](['height', 'Height', 'Height', null, null]), $p['tuple'](['width', 'Width', 'Width', null, null]), $p['tuple'](['halign', 'Horizontal Alignment', 'HorizontalAlignment', $p['str'], '']), $p['tuple'](['valign', 'Vertical Alignment', 'VerticalAlignment', $p['str'], ''])]);
			$method = $pyjs__bind_method2('_getElementProps', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_elem_props');
			}
	, 1, [null,null,['self']]);
			$cls_definition['_getElementProps'] = $method;
			$method = $pyjs__bind_method2('__init__', function(outer) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					outer = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof outer != 'undefined') {
						if (outer !== null && typeof outer['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = outer;
							outer = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('outer', outer) : $p['setattr'](self, 'outer', outer); 
				$pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['outer']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_setStyleName', function(row, column, styleName, add) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					styleName = arguments[3];
					add = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['outer']['prepareCell'](row, column);
				self['outer']['setStyleName'](self['getElement'](row, column), styleName, add);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['styleName'],['add']]);
			$cls_definition['_setStyleName'] = $method;
			$method = $pyjs__bind_method2('addStyleName', function(row, column, styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					styleName = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_setStyleName'](row, column, styleName, true);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['styleName']]);
			$cls_definition['addStyleName'] = $method;
			$method = $pyjs__bind_method2('getElement', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['outer']['checkCellBounds'](row, column);
				return $m['DOM']['getChild'](self['outer']['rowFormatter']['getRow']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row), column);
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['getElement'] = $method;
			$method = $pyjs__bind_method2('getStyleName', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getAttribute'](self['getElement'](row, column), 'className');
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['getStyleName'] = $method;
			$method = $pyjs__bind_method2('isVisible', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getVisible'](row, column);
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['isVisible'] = $method;
			$method = $pyjs__bind_method2('getVisible', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				element = self['getElement'](row, column);
				return self['outer']['isVisible'](element);
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['getVisible'] = $method;
			$method = $pyjs__bind_method2('removeStyleName', function(row, column, styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					styleName = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_setStyleName'](row, column, styleName, false);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['styleName']]);
			$cls_definition['removeStyleName'] = $method;
			$method = $pyjs__bind_method2('setAlignment', function(row, column, hAlign, vAlign) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					hAlign = arguments[3];
					vAlign = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setHorizontalAlignment'](row, column, hAlign);
				self['setVerticalAlignment'](row, column, vAlign);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['hAlign'],['vAlign']]);
			$cls_definition['setAlignment'] = $method;
			$method = $pyjs__bind_method2('setHeight', function(row, column, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					height = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				self['outer']['prepareCell'](row, column);
				element = self['getCellElement']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row, column);
				$m['DOM']['setStyleAttribute'](element, 'height', height);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['height']]);
			$cls_definition['setHeight'] = $method;
			$method = $pyjs__bind_method2('setHorizontalAlignment', function(row, column, align) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					align = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				self['outer']['prepareCell'](row, column);
				element = self['getCellElement']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row, column);
				$m['DOM']['setAttribute'](element, 'align', align);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['align']]);
			$cls_definition['setHorizontalAlignment'] = $method;
			$method = $pyjs__bind_method2('setStyleName', function(row, column, styleName, add) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					styleName = arguments[3];
					add = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof add == 'undefined') add=arguments.callee.__args__[6][1];
				var $bool1;
				if ((($bool1=$p['op_is'](add, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['outer']['prepareCell'](row, column);
					self['setAttr'](row, column, 'className', styleName);
				}
				else {
					self['_setStyleName'](row, column, styleName, add);
				}
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['styleName'],['add', null]]);
			$cls_definition['setStyleName'] = $method;
			$method = $pyjs__bind_method2('setVerticalAlignment', function(row, column, align) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					align = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['outer']['prepareCell'](row, column);
				$m['DOM']['setStyleAttribute'](self['getCellElement']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row, column), 'verticalAlign', align);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['align']]);
			$cls_definition['setVerticalAlignment'] = $method;
			$method = $pyjs__bind_method2('setVisible', function(row, column, visible) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					visible = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				element = self['ensureElement'](row, column);
				self['outer']['setVisible'](element, visible);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['visible']]);
			$cls_definition['setVisible'] = $method;
			$method = $pyjs__bind_method2('setWidth', function(row, column, width) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					width = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['outer']['prepareCell'](row, column);
				$m['DOM']['setStyleAttribute'](self['getCellElement']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row, column), 'width', width);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['width']]);
			$cls_definition['setWidth'] = $method;
			$method = $pyjs__bind_method2('setWordWrap', function(row, column, wrap) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					wrap = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,wrap_str;
				self['outer']['prepareCell'](row, column);
				if ((($bool2=wrap) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					wrap_str = '';
				}
				else {
					wrap_str = 'nowrap';
				}
				$m['DOM']['setStyleAttribute'](self['getElement'](row, column), 'whiteSpace', wrap_str);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['wrap']]);
			$cls_definition['setWordWrap'] = $method;
			$method = $pyjs__bind_method2('getCellElement', function(table, row, col) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					row = arguments[2];
					col = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,item,cols,$bool3,length,$bool4;
				length = $p['getattr']($p['getattr'](table, 'rows'), 'length');
				if ((($bool3=((((($cmp1=row)===($cmp2=length)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				cols = $p['getattr'](table['rows']['item'](row), 'cells');
				length = $p['getattr'](cols, 'length');
				if ((($bool4=((((($cmp3=col)===($cmp4=length)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				item = cols['item'](col);
				return item;
			}
	, 1, [null,null,['self'],['table'],['row'],['col']]);
			$cls_definition['getCellElement'] = $method;
			$method = $pyjs__bind_method2('getRawElement', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getCellElement']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row, column);
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['getRawElement'] = $method;
			$method = $pyjs__bind_method2('ensureElement', function(row, column) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['outer']['prepareCell'](row, column);
				return $m['DOM']['getChild'](self['outer']['rowFormatter']['ensureElement'](row), column);
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['ensureElement'] = $method;
			$method = $pyjs__bind_method2('getStyleAttr', function(row, column, attr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					attr = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var elem;
				elem = self['getElement'](row, column);
				return $m['DOM']['getStyleAttribute'](elem, attr);
			}
	, 1, [null,null,['self'],['row'],['column'],['attr']]);
			$cls_definition['getStyleAttr'] = $method;
			$method = $pyjs__bind_method2('setStyleAttr', function(row, column, attrName, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					attrName = arguments[3];
					value = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var elem;
				elem = self['getElement'](row, column);
				$m['DOM']['setStyleAttribute'](elem, attrName, value);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['attrName'],['value']]);
			$cls_definition['setStyleAttr'] = $method;
			$method = $pyjs__bind_method2('getAttr', function(row, column, attr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					attr = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var elem;
				elem = self['getElement'](row, column);
				return $m['DOM']['getAttribute'](elem, attr);
			}
	, 1, [null,null,['self'],['row'],['column'],['attr']]);
			$cls_definition['getAttr'] = $method;
			$method = $pyjs__bind_method2('setAttr', function(row, column, attrName, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					attrName = arguments[3];
					value = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bdb5cd4145ffd6bef96c2c0243259250') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var elem;
				elem = self['getElement'](row, column);
				$m['DOM']['setAttribute'](elem, attrName, value);
				return null;
			}
	, 1, [null,null,['self'],['row'],['column'],['attrName'],['value']]);
			$cls_definition['setAttr'] = $method;
			var $bases = new Array($m['Applier']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CellFormatter', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.CellFormatter */


/* end module: pyjamas.ui.CellFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
