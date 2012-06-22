/* start module: pyjamas.chart.Axis */
$pyjs['loaded_modules']['pyjamas.chart.Axis'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.chart.Axis']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.chart.Axis'];
	if(typeof $pyjs['loaded_modules']['pyjamas.chart'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.chart']['__was_initialized__']) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs['loaded_modules']['pyjamas.chart.Axis'];
	$m['__repr__'] = function() { return '<module: pyjamas.chart.Axis>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Axis';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.chart']['Axis'] = $pyjs['loaded_modules']['pyjamas.chart.Axis'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_0 = new $p['int'](0);
		$m['time'] = $p['___import___']('time', 'pyjamas.chart');
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
		$m['NumberFormat'] = $p['___import___']('pyjamas.chart.NumberFormat', 'pyjamas.chart', null, false);
		$m['DateTimeFormat'] = $p['___import___']('pyjamas.chart.DateTimeFormat', 'pyjamas.chart', null, false);
		$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
		$m['TickLocation'] = $p['___import___']('pyjamas.chart.TickLocation', 'pyjamas.chart', null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
		$m['Annotation'] = $p['___import___']('pyjamas.chart.Annotation', 'pyjamas.chart', null, false);
		$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_COUNT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_COUNT', 'pyjamas.chart', null, false);
		$m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LABEL_FONT_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LABEL_FONTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONTSIZE', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LABEL_FONT_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_STYLE', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LABEL_FONT_WEIGHT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_WEIGHT', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LABEL_FORMAT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FORMAT', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_LENGTH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_LENGTH', 'pyjamas.chart', null, false);
		$m['DEFAULT_TICK_THICKNESS'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TICK_THICKNESS', 'pyjamas.chart', null, false);
		$m['Y2TICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart', null, false);
		$m['Y2GRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['Y2AXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart', null, false);
		$m['YTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart', null, false);
		$m['YGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['YAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart', null, false);
		$m['XTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart', null, false);
		$m['XGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['XAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart', null, false);
		$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart', null, false);
		$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart', null, false);
		$m['Y_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart', null, false);
		$m['Y2_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart', null, false);
		$m['htmlHeight'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart', null, false);
		$m['htmlWidth'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlWidth', 'pyjamas.chart', null, false);
		$m['NUMBER_FORMAT_TYPE'] = $constant_int_0;
		$m['DATE_FORMAT_TYPE'] = $constant_int_1;
		$m['LOG10INVERSE_FORMAT_TYPE'] = $constant_int_2;
		$m['LOG2INVERSE_FORMAT_TYPE'] = $constant_int_3;
		$m['AxisLimits'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Axis';
			$cls_definition['__md5__'] = '1d5efce1eabb197e592b5caa96b9213a';
			$method = $pyjs__bind_method2('__init__', function(min, max) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					min = arguments[1];
					max = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1d5efce1eabb197e592b5caa96b9213a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('min', min) : $p['setattr'](self, 'min', min); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('max', max) : $p['setattr'](self, 'max', max); 
				return null;
			}
	, 1, [null,null,['self'],['min'],['max']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('equals', function(al) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					al = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1d5efce1eabb197e592b5caa96b9213a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$bool1,$and2;
				return ((($bool1=$and1=$p['op_eq']($p['getattr'](al, 'min'), $p['min'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']($p['getattr'](al, 'max'), $p['max']):$and1);
			}
	, 1, [null,null,['self'],['al']]);
			$cls_definition['equals'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AxisLimits', $p['tuple']($bases), $data);
		})();
		$m['Axis'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Axis';
			$cls_definition['__md5__'] = '034f8715ca98a81cd9d0c191be5a1fda';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chart', chart) : $p['setattr'](self, 'chart', chart); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLocation', $p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION')) : $p['setattr'](self, 'tickLocation', $p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numberFormat', $m['NumberFormat']['getFormat']($m['DEFAULT_TICK_LABEL_FORMAT'])) : $p['setattr'](self, 'numberFormat', $m['NumberFormat']['getFormat']($m['DEFAULT_TICK_LABEL_FORMAT'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dateFormat', $m['DateTimeFormat']['getShortDateTimeFormat']()) : $p['setattr'](self, 'dateFormat', $m['DateTimeFormat']['getShortDateTimeFormat']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', $m['NUMBER_FORMAT_TYPE']) : $p['setattr'](self, 'tickLabelFormatType', $m['NUMBER_FORMAT_TYPE']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nCurvesVisibleOnAxis', $constant_int_0) : $p['setattr'](self, 'nCurvesVisibleOnAxis', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentLimits', $m['AxisLimits']($p['getattr']($m['Double'], 'MAX_VALUE'), (typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub1:
					$p['op_usub']($usub1)))) : $p['setattr'](self, 'currentLimits', $m['AxisLimits']($p['getattr']($m['Double'], 'MAX_VALUE'), (typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub1:
					$p['op_usub']($usub1)))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previousLimits', $m['AxisLimits']((typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $p['getattr']($m['Double'], 'MAX_VALUE'))) : $p['setattr'](self, 'previousLimits', $m['AxisLimits']((typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $p['getattr']($m['Double'], 'MAX_VALUE'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisLabel', null) : $p['setattr'](self, 'axisLabel', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisLabelThickness', $m['NAI']) : $p['setattr'](self, 'axisLabelThickness', $m['NAI']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hasGridlines', false) : $p['setattr'](self, 'hasGridlines', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickCount', $m['DEFAULT_TICK_COUNT']) : $p['setattr'](self, 'tickCount', $m['DEFAULT_TICK_COUNT']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisMax', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'axisMax', $p['getattr']($m['Double'], 'NaN')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisMin', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'axisMin', $p['getattr']($m['Double'], 'NaN')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontColor', $m['DEFAULT_TICK_LABEL_FONT_COLOR']) : $p['setattr'](self, 'tickLabelFontColor', $m['DEFAULT_TICK_LABEL_FONT_COLOR']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontSize', $m['DEFAULT_TICK_LABEL_FONTSIZE']) : $p['setattr'](self, 'tickLabelFontSize', $m['DEFAULT_TICK_LABEL_FONTSIZE']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontStyle', $m['DEFAULT_TICK_LABEL_FONT_STYLE']) : $p['setattr'](self, 'tickLabelFontStyle', $m['DEFAULT_TICK_LABEL_FONT_STYLE']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontWeight', $m['DEFAULT_TICK_LABEL_FONT_WEIGHT']) : $p['setattr'](self, 'tickLabelFontWeight', $m['DEFAULT_TICK_LABEL_FONT_WEIGHT']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormat', $m['DEFAULT_TICK_LABEL_FORMAT']) : $p['setattr'](self, 'tickLabelFormat', $m['DEFAULT_TICK_LABEL_FORMAT']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelThickness', $m['NAI']) : $p['setattr'](self, 'tickLabelThickness', $m['NAI']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelPadding', $constant_int_0) : $p['setattr'](self, 'tickLabelPadding', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksPerLabel', $constant_int_1) : $p['setattr'](self, 'ticksPerLabel', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksPerGridline', $constant_int_1) : $p['setattr'](self, 'ticksPerGridline', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLength', $m['DEFAULT_TICK_LENGTH']) : $p['setattr'](self, 'tickLength', $m['DEFAULT_TICK_LENGTH']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickThickness', $m['DEFAULT_TICK_THICKNESS']) : $p['setattr'](self, 'tickThickness', $m['DEFAULT_TICK_THICKNESS']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisVisible', true) : $p['setattr'](self, 'axisVisible', true); 
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getChart', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'chart');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChart'] = $method;
			$method = $pyjs__bind_method2('getSystemCurve', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['chart']['getSystemCurve'](idx);
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['getSystemCurve'] = $method;
			$method = $pyjs__bind_method2('incrementCurves', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nCurvesVisibleOnAxis', (typeof ($add1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'nCurvesVisibleOnAxis', (typeof ($add1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['incrementCurves'] = $method;
			$method = $pyjs__bind_method2('decrementCurves', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$sub1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nCurvesVisibleOnAxis', (typeof ($sub1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'nCurvesVisibleOnAxis', (typeof ($sub1=$p['getattr'](self, 'nCurvesVisibleOnAxis'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['decrementCurves'] = $method;
			$method = $pyjs__bind_method2('addTickAsPoint', function(tickPosition, tickLabel, tickWidget, widthUpperBound, heightUpperBound) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickPosition = arguments[1];
					tickLabel = arguments[2];
					tickWidget = arguments[3];
					widthUpperBound = arguments[4];
					heightUpperBound = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool11,$bool12,$mul8,$mul5,$bool9,$and8,$or4,$bool13,$or1,$or3,$or2,$and3,$and4,$and5,$and6,$and7,$bool2,$bool3,$bool6,$bool7,$bool4,$bool5,$mul7,$mul6,$bool8,$mul4,$mul3,$mul2,$mul1,$cmp4,c,$cmp1,$cmp3,$cmp2,p;
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				if ((($bool2=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					c['addPoint'](tickPosition, (typeof ($mul1=$p['getattr'](self, 'axisPosition'))==typeof ($mul2=$p['getattr']($m['Double'], 'MAX_VALUE')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				}
				else {
					c['addPoint']((typeof ($mul3=$p['getattr'](self, 'axisPosition'))==typeof ($mul4=$p['getattr']($m['Double'], 'MAX_VALUE')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)), tickPosition);
				}
				if ((($bool4=((($bool3=$and3=$p['op_eq'](null, tickLabel)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](null, tickWidget):$and3)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return null;
				}
				p = c['getPoint']();
				if ((($bool5=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					p['setAnnotationLocation'](((($bool7=$or1=((($bool6=$and5=((($cmp1=$p['getattr'](self, 'axisPosition'))===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6['__nonzero__']=='function'?
								$bool6['__nonzero__']() :
								(typeof $bool6['__len__']=='function'?
									($bool6['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr']($m['AnnotationLocation'], 'SOUTH'):$and5)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:$p['getattr']($m['AnnotationLocation'], 'NORTH')));
					if ((($bool8=!$p['op_eq']($p['getattr'](self, 'tickLabelPadding'), $constant_int_0)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						p['setAnnotationYShift']((typeof ($mul5=$p['getattr'](self, 'axisPosition'))==typeof ($mul6=(typeof tickLabelPadding == "undefined"?$m['tickLabelPadding']:tickLabelPadding)) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
					}
				}
				else {
					p['setAnnotationLocation'](((($bool10=$or3=((($bool9=$and7=((($cmp3=$p['getattr'](self, 'axisPosition'))===($cmp4=$constant_int_0)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9['__nonzero__']=='function'?
								$bool9['__nonzero__']() :
								(typeof $bool9['__len__']=='function'?
									($bool9['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr']($m['AnnotationLocation'], 'WEST'):$and7)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:$p['getattr']($m['AnnotationLocation'], 'EAST')));
					if ((($bool11=!$p['op_eq']($p['getattr'](self, 'tickLabelPadding'), $constant_int_0)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						p['setAnnotationXShift']((typeof ($mul7=$p['getattr'](self, 'axisPosition'))==typeof ($mul8=$p['getattr'](self, 'tickLabelPadding')) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
					}
				}
				if ((($bool12=!$p['op_eq'](null, tickLabel)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					p['setAnnotationText'](tickLabel, widthUpperBound, heightUpperBound);
				}
				else if ((($bool13=!$p['op_eq'](null, tickWidget)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					p['setAnnotationWidget'](tickWidget, widthUpperBound, heightUpperBound);
				}
				p['setAnnotationFontSize'](self['getTickLabelFontSize']());
				p['setAnnotationFontStyle'](self['getTickLabelFontStyle']());
				p['setAnnotationFontColor'](self['getTickLabelFontColor']());
				p['setAnnotationFontWeight'](self['getTickLabelFontWeight']());
				return null;
			}
	, 1, [null,null,['self'],['tickPosition'],['tickLabel'],['tickWidget'],['widthUpperBound'],['heightUpperBound']]);
			$cls_definition['addTickAsPoint'] = $method;
			$method = $pyjs__bind_method2('_addTickLabel', function(tickPosition, tickLabel, widthUpperBound, heightUpperBound) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickPosition = arguments[1];
					tickLabel = arguments[2];
					widthUpperBound = arguments[3];
					heightUpperBound = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool14,cTicks;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				if ((($bool14=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'tickCount'))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
					cTicks['clearPoints']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickCount', $m['NAI']) : $p['setattr'](self, 'tickCount', $m['NAI']); 
				}
				self['addTickAsPoint'](tickPosition, tickLabel, null, widthUpperBound, heightUpperBound);
				return null;
			}
	, 1, [null,null,['self'],['tickPosition'],['tickLabel'],['widthUpperBound'],['heightUpperBound']]);
			$cls_definition['_addTickLabel'] = $method;
			$method = $pyjs__bind_method2('addTick', function(tickPosition, tickWidget, widthUpperBound, heightUpperBound) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickPosition = arguments[1];
					tickWidget = arguments[2];
					widthUpperBound = arguments[3];
					heightUpperBound = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tickWidget == 'undefined') tickWidget=arguments['callee']['__args__'][4][1];
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments['callee']['__args__'][5][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments['callee']['__args__'][6][1];
				var $bool18,$and9,$bool19,tiickWidget,$bool15,$bool16,$bool17,$and12,$and10,$and11,$bool21,$bool20,cTicks;
				if ((($bool15=$p['op_is'](tickWidget, null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					tiickWidget = self['formatAsTickLabel'](tickPosition);
				}
				if ((($bool16=$p['isinstance'](tickWidget, $p['basestring'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					if ((($bool18=((($bool17=$and9=$p['op_is'](widthUpperBound, null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_is'](heightUpperBound, null):$and9)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						widthUpperBound = $m['NAI'];
						heightUpperBound = $m['NAI'];
					}
					self['_addTickLabel'](tickPosition, tickWidget, widthUpperBound, heightUpperBound);
					return null;
				}
				if ((($bool20=((($bool19=$and11=$p['op_is'](widthUpperBound, null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_is'](heightUpperBound, null):$and11)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					widthUpperBound = $m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'];
					heightUpperBound = $m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'];
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				if ((($bool21=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'tickCount'))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
					cTicks['clearPoints']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickCount', $m['NAI']) : $p['setattr'](self, 'tickCount', $m['NAI']); 
				}
				self['addTickAsPoint'](tickPosition, null, tickWidget, widthUpperBound, heightUpperBound);
				return null;
			}
	, 1, [null,null,['self'],['tickPosition'],['tickWidget', null],['widthUpperBound', null],['heightUpperBound', null]]);
			$cls_definition['addTick'] = $method;
			$method = $pyjs__bind_method2('clearTicks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickCount', $m['NAI']) : $p['setattr'](self, 'tickCount', $m['NAI']); 
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				c['clearPoints']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearTicks'] = $method;
			$method = $pyjs__bind_method2('clientToModel', function(clientCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					clientCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['clientCoordinate']]);
			$cls_definition['clientToModel'] = $method;
			$method = $pyjs__bind_method2('formatAsTickLabel', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var transDate,$bool24,result,$bool23,$bool22;
				result = null;
				if ((($bool22=$p['op_eq']($p['getattr'](self, 'tickLabelFormatType'), $m['DATE_FORMAT_TYPE'])) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					transDate = $m['time']['gmtime'](value);
					result = self['dateFormat']['format'](transDate);
				}
				else if ((($bool23=$p['op_eq']($p['getattr'](self, 'tickLabelFormatType'), $m['LOG10INVERSE_FORMAT_TYPE'])) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					value = $p['pow'](10.0, value);
					result = self['numberFormat']['format'](value);
				}
				else if ((($bool24=$p['op_eq']($p['getattr'](self, 'tickLabelFormatType'), $m['LOG2INVERSE_FORMAT_TYPE'])) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					value = $p['pow'](2.0, value);
					result = self['numberFormat']['format'](value);
				}
				else {
					result = self['numberFormat']['format'](value);
				}
				return result;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['formatAsTickLabel'] = $method;
			$method = $pyjs__bind_method2('formatNumberAsTickLabel', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['formatAsTickLabel'](value);
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['formatNumberAsTickLabel'] = $method;
			$method = $pyjs__bind_method2('getAxisLabel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'axisLabel');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisLabel'] = $method;
			$method = $pyjs__bind_method2('getAxisLabelThickness', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and14,text,result,$bool25,$bool27,$bool26,$bool29,$bool28,$mul20,$or5,charWidth,$or6,$add5,$and13,$mul9,DEF_CHARWIDTH,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,EXTRA_CHARWIDTH,$mul19,$mul18,$add3,$bool30,$add6,$add7,$add4,$len1,$add8;
				result = $constant_int_0;
				EXTRA_CHARWIDTH = $constant_int_2;
				DEF_CHARWIDTH = $constant_int_1;
				if ((($bool25=$p['op_eq'](null, self['getAxisLabel']())) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $constant_int_0;
				}
				else if ((($bool26=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'axisLabelThickness'))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'axisLabelThickness');
				}
				else if ((($bool27=$p['hasattr'](self['getAxisLabel'](), 'getHTML')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					charWidth = $m['htmlWidth'](self['getAxisLabel']()['getHTML']());
					result = $p['int']($p['round']((typeof ($mul11=(typeof ($mul9=(typeof ($add3=charWidth)==typeof ($add4=EXTRA_CHARWIDTH) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)))==typeof ($mul10=self['getTickLabelFontSize']()) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))==typeof ($mul12=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))));
				}
				else if ((($bool28=$p['hasattr'](self['getAxisLabel'](), 'getText')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					text = self['getAxisLabel']()['getText']();
					result = $p['int']($p['round']((typeof ($mul15=(typeof ($mul13=(typeof ($add5=EXTRA_CHARWIDTH)==typeof ($add6=((($bool30=$or5=((($bool29=$and13=text) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($len1=text) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))):$and13)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:$constant_int_0)) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($mul14=self['getTickLabelFontSize']()) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)))==typeof ($mul16=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16))));
				}
				else {
					result = $p['int']($p['round']((typeof ($mul19=(typeof ($mul17=(typeof ($add7=DEF_CHARWIDTH)==typeof ($add8=EXTRA_CHARWIDTH) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($mul18=self['getTickLabelFontSize']()) && typeof $mul17=='number'?
						$mul17*$mul18:
						$p['op_mul']($mul17,$mul18)))==typeof ($mul20=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisLabelThickness'] = $method;
			$method = $pyjs__bind_method2('getAxisMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool32,$bool33,$bool31;
				if ((($bool32=!(($bool31=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), $p['getattr'](self, 'axisMax'))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31['__nonzero__']=='function'?
							$bool31['__nonzero__']() :
							(typeof $bool31['__len__']=='function'?
								($bool31['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'axisMax');
				}
				else if ((($bool33=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'tickCount'))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['getDataMax']();
				}
				else {
					return $p['max'](self['getDataMax'](), self['getTickMax']());
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisMax'] = $method;
			$method = $pyjs__bind_method2('getAxisMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool36,$bool34,$bool35;
				if ((($bool35=!(($bool34=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), $p['getattr'](self, 'axisMin'))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34['__nonzero__']=='function'?
							$bool34['__nonzero__']() :
							(typeof $bool34['__len__']=='function'?
								($bool34['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'axisMin');
				}
				else if ((($bool36=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'tickCount'))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['getDataMin']();
				}
				else {
					return $p['min'](self['getDataMin'](), self['getTickMin']());
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisMin'] = $method;
			$method = $pyjs__bind_method2('getAxisVisible', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'axisVisible');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisVisible'] = $method;
			$method = $pyjs__bind_method2('getDataMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMax'] = $method;
			$method = $pyjs__bind_method2('getDataMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMin'] = $method;
			$method = $pyjs__bind_method2('getHasGridlines', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return (typeof hasGridlines == "undefined"?$m['hasGridlines']:hasGridlines);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHasGridlines'] = $method;
			$method = $pyjs__bind_method2('getMouseCoordinate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMouseCoordinate'] = $method;
			$method = $pyjs__bind_method2('getNCurvesVisibleOnAxis', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'nCurvesVisibleOnAxis');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNCurvesVisibleOnAxis'] = $method;
			$method = $pyjs__bind_method2('getTickCount', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result,$bool37;
				result = $p['getattr'](self, 'tickCount');
				if ((($bool37=$p['op_eq']($m['NAI'], $p['getattr'](self, 'tickCount'))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37['__nonzero__']=='function'?
								$bool37['__nonzero__']() :
								(typeof $bool37['__len__']=='function'?
									($bool37['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
					result = c['getNPoints']();
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickCount'] = $method;
			$method = $pyjs__bind_method2('getTickLabelFontWeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelFontWeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelFontWeight'] = $method;
			$method = $pyjs__bind_method2('getTickLabelFontColor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelFontColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelFontColor'] = $method;
			$method = $pyjs__bind_method2('getTickLabelFontStyle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelFontStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelFontStyle'] = $method;
			$method = $pyjs__bind_method2('getTickLabelFontSize', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelFontSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelFontSize'] = $method;
			$method = $pyjs__bind_method2('getTickLabelFormat', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelFormat');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelFormat'] = $method;
			$method = $pyjs__bind_method2('getTickLabelPadding', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLabelPadding');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLabelPadding'] = $method;
			$method = $pyjs__bind_method2('getTickLabelThickness', function(needsPopulation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					needsPopulation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof needsPopulation == 'undefined') needsPopulation=arguments['callee']['__args__'][3][1];
				var c,$mul24,$iter1_nextval,$iter1_type,$iter1_idx,i,$mul22,$bool40,$iter1_iter,$mul23,tt,result,maxLength,$bool38,$bool39,$mul21,nTicks,$iter1_array;
				maxLength = $constant_int_0;
				if ((($bool38=!$p['op_eq']($p['getattr'](self, 'tickLabelThickness'), $m['NAI'])) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'tickLabelThickness');
				}
				else {
					if ((($bool39=needsPopulation) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
							false :
							(typeof $bool39=='object'?
								(typeof $bool39['__nonzero__']=='function'?
									$bool39['__nonzero__']() :
									(typeof $bool39['__len__']=='function'?
										($bool39['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['maybePopulateTicks']();
					}
					c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
					nTicks = c['getNPoints']();
					$iter1_iter = $p['range'](nTicks);
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						tt = c['getPoint'](i)['getAnnotationText']();
						if ((($bool40=!$p['op_eq'](null, tt)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
								false :
								(typeof $bool40=='object'?
									(typeof $bool40['__nonzero__']=='function'?
										$bool40['__nonzero__']() :
										(typeof $bool40['__len__']=='function'?
											($bool40['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							maxLength = $p['max'](maxLength, $m['Annotation']['getNumberOfCharsWide'](tt));
						}
					}
					result = $p['int']($p['round']((typeof ($mul23=(typeof ($mul21=maxLength)==typeof ($mul22=$p['getattr'](self, 'tickLabelFontSize')) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22)))==typeof ($mul24=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul23=='number'?
						$mul23*$mul24:
						$p['op_mul']($mul23,$mul24))));
				}
				return result;
			}
	, 1, [null,null,['self'],['needsPopulation', true]]);
			$cls_definition['getTickLabelThickness'] = $method;
			$method = $pyjs__bind_method2('getTicksPerGridline', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'ticksPerGridline');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTicksPerGridline'] = $method;
			$method = $pyjs__bind_method2('getTicksPerLabel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'ticksPerLabel');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTicksPerLabel'] = $method;
			$method = $pyjs__bind_method2('getTickLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLength');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLength'] = $method;
			$method = $pyjs__bind_method2('getActualTickLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp6,$bool43,$bool42,$bool41,$mod2,$mod1,result,$and15,$and16,$add9,$add10,$and17;
				result = $p['getattr'](self, 'tickLength');
				if ((($bool43=((($bool41=$and15=$p['op_eq']($p['getattr']($m['TickLocation'], 'CENTERED'), $p['getattr'](self, 'tickLocation'))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41['__nonzero__']=='function'?
							$bool41['__nonzero__']() :
							(typeof $bool41['__len__']=='function'?
								($bool41['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool42=$and16=$p['op_eq']($constant_int_0, (typeof ($mod1=$p['getattr'](self, 'tickLength'))==typeof ($mod2=$constant_int_2) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp5=$p['getattr'](self, 'tickLength'))===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1):$and16):$and15)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43['__nonzero__']=='function'?
								$bool43['__nonzero__']() :
								(typeof $bool43['__len__']=='function'?
									($bool43['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add9=result)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getActualTickLength'] = $method;
			$method = $pyjs__bind_method2('getTickLocation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'tickLocation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickLocation'] = $method;
			$method = $pyjs__bind_method2('getTickSpace', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool45,$bool44,$add11,$add12,$div2,$div1,result;
				if ((($bool44=$p['op_eq']($p['getattr']($m['TickLocation'], 'CENTERED'), $p['getattr'](self, 'tickLocation'))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($div1=(typeof ($add11=$p['getattr'](self, 'tickLength'))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
				}
				else if ((($bool45=$p['op_eq']($p['getattr']($m['TickLocation'], 'OUTSIDE'), $p['getattr'](self, 'tickLocation'))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45['__nonzero__']=='function'?
								$bool45['__nonzero__']() :
								(typeof $bool45['__len__']=='function'?
									($bool45['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'tickLength');
				}
				else {
					result = $constant_int_0;
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickSpace'] = $method;
			$method = $pyjs__bind_method2('getTickThickness', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return (typeof tickThickness == "undefined"?$m['tickThickness']:tickThickness);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickThickness'] = $method;
			$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToClient'] = $method;
			$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPixel'] = $method;
			$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPlotAreaPixel'] = $method;
			$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['pixelToModel'] = $method;
			$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['plotAreaPixelToModel'] = $method;
			$method = $pyjs__bind_method2('setAxisLabel', function(axisLabel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					axisLabel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool46;
				if ((($bool46=$p['isinstance'](axisLabel, $p['basestring'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					axisLabel = $m['HTML'](axisLabel);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisLabel', axisLabel) : $p['setattr'](self, 'axisLabel', axisLabel); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				return null;
			}
	, 1, [null,null,['self'],['axisLabel']]);
			$cls_definition['setAxisLabel'] = $method;
			$method = $pyjs__bind_method2('setAxisLabelThickness', function(thickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					thickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var axisLabelThickness;
				axisLabelThickness = thickness;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				return null;
			}
	, 1, [null,null,['self'],['thickness']]);
			$cls_definition['setAxisLabelThickness'] = $method;
			$method = $pyjs__bind_method2('setAxisMax', function(max) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					max = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisMax', max) : $p['setattr'](self, 'axisMax', max); 
				return null;
			}
	, 1, [null,null,['self'],['max']]);
			$cls_definition['setAxisMax'] = $method;
			$method = $pyjs__bind_method2('setAxisMin', function(min) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					min = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisMin', min) : $p['setattr'](self, 'axisMin', min); 
				return null;
			}
	, 1, [null,null,['self'],['min']]);
			$cls_definition['setAxisMin'] = $method;
			$method = $pyjs__bind_method2('setAxisVisible', function(axisVisible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					axisVisible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisVisible', axisVisible) : $p['setattr'](self, 'axisVisible', axisVisible); 
				return null;
			}
	, 1, [null,null,['self'],['axisVisible']]);
			$cls_definition['setAxisVisible'] = $method;
			$method = $pyjs__bind_method2('setHasGridlines', function(hasGridlines) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					hasGridlines = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hasGridlines', hasGridlines) : $p['setattr'](self, 'hasGridlines', hasGridlines); 
				return null;
			}
	, 1, [null,null,['self'],['hasGridlines']]);
			$cls_definition['setHasGridlines'] = $method;
			$method = $pyjs__bind_method2('setTickCount', function(tickCount) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickCount = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['clearPoints']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickCount', tickCount) : $p['setattr'](self, 'tickCount', tickCount); 
				return null;
			}
	, 1, [null,null,['self'],['tickCount']]);
			$cls_definition['setTickCount'] = $method;
			$method = $pyjs__bind_method2('setTickLabelFontWeight', function(cssWeight) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cssWeight = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter2_nextval,$iter2_type,$iter2_iter,i,nPoints,$iter2_idx,$iter2_array;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nPoints = c['getNPoints']();
				$iter2_iter = $p['range'](nPoints);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					c['getPoint'](i)['setAnnotationFontWeight'](cssWeight);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontWeight', cssWeight) : $p['setattr'](self, 'tickLabelFontWeight', cssWeight); 
				return null;
			}
	, 1, [null,null,['self'],['cssWeight']]);
			$cls_definition['setTickLabelFontWeight'] = $method;
			$method = $pyjs__bind_method2('setTickLabelFontColor', function(cssColor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cssColor = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter3_idx,i,$iter3_array,$iter3_iter,$iter3_type,nPoints,$iter3_nextval;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nPoints = c['getNPoints']();
				$iter3_iter = $p['range'](nPoints);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					c['getPoint'](i)['setAnnotationFontColor'](cssColor);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontColor', cssColor) : $p['setattr'](self, 'tickLabelFontColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setTickLabelFontColor'] = $method;
			$method = $pyjs__bind_method2('setTickLabelFontStyle', function(cssStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cssStyle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_idx,c,i,$iter4_nextval,$iter4_array,$iter4_type,nPoints,$iter4_iter;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nPoints = c['getNPoints']();
				$iter4_iter = $p['range'](nPoints);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					c['getPoint'](i)['setAnnotationFontStyle'](cssStyle);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontStyle', cssStyle) : $p['setattr'](self, 'tickLabelFontStyle', cssStyle); 
				return null;
			}
	, 1, [null,null,['self'],['cssStyle']]);
			$cls_definition['setTickLabelFontStyle'] = $method;
			$method = $pyjs__bind_method2('setTickLabelFontSize', function(tickLabelFontSize) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLabelFontSize = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,c,i,$iter5_array,$iter5_iter,$iter5_idx,nPoints,$iter5_type;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nPoints = c['getNPoints']();
				$iter5_iter = $p['range'](nPoints);
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					c['getPoint'](i)['setAnnotationFontSize'](tickLabelFontSize);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFontSize', tickLabelFontSize) : $p['setattr'](self, 'tickLabelFontSize', tickLabelFontSize); 
				return null;
			}
	, 1, [null,null,['self'],['tickLabelFontSize']]);
			$cls_definition['setTickLabelFontSize'] = $method;
			$method = $pyjs__bind_method2('setTickLabelFormat', function(format) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					format = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool47,$bool50,$bool51,$bool49,$bool48,$len4,$len2,$len3,transFormat;
				if ((($bool47=$p['op_eq']($p['getattr'](self, 'tickLabelFormat'), format)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				if ((($bool48=format['startswith']('=(Date)')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48['__nonzero__']=='function'?
								$bool48['__nonzero__']() :
								(typeof $bool48['__len__']=='function'?
									($bool48['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					transFormat = $p['__getslice'](format, (($len2='=(Date)') === null?$constant_int_0:
						(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
									$p['len']($len2))))), null);
					if ((($bool49=transFormat['equals']('')) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
							false :
							(typeof $bool49=='object'?
								(typeof $bool49['__nonzero__']=='function'?
									$bool49['__nonzero__']() :
									(typeof $bool49['__len__']=='function'?
										($bool49['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dateFormat', $m['DateTimeFormat']['getShortDateTimeFormat']()) : $p['setattr'](self, 'dateFormat', $m['DateTimeFormat']['getShortDateTimeFormat']()); 
					}
					else {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dateFormat', $m['DateTimeFormat']['getFormat'](transFormat)) : $p['setattr'](self, 'dateFormat', $m['DateTimeFormat']['getFormat'](transFormat)); 
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', $m['DATE_FORMAT_TYPE']) : $p['setattr'](self, 'tickLabelFormatType', $m['DATE_FORMAT_TYPE']); 
				}
				else if ((($bool50=format['startswith']('=10^')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					transFormat = $p['__getslice'](format, (($len3='=10^') === null?$constant_int_0:
						(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
									$p['len']($len3))))), null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numberFormat', $m['NumberFormat']['getFormat'](transFormat)) : $p['setattr'](self, 'numberFormat', $m['NumberFormat']['getFormat'](transFormat)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', $m['LOG10INVERSE_FORMAT_TYPE']) : $p['setattr'](self, 'tickLabelFormatType', $m['LOG10INVERSE_FORMAT_TYPE']); 
				}
				else if ((($bool51=format['startswith']('=2^')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					transFormat = $p['__getslice'](format, (($len4='=2^') === null?$constant_int_0:
						(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
							(typeof $len4['__len__'] == 'function'?$len4['__len__']():
								(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
									$p['len']($len4))))), null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numberFormat', $m['NumberFormat']['getFormat'](transFormat)) : $p['setattr'](self, 'numberFormat', $m['NumberFormat']['getFormat'](transFormat)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', $m['LOG2INVERSE_FORMAT_TYPE']) : $p['setattr'](self, 'tickLabelFormatType', $m['LOG2INVERSE_FORMAT_TYPE']); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numberFormat', $m['NumberFormat']['getFormat'](format)) : $p['setattr'](self, 'numberFormat', $m['NumberFormat']['getFormat'](format)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', $m['NUMBER_FORMAT_TYPE']) : $p['setattr'](self, 'tickLabelFormatType', $m['NUMBER_FORMAT_TYPE']); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormat', format) : $p['setattr'](self, 'tickLabelFormat', format); 
				return null;
			}
	, 1, [null,null,['self'],['format']]);
			$cls_definition['setTickLabelFormat'] = $method;
			$method = $pyjs__bind_method2('setTickLabelPadding', function(tickLabelPadding) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLabelPadding = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelPadding', tickLabelPadding) : $p['setattr'](self, 'tickLabelPadding', tickLabelPadding); 
				return null;
			}
	, 1, [null,null,['self'],['tickLabelPadding']]);
			$cls_definition['setTickLabelPadding'] = $method;
			$method = $pyjs__bind_method2('setTickLabelThickness', function(tickLabelThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLabelThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelThickness', tickLabelThickness) : $p['setattr'](self, 'tickLabelThickness', tickLabelThickness); 
				return null;
			}
	, 1, [null,null,['self'],['tickLabelThickness']]);
			$cls_definition['setTickLabelThickness'] = $method;
			$method = $pyjs__bind_method2('setTicksPerGridline', function(ticksPerGridline) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ticksPerGridline = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp7,$bool52,$cmp8,$add14,$add15,$add16,$add13;
				if ((($bool52=((($cmp7=ticksPerGridline)===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52['__nonzero__']=='function'?
								$bool52['__nonzero__']() :
								(typeof $bool52['__len__']=='function'?
									($bool52['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)((typeof ($add15=(typeof ($add13='ticksPerGridline=')==typeof ($add14=ticksPerGridline) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($add16='; ticksPerGridline must be > 0') && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksPerGridline', ticksPerGridline) : $p['setattr'](self, 'ticksPerGridline', ticksPerGridline); 
				return null;
			}
	, 1, [null,null,['self'],['ticksPerGridline']]);
			$cls_definition['setTicksPerGridline'] = $method;
			$method = $pyjs__bind_method2('setTicksPerLabel', function(ticksPerLabel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ticksPerLabel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool53,$add20,$cmp9,$add17,$cmp10,$add18,$add19;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				if ((($bool53=((($cmp9=ticksPerLabel)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53['__nonzero__']=='function'?
								$bool53['__nonzero__']() :
								(typeof $bool53['__len__']=='function'?
									($bool53['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)((typeof ($add19=(typeof ($add17='ticksPerLabel=')==typeof ($add18=ticksPerLabel) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))==typeof ($add20='; ticksPerLabel must be > 0') && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksPerLabel', ticksPerLabel) : $p['setattr'](self, 'ticksPerLabel', ticksPerLabel); 
				return null;
			}
	, 1, [null,null,['self'],['ticksPerLabel']]);
			$cls_definition['setTicksPerLabel'] = $method;
			$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLength = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['tickLength']]);
			$cls_definition['setTickLength'] = $method;
			$method = $pyjs__bind_method2('setTickLocation', function(tickLocation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLocation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool54,sym;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLocation', tickLocation) : $p['setattr'](self, 'tickLocation', tickLocation); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				sym = self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']();
				if ((($bool54=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					sym['setSymbolType'](tickLocation['getXAxisSymbolType']($p['getattr'](self, 'axisPosition')));
					sym['setHeight'](self['getActualTickLength']());
				}
				else {
					sym['setSymbolType'](tickLocation['getYAxisSymbolType']($p['getattr'](self, 'axisPosition')));
					sym['setWidth'](self['getActualTickLength']());
				}
				return null;
			}
	, 1, [null,null,['self'],['tickLocation']]);
			$cls_definition['setTickLocation'] = $method;
			$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['tickThickness']]);
			$cls_definition['setTickThickness'] = $method;
			$method = $pyjs__bind_method2('maybePopulateTicks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool55;
				if ((($bool55=!$p['op_eq']($p['getattr'](self, 'tickCount'), $m['NAI'])) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55['__nonzero__']=='function'?
								$bool55['__nonzero__']() :
								(typeof $bool55['__len__']=='function'?
									($bool55['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['populateTicks']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['maybePopulateTicks'] = $method;
			$method = $pyjs__bind_method2('populateTicks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool56,$bool57,$iter6_type,$bool58,$bool59,$mod4,$mod3,$iter6_iter,$iter6_nextval,$add21,$add22,$sub8,$mul28,$sub3,$mul27,$mul25,$sub7,$sub6,$sub5,$sub4,$bool61,$bool60,$or7,$iter6_idx,$or9,$or8,$mul26,$iter6_array,$cmp11,$cmp12,$div3,$and18,$and19,$div4,i,l,$or11,$or10,position;
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['clearPoints']();
				if ((($bool58=((($bool56=$or7=$p['op_eq']($m['XTICKS_ID'], $p['getattr'](self, 'ticksId'))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56['__nonzero__']=='function'?
							$bool56['__nonzero__']() :
							(typeof $bool56['__len__']=='function'?
								($bool56['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:((($bool57=$or8=$p['op_eq']($m['YTICKS_ID'], $p['getattr'](self, 'ticksId'))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57['__nonzero__']=='function'?
							$bool57['__nonzero__']() :
							(typeof $bool57['__len__']=='function'?
								($bool57['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:((($cmp11=$constant_int_0)===($cmp12=self['getNCurvesVisibleOnAxis']())?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58['__nonzero__']=='function'?
								$bool58['__nonzero__']() :
								(typeof $bool58['__len__']=='function'?
									($bool58['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					l = self['getAxisLimits']();
					$iter6_iter = $p['range']($p['getattr'](self, 'tickCount'));
					if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter['__iter__']();
						$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						if ((($bool59=$p['op_eq']($p['getattr'](self, 'tickCount'), $constant_int_1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
								false :
								(typeof $bool59=='object'?
									(typeof $bool59['__nonzero__']=='function'?
										$bool59['__nonzero__']() :
										(typeof $bool59['__len__']=='function'?
											($bool59['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							position = $p['getattr'](l, 'max');
						}
						else {
							position = (typeof ($div3=(typeof ($add21=(typeof ($mul25=$p['getattr'](l, 'min'))==typeof ($mul26=(typeof ($sub5=(typeof ($sub3=$p['getattr'](self, 'tickCount'))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
								$sub3-$sub4:
								$p['op_sub']($sub3,$sub4)))==typeof ($sub6=i) && (typeof $sub5=='number'||typeof $sub5=='string')?
								$sub5-$sub6:
								$p['op_sub']($sub5,$sub6))) && typeof $mul25=='number'?
								$mul25*$mul26:
								$p['op_mul']($mul25,$mul26)))==typeof ($add22=(typeof ($mul27=i)==typeof ($mul28=$p['getattr'](l, 'max')) && typeof $mul27=='number'?
								$mul27*$mul28:
								$p['op_mul']($mul27,$mul28))) && (typeof $add21=='number'||typeof $add21=='string')?
								$add21+$add22:
								$p['op_add']($add21,$add22)))==typeof ($div4=(typeof ($sub7=$p['getattr'](self, 'tickCount'))==typeof ($sub8=1.0) && (typeof $sub7=='number'||typeof $sub7=='string')?
								$sub7-$sub8:
								$p['op_sub']($sub7,$sub8))) && typeof $div3=='number' && $div4 !== 0?
								$div3/$div4:
								$p['op_div']($div3,$div4));
						}
						self['addTickAsPoint'](position, ((($bool61=$or10=((($bool60=$and18=$p['op_eq']($constant_int_0, (typeof ($mod3=i)==typeof ($mod4=$p['getattr'](self, 'ticksPerLabel')) && typeof $mod3=='number'?
							(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
							$p['op_mod']($mod3,$mod4)))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60['__nonzero__']=='function'?
									$bool60['__nonzero__']() :
									(typeof $bool60['__len__']=='function'?
										($bool60['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?self['formatAsTickLabel'](position):$and18)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
							false :
							(typeof $bool61=='object'?
								(typeof $bool61['__nonzero__']=='function'?
									$bool61['__nonzero__']() :
									(typeof $bool61['__len__']=='function'?
										($bool61['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or10:null), null, $m['NAI'], $m['NAI']);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['populateTicks'] = $method;
			$method = $pyjs__bind_method2('populateGridlines', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool63,iTick,$and20,$iter7_nextval,$iter7_iter,$iter7_array,cGridlines,$mod5,p,$bool62,$mod6,cTicks,$iter7_idx,nTicks,$iter7_type,$and21;
				cTicks = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				cGridlines = self['getSystemCurve']($p['getattr'](self, 'gridlinesId'));
				cGridlines['clearPoints']();
				nTicks = cTicks['getNPoints']();
				$iter7_iter = $p['range'](nTicks);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					iTick = $iter7_nextval;
					if ((($bool63=((($bool62=$and20=$p['getattr'](self, 'hasGridlines')) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']((typeof ($mod5=iTick)==typeof ($mod6=$p['getattr'](self, 'ticksPerGridline')) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)), $constant_int_0):$and20)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
							false :
							(typeof $bool63=='object'?
								(typeof $bool63['__nonzero__']=='function'?
									$bool63['__nonzero__']() :
									(typeof $bool63['__len__']=='function'?
										($bool63['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						p = cTicks['getPoint'](iTick);
						cGridlines['addPoint'](p['getX'](), p['getY']());
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['populateGridlines'] = $method;
			$method = $pyjs__bind_method2('_getAxisLimits', function(result) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					result = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool72,$bool70,$bool71,DEFAULT_AXIS_RANGE,$and23,$and22,$and27,$and26,$and25,$and24,$add28,min,$add25,$add24,$add27,$add26,$sub9,max,$bool65,$bool64,$bool67,$bool66,$bool69,$bool68,$sub11,$sub10,$sub12,$add23;
				DEFAULT_AXIS_RANGE = (typeof ($sub9=$m['DEFAULT_TICK_COUNT'])==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				min = self['getAxisMin']();
				max = self['getAxisMax']();
				if ((($bool65=((($bool64=$and22=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), min)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
					false :
					(typeof $bool64=='object'?
						(typeof $bool64['__nonzero__']=='function'?
							$bool64['__nonzero__']() :
							(typeof $bool64['__len__']=='function'?
								($bool64['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']($p['getattr']($m['Double'], 'NaN'), max):$and22)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					min = $constant_int_0;
					max = (typeof ($add23=min)==typeof ($add24=DEFAULT_AXIS_RANGE) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				else if ((($bool68=((($bool66=$and24=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), min)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
					false :
					(typeof $bool66=='object'?
						(typeof $bool66['__nonzero__']=='function'?
							$bool66['__nonzero__']() :
							(typeof $bool66['__len__']=='function'?
								($bool66['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool67=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), max)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
					false :
					(typeof $bool67=='object'?
						(typeof $bool67['__nonzero__']=='function'?
							$bool67['__nonzero__']() :
							(typeof $bool67['__len__']=='function'?
								($bool67['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and24)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68['__nonzero__']=='function'?
								$bool68['__nonzero__']() :
								(typeof $bool68['__len__']=='function'?
									($bool68['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					min = (typeof ($sub11=max)==typeof ($sub12=DEFAULT_AXIS_RANGE) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
				}
				else if ((($bool71=((($bool70=$and26=!(($bool69=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), min)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69['__nonzero__']=='function'?
							$bool69['__nonzero__']() :
							(typeof $bool69['__len__']=='function'?
								($bool69['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70['__nonzero__']=='function'?
							$bool70['__nonzero__']() :
							(typeof $bool70['__len__']=='function'?
								($bool70['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']($p['getattr']($m['Double'], 'NaN'), max):$and26)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71['__nonzero__']=='function'?
								$bool71['__nonzero__']() :
								(typeof $bool71['__len__']=='function'?
									($bool71['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					max = (typeof ($add25=min)==typeof ($add26=DEFAULT_AXIS_RANGE) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
				}
				else if ((($bool72=$p['op_eq'](min, max)) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72['__nonzero__']=='function'?
								$bool72['__nonzero__']() :
								(typeof $bool72['__len__']=='function'?
									($bool72['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					max = (typeof ($add27=min)==typeof ($add28=DEFAULT_AXIS_RANGE) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
				}
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('min', min) : $p['setattr'](result, 'min', min); 
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('max', max) : $p['setattr'](result, 'max', max); 
				return null;
			}
	, 1, [null,null,['self'],['result']]);
			$cls_definition['_getAxisLimits'] = $method;
			$method = $pyjs__bind_method2('getAxisLimits', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_getAxisLimits']($p['getattr'](self, 'currentLimits'));
				return $p['getattr'](self, 'currentLimits');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisLimits'] = $method;
			$method = $pyjs__bind_method2('rememberLimits', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_getAxisLimits']($p['getattr'](self, 'previousLimits'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rememberLimits'] = $method;
			$method = $pyjs__bind_method2('limitsChanged', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool73;
				return !(($bool73=self['getAxisLimits']()['equals']($p['getattr'](self, 'previousLimits'))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
					false :
					(typeof $bool73=='object'?
						(typeof $bool73['__nonzero__']=='function'?
							$bool73['__nonzero__']() :
							(typeof $bool73['__len__']=='function'?
								($bool73['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			}
	, 1, [null,null,['self']]);
			$cls_definition['limitsChanged'] = $method;
			$method = $pyjs__bind_method2('getTickPosition', function(c, iTick) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					c = arguments[1];
					iTick = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool74,result;
				if ((($bool74=$p['getattr'](self, 'isHorizontalAxis')) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
						false :
						(typeof $bool74=='object'?
							(typeof $bool74['__nonzero__']=='function'?
								$bool74['__nonzero__']() :
								(typeof $bool74['__len__']=='function'?
									($bool74['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = c['getPoint'](iTick)['getX']();
				}
				else {
					result = c['getPoint'](iTick)['getY']();
				}
				return result;
			}
	, 1, [null,null,['self'],['c'],['iTick']]);
			$cls_definition['getTickPosition'] = $method;
			$method = $pyjs__bind_method2('getTickMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter8_idx,i,$iter8_array,$iter8_iter,result,nTicks,$iter8_type,$iter8_nextval;
				result = (typeof ($usub3=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub3:
					$p['op_usub']($usub3));
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nTicks = c['getNPoints']();
				$iter8_iter = $p['range'](nTicks);
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					result = $p['max'](result, self['getTickPosition'](c, i));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickMax'] = $method;
			$method = $pyjs__bind_method2('getTickMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter9_iter,i,$iter9_nextval,$iter9_idx,$iter9_array,result,nTicks,$iter9_type;
				result = $p['getattr']($m['Double'], 'MAX_VALUE');
				c = self['getSystemCurve']($p['getattr'](self, 'ticksId'));
				nTicks = c['getNPoints']();
				$iter9_iter = $p['range'](nTicks);
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					result = $p['min'](result, self['getTickPosition'](c, i));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTickMin'] = $method;
			$method = $pyjs__bind_method2('maxIgnoreNaNAndMaxValue', function(x1, x2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x1 = arguments[1];
					x2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool80,$bool78,$bool79,$bool76,$bool77,$bool75,$or15,$or14,$or17,$or16,result,$or13,$or12;
				if ((($bool77=((($bool75=$or12=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75['__nonzero__']=='function'?
							$bool75['__nonzero__']() :
							(typeof $bool75['__len__']=='function'?
								($bool75['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or12:((($bool76=$or13=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), x1)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76['__nonzero__']=='function'?
							$bool76['__nonzero__']() :
							(typeof $bool76['__len__']=='function'?
								($bool76['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:$p['op_eq']((typeof ($usub4=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub4:
					$p['op_usub']($usub4)), x1)))) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
						false :
						(typeof $bool77=='object'?
							(typeof $bool77['__nonzero__']=='function'?
								$bool77['__nonzero__']() :
								(typeof $bool77['__len__']=='function'?
									($bool77['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = x2;
				}
				else if ((($bool80=((($bool78=$or15=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x2)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78['__nonzero__']=='function'?
							$bool78['__nonzero__']() :
							(typeof $bool78['__len__']=='function'?
								($bool78['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or15:((($bool79=$or16=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), x2)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
					false :
					(typeof $bool79=='object'?
						(typeof $bool79['__nonzero__']=='function'?
							$bool79['__nonzero__']() :
							(typeof $bool79['__len__']=='function'?
								($bool79['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or16:$p['op_eq']((typeof ($usub5=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub5:
					$p['op_usub']($usub5)), x2)))) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80['__nonzero__']=='function'?
								$bool80['__nonzero__']() :
								(typeof $bool80['__len__']=='function'?
									($bool80['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = x1;
				}
				else {
					result = $p['max'](x1, x2);
				}
				return result;
			}
	, 1, [null,null,['self'],['x1'],['x2']]);
			$cls_definition['maxIgnoreNaNAndMaxValue'] = $method;
			$method = $pyjs__bind_method2('minIgnoreNaNAndMaxValue', function(x1, x2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x1 = arguments[1];
					x2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool83,$bool82,$bool81,$bool86,$bool85,$bool84,$or20,$or21,result,$or19,$or18,$or22,$or23;
				if ((($bool83=((($bool81=$or18=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x1)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81['__nonzero__']=='function'?
							$bool81['__nonzero__']() :
							(typeof $bool81['__len__']=='function'?
								($bool81['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or18:((($bool82=$or19=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), x1)) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82['__nonzero__']=='function'?
							$bool82['__nonzero__']() :
							(typeof $bool82['__len__']=='function'?
								($bool82['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or19:$p['op_eq']((typeof ($usub6=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub6:
					$p['op_usub']($usub6)), x1)))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83['__nonzero__']=='function'?
								$bool83['__nonzero__']() :
								(typeof $bool83['__len__']=='function'?
									($bool83['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = x2;
				}
				else if ((($bool86=((($bool84=$or21=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x2)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
					false :
					(typeof $bool84=='object'?
						(typeof $bool84['__nonzero__']=='function'?
							$bool84['__nonzero__']() :
							(typeof $bool84['__len__']=='function'?
								($bool84['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or21:((($bool85=$or22=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), x2)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
					false :
					(typeof $bool85=='object'?
						(typeof $bool85['__nonzero__']=='function'?
							$bool85['__nonzero__']() :
							(typeof $bool85['__len__']=='function'?
								($bool85['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or22:$p['op_eq']((typeof ($usub7=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub7:
					$p['op_usub']($usub7)), x2)))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
						false :
						(typeof $bool86=='object'?
							(typeof $bool86['__nonzero__']=='function'?
								$bool86['__nonzero__']() :
								(typeof $bool86['__len__']=='function'?
									($bool86['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = x1;
				}
				else {
					result = $p['min'](x1, x2);
				}
				return result;
			}
	, 1, [null,null,['self'],['x1'],['x2']]);
			$cls_definition['minIgnoreNaNAndMaxValue'] = $method;
			$method = $pyjs__bind_method2('invalidateDynamicAxisLimits', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '034f8715ca98a81cd9d0c191be5a1fda') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool88,$bool87;
				if ((($bool87=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), (typeof axisMin == "undefined"?$m['axisMin']:axisMin))) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87['__nonzero__']=='function'?
								$bool87['__nonzero__']() :
								(typeof $bool87['__len__']=='function'?
									($bool87['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setAxisMin']((typeof axisMin == "undefined"?$m['axisMin']:axisMin));
				}
				if ((($bool88=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), (typeof axisMax == "undefined"?$m['axisMax']:axisMax))) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
						false :
						(typeof $bool88=='object'?
							(typeof $bool88['__nonzero__']=='function'?
								$bool88['__nonzero__']() :
								(typeof $bool88['__len__']=='function'?
									($bool88['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setAxisMax']((typeof axisMax == "undefined"?$m['axisMax']:axisMax));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invalidateDynamicAxisLimits'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Axis', $p['tuple']($bases), $data);
		})();
		$m['XAxis'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Axis';
			$cls_definition['__md5__'] = 'a8ee33cf7476c36572151f12cd6986c6';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Axis']['__init__'](self, chart);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isHorizontalAxis', true) : $p['setattr'](self, 'isHorizontalAxis', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksId', $m['XTICKS_ID']) : $p['setattr'](self, 'ticksId', $m['XTICKS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gridlinesId', $m['XGRIDLINES_ID']) : $p['setattr'](self, 'gridlinesId', $m['XGRIDLINES_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisId', $m['XAXIS_ID']) : $p['setattr'](self, 'axisId', $m['XAXIS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisPosition', (typeof ($usub8=$constant_int_1)=='number'?
					-$usub8:
					$p['op_usub']($usub8))) : $p['setattr'](self, 'axisPosition', (typeof ($usub8=$constant_int_1)=='number'?
					-$usub8:
					$p['op_usub']($usub8))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLabelFormatType', null) : $p['setattr'](self, 'tickLabelFormatType', null); 
				self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
				self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
				self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clientToModel', function() {
				if (this['__is_instance__'] === true) {
					var clientCoordinate = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var clientCoordinate = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (clientCoordinate.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](clientCoordinate, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], clientCoordinate);
						}
					}
				}
				var $add29,$sub13,$add30,$sub14,result,xPixel;
				xPixel = (typeof ($sub13=(typeof ($add29=$m['Window']['getScrollLeft']())==typeof ($add30=clientCoordinate) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($sub14=$m['self']['chart']['plotPanel']['getAbsoluteLeft']()) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14));
				result = $m['self']['chart']['plotPanel']['xChartPixelToX'](xPixel);
				return result;
			}
	, 1, [null,null,['clientCoordinate']]);
			$cls_definition['clientToModel'] = $method;
			$method = $pyjs__bind_method2('getAxisLabelThickness', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool90,$bool91,$mul36,$add32,$add33,$add31,$add34,$mul30,DEF_CHARHEIGHT,EXTRA_CHARHEIGHT,result,$mul29,$mul35,$mul34,$mul32,$mul31,$bool89,$mul33,charHeight;
				EXTRA_CHARHEIGHT = $constant_int_2;
				DEF_CHARHEIGHT = $constant_int_1;
				result = $constant_int_0;
				if ((($bool89=$p['op_eq'](null, self['getAxisLabel']())) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89['__nonzero__']=='function'?
								$bool89['__nonzero__']() :
								(typeof $bool89['__len__']=='function'?
									($bool89['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $constant_int_0;
				}
				else if ((($bool90=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'axisLabelThickness'))) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
						false :
						(typeof $bool90=='object'?
							(typeof $bool90['__nonzero__']=='function'?
								$bool90['__nonzero__']() :
								(typeof $bool90['__len__']=='function'?
									($bool90['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'axisLabelThickness');
				}
				else if ((($bool91=$p['hasattr'](self['getAxisLabel'](), 'getHTML')) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91['__nonzero__']=='function'?
								$bool91['__nonzero__']() :
								(typeof $bool91['__len__']=='function'?
									($bool91['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					charHeight = $m['htmlHeight'](self['getAxisLabel']()['getHTML']());
					result = $p['int']($p['round']((typeof ($mul31=(typeof ($mul29=(typeof ($add31=EXTRA_CHARHEIGHT)==typeof ($add32=charHeight) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))==typeof ($mul30=self['getTickLabelFontSize']()) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30)))==typeof ($mul32=$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND']) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32))));
				}
				else {
					result = $p['int']($p['round']((typeof ($mul35=(typeof ($mul33=(typeof ($add33=EXTRA_CHARHEIGHT)==typeof ($add34=DEF_CHARHEIGHT) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)))==typeof ($mul34=self['getTickLabelFontSize']()) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34)))==typeof ($mul36=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAxisLabelThickness'] = $method;
			$method = $pyjs__bind_method2('getDataMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_nextval,c,$iter10_nextval,$bool94,i,nCurves,$iter11_type,$bool92,$iter10_array,$iter11_array,nPoints,$bool93,j,result,$iter11_iter,$iter10_type,$iter10_iter,$iter11_idx,$iter10_idx;
				result = (typeof ($usub9=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub9:
					$p['op_usub']($usub9));
				nCurves = self['chart']['getNCurves']();
				$iter10_iter = $p['range'](nCurves);
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool93=!(($bool92=c['isVisible']()) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
						false :
						(typeof $bool92=='object'?
							(typeof $bool92['__nonzero__']=='function'?
								$bool92['__nonzero__']() :
								(typeof $bool92['__len__']=='function'?
									($bool92['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
							false :
							(typeof $bool93=='object'?
								(typeof $bool93['__nonzero__']=='function'?
									$bool93['__nonzero__']() :
									(typeof $bool93['__len__']=='function'?
										($bool93['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					nPoints = c['getNPoints']();
					$iter11_iter = $p['range'](nPoints);
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						j = $iter11_nextval;
						result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getX']());
					}
				}
				if ((($bool94=$p['op_eq'](result, (typeof ($usub10=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub10:
					$p['op_usub']($usub10)))) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94['__nonzero__']=='function'?
								$bool94['__nonzero__']() :
								(typeof $bool94['__len__']=='function'?
									($bool94['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMax'] = $method;
			$method = $pyjs__bind_method2('getDataMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_array,c,$iter13_nextval,$bool95,$bool96,$iter13_iter,i,nCurves,j,$iter12_array,$iter12_nextval,$iter12_iter,$iter13_type,result,nPoints,$bool97,$iter12_idx,$iter12_type,$iter13_idx;
				result = $p['getattr']($m['Double'], 'MAX_VALUE');
				nCurves = self['chart']['getNCurves']();
				$iter12_iter = $p['range'](nCurves);
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					i = $iter12_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool96=!(($bool95=c['isVisible']()) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
						false :
						(typeof $bool95=='object'?
							(typeof $bool95['__nonzero__']=='function'?
								$bool95['__nonzero__']() :
								(typeof $bool95['__len__']=='function'?
									($bool95['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
							false :
							(typeof $bool96=='object'?
								(typeof $bool96['__nonzero__']=='function'?
									$bool96['__nonzero__']() :
									(typeof $bool96['__len__']=='function'?
										($bool96['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					nPoints = c['getNPoints']();
					$iter13_iter = $p['range'](nPoints);
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						j = $iter13_nextval;
						result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getX']());
					}
				}
				if ((($bool97=$p['op_eq'](result, $p['getattr']($m['Double'], 'MAX_VALUE'))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97['__nonzero__']=='function'?
								$bool97['__nonzero__']() :
								(typeof $bool97['__len__']=='function'?
									($bool97['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMin'] = $method;
			$method = $pyjs__bind_method2('getMouseCoordinate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['xChartPixelToX'](self['chart']['plotPanel']['getXMouse']());
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMouseCoordinate'] = $method;
			$method = $pyjs__bind_method2('getTickLabelThickness', function(needsPopulation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					needsPopulation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof needsPopulation == 'undefined') needsPopulation=arguments['callee']['__args__'][3][1];
				var $bool98,$bool99,result,$mul37,$mul38;
				if ((($bool98=!$p['op_eq']($p['getattr'](self, 'tickLabelThickness'), $m['NAI'])) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
						false :
						(typeof $bool98=='object'?
							(typeof $bool98['__nonzero__']=='function'?
								$bool98['__nonzero__']() :
								(typeof $bool98['__len__']=='function'?
									($bool98['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'tickLabelThickness');
				}
				else if ((($bool99=$p['op_eq'](self['getTickCount'](), $constant_int_0)) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
						false :
						(typeof $bool99=='object'?
							(typeof $bool99['__nonzero__']=='function'?
								$bool99['__nonzero__']() :
								(typeof $bool99['__len__']=='function'?
									($bool99['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $constant_int_0;
				}
				else {
					result = $p['int']($p['round']((typeof ($mul37=$m['TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND'])==typeof ($mul38=$p['getattr'](self, 'tickLabelFontSize')) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38))));
				}
				return result;
			}
	, 1, [null,null,['self'],['needsPopulation', true]]);
			$cls_definition['getTickLabelThickness'] = $method;
			$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add36,$sub16,$sub15,$add35,xPixel,result;
				xPixel = self['chart']['plotPanel']['xToChartPixel'](modelCoordinate);
				result = (typeof ($add35=(typeof ($sub15=self['chart']['plotPanel']['getAbsoluteLeft']())==typeof ($sub16=$m['Window']['getScrollLeft']()) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))==typeof ($add36=xPixel) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToClient'] = $method;
			$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['xToChartPixel'](modelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPixel'] = $method;
			$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['xToPixel'](modelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPlotAreaPixel'] = $method;
			$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['xChartPixelToX'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['pixelToModel'] = $method;
			$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['xPixelToX'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['plotAreaPixelToModel'] = $method;
			$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLength = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLength', tickLength) : $p['setattr'](self, 'tickLength', tickLength); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](self['getActualTickLength']());
				return null;
			}
	, 1, [null,null,['self'],['tickLength']]);
			$cls_definition['setTickLength'] = $method;
			$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8ee33cf7476c36572151f12cd6986c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickThickness', tickThickness) : $p['setattr'](self, 'tickThickness', tickThickness); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](tickThickness);
				return null;
			}
	, 1, [null,null,['self'],['tickThickness']]);
			$cls_definition['setTickThickness'] = $method;
			var $bases = new Array($m['Axis']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('XAxis', $p['tuple']($bases), $data);
		})();
		$m['Y2Axis'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Axis';
			$cls_definition['__md5__'] = 'c326ae6cba871fccdf95aae3c3a8e17a';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Axis']['__init__'](self, chart);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isHorizontalAxis', false) : $p['setattr'](self, 'isHorizontalAxis', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksId', $m['Y2TICKS_ID']) : $p['setattr'](self, 'ticksId', $m['Y2TICKS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gridlinesId', $m['Y2GRIDLINES_ID']) : $p['setattr'](self, 'gridlinesId', $m['Y2GRIDLINES_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisId', $m['Y2AXIS_ID']) : $p['setattr'](self, 'axisId', $m['Y2AXIS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisPosition', $constant_int_1) : $p['setattr'](self, 'axisPosition', $constant_int_1); 
				self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
				self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
				self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clientToModel', function() {
				if (this['__is_instance__'] === true) {
					var clientCoordinate = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var clientCoordinate = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (clientCoordinate.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](clientCoordinate, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], clientCoordinate);
						}
					}
				}
				var $add38,$sub18,$sub17,$add37,yPixel,result;
				yPixel = (typeof ($sub17=(typeof ($add37=$m['Window']['getScrollTop']())==typeof ($add38=clientCoordinate) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)))==typeof ($sub18=$m['self']['chart']['plotPanel']['getAbsoluteTop']()) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18));
				result = $m['self']['chart']['plotPanel']['yChartPixelToY2'](yPixel);
				return result;
			}
	, 1, [null,null,['clientCoordinate']]);
			$cls_definition['clientToModel'] = $method;
			$method = $pyjs__bind_method2('getDataMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter15_array,$iter14_type,$iter15_iter,i,nCurves,$iter15_type,c,$iter15_idx,$bool103,$bool101,result,$iter14_iter,$bool102,nPoints,$iter15_nextval,j,$bool100,$iter14_idx,$iter14_nextval;
				result = (typeof ($usub11=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub11:
					$p['op_usub']($usub11));
				nCurves = self['chart']['getNCurves']();
				$iter14_iter = $p['range'](nCurves);
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool101=!(($bool100=c['isVisible']()) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
						false :
						(typeof $bool100=='object'?
							(typeof $bool100['__nonzero__']=='function'?
								$bool100['__nonzero__']() :
								(typeof $bool100['__len__']=='function'?
									($bool100['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
							false :
							(typeof $bool101=='object'?
								(typeof $bool101['__nonzero__']=='function'?
									$bool101['__nonzero__']() :
									(typeof $bool101['__len__']=='function'?
										($bool101['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					if ((($bool102=$p['op_eq'](c['getYAxis'](), $m['Y2_AXIS'])) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
							false :
							(typeof $bool102=='object'?
								(typeof $bool102['__nonzero__']=='function'?
									$bool102['__nonzero__']() :
									(typeof $bool102['__len__']=='function'?
										($bool102['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						nPoints = c['getNPoints']();
						$iter15_iter = $p['range'](nPoints);
						if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
							$iter15_type = 0;
						} else {
							$iter15_iter = $iter15_iter['__iter__']();
							$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter15_idx = 0;
						while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
							j = $iter15_nextval;
							result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
						}
					}
				}
				if ((($bool103=$p['op_eq'](result, (typeof ($usub12=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub12:
					$p['op_usub']($usub12)))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103['__nonzero__']=='function'?
								$bool103['__nonzero__']() :
								(typeof $bool103['__len__']=='function'?
									($bool103['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMax'] = $method;
			$method = $pyjs__bind_method2('getDataMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,$bool105,c,$iter17_iter,$iter16_type,$iter17_array,i,nCurves,j,$iter17_nextval,$iter16_idx,$bool104,$bool107,$bool106,result,$iter17_type,nPoints,$iter16_nextval,$iter16_iter,$iter17_idx;
				result = $p['getattr']($m['Double'], 'MAX_VALUE');
				nCurves = self['chart']['getNCurves']();
				$iter16_iter = $p['range'](nCurves);
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					i = $iter16_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool105=!(($bool104=c['isVisible']()) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
						false :
						(typeof $bool104=='object'?
							(typeof $bool104['__nonzero__']=='function'?
								$bool104['__nonzero__']() :
								(typeof $bool104['__len__']=='function'?
									($bool104['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105['__nonzero__']=='function'?
									$bool105['__nonzero__']() :
									(typeof $bool105['__len__']=='function'?
										($bool105['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					if ((($bool106=$p['op_eq'](c['getYAxis'](), $m['Y2_AXIS'])) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
							false :
							(typeof $bool106=='object'?
								(typeof $bool106['__nonzero__']=='function'?
									$bool106['__nonzero__']() :
									(typeof $bool106['__len__']=='function'?
										($bool106['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						nPoints = c['getNPoints']();
						$iter17_iter = $p['range'](nPoints);
						if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
							$iter17_type = 0;
						} else {
							$iter17_iter = $iter17_iter['__iter__']();
							$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter17_idx = 0;
						while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
							j = $iter17_nextval;
							result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
						}
					}
				}
				if ((($bool107=$p['op_eq'](result, $p['getattr']($m['Double'], 'MAX_VALUE'))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
						false :
						(typeof $bool107=='object'?
							(typeof $bool107['__nonzero__']=='function'?
								$bool107['__nonzero__']() :
								(typeof $bool107['__len__']=='function'?
									($bool107['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMin'] = $method;
			$method = $pyjs__bind_method2('getMouseCoordinate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yChartPixelToY2'](self['chart']['plotPanel']['getYMouse']());
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMouseCoordinate'] = $method;
			$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub19,$add39,$sub20,$add40,yPixel,result;
				yPixel = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, true);
				result = (typeof ($add39=(typeof ($sub19=self['chart']['plotPanel']['getAbsoluteTop']())==typeof ($sub20=$m['Window']['getScrollTop']()) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20)))==typeof ($add40=yPixel) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToClient'] = $method;
			$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, true);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPixel'] = $method;
			$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yToPixel'](modelCoordinate, true);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPlotAreaPixel'] = $method;
			$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yChartPixelToY2'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['pixelToModel'] = $method;
			$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yPixelToY2'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['plotAreaPixelToModel'] = $method;
			$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLength = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLength', tickLength) : $p['setattr'](self, 'tickLength', tickLength); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](self['getActualTickLength']());
				return null;
			}
	, 1, [null,null,['self'],['tickLength']]);
			$cls_definition['setTickLength'] = $method;
			$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c326ae6cba871fccdf95aae3c3a8e17a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickThickness', tickThickness) : $p['setattr'](self, 'tickThickness', tickThickness); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](tickThickness);
				return null;
			}
	, 1, [null,null,['self'],['tickThickness']]);
			$cls_definition['setTickThickness'] = $method;
			var $bases = new Array($m['Axis']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Y2Axis', $p['tuple']($bases), $data);
		})();
		$m['YAxis'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Axis';
			$cls_definition['__md5__'] = 'b89e0b6aee157a255c8a5c47f16d0a66';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Axis']['__init__'](self, chart);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isHorizontalAxis', false) : $p['setattr'](self, 'isHorizontalAxis', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ticksId', $m['YTICKS_ID']) : $p['setattr'](self, 'ticksId', $m['YTICKS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gridlinesId', $m['YGRIDLINES_ID']) : $p['setattr'](self, 'gridlinesId', $m['YGRIDLINES_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisId', $m['YAXIS_ID']) : $p['setattr'](self, 'axisId', $m['YAXIS_ID']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('axisPosition', (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13))) : $p['setattr'](self, 'axisPosition', (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13))); 
				self['setTickLocation']($p['getattr']($m['TickLocation'], 'DEFAULT_TICK_LOCATION'));
				self['setTickThickness']($m['DEFAULT_TICK_THICKNESS']);
				self['setTickLength']($m['DEFAULT_TICK_LENGTH']);
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clientToModel', function() {
				if (this['__is_instance__'] === true) {
					var clientCoordinate = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var clientCoordinate = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (clientCoordinate.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](clientCoordinate, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], clientCoordinate);
						}
					}
				}
				var $sub22,$sub21,$add42,$add41,yPixel,result;
				yPixel = (typeof ($sub21=(typeof ($add41=$m['Window']['getScrollTop']())==typeof ($add42=clientCoordinate) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($sub22=$m['self']['chart']['plotPanel']['getAbsoluteTop']()) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22));
				result = $m['self']['chart']['plotPanel']['yChartPixelToY'](yPixel);
				return result;
			}
	, 1, [null,null,['clientCoordinate']]);
			$cls_definition['clientToModel'] = $method;
			$method = $pyjs__bind_method2('getDataMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter19_idx,$iter18_array,i,nCurves,j,c,$iter19_array,$iter19_iter,$iter18_idx,$iter19_type,result,$iter19_nextval,nPoints,$iter18_nextval,$bool109,$bool108,$bool110,$bool111;
				result = (typeof ($usub14=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub14:
					$p['op_usub']($usub14));
				nCurves = self['chart']['getNCurves']();
				$iter18_iter = $p['range'](nCurves);
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					i = $iter18_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool109=!(($bool108=c['isVisible']()) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
						false :
						(typeof $bool108=='object'?
							(typeof $bool108['__nonzero__']=='function'?
								$bool108['__nonzero__']() :
								(typeof $bool108['__len__']=='function'?
									($bool108['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
							false :
							(typeof $bool109=='object'?
								(typeof $bool109['__nonzero__']=='function'?
									$bool109['__nonzero__']() :
									(typeof $bool109['__len__']=='function'?
										($bool109['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					if ((($bool110=$p['op_eq'](c['getYAxis'](), $m['Y_AXIS'])) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
							false :
							(typeof $bool110=='object'?
								(typeof $bool110['__nonzero__']=='function'?
									$bool110['__nonzero__']() :
									(typeof $bool110['__len__']=='function'?
										($bool110['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						nPoints = c['getNPoints']();
						$iter19_iter = $p['range'](nPoints);
						if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
							$iter19_type = 0;
						} else {
							$iter19_iter = $iter19_iter['__iter__']();
							$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter19_idx = 0;
						while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
							j = $iter19_nextval;
							result = self['maxIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
						}
					}
				}
				if ((($bool111=$p['op_eq'](result, (typeof ($usub15=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub15:
					$p['op_usub']($usub15)))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
						false :
						(typeof $bool111=='object'?
							(typeof $bool111['__nonzero__']=='function'?
								$bool111['__nonzero__']() :
								(typeof $bool111['__len__']=='function'?
									($bool111['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMax'] = $method;
			$method = $pyjs__bind_method2('getDataMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter20_type,$iter21_array,i,nCurves,$iter21_nextval,c,j,$bool112,$bool113,$iter21_iter,$iter20_idx,result,$bool114,$bool115,nPoints,$iter21_type,$iter21_idx,$iter20_array;
				result = $p['getattr']($m['Double'], 'MAX_VALUE');
				nCurves = self['chart']['getNCurves']();
				$iter20_iter = $p['range'](nCurves);
				if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter['__iter__']();
					$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					i = $iter20_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool113=!(($bool112=c['isVisible']()) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
						false :
						(typeof $bool112=='object'?
							(typeof $bool112['__nonzero__']=='function'?
								$bool112['__nonzero__']() :
								(typeof $bool112['__len__']=='function'?
									($bool112['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
							false :
							(typeof $bool113=='object'?
								(typeof $bool113['__nonzero__']=='function'?
									$bool113['__nonzero__']() :
									(typeof $bool113['__len__']=='function'?
										($bool113['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					if ((($bool114=$p['op_eq'](c['getYAxis'](), $m['Y_AXIS'])) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
							false :
							(typeof $bool114=='object'?
								(typeof $bool114['__nonzero__']=='function'?
									$bool114['__nonzero__']() :
									(typeof $bool114['__len__']=='function'?
										($bool114['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						nPoints = c['getNPoints']();
						$iter21_iter = $p['range'](nPoints);
						if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
							$iter21_type = 0;
						} else {
							$iter21_iter = $iter21_iter['__iter__']();
							$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter21_idx = 0;
						while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
							j = $iter21_nextval;
							result = self['minIgnoreNaNAndMaxValue'](result, c['getPoint'](j)['getY']());
						}
					}
				}
				if ((($bool115=$p['op_eq'](result, $p['getattr']($m['Double'], 'MAX_VALUE'))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
						false :
						(typeof $bool115=='object'?
							(typeof $bool115['__nonzero__']=='function'?
								$bool115['__nonzero__']() :
								(typeof $bool115['__len__']=='function'?
									($bool115['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr']($m['Double'], 'NaN');
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDataMin'] = $method;
			$method = $pyjs__bind_method2('getMouseCoordinate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yChartPixelToY'](self['chart']['plotPanel']['getYMouse']());
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMouseCoordinate'] = $method;
			$method = $pyjs__bind_method2('modelToClient', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub23,$sub24,$add44,$add43,yPixel,result;
				yPixel = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, false);
				result = (typeof ($add43=(typeof ($sub23=self['chart']['plotPanel']['getAbsoluteTop']())==typeof ($sub24=$m['Window']['getScrollTop']()) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))==typeof ($add44=yPixel) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44));
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToClient'] = $method;
			$method = $pyjs__bind_method2('modelToPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yToChartPixel'](modelCoordinate, false);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPixel'] = $method;
			$method = $pyjs__bind_method2('modelToPlotAreaPixel', function(modelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					modelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yToPixel'](modelCoordinate, false);
				return result;
			}
	, 1, [null,null,['self'],['modelCoordinate']]);
			$cls_definition['modelToPlotAreaPixel'] = $method;
			$method = $pyjs__bind_method2('pixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yChartPixelToY'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['pixelToModel'] = $method;
			$method = $pyjs__bind_method2('plotAreaPixelToModel', function(pixelCoordinate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pixelCoordinate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['chart']['plotPanel']['yPixelToY'](pixelCoordinate);
				return result;
			}
	, 1, [null,null,['self'],['pixelCoordinate']]);
			$cls_definition['plotAreaPixelToModel'] = $method;
			$method = $pyjs__bind_method2('setTickLength', function(tickLength) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickLength = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickLength', tickLength) : $p['setattr'](self, 'tickLength', tickLength); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setWidth'](self['getActualTickLength']());
				return null;
			}
	, 1, [null,null,['self'],['tickLength']]);
			$cls_definition['setTickLength'] = $method;
			$method = $pyjs__bind_method2('setTickThickness', function(tickThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tickThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b89e0b6aee157a255c8a5c47f16d0a66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tickThickness', tickThickness) : $p['setattr'](self, 'tickThickness', tickThickness); 
				self['getSystemCurve']($p['getattr'](self, 'ticksId'))['getSymbol']()['setHeight'](tickThickness);
				return null;
			}
	, 1, [null,null,['self'],['tickThickness']]);
			$cls_definition['setTickThickness'] = $method;
			var $bases = new Array($m['Axis']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('YAxis', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.Axis */


/* end module: pyjamas.chart.Axis */


/*
PYJS_DEPS: ['time', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.chart.NumberFormat', 'pyjamas.chart', 'pyjamas.chart.DateTimeFormat', 'pyjamas.chart.Double', 'pyjamas.chart.TickLocation', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.Annotation', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_COUNT', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONTSIZE', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_STYLE', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FONT_WEIGHT', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LABEL_FORMAT', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_LENGTH', 'pyjamas.chart.GChartConsts.DEFAULT_TICK_THICKNESS', 'pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart.GChartConsts.TICK_CHARHEIGHT_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.GChartUtil.htmlWidth']
*/
