/* start module: pyjamas.chart.Point */
$pyjs.loaded_modules['pyjamas.chart.Point'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.Point'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.Point'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.Point"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.Point>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Point';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['Point'] = $pyjs.loaded_modules['pyjamas.chart.Point'];
	try {


		$m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
		$m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['Annotation'] = $p['___import___']('pyjamas.chart.Annotation.Annotation', 'pyjamas.chart', null, false);
		$m['HovertextChunk'] = $p['___import___']('pyjamas.chart.HovertextChunk', 'pyjamas.chart', null, false);
		$m['Point'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.Point';
			$cls_definition.__md5__ = '29038a54320e1055ff2cb11f1e9017ee';
			$method = $pyjs__bind_method2('getINextInBand', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'iNextInBand');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getINextInBand'] = $method;
			$method = $pyjs__bind_method2('setINextInBand', function(iNext) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iNext = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('iNextInBand', iNext) : $p['setattr'](self, 'iNextInBand', iNext); 
				return null;
			}
	, 1, [null,null,['self'],['iNext']]);
			$cls_definition['setINextInBand'] = $method;
			$method = $pyjs__bind_method2('__init__', function(curve, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					curve = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curve', curve) : $p['setattr'](self, 'curve', curve); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('y', y) : $p['setattr'](self, 'y', y); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('iNextInBand', $m['NAI']) : $p['setattr'](self, 'iNextInBand', $m['NAI']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('annotation', null) : $p['setattr'](self, 'annotation', null); 
				return null;
			}
	, 1, [null,null,['self'],['curve'],['x'],['y']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getAnnotationFontWeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getFontWeight']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationFontWeight'] = $method;
			$method = $pyjs__bind_method2('getAnnotationFontColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getFontColor']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationFontColor'] = $method;
			$method = $pyjs__bind_method2('getAnnotationFontStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getFontStyle']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationFontStyle'] = $method;
			$method = $pyjs__bind_method2('getAnnotationFontSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getFontSize']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationFontSize'] = $method;
			$method = $pyjs__bind_method2('getAnnotationLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1,result;
				result = self['getAnnotation']()['getLocation']();
				if ((($bool1=$p['op_eq'](null, result)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					result = self['getParent']()['getSymbol']()['getSymbolType']()['defaultAnnotationLocation']();
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationLocation'] = $method;
			$method = $pyjs__bind_method2('getAnnotationText', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getText']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationText'] = $method;
			$method = $pyjs__bind_method2('getAnnotationWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getWidget']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationWidget'] = $method;
			$method = $pyjs__bind_method2('getAnnotationVisible', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getVisible']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationVisible'] = $method;
			$method = $pyjs__bind_method2('getAnnotationXShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getXShift']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationXShift'] = $method;
			$method = $pyjs__bind_method2('getAnnotationYShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getAnnotation']()['getYShift']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotationYShift'] = $method;
			$method = $pyjs__bind_method2('getParent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'curve');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getParent'] = $method;
			$method = $pyjs__bind_method2('getX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'x');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getX'] = $method;
			$method = $pyjs__bind_method2('getY', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'y');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getY'] = $method;
			$method = $pyjs__bind_method2('setAnnotationFontWeight', function(cssWeight) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssWeight = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setFontWeight'](cssWeight);
				return null;
			}
	, 1, [null,null,['self'],['cssWeight']]);
			$cls_definition['setAnnotationFontWeight'] = $method;
			$method = $pyjs__bind_method2('setAnnotationFontColor', function(cssColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setFontColor'](cssColor);
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setAnnotationFontColor'] = $method;
			$method = $pyjs__bind_method2('setAnnotationFontStyle', function(cssStyle) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssStyle = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setFontStyle'](cssStyle);
				return null;
			}
	, 1, [null,null,['self'],['cssStyle']]);
			$cls_definition['setAnnotationFontStyle'] = $method;
			$method = $pyjs__bind_method2('setAnnotationFontSize', function(fontSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fontSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setFontSize'](fontSize);
				return null;
			}
	, 1, [null,null,['self'],['fontSize']]);
			$cls_definition['setAnnotationFontSize'] = $method;
			$method = $pyjs__bind_method2('setAnnotationLocation', function(annotationLocation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					annotationLocation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setLocation'](annotationLocation);
				return null;
			}
	, 1, [null,null,['self'],['annotationLocation']]);
			$cls_definition['setAnnotationLocation'] = $method;
			$method = $pyjs__bind_method2('setAnnotationText', function(annotationText, widthUpperBound, heightUpperBound) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					annotationText = arguments[1];
					widthUpperBound = arguments[2];
					heightUpperBound = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[4][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[5][1];

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setText'](annotationText, widthUpperBound, heightUpperBound);
				return null;
			}
	, 1, [null,null,['self'],['annotationText'],['widthUpperBound', $m['NAI']],['heightUpperBound', $m['NAI']]]);
			$cls_definition['setAnnotationText'] = $method;
			$method = $pyjs__bind_method2('setAnnotationWidget', function(annotationWidget, widthUpperBound, heightUpperBound) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					annotationWidget = arguments[1];
					widthUpperBound = arguments[2];
					heightUpperBound = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[4][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[5][1];
				var $bool3,$bool2;
				self['getParent']()['invalidate']();
				if ((($bool2=$p['op_eq'](widthUpperBound, $m['NAI'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					widthUpperBound = $m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'];
				}
				if ((($bool3=$p['op_eq'](heightUpperBound, $m['NAI'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					heightUpperBound = $m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'];
				}
				self['getAnnotation']()['setWidget'](annotationWidget, widthUpperBound, heightUpperBound);
				return null;
			}
	, 1, [null,null,['self'],['annotationWidget'],['widthUpperBound', $m['DEFAULT_WIDGET_WIDTH_UPPERBOUND']],['heightUpperBound', $m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND']]]);
			$cls_definition['setAnnotationWidget'] = $method;
			$method = $pyjs__bind_method2('setAnnotationVisible', function(isVisible) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					isVisible = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setVisible'](isVisible);
				return null;
			}
	, 1, [null,null,['self'],['isVisible']]);
			$cls_definition['setAnnotationVisible'] = $method;
			$method = $pyjs__bind_method2('setAnnotationXShift', function(xShift) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					xShift = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setXShift'](xShift);
				return null;
			}
	, 1, [null,null,['self'],['xShift']]);
			$cls_definition['setAnnotationXShift'] = $method;
			$method = $pyjs__bind_method2('setAnnotationYShift', function(yShift) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					yShift = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self['getAnnotation']()['setYShift'](yShift);
				return null;
			}
	, 1, [null,null,['self'],['yShift']]);
			$cls_definition['setAnnotationYShift'] = $method;
			$method = $pyjs__bind_method2('setX', function(x) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['setX'] = $method;
			$method = $pyjs__bind_method2('setY', function(y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					y = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('y', y) : $p['setattr'](self, 'y', y); 
				return null;
			}
	, 1, [null,null,['self'],['y']]);
			$cls_definition['setY'] = $method;
			$method = $pyjs__bind_method2('getAnnotation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4;
				if ((($bool4=$p['op_is']($p['getattr'](self, 'annotation'), null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('annotation', $m['Annotation']()) : $p['setattr'](self, 'annotation', $m['Annotation']()); 
				}
				return $p['getattr'](self, 'annotation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAnnotation'] = $method;
			$method = $pyjs__bind_method2('getHovertext', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '29038a54320e1055ff2cb11f1e9017ee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['HovertextChunk']['getHovertext'](self['getParent']()['getSymbol']()['getHovertextChunks'](), self);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHovertext'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Point', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.Point */


/* end module: pyjamas.chart.Point */


/*
PYJS_DEPS: ['pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart.Annotation.Annotation', 'pyjamas.chart.Annotation', 'pyjamas.chart.HovertextChunk']
*/
