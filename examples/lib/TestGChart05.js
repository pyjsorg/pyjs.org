/* start module: TestGChart05 */
$pyjs.loaded_modules['TestGChart05'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestGChart05'].__was_initialized__) return $pyjs.loaded_modules['TestGChart05'];
	var $m = $pyjs.loaded_modules["TestGChart05"];
	$m.__repr__ = function() { return "<module: TestGChart05>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestGChart05';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_95 = new $p['int'](95);
		$m['GChartTestAppUtil'] = $p['___import___']('GChartTestAppUtil', null);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['GChartConsts'] = $p['___import___']('pyjamas.chart.GChartConsts', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['TestGChart05'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TestGChart05';
			$cls_definition.__md5__ = '7a9eba9e1a4fc658032c895f84d584f3';
			$method = $pyjs__bind_method2('__init__', function(testCanvas) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					testCanvas = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7a9eba9e1a4fc658032c895f84d584f3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool1,$bool6,$bool4,$bool5;
				$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{XChartSize:$constant_int_300, YChartSize:$constant_int_300}, self]);
				self['setChartTitle']($m['GChartTestAppUtil']['getTitle'](self));
				self['setClipToPlotArea'](true);
				self['setChartFootnotes']('Check: an unclipped point at each corner.<br> No x-ticks.<br>Line clipped at plot area limits<br>Three clipped-off pies visible<br>Every at-least-partly visible symbol labeled.');
				self['getXAxis']()['setHasGridlines'](true);
				self['getY2Axis']()['setHasGridlines'](true);
				self['addCurve']();
				if ((($bool1=testCanvas) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
				self['getCurve']()['addPoint']($constant_int_0, (typeof ($usub1=$constant_int_95)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_0, (typeof ($usub2=$constant_int_90)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_0, $constant_int_0);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_0, $constant_int_5);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['setLegendLabel']('On Y');
				self['addCurve']();
				if ((($bool2=testCanvas) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y2_AXIS'));
				self['getCurve']()['addPoint']($constant_int_90, (typeof ($usub3=$constant_int_50)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_90, (typeof ($usub4=$constant_int_45)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_90, $constant_int_45);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_90, $constant_int_50);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['setLegendLabel']('On Y2');
				self['addCurve']();
				self['getCurve']()['setLegendLabel']('clipped line');
				self['getCurve']()['getSymbol']()['setBackgroundColor']('blue');
				self['getCurve']()['getSymbol']()['setBorderColor']('blue');
				if ((($bool3=testCanvas) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				else {
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_10);
				}
				self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_3);
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
				self['getCurve']()['addPoint']($constant_int_0, (typeof ($usub5=$constant_int_100)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getCurve']()['addPoint']($constant_int_100, $constant_int_0);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['addCurve']();
				if ((($bool4=testCanvas) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				self['getCurve']()['setLegendLabel']('inside pie');
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_HORIZONTAL_SHADING'));
				self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_1);
				self['getCurve']()['getSymbol']()['setWidth']($constant_int_100);
				self['getCurve']()['getSymbol']()['setHeight']($constant_int_0);
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
				self['getCurve']()['addPoint']($constant_int_45, $constant_int_0);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['addCurve']();
				if ((($bool5=testCanvas) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				self['getCurve']()['setLegendLabel']('outside right pie');
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_HATCHED_SHADING'));
				self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_1);
				self['getCurve']()['getSymbol']()['setWidth']($constant_int_100);
				self['getCurve']()['getSymbol']()['setHeight']($constant_int_0);
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y2_AXIS'));
				self['getCurve']()['addPoint']($constant_int_95, $constant_int_0);
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['addCurve']();
				if ((($bool6=testCanvas) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
				}
				self['getCurve']()['setLegendLabel']('outside bottom pie');
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_VERTICAL_SHADING'));
				self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_1);
				self['getCurve']()['getSymbol']()['setWidth']($constant_int_100);
				self['getCurve']()['getSymbol']()['setHeight']($constant_int_0);
				self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
				self['getCurve']()['addPoint']($constant_int_45, (typeof ($usub6=$constant_int_95)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
				self['getXAxis']()['setAxisLabel']('<small><small><small>X</small></small></small>');
				self['getXAxis']()['setTickCount']($constant_int_0);
				self['getXAxis']()['setAxisMin'](0.0);
				self['getXAxis']()['setAxisMax'](90.0);
				self['getYAxis']()['setAxisMin']((typeof ($usub7=90.0)=='number'?
					-$usub7:
					$p['op_usub']($usub7)));
				self['getYAxis']()['setAxisMax'](0.0);
				self['getY2Axis']()['setAxisMin']((typeof ($usub8=45.0)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
				self['getY2Axis']()['setAxisMax']($constant_int_45);
				return null;
			}
	, 1, [null,null,['self'],['testCanvas']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestGChart05', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TestGChart05 */


/* end module: TestGChart05 */


/*
PYJS_DEPS: ['GChartTestAppUtil', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.SymbolType']
*/
