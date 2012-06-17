/* start module: pyjamas.chart.GChart */
$pyjs.loaded_modules['pyjamas.chart.GChart'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.GChart'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.GChart'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.GChart"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.GChart>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.GChart';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['GChart'] = $pyjs.loaded_modules['pyjamas.chart.GChart'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.chart', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.chart', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.chart', null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.chart', null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.chart', null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.chart', null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.chart', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.chart', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.chart', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.chart', null, false);
		$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.chart', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.chart', null, false);
		$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
		$m['DEFAULT_X_CHARTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_X_CHARTSIZE', 'pyjamas.chart', null, false);
		$m['DEFAULT_Y_CHARTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_Y_CHARTSIZE', 'pyjamas.chart', null, false);
		$m['USE_CSS'] = $p['___import___']('pyjamas.chart.GChartConsts.USE_CSS', 'pyjamas.chart', null, false);
		$m['Y_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart', null, false);
		$m['DEFAULT_BLANK_IMAGE_URL_FULLPATH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_BLANK_IMAGE_URL_FULLPATH', 'pyjamas.chart', null, false);
		$m['DEFAULT_SYMBOL_BORDER_COLORS'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_SYMBOL_BORDER_COLORS', 'pyjamas.chart', null, false);
		$m['DEFAULT_LEGEND_BACKGROUND_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BACKGROUND_COLOR', 'pyjamas.chart', null, false);
		$m['N_SYSTEM_CURVES'] = $p['___import___']('pyjamas.chart.GChartConsts.N_SYSTEM_CURVES', 'pyjamas.chart', null, false);
		$m['DEFAULT_LEGEND_BORDER_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_LEGEND_BORDER_WIDTH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_WIDTH', 'pyjamas.chart', null, false);
		$m['DEFAULT_LEGEND_BORDER_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_STYLE', 'pyjamas.chart', null, false);
		$m['DEFAULT_FONT_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_FONT_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_LEGEND_FONTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_LEGEND_FONTSIZE', 'pyjamas.chart', null, false);
		$m['DEFAULT_FONT_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_FONT_STYLE', 'pyjamas.chart', null, false);
		$m['DEFAULT_FONT_WEIGHT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_FONT_WEIGHT', 'pyjamas.chart', null, false);
		$m['DEFAULT_PLOTAREA_BACKGROUND_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BACKGROUND_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_PLOTAREA_BORDER_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_PLOTAREA_BORDER_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_STYLE', 'pyjamas.chart', null, false);
		$m['DEFAULT_PLOTAREA_BORDER_WIDTH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_WIDTH', 'pyjamas.chart', null, false);
		$m['PLOTAREA_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.PLOTAREA_ID', 'pyjamas.chart', null, false);
		$m['TITLE_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.TITLE_ID', 'pyjamas.chart', null, false);
		$m['YAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart', null, false);
		$m['YTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart', null, false);
		$m['YGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['YLABEL_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.YLABEL_ID', 'pyjamas.chart', null, false);
		$m['Y2AXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart', null, false);
		$m['Y2TICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart', null, false);
		$m['Y2GRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['Y2LABEL_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2LABEL_ID', 'pyjamas.chart', null, false);
		$m['LEGEND_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.LEGEND_ID', 'pyjamas.chart', null, false);
		$m['XAXIS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart', null, false);
		$m['XTICKS_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart', null, false);
		$m['XGRIDLINES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart', null, false);
		$m['XLABEL_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.XLABEL_ID', 'pyjamas.chart', null, false);
		$m['FOOTNOTES_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.FOOTNOTES_ID', 'pyjamas.chart', null, false);
		$m['HOVER_CURSOR_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.HOVER_CURSOR_ID', 'pyjamas.chart', null, false);
		$m['HOVER_ANNOTATION_ID'] = $p['___import___']('pyjamas.chart.GChartConsts.HOVER_ANNOTATION_ID', 'pyjamas.chart', null, false);
		$m['N_PRE_SYSTEM_CURVES'] = $p['___import___']('pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart', null, false);
		$m['N_POST_SYSTEM_CURVES'] = $p['___import___']('pyjamas.chart.GChartConsts.N_POST_SYSTEM_CURVES', 'pyjamas.chart', null, false);
		$m['DEFAULT_GRID_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_GRID_COLOR', 'pyjamas.chart', null, false);
		$m['GRID_BORDER_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.GRID_BORDER_STYLE', 'pyjamas.chart', null, false);
		$m['GRID_BORDER_WIDTH'] = $p['___import___']('pyjamas.chart.GChartConsts.GRID_BORDER_WIDTH', 'pyjamas.chart', null, false);
		$m['DEFAULT_GRID_WIDTH'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_GRID_WIDTH', 'pyjamas.chart', null, false);
		$m['DEFAULT_GRID_HEIGHT'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_GRID_HEIGHT', 'pyjamas.chart', null, false);
		$m['TICK_BORDER_STYLE'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_BORDER_STYLE', 'pyjamas.chart', null, false);
		$m['TICK_BORDER_WIDTH'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_BORDER_WIDTH', 'pyjamas.chart', null, false);
		$m['Y2_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart', null, false);
		$m['DEFAULT_TITLE_THICKNESS'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_TITLE_THICKNESS', 'pyjamas.chart', null, false);
		$m['DEFAULT_FOOTNOTES_THICKNESS'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_FOOTNOTES_THICKNESS', 'pyjamas.chart', null, false);
		$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart', null, false);
		$m['TRANSPARENT_BORDER_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.TRANSPARENT_BORDER_COLOR', 'pyjamas.chart', null, false);
		$m['YAxisId'] = $p['___import___']('pyjamas.chart.GChartConsts.YAxisId', 'pyjamas.chart', null, false);
		$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', 'pyjamas.chart', null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', 'pyjamas.chart', null, false);
		$m['TickLocation'] = $p['___import___']('pyjamas.chart.TickLocation', 'pyjamas.chart', null, false);
		$m['TouchedPointUpdateOption'] = $p['___import___']('pyjamas.chart.TouchedPointUpdateOption', 'pyjamas.chart', null, false);
		$m['Curve'] = $p['___import___']('pyjamas.chart.Curve.Curve', 'pyjamas.chart', null, false);
		$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', 'pyjamas.chart', null, false);
		$m['PlotPanel'] = $p['___import___']('pyjamas.chart.GChartWidgets.PlotPanel', 'pyjamas.chart', null, false);
		$m['GChartWidgets'] = $p['___import___']('pyjamas.chart.GChartWidgets', 'pyjamas.chart', null, false);
		$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.chart');
		$m['XAxis'] = $p['___import___']('pyjamas.chart.Axis.XAxis', 'pyjamas.chart', null, false);
		$m['YAxis'] = $p['___import___']('pyjamas.chart.Axis.YAxis', 'pyjamas.chart', null, false);
		$m['Y2Axis'] = $p['___import___']('pyjamas.chart.Axis.Y2Axis', 'pyjamas.chart', null, false);
		$m['canvasFactory'] = null;
		$m['setCanvasFactory'] = function(factory) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$m['canvasFactory'] = factory;
			return null;
		};
		$m['setCanvasFactory'].__name__ = 'setCanvasFactory';

		$m['setCanvasFactory'].__bind_type__ = 0;
		$m['setCanvasFactory'].__args__ = [null,null,['factory']];
		$m['getCanvasFactory'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['canvasFactory'];
		};
		$m['getCanvasFactory'].__name__ = 'getCanvasFactory';

		$m['getCanvasFactory'].__bind_type__ = 0;
		$m['getCanvasFactory'].__args__ = [null,null];
		$m['isMouseAnchored'] = function(symbolType) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $or1,$or3,$or2,$bool2,$bool1;
			return ((($bool1=$or1=$p['op_eq']($p['getattr']($m['SymbolType'], 'ANCHOR_MOUSE'), symbolType)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool2=$or2=$p['op_eq']($p['getattr']($m['SymbolType'], 'ANCHOR_MOUSE_SNAP_TO_X'), symbolType)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or2:$p['op_eq']($p['getattr']($m['SymbolType'], 'ANCHOR_MOUSE_SNAP_TO_Y'), symbolType)));
		};
		$m['isMouseAnchored'].__name__ = 'isMouseAnchored';

		$m['isMouseAnchored'].__bind_type__ = 0;
		$m['isMouseAnchored'].__args__ = [null,null,['symbolType']];
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.chart', null, false);
		$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.chart', null, false);
		$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.chart', null, false);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.chart', null, false);
		$m['GChart'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.GChart';
			$cls_definition.__md5__ = 'df14eeb754232219b6584ad4fb4eabfe';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
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
				var $bool3,$bool6,$bool7,$bool4,$bool5,$bool8;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartTitle', null) : $p['setattr'](self, 'chartTitle', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverParameterInterpreter', null) : $p['setattr'](self, 'hoverParameterInterpreter', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverTouchingEnabled', true) : $p['setattr'](self, 'hoverTouchingEnabled', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('defaultSymbolBorderColors', $m['DEFAULT_SYMBOL_BORDER_COLORS']) : $p['setattr'](self, 'defaultSymbolBorderColors', $m['DEFAULT_SYMBOL_BORDER_COLORS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartPanel', $m['SimplePanel']()) : $p['setattr'](self, 'chartPanel', $m['SimplePanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderWidth', $m['USE_CSS']) : $p['setattr'](self, 'borderWidth', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderStyle', $m['USE_CSS']) : $p['setattr'](self, 'borderStyle', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColor', $m['USE_CSS']) : $p['setattr'](self, 'borderColor', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColor', $m['USE_CSS']) : $p['setattr'](self, 'backgroundColor', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blankImageURL', null) : $p['setattr'](self, 'blankImageURL', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curves', $p['list']([])) : $p['setattr'](self, 'curves', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontFamily', $m['USE_CSS']) : $p['setattr'](self, 'fontFamily', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('footnotesThickness', $m['NAI']) : $p['setattr'](self, 'footnotesThickness', $m['NAI']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBackgroundColor', $m['DEFAULT_LEGEND_BACKGROUND_COLOR']) : $p['setattr'](self, 'legendBackgroundColor', $m['DEFAULT_LEGEND_BACKGROUND_COLOR']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderColor', $m['DEFAULT_LEGEND_BORDER_COLOR']) : $p['setattr'](self, 'legendBorderColor', $m['DEFAULT_LEGEND_BORDER_COLOR']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderWidth', $m['DEFAULT_LEGEND_BORDER_WIDTH']) : $p['setattr'](self, 'legendBorderWidth', $m['DEFAULT_LEGEND_BORDER_WIDTH']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderStyle', $m['DEFAULT_LEGEND_BORDER_STYLE']) : $p['setattr'](self, 'legendBorderStyle', $m['DEFAULT_LEGEND_BORDER_STYLE']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendThickness', $m['NAI']) : $p['setattr'](self, 'legendThickness', $m['NAI']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartFootnotes', null) : $p['setattr'](self, 'chartFootnotes', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartFootnotesLeftJustified', true) : $p['setattr'](self, 'chartFootnotesLeftJustified', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendVisible', true) : $p['setattr'](self, 'legendVisible', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontColor', $m['DEFAULT_FONT_COLOR']) : $p['setattr'](self, 'legendFontColor', $m['DEFAULT_FONT_COLOR']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontSize', $m['DEFAULT_LEGEND_FONTSIZE']) : $p['setattr'](self, 'legendFontSize', $m['DEFAULT_LEGEND_FONTSIZE']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontStyle', $m['DEFAULT_FONT_STYLE']) : $p['setattr'](self, 'legendFontStyle', $m['DEFAULT_FONT_STYLE']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontWeight', $m['DEFAULT_FONT_WEIGHT']) : $p['setattr'](self, 'legendFontWeight', $m['DEFAULT_FONT_WEIGHT']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('initialPieSliceOrientation', 0.0) : $p['setattr'](self, 'initialPieSliceOrientation', 0.0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('plotPanel', $m['PlotPanel'](self)) : $p['setattr'](self, 'plotPanel', $m['PlotPanel'](self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('padding', $m['USE_CSS']) : $p['setattr'](self, 'padding', $m['USE_CSS']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('optimizeForMemory', false) : $p['setattr'](self, 'optimizeForMemory', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clipToPlotArea', false) : $p['setattr'](self, 'clipToPlotArea', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clipToDecoratedChart', false) : $p['setattr'](self, 'clipToDecoratedChart', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('titleThickness', $m['NAI']) : $p['setattr'](self, 'titleThickness', $m['NAI']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('wasUnloaded', false) : $p['setattr'](self, 'wasUnloaded', false); 
				self['addSystemCurves']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xAxis', $m['XAxis'](self)) : $p['setattr'](self, 'xAxis', $m['XAxis'](self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yAxis', $m['YAxis'](self)) : $p['setattr'](self, 'yAxis', $m['YAxis'](self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('y2Axis', $m['Y2Axis'](self)) : $p['setattr'](self, 'y2Axis', $m['Y2Axis'](self)); 
				if ((($bool4=!(($bool3=kwargs['has_key']('StyleName')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					kwargs.__setitem__('StyleName', 'gchart-GChart');
				}
				if ((($bool6=!(($bool5=kwargs['has_key']('XChartSize')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					kwargs.__setitem__('XChartSize', $m['DEFAULT_X_CHARTSIZE']);
				}
				if ((($bool8=!(($bool7=kwargs['has_key']('YChartSize')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					kwargs.__setitem__('YChartSize', $m['DEFAULT_Y_CHARTSIZE']);
				}
				$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'chartPanel')]);
				$m['FocusHandler']['__init__'](self);
				$m['KeyboardHandler']['__init__'](self);
				$m['ClickHandler']['__init__'](self);
				$m['MouseHandler']['__init__'](self);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getCanvasFactory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['getCanvasFactory']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvasFactory'] = $method;
			$method = $pyjs__bind_method2('getLastPieSliceOrientation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'lastPieSliceOrientation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLastPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('setLastPieSliceOrientation', function(lastOrientation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					lastOrientation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod1,$mod2;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastPieSliceOrientation', (typeof ($mod1=lastOrientation)==typeof ($mod2=1.0) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))) : $p['setattr'](self, 'lastPieSliceOrientation', (typeof ($mod1=lastOrientation)==typeof ($mod2=1.0) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))); 
				return null;
			}
	, 1, [null,null,['self'],['lastOrientation']]);
			$cls_definition['setLastPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('setInitialPieSliceOrientation', function(orientation) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					orientation = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or4,$cmp4,$cmp1,$cmp3,$cmp2,$bool10,$add2,$add3,$add1,$add6,$add4,$add5,$bool9;
				if ((($bool10=((($bool9=$or4=((($cmp1=orientation)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or4:((((($cmp3=orientation)===($cmp4=$constant_int_1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add5=(typeof ($add3=(typeof ($add1='orientation=')==typeof ($add2=orientation) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)))==typeof ($add4='; ') && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)))==typeof ($add6='orientation must be >=0 and < 1.') && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('initialPieSliceOrientation', orientation) : $p['setattr'](self, 'initialPieSliceOrientation', orientation); 
				self['invalidateAllSlices']();
				return null;
			}
	, 1, [null,null,['self'],['orientation']]);
			$cls_definition['setInitialPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('getInitialPieSliceOrientation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'initialPieSliceOrientation');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getInitialPieSliceOrientation'] = $method;
			$method = $pyjs__bind_method2('addSystemCurves', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter1_nextval,$iter1_type,i,$bool11,$iter1_iter,$iter1_array,$iter1_idx;
				$iter1_iter = $p['range']($m['N_SYSTEM_CURVES']);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					c = $m['Curve'](self, i);
					self['curves']['append'](c);
				}
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_SOUTHEAST'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_PLOTAREA_BACKGROUND_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_PLOTAREA_BORDER_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['DEFAULT_PLOTAREA_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['DEFAULT_PLOTAREA_BORDER_WIDTH']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']((typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub1:
					$p['op_usub']($usub1)), $p['getattr']($m['Double'], 'MAX_VALUE'));
				c = self['getSystemCurve']($m['TITLE_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_NORTHWEST'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['YAXIS_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'XGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']((typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub2:
					$p['op_usub']($usub2)), (typeof ($usub3=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				c = self['getSystemCurve']($m['YTICKS_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_WEST'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['TICK_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['TICK_BORDER_WIDTH']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['YGRIDLINES_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'YGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['YLABEL_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_WEST'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['Y2AXIS_ID']);
				c['setYAxis']($m['Y2_AXIS']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'XGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($p['getattr']($m['Double'], 'MAX_VALUE'), (typeof ($usub4=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				c = self['getSystemCurve']($m['Y2TICKS_ID']);
				c['setYAxis']($m['Y2_AXIS']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_EAST'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['TICK_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['TICK_BORDER_WIDTH']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['Y2GRIDLINES_ID']);
				c['setYAxis']($m['Y2_AXIS']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'YGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['Y2LABEL_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_EAST'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['LEGEND_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_EAST'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['XAXIS_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'YGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']((typeof ($usub5=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub5:
					$p['op_usub']($usub5)), (typeof ($usub6=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				c = self['getSystemCurve']($m['XTICKS_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_SOUTH'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['TICK_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['TICK_BORDER_WIDTH']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['XGRIDLINES_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'XGRIDLINE'));
				c['getSymbol']()['setBackgroundColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderColor']($m['DEFAULT_GRID_COLOR']);
				c['getSymbol']()['setBorderStyle']($m['GRID_BORDER_STYLE']);
				c['getSymbol']()['setBorderWidth']($m['GRID_BORDER_WIDTH']);
				c['getSymbol']()['setWidth']($m['DEFAULT_GRID_WIDTH']);
				c['getSymbol']()['setHeight']($m['DEFAULT_GRID_HEIGHT']);
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c = self['getSystemCurve']($m['XLABEL_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_SOUTH'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['FOOTNOTES_ID']);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_SOUTHWEST'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($constant_int_0, $constant_int_0);
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['HOVER_ANNOTATION_ID']);
				c['setVisible'](false);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'NONE'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'));
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				c = self['getSystemCurve']($m['HOVER_CURSOR_ID']);
				c['setVisible'](false);
				c['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'NONE'));
				c['getSymbol']()['setHoverAnnotationEnabled'](false);
				c['getSymbol']()['setHoverSelectionEnabled'](false);
				c['addPoint']($p['getattr']($m['Double'], 'NaN'), $p['getattr']($m['Double'], 'NaN'));
				c['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				if ((($bool11=!$p['op_eq'](self['getNCurves'](), $constant_int_0)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)('self.getNCurves() != 0. Probably a GChart bug.'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['addSystemCurves'] = $method;
			$method = $pyjs__bind_method2('updateDecorations', function(xChartSizeDecorated) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					xChartSizeDecorated = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub20,$sub21,$sub26,$sub24,$sub25,$bool12,$bool13,$bool14,$bool15,shiftToHorizontalMidpoint,$div13,$div8,$add19,$add21,$add18,$add22,$div10,$div11,$div12,$div7,$sub9,$sub8,$and2,$and1,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,shiftToLeftEdge,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$div2,$div3,$div1,$div6,legend,$div4,$div5,$cmp5,$cmp6,$div14,$div9,$add7,$add20,$add8,$add9;
				self['getSystemCurve']($m['XLABEL_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](self['getXAxis']()['getAxisLabel'](), self['getXChartSize'](), self['getXAxis']()['getAxisLabelThickness']());
				self['getSystemCurve']($m['XLABEL_ID'])['getPoint']($constant_int_0)['setAnnotationYShift']((typeof ($sub5=(typeof ($sub3=(typeof ($sub1=(typeof ($usub7=self['getXAxis']()['getTickLabelThickness'](false))=='number'?
					-$usub7:
					$p['op_usub']($usub7)))==typeof ($sub2=self['getXAxis']()['getTickSpace']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($sub4=self['getXAxis']()['getTickLabelPadding']()) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($sub6=(typeof ($div1=self['getXAxis']()['getAxisLabelThickness']())==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)));
				self['getSystemCurve']($m['YLABEL_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](self['getYAxis']()['getAxisLabel'](), self['getYAxis']()['getAxisLabelThickness'](), self['getYChartSize']());
				self['getSystemCurve']($m['YLABEL_ID'])['getPoint']($constant_int_0)['setAnnotationXShift']((typeof ($sub11=(typeof ($sub9=(typeof ($sub7=(typeof ($usub8=self['getYAxis']()['getTickLabelThickness'](false))=='number'?
					-$usub8:
					$p['op_usub']($usub8)))==typeof ($sub8=self['getYAxis']()['getTickSpace']()) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($sub10=self['getYAxis']()['getTickLabelPadding']()) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))==typeof ($sub12=(typeof ($div3=self['getYAxis']()['getAxisLabelThickness']())==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12)));
				self['getSystemCurve']($m['Y2LABEL_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](self['getY2Axis']()['getAxisLabel'](), self['getY2Axis']()['getAxisLabelThickness'](), self['getYChartSize']());
				self['getSystemCurve']($m['Y2LABEL_ID'])['getPoint']($constant_int_0)['setAnnotationXShift']((typeof ($add11=(typeof ($add9=(typeof ($add7=(typeof ($uadd1=self['getY2Axis']()['getTickLabelThickness'](false))=='number'?
					$uadd1:
					$p['op_uadd']($uadd1)))==typeof ($add8=self['getY2Axis']()['getTickSpace']()) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=self['getY2Axis']()['getTickLabelPadding']()) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=(typeof ($div5=self['getY2Axis']()['getAxisLabelThickness']())==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6))) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				legend = null;
				if ((($bool13=((($bool12=$and1=self['isLegendVisible']()) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp5=$constant_int_0)===($cmp6=self['getNVisibleCurvesOnLegend']())?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1):$and1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					legend = self['createLegend']($p['getattr'](self, 'plotPanel'));
				}
				self['getSystemCurve']($m['LEGEND_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](legend, self['getLegendThickness'](), self['getYChartSize']());
				self['getSystemCurve']($m['LEGEND_ID'])['getPoint']($constant_int_0)['setAnnotationXShift']((typeof ($add19=(typeof ($add17=(typeof ($add15=(typeof ($add13=(typeof ($uadd2=self['getY2Axis']()['getTickLabelThickness'](false))=='number'?
					$uadd2:
					$p['op_uadd']($uadd2)))==typeof ($add14=self['getY2Axis']()['getTickSpace']()) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))==typeof ($add16=self['getY2Axis']()['getTickLabelPadding']()) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))==typeof ($add18=self['getY2Axis']()['getAxisLabelThickness']()) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20=(typeof ($div7=self['getLegendThickness']())==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8))) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
				shiftToLeftEdge = (typeof ($sub17=(typeof ($sub15=(typeof ($sub13=(typeof ($usub9=self['getYAxis']()['getAxisLabelThickness']())=='number'?
					-$usub9:
					$p['op_usub']($usub9)))==typeof ($sub14=self['getYAxis']()['getTickLabelThickness'](false)) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)))==typeof ($sub16=self['getYAxis']()['getTickSpace']()) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))==typeof ($sub18=self['getYAxis']()['getTickLabelPadding']()) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18));
				shiftToHorizontalMidpoint = (typeof ($add21=shiftToLeftEdge)==typeof ($add22=(typeof ($div9=xChartSizeDecorated)==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				self['getSystemCurve']($m['TITLE_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](self['getChartTitle'](), xChartSizeDecorated, self['getChartTitleThickness']());
				self['getSystemCurve']($m['TITLE_ID'])['getPoint']($constant_int_0)['setAnnotationYShift']((typeof ($div11=self['getChartTitleThickness']())==typeof ($div12=$constant_int_2) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)));
				self['getSystemCurve']($m['TITLE_ID'])['getPoint']($constant_int_0)['setAnnotationXShift'](shiftToHorizontalMidpoint);
				self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationWidget'](self['getChartFootnotes'](), xChartSizeDecorated, self['getChartFootnotesThickness']());
				self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationYShift']((typeof ($sub25=(typeof ($sub23=(typeof ($sub21=(typeof ($sub19=(typeof ($usub10=self['getXAxis']()['getTickLabelThickness'](false))=='number'?
					-$usub10:
					$p['op_usub']($usub10)))==typeof ($sub20=self['getXAxis']()['getTickSpace']()) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20)))==typeof ($sub22=self['getXAxis']()['getTickLabelPadding']()) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22)))==typeof ($sub24=self['getXAxis']()['getAxisLabelThickness']()) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))==typeof ($sub26=(typeof ($div13=self['getChartFootnotesThickness']())==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26)));
				if ((($bool14=self['getChartFootnotesLeftJustified']()) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationXShift'](shiftToLeftEdge);
					self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'EAST'));
				}
				else {
					self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationXShift'](shiftToHorizontalMidpoint);
					self['getSystemCurve']($m['FOOTNOTES_ID'])['getPoint']($constant_int_0)['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				}
				self['getSystemCurve']($m['XAXIS_ID'])['setVisible'](self['getXAxis']()['getAxisVisible']());
				self['getXAxis']()['populateGridlines']();
				self['getSystemCurve']($m['YAXIS_ID'])['setVisible'](self['getYAxis']()['getAxisVisible']());
				self['getYAxis']()['populateGridlines']();
				if ((($bool15=self['hasY2Axis']()) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['getY2Axis']()['populateGridlines']();
					self['getSystemCurve']($m['Y2AXIS_ID'])['setVisible'](self['getY2Axis']()['getAxisVisible']());
					self['getSystemCurve']($m['Y2TICKS_ID'])['setVisible'](true);
					self['getSystemCurve']($m['Y2GRIDLINES_ID'])['setVisible'](true);
				}
				else {
					self['getSystemCurve']($m['Y2AXIS_ID'])['setVisible'](false);
					self['getSystemCurve']($m['Y2TICKS_ID'])['setVisible'](false);
					self['getSystemCurve']($m['Y2GRIDLINES_ID'])['setVisible'](false);
				}
				return null;
			}
	, 1, [null,null,['self'],['xChartSizeDecorated']]);
			$cls_definition['updateDecorations'] = $method;
			$method = $pyjs__bind_method2('addClickHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.ClickEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addClickHandler'] = $method;
			$method = $pyjs__bind_method2('addDoubleClickHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.DoubleClickEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addDoubleClickHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseDownHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseDownEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseDownHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseMoveHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseMoveEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseMoveHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseOutHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseOutEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseOutHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseOverHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseOverEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseOverHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseUpHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseUpEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseUpHandler'] = $method;
			$method = $pyjs__bind_method2('addMouseWheelHandler', function(handler) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = (typeof addDomHandler == "undefined"?$m.addDomHandler:addDomHandler)(handler, $m.MouseWheelEvent['getType']());
				return result;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseWheelHandler'] = $method;
			$method = $pyjs__bind_method2('internalCurveIndex', function(externalIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					externalIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$add28,$cmp7,$add27,$add25,$cmp9,$cmp8,$bool16,$bool17,result,$len1,$add24,$add26,$add23,$cmp10;
				if ((($bool16=$p['op_eq']($m['NAI'], externalIndex)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($usub11=$constant_int_1)=='number'?
						-$usub11:
						$p['op_usub']($usub11));
				}
				else if ((($bool17=((($cmp7=externalIndex)===($cmp8=(typeof ($usub12=$m['N_POST_SYSTEM_CURVES'])=='number'?
					-$usub12:
					$p['op_usub']($usub12)))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add23=externalIndex)==typeof ($add24=$m['N_SYSTEM_CURVES']) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				else if ((($bool18=((($cmp9=externalIndex)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					result = (typeof ($add25=(($len1=$p['getattr'](self, 'curves')) === null?$constant_int_0:
						(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
							(typeof $len1.__len__ == 'function'?$len1.__len__():
								(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
									$p['len']($len1))))))==typeof ($add26=externalIndex) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
				}
				else {
					result = (typeof ($add27=externalIndex)==typeof ($add28=$m['N_PRE_SYSTEM_CURVES']) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
				}
				return result;
			}
	, 1, [null,null,['self'],['externalIndex']]);
			$cls_definition['internalCurveIndex'] = $method;
			$method = $pyjs__bind_method2('externalCurveIndex', function(internalIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					internalIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$sub27,$sub28,$sub29,result,$bool21,$bool20,$sub31,$sub30,$sub33,$sub32,$sub34,$cmp15,$cmp14,$cmp16,$cmp11,$cmp13,$cmp12,$len2,$len3;
				if ((($bool19=((($cmp11=internalIndex)===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $m['NAI'];
				}
				else if ((($bool20=((($cmp13=internalIndex)===($cmp14=$m['N_PRE_SYSTEM_CURVES'])?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					result = (typeof ($sub27=internalIndex)==typeof ($sub28=$m['N_SYSTEM_CURVES']) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28));
				}
				else if ((($bool21=((((($cmp15=internalIndex)===($cmp16=(typeof ($sub29=(($len2=$p['getattr'](self, 'curves')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))==typeof ($sub30=$m['N_POST_SYSTEM_CURVES']) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					result = (typeof ($sub31=internalIndex)==typeof ($sub32=(($len3=$p['getattr'](self, 'curves')) === null?$constant_int_0:
						(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
									$p['len']($len3)))))) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32));
				}
				else {
					result = (typeof ($sub33=internalIndex)==typeof ($sub34=$m['N_PRE_SYSTEM_CURVES']) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34));
				}
				return result;
			}
	, 1, [null,null,['self'],['internalIndex']]);
			$cls_definition['externalCurveIndex'] = $method;
			$method = $pyjs__bind_method2('isSystemCurveIndex', function(externalIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					externalIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp17,result,$cmp18;
				result = ((($cmp17=externalIndex)===($cmp18=$constant_int_0)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1);
				return result;
			}
	, 1, [null,null,['self'],['externalIndex']]);
			$cls_definition['isSystemCurveIndex'] = $method;
			$method = $pyjs__bind_method2('addCurve', function(iCurve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iCurve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof iCurve == 'undefined') iCurve=arguments.callee.__args__[3][1];
				var $cmp20,$cmp21,$cmp22,$cmp23,$cmp24,rpIndex,$sub35,$add29,$iter2_iter,$2,$add42,$add41,$add40,$bool25,$bool24,$bool26,$bool23,$bool22,$iter2_type,$sub36,c,$iter2_idx,$iter2_nextval,$cmp19,$1,internalIndex,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,i,$len4,$iter2_array;
				if ((($bool22=$p['op_is'](iCurve, null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					iCurve = self['getNCurves']();
				}
				if ((($bool23=((($cmp19=iCurve)===($cmp20=self['getNCurves']())?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add35=(typeof ($add33=(typeof ($add31=(typeof ($add29='iCurve = ')==typeof ($add30=iCurve) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)))==typeof ($add32='; iCurve may not exceed self.getNCurves() (') && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))==typeof ($add34=self['getNCurves']()) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)))==typeof ($add36=')') && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36))));
				}
				else if ((($bool24=((($cmp21=iCurve)===($cmp22=$constant_int_0)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add39=(typeof ($add37='iCurve = ')==typeof ($add38=iCurve) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($add40='; iCurve may not be negative.') && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))));
				}
				internalIndex = self['internalCurveIndex'](iCurve);
				c = $m['Curve'](self, internalIndex);
				self['curves']['insert'](internalIndex, c);
				self['getXAxis']()['incrementCurves']();
				self['getYAxis']()['incrementCurves']();
				$iter2_iter = $p['range']((typeof ($add41=internalIndex)==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)), (($len4=$p['getattr'](self, 'curves')) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					(typeof ($1=$p['getattr'](self, 'curves')).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i))['incrementIndex']();
				}
				if ((($bool25=!$p['op_eq']($constant_int_0, self['plotPanel']['getRenderingPanelCount']())) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rpIndex = self['getRenderingPanelIndex'](internalIndex);
					self['plotPanel']['addGraphicsRenderingPanel'](rpIndex);
					self['plotPanel']['addAnnotationRenderingPanel'](rpIndex);
				}
				c['invalidate']();
				if ((($bool26=((($cmp23=self['getNCurves']())===($cmp24=$constant_int_0)?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setDefaultBorderColor'](c, (typeof ($sub35=self['getNCurves']())==typeof ($sub36=$constant_int_1) && (typeof $sub35=='number'||typeof $sub35=='string')?
						$sub35-$sub36:
						$p['op_sub']($sub35,$sub36)));
				}
				return null;
			}
	, 1, [null,null,['self'],['iCurve', null]]);
			$cls_definition['addCurve'] = $method;
			$method = $pyjs__bind_method2('clearCurves', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$sub37,iCurve,$sub38,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
				$iter3_iter = $p['range']((typeof ($sub37=self['getNCurves']())==typeof ($sub38=$constant_int_1) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)), (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13)), (typeof ($usub14=$constant_int_1)=='number'?
					-$usub14:
					$p['op_usub']($usub14)));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					iCurve = $iter3_nextval;
					self['removeCurve'](iCurve);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearCurves'] = $method;
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'backgroundColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBackgroundColor'] = $method;
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderColor'] = $method;
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderWidth'] = $method;
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'borderStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderStyle'] = $method;
			$method = $pyjs__bind_method2('getChartFootnotes', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'chartFootnotes');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChartFootnotes'] = $method;
			$method = $pyjs__bind_method2('getChartFootnotesLeftJustified', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'chartFootnotesLeftJustified');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChartFootnotesLeftJustified'] = $method;
			$method = $pyjs__bind_method2('getChartFootnotesThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var EXTRA_HEIGHT,$add44,$add46,DEF_HEIGHT,$add43,$mul2,$bool27,result,$mul3,$mul4,$add45,$bool29,$bool28,$mul1;
				result = $constant_int_0;
				EXTRA_HEIGHT = $constant_int_3;
				DEF_HEIGHT = $constant_int_1;
				if ((($bool27=$p['op_eq'](null, self['getChartFootnotes']())) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					result = $constant_int_0;
				}
				else if ((($bool28=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'footnotesThickness'))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28.__nonzero__=='function'?
								$bool28.__nonzero__() :
								(typeof $bool28.__len__=='function'?
									($bool28.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'footnotesThickness');
				}
				else if ((($bool29=$p['hasattr'](self['getChartFootnotes'](), 'getHTML')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					result = (typeof ($mul1=$m['DEFAULT_FOOTNOTES_THICKNESS'])==typeof ($mul2=(typeof ($add43=EXTRA_HEIGHT)==typeof ($add44=$m['GChartUtil']['htmlHeight'](self['getChartFootnotes']()['getHTML']())) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
				}
				else {
					result = (typeof ($mul3=$m['DEFAULT_FOOTNOTES_THICKNESS'])==typeof ($mul4=(typeof ($add45=DEF_HEIGHT)==typeof ($add46=EXTRA_HEIGHT) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChartFootnotesThickness'] = $method;
			$method = $pyjs__bind_method2('getChartTitle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'chartTitle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChartTitle'] = $method;
			$method = $pyjs__bind_method2('getChartTitleThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var EXTRA_HEIGHT,$add50,$add49,$add48,$add47,DEF_HEIGHT,$bool32,$bool30,$bool31,result,$mul8,$mul7,$mul6,$mul5;
				result = $constant_int_0;
				EXTRA_HEIGHT = $constant_int_3;
				DEF_HEIGHT = $constant_int_1;
				if ((($bool30=$p['op_eq'](null, self['getChartTitle']())) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $constant_int_0;
				}
				else if ((($bool31=!$p['op_eq']($m['NAI'], $p['getattr'](self, 'titleThickness'))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					result = $p['getattr'](self, 'titleThickness');
				}
				else if ((($bool32=$p['hasattr'](self['getChartTitle'](), 'getHTML')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($mul5=$m['DEFAULT_TITLE_THICKNESS'])==typeof ($mul6=(typeof ($add47=EXTRA_HEIGHT)==typeof ($add48=$m['GChartUtil']['htmlHeight'](self['getChartTitle']()['getHTML']())) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48))) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6));
				}
				else {
					result = (typeof ($mul7=$m['DEFAULT_TITLE_THICKNESS'])==typeof ($mul8=(typeof ($add49=EXTRA_HEIGHT)==typeof ($add50=DEF_HEIGHT) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50))) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChartTitleThickness'] = $method;
			$method = $pyjs__bind_method2('getClipToDecoratedChart', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'clipToDecoratedChart');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getClipToDecoratedChart'] = $method;
			$method = $pyjs__bind_method2('getClipToPlotArea', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'clipToPlotArea');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getClipToPlotArea'] = $method;
			$method = $pyjs__bind_method2('getClosestBrushTouchingPointNoCheck', function(x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dx,nCurves,dy,symType,result,$iter4_type,$sub40,$sub41,$sub42,$cmp26,$iter4_iter,$add52,onY2,iCurve,xPoint,$or7,$or6,$bool42,$bool41,$bool40,$sub39,dBest,$and4,$mul15,sym,$iter4_array,$and3,$mul9,yPoint,$add51,d,$mul16,c,$mul14,$mul13,$mul12,$mul11,$mul10,$iter4_nextval,$iter4_idx,$bool33,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,iClosest,$cmp25;
				result = null;
				if ((($bool34=((($bool33=$or6=$p['op_eq'](x, $m['NAI'])) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33.__nonzero__=='function'?
							$bool33.__nonzero__() :
							(typeof $bool33.__len__=='function'?
								($bool33.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or6:$p['op_eq'](y, $m['NAI']))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					return result;
				}
				dBest = $p['getattr']($m['Double'], 'MAX_VALUE');
				nCurves = self['getNCurves']();
				$iter4_iter = $p['range'](nCurves);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					iCurve = $iter4_nextval;
					c = self['getSystemCurve'](iCurve);
					if ((($bool36=!(($bool35=c['isVisible']()) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						continue;
					}
					sym = c['getSymbol']();
					if ((($bool40=((($bool38=$and3=!(($bool37=sym['getHoverAnnotationEnabled']()) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool39=sym['getHoverSelectionEnabled']()) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and3)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
							false :
							(typeof $bool40=='object'?
								(typeof $bool40.__nonzero__=='function'?
									$bool40.__nonzero__() :
									(typeof $bool40.__len__=='function'?
										($bool40.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					symType = sym['getSymbolType']();
					onY2 = c['onY2']();
					iClosest = c['getClosestTouchingPoint'](x, y);
					if ((($bool41=$p['op_eq']($m['NAI'], iClosest)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
							false :
							(typeof $bool41=='object'?
								(typeof $bool41.__nonzero__=='function'?
									$bool41.__nonzero__() :
									(typeof $bool41.__len__=='function'?
										($bool41.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					xPoint = symType['getCenterX']($p['getattr'](self, 'plotPanel'), sym, iClosest);
					yPoint = symType['getCenterY']($p['getattr'](self, 'plotPanel'), sym, iClosest, onY2);
					dx = (typeof ($mul9=$p['getattr'](sym, 'xScaleFactor'))==typeof ($mul10=(typeof ($sub39=x)==typeof ($sub40=xPoint) && (typeof $sub39=='number'||typeof $sub39=='string')?
						$sub39-$sub40:
						$p['op_sub']($sub39,$sub40))) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10));
					dy = (typeof ($mul11=$p['getattr'](sym, 'yScaleFactor'))==typeof ($mul12=(typeof ($sub41=y)==typeof ($sub42=yPoint) && (typeof $sub41=='number'||typeof $sub41=='string')?
						$sub41-$sub42:
						$p['op_sub']($sub41,$sub42))) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12));
					d = (typeof ($add51=(typeof ($mul13=dx)==typeof ($mul14=dx) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)))==typeof ($add52=(typeof ($mul15=dy)==typeof ($mul16=dy) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16))) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52));
					if ((($bool42=((($cmp25=d)===($cmp26=dBest)?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) < 1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
							false :
							(typeof $bool42=='object'?
								(typeof $bool42.__nonzero__=='function'?
									$bool42.__nonzero__() :
									(typeof $bool42.__len__=='function'?
										($bool42.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						dBest = d;
						result = c['getPoint'](iClosest);
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['getClosestBrushTouchingPointNoCheck'] = $method;
			$method = $pyjs__bind_method2('getClosestBrushTouchingPoint', function(xPlotArea, yPlotArea) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					xPlotArea = arguments[1];
					yPlotArea = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool44,$bool43,result;
				result = null;
				if ((($bool44=!(($bool43=(typeof isUpdateNeeded == "undefined"?$m.isUpdateNeeded:isUpdateNeeded)()) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44.__nonzero__=='function'?
								$bool44.__nonzero__() :
								(typeof $bool44.__len__=='function'?
									($bool44.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof getClosestBrushTouchingPointNoCheck == "undefined"?$m.getClosestBrushTouchingPointNoCheck:getClosestBrushTouchingPointNoCheck)(xPlotArea, yPlotArea);
				}
				return result;
			}
	, 1, [null,null,['self'],['xPlotArea'],['yPlotArea']]);
			$cls_definition['getClosestBrushTouchingPoint'] = $method;
			$method = $pyjs__bind_method2('getCurve', function(iCurve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iCurve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof iCurve == 'undefined') iCurve=arguments.callee.__args__[3][1];
				var result,$cmp27,$cmp28,$cmp29,$sub43,$sub44,$sub45,$sub46,$add64,$add61,$add60,$add63,$add62,$bool47,$bool46,$bool45,N,$bool48,$cmp32,$cmp31,$cmp30,$add53,$add54,$add55,$add56,$add57,$add58,$add59;
				if ((($bool45=$p['op_is'](iCurve, null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45.__nonzero__=='function'?
								$bool45.__nonzero__() :
								(typeof $bool45.__len__=='function'?
									($bool45.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					N = self['getNCurves']();
					if ((($bool46=((($cmp27=N)===($cmp28=$constant_int_1)?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
							false :
							(typeof $bool46=='object'?
								(typeof $bool46.__nonzero__=='function'?
									$bool46.__nonzero__() :
									(typeof $bool46.__len__=='function'?
										($bool46.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)('You must add at least 1 curve before invoking getCurve()'));
					}
					return self['getSystemCurve']((typeof ($sub43=N)==typeof ($sub44=$constant_int_1) && (typeof $sub43=='number'||typeof $sub43=='string')?
						$sub43-$sub44:
						$p['op_sub']($sub43,$sub44)));
				}
				if ((($bool47=((((($cmp29=iCurve)===($cmp30=self['getNCurves']())?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))))|1) == 1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47.__nonzero__=='function'?
								$bool47.__nonzero__() :
								(typeof $bool47.__len__=='function'?
									($bool47.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53='iCurve = ')==typeof ($add54=iCurve) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)))==typeof ($add56='; iCurve may not exceed self.getNCurves()-1 (') && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56)))==typeof ($add58=$p['str']((typeof ($sub45=self['getNCurves']())==typeof ($sub46=$constant_int_1) && (typeof $sub45=='number'||typeof $sub45=='string')?
						$sub45-$sub46:
						$p['op_sub']($sub45,$sub46)))) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58)))==typeof ($add60=')') && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60))));
				}
				else if ((($bool48=((($cmp31=iCurve)===($cmp32=$constant_int_0)?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48.__nonzero__=='function'?
								$bool48.__nonzero__() :
								(typeof $bool48.__len__=='function'?
									($bool48.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add63=(typeof ($add61='iCurve = ')==typeof ($add62=iCurve) && (typeof $add61=='number'||typeof $add61=='string')?
						$add61+$add62:
						$p['op_add']($add61,$add62)))==typeof ($add64='; iCurve may not be negative.') && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64))));
				}
				result = self['getSystemCurve'](iCurve);
				return result;
			}
	, 1, [null,null,['self'],['iCurve', null]]);
			$cls_definition['getCurve'] = $method;
			$method = $pyjs__bind_method2('getSystemCurve', function(iCurve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iCurve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var internalIndex,result,$4,$3;
				internalIndex = self['internalCurveIndex'](iCurve);
				result = (typeof ($3=$p['getattr'](self, 'curves')).__array != 'undefined'?
					((typeof $3.__array[$4=internalIndex]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(internalIndex));
				return result;
			}
	, 1, [null,null,['self'],['iCurve']]);
			$cls_definition['getSystemCurve'] = $method;
			$method = $pyjs__bind_method2('getCurveIndex', function(curve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					curve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var internalIndex,result;
				internalIndex = curve['getIndexOf']();
				result = self['externalCurveIndex'](internalIndex);
				return result;
			}
	, 1, [null,null,['self'],['curve']]);
			$cls_definition['getCurveIndex'] = $method;
			$method = $pyjs__bind_method2('getInternalCurveIndex', function(curve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					curve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = curve['getIndexOf']();
				return result;
			}
	, 1, [null,null,['self'],['curve']]);
			$cls_definition['getInternalCurveIndex'] = $method;
			$method = $pyjs__bind_method2('getRenderingPanelIndex', function(internalCurveIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					internalCurveIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add65,$add66,$bool49,$sub48,result,$cmp34,$cmp33,$sub47;
				result = $constant_int_0;
				if ((($bool49=((($cmp33=$m['N_PRE_SYSTEM_CURVES'])===($cmp34=internalCurveIndex)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) < 1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add65=(typeof ($sub47=internalCurveIndex)==typeof ($sub48=$m['N_PRE_SYSTEM_CURVES']) && (typeof $sub47=='number'||typeof $sub47=='string')?
						$sub47-$sub48:
						$p['op_sub']($sub47,$sub48)))==typeof ($add66=$constant_int_1) && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66));
				}
				return result;
			}
	, 1, [null,null,['self'],['internalCurveIndex']]);
			$cls_definition['getRenderingPanelIndex'] = $method;
			$method = $pyjs__bind_method2('getFontFamily', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fontFamily');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFontFamily'] = $method;
			$method = $pyjs__bind_method2('getGridColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,cGridlines;
				cGridlines = self['getSystemCurve']($m['XGRIDLINES_ID']);
				result = cGridlines['getSymbol']()['getBorderColor']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGridColor'] = $method;
			$method = $pyjs__bind_method2('getLegendBackgroundColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendBackgroundColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('getLegendBorderColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendBorderColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendBorderColor'] = $method;
			$method = $pyjs__bind_method2('getLegendBorderWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendBorderWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendBorderWidth'] = $method;
			$method = $pyjs__bind_method2('getLegendBorderStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendBorderStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendBorderStyle'] = $method;
			$method = $pyjs__bind_method2('getLegendFontColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendFontColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendFontColor'] = $method;
			$method = $pyjs__bind_method2('getLegendFontSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendFontSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendFontSize'] = $method;
			$method = $pyjs__bind_method2('getLegendFontStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendFontStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendFontStyle'] = $method;
			$method = $pyjs__bind_method2('getLegendFontWeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendFontWeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendFontWeight'] = $method;
			$method = $pyjs__bind_method2('getLegendThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool50,$bool51,$bool52,$and5,$and6,result,$cmp36,$cmp35;
				result = $constant_int_0;
				if ((($bool51=((($bool50=$and5=self['isLegendVisible']()) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp35=$constant_int_0)===($cmp36=self['getNVisibleCurvesOnLegend']())?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1):$and5)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool52=$p['op_eq']($m['NAI'], $p['getattr'](self, 'legendThickness'))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
							false :
							(typeof $bool52=='object'?
								(typeof $bool52.__nonzero__=='function'?
									$bool52.__nonzero__() :
									(typeof $bool52.__len__=='function'?
										($bool52.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = self['getDefaultLegendThickness']();
					}
					else {
						result = $p['getattr'](self, 'legendThickness');
					}
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendThickness'] = $method;
			$method = $pyjs__bind_method2('getNCurves', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub49,$len5,$sub50;
				return (typeof ($sub49=(($len5=$p['getattr'](self, 'curves')) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))))==typeof ($sub50=$m['N_SYSTEM_CURVES']) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNCurves'] = $method;
			$method = $pyjs__bind_method2('getPadding', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'padding');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPadding'] = $method;
			$method = $pyjs__bind_method2('getPlotAreaBackgroundColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				result = c['getSymbol']()['getBackgroundColor']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlotAreaBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('getPlotAreaBorderColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				result = c['getSymbol']()['getBorderColor']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlotAreaBorderColor'] = $method;
			$method = $pyjs__bind_method2('getPlotAreaBorderWidth', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				result = c['getSymbol']()['getBorderWidth']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlotAreaBorderWidth'] = $method;
			$method = $pyjs__bind_method2('getPlotAreaBorderStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				result = c['getSymbol']()['getBorderStyle']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlotAreaBorderStyle'] = $method;
			$method = $pyjs__bind_method2('getPlotAreaImageURL', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,result;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				result = c['getSymbol']()['getImageURL']();
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlotAreaImageURL'] = $method;
			$method = $pyjs__bind_method2('getOptimizeForMemory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'optimizeForMemory');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOptimizeForMemory'] = $method;
			$method = $pyjs__bind_method2('getShowOffChartPoints', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool53;
				return !(($bool53=(typeof getClipToPlotArea == "undefined"?$m.getClipToPlotArea:getClipToPlotArea)()) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShowOffChartPoints'] = $method;
			$method = $pyjs__bind_method2('getShowOffDecoratedChartGlyphs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool54;
				return !(($bool54=(typeof getClipToDecoratedChart == "undefined"?$m.getClipToDecoratedChart:getClipToDecoratedChart)()) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54.__nonzero__=='function'?
							$bool54.__nonzero__() :
							(typeof $bool54.__len__=='function'?
								($bool54.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShowOffDecoratedChartGlyphs'] = $method;
			$method = $pyjs__bind_method2('getBlankImageURL', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool55;
				if ((($bool55=$p['getattr'](self, 'blankImageURL')) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55.__nonzero__=='function'?
								$bool55.__nonzero__() :
								(typeof $bool55.__len__=='function'?
									($bool55.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $p['getattr'](self, 'blankImageURL');
				}
				return $m['DEFAULT_BLANK_IMAGE_URL_FULLPATH'];
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBlankImageURL'] = $method;
			$method = $pyjs__bind_method2('getHoverParameterInterpreter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverParameterInterpreter');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverParameterInterpreter'] = $method;
			$method = $pyjs__bind_method2('getHoverTouchingEnabled', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'hoverTouchingEnabled');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHoverTouchingEnabled'] = $method;
			$method = $pyjs__bind_method2('getXAxis', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'xAxis');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getXAxis'] = $method;
			$method = $pyjs__bind_method2('getXChartSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'xChartSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getXChartSize'] = $method;
			$method = $pyjs__bind_method2('getXChartSizeDecorated', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add76,$add77,$add67,$add75,$add72,$add73,$add70,$add71,$add83,$add82,$add80,$add69,$add68,$add78,$add79,$add74,$add84,$add81,result;
				result = (typeof ($add83=(typeof ($add81=(typeof ($add79=(typeof ($add77=(typeof ($add75=(typeof ($add73=(typeof ($add71=(typeof ($add69=(typeof ($add67=self['getXChartSize']())==typeof ($add68=self['getYAxis']()['getAxisLabelThickness']()) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($add70=self['getYAxis']()['getTickLabelThickness']()) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($add72=self['getYAxis']()['getTickSpace']()) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($add74=self['getYAxis']()['getTickLabelPadding']()) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74)))==typeof ($add76=self['getY2Axis']()['getAxisLabelThickness']()) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76)))==typeof ($add78=self['getY2Axis']()['getTickLabelThickness']()) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78)))==typeof ($add80=self['getY2Axis']()['getTickSpace']()) && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80)))==typeof ($add82=self['getYAxis']()['getTickLabelPadding']()) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82)))==typeof ($add84=self['getLegendThickness']()) && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84));
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getXChartSizeDecorated'] = $method;
			$method = $pyjs__bind_method2('getY2Axis', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'y2Axis');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getY2Axis'] = $method;
			$method = $pyjs__bind_method2('getYAxis', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'yAxis');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getYAxis'] = $method;
			$method = $pyjs__bind_method2('getYChartSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'yChartSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getYChartSize'] = $method;
			$method = $pyjs__bind_method2('getYChartSizeDecorated', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,$add88,$add94,$add90,$add87,$add86,$add85,$add91,$add92,$add95,$add93,$add96,result;
				result = (typeof ($add95=(typeof ($add93=(typeof ($add91=(typeof ($add89=(typeof ($add87=(typeof ($add85=self['getYChartSize']())==typeof ($add86=self['getXAxis']()['getAxisLabelThickness']()) && (typeof $add85=='number'||typeof $add85=='string')?
					$add85+$add86:
					$p['op_add']($add85,$add86)))==typeof ($add88=self['getXAxis']()['getTickLabelThickness']()) && (typeof $add87=='number'||typeof $add87=='string')?
					$add87+$add88:
					$p['op_add']($add87,$add88)))==typeof ($add90=self['getXAxis']()['getTickSpace']()) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90)))==typeof ($add92=self['getXAxis']()['getTickLabelPadding']()) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)))==typeof ($add94=self['getChartTitleThickness']()) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94)))==typeof ($add96=self['getChartFootnotesThickness']()) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96));
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getYChartSizeDecorated'] = $method;
			$method = $pyjs__bind_method2('hasY2Axis', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp37,result,$cmp38;
				result = ((($cmp37=self['getY2Axis']()['getNCurvesVisibleOnAxis']())===($cmp38=$constant_int_0)?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == 1);
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hasY2Axis'] = $method;
			$method = $pyjs__bind_method2('hasYAxis', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp40,$cmp39,result;
				result = ((($cmp39=self['getYAxis']()['getNCurvesVisibleOnAxis']())===($cmp40=$constant_int_0)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == 1);
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hasYAxis'] = $method;
			$method = $pyjs__bind_method2('isLegendVisible', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendVisible');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isLegendVisible'] = $method;
			$method = $pyjs__bind_method2('isUpdateNeeded', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool56,$bool57,$or9,$or8,result;
				result = ((($bool56=$or8=$p['getattr'](self, 'chartDecorationsChanged')) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:!(($bool57=self['plotPanel']['isValidated']()) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isUpdateNeeded'] = $method;
			$method = $pyjs__bind_method2('removeCurve', function(iCurve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iCurve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$and8,$bool60,$iter5_array,$bool58,$bool59,$bool61,$bool62,rpIndex,$iter5_type,$cmp42,$cmp43,$sub52,$cmp41,$cmp44,$add104,$add107,$bool64,$iter5_idx,$add101,$add100,$add103,$add102,$add98,$add99,$sub51,$add106,$add108,$add97,$bool63,$and7,$8,$6,$7,$5,internalIndex,c,i,$len6,$iter5_iter,$add105;
				if ((($bool58=((((($cmp41=iCurve)===($cmp42=self['getNCurves']())?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))))|1) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58.__nonzero__=='function'?
								$bool58.__nonzero__() :
								(typeof $bool58.__len__=='function'?
									($bool58.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add103=(typeof ($add101=(typeof ($add99=(typeof ($add97='iCurve = ')==typeof ($add98=iCurve) && (typeof $add97=='number'||typeof $add97=='string')?
						$add97+$add98:
						$p['op_add']($add97,$add98)))==typeof ($add100='; iCurve may not exceed self.getNCurves()-1 (') && (typeof $add99=='number'||typeof $add99=='string')?
						$add99+$add100:
						$p['op_add']($add99,$add100)))==typeof ($add102=(typeof ($sub51=self['getNCurves']())==typeof ($sub52=$constant_int_1) && (typeof $sub51=='number'||typeof $sub51=='string')?
						$sub51-$sub52:
						$p['op_sub']($sub51,$sub52))) && (typeof $add101=='number'||typeof $add101=='string')?
						$add101+$add102:
						$p['op_add']($add101,$add102)))==typeof ($add104=')') && (typeof $add103=='number'||typeof $add103=='string')?
						$add103+$add104:
						$p['op_add']($add103,$add104))));
				}
				else if ((($bool59=((($cmp43=iCurve)===($cmp44=$constant_int_0)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59.__nonzero__=='function'?
								$bool59.__nonzero__() :
								(typeof $bool59.__len__=='function'?
									($bool59.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)((typeof ($add107=(typeof ($add105='iCurve = ')==typeof ($add106=iCurve) && (typeof $add105=='number'||typeof $add105=='string')?
						$add105+$add106:
						$p['op_add']($add105,$add106)))==typeof ($add108='; iCurve may not be negative.') && (typeof $add107=='number'||typeof $add107=='string')?
						$add107+$add108:
						$p['op_add']($add107,$add108))));
				}
				self['invalidateDependentSlices'](iCurve);
				if ((($bool61=((($bool60=$and7=!$p['op_is']($p['getattr']($p['getattr'](self, 'plotPanel'), 'touchedPoint'), null)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
					false :
					(typeof $bool60=='object'?
						(typeof $bool60.__nonzero__=='function'?
							$bool60.__nonzero__() :
							(typeof $bool60.__len__=='function'?
								($bool60.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](self['plotPanel']['touchedPoint']['getParent'](), self['getSystemCurve'](iCurve)):$and7)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61.__nonzero__=='function'?
								$bool61.__nonzero__() :
								(typeof $bool61.__len__=='function'?
									($bool61.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['plotPanel']['touch'](null);
				}
				internalIndex = self['internalCurveIndex'](iCurve);
				if ((($bool62=!$p['op_eq']($constant_int_0, self['plotPanel']['getRenderingPanelCount']())) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62.__nonzero__=='function'?
								$bool62.__nonzero__() :
								(typeof $bool62.__len__=='function'?
									($bool62.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rpIndex = (typeof getRenderingPanelIndex == "undefined"?$m.getRenderingPanelIndex:getRenderingPanelIndex)(internalIndex);
					self['plotPanel']['removeGraphicsRenderingPanel'](rpIndex);
					self['plotPanel']['removeAnnotationRenderingPanel'](rpIndex);
				}
				c = (typeof ($5=$p['getattr'](self, 'curves')).__array != 'undefined'?
					((typeof $5.__array[$6=internalIndex]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(internalIndex));
				if ((($bool63=c['isVisible']()) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m.getXAxis()['decrementCurves']();
					if ((($bool64=$p['op_eq'](c['getYAxis'](), $m['Y_AXIS'])) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
							false :
							(typeof $bool64=='object'?
								(typeof $bool64.__nonzero__=='function'?
									$bool64.__nonzero__() :
									(typeof $bool64.__len__=='function'?
										($bool64.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$m.getYAxis()['decrementCurves']();
					}
					else {
						$m.getY2Axis()['decrementCurves']();
					}
				}
				c['clearIndex']();
				self['curves']['pop'](internalIndex);
				$iter5_iter = $p['range'](internalIndex, (($len6=$p['getattr'](self, 'curves')) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))));
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					(typeof ($7=$p['getattr'](self, 'curves')).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i))['decrementIndex']();
				}
				return null;
			}
	, 1, [null,null,['self'],['iCurve']]);
			$cls_definition['removeCurve'] = $method;
			$method = $pyjs__bind_method2('removeCurve', function(curve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					curve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$bool65,$bool67,$bool66,$cmp46,$cmp45;
				if ((($bool65=$p['op_eq'](null, curve)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65.__nonzero__=='function'?
								$bool65.__nonzero__() :
								(typeof $bool65.__len__=='function'?
									($bool65.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('Curve cannot be None.'));
				}
				index = (typeof getCurveIndex == "undefined"?$m.getCurveIndex:getCurveIndex)(curve);
				if ((($bool66=$p['op_eq'](index, $m['NAI'])) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66.__nonzero__=='function'?
								$bool66.__nonzero__() :
								(typeof $bool66.__len__=='function'?
									($bool66.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)("Curve is not one of this GChart's curves."));
				}
				if ((($bool67=((($cmp45=index)===($cmp46=$constant_int_0)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67.__nonzero__=='function'?
								$bool67.__nonzero__() :
								(typeof $bool67.__len__=='function'?
									($bool67.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('System curves cannot be removed (this should be impossible; a GChart bug is likely.)'));
				}
				else {
					(typeof removeCurve == "undefined"?$m.removeCurve:removeCurve)(index);
				}
				return null;
			}
	, 1, [null,null,['self'],['curve']]);
			$cls_definition['removeCurve'] = $method;
			$method = $pyjs__bind_method2('setBackgroundColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColor', cssColor) : $p['setattr'](self, 'backgroundColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setBlankImageURL', function(_blankImageURL) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					_blankImageURL = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool68;
				if ((($bool68=!$p['op_eq'](_blankImageURL, $p['getattr'](self, 'blankImageURL'))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68.__nonzero__=='function'?
								$bool68.__nonzero__() :
								(typeof $bool68.__len__=='function'?
									($bool68.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blankImageURL', _blankImageURL) : $p['setattr'](self, 'blankImageURL', _blankImageURL); 
				}
				return null;
			}
	, 1, [null,null,['self'],['_blankImageURL']]);
			$cls_definition['setBlankImageURL'] = $method;
			$method = $pyjs__bind_method2('setHoverParameterInterpreter', function(hpi) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hpi = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverParameterInterpreter', hpi) : $p['setattr'](self, 'hoverParameterInterpreter', hpi); 
				return null;
			}
	, 1, [null,null,['self'],['hpi']]);
			$cls_definition['setHoverParameterInterpreter'] = $method;
			$method = $pyjs__bind_method2('setHoverTouchingEnabled', function(hoverTouchingEnabled) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hoverTouchingEnabled = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hoverTouchingEnabled', hoverTouchingEnabled) : $p['setattr'](self, 'hoverTouchingEnabled', hoverTouchingEnabled); 
				return null;
			}
	, 1, [null,null,['self'],['hoverTouchingEnabled']]);
			$cls_definition['setHoverTouchingEnabled'] = $method;
			$method = $pyjs__bind_method2('setBorderColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool69,$bool70,$or11,$or10;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				if ((($bool70=((($bool69=$or10=$p['op_is']($p['getattr'](self, 'borderColor'), null)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or10:$p['op_eq']($p['getattr'](self, 'borderColor'), $m['TRANSPARENT_BORDER_COLOR']))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
						false :
						(typeof $bool70=='object'?
							(typeof $bool70.__nonzero__=='function'?
								$bool70.__nonzero__() :
								(typeof $bool70.__len__=='function'?
									($bool70.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('None and TRANSPARENT_BORDER_COLOR are not allowed. This method requires a valid CSS color specification String.'));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColor', cssColor) : $p['setattr'](self, 'borderColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderStyle', borderStyle) : $p['setattr'](self, 'borderStyle', borderStyle); 
				return null;
			}
	, 1, [null,null,['self'],['borderStyle']]);
			$cls_definition['setBorderStyle'] = $method;
			$method = $pyjs__bind_method2('setBorderWidth', function(cssWidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssWidth = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderWidth', cssWidth) : $p['setattr'](self, 'borderWidth', cssWidth); 
				return null;
			}
	, 1, [null,null,['self'],['cssWidth']]);
			$cls_definition['setBorderWidth'] = $method;
			$method = $pyjs__bind_method2('setChartFootnotes', function(html) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				(typeof setChartFootnotes == "undefined"?$m.setChartFootnotes:setChartFootnotes)($m['HTML'](html));
				return null;
			}
	, 1, [null,null,['self'],['html']]);
			$cls_definition['setChartFootnotes'] = $method;
			$method = $pyjs__bind_method2('setChartFootnotes', function(chartFootnotes) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					chartFootnotes = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartFootnotes', chartFootnotes) : $p['setattr'](self, 'chartFootnotes', chartFootnotes); 
				return null;
			}
	, 1, [null,null,['self'],['chartFootnotes']]);
			$cls_definition['setChartFootnotes'] = $method;
			$method = $pyjs__bind_method2('setChartFootnotesLeftJustified', function(footnotesLeftJustified) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					footnotesLeftJustified = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartFootnotesLeftJustified', footnotesLeftJustified) : $p['setattr'](self, 'chartFootnotesLeftJustified', footnotesLeftJustified); 
				return null;
			}
	, 1, [null,null,['self'],['footnotesLeftJustified']]);
			$cls_definition['setChartFootnotesLeftJustified'] = $method;
			$method = $pyjs__bind_method2('setChartFootnotesThickness', function(thickness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					thickness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('footnotesThickness', thickness) : $p['setattr'](self, 'footnotesThickness', thickness); 
				return null;
			}
	, 1, [null,null,['self'],['thickness']]);
			$cls_definition['setChartFootnotesThickness'] = $method;
			$method = $pyjs__bind_method2('setChartSize', function(xChartSize, yChartSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					xChartSize = arguments[1];
					yChartSize = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setXChartSize'](xChartSize);
				self['setYChartSize'](yChartSize);
				return null;
			}
	, 1, [null,null,['self'],['xChartSize'],['yChartSize']]);
			$cls_definition['setChartSize'] = $method;
			$method = $pyjs__bind_method2('setChartTitle', function(chartTitle) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					chartTitle = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool71;
				if ((($bool71=$p['isinstance'](chartTitle, $p['basestring'])) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71.__nonzero__=='function'?
								$bool71.__nonzero__() :
								(typeof $bool71.__len__=='function'?
									($bool71.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					chartTitle = $m['HTML'](chartTitle);
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartTitle', chartTitle) : $p['setattr'](self, 'chartTitle', chartTitle); 
				return null;
			}
	, 1, [null,null,['self'],['chartTitle']]);
			$cls_definition['setChartTitle'] = $method;
			$method = $pyjs__bind_method2('setChartTitleThickness', function(thickness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					thickness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('titleThickness', thickness) : $p['setattr'](self, 'titleThickness', thickness); 
				return null;
			}
	, 1, [null,null,['self'],['thickness']]);
			$cls_definition['setChartTitleThickness'] = $method;
			$method = $pyjs__bind_method2('setClipToDecoratedChart', function(clipToDecoratedChart) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					clipToDecoratedChart = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				(typeof invalidateAccessibleCurves == "undefined"?$m.invalidateAccessibleCurves:invalidateAccessibleCurves)();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clipToDecoratedChart', clipToDecoratedChart) : $p['setattr'](self, 'clipToDecoratedChart', clipToDecoratedChart); 
				return null;
			}
	, 1, [null,null,['self'],['clipToDecoratedChart']]);
			$cls_definition['setClipToDecoratedChart'] = $method;
			$method = $pyjs__bind_method2('setClipToPlotArea', function(clipToPlotArea) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					clipToPlotArea = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['invalidateAccessibleCurves']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clipToPlotArea', clipToPlotArea) : $p['setattr'](self, 'clipToPlotArea', clipToPlotArea); 
				return null;
			}
	, 1, [null,null,['self'],['clipToPlotArea']]);
			$cls_definition['setClipToPlotArea'] = $method;
			$method = $pyjs__bind_method2('setDefaultSymbolBorderColors', function(defaultBorderColors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					defaultBorderColors = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool72,$bool73,$cmp48,$cmp47;
				if ((($bool72=$p['op_eq'](null, defaultBorderColors)) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72.__nonzero__=='function'?
								$bool72.__nonzero__() :
								(typeof $bool72.__len__=='function'?
									($bool72.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('defaultBorderColors array cannot be None.'));
				}
				else if ((($bool73=((($cmp47=$p['getattr'](defaultBorderColors, 'length'))===($cmp48=$constant_int_1)?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == -1)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
						false :
						(typeof $bool73=='object'?
							(typeof $bool73.__nonzero__=='function'?
								$bool73.__nonzero__() :
								(typeof $bool73.__len__=='function'?
									($bool73.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('defaultBorderColors array must have at least 1 element.'));
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('defaultSymbolBorderColors', defaultBorderColors) : $p['setattr'](self, 'defaultSymbolBorderColors', defaultBorderColors); 
				}
				return null;
			}
	, 1, [null,null,['self'],['defaultBorderColors']]);
			$cls_definition['setDefaultSymbolBorderColors'] = $method;
			$method = $pyjs__bind_method2('setFontFamily', function(fontFamily) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fontFamily = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontFamily', fontFamily) : $p['setattr'](self, 'fontFamily', fontFamily); 
				return null;
			}
	, 1, [null,null,['self'],['fontFamily']]);
			$cls_definition['setFontFamily'] = $method;
			$method = $pyjs__bind_method2('setGridColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['getSystemCurve']($m['XGRIDLINES_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['YGRIDLINES_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['Y2GRIDLINES_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['XAXIS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['YAXIS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['Y2AXIS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['XTICKS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['YTICKS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				self['getSystemCurve']($m['Y2TICKS_ID'])['getSymbol']()['setBorderColor'](cssColor);
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setGridColor'] = $method;
			$method = $pyjs__bind_method2('setLegendBackgroundColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBackgroundColor', cssColor) : $p['setattr'](self, 'legendBackgroundColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setLegendBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setLegendBorderColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderColor', cssColor) : $p['setattr'](self, 'legendBorderColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setLegendBorderColor'] = $method;
			$method = $pyjs__bind_method2('setLegendBorderWidth', function(width) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderWidth', width) : $p['setattr'](self, 'legendBorderWidth', width); 
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setLegendBorderWidth'] = $method;
			$method = $pyjs__bind_method2('setLegendBorderStyle', function(borderStyle) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendBorderStyle', borderStyle) : $p['setattr'](self, 'legendBorderStyle', borderStyle); 
				return null;
			}
	, 1, [null,null,['self'],['borderStyle']]);
			$cls_definition['setLegendBorderStyle'] = $method;
			$method = $pyjs__bind_method2('setLegendFontColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontColor', cssColor) : $p['setattr'](self, 'legendFontColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setLegendFontColor'] = $method;
			$method = $pyjs__bind_method2('setLegendFontSize', function(legendFontSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					legendFontSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontSize', legendFontSize) : $p['setattr'](self, 'legendFontSize', legendFontSize); 
				return null;
			}
	, 1, [null,null,['self'],['legendFontSize']]);
			$cls_definition['setLegendFontSize'] = $method;
			$method = $pyjs__bind_method2('setLegendFontStyle', function(cssStyle) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontStyle', cssStyle) : $p['setattr'](self, 'legendFontStyle', cssStyle); 
				return null;
			}
	, 1, [null,null,['self'],['cssStyle']]);
			$cls_definition['setLegendFontStyle'] = $method;
			$method = $pyjs__bind_method2('setLegendFontWeight', function(cssWeight) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendFontWeight', cssWeight) : $p['setattr'](self, 'legendFontWeight', cssWeight); 
				return null;
			}
	, 1, [null,null,['self'],['cssWeight']]);
			$cls_definition['setLegendFontWeight'] = $method;
			$method = $pyjs__bind_method2('setLegendThickness', function(legendThickness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					legendThickness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendThickness', legendThickness) : $p['setattr'](self, 'legendThickness', legendThickness); 
				return null;
			}
	, 1, [null,null,['self'],['legendThickness']]);
			$cls_definition['setLegendThickness'] = $method;
			$method = $pyjs__bind_method2('setLegendVisible', function(legendVisible) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					legendVisible = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('legendVisible', legendVisible) : $p['setattr'](self, 'legendVisible', legendVisible); 
				return null;
			}
	, 1, [null,null,['self'],['legendVisible']]);
			$cls_definition['setLegendVisible'] = $method;
			$method = $pyjs__bind_method2('setOptimizeForMemory', function(optimizeForMemory) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					optimizeForMemory = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('optimizeForMemory', optimizeForMemory) : $p['setattr'](self, 'optimizeForMemory', optimizeForMemory); 
				return null;
			}
	, 1, [null,null,['self'],['optimizeForMemory']]);
			$cls_definition['setOptimizeForMemory'] = $method;
			$method = $pyjs__bind_method2('setPadding', function(cssPadding) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssPadding = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('padding', cssPadding) : $p['setattr'](self, 'padding', cssPadding); 
				return null;
			}
	, 1, [null,null,['self'],['cssPadding']]);
			$cls_definition['setPadding'] = $method;
			$method = $pyjs__bind_method2('setPlotAreaBackgroundColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setBackgroundColor'](cssColor);
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setPlotAreaBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setPlotAreaBorderColor', function(cssColor) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setBorderColor'](cssColor);
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setPlotAreaBorderColor'] = $method;
			$method = $pyjs__bind_method2('setPlotAreaBorderWidth', function(width) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setBorderWidth'](width);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setPlotAreaBorderWidth'] = $method;
			$method = $pyjs__bind_method2('setPlotAreaBorderStyle', function(borderStyle) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setBorderStyle'](borderStyle);
				return null;
			}
	, 1, [null,null,['self'],['borderStyle']]);
			$cls_definition['setPlotAreaBorderStyle'] = $method;
			$method = $pyjs__bind_method2('setPlotAreaImageURL', function(imageURL) {
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
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setImageURL'](imageURL);
				return null;
			}
	, 1, [null,null,['self'],['imageURL']]);
			$cls_definition['setPlotAreaImageURL'] = $method;
			$method = $pyjs__bind_method2('setShowOffChartPoints', function(showOffChartPoints) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					showOffChartPoints = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool74;
				self['setClipToPlotArea'](!(($bool74=showOffChartPoints) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
				return null;
			}
	, 1, [null,null,['self'],['showOffChartPoints']]);
			$cls_definition['setShowOffChartPoints'] = $method;
			$method = $pyjs__bind_method2('setShowOffDecoratedChartGlyphs', function(showOffDecoratedChartGlyphs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					showOffDecoratedChartGlyphs = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool75;
				self['setClipToDecoratedChart'](!(($bool75=showOffDecoratedChartGlyphs) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75.__nonzero__=='function'?
							$bool75.__nonzero__() :
							(typeof $bool75.__len__=='function'?
								($bool75.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
				return null;
			}
	, 1, [null,null,['self'],['showOffDecoratedChartGlyphs']]);
			$cls_definition['setShowOffDecoratedChartGlyphs'] = $method;
			$method = $pyjs__bind_method2('getTouchedCurve', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool76,result;
				result = null;
				if ((($bool76=!$p['op_eq'](null, self['getTouchedPoint']())) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
						false :
						(typeof $bool76=='object'?
							(typeof $bool76.__nonzero__=='function'?
								$bool76.__nonzero__() :
								(typeof $bool76.__len__=='function'?
									($bool76.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = self['getTouchedPoint']()['getParent']();
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTouchedCurve'] = $method;
			$method = $pyjs__bind_method2('getTouchedPoint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'plotPanel'), 'touchedPoint');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTouchedPoint'] = $method;
			$method = $pyjs__bind_method2('setXChartSize', function(xChartSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					xChartSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xChartSize', xChartSize) : $p['setattr'](self, 'xChartSize', xChartSize); 
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setWidth'](xChartSize);
				return null;
			}
	, 1, [null,null,['self'],['xChartSize']]);
			$cls_definition['setXChartSize'] = $method;
			$method = $pyjs__bind_method2('setYChartSize', function(yChartSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					yChartSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yChartSize', yChartSize) : $p['setattr'](self, 'yChartSize', yChartSize); 
				c = self['getSystemCurve']($m['PLOTAREA_ID']);
				c['getSymbol']()['setHeight'](yChartSize);
				return null;
			}
	, 1, [null,null,['self'],['yChartSize']]);
			$cls_definition['setYChartSize'] = $method;
			$method = $pyjs__bind_method2('touch', function(pointToTouch) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pointToTouch = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['plotPanel']['touch'](pointToTouch);
				return null;
			}
	, 1, [null,null,['self'],['pointToTouch']]);
			$cls_definition['touch'] = $method;
			$method = $pyjs__bind_method2('update', function(option) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					option = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof option == 'undefined') option=arguments.callee.__args__[3][1];
				var $bool81,$bool80,$bool78,$bool79,$bool77;
				if ((($bool77=$p['op_is'](option, null)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
						false :
						(typeof $bool77=='object'?
							(typeof $bool77.__nonzero__=='function'?
								$bool77.__nonzero__() :
								(typeof $bool77.__len__=='function'?
									($bool77.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool78=self['getHoverTouchingEnabled']()) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
							false :
							(typeof $bool78=='object'?
								(typeof $bool78.__nonzero__=='function'?
									$bool78.__nonzero__() :
									(typeof $bool78.__len__=='function'?
										($bool78.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						option = $p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_UPDATED');
					}
					else {
						option = $p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED');
					}
				}
				self['assembleChart']();
				if ((($bool79=$p['op_eq']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED'), option)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79.__nonzero__=='function'?
								$bool79.__nonzero__() :
								(typeof $bool79.__len__=='function'?
									($bool79.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['plotPanel']['touch']($p['getattr']($p['getattr'](self, 'plotPanel'), 'touchedPoint'));
				}
				else if ((($bool80=$p['op_eq']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_CLEARED'), option)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80.__nonzero__=='function'?
								$bool80.__nonzero__() :
								(typeof $bool80.__len__=='function'?
									($bool80.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['plotPanel']['touch'](null);
				}
				else if ((($bool81=$p['op_eq']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_UPDATED'), option)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
						false :
						(typeof $bool81=='object'?
							(typeof $bool81.__nonzero__=='function'?
								$bool81.__nonzero__() :
								(typeof $bool81.__len__=='function'?
									($bool81.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['plotPanel']['retouchObjectAtMousePosition']();
				}
				self['assembleChart']();
				return null;
			}
	, 1, [null,null,['self'],['option', null]]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('assembleChart', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool83,$bool82,$bool87,$bool86,$bool85,$bool84,$bool88,$or17,$or15,$or14,$and10,$or16,$or13,$or12,$and9;
				if ((($bool85=((($bool82=$or12=$p['getattr'](self, 'chartDecorationsChanged')) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82.__nonzero__=='function'?
							$bool82.__nonzero__() :
							(typeof $bool82.__len__=='function'?
								($bool82.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or12:((($bool83=$or13=self['xAxis']['limitsChanged']()) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
					false :
					(typeof $bool83=='object'?
						(typeof $bool83.__nonzero__=='function'?
							$bool83.__nonzero__() :
							(typeof $bool83.__len__=='function'?
								($bool83.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:((($bool84=$or14=self['yAxis']['limitsChanged']()) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
					false :
					(typeof $bool84=='object'?
						(typeof $bool84.__nonzero__=='function'?
							$bool84.__nonzero__() :
							(typeof $bool84.__len__=='function'?
								($bool84.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or14:self['y2Axis']['limitsChanged']())))) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
						false :
						(typeof $bool85=='object'?
							(typeof $bool85.__nonzero__=='function'?
								$bool85.__nonzero__() :
								(typeof $bool85.__len__=='function'?
									($bool85.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['plotPanel']['reset']($p['getattr'](self, 'xChartSize'), $p['getattr'](self, 'yChartSize'), self['hasYAxis'](), self['hasY2Axis'](), $p['getattr'](self, 'xAxis'), $p['getattr'](self, 'yAxis'), $p['getattr'](self, 'y2Axis'));
					$m['GChartUtil']['setFontFamily'](self, self['getFontFamily']());
					$m['GChartUtil']['setBackgroundColor'](self, self['getBackgroundColor']());
					$m['GChartUtil']['setBorderColor'](self, self['getBorderColor']());
					$m['GChartUtil']['setBorderStyle'](self, self['getBorderStyle']());
					$m['GChartUtil']['setBorderWidth'](self, self['getBorderWidth']());
					$m['GChartUtil']['setPadding'](self, self['getPadding']());
					$m['GChartUtil']['setOverflow'](self, ((($bool87=$or16=((($bool86=$and9=self['getClipToDecoratedChart']()) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
						false :
						(typeof $bool86=='object'?
							(typeof $bool86.__nonzero__=='function'?
								$bool86.__nonzero__() :
								(typeof $bool86.__len__=='function'?
									($bool86.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?'hidden':$and9)) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87.__nonzero__=='function'?
								$bool87.__nonzero__() :
								(typeof $bool87.__len__=='function'?
									($bool87.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or16:'visible'));
					self['setPixelSize'](self['plotPanel']['getXChartSizeDecoratedQuickly'](), self['plotPanel']['getYChartSizeDecoratedQuickly']());
					self['updateDecorations'](self['plotPanel']['getXChartSizeDecoratedQuickly']());
					self['xAxis']['rememberLimits']();
					self['yAxis']['rememberLimits']();
					self['y2Axis']['rememberLimits']();
					self['invalidateEveryCurve']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chartDecorationsChanged', false) : $p['setattr'](self, 'chartDecorationsChanged', false); 
				}
				self['realizePlotPanel']();
				if ((($bool88=!$p['op_eq']($p['getattr'](self, 'plotPanel'), self['chartPanel']['getWidget']())) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
						false :
						(typeof $bool88=='object'?
							(typeof $bool88.__nonzero__=='function'?
								$bool88.__nonzero__() :
								(typeof $bool88.__len__=='function'?
									($bool88.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['chartPanel']['add']($p['getattr'](self, 'plotPanel'));
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'visibility', 'visible');
				}
				else {
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'visibility', 'hidden');
					$m['DOM']['setStyleAttribute'](self['getElement'](), 'visibility', 'visible');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['assembleChart'] = $method;
			$method = $pyjs__bind_method2('createLegend', function(pp) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_type,nCurves,$add110,result,$iter6_iter,$iter6_nextval,$div15,$$label,$bool89,$iter6_idx,$add109,$and12,$iter6_array,$and11,icon,$bool90,$bool91,c,i,iVisible,symBorderFraction,$div16;
				result = $m['Grid'](self['getNVisibleCurvesOnLegend'](), $constant_int_2);
				iVisible = $constant_int_0;
				if ((($bool89=$p['op_eq']($m['TRANSPARENT_BORDER_COLOR'], self['getLegendBorderColor']())) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89.__nonzero__=='function'?
								$bool89.__nonzero__() :
								(typeof $bool89.__len__=='function'?
									($bool89.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['GChartUtil']['setBorderWidth'](result, $constant_int_0);
					$m['GChartUtil']['setBorderColor'](result, 'transparent');
				}
				else {
					$m['GChartUtil']['setBorderWidth'](result, $p['abs'](self['getLegendBorderWidth']()));
					$m['GChartUtil']['setBorderColor'](result, self['getLegendBorderColor']());
				}
				$m['GChartUtil']['setBorderStyle'](result, self['getLegendBorderStyle']());
				$m['GChartUtil']['setBackgroundColor'](result, self['getLegendBackgroundColor']());
				nCurves = self['getNCurves']();
				$iter6_iter = $p['range'](nCurves);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool91=((($bool90=$and11=c['isVisible']()) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
						false :
						(typeof $bool90=='object'?
							(typeof $bool90.__nonzero__=='function'?
								$bool90.__nonzero__() :
								(typeof $bool90.__len__=='function'?
									($bool90.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq'](c['getLegendLabel'](), null):$and11)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
							false :
							(typeof $bool91=='object'?
								(typeof $bool91.__nonzero__=='function'?
									$bool91.__nonzero__() :
									(typeof $bool91.__len__=='function'?
										($bool91.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						symBorderFraction = (typeof ($div15=c['getSymbol']()['getBorderWidth']())==typeof ($div16=$p['max']($p['max'](1.0, c['getSymbol']()['getFillThickness']()), $p['max'](c['getSymbol']()['getWidth'](pp), c['getSymbol']()['getHeight'](pp, c['onY2']())))) && typeof $div15=='number' && $div16 !== 0?
							$div15/$div16:
							$p['op_div']($div15,$div16));
						icon = c['getSymbol']()['getSymbolType']()['createIconImage'](c['getSymbol'](), self['getLegendFontSize'](), symBorderFraction);
						result['setWidget'](iVisible, $constant_int_0, icon);
						result['getCellFormatter']()['setAlignment'](iVisible, $constant_int_0, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'), $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_MIDDLE'));
						$$label = $m['HTML'](c['getLegendLabel']());
						$m['GChartUtil']['setFontWeight']($$label, self['getLegendFontWeight']());
						$m['GChartUtil']['setFontStyle']($$label, self['getLegendFontStyle']());
						$m['GChartUtil']['setColor']($$label, self['getLegendFontColor']());
						$m['GChartUtil']['setFontSize']($$label, self['getLegendFontSize']());
						result['setWidget'](iVisible, $constant_int_1, $$label);
						result['getCellFormatter']()['setAlignment'](iVisible, $constant_int_1, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT'), $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_MIDDLE'));
						iVisible = (typeof ($add109=iVisible)==typeof ($add110=$constant_int_1) && (typeof $add109=='number'||typeof $add109=='string')?
							$add109+$add110:
							$p['op_add']($add109,$add110));
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['pp']]);
			$cls_definition['createLegend'] = $method;
			$method = $pyjs__bind_method2('getDefaultLegendThickness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul17,c,$bool93,EXTRA_WIDTH,$and14,$iter7_nextval,$and13,i,$iter7_iter,$iter7_array,$add112,$bool92,$mul19,$add111,maxLen,$iter7_idx,nCurves,$iter7_type,$mul18,$mul20;
				EXTRA_WIDTH = $constant_int_5;
				maxLen = $constant_int_0;
				nCurves = self['getNCurves']();
				$iter7_iter = $p['range'](nCurves);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					i = $iter7_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool93=((($bool92=$and13=c['isVisible']()) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
						false :
						(typeof $bool92=='object'?
							(typeof $bool92.__nonzero__=='function'?
								$bool92.__nonzero__() :
								(typeof $bool92.__len__=='function'?
									($bool92.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq'](null, c['getLegendLabel']()):$and13)) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
							false :
							(typeof $bool93=='object'?
								(typeof $bool93.__nonzero__=='function'?
									$bool93.__nonzero__() :
									(typeof $bool93.__len__=='function'?
										($bool93.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxLen = $p['max'](maxLen, $m['GChartUtil']['htmlWidth'](c['getLegendLabel']()));
					}
				}
				return $p['int']((typeof ($mul19=(typeof ($mul17=(typeof ($add111=maxLen)==typeof ($add112=EXTRA_WIDTH) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					$p['op_add']($add111,$add112)))==typeof ($mul18=self['getLegendFontSize']()) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($mul20=$m['TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND']) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDefaultLegendThickness'] = $method;
			$method = $pyjs__bind_method2('getNVisibleCurvesOnLegend', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add114,$iter8_idx,$bool95,i,nCurves,$iter8_array,$add113,$iter8_iter,$and16,result,$and15,$bool94,$iter8_type,$iter8_nextval;
				result = $constant_int_0;
				nCurves = self['getNCurves']();
				$iter8_iter = $p['range'](nCurves);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					if ((($bool95=((($bool94=$and15=self['getSystemCurve'](i)['isVisible']()) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94.__nonzero__=='function'?
								$bool94.__nonzero__() :
								(typeof $bool94.__len__=='function'?
									($bool94.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_is'](self['getSystemCurve'](i)['getLegendLabel'](), null):$and15)) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
							false :
							(typeof $bool95=='object'?
								(typeof $bool95.__nonzero__=='function'?
									$bool95.__nonzero__() :
									(typeof $bool95.__len__=='function'?
										($bool95.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = (typeof ($add113=result)==typeof ($add114=$constant_int_1) && (typeof $add113=='number'||typeof $add113=='string')?
							$add113+$add114:
							$p['op_add']($add113,$add114));
					}
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNVisibleCurvesOnLegend'] = $method;
			$method = $pyjs__bind_method2('setDefaultBorderColor', function(curve, index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					curve = arguments[1];
					index = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $10,$len7,$mod4,$mod3,$9;
				curve['getSymbol']()['setBorderColor']((typeof ($9=$p['getattr'](self, 'defaultSymbolBorderColors')).__array != 'undefined'?
					((typeof $9.__array[$10=(typeof ($mod3=index)==typeof ($mod4=(($len7=$p['getattr'](self, 'defaultSymbolBorderColors')) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7)))))) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4))]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__((typeof ($mod3=index)==typeof ($mod4=(($len7=$p['getattr'](self, 'defaultSymbolBorderColors')) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7)))))) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)))));
				return null;
			}
	, 1, [null,null,['self'],['curve'],['index']]);
			$cls_definition['setDefaultBorderColor'] = $method;
			$method = $pyjs__bind_method2('realizeCurve', function(c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					c = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var arp,canvasRegion,nPoints,$bool110,$cmp49,rpIndex,$and23,$and22,$and21,$and20,$cmp52,grp,$iter9_iter,$iter9_nextval,$iter9_idx,$or21,$or20,$iter9_type,$sub54,$sub53,$bool105,$bool104,$bool107,$bool106,$bool101,$bool100,$bool103,$bool102,$cmp51,$cmp50,$and18,$and19,$bool109,$bool108,internalIndex,$bool96,$bool97,$bool98,$bool99,j,$iter9_array,$or19,$or18,$and17;
				if ((($bool96=c['isValidated']()) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
						false :
						(typeof $bool96=='object'?
							(typeof $bool96.__nonzero__=='function'?
								$bool96.__nonzero__() :
								(typeof $bool96.__len__=='function'?
									($bool96.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				internalIndex = self['getInternalCurveIndex'](c);
				rpIndex = self['getRenderingPanelIndex'](internalIndex);
				grp = self['plotPanel']['getGraphicsRenderingPanel'](rpIndex);
				arp = self['plotPanel']['getAnnotationRenderingPanel'](rpIndex);
				if ((($bool97=$p['op_eq']($p['getattr']($m['GChartWidgets'], 'DECORATIVE_RENDERING_PANEL_INDEX'), rpIndex)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97.__nonzero__=='function'?
								$bool97.__nonzero__() :
								(typeof $bool97.__len__=='function'?
									($bool97.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool98=$p['op_eq']($constant_int_0, internalIndex)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
							false :
							(typeof $bool98=='object'?
								(typeof $bool98.__nonzero__=='function'?
									$bool98.__nonzero__() :
									(typeof $bool98.__len__=='function'?
										($bool98.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						grp['beginRendering'](null);
						arp['beginRendering']();
					}
					c['setWasCanvasRendered'](false);
				}
				else if ((($bool102=((($bool99=$and17=$p['op_eq']($constant_int_0, c['getSymbol']()['getFillSpacing']())) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99.__nonzero__=='function'?
							$bool99.__nonzero__() :
							(typeof $bool99.__len__=='function'?
								($bool99.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool100=$and18=((($cmp49=$constant_int_0)===($cmp50=c['getSymbol']()['getFillThickness']())?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == -1)) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool101=$and19=!$p['op_eq'](null, self['getCanvasFactory']())) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101.__nonzero__=='function'?
							$bool101.__nonzero__() :
							(typeof $bool101.__len__=='function'?
								($bool101.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?c['isVisible']():$and19):$and18):$and17)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
						false :
						(typeof $bool102=='object'?
							(typeof $bool102.__nonzero__=='function'?
								$bool102.__nonzero__() :
								(typeof $bool102.__len__=='function'?
									($bool102.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grp['maybeAddCanvas']();
					canvasRegion = c['getContainingRectangle']($p['getattr'](self, 'plotPanel'));
					grp['beginRendering'](canvasRegion);
					arp['beginRendering']();
					c['setWasCanvasRendered'](true);
				}
				else {
					grp['beginRendering'](null);
					arp['beginRendering']();
					c['setWasCanvasRendered'](false);
				}
				if ((($bool103=c['isVisible']()) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103.__nonzero__=='function'?
								$bool103.__nonzero__() :
								(typeof $bool103.__len__=='function'?
									($bool103.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool108=((($bool105=$and21=((((($cmp51=self['getCurveIndex'](c))===($cmp52=$constant_int_0)?0:
						(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
							($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
							$p['cmp']($cmp51, $cmp52))))|1) == 1)) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
						false :
						(typeof $bool105=='object'?
							(typeof $bool105.__nonzero__=='function'?
								$bool105.__nonzero__() :
								(typeof $bool105.__len__=='function'?
									($bool105.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool106=$and22=!(($bool104=$m['isMouseAnchored'](c['getSymbol']()['getSymbolType']())) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
						false :
						(typeof $bool104=='object'?
							(typeof $bool104.__nonzero__=='function'?
								$bool104.__nonzero__() :
								(typeof $bool104.__len__=='function'?
									($bool104.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
						false :
						(typeof $bool106=='object'?
							(typeof $bool106.__nonzero__=='function'?
								$bool106.__nonzero__() :
								(typeof $bool106.__len__=='function'?
									($bool106.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool107=$or18=c['getSymbol']()['getHoverSelectionEnabled']()) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
						false :
						(typeof $bool107=='object'?
							(typeof $bool107.__nonzero__=='function'?
								$bool107.__nonzero__() :
								(typeof $bool107.__len__=='function'?
									($bool107.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or18:c['getSymbol']()['getHoverAnnotationEnabled']()):$and22):$and21)) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
							false :
							(typeof $bool108=='object'?
								(typeof $bool108.__nonzero__=='function'?
									$bool108.__nonzero__() :
									(typeof $bool108.__len__=='function'?
										($bool108.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c['bandSeparatePoints']();
					}
					else {
						c['clearBandList']();
					}
					nPoints = c['getNPoints']();
					$iter9_iter = $p['range'](nPoints);
					if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter.__iter__();
						$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						j = $iter9_nextval;
						c['realizePoint']($p['getattr'](self, 'plotPanel'), grp, arp, j);
					}
				}
				if ((($bool110=((($bool109=$or20=!$p['op_eq']($p['getattr']($m['GChartWidgets'], 'DECORATIVE_RENDERING_PANEL_INDEX'), rpIndex)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
					false :
					(typeof $bool109=='object'?
						(typeof $bool109.__nonzero__=='function'?
							$bool109.__nonzero__() :
							(typeof $bool109.__len__=='function'?
								($bool109.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or20:$p['op_eq'](internalIndex, (typeof ($sub53=$m['N_PRE_SYSTEM_CURVES'])==typeof ($sub54=$constant_int_1) && (typeof $sub53=='number'||typeof $sub53=='string')?
					$sub53-$sub54:
					$p['op_sub']($sub53,$sub54))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
						false :
						(typeof $bool110=='object'?
							(typeof $bool110.__nonzero__=='function'?
								$bool110.__nonzero__() :
								(typeof $bool110.__len__=='function'?
									($bool110.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grp['endRendering']();
					arp['endRendering']();
				}
				c.__is_instance__ && typeof c.__setattr__ == 'function' ? c.__setattr__('validated', true) : $p['setattr'](c, 'validated', true); 
				return null;
			}
	, 1, [null,null,['self'],['c']]);
			$cls_definition['realizeCurve'] = $method;
			$method = $pyjs__bind_method2('invalidateEveryCurve', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$11,$12,i,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx,$len8;
				$iter10_iter = $p['range']((($len8=$p['getattr'](self, 'curves')) === null?$constant_int_0:
					(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
								$p['len']($len8))))));
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					(typeof ($11=$p['getattr'](self, 'curves')).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i))['invalidate']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invalidateEveryCurve'] = $method;
			$method = $pyjs__bind_method2('invalidateAccessibleCurves', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_iter,i,nCurves,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx;
				nCurves = self['getNCurves']();
				$iter11_iter = $p['range'](nCurves);
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					self['getSystemCurve'](i)['invalidate']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invalidateAccessibleCurves'] = $method;
			$method = $pyjs__bind_method2('invalidateAllSlices', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,c,i,nCurves,$iter12_array,$iter12_iter,$bool111,$iter12_idx,$iter12_nextval;
				nCurves = self['getNCurves']();
				$iter12_iter = $p['range'](nCurves);
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					i = $iter12_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool111=$p['isinstance'](c['getSymbol']()['getSymbolType'](), $p['getattr']($m['SymbolType'], 'PieSliceSymbolType'))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
							false :
							(typeof $bool111=='object'?
								(typeof $bool111.__nonzero__=='function'?
									$bool111.__nonzero__() :
									(typeof $bool111.__len__=='function'?
										($bool111.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c['invalidate']();
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invalidateAllSlices'] = $method;
			$method = $pyjs__bind_method2('invalidateDependentSlices', function(iFirstCurve) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iFirstCurve = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter13_nextval,$iter13_iter,i,nCurves,$iter13_array,$bool112,$bool113,$iter13_idx,$bool114,$iter13_type;
				if ((($bool112=self['isSystemCurveIndex'](iFirstCurve)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
						false :
						(typeof $bool112=='object'?
							(typeof $bool112.__nonzero__=='function'?
								$bool112.__nonzero__() :
								(typeof $bool112.__len__=='function'?
									($bool112.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				nCurves = self['getNCurves']();
				$iter13_iter = $p['range'](iFirstCurve, nCurves);
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					i = $iter13_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool113=$p['isinstance'](c['getSymbol']()['getSymbolType'](), $p['getattr']($m['SymbolType'], 'PieSliceSymbolType'))) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
							false :
							(typeof $bool113=='object'?
								(typeof $bool113.__nonzero__=='function'?
									$bool113.__nonzero__() :
									(typeof $bool113.__len__=='function'?
										($bool113.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c['invalidate']();
					}
					else if ((($bool114=$p['op_eq'](i, iFirstCurve)) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
							false :
							(typeof $bool114=='object'?
								(typeof $bool114.__nonzero__=='function'?
									$bool114.__nonzero__() :
									(typeof $bool114.__len__=='function'?
										($bool114.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['iFirstCurve']]);
			$cls_definition['invalidateDependentSlices'] = $method;
			$method = $pyjs__bind_method2('setDefaultPieSliceOrientations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,i,nCurves,$add115,c,$add116,$iter14_iter,$bool115,$iter14_idx,$iter14_nextval;
				self['setLastPieSliceOrientation'](self['getInitialPieSliceOrientation']());
				nCurves = self['getNCurves']();
				$iter14_iter = $p['range'](nCurves);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					c = self['getSystemCurve'](i);
					if ((($bool115=$p['isinstance'](c['getSymbol']()['getSymbolType'](), $p['getattr']($m['SymbolType'], 'PieSliceSymbolType'))) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
							false :
							(typeof $bool115=='object'?
								(typeof $bool115.__nonzero__=='function'?
									$bool115.__nonzero__() :
									(typeof $bool115.__len__=='function'?
										($bool115.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c['getSymbol']()['setDefaultPieSliceOrientation'](self['getLastPieSliceOrientation']());
						self['setLastPieSliceOrientation']((typeof ($add115=c['getSymbol']()['getDecodedPieSliceOrientation']())==typeof ($add116=c['getSymbol']()['getPieSliceSize']()) && (typeof $add115=='number'||typeof $add115=='string')?
							$add115+$add116:
							$p['op_add']($add115,$add116)));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setDefaultPieSliceOrientations'] = $method;
			$method = $pyjs__bind_method2('realizePlotPanel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter15_iter,i,nCurves,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type;
				self['setDefaultPieSliceOrientations']();
				nCurves = self['getNCurves']();
				$iter15_iter = $p['range']((typeof ($usub15=$m['N_SYSTEM_CURVES'])=='number'?
					-$usub15:
					$p['op_usub']($usub15)), nCurves);
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
					c = self['getSystemCurve'](i);
					self['realizeCurve'](c);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['realizePlotPanel'] = $method;
			$method = $pyjs__bind_method2('isHoverFeedbackRenderingPanel', function(rpIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					rpIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp53,result,$cmp54;
				result = ((($cmp53=rpIndex)===($cmp54=self['getNCurves']())?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) == 1);
				return result;
			}
	, 1, [null,null,['self'],['rpIndex']]);
			$cls_definition['isHoverFeedbackRenderingPanel'] = $method;
			$method = $pyjs__bind_method2('onUnload', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Composite']['onUnload'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('wasUnloaded', true) : $p['setattr'](self, 'wasUnloaded', true); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onUnload'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'df14eeb754232219b6584ad4fb4eabfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,c,$bool119,$iter16_iter,$iter16_type,i,nCurves,$iter16_idx,$bool120,$bool116,$bool117,$iter16_nextval,$bool118,$and24,$cmp55,isUpToDate,$and25,$cmp56;
				$m['Composite']['onLoad'](self);
				if ((($bool117=((($bool116=$and24=$p['getattr'](self, 'wasUnloaded')) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116.__nonzero__=='function'?
							$bool116.__nonzero__() :
							(typeof $bool116.__len__=='function'?
								($bool116.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp55=self['plotPanel']['getRenderingPanelCount']())===($cmp56=$constant_int_0)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == 1):$and24)) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
						false :
						(typeof $bool117=='object'?
							(typeof $bool117.__nonzero__=='function'?
								$bool117.__nonzero__() :
								(typeof $bool117.__len__=='function'?
									($bool117.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					isUpToDate = !(($bool118=(typeof isUpdateNeeded == "undefined"?$m.isUpdateNeeded:isUpdateNeeded)()) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
						false :
						(typeof $bool118=='object'?
							(typeof $bool118.__nonzero__=='function'?
								$bool118.__nonzero__() :
								(typeof $bool118.__len__=='function'?
									($bool118.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
					nCurves = self['getNCurves']();
					$iter16_iter = $p['range'](nCurves);
					if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
						$iter16_type = 0;
					} else {
						$iter16_iter = $iter16_iter.__iter__();
						$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter16_idx = 0;
					while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
						i = $iter16_nextval;
						c = (typeof getCurve == "undefined"?$m.getCurve:getCurve)(i);
						if ((($bool119=c['isCanvasRendered']()) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
								false :
								(typeof $bool119=='object'?
									(typeof $bool119.__nonzero__=='function'?
										$bool119.__nonzero__() :
										(typeof $bool119.__len__=='function'?
											($bool119.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							c['invalidate']();
							if ((($bool120=isUpToDate) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
									false :
									(typeof $bool120=='object'?
										(typeof $bool120.__nonzero__=='function'?
											$bool120.__nonzero__() :
											(typeof $bool120.__len__=='function'?
												($bool120.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								self['realizeCurve'](c);
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			var $bases = new Array($m['Composite'],$m['FocusHandler'],$m['KeyboardHandler'],$m['MouseHandler'],$m['ClickHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GChart', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.GChart */


/* end module: pyjamas.chart.GChart */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui.UIObject', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.DEFAULT_X_CHARTSIZE', 'pyjamas.chart.GChartConsts.DEFAULT_Y_CHARTSIZE', 'pyjamas.chart.GChartConsts.USE_CSS', 'pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart.GChartConsts.DEFAULT_BLANK_IMAGE_URL_FULLPATH', 'pyjamas.chart.GChartConsts.DEFAULT_SYMBOL_BORDER_COLORS', 'pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BACKGROUND_COLOR', 'pyjamas.chart.GChartConsts.N_SYSTEM_CURVES', 'pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_WIDTH', 'pyjamas.chart.GChartConsts.DEFAULT_LEGEND_BORDER_STYLE', 'pyjamas.chart.GChartConsts.DEFAULT_FONT_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_LEGEND_FONTSIZE', 'pyjamas.chart.GChartConsts.DEFAULT_FONT_STYLE', 'pyjamas.chart.GChartConsts.DEFAULT_FONT_WEIGHT', 'pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BACKGROUND_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_STYLE', 'pyjamas.chart.GChartConsts.DEFAULT_PLOTAREA_BORDER_WIDTH', 'pyjamas.chart.GChartConsts.PLOTAREA_ID', 'pyjamas.chart.GChartConsts.TITLE_ID', 'pyjamas.chart.GChartConsts.YAXIS_ID', 'pyjamas.chart.GChartConsts.YTICKS_ID', 'pyjamas.chart.GChartConsts.YGRIDLINES_ID', 'pyjamas.chart.GChartConsts.YLABEL_ID', 'pyjamas.chart.GChartConsts.Y2AXIS_ID', 'pyjamas.chart.GChartConsts.Y2TICKS_ID', 'pyjamas.chart.GChartConsts.Y2GRIDLINES_ID', 'pyjamas.chart.GChartConsts.Y2LABEL_ID', 'pyjamas.chart.GChartConsts.LEGEND_ID', 'pyjamas.chart.GChartConsts.XAXIS_ID', 'pyjamas.chart.GChartConsts.XTICKS_ID', 'pyjamas.chart.GChartConsts.XGRIDLINES_ID', 'pyjamas.chart.GChartConsts.XLABEL_ID', 'pyjamas.chart.GChartConsts.FOOTNOTES_ID', 'pyjamas.chart.GChartConsts.HOVER_CURSOR_ID', 'pyjamas.chart.GChartConsts.HOVER_ANNOTATION_ID', 'pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart.GChartConsts.N_POST_SYSTEM_CURVES', 'pyjamas.chart.GChartConsts.DEFAULT_GRID_COLOR', 'pyjamas.chart.GChartConsts.GRID_BORDER_STYLE', 'pyjamas.chart.GChartConsts.GRID_BORDER_WIDTH', 'pyjamas.chart.GChartConsts.DEFAULT_GRID_WIDTH', 'pyjamas.chart.GChartConsts.DEFAULT_GRID_HEIGHT', 'pyjamas.chart.GChartConsts.TICK_BORDER_STYLE', 'pyjamas.chart.GChartConsts.TICK_BORDER_WIDTH', 'pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart.GChartConsts.DEFAULT_TITLE_THICKNESS', 'pyjamas.chart.GChartConsts.DEFAULT_FOOTNOTES_THICKNESS', 'pyjamas.chart.GChartConsts.TICK_CHARWIDTH_TO_FONTSIZE_LOWERBOUND', 'pyjamas.chart.GChartConsts.TRANSPARENT_BORDER_COLOR', 'pyjamas.chart.GChartConsts.YAxisId', 'pyjamas.chart.Double', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.chart.TickLocation', 'pyjamas.chart.TouchedPointUpdateOption', 'pyjamas.chart.Curve.Curve', 'pyjamas.chart.Curve', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.GChartWidgets.PlotPanel', 'pyjamas.chart.GChartWidgets', 'pygwt', 'pyjamas.chart.Axis.XAxis', 'pyjamas.chart.Axis', 'pyjamas.chart.Axis.YAxis', 'pyjamas.chart.Axis.Y2Axis', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener']
*/
