/* start module: GChartExample04 */
$pyjs['loaded_modules']['GChartExample04'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GChartExample04']['__was_initialized__']) return $pyjs['loaded_modules']['GChartExample04'];
	var $m = $pyjs['loaded_modules']['GChartExample04'];
	$m['__repr__'] = function() { return '<module: GChartExample04>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample04';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_450 = new $p['int'](450);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_2 = new $p['int'](2);
		$m['math'] = $p['___import___']('math', null);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', null, null, false);
		$m['log10'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $div2,$div1;
			return (typeof ($div1=$m['math']['log'](x))==typeof ($div2=$m['math']['log'](10.0)) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
		};
		$m['log10']['__name__'] = 'log10';

		$m['log10']['__bind_type__'] = 0;
		$m['log10']['__args__'] = [null,null,['x']];
		$m['GChartExample04'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GChartExample04';
			$cls_definition['__md5__'] = 'faa72718720075a230a553002e373d2b';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'faa72718720075a230a553002e373d2b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$cmp2,i,$iter1_iter,$iter2_type,$iter2_idx,$bool1,$mul1,$iter1_array,$mul2,y,x,$mul4,$mul3,$cmp1,$iter2_array,$iter1_idx;
				$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{'XChartSize':$constant_int_300, 'YChartSize':$constant_int_450}, self]);
				self['setChartTitle']('<h2>2<sup>x</sup> vs x</h2>');
				self['addCurve']();
				self['getCurve']()['getSymbol']()['setHovertextTemplate']($m['formatAsHovertext']('${y}=2^${x}'));
				self['getCurve']()['setLegendLabel']('<b>2<sup>x</sup></b>');
				self['getCurve']()['getSymbol']()['setBackgroundColor']('red');
				self['getCurve']()['getSymbol']()['setBorderColor']('black');
				self['getCurve']()['getSymbol']()['setWidth']($constant_int_9);
				self['getCurve']()['getSymbol']()['setHeight']($constant_int_9);
				$iter1_iter = $p['range']((typeof ($usub1=$constant_int_2)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), $constant_int_4);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['getCurve']()['addPoint'](i, $m['log10']($m['math']['pow']($constant_int_2, i)));
				}
				self['getYAxis']()['setTickLabelFormat']('=10^#.##');
				self['getYAxis']()['addTick']($m['log10'](0.1));
				x = 0.1;
				while ((($bool1=((($cmp1=x)===($cmp2=$constant_int_10)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$iter2_iter = $p['range']($constant_int_2, $constant_int_11);
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						y = $iter2_nextval;
						self['getYAxis']()['addTick']($m['log10']((typeof ($mul1=x)==typeof ($mul2=y) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))));
					}
					x = (typeof ($mul3=x)==typeof ($mul4=$constant_int_10) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
				}
				self['getXAxis']()['setAxisLabel']('<b>x</b>');
				self['getXAxis']()['setHasGridlines'](true);
				self['getXAxis']()['setTickCount']($constant_int_6);
				self['getYAxis']()['setAxisLabel']('<b>2<sup>x</sup></b>');
				self['getYAxis']()['setHasGridlines'](true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample04', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample04 */


/* end module: GChartExample04 */


/*
PYJS_DEPS: ['math', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas.chart.HovertextChunk']
*/
