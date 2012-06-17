/* start module: GChartExample01 */
$pyjs.loaded_modules['GChartExample01'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample01'].__was_initialized__) return $pyjs.loaded_modules['GChartExample01'];
	var $m = $pyjs.loaded_modules["GChartExample01"];
	$m.__repr__ = function() { return "<module: GChartExample01>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample01';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_10 = new $p['int'](10);
		var $constant_int_150 = new $p['int'](150);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['GChartExample01'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample01';
			$cls_definition.__md5__ = 'feb37c7933c7d1b09f9fd10aa4831432';
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
					if (self.prototype.__md5__ !== 'feb37c7933c7d1b09f9fd10aa4831432') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$mul2,$mul1,$iter1_idx;
				$m['GChart']['__init__'](self);
				self['setChartTitle']('<b>x<sup>2</sup> vs x</b>');
				self['setChartSize']($constant_int_150, $constant_int_150);
				self['addCurve']();
				$iter1_iter = $p['range']($constant_int_10);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['getCurve']()['addPoint'](i, (typeof ($mul1=i)==typeof ($mul2=i) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				}
				self['getCurve']()['setLegendLabel']('x<sup>2</sup>');
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_SOUTH'));
				self['getCurve']()['getSymbol']()['setBackgroundColor']('red');
				self['getCurve']()['getSymbol']()['setBorderColor']('black');
				self['getCurve']()['getSymbol']()['setModelWidth'](1.0);
				self['getXAxis']()['setAxisLabel']('<b>x</b>');
				self['getXAxis']()['setHasGridlines'](true);
				self['getYAxis']()['setAxisLabel']('<b>x<sup>2</sup></b>');
				self['getYAxis']()['setHasGridlines'](true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample01', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample01 */


/* end module: GChartExample01 */


/*
PYJS_DEPS: ['pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.SymbolType']
*/
