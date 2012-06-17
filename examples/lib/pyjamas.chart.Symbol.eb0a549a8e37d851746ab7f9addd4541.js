/* start module: pyjamas.chart.Symbol */
$pyjs.loaded_modules['pyjamas.chart.Symbol'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.Symbol'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.Symbol'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.Symbol"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.Symbol>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Symbol';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['Symbol'] = $pyjs.loaded_modules['pyjamas.chart.Symbol'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		$m['math'] = $p['___import___']('math', 'pyjamas.chart');
		$m['re'] = $p['___import___']('re', 'pyjamas.chart');
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.chart', null, false);
		$m['GChartConsts'] = $p['___import___']('pyjamas.chart.GChartConsts', 'pyjamas.chart', null, false);
		$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', 'pyjamas.chart', null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
		$m['Annotation'] = $p['___import___']('pyjamas.chart.Annotation.Annotation', 'pyjamas.chart', null, false);
		$m['HovertextChunk'] = $p['___import___']('pyjamas.chart.HovertextChunk', 'pyjamas.chart', null, false);
		$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', 'pyjamas.chart', null, false);
		$m['Symbol'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.Symbol';
			$cls_definition.__md5__ = 'da0f9cf55962e6c7ff6fa1f93157e936';
			$method = $pyjs__bind_method2('__init__', function(parent) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', parent) : $p['setattr'](self, 'parent', parent); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('annotation', null) : $p['setattr'](self, 'annotation', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColor', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BACKGROUND_COLOR')) : $p['setattr'](self, 'backgroundColor', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BACKGROUND_COLOR')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColorCSS', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BACKGROUND_COLOR')) : $p['setattr'](self, 'backgroundColorCSS', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BACKGROUND_COLOR')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('baseline', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'baseline', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColor', 'black') : $p['setattr'](self, 'borderColor', 'black'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColorCSS', 'black') : $p['setattr'](self, 'borderColorCSS', 'black'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderStyle', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BORDER_STYLE')) : $p['setattr'](self, 'borderStyle', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BORDER_STYLE')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderWidth', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BORDER_WIDTH')) : $p['setattr'](self, 'borderWidth', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_BORDER_WIDTH')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushHeight', $p['getattr']($m['GChartConsts'], 'DEFAULT_BRUSH_HEIGHT')) : $p['setattr'](self, 'brushHeight', $p['getattr']($m['GChartConsts'], 'DEFAULT_BRUSH_HEIGHT')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushLocation', $p['getattr']($m['AnnotationLocation'], 'CENTER')) : $p['setattr'](self, 'brushLocation', $p['getattr']($m['AnnotationLocation'], 'CENTER')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushWidth', $p['getattr']($m['GChartConsts'], 'DEFAULT_BRUSH_WIDTH')) : $p['setattr'](self, 'brushWidth', $p['getattr']($m['GChartConsts'], 'DEFAULT_BRUSH_WIDTH')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillHasHovertext', true) : $p['setattr'](self, 'fillHasHovertext', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillSpacing', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'fillSpacing', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillThickness', $p['getattr']($m['GChartConsts'], 'NAI')) : $p['setattr'](self, 'fillThickness', $p['getattr']($m['GChartConsts'], 'NAI')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_HEIGHT')) : $p['setattr'](self, 'height', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_HEIGHT')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hovertextTemplate', null) : $p['setattr'](self, 'hovertextTemplate', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotation', null) : $p['setattr'](self, 'hoverAnnotation', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotationEnabled', true) : $p['setattr'](self, 'hoverAnnotationEnabled', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotationSymbolType', null) : $p['setattr'](self, 'hoverAnnotationSymbolType', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBackgroundColor', 'transparent') : $p['setattr'](self, 'hoverSelectionBackgroundColor', 'transparent'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderColor', 'gray') : $p['setattr'](self, 'hoverSelectionBorderColor', 'gray'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderStyle', 'solid') : $p['setattr'](self, 'hoverSelectionBorderStyle', 'solid'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderWidth', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'hoverSelectionBorderWidth', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionEnabled', true) : $p['setattr'](self, 'hoverSelectionEnabled', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionFillSpacing', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'hoverSelectionFillSpacing', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionFillThickness', $p['getattr']($m['GChartConsts'], 'NAI')) : $p['setattr'](self, 'hoverSelectionFillThickness', $p['getattr']($m['GChartConsts'], 'NAI')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionHeight', $p['getattr']($m['GChartConsts'], 'NAI')) : $p['setattr'](self, 'hoverSelectionHeight', $p['getattr']($m['GChartConsts'], 'NAI')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionImageURL', null) : $p['setattr'](self, 'hoverSelectionImageURL', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionWidth', $p['getattr']($m['GChartConsts'], 'NAI')) : $p['setattr'](self, 'hoverSelectionWidth', $p['getattr']($m['GChartConsts'], 'NAI')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionSymbolType', null) : $p['setattr'](self, 'hoverSelectionSymbolType', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hovertextChunks', null) : $p['setattr'](self, 'hovertextChunks', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('imageURL', null) : $p['setattr'](self, 'imageURL', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelHeight', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'modelHeight', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelWidth', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'modelWidth', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pieSliceOrientation', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'pieSliceOrientation', $p['getattr']($m['Double'], 'NaN')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('defaultPieSliceOrientation', 0.0) : $p['setattr'](self, 'defaultPieSliceOrientation', 0.0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pieSliceSize', $constant_int_1) : $p['setattr'](self, 'pieSliceSize', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('symbolType', $p['getattr']($m['SymbolType'], 'DEFAULT_SYMBOL_TYPE')) : $p['setattr'](self, 'symbolType', $p['getattr']($m['SymbolType'], 'DEFAULT_SYMBOL_TYPE')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_WIDTH')) : $p['setattr'](self, 'width', $p['getattr']($m['GChartConsts'], 'DEFAULT_SYMBOL_WIDTH')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xScaleFactor', 1.0) : $p['setattr'](self, 'xScaleFactor', 1.0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yScaleFactor', 1.0) : $p['setattr'](self, 'yScaleFactor', 1.0); 
				return null;
			}
	, 1, [null,null,['self'],['parent']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getBackgroundColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'backgroundColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('getBackgroundColorCSS', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'backgroundColorCSS');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBackgroundColorCSS'] = $method;
			$method = $pyjs__bind_method2('getBaseline', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'baseline');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBaseline'] = $method;
			$method = $pyjs__bind_method2('getBorderColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderColor'] = $method;
			$method = $pyjs__bind_method2('getBorderColorCSS', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderColorCSS');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderColorCSS'] = $method;
			$method = $pyjs__bind_method2('getBorderStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderStyle'] = $method;
			$method = $pyjs__bind_method2('getBorderWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderWidth'] = $method;
			$method = $pyjs__bind_method2('getBrushHeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'brushHeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBrushHeight'] = $method;
			$method = $pyjs__bind_method2('getBrushLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'brushLocation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBrushLocation'] = $method;
			$method = $pyjs__bind_method2('getBrushWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'brushWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBrushWidth'] = $method;
			$method = $pyjs__bind_method2('getFillHasHovertext', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fillHasHovertext');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFillHasHovertext'] = $method;
			$method = $pyjs__bind_method2('getFillSpacing', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), $p['getattr'](self, 'fillSpacing'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return self['symbolType']['defaultFillSpacing']();
				}
				else {
					return $p['getattr'](self, 'fillSpacing');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFillSpacing'] = $method;
			$method = $pyjs__bind_method2('getFillThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				if ((($bool2=$p['op_eq']($p['getattr'](self, 'fillThickness'), $p['getattr']($m['GChartConsts'], 'NAI'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					return self['symbolType']['defaultFillThickness']();
				}
				else {
					return $p['getattr'](self, 'fillThickness');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFillThickness'] = $method;
			$method = $pyjs__bind_method2('getHoverAnnotation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3;
				if ((($bool3=$p['op_is']($p['getattr'](self, 'hoverAnnotation'), null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotation', $m['Annotation']()) : $p['setattr'](self, 'hoverAnnotation', $m['Annotation']()); 
				}
				return $p['getattr'](self, 'hoverAnnotation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverAnnotation'] = $method;
			$method = $pyjs__bind_method2('getHoverAnnotationEnabled', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverAnnotationEnabled');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverAnnotationEnabled'] = $method;
			$method = $pyjs__bind_method2('getHoverFontWeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getFontWeight']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverFontWeight'] = $method;
			$method = $pyjs__bind_method2('getHoverFontColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getFontColor']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverFontColor'] = $method;
			$method = $pyjs__bind_method2('getHoverFontStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getFontStyle']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverFontStyle'] = $method;
			$method = $pyjs__bind_method2('getHoverFontSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getFontSize']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverFontSize'] = $method;
			$method = $pyjs__bind_method2('getHoverLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$bool4;
				result = self['getHoverAnnotation']()['getLocation']();
				if ((($bool4=$p['op_eq'](null, result)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					result = self['getSymbolType']()['defaultHoverLocation']();
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverLocation'] = $method;
			$method = $pyjs__bind_method2('getHoverAnnotationSymbolType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverAnnotationSymbolType');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverAnnotationSymbolType'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionBackgroundColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionBackgroundColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionBorderColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionBorderColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionBorderColor'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionBorderStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionBorderStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionBorderStyle'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionBorderWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionBorderWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionBorderWidth'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionEnabled', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionEnabled');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionEnabled'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionFillSpacing', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionFillSpacing');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionFillSpacing'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionFillThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionFillThickness');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionFillThickness'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionHeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionHeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionHeight'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionImageURL', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool5;
				if ((($bool5=$p['getattr'](self, 'hoverSelectionImageURL')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'hoverSelectionImageURL');
				}
				return self['parent']['chart']['getBlankImageURL']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionImageURL'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionSymbolType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionSymbolType');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionSymbolType'] = $method;
			$method = $pyjs__bind_method2('getHoverSelectionWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverSelectionWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverSelectionWidth'] = $method;
			$method = $pyjs__bind_method2('getHovertextTemplate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6;
				if ((($bool6=$p['op_eq'](null, $p['getattr'](self, 'hovertextTemplate'))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['symbolType']['defaultHovertextTemplate']();
				}
				else {
					return $p['getattr'](self, 'hovertextTemplate');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHovertextTemplate'] = $method;
			$method = $pyjs__bind_method2('getHoverWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getHoverAnnotation']()['getWidget']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverWidget'] = $method;
			$method = $pyjs__bind_method2('getHoverXShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getXShift']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverXShift'] = $method;
			$method = $pyjs__bind_method2('getHoverYShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getHoverAnnotation']()['getYShift']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverYShift'] = $method;
			$method = $pyjs__bind_method2('getImageURL', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool7;
				if ((($bool7=$p['getattr'](self, 'imageURL')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'imageURL');
				}
				return self['parent']['chart']['getBlankImageURL']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageURL'] = $method;
			$method = $pyjs__bind_method2('getHovertextChunks', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool8;
				if ((($bool8=$p['op_eq'](null, $p['getattr'](self, 'hovertextChunks'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hovertextChunks', $m['HovertextChunk']['parseHovertextTemplate'](self['getHovertextTemplate']())) : $p['setattr'](self, 'hovertextChunks', $m['HovertextChunk']['parseHovertextTemplate'](self['getHovertextTemplate']())); 
				}
				return $p['getattr'](self, 'hovertextChunks');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHovertextChunks'] = $method;
			$method = $pyjs__bind_method2('getChart', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'parent'), 'chart');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChart'] = $method;
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'parent');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getParent'] = $method;
			$method = $pyjs__bind_method2('getPieSliceOrientation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'pieSliceOrientation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('getDecodedPieSliceOrientation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool9,result;
				result = $p['getattr'](self, 'pieSliceOrientation');
				if ((($bool9=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), result)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'defaultPieSliceOrientation');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDecodedPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('setDefaultPieSliceOrientation', function(defaultOrientation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					defaultOrientation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('defaultPieSliceOrientation', defaultOrientation) : $p['setattr'](self, 'defaultPieSliceOrientation', defaultOrientation); 
				return null;
			}
	, 1, [null,null,['self'],['defaultOrientation']]);
			$cls_definition['setDefaultPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('getDefaultPieSliceOrientation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'defaultPieSliceOrientation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDefaultPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('getPieSliceSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'pieSliceSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPieSliceSize'] = $method;
			$method = $pyjs__bind_method2('getPieSliceRadius', function(pp, onY2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					onY2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div1,$bool10,h,$mul6,spacing,$add2,$add1,nBands,result,w,$div4,$div2,$div3,$mul5,$mul4,$mul3,$mul2,$mul1;
				w = self['getWidth'](pp);
				h = self['getHeight'](pp, onY2);
				result = (typeof ($div1=$m['math']['sqrt']((typeof ($add1=(typeof ($mul1=w)==typeof ($mul2=w) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($add2=(typeof ($mul3=h)==typeof ($mul4=h) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				spacing = self['getFillSpacing']();
				if ((($bool10=$p['op_eq']($constant_int_0, spacing)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spacing = $constant_int_1;
				}
				nBands = $p['int']($p['round']((typeof ($div3=result)==typeof ($div4=spacing) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))));
				result = (typeof ($mul5=nBands)==typeof ($mul6=spacing) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6));
				return result;
			}
	, 1, [null,null,['self'],['pp'],['onY2']]);
			$cls_definition['getPieSliceRadius'] = $method;
			$method = $pyjs__bind_method2('getPieSliceTheta0', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul10,result,$mul9,$mul8,$mul7,$sub2,$sub1;
				result = (typeof ($mul9=(typeof ($mul7=(typeof ($sub1=0.75)==typeof ($sub2=self['getDecodedPieSliceOrientation']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($mul8=$constant_int_2) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($mul10=$p['getattr']($m['math'], 'pi')) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPieSliceTheta0'] = $method;
			$method = $pyjs__bind_method2('getPieSliceTheta1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul14,$mul13,$mul12,$mul11,$sub3,$sub4;
				return (typeof ($sub3=self['getPieSliceTheta0']())==typeof ($sub4=(typeof ($mul13=(typeof ($mul11=2.0)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($mul14=self['getPieSliceSize']()) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPieSliceTheta1'] = $method;
			$method = $pyjs__bind_method2('getModelHeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'modelHeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getModelHeight'] = $method;
			$method = $pyjs__bind_method2('getModelWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'modelWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getModelWidth'] = $method;
			$method = $pyjs__bind_method2('getSymbolType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'symbolType');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSymbolType'] = $method;
			$method = $pyjs__bind_method2('isHorizontallyBanded', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool11,$cmp1,result,$cmp2;
				if ((($bool11=$p['op_eq'](null, $p['getattr']($p['getattr'](self, 'symbolType'), 'horizontallyBanded'))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = ((($cmp1=$p['getattr'](self, 'brushHeight'))===($cmp2=$p['getattr'](self, 'brushWidth'))?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1);
				}
				else {
					result = $p['bool'](self['symbolType']['isHorizontallyBanded']());
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isHorizontallyBanded'] = $method;
			$method = $pyjs__bind_method2('collapseRGBAToRGB', function(rgba) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					rgba = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13,$bool14,RGBA_PATTERN,RGB,result,lastComma,$add29,$add28,rp,$add21,$add20,$add22,$add25,$add24,$add27,$add26,FIRST_PAREN,A,$and1,$and2,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$add32,$add30,$add31,$add3,$add6,$add7,$add4,$add5,$add8,$add9,$add23;
				RGB = '([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2[0-4][0-9])|(25[0-5]))';
				A = '(0|1|(1[.]0*)|(0[.][0-9]*)|([.][0-9]+))';
				RGBA_PATTERN = (typeof ($add17=(typeof ($add15=(typeof ($add13=(typeof ($add11=(typeof ($add9=(typeof ($add7=(typeof ($add5=(typeof ($add3='rgba[(]')==typeof ($add4=RGB) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($add6='[,]') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=RGB) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10='[,]') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=RGB) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($add14='[,]') && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($add16=A) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))==typeof ($add18='[)]') && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				result = rgba;
				if ((($bool13=((($bool12=$and1=!$p['op_eq'](null, rgba)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?rgba['startswith']('rgba('):$and1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rp = $m['re']['compile'](RGBA_PATTERN);
					if ((($bool14=rp['match'](rgba)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14.__nonzero__=='function'?
									$bool14.__nonzero__() :
									(typeof $bool14.__len__=='function'?
										($bool14.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						FIRST_PAREN = $constant_int_4;
						lastComma = rgba['rfind'](',');
						result = (typeof ($add21=(typeof ($add19='rgb')==typeof ($add20=$p['__getslice'](rgba, FIRST_PAREN, lastComma)) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20)))==typeof ($add22=')') && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
					else {
						throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add31=(typeof ($add29=(typeof ($add27=(typeof ($add25=(typeof ($add23="Your RGBA color specification: '")==typeof ($add24=rgba) && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24)))==typeof ($add26="'") && (typeof $add25=='number'||typeof $add25=='string')?
							$add25+$add26:
							$p['op_add']($add25,$add26)))==typeof ($add28=' was not in the GChart-required form: rgba(Red,Green,Blue,Alpha)') && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($add30=' where Red, Green and Blue are integers in the range 0 to 255 and') && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30)))==typeof ($add32=' Alpha is a double in the range 0.0 to 1.0') && (typeof $add31=='number'||typeof $add31=='string')?
							$add31+$add32:
							$p['op_add']($add31,$add32))));
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['rgba']]);
			$cls_definition['collapseRGBAToRGB'] = $method;
			$method = $pyjs__bind_method2('setBackgroundColor', function(backgroundColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					backgroundColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColor', backgroundColor) : $p['setattr'](self, 'backgroundColor', backgroundColor); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColorCSS', self['collapseRGBAToRGB'](backgroundColor)) : $p['setattr'](self, 'backgroundColorCSS', self['collapseRGBAToRGB'](backgroundColor)); 
				return null;
			}
	, 1, [null,null,['self'],['backgroundColor']]);
			$cls_definition['setBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setBaseline', function(baseline) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					baseline = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('baseline', baseline) : $p['setattr'](self, 'baseline', baseline); 
				return null;
			}
	, 1, [null,null,['self'],['baseline']]);
			$cls_definition['setBaseline'] = $method;
			$method = $pyjs__bind_method2('setBorderColor', function(borderColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					borderColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColor', borderColor) : $p['setattr'](self, 'borderColor', borderColor); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColorCSS', self['collapseRGBAToRGB'](borderColor)) : $p['setattr'](self, 'borderColorCSS', self['collapseRGBAToRGB'](borderColor)); 
				return null;
			}
	, 1, [null,null,['self'],['borderColor']]);
			$cls_definition['setBorderColor'] = $method;
			$method = $pyjs__bind_method2('setBorderStyle', function(borderStyle) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					borderStyle = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderStyle', borderStyle) : $p['setattr'](self, 'borderStyle', borderStyle); 
				return null;
			}
	, 1, [null,null,['self'],['borderStyle']]);
			$cls_definition['setBorderStyle'] = $method;
			$method = $pyjs__bind_method2('setBorderWidth', function(borderWidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					borderWidth = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderWidth', borderWidth) : $p['setattr'](self, 'borderWidth', borderWidth); 
				return null;
			}
	, 1, [null,null,['self'],['borderWidth']]);
			$cls_definition['setBorderWidth'] = $method;
			$method = $pyjs__bind_method2('setBrushHeight', function(height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushHeight', height) : $p['setattr'](self, 'brushHeight', height); 
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setBrushHeight'] = $method;
			$method = $pyjs__bind_method2('setBrushLocation', function(location) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					location = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushLocation', location) : $p['setattr'](self, 'brushLocation', location); 
				return null;
			}
	, 1, [null,null,['self'],['location']]);
			$cls_definition['setBrushLocation'] = $method;
			$method = $pyjs__bind_method2('setBrushSize', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setBrushWidth'](width);
				self['setBrushHeight'](height);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setBrushSize'] = $method;
			$method = $pyjs__bind_method2('setBrushWidth', function(width) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('brushWidth', width) : $p['setattr'](self, 'brushWidth', width); 
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setBrushWidth'] = $method;
			$method = $pyjs__bind_method2('setDistanceMetric', function(xScaleFactor, yScaleFactor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					xScaleFactor = arguments[1];
					yScaleFactor = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xScaleFactor', xScaleFactor) : $p['setattr'](self, 'xScaleFactor', xScaleFactor); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yScaleFactor', yScaleFactor) : $p['setattr'](self, 'yScaleFactor', yScaleFactor); 
				return null;
			}
	, 1, [null,null,['self'],['xScaleFactor'],['yScaleFactor']]);
			$cls_definition['setDistanceMetric'] = $method;
			$method = $pyjs__bind_method2('setFillHasHovertext', function(fillHasHovertext) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fillHasHovertext = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillHasHovertext', fillHasHovertext) : $p['setattr'](self, 'fillHasHovertext', fillHasHovertext); 
				return null;
			}
	, 1, [null,null,['self'],['fillHasHovertext']]);
			$cls_definition['setFillHasHovertext'] = $method;
			$method = $pyjs__bind_method2('setFillSpacing', function(fillSpacing) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fillSpacing = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$cmp4,$add38,$and5,$add40,$cmp3,$add37,$add33,$and3,$and4,$bool16,$bool15,$add35,$add36,$add39,$add34,$bool17;
				self['getParent']()['invalidate']();
				if ((($bool18=((($bool16=$and3=!(($bool15=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), fillSpacing)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool17=$and4=!$p['op_eq'](fillSpacing, $constant_int_0)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp3=fillSpacing)===($cmp4=$constant_int_1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1):$and4):$and3)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add39=(typeof ($add37=(typeof ($add35=(typeof ($add33='fillSpacing=')==typeof ($add34=fillSpacing) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)))==typeof ($add36='; ') && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36)))==typeof ($add38='fillSpacing must either be >= 1, or else ') && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($add40='equal to either 0 or Double.NaN.') && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillSpacing', fillSpacing) : $p['setattr'](self, 'fillSpacing', fillSpacing); 
				return null;
			}
	, 1, [null,null,['self'],['fillSpacing']]);
			$cls_definition['setFillSpacing'] = $method;
			$method = $pyjs__bind_method2('setFillThickness', function(fillThickness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fillThickness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$bool19,$cmp6,$add48,$add47,$add46,$add44,$add43,$add42,$and6,$and7,$add41,$bool20,$add45;
				self['getParent']()['invalidate']();
				if ((($bool20=((($bool19=$and6=!$p['op_eq'](fillThickness, $p['getattr']($m['GChartConsts'], 'NAI'))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp5=fillThickness)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1):$and6)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41='fillThickness=')==typeof ($add42=$p['getattr'](self, 'fillThickness')) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42)))==typeof ($add44='; ') && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44)))==typeof ($add46='fillThickness must either be >= 0, or else ') && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)))==typeof ($add48='equal to GChartConsts.NAI.') && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48))));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fillThickness', fillThickness) : $p['setattr'](self, 'fillThickness', fillThickness); 
				return null;
			}
	, 1, [null,null,['self'],['fillThickness']]);
			$cls_definition['setFillThickness'] = $method;
			$method = $pyjs__bind_method2('setHoverAnnotationEnabled', function(hoverAnnotationEnabled) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverAnnotationEnabled = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotationEnabled', hoverAnnotationEnabled) : $p['setattr'](self, 'hoverAnnotationEnabled', hoverAnnotationEnabled); 
				return null;
			}
	, 1, [null,null,['self'],['hoverAnnotationEnabled']]);
			$cls_definition['setHoverAnnotationEnabled'] = $method;
			$method = $pyjs__bind_method2('setHoverFontWeight', function(cssWeight) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setFontWeight'](cssWeight);
				return null;
			}
	, 1, [null,null,['self'],['cssWeight']]);
			$cls_definition['setHoverFontWeight'] = $method;
			$method = $pyjs__bind_method2('setHoverFontColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setFontColor'](cssColor);
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setHoverFontColor'] = $method;
			$method = $pyjs__bind_method2('setHoverFontStyle', function(cssStyle) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setFontStyle'](cssStyle);
				return null;
			}
	, 1, [null,null,['self'],['cssStyle']]);
			$cls_definition['setHoverFontStyle'] = $method;
			$method = $pyjs__bind_method2('setHoverFontSize', function(fontSize) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setFontSize'](fontSize);
				return null;
			}
	, 1, [null,null,['self'],['fontSize']]);
			$cls_definition['setHoverFontSize'] = $method;
			$method = $pyjs__bind_method2('setHoverLocation', function(hoverLocation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverLocation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setLocation'](hoverLocation);
				return null;
			}
	, 1, [null,null,['self'],['hoverLocation']]);
			$cls_definition['setHoverLocation'] = $method;
			$method = $pyjs__bind_method2('setHoverAnnotationSymbolType', function(hoverAnnotationSymbolType) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverAnnotationSymbolType = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverAnnotationSymbolType', hoverAnnotationSymbolType) : $p['setattr'](self, 'hoverAnnotationSymbolType', hoverAnnotationSymbolType); 
				return null;
			}
	, 1, [null,null,['self'],['hoverAnnotationSymbolType']]);
			$cls_definition['setHoverAnnotationSymbolType'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionBackgroundColor', function(hoverSelectionBackgroundColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverSelectionBackgroundColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBackgroundColor', hoverSelectionBackgroundColor) : $p['setattr'](self, 'hoverSelectionBackgroundColor', hoverSelectionBackgroundColor); 
				return null;
			}
	, 1, [null,null,['self'],['hoverSelectionBackgroundColor']]);
			$cls_definition['setHoverSelectionBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionBorderColor', function(hoverSelectionBorderColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverSelectionBorderColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderColor', hoverSelectionBorderColor) : $p['setattr'](self, 'hoverSelectionBorderColor', hoverSelectionBorderColor); 
				return null;
			}
	, 1, [null,null,['self'],['hoverSelectionBorderColor']]);
			$cls_definition['setHoverSelectionBorderColor'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionBorderStyle', function(hoverSelectionBorderStyle) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverSelectionBorderStyle = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderStyle', hoverSelectionBorderStyle) : $p['setattr'](self, 'hoverSelectionBorderStyle', hoverSelectionBorderStyle); 
				return null;
			}
	, 1, [null,null,['self'],['hoverSelectionBorderStyle']]);
			$cls_definition['setHoverSelectionBorderStyle'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionBorderWidth', function(borderWidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					borderWidth = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionBorderWidth', borderWidth) : $p['setattr'](self, 'hoverSelectionBorderWidth', borderWidth); 
				return null;
			}
	, 1, [null,null,['self'],['borderWidth']]);
			$cls_definition['setHoverSelectionBorderWidth'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionEnabled', function(hoverSelectionEnabled) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverSelectionEnabled = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionEnabled', hoverSelectionEnabled) : $p['setattr'](self, 'hoverSelectionEnabled', hoverSelectionEnabled); 
				return null;
			}
	, 1, [null,null,['self'],['hoverSelectionEnabled']]);
			$cls_definition['setHoverSelectionEnabled'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionFillSpacing', function(selectionFillSpacing) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					selectionFillSpacing = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionFillSpacing', selectionFillSpacing) : $p['setattr'](self, 'hoverSelectionFillSpacing', selectionFillSpacing); 
				return null;
			}
	, 1, [null,null,['self'],['selectionFillSpacing']]);
			$cls_definition['setHoverSelectionFillSpacing'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionFillThickness', function(selectionFillThickness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					selectionFillThickness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionFillThickness', selectionFillThickness) : $p['setattr'](self, 'hoverSelectionFillThickness', selectionFillThickness); 
				return null;
			}
	, 1, [null,null,['self'],['selectionFillThickness']]);
			$cls_definition['setHoverSelectionFillThickness'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionHeight', function(selectionHeight) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					selectionHeight = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionHeight', selectionHeight) : $p['setattr'](self, 'hoverSelectionHeight', selectionHeight); 
				return null;
			}
	, 1, [null,null,['self'],['selectionHeight']]);
			$cls_definition['setHoverSelectionHeight'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionImageURL', function(imageURL) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					imageURL = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionImageURL', imageURL) : $p['setattr'](self, 'hoverSelectionImageURL', imageURL); 
				return null;
			}
	, 1, [null,null,['self'],['imageURL']]);
			$cls_definition['setHoverSelectionImageURL'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionSymbolType', function(hoverSelectionSymbolType) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverSelectionSymbolType = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionSymbolType', hoverSelectionSymbolType) : $p['setattr'](self, 'hoverSelectionSymbolType', hoverSelectionSymbolType); 
				return null;
			}
	, 1, [null,null,['self'],['hoverSelectionSymbolType']]);
			$cls_definition['setHoverSelectionSymbolType'] = $method;
			$method = $pyjs__bind_method2('setHoverSelectionWidth', function(selectionWidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					selectionWidth = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverSelectionWidth', selectionWidth) : $p['setattr'](self, 'hoverSelectionWidth', selectionWidth); 
				return null;
			}
	, 1, [null,null,['self'],['selectionWidth']]);
			$cls_definition['setHoverSelectionWidth'] = $method;
			$method = $pyjs__bind_method2('setHovertextTemplate', function(hovertextTemplate) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hovertextTemplate = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool21;
				if ((($bool21=!$p['op_eq']($p['getattr'](self, 'hovertextTemplate'), hovertextTemplate)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21.__nonzero__=='function'?
								$bool21.__nonzero__() :
								(typeof $bool21.__len__=='function'?
									($bool21.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hovertextChunks', null) : $p['setattr'](self, 'hovertextChunks', null); 
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hovertextTemplate', hovertextTemplate) : $p['setattr'](self, 'hovertextTemplate', hovertextTemplate); 
				return null;
			}
	, 1, [null,null,['self'],['hovertextTemplate']]);
			$cls_definition['setHovertextTemplate'] = $method;
			$method = $pyjs__bind_method2('setHoverWidget', function(hoverWidget, widthUpperBound, heightUpperBound) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverWidget = arguments[1];
					widthUpperBound = arguments[2];
					heightUpperBound = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[4][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[5][1];
				var $and8,$and9,$bool23,$bool22,$bool24;
				if ((($bool24=((($bool22=$and8=!$p['op_eq'](null, hoverWidget)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool23=$p['isinstance'](hoverWidget, $m['Widget'])) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and8)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('hoverWidget must either be None or a Widget.'));
				}
				self['getHoverAnnotation']()['setWidget'](hoverWidget, widthUpperBound, heightUpperBound);
				return null;
			}
	, 1, [null,null,['self'],['hoverWidget'],['widthUpperBound', $p['getattr']($m['GChartConsts'], 'DEFAULT_WIDGET_WIDTH_UPPERBOUND')],['heightUpperBound', $p['getattr']($m['GChartConsts'], 'DEFAULT_WIDGET_HEIGHT_UPPERBOUND')]]);
			$cls_definition['setHoverWidget'] = $method;
			$method = $pyjs__bind_method2('setHoverXShift', function(xShift) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setXShift'](xShift);
				return null;
			}
	, 1, [null,null,['self'],['xShift']]);
			$cls_definition['setHoverXShift'] = $method;
			$method = $pyjs__bind_method2('setHoverYShift', function(yShift) {
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getHoverAnnotation']()['setYShift'](yShift);
				return null;
			}
	, 1, [null,null,['self'],['yShift']]);
			$cls_definition['setHoverYShift'] = $method;
			$method = $pyjs__bind_method2('setImageURL', function(imageURL) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					imageURL = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('imageURL', imageURL) : $p['setattr'](self, 'imageURL', imageURL); 
				return null;
			}
	, 1, [null,null,['self'],['imageURL']]);
			$cls_definition['setImageURL'] = $method;
			$method = $pyjs__bind_method2('setHeight', function(height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', height) : $p['setattr'](self, 'height', height); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelHeight', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'modelHeight', $p['getattr']($m['Double'], 'NaN')); 
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$method = $pyjs__bind_method2('setModelHeight', function(modelHeight) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					modelHeight = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelHeight', modelHeight) : $p['setattr'](self, 'modelHeight', modelHeight); 
				return null;
			}
	, 1, [null,null,['self'],['modelHeight']]);
			$cls_definition['setModelHeight'] = $method;
			$method = $pyjs__bind_method2('setModelWidth', function(modelWidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					modelWidth = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelWidth', modelWidth) : $p['setattr'](self, 'modelWidth', modelWidth); 
				return null;
			}
	, 1, [null,null,['self'],['modelWidth']]);
			$cls_definition['setModelWidth'] = $method;
			$method = $pyjs__bind_method2('setPieSliceOrientation', function(pieSliceOrientation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pieSliceOrientation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add49,$bool25,$bool27,$bool26,$or1,$or2,$add52,$and10,$and11,$cmp10,$add55,$add50,$add51,$cmp7,$add53,$add54,$add56,idx,$cmp9,$cmp8;
				idx = self['getChart']()['getCurveIndex'](self['getParent']());
				self['getChart']()['invalidateDependentSlices'](idx);
				if ((($bool27=((($bool25=$and10=!$p['op_eq']($p['getattr'](self, 'pieSliceOrientation'), $p['getattr']($m['Double'], 'NaN'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool26=$or1=((($cmp7=$p['getattr'](self, 'pieSliceOrientation'))===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((((($cmp9=$p['getattr'](self, 'pieSliceOrientation'))===($cmp10=$constant_int_1)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1)):$and10)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add55=(typeof ($add53=(typeof ($add51=(typeof ($add49='pieSliceOrientation=')==typeof ($add50=$p['str']($p['getattr'](self, 'pieSliceOrientation'))) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50)))==typeof ($add52='; ') && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)))==typeof ($add54='pieSliceOrientation must be >=0 and < 1, or else ') && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)))==typeof ($add56='equal to Double.NaN.') && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56))));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pieSliceOrientation', pieSliceOrientation) : $p['setattr'](self, 'pieSliceOrientation', pieSliceOrientation); 
				return null;
			}
	, 1, [null,null,['self'],['pieSliceOrientation']]);
			$cls_definition['setPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('setPieSliceSize', function(pieSliceSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pieSliceSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add61,$add60,idx,$add57,$add58,$add59,$add62,$bool29,$bool28;
				idx = self['getChart']()['getCurveIndex'](self['getParent']());
				self['getChart']()['invalidateDependentSlices'](idx);
				if ((($bool29=!(($bool28=$m['GChartUtil']['withinRange'](pieSliceSize, $constant_int_0, $constant_int_1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add61=(typeof ($add59=(typeof ($add57='pieSliceSize=')==typeof ($add58=$p['getattr'](self, 'pieSliceSize')) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58)))==typeof ($add60='; the requirement: ') && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60)))==typeof ($add62='0.0 <= pieSliceSize <= 1.0 must be satisfied.') && (typeof $add61=='number'||typeof $add61=='string')?
						$add61+$add62:
						$p['op_add']($add61,$add62))));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pieSliceSize', pieSliceSize) : $p['setattr'](self, 'pieSliceSize', pieSliceSize); 
				return null;
			}
	, 1, [null,null,['self'],['pieSliceSize']]);
			$cls_definition['setPieSliceSize'] = $method;
			$method = $pyjs__bind_method2('setSymbolType', function(symbolType) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					symbolType = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var idx;
				self['getParent']()['invalidate']();
				idx = self['getChart']()['getCurveIndex'](self['getParent']());
				self['getChart']()['invalidateDependentSlices'](idx);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('symbolType', symbolType) : $p['setattr'](self, 'symbolType', symbolType); 
				idx = self['getChart']()['getCurveIndex'](self['getParent']());
				self['getChart']()['invalidateDependentSlices'](idx);
				return null;
			}
	, 1, [null,null,['self'],['symbolType']]);
			$cls_definition['setSymbolType'] = $method;
			$method = $pyjs__bind_method2('setWidth', function(width) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getParent']()['invalidate']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', width) : $p['setattr'](self, 'width', width); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('modelWidth', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'modelWidth', $p['getattr']($m['Double'], 'NaN')); 
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$method = $pyjs__bind_method2('copy', function(fc) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fc = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool31,$bool32,$bool33,$bool30;
				self['setBackgroundColor'](fc['getBackgroundColor']());
				self['setBaseline'](fc['getBaseline']());
				self['setBorderColor'](fc['getBorderColor']());
				self['setBorderStyle'](fc['getBorderStyle']());
				self['setBorderWidth'](fc['getBorderWidth']());
				self['setFillSpacing'](fc['getFillSpacing']());
				self['setFillThickness'](fc['getFillThickness']());
				self['setHoverFontColor'](fc['getHoverFontColor']());
				self['setHoverFontSize'](fc['getHoverFontSize']());
				self['setHoverFontStyle'](fc['getHoverFontStyle']());
				self['setHoverFontWeight'](fc['getHoverFontWeight']());
				self['setHoverLocation'](fc['getHoverLocation']());
				self['setHoverAnnotationSymbolType'](fc['getHoverAnnotationSymbolType']());
				self['setHoverSelectionBackgroundColor'](fc['getHoverSelectionBackgroundColor']());
				self['setHoverSelectionBorderColor'](fc['getHoverSelectionBorderColor']());
				self['setHoverSelectionBorderStyle'](fc['getHoverSelectionBorderStyle']());
				self['setHoverSelectionBorderWidth'](fc['getHoverSelectionBorderWidth']());
				self['setHovertextTemplate'](fc['getHovertextTemplate']());
				self['setHoverWidget'](fc['getHoverWidget']());
				self['setHoverXShift'](fc['getHoverXShift']());
				self['setHoverYShift'](fc['getHoverYShift']());
				self['setImageURL'](fc['getImageURL']());
				if ((($bool31=!(($bool30=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), fc['getModelHeight']())) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31.__nonzero__=='function'?
								$bool31.__nonzero__() :
								(typeof $bool31.__len__=='function'?
									($bool31.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setModelHeight'](fc['getModelHeight']());
				}
				else {
					self['setHeight'](fc['getHeight']());
				}
				if ((($bool33=!(($bool32=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), fc['getModelWidth']())) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setModelWidth'](fc['getModelWidth']());
				}
				else {
					self['setWidth'](fc['getWidth']());
				}
				self['setPieSliceOrientation'](fc['getPieSliceOrientation']());
				self['setDefaultPieSliceOrientation'](fc['getDefaultPieSliceOrientation']());
				self['setPieSliceSize'](fc['getPieSliceSize']());
				self['setSymbolType'](fc['getSymbolType']());
				return null;
			}
	, 1, [null,null,['self'],['fc']]);
			$cls_definition['copy'] = $method;
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
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool34;
				if ((($bool34=$p['op_is']($p['getattr'](self, 'annotation'), null)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
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
			$method = $pyjs__bind_method2('getHeight', function(pp, onY2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					onY2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pp == 'undefined') pp=arguments.callee.__args__[3][1];
				if (typeof onY2 == 'undefined') onY2=arguments.callee.__args__[4][1];
				var mH,$and12,$and13,$bool36,$bool37,$bool35,result;
				if ((($bool36=((($bool35=$and12=$p['op_is'](pp, null)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_is'](onY2, null):$and12)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'height');
				}
				mH = self['getModelHeight']();
				if ((($bool37=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), mH)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = self['getHeight']();
				}
				else {
					result = pp['dyToPixel'](mH, onY2);
				}
				return result;
			}
	, 1, [null,null,['self'],['pp', null],['onY2', null]]);
			$cls_definition['getHeight'] = $method;
			$method = $pyjs__bind_method2('getWidth', function(pp) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pp == 'undefined') pp=arguments.callee.__args__[3][1];
				var mW,result,$bool38,$bool39;
				if ((($bool38=$p['op_is'](pp, null)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'width');
				}
				mW = self['getModelWidth']();
				if ((($bool39=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), mW)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = self['getWidth']();
				}
				else {
					result = pp['dxToPixel'](mW);
				}
				return result;
			}
	, 1, [null,null,['self'],['pp', null]]);
			$cls_definition['getWidth'] = $method;
			$method = $pyjs__bind_method2('realizeSymbol', function(pp, grp, arp, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 14) $pyjs__exception_func_param(arguments.callee.__name__, 15, 15, arguments.length+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					grp = arguments[2];
					arp = arguments[3];
					annotation = arguments[4];
					onY2 = arguments[5];
					clipPlotArea = arguments[6];
					clipDecoratedChart = arguments[7];
					drawMainSymbol = arguments[8];
					x = arguments[9];
					y = arguments[10];
					prevX = arguments[11];
					prevY = arguments[12];
					nextX = arguments[13];
					nextY = arguments[14];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 15) $pyjs__exception_func_param(arguments.callee.__name__, 15, 15, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da0f9cf55962e6c7ff6fa1f93157e936') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getSymbolType']()['realizeSymbol'](pp, grp, arp, self, annotation, onY2, clipPlotArea, clipDecoratedChart, drawMainSymbol, x, y, prevX, prevY, nextX, nextY);
				return null;
			}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['annotation'],['onY2'],['clipPlotArea'],['clipDecoratedChart'],['drawMainSymbol'],['x'],['y'],['prevX'],['prevY'],['nextX'],['nextY']]);
			$cls_definition['realizeSymbol'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Symbol', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.Symbol */


/* end module: pyjamas.chart.Symbol */


/*
PYJS_DEPS: ['math', 're', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.chart.GChartConsts', 'pyjamas.chart', 'pyjamas.chart.Double', 'pyjamas.chart.SymbolType', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.Annotation.Annotation', 'pyjamas.chart.Annotation', 'pyjamas.chart.HovertextChunk', 'pyjamas.chart.GChartUtil']
*/
