/* start module: GChartExample07 */
$pyjs.loaded_modules['GChartExample07'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample07'].__was_initialized__) return $pyjs.loaded_modules['GChartExample07'];
	var $m = $pyjs.loaded_modules["GChartExample07"];
	$m.__repr__ = function() { return "<module: GChartExample07>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample07';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_0 = new $p['int'](0);
		$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', null, null, false);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['GChartExample07'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample07';
			$cls_definition.__md5__ = 'b4c25d1bab42f2a0b01488c699ac9374';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b4c25d1bab42f2a0b01488c699ac9374') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$6,$add5,pieMarketShare,$div1,$mul2,$iter1_array,$11,$sub2,$sub1,$iter1_nextval,pieColors,pieTypes,$8,$9,$div2,$7,$4,$5,$2,$3,$mul1,$1,$10,$iter1_type,$12,i,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$len1;
				$m['GChart']['__init__'](self);
				pieMarketShare = $p['list']([0.65, 0.2, 0.1, 0.05]);
				pieTypes = $p['list'](['Apple', 'Cherry', 'Pecan', 'Bannana']);
				pieColors = $p['list'](['green', 'red', 'maroon', 'yellow']);
				self['setChartSize']($constant_int_300, $constant_int_200);
				self['setChartTitle']((typeof ($add1='<h3>2008 Sales by Pie Flavor')==typeof ($add2='<br>(Puny Pies, Inc.) </h3>') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				self['setLegendVisible'](false);
				self['getXAxis']()['setAxisVisible'](false);
				self['getYAxis']()['setAxisVisible'](false);
				self['getXAxis']()['setAxisMin']($constant_int_0);
				self['getXAxis']()['setAxisMax']($constant_int_10);
				self['getXAxis']()['setTickCount']($constant_int_0);
				self['getYAxis']()['setAxisMin']($constant_int_0);
				self['getYAxis']()['setAxisMax']($constant_int_10);
				self['getYAxis']()['setTickCount']($constant_int_0);
				self['setInitialPieSliceOrientation']((typeof ($sub1=0.75)==typeof ($sub2=(typeof ($div1=(typeof ($1=pieMarketShare).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
				$iter1_iter = $p['range']((($len1=pieMarketShare) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['addCurve']();
					self['getCurve']()['addPoint']($constant_int_5, $constant_int_5);
					self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_OPTIMAL_SHADING'));
					self['getCurve']()['getSymbol']()['setBorderColor']('white');
					self['getCurve']()['getSymbol']()['setBackgroundColor']((typeof ($3=pieColors).__array != 'undefined'?
						((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(i)));
					self['getCurve']()['getSymbol']()['setModelWidth']($constant_int_6);
					self['getCurve']()['getSymbol']()['setHeight']($constant_int_0);
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_0);
					self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_3);
					self['getCurve']()['getSymbol']()['setHovertextTemplate']($m['formatAsHovertext']((typeof ($add5=(typeof ($add3=(typeof ($5=pieTypes).__array != 'undefined'?
						((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(i)))==typeof ($add4=', ') && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)))==typeof ($add6=$p['sprintf']('%d%%', $p['round']((typeof ($mul1=$constant_int_100)==typeof ($mul2=(typeof ($7=pieMarketShare).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))));
					self['getCurve']()['getSymbol']()['setPieSliceSize']((typeof ($9=pieMarketShare).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i)));
					self['getCurve']()['getPoint']()['setAnnotationText']((typeof ($11=pieTypes).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i)));
					self['getCurve']()['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'OUTSIDE_PIE_ARC'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample07', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample07 */


/* end module: GChartExample07 */


/*
PYJS_DEPS: ['pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.HovertextChunk', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType']
*/
