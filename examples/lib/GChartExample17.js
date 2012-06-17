/* start module: GChartExample17 */
$pyjs.loaded_modules['GChartExample17'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample17'].__was_initialized__) return $pyjs.loaded_modules['GChartExample17'];
	var $m = $pyjs.loaded_modules["GChartExample17"];
	$m.__repr__ = function() { return "<module: GChartExample17>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample17';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_200 = new $p['int'](200);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_3 = new $p['int'](3);
		$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', null, null, false);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['CurveNumberHoverParameterInterpreter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample17';
			$cls_definition.__md5__ = '407b916d7bd5f0e3d59a7dadb6df97e7';
			$method = $pyjs__bind_method2('getHoverParameter', function(paramName, hoveredOver) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					paramName = arguments[1];
					hoveredOver = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '407b916d7bd5f0e3d59a7dadb6df97e7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1,result;
				result = null;
				if ((($bool1=$p['op_eq']('curveNumber', paramName)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					result = $p['str'](hoveredOver['getParent']()['getParent']()['getCurveIndex'](hoveredOver['getParent']()));
				}
				return result;
			}
	, 1, [null,null,['self'],['paramName'],['hoveredOver']]);
			$cls_definition['getHoverParameter'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CurveNumberHoverParameterInterpreter', $p['tuple']($bases), $data);
		})();
		$m['GChartExample17'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample17';
			$cls_definition.__md5__ = '403c9bc84af97c5b5c77cb8cd2187cf1';
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
					if (self.prototype.__md5__ !== '403c9bc84af97c5b5c77cb8cd2187cf1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,iPoint,iCurve,$iter1_iter,$add2,$iter2_idx,$add1,$mul1,$iter1_array,template,$iter2_type,$mul2,$iter2_array,$iter1_idx;
				$m['GChart']['__init__'](self);
				self['setChartSize']($constant_int_200, $constant_int_200);
				self['setBorderWidth']('0px');
				self['setHoverParameterInterpreter']($m['CurveNumberHoverParameterInterpreter']());
				template = $m['formatAsHovertext']('Curve #${curveNumber}:<br>x=${x}, y=${y}');
				$iter1_iter = $p['range']($constant_int_3);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					iCurve = $iter1_nextval;
					self['addCurve']();
					self['getCurve']()['getSymbol']()['setHovertextTemplate'](template);
					$iter2_iter = $p['range']($constant_int_10);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						iPoint = $iter2_nextval;
						self['getCurve']()['addPoint'](iPoint, (typeof ($mul1=(typeof ($add1=iCurve)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)))==typeof ($mul2=iPoint) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample17', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample17 */


/* end module: GChartExample17 */


/*
PYJS_DEPS: ['pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.HovertextChunk', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart']
*/
